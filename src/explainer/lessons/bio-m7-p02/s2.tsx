// M7 P02 (Biology practical) scenes 6 to 10: plate, label, tape, incubate (a drop from the micropipette, the coded
// spreader, three plates per dilution, the base label, two tape strips, the flip, the incubator, the inverted side view
// with condensation on the lid, the 25 to 30 °C band and the crossed 37 °C); the two controls (sterile water: no
// growth, and the crossfade to a contaminated control; a supplied risk group 1 culture: growth, taped like the set);
// reading the plates (the aligned 10^-1 to 10^-4 row, the 30 to 300 bracket, the count grid and tallies); scale back
// (task, grouped givens, the equation term by term, one stage at a time, the result kept); what colonies can and
// can't show (mixed colonies, viruses do not grow on agar, the hook's plates and the claim card).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Heading, Overlay, Ring} from '../bio-m5-b13/shared';
import {S} from './common';
import {
	AMBER, AMBER_INK, BaseLabel, FONT_DISPLAY, Bench, CTag, CountGrid, CrossChip, Dish, DrawPath, FEAT, GREEN, GREYT, GREY_INK, GTag, INK, INK_SOFT, InvertedSide, MovingDrop, PLATES, Pl,
	PlateB, QUESTION, RZ, Rail, RowBox, SpreaderArc, SrcCount, Sx, TEAL, TERRA, TapeStrips, TempBand, WText, clamp01, crossChipW, dishGeo, fitW, lerp, prog, ptOf, smooth,
	tw, vis,
} from './parts';

// ---------- 6. Plate, label, tape, incubate ----------
const K6 = cues(S('plate-incubate'), {point: 'point one of a', three: 'three plates', base: 'base', swapped: 'lids get swapped', tape: 'two short strips', air: 'air gets in', upside: 'upside down', cond: 'condensation', t25: 'twenty five to thirty', days: 'two days', never: 'Never thirty seven', body: 'body temperature'});
export const ScenePlate: React.FC = () => {
	const f = useCurrentFrame();
	const D = {cx: 720, cy: 560, w: 360};
	const g = dishGeo(PLATES.agar, D.cx, D.cy, D.w, FEAT.agarDish.c, FEAT.agarDish.rim);
	const P = {cx: 300, cy: 430, w: fitW(PLATES.pipette, 360, 260)};
	const tip = ptOf(PLATES.pipette, P.cx, P.cy, P.w, FEAT.tip);
	const outA = prog(f, K6.upside + 20, 16);
	const flip = prog(f, K6.upside, 20);
	const sy = Math.abs(Math.cos(flip * Math.PI)) * (flip > 0.5 ? -1 : 1);
	const into = smooth(prog(f, K6.upside + 24, 26));
	const INC = {cx: 430, cy: 590, w: fitW(PLATES.incubator, 540, 440)};
	const stack = ptOf(PLATES.incubator, INC.cx, INC.cy, INC.w, FEAT.stack);
	const disp = ptOf(PLATES.incubator, INC.cx, INC.cy, INC.w, FEAT.display);
	const chips = [
		{t: 'label the base: lids get swapped', at: K6.base + 6, c: AMBER_INK},
		{t: "tape, don't seal: air gets in", at: K6.tape + 6, c: AMBER_INK},
		{t: 'inverted: drips stay off the agar', at: K6.cond, c: AMBER_INK},
	];
	return (
		<>
			<Heading text={QUESTION} at={-200} size={54} />
			<Overlay>
				<Rail lit={3} at={4} />
				<Bench />
				<g opacity={1 - outA}>
					<Pl p={PLATES.pipette} cx={P.cx} cy={P.cy} w={P.w} />
					<MovingDrop a={[tip[0], tip[1] + 6]} b={[g.x, g.y - 10]} at={K6.point} dur={26} label="0.1 mL" />
					<SpreaderArc x={g.x} y={g.y} r={g.r} at={K6.point + 34} dur={40} />
					<GTag x={D.cx} y={770} text="0.1 mL, spread evenly" at={K6.point + 34} out={K6.three + 30} size={24} anchor="middle" />
					{[0, 1, 2].map(i => <Dish key={i} p={PLATES.agar} cx={500 + i * 140} cy={880} w={110} o={prog(f, K6.three + i * 6, 12)} />)}
					<Sx x={420} y={892} text="10⁻³" size={30} color={INK} weight={700} anchor="end" at={K6.three} />
					<GTag x={860} y={862} text="3 plates each" at={K6.three + 18} size={24} />
					<Pl p={PLATES.tape} cx={1110} cy={430} w={fitW(PLATES.tape, 150, 150)} o={prog(f, K6.tape, 12)} />
				</g>
				{/* the dish: labelled, taped, flipped, then into the incubator */}
				<g transform={`translate(${lerp(g.x, stack[0], into)},${lerp(g.y, stack[1], into)}) scale(${lerp(1, 0.2, into)},${lerp(1, 0.2, into) * (flip > 0 ? sy : 1)}) translate(${-g.x},${-g.y})`} opacity={1 - prog(f, K6.upside + 44, 10)}>
					<Dish p={PLATES.agar} cx={D.cx} cy={D.cy} w={D.w} />
					<BaseLabel x={g.x} y={g.y} r={g.r} at={K6.base} />
					<TapeStrips x={g.x} y={g.y} r={g.r} at={K6.tape} />
				</g>
				<Pl p={PLATES.incubator} cx={INC.cx} cy={INC.cy} w={INC.w} o={prog(f, K6.upside + 18, 16)} />
				<g opacity={prog(f, K6.t25, 12)}>
					<rect x={disp[0] - 40} y={disp[1] - 18} width={80} height={36} rx={6} fill="#20302a" />
					<Sx x={disp[0]} y={disp[1] + 10} text="28 °C" size={22} color="#9fe3b0" weight={700} anchor="middle" at={-100} />
				</g>
				<InvertedSide x={920} y={480} w={260} at={K6.upside + 24} dropsAt={K6.cond + 6} />
				<TempBand x={760} y={830} w={440} at={K6.t25} mark37={prog(f, K6.never, 10)} />
				<GTag x={980} y={940} text="2 days (48 h)" at={K6.days} size={22} anchor="middle" />
				{chips.map((c, i) => <CTag key={i} x={RZ.x} y={260 + i * 84} text={c.t} at={c.at} color={c.c} size={30} maxW={RZ.w} dim={i < 2 ? prog(f, chips[i + 1].at, 10) : 0} />)}
				<CrossChip x={RZ.x} y={560} text="37 °C" at={K6.never} cross={K6.never + 16} size={36} />
				<WText x={RZ.x + 6} y={672} text="body temperature favours microbes adapted to us" size={26} maxW={RZ.w - 10} color={GREY_INK} weight={600} at={K6.body} />
				{void K6.swapped}{void K6.air}{void GREEN}{void tw}
			</Overlay>
		</>
	);
};

