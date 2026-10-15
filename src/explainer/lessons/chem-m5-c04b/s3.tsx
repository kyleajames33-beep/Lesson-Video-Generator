import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER_INK, FONT_DISPLAY, FONT_HAND, HandText, INK, INK_SOFT, PAPER_DEEP, prog} from '../../kit';
import {cues} from '../../cues';
import {Arrow, Curve, Fade, FWD, GasTube, GraphAxes, Head, Overlay, Pill, RateBars, Ring, Seesaw, StageTable, Strip, SvgText, TEAL, TubeKey, VLine, WrongChip, mkG, pillW} from './parts';
import type {TRow} from './parts';
import {HI_INK, I2C, I2_DEEP, I2_INK, METAL_DARK, Heading, kf, modelA, modelB, sc, tubeColour} from './common';

const GG = mkG(900, 304, 900, 356, 16, 15);
const HI_LINE = '#3d424a';

/** Clock dial: ring fills with the clock reading. */
const Dial: React.FC<{cx: number; cy: number; r: number; clock: number; at: number; label?: string}> = ({cx, cy, r, clock, at, label = 'clock'}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 12);
	if (o <= 0.01) return null;
	const c = 2 * Math.PI * r;
	return (
		<g opacity={o}>
			<circle cx={cx} cy={cy} r={r} fill="#fffdf8" stroke={PAPER_DEEP} strokeWidth={12} />
			<circle cx={cx} cy={cy} r={r} fill="none" stroke="#e8a317" strokeWidth={12} strokeLinecap="round" strokeDasharray={c} strokeDashoffset={c * (1 - Math.min(1, clock / 16))} transform={`rotate(-90 ${cx} ${cy})`} />
			<text x={cx} y={cy + 13} textAnchor="middle" fill={INK} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 36}}>{clock.toFixed(1)}</text>
			<text x={cx} y={cy + r + 44} textAnchor="middle" fill={INK_SOFT} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42}}>{label}</text>
		</g>
	);
};
const Legend: React.FC<{at: number; both?: boolean}> = ({at, both = false}) => (
	<Fade at={at}>
		<path d="M900,226 L950,226" stroke={I2C} strokeWidth={7} strokeLinecap="round" />
		<SvgText x={962} y={238} text="I_2" size={32} color={I2_INK} hand={false} weight={700} at={at} />
		<path d="M1020,226 L1070,226" stroke={HI_LINE} strokeWidth={7} strokeLinecap="round" />
		<SvgText x={1082} y={238} text="HI" size={32} color={HI_INK} hand={false} weight={700} at={at} />
		{both ? <>
			<path d="M1150,226 L1200,226" stroke={INK_SOFT} strokeWidth={3.5} strokeLinecap="round" />
			<SvgText x={1212} y={238} text="thin: tube A" size={30} color={INK_SOFT} hand={false} weight={600} at={at} />
			<path d="M1410,226 L1460,226" stroke={INK} strokeWidth={9} strokeLinecap="round" />
			<SvgText x={1472} y={238} text="thick: tube B" size={30} color={INK} hand={false} weight={600} at={at} />
		</> : null}
	</Fade>
);
const NoteCard: React.FC<{x: number; y: number; w: number; lines: string[]; at: number; color?: string; size?: number}> = ({x, y, w, lines, at, color = INK, size = 32}) => (
	<Fade at={at}>
		<rect x={x} y={y} width={w} height={lines.length * (size + 14) + 22} rx={16} fill="#fffdf8" stroke={color} strokeWidth={3} />
		{lines.map((l, k) => <SvgText key={k} x={x + 22} y={y + 14 + size + k * (size + 14)} text={l} size={size} color={color} hand={false} weight={600} at={at + k * 4} />)}
	</Fade>
);

