// Scenes 13 to 18: attempt 1 (two painted bench lamps on the metal plate) and its feedback (energy-well bars against
// potassium's 2.3 eV), attempt 2 (the zinc plate under a dim red beam with the painted timer, display blank) and its
// feedback (red photon bars sliding back while the timer runs), the handoff (one photon on one electron; the energy
// bar split into ϕ and kinetic energy; K_max = hf − ϕ; empty K_max against f axes; its last frame is exported as
// `M7V10FinalFrame` for the next video) and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading} from '../../math/studio';
import {Accent, KeyNotesScene, MemoryCard, QuestionScene} from '../../shared/scenes';
import {TYPE} from '../../shared/tokens';
import {AnswerBox, Chip, CrossedChip, Row} from '../../physics/projectile/board';
import {LPlate} from '../../physics/light/plates';
import {BENCH_LAMP, METAL_PLATE, nat} from '../../physics/light/thermal';
import {Axes2, Beam, Electron, EnergyBar, Packet, TIMER, Well} from '../../physics/light/photo';
import {A1_O, A1_V, ACCENT, HEAD, HEAD_NEXT, HEAD_SIZE, L_RED, L_UV, PHI, PHI_K, cap, cue, dur, eJ, eV, hold} from './common';
import {AMBER, GREY, INK, Lbl, NAVY, ORANGE, ORANGE_BEAM, RED_BEAM, SLATE, Shrunk, UV, UV_INK, fx, lampAp, sci} from './parts';

type Pt = [number, number];
const DATA = 'h = 6.626 × 10⁻³⁴ J s   c = 3.00 × 10⁸ m s⁻¹   1 eV = 1.602 × 10⁻¹⁹ J';

// ---------- 13. attempt 1 ----------
const Q1: React.FC<{u?: boolean}> = ({u = false}) => {
	const U = (t: string) => (u ? <u>{t}</u> : t);
	return <>Potassium has a work function of {U('2.3 eV')}. A {U('bright')} orange lamp emits light of wavelength {U('600 nm')}. A {U('dim')} violet lamp emits light of wavelength {U('400 nm')}. (a) Calculate the energy, in electron volts, of a photon from each lamp. (b) State which lamp ejects electrons from potassium. Justify your answer.</>;
};
const LampsPic: React.FC = () => {
	const zp = {x: 150, y: 330, w: 380}, l1 = {x: 20, y: 90, w: 230}, l2 = {x: 430, y: 90, w: 230};
	const top = nat(METAL_PLATE, zp, 720, 520);
	const a1 = lampAp(l1), a2 = lampAp(l2, true);
	return (
		<svg width={678} height={560} style={{overflow: 'visible'}}>
			<rect x={4} y={20} width={668} height={520} rx={16} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} />
			<LPlate spec={METAL_PLATE} p={zp} />
			<LPlate spec={BENCH_LAMP} p={l1} />
			<LPlate spec={BENCH_LAMP} p={l2} flip />
			<Beam a={a1} b={[top[0] - 40, top[1]]} wa={16} wb={46} color={ORANGE_BEAM} />
			<Beam a={a2} b={[top[0] + 50, top[1]]} wa={3} wb={8} color={UV} />
			<text x={30} y={66} style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 28, fill: '#b5651d'}}>bright, 600 nm</text>
			<text x={650} y={66} textAnchor="end" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 28, fill: UV_INK}}>dim, 400 nm</text>
			<text x={340} y={505} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 28, fill: INK}}>potassium plate</text>
		</svg>
	);
};
export const S13: React.FC = () => (
	<Accent color={ACCENT}>
		<QuestionScene heading="Your turn" pauseAt={cue('attempt-1', 'Pause here')} hold={hold('attempt-1')} size={36} marks={3} picture={<LampsPic />}><Q1 /></QuestionScene>
		<Chip x={96} y={770} at={-30} size={26} color={INK} border={INK}>{DATA}</Chip>
	</Accent>
);

