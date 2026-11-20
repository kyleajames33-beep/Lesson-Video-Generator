// Y11 Chem M1 V13 scenes 12 to 17: two HSC-style attempts (whole card with neutral pictures: the magnesium ribbon and
// sulfur samples, then a clear gas jar; ring from "Pause here", 10 s countdown), brief feedback (navy givens strip,
// green framed answers, amber core charges, one red crossed slip), the handoff (the final frame: sodium and chlorine
// at their measured sizes, the "energy?" tug on sodium's outer electron, a second chlorine pulling on a shared pair,
// the "Next" chip) and the key notes with the memory card, which cross-fade back to the handoff's final frame.
import React from 'react';
import {Freeze, useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Givens, QTag} from '../chem-y11-m1-v01/s3';
import {CLJAR, JAR, MG, NA, SULFUR, dur, hold, sc} from './common';
import {
	AMB_S, AMB_T, BLUE_T, Card, Chip, DrawBox, Fade, Framed, GREEN_T, HBar, Heading, INK, NAVY_T, ORANGE, ORANGE_INK, PGrid, PauseHoldR, PenArrow, PenRing, PlateB, Pull, RAtom,
	RED_T, Repel, Rich, SVG, Sx, TEAL_T, Write, boxRC, ePos, lerp, prog, richW, ringsOf, smooth, toward,
} from './parts';
import type {PG, Seg} from './parts';

const Q: React.FC<{lines: string[]; y0?: number; lh?: number}> = ({lines, y0 = 290, lh = 58}) => <>{lines.map((t, i) => <Rich key={i} x={140} y={y0 + i * lh} segs={[{t}]} size={38} weight={700} />)}</>;

// ---------- 12. attempt 1 ----------
const K12 = cues(sc('attempt-1'), {pause: 'Pause here'});
export const SceneAttempt1: React.FC = () => (
	<SVG>
		<Heading text="Your turn" at={0} />
		<QTag />
		<Card h={700} />
		<Q lines={['The atomic radius of magnesium is 141 pm and the', 'atomic radius of sulfur is 105 pm.']} />
		<Q y0={440} lines={['Explain why sulfur atoms are smaller than magnesium', 'atoms, even though they contain more electrons.']} />
		<Sx x={140} y={600} text="(3 marks)" size={34} color={INK} weight={700} at={-1000} />
		<PlateB p={MG} cx={1560} bottom={470} h={180} />
		<PlateB p={SULFUR} cx={1560} bottom={720} h={160} />
		<PauseHoldR h={hold('attempt-1')} at={K12.pause} x={140} y={936} cx={1160} cy={760} />
	</SVG>
);

