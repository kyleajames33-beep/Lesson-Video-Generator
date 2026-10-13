import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, DrawPath, Enter, FONT_DISPLAY, FONT_HAND, HandText, INK, INK_SOFT, Mark, prog} from '../../kit';
import {cues} from '../../cues';
import {Arrow, Ball, Bracket, Crumple, Fade, FWD, GasTube, Overlay, Pill, ProfileAxes, ProfileCurve, RxnChip, Ring, SvgText, TEAL, mkP, pillW, profPoint, smooth} from './parts';
import {ColourStrip} from '../chem-m5-c03/parts';
import {H2_INK, HI_INK, HIC, I2C, I2_DEEP, I2_INK, METAL, METAL_DARK, H2C, Heading, kf, sc, tubeColour} from './common';

// ---------- 1. Hook ----------
const K1 = cues(sc('hook'), {sealed: 'sealed tubes', temp: 'same temperature', pinch: 'pinch of a metal', catalyst: ['metal catalyst', 1], right: 'on the right', defn: 'A catalyst is', speeds: 'speeds a reaction up', used: 'without being used up', watch: 'Watch the purple', fast: 'fades fast', slow: 'in the other slowly', wait: 'wait long enough', shade: 'same pale shade', ends: 'not where it ends', how: 'How can it'});
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const tB = kf(f, [[K1.watch + 36, 0], [K1.fast + 14, 1]]);
	const tA = kf(f, [[K1.watch + 36, 0], [K1.shade + 18, 1]]);
	const i = (t: number) => 9 - 7 * t;
	const cnt = (t: number) => ({h: i(t), i: i(t), hi: 14 * t});
	const push = 1 + 0.035 * (f / 1000);
	const drop = kf(f, [[K1.pinch, 110], [K1.right + 6, 690]], false);
	const shadeEnd = tubeColour(2);
	const A_X = 245, B_X = 715, TY = 250, TW = 170, TH = 520;
	return (
		<>
			<Heading text="What does a catalyst change?" at={4} />
			<Overlay>
				<Fade at={K1.sealed}><Pill x={96} y={186} w={pillW('same start, same temperature, sealed', 34) + 20} text="same start, same temperature, sealed" at={K1.sealed} color={TEAL} size={34} h={58} /></Fade>
				<g transform={`translate(${(A_X + B_X + TW) / 2},${TY + TH / 2}) scale(${push}) translate(${-(A_X + B_X + TW) / 2},${-(TY + TH / 2)})`}>
					<GasTube x={A_X} y={TY} w={TW} h={TH} counts={cnt(tA)} seed={5} reveal={prog(f, 6, 18)} />
					<GasTube x={B_X} y={TY} w={TW} h={TH} counts={cnt(tB)} seed={9} heavy reveal={prog(f, 6, 18)} />
					<Crumple x={B_X + TW / 2} y={drop} s={66} rot={(drop - 110) * 0.2} opacity={f >= K1.pinch ? 1 : 0} />
				</g>
				<SvgText x={A_X + TW / 2} y={TY + TH + 64} text="no catalyst" size={46} color={INK_SOFT} anchor="middle" at={8} />
				<SvgText x={B_X + TW / 2} y={TY + TH + 64} text="with a metal catalyst" size={46} color={METAL_DARK} anchor="middle" at={K1.catalyst} />
				<Ring cx={B_X + TW / 2} cy={TY + TH - 56} rx={70} ry={54} at={K1.right + 8} color={METAL_DARK} seed={4} out={K1.defn} />
				<Thermo2 x={(A_X + TW + B_X) / 2} y={440} at={K1.temp} />
				<Ring cx={A_X + TW / 2} cy={TY + TH / 2 + 16} rx={125} ry={268} at={K1.watch} out={K1.watch + 70} color={I2_INK} seed={6} />
				<Ring cx={B_X + TW / 2} cy={TY + TH / 2 + 16} rx={125} ry={268} at={K1.watch + 14} out={K1.watch + 70} color={I2_INK} seed={7} />
				{/* colour strips and the shared pale shade */}
				<ColourStrip x={1380} y={650} w={400} from={I2_DEEP} to={shadeEnd} t={tA} at={K1.watch} label="no catalyst" />
				<ColourStrip x={1380} y={730} w={400} from={I2_DEEP} to={shadeEnd} t={tB} at={K1.watch} label="catalyst" />
				<Fade at={K1.shade}>
					<path d="M1780,628 L1780,800" stroke={INK_SOFT} strokeWidth={4} strokeDasharray="10 8" />
					<SvgText x={1780} y={846} text="same pale shade" size={44} color={I2_INK} anchor="end" at={K1.shade} />
				</Fade>
				<Ring cx={1780} cy={720} rx={34} ry={92} at={K1.ends} color={TEAL} seed={8} />
			</Overlay>
			<RxnChip x={1010} y={216} at={K1.speeds - 6} left={[{t: 'H_2', color: H2_INK}, {t: '+'}, {t: 'I_2', color: I2_INK}]} right={[{t: '2HI', color: HI_INK}]} size={44} fwdLit={K1.speeds} revLit={K1.speeds} words={false} fwdTag={{text: 'forward makes HI', at: K1.speeds + 6, color: FWD}} revTag={{text: 'reverse splits HI', at: K1.speeds + 12, color: AMBER_INK}} />
			<Enter at={K1.defn} style={{position: 'absolute', left: 1010, top: 470, width: 780}}>
				<div style={{background: '#fffdf8', border: `3px solid ${METAL_DARK}`, borderRadius: 18, padding: '12px 24px 14px', boxShadow: '0 12px 28px rgba(60,45,20,0.10)'}}>
					<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 56, color: METAL_DARK, lineHeight: 1}}>catalyst</div>
					<div style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 34, color: INK, lineHeight: 1.2}}>speeds a reaction up without being used up</div>
				</div>
			</Enter>
			<Enter at={K1.how} style={{position: 'absolute', left: 96, top: 900}}>
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 58, color: TEAL}}>How can it change the speed, but not the end?</div>
			</Enter>
		</>
	);
};
const Thermo2: React.FC<{x: number; y: number; at: number}> = ({x, y, at}) => (
	<Fade at={at}>
		<rect x={x - 12} y={y - 74} width={24} height={104} rx={12} fill="#fffdf8" stroke={INK} strokeWidth={5} />
		<circle cx={x} cy={y + 44} r={22} fill="#c4582f" stroke={INK} strokeWidth={5} />
		<rect x={x - 6} y={y - 20} width={12} height={62} rx={6} fill="#c4582f" />
		<SvgText x={x} y={y + 112} text="same" size={44} color="#c4582f" anchor="middle" at={at} />
		<SvgText x={x} y={y + 152} text="temperature" size={44} color="#c4582f" anchor="middle" at={at} />
	</Fade>
);

