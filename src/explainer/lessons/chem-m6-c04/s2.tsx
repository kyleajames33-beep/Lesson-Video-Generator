// M6 C04 scenes 6 to 10: acid rain from the chimney, the scrubber, acid mine drainage, hydrated lime treatment,
// and the memory aid.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {cues} from '../../cues';
import {Heading, sc} from './common';
import {AMD, FEOH3, SCRUB, SOIL} from './assets';
import {DUCT, Grid, gridGeom} from './s1';
import {
	AChip, AMBER, BASE_INK, CROSS, ChoiceCard, DrawPath, Droplet, EqLine, Fade, HEAT_INK, HTok, INK, INK_SOFT, LensFrame, MetalTok, Note, OHTok, Overlay, PHBar, PicH, Pieces, PlateAt, PlateCrop,
	Proton, PROTON_INK, Rain, Ring, Rust, RUST_INK, SO2, Sx, TEAL, TTile, WTok, cropH, cropPt, eSpan, eq, fitSize, keys, lerp, natPt, picW, smooth, vis, wob,
} from './parts';
import type {Piece} from './parts';

const LENS_BG = '#eef6fb';

// ---------- 6. The chimney: where acid rain comes from ----------
const H6 = 'acid-rain';
const K6 = cues(sc(H6), {coal: 'Coal contains', burns: 'the coal burns', so2: 'sulfur dioxide gas', air: 'In the air', dissolves: 'dissolves in water', sulfurous: 'sulfurous acid', oxid: 'oxidised further', sulfuric: 'sulfuric acid', rain: 'acid rain', lowers: 'lowers the pH', lakes: 'lakes and streams', eats: 'eats away limestone'});
export const SceneAcidRain: React.FC = () => {
	const f = useCurrentFrame();
	const D = {x: 96, y: 330, w: 640};
	const smoke = cropPt(DUCT, D.x, D.y, D.w, 420, 1080);
	const drop = {x: 880, y: 340, r: 78};
	const up = smooth(prog(f, K6.so2 - 10, 60));
	const into = smooth(prog(f, K6.dissolves, 30));
	const mx = lerp(lerp(smoke[0], 620, up), drop.x, into), my = lerp(lerp(smoke[1], 300, up), drop.y + 10, into);
	const tint = prog(f, K6.sulfurous, 20);
	const lake = {cx: 1160, cy: 820, rx: 230, ry: 62};
	const blk = {x: 1500, y: 680, w: 270, h: 180};
	const lph = keys([[K6.lowers, 6.5], [K6.lowers + 50, 4.5]]);
	const bite = prog(f, K6.eats + 10, 30);
	return (
		<>
			<Heading text="The chimney: where acid rain comes from" at={4} size={56} />
			<Overlay>
				<ChoiceCard at={-100} />
				<PlateCrop p={SCRUB} r={DUCT} x={D.x} y={D.y} w={D.w} fadeRight={0.2} />
				<Note x={D.x + D.w / 2} y={D.y + cropH(DUCT, D.w) + 56} text="coal smoke: a little sulfur" size={34} color={INK_SOFT} anchor="middle" at={K6.coal} out={K6.rain} />
				<Droplet x={drop.x} y={drop.y} r={drop.r} at={K6.air} fill={tint > 0.5 ? '#efeccf' : '#e4f0f8'} />
				<SO2 x={mx} y={my} s={1.05} o={prog(f, K6.so2 - 10, 12)} />
				<Note x={mx} y={my - 50} text="SO_2" size={34} color={INK} anchor="middle" hand={false} at={K6.so2} out={K6.dissolves} />
				<Sx x={1000} y={320} text="SO_2 + H_2O → H_2SO_3" size={40} color={INK} weight={700} at={K6.sulfurous} />
				<Sx x={1000} y={384} text="→ H_2SO_4 (oxidised in air)" size={36} color={INK_SOFT} weight={600} at={K6.sulfuric} />
				<Rain x={960} y={430} w={820} h={330} at={K6.rain} until={K6.eats + 80} n={18} drops />
				<Fade at={K6.rain - 6}>
					<ellipse cx={lake.cx} cy={lake.cy} rx={lake.rx} ry={lake.ry} fill="#d7e9f5" stroke="#4f86ad" strokeWidth={4} />
					<Sx x={lake.cx} y={lake.cy + 12} text="lake" size={30} color="#4f86ad" anchor="middle" hand at={-1000} />
					<rect x={blk.x} y={blk.y} width={blk.w} height={blk.h} rx={10} fill="#e8e4dc" stroke={INK} strokeWidth={4} />
					{[0, 1, 2].map(i => <line key={i} x1={blk.x + 20} y1={blk.y + 50 + i * 45} x2={blk.x + blk.w - 20} y2={blk.y + 50 + i * 45} stroke="#c9c3b8" strokeWidth={3} />)}
					<Sx x={blk.x + blk.w / 2} y={blk.y + blk.h + 44} text="limestone" size={30} color={INK_SOFT} anchor="middle" hand at={-1000} />
				</Fade>
				{bite > 0.01 ? <path d={`M${blk.x + blk.w - 70},${blk.y - 2} q15,${28 * bite} 35,${18 * bite} q14,${22 * bite} 37,${30 * bite} L${blk.x + blk.w + 2},${blk.y - 2} Z`} fill="#f6f1e7" stroke="none" /> : null}
				<Ring cx={blk.x + blk.w - 40} cy={blk.y + 20} rx={70} ry={50} at={K6.eats} color={AMBER} seed={3} />
				<Note x={blk.x + blk.w / 2} y={blk.y - 70} text="limestone eaten away" size={34} color={AMBER} anchor="middle" at={K6.eats + 10} />
				<PHBar x={lake.cx - 200} y={930} w={400} at={K6.lowers - 10} marks={[{v: lph, at: K6.lowers - 10}]} ticks={[0, 7, 14]} h={22} />
				{void K6.burns}{void K6.oxid}{void K6.lakes}
			</Overlay>
		</>
	);
};

