// M6 P01 (Biology practical) scenes 5 to 9: the fair test (the variables card, each controlled item pen-linked to its
// painted object); the control handled the same (two dishes in a closed-cabinet outline, lids lifting in step, lamp
// off on the control, the comparison strip, the bench control crossed); three plates each (the data table written
// cell by cell, the drop that splits into three unequal samples); relative survival (the formula, one worked value,
// the survival bar row); the graph (means joined, every plate as a grey point with range bars, the steep start, the
// levelling tail and the teal summary).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cueFrame, cues} from '../../cues';
import {Heading, Overlay, Ring} from '../bio-m5-b13/shared';
import {S} from './common';
import {PIP} from './assets';
import {
	AMBER, AMBER_INK, Axes, Bench, CTag, CornerTag, CrossChip, DrawPath, Drop, EDGE, GR, GREEN, GREYT, GREY_INK, GTag, INK, INK_SOFT, MEANS, PLATES, PenLink, Pl,
	QUESTION, REL, Rail, SurvBars, Sx, TERRA, TEAL, TIMES, COUNTS, Table, VIOLET, clamp01, fmt1, gx, gy, lerp, pbPt, plH, prog, smooth, tw,
} from './parts';
import type {TCell} from './parts';

// ---------- 5. The fair test ----------
const S5 = S('fair-test');
const K5 = cues(S5, {exposure: 'exposure time', colonies: 'number of colonies', everything: 'Everything else', suspension: 'same yeast suspension', hundred: 'same hundred microlitres', lamp: 'same lamp', twenty: 'twenty centimetres', incubation: 'same incubation'});
const T5 = [cueFrame(S5, 'zero'), cueFrame(S5, 'fifteen'), cueFrame(S5, 'thirty'), cueFrame(S5, 'sixty'), cueFrame(S5, 'a hundred and twenty')];
export const SceneFair: React.FC = () => {
	const f = useCurrentFrame();
	const CX = 880, CW = 980;
	const cab = {cx: 250, cy: 380, w: 300}, plate = {cx: 640, cy: 380, w: 200}, pip = {cx: 390, cy: 720, w: 540};
	const pp = pbPt(PLATES.pipette, pip.cx, pip.cy, pip.w);
	const tube = pp(PIP.tube[0], PIP.tube[1] - 120), pipette = pp(PIP.pipette[0] + 60, PIP.pipette[1] - 260);
	const items: {t: string; at: number; link?: [number, number]}[] = [
		{t: 'same yeast suspension', at: K5.suspension, link: tube},
		{t: '100 µL per plate', at: K5.hundred, link: pipette},
		{t: 'same lamp, fixed 20 cm', at: K5.lamp, link: [cab.cx + 120, cab.cy]},
		{t: 'same incubation: 30 °C, 48 h, inverted', at: K5.incubation},
		{t: 'same agar batch, same plate size, same counting rule', at: K5.incubation + 34},
		{t: 'kept in the dark, all plates (light lets cells repair UV damage)', at: K5.incubation + 58},
	];
	const iy = (i: number) => 668 + i * 44;
	const head = (y: number, text: string, color: string, at: number) => <Sx x={CX + 30} y={y} text={text} size={34} color={color} hand weight={700} at={at} />;
	return (
		<>
			<Heading text={QUESTION} at={-200} size={54} />
			<Overlay>
				<Rail lit={1} at={-100} />
				<Bench w={780} />
				<Pl p={PLATES.cabinet} cx={cab.cx} cy={cab.cy} w={cab.w} o={prog(f, 0, 14)} />
				<GTag x={cab.cx} y={cab.cy + plH(PLATES.cabinet, cab.w) / 2 + 8} text="closed cabinet" at={6} size={20} anchor="middle" />
				<Pl p={PLATES.p030} cx={plate.cx} cy={plate.cy} w={plate.w} o={prog(f, K5.colonies - 10, 14)} />
				<Pl p={PLATES.pipette} cx={pip.cx} cy={pip.cy} w={pip.w} o={prog(f, K5.everything, 14)} />
				{/* the card */}
				<rect x={CX} y={262} width={CW} height={680} rx={22} fill="#fffdf8" stroke={EDGE} strokeWidth={3} opacity={prog(f, 0, 12)} />
				{head(318, 'independent:', VIOLET, K5.exposure)}
				<Sx x={CX + 230} y={318} text="UV exposure time (s)" size={34} color={INK} hand weight={700} at={K5.exposure + 6} />
				{T5.map((at, i) => {
					const x = CX + 40 + i * 180;
					return (
						<g key={i} opacity={prog(f, at, 10)}>
							<rect x={x} y={344} width={160} height={58} rx={14} fill="#f3effb" stroke={VIOLET} strokeWidth={2.5} />
							<Pl p={PLATES.cabinet} cx={x + 38} cy={373} w={50} />
							<Sx x={x + 112} y={384} text={`${TIMES[i]} s`} size={28} color={VIOLET} weight={800} anchor="middle" at={-100} />
						</g>
					);
				})}
				{head(478, 'dependent:', AMBER_INK, K5.colonies)}
				<Sx x={CX + 210} y={478} text="colonies per plate after 48 h at 30 °C" size={34} color={INK} hand weight={700} at={K5.colonies + 6} />
				<PenLink a={[plate.cx + 100, plate.cy + 20]} b={[CX + 20, 468]} at={K5.colonies + 10} color={AMBER_INK} bow={60} />
				{head(600, 'controlled:', GREEN, K5.everything)}
				<Sx x={CX + 210} y={600} text="everything else the same" size={30} color={GREY_INK} hand weight={700} at={K5.everything + 6} />
				{items.map((it, i) => {
					const next = items[i + 1]?.at ?? 1e9;
					const g = prog(f, next, 12);
					return (
						<g key={i}>
							<circle cx={CX + 44} cy={iy(i) - 9} r={6} fill={GREEN} opacity={prog(f, it.at, 10)} />
							<Sx x={CX + 62} y={iy(i)} text={it.t} size={28} color={g > 0.5 ? GREY_INK : INK} weight={600} at={it.at} />
							{it.link ? <PenLink a={it.link} b={[CX + 30, iy(i) - 10]} at={it.at + 4} color={GREEN} o={1 - 0.7 * g} bow={-30} /> : null}
						</g>
					);
				})}
				<CornerTag at={-100} />
				{void K5.twenty}
			</Overlay>
		</>
	);
};

