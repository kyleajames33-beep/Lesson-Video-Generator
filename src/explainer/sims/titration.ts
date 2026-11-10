// Acid-base titration engine: the pH, the particles present and the conductivity of the
// flask after any volume has been added from the burette. Plain TypeScript, no React.
// Every value is worked out from the charge balance of the mixture, so strong and weak
// acids and bases all use the same sum and nothing is a special-case formula.
// Volumes are in mL, concentrations in mol/L.

export const KW = 1e-14;

export type Solution = {
	kind: 'acid' | 'base';
	/** mol/L */
	concentration: number;
	/** Ka of a weak acid, or Kb of a weak base. Leave out for a strong one. One H+ (or one OH-) per particle. */
	k?: number;
};
export type Titration = {
	/** In the flask at the start. */
	analyte: Solution & {/** mL */ volume: number};
	/** In the burette. It must be the opposite kind to the analyte. */
	titrant: Solution;
	/** Water constant (default 1e-14, the value at 25 °C). */
	kw?: number;
	/**
	 * Molar conductivities of the two spectator ions, in S cm² per mol, for conductivityAt().
	 * Defaults: 76.3 (chloride) for a strong acid's anion, 40.9 (ethanoate) for a weak acid's,
	 * 50.1 (sodium) for a strong base's cation, 73.5 (ammonium) for a weak base's.
	 */
	ions?: {anion?: number; cation?: number};
};

export type Mixture = {
	/** Total volume in the flask, mL. */
	volume: number;
	pH: number;
	/** Concentrations in mol/L. */
	h: number; oh: number;
	/** The acid's two forms: the whole molecule (zero for a strong acid) and its negative ion. */
	acid: {total: number; molecule: number; ion: number};
	/** The base's two forms: the uncharged base (zero for a strong base) and its positive ion. */
	base: {total: number; molecule: number; ion: number};
};

const check = (t: Titration) => {
	if (t.analyte.kind === t.titrant.kind) throw new Error('titration: the burette must hold the opposite kind to the flask (acid into base, or base into acid)');
	if (!(t.analyte.concentration > 0 && t.titrant.concentration > 0 && t.analyte.volume > 0)) throw new Error('titration: concentrations and the flask volume must be positive');
};

/** Everything in the flask after `added` mL from the burette. */
export const mixtureAt = (t: Titration, added: number): Mixture => {
	check(t);
	const kw = t.kw ?? KW, v = Math.max(0, added), volume = t.analyte.volume + v;
	const acidSol = t.analyte.kind === 'acid' ? t.analyte : t.titrant, baseSol = t.analyte.kind === 'base' ? t.analyte : t.titrant;
	const fromFlask = t.analyte.concentration * t.analyte.volume / volume, fromBurette = t.titrant.concentration * v / volume;
	const ca = t.analyte.kind === 'acid' ? fromFlask : fromBurette, cb = t.analyte.kind === 'base' ? fromFlask : fromBurette;
	const anion = (h: number) => (acidSol.k === undefined ? ca : ca * acidSol.k / (acidSol.k + h));
	const cation = (h: number) => (baseSol.k === undefined ? cb : cb * baseSol.k * h / (baseSol.k * h + kw));
	// Charge balance: H+ + base cation = OH- + acid anion. The left side minus the right falls as pH rises.
	let lo = -2, hi = 16;
	for (let i = 0; i < 70; i++) {
		const mid = (lo + hi) / 2, h = 10 ** -mid;
		if (h + cation(h) - kw / h - anion(h) > 0) lo = mid; else hi = mid;
	}
	const pH = (lo + hi) / 2, h = 10 ** -pH, a = anion(h), c = cation(h);
	return {volume, pH, h, oh: kw / h, acid: {total: ca, molecule: ca - a, ion: a}, base: {total: cb, molecule: cb - c, ion: c}};
};
export const phAt = (t: Titration, added: number) => mixtureAt(t, added).pH;

