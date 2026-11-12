// Heating-curve engine: heat supplied at a constant rate to a substance that melts and
// boils. Plain TypeScript, no React. The run is a list of stretches (warm the solid, melt,
// warm the liquid, boil, warm the gas). While a stretch warms one phase the temperature
// rises at P / (m c); while the substance melts or boils the temperature stays flat for
// m L / P, because the heat goes into separating particles, not speeding them up.
// SI units: kg, W (J/s), J/(kg K), J/kg, s. Temperatures in °C (any scale with K-sized steps).

export type Phase = 'solid' | 'liquid' | 'gas';
export type Stage = 'solid' | 'melting' | 'liquid' | 'boiling' | 'gas';
export type HeatingConfig = {
	/** Mass in kg. */
	mass: number;
	/** Heater power in W (J per second). */
	power: number;
	/** Starting temperature. */
	start: number;
	/** Stop heating at this temperature, or after `duration` seconds, whichever comes first. Give at least one. */
	end?: number; duration?: number;
	/** Specific heat capacities in J/(kg K). Only the phases the run passes through are needed. */
	c: Partial<Record<Phase, number>>;
	/** Melting point and specific latent heat of fusion (J/kg). */
	melt: {at: number; latent: number};
	/** Boiling point and specific latent heat of vaporisation (J/kg). */
	boil: {at: number; latent: number};
};
export type Stretch = {
	stage: Stage;
	/** Start and end time in s, temperature at each end, and total heat supplied at each end (J). */
	t0: number; t1: number; T0: number; T1: number; q0: number; q1: number;
};
export type HeatingRun = {config: HeatingConfig; stretches: Stretch[]; duration: number; heat: number};
export type HeatingState = {
	t: number; temperature: number; stage: Stage;
	/** Total heat supplied so far, J. */
	heat: number;
	/** Share of the mass in each phase (they add to 1). */
	solid: number; liquid: number; gas: number;
};

/** Work out every stretch of the heating curve. */
export const runHeating = (config: HeatingConfig): HeatingRun => {
	const {mass: m, power: P, start, melt, boil} = config;
	if (!(m > 0 && P > 0)) throw new Error('runHeating: mass and power must be positive');
	if (!(melt.at < boil.at)) throw new Error('runHeating: the melting point must be below the boiling point');
	if (config.end === undefined && config.duration === undefined) throw new Error('runHeating: give an end temperature or a duration');
	const end = config.end ?? Infinity, limit = config.duration ?? Infinity;
	const stretches: Stretch[] = [];
	let t = 0, T = start, q = 0;
	const cOf = (ph: Phase) => { const c = config.c[ph]; if (!(c && c > 0)) throw new Error(`runHeating: the run needs a heat capacity for the ${ph}`); return c; };
	/** Add a stretch lasting dt seconds that ends at temperature T1, cut short at the time limit. Returns false once heating has stopped. */
	const push = (stage: Stage, dt: number, T1: number) => {
		const cut = Math.min(1, (limit - t) / dt);
		const t2 = t + dt * cut, T2 = T + (T1 - T) * cut, q2 = q + P * dt * cut;
		stretches.push({stage, t0: t, t1: t2, T0: T, T1: T2, q0: q, q1: q2});
		t = t2; T = T2; q = q2;
		return cut >= 1;
	};
	const warm = (ph: Phase, upTo: number) => {
		const target = Math.min(upTo, end), rate = P / (m * cOf(ph));
		if (!Number.isFinite(target)) return push(ph, limit - t, T + rate * (limit - t)) && false;
		if (target > T) push(ph, (target - T) / rate, target);
		return t < limit && T < end;
	};
	const change = (stage: 'melting' | 'boiling', latent: number) => push(stage, (m * latent) / P, T) && T < end;
	const steps: (() => boolean)[] = [
		() => warm('solid', melt.at), () => change('melting', melt.latent),
		() => warm('liquid', boil.at), () => change('boiling', boil.latent),
		() => warm('gas', Infinity),
	];
	const first = start < melt.at ? 0 : start < boil.at ? 2 : 4;
	if (start < end && limit > 0) for (let i = first; i < steps.length; i++) if (!steps[i]()) break;
	return {config, stretches, duration: t, heat: q};
};

const sharesOf = (stage: Stage, u: number): Pick<HeatingState, 'solid' | 'liquid' | 'gas'> =>
	stage === 'solid' ? {solid: 1, liquid: 0, gas: 0}
		: stage === 'melting' ? {solid: 1 - u, liquid: u, gas: 0}
			: stage === 'liquid' ? {solid: 0, liquid: 1, gas: 0}
				: stage === 'boiling' ? {solid: 0, liquid: 1 - u, gas: u}
					: {solid: 0, liquid: 0, gas: 1};

/** Temperature, heat supplied and phase shares at time t (s). Holds the last state after heating stops. */
export const heatingAt = (run: HeatingRun, t: number): HeatingState => {
	const s = run.stretches;
	if (!s.length) { const c = run.config, stage: Stage = c.start < c.melt.at ? 'solid' : c.start < c.boil.at ? 'liquid' : 'gas'; return {t, temperature: c.start, stage, heat: 0, ...sharesOf(stage, 0)}; }
	const time = Math.min(run.duration, Math.max(0, t));
	let k = 0;
	while (k < s.length - 1 && time > s[k].t1) k++;
	const st = s[k], u = st.t1 > st.t0 ? (time - st.t0) / (st.t1 - st.t0) : 1;
	return {t: time, temperature: st.T0 + (st.T1 - st.T0) * u, stage: st.stage, heat: st.q0 + (st.q1 - st.q0) * u, ...sharesOf(st.stage, u)};
};
/** The curve as corner points (time, temperature): straight lines between them are exact. */
export const heatingCurve = (run: HeatingRun) => {
	const t = [0], T = [run.stretches[0]?.T0 ?? run.config.start];
	for (const s of run.stretches) { t.push(s.t1); T.push(s.T1); }
	return {t: Float64Array.from(t), v: Float64Array.from(T)};
};
/** The flat stretches (melting and boiling), with their start and end times. */
export const plateaus = (run: HeatingRun) => run.stretches.filter(s => s.stage === 'melting' || s.stage === 'boiling');
