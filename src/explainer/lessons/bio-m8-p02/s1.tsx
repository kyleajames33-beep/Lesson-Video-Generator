// P8-02 Biology scenes 1 to 6: the hook (an invisible loss, a visible bubble; the fan speeds it), why uptake tracks loss
// (vapour out of the stoma, water up the xylem; in and out arrows on the shoot), the potometer (parts pointed at, the
// water column carrying the bubble, the reservoir reset), airtight and settled (cut and fit under water, sealed joints,
// one bubble let in at the far end in a close-up, settle), aim and variables, and the control with alternating repeats.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Cam} from '../bio-m5-b06a/shared';
import {EvapDots} from '../m8-shared/parts';
import {
	AMBER, AMBER_INK, Arrow, BLUE, CARD, Chip, DrawPath, EDGE, Fan, GREENC, GREYT, GTag, INK, INK_SOFT, ItemCard, Pic, PicH, PlateB, Pot, RED, Ring, ShootCrop, StepRail, Svg, Sx, T, TEAL, Title, VIOLET, WATER, WaterTint, Watch,
	bubbleX, lerp, mmKeys, potK, potPt, prog, pulse, scribbleEllipse, shootPt, smooth, vis,
} from './parts';
import type {P2} from './parts';
import {LEAF_STOMA, LEAF_XYLEM, PL, POT} from './assets';
import {K} from './common';

const ON = -1000;

/** Dots flowing from a to b (vapour leaving, water rising); `speed(f)` scales the flow. */
export const FlowDots: React.FC<{a: P2; b: P2; at: number; n?: number; speed?: (f: number) => number; color?: string; r?: number; o?: number; spread?: number}> = ({a, b, at, n = 9, speed, color = '#599fc9', r = 7, o = 1, spread = 10}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 12) * o;
	if (v <= 0.01) return null;
	let ph = 0;
	for (let t = at; t < f; t += 4) ph += 4 * (speed ? speed(t) : 1);
	return (
		<g opacity={v}>
			{Array.from({length: n}, (_, i) => {
				const u = (ph / 110 + i / n) % 1;
				return <circle key={i} cx={a[0] + (b[0] - a[0]) * u + ((i % 3) - 1) * spread} cy={a[1] + (b[1] - a[1]) * u + ((i % 2) - 0.5) * spread} r={r} fill={color} opacity={Math.sin(u * Math.PI) * 0.9} />;
			})}
		</g>
	);
};

// ---------- 1. hook ----------
const K1 = K('hook', {leaving: 'leaving a leaf', tiny: 'tiny air bubble', creep: 'creep along', four: 'about four', fan: 'fan on', twice: 'twice as', so: 'So how', tell: 'tell you'});
const H = {cx: 1080, cy: 560, w: 860};
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const P = potPt(H.cx, H.cy, H.w);
	const [mx, my] = P(1180, POT.capY);
	const mm = mmKeys([[K1.tiny, 3], [K1.fan, 19], [680, 58]]);
	const lv = P(POT.leaves[0], POT.leaves[1]);
	return (
		<Svg>
			<Title text="What does the bubble really measure?" />
			<GTag x={1824} y={44} text="example data" size={28} anchor="end" />
			<Cam keys={[[0, 1, 960, 560], [K1.tiny + 10, 1, 960, 560], [K1.tiny + 46, 1.75, mx, my], [K1.fan - 40, 1.75, mx, my], [K1.fan - 4, 1, 960, 560]]}>
				<rect x={560} y={940} width={1100} height={26} rx={10} fill="#e9e1d1" />
				<Pot cx={H.cx} cy={H.cy} w={H.w} mm={mm} bubbleAt={K1.tiny} bubbleGlow={K1.tiny} />
				<EvapDots pts={[[lv[0] - 120, lv[1] - 40], [lv[0] + 20, lv[1] - 90], [lv[0] + 140, lv[1] - 20]]} at={K1.leaving} out={K1.tiny} o={0.6} r={12} />
				<g transform={`translate(${(1 - smooth(prog(f, K1.fan, 22))) * -300},0)`} opacity={prog(f, K1.fan, 12)}>
					<Fan cx={400} cy={380} h={420} on={K1.fan + 6} to={[lv[0] - 60, lv[1] - 30]} />
				</g>
			</Cam>
			<GTag x={600} y={150} text="water vapour: invisible" size={30} at={K1.leaving} out={K1.tiny} />
			<Chip x={96} y={720} text="about 4 mm per minute (still air)" size={40} color={AMBER_INK} ink={INK} at={K1.four} />
			<Chip x={96} y={806} text="with a fan: more than twice as fast" size={40} color={AMBER_INK} ink={INK} at={K1.twice} />
			{void BLUE}{void VIOLET}
		</Svg>
	);
};