/** Volume from the burette (mL) at which the moles added equal the moles in the flask. */
export const equivalenceVolume = (t: Titration) => { check(t); return t.analyte.concentration * t.analyte.volume / t.titrant.concentration; };
/** The equivalence point: 7 for strong with strong, above 7 for a weak acid with a strong base, below 7 for a weak base with a strong acid. */
export const equivalencePoint = (t: Titration) => { const volume = equivalenceVolume(t); return {volume, pH: phAt(t, volume)}; };
/**
 * Half-way to equivalence, when the flask holds a weak acid or weak base: half of it has
 * reacted, the two forms are equal, and the pH equals the pKa (of the acid, or of the
 * base's positive ion). Returns null when the flask holds a strong acid or base.
 */
export const halfEquivalence = (t: Titration) => {
	if (t.analyte.k === undefined) return null;
	const volume = equivalenceVolume(t) / 2, pKa = t.analyte.kind === 'acid' ? -Math.log10(t.analyte.k) : -Math.log10((t.kw ?? KW) / t.analyte.k);
	return {volume, pH: phAt(t, volume), pKa};
};
/**
 * The steep part of the curve: the pH just before and just after equivalence, taken
 * `share` of the equivalence volume either side (default 2%). Returned low to high.
 */
export const steepSection = (t: Titration, share = 0.02) => {
	const ve = equivalenceVolume(t), a = phAt(t, ve * (1 - share)), b = phAt(t, ve * (1 + share));
	return {low: Math.min(a, b), high: Math.max(a, b)};
};

/**
 * Points along the curve from 0 to `to` mL, packed closely around the equivalence point
 * so the steep part is drawn as a clean line. `value` picks what is plotted.
 */
export const titrationCurve = (t: Titration, to: number, value: (m: Mixture) => number = m => m.pH, steps = 240) => {
	const ve = equivalenceVolume(t), vs = new Set<number>();
	for (let i = 0; i <= steps; i++) vs.add((to * i) / steps);
	if (ve < to) for (let i = -40; i <= 40; i++) { const v = ve * (1 + Math.sign(i) * 0.05 * (Math.abs(i) / 40) ** 3); if (v >= 0 && v <= to) vs.add(v); }
	const volume = [...vs].sort((a, b) => a - b);
	return {volume, value: volume.map(v => value(mixtureAt(t, v)))};
};

// ------------------------------------------------------------------ indicators
export type Rgba = readonly [number, number, number, number];
export type Indicator = {
	name: string;
	/** The pH range over which the colour changes. */
	low: number; high: number;
	/** Colour below `low` and above `high`, as red, green, blue (0 to 255) and opacity (0 to 1). */
	acid: Rgba; base: Rgba;
	acidName: string; baseName: string;
};
export const INDICATORS = {
	methylOrange: {name: 'methyl orange', low: 3.1, high: 4.4, acid: [214, 52, 43, 1], base: [233, 185, 30, 1], acidName: 'red', baseName: 'yellow'},
	bromothymolBlue: {name: 'bromothymol blue', low: 6.0, high: 7.6, acid: [227, 194, 26, 1], base: [42, 99, 196, 1], acidName: 'yellow', baseName: 'blue'},
	phenolphthalein: {name: 'phenolphthalein', low: 8.3, high: 10.0, acid: [214, 54, 143, 0], base: [214, 54, 143, 1], acidName: 'colourless', baseName: 'pink'},
} as const satisfies Record<string, Indicator>;
/** How far through its colour change the indicator is at this pH: 0 is fully the acid colour, 1 fully the base colour. */
export const indicatorShare = (ind: Indicator, pH: number) => Math.min(1, Math.max(0, (pH - ind.low) / (ind.high - ind.low)));
/** The indicator's colour at this pH. */
export const indicatorColour = (ind: Indicator, pH: number): Rgba => {
	const u = indicatorShare(ind, pH);
	return [0, 1, 2, 3].map(i => ind.acid[i] + (ind.base[i] - ind.acid[i]) * u) as unknown as Rgba;
};
export const cssColour = (c: Rgba) => `rgba(${Math.round(c[0])},${Math.round(c[1])},${Math.round(c[2])},${c[3].toFixed(3)})`;
/** Volume added (mL) at which the flask first reaches this pH, found by halving. Null if it never does within `to` mL. */
export const volumeAtPh = (t: Titration, pH: number, to = equivalenceVolume(t) * 2) => {
	const rising = t.analyte.kind === 'acid', start = phAt(t, 0), end = phAt(t, to);
	if (rising ? pH < start || pH > end : pH > start || pH < end) return null;
	let lo = 0, hi = to;
	for (let i = 0; i < 60; i++) { const mid = (lo + hi) / 2; if ((phAt(t, mid) < pH) === rising) lo = mid; else hi = mid; }
	return (lo + hi) / 2;
};
/**
 * Where this indicator changes colour in this titration: the volumes at which the change
 * starts and finishes, and whether the indicator suits the titration. It suits when its
 * whole pH range sits inside the steep part of the curve (steepSection), so the colour
 * changes within a drop or two of the equivalence point.
 */
