// Y11 Chem M1 V21 scenes 14 to 19: two HSC-style attempts (whole card with a neutral picture: a plain periodic
// outline with five cells lit by symbol; the ammonia bottle; ring from "Pause here", 10 s countdown), brief feedback
// (navy givens strip, green framed answers, one red crossed slip), the handoff (the final frame: a layer of
// alternating ions, the salt jar, two questions and the "Next" chip; chem-y11-m1-v22 opens on it) and the key notes
// with the memory card, which cross-fade back to the handoff's final frame.
import React from 'react';
import {Freeze, useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Givens, QTag} from '../chem-y11-m1-v01/s3';
import {EL, MARKS, NH3, SALT, dM, dur, f1, hold, pw, sc, typeOf, working} from './common';
import type {PDef} from './common';
import {
	AMB_DOT, AMB_DOT_T, AMB_T, Card, Chip, Dial, E_BL, E_BL_T, Fade, Framed, GREEN_C, Heading, INK, LBrackets, Lewis, MoveDot, NAVY_C, Outline, PAPER, PauseHoldR, PenRing, Plate,
	RED_C, Rich, SLATE_T2, SpecBar, Sx, TEAL_C, TickMark, Write, dotXY, lerp, prog, richW, span,
} from './parts';
import type {BarG, OG, Seg} from './parts';

const PB: React.FC<{p: PDef; cx: number; bottom: number; h: number; at?: number}> = ({p, cx, bottom, h, at = -1000}) => <Plate p={p} x={cx - pw(p, h) / 2} y={bottom - h} h={h} at={at} />;
const Q: React.FC<{lines: string[]; y0?: number; lh?: number}> = ({lines, y0 = 290, lh = 58}) => <>{lines.map((t, i) => <Rich key={i} x={140} y={y0 + i * lh} segs={[{t}]} size={38} weight={700} />)}</>;
const HEAD = 'Electronegativity: one pull, from sharing to transfer';

// ---------- 14. attempt 1 ----------
const K14 = cues(sc('attempt-1'), {pause: 'Pause here'});
const OG14: OG = {x: 1250, y: 300, cw: 32, ch: 64};
export const SceneAttempt1: React.FC = () => (
	<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
		<Heading text="Your turn" at={0} />
		<QTag />
		<Card h={700} />
		<Q lines={[`Electronegativity values: K ${f1(EL.K.en)}, Cl ${f1(EL.Cl.en)}, N ${f1(EL.N.en)},`, `H ${f1(EL.H.en)}, Br ${f1(EL.Br.en)}.`, 'Classify each bond as non-polar covalent,', 'polar covalent or ionic:', '(a) K–Cl     (b) N–H     (c) Br–Br', 'For any polar covalent bond, show which', 'atom carries δ−.   (3 marks)']} y0={280} lh={62} />
		<Outline g={OG14} rows={4} symSize={30} lit={['K', 'Cl', 'N', 'H', 'Br'].map(s => ({z: EL[s].z, sym: s}))} />
		<PauseHoldR h={hold('attempt-1')} at={K14.pause} x={140} y={936} cx={1500} cy={720} />
	</svg>
);

