// C1 scenes 4 to 11: static, open versus closed, worked classification, attempt, feedback, memory, notes.
import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, Callout, Countdown, DrawPath, Enter, FONT_DISPLAY, FONT_HAND, HandText, INK, INK_SOFT, Mark, Plate, prog, rng, scribbleEllipse} from '../../kit';
import {cues} from '../../cues';
import {Body, C_DYNAMIC, C_NEITHER, C_STATIC, Counters, ESC, EqChip, FLOW_DONE, Fade, Flowchart, Gauge, LensCfg, MoleculeLens, Overlay, ROUTES, SvgText, TEAL, Trace} from './parts';
import {Bottle, Heading, bottleGeo, sc} from './common';
import * as A from './assets';

const smooth = (u: number) => (u <= 0 ? 0 : u >= 1 ? 1 : u * u * (3 - 2 * u));

/** A painted vignette scaled to a width. */
const Vignette: React.FC<{src: string; nat: [number, number]; crop: [number, number, number, number]; x: number; y: number; w: number; opacity?: number}> = ({src, nat, crop, x, y, w, opacity = 1}) => (
	<Plate src={src} natural={nat} crop={crop} width={w} style={{left: x, top: y, opacity}} />
);
const vh = (crop: [number, number, number, number], w: number) => (w * crop[3]) / crop[2];

// ---------- 4. Static: the campfire ----------
const K4 = cues(sc('static'), {campfire: 'a campfire', burns: 'wood burns', ash: 'cold ash', finished: 'has finished', backwards: "can't run backwards", either: 'either direction', zero: 'are zero', stat: 'static equilibrium', slowly: 'running slowly', stopped: 'completely stopped'});
export const SceneStatic: React.FC = () => {
	const f = useCurrentFrame();
	const FW = 700, FX = 110, FY = 270;
	const toAsh = prog(f, K4.ash, 34);
	const fwd = f < K4.burns ? 0 : interpolate(f, [K4.burns, K4.burns + 30, K4.ash, K4.zero, K4.zero + 24], [0, 0.82, 0.55, 0.2, 0], {extrapolateRight: 'clamp'});
	return (
		<>
			<Heading text="Now compare a campfire" />
			<Vignette src={A.CAMP_FIRE} nat={A.CAMP_NAT} crop={A.CAMP_CROP} x={FX} y={FY} w={FW} opacity={(1 - toAsh) * prog(f, 0, 16)} />
			<Vignette src={A.CAMP_ASH} nat={A.CAMP_NAT} crop={A.CAMP_CROP} x={FX} y={FY} w={FW} opacity={toAsh} />
			<Overlay>
				<SvgText x={FX + FW / 2} y={FY + vh(A.CAMP_CROP, FW) + 40} text="heat, light and gases leave" size={44} color={AMBER_INK} anchor="middle" at={K4.burns + 10} opacity={1 - toAsh} />
				<Fade at={K4.ash}>
					<DrawPath d={scribbleEllipse(FX + FW / 2, FY + vh(A.CAMP_CROP, FW) * 0.62, 250, 110, 17)} at={K4.ash + 20} dur={26} color={AMBER} width={6} />
					<SvgText x={FX + FW / 2} y={FY + vh(A.CAMP_CROP, FW) + 40} text="cold ash: the reaction has finished" size={44} color={C_STATIC} anchor="middle" at={K4.finished} />
				</Fade>
				{/* rate gauges */}
				<SvgText x={1290} y={300} text="forward rate" size={44} color={INK} anchor="middle" at={K4.burns} />
				<SvgText x={1660} y={300} text="reverse rate" size={44} color={INK} anchor="middle" at={K4.backwards} />
				<Gauge cx={1290} cy={470} r={112} value={fwd} color={C_STATIC} at={K4.burns} />
				<Gauge cx={1660} cy={470} r={112} value={0} color={C_STATIC} at={K4.backwards} />
				{/* ash will not turn back into wood */}
				<Fade at={K4.backwards}>
					<SvgText x={1660} y={572} text="ash  →  wood" size={42} color={INK_SOFT} anchor="middle" />
					<Mark x={1660} y={556} at={K4.backwards + 12} kind="cross" size={56} />
				</Fade>
				<Fade at={K4.zero}>
					<SvgText x={1475} y={650} text="both rates: zero" size={58} color={C_STATIC} anchor="middle" at={K4.zero} />
				</Fade>
			</Overlay>
			<div style={{position: 'absolute', left: 1010, top: 690, width: 860}}>
				<HandText text="static equilibrium" at={K4.stat} size={78} color={C_STATIC} />
				<Enter at={K4.stat + 30}><Body size={34} color={INK}>no change, because nothing is happening at all</Body></Enter>
			</div>
			<Enter at={K4.slowly} style={{position: 'absolute', left: 1010, top: 838}}>
				<div style={{display: 'inline-flex', alignItems: 'center', gap: 14, background: '#fffdf8', borderRadius: 16, padding: '8px 22px', border: '2px solid rgba(60,45,20,0.1)'}}>
					<span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44, color: INK}}>not dynamic equilibrium running</span>
					<span style={{position: 'relative', fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44, color: INK}}>slowly
						<svg width={110} height={60} style={{position: 'absolute', left: -6, top: 0, overflow: 'visible'}}><Mark x={52} y={30} at={K4.slowly + 18} kind="cross" size={48} /></svg>
					</span>
				</div>
			</Enter>
		</>
	);
};

