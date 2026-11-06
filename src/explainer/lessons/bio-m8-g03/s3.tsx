// M8 G03 scenes 10 to 15: question 3 (three processes) as the full worded card with its plates and the countdown; one
// test for every process (process strips; ethylene cycling and the bananas ripening); the student corrected (glucose
// falls, the response raises it back, a minus); the crossed "positive = goes up" mistake; the decision board and the
// key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {
	INK_SOFT, AMBER_INK, AnsBox, Arrow, Badge, BLUE, BlankLines, CARD, Chip, Decision, DrawPath, EDGE, Framed, GTag, HscTag, INK, LoopRing, Mistake, Pause, Pic, PicH, PicPair, ProcessStrip, Q3Col, QPart, RED_BP, Svg, Sx, T,
	TEAL, Title, mw, prog, pulse, q3Marks,
} from './parts';
import {NotesBoard} from '../bio-m5-g01/board';
import {PL} from './assets';
import {K, Q3_DEM, Q3_P, Q3_Q, Q3_R, hold} from './common';

// ---------- 4a. question 3 ----------
const KQ3 = K('q3-question', {pause: 'Pause here'});
export const SceneQ3: React.FC = () => (
	<Svg>
		<Title text="Question 3: negative or positive?" />
		<HscTag />
		<rect x={96} y={150} width={1210} height={890} rx={22} fill={CARD} stroke={EDGE} strokeWidth={3} />
		<PicH p={PL.plant} cx={214} cy={262} h={180} />
		<Pic p={PL.pancreas} cx={214} cy={428} w={200} />
		<Pic p={PL.unripe} cx={214} cy={600} w={210} />
		<QPart blocks={Q3_P} x={340} y={214} w={940} size={32} />
		<QPart blocks={Q3_Q} x={340} y={366} w={940} size={32} />
		<QPart blocks={Q3_R} x={340} y={556} w={940} size={32} />
		<QPart blocks={Q3_DEM} x={126} y={736} w={1150} size={32} />
		<BlankLines x={1340} y={170} w={484} h={130} label="(a)" />
		<BlankLines x={1340} y={318} w={484} h={470} label="(b)" />
		<Pause h={hold('q3-question')} at={KQ3.pause} tx={1340} ty={862} cx={1750} cy={958} r={46} />
	</Svg>
);

// ---------- 4b. one test for every process ----------
const KI = K('q3-identify', {test: 'Test each process', oppose: 'oppose', streng: 'strengthen it', inP: 'In P', slows: 'slows the loss', opposes: 'That opposes', inR: 'In R', speeds: 'speeds ripening', releases: 'releases more ethylene', strengthens: 'The response strengthens', rpos: 'R is positive', ripe: 'until the fruit'});
const M_I = q3Marks([{phrase: 'rate of water loss from the leaves falls', at: KI.inP + 6}, {phrase: 'ripen faster', at: KI.inR + 20}, {phrase: 'release more ethylene', at: KI.releases}]);
/** "Does the response oppose the change, or strengthen it?" with the two key words lighting on their cues. */
const TestLine: React.FC<{x: number; y: number; oAt: number; sAt: number; size?: number}> = ({x, y, oAt, sAt, size = 46}) => {
	const f = useCurrentFrame();
	const parts: [string, string | null, number][] = [['Does the response ', null, 0], ['oppose', TEAL, oAt], [' the change, or ', null, 0], ['strengthen', AMBER_INK, sAt], [' it?', null, 0]];
	let cx = x;
	return (
		<g>
			{parts.map(([t, c, a], i) => {
				const w = mw(t, size, true, 700);
				const px = cx;
				cx += w;
				const lit = c ? prog(f, a, 12) : 0;
				return (
					<g key={i}>
						{lit > 0.01 ? <rect x={px - 6} y={y - size * 0.9} width={w + 12} height={size * 1.15} rx={10} fill={c as string} opacity={0.18 * lit} /> : null}
						<Sx x={px} y={y} text={t} size={size} color={lit > 0.5 ? (c as string) : INK} hand at={-1000} />
					</g>
				);
			})}
		</g>
	);
};
export const SceneQ3Identify: React.FC = () => (
	<Svg>
		<Title text="One test for every process" />
		<HscTag />
		<Badge text="Negative or positive?" />
		<Q3Col marks={M_I} />
		<TestLine x={770} y={216} oAt={KI.oppose} sAt={KI.streng} />
		<ProcessStrip x={760} y={250} w={1080} h={210} letter="P" plate={<PicH p={PL.plant} cx={870} cy={355} h={186} />} change="water content falls" resp="stomata close, less water lost" sign="−" signAt={KI.opposes} lit={KI.inP} />
		<ProcessStrip x={760} y={476} w={1080} h={210} letter="Q" plate={<Pic p={PL.pancreas} cx={870} cy={581} w={200} />} change="blood glucose falls" resp="glucagon; the liver releases glucose" />
		<GTag x={1500} y={490} text="next scene" size={30} />
		<ProcessStrip x={760} y={702} w={1080} h={210} letter="R" plate={<PicPair a={PL.unripe} b={PL.ripe} cx={870} cy={807} w={200} at={KI.ripe} />} change="ripening, ethylene" resp="more ripening, more ethylene" sign="+" signAt={KI.rpos} lit={KI.inR} cycle={[KI.speeds, KI.rpos + 40]} />
		<Chip x={990} y={862} text="end point: ripe" size={32} color={AMBER_INK} at={KI.ripe + 10} />
		<Framed x={780} y={1006} text="(a) R (ethylene and ripening)" at={KI.rpos} size={44} />
		{void KI.test}{void KI.speeds}{void KI.strengthens}
	</Svg>
);

