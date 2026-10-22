// M6 P06 scenes 6 to 10: setting up the burette (two acid rinses out through the tap, filled below eye level through a
// funnel that is then removed, the tip filled with the bubble shown leaving in a lens); reading it (the meniscus close-up
// with coded numerals, the sight line from above meeting 0.30, levelling at 0.40); the rough run and the dropwise
// accurate run to the first permanent orange; the results table with the bubble run excluded and repeated, the
// concordance strip and the mean; the calculation through the mole bridge, one line at a time.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {cues} from '../../cues';
import {kf, sc} from './common';
import {BEAKER, FUNNEL, FUN_G, MOSET, WASH, WASH_N} from './assets';
import {
	ACIDFILL, AChip, Bubble, BuretteFill, ConcStrip, DimG, Drip, Drop, EqLine, Fade, GCard, GREYX, INK, INK_SOFT, KeptChip, LensFrame, MenScale, MistakeX, MoleBridge, NAVY, Note, Overlay,
	P, PicH, RX, RingAt, SightLine, StepCard, Stream, Sx, TEAL, TRead, TRig, Table4, TapTurn, TaskLine, UNKI, VBracket2, WLine, burAt, countRead, fitSize, flaskW, lerp, menPt, menW, menY,
	picW, pulseAt, rigFlask, rigPts, smooth, t4Y, vis, wobAt,
} from './parts';
import {MEN_G} from './assets';
import {EQP} from './s1';

// ---------- 6. The burette: rinse, fill, take the funnel out, no bubble ----------
const S6 = 'burette-setup';
const K6 = cues(sc(S6), {next: 'Next', hcl: 'hydrochloric acid', out: 'out through the', fill: 'Fill it through', below: 'below eye level', take: 'take the funnel', drips: 'drips could', open: 'Open the tap', tip: 'fill the tip', bubble: 'air bubble'});
/** Close-up of the burette tip: glass converging to the tip, amber liquid, an air pocket that leaves at `leave`. */
export const TipLens: React.FC<{cx: number; cy: number; r: number; at: number; out?: number; leave: number; title?: string}> = ({cx, cy, r, at, out, leave, title}) => (
	<LensFrame cx={cx} cy={cy} r={r} at={at} out={out} title={title}>
		<path d={`M${cx - 34},${cy - r} L${cx - 34},${cy + 10} L${cx - 10},${cy + r} L${cx + 10},${cy + r} L${cx + 34},${cy + 10} L${cx + 34},${cy - r} Z`} fill={ACIDFILL} opacity={0.75} />
		<path d={`M${cx - 34},${cy - r} L${cx - 34},${cy + 10} L${cx - 10},${cy + r} M${cx + 34},${cy - r} L${cx + 34},${cy + 10} L${cx + 10},${cy + r}`} fill="none" stroke={INK_SOFT} strokeWidth={5} />
		<Bubble x={cx} y={cy - 10} r={22} at={at} leave={leave} dy={r + 30} />
	</LensFrame>
);
export const SceneBuretteSetup: React.FC = () => {
	const f = useCurrentFrame();
	const R = {tx: 760, ty: 860, bh: 640};
	const b = burAt(R.tx, R.ty, R.bh);
	const p = rigPts(R.tx, R.ty, R.bh);
	const r1 = K6.hcl, r2 = K6.out + 4;
	const level = (fr: number) => kf(fr, [[r1, 52], [r1 + 18, 44], [r1 + 22, 44], [r1 + 40, 52], [r2, 52], [r2 + 16, 44], [r2 + 20, 44], [r2 + 36, 52], [K6.fill + 10, 52], [K6.below + 20, -1], [K6.open + 6, -1], [K6.bubble + 30, 0.4]], false);
	const EYE = b.y - 44;
	const fk = 120 / FUNNEL.box[3];
	const lift = smooth(prog(f, K6.take + 6, 26));
	const fx = p.top[0] - (FUN_G.tip[0] - FUNNEL.box[0]) * fk + lift * 180, fy = p.top[1] + 26 - (FUN_G.tip[1] - FUNNEL.box[1]) * fk - lift * 120;
	const WBh = 110, wbw = picW(BEAKER, WBh);
	const drains: [number, number][] = [[r1 + 22, r1 + 40], [r2 + 20, r2 + 36], [K6.open + 6, K6.bubble + 40]];
	const LC = {x: 1060, y: 760, r: 110};
	return (
		<Overlay>
			<StepCard n={3} text="Set up the burette" at={6} />
			<Fade at={K6.below - 10}>
				<line x1={420} y1={EYE} x2={1100} y2={EYE} stroke={GREYX} strokeWidth={3} strokeDasharray="12 10" />
				<Sx x={420} y={EYE - 14} text="eye level" size={30} color={INK_SOFT} hand at={K6.below} />
			</Fade>
			<PicH p={BEAKER} x={p.tip[0] - wbw / 2} y={R.ty + 16} h={WBh} />
			<BuretteFill x={b.x} y={b.y} h={R.bh} level={level} color={ACIDFILL} />
			{drains.map(([a, z], i) => <Drip key={i} x={p.tip[0]} y0={p.tip[1] + 2} y1={R.ty + 16 + WBh - 20} at={a} out={z} />)}
			{drains.map(([a, z], i) => <TapTurn key={'t' + i} x={p.tap[0] + 46} y={p.tap[1]} at={a - 4} out={z} />)}
			<Fade at={K6.fill - 6} out={K6.take + 30}><PicH p={FUNNEL} x={fx} y={fy} h={120} /></Fade>
			<Fade at={K6.bubble - 6}>
				<line x1={p.tip[0] + 10} y1={p.tip[1] - 20} x2={LC.x - LC.r} y2={LC.y} stroke={INK_SOFT} strokeWidth={3} strokeDasharray="6 6" />
			</Fade>
			<TipLens cx={LC.x} cy={LC.y} r={LC.r} at={K6.bubble - 6} leave={K6.bubble + 14} />
			<DimG at={K6.take} to={0.4}><Note x={RX} y={350} text="rinse with the acid: no water to dilute it" size={30} color={UNKI} at={K6.out} /></DimG>
			<DimG at={K6.bubble} to={0.4}><Note x={RX} y={430} text="funnel out: no stray drips" size={32} color={INK} at={K6.drips} /></DimG>
			<Note x={RX} y={510} text="tip full: no bubble" size={36} color={TEAL} at={K6.bubble + 26} />
			{void K6.next}{void K6.tip}
		</Overlay>
	);
};