// ---------- 5. Open versus closed ----------
const K5 = cues(sc('open-vs-closed'), {soda: 'soda water', capOff: 'cap off', drift: 'drift out', huge: 'room is huge', little: 'very little', faster: 'leaving faster', flat: 'goes flat', closed: ['closed system', 1], matter: "matter can't", open: 'open system', needs: 'needs a closed', half: 'returning half', never: 'never match'});
const retVal5 = (f: number) => (f < K5.drift ? 12 : 12 - 9 * smooth((f - K5.drift) / 140));
const CFG5: LensCfg = {
	id: 'c5', cx: 1090, cy: 520, r: 300, size: 0.8, seed: 41, nGas: 8, nWater: 12, maxF: 1200,
	escRate: () => 1 / 24,
	retRate: f => retVal5(f) / 12 / 24,
	gas: f => (f < K5.drift ? 8 : 8 - 6 * smooth((f - K5.drift) / 160)),
	water: () => 12,
	exit: f => (f >= K5.capOff + 10 ? 1 : 0),
};
const MiniSystem: React.FC<{x: number; y: number; open: boolean; at: number; label: string; sub: string; color: string}> = ({x, y, open, at, label, sub, color}) => {
	const f = useCurrentFrame();
	const S = 0.12;
	const p = prog(f, at, 14);
	return (
		<div style={{position: 'absolute', left: x, top: y, width: 470, height: 190, opacity: p, transform: `translateY(${(1 - p) * 14}px)`}}>
			<Bottle x={20} y={10} s={S} open={open ? 1 : 0} />
			<svg width={470} height={190} style={{position: 'absolute', inset: 0, overflow: 'visible'}}>
				<DrawPath d={open ? 'M4,22 L4,186 L96,186 L96,22 M4,22 L26,22 M74,22 L96,22' : 'M4,14 L96,14 L96,186 L4,186 Z'} at={at + 6} dur={22} color={color} width={4} dash="10 8" />
			</svg>
			<div style={{position: 'absolute', left: 124, top: 40}}>
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 52, color}}>{label}</div>
				<Body size={30} color={INK}>{sub}</Body>
			</div>
		</div>
	);
};
export const SceneOpen: React.FC = () => {
	const f = useCurrentFrame();
	const openP = prog(f, K5.capOff, 24);
	const b = bottleGeo(110, 160, 0.53);
	return (
		<>
			<Heading text="What if we take the cap off?" />
			<Bottle x={110} y={160} s={0.53} open={openP} />
			<Overlay>
				<DrawPath d={scribbleEllipse(b.cx, b.capY + 4, 54, 50, 9)} at={K5.capOff} dur={20} color={AMBER} width={5} />
				<DrawPath d={`M${b.cx + 112},${b.surfaceY - 34} L${CFG5.cx - 216},${CFG5.cy - 210}`} at={0} dur={20} color={AMBER} width={3} />
				<DrawPath d={`M${b.cx + 112},${b.surfaceY + 34} L${CFG5.cx - 216},${CFG5.cy + 210}`} at={0} dur={20} color={AMBER} width={3} />
				<MoleculeLens cfg={CFG5} reveal={prog(f, 0, 26)} />
				<Fade at={K5.drift}>
					<Callout from={[CFG5.cx + 40, CFG5.cy - CFG5.r + 20]} to={[CFG5.cx + 150, CFG5.cy - CFG5.r - 40]} at={K5.drift} text="lost to the room" color={ESC} />
				</Fade>
				<SvgText x={96} y={946} text="dynamic equilibrium needs a closed system" size={52} color={TEAL} at={K5.needs} />
			</Overlay>
			<Counters x={1470} y={230} escAt={0} retAt={0} esc={12} ret={retVal5(f)} />
			<Enter at={K5.flat} out={K5.closed - 6} style={{position: 'absolute', left: 1480, top: 560}}>
				<HandText text="the drink goes flat" at={K5.flat + 4} size={56} color={AMBER_INK} />
			</Enter>
			<MiniSystem x={1460} y={500} open={false} at={K5.closed} label="closed system" sub="matter can't get in or out" color={TEAL} />
			<MiniSystem x={1460} y={712} open at={K5.open} label="open system" sub="matter can leave" color={C_NEITHER} />
		</>
	);
};

