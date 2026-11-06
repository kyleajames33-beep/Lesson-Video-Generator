// M8 G03 scenes 1 to 5: the hook (build, read, classify, each with its painted case), question 1 (standing up quickly)
// as the full worded card with the countdown, the loop built slot by slot (painted zooms of the aortic arch, the
// medulla and the heart, nerve impulses, narrowing arterioles, the minus), one link cut with the blood pressure trace,
// and the crossed "response: the heart beats faster" mistake.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {
	AnsRows, AMBER, AMBER_INK, AnsBox, Arrow, Arteriole, Badge, BLUE, BPGlyph, BPRing, Chip, DrawPath, EDGE, GTag, HscTag, INK, INK_SOFT, LoopRing, Mistake, Pause, Pic, PicH, PicPair, Q1Col, Q1Full, RED_BP, Ring,
	RingArc, SignalPulse, Svg, Sx, T, TEAL, Title, arcPt, prog, pulse, q1Marks, slotPt, smooth,
} from './parts';
import {PL} from './assets';
import {K, hold} from './common';

// ---------- 1. hook ----------
const KH = K('hook', {build: 'Build', read: 'read', pos: 'positive', three: 'three HSC-style questions'});
const HookCard: React.FC<{x: number; at: number; n: string; verb: string; color: string; children: React.ReactNode}> = ({x, at, n, verb, color, children}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 14);
	const nb = prog(f, KH.three + (Number(n) - 1) * 8, 12);
	return (
		<g>
			<rect x={x} y={160} width={548} height={800} rx={26} fill="#fffdf8" stroke={p > 0.5 ? color : EDGE} strokeWidth={p > 0.5 ? 5 : 3} />
			<g opacity={0.42 + 0.58 * p}>
				<Sx x={x + 30} y={238} text={verb} size={58} color={color} hand at={-1000} />
				{children}
			</g>
			{nb > 0.01 ? <g opacity={nb}><circle cx={x + 488} cy={218} r={40} fill={color} /><Sx x={x + 488} y={232} text={`Q${n}`} size={38} color="#fffdf8" anchor="middle" weight={800} at={-1000} /></g> : null}
		</g>
	);
};
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const ax = 686 + 70, ay = 880;
	return (
		<Svg>
			<Title text="Build it, read it, classify it" />
			<HookCard x={96} at={KH.build} n="1" verb="Build it" color={TEAL}>
				<PicH p={PL.heart} cx={250} cy={440} h={300} />
				<Pic p={PL.brain} cx={480} cy={420} w={210} />
				<Sx x={370} y={628} text="blood pressure on standing" size={34} color={INK} anchor="middle" hand at={-1000} />
				<LoopRing g={{cx: 370, cy: 790, R: 110, r: 28}} at={-1000} lit={[KH.build, KH.build + 6, KH.build + 12, KH.build + 18, KH.build + 24]} arcColor={TEAL} />
			</HookCard>
			<HookCard x={686} at={KH.read} n="2" verb="Read it" color={AMBER_INK}>
				<Pic p={PL.pancreas} cx={960} cy={420} w={470} />
				<Sx x={960} y={628} text="glucose and insulin after a meal" size={34} color={INK} anchor="middle" hand at={-1000} />
				<path d={`M${ax},${ay - 200} L${ax},${ay} L${ax + 400},${ay} L${ax + 400},${ay - 200}`} fill="none" stroke={INK} strokeWidth={4} />
				<DrawPath d={`M${ax + 10},${ay - 70} C${ax + 60},${ay - 210} ${ax + 120},${ay - 170} ${ax + 200},${ay - 90} S${ax + 330},${ay - 60} ${ax + 390},${ay - 72}`} at={KH.read + 4} dur={36} color={TEAL} width={6} />
				<DrawPath d={`M${ax + 10},${ay - 20} C${ax + 90},${ay - 30} ${ax + 120},${ay - 190} ${ax + 190},${ay - 140} S${ax + 320},${ay - 20} ${ax + 390},${ay - 22}`} at={KH.read + 16} dur={36} color={AMBER_INK} width={6} dash="12 7" />
			</HookCard>
			<HookCard x={1276} at={KH.pos} n="3" verb="Classify it" color={BLUE}>
				<PicPair a={PL.unripe} b={PL.ripe} cx={1550} cy={420} w={420} at={KH.pos + 10} />
				<Sx x={1550} y={628} text="negative or positive feedback?" size={34} color={INK} anchor="middle" hand at={-1000} />
				{[['−', TEAL, 1400], ['+', AMBER_INK, 1700]].map(([s, c, x]) => (
					<g key={s as string}>
						<path d={`M${(x as number) - 60},${830} C${(x as number) - 60},${740} ${(x as number) + 60},${740} ${(x as number) + 60},${810}`} fill="none" stroke={c as string} strokeWidth={5} />
						<path d={`M${(x as number) + 46},${796} L${(x as number) + 60},${814} L${(x as number) + 74},${796}`} fill="none" stroke={c as string} strokeWidth={5} strokeLinecap="round" />
						<circle cx={x as number} cy={830} r={36} fill="#fffdf8" stroke={c as string} strokeWidth={5} />
						<Sx x={x as number} y={852} text={s as string} size={62} color={c as string} anchor="middle" weight={900} at={-1000} />
					</g>
				))}
				<Sx x={1550} y={850} text="?" size={80} color={INK} anchor="middle" weight={900} at={KH.pos} />
			</HookCard>
			<Chip x={960} y={986} text="HSC-style questions, written for HSCScience" size={32} color={INK_SOFT} ink={INK} anchor="middle" at={KH.three} />
			{void f}{void AMBER}
		</Svg>
	);
};

