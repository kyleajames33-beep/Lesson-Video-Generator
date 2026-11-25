// Scenes 14 to 19: attempt 1 (alpha on aluminium-27: identify X, Q, released or absorbed) and its feedback, attempt 2
// (why Q does not depend on the projectile's kinetic energy) and its feedback, the handoff (a slow neutron splits
// uranium-235 into barium-141, krypton-92 and three neutrons; Q = +173 MeV; three neutrons head for three more
// uranium-235 nuclei; its last frame is exported as `M8V17FinalFrame`) and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading} from '../../math/studio';
import {Accent, KeyNotesScene, MemoryCard, QuestionScene} from '../../shared/scenes';
import {TYPE} from '../../shared/tokens';
import {AnswerBox, Chip, CrossedChip, Row} from '../../physics/projectile/board';
import {NucEq} from '../../physics/atom/nuclear';
import {NucleonCluster, clusterLayout} from '../../physics/atom/decay';
import {Disc} from '../../physics/atom/neutron';
import {FissionSplit, splitAt, splitSpec} from '../../physics/atom/fission';
import {ArrowFlow} from '../../physics/atom/qvalue';
import {ACCENT, A_DM, A_IN, A_OUT, A_Q, F_DM, F_IN, F_OUT, F_Q, HEAD, HEAD_NEXT, HEAD_SIZE, M, U_MEV, cap, cue, dur, hold} from './common';
import {FISSION_EQ, GREY, INK, L_AL, L_N14, L_P30, Lbl, NAVY, NEU, NEUTRON, NUC_RED, ORANGE, Shrunk, T, TEAL, U92, fx, s6, sg, u6} from './parts';

// ---------- 14. attempt 1 ----------
const AMBER_LINE = '#d08a2c';
const Q1: React.FC<{u?: boolean}> = ({u = false}) => {
	const U = (t: React.ReactNode) => (u ? <u>{t}</u> : t);
	return <>Alpha particles are fired at aluminium-27: ⁴₂He + ²⁷₁₃Al → ³⁰₁₅P + X. Atomic masses: ⁴₂He {u6(M.he)} u; ²⁷₁₃Al {u6(M.al)} u; ³⁰₁₅P {u6(M.p30)} u; ¹₀n {u6(M.n)} u; ¹₁H {u6(M.h1)} u. (a) Identify particle {U('X')}. (b) Calculate the {U('Q-value')} of the reaction in MeV. (c) State whether energy is {U('released or absorbed')}.</>;
};
/** The card's picture: labels at 42 px so they stay at least 26 px when the picture is shown at 440 px wide. */
const Pic1: React.FC<{w?: number; solved?: boolean}> = ({w = 678, solved = false}) => (
	<svg width={w} height={(w * 470) / 678} viewBox="0 0 678 470" style={{overflow: 'visible'}}>
		<rect x={4} y={4} width={670} height={462} rx={18} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={3} />
		<circle cx={60} cy={150} r={24} fill="#f6e3c2" stroke={AMBER_LINE} strokeWidth={3} />
		<text x={60} y={84} textAnchor="middle" style={T(42, '#8a5a12')}>α</text>
		<line x1={90} y1={150} x2={140} y2={150} stroke={AMBER_LINE} strokeWidth={6} strokeLinecap="round" />
		<NucleonCluster cx={220} cy={150} r={13} discs={L_AL} pFill={NUC_RED} nFill={NEUTRON} letters={false} />
		<text x={220} y={276} textAnchor="middle" style={T(42, INK)}>²⁷Al</text>
		<text x={335} y={164} textAnchor="middle" style={T(48, INK)}>→</text>
		<NucleonCluster cx={460} cy={150} r={13} discs={L_P30} pFill={NUC_RED} nFill={NEUTRON} letters={false} />
		<text x={460} y={276} textAnchor="middle" style={T(42, INK)}>³⁰P</text>
		{solved ? <g><Disc x={604} y={110} r={26} fill={NEUTRON} /><text x={604} y={196} textAnchor="middle" style={T(42, INK)}>n</text></g> : <g><circle cx={604} cy={110} r={26} fill="#fffdf8" stroke={INK} strokeWidth={3} strokeDasharray="7 5" /><text x={604} y={196} textAnchor="middle" style={T(42, INK)}>X?</text></g>}
		<rect x={110} y={330} width={458} height={78} rx={12} fill="#f1ebdf" stroke="rgba(60,45,20,0.25)" strokeWidth={2.5} />
		<text x={339} y={384} textAnchor="middle" style={T(42, INK)}>{`1 u = ${U_MEV} MeV/c²`}</text>
	</svg>
);
export const S14: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Your turn" pauseAt={cue('attempt-1', 'Pause here')} hold={hold('attempt-1')} size={34} marks={3} picture={<Pic1 />}><Q1 /></QuestionScene></Accent>;

