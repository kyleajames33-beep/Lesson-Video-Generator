import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Callout} from '../../kit';
import {cues} from '../../cues';
import {
	AMBER, AMBER_INK, Arrow, BarHead, Brain, ChainIcon, CHAIN, cmap, CervixPair, cH, CERVIX_BOX, Cross, DrawPath, Dots, Enter, FONT_DISPLAY, FONT_HAND, Hand, HandText, Heading, INK, INK_SOFT, Label, LoopCard, LoopIcon, MAGENTA, MAGENTA_INK,
	Overlay, PArt, PIT, PL, Pill, prog, S, Say, Scribble, SLATE_INK, traceD, Vein, VIOLET, VIOLET_INK, pathOf, along, MUSCLE, type CBox,
} from './shared';

// ---------- 3. Oestrogen: from calm to ready ----------
const FPL = {x: 96, y: 250, w: 480};
const FPH = (FPL.w * 1439) / 1143;
const fpm = (fx: number, fy: number): [number, number] => [FPL.x + fx * FPL.w, FPL.y + fy * FPH];
const PANEL = {x: 860, y: 215, w: 980, h: 655};
const CELL = {cx: 1350, cy: 580, rx: 360, ry: 92};
const edgeY = (dx: number) => CELL.cy - CELL.ry * Math.sqrt(Math.max(0, 1 - (dx / CELL.rx) ** 2));
const SOCK_BEFORE = [-200, 140];
const SOCK_AFTER = [-280, -200, -120, -40, 40, 120, 200, 280];
export const SceneOestrogen: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('oestrogen'), {
		wall: 'wall of the uterus', muscle: 'mostly muscle', calm: 'keep it calm', late: 'Late in pregnancy', more: 'placenta makes more', oest: 'oestrogen', react: 'Oestrogen makes the muscle',
		oxy: 'oxytocin', contract: 'makes it contract', so: 'So by the end', small: 'small amount', strong: 'contract strongly',
	});
	const wallO = prog(f, c.muscle, 40);
	const bar = prog(f, c.more, 100);
	const [px, py] = fpm(0.78, 0.37);
	const after = prog(f, c.so, 16);
	const before1 = prog(f, c.oxy, 44);
	const bounce = prog(f, c.oxy + 54, 30);
	const squeeze1 = prog(f, c.contract, 14) * (1 - prog(f, c.so - 6, 10));
	const after1 = prog(f, c.small, 44);
	const squeeze2 = prog(f, c.strong, 18);
	const sx = 1 - 0.04 * squeeze1 - 0.2 * squeeze2;
	const sy = 1 + 0.03 * squeeze1 + 0.12 * squeeze2;
	const dotXs = [-200, -40, 120];
	const wallPt = (deg: number): [number, number] => [336 + 220 * Math.cos((deg * Math.PI) / 180), 504 + 234 * Math.sin((deg * Math.PI) / 180)];
	const wallArc = Array.from({length: 41}, (_, i) => `${i ? 'L' : 'M'}${wallPt(-190 + i * 5).map(v => v.toFixed(1)).join(',')}`).join(' ');
	const wallDots = Array.from({length: 14}, (_, i) => wallPt(-185 + i * 14));
	const sockets = f < c.so ? SOCK_BEFORE : SOCK_AFTER;
	return (
		<>
			<Heading items={[[0, 'From calm to ready']]} size={72} />
			<div style={{position: 'absolute', inset: 0, opacity: prog(f, 0, 20)}}><PArt a={PL.fetus} x={FPL.x} y={FPL.y} w={FPL.w} /></div>
			<Overlay>
				<path d={wallArc} fill="none" stroke={MUSCLE} strokeWidth={26} strokeLinecap="round" opacity={0.38 * wallO * (1 - 0.6 * prog(f, c.late, 14))} pathLength={1} strokeDasharray={1} strokeDashoffset={1 - wallO} />
				<Callout from={[145, 387]} to={[110, 226]} at={c.muscle} text="uterus wall: mostly muscle" color={INK} size={44} />
				{wallDots.map((p, i) => <circle key={i} cx={p[0]} cy={p[1]} r={9} fill={AMBER} stroke="#fff" strokeWidth={2} opacity={prog(f, c.calm + i * 2, 8) * (1 - 0.7 * prog(f, c.late, 14))} />)}
				<DrawPath d={traceD(640, 340, 210, 60, 'calm')} at={c.calm} dur={30} color={INK_SOFT} width={5} />
				<Label x={745} y={296} at={c.calm + 10} text="calm" size={40} color={INK_SOFT} />
				{/* oestrogen bar rising from the placenta side */}
				<Dots pts={[[px + 10, py + 20], [px + 60, py + 120], [650, 760]]} at={c.more} n={4} period={50} color={MAGENTA} r={9} end={c.react} />
				<rect x={650} y={800 - 330 * bar} width={64} height={330 * bar + 2} rx={8} fill={MAGENTA} opacity={0.85} />
				<line x1={640} x2={724} y1={802} y2={802} stroke={INK} strokeWidth={5} />
				<Label x={682} y={800 - 330 * bar - 16} at={c.oest} text="oestrogen" size={50} color={MAGENTA_INK} />
			</Overlay>
			{/* the muscle cell close-up */}
			<Enter at={c.react - 6} style={{position: 'absolute', left: PANEL.x, top: PANEL.y, width: PANEL.w, height: PANEL.h}}>
				<div style={{width: PANEL.w, height: PANEL.h, borderRadius: 28, background: '#fbf6ec', border: `5px solid ${INK}`, boxSizing: 'border-box', boxShadow: '0 18px 40px rgba(60,45,20,0.10)'}} />
			</Enter>
			<Overlay>
				<g opacity={prog(f, c.react, 14)}>
					<path d={`M${FPL.x + FPL.w - 10},${FPL.y + 120} L${PANEL.x},${PANEL.y + 40}`} stroke={INK_SOFT} strokeWidth={4} strokeDasharray="4 12" strokeLinecap="round" />
					<text x={PANEL.x + 30} y={PANEL.y + 56} style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30}} fill={INK_SOFT}>one muscle cell of the uterus wall</text>
					<text x={PANEL.x + 30} y={PANEL.y + 112} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 46}} fill={f < c.so ? INK : MAGENTA_INK}>{f < c.so ? 'without the extra oestrogen' : 'late in pregnancy, with oestrogen'}</text>
					<g transform={`translate(${CELL.cx},${CELL.cy}) scale(${sx},${sy}) translate(${-CELL.cx},${-CELL.cy})`}>
						<ellipse cx={CELL.cx} cy={CELL.cy} rx={CELL.rx} ry={CELL.ry} fill="#f3b9b3" stroke="#b5605c" strokeWidth={6} />
						<ellipse cx={CELL.cx + 20} cy={CELL.cy + 6} rx={70} ry={34} fill="#d98a86" stroke="#b5605c" strokeWidth={4} />
						{sockets.map((dx, i) => {
							const idx = f < c.so ? 1 : prog(f, c.so + i * 4, 10);
							return <circle key={dx} cx={CELL.cx + dx} cy={edgeY(dx)} r={15} fill="#fffdf8" stroke={VIOLET} strokeWidth={5} opacity={idx} />;
						})}
					</g>
					{/* three oxytocin dots */}
					{dotXs.map((dx, i) => {
						const fits = f < c.so ? i === 0 : true;
						const t = f < c.so ? before1 : after1;
						const targetY = edgeY(dx) - 22;
						const y0 = 360;
						const rise = f < c.so && !fits ? bounce : 0;
						const y = y0 + (targetY - y0) * t - rise * (targetY - y0 - 20) * (f < c.so ? 1 : 0) * 0.9;
						const o = f < c.so ? (i === 0 ? 1 : 1 - rise * 0.9) : 1;
						return <circle key={i} cx={CELL.cx + dx} cy={y} r={14} fill={VIOLET} stroke="#fff" strokeWidth={2.5} opacity={Math.min(1, t * 4) * o} />;
					})}
					<DrawPath d={traceD(1010, 800, 640, 64, f < c.so ? 'small' : 'big', 4)} at={f < c.so ? c.contract : c.strong} dur={50} color={VIOLET_INK} width={6} />
				</g>
			</Overlay>
			<Hand at={c.oxy} x={PANEL.x + 30} y={PANEL.y + 160} size={42} color={VIOLET_INK}>oxytocin: makes the muscle contract</Hand>
			<Pill at={c.strong} x={900} y={890} size={40}>same amount of oxytocin, bigger response</Pill>
			<LoopCard at={0} fill1={0} />
		</>
	);
};

