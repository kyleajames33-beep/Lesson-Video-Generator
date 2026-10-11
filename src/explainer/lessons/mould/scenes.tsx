import React, {useMemo} from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {
	AMBER, AMBER_INK, BLUE, BLUE_SOFT, Callout, Countdown, DrawPath, Enter, FONT_DISPLAY, FONT_HAND, HandText,
	Hyphae, INK, INK_SOFT, Mark, NUTRIENT, PAPER_DEEP, Plate, SPORE, THREAD, THREAD_DARK, growHyphae, prog, rng, scribbleEllipse, sporeField, usePop,
} from '../../kit';
import lessonData from '../../../../docs/production/fungi-design-reset-2026-10-11/teaching-reset-take02/measured/lesson.json';
import {cues, type CueScene} from '../../cues';
import {CLEAN_BREAD, CLEAN_NAT, GERM_PLATE, MOULD_NAT, MOULD_PLATE, SLICE_CROP} from './assets';

const W = 1920, H = 1080;
const Overlay: React.FC<{children: React.ReactNode}> = ({children}) => (
	<svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} style={{position: 'absolute', inset: 0, overflow: 'visible'}}>{children}</svg>
);
const Heading: React.FC<{text: string; at?: number}> = ({text, at = 4}) => (
	<div style={{position: 'absolute', left: 96, top: 92}}><HandText text={text} at={at} size={84} cps={30} /></div>
);
const Card: React.FC<{x: number; y: number; w: number; at: number; out?: number; children: React.ReactNode; tint?: string}> = ({x, y, w, at, out, children, tint = '#fffdf8'}) => (
	<Enter at={at} out={out} style={{position: 'absolute', left: x, top: y, width: w}}>
		<div style={{background: tint, borderRadius: 22, padding: '26px 30px', boxShadow: '0 18px 40px rgba(60,45,20,0.10), 0 2px 6px rgba(60,45,20,0.06)', border: '1.5px solid rgba(60,45,20,0.08)'}}>{children}</div>
	</Enter>
);
const Body: React.FC<{children: React.ReactNode; size?: number; color?: string; weight?: number}> = ({children, size = 36, color = INK, weight = 500}) => (
	<div style={{fontFamily: FONT_DISPLAY, fontSize: size, fontWeight: weight, color, lineHeight: 1.25}}>{children}</div>
);

// Mouldy slice A and clean slice B
const SliceA: React.FC<{x: number; y: number; w: number; style?: React.CSSProperties}> = ({x, y, w, style}) => (
	<Plate src={MOULD_PLATE} natural={MOULD_NAT} crop={SLICE_CROP} width={w} style={{left: x, top: y, ...style}} />
);
const SliceB: React.FC<{x: number; y: number; w: number; style?: React.CSSProperties}> = ({x, y, w, style}) => (
	<Plate src={CLEAN_BREAD} natural={CLEAN_NAT} crop={[60, 40, 1134, 1180]} width={w} style={{left: x, top: y, ...style}} />
);
/** Patch centre inside a slice of width w placed at (x,y). */
const patchOf = (x: number, y: number, w: number): [number, number] => [x + (390 / 600) * w, y + (320 / 600) * w];

// ---------- 1. Hook ----------
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const slideA = prog(f, 178, 30);
	const ax = interpolate(slideA, [0, 1], [680, 210]);
	const push = interpolate(f, [0, 178], [1, 1.06], {extrapolateRight: 'clamp'});
	const bIn = prog(f, 221, 26);
	const [px, py] = patchOf(ax, 300, 560);
	return (
		<>
			<div style={{position: 'absolute', inset: 0, transform: `scale(${push})`, transformOrigin: `${px}px ${py}px`}}>
				<SliceA x={ax} y={300} w={560} />
				<div style={{opacity: bIn, transform: `translateX(${(1 - bIn) * 260}px)`}}><SliceB x={1150} y={330} w={520} /></div>
				<Overlay>
					<DrawPath d={scribbleEllipse(px, py, 150, 170, 3)} at={41} dur={26} color={AMBER} width={6} />
					<g opacity={prog(f, 140, 14) * (1 - prog(f, 178, 12))}>
						<text x={px + 170} y={py - 150} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 64}} fill={AMBER_INK}>a fungus</text>
					</g>
					<DrawPath d={`M${px + 175},${py - 140} Q${px + 150},${py - 110} ${px + 120},${py - 100}`} at={146} dur={10} color={AMBER_INK} width={4} opacity={1 - prog(f, 178, 12)} />
					{/* the gap */}
					<g opacity={prog(f, 262, 10)}>
						<DrawPath d="M840,620 L1120,620" at={262} dur={22} color={INK_SOFT} width={4} dash="14 14" />
						<DrawPath d="M858,600 L840,620 L858,640 M1102,600 L1120,620 L1102,640" at={278} dur={10} color={INK_SOFT} width={4} />
						<text x={980} y={590} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 50}} fill={INK}>not touching</text>
					</g>
					<text x={420} y={940} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 56}} fill={INK} opacity={prog(f, 200, 12)}>A</text>
					<text x={1400} y={940} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 56}} fill={INK} opacity={bIn}>B</text>
				</Overlay>
			</div>
			<div style={{position: 'absolute', left: 96, top: 96, opacity: prog(f, 0, 10)}}>
				{f < 178 ? <HandText text="That fuzzy patch is alive." at={6} size={80} cps={26} /> : <HandText text="How could it reach bread B?" at={180} size={80} cps={30} />}
			</div>
			<Card x={1260} y={86} w={560} at={340}>
				<div style={{fontFamily: FONT_DISPLAY, fontSize: 24, letterSpacing: 3, color: INK_SOFT, fontWeight: 700}}>OUR EXAMPLE</div>
				<div style={{fontFamily: FONT_DISPLAY, fontStyle: 'italic', fontSize: 50, fontWeight: 700, color: INK, marginTop: 6}}>Rhizopus stolonifer</div>
				<HandText text="common bread mould" at={392} size={44} color={BLUE} />
			</Card>
		</>
	);
};

