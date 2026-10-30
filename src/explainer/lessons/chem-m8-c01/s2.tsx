// M8 C01 scenes 7 to 11: the titres (the rough run struck, concordant rows ringed, the mean bracketed), then the
// calculation board: task line, equation strip with its 1 : 1 chip and grouped givens fixed at the top, one working line
// per stage below (earlier lines dimmed, results kept), and the memory aid.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {prog} from '../../kit';
import {BOTTLE, MOHR, sc} from './common';
import {
	AChip, Arrow, CompareBars, DimG, EqLine, Fade, GCard, INK, INK_SOFT, KeptChip, MistakeX, MohrRig, NAVY, Note, OpGlow, Overlay, P, PairAt, PlateAt, TEAL, TaskLine, TitreTable, VBracket, WLine,
	eWidth, eq, mw, smooth, tRowY,
} from './parts';
import {RIG} from './s1';

const GREYX = '#9a948a';
export const TX = 1100, TY = 380;
export const TROWS = (t: number[], cross?: number, ring?: number) => [
	{label: 'rough', v: '19.10', at: t[0], cross, tag: cross === undefined ? undefined : 'left out'},
	{label: '1', v: '18.45', at: t[1], ring},
	{label: '2', v: '18.55', at: t[2], ring: ring === undefined ? undefined : ring + 6},
	{label: '3', v: '18.50', at: t[3], ring: ring === undefined ? undefined : ring + 12},
];

// ---------- 7. The titres ----------
const K7 = cues(sc('titres'), {aliquot: 'A twenty five', estuary: 'the estuary water', p1000: 'point one zero', here: 'Here are the', rough: 'The rough run', left: 'left out', other: 'The other three', within: 'within point one', concordant: "they're concordant", average: 'Their average', r1850: 'eighteen point five'});
export const SceneTitres: React.FC = () => {
	const t = [K7.here + 10, K7.here + 24, K7.here + 38, K7.here + 52];
	const y1 = tRowY(TY, 1) - 40, y3 = tRowY(TY, 3) + 12;
	return (
		<Overlay>
			<MohrRig {...RIG} level={() => 18.5} at={-100} states={[{p: MOHR.end, at: -100}]} label={{t: 'AgNO_3(aq)', at: -100}} />
			<Note x={TX} y={200} text="aliquot: 25.00 mL of estuary water" size={36} color={INK} hand={false} at={K7.aliquot} />
			<Note x={TX} y={256} text="AgNO_3: 0.1000 mol/L" size={36} color={NAVY} hand={false} at={K7.p1000} />
			<DimG at={K7.average + 40} to={0.6}>
				<TitreTable x={TX} y={TY} at={-100} rows={TROWS(t, K7.left, K7.within + 6)} />
			</DimG>
			<AChip x={TX} y={720} text="c12: concordant = within 0.10 mL" size={30} color={GREYX} hand={false} at={K7.within + 20} />
			<VBracket x={TX + 360} y1={y1} y2={y3} at={K7.average} color={TEAL} />
			<KeptChip x={TX + 400} y={(y1 + y3) / 2 - 30} text="mean = 18.50 mL" at={K7.r1850} color={TEAL} size={36} />
			{void K7.estuary}{void K7.rough}{void K7.other}{void K7.concordant}
		</Overlay>
	);
};

// ---------- the calculation board ----------
export const TASK = 'Find the chloride concentration in mol/L and g/L';
const EQB = (at: number) => eq(['Ag^{+}(aq)', '+', 'Cl^{−}(aq)', '->', 'AgCl(s)'], at);
const ES = 46, EY = 290;
const GX = 1040, GY = 180, GW = 820, GS = 30, GLH = 54;
const GL = ['AgNO_3: c = 0.1000 mol/L', 'V(titre) = 18.50 mL = 0.01850 L', 'sample: V(aliquot) = 25.00 mL = 0.02500 L', 'M(Cl) = 35.45 g/mol'];
const WY = [580, 670, 760, 870];
const R1 = '1.850 × 10^{−3} mol';
const Board: React.FC<{gAt?: number[]; lit?: ([number, number] | undefined)[]; eqAt?: number; taskAt?: number; ratioPulse?: number; n?: number}> = ({gAt = [-100, -100, -100], lit = [], eqAt = -100, taskAt = -100, ratioPulse, n = 3}) => {
	const e = EQB(eqAt);
	const rx = 96 + eWidth(e, ES) + 40;
	return (
		<>
			<TaskLine text={TASK} at={taskAt} />
			<EqLine items={e} x={96} y={EY} size={ES} />
			<KeptChip x={rx} y={EY - 44} text="1 : 1" at={eqAt + 10} color={TEAL} size={36} pulse={ratioPulse} />
			<KeptChip x={96} y={360} text="mean titre = 18.50 mL" at={-100} color={NAVY} size={32} />
			<GCard x={GX} y={GY} w={GW} size={GS} lh={GLH} at={gAt[0] - 6} lines={GL.slice(0, n).map((t, i) => ({t, at: gAt[i] ?? gAt[gAt.length - 1], lit: lit[i]}))} />
		</>
	);
};
export {mw};

