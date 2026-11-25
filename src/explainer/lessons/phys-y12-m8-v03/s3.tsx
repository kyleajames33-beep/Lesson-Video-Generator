// Scenes 12 to 17: attempt 1 (an unlabelled curve with a peak marker and a strip with metal lines and faint bands, the
// approximate class table) and its feedback, attempt 2 (the painted hot-blue star P and cool-red star Q above unlabelled
// strips) and its feedback, the handoff (two painted cool-red stars of the same class, a million times apart in power,
// in front of empty luminosity and temperature axes; its last frame is exported as `M8V03FinalFrame`) and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading} from '../../math/studio';
import {Accent, KeyNotesScene, MemoryCard, QuestionScene} from '../../shared/scenes';
import {TYPE} from '../../shared/tokens';
import {AnswerBox, Chip, CrossedChip, Row} from '../../physics/projectile/board';
import {LPlate} from '../../physics/light/plates';
import {STAR_BLUE, STAR_RED} from '../../physics/light/stars';
import {SpectrumStrip, nmX} from '../../physics/light/spectrum';
import {planck} from '../../sims/blackbody';
import {CLASSES, CLASS_RANGE_TEXT, CLASS_SWATCH, HRAxes, StarCurve} from '../../physics/atom/stellar';
import type {HRBox} from '../../physics/atom/stellar';
import {A1_LAM, A1_SLIP, A1_T, ACCENT, HE2, HEAD, HEAD_NEXT, HEAD_SIZE, H_LINES, TIO, cap, cue, dur, hStrength, hold} from './common';
import {GREY, INK, Lbl, NAVY, RED, Shrunk, sci} from './parts';

/** M-star strip: continuum shaped by a 3500 K black body, with TiO bands. */
const MStrip: React.FC<{s: {x: number; y: number; w: number; h: number}; bands?: number; hw?: number}> = ({s, bands = 0.85, hw = 0}) => {
	const top = planck(828e-9, 3500);
	return (
		<g>
			<SpectrumStrip s={s} kind="absorption" lines={H_LINES} strengths={H_LINES.map(() => hw)} profile={nm => planck(nm * 1e-9, 3500) / top} lineW={5} />
			{TIO.map(nm => { const x = nmX(s, nm); return <g key={nm}><rect x={x} y={s.y} width={3} height={s.h} fill="#14110f" opacity={bands} /><rect x={x + 3} y={s.y} width={s.w * 0.035} height={s.h} fill="#14110f" opacity={0.5 * bands} /></g>; })}
		</g>
	);
};

// ---------- 12. attempt 1 ----------
const Q1: React.FC<{u?: boolean}> = ({u = false}) => {
	const U = (t: string) => (u ? <u>{t}</u> : t);
	return <>The continuous spectrum of a star has its peak intensity at a wavelength of {U('725 nm')}. Its absorption spectrum shows strong lines of metals and {U('weak molecular bands')}. (a) Calculate the star{"'"}s surface temperature. (b) Identify the star{"'"}s spectral class, giving a reason.{u ? null : <><br /><span style={{fontSize: '0.85em'}}>b = 2.898 × 10⁻³ m K</span></>}</>;
};
const METALS = [430.8, 438.4, 516.7, 518.4, 527.0, 589.0] as const;
const PeakPic: React.FC<{w?: number}> = ({w = 678}) => (
	<svg width={w} height={560} style={{overflow: 'visible'}}>
		<rect x={4} y={20} width={668} height={520} rx={16} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} />
		<line x1={40} y1={200} x2={620} y2={200} stroke={INK} strokeWidth={3} /><line x1={40} y1={200} x2={40} y2={50} stroke={INK} strokeWidth={3} />
		<StarCurve g={{x: 40, y: 60, w: 580, h: 140, nm0: 200, nm1: 2000}} temp={4000} width={4} />
		<line x1={40 + ((725 - 200) / 1800) * 580} y1={60} x2={40 + ((725 - 200) / 1800) * 580} y2={200} stroke={INK} strokeWidth={2.5} strokeDasharray="6 5" />
		<text x={330} y={232} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 700, fontSize: 26, fill: INK}}>wavelength</text>
		<SpectrumStrip s={{x: 40, y: 250, w: 580, h: 50}} kind="absorption" lines={METALS} lineW={4} />
		{TIO.slice(2).map(nm => <rect key={nm} x={nmX({x: 40, y: 250, w: 580, h: 50}, nm)} y={250} width={16} height={50} fill="#14110f" opacity={0.25} />)}
		{CLASSES.map((c, i) => { const col = i < 4 ? 0 : 1, row = i < 4 ? i : i - 4; return <g key={c}><circle cx={44 + col * 300} cy={350 + row * 40} r={13} fill={CLASS_SWATCH[c]} stroke={INK} strokeWidth={2} /><text x={66 + col * 300} y={359 + row * 40} style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 26, fill: INK}}>{`${c}: ${CLASS_RANGE_TEXT[c]}`}</text></g>; })}
		<text x={366} y={479} style={{fontFamily: 'Inter Tight', fontWeight: 700, fontSize: 26, fill: GREY.ink}}>(approximate)</text>
	</svg>
);
export const S12: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Your turn" pauseAt={cue('attempt-1', 'Pause here')} hold={hold('attempt-1')} size={36} marks={3} picture={<PeakPic />}><Q1 /></QuestionScene></Accent>;