// ---------- 13. feedback 1 ----------
const K13 = cues(sc('feedback-1'), {both: 'Both are', shell: 'third shell', sulfur: 'Sulfur has', ten: 'with ten', core: 'so its core', six: 'plus six', that: 'That stronger', closer: 'closer', saying: 'Saying sulfur', slip: 'the slip', same: 'same number'});
const S13 = 1.2;
const MG13: [number, number] = [300, 520], S13C: [number, number] = [720, 520];
export const SceneFeedback1: React.FC = () => {
	const f = useCurrentFrame();
	const RM = S13 * 141, RS = S13 * 105;
	const wk = (x: number, lhs: string, v: string, at: number) => {
		const wl = richW([{t: lhs}], 44);
		const x0 = x - (wl + 90) / 2;
		return (
			<g>
				<Rich x={x0} y={820} segs={[{t: lhs}]} size={44} at={at} />
				<Framed x={x0 + wl + 4} y={820} segs={[{t: v, c: AMB_T}]} at={at + 8} size={52} stroke={AMB_S} tick={false} />
			</g>
		);
	};
	const mE: [number, number] = [MG13[0] + RM, MG13[1]], sE: [number, number] = [S13C[0] + RS, S13C[1]];
	return (
		<SVG>
			<Heading text="Your turn" at={-1000} />
			<Givens segs={[{t: 'Mg 141 pm     |     S 105 pm     |     S has more electrons'}]} />
			<RAtom cx={MG13[0]} cy={MG13[1]} rings={ringsOf(3, RM)} counts={[2, 8, 2]} label="12+" nr={30} dot={9} labelSize={30} outerRot={0} />
			<RAtom cx={S13C[0]} cy={S13C[1]} rings={ringsOf(3, RS)} counts={[2, 8, 6]} label="16+" nr={28} dot={9} labelSize={28} outerRot={0} />
			<Pull a={toward(MG13, mE, RM - 13)} b={toward(MG13, mE, 36)} w={4.5} p={prog(f, K13.that, 14)} />
			<Pull a={toward(S13C, sE, RS - 13)} b={toward(S13C, sE, 34)} w={12} p={prog(f, K13.that + 6, 14)} />
			<Sx x={MG13[0]} y={740} text="Mg  2,8,2" size={38} color={INK} anchor="middle" weight={800} at={-1000} />
			<Sx x={S13C[0]} y={740} text="S  2,8,6" size={38} color={INK} anchor="middle" weight={800} at={-1000} />
			{wk(MG13[0], '12 − 10 = ', '+2', K13.ten)}
			{wk(S13C[0], '16 − 10 = ', '+6', K13.core)}
			<Framed x={980} y={380} segs={[{t: 'same period: 3 occupied shells each', c: GREEN_T}]} at={K13.both + 30} size={38} stroke={GREEN_T} />
			<Framed x={980} y={490} segs={[{t: 'S: core charge +6, not +2', c: GREEN_T}]} at={K13.six} size={38} stroke={GREEN_T} />
			<Framed x={980} y={600} segs={[{t: 'stronger pull: outer shell closer', c: GREEN_T}]} at={K13.closer} size={38} stroke={GREEN_T} />
			<Chip x={980} y={660} segs={[{t: 'sulfur has fewer shells'}]} at={K13.saying} size={44} color={RED_T} strike={K13.same} />
			<Write x={1000} y={800} text="both have 3 shells" at={K13.same + 8} size={42} color={RED_T} />
			<PlateB p={MG} cx={1640} bottom={850} h={100} />
			<PlateB p={SULFUR} cx={1640} bottom={940} h={80} />
			{void K13.both}{void K13.sulfur}{void K13.slip}
		</SVG>
	);
};

// ---------- 14. attempt 2 ----------
const K14 = cues(sc('attempt-2'), {pause: 'Pause here'});
export const SceneAttempt2: React.FC = () => (
	<SVG>
		<Heading text="Last one" at={0} />
		<QTag />
		<Card h={700} />
		<Q lines={['An oxygen atom has an atomic radius of 66 pm.']} />
		<Q y0={380} lines={['Predict whether the oxide ion, O^{2−}, is larger or smaller', 'than the oxygen atom. Explain your prediction.']} />
		<Sx x={140} y={540} text="(2 marks)" size={34} color={INK} weight={700} at={-1000} />
		<PlateB p={JAR} cx={1580} bottom={640} h={330} />
		<PauseHoldR h={hold('attempt-2')} at={K14.pause} x={140} y={936} cx={1240} cy={770} />
	</SVG>
);