// ---------- 8. Stage 1: moles of silver ----------
const K8 = cues(sc('stage-1-silver'), {task: 'the task', find: 'find the chloride', equation: 'The equation', start: 'Start with the', know: 'know both numbers', moles: 'Moles equals', p1000: 'Point one zero', times: 'times point zero', gives: 'gives one point', silver: 'moles of silver'});
export const SceneStage1: React.FC = () => {
	const f = useCurrentFrame();
	const s = smooth(prog(f, 0, 26));
	return (
		<Overlay>
			<g opacity={1 - s} transform={`translate(${TX},${TY}) scale(${1 - 0.4 * s}) translate(${-TX},${-TY})`}>
				<TitreTable x={TX} y={TY} at={-100} rows={TROWS([-100, -100, -100, -100], -100, -100)} />
			</g>
			<g opacity={1 - s}><MohrRig {...RIG} level={() => 18.5} at={-100} states={[{p: MOHR.end, at: -100}]} /></g>
			<Board taskAt={K8.task + 6} eqAt={K8.equation} gAt={[K8.start, K8.start + 10, K8.start + 20]} lit={[[K8.know, K8.silver + 40], [K8.know + 6, K8.silver + 40]]} />
			<WLine x={96} y={WY[0]} size={42} items={P('n(Ag^{+}) = c × V', K8.moles, '= 0.1000 × 0.01850', K8.p1000, {t: '= ' + R1, color: NAVY}, K8.silver - 14)} />
			<Note x={96} y={WY[0] + 70} text="V in litres: 18.50 mL = 0.01850 L" size={30} color={INK_SOFT} at={K8.times} out={K8.silver + 60} />
			{void K8.find}{void K8.gives}
		</Overlay>
	);
};

// ---------- 9. Stage 2: the ratio and the aliquot ----------
const K9 = cues(sc('stage-2-aliquot'), {ratio: 'The ratio is', chloride: 'moles of chloride', all: 'all of it came', divide: 'So divide', vol: "the aliquot's volume", not: 'not by the titre', gives: 'That gives', litre: 'per litre'});
export const SceneStage2: React.FC = () => (
	<Overlay>
		<Board gAt={[-100, -100, -100]} lit={[undefined, undefined, [K9.vol - 10, K9.gives + 30]]} ratioPulse={K9.ratio} />
		<WLine x={96} y={WY[0]} size={42} dim={K9.ratio} dimTo={0.4} items={P('n(Ag^{+}) = c × V', -100, '= 0.1000 × 0.01850', -100, {t: '= ' + R1, color: NAVY}, -100)} />
		<WLine x={96} y={WY[1]} size={42} dim={K9.divide} dimTo={0.45} items={P('1 : 1, so n(Cl^{−}) =', K9.ratio + 20, {t: R1, color: NAVY}, K9.chloride + 4)} />
		<Note x={96} y={WY[1] + 52} text="all of it came from the aliquot" size={30} color={INK_SOFT} at={K9.all} out={K9.divide} />
		<WLine x={96} y={WY[2]} size={42} items={P('c(Cl^{−}) = n ÷ V(aliquot) = 1.850 × 10^{−3} ÷ 0.02500', K9.divide + 6, {t: '= 0.0740 mol/L', color: TEAL}, K9.litre - 8)} />
		<MistakeX x={1100} y={830} text="÷ titre (0.01850 L)" at={K9.not - 6} cross={K9.not + 14} note="the chloride came from the 25.00 mL aliquot" size={32} />
		<AChip x={520} y={346} text="c(Cl^{−}) = 0.0740 mol/L" size={40} color={TEAL} hand={false} at={K9.litre + 14} />
	</Overlay>
);

