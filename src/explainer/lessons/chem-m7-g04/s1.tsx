// M7 G04 scenes 1 to 2d: the hook (four question shapes; find the backbone) and question 1 (but-1-ene: which carbons
// make the chain; the three-unit section and the circled repeat unit; the four-carbon backbone crossed).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {DrawPath, prog} from '../../kit';
import {Overlay, PauseHold, Sx, smooth} from '../chem-m6-c01/parts';
import {Crossed, QCardX, Tag} from '../chem-m7-c01/molecules';
import type {V2} from '../chem-m7-c01/molecules';
import {Mol2D, cmol, dimAt, vis} from '../chem-m7-c04a/parts';
import {Plate, RingAt} from '../chem-m7-c06/parts';
import {Badge, QStrip} from '../chem-m7-g01/board';
import {CCount, PolyBox, Ring2, Row, T, Tracer, rowGeo} from '../chem-m7-c15/parts';
import type {Tok} from '../chem-m7-c15/parts';
import {Heading, OBJ, PVCP, hold, sc} from './common';
import {AM, AnsFrame, Back3, GREY, INK, INK_SOFT, NAVY, RED, TEAL} from './board';

const u = (line: number, phrase: string, at: number) => ({line, phrase, at, color: AM});

// ---------- 1. Hook ----------
const KH = cues(sc('hook'), {four: 'four shapes', draw: 'Draw a chain', find: 'Find the monomers', decide: 'Decide whether', prop: 'property', each: 'Each one', backbone: 'backbone', here: 'Here are', pause: 'Pause and', step: 'one step'});
const BUT = cmol([{ul: 'H', dl: 'H'}, {u: 'H'}, {u: 'H', d: 'H'}, {u: 'H', d: 'H', r: 'H'}], [2]);
const GEN: Tok[] = [{l: 'C', up: 'H', dn: 'H', w: 60}, {l: 'C', up: 'H', dn: 'R', w: 60}];
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const thumbs = [KH.draw, KH.find, KH.decide, KH.prop];
	const num = KH.here;
	const box = (i: number): [number, number] => [1180 + (i % 2) * 360, 250 + Math.floor(i / 2) * 270];
	const gg = rowGeo(GEN, 560, 560, 1.3, 'middle', 60, 60);
	const hg = rowGeo([T.O, T.CH2, T.CH2, T.O, T.CO, T.R, T.CO], box(1)[0] + 165, box(1)[1] + 130, 0.42, 'middle', 40, 40);
	const bOut = KH.here - 10;
	return (
		<>
			<Heading text="Polymer questions: draw, recover, classify, explain" at={4} size={54} />
			<Overlay>
				{thumbs.map((t, i) => {
					const [x, y] = box(i);
					const o = vis(f, t);
					if (o <= 0.01) return null;
					return (
						<g key={i} opacity={o} transform={`translate(0,${(1 - smooth(prog(f, t, 14))) * 30})`}>
							<rect x={x} y={y} width={330} height={230} rx={16} fill="#fffdf8" stroke="rgba(60,45,20,0.22)" strokeWidth={2.5} />
							{f >= num ? <g opacity={prog(f, num + i * 6, 10)}><rect x={x + 12} y={y + 12} width={56} height={34} rx={8} fill="#0d6b52" /><Sx x={x + 40} y={y + 37} text={`Q${i + 1}`} size={22} color="#fffdf8" anchor="middle" weight={800} at={-1000} /></g> : null}
						</g>
					);
				})}
				<Mol2D m={BUT} x={box(0)[0] + 165} y={box(0)[1] + 120} s={0.5} at={KH.draw} />
				<Row toks={[T.O, T.CH2, T.CH2, T.O, T.CO, T.R, T.CO]} x={box(1)[0] + 165} y={box(1)[1] + 130} s={0.42} anchor="middle" at={KH.find} contL={40} contR={40} />
				<Ring2 c={[(hg.cx[3] + hg.cx[4]) / 2, hg.y - 8]} rx={34} ry={32} at={KH.find + 16} />
				<Row toks={[{l: 'C', up: 'H', dn: 'H', w: 50}, {l: 'C', up: 'H', dn: 'Cl', w: 50}]} x={box(2)[0] + 90} y={box(2)[1] + 120} s={0.55} anchor="middle" at={KH.decide} contL={40} contR={40} br={{a: 0, b: 1, at: -100}} />
				<Row toks={[T.O, {l: 'C', up: 'H', dn: 'CH₃', w: 50}, T.CO]} x={box(2)[0] + 240} y={box(2)[1] + 120} s={0.55} anchor="middle" at={KH.decide + 6} contL={40} contR={40} br={{a: 0, b: 2, at: -100}} />
				<PolyBox x={box(3)[0] + 20} y={box(3)[1] + 60} w={140} h={150} at={KH.prop} c={{sites: 1, hb: 1}} n={4} per={60} />
				<PolyBox x={box(3)[0] + 175} y={box(3)[1] + 60} w={140} h={150} at={KH.prop + 4} c={{disp: 1}} n={4} />
				<Plate p={OBJ} cx={1530} top={800} h={150} at={KH.prop + 10} />
				<Tag x={1360} y={190} text="HSC-style questions, written for HSCScience" at={num + 20} size={22} />
				<g opacity={vis(f, KH.backbone - 6, bOut)}>
					<Row toks={GEN} x={gg.x0} y={560} s={1.3} at={KH.backbone - 6} contL={60} contR={60} br={{a: 0, b: 1, at: KH.backbone}} />
					<Tracer g={{...gg, cx: [gg.L - 60 * 1.3, ...gg.cx, gg.R + 60 * 1.3], hw: [6, ...gg.hw, 6]}} idx={[0, 1, 2, 3]} at={[KH.backbone + 10, KH.backbone + 22, KH.backbone + 34, KH.backbone + 46]} dy={0} />
					<Tag x={560} y={760} text="backbone: through the brackets" at={KH.backbone + 20} size={30} color={NAVY} fill="#e7edf8" anchor="middle" />
				</g>
				<Back3 at={KH.backbone + 30} build={KH.backbone + 30} dimAt={KH.here} />
				{void KH.four}{void KH.each}{void KH.pause}{void KH.step}
			</Overlay>
		</>
	);
};

