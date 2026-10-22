// M6 P06 scenes 1 to 5: two benches, concordant but different means (two rigs, mini titre tables, mean chips); the
// plan (the unknown acid in the burette, the standard in the flask, the 1 : 2 equation and the C12 mole bridge);
// making the standard (the analytical balance readout, the pour through the funnel, three rinses); making up to the mark
// and its concentration (fill to the mark, the neck lens, three inversions, the calculation one line at a time); the
// aliquot (rinse, fill, drain, touch, the last drop, a wet flask, methyl orange: yellow).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {cues} from '../../cues';
import {Heading, kf, sc} from './common';
import {BEAKER, DROPPER, FLASK, FLASK_G, FUNNEL, FUN_G, WASH, WASH_N} from './assets';
import {
	AChip, Bal, DimG, Drip, Drop, EqLine, Fade, FlaskFill, GCard, GREYX, INK, INK_SOFT, KeptChip, MistakeX, MoFlask, MoleBridge, NAVY, NeckLens, Note, OpGlow, Overlay, P, PicH, PipUp,
	RX, RingAt, ShrinkAt, StepCard, Stream, Sx, TEAL, TRig, TaskLine, TitreTable, UNKI, VBracket2, WLine, eq, fitSize, flaskW, flicker, lerp, mw, picW, pipAt, pulseAt, rigPts, smooth,
	vis,
} from './parts';

const MEANA = 24.33, MEANB = 24.82;
export const EQP = (at: number) => eq(['Na_2CO_3(aq)', '+', '2HCl(aq)', '->', '2NaCl(aq)', '+', 'H_2O(l)', '+', 'CO_2(g)'], at);

// ---------- 1. Hook: concordant, but which is right? ----------
const S1 = 'hook';
const K1 = cues(sc(S1), {two: 'Two lab benches', agree: 'agree within', a: 'twenty four point three three', b: 'twenty four point eight two', so: 'So how do', wrong: 'wrong'});
export const BENCH_A = ['24.35', '24.30', '24.35'], BENCH_B = ['24.80', '24.85', '24.80'];
/** A bench's mini titre table with its concordance bracket. */
export const MiniTable: React.FC<{x: number; y: number; vals: string[]; at: number; ring: number; brk: number; pulse?: number; size?: number}> = ({x, y, vals, at, ring, brk, pulse, size = 34}) => {
	const lh = 54;
	const yy = (i: number) => y + 18 + lh * (i + 0.8);
	const w = mw('24.35', size, false, 700);
	return (
		<g>
			<TitreTable x={x} y={y} at={at} lh={lh} size={size} rows={vals.map((v, i) => ({label: String(i + 1), v, at: at + 6 + i * 8, ring: ring + i * 6, pulse}))} />
			<VBracket2 x={x + 200 + w + 44} y1={yy(0) - size * 0.6} y2={yy(2) + 4} text="within 0.05 mL" at={brk} size={26} color={TEAL} />
		</g>
	);
};
export const SceneHook: React.FC = () => {
	const TX = [480, 1300], TY = 470;
	return (
		<>
			<Heading text="Concordant... but right?" at={K1.wrong} size={60} />
			<Overlay>
				{TX.map((tx, i) => (
					<g key={i}>
						<TRig tx={tx} ty={TY} bh={330} fh={160} level={() => (i === 0 ? MEANA : MEANB)} states={[{at: -100, s: 'o'}]} at={K1.two + i * 8} />
						<Sx x={tx - 130} y={TY - 140} text={i === 0 ? 'bench A' : 'bench B'} size={40} color={INK} anchor="end" hand at={K1.two + 10 + i * 8} />
						<DimG at={K1.wrong} to={0.4}>
							<MiniTable x={tx - 200} y={720} vals={i === 0 ? BENCH_A : BENCH_B} at={K1.agree - 40 + i * 18} ring={K1.agree + i * 14} brk={K1.agree + 24 + i * 10} />
						</DimG>
					</g>
				))}
				<AChip x={TX[0] - 200} y={940} text="mean 24.33 mL" size={36} color={TEAL} hand={false} at={K1.a} />
				<AChip x={TX[1] - 200} y={940} text="mean 24.82 mL" size={36} color={UNKI} hand={false} at={K1.b} />
				<Fade at={K1.b + 20}>
					<line x1={TX[0] - 200 + mw('mean 24.33 mL', 36, false, 700) + 60} y1={969} x2={TX[1] - 214} y2={969} stroke={GREYX} strokeWidth={4} strokeDasharray="10 8" />
					<Sx x={(TX[0] + TX[1]) / 2 - 20} y={1030} text="0.49 mL apart" size={32} color={INK_SOFT} anchor="middle" hand at={K1.b + 26} />
				</Fade>
				{void K1.so}
			</Overlay>
		</>
	);
};

