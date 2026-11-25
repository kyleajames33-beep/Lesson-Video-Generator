// Scenes 1 to 6: the hook (last time's split rewound to one neutron and one uranium-235 nucleus; one in, three out;
// predict, then the spares head for more uranium; the painted OPAL pool as the controlled case), one fission event
// (absorb, excite, stretch, pinch, split; the equation balanced), why energy comes out (the binding-energy curve, the
// fragments nearer the peak, mass bars), how much (the working from atomic masses), where it goes (fragments heating a
// lattice, later decays, the methane comparison) and one becomes many (the exact generation tree).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Countdown, Mark, prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading} from '../../math/studio';
import {AnswerBox, Chip, CrossedChip, Row} from '../../physics/projectile/board';
import {Readout} from '../../physics/atom/universe';
import {MarkedHeading} from '../../physics/atom/headline';
import {BindingCurve, NucEq, Tally} from '../../physics/atom/nuclear';
import type {BCBox} from '../../physics/atom/nuclear';
import {NucleonCluster, clusterLayout} from '../../physics/atom/decay';
import {CurveMark} from '../../physics/atom/binding';
import {AtomLattice, FissionSplit, GenTree, genTreeExact, splitAt} from '../../physics/atom/fission';
import {StackColumn} from '../../physics/atom/qvalue';
import {LPlate} from '../../physics/light/plates';
import {Packet} from '../../physics/light/photo';
import {HANDOFF17_END, HandoffBoard17, M8V17FinalFrame, SPLIT, UC} from '../phys-y12-m8-v17/s3';
import {cue as cue17} from '../phys-y12-m8-v17/common';
import {BA_BA, BA_KR, BA_U, BE_FRAG, BE_GAIN, BE_U, CH4_EV, F_DM, F_IN, F_J, F_OUT, F_Q, F_SLIP, GEN11, HEAD, HEAD_SIZE, M, NU, RATIO, U_MEV, cap, cue, hold} from './common';
import {AMBER, FISSION_EQ, GREY, Givens, INK, Lbl, NAVY, NEUTRON, NUC_RED, Neutron, OPAL_PLATE, ORANGE, RED, Strip, T, fx, sci, u6} from './parts';

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const U_SMALL = clusterLayout(92, 143, 9);