// ---------- 6. Worked classification: method and the iodine flask ----------
const K6 = cues(sc('worked-classify'), {classify: 'classify systems', order: 'in order', q1: ['has the reaction finished', 1], ifYes: 'If yes', bothWays: 'go both ways', q2: 'Is the system closed', q3: 'staying constant', bothYes: 'If both answers', ifNot: 'If not', flask: 'sealed flask', h2: 'hydrogen and iodine', purple: 'purple colour', a1: ['has the reaction finished', 2], no1: 'No, it can', a2: 'Is it closed', yes2: "Yes, it's sealed", a3: 'Is the colour steady', yes3: 'steady Yes', sothats: "So that's", dyn: 'dynamic equilibrium'});
const FL_W = 360;
export const SceneClassify: React.FC = () => {
	const f = useCurrentFrame();
	const t = {d1: K6.q1, stat: K6.ifYes, d2: K6.q2, d3: K6.q3, dyn: K6.bothYes, nei: K6.ifNot};
	const fx = 1440, fy = 230;
	return (
		<>
			<Heading text="Classify it: three questions, in order" />
			<Overlay>
				<Flowchart t={t} oy={20} stamps={{dynamic: [K6.dyn, 99999]}} pulse={[K6.a1, K6.no1 + 20]} />
				<Trace pts={ROUTES.dynamic} times={[K6.a1, K6.no1, K6.a2 + 4, K6.a3, K6.sothats]} oy={20} />
				<Mark x={250 + 128} y={540 + 20 + 92} at={K6.no1} kind="cross" size={42} />
				<Mark x={690 + 128} y={540 + 20 + 92} at={K6.yes2} kind="tick" size={42} />
				<Mark x={1130 + 128} y={540 + 20 + 92} at={K6.yes3} kind="tick" size={42} />
			</Overlay>
			<div style={{position: 'absolute', left: fx, top: fy, opacity: prog(f, K6.flask, 16)}}>
				<Vignette src={A.FLASK} nat={A.FLASK_NAT} crop={A.FLASK_CROP} x={20} y={0} w={FL_W * 0.8} />
			</div>
			<Enter at={K6.flask} style={{position: 'absolute', left: fx - 20, top: fy + vh(A.FLASK_CROP, FL_W * 0.8) + 10, width: 420}}>
				<Body size={30} weight={600}>Sealed flask, 450 °C for hours.</Body>
				<Body size={30} weight={600} color="#7b4fa0">Purple colour not changing.</Body>
			</Enter>
			<EqChip x={fx - 40} y={fy + vh(A.FLASK_CROP, FL_W * 0.8) + 100} at={K6.h2} parts={['H_2(g) + I_2(g)', 'ARROW', '2HI(g)']} size={32} pulseAt={K6.bothWays} />
		</>
	);
};