// ---------- 14. feedback 1 ----------
const FW = {x: 1300, y: 420, w: 520, h: 420};
export const S14: React.FC = () => {
	const id = 'feedback-1';
	const f = useCurrentFrame();
	const v = cue(id, 'volts'), el = cue(id, 'lamp ejects electrons'), en = cap(id, cue(id, 'energy'));
	const base = FW.y + FW.h - 30, scale = (FW.h - 90) / 3.6;
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk accent={ACCENT} gy={330} givens={<>{`ϕ = 2.3 eV   λ = ${sci(A1_O * 1e-9, 2)} m (orange)   λ = ${sci(A1_V * 1e-9, 2)} m (violet)`}</>}><Q1 u /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 420, display: 'flex', flexDirection: 'column', gap: 16, width: 1180}}>
				<Row at={4} size={36}><span style={{whiteSpace: 'nowrap'}}>E = hc / λ</span></Row>
				<Row at={v - 6} size={34} style={{whiteSpace: 'normal'}}><AnswerBox at={v}><span>{`(a) E_orange = (6.626 × 10⁻³⁴)(3.00 × 10⁸) / (6.00 × 10⁻⁷) = ${sci(eJ(A1_O), 2)} J = ${fx(eV(A1_O), 2)} eV < 2.3 eV`}</span></AnswerBox></Row>
				<Row at={el - 6} size={34} style={{whiteSpace: 'normal'}}><AnswerBox at={el}><span>{`E_violet = (6.626 × 10⁻³⁴)(3.00 × 10⁸) / (4.00 × 10⁻⁷) = ${sci(eJ(A1_V), 2)} J = ${fx(eV(A1_V), 2)} eV > 2.3 eV → (b) the violet lamp ejects electrons`}</span></AnswerBox></Row>
			</div>
			<FrameSvg>
				<rect x={FW.x} y={FW.y} width={FW.w} height={FW.h} rx={14} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} />
				<Well x={FW.x + 20} base={base} w={FW.w - 40} stepX={FW.x + FW.w * 0.66} phi={PHI_K} scale={scale} color={SLATE.stroke} />
				<g opacity={prog(f, v, 12)}><EnergyBar x={FW.x + 50} base={base} w={70} scale={scale} hf={eV(A1_O)} phi={PHI_K} grow={prog(f, v, 18)} amber={AMBER.stroke} slate={SLATE.stroke} orange={ORANGE.stroke} line={false} /></g>
				<g opacity={prog(f, el, 12)}><EnergyBar x={FW.x + 170} base={base} w={70} scale={scale} hf={eV(A1_V)} phi={PHI_K} grow={prog(f, el, 18)} split={prog(f, el + 20, 14)} amber={AMBER.stroke} slate={SLATE.stroke} orange={ORANGE.stroke} line={false} /></g>
			</FrameSvg>
			<Lbl x={FW.x + FW.w * 0.66 + 10} y={base - PHI_K * scale - 16} at={0} color={SLATE.ink} size={28}>ϕ = 2.3 eV</Lbl>
			<Lbl x={FW.x + 85} y={base - eV(A1_O) * scale - 16} at={v + 10} color={'#b5651d'} size={26} anchor="middle">orange</Lbl>
			<Lbl x={FW.x + 205} y={base - eV(A1_V) * scale - 16} at={el + 10} color={UV_INK} size={26} anchor="middle">violet</Lbl>
			<CrossedChip x={96} y={800} at={en} crossAt={en + 14} size={30} caption="brightness = number of photons, not energy per photon">the bright orange lamp</CrossedChip>
		</>
	);
};

// ---------- 15. attempt 2 ----------
const Q2: React.FC<{u?: boolean}> = ({u = false}) => <>{"A student claims: 'If "}{u ? <u>dim red</u> : 'dim red'}{' light shines on a zinc plate for '}{u ? <u>long enough</u> : 'long enough'}{", electrons will eventually be ejected.' Evaluate this claim."}</>;
const ZincPic: React.FC = () => {
	const zp = {x: 160, y: 300, w: 380}, l = {x: 40, y: 80, w: 240}, tp = {x: 470, y: 90, w: 170};
	const top = nat(METAL_PLATE, zp, 720, 520);
	const a = lampAp(l);
	const D0 = nat(TIMER, tp, 300, 280), D1 = nat(TIMER, tp, 1300, 540);
	return (
		<svg width={678} height={560} style={{overflow: 'visible'}}>
			<rect x={4} y={20} width={668} height={520} rx={16} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} />
			<LPlate spec={METAL_PLATE} p={zp} />
			<LPlate spec={BENCH_LAMP} p={l} />
			<Beam a={a} b={top} wa={3} wb={8} color={RED_BEAM} />
			<LPlate spec={TIMER} p={tp} />
			<rect x={D0[0]} y={D0[1]} width={D1[0] - D0[0]} height={D1[1] - D0[1]} rx={4} fill="#14201a" />
			<text x={40} y={66} style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 28, fill: '#b8322a'}}>dim red</text>
			<text x={350} y={505} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 28, fill: INK}}>zinc plate</text>
		</svg>
	);
};
export const S15: React.FC = () => (
	<Accent color={ACCENT}>
		<QuestionScene heading="Last one" pauseAt={cue('attempt-2', 'Pause here')} hold={hold('attempt-2')} size={46} marks={2} picture={<ZincPic />}><Q2 /></QuestionScene>
		<Chip x={96} y={700} at={-30} size={28} color={INK} border={INK}>{`zinc: ϕ = 4.3 eV; red photon: ${fx(eV(L_RED), 2)} eV`}</Chip>
	</Accent>
);