// ---------- 2. The plan ----------
const S2 = 'plan';
const K2 = cues(sc(S2), {unknown: 'The unknown is', hcl: 'hydrochloric acid', known: 'The known is', sodium: 'sodium carbonate standard', solid: 'from the solid', pip: 'A pipette puts', aliquot: 'aliquot', burette: 'burette', as: 'As in the', carb: 'carbonate takes', two: 'two hydrochloric'});
export const ScenePlan: React.FC = () => {
	const f = useCurrentFrame();
	const R = {tx: 560, ty: 500, bh: 400, fh: 200};
	const p = rigPts(R.tx, R.ty, R.bh);
	const strip = EQP(K2.two);
	const ss = fitSize(strip, 1250, 46);
	const pz = pulseAt(f, K2.burette, 0.14, 30);
	const lx = p.tube(500)[0] + 24, ly = p.tube(500)[1];
	return (
		<Overlay>
			<TaskLine text="The plan" at={4} size={56} />
			<TRig tx={R.tx} ty={R.ty} bh={R.bh} fh={R.fh} level={() => -1} states={[{at: -100, s: 'e'}]} at={6} />
			<g transform={`translate(${lx},${ly}) scale(${pz}) translate(${-lx},${-ly})`}>
				<Sx x={lx} y={ly} text="unknown: HCl" size={34} color={UNKI} weight={800} at={K2.hcl} />
				<Sx x={lx} y={ly + 42} text="about 0.1 mol/L" size={30} color={UNKI} weight={700} at={K2.hcl + 30} />
			</g>
			<Sx x={R.tx - 160} y={R.ty + 110} text="Na_2CO_3 standard" size={32} color={NAVY} anchor="end" weight={800} at={K2.aliquot} />
			<Sx x={R.tx - 160} y={R.ty + 150} text="25.00 mL aliquot" size={30} color={NAVY} anchor="end" weight={700} at={K2.aliquot + 10} />
			<Fade at={K2.sodium}><PicH p={FLASK} x={1450} y={230} h={320} /></Fade>
			<Note x={1520} y={600} text="standard: made from the solid" size={32} color={NAVY} anchor="middle" at={K2.solid} />
			<EqLine items={strip} x={96} y={830} size={ss} />
			<OpGlow items={strip} i={0} size={ss} x={96} y={830} at={K2.two + 10} len={50} color={TEAL} />
			<OpGlow items={strip} i={2} size={ss} x={96} y={830} at={K2.two + 16} len={50} color={TEAL} />
			<AChip x={1400} y={790} text="1 : 2" size={38} color={TEAL} hand={false} at={K2.two + 20} />
			<MoleBridge x={96} y={880} w={300} h={84} gap={70} size={26} at={K2.two + 14} boxes={[
				{head: 'known: Na_2CO_3', color: NAVY},
				{head: 'ratio 1 : 2', color: TEAL},
				{head: 'unknown: HCl', color: UNKI},
			]} />
			<Note x={1180} y={935} text="titration video" size={30} color={INK_SOFT} at={K2.two + 30} />
			{void K2.unknown}{void K2.known}{void K2.pip}{void K2.as}{void K2.carb}
		</Overlay>
	);
};

