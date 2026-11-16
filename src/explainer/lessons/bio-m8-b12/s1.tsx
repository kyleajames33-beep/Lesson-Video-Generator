// B8-12 scenes 1 to 5: the hook (more insulin into cells already ignoring it), b08 recalled with type 1 against type 2
// (no key, jammed lock), management's two jobs and three words with the mechanism strip drawing at the bottom, lifestyle
// acting on the cause (contraction moves transporters without insulin; less liver fat), and metformin (less glucose from
// the liver, better response). The mechanism strip owns the bottom from scene 3; actions dock into the slot they act on,
// and the HbA1c meter sits beside it, never in a slot.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {SignalPulse} from '../m8-shared/parts';
import {Lab} from '../bio-m8-b08/s1';
import {
	AMBER, AMBER_INK, Arrow, BLUE, C_INS, C_LIFE, C_MET, CARD, Chip, EDGE, GREYT, GTag, Hex, HexFlow, INK, INK_SOFT, KeyLock, MECH, MECH_HEADS, MECH_WS, Meter, Mistake, Pic, PicH, RED, SlotStrip, Svg, Sx, T, TEAL,
	TEALD, TickLine, Title, Vessel, YearsStrip, lerp, pbPt, prog, pulse, smooth, vis,
} from './parts';
import type {P2, SSlot} from './parts';
import {FP, PL} from './assets';
import {K} from './common';

const ON = -1000;

// ---------- shared: the mechanism strip and the small meter ----------
export type MechState = {lit?: number[]; l3?: number; l2?: number; m1?: number; m2?: number; i2?: number; c4?: number; from?: {l?: P2; m?: P2; i?: P2; c?: P2}};
export const mechSlots = (s: MechState): SSlot[] => {
	const ch = (t: string, at: number | undefined, chip: string, from?: P2) => (at === undefined ? [] : [{t, at, chip, from: at > -100 ? from : undefined}]);
	return [
		{head: MECH_HEADS[0], lit: s.lit?.[0], items: [...ch('metformin', s.m1, C_MET, s.from?.m)]},
		{head: MECH_HEADS[1], lit: s.lit?.[1], items: [...ch('lifestyle', s.l2, C_LIFE, s.from?.l), ...ch('metformin', s.m2, C_MET, s.from?.m), ...ch('insulin', s.i2, C_INS, s.from?.i)]},
		{head: MECH_HEADS[2], lit: s.lit?.[2], items: [...ch('lifestyle', s.l3, C_LIFE, s.from?.l)]},
		{head: MECH_HEADS[3], lit: s.lit?.[3], items: [...ch('complication care', s.c4, '#a8421c', s.from?.c)]},
	];
};
export const MechStrip: React.FC<{s: MechState; pulseAt?: number; o?: number; dy?: number}> = ({s, pulseAt, o = 1, dy = 0}) => (
	<SlotStrip x={MECH.x} y={MECH.y} ws={MECH_WS} h={MECH.h} gap={MECH.gap} slots={mechSlots(s)} size={28} headSize={30} pulseAt={pulseAt} o={o} dy={dy} />
);
export const ALL_ON = [ON, ON, ON, ON];
export const SMALL_METER = {x: 1580, y: 944, w: 210};
/** The small meter beside the strip (outside the slots), with a dashed frame. */
export const SideMeter: React.FC<{at?: number; o?: number; val?: (f: number) => number}> = ({at = ON, o = 1, val}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 14) * o;
	if (v <= 0.01) return null;
	return (
		<g opacity={v}>
			<rect x={1560} y={MECH.y} width={264} height={MECH.h} rx={18} fill={CARD} stroke={EDGE} strokeWidth={3} strokeDasharray="10 8" />
			<Sx x={1580} y={906} text="HbA1c (%)" size={26} color={INK} weight={800} at={ON} />
			<Meter g={SMALL_METER} size={26} bar={28} band="" valLabel={false} val={val} title={false} />
			<Sx x={1692} y={1030} text="monitoring" size={28} color={TEAL} anchor="middle" hand weight={700} at={ON} />
		</g>
	);
};