// ---------- 2a. question 1 ----------
const KQ1 = K('q1-question', {pause: 'Pause here'});
export const SceneQ1: React.FC = () => (
	<Svg>
		<Title text="Question 1: standing up quickly" />
		<HscTag />
		<Q1Full />
		<Pic p={PL.brain} cx={1484} cy={300} w={290} />
		<PicH p={PL.heart} cx={1736} cy={306} h={262} />
		<Sx x={1484} y={480} text="brain" size={32} color={INK} anchor="middle" hand at={-1000} />
		<Sx x={1736} y={480} text="heart" size={32} color={INK} anchor="middle" hand at={-1000} />
		<rect x={1340} y={512} width={484} height={276} rx={16} fill="#fffdf8" stroke={EDGE} strokeWidth={2.5} strokeDasharray="10 8" />
		<Sx x={1360} y={550} text="your loop" size={28} color={INK_SOFT} weight={700} at={-1000} />
		<LoopRing g={{cx: 1600, cy: 656, R: 96, r: 26}} at={-1000} />
		<Pause h={hold('q1-question')} at={KQ1.pause} tx={1340} ty={862} cx={1750} cy={958} r={46} />
	</Svg>
);

// ---------- 2b. build the loop ----------
const KB = K('q1-build', {stim: 'stimulus', rec: 'receptors', cc: 'control centre', eff: 'effectors', resp: 'response', faster: 'faster, stronger', narrow: 'narrower arterioles', rises: 'rises back', close: 'close the loop', minus: 'minus', opp: 'opposes the fall'});
const M_B = q1Marks([
	{phrase: 'blood pressure in the upper body falls', at: KB.stim + 4},
	{phrase: 'Baroreceptors (stretch receptors', at: KB.rec + 4},
	{phrase: 'cardiovascular centre in the medulla oblongata', at: KB.cc + 4},
	{phrase: 'to the heart, which beats faster and more strongly', at: KB.eff + 4},
	{phrase: 'arterioles, which narrow', at: KB.eff + 30},
]);
export const SceneQ1Build: React.FC = () => {
	const f = useCurrentFrame();
	const gap = (fr: number) => 46 - 24 * smooth(prog(fr, KB.narrow, 40));
	return (
		<Svg>
			<Title text="Build the loop in order" />
			<HscTag />
			<Badge text="Build a loop" />
			<Q1Col marks={M_B} />
			<GTag x={770} y={168} text="b01: Some Really Cool Elephants Run" size={30} />
			<BPRing lit={[KB.stim, KB.rec, KB.cc, KB.eff, KB.rises]} minus={KB.minus} stimAt={KB.stim} respAt={KB.rises} respQ={[KB.resp, KB.rises]} beat={KB.faster} />
			<SignalPulse a={slotPt(1)} b={slotPt(2)} at={KB.cc} every={22} dur={26} bow={34} color={AMBER} track={false} />
			<SignalPulse a={slotPt(2)} b={slotPt(3)} at={KB.eff} every={22} dur={26} bow={30} color={AMBER} track={false} />
			<GTag x={1290} y={168} text="nerve impulses: fast" size={30} at={KB.eff} />
			<Arteriole x={790} y={1000} w={190} gap={gap} at={KB.narrow - 10} />
			<Sx x={1000} y={1012} text="arterioles narrow" size={34} color={INK} hand at={KB.narrow} />
			<AnsRows x={1352} y={206} w={488} h={836} label="answer (a)" size={44} gap={6} rows={[
				{p: '1 stimulus', t: 'blood pressure falls', at: KB.stim + 6},
				{p: '2 receptors', t: 'baroreceptors (aorta, carotid arteries)', at: KB.rec + 6},
				{p: '3 control centre', t: 'cardiovascular centre, medulla', at: KB.cc + 10},
				{p: '4 effectors', t: 'heart and arterioles', at: KB.eff + 6},
				{p: '5 response', t: 'blood pressure rises back towards normal', at: KB.rises, color: TEAL},
				{p: 'arrow back to the stimulus', t: 'minus: the response opposes the fall', at: KB.minus + 10, color: TEAL},
			]} />
			{void f}{void KB.close}
		</Svg>
	);
};

