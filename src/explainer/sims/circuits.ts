// Circuit engine (direct current, and alternating current through resistances): describe the parts and which junctions they join, and it
// works out every current, voltage and power from Kirchhoff's laws. Plain TypeScript, no
// React. Series, parallel and mixed circuits all use the same solver, so nothing depends on
// a memorised formula. Switches and values can change at set frames, or ramp smoothly over a
// stretch of frames, and parts can be added mid-run; the charge that has passed through each
// part is kept, so moving charges never jump when something changes.
//
// Added 14 November 2026: an alternating source ('ac'), an ideal transformer and a motor
// with a back emf. A circuit of resistances has no memory, so at every instant an
// alternating circuit is solved exactly as a direct one with the source's voltage at that
// instant. Capacitors and self-induction (a coil delaying its current) are not modelled.

export type PartKind = 'battery' | 'resistor' | 'lamp' | 'switch' | 'ammeter' | 'voltmeter' | 'wire' | 'motor' | 'rheostat' | 'coil' | 'ac' | 'transformer';
/** Parts that behave as a plain resistance in a steady (DC) circuit. */
const RESISTIVE: readonly PartKind[] = ['resistor', 'lamp', 'motor', 'rheostat', 'coil'];
export type Part = {
	id: string;
	kind: PartKind;
	/**
	 * Names of the two junctions this part joins. Parts that share a name are connected.
	 * For a battery, `from` is its negative terminal and `to` its positive terminal.
	 */
	from: string; to: string;
	/** Battery: its EMF in volts. (Alternating source: its voltage at this instant; a run fills this in.) */
	emf?: number;
	/**
	 * Alternating source: its peak voltage, its frequency in hertz and its phase in radians
	 * (voltage = peak x sin(2 pi f t + phase), positive when `to` is the higher terminal).
	 * Real mains is far too fast to watch: choose a slow model frequency, about 0.5 Hz.
	 */
	peak?: number; frequency?: number; phase?: number;
	/**
	 * Transformer: `from` and `to` are the ends of its primary winding, `from2` and `to2` the
	 * ends of its secondary, and `turns` is [primary, secondary]. It is ideal: the secondary
	 * voltage is the primary voltage x secondary turns / primary turns, and power out equals
	 * power in. It links the two windings only for alternating sources; to a battery each
	 * winding is just a wire. `r` and `r2` are optional winding resistances.
	 */
	from2?: string; to2?: string; turns?: readonly [number, number]; r2?: number;
	/**
	 * Motor with a back emf: `k` is its constant in volts per (radian per second), which is
	 * also its torque per ampere in N m. Its back emf is k x speed. In a run its speed follows
	 * torque = k I - load - friction x speed, with `inertia` in kg m^2 (default 1e-3),
	 * `load` in N m (default 0) and `friction` in N m s (default 0). `jammed` holds it still.
	 * Left out, a motor is its resistance alone.
	 */
	k?: number; inertia?: number; load?: number; friction?: number; jammed?: boolean;
	/** Motor: its back emf in volts at this instant (a run fills this in from the speed). */
	back?: number;
	/**
	 * Resistance in ohms. Resistor, lamp, motor, rheostat, coil: its resistance (a motor and
	 * a coil are treated as their resistance alone: no back EMF, no self-induction).
	 * Battery: internal resistance (default 0). Ammeter: its own small resistance (default 0,
	 * an ideal meter). Voltmeter: its own large resistance (default infinite, an ideal meter).
	 */
	r?: number;
	/** Switch: closed (default) or open. */
	closed?: boolean;
	/** False leaves the part out of the circuit (and the drawing) until a change adds it. Default true. */
	present?: boolean;
};
export type CircuitState = {
	/** Potential of each junction in volts, measured from the negative terminal of the first battery. */
	voltage: Record<string, number>;
	/** Conventional current through each part in amperes, positive when it runs from `from` to `to`. */
	current: Record<string, number>;
	/** Potential at `from` minus potential at `to`, in volts. For a battery, `terminal` is the friendlier number. */
	drop: Record<string, number>;
	/** Power turned to heat or light in each part, in watts (for a battery, the heat in its internal resistance). */
	power: Record<string, number>;
	/** Battery terminal voltage: potential at its positive terminal minus its negative terminal. */
	terminal: Record<string, number>;
	/** True when a battery is joined across wires alone, which the solver reports as an enormous current. */
	short: boolean;
	/** Motors with a back emf: speed in radians per second, and mechanical power out (back emf x current) in watts. */
	speed?: Record<string, number>;
	mech?: Record<string, number>;
};
/** For a transformer called "t", its secondary winding's current and voltage are listed under this name ("t:2"). */
export const secondary = (id: string) => `${id}:2`;