// ---------- 1. hook ----------
const K1 = K('hook', {why: "why isn't", plenty: 'make plenty', some: 'sometimes more', signal: 'of a signal', ignoring: 'already ignoring', so: 'So how'});
const MU1 = {cx: 1540, cy: 560, w: 560};
const IS1 = {cx: 330, cy: 560, w: 420};
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const mp = pbPt(PL.musIn, MU1.cx, MU1.cy, MU1.w);
	const R = FP.receptors.map(([u, v]) => mp(u, v));
	const dock = smooth(prog(f, K1.signal + 20, 18));
	const penDim = 1 - 0.55 * prog(f, K1.ignoring, 16);
	const isl = vis(f, K1.plenty - 6, undefined, 14);
	const mus = vis(f, K1.signal - 6, undefined, 14);
	return (
		<Svg>
			<Title text="Why not just more insulin?" out={K1.so} />
			<Title text="How can type 2 diabetes be managed?" at={K1.so} />
			<g opacity={penDim}><Pic p={PL.pen} cx={960} cy={300} w={520} /></g>
			<Sx x={1250} y={350} text="?" size={130} color={AMBER_INK} hand weight={700} at={K1.why} />
			<Chip x={960} y={600} text="more of the same signal?" size={34} color={AMBER_INK} ink={INK} anchor="middle" at={K1.ignoring} />
			<g opacity={isl}>
				<Pic p={PL.islet} cx={IS1.cx} cy={IS1.cy} w={IS1.w} />
				<Sx x={IS1.cx} y={820} text="plenty of insulin made" size={40} color={INK} anchor="middle" hand at={ON} />
				<GTag x={IS1.cx} y={846} text="b08: beta cells covering" size={28} anchor="middle" />
			</g>
			<SignalPulse a={[IS1.cx + 190, IS1.cy - 20]} b={R[1]} at={K1.plenty + 20} every={10} dur={44} bow={-50} color={TEAL} r={10} />
			<g opacity={mus}>
				<Pic p={PL.musIn} cx={MU1.cx} cy={MU1.cy} w={MU1.w} />
				{R.map(([x, y], i) => dock > 0.01 ? <circle key={i} cx={x} cy={lerp(y - 60, y - 22, dock)} r={12} fill={TEAL} stroke="#fffdf8" strokeWidth={2.5} opacity={dock} /> : null)}
				<Sx x={MU1.cx} y={820} text="signal arrives, little response" size={40} color={INK} anchor="middle" hand at={K1.signal + 10} />
				<Sx x={MU1.cx} y={870} text="transporters stay inside" size={32} color={AMBER_INK} anchor="middle" hand at={K1.ignoring} />
			</g>
			<Sx x={960} y={1000} text="early type 2: plenty of insulin, but cells respond poorly" size={46} color={INK} anchor="middle" hand at={K1.some} />
		</Svg>
	);
};

