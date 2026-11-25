// Scenes 11 to 16: attempt 1 (the painted slide holder with a ruled slide and a green beam arriving) and its feedback
// (the green order fan drawing from the engine as each answer lands), attempt 2 (a grating, a screen and two
// first-order spots, not to scale) and its feedback (the θ arc), the handoff (the painted bench with the laser, a coded
// polarising filter in the slide holder and the painted light sensor; its last frame is exported as `M7V07FinalFrame`
// for the next video) and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading} from '../../math/studio';
import {Accent, KeyNotesScene, MemoryCard, QuestionScene} from '../../shared/scenes';
import {INK, TYPE} from '../../shared/tokens';
import {AnswerBox, Chip, CrossedChip, Row} from '../../physics/projectile/board';
import {LPlate, SENSOR} from '../../physics/light/plates';
import {CodedSlide, HOLDER} from '../../physics/light/bench';
import {EArrow, PolarBench, polarGeom} from '../../physics/light/polar';
import type {PolarAt} from '../../physics/light/polar';
import {GratingBar, Ray, rayEnd} from '../../physics/light/grating';
import {brightAngles} from '../../sims/waves';
import {A1, A1_D, A1_DL, A1_MMAX, A1_S2, A1_TH2, A2, A2_D, A2_LAM, A2_TH, ACCENT, HEAD, HEAD_NEXT, HEAD_SIZE, cap, cue, dur, hold} from './common';
import {Arc, Bracket, FilterFace, GREEN, GREY, Lbl, NAVY, ORANGE, RED, ROSE, Shrunk, fx, sci} from './parts';
import type {Pt} from './parts';

// ---------- 11. attempt 1 ----------
const Q1: React.FC<{u?: boolean}> = ({u = false}) => <>Laser light of wavelength {u ? <u>532 nm</u> : '532 nm'} is incident normally on a diffraction grating with {u ? <u>300 lines per mm</u> : '300 lines per mm'}. (a) Calculate the angle of the second-order maximum. (b) Determine the highest order maximum that can be observed.</>;
const HolderPic: React.FC = () => {
	const p = {x: 230, y: 70, w: 300};
	const s = p.w / (HOLDER.box[2] - HOLDER.box[0]);
	const win = {x: p.x + (485 - HOLDER.box[0]) * s, y: p.y + (354 - HOLDER.box[1]) * s, w: (599 - 485) * s, h: (586 - 354) * s};
	const cy = win.y + win.h / 2;
	return (
		<svg width={678} height={560} style={{overflow: 'visible'}}>
			<rect x={10} y={20} width={650} height={520} rx={16} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} />
			<line x1={40} y1={cy} x2={win.x} y2={cy} stroke={GREEN} strokeWidth={6} strokeLinecap="round" />
			<LPlate spec={HOLDER} p={p} />
			<CodedSlide win={win} kind="grating" gap={0.9} sep={3} />
			<text x={40} y={cy - 20} style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 28, fill: INK}}>532 nm</text>
			<text x={330} y={500} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 700, fontSize: 28, fill: INK}}>grating: 300 lines per mm</text>
		</svg>
	);
};
export const S11: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Your turn" pauseAt={cue('attempt-1', 'Pause here')} hold={hold('attempt-1')} size={38} marks={3} picture={<HolderPic />}><Q1 /></QuestionScene></Accent>;