// ---------- 2a. The ridge ----------
const P1 = mkP(170, 210, 900, 560);
const K2 = cues(sc('ridge'), {bounce: 'bounce apart', only: 'Only collisions', enough: 'with enough energy', minimum: 'minimum energy', ae: 'activation energy', ridge: 'a ridge', valleys: 'two valleys', height: 'height is energy', each: 'each valley', hydrogen: 'Hydrogen and iodine', hiOther: 'iodide in the other', top: 'top of the ridge', reach: 'must reach', climb: 'has to climb', back: 'to go back'});
export const SceneRidge: React.FC = () => {
	const f = useCurrentFrame();
	const g = P1;
	const xb1 = g.x0 + 0.09 * g.w, xb2 = g.x0 + 0.91 * g.w;
	// ball: sits in the left valley, falls short, goes over, then (as HI) goes back over the same ridge
	const s = f < K2.reach ? 0 : f < K2.reach + 36 ? kf(f, [[K2.reach, 0], [K2.reach + 18, 0.6], [K2.reach + 36, 0]]) : f < K2.climb ? kf(f, [[K2.reach + 36, 0], [K2.reach + 56, 1], [K2.reach + 78, 2]], false) : kf(f, [[K2.climb, 2], [K2.back + 20, 1.12]], false);
	const goingBack = f >= K2.climb;
	const ballOn = f >= K2.hydrogen;
	const short = profPoint(g, g.yT, 0.6);
	// collision strip (molecules bump)
	const mid = 1525;
	const a = kf(f, [[8, 1290], [38, mid - 31], [68, 1290], [K2.enough - 6, 1290], [K2.enough + 8, mid - 31]]);
	const b = kf(f, [[8, 1760], [38, mid + 31], [68, 1760], [K2.enough - 6, 1760], [K2.enough + 8, mid + 31]]);
	const hit = f >= K2.enough + 8;
	const flash = prog(f, K2.enough + 8, 6) * (1 - prog(f, K2.enough + 14, 16));
	return (
		<>
			<Heading text="Activation energy" at={4} />
			<Overlay>
				{/* collision strip card */}
				<rect x={1230} y={196} width={590} height={250} rx={22} fill="#fffdf8" stroke="rgba(60,45,20,0.12)" strokeWidth={2} />
				<SvgText x={1262} y={242} text="two molecules collide" size={40} color={INK_SOFT} at={6} />
				{!hit ? <>
					<circle cx={a} cy={340} r={31} fill="#bcd6ee" stroke={INK} strokeWidth={4} />
					<circle cx={b} cy={340} r={31} fill={I2C} stroke={INK} strokeWidth={4} />
				</> : <>
					<circle cx={mid - 20} cy={340} r={31} fill={HIC} stroke={INK} strokeWidth={4} />
					<circle cx={mid + 22} cy={340} r={28} fill={HIC} stroke={INK} strokeWidth={4} />
					<circle cx={mid} cy={340} r={34 + 70 * (1 - flash)} fill="none" stroke={AMBER} strokeWidth={7} opacity={flash} />
				</>}
				<Fade at={K2.bounce} out={K2.only + 6}><SvgText x={mid} y={410} text="bounce" size={46} color={INK_SOFT} anchor="middle" at={K2.bounce} /></Fade>
				<Fade at={K2.enough + 8}><SvgText x={mid} y={418} text="enough energy: reacts" size={42} color={TEAL} anchor="middle" at={K2.enough + 8} /></Fade>
				{/* profile */}
				<ProfileAxes g={g} at={K2.minimum} />
				<ProfileCurve g={g} peak={g.yT} at={K2.minimum} dur={46} />
				<path d={`M${g.x0},${g.yL} L${g.x0 + 0.13 * g.w},${g.yL} M${g.x0 + 0.87 * g.w},${g.yR} L${g.x0 + g.w},${g.yR}`} stroke={INK} strokeWidth={9} strokeLinecap="round" opacity={prog(f, K2.minimum + 30, 12)} />
				<Fade at={K2.top}><path d={`M${xb1},${g.yT} L${xb2},${g.yT}`} stroke={FWD} strokeWidth={3.5} strokeDasharray="10 9" /></Fade>
				<Bracket x={xb1} y1={g.yL} y2={g.yT} color={FWD} at={K2.ae} side="right" />
				<SvgText x={xb1 + 20} y={g.yT + 56} text="activation" size={46} color={FWD} at={K2.ae + 10} />
				<SvgText x={xb1 + 20} y={g.yT + 102} text="energy" size={46} color={FWD} at={K2.ae + 14} />
				<Ring cx={g.x0 + 0.5 * g.w} cy={g.yT} rx={130} ry={50} at={K2.ridge} out={K2.ridge + 50} color={INK} seed={3} />
				{/* the height is energy */}
				<Arrow x1={g.x0 - 8} y1={g.yL + 20} x2={g.x0 - 8} y2={g.yT - 6} at={K2.height} color={INK_SOFT} width={5} dur={22} />
				<SvgText x={g.x0 + 14} y={g.yT - 18} text="more energy" size={38} color={INK_SOFT} at={K2.height + 14} />
				<Ring cx={g.x0 + 0.075 * g.w} cy={g.yL - 6} rx={100} ry={34} at={K2.each} out={K2.each + 70} color={TEAL} seed={5} />
				<Ring cx={g.x0 + 0.935 * g.w} cy={g.yR - 6} rx={100} ry={34} at={K2.each + 40} out={K2.each + 100} color={TEAL} seed={6} />
				<SvgText x={g.x0 + 0.075 * g.w} y={g.yL + 56} text="H_2 + I_2" size={46} color={H2_INK} anchor="middle" at={K2.hydrogen} />
				<SvgText x={g.x0 + 0.935 * g.w} y={g.yR + 56} text="2HI" size={46} color={HI_INK} anchor="middle" at={K2.hiOther} />
				<SvgText x={g.x0 + 0.5 * g.w} y={g.yT - 22} text="top of the ridge" size={42} color={INK} anchor="middle" at={K2.top} />
				{/* ball */}
				<Ball g={g} peak={g.yT} s={s} color={goingBack ? AMBER : '#bcd6ee'} opacity={ballOn ? 1 : 0} />
				<Fade at={K2.reach} out={K2.reach + 40}><SvgText x={short[0] - 34} y={short[1] - 52} text="not enough: falls back" size={40} color={INK_SOFT} anchor="end" at={K2.reach} /></Fade>
				<Fade at={K2.reach + 46} out={K2.climb}><SvgText x={g.x0 + 0.26 * g.w} y={g.yT + 90} text="enough energy" size={44} color={FWD} anchor="end" at={K2.reach + 46} /></Fade>
				<Bracket x={xb2} y1={g.yR} y2={g.yT} color={AMBER_INK} at={K2.climb} side="left" />
				<SvgText x={xb2 + 18} y={(g.yR + g.yT) / 2 - 10} text="same climb" size={42} color={AMBER_INK} at={K2.climb + 12} />
				<SvgText x={xb2 + 18} y={(g.yR + g.yT) / 2 + 34} text="to go back" size={42} color={AMBER_INK} at={K2.back} />
			</Overlay>
			<Enter at={K2.ae} style={{position: 'absolute', left: 1230, top: 500, width: 590}}>
				<div style={{background: '#fffdf8', border: `3px solid ${FWD}`, borderRadius: 18, padding: '12px 24px 16px', boxShadow: '0 12px 28px rgba(60,45,20,0.10)'}}>
					<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 62, color: FWD, lineHeight: 1}}>activation energy</div>
					<div style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 36, color: INK, lineHeight: 1.2, marginTop: 6}}>the minimum energy a collision needs to react</div>
				</div>
			</Enter>
		</>
	);
};