// ---------- question 1 ----------
export const Q1 = ['But-1-ene, CH₂=CH–CH₂–CH₃, forms an addition polymer that is used to make', 'hot-water pipes.', 'Draw a section of this polymer showing three repeat units. Circle one repeat unit.'];
const C0: Tok = {l: 'C', up: 'H', dn: 'H', w: 110}, C1: Tok = {l: 'C', up: 'H', side: 2, w: 110};
const SEC: Tok[] = [C0, C1, C0, C1, C0, C1];
const UQ = (T1: {mono?: number; add?: number; sec?: number; circ?: number}) => [u(0, 'But-1-ene, CH₂=CH–CH₂–CH₃', T1.mono ?? -100), u(0, 'addition polymer', T1.add ?? -100), ...(T1.sec !== undefined ? [u(2, 'a section of this polymer showing three repeat units', T1.sec)] : []), ...(T1.circ !== undefined ? [u(2, 'Circle one repeat unit', T1.circ)] : [])];

// ---------- 2a. Question 1 ----------
const KA = cues(sc('q1-question'), {q: 'Question one', but: 'But one', draw: 'Draw a section', pause: 'Pause here'});
export const SceneQ1Question: React.FC = () => {
	const h = hold('q1-question');
	return (
		<>
			<Heading text="Question 1" at={KA.q} size={52} />
			<Overlay>
				<QCardX lines={Q1} at={KA.but} y={175} size={30} w={1360} />
				<Plate p={PVCP} cx={1680} top={210} h={120} at={KA.but + 20} />
				<Tag x={1680} y={350} text="a polymer pipe" at={KA.but + 26} size={22} anchor="middle" />
				<Mol2D m={BUT} x={700} y={560} s={1} at={KA.but + 10} />
				<AnsFrame x={140} y={700} w={1100} h={120} at={KA.draw + 10} />
				<PauseHold h={h} at={KA.pause} x={140} y={900} cx={1650} cy={850} />
				<Back3 hold={h} />
			</Overlay>
		</>
	);
};

