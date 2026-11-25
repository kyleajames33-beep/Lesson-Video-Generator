// Scenes 13 to 18: attempt 1 (three helium-4 nuclei and one carbon-12, no masses on the picture) and its feedback,
// attempt 2 (the painted Sun and hot-blue star, each with an empty core circle) and its feedback, the handoff (the
// periodic table shrinking to a strip, the gold cell becoming a plain grey atom, the painted Maltese-cross tube with its
// glow off; its last frame is exported as `M8V06FinalFrame`) and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading} from '../../math/studio';
import {Accent, KeyNotesScene, MemoryCard, QuestionScene} from '../../shared/scenes';
import {TYPE} from '../../shared/tokens';
import {AnswerBox, Chip, CrossedChip, Row} from '../../physics/projectile/board';
import {Disc, LPlate, SUN} from '../../physics/light/plates';
import {STAR_BLUE} from '../../physics/light/stars';
import {Nucleus} from '../../physics/light/massenergy';
import {BindingCurve, NucEq, bcX} from '../../physics/atom/nuclear';
import {ElementStrip, PeriodicTable, ReachBar, TempLadder} from '../../physics/atom/elements';
import {MALTESE} from '../../physics/atom/electron';
import {HE4} from '../phys-y12-m8-v05/parts';
import {ACCENT, HEAD, HEAD_NEXT, HEAD_SIZE, M_C12, M_HE4, M_MASSIVE, TA_DM, TA_E, TA_R, TA_SLIP, U_MEV, cap, cue, dur, hold} from './common';
import {GREY, INK, LADDER_MARKS, Lbl, NEUTRON, NucDisc, PURPLE, RED, ROSE, SRC_FILL, Shrunk, TEAL, fillAt, fx, srcOf} from './parts';
import {MassBars} from '../phys-y12-m8-v05/parts';
import {PT11} from './s2';

// ---------- 13. attempt 1 ----------
const Q1: React.FC<{u?: boolean}> = ({u = false}) => {
	const U = (t: string) => (u ? <u>{t}</u> : t);
	return <>In the triple alpha process, <NucEq terms={[{...HE4, k: 3}, '→', {A: 12, Z: 6, s: 'C'}]} size={u ? 34 : 36} weight={600} />. Atomic masses: ⁴He {U(`${M_HE4} u`)}, ¹²C {U(`${M_C12.toFixed(6)} u`)}. Calculate the energy released, in MeV. (1 u = {U_MEV} MeV/c²)</>;
};
const Pic1: React.FC<{w?: number}> = ({w = 678}) => (
	<svg width={w} height={560} viewBox="0 0 678 560" style={{overflow: 'visible'}}>
		<rect x={4} y={20} width={668} height={520} rx={16} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} />
		{[[120, 160], [120, 290], [120, 420]].map(([x, y], i) => <g key={i}><Nucleus cx={x} cy={y} p={2} n={2} r={22} proton={ROSE.stroke} neutron={NEUTRON} /><path d={`M${x + 70},${y} L320,290`} stroke={INK} strokeWidth={3} /></g>)}
		<path d="M340,290 H420" stroke={INK} strokeWidth={5} /><path d="M440,290 l-22,-12 v24 z" fill={INK} />
		<NucDisc x={540} y={290} r={60} text="¹²C" />
		<text x={120} y={510} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 28, fill: INK}}>3 × ⁴He</text>
	</svg>
);
export const S13: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Your turn" pauseAt={cue('attempt-1', 'Pause here')} hold={hold('attempt-1')} size={36} marks={3} picture={<Pic1 />}><Q1 /></QuestionScene></Accent>;