// ---------- 4a. Pressure, nerve signal, oxytocin ----------
const CP = {x: 96, y: 210, w: 420};
const INSET: CBox = [740, 1060, 360, 500];
const IN = {x: 610, y: 330, w: 340};
const INH = cH(IN.w, INSET);
const NERVE: [number, number][] = [[966, 700], [1100, 740], [1300, 600], [1500, 420], [1600, 300]];
const BLOOD: [number, number][] = [[PIT[0] - 20, PIT[1] + 30], [1500, 260], [1150, 215], [800, 215], [560, 250], [470, 300]];
const CHX = [840, 1070, 1300, 1530, 1760];
const CHY = 880;
export const SceneTrigger: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('trigger'), {
		still: 'still being worked out', once: 'once they begin', push: "push the baby's head", cerv: 'onto the cervix', narrow: 'the narrow lower end', stretch: 'and stretch it', sends: 'The stretch sends',
		nerve: 'nerve signals to the brain', pit: 'the pituitary releases', oxy: 'releases oxytocin', reach: 'Oxytocin reaches the uterus', harder: 'contracts harder',
	});
	const s = prog(f, c.stretch, 28);
	const m = cmap(IN.x, IN.y, IN.w, INSET);
	const mouth = m(925, 1200);
	const cm = cmap(CP.x, CP.y, CP.w);
	const cerv = cm(925, 1290);
	const show = prog(f, c.once, 22);
	const flex = 1 + 0.03 * Math.sin(Math.PI * prog(f, c.harder, 24));
	const stepAt = [c.stretch, c.nerve, c.pit, c.oxy, c.harder];
	const pulse = Math.sin(Math.PI * prog(f, c.pit, 24));
	return (
		<>
			<Heading items={[[0, 'What the stretch sets off']]} size={72} />
			<Hand at={4} out={c.once} x={610} y={340} w={640} size={52} color={AMBER_INK}>first trigger: still being worked out</Hand>
			<Overlay>
				<DrawPath d={traceD(610, 520, 360, 70, 'calm')} at={4} dur={30} color={INK_SOFT} width={5} opacity={1 - prog(f, c.once, 12)} />
			</Overlay>
			<div style={{position: 'absolute', inset: 0, opacity: show}}>
				<div style={{position: 'absolute', inset: 0, transformOrigin: `${CP.x + CP.w / 2}px ${CP.y + 300}px`, transform: `scale(${flex})`}}><CervixPair x={CP.x} y={CP.y} w={CP.w} s={s} /></div>
				<div style={{position: 'absolute', left: IN.x - 6, top: IN.y - 6, width: IN.w + 12, height: INH + 12, borderRadius: 24, border: `5px solid ${INK}`, background: '#f6f1e7', overflow: 'hidden', boxSizing: 'border-box'}} />
				<CervixPair x={IN.x} y={IN.y} w={IN.w} s={s} crop={INSET} />
				{/* stretch gauge */}
				<div style={{position: 'absolute', left: 540, top: 340, width: 30, height: 400, border: `4px solid ${INK}`, borderRadius: 10, boxSizing: 'border-box', background: '#fffdf8'}}>
					<div style={{position: 'absolute', left: 0, right: 0, bottom: 0, height: `${12 + 80 * s}%`, background: MUSCLE, borderRadius: 6}} />
				</div>
				<div style={{position: 'absolute', left: 495, top: 296, width: 120, textAlign: 'center', fontFamily: FONT_HAND, fontWeight: 700, fontSize: 30, color: INK}}>stretch</div>
			</div>
			<Overlay>
				<Brain at={c.nerve - 30} pulse={pulse} />
				<Scribble cx={cerv[0]} cy={cerv[1] - 40} rx={50} ry={84} at={c.cerv} color={AMBER} seed={6} width={6} />
				<Callout from={[mouth[0] + 24, mouth[1] + 70]} to={[1000, 640]} at={c.narrow} text="cervix" color={INK} size={54} />
				{/* pressure arrow from the head */}
				<g opacity={prog(f, c.push, 10) * (1 - 0.0 * s)}>
					<Arrow x1={m(925, 1075)[0]} y1={m(925, 1075)[1]} x2={mouth[0]} y2={mouth[1] + 16} at={c.push} color={AMBER_INK} width={12} head={30} dur={18} />
				</g>
				<DrawPath d={pathOf(NERVE)} at={c.sends} dur={40} color={AMBER_INK} width={5} dash="12 10" />
				<Dots pts={NERVE} at={c.nerve} n={3} period={70} color={AMBER} r={11} end={c.nerve + 60} />
				<Vein d={pathOf(BLOOD)} at={c.oxy - 4} dur={40} o={0.7} />
				<Dots pts={BLOOD} at={c.oxy + 10} n={7} period={90} color={VIOLET} r={11} />
				<DrawPath d={traceD(1010, 450, 320, 90, f < c.harder ? 'small' : 'big', 3)} at={f < c.harder ? c.reach : c.harder} dur={50} color={VIOLET_INK} width={6} />
				<Label x={1170} y={500} at={c.reach} text="contractions" size={40} color={VIOLET_INK} />
				{/* the chain of five */}
				{CHAIN.map((t, i) => {
					const o = prog(f, stepAt[i] - 4, 14);
					return (
						<g key={t} opacity={o}>
							<ChainIcon k={i} cx={CHX[i]} cy={CHY} s={1} />
							<text x={CHX[i]} y={CHY + 78} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 38}} fill={INK}>{t}</text>
							{i > 0 ? <Arrow x1={CHX[i - 1] + 56} y1={CHY} x2={CHX[i] - 56} y2={CHY} at={stepAt[i] - 6} color={INK_SOFT} width={5} head={14} dur={12} /> : null}
						</g>
					);
				})}
			</Overlay>
			<Say at={c.narrow} x={300} y={846} w={440} size={28} color={INK_SOFT} weight={600}>the narrow lower end of the uterus</Say>
			<LoopCard at={0} fill1={0} />
			<div style={{display: 'none'}}>{[PIT, SLATE_INK, Cross, AMBER, along, CERVIX_BOX, LoopIcon, MAGENTA, VIOLET, BarHead, HandText, FONT_DISPLAY, INK].length}</div>
		</>
	);
};

