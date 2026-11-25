// Scenes 13 to 18: attempt 1 (D-D fusion: energy from atomic masses) and its feedback, attempt 2 (why fusion needs
// extreme temperatures; the painted tokamak) and its feedback, the handoff (helium-4 held by the strong force; one proton
// lifted out and enlarged with "?"; an earlier video's gold-foil probe; probe a proton? Its last frame is exported as
// `M8V19FinalFrame`) and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading} from '../../math/studio';
import {Accent, KeyNotesScene, MemoryCard, QuestionScene} from '../../shared/scenes';
import {TYPE} from '../../shared/tokens';
import {AnswerBox, Chip, CrossedChip, Row} from '../../physics/projectile/board';
import {NucleonCluster} from '../../physics/atom/decay';
import {Hill} from '../../physics/atom/fusion';
import type {HillG} from '../../physics/atom/fusion';
import {LPlate} from '../../physics/light/plates';
import {ACCENT, DD_DM, DD_E, DD_IN, DD_OUT, DD_SLIP_DM, DD_SLIP_E, DT_DM, DT_Q, HEAD, HEAD_NEXT, HEAD_SIZE, M, U3, U_MEV, cap, cue, dur, hold} from './common';
import {AMBER, Arrow, GREY, INK, L_H2, L_HE4, Lbl, NAVY, NEUTRON, NUC_RED, RED, Shrunk, T, TOKAMAK, fx, u6} from './parts';

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

// ---------- 13. attempt 1 ----------
const Q1: React.FC<{u?: boolean}> = ({u = false}) => {
	const U = (t: React.ReactNode) => (u ? <u>{t}</u> : t);
	return <>Two deuterium nuclei fuse: ²₁H + ²₁H → ³₂He + {U('¹₀n')}. Atomic masses: {U(<>²H {u6(M.h2)} u, ³He {u6(M.he3)} u, n {u6(M.n)} u</>)}. Calculate the energy released in this reaction, in MeV.</>;
};
/** Two deuterium nuclei approaching with repulsion arrows; labels at 40 px so they stay readable at 440 px wide. */
const Pic1: React.FC<{w?: number}> = ({w = 678}) => (
	<svg width={w} height={(w * 470) / 678} viewBox="0 0 678 470" style={{overflow: 'visible'}}>
		<rect x={4} y={4} width={670} height={462} rx={18} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={3} />
		<NucleonCluster cx={220} cy={180} r={30} discs={L_H2} pFill={NUC_RED} nFill={NEUTRON} letters={false} />
		<NucleonCluster cx={458} cy={180} r={30} discs={L_H2} pFill={NUC_RED} nFill={NEUTRON} letters={false} />
		<Arrow x0={150} y0={180} x1={60} y1={180} color={RED.stroke} width={7} />
		<Arrow x0={528} y0={180} x1={618} y1={180} color={RED.stroke} width={7} />
		<text x={220} y={290} textAnchor="middle" style={T(40, INK)}>²H</text>
		<text x={458} y={290} textAnchor="middle" style={T(40, INK)}>²H</text>
		<rect x={110} y={350} width={458} height={78} rx={12} fill="#f1ebdf" stroke="rgba(60,45,20,0.25)" strokeWidth={2.5} />
		<text x={339} y={404} textAnchor="middle" style={T(40, INK)}>{`1 u = ${U_MEV} MeV/c²`}</text>
	</svg>
);
export const S13: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Your turn" pauseAt={cue('attempt-1', 'Pause here')} hold={hold('attempt-1')} size={38} marks={3} picture={<Pic1 />}><Q1 /></QuestionScene></Accent>;