export const indicatorFit = (t: Titration, ind: Indicator, share = 0.02) => {
	const steep = steepSection(t, share), a = volumeAtPh(t, ind.low), b = volumeAtPh(t, ind.high), ve = equivalenceVolume(t);
	const starts = a === null || b === null ? null : Math.min(a, b), ends = a === null || b === null ? null : Math.max(a, b);
	return {suits: ind.low >= steep.low && ind.high <= steep.high, starts, ends, equivalence: ve, early: ends === null ? null : ve - ends};
};

// ---------------------------------------------------------------- conductivity
const LAMBDA = {h: 349.8, oh: 198.6, strongAnion: 76.3, weakAnion: 40.9, strongCation: 50.1, weakCation: 73.5};
/**
 * Conductivity of the flask in mS/cm: each ion's concentration times how well it carries
 * charge. H+ and OH- carry far better than the other ions, which is why the line bends at
 * the equivalence point.
 */
export const conductivityOf = (t: Titration, m: Mixture) => {
	const acidSol = t.analyte.kind === 'acid' ? t.analyte : t.titrant, baseSol = t.analyte.kind === 'base' ? t.analyte : t.titrant;
	const anion = t.ions?.anion ?? (acidSol.k === undefined ? LAMBDA.strongAnion : LAMBDA.weakAnion);
	const cation = t.ions?.cation ?? (baseSol.k === undefined ? LAMBDA.strongCation : LAMBDA.weakCation);
	return LAMBDA.h * m.h + LAMBDA.oh * m.oh + anion * m.acid.ion + cation * m.base.ion;
};
export const conductivityAt = (t: Titration, added: number) => conductivityOf(t, mixtureAt(t, added));

// ----------------------------------------------------------------------- pouring
/** Burette keyframes: [scene frame, total mL added by then]. Straight lines between them; level before the first and after the last. */
export type Pour = readonly (readonly [number, number])[];
/** Total volume added (mL) at a scene frame. Slow the pour near the end point by placing keyframes closer in volume. */
export const addedAt = (pour: Pour, frame: number) => {
	if (!pour.length) return 0;
	if (frame <= pour[0][0]) return pour[0][1];
	for (let i = 1; i < pour.length; i++) if (frame <= pour[i][0]) { const [f0, v0] = pour[i - 1], [f1, v1] = pour[i]; return v0 + (v1 - v0) * (frame - f0) / Math.max(1e-9, f1 - f0); }
	return pour[pour.length - 1][1];
};
/** How fast the burette is running at a scene frame, in mL per frame (0 when the tap is closed). */
export const flowAt = (pour: Pour, frame: number) => addedAt(pour, frame + 0.5) - addedAt(pour, frame - 0.5);
