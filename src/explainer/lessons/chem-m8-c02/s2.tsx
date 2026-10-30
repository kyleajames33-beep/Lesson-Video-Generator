// M8 C02 scenes 7 to 11: the calculation board (task line, equation strip with its 1 : 1 chip, grouped givens and a
// separate molar-mass card fixed at the top; one working line per stage below, earlier lines dimmed with their results
// kept); mass and moles; sulfate and percentage (the crossed precipitate-mass chip); from mass to concentration (the
// sample given swaps to a volume); the two-way error board; the memory aid.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {prog} from '../../kit';
import {FUNNEL, Heading, NB, OVEN, sc} from './common';
import {AChip, Arrow, DimG, EqLine, Fade, GCard, INK, INK_SOFT, KeptChip, MistakeX, NAVY, Note, Overlay, P, PicF, ReqChip, Sx, TEAL, TaskLine, UNK, WLine, eWidth, eq, mw, vis} from './parts';

const GREYX = '#9a948a';
// ---------- the board ----------
export const TASK = 'Find the % of sulfate in the sample';
const EQB = (at: number) => eq(['Ba^{2+}(aq)', '+', 'SO_4^{2−}(aq)', '->', 'BaSO_4(s)'], at);
const ES = 46, EY = 290;
const GX = 1040, GY = 170, GW = 820;
const G_SAMPLE = `sample: 0.500${NB}g`, G_VOL = `sample: 250.0${NB}mL = 0.2500${NB}L`;
const GL = [`watch glass tared: filter paper 0.905${NB}g`, `paper + dry BaSO_4 1.255${NB}g (constant mass)`];
const R1 = `= 1.50 × 10^{−3}${NB}mol`;
const WY = [690, 780, 870, 960];
const Board: React.FC<{gAt?: number[]; taskAt?: number; eqAt?: number; mAt?: number; ratioPulse?: number; lit?: ([number, number] | undefined)[]; swap?: number; mLit?: [number, number]; task?: string}> = ({task = TASK, gAt = [-100, -100, -100], taskAt = -100, eqAt = -100, mAt = -100, ratioPulse, lit = [], swap, mLit}) => {
	const f = useCurrentFrame();
	const e = EQB(eqAt);
	const samp = swap !== undefined && f >= swap ? G_VOL : G_SAMPLE;
	return (
		<>
			<TaskLine text={task} at={taskAt} />
			<EqLine items={e} x={96} y={EY} size={ES} />
			<KeptChip x={96 + eWidth(e, ES) + 40} y={EY - 44} text="1 : 1" at={eqAt + 10} color={TEAL} size={36} pulse={ratioPulse} />
			<GCard x={GX} y={GY} w={GW} size={29} lh={58} at={gAt[0] - 6} lines={[{t: samp, at: gAt[0], lit: swap !== undefined ? [swap, swap + 60] : lit[0]}, {t: GL[0], at: gAt[1], lit: lit[1]}, {t: GL[1], at: gAt[2], lit: lit[2]}]} />
			<GCard x={GX} y={GY + 290} w={GW} size={29} lh={58} title="molar masses" at={mAt - 6} lines={[{t: `M(BaSO_4) = 233.39, M(SO_4^{2−}) = 96.06${NB}g/mol`, at: mAt, lit: mLit}]} />
		</>
	);
};

// ---------- 7. Worked example: mass and moles ----------
const K7 = cues(sc('worked-mass-moles'), {use: "Let's use it", sample: 'A point five', data: 'gives this data', find: 'Find the percentage', first: 'First, the mass', diff: 'by difference', paper: 'The paper and', minus: 'minus the paper', gives: 'gives point three', sulfate: 'barium sulfate', now: 'Now turn', divide: 'Divide by', molar: "barium sulfate's molar", r233: 'two hundred and', thats: "That's one point", moles: 'minus three moles'});
export const SceneMoles: React.FC = () => (
	<>
		<Overlay>
			<Board taskAt={K7.find} eqAt={K7.data + 10} gAt={[K7.sample, K7.data, K7.data + 10]} mAt={K7.data + 20} lit={[undefined, [K7.minus, K7.now], [K7.paper, K7.now]]} mLit={[K7.molar, K7.moles]} />
			<Note x={96} y={WY[0] - 64} text="mass by difference" size={30} color={INK_SOFT} at={K7.diff} out={K7.now} />
			<WLine x={96} y={WY[0]} size={42} dim={K7.now} dimTo={0.4} items={P(`m(BaSO_4) = 1.255 − 0.905`, K7.paper, {t: `= 0.350${NB}g`, color: TEAL}, K7.sulfate)} />
			<WLine x={96} y={WY[1]} size={42} items={P(`n(BaSO_4) = m ÷ M = 0.350 ÷ 233.39`, K7.divide, {t: R1, color: TEAL}, K7.moles)} />
			{void K7.use}{void K7.first}{void K7.gives}{void K7.r233}{void K7.thats}
		</Overlay>
	</>
);

