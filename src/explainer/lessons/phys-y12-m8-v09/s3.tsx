// Scenes 13 to 18: attempt 1 (the painted beam line with an unlabelled stream and protons leaving the wax) and its
// feedback, attempt 2 (the wax and the nitrogen gas cell with recoil arrows) and its feedback, the handoff (the completed
// atom: a small nucleus of p and n with one electron moving on a circular orbit, its velocity turning, its acceleration
// to the centre, "accelerating charges radiate"; its last frame is exported as `M8V09FinalFrame`) and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading} from '../../math/studio';
import {Accent, KeyNotesScene, MemoryCard, QuestionScene} from '../../shared/scenes';
import {TYPE} from '../../shared/tokens';
import {AnswerBox, Chip, CrossedChip, Row} from '../../physics/projectile/board';
import {LPlate, VCELL} from '../../physics/light/plates';
import {Arrow} from '../../physics/light/em';
import {LEAD, PO_BE, WAX} from '../../physics/atom/neutron';
import {ACCENT, HEAD, HEAD_NEXT, HEAD_SIZE, cap, cue, dur, hold} from './common';
import {AMBER, BL, GREY, INK, Lbl, N, NAVY, P, RED, ROSE, Shrunk, Stream, TEAL, blPts} from './parts';

// ---------- 13. attempt 1 ----------
const Q1: React.FC<{u?: boolean}> = ({u = false}) => {
	const U = (t: string) => (u ? <u>{t}</u> : t);
	return <>When beryllium is bombarded with alpha particles, it emits a penetrating radiation that is {U('not deflected')} by electric or magnetic fields and that ejects {U('high-speed protons')} from paraffin wax. Explain why Chadwick concluded that this radiation consisted of neutral particles with a mass similar to that of a proton, {U('rather than gamma rays')}.</>;
};
/** The beam line (source, lead, wax) with an unlabelled stream and protons leaving the wax (answer-free). */
const Pic1: React.FC<{w?: number}> = ({w = 678}) => {
	const {slabR} = blPts();
	return (
		<svg width={w} height={(w * 520) / 1180} viewBox="60 300 1180 520" style={{overflow: 'visible'}}>
			<rect x={64} y={304} width={1172} height={512} rx={20} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={4} />
			<LPlate spec={PO_BE} p={BL.src} />
			<LPlate spec={LEAD} p={BL.lead} />
			<LPlate spec={WAX} p={BL.wax} />
			<Stream x1={slabR[0] - 74} t={0} kind="unknown" />
			{[-44, 0, 44].map((dy, i) => <g key={i}><circle cx={slabR[0] + 40 + 20 * i} cy={BL.axis + dy} r={18} fill={RED.stroke} stroke={INK} strokeWidth={2} /><Arrow from={[slabR[0] + 62 + 20 * i, BL.axis + dy]} to={[slabR[0] + 120 + 20 * i, BL.axis + dy]} color={TEAL.stroke} width={6} head={16} /></g>)}
			<text x={720} y={420} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 56, fill: GREY.ink}}>radiation?</text>
			<text x={1150} y={430} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 52, fill: RED.ink}}>protons</text>
		</svg>
	);
};
export const S13: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Your turn" pauseAt={cue('attempt-1', 'Pause here')} hold={hold('attempt-1')} size={32} marks={3} picture={<Pic1 />}><Q1 /></QuestionScene></Accent>;

// ---------- 14. feedback 1 ----------
export const S14: React.FC = () => {
	const id = 'feedback-1';
	const nd = cue(id, 'No deflection means no charge'), gp = cue(id, 'Gamma photons would need'), wk = cue(id, 'so modest energies work'), sl = cue(id, 'The slip is saying'), un = cap(id, cue(id, 'Both ideas were uncharged'));
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk accent={ACCENT} gy={390} givens={<>not deflected; penetrating; fast protons from paraffin</>}><Q1 u /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 480, display: 'flex', flexDirection: 'column', gap: 16, width: 1110}}>
				<Row at={nd} size={32}><AnswerBox at={nd + 6}>no deflection → uncharged (both hypotheses)</AnswerBox></Row>
				<Row at={gp} size={32}><AnswerBox at={gp + 6}>γ: massless → small share → ≈ 55 MeV needed &gt; ≈ 16 MeV</AnswerBox></Row>
				<Row at={gp + 40} size={32}><AnswerBox at={gp + 46}>nitrogen recoils give a different photon energy</AnswerBox></Row>
				<Row at={wk} size={32}><AnswerBox at={wk + 6}>neutral, mass ≈ mₚ → head-on → full transfer</AnswerBox></Row>
			</div>
			<div style={{position: 'absolute', left: 1230, top: 520}}><Pic1 w={600} /></div>
			<CrossedChip x={1230} y={820} at={sl} crossAt={un} size={28} caption="both ideas were uncharged">{"it can't be gamma: gamma rays are charged"}</CrossedChip>
		</>
	);
};