// ---------- 1. hook ----------
const RW = 60;
const OUT3 = [{x: 1090, y: 300}, {x: 1120, y: 420}, {x: 1060, y: 530}] as const;
const NEXT3 = [{x: 1340, y: 250}, {x: 1400, y: 420}, {x: 1330, y: 590}] as const;
export const S01: React.FC = () => {
	const id = 'hook';
	const f = useCurrentFrame();
	const og = cue(id, 'One neutron goes in'), tt = cue(id, 'two or three neutrons come out'), pr = cue(id, 'Make your prediction'), sm = cue(id, 'They can split more uranium nuclei'), ch = cap(id, cue(id, 'controlled or uncontrolled chain'), 8);
	const h = hold(id);
	if (f < 1) return <M8V17FinalFrame />;
	const sn17 = cue17('handoff', 'A slow neutron hits uranium two three five');
	const back = f < RW ? HANDOFF17_END - (f / RW) * (HANDOFF17_END - sn17) : sn17;
	const mine = prog(f, RW, 20);
	const nIn = prog(f, og, 30), u = prog(f, tt, 40);
	const nx = lerp(330, UC.x - 150, nIn);
	const out = prog(f, tt + 20, 30), go = prog(f, sm, 40);
	const plate = prog(f, ch, 18);
	return (
		<>
			{mine < 1 ? <div style={{position: 'absolute', inset: 0, opacity: 1 - mine}}><HandoffBoard17 f={back} heading={false} chip={false} /></div> : null}
			<MarkedHeading text={HEAD} marks={['controlled']} at={ch} size={HEAD_SIZE} markColor={NAVY.ink} />
			<Chip x={96} y={890} at={-60} out={1} size={30} w={1728} color={INK} border={INK}>Next: why can one fission event trigger a controlled or uncontrolled chain?</Chip>
			{mine > 0.001 ? <div style={{position: 'absolute', inset: 0, opacity: mine}}>
				<FrameSvg>
					<FissionSplit s={SPLIT} cx={UC.x} cy={UC.y} r={UC.r} u={u} dist={UC.dist} deg={UC.deg} pFill={NUC_RED} nFill={NEUTRON} glow={u > 0 && u < 0.5 ? 1 : 0} f={f} wobble={u > 0 && u < 0.45 ? 1 : 0} />
					{u < 0.4 ? <Neutron x={nx} y={UC.y} r={18} opacity={1 - prog(f, tt, 6)} /> : null}
					{out > 0.001 ? OUT3.map((p, i) => { const sx = UC.x + 40, sy = UC.y; const x = lerp(sx, p.x, out) + (NEXT3[i].x - 90 - p.x) * go, y = lerp(sy, p.y, out) + (NEXT3[i].y - p.y) * go; return <Neutron key={i} x={x} y={y} r={18} streak={go > 0 ? 0 : 50} deg={Math.atan2(p.y - sy, p.x - sx) * 57.3} />; }) : null}
					{NEXT3.map((p, i) => <NucleonCluster key={i} cx={p.x} cy={p.y} r={3.8} discs={U_SMALL} pFill={NUC_RED} nFill={NEUTRON} letters={false} opacity={prog(f, sm, 16)} />)}
					<Countdown start={h.startFrame} end={h.endFrame} x={640} y={770} r={40} />
					{f >= sm ? <Mark x={560} y={732} at={sm} kind="tick" color={INK} size={30} /> : null}
					{plate > 0.001 ? <LPlate spec={OPAL_PLATE} p={{x: 1500, y: 500, w: 320}} opacity={plate} /> : null}
				</FrameSvg>
				<Lbl x={330} y={UC.y + 60} at={RW} out={og + 20} color={GREY.ink} size={28} anchor="middle">slow neutron</Lbl>
				<Lbl x={UC.x} y={UC.y - 135} at={RW} out={tt} color={INK} size={30} anchor="middle">uranium-235</Lbl>
				<Lbl x={1370} y={170 + 0} at={sm + 10} color={INK} size={28} anchor="middle">more uranium-235</Lbl>
				<Chip x={96} y={630} at={pr} size={32} color={INK}>nothing</Chip>
				<Chip x={96} y={710} at={pr + 4} size={32} color={INK} border={f >= sm ? INK : undefined}>they split more uranium</Chip>
				<Chip x={96} y={790} at={pr + 8} size={32} color={INK}>they always escape</Chip>
				<HandTag x={1150} y={660} text="1 in, 2 or 3 out" at={tt + 40} out={sm} size={38} color={GREY.ink} marks={[{kind: 'circle', cx: 1090, cy: 415, rx: 90, ry: 160}]} />
				<HandTag x={1060} y={760} text="controlled: OPAL, Sydney" at={ch + 6} size={36} color={NAVY.ink} marks={[{kind: 'arrow', from: [1400, 730], to: [1530, 650], bend: -0.2}]} />
			</div> : null}
		</>
	);
};

