// S04 "Analyse, assess, evaluate, justify": shared pieces. The worked card (acid spill, evaluate, 4 marks) is full
// width in scenes 3 and 4 and shrinks to 0.72 at the start of scene 5; the 12-line answer box (wider than the series
// box, 1080 px, so the five rows fit) sits under it from scene 6, role tags sit left of the box, and the side column
// at the right (x 1440) holds the verdict strip tab, the beam and the plate.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import lesson from '../../../../docs/production/claude-pm/lessons/skills04/measured/lesson.json';
import {Ann, AnsSpec, ARow, CARD, CardSpec, QuestionCard, ZONE, cardGeom, lessonHelpers, mkPlate, vis} from './kit';

export const {sc, dur, hold} = lessonHelpers(lesson, 'skills04');

// ---------- plates (alpha boxes measured 21 Oct, PIL alpha > 20) ----------
const C = 'assets/chemistry/';
export const MARBLE = mkPlate(C + 'm6-marble-chips-acid-v1.png', [2000, 2000], [347, 201, 1653, 1800]);
export const BEAKER = mkPlate(C + 'm6-beaker-v1.png', [2048, 2048], [278, 164, 1769, 1884]);

export const SX4 = 1440, SW4 = 440;
export const TAG_X = 318;

// ---------- the worked card ----------
export const spillSpec = (t: number[] = [-100, -100, -100], marksAt?: number): CardSpec => ({
	x: ZONE.card.x, y: ZONE.card.y, w: ZONE.card.w, subject: 'Chemistry', size: 26,
	items: [
		{text: 'About 50 mL of 1 mol L^{−1} hydrochloric acid has been spilled on a laboratory bench. Two substances are available to neutralise it: calcium carbonate powder, CaCO_3(s), and sodium hydroxide solution, 1 mol L^{−1} NaOH(aq).', at: t[0]},
		{table: {head: ['Property', 'CaCO_3 powder', '1 mol L^{−1} NaOH(aq)'], rows: [
			['Hazard', 'low', 'corrosive to skin and eyes'],
			['Solubility in water', 'insoluble', 'soluble'],
			['pH of the mixture if too much is added', 'about 8', 'above 12'],
			['What is seen during neutralisation', 'fizzing, which stops when the acid is used up', 'no visible change'],
			['Speed of neutralisation', 'slower', 'fast'],
		], colW: [470, 570, 360]}, at: t[1]},
		{text: 'Evaluate the use of calcium carbonate, rather than sodium hydroxide solution, to neutralise this spill.', marks: '4 marks', at: t[2], marksAt},
	],
});
export const SPILL_CARD = spillSpec();
export const CARD_S = 0.72;
export const ROW_LABELS = ['Hazard', 'Solubility in water', 'pH of the mixture if too much is added', 'What is seen during neutralisation', 'Speed of neutralisation'];
export const cardH = () => cardGeom(SPILL_CARD).h;
export const boxTop = () => ZONE.card.y + cardH() * CARD_S + 26;
export const boxFull = (): AnsSpec => ({x: ZONE.box.x, y: ZONE.card.y + cardH() + 26, w: 1080, lines: 7, lh: 44, size: 30});
export const BOX4 = (): AnsSpec => ({x: ZONE.box.x, y: boxTop(), w: 1080, lines: 10, lh: 40, size: 28});
export const SPILL_ANN = (t: {verb?: number; marks?: number; rather?: number; ev?: number} = {}): Ann[] => [
	{kind: 'verb', phrase: 'Evaluate', at: t.verb ?? -100}, {kind: 'marks', at: t.marks ?? -100},
	{kind: 'constraint', phrase: 'rather than sodium hydroxide solution,', at: t.rather ?? -100},
	...ROW_LABELS.map((p, i) => ({kind: 'given' as const, phrase: p, at: (t.ev ?? -100) + i * 8})),
];

/** Veil windows over table rows (card coordinates): data row r = 1 is the first row under the header. */
export const TableVeil: React.FC<{spec: CardSpec; item: number; windows: {from: number; to?: number; rows: number[]}[]}> = ({spec, item, windows}) => {
	const f = useCurrentFrame();
	const g = cardGeom(spec);
	const it = g.items[item];
	if (!it.colX || !it.rowH) return null;
	const x0 = it.colX[0], x1 = it.colX[it.colX.length - 1], rh = it.rowH;
	return (
		<g>
			{windows.map((w, i) => {
				const o = vis(f, w.from, w.to, 12);
				return o <= 0.01 ? null : <g key={i}>{w.rows.map(r => <rect key={r} x={x0 + 1} y={it.y0 + r * rh + 1} width={x1 - x0 - 2} height={rh - 2} fill={CARD} opacity={0.62 * o} />)}</g>;
			})}
		</g>
	);
};
/** The worked card at 0.72 with its annotations. */
export const SpillCardSmall: React.FC<{o?: number; ann?: Ann[]; children?: React.ReactNode}> = ({o = 1, ann = [], children}) => (
	<QuestionCard spec={SPILL_CARD} at={-100} s={CARD_S} o={o} ann={[...SPILL_ANN(), ...ann]}>{children}</QuestionCard>
);

// ---------- the worked answer ----------
export const ROWS4_TEXT = [
	'Calcium carbonate is the more suitable choice for neutralising this spill.',
	'Safety: CaCO_3 is low hazard, whereas NaOH solution is corrosive to skin and eyes, so CaCO_3 is safer to handle during the clean-up.',
	'Excess: CaCO_3 is insoluble, so any excess stays as a solid and the mixture stays near pH 8; excess NaOH would leave a strongly basic, corrosive solution above pH 12.',
	'Endpoint: CaCO_3 fizzes (CO_2) as it reacts, and the fizzing stops when the acid is used up, showing when neutralisation is complete; NaOH gives no visible sign, so it is easy to add too much.',
	'Limitation: CaCO_3 neutralises more slowly and releases CO_2 gas, but for a 50 mL spill the CO_2 released is small, so these matter less than safety and control, and CaCO_3 is the better choice.',
];
export const ROWS4_DONE: ARow[] = ROWS4_TEXT.map((text, i) => ({text, at: -1000, tick: i === 0 ? undefined : -1000}));