// ---------- 2. why uptake tracks loss ----------
const K2 = K('uptake-tracks-loss', {recall: 'Recall how', evaporates: 'evaporates', diffuses: 'diffuses out', stomata: 'the stomata', more: 'more water', xylem: 'xylem', faster: 'the faster', loses: 'loses water', draws: 'draws water', measuring: 'Measuring what', goesIn: 'goes in', estimate: 'estimate', out: 'comes out'});
const LF = {cx: 560, cy: 430, w: 760};
export const SceneUptake: React.FC = () => {
	const f = useCurrentFrame();
	const lp = (u: number, v: number): P2 => [LF.cx + (u - 996.5) * (LF.w / 1537), LF.cy + (v - 974.5) * (LF.w / 1537)];
	const st = lp(LEAF_STOMA[0], LEAF_STOMA[1]), xy = lp(LEAF_XYLEM[0], LEAF_XYLEM[1]);
	const spd = (fr: number) => 1 + 1.6 * smooth(prog(fr, K2.faster, 30));
	const sk = 0.56, sx = 1330, sy = 230;
	const S = shootPt(sx, sy, sk);
	const base = S(696, 1222), leafTop = S(820, 520);
	const lossL = prog(f, K2.loses, 12), inL = prog(f, K2.draws, 12), eq = prog(f, K2.goesIn, 12);
	const flowOff = ((f - K2.xylem) * 1.4 * spd(f)) % 40;
	return (
		<Svg>
			<Title text="Why uptake tracks loss" />
			<GTag x={1824} y={44} text="b05: How do plants keep enough water?" size={28} anchor="end" />
			<PicH p={PL.leaf} cx={LF.cx} cy={LF.cy} h={(LF.w * 1083) / 1537} />
			<FlowDots a={[st[0], st[1] + 4]} b={[st[0] - 40, st[1] + 170]} at={K2.evaporates} speed={spd} n={10} />
			<T x={96} y={760} w={260} text="vapour out through a stoma" size={36} color={WATER} at={K2.diffuses} />
			<line x1={xy[0]} x2={xy[0]} y1={xy[1] + 20} y2={890} stroke="#7a8f4e" strokeWidth={26} strokeLinecap="butt" opacity={0.5} />
			<path d={`M${xy[0] - 16},${896} L${xy[0] + 16},${880}`} stroke={INK_SOFT} strokeWidth={4} />
			<g opacity={prog(f, K2.xylem, 12)}>
				<line x1={xy[0]} x2={xy[0]} y1={xy[1] + 10} y2={884} stroke={WATER} strokeWidth={6} />
				{Array.from({length: 11}, (_, i) => { const y = 884 - ((i * 40 + flowOff) % 420); return y > xy[1] + 20 ? <path key={i} d={`M${xy[0] - 11},${y + 9} L${xy[0]},${y - 3} L${xy[0] + 11},${y + 9}`} fill="none" stroke={WATER} strokeWidth={4} strokeLinecap="round" /> : null; })}
			</g>
			<T x={xy[0] + 30} y={760} w={330} text="xylem: the water-carrying tubes" size={36} color={WATER} at={K2.xylem} />
			<g opacity={prog(f, K2.faster, 12)}>
				<DrawPath d={`M${st[0] - 30},${st[1] + 200} Q${(st[0] + xy[0]) / 2},${st[1] + 300} ${xy[0] - 30},${880}`} at={K2.faster} dur={18} color={AMBER_INK} width={4} dash="10 7" />
				<Sx x={(st[0] + xy[0]) / 2 - 20} y={st[1] + 300} text="loss pulls uptake" size={40} color={AMBER_INK} hand anchor="middle" at={K2.faster + 10} />
			</g>
			<ShootCrop x={sx} y={sy} k={sk} id="p02-s2-shoot" />
			<g opacity={0.3 + 0.7 * lossL}>
				<Arrow a={[leafTop[0], leafTop[1]]} b={[leafTop[0] + 150, leafTop[1] - 70]} color={GREYT} width={7} head={20} />
				<Sx x={1480} y={186} text="loss: what goes out" size={40} color={INK} hand at={ON} />
			</g>
			<g opacity={0.3 + 0.7 * inL}>
				<Arrow a={[base[0], base[1] + 150]} b={[base[0], base[1] + 6]} color={WATER} width={8} head={22} />
				<Sx x={1350} y={930} text="uptake: what goes in" size={40} color={WATER} hand at={ON} />
			</g>
			<g opacity={eq}>
				<rect x={1660} y={520} width={150} height={120} rx={18} fill={CARD} stroke={AMBER_INK} strokeWidth={4} />
				<Sx x={1735} y={598} text="≈" size={72} color={AMBER_INK} anchor="middle" weight={800} at={ON} />
				<Sx x={1735} y={688} text="close, not equal" size={30} color={AMBER_INK} anchor="middle" hand at={ON} />
			</g>
			<StepRail cur={0} />
			{void PlateB}
		</Svg>
	);
};

