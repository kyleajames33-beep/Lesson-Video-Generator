// M8 G03 scenes 6 to 9: question 2 (glucose and insulin after a meal) as the full worded card with its graph and the
// countdown; the peaks read off the axes (peak markers, beta cells in the painted islet); the fall and the dip
// (insulin high, glucose moving into the painted liver and muscle, reading guides, the minus loop, alpha cells and
// glucagon, glucose leaving the liver); and the crossed "insulin breaks down glucose" mistake.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {
	AnsRows, AMBER, AMBER_INK, AnsBox, Arrow, Badge, BLUE, BlankLines, CARD, Chip, DrawPath, GGuide, GTag, GlucGraph, HscTag, INK, Mistake, MiniLoop, Pause, PeakMarker, Pic, Q2Col, Q2Full, SignalPulse, Svg, Sx, T, TEAL, Tag, Title,
	X, YG, YI, prog, q2Marks, smooth, vis,
} from './parts';
import type {GG} from './parts';
import {PL} from './assets';
import {K, hold} from './common';

/** Glucose (small amber hexagons) travelling from a to b, one every `every` frames, between at and until. */
const GDots: React.FC<{a: [number, number]; b: [number, number]; at: number; until?: number; every?: number; dur?: number; color?: string}> = ({a, b, at, until = 1e9, every = 16, dur = 40, color = '#c68626'}) => {
	const f = useCurrentFrame();
	if (f < at) return null;
	const out: React.ReactNode[] = [];
	for (let t0 = at; t0 <= Math.min(f, until); t0 += every) {
		const u = (f - t0) / dur;
		if (u < 0 || u > 1) continue;
		const p = smooth(u);
		const x = a[0] + (b[0] - a[0]) * p + Math.sin(u * 7 + t0) * 6, y = a[1] + (b[1] - a[1]) * p;
		out.push(<polygon key={t0} points={Array.from({length: 6}, (_, k) => `${x + 11 * Math.cos((k * Math.PI) / 3)},${y + 11 * Math.sin((k * Math.PI) / 3)}`).join(' ')} fill={color} stroke={CARD} strokeWidth={2} opacity={Math.min(1, (1 - u) * 4)} />);
	}
	return <g>{out}</g>;
};
const Vessel: React.FC<{x0: number; x1: number; y: number; label?: boolean}> = ({x0, x1, y, label = true}) => {
	const f = useCurrentFrame();
	return (
		<g>
			<rect x={x0} y={y - 16} width={x1 - x0} height={32} rx={16} fill="#e9b3a8" stroke="#b9575a" strokeWidth={3} />
			<line x1={x0 + 16} x2={x1 - 16} y1={y} y2={y} stroke="#fff3ef" strokeWidth={4} strokeDasharray="16 22" strokeDashoffset={-(f * 2) % 38} />
			{label ? <Sx x={x0 + 20} y={y + 52} text="blood" size={30} color={INK} hand weight={700} at={-1000} /> : null}
		</g>
	);
};

// ---------- 3a. question 2 ----------
const KQ2 = K('q2-question', {pause: 'Pause here'});
const GQ: GG = {x: 250, y: 360, w: 800, h: 260};
export const SceneQ2: React.FC = () => (
	<Svg>
		<Title text="Question 2: glucose after a meal" />
		<HscTag />
		<Q2Full g={GQ} />
		<GTag x={126} y={700} text="teaching data" size={28} />
		<Pic p={PL.pancreas} cx={1582} cy={290} w={450} />
		<BlankLines x={1340} y={440} w={484} h={110} label="(a)" />
		<BlankLines x={1340} y={562} w={484} h={110} label="(b)" />
		<BlankLines x={1340} y={684} w={484} h={110} label="(c)" />
		<Pause h={hold('q2-question')} at={KQ2.pause} tx={1340} ty={862} cx={1750} cy={958} r={46} />
	</Svg>
);

