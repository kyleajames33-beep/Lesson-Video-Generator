// Scenes 13 to 18: attempt 1 (complete Ra-226 alpha and Sr-90 beta-minus equations) and its feedback, attempt 2 (an
// absorber data table) and its feedback, the handoff (a grid of identical nuclei decaying one at a time on a
// particle-box run, each with a click, and a halving sketch; its last frame is exported as `M8V14FinalFrame`) and the
// key notes with the summary table as the memory card.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading} from '../../math/studio';
import {Accent, KeyNotesScene, QuestionScene} from '../../shared/scenes';
import {TYPE} from '../../shared/tokens';
import {AnswerBox, Chip, CrossedChip, Row} from '../../physics/projectile/board';
import {NucEq} from '../../physics/atom/nuclear';
import {ClickTrace, DECAY_AT, GEIGER, NucleiGrid, NucleonCluster, SEALED, clusterLayout, decayFrames, decayRun} from '../../physics/atom/decay';
import {lazy} from '../../sims';
import {A2_DATA, ACCENT, HEAD, HEAD_NEXT, HEAD_SIZE, KR86, RA226, RN222, SR90, Y90, cap, cue, dur, hold} from './common';
import {AMBER, E_MINUS, GREY, HE, INK, LPlate, Lbl, NAVY, NEUTRON, NUC_RED, Shrunk, T, TEAL, placeAt, term} from './parts';
import {SUMMARY} from './s2';

// ---------- 13. attempt 1 ----------
const Q1: React.FC<{u?: boolean}> = ({u = false}) => {
	const U = (t: string) => (u ? <u>{t}</u> : t);
	return <>Complete the following nuclear equations.<br />(a) <NucEq terms={[term(RA226), '→', '?', '+', HE]} size={36} weight={600} /> ({U('alpha decay')})<br />(b) <NucEq terms={[term(SR90), '→', '?', '+', E_MINUS, '+', '?']} size={36} weight={600} /> ({U('beta-minus decay')})</>;
};
const PT_CHIP = '86 Rn, 87 Fr, 88 Ra, 38 Sr, 39 Y, 40 Zr, 36 Kr';
const RA_D = clusterLayout(14, 18, 3), SR_D = clusterLayout(9, 12, 8);
const Pic1: React.FC<{w?: number}> = ({w = 678}) => (
	<svg width={w} height={(w * 480) / 678} viewBox="0 0 678 480" style={{overflow: 'visible'}}>
		<rect x={4} y={4} width={670} height={472} rx={18} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={3} />
		<NucleonCluster cx={150} cy={170} r={12} discs={RA_D} pFill={NUC_RED} nFill={NEUTRON} letters={false} />
		<circle cx={330} cy={130} r={24} fill={AMBER.soft} stroke={AMBER.stroke} strokeWidth={3} /><text x={330} y={143} textAnchor="middle" style={T(36, AMBER.ink)}>α</text>
		<line x1={230} y1={150} x2={300} y2={136} stroke={AMBER.stroke} strokeWidth={4} strokeDasharray="8 6" />
		<NucleonCluster cx={480} cy={190} r={12} discs={SR_D} pFill={NUC_RED} nFill={NEUTRON} letters={false} />
		<circle cx={620} cy={140} r={11} fill={NAVY.stroke} /><line x1={545} y1={170} x2={605} y2={146} stroke={NAVY.stroke} strokeWidth={4} strokeDasharray="8 6" />
		<text x={610} y={108} textAnchor="middle" style={T(36, NAVY.ink)}>β⁻</text>
		<text x={150} y={300} textAnchor="middle" style={T(36, INK)}>radium-226</text>
		<text x={480} y={300} textAnchor="middle" style={T(36, INK)}>strontium-90</text>
		<rect x={30} y={326} width={618} height={140} rx={12} fill="#f1ebdf" stroke="rgba(60,45,20,0.25)" strokeWidth={2.5} />
		<text x={339} y={376} textAnchor="middle" style={T(36, INK)}>86 Rn, 87 Fr, 88 Ra, 36 Kr,</text>
		<text x={339} y={430} textAnchor="middle" style={T(36, INK)}>38 Sr, 39 Y, 40 Zr</text>
	</svg>
);
export const S13: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Your turn" pauseAt={cue('attempt-1', 'Pause here')} hold={hold('attempt-1')} size={36} marks={2} picture={<Pic1 />}><Q1 /></QuestionScene></Accent>;

