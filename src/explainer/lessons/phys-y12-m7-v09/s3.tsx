// Scenes 13 to 18: attempt 1 (the painted white star and the Sun) and its feedback (both curves, the peak arrow),
// attempt 2 (a measured black-body curve) and its feedback (the dashed classical curve added, the locked packet), the
// handoff (the oscillator ladder, a wave train breaking into packets, the painted zinc plate under two painted bench
// lamps; its last frame is exported as `M7V09FinalFrame` for the next video) and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading} from '../../math/studio';
import {Accent, KeyNotesScene, MemoryCard, QuestionScene} from '../../shared/scenes';
import {TYPE} from '../../shared/tokens';
import {AnswerBox, Chip, CrossedChip, Row} from '../../physics/projectile/board';
import {Disc, LPlate, SUN} from '../../physics/light/plates';
import {STAR_WHITE} from '../../physics/light/stars';
import {BBPlot, BENCH_LAMP, Ladder, METAL_PLATE, PacketBar, ThermalBand, bbVal, bbX, bbY, nat, THERMAL_ANCHOR} from '../../physics/light/thermal';
import {wlColor} from '../../physics/light/spectrum';
import {A1_L, A1_SLIP, A1_T, ACCENT, HEAD, HEAD_NEXT, HEAD_SIZE, T_SUN, cap, cue, dur, hold, peak} from './common';
import {AMBER, BLUE, CLASSICAL, GREY, INK, Lbl, NAVY, SLATE, Shrunk, TCOL, bbG, sci} from './parts';

type Pt = [number, number];

// ---------- 13. attempt 1 ----------
const Q1: React.FC<{u?: boolean}> = ({u = false}) => <>The spectrum of a star peaks at a wavelength of {u ? <u>420 nm</u> : '420 nm'}. (a) Calculate the surface temperature of the star. (b) State whether the star is {u ? <u>hotter or cooler</u> : 'hotter or cooler'} than the Sun, whose spectrum peaks at about 500 nm.</>;
const StarsPic: React.FC = () => (
	<svg width={678} height={560} style={{overflow: 'visible'}}>
		<rect x={10} y={20} width={650} height={520} rx={16} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} />
		<Disc spec={STAR_WHITE} cx={210} cy={250} d={300} />
		<Disc spec={SUN} cx={500} cy={270} d={220} />
		<text x={210} y={440} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 30, fill: INK}}>star</text>
		<text x={500} y={440} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 30, fill: INK}}>Sun</text>
		<rect x={150} y={468} width={380} height={50} rx={10} fill="#f1ebdf" stroke={INK} strokeWidth={2.5} />
		<text x={340} y={503} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 28, fill: INK}}>b = 2.898 × 10⁻³ m K</text>
	</svg>
);
export const S13: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Your turn" pauseAt={cue('attempt-1', 'Pause here')} hold={hold('attempt-1')} size={38} marks={2} picture={<StarsPic />}><Q1 /></QuestionScene></Accent>;

