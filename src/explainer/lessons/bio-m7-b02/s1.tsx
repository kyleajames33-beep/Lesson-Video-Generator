// M7 B02 scenes 1 to 5: cloudy broth and the two old beliefs (hook); spontaneous generation, miasma and germ theory,
// then the two-question evidence bench; Pasteur's set-up (broth, the swan neck traced, boiling with steam, air in and
// out, dust settling in the low bend); clear broth for months while air still reaches it, against open straight necks
// that cloud in days; breaking the neck (dust falls in, the same broth clouds), same broth and same air, the one
// difference bracketed, "Microbes come from microbes."
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Heading, MistakeChip, Overlay} from '../bio-m5-b13/shared';
import {S} from './common';
import {
	AMBER, AMBER_INK, AirFlow, BAY_Y, Banner, ClockTag, DrawPath, DustFall, DustPath, EDGE, FLK, Flask, GREYT, GREY_INK, GTag, GrowthCounter, HChip, Haze, Heap, HostRow,
	INK, KochCard, NeckTrace, PLATES, Pl, Ring, SteamWisps, Sx, Tg, clamp01, fpt, lerp, prog, rng, smooth, surfY, vis,
} from './parts';

/** Main flask position for scenes 3 to 5 (bulb centre and scale). */
export const MF = {bx: 470, by: 790, k: 0.4};
export const PasteurBay: React.FC<{o?: number; w?: number}> = ({o = 1, w = 1480}) => (o <= 0.01 ? null : (
	<rect x={80} y={BAY_Y} width={w} height={830} rx={24} fill="none" stroke={EDGE} strokeWidth={2.5} opacity={o} />
));
/** Small coded microbe glyphs popping up out of a broth surface. */
const Pops: React.FC<{x: number; y: number; at: number; out?: number}> = ({x, y, at, out}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 12);
	if (o <= 0.01) return null;
	const r = rng(5);
	return (
		<g opacity={o}>
			{Array.from({length: 6}, (_, i) => {
				const dx = (r() - 0.5) * 120, d0 = r() * 30;
				const ph = (((f - at) / 50 + i / 6) % 1 + 1) % 1;
				return <ellipse key={i} cx={x + dx} cy={y - ph * 80 - d0 * ph} rx={8} ry={4} fill="#c9a98a" stroke="#8a6a4a" strokeWidth={1.5} opacity={Math.sin(ph * Math.PI)} />;
			})}
		</g>
	);
};

// ---------- 1. Hook ----------
const K1 = cues(S('hook'), {turns: 'turns cloudy', sprang: 'simply sprang', bad: 'bad air', pasteur: 'Louis Pasteur', flask: 'with a flask', robert: 'Robert Koch', how: 'So how did'});
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const F = {bx: 760, by: 720, k: 0.5};
	const outA = 1 - prog(f, K1.pasteur, 16);
	const cloud = prog(f, K1.turns, 24);
	const haze = vis(f, K1.bad, K1.pasteur, 24);
	const sw = {bx: 380, by: 760, k: 0.36};
	return (
		<>
			<Heading text="How do you prove a microbe causes a disease?" at={K1.how + 10} size={60} />
			<Overlay>
				<g opacity={outA}>
					<Flask p={PLATES.straightClear} bx={F.bx} by={F.by} k={F.k} o={prog(f, 0, 14) * (1 - cloud)} />
					<Flask p={PLATES.straightCloudy} bx={F.bx} by={F.by} k={F.k} o={cloud} />
					<GrowthCounter x={1000} y={500} w={240} h={150} p={prog(f, K1.turns, 70)} o={prog(f, K1.turns - 6, 12)} />
					<GTag x={1000} y={672} text="a few days" at={K1.turns + 10} size={26} />
					<Pops x={F.bx} y={surfY(F.by, F.k)} at={K1.sprang} />
					<Sx x={900} y={560} text="?" size={90} color={GREYT} weight={800} at={K1.sprang + 10} />
				</g>
				<Haze x={0} y={190} w={1920} h={360} o={haze} />
				<GTag x={760} y={900} text="life from broth?" at={K1.sprang + 6} out={K1.bad} size={30} anchor="middle" />
				<GTag x={760} y={900} text="disease from bad air?" at={K1.bad + 6} out={K1.pasteur} size={30} anchor="middle" />
				<Flask p={PLATES.swan} bx={sw.bx} by={sw.by} k={sw.k} o={prog(f, K1.pasteur, 16)} />
				<AirFlow bx={sw.bx} by={sw.by} k={sw.k} at={K1.flask} o={1 - prog(f, K1.robert, 16)} />
				<GTag x={sw.bx + 60} y={900} text="Pasteur, around 1860" at={K1.pasteur + 8} out={K1.how} size={28} anchor="middle" />
				<Pl p={PLATES.tb} cx={1420} cy={620} w={380} o={prog(f, K1.robert, 14)} />
				<GTag x={1420} y={800} text="Koch: one microbe, one disease" at={K1.robert + 8} out={K1.how} size={28} anchor="middle" />
				{void INK}{void lerp}
			</Overlay>
		</>
	);
};