// ---------- 2. Threads ----------
const LENS = {cx: 1230, cy: 560, r: 330};
export const SceneThreads: React.FC = () => {
	const f = useCurrentFrame();
	const surface = useMemo(() => growHyphae(11, [LENS.cx, LENS.cy - 30], {spread: 300, depth: 6, step: 38, roots: 8, flat: 0.75}), []);
	const into = useMemo(() => growHyphae(29, [LENS.cx, LENS.cy + 40], {spread: 260, depth: 5, step: 34, roots: 6, baseAngle: Math.PI * 0.18, angleSpread: Math.PI * 0.64, down: 10}), []);
	const lensIn = prog(f, 0, 26);
	const pSurface = prog(f, 29, 110);
	const pInto = prog(f, 260, 80);
	const hi = surface.findIndex(s => s.depth === 1 && s.tip[0] > LENS.cx + 60);
	const showHi = f >= 154 && f < 205;
	const allHi = f >= 202 && f < 250;
	const nutrients = sporeField(77, 26);
	const breadTop = LENS.cy + 30;
	return (
		<>
			<Heading text="Close up: a mat of threads" />
			<SliceA x={110} y={330} w={420} />
			<Overlay>
				<defs>
					<clipPath id="lens"><circle cx={LENS.cx} cy={LENS.cy} r={LENS.r * lensIn} /></clipPath>
				</defs>
				{/* zoom cone from the patch to the lens */}
				{(() => { const [px, py] = patchOf(110, 330, 420); return (
					<g opacity={lensIn * 0.9}>
						<DrawPath d={scribbleEllipse(px, py, 70, 80, 5)} at={0} dur={20} color={AMBER} width={5} />
						<DrawPath d={`M${px + 60},${py - 60} L${LENS.cx - 230},${LENS.cy - 240}`} at={6} dur={18} color={AMBER} width={3} />
						<DrawPath d={`M${px + 60},${py + 60} L${LENS.cx - 230},${LENS.cy + 240}`} at={6} dur={18} color={AMBER} width={3} />
					</g>
				); })()}
				<g clipPath="url(#lens)">
					<rect x={LENS.cx - LENS.r} y={LENS.cy - LENS.r} width={LENS.r * 2} height={LENS.r * 2} fill="#fbf6ec" />
					<rect x={LENS.cx - LENS.r} y={breadTop} width={LENS.r * 2} height={LENS.r} fill="#efdcb5" />
					{Array.from({length: 22}, (_, i) => { const r = rng(400 + i); return <ellipse key={i} cx={LENS.cx - 300 + r() * 600} cy={breadTop + 30 + r() * 260} rx={14 + r() * 26} ry={8 + r() * 14} fill="#e2c592" opacity={0.8} />; })}
					<path d={`M${LENS.cx - LENS.r},${breadTop} Q${LENS.cx - 120},${breadTop - 10} ${LENS.cx},${breadTop + 4} T${LENS.cx + LENS.r},${breadTop}`} fill="none" stroke="#c9a46b" strokeWidth={4} />
					<Hyphae segs={into} p={pInto} color={THREAD_DARK} width={3} />
					<Hyphae segs={surface} p={pSurface} color={allHi ? BLUE : THREAD} width={3.4} highlight={showHi ? hi : -1} />
					{/* nutrients rising from the bread into the threads */}
					{f > 340 && nutrients.map(n => {
						const t = ((f - 340) / 70 + n.delay) % 1;
						const x0 = LENS.cx - 230 + n.lane * 460;
						const y = interpolate(t, [0, 1], [breadTop + 250, breadTop + 10]);
						const x = x0 + Math.sin(t * 6 + n.wobble) * 10 + (LENS.cx - x0) * t * 0.35;
						return <circle key={n.i} cx={x} cy={y} r={6} fill={NUTRIENT} opacity={Math.sin(t * Math.PI) * prog(f, 340, 20) * (1 - prog(f, 450, 20))} />;
					})}
				</g>
				<circle cx={LENS.cx} cy={LENS.cy} r={LENS.r * lensIn} fill="none" stroke={INK} strokeWidth={5} />
				{showHi && hi >= 0 ? <Callout from={surface[hi].tip} to={[LENS.cx + LENS.r + 40, LENS.cy - 230]} at={158} text="hypha" sub="one thread" /> : null}
				{f >= 202 && f < 330 ? <Callout from={[LENS.cx + 170, LENS.cy - 150]} to={[LENS.cx + LENS.r + 40, LENS.cy - 230]} at={204} text="hyphae" sub="many threads" /> : null}
				{f >= 262 ? <Callout from={[LENS.cx + 120, breadTop + 150]} to={[LENS.cx + LENS.r + 40, breadTop + 120]} at={268} text="into the bread" color={THREAD_DARK} /> : null}
				{f >= 350 && f < 470 ? <Callout from={[LENS.cx - 190, breadTop + 120]} to={[LENS.cx - LENS.r - 40, breadTop + 230]} at={356} text="nutrients" sub="feed the growth" color={AMBER_INK} align="right" /> : null}
			</Overlay>
			<Card x={110} y={830} w={420} at={486}>
				<svg width={360} height={90} style={{overflow: 'visible'}}>
					<text x={0} y={36} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44}} fill={INK}>growing threads</text>
					<Mark x={330} y={22} at={500} kind="tick" />
					<text x={0} y={86} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44}} fill={INK_SOFT} opacity={prog(f, 552, 12)}>a pile of spores</text>
					<Mark x={330} y={72} at={566} kind="cross" />
				</svg>
			</Card>
		</>
	);
};