// ---------- 14. feedback 1 ----------
const G14 = bbG(1260, 420, 540, 320, 100, 1500);
export const S14: React.FC = () => {
	const id = 'feedback-1';
	const f = useCurrentFrame();
	const kel = cue(id, 'six thousand nine hundred kelvin'), hot = cue(id, "so it's hotter"), slip = cue(id, 'The classic slip'), first = cap(id, cue(id, 'Always convert to metres first'));
	const p1: Pt = [bbX(G14, peak(T_SUN)), bbY(G14, bbVal(T_SUN, peak(T_SUN), G14.ref, G14.pow))];
	const p2: Pt = [bbX(G14, peak(A1_T)), Math.max(G14.y - 6, bbY(G14, bbVal(A1_T, peak(A1_T), G14.ref, G14.pow)))];
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk accent={ACCENT} gy={300} givens={<>{`λ_max = 420 nm = ${sci(A1_L, 2)} m`}{'   '}b = 2.898 × 10⁻³ m K{'   '}Sun: 500 nm</>}><Q1 u /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 420, display: 'flex', flexDirection: 'column', gap: 16, width: 1110}}>
				<Row at={8} ageAt={hot} size={44} oldSize={34}><span style={{whiteSpace: 'nowrap'}}>T = b / λ_max</span></Row>
				<Row at={kel - 6} size={48}><AnswerBox at={kel}><span style={{whiteSpace: 'nowrap', color: AMBER.ink}}>{`(a) T = (2.898 × 10⁻³) / (${sci(A1_L, 2)}) = ${sci(A1_T, 1)} K`}</span></AnswerBox></Row>
				<Row at={hot - 6} size={44}><AnswerBox at={hot}><span style={{whiteSpace: 'nowrap', color: BLUE.ink}}>(b) 420 nm &lt; 500 nm → hotter than the Sun</span></AnswerBox></Row>
			</div>
			<FrameSvg>
				<BBPlot g={G14} curves={[{T: T_SUN, color: TCOL[5800], width: 5}, {T: A1_T, color: TCOL[6900], width: 5}]} ticks={[500, 1000, 1500]} shade={1} band={1} />
				<circle cx={p1[0]} cy={p1[1]} r={9} fill={TCOL[5800]} stroke={INK} strokeWidth={2} />
				<circle cx={p2[0]} cy={p2[1]} r={9} fill={TCOL[6900]} stroke={INK} strokeWidth={2} />
				{f >= hot ? <path d={`M${p1[0]},${p1[1] - 14} Q${(p1[0] + p2[0]) / 2},${p2[1] - 50} ${p2[0] + 6},${p2[1] - 14}`} fill="none" stroke={BLUE.stroke} strokeWidth={5} opacity={prog(f, hot, 12)} /> : null}
				<Disc spec={STAR_WHITE} cx={1730} cy={340} d={110} />
			</FrameSvg>
			<Lbl x={p1[0] + 16} y={p1[1] + 34} at={4} color={TCOL[5800]} size={26}>Sun 500 nm</Lbl>
			<Lbl x={p2[0] - 20} y={G14.y - 30} at={4} color={TCOL[6900]} size={26} anchor="end">star 420 nm</Lbl>
			<Lbl x={G14.x + G14.w / 2} y={G14.y + G14.h + 84} at={4} color={INK} size={26} anchor="middle">λ (nm), compressed scale</Lbl>
			<CrossedChip x={96} y={730} at={slip} crossAt={Math.min(first, slip + 40)} size={30} caption="convert nm to m first">{`T = (2.898 × 10⁻³) / 420 = ${sci(A1_SLIP, 1)} K`}</CrossedChip>
		</>
	);
};

// ---------- 15. attempt 2 ----------
const Q2: React.FC<{u?: boolean}> = ({u = false}) => <>Explain why the classical model of black body radiation {u ? <u>failed at short wavelengths</u> : 'failed at short wavelengths'}, and how {u ? <u>{"Planck's hypothesis"}</u> : "Planck's hypothesis"} resolved the problem.</>;
const Sketch: React.FC<{w?: number; h?: number; classical?: number}> = ({w = 678, h = 560, classical = 0}) => {
	const g = bbG(70, 70, w - 120, h - 170, 100, 2000, undefined, 1);
	return (
		<svg width={w} height={h} style={{overflow: 'visible'}}>
			<rect x={10} y={20} width={w - 28} height={h - 40} rx={16} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} />
			<BBPlot g={g} curves={[{T: T_SUN, color: TCOL[5800], width: 5}]} ticks={[]} classical={classical > 0.001 ? {T: T_SUN, draw: classical, color: CLASSICAL} : undefined} />
			<text x={g.x + g.w / 2} y={g.y + g.h + 50} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 28, fill: INK}}>wavelength</text>
			<text x={g.x + 10} y={g.y - 20} style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 28, fill: INK}}>intensity</text>
			<text x={g.x + g.w} y={g.y + 30} textAnchor="end" style={{fontFamily: 'Inter Tight', fontWeight: 700, fontSize: 26, fill: GREY.ink}}>a measured black-body curve</text>
		</svg>
	);
};
export const S15: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Last one" pauseAt={cue('attempt-2', 'Pause here')} hold={hold('attempt-2')} size={38} marks={3} picture={<Sketch />}><Q2 /></QuestionScene></Accent>;