// ---------- 4a. Tube A, no catalyst ----------
const KA = cues(sc('tube-a'), {nineH: 'nine units of hydrogen', nineI: 'nine of iodine', noHI: 'no hydrogen iodide', fwdRate: 'The forward rate', makes: 'which makes hydrogen iodide', high: 'starts high', four: 'about four', falls: 'and falls', revRate: 'The reverse rate', zero: 'starts at zero', rises: 'and rises', thirteen: 'At about thirteen', nearly: 'nearly equal', fifth: 'close to a fifth', settles: 'the mixture settles', twoH: 'about two units of hydrogen', twoI: 'two of iodine', fourteen: 'fourteen of hydrogen iodide'});
export const SceneTubeA: React.FC = () => {
	const f = useCurrentFrame();
	const clock = kf(f, [[KA.rises, 0], [KA.nearly + 10, 13.4], [KA.nearly + 40, 16]], false);
	const dial = Math.min(13.4, clock);
	const s = modelA(clock);
	const reveal = prog(f, 4, 20);
	const run = f >= KA.rises;
	const rows: TRow[] = [
		{label: 'A start', at: KA.nineH - 6, cells: [['9', KA.nineH + 10], ['9', KA.nineI + 8], ['0', KA.noHI + 14], ['about 4', KA.four + 6], ['0', KA.zero + 8], ['', 0]]},
		{label: 'A settled, about', at: KA.thirteen, color: TEAL, cells: [['2', KA.twoH + 8], ['2', KA.twoI + 6], ['14', KA.fourteen + 8], ['0.2', KA.fifth + 14], ['0.2', KA.fifth + 26], ['13', KA.thirteen + 14]]},
	];
	return (
		<>
			<Heading text="Tube A: no catalyst" at={4} />
			<Overlay>
				<Fade at={KA.nineH}><Pill x={96} y={178} w={pillW('made-up numbers to show the pattern', 34) + 10} text="made-up numbers to show the pattern" at={KA.nineH} color={INK_SOFT} size={34} h={58} /></Fade>
				<GasTube x={96} y={262} w={620} h={140} counts={{h: s.h, i: s.i, hi: s.hi}} seed={5} reveal={reveal} />
				<TubeKey x={110} y={478} at={KA.nineH - 20} />
				<Strip x={250} y={552} w={380} from={I2_DEEP} to={tubeColour(2)} t={Math.min(1, (9 - s.i) / 7)} at={KA.nineI} label="colour" />
				<Dial cx={790} cy={410} r={40} clock={dial} at={KA.rises - 20} />
				{/* rate bars */}
				<RateBars x0={140} base={840} scale={40} fwd={s.fwd} rev={s.rev} at={KA.fwdRate} fwdLabel={run ? s.fwd.toFixed(1) : 'about 4'} revLabel={run ? s.rev.toFixed(1) : '0'} eqAt={KA.nearly} subs={['makes HI', 'splits HI']} />
				<Arrow x1={272} y1={840 - 150} x2={272} y2={840 - 85} at={KA.falls} color={FWD} width={8} out={KA.rises + 10} />
				<Fade at={KA.falls + 8} out={KA.rises + 10}><SvgText x={288} y={840 - 112} text="falls" size={46} color={FWD} at={KA.falls + 8} /></Fade>
				<Arrow x1={512} y1={815} x2={512} y2={745} at={KA.rises} color={AMBER_INK} width={8} out={KA.rises + 60} />
				<Fade at={KA.rises + 6} out={KA.rises + 60}><SvgText x={528} y={790} text="rises" size={46} color={AMBER_INK} at={KA.rises + 6} /></Fade>
				{/* graph */}
				<GraphAxes g={GG} at={KA.fwdRate - 20} />
				<Legend at={KA.fwdRate - 10} />
				<Curve g={GG} fn={t => modelA(t).i} upTo={clock} color={I2C} width={5} opacity={0.9} />
				<Curve g={GG} fn={t => modelA(t).hi} upTo={clock} color={HI_LINE} width={5} />
				<Head g={GG} t={clock} v={s.i} color={I2C} show={run && clock < 16} />
				<Head g={GG} t={clock} v={s.hi} color="#c9ccd2" show={run && clock < 16} />
				<VLine g={GG} t={13} at={KA.thirteen} label="A settles about 13" color={INK_SOFT} dy={-30} size={34} />
				<Fade at={KA.settles}><SvgText x={GG.px(13) + 14} y={GG.py(10.3)} text="near enough" size={36} color={INK_SOFT} at={KA.settles} /></Fade>
				<NoteCard x={1220} y={402} w={580} lines={['each reaction uses 1 H_2 and 1 I_2', 'and makes 2 HI']} at={KA.thirteen + 30} color={INK} size={30} />
				<NoteCard x={1220} y={512} w={580} lines={['settles = almost stops changing']} at={KA.settles} color={TEAL} size={30} />
				<StageTable rows={rows} at={KA.nineH - 20} />
				<Ring cx={GG.px(13.4)} cy={GG.py(2.1)} rx={46} ry={34} at={KA.twoH + 30} out={KA.twoH + 110} color={TEAL} seed={4} />
			</Overlay>
		</>
	);
};