// ---------- 15. feedback 1 ----------
export const S15: React.FC = () => {
	const id = 'feedback-1';
	const f = useCurrentFrame();
	const xn = cue(id, 'so X is a neutron'), r1 = cue(id, 'thirty point nine eight four one four one u'), r2 = cue(id, 'thirty point nine eight six nine seven eight u'), dm = cue(id, 'minus zero point zero zero two eight three seven u'), qm = cue(id, 'minus two point six four mega electron volts'), ab = cue(id, 'Energy is absorbed'), sl = cue(id, 'The slip is subtracting'), rl = cap(id, cue(id, 'calling it released'), 24);
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk accent={ACCENT} gy={350} givens={<>⁴He {u6(M.he)} u; ²⁷Al {u6(M.al)} u; ³⁰P {u6(M.p30)} u; n {u6(M.n)} u; ¹H {u6(M.h1)} u; {U_MEV} MeV/c²</>}><Q1 u /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 460, display: 'flex', flexDirection: 'column', gap: 8, width: 1180}}>
				<Row at={xn} ageAt={r1} size={44} oldSize={32}>(a) A: 4 + 27 = 30 + 1; Z: 2 + 13 = 15 + 0 → X = ¹₀n</Row>
				<Row at={r1} ageAt={qm} size={44} oldSize={32}>{`(b) m_reactants = ${u6(M.he)} + ${u6(M.al)} = ${u6(A_IN)} u`}</Row>
				<Row at={r2} ageAt={qm} size={44} oldSize={32}>{`m_products = ${u6(M.p30)} + ${u6(M.n)} = ${u6(A_OUT)} u`}</Row>
				<Row at={dm} ageAt={qm} size={44} oldSize={32}>{`Δm = ${u6(A_IN)} − ${u6(A_OUT)} = ${s6(A_DM)} u`}</Row>
				<Row at={qm} size={46}><AnswerBox at={qm + 4}>{`Q = ${s6(A_DM)} × ${U_MEV} = ${fx(A_Q, 2)} MeV`}</AnswerBox></Row>
				<Row at={ab} size={40}><AnswerBox at={ab + 4}>(c) Q &lt; 0: energy absorbed (supplied by the alpha)</AnswerBox></Row>
			</div>
			<div style={{position: 'absolute', left: 1380, top: 470}}><Pic1 w={440} solved={f >= xn} /></div>
			<CrossedChip x={1180} y={840} at={sl} crossAt={rl} size={30} caption="before − after">{`Q = ${sg(-A_Q, 2)} MeV, energy released`}</CrossedChip>
		</>
	);
};