// ---------- 7. The scrubber: an acidic oxide meets a base ----------
const H7 = 'scrubber';
const K7 = cues(sc(H7), {remove: 'remove it before', scrubber: 'in a scrubber', exhaust: 'The exhaust gas', spray: 'a spray of calcium', slurry: 'hydroxide slurry', solidbase: 'a solid base', caoh: 'Calcium hydroxide plus', caso3: 'calcium sulfite and water', noh: 'has no hydrogen', cant: "can't donate a proton", acidic: 'an acidic oxide', nonmetal: 'a non-metal oxide', inslurry: "In the slurry's water", sulfurous: 'makes sulfurous acid', neut: 'the hydroxide neutralises', solid: 'is a solid', collected: "it's collected", gypsum: 'turned into gypsum'});
export const SceneScrubber: React.FC = () => {
	const f = useCurrentFrame();
	const S = {x: 96, y: 210, h: 780};
	const P = (nx: number, ny: number) => natPt(SCRUB, S.x, S.y, S.h, nx, ny);
	const path = [P(560, 1170), P(1000, 1170), P(1200, 1280), P(1200, 700), P(1195, 440), P(1255, 250)];
	const d = `M${path[0][0]},${path[0][1]} L${path[1][0]},${path[1][1]} Q${path[2][0] - 40},${path[2][1]} ${path[2][0]},${path[2][1] - 60} L${path[3][0]},${path[3][1]} L${path[4][0]},${path[4][1]} L${path[5][0]},${path[5][1]}`;
	const end = path[5];
	const items = eq(['Ca(OH)_2', '+', 'SO_2(g)', '->', 'CaSO_3(s)', '+', 'H_2O(l)'], [K7.caoh, K7.caoh + 30, K7.caoh + 40, K7.caso3 - 10, K7.caso3, K7.caso3 + 30, K7.caso3 + 34]);
	const ES = fitSize(items, 960, 50), EX = 850, EY = 330;
	const so2 = eSpan(items, 2, ES, EX);
	const L = {cx: 1360, cy: 730, r: 170};
	const m1 = smooth(prog(f, K7.inslurry + 20, 30));
	const acid = f >= K7.sulfurous;
	const hop = (i: number) => smooth(prog(f, K7.neut + i * 14, 24));
	const pool = P(1160, 1570);
	return (
		<>
			<Heading text="The scrubber" at={4} size={56} />
			<Overlay>
				<ChoiceCard at={-100} lit={[[3, K7.solid, 2000]]} />
				<PlateAt p={SCRUB} x={S.x} y={S.y} h={S.h} at={0} />
				<DrawPath d={d} at={K7.scrubber} dur={70} color={TEAL} width={6} dash="14 10" />
				<path d={`M${end[0] - 16},${end[1] + 12} L${end[0]},${end[1]} L${end[0] - 4},${end[1] + 20}`} fill="none" stroke={TEAL} strokeWidth={6} strokeLinecap="round" opacity={prog(f, K7.scrubber + 66, 8)} />
				<Ring cx={P(1200, 960)[0]} cy={P(1200, 960)[1]} rx={130} ry={90} at={K7.slurry} out={K7.caoh + 20} color={AMBER} seed={5} />
				<Note x={EX} y={470} text="Ca(OH)_2 slurry: a solid base in water" size={38} color={AMBER} at={K7.slurry + 6} out={K7.caoh} />
				<EqLine items={items} x={EX} y={EY} size={ES} />
				<Ring cx={so2.cx} cy={EY - ES * 0.32} rx={(so2.x2 - so2.x1) / 2 + 16} ry={ES * 0.7} at={K7.noh} out={K7.acidic + 20} color={TEAL} seed={4} />
				<Fade at={K7.cant} out={K7.acidic}>
					<Proton x={so2.cx} y={EY + 70} s={1} dashed />
					<DrawPath d={`M${so2.cx - 22},${EY + 48} L${so2.cx + 22},${EY + 92}`} at={K7.cant + 10} dur={8} color={CROSS} width={6} />
					<DrawPath d={`M${so2.cx + 22},${EY + 48} L${so2.cx - 22},${EY + 92}`} at={K7.cant + 16} dur={8} color={CROSS} width={6} />
				</Fade>
				<Note x={EX} y={500} text="SO_2: no H of its own" size={40} color={TEAL} at={K7.noh + 10} out={K7.acidic} />
				<Sx x={EX} y={500} text="acidic oxide" size={52} color={INK} hand at={K7.acidic} out={K7.inslurry} />
				<Sx x={EX} y={556} text="a non-metal oxide that makes an acid in water" size={34} color={INK_SOFT} weight={600} at={K7.nonmetal} out={K7.inslurry} />
				<Sx x={EX} y={600} text="and reacts with bases to make a salt" size={34} color={INK_SOFT} weight={600} at={K7.nonmetal + 30} out={K7.inslurry} />
				<Note x={EX} y={500} text="SO_2 + H_2O → H_2SO_3, then neutralised" size={36} color={TEAL} hand={false} at={K7.inslurry + 6} out={K7.solid} />
				<LensFrame cx={L.cx} cy={L.cy} r={L.r} at={K7.inslurry - 6} out={K7.solid} title="a slurry droplet" titleAt={K7.inslurry}>
					<rect x={L.cx - L.r} y={L.cy - L.r} width={2 * L.r} height={2 * L.r} fill={LENS_BG} />
					{!acid ? <SO2 x={lerp(L.cx - 110, L.cx - 20, m1)} y={L.cy - 20} s={0.9} /> : null}
					{!acid ? <WTok x={lerp(L.cx + 100, L.cx + 40, m1)} y={L.cy - 20} s={0.9} /> : null}
					{acid ? <g opacity={1 - prog(f, K7.neut + 30, 14)}><rect x={L.cx - 70} y={L.cy - 56} width={140} height={60} rx={14} fill="#fffdf8" stroke={INK} strokeWidth={3} /><Sx x={L.cx} y={L.cy - 14} text="H_2SO_3" size={32} color={INK} anchor="middle" weight={800} at={-1000} /></g> : null}
					{[0, 1].map(i => {
						const h = hop(i);
						const ox = L.cx - 70 + i * 140, oy = L.cy + 80;
						const done = h >= 0.999;
						return (
							<g key={i}>
								{acid && !done ? <Proton x={lerp(L.cx - 30 + i * 60, ox, h)} y={lerp(L.cy - 70, oy - 30, h)} s={0.8} /> : null}
								{acid && !done ? <OHTok x={ox} y={oy} /> : null}
								{done ? <WTok x={ox} y={oy - 10} pop={1 + 0.3 * (1 - smooth(prog(f, K7.neut + i * 14 + 24, 12)))} /> : null}
								{!acid ? <OHTok x={ox} y={oy} o={prog(f, K7.inslurry + 10, 12)} /> : null}
							</g>
						);
					})}
				</LensFrame>
				<Ring cx={pool[0]} cy={pool[1]} rx={140} ry={66} at={K7.solid} color={AMBER} seed={7} />
				{Array.from({length: 10}, (_, i) => {
					const t = smooth(prog(f, K7.solid + 6 + i * 5, 40));
					const x = pool[0] - 110 + ((i * 67) % 220);
					return t > 0.01 ? <circle key={i} cx={x} cy={pool[1] - 90 + t * (70 + (i % 4) * 14)} r={6} fill="#ffffff" stroke={INK_SOFT} strokeWidth={1.5} opacity={t} /> : null;
				})}
				<Note x={EX} y={880} text="CaSO_3(s) collected → gypsum" size={40} color={INK} at={K7.collected} />
				{void K7.remove}{void K7.exhaust}{void K7.spray}{void K7.solidbase}{void K7.gypsum}{void HTok}{void PROTON_INK}
			</Overlay>
		</>
	);
};

