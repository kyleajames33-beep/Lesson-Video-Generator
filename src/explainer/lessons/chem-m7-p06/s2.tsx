// M7 P06 scenes 7 to 12: the oil test (layers shake to an emulsion and separate as the timer stops; the line-up with
// four timers), why the oil test agrees (the free soap counter: coated droplets pass in soft water; in hard water six
// soap particles lock into scum, four coat part of two droplets and the droplets merge; two tests agree), reliability
// (results table, row brackets, the ringed odd value), validity and accuracy (three feature-fix rows; the average froth
// line), the risk table and the memory aid.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {prog} from '../../kit';
import {Overlay, PicH, RTable, Sx, TaskLine, VCard, picW, smooth} from '../chem-m6-p02/parts';
import {Crossed, Tag, TickMark} from '../chem-m7-c01/molecules';
import type {V2} from '../chem-m7-c01/molecules';
import {PlateC, dimAt, vis} from '../chem-m7-c04a/parts';
import {Plate, RingAt} from '../chem-m7-c06/parts';
import {CA, Ion, OIL, OIL_SOFT, SoapSym, kpos} from '../chem-m7-c12/parts';
import {GLASSES, OW, ST, STOPPER, TG, WASTE, sc} from './common';
import {CoatDrop, DETC, FrothBars, GREENC, HBr, INK, INK_SOFT, LINE, NAVY, OilTimer, SOAPC, Slot, TERRA, row6, tp} from './parts';
import type {Kind, SlotP} from './parts';

const Note: React.FC<{x: number; y: number; text: string; at: number; out?: number; o?: number; anchor?: 'start' | 'middle' | 'end'}> = ({x, y, text, at, out, o = 1, anchor = 'start'}) => <Tag x={x} y={y} text={text} at={at} out={out} size={20} o={o} anchor={anchor} />;

// ---------- 7. Part B: the oil test ----------
const K7 = cues(sc('oil-test'), {froth: 'Froth', part: 'part two', set: 'Set up', add: 'add one', stopper: 'stopper,', shake: 'shake ten', then: 'Then time', reappear: 'reappear', ex: 'In the example', quickly: 'quickly', soft: 'With soap in soft', cloudy: 'stays cloudy', longer: 'much longer.', hard: 'With soap in hard', sooner: 'sooner.'});
const L7 = row6(260, 210, 560, 340);
export const SceneOil: React.FC = () => {
	const f = useCurrentFrame();
	const S: SlotP = {cx: 480, top: 230, h: 600};
	const base = tp(S, 1000, 1749);
	const ang = f >= K7.shake && f < K7.shake + 50 ? 8 * Math.sin(((f - K7.shake) / 5) * Math.PI) * Math.sin(((f - K7.shake) / 50) * Math.PI) : 0;
	const em = prog(f, K7.shake + 10, 30) * (1 - prog(f, K7.quickly - 24, 30));
	const big = vis(f, K7.add - 30, K7.soft - 20);
	const ph2 = K7.soft - 20;
	const kinds: Kind[] = ['emulsion', 'emulsion', 'emulsion', 'emulsion', 'layers', 'layers'];
	const ats = [K7.soft, K7.hard, K7.cloudy - 50, K7.cloudy - 40, ph2, ph2 + 6];
	return (
		<Overlay>
			<TaskLine text="Part B: oil test" at={K7.froth} size={54} y={130} />
			<Note x={480} y={110} text="froth isn't cleaning: test how long oil stays spread out" at={K7.part} out={K7.reappear} />
			<g opacity={big}>
				<g transform={`rotate(${ang},${base[0]},${base[1]})`}>
					<Plate p={OW.layers} cx={S.cx} top={S.top} h={S.h} />
					<Plate p={OW.emulsion} cx={S.cx} top={S.top} h={S.h} o={em} />
				</g>
				<Tag x={S.cx} y={S.top + S.h + 14} text="water only + oil" at={K7.add - 20} size={24} anchor="middle" />
				<OilTimer x={S.cx + 190} y={330} r={44} at={K7.then - 6} start={K7.then} stop={K7.quickly} label="about 40 s" />
				<Tag x={S.cx + 120} y={430} text="example results" at={K7.quickly + 10} size={20} color="#a8761a" fill="#fbeec4" />
			</g>
			<g opacity={dimAt(f, ph2, 0.45)}>
				<Sx x={900} y={260} text="fresh tubes; add 1 mL oil; stopper; shake 10 times;" size={30} color={INK} weight={600} at={K7.set} />
				<Sx x={900} y={310} text="time until a clear oil layer reappears (stop at 10 min)" size={30} color={INK} weight={600} at={K7.then} />
				<Tag x={900} y={340} text="measures: how long the oil stays dispersed (not oil removed from fabric)" at={K7.reappear} size={20} color={NAVY} fill="#e7edf8" />
			</g>
			{L7.map((T, i) => (
				<g key={i}>
					<Slot S={T} at={ats[i]} kind={kinds[i]} to={i === 1 ? 'layers' : undefined} swap={i === 1 ? K7.sooner - 30 : undefined} chip={{...LINE[i], at: ats[i], below: true}} chipSize={20} />
					<OilTimer x={T.cx} y={478} r={36} at={ats[i]} start={i >= 4 ? ats[i] : i === 1 ? K7.hard : ph2} stop={i >= 4 ? ats[i] : i === 1 ? K7.sooner : K7.longer} label={i >= 4 ? 'about 40 s' : i === 1 ? 'about 2 min' : '> 10 min'} color={i === 1 ? TERRA : NAVY} />
				</g>
			))}
			<Tag x={1520} y={700} text="example results" at={K7.soft + 10} size={22} color="#a8761a" fill="#fbeec4" />
			{void K7.stopper}{void K7.ex}
		</Overlay>
	);
};