// ---------- shared spore-case drawing ----------
const STALKS = [{x: 0, h: 250}, {x: 250, h: 340}, {x: 500, h: 290}];
const SporeCases: React.FC<{ox: number; oy: number; stalkAt: number; headAt: number; burst?: number; cut?: number; mat?: boolean}> = ({ox, oy, stalkAt, headAt, burst = 1e9, cut = 1e9, mat = true}) => {
	const f = useCurrentFrame();
	const matSegs = useMemo(() => growHyphae(5, [ox + 250, oy], {spread: 360, depth: 5, step: 40, baseAngle: 0, angleSpread: Math.PI * 2, flat: 0.18, roots: 8}), [ox, oy]);
	return (
		<g>
			{mat ? <Hyphae segs={matSegs.map(s => ({...s, d: s.d}))} p={1} color={THREAD} width={2.6} /> : null}
			<ellipse cx={ox + 250} cy={oy + 8} rx={430} ry={22} fill="#e6d6b4" opacity={0.6} />
			{STALKS.map((s, i) => {
				const p = prog(f, stalkAt + i * 6, 26);
				const x = ox + s.x, top = oy - s.h * p;
				const pop = usePopSafe(f, headAt + i * 5);
				const isBurst = i === 2;
				const crack = isBurst ? prog(f, burst, 22) : 0;
				const cutaway = i === 1 ? prog(f, cut, 18) : 0;
				const r = 46;
				return (
					<g key={i}>
						<path d={`M${x},${oy} C${x - 14},${oy - s.h * 0.4 * p} ${x + 12},${oy - s.h * 0.7 * p} ${x},${top}`} fill="none" stroke={THREAD_DARK} strokeWidth={9} strokeLinecap="round" />
						{p > 0.95 ? (
							<g transform={`translate(${x},${top - r * 0.85}) scale(${pop})`}>
								{crack > 0 ? (
									<>
										<path d={`M${-r},0 A${r},${r} 0 0 0 ${r},0 Z`} fill={SPORE} />
										<path d={`M${-r},0 A${r},${r} 0 0 1 ${-r * 0.1},${-r}`} fill="none" stroke={SPORE} strokeWidth={13} strokeLinecap="round" transform={`translate(${-34 * crack},${-46 * crack}) rotate(${-50 * crack})`} opacity={1 - crack * 0.6} />
										<path d={`M${r * 0.1},${-r} A${r},${r} 0 0 1 ${r},0`} fill="none" stroke={SPORE} strokeWidth={13} strokeLinecap="round" transform={`translate(${30 * crack},${-52 * crack}) rotate(${46 * crack})`} opacity={1 - crack * 0.6} />
									</>
								) : (
									<>
										<circle r={r} fill={cutaway > 0 ? '#f3e8d2' : SPORE} stroke={SPORE} strokeWidth={cutaway > 0 ? 12 : 0} />
										{Array.from({length: cutaway > 0 ? 34 : 14}, (_, k) => { const rr = rng(90 + k); const a = rr() * Math.PI * 2, d = Math.sqrt(rr()) * (r - 12); return <circle key={k} cx={Math.cos(a) * d} cy={Math.sin(a) * d} r={cutaway > 0 ? 5.5 : 4} fill={cutaway > 0 ? SPORE : '#5a514a'} opacity={cutaway > 0 ? prog(f, cut + 6 + k * 2.2, 6) : 0.8} />; })}
									</>
								)}
							</g>
						) : null}
					</g>
				);
			})}
		</g>
	);
};
// spring needs hooks at top level; use a deterministic eased pop instead
const usePopSafe = (f: number, at: number) => {
	const t = Math.max(0, Math.min(1, (f - at) / 14));
	return t === 0 ? 0 : 1 + Math.sin(t * Math.PI) * 0.18 * (1 - t) - (1 - t) * (1 - t) * 0.6 * (1 - t);
};