// ---------- 8. The orange creek: acid mine drainage ----------
const H8 = 'mine-drainage';
const K8 = cues(sc(H8), {mining: 'When mining exposes', fes: 'iron sulfide', sulf: 'sulfuric acid', iron: 'dissolved iron ions', amd: 'acid mine drainage', ph3: 'pH three or lower', river: 'In a river', harms: 'harms fish', toxic: 'toxic metals dissolved', take: 'take them up'});
export const AMDP = {x: 96, y: 300, h: 500};
export const SceneMine: React.FC = () => {
	const f = useCurrentFrame();
	const P = (nx: number, ny: number) => natPt(AMD, AMDP.x, AMDP.y, AMDP.h, nx, ny);
	const L = {cx: 1380, cy: 480, r: 220};
	const src = P(1000, 1170);
	const ph = keys([[K8.ph3 - 30, 6], [K8.ph3 + 20, 3]]);
	const hs: [number, number][] = [[-0.6, -0.5], [0.1, -0.7], [0.6, -0.3], [-0.7, 0.3], [0.5, 0.5], [-0.1, 0.65]];
	const fe: [number, number][] = [[-0.25, -0.05], [0.3, 0.15], [-0.3, 0.55]];
	const creek: [number, number][] = [[560, 930], [860, 1080], [1180, 1240], [1580, 1370]];
	const along = (t: number): [number, number] => {
		const s = Math.max(0, Math.min(0.999, t)) * (creek.length - 1);
		const i = Math.floor(s), u = s - i;
		return P(lerp(creek[i][0], creek[i + 1][0], u), lerp(creek[i][1], creek[i + 1][1], u));
	};
	const weed = P(1460, 1300);
	return (
		<>
			<Heading text="The orange creek" at={4} size={56} />
			<Overlay>
				<ChoiceCard at={-100} />
				<PlateAt p={AMD} x={AMDP.x} y={AMDP.y} h={AMDP.h} at={0} />
				<Sx x={560} y={290} text="iron sulfide + air + water → H_2SO_4" size={36} color={INK} anchor="middle" weight={700} at={K8.sulf} />
				<Fade at={K8.sulf + 10}><path d={`M${src[0]},${src[1]} L${L.cx - L.r * 0.92},${L.cy + L.r * 0.4}`} stroke={INK_SOFT} strokeWidth={3} strokeDasharray="8 6" /></Fade>
				<circle cx={src[0]} cy={src[1]} r={10} fill="none" stroke={INK_SOFT} strokeWidth={3} opacity={prog(f, K8.sulf + 10, 10)} />
				<LensFrame cx={L.cx} cy={L.cy} r={L.r} at={K8.sulf + 6} title="the creek water" titleAt={K8.sulf + 16}>
					<rect x={L.cx - L.r} y={L.cy - L.r} width={2 * L.r} height={2 * L.r} fill="#f8e6d6" />
					{hs.map(([u, v], i) => { const [dx, dy] = wob(f, i * 1.7); return <HTok key={i} x={L.cx + u * L.r * 0.75 + dx} y={L.cy + v * L.r * 0.75 + dy} s={0.9} o={prog(f, K8.sulf + 20 + i * 6, 12)} />; })}
					{fe.map(([u, v], i) => { const [dx, dy] = wob(f, i * 2.9 + 1); return <MetalTok key={i} x={L.cx + u * L.r * 0.75 + dx} y={L.cy + v * L.r * 0.75 + dy} label="Fe^{3+}" s={1} o={prog(f, K8.iron + i * 8, 12)} />; })}
				</LensFrame>
				<PHBar x={1060} y={850} w={720} at={K8.amd} marks={[{v: ph, at: K8.amd, label: f > K8.ph3 + 10 ? 'pH 3 or lower' : undefined, color: CROSS}]} />
				{/* metals carried downstream, past water weed */}
				<g opacity={prog(f, K8.toxic - 10, 14)} stroke="#6f7f5a" strokeWidth={4} strokeLinecap="round" fill="none">
					{[-22, -8, 6, 20].map((dx, i) => <path key={i} d={`M${weed[0] + dx},${weed[1] + 30} Q${weed[0] + dx + 10},${weed[1] - 10} ${weed[0] + dx - 4},${weed[1] - 46 - (i % 2) * 14}`} />)}
				</g>
				{[0, 1, 2, 3].map(i => {
					const t = (f - K8.toxic - i * 22) / 120;
					if (t <= 0) return null;
					const [x, y] = along(t % 1);
					return <MetalTok key={i} x={x} y={y - 16} label="M^{n+}" s={0.7} o={Math.min(1, t * 4)} />;
				})}
				<Note x={AMDP.x} y={AMDP.y + AMDP.h + 70} text="harms river life; metals stay dissolved" size={38} color={CROSS} at={K8.toxic + 10} />
				{void K8.mining}{void K8.fes}{void K8.river}{void K8.harms}{void K8.take}{void picW}
			</Overlay>
		</>
	);
};

