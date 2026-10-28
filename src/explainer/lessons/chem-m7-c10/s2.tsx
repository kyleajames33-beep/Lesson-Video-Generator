// M7 C10 scenes 7 to 11: it never finishes (⇌; the flask's four amount bars; the yield bar at about 2/3), pushing the
// yield (excess ethanol, about 9/10; remove water; the catalyst changes speed, not yield), getting the ester out (the
// separating funnel cross-fade, the carbonate wash, distillation), the two-step flow chart and the memory aid.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {prog} from '../../kit';
import {Overlay, Sx, TEAL, TaskLine, smooth} from '../chem-m6-c01/parts';
import {Crossed, Tag} from '../chem-m7-c01/molecules';
import {dimAt, vis} from '../chem-m7-c04a/parts';
import {Arrow2, Bubbles, EqRow, Leader, Plate, ptOn} from '../chem-m7-c06/parts';
import {DISTIL, FUNNEL, sc} from './common';
import {Box, FlaskIcons, GREY, INK, NAVY, RED, YieldBar} from './parts';
import type {Amt} from './parts';

const EQL = (a: number) => [{t: 'CH_3COOH', at: a}, {t: '+', at: a}, {t: 'CH_3CH_2OH', at: a}];
const EQR = (a: number) => [{t: 'CH_3COOCH_2CH_3', at: a}, {t: '+', at: a}, {t: 'H_2O', at: a}];
const FL = {x: 520, y: 400}, YB = {x: 1000, y: 560, w: 720};

// ---------- 7. Equilibrium ----------
const K7 = cues(sc('equilibrium-yield'), {but: 'But esterification', rev: 'reversible', split: 'Water can split', eq: 'reaches equilibrium', four: 'all four', start: 'Start with', two: 'two thirds', why: "That's why", single: 'single arrow'});
export const SceneEquilibrium: React.FC = () => (
	<Overlay>
		<TaskLine text="Yield: it never quite finishes" at={K7.but} size={54} y={130} />
		<EqRow left={EQL(0)} right={EQR(0)} cx={960} y={270} size={38} len={200} arrow={{at: 0, eqAt: K7.rev, below: [{t: 'water splits the ester back', at: K7.split}]}} />
		<FlaskIcons x={FL.x} y={FL.y} at={K7.eq - 10} keys={[{at: -100, v: [1, 1, 0, 0]}, {at: K7.eq + 10, v: [0.33, 0.33, 0.67, 0.67]}]} />
		<Tag x={FL.x} y={FL.y + 440} text="M5: at equilibrium, both directions continue" at={K7.four} size={22} anchor="middle" />
		<YieldBar x={YB.x} y={YB.y} w={YB.w} at={K7.start} keys={[{at: K7.two - 10, v: 0.67}]} label="equal amounts: ester formed from the acid" />
		<Tag x={YB.x + YB.w * 0.67 - 60} y={YB.y + 70} text="about 2/3" at={K7.two + 10} size={30} color="#a8761a" fill="#fbedd0" />
		<Crossed x={1000} y={800} text="single arrow →" at={K7.why} cross={K7.single} note="use ⇌: it doesn't go to completion" size={32} />
	</Overlay>
);

