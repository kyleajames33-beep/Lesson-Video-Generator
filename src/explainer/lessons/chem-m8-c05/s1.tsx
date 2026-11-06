// M8 C05 scenes 1 to 6: the hook (the Barwon-Darling strip: the 1991 green band and the 2018 to 2019 Menindee fish
// deaths, three linked conditions; the clear lake and the question), nutrients needed (the water-column overlay, the
// limiting nutrient and the brake released), where the extra comes from (paddock runoff, the catchment, the outlet,
// stormwater, upstream and downstream bottles), feed and bloom (clear to bloom; oxygen up by day and down at night on the
// 60-hour trace), die, decay, suffocate (bloom to crash; algae sink, bacteria cluster, O2 glyphs fade, the gauge falls,
// the trace slides; the crossed chip; the delay bracket) and the name and memory aid (feed, bloom, die, decay, suffocate;
// warm water holds less oxygen).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {DrawPath, prog, scribbleEllipse} from '../../kit';
import {FARM, FARM_A, FERT, Heading, LAKE, LAKE_A, NB, OUTLET, sc} from './common';
import {
	AChip, ALG, Arrow, BACT, BottleOutline, Brake, CAxes, CCurve, CSeg, DimG, Fade, Flow, GREYX, Gauge, HTag, INK, INK_SOFT, Legend, MistakeX, MoonGlyph, NAVY, NIT, Note,
	O2C, O2Glyph, O2_INK, PHOS, PicV, RED8, RiverMap, SodaBottle, SunGlyph, Sx, TaskLine, WaterCol, clamp01, doFn, gx, gy, lerp, natPt, smooth, vis,
} from './parts';
import type {CG, WBox} from './parts';
import type {PDef} from './common';

export const LK = {x: 96, y: 220, h: 560};
export const wbox = (g: {x: number; y: number; h: number}): WBox => {
	const [x0, top] = natPt(LAKE.clear, g.x, g.y, g.h, LAKE_A.x0, LAKE_A.surf);
	const [x1, bot] = natPt(LAKE.clear, g.x, g.y, g.h, LAKE_A.x1, LAKE_A.floorL);
	return {x0, x1, top: top + 8, bot};
};
const ramp = (f: number, a: number, b: number, v0: number, v1: number) => lerp(v0, v1, smooth(clamp01((f - a) / Math.max(1, b - a))));
/** Lake states cross-fading in place. */
export const Lake: React.FC<{g?: {x: number; y: number; h: number}; states: {p: PDef; at: number}[]; o?: number}> = ({g = LK, states, o = 1}) => {
	const f = useCurrentFrame();
	return <g opacity={o}>{states.map((s, i) => <PicV key={i} p={s.p} x={g.x} y={g.y} h={g.h} o={i === 0 ? 1 : prog(f, s.at, 30)} />)}</g>;
};

