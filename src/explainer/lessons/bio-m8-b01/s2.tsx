// M8 B01 scenes 5 to 9: why it is negative (the amber minus arc, fell and raised arrows, the gloss and the crossed
// "harmful" chip, fewer and fainter signal pulses, the heat-made bar that settles low but above zero, the trace that dips
// and drifts inside the band); positive feedback (the painted tear with platelets, the two-slot plus loop cycling, the
// cross-fade to the plug, the two-column contrast); the glucose template (pancreas in the receptor slot and again in the
// control slot, a hormone pulse in a vessel line, the minus arc); two exam checks; the memory initials.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Heading, Overlay} from '../bio-m5-b13/shared';
import {NB, S} from './common';
import {
	AMBER, AMBER_INK, CTag, ColdRing, CurveArrow, DLbl, DrawPath, FEAT, GREYT, GREY_INK, GTag, INK, INK_SOFT, MistakeChip, PLATES, Pl, PlateB, Sx, TEAL, UpDown, VIOLET, WARM, gMix,
	pbPt, prog, ringPt, smooth, vis,
} from './parts';
import type {RG} from './parts';
import {G4} from './s1';
import {LoopRing, Pointer, RingArc, SignalPulse, TAxes, TBand, THLine, TLine, qp, tx, ty} from '../m8-shared/parts';
import type {TG} from '../m8-shared/parts';

// ---------- 5. Why it's called negative ----------
const K5 = cues(S('why-negative'), {key: "Here's the key", opposite: 'opposite way', fell: 'Temperature fell', raises: 'the response raises', neg: 'negative feedback', bad: 'not bad', returns: 'As temperature returns', weaken: 'signals weaken', settles: 'settles to', cold: 'in a cold room', delays: 'small delays', either: 'either side'});
export const G5: RG = {cx: 470, cy: 600, R: 250, r: 82};
const G5T: TG = {x: 1190, y: 430, w: 600, h: 300, x0: 0, x1: 10, y0: 36, y1: 38};
const DIP: [number, number][] = [[0, 37], [2, 37], [3.5, 36.62], [5, 36.92], [6, 37.14], [7, 36.96], [8.5, 37.05], [10, 37]];
export const SceneNegative: React.FC = () => {
	const f = useCurrentFrame();
	const g = gMix(f, G4, G5);
	const [sx, sy] = ringPt(g, 0);
	const fade = (t0: number) => (t0 < K5.returns ? 1 : Math.max(0.2, 1 - (t0 - K5.returns) / 160));
	const shiver = (fr: number) => (fr < K5.returns ? 1 : 1 - 0.7 * smooth(prog(fr, K5.returns, 60)));
	const barH = 260 - 190 * smooth(prog(f, K5.settles, 40));
	return (
		<>
			<Heading text="Why it's called negative" at={4} size={56} />
			<Overlay>
				<ColdRing id="b01s5" g={g} c={{lit: [-100, -100, -100, -100, -100], names: true, shiver, minus: {at: K5.opposite, signAt: K5.opposite + 10},
					pulses: [{a: 1, b: 2, at: 10, every: 24, fade}, {a: 2, b: 3, at: 22, every: 24, fade}]}} />
				<UpDown x={sx + 120} y={sy - 10} up={false} text="fell" at={K5.fell} color="#3f6fb0" />
				<UpDown x={sx + 230} y={sy - 10} up text="raised" at={K5.raises} color={WARM} />
				<g opacity={1 - 0.55 * prog(f, K5.settles, 14)}>
					<CTag x={900} y={200} text="negative feedback: the response opposes the change" at={K5.neg} color={AMBER_INK} size={36} maxW={880} />
				</g>
				<MistakeChip x={900} y={300} text="negative = harmful" at={K5.neg + 30} cross={K5.bad} size={28} />
				<g opacity={vis(f, K5.weaken - 10, undefined, 14)}>
					<line x1={900} x2={1020} y1={760} y2={760} stroke={INK} strokeWidth={3} />
					<rect x={930} y={760 - barH} width={60} height={barH} rx={8} fill={WARM} opacity={0.8} />
					<Sx x={960} y={800} text="heat made" size={28} color={INK} anchor="middle" hand weight={700} at={-1000} />
				</g>
				<GTag x={860} y={830} text="still some extra heat while it is cold" at={K5.cold} size={24} />
				<TAxes g={G5T} at={K5.delays - 10} xLabel="time" yLabel="core temperature (°C)" yTicks={[36, 37, 38]} size={22} />
				<TBand g={G5T} lo={36.5} hi={37.5} at={K5.delays - 4} />
				<THLine g={G5T} v={37} at={K5.delays} />
				<TLine g={G5T} pts={DIP} at={K5.delays + 6} dur={90} color={TEAL} width={5} />
				<g opacity={prog(f, K5.delays + 10, 10)}>
					<line x1={tx(G5T, 2)} x2={tx(G5T, 2)} y1={G5T.y} y2={G5T.y + G5T.h} stroke={GREY_INK} strokeWidth={2.5} strokeDasharray="6 6" />
					<Sx x={tx(G5T, 2) + 8} y={G5T.y + 28} text="cold wind" size={22} color={GREY_INK} weight={600} at={-1000} />
				</g>
				<GTag x={1190} y={910} text="small drift either side is normal" at={K5.either} size={24} />
				{void K5.key}{void ty}
			</Overlay>
		</>
	);
};