// ---------- 7. Two controls ----------
const K7 = cues(S('controls'), {neg: 'negative control', sterile: 'sterile water', nothing: 'grow nothing', ifgrows: 'If it grows colonies', added: 'added microbes', doubt: 'in doubt', pos: 'positive control', harmless: 'known harmless culture', grow: ['should grow', 2], shows: 'shows the agar'});
export const SceneControls: React.FC = () => {
	const f = useCurrentFrame();
	const swap = prog(f, K7.ifgrows, 14), back = prog(f, K7.doubt + 20, 14);
	const R1 = {cx: 280, cy: 425, w: 270}, R2 = {cx: 280, cy: 775, w: 270};
	const pg = dishGeo(PLATES.posCtl, R2.cx, R2.cy, R2.w, FEAT.pos.c, FEAT.pos.rim);
	const both = 'both controls test the same thing';
	return (
		<>
			<Heading text={QUESTION} at={-200} size={54} />
			<Overlay>
				<Rail lit={1} at={4} />
				<RowBox x={100} y={255} w={1740} h={335} at={K7.neg - 6} />
				<RowBox x={100} y={608} w={1740} h={335} at={K7.pos - 6} />
				<Dish p={PLATES.clear} cx={R1.cx} cy={R1.cy} w={R1.w} o={prog(f, K7.neg, 14) * (1 - swap + back)} />
				<Dish p={PLATES.few} cx={R1.cx} cy={R1.cy} w={R1.w} rot={180} o={swap * (1 - back)} />
				<WText x={470} y={330} text="negative control: sterile water, same handling → expect no growth" size={36} maxW={1330} color={GREEN} hand weight={700} at={K7.sterile} />
				<CTag x={470} y={440} text="growth here → contamination: results invalid" at={K7.added} color={TERRA} size={34} dim={prog(f, K7.pos, 12)} />
				<Dish p={PLATES.posCtl} cx={R2.cx} cy={R2.cy} w={R2.w} o={prog(f, K7.pos, 14)} />
				<TapeStrips x={pg.x} y={pg.y} r={pg.r} at={K7.pos + 8} />
				<GTag x={470} y={650} text="known harmless culture (supplied, risk group 1)" at={K7.harmless} size={26} />
				<WText x={470} y={760} text="positive control: expect growth → agar and conditions work" size={36} maxW={1330} color={GREEN} hand weight={700} at={K7.grow} />
				<CrossChip x={1840 - crossChipW(both, 30) - 20} y={860} text={both} at={K7.shows + 30} cross={K7.shows + 62} size={30} />
				{void K7.nothing}{void INK}
			</Overlay>
		</>
	);
};