// ---------- 2. Two old ideas, and what germ theory needed ----------
const K2 = cues(S('old-ideas'), {spont: 'Spontaneous generation', miasma: 'Miasma was', germ: 'Germ theory', two: 'two things', show1: 'Show that microbes', show2: 'And show that'});
export const SceneOldIdeas: React.FC = () => {
	const f = useCurrentFrame();
	const rowsO = 1 - prog(f, K2.two, 16);
	return (
		<Overlay>
			<g opacity={rowsO}>
				<Flask p={PLATES.straightCloudy} bx={230} by={360} k={0.2} o={prog(f, K2.spont, 12)} dim={prog(f, K2.miasma, 12) * 0.6} />
				<Pops x={230} y={surfY(360, 0.2)} at={K2.spont + 6} out={K2.miasma} />
				<HChip x={400} y={300} text="spontaneous generation: life from non-living matter" at={K2.spont} size={40} amber={false} dim={prog(f, K2.miasma, 12)} />
				<Heap x={230} y={560} s={1.1} o={prog(f, K2.miasma, 12) * (1 - 0.5 * prog(f, K2.germ, 12))} />
				<Haze x={60} y={420} w={360} h={170} o={vis(f, K2.miasma, K2.germ, 14)} />
				<HChip x={400} y={490} text="miasma: disease from bad air" at={K2.miasma} size={40} amber={false} dim={prog(f, K2.germ, 12)} />
				<HostRow xs={[170, 300]} y={710} r={48} at={K2.germ} jumpAt={K2.germ + 24} step={40} glyph={PLATES.tb} glyphW={48} />
				<HChip x={400} y={680} text="germ theory: pathogens cause infectious disease; microbes come from microbes" at={K2.germ} size={40} />
			</g>
			<Banner at={K2.show1} at2={K2.show2} lit={[vis(f, K2.show1, K2.show2, 10), prog(f, K2.show2, 10)]} />
			{[0, 1].map(i => (
				<rect key={i} x={i ? 990 : 96} y={BAY_Y + 20} width={834} height={780} rx={24} fill="none" stroke={EDGE} strokeWidth={2.5} strokeDasharray="12 10" opacity={prog(f, K2.two + i * 8, 14)} />
			))}
			{void AMBER}{void GREY_INK}
		</Overlay>
	);
};

