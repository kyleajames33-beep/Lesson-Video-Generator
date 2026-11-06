// B7 scenes 7 to 10: same genes in a different environment (hydrangea aluminium and pigment, then height on a range
// bar), weighing genes against environment (a trait spectrum and the cutting test), why polypeptide synthesis
// matters, and the two memory aids.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {
	AMBER, AMBER_INK, AlDot, Chip, DrawPath, FONT_DISPLAY, FONT_HAND, Fade, GREYT, GREY_INK, GeneCard, GreyTag, Hb, Heading, INK, INK_SOFT, Keratin, MiniFold, Overlay,
	PLT, PigmentRing, PlainArrow, EnzymePlate, Receptor, Antibody, DnaIcon, AABead, PepLink, MRNA_INK, PlateB, RangeBar, S, Soil, Sx, Tick, TraitStrip, ChainView, CHAIN12, clamp01, lerp, prog, pulse, rangeY, scalePts, rng, stX,
} from './shared';
import {FOLD_A} from './s1';
import {StripSummaries} from './s2';

const vis = (f: number, at: number, out?: number, d = 12) => prog(f, at, d) * (out === undefined ? 1 : 1 - prog(f, out, d));

// ---------- 7. Same genes, different environment ----------
const K8 = cues(S('environment'), {back: 'back to the hydrangeas', genes: 'Their genes code', pigment: 'make a red pigment', acidic: 'In acidic soil', dissolves: 'aluminium dissolves', roots: 'the roots take it up', binds: 'aluminium binds to the pigment', blue: 'turns it blue', less: 'In less acidic soil', little: 'little aluminium dissolves', pink: 'stays pink', same: 'The genotype is the same', env: 'The environment changes', height: 'Height works the same way', many: 'It depends on many genes', food: "don't get enough food", allow: 'their genes allow'});
const AL_SOIL = (() => { const r = rng(5); return Array.from({length: 7}, () => [330 + r() * 300, 836 + r() * 34] as [number, number]); })();
const Inset: React.FC<{x: number; y: number; at: number; blue: number; al: number; to: [number, number]}> = ({x, y, at, blue, al, to}) => (
	<Fade at={at}>
		<line x1={x} y1={y} x2={to[0]} y2={to[1]} stroke={INK_SOFT} strokeWidth={3} strokeDasharray="5 7" />
		<circle cx={x} cy={y} r={96} fill="#fffaf4" stroke={INK_SOFT} strokeWidth={3} />
		<PigmentRing x={x - 38} y={y - 26} blue={blue} al={al} />
		<PigmentRing x={x + 36} y={y - 20} blue={blue} al={al} />
		<PigmentRing x={x} y={y + 38} blue={blue} al={al} />
	</Fade>
);
export const SceneEnvironmentB7: React.FC = () => {
	const f = useCurrentFrame();
	const m = prog(f, K8.height, 30);
	const blue = prog(f, K8.blue, 20);
	const up = prog(f, K8.roots, 50);
	const pointer = lerp(0.92, 0.32, prog(f, K8.food, 30));
	const bar = {x: 1440, y0: 250, y1: 900, b0: 0.18, b1: 0.95};
	const py = rangeY(bar.y0, bar.y1, bar.b0, bar.b1, pointer);
	return (
		<>
			<Heading text="Same genes, different environment" at={4} size={56} />
			<Overlay>
				<g transform={`translate(${lerp(0, 40, m)},${lerp(0, 150, m)}) scale(${lerp(1, 0.62, m)})`}>
					<GeneCard x={960} y={190} text="same genotype" at={K8.genes} />
					<PlainArrow x1={860} y1={258} x2={620} y2={420} at={K8.genes + 10} color={INK_SOFT} />
					<PlainArrow x1={1060} y1={258} x2={1300} y2={420} at={K8.genes + 14} color={INK_SOFT} />
					<PigmentRing x={1176} y={222} o={prog(f, K8.pigment, 12)} />
					<Sx x={1212} y={234} text="red pigment, made by enzymes" size={32} color={INK} hand at={K8.pigment + 4} />
					<PlateB p={PLT.hydPink} cx={480} cy={640} w={360} o={(1 - blue) * prog(f, 0, 14)} />
					<PlateB p={PLT.hydBlue} cx={480} cy={640} w={360} o={blue} />
					<PlateB p={PLT.hydPink} cx={1440} cy={640} w={360} o={prog(f, 0, 14)} />
					<Soil x={480} y={815} w={440} h={70} />
					<Soil x={1440} y={815} w={440} h={70} />
					<Sx x={480} y={935} text="acidic soil (lower pH)" size={36} color={INK_SOFT} hand anchor="middle" at={K8.acidic} />
					<Sx x={1440} y={935} text="less acidic soil (higher pH)" size={36} color={INK_SOFT} hand anchor="middle" at={K8.less} />
					{AL_SOIL.map(([x, y], i) => {
						const t = clamp01((up * 1.4) - i * 0.06);
						const yy = lerp(y, 520 + (i % 3) * 30, t), xx = lerp(x, 420 + (i % 4) * 40, t);
						return <AlDot key={i} x={xx} y={yy} r={13} o={prog(f, K8.dissolves + i * 3, 10) * (1 - prog(f, K8.binds + 30, 20) * (t > 0.95 ? 1 : 0))} />;
					})}
					<AlDot x={1500} y={850} r={13} o={prog(f, K8.little, 12)} />
					<Inset x={790} y={470} at={K8.binds - 6} blue={blue} al={prog(f, K8.binds + 6, 14)} to={[600, 520]} />
					<Inset x={1130} y={470} at={K8.little} blue={0} al={0} to={[1320, 520]} />
					<Sx x={960} y={720} text="same genotype, different phenotype" size={42} color={AMBER_INK} hand anchor="middle" at={K8.env} />
				</g>
				{/* height: a range the genes allow, and where food puts you in it */}
				<Fade at={K8.height}>
					<Sx x={bar.x} y={215} text="height" size={44} color={INK} hand anchor="middle" at={K8.height} />
				</Fade>
				<RangeBar x={bar.x} y0={bar.y0} y1={bar.y1} b0={bar.b0} b1={bar.b1} p={pointer} o={prog(f, K8.height + 6, 16)} pointerO={prog(f, K8.many, 12)} />
				{/* range label sits on the left with a bracket, clear of the pointer and its labels on the right */}
				<Fade at={K8.height + 16}>
					<path d={`M${bar.x - 40},${rangeY(bar.y0, bar.y1, bar.b0, bar.b1, 1)} L${bar.x - 54},${rangeY(bar.y0, bar.y1, bar.b0, bar.b1, 1)} L${bar.x - 54},${rangeY(bar.y0, bar.y1, bar.b0, bar.b1, 0)} L${bar.x - 40},${rangeY(bar.y0, bar.y1, bar.b0, bar.b1, 0)}`} fill="none" stroke={AMBER_INK} strokeWidth={3} strokeLinejoin="round" />
				</Fade>
				<Sx x={bar.x - 72} y={rangeY(bar.y0, bar.y1, bar.b0, bar.b1, 0.62)} text="range these" size={32} color={AMBER_INK} hand anchor="end" at={K8.height + 16} />
				<Sx x={bar.x - 72} y={rangeY(bar.y0, bar.y1, bar.b0, bar.b1, 0.62) + 36} text="genes allow" size={32} color={AMBER_INK} hand anchor="end" at={K8.height + 16} />
				<GreyTag x={1170} y={600} text="many genes" at={K8.many} size={26} />
				<Sx x={bar.x + 76} y={py + 10} text="actual height" size={34} color={INK} hand at={K8.many + 6} />
				<Sx x={bar.x + 76} y={py + 48} text="good food, good health" size={28} color={INK_SOFT} weight={600} at={K8.many + 10} out={K8.food} />
				<Sx x={bar.x + 76} y={py + 48} text="poor nutrition" size={30} color={AMBER_INK} weight={700} at={K8.food + 14} />
			</Overlay>
		</>
	);
};