// ---------- 8. Worked example: sulfate and percentage ----------
const K8 = cues(sc('worked-percentage'), {eq: 'The equation shows', one: 'one sulfate in', moles: 'moles of sulfate', multiply: 'Multiply by', r9606: 'ninety six point', p144: 'point one four four', finally: 'Finally, divide', divide: 'divide by the', percent: 'eight percent', careful: 'Careful', sulfate: "the sulfate's mass", not: "not the precipitate's"});
const Kept: React.FC = () => (
	<g opacity={0.5}>
		<WLine x={96} y={620} size={36} items={P(`m(BaSO_4) = 0.350${NB}g;  n(BaSO_4) = 1.50 × 10^{−3}${NB}mol`, -100)} />
	</g>
);
export const ScenePercent: React.FC = () => (
	<Overlay>
		<Board ratioPulse={K8.one} mLit={[K8.r9606 - 10, K8.p144 + 20]} />
		<Kept />
		<WLine x={96} y={WY[0] + 20} size={42} dim={K8.multiply} dimTo={0.45} items={P('1 : 1, so n(SO_4^{2−})', K8.moles - 10, {t: R1, color: TEAL}, K8.moles + 6)} />
		<WLine x={96} y={WY[1] + 20} size={42} dim={K8.divide} dimTo={0.45} items={P(`m(SO_4^{2−}) = 1.50 × 10^{−3} × 96.06`, K8.multiply, {t: `= 0.144${NB}g`, color: TEAL}, K8.p144)} />
		<WLine x={96} y={WY[2] + 20} size={42} items={P(`% = 0.144 ÷ 0.500 × 100`, K8.divide, {t: '= 28.8%', color: TEAL}, K8.percent - 30)} />
		<MistakeX x={1100} y={900} text="0.350 ÷ 0.500 × 100" at={K8.careful} cross={K8.not} note="precipitate, not sulfate" size={34} />
		{void K8.eq}{void K8.finally}{void K8.sulfate}
	</Overlay>
);

// ---------- 9. From mass to concentration ----------
const K9 = cues(sc('mass-to-concentration'), {what: 'What if the', vol: 'a volume of', say: 'Say that same', two: 'two hundred and', dont: "don't change", divide: 'Divide them', p25: 'point two five', six: 'you get six', litre: 'moles per litre', times: 'Times ninety', about: "that's about", mg: 'milligrams per litre'});
export const SceneConc: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<Overlay>
			<Board swap={K9.two} task={f >= K9.vol ? 'Now: the sulfate concentration of the water' : TASK} />
			<Kept />
			<WLine x={96} y={WY[0] + 20} size={42} dim={K9.divide} dimTo={0.5} items={P('1 : 1, so n(SO_4^{2−})', -100, {t: R1, color: TEAL}, -100)} />
			<g opacity={1 - prog(f, 0, 14)}>
				<WLine x={96} y={WY[1] + 20} size={42} items={P(`m(SO_4^{2−}) = 1.50 × 10^{−3} × 96.06`, -100, {t: `= 0.144${NB}g`, color: TEAL}, -100)} />
				<WLine x={96} y={WY[2] + 20} size={42} items={P(`% = 0.144 ÷ 0.500 × 100`, -100, {t: '= 28.8%', color: TEAL}, -100)} />
			</g>
			<Note x={96} y={WY[1] - 30} text="same moles of sulfate" size={28} color={INK_SOFT} at={K9.dont} out={K9.divide + 20} />
			<WLine x={96} y={WY[1] + 20} size={42} dim={K9.times} dimTo={0.5} items={P(`c(SO_4^{2−}) = 1.50 × 10^{−3} ÷ 0.2500`, K9.divide, {t: `= 6.00 × 10^{−3}${NB}mol/L`, color: TEAL}, K9.litre)} />
			<WLine x={96} y={WY[2] + 20} size={42} items={P(`× 96.06 = 0.576${NB}g/L`, K9.times, {t: `= 576${NB}mg/L`, color: TEAL}, K9.mg - 10)} />
			<AChip x={1400} y={WY[1] - 16} text="c01: c = n ÷ V" size={28} color={GREYX} hand={false} at={K9.divide + 10} />
			{void K9.what}{void K9.vol}{void K9.say}{void K9.p25}{void K9.six}{void K9.about}{void vis}
		</Overlay>
	);
};