// ---------- 6. The control is handled the same ----------
const K6 = cues(S('control-same'), {control: 'are the control', cabinet: 'into the cabinet too', lids: 'lids off', sameTime: 'for the same time', lampOff: 'the lamp stays off', only: 'the only difference', uv: 'is the UV', bench: 'on the bench', handling: 'handling could explain'});
const Lid: React.FC<{cx: number; cy: number; r: number; lift: number; o?: number}> = ({cx, cy, r, lift, o = 1}) => (o <= 0.01 ? null : (
	<g opacity={o} transform={`translate(${lift * 40},${-lift * 150})`}>
		<circle cx={cx} cy={cy} r={r} fill="rgba(235,242,246,0.38)" stroke="#9fb2bf" strokeWidth={4} />
		<circle cx={cx} cy={cy} r={r - 10} fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth={2} />
	</g>
));
export const SceneControl: React.FC = () => {
	const f = useCurrentFrame();
	const A = {cx: 430, cy: 570, w: 290}, B = {cx: 870, cy: 570, w: 290};
	const lift = smooth(prog(f, K6.lids, 18)) * (1 - smooth(prog(f, K6.lampOff + 30, 18)));
	const ghost = smooth(prog(f, K6.bench, 30));
	const sameT = 'same: suspension, volume, lids off, time in cabinet, incubation';
	const sameW = tw(sameT, 30, true) * 1.04;
	const diffX = 120 + sameW + 40;
	return (
		<>
			<Heading text={QUESTION} at={-200} size={54} />
			<Overlay>
				<Rail lit={1} at={-100} />
				<Bench />
				{/* the variables card, dimmed to a strip */}
				<rect x={90} y={262} width={1760} height={44} rx={14} fill="#f6f2ea" stroke={EDGE} strokeWidth={2} />
				<Sx x={110} y={293} text="independent: UV exposure time   |   dependent: colonies per plate   |   controlled: suspension, 100 µL, lamp, 20 cm, incubation, dark" size={22} color={GREY_INK} weight={600} at={-100} />
				{/* the closed cabinet outline (no lamp drawn) */}
				<rect x={190} y={340} width={920} height={420} rx={26} fill="rgba(210,214,218,0.25)" stroke="#8d949b" strokeWidth={4} opacity={prog(f, K6.cabinet - 6, 14)} />
				<GTag x={210} y={352} text="inside the closed cabinet" at={K6.cabinet} size={22} />
				<Pl p={PLATES.agar} cx={A.cx} cy={A.cy} w={A.w} o={prog(f, 0, 12)} />
				<Pl p={PLATES.agar} cx={B.cx} cy={B.cy} w={B.w} o={prog(f, 4, 12)} />
				<Lid cx={A.cx} cy={A.cy} r={A.w / 2 + 4} lift={lift} o={prog(f, 0, 12)} />
				<Lid cx={B.cx} cy={B.cy} r={B.w / 2 + 4} lift={lift} o={prog(f, 4, 12)} />
				<Ring cx={A.cx} cy={A.cy} rx={A.w / 2 + 16} ry={A.w / 2 + 14} at={K6.control} color={GREEN} width={5} />
				<CTag x={A.cx} y={722} text="0 s control" at={K6.control + 6} color={GREEN} size={28} anchor="middle" />
				<CTag x={B.cx} y={722} text="60 s exposure" at={K6.control + 14} color={VIOLET} size={28} anchor="middle" />
				<GTag x={A.cx - 210} y={410} text="lamp off" at={K6.lampOff} size={24} anchor="middle" />
				{/* comparison strip */}
				<Sx x={120} y={830} text={sameT} size={30} color={GREEN} hand weight={700} at={K6.only} />
				<Sx x={diffX - 26} y={830} text="|" size={30} color={GREYT} weight={700} at={K6.only + 8} />
				<Sx x={diffX} y={830} text="different:" size={30} color={VIOLET} hand weight={700} at={K6.only + 12} />
				<Sx x={diffX + 150} y={830} text="UV only" size={30} color={VIOLET} hand weight={700} at={K6.only + 12} />
				<Ring cx={diffX + 150 + tw('UV only', 30, true) * 0.55} cy={820} rx={tw('UV only', 30, true) * 0.62 + 14} ry={28} at={K6.uv} color={VIOLET} width={4} />
				{/* the control left on the bench */}
				<g opacity={0.55 * prog(f, K6.bench, 10)}>
					<Pl p={PLATES.agar} cx={lerp(A.cx, 1530, ghost)} cy={lerp(A.cy, 520, ghost)} w={lerp(A.w, 200, ghost)} />
				</g>
				<CrossChip x={1320} y={660} text="control left on the bench" at={K6.bench + 20} cross={K6.handling + 10} caption="then handling differs too" size={30} />
				{void K6.sameTime}{void TERRA}{void INK}{void AMBER}
			</Overlay>
		</>
	);
};