// ---------- 3. Make the standard: dry, weigh, rinse it all in ----------
const S3 = 'make-standard';
const K3 = cues(sc(S3), {dried: 'dried in an', desic: 'desiccator', none: 'none of its', weigh: 'Weigh it', record: 'record the exact', mass: 'one point three six five six', dissolve: 'Dissolve it', pour: 'pour it', funnel: 'funnel into', flask: 'volumetric flask', rinse: 'rinse the beaker', grain: 'every grain', inside: 'inside'});
export const FL = {x: 560, y: 420, h: 560};
export const flk = FL.h / FLASK.box[3];
export const neckX = FL.x + (1024 - FLASK.box[0]) * flk;
export const neckTop = FL.y + (FLASK_G.cropTop - FLASK.box[1]) * flk;
export const ringY = FL.y + (FLASK_G.ring - FLASK.box[1]) * flk;
const FH = 220, fk = FH / FUNNEL.box[3];
const FUNX = neckX - (FUN_G.tip[0] - FUNNEL.box[0]) * fk, FUNY = neckTop + 70 - (FUN_G.tip[1] - FUNNEL.box[1]) * fk;
const RIM: [number, number] = [FUNX + (FUN_G.rim[0] - FUNNEL.box[0]) * fk, FUNY + (FUN_G.rim[1] - FUNNEL.box[1]) * fk];
/** The beaker plate placed so its spout lands at (sx, sy), rotated by a degrees about the spout. */
const BH = 150, bk = BH / BEAKER.box[3], SPOUT = [285, 395];
const BeakerAt: React.FC<{sx: number; sy: number; a: number; o?: number}> = ({sx, sy, a, o = 1}) => (
	<g opacity={o} transform={`rotate(${a} ${sx} ${sy})`}><PicH p={BEAKER} x={sx - (SPOUT[0] - BEAKER.box[0]) * bk} y={sy - (SPOUT[1] - BEAKER.box[1]) * bk} h={BH} /></g>
);
export const SceneMakeStandard: React.FC = () => {
	const f = useCurrentFrame();
	const pourS: [number, number] = [RIM[0] + 22, RIM[1] - 22];
	const mv = smooth(prog(f, K3.dissolve + 6, 30));
	const sx = lerp(980, pourS[0], mv), sy = lerp(640, pourS[1], mv) - Math.sin(mv * Math.PI) * 120;
	const tilt = -68 * smooth(prog(f, K3.pour, 22));
	const flowO = vis(f, K3.pour + 18, K3.inside + 10, 8);
	const level = (fr: number) => kf(fr, [[K3.pour + 20, 1850], [K3.inside + 10, 1560]]);
	const WH = 220, wk = WH / WASH.box[3];
	const noz: [number, number] = [pourS[0] - 150, pourS[1] - 110];
	const wx = noz[0] - (WASH_N.nozzle[0] - WASH.box[0]) * wk, wy = noz[1] - (WASH_N.nozzle[1] - WASH.box[1]) * wk;
	const R = [K3.rinse, K3.rinse + 40, K3.rinse + 80];
	const nR = R.filter(t => f >= t).length;
	const read = (fr: number) => (fr < K3.weigh ? '' : fr < K3.mass - 40 ? '0.0000 g' : flicker(K3.mass - 40, K3.mass + 30, '1.3656 g', 1.2, 1.5, 4)(fr).replace(/^(\d\.\d+)$/, '$1 g'));
	return (
		<Overlay>
			<StepCard n={1} text="Make the standard" at={6} />
			<DimG at={K3.weigh} to={0.4}><Note x={RX} y={340} text="desiccator: sealed jar with a drying agent" size={30} color={INK_SOFT} at={K3.desic} /></DimG>
			<DimG at={K3.dissolve} to={0.4}>
				<Note x={RX} y={410} text="analytical balance: reads to 0.0001 g" size={30} color={INK_SOFT} at={K3.record} />
				<AChip x={RX} y={440} text="record every digit" size={32} color={NAVY} hand={false} at={K3.mass + 30} />
			</DimG>
			<Bal x={420} y={300} h={560} read={read} at={4} out={K3.dissolve + 4} />
			<Fade at={K3.dissolve}>
				<FlaskFill x={FL.x} y={FL.y} h={FL.h} level={level} />
				<PicH p={FUNNEL} x={FUNX} y={FUNY} h={FH} />
				<Sx x={FL.x + picW(FLASK, FL.h) / 2} y={FL.y + FL.h + 46} text="250.0 mL volumetric flask" size={30} color={INK} anchor="middle" weight={700} at={K3.flask} />
			</Fade>
			{flowO > 0.01 ? <line x1={pourS[0]} y1={pourS[1]} x2={RIM[0]} y2={RIM[1] + 30} stroke="#bcd9ee" strokeWidth={7} strokeLinecap="round" opacity={0.9 * flowO} /> : null}
			<Fade at={K3.dissolve}><BeakerAt sx={sx} sy={sy} a={tilt} /></Fade>
			<Fade at={K3.rinse - 16}><PicH p={WASH} x={wx} y={wy} h={WH} /></Fade>
			{R.map((t, i) => <Stream key={i} a={noz} b={[pourS[0] + 40, pourS[1] - 20]} at={t} out={t + 26} />)}
			<Sx x={wx - 20} y={wy + WH + 40} text={['', 'rinse 1', 'rinse 1, 2', 'rinse 1, 2, 3'][nR]} size={32} color={TEAL} hand at={K3.rinse} />
			<Note x={RX} y={560} text="quantitative transfer:" size={32} color={TEAL} at={K3.rinse + 40} />
			<Note x={RX} y={604} text="every grain into the flask" size={32} color={TEAL} at={K3.grain} />
			{void K3.dried}{void K3.none}{void K3.funnel}{void flaskW}
		</Overlay>
	);
};

