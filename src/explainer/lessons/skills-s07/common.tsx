// S07 "Practical questions: fixes that fix": shared pieces. The worked card (ethanol against propan-1-ol in a spirit
// burner under an uncovered copper can, a results table and three demands, 7 marks) is full width in scene 4 and
// shrinks to 0.72 for the walkthrough (scenes 5 to 7); each part has its own answer box under it (earlier parts are
// summed in the counter), and the side column at the right (x 1440) holds the fix rail tab, kept chips, the variables
// strip and the percentage bars. The spirit-burner plate sits in the card's slot, placed by chem-m7-p03's shared outline
// (SetP) so the base and shielded plates cross-fade without shifting.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import lesson from '../../../../docs/production/claude-pm/lessons/skills07/measured/lesson.json';
import {AMBER_INK, Ann, AnsSpec, CardSpec, DrawPath, GREY_INK, INK, QuestionCard, T, ZONE, cardGeom, lessonHelpers, lerp, mkPlate, prog, smooth} from './kit';
import {SET} from '../chem-m7-p03/common';
import {Bounce, Escape, SetP, sp} from '../chem-m7-p03/parts';
import type {SetPos} from '../chem-m7-p03/parts';

export const {sc, dur, hold} = lessonHelpers(lesson, 'skills07');

// ---------- plates (alpha boxes measured with PIL, alpha > 20) ----------
const C = 'assets/chemistry/', B = 'assets/biology/';
export const CUP7 = mkPlate(C + 'm6-foam-cup-calorimeter-v1.png', [2000, 2000], [569, 160, 1430, 1840]);
export const BOTTLE7 = mkPlate(C + 'm7-ethanol-fuel-bottle-v1.png', [2000, 2000], [630, 201, 1369, 1798]);
/** One clear bottle each (box crops of the three-bottle plate; draw with ClipPlate so the cloudy middle bottle is cut). */
export const TAP = mkPlate(B + 'm7-sample-bottles-three-v1.png', [2000, 2000], [322, 575, 745, 1407]);
export const TANK = mkPlate(B + 'm7-sample-bottles-three-v1.png', [2000, 2000], [1256, 575, 1679, 1407]);
export const PSPARSE = mkPlate(B + 'm7-plate-sparse-v1.png', [2000, 2000], [293, 288, 1707, 1691]);
export const PCOUNT = mkPlate(B + 'm7-plate-countable-v1.png', [2000, 2000], [293, 288, 1707, 1691]);
export const AGAR = mkPlate(B + 'm6-agar-dish-top-v1.png', [2000, 2000], [200, 215, 1799, 1784]);
export {SET};

// ---------- layout ----------
export const SX = 1440, SW = 390;
export const CARD_S = 0.72;
export const RAIL_MINI = {x: SX, y: 116, w: SW};

// ---------- the worked card ----------
export const SLOT_W = 300;
export const workSpec = (t: number[] = [-100, -100, -100, -100, -100], marksAt: number[] = []): CardSpec => ({
	x: ZONE.card.x, y: ZONE.card.y, w: ZONE.card.w, subject: 'Chemistry', size: 25, slotW: SLOT_W,
	items: [
		{text: 'A student compared the molar enthalpies of combustion of ethanol and propan-1-ol. For each trial, she burned the alcohol in a spirit burner beneath an uncovered copper can containing 100.0 g of water, with no draught shield, and stopped when the water had warmed by about 15 °C. The can was 2 cm above the wick for ethanol, but because the propan-1-ol flame was taller, she raised it to 6 cm for propan-1-ol. She did three trials of each alcohol. Values are in kJ mol^{−1}.', at: t[0]},
		{table: {head: ['Alcohol', 'Trial 1', 'Trial 2', 'Trial 3', 'Mean', 'Data value'], rows: [['Ethanol', '−592', '−585', '−598', '−592', '−1367'], ['Propan-1-ol', '−693', '−705', '−687', '−695', '−2021']], colW: [190, 135, 135, 135, 135, 170]}, at: t[1]},
		{text: '(a) Assess the reliability of the student\'s results.', marks: '2 marks', at: t[2], marksAt: marksAt[0], gap: 0.5},
		{text: '(b) The student claims that doing ten trials of each alcohol would make her values closer to the data values. Evaluate this claim.', marks: '2 marks', at: t[3], marksAt: marksAt[1], gap: 0.3},
		{text: '(c) Explain how ONE feature of the method affects the validity of her comparison, and propose a change that fixes it.', marks: '3 marks', at: t[4], marksAt: marksAt[2], gap: 0.3},
	],
});
export const WORK = workSpec();
export const cardH = () => cardGeom(WORK).h;
export const boxTop = () => ZONE.card.y + cardH() * CARD_S + 22;
export const BOX = (lines = 9): AnsSpec => ({x: ZONE.box.x, y: boxTop(), w: 1080, lines, lh: 46, size: 28, margin: 92});

