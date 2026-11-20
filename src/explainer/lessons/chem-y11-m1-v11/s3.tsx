// Y11 Chem M1 V11 scenes 14 to 19: two HSC-style attempts (whole card with a neutral picture: the sulfur sample and
// the data-sheet table with V lit; ring from "Pause here", 10 s countdown), brief feedback (navy givens strip, the
// boxes or a mini ladder, green framed answers, one red crossed slip), the handoff (the table with P, Cl, K and Fe lit
// by their last subshells and the 2, 10, 6 column question: the final frame) and the key notes with the memory card,
// which cross-fade back to the handoff's final frame.
import React from 'react';
import {Freeze, useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Givens, QTag} from '../chem-y11-m1-v01/s3';
import {SULFUR, dur, hold, pw, sc} from './common';
import {
	Bracket, Card, Chip, EArrow, D_FILL, D_INK, DrawPath, Fade, Framed, GREEN_T, Heading, INK, Ladder, MIX, NAVY_T, ORow, P_FILL, P_INK, PTable, PauseHoldR, Plate, PURE, RED_T, RO, Rich, RowRings,
	S_FILL, S_INK, SVG, Sx, TickMark, Write, hund, hundC, kf, prog, richW,
} from './parts';
import type {LadG, PTG, Seg} from './parts';

const Q: React.FC<{lines: string[]; y0?: number; lh?: number}> = ({lines, y0 = 290, lh = 58}) => <>{lines.map((t, i) => <Rich key={i} x={140} y={y0 + i * lh} segs={[{t}]} size={38} weight={700} />)}</>;
const sumW = (t: string, size: number) => richW([{t}], size);

// ---------- 14. attempt 1 ----------
const K14 = cues(sc('attempt-1'), {pause: 'Pause here'});
export const SceneAttempt1: React.FC = () => {
	const sw = 520;
	return (
		<SVG>
			<Heading text="Your turn" at={0} />
			<QTag />
			<Card h={700} />
			<Q lines={['Sulfur has atomic number 16.']} />
			<Q y0={370} lines={['(a)  Write the full electron configuration of a', '       sulfur atom in spdf notation.']} />
			<Q y0={508} lines={['(b)  Draw the orbital diagram for its 3p subshell', '       and state the number of unpaired electrons', '       in a sulfur atom.']} />
			<Sx x={140} y={720} text="(3 marks)" size={34} color={INK} weight={700} at={-1000} />
			<Plate p={SULFUR} x={1250} y={330} h={(sw / SULFUR.box[2]) * SULFUR.box[3]} />
			<PauseHoldR h={hold('attempt-1')} at={K14.pause} x={140} y={936} cx={840} cy={760} />
		</SVG>
	);
};