const WIRE_OHMS = 1e-9, LEAK = 1e-12, TIE = 1e-6;

/**
 * Solve the circuit as it stands. An alternating source counts as a battery of its `emf`
 * (or its peak, when no instant has been set), so a bare call gives peak values.
 * `mode` 'dc' switches the alternating sources off and unlinks transformers; 'ac' switches
 * batteries and back emfs off. The default solves everything together, with transformers
 * linked only if the circuit has an alternating source.
 */
export const solveCircuit = (parts: readonly Part[], mode: 'all' | 'dc' | 'ac' = 'all'): CircuitState => {
	const anyAC = parts.some(p => p.kind === 'ac' && p.present !== false), linked = mode === 'ac' || (mode === 'all' && anyAC);
	const emfOf = (p: Part) => (p.kind === 'ac' ? (mode === 'dc' ? 0 : p.emf ?? p.peak ?? 0) : mode === 'ac' ? 0 : p.emf ?? 0);
	const source = (p: Part) => p.kind === 'battery' || p.kind === 'ac';
	const backOf = (p: Part) => (p.kind === 'motor' && p.back !== undefined && mode !== 'ac' ? p.back : undefined);
	const ids = new Set<string>();
	for (const p of parts) { if (ids.has(p.id)) throw new Error(`circuit: two parts are both called "${p.id}"`); ids.add(p.id); }
	const names: string[] = [];
	const firstBattery = parts.find(p => source(p) && p.present !== false) ?? parts.find(source);
	if (firstBattery) names.push(firstBattery.from);
	for (const p of parts) for (const n of [p.from, p.to, p.from2, p.to2]) if (n !== undefined && !names.includes(n)) names.push(n);
	const node = (n: string) => names.indexOf(n) - 1; // the first name is the zero of potential, index -1
	const here = (p: Part) => p.present !== false;
	const hasR = (p: Part) => !!p.r && p.r > 0;
	// Parts with a resistance: loads, and meters given their own resistance.
	const resists = (p: Part) => here(p) && backOf(p) === undefined && ((RESISTIVE.includes(p.kind) || p.kind === 'ammeter' || p.kind === 'voltmeter') && hasR(p));
	// Parts that fix a voltage carry an unknown current: batteries and everything with no resistance.
	const carries = (p: Part) => here(p) && !resists(p) && (source(p) || p.kind === 'wire' || p.kind === 'ammeter' || (p.kind === 'switch' && p.closed !== false) || RESISTIVE.includes(p.kind));
	const branches = parts.filter(carries), nv = names.length - 1;
	// A transformer adds two unknown currents: one in each winding.
	const windings = parts.filter(p => here(p) && p.kind === 'transformer');
	for (const p of windings) if (p.from2 === undefined || p.to2 === undefined || !p.turns) throw new Error(`circuit: transformer "${p.id}" needs from2, to2 and turns`);
	const n = nv + branches.length + 2 * windings.length;
	const A = Array.from({length: n}, () => new Float64Array(n + 1));
	for (let i = 0; i < nv; i++) A[i][i] += LEAK;
	for (const p of parts) if (resists(p)) {
		const a = node(p.from), b = node(p.to), g = 1 / p.r!;
		if (a >= 0) { A[a][a] += g; if (b >= 0) A[a][b] -= g; }
		if (b >= 0) { A[b][b] += g; if (a >= 0) A[b][a] -= g; }
	}
	branches.forEach((p, k) => {
		const a = node(p.from), b = node(p.to), row = nv + k;
		if (a >= 0) { A[a][row] += 1; A[row][a] += source(p) ? -1 : 1; }
		if (b >= 0) { A[b][row] -= 1; A[row][b] += source(p) ? 1 : -1; }
		if (source(p)) { A[row][row] += Math.max(p.r ?? 0, WIRE_OHMS); A[row][n] = emfOf(p); }                 // V(to) - V(from) + I r = emf
		else { A[row][row] -= backOf(p) !== undefined ? Math.max(p.r ?? 0, WIRE_OHMS) : WIRE_OHMS; A[row][n] = backOf(p) ?? 0; }   // V(from) - V(to) - I r = back emf
	});
	windings.forEach((p, k) => {
		const a = node(p.from), b = node(p.to), c = node(p.from2!), d = node(p.to2!), r1 = nv + branches.length + 2 * k, r2 = r1 + 1;
		const ratio = p.turns![1] / p.turns![0], w1 = Math.max(p.r ?? 0, WIRE_OHMS), w2 = Math.max(p.r2 ?? 0, WIRE_OHMS);
		// The secondary circuit usually touches the primary nowhere, so its voltages would have no reference. A weak
		// link between the two windings fixes that; with no other path between the two sides it carries no current.
		if (b >= 0) A[b][b] += TIE;
		if (d >= 0) A[d][d] += TIE;
		if (b >= 0 && d >= 0) { A[b][d] -= TIE; A[d][b] -= TIE; }
		// Winding currents run from `from` to `to` and from `from2` to `to2`, inside the windings.
		if (a >= 0) A[a][r1] += 1;
		if (b >= 0) A[b][r1] -= 1;
		if (c >= 0) A[c][r2] += 1;
		if (d >= 0) A[d][r2] -= 1;
		if (linked) {
			// Secondary voltage = ratio x primary voltage (each less its winding's own drop), and no power is lost: I1 + ratio x I2 = 0.
			if (c >= 0) A[r1][c] += 1;
			if (d >= 0) A[r1][d] -= 1;
			A[r1][r2] -= w2;
			if (a >= 0) A[r1][a] -= ratio;
			if (b >= 0) A[r1][b] += ratio;
			A[r1][r1] += ratio * w1;
			A[r2][r1] += 1; A[r2][r2] += ratio;
		} else {
			// To a steady current each winding is only a wire.
			if (a >= 0) A[r1][a] += 1;
			if (b >= 0) A[r1][b] -= 1;
			A[r1][r1] -= w1;
			if (c >= 0) A[r2][c] += 1;
			if (d >= 0) A[r2][d] -= 1;
			A[r2][r2] -= w2;
		}
	});
	// Gaussian elimination with partial pivoting.
	for (let c = 0; c < n; c++) {
		let best = c;
		for (let r = c + 1; r < n; r++) if (Math.abs(A[r][c]) > Math.abs(A[best][c])) best = r;
		if (Math.abs(A[best][c]) < 1e-300) continue;
		[A[c], A[best]] = [A[best], A[c]];
		for (let r = 0; r < n; r++) if (r !== c && A[r][c] !== 0) { const m = A[r][c] / A[c][c]; for (let k = c; k <= n; k++) A[r][k] -= m * A[c][k]; }
	}
	const x = A.map((row, i) => (Math.abs(row[i]) < 1e-300 ? 0 : row[n] / row[i]));
	const clean = (v: number) => (Math.abs(v) < 1e-9 ? 0 : v);
	const voltage: Record<string, number> = {};
	names.forEach((name, i) => { voltage[name] = i === 0 ? 0 : clean(x[i - 1]); });
	const state: CircuitState = {voltage, current: {}, drop: {}, power: {}, terminal: {}, short: false};
	for (const p of parts) {
		if (!here(p)) { state.drop[p.id] = 0; state.current[p.id] = 0; state.power[p.id] = 0; if (source(p)) state.terminal[p.id] = 0; if (p.kind === 'transformer') { state.drop[secondary(p.id)] = 0; state.current[secondary(p.id)] = 0; } continue; }
		const drop = clean(voltage[p.from] - voltage[p.to]), k = branches.indexOf(p), w = windings.indexOf(p);
		const current = clean(w >= 0 ? x[nv + branches.length + 2 * w] : k >= 0 ? x[nv + k] : resists(p) ? drop / p.r! : 0);
		state.drop[p.id] = drop;
		state.current[p.id] = current;
		state.power[p.id] = clean(source(p) || backOf(p) !== undefined ? current * current * (p.r ?? 0) : resists(p) ? current * current * p.r! : 0);
		if (w >= 0) {
			const i2 = clean(x[nv + branches.length + 2 * w + 1]);
			state.current[secondary(p.id)] = i2;
			state.drop[secondary(p.id)] = clean(voltage[p.from2!] - voltage[p.to2!]);
			state.power[p.id] = clean(current * current * (p.r ?? 0) + i2 * i2 * (p.r2 ?? 0));
		}
		if (backOf(p) !== undefined) (state.mech ??= {})[p.id] = clean(backOf(p)! * current);
		if (source(p)) state.terminal[p.id] = -drop;
		if (Math.abs(current) > 1e6) state.short = true;
	}
	return state;
};