// ---------- 14. feedback 1 ----------
export const S14: React.FC = () => {
	const id = 'feedback-1';
	const rn = cue(id, 'giving radon two two two'), an = cue(id, 'plus an antineutrino'), sl = cue(id, 'The slip is treating'), mn = cap(id, cue(id, 'from the mass number'), 20);
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk accent={ACCENT} gy={360} givens={<>α: A − 4, Z − 2; β⁻: Z + 1 | {PT_CHIP}</>}><Q1 u /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 470, display: 'flex', flexDirection: 'column', gap: 18, width: 1180}}>
				<Row at={rn - 10} size={40}><AnswerBox at={rn}><span>(a) <NucEq terms={[term(RA226), '→', term(RN222), '+', HE]} size={44} /> <span style={{fontSize: 30}}>(226 = 222 + 4; 88 = 86 + 2)</span></span></AnswerBox></Row>
				<Row at={an - 10} size={40}><AnswerBox at={an}><span>(b) <NucEq terms={[term(SR90), '→', term(Y90), '+', E_MINUS, '+', 'ν̄']} size={44} /> <span style={{fontSize: 30}}>(90 = 90 + 0; 38 = 39 − 1)</span></span></AnswerBox></Row>
			</div>
			<div style={{position: 'absolute', left: 1300, top: 470}}><Pic1 w={520} /></div>
			<CrossedChip x={96} y={760} at={sl} crossAt={mn} size={32} caption="beta keeps A"><NucEq terms={[term(SR90), '→', term(KR86), '+ …']} size={34} weight={700} /></CrossedChip>
		</>
	);
};

// ---------- 15. attempt 2 ----------
const ROWS2 = ['no absorber', 'paper', '5 mm aluminium', '5 cm lead'] as const;
const Q2: React.FC<{u?: boolean}> = ({u = false}) => {
	const U = (t: string) => (u ? <u>{t}</u> : t);
	return <>A radioactive source is placed in front of a Geiger counter, and different absorbers are placed between them. The count rates, {U('corrected for background radiation')}, are shown. Identify the type or types of radiation emitted by the source. Justify your answer.
		<div style={{display: 'grid', gridTemplateColumns: '300px 340px', marginTop: 8, fontSize: 30, fontWeight: 700}}>{ROWS2.map((r, i) => <React.Fragment key={r}><div>{r}</div><div>{A2_DATA[i]} counts per minute</div></React.Fragment>)}</div></>;
};
const SRC2 = placeAt(SEALED, DECAY_AT.window, 250, 230, 250), GEI2 = placeAt(GEIGER, DECAY_AT.tube, 420, 230, 400);
const Pic2: React.FC<{w?: number}> = ({w = 678}) => (
	<svg width={w} height={(w * 400) / 678} viewBox="0 0 678 400" style={{overflow: 'visible'}}>
		<rect x={4} y={4} width={670} height={392} rx={18} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={3} />
		<LPlate spec={SEALED} p={{...SRC2, x: SRC2.x - 200}} />
		<LPlate spec={GEIGER} p={{...GEI2, x: GEI2.x - 150}} />
		<rect x={290 - 150 + 10} y={130} width={60} height={190} rx={8} fill="none" stroke={GREY.stroke} strokeWidth={3} strokeDasharray="8 6" />
		<text x={330 - 150 + 10} y={366} textAnchor="middle" style={T(36, GREY.ink)}>absorber</text>
	</svg>
);
export const S15: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Last one" pauseAt={cue('attempt-2', 'Pause here')} hold={hold('attempt-2')} size={30} marks={3} picture={<Pic2 />}><Q2 /></QuestionScene></Accent>;

// ---------- 16. feedback 2 ----------
export const S16: React.FC = () => {
	const id = 'feedback-2';
	const na = cue(id, "so there's no alpha"), sb = cue(id, "so there's beta"), gt = cue(id, "so there's gamma too"), sl = cue(id, 'The slip is thinking'), gm = cap(id, cue(id, "can't be gamma"), 20);
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk accent={ACCENT} gy={330} givens={<>no absorber 612; paper 610; 5 mm Al 98; 5 cm lead 31 (counts per minute, corrected)</>}><Q2 u /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 430, display: 'flex', flexDirection: 'column', gap: 14, width: 1180}}>
				<Row at={na} ageAt={gt + 20} size={40}>{'paper: 612 → 610: no change → no α'}</Row>
				<Row at={sb} ageAt={gt + 20} size={40}>{'aluminium: 610 → 98: most removed → β'}</Row>
				<Row at={gt} ageAt={gt + 40} size={40}>{'98 passes Al; lead reduces to 31, not 0 → γ'}</Row>
				<Row at={gt + 24} size={44}><AnswerBox at={gt + 28}>source emits β⁻ and γ (no α)</AnswerBox></Row>
			</div>
			<div style={{position: 'absolute', left: 1300, top: 430}}><Pic2 w={520} /></div>
			<CrossedChip x={96} y={820} at={sl} crossAt={gm} size={32} caption="lead reduces γ">{"lead stops gamma, so 31 isn't gamma"}</CrossedChip>
		</>
	);
};