// ---------- 4b. The loop closes (positive feedback) ----------
const RC = {x: 900, y: 560, rx: 380, ry: 230};
const ringPt = (deg: number): [number, number] => [RC.x + RC.rx * Math.sin((deg * Math.PI) / 180), RC.y - RC.ry * Math.cos((deg * Math.PI) / 180)];
const ringSeg = (a: number, b: number): [number, number][] => Array.from({length: 13}, (_, i) => ringPt(a + ((b - a) * i) / 12));
export const SceneLoopCloses: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('loop-closes'), {
		push: "push the baby's head", closes: 'against the cervix', more1: 'stretches more', more2: 'more oxytocin is released', here: 'Here the result', pos: 'positive feedback', nothing: 'Nothing in this loop', build: 'the contractions build', born: 'until the baby is born',
		then: 'Then nothing stretches', stops: 'the loop stops',
	});
	const mv = prog(f, 4, 34);
	const laps = [c.closes + 10, c.more1, c.more2, c.here];
	const lapNow = laps.filter(t => f >= t).length;
	const lapP = (i: number) => prog(f, laps[i], 22);
	const heights = [0.25, 0.5, 0.75, 1];
	const stretchH = (() => { let h = 0; heights.forEach((v, i) => { h = h + (v - (i ? heights[i - 1] : 0)) * lapP(i); }); return h * (1 - prog(f, c.then, 40)); })();
	const oxyH = (() => { let h = 0; heights.forEach((v, i) => { h = h + (v - (i ? heights[i - 1] : 0)) * lapP(i); }); return h; })();
	const greyRing = prog(f, c.stops, 20);
	const ringCol = greyRing > 0.5 ? '#b9b3a8' : INK_SOFT;
	const rowPos = (i: number): [number, number] => [[840, 1070, 1300, 1530, 1760][i], 880];
	const pos = (i: number): [number, number] => {
		const a = rowPos(i), b = ringPt(i * 72);
		return [a[0] + (b[0] - a[0]) * mv, a[1] + (b[1] - a[1]) * mv];
	};
	const lapTick = (i: number) => lapP(i);
	return (
		<>
			<Heading items={[[0, 'The loop closes']]} size={72} />
			<Overlay>
				{/* ring arrows */}
				{[0, 1, 2, 3, 4].map(i => {
					const pts = ringSeg(i * 72 + 15, (i + 1) * 72 - 15);
					const a = pts[pts.length - 2], b = pts[pts.length - 1];
					const ang = Math.atan2(b[1] - a[1], b[0] - a[0]);
					const closing = i === 4;
					const col = closing ? (greyRing > 0.5 ? '#b9b3a8' : AMBER) : ringCol;
					const at = closing ? c.closes : 8 + i * 4;
					const hd = (s: number) => `${b[0] - 22 * Math.cos(ang + s)},${b[1] - 22 * Math.sin(ang + s)}`;
					return (
						<g key={i} opacity={closing ? 1 : mv}>
							<DrawPath d={pathOf(pts)} at={at} dur={closing ? 34 : 14} color={col} width={closing ? 9 : 6} />
							<DrawPath d={`M${hd(0.5)} L${b[0]},${b[1]} L${hd(-0.5)}`} at={at + (closing ? 28 : 10)} dur={8} color={col} width={closing ? 9 : 6} />
						</g>
					);
				})}
				{CHAIN.map((t, i) => {
					const [x, y] = pos(i);
					return (
						<g key={t}>
							<ChainIcon k={i} cx={x} cy={y} s={1 + 0.1 * mv} lit={greyRing < 0.5} />
							<text x={x} y={i === 0 ? y - 62 : y + 84} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 36}} fill={INK}>{t}</text>
						</g>
					);
				})}
				{/* positive feedback in the middle */}
				<LoopIcon k="pos" cx={RC.x} cy={450} r={44} o={prog(f, c.pos, 14)} />
				{/* the brake is not part of this loop */}
				<g opacity={prog(f, c.nothing, 12) * (1 - prog(f, c.build - 6, 10))}>
					<DrawPath d="M820,730 L980,730" at={c.nothing} dur={14} color={AMBER} width={9} />
					<BarHead x={982} y={730} ang={0} at={c.nothing + 12} color={AMBER} width={9} len={26} />
					<Cross x={900} y={730} s={1.8} at={c.nothing + 20} />
				</g>
				{/* lap counter and the two bars */}
				<g opacity={prog(f, c.closes, 14)}>
					<text x={1460} y={262} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 60}} fill={INK_SOFT}>lap</text>
					{[0, 1, 2, 3].map(i => <text key={i} x={1560} y={264 + (1 - lapTick(i)) * 30 + (lapNow > i + 1 ? -40 : 0)} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 84}} fill={AMBER_INK} opacity={lapNow === i + 1 ? 1 : 0}>{i + 1}</text>)}
					<line x1={1440} x2={1840} y1={655} y2={655} stroke={INK} strokeWidth={5} />
					<rect x={1480} y={655 - 300 * stretchH} width={90} height={300 * stretchH} fill={MUSCLE} />
					<rect x={1690} y={655 - 300 * oxyH} width={90} height={300 * oxyH} fill={greyRing > 0.5 ? '#b9b3a8' : VIOLET} />
					<text x={1525} y={700} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 38}} fill={INK}>stretch</text>
					<text x={1735} y={700} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 38}} fill={INK}>oxytocin</text>
				</g>
				<DrawPath d={traceD(1450, 850, 380, 80, 'grow', 4)} at={c.closes} dur={80} color={VIOLET_INK} width={5} />
			</Overlay>
			<Enter at={c.pos} style={{position: 'absolute', left: 660, top: 512}}><HandText text="positive feedback" at={c.pos} size={78} color={AMBER_INK} cps={26} /></Enter>
			<Say at={c.pos + 20} x={680} y={612} w={470} size={32} color={INK} weight={600}>the result pushes the process further</Say>
			<Pill at={c.then} x={760} y={900} size={40} color={INK_SOFT}>the stretch stops, so the loop stops</Pill>
			<LoopCard at={0} fill1={0} second={c.pos + 30} fill2={c.stops} />
			<div style={{display: 'none'}}>{[Brain, PIT, Arrow, Label, PArt, PL, VIOLET, along, Vein, Dots, Scribble, SLATE_INK, Callout, MAGENTA_INK, FONT_DISPLAY, INK, AMBER, MUSCLE].length}</div>
		</>
	);
};