// ---------- 12. feedback 1 ----------
const A1_ORDERS = brightAngles(A1_D, A1.lambda).map(o => ({m: o.m, deg: (o.angle * 180) / Math.PI}));
export const S12: React.FC = () => {
	const id = 'feedback-1';
	const f = useCurrentFrame();
	const e = cue(id, 'eighteen point six degrees'), six = cue(id, 'the highest order is six'), slip = cue(id, 'The classic slip'), flip = cap(id, cue(id, 'flipping'));
	const G: Pt = [1290, 640];
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk accent={ACCENT} gy={300} givens={<>N = 300 lines per mm = 3.00 × 10⁵ per m{'   '}<span style={{color: '#2e7d4f'}}>λ = 532 nm</span></>}><Q1 u /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 400, display: 'flex', flexDirection: 'column', gap: 14, width: 1110}}>
				<Row at={8} ageAt={six} size={44} oldSize={34}><span style={{whiteSpace: 'nowrap', color: ROSE.ink}}>{`d = 1 / (3.00 × 10⁵) = ${sci(A1_D, 2)} m`}</span></Row>
				<Row at={e - 40} ageAt={six} size={44} oldSize={34}><span style={{whiteSpace: 'nowrap'}}>{`(a) sin θ₂ = (2 × 532 × 10⁻⁹) / (${sci(A1_D, 2)})`}</span></Row>
				<Row at={e - 6} ageAt={six} size={52} oldSize={38}><AnswerBox at={e}><span style={{whiteSpace: 'nowrap', color: ORANGE.ink}}>{`= ${fx(A1_S2, 3)} → θ₂ = ${fx(A1_TH2, 1)}°`}</span></AnswerBox></Row>
				<Row at={six - 6} size={52}><AnswerBox at={six}><span style={{whiteSpace: 'nowrap', color: ORANGE.ink}}>{`(b) m ≤ d / λ = ${fx(A1_DL, 2)} → m = ${A1_MMAX}`}</span></AnswerBox></Row>
			</div>
			<FrameSvg>
				<rect x={1240} y={400} width={584} height={480} rx={14} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} opacity={prog(f, 4, 12)} />
				<line x1={G[0] - 40} y1={G[1]} x2={G[0]} y2={G[1]} stroke={GREEN} strokeWidth={5} opacity={prog(f, 4, 12)} />
				{A1_ORDERS.filter(o => o.m >= 0).map(o => { const at = o.m === 0 ? 4 : o.m <= 2 ? e : six; return <Ray key={o.m} o={G} deg={o.deg} len={480} color={GREEN} width={o.m === 2 ? 6 : 4} draw={f < at ? 0 : prog(f, at, 18)} />; })}
				<GratingBar x={G[0]} y0={G[1] - 50} y1={G[1] + 50} n={10} opacity={prog(f, 4, 12)} />
				{f >= e ? <Arc c={G} r={150} a0={0} a1={A1_TH2} opacity={prog(f, e, 12)} /> : null}
			</FrameSvg>
			<Lbl x={1260} y={430} at={4} color={GREY.ink} size={26}>orders from above (upper half, not to scale)</Lbl>
			<Lbl x={rayEnd(G, A1_TH2, 480)[0] - 10} y={rayEnd(G, A1_TH2, 480)[1] + 36} at={e + 10} color={INK} size={28} anchor="end">m = 2</Lbl>
			<Lbl x={rayEnd(G, A1_ORDERS[A1_ORDERS.length - 1].deg, 480)[0] + 16} y={rayEnd(G, A1_ORDERS[A1_ORDERS.length - 1].deg, 480)[1] + 30} at={six + 10} color={INK} size={28}>{`m = ${A1_MMAX}`}</Lbl>
			<CrossedChip x={96} y={760} at={slip} crossAt={flip - 24} size={30} caption="d = 1/N, with N per metre">d = 300 × 10⁻³ m</CrossedChip>
		</>
	);
};