// ---------- 8. Why the oil test agrees ----------
const K8 = cues(sc('oil-agrees'), {that: 'That cloudiness', tiny: 'tiny oil', soap: 'Soap particles', tails: 'tails', heads: 'heads', coating: 'the coating', apart: 'apart.', hard: 'In hard', locked: 'locked', less: 'less is left', join: 'join up', faster: 'faster.', when: 'When the', stronger: 'stronger.'});
const SOAP_START: V2[] = [[1260, 350], [1380, 330], [1500, 350], [1620, 340], [1700, 440], [1240, 800], [1400, 830], [1540, 810], [1680, 790], [1730, 660]];
const CAS: V2[] = [[1290, 420], [1460, 360], [1640, 440]];
export const SceneAgrees: React.FC = () => {
	const f = useCurrentFrame();
	const left = vis(f, K8.soap - 10) * dimAt(f, K8.when, 0.35);
	const d1 = kpos(f, [{at: -100, p: [300, 420]}, {at: K8.apart - 20, p: [660, 420]}], 60);
	const d2 = kpos(f, [{at: -100, p: [660, 620]}, {at: K8.apart - 20, p: [300, 620]}], 60);
	const right = vis(f, K8.hard - 6) * dimAt(f, K8.when, 0.35);
	const m = smooth(prog(f, K8.join, 30));
	const A: V2 = [1330 + 120 * m, 600], B: V2 = [1590 - 140 * m, 600];
	const merged = prog(f, K8.join + 24, 10);
	const lockT = smooth(prog(f, K8.locked, 30)), coatT = smooth(prog(f, K8.less, 30));
	const grey = prog(f, K8.locked + 24, 10) > 0.5;
	const sym = (i: number) => {
		if (i < 6) {
			const c = CAS[Math.floor(i / 2)], sd = i % 2 ? 1 : -1;
			const tgt: V2 = [c[0] + sd * 52, c[1]];
			const p: V2 = [SOAP_START[i][0] + (tgt[0] - SOAP_START[i][0]) * lockT, SOAP_START[i][1] + (tgt[1] - SOAP_START[i][1]) * lockT];
			return <SoapSym key={i} x={p[0]} y={p[1]} ang={sd > 0 ? 0 : Math.PI} s={0.75} len={90} head={grey ? 'grey' : 'neg'} />;
		}
		const k = i - 6, D = k < 2 ? A : B, a = [-Math.PI / 2, Math.PI, -Math.PI / 2, 0][k];
		const tgt: V2 = [D[0] + Math.cos(a) * 92, D[1] + Math.sin(a) * 92];
		const p: V2 = [SOAP_START[i][0] + (tgt[0] - SOAP_START[i][0]) * coatT, SOAP_START[i][1] + (tgt[1] - SOAP_START[i][1]) * coatT];
		return <SoapSym key={i} x={p[0]} y={p[1]} ang={coatT > 0.5 ? a + Math.PI : -Math.PI / 2} s={0.85} len={70} />;
	};
	return (
		<Overlay>
			<TaskLine text="Why the oil test agrees" at={K8.that} size={50} y={130} />
			<Tag x={960} y={170} text="emulsion: tiny oil droplets spread through water" at={K8.tiny} size={26} color={NAVY} fill="#e7edf8" anchor="middle" o={dimAt(f, K8.soap, 0.5)} />
			<g opacity={left}>
				<Sx x={480} y={290} text="soft water" size={34} color="#4f86ad" anchor="middle" hand weight={700} at={K8.soap - 10} />
				<CoatDrop cx={d1[0]} cy={d1[1]} r={70} n={5} at={K8.soap - 10} build={[K8.soap, K8.tails]} />
				<CoatDrop cx={d2[0]} cy={d2[1]} r={70} n={5} at={K8.soap - 10} build={[K8.soap + 10, K8.heads]} a0={0.6} />
				<Note x={120} y={760} text="c12: tails into oil, heads into water" at={K8.tails} />
				<Tag x={120} y={810} text="coated droplet: an oil droplet, not a micelle" at={K8.heads} size={22} color={NAVY} fill="#e7edf8" />
			</g>
			<line x1={960} y1={260} x2={960} y2={860} stroke="rgba(60,45,20,0.18)" strokeWidth={3} strokeDasharray="10 8" opacity={right} />
			<g opacity={right}>
				<Sx x={1460} y={250} text="hard water" size={34} color="#2a9d8f" anchor="middle" hand weight={700} at={K8.hard - 6} />
				{CAS.map((c, i) => <Ion key={i} x={c[0]} y={c[1]} t="Ca²⁺" r={26} color={grey ? '#9a948a' : CA} />)}
				<g opacity={1 - merged}>
					<circle cx={A[0]} cy={A[1]} r={64} fill={OIL_SOFT} stroke={OIL} strokeWidth={3} />
					<circle cx={B[0]} cy={B[1]} r={64} fill={OIL_SOFT} stroke={OIL} strokeWidth={3} />
				</g>
				{merged > 0.01 ? <ellipse cx={(A[0] + B[0]) / 2} cy={600} rx={64 + 34 * merged} ry={72} fill={OIL_SOFT} stroke={OIL} strokeWidth={3} opacity={merged} /> : null}
				{Array.from({length: 10}, (_, i) => sym(i))}
				<Tag x={1180} y={480} text="scum" at={K8.locked + 24} size={22} color={INK_SOFT} />
				<Tag x={1460} y={720} text="only 4 left to coat the oil" at={K8.less + 10} size={22} color={TERRA} fill="#f6e2d3" anchor="middle" />
				<Tag x={1460} y={780} text="bare patches touch: droplets join" at={K8.faster} size={22} color={TERRA} fill="#f6e2d3" anchor="middle" />
			</g>
			<Crossed x={120} y={870} text="soap dissolves the oil" at={K8.coating - 10} cross={K8.apart - 10} note="coated and emulsified, not dissolved" size={30} />
			<g opacity={vis(f, K8.when)}>
				<FrothBars xs={[1150, 1200, 1250, 1300]} base={1000} vals={[6.0, 0.6, 6.4, 6.1]} cols={[SOAPC, SOAPC, DETC, DETC]} at={K8.when} k={16} w={34} />
				<FrothBars xs={[1500, 1550, 1600, 1650]} base={1000} vals={[10, 2, 10, 10]} cols={[SOAPC, SOAPC, DETC, DETC]} at={K8.when + 10} k={9.6} w={34} />
				<Sx x={1225} y={1036} text="froth" size={20} color={INK_SOFT} anchor="middle" weight={700} at={-1000} />
				<Sx x={1575} y={1036} text="oil stays mixed" size={20} color={INK_SOFT} anchor="middle" weight={700} at={-1000} />
				<HBr x1={1120} x2={1680} y={880} text="same pattern: two tests agree" at={K8.stronger - 20} color={GREENC} />
				<Tag x={1700} y={960} text="example results" at={K8.when + 10} size={18} color="#a8761a" fill="#fbeec4" />
			</g>
			{void K8.join}{void picW}{void PicH}
		</Overlay>
	);
};

