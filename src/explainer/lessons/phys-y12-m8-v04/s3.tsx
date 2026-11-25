// Scenes 12 to 17: attempt 1 (two equal painted Suns A and B beside empty HR axes) and its feedback, attempt 2 (a night
// sky with two painted stars, P with a large glow ring and Q with a small one) and its feedback, the handoff (the full
// diagram with five tags; the Sun's core with four hydrogen nuclei, one helium nucleus and "?"; its last frame is
// exported as `M8V04FinalFrame`) and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading} from '../../math/studio';
import {Accent, KeyNotesScene, MemoryCard, QuestionScene} from '../../shared/scenes';
import {TYPE} from '../../shared/tokens';
import {AnswerBox, Chip, CrossedChip, Row} from '../../physics/projectile/board';
import {Disc, SUN} from '../../physics/light/plates';
import {STAR_BLUE, STAR_WHITE} from '../../physics/light/stars';
import {Nucleus, Particle} from '../../physics/light/massenergy';
import {HRAxes, hrX, hrY} from '../../physics/atom/stellar';
import type {HRBox} from '../../physics/atom/stellar';
import {A1_AREA, A1_LA, A1_LB, A1_R, A1_T, ACCENT, HEAD, HEAD_NEXT, HEAD_SIZE, T_SUN, cap, cue, dur, hold} from './common';
import {GREY, HRDiagram, INK, Lbl, NAVY, NEUTRON, ROSE, Shrunk, TEAL, fx} from './parts';
import {HR} from './s1';

// ---------- 12. attempt 1 ----------
const Q1: React.FC<{u?: boolean}> = ({u = false}) => {
	const U = (t: string) => (u ? <u>{t}</u> : t);
	return <>Star A and Star B {U('both')} have a surface temperature of {U('5000 K')}. Star A has a luminosity of {U('0.5 L☉')} and Star B has a luminosity of {U('450 L☉')}. (a) Calculate the ratio of the radius of Star B to the radius of Star A. (b) Identify the type of star B, with a reason.</>;
};
const MINI: HRBox = {x: 420, y: 90, w: 220, h: 300, tHot: 40000, tCool: 2500, lLo: -4, lHi: 6};
const ABPic: React.FC<{w?: number; pts?: number}> = ({w = 678, pts = 0}) => (
	<svg width={w} height={560} style={{overflow: 'visible'}}>
		<rect x={4} y={20} width={668} height={520} rx={16} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} />
		<Disc spec={SUN} cx={130} cy={170} d={130} />
		<Disc spec={SUN} cx={130} cy={360} d={130} />
		<text x={30} y={180} style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 40, fill: INK}}>A</text>
		<text x={30} y={370} style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 40, fill: INK}}>B</text>
		<HRAxes b={MINI} tTicks={[]} lTicks={[]} letters={0} band={0} size={22} xTitle="T" yTitle="L" />
		{pts > 0.001 ? <g opacity={pts}>
			<circle cx={hrX(MINI, A1_T)} cy={hrY(MINI, A1_LA)} r={9} fill="#f6b36a" stroke={INK} strokeWidth={2} />
			<circle cx={hrX(MINI, A1_T)} cy={hrY(MINI, A1_LB)} r={9} fill="#f6b36a" stroke={INK} strokeWidth={2} />
			<text x={hrX(MINI, A1_T) + 14} y={hrY(MINI, A1_LA) + 8} style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 26, fill: INK}}>A</text>
			<text x={hrX(MINI, A1_T) + 14} y={hrY(MINI, A1_LB) + 8} style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 26, fill: INK}}>B</text>
		</g> : null}
		<text x={40} y={500} style={{fontFamily: 'Inter Tight', fontWeight: 700, fontSize: 26, fill: GREY.ink}}>(not to scale)</text>
	</svg>
);
export const S12: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Your turn" pauseAt={cue('attempt-1', 'Pause here')} hold={hold('attempt-1')} size={36} marks={3} picture={<ABPic />}><Q1 /></QuestionScene></Accent>;