// ---------- 6b. Two more cases: ash and the evaporating beaker ----------
const K6b = cues(sc('worked-more'), {ash: 'cold ash', q: 'Has the reaction finished', yes: 'Yes, and it', isStatic: "so it's static", open: 'open air', beaker: 'beaker of water', evap: 'Evaporation can go', hasnt: "hasn't finished", closed: 'Is it closed', no: "No, it's open", dropping: 'level keeps dropping', neither: 'That makes it'});
export const SceneMore: React.FC = () => {
	const f = useCurrentFrame();
	const fx = 1440, fy = 250, VW = 400;
	const ashOut = 1 - prog(f, K6b.beaker - 10, 14);
	return (
		<>
			<Heading text="Two more cases" />
			<Overlay>
				<Flowchart t={FLOW_DONE} oy={20} stamps={{static: [K6b.isStatic, K6b.beaker], neither: [K6b.neither, 99999]}} numbers />
				<Trace pts={ROUTES.static} times={[K6b.q, K6b.yes, K6b.isStatic]} oy={20} out={K6b.beaker - 12} />
				<g opacity={1 - prog(f, K6b.beaker - 12, 12)}><Mark x={250 + 128} y={540 + 20 + 92} at={K6b.yes} kind="tick" size={42} /></g>
				<Trace pts={ROUTES.neither} times={[K6b.evap, K6b.hasnt, K6b.closed, K6b.no + 10, K6b.neither]} oy={20} color={C_NEITHER} />
				<g opacity={prog(f, K6b.hasnt, 8)}><Mark x={250 + 128} y={540 + 20 + 92} at={K6b.hasnt} kind="cross" size={42} /></g>
				<Mark x={690 + 128} y={540 + 20 + 92} at={K6b.no} kind="cross" size={42} />
			</Overlay>
			{/* first case, now a small chip */}
			<Enter at={0} style={{position: 'absolute', right: 96, top: 100}}>
				<div style={{display: 'flex', alignItems: 'center', gap: 12, background: '#fffdf8', borderRadius: 999, padding: '6px 20px', border: `3px solid ${C_DYNAMIC}`}}>
					<span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 38, color: INK}}>iodine flask:</span>
					<span style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 28, letterSpacing: 2, color: C_DYNAMIC}}>DYNAMIC</span>
				</div>
			</Enter>
			<div style={{opacity: ashOut * prog(f, K6b.ash - 6, 14)}}>
				<Vignette src={A.CAMP_ASH} nat={A.CAMP_NAT} crop={A.ASH_CROP} x={fx} y={fy + 60} w={VW} />
				<div style={{position: 'absolute', left: fx, top: fy + 60 + vh(A.ASH_CROP, VW) + 16, width: VW}}>
					<Body size={30} weight={600}>Cold ash from the campfire.</Body>
					<Enter at={K6b.open}><Body size={30} weight={600} color={C_STATIC}>Open air doesn't matter: it has finished.</Body></Enter>
				</div>
			</div>
			<div style={{opacity: prog(f, K6b.beaker, 16)}}>
				<Vignette src={A.BEAKER} nat={A.BEAKER_NAT} crop={A.BEAKER_CROP} x={fx + 40} y={fy} w={VW * 0.8} />
				<div style={{position: 'absolute', left: fx, top: fy + vh(A.BEAKER_CROP, VW * 0.8) + 10, width: VW}}>
					<Body size={30} weight={600}>Water evaporating, warm room.</Body>
					<Enter at={K6b.evap}><Body size={30} weight={600}>Some vapour condenses back.</Body></Enter>
					<Enter at={K6b.dropping}><Body size={30} weight={600} color={C_NEITHER}>Open, and the level keeps dropping.</Body></Enter>
				</div>
			</div>
		</>
	);
};