// ---------- 10. Stage 3: grams per litre ----------
const K10 = cues(sc('stage-3-grams'), {grams: 'For grams per', multiply: 'multiply by the', molar: 'molar mass of', r3545: 'thirty five point', about: "That's about", litre: 'chloride per litre', seawater: 'Seawater has', nineteen: 'roughly nineteen', salty: 'lightly salty', sea: 'meets the sea'});
export const SceneStage3: React.FC = () => (
	<Overlay>
		<Board gAt={[-100, -100, -100, K10.molar]} lit={[undefined, undefined, undefined, [K10.r3545, K10.litre]]} n={4} />
		<DimG at={0} to={0.4}>
			<WLine x={96} y={WY[0]} size={42} items={P('n(Ag^{+}) = c × V', -100, '= 0.1000 × 0.01850', -100, {t: '= ' + R1, color: NAVY}, -100)} />
			<WLine x={96} y={WY[1]} size={42} items={P('1 : 1, so n(Cl^{−}) =', -100, {t: R1, color: NAVY}, -100)} />
			<WLine x={96} y={WY[2]} size={42} items={P('c(Cl^{−}) = n ÷ V(aliquot) = 1.850 × 10^{−3} ÷ 0.02500', -100, {t: '= 0.0740 mol/L', color: TEAL}, -100)} />
		</DimG>
		<AChip x={520} y={346} text="c(Cl^{−}) = 0.0740 mol/L" size={40} color={TEAL} hand={false} at={-100} />
		<WLine x={96} y={WY[3]} size={42} items={P('mass per litre = 0.0740 × 35.45', K10.multiply, {t: '= 2.62 g/L', color: TEAL}, K10.litre - 8)} />
		<AChip x={520} y={430} text="2.62 g/L" size={40} color={TEAL} hand={false} at={K10.litre + 10} />
		<CompareBars x={96} y={930} w={1000} max={19} at={K10.seawater} rows={[{label: 'this sample: 2.62 g/L', v: 2.62, color: TEAL}, {label: 'seawater: about 19 g/L', v: 19, color: '#7f9cc8'}]} />
		<PlateAt p={BOTTLE} x={1560} y={860} h={150} at={K10.sea - 10} />
		<Note x={1560} y={1050} text="estuary: lightly salty" size={30} color={INK} at={K10.salty} />
		{void K10.grams}{void K10.about}{void K10.nineteen}
	</Overlay>
);

// ---------- 11. Memory aid ----------
const K11 = cues(sc('memory-aid'), {short: 'the short version', white: 'White while chloride', stop: 'and stop at', keep: 'Keep it near', then: 'Then titre', moles: 'moles', ratio: 'ratio', divide: 'and divide', and: 'And the one', two: 'The two to', answer: 'of the answer'});
const STEPS = (k: typeof K11) => [{t: 'titre', at: k.then}, {t: 'moles', at: k.moles}, {t: 'ratio', at: k.ratio}, {t: '÷ aliquot', at: k.divide}];
export const SceneAid: React.FC = () => {
	const xs = [380, 690, 1000, 1310];
	return (
		<Overlay>
			<DimG at={K11.then} to={0.55}>
				<Note x={960} y={250} text="White while Cl^{−} lasts; stop at the first lasting red-brown." size={56} color={TEAL} anchor="middle" at={K11.white} />
				<PairAt a={MOHR.white} b={MOHR.end} x={890} y={300} h={220} at={K11.white} swap={K11.stop + 10} />
				<AChip x={960} y={560} text="near neutral: about pH 6.5 to 10" size={34} color={INK} hand={false} anchor="middle" at={K11.keep} />
			</DimG>
			<DimG at={K11.and} to={0.55}>
				{STEPS(K11).map((s, i) => (
					<g key={s.t}>
						<AChip x={xs[i]} y={700} text={s.t} size={44} color={i === 3 ? TEAL : NAVY} hand={false} at={s.at} />
						{i < 3 ? <Arrow x1={xs[i] + mw(s.t, 44, false, 700) + 80} y1={736} x2={xs[i + 1] - 20} y2={736} at={STEPS(K11)[i + 1].at - 4} color={INK_SOFT} width={5} /> : null}
					</g>
				))}
			</DimG>
			<AChip x={960} y={880} text="Ag^{+} : Cl^{−} = 1 : 1 (the 2 : 1 is the indicator's)" size={42} color={TEAL} hand={false} anchor="middle" at={K11.and} />
			{void K11.short}{void K11.two}{void K11.answer}{void INK}{void Fade}{void OpGlow}
		</Overlay>
	);
};