/** Resistance of resistors joined end to end. */
export const seriesResistance = (...ohms: number[]) => ohms.reduce((sum, r) => sum + r, 0);
/** Resistance of resistors joined side by side. */
export const parallelResistance = (...ohms: number[]) => 1 / ohms.reduce((sum, r) => sum + 1 / r, 0);

// ------------------------------------------------- alternating current, transformers
const present = (p: Part) => p.present !== false;
/**
 * Solve a circuit that may mix batteries with alternating sources and transformers. A
 * transformer passes on only the alternating part, so the steady part and the alternating
 * part are solved separately and added (the circuit is linear, so this is exact).
 */
export const solveMixed = (parts: readonly Part[]): CircuitState => {
	const ac = parts.some(p => present(p) && p.kind === 'ac'), tf = parts.some(p => present(p) && p.kind === 'transformer');
	const dc = parts.some(p => present(p) && ((p.kind === 'battery' && (p.emf ?? 0) !== 0) || (p.kind === 'motor' && (p.back ?? 0) !== 0)));
	if (!(ac && tf && dc)) return solveCircuit(parts);
	const a = solveCircuit(parts, 'dc'), b = solveCircuit(parts, 'ac');
	const add = (x: Record<string, number>, y: Record<string, number>) => Object.fromEntries(Object.keys(x).map(k => [k, x[k] + (y[k] ?? 0)]));
	const state: CircuitState = {voltage: add(a.voltage, b.voltage), current: add(a.current, b.current), drop: add(a.drop, b.drop), terminal: add(a.terminal, b.terminal), power: {}, short: a.short || b.short};
	for (const p of parts) {
		const i = state.current[p.id] ?? 0, i2 = state.current[secondary(p.id)] ?? 0;
		state.power[p.id] = !present(p) || !p.r ? 0 : i * i * p.r + (p.kind === 'transformer' ? i2 * i2 * (p.r2 ?? 0) : 0);
		if (p.kind === 'motor' && p.back !== undefined && present(p)) (state.mech ??= {})[p.id] = p.back * i;
	}
	return state;
};
/** Peak value from an r.m.s. value, and back: for a sine, r.m.s. = peak / root 2. */
export const rmsOf = (peak: number) => peak / Math.SQRT2;
export const peakOf = (rms: number) => rms * Math.SQRT2;
export type ACValues = {
	/** Every voltage and current at the instant the source is at its peak. Signs show which way each is at that instant. */
	peak: CircuitState;
	/** r.m.s. current through each part and r.m.s. voltage across it (sizes). */
	rms: {current: Record<string, number>; drop: Record<string, number>};
	/** Average power turned to heat or light in each part, in watts: r.m.s. current squared x resistance. */
	power: Record<string, number>;
};
/**
 * Peak and r.m.s. values of an alternating circuit of resistances (batteries are ignored).
 * Assumes every alternating source has the same frequency and phase.
 */