// ---------- 2. recall, and type 1 against type 2 ----------
const K2 = K('type-one-two', {binds: 'still binds', fewer: 'fewer glucose', liver: 'The liver also', beta: 'Beta cells cover', behind: 'fall behind', t1: 'Type 1 is', immune: 'immune cells', little: 'little or no', key: 'as a key', nokey: 'Type 1 has', fits: 'the key fits', jammed: 'is jammed'});
export const SceneTypes: React.FC = () => {
	const f = useCurrentFrame();
	const sp = smooth(prog(f, K2.t1, 30));
	const MU = {cx: lerp(700, 1400, sp), cy: lerp(470, 440, sp), w: lerp(760, 640, sp)};
	const mp = pbPt(PL.musIn, MU.cx, MU.cy, MU.w);
	const mix = 0.3 * smooth(prog(f, K2.fewer, 30));
	const R = FP.receptors.map(([u, v]) => mp(u, v));
	const dock = smooth(prog(f, K2.binds, 18));
	const capY = mp(1000, FP.capY)[1];
	const A = 1 - prog(f, K2.t1 - 8, 14);
	const B = prog(f, K2.t1 + 10, 14);
	const grey = smooth(prog(f, K2.immune, 40));
	return (
		<Svg>
			<Title text="How type 2 differs from type 1" />
			<Pic p={PL.musIn} cx={MU.cx} cy={MU.cy} w={MU.w} />
			<g opacity={mix}><Pic p={PL.musMem} cx={MU.cx} cy={MU.cy} w={MU.w} /></g>
			{R.map(([x, y], i) => dock > 0.01 ? <circle key={i} cx={x} cy={lerp(y - 70, y - 24, dock)} r={12 * MU.w / 760 + 3} fill={TEAL} stroke="#fffdf8" strokeWidth={2.5} opacity={dock} /> : null)}
			{A > 0.01 ? <g opacity={A}>
				{vis(f, K2.fewer, undefined, 10) > 0.01 ? [0, 1, 2, 3, 4, 5].map(i => {
					const u = ((f - K2.fewer) / 44 + i / 6) % 1;
					const [x0] = mp(520 + i * 200, FP.capY);
					const inn = i === 2;
					const yy = inn ? lerp(capY, capY + 200, u) : capY + 110 * Math.sin(u * Math.PI) * 0.8;
					return <Hex key={i} x={x0} y={yy} o={prog(f, K2.fewer, 10)} />;
				}) : null}
				<Sx x={700} y={790} text="insulin still binds" size={40} color={TEAL} anchor="middle" hand at={K2.binds} out={K2.fewer + 4} />
				<Sx x={700} y={790} text="fewer transporters reach the membrane" size={40} color={AMBER_INK} anchor="middle" hand at={K2.fewer + 8} />
				<Sx x={700} y={848} text="insulin resistance (muscle and fat cells)" size={44} color={INK} anchor="middle" hand at={K2.fewer + 30} />
				<GTag x={96} y={900} text="b08: how type 2 develops" size={28} />
				<g opacity={vis(f, K2.liver - 4, undefined, 14)}>
					<Pic p={PL.liver} cx={1550} cy={580} w={340} />
					<Vessel x0={1330} x1={1800} y={760} h={36} />
					<HexFlow a={[1560, 680]} b={[1700, 760]} at={K2.liver} n={4} period={40} />
					<HexFlow a={[1340, 760]} b={[1790, 760]} at={K2.liver + 10} n={6} period={70} />
					<Sx x={1560} y={830} text="liver: releases too much glucose" size={36} color={AMBER_INK} anchor="middle" hand at={K2.liver + 10} />
				</g>
				<YearsStrip g={{x: 1400, y: 222, w: 400, h: 140}} yr={fr => 15 * smooth(prog(fr, K2.beta, K2.behind - K2.beta + 40))} at={K2.beta} size={26} />
			</g> : null}
			{B > 0.01 ? <g opacity={B}>
				<line x1={950} x2={950} y1={170} y2={1050} stroke={EDGE} strokeWidth={3} strokeDasharray="12 10" />
				<Sx x={480} y={205} text="type 1" size={54} color={INK} anchor="middle" hand at={ON} />
				<Sx x={1400} y={205} text="type 2" size={54} color={INK} anchor="middle" hand at={ON} />
				<Pic p={PL.islet} cx={480} cy={440} w={560} />
				<g opacity={grey}><g style={{filter: 'grayscale(1) brightness(1.08)'}}><Pic p={PL.islet} cx={480} cy={440} w={560} /></g></g>
				<Sx x={480} y={690} text="immune cells destroy beta cells" size={40} color={INK} anchor="middle" hand at={K2.immune} />
				<Sx x={1400} y={690} text="insulin made, cells respond poorly" size={40} color={INK} anchor="middle" hand at={K2.t1 + 20} />
				<KeyLock x={540} y={790} s={0.72} mode="none" at={K2.nokey} lockAt={K2.t1 + 20} />
				<Sx x={480} y={918} text="no key: little or no insulin" size={40} color={RED} anchor="middle" hand at={K2.nokey + 8} />
				<KeyLock x={1460} y={790} s={0.72} mode="jam" at={K2.fits} jamAt={K2.jammed} lockAt={K2.t1 + 20} />
				<Sx x={1400} y={918} text="key fits, lock jammed" size={40} color={AMBER_INK} anchor="middle" hand at={K2.jammed} />
				<GTag x={1400} y={950} text="the jam is inside the cell, after insulin binds" size={28} anchor="middle" at={K2.jammed + 12} />
				<Mistake x={480} y={958} text="type 2 means no insulin is made" size={32} at={K2.little + 30} cross={K2.key} anchor="middle" />
			</g> : null}
		</Svg>
	);
};