// ---------- 3. Spore case ----------
export const SceneSporeCase: React.FC = () => {
	const f = useCurrentFrame();
	const zoomIn = prog(f, 115, 34), zoomOut = prog(f, 530, 30);
	const z = 1 + 1.35 * zoomIn - 1.35 * zoomOut;
	const head: [number, number] = [700 + 250, 820 - 340 - 46 * 0.85];
	const glow = prog(f, 302, 14) * (1 - prog(f, 394, 12));
	return (
		<>
			<Heading text="Up go the spore cases" />
			<div style={{position: 'absolute', inset: 0, transform: `scale(${z})`, transformOrigin: `${head[0]}px ${head[1]}px`}}>
				<Overlay>
					<SporeCases ox={700} oy={820} stalkAt={24} headAt={70} cut={150} />
					{glow > 0 ? (
						<g opacity={glow}>
							<circle cx={head[0] + 14} cy={head[1] - 8} r={13} fill={AMBER} />
							<circle cx={head[0] + 14} cy={head[1] - 8} r={20} fill="none" stroke={AMBER} strokeWidth={3} />
						</g>
					) : null}
				</Overlay>
			</div>
			<Overlay>
				{f >= 40 && f < 140 ? <Callout from={[700, 700]} to={[400, 560]} at={44} text="upright stalks" color={THREAD_DARK} align="right" /> : null}
				{f >= 200 && f < 300 ? (
					<g opacity={prog(f, 200, 12) * (1 - prog(f, 290, 10))}>
						<text x={1460} y={360} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 70}} fill={INK}>many tiny spores</text>
						<text x={1460} y={420} style={{fontFamily: FONT_DISPLAY, fontWeight: 500, fontSize: 34}} fill={INK_SOFT}>reproductive cells</text>
					</g>
				) : null}
				{f >= 305 && f < 400 ? (
					<g opacity={prog(f, 308, 12) * (1 - prog(f, 392, 8))}>
						<text x={1460} y={360} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 64}} fill={AMBER_INK}>one spore can start</text>
						<text x={1460} y={428} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 64}} fill={AMBER_INK}>a new fungus</text>
						<circle cx={1500} cy={520} r={16} fill={SPORE} />
						<DrawPath d="M1514,512 C1560,490 1590,500 1640,470 M1590,494 C1610,520 1640,530 1660,540" at={330} dur={30} color={THREAD_DARK} width={6} />
					</g>
				) : null}
				{f >= 396 && f < 540 ? <Callout from={[head[0] + 96, head[1] - 52]} to={[1460, 330]} at={398} text="sporangium" sub="the rounded spore case" size={62} /> : null}
			</Overlay>
			<Card x={1300} y={300} w={520} at={548}>
				<svg width={460} height={210} style={{overflow: 'visible'}}>
					<circle cx={34} cy={44} r={30} fill="#f3e8d2" stroke={SPORE} strokeWidth={8} />
					{[0, 1, 2, 3, 4, 5].map(k => <circle key={k} cx={22 + (k % 3) * 12} cy={36 + Math.floor(k / 3) * 14} r={4} fill={SPORE} />)}
					<text x={84} y={40} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 46}} fill={BLUE}>sporangium</text>
					<text x={84} y={78} style={{fontFamily: FONT_DISPLAY, fontWeight: 500, fontSize: 30}} fill={INK}>makes the spores</text>
					<g opacity={prog(f, 612, 14)}>
						<circle cx={34} cy={160} r={12} fill={SPORE} />
						<path d="M46,154 C70,140 86,146 110,128" fill="none" stroke={THREAD_DARK} strokeWidth={5} strokeLinecap="round" />
						<text x={130} y={156} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 46}} fill={AMBER_INK}>spore</text>
						<text x={130} y={194} style={{fontFamily: FONT_DISPLAY, fontWeight: 500, fontSize: 30}} fill={INK}>can begin a new fungus</text>
					</g>
				</svg>
			</Card>
		</>
	);
};

// ---------- 4. Release ----------
const AIR = (k: number, x0 = 760, x1 = 1640) => `M${x0},${330 + k * 70} C${x0 + 220},${280 + k * 70} ${x0 + 440},${400 + k * 70} ${x0 + 660},${330 + k * 70} S${x1 - 60},${360 + k * 70} ${x1},${340 + k * 70}`;
export const SceneRelease: React.FC = () => {
	const f = useCurrentFrame();
	const spores = sporeField(31, 40);
	const head: [number, number] = [380 + 500, 860 - 290 - 40];
	const bIn = prog(f, 300, 30);
	return (
		<>
			<Heading text="Spores ride the air" />
			<Overlay>
				<g transform="scale(0.82) translate(60,180)">
					<SporeCases ox={380} oy={860} stalkAt={-200} headAt={-200} burst={70} />
				</g>
				{/* air currents */}
				{[0, 1, 2].map(k => (
					<g key={k} opacity={prog(f, 166 + k * 6, 20) * 0.75}>
						<path d={AIR(k)} fill="none" stroke={BLUE} strokeWidth={4} strokeLinecap="round" strokeDasharray="26 22" strokeDashoffset={-(f - 166) * 3} />
					</g>
				))}
				{f > 166 ? <text x={1000} y={300} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 54}} fill={BLUE} opacity={prog(f, 176, 14)}>moving air</text> : null}
				{/* spores: burst then drift along the air */}
				{f > 100 && spores.map(s => {
					const burstP = prog(f, 104 + s.delay * 18, 26);
					const bx = head[0] * 0.82 + 60 * 0.82 + Math.cos(s.wobble) * 120 * burstP * s.speed;
					const by = (head[1] + 180) * 0.82 + Math.sin(s.wobble) * 90 * burstP * s.speed - 40 * burstP;
					const driftT = Math.max(0, (f - 180 - s.delay * 80) / (260 * s.speed));
					if (driftT <= 0) return <circle key={s.i} cx={bx} cy={by} r={s.size} fill={SPORE} opacity={burstP} />;
					const lane = Math.floor(s.lane * 3);
					const t = Math.min(1, driftT);
					const x = interpolate(t, [0, 1], [bx, 1500 + s.lane * 140]);
					const y = interpolate(t, [0, 1], [by, 360 + lane * 70 + (s.i % 5) * 18]) + Math.sin(t * 9 + s.wobble) * 16;
					const fade = s.i === 7 ? 1 : 1 - prog(f, 470, 30) * 0.7;
					return <circle key={s.i} cx={x} cy={y} r={s.size} fill={SPORE} opacity={fade} />;
				})}
				{/* the landing spore */}
				{f > 440 ? <circle cx={interpolate(prog(f, 440, 30), [0, 1], [1540, 1560])} cy={interpolate(prog(f, 440, 30), [0, 1], [460, 690])} r={10} fill={AMBER} stroke={SPORE} strokeWidth={4} /> : null}
				{f > 470 ? <DrawPath d={scribbleEllipse(1560, 690, 46, 40, 8)} at={470} dur={18} color={AMBER} width={5} /> : null}
				{/* no thread joining */}
				{f > 370 ? (
					<g opacity={prog(f, 370, 10) * (1 - prog(f, 460, 14))}>
						<DrawPath d="M900,900 L1320,900" at={372} dur={20} color={INK_SOFT} width={4} dash="10 14" />
						<Mark x={1110} y={900} at={392} kind="cross" size={50} />
						<text x={1110} y={968} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 46}} fill={INK}>no thread joins them</text>
					</g>
				) : null}
			</Overlay>
			<div style={{opacity: bIn, transform: `translateX(${(1 - bIn) * 200}px)`}}><SliceB x={1360} y={560} w={400} /></div>
			<div style={{position: 'absolute', right: 96, top: 100, display: 'flex', gap: 18}}>
				<Enter at={466}><Chip n="1" text="arrive" done /></Enter>
				<Enter at={541}><Chip n="2" text="grow?" /></Enter>
			</div>
		</>
	);
};
const Chip: React.FC<{n: string; text: string; done?: boolean}> = ({n, text, done}) => (
	<div style={{display: 'flex', alignItems: 'center', gap: 12, background: done ? '#e6f3ea' : '#fffdf8', border: `2px solid ${done ? '#2f8a5b' : PAPER_DEEP}`, borderRadius: 999, padding: '8px 22px 8px 10px'}}>
		<div style={{width: 40, height: 40, borderRadius: 999, background: done ? '#2f8a5b' : AMBER, color: 'white', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 24, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{n}</div>
		<span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44, color: INK}}>{text}</span>
	</div>
);

