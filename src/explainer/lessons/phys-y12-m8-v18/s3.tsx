// Scenes 14 to 19: attempt 1 (U-235 splitting into Xe-140 and Sr-94: find x, then the energy) and its feedback,
// attempt 2 (how a reactor keeps its chain steady; the painted OPAL pool) and its feedback, the handoff (the binding
// curve: fission climbing from the heavy side, a dashed fusion arrow from the light side, two repelling light nuclei;
// its last frame is exported as `M8V18FinalFrame`) and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading} from '../../math/studio';
import {Accent, KeyNotesScene, MemoryCard, QuestionScene} from '../../shared/scenes';
import {TYPE} from '../../shared/tokens';
import {AnswerBox, Chip, CrossedChip, Row} from '../../physics/projectile/board';
import {BindingCurve, bcX, bcY, bindingAt} from '../../physics/atom/nuclear';
import type {BCBox} from '../../physics/atom/nuclear';
import {NucleonCluster, clusterLayout} from '../../physics/atom/decay';
import {CurveMark} from '../../physics/atom/binding';
import {LPlate} from '../../physics/light/plates';
import {ACCENT, A_DM, A_E, A_OUT, A_SLIP_DM, A_SLIP_E, A_SLIP_OUT, A_X, BA_BA, BA_KR, BA_U, F_IN, F_Q, HEAD, HEAD_NEXT, HEAD_SIZE, M, U_MEV, cap, cue, dur, hold, sig3} from './common';
import {AMBER, GREY, INK, Lbl, NAVY, NEUTRON, NUC_RED, Neutron, OPAL_PLATE, RED, Shrunk, T, fx, u6} from './parts';

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const pulseOf = (f: number, at: number, d = 30) => (f >= at && f < at + d ? Math.sin(((f - at) / d) * Math.PI) : 0);
const U5 = clusterLayout(92, 143, 9);

// ---------- 14. attempt 1 ----------
const Q1: React.FC<{u?: boolean}> = ({u = false}) => {
	const U = (t: React.ReactNode) => (u ? <u>{t}</u> : t);
	return <>A uranium-235 nucleus absorbs a neutron and undergoes fission: ¹₀n + ²³⁵₉₂U → ¹⁴⁰₅₄Xe + ⁹⁴₃₈Sr + {U('x')} ¹₀n. Atomic masses: {U(<>n {u6(M.n)} u, ²³⁵U {u6(M.u235)} u, ¹⁴⁰Xe {u6(M.xe)} u, ⁹⁴Sr {u6(M.sr)} u</>)}. (a) Determine x. (b) Calculate the energy released, in MeV.</>;
};
/** The card's picture: labels at 42 px so they stay readable when the picture is shown at 440 px wide. */
const Pic1: React.FC<{w?: number; solved?: boolean}> = ({w = 678, solved = false}) => (
	<svg width={w} height={(w * 470) / 678} viewBox="0 0 678 470" style={{overflow: 'visible'}}>
		<rect x={4} y={4} width={670} height={462} rx={18} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={3} />
		<Neutron x={46} y={160} r={22} label={false} />
		<line x1={74} y1={160} x2={100} y2={160} stroke={GREY.stroke} strokeWidth={6} strokeLinecap="round" />
		<NucleonCluster cx={190} cy={160} r={4.4} discs={U5} pFill={NUC_RED} nFill={NEUTRON} letters={false} />
		<text x={190} y={300} textAnchor="middle" style={T(40, INK)}>²³⁵U</text>
		<text x={315} y={174} textAnchor="middle" style={T(48, INK)}>→</text>
		<circle cx={410} cy={80} r={44} fill="none" stroke={INK} strokeWidth={3} strokeDasharray="9 6" />
		<text x={466} y={94} style={T(40, INK)}>¹⁴⁰Xe</text>
		<circle cx={410} cy={200} r={44} fill="none" stroke={INK} strokeWidth={3} strokeDasharray="9 6" />
		<text x={466} y={214} style={T(40, INK)}>⁹⁴Sr</text>
		<circle cx={410} cy={300} r={28} fill="none" stroke={INK} strokeWidth={3} strokeDasharray="7 5" />
		<text x={466} y={314} style={T(40, INK)}>{solved ? `${A_X} n` : 'x n?'}</text>
		<rect x={110} y={370} width={458} height={78} rx={12} fill="#f1ebdf" stroke="rgba(60,45,20,0.25)" strokeWidth={2.5} />
		<text x={339} y={424} textAnchor="middle" style={T(40, INK)}>{`1 u = ${U_MEV} MeV/c²`}</text>
	</svg>
);
export const S14: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Your turn" pauseAt={cue('attempt-1', 'Pause here')} hold={hold('attempt-1')} size={36} marks={3} picture={<Pic1 />}><Q1 /></QuestionScene></Accent>;