// ---------- 16. attempt 2 ----------
const Q2: React.FC<{u?: boolean}> = ({u = false}) => {
	const U = (t: string) => (u ? <u>{t}</u> : t);
	return <>Explain why the Q-value of a nuclear reaction {U('does not depend')} on the kinetic energy of the incoming particle.</>;
};
const Pic2: React.FC<{w?: number}> = ({w = 678}) => (
	<svg width={w} height={(w * 420) / 678} viewBox="0 0 678 420" style={{overflow: 'visible'}}>
		<rect x={4} y={4} width={670} height={412} rx={18} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={3} />
		<circle cx={80} cy={130} r={24} fill="#f6e3c2" stroke={AMBER_LINE} strokeWidth={3} />
		<text x={40} y={96} textAnchor="middle" style={T(36, '#8a5a12')}>α</text>
		<line x1={110} y1={130} x2={190} y2={130} stroke={TEAL.stroke} strokeWidth={7} strokeLinecap="round" /><path d="M204,130 L184,118 L184,142 Z" fill={TEAL.stroke} />
		<text x={150} y={86} textAnchor="middle" style={T(36, TEAL.ink)}>slow</text>
		<circle cx={80} cy={300} r={24} fill="#f6e3c2" stroke={AMBER_LINE} strokeWidth={3} />
		<text x={40} y={266} textAnchor="middle" style={T(36, '#8a5a12')}>α</text>
		<line x1={110} y1={300} x2={330} y2={300} stroke={TEAL.stroke} strokeWidth={7} strokeLinecap="round" /><path d="M344,300 L324,288 L324,312 Z" fill={TEAL.stroke} />
		<text x={220} y={256} textAnchor="middle" style={T(36, TEAL.ink)}>fast</text>
		<NucleonCluster cx={520} cy={200} r={20} discs={L_N14} pFill={NUC_RED} nFill={NEUTRON} letters={false} />
		<text x={520} y={350} textAnchor="middle" style={T(36, INK)}>¹⁴N</text>
	</svg>
);
export const S16: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Last one" pauseAt={cue('attempt-2', 'Pause here')} hold={hold('attempt-2')} size={40} marks={2} picture={<Pic2 />}><Q2 /></QuestionScene></Accent>;

// ---------- 17. feedback 2 ----------
export const S17: React.FC = () => {
	const id = 'feedback-2';
	const qd = cue(id, 'Q is the difference in rest mass'), fx2 = cue(id, 'fixed by which nuclei go in and come out'), qs = cue(id, 'so Q stays the same'), sl = cue(id, 'The slip is thinking'), qb = cap(id, cue(id, 'makes Q bigger'), 24);
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk accent={ACCENT} gy={270} givens={<>explain: the Q-value does not depend on the incoming particle&apos;s kinetic energy</>}><Q2 u /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 400, display: 'flex', flexDirection: 'column', gap: 16, width: 1170}}>
				<Row at={qd} ageAt={qs} size={44} style={{whiteSpace: 'normal'}}>Q = (m<sub>reactants</sub> − m<sub>products</sub>)c²: rest masses only</Row>
				<Row at={fx2} ageAt={qs} size={44} style={{whiteSpace: 'normal'}}>masses fixed by the nuclei involved</Row>
				<Row at={qs} size={44} style={{whiteSpace: 'normal'}}><AnswerBox at={qs + 4}>extra K_in → equal extra K_out (energy conservation); Q unchanged</AnswerBox></Row>
			</div>
			<div style={{position: 'absolute', left: 1300, top: 400}}><Pic2 w={520} /></div>
			<CrossedChip x={96} y={800} at={sl} crossAt={qb} size={32} caption="Q set by masses">faster alpha → bigger Q</CrossedChip>
		</>
	);
};