// ---------- 2. one fission event ----------
const C2 = {x: 520, y: 520, r: 10, dist: 200, deg: -40};
export const S02: React.FC = () => {
	const id = 'fission-event';
	const f = useCurrentFrame();
	const as = cue(id, 'absorbs a slow neutron'), st = cue(id, 'wobbles and splits in two'), tf = cue(id, 'This is fission'), ff = cue(id, 'called fission fragments'), tn = cue(id, 'krypton ninety-two, and three neutrons'), ts = cue(id, 'two hundred and thirty-six on each side'), ns = cap(id, cue(id, 'ninety-two on each side'), 24);
	const nIn = prog(f, as, 30), ex = prog(f, as + 30, 14);
	const u = prog(f, st + 10, 50);
	const c = splitAt(SPLIT, C2.x, C2.y, C2.r, u, C2.dist, C2.deg);
	const out = prog(f, tn, 36);
	const nOut = [[930, 600], [860, 760], [960, 470]] as const;
	const framed = prog(f, ns, 12);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<FissionSplit s={SPLIT} cx={C2.x} cy={C2.y} r={C2.r} u={u} dist={C2.dist} deg={C2.deg} pFill={NUC_RED} nFill={NEUTRON} glow={ex * (1 - prog(f, st + 40, 10))} f={f} wobble={ex > 0 && u < 0.45 ? 1.2 : 0} />
				{nIn < 1 ? <Neutron x={lerp(110, C2.x - 190, nIn)} y={C2.y} r={20} /> : null}
				{out > 0.001 ? nOut.map(([x, y], i) => <Neutron key={i} x={lerp(C2.x + 60, x, out)} y={lerp(C2.y - 20, y, out)} r={18} streak={40} deg={Math.atan2(y - C2.y + 20, x - C2.x - 60) * 57.3} />) : null}
			</FrameSvg>
			<Lbl x={C2.x} y={C2.y - 210} at={-30} out={as + 30} color={INK} size={32} anchor="middle">²³⁵U nucleus</Lbl>
			<Lbl x={C2.x} y={C2.y - 210} at={as + 34} out={st + 30} color={AMBER.ink} size={32} anchor="middle">²³⁶U* (excited)</Lbl>
			<Lbl x={110} y={C2.y + 60} at={-30} out={as + 30} color={GREY.ink} size={28}>slow neutron</Lbl>
			<HandTag x={C2.x + 190} y={C2.y - 220} text="extra energy" at={as + 40} out={st + 30} size={36} color={AMBER.ink} />
			<Lbl x={c.a[0] + c.rA + 20} y={c.a[1] - 40} at={tn} color={NAVY.ink} size={34}>¹⁴¹₅₆Ba</Lbl>
			<Lbl x={c.b[0] + c.rB + 20} y={c.b[1] + 40} at={tn + 8} color={NAVY.ink} size={34}>⁹²₃₆Kr</Lbl>
			<div style={{position: 'absolute', left: 996, top: 214, opacity: 1 - prog(f, tn, 14)}}><NucEq terms={[FISSION_EQ[0], '+', FISSION_EQ[2], '→', '?']} size={42} /></div>
			<Lbl x={990} y={360} at={-30} out={ts} color={INK} size={34}>A: ?</Lbl>
			<Lbl x={990} y={412} at={-30} out={ns} color={RED.ink} size={34}>Z: ?</Lbl>
			<div style={{position: 'absolute', left: 980, top: 210, opacity: prog(f, tn, 14), padding: '4px 16px', background: '#fffdf8', border: `4.5px solid ${framed > 0 ? INK : 'transparent'}`, borderRadius: 12}}><NucEq terms={FISSION_EQ} size={42} /></div>
			<div style={{position: 'absolute', left: 990, top: 330, display: 'flex', flexDirection: 'column', gap: 10, opacity: prog(f, ts, 12)}}>
				<Tally label="A" sum="1 + 235 = 236 | 141 + 92 + 3 = 236" tickAt={ts + 20} size={34} />
				<div style={{opacity: prog(f, ns, 12)}}><Tally label="Z" sum="0 + 92 = 92 | 56 + 36 + 0 = 92" tickAt={ns + 16} size={34} color={RED.ink} /></div>
			</div>
			<Chip x={980} y={500} at={tf} size={30} w={840} color={INK}>Nuclear fission: splitting of a heavy nucleus (e.g. U-235) into lighter fragments plus 2-3 neutrons</Chip>
			<Lbl x={c.a[0] - 90} y={c.a[1] - c.rA - 24} at={ff} out={tn} color={NAVY.ink} size={30}>fission fragment</Lbl>
			<Lbl x={c.b[0] - 110} y={c.b[1] + c.rB + 44} at={ff + 6} out={tn} color={NAVY.ink} size={30}>fission fragment</Lbl>
			<Lbl x={990} y={700} at={ff + 10} color={GREY.ink} size={28}>fragments vary from event to event;</Lbl>
			<Lbl x={990} y={740} at={ff + 14} color={GREY.ink} size={28}>{`usually two fragments and 2 or 3 neutrons (average ≈ ${fx(NU, 1)})`}</Lbl>
		</>
	);
};