// ---------- 8. Weighing genes against environment ----------
const K9 = cues(S('genes-and-environment'), {how: 'So how much', possible: "Genes set what's possible", affects: 'the environment affects', range: 'within that range', balance: 'The balance differs', abo: 'Your ABO blood group', wont: "won't change it", both: 'Height depends on both', trait: 'changes the trait', themselves: 'not the genes themselves', cutting: 'Take a cutting', grow: 'grow it in less acidic soil', pinkk: 'come out pink'});
export const SceneGenesEnvB7: React.FC = () => {
	const f = useCurrentFrame();
	const soilSwap = prog(f, K9.themselves + 6, 1);
	const cut = prog(f, K9.grow, 36);
	const pinkT = prog(f, K9.pinkk, 18);
	const LY = 800;
	// the clone pair from scene 7 carries the opening question; it clears before the spectrum markers arrive
	const pairO = prog(f, 4, 14) * (1 - prog(f, K9.both - 24, 16));
	const pairY = 395;
	return (
		<>
			<Heading text="Genes and environment together" at={4} size={56} />
			<Overlay>
				<g opacity={pairO}>
					<PlateB p={PLT.hydBlue} cx={1060} cy={pairY} w={300} />
					<PlateB p={PLT.hydPink} cx={1500} cy={pairY} w={300} />
					<Soil x={1060} y={pairY + 160} w={340} h={52} />
					<Soil x={1500} y={pairY + 160} w={340} h={52} />
					<GeneCard x={1280} y={176} text="same genes" at={4} w={250} />
					<Sx x={1060} y={pairY + 236} text="acidic soil" size={36} color={INK_SOFT} hand anchor="middle" at={K9.affects} />
					<Sx x={1500} y={pairY + 236} text="less acidic soil" size={36} color={INK_SOFT} hand anchor="middle" at={K9.affects + 6} />
					<Sx x={1280} y={pairY + 10} text="?" size={90} color={AMBER_INK} hand anchor="middle" at={K9.how} out={K9.possible} />
				</g>
				{/* the range bar: genes set the range, the environment sets where in it */}
				<RangeBar x={190} y0={220} y1={560} b0={0.15} b1={0.95} p={lerp(0.25, 0.7, prog(f, K9.affects + 10, 30))} o={prog(f, K9.possible - 4, 14)} w={52} pointerO={prog(f, K9.affects, 12)} />
				<Sx x={260} y={262} text="genes: the possible range" size={38} color={AMBER_INK} hand at={K9.possible} />
				<Sx x={260} y={rangeY(220, 560, 0.15, 0.95, 0.7) + 60} text="environment: where in it" size={38} color={INK} hand at={K9.affects + 6} />
				{/* the spectrum */}
				<Fade at={K9.balance}>
					<DrawPath d={`M200,${LY} L1720,${LY}`} at={K9.balance} dur={20} color={INK} width={5} />
					<path d={`M1700,${LY - 14} L1724,${LY} L1700,${LY + 14}`} fill="none" stroke={INK} strokeWidth={5} strokeLinecap="round" />
					<path d={`M220,${LY - 14} L196,${LY} L220,${LY + 14}`} fill="none" stroke={INK} strokeWidth={5} strokeLinecap="round" />
				</Fade>
				<Sx x={200} y={LY + 54} text="mostly genes" size={38} color={INK_SOFT} hand at={K9.balance + 10} />
				<Sx x={1720} y={LY + 54} text="strongly environment" size={38} color={INK_SOFT} hand anchor="end" at={K9.balance + 14} />
				<PlateB p={PLT.bloodTile} cx={360} cy={lerp(620, 735, prog(f, K9.abo, 20))} w={230} o={prog(f, K9.abo, 12)} />
				<Sx x={360} y={655} text="ABO: set by alleles" size={32} color={INK} hand anchor="middle" at={K9.wont} />
				<RangeBar x={960} y0={672} y1={780} b0={0.15} b1={0.95} p={0.5} o={prog(f, K9.both, 14)} w={26} />
				<Sx x={960} y={650} text="height: both" size={32} color={INK} hand anchor="middle" at={K9.both + 6} />
				<PlateB p={PLT.hydPink} cx={1320} cy={730} w={110} o={prog(f, K9.both + 16, 14) * (1 - 0.5 * pulse(f, K9.both + 40, 40))} />
				<PlateB p={PLT.hydBlue} cx={1320} cy={730} w={110} o={prog(f, K9.both + 16, 14) * 0.5 * pulse(f, K9.both + 40, 40)} />
				<Sx x={1320} y={655} text="hydrangea colour: soil matters" size={32} color={INK} hand anchor="middle" at={K9.both + 22} />
				{[360, 960, 1320].map((x, i) => <circle key={x} cx={x} cy={LY} r={10} fill={AMBER} opacity={prog(f, [K9.abo, K9.both, K9.both + 16][i] + 10, 10)} />)}
				{/* the environment changes the trait, not the genotype */}
				<GeneCard x={900} y={250} text="genotype" at={K9.trait} tick={K9.themselves + 4} w={250} />
				<Chip x={900} y={360} anchor="middle" text={soilSwap > 0.5 ? 'less acidic soil' : 'acidic soil'} at={K9.trait + 6} size={32} color="#6b4a2b" stroke="#a9825a" hot={pulse(f, K9.themselves + 6, 24)} />
				<Sx x={900} y={500} text="environment changes the trait," size={30} color={AMBER_INK} hand anchor="middle" at={K9.themselves + 10} />
				<Sx x={900} y={540} text="not the genotype" size={30} color={AMBER_INK} hand anchor="middle" at={K9.themselves + 14} />
				{/* the cutting test */}
				<Fade at={K9.cutting - 4}>
					<Soil x={1360} y={468} w={220} h={40} />
					<Soil x={1680} y={468} w={220} h={40} o={prog(f, K9.grow - 4, 12)} />
				</Fade>
				<PlateB p={PLT.hydBlue} cx={1360} cy={385} w={170} o={prog(f, K9.cutting - 4, 12)} />
				<Fade at={K9.cutting + 10}><DrawPath d="M1380,440 L1410,416" at={K9.cutting + 10} dur={8} color={AMBER_INK} width={6} /></Fade>
				<PlateB p={PLT.hydBlue} cx={lerp(1360, 1680, cut)} cy={385} w={170} o={prog(f, K9.cutting + 14, 10) * (1 - pinkT)} />
				<PlateB p={PLT.hydPink} cx={lerp(1360, 1680, cut)} cy={385} w={170} o={prog(f, K9.cutting + 14, 10) * pinkT} />
				<Sx x={1360} y={540} text="acidic soil" size={28} color={INK_SOFT} hand anchor="middle" at={K9.cutting} />
				<Sx x={1680} y={540} text="less acidic soil" size={28} color={INK_SOFT} hand anchor="middle" at={K9.grow} />
				<Sx x={1520} y={260} text="= genes" size={36} color={AMBER_INK} hand anchor="middle" at={K9.pinkk + 6} />
			</Overlay>
		</>
	);
};