// ---------- 16. feedback 2 ----------
export const S16: React.FC = () => {
	const id = 'feedback-2';
	const f = useCurrentFrame();
	const weak = cue(id, 'weak'), out = cap(id, cue(id, 'out'));
	const W = {x: 1260, y: 330, w: 560, h: 480};
	const base = W.y + W.h - 30, scale = (W.h - 90) / 5;
	const er = eV(L_RED);
	const tp = {x: 1300, y: 350, w: 200};
	const D0 = nat(TIMER, tp, 300, 280), D1 = nat(TIMER, tp, 1300, 540);
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk accent={ACCENT} gy={290} givens={<>{`ϕ = 4.3 eV   red photon: ${fx(er, 2)} eV`}</>}><Q2 u /></Shrunk>
			<FrameSvg>
				<rect x={W.x} y={W.y} width={W.w} height={W.h} rx={14} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} />
				<Well x={W.x + 20} base={base} w={W.w - 40} stepX={W.x + W.w * 0.62} phi={PHI} scale={scale} color={SLATE.stroke} />
				{Array.from({length: 4}, (_, k) => { const ph = ((f + k * 15) % 60) / 60, g = Math.sin(Math.PI * ph); return <g key={k}><EnergyBar x={W.x + 40 + k * 80} base={base} w={50} scale={scale} hf={er} phi={PHI} grow={g} amber={AMBER.stroke} slate={SLATE.stroke} orange={ORANGE.stroke} line={false} /><Electron x={W.x + 300} y={base - 14 - er * scale * g * 0.9} r={10} color={NAVY.stroke} opacity={k === 0 ? 1 : 0} /></g>; })}
				<LPlate spec={TIMER} p={tp} />
				<rect x={D0[0]} y={D0[1]} width={D1[0] - D0[0]} height={D1[1] - D0[1]} rx={4} fill="#14201a" />
				<text x={(D0[0] + D1[0]) / 2} y={(D0[1] + D1[1]) / 2 + 12} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 32, fill: '#9fe3a0'}}>{`${Math.floor(f / 3)} s`}</text>
			</FrameSvg>
			<Lbl x={W.x + W.w * 0.62 + 10} y={base - PHI * scale - 16} at={0} color={SLATE.ink} size={28}>ϕ = 4.3 eV</Lbl>
			<Lbl x={W.x + 30} y={base + 60} at={0} color={AMBER.ink} size={26}>{`red photons, ${fx(er, 2)} eV each`}</Lbl>
			<div style={{position: 'absolute', left: 96, top: 420, width: 1120}}>
				<Row at={weak - 6} size={40} style={{whiteSpace: 'normal'}}><AnswerBox at={weak}><span>{`red photon ${fx(er, 2)} eV < ϕ = 4.3 eV; one photon → one electron; no build-up → no emission at any time`}</span></AnswerBox></Row>
			</div>
			<CrossedChip x={96} y={720} at={out} crossAt={out + 14} size={32} caption="wave-model prediction, not observed">eventually, yes</CrossedChip>
		</>
	);
};