// ---------- 1. Hook ----------
const K1 = cues(sc('hook'), {late: 'late 1991', thousand: 'thousand kilometres', green: 'turned green', summer: 'In the summer', menindee: 'Menindee', fish: 'fish deaths', million: 'a million', linked: 'linked to', low: 'low flow', heat: 'heat', algal: 'algal blooms', oxygen: 'short of oxygen', so: 'So why', extra: 'extra nutrients', coming: 'coming'});
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const sh = smooth(prog(f, K1.so, 30));
	const s = lerp(1, 0.42, sh);
	return (
		<>
			<Heading text="Why monitor water? Nutrients, blooms and the oxygen crash" at={4} size={50} />
			<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
				<RiverMap at={2} bandAt={K1.thousand} dotAt={K1.menindee} s={s} tx={lerp(0, 40 - 150 * 0.42, sh)} ty={lerp(0, 200 - 200 * 0.42, sh)} />
				<Fade at={0} out={K1.so}>
					<Sx x={840} y={300} text="Nov to Dec 1991" size={48} color="#3f8a2f" hand weight={700} at={K1.late + 20} />
					<Sx x={840} y={356} text="about 1,000 km of river turned green" size={38} color={INK} weight={600} at={K1.thousand} />
					<AChip x={840} y={384} text="Baker and Bowling 1996" size={28} color={GREYX} hand={false} at={K1.green} />
					<Sx x={840} y={540} text="Dec 2018 to Jan 2019" size={48} color={RED8} hand weight={700} at={K1.summer + 20} />
					<Sx x={840} y={596} text="over 1 million fish deaths (estimate)" size={38} color={INK} weight={600} at={K1.million - 10} />
					<AChip x={840} y={624} text="Vertessy panel 2019" size={28} color={GREYX} hand={false} at={K1.million + 10} />
					<Sx x={840} y={760} text="linked to:" size={38} color={INK_SOFT} hand weight={700} at={K1.linked} />
					<AChip x={840} y={790} text="low flow" size={36} color={NAVY} hand={false} at={K1.low} />
					<AChip x={1060} y={790} text="heat" size={36} color={RED8} hand={false} at={K1.heat} />
					<AChip x={1220} y={790} text="algal blooms" size={36} color={ALG} hand={false} at={K1.algal} />
					<O2Glyph x={880} y={930} s={1.6} o={1 - 0.75 * prog(f, K1.oxygen, 30)} />
					<Sx x={930} y={942} text="low oxygen" size={38} color={O2_INK} hand weight={700} at={K1.oxygen} />
				</Fade>
				<Lake g={{x: 520, y: 240, h: 600}} states={[{p: LAKE.clear, at: -1000}]} o={prog(f, K1.so + 10, 24)} />
				<Fade at={K1.extra}>
					<rect x={1180} y={880} width={600} height={90} rx={45} fill="#fffdf8" stroke={NAVY} strokeWidth={5} />
					<Sx x={1480} y={942} text="nutrients → dead fish?" size={46} color={NAVY} anchor="middle" weight={800} at={-1000} />
				</Fade>
				{void K1.fish}{void K1.coming}
			</svg>
		</>
	);
};

// ---------- 2. Nutrients: needed, until there's too much ----------
const K2 = cues(sc('nutrients-needed'), {nitro: 'Nitrogen', poisons: 'poisons', need: 'need them', lake: 'In a', held: 'held back', shortest: 'shortest supply', limiting: 'limiting nutrient', fresh: 'fresh water', phos: ['phosphorus', 2], add: 'Add more', brake: 'brake'});
export const SceneNutrients: React.FC = () => {
	const b = wbox(LK);
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<TaskLine text="Nutrients: needed, until there's too much" at={2} size={52} />
			<Lake states={[{p: LAKE.clear, at: -1000}]} />
			<WaterCol b={b} n={fr => ramp(fr, K2.brake, K2.brake + 70, 7, 30)} nit={() => 3} phos={fr => ramp(fr, K2.add, K2.brake, 1, 5)} o2={() => 7} />
			<Brake x={860} y={510} at={K2.phos - 10} release={K2.brake} />
			<Legend x={120} y={850} items={[{c: NIT, t: 'nitrate', at: K2.nitro}, {c: PHOS, t: 'phosphate', at: K2.nitro + 10}, {c: ALG, t: 'algae', at: K2.need}]} size={34} />
			<Note x={120} y={930} text="algae and plants need N and P to grow" size={40} color={INK} at={K2.need} />
			<Sx x={1140} y={280} text="Nitrogen and phosphorus:" size={46} color={NAVY} hand weight={700} at={K2.nitro} />
			<Sx x={1140} y={336} text="needed nutrients, not poisons" size={40} color={INK} weight={600} at={K2.poisons} />
			<Sx x={1140} y={470} text="limiting nutrient: the one in" size={38} color={INK} weight={600} at={K2.limiting} />
			<Sx x={1140} y={518} text="shortest supply for what the" size={38} color={INK} weight={600} at={K2.limiting} />
			<Sx x={1140} y={566} text="algae need; it holds growth back" size={38} color={INK} weight={600} at={K2.limiting} />
			<Sx x={1140} y={690} text="phosphorus in short supply" size={42} color={RED8} hand weight={700} at={K2.phos} />
			<AChip x={1140} y={716} text="often, not always (fresh water)" size={30} color={GREYX} hand={false} at={K2.phos} />
			<Sx x={1140} y={880} text="add more: the brake is off" size={50} color={ALG} hand weight={700} at={K2.brake} />
			{void K2.lake}{void K2.held}{void K2.shortest}{void K2.fresh}
		</svg>
	);
};