// ---------- 9. Why polypeptide synthesis matters ----------
const K10 = cues(S('why-synthesis'), {matters: 'matters so much', almost: 'Almost everything', every: 'every protein is made', trans: 'transcription and translation', same: 'all carry the same genes', own: 'its own set of proteins', red: 'a red blood cell', muscle: 'a muscle cell', wrong: 'the sequence is wrong', made: "the protein isn't made", job: "the job doesn't get done"});
const JOBS = ['enzymes', 'transport', 'structure', 'receptors', 'antibodies'];
const HB_IN: [number, number][] = [[-70, -40], [10, -60], [70, -10], [-40, 30], [40, 50], [-90, 30], [90, 40]];
const FLOW_Y = 285;
const FLOW_AA = ['Met', 'Glu', 'Pro', 'Lys', 'Cys'];
/** One job card with its own visual (the same objects as scene 2). */
const JobVisual: React.FC<{i: number; x: number; y: number}> = ({i, x, y}) => {
	if (i === 0) return <EnzymePlate id="b7w-enz" cx={x} cy={y} w={170} sub={1} />;
	if (i === 1) return <PlateB p={PLT.rbc} cx={x} cy={y} w={140} />;
	if (i === 2) return <Keratin x={x} y={y} h={130} />;
	if (i === 3) return <Receptor x={x} y={y + 30} w={210} sig={1} />;
	return <g transform={`translate(${x},${y}) scale(0.62)`}><Antibody x={0} y={40} grab={1} /></g>;
};
export const SceneWhySynthesisB7: React.FC = () => {
	const f = useCurrentFrame();
	const grey = prog(f, K10.made + 4, 16);
	const wrong = prog(f, K10.wrong + 6, 12);
	const rbc = {x: 560, y: 890, w: 250};
	const fold = scalePts(FOLD_A.s3, [960, 560], 0.32, [1730, FLOW_Y]);
	const tHot = pulse(f, K10.trans, 30), lHot = pulse(f, K10.trans + 24, 30);
	return (
		<>
			<Heading text="Why making polypeptides matters" at={4} size={56} />
			<Overlay>
				{/* gene to mRNA to polypeptide to folded protein: every protein is made this way */}
				<g opacity={prog(f, 6, 14)}>
					<DnaIcon x={230} y={FLOW_Y} s={2.4} />
					<Sx x={230} y={FLOW_Y + 100} text="gene (DNA)" size={34} color={INK_SOFT} hand anchor="middle" at={6} />
				</g>
				<PlainArrow x1={330} y1={FLOW_Y} x2={520} y2={FLOW_Y} at={14} color={INK_SOFT} />
				<Chip x={425} y={FLOW_Y - 92} anchor="middle" text="transcription" at={K10.trans} size={32} color={INK} stroke={AMBER} hot={tHot} />
				<g opacity={prog(f, 18, 14)}>
					<rect x={548} y={FLOW_Y - 34} width={330} height={68} rx={14} fill="#fbf1ea" stroke={MRNA_INK} strokeWidth={3} />
					<text x={713} y={FLOW_Y + 14} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 38, letterSpacing: 2}} fill={MRNA_INK}>AUG GAA CCU</text>
					<Sx x={713} y={FLOW_Y + 100} text="mRNA" size={34} color={INK_SOFT} hand anchor="middle" at={18} />
				</g>
				<PlainArrow x1={900} y1={FLOW_Y} x2={1070} y2={FLOW_Y} at={26} color={INK_SOFT} />
				<Chip x={985} y={FLOW_Y - 92} anchor="middle" text="translation" at={K10.trans + 24} size={32} color={INK} stroke={AMBER} hot={lHot} />
				{FLOW_AA.map((aa, i) => (
					<g key={aa}>
						{i > 0 ? <PepLink a={[1120 + (i - 1) * 74, FLOW_Y]} b={[1120 + i * 74, FLOW_Y]} o={prog(f, 30 + i * 3, 8)} r={30} /> : null}
						<AABead x={1120 + i * 74} y={FLOW_Y} aa={i === 2 && wrong > 0.5 ? 'Leu' : aa} r={30} o={prog(f, 30 + i * 3, 8)} />
					</g>
				))}
				{wrong > 0.01 ? <circle cx={1268} cy={FLOW_Y} r={44} fill="none" stroke="#c0392b" strokeWidth={6} opacity={wrong} /> : null}
				<Sx x={1268} y={FLOW_Y + 100} text="polypeptide" size={34} color={INK_SOFT} hand anchor="middle" at={30} />
				<PlainArrow x1={1440} y1={FLOW_Y} x2={1580} y2={FLOW_Y} at={44} color={INK_SOFT} />
				<g opacity={prog(f, 48, 14) * (1 - 0.7 * grey)}><ChainView seq={CHAIN12} pts={fold} r={11} ss={1} hull={0.6} /></g>
				<Sx x={1730} y={FLOW_Y + 100} text="protein" size={34} color={grey > 0.5 ? GREY_INK : INK_SOFT} hand anchor="middle" at={48} />
				{grey > 0.01 ? <path d={`M1660,${FLOW_Y - 70} L1800,${FLOW_Y + 70} M1800,${FLOW_Y - 70} L1660,${FLOW_Y + 70}`} stroke="#c0392b" strokeWidth={7} strokeLinecap="round" opacity={grey} /> : null}
				{/* almost everything a cell does depends on its proteins */}
				{JOBS.map((j, i) => {
					const x = 260 + i * 350;
					const g = i === 4 ? prog(f, K10.job, 16) : 0;
					return (
						<Fade key={j} at={K10.almost + i * 6}>
							<rect x={x - 150} y={430} width={300} height={250} rx={20} fill={g > 0.5 ? '#eceeef' : '#fffdf8'} stroke={g > 0.5 ? GREYT : 'rgba(60,45,20,0.25)'} strokeWidth={3} />
							<Sx x={x} y={476} text={j} size={38} color={g > 0.5 ? GREY_INK : AMBER_INK} hand anchor="middle" at={K10.almost + i * 6} />
							<g opacity={1 - 0.75 * g}><JobVisual i={i} x={x} y={580} /></g>
						</Fade>
					);
				})}
				<GreyTag x={1660} y={712} text="no protein: no job" at={K10.job} size={28} anchor="middle" />
				{/* same genes, different sets of proteins */}
				<GeneCard x={960} y={712} text="same genes" at={K10.same} w={260} />
				<PlainArrow x1={860} y1={778} x2={700} y2={826} at={K10.own} color={INK_SOFT} />
				<PlainArrow x1={1060} y1={778} x2={1220} y2={826} at={K10.own + 4} color={INK_SOFT} />
				<PlateB p={PLT.rbc} cx={rbc.x} cy={rbc.y} w={rbc.w} o={prog(f, K10.red - 10, 12)} />
				{HB_IN.map(([dx, dy], i) => <Hb key={i} x={rbc.x + dx * 0.85} y={rbc.y + dy * 0.85} s={0.3} labels={false} o={prog(f, K10.red + i * 3, 8)} />)}
				<Sx x={rbc.x} y={1050} text="developing red cell: makes haemoglobin" size={34} color={INK} hand anchor="middle" at={K10.red + 10} />
				<PlateB p={PLT.muscleR} cx={1380} cy={900} w={460} o={prog(f, K10.muscle - 10, 12)} />
				<Fade at={K10.muscle + 4}>
					{[-12, 0, 12].map((dy, i) => <line key={i} x1={1220} y1={900 + dy} x2={1540} y2={900 + dy} stroke="#7d2a22" strokeWidth={3} strokeDasharray="22 10" opacity={0.75} />)}
				</Fade>
				<Sx x={1380} y={1050} text="makes contractile proteins, no haemoglobin" size={34} color={INK} hand anchor="middle" at={K10.muscle + 10} />
			</Overlay>
		</>
	);
};