// ---------- 7. Three plates each ----------
const K7 = cues(S('three-plates'), {three: 'has three plates', zero: 'At zero seconds', c133: 'a hundred and thirty three', c144: 'a hundred and forty four', c149: 'a hundred and forty nine', mean: 'a mean of', m142: 'a hundred and forty two', match: "They don't match", slightly: 'slightly different number', evens: 'evens that out'});
export const TCOLS7 = [{w: 190, head: 'exposure (s)', color: VIOLET}, {w: 150, head: 'plate 1'}, {w: 150, head: 'plate 2'}, {w: 150, head: 'plate 3'}, {w: 560, head: 'mean', color: AMBER_INK}];
export const SceneThree: React.FC = () => {
	const f = useCurrentFrame();
	const TX = 660, TY = 320, RH = 72;
	const restAt = (r: number) => K7.m142 + 40 + (r - 1) * 22;
	const r0 = [K7.zero, K7.c133, K7.c144, K7.c149];
	const cell = (r: number, c: number): TCell | undefined => {
		if (r === 0) return c < 4 ? {text: c === 0 ? '0' : String(COUNTS[0][c - 1]), at: r0[c]} : undefined;
		if (c === 0) return {text: String(TIMES[r]), at: restAt(r)};
		if (c < 4) return {text: String(COUNTS[r][c - 1]), at: restAt(r) + 3 * c};
		return {text: String(MEANS[r]), at: restAt(r) + 12, color: AMBER_INK};
	};
	const meanX = TX + 190 + 450 + 340, meanY = TY + RH + RH * 0.66;
	const split = smooth(prog(f, K7.slightly, 22));
	const fall = smooth(prog(f, K7.match - 30, 26));
	const tip = pbPt(PLATES.pipette, 330, 380, 360)(330, 1440);
	const dropY = lerp(tip[1] + 30, 620, fall);
	return (
		<>
			<Heading text={QUESTION} at={-200} size={54} />
			<Overlay>
				<Rail lit={2} at={4} />
				<Bench w={560} />
				<Pl p={PLATES.pipette} cx={330} cy={380} w={360} o={prog(f, 0, 14)} />
				<GTag x={330} y={500} text="100 µL per plate" at={10} size={22} anchor="middle" />
				{/* one drop, three samples */}
				{split < 0.02 ? <Drop x={330} y={dropY} r={34} dots={10} seed={3} o={prog(f, K7.match - 30, 8)} /> : null}
				{split >= 0.02 ? [0, 1, 2].map(i => <Drop key={i} x={lerp(330, 190 + i * 140, split)} y={620} r={lerp(34, 30, split)} dots={[8, 11, 10][i]} seed={11 + i} />) : null}
				{[0, 1, 2].map(i => <Sx key={i} x={190 + i * 140} y={690} text={`${[8, 11, 10][i]} cells`} size={24} color={INK_SOFT} weight={700} anchor="middle" at={K7.slightly + 18 + i * 4} />)}
				<CTag x={330} y={712} text="random sampling of cells" at={K7.slightly + 24} color={AMBER_INK} size={30} anchor="middle" />
				<Pl p={PLATES.p000} cx={330} cy={860} w={150} o={prog(f, K7.c144, 14)} />
				<GTag x={420} y={890} text="plate 2: 144" at={K7.c144 + 6} size={20} />
				<GTag x={TX} y={268} text="each time: three plates, made the same way" at={K7.three} size={24} />
				<Table x={TX} y={TY} cols={TCOLS7} rows={5} cell={cell} at={K7.three + 6} rowH={RH} rowDim={r => (r > 0 ? 1 : 0)} hot={r => (r === 0 ? prog(f, K7.mean, 10) : 0)} />
				<Sx x={meanX + 40} y={meanY} text="(133 + 144 + 149) ÷ 3 =" size={30} color={INK} weight={700} anchor="end" at={K7.mean} />
				<Sx x={meanX + 54} y={meanY} text="142" size={34} color={AMBER_INK} weight={800} at={K7.m142} />
				<CornerTag at={-100} />
				{void K7.evens}
			</Overlay>
		</>
	);
};