// ---------- 5. New growth ----------
const Cond: React.FC<{at: number; icon: React.ReactNode; text: string}> = ({at, icon, text}) => {
	const f = useCurrentFrame();
	return (
		<Enter at={at} style={{display: 'flex', alignItems: 'center', gap: 20, marginBottom: 18}}>
			<svg width={64} height={64} style={{overflow: 'visible'}}>{icon}</svg>
			<span style={{fontFamily: FONT_DISPLAY, fontSize: 38, fontWeight: 600, color: INK}}>{text}</span>
			<svg width={50} height={50} style={{overflow: 'visible'}}><Mark x={22} y={24} at={at + 8} /></svg>
		</Enter>
	);
};
export const SceneNewGrowth: React.FC = () => {
	const f = useCurrentFrame();
	const scene = (lessonData as unknown as {scenes: CueScene[]}).scenes.find(x => x.id === 'mould-new-growth')!;
	const c = cues(scene, {branches: 'then branches', route: 'In the route', without: 'without reproductive', asexual: 'asexual reproduction', rhizopus: 'Rhizopus also', alone: 'a spore on its own'});
	const kb = interpolate(f, [0, 360], [1.02, 1.14], {extrapolateRight: 'clamp'});
	const plateOut = prog(f, c.route - 18, 24);
	const net = useMemo(() => growHyphae(52, [1560, 300], {spread: 420, depth: 5, step: 60, baseAngle: -Math.PI * 0.2, angleSpread: Math.PI * 1.2}), []);
	const leftPanel = f < c.route - 8;
	return (
		<>
			<Heading text="Landing, then growing" />
			<div style={{position: 'absolute', left: 70, top: 230, width: 1120, height: 630, overflow: 'hidden', borderRadius: 28, opacity: 1 - plateOut * 0.85}}>
				<div style={{position: 'absolute', inset: 0, transform: `scale(${kb})`, transformOrigin: '52% 52%'}}>
					<Plate src={GERM_PLATE} natural={MOULD_NAT} crop={[0, 0, 1672, 941]} width={1120} style={{left: 0, top: 0}} />
					<svg width={1120} height={630} viewBox="0 0 1672 941" style={{position: 'absolute', inset: 0, overflow: 'visible'}}>
						<Hyphae segs={net} p={prog(f, 360, 70)} color="rgba(225,212,190,0.95)" width={9} />
						{f >= 270 && f < c.route - 8 ? <Callout from={[1300, 370]} to={[1240, 160]} at={276} text="new thread" size={70} color="#1b4f80" align="right" /> : null}
						{f >= c.branches && f < c.route - 8 ? <Callout from={[1420, 380]} to={[1300, 640]} at={c.branches + 4} text="branches" size={70} color="#1b4f80" align="right" /> : null}
					</svg>
				</div>
			</div>
			<div style={{position: 'absolute', left: 1260, top: 250, width: 600}}>
				{leftPanel ? (
					<>
						<Enter at={4}><div style={{fontFamily: FONT_DISPLAY, letterSpacing: 3, fontSize: 24, fontWeight: 700, color: INK_SOFT, marginBottom: 22}}>A SPORE NEEDS</div></Enter>
						<Cond at={10} text="suitable food" icon={<g><rect x={6} y={14} width={52} height={42} rx={14} fill="#efd6a3" stroke="#c98f3e" strokeWidth={4} /></g>} />
						<Cond at={50} text="enough moisture" icon={<path d="M32,6 C46,26 54,36 54,44 A22,22 0 0 1 10,44 C10,36 18,26 32,6Z" fill={BLUE_SOFT} stroke={BLUE} strokeWidth={4} />} />
						<Cond at={90} text="a suitable temperature" icon={<g><rect x={24} y={4} width={16} height={42} rx={8} fill="#fff" stroke="#c4432f" strokeWidth={4} /><circle cx={32} cy={50} r={11} fill="#c4432f" /></g>} />
						<div style={{marginTop: 26}}>
							<HandText text="= germination" at={206} size={78} color={BLUE} />
						</div>
					</>
				) : null}
			</div>
			{/* asexual card */}
			<Card x={1180} y={250} w={660} at={c.route} out={c.rhizopus - 5}>
				<svg width={600} height={330} style={{overflow: 'visible'}}>
					<text x={0} y={40} style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 24, letterSpacing: 3}} fill={INK_SOFT}>THE ROUTE WE FOLLOWED</text>
					{[['parent mould', 0, 214], ['spores', 282, 112], ['new mould', 462, 0]].map(([t, x, w], i) => (
						<g key={t as string} opacity={prog(f, c.route + 44 + i * 18, 12)}>
							<text x={x as number} y={110} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42}} fill={INK}>{t}</text>
							{i < 2 ? <DrawPath d={`M${(x as number) + (w as number) + 8},98 L${(x as number) + (w as number) + 52},98 M${(x as number) + (w as number) + 40},88 L${(x as number) + (w as number) + 52},98 L${(x as number) + (w as number) + 40},108`} at={c.route + 52 + i * 18} dur={10} color={AMBER} width={5} /> : null}
						</g>
					))}
					<g opacity={prog(f, c.without + 3, 12)}>
						<circle cx={60} cy={200} r={26} fill={BLUE_SOFT} stroke={BLUE} strokeWidth={4} />
						<circle cx={118} cy={200} r={26} fill="#fde7c4" stroke={AMBER} strokeWidth={4} />
						<Mark x={89} y={200} at={c.without + 37} kind="cross" size={60} />
						<text x={170} y={212} style={{fontFamily: FONT_DISPLAY, fontWeight: 500, fontSize: 34}} fill={INK}>no reproductive cells join</text>
					</g>
					<g opacity={prog(f, c.asexual - 6, 12)}>
						<text x={0} y={300} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 64}} fill={BLUE}>= asexual reproduction</text>
						<DrawPath d="M0,316 C160,322 380,312 560,318" at={c.asexual + 6} dur={16} color={AMBER} width={6} />
					</g>
				</svg>
			</Card>
			<Card x={1180} y={300} w={660} at={c.rhizopus + 5}>
				<svg width={600} height={250} style={{overflow: 'visible'}}>
					<circle cx={70} cy={110} r={34} fill={SPORE} />
					<text x={92} y={70} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 80}} fill={AMBER_INK} opacity={prog(f, c.alone + 10, 12)}>?</text>
					<text x={140} y={96} style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 32}} fill={INK}>Rhizopus has a sexual route too.</text>
					<text x={140} y={150} style={{fontFamily: FONT_DISPLAY, fontWeight: 500, fontSize: 34}} fill={INK_SOFT} opacity={prog(f, c.alone, 12)}>A spore on its own can't tell</text>
					<text x={140} y={196} style={{fontFamily: FONT_DISPLAY, fontWeight: 500, fontSize: 34}} fill={INK_SOFT} opacity={prog(f, c.alone, 12)}>us how it was made.</text>
				</svg>
			</Card>
		</>
	);
};