// ---------- 3. why energy comes out ----------
export const BC3: BCBox = {x: 200, y: 290, w: 1080, h: 520};
const MASSB = {x: 1420, base: 820, w: 150, gap: 70};
export const S03: React.FC = () => {
	const id = 'energy-source';
	const f = useCurrentFrame();
	const uh = cue(id, 'Uranium two thirty-five sits on the heavy side'), ft = cue(id, 'eight point three and eight point five'), mt = cue(id, 'more tightly bound'), lm = cue(id, 'they have less mass'), le = cap(id, cue(id, 'The missing mass leaves as energy'), 24);
	const ar = prog(f, ft + 10, 30);
	const glow = prog(f, le, 14);
	const GAP = 34;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<BindingCurve b={BC3} size={26} ticksA={[4, 16, 56, 92, 141, 235]} />
				<CurveMark b={BC3} A={235} B={BA_U} text={`²³⁵U ${fx(BA_U, 2)} (≈ ${fx(BA_U, 1)})`} color={NAVY.stroke} size={28} dy={44} dx={-40} opacity={prog(f, uh, 12)} />
				<CurveMark b={BC3} A={141} B={BA_BA} text={`¹⁴¹Ba ${fx(BA_BA, 2)} (≈ ${fx(BA_BA, 1)})`} color={AMBER.ink} size={28} dy={86} dx={10} opacity={prog(f, ft, 12)} />
				<CurveMark b={BC3} A={92} B={BA_KR} text={`⁹²Kr ${fx(BA_KR, 2)} (≈ ${fx(BA_KR, 1)})`} color={AMBER.ink} size={28} dy={-34} dx={-30} anchor="end" opacity={prog(f, ft + 6, 12)} />
				{ar > 0.001 ? <ArrowLine b={BC3} a0={235} b0={BA_U} a1={115} b1={8.42} t={ar} /> : null}
				{f >= lm ? <g opacity={prog(f, lm, 14)}>
					<StackColumn x={MASSB.x} base={MASSB.base} w={MASSB.w} segs={[{h: 420 - GAP, fill: '#e7e1d6', stroke: INK, brk: true}, {h: GAP, fill: glow > 0 ? AMBER.soft : '#e7e1d6', stroke: glow > 0 ? AMBER.stroke : INK, glow}]} />
					<StackColumn x={MASSB.x + MASSB.w + MASSB.gap} base={MASSB.base} w={MASSB.w} segs={[{h: 420 - GAP, fill: '#e7e1d6', stroke: INK, brk: true}]} />
				</g> : null}
			</FrameSvg>
			<Lbl x={BC3.x} y={BC3.y + BC3.h + 110} at={-30} color={GREY.ink} size={26}>the curve: an earlier video</Lbl>
			<Lbl x={MASSB.x + MASSB.w / 2} y={MASSB.base + 46} at={lm} color={INK} size={26} anchor="middle">n + ²³⁵U</Lbl>
			<Lbl x={MASSB.x + 1.5 * MASSB.w + MASSB.gap} y={MASSB.base + 46} at={lm} color={INK} size={26} anchor="middle">Ba + Kr + 3n</Lbl>
			<Lbl x={MASSB.x - 10} y={MASSB.base + 90} at={lm} color={GREY.ink} size={26}>mass (not to scale)</Lbl>
			<Lbl x={MASSB.x + 2 * MASSB.w + MASSB.gap + 14} y={MASSB.base - 420 + GAP / 2 + 8} at={lm + 10} color={AMBER.ink} size={30}>Δm</Lbl>
			<HandTag x={720} y={236} text="fission: up towards the peak" at={ft + 30} size={36} color={AMBER.ink} marks={[{kind: 'circle', cx: 950, cy: 328, rx: 140, ry: 52}]} />
			<Chip x={1400} y={220} at={mt} size={30} color={INK}>more tightly bound → less mass</Chip>
			<div style={{position: 'absolute', left: 1400, top: 300}}><Row at={le} size={48}><AnswerBox at={le + 4}>E = Δm c²</AnswerBox></Row></div>
		</>
	);
};
const ArrowLine: React.FC<{b: BCBox; a0: number; b0: number; a1: number; b1: number; t: number}> = ({b, a0, b0, a1, b1, t}) => {
	const sx = b.x + (Math.sqrt(a0) / Math.sqrt(240)) * b.w, sy = b.y + b.h - (b0 / 9) * b.h;
	const ex = b.x + (Math.sqrt(a1) / Math.sqrt(240)) * b.w, ey = b.y + b.h - (b1 / 9) * b.h;
	const x = lerp(sx, ex, t), y = lerp(sy, ey, t), a = Math.atan2(y - sy, x - sx);
	return <g><line x1={sx} y1={sy} x2={x} y2={y} stroke={AMBER.stroke} strokeWidth={9} strokeLinecap="round" /><path d={`M${x + 24 * Math.cos(a)},${y + 24 * Math.sin(a)} L${x + 13 * Math.cos(a + 2.2)},${y + 13 * Math.sin(a + 2.2)} L${x + 13 * Math.cos(a - 2.2)},${y + 13 * Math.sin(a - 2.2)} Z`} fill={AMBER.stroke} stroke={AMBER.stroke} strokeWidth={6} /></g>;
};