// ---------- 13. feedback 1 ----------
export const S13: React.FC = () => {
	const id = 'feedback-1';
	const f = useCurrentFrame();
	const nh = cue(id, 'nine hundred'), th = cue(id, 'thirty'), gi = cue(id, 'giant'), rt = cap(id, cue(id, 'as the radius ratio'));
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk accent={ACCENT} gy={330} givens={<>{`T_A = T_B = ${A1_T} K; L_A = ${A1_LA} L☉; L_B = ${A1_LB} L☉`}</>}><Q1 u /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 440, display: 'flex', flexDirection: 'column', gap: 18, width: 1100}}>
				<Row at={0} size={36}>same T, so the area ratio is the luminosity ratio</Row>
				<Row at={nh - 6} ageAt={th} size={44}>{`L_B / L_A = ${A1_LB} / ${A1_LA} = ${fx(A1_AREA)} = area ratio`}</Row>
				<Row at={th - 6} size={50}><AnswerBox at={th}>{`R_B / R_A = √${fx(A1_AREA)} = ${fx(A1_R)}`}</AnswerBox></Row>
			</div>
			<div style={{position: 'absolute', left: 1230, top: 300}}><ABPic w={620} pts={prog(f, gi, 14)} /></div>
			<Lbl x={96} y={680} at={gi + 10} color={INK} size={34}>B: giant (orange, class K), far above the main sequence</Lbl>
			<CrossedChip x={96} y={760} at={rt} crossAt={rt + 12} size={30} caption="R ∝ √L at the same T">{`R_B / R_A = ${fx(A1_AREA)}`}</CrossedChip>
		</>
	);
};

// ---------- 14. attempt 2 ----------
const Q2: React.FC<{u?: boolean}> = ({u = false}) => {
	const U = (t: string) => (u ? <u>{t}</u> : t);
	return <>Star P {U('appears much brighter')} in the night sky than Star Q. A student claims: {"'"}Star P must be {U('higher on the Hertzsprung-Russell diagram')} than Star Q.{"'"} Evaluate this claim.</>;
};
const SkyPic: React.FC<{w?: number; bars?: number}> = ({w = 678, bars = 0}) => (
	<svg width={w} height={560} style={{overflow: 'visible'}}>
		<rect x={4} y={20} width={668} height={520} rx={16} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} />
		<rect x={30} y={50} width={616} height={260} rx={14} fill="#1d2233" />
		<circle cx={200} cy={180} r={100} fill="#fff6d6" opacity={0.3} />
		<Disc spec={STAR_WHITE} cx={200} cy={180} d={60} />
		<circle cx={480} cy={180} r={34} fill="#fff6d6" opacity={0.3} />
		<Disc spec={STAR_BLUE} cx={480} cy={180} d={40} />
		<text x={200} y={290} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 34, fill: '#f1ece2'}}>P</text>
		<text x={480} y={290} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 34, fill: '#f1ece2'}}>Q</text>
		{bars > 0.001 ? <g opacity={bars}>
			<rect x={170} y={440} width={60} height={60} fill={NAVY.soft} stroke={NAVY.stroke} strokeWidth={3} />
			<rect x={450} y={340} width={60} height={160} fill={NAVY.soft} stroke={NAVY.stroke} strokeWidth={3} />
			<text x={200} y={430} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 26, fill: NAVY.ink}}>near, small L</text>
			<text x={480} y={330} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 26, fill: NAVY.ink}}>far, large L</text>
			<text x={340} y={530} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 700, fontSize: 26, fill: GREY.ink}}>one possibility</text>
		</g> : null}
	</svg>
);
export const S14: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Last one" pauseAt={cue('attempt-2', 'Pause here')} hold={hold('attempt-2')} size={36} marks={3} picture={<SkyPic />}><Q2 /></QuestionScene></Accent>;