// ---------- 7 and 8. Attempt board and feedback ----------
const CW = 548, GAP = 40, X0 = 96, CY = 236, CH = 470;
const cx = (i: number) => X0 + i * (CW + GAP);
const ITEMS = [
	{title: 'Salt jar', src: A.SALT_JAR, nat: A.SALT_NAT, crop: A.SALT_CROP, lines: ['Sealed for weeks. Saturated:', "can't dissolve more overall.", 'Crystal pile stays the same size.']},
	{title: 'Hot coffee', src: A.COFFEE, nat: A.COFFEE_NAT, crop: A.COFFEE_CROP, lines: ['A cup of hot coffee', 'cooling on a desk.']},
	{title: 'Burned magnesium', src: A.MAGNESIUM, nat: A.MAG_NAT, crop: A.MAG_CROP, lines: ['A strip of magnesium burned', 'completely to white powder.']},
];
const ItemCard: React.FC<{i: number; at: number}> = ({i, at}) => {
	const f = useCurrentFrame();
	const it = ITEMS[i];
	const p = prog(f, at, 16);
	const maxH = 210;
	const w = Math.min(CW - 100, (maxH * it.crop[2]) / it.crop[3]);
	return (
		<div style={{position: 'absolute', left: cx(i), top: CY, width: CW, height: CH, opacity: p, transform: `translateY(${(1 - p) * 18}px)`, background: '#fffdf8', borderRadius: 24, boxShadow: '0 18px 40px rgba(60,45,20,0.10)', border: '1.5px solid rgba(60,45,20,0.08)', boxSizing: 'border-box'}}>
			<div style={{display: 'flex', alignItems: 'center', gap: 14, padding: '20px 24px 0'}}>
				<div style={{width: 50, height: 50, borderRadius: 999, background: AMBER, color: '#fff', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 28, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{i + 1}</div>
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 46, color: INK}}>{it.title}</div>
			</div>
			<Plate src={it.src} natural={it.nat} crop={it.crop} width={w} style={{left: (CW - w) / 2, top: 88}} />
			<div style={{position: 'absolute', left: 26, right: 20, top: 318}}>
				{it.lines.map(l => <Body key={l} size={29} weight={600}>{l}</Body>)}
			</div>
		</div>
	);
};
const QUESTIONS = ['1  Finished and can\'t reverse?', '2  Closed?', '3  Staying constant?'];

const K7 = cues(sc('attempt'), {turn: 'Your turn', jar: 'sealed jar', coffee: 'cup of hot coffee', mag: 'strip of magnesium', pause: 'Pause the video'});
export const SceneAttempt: React.FC = () => {
	const scene = sc('attempt') as ReturnType<typeof sc> & {responseHold?: {startFrame: number; endFrame: number}};
	const hold = scene.responseHold ?? {startFrame: K7.pause + 60, endFrame: K7.pause + 810};
	return (
		<>
			<Heading text="Your turn: static, dynamic or neither?" at={K7.turn} />
			{[K7.jar, K7.coffee, K7.mag].map((at, i) => <ItemCard key={i} i={i} at={at} />)}
			<Enter at={K7.turn + 20} style={{position: 'absolute', left: 96, top: 744}}>
				<div style={{display: 'flex', gap: 18, alignItems: 'center'}}>
					<span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: TEAL}}>Ask in order:</span>
					{QUESTIONS.map(q => <span key={q} style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 28, color: INK, background: '#fffdf8', borderRadius: 999, padding: '6px 16px', border: `2px solid ${TEAL}`}}>{q}</span>)}
				</div>
			</Enter>
			<Enter at={K7.pause} style={{position: 'absolute', left: 96, top: 826}}>
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: INK_SOFT}}>Give a reason for each. Pause if you need more time.</div>
			</Enter>
			<Overlay><Countdown start={hold.startFrame} end={hold.endFrame} x={1752} y={810} r={58} /></Overlay>
		</>
	);
};