// ---------- 10. What pushes the answer wrong ----------
const K10 = cues(sc('errors'), {bal: 'The balance gives', wrong: 'the wrong way', adds: 'Anything that adds', high: 'too high', damp: 'a damp solid', imp: 'impurities dried', loses: 'Anything that loses', low: 'too low', crystals: 'crystals through', left: 'sulfate left', repeat: 'And repeating', avg: 'Averaging can', stays: 'stays in the', average: 'the average'});
export const SceneErrors: React.FC = () => {
	const f = useCurrentFrame();
	const LX = 140, RX = 1000, HY = 260;
	return (
		<>
			<Heading text="What pushes the answer wrong" at={4} size={56} />
			<Overlay>
				<Note x={LX} y={HY + 30} text="precise balance, but the method can push it the wrong way" size={28} color={INK_SOFT} hand={false} at={K10.wrong} out={K10.adds} />
				<DimG at={K10.loses} to={0.4} undim={K10.repeat}>
					<Note x={LX} y={HY + 100} text="mass ↑ → answer ↑" size={50} color={UNK} at={K10.adds} />
					<AChip x={LX} y={HY + 160} text="damp solid" size={36} color={UNK} hand={false} at={K10.damp} />
					<AChip x={LX} y={HY + 250} text="not washed: impurities" size={36} color={UNK} hand={false} at={K10.imp} />
					<PicF p={OVEN} x={LX + 560} y={HY + 130} h={110} o={vis(f, K10.damp, undefined, 12)} />
					<PicF p={FUNNEL} x={LX + 640} y={HY + 230} h={120} o={vis(f, K10.imp, undefined, 12)} />
				</DimG>
				<DimG at={K10.repeat} to={0.5}>
					<Note x={RX} y={HY + 100} text="mass ↓ → answer ↓" size={50} color={NAVY} at={K10.loses} />
					<AChip x={RX} y={HY + 160} text="torn filter paper" size={36} color={NAVY} hand={false} at={K10.crystals} />
					<AChip x={RX} y={HY + 250} text="sulfate left dissolved" size={36} color={NAVY} hand={false} at={K10.left} />
				</DimG>
				<line x1={960} x2={960} y1={HY + 60} y2={HY + 330} stroke="rgba(60,45,20,0.2)" strokeWidth={3} opacity={prog(f, K10.loses, 12)} />
				<AChip x={LX} y={HY + 420} text="repeat the same faulty method → same error in the average" size={38} color={INK} hand={false} at={K10.repeat} />
				<Note x={LX} y={HY + 540} text="averaging smooths random scatter only" size={30} color={INK_SOFT} at={K10.avg} />
				<KeptChip x={LX} y={HY + 600} text="repeats don't remove a bias" at={K10.average} color={UNK} size={36} />
				{void K10.bal}{void K10.high}{void K10.low}{void K10.stays}{void Arrow}{void ReqChip}{void Sx}{void Fade}{void INK}
			</Overlay>
		</>
	);
};

// ---------- 11. Memory aid ----------
const K11 = cues(sc('memory-aid'), {two: 'two lines', chain: 'the chain', mass: 'precipitate mass', moles: 'to moles', ratio: 'formula ratio', ion: 'the ion you', second: 'Second, the error', wet: 'too wet', lost: 'lost reads', always: 'always weigh'});
export const SceneAid: React.FC = () => {
	const steps = [{t: 'mass', at: K11.mass}, {t: 'moles', at: K11.moles}, {t: 'ratio', at: K11.ratio}, {t: 'target', at: K11.ion}];
	const xs = [300, 640, 980, 1320];
	return (
		<>
			<Heading text="Two lines to keep" at={4} size={60} />
			<Overlay>
				<DimG at={K11.second} to={0.55}>
					{steps.map((s, i) => (
						<g key={s.t}>
							<AChip x={xs[i]} y={300} text={s.t} size={52} color={i === 3 ? TEAL : NAVY} hand at={s.at} />
							{i < 3 ? <Arrow x1={xs[i] + mw(s.t, 52, true, 700) + 70} y1={340} x2={xs[i + 1] - 16} y2={340} at={steps[i + 1].at - 4} color={INK_SOFT} width={5} /> : null}
						</g>
					))}
				</DimG>
				<Note x={960} y={600} text="Too wet reads high;" size={66} color={UNK} anchor="middle" at={K11.wet} />
				<Note x={960} y={690} text="lost reads low." size={66} color={NAVY} anchor="middle" at={K11.lost} />
				<AChip x={960} y={820} text="weigh at constant mass (and wash first)" size={40} color={TEAL} hand={false} anchor="middle" at={K11.always} />
				{void K11.two}{void K11.chain}
			</Overlay>
		</>
	);
};