// ---------- 15. feedback 2 ----------
const MINI15: HRBox = {x: 200, y: 660, w: 380, h: 200, tHot: 40000, tCool: 2500, lLo: -4, lHi: 6};
export const S15: React.FC = () => {
	const id = 'feedback-2';
	const f = useCurrentFrame();
	const sq = cue(id, 'squared'), mc = cue(id, 'might just be much closer'), sn = cue(id, 'The Sun is the brightest star in our sky'), aw = cue(id, 'away'), lu = cap(id, cue(id, 'more luminous'));
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk accent={ACCENT} gy={300} givens={<>P looks brighter than Q; distances not given</>}><Q2 u /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 410, display: 'flex', flexDirection: 'column', gap: 18, width: 1100}}>
				<Row at={sq - 6} size={44}><AnswerBox at={sq}>apparent brightness ∝ L/d²</AnswerBox></Row>
				<Row at={aw - 6} size={32}><AnswerBox at={aw}>claim valid only at equal distances (for example, stars in one cluster)</AnswerBox></Row>
			</div>
			<div style={{position: 'absolute', left: 1230, top: 300}}><SkyPic w={620} bars={prog(f, mc, 14)} /></div>
			<FrameSvg>
				<g opacity={prog(f, sn, 14)}>
					<HRDiagram b={MINI15} f={f} L={{axes: 1, band: 1, ms: 1}} size={18} ticksT={[]} ticksL={[]} letters={0} colourBand={0} xTitle="T" yTitle="L" />
					<circle cx={hrX(MINI15, T_SUN)} cy={hrY(MINI15, 1)} r={12} fill="#fbe7a1" stroke={INK} strokeWidth={3} />
				</g>
			</FrameSvg>
			<Lbl x={620} y={740} at={sn} color={INK} size={28}>the Sun: brightest in our sky,</Lbl>
			<Lbl x={620} y={780} at={sn} color={INK} size={28}>yet in the middle of the main sequence</Lbl>
			<CrossedChip x={96} y={560} at={lu} crossAt={lu + 12} size={30} caption="apparent brightness also depends on distance">brighter in the sky = more luminous</CrossedChip>
		</>
	);
};