// ---------- 3. the potometer ----------
const K3 = K('potometer', {potometer: 'potometer', device: 'a device', cut: 'cut shoot', sealed: 'sealed into', joined: 'joined to', narrow: 'narrow glass', scale: 'a scale', draws: 'draws water', column: 'water column', bubble: 'air bubble', distance: 'The distance', rate: 'the rate', reservoir: 'A reservoir', push: 'push the', start: 'the start'});
const M3 = {cx: 800, cy: 575, w: 900};
export const ScenePotometer: React.FC = () => {
	const f = useCurrentFrame();
	const P = potPt(M3.cx, M3.cy, M3.w);
	const k = potK(M3.w);
	const mm = mmKeys([[K3.bubble, 2], [K3.rate, 24], [K3.push + 4, 24], [K3.push + 40, 0]]);
	const [bx, by] = P(POT.bung[0], POT.bung[1]);
	const [rx, ry] = P(POT.resTop[0], POT.resTop[1]);
	const [c0] = P(POT.ticks[0], 0), [c7, cy] = P(POT.ticks[7], POT.capY);
	const push = vis(f, K3.push - 6, K3.push + 50, 8);
	const pd = smooth(prog(f, K3.push, 14)) * 30;
	return (
		<Svg>
			<Title text="The potometer" />
			<rect x={300} y={952} width={1000} height={24} rx={10} fill="#e9e1d1" />
			<Pot cx={M3.cx} cy={M3.cy} w={M3.w} mm={mm} bubbleAt={K3.bubble} bubbleGlow={K3.bubble} nums={K3.scale} flow={{at: K3.column, out: K3.push - 4, speed: 1.3}} ends={{a: 2, b: 24, at: K3.rate, out: K3.push, label: 'distance in a set time'}} />
			<T x={850} y={248} w={420} text="potometer: measures how fast a shoot takes up water" size={40} at={K3.device} />
			<Ring cx={bx} cy={by} rx={70} ry={40} at={K3.sealed} out={K3.joined + 40} color={TEAL} />
			<Ring cx={(c0 + c7) / 2} cy={cy} rx={(c0 - c7) / 2 + 30} ry={40} at={K3.narrow} out={K3.column} color={TEAL} />
			<Ring cx={rx} cy={ry + 50 * k + 20} rx={44} ry={90} at={K3.reservoir} color={TEAL} />
			{push > 0.01 ? <g opacity={push} transform={`translate(0,${pd})`}>
				<path d={`M${rx},${ry - 110} L${rx},${ry - 40}`} stroke={INK} strokeWidth={8} strokeLinecap="round" />
				<path d={`M${rx - 16},${ry - 58} L${rx},${ry - 36} L${rx + 16},${ry - 58}`} fill="none" stroke={INK} strokeWidth={8} strokeLinecap="round" />
				<rect x={rx - 26} y={ry - 124} width={52} height={14} rx={6} fill={INK} />
			</g> : null}
			<ItemCard x={1300} y={160} w={524} title="the parts" size={38} items={[
				{t: 'shoot sealed in, under water', at: K3.sealed},
				{t: 'capillary tube with a scale', at: K3.narrow},
				{t: 'water column moves towards the shoot', at: K3.column},
				{t: 'bubble: carried along', at: K3.bubble, sub: 'let in by lifting the open end out of the water for a moment'},
				{t: 'rate = distance ÷ time', at: K3.rate, color: AMBER_INK, size: 42},
				{t: 'reservoir: resets the bubble', at: K3.reservoir},
			]} />
			<StepRail cur={1} />
			{void bubbleX}
		</Svg>
	);
};