// ---------- 15. feedback 2 ----------
const K15 = cues(sc('feedback-2'), {larger: 'Larger', same: 'same eight', two: 'two extra', more: 'More repulsion', spreads: 'spreads them', fact: 'In fact', forty: 'one hundred and forty', classic: 'classic slip', doesnt: "It doesn't", comma: ['Two comma six', 1], shells: 'two shells'});
const S15 = 2.0;
const O15: [number, number] = [440, 600];
export const SceneFeedback2: React.FC = () => {
	const f = useCurrentFrame();
	const gain = prog(f, K15.two + 6, 30);
	const widen = smooth(prog(f, K15.spreads - 8, 30));
	const R = lerp(S15 * 66, S15 * 140, widen);
	const rot = -Math.PI / 2;
	const pts = Array.from({length: 8}, (_, j) => ePos(O15[0], O15[1], R, 8, j, rot));
	const rep = prog(f, K15.more, 8) * (1 - prog(f, K15.fact, 12)) * (0.6 + 0.4 * Math.abs(Math.sin(f * 0.25)));
	const isIon = f >= K15.two + 36;
	return (
		<SVG>
			<Heading text="Last one" at={-1000} />
			<Givens segs={[{t: 'O atom 66 pm     |     O^{2−}: 2 more electrons'}]} />
			<Sx x={96} y={330} text={isIon ? 'O^{2−}  2,8' : 'O  2,6'} size={38} color={INK} anchor="start" weight={800} at={-1000} />
			{[0, 2, 4, 6].map(j => <Repel key={j} a={pts[j]} b={pts[j + 1]} o={rep} />)}
			<RAtom cx={O15[0]} cy={O15[1]} rings={[66, R]} counts={[2, 6]} label="8+" nr={30} dot={10} labelSize={32} outerRot={rot} extra={{n: 2, p: gain, from: [O15[0] + 360, O15[1] - 240]}} />
			<Write x={O15[0]} y={910} text="same 8+, more repulsion" at={K15.spreads} size={42} color={BLUE_T} anchor="middle" />
			<Framed x={900} y={380} segs={[{t: 'larger', c: GREEN_T}]} at={K15.larger} size={52} stroke={GREEN_T} />
			<Rich x={900} y={470} segs={[{t: 'same 8 protons;', c: INK}]} size={38} weight={700} at={K15.same} />
			<Rich x={900} y={520} segs={[{t: '2 more electrons in the same shell;', c: INK}]} size={38} weight={700} at={K15.two} />
			<Rich x={900} y={570} segs={[{t: 'more repulsion: ', c: INK}, {t: 'larger', c: GREEN_T}]} size={38} weight={700} at={K15.more} />
			<HBar x={900} y={620} lw={120} label="O" r={66} k={2.4} p={prog(f, K15.forty, 16)} vSize={44} size={40} />
			<HBar x={900} y={690} lw={120} label="O^{2−}" r={140} k={2.4} p={prog(f, K15.forty + 8, 16)} vSize={44} size={40} />
			<Chip x={900} y={772} segs={[{t: 'O^{2−} has an extra shell'}]} at={K15.classic} size={44} color={RED_T} strike={K15.doesnt} />
			<Write x={900} y={910} text="2,6 → 2,8: still 2 shells" at={K15.comma} size={42} color={RED_T} />
			{void K15.shells}
		</SVG>
	);
};