// ---------- 8. Pushing the yield ----------
const K8 = cues(sc('pushing-yield'), {more: 'To get more', excess: 'Add an excess', shifts: 'The system shifts', three: 'With three times', nine: 'nine tenths', remove: 'Removing water', cat: 'But the catalyst', speeds: 'It speeds', sooner: 'sooner'});
export const ScenePush: React.FC = () => {
	const f = useCurrentFrame();
	const keys: Amt[] = [{at: -100, v: [0.33, 0.33, 0.67, 0.67]}, {at: K8.excess + 10, v: [0.33, 2.33, 0.67, 0.67]}, {at: K8.shifts + 10, v: [0.1, 2.1, 0.9, 0.9]}, {at: K8.remove + 10, v: [0.1, 2.1, 0.9, 0.4]}];
	return (
		<Overlay>
			<TaskLine text="Yield: pushing it up" at={K8.more} size={54} y={130} />
			<EqRow left={EQL(0)} right={EQR(0)} cx={960} y={270} size={38} len={200} arrow={{at: 0, eqAt: 0}} />
			<g opacity={vis(f, K8.shifts, K8.cat)}><Tag x={960} y={318} text="shifts right →" at={K8.shifts} size={30} color={NAVY} fill="#e7edf8" anchor="middle" /></g>
			<Tag x={96} y={190} text="M5: Le Chatelier: an added substance is partly used up" at={K8.more + 20} out={K8.three} size={22} />
			<FlaskIcons x={FL.x} y={FL.y} at={-100} keys={keys} />
			<Tag x={FL.x} y={FL.y + 440} text="excess ethanol" at={K8.excess} out={K8.nine} size={28} color="#2d6f9e" fill="#e3f0fa" anchor="middle" />
			<Tag x={FL.x} y={FL.y + 440} text="remove water → shifts right" at={K8.remove} size={28} color="#4f86ad" fill="#dcebf6" anchor="middle" o={dimAt(f, K8.cat, 0.5)} />
			<YieldBar x={YB.x} y={YB.y} w={YB.w} at={-100} keys={[{at: -100, v: 0.67}, {at: K8.nine - 10, v: 0.9}]} ghost={{v: 0.67, at: K8.nine - 10, label: 'equal amounts: 2/3'}} label="ester formed from the acid" />
			<Tag x={YB.x} y={YB.y + 110} text="3 × ethanol: about 9/10 of the acid" at={K8.nine} size={28} color="#a8761a" fill="#fbedd0" o={dimAt(f, K8.remove, 0.6)} />
			<Crossed x={1000} y={760} text="more catalyst → more ester" at={K8.cat} cross={K8.cat + 30} note="catalyst: faster, not more" size={32} />
			<Tag x={1000} y={900} text="M5: a catalyst speeds both directions equally" at={K8.speeds} size={22} />
			{void K8.sooner}
		</Overlay>
	);
};