// ---------- 4. airtight, settled ----------
const K4 = K('airtight-settled', {any: 'Any leak', airtight: 'airtight', cut: 'Cut the', so: 'so air', xylem: 'the xylem', fit: 'fit it', seal: 'Seal the', jelly: 'petroleum jelly', then: 'Then lift', lift: 'lift the', one: 'one small', enters: 'enters', far: 'far from', settle: 'settle for', five: 'five minutes', timing: 'before timing'});
const M4 = {cx: 1010, cy: 560, w: 740};
const MAG = {cx: 1240, cy: 330, r: 150, k: 1.35, u: 1508, v: 1330};
/** The far end, magnified (the plate at uniform scale): a lift-and-return glyph while the end is out of the water, and one
 *  coded bubble entering the bore. */
const FarEnd: React.FC<{at: number; back: number; o: number}> = ({at, back, o}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	const k = MAG.k, X = (u: number) => MAG.cx + (u - MAG.u) * k, Y = (v: number) => MAG.cy + (v - MAG.v) * k;
	const d = (smooth(prog(f, at, 20)) - smooth(prog(f, back, 20))) * 80 * k;
	const full = (dx: number, dy: number) => <g transform={`translate(${dx},${dy})`}><PlateB p={PL.pot} cx={X((PL.pot.box[0] + PL.pot.box[2]) / 2)} cy={Y((PL.pot.box[1] + PL.pot.box[3]) / 2)} w={(PL.pot.box[2] - PL.pot.box[0]) * k} /></g>;
	const bub = vis(f, at + 26, back + 30, 8);
	const bu = smooth(prog(f, at + 26, 40));
	const tipX = X(1508), tipY = Y(1380);
	return (
		<g opacity={o}>
			<defs>
				<clipPath id="p02-mag"><circle cx={MAG.cx} cy={MAG.cy} r={MAG.r} /></clipPath>
			</defs>
			<circle cx={MAG.cx} cy={MAG.cy} r={MAG.r + 6} fill={CARD} stroke={INK_SOFT} strokeWidth={4} />
			<g clipPath="url(#p02-mag)">
				{full(0, 0)}
				{bub > 0.01 ? <ellipse cx={tipX} cy={lerp(tipY + 10, Y(1250), bu)} rx={9} ry={14} fill="#f7fcff" stroke="#2f3d48" strokeWidth={2} opacity={bub} /> : null}
				{d > 1 ? <g opacity={Math.min(1, d / 40)}>
					<path d={`M${tipX + 54},${tipY + 30} L${tipX + 54},${tipY - 80}`} stroke={AMBER_INK} strokeWidth={5} strokeLinecap="round" />
					<path d={`M${tipX + 40},${tipY - 62} L${tipX + 54},${tipY - 82} L${tipX + 68},${tipY - 62}`} fill="none" stroke={AMBER_INK} strokeWidth={5} strokeLinecap="round" />
					<path d={`M${tipX + 40},${tipY + 12} L${tipX + 54},${tipY + 32} L${tipX + 68},${tipY + 12}`} fill="none" stroke={AMBER_INK} strokeWidth={5} strokeLinecap="round" />
				</g> : null}
			</g>
			<circle cx={MAG.cx} cy={MAG.cy} r={MAG.r} fill="none" stroke={INK_SOFT} strokeWidth={4} />
		</g>
	);
};
export const SceneAirtight: React.FC = () => {
	const f = useCurrentFrame();
	const P = potPt(M4.cx, M4.cy, M4.w);
	const [ax, ay] = P(POT.arm[0], POT.arm[1]);
	const [bx, by] = P(POT.bung[0], POT.bung[1]);
	const [fx, fy] = P(POT.farEnd[0], POT.farEnd[1]);
	const [lx, ly] = P(POT.leaves[0], POT.leaves[1]);
	const mm = mmKeys([[K4.enters + 20, -3], [K4.far + 20, 0]]);
	const magO = vis(f, K4.then - 4, K4.settle + 30, 14);
	const sk = 0.45, ssx = 455 - (690 - 420) * sk, ssy = 680 - (892 - 450) * sk;
	const clockT = smooth(prog(f, K4.settle, 50));
	return (
		<Svg>
			<Title text="Set up: airtight, then settled" />
			<PicH p={PL.tile} cx={300} cy={320} h={280} />
			<Pic p={PL.scal} cx={300} cy={306} w={330} />
			<WaterTint x={330} y={628} w={250} h={78} />
			<ShootCrop x={ssx} y={ssy} k={sk} id="p02-s4-shoot" tube={false} o={1 - prog(f, K4.fit, 16)} />
			<DrawPath d={`M${440},${680} L${472},${662}`} at={K4.cut} dur={10} color={RED} width={5} />
			<Sx x={455} y={748} text="cut under water" size={34} color={INK} hand anchor="middle" at={K4.cut} />
			<g opacity={vis(f, K4.so, K4.fit + 20, 12)} transform="translate(0,60)">
				<rect x={110} y={706} width={480} height={170} rx={16} fill="#f1eee7" stroke={GREYT} strokeWidth={2.5} strokeDasharray="8 6" />
				<rect x={150} y={736} width={40} height={120} rx={8} fill="#b9c48f" stroke={INK_SOFT} strokeWidth={2} />
				<circle cx={170} cy={790} r={14} fill={CARD} stroke={INK_SOFT} strokeWidth={2.5} />
				<path d={`M${170},${850} L${170},${812}`} stroke={WATER} strokeWidth={5} />
				<path d={`M${158},${776} l24,24 M${182},${776} l-24,24`} stroke={RED} strokeWidth={4} />
				<T x={220} y={770} w={360} text="cut in air: air in the xylem blocks water" size={32} color={INK} />
			</g>
			<rect x={600} y={880} width={820} height={22} rx={10} fill="#e9e1d1" />
			<Pot cx={M4.cx} cy={M4.cy} w={M4.w} mm={mm} bubbleAt={K4.far} bubbleGlow={K4.far} seals={K4.jelly} nums={ON} />
			<g opacity={vis(f, K4.any, K4.airtight + 30, 10)}>
				<Chip x={ax - 30} y={ay + 34} text="leak" size={32} color={GREYT} ink={INK} />
				<DrawPath d={`M${ax - 36},${ay + 92} L${ax + 70},${ay + 26}`} at={K4.airtight} dur={10} color={RED} width={6} />
			</g>
			<Ring cx={bx} cy={by} rx={64} ry={36} at={K4.fit} out={K4.seal} color={TEAL} />
			<GTag x={bx + 70} y={by - 60} text="fitted under water" size={30} at={K4.fit} out={K4.seal + 30} />
			<GTag x={bx + 70} y={by - 60} text="sealed" size={32} at={K4.jelly + 10} />
			<g opacity={vis(f, K4.seal, K4.then, 14)}>
				{[[-60, -30], [40, -70], [90, 10]].map(([dx, dy], i) => <ellipse key={i} cx={lx + dx} cy={ly + dy} rx={8} ry={11} fill="#dff0fa" stroke="#6aa6c8" strokeWidth={2} />)}
			</g>
			<GTag x={1240} y={492} text="end out of the water, then back in" size={28} anchor="middle" at={K4.lift} out={K4.settle} />
			<GTag x={600} y={176} text="blot leaves dry: water on leaves changes the rate" size={28} at={K4.seal} out={K4.then} />
			<FarEnd at={K4.lift + 4} back={K4.far} o={magO} />
			{magO > 0.01 ? <g opacity={magO}><DrawPath d={`M${fx},${fy - 30} L${MAG.cx + 40},${MAG.cy + MAG.r}`} at={K4.then} dur={12} color={INK_SOFT} width={3} dash="8 6" /></g> : null}
			<g opacity={prog(f, K4.settle, 12)}>
				<circle cx={1250} cy={260} r={56} fill={CARD} stroke={INK} strokeWidth={4} />
				{clockT > 0.005 ? <path d={`M1250,214 A46,46 0 ${clockT > 0.5 ? 1 : 0} 1 ${1250 + 46 * Math.sin(clockT * 2 * Math.PI * 0.999)},${260 - 46 * Math.cos(clockT * 2 * Math.PI * 0.999)}`} fill="none" stroke={AMBER} strokeWidth={10} strokeLinecap="round" /> : null}
				<Sx x={1250} y={272} text="5 min" size={30} color={INK} anchor="middle" weight={800} at={ON} />
				<Sx x={1250} y={356} text="steady rate first" size={32} color={INK} anchor="middle" hand at={ON} />
			</g>
			<ItemCard x={1410} y={160} w={414} title="set up" size={36} gap={14} items={[
				{t: 'cut under water', at: K4.cut},
				{t: 'fit under water', at: K4.fit},
				{t: 'seal joints with petroleum jelly', at: K4.seal},
				{t: 'blot leaves dry', at: K4.seal + 30},
				{t: 'one bubble, at the far end', at: K4.one, sub: 'away from the shoot'},
				{t: 'settle about 5 min', at: K4.settle},
			]} />
			<StepRail cur={2} />
			{void scribbleEllipse}{void pulse}{void BLUE}{void EDGE}
		</Svg>
	);
};