export const solveAC = (parts: readonly Part[]): ACValues => {
	const peak = solveCircuit(parts.map(p => (p.kind === 'ac' ? {...p, emf: p.peak ?? p.emf ?? 0} : p)), 'ac');
	const half = (r: Record<string, number>) => Object.fromEntries(Object.entries(r).map(([k, v]) => [k, Math.abs(v) / Math.SQRT2]));
	return {peak, rms: {current: half(peak.current), drop: half(peak.drop)}, power: Object.fromEntries(Object.entries(peak.power).map(([k, v]) => [k, v / 2]))};
};
/**
 * An ideal transformer by itself, for readouts: give the primary voltage, the turns and
 * the load resistance on the secondary. Voltages and currents may be peak or r.m.s., as
 * long as they are all the same kind.
 */
export const idealTransformer = (o: {primaryVoltage: number; turns: readonly [number, number]; load: number}) => {
	const ratio = o.turns[1] / o.turns[0], secondaryVoltage = o.primaryVoltage * ratio, secondaryCurrent = secondaryVoltage / o.load, primaryCurrent = secondaryCurrent * ratio;
	return {ratio, secondaryVoltage, secondaryCurrent, primaryCurrent, powerIn: o.primaryVoltage * primaryCurrent, powerOut: secondaryVoltage * secondaryCurrent, kind: ratio > 1 ? 'step-up' as const : ratio < 1 ? 'step-down' as const : 'one-to-one' as const};
};
/**
 * Power wasted in a transmission line of resistance `line` ohms when `power` watts are sent
 * at `voltage` volts: the current is P / V, so the loss is (P / V)^2 x R.
 */