// ---------- 17. handoff ----------
const HD = (() => {
	const id = 'handoff';
	return {id, one: cue(id, 'one photon to one electron'), left: cue(id, 'whatever is left after paying the work function'), graph: cue(id, 'test with a graph'), next: cap(id, cue(id, 'So how do photoelectric graphs')), end: dur(id) - 1};
})();
const BAR = {x: 760, base: 760, scale: 90};
const AXH = {x: 1320, y: 330, w: 440, h: 420, x0: 0, x1: 10, y0: 0, y1: 10};
const SURF17 = {x: 96, y: 560, w: 500, h: 180};
/** The handoff board at scene frame f (`final`: every part drawn, for the next video's first frame). */
export const HandoffBoard10: React.FC<{f: number; final?: boolean; heading?: boolean; chip?: boolean}> = ({f, final = false, heading = true, chip = true}) => {
	const at = (x: number) => (final ? -60 : x);
	const o = (x: number, d = 14) => (final ? 1 : prog(f, x, d));
	const e: Pt = [SURF17.x + 300, SURF17.y - 12];
	const hit = final ? 1 : prog(f, HD.one, 26);
	const split = final ? 1 : prog(f, HD.left + 10, 18);
	const hf = eV(L_UV);
	return (
		<>
			{heading ? (!final ? <><SceneHeading text={HEAD} at={-200} out={HD.next} size={HEAD_SIZE} /><SceneHeading text={HEAD_NEXT} at={HD.next + 8} size={HEAD_SIZE} /></> : <SceneHeading text={HEAD_NEXT} at={-200} size={HEAD_SIZE} />) : null}
			<FrameSvg>
				<rect x={SURF17.x} y={SURF17.y} width={SURF17.w} height={SURF17.h} rx={10} fill="#e6e1d8" stroke={INK} strokeWidth={3} />
				{Array.from({length: 8}, (_, i) => { const cx = SURF17.x + 50 + (i % 4) * 130, cy = SURF17.y + 55 + Math.floor(i / 4) * 80; return <g key={i}><circle cx={cx} cy={cy} r={16} fill="#c9c2b6" stroke={INK} strokeWidth={2} /><text x={cx} y={cy + 9} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 24, fill: INK}}>+</text></g>; })}
				{[0, 1, 3].map(i => <Electron key={i} x={SURF17.x + 60 + i * 120} y={SURF17.y - 12} r={10} color={NAVY.stroke} />)}
				<Electron x={e[0]} y={e[1]} r={12} color={NAVY.stroke} />
				{final || f >= HD.one - 26 ? <Packet x={e[0] - 150 + 120 * hit} y={e[1] - 200 + 160 * hit} deg={53} len={64} color={AMBER.stroke} label="hf" opacity={o(HD.one - 26, 10)} /> : null}
				<g opacity={o(HD.left)}><EnergyBar x={BAR.x} base={BAR.base} w={90} scale={BAR.scale} hf={hf} phi={PHI} grow={final ? 1 : prog(f, HD.left, 16)} split={split} amber={AMBER.stroke} slate={SLATE.stroke} orange={ORANGE.stroke} line={false} /></g>
				<g opacity={o(HD.graph)}><Axes2 g={AXH} /></g>
			</FrameSvg>
			<Lbl x={SURF17.x} y={SURF17.y + SURF17.h + 40} at={at(-60)} color={GREY.ink} size={26}>zinc surface (model)</Lbl>
			<Lbl x={BAR.x + 110} y={BAR.base - hf * BAR.scale + 14} at={at(HD.left)} color={AMBER.ink} size={30}>{`hf (${fx(hf, 2)} eV)`}</Lbl>
			<Lbl x={BAR.x + 110} y={BAR.base - PHI * BAR.scale / 2} at={at(HD.left + 10)} color={SLATE.ink} size={30}>ϕ (4.3 eV)</Lbl>
			<Lbl x={BAR.x + 110} y={BAR.base - hf * BAR.scale + 60} at={at(HD.left + 16)} color={ORANGE.ink} size={30}>left over: kinetic energy</Lbl>
			<Lbl x={BAR.x - 40} y={BAR.base + 70} at={at(HD.left + 24)} color={INK} size={48}>K_max = hf − ϕ</Lbl>
			<Lbl x={AXH.x - 14} y={AXH.y - 30} at={at(HD.graph)} color={ORANGE.ink} size={32} anchor="end">K_max</Lbl>
			<Lbl x={AXH.x + AXH.w + 30} y={AXH.y + AXH.h + 50} at={at(HD.graph)} color={INK} size={32} anchor="end">f</Lbl>
			<Lbl x={AXH.x + AXH.w / 2} y={AXH.y + AXH.h / 2} at={at(HD.graph + 10)} color={INK} size={84} anchor="middle">?</Lbl>
			{chip ? <Chip x={96} y={890} at={at(HD.next)} size={30} w={1728} color={INK} border={INK}>{"Next: how do photoelectric graphs reveal Planck's constant and work function?"}</Chip> : null}
		</>
	);
};
/** v10's final frame for the next video. */
export const M7V10FinalFrame: React.FC = () => <HandoffBoard10 f={HD.end} final />;
export const S17: React.FC = () => <HandoffBoard10 f={useCurrentFrame()} />;

// ---------- 18. key notes ----------
export const S18: React.FC = () => {
	const notes = [
		{content: <><span style={{color: SLATE.ink}}>Work function ϕ</span>: minimum energy to free a surface electron.</>, at: 2},
		{content: <>Below f₀: no electrons, however bright or long.</>, at: 6},
		{content: <>Frequency sets <span style={{color: ORANGE.ink}}>K_max</span>; intensity sets the number.</>, at: 10},
		{content: <><span style={{color: AMBER.ink}}>Photon: E = hf = hc/λ</span>; one photon → one electron.</>, at: 14},
		{content: <>Emission needs hf ≥ ϕ (1 eV = 1.602 × 10⁻¹⁹ J).</>, at: 18},
	];
	return (
		<Accent color={ACCENT}>
			<KeyNotesScene notes={notes} size={34} aid={<MemoryCard at={24} main={<><span style={{color: AMBER.ink}}>One photon, one electron.</span> <span style={{color: NAVY.ink}}>Frequency decides whether; brightness decides how many.</span></>} sub="(ordinary lamp light)" />} />
			<HandTag x={1824} y={116} text="pause to copy" at={cue('key-notes', 'Pause')} size={TYPE.hand} color={ACCENT} anchor="end" />
		</Accent>
	);
};