// ---------- 4c. Two kinds of feedback ----------
const Thumb: React.FC<{x: number; y: number; down?: boolean; at: number; out: number; crossAt: number}> = ({x, y, down, at, out, crossAt}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 12) * (1 - prog(f, out, 10));
	return (
		<g opacity={o} transform={`translate(${x},${y})`}>
			<g transform={down ? 'scale(1,-1)' : undefined}>
				<rect x={0} y={20} width={26} height={52} rx={5} fill="#cfc6b4" stroke={INK} strokeWidth={5} />
				<path d="M34,24 L54,-22 C58,-34 74,-30 72,-14 L66,12 L96,12 C108,12 112,24 106,32 L100,62 C96,74 88,76 80,76 L34,76Z" fill="#f3d9b8" stroke={INK} strokeWidth={5} strokeLinejoin="round" />
			</g>
			<Cross x={50} y={26} s={2.4} at={crossAt} />
		</g>
	);
};
const Row: React.FC<{x: number; y: number; w: number; at: number; big: string; small?: string; color?: string}> = ({x, y, w, at, big, small, color = INK}) => (
	<Enter at={at} style={{position: 'absolute', left: x, top: y, width: w}}>
		<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 42, color, lineHeight: 1.12}}>{big}</div>
		{small ? <div style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 32, color: INK_SOFT, lineHeight: 1.2, marginTop: 4}}>{small}</div> : null}
	</Enter>
);
export const SceneTwoKinds: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('two-kinds'), {
		neg: 'Negative does not mean bad', pos: 'positive does not mean good', describe: 'They describe whether', negF: 'Negative feedback opposes a change', steady: 'keeps conditions steady', posF: 'Positive feedback adds to a change', speeds: 'speeds up until something ends it',
	});
	const col = (x: number, title: string, k: 'neg' | 'pos') => (
		<Enter at={6} style={{position: 'absolute', left: x, top: 196, width: 830}}>
			<div style={{height: 624, borderRadius: 26, background: '#fffdf8', border: '1.5px solid rgba(60,45,20,0.10)', boxShadow: '0 18px 40px rgba(60,45,20,0.10)', boxSizing: 'border-box', padding: '22px 30px'}}>
				<div style={{display: 'flex', alignItems: 'center', gap: 22}}>
					<svg width={92} height={92} viewBox="0 0 92 92"><LoopIcon k={k} cx={46} cy={46} r={40} /></svg>
					<span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 74, color: INK, lineHeight: 1}}>{title}</span>
				</div>
			</div>
		</Enter>
	);
	return (
		<>
			<Heading items={[[0, 'Negative and positive: what the words mean']]} size={70} />
			{col(96, 'negative feedback', 'neg')}
			{col(994, 'positive feedback', 'pos')}
			<Overlay>
				<Thumb x={400} y={486} down at={c.neg} out={c.describe - 6} crossAt={c.neg + 40} />
				<Thumb x={1300} y={440} at={c.pos} out={c.describe - 6} crossAt={c.pos + 40} />
			</Overlay>
			<Row x={126} y={460} w={770} at={c.negF} big="opposes the change" small="(here, turns the process down)" color={SLATE_INK} />
			<Row x={1024} y={460} w={770} at={c.posF} big="adds to the change" small="(here, pushes the process further)" color={MAGENTA_INK} />
			<Row x={126} y={620} w={770} at={c.steady} big="keeps things steady" />
			<Row x={1024} y={620} w={770} at={c.speeds} big="speeds up until the stimulus ends" />
			<Row x={126} y={730} w={770} at={c.steady + 50} big="" small="example: progesterone turns FSH and LH down" />
			<Row x={1024} y={730} w={770} at={c.speeds + 40} big="" small="example: stretch, oxytocin, squeeze, more stretch" />
			<Enter at={c.speeds + 50} style={{position: 'absolute', left: 96, top: 868}}>
				<div style={{display: 'flex', alignItems: 'center', gap: 26}}>
					<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: AMBER_INK, lineHeight: 1.05}}>most hormone loops are negative; birth is one of the few positive ones</div>
					<svg width={420} height={70} viewBox="0 0 420 70"><rect x={0} y={4} width={240} height={26} rx={6} fill={SLATE_INK} opacity={0.7} /><rect x={0} y={40} width={60} height={26} rx={6} fill={MAGENTA} opacity={0.7} /><text x={250} y={62} style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 22}} fill={INK_SOFT}>illustrative</text></svg>
				</div>
			</Enter>
			<div style={{display: 'none'}}>{[AMBER, f, CHAIN, ChainIcon, CervixPair, Hand, Overlay, VIOLET].length}</div>
		</>
	);
};