// ---------- 3. Pasteur's set-up ----------
const K3 = cues(S('pasteur-setup'), {filled: 'filled flasks', bent: 'bent it into', boiled: 'He boiled', kill: 'to kill any', end: 'The end of', air: 'air could flow', heavier: 'heavier than air', settled: 'settled in the low', climb: 'climb up'});
export const SceneSetup: React.FC = () => {
	const f = useCurrentFrame();
	const {bx, by, k} = MF;
	const [tx, ty] = fpt(bx, by, k, FLK.tip);
	const [lx, ly] = fpt(bx, by, k, FLK.low);
	const bIn = smooth(prog(f, K3.boiled, 22)) * (1 - smooth(prog(f, K3.end, 22)));
	const bh = 330, bw = (bh * 626) / 1491;
	return (
		<Overlay>
			<Banner lit={[1, 0]} />
			<PasteurBay />
			<KochCard />
			<Flask p={PLATES.swan} bx={bx} by={by} k={k} o={prog(f, K3.filled, 14)} />
			<GTag x={bx} y={900} text="nutrient broth" at={K3.filled + 10} out={K3.bent} size={28} anchor="middle" />
			<NeckTrace bx={bx} by={by} k={k} at={K3.bent} out={K3.boiled + 20} />
			<GTag x={990} y={640} text="swan neck: open at the end" at={K3.bent + 20} out={K3.boiled} size={28} />
			{bIn > 0.01 ? <Pl p={PLATES.bunsen} cx={bx} cy={lerp(1320, by + 85 + bh / 2 - 6, bIn)} w={bw} /> : null}
			<SteamWisps x={tx + 10} y={ty - 10} at={K3.boiled + 14} out={K3.boiled + 100} />
			<GTag x={990} y={640} text="boiled: microbes killed" at={K3.kill} out={K3.air} size={28} />
			<AirFlow bx={bx} by={by} k={k} at={K3.air} o={1 - 0.5 * prog(f, K3.heavier, 14)} />
			<HChip x={1000} y={400} text="air in," at={K3.air + 6} size={40} />
			<GTag x={990} y={640} text="dust and microbes: heavier than air" at={K3.heavier} out={K3.settled + 30} size={28} />
			<DustPath bx={bx} by={by} k={k} at={K3.heavier + 6} />
			<Ring cx={lx} cy={ly + 6} rx={62} ry={46} at={K3.settled + 22} color={AMBER} />
			<HChip x={1160} y={400} text="microbes trapped" at={K3.settled + 10} size={40} />
			{void GREYT}{void K3.climb}{void clamp01}
		</Overlay>
	);
};

// ---------- 4. Clear broth, with air ----------
const K4 = cues(S('clear-broth'), {months: 'for months', supporters: 'supporters of', here: 'the air could still', boiledS: 'Boiled broth in', falling: 'falling dust', cloudy: 'turned cloudy'});
/** A grey objection card (three lines) that takes a scribble cross. */
const Objection: React.FC<{x: number; y: number; at: number; cross: number}> = ({x, y, at, cross}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 12);
	if (o <= 0.01) return null;
	const L = ['objection: boiling or sealing', 'destroys or shuts out', 'something in the air'];
	const w = 520, h = 150;
	return (
		<g opacity={o}>
			<rect x={x} y={y} width={w} height={h} rx={22} fill="#eceeef" stroke={GREYT} strokeWidth={2.5} />
			{L.map((t, i) => <Sx key={i} x={x + 24} y={y + 44 + i * 40} text={t} size={30} color={GREY_INK} weight={600} />)}
			{f >= cross ? <DrawPath d={`M${x + 10},${y + h - 12} L${x + w - 10},${y + 12}`} at={cross} dur={12} color={GREYT} width={7} /> : null}
			{f >= cross + 6 ? <DrawPath d={`M${x + 10},${y + 12} L${x + w - 10},${y + h - 12}`} at={cross + 6} dur={12} color={GREYT} width={7} /> : null}
		</g>
	);
};
export const SceneClearBroth: React.FC = () => {
	const f = useCurrentFrame();
	const {bx, by, k} = MF;
	const SB = {bx: 1180, by: 790, k: 0.4};
	const [sx, sy] = fpt(SB.bx, SB.by, SB.k, FLK.straightTop);
	const cloud = prog(f, K4.cloudy, 24);
	return (
		<Overlay>
			<Banner lit={[1, 0]} />
			<PasteurBay />
			<KochCard />
			<Flask p={PLATES.swan} bx={bx} by={by} k={k} />
			<DustPath bx={bx} by={by} k={k} at={-300} />
			<AirFlow bx={bx} by={by} k={k} at={-60} o={0.35 + 0.65 * vis(f, K4.here, K4.boiledS, 12)} />
			<GrowthCounter x={100} y={905} w={200} h={110} p={0} />
			<ClockTag x={350} y={960} text="months" at={K4.months} dim={prog(f, K4.cloudy, 14)} />
			<Objection x={1000} y={250} at={K4.supporters} cross={K4.here + 10} />
			<Flask p={PLATES.straightClear} bx={SB.bx} by={SB.by} k={SB.k} o={prog(f, K4.boiledS, 14) * (1 - cloud)} />
			<Flask p={PLATES.straightCloudy} bx={SB.bx} by={SB.by} k={SB.k} o={prog(f, K4.boiledS, 14) * cloud} />
			<SteamWisps x={sx} y={sy - 10} at={K4.boiledS + 4} out={K4.boiledS + 46} s={0.8} />
			<DustFall x={sx} y0={430} y1={surfY(SB.by, SB.k)} at={K4.falling - 10} />
			<GrowthCounter x={1350} y={640} w={190} h={120} p={prog(f, K4.cloudy, 40)} o={prog(f, K4.boiledS + 10, 12)} />
			<GTag x={SB.bx} y={905} text="open to dust: cloudy in days" at={K4.cloudy + 8} size={28} anchor="middle" />
			{void AMBER}{void AMBER_INK}
		</Overlay>
	);
};