// ---------- 2c. cut one link ----------
const KP = K('q1-predict', {nerves: 'baroreceptor nerves', signal: 'no signal', respond: "don't respond", low: 'stays low', less: 'Less blood', dizzy: 'dizzy or faint', brk: 'Break any link', cant: "loop can't correct"});
const M_P = q1Marks([{phrase: 'nerves from the baroreceptors were damaged', at: KP.nerves + 4}]);
/** Blood pressure against time: steady, a fall on standing, then the corrected path (grey, dashed) and the
 *  uncorrected path (red) that stays low. */
const BPTrace: React.FC<{x: number; y: number; w: number; h: number; low: number}> = ({x, y, w, h, low}) => {
	const f = useCurrentFrame();
	const norm = y + h * 0.3, dropX = x + w * 0.3;
	const fell = y + h * 0.75;
	const k = smooth(prog(f, low - 30, 40));
	return (
		<g>
			<rect x={x} y={y} width={w} height={h} rx={10} fill="#fffdf8" stroke={EDGE} strokeWidth={2} />
			<path d={`M${x + 20},${y + 14} L${x + 20},${y + h - 20} L${x + w - 14},${y + h - 20}`} fill="none" stroke={INK} strokeWidth={3.5} />
			<g transform={`translate(${x + 4},${y + h / 2}) rotate(-90)`}><Sx x={0} y={0} text="blood pressure" size={26} color={INK} anchor="middle" weight={700} at={-1000} /></g>
			<Sx x={x + w - 20} y={y + h + 12} text="time" size={26} color={INK} anchor="end" weight={700} at={-1000} />
			<line x1={x + 24} x2={x + w - 20} y1={norm} y2={norm} stroke={INK_SOFT} strokeWidth={2} strokeDasharray="6 6" />
			<Sx x={x + 30} y={norm - 12} text="usual" size={26} color={INK} hand weight={700} at={-1000} />
			<path d={`M${x + 24},${norm} L${dropX},${norm} L${dropX + 30},${fell}`} fill="none" stroke={INK} strokeWidth={5} />
			<line x1={dropX} x2={dropX} y1={y + 14} y2={y + h - 20} stroke={AMBER} strokeWidth={3} strokeDasharray="5 5" />
			<Sx x={dropX + 8} y={y + 40} text="stand up" size={28} color={AMBER_INK} hand weight={700} at={-1000} />
			<path d={`M${dropX + 30},${fell} C${dropX + 80},${fell} ${dropX + 90},${norm} ${x + w - 24},${norm}`} fill="none" stroke="#8d857a" strokeWidth={4} strokeDasharray="10 8" />
			{k > 0.01 ? <path d={`M${dropX + 30},${fell} L${dropX + 30 + (x + w - 54 - dropX) * k},${fell}`} fill="none" stroke={RED_BP} strokeWidth={6} /> : null}
			<Sx x={x + w - 26} y={fell - 16} text="no correction" size={34} color={RED_BP} anchor="end" hand at={low} />
		</g>
	);
};
export const SceneQ1Predict: React.FC = () => {
	const f = useCurrentFrame();
	const cut = arcPt(1, 0.5);
	return (
		<Svg>
			<Title text="Cut one link" />
			<HscTag />
			<Badge text="Build a loop" />
			<Q1Col marks={M_P} />
			<BPRing lit={[-1000, -1000, -1000, -1000, -1000]} minus={-1000} cut={KP.nerves + 10} dim={[[2, KP.signal], [3, KP.signal + 10], [4, KP.low]]} />
			{f < KP.nerves + 10 ? <SignalPulse a={slotPt(1)} b={slotPt(2)} at={-1000} every={22} dur={26} bow={34} color={AMBER} track={false} /> : <SignalPulse a={slotPt(1)} b={cut} at={KP.nerves + 10} every={24} dur={16} bow={10} color={AMBER} track={false} />}
			<BPTrace x={1380} y={180} w={460} h={300} low={KP.low} />
			<AnsRows x={1352} y={500} w={488} h={542} label="answer (b)" size={44} gap={8} rows={[
				{p: 'prediction', t: 'Blood pressure would stay low after standing.', at: KP.low + 12},
				{p: 'justification', t: 'The medulla gets no signal of the fall, so the heart and arterioles do not respond.', at: KP.cant - 30},
			]} />
			<GTag x={760} y={994} text="less blood to the brain: dizzy or faint" size={30} at={KP.less} />
			<Chip x={760} y={160} text="no signal reaches the medulla" size={34} color={RED_BP} at={KP.signal} />
			{void KP.respond}{void KP.dizzy}{void KP.brk}
		</Svg>
	);
};