// ---------- 16. handoff ----------
const HD = (() => {
	const id = 'handoff-v05';
	return {id, tc: cue(id, 'temperature, colour, luminosity, size and stage'), mo: cue(id, 'most stars are on the main sequence'), fh: cue(id, 'fusing hydrogen into helium'), nx: cap(id, cue(id, 'So why do main-sequence stars')), end: dur(id) - 1};
})();
const CORE = {x: 300, y: 600, r: 150};
const TAGS16 = [{t: 'temperature', x: HR.x + 560, y: HR.y + HR.h + 120}, {t: 'colour', x: HR.x + 160, y: HR.y - 70}, {t: 'luminosity', x: HR.x - 200, y: HR.y + 40}, {t: 'size', x: HR.x + HR.w - 160, y: HR.y + 40}, {t: 'stage', x: HR.x + 840, y: HR.y + 420}] as const;
/** The handoff board at scene frame f (`final`: every part drawn, for the next video's first frame). */
export const HandoffBoard04: React.FC<{f: number; final?: boolean; heading?: boolean; chip?: boolean; marks?: boolean}> = ({f, final = false, heading = true, chip = true, marks = true}) => {
	const at = (x: number) => (final ? -60 : x);
	const o = (x: number, d = 14) => (final ? 1 : prog(f, x, d));
	const sx = hrX(HR, T_SUN), sy = hrY(HR, 1);
	return (
		<>
			{heading ? (!final ? <><SceneHeading text={HEAD} at={-200} out={HD.nx} size={HEAD_SIZE} /><SceneHeading text={HEAD_NEXT} at={HD.nx + 8} size={HEAD_SIZE} /></> : <SceneHeading text={HEAD_NEXT} at={-200} size={HEAD_SIZE} />) : null}
			<FrameSvg>
				<HRDiagram b={HR} f={f} L={{axes: 1, band: 1 + 0.3 * o(HD.mo), ms: 1, regions: 1, giants: 1, dwarfs: 1, labels: 1, dim: 1 - 0.45 * o(HD.mo)}} />
				<g opacity={o(HD.fh)}>
					<line x1={sx} y1={sy} x2={CORE.x + CORE.r} y2={CORE.y} stroke={INK} strokeWidth={2.5} strokeDasharray="6 5" />
					<circle cx={sx} cy={sy} r={12} fill="#fbe7a1" stroke={INK} strokeWidth={3} />
					<circle cx={CORE.x} cy={CORE.y} r={CORE.r} fill="#fff1d0" stroke={AMBER_STROKE} strokeWidth={4} />
					{[[-80, -40], [-40, -70], [-80, 30], [-40, 60]].map(([dx, dy], i) => <Particle key={i} x={CORE.x + dx} y={CORE.y + dy} r={22} color={ROSE.stroke} text="¹H" size={18} />)}
					<path d={`M${CORE.x - 10},${CORE.y} H${CORE.x + 40}`} stroke={INK} strokeWidth={4} strokeDasharray="8 6" /><path d={`M${CORE.x + 54},${CORE.y} l-16,-9 v18 z`} fill={INK} />
					<Nucleus cx={CORE.x + 94} cy={CORE.y} p={2} n={2} r={14} proton={ROSE.stroke} neutron={NEUTRON} />
					<text x={CORE.x + 20} y={CORE.y - 22} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 40, fill: INK}}>?</text>
				</g>
			</FrameSvg>
			{TAGS16.map((g, i) => <Chip key={g.t} x={g.x} y={g.y} at={at(HD.tc + 6 * i)} size={26} color={TEAL.ink}>{g.t}</Chip>)}
			<Lbl x={CORE.x} y={CORE.y + CORE.r + 34} at={at(HD.fh)} color={INK} size={26} anchor="middle">{"the Sun's core"}</Lbl>
			<Lbl x={CORE.x + 94} y={CORE.y + 50} at={at(HD.fh)} color={INK} size={26} anchor="middle">⁴He</Lbl>
			{marks ? <HandTag x={CORE.x - 140} y={CORE.y - CORE.r - 40} text="energy?" at={at(HD.fh + 20)} size={38} color={ROSE.ink} marks={[{kind: 'circle', cx: CORE.x, cy: CORE.y, rx: CORE.r + 16, ry: CORE.r + 14}]} /> : null}
			{chip ? <Chip x={96} y={870} at={at(HD.nx)} size={30} w={1728} color={INK} border={INK}>Next: why do main-sequence stars release energy by combining light nuclei?</Chip> : null}
		</>
	);
};
const AMBER_STROKE = '#d18f1f';
/** v04's final frame for the next video. */
export const M8V04FinalFrame: React.FC = () => <HandoffBoard04 f={HD.end} final />;
export const S16: React.FC = () => <HandoffBoard04 f={useCurrentFrame()} />;

// ---------- 17. key notes ----------
export const S17: React.FC = () => {
	const notes = [
		{content: <>HR: <span style={{color: NAVY.ink}}>luminosity (power) up</span>, temperature down to the right.</>, at: 2},
		{content: <>Luminosity ≠ apparent brightness (falls with d²).</>, at: 6},
		{content: <>Main sequence: ~90% of stars, core H fusion.</>, at: 10},
		{content: <>Same T: <span style={{color: TEAL.ink}}>R ratio = √(L ratio)</span>.</>, at: 14},
		{content: <>Top right: giants (huge); bottom left: white dwarfs (tiny).</>, at: 18},
	];
	const MB: HRBox = {x: 120, y: 30, w: 400, h: 170, tHot: 40000, tCool: 2500, lLo: -4, lHi: 6};
	return (
		<Accent color={ACCENT}>
			<KeyNotesScene notes={notes} size={34} aid={<MemoryCard at={24} main={<>Up is power, left is hot. Top right is huge, bottom left is tiny.</>} picture={<svg width={580} height={220}><HRDiagram b={MB} f={0} L={{axes: 1, band: 1, regions: 1}} size={18} ticksT={[]} ticksL={[]} letters={0} colourBand={0} xTitle="T" yTitle="L" /></svg>} />} />
			<HandTag x={1824} y={116} text="pause to copy" at={cue('key-notes', 'Pause')} size={TYPE.hand} color={ACCENT} anchor="end" />
		</Accent>
	);
};