// ---------- 4. how much energy? ----------
const MiniSplit: React.FC = () => (
	<g>
		<rect x={1300} y={190} width={520} height={300} rx={16} fill="#fffdf8" stroke="rgba(60,45,20,0.22)" strokeWidth={3} />
		<FissionSplit s={SPLIT} cx={1540} cy={350} r={3.6} u={1} dist={80} deg={-40} pFill={NUC_RED} nFill={NEUTRON} />
		<Neutron x={1360} y={350} r={14} label={false} />
		{[[1660, 420], [1700, 330], [1620, 460]].map(([x, y], i) => <Neutron key={i} x={x} y={y} r={12} label={false} />)}
		<text x={1640} y={250} style={T(28, NAVY.ink)}>Ba</text>
		<text x={1360} y={470} style={T(28, NAVY.ink)}>Kr</text>
		<text x={1720} y={470} style={T(28, GREY.ink)}>3 n</text>
	</g>
);
export const S04: React.FC = () => {
	const id = 'worked-energy';
	const f = useCurrentFrame();
	const eb = cue(id, 'The electrons balance'), rx = cue(id, 'two hundred and thirty-six point zero five two six u'), px = cue(id, 'two hundred and thirty-five point eight six six six'), dm = cue(id, 'zero point one eight six zero u'), mv = cap(id, cue(id, 'about one hundred and seventy-three MeV'), 40);
	const tick = Math.min(1, prog(f, mv, 24));
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<Strip x={96} y={190} at={-30} size={30} w={1180}>Energy released when U-235 splits into Ba-141, Kr-92 and 3 neutrons</Strip>
			<Strip x={96} y={256} at={-30} size={30}>Δm = m(reactants) − m(products); E = Δm × {U_MEV} MeV</Strip>
			<Givens x={96} y={326} w={1180} at={-30} size={30} lines={[<>m(n) = {u6(M.n)} u; m(²³⁵U) = {u6(M.u235)} u</>, <>m(¹⁴¹Ba) = {u6(M.ba)} u; m(⁹²Kr) = {u6(M.kr)} u</>, <>1 u = {U_MEV} MeV/c² (data sheet)</>]} />
			<FrameSvg><MiniSplit /></FrameSvg>
			<HandTag x={1300} y={530} text="atomic masses: 92 electrons each side" at={eb} size={30} color={NAVY.ink} />
			<div style={{position: 'absolute', left: 96, top: 500, display: 'flex', flexDirection: 'column', gap: 10}}>
				<Row at={rx} ageAt={mv} size={44} oldSize={34}>{`reactants: ${u6(M.n)} + ${u6(M.u235)} = ${u6(F_IN)} u`}</Row>
				<Row at={px} ageAt={mv} size={44} oldSize={34}>{`products: ${u6(M.ba)} + ${u6(M.kr)} + 3(${u6(M.n)}) = ${u6(F_OUT)} u`}</Row>
				<Row at={dm} ageAt={mv} size={44} oldSize={34}>{`Δm = ${u6(F_DM)} u`}</Row>
				<Row at={mv} size={52}><AnswerBox at={mv + 4}>{`E = ${u6(F_DM)} × ${U_MEV} ≈ ${fx(F_Q * tick, 0)} MeV`}</AnswerBox></Row>
			</div>
			<HandTag x={900} y={652} text="count all 3 neutrons" at={px + 30} size={32} color={INK} marks={[{kind: 'circle', cx: 715, cy: 582, rx: 170, ry: 32}]} />
			<Lbl x={96} y={810} at={dm + 6} color={GREY.ink} size={26}>{`said: ${fx(F_IN, 4)}, ${fx(F_OUT, 4)} and ${fx(F_DM, 4)}`}</Lbl>
			<Lbl x={1030} y={712} at={mv + 16} color={ORANGE.ink} size={30}>{`= ${sci(F_J, 2)} J`}</Lbl>
			<CrossedChip x={1110} y={770} at={mv + 24} crossAt={mv + 36} size={28} caption="u needs × 931.5">{`${fx(F_DM, 3)} × (3.00 × 10⁸)² = ${sci(F_SLIP, 2)} J`}</CrossedChip>
			<Lbl x={96} y={880} at={mv + 30} color={GREY.ink} size={28}>{`binding check (an earlier video): ${fx(BE_FRAG, 1)} − ${fx(BE_U, 1)} = ${fx(BE_GAIN, 1)} MeV ✓`}</Lbl>
		</>
	);
};