// ---------- 9. Reliable? ----------
const K9 = cues(sc('reliability'), {is: 'Is it reliable?', repeat: 'Repeat', pool: 'pool', if: 'If the froth', agree: 'agree', order: 'order', reliable: ['reliable.', 2], way: 'way off,', find: 'find out', report: 'report'});
const TROWS = [
	{i: 0, v: ['5.8', '6.2', '6.0', '6.0']},
	{i: 1, v: ['0.5', '0.8', '0.5', '0.6']},
	{i: 2, v: ['6.3', '6.6', '6.3', '6.4']},
	{i: 3, v: ['6.0', '6.3', '6.0', '6.1']},
];
export const SceneReliable: React.FC = () => {
	const f = useCurrentFrame();
	const cols = [180, 760, 900, 1040, 1220];
	return (
		<Overlay>
			<TaskLine text="Reliable?" at={K9.is} size={54} y={130} />
			<Tag x={1300} y={110} text="example results: froth height (cm)" at={K9.repeat} size={22} color="#a8761a" fill="#fbeec4" />
			{['tube', 'trial 1', 'trial 2', 'trial 3', 'mean'].map((h, i) => <Sx key={i} x={cols[i]} y={270} text={h} size={26} color={INK_SOFT} anchor={i ? 'middle' : 'start'} hand weight={700} at={K9.repeat + i * 4} />)}
			{TROWS.map((r, j) => {
				const y = 340 + j * 74, L = LINE[r.i];
				return (
					<g key={j}>
						<Sx x={cols[0]} y={y} text={(L.agent === 'soap' ? 'soap' : 'detergent') + ' | ' + L.water} size={28} color={L.agent === 'soap' ? SOAPC : DETC} weight={800} at={K9.repeat + 10 + j * 8} />
						{r.v.map((q, i) => <Sx key={i} x={cols[i + 1]} y={y} text={q} size={30} color={INK} anchor="middle" weight={i === 3 ? 800 : 600} at={K9.repeat + 16 + j * 8 + i * 4} />)}
						<HBr x1={cols[1] - 40} x2={cols[3] + 40} y={y + 14} dir={1} text="" at={K9.agree + j * 6} color={NAVY} size={18} />
					</g>
				);
			})}
			<Tag x={180} y={650} text="each row: repeats within 0.4 cm, same order every time" at={K9.agree + 20} size={26} color={NAVY} fill="#e7edf8" />
			<VCard x={180} y={730} w={900} h={150} title="Reliability: repeats agree?" titleAt={K9.agree} at={K9.agree} color={NAVY} lines={[{t: 'yes: the results are reliable', at: K9.reliable, size: 28}]} />
			<TickMark x={1000} y={790} at={K9.reliable} />
			<g opacity={vis(f, K9.way)}>
				<Sx x={1460} y={340} text="trial 4?" size={24} color={INK_SOFT} anchor="middle" hand weight={700} at={-1000} />
				<Sx x={1460} y={380} text="3.1" size={30} color={TERRA} anchor="middle" weight={800} at={-1000} />
				<RingAt c={[1460, 370]} rx={44} ry={30} at={K9.way + 4} color={TERRA} />
			</g>
			<Tag x={1320} y={460} text="investigate and report:" at={K9.find} size={24} color={TERRA} fill="#f6e2d3" />
			<Tag x={1320} y={512} text="fewer shakes? wrong drops?" at={K9.report} size={24} color={TERRA} fill="#f6e2d3" />
			{void K9.pool}{void K9.if}{void K9.order}
		</Overlay>
	);
};

