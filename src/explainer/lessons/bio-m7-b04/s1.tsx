// M7 B04 scenes 1 to 6: the hook (a coded map of Australia: one nursery dot, then a dotted spread along the east
// coast; the myrtle rust leaf; the gate line draws); three things meet (the cause strip fills: hyphae, a host leaf, a
// water film; the rust leaf appears beside the healthy one; b01's plant pathogen thumbnails); farming tips the odds
// (the Module 5 banana, the uniform rows against the mixed planting with hop paths, the stock truck, biology and
// farming chips); what disease costs a crop (the ledger completes; rust and grain fill, the gall squeezing a coded
// xylem line, quality and cost chips); the myrtle rust case, cause (the strip refills; the aligned leaf pair
// crossfades; wind spores and nursery pots) and spread and effects (dated map dots, lemon myrtle rows, direct chips,
// the leaf crossing the gate, native guava, the permanent loop).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Heading, Overlay} from '../bio-m5-b13/shared';
import {S} from './common';
import {
	AMBER, AMBER_INK, AusMap, CTag, CauseStrip, Crop, CrossChip, CurveArrow, DROP, DrawPath, FEAT, GREEN, GREYT, GREY_INK, GTag, GX, Gate, Glow, HopPath, INK_SOFT,
	LL, LoopArrow, MapDot, PLATES, Pl, Ring, SLOT_H, SLOT_W, SpreadPath, SporeDrift, Sx, TEAL, WaterFilm, XFade, ausPt, clamp01, fitW, lerp, plH, prog, ptOf,
	pulse, slotX, smooth, tw, vis,
} from './parts';
import type {Pt} from './parts';

export const HEAD = 'How does disease damage farm production?';
const OK = PLATES.wheatOk, SICK = PLATES.wheatSick;

// ---------- 1. Hook ----------
const K1 = cues(S('hook'), {nursery: 'one nursery', length: 'the length of the east coast', euc: 'on eucalypts', how: 'So how does disease', far: 'far past the sick'});
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const sh = smooth(prog(f, K1.how, 30));
	const m = {cx: lerp(700, 250, sh), cy: lerp(570, 340, sh), s: lerp(1.1, 0.34, sh)};
	const leafIn = prog(f, K1.euc, 16);
	const lw = lerp(620, 200, sh);
	return (
		<>
			<Heading text={HEAD} at={K1.how + 10} size={58} />
			<Overlay>
				<AusMap {...m} at={0} />
				<SpreadPath ll={LL.north} {...m} at={K1.length} dur={60} />
				<SpreadPath ll={LL.south} {...m} at={K1.length + 12} dur={40} />
				<MapDot ll={LL.centralCoast} {...m} at={K1.nursery} pulseAt={K1.nursery} r={13} />
				<GTag x={1030} y={740} text="Central Coast NSW, April 2010" at={K1.nursery + 10} out={K1.how} anchor="end" />
				<GTag x={980} y={290} text="east coast within a few years" at={K1.length + 40} out={K1.how} />
				<Pl p={PLATES.leafRust} cx={lerp(1450, 520, sh)} cy={lerp(560, 340, sh) + (1 - smooth(leafIn)) * 40} w={lw} o={leafIn} />
				<CTag x={1450} y={790} text="myrtle rust" at={K1.euc + 10} out={K1.how} color={AMBER_INK} size={36} anchor="middle" />
				<Gate at={K1.far} y0={230} />
			</Overlay>
		</>
	);
};

