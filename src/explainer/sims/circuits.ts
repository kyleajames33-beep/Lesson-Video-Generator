// Direct-current circuit engine: describe the parts and which junctions they join, and it
// works out every current, voltage and power from Kirchhoff's laws. Plain TypeScript, no
// React. Series, parallel and mixed circuits all use the same solver, so nothing depends on
// a memorised formula. Switches and values can change at set frames, or ramp smoothly over a
// stretch of frames, and parts can be added mid-run; the charge that has passed through each
// part is kept, so moving charges never jump when something changes.

export type PartKind = 'battery' | 'resistor' | 'lamp' | 'switch' | 'ammeter' | 'voltmeter' | 'wire' | 'motor' | 'rheostat' | 'coil';
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
	/** Battery: its EMF in volts. */
	emf?: number;
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
};

const WIRE_OHMS = 1e-9, LEAK = 1e-12;

/** Solve the circuit as it stands. */
export const solveCircuit = (parts: readonly Part[]): CircuitState => {
	const ids = new Set<string>();
	for (const p of parts) { if (ids.has(p.id)) throw new Error(`circuit: two parts are both called "${p.id}"`); ids.add(p.id); }
	const names: string[] = [];
	const firstBattery = parts.find(p => p.kind === 'battery' && p.present !== false) ?? parts.find(p => p.kind === 'battery');
	if (firstBattery) names.push(firstBattery.from);
	for (const p of parts) for (const n of [p.from, p.to]) if (!names.includes(n)) names.push(n);
	const node = (n: string) => names.indexOf(n) - 1; // the first name is the zero of potential, index -1
	const here = (p: Part) => p.present !== false;
	const hasR = (p: Part) => !!p.r && p.r > 0;
	// Parts with a resistance: loads, and meters given their own resistance.
	const resists = (p: Part) => here(p) && ((RESISTIVE.includes(p.kind) || p.kind === 'ammeter' || p.kind === 'voltmeter') && hasR(p));
	// Parts that fix a voltage carry an unknown current: batteries and everything with no resistance.
	const carries = (p: Part) => here(p) && !resists(p) && (p.kind === 'battery' || p.kind === 'wire' || p.kind === 'ammeter' || (p.kind === 'switch' && p.closed !== false) || RESISTIVE.includes(p.kind));
	const branches = parts.filter(carries), nv = names.length - 1, n = nv + branches.length;
	const A = Array.from({length: n}, () => new Float64Array(n + 1));
	for (let i = 0; i < nv; i++) A[i][i] += LEAK;
	for (const p of parts) if (resists(p)) {
		const a = node(p.from), b = node(p.to), g = 1 / p.r!;
		if (a >= 0) { A[a][a] += g; if (b >= 0) A[a][b] -= g; }
		if (b >= 0) { A[b][b] += g; if (a >= 0) A[b][a] -= g; }
	}
	branches.forEach((p, k) => {
		const a = node(p.from), b = node(p.to), row = nv + k;
		if (a >= 0) { A[a][row] += 1; A[row][a] += p.kind === 'battery' ? -1 : 1; }
		if (b >= 0) { A[b][row] -= 1; A[row][b] += p.kind === 'battery' ? 1 : -1; }
		if (p.kind === 'battery') { A[row][row] += Math.max(p.r ?? 0, WIRE_OHMS); A[row][n] = p.emf ?? 0; }   // V(to) - V(from) + I r = emf
		else A[row][row] -= WIRE_OHMS;                                                                          // V(from) - V(to) - I r = 0
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
		if (!here(p)) { state.drop[p.id] = 0; state.current[p.id] = 0; state.power[p.id] = 0; if (p.kind === 'battery') state.terminal[p.id] = 0; continue; }
		const drop = clean(voltage[p.from] - voltage[p.to]), k = branches.indexOf(p);
		const current = clean(k >= 0 ? x[nv + k] : resists(p) ? drop / p.r! : 0);
		state.drop[p.id] = drop;
		state.current[p.id] = current;
		state.power[p.id] = clean(p.kind === 'battery' ? current * current * (p.r ?? 0) : resists(p) ? current * current * p.r! : 0);
		if (p.kind === 'battery') state.terminal[p.id] = -drop;
		if (Math.abs(current) > 1e6) state.short = true;
	}
	return state;
};

/** Resistance of resistors joined end to end. */
export const seriesResistance = (...ohms: number[]) => ohms.reduce((sum, r) => sum + r, 0);
/** Resistance of resistors joined side by side. */
export const parallelResistance = (...ohms: number[]) => 1 / ohms.reduce((sum, r) => sum + 1 / r, 0);

// ----------------------------------------------------------- changes over time
/**
 * At frame `at`, change these values of these parts: close a switch, add a part
 * (`present: true`), swap a resistance, raise the EMF. With `over`, numbers (emf, r) move
 * smoothly to their new values across that many frames (a rheostat being turned), while
 * switches and `present` still change at `at`. Ramps of the same value should not overlap.
 */
export type CircuitChange = {at: number; set: Record<string, Partial<Pick<Part, 'emf' | 'r' | 'closed' | 'present'>>>; over?: number; ease?: 'linear' | 'smooth'};
export type CircuitRun = {
	/** One entry per stretch of time in which nothing changes, in order (one per frame during a ramp). */
	phases: readonly {from: number; parts: readonly Part[]; state: CircuitState}[];
};
const smoothstep = (u: number) => u * u * (3 - 2 * u);
/** Solve the circuit for the start and after every change. Frames count from when the circuit's clock starts. */
export const runCircuit = (parts: readonly Part[], changes: readonly CircuitChange[] = []): CircuitRun => {
	const sorted = [...changes].sort((a, b) => a.at - b.at);
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
				if (set.emf !== undefined) next.emf = (p.emf ?? 0) + (set.emf - (p.emf ?? 0)) * u;
				if (set.r !== undefined) next.r = (p.r ?? 0) + (set.r - (p.r ?? 0)) * u;
				return next;
			});
		}
		return now;
	};
	const frames = new Set<number>([0]);
	for (const c of sorted) {
		const at = Math.max(0, c.at);
		frames.add(at);
		if (c.over && c.over > 0) for (let j = 1; j <= Math.ceil(c.over); j++) frames.add(c.at + j);
	}
	const phases = [...frames].filter(f => f >= 0).sort((a, b) => a - b).map(from => { const now = standing(from); return {from, parts: now, state: solveCircuit(now)}; });
	return {phases};
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
		if (end > start) total += (run.phases[k].state.current[id] ?? 0) * (end - start);
	}
	return total;
};