// ---------- 6 & 7. Attempt board and feedback ----------
const A_POS = {x: 160, y: 360, w: 430};
const B_POS = {x: 860, y: 390, w: 400};
const Board: React.FC<{mode: 'attempt' | 'feedback'}> = ({mode}) => {
	const f = useCurrentFrame();
	const fb = mode === 'feedback';
	const spores = sporeField(63, 24);
	const [ax, ay] = patchOf(A_POS.x, A_POS.y, A_POS.w);
	const land: [number, number] = [B_POS.x + 220, B_POS.y + 230];
	const colony = useMemo(() => growHyphae(88, land, {spread: 120, depth: 4, step: 22}), []);
	const air = (k: number) => `M${ax + 40},${ay - 120 - k * 50} C${ax + 220},${ay - 230 - k * 50} ${land[0] - 260},${ay - 200 - k * 40} ${land[0] - 20},${land[1] - 190 - k * 40}`;
	const airAt = fb ? 168 : 330;
	return (
		<>
			<SliceA x={A_POS.x} y={A_POS.y} w={A_POS.w} />
			<SliceB x={B_POS.x} y={B_POS.y} w={B_POS.w} />
			<Overlay>
				<text x={A_POS.x + A_POS.w / 2} y={A_POS.y + 500} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 64}} fill={INK}>A</text>
				<text x={B_POS.x + B_POS.w / 2} y={B_POS.y + 480} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 64}} fill={INK}>B</text>
				{!fb ? <DrawPath d={scribbleEllipse(ax, ay, 110, 120, 12)} at={124} dur={20} color={AMBER} width={5} /> : null}
				{!fb && f > 120 ? <text x={A_POS.x + 30} y={A_POS.y - 28} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40}} fill={AMBER_INK} opacity={prog(f, 134, 12)}>mature spore cases</text> : null}
				{[0, 1].map(k => (
					<path key={k} d={air(k)} fill="none" stroke={BLUE} strokeWidth={4} strokeLinecap="round" strokeDasharray="22 20" strokeDashoffset={-(f - airAt) * 3} opacity={prog(f, airAt + k * 6, 18) * 0.7} />
				))}
				{f > airAt ? <text x={(ax + land[0]) / 2 - 60} y={ay - 250} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 46}} fill={BLUE} opacity={prog(f, airAt + 10, 12)}>shared moving air</text> : null}
				{!fb ? (
					<g opacity={prog(f, 290, 10)}>
						<DrawPath d={`M${A_POS.x + A_POS.w + 20},${B_POS.y + 420} L${B_POS.x - 20},${B_POS.y + 420}`} at={290} dur={16} color={INK_SOFT} width={4} dash="10 12" />
						<text x={(A_POS.x + A_POS.w + B_POS.x) / 2} y={B_POS.y + 400} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 38}} fill={INK_SOFT}>not touching</text>
					</g>
				) : null}
				{/* feedback: spores released, carried, landing */}
				{fb && f > 74 && spores.map(s => {
					const burst = prog(f, 78 + s.delay * 30, 24);
					const sx = ax + Math.cos(s.wobble) * 70 * burst, sy = ay - 60 + Math.sin(s.wobble) * 50 * burst - 40 * burst;
					const t = Math.max(0, Math.min(1, (f - 180 - s.delay * 50) / 120));
					const x = interpolate(t, [0, 1], [sx, land[0] - 100 + s.lane * 200]);
					const y = interpolate(t, [0, 1], [sy, land[1] - 160 + (s.i % 6) * 22]) - Math.sin(t * Math.PI) * 160 + Math.sin(t * 8 + s.wobble) * 10;
					return <circle key={s.i} cx={x} cy={y} r={s.size} fill={SPORE} opacity={burst * (s.i === 3 ? 0 : 1 - prog(f, 300, 30) * 0.8)} />;
				})}
				{fb && f > 262 ? <circle cx={land[0]} cy={interpolate(prog(f, 262, 30), [0, 1], [land[1] - 160, land[1]])} r={11} fill={AMBER} stroke={SPORE} strokeWidth={4} /> : null}
				{fb && f > 292 ? <DrawPath d={scribbleEllipse(land[0], land[1], 52, 44, 21)} at={292} dur={18} color={AMBER} width={5} /> : null}
				{fb && f > 317 ? (
					<g opacity={prog(f, 317, 12) * (1 - prog(f, 470, 14))}>
						<path d={`M${land[0] - 110},${land[1] - 120} c10,16 16,24 16,30 a16,16 0 0 1 -32,0 c0,-6 6,-14 16,-30z`} fill={BLUE_SOFT} stroke={BLUE} strokeWidth={3} />
						<circle cx={land[0] + 110} cy={land[1] - 100} r={12} fill={NUTRIENT} />
						<circle cx={land[0] + 132} cy={land[1] - 84} r={8} fill={NUTRIENT} />
					</g>
				) : null}
				{fb ? <Hyphae segs={colony} p={prog(f, 476, 150)} color={THREAD_DARK} width={3} /> : null}
			</Overlay>
		</>
	);
};