// ---------- 17. handoff ----------
const HD = (() => {
	const id = 'handoff';
	return {id, on: cue(id, 'changes one nucleus'), cr: cue(id, 'clicks at random'), ah: cue(id, 'always halves in the same time'), rs: cue(id, 'random single events'), wh: cap(id, cue(id, 'Why does half-life predict'), 8), end: dur(id) - 1};
})();
export const GRID14 = {x: 120, y: 300, cols: 10, rows: 10, cell: 54};
const FORCED = 44;
const RUN14 = lazy(() => decayFrames(decayRun(14, 100, HD.end + 1, 0.0052, HD.cr)));
/** Decay frame of nucleus i in the handoff grid (one forced on "changes one nucleus"). */
export const decay14 = (i: number) => { const r = RUN14()[i]; return i === FORCED ? (r >= 0 ? Math.min(r, HD.on + 6) : HD.on + 6) : r; };
export const ticks14 = () => Array.from({length: 100}, (_, i) => decay14(i)).filter(k => k >= 0).sort((a, b) => a - b);
export const GR14 = {x: 1180, y: 330, w: 600, h: 420};
const hh = (n: number) => { const s = Math.sin(n * 91.7 + 17.3) * 43758.5453; return s - Math.floor(s); };
/** The handoff board at scene frame f (`final`: every part drawn, for the next video's first frame). */
export const HandoffBoard14: React.FC<{f: number; final?: boolean; heading?: boolean; chip?: boolean}> = ({f, final = false, heading = true, chip = true}) => {
	const at = (x: number) => (final ? -60 : x);
	const o = (x: number, d = 14) => (final ? 1 : prog(f, x, d));
	const fr = final ? HD.end : f;
	const k = Math.floor(fr / 16), mi = Math.floor(hh(k) * 100), mx = GRID14.x + (mi % 10) * GRID14.cell + GRID14.cell / 2, my = GRID14.y + Math.floor(mi / 10) * GRID14.cell + GRID14.cell / 2;
	const curve = Array.from({length: 61}, (_, i) => { const t = i / 60; return `${i ? 'L' : 'M'}${(GR14.x + t * GR14.w).toFixed(1)},${(GR14.y + GR14.h - GR14.h * 0.9 * 0.5 ** (t * 4)).toFixed(1)}`; }).join(' ');
	return (
		<>
			{heading ? (!final ? <><SceneHeading text={HEAD} at={-200} out={HD.wh} size={HEAD_SIZE} /><SceneHeading text={HEAD_NEXT} at={HD.wh + 8} size={HEAD_SIZE} /></> : <SceneHeading text={HEAD_NEXT} at={-200} size={HEAD_SIZE} />) : null}
			<FrameSvg>
				<NucleiGrid x={GRID14.x} y={GRID14.y} cols={10} rows={10} cell={GRID14.cell} decayAt={decay14} f={fr} fill={NUC_RED} stroke={INK} ring={GREY.stroke} flash={AMBER.stroke} />
				<ClickTrace ticks={ticks14()} f={fr} f0={HD.cr - 40} f1={HD.end} x0={GRID14.x} x1={GRID14.x + 10 * GRID14.cell} y={250} h={40} color={GREY.ink} />
				{final || f >= HD.rs ? <circle cx={mx} cy={my} r={GRID14.cell * 0.5} fill="none" stroke={NAVY.stroke} strokeWidth={4} strokeDasharray="8 6" opacity={o(HD.rs)} /> : null}
				<g>
					<line x1={GR14.x} y1={GR14.y + GR14.h} x2={GR14.x + GR14.w} y2={GR14.y + GR14.h} stroke={INK} strokeWidth={4} />
					<line x1={GR14.x} y1={GR14.y + GR14.h} x2={GR14.x} y2={GR14.y} stroke={INK} strokeWidth={4} />
					<path d={curve} fill="none" stroke={NAVY.stroke} strokeWidth={4} strokeDasharray="12 9" opacity={o(HD.ah)} />
					{[1, 2, 3].map(n => o(HD.ah) <= 0.001 ? null : <line key={n} x1={GR14.x + (GR14.w * n) / 4} y1={GR14.y + GR14.h} x2={GR14.x + (GR14.w * n) / 4} y2={GR14.y + GR14.h - GR14.h * 0.9 * 0.5 ** n} stroke={TEAL.stroke} strokeWidth={3} strokeDasharray="6 6" />)}
					<text x={GR14.x - 16} y={GR14.y + 10} textAnchor="end" style={T(34, INK)}>N</text>
					<text x={GR14.x + GR14.w} y={GR14.y + GR14.h + 44} textAnchor="end" style={T(34, INK)}>t</text>
				</g>
			</FrameSvg>
			<Lbl x={GRID14.x} y={GRID14.y + 10 * GRID14.cell + 40} at={-60} color={INK} size={28}>identical nuclei; dashed ring = decayed</Lbl>
			<Lbl x={GR14.x + 40} y={GR14.y + GR14.h + 50} at={-60} color={INK} size={28}>number left against time</Lbl>
			<Lbl x={GRID14.x + 10 * GRID14.cell + 20} y={250} at={at(HD.cr)} color={GREY.ink} size={28}>clicks</Lbl>
			<HandTag x={GR14.x + 220} y={GR14.y + 60} text="half every t½?" at={at(HD.ah + 20)} size={40} color={TEAL.ink} />
			<HandTag x={GRID14.x + 10 * GRID14.cell + 20} y={GRID14.y + 120} text="which next? when?" at={at(HD.rs + 10)} size={38} color={NAVY.ink} />
			{chip ? <Chip x={96} y={870} at={at(HD.wh)} size={30} w={1728} color={INK} border={INK}>Next: why does half-life predict a population but not one atom?</Chip> : null}
		</>
	);
};
/** v14's final frame for the next video. */
export const M8V14FinalFrame: React.FC = () => <HandoffBoard14 f={HD.end} final />;
export const S17: React.FC = () => <HandoffBoard14 f={useCurrentFrame()} />;