// ---------- 4c. correct the student ----------
const KE = K('q3-explain', {nowQ: 'Now Q', up: 'up instead', stim: 'stimulus was a fall', resp: 'The response, glucagon', raises: 'raises it back', undoes: 'undoes the change', neg: 'negative feedback', which: 'whichever direction'});
const M_E = q3Marks([{phrase: 'because blood glucose concentration increases', at: KE.up}, {phrase: 'blood glucose concentration falls', at: KE.stim}, {phrase: 'rises back towards its usual level', at: KE.raises}]);
const Mini: React.FC<{x: number; plate: React.ReactNode; text: string; sign: string; color: string}> = ({x, plate, text, sign, color}) => (
	<g opacity={0.8}>
		<rect x={x} y={180} width={530} height={150} rx={18} fill={CARD} stroke={EDGE} strokeWidth={3} />
		{plate}
		<Sx x={x + 150} y={268} text={text} size={40} color={INK} hand at={-1000} />
		<circle cx={x + 470} cy={255} r={36} fill={CARD} stroke={color} strokeWidth={5} />
		<Sx x={x + 470} y={278} text={sign} size={62} color={color} anchor="middle" weight={900} at={-1000} />
	</g>
);
export const SceneQ3Explain: React.FC = () => {
	const f = useCurrentFrame();
	const up = pulse(f, KE.up, 40);
	const neg = prog(f, KE.neg, 14);
	return (
		<Svg>
			<Title text="Correct the student" />
			<HscTag />
			<Badge text="Negative or positive?" />
			<Q3Col marks={M_E} />
			<Mini x={760} plate={<PicH p={PL.plant} cx={820} cy={255} h={124} />} text="P: opposes" sign="−" color={TEAL} />
			<Mini x={1310} plate={<Pic p={PL.ripe} cx={1380} cy={255} w={130} />} text="R: strengthens" sign="+" color={AMBER_INK} />
			<rect x={760} y={350} width={1080} height={392} rx={20} fill="#fffaf0" stroke={BLUE} strokeWidth={4} />
			<circle cx={794} cy={384} r={24} fill={BLUE} /><Sx x={794} y={396} text="Q" size={34} color={CARD} anchor="middle" weight={900} at={-1000} />
			<Pic p={PL.pancreas} cx={920} cy={470} w={230} />
			<Pic p={PL.liver} cx={920} cy={640} w={220} />
			<Arrow a={[920, 520]} b={[920, 572]} at={KE.resp} color={AMBER_INK} width={5} />
			<Sx x={940} y={556} text="glucagon" size={30} color={AMBER_INK} hand at={KE.resp} />
			<Chip x={1440} y={364} text="the student's reason: up" size={32} color="#8d857a" ink={INK} at={KE.up} glow={up} />
			<line x1={1070} x2={1820} y1={470} y2={470} stroke={INK_SOFT} strokeWidth={2.5} strokeDasharray="8 8" />
			<Sx x={1820} y={456} text="usual level" size={30} color={INK} anchor="end" hand at={-1000} />
			<path d="M1070,470 L1190,470 L1320,610 L1400,610 L1540,482 L1660,472" fill="none" stroke={INK} strokeWidth={6} strokeLinejoin="round" />
			<Sx x={1076} y={436} text="blood glucose" size={30} color={INK} hand at={-1000} />
			<g opacity={prog(f, KE.stim, 12)}><path d="M1190,470 L1320,610" stroke={RED_BP} strokeWidth={12} strokeLinecap="round" opacity={0.45} /></g>
			<T x={1074} y={604} w={196} text="stimulus: glucose falls" size={40} color={RED_BP} at={KE.stim} />
			<g opacity={prog(f, KE.raises, 12)}><path d="M1400,610 L1540,482" stroke={TEAL} strokeWidth={12} strokeLinecap="round" opacity={0.45} /></g>
			<T x={1566} y={556} w={260} text="response: glucose rises back" size={40} color={TEAL} at={KE.raises} />
			{neg > 0.01 ? <g opacity={neg}>
				<DrawPath d="M1500,640 Q1370,724 1240,640" at={KE.neg} dur={18} color={TEAL} width={5} />
				<path d="M1258,632 L1238,640 L1256,656" fill="none" stroke={TEAL} strokeWidth={5} strokeLinecap="round" />
				<circle cx={1370} cy={684} r={28} fill={CARD} stroke={TEAL} strokeWidth={5} />
				<Sx x={1370} y={703} text="−" size={52} color={TEAL} anchor="middle" weight={900} at={-1000} />
				<Sx x={1410} y={724} text="opposes the fall" size={32} color={TEAL} hand at={-1000} />
			</g> : null}
			<AnsBox x={760} y={756} w={1080} h={288} label="answer (b)" hint="Compare the response with the stimulus, not just the direction the variable moved." lines={[
				{t: 'The stimulus in Q is a fall in blood glucose.', at: KE.stim + 10},
				{t: 'The response (glucagon; the liver releases glucose) raises glucose back, opposing the fall.', at: KE.raises + 6},
				{t: 'So Q is negative feedback: the direction the variable moves does not decide the type.', at: KE.which},
			]} />
			{void KE.nowQ}{void KE.undoes}
		</Svg>
	);
};