// ---------- 15. feedback 1 ----------
const K15 = cues(sc('feedback-1'), {ionic: 'bond is ionic', nitrogen: 'Nitrogen and hydrogen', harder: 'pulls harder', two: 'Two bromines', nonpolar: 'non-polar covalent', putting: 'Putting delta', slip: 'the slip', always: 'Delta minus always'});
export const SceneFeedback1: React.FC = () => {
	const rows: [string, string, string, number, number][] = [
		['(a) K–Cl', working(EL.K, EL.Cl), typeOf(dM(MARKS.KCl)).replace(' (by the guide)', ''), K15.ionic - 30, K15.ionic],
		['(b) N–H', working(EL.N, EL.H), typeOf(dM(MARKS.NH)), K15.nitrogen, K15.harder - 40],
		['(c) Br–Br', working(EL.Br, EL.Br), typeOf(dM(MARKS.BrBr)), K15.two, K15.nonpolar],
	];
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<Heading text="Your turn" at={-1000} />
			<Givens segs={[{t: ['K', 'Cl', 'N', 'H', 'Br'].map(s => `${s} ${f1(EL[s].en)}`).join('   |   ')}]} />
			{rows.map(([lab, w, t, at, tAt], i) => (
				<g key={i}>
					<Sx x={120} y={350 + i * 130} text={lab} size={44} color={INK} weight={800} at={at} />
					<Sx x={420} y={350 + i * 130} text={w} size={44} color={INK} weight={800} at={at + 4} />
					<Framed x={860} y={350 + i * 130} segs={[{t, c: GREEN_C}]} at={tAt} size={44} stroke={GREEN_C} />
				</g>
			))}
			<Rich x={1330} y={480} segs={[{t: 'δ^{+}', c: RED_C}, {t: 'H–N'}, {t: 'δ^{−}', c: E_BL_T}]} size={52} weight={800} at={K15.harder} />
			<Outline g={{x: 1260, y: 776, cw: 30, ch: 40}} rows={4} symSize={24} lit={['K', 'Cl', 'N', 'H', 'Br'].map(s => ({z: EL[s].z, sym: s}))} />
			<Dial g={{a: [1440, 680], b: [1740, 680], R: 62, rl: 48}} lSym="H" rSym="N" d={dM(MARKS.NH)} lOut={0} rOut={4} o={prog(useCurrentFrame(), K15.harder, 12)} />
			<Sx x={1420} y={600} text="δ+" size={44} color={RED_C} anchor="middle" weight={800} at={K15.harder + 6} />
			<Sx x={1790} y={600} text="δ−" size={44} color={E_BL_T} weight={800} at={K15.harder + 6} />
			<Chip x={120} y={720} segs={[{t: 'δ^{−}H–Nδ^{+}'}]} at={K15.putting} size={44} color={RED_C} strike={K15.slip} />
			<Write x={520} y={780} text="δ− on the stronger puller" at={K15.slip + 6} size={44} color={RED_C} />
			{void K15.always}
		</svg>
	);
};

// ---------- 16. attempt 2 ----------
const K16 = cues(sc('attempt-2'), {pause: 'Pause here'});
export const SceneAttempt2: React.FC = () => (
	<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
		<Heading text="Last one" at={0} />
		<QTag />
		<Card h={700} />
		<Q lines={['Draw Lewis dot diagrams for:', '(a) sodium oxide, Na_2O, showing the transfer', '      of electrons;', '(b) ammonia, NH_3.   (4 marks)']} y0={300} lh={70} />
		<PB p={NH3} cx={1520} bottom={820} h={420} />
		<PauseHoldR h={hold('attempt-2')} at={K16.pause} x={140} y={936} cx={1000} cy={740} />
	</svg>
);