// ---------- 13. attempt 2 ----------
const Q2: React.FC<{u?: boolean}> = ({u = false}) => <>Monochromatic light is incident normally on a diffraction grating with {u ? <u>500 lines per mm</u> : '500 lines per mm'}. On a screen {u ? <u>0.800 m</u> : '0.800 m'} from the grating, the two first-order maxima are each {u ? <u>0.280 m</u> : '0.280 m'} from the central maximum. Calculate the wavelength of the light.</>;
const ScreenPic: React.FC<{w?: number; h?: number; theta?: number; red?: number}> = ({w = 678, h = 560, theta = 0, red = 0}) => {
	const g: Pt = [110, h / 2], sx = w - 158, x = 190;
	const spot = red > 0.5 ? RED : '#f1ece2';
	return (
		<svg width={w} height={h} style={{overflow: 'visible'}}>
			<rect x={10} y={20} width={w - 28} height={h - 40} rx={16} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} />
			<GratingBar x={g[0]} y0={g[1] - 60} y1={g[1] + 60} n={10} />
			<line x1={sx} y1={g[1] - 240} x2={sx} y2={g[1] + 240} stroke={INK} strokeWidth={6} strokeLinecap="round" />
			{[0, -x, x].map(dy => <g key={dy}><line x1={g[0]} y1={g[1]} x2={sx} y2={g[1] + dy} stroke="#b9b2a6" strokeWidth={3} strokeDasharray="8 6" /><circle cx={sx} cy={g[1] + dy} r={12} fill={spot} stroke={INK} strokeWidth={3} /></g>)}
			<Bracket a={[sx + 30, g[1]]} b={[sx + 30, g[1] - x]} n={[-1, 0]} color={ORANGE.stroke} />
			<Bracket a={[sx + 30, g[1]]} b={[sx + 30, g[1] + x]} n={[-1, 0]} color={ORANGE.stroke} />
			<Bracket a={[g[0], g[1] + 230]} b={[sx, g[1] + 230]} n={[0, -1]} color={ORANGE.stroke} />
			<text x={sx + 46} y={g[1] - x / 2 + 10} style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 28, fill: ORANGE.ink}}>0.280 m</text>
			<text x={sx + 46} y={g[1] + x / 2 + 10} style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 28, fill: ORANGE.ink}}>0.280 m</text>
			<text x={(g[0] + sx) / 2} y={g[1] + 268} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 28, fill: ORANGE.ink}}>0.800 m</text>
			<text x={30} y={60} style={{fontFamily: 'Inter Tight', fontWeight: 700, fontSize: 26, fill: GREY.ink}}>from above, not to scale</text>
			{theta > 0.001 ? <g opacity={theta}><Arc c={g} r={130} a0={0} a1={(Math.atan(x / (sx - g[0])) * 180) / Math.PI} width={5} /><text x={g[0] + 150} y={g[1] - 20} style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 32, fill: NAVY.ink}}>θ</text></g> : null}
		</svg>
	);
};
export const S13: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Last one" pauseAt={cue('attempt-2', 'Pause here')} hold={hold('attempt-2')} size={38} marks={3} picture={<ScreenPic />}><Q2 /></QuestionScene></Accent>;

// ---------- 14. feedback 2 ----------
export const S14: React.FC = () => {
	const id = 'feedback-2';
	const f = useCurrentFrame();
	const dg = cue(id, 'nineteen point three degrees'), sp = cue(id, 'The spacing is one over'), nm = cue(id, 'six hundred and sixty-one nanometres'), slip = cue(id, 'The slip is putting'), ang = cap(id, cue(id, 'only finds the angle'));
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk accent={ACCENT} gy={330} givens={<>N = 500 lines per mm{'   '}<span style={{color: ORANGE.ink}}>L = 0.800 m{'   '}x = 0.280 m (first order)</span></>}><Q2 u /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 430, display: 'flex', flexDirection: 'column', gap: 14, width: 1110}}>
				<Row at={8} ageAt={nm} size={44} oldSize={34}><span style={{whiteSpace: 'nowrap'}}>θ = tan⁻¹(0.280 / 0.800)</span></Row>
				<Row at={dg - 6} ageAt={nm} size={52} oldSize={38}><AnswerBox at={dg}><span style={{whiteSpace: 'nowrap', color: NAVY.ink}}>{`θ = ${fx(A2_TH, 1)}°`}</span></AnswerBox></Row>
				<Row at={sp} ageAt={nm + 30} size={44} oldSize={34}><span style={{whiteSpace: 'nowrap', color: ROSE.ink}}>{`d = 1 / (5.00 × 10⁵) = ${sci(A2_D, 2)} m`}</span></Row>
				<Row at={nm - 30} size={44}><span style={{whiteSpace: 'nowrap'}}>{`λ = d sin θ = ${sci(A2_D, 2)} × sin ${fx(A2_TH, 1)}°`}</span></Row>
				<Row at={nm - 6} size={52}><AnswerBox at={nm}><span style={{whiteSpace: 'nowrap', color: ORANGE.ink}}>{`= ${sci(A2_LAM, 2)} m = ${fx(A2_LAM * 1e9, 0)} nm`}</span></AnswerBox></Row>
			</div>
			<div style={{position: 'absolute', left: 1240, top: 400, opacity: prog(f, 4, 12)}}><ScreenPic w={600} h={500} theta={prog(f, dg, 12)} red={prog(f, nm, 10)} /></div>
			<CrossedChip x={1240} y={880} at={slip} crossAt={ang - 16} size={28} caption="L finds θ; d comes from the grating">d = 0.800 m</CrossedChip>
			<Lbl x={1250} y={930} at={nm} out={slip} color={GREY.ink} size={26}>{`N = ${fx(A2.N / 1e3, 0)} lines per mm`}</Lbl>
		</>
	);
};