// ---------- 8. Reading the plates ----------
const K8 = cues(S('reading-plates'), {series: "sample's series", m1: 'minus one', film: 'a film', m2: 'minus two', merging: 'colonies merging', m3: 'minus three', avg: 'averages', m4: 'minus four', fourteen: 'only fourteen', range: 'thirty to three hundred', above: 'Above that', low: 'count runs low', below: 'Below it', chance: 'chance matters'});
export const ROWX = [290, 690, 1090, 1490];
const ROW_Y = 520, ROW_W = 330;
export const SERIES = [PLATES.lawn, PLATES.crowded, PLATES.countable, PLATES.sparse];
export const DIL = ['10⁻¹', '10⁻²', '10⁻³', '10⁻⁴'];
export const SceneReading: React.FC = () => {
	const f = useCurrentFrame();
	const at = [K8.m1, K8.m2, K8.m3, K8.m4];
	const chip = ['film', 'merging', '156 (mean of 3 plates)', '14'];
	const chipAt = [K8.film, K8.merging, K8.avg, K8.fourteen];
	return (
		<>
			<Heading text={QUESTION} at={-200} size={54} />
			<Overlay>
				<Rail lit={4} at={4} />
				{SERIES.map((p, i) => (
					<g key={i}>
						<Sx x={ROWX[i]} y={320} text={DIL[i]} size={44} color={INK} weight={700} anchor="middle" at={at[i] - 4} />
						<Dish p={p} cx={ROWX[i]} cy={ROW_Y} w={ROW_W} o={prog(f, at[i], 14)} />
						<CTag x={ROWX[i]} y={720} text={chip[i]} at={chipAt[i]} color={i === 2 ? AMBER_INK : INK_SOFT} size={i === 2 ? 34 : 32} anchor="middle" />
					</g>
				))}
				<Ring cx={ROWX[2]} cy={ROW_Y} rx={184} ry={184} at={K8.range} color={GREEN} width={6} />
				<Sx x={ROWX[2]} y={830} text="count: about 30 to 300" size={36} color={GREEN} hand weight={700} anchor="middle" at={K8.range + 6} />
				<CTag x={ROWX[1]} y={800} text="too many: merged colonies count as one" at={K8.low} color={INK_SOFT} size={28} maxW={360} anchor="middle" dim={prog(f, K8.chance, 10)} />
				<CTag x={ROWX[3]} y={800} text="too few: a few colonies more or less changes the result a lot" at={K8.chance} color={INK_SOFT} size={28} maxW={380} anchor="middle" />
				<CountGrid cx={ROWX[2]} cy={ROW_Y} w={ROW_W} at={K8.chance + 30} pts={FEAT.tally} step={5} p={PLATES.countable} />
				<GTag x={ROWX[2]} y={960} text="mark each colony on the base as you count" at={K8.chance + 40} size={24} anchor="middle" />
				<GTag x={1850} y={1018} text="site example" at={K8.series} size={22} anchor="end" />
				{void K8.above}{void K8.below}{void AMBER}
			</Overlay>
		</>
	);
};