// ---------- 14. feedback 1 ----------
export const S14: React.FC = () => {
	const id = 'feedback-1';
	const f = useCurrentFrame();
	const re = cue(id, 'four point zero two eight two u'), pr = cue(id, 'four point zero two four seven u'), df = cue(id, 'zero point zero zero three five one u'), mv = cue(id, 'about three point two seven MeV'), sl = cue(id, 'The slip is leaving out'), an = cap(id, cue(id, 'an impossible answer'), 24);
	const tick = Math.min(1, prog(f, mv, 24));
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk accent={ACCENT} gy={300} givens={<>²H {u6(M.h2)} u; ³He {u6(M.he3)} u; n {u6(M.n)} u; {U_MEV} MeV/c²</>}><Q1 u /></Shrunk>
			<div style={{position: 'absolute', left: 1290, top: 170}}><Pic1 w={530} /></div>
			<Lbl x={96} y={480} at={-30} out={re} color={GREY.ink} size={40}>reactants = ? u</Lbl>
			<Lbl x={96} y={545} at={-30} out={pr} color={GREY.ink} size={40}>products = ? u</Lbl>
			<Lbl x={96} y={610} at={-30} out={df} color={GREY.ink} size={40}>Δm = ? u</Lbl>
			<Lbl x={96} y={685} at={-30} out={mv} color={GREY.ink} size={40}>energy released = ? MeV</Lbl>
			<div style={{position: 'absolute', left: 96, top: 440, display: 'flex', flexDirection: 'column', gap: 12}}>
				<Row at={re} ageAt={mv} size={44} oldSize={34}>{`reactants: 2 × ${u6(M.h2)} = ${u6(DD_IN)} u`}</Row>
				<Row at={pr} ageAt={mv} size={44} oldSize={34}>{`products: ${u6(M.he3)} + ${u6(M.n)} = ${u6(DD_OUT)} u`}</Row>
				<Row at={df} ageAt={mv} size={44} oldSize={34}>{`Δm = ${u6(DD_DM)} u`}</Row>
				<Row at={mv} size={50}><AnswerBox at={mv + 4}>{`E = ${u6(DD_DM)} × ${U_MEV} ≈ ${fx(DD_E * tick, 2)} MeV`}</AnswerBox></Row>
			</div>
			<Lbl x={96} y={790} at={df + 6} color={GREY.ink} size={26}>{`said: ${fx(DD_IN, 4)}, ${fx(DD_OUT, 4)} and ${fx(DD_DM, 5)}`}</Lbl>
			<CrossedChip x={96} y={830} at={sl} crossAt={an} size={30} caption="count every product">{`Δm = ${u6(DD_IN)} − ${u6(M.he3)} = ${fx(DD_SLIP_DM, 3)} u → ${fx(DD_SLIP_E, 0)} MeV`}</CrossedChip>
		</>
	);
};

// ---------- 15. attempt 2 ----------
const Q2: React.FC<{u?: boolean}> = ({u = false}) => {
	const U = (t: string) => (u ? <u>{t}</u> : t);
	return <>Nuclear fusion {U('releases energy')}, yet it only occurs at {U('extremely high temperatures')}. Explain why.</>;
};
const Pic2: React.FC<{w?: number}> = ({w = 600}) => (
	<svg width={w} height={(w * 450) / 600} viewBox="0 0 600 450" style={{overflow: 'visible'}}>
		<LPlate spec={TOKAMAK} p={{x: 0, y: 0, w: 600}} />
	</svg>
);
export const S15: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Last one" pauseAt={cue('attempt-2', 'Pause here')} hold={hold('attempt-2')} size={40} marks={3} picture={<Pic2 w={660} />}><Q2 /></QuestionScene></Accent>;

// ---------- 16. feedback 2 ----------
const HG16: HillG = {x0: 1300, x1: 1800, xc: 1400, xw0: 1310, xw1: 1370, y0: 760, top: 150, deep: 110, p: 2};
export const S16: React.FC = () => {
	const id = 'feedback-2';
	const bt = cue(id, 'can bind them'), gt = cue(id, 'get through or over that Coulomb barrier'), rl = cue(id, 'so energy is released'), sl = cue(id, 'The slip is saying'), ht = cap(id, cue(id, "switches on when it's hot"), 24);
	const f = useCurrentFrame();
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk accent={ACCENT} gy={240} givens={<>explain: fusion releases energy | yet it occurs only at extremely high temperatures</>}><Q2 u /></Shrunk>
			<div style={{position: 'absolute', left: 1290, top: 170}}><Pic2 w={520} /></div>
			<FrameSvg><Hill g={HG16} shadeHill={1} shadeWell={1} opacity={prog(f, bt, 14)} /></FrameSvg>
			<Lbl x={HG16.xc + 30} y={HG16.y0 - HG16.top - 16} at={bt + 6} color={RED.ink} size={26}>{`≈ ${fx(U3, 1)} MeV`}</Lbl>
			<div style={{position: 'absolute', left: 96, top: 380, display: 'flex', flexDirection: 'column', gap: 16, width: 1150}}>
				<Row at={bt} ageAt={rl} size={44} oldSize={34} style={{whiteSpace: 'normal'}}>repulsion (long range) against the strong force (within ≈ 3 fm)</Row>
				<Row at={gt} ageAt={rl} size={44} oldSize={34} style={{whiteSpace: 'normal'}}>high T → high speed → enough tunnel through (or get over)</Row>
				<Row at={rl} size={44} style={{whiteSpace: 'normal'}}><AnswerBox at={rl + 4}>product more tightly bound → less mass → Q &gt; 0</AnswerBox></Row>
			</div>
			<CrossedChip x={96} y={800} at={sl} crossAt={ht} size={32} caption="temperature is for getting close">the strong force only works at high temperature</CrossedChip>
		</>
	);
};

