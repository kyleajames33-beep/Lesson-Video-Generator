// M8 P02 scenes 1 to 6: the hook (the known sample on the balance, c02's method strip, the recovery gauge with its "?");
// the aim and variables (the formula chip under the gauge, the variables card writing on cue); the expected mass (c02's
// calculation board, the gauge's 100% line relabelled); prepare and precipitate (beaker to hotplate pair, acid drops,
// the tilted measuring cylinder pouring in pulses while a coded rod stirs, the excess chip, the settled plate, the test
// drop); the set split (two lanes, the clock arc and warm glow, the shared cooling chip, two crystal zooms and the mesh);
// filter, wash and check (funnel, wash-bottle jet, the silver nitrate test tube pair, the filtrate pair).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {DrawPath, prog} from '../../kit';
import {TickMark} from '../chem-m7-c01/molecules';
import {SETTLED} from '../chem-m8-c02/common';
import {BAL6, BEAKER, CLOUDY, CYL, CYL_SPOUT, DROPB, FEAT_C02, FLASK_LIQ, FUNNEL, HOT, HOT_A, Heading, NB, TUBE, TUBE_A, WASH, sc} from './common';
import {
	AChip, Arrow, BalRead, Beaker, ClockArc, Crystals, DimG, EqLine, FallDrop, Fade, GCard, GREYX, GlassRod, INK, INK_SOFT, KeptChip, LensFrame, Lead, MethodStrip, NAVY, Note, Overlay, P, PicF, RecGauge, SETA, SETB,
	SetPill, Sx, TEAL, TaskLine, WLine, WARMC, eq, natPt, picW, pillW, smooth, vis,
} from './parts';
import type {GaugeP} from './parts';

const ALL = 'all the sulfate you put in';

// ---------- 1. Hook ----------
const K1 = cues(sc('hook'), {strange: 'strange first step', weigh: 'Weigh out', know: 'You already know', formula: 'its formula', why: 'So why', method: 'your method', recovers: 'If it recovers', trust: 'you can trust', not: 'If not', loses: 'it loses'});
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const B = {x: 560, y: 300, h: 460};
	const [bx, by] = natPt(BAL6, B.x, B.y, B.h, 1080, 1020);
	const G: GaugeP = {x: 1100, y: 560, w: 600};
	return (
		<>
			<Heading text="Gravimetric practical: does the method get it all?" at={4} size={56} />
			<Overlay>
				<PicF p={BAL6} x={B.x} y={B.y} h={B.h} o={vis(f, K1.weigh - 20, undefined, 14)} />
				<BalRead p={BAL6} x={B.x} y={B.y} h={B.h} at={K1.weigh + 10} text={fr => (fr < K1.weigh + 30 ? '0.000' : '0.500')} />
				<Note x={1000} y={470} text="K_2SO_4, dried" size={40} color={NAVY} hand={false} at={K1.weigh + 30} />
				<Lead a={[990, 458]} b={[bx + 30, by - 10]} at={K1.weigh + 30} color={NAVY} />
				<g opacity={1 - 0.5 * prog(f, K1.method, 14)}><AChip x={1000} y={510} text="known formula: known sulfate" size={28} color={GREYX} hand={false} at={K1.formula} /></g>
				<MethodStrip lit={{}} at={K1.method} o={0.55} />
				<AChip x={96} y={900} text="c02: the method" size={26} color={GREYX} hand={false} at={K1.method + 6} />
				<g opacity={1 - 0.6 * prog(f, K1.loses, 14)}><Arrow x1={B.x + 260} y1={B.y + B.h + 10} x2={1760} y2={975} at={K1.method + 10} color={INK_SOFT} width={4} /></g>
				<RecGauge G={G} at={K1.loses} label={() => ALL} q={K1.loses + 10} size={24} />
				<Note x={G.x} y={740} text="known in → known out?" size={34} color={INK_SOFT} at={K1.loses + 40} />
				{void K1.strange}{void K1.know}{void K1.why}{void K1.recovers}{void K1.trust}{void K1.not}{void NB}
			</Overlay>
		</>
	);
};