// ---------- 16. feedback 2 ----------
export const S16: React.FC = () => {
	const id = 'feedback-2';
	const f = useCurrentFrame();
	const cat = cue(id, 'the ultraviolet catastrophe'), falls = cue(id, 'and the curve falls'), slip = cue(id, 'The slip is saying'), ein = cap(id, cue(id, 'That was Einstein'));
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk accent={ACCENT} gy={300} givens={<>{"classical model: fails at short wavelengths  |  Planck's hypothesis: how it fixes the problem"}</>}><Q2 u /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 400, display: 'flex', flexDirection: 'column', gap: 18, width: 1080}}>
				<Row at={cat - 6} size={36} style={{whiteSpace: 'normal'}}><AnswerBox at={cat}><span>classical: equal share per pattern + more patterns at short λ → intensity → ∞ (UV catastrophe)</span></AnswerBox></Row>
				<Row at={falls - 6} size={36} style={{whiteSpace: 'normal'}}><AnswerBox at={falls}><span>Planck: E = hf packets; large hf at short λ not supplied thermally → emission suppressed → curve falls</span></AnswerBox></Row>
			</div>
			<div style={{position: 'absolute', left: 1220, top: 380, opacity: prog(f, 4, 12)}}><Sketch w={600} h={400} classical={prog(f, cat, 24)} /></div>
			<FrameSvg>
				<ThermalBand x={1260} w={540} y={880} h={30} opacity={prog(f, falls, 12)} />
				<PacketBar x={1380} base={910} h={50} fill={1} color={AMBER.stroke} opacity={prog(f, falls, 12)} />
				<PacketBar x={1640} base={910} h={130} locked={prog(f, falls + 10, 12)} color={AMBER.stroke} opacity={prog(f, falls, 12)} />
			</FrameSvg>
			<HandTag x={1420} y={520} text="→ ∞" at={cat + 20} size={36} color={SLATE.ink} />
			<CrossedChip x={96} y={800} at={slip} crossAt={Math.min(ein, slip + 40)} size={30} caption="Planck: emitters; Einstein: light">Planck discovered photons</CrossedChip>
		</>
	);
};