// ---------- 15. attempt 2 ----------
const Q2: React.FC<{u?: boolean}> = ({u = false}) => {
	const U = (t: string) => (u ? <u>{t}</u> : t);
	return <>Explain why Chadwick needed recoil speeds from {U('two different targets')} to determine the mass of the neutron.</>;
};
const Pic2: React.FC<{w?: number}> = ({w = 678}) => (
	<svg width={w} height={(w * 460) / 680} viewBox="0 0 680 460" style={{overflow: 'visible'}}>
		<rect x={4} y={4} width={672} height={452} rx={18} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={3} />
		<LPlate spec={WAX} p={{x: 60, y: 40, w: 160}} />
		<LPlate spec={VCELL} p={{x: 300, y: 150, w: 340}} />
		{[0, 1].map(i => <g key={i}><circle cx={250} cy={160 + i * 60} r={16} fill={RED.stroke} stroke={INK} strokeWidth={2} /><Arrow from={[270, 160 + i * 60]} to={[300, 160 + i * 60]} color={TEAL.stroke} width={5} head={12} /></g>)}
		<circle cx={470} cy={226} r={24} fill={RED.stroke} stroke={INK} strokeWidth={2} />
		<Arrow from={[496, 226]} to={[530, 226]} color={TEAL.stroke} width={5} head={12} />
		<text x={140} y={440} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 30, fill: INK}}>paraffin</text>
		<text x={470} y={400} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 30, fill: INK}}>nitrogen gas</text>
	</svg>
);
export const S15: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Last one" pauseAt={cue('attempt-2', 'Pause here')} hold={hold('attempt-2')} size={38} marks={2} picture={<Pic2 />}><Q2 /></QuestionScene></Accent>;

// ---------- 16. feedback 2 ----------
export const S16: React.FC = () => {
	const id = 'feedback-2';
	const tu = cue(id, 'depends on two unknowns'), ot = cue(id, 'One target gives one equation'), st = cue(id, 'A second target gives'), lm = cue(id, 'leaving the mass'), sl = cue(id, 'The slip is thinking'), oe = cap(id, cue(id, "One equation can't fix two unknowns"));
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk accent={ACCENT} gy={290} givens={<>two targets; unknowns mₙ and v</>}><Q2 u /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 400, display: 'flex', flexDirection: 'column', gap: 18, width: 1110}}>
				<Row at={tu} size={36}><AnswerBox at={tu + 6}>unknowns: mₙ and v</AnswerBox></Row>
				<Row at={ot} size={36}><AnswerBox at={ot + 6}>one target → one equation: not enough</AnswerBox></Row>
				<Row at={st} size={36}><AnswerBox at={st + 6}>two equations (proton, nitrogen; fastest recoils)</AnswerBox></Row>
				<Row at={lm} size={36}><AnswerBox at={lm + 6}>divide: v cancels → mₙ</AnswerBox></Row>
			</div>
			<div style={{position: 'absolute', left: 1230, top: 400}}><Pic2 w={600} /></div>
			<CrossedChip x={96} y={830} at={sl} crossAt={oe} size={30} caption="one equation can't fix two unknowns">one target is enough</CrossedChip>
		</>
	);
};