// ---------- 2. Aim and variables ----------
const K2 = cues(sc('aim-variables'), {question: 'The question', recovery: 'Recovery is the', percent: 'as a percentage', indep: 'The independent variable', digestion: 'variable is digestion', one: 'one set keeps', dep: 'The dependent variable', rec2: 'is the recovery', same: 'stays the same'});
const CTRL = [`0.500${NB}g K_2SO_4`, `1${NB}mL of 2${NB}mol/L HCl`, `20${NB}mL of 0.20${NB}mol/L BaCl_2`, 'same fine filter paper', 'same filtration temperature (room temperature)', 'same washing', 'same drying, to constant mass'];
export const SceneAim: React.FC = () => {
	const f = useCurrentFrame();
	const G: GaugeP = {x: 120, y: 470, w: 640};
	const CX = 900, CY = 210;
	return (
		<Overlay>
			<TaskLine text="Aim: does digestion improve recovery?" at={K2.question} size={54} />
			<RecGauge G={G} at={-100} label={() => ALL} q={-100} size={24} />
			<AChip x={G.x} y={600} text="% recovery = mass collected ÷ expected mass × 100" size={26} color={GREYX} hand={false} at={K2.recovery} />
			<Fade at={K2.indep - 10}>
				<rect x={CX} y={CY} width={940} height={720} rx={20} fill="#fffdf8" stroke="rgba(60,45,20,0.22)" strokeWidth={3} />
			</Fade>
			<Sx x={CX + 30} y={CY + 64} text="Independent: digestion" size={38} color={INK} hand weight={700} at={K2.digestion} />
			<SetPill x={CX + 30} y={CY + 96} text="set A: none" color={SETA} at={K2.one} size={26} />
			<SetPill x={CX + 30 + pillW('set A: none', 26) + 20} y={CY + 96} text="set B: about 30 min warm" color={SETB} at={K2.one + 20} size={26} />
			<DimG at={K2.dep} to={0.45}><AChip x={CX + 30} y={CY + 176} text="c02: digestion grows bigger crystals" size={24} color={GREYX} hand={false} at={K2.one + 40} /></DimG>
			<DimG at={K2.same + 60} to={0.5}><Sx x={CX + 30} y={CY + 300} text="Dependent: % recovery of BaSO_4" size={36} color={INK} hand weight={700} at={K2.rec2} /></DimG>
			<Sx x={CX + 30} y={CY + 380} text="Controlled:" size={36} color={INK} hand weight={700} at={K2.same} />
			{CTRL.map((c, i) => <Sx key={i} x={CX + 60} y={CY + 430 + i * 41} text={`• ${c}`} size={28} color={INK} weight={600} at={K2.same + 8 + i * 9} />)}
			{void K2.percent}{void K2.indep}{void K2.dep}{void smooth}
		</Overlay>
	);
};

// ---------- 3. Expected mass ----------
const K3 = cues(sc('expected-mass'), {first: 'First, the mass', p500: 'Point five zero', over: 'over its molar', moles: 'minus three moles', one: "There's one sulfate", multiply: 'so multiply by', target: "That's the target", g670: 'point six seven'});
export const SceneExpected: React.FC = () => {
	const f = useCurrentFrame();
	const e = eq(['K_2SO_4(aq)', '+', 'BaCl_2(aq)', '->', 'BaSO_4(s)', '+', '2KCl(aq)'], K3.first + 10);
	const G: GaugeP = {x: 1180, y: 800, w: 620};
	return (
		<Overlay>
			<TaskLine text="Expected mass of BaSO_4 from the known sample" at={K3.first} size={50} />
			<EqLine items={e} x={96} y={290} size={40} />
			<KeptChip x={96} y={322} text="1 : 1" at={K3.first + 20} color={TEAL} size={32} pulse={K3.one} />
			<GCard x={1180} y={200} w={660} size={29} lh={56} at={K3.first + 14} lines={[{t: `K_2SO_4: 0.500${NB}g (dried)`, at: K3.first + 20, lit: [K3.p500, K3.moles]}]} />
			<GCard x={1180} y={360} w={660} size={29} lh={56} title="molar masses" at={K3.first + 24} lines={[{t: 'M(K_2SO_4) = 174.26', at: K3.first + 30, lit: [K3.over, K3.moles]}, {t: `M(BaSO_4) = 233.39${NB}g/mol`, at: K3.first + 36, lit: [K3.multiply, K3.target]}]} />
			<WLine x={96} y={520} size={40} dim={K3.one} dimTo={0.4} items={P('n(K_2SO_4) = 0.500 ÷ 174.26', K3.p500, {t: `= 2.87 × 10^{−3}${NB}mol`, color: TEAL}, K3.moles)} />
			<WLine x={96} y={620} size={40} dim={K3.multiply + 30} dimTo={0.4} items={P(`1 : 1, so n(BaSO_4) = 2.87 × 10^{−3}${NB}mol`, K3.one + 10)} />
			<WLine x={96} y={720} size={40} items={P('m(BaSO_4) = 2.87 × 10^{−3} × 233.39', K3.multiply, {t: `= 0.670${NB}g`, color: TEAL}, K3.g670)} />
			<AChip x={96} y={800} text="c02: mass → moles → ratio → target" size={26} color={GREYX} hand={false} at={K3.one + 30} />
			<RecGauge G={G} at={K3.first + 30} label={fr => (fr < K3.g670 ? ALL : `expected 0.670${NB}g`)} size={fr0(f, K3.g670)} />
			{void K3.target}
		</Overlay>
	);
};
const fr0 = (f: number, t: number) => (f < t ? 24 : 30);