// ---------- 2b. Which carbons make the chain ----------
const KB = cues(sc('q1-backbone'), {start: 'Start with', only: 'only its two', every: 'everything else', in: 'In but one', c1: 'So carbon one', c2: 'Carbon two', ethyl: 'ethyl'});
export const SceneQ1Backbone: React.FC = () => {
	const f = useCurrentFrame();
	const X = 860, Y = 520, S = 1.3;
	const cp = (i: number): V2 => [X + BUT.atoms[BUT.C[i]].p[0] * S, Y];
	const sw = KB.c1;
	const eth = new Set<number>();
	BUT.atoms.forEach((_, i) => { const c = BUT.bonds.find(b => (b.a === i || b.b === i) && (b.a === BUT.C[2] || b.b === BUT.C[2] || b.a === BUT.C[3] || b.b === BUT.C[3])); if (c || i === BUT.C[2] || i === BUT.C[3]) eth.add(i); });
	eth.delete(BUT.C[1]);
	const dimE = 1 - 0.6 * prog(f, KB.only + 10, 12);
	const og = rowGeo([C0, C1], 860, Y, S * 0.85, 'middle', 60, 60);
	const ethC = og.dn(1);
	return (
		<Overlay>
			<Badge text="Draw from a monomer" at={6} />
			<QStrip lines={Q1} under={UQ({mono: KB.start, add: KB.start + 10})} />
			<g opacity={1 - prog(f, sw + 10, 10)}>
				<Mol2D m={BUT} x={X} y={Y} s={S} at={0} glow={{[BUT.C[0]]: [KB.start + 6, sw], [BUT.C[1]]: [KB.start + 6, sw]}} atomO={i => (eth.has(i) ? dimE : 1)} col={{[BUT.C[2]]: GREY, [BUT.C[3]]: GREY}} />
				<CCount pts={[0, 1, 2, 3].map(cp)} at={KB.in} step={8} dy={-150} />
				<Tag x={(cp(0)[0] + cp(1)[0]) / 2} y={680} text="these two join the backbone" at={KB.only} size={28} color={NAVY} fill="#e7edf8" anchor="middle" />
			</g>
			<Row toks={[C0, C1]} x={og.x0} y={Y} s={S * 0.85} at={sw + 4} contL={60} contR={60} contO={smooth(prog(f, sw + 14, 20))} />
			<RingAt c={[ethC[0], ethC[1] + 60]} rx={90} ry={130} at={KB.ethyl} />
			<Tag x={ethC[0] + 120} y={ethC[1] + 20} text="ethyl: hangs off" at={KB.ethyl + 6} size={28} color={RED} fill="#f9e1dc" />
			<Tag x={ethC[0] + 120} y={ethC[1] + 90} text="per repeat unit: 2 backbone carbons + 1 ethyl branch" at={KB.ethyl + 30} size={22} />
			<Back3 lit={{1: KB.only}} />
			{void KB.every}{void KB.c2}{void INK}
		</Overlay>
	);
};