// ---------- 17. handoff ----------
const HD = (() => {
	const id = 'handoff';
	return {id, tn: cue(id, 'a tiny nucleus of protons and neutrons'), eo: cue(id, 'with electrons outside it'), or: cue(id, 'they orbit the nucleus'), aa: cue(id, 'always accelerating'), ac: cue(id, 'you know what accelerating charges do'), nx: cap(id, cue(id, "So why couldn't Rutherford's model")), end: dur(id) - 1};
})();
export const ORB9 = {cx: 660, cy: 570, r: 300};
const NUC9 = [[0, 0, 'p'], [16, -12, 'n'], [-16, -10, 'n'], [-4, 18, 'p'], [18, 14, 'n'], [-20, 12, 'p']] as const;
/** Electron angle on the orbit at scene frame f (anticlockwise on screen). */
export const elecAngle = (f: number) => -0.6 - f * 0.035;
/** The handoff board at scene frame f (`final`: every part drawn, for the next video's first frame). */
export const HandoffBoard09: React.FC<{f: number; final?: boolean; heading?: boolean; chip?: boolean; marks?: boolean; lo?: number}> = ({f, final = false, heading = true, chip = true, marks = true, lo = 1}) => {
	const at = (x: number) => (final ? -60 : x);
	const o = (x: number, d = 14) => (final ? 1 : prog(f, x, d));
	const th = elecAngle(f);
	const ex = ORB9.cx + ORB9.r * Math.cos(th), ey = ORB9.cy + ORB9.r * Math.sin(th);
	const tx = Math.sin(th), ty = -Math.cos(th);
	const wv = (f % 40) / 40;
	return (
		<>
			{heading ? (!final ? <><SceneHeading text={HEAD} at={-200} out={HD.nx} size={HEAD_SIZE} /><SceneHeading text={HEAD_NEXT} at={HD.nx + 8} size={HEAD_SIZE} /></> : <SceneHeading text={HEAD_NEXT} at={-200} size={HEAD_SIZE} />) : null}
			<FrameSvg>
				<g opacity={o(HD.tn)}>{NUC9.map(([dx, dy, k], i) => k === 'p' ? <P key={i} x={ORB9.cx + dx * 1.6} y={ORB9.cy + dy * 1.6} r={17} /> : <N key={i} x={ORB9.cx + dx * 1.6} y={ORB9.cy + dy * 1.6} r={17} />)}</g>
				<circle cx={ORB9.cx} cy={ORB9.cy} r={ORB9.r} fill="none" stroke={INK} strokeWidth={3} strokeDasharray="12 10" opacity={o(HD.or)} />
				<g opacity={o(HD.eo)}><circle cx={ex} cy={ey} r={18} fill={NAVY.stroke} stroke="#ffffff" strokeWidth={3} /></g>
				<g opacity={o(HD.aa)}>
					<Arrow from={[ex + 22 * tx, ey + 22 * ty]} to={[ex + 130 * tx, ey + 130 * ty]} color={TEAL.stroke} width={6} head={18} />
					<Arrow from={[ex - 22 * Math.cos(th), ey - 22 * Math.sin(th)]} to={[ex - 120 * Math.cos(th), ey - 120 * Math.sin(th)]} color={ROSE.stroke} width={6} head={18} />
				</g>
				<g opacity={o(HD.ac)}>{[0, 1, 2].map(i => { const rr = 40 + 60 * ((wv + i / 3) % 1); return <circle key={i} cx={ex} cy={ey} r={rr} fill="none" stroke={ROSE.stroke} strokeWidth={3} opacity={0.9 * (1 - ((wv + i / 3) % 1))} />; })}</g>
			</FrameSvg>
			<Lbl x={ORB9.cx} y={ORB9.cy + 80} at={at(HD.tn)} color={INK} size={26} anchor="middle">nucleus: p and n (not to scale)</Lbl>
			{!final ? <div style={{position: 'absolute', inset: 0, opacity: 1 - prog(f, HD.eo - 16, 14)}}>
				<FrameSvg><rect x={1160} y={200} width={660} height={690} rx={18} fill="#fffdf8" stroke="rgba(60,45,20,0.25)" strokeWidth={2.5} />
					<rect x={1200} y={330} width={580 * 79 / 197} height={54} rx={8} fill={RED.stroke} /><rect x={1200 + 580 * 79 / 197} y={330} width={580 * 118 / 197} height={54} rx={8} fill="#9a958c" /><rect x={1200} y={330} width={580} height={54} rx={8} fill="none" stroke={INK} strokeWidth={2.5} />
					{Array.from({length: 30}, (_, i) => { const c = i % 10, r = Math.floor(i / 10), x = 1230 + c * 58, y = 560 + r * 60; return i % 5 === 1 || i % 5 === 3 || i % 5 === 4 ? <N key={i} x={x} y={y} r={24} /> : <P key={i} x={x} y={y} r={24} />; })}
				</FrameSvg>
				<Lbl x={1200} y={260} at={-30} color={INK} size={34}>the completed atom</Lbl>
				<Lbl x={1200} y={430} at={-30} color={INK} size={30}>gold mass: 79 protons + 118 neutrons</Lbl>
				<Lbl x={1200} y={480} at={-30} color={INK} size={30}>A = Z + N = 197</Lbl>
				<Lbl x={1200} y={760} at={-30} color={GREY.ink} size={28}>nucleus: protons (p) and neutrons (n)</Lbl>
				<Lbl x={1200} y={820} at={-30} color={NAVY.ink} size={28}>electrons: outside the nucleus</Lbl>
			</div> : null}

			<div style={{position: 'absolute', inset: 0, opacity: lo}}>
			<Lbl x={1160} y={300} at={at(HD.eo)} color={NAVY.ink} size={30}>one electron, far outside</Lbl>
			<Lbl x={1160} y={360} at={at(HD.or)} color={INK} size={30}>{"Rutherford's picture: a circular orbit"}</Lbl>
			<Lbl x={1160} y={440} at={at(HD.aa)} color={TEAL.ink} size={30}>v keeps changing direction</Lbl>
			<Lbl x={1160} y={490} at={at(HD.aa + 6)} color={ROSE.ink} size={30}>a points to the centre</Lbl>
			<Lbl x={1160} y={550} at={at(HD.aa + 12)} color={INK} size={30}>changing direction = accelerating</Lbl>
			<Chip x={1160} y={620} at={at(HD.ac)} size={30} color={ROSE.ink}>accelerating charges radiate EM waves ?</Chip>
			{marks ? <HandTag x={1160} y={740} text="radiates?" at={at(HD.ac + 20)} size={40} color={ROSE.ink} /> : null}
			</div>
			{chip ? <Chip x={96} y={870} at={at(HD.nx)} size={30} w={1728} color={INK} border={INK}>{"Next: why couldn't Rutherford's model explain stable atoms and line spectra?"}</Chip> : null}
		</>
	);
};
/** The handoff scene's last frame (v10 continues the electron's motion from it). */
export const HANDOFF09_END = HD.end;
/** v09's final frame for the next video. */
export const M8V09FinalFrame: React.FC = () => <HandoffBoard09 f={HD.end} final />;
export const S17: React.FC = () => <HandoffBoard09 f={useCurrentFrame()} />;