// ---------- 3. Where the extra comes from ----------
const K3 = cues(sc('sources'), {where: 'So where', rain: 'heavy rain', fert: 'fertiliser', paddocks: 'paddocks', creeks: 'creeks', diffuse: 'diffuse source', catchment: 'catchment', sewage: 'Sewage effluent', point: 'point sources', outlet: 'one outlet', together: 'together', urban: 'Urban stormwater', source: 'The source', decides: 'decides', sample: 'sample', is: 'is'});
export const LK3 = {x: 1180, y: 250, h: 380};
export const SceneSources: React.FC = () => {
	const FX = 96, FY = 240, FH = 420;
	const P = (n: [number, number]) => natPt(FARM, FX, FY, FH, n[0], n[1]);
	const top = P(FARM_A.top), mouth = P(FARM_A.mouth);
	const b3 = wbox(LK3);
	const OX = 760, OY = 640, OH = 290;
	const lakeIn: [number, number] = [b3.x0 + 60, (b3.top + b3.bot) / 2];
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<TaskLine text="Where the extra comes from" at={2} size={52} />
			<Lake g={LK3} states={[{p: LAKE.clear, at: -1000}]} />
			<WaterCol b={b3} n={() => 6} nit={fr => ramp(fr, K3.creeks, K3.urban + 60, 1, 5)} phos={fr => ramp(fr, K3.creeks, K3.urban + 60, 1, 4)} o2={() => 5} />
			<PicV p={FARM} x={FX} y={FY} h={FH} />
			<PicV p={FERT} x={680} y={250} h={120} at={K3.fert - 6} />
			<HTag x={780} y={410} text="fertiliser" size={32} color={INK_SOFT} anchor="middle" at={K3.fert} />
			<Flow pts={[top, [top[0] + 120, top[1] + 80], [mouth[0] - 80, mouth[1] - 50], mouth]} at={K3.paddocks} n={8} track={false} />
			<Flow pts={[[mouth[0] + 30, mouth[1] + 10], [900, 560], lakeIn]} at={K3.creeks} n={6} width={5} />
			<Fade at={K3.catchment - 4}>
				<DrawPath d={scribbleEllipse(FX + 290, FY + 220, 330, 250, 4, 1.05)} at={K3.catchment - 4} dur={30} color={NAVY} width={4} dash="14 10" />
			</Fade>
			<HTag x={FX} y={740} text="catchment: land draining to this creek" size={34} color={NAVY} at={K3.catchment} />
			<HTag x={FX} y={792} text="diffuse source: spread over a wide area" size={36} color={INK} at={K3.diffuse} />
			<PicV p={OUTLET} x={OX} y={OY} h={OH} at={K3.sewage - 6} />
			<Flow pts={[[OX + 260, OY + 120], [1100, 600], [lakeIn[0] + 20, lakeIn[1] + 20]]} at={K3.point} n={10} width={10} period={50} />
			<Flow pts={[[OX + 260, OY + 140], [1110, 620], [lakeIn[0] + 30, lakeIn[1] + 30]]} at={K3.together} n={5} colors={[BACT]} track={false} period={60} />
			<HTag x={OX} y={OY + OH + 46} text="point source: one outlet" size={36} color={INK} at={K3.outlet} />
			<HTag x={1150} y={720} text="nutrients + organic waste" size={34} color={BACT} at={K3.together} />
			<Flow pts={[[1840, 230], [1800, 300], [b3.x1 - 30, b3.top + 10]]} at={K3.urban} n={4} width={3} colors={[NIT]} trackColor="#9aa0a6" />
			<HTag x={1500} y={226} text="urban stormwater" size={32} color="#6b7178" at={K3.urban} />
			<BottleOutline x={OX - 80} y={OY + 120} at={K3.is - 10} label="upstream" color={NAVY} />
			<BottleOutline x={OX + 380} y={OY + 200} at={K3.is} label="downstream" color={NAVY} />
			<Note x={1150} y={810} text="the source decides where you" size={40} color={INK} at={K3.decides} />
			<Note x={1150} y={862} text="sample and what the fix is" size={40} color={INK} at={K3.sample} />
			<Legend x={1150} y={960} items={[{c: NIT, t: 'nitrate', at: K3.paddocks}, {c: PHOS, t: 'phosphate', at: K3.paddocks}, {c: BACT, t: 'organic waste', at: K3.together, shape: 'rod'}]} size={30} />
			{void K3.where}{void K3.rain}{void K3.source}
		</svg>
	);
};