// ---------- 5. The critical step: break the neck ----------
const K5 = cues(S('break-the-neck'), {broke: 'broke the neck', dust: 'so dust could', within: 'Within days', samesame: 'Same broth, same air', only: 'The only difference', fromair: 'from the air'});
export const SceneBreak: React.FC = () => {
	const f = useCurrentFrame();
	const {bx, by, k} = MF;
	const sh = smooth(prog(f, 0, 30));
	const brk = prog(f, K5.broke, 16);
	const cloud = prog(f, K5.within, 30);
	const [stx, sty] = fpt(bx, by, k, FLK.stubTop);
	const IB = {bx: 1000, by: 790, k: 0.4};
	const [itx, ity] = fpt(IB.bx, IB.by, IB.k, FLK.tip);
	const flash = Math.max(0, Math.sin(clamp01((f - K5.broke) / 18) * Math.PI));
	return (
		<Overlay>
			<Banner lit={[1, 0]} />
			<PasteurBay />
			<KochCard />
			<g opacity={1 - prog(f, K5.samesame - 20, 14)}>
				<Flask p={PLATES.straightCloudy} bx={lerp(1180, 1440, sh)} by={lerp(790, 360, sh)} k={lerp(0.4, 0.15, sh)} dim={sh} />
			</g>
			<Flask p={PLATES.swan} bx={bx} by={by} k={k} o={1 - brk} />
			<Flask p={PLATES.brokenClear} bx={bx} by={by} k={k} o={brk * (1 - cloud)} />
			<Flask p={PLATES.brokenCloudy} bx={bx} by={by} k={k} o={cloud} />
			{flash > 0.01 ? <path d={`M${stx - 34},${sty - 4} l12,-10 l10,12 l12,-12 l10,12 l12,-10 l10,10`} fill="none" stroke={AMBER} strokeWidth={5} opacity={flash} /> : null}
			<DustFall x={stx} y0={250} y1={surfY(by, k)} at={K5.dust} out={K5.within + 50} />
			<GTag x={stx + 50} y={sty - 30} text="neck broken" at={K5.broke + 8} out={K5.within} size={28} />
			<GTag x={stx + 50} y={sty - 30} text="same broth: cloudy" at={K5.within + 10} out={K5.samesame} size={28} />
			<GrowthCounter x={100} y={905} w={200} h={110} p={prog(f, K5.within, 50)} />
			<Flask p={PLATES.swan} bx={IB.bx} by={IB.by} k={IB.k} o={prog(f, K5.samesame, 14)} />
			<GTag x={735} y={890} text="same broth" at={K5.samesame + 2} size={28} anchor="middle" />
			<GTag x={735} y={940} text="same air" at={K5.samesame + 22} size={28} anchor="middle" />
			{f >= K5.only ? <DrawPath d={`M${stx},${sty - 20} L${stx},${410} L${itx},${410} L${itx},${ity - 24}`} at={K5.only} dur={22} color={AMBER} width={5} /> : null}
			<Tg x={720} y={392} text="can particles reach the broth?" at={K5.only + 14} size={40} anchor="middle" />
			<Tg x={820} y={1030} text="Microbes come from microbes." at={K5.fromair} size={58} anchor="middle" />
			{void ity}{void INK}
		</Overlay>
	);
};
