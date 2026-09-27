// ChiralityDiagram (chem12m8Chirality): optical isomerism, M8 L13.
//
// Modes
//   mirror      (concept-chiral)       a carbon with four different glossy groups,
//               a mirror plane and its mirror image; the image spins over the
//               original and fails to superimpose (two groups match, two don't).
//   compare     (concept-vs-isomers)   structural (butane / methylpropane, both
//               C₄H₁₀), geometric (cis / trans but-2-ene), enantiomers.
//   receptor    (concept-biology)      a chiral binding site with three pockets:
//               one enantiomer makes all three contacts, its mirror image two.
//   racemic     (concept-thalidomide)  50:50 R + S given together (R sedative,
//               S teratogenic); even pure R racemises in the body (R ⇌ S).
//   polarimeter (concept-polarimetry)  source → polariser → sample → analyser;
//               pure enantiomer rotates the plane, racemic and achiral read zero.
//
// The groups on the chiral carbon are those of alanine (H, CH₃, NH₂, COOH),
// a real chiral centre. Beats are frames after `delay`.

import {useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {Arrow, Ball, Flask, GlossDefs, Mark, Pill, ease, pop, ramp} from './shared';
import {TetraModel, tetraGroupXY, type TetraGroup} from './mol-tetra';
import {MolDraw, but2ene, butane, centreOn, methylpropane} from './mol-draw';

export type ChiralityProps = {
	mode?: 'mirror' | 'compare' | 'receptor' | 'racemic' | 'polarimeter';
	delay?: number;
	beats?: number[];
};

const W = 760;
const H = 530;
const RED = '#c0392b';

const DEFAULT_BEATS: Record<NonNullable<ChiralityProps['mode']>, number[]> = {
	// chiralCentre, fourDifferent, twoWays, mirrorImages, notIdentical, rotate, enantiomers, arrangement
	mirror: [191, 260, 371, 468, 510, 544, 634, 718],
	// structural, whichAtoms, geometric, cisTrans, enantiomers, sameConnectivity, callout
	compare: [95, 151, 241, 325, 402, 451, 535],
	// nonChiral, enzymes, bindingSite, glove, therapeutic, other, deep
	receptor: [153, 204, 328, 431, 504, 599, 687],
	// R, sedative, S, teratogenic, racemic, fiftyFifty, both, sting, pureR, racemisation, assess
	racemic: [91, 155, 198, 240, 340, 362, 390, 690, 718, 868, 885],
	// polarimetry, planePolarised, pure, racemic, zero, cancel, notMean, achiral, evidence
	polarimeter: [42, 123, 163, 230, 277, 331, 445, 498, 586],
};

const beatsFor = (mode: NonNullable<ChiralityProps['mode']>, beats?: number[]) =>
	DEFAULT_BEATS[mode].map((v, i) => (beats && typeof beats[i] === 'number' ? beats[i] : v));

const ALANINE: TetraGroup[] = [
	{label: 'H', name: 'H', color: '#f2f2ef', r: 0.2, ink: TOK.ink},
	{label: 'COOH', name: 'acid', color: '#e0433a', r: 0.31},
	{label: 'NH₂', name: 'amine', color: '#3f6fd8', r: 0.28},
	{label: 'CH₃', name: 'methyl', color: '#6b6b6b', r: 0.28},
];
const GLOSS = {C: '#3b3b3b', H: '#f2f2ef', acid: '#e0433a', amine: '#3f6fd8', methyl: '#6b6b6b', red: '#e0433a', blue: '#3f6fd8', green: '#4fbf4a', R: '#148a6f', S: RED, grey: '#9a9a9a'};

/** Caption that swaps text on beats (fades each in). */
const StepCaption = ({frame, steps, y, size = 22}: {frame: number; steps: {t: number; text: string; color?: string}[]; y: number; size?: number}) => {
	let cur = -1;
	steps.forEach((s, i) => { if (frame >= s.t) cur = i; });
	if (cur < 0) return null;
	const s = steps[cur];
	const o = ramp(frame, s.t, 12);
	return (
		<text x={W / 2} y={y} textAnchor="middle" fill={s.color ?? TOK.ink} fontSize={size} fontWeight={800} opacity={o}>
			{s.text}
		</text>
	);
};

// ── mirror ──────────────────────────────────────────────────────────────────
const MirrorMode = ({frame, fps, b}: {frame: number; fps: number; b: number[]}) => {
	const ID = 'c12m8chir-mir';
	const [tCentre, tFour, tTwo, tMirror, tNotId, tRot, tEnan, tArr] = b;
	const AZ: [number, number, number] = [-10, 110, 230];
	const LX = 190, RX = 570, CY = 236, R = 104, PL_Y = 378;
	const w = 12 * Math.sin(frame / 55);
	const pulse = idlePulse(frame);
	const glow = ramp(frame, tCentre, 14) * (0.65 + 0.35 * pulse);
	const emerge = ease(ramp(frame, tTwo + 10, 50));
	// superimpose attempt: slide over + spin, hold, return
	const out = ease(ramp(frame, tRot, 46));
	const back = ease(ramp(frame, tEnan + 30, 34));
	const move = out * (1 - back);
	const spin = move;
	const rot2 = spin * (240 + 2 * w);
	const gx = RX + (LX - RX) * move;
	const gy = CY - Math.sin(Math.PI * Math.min(1, out + back)) * 26 * (out < 1 ? 1 : 0) - (out >= 1 && back > 0 ? Math.sin(Math.PI * back) * 26 : 0);
	const marksOn = ramp(frame, tRot + 50, 10) * (1 - ramp(frame, tEnan + 26, 8));
	const four = (i: number) => {
		const t = tFour + (i - 1) * 9;
		return 1 + 0.28 * Math.sin(Math.PI * Math.max(0, Math.min(1, (frame - t) / 16)));
	};
	const enter = pop(frame, fps, 0);
	return (
		<g>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={GLOSS} />
			<StepCaption
				frame={frame}
				y={36}
				steps={[
					{t: -60, text: 'A carbon with four groups'},
					{t: tCentre, text: 'Chiral centre: a carbon…'},
					{t: tFour, text: '…bonded to four DIFFERENT groups'},
					{t: tTwo, text: 'Two ways to arrange them in 3D'},
					{t: tMirror, text: 'The two forms are mirror images'},
					{t: tRot, text: 'Rotate one: it can’t land on the other'},
					{t: tEnan, text: 'A pair of enantiomers'},
					{t: tArr, text: 'Chirality = 3D arrangement, not formula'},
				]}
			/>
			<g opacity={Math.min(1, enter * 1.3)}>
				<DioramaPlinth id={`${ID}-l`} cx={LX} cy={PL_Y} rx={124} />
			</g>
			<g opacity={emerge}>
				<DioramaPlinth id={`${ID}-r`} cx={RX} cy={PL_Y} rx={124} />
			</g>
			{/* mirror plane */}
			<g opacity={ramp(frame, tTwo, 20)}>
				<path d={`M ${W / 2 - 18} 90 L ${W / 2 + 18} 74 L ${W / 2 + 18} 440 L ${W / 2 - 18} 456 Z`} fill="rgba(170,205,230,0.42)" stroke="rgba(90,130,160,0.6)" strokeWidth={2} />
				<path d={`M ${W / 2 - 6} 110 L ${W / 2 + 4} 106 L ${W / 2 + 4} 300 L ${W / 2 - 6} 304 Z`} fill="#ffffff" opacity={0.5} />
				<text x={W / 2} y={478} textAnchor="middle" fill={TOK.inkDim} fontSize={17} fontWeight={800} letterSpacing="0.08em">MIRROR</text>
			</g>
			{/* original */}
			<g opacity={Math.min(1, enter * 1.3)} transform={`translate(0,${idleBob(frame, 0, 1.4)})`}>
				<TetraModel id={ID} cx={LX} cy={CY} R={R} groups={ALANINE} az={AZ} rot={w} centreGlow={glow} groupScale={four} />
			</g>
			{/* mirror image (moves for the superimpose test) */}
			<g opacity={emerge * (move > 0.05 ? 0.72 : 1)} transform={`translate(${(1 - emerge) * -(RX - W / 2)},${idleBob(frame, 1, 1.4) * (1 - move)})`}>
				<TetraModel id={ID} cx={gx} cy={gy} R={R} groups={ALANINE} az={AZ} rot={w} mirror rot2={rot2} ghost={move > 0.05} groupScale={four} centreGlow={glow * (1 - move)} />
			</g>
			{/* match marks */}
			{marksOn > 0 &&
				ALANINE.map((_, i) => {
					const a = tetraGroupXY(i, LX, CY, R, AZ, w);
					const g2 = tetraGroupXY(i, gx, gy, R, AZ, w, true, rot2);
					const ok = Math.hypot(a.x - g2.x, a.y - g2.y) < R * 0.25;
					const dx = g2.x < LX ? -34 : 34;
					return <Mark key={i} x={g2.x + dx} y={g2.y - 26} ok={ok} size={15} opacity={marksOn} color={ok ? TOK.chem2 : RED} />;
				})}
			<g opacity={marksOn}>
				<text x={LX} y={PL_Y + 96} textAnchor="middle" fill={RED} fontSize={19} fontWeight={800}>not superimposable</text>
			</g>
			{/* chiral centre tag */}
			<g opacity={ramp(frame, tCentre, 14)}>
				<line x1={84} y1={136} x2={LX - 34} y2={CY - 22} stroke={TOK.amber} strokeWidth={2.5} />
				<text x={62} y={102} textAnchor="middle" fill={TOK.amberInk} fontSize={20} fontWeight={800}>chiral</text>
				<text x={62} y={124} textAnchor="middle" fill={TOK.amberInk} fontSize={20} fontWeight={800}>centre</text>
			</g>
			{/* enantiomer bracket */}
			<g opacity={ramp(frame, tEnan + 60, 16)}>
				<path d={`M ${LX - 90} 486 L ${LX - 90} 498 L ${RX + 90} 498 L ${RX + 90} 486`} fill="none" stroke={TOK.inkDim} strokeWidth={2.5} />
				<text x={W / 2} y={524} textAnchor="middle" fill={TOK.ink} fontSize={20} fontWeight={800}>enantiomers: non-superimposable mirror images</text>
			</g>
		</g>
	);
};

// ── compare ─────────────────────────────────────────────────────────────────
const SkelDots = ({mol, x, y, s}: {mol: ReturnType<typeof butane>; x: number; y: number; s: number}) => (
	<g>
		<MolDraw mol={mol} x={x} y={y} s={s} width={3.4} />
		{mol.atoms.map((a, i) => <circle key={i} cx={x + a.x * s} cy={y + a.y * s} r={6.5} fill="#3b3b3b" stroke="#ffffff" strokeWidth={1.5} />)}
	</g>
);

const CompareMode = ({frame, fps, b}: {frame: number; fps: number; b: number[]}) => {
	const theme = useAccent();
	const ID = 'c12m8chir-cmp';
	const [tStruct, tWhich, tGeo, tCis, tEnan, tSame, tCall] = b;
	const rows = [
		{t: tStruct, y: 84, title: 'Structural', sub: 'different connectivity'},
		{t: tGeo, y: 222, title: 'Geometric', sub: 'cis / trans about a C=C'},
		{t: tEnan, y: 360, title: 'Enantiomers', sub: 'same connectivity,'},
	];
	const XA = 380, XB = 610;
	const S = 44;
	const pulse = idlePulse(frame);
	const w = 10 * Math.sin(frame / 55);
	const rowIn = (t: number) => ramp(frame, t, 14);
	const sameConn = ramp(frame, tSame, 14);
	const call = ramp(frame, tCall, 16);
	const place = (m: ReturnType<typeof butane>, cx: number, cy: number) => centreOn(m, S, 17, cx, cy);
	const bu = butane(), mp = methylpropane(), cis = but2ene(true), trans = but2ene(false);
	return (
		<g>
			<GlossDefs id={ID} colors={GLOSS} />
			{rows.map((r, i) => {
				const o = rowIn(r.t);
				const isE = i === 2;
				return (
					<g key={r.title} opacity={o} transform={`translate(${(1 - o) * -14},0)`}>
						<rect x={16} y={r.y - 62} width={W - 32} height={124} rx={18} fill="#ffffff" fillOpacity={0.7} stroke={isE && call > 0 ? TOK.amber : TOK.cardBorder} strokeWidth={isE && call > 0 ? 2.5 + pulse * 1.5 * call : 1.5} />
						<text x={40} y={r.y - 8} fill={isE && call > 0 ? TOK.amberInk : TOK.ink} fontSize={24} fontWeight={800}>{r.title}</text>
						<text x={40} y={r.y + 20} fill={TOK.inkDim} fontSize={17} fontWeight={700}>{r.sub}</text>
						{isE && <text x={40} y={r.y + 42} fill={TOK.inkDim} fontSize={17} fontWeight={700}>mirror-image 3D</text>}
						{isE && <text x={40} y={r.y + 20} fill={theme.accent} fontSize={17} fontWeight={800} opacity={sameConn}>same connectivity,</text>}
					</g>
				);
			})}
			{/* structural: butane vs methylpropane */}
			<g opacity={rowIn(tStruct)}>
				{(() => {
					const a = place(bu, XA, 74), c = place(mp, XB, 70);
					return (
						<>
							<SkelDots mol={bu} x={a.x} y={a.y} s={S} />
							<SkelDots mol={mp} x={c.x} y={c.y} s={S} />
							<text x={XA} y={124} textAnchor="middle" fill={TOK.ink} fontSize={17} fontWeight={800}>butane</text>
							<text x={XB} y={124} textAnchor="middle" fill={TOK.ink} fontSize={17} fontWeight={800}>methylpropane</text>
						</>
					);
				})()}
				<g opacity={ramp(frame, tWhich, 14)}>
					<text x={40} y={126} fill={theme.accent} fontSize={17} fontWeight={800}>both C₄H₁₀</text>
					<text x={(XA + XB) / 2} y={96} textAnchor="middle" fill={theme.accent} fontSize={30} fontWeight={800}>≠</text>
				</g>
			</g>
			{/* geometric: cis vs trans but-2-ene */}
			<g opacity={rowIn(tGeo)}>
				{(() => {
					const a = place(cis, XA, 214), c = place(trans, XB, 206);
					return (
						<>
							<SkelDots mol={cis} x={a.x} y={a.y} s={S} />
							<SkelDots mol={trans} x={c.x} y={c.y} s={S} />
						</>
					);
				})()}
				<g opacity={ramp(frame, tCis, 14)}>
					<text x={XA} y={266} textAnchor="middle" fill={TOK.ink} fontSize={17} fontWeight={800}>cis-but-2-ene</text>
					<text x={XB} y={266} textAnchor="middle" fill={TOK.ink} fontSize={17} fontWeight={800}>trans-but-2-ene</text>
				</g>
			</g>
			{/* enantiomers */}
			<g opacity={rowIn(tEnan)}>
				<TetraModel id={ID} cx={XA} cy={352} R={54} groups={ALANINE} az={[-10, 110, 230]} rot={w} />
				<line x1={(XA + XB) / 2} y1={306} x2={(XA + XB) / 2} y2={410} stroke="rgba(90,130,160,0.7)" strokeWidth={3} strokeDasharray="7 6" />
				<TetraModel id={ID} cx={XB} cy={352} R={54} groups={ALANINE} az={[-10, 110, 230]} rot={w} mirror />
			</g>
			{/* callout */}
			<g opacity={call}>
				<text x={W / 2} y={466 + 12} textAnchor="middle" fill={TOK.ink} fontSize={19} fontWeight={800}>Different connectivity? → structural isomers</text>
				<text x={W / 2} y={500 + 12} textAnchor="middle" fill={TOK.amberInk} fontSize={19} fontWeight={800}>Same connectivity, mirror image? → enantiomers</text>
			</g>
		</g>
	);
};

// ── receptor ────────────────────────────────────────────────────────────────
const SITE: TetraGroup[] = [
	{label: 'H', name: 'H', color: '#f2f2ef', r: 0.24, ink: TOK.ink},
	{label: '', name: 'red', color: '#e0433a', r: 0.3},
	{label: '', name: 'blue', color: '#3f6fd8', r: 0.3},
	{label: '', name: 'green', color: '#4fbf4a', r: 0.3},
];
// Mirror image = the same centre with two groups (H and green) swapped.
const SITE_MIRROR: TetraGroup[] = [SITE[3], SITE[1], SITE[2], SITE[0]];
const POCKET_COLORS = ['#e0433a', '#3f6fd8', '#4fbf4a'];

const ReceptorMode = ({frame, fps, b}: {frame: number; fps: number; b: number[]}) => {
	const theme = useAccent();
	const ID = 'c12m8chir-rec';
	const [, tEnz, tSite, tGlove, tTher, tOther, tDeep] = b;
	const AZ: [number, number, number] = [210, 330, 90];
	const R = 74;
	const DOCK_Y = 300;
	const pulse = idlePulse(frame);
	const panels = [
		{cx: 200, groups: SITE, title: 'one enantiomer', t: tTher},
		{cx: 560, groups: SITE_MIRROR, title: 'its mirror image', t: tOther},
	];
	const siteIn = ramp(frame, tEnz, 16);
	const pockIn = ramp(frame, tSite, 14);
	return (
		<g>
			<GlossDefs id={ID} colors={GLOSS} />
			{panels.map((p, k) => {
				const dock = ease(ramp(frame, p.t, 34));
				const cy = DOCK_Y - (1 - dock) * 112 + idleBob(frame, k, 1.6) * (1 - dock) + idleBob(frame, k, 0.5) * dock;
				// pocket spots = where the three lower groups sit when docked
				const pk = [1, 2, 3].map((i) => tetraGroupXY(i, p.cx, DOCK_Y, R, AZ));
				const sy = (pk[0].y + pk[1].y) / 2 + 8;
				const rx = 150, ry = rx * 0.31, depth = 36;
				const matched = dock > 0.98;
				const isMirror = k === 1;
				return (
					<g key={k}>
						<text x={p.cx} y={34} textAnchor="middle" fill={TOK.ink} fontSize={22} fontWeight={800}>{p.title}</text>
						{/* receptor: a chiral binding site (protein surface) */}
						<g opacity={siteIn}>
							<path d={`M ${p.cx - rx} ${sy + 16} L ${p.cx - rx} ${sy + 16 + depth} A ${rx} ${ry} 0 0 0 ${p.cx + rx} ${sy + 16 + depth} L ${p.cx + rx} ${sy + 16} Z`} fill="#9d8cc0" />
							<ellipse cx={p.cx} cy={sy + 16} rx={rx} ry={ry} fill="#c9bde3" stroke="#8f7db4" strokeWidth={1.5} />
							<text x={p.cx} y={sy + 16 + ry + depth + 26} textAnchor="middle" fill={TOK.inkDim} fontSize={17} fontWeight={800}>chiral binding site</text>
							{pk.map((q, i) => (
								<g key={i} opacity={0.35 + 0.65 * pockIn}>
									<ellipse cx={q.x} cy={q.y + 16} rx={27} ry={10} fill="#6f5f94" stroke={POCKET_COLORS[i]} strokeWidth={4} />
								</g>
							))}
						</g>
						<TetraModel id={ID} cx={p.cx} cy={cy} R={R} groups={p.groups} az={AZ} />
						{/* contact marks once docked */}
						{pk.map((q, i) => {
							const ok = !(isMirror && i === 2);
							const o = ramp(frame, p.t + 36 + i * 6, 8);
							return <Mark key={i} x={q.x + (i === 0 ? -44 : i === 1 ? 44 : 0)} y={q.y + (i === 2 ? 50 : -2)} ok={ok} size={14} opacity={o} color={ok ? TOK.chem2 : RED} />;
						})}
						{isMirror && matched && (
							<ellipse cx={pk[2].x} cy={pk[2].y + 16} rx={36 + pulse * 3} ry={15 + pulse * 1.5} fill="none" stroke={TOK.amber} strokeWidth={3} opacity={ramp(frame, p.t + 50, 10)} />
						)}
						<g opacity={ramp(frame, p.t + 50, 14)}>
							<text x={p.cx} y={468} textAnchor="middle" fill={isMirror ? TOK.amberInk : theme.accent} fontSize={19} fontWeight={800}>
								{isMirror ? '2 contacts: binds weakly' : '3 contacts: binds well'}
							</text>
							<text x={p.cx} y={492} textAnchor="middle" fill={TOK.inkDim} fontSize={17} fontWeight={700}>
								{isMirror ? 'inactive, or even harmful' : 'therapeutic effect'}
							</text>
						</g>
					</g>
				);
			})}
			<text x={W / 2} y={68} textAnchor="middle" fill={TOK.inkDim} fontSize={17} fontWeight={700} opacity={ramp(frame, tGlove, 14)}>
				like a glove: it fits one hand, not the other
			</text>
			<text x={W / 2} y={522} textAnchor="middle" fill={TOK.ink} fontSize={18} fontWeight={800} opacity={ramp(frame, tDeep, 14)}>
				same atoms ≠ same biological outcome
			</text>
		</g>
	);
};

// ── racemic ─────────────────────────────────────────────────────────────────
const Token = ({id, x, y, r, s, flip = 0, opacity = 1}: {id: string; x: number; y: number; r: number; s: 'R' | 'S'; flip?: number; opacity?: number}) => {
	// flip 0..1: an R token turning into S (squash through edge-on at 0.5)
	const showS = s === 'S' || flip >= 0.5;
	const sx = flip > 0 && flip < 1 ? Math.abs(Math.cos(flip * Math.PI)) : 1;
	return (
		<g opacity={opacity} transform={`translate(${x},${y}) scale(${Math.max(0.05, sx)},1)`}>
			<Ball id={id} name={showS ? 'S' : 'R'} color={showS ? RED : '#148a6f'} x={0} y={0} r={r} label={showS ? 'S' : 'R'} labelSize={r * 1.05} />
		</g>
	);
};

const RacemicMode = ({frame, fps, b}: {frame: number; fps: number; b: number[]}) => {
	const theme = useAccent();
	const ID = 'c12m8chir-rac';
	const [tR, tSed, tS, tTer, tRac, tFifty, tBoth, tSting, tPure, tRacem, tAssess] = b;
	const pulse = idlePulse(frame);
	const FX = 128, FB = 214;
	const mixTokens: {x: number; y: number; s: 'R' | 'S'}[] = [
		{x: -26, y: -18, s: 'R'}, {x: 8, y: -24, s: 'S'}, {x: 32, y: -8, s: 'R'},
		{x: -34, y: 10, s: 'S'}, {x: 0, y: 4, s: 'R'}, {x: 34, y: 18, s: 'S'},
	];
	const racIn = pop(frame, fps, tRac);
	const stingIn = ramp(frame, tSting, 16);
	const bodyTokens = [0, 1, 2, 3, 4, 5].map((i) => ({x: 350 + (i % 3) * 62 + (i >= 3 ? 30 : 0), y: 372 + Math.floor(i / 3) * 52}));
	const flipOf = (i: number) => (i === 1 || i === 5 ? ease(ramp(frame, tRacem + (i === 5 ? 10 : 0), 18)) : 0);
	const enterBody = ease(ramp(frame, tPure + 20, 40));
	return (
		<g>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={GLOSS} />
			{/* effects list */}
			{[
				{t: tR, t2: tSed, s: 'R' as const, head: 'R-enantiomer', text: 'sedative: the intended effect', ok: true, y: 62},
				{t: tS, t2: tTer, s: 'S' as const, head: 'S-enantiomer', text: 'teratogenic: birth defects', ok: false, y: 142},
			].map((row) => {
				const p = pop(frame, fps, row.t);
				return (
					<g key={row.s} opacity={Math.min(1, p * 1.3)}>
						<Token id={ID} x={330} y={row.y} r={22} s={row.s} />
						<text x={364} y={row.y - 6} fill={row.ok ? theme.accent : RED} fontSize={21} fontWeight={800}>{row.head}</text>
						<text x={364} y={row.y + 20} fill={TOK.ink} fontSize={18} fontWeight={700} opacity={ramp(frame, row.t2, 12)}>{row.text}</text>
						<Mark x={718} y={row.y} ok={row.ok} size={15} color={row.ok ? TOK.chem2 : RED} opacity={ramp(frame, row.t2, 12)} />
					</g>
				);
			})}
			{/* racemic mixture flask */}
			<g opacity={Math.min(1, racIn * 1.3)}>
				<DioramaPlinth id={`${ID}-a`} cx={FX} cy={FB} rx={88} />
				<Flask cx={FX} baseY={FB - 4} w={122} h={140} level={0.62} liquid="rgba(150,200,235,0.3)">
					{mixTokens.map((t, i) => (
						<Token key={i} id={ID} x={FX + t.x + idleBob(frame, i, 1.5)} y={FB - 50 + t.y + idleBob(frame, i + 9, 1.5)} r={15} s={t.s} />
					))}
				</Flask>
				<text x={FX} y={32} textAnchor="middle" fill={TOK.ink} fontSize={20} fontWeight={800}>racemic mixture</text>
			</g>
			<g opacity={ramp(frame, tFifty, 12)}>
				<Pill x={FX} y={62} text="50 : 50" size={18} color={TOK.ink} />
			</g>
			<g opacity={ramp(frame, tBoth, 14)}>
				<Arrow x1={FX + 70} y1={120} x2={300} y2={70} color={TOK.inkDim} width={2.5} head={10} />
				<Arrow x1={FX + 70} y1={132} x2={300} y2={140} color={TOK.inkDim} width={2.5} head={10} />
				<text x={520} y={206} textAnchor="middle" fill={TOK.inkDim} fontSize={17} fontWeight={800}>both forms given together</text>
			</g>

			{/* the sting: pure R still racemises */}
			<g opacity={stingIn}>
				<line x1={24} y1={250} x2={W - 24} y2={250} stroke={TOK.rule} strokeWidth={2} />
				<text x={W / 2} y={282} textAnchor="middle" fill={TOK.ink} fontSize={20} fontWeight={800}>Even pure R isn’t a clean fix</text>
			</g>
			<g opacity={ramp(frame, tPure, 14)}>
				<DioramaPlinth id={`${ID}-b`} cx={110} cy={452} rx={74} />
				<Flask cx={110} baseY={448} w={96} h={112} level={0.6} liquid="rgba(150,200,235,0.3)">
					{[0, 1, 2].map((i) => (
						<Token key={i} id={ID} x={88 + i * 22 + idleBob(frame, i + 20, 1.2)} y={420 - (i % 2) * 16} r={13} s="R" opacity={1 - enterBody * 0.6} />
					))}
				</Flask>
				<text x={110} y={320} textAnchor="middle" fill={theme.accent} fontSize={18} fontWeight={800}>pure R</text>
				<Arrow x1={176} y1={398} x2={300} y2={398} color={TOK.inkDim} width={3} head={12} progress={ease(ramp(frame, tPure + 6, 20))} />
				<text x={238} y={386} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={800}>dose</text>
			</g>
			<g opacity={enterBody}>
				<rect x={316} y={318} width={250} height={140} rx={40} fill="#fbe9e4" stroke="#e6b9ad" strokeWidth={2} />
				<text x={441} y={346} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={800} letterSpacing="0.06em">IN THE BODY</text>
				{bodyTokens.map((t, i) => (
					<Token key={i} id={ID} x={t.x + idleBob(frame, i + 30, 2)} y={t.y + 14 + idleBob(frame, i + 40, 2)} r={17} s="R" flip={flipOf(i)} />
				))}
			</g>
			<g opacity={ramp(frame, tRacem, 14)}>
				<text x={660} y={372} textAnchor="middle" fill={TOK.ink} fontSize={22} fontWeight={800}>R ⇌ S</text>
				<text x={660} y={396} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={700}>racemisation</text>
				<text x={660} y={430} textAnchor="middle" fill={RED} fontSize={17} fontWeight={800}>some S forms</text>
				<text x={660} y={450} textAnchor="middle" fill={RED} fontSize={17} fontWeight={800}>anyway</text>
			</g>
			<g opacity={ramp(frame, tAssess, 16)}>
				<Pill x={W / 2} y={500} text="assess each enantiomer independently" size={19} color={TOK.amber} fill="#fff6e6" textColor={TOK.amberInk} strokeWidth={2 + pulse * 1.5} />
			</g>
		</g>
	);
};

// ── polarimeter ─────────────────────────────────────────────────────────────
const PolarGlyph = ({x, y, angle, star = false, color, r = 26, ghost}: {x: number; y: number; angle?: number; star?: boolean; color: string; r?: number; ghost?: number[]}) => {
	const arrow = (a: number, c: string, dash?: string, op = 1) => {
		const rad = (a * Math.PI) / 180;
		const dx = Math.sin(rad) * (r - 5), dy = -Math.cos(rad) * (r - 5);
		return (
			<g opacity={op}>
				<line x1={x - dx} y1={y - dy} x2={x + dx} y2={y + dy} stroke={c} strokeWidth={3} strokeDasharray={dash} strokeLinecap="round" />
				{!dash && (
					<>
						<circle cx={x + dx} cy={y + dy} r={3.4} fill={c} />
						<circle cx={x - dx} cy={y - dy} r={3.4} fill={c} />
					</>
				)}
			</g>
		);
	};
	return (
		<g>
			<circle cx={x} cy={y} r={r} fill="#ffffff" stroke={TOK.cardBorder} strokeWidth={2} />
			{star ? [0, 45, 90, 135].map((a) => <g key={a}>{arrow(a, color)}</g>) : null}
			{ghost?.map((a, i) => <g key={i}>{arrow(a, TOK.inkMute, '4 4')}</g>)}
			{!star && angle !== undefined && arrow(angle, color)}
		</g>
	);
};

const PolarimeterMode = ({frame, fps, b}: {frame: number; fps: number; b: number[]}) => {
	const theme = useAccent();
	const ID = 'c12m8chir-pol';
	const [tPol, tPlane, tPure, tRac, tZero, tCancel, tNot, tAchiral, tEvid] = b;
	const BEAM = 160;
	const pulse = idlePulse(frame);
	const state = frame >= tAchiral ? 'achiral' : frame >= tRac ? 'racemic' : frame >= tPure ? 'pure' : 'none';
	const ROT = 34;
	const pureAng = ease(ramp(frame, tPure + 10, 26)) * ROT;
	const outAngle = state === 'pure' ? pureAng : 0;
	const tubeTokens = [0, 1, 2, 3, 4, 5].map((i) => ({x: 350 + i * 25, y: BEAM + (i % 2 ? 9 : -9)}));
	const tokenKind = (i: number): 'R' | 'S' | 'A' => (state === 'pure' ? 'R' : state === 'racemic' ? (i % 2 ? 'S' : 'R') : state === 'achiral' ? 'A' : 'A');
	const beamIn = ramp(frame, tPol - 20, 20);
	const sampleLabel = state === 'pure' ? 'pure enantiomer' : state === 'racemic' ? 'racemic 50 : 50' : state === 'achiral' ? 'achiral compound' : 'sample';
	const rows = [
		{t: tPure, label: 'pure enantiomer', reading: 'plane rotated', angle: ROT, amber: false},
		{t: tRac, label: 'racemic mixture (50 : 50)', reading: '0: rotations cancel', angle: 0, amber: true, ghost: [ROT, -ROT]},
		{t: tAchiral, label: 'achiral compound', reading: '0', angle: 0, amber: true},
	];
	const flow = (frame * 3) % 60;
	return (
		<g>
			<GlossDefs id={ID} colors={GLOSS} />
			<DioramaDefs id={ID} />
			{/* bench */}
			<g opacity={beamIn}>
				<rect x={28} y={214} width={W - 56} height={14} rx={7} fill="#cfcac2" stroke="#b3afa7" strokeWidth={1.5} />
				<line x1={92} y1={BEAM} x2={660} y2={BEAM} stroke="#ffd66b" strokeWidth={10} opacity={0.55} strokeLinecap="round" />
				<line x1={92} y1={BEAM} x2={660} y2={BEAM} stroke="#ffb627" strokeWidth={2.5} strokeDasharray="6 54" strokeDashoffset={-flow} />
				{/* lamp */}
				<rect x={34} y={BEAM - 30} width={46} height={60} rx={10} fill="#5a5a5a" />
				<circle cx={80} cy={BEAM} r={17} fill="#ffe28a" stroke="#f0b63a" strokeWidth={3} />
				<circle cx={80} cy={BEAM} r={26 + pulse * 3} fill="#ffe28a" opacity={0.3} />
				<rect x={50} y={BEAM + 30} width={14} height={24} fill="#8f8b83" />
				{/* polariser */}
				<ellipse cx={212} cy={BEAM} rx={12} ry={46} fill="rgba(160,190,215,0.6)" stroke="#5f7d96" strokeWidth={2.5} />
				{[-24, -12, 0, 12, 24].map((d) => <line key={d} x1={212} y1={BEAM + d - 8} x2={212} y2={BEAM + d + 8} stroke="#34566f" strokeWidth={2} />)}
				<rect x={206} y={BEAM + 46} width={12} height={8} fill="#8f8b83" />
				{/* tube */}
				<rect x={330} y={BEAM - 26} width={160} height={52} rx={10} fill="rgba(170,205,230,0.35)" stroke="rgba(70,90,110,0.6)" strokeWidth={2.5} />
				<ellipse cx={490} cy={BEAM} rx={8} ry={26} fill="rgba(170,205,230,0.5)" stroke="rgba(70,90,110,0.6)" strokeWidth={2} />
				{state !== 'none' && tubeTokens.map((t, i) => {
					const k = tokenKind(i);
					return <Ball key={i} id={ID} name={k === 'A' ? 'grey' : k} color={k === 'S' ? RED : k === 'R' ? '#148a6f' : '#9a9a9a'} x={t.x + idleBob(frame, i, 1.2)} y={t.y + idleBob(frame, i + 7, 1.2)} r={12} label={k === 'A' ? '' : k} labelSize={15} />;
				})}
				<rect x={352} y={BEAM + 26} width={12} height={28} fill="#8f8b83" />
				<rect x={456} y={BEAM + 26} width={12} height={28} fill="#8f8b83" />
				{/* analyser */}
				<ellipse cx={612} cy={BEAM} rx={12} ry={46} fill="rgba(160,190,215,0.6)" stroke="#5f7d96" strokeWidth={2.5} />
				<rect x={606} y={BEAM + 46} width={12} height={8} fill="#8f8b83" />
				{/* observer eye */}
				<path d={`M 668 ${BEAM} Q 692 ${BEAM - 20} 716 ${BEAM} Q 692 ${BEAM + 20} 668 ${BEAM} Z`} fill="#ffffff" stroke={TOK.ink} strokeWidth={2.5} />
				<circle cx={690} cy={BEAM} r={7} fill={TOK.ink} />
				{/* component labels */}
				<text x={62} y={254} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={800}>light source</text>
				<text x={212} y={254} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={800}>polariser</text>
				<text x={410} y={254} textAnchor="middle" fill={state === 'none' ? TOK.inkDim : TOK.ink} fontSize={16} fontWeight={800}>{sampleLabel}</text>
				<text x={650} y={254} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={800}>analyser + observer</text>
			</g>
			{/* light-state glyphs above the beam */}
			<g opacity={beamIn}>
				<PolarGlyph x={144} y={BEAM - 72} star color="#d48a0c" />
				<text x={144} y={BEAM - 110} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={800}>unpolarised</text>
			</g>
			<g opacity={ramp(frame, tPlane, 14)}>
				<PolarGlyph x={272} y={BEAM - 72} angle={0} color="#d48a0c" />
				<text x={272} y={BEAM - 110} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={800}>plane-polarised</text>
			</g>
			<g opacity={ramp(frame, tPure, 14)}>
				<PolarGlyph x={548} y={BEAM - 72} angle={outAngle} color="#d48a0c" ghost={state === 'pure' ? [0] : state === 'racemic' && frame > tCancel ? [ROT, -ROT] : undefined} />
				<text x={548} y={BEAM - 110} textAnchor="middle" fill={state === 'pure' ? theme.accent : TOK.inkDim} fontSize={15} fontWeight={800}>
					{state === 'pure' ? 'plane rotated' : 'no net rotation'}
				</text>
			</g>
			{/* readings table */}
			{rows.map((r, i) => {
				const o = ramp(frame, r.t, 14);
				const y = 312 + i * 58;
				const showRead = i === 1 ? ramp(frame, tZero, 12) : o;
				return (
					<g key={i} opacity={o}>
						<rect x={28} y={y - 25} width={560} height={50} rx={14} fill="#ffffff" fillOpacity={0.7} stroke={TOK.cardBorder} strokeWidth={1.5} />
						<text x={48} y={y + 6} fill={TOK.ink} fontSize={19} fontWeight={800}>{r.label}</text>
						<g opacity={showRead}>
							<PolarGlyph x={366} y={y} r={20} angle={r.angle} color="#d48a0c" ghost={r.ghost && frame > tCancel ? r.ghost : undefined} />
							<text x={398} y={y + 6} fill={r.angle ? theme.accent : TOK.ink} fontSize={19} fontWeight={800}>{r.reading}</text>
						</g>
					</g>
				);
			})}
			{/* zero ≠ pure */}
			<g opacity={ramp(frame, tNot + 60, 16)}>
				<path d="M 600 350 L 612 350 L 612 428 L 600 428" fill="none" stroke={TOK.amber} strokeWidth={3} />
				<text x={680} y={384} textAnchor="middle" fill={TOK.amberInk} fontSize={20} fontWeight={800}>zero ≠</text>
				<text x={680} y={408} textAnchor="middle" fill={TOK.amberInk} fontSize={20} fontWeight={800}>pure</text>
			</g>
			<text x={W / 2} y={498} textAnchor="middle" fill={TOK.inkDim} fontSize={18} fontWeight={700} opacity={ramp(frame, tEvid, 14)}>
				evidence of optical activity, not the structure
			</text>
		</g>
	);
};

export const ChiralityDiagram = ({mode = 'mirror', delay = 62, beats}: ChiralityProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const b = beatsFor(mode, beats);
	const label = {
		mirror: 'A carbon bonded to four different groups and its mirror image, which cannot be superimposed on it',
		compare: 'Structural isomers differ in connectivity, geometric isomers are cis/trans, enantiomers are mirror images with the same connectivity',
		receptor: 'A chiral binding site: one enantiomer makes three contacts, its mirror image only two',
		racemic: 'A racemic mixture gives R and S together; even pure R racemises in the body',
		polarimeter: 'Polarimeter: a pure enantiomer rotates plane-polarised light; racemic and achiral samples read zero',
	}[mode];
	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={label} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			{mode === 'mirror' && <MirrorMode frame={frame} fps={fps} b={b} />}
			{mode === 'compare' && <CompareMode frame={frame} fps={fps} b={b} />}
			{mode === 'receptor' && <ReceptorMode frame={frame} fps={fps} b={b} />}
			{mode === 'racemic' && <RacemicMode frame={frame} fps={fps} b={b} />}
			{mode === 'polarimeter' && <PolarimeterMode frame={frame} fps={fps} b={b} />}
		</svg>
	);
};