// ---------- 10. Memory ----------
const K11 = cues(S('memory'), {two: 'Two aids', structure: 'For protein structure', one: 'one, the order', twoL: 'two, local coils', three: 'three, the whole folded', four: 'four, more than one', hb: 'like haemoglobin', traits: 'And for traits', possible: "genes set what's possible", develops: 'actually develops'});
const PW = 400;
const pX = (i: number) => 290 + i * 434;
export const SceneMemoryB7: React.FC = () => {
	const f = useCurrentFrame();
	const at = [K11.one, K11.twoL, K11.three, K11.four];
	const titles = ['order', 'local coils', 'whole fold', 'more than one chain'];
	const small = ['primary', 'secondary', 'tertiary', 'quaternary'];
	const fold = scalePts(FOLD_A.s3, [960, 560], 0.42, [pX(2), 430]);
	return (
		<>
			<Heading text="Two aids" at={4} size={60} />
			<Overlay>
				<Sx x={96} y={205} text="protein structure" size={38} color={INK_SOFT} hand at={K11.structure} />
				{at.map((a, i) => (
					<Fade key={i} at={a - 4}>
						<rect x={pX(i) - PW / 2} y={230} width={PW} height={380} rx={22} fill="#fffdf8" stroke="rgba(60,45,20,0.22)" strokeWidth={3} />
						<circle cx={pX(i) - PW / 2 + 44} cy={282} r={28} fill={AMBER} />
						<text x={pX(i) - PW / 2 + 44} y={296} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 38}} fill="#fffdf8">{i + 1}</text>
						<Sx x={pX(i) - PW / 2 + 86} y={298} text={titles[i]} size={i === 3 ? 34 : 42} color={INK} hand at={a - 4} />
						<Sx x={pX(i)} y={590} text={small[i]} size={26} color={GREY_INK} weight={600} anchor="middle" at={a + 6} />
					</Fade>
				))}
				{/* 1 order */}
				{[1, 2, 3, 4].map(i => <line key={'l' + i} x1={pX(0) - 140 + (i - 1) * 70} y1={430} x2={pX(0) - 140 + i * 70} y2={430} stroke={INK} strokeWidth={4} opacity={prog(f, K11.one + i * 3, 8)} />)}
				{['Met', 'Ser', 'Val', 'Lys', 'Cys'].map((aa, i) => (
					<g key={i} opacity={prog(f, K11.one + i * 3, 8)}>
						<circle cx={pX(0) - 140 + i * 70} cy={430} r={26} fill={['#e7b98f', '#e2c9b4', '#c4c9d0', '#b7c79f', '#e9d08e'][i]} stroke={INK_SOFT} strokeWidth={3} />
						<text x={pX(0) - 140 + i * 70} y={437} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 18}} fill={INK}>{aa}</text>
					</g>
				))}
				{/* 2 local coils: a coil and a zigzag */}
				<Fade at={K11.twoL}>
					<path d={Array.from({length: 61}, (_, i) => { const t = i / 60; return `${i ? 'L' : 'M'}${(pX(1) - 160 + t * 150 + 14 * Math.cos(t * Math.PI * 10)).toFixed(1)},${(430 + 34 * Math.sin(t * Math.PI * 10)).toFixed(1)}`; }).join(' ')} fill="none" stroke="#a8508f" strokeWidth={6} strokeLinecap="round" />
					<path d={`M${pX(1) + 20},400 L${pX(1) + 50},460 L${pX(1) + 80},400 L${pX(1) + 110},460 L${pX(1) + 140},400 L${pX(1) + 170},460`} fill="none" stroke="#2b9a8e" strokeWidth={6} strokeLinecap="round" strokeLinejoin="round" />
				</Fade>
				{/* 3 whole fold */}
				<g opacity={prog(f, K11.three, 12)}><ChainView seq={CHAIN12} pts={fold} r={14} ss={1} hull={0.6} /></g>
				{/* 4 more than one chain */}
				<Hb x={pX(3)} y={440} s={1.45} o={prog(f, K11.four, 12)} />
				<GreyTag x={pX(3)} y={624} text="only when there is more than one" at={K11.hb + 6} size={24} anchor="middle" />
				{/* the trait aid, framed, with the clone pair as its example */}
				<Fade at={K11.traits - 6}>
					<rect x={110} y={672} width={1710} height={340} rx={26} fill="#fffdf8" stroke={AMBER} strokeWidth={4} />
					<Sx x={300} y={728} text="for traits" size={36} color={INK_SOFT} hand at={K11.traits - 6} />
				</Fade>
				<RangeBar x={210} y0={720} y1={970} b0={0.15} b1={0.95} p={lerp(0.3, 0.75, prog(f, K11.develops, 30))} o={prog(f, K11.traits, 14)} w={44} pointerO={prog(f, K11.develops - 10, 12)} />
				<Sx x={300} y={834} text="genes set what's possible;" size={56} color={AMBER_INK} hand at={K11.possible} />
				<Sx x={300} y={920} text="environment affects what develops" size={56} color={AMBER_INK} hand at={K11.develops - 30} />
				<PlateB p={PLT.hydBlue} cx={1490} cy={830} w={200} o={prog(f, K11.develops - 20, 14)} />
				<PlateB p={PLT.hydPink} cx={1710} cy={830} w={200} o={prog(f, K11.develops - 14, 14)} />
				<Soil x={1490} y={935} w={220} h={36} o={prog(f, K11.develops - 20, 14)} />
				<Soil x={1710} y={935} w={220} h={36} o={prog(f, K11.develops - 14, 14)} />
				<Sx x={1600} y={994} text="same genes, two soils" size={30} color={INK_SOFT} hand anchor="middle" at={K11.develops} />
			</Overlay>
		</>
	);
};
void FONT_HAND; void INK; void Keratin; void Tick; void clamp01;