// ---------- 7. Reading the burette ----------
const S7 = 'burette-reading';
const K7 = cues(sc(S7), {men: 'meniscus', bigger: 'bigger', look: 'Look from above', above: 'above the meniscus', smaller: 'smaller', low: 'too low', parallax: 'parallax', lines: 'The lines are', half: 'half', z05: 'zero point zero five', start: 'This start reading', z40: 'zero point four zero'});
export const MC = {x: 760, y: 200, h: 800};
export const SceneBuretteReading: React.FC = () => {
	const f = useCurrentFrame();
	const M = menPt(MC.x, MC.y, MC.h, MEN_G.cx, MEN_G.bottom);
	const SXp = menPt(MC.x, MC.y, MC.h, MEN_G.tickX[1], 0)[0];
	const y03 = menY(MC.y, MC.h, 0.3), y04 = menY(MC.y, MC.h, 0.4), y05 = menY(MC.y, MC.h, 0.5);
	const A0 = (Math.atan2(M[1] - y03, SXp - M[0]) * 180) / Math.PI;
	const ang = (fr: number) => A0 * (1 - smooth(prog(fr, K7.parallax + 4, 30)));
	const leftX = MC.x - 26, rightX = MC.x + menW(MC.h) + 92;
	const R = {tx: 330, ty: 820, bh: 560};
	const bp = rigPts(R.tx, R.ty, R.bh);
	const bz = bp.tube(260 + (0.4 / 50) * 920);
	return (
		<Overlay>
			<TaskLine text="Read the burette" at={4} size={56} />
			<g opacity={0.9}><BuretteFill {...burAt(R.tx, R.ty, R.bh)} h={R.bh} level={() => 0.4} color={ACIDFILL} /></g>
			<DrawPathSeg a={[bz[0] + 6, bz[1]]} b={[MC.x - 10, M[1]]} at={6} />
			<MenScale x={MC.x} y={MC.y} h={MC.h} at={2} numsAt={10} />
			<RingAt cx={M[0]} cy={M[1] - 8} rx={90} ry={30} at={K7.men} out={K7.above} />
			<DimG at={K7.parallax} to={0.4}>
				<Fade at={K7.bigger}>
					<line x1={leftX} y1={menY(MC.y, MC.h, 0)} x2={leftX} y2={menY(MC.y, MC.h, 0.9)} stroke={INK_SOFT} strokeWidth={4} strokeLinecap="round" />
					<path d={`M${leftX - 12},${menY(MC.y, MC.h, 0.9) - 16} L${leftX},${menY(MC.y, MC.h, 0.9)} L${leftX + 12},${menY(MC.y, MC.h, 0.9) - 16}`} fill="none" stroke={INK_SOFT} strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
				</Fade>
				<Sx x={leftX - 16} y={menY(MC.y, MC.h, 0.45)} text="numbers increase" size={30} color={INK_SOFT} anchor="end" hand at={K7.bigger + 4} />
				<Sx x={leftX - 16} y={menY(MC.y, MC.h, 0.45) + 38} text="going down" size={30} color={INK_SOFT} anchor="end" hand at={K7.bigger + 10} />
			</DimG>
			<SightLine px={M[0]} py={M[1]} len={560} a={ang} at={K7.look} />
			<RingAt cx={SXp} cy={y03} rx={22} ry={22} at={K7.above} out={K7.parallax + 20} color={UNKI} />
			<Sx x={SXp + 140} y={y03 + 120} text="reads 0.30: too low" size={32} color={INK_SOFT} weight={700} at={K7.above + 10} out={K7.parallax + 20} />
			<DimG at={K7.half} to={0.4}>
				<Note x={RX + 140} y={330} text="parallax:" size={40} color={INK} at={K7.parallax} />
				<Note x={RX + 140} y={380} text="the reading shifts with" size={32} color={INK} at={K7.parallax + 10} />
				<Note x={RX + 140} y={420} text="your eye position" size={32} color={INK} at={K7.parallax + 16} />
			</DimG>
			<DimG at={K7.z40} to={0.4}>
				<VBracket2 x={rightX} y1={y04} y2={y05} text="0.1 mL" at={K7.half} size={28} color={TEAL} />
				<Fade at={K7.half + 10}><line x1={rightX - 22} y1={(y04 + y05) / 2} x2={rightX} y2={(y04 + y05) / 2} stroke={TEAL} strokeWidth={4} /></Fade>
				<Note x={RX + 140} y={720} text="read to ±0.05 mL" size={34} color={TEAL} at={K7.z05} />
			</DimG>
			<RingAt cx={M[0]} cy={M[1] - 8} rx={90} ry={30} at={K7.z40 + 6} />
			<AChip x={RX + 140} y={780} text="initial: 0.40 mL" size={38} color={UNKI} hand={false} at={K7.z40 + 10} />
			<MistakeX x={RX + 140} y={870} text="start at exactly 0.00" at={K7.z40 + 24} cross={K7.z40 + 40} note="record wherever it starts" size={30} />
			{void K7.smaller}{void K7.low}{void K7.lines}{void K7.start}
		</Overlay>
	);
};
const DrawPathSeg: React.FC<{a: [number, number]; b: [number, number]; at: number}> = ({a, b, at}) => (
	<Fade at={at}><line x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} stroke={INK_SOFT} strokeWidth={3} strokeDasharray="6 6" /></Fade>
);