// ---------- 9. Scale back: CFU per mL ----------
const K9 = cues(S('scale-back'), {scale: 'scale back', cfu: 'CFU per millilitre is', count: 'colony count', volume: 'volume plated', dilution: 'the dilution', n156: 'a hundred and fifty six', p1: 'point one times', pt: 'Point one times ten', four: 'minus four', held: 'the sample held', million: 'one point five six million'});
/** A display-font line built from pieces that write on at their own frames; `dim` greys it. */
export const Pieces: React.FC<{x: number; y: number; parts: {t: string; at: number; color?: string}[]; size?: number; dim?: number}> = ({x, y, parts, size = 40, dim = 0}) => {
	let cx = x;
	return (
		<g opacity={1 - 0.45 * clamp01(dim)}>
			{parts.map((p, i) => {
				const x0 = cx;
				cx += tw(p.t, size);
				return <Sx key={i} x={x0} y={y} text={p.t} size={size} color={dim > 0.5 ? GREY_INK : p.color ?? INK} weight={700} at={p.at} />;
			})}
		</g>
	);
};
/** One display-font text line whose spans write on at their own frames (exact spacing: one <text>, many <tspan>). */
export const Spans: React.FC<{x: number; y: number; parts: {t: string; at: number; color?: string}[]; size?: number; dim?: number}> = ({x, y, parts, size = 40, dim = 0}) => {
	const f = useCurrentFrame();
	const d = clamp01(dim) > 0.5;
	return (
		<text x={x} y={y} style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: size, whiteSpace: 'pre'}} opacity={1 - 0.45 * clamp01(dim)}>
			{parts.map((p, i) => <tspan key={i} fill={d ? GREY_INK : p.color ?? INK} opacity={prog(f, p.at, 10)}>{p.t}</tspan>)}
		</text>
	);
};
/** An amber underline under a span of a display line. */
export const Under: React.FC<{x: number; y: number; w: number; at: number; color?: string}> = ({x, y, w, at, color = AMBER}) => {
	const f = useCurrentFrame();
	return f >= at ? <DrawPath d={`M${x},${y} L${x + w},${y}`} at={at} dur={10} color={color} width={5} /> : null;
};
export const SceneScale: React.FC = () => {
	const f = useCurrentFrame();
	const X = 700, GS = 34, VC = 250;
	const g1 = 'colonies: ', g2 = 'volume plated: ', g3 = 'dilution: ';
	const fin = prog(f, K9.million, 12);
	return (
		<>
			<Heading text={QUESTION} at={-200} size={54} />
			<Overlay>
				<Rail lit={4} at={-100} />
				<Bench w={580} />
				{SERIES.map((p, i) => <Dish key={i} p={p} cx={150 + i * 140} cy={320} w={120} dim={i === 2 ? 0 : 0.7} />)}
				{DIL.map((d, i) => <Sx key={i} x={150 + i * 140} y={410} text={d} size={24} color={i === 2 ? INK : GREY_INK} weight={700} anchor="middle" at={-100} />)}
				<Dish p={PLATES.countable} cx={360} cy={680} w={330} />
				<CTag x={360} y={870} text="156 (mean of 3 plates)" at={-100} color={AMBER_INK} size={30} anchor="middle" />
				<Sx x={X} y={300} text="Find CFU per mL in the original sample" size={40} color={INK} weight={800} at={K9.scale} />
				{[[g1, '156 (mean)', 370, K9.scale + 10], [g2, '0.1 mL', 420, K9.scale + 16], [g3, '10⁻³', 470, K9.scale + 22]].map(([a, b, y, at]) => (
					<g key={a as string}>
						<Sx x={X} y={y as number} text={a as string} size={GS} color={INK_SOFT} weight={600} at={at as number} />
						<Sx x={X + VC} y={y as number} text={b as string} size={GS} color={INK} weight={700} at={at as number} />
					</g>
				))}
				<Under x={X + VC} y={382} w={tw('156', GS) * 0.86} at={K9.n156} />
				<Under x={X + VC} y={432} w={tw('0.1 mL', GS) * 0.86} at={K9.p1} />
				<Under x={X + VC} y={482} w={tw('10⁻³', GS) * 0.8} at={K9.p1 + 18} />
				<Spans x={X} y={580} size={40} dim={fin} parts={[{t: 'CFU per mL = ', at: K9.cfu}, {t: 'colonies ', at: K9.count, color: AMBER_INK}, {t: '÷ (volume plated ', at: K9.volume}, {t: '× dilution)', at: K9.dilution}]} />
				<Spans x={X} y={670} size={40} dim={fin} parts={[{t: '= 156 ÷ (0.1 × 10⁻³)', at: K9.n156}]} />
				<Spans x={X} y={760} size={36} dim={fin} parts={[{t: '0.1 × 10⁻³ = 10⁻⁴ mL of original sample on the plate', at: K9.four}]} />
				<Sx x={X} y={806} text="the plate got a ten-thousandth of a millilitre" size={28} color={GREY_INK} weight={600} at={K9.four + 10} />
				<Sx x={X} y={910} text="= 1.56 × 10⁶ CFU per mL" size={56} color={AMBER_INK} weight={800} at={K9.million} />
				{void K9.pt}{void K9.held}{void Pl}{void lerp}
			</Overlay>
		</>
	);
};