// ---------- 15. feedback 1 ----------
export const S15: React.FC = () => {
	const id = 'feedback-1';
	const f = useCurrentFrame();
	const tn = cue(id, 'so two neutrons'), re = cue(id, 'Reactants, two hundred'), pr = cue(id, 'Products, two hundred'), df = cue(id, 'The difference is'), mv = cue(id, 'about one hundred and eighty-five'), sl = cue(id, 'The slip is leaving out'), an = cap(id, cue(id, 'an impossible answer'), 24);
	const tick = Math.min(1, prog(f, mv, 24));
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk accent={ACCENT} gy={340} givens={<>n {u6(M.n)} u; ²³⁵U {u6(M.u235)} u; ¹⁴⁰Xe {u6(M.xe)} u; ⁹⁴Sr {u6(M.sr)} u; {U_MEV} MeV/c²</>}><Q1 u /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 480, display: 'flex', flexDirection: 'column', gap: 10, width: 1700}}>
				<Row at={tn} ageAt={re} size={44} oldSize={32}><AnswerBox at={tn + 4}>{`A: 1 + 235 = 140 + 94 + x → x = ${A_X}`}</AnswerBox></Row>
				<Row at={re} ageAt={mv} size={44} oldSize={32}>{`reactants: ${u6(F_IN)} u (said ${fx(F_IN, 4)})`}</Row>
				<Row at={pr} ageAt={mv} size={40} oldSize={30}>{`products: ${u6(M.xe)} + ${u6(M.sr)} + 2(${u6(M.n)}) = ${u6(A_OUT)} u`}</Row>
				<Row at={df} ageAt={mv} size={40} oldSize={30}>{`Δm = ${u6(A_DM)} u (said ${fx(A_DM, 4)})`}</Row>
				<Row at={mv} size={48}><AnswerBox at={mv + 4}>{`E = ${u6(A_DM)} × ${U_MEV} ≈ ${fx(A_E * tick, 0)} MeV`}</AnswerBox></Row>
			</div>
			<div style={{position: 'absolute', left: 1290, top: 170}}><Pic1 w={530} solved={f >= tn} /></div>
			<Lbl x={96} y={520} at={-30} out={tn} color={GREY.ink} size={40}>(a) x = ?</Lbl>
			<Lbl x={96} y={620} at={-30} out={re} color={GREY.ink} size={40}>(b) energy released = ? MeV</Lbl>
			<CrossedChip x={96} y={830} at={sl} crossAt={an} size={30} caption="count every product">{`Δm = ${u6(F_IN)} − ${u6(A_SLIP_OUT)} = ${fx(A_SLIP_DM, 3)} u → ${fx(sig3(A_SLIP_E), 0)} MeV`}</CrossedChip>
		</>
	);
};

// ---------- 16. attempt 2 ----------
const Q2: React.FC<{u?: boolean}> = ({u = false}) => {
	const U = (t: string) => (u ? <u>{t}</u> : t);
	return <>Explain how a nuclear reactor maintains a {U('steady (controlled)')} fission chain reaction. Refer to the {U('moderator')} and the {U('control rods')}.</>;
};
const Pic2: React.FC<{w?: number}> = ({w = 600}) => (
	<svg width={w} height={(w * 700) / 600} viewBox="0 0 600 700" style={{overflow: 'visible'}}>
		<LPlate spec={OPAL_PLATE} p={{x: 0, y: 0, w: 600}} />
	</svg>
);
export const S16: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Last one" pauseAt={cue('attempt-2', 'Pause here')} hold={hold('attempt-2')} size={40} marks={3} picture={<Pic2 w={460} />}><Q2 /></QuestionScene></Accent>;

// ---------- 17. feedback 2 ----------
export const S17: React.FC = () => {
	const id = 'feedback-2';
	const k1 = cue(id, 'so k equals one'), ct = cue(id, 'can capture them'), ko = cue(id, 'holds k at one'), sl = cue(id, 'The slip is saying'), jb = cap(id, cue(id, "That's the moderator's job"), 24);
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk accent={ACCENT} gy={270} givens={<>explain: a steady (controlled) fission chain reaction | refer to the moderator and the control rods</>}><Q2 u /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 400, display: 'flex', flexDirection: 'column', gap: 16, width: 1250}}>
				<Row at={k1} ageAt={ct} size={44} oldSize={34} style={{whiteSpace: 'normal'}}><AnswerBox at={k1 + 4}>steady chain: on average exactly 1 neutron per fission causes another (k = 1)</AnswerBox></Row>
				<Row at={ct} ageAt={ko} size={44} oldSize={34} style={{whiteSpace: 'normal'}}>moderator (water, graphite): slows fast neutrons → more captured by U-235</Row>
				<Row at={ko} size={44} style={{whiteSpace: 'normal'}}>control rods (boron, cadmium): absorb spare neutrons; in → k ↓, out → k ↑</Row>
			</div>
			<div style={{position: 'absolute', left: 1400, top: 380}}><Pic2 w={420} /></div>
			<CrossedChip x={96} y={830} at={sl} crossAt={jb} size={32} caption="rods absorb; moderator slows">control rods slow the neutrons down</CrossedChip>
		</>
	);
};