// ---------- 2d. the classic mistake ----------
const KM = K('q1-mistake', {classic: 'classic mistake', effector: "That's what the effector", change: 'change in the regulated', rising: 'rising back'});
export const SceneQ1Mistake: React.FC = () => {
	const r4 = slotPt(4), r3 = slotPt(3);
	return (
		<Svg>
			<Title text="The classic mistake" />
			<HscTag />
			<Badge text="Build a loop" />
			<Q1Col />
			<BPRing lit={[-1000, -1000, -1000, -1000, KM.change]} minus={-1000} dim={[[0, -1000], [1, -1000], [2, -1000]]} />
			<Mistake x={770} y={164} text="response: the heart beats faster" size={40} at={-1000} cross={KM.classic + 6} />
			<Arrow a={[960, 240]} b={[r3[0] - 30, r3[1] - 92]} at={KM.effector} color={RED_BP} width={5} bow={0.25} />
			<GTag x={760} y={994} text="the heart beating faster is the effector's action" size={30} at={KM.effector} />
			<Ring cx={r4[0]} cy={r4[1]} rx={100} ry={100} at={KM.change} color={AMBER} />
			<PicH p={PL.heart} cx={1600} cy={360} h={300} />
			<Sx x={1600} y={556} text="effector: the heart" size={36} color={INK} anchor="middle" hand at={-1000} />
			<T x={1380} y={660} w={460} text="The response is the change in the regulated variable:" size={44} color={INK} at={KM.change} />
			<T x={1380} y={920} w={460} text="blood pressure rises back." size={50} color={TEAL} at={KM.rising} />
		</Svg>
	);
};
void pulse;