// ---------- 14. feedback 1 ----------
export const S14: React.FC = () => {
	const id = 'feedback-1';
	const tr = cue(id, 'Three helium fours have a mass'), ml = cue(id, 'the mass lost is'), me = cue(id, 'about seven point two seven MeV'), ab = cap(id, cue(id, 'deciding energy is absorbed'));
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk accent={ACCENT} gy={330} givens={<>{`⁴He ${M_HE4} u; ¹²C ${M_C12.toFixed(6)} u; 1 u = ${U_MEV} MeV/c²`}</>}><Q1 u /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 440, display: 'flex', flexDirection: 'column', gap: 16, width: 1100}}>
				<Row at={tr} ageAt={me} size={44}>{`reactants: 3 × ${M_HE4} = ${fx(TA_R, 6)} u`}</Row>
				<Row at={ml} ageAt={me} size={46}>{`Δm = ${fx(TA_R, 6)} − ${M_C12.toFixed(6)} = ${fx(TA_DM, 6)} u`}</Row>
				<Row at={me - 6} size={52}><AnswerBox at={me}>{`E = ${fx(TA_DM, 6)} × ${U_MEV} ≈ ${fx(TA_E, 2)} MeV`}</AnswerBox></Row>
			</div>
			<div style={{position: 'absolute', left: 1230, top: 300}}><Pic1 w={620} /></div>
			<FrameSvg><MassBars x={1010} base={900} h={200} gap={200 * (TA_DM / TA_R) * 100} w={80} sep={50} /></FrameSvg>
			<Lbl x={1050} y={680} at={0} color={TEAL.ink} size={26} anchor="middle">3 ⁴He</Lbl>
			<Lbl x={1180} y={680} at={0} color={TEAL.ink} size={26} anchor="middle">¹²C</Lbl>
			<Lbl x={1240} y={900} at={0} color={GREY.ink} size={26}>mass (gap × 100)</Lbl>
			<CrossedChip x={96} y={780} at={ab} crossAt={ab + 12} size={28} caption="Δm = reactants − products">{`Δm = ${M_C12.toFixed(6)} − ${fx(TA_R, 6)} = ${fx(TA_SLIP, 4)} u: energy absorbed`}</CrossedChip>
		</>
	);
};

// ---------- 15. attempt 2 ----------
const Q2: React.FC<{u?: boolean}> = ({u = false}) => {
	const U = (t: string) => (u ? <u>{t}</u> : t);
	return <>Explain why a star of {U('20 solar masses')} can produce iron in its core, but a star of {U('1 solar mass')} cannot.</>;
};
const Pic2: React.FC<{w?: number}> = ({w = 678}) => (
	<svg width={w} height={560} viewBox="0 0 678 560" style={{overflow: 'visible'}}>
		<rect x={4} y={20} width={668} height={520} rx={16} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} />
		<Disc spec={SUN} cx={170} cy={260} d={180} />
		<Disc spec={STAR_BLUE} cx={490} cy={260} d={300} />
		<circle cx={170} cy={260} r={36} fill="#fffdf8" stroke={INK} strokeWidth={3} strokeDasharray="8 6" />
		<circle cx={490} cy={260} r={48} fill="#fffdf8" stroke={INK} strokeWidth={3} strokeDasharray="8 6" />
		<text x={170} y={470} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 32, fill: INK}}>1 M☉</text>
		<text x={490} y={470} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 32, fill: INK}}>20 M☉</text>
		<text x={340} y={520} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 700, fontSize: 30, fill: GREY.ink}}>cores (not to scale)</text>
	</svg>
);
export const S15: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Last one" pauseAt={cue('attempt-2', 'Pause here')} hold={hold('attempt-2')} size={36} marks={3} picture={<Pic2 />}><Q2 /></QuestionScene></Accent>;

// ---------- 16. feedback 2 ----------
export const S16: React.FC = () => {
	const id = 'feedback-2';
	const ch = cue(id, 'starting with helium and carbon'), ir = cue(id, 'hot enough for silicon to fuse into iron'), ox = cue(id, 'so it stops at carbon and oxygen'), sl = cue(id, 'The slip is saying'), fa = cap(id, cue(id, 'It actually burns much faster'));
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk accent={ACCENT} gy={290} givens={<>{`20 M☉ star; 1 M☉ star; iron in the core?`}</>}><Q2 u /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 400, display: 'flex', flexDirection: 'column', gap: 18, width: 1100}}>
				<Row at={ch} size={36}>each later fuel needs a hotter core (He, C: bigger charges)</Row>
				<Row at={ir - 6} size={40}><AnswerBox at={ir}>20 M☉: stronger gravity → core ≈ 3 × 10⁹ K → Si → Fe</AnswerBox></Row>
				<Row at={ox - 6} size={40}><AnswerBox at={ox}>1 M☉: core never reaches ~6 × 10⁸ K → stops at C and O</AnswerBox></Row>
			</div>
			<div style={{position: 'absolute', left: 1230, top: 300}}><Pic2 w={620} /></div>
			<CrossedChip x={96} y={760} at={sl} crossAt={fa} size={28} caption="massive stars burn faster: millions, not billions, of years">more fuel, so it burns for longer and gets further</CrossedChip>
		</>
	);
};