// ---------- 2. Three things meet ----------
const K2 = cues(S('three-things'), {path: 'a pathogen', host: 'a host it can infect', cond: 'the right conditions', film: 'need a film of water', crops: 'Crops face', fungi: 'fungi', bacteria: 'bacteria', viruses: 'viruses', nematodes: 'nematodes'});
const SX = 140, SY = 200;
/** Scene 2 centres the strip; scene 3 slides it back to the top left as it shrinks. */
const DX2 = 300;
/** The scene 2 strip with its contents; scene 3 reuses it shrunk and grey. */
export const ThreeStrip: React.FC<{t: {path: number; host: number; cond: number; film: number}; s?: number; grey?: number; o?: number; dx?: number}> = ({t, s = 1, grey = 0, o = 1, dx = 0}) => {
	const f = useCurrentFrame();
	const c = (i: number) => slotX(SX, i) + SLOT_W / 2;
	const cy = SY + SLOT_H / 2;
	const kw = 270 / (OK.box[3] - OK.box[1]);
	const leafW = (OK.box[2] - OK.box[0]) * kw;
	const filmIn = prog(f, t.film, 16);
	const g = clamp01(grey);
	return (
		<g opacity={o} transform={`translate(${dx},0) translate(${SX},${SY}) scale(${s}) translate(${-SX},${-SY})`}>
			<CauseStrip x={SX} y={SY} at={[t.path - 6, t.host - 6, t.cond - 6]} labels={['pathogen', 'host it can infect', 'conditions']} grey={Math.max(g, f >= t.film ? 0.6 : 0)} />
			<g opacity={1 - 0.45 * g}>
				<Pl p={PLATES.hyphae} cx={c(0)} cy={cy} w={fitW(PLATES.hyphae, 250, 170)} o={prog(f, t.path, 14)} dim={g} />
				<Crop p={OK} cx={c(1)} cy={lerp(cy, cy - 42, smooth(filmIn))} w={leafW} rot={-90} id="b04-s2-okleaf" o={prog(f, t.host, 14)} dim={g} />
				<Crop p={SICK} cx={c(1)} cy={cy + 46} w={(SICK.box[2] - SICK.box[0]) * kw} rot={-90} id="b04-s2-sickleaf" o={filmIn} dim={g} />
				<WaterFilm x0={c(1) - 120} x1={c(1) + 110} y={lerp(cy, cy - 42, smooth(filmIn)) - 28} at={t.cond + 4} pulseAt={t.film} />
				<WaterFilm x0={c(2) - 110} x1={c(2) + 110} y={cy + 30} at={t.cond} pulseAt={t.film} drops={3} />
			</g>
		</g>
	);
};
const ROW = [
	{at: 'fungi', p: SICK, crop: true, tag: 'fungus: wheat rust'},
	{at: 'bacteria', p: PLATES.crownGall, crop: false, tag: 'bacterium: crown gall'},
	{at: 'viruses', p: PLATES.tmv, crop: false, tag: 'virus: tobacco mosaic'},
	{at: 'nematodes', p: PLATES.galls, crop: false, tag: 'nematode: root galls'},
] as const;
export const SceneThree: React.FC = () => {
	const f = useCurrentFrame();
	const t = {path: K2.path, host: K2.host, cond: K2.cond, film: K2.film};
	return (
		<>
			<Heading text={HEAD} at={-100} size={58} out={0} />
			<Overlay>
				<ThreeStrip t={t} dx={DX2} />
				<GTag x={SX + DX2} y={490} text="the disease triangle" at={K2.cond + 24} />
				<CTag x={SX + DX2 + 330} y={486} text="spores need water to germinate" at={K2.film + 8} color={DROP} size={32} dim={prog(f, K2.crops, 10)} />
				{ROW.map((r, i) => {
					const at = K2[r.at];
					const o = prog(f, at, 14);
					if (o <= 0.01) return null;
					const x = 405 + i * 370, y = 760;
					const w = r.crop ? (r.p.box[2] - r.p.box[0]) * (190 / (r.p.box[3] - r.p.box[1])) : fitW(r.p, 250, 180);
					return (
						<g key={r.tag} opacity={o} transform={`translate(0,${(1 - smooth(o)) * 30})`}>
							<rect x={x - 150} y={y - 115} width={300} height={230} rx={18} fill="#fffdf8" stroke={GREYT} strokeWidth={2.5} />
							{r.crop ? <Crop p={r.p} cx={x} cy={y} w={w} id={`b04-s2-row${i}`} /> : <Pl p={r.p} cx={x} cy={y} w={w} />}
							<GTag x={x} y={y + 130} text={r.tag} at={at} anchor="middle" />
						</g>
					);
				})}
			</Overlay>
		</>
	);
};