// ---------- 8. Rough first, then drop by drop ----------
const S8 = 'titrate';
const K8 = cues(sc(S8), {rough: 'rough', over: 'overshot to', red: 'red', nine: 'twenty four point nine', now: 'now you know', acc: 'In each accurate', add: 'add acid quickly', short: 'millilitre short', dbd: 'drop by drop', swirl: 'swirling', tile: 'white tile', stop: 'Stop at the', orange: 'orange', read: 'read the burette'});
export const SceneTitrate: React.FC = () => {
	const f = useCurrentFrame();
	const R = {tx: 640, ty: 620, bh: 520, fh: 240};
	const p = rigPts(R.tx, R.ty, R.bh);
	const fl = rigFlask(R.tx, R.ty, R.fh);
	const drops = Array.from({length: 9}, (_, i) => K8.dbd + 8 + i * 17);
	const added = (fr: number) => {
		if (fr < K8.now) return kf(fr, [[K8.rough + 6, 0], [K8.red, 24.9]], false);
		if (fr < K8.add) return 0;
		if (fr < drops[0] + 10) return kf(fr, [[K8.add, 0], [K8.short + 20, 23.9]]);
		return 23.9 + 0.05 * drops.filter(t => fr >= t + 10).length;
	};
	const level = (fr: number) => (fr < K8.now ? added(fr) : 0.4 + added(fr));
	const flash = [drops[1], drops[4]];
	const wob = wobAt(drops.map(t => t + 12), 4);
	const WH = 200, wk = WH / WASH.box[3];
	const noz: [number, number] = [fl.x - 40, fl.y - 30];
	const wx = noz[0] - (WASH_N.nozzle[0] - WASH.box[0]) * wk, wy = noz[1] - (WASH_N.nozzle[1] - WASH.box[1]) * wk;
	const washT = drops[5] + 2;
	const sw = picW(MOSET, 150);
	const fast = vis(f, K8.rough + 6, K8.red, 4) + vis(f, K8.add, K8.short + 20, 4);
	return (
		<Overlay>
			<StepCard n={4} text="Titrate" at={6} />
			<TRig tx={R.tx} ty={R.ty} bh={R.bh} fh={R.fh} level={level} at={-100} wob={wob} states={[
				{at: -100, s: 'y'}, {at: K8.red - 4, s: 'r'}, {at: K8.now, s: 'y'},
				{at: flash[0] + 10, s: 'o', d: 6}, {at: flash[0] + 20, s: 'y', d: 14}, {at: flash[1] + 10, s: 'o', d: 6}, {at: flash[1] + 20, s: 'y', d: 14}, {at: K8.orange - 6, s: 'o', d: 12},
			]} />
			{fast > 0.01 ? <g opacity={fast}><Drip x={p.tip[0]} y0={p.tip[1] + 2} y1={fl.y + fl.h * 0.7} at={-100} out={100000} /></g> : null}
			<g opacity={fast}><TapTurn x={p.tap[0] + 44} y={p.tap[1]} at={-100} out={100000} /></g>
			{drops.map((t, i) => <Drop key={i} x={p.tip[0]} y0={p.tip[1] + 4} y1={fl.y + fl.h * 0.68} at={t} />)}
			<Fade at={washT - 10} out={washT + 50}><PicH p={WASH} x={wx} y={wy} h={WH} /></Fade>
			<Stream a={noz} b={[fl.x + flaskW(R.fh) * 0.42, fl.y + 30]} at={washT} out={washT + 20} />
			<Sx x={940} y={300} text="volume added (mL)" size={28} color={INK_SOFT} hand at={6} />
			<g transform={`translate(1040,360) scale(${pulseAt(f, K8.read, 0.1, 30)}) translate(-1040,-360)`}>
				<TRead x={940} y={330} text={fr => added(fr).toFixed(2)} at={6} size={44} sample="24.90" />
			</g>
			<DimG at={K8.acc} to={0.35}>
				<Note x={RX} y={350} text="rough: overshot, not used" size={32} color={INK_SOFT} at={K8.over} />
				<Fade at={K8.red}><PicH p={MOSET} x={RX} y={380} h={150} /></Fade>
				{[['red:', 'past it'], ['orange:', 'endpoint'], ['yellow:', 'before']].map((t, i) => t.map((ln, k) => <Sx key={i + '-' + k} x={RX + sw * (0.17 + i * 0.33)} y={560 + k * 28} text={ln} size={24} color={INK} anchor="middle" weight={700} at={K8.red + 6 + i * 6} />))}
			</DimG>
			<Note x={940} y={460} text="rough − 1 mL = 23.9 mL" size={32} color={TEAL} at={K8.short + 6} out={K8.stop} />
			<DimG at={K8.orange} to={0.35}><Note x={RX} y={640} text="rinse splashes down with distilled water:" size={26} color={INK_SOFT} at={washT} /><Note x={RX} y={674} text="no moles added" size={26} color={INK_SOFT} at={washT + 6} /></DimG>
			<Note x={RX} y={760} text="first permanent orange" size={38} color={UNKI} at={K8.orange} />
			<Note x={RX} y={804} text="(stays after swirling)" size={30} color={UNKI} at={K8.orange + 8} />
			<DimG at={K8.read + 30} to={0.4}><Note x={RX} y={890} text="why methyl orange: the indicators video" size={28} color={INK_SOFT} at={K8.read} /></DimG>
			{void K8.nine}{void K8.swirl}{void K8.tile}{void K8.rough}{void lerp}
		</Overlay>
	);
};

