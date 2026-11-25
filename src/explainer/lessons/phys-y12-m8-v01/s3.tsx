// Scenes 13 to 18: attempt 1 (two photons meeting head-on making a muon pair, beside a temperature bar with "?") and
// its feedback, attempt 2 (a short timeline with a helium nucleus at minutes and a hydrogen atom at 380 000 years) and
// its feedback, the handoff (the expanding grid with atoms; light from recombination stretched ever since, arriving at
// "us" from every edge; two galaxies receding; its last frame is exported as `M8V01FinalFrame`) and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading} from '../../math/studio';
import {Accent, KeyNotesScene, MemoryCard, QuestionScene} from '../../shared/scenes';
import {TYPE} from '../../shared/tokens';
import {AnswerBox, Chip, CrossedChip, Row} from '../../physics/projectile/board';
import {LPlate} from '../../physics/light/plates';
import {Packet} from '../../physics/light/photo';
import {Nucleus, Particle, TempBar} from '../../physics/light/massenergy';
import {Anti, DotGrid, GALAXY, WaveLine, gridPt} from '../../physics/atom/universe';
import {A1_E, A1_LAM, A1_SLIP, A1_T, ACCENT, B_D, B_H, HEAD, HEAD_NEXT, HEAD_SIZE, cap, cue, dur, hold} from './common';
import {AMBER, GREY, INK, Lbl, NAVY, NEUTRON, RED, ROSE, Shrunk, fx, sci} from './parts';

// ---------- 13. attempt 1 ----------
const Q1: React.FC<{u?: boolean}> = ({u = false}) => {
	const U = (t: string) => (u ? <u>{t}</u> : t);
	return <>A muon has a mass of {U('1.88 × 10⁻²⁸ kg')}. Muon-antimuon pairs can be produced by two photons meeting head-on, each with energy equal to the rest energy of one muon. Using {U("Wien's law")}, estimate the temperature of the early Universe when photons at the peak wavelength had this energy.{u ? null : <><br /><span style={{fontSize: '0.85em'}}>h = 6.626 × 10⁻³⁴ J s, c = 3.00 × 10⁸ m s⁻¹, b = 2.898 × 10⁻³ m K</span></>}</>;
};
const MuonPic: React.FC<{w?: number}> = ({w = 678}) => (
	<svg width={w} height={560} style={{overflow: 'visible'}}>
		<rect x={4} y={20} width={668} height={520} rx={16} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} />
		<Packet x={120} y={220} deg={0} len={90} color={AMBER.stroke} label="γ" size={34} />
		<Packet x={400} y={220} deg={180} len={90} color={AMBER.stroke} label="γ" size={34} />
		<Particle x={180} y={360} r={36} color={NAVY.stroke} text="μ⁻" size={28} />
		<Anti x={340} y={360} r={36} color={NAVY.stroke} text="μ⁺" size={28} />
		<path d="M260,250 L200,320 M260,250 L320,320" stroke={INK} strokeWidth={3} strokeDasharray="8 6" />
		<TempBar x={560} y={120} w={44} h={300} level={0.7} color="#d8452f" />
		<text x={582} y={100} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 40, fill: RED.ink}}>T = ?</text>
		<text x={40} y={500} style={{fontFamily: 'Inter Tight', fontWeight: 700, fontSize: 28, fill: INK}}>head-on, equal energies</text>
	</svg>
);
export const S13: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Your turn" pauseAt={cue('attempt-1', 'Pause here')} hold={hold('attempt-1')} size={36} marks={3} picture={<MuonPic />}><Q1 /></QuestionScene></Accent>;