// ---------- 4. Prepare and precipitate ----------
const K4 = cues(sc('prepare-precipitate'), {dissolve: 'Dissolve the', hundred: 'a hundred and fifty', add: 'add a little', hcl: 'dilute hydrochloric', heat: 'and heat it', boiling: 'nearly boiling', slowly: 'Slowly add', stirring: 'stirring', more: "That's more barium", excess: "it's in excess", settles: 'solid settles', drop: 'a drop more', cloud: 'no new cloudiness', complete: 'is complete'});
/** The m6 beaker and the hotplate pair, aligned on the beaker walls and liquid surface. */
const BK = {x: 620, y: 282, h: 330};
const hotGeom = () => {
	const kb = BK.h / BEAKER.box[3];
	const wallL = BK.x + (FEAT_C02.wallL - BEAKER.box[0]) * kb, surf = BK.y + (FEAT_C02.surf - BEAKER.box[1]) * kb;
	const H = ((FEAT_C02.wallR - FEAT_C02.wallL) * kb * HOT.clear.box[3]) / (HOT_A.wallR - HOT_A.wallL);
	const kh = H / HOT.clear.box[3];
	return {x: wallL - (HOT_A.wallL - HOT.clear.box[0]) * kh, y: surf - (HOT_A.surf - HOT.clear.box[1]) * kh, h: H};
};
export const ScenePrepare: React.FC = () => {
	const f = useCurrentFrame();
	const HG = hotGeom();
	const hp = (nx: number, ny: number) => natPt(HOT.clear, HG.x, HG.y, HG.h, nx, ny);
	const [, surf] = hp(HOT_A.cx, HOT_A.surf), [cx, rim] = hp(HOT_A.cx, HOT_A.rim), [, settle] = hp(HOT_A.cx, HOT_A.settle);
	const toHot = smooth(prog(f, K4.boiling, 26));
	const toPpt = smooth(prog(f, K4.settles, 30));
	const CH = 300, SP: [number, number] = [cx - 150, rim - 40];
	const kc = CH / CYL.box[3];
	const cylX = SP[0] - (CYL_SPOUT[0] - CYL.box[0]) * kc, cylY = SP[1] - (CYL_SPOUT[1] - CYL.box[1]) * kc;
	const pourOn = vis(f, K4.slowly, K4.excess, 12);
	const RX = 1100;
	return (
		<Overlay>
			<TaskLine text="Prepare and precipitate" at={2} size={54} />
			<MethodStrip lit={{0: K4.dissolve, 1: K4.add, 2: K4.slowly}} />
			<Beaker x={BK.x} y={BK.y} h={BK.h} o={1 - toHot} />
			{toHot > 0.01 ? <PicF p={HOT.clear} x={HG.x} y={HG.y} h={HG.h} o={toHot * (1 - toPpt)} /> : null}
			{toPpt > 0.01 ? <PicF p={HOT.baso4} x={HG.x} y={HG.y} h={HG.h} o={toPpt} /> : null}
			{[0, 1, 2].map(i => <FallDrop key={i} x={cx - 20 + i * 20} y0={rim - 90} y1={surf + 20} at={K4.hcl + 8 + i * 10} color="#f3d7b0" />)}
			<Note x={RX} y={300} text={`about 150${NB}mL distilled water + 0.500${NB}g K_2SO_4`} size={28} color={NAVY} hand={false} at={K4.hundred} out={K4.boiling} />
			<AChip x={RX} y={340} text="c02: acid stops BaCO_3 forming" size={26} color={GREYX} hand={false} at={K4.hcl + 10} out={K4.slowly} />
			<DimG at={K4.slowly} to={0.45}><Note x={RX} y={300} text="hotplate: just below boiling" size={32} color={WARMC} at={K4.boiling + 10} /></DimG>
			<g opacity={vis(f, K4.slowly - 10, K4.settles, 14)}>
				<g transform={`rotate(62,${SP[0]},${SP[1]})`}><PicF p={CYL} x={cylX} y={cylY} h={CH} /></g>
				<Note x={96} y={250} text={`20${NB}mL of 0.20${NB}mol/L BaCl_2`} size={28} color={NAVY} hand={false} at={K4.slowly} />
			</g>
			{pourOn > 0.01 ? [0, 1, 2, 3, 4, 5, 6, 7].map(i => <FallDrop key={'p' + i} x={SP[0] + 14} y0={SP[1] + 10} y1={surf + 10} at={K4.slowly + 12 + i * 16} color="#cdbfe6" />) : null}
			<GlassRod cx={cx + 30} top={rim - 60} bottom={settle - 10} amp={50} at={K4.stirring - 6} out={K4.settles} />
			<AChip x={RX} y={440} text={`Ba^{2+} 4.0 × 10^{−3}${NB}mol > SO_4^{2−} 2.87 × 10^{−3}${NB}mol`} size={28} color={NAVY} hand={false} at={K4.excess} />
			<FallDrop x={cx + 40} y0={rim - 90} y1={surf + 40} at={K4.drop + 8} color="#cdbfe6" s={1.4} />
			<AChip x={RX} y={560} text="no new cloudiness: complete" size={34} color={GREENC4} hand={false} at={K4.complete} />
			<TickMark x={RX + 520} y={590} at={K4.complete + 8} />
			{void K4.dissolve}{void K4.heat}{void K4.more}{void K4.cloud}{void INK}
		</Overlay>
	);
};
const GREENC4 = '#2f8a5b';