// ---------- 16. handoff: a tighter grip (final frame; chem-y11-m1-v14 opens on it) ----------
const K16 = cues(sc('handoff'), {notice: 'Notice what', small: 'A small atom', tightly: 'tightly', big: 'A big atom', loosely: 'loosely', so: 'So how much', energy: 'energy does', pullOff: 'pull an electron off', strongly: 'how strongly', shares: 'shares', next: 'Next time'});
const S16 = 1.265;
export const NA16: [number, number] = [560, 570];
export const CL16: [number, number] = [1150, 570];
export const RNA16 = S16 * 166, RCL16 = S16 * 102;
export const CL16B: [number, number] = [CL16[0] + 2 * RCL16 * 0.93, 570];
export const SceneHandoff: React.FC = () => {
	const f = useCurrentFrame();
	const clearAt = K16.next - 24;
	const tug = prog(f, K16.pullOff, 26);
	const naRot = -Math.PI * 0.75;
	const naE = ePos(NA16[0], NA16[1], RNA16, 1, 0, naRot);
	const clGlow = prog(f, K16.small, 14) * (1 - prog(f, K16.big, 14));
	const naGlow = prog(f, K16.big, 14) * (1 - prog(f, K16.so, 14));
	const clRot = -0.13;
	const bP = prog(f, K16.strongly, 18);
	const pair: [number, number] = [(CL16[0] + RCL16 * Math.cos(clRot) + CL16B[0] - RCL16 * Math.cos(clRot)) / 2, CL16[1]];
	const naTo: [number, number] = [naE[0] - 64, naE[1] - 64];
	const tp = 0.45 * tug;
	const eNow: [number, number] = [lerp(naE[0], naTo[0], smooth(tp)), lerp(naE[1], naTo[1], smooth(tp))];
	const naOut: [number, number] = [naE[0] - 120, naE[1] - 120];
	return (
		<SVG>
			<Heading text="Atomic radius trends" at={-1000} />
			<RAtom cx={NA16[0]} cy={NA16[1]} rings={ringsOf(3, RNA16)} counts={[2, 8, 1]} label="11+" nr={36} dot={10} labelSize={34} outerRot={naRot} outerHi={naGlow} leave={{to: naTo, p: tp}} />
			<Pull a={toward(NA16, naE, RNA16 - 14)} b={toward(NA16, naE, 42)} w={3.5} p={prog(f, K16.big, 14)} />
			<RAtom cx={CL16[0]} cy={CL16[1]} rings={ringsOf(3, RCL16)} counts={[2, 8, 7]} label="17+" nr={30} dot={9} labelSize={30} outerRot={clRot} outerHi={clGlow} />
			{[0, 1, 2, 3, 4, 5, 6].map(j => {
				const ep = ePos(CL16[0], CL16[1], RCL16, 7, j, clRot);
				return <Pull key={j} a={toward(CL16, ep, RCL16 - 13)} b={toward(CL16, ep, 36)} w={8} p={prog(f, K16.small + j * 2, 14)} />;
			})}
			<Sx x={NA16[0]} y={NA16[1] + RNA16 + 60} text="Na  166 pm" size={44} color={TEAL_T} anchor="middle" weight={800} at={-1000} />
			<Sx x={CL16[0]} y={CL16[1] + RCL16 + 60} text="Cl  102 pm" size={44} color={TEAL_T} anchor="middle" weight={800} at={-1000} />
			{/* grip tags and thumbnails (clear before the chip) */}
			<Write x={CL16[0]} y={CL16[1] - RCL16 - 34} text="tight grip" at={K16.tightly} out={clearAt} size={42} color={AMB_T} anchor="middle" />
			<Write x={NA16[0] - RNA16 - 16} y={NA16[1] + 130} text="loose grip" at={K16.loosely} out={clearAt} size={42} color={AMB_T} anchor="end" />
			<PlateB p={NA} cx={170} bottom={930} h={200} out={clearAt} />
			<PlateB p={CLJAR} cx={1740} bottom={930} h={300} out={clearAt} />
			<Rich x={960} y={262} segs={[{t: 'small atom, strong pull', c: AMB_T}, {t: ': holds its electrons tightly'}]} size={38} anchor="middle" at={K16.small} out={clearAt} />
			<Rich x={960} y={312} segs={[{t: 'big atom, weak pull', c: AMB_T}, {t: ': holds its outer electron loosely'}]} size={38} anchor="middle" at={K16.big} out={clearAt} />
			{/* energy? */}
			{f >= K16.pullOff ? <PenArrow a={[eNow[0] - 16, eNow[1] - 16]} b={naOut} at={K16.pullOff} color={ORANGE} bend={0} width={7} head={20} /> : null}
			<Write x={naOut[0] - 10} y={naOut[1] - 22} text="energy?" at={K16.pullOff + 10} size={44} color={ORANGE_INK} anchor="middle" />
			{/* pull? on a shared pair */}
			{bP > 0.005 ? (
				<g opacity={bP}>
					<RAtom cx={CL16B[0]} cy={CL16B[1]} rings={ringsOf(3, RCL16)} counts={[2, 8, 7]} label="17+" nr={30} dot={9} labelSize={30} outerRot={Math.PI + 0.13} />
				</g>
			) : null}
			<PenRing cx={pair[0]} cy={pair[1]} rx={30} ry={42} at={K16.shares} color={AMB_S} seed={6} />
			<Write x={CL16B[0] + 40} y={CL16[1] - RCL16 - 34} text="pull?" at={K16.shares + 6} size={44} color={AMB_T} anchor="middle" />
			<Chip x={96} y={178} segs={[{t: 'Next: How do first ionisation energy and electronegativity follow atomic structure?'}]} at={K16.next} size={38} color={NAVY_T} />
			{void K16.notice}{void K16.energy}{void K16.so}
		</SVG>
	);
};