// ---------- 14. feedback 1 ----------
export const S14: React.FC = () => {
	const id = 'feedback-1';
	const j = cue(id, 'joules'), wl = cue(id, 'The wavelength is h c over E'), k = cue(id, 'kelvin'), dv = cap(id, cue(id, 'dividing'));
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk accent={ACCENT} gy={340} givens={<>mμ = 1.88 × 10⁻²⁸ kg | h = 6.626 × 10⁻³⁴ J s | c = 3.00 × 10⁸ m s⁻¹ | b = 2.898 × 10⁻³ m K</>}><Q1 u /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 450, display: 'flex', flexDirection: 'column', gap: 16, width: 1100}}>
				<Row at={j - 6} ageAt={wl} size={40}>{`E = mc² = (1.88 × 10⁻²⁸)(3.00 × 10⁸)² = ${sci(A1_E, 2)} J`}</Row>
				<Row at={wl - 6} ageAt={k} size={40}>{`λ = hc/E = (6.626 × 10⁻³⁴)(3.00 × 10⁸) / (1.69 × 10⁻¹¹) = ${sci(A1_LAM, 2)} m`}</Row>
				<Row at={k - 6} size={48}><AnswerBox at={k}>{`T = b/λ = (2.898 × 10⁻³) / (1.18 × 10⁻¹⁴) ≈ ${sci(A1_T, 1)} K`}</AnswerBox></Row>
			</div>
			<div style={{position: 'absolute', left: 1230, top: 300}}><MuonPic w={620} /></div>
			<HandTag x={1240} y={880} text="heavier pair, hotter" at={k + 16} size={36} color={RED.ink} />
			<CrossedChip x={96} y={800} at={dv} crossAt={dv + 12} size={30} caption="λmax = b/T, so T = b/λ">{`T = bλ = ${sci(A1_SLIP, 1)} K`}</CrossedChip>
		</>
	);
};

// ---------- 15. attempt 2 ----------
const Q2: React.FC<{u?: boolean}> = ({u = false}) => {
	const U = (t: string) => (u ? <u>{t}</u> : t);
	return <>Helium nuclei formed within {U('a few minutes')} of the Big Bang, but neutral atoms did not form until about {U('380 000 years')} later. Explain the difference in these times.</>;
};
const TimesPic: React.FC<{w?: number}> = ({w = 678}) => (
	<svg width={w} height={560} style={{overflow: 'visible'}}>
		<rect x={4} y={20} width={668} height={520} rx={16} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} />
		<line x1={50} y1={330} x2={620} y2={330} stroke={INK} strokeWidth={4} /><path d="M630,330 l-16,-9 v18 z" fill={INK} />
		<text x={630} y={380} textAnchor="end" style={{fontFamily: 'Inter Tight', fontWeight: 700, fontSize: 26, fill: GREY.ink}}>time (not to scale)</text>
		<circle cx={170} cy={330} r={9} fill={INK} /><circle cx={500} cy={330} r={9} fill={INK} />
		<Nucleus cx={170} cy={210} p={2} n={2} r={20} proton={ROSE.stroke} neutron={NEUTRON} />
		<text x={170} y={140} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 30, fill: INK}}>⁴He nucleus</text>
		<text x={170} y={420} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 28, fill: INK}}>a few minutes</text>
		<circle cx={500} cy={210} r={56} fill="none" stroke={NAVY.stroke} strokeWidth={3} />
		<Particle x={500} y={210} r={24} color={ROSE.stroke} text="H" size={22} /><circle cx={556} cy={210} r={10} fill={NAVY.stroke} />
		<text x={500} y={120} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 30, fill: INK}}>H atom</text>
		<text x={500} y={420} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 28, fill: INK}}>380 000 years</text>
	</svg>
);
export const S15: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Last one" pauseAt={cue('attempt-2', 'Pause here')} hold={hold('attempt-2')} size={36} marks={3} picture={<TimesPic />}><Q2 /></QuestionScene></Accent>;

// ---------- 16. feedback 2 ----------
export const S16: React.FC = () => {
	const id = 'feedback-2';
	const k1 = cue(id, 'kelvin'), k2 = cue(id, 'kelvin', 2), tm = cap(id, cue(id, 'time'));
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk accent={ACCENT} gy={300} givens={<>{`binding: ²H ${fx(B_D, 1)} MeV; H atom ${fx(B_H, 1)} eV`}</>}><Q2 u /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 410, display: 'flex', flexDirection: 'column', gap: 18, width: 1100}}>
				<Row at={0} size={36}>each forms once photons are too weak to break it apart</Row>
				<Row at={k1 - 6} size={40}><AnswerBox at={k1}>nuclei: binding ~MeV → survive below ~10⁹ K (minutes)</AnswerBox></Row>
				<Row at={k2 - 6} size={40}><AnswerBox at={k2}>atoms: binding ~eV (13.6 eV for H) → survive below ~3000 K (380 000 years)</AnswerBox></Row>
			</div>
			<div style={{position: 'absolute', left: 1230, top: 300}}><TimesPic w={620} /></div>
			<HandTag x={96} y={760} text="cooling takes time: expansion" at={k2 + 20} size={36} color={GREY.ink} />
			<CrossedChip x={96} y={820} at={tm} crossAt={tm + 12} size={30} caption="MeV bonds survive much hotter than eV bonds">nuclei and atoms formed together</CrossedChip>
		</>
	);
};