// ---------- 5. aim and variables ----------
const K5 = K('aim-variables', {aim: 'The aim', find: 'find out', iv: 'independent variable', air: ['air movement', 2], fanoff: 'fan off', dv: 'dependent variable', rate: 'the rate', how: 'how far', keep: 'Keep everything', shoot: 'same shoot', leaf: 'leaf area', room: 'same room', temp: 'temperature and', fanD: 'fan distance'});
export const BENCH = {fan: {cx: 220, cy: 420, h: 360}, pot: {cx: 720, cy: 560, w: 720}};
export const Bench: React.FC<{fanOn?: number; fanOff?: number; fanGrey?: number; mm?: (f: number) => number; bubbleAt?: number; flow?: {at: number; out?: number; speed?: number}}> = ({fanOn, fanOff, fanGrey, mm, bubbleAt = ON, flow}) => {
	const P = potPt(BENCH.pot.cx, BENCH.pot.cy, BENCH.pot.w);
	const lv = P(POT.leaves[0], POT.leaves[1]);
	return (
		<g>
			<rect x={96} y={884} width={1000} height={22} rx={10} fill="#e9e1d1" />
			<Fan cx={BENCH.fan.cx} cy={BENCH.fan.cy} h={BENCH.fan.h} on={fanOn} off={fanOff} grey={fanGrey} to={[lv[0] - 40, lv[1] - 30]} />
			<Pot cx={BENCH.pot.cx} cy={BENCH.pot.cy} w={BENCH.pot.w} mm={mm ?? (() => 20)} bubbleAt={bubbleAt} nums={ON} flow={flow} />
		</g>
	);
};
export const SceneAim: React.FC = () => {
	const f = useCurrentFrame();
	const row = (y: number, h: number, head: string, color: string, at: number) => {
		const L = prog(f, at, 12);
		return <g><rect x={1110} y={y} width={714} height={h} rx={16} fill={CARD} stroke={L > 0.5 ? color : EDGE} strokeWidth={L > 0.5 ? 4 : 3} strokeDasharray={L > 0.5 ? undefined : '10 8'} /><Sx x={1132} y={y + 44} text={head} size={36} color={L > 0.5 ? color : GREYT} hand at={ON} /></g>;
	};
	return (
		<Svg>
			<Title text="Plan: aim and variables" />
			<Bench mm={() => 20} bubbleAt={ON} />
			<g opacity={prog(f, K5.air, 12)}><DrawPath d={`M${1110},${400} Q${700},${150} ${330},${300}`} at={K5.air} dur={20} color={VIOLET} width={4} dash="10 8" /></g>
			<rect x={1110} y={150} width={714} height={176} rx={16} fill="#fffaf0" stroke={BLUE} strokeWidth={3} />
			<Sx x={1132} y={196} text="Aim" size={36} color={BLUE} hand at={ON} />
			<T x={1132} y={244} w={670} text="how does air movement affect the rate of water uptake by a leafy shoot?" size={38} at={K5.find} />
			{row(338, 120, 'independent', VIOLET, K5.iv)}
			<T x={1132} y={432} w={670} text="air movement (fan off / fan on)" size={40} color={VIOLET} at={K5.air} />
			{row(470, 120, 'dependent', AMBER_INK, K5.dv)}
			<T x={1132} y={564} w={600} text="rate of water uptake (mm per minute)" size={40} color={AMBER_INK} at={K5.rate} />
			<g opacity={prog(f, K5.rate, 12)}><ellipse cx={1780} cy={520} rx={22} ry={12} fill="#f7fcff" stroke="#2f3d48" strokeWidth={2.5} /><path d={`M1771,496 L1789,496 L1780,508 Z`} fill={AMBER} /></g>
			{row(602, 380, 'controlled', GREENC, K5.keep)}
			<ItemCard x={1126} y={664} w={684} size={36} gap={8} faint={0.28} h={306} items={[
				{t: 'same shoot', at: K5.shoot},
				{t: 'same room, temperature and light', at: K5.room},
				{t: 'same fan distance (for example 50 cm)', at: K5.fanD},
				{t: 'same timing (5 min) and the same edge of the bubble', at: K5.fanD + 30},
			]} />
			<GTag x={1360} y={616} text="same species, leaves and stem" size={28} at={K5.leaf} />
			<StepRail cur={3} />
			{void TEAL}
		</Svg>
	);
};