// ---------- 17. key notes ----------
const NOTES: Seg[][][] = [
	[[{t: 'Atomic radius', c: TEAL_T}, {t: ': half the distance between two'}], [{t: 'identical bonded nuclei (pm).'}]],
	[[{t: 'Across a period', c: AMB_T}, {t: ': more protons, same shell,'}], [{t: 'stronger pull, smaller radius.'}]],
	[[{t: 'Down a group', c: TEAL_T}, {t: ': one more occupied shell'}], [{t: 'each step, so a larger radius.'}]],
	[[{t: 'Core charge', c: AMB_T}, {t: ' = protons − inner electrons'}], [{t: '(an estimate of the net pull).'}]],
	[[{t: 'Cations', c: RED_T}, {t: ' are smaller than their atoms;'}], [{t: 'anions', c: BLUE_T}, {t: ' are larger.'}]],
];
const GN: PG = {x: 1230, y: 640, cw: 30, ch: 26};
export const SceneNotes: React.FC = () => {
	const f = useCurrentFrame();
	const D = dur('key-notes');
	const outA = D - 46;
	let y = 300;
	const rows = NOTES.map((lines, i) => {
		const y0 = y;
		y += lines.length * 50 + 24;
		return (
			<Fade key={i} at={i * 3}>
				<circle cx={112} cy={y0 - 12} r={8} fill={AMB_S} />
				{lines.map((l, kk) => <Rich key={kk} x={140} y={y0 + kk * 50} segs={l} size={36} weight={700} />)}
			</Fade>
		);
	});
	return (
		<SVG>
			<Fade at={-1000} out={outA} d={18}>
				<Write x={96} y={150} text="Key notes: what to write in your book" at={2} size={60} color={INK} cps={40} />
				<Write x={96} y={214} text="Pause the video if you need more time to copy." at={4} size={38} color={AMB_T} />
				{rows}
				<Fade at={6}>
					<rect x={1170} y={290} width={654} height={620} rx={22} fill="#fffdf8" stroke={NAVY_T} strokeWidth={5} />
					<Sx x={1200} y={334} text="memory aid" size={30} color={INK} hand at={-1000} />
					<Sx x={1210} y={414} text="Across: same shells," size={48} color={AMB_T} hand at={-1000} />
					<Sx x={1210} y={468} text="stronger pull." size={48} color={AMB_T} hand at={-1000} />
					<Sx x={1210} y={548} text="Down: one more shell" size={48} color={TEAL_T} hand at={-1000} />
					<Sx x={1210} y={602} text="each step." size={48} color={TEAL_T} hand at={-1000} />
					<PGrid g={GN} tint={{s: 0.75, p: 0.75, d: 0.75, f: 0.75}} fRows={0} />
					<DrawBox {...boxRC(GN, 3, 3, 1, 18)} at={-1000} color={AMB_S} width={4} pad={2} />
					<DrawBox {...boxRC(GN, 2, 4, 1, 1)} at={-1000} color={TEAL_T} width={4} pad={4} />
					<PenArrow a={[GN.x + 4, GN.y + 7 * GN.ch + 26]} b={[GN.x + 18 * GN.cw, GN.y + 7 * GN.ch + 26]} at={-1000} color={AMB_S} bend={0} width={5} head={16} />
					<Sx x={GN.x + 9 * GN.cw} y={GN.y + 7 * GN.ch + 62} text="smaller →" size={30} color={AMB_T} anchor="middle" weight={800} at={-1000} />
				</Fade>
			</Fade>
			{/* cross-fade back to the handoff's final frame */}
			{f >= outA ? <Fade at={outA + 4} d={18}><Freeze frame={dur('handoff') - 1}><SceneHandoff /></Freeze></Fade> : null}
		</SVG>
	);
};
void Chip; void Repel; void PlateB; void RED_T; void smooth;