// ---------- 4b. Tube B, with the catalyst ----------
const KB = cues(sc('tube-b'), {now: 'Now the tube with the catalyst', same: 'same start', any: 'At any mixture', tenX: 'ten times the first', every: 'So every change', tenth: 'a tenth of the time', div: 'thirteen divided by ten', onept: 'one point three', follows: 'It follows the same path', film: 'same film', played: 'played at ten times'});
export const SceneTubeB: React.FC = () => {
	const f = useCurrentFrame();
	const clock = kf(f, [[KB.any, 0], [KB.any + 270, 13.4]], false);
	const sa = modelA(clock), sb = modelB(clock);
	const rows: TRow[] = [
		{label: 'A start', at: -100, cells: [['9', -100], ['9', -100], ['0', -100], ['about 4', -100], ['0', -100], ['', 0]]},
		{label: 'A settled, about', at: -100, cells: [['2', -100], ['2', -100], ['14', -100], ['0.2', -100], ['0.2', -100], ['13', -100]]},
		{label: 'B settled, about', at: KB.div, color: TEAL, cells: [['2', KB.div + 8], ['2', KB.div + 14], ['14', KB.div + 20], ['2', KB.div + 28], ['2', KB.div + 34], ['1.3', KB.onept + 8]]},
	];
	const blueClock = clock;
	return (
		<>
			<Heading text="Tube B: with the catalyst" at={4} />
			<Overlay>
				<SvgText x={96} y={236} text="tube A: no catalyst" size={42} color={INK_SOFT} at={4} />
				<GasTube x={96} y={252} w={620} h={110} counts={{h: sa.h, i: sa.i, hi: sa.hi}} seed={5} reveal={0.85} />
				<Fade at={KB.now}>
					<SvgText x={96} y={520} text="tube B: with the metal catalyst" size={42} color={METAL_DARK} at={KB.now} />
				</Fade>
				<g opacity={prog(f, KB.now, 16)} transform={`translate(0,${(1 - prog(f, KB.now, 16)) * 30})`}>
					<GasTube x={96} y={536} w={620} h={110} counts={{h: sb.h, i: sb.i, hi: sb.hi}} seed={9} heavy />
				</g>
				<Fade at={KB.tenX}><SvgText x={96} y={706} text="its rates are x10 at the same mixture" size={40} color={METAL_DARK} at={KB.tenX} /></Fade>
				{/* play button: the same film at ten times the speed */}
				<Fade at={KB.film}>
					<circle cx={170} cy={440} r={36} fill="#fffdf8" stroke={TEAL} strokeWidth={6} />
					<path d="M158,422 L158,458 L190,440 Z" fill={TEAL} />
					<SvgText x={224} y={454} text="the same film at x10 speed" size={42} color={TEAL} at={KB.film} />
				</Fade>
				<Strip x={250} y={782} w={380} from={I2_DEEP} to={tubeColour(2)} t={Math.min(1, (9 - sa.i) / 7)} at={KB.any} label="A" />
				<Strip x={250} y={838} w={380} from={I2_DEEP} to={tubeColour(2)} t={Math.min(1, (9 - sb.i) / 7)} at={KB.any} label="B" />
				<TubeKey x={110} y={752} at={KB.same} scale={false} />
				<Dial cx={790} cy={420} r={40} clock={blueClock} at={KB.any - 10} />
				{/* graph */}
				<GraphAxes g={GG} at={4} />
				<Legend at={4} both />
				<Curve g={GG} fn={t => modelA(t).i} upTo={16} color={I2C} width={4} opacity={0.3} />
				<Curve g={GG} fn={t => modelA(t).hi} upTo={16} color={HI_LINE} width={4} opacity={0.3} />
				<Curve g={GG} fn={t => modelA(t).i} upTo={clock} color={I2C} width={4} opacity={0.9} />
				<Curve g={GG} fn={t => modelA(t).hi} upTo={clock} color={HI_LINE} width={4} opacity={0.9} />
				<Curve g={GG} fn={t => modelB(t).i} upTo={clock} color={I2C} width={10} />
				<Curve g={GG} fn={t => modelB(t).hi} upTo={clock} color={HI_LINE} width={10} />
				<VLine g={GG} t={13} at={KB.div} label="A settles about 13" color={INK_SOFT} dy={-30} size={34} />
				<VLine g={GG} t={1.3} at={KB.onept} label="B about 1.3" color={METAL_DARK} dy={GG.h - 8} size={34} dx={14} anchor="start" />
				<Fade at={KB.follows}>
					<path d={`M${GG.x},${GG.py(14)} L${GG.x + GG.w},${GG.py(14)}`} stroke={TEAL} strokeWidth={3.5} strokeDasharray="12 9" />
					<SvgText x={GG.x + GG.w - 4} y={GG.py(14) + 36} text="same level" size={38} color={TEAL} anchor="end" at={KB.follows} />
				</Fade>
				<Fade at={KB.div}><SvgText x={1250} y={470} text="13 / 10 = 1.3" size={78} color={METAL_DARK} at={KB.div + 4} /></Fade>
				<Fade at={KB.follows + 20}><SvgText x={1250} y={540} text="same curve, ten times narrower" size={44} color={INK} at={KB.follows + 20} /></Fade>
				<StageTable rows={rows} at={4} />
			</Overlay>
		</>
	);
};