// ---------- 8. Relative survival ----------
const K8 = cues(S('relative-survival'), {compare: 'To compare the times', relative: 'relative survival', divided: 'the mean divided by', thirty: 'At thirty seconds', r43: 'forty three point zero', two: 'After two minutes', r35: 'three point five'});
export const TCOLS8 = [{w: 170, head: 'exposure (s)', color: VIOLET}, {w: 115, head: 'plate 1'}, {w: 115, head: 'plate 2'}, {w: 115, head: 'plate 3'}, {w: 130, head: 'mean', color: AMBER_INK}, {w: 515, head: 'relative survival (%)', color: AMBER_INK}];
export const SceneRelative: React.FC = () => {
	const f = useCurrentFrame();
	const TX = 90, TY = 400, RH = 72;
	const relAt = [K8.relative + 16, K8.r43 + 40, K8.r43, K8.r43 + 54, K8.r35];
	const relText = ['100.0', '69.0', '61 ÷ 142 × 100 = 43.0', '16.9', '5 ÷ 142 × 100 = 3.5'];
	const cell = (r: number, c: number): TCell | undefined => {
		if (c === 0) return {text: String(TIMES[r]), at: -100};
		if (c < 4) return {text: String(COUNTS[r][c - 1]), at: -100};
		if (c === 4) return {text: String(MEANS[r]), at: -100, color: AMBER_INK};
		return {text: relText[r], at: relAt[r], color: r === 2 || r === 4 ? AMBER_INK : INK};
	};
	const dimR = (r: number) => (r === 2 || r === 4 ? 0 : 0.6 * prog(f, K8.r35, 12));
	return (
		<>
			<Heading text={QUESTION} at={-200} size={54} />
			<Overlay>
				<Rail lit={3} at={4} />
				<Sx x={TX} y={300} text="relative survival = mean ÷ control mean × 100" size={42} color={AMBER_INK} hand weight={700} at={K8.divided} />
				<GTag x={TX} y={322} text="relative survival: a time's mean as a % of the control's mean" at={K8.relative} size={24} />
				<Table x={TX} y={TY} cols={TCOLS8} rows={5} cell={cell} at={-100} rowH={RH} size={30} rowDim={r => dimR(r) > 0.3 ? 1 : 0} hot={r => (r === 0 ? 0.8 * prog(f, K8.thirty, 10) * (1 - prog(f, K8.two, 10)) : r === 2 ? prog(f, K8.thirty, 10) * (1 - prog(f, K8.two, 10)) : r === 4 ? prog(f, K8.r35, 10) : 0)} />
				<SurvBars x={1330} y0={TY + RH} rowH={RH} w={420} fills={relAt} dimRow={dimR} />
				<Sx x={1330} y={TY + 44} text="survival bars (%)" size={24} color={GREY_INK} weight={700} at={K8.relative + 10} />
				<CornerTag at={-100} />
				{void K8.compare}{void REL}
			</Overlay>
		</>
	);
};

