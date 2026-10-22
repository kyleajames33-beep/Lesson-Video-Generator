// M6 G04 scenes 3a to 3d: question 2 (the same ammonia, the other way round: HCl and phenolphthalein in the flask,
// ammonia in the burette): the attempt (the burette rig with swapped coded labels); picture the curve this way round
// (drawn point by point: low start, equivalence at 20.8 mL, a short jump to about 7, then the buffer); follow the late
// pink through the formula (the volume block grows on the bottom, the result shrinks); the "bigger titre, bigger
// concentration" mistake crossed beside the two formula tiles.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {cues} from '../../cues';
import {Heading, hold, sc} from './common';
import {Band, CLEAR, Curve, DimG, Fade, GDot, GREYX, INK, INK_SOFT, JumpBracket, KeptChip, MistakeX, NAVY, Note, Overlay, PINK, PauseHold, Rig, RingAt, Sx, TEAL, UNK, WLine, P, gx, gy, lerp, mw, rigFlask, smooth} from './parts';
import type {GG, QBlock} from './parts';
import {Drop} from '../chem-m6-c13/parts';
import {ChainH, ChemBadge, FracTile, HBr, HscTag, IndTable, PCard, qMarksOk} from './board';
import type {QDef} from './board';
import {Checks, PHAxes} from './s1';
import {EQ2, XS2, phQ2} from './curves';

const AMM = '#1f8a7a';
const WX = 760;
const G2: GG = {x: 1210, y: 250, w: 590, h: 400, x0: 0, x1: 30, y0: 0, y1: 12};
const XL2 = 'volume of NH_3 added (mL)';

export const Q2: QDef = {
	size: 30,
	secs: [
		{y: 232, blocks: t => [
			{text: 'A second student titrates the same ammonia solution the other way round.', at: t[0]},
			{text: 'She places 25.00 mL of 0.100 mol/L hydrochloric acid and a few drops of phenolphthalein in a conical flask, then adds the ammonia solution from a burette until the solution first turns faint pink.', at: t[1]},
		] as QBlock[]},
		{y: 680, blocks: t => [
			{text: 'Explain the effect of her choice of indicator on her calculated concentration of the ammonia solution.', at: t[2], weight: 700},
		] as QBlock[]},
	],
	h: 820,
	ans: [{label: '', y: 790 - 30, h: 150}],
};
const Q2M = {pink: 'until the solution first turns faint pink', acid: '25.00 mL of 0.100 mol/L'};
qMarksOk(Q2, Object.values(Q2M));
const IT = {x: 130, y: 450};
const FB = ['phenolphthalein turns pink only after excess NH_3 (buffer,', 'pH < 8.3 at equivalence): titre too large;', 'c = n ÷ V, so c(NH_3) too low'];
const RigL: React.FC<{tx: number; ty: number; bh: number; fh: number; at: number; pulse?: number; size?: number}> = ({tx, ty, bh, fh, at, pulse, size = 28}) => {
	const f = useCurrentFrame();
	const fl = rigFlask(tx, ty, fh);
	const pz = pulse === undefined ? 1 : 1 + 0.12 * Math.max(0, Math.sin(Math.min(1, Math.max(0, (f - pulse) / 30)) * Math.PI));
	return (
		<g>
			<Rig tx={tx} ty={ty} bh={bh} fh={fh} level={() => 8} at={at} />
			<g transform={`translate(${tx - 30},${ty - bh * 0.45}) scale(${pz}) translate(${-(tx - 30)},${-(ty - bh * 0.45)})`}>
				<Sx x={tx - 70} y={ty - bh * 0.45} text="NH_3(aq)" size={size} color={AMM} anchor="end" weight={800} at={at + 10} />
			</g>
			<Sx x={tx} y={fl.y + fl.h + 62} text="HCl + phenolphthalein" size={size * 0.85} color={NAVY} anchor="middle" weight={800} at={at + 16} />
		</g>
	);
};

// ---------- 3a. Question 2 (pause) ----------
const KA = cues(sc('q2-question'), {q: 'Question two', another: 'Another student', twenty: 'twenty five millilitres', explain: 'Explain the effect', pause: 'Pause here to answer'});
export const SceneQ2Question: React.FC = () => {
	const h = hold('q2-question');
	return (
		<>
			<Heading text="Question 2" at={KA.q} size={52} />
			<Overlay>
				<HscTag at={KA.q} />
				<PCard q={Q2} t={[KA.another, KA.twenty, KA.explain]} ansAt={[KA.explain + 20]}>
					<IndTable x={IT.x} y={IT.y} at={KA.twenty + 30} />
				</PCard>
				<RigL tx={1420} ty={470} bh={320} fh={140} at={KA.twenty} />
				<PauseHold h={h} at={KA.pause} x={1180} y={800} cx={1740} cy={880} />
				<Checks hold={h} />
			</Overlay>
		</>
	);
};