// ---------- 4c. Why the same mixture ----------
const KM = cues(sc('same-mixture'), {first: 'In the first tube', fifthA: 'a fifth and a fifth', withCat: 'With the catalyst', ten1: ['ten times a fifth', 1], is1: ['is two', 1], ten2: ['ten times a fifth', 2], is2: ['is two', 2], stillEq: 'still equal', other: 'Any other mixture', tenUn: 'ten times unequal', stillUn: 'still unequal', stops: 'stops changing only', same: 'still the same mixture'});
export const SceneSameMix: React.FC = () => {
	const f = useCurrentFrame();
	const grow1 = kf(f, [[KM.ten1, 0.2], [KM.is1 + 14, 2]]);
	const grow2 = kf(f, [[KM.ten2, 0.2], [KM.is2 + 14, 2]]);
	const gO = kf(f, [[KM.tenUn, 1], [KM.tenUn + 40, 10]]);
	const shrink = prog(f, KM.stops, 30);
	const sc2 = 1 - 0.3 * shrink;
	const BASE = 770, SCALE = 90;
	return (
		<>
			<Heading text="Why the same mixture?" at={4} />
			<Overlay>
				<g transform={`translate(110,${BASE}) scale(${sc2}) translate(-110,${-BASE})`} opacity={1 - 0.2 * shrink}>
					<SvgText x={170} y={250} text="the settled mixture, tube A" size={44} color={INK_SOFT} anchor="start" at={KM.first} />
					<RateBars x0={200} base={BASE} scale={SCALE} fwd={f < KM.ten1 ? 0.2 : grow1} rev={f < KM.ten2 ? 0.2 : grow2} at={KM.first} fwdLabel={f < KM.ten1 ? '0.2' : grow1 > 1.95 ? '2' : grow1.toFixed(1)} revLabel={f < KM.ten2 ? '0.2' : grow2 > 1.95 ? '2' : grow2.toFixed(1)} ghost={f >= KM.ten1 ? {fwd: 0.2, rev: 0.2} : undefined} eqAt={f < KM.ten1 ? KM.fifthA + 20 : f < KM.is2 + 14 ? undefined : KM.is2 + 14} axisLabel={null} />
					<SvgText x={255} y={BASE + 108} text="0.2 x 10 = 2" size={46} color={FWD} anchor="middle" at={KM.is1} />
					<SvgText x={485} y={BASE + 108} text="0.2 x 10 = 2" size={46} color={AMBER_INK} anchor="middle" at={KM.is2} />
					<SvgText x={370} y={BASE + 162} text="rate (units per tick)" size={28} color={INK_SOFT} anchor="middle" at={KM.first} hand={false} weight={600} />
					<Fade at={KM.stillEq}>
						<SvgText x={375} y={BASE - 2 * SCALE - 118} text="net change 0" size={46} color={TEAL} anchor="middle" at={KM.stillEq} />
					</Fade>
					{/* any other mixture */}
					<SvgText x={930} y={250} text="any other mixture, tube A" size={44} color={INK_SOFT} at={KM.other} />
					<RateBars x0={930} base={BASE} scale={SCALE} fwd={0.5 * gO} rev={0.12 * gO} at={KM.other} unlabelled axisLabel={null} />
					<Fade at={KM.tenUn}><SvgText x={1330} y={BASE - 260} text="both x10" size={62} color={INK} at={KM.tenUn} /></Fade>
					<Fade at={KM.stillUn}>
						<path d={`M1288,${BASE - 0.5 * 10 * SCALE} L1330,${BASE - 0.5 * 10 * SCALE} L1330,${BASE - 0.12 * 10 * SCALE} L1288,${BASE - 0.12 * 10 * SCALE}`} fill="none" stroke={INK} strokeWidth={6} strokeLinecap="round" strokeLinejoin="round" />
						<SvgText x={1346} y={BASE - 150} text="still unequal," size={46} color={INK} at={KM.stillUn} />
						<SvgText x={1346} y={BASE - 100} text="still moving" size={46} color={INK} at={KM.stillUn + 8} />
					</Fade>
				</g>
				<Seesaw x={1560} y={470} s={1.5} at={KM.stops + 20} />
				<Fade at={KM.stops + 20}>
					<SvgText x={1560} y={640} text="balance point" size={60} color={TEAL} anchor="middle" at={KM.stops + 20} />
				</Fade>
				<Fade at={KM.same}>
					<SvgText x={1560} y={700} text="the same mixture" size={50} color={INK} anchor="middle" at={KM.same} />
					<SvgText x={1560} y={752} text="H_2 2, I_2 2, HI 14 (units)" size={36} color={INK_SOFT} anchor="middle" at={KM.same + 8} hand={false} weight={600} />
				</Fade>
			</Overlay>
		</>
	);
};

