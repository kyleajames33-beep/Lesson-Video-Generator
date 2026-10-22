// S05 "Calculation answers that get full marks": shared pieces. The worked card (HCl + NaOH in a polystyrene cup,
// calculate, 4 marks) is full width in scenes 2 and 3 and shrinks to 0.72 at the end of scene 3; the 9-line answer box
// (1080 px, as s04) sits under it, and the side column at the right (x 1440) holds the step rail tab, kept chips, the
// runs-out bars and the sense gauge. Working: one stage per row, earlier rows dim, kept results ride as chips.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import lesson from '../../../../docs/production/claude-pm/lessons/skills05/measured/lesson.json';
import {Ann, AnsSpec, CardSpec, GREY_INK, PDef, QuestionCard, T, ZONE, cardGeom, lessonHelpers, mkPlate, prog} from './kit';
import {CalCup, HeatOut, TempChip, calPt, calW} from '../chem-m6-c03/parts';
import {CAL_G} from '../chem-m6-c03/assets';

export const {sc, dur, hold} = lessonHelpers(lesson, 'skills05');

// ---------- plates (alpha boxes measured with PIL, alpha > 20) ----------
const C = 'assets/chemistry/', B = 'assets/biology/';
export const CUP = mkPlate(C + 'm6-foam-cup-calorimeter-v1.png', [2000, 2000], [569, 160, 1430, 1840]);
export const FLASK5 = mkPlate(C + 'm6-volumetric-flask-v1.png', [2048, 2048], [683, 164, 1365, 1884]);
/** Bearded dragon: the visible box stops at the sand top (natural y 780), so the egg cut-away below is masked off. */
export const DRAGON = mkPlate(B + 'b2-desert-lizard-v2.png', [1856, 1344], [223, 299, 1654, 780]);

// ---------- layout ----------
export const SX = 1440, SW = 390;
export const CARD_S = 0.72;
export const RAIL_MINI = {x: SX, y: 116, w: SW};

// ---------- the worked card ----------
export const SLOT_W = 290;
export const workSpec = (t: number[] = [-100, -100, -100], marksAt?: number): CardSpec => ({
	x: ZONE.card.x, y: ZONE.card.y, w: ZONE.card.w, subject: 'Chemistry', size: 28, slotW: SLOT_W,
	items: [
		{text: 'A student mixed 60.0 mL of 0.800 mol L^{−1} hydrochloric acid with 40.0 mL of 1.00 mol L^{−1} sodium hydroxide solution in a polystyrene cup. The temperature of the mixture rose from 20.6 °C to 25.8 °C.', at: t[0]},
		{text: 'Assume the density of the mixture is 1.00 g mL^{−1} and its specific heat capacity is 4.18 J g^{−1} °C^{−1}.', at: t[1]},
		{text: 'Calculate the molar enthalpy of neutralisation for this reaction.', marks: '4 marks', at: t[2], marksAt},
	],
});
export const WORK = workSpec();
export const cardH = () => cardGeom(WORK).h;
export const boxTop = () => ZONE.card.y + cardH() * CARD_S + 24;
export const BOX_FULL = (): AnsSpec => ({x: ZONE.box.x, y: ZONE.card.y + cardH() + 24, w: 1080, lines: 9, lh: 46, size: 30, margin: 92});
export const BOX = (): AnsSpec => ({...BOX_FULL(), y: boxTop()});

/** Annotations kept on the worked card from scene 3 on. */
export const BASE_ANN: Ann[] = [
	{kind: 'verb', phrase: 'Calculate', at: -100}, {kind: 'marks', at: -100}, {kind: 'constraint', phrase: 'molar enthalpy of neutralisation', at: -100},
];
export const GIVENS = {
	v1: '60.0 mL', v2: '40.0 mL', c1: '0.800 mol L^{−1}', c2: '1.00 mol L^{−1}', d: '1.00 g mL^{−1}', t1: '20.6 °C', t2: '25.8 °C.', cp: '4.18 J g^{−1} °C^{−1}.',
};
export const given = (keys: (keyof typeof GIVENS)[], at = -100): Ann[] => keys.map((k, i) => ({kind: 'given' as const, phrase: GIVENS[k], at: at + i * 6}));

/** The cup plate in the card's right slot (card coordinates), with the coded readout and optional heat-loss arrows. */
export const CupSlot: React.FC<{spec: CardSpec; at: number; read?: {at: number; rise?: number; up?: number}; heat?: {at: number; out?: number}; tag?: boolean}> = ({spec, at, read, heat, tag = true}) => {
	const f = useCurrentFrame();
	const g = cardGeom(spec);
	const h = Math.min(250, g.slot.h - 40), w = calW(h);
	const x = g.slot.x + g.slot.w - w - 6, y = g.slot.y + 8;
	const o = prog(f, at, 14);
	if (o <= 0.01) return null;
	const wl = calPt(x, y, h, CAL_G.wallL), wr = calPt(x, y, h, CAL_G.wallR), lid = calPt(x, y, h, CAL_G.lidR);
	return (
		<g opacity={o}>
			<CalCup x={x} y={y} h={h} />
			{read ? <TempChip x={g.slot.x - 4} y={y + 6} from={20.6} to={25.8} at={read.at} rise={read.rise} dur={36} size={22} up={read.up} /> : null}
			{heat ? <HeatOut pts={[[wl[0], wl[1], Math.PI], [wr[0], wr[1], 0], [lid[0], lid[1], -0.6]]} at={heat.at} out={heat.out} len={50} /> : null}
			{tag ? <T x={x + w / 2} y={y + h + 26} text="polystyrene cup" size={20} weight={600} color={GREY_INK} anchor="middle" /> : null}
		</g>
	);
};
/** The worked card at 0.72 with its kept annotations. */
export const WorkCardSmall: React.FC<{ann?: Ann[]; children?: React.ReactNode; o?: number}> = ({ann = [], children, o = 1}) => (
	<QuestionCard spec={WORK} at={-100} s={CARD_S} o={o} ann={[...BASE_ANN, ...ann]}>{children}</QuestionCard>
);
export type {PDef};