const Q2Board: React.FC<{marks?: {phrase: string; at: number}[]; fills?: {i: number; text: string; at: number; size?: number; line?: number}[]; shrinkAt?: number}> = ({marks = [], fills = [], shrinkAt}) => (
	<>
		<HscTag at={-100} />
		<ChemBadge text="Indicator error: which way?" at={shrinkAt === undefined ? -100 : 6} />
		<PCard q={Q2} strip shrinkAt={shrinkAt} marks={marks} fills={fills} ansAt={[-100]}>
			<IndTable x={IT.x} y={IT.y} at={-100} />
		</PCard>
	</>
);

// ---------- 3b. Picture the curve this way round ----------
const KB = cues(sc('q2-picture'), {picture: 'Picture the curve', starts: 'It starts low', one: 'pH one', acidic: 'still acidic', with: "With question one's", v208: 'twenty point eight', jumps: 'pH jumps', seven: 'about seven', then: 'Then the extra', buffer: 'buffer', creeps: 'creeps up'});
export const SceneQ2Picture: React.FC = () => (
	<>
		<Heading text="Question 2: picture the curve" at={4} size={52} />
		<Overlay>
			<Q2Board shrinkAt={0} />
			<RigL tx={WX + 190} ty={540} bh={270} fh={110} at={-100} pulse={KB.picture + 10} size={24} />
			<PHAxes g={G2} at={KB.picture + 10} xLabel={XL2} step={5} />
			<Curve g={G2} fn={phQ2} xs={XS2} color={AMM} at={KB.one} from={0} to={20.5} dur={KB.v208 - KB.one} />
			<Note x={gx(G2, 4)} y={gy(G2, 1.6) - 26} text="excess HCl" size={26} color={GREYX} at={KB.one + 20} out={KB.buffer} />
			<Curve g={G2} fn={phQ2} xs={XS2} color={AMM} at={KB.v208} from={20.5} to={EQ2} dur={14} />
			<GDot g={G2} v={EQ2} p={5.26} at={KB.v208 + 14} color="#d6a21e" r={10} label="equivalence ≈ pH 5" dx={16} dy={10} anchor="start" size={21} />
			<KeptChip x={WX} y={760} text="c(NH_3) = 0.120 mol/L" at={KB.with} color={UNK} size={26} />
			<DimG at={KB.seven} to={0.35}><Sx x={WX} y={860} text="V(eq) = 2.50 × 10^{−3} mol ÷ 0.120 mol/L = 20.8 mL" size={30} color={INK_SOFT} weight={700} at={KB.v208} /></DimG>
			<Curve g={G2} fn={phQ2} xs={XS2} color={AMM} at={KB.seven - 10} from={EQ2} to={21} dur={12} />
			<JumpBracket x={gx(G2, 20.4) - 16} y1={gy(G2, 7.16)} y2={gy(G2, 3.06)} at={KB.seven} text="jump: about 3 to 7" size={22} side="l" />
			<Curve g={G2} fn={phQ2} xs={XS2} color={AMM} at={KB.buffer} from={21} to={30} dur={50} />
			<Note x={WX} y={930} text="excess NH_3 + NH_4^{+}: buffer (C14)" size={30} color={TEAL} at={KB.buffer + 20} />
			<Checks ticks={{0: [KB.v208 + 14]}} />
			{void KB.starts}{void KB.acidic}{void KB.jumps}{void KB.then}{void KB.creeps}{void INK}
		</Overlay>
	</>
);