// ---------- 4d. Product in a limited time ----------
const GL = mkG(220, 250, 1300, 520, 16, 15);
const KT = cues(sc('limited-time'), {clock: 'time three', ten: 'about ten units', fourteen: 'already has fourteen', early: 'clock stops early', more: 'more product', long: 'After a long time', same: 'same amount'});
export const SceneLimited: React.FC = () => {
	const f = useCurrentFrame();
	const aV = modelA(3).hi, bV = modelB(3).hi;
	const x3 = GL.px(3);
	return (
		<>
			<Heading text="Product in a limited time" at={4} />
			<Overlay>
				<GraphAxes g={GL} at={4} yLabel="concentration of HI (units)" />
				<Curve g={GL} fn={t => modelA(t).hi} upTo={16} color={HI_LINE} width={5} />
				<Curve g={GL} fn={t => modelB(t).hi} upTo={16} color={HI_LINE} width={11} />
				<SvgText x={GL.px(6)} y={GL.py(14) - 22} text="tube B: catalyst" size={46} color={METAL_DARK} at={8} />
				<SvgText x={GL.px(7.2)} y={GL.py(13.1) + 70} text="tube A: no catalyst" size={46} color={INK_SOFT} at={8} />
				<VLine g={GL} t={3} at={KT.clock} label="clock 3" color={INK} dy={GL.h - 14} size={40} dx={12} anchor="start" />
				<Fade at={KT.ten}><Head g={GL} t={3} v={aV} color="#c9ccd2" r={13} /><SvgText x={x3 + 22} y={GL.py(aV) + 50} text="about 10" size={46} color={INK} at={KT.ten} /></Fade>
				<Fade at={KT.fourteen}><Head g={GL} t={3} v={bV} color="#c9ccd2" r={13} /><SvgText x={x3 + 22} y={GL.py(bV) - 20} text="14" size={46} color={INK} at={KT.fourteen} /></Fade>
				<Fade at={KT.more} out={KT.long}>
					<path d={`M${x3 - 40},${GL.py(bV)} L${x3 - 40},${GL.py(aV)}`} stroke={TEAL} strokeWidth={6} strokeLinecap="round" />
					<path d={`M${x3 - 28},${GL.py(bV)} L${x3 - 40},${GL.py(bV)} M${x3 - 28},${GL.py(aV)} L${x3 - 40},${GL.py(aV)}`} stroke={TEAL} strokeWidth={6} strokeLinecap="round" />
					<Arrow x1={x3 - 50} y1={(GL.py(aV) + GL.py(bV)) / 2} x2={x3 + 80} y2={560} at={KT.more} color={TEAL} width={5} />
					<SvgText x={x3 + 60} y={600} text="more product if the clock stops early" size={52} color={TEAL} at={KT.more + 6} />
					<SvgText x={x3 + 60} y={650} text="early = before the slower tube has settled" size={32} color={INK} at={KT.more + 12} hand={false} weight={600} />
				</Fade>
				<Fade at={KT.long}>
					<rect x={GL.px(13)} y={GL.y} width={GL.px(16) - GL.px(13)} height={GL.h} fill="rgba(13,107,82,0.12)" />
					<path d={`M${GL.px(13)},${GL.py(13.85)} L${GL.px(16)},${GL.py(13.85)}`} stroke={TEAL} strokeWidth={8} strokeLinecap="round" />
					<SvgText x={GL.px(15.9)} y={GL.py(13.85) + 80} text="same amount" size={54} color={TEAL} anchor="end" at={KT.same} />
					<SvgText x={GL.px(15.9)} y={GL.py(13.85) + 126} text="at equilibrium" size={44} color={TEAL} anchor="end" at={KT.same + 6} />
				</Fade>
				<WrongChip at={KT.same + 10} out={9999} x={GL.px(4.2)} y={500} chip="a catalyst gives more product at equilibrium" fix="Not so: both tubes settle at the same amount." w={860} />
			</Overlay>
		</>
	);
};
void FONT_DISPLAY; void HandText; void I2C;