// ---------- 3b. read the peaks ----------
const KK = K('q2-peaks', {peaks: 'Start with the peaks', g30: 'thirty minutes', g76: 'seven point six', i45: 'forty-five minutes', order: 'That order', rise: 'rise in glucose', beta: 'Beta cells', rel: 'release insulin', after: 'after glucose'});
const G: GG = {x: 930, y: 220, w: 610, h: 380};
const M_K = q2Marks([{phrase: 'Identify the time at which blood glucose and blood insulin each peaked', at: KK.peaks + 10}]);
export const SceneQ2Peaks: React.FC = () => {
	const f = useCurrentFrame();
	const br = prog(f, KK.after, 14);
	return (
		<Svg>
			<Title text="Read the peaks first" />
			<HscTag />
			<Badge text="Read a glucose graph" />
			<Q2Col marks={M_K} />
			<GlucGraph g={G} keyBelow segs={[{line: 'g', from: 0, to: 30, at: KK.rise}]} />
			<PeakMarker g={G} t={30} y={YG(G, 7.6)} at={KK.g30} color={TEAL} label="30 min, 7.6 mmol/L" lx={968} ly={205} />
			<PeakMarker g={G} t={45} y={YI(G, 62)} at={KK.i45} color={AMBER_INK} label="45 min, 62 mU/L" lx={1230} ly={262} tLabel="45" />
			{br > 0.01 ? <g opacity={br}>
				<path d={`M${X(G, 30)},${G.y + G.h - 60} l0,12 L${X(G, 45)},${G.y + G.h - 48} l0,-12`} fill="none" stroke={AMBER_INK} strokeWidth={4} />
				<rect x={X(G, 45) + 14} y={G.y + G.h - 90} width={380} height={50} rx={12} fill={CARD} stroke={AMBER_INK} strokeWidth={3} />
				<Sx x={X(G, 45) + 30} y={G.y + G.h - 54} text="insulin follows glucose" size={36} color={AMBER_INK} hand at={-1000} />
			</g> : null}
			<GTag x={770} y={724} text="stimulus: glucose rises" size={32} at={KK.rise} />
			<Pic p={PL.pancreas} cx={1630} cy={884} w={400} />
			<Pic p={PL.islet} cx={1240} cy={892} w={300} />
			<Sx x={1240} y={1036} text="islet: beta cells" size={30} color={INK} anchor="middle" hand at={-1000} />
			<g opacity={prog(f, KK.beta, 14)}>
				<DrawPath d={`M${1480},${880} L${1395},${885}`} at={KK.beta} dur={12} color={TEAL} width={4} dash="8 6" />
				<T x={770} y={840} w={330} text="beta cells: detect the rise, release insulin" size={40} color={TEAL} at={KK.beta} />
			</g>
			<SignalPulse a={[1240, 800]} b={[X(G, 45), YI(G, 62) + 40]} at={KK.rel} until={KK.rel + 140} every={20} dur={30} bow={-60} color={AMBER} track={false} />
			<AnsBox x={40} y={755} w={680} h={290} label="answer (a)" hint="Read both peaks off the axes, then say why insulin comes later." lines={[
				{t: 'Glucose peaked at 30 min (7.6 mmol/L); insulin at 45 min (62 mU/L).', at: KK.i45 + 12},
				{t: 'The rise in glucose is the stimulus, so insulin peaks later.', at: KK.after},
			]} />
			{void KK.g76}{void KK.order}
		</Svg>
	);
};