// ---------- 6. Positive feedback, the contrast ----------
const K6 = cues(S('positive-feedback'), {pos: 'positive feedback', strengthens: 'strengthens the original', tear: 'blood vessel tears', platelets: 'few platelets', call: 'call in more', which: 'which release more', grows: 'The change grows', plugged: 'hole is plugged', stops: 'then it stops', drives: 'drives a process', cant: "can't hold", relies: 'relies on'});
const V6 = {cx: 760, cy: 520, w: 960};
const C1: [number, number] = [620, 880], C2: [number, number] = [960, 880];
export const ScenePositive: React.FC = () => {
	const f = useCurrentFrame();
	const g = gMix(f, G5, {cx: 210, cy: 330, R: 110, r: 38});
	const swap = smooth(prog(f, K6.plugged, 30));
	const [tx0, ty0] = pbPt(PLATES.tearEarly, V6.cx, V6.cy, V6.w)(...FEAT.tear);
	const loopO = vis(f, K6.call, undefined, 12) * (1 - 0.6 * prog(f, K6.stops, 14));
	const cycling = f >= K6.which && f < K6.plugged + 10;
	const dots: React.ReactNode[] = [];
	if (cycling) {
		const u = ((f - K6.which) % 50) / 50;
		const p = u < 0.5 ? qp(C1, C2, -90, u * 2) : qp(C2, C1, 90, (u - 0.5) * 2);
		dots.push(<circle key="d" cx={p[0]} cy={p[1]} r={11} fill={AMBER} stroke="#fffdf8" strokeWidth={2.5} />);
	}
	return (
		<>
			<Heading text="Positive feedback, the contrast" at={4} size={56} />
			<Overlay>
				<g opacity={0.35}><ColdRing id="b01s6" g={g} c={{lit: [], minus: {at: -100}}} /></g>
				<g opacity={prog(f, K6.tear - 20, 16)}>
					<PlateB p={PLATES.tearEarly} cx={V6.cx} cy={V6.cy} w={V6.w} o={1 - swap} />
					<PlateB p={PLATES.tearPlug} cx={V6.cx} cy={V6.cy} w={V6.w} o={swap} />
				</g>
				<Pointer from={[tx0 - 200, ty0 + 150]} to={[tx0, ty0 + 10]} at={K6.platelets} out={K6.grows} color={AMBER_INK} />
				<GTag x={180} y={735} text="platelets: cell fragments in blood that help it clot" at={K6.platelets + 6} out={K6.drives} size={24} />
				<g opacity={loopO}>
					{[[C1, 'more platelets', 'stick'], [C2, 'more chemicals', 'released']].map(([c, a, b], i) => {
						const [x, y] = c as [number, number];
						return (
							<g key={i}>
								<circle cx={x} cy={y} r={82} fill="#fffdf8" stroke={AMBER} strokeWidth={4} />
								<Sx x={x} y={y - 4} text={a as string} size={24} color={INK} anchor="middle" hand weight={700} at={-1000} />
								<Sx x={x} y={y + 26} text={b as string} size={24} color={INK} anchor="middle" hand weight={700} at={-1000} />
							</g>
						);
					})}
					<CurveArrow a={[C1[0] + 70, C1[1] - 50]} b={[C2[0] - 70, C2[1] - 50]} at={K6.call + 6} bow={-60} color={AMBER_INK} width={5} />
					<CurveArrow a={[C2[0] - 70, C2[1] + 50]} b={[C1[0] + 70, C1[1] + 50]} at={K6.call + 16} bow={60} color={AMBER} width={6} />
					<g opacity={prog(f, K6.call + 24, 10)}>
						<circle cx={(C1[0] + C2[0]) / 2} cy={C1[1] + 104} r={30} fill="#fffdf8" stroke={AMBER} strokeWidth={4} />
						<Sx x={(C1[0] + C2[0]) / 2} y={C1[1] + 122} text="+" size={50} color={AMBER_INK} anchor="middle" weight={800} at={-1000} />
					</g>
					{dots}
				</g>
				<CTag x={V6.cx} y={250} text="end point: tear sealed" at={K6.plugged + 20} color={TEAL} size={34} anchor="middle" />
				<CTag x={1340} y={720} text="negative: opposes, holds steady" at={K6.drives} color={TEAL} size={32} maxW={520} />
				<CTag x={1340} y={830} text="positive: amplifies, to an end point" at={K6.drives + 14} color={AMBER_INK} size={32} maxW={520} />
				{void K6.pos}{void K6.strengthens}{void K6.cant}{void K6.relies}{void DrawPath}{void GREYT}
			</Overlay>
		</>
	);
};