// ---------- 17. handoff ----------
const HD = (() => {
	const id = 'handoff-v07';
	return {id, cg: cue(id, 'everything from carbon to gold'), el: cue(id, 'has electrons inside it'), nk: cue(id, 'nobody knew electrons existed'), gt: cue(id, 'glowing glass tubes'), nx: cap(id, cue(id, 'So how did cathode rays and oil drops reveal')), end: dur(id) - 1};
})();
export const STRIP = {x0: 96, y: 176, w: 18.7, h: 40};
export const ATOM = {x: 360, y: 560, r: 150};
export const TUBE = {x: 1040, y: 430, w: 780};
const stripFill = (Z: number) => SRC_FILL[srcOf(Z)];
/** The handoff board at scene frame f (`final`: every part drawn, for the next video's first frame). */
export const HandoffBoard06: React.FC<{f: number; final?: boolean; heading?: boolean; chip?: boolean; marks?: boolean; tube?: boolean; atom?: boolean; strip?: boolean}> = ({f, final = false, heading = true, chip = true, marks = true, tube = true, atom = true, strip = true}) => {
	const at = (x: number) => (final ? -60 : x);
	const o = (x: number, d = 14) => (final ? 1 : prog(f, x, d));
	const shrink = final ? 1 : prog(f, HD.cg, 24);
	const lift = final ? 1 : prog(f, HD.el, 30);
	const au = 78, sx = STRIP.x0 + au * STRIP.w + STRIP.w / 2, sy = STRIP.y + STRIP.h / 2;
	const ax = sx + (ATOM.x - sx) * lift, ay = sy + (ATOM.y - sy) * lift, ar = 10 + (ATOM.r - 10) * lift;
	const gold = '#e3c060', grey = '#c9c3b8';
	return (
		<>
			{heading ? (!final ? <><SceneHeading text={HEAD} at={-200} out={HD.nx} size={HEAD_SIZE} /><SceneHeading text={HEAD_NEXT} at={HD.nx + 8} size={HEAD_SIZE} /></> : <SceneHeading text={HEAD_NEXT} at={-200} size={HEAD_SIZE} />) : null}
			<FrameSvg>
				{!final && shrink < 1 ? <g opacity={1 - shrink}><PeriodicTable b={PT11} fill={fillAt(9999, {bb: 0, sun: 0, massive: 0, s: 0, r: 0})} size={26} /></g> : null}
				{strip ? <ElementStrip x0={STRIP.x0} y={STRIP.y} w={STRIP.w} h={STRIP.h} fill={stripFill} opacity={shrink} hideZ={lift > 0.02 ? 79 : undefined} /> : null}
				{atom && lift > 0.02 ? <circle cx={ax} cy={ay} r={ar} fill={lift < 1 ? gold : grey} stroke={INK} strokeWidth={4} opacity={1} /> : null}
				{atom && !final && lift > 0.6 ? <circle cx={ax} cy={ay} r={ar} fill={gold} opacity={1 - prog(f, HD.el + 30, 30)} /> : null}
				{tube ? <LPlate spec={MALTESE} p={{x: TUBE.x, y: TUBE.y, w: TUBE.w}} opacity={o(HD.gt)} /> : null}
			</FrameSvg>
			{strip ? <><Lbl x={STRIP.x0} y={STRIP.y + STRIP.h + 30} at={at(HD.cg + 20)} color={INK} size={26}>H</Lbl><Lbl x={STRIP.x0 + 25 * STRIP.w} y={STRIP.y + STRIP.h + 30} at={at(HD.cg + 20)} color={INK} size={26}>Fe</Lbl><Lbl x={STRIP.x0 + 91 * STRIP.w} y={STRIP.y + STRIP.h + 30} at={at(HD.cg + 20)} color={INK} size={26}>U</Lbl></> : null}
			{atom ? <Lbl x={ATOM.x} y={ATOM.y + ATOM.r + 44} at={at(HD.el + 20)} color={INK} size={30} anchor="middle">Au (gold)</Lbl> : null}
			{atom ? <Lbl x={ATOM.x} y={ATOM.y - ATOM.r - 30} at={at(HD.el + 30)} out={final ? undefined : HD.nk} color={INK} size={28} anchor="middle">electrons inside?</Lbl> : null}
			{atom ? <Lbl x={ATOM.x} y={ATOM.y - ATOM.r - 30} at={at(HD.nk + 6)} color={INK} size={28} anchor="middle">electrons inside? (unknown before 1897)</Lbl> : null}
			{tube ? <Lbl x={TUBE.x + TUBE.w / 2} y={TUBE.y - 40} at={at(HD.gt + 10)} color={INK} size={28} anchor="middle">1890s: cathode rays</Lbl> : null}
			{tube && marks ? <HandTag x={TUBE.x + 160} y={TUBE.y + 330} text="glass tube, no glow yet" at={at(HD.gt + 24)} size={32} color={GREY.ink} /> : null}
			{chip ? <Chip x={96} y={870} at={at(HD.nx)} size={30} w={1728} color={INK} border={INK}>Next: how did cathode rays and oil drops reveal the electron?</Chip> : null}
		</>
	);
};
/** v06's final frame for the next video. */
export const M8V06FinalFrame: React.FC = () => <HandoffBoard06 f={HD.end} final />;
export const S17: React.FC = () => <HandoffBoard06 f={useCurrentFrame()} />;

