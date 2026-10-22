// M6 G02 question cards: each question's stem, data and demands as an exam prints them (HSC-style, written for
// HSCScience). Blocks write on their narration cues during the attempt; during the walkthrough the same card is shown
// shrunk to a strip (all blocks already written) and each given is underlined in amber at the cue where it is used.
import React from 'react';
import {FERT, PHMETER, SODA_BOX} from './assets';
import {FullMeter, INK, PlateAt, QBox, QText, Sx, meterBeaker, picW, qCheck} from './parts';
import type {QBlock, QMark} from './parts';
import {useCurrentFrame} from 'remotion';

export const QX = 140;

// ---------- Q1: hypochlorous acid ----------
export type T1 = [number, number, number, number];
const Q1B = (t: T1): QBlock[] => [
	{text: 'Hypochlorous acid, HOCl, is a weak monoprotic acid that forms when chlorine is added to pool water.', at: t[0]},
	{text: 'Ka(HOCl) = 3.0 × 10⁻⁸ at 25 °C.', at: t[2]},
	{text: 'Calculate the pH of a 0.0500 mol/L solution of hypochlorous acid at 25 °C.', at: t[1], para: true, weight: 700},
	{text: 'Justify any approximation you make.', at: t[3], weight: 700},
];
export const Q1M = {ka: 'Ka(HOCl)', kaV: '3.0', kaE: '10⁻⁸', c: '0.0500 mol/L', just: 'Justify any approximation you make'};
qCheck(Q1B([0, 0, 0, 0]), Object.values(Q1M).map(phrase => ({phrase, at: 0})));
export const Q1H = 300;
export const Question1: React.FC<{t: T1; marks?: QMark[]}> = ({t, marks = []}) => (
	<>
		<QBox h={Q1H} at={t[0] - 6} />
		<QText q={qCheck(Q1B(t), marks)} x={QX} y={268} w={1640} size={42} card={false} />
	</>
);

// ---------- Q2: chloroethanoic acid ----------
export type T2 = [number, number, number, number];
const Q2B = (t: T2): QBlock[] => [
	{text: 'Chloroethanoic acid, CH₂ClCOOH, is a weak monoprotic acid.', at: t[0]},
	{text: 'Ka = 1.4 × 10⁻³ at 25 °C.', at: t[1]},
	{text: '(a) Show that the simplifying assumption [HA] ≈ c cannot be used for a 0.0200 mol/L solution.', at: t[2], para: true, weight: 700},
	{text: '(b) Calculate the pH of the 0.0200 mol/L solution at 25 °C.', at: t[3], para: true, weight: 700},
];
export const Q2M = {ka: 'Ka', kaV: '1.4', kaE: '10⁻³', c: '0.0200 mol/L', show: 'Show that the simplifying assumption', calc: 'Calculate the pH of the 0.0200'};
qCheck(Q2B([0, 0, 0, 0]), Object.values(Q2M).map(phrase => ({phrase, at: 0})));
export const Q2H = 330;
export const Question2: React.FC<{t: T2; marks?: QMark[]}> = ({t, marks = []}) => (
	<>
		<QBox h={Q2H} at={t[0] - 6} />
		<QText q={qCheck(Q2B(t), marks)} x={QX} y={268} w={1640} size={42} card={false} />
	</>
);

// ---------- Q3: benzoic acid from a measured pH ----------
export type T3 = [number, number, number];
const Q3B = (t: T3): QBlock[] => [
	{text: 'Benzoic acid, C₆H₅COOH, is a weak monoprotic acid used as a food preservative.', at: t[0]},
	{text: 'A 0.0150 mol/L solution of benzoic acid has a measured pH of 3.03 at 25 °C.', at: t[1]},
	{text: 'Calculate the acid dissociation constant, Ka, and the pKa of benzoic acid.', at: t[2], para: true, weight: 700},
];
export const Q3M = {ph: 'measured pH of 3.03', c: '0.0150 mol/L'};
qCheck(Q3B([0, 0, 0]), Object.values(Q3M).map(phrase => ({phrase, at: 0})));
export const Q3H = 330;
export const M3 = {x: 1440, y: 214, h: 240};
export const Question3: React.FC<{t: T3; marks?: QMark[]; readPulse?: number; labelPulse?: number}> = ({t, marks = [], readPulse, labelPulse}) => {
	const f = useCurrentFrame();
	const mb = meterBeaker(M3.x, M3.y, M3.h);
	const lp = labelPulse === undefined ? 0 : Math.max(0, Math.sin(Math.min(1, Math.max(0, (f - labelPulse) / 40)) * Math.PI));
	void picW;
	return (
		<>
			<QBox h={Q3H} at={t[0] - 6} />
			<FullMeter x={M3.x} y={M3.y} h={M3.h} at={t[1]} read={() => '3.03'} pulse={readPulse} />
			{lp > 0.01 ? <rect x={mb.cx - 150} y={mb.bottom + 12} width={300} height={44} rx={12} fill="#f6d77a" opacity={0.6 * lp} /> : null}
			<Sx x={mb.cx} y={mb.bottom + 44} text="benzoic acid, 0.0150 mol/L" size={26} color={INK} anchor="middle" weight={700} at={t[1]} />
			<QText q={qCheck(Q3B(t), marks)} x={QX} y={268} w={1280} size={42} card={false} />
		</>
	);
};