// ---------- 18. key notes ----------
export const S18: React.FC = () => {
	const notes = [
		{content: <>Be + α radiation: not deflected, so <span style={{color: GREY.ink}}>uncharged</span>.</>, at: 2},
		{content: <><span style={{color: AMBER.ink}}>Photon</span> on proton: small share, about 55 MeV needed.</>, at: 6},
		{content: <><span style={{color: GREY.ink}}>Neutron</span>: neutral, mass ≈ mₚ; head-on, full transfer.</>, at: 10},
		{content: <>⁴₂He + ⁹₄Be → ¹²₆C + ¹₀n</>, at: 14},
		{content: <>Two targets cancel v: mₙ ≈ 1.16 mₚ (rough); <span style={{color: RED.ink}}>A = Z + N</span>.</>, at: 18},
	];
	return (
		<Accent color={ACCENT}>
			<KeyNotesScene notes={notes} size={34} aid={<MemoryCard at={24} main={<>Photon on proton: ping-pong on bowling ball. Neutron on proton: billiard on billiard.</>} picture={<svg width={580} height={220}><circle cx={150} cy={110} r={70} fill="#3a3a44" /><circle cx={50} cy={150} r={16} fill="#ffffff" stroke={INK} strokeWidth={2.5} /><N x={380} y={110} r={34} /><P x={500} y={110} r={34} /></svg>} />} />
			<HandTag x={1824} y={116} text="pause to copy" at={cue('key-notes', 'Pause')} size={TYPE.hand} color={ACCENT} anchor="end" />
		</Accent>
	);
};