// ---------- 17. handoff ----------
const HD = (() => {
	const id = 'handoff-v02';
	return {id, lm: cue(id, 'Light made matter, then stopped breaking it apart'), ns: cue(id, 'never stopped travelling'), st: cue(id, 'stretched by expanding space ever since'), sf: cue(id, 'still fill the sky today'), ma: cue(id, 'moving apart'), nx: cap(id, cue(id, 'So what evidence supports')), end: dur(id) - 1};
})();
export const HB = {x: 96, y: 250, w: 1728, h: 580};
export const US = {x: 960, y: 540};
const BROWN = '#8b5a3c';
const MARKS = ['10⁻⁶ s', 'seconds', '3 to 20 min', '380 000 yr', 'first stars'];
/** Incoming stretched waves (angle in degrees from "us" to the source edge). */
const INWAVES = [180, 0, 225, 315, 270];
/** The handoff board at scene frame f (`final`: every part drawn, for the next video's first frame). */
export const HandoffBoard01: React.FC<{f: number; final?: boolean; heading?: boolean; chip?: boolean; marks?: boolean; timeline?: boolean; galaxies?: boolean; waves?: boolean}> = ({f, final = false, heading = true, chip = true, marks = true, timeline = true, galaxies = true, waves = true}) => {
	const at = (x: number) => (final ? -60 : x);
	const o = (x: number, d = 14) => (final ? 1 : prog(f, x, d));
	const s = final ? 100 : 70 + 30 * prog(f, HD.st, 90);
	const cross = final ? 1 : prog(f, HD.ns, 70);
	const stretch = final ? 1 : prog(f, HD.st, 70);
	const lam = 40 + 70 * stretch;
	const pcol = stretch < 0.5 ? AMBER.stroke : BROWN;
	const g1 = gridPt(US.x, US.y, s, -6, 2), g2 = gridPt(US.x, US.y, s, -4, 2);
	return (
		<>
			{heading ? (!final ? <><SceneHeading text={HEAD} at={-200} out={HD.nx} size={HEAD_SIZE} /><SceneHeading text={HEAD_NEXT} at={HD.nx + 8} size={HEAD_SIZE} /></> : <SceneHeading text={HEAD_NEXT} at={-200} size={HEAD_SIZE} />) : null}
			<FrameSvg>
				<DotGrid box={HB} cx={US.x} cy={US.y} s={s} n={10} atoms={1} atomColor={INK} />
				{!final && f < HD.sf ? <g opacity={o(HD.ns) * (1 - prog(f, HD.sf - 10, 10))}>
					<WaveLine x0={HB.x + 20 + (HB.w - 500) * cross} x1={HB.x + 20 + (HB.w - 500) * cross + 4 * lam} y={760} lambda={lam} amp={18} color={pcol} width={6} />
				</g> : null}
				<g opacity={waves ? o(HD.sf) : 0}>
					{INWAVES.map((deg, i) => <g key={i} transform={`rotate(${deg} ${US.x} ${US.y})`}><WaveLine x0={US.x + 60} x1={US.x + 60 + 480 * (final ? 1 : prog(f, HD.sf + 4 * i, 40))} y={US.y} lambda={110} amp={14} color={i % 2 ? GREY.stroke : BROWN} width={5} /></g>)}
					<circle cx={US.x} cy={US.y} r={16} fill={INK} />
				</g>
				<g opacity={galaxies ? o(HD.ma) : 0}>
					<LPlate spec={GALAXY} p={{x: g1[0] - 75, y: g1[1] - 48, w: 150}} />
					<LPlate spec={GALAXY} p={{x: g2[0] - 75, y: g2[1] - 48, w: 150}} />
					<path d={`M${g1[0] - 80},${g1[1] + 70} h-70 m0,0 l14,-9 m-14,9 l14,9`} stroke={INK} strokeWidth={4} fill="none" />
					<path d={`M${g2[0] + 80},${g2[1] + 70} h70 m0,0 l-14,-9 m14,9 l-14,9`} stroke={INK} strokeWidth={4} fill="none" />
				</g>
			</FrameSvg>
			{timeline ? MARKS.map((m, i) => <Chip key={m} x={180 + i * 330} y={176} at={at(HD.lm + 6 * i)} size={26} color={INK}>{m}</Chip>) : null}
			{waves ? <>
				<Lbl x={US.x} y={US.y + 52} at={at(HD.sf)} color={INK} size={32} anchor="middle">us</Lbl>
				<Lbl x={US.x} y={US.y + 160} at={at(HD.st + 20)} color={BROWN} size={30} anchor="middle">light from recombination, stretched</Lbl>
				<Lbl x={US.x} y={US.y + 110} at={at(HD.sf + 20)} color={INK} size={32} anchor="middle">still here?</Lbl>
			</> : null}
			{galaxies ? <Lbl x={g2[0] + 170} y={g2[1] + 10} at={at(HD.ma + 10)} color={INK} size={32}>still receding?</Lbl> : null}
			{marks ? <>
				<HandTag x={1350} y={470} text="stretched ever since" at={at(HD.st + 30)} size={34} color={BROWN} />
				<HandTag x={0} y={0} at={at(HD.sf + 30)} color={INK} marks={[{kind: 'circle', cx: US.x, cy: US.y + 20, rx: 64, ry: 58}]} />
			</> : null}
			{chip ? <Chip x={96} y={870} at={at(HD.nx)} size={30} w={1728} color={INK} border={INK}>Next: what evidence supports an expanding hot early Universe?</Chip> : null}
		</>
	);
};
/** v01's final frame for the next video. */
export const M8V01FinalFrame: React.FC = () => <HandoffBoard01 f={HD.end} final />;
export const S17: React.FC = () => {
	const f = useCurrentFrame();
	return <HandoffBoard01 f={f} />;
};