// ---------- 5. where the energy goes ----------
const LAT = {x: 150, y: 260, cols: 12, rows: 8, gap: 76};
export const S05: React.FC = () => {
	const id = 'energy-destination';
	const f = useCurrentFrame();
	const fa = cue(id, 'flying apart'), hu = cue(id, 'the material heats up'), ld = cue(id, 'their later decays'), tt = cue(id, 'about two hundred MeV in total'), ne = cue(id, 'about nine electron volts'), tm = cap(id, cue(id, 'about twenty million times more'), 24);
	const cx = LAT.x + 5.5 * LAT.gap, cy = LAT.y + 3.5 * LAT.gap;
	const fly = prog(f, 6, 40), stop = prog(f, fa + 10, 50);
	const fragA = [cx + 60 + 330 * stop, cy - 30 - 120 * stop], fragB = [cx - 60 - 330 * stop, cy + 30 + 120 * stop];
	const heat = prog(f, hu, 50);
	const dec = prog(f, ld, 30);
	const SB = {x: 1100, y: 560, w: 680};
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<AtomLattice x={LAT.x} y={LAT.y} cols={LAT.cols} rows={LAT.rows} gap={LAT.gap} r={14} heat={heat} f={f} fill="#d9d4ca" stroke={INK} />
				{fly > 0.001 ? <g>
					<line x1={cx} y1={cy} x2={fragA[0]} y2={fragA[1]} stroke={AMBER.stroke} strokeWidth={6} opacity={0.6 * (1 - prog(f, hu + 30, 30))} />
					<line x1={cx} y1={cy} x2={fragB[0]} y2={fragB[1]} stroke={AMBER.stroke} strokeWidth={6} opacity={0.6 * (1 - prog(f, hu + 30, 30))} />
					<NucleonCluster cx={fragA[0]} cy={fragA[1]} r={4.4} discs={SPLIT.a} pFill={NUC_RED} nFill={NEUTRON} letters={false} />
					<NucleonCluster cx={fragB[0]} cy={fragB[1]} r={4.4} discs={SPLIT.b} pFill={NUC_RED} nFill={NEUTRON} letters={false} />
				</g> : null}
				{dec > 0.001 ? [0, 1].map(k => { const [x, y] = k ? fragB : fragA; const t = ((f - ld) % 45) / 45; return <g key={k}><circle cx={x + (k ? -1 : 1) * (40 + 90 * t)} cy={y - 50 - 40 * t} r={9} fill={NAVY.stroke} opacity={1 - t} /><Packet x={x + (k ? 1 : -1) * (40 + 90 * t)} y={y + 50 + 30 * t} deg={k ? 30 : -150} len={56} color={AMBER.stroke} opacity={1 - t} /></g>; }) : null}
				{f >= tt ? <g opacity={prog(f, tt, 14)}>
					<rect x={SB.x} y={SB.y} width={SB.w * (173 / 200)} height={50} fill={AMBER.stroke} stroke={INK} strokeWidth={2} />
					<rect x={SB.x + SB.w * (173 / 200)} y={SB.y} width={SB.w * (27 / 200)} height={50} fill={AMBER.soft} stroke={INK} strokeWidth={2} strokeDasharray="8 6" />
				</g> : null}
				{f >= ne ? <g opacity={prog(f, ne, 14)}><rect x={SB.x} y={SB.y + 140} width={2.5} height={50} fill={INK} /></g> : null}
			</FrameSvg>
			<Readout x={1100} y={210} label="temperature of the material" value={heat > 0.05 ? 'rising ↑' : 'steady'} color={RED.ink} w={500} />
			<Lbl x={cx} y={LAT.y + LAT.rows * LAT.gap + 10} at={-30} color={GREY.ink} size={26} anchor="middle">atoms of the surrounding material (diagram)</Lbl>
			<Lbl x={1100} y={400} at={fa + 6} color={AMBER.ink} size={30}>fragment kinetic energy (most of it)</Lbl>
			<HandTag x={1110} y={470} text="→ heat" at={hu + 20} size={38} color={AMBER.ink} marks={[{kind: 'circle', cx: 1350, cy: 252, rx: 270, ry: 60}]} />
			<Lbl x={1260} y={520} at={ld + 10} color={NAVY.ink} size={28}>β and γ from the fragments</Lbl>
			<Lbl x={SB.x} y={SB.y + 92} at={tt + 6} color={AMBER.ink} size={28}>{`≈ ${fx(F_Q, 0)} MeV at the split + later decays ≈ 200 MeV total`}</Lbl>
			<Lbl x={SB.x + 20} y={SB.y + 172} at={ne + 6} color={INK} size={28}>{`CH₄ + 2O₂: ${fx(CH4_EV, 1)} eV (about 9), too small to see here`}</Lbl>
			<div style={{position: 'absolute', left: 1100, top: 790}}><Row at={tm} size={44}><AnswerBox at={tm + 4}>{`200 MeV ÷ ${fx(CH4_EV, 1)} eV ≈ ${sci(RATIO, 1)}`}</AnswerBox></Row></div>
			<Lbl x={1100} y={900} at={tm + 10} color={GREY.ink} size={26}>about twenty million</Lbl>
		</>
	);
};