// ---------- 3. two jobs, and three words ----------
const K3 = K('two-jobs', {two: 'two jobs', bring: 'Bring blood', usual: 'usual range', lower: 'lower the', vessels: 'blood vessels', kidneys: 'kidneys', eyes: 'eyes and', nerves: 'nerves', mgmt: 'Management is', treat: 'A treatment', mon: 'And monitoring', links: 'links every'});
/** A blood glucose gauge (2 to 14 mmol/L) with the usual 4 to 6 band. */
const GluGauge: React.FC<{x: number; y: number; w: number; val: number}> = ({x, y, w, val}) => {
	const X = (v: number) => x + ((v - 2) / 12) * w;
	return (
		<g>
			<Sx x={x} y={y - 46} text="blood glucose (mmol/L)" size={30} color={INK} weight={800} at={ON} />
			<rect x={x} y={y} width={w} height={38} rx={19} fill={CARD} stroke={INK} strokeWidth={3} />
			<rect x={X(4)} y={y + 3} width={X(6) - X(4)} height={32} fill={TEAL} opacity={0.35} />
			{[2, 4, 6, 8, 10, 12, 14].map(t => <g key={t}><line x1={X(t)} x2={X(t)} y1={y + 38} y2={y + 48} stroke={INK} strokeWidth={3} /><Sx x={X(t)} y={y + 78} text={`${t}`} size={28} color={INK} anchor="middle" weight={700} at={ON} /></g>)}
			<Sx x={X(5)} y={y + 118} text="usual range" size={30} color={TEAL} anchor="middle" hand weight={700} at={ON} />
			<path d={`M${X(val)},${y + 24} l-15,-44 l30,0 Z`} fill={RED} stroke={CARD} strokeWidth={2} />
		</g>
	);
};
export const SceneTwoJobs: React.FC = () => {
	const f = useCurrentFrame();
	const g = 11.2 - 4.8 * smooth(prog(f, K3.usual, 50));
	const sp = pbPt(PL.reader, 230, 430, 190);
	const [sx, sy] = sp(FP.screen[0], FP.screen[1]);
	const org: [string, number, number, typeof PL.eye][] = [['eyes', K3.eyes, 1060, PL.eye], ['kidneys', K3.kidneys, 1370, PL.kidney], ['heart and vessels', K3.vessels, 1680, PL.heart]];
	return (
		<Svg>
			<Title text="Management: two jobs, three words" />
			<Chip x={96} y={150} text="1. glucose towards its usual range" size={36} color={BLUE} ink={INK} at={K3.bring} />
			<Chip x={960} y={150} text="2. lower complication risk" size={36} color={BLUE} ink={INK} at={K3.lower} />
			<Pic p={PL.reader} cx={230} cy={430} w={190} />
			<Sx x={sx} y={sy + 16} text={g.toFixed(1)} size={44} color={g > 7 ? RED : INK} anchor="middle" weight={800} at={ON} />
			<GluGauge x={400} y={400} w={460} val={g} />
			{org.map(([t, a, x, p]) => <g key={t}>
				<PicH p={p} cx={x} cy={410} h={230} />
				<Sx x={x} y={582} text={t} size={34} color={INK} anchor="middle" hand at={a} />
			</g>)}
			<GTag x={960} y={604} text="nerves" size={30} at={K3.nerves} />
			<GTag x={1824} y={604} text="b08: vessel damage" size={28} anchor="end" at={K3.vessels} />
			<Lab x={96} y={712} t="management: long-term control, not a cure" at={K3.mgmt} dim={K3.treat} size={44} w={1400} />
			<Lab x={96} y={772} t="treatment: acts on the mechanism" at={K3.treat} dim={K3.mon} size={44} w={1400} />
			<Lab x={96} y={832} t="monitoring: is the plan working?" at={K3.mon} size={44} w={1400} color={TEAL} />
			<Sx x={1824} y={832} text="link every action to the mechanism" size={40} color={BLUE} anchor="end" hand at={K3.links} />
			<MechStrip s={{lit: [K3.bring + 8, K3.bring + 18, K3.bring + 28, K3.lower]}} pulseAt={K3.links + 10} />
			<SideMeter at={K3.mon} val={() => 7.6} />
		</Svg>
	);
};