// ---------- the 60-hour oxygen trace ----------
export const GD: CG = {x: 1240, y: 250, w: 580, h: 460, x0: 0, x1: 60, y0: 0, y1: 14};
export const DOAxes: React.FC = () => (
	<>
		<CAxes g={GD} at={-1000} xLabel="time (hours)" yLabel="dissolved oxygen (mg/L)" xTicks={[0, 12, 24, 36, 48, 60]} yTicks={[0, 4, 8, 12]} size={28} />
		{[12, 36].map(t => <SunGlyph key={'s' + t} x={gx(GD, t)} y={gy(GD, 1.1)} r={11} />)}
		{[24, 48].map(t => <MoonGlyph key={'m' + t} x={gx(GD, t)} y={gy(GD, 1.1)} r={12} />)}
		<Sx x={GD.x + GD.w + 20} y={GD.y + GD.h + 100} text="shape illustrative" size={28} color={GREYX} anchor="end" hand at={-1000} />
	</>
);
const Marker: React.FC<{t: number; at: number; label: string; color: string; above?: boolean}> = ({t, at, label, color, above = true}) => {
	const f = useCurrentFrame();
	const v = vis(f, at);
	if (v <= 0.01) return null;
	const x = gx(GD, t), y = gy(GD, doFn(t));
	return (
		<g opacity={v}>
			<circle cx={x} cy={y} r={13} fill={color} stroke="#fffdf8" strokeWidth={3} />
			<Sx x={x} y={above ? y - 26 : y + 50} text={label} size={34} color={color} anchor="middle" hand weight={700} at={-1000} />
		</g>
	);
};

// ---------- 4. Feed and bloom ----------
const K4 = cues(sc('feed-bloom'), {brake: 'With the', multiply: 'multiply', bloom: 'a bloom', scum: 'green scum', day: 'In daylight', make: 'make oxygen', photo: 'photosynthesise', night: 'At night', use: 'use oxygen', respire: 'respire', so: 'So a', noon: 'noon', dawn: 'dawn'});
export const upto4 = (fr: number) => (fr < K4.make ? 0.01 : fr < K4.use ? ramp(fr, K4.make, K4.use, 0, 15) : fr < K4.so ? ramp(fr, K4.use, K4.so, 15, 27) : ramp(fr, K4.so, K4.dawn + 20, 27, 48));
export const SceneFeed: React.FC = () => {
	const b = wbox(LK);
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<TaskLine text="Feed and bloom" at={2} size={52} />
			<Lake states={[{p: LAKE.clear, at: -1000}, {p: LAKE.bloom, at: K4.multiply}]} />
			<WaterCol b={b} n={fr => ramp(fr, K4.brake + 20, K4.scum, 10, 44)} o2={fr => (fr < K4.use ? ramp(fr, K4.make, K4.make + 50, 6, 12) : ramp(fr, K4.use, K4.use + 60, 12, 5))} rise={fr => (fr >= K4.make && fr < K4.use ? 1 : 0)} phos={() => 2} nit={() => 2} />
			<Gauge x={985} y={430} h={200} level={fr => (fr < K4.use ? ramp(fr, K4.make, K4.make + 60, 0.62, 0.92) : ramp(fr, K4.use, K4.use + 60, 0.92, 0.42))} />
			<HTag x={120} y={850} text="algal bloom: a rapid build-up of algae" size={38} color={ALG} at={K4.bloom} />
			<HTag x={120} y={910} text="daylight: photosynthesis adds O_2" size={38} color={O2_INK} at={K4.make} />
			<HTag x={120} y={968} text="night: respiration uses O_2" size={38} color={INK} at={K4.use} />
			<DOAxes />
			<CCurve g={GD} fn={doFn} xa={0} xb={48} upto={upto4} color={O2_INK} width={6} />
			<Marker t={12} at={K4.noon} label="noon: high" color="#c99a1c" />
			<Marker t={27} at={K4.dawn} label="dawn: low" color={NAVY} above={false} />
			{void K4.day}{void K4.photo}{void K4.night}{void K4.respire}{void O2C}{void Arrow}
		</svg>
	);
};