// ---------- 9. The results, and a run with a known fault ----------
const S9 = 'results';
const K9 = cues(sc(S9), {each: 'each titre is', final: 'final minus', run2: 'twenty four point six five', bubble: 'air bubble', bv: "The bubble's volume", big: 'too big', cause: 'The cause is', rep: 'repeated', other: 'The other three', within: 'within zero point', mean: 'twenty four point three three'});
export const SceneResults: React.FC = () => {
	const TX = 110, TY = 250;
	const tA = (i: number) => K9.final + 6 + i * 10;
	const LC = {x: 1560, y: 430, r: 150};
	return (
		<Overlay>
			<TaskLine text="Bench A's results" at={4} size={56} />
			<DimG at={K9.mean + 40} to={0.75}>
				<Table4 x={TX} y={TY} at={4} rows={[
					{cells: ['rough', '0.00', '24.90', '24.90'], at: 8, titreAt: tA(0), grey: true},
					{cells: ['1', '0.40', '24.75', '24.35'], at: 14, titreAt: tA(1), ring: K9.mean},
					{cells: ['2', '0.15', '24.80', '24.65'], at: 20, titreAt: tA(2), pulse: K9.run2, cross: K9.rep},
					{cells: ['3', '0.20', '24.50', '24.30'], at: 26, titreAt: tA(3), ring: K9.mean + 6},
					{cells: ['4', '1.05', '25.40', '24.35'], at: 32, titreAt: tA(4), ring: K9.mean + 12},
				]} />
			</DimG>
			<Sx x={TX + 860} y={t4Y(TY, 0)} text="not used" size={28} color={GREYX} hand at={tA(0) + 6} />
			<Note x={TX + 620} y={TY - 50} text="titre = final − initial" size={32} color={TEAL} at={K9.each} out={K9.run2} />
			<Note x={TX + 860} y={t4Y(TY, 2)} text="bubble left tip" size={30} color={INK_SOFT} at={K9.bubble} out={K9.rep} />
			<Note x={TX + 860} y={t4Y(TY, 2)} text="excluded: known fault; repeated (run 4)" size={28} color={GREYX} at={K9.rep + 8} />
			<Fade at={K9.bv - 10} out={K9.other}>
				<TipLens cx={LC.x} cy={LC.y} r={LC.r} at={K9.bv - 10} leave={K9.bv + 20} />
				<Sx x={LC.x} y={LC.y + LC.r + 46} text="counter jumps; no acid enters" size={28} color={INK_SOFT} anchor="middle" hand at={K9.bv + 24} />
			</Fade>
			<DimG at={K9.other} to={0.4}><Note x={RX + 60} y={760} text="bubble counted as acid: titre too big" size={30} color={INK} at={K9.big} /></DimG>
			<DimG at={K9.mean} to={0.45}>
				<ConcStrip x={150} y={830} w={900} lo={24.25} hi={24.7} at={K9.other} ticks={[24.3, 24.4, 24.5, 24.6, 24.7]} size={24} dots={[
					{v: 24.35, at: K9.other + 8}, {v: 24.3, at: K9.other + 14}, {v: 24.35, at: K9.other + 20, stack: 1}, {v: 24.65, at: K9.other + 26, grey: K9.other + 34},
				]} bracket={{a: 24.3, b: 24.35, at: K9.within, text: 'spread 0.05 mL'}} />
				<Note x={150 + (0.15 / 0.45) * 900} y={760} text="rule: within 0.10 mL" size={26} color={INK_SOFT} at={K9.within + 16} />
				<Fade at={K9.other + 36}>
					<line x1={150 + (0.4 / 0.45) * 900 - 14} y1={796} x2={150 + (0.4 / 0.45) * 900 + 14} y2={824} stroke={GREYX} strokeWidth={4} />
					<line x1={150 + (0.4 / 0.45) * 900 + 14} y1={796} x2={150 + (0.4 / 0.45) * 900 - 14} y2={824} stroke={GREYX} strokeWidth={4} />
				</Fade>
			</DimG>
			<Sx x={TX} y={990} text="(24.35 + 24.30 + 24.35) ÷ 3 = 24.33 mL" size={36} color={INK} weight={700} at={K9.mean + 4} />
			<KeptChip x={RX + 60} y={900} text="mean titre = 24.33 mL" at={K9.mean + 30} color={TEAL} size={40} />
			{void K9.cause}
		</Overlay>
	);
};