// ---------- 18. handoff ----------
export const BC18: BCBox = {x: 200, y: 300, w: 1300, h: 470};
export const INSET18 = {x: 620, y: 680};
const HD = (() => {
	const id = 'handoff-v19';
	return {id, cb: cue(id, 'climbing the binding energy curve from the heavy side'), os: cue(id, 'The other side of the curve climbs too'), ms: cue(id, 'climbs even more steeply'), pa: cue(id, 'they push each other away'), wf: cap(id, cue(id, 'So why can fusion release energy'), 8), end: dur(id) - 1};
})();
const H2 = clusterLayout(1, 1, 2), H3 = clusterLayout(1, 2, 3);
const arrow = (x0: number, y0: number, x1: number, y1: number, t: number, color: string, dash?: string) => {
	const x = lerp(x0, x1, t), y = lerp(y0, y1, t), a = Math.atan2(y1 - y0, x1 - x0);
	return <g><line x1={x0} y1={y0} x2={x} y2={y} stroke={color} strokeWidth={8} strokeLinecap="round" strokeDasharray={dash} /><path d={`M${x + 22 * Math.cos(a)},${y + 22 * Math.sin(a)} L${x + 12 * Math.cos(a + 2.2)},${y + 12 * Math.sin(a + 2.2)} L${x + 12 * Math.cos(a - 2.2)},${y + 12 * Math.sin(a - 2.2)} Z`} fill={color} stroke={color} strokeWidth={6} /></g>;
};
/** The two repelling light nuclei (²H and ³H) with repulsion arrows; also v19's opening inset. */
export const RepelInset: React.FC<{x: number; y: number; s?: number; arrows?: number; gap?: number; len?: number; box?: number; labels?: number}> = ({x, y, s = 1, arrows = 1, gap = 70, len = 40, box = 1, labels = 1}) => (
	<g>
		{box > 0.001 ? <rect x={x - 170 * s} y={y - 90 * s} width={340 * s} height={180 * s} rx={16 * s} fill="#fffdf8" stroke="rgba(60,45,20,0.25)" strokeWidth={3} opacity={box} /> : null}
		<NucleonCluster cx={x - gap * s} cy={y} r={16 * s} discs={H2} pFill={NUC_RED} nFill={NEUTRON} letters={false} />
		<NucleonCluster cx={x + gap * s} cy={y} r={16 * s} discs={H3} pFill={NUC_RED} nFill={NEUTRON} letters={false} />
		{arrows > 0.001 ? <g opacity={arrows}>{arrow(x - (gap + 40) * s, y, x - (gap + 40 + len) * s, y, 1, RED.stroke)}{arrow(x + (gap + 45) * s, y, x + (gap + 40 + len) * s, y, 1, RED.stroke)}</g> : null}
		{labels > 0.001 ? <g opacity={labels}><text x={x - gap * s} y={y + 70 * s} textAnchor="middle" style={T(28 * s, INK)}>²H</text>
		<text x={x + gap * s} y={y + 70 * s} textAnchor="middle" style={T(28 * s, INK)}>³H</text></g> : null}
	</g>
);
export const HandoffBoard18: React.FC<{f: number; final?: boolean; heading?: boolean; chip?: boolean; inset?: boolean}> = ({f, final = false, heading = true, chip = true, inset = true}) => {
	const at = (x: number) => (final ? -60 : x);
	const o = (x: number, d = 14) => (final ? 1 : prog(f, x, d));
	const fi = final ? 1 : prog(f, HD.cb, 30), fu = final ? 1 : prog(f, HD.os, 30);
	const pulse = final ? 0 : pulseOf(f, HD.ms, 40);
	const P = (A: number, B: number) => [bcX(BC18, A), bcY(BC18, B)] as const;
	const u = P(235, BA_U), fr = P(115, (BA_BA + BA_KR) / 2), h2 = P(2.5, 1.85), he = P(4, 7.074);
	return (
		<>
			{heading ? (!final ? <><SceneHeading text={HEAD} at={-200} out={HD.wf} size={HEAD_SIZE} /><SceneHeading text={HEAD_NEXT} at={HD.wf + 8} size={HEAD_SIZE} /></> : <SceneHeading text={HEAD_NEXT} at={-200} size={HEAD_SIZE} />) : null}
			<FrameSvg>
				<BindingCurve b={BC18} size={26} ticksA={[4, 16, 56, 92, 141, 235]} />
				{pulse > 0.001 ? <path d={`M${bcX(BC18, 1)},${bcY(BC18, 0)} L${bcX(BC18, 2)},${bcY(BC18, 1.112)} L${bcX(BC18, 3)},${bcY(BC18, 2.573)} L${bcX(BC18, 4)},${bcY(BC18, 7.074)}`} fill="none" stroke={AMBER.stroke} strokeWidth={12} opacity={0.5 * pulse} strokeLinecap="round" /> : null}
				<CurveMark b={BC18} A={2} B={1.112} text="²H" color={NAVY.ink} size={28} dx={24} dy={10} anchor="start" />
				<CurveMark b={BC18} A={3} B={2.573} text="³H" color={NAVY.ink} size={28} dx={24} dy={10} anchor="start" />
				<CurveMark b={BC18} A={4} B={7.074} text="⁴He" color={NAVY.ink} size={28} dx={-20} dy={-20} anchor="end" />
				<CurveMark b={BC18} A={56} B={bindingAt(56)} text="peak near iron (⁵⁶Fe: 8.8 MeV)" color={INK} size={28} dy={-30} />
				<CurveMark b={BC18} A={92} B={BA_KR} text="⁹²Kr" color={NAVY.ink} size={28} dy={44} />
				<CurveMark b={BC18} A={141} B={BA_BA} text="¹⁴¹Ba" color={NAVY.ink} size={28} dy={44} />
				<CurveMark b={BC18} A={235} B={BA_U} text="²³⁵U" color={NAVY.ink} size={28} dy={44} />
				{fi > 0.001 ? arrow(u[0], u[1] - 20, fr[0] + 20, fr[1] - 40, fi, AMBER.stroke) : null}
				{fu > 0.001 ? arrow(h2[0] + 30, h2[1], he[0] + 16, he[1] + 40, fu, AMBER.stroke, '14 10') : null}
				{inset ? <g opacity={o(HD.pa)}><RepelInset x={INSET18.x} y={INSET18.y} arrows={final ? 1 : prog(f, HD.pa + 6, 16)} /></g> : null}
			</FrameSvg>
			<Lbl x={1250} y={250} at={at(HD.cb + 10)} color={AMBER.ink} size={30}>fission (this video)</Lbl>
			<Lbl x={he[0] + 60} y={he[1] + 110} at={at(HD.os + 10)} color={AMBER.ink} size={30}>fusion?</Lbl>
			<Lbl x={he[0] + 80} y={he[1] + 60} at={at(HD.os + 16)} color={AMBER.ink} size={40}>?</Lbl>
			{chip ? <Chip x={96} y={890} at={at(HD.wf)} size={30} w={1728} color={INK} border={INK}>Next: why can fusion release energy despite repulsion between nuclei?</Chip> : null}
		</>
	);
};
/** v18's final frame for the next video. */
export const M8V18FinalFrame: React.FC = () => <HandoffBoard18 f={HD.end} final />;
export const S18: React.FC = () => <HandoffBoard18 f={useCurrentFrame()} />;
export const HANDOFF18_END = HD.end;

// ---------- 19. key notes ----------
export const S19: React.FC = () => {
	const notes = [
		{content: <>n + ²³⁵U → 2 fragments + 2 or 3 n (balance A, Z).</>, at: 2},
		{content: <>Fragments bound tighter: <span style={{color: AMBER.ink}}>{fx(F_Q, 0)} MeV</span> here, ≈ 200 total.</>, at: 6},
		{content: <><span style={{color: NAVY.ink}}>k</span> = average fissions caused per fission.</>, at: 10},
		{content: <>k &lt; 1 dies, k = 1 steady, k &gt; 1 grows.</>, at: 14},
		{content: <>Moderator slows neutrons; control rods absorb them.</>, at: 18},
	];
	return (
		<Accent color={ACCENT}>
			<KeyNotesScene notes={notes} size={34} aid={<MemoryCard at={24} main={<>Slow them, catch the spares, keep k at one.</>} />} />
			<HandTag x={1824} y={116} text="pause to copy" at={cue('key-notes', 'Pause')} size={TYPE.hand} color={ACCENT} anchor="end" />
		</Accent>
	);
};