// ---------- 15. handoff ----------
const H = (() => {
	const id = 'handoff';
	return {id, sound: cue(id, 'sound diffracts and interferes too'), wiggle: cue(id, 'which way does light wiggle'), put: cue(id, 'Put a polarising filter in the beam'), changes: cue(id, 'The brightness changes'), why: cap(id, cue(id, 'Why does rotating a polariser')), end: dur(id) - 1};
})();
const PB: PolarAt = {x: 260, y: 600, w: 1400, g: 1.25, src: 560, holders: [1000], sensor: 1420, source: 'laser'};
const FF: Pt = [1000, 235];
/** The handoff board at scene frame f (`final`: every label written, for the next video's first frame). */
export const HandoffBoard7: React.FC<{f: number; final?: boolean; heading?: boolean; chip?: boolean; rot?: number; qO?: number; soundO?: number}> = ({f, final = false, heading = true, chip = true, rot: rotIn, qO = 1, soundO = 1}) => {
	const at = (x: number) => (final ? -60 : x);
	const o = (x: number, d = 14) => (final ? 1 : prog(f, x, d));
	const g = polarGeom(PB);
	const filt = o(H.put);
	const rot = rotIn ?? (final ? 70 : f < H.changes ? 0 : 70 * Math.min(1, (f - H.changes) / Math.max(1, H.why - H.changes)));
	const reading = Math.cos((rot * Math.PI) / 180) ** 2;
	const win = g.windows[0];
	return (
		<>
			{heading ? (!final ? <><SceneHeading text={HEAD} at={-200} out={H.why} size={HEAD_SIZE} /><SceneHeading text={HEAD_NEXT} at={H.why + 8} size={HEAD_SIZE} /></> : <SceneHeading text={HEAD_NEXT} at={-200} size={HEAD_SIZE} />) : null}
			<FrameSvg>
				<PolarBench b={PB} axes={[rot]} axisColor={NAVY.stroke} beamColor={RED} discs={[filt]} sensor={false} beamTo={filt > 0.5 ? (PB.sensor as number) : 1800} />
				{filt < 0.999 ? <g opacity={1 - filt}><CodedSlide win={win} kind="grating" gap={0.9} sep={3} />{[16, -16].map(d => <Ray key={d} o={[1000, g.beamY]} deg={d} len={500} color={RED} width={3} />)}</g> : null}
				{g.sensor ? <LPlate spec={SENSOR} p={g.sensor} opacity={filt} /> : null}
				{filt > 0.001 ? <g opacity={filt}>
					<line x1={win.x} y1={win.y} x2={FF[0] - 50} y2={FF[1] + 50} stroke={INK} strokeWidth={2} strokeDasharray="6 6" />
					<line x1={win.x + win.w} y1={win.y} x2={FF[0] + 50} y2={FF[1] + 50} stroke={INK} strokeWidth={2} strokeDasharray="6 6" />
					<FilterFace cx={FF[0]} cy={FF[1]} r={66} axis={rot} axisColor={NAVY.stroke} />
					<rect x={1560} y={240} width={230} height={150} rx={14} fill="#1d2a24" stroke={INK} strokeWidth={4} />
					<rect x={1585} y={340} width={180 * (final || rotIn !== undefined ? reading : f < H.changes ? 1 : reading)} height={22} rx={5} fill="#9fe3b5" />
					<line x1={1460} y1={g.beamY - 10} x2={1560} y2={390} stroke={INK} strokeWidth={2} strokeDasharray="6 6" />
				</g> : null}
				{final || f >= H.changes ? <g opacity={o(H.changes)}><path d={`M${FF[0] + 90},${FF[1] - 34} A96,96 0 0,1 ${FF[0] + 34},${FF[1] + 90}`} fill="none" stroke={NAVY.stroke} strokeWidth={6} /><path d={`M${FF[0] + 34},${FF[1] + 90} l22,-2 l-10,-18 z`} fill={NAVY.stroke} /></g> : null}
				{final || f >= H.wiggle ? <g opacity={o(H.wiggle) * qO}>
					<EArrow cx={700} cy={270} len={60} deg={90} color={GREY.stroke} width={6} />
					<EArrow cx={790} cy={270} len={56} deg={0} color={GREY.stroke} width={6} />
				</g> : null}
			</FrameSvg>
			{qO > 0.001 ? <div style={{opacity: qO}}><Lbl x={700} y={196} at={at(H.wiggle)} color={INK} size={60} anchor="middle">?</Lbl>
			<Lbl x={700} y={362} at={at(H.wiggle)} color={GREY.ink} size={26} anchor="middle">along</Lbl>
			<Lbl x={790} y={362} at={at(H.wiggle)} color={GREY.ink} size={26} anchor="middle">across</Lbl></div> : null}
			{!final ? <HandTag x={430} y={300} text="which way?" at={H.wiggle + 10} out={H.why - 20} size={32} color={NAVY.ink} /> : null}
			<Lbl x={1675} y={285} at={at(H.put)} color="#9fe3b5" size={40} anchor="middle" bg={false}>I = ?</Lbl>
			<Lbl x={FF[0] + 90} y={FF[1] - 60} at={at(H.put)} color={INK} size={26}>polarising filter (face on)</Lbl>
			<Lbl x={PB.src - 60} y={g.railY + 110} at={at(0)} color={INK} size={26} anchor="middle">laser</Lbl>
			{soundO > 0.001 ? <div style={{opacity: soundO}}><Chip x={96} y={190} at={at(H.sound)} size={28} color={GREY.ink} border={GREY.stroke}>sound: diffracts, interferes, longitudinal</Chip></div> : null}
			{chip ? <Chip x={96} y={890} at={at(H.why)} size={30} w={1728} color={INK} border={INK}>Next: why does rotating a polariser change transmitted intensity?</Chip> : null}
		</>
	);
};
/** v07's final frame for the next video. */
export const M7V07FinalFrame: React.FC = () => <HandoffBoard7 f={H.end} final />;
export const S15: React.FC = () => <HandoffBoard7 f={useCurrentFrame()} />;
export {PB as V07_PB, FF as V07_FF};

// ---------- 16. key notes ----------
export const S16: React.FC = () => {
	const notes = [
		{content: <>Grating: bright lines where <span style={{color: NAVY.ink}}>d sin θ = mλ</span>.</>, at: 2},
		{content: <>More slits: same angles, sharper, brighter lines.</>, at: 6},
		{content: <><span style={{color: ROSE.ink}}>d = 1/N</span>, N in lines per metre. d is not L.</>, at: 10},
		{content: <>From a screen: <span style={{color: ORANGE.ink}}>tan θ = x/L</span>, then λ = d sin θ / m.</>, at: 14},
		{content: <>sin θ ≤ 1, so m ≤ d/λ (round down).</>, at: 18},
	];
	return (
		<Accent color={ACCENT}>
			<KeyNotesScene notes={notes} size={34} aid={<MemoryCard at={24} main={<>Lines per metre? Flip it for d. Many lines, tiny d, big angles.</>} />} />
			<HandTag x={1824} y={116} text="pause to copy" at={cue('key-notes', 'Pause')} size={TYPE.hand} color={ACCENT} anchor="end" />
		</Accent>
	);
};