// ---------- 2b. The alternative pathway ----------
const K3 = cues(sc('route'), {path: 'alternative pathway', route: 'different route', land: 'land on the metal', split: 'split into atoms', stick: 'stick to the surface', pair: 'pair up', leave: 'and leave', unch: 'ends up unchanged', ready: 'ready for the next'});
const SURF = 760, STEP = 84;
const Cluster: React.FC<{cx: number; off: number}> = ({cx, off}) => {
	const f = useCurrentFrame();
	const e = (a: number, b: number) => smooth((f - a) / (b - a));
	const tl = K3.land + off, ts = K3.split + off, tp = K3.pair + off, tv = K3.leave + off;
	const drop = e(tl - 70, tl + 10), sp = e(ts, ts + 24), pr = e(tp, tp + 36), lv = e(tv, tv + 70);
	const fade = 1 - e(tv + 44, tv + 74);
	const rH = 18, rI = 27, yH = SURF - 34 - rH, yI = SURF - 34 - rI;
	const yIn = (y: number) => y - 380 * (1 - drop);
	// H atoms
	const h1x = cx - 84 - (rH + 24 * sp);
	const h2x0 = cx - 84 + (rH + 24 * sp);
	const h2x = h2x0 + (cx - 3 - (cx - 42)) * pr;   // inner H moves toward the inner I
	const h1xs = h1x + (cx + 81 - (cx - 126)) * pr;  // outer H hops over to the outer I
	const h1y = yH - 120 * Math.sin(Math.PI * pr);
	const i1x = cx + 84 - (rI + 15 * sp), i2x = cx + 84 + (rI + 15 * sp);
	const lift = -330 * lv;
	const alpha = f < tl - 70 ? 0 : fade;
	const bond = pr > 0.95;
	return (
		<g opacity={alpha}>
			<g transform={`translate(0,${lift})`}>
				<circle cx={h1xs} cy={yIn(h1y)} r={rH} fill={H2C} stroke={H2_INK} strokeWidth={3} />
				<circle cx={h2x} cy={yIn(yH)} r={rH} fill={H2C} stroke={H2_INK} strokeWidth={3} />
				<circle cx={i1x} cy={yIn(yI)} r={rI} fill={I2C} stroke={INK} strokeWidth={3} />
				<circle cx={i2x} cy={yIn(yI)} r={rI} fill={I2C} stroke={INK} strokeWidth={3} />
				{bond ? <><path d={`M${h2x},${yH} L${i1x},${yI}`} stroke={INK} strokeWidth={4} /><path d={`M${h1xs},${yH} L${i2x},${yI}`} stroke={INK} strokeWidth={4} /></> : null}
			</g>
			{drop > 0.02 && drop < 0.98 ? null : null}
		</g>
	);
};
export const SceneRoute: React.FC = () => {
	const f = useCurrentFrame();
	const atoms = Array.from({length: 21}, (_, k) => 140 + k * STEP);
	const stage = (txt: string, at: number, out?: number) => <Fade at={at} out={out}><SvgText x={960} y={900} text={txt} size={58} color={TEAL} anchor="middle" at={at} /></Fade>;
	return (
		<>
			<div style={{position: 'absolute', left: 96, top: 92, opacity: prog(f, K3.path, 8)}}><HandText text="alternative pathway" at={K3.path} size={88} cps={26} color={METAL_DARK} /></div>
			<Enter at={K3.route} style={{position: 'absolute', left: 100, top: 200}}>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 38, color: INK}}>a different route from reactants to products</div>
			</Enter>
			<Overlay>
				{/* metal surface */}
				<Fade at={4}>
					{atoms.map((x, k) => <circle key={'a' + k} cx={x} cy={SURF} r={34} fill={METAL} stroke={METAL_DARK} strokeWidth={4} />)}
					{atoms.map((x, k) => <circle key={'b' + k} cx={x + STEP / 2} cy={SURF + 62} r={34} fill={METAL} stroke={METAL_DARK} strokeWidth={4} />)}
					<SvgText x={140} y={SURF + 140} text="the metal catalyst" size={50} color={METAL_DARK} at={4} />
				</Fade>
				<Cluster cx={602} off={0} />
				<Cluster cx={1442} off={14} />
				<Fade at={K3.land - 40} out={K3.split}>
					<SvgText x={518} y={430} text="H_2" size={52} color={H2_INK} anchor="middle" at={K3.land - 40} />
					<SvgText x={686} y={430} text="I_2" size={52} color={I2_INK} anchor="middle" at={K3.land - 40} />
				</Fade>
				<Ring cx={602} cy={SURF - 60} rx={230} ry={70} at={K3.split + 4} out={K3.split + 60} color={TEAL} seed={4} />
				<Ring cx={1442} cy={SURF - 60} rx={230} ry={70} at={K3.leave} out={K3.leave + 50} color={TEAL} seed={5} />
				{stage('1  they land on the metal', K3.land, K3.split - 4)}
				{stage('2  they split into single atoms', K3.split, K3.pair - 4)}
				{stage('3  the atoms pair up as HI', K3.pair, K3.leave - 4)}
				{stage('4  the HI molecules leave', K3.leave, K3.unch - 4)}
				{stage('5  the metal is unchanged', K3.unch)}
				<Fade at={K3.unch}>
					<Mark x={1290} y={560} at={K3.unch} size={60} />
					<SvgText x={1340} y={578} text="same metal" size={56} color={METAL_DARK} at={K3.unch + 8} />
					<SvgText x={1340} y={628} text="ready for the next molecules" size={38} color={INK_SOFT} at={K3.ready} />
				</Fade>
			</Overlay>
		</>
	);
};
void DrawPath; void INK; void METAL; void FONT_HAND; void Arrow;