// ---------- 17. feedback 2 ----------
const K17 = cues(sc('feedback-2'), {sodium: 'For sodium oxide', each: 'Each sodium gives', so: 'So there are', two: 'minus two', ammonia: 'For ammonia', shares: 'It shares', lone: 'one lone pair', drawing: 'Drawing sodium', trap: 'the trap', big: 'A big'});
const S17 = 64;
const NA1: [number, number] = [190, 470], O17: [number, number] = [470, 470], NA2: [number, number] = [750, 470];
const N17: [number, number] = [1400, 470], HA: [number, number] = [1170, 470], HB: [number, number] = [1630, 470], HC: [number, number] = [1400, 680];
export const SceneFeedback2: React.FC = () => {
	const f = useCurrentFrame();
	const moved = f >= K17.each + 30;
	const p1 = dotXY(NA1[0], NA1[1], 'Na', 1, 0, 1, S17), p2 = dotXY(NA2[0], NA2[1], 'Na', 3, 0, 1, S17);
	const q1 = dotXY(O17[0], O17[1], 'O', 3, 1, 2, S17), q2 = dotXY(O17[0], O17[1], 'O', 1, 1, 2, S17);
	const br = prog(f, K17.so + 10, 12);
	const pair = span(f, K17.shares, K17.shares + 24);
	const nd = (s: number) => dotXY(N17[0], N17[1], 'N', s, 0, 1, S17);
	const hd = (h: [number, number], s: number) => dotXY(h[0], h[1], 'H', s, 0, 1, S17);
	const mid = (a: [number, number], b: [number, number]): [number, number] => [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
	const bonds: [[number, number], [number, number], [number, number], boolean][] = [
		[hd(HA, 1), nd(3), mid(HA, N17), true], [hd(HB, 3), nd(1), mid(HB, N17), true], [hd(HC, 0), nd(2), mid(HC, N17), false],
	];
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<Heading text="Last one" at={-1000} />
			<Givens segs={[{t: '(a) Na_2O, show the transfer     |     (b) NH_3'}]} />
			{/* (a) sodium oxide */}
			<Sx x={96} y={330} text="(a)" size={44} color={INK} weight={800} at={-1000} />
			<Lewis x={NA1[0]} y={NA1[1]} sym="Na" sides={['', moved ? '' : 'a', '', '']} size={S17} hide={f >= K17.each ? ['10'] : []} />
			<Lewis x={NA2[0]} y={NA2[1]} sym="Na" sides={['', '', '', moved ? '' : 'a']} size={S17} hide={f >= K17.each ? ['30'] : []} />
			<Lewis x={O17[0]} y={O17[1]} sym="O" sides={['bb', moved ? 'ba' : 'b', 'bb', moved ? 'ba' : 'b']} size={S17} />
			{f >= K17.each && !moved ? <><MoveDot p={p1} q={q1} at={K17.each} d={30} /><MoveDot p={p2} q={q2} at={K17.each + 4} d={30} /></> : null}
			<LBrackets x={NA1[0]} y={NA1[1]} sym="Na" q="+" size={S17} o={br} />
			<LBrackets x={O17[0]} y={O17[1]} sym="O" q="2−" size={S17} o={prog(f, K17.two, 12)} />
			<LBrackets x={NA2[0]} y={NA2[1]} sym="Na" q="+" size={S17} o={br} />
			<Framed x={96} y={690} segs={[{t: '2 Na', c: GREEN_C}, {t: '^{+}', c: TEAL_C}, {t: ' and 1 O', c: GREEN_C}, {t: '^{2−}', c: TEAL_C}, {t: ': 8 dots on O', c: GREEN_C}]} at={K17.two} size={44} stroke={GREEN_C} />
			{/* (b) ammonia */}
			<Sx x={1000} y={330} text="(b)" size={44} color={INK} weight={800} at={-1000} />
			<PB p={NH3} cx={1790} bottom={760} h={220} />
			<Fade at={-1000}>
				<Lewis x={N17[0]} y={N17[1]} sym="N" sides={['bb', '', '', '']} size={S17} />
				<Lewis x={HA[0]} y={HA[1]} sym="H" sides={['', '', '', '']} size={S17} />
				<Lewis x={HB[0]} y={HB[1]} sym="H" sides={['', '', '', '']} size={S17} />
				<Lewis x={HC[0]} y={HC[1]} sym="H" sides={['', '', '', '']} size={S17} />
				{bonds.map(([h, n, m, horiz], i) => {
					const hx = lerp(h[0], m[0] + (horiz ? 0 : -10), pair), hy = lerp(h[1], m[1] + (horiz ? -10 : 0), pair);
					const nx = lerp(n[0], m[0] + (horiz ? 0 : 10), pair), ny = lerp(n[1], m[1] + (horiz ? 10 : 0), pair);
					return (
						<g key={i}>
							<circle cx={hx} cy={hy} r={6.4} fill={AMB_DOT} stroke={AMB_DOT_T} strokeWidth={2} />
							<circle cx={nx} cy={ny} r={6.4} fill={E_BL} stroke={E_BL_T} strokeWidth={2} />
						</g>
					);
				})}
			</Fade>
			<PenRing cx={N17[0]} cy={N17[1] - 40} rx={34} ry={22} at={K17.lone} color={E_BL_T} seed={3} />
			<Write x={N17[0] + 60} y={N17[1] - 80} text="1 lone pair" at={K17.lone + 4} size={42} color={E_BL_T} />
			<Framed x={1100} y={850} segs={[{t: '3 bonding pairs, 1 lone pair', c: GREEN_C}]} at={K17.lone} size={40} stroke={GREEN_C} />
			<Chip x={96} y={760} segs={[{t: 'Na : O : Na  (shared pairs)'}]} at={K17.drawing} size={42} color={RED_C} strike={K17.trap} />
			<Write x={140} y={910} text="gap 2.5: transfer" at={K17.trap + 6} size={44} color={RED_C} />
			{void K17.sodium}{void K17.big}{void TickMark}{void AMB_T}
		</svg>
	);
};