// ---------- 4. lifestyle ----------
const K4 = K('lifestyle', {cause: 'the cause', contract: 'muscles contract', move: 'move glucose', without: 'without needing', leaves: 'glucose leaves', losing: 'Losing weight', fat: 'fat stored', respond: 'respond to', catch: 'The catch', keeping: 'keeping it', time: 'time,', money: 'money', access: 'access to'});
const MU4 = {cx: 960, cy: 470, w: 620};
export const SceneLifestyle: React.FC = () => {
	const f = useCurrentFrame();
	const mp = pbPt(PL.musIn, MU4.cx, MU4.cy, MU4.w);
	const mix = smooth(prog(f, K4.move + 6, 36));
	const squeeze = f >= K4.contract ? 1 - 0.05 * Math.max(0, Math.sin(((f - K4.contract) / 22) * Math.PI)) : 1;
	const capY = mp(1000, FP.capY)[1];
	const glu = vis(f, K4.leaves - 10, undefined, 10);
	const fatK = 1 - 0.75 * smooth(prog(f, K4.fat + 10, 60));
	const sus = smooth(prog(f, K4.keeping, 40));
	const from = {l: [150, 352] as P2};
	return (
		<Svg>
			<Title text="Lifestyle: acting on the cause" />
			<PicH p={PL.shoes} cx={190} cy={245} h={120} />
			<PicH p={PL.bowl} cx={385} cy={245} h={120} />
			<Chip x={96} y={330} text="lifestyle" size={32} color={C_LIFE} fill={C_LIFE} ink={CARD} />
			<g transform={`translate(300,560) scale(${squeeze},${2 - squeeze}) translate(-300,-560)`}><Pic p={PL.skm} cx={300} cy={560} w={400} /></g>
			<Sx x={300} y={720} text="muscle contracts" size={40} color={INK} anchor="middle" hand at={K4.contract} />
			<Arrow a={[500, 520]} b={[640, 470]} at={K4.contract + 10} color={INK_SOFT} width={5} bow={-0.15} />
			<Pic p={PL.musIn} cx={MU4.cx} cy={MU4.cy} w={MU4.w} />
			<g opacity={mix}><Pic p={PL.musMem} cx={MU4.cx} cy={MU4.cy} w={MU4.w} /></g>
			{glu > 0.01 ? [0, 1, 2, 3, 4].map(i => { const u = ((f - K4.leaves) / 40 + i / 5) % 1; const [x0] = mp(560 + i * 220, FP.capY); return <Hex key={i} x={x0} y={lerp(capY, capY + 200, u)} o={glu * Math.sin(u * Math.PI)} />; }) : null}
			<Sx x={540} y={760} text="contraction moves transporters: no insulin needed" size={38} color={C_LIFE} hand at={K4.without} />
			<GTag x={1210} y={150} text="GLUT4" size={30} at={K4.without + 20} />
			<g opacity={vis(f, K4.losing - 6, undefined, 14)}>
				<Pic p={PL.liver} cx={1590} cy={370} w={330} />
				<ellipse cx={1580} cy={360} rx={140} ry={70} fill="#f2dc84" opacity={0.55 * fatK} />
				<Sx x={1590} y={545} text="less fat in and around the liver" size={32} color={INK} anchor="middle" hand at={K4.fat + 20} />
			</g>
			<g opacity={vis(f, K4.catch, undefined, 14)}>
				<Sx x={1400} y={628} text="hard to sustain" size={40} color={AMBER_INK} hand at={ON} />
				<rect x={1400} y={648} width={410} height={24} rx={12} fill={CARD} stroke={INK_SOFT} strokeWidth={2.5} />
				{Array.from({length: 20}, (_, i) => <rect key={i} x={1404 + i * 20.3} y={652} width={18} height={16} rx={4} fill={C_LIFE} opacity={(i / 20 < sus ? 1 : 0) * (1 - 0.85 * (i / 19) * sus)} />)}
				<Sx x={1400} y={706} text="month 1" size={28} color={INK} weight={700} at={ON} />
				<Sx x={1810} y={706} text="year 5" size={28} color={INK} anchor="end" weight={700} at={ON} />
			</g>
			<GTag x={1400} y={730} text="time" size={30} at={K4.time} />
			<GTag x={1510} y={730} text="money" size={30} at={K4.money} />
			<GTag x={1400} y={790} text="access to healthy food" size={30} at={K4.access} />
			<MechStrip s={{lit: ALL_ON, l3: K4.leaves, l2: K4.respond, from}} />
			<SideMeter val={() => 7.6} />
			{void pulse}{void AMBER}{void GREYT}{void T}{void TEALD}
		</Svg>
	);
};