const CondChip: React.FC<{at: number; text: string}> = ({at, text}) => (
	<Enter at={at} style={{display: 'inline-block', marginRight: 10, marginBottom: 10}}>
		<span style={{fontFamily: FONT_DISPLAY, fontSize: 28, fontWeight: 600, color: BLUE, background: BLUE_SOFT, borderRadius: 999, padding: '8px 18px'}}>{text}</span>
	</Enter>
);

export const SceneAttempt: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<>
			<Heading text="Your turn" />
			<Board mode="attempt" />
			<div style={{position: 'absolute', left: 860, top: 900, width: 520}}>
				<CondChip at={386} text="moist" />
				<CondChip at={424} text="nutrients" />
				<CondChip at={462} text="suitable temperature" />
			</div>
			<Card x={1310} y={250} w={540} at={512}>
				<Body size={38} weight={700}>How could mould reach B?</Body>
				<div style={{height: 14}} />
				<Enter at={574}><Body size={38} weight={700}>What would begin growing there?</Body></Enter>
				<div style={{height: 22}} />
				<Enter at={640}>
					<div style={{fontFamily: FONT_HAND, fontSize: 46, fontWeight: 700, color: AMBER_INK}}>Explain the two steps</div>
					<div style={{fontFamily: FONT_HAND, fontSize: 42, fontWeight: 700, color: INK_SOFT, marginTop: 8}}>1. ____________</div>
					<div style={{fontFamily: FONT_HAND, fontSize: 42, fontWeight: 700, color: INK_SOFT}}>2. ____________</div>
				</Enter>
			</Card>
			<Overlay><Countdown start={706} end={1170} x={1590} y={850} r={62} /></Overlay>
		</>
	);
};