// ---------- 18. handoff: not pairs, but a pattern (final frame; chem-y11-m1-v22 opens on it) ----------
const K18 = cues(sc('handoff'), {one: 'One last thing', each: 'each sodium ion', attracts: 'It attracts', and: 'and each chloride', pattern: 'regular pattern', why: 'So why', hard: 'so hard', carry: 'carry electricity', next: "That's next"});
export const GRID = {x0: 640, y0: 380, sp: 118, cols: 6, rows: 4};
export const NEXT18 = ['Next: why are ionic solids hard and brittle, and why do', 'they conduct only when their ions can move?'];
const ionXY = (i: number, j: number): [number, number] => [GRID.x0 + i * GRID.sp, GRID.y0 + j * GRID.sp];
/** The central Na+ (column 2, row 1) and its order of appearance (by distance from it). */
const CEN: [number, number] = [2, 1];
export const SceneHandoff: React.FC = () => {
	const f = useCurrentFrame();
	const grow = (i: number, j: number) => {
		const dd = Math.hypot(i - CEN[0], j - CEN[1]);
		if (dd < 0.01 || (i === CEN[0] + 1 && j === CEN[1])) return 1;
		return prog(f, K18.attracts + dd * 26, 12);
	};
	const pairO = 1 - prog(f, K18.each, 16);
	void pairO;
	const lines = prog(f, K18.attracts + 6, 12);
	const ions: React.ReactNode[] = [];
	for (let j = 0; j < GRID.rows; j++) for (let i = 0; i < GRID.cols; i++) {
		const na = (i + j) % 2 === 0;
		const [x, y] = ionXY(i, j);
		const o = grow(i, j) * (1 - pairO * ((i === CEN[0] && j === CEN[1]) || (i === CEN[0] + 1 && j === CEN[1]) ? 1 : 0));
		if (o <= 0.005) continue;
		ions.push(
			<g key={`${i}-${j}`} opacity={o}>
				<circle cx={x} cy={y} r={na ? 30 : 46} fill={na ? '#fde3df' : '#dfe9f8'} stroke={na ? '#c4362f' : E_BL_T} strokeWidth={5} />
				<Sx x={x} y={y + (na ? 12 : 14)} text={na ? '+' : '−'} size={na ? 40 : 44} color={na ? '#c4362f' : E_BL_T} anchor="middle" weight={800} at={-1000} />
			</g>,
		);
	}
	const [cx, cy] = ionXY(CEN[0], CEN[1]);
	const cw = Math.max(...NEXT18.map(t => richW([{t}], 38))) + 60;
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<Heading text={HEAD} at={-1000} />
			{/* the pair from scene 9, then the layer */}
			<g opacity={pairO}>
				<Lewis x={cx} y={cy} sym="Na" sides={['', '', '', '']} />
				<LBrackets x={cx} y={cy} sym="Na" q="+" />
				<Lewis x={cx + GRID.sp * 1.6} y={cy} sym="Cl" sides={['bb', 'bb', 'bb', 'bb']} />
				<LBrackets x={cx + GRID.sp * 1.6} y={cy} sym="Cl" q="−" />
			</g>
			{lines > 0.005 ? [[1, 0], [-1, 0], [0, 1], [0, -1]].map(([di, dj], k) => {
				const [x2, y2] = ionXY(CEN[0] + di, CEN[1] + dj);
				return <line key={k} x1={cx + di * 32} y1={cy + dj * 32} x2={x2 - di * 48} y2={y2 - dj * 48} stroke={INK} strokeWidth={4} opacity={lines} />;
			}) : null}
			{ions}
			<PB p={SALT} cx={330} bottom={820} h={300} />
			<Sx x={330} y={870} text="salt: a crystal of ions" size={34} color={INK} anchor="middle" weight={800} at={K18.pattern} />
			<Sx x={1420} y={460} text="hard?" size={44} color={INK} weight={800} at={K18.hard} />
			<Sx x={1420} y={560} text="conducts only when" size={40} color={INK} weight={800} at={K18.carry} />
			<Sx x={1420} y={612} text="melted or dissolved?" size={40} color={INK} weight={800} at={K18.carry + 4} />
			<Fade at={K18.next}>
				<rect x={96} y={190} width={cw} height={120} rx={22} fill={PAPER} stroke={NAVY_C} strokeWidth={4} />
				{NEXT18.map((t, i) => <Sx key={i} x={124} y={240 + i * 50} text={t} size={38} color={NAVY_C} weight={700} at={-1000} />)}
			</Fade>
			{void K18.one}{void K18.and}{void K18.why}
		</svg>
	);
};