// ---------- 7. Same template, different parts ----------
const K7 = cues(S('glucose-template'), {same: 'five-part template', rises: 'Blood glucose rises', cells: 'Cells in the pancreas', insulin: 'insulin', body: 'Body cells', liver: 'liver and muscle', falls: 'falls back', here: 'Here, the pancreas', later: 'a later video'});
const G7: RG = {cx: 780, cy: 600, R: 290, r: 95};
export const SceneGlucose: React.FC = () => {
	const f = useCurrentFrame();
	const g = gMix(f, {cx: 210, cy: 330, R: 110, r: 38}, G7);
	const p = (i: number) => ringPt(g, i);
	const slide = smooth(prog(f, K7.cells + 40, 30));
	const drop = smooth(prog(f, K7.cells, 20));
	const [x1, y1] = p(1), [x2, y2] = p(2);
	const pw = g.r * 1.8;
	return (
		<>
			<Heading text="Same template, different parts" at={4} size={56} />
			<Overlay>
				<LoopRing g={g} lit={[K7.rises, K7.cells, K7.cells + 40, K7.liver, K7.falls]}>
					<Sx x={p(0)[0]} y={p(0)[1] + 12} text="glucose ↑" size={32} color={AMBER_INK} anchor="middle" weight={800} at={K7.rises} />
					<Pl p={PLATES.pancreas} cx={x1} cy={y1 - 60 * (1 - drop)} w={pw} o={drop} />
					<Pl p={PLATES.pancreas} cx={x1 + (x2 - x1) * slide} cy={y1 + (y2 - y1) * slide} w={pw} o={slide > 0.02 ? 1 : 0} />
					<Pl p={PLATES.muscle} cx={p(3)[0]} cy={p(3)[1]} w={pw} o={vis(f, K7.liver, undefined, 12)} dim={0.6} />
					<Sx x={p(4)[0]} y={p(4)[1] + 12} text="glucose ↓" size={30} color={TEAL} anchor="middle" weight={800} at={K7.falls} />
					<RingArc g={g} i={4} at={K7.falls} color={AMBER} width={6} sign="−" signAt={K7.falls + 8} />
				</LoopRing>
				<DLbl x={p(0)[0] + 120} y={p(0)[1] - 6} text="stimulus: blood glucose rises" at={K7.rises + 4} dimAt={K7.cells} size={32} maxW={760} />
				{f >= K7.cells + 60 ? <DrawPath d={`M${x1 + 110},${y1 - 40} Q${x1 + 220},${(y1 + y2) / 2} ${x2 + 110},${y2 + 30}`} at={K7.cells + 60} dur={18} color={TEAL} width={5} /> : null}
				<DLbl x={x1 + 200} y={(y1 + y2) / 2 - 10} text="receptor and control centre: pancreas" at={K7.cells + 66} dimAt={K7.body} size={32} maxW={520} />
				<SignalPulse a={[x2 - 60, y2 + 70]} b={[p(3)[0] + 60, p(3)[1] + 70]} bow={40} at={K7.insulin} until={K7.falls + 30} every={26} dur={34} color={VIOLET} track trackColor="#c8372d" trackWidth={8} dash="none" wavy />
				<Sx x={g.cx} y={g.cy + g.R + 130} text="insulin (a hormone)" size={30} color={VIOLET} anchor="middle" hand weight={700} at={K7.insulin + 4} />
				<DLbl x={p(3)[0] - 120} y={p(3)[1] - 20} text="effectors: liver and muscle cells" at={K7.liver} dimAt={K7.falls} size={32} maxW={420} anchor="end" />
				<DLbl x={p(4)[0] - 120} y={p(4)[1] - 20} text="response: glucose taken up, level falls" at={K7.falls + 6} size={32} maxW={380} anchor="end" />
				<g opacity={vis(f, K7.here, undefined, 10) * (0.5 + 0.5 * Math.sin(Math.max(0, f - K7.here) / 8))}>
					<circle cx={x1} cy={y1} r={g.r + 12} fill="none" stroke={AMBER} strokeWidth={4} />
					<circle cx={x2} cy={y2} r={g.r + 12} fill="none" stroke={AMBER} strokeWidth={4} />
				</g>
				<GTag x={1300} y={980} text="Coming up: insulin and glucagon" at={K7.later} size={26} />
				{void K7.same}{void NB}
			</Overlay>
		</>
	);
};