// ---------- 10. What colonies can and can't show ----------
const K10 = cues(S('what-it-shows'), {careful: 'be careful', colonies: 'Colonies show', most: 'most are harmless', spot: "can't spot a pathogen", viruses: "viruses won't grow", creek: 'the creek carries', more: 'more microbes that grow here', pathogens: 'proven pathogens', nocol: 'no colonies', prove: "doesn't prove water is safe", tenth: 'a tenth of a millilitre'});
export const SceneShows: React.FC = () => {
	const f = useCurrentFrame();
	const outA = prog(f, K10.creek - 6, 16);
	const inB = prog(f, K10.creek, 16);
	const PX = [220, 520, 820], PY = 650, PWB = 250;
	const c1 = '214 = disease?', c2 = '0 colonies = safe?';
	const w1 = crossChipW(c1), w2 = crossChipW(c2);
	return (
		<>
			<Heading text={QUESTION} at={-200} size={54} />
			<Overlay>
				<Rail lit={5} at={4} />
				<Bench w={1000} />
				<g opacity={1 - outA}>
					<Pl p={PLATES.mixed} cx={330} cy={460} w={fitW(PLATES.mixed, 440, 290)} o={prog(f, K10.colonies - 6, 14)} />
					<GTag x={330} y={660} text="mixed colonies: look tells you little" at={K10.spot} size={24} anchor="middle" />
					<CTag x={330} y={716} text="most: harmless environmental microbes" at={K10.most} color={TEAL} size={30} anchor="middle" />
					<Pl p={PLATES.virus} cx={830} cy={420} w={130} o={prog(f, K10.viruses, 12)} />
					<g opacity={prog(f, K10.viruses + 8, 12)}>
						<rect x={760} y={520} width={140} height={34} rx={6} fill="#e9dcb0" stroke="#c9b67a" strokeWidth={2} />
						<DrawPath d="M775,505 L885,570 M885,505 L775,570" at={K10.viruses + 16} dur={12} color={GREYT} width={6} />
					</g>
					<GTag x={830} y={600} text="viruses: need living cells, no colonies" at={K10.viruses + 14} size={24} anchor="middle" />
				</g>
				<g opacity={inB}>
					{[PLATES.few, PLATES.creek, PLATES.clear].map((p, i) => <Dish key={i} p={p} cx={PX[i]} cy={PY} w={PWB} />)}
					<SrcCount x={PX[0]} y={PY + 175} src="tap" count="3" at={-100} size={34} />
					<SrcCount x={PX[1]} y={PY + 175} src="creek" count="214" at={-100} size={34} />
					<SrcCount x={PX[2]} y={PY + 175} src="tank" count="0" at={-100} size={34} />
				</g>
				<CrossChip x={PX[1] - w1 / 2} y={430} text={c1} at={K10.more} cross={K10.pathogens + 6} size={32} />
				<CrossChip x={PX[2] - w2 / 2} y={350} text={c2} at={K10.nocol} cross={K10.prove + 10} size={32} />
				<GTag x={110} y={890} text="0.1 mL tested; the guideline uses at least 100 mL" at={K10.tenth} size={24} />
				{/* the claim card */}
				<RowBox x={1100} y={260} w={760} h={640} at={K10.more - 6} color="rgba(60,45,20,0.3)" />
				<line x1={1480} x2={1480} y1={280} y2={880} stroke="rgba(60,45,20,0.2)" strokeWidth={2} opacity={prog(f, K10.more - 6, 12)} />
				<Sx x={1130} y={320} text="shows" size={36} color={TEAL} hand weight={700} at={K10.more - 6} />
				<Sx x={1505} y={320} text="doesn't show" size={36} color={TERRA} hand weight={700} at={K10.more - 6} />
				<WText x={1130} y={390} text="creek: more culturable microbes than tap or tank" size={32} maxW={330} color={TEAL} hand weight={700} at={K10.more} />
				<WText x={1505} y={390} text="which microbes are pathogens" size={32} maxW={330} color={TERRA} hand weight={700} at={K10.pathogens} />
				<WText x={1505} y={560} text="tank: 0 colonies in 0.1 mL ≠ safe" size={32} maxW={330} color={TERRA} hand weight={700} at={K10.prove} />
				{void K10.careful}{void vis}{void smooth}{void PlateB}
			</Overlay>
		</>
	);
};