// ---------- 19. key notes ----------
const NOTE_SIZE = 34;
export const NOTES: Seg[][][] = [
	[[{t: 'Electronegativity difference decides the bond:'}], [{t: 'larger value − smaller value.'}]],
	[[{t: 'About 0 to 0.4 ', c: SLATE_T2}, {t: 'non-polar', c: SLATE_T2}, {t: '; 0.4 to 1.7 polar covalent;'}], [{t: 'above about 1.7 '}, {t: 'ionic', c: TEAL_C}, {t: '.'}]],
	[[{t: 'The values are a guide: HF (1.8) is still molecular.'}]],
	[[{t: 'Polar bond: '}, {t: 'δ−', c: E_BL_T}, {t: ' on the more electronegative atom,'}], [{t: 'δ+', c: RED_C}, {t: ' on the other.'}]],
	[[{t: 'Lewis diagrams show outer electrons: ions in'}], [{t: 'brackets; shared pairs as lines.'}]],
];
export const SceneNotes: React.FC = () => {
	const f = useCurrentFrame();
	const D = dur('key-notes');
	const outA = D - 46;
	let y = 300;
	const rows = NOTES.map((lines, i) => {
		const y0 = y;
		y += lines.length * 48 + 24;
		return (
			<Fade key={i} at={i * 3}>
				<circle cx={112} cy={y0 - 12} r={8} fill={INK} />
				{lines.map((l, k) => <Rich key={k} x={140} y={y0 + k * 48} segs={l} size={NOTE_SIZE} weight={700} />)}
			</Fade>
		);
	});
	const B: BarG = {x0: 1260, x1: 1780, y: 600, h: 26};
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<Fade at={-1000} out={outA} d={18}>
				<Write x={96} y={150} text="Key notes: what to write in your book" at={2} size={60} color={INK} cps={40} />
				<Write x={96} y={214} text="Pause the video if you need more time to copy." at={4} size={38} color={AMB_T} />
				{rows}
				<Fade at={6}>
					<rect x={1210} y={262} width={614} height={460} rx={22} fill={PAPER} stroke={NAVY_C} strokeWidth={5} />
					<Sx x={1240} y={306} text="memory aid" size={30} color={INK} hand at={-1000} />
					<Sx x={1250} y={392} text="Small gap, share." size={50} color={SLATE_T2} hand at={-1000} />
					<Sx x={1250} y={458} text="Big gap, transfer." size={50} color={TEAL_C} hand at={-1000} />
					<SpecBar g={B} id="v21n" bands={0} labelSize={26} />
					<Sx x={B.x0} y={B.y + 92} text="share" size={30} color={SLATE_T2} weight={800} at={-1000} />
					<Sx x={B.x1} y={B.y + 92} text="transfer" size={30} color={TEAL_C} anchor="end" weight={800} at={-1000} />
				</Fade>
			</Fade>
			{f >= outA ? <Fade at={outA + 4} d={18}><Freeze frame={dur('handoff') - 1}><SceneHandoff /></Freeze></Fade> : null}
		</svg>
	);
};