// ---------- 18. key notes ----------
export const S18: React.FC = () => {
	const notes = [
		{content: <>Fuel out: core contracts and <span style={{color: RED.ink}}>heats</span>; star swells (giant).</>, at: 2},
		{content: <>~10⁸ K: 3 ⁴He → ¹²C; ¹²C + ⁴He → ¹⁶O.</>, at: 6},
		{content: <><span style={{color: PURPLE.ink}}>More mass</span>, hotter core: Sun stops at C, O; {`> ~${M_MASSIVE}`} M☉ reach Fe.</>, at: 10},
		{content: <>Iron-group peak: no energy-releasing fuel, so collapse.</>, at: 14},
		{content: <>Past iron: neutron capture + β⁻ decay (slow, rapid).</>, at: 18},
	];
	const LG = {x: 120, y0: 200, y1: 40, lo: 7, hi: 9.7};
	const BC = {x: 300, y: 50, w: 240, h: 130};
	return (
		<Accent color={ACCENT}>
			<KeyNotesScene notes={notes} size={34} aid={<MemoryCard at={24} main={<>Heavier star, hotter core, heavier elements, until iron says stop. Past iron, add neutrons.</>} picture={<svg width={580} height={220}><TempLadder g={LG} color={RED.stroke} marks={LADDER_MARKS().map(m => ({...m, label: ''}))} w={18} /><ReachBar g={LG} T={1e8} dx={-40} color={PURPLE.stroke} w={14} /><ReachBar g={LG} T={3e9} dx={-64} color={PURPLE.stroke} w={14} /><BindingCurve b={BC} ticksA={[]} ticksB={[]} xTitle="" yTitle="" width={4} /><rect x={bcX(BC, 56) - 4} y={BC.y - 10} width={8} height={BC.h + 10} fill={RED.stroke} /></svg>} />} />
			<HandTag x={1824} y={116} text="pause to copy" at={cue('key-notes', 'Pause')} size={TYPE.hand} color={ACCENT} anchor="end" />
		</Accent>
	);
};