// ---------- 10. Valid? Accurate? ----------
const K10 = cues(sc('valid-accurate'), {hand: 'Hand shaking', count: 'count', one: 'one person', read: 'Read every', coll: 'collapses.', some: 'Some detergents', soft: 'softeners,', pure: 'pure one.', acc: 'accuracy,', eye: 'eye level,', avg: 'average', tall: 'tallest'});
export const SceneValid: React.FC = () => {
	const f = useCurrentFrame();
	const S: SlotP = {cx: 1300, top: 500, h: 540};
	const [x0, yt] = tp(S, TG.x0, 570), [x1] = tp(S, TG.x1, 570);
	const bumps = [0, 1, 2, 3, 4, 5, 6].map(i => ({x: x0 + 10 + ((x1 - x0 - 20) * i) / 6, r: i === 4 ? 13 : 7 + (i % 3) * 2, dy: i === 4 ? -26 : (i % 2) * -6}));
	const rows = [
		{a: 'shaking varies', b: 'same count, same length, one person', at: K10.count, at2: K10.one},
		{a: 'froth collapses', b: 'read all at 30 s', at: K10.read, at2: K10.coll},
		{a: 'commercial detergent may contain softeners', b: 'use pure SDS', at: K10.soft, at2: K10.pure},
	];
	const eyeY = yt;
	return (
		<Overlay>
			<TaskLine text="Valid? Accurate?" at={0} size={54} y={130} />
			<g opacity={dimAt(f, K10.acc, 0.4)}>
				<VCard x={100} y={170} w={1720} h={300} title="Validity: is the difference caused by the agent and the water, not the method?" titleAt={K10.hand} at={K10.hand} color={GREENC} lines={[]} />
				{rows.map((r, i) => (
					<g key={i}>
						<Sx x={130} y={300 + i * 56} text={r.a} size={30} color={TERRA} weight={700} at={r.at} />
						<Sx x={800} y={300 + i * 56} text={'→  ' + r.b} size={30} color={GREENC} weight={800} at={r.at2} />
					</g>
				))}
			</g>
			<Sx x={100} y={580} text="Accuracy: close to the true froth height?" size={40} color={NAVY} hand at={K10.acc} />
			<g opacity={vis(f, K10.acc)}>
				<Slot S={S} at={K10.acc} kind="soft" />
				{bumps.map((b, i) => <circle key={i} cx={b.x} cy={yt + b.dy} r={b.r} fill="#fbfbfb" stroke="#b9c3cc" strokeWidth={1.5} />)}
				<line x1={x0 - 260} y1={eyeY} x2={x1 + 120} y2={eyeY} stroke={GREENC} strokeWidth={4} strokeDasharray="10 6" opacity={prog(f, K10.avg, 12)} />
				<g opacity={prog(f, K10.eye, 12)}>
					<ellipse cx={x0 - 300} cy={eyeY} rx={34} ry={18} fill="#fffdf8" stroke={INK} strokeWidth={3} />
					<circle cx={x0 - 296} cy={eyeY} r={9} fill={INK} />
				</g>
				<Tag x={x1 + 140} y={eyeY - 24} text="read here, at eye level" at={K10.avg} size={26} color={GREENC} fill="#e3f3e9" />
				<line x1={x0 - 40} y1={yt - 40} x2={x1 + 120} y2={yt - 40} stroke={TERRA} strokeWidth={3} strokeDasharray="6 6" opacity={prog(f, K10.tall, 12)} />
				<Crossed x={x1 + 140} y={yt - 110} text="tallest bubble" at={K10.tall} cross={K10.tall + 10} size={26} />
			</g>
			<Sx x={100} y={1040} text="Validity: fair test.   Reliability: repeats agree.   Accuracy: true reading." size={22} color={INK_SOFT} weight={600} at={K10.acc + 20} />
			{void K10.some}{void ST}
		</Overlay>
	);
};