// ---------- 15. feedback 1 ----------
const K15 = cues(sc('feedback-1'), {sulfur: 'Sulfur is', adding: 'adding to', in3p: 'In three p', first: 'the first three', fourth: 'the fourth', that: "That's one pair", two: 'two unpaired', pairing: 'Pairing them', slip: 'classic slip', box: 'box comes'});
export const SceneFeedback1: React.FC = () => {
	const f = useCurrentFrame();
	const c = kf(f, [[K15.first, 0], [K15.first + 36, 3], [K15.fourth, 3], [K15.fourth + 16, 4]]);
	const B = 160, G = 18, X = 260, Y = 380;
	const a = '(a)  1s^{2} 2s^{2} 2p^{6} 3s^{2} 3p^{4}', sum = '2 + 2 + 6 + 2 + 4 = 16';
	return (
		<SVG>
			<Heading text="Your turn" at={-1000} />
			<Givens segs={[{t: 'sulfur     |     Z = 16     |     16 electrons'}]} />
			<ORow x={X} y={Y} b={B} gap={G} cells={hundC(3, c)} t="p" label="3p" labelSize={52} />
			{/* sulfur's four 3p electrons wait above the boxes until they are placed */}
			{[0, 1, 2, 3].map(k => <EArrow key={k} x={X + 90 + k * 46} y={322 + Math.sin(f * 0.1 + k) * 4} L={76} up p={1 - Math.max(0, Math.min(1, c - k))} />)}
			<Sx x={X + 270} y={336} text="4 electrons for 3p" size={30} color={INK} weight={800} at={-1000} out={K15.fourth + 16} />
			<Sx x={X} y={Y + B + 54} text="sulfur's 3p subshell" size={30} color={INK} weight={800} at={-1000} />
			<RowRings x={X} y={Y} b={B} gap={G} m={3} k={4} at={K15.two} />
			<Plate p={SULFUR} x={150} y={650} h={(560 / SULFUR.box[2]) * SULFUR.box[3]} />
			<Framed x={860} y={390} segs={[{t: a, c: GREEN_T}]} at={K15.adding} size={52} stroke={GREEN_T} />
			<Rich x={884} y={462} segs={[{t: sum, c: NAVY_T}]} size={40} at={K15.adding + 10} />
			<Framed x={860} y={590} segs={[{t: '(b)  2 unpaired', c: GREEN_T}]} at={K15.two} size={52} stroke={GREEN_T} />
			<Sx x={884} y={650} text="one pair and two singles" size={30} color={INK} weight={800} at={K15.two + 10} />
			<Fade at={K15.pairing}>
				<rect x={860} y={700} width={600} height={130} rx={18} fill="#fffdf8" stroke={RED_T} strokeWidth={4} />
				<ORow x={890} y={725} b={80} gap={10} cells={[[1, 1], [1, 1], [0, 0]]} t="p" />
				<Sx x={1170} y={782} text="0 unpaired" size={40} color={INK} weight={800} at={-1000} />
			</Fade>
			{f >= K15.slip ? <DrawPath d="M870,820 L1450,710" at={K15.slip} dur={10} color={RED_T} width={8} /> : null}
			<Write x={1490} y={784} text="one per box first" at={K15.box - 6} size={46} color={RED_T} />
			{void K15.sulfur}{void K15.in3p}{void K15.that}
		</SVG>
	);
};

// ---------- 16. attempt 2 ----------
const K16 = cues(sc('attempt-2'), {pause: 'Pause here'});
const PT16: PTG = {x: 1170, y: 300, cw: 36, ch: 46};
export const SceneAttempt2: React.FC = () => (
	<SVG>
		<Heading text="Last one" at={0} />
		<QTag />
		<Card h={700} />
		<Q lines={['Vanadium has atomic number 23.']} />
		<Q y0={370} lines={['(a)  Write the electron configuration of a', '       vanadium atom using noble-gas shorthand.']} />
		<Q y0={508} lines={['(b)  State the number of unpaired electrons', '       in a vanadium atom.']} />
		<Sx x={140} y={660} text="(2 marks)" size={34} color={INK} weight={700} at={-1000} />
		<PTable g={PT16} plain zSize={0} pop={1.5} lit={[{z: 23, at: -1000, color: D_INK, fill: D_FILL}]} />
		<Sx x={PT16.x} y={PT16.y + 7 * PT16.ch + 50} text="data sheet: V is element 23" size={30} color={INK} weight={800} at={-1000} />
		<PauseHoldR h={hold('attempt-2')} at={K16.pause} x={140} y={936} cx={840} cy={760} />
	</SVG>
);