// ---------- 5. Digest, or not ----------
const K5 = cues(sc('digest-split'), {split: 'the sets split', a: "Set A isn't", b: 'Set B digests', below: 'just below boiling', minutes: 'thirty minutes', both: 'Then both cool', temp: 'room temperature', predict: "You'd predict", crystals: 'bigger crystals in', less: 'less likely', paper: 'the filter paper'});
export const SceneDigest: React.FC = () => {
	const f = useCurrentFrame();
	const PW = pillW('precipitate', 28);
	const TH = 160, tw = picW(HOT.baso4, TH);
	const A = {pill: 200, thumb: 270}, Bl = {pill: 560, thumb: 630};
	const LX = 1010, LR = 108, LA = 340, LB = 700;
	const glow = vis(f, K5.minutes, K5.temp + 20, 20);
	const cool = smooth(prog(f, K5.temp, 30));
	const mesh = smooth(prog(f, K5.paper - 6, 40));
	const pred = vis(f, K5.paper + 20);
	return (
		<Overlay>
			<TaskLine text="Digest, or not" at={2} size={54} />
			<MethodStrip lit={{2: -100, 3: K5.b}} o={0.6} />
			<SetPill x={96} y={445} text="precipitate" color={INK_SOFT} at={K5.split - 10} />
			<DrawPath d={`M${96 + PW},471 C${96 + PW + 40},471 340,${A.pill + 27} 380,${A.pill + 27}`} at={K5.split} dur={14} color={SETA} width={4} />
			<DrawPath d={`M${96 + PW},471 C${96 + PW + 40},471 340,${Bl.pill + 27} 380,${Bl.pill + 27}`} at={K5.split + 4} dur={14} color={SETB} width={4} />
			<SetPill x={380} y={A.pill} text="set A: not digested" color={SETA} at={K5.a} />
			<SetPill x={380} y={Bl.pill} text="set B: digest about 30 min, watch glass on" color={SETB} at={K5.b} size={26} />
			<PicF p={HOT.baso4} x={420} y={A.thumb} h={TH} o={vis(f, K5.a + 6)} />
			{glow > 0.01 ? <ellipse cx={420 + tw / 2} cy={Bl.thumb + TH * 0.62} rx={tw * 0.75} ry={TH * 0.42} fill="#f2a65a" opacity={0.4 * glow * (0.8 + 0.2 * Math.sin(f / 8))} /> : null}
			<PicF p={HOT.baso4} x={420} y={Bl.thumb} h={TH} o={vis(f, K5.b + 6)} />
			<ClockArc cx={420 + tw + 60} cy={Bl.thumb + 70} r={38} at={K5.minutes - 6} dur={40} label="30 min" />
			<g opacity={cool}>
				<DrawPath d={`M${420 + tw + 10},${A.thumb + 80} C800,${A.thumb + 80} 1150,${A.thumb + 80} 1250,505`} at={K5.temp} dur={18} color={SETA} width={4} dash="10 8" />
				<DrawPath d={`M${420 + tw + 140},${Bl.thumb + 80} C800,${Bl.thumb + 80} 1150,${Bl.thumb + 80} 1250,545`} at={K5.temp + 4} dur={18} color={SETB} width={4} dash="10 8" />
			</g>
			<AChip x={1250} y={500} text="both: cool to room temperature, then filter" size={24} color={NAVY} hand={false} at={K5.temp + 14} />
			<LensFrame cx={LX} cy={LA} r={LR} at={K5.crystals} title="set A" titleAt={K5.crystals + 4}>
				<Crystals cx={LX} cy={LA} r={LR} grow={0} mesh={mesh} ions={0} />
			</LensFrame>
			<LensFrame cx={LX} cy={LB} r={LR} at={K5.crystals + 6} title="set B" titleAt={K5.crystals + 10}>
				<Crystals cx={LX} cy={LB} r={LR} grow={smooth(prog(f, K5.crystals + 6, 50))} mesh={mesh} ions={0} />
			</LensFrame>
			<AChip x={1250} y={380} text="c02: small crystals dissolve, bigger ones grow" size={24} color={GREYX} hand={false} at={K5.crystals + 20} />
			<Note x={LX} y={LA + LR + 44} text="fine crystals slip through" size={26} color={SETA} anchor="middle" at={K5.paper + 24} />
			<g opacity={pred}><Note x={1250} y={640} text="prediction: B recovers more" size={36} color={SETB} at={K5.paper + 30} /></g>
			{void K5.below}{void K5.both}{void K5.predict}{void K5.less}{void WARMC}
		</Overlay>
	);
};