// ---------- 17. handoff ----------
const HD = (() => {
	const id = 'handoff-v20';
	return {id, ba: cue(id, 'But are they'), sb: cue(id, 'held together by the strong force'), fa: cue(id, 'firing alpha particles at atoms revealed the nucleus inside'), wi: cue(id, 'What if we fire something at a proton'), sw: cap(id, cue(id, 'So what evidence shows'), 8), end: dur(id) - 1};
})();
const HE_C = {x: 740, y: 560, r: 34};
const BIGP = {x: 1390, y: 560, r: 230};
/** The rightmost proton of the helium-4 layout is the one lifted out. */
const LIFT_I = L_HE4.reduce((b, d, i) => (d.kind === 'p' && (b < 0 || d.x > L_HE4[b].x) ? i : b), -1);
const SPREAD = L_HE4.map(d => ({...d, x: d.x * 1.5, y: d.y * 1.5}));
const DISC = (i: number) => [HE_C.x + SPREAD[i].x * 2 * HE_C.r, HE_C.y + SPREAD[i].y * 2 * HE_C.r] as const;
/** The far-left thumbnail of an earlier video's gold-foil probe: straight alpha tracks and one large-angle return. */
const FoilThumb: React.FC<{hi: number}> = ({hi}) => (
	<g>
		<rect x={96} y={230} width={420} height={270} rx={14} fill="#fffdf8" stroke="rgba(60,45,20,0.25)" strokeWidth={3} />
		<line x1={330} y1={250} x2={330} y2={480} stroke="#c9a34a" strokeWidth={10} />
		<circle cx={330} cy={380} r={9} fill={NUC_RED} />
		{[280, 320, 440].map(y => <line key={y} x1={120} y1={y} x2={490} y2={y} stroke={AMBER.stroke} strokeWidth={3} />)}
		<path d="M120,376 L300,376 Q322,376 300,350 L170,300" fill="none" stroke={hi > 0 ? RED.stroke : AMBER.stroke} strokeWidth={3 + 3 * hi} />
	</g>
);
export const HandoffBoard19: React.FC<{f: number; final?: boolean; heading?: boolean; chip?: boolean}> = ({f, final = false, heading = true, chip = true}) => {
	const at = (x: number) => (final ? -60 : x);
	const o = (x: number, d = 14) => (final ? 1 : prog(f, x, d));
	const lift = final ? 1 : prog(f, HD.ba, 40);
	const [lx, ly] = DISC(LIFT_I);
	const pr = lerp(HE_C.r, BIGP.r, lift), px = lerp(lx, BIGP.x, lift), py = lerp(ly, BIGP.y, lift);
	const springs = o(HD.sb, 20);
	const probe = o(HD.wi, 30);
	const hidden = [LIFT_I];
	return (
		<>
			{heading ? (!final ? <><SceneHeading text={HEAD} at={-200} out={HD.sw} size={HEAD_SIZE} /><SceneHeading text={HEAD_NEXT} at={HD.sw + 8} size={HEAD_SIZE} /></> : <SceneHeading text={HEAD_NEXT} at={-200} size={HEAD_SIZE} />) : null}
			<FrameSvg>
				{springs > 0.001 ? <g opacity={springs}>{L_HE4.flatMap((_, i) => L_HE4.map((__, j) => [i, j] as const).filter(([a2, b2]) => a2 < b2 && a2 === i)).map(([i, j], k) => { const [x1, y1] = DISC(i), [x2, y2] = DISC(j); const n = 8, nx = -(y2 - y1), ny = x2 - x1, l = Math.hypot(nx, ny) || 1; const pts = Array.from({length: n + 1}, (_, q) => { const tt = q / n, w = q && q < n ? (q % 2 ? 7 : -7) : 0; return `${lerp(x1, x2, tt) + (nx / l) * w},${lerp(y1, y2, tt) + (ny / l) * w}`; }).join(' '); return <polyline key={k} points={pts} fill="none" stroke={NAVY.stroke} strokeWidth={3} opacity={(i === LIFT_I || j === LIFT_I) ? 1 - lift : 1} />; })}</g> : null}
				<NucleonCluster cx={HE_C.x} cy={HE_C.y} r={HE_C.r} discs={SPREAD} pFill={NUC_RED} nFill={NEUTRON} hide={lift > 0.02 ? hidden : []} />
				{lift > 0.02 ? <g><circle cx={px} cy={py} r={pr} fill={NUC_RED} stroke={INK} strokeWidth={4} /><text x={px} y={py + pr * 0.25} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: Math.max(26, pr * 0.8), fill: '#ffffff'}}>?</text></g> : null}
				<g opacity={o(HD.fa)}><FoilThumb hi={o(HD.fa + 20)} /></g>
				{probe > 0.001 ? <g opacity={probe}><circle cx={900} cy={300} r={14} fill={NAVY.stroke} stroke="#fffdf8" strokeWidth={3} /><line x1={920} y1={310} x2={lerp(920, 1190, probe)} y2={lerp(310, 450, probe)} stroke={NAVY.stroke} strokeWidth={5} strokeDasharray="12 8" /></g> : null}
			</FrameSvg>
			<Lbl x={HE_C.x} y={HE_C.y + 110} at={-60} color={INK} size={30} anchor="middle">helium-4</Lbl>
			<Lbl x={HE_C.x} y={HE_C.y - 150} at={at(HD.sb + 6)} color={NAVY.ink} size={28} anchor="middle">strong force (springs: a picture)</Lbl>
			<Lbl x={BIGP.x} y={BIGP.y + BIGP.r + 50} at={at(HD.ba + 30)} color={INK} size={30} anchor="middle">one proton, enlarged: solid, or made of parts?</Lbl>
			<Lbl x={96} y={540} at={at(HD.fa + 10)} color={GREY.ink} size={26}>an earlier video: probing an atom</Lbl>
			<Lbl x={96} y={576} at={at(HD.fa + 14)} color={GREY.ink} size={26}>found the nucleus</Lbl>
			<Lbl x={880} y={260} at={at(HD.wi + 10)} color={NAVY.ink} size={30}>probe a proton?</Lbl>
			<Lbl x={830} y={344} at={at(HD.wi + 16)} color={NAVY.ink} size={26}>electron</Lbl>
			{chip ? <Chip x={96} y={890} at={at(HD.sw)} size={30} w={1728} color={INK} border={INK}>Next: what evidence shows that protons and neutrons have smaller constituents?</Chip> : null}
		</>
	);
};
/** v19's final frame for the next video. */
export const M8V19FinalFrame: React.FC = () => <HandoffBoard19 f={HD.end} final />;
export const S17: React.FC = () => <HandoffBoard19 f={useCurrentFrame()} />;

// ---------- 18. key notes ----------
export const S18: React.FC = () => {
	const notes = [
		{content: <>D-T: Δm = {u6(DT_DM)} u → <span style={{color: AMBER.ink}}>{fx(DT_Q, 1)} MeV</span> released.</>, at: 2},
		{content: <>Product more tightly bound → less mass.</>, at: 6},
		{content: <><span style={{color: RED.ink}}>Coulomb barrier</span> ≈ 0.5 MeV; strong force within ≈ 3 fm.</>, at: 10},
		{content: <>Needs high T, density, confinement; tunnelling helps.</>, at: 14},
		{content: <>Sun: gravity confines. Tokamak: magnetic fields.</>, at: 18},
	];
	return (
		<Accent color={ACCENT}>
			<KeyNotesScene notes={notes} size={34} aid={<MemoryCard at={24} main={<>Get past the hill, win the valley.</>} />} />
			<HandTag x={1824} y={116} text="pause to copy" at={cue('key-notes', 'Pause')} size={TYPE.hand} color={ACCENT} anchor="end" />
		</Accent>
	);
};