// ---------- 18. key notes ----------
export const S18: React.FC = () => {
	const notes = [
		{content: <>Space expands (no centre): λ stretches, so <span style={{color: RED.ink}}>T falls</span>.</>, at: 2},
		{content: <><span style={{color: AMBER.ink}}>Head-on, equal photons</span>: each needs E ≥ mc² for a pair.</>, at: 6},
		{content: <>Cooling made pairs rare; a tiny matter excess survived.</>, at: 10},
		{content: <>n : p ≈ 1 : 7, so 25% He, 75% H by mass.</>, at: 14},
		{content: <>Nuclei at minutes (MeV); atoms at 380 000 years (eV).</>, at: 18},
	];
	return (
		<Accent color={ACCENT}>
			<KeyNotesScene notes={notes} size={34} aid={<MemoryCard at={24} main={<>Too cool to make pairs, then too cool to break nuclei, then too cool to break atoms.</>} picture={<svg width={580} height={220}>
				<Particle x={60} y={110} r={24} color={NAVY.stroke} text="e⁻" size={20} /><Anti x={120} y={110} r={24} color={ROSE.stroke} text="e⁺" size={20} />
				<path d="M170,110 h50" stroke={INK} strokeWidth={4} /><path d="M230,110 l-14,-8 v16 z" fill={INK} />
				<Nucleus cx={300} cy={110} p={2} n={2} r={16} proton={ROSE.stroke} neutron={NEUTRON} />
				<path d="M350,110 h50" stroke={INK} strokeWidth={4} /><path d="M410,110 l-14,-8 v16 z" fill={INK} />
				<circle cx={490} cy={110} r={50} fill="none" stroke={NAVY.stroke} strokeWidth={3} /><Particle x={490} y={110} r={22} color={ROSE.stroke} text="H" size={20} /><circle cx={540} cy={110} r={9} fill={NAVY.stroke} />
			</svg>} />} />
			<HandTag x={1824} y={116} text="pause to copy" at={cue('key-notes', 'Pause')} size={TYPE.hand} color={ACCENT} anchor="end" />
		</Accent>
	);
};