// ---------- 3c. the fall, then the dip ----------
const KX = K('q2-explain', {now: 'Now forty-five', high: 'Insulin is high', take: 'take up more', glyc: 'glycogen', five: 'about five', falls: 'insulin falls too', neg: 'negative feedback', dipped: 'dipped just below', show: "doesn't show glucagon", alpha: 'Alpha cells', glucagon: 'release glucagon', releases: 'releases glucose', rises: 'rises back'});
const M_X = q2Marks([
	{phrase: 'between 45 and 120 minutes', at: KX.now + 10},
	{phrase: 'with reference to negative feedback', at: KX.neg},
	{phrase: 'between 150 and 180 minutes', at: KX.dipped},
	{phrase: 'Using the graph and your knowledge', at: KX.show},
]);
const LIV: [number, number] = [1230, 880], MUS: [number, number] = [1620, 880], PAN: [number, number] = [900, 880];
export const SceneQ2Explain: React.FC = () => {
	const f = useCurrentFrame();
	const bO = 1 - prog(f, KX.dipped - 10, 12), cO = prog(f, KX.dipped - 10, 12);
	return (
		<Svg>
			<Title text="The fall, then the dip" />
			<HscTag />
			<Badge text="Read a glucose graph" />
			<Q2Col marks={M_X} />
			<GlucGraph g={G} keyBelow segs={[{line: 'i', from: 45, to: 90, at: KX.high, out: KX.falls}, {line: 'g', from: 45, to: 120, at: KX.five - 10, out: KX.dipped}, {line: 'i', from: 60, to: 120, at: KX.falls}, {line: 'g', from: 120, to: 150, at: KX.dipped}, {line: 'g', from: 150, to: 180, at: KX.rises}]} />
			<PeakMarker g={G} t={30} y={YG(G, 7.6)} at={-1000} dim={-1000} color={TEAL} label="" lx={0} ly={0} pill={false} />
			<PeakMarker g={G} t={45} y={YI(G, 62)} at={-1000} dim={-1000} color={AMBER_INK} label="" lx={0} ly={0} pill={false} />
			<GGuide g={G} t={45} v={7.2} line="g" at={KX.five - 10} out={KX.dipped} label="7.2" lx={742} ly={YG(G, 7.2) + 12} />
			<GGuide g={G} t={120} v={5.0} line="g" at={KX.five} out={KX.dipped} label="5.0" lx={742} ly={YG(G, 5.0) + 12} />
			<GGuide g={G} t={150} v={4.6} line="g" at={KX.dipped} label="4.6" lx={742} ly={YG(G, 4.6) + 16} />
			<GGuide g={G} t={180} v={4.9} line="g" at={KX.rises} label="4.9" lx={742} ly={YG(G, 4.9) - 18} />
			<MiniLoop cx={1450} cy={300} R={60} at={KX.neg} o={1 - prog(f, KX.dipped, 12)} />
			<GTag x={1300} y={384} text="b01: negative feedback" size={28} at={KX.neg} out={KX.dipped} />
			<Tag x={1170} y={232} w={370} text="Insulin lets glucose in. Glucagon acts when glucose has gone." size={32} color={BLUE} at={KX.rises + 10} />
			<Vessel x0={830} x1={1840} y={1012} label={false} />
			<Sx x={770} y={1022} text="blood" size={30} color={INK} hand at={-1000} />
			<Pic p={PL.pancreas} cx={PAN[0]} cy={PAN[1]} w={250} />
			<Pic p={PL.liver} cx={LIV[0]} cy={LIV[1]} w={300} />
			<Pic p={PL.muscle} cx={MUS[0]} cy={MUS[1]} w={360} />
			<SignalPulse a={[PAN[0] + 100, PAN[1] - 40]} b={[LIV[0] - 120, LIV[1] - 60]} at={KX.high} until={KX.falls} every={22} dur={30} bow={-50} color={AMBER} track={false} />
			<GDots a={[LIV[0], 1012]} b={[LIV[0], LIV[1] + 20]} at={KX.take} until={KX.neg} every={18} />
			<GDots a={[MUS[0], 1012]} b={[MUS[0], MUS[1] + 20]} at={KX.take + 8} until={KX.neg} every={18} />
			<GTag x={760} y={722} text="liver, muscle and fat cells take up glucose" size={28} at={KX.take} out={KX.dipped} />
			<GTag x={1404} y={722} text="stored as glycogen" size={28} at={KX.glyc} out={KX.dipped} />
			<Chip x={760} y={720} text="alpha cells: detect the fall, release glucagon" size={30} color={AMBER_INK} at={KX.alpha} />
			<SignalPulse a={[PAN[0] + 100, PAN[1] - 40]} b={[LIV[0] - 120, LIV[1] - 60]} at={KX.glucagon} every={22} dur={30} bow={-50} color={TEAL} track={false} />
			<GDots a={[LIV[0] + 40, LIV[1] + 30]} b={[LIV[0] + 40, 1012]} at={KX.releases} every={18} />
			<AnsBox o={bO} x={40} y={755} w={680} h={290} label="answer (b)" hint="Insulin is high: which cells act, and what happens to glucose?" lines={[
				{t: 'Insulin (high): liver, muscle and fat cells take up glucose; stored as glycogen.', at: KX.take + 8},
				{t: 'Glucose falls from 7.2 to 5.0 mmol/L.', at: KX.five + 8},
				{t: 'Less glucose, so less insulin: negative feedback.', at: KX.neg},
			]} />
			<AnsBox o={cO} x={40} y={755} w={680} h={290} label="answer (c)" lines={[
				{t: 'Glucose dipped below fasting: 4.6 mmol/L at 150 min.', at: KX.dipped + 10},
				{t: 'Glucagon: the liver breaks down glycogen and releases glucose, so glucose rises (4.9).', at: KX.releases},
			]} />
			{void vis}{void TEAL}
		</Svg>
	);
};