// ---------- 5. metformin ----------
const K5 = K('metformin', {met: 'called metformin', reduces: 'It reduces', liver: 'liver releases', helps: 'helps muscle', without: 'without pushing', cheap: 'cheap', tested: 'well tested', rarely: 'rarely makes', weight: "doesn't add", but: 'But it', remove: 'remove the', stomach: 'stomach upsets'});
const MU5 = {cx: 1540, cy: 330, w: 500};
export const SceneMetformin: React.FC = () => {
	const f = useCurrentFrame();
	const mp = pbPt(PL.musIn, MU5.cx, MU5.cy, MU5.w);
	const R = FP.receptors.map(([u, v]) => mp(u, v));
	const mix = 0.3 + 0.3 * smooth(prog(f, K5.helps, 36));
	const calm = 1 + 0.025 * Math.sin(f / 30);
	const from = {m: [250, 420] as P2};
	return (
		<Svg>
			<Title text="Metformin" />
			<Pic p={PL.blister} cx={250} cy={275} w={340} />
			<Sx x={250} y={440} text="metformin: a tablet" size={40} color={C_MET} anchor="middle" hand at={K5.met} />
			<Pic p={PL.liver} cx={790} cy={380} w={400} />
			<Vessel x0={600} x1={1110} y={620} h={38} />
			<HexFlow a={[800, 510]} b={[880, 620]} at={ON} n={6} period={40} thinAt={K5.liver + 10} />
			<HexFlow a={[612, 620]} b={[1100, 620]} at={ON} n={8} period={80} thinAt={K5.liver + 10} />
			<Sx x={855} y={700} text="less glucose released" size={40} color={C_MET} anchor="middle" hand at={K5.liver + 14} />
			<Pic p={PL.musIn} cx={MU5.cx} cy={MU5.cy} w={MU5.w} />
			<g opacity={mix}><Pic p={PL.musMem} cx={MU5.cx} cy={MU5.cy} w={MU5.w} /></g>
			{R.map(([x, y], i) => <circle key={i} cx={x} cy={y - 18} r={10} fill={TEAL} stroke="#fffdf8" strokeWidth={2} />)}
			<Sx x={MU5.cx} y={560} text="muscle responds better" size={38} color={C_MET} anchor="middle" hand at={K5.helps + 10} />
			<g transform={`translate(1320,720) scale(${calm}) translate(-1320,-720)`}><Pic p={PL.islet} cx={1320} cy={720} w={190} /></g>
			<Sx x={1440} y={735} text="no extra demand on beta cells" size={30} color={INK} hand at={K5.without} />
			<TickLine x={96} y={530} text="cheap and well tested" at={K5.cheap} size={38} />
			<TickLine x={96} y={590} text="rarely causes low glucose" at={K5.rarely} size={38} />
			<TickLine x={96} y={650} text="no weight gain" at={K5.weight} size={38} />
			<TickLine x={96} y={735} text="doesn't remove the resistance" at={K5.remove} size={36} minus color={GREYT} />
			<TickLine x={96} y={795} text="stomach upsets" at={K5.stomach} size={36} minus color={GREYT} />
			<MechStrip s={{lit: ALL_ON, l3: ON, l2: ON, m1: K5.liver, m2: K5.helps, from}} />
			<SideMeter val={() => 7.6} />
		</Svg>
	);
};