// ---------- 9. Graph every plate ----------
const K9 = cues(S('graph'), {graph: 'Graph exposure time', y: 'on the y', plot: 'Plot each mean', every: 'every plate', spread: 'the spread is visible', steeply: 'steeply', levels: 'levels off', lower: 'lower survival'});
export const SceneGraph: React.FC = () => {
	const f = useCurrentFrame();
	const pts = TIMES.map((t, i) => [gx(t), gy(REL[i])] as [number, number]);
	const lineD = pts.map((p, i) => `${i ? 'L' : 'M'}${p[0]},${p[1]}`).join(' ');
	const pulse = Math.max(0, Math.sin(clamp01((f - K9.steeply) / 40) * Math.PI));
	const tail = pts[4];
	return (
		<>
			<Heading text={QUESTION} at={-200} size={54} />
			<Overlay>
				<Rail lit={3} at={-100} />
				<rect x={90} y={250} width={1760} height={44} rx={14} fill="#f6f2ea" stroke={EDGE} strokeWidth={2} />
				<Sx x={110} y={281} text="means: 142, 98, 61, 24, 5   |   relative survival (%): 100.0, 69.0, 43.0, 16.9, 3.5" size={22} color={GREY_INK} weight={600} at={-100} />
				<Axes at={K9.graph} yAt={K9.y} />
				{/* the steep first segment glows */}
				{pulse > 0.01 ? <line x1={pts[0][0]} y1={pts[0][1]} x2={pts[1][0]} y2={pts[1][1]} stroke={AMBER} strokeWidth={22} strokeLinecap="round" opacity={0.45 * pulse} /> : null}
				{f >= K9.plot ? <DrawPath d={lineD} at={K9.plot + 6} dur={40} color={AMBER_INK} width={4} /> : null}
				{/* every plate: grey points and range bars */}
				{COUNTS.map((c, i) => {
					const vals = c.map(n => (n / MEANS[0]) * 100);
					const at = K9.every + i * 8;
					const lo = Math.min(...vals), hi = Math.max(...vals);
					const o = prog(f, at, 10);
					if (o <= 0.01) return null;
					const x = gx(TIMES[i]);
					return (
						<g key={i} opacity={o}>
							<line x1={x + 22} y1={gy(lo)} x2={x + 22} y2={gy(hi)} stroke={INK_SOFT} strokeWidth={3} opacity={prog(f, at + 10, 10)} />
							<line x1={x + 15} y1={gy(lo)} x2={x + 29} y2={gy(lo)} stroke={INK_SOFT} strokeWidth={3} opacity={prog(f, at + 10, 10)} />
							<line x1={x + 15} y1={gy(hi)} x2={x + 29} y2={gy(hi)} stroke={INK_SOFT} strokeWidth={3} opacity={prog(f, at + 10, 10)} />
							{vals.map((v, k) => <circle key={k} cx={x + 22 + (k - 1) * 0} cy={gy(v)} r={6} fill="#a9adb2" stroke="#ffffff" strokeWidth={1.5} />)}
						</g>
					);
				})}
				{pts.map((p, i) => <circle key={i} cx={p[0]} cy={p[1]} r={11 * prog(f, K9.plot + i * 8, 8)} fill={AMBER} stroke={AMBER_INK} strokeWidth={2.5} />)}
				<GTag x={1380} y={GR.y + 10} text="amber: means   grey: each plate" at={K9.every + 30} size={22} />
				<CTag x={1380} y={GR.y + 80} text="first 15 s: about a third lost" at={K9.steeply + 6} color={AMBER_INK} size={30} maxW={440} dim={prog(f, K9.lower, 10)} />
				<DrawPath d={`M${tail[0] - 40},${tail[1] - 30} Q${tail[0] + 40},${tail[1] - 160} ${1380},${GR.y + 290}`} at={K9.levels + 4} dur={14} color={GREYT} width={3} dash="8 7" />
				<CTag x={1380} y={GR.y + 260} text="levelling off towards zero" at={K9.levels + 4} color={AMBER_INK} size={30} maxW={440} dim={prog(f, K9.lower, 10)} />
				<CTag x={1380} y={GR.y + 400} text="longer exposure, lower survival (this lamp, 20 cm, this yeast)" at={K9.lower} color={TEAL} size={32} maxW={440} />
				<CornerTag at={-100} />
				{void K9.spread}{void GREEN}{void plH}
			</Overlay>
		</>
	);
};