// ---------- 5. Die, decay, suffocate ----------
const K5 = cues(sc('die-decay-suffocate'), {runs: 'runs out', die: 'die and', sink: 'sink', bact: 'Bacteria decompose', respire: 'respire', useup: 'use up', dissolved: 'dissolved oxygen', faster: 'faster than', warm: 'warm, still', falls: 'Oxygen falls', suffocate: 'suffocate', crash: 'In this', work: 'work', danger: 'The danger', miss: 'miss'});
export const SceneDecay: React.FC = () => {
	const b = wbox(LK);
	const f = useCurrentFrame();
	const br = prog(f, K5.miss - 10, 20);
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<TaskLine text="Die, decay, suffocate" at={2} size={52} />
			<Lake states={[{p: LAKE.bloom, at: -1000}, {p: LAKE.crash, at: K5.die - 10}]} />
			<WaterCol b={b} n={() => 44} sink={fr => ramp(fr, K5.die - 10, K5.sink + 40, 0, 1)} bact={fr => ramp(fr, K5.bact, K5.bact + 80, 0, 1)} o2={fr => ramp(fr, K5.useup, K5.suffocate, 10, 1)} />
			<Gauge x={985} y={430} h={200} level={fr => ramp(fr, K5.useup, K5.suffocate, 0.75, 0.08)} />
			<Legend x={120} y={830} items={[{c: '#8a9a6a', t: 'dead algae', at: K5.sink}, {c: BACT, t: 'bacteria', at: K5.bact, shape: 'rod'}, {c: O2C, t: 'oxygen', at: K5.useup, shape: 'o2'}]} size={32} />
			<DimG at={K5.dissolved} to={0.65}><HTag x={120} y={882} text="bacteria decompose dead algae" size={34} color={BACT} at={K5.bact} /></DimG>
			<DimG at={K5.faster} to={0.65}><HTag x={120} y={928} text="dissolved oxygen: O_2 gas dissolved in the water (mg/L)" size={34} color={O2_INK} at={K5.dissolved} /></DimG>
			<DimG at={K5.warm} to={0.65}><HTag x={120} y={974} text="O_2 used faster than it dissolves back in" size={34} color={INK} at={K5.faster} /></DimG>
			<HTag x={120} y={1020} text="warm, still water: less O_2, less mixing" size={34} color={RED8} at={K5.warm} />
			<DOAxes />
			<CCurve g={GD} fn={doFn} xa={0} xb={48} upto={() => 48} color={O2_INK} width={6} />
			<CCurve g={GD} fn={doFn} xa={48} xb={60} upto={fr => ramp(fr, K5.falls - 20, K5.suffocate + 20, 48, 60)} color={RED8} width={7} />
			<HTag x={gx(GD, 53)} y={gy(GD, 7.6)} text="after the bloom dies" size={30} color={RED8} anchor="middle" at={K5.falls} />
			<Sx x={gx(GD, 59.5)} y={gy(GD, 4.4)} text="fish suffocate" size={30} color={RED8} anchor="end" hand weight={700} at={K5.suffocate} />
			<MistakeX x={1180} y={830} text="the algae kill the fish" at={K5.crash} cross={K5.work} note="here, bacteria use up most of the oxygen" size={34} />
			<g opacity={br}>
				<path d={`M${gx(GD, 15)},${gy(GD, 12.4)} L${gx(GD, 15)},${gy(GD, 13)} L${gx(GD, 56)},${gy(GD, 13)} L${gx(GD, 56)},${gy(GD, 12.4)}`} fill="none" stroke={INK} strokeWidth={4} />
				<Sx x={gx(GD, 35)} y={gy(GD, 13.4)} text="the danger can continue after the bloom dies" size={28} color={INK} anchor="middle" hand weight={700} at={-1000} />
			</g>
			{void K5.runs}{void K5.respire}{void K5.danger}{void CSeg}
		</svg>
	);
};