export const lineLoss = (power: number, voltage: number, line: number) => { const current = power / voltage, loss = current * current * line; return {current, loss, drop: current * line, fraction: loss / power}; };
/** Steady speed and current of a motor (constant k, resistance r) on a supply of V volts against a load torque: I = load / k (+ friction), speed = (V - I r) / k. */
export const motorSteady = (o: {voltage: number; r: number; k: number; load?: number; friction?: number}) => {
	const b = o.friction ?? 0, load = o.load ?? 0;
	// k I = load + b w and V = I r + k w.
	const speed = Math.max(0, (o.k * o.voltage - load * o.r) / (o.k * o.k + b * o.r)), current = (o.voltage - o.k * speed) / o.r;
	return {speed, current, back: o.k * speed, stall: o.voltage / o.r, mechanical: o.k * speed * current, heat: current * current * o.r};
};

// ----------------------------------------------------------- changes over time
/**
 * At frame `at`, change these values of these parts: close a switch, add a part
 * (`present: true`), swap a resistance, raise the EMF, load or jam a motor. With `over`,
 * numbers (emf, r, peak, load) move smoothly to their new values across that many frames
 * (a rheostat being turned), while switches, `present` and `jammed` still change at `at`.
 * Ramps of the same value should not overlap.
 */
export type CircuitChange = {at: number; set: Record<string, Partial<Pick<Part, 'emf' | 'r' | 'closed' | 'present' | 'peak' | 'load' | 'jammed'>>>; over?: number; ease?: 'linear' | 'smooth'};
export type CircuitRun = {
	/** One entry per stretch of time in which nothing changes, in order (one per frame during a ramp, and for every frame of a circuit with an alternating source or a motor with a back emf). */
	phases: readonly {from: number; parts: readonly Part[]; state: CircuitState}[];
	/** Frames per second the run was worked out at (alternating sources and motors use it; default 30). */
	fps: number;
};
export type CircuitRunOptions = {
	/** How many frames to work out, for a circuit with an alternating source or a motor with a back emf (default 300). */
	frames?: number;
	fps?: number;
};
const smoothstep = (u: number) => u * u * (3 - 2 * u);
const MOTOR_SUBSTEPS = 6;
/**
 * Solve the circuit for the start and after every change. Frames count from when the
 * circuit's clock starts. A circuit with an alternating source, or a motor that has a back
 * emf, changes all the time, so it is solved for every frame up to `frames`.
 */