// ---------- 4d. the classic mistake ----------
const KM3 = K('q3-mistake', {classic: 'classic mistake', neg: 'Negative means', opp: 'opposes the change', pos: 'Positive means', adds: 'adds to it'});
const Sign: React.FC<{x: number; y: number; s: string; color: string; p: number}> = ({x, y, s, color, p}) => (
	<g transform={`translate(${x},${y}) scale(${1 + 0.3 * p})`}>
		<circle r={52} fill={CARD} stroke={color} strokeWidth={6} />
		<Sx x={0} y={32} text={s} size={92} color={color} anchor="middle" weight={900} at={-1000} />
	</g>
);
export const SceneQ3Mistake: React.FC = () => {
	const f = useCurrentFrame();
	const cyc = (f % 60) / 60;
	return (
		<Svg>
			<Title text="The classic mistake" />
			<HscTag />
			<Badge text="Negative or positive?" />
			<Q3Col />
			<Mistake x={770} y={168} text="positive = goes up, negative = goes down" size={42} at={-1000} cross={KM3.classic + 6} />
			<rect x={770} y={300} width={520} height={620} rx={20} fill={CARD} stroke={TEAL} strokeWidth={4} />
			<Sx x={796} y={350} text="Q (glucagon)" size={38} color={INK} hand at={-1000} />
			<Pic p={PL.pancreas} cx={920} cy={440} w={230} />
			<Pic p={PL.liver} cx={920} cy={600} w={220} />
			<Arrow a={[1110, 380]} b={[1110, 520]} color={RED_BP} width={7} head={22} />
			<Arrow a={[1200, 520]} b={[1200, 380]} color={TEAL} width={7} head={22} />
			<Sign x={1160} y={630} s="−" color={TEAL} p={pulse(f, KM3.opp, 40)} />
			<T x={796} y={770} w={470} text="Negative: the response opposes the change." size={42} color={TEAL} at={KM3.neg} />
			<rect x={1320} y={300} width={520} height={620} rx={20} fill={CARD} stroke={AMBER_INK} strokeWidth={4} />
			<Sx x={1346} y={350} text="R (ethylene)" size={38} color={INK} hand at={-1000} />
			<Pic p={PL.ripe} cx={1520} cy={480} w={300} />
			<g>
				<ellipse cx={1520} cy={480} rx={190} ry={120} fill="none" stroke={AMBER_INK} strokeWidth={4} strokeDasharray="10 8" opacity={0.7} />
				<circle cx={1520 + 190 * Math.cos(cyc * Math.PI * 2)} cy={480 + 120 * Math.sin(cyc * Math.PI * 2)} r={12} fill={AMBER_INK} stroke={CARD} strokeWidth={3} />
			</g>
			<Sign x={1740} y={630} s="+" color={AMBER_INK} p={pulse(f, KM3.adds, 40)} />
			<T x={1346} y={770} w={470} text="Positive: the response adds to the change." size={42} color={AMBER_INK} at={KM3.pos} />
			<T x={780} y={1000} w={1060} text="Compare the response with the change." size={50} color={BLUE} at={KM3.neg} />
		</Svg>
	);
};