// ---------- 6. Filter, wash and check ----------
const K6 = cues(sc('filter-wash-check'), {both: 'Both sets filter', fine: 'a fine paper', dried: 'dried and weighed', rinse: 'Rinse all', wash: 'and wash it', how: 'How do you know', silver: 'Add silver nitrate', few: 'a few drops', white: 'White cloudiness', through: 'coming through', keep: 'keep washing', clear: 'stays clear', look: 'Then look', ran: 'that ran through', cloudy: 'faintly cloudy', bclear: "Set B's is clear"});
export const SceneFilter: React.FC = () => {
	const f = useCurrentFrame();
	const FN = {x: 330, y: 250, h: 560};
	const W = {x: 720, y: 430, h: 270};
	const [nx, ny] = natPt(WASH, W.x, W.y, W.h, ...FEAT_C02.nozzle);
	const [rx, ry] = natPt(FUNNEL, FN.x, FN.y, FN.h, ...FEAT_C02.mound);
	const [qx, qy] = natPt(FUNNEL, FN.x, FN.y, FN.h, ...FLASK_LIQ);
	const big = 1 - prog(f, K6.cloudy - 4, 14);
	const TB = {x: 1420, y: 260, h: 420};
	const [tx, tsurf] = natPt(TUBE.agcl, TB.x, TB.y, TB.h, TUBE_A.cx, TUBE_A.surf);
	const [, tm] = natPt(TUBE.agcl, TB.x, TB.y, TB.h, TUBE_A.cx, TUBE_A.mouth);
	const toClear = smooth(prog(f, K6.clear, 26));
	const tests = vis(f, K6.silver - 6, undefined, 14);
	const SB = {x: 560, y: 250, h: 150};
	const TW = 460;
	return (
		<Overlay>
			<TaskLine text="Filter, wash, check" at={2} size={54} />
			<MethodStrip lit={{2: -100, 3: -100, 4: K6.both, 5: K6.wash}} />
			<g opacity={big}>
				<PicF p={FUNNEL} x={FN.x} y={FN.y} h={FN.h} />
				<Note x={96} y={880} text="fine filter paper: dried and weighed first, on the tared watch glass" size={26} color={NAVY} hand={false} at={K6.dried} out={K6.silver} />
				<AChip x={96} y={900} text="c02: tare" size={24} color={GREYX} hand={false} at={K6.dried + 30} out={K6.silver} />
				<g opacity={vis(f, K6.rinse - 6, K6.how, 12)} transform={`rotate(-50,${SB.x},${SB.y + SB.h})`}><PicF p={SETTLED} x={SB.x} y={SB.y} h={SB.h} /></g>
				<g opacity={vis(f, K6.rinse, K6.look, 12)}><PicF p={WASH} x={W.x} y={W.y} h={W.h} /></g>
				<Fade at={K6.rinse + 6} out={K6.how}>
					<path d={`M${nx},${ny} Q${(nx + SB.x + 60) / 2},${ny - 140} ${SB.x + 70},${SB.y + 60}`} fill="none" stroke="#7fb2d6" strokeWidth={5} strokeDasharray="10 8" strokeDashoffset={-(f % 36)} />
				</Fade>
				<Fade at={K6.wash} out={K6.silver + 30}>
					<path d={`M${nx},${ny} Q${(nx + rx) / 2},${ny - 120} ${rx + 20},${ry}`} fill="none" stroke="#7fb2d6" strokeWidth={5} strokeDasharray="10 8" strokeDashoffset={-(f % 36)} />
				</Fade>
				<Note x={W.x - 20} y={W.y - 24} text="warm distilled water, small portions" size={26} color={INK_SOFT} at={K6.wash + 6} out={K6.look} />
				<Note x={qx + 120} y={qy + 10} text="filtrate: the liquid that ran through" size={28} color={NAVY} hand={false} at={K6.ran} />
				<Lead a={[qx + 110, qy]} b={[qx + 30, qy]} at={K6.ran} color={NAVY} />
			</g>
			<g opacity={tests * (1 - 0.35 * prog(f, K6.look, 14))}>
				<PicF p={DROPB} x={1200} y={330} h={250} />
				<Note x={1150} y={300} text="AgNO_3(aq), 0.1 mol/L" size={26} color={NAVY} hand={false} at={K6.silver} />
				<PicF p={TUBE.agcl} x={TB.x} y={TB.y} h={TB.h} o={1 - toClear} />
				<PicF p={TUBE.clear} x={TB.x} y={TB.y} h={TB.h} o={toClear} />
				<FallDrop x={tx} y0={tm - 60} y1={tsurf} at={K6.few} color="#e8eaec" s={1.3} />
				<FallDrop x={tx} y0={tm - 60} y1={tsurf} at={K6.clear - 12} color="#e8eaec" s={1.3} />
				<Note x={1150} y={740} text="early washings: white AgCl, chloride still there" size={26} color={INK} hand={false} at={K6.white} out={K6.clear} />
				<Note x={1150} y={740} text="later washings: clear, washed enough" size={30} color={GREENC4} hand={false} at={K6.clear + 10} />
				<AChip x={1150} y={780} text="c01: Ag^{+} + Cl^{−} → AgCl" size={24} color={GREYX} hand={false} at={K6.white + 20} out={K6.look} />
			</g>
			<Fade at={K6.cloudy}>
				<PicF p={CLOUDY} x={200} y={260} h={TW} />
				<Note x={200 + picW(CLOUDY, TW) / 2} y={260 + TW + 50} text="set A: faintly cloudy" size={32} color={SETA} anchor="middle" at={K6.cloudy + 4} />
			</Fade>
			<Fade at={K6.bclear}>
				<PicF p={FUNNEL} x={620} y={260} h={TW} />
				<Note x={620 + picW(FUNNEL, TW) / 2} y={260 + TW + 50} text="set B: clear" size={32} color={SETB} anchor="middle" at={K6.bclear + 4} />
			</Fade>
			{void K6.fine}{void K6.through}{void K6.keep}{void K6.bclear}{void Sx}
		</Overlay>
	);
};