// ---------- 9. Hydrated lime treatment: neutralise and precipitate ----------
const H9 = 'lime-treatment';
const K9 = cues(sc(H9), {hyd: 'add hydrated lime', ohions: 'Its hydroxide ions', neut: 'neutralise the hydrogen', rises: 'as the pH rises', meet: 'metal ions meet', insol: 'insoluble hydroxides', rust: 'rust brown iron', seen: "you've seen before", sludge: 'as sludge', removes: 'removes the metals', whynot: 'Why not limestone', slowly: 'works slowly', stops: 'stops near neutral', higher: 'at a higher pH', hydl: 'Hydrated lime dissolves', faster: 'acts faster', dose: 'controls the dose', waste: "Waste that's", toobasic: 'too basic', cement: 'cement works', acid: 'with an acid', co2: 'carbon dioxide'});
export const SceneLimeTreat: React.FC = () => {
	const f = useCurrentFrame();
	const L = {cx: 500, cy: 540, r: 300};
	const R = L.r * 0.72;
	const hs: [number, number][] = [[-0.7, -0.55], [0.0, -0.75], [0.65, -0.5], [-0.8, 0.05], [0.75, 0.05], [0.05, -0.2]];
	const fe: [number, number][] = [[-0.4, 0.3], [0.35, 0.35], [-0.02, 0.55]];
	const floor = L.cy + L.r * 0.78;
	const settle = smooth(prog(f, K9.sludge - 20, 40));
	const ph = keys([[K9.rises - 20, 3], [K9.rises + 40, 6.5], [K9.insol + 20, 8.5]]);
	const dimStrips = prog(f, K9.removes + 10, 16);
	const toWhy = prog(f, K9.whynot - 6, 14);
	return (
		<>
			<Heading text="Treating the creek: hydrated lime" at={4} size={56} />
			<Overlay>
				<ChoiceCard at={-100} lit={[[3, K9.removes, K9.whynot], [2, K9.dose, 2000]]} dial={K9.dose} />
				<LensFrame cx={L.cx} cy={L.cy} r={L.r} at={0} title="the drainage water">
					<rect x={L.cx - L.r} y={L.cy - L.r} width={2 * L.r} height={2 * L.r} fill="#f8e6d6" />
					<rect x={L.cx - L.r} y={floor - 30 * settle} width={2 * L.r} height={L.r} fill={RUST_INK} opacity={0.55 * settle} />
					{hs.map(([u, v], i) => {
						const at = K9.neut - 30 + i * 12;
						const hx = L.cx + u * R, hy = L.cy + v * R;
						const m = smooth(prog(f, at, 24));
						const ox = lerp(hx + 20, hx + 22, m), oy = lerp(L.cy - L.r - 40, hy, m);
						const [dx, dy] = wob(f, i * 1.6);
						if (f < at + 24) return <g key={i}><HTok x={hx + dx * (1 - m)} y={hy + dy * (1 - m)} s={0.9} /><OHTok x={ox} y={oy} s={0.9} o={prog(f, K9.ohions + i * 4, 10)} /></g>;
						return <WTok key={i} x={hx + 10} y={hy} s={0.9} o={1 - prog(f, at + 70, 20)} />;
					})}
					{fe.map(([u, v], i) => {
						const fx = L.cx + u * R, fy = L.cy + v * R;
						const at = K9.insol - 10 + i * 18;
						const g = smooth(prog(f, at, 26));
						const fall = smooth(prog(f, at + 40, 50)) * (floor - 40 - fy) * (0.6 + 0.4 * settle);
						const [dx, dy] = wob(f, i * 2.4 + 3);
						return (
							<g key={i}>
								{f < at + 26 ? <MetalTok x={fx + dx} y={fy + dy} label="Fe^{3+}" s={0.95} /> : null}
								{f < at + 26 ? [0, 1, 2].map(k => {
									const a = (k / 3) * Math.PI * 2 - Math.PI / 2;
									const sx = L.cx + (i - 1) * 190 + (k - 1) * 60, sy = L.cy - L.r * 0.62 + (k % 2) * 40;
									return <OHTok key={k} x={lerp(sx, fx + Math.cos(a) * 44, smooth(prog(f, K9.meet + i * 10, 40)) * 0.6 + 0.4 * g)} y={lerp(sy, fy + Math.sin(a) * 44, smooth(prog(f, K9.meet + i * 10, 40)) * 0.6 + 0.4 * g)} s={0.75} o={prog(f, K9.meet + i * 10, 10)} />;
								}) : <Rust x={fx} y={fy + fall} s={1.3} />}
							</g>
						);
					})}
				</LensFrame>
				<Note x={L.cx} y={L.cy + L.r + 96} text="sludge settles out" size={36} color={RUST_INK} anchor="middle" at={K9.sludge} />
				<Note x={900} y={250} text="Ca(OH)_2 = hydrated lime" size={38} color={BASE_INK} hand={false} at={K9.hyd + 10} out={K9.insol} />
				<g opacity={1 - 0.7 * dimStrips}>
					<EqLine items={eq(['H^{+}(aq)', '+', 'OH^{-}(aq)', '->', 'H_2O(l)'], K9.neut)} x={900} y={350} size={44} />
					<EqLine items={eq(['Fe^{3+}(aq)', '+', '3OH^{-}(aq)', '->', 'Fe(OH)_3(s)'], K9.insol + 10)} x={900} y={440} size={44} />
					<PlateAt p={FEOH3} x={1640} y={300} h={220} at={K9.rust} out={K9.whynot} />
					<Note x={1640 + picW(FEOH3, 220) / 2} y={560} text="precipitates video" size={30} color={INK_SOFT} anchor="middle" at={K9.seen} out={K9.whynot} />
				</g>
				{/* why not limestone */}
				<Fade at={K9.whynot} out={K9.waste}>
					<PicH p={SOIL.limed} x={900} y={560} h={110} />
				</Fade>
				<TTile x={1130} y={640} text="CaCO_3" at={K9.whynot + 6} out={K9.waste} />
				<TTile x={1420} y={640} text="Ca(OH)_2" at={K9.hydl} out={K9.waste} />
				<Note x={1130} y={720} text="slow; stops near 7" size={32} color={INK_SOFT} at={K9.stops} out={K9.waste} />
				<Note x={1420} y={720} text="less gentle: dose controlled" size={32} color={TEAL} at={K9.dose} out={K9.waste} />
				<PHBar x={960} y={850} w={820} at={K9.rises - 30} marks={[
					{v: ph, at: K9.rises - 30, out: K9.whynot},
					{v: keys([[K9.whynot + 10, 3], [K9.stops + 10, 7.6]]), at: K9.whynot + 6, out: K9.waste, label: 'CaCO_3', color: INK_SOFT, below: true},
					{v: keys([[K9.higher, 3], [K9.faster, 10]]), at: K9.higher - 10, out: K9.waste, label: 'Ca(OH)_2', color: TEAL},
					{v: keys([[K9.cement, 11], [K9.acid, 7]]), at: K9.toobasic, label: 'alkaline waste', color: BASE_INK},
				]} />
				<Note x={960} y={960} text="alkaline waste: add acid or CO_2" size={36} color={BASE_INK} at={K9.cement} />
				{void K9.slowly}{void K9.co2}{void lerp}{void toWhy}
			</Overlay>
		</>
	);
};