// ---------- 11. Risk assessment ----------
const K11 = cues(sc('risk'), {now: 'Now the risks', low: 'low hazard,', soap: 'The soap,', sol: 'solutions', eyes: 'eyes,', glasses: 'safety glasses.', hold: 'Hold the', chips: 'chips', wipe: 'Wipe up', slip: 'slippery.', collect: 'And collect', drains: 'drains.'});
export const SceneRisk: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<Overlay>
			<Sx x={96} y={120} text="Risk assessment" size={54} color={INK} hand at={K11.now} />
			<Tag x={700} y={84} text="low hazard, not no hazard" at={K11.low} size={26} color={NAVY} fill="#e7edf8" />
			<RTable x={560} y={170} cols={[420, 340, 560]} head={['Hazard', 'Harm', 'Control']} at={K11.soap} rowH={136} size={21} headSize={28} rows={[
				{at: K11.soap, cells: [['working solutions: 0.4% soap,', '0.1% SDS, 0.001 mol/L CaCl₂'], ['possible eye irritation;', 'mild skin irritation'], ['safety glasses; rinse splashes with', 'water; wash hands afterwards']]},
				{at: K11.sol + 20, cells: [['solids, teacher only: SDS (H228,', 'H302, H315, H318, H332, H335,', 'H412); CaCl₂ (H319)'], ['flammable solid; serious', 'eye damage; irritating dust'], ['teacher weighs the solids and makes', 'the solutions; students use only the', 'dilute solutions from dropper bottles']]},
				{at: K11.hold, cells: [['stoppered test tubes', 'being shaken'], ['stopper pops, spraying;', 'a chipped tube breaks'], ['check for chips and cracks; stopper in', "firmly; point away from people; don't overfill"]]},
				{at: K11.wipe, cells: [['spilled cooking oil', 'and soap solutions'], 'slipping', 'wipe spills at once; dry the floor']},
				{at: K11.collect, cells: ['waste', ['oil blocks drains; detergents', 'harm aquatic life (SDS H412)'], ['oily mixtures: labelled waste container,', 'as the school directs; not the sink']]},
			]} />
			<RTable x={560} y={170} cols={[420, 340, 560]} head={['Hazard', 'Harm', 'Control']} at={K11.drains + 24} rowH={136} size={21} headSize={28} rows={[
				{at: K11.drains + 24, dimAt: 1e9, cells: [['working solutions: 0.4% soap,', '0.1% SDS, 0.001 mol/L CaCl₂'], ['possible eye irritation;', 'mild skin irritation'], ['safety glasses; rinse splashes with', 'water; wash hands afterwards']]},
				{at: K11.drains + 24, dimAt: 1e9, cells: [['solids, teacher only: SDS (H228,', 'H302, H315, H318, H332, H335,', 'H412); CaCl₂ (H319)'], ['flammable solid; serious', 'eye damage; irritating dust'], ['teacher weighs the solids and makes', 'the solutions; students use only the', 'dilute solutions from dropper bottles']]},
				{at: K11.drains + 24, dimAt: 1e9, cells: [['stoppered test tubes', 'being shaken'], ['stopper pops, spraying;', 'a chipped tube breaks'], ['check for chips and cracks; stopper in', "firmly; point away from people; don't overfill"]]},
				{at: K11.drains + 24, dimAt: 1e9, cells: [['spilled cooking oil', 'and soap solutions'], 'slipping', 'wipe spills at once; dry the floor']},
				{at: K11.drains + 24, dimAt: 1e9, cells: ['waste', ['oil blocks drains; detergents', 'harm aquatic life (SDS H412)'], ['oily mixtures: labelled waste container,', 'as the school directs; not the sink']]},
			]} />
			<g opacity={vis(f, K11.eyes)}>
				<PlateC p={GLASSES} cx={290} top={210} h={90} />
				<Tag x={290} y={320} text="always" at={K11.glasses} size={22} anchor="middle" />
			</g>
			<g opacity={vis(f, K11.hold) * dimAt(f, K11.wipe, 0.45)}>
				<PlateC p={STOPPER} cx={290} top={420} h={130} />
				<Tag x={290} y={570} text="stopper in firmly;" at={K11.hold + 10} size={20} anchor="middle" />
				<Tag x={290} y={612} text="point the tube away from people" at={K11.hold + 16} size={20} anchor="middle" />
			</g>
			<g opacity={vis(f, K11.drains)}>
				<PlateC p={WASTE} cx={290} top={700} h={220} />
				<Sx x={290} y={860} text="Oily" size={20} color={INK} anchor="middle" weight={800} at={-1000} />
				<Sx x={290} y={884} text="waste" size={20} color={INK} anchor="middle" weight={800} at={-1000} />
			</g>
			<Tag x={560} y={1000} text="follow your school's risk assessment and each bottle's safety data sheet" at={K11.collect + 20} size={22} />
			{void K11.chips}{void K11.slip}
		</Overlay>
	);
};

// ---------- 12. Memory aid ----------
const K12 = cues(sc('memory-aid'), {one: 'One line', soap: 'Soap makes', det: 'detergents mostly'});
export const SceneAid: React.FC = () => (
	<Overlay>
		<TaskLine text="Soap makes scum in hard water;" at={K12.soap} size={70} x={120} y={300} color="#0d6b52" />
		<TaskLine text="detergents mostly don't." at={K12.det} size={70} x={120} y={410} color="#0d6b52" />
		<Sx x={120} y={530} text="Froth and oil tests agree: fewer free soap particles." size={34} color={INK_SOFT} weight={600} at={K12.det + 20} />
		<Slot S={{cx: 1300, top: 560, h: 360}} at={K12.soap} kind="hard" chip={{agent: 'soap', water: 'hard', at: K12.soap, below: true}} chipSize={20} />
		<Slot S={{cx: 1560, top: 560, h: 360}} at={K12.det} kind="soft" chip={{agent: 'det', water: 'hard', at: K12.det, below: true}} chipSize={20} />
		{void K12.one}
	</Overlay>
);