// ---------- 6. the control and repeats ----------
const K6 = K('control-repeats', {still: 'Still air', control: 'control,', comparison: 'the comparison', time: 'Time the', five: 'five minutes', push: 'push it', repeat: 'repeat three', each: 'each condition', alternate: 'Alternate', settle: 'settle after', sw: 'each switch', before: 'before timing'});
export const SceneControl: React.FC = () => {
	const f = useCurrentFrame();
	const mm = mmKeys([[0, 20], [K6.push, 20], [K6.push + 30, 0]]);
	const alt = smooth(prog(f, K6.alternate, 30));
	const slotsLit = prog(f, K6.repeat, 12);
	const slot = (i: number): [number, number] => {
		const fan = i >= 3, j = i % 3;
		const a: [number, number] = [1290 + j * 150, fan ? 640 : 560];
		const order = fan ? 2 * j + 1 : 2 * j;
		const b: [number, number] = [1130 + order * 116, 620];
		return [lerp(a[0], b[0], alt), lerp(a[1], b[1], alt)];
	};
	const pp = potPt(BENCH.pot.cx, BENCH.pot.cy, BENCH.pot.w);
	const [rx, ry] = pp(POT.resTop[0], POT.resTop[1]);
	const pv = vis(f, K6.push - 4, K6.push + 40, 8);
	return (
		<Svg>
			<Title text="The control, and repeats" />
			<Bench fanOn={K6.settle} fanGrey={K6.control} mm={mm} />
			<Watch cx={930} cy={330} h={210} at={K6.five} dur={40} label="5 min each" />
			{pv > 0.01 ? <g opacity={pv} transform={`translate(0,${smooth(prog(f, K6.push, 12)) * 24})`}><path d={`M${rx},${ry - 100} L${rx},${ry - 36}`} stroke={INK} strokeWidth={7} strokeLinecap="round" /><path d={`M${rx - 14},${ry - 52} L${rx},${ry - 32} L${rx + 14},${ry - 52}`} fill="none" stroke={INK} strokeWidth={7} strokeLinecap="round" /></g> : null}
			<GTag x={560} y={150} text="push it back: reset between readings" size={30} at={K6.push} out={K6.alternate} />
			<g opacity={0.6}>
				<Sx x={1110} y={190} text="independent: air movement" size={32} color={VIOLET} hand at={ON} />
				<Sx x={1110} y={234} text="dependent: rate (mm per minute)" size={32} color={AMBER_INK} hand at={ON} />
				<Sx x={1110} y={278} text="controlled: same shoot, room, fan distance" size={32} color={GREENC} hand at={ON} />
			</g>
			<rect x={1100} y={308} width={724} height={84} rx={16} fill={CARD} stroke={prog(f, K6.control, 12) > 0.5 ? GREENC : EDGE} strokeWidth={4} />
			<Sx x={1124} y={364} text="control: still air (fan off)" size={44} color={prog(f, K6.control, 12) > 0.5 ? GREENC : GREYT} hand at={ON} />
			<Sx x={1110} y={446} text="control: the comparison condition" size={36} color={INK} hand at={K6.comparison} />
			<g opacity={(0.4 + 0.6 * slotsLit) * (1 - alt)}>
				<Sx x={1110} y={556} text="fan off" size={32} color={INK} hand at={ON} />
				<Sx x={1110} y={636} text="fan on" size={32} color={INK} hand at={ON} />
			</g>
			{Array.from({length: 6}, (_, i) => { const [x, y] = slot(i); const fan = i >= 3; return <g key={i} opacity={0.4 + 0.6 * slotsLit}><rect x={x} y={y - 46} width={100} height={64} rx={12} fill={CARD} stroke={fan ? VIOLET : GREENC} strokeWidth={3} strokeDasharray="8 6" /><Sx x={x + 50} y={y - 4} text={`${(i % 3) + 1}`} size={32} color={GREYT} anchor="middle" weight={700} at={ON} />{alt > 0.5 ? <Sx x={x + 50} y={y + 50} text={fan ? 'fan' : 'still'} size={30} color={fan ? VIOLET : GREENC} anchor="middle" hand at={ON} /> : null}</g>; })}
			<Sx x={1110} y={494} text="three timed readings each" size={36} color={INK} hand at={K6.repeat} />
			<g opacity={prog(f, K6.alternate, 12)}><Sx x={1580} y={494} text="alternate the order" size={32} color={AMBER_INK} hand at={ON} /></g>
			<Chip x={1110} y={720} text="settle a few minutes after each switch" size={36} color={AMBER_INK} ink={INK} at={K6.settle} />
			<GTag x={1110} y={806} text="check temperature and light each trial" size={28} at={K6.before} />
			<GTag x={1110} y={856} text="repeat on more shoots before generalising" size={28} at={K6.before + 10} />
			<StepRail cur={3} />
		</Svg>
	);
};