const Stamp: React.FC<{i: number; at: number; text: string; color: string}> = ({i, at, text, color}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 12);
	return (
		<div style={{position: 'absolute', left: cx(i) + CW - 260, top: CY - 62, transform: `rotate(-6deg) scale(${p < 1 ? 1.25 - 0.25 * p : 1})`, opacity: p, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 34, letterSpacing: 3, color, border: `5px solid ${color}`, borderRadius: 14, padding: '6px 18px', background: '#fffdf8'}}>{text}</div>
	);
};
const Why: React.FC<{i: number; at: number; text: string; color: string}> = ({i, at, text, color}) => (
	<Enter at={at} style={{position: 'absolute', left: cx(i), top: CY + CH + 16, width: CW}}>
		<div style={{background: '#fffdf8', borderRadius: 16, padding: '12px 20px', border: `3px solid ${color}`, boxSizing: 'border-box'}}><Body size={27} weight={600}>{text}</Body></div>
	</Enter>
);
/** Ions leaving and rejoining the crystal pile, drawn inside a small lens over the jar. */
const IonLens: React.FC<{x: number; y: number; r: number; at: number}> = ({x, y, r, at}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 18);
	if (p <= 0) return null;
	const rr = rng(77);
	const ions = Array.from({length: 10}, (_, k) => ({ph: rr(), dx: (rr() - 0.5) * r * 1.2, col: k % 2 ? '#7a8fb5' : '#c78a3d'}));
	return (
		<g opacity={p}>
			<defs><clipPath id="ionlens"><circle cx={x} cy={y} r={r} /></clipPath></defs>
			<g clipPath="url(#ionlens)">
				<rect x={x - r} y={y - r} width={r * 2} height={r * 2} fill="#e9f3fa" />
				<path d={`M${x - r},${y + r * 0.45} Q${x},${y + r * 0.2} ${x + r},${y + r * 0.45} L${x + r},${y + r} L${x - r},${y + r} Z`} fill="#f4f1ea" stroke={INK_SOFT} strokeWidth={3} />
				{ions.map((ion, k) => {
					const t = ((f - at) / 90 + ion.ph) % 1;
					const up = k % 2 === 0;
					const u = up ? t : 1 - t;
					const yy = y + r * 0.35 - u * r * 0.9;
					return <circle key={k} cx={x + ion.dx + Math.sin(t * 6 + k) * 6} cy={yy} r={7} fill={ion.col} stroke={INK} strokeWidth={1.5} />;
				})}
			</g>
			<circle cx={x} cy={y} r={r} fill="none" stroke={TEAL} strokeWidth={5} />
		</g>
	);
};

const K8 = cues(sc('feedback'), {jar: 'salt jar is dynamic', dissolving: 'Dissolving can go', back: 'crystallising back', size: 'same size', trap: 'If you said static', coffee: 'coffee is neither', steam: 'heat and steam', mag: 'burned magnesium is static', said: 'If you said neither', first: 'first question'});
export const SceneFeedback: React.FC = () => {
	const f = useCurrentFrame();
	const jarW = Math.min(CW - 100, (210 * A.SALT_CROP[2]) / A.SALT_CROP[3]);
	return (
		<>
			<Heading text="Here's how" />
			{[0, 1, 2].map(i => <ItemCard key={i} i={i} at={0} />)}
			<Stamp i={0} at={K8.jar} text="DYNAMIC" color={C_DYNAMIC} />
			<Why i={0} at={K8.back} text="Dissolving and crystallising continue at the same rate, so the pile stays the same." color={C_DYNAMIC} />
			<Overlay><IonLens x={cx(0) + CW / 2 + jarW * 0.5 + 40} y={CY + 230} r={78} at={K8.dissolving} /></Overlay>
			<Stamp i={1} at={K8.coffee} text="NEITHER" color={C_NEITHER} />
			<Why i={1} at={K8.steam} text="Open cup: heat and steam keep leaving, so it is still changing." color={C_NEITHER} />
			<Stamp i={2} at={K8.mag} text="STATIC" color={C_STATIC} />
			<Why i={2} at={K8.first} text="Finished and can't run backwards, even in open air." color={C_STATIC} />
			<Enter at={K8.trap} out={K8.coffee - 6} style={{position: 'absolute', left: 96, top: 852}}>
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 46, color: AMBER_INK}}>The trap: still-looking doesn't mean stopped.</div>
			</Enter>
			<Enter at={K8.said} style={{position: 'absolute', left: 96, top: 852}}>
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 46, color: AMBER_INK, opacity: f >= K8.said ? 1 : 0}}>Always ask the first question first.</div>
			</Enter>
		</>
	);
};