export const SceneFeedback: React.FC = () => (
	<>
		<Heading text="Here's how" />
		<Board mode="feedback" />
		<Card x={1310} y={250} w={540} at={6}>
			<Step n="1" at={150} title="Spores travel" text="Spore cases on A release spores. Moving air carries some to B." />
			<div style={{height: 22}} />
			<Step n="2" at={470} title="A thread grows" text="On moist bread at a suitable temperature, a landed spore germinates and branches into a new colony." />
		</Card>
	</>
);
const Step: React.FC<{n: string; at: number; title: string; text: string}> = ({n, at, title, text}) => (
	<Enter at={at}>
		<div style={{display: 'flex', gap: 16}}>
			<div style={{flex: 'none', width: 46, height: 46, borderRadius: 999, background: '#2f8a5b', color: 'white', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 26, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{n}</div>
			<div>
				<div style={{fontFamily: FONT_HAND, fontSize: 50, fontWeight: 700, color: INK, lineHeight: 1}}>{title}</div>
				<Body size={29} color={INK_SOFT}>{text}</Body>
			</div>
		</div>
	</Enter>
);

// ---------- 8. Memory ----------
export const SceneMemory: React.FC = () => {
	const f = useCurrentFrame();
	const mini = useMemo(() => growHyphae(14, [520, 470], {spread: 150, depth: 4, step: 30}), []);
	const drift = sporeField(5, 14);
	return (
		<>
			<Heading text="One line to remember" />
			<Overlay>
				<Hyphae segs={mini} p={prog(f, 60, 60)} color={THREAD_DARK} width={4} />
				{f > 150 && Array.from({length: 10}, (_, i) => { const t = ((f - 150) / 50 + i / 10) % 1; return <circle key={i} cx={520 + Math.cos(i) * 150 * (1 - t)} cy={470 + Math.sin(i * 1.7) * 120 * (1 - t)} r={7} fill={NUTRIENT} opacity={Math.sin(t * Math.PI)} />; })}
				{f > 100 && drift.map(s => { const t = ((f - 100) / 90 + s.delay) % 1; return <circle key={s.i} cx={1250 + t * 420} cy={430 + s.lane * 120 + Math.sin(t * 8 + s.wobble) * 18} r={s.size} fill={SPORE} opacity={Math.sin(t * Math.PI)} />; })}
				{f > 100 ? [0, 1].map(k => <path key={k} d={`M1220,${440 + k * 90} C1320,${400 + k * 90} 1440,${500 + k * 90} 1700,${440 + k * 90}`} fill="none" stroke={BLUE} strokeWidth={4} strokeDasharray="22 20" strokeDashoffset={-(f - 100) * 3} opacity={0.5 * prog(f, 100, 16)} />) : null}
			</Overlay>
			<div style={{position: 'absolute', left: 300, top: 640, width: 520, textAlign: 'center'}}>
				<HandText text="Threads feed." at={64} size={110} cps={16} />
				<Enter at={158} style={{marginTop: 26}}><Body size={32} color={INK_SOFT}>They take in nutrients where the fungus grows.</Body></Enter>
			</div>
			<div style={{position: 'absolute', left: 1180, top: 640, width: 560, textAlign: 'center'}}>
				<HandText text="Spores spread." at={100} size={110} cps={16} color={BLUE} />
				<Enter at={256} style={{marginTop: 26}}><Body size={32} color={INK_SOFT}>They carry the fungus to a new place.</Body></Enter>
			</div>
			<Overlay>
				<DrawPath d="M330,770 C460,778 620,766 780,774" at={86} dur={14} color={AMBER} width={7} />
				<DrawPath d="M1220,770 C1360,778 1540,766 1700,774" at={124} dur={14} color={AMBER} width={7} />
			</Overlay>
			<Enter at={380} out={612} style={{position: 'absolute', left: 0, right: 0, top: 920, textAlign: 'center'}}>
				<span style={{fontFamily: FONT_HAND, fontSize: 52, fontWeight: 700, color: INK}}>no reproductive cells joining </span>
				<span style={{fontFamily: FONT_HAND, fontSize: 52, fontWeight: 700, color: BLUE}}>= asexual</span>
			</Enter>
			<Enter at={620} style={{position: 'absolute', right: 96, top: 110}}>
				<div style={{display: 'flex', alignItems: 'center', gap: 16, background: '#fffdf8', borderRadius: 999, padding: '10px 26px', boxShadow: '0 10px 24px rgba(60,45,20,0.1)'}}>
					<svg width={70} height={50}><circle cx={26} cy={26} r={20} fill="#f3e2b8" stroke={THREAD_DARK} strokeWidth={3} /><circle cx={52} cy={20} r={11} fill="#f3e2b8" stroke={THREAD_DARK} strokeWidth={3} /></svg>
					<span style={{fontFamily: FONT_HAND, fontSize: 44, fontWeight: 700, color: INK}}>Next: yeast budding</span>
				</div>
			</Enter>
		</>
	);
};

// ---------- 9. Key notes ----------
const NOTES = [
	'Bread mould (Rhizopus) is a fungus made of branching threads called hyphae. They grow into the food and take in nutrients.',
	'Spores form inside a sporangium, a rounded case on an upright stalk.',
	'Moving air carries released spores. On moist food at a suitable temperature, a spore germinates and grows a new thread.',
	'In this route, no reproductive cells join, so it is asexual reproduction.',
];
export const SceneNotes: React.FC = () => (
	<>
		<div style={{position: 'absolute', left: 96, top: 92}}><HandText text="Key notes: what to write in your book" at={2} size={72} cps={40} /></div>
		<div style={{position: 'absolute', left: 140, top: 250, width: 1500}}>
			{NOTES.map((n, i) => (
				<Enter key={i} at={14 + i * 10} style={{display: 'flex', gap: 22, marginBottom: 30}}>
					<div style={{flex: 'none', width: 18, height: 18, marginTop: 16, borderRadius: 999, background: AMBER}} />
					<Body size={40}>{n}</Body>
				</Enter>
			))}
			<Enter at={60}><div style={{fontFamily: FONT_HAND, fontSize: 44, fontWeight: 700, color: AMBER_INK, marginTop: 20}}>Pause the video if you need more time to copy.</div></Enter>
		</div>
	</>
);