// ---------- 4. Make up to the mark, and its concentration ----------
const S4 = 'make-up-concentration';
const K4 = cues(sc(S4), {add: 'Add water', mark: 'mark', eye: 'eye level', stopper: 'stopper', invert: 'invert', same: 'aliquot is the', n: 'n equals', n1: 'zero point zero one two eight', over: 'and over', c: 'zero point zero five one five four', litre: 'per litre'});
export const SceneMakeUp: React.FC = () => {
	const f = useCurrentFrame();
	const level = (fr: number) => kf(fr, [[0, 1560], [K4.mark - 30, 850], [K4.mark - 2, FLASK_G.ring]]);
	const inv = (fr: number) => {
		const t = fr - K4.invert;
		if (t < 0 || t > 96) return 0;
		return Math.sin((t / 32) * Math.PI) ** 2 * 180;
	};
	const cx = neckX, cy = FL.y + FL.h * 0.62;
	const drops = [K4.mark - 26, K4.mark - 16, K4.mark - 6];
	const calc = K4.n - 14;
	return (
		<Overlay>
			<StepCard n={1} text="Make the standard" at={-100} out={calc} />
			<ShrinkAt cx={FL.x} cy={FL.y} k={0.6} at={calc} tx={-400} ty={-40}>
				<g transform={`rotate(${inv(f)} ${cx} ${cy})`}>
					<FlaskFill x={FL.x} y={FL.y} h={FL.h} level={level} stopper={prog(f, K4.stopper, 12)} />
				</g>
				{drops.map((t, i) => <Drop key={i} x={neckX} y0={neckTop - 80} y1={ringY - 6} at={t} color="#bcd9ee" />)}
			</ShrinkAt>
			<Fade at={K4.mark} out={calc}>
				<line x1={neckX + 30} y1={ringY} x2={930 - 112} y2={470} stroke={INK_SOFT} strokeWidth={3} strokeDasharray="6 6" />
				<NeckLens cx={930} cy={470} r={112} at={K4.mark} />
			</Fade>
			<Fade at={K4.mark + 6} out={calc}>
				<DimG at={K4.stopper} to={0.4}>
					<Note x={RX} y={380} text="meniscus: the curved surface;" size={32} color={INK} at={K4.mark + 6} />
					<Note x={RX} y={424} text="its bottom on the mark, at eye level" size={32} color={INK} at={K4.eye} />
				</DimG>
				<Note x={RX} y={520} text="mixed: every aliquot the same" size={34} color={TEAL} at={K4.same} />
			</Fade>
			<Sx x={640} y={250} text="c(Na_2CO_3) of the standard" size={44} color={INK} hand at={K4.n - 6} />
			<DimG at={K4.c} to={0.45}>
				<GCard x={640} y={290} w={1000} size={32} lh={54} at={K4.n} lines={[
					{t: 'm(Na_2CO_3) = 1.3656 g', at: K4.n + 4}, {t: 'M(Na_2CO_3) = 105.99 g/mol', at: K4.n + 10}, {t: 'V = 250.0 mL = 0.2500 L', at: K4.n + 16},
				]} />
			</DimG>
			<WLine x={640} y={620} size={38} dim={K4.over} items={P('n = m ÷ M = 1.3656 ÷ 105.99', K4.n + 14, {t: '= 0.012884 mol', color: NAVY}, K4.n1)} />
			<Note x={640} y={672} text="keep the digits; round at the end" size={30} color={INK_SOFT} at={K4.n1 + 20} out={K4.over} />
			<WLine x={640} y={730} size={38} items={P('c = n ÷ V = 0.012884 ÷ 0.2500', K4.over + 8, {t: '= 0.05154 mol/L', color: NAVY}, K4.c)} />
			<KeptChip x={640} y={800} text="c(Na_2CO_3) = 0.05154 mol/L" at={K4.c + 24} color={NAVY} size={38} />
			<DimG at={K4.litre + 40} to={0.4}><Note x={640} y={930} text="practised in the next video" size={30} color={INK_SOFT} at={K4.c + 40} /></DimG>
		</Overlay>
	);
};