// ---------- 13. feedback 1 ----------
export const S13: React.FC = () => {
	const id = 'feedback-1';
	const f = useCurrentFrame();
	const kv = cue(id, 'kelvin'), st = cue(id, 'star'), me = cap(id, cue(id, 'to metres'));
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk accent={ACCENT} gy={300} givens={<>λmax = 725 nm = {sci(A1_LAM, 2)} m; b = 2.898 × 10⁻³ m K</>}><Q1 u /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 420, display: 'flex', flexDirection: 'column', gap: 18, width: 1100}}>
				<Row at={kv - 6} size={46}><AnswerBox at={kv}>{`T = (2.898 × 10⁻³) / (${sci(A1_LAM, 2)}) = ${sci(A1_T, 1)} K`}</AnswerBox></Row>
				<div style={{display: 'flex', alignItems: 'center', gap: 16}}><Row at={st - 6} size={40}><AnswerBox at={st}>K (about 3500 to 5200 K); metals strong, molecules only beginning</AnswerBox></Row><div style={{flex: 'none', width: 50, height: 50, borderRadius: 25, background: CLASS_SWATCH.K, border: `3px solid ${INK}`, opacity: prog(f, st, 12)}} /></div>
			</div>
			<div style={{position: 'absolute', left: 1230, top: 300}}><PeakPic w={620} /></div>
			<CrossedChip x={96} y={720} at={me} crossAt={me + 12} size={30} caption="nm → m: × 10⁻⁹">{`T = (2.898 × 10⁻³) / 725 = ${sci(A1_SLIP, 1)} K`}</CrossedChip>
		</>
	);
};