// ---------- 2c. Three units, then circle one ----------
const KC = cues(sc('q1-section'), {now: 'Now join', times: 'times', circle: 'Circle any', that: "That's one", check: 'check it', three: 'Three units', bonds: 'bonds'});
export const SceneQ1Section: React.FC = () => {
	const f = useCurrentFrame();
	const Y = 470, S = 0.9;
	const g = rowGeo(SEC, 960, Y, S, 'middle', 60, 60);
	const j = smooth(prog(f, KC.times - 30, 30));
	const joined = KC.times + 4;
	const bx = g.cx[2] - 80, bw = g.cx[3] - g.cx[2] + 160;
	return (
		<Overlay>
			<Badge text="Draw from a monomer" at={-100} />
			<QStrip lines={Q1} under={UQ({sec: KC.times - 20, circ: KC.circle})} />
			{f < joined ? [0, 1, 2].map(k => <g key={k} transform={`translate(${(k - 1) * 120 * (1 - j)},0)`}><Row toks={[C0, C1]} x={g.cx[2 * k] - g.hw[2 * k]} y={Y} s={S} at={KC.now + k * 8} /></g>) : null}
			<Row toks={SEC} x={g.x0} y={Y} s={S} at={joined - 2} stagger={0} contL={60} contR={60} />
			{f >= KC.circle ? <DrawPath d={`M${bx + 30},${Y - 100} L${bx + bw - 30},${Y - 100} Q${bx + bw},${Y - 100} ${bx + bw},${Y - 70} L${bx + bw},${Y + 230} Q${bx + bw},${Y + 260} ${bx + bw - 30},${Y + 260} L${bx + 30},${Y + 260} Q${bx},${Y + 260} ${bx},${Y + 230} L${bx},${Y - 70} Q${bx},${Y - 100} ${bx + 30},${Y - 100} Z`} at={KC.circle} dur={22} color={NAVY} width={5} /> : null}
			<AnsFrame x={g.x0 - 40} y={Y - 150} w={g.x1 - g.x0 + 80} h={440} at={KC.that} />
			<Tag x={1500} y={300} text="repeat unit: [–CH₂–CH(C₂H₅)–]ₙ" at={KC.that} out={KC.check} size={24} />
			<Tag x={960} y={800} text="ethyl groups: 3 ✓   |   backbone carbons: 6 ✓" at={KC.three} size={30} color={TEAL} fill="#dff2ef" anchor="middle" o={dimAt(f, KC.bonds, 0.5)} />
			{f >= KC.bonds ? [0, 1, 2, 3].map(k => <g key={k} opacity={prog(f, KC.bonds + k * 10, 8)}><Sx x={[g.cx[2], g.cx[3], g.cx[3], g.cx[3]][k] + 30} y={[Y, Y, Y + 84 * S, Y + 168 * S][k] - 22} text="4" size={26} color={AM} weight={800} at={-1000} /></g>) : null}
			<Tag x={960} y={880} text="four bonds each" at={KC.bonds + 30} size={28} color={NAVY} fill="#e7edf8" anchor="middle" />
			<Back3 ticks={{1: [KC.three]}} />
		</Overlay>
	);
};

// ---------- 2d. The classic mistake ----------
const KD = cues(sc('q1-mistake'), {classic: 'classic mistake', poly: 'polyethylene', only: 'Only the'});
export const SceneQ1Mistake: React.FC = () => {
	const g = rowGeo([C0, C1], 1400, 560, 0.8, 'middle', 60, 60);
	return (
		<Overlay>
			<Badge text="Draw from a monomer" at={-100} />
			<QStrip lines={Q1} under={UQ({sec: -100, circ: -100})} />
			<Crossed x={140} y={500} text="–CH₂–CH₂–CH₂–CH₂–" at={KD.classic} cross={KD.poly} note="only the C=C carbons join the chain" size={44} />
			<Row toks={[C0, C1]} x={g.x0} y={560} s={0.8} at={KD.only - 10} contL={60} contR={60} br={{a: 0, b: 1, at: KD.only}} />
			<RingAt c={[g.cx[1], 560 + 100]} rx={70} ry={105} at={KD.only + 10} />
			<Back3 ticks={{1: [-100]}} />
			{void INK_SOFT}
		</Overlay>
	);
};