// ---------- 8. Two exam checks ----------
const K8 = cues(S('exam-checks'), {when: 'When you read', first: 'First, which variable', inside: 'condition inside', air: 'Air temperature might', isnt: "isn't trying", second: 'Second, which way', opposes: 'If it opposes', remember: 'And remember', detect: 'receptors detect the', notresp: 'not the response'});
export const G8: RG = {cx: 480, cy: 610, R: 250, r: 82};
export const SceneChecks: React.FC = () => {
	const f = useCurrentFrame();
	const g = gMix(f, G7, G8);
	const pulse = vis(f, K8.air, K8.second, 8) * (0.5 + 0.5 * Math.sin(f / 5));
	return (
		<>
			<Heading text="Two exam checks" at={4} size={56} />
			<Overlay>
				<ColdRing id="b01s8" g={g} c={{lit: [], show: [-100, -100, -100, -100, -100], names: true, minus: {at: -100, signAt: -100}}} />
				<g>
					{pulse > 0.01 ? <rect x={86} y={186} width={400} height={66} rx={14} fill="none" stroke={AMBER} strokeWidth={4} opacity={pulse} /> : null}
					<GTag x={96} y={196} text="outside change: cold wind" at={-100} size={26} />
				</g>
				<CTag x={900} y={220} text="1. Which variable? Inside the body." at={K8.first} color={TEAL} size={40} dim={prog(f, K8.second, 10)} />
				<MistakeChip x={900} y={330} text="air temperature is the regulated variable" at={K8.air} cross={K8.isnt} size={28} />
				<CTag x={900} y={450} text="2. Which way? Opposes = negative." at={K8.second} color={AMBER_INK} size={40} dim={prog(f, K8.remember, 10)} />
				<RingArc g={g} i={0} at={K8.detect} color={AMBER} width={7} />
				<CTag x={900} y={580} text="receptor detects the change in the variable" at={K8.detect} color={TEAL} size={34} maxW={880} />
				<MistakeChip x={900} y={690} text="receptor detects the response" at={K8.detect + 20} cross={K8.notresp} size={28} />
				{void K8.when}{void K8.inside}{void K8.opposes}{void INK}
			</Overlay>
		</>
	);
};

// ---------- 9. Memory ----------
const K9 = cues(S('memory'), {to: 'To remember', some: 'Some Really', s: 'Stimulus', r: 'receptor', c: 'control centre', e: 'effector', rr: 'response', opposes: 'opposes the change'});
export const SceneMemory: React.FC = () => {
	const f = useCurrentFrame();
	const g = gMix(f, G8, {cx: 960, cy: 540, R: 250, r: 82});
	const at = [K9.s, K9.r, K9.c, K9.e, K9.rr];
	const pu = vis(f, K9.opposes, undefined, 8) * (0.5 + 0.5 * Math.sin((f - K9.opposes) / 5));
	return (
		<>
			<Heading text="Remember the order" at={4} size={56} />
			<Overlay>
				<ColdRing id="b01s9" g={g} c={{lit: at, minus: {at: -100, signAt: -100}}} />
				{['S', 'R', 'C', 'E', 'R'].map((t, i) => {
					const [x, y] = ringPt(g, i, g.R + g.r + 56);
					return <Sx key={i} x={x} y={y + 26} text={t} size={80} color={AMBER_INK} anchor="middle" hand weight={700} at={at[i]} />;
				})}
				{pu > 0.01 ? <circle cx={g.cx + (g.R + 46) * Math.cos((234 * Math.PI) / 180)} cy={g.cy + (g.R + 46) * Math.sin((234 * Math.PI) / 180)} r={44} fill="none" stroke={AMBER} strokeWidth={6} opacity={pu} /> : null}
				<Sx x={960} y={1010} text="Some Really Cool Elephants Run" size={60} color={TEAL} anchor="middle" hand weight={700} at={K9.some} />
				{void K9.to}{void GREY_INK}
			</Overlay>
		</>
	);
};