// ---------- 10. The calculation ----------
const S10 = 'calculation';
const K10 = cues(sc(S10), {now: 'Now the calculation', holds: 'The aliquot holds', c: 'zero point zero five one five four', v: 'zero point zero two five', n1: 'one point two eight eight five', times: 'Times two', n2: 'two point five seven seven', divide: 'Divide by', c2: 'zero point one zero five nine'});
const GIV = ['Na_2CO_3: c = 0.05154 mol/L, V = 25.00 mL', 'HCl: mean titre = 24.33 mL'];
export const SceneCalculation: React.FC = () => {
	const strip = EQP(-100);
	const ss = fitSize(strip, 1000, 36);
	return (
		<Overlay>
			<TaskLine text="Find c(HCl)" at={4} size={56} />
			<DimG at={K10.holds} to={0.5}><EqLine items={strip} x={96} y={240} size={ss} /></DimG>
			<KeptChip x={1240} y={196} text="mean titre = 24.33 mL" at={4} color={TEAL} size={34} />
			<DimG at={K10.c2} to={0.5}>
				<GCard x={96} y={276} w={1000} size={32} lh={58} at={8} lines={[
					{t: GIV[0], at: 12, marks: [{sub: 'c = 0.05154 mol/L', at: K10.c}, {sub: 'V = 25.00 mL', at: K10.v}]},
					{t: GIV[1], at: 18, marks: [{sub: '24.33 mL', at: K10.divide + 10}]},
				]} />
			</DimG>
			<MoleBridge x={96} y={520} at={K10.holds} boxes={[
				{head: 'known: Na_2CO_3', color: NAVY, fill: {t: '1.2885 × 10^{−3} mol', at: K10.n1 + 16}, lit: K10.n1},
				{head: 'ratio', color: TEAL, fill: {t: '1 Na_2CO_3 : 2 HCl', at: K10.times}, lit: K10.times},
				{head: 'unknown: HCl', color: UNKI, fill: {t: '2.577 × 10^{−3} mol', at: K10.n2 + 16}, lit: K10.n2},
			]} />
			<WLine x={96} y={740} size={38} dim={K10.n2} items={P('n(Na_2CO_3) = 0.05154 × 0.02500', K10.holds + 30, {t: '= 1.2885 × 10^{−3} mol', color: NAVY}, K10.n1)} />
			<Note x={1240} y={740} text="keep the digits; round at the end" size={28} color={INK_SOFT} at={K10.n1 + 20} out={K10.times} />
			<WLine x={96} y={815} size={38} dim={K10.c2} items={P('n(HCl) = 2 × 1.2885 × 10^{−3}', K10.times + 6, {t: '= 2.577 × 10^{−3} mol', color: UNKI}, K10.n2)} />
			<WLine x={96} y={890} size={40} items={P('c(HCl) = 2.577 × 10^{−3} ÷ 0.02433', K10.divide + 20, {t: '= 0.1059 mol/L', color: UNKI}, K10.c2)} />
			<AChip x={96} y={940} text="bench A: c(HCl) = 0.1059 mol/L" size={38} color={UNKI} hand={false} at={K10.c2 + 24} />
			<DimG at={K10.c2 + 90} to={0.4}><Note x={820} y={985} text="4 s.f., like the data" size={30} color={INK_SOFT} at={K10.c2 + 30} /></DimG>
			{void K10.now}{void countRead}{void TEAL}{void INK}{void MistakeX}{void Drop}{void TRig}{void Drip}{void Bubble}{void ACIDFILL}
		</Overlay>
	);
};