// ---------- 6. A name and a memory aid ----------
const K6 = cues(sc('name-memory-aid'), {chain: 'This chain', eut: 'eutrophication', enrich: 'nutrients enrich', grows: 'too much', crashes: 'crashes', five: 'Five words', feed: 'Feed', bloom: 'bloom', die: 'die', decay: 'decay', suff: 'suffocate', summer: 'And remember', warm: 'Warm water', soft: 'warm soft', flat: 'flat'});
export const SceneName: React.FC = () => {
	const W: {t: string; at: number; cx: number; lake?: PDef}[] = [
		{t: 'Feed', at: K6.feed, cx: 200, lake: LAKE.clear}, {t: 'bloom', at: K6.bloom, cx: 520, lake: LAKE.bloom}, {t: 'die', at: K6.die, cx: 820}, {t: 'decay', at: K6.decay, cx: 1100}, {t: 'suffocate', at: K6.suff, cx: 1480, lake: LAKE.crash},
	];
	const TH = 130, TW = (LAKE.clear.box[2] / LAKE.clear.box[3]) * TH;
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<Sx x={96} y={250} text="eutrophication" size={90} color={NAVY} hand weight={700} at={K6.eut} />
			<Sx x={96} y={330} text="nutrient enrichment → too much growth → oxygen crash" size={40} color={INK} weight={600} at={K6.enrich} />
			{W.map((w, i) => (
				<g key={w.t}>
					<Sx x={w.cx} y={500} text={w.t} size={66} color={GREYX} anchor="middle" hand weight={700} at={K6.enrich} opacity={0.3} out={w.at} />
					<Sx x={w.cx} y={500} text={w.t} size={66} color={i === 4 ? RED8 : i === 1 ? ALG : INK} anchor="middle" hand weight={700} at={w.at} />
					{i < 4 ? <Arrow x1={w.cx + 80 + (i === 0 ? 0 : 10)} y1={478} x2={W[i + 1].cx - 90} y2={478} at={W[i + 1].at - 8} color={INK_SOFT} width={5} /> : null}
					{w.lake ? <PicV p={w.lake} x={w.cx - TW / 2} y={540} h={TH} at={2} /> : null}
				</g>
			))}
			<AChip x={1100} y={560} text="bacteria use the O_2" size={30} color={GREYX} hand={false} anchor="middle" at={K6.decay} />
			<AChip x={96} y={730} text="toxic blooms: a separate harm" size={30} color={GREYX} hand={false} at={K6.suff + 20} />
			<Sx x={96} y={900} text="Warm water holds less oxygen." size={66} color={RED8} hand weight={700} at={K6.warm} />
			<AChip x={96} y={940} text="Year 11: gases dissolve less when warm" size={30} color={GREYX} hand={false} at={K6.soft} />
			<SodaBottle x={1520} y={830} at={K6.summer} flat={K6.flat} />
			<HTag x={1520} y={1000} text="a warm soft drink goes flat" size={34} color={INK_SOFT} anchor="middle" at={K6.soft} />
			{void K6.chain}{void K6.grows}{void K6.crashes}{void K6.five}{void NB}{void OUTLET}
		</svg>
	);
};