// ---------- Q4: two amphiprotic ions ----------
export type T4 = [number, number, number, number, number, number];
const Q4B = (t: T4): QBlock[] => [
	{text: 'Sodium hydrogen carbonate, NaHCO₃ (baking soda), and', at: t[0]},
	{text: 'potassium dihydrogen phosphate, KH₂PO₄ (used in some fertilisers), dissolve in water to give the amphiprotic ions HCO₃⁻ and H₂PO₄⁻.', at: t[1]},
	{text: '(a) For each ion, write an equation for its reaction with water as an acid, and as a base.', at: t[3], para: true, weight: 700},
	{text: '(b) Use Ka and Kb values to determine which reaction mainly occurs for each ion.', at: t[4], para: true, weight: 700},
	{text: '(c) Predict whether a solution of each salt is acidic or basic.', at: t[5], para: true, weight: 700},
];
const Q4D = (t: T4): QBlock[] => [
	{text: 'Ka(H₂CO₃) = 4.3 × 10⁻⁷', at: t[2]},
	{text: 'Ka(HCO₃⁻) = 4.7 × 10⁻¹¹', at: t[2] + 4, para: true},
	{text: 'Ka(H₃PO₄) = 7.1 × 10⁻³', at: t[2] + 8, para: true},
	{text: 'Ka(H₂PO₄⁻) = 6.3 × 10⁻⁸', at: t[2] + 12, para: true},
	{text: 'Kw = 1.0 × 10⁻¹⁴ (all at 25 °C)', at: t[2] + 16, para: true},
];
/** Data underlines: each Ka name (the carbonate names and the phosphate names normalise alike, so `occ` picks one)
 *  with its value, and Kw. */
export const Q4M = {
	h2co3: [{phrase: 'Ka(H₂CO₃)', occ: 1}, {phrase: '4.3'}], hco3: [{phrase: 'Ka(HCO₃⁻)', occ: 2}, {phrase: '4.7'}],
	h3po4: [{phrase: 'Ka(H₃PO₄)', occ: 1}, {phrase: '7.1'}], h2po4: [{phrase: 'Ka(H₂PO₄⁻)', occ: 2}, {phrase: '6.3'}], kw: [{phrase: 'Kw'}],
};
export const q4Marks = (k: keyof typeof Q4M, at: number): QMark[] => Q4M[k].map((m, i) => ({...m, at: at + i * 6}));
qCheck(Q4D([0, 0, 0, 0, 0, 0]), (Object.keys(Q4M) as (keyof typeof Q4M)[]).flatMap(k => q4Marks(k, 0)));
export const Q4H = 560;
export const Question4: React.FC<{t: T4; marks?: QMark[]}> = ({t, marks = []}) => (
	<>
		<QBox h={Q4H} at={t[0] - 6} />
		<PlateAt p={SODA_BOX} x={1400} y={214} h={150} at={t[0]} />
		<Sx x={1400 + picW(SODA_BOX, 150) / 2} y={396} text="NaHCO_3" size={28} color={INK} anchor="middle" weight={700} at={t[0]} />
		<PlateAt p={FERT} x={1620} y={250} h={110} at={t[1]} />
		<Sx x={1620 + picW(FERT, 110) / 2} y={396} text="KH_2PO_4" size={28} color={INK} anchor="middle" weight={700} at={t[1]} />
		<QText q={qCheck(Q4B(t), [])} x={QX} y={262} w={1200} size={36} card={false} />
		<QText q={qCheck(Q4D(t), marks)} x={1400} y={460} w={420} size={30} card={false} lh={34} />
	</>
);
void PHMETER;