// ---------- 17. handoff ----------
const H = (() => {
	const id = 'handoff';
	return {id, pk: cue(id, 'traded in packets of h f'), lit: cue(id, 'light itself arrives in packets'), metals: cue(id, 'The evidence came from metals'), uv: cue(id, 'A dim ultraviolet lamp'), red: cue(id, 'but a red lamp'), elec: cap(id, cue(id, 'So why can bright low-frequency light')), end: dur(id) - 1};
})();
const ZP = {x: 640, y: 560, w: 560};
const LL = {x: 330, y: 220, w: 300}, LR = {x: 1290, y: 220, w: 300};
/** The handoff board at scene frame f (`final`: every label written, for the next video's first frame). */
export const HandoffBoard9: React.FC<{f: number; final?: boolean; heading?: boolean; chip?: boolean}> = ({f, final = false, heading = true, chip = true}) => {
	const at = (x: number) => (final ? -60 : x);
	const o = (x: number, d = 14) => (final ? 1 : prog(f, x, d));
	const A = THERMAL_ANCHOR.lampAp;
	const apL = nat(BENCH_LAMP, LL, A[0], A[1]);
	const apR = nat(BENCH_LAMP, LR, BENCH_LAMP.box[0] + BENCH_LAMP.box[2] - A[0], A[1]);
	const top = nat(METAL_PLATE, ZP, THERMAL_ANCHOR.plateTop[0], THERMAL_ANCHOR.plateTop[1]);
	const hitL: Pt = [top[0] - 90, top[1] - 10], hitR: Pt = [top[0] + 110, top[1] + 10];
	const brk = final ? 1 : prog(f, H.lit + 20, 30);
	const tt = final ? 0 : f / 30;
	const train = Array.from({length: 121}, (_, i) => { const x = 120 + i * 4; const seg = Math.floor(i / 20); const inGap = brk > 0.001 && i % 20 > 20 - 6 * brk; return {x, y: 500 - 26 * Math.sin((2 * Math.PI * i) / 20 - tt * 4), gap: inGap, seg}; });
	const d = train.map((p, i) => `${i === 0 || p.gap || train[i - 1].gap ? 'M' : 'L'}${p.x},${p.y}`).join(' ');
	const eT = final ? 0.6 : ((f - H.uv) % 40) / 40;
	return (
		<>
			{heading ? (!final ? <><SceneHeading text={HEAD} at={-200} out={H.elec} size={HEAD_SIZE} /><SceneHeading text={HEAD_NEXT} at={H.elec + 8} size={HEAD_SIZE} /></> : <SceneHeading text={HEAD_NEXT} at={-200} size={HEAD_SIZE} />) : null}
			<FrameSvg>
				<Ladder x={120} base={440} step={44} rungs={4} w={150} at={1} color={AMBER.stroke} marker={NAVY.stroke} opacity={o(H.pk)} />
				{final || f >= H.lit ? <path d={d} fill="none" stroke={AMBER.stroke} strokeWidth={5} opacity={o(H.lit)} /> : null}
				<LPlate spec={METAL_PLATE} p={ZP} opacity={o(H.metals)} />
				<LPlate spec={BENCH_LAMP} p={LL} opacity={o(H.uv)} />
				{final || f >= H.uv ? <g opacity={o(H.uv + 6)}><line x1={apL[0]} y1={apL[1]} x2={hitL[0]} y2={hitL[1]} stroke={wlColor(400)} strokeWidth={4} /><line x1={apL[0]} y1={apL[1]} x2={hitL[0]} y2={hitL[1]} stroke="#6b4fa0" strokeWidth={2} strokeDasharray="6 8" /></g> : null}
				{final || f >= H.uv + 10 ? [0, 1, 2].map(i => { const u = (eT + i / 3) % 1; return <circle key={i} cx={hitL[0] - 40 + i * 30 - 60 * u} cy={hitL[1] - 30 - 160 * u} r={9} fill={NAVY.stroke} stroke="#fff" strokeWidth={2} opacity={o(H.uv + 10)} />; }) : null}
				<LPlate spec={BENCH_LAMP} p={LR} flip opacity={o(H.red)} />
				{final || f >= H.red ? <path d={`M${apR[0]},${apR[1] - 30} L${hitR[0] - 60},${hitR[1]} L${hitR[0] + 60},${hitR[1]} L${apR[0]},${apR[1] + 30} Z`} fill={wlColor(680)} opacity={0.55 * o(H.red + 6)} /> : null}
			</FrameSvg>
			<Lbl x={120} y={236} at={at(H.pk)} color={AMBER.ink} size={32}>E = hf</Lbl>
			<HandTag x={120} y={570} text="light in packets? (Einstein, 1905)" at={at(H.lit + 10)} size={28} color={AMBER.ink} />
			<Lbl x={1180} y={860} at={at(H.metals)} color={INK} size={28}>clean zinc plate</Lbl>
			<Lbl x={LL.x} y={LL.y - 20} at={at(H.uv)} color="#6b4fa0" size={28}>ultraviolet, dim</Lbl>
			<Lbl x={hitL[0] - 330} y={hitL[1] - 130} at={at(H.uv + 10)} color={NAVY.ink} size={28}>electrons out</Lbl>
			<Lbl x={LR.x + 20} y={LR.y - 20} at={at(H.red)} color={TCOL[3500]} size={28}>red, very bright</Lbl>
			<Lbl x={hitR[0] + 80} y={hitR[1] - 80} at={at(H.red + 10)} color={NAVY.ink} size={28}>electrons: none</Lbl>
			{chip ? <Chip x={96} y={890} at={at(H.elec)} size={30} w={1728} color={INK} border={INK}>Next: why can bright low-frequency light fail to eject electrons?</Chip> : null}
		</>
	);
};
/** v09's final frame for the next video. */
export const M7V09FinalFrame: React.FC = () => <HandoffBoard9 f={H.end} final />;
export const S17: React.FC = () => <HandoffBoard9 f={useCurrentFrame()} />;

// ---------- 18. key notes ----------
export const S18: React.FC = () => {
	const notes = [
		{content: <>Black body: absorbs all radiation; spectrum set by T only.</>, at: 2},
		{content: <>Hotter: peak at <span style={{color: BLUE.ink}}>shorter λ</span>, higher at every λ.</>, at: 6},
		{content: <>Wien: <span style={{color: INK}}>λ_max = b/T</span> (λ in metres).</>, at: 10},
		{content: <>Classical: equal share per pattern → UV catastrophe.</>, at: 14},
		{content: <>Planck: <span style={{color: AMBER.ink}}>E = nhf</span>; big hf packets rarely supplied.</>, at: 18},
	];
	return (
		<Accent color={ACCENT}>
			<KeyNotesScene notes={notes} size={34} aid={<MemoryCard at={24} main={<><span style={{color: '#1f6fb2'}}>Hotter means shorter and higher.</span> <span style={{color: AMBER.ink}}>Big packets are hard to afford.</span></>} />} />
			<HandTag x={1824} y={116} text="pause to copy" at={cue('key-notes', 'Pause')} size={TYPE.hand} color={ACCENT} anchor="end" />
		</Accent>
	);
};