// ---------- 17. feedback 2 ----------
const K17 = cues(sc('feedback-2'), {argon: 'Argon takes', four: 'Four s fills', twenty: 'making twenty', last: 'the last three', so: 'So vanadium', two: 'four s two', go: 'electrons go', three: 'three unpaired', writing: 'Writing argon', slip: 'classic slip', fills: 'It fills', first: 'comes first'});
const LGV: LadG = {b: 100, gap: 10, col: {s: 250, p: 380, d: 380}, y: {'1s': 740, '2s': 740, '2p': 740, '3s': 760, '3p': 760, '4s': 600, '3d': 480}, labelSize: 44};
export const SceneFeedback2: React.FC = () => {
	const f = useCurrentFrame();
	const c = kf(f, [[K17.four, 18], [K17.twenty, 20], [K17.last, 20], [K17.last + 34, 23]]), n = Math.floor(c + 1e-6);
	const a = '(a)  [Ar] 3d^{3} 4s^{2}', sum = '18 + 3 + 2 = 23';
	return (
		<SVG>
			<Heading text="Last one" at={-1000} />
			<Givens segs={[{t: 'vanadium     |     Z = 23     |     [Ar] = 18'}]} />
			<RO x={160} y={330} w={320} label="electrons placed" text={`${n}`} />
			<Ladder g={LGV} c={c} fold={1} core={['1s', '2s', '2p', '3s', '3p']} coreLabel="[Ar]" coreSub="18 electrons" />
			<RowRings x={LGV.col.d} y={LGV.y['3d'] as number} b={LGV.b} gap={LGV.gap} m={5} k={3} at={K17.three} />
			<Framed x={980} y={400} segs={[{t: a, c: GREEN_T}]} at={K17.two - 8} size={52} stroke={GREEN_T} />
			<Rich x={1004} y={472} segs={[{t: sum, c: NAVY_T}]} size={40} at={K17.two + 4} />
			<TickMark x={1004 + sumW(sum, 40) + 30} y={458} at={K17.two + 14} color={NAVY_T} />
			<Framed x={980} y={600} segs={[{t: '(b)  3 unpaired', c: GREEN_T}]} at={K17.three} size={52} stroke={GREEN_T} />
			<Sx x={1004} y={660} text="three 3d electrons, one per box" size={30} color={INK} weight={800} at={K17.three + 10} />
			<Chip x={980} y={710} segs={[{t: '[Ar] 3d^{5}'}]} at={K17.writing} size={44} color={RED_T} strike={K17.slip} />
			<Write x={1290} y={760} text="4s fills first" at={K17.fills} size={46} color={RED_T} />
			{void K17.argon}{void K17.so}{void K17.go}{void K17.first}
		</SVG>
	);
};

// ---------- 18. handoff: back to the table (final frame; chem-y11-m1-v12 opens on it) ----------
const K18 = cues(sc('handoff'), {look: 'Now look', p: 'Phosphorus and', cl: 'chlorine both', share: 'share a row', k: "Potassium's", iron: 'iron is', accident: 'no accident', next: 'Next, how', periods: 'periods'});
export const G18: PTG = {x: 168, y: 330, cw: 88, ch: 72};
export const SceneHandoff: React.FC = () => {
	const f = useCurrentFrame();
	const lit = [
		{z: 15, at: K18.p, color: P_INK, fill: P_FILL, end: '…3p^{3}'},
		{z: 17, at: K18.cl, color: P_INK, fill: P_FILL, end: '…3p^{5}'},
		{z: 19, at: K18.k, color: S_INK, fill: S_FILL, end: '…4s^{1}'},
		{z: 26, at: K18.iron, color: D_INK, fill: D_FILL, end: '…3d^{6}'},
	];
	const X = (col: number) => G18.x + (col - 1) * G18.cw;
	const br = [[1, 2, '2?', S_INK], [3, 12, '10?', D_INK], [13, 18, '6?', P_INK]] as const;
	const rowY = G18.y + 2 * G18.ch + G18.ch / 2;
	return (
		<SVG>
			<Heading text="Where do our atoms sit?" at={0} out={K18.next - 6} />
			<PTable g={G18} lit={lit} pop={1.3} />
			{f >= K18.share ? <DrawPath d={`M${X(3) + 6},${rowY} L${X(13) - 6},${rowY}`} at={K18.share} dur={20} color={GREEN_T} width={9} /> : null}
			<Sx x={(X(3) + X(13)) / 2} y={rowY - 16} text="period 3" size={30} color={P_INK} anchor="middle" weight={800} at={K18.share + 8} />
			{br.map(([c0, c1, t, col], i) => (
				<g key={i}>
					<Bracket a={[X(c0) + 4, 314]} b={[X(c1 + 1) - 4, 314]} at={K18.accident + i * 8} color={col} depth={-16} />
					<Sx x={(X(c0) + X(c1 + 1)) / 2} y={280} text={t} size={38} color={col} anchor="middle" weight={800} at={K18.accident + 6 + i * 8} />
				</g>
			))}
			<Chip x={960} y={862} segs={[{t: 'Next: How do electron arrangements organise groups and periods?'}]} at={K18.next - 6} size={44} color={PURE} anchor="middle" />
			{void K18.look}{void K18.periods}
		</SVG>
	);
};