// ---------- 3c. Follow the titre through the formula ----------
const KC = cues(sc('q2-direction'), {phen: 'Phenolphthalein turns', buffer: 'in that buffer', two: 'two more millilitres', so: 'So her titre', large: 'large', divides: 'She divides', small: 'small', about: 'about zero point one zero eight'});
const PINK8 = 23.14;
export const SceneQ2Direction: React.FC = () => {
	const fills = FB.map((s, k) => ({i: 0, text: s, at: KC.about + 10 + k * 8, size: 24, line: k}));
	return (
		<>
			<Heading text="Question 2: which way does it move?" at={4} size={52} />
			<Overlay>
				<Q2Board marks={[{phrase: Q2M.pink, at: KC.two}, {phrase: Q2M.acid, at: KC.small}]} fills={fills} />
				<PHAxes g={G2} at={-100} xLabel={XL2} step={5} />
				<Curve g={G2} fn={phQ2} xs={XS2} color={AMM} at={-100} dur={1} />
				<DimG at={KC.small} to={0.3}>
					<Band g={G2} lo={8.3} hi={10} cLo={CLEAR} cHi={PINK} at={KC.phen} />
					<Sx x={gx(G2, 0.6)} y={gy(G2, 10) + 28} text="phenolphthalein 8.3 to 10.0" size={22} color={INK} weight={700} at={KC.phen + 10} />
					<Drop g={G2} v={PINK8} p={8.3} at={KC.two} color={PINK} />
					<HBr g={G2} a={EQ2} b={PINK8} p={10.9} up at={KC.two + 6} text="about 2 mL of extra NH_3" size={22} color={INK} dx={40} />
					<Drop g={G2} v={EQ2} p={5.26} at={KC.two} color="#d6a21e" />
				</DimG>
				<ChainH x={WX} y={730} size={28} items={[
					{t: 'late pink', at: KC.large - 10, color: INK_SOFT},
					{t: 'titre ↑', at: KC.large, color: '#6f55a3'},
					{t: 'c(NH_3) ↓', at: KC.small, color: '#b5502b'},
				]} />
				<FracTile x={WX} y={860} at={KC.divides} lhs="c(NH_3) =" top="n(HCl) = 2.50 × 10^{−3} mol" size={28} bot={fr => (prog(fr, KC.small - 10, 30) > 0.5 ? '23.1 mL' : '20.8 mL')} botW={fr => lerp(150, 230, smooth(prog(fr, KC.small - 10, 30)))} res={{t: fr => (prog(fr, KC.small - 10, 30) > 0.5 ? '= 0.108' : '= 0.120'), size: fr => lerp(40, 28, smooth(prog(fr, KC.small - 10, 30))), at: KC.divides + 20}} />
				<Sx x={WX + 760} y={880} text="same moles ÷ bigger volume" size={26} color={TEAL} hand at={KC.small} />
				<Note x={WX} y={970} text="2.50 × 10^{−3} ÷ 0.0231 = 0.108 mol/L (true 0.120)" size={30} color={INK_SOFT} at={KC.about} />
				<Checks ticks={{0: [-100], 1: [KC.small], 2: [KC.about]}} />
				{void KC.buffer}{void KC.so}{void mw}{void RingAt}{void Fade}{void GDot}{void P}{void WLine}{void JumpBracket}
			</Overlay>
		</>
	);
};

// ---------- 3d. The classic mistake ----------
const KD = cues(sc('q2-mistake'), {classic: 'The classic mistake', saying: 'saying a bigger', true: "That's true", here: 'Here the unknown', burette: 'burette', bottom: 'goes on the bottom'});
export const SceneQ2Mistake: React.FC = () => (
	<>
		<Heading text="Question 2: the classic mistake" at={4} size={52} />
		<Overlay>
			<Q2Board fills={FB.map((s, k) => ({i: 0, text: s, at: -100, size: 24, line: k}))} />
			<MistakeX x={WX + 40} y={250} text="titre too large, so c(NH_3) too high" at={4} cross={KD.classic + 20} note="unknown in the burette: c = n ÷ V" size={32} />
			<FracTile x={WX + 40} y={580} at={KD.true} title="unknown in flask" lhs="c =" top="c(titrant) × V(titre)" bot={() => 'V(sample)'} botW={() => 180} color={GREYX} size={28} />
			<FracTile x={WX + 600} y={580} at={KD.burette} title="unknown in burette" lhs="c =" top="n" bot={() => 'V(titre)'} botW={() => 170} size={30} />
			<RingAt cx={WX + 600 + mw('c =', 30, false, 700) + 16 + 85} cy={580 + 8 + 20} rx={110} ry={34} at={KD.bottom} />
			<Sx x={WX + 40} y={820} text="Move the titre, then follow it through the formula." size={40} color={TEAL} hand at={KD.bottom + 20} />
			<Checks ticks={{0: [-100], 1: [-100], 2: [-100]}} />
			{void KD.saying}{void KD.here}{void INK}
		</Overlay>
	</>
);