// ---------- 14. attempt 2 ----------
const Q2: React.FC<{u?: boolean}> = ({u = false}) => {
	const U = (t: string) => (u ? <u>{t}</u> : t);
	return <>Star P and Star Q have the {U('same chemical composition')}. Star P{"'"}s spectrum shows strong lines of {U('ionised helium')}. Star Q{"'"}s spectrum shows strong {U('titanium oxide')} bands. Both stars show {U('weak hydrogen')} absorption lines. Identify the spectral class of each star, and explain why both have weak hydrogen lines.</>;
};
const PQPic: React.FC<{w?: number; hump?: number}> = ({w = 678, hump = 0}) => {
	const HX = (T: number) => 60 + ((Math.log10(40000) - Math.log10(T)) / (Math.log10(40000) - Math.log10(3000))) * 560;
	return (
		<svg width={w} height={560} style={{overflow: 'visible'}}>
			<rect x={4} y={20} width={668} height={520} rx={16} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} />
			<LPlate spec={STAR_BLUE} p={{x: 110, y: 40, w: 150}} />
			<LPlate spec={STAR_RED} p={{x: 420, y: 40, w: 150}} />
			<text x={70} y={110} style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 44, fill: INK}}>P</text>
			<text x={600} y={110} style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 44, fill: INK}}>Q</text>
			<SpectrumStrip s={{x: 40, y: 220, w: 290, h: 46}} kind="absorption" lines={[...H_LINES, HE2]} strengths={[0.2, 0.2, 0.2, 0.2, 1]} lineW={5} />
			<MStrip s={{x: 350, y: 220, w: 290, h: 46}} hw={0.2} />
			{hump > 0.001 ? <g opacity={hump}>
				<line x1={60} y1={480} x2={630} y2={480} stroke={INK} strokeWidth={3} />
				<path d={Array.from({length: 41}, (_, k) => { const T = 10 ** (Math.log10(40000) - ((Math.log10(40000) - Math.log10(3000)) * k) / 40); return `${k ? 'L' : 'M'}${HX(T).toFixed(1)},${(480 - 150 * hStrength(T)).toFixed(1)}`; }).join(' ')} fill="none" stroke={RED.stroke} strokeWidth={4} />
				<circle cx={HX(35000)} cy={480 - 150 * hStrength(35000)} r={10} fill={NAVY.stroke} /><text x={HX(35000)} y={440} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 30, fill: NAVY.ink}}>P</text>
				<circle cx={HX(3300)} cy={480 - 150 * hStrength(3300)} r={10} fill={NAVY.stroke} /><text x={HX(3300)} y={440} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 30, fill: NAVY.ink}}>Q</text>
				<text x={340} y={520} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 700, fontSize: 26, fill: INK}}>H line strength; hotter to the left</text>
			</g> : null}
		</svg>
	);
};
export const S14: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Last one" pauseAt={cue('attempt-2', 'Pause here')} hold={hold('attempt-2')} size={36} marks={3} picture={<PQPic />}><Q2 /></QuestionScene></Accent>;

// ---------- 15. feedback 2 ----------
export const S15: React.FC = () => {
	const id = 'feedback-2';
	const f = useCurrentFrame();
	const ab = cue(id, 'absorb'), wh = cue(id, 'where the visible hydrogen lines start'), ln = cue(id, 'same weak lines'), hy = cap(id, cue(id, 'little hydrogen'));
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk accent={ACCENT} gy={330} givens={<>same composition; P: He II strong; Q: TiO strong; both: weak H</>}><Q2 u /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 440, display: 'flex', flexDirection: 'column', gap: 18, width: 1100}}>
				<Row at={ab - 6} size={40}><AnswerBox at={ab}>P: class O (&gt; 30 000 K): H mostly ionised</AnswerBox></Row>
				<Row at={wh - 6} size={40}><AnswerBox at={wh}>Q: class M (below about 3500 K): electrons stay in n = 1</AnswerBox></Row>
			</div>
			<div style={{position: 'absolute', left: 1230, top: 300}}><PQPic w={620} hump={prog(f, ln, 16)} /></div>
			<CrossedChip x={96} y={720} at={hy} crossAt={hy + 12} size={30} caption="line strength depends on T">weak hydrogen lines mean little hydrogen</CrossedChip>
		</>
	);
};