// ---------- 5. decision board ----------
const KD = K('decision-board', {build: 'To build a loop', read: 'To read a graph', spot: 'To spot positive', opp: 'Opposes is negative', next: 'Next'});
export const SceneDecision: React.FC = () => {
	const f = useCurrentFrame();
	const y0 = 190, rh = 186, gap = 16, mid = (i: number) => y0 + i * (rh + gap) + rh / 2;
	return (
		<Svg>
			<Title text="How to start each type" />
			<Decision y0={y0} rh={rh} gap={gap} rows={[
				{see: 'a system described in words', doo: 'five parts in order; response = change in the variable', badge: 'Q1', at: KD.build, thumb: <g><PicH p={PL.heart} cx={180} cy={mid(0)} h={150} /><LoopRing g={{cx: 300, cy: mid(0), R: 52, r: 13}} at={-1000} arcColor={TEAL} /></g>},
				{see: 'a hormone graph', doo: 'find the stimulus, then the response that follows', badge: 'Q2', at: KD.read, thumb: <Pic p={PL.pancreas} cx={238} cy={mid(1)} w={240} />},
				{see: 'negative or positive?', doo: 'compare the response with the change', badge: 'Q3', at: KD.spot, thumb: <Pic p={PL.ripe} cx={238} cy={mid(2)} w={220} />},
			]} />
			<g opacity={prog(f, KD.opp, 14)}>
				<rect x={96} y={802} width={1728} height={104} rx={22} fill={CARD} stroke={BLUE} strokeWidth={4} />
				<Sx x={960} y={870} text="Opposes the change: negative. Adds to it: positive." size={52} color={BLUE} hand anchor="middle" at={-1000} />
			</g>
			<g opacity={prog(f, KD.next, 14)}>
				<rect x={1060} y={934} width={764} height={96} rx={48} fill={CARD} stroke={AMBER_INK} strokeWidth={4} />
				<Pic p={PL.stoma} cx={1130} cy={982} w={80} />
				<Sx x={1190} y={996} text="Next: Investigating plant water loss" size={40} color={INK} hand at={-1000} />
			</g>
		</Svg>
	);
};

// ---------- 6. key notes ----------
export const SceneNotes: React.FC = () => (
	<NotesBoard size={48} aidTop={680} tag="Use it on any loop: temperature, glucose, water, ripening, clotting" aid="Compare the response with the change. Opposes: negative. Adds to it: positive." notes={[
		'Loop order: stimulus → receptor → control centre → effector → response.',
		'Response = the change in the variable, not what the effector does.',
		'Negative feedback opposes the change; positive feedback adds to it.',
		'Hormones are signals; name the target cells as effectors.',
		'Glucose after a meal: glucose peaks first, insulin follows.',
	]} />
);
void QPart; void Q3_DEM; void Q3_P; void Q3_Q; void Q3_R;