// ---------- 9. Getting the ester out ----------
const K9 = cues(sc('separating-identifying'), {after: 'After reflux', pour: 'Pour it', dissolve: 'dissolve', layer: 'own layer', wash: 'Wash it', salt: 'becomes a salt', co2: 'carbon dioxide', vent: 'vented', then: 'Then separate', dry: 'dry the', distil: 'and distil', s77: 'seventy seven', e78: 'seventy eight', rough: 'rough check'});
const MIX = ['ester', 'acid', 'alcohol', 'water', 'H₂SO₄'];
export const SceneSeparate: React.FC = () => {
	const f = useCurrentFrame();
	const FX = 760, FT = 200, FH = 680;
	const up = ptOn(FUNNEL.clear, FX, FT, FH, 1000, 770), lo = ptOn(FUNNEL.clear, FX, FT, FH, 1000, 960), stop = ptOn(FUNNEL.clear, FX, FT, FH, 1000, 250);
	const lw = ptOn(FUNNEL.clear, FX, FT, FH, 900, 880), lw2 = ptOn(FUNNEL.clear, FX, FT, FH, 1100, 1040);
	const fo = dimAt(f, K9.distil, 0.3);
	const listO = dimAt(f, K9.wash, 0.25) * (1 - prog(f, K9.distil, 12));
	return (
		<Overlay>
			<TaskLine text="Get it out" at={K9.after} size={54} y={130} />
			<g opacity={listO}>
				{MIX.map((t, i) => {
					const mv = i === 2 || i === 4 ? smooth(prog(f, K9.dissolve + (i === 4 ? 8 : 0), 30)) : 0;
					const x0 = 140, y0 = 280 + i * 60;
					const x = x0 + (lo[0] - 60 - x0) * mv, y = y0 + (lo[1] - y0) * mv;
					return <g key={i} opacity={vis(f, K9.after + 30 + i * 12) * (1 - 0.8 * prog(f, K9.dissolve + 34, 10) * (mv > 0 ? 1 : 0))}><Sx x={x} y={y} text={t} size={34} color={i === 0 ? RED : GREY} weight={800} at={-1000} /></g>;
				})}
			</g>
			<g opacity={fo}>
				<Plate p={FUNNEL.cloudy} to={FUNNEL.clear} swap={K9.layer - 10} swapDur={30} cx={FX} top={FT} h={FH} at={K9.pour} />
				<Tag x={FX} y={FT + FH + 10} text="separating funnel: mixture + water" at={K9.pour} out={K9.layer} size={24} anchor="middle" />
				<Tag x={1020} y={360} text="most ethanol and H₂SO₄ → water" at={K9.dissolve} out={K9.wash} size={24} />
				<Leader a={[1020, up[1]]} b={[up[0] + 50, up[1]]} at={K9.layer + 10} out={K9.distil} />
				<Tag x={1030} y={up[1] - 24} text="ester layer (less dense here)" at={K9.layer + 10} out={K9.distil} size={26} color="#a8761a" fill="#fbedd0" />
				<Leader a={[1020, lo[1] + 40]} b={[lo[0] + 40, lo[1]]} at={K9.layer + 20} out={K9.distil} />
				<Tag x={1030} y={lo[1] + 16} text="water layer" at={K9.layer + 20} out={K9.distil} size={26} color="#4f86ad" fill="#dcebf6" />
				<Tag x={1030} y={lo[1] + 80} text="check densities: don't assume" at={K9.layer + 30} out={K9.wash} size={20} />
				<Tag x={96} y={260} text="wash: Na₂CO₃(aq)" at={K9.wash + 10} out={K9.distil} size={30} color={NAVY} fill="#e7edf8" />
				<Tag x={96} y={330} text="acid → salt (–COO⁻ Na⁺): dissolves in the water layer" at={K9.salt} out={K9.distil} size={22} />
				<Bubbles x={lw[0]} y={lw[1]} w={lw2[0] - lw[0]} h={lw2[1] - lw[1]} at={K9.co2} stop={K9.distil} every={5} />
				<Arrow2 a={[stop[0] + 60, stop[1] + 30]} b={[stop[0] + 150, stop[1] - 40]} at={K9.vent} out={K9.distil} color={NAVY} />
				<Tag x={stop[0] + 160} y={stop[1] - 80} text="vent CO₂ often" at={K9.vent} out={K9.distil} size={26} color={NAVY} fill="#e7edf8" />
			</g>
			<Plate p={DISTIL} cx={1420} top={300} h={320} at={K9.distil} />
			{['separate', 'dry', 'distil'].map((t, i) => <Tag key={i} x={1100 + i * 250} y={680} text={t + (i < 2 ? '  →' : '')} at={[K9.then, K9.dry, K9.distil][i]} size={30} color={INK} fill="#fffdf8" />)}
			<Tag x={1100} y={770} text="collected near 77 °C" at={K9.s77} size={28} color="#2f8a5b" fill="#e3f3e9" />
			<Tag x={1100} y={830} text="(ethanol 78 °C: rough check)" at={K9.rough - 10} size={24} />
			<Tag x={1100} y={900} text="no fizz with carbonate: acid removed" at={K9.rough + 16} size={24} color="#2f8a5b" fill="#e3f3e9" />
			{void K9.e78}
		</Overlay>
	);
};