export const runCircuit = (parts: readonly Part[], changes: readonly CircuitChange[] = [], options: CircuitRunOptions = {}): CircuitRun => {
	const sorted = [...changes].sort((a, b) => a.at - b.at), fps = options.fps ?? 30;
	for (const change of sorted) for (const id of Object.keys(change.set)) if (!parts.some(p => p.id === id)) throw new Error(`circuit: a change names "${id}", which is not a part`);
	/** The parts as they stand at a frame: every change that has started, applied in order. */
	const standing = (frame: number) => {
		let now = parts.map(p => ({...p}));
		for (const c of sorted) {
			if (c.at > frame) break;
			const raw = c.over && c.over > 0 ? Math.min(1, (frame - c.at) / c.over) : 1, u = c.ease === 'linear' ? raw : smoothstep(raw);
			now = now.map(p => {
				const set = c.set[p.id];
				if (!set) return p;
				const next: Part = {...p};
				if (set.closed !== undefined) next.closed = set.closed;
				if (set.present !== undefined) next.present = set.present;
				if (set.jammed !== undefined) next.jammed = set.jammed;
				if (set.emf !== undefined) next.emf = (p.emf ?? 0) + (set.emf - (p.emf ?? 0)) * u;
				if (set.r !== undefined) next.r = (p.r ?? 0) + (set.r - (p.r ?? 0)) * u;
				if (set.peak !== undefined) next.peak = (p.peak ?? 0) + (set.peak - (p.peak ?? 0)) * u;
				if (set.load !== undefined) next.load = (p.load ?? 0) + (set.load - (p.load ?? 0)) * u;
				return next;
			});
		}
		return now;
	};
	const live = parts.some(p => p.kind === 'ac' || (p.kind === 'motor' && p.k !== undefined));
	if (!live) {
		const frames = new Set<number>([0]);
		for (const c of sorted) {
			const at = Math.max(0, c.at);
			frames.add(at);
			if (c.over && c.over > 0) for (let j = 1; j <= Math.ceil(c.over); j++) frames.add(c.at + j);
		}
		const phases = [...frames].filter(f => f >= 0).sort((a, b) => a - b).map(from => { const now = standing(from); return {from, parts: now, state: solveMixed(now)}; });
		return {phases, fps};
	}
	// A live circuit: one solve per frame. Alternating sources take their voltage at that instant; each motor's back emf follows its speed.
	const total = Math.max(1, Math.round(options.frames ?? 300)), speed: Record<string, number> = {}, phases: {from: number; parts: readonly Part[]; state: CircuitState}[] = [];
	for (const p of parts) if (p.kind === 'motor' && p.k !== undefined) speed[p.id] = 0;
	const instant = (now: Part[], time: number) => now.map(p => (p.kind === 'ac' ? {...p, emf: (p.peak ?? 0) * Math.sin(2 * Math.PI * (p.frequency ?? 1) * time + (p.phase ?? 0))} : p.kind === 'motor' && p.k !== undefined ? {...p, back: p.k * speed[p.id]} : p));
	for (let f = 0; f <= total; f++) {
		const now = standing(f), set = instant(now, f / fps), state = solveMixed(set);
		state.speed = {...speed};
		phases.push({from: f, parts: set, state});
		// Carry each motor's speed forward to the next frame, in small steps so a quick motor stays steady.
		const h = 1 / (fps * MOTOR_SUBSTEPS);
		for (let s = 0; s < MOTOR_SUBSTEPS && Object.keys(speed).length; s++) {
			const mid = s === 0 ? state : solveMixed(instant(now, f / fps + s * h));
			for (const p of now) {
				if (p.kind !== 'motor' || p.k === undefined) continue;
				if (p.jammed || p.present === false) { speed[p.id] = 0; continue; }
				const w = speed[p.id], drive = p.k * (mid.current[p.id] ?? 0), load = p.load ?? 0;
				// The load only resists: it cannot turn a stopped motor backwards.
				const net = w === 0 && Math.abs(drive) <= load ? 0 : drive - Math.sign(w || drive) * load - (p.friction ?? 0) * w;
				const next = w + (h * net) / (p.inertia ?? 1e-3);
				speed[p.id] = w !== 0 && Math.sign(next) !== Math.sign(w) && Math.abs(drive) <= load ? 0 : next;
			}
		}
	}
	return {phases, fps};
};
const phaseAt = (run: CircuitRun, frame: number) => {
	const ph = run.phases;
	let lo = 0, hi = ph.length - 1;
	while (lo < hi) { const mid = (lo + hi + 1) >> 1; if (ph[mid].from <= frame) lo = mid; else hi = mid - 1; }
	return ph[lo];
};
/** Currents, voltages and powers at a frame. */
export const circuitAt = (run: CircuitRun, frame: number) => phaseAt(run, frame).state;
/** The parts as they are at a frame (which switches are closed, what each value is). */
export const partsAt = (run: CircuitRun, frame: number) => phaseAt(run, frame).parts;
/**
 * Charge that has passed through a part from frame 0 to this frame, in ampere-frames
 * (divide by the frame rate for coulombs). The drawing moves its charges by this amount.
 */
export const chargeMoved = (run: CircuitRun, id: string, frame: number) => {
	let total = 0;
	for (let k = 0; k < run.phases.length; k++) {
		const start = run.phases[k].from, end = k + 1 < run.phases.length ? Math.min(frame, run.phases[k + 1].from) : frame;
		if (end <= start) break;
		total += (run.phases[k].state.current[id] ?? 0) * (end - start);
	}
	return total;
};