// ---------- 10. Memory aid: every fix leaves something behind ----------
const H10 = 'memory-aid';
const K10 = cues(sc(H10), {every: 'Every fix leaves', ant: 'Antacids leave', carb: 'from carbonates', lime: 'Lime in soil', scr: 'The scrubber leaves', mine: 'mine treatment leaves', give: 'give four things', problem: 'the problem', treat: 'the treatment', equation: 'the equation', effect: 'the effect on'});
export const SceneAid: React.FC = () => {
	const g = gridGeom();
	const S = 0.72, C: [number, number] = [960, 600];
	const T = (p: [number, number]): [number, number] => [C[0] + (p[0] - C[0]) * S, C[1] + (p[1] - C[1]) * S];
	const tags: [string, number, number, [number, number]][] = [
		['MgCl_2 + H_2O; CaCO_3 adds CO_2', K10.ant, K10.lime, T([g.stomach.centre[0], 196 + 380])],
		['Ca^{2+} + H_2O + CO_2', K10.lime, K10.scr, T([g.soil.centre[0], 196 + 380])],
		['CaSO_3(s), collected', K10.scr, K10.mine, T([g.duct.centre[0], 606 + 380])],
		['Fe(OH)_3 sludge', K10.mine, K10.problem, T([g.creek.centre[0], 606 + 380])],
	];
	const frame: Piece[] = [{t: 'problem →', at: K10.problem, color: TEAL}, {t: 'treatment →', at: K10.treat, color: TEAL}, {t: 'equation →', at: K10.equation, color: TEAL}, {t: 'effect on pH', at: K10.effect, color: TEAL}];
	return (
		<>
			<Overlay>
				<Sx x={110} y={170} text="Every fix leaves something behind." size={76} color={TEAL} hand at={K10.every} />
				<g transform={`translate(${C[0]},${C[1]}) scale(${S}) translate(${-C[0]},${-C[1]})`}>
					<Grid ats={[0, 0, 0, 0]} label={false} />
				</g>
				{tags.map(([t, a, b, [x, y]], i) => <DimChip key={i} x={x} y={y} text={t} at={a} dim={b} out={K10.problem} />)}
				<Pieces x={180} y={985} items={frame} size={50} />
				{void K10.carb}{void K10.give}{void AChip}{void HEAT_INK}{void INK}{void Proton}{void Rust}{void TTile}{void vis}{void PicH}{void MetalTok}{void PlateCrop}{void Rain}{void Droplet}{void SO2}{void cropH}{void cropPt}{void AMBER}
			</Overlay>
		</>
	);
};
const DimChip: React.FC<{x: number; y: number; text: string; at: number; dim: number; out: number}> = ({x, y, text, at, dim, out}) => {
	const f = useCurrentFrame();
	const o = 1 - 0.6 * prog(f, dim, 12);
	return <g opacity={o}><AChip x={x} y={y - 30} text={text} size={34} color={INK} hand={false} anchor="middle" at={at} out={out} /></g>;
};