// ---------- 19. key notes ----------
const NOTES: Seg[][][] = [
	[[{t: 'Level n has n subshell types ('}, {t: 's', c: S_INK}, {t: ', '}, {t: 'p', c: P_INK}, {t: ', '}, {t: 'd', c: D_INK}, {t: ', f).'}]],
	[[{t: 'Orbitals: '}, {t: 's 1', c: S_INK}, {t: ', '}, {t: 'p 3', c: P_INK}, {t: ', '}, {t: 'd 5', c: D_INK}, {t: ', f 7; two electrons each.'}]],
	[[{t: '3p^{5}: level 3, p subshell, 5 electrons.'}], [{t: 'Superscripts add to the electron total.'}]],
	[[{t: 'Fill 1s 2s 2p 3s 3p '}, {t: '4s 3d', c: D_INK}, {t: ' (4s first).'}], [{t: 'Write in level order: [Ar] 3d^{6} 4s^{2}.'}]],
	[[{t: 'Equal-energy orbitals: one per box, then pair.'}]],
];
export const SceneNotes: React.FC = () => {
	const f = useCurrentFrame();
	const D = dur('key-notes');
	const outA = D - 46;
	let y = 300;
	const rows = NOTES.map((lines, i) => {
		const y0 = y;
		y += lines.length * 52 + 44;
		return (
			<Fade key={i} at={i * 3}>
				<circle cx={112} cy={y0 - 12} r={8} fill="#e8a33d" />
				{lines.map((l, kk) => <Rich key={kk} x={140} y={y0 + kk * 52} segs={l} size={36} weight={700} />)}
			</Fade>
		);
	});
	return (
		<SVG>
			<Fade at={-1000} out={outA} d={18}>
				<Write x={96} y={150} text="Key notes: what to write in your book" at={2} size={60} color={INK} cps={40} />
				<Write x={96} y={214} text="Pause the video if you need more time to copy." at={4} size={38} color={MIX} />
				{rows}
				<Fade at={6}>
					<rect x={1170} y={290} width={654} height={600} rx={22} fill="#fffdf8" stroke={NAVY_T} strokeWidth={5} />
					<Sx x={1200} y={338} text="memory aid" size={36} color={INK} hand at={-1000} />
					<Sx x={1210} y={420} text="Lowest first," size={56} color={S_INK} hand at={-1000} />
					<Sx x={1210} y={490} text="one per box, then pair," size={52} color={P_INK} hand at={-1000} />
					<Sx x={1210} y={560} text="and check the total." size={52} color={NAVY_T} hand at={-1000} />
					<ORow x={1330} y={640} b={110} gap={14} cells={hund(3, 4)} t="p" label="3p" labelSize={44} />
					<Sx x={1330} y={810} text="one per box, then pair" size={30} color={INK} weight={800} at={-1000} />
				</Fade>
			</Fade>
			{/* cross-fade back to the handoff's final frame */}
			{f >= outA ? <Fade at={outA + 4} d={18}><Freeze frame={dur('handoff') - 1}><SceneHandoff /></Freeze></Fade> : null}
		</SVG>
	);
};