// ---------- the set in the card slot ----------
export const setPos = (spec: CardSpec): SetPos => {
	const g = cardGeom(spec);
	const h = Math.min(330, g.slot.h - 30);
	return {cx: g.slot.x + g.slot.w / 2 + 10, top: g.slot.y + 6, h};
};
/** The spirit-burner set in the card slot, with an optional distance bracket ("2 cm" to "6 cm"), escaping heat and
 *  the shield cross-fade. Card coordinates (a child of QuestionCard). `dist` 0 is 2 cm, 1 is 6 cm. */
export const SetSlot: React.FC<{spec: CardSpec; at: number; dist?: number; distAt?: number; heat?: {at: number; out?: number; o?: number}; shield?: number; bounce?: number; tag?: boolean}> = ({spec, at, dist = 0, distAt, heat, shield, bounce, tag = true}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 14);
	if (o <= 0.01) return null;
	const P = setPos(spec);
	const fl = sp(P, 'flame'), base = sp(P, 'base');
	const bx = base[0] + P.h * 0.26;
	const d = smooth(dist);
	const yTop = lerp(base[1] + 6, base[1] - (fl[1] - base[1]) * 1.6, d);
	return (
		<g opacity={o}>
			<SetP P={P} p={SET.base} to={SET.shield} swap={shield} />
			{heat ? <Escape P={P} at={heat.at} out={heat.out} o={heat.o ?? 1} /> : null}
			{bounce !== undefined ? <Bounce P={P} at={bounce} /> : null}
			{distAt !== undefined && f >= distAt ? (
				<g opacity={prog(f, distAt, 10)}>
					<DrawPath d={`M${bx - 8},${fl[1] - 8} L${bx},${fl[1] - 8} L${bx},${yTop} L${bx - 8},${yTop}`} at={distAt} dur={10} color={AMBER_INK} width={3} />
					<T x={bx + 8} y={(fl[1] + yTop) / 2 + 6} text={d > 0.5 ? '6 cm' : '2 cm'} size={20} weight={800} color={AMBER_INK} />
				</g>
			) : null}
			{tag ? <T x={P.cx} y={P.top + P.h + 22} text="spirit burner, uncovered copper can" size={16} weight={600} color={GREY_INK} anchor="middle" /> : null}
		</g>
	);
};
/** The worked card at 0.72 with the set and its kept annotations. */
export const WorkSmall: React.FC<{ann?: Ann[]; dims?: {items: number[]; at: number; out?: number; to?: number}[]; children?: React.ReactNode; set?: React.ReactNode}> = ({ann = [], dims = [], children, set}) => (
	<QuestionCard spec={WORK} at={-100} s={CARD_S} ann={ann} dims={dims}>
		{set ?? <SetSlot spec={WORK} at={-100} dist={1} distAt={-100} />}
		{children}
	</QuestionCard>
);
export {INK};