// ---------- 3. Farming tips the odds ----------
const K3 = cues(S('farming-odds'), {banana: 'the Cavendish banana', paddock: 'A paddock of a single', next: 'infect the next', moving: 'Moving plants', biology: 'partly biology', farming: 'partly farming', changed: 'can be changed'});
const FIELD = {cx: 1080, cy: 520, w: 1020};
export const SceneFarming: React.FC = () => {
	const f = useCurrentFrame();
	const sh = smooth(prog(f, 0, 26));
	const pt = (uv: Pt) => ptOf(PLATES.field, FIELD.cx, FIELD.cy, FIELD.w, uv);
	const truckIn = smooth(prog(f, K3.moving, 22));
	const tick = prog(f, K3.changed, 12);
	const farmW = tw('farming: one variety, movement', 32, true) * 1.06 + 36;
	return (
		<Overlay>
			<ThreeStrip t={{path: -100, host: -100, cond: -100, film: -100}} s={lerp(1, 0.42, sh)} grey={sh} dx={lerp(DX2, 0, sh)} />
			<Pl p={PLATES.banana} cx={330} cy={520} w={440} o={prog(f, K3.banana, 16)} dim={prog(f, K3.paddock, 14) * 0.7} />
			<GTag x={110} y={610} text="Module 5: clones share one weakness" at={K3.banana + 14} />
			<Pl p={PLATES.field} cx={FIELD.cx} cy={FIELD.cy} w={FIELD.w} o={prog(f, K3.paddock, 18)} />
			<GTag x={600} y={724} text="monoculture: one variety over a large area" at={K3.paddock + 24} />
			<HopPath pts={FEAT.rowHeads.map(pt)} at={K3.next} step={11} />
			<CTag x={620} y={250} text="nothing to slow it" at={K3.next + 20} color={AMBER_INK} size={34} dim={prog(f, K3.moving, 10)} />
			<HopPath pts={FEAT.mixHeads.slice(0, 2).map(pt)} at={K3.next + 60} step={16} color={GREYT} stopX />
			<GTag x={1180} y={724} text="mixed planting: breaks in the run" at={K3.next + 84} />
			<Pl p={PLATES.truck} cx={lerp(1980, 1600, truckIn)} cy={880} w={280} o={prog(f, K3.moving, 10)} />
			{f >= K3.moving + 22 ? <DrawPath d="M1755,880 L1905,880" at={K3.moving + 22} dur={14} color={AMBER} width={5} dash="4 10" /> : null}
			<CTag x={1880} y={985} text="carried to new districts" at={K3.moving + 16} color={AMBER_INK} size={32} anchor="end" dim={prog(f, K3.farming, 10)} />
			<CTag x={110} y={830} text="biology: pathogen, conditions" at={K3.biology} color={GREY_INK} size={32} dim={1} />
			<CTag x={110} y={910} text="farming: one variety, movement" at={K3.farming} color={AMBER_INK} size={32} />
			{tick > 0.01 ? <DrawPath d={`M${110 + farmW + 30},${940} L${110 + farmW + 44},${956} L${110 + farmW + 72},${922}`} at={K3.changed} dur={12} color={AMBER} width={7} /> : null}
			{void INK_SOFT}
		</Overlay>
	);
};

