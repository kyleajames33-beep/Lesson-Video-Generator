// Y11 Chem M1 V21 opening: chem-y11-m1-v20's final frame, drawn here from v20's design ("Final frame" and scene 17)
// because v20 is not built yet. When v20 is built, re-match this frame to v20's exported final scene (or replace this
// component with v20's frozen handoff, as V16 and V17 do).
// The frame: heading "Naming compounds: from formula to name"; the navy "Next" chip; at the left the card
// "NaCl: sodium chloride" with teal Na+ and Cl- tags (teal hand tag "ions" with a pen ring); at the right the card
// "CO2: carbon dioxide" with a small C and O sharing a pair of blue dots, tag "shared electrons" (amber hand tag
// "shared pair" with a pen arrow); between them a "?" and the tug-of-war rope line with a blue pair, tag
// "pull on electrons: electronegativity".
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMB_T, E_BL, E_BL_T, INK, NAVY_C, NUC, NUC_T, PAPER, Sx, TEAL_C, prog, richW} from './parts';

export const V20_NEXT = 'Next: how does electron attraction connect ionic and covalent bonding?';
export const V20 = {
	cardL: {x: 96, y: 330, w: 500, h: 230},
	cardR: {x: 1324, y: 330, w: 500, h: 230},
	rope: {x0: 700, x1: 1220, y: 470},
	q: {x: 960, y: 400},
};
/** Parts of the frame can leave on cue: heading, chip, "?", rope (with its tag) and the hand tags. */
export type V20Out = {heading?: number; chip?: number; q?: number; rope?: number; tags?: number};
const out = (f: number, at?: number) => (at === undefined ? 1 : 1 - prog(f, at, 14));
export const V20Final: React.FC<{outs?: V20Out}> = ({outs = {}}) => {
	const f = useCurrentFrame();
	const {cardL: L, cardR: R, rope, q} = V20;
	const cw = richW([{t: V20_NEXT}], 44) + 64;
	const pen = (cx: number, cy: number, rx: number, ry: number, color: string) => <ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill="none" stroke={color} strokeWidth={5} transform={`rotate(-4,${cx},${cy})`} />;
	return (
		<g>
			<g opacity={out(f, outs.heading)}><Sx x={96} y={150} text="Naming compounds: from formula to name" size={60} color={INK} hand weight={700} at={-1000} /></g>
			<g opacity={out(f, outs.chip)}>
				<rect x={96} y={190} width={cw} height={84} rx={22} fill={PAPER} stroke={NAVY_C} strokeWidth={4} />
				<Sx x={128} y={246} text={V20_NEXT} size={44} color={NAVY_C} weight={800} at={-1000} />
			</g>
			{/* NaCl card */}
			<rect x={L.x} y={L.y} width={L.w} height={L.h} rx={20} fill={PAPER} stroke={INK} strokeWidth={4} />
			<Sx x={L.x + 30} y={L.y + 84} text="NaCl" size={72} color={INK} weight={800} at={-1000} />
			<Sx x={L.x + 30} y={L.y + 140} text="sodium chloride" size={38} color={INK} weight={800} at={-1000} />
			<Sx x={L.x + 60} y={L.y + 200} text="Na^{+}" size={40} color={TEAL_C} weight={800} at={-1000} />
			<Sx x={L.x + 200} y={L.y + 200} text="Cl^{−}" size={40} color={TEAL_C} weight={800} at={-1000} />
			<g opacity={out(f, outs.tags)}>
				{pen(L.x + 170, L.y + 186, 150, 34, TEAL_C)}
				<Sx x={L.x + 360} y={L.y + 210} text="ions" size={46} color={TEAL_C} hand weight={700} at={-1000} />
			</g>
			{/* CO2 card */}
			<rect x={R.x} y={R.y} width={R.w} height={R.h} rx={20} fill={PAPER} stroke={INK} strokeWidth={4} />
			<Sx x={R.x + 30} y={R.y + 84} text="CO_2" size={72} color={INK} weight={800} at={-1000} />
			<Sx x={R.x + 30} y={R.y + 140} text="carbon dioxide" size={38} color={INK} weight={800} at={-1000} />
			<circle cx={R.x + 330} cy={R.y + 70} r={30} fill={NUC} stroke={NUC_T} strokeWidth={3} />
			<circle cx={R.x + 430} cy={R.y + 70} r={30} fill={NUC} stroke={NUC_T} strokeWidth={3} />
			<Sx x={R.x + 330} y={R.y + 81} text="C" size={32} color="#ffffff" anchor="middle" weight={800} at={-1000} />
			<Sx x={R.x + 430} y={R.y + 81} text="O" size={32} color="#ffffff" anchor="middle" weight={800} at={-1000} />
			<circle cx={R.x + 380} cy={R.y + 62} r={9} fill={E_BL} stroke={E_BL_T} strokeWidth={2} />
			<circle cx={R.x + 380} cy={R.y + 82} r={9} fill={E_BL} stroke={E_BL_T} strokeWidth={2} />
			<Sx x={R.x + 30} y={R.y + 200} text="shared electrons" size={34} color={AMB_T} weight={800} at={-1000} />
			<g opacity={out(f, outs.tags)}>
				<Sx x={R.x - 20} y={R.y - 26} text="shared pair" size={46} color={AMB_T} hand weight={700} at={-1000} />
				<path d={`M${R.x + 200},${R.y - 30} Q${R.x + 330},${R.y - 40} ${R.x + 372},${R.y + 44}`} fill="none" stroke={AMB_T} strokeWidth={4.5} strokeLinecap="round" />
				<path d={`M${R.x + 358},${R.y + 30} L${R.x + 372},${R.y + 46} L${R.x + 384},${R.y + 28}`} fill="none" stroke={AMB_T} strokeWidth={4.5} strokeLinecap="round" strokeLinejoin="round" />
			</g>
			{/* between: "?" and the rope */}
			<g opacity={out(f, outs.q)}><Sx x={q.x} y={q.y} text="?" size={80} color={INK} anchor="middle" weight={800} at={-1000} /></g>
			<g opacity={out(f, outs.rope)}>
				<line x1={rope.x0} y1={rope.y} x2={rope.x1} y2={rope.y} stroke={INK} strokeWidth={7} strokeLinecap="round" />
				<circle cx={(rope.x0 + rope.x1) / 2 - 13} cy={rope.y} r={12} fill={E_BL} stroke={E_BL_T} strokeWidth={2.5} />
				<circle cx={(rope.x0 + rope.x1) / 2 + 13} cy={rope.y} r={12} fill={E_BL} stroke={E_BL_T} strokeWidth={2.5} />
				<Sx x={(rope.x0 + rope.x1) / 2} y={rope.y + 66} text="pull on electrons: electronegativity" size={34} color={INK} anchor="middle" weight={800} at={-1000} />
			</g>
		</g>
	);
};
