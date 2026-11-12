// Energy profile of a reaction: the numbers behind the drawing in energy-profile-views.tsx.
// Plain TypeScript, no React. Energies are in any one unit the lesson chooses (kJ/mol is
// usual); only differences matter.

export type EnergyProfileConfig = {
	/** Energy of the reactants and of the products. */
	reactants: number; products: number;
	/** Activation energy of the forward reaction, measured up from the reactants. */
	ea: number;
	/** Activation energy with a catalyst (lower than `ea`). Leave out for no catalysed path. */
	catalysedEa?: number;
};
export type EnergyArrow = {/** Energy at the tail and at the head. */ from: number; to: number; /** to − from: positive points up, negative points down. */ length: number};
export type EnergyProfile = {
	config: EnergyProfileConfig;
	/** Top of the hump, and of the catalysed hump (null without a catalyst). */
	peak: number; catalysedPeak: number | null;
	/** Products minus reactants: negative for an exothermic reaction, positive for an endothermic one. */
	deltaH: number;
	kind: 'exothermic' | 'endothermic' | 'thermoneutral';
	/** Arrow for Ea: from the reactant level up to the peak. */
	ea: EnergyArrow;
	/** Arrow for Ea with the catalyst, or null. */
	catalysedEa: EnergyArrow | null;
	/** Arrow for ΔH: from the reactant level to the product level (points down when exothermic). */
	deltaHArrow: EnergyArrow;
	/** Activation energy of the reverse reaction: peak minus products. */
	reverseEa: number;
};

/** The arrows and levels of an energy profile, checked for sense. */
export const energyProfile = (c: EnergyProfileConfig): EnergyProfile => {
	const deltaH = c.products - c.reactants;
	if (!(c.ea > 0)) throw new Error('energyProfile: the activation energy must be positive');
	if (c.ea < deltaH) throw new Error('energyProfile: the hump must be at least as high as the products (Ea ≥ ΔH)');
	if (c.catalysedEa !== undefined && !(c.catalysedEa > 0 && c.catalysedEa < c.ea && c.catalysedEa >= deltaH)) throw new Error('energyProfile: the catalysed Ea must be positive, lower than Ea and at least ΔH');
	const peak = c.reactants + c.ea, catalysedPeak = c.catalysedEa === undefined ? null : c.reactants + c.catalysedEa;
	return {
		config: c, peak, catalysedPeak, deltaH,
		kind: deltaH < 0 ? 'exothermic' : deltaH > 0 ? 'endothermic' : 'thermoneutral',
		ea: {from: c.reactants, to: peak, length: c.ea},
		catalysedEa: catalysedPeak === null ? null : {from: c.reactants, to: catalysedPeak, length: catalysedPeak - c.reactants},
		deltaHArrow: {from: c.reactants, to: c.products, length: deltaH},
		reverseEa: peak - c.products,
	};
};

/** Where the curve is flat and where it peaks, as shares of the reaction-progress axis. */
export const PROFILE_SHAPE = {riseFrom: 0.16, peakAt: 0.46, fallTo: 0.8} as const;
const smooth = (u: number) => { const v = Math.min(1, Math.max(0, u)); return v * v * (3 - 2 * v); };
/**
 * Energy at reaction progress u (0 to 1): flat at the reactants, a smooth rise to the
 * peak, a smooth fall to the products, then flat. `catalysed` uses the lower hump.
 */
export const profileEnergyAt = (p: EnergyProfile, u: number, catalysed = false) => {
	const {riseFrom: a, peakAt: m, fallTo: b} = PROFILE_SHAPE;
	const top = catalysed && p.catalysedPeak !== null ? p.catalysedPeak : p.peak;
	if (u <= m) return p.config.reactants + (top - p.config.reactants) * smooth((u - a) / (m - a));
	return p.config.products + (top - p.config.products) * (1 - smooth((u - m) / (b - m)));
};