// ---------- 4. What disease costs a crop ----------
const K4 = cues(S('crop-costs'), {yield: 'First, yield', rust: 'Rust pustules', sugars: 'take sugars', grain: 'fills less grain', nem: 'Root-knot nematodes', galls: 'into galls', squeeze: 'squeeze the xylem', tubes: 'the tubes that carry', quality: 'Second, quality', cost: 'Third, cost'});
const WH = {cx: 330, cy: 500, w: 380};
const GL = {cx: 560, cy: 520, w: 600};
export const SceneCosts: React.FC = () => {
	const f = useCurrentFrame();
	const wO = vis(f, K4.yield, K4.nem + 10, 14);
	const rp = ptOf(PLATES.wheat, WH.cx, WH.cy, WH.w, FEAT.wheatRust);
	const gO = prog(f, K4.nem, 16);
	const gp = (uv: Pt) => ptOf(PLATES.galls, GL.cx, GL.cy, GL.w, uv);
	const xs = FEAT.xylem.map(gp);
	const seg = (a: number, b: number) => xs.slice(a, b + 1).map((p, i) => `${i ? 'L' : 'M'}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ');
	const sq = smooth(prog(f, K4.squeeze, 24));
	const brk = prog(f, K4.squeeze + 26, 16);
	const gc = gp(FEAT.gall);
	return (
		<Overlay>
			<Gate at={0} labelAt={10} sidesAt={16} />
			<CTag x={110} y={200} text="direct" at={K4.cost + 30} color={TEAL} size={34} />
			<Pl p={PLATES.wheat} cx={WH.cx} cy={WH.cy} w={WH.w} o={wO} />
			<Ring cx={rp[0]} cy={rp[1]} rx={60} ry={120} at={K4.rust} out={K4.nem} />
			<CTag x={110} y={760} text="pustules take sugars, less green leaf" at={K4.sugars} out={K4.nem} color={AMBER_INK} size={30} />
			<CurveArrow a={[560, 470]} b={[700, 470]} at={K4.grain - 10} bow={-40} color={INK_SOFT} out={K4.nem} />
			<Crop p={PLATES.ear} cx={820} cy={500} w={230} id="b04-s4-ear" o={vis(f, K4.grain - 10, K4.nem + 10, 14)} />
			<CTag x={690} y={760} text="less grain filled" at={K4.grain + 6} out={K4.nem} color={AMBER_INK} size={30} />
			<Pl p={PLATES.galls} cx={GL.cx} cy={GL.cy} w={GL.w} o={gO} dim={prog(f, K4.quality, 14) * 0.6} />
			<Ring cx={gc[0]} cy={gc[1]} rx={84} ry={120} at={K4.galls} out={K4.quality} />
			{f >= K4.galls + 10 ? (
				<g opacity={1 - 0.5 * prog(f, K4.quality, 14)}>
					<DrawPath d={seg(0, 6)} at={K4.galls + 10} dur={30} color="#fffdf8" width={18} opacity={0.85} />
					<DrawPath d={seg(0, 2)} at={K4.galls + 10} dur={12} color={DROP} width={11} />
					<g opacity={1 - 0.75 * brk}><DrawPath d={seg(2, 4)} at={K4.galls + 22} dur={10} color={DROP} width={lerp(11, 3, sq)} dash={brk > 0.5 ? '5 9' : undefined} /></g>
					<g opacity={1 - 0.55 * brk}><DrawPath d={seg(4, 6)} at={K4.galls + 32} dur={10} color={DROP} width={lerp(11, 6, sq)} /></g>
					{brk > 0.01 ? <circle cx={xs[3][0]} cy={xs[3][1]} r={14} fill="none" stroke={DROP} strokeWidth={4} strokeDasharray="4 5" opacity={brk} /> : null}
				</g>
			) : null}
			<CTag x={860} y={330} text="xylem squeezed: less water up" at={K4.tubes} color={DROP} size={30} maxW={400} dim={prog(f, K4.quality, 10)} />
			<CTag x={110} y={860} text="lower grade" at={K4.quality + 10} color={TEAL} size={32} dim={prog(f, K4.cost, 10)} />
			<CTag x={110} y={935} text="fungicide, resistant varieties, replanting" at={K4.cost + 10} color={TEAL} size={32} />
			{void GX}
		</Overlay>
	);
};

// ---------- 5. Myrtle rust: the cause ----------
const K5 = cues(S('myrtle-rust-cause'), {fungus: 'caused by a fungus', family: 'the myrtle family', euc: 'eucalypts', paper: 'paperbarks', tea: 'tea tree', aus: 'Australian myrtles', never: 'never met this fungus', many: 'so many species', little: 'little resistance', spores: 'Its spores travel', nursery: 'infected nursery plants'});
export const SceneMyrtleCause: React.FC = () => {
	const f = useCurrentFrame();
	const mv = smooth(prog(f, K5.aus, 28));
	const lcx = lerp(slotX(SX, 1) + SLOT_W / 2, 480, mv), lcy = lerp(SY + SLOT_H / 2, 690, mv), lw = lerp(270, 600, mv);
	const t = prog(f, K5.never, 30);
	const words = [{at: K5.euc, text: 'eucalypts'}, {at: K5.paper, text: 'paperbarks'}, {at: K5.tea, text: 'tea tree, lemon myrtle'}];
	return (
		<Overlay>
			<Gate at={-100} o={0.4} labelAt={-100} sidesAt={-100} />
			<CauseStrip x={SX} y={SY} at={[K5.fungus - 6, K5.family - 6, 1e9]} labels={['pathogen', 'host', '']} grey={prog(f, K5.aus, 14) * 0.6} />
			<Crop p={PLATES.pustules} cx={slotX(SX, 0) + SLOT_W / 2} cy={SY + SLOT_H / 2} w={fitW(PLATES.pustules, 250, 180)} id="b04-s5-pust" o={prog(f, K5.fungus, 14)} />
			<GTag x={slotX(SX, 0) + SLOT_W / 2} y={466} text="Austropuccinia psidii" at={K5.fungus + 12} anchor="middle" />
			<GTag x={slotX(SX, 1) + SLOT_W / 2} y={466} text="Myrtaceae" at={K5.family + 12} anchor="middle" />
			{words.map((w, i) => <GTag key={w.text} x={slotX(SX, 2)} y={220 + i * 62} text={w.text} at={w.at} out={K5.aus} />)}
			<Pl p={PLATES.leafOk} cx={slotX(SX, 1) + SLOT_W / 2} cy={SY + SLOT_H / 2} w={fitW(PLATES.leafOk, 260, 180)} o={prog(f, K5.aus, 10)} dim={0.3} />
			<XFade a={PLATES.leafOk} b={PLATES.leafRust} cx={lcx} cy={lcy} w={lw} t={t} o={prog(f, K5.family, 14)} />
			<CTag x={110} y={915} text="little resistance in many species" at={K5.little} color={AMBER_INK} size={32} dim={prog(f, K5.spores, 10)} />
			<CrossChip x={820} y={560} text="dangerous because it's foreign" at={K5.many} cross={K5.little + 14} caption="no shared history, little resistance" size={28} out={K5.spores} />
			<SporeDrift sx={620} sy={640} x1={1270} at={K5.spores} band={50} />
			<CTag x={820} y={470} text="wind-borne spores" at={K5.spores + 14} color={AMBER_INK} size={32} dim={prog(f, K5.nursery, 10)} />
			<Pl p={PLATES.pots} cx={980} cy={800} w={220} o={prog(f, K5.nursery, 14)} />
			<CurveArrow a={[1100, 790]} b={[1860, 720]} at={K5.nursery + 14} bow={-80} color={AMBER} width={5} dash="4 10" />
			<CTag x={1330} y={810} text="moved plants: long distances fast" at={K5.nursery + 24} color={AMBER_INK} size={30} maxW={520} />
		</Overlay>
	);
};

// ---------- 6. Myrtle rust: spread and effects ----------
const K6 = cues(S('myrtle-rust-effects'), {tas: 'Tasmania', nt: 'the Northern Territory', wa: 'northern Western Australia', dense: 'dense rows of one species', suits: 'which suits the fungus', pay: 'pay for fungicide', lose: 'lose much of their crop', past: 'past the farm too', guava: 'The native guava', crit: 'critically endangered', erad: "can't be eradicated"});
export const SceneMyrtleEffects: React.FC = () => {
	const f = useCurrentFrame();
	const m = {cx: 1600, cy: 320, s: 0.38};
	const mv = smooth(prog(f, K6.past + 10, 30));
	const leftDim = prog(f, K6.past, 10);
	const wa = ausPt(LL.kimberley[0], LL.kimberley[1], m.cx, m.cy, m.s);
	return (
		<Overlay>
			<Gate at={-100} labelAt={-100} sidesAt={-100} bright={1} />
			<AusMap {...m} at={0} />
			<SpreadPath ll={LL.north} {...m} at={-100} dur={1} o={0.7} />
			<SpreadPath ll={LL.south} {...m} at={-100} dur={1} o={0.7} />
			<MapDot ll={LL.tas} {...m} at={K6.tas} pulseAt={K6.tas} r={8} />
			<MapDot ll={LL.nt} {...m} at={K6.nt} pulseAt={K6.nt} r={8} />
			<MapDot ll={LL.kimberley} {...m} at={K6.wa} pulseAt={K6.wa} r={8} />
			<GTag x={wa[0] - 20} y={455} text="WA, 2022" at={K6.wa + 8} />
			<Pl p={PLATES.rows} cx={420} cy={470} w={520} o={prog(f, K6.dense, 16)} dim={leftDim * 0.5} />
			<CTag x={160} y={655} text="dense rows of one species" at={K6.dense + 10} color={AMBER_INK} size={32} dim={Math.max(prog(f, K6.pay, 10), leftDim)} />
			<CTag x={760} y={320} text="farming: one variety, movement" at={K6.dense + 20} color={AMBER_INK} size={26} dim={1 - pulse(f, K6.suits, 60)} />
			<CTag x={160} y={220} text="direct" at={K6.lose + 20} color={TEAL} size={34} dim={leftDim} />
			<CTag x={160} y={760} text="fungicide costs" at={K6.pay + 6} color={TEAL} size={32} dim={leftDim} />
			<CTag x={160} y={840} text="lost yield" at={K6.lose + 6} color={TEAL} size={32} dim={leftDim} />
			<Pl p={PLATES.leafRust} cx={lerp(1000, 1600, mv)} cy={lerp(520, 620, mv)} w={lerp(230, 200, mv)} o={prog(f, K6.dense + 20, 14)} />
			<CTag x={1330} y={505} text="beyond the farm" at={K6.guava} color={GREEN} size={30} dim={prog(f, K6.erad, 10)} />
			<CTag x={1330} y={705} text="native guava: critically endangered" at={K6.guava + 10} color={GREEN} size={30} maxW={520} />
			<CrossChip x={1330} y={835} text="plant disease only matters for food" at={K6.guava + 40} cross={K6.crit + 10} size={26} />
			<LoopArrow x0={60} y0={160} x1={1890} y1={1068} at={K6.erad} />
			<CTag x={960} y={98} text="permanent: costs every year" at={K6.erad + 24} color={AMBER_INK} size={34} anchor="middle" />
			{void Glow}{void plH}{void GREYT}
		</Overlay>
	);
};