// ---------- 6. one becomes many ----------
const TREE6 = genTreeExact(4, 2);
export const S06: React.FC = () => {
	const id = 'chain';
	const f = useCurrentFrame();
	const et = cue(id, 'each of those can trigger another fission'), cr = cue(id, 'A chain reaction is'), of = cue(id, 'One fission, then two'), fr = cue(id, 'then four'), ei = cue(id, 'then eight'), gn = cue(id, 'Each round is called a generation'), once = cap(id, cue(id, 'over a thousand fissions at once'), 24);
	const upTo = f < et ? 1 : f < of ? 1 + prog(f, et, 20) : f < fr ? 2 : f < ei ? 2 + prog(f, fr, 16) : 3 + prog(f, ei, 16);
	const n = f < et ? 1 : f < fr ? 2 : f < ei ? 4 : 8;
	const fan = prog(f, once, 24);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<Chip x={96} y={190} at={cr} size={28} w={1728} color={INK}>Chain reaction: self-propagating sequence in which neutrons from one fission trigger further fissions</Chip>
			<FrameSvg>
				<GenTree nodes={TREE6} x0={300} x1={1260} y0={330} dy={130} r={24} upTo={upTo} fill={AMBER.soft} stroke={INK} link={GREY.stroke} opacity={1 - 0.4 * fan} />
				{fan > 0.001 ? <g opacity={fan}>{[16, 32, 64, 128].map((k, j) => <g key={k}>{Array.from({length: k}, (_, i) => <circle key={i} cx={300 + ((i + 0.5) / k) * 960} cy={860 + j * 18} r={Math.max(2, 6 - j)} fill={AMBER.stroke} />)}</g>)}</g> : null}
			</FrameSvg>
			{['Gen 1', 'Gen 2', 'Gen 3', 'Gen 4'].map((g, i) => <Lbl key={g} x={120} y={340 + i * 130} at={gn + i * 4} color={NAVY.ink} size={30}>{g}</Lbl>)}
			<Readout x={1400} y={300} label="fissions this generation" value={fan > 0.5 ? `Gen 11: 2¹⁰ = ${GEN11}` : String(n)} color={NAVY.ink} w={420} />
			<Lbl x={1400} y={470} at={once + 6} color={GREY.ink} size={26}>{'Gen 5 to 8 shown as dots below'}</Lbl>
			<HandTag x={1330} y={620} text="× 2 each generation" at={ei + 20} size={36} color={NAVY.ink} marks={[{kind: 'brace', x: 1290, y1: 320, y2: 730, facing: 'right'}]} />
		</>
	);
};