// ---------- 3d. the classic mistake ----------
const KM2 = K('q2-mistake', {classic: 'classic mistake', signal: 'Insulin is the signal', eff: 'are the effectors', take: 'take glucose in', link: 'Link each hormone'});
const GS: GG = {x: 150, y: 790, w: 440, h: 170};
export const SceneQ2Mistake: React.FC = () => (
	<Svg>
		<Title text="The classic mistake" />
		<HscTag />
		<Badge text="Read a glucose graph" />
		<Q2Col />
		<GlucGraph g={GS} size={26} showKey={false} />
		<Mistake x={780} y={172} text="insulin breaks down glucose" size={44} at={-1000} cross={KM2.classic + 8} />
		<Pic p={PL.pancreas} cx={950} cy={470} w={330} />
		<Sx x={950} y={600} text="pancreas" size={34} color={INK} anchor="middle" hand at={-1000} />
		<Pic p={PL.liver} cx={1330} cy={450} w={320} />
		<Sx x={1330} y={600} text="liver" size={34} color={INK} anchor="middle" hand at={-1000} />
		<Pic p={PL.muscle} cx={1680} cy={450} w={300} />
		<Sx x={1680} y={600} text="muscle" size={34} color={INK} anchor="middle" hand at={-1000} />
		<Arrow a={[1050, 420]} b={[1170, 420]} at={KM2.signal} color={AMBER_INK} width={6} />
		<Arrow a={[1050, 380]} b={[1540, 330]} at={KM2.signal + 8} color={AMBER_INK} width={5} bow={-0.12} />
		<Chip x={1060} y={258} text="insulin (signal)" size={34} color={AMBER_INK} at={KM2.signal} />
		<Vessel x0={780} x1={1840} y={700} />
		<GDots a={[1330, 700]} b={[1330, 520]} at={KM2.eff} every={16} />
		<GDots a={[1680, 700]} b={[1680, 500]} at={KM2.eff + 6} every={16} />
		<Chip x={1400} y={640} text="cells take up glucose" size={34} color={TEAL} at={KM2.take} />
		<T x={780} y={850} w={1060} text="Insulin is the signal; liver, muscle and fat cells take glucose in." size={44} color={TEAL} at={KM2.eff} />
		<T x={780} y={990} w={1060} text="Link each hormone to the cells it acts on." size={50} color={BLUE} at={KM2.link} />
		{void AMBER}
	</Svg>
);