// ---------- 18. handoff ----------
const HD = (() => {
	const id = 'handoff';
	return {id, sn: cue(id, 'A slow neutron hits uranium two three five'), is: cue(id, 'it splits into barium'), bk: cue(id, 'krypton ninety two, and three neutrons'), lb: cue(id, 'lighter by zero point one eight six u'), oh: cue(id, 'about one hundred and seventy three'), tn: cue(id, 'gives three neutrons out'), wc: cap(id, cue(id, 'So why can one fission event'), 8), end: dur(id) - 1};
})();
export const SPLIT = splitSpec(92, 143, 56, 141, 36, 92, 3);
export const UC = {x: 820, y: 380, r: 5.5, dist: 130, deg: -45};
export const TARGETS = [{x: 1640, y: 290}, {x: 1690, y: 450}, {x: 1640, y: 610}] as const;
const U_SMALL = clusterLayout(92, 143, 9);
export const HandoffBoard17: React.FC<{f: number; final?: boolean; heading?: boolean; chip?: boolean; marks?: boolean}> = ({f, final = false, heading = true, chip = true, marks = true}) => {
	const at = (x: number) => (final ? -60 : x);
	const o = (x: number, d = 14) => (final ? 1 : prog(f, x, d));
	const nIn = final ? 1 : prog(f, HD.sn, 50);
	const u = final ? 1 : prog(f, HD.is, 60);
	const c = splitAt(SPLIT, UC.x, UC.y, UC.r, u, UC.dist, UC.deg);
	const nOut = final ? 1 : prog(f, HD.bk, 40), toT = final ? 1 : prog(f, HD.tn, 40);
	const nx = 330 + (UC.x - 140 - 330) * nIn;
	const a = (UC.deg * Math.PI) / 180;
	return (
		<>
			{heading ? (!final ? <><SceneHeading text={HEAD} at={-200} out={HD.wc} size={HEAD_SIZE} /><SceneHeading text={HEAD_NEXT} at={HD.wc + 8} size={HEAD_SIZE} /></> : <SceneHeading text={HEAD_NEXT} at={-200} size={HEAD_SIZE} />) : null}
			<FrameSvg>
				<FissionSplit s={SPLIT} cx={UC.x} cy={UC.y} r={UC.r} u={u} dist={UC.dist} deg={UC.deg} pFill={NUC_RED} nFill={NEUTRON} glow={u > 0 && u < 0.5 ? 1 : 0} f={f} wobble={u > 0 && u < 0.45 ? 1 : 0} />
				{!final && u < 0.42 ? <g opacity={1 - prog(f, HD.is, 8)}><Disc x={nx} y={UC.y} r={18} fill={NEUTRON} text="n" /><line x1={nx + 24} y1={UC.y} x2={nx + 70} y2={UC.y} stroke={TEAL.stroke} strokeWidth={6} strokeLinecap="round" /></g> : null}
				<g opacity={o(HD.bk + 20)}><Disc x={560} y={UC.y} r={18} fill={NEUTRON} text="n" /><line x1={584} y1={UC.y} x2={630} y2={UC.y} stroke={TEAL.stroke} strokeWidth={6} strokeLinecap="round" /></g>
				{c.apart > 0.3 ? <g opacity={Math.min(1, (c.apart - 0.3) / 0.3)}>
					<line x1={c.a[0] + Math.cos(a) * (c.rA + 8)} y1={c.a[1] + Math.sin(a) * (c.rA + 8)} x2={c.a[0] + Math.cos(a) * (c.rA + 70)} y2={c.a[1] + Math.sin(a) * (c.rA + 70)} stroke={TEAL.stroke} strokeWidth={7} strokeLinecap="round" />
					<line x1={c.b[0] - Math.cos(a) * (c.rB + 8)} y1={c.b[1] - Math.sin(a) * (c.rB + 8)} x2={c.b[0] - Math.cos(a) * (c.rB + 100)} y2={c.b[1] - Math.sin(a) * (c.rB + 100)} stroke={TEAL.stroke} strokeWidth={7} strokeLinecap="round" />
				</g> : null}
				{nOut > 0.001 ? TARGETS.map((t, i) => { const sx = UC.x + 40, sy = UC.y + (i - 1) * 30, ex = sx + (t.x - 90 - sx) * (0.35 + 0.65 * toT) * nOut, ey = sy + (t.y - sy) * (0.35 + 0.65 * toT) * nOut; return <g key={i}><line x1={sx} y1={sy} x2={ex} y2={ey} stroke={GREY.stroke} strokeWidth={4} strokeDasharray="10 8" /><Disc x={ex} y={ey} r={16} fill={NEUTRON} text="n" /></g>; }) : null}
				{TARGETS.map((t, i) => <g key={i}><NucleonCluster cx={t.x} cy={t.y} r={3.8} discs={U_SMALL} pFill={NUC_RED} nFill={NEUTRON} letters={false} /><text x={t.x + 82} y={t.y + 14} style={T(40, INK)} opacity={o(HD.tn + 10)}>?</text></g>)}
			</FrameSvg>
			<Lbl x={c.a[0] + c.rA + 24} y={c.a[1] - 30} at={at(HD.bk)} color={NAVY.ink} size={30}>¹⁴¹Ba</Lbl>
			<Lbl x={c.b[0] - c.rB - 24} y={c.b[1] + 10} at={at(HD.bk + 8)} color={NAVY.ink} size={30} anchor="end">⁹²Kr</Lbl>
			<Lbl x={1650} y={205} at={-60} color={INK} size={28} anchor="middle">more uranium-235</Lbl>
			<Lbl x={UC.x} y={UC.y - 135} at={-60} out={final ? -50 : HD.is} color={INK} size={30} anchor="middle">uranium-235 (92 p, 143 n)</Lbl>
			<Lbl x={330} y={UC.y + 60} at={-60} out={final ? -50 : HD.is} color={GREY.ink} size={28} anchor="middle">slow neutron</Lbl>
			<div style={{position: 'absolute', left: 96, top: 700, opacity: final ? 0 : 1 - o(HD.bk + 10)}}><NucEq terms={[NEU, '+', U92, '→', '?']} size={44} /></div>
			<div style={{position: 'absolute', left: 96, top: 700, opacity: o(HD.bk + 10)}}><NucEq terms={FISSION_EQ} size={44} /></div>
			<div style={{position: 'absolute', left: 96, top: 780, opacity: o(HD.bk + 30), fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 32, color: INK}}>236 = 236 ✓&nbsp;&nbsp;&nbsp;<span style={{color: '#b8312f'}}>92 = 92 ✓</span></div>
			<Chip x={900} y={680} at={-60} out={final ? -50 : HD.lb} size={30} color={INK}>Δm = ?</Chip>
			<Chip x={900} y={680} at={at(HD.lb)} size={30} color={INK}>{`Δm = ${u6(F_IN)} − ${u6(F_OUT)} = ${u6(F_DM)} u`}</Chip>
			<Chip x={900} y={760} at={-60} out={final ? -50 : HD.oh} size={36} color={INK} border={INK}>Q = ?</Chip>
			<Chip x={900} y={760} at={at(HD.oh)} size={36} color={INK} border={INK}>{`Q = +${fx(F_Q, 0)} MeV`}</Chip>
			<Lbl x={900} y={852} at={at(HD.oh + 12)} color={GREY.ink} size={26}>about 200 MeV in total, once the fragments decay</Lbl>
			{marks ? <FrameSvg><ArrowFlow x={1180} y={787} len={final ? 120 : 120 * prog(f, HD.oh + 6, 14)} color={ORANGE.stroke} deg={0} /></FrameSvg> : null}
			{chip ? <Chip x={96} y={890} at={at(HD.wc)} size={30} w={1728} color={INK} border={INK}>Next: why can one fission event trigger a controlled or uncontrolled chain?</Chip> : null}
		</>
	);
};
/** v17's final frame for the next video. */
export const M8V17FinalFrame: React.FC = () => <HandoffBoard17 f={HD.end} final />;
export const S18: React.FC = () => <HandoffBoard17 f={useCurrentFrame()} />;
export const HANDOFF17_END = HD.end;

// ---------- 19. key notes ----------
export const S19: React.FC = () => {
	const notes = [
		{content: <>Balance A and Z: ⁴₂He + ¹⁴₇N → ¹⁷₈O + ¹₁H.</>, at: 2},
		{content: <><span style={{color: ORANGE.ink}}>Q</span> = (m<sub>reactants</sub> − m<sub>products</sub>)c² = K<sub>out</sub> − K<sub>in</sub>.</>, at: 6},
		{content: <>Q &gt; 0: energy out. Q &lt; 0: projectile pays |Q| or more.</>, at: 10},
		{content: <>Atomic masses work when Z is conserved.</>, at: 14},
		{content: <>Q depends on masses only, not projectile speed.</>, at: 18},
	];
	return (
		<Accent color={ACCENT}>
			<KeyNotesScene notes={notes} size={34} aid={<MemoryCard at={24} main={<>Q = mass before − mass after.</>} sub={<>Positive gives energy out; negative takes energy in.</>} />} />
			<HandTag x={1824} y={116} text="pause to copy" at={cue('key-notes', 'Pause')} size={TYPE.hand} color={ACCENT} anchor="end" />
		</Accent>
	);
};