// ---------- 16. handoff ----------
const HD = (() => {
	const id = 'handoff-v04';
	return {id, fc: cue(id, 'from its curve and from its lines'), tm: cue(id, 'These two M stars have the same temperature'), ot: cue(id, 'other'), ta: cue(id, "Temperature alone can't tell you that"), sg: cap(id, cue(id, 'So how does the HR diagram')), end: dur(id) - 1};
})();
export const AX3: HRBox = {x: 240, y: 240, w: 1440, h: 560, tHot: 30000, tCool: 3000, lLo: -3, lHi: 5};
export const SMALL = {x: 330, y: 330, w: 140}, BIG = {x: 1080, y: 200, w: 520};
export const SS = {x: 250, y: 500, w: 320, h: 44}, BS = {x: 1060, y: 740, w: 560, h: 50};
const LB = {x: 760, base: 760};
/** The scene's first beat: the intensity curve and the hydrogen hump, shrinking into the two tags on "from its curve". */
const Opening: React.FC<{f: number}> = ({f}) => {
	const u = prog(f, HD.fc, 30), o = 1 - prog(f, HD.fc + 24, 10);
	if (o <= 0.001) return null;
	const k = 1 - 0.8 * u;
	return (
		<g opacity={o}>
			<g transform={`translate(${200 + (96 - 200) * u} ${260 + (168 - 260) * u}) scale(${k})`}>
				<line x1={0} y1={360} x2={700} y2={360} stroke={INK} strokeWidth={3} />
				<StarCurve g={{x: 0, y: 40, w: 700, h: 320, nm0: 200, nm1: 1200}} temp={5800} dips={[{nm: 434, depth: 0.4}, {nm: 486.1, depth: 0.4}, {nm: 589, depth: 0.4}, {nm: 656.3, depth: 0.4}]} />
				<text x={0} y={20} style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 30, fill: INK}}>curve → T</text>
			</g>
			<g transform={`translate(${1000 + (300 - 1000) * u} ${260 + (168 - 260) * u}) scale(${k})`}>
				<line x1={0} y1={360} x2={700} y2={360} stroke={INK} strokeWidth={3} />
				<path d={Array.from({length: 41}, (_, i) => { const T = 10 ** (Math.log10(40000) - ((Math.log10(40000) - Math.log10(3000)) * i) / 40); return `${i ? 'L' : 'M'}${(i * 17.5).toFixed(1)},${(360 - 300 * hStrength(T)).toFixed(1)}`; }).join(' ')} fill="none" stroke={RED.stroke} strokeWidth={5} />
				<text x={0} y={20} style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 30, fill: INK}}>lines → T, class</text>
			</g>
		</g>
	);
};
/** The handoff board at scene frame f (`final`: every part drawn, for the next video's first frame). */
export const HandoffBoard03: React.FC<{f: number; final?: boolean; heading?: boolean; chip?: boolean; tags?: boolean; crossed?: boolean; axes?: boolean}> = ({f, final = false, heading = true, chip = true, tags = true, crossed = true, axes = true}) => {
	const at = (x: number) => (final ? -60 : x);
	const o = (x: number, d = 14) => (final ? 1 : prog(f, x, d));
	return (
		<>
			{heading ? (!final ? <><SceneHeading text={HEAD} at={-200} out={HD.sg} size={HEAD_SIZE} /><SceneHeading text={HEAD_NEXT} at={HD.sg + 8} size={HEAD_SIZE} /></> : <SceneHeading text={HEAD_NEXT} at={-200} size={HEAD_SIZE} />) : null}
			<FrameSvg>
				{!final ? <Opening f={f} /> : null}
				{axes ? <HRAxes b={AX3} tTicks={[30000, 10000, 5000, 3000]} lTicks={[-2, 0, 2, 4]} letters={0} band={0} xTitle="temperature (K)" yTitle="luminosity" opacity={o(HD.sg - 30)} /> : null}
				<g opacity={o(HD.tm)}>
					<LPlate spec={STAR_RED} p={SMALL} />
					<LPlate spec={STAR_RED} p={BIG} />
					<MStrip s={SS} />
					<MStrip s={BS} />
				</g>
				<g opacity={o(HD.ot)}>
					<rect x={LB.x} y={LB.base - 30} width={60} height={30} fill={NAVY.soft} stroke={NAVY.stroke} strokeWidth={3} />
					<rect x={LB.x + 140} y={LB.base - 30 - 6 * 56} width={60} height={30 + 6 * 56} fill={NAVY.soft} stroke={NAVY.stroke} strokeWidth={3} />
				</g>
			</FrameSvg>
			{tags ? <><Chip x={96} y={168} at={at(HD.fc)} size={26} color={INK}>λmax → T</Chip><Chip x={300} y={168} at={at(HD.fc + 8)} size={26} color={INK}>lines → T, class</Chip></> : null}
			<Lbl x={SS.x} y={SS.y + SS.h + 34} at={at(HD.tm + 10)} color={INK} size={26}>class M, about 3500 K</Lbl>
			<Lbl x={BS.x} y={BS.y + BS.h + 34} at={at(HD.tm + 10)} color={INK} size={26}>class M, about 3500 K</Lbl>
			<HandTag x={96} y={285} text="same peak, same class" at={at(HD.tm + 30)} size={34} color={RED.ink} />
			<Lbl x={LB.x + 30} y={LB.base + 34} at={at(HD.ot)} color={NAVY.ink} size={30} anchor="middle">1</Lbl>
			<Lbl x={LB.x + 170} y={LB.base + 34} at={at(HD.ot)} color={NAVY.ink} size={30} anchor="middle">about 10⁶</Lbl>
			<Lbl x={LB.x + 100} y={LB.base - 200} at={at(HD.ot + 10)} color={INK} size={56} anchor="middle">?</Lbl>
			<Lbl x={LB.x - 10} y={LB.base - 380} at={at(HD.ot)} color={NAVY.ink} size={26}>luminosity (log scale)</Lbl>
			{crossed ? <CrossedChip x={250} y={680} at={at(HD.ta)} crossAt={at(HD.ta + 16)} size={28} caption="power differs">same class → same star?</CrossedChip> : null}
			{chip ? <Chip x={96} y={870} at={at(HD.sg)} size={30} w={1728} color={INK} border={INK}>Next: how does the HR diagram distinguish brightness, temperature and stellar stage?</Chip> : null}
		</>
	);
};
/** v03's final frame for the next video. */
export const M8V03FinalFrame: React.FC = () => <HandoffBoard03 f={HD.end} final />;
export const S16: React.FC = () => <HandoffBoard03 f={useCurrentFrame()} />;