// ---------- 18. key notes ----------
const COLC = [AMBER.ink, NAVY.ink, '#a83a5c', AMBER.ink];
const MiniTable: React.FC = () => (
	<div style={{opacity: prog(useCurrentFrame(), 24, 14), background: '#fffdf8', border: `4px solid ${INK}`, borderRadius: 22, boxShadow: `inset 0 0 0 7px #fffdf8, inset 0 0 0 9.5px ${INK}`, padding: '18px 22px'}}>
		<div style={{fontFamily: 'Caveat', fontWeight: 700, fontSize: TYPE.hand, color: GREY.ink}}>Memory card</div>
		<div style={{display: 'grid', gridTemplateColumns: '54px 64px 64px 70px 1fr', columnGap: 10, rowGap: 6, fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 28, color: INK}}>
			{['', 'A', 'Z', 'charge', 'stopped by'].map((h, i) => <div key={i} style={{color: GREY.ink}}>{h}</div>)}
			{SUMMARY.map((r, k) => [r[0], r[2], r[3], r[4], r[5]].map((c, i) => <div key={`${k}${i}`} style={{color: i === 0 ? COLC[k] : INK}}>{c}</div>))}
		</div>
		<div style={{marginTop: 12, fontFamily: 'Caveat', fontWeight: 700, fontSize: 44, lineHeight: 1.05, color: INK}}>Alpha: lose a helium-4 nucleus. Beta: one nucleon swaps type. Gamma: lose energy only.</div>
	</div>
);
export const S18: React.FC = () => {
	const notes = [
		{content: <>Unstable nuclei decay on their own (spontaneous).</>, at: 2},
		{content: <>Balance <span style={{color: INK}}>A (top)</span> and <span style={{color: '#b8322a'}}>Z (bottom)</span> in every equation.</>, at: 6},
		{content: <><span style={{color: NAVY.ink}}>β⁻</span> creates its electron; <span style={{color: GREY.ink}}>ν̄</span> takes a share of the energy.</>, at: 10},
		{content: <>Ionising <span style={{color: AMBER.ink}}>α</span> &gt; <span style={{color: NAVY.ink}}>β⁻</span> &gt; <span style={{color: AMBER.ink}}>γ</span>; penetrating the reverse.</>, at: 14},
		{content: <>Products have less mass: the difference → kinetic energy and γ-ray energy.</>, at: 18},
	];
	return (
		<Accent color={ACCENT}>
			<KeyNotesScene notes={notes} size={34} aid={<MiniTable />} />
			<HandTag x={1824} y={116} text="pause to copy" at={cue('key-notes', 'Pause')} size={TYPE.hand} color={ACCENT} anchor="end" />
		</Accent>
	);
};