// ---------- 5. The aliquot: rinse, fill, drain, leave the last drop ----------
const S5 = 'aliquot';
const K5 = cues(sc(S5), {now: 'Now the aliquot', carb: 'carbonate solution', because: 'because water left', fill: 'Fill it', mark: 'to the mark', drain: 'drain it', touch: 'touch the tip', leave: 'leave the last', drop: 'drop', calib: 'calibrated', wet: 'The flask can', dist: 'distilled water', adds: 'adds no carbonate', three: 'Add three drops', yellow: 'yellow'});
export const SceneAliquot: React.FC = () => {
	const f = useCurrentFrame();
	const VF = {x: 300, y: 430, h: 480};
	const vk = VF.h / FLASK.box[3];
	const vNeck = VF.x + (1024 - FLASK.box[0]) * vk;
	const WB = {x: 500, y: 600, h: 120};
	const wbc = WB.x + picW(BEAKER, WB.h) / 2;
	const CF = {x: 800, y: 560, h: 280};
	const cfc = CF.x + flaskW(CF.h) / 2;
	const PH = 520;
	const inFlask: [number, number] = [vNeck, VF.y + 250];
	const overWaste: [number, number] = [wbc, WB.y - 30];
	const inCon: [number, number] = [cfc, CF.y + 70];
	const touchP: [number, number] = [cfc + 26, CF.y + 96];
	const path: {at: number; to: [number, number]}[] = [
		{at: K5.because, to: overWaste}, {at: K5.fill - 12, to: inFlask}, {at: K5.drain, to: inCon}, {at: K5.touch, to: touchP},
	];
	const tip = (fr: number): [number, number] => {
		let p = inFlask;
		for (const s of path) {
			const t = smooth(prog(fr, s.at, 24));
			if (t <= 0) break;
			p = [lerp(p[0], s.to[0], t), lerp(p[1], s.to[1], t) - Math.sin(t * Math.PI) * (s.to === touchP ? 0 : 140)];
			if (t < 1) return p;
		}
		return p;
	};
	const rot = (fr: number) => 7 * smooth(prog(fr, K5.touch, 20));
	const level = (fr: number) => kf(fr, [[K5.carb, 1871], [K5.carb + 30, 1120], [K5.because + 30, 1120], [K5.because + 70, 1871], [K5.fill + 8, 1871], [K5.mark + 4, 800], [K5.drain + 26, 800], [K5.drain + 64, 1862]]);
	const pipO = vis(f, 4, K5.wet, 14);
	const t0 = tip(f);
	const markP = pipAt(t0[0], t0[1], PH, 800, rot(f));
	const tipD = tip(K5.drop);
	return (
		<Overlay>
			<StepCard n={2} text="Pipette the aliquot" at={6} />
			<FlaskFill x={VF.x} y={VF.y} h={VF.h} level={() => FLASK_G.ring} />
			<Sx x={VF.x + picW(FLASK, VF.h) / 2} y={VF.y + VF.h + 44} text="standard" size={30} color={NAVY} anchor="middle" weight={800} at={4} />
			<Fade at={K5.carb} out={K5.fill + 20}>
				<PicH p={BEAKER} x={WB.x} y={WB.y} h={WB.h} />
				<Sx x={wbc} y={WB.y + WB.h + 36} text="rinse to waste" size={26} color={INK_SOFT} anchor="middle" hand at={K5.because} />
			</Fade>
			<MoFlask x={CF.x} y={CF.y} h={CF.h} states={[{at: -100, s: 'e'}, {at: K5.yellow - 8, s: 'y'}]} film={prog(f, K5.dist, 20)} />
			<Drip x={wbc} y0={overWaste[1] + 4} y1={WB.y + WB.h - 20} at={K5.because + 30} out={K5.because + 70} color={NAVY} />
			<Drip x={cfc} y0={inCon[1] + 4} y1={CF.y + CF.h - 30} at={K5.drain + 26} out={K5.drain + 64} color={NAVY} />
			{pipO > 0.01 ? <PipUp tip={tip} h={PH} level={level} rot={rot} o={pipO} /> : null}
			<RingAt cx={markP[0]} cy={markP[1]} rx={26} ry={18} at={K5.mark} out={K5.drain} />
			<Fade at={K5.drop - 10} out={K5.wet}><circle cx={tipD[0]} cy={tipD[1] + 4} r={6} fill={NAVY} /></Fade>
			<RingAt cx={tipD[0]} cy={tipD[1] + 4} rx={20} ry={20} at={K5.drop} out={K5.wet} />
			<DimG at={K5.wet + 20} to={0.4}><Note x={RX} y={340} text="rinse with the carbonate: no water to dilute it" size={30} color={NAVY} at={K5.because} /></DimG>
			<DimG at={K5.wet + 20} to={0.35}><MistakeX x={RX} y={400} text="blow out the last drop" at={K5.drop + 6} cross={K5.calib} note="calibrated to leave it" size={32} /></DimG>
			<Note x={RX} y={600} text="water adds no moles" size={36} color={TEAL} at={K5.adds} />
			<MistakeX x={RX} y={650} text="rinse the flask with carbonate" at={K5.adds + 20} cross={K5.adds + 40} note="flask: distilled water only" size={32} />
			<Fade at={K5.three - 10} out={K5.yellow + 20}>
				<g transform={`rotate(180 ${cfc} ${CF.y - 40})`}><PicH p={DROPPER} x={cfc - (1000 - DROPPER.box[0]) * (200 / DROPPER.box[3])} y={CF.y - 40 - (222 - DROPPER.box[1]) * (200 / DROPPER.box[3])} h={200} /></g>
			</Fade>
			{[0, 1, 2].map(i => <Drop key={i} x={cfc} y0={CF.y - 36} y1={CF.y + CF.h - 40} at={K5.three + 12 + i * 16} color="#e9a23b" />)}
			<Sx x={cfc} y={CF.y + CF.h + 44} text="methyl orange: yellow" size={30} color={UNKI} anchor="middle" weight={800} at={K5.yellow} />
			{void K5.now}{void K5.leave}{void INK}{void GREYX}
		</Overlay>
	);
};