// ---------- 10. Flow chart ----------
const K10 = cues(sc('flow-chart'), {even: 'You can even', first: 'First, oxidise', make: 'to make ethanoic', then: 'Then react', more: 'more ethanol', conc: 'concentrated sulfuric', flow: 'In a flow', box: 'each box', arrow: 'each arrow', start: 'Start one', ethene: 'at ethene', road: 'main road', ester: 'ester', only: 'Only a primary'});
export const SceneFlow: React.FC = () => {
	const f = useCurrentFrame();
	const Y = 470;
	const pl = (a: number) => 1 + 0.12 * Math.max(0, Math.sin(Math.min(1, Math.max(0, (f - a) / 24)) * Math.PI));
	const Lab: React.FC<{x: number; y: number; t: string; at: number; pulse: number; color?: string}> = ({x, y, t, at, pulse, color = NAVY}) => <g transform={`translate(${x},${y}) scale(${pl(pulse)}) translate(${-x},${-y})`}><Sx x={x} y={y} text={t} size={22} color={color} anchor="middle" weight={700} at={at} /></g>;
	return (
		<Overlay>
			<TaskLine text="Flow chart" at={K10.even} size={54} y={130} />
			<Tag x={96} y={190} text="from ethanol alone?" at={K10.even + 20} out={K10.first + 30} size={24} />
			<Box x={60} y={Y} w={250} lines={['ethene', 'CH₂=CH₂']} at={K10.ethene} grey />
			<Arrow2 a={[316, Y + 50]} b={[404, Y + 50]} at={K10.ethene + 10} color={GREY} />
			<Lab x={360} y={Y + 140} t="steam, H₃PO₄," at={K10.ethene + 14} pulse={-100} color={GREY} />
			<Lab x={360} y={Y + 166} t="about 300 °C" at={K10.ethene + 14} pulse={-100} color={GREY} />
			<Box x={410} y={Y} w={270} lines={['ethanol', 'CH₃CH₂OH']} at={K10.even} />
			<Arrow2 a={[686, Y + 50]} b={[896, Y + 50]} at={K10.first} color={NAVY} width={5} />
			<Lab x={790} y={Y - 50} t="K₂Cr₂O₇ / H⁺," at={K10.first + 10} pulse={K10.arrow} />
			<Lab x={790} y={Y - 22} t="heat under reflux" at={K10.first + 14} pulse={K10.arrow} />
			<Box x={900} y={Y} w={300} lines={['ethanoic acid', 'CH₃COOH']} at={K10.make} />
			<Arrow2 a={[1206, Y + 50]} b={[1416, Y + 50]} at={K10.then} color={NAVY} width={5} />
			<Lab x={1310} y={Y - 50} t="conc. H₂SO₄," at={K10.conc} pulse={K10.arrow + 20} />
			<Lab x={1310} y={Y - 22} t="heat under reflux" at={K10.conc + 6} pulse={K10.arrow + 20} />
			<Arrow2 a={[1310, Y + 230]} b={[1310, Y + 64]} at={K10.more} color={NAVY} width={4} />
			<Sx x={1310} y={Y + 270} text="+ more ethanol" size={24} color={NAVY} anchor="middle" weight={700} at={K10.more} />
			<Box x={1420} y={Y} w={440} lines={['ethyl ethanoate', 'CH₃COOCH₂CH₃ + H₂O']} at={K10.conc + 20} />
			<Tag x={960} y={850} text="box = compound; arrow = reagents + conditions" at={K10.box} size={28} color={NAVY} fill="#e7edf8" anchor="middle" />
			<TaskLine text="alkene → primary alcohol → acid → ester" at={K10.road} size={46} x={400} y={300} color={TEAL} />
			<Tag x={545} y={Y + 210} text="C08a: secondary → ketone, not acid" at={K10.only} size={22} anchor="middle" />
			{void K10.flow}{void K10.start}{void K10.ester}{void INK}
		</Overlay>
	);
};

// ---------- 11. Memory aid ----------
const K11 = cues(sc('memory-aid'), {so: 'So, acid', name: 'In the name', oate: 'oate', excess: 'Excess reactant', cat: 'The catalyst', esc: 'escapes'});
const CARDS = ['cut at the single-bonded O: the C=O side is the acid', 'yield up: excess reactant, remove water', 'Catalyst: faster, not more. Heat: faster. Reflux: nothing escapes.'];
export const SceneAid: React.FC = () => {
	const f = useCurrentFrame();
	const at = [K11.name, K11.excess, K11.cat];
	return (
		<Overlay>
			{CARDS.map((c, i) => <Tag key={i} x={120} y={200 + i * 90} text={c} at={at[i]} size={30} color={NAVY} fill="#fffdf8" o={at[i + 1] === undefined ? 1 : dimAt(f, at[i + 1], 0.5)} />)}
			<TaskLine text="acid + alcohol ⇌ ester + water" at={K11.so} size={60} x={120} y={640} color={TEAL} />
			<TaskLine text="Alcohol gets '-yl' (first), acid gets '-oate' (second)." at={K11.oate} size={52} x={120} y={780} color={TEAL} />
			{void K11.esc}
		</Overlay>
	);
};