// ---------- 17. key notes ----------
export const S17: React.FC = () => {
	const notes = [
		{content: <>One drop or jump between levels: one photon, E = hf.</>, at: 2},
		{content: <>Star: black-body curve (<span style={{color: RED.ink}}>T</span>) with absorption lines.</>, at: 6},
		{content: <>Wien: T = b/λmax (Sun: 500 nm → 5800 K).</>, at: 10},
		{content: <>H lines peak near 10 000 K; He II hot, TiO cool.</>, at: 14},
		{content: <>O B A F G K M, hot to cool: class = temperature.</>, at: 18},
	];
	return (
		<Accent color={ACCENT}>
			<KeyNotesScene notes={notes} size={34} aid={<MemoryCard at={24} main={<>Hydrogen peaks in the middle: too cool to lift, too hot to keep.</>} picture={<svg width={580} height={220}>
				<line x1={40} y1={190} x2={560} y2={190} stroke={INK} strokeWidth={3} />
				<path d={Array.from({length: 41}, (_, k) => { const T = 10 ** (Math.log10(40000) - ((Math.log10(40000) - Math.log10(3000)) * k) / 40); return `${k ? 'L' : 'M'}${(40 + 13 * k).toFixed(1)},${(190 - 160 * hStrength(T)).toFixed(1)}`; }).join(' ')} fill="none" stroke={RED.stroke} strokeWidth={5} />
				<text x={40} y={215} style={{fontFamily: 'Inter Tight', fontWeight: 700, fontSize: 26, fill: INK}}>hot</text>
				<text x={560} y={215} textAnchor="end" style={{fontFamily: 'Inter Tight', fontWeight: 700, fontSize: 26, fill: INK}}>cool</text>
			</svg>} />} />
			<HandTag x={1824} y={116} text="pause to copy" at={cue('key-notes', 'Pause')} size={TYPE.hand} color={ACCENT} anchor="end" />
		</Accent>
	);
};