// ---------- 9. Memory: the ordered rule ----------
const K9 = cues(sc('memory'), {order: 'order to use', first: 'First, has', isStatic: "Then it's static", still: 'If it can still', isDyn: "it's dynamic", open: "If it's open", isNei: "it's neither", rates: 'rates are equal', amounts: 'not the amounts', next: 'Next'});
const RuleRow: React.FC<{y: number; n: number; at: number; verdictAt: number; text: string; verdict: string; color: string; icon: React.ReactNode}> = ({y, n, at, verdictAt, text, verdict, color, icon}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 14);
	return (
		<div style={{position: 'absolute', left: 96, top: y, width: 1730, height: 150, opacity: p, transform: `translateX(${(1 - p) * -20}px)`}}>
			<div style={{position: 'absolute', left: 0, top: 46, width: 58, height: 58, borderRadius: 999, background: TEAL, color: '#fff', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 32, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{n}</div>
			<div style={{position: 'absolute', left: 90, top: 0, width: 190, height: 150}}>{icon}</div>
			<div style={{position: 'absolute', left: 310, top: 40}}><HandText text={text} at={at + 4} size={62} cps={30} /></div>
			<div style={{position: 'absolute', left: 1420, top: 44, opacity: prog(f, verdictAt, 12), transform: `rotate(-4deg) scale(${prog(f, verdictAt, 12) < 1 ? 1.2 : 1})`, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, letterSpacing: 3, color, border: `5px solid ${color}`, borderRadius: 14, padding: '6px 20px', background: '#fffdf8'}}>{verdict}</div>
		</div>
	);
};
export const SceneMemory: React.FC = () => (
	<>
		<Heading text="The order to use in any question" />
		<RuleRow y={230} n={1} at={K9.first} verdictAt={K9.isStatic} text="Finished, can't run backwards?" verdict="STATIC" color={C_STATIC}
			icon={<Plate src={A.CAMP_ASH} natural={A.CAMP_NAT} crop={A.ASH_CROP} width={180} style={{left: 0, top: 30}} />} />
		<RuleRow y={420} n={2} at={K9.still} verdictAt={K9.isDyn} text="Both ways, closed and steady?" verdict="DYNAMIC" color={C_DYNAMIC}
			icon={<Bottle x={60} y={0} s={0.105} />} />
		<RuleRow y={610} n={3} at={K9.open} verdictAt={K9.isNei} text="Open, or still changing?" verdict="NEITHER" color={C_NEITHER}
			icon={<Plate src={A.BEAKER} natural={A.BEAKER_NAT} crop={A.BEAKER_CROP} width={140} style={{left: 20, top: 4}} />} />
		<div style={{position: 'absolute', left: 96, top: 808}}>
			<HandText text="Equal rates, " at={K9.rates} size={66} cps={22} color={TEAL} />
			<HandText text="not equal amounts." at={K9.amounts} size={66} cps={22} color={INK} />
		</div>
		<Enter at={K9.next} style={{position: 'absolute', right: 96, top: 100}}>
			<div style={{background: '#fffdf8', borderRadius: 999, padding: '10px 28px', boxShadow: '0 10px 24px rgba(60,45,20,0.1)'}}>
				<span style={{fontFamily: FONT_HAND, fontSize: 42, fontWeight: 700, color: INK}}>Next: how rates change on the way to equilibrium</span>
			</div>
		</Enter>
	</>
);

// ---------- 10. Key notes ----------
const NOTES = [
	'Dynamic equilibrium: a reversible reaction in a closed system where the forward and reverse rates are equal and not zero, so concentrations stay constant.',
	'Static equilibrium: the reaction has finished and both rates are zero.',
	'Closed system: matter cannot enter or leave, but energy can. Open system: matter can enter or leave.',
	'At dynamic equilibrium the rates are equal, not the amounts.',
];
export const SceneNotes: React.FC = () => (
	<>
		<div style={{position: 'absolute', left: 96, top: 92}}><HandText text="Key notes: what to write in your book" at={2} size={72} cps={40} /></div>
		<div style={{position: 'absolute', left: 140, top: 236, width: 1640}}>
			{NOTES.map((n, i) => (
				<Enter key={i} at={14 + i * 10} style={{display: 'flex', gap: 22, marginBottom: 28}}>
					<div style={{flex: 'none', width: 18, height: 18, marginTop: 15, borderRadius: 999, background: AMBER}} />
					<Body size={38}>{n}</Body>
				</Enter>
			))}
			<Enter at={60}><div style={{fontFamily: FONT_HAND, fontSize: 44, fontWeight: 700, color: AMBER_INK, marginTop: 14}}>Pause the video if you need more time to copy.</div></Enter>
		</div>
	</>
);
