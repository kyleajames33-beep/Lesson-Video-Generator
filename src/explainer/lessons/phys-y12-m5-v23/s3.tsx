// Scenes 10 to 15: two attempts with brief feedback, the end of gravity and the next field (radial field arrows
// round Earth, the uniform patch near the ground, then two charged plates with a uniform field and a +q particle;
// its last frame is exported as `V23FinalFrame`), the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading} from '../../math/studio';
import {Accent, KeyNotesScene, MemoryCard, QuestionScene} from '../../shared/scenes';
import {CARD, CARD_SHADOW, INK, INK_SOFT, TYPE} from '../../shared/tokens';
import {AnswerBox, Chip, CrossedChip, DISPLAY, Row, Sub} from '../../physics/projectile/board';
import {A1, ACCENT, HEAD_NEXT, HEAD_SIZE, cue, hold} from './common';
import {Earth, GREY, Lbl, Mars, NAVY, Satellite, T, TEAL, VIOLET, VecArrow, fx, sci} from './parts';

// ---------- attempts ----------
const Q1: React.FC = () => <>Mars has a mass of 6.42 × 10²³ kg and a radius of 3.39 × 10⁶ m. (a) Calculate the escape velocity from the surface of Mars. (b) State one assumption made in this calculation. (G = 6.67 × 10⁻¹¹ N m² kg⁻²)</>;
const Q2: React.FC = () => <>A satellite is in a circular orbit around a planet. Its engine fires briefly, increasing its speed. By what factor must its speed increase for the satellite to escape from the planet without further propulsion? Justify your answer.</>;
/** Attempt 1's picture: the painted Mars, nothing to read off. */
const MarsPicture: React.FC = () => (
	<svg width={678} height={560} style={{overflow: 'visible'}}>
		<Mars cx={339} cy={260} d={360} />
		<T x={339} y={500} size={32} anchor="middle" color={INK}>Mars</T>
	</svg>
);
/** Attempt 2's picture: a plain disc tagged "planet", one dashed circle and the satellite, still. */
const PlanetCircle: React.FC<{arrows?: number}> = ({arrows = 0}) => (
	<svg width={678} height={560} style={{overflow: 'visible'}}>
		<circle cx={300} cy={280} r={210} fill="none" stroke={INK} strokeWidth={3} strokeDasharray="10 8" />
		<circle cx={300} cy={280} r={110} fill="#e8dcc6" stroke={INK} strokeWidth={4} />
		<T x={300} y={292} size={32} anchor="middle" color={INK}>planet</T>
		<Satellite cx={300} cy={70} w={90} />
		{arrows > 0 ? <g opacity={arrows}>
			<VecArrow x={346} y={52} dx={150} dy={0} color={TEAL.stroke} width={7} head={20} />
			<VecArrow x={346} y={92} dx={150 * Math.SQRT2} dy={0} color={TEAL.stroke} width={7} head={20} dash="12 7" />
			<T x={506} y={44} size={28} color={TEAL.ink}>v</T>
			<T x={566} y={120} size={28} color={TEAL.ink}>√2 v</T>
		</g> : null}
	</svg>
);
export const S10: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Your turn" pauseAt={cue('attempt-1', 'Pause here')} hold={hold('attempt-1')} size={38} marks={3} picture={<MarsPicture />}><Q1 /></QuestionScene></Accent>;
export const S12: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Last one" pauseAt={cue('attempt-2', 'Pause here')} hold={hold('attempt-2')} size={38} marks={2} picture={<PlanetCircle />}><Q2 /></QuestionScene></Accent>;

const Shrunk: React.FC<{children: React.ReactNode; givens: React.ReactNode; gy: number; w?: number}> = ({children, givens, gy, w = 1110}) => (
	<>
		<div style={{position: 'absolute', left: 96, top: 166, width: w, background: CARD, borderRadius: 16, boxShadow: CARD_SHADOW, borderLeft: `8px solid ${ACCENT}`, padding: '8px 22px', ...DISPLAY(26, INK, 600), whiteSpace: 'normal', lineHeight: 1.24}}>{children}</div>
		<div style={{position: 'absolute', left: 96, top: gy, width: w, background: NAVY.soft, borderRadius: 12, border: `3px solid ${NAVY.stroke}`, padding: '6px 20px', ...DISPLAY(30, NAVY.ink, 700), whiteSpace: 'normal'}}>{givens}</div>
	</>
);
const Picture: React.FC<{children: React.ReactNode}> = ({children}) => (
	<div style={{position: 'absolute', left: 1250, top: 300, transform: 'scale(0.85)', transformOrigin: 'top left'}}>{children}</div>
);

// ---------- 11. feedback 1 ----------
export const S11: React.FC = () => {
	const id = 'feedback-1';
	const f = useCurrentFrame();
	const start = cue(id, 'v equals the square root'), two = cue(id, 'two times six point six seven'), about = cue(id, "That's about five point zero three"), assume = cue(id, 'Assumptions include'), slip = cue(id, 'The classic slip'), leaving = cue(id, 'leaving out the two');
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk gy={330} givens={<>M = 6.42 × 10²³ kg | r = 3.39 × 10⁶ m | G = 6.67 × 10⁻¹¹ N m² kg⁻²</>}><Q1 /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 420, display: 'flex', flexDirection: 'column', gap: 8, width: 1110}}>
				<Row at={start} ageAt={about} size={44} oldSize={34}>(a) v<Sub>esc</Sub> = √(2GM/r)</Row>
				<Row at={two} ageAt={about} size={40} oldSize={32}>&nbsp;&nbsp;&nbsp;= √(2 × 6.67 × 10⁻¹¹ × 6.42 × 10²³ / 3.39 × 10⁶)</Row>
				<Row at={about} size={48}>&nbsp;&nbsp;&nbsp;= √({sci(A1.inside, 3)}) = <AnswerBox at={about + 20}><span>{sci(A1.v)} m s⁻¹</span></AnswerBox></Row>
				<Row at={assume} size={34} style={{whiteSpace: 'normal'}}>(b) e.g. no air resistance; no thrust after launch; only Mars's gravity</Row>
			</div>
			<CrossedChip x={96} y={850} at={slip} crossAt={leaving + 10} size={32} caption="the 2 goes inside the root">√(GM/r) = {sci(A1.slip)} m s⁻¹</CrossedChip>
			<Picture>
				<svg width={678} height={560} style={{overflow: 'visible'}}>
					<Mars cx={300} cy={260} d={300} />
					{f >= about ? <VecArrow x={300} y={100} dx={0} dy={-110} color={TEAL.stroke} width={8} head={22} at={about + 20} /> : null}
					<T x={330} y={20} size={32} color={TEAL.ink} opacity={prog(f, about + 30, 12)}>{fx(A1.v / 1000, 2)} km s⁻¹</T>
				</svg>
			</Picture>
			<Chip x={1290} y={830} at={about + 40} size={30} border={GREY.stroke} color={GREY.ink}>NASA: 5.03 km s⁻¹</Chip>
		</>
	);
};

// ---------- 13. feedback 2 ----------
export const S13: React.FC = () => {
	const id = 'feedback-2';
	const f = useCurrentFrame();
	const same = cue(id, 'At the same radius'), orb = cue(id, 'the orbital speed is root'), esc = cue(id, 'and the escape speed is root two'), must = cue(id, 'So the speed must increase'), about = cue(id, 'about one point four one'), whatever = cue(id, 'whatever the radius'), slip = cue(id, 'The slip is answering two'), doubling = cue(id, 'by doubling');
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk gy={330} givens={<>circular orbit round a planet | a brief burn raises its speed | escape without further propulsion</>}><Q2 /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 430, display: 'flex', flexDirection: 'column', gap: 10, width: 1110}}>
				<Row at={same} size={36}>same r: the burn is brief</Row>
				<Row at={orb} size={44}><span style={{color: TEAL.ink}}>v<Sub>orbit</Sub> = √(GM/r)</span></Row>
				<Row at={esc} size={44}><span style={{color: TEAL.ink}}>v<Sub>esc</Sub> = √(2GM/r)</span></Row>
				<Row at={must} size={52}>ratio = <AnswerBox at={about}><span>√2 ≈ {fx(Math.SQRT2, 2)}</span></AnswerBox></Row>
				<Row at={whatever} size={32}><span style={{color: GREY.ink}}>for any r and any planet</span></Row>
			</div>
			<CrossedChip x={96} y={850} at={slip} crossAt={doubling + 10} size={34} caption="doubling speed quadruples K">× 2</CrossedChip>
			<Picture><PlanetCircle arrows={prog(f, must, 16)} /></Picture>
		</>
	);
};

// ---------- 14. end of gravity, and the next field ----------
const EARTH14 = {cx: 1260, cy: 580, R: 210};
const PL = {x1: 760, x2: 1640, top: 360, bot: 720};
const PATCH = {x: 96, y: 560, w: 470, h: 300};
export const BridgeBoard: React.FC<{recapAt?: number; radialAt?: number; nextAt?: number; platesAt?: number; signsAt?: number; uniformAt?: number; likeAt?: number; particleAt?: number; chipAt?: number}> = ({recapAt = 1e9, radialAt = -60, nextAt = -60, platesAt = -60, signsAt = -60, uniformAt = -60, likeAt = -60, particleAt = -60, chipAt = -60}) => {
	const f = useCurrentFrame();
	const zoom = prog(f, nextAt, 40);
	const earthO = 1 - prog(f, nextAt + 10, 30);
	const patchO = prog(f, nextAt + 16, 20);
	const plates = prog(f, platesAt, 18);
	const k = 1 + 4 * zoom;
	const tx = EARTH14.cx, ty = EARTH14.cy - EARTH14.R;
	return (
		<>
			<SceneHeading text={HEAD_NEXT} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				{earthO > 0 ? <g opacity={earthO} transform={`translate(${tx} ${ty}) scale(${k}) translate(${-tx} ${-ty})`}>
					<Earth cx={EARTH14.cx} cy={EARTH14.cy} d={2 * EARTH14.R} />
					{Array.from({length: 12}, (_, i) => { const a = (i * Math.PI) / 6; const r0 = 320, r1 = EARTH14.R + 18; return <VecArrow key={i} x={EARTH14.cx + r0 * Math.cos(a)} y={EARTH14.cy + r0 * Math.sin(a)} dx={(r1 - r0) * Math.cos(a)} dy={(r1 - r0) * Math.sin(a)} color={VIOLET.stroke} width={5} head={16} at={radialAt + i * 2} />; })}
				</g> : null}
				{patchO > 0 ? <g opacity={patchO}>
					<rect x={PATCH.x} y={PATCH.y} width={PATCH.w} height={PATCH.h} rx={16} fill={CARD} stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} />
					<rect x={PATCH.x + 20} y={PATCH.y + PATCH.h - 70} width={PATCH.w - 40} height={40} fill="#cdbb94" />
					<line x1={PATCH.x + 20} y1={PATCH.y + PATCH.h - 70} x2={PATCH.x + PATCH.w - 20} y2={PATCH.y + PATCH.h - 70} stroke={INK} strokeWidth={4} />
					{[0, 1, 2, 3, 4].map(i => <VecArrow key={i} x={PATCH.x + 70 + i * 82} y={PATCH.y + 50} dx={0} dy={130} color={VIOLET.stroke} width={5} head={16} />)}
				</g> : null}
				{plates > 0 ? <g opacity={plates}>
					<rect x={PL.x1} y={PL.top - 24} width={PL.x2 - PL.x1} height={24} fill="#d9d2c4" stroke={INK} strokeWidth={4} />
					<rect x={PL.x1} y={PL.bot} width={PL.x2 - PL.x1} height={24} fill="#d9d2c4" stroke={INK} strokeWidth={4} />
					{Array.from({length: 8}, (_, i) => <VecArrow key={i} x={PL.x1 + 60 + i * 110} y={PL.top + 14} dx={0} dy={PL.bot - PL.top - 28} color={INK_SOFT} width={4} head={16} at={uniformAt + i * 3} />)}
					<line x1={PL.x2 + 50} y1={PL.top - 12} x2={PL.x2 + 50} y2={PL.bot + 12} stroke={NAVY.stroke} strokeWidth={4} />
					<line x1={PL.x2 + 36} y1={PL.top - 12} x2={PL.x2 + 64} y2={PL.top - 12} stroke={NAVY.stroke} strokeWidth={4} />
					<line x1={PL.x2 + 36} y1={PL.bot + 12} x2={PL.x2 + 64} y2={PL.bot + 12} stroke={NAVY.stroke} strokeWidth={4} />
				</g> : null}
				{f >= particleAt ? <g opacity={prog(f, particleAt, 12)}>
					<circle cx={(PL.x1 + PL.x2) / 2 - 55} cy={(PL.top + PL.bot) / 2} r={26} fill="#f3d9a8" stroke={INK} strokeWidth={4} />
					<T x={(PL.x1 + PL.x2) / 2 - 55} y={(PL.top + PL.bot) / 2 + 11} size={32} anchor="middle" color={INK}>+</T>
					<VecArrow x={(PL.x1 + PL.x2) / 2 - 55} y={(PL.top + PL.bot) / 2 + 34} dx={0} dy={110} color={INK} width={5} head={20} dash="10 7" />
				</g> : null}
			</FrameSvg>
			<Lbl x={EARTH14.cx} y={EARTH14.cy + EARTH14.R + 110} at={radialAt + 20} out={nextAt} color={VIOLET.ink} anchor="middle" size={30}>gravitational field: sets every orbit and every escape</Lbl>
			<div style={{position: 'absolute', left: 96, top: 200, display: 'flex', flexDirection: 'column', gap: 14, opacity: 1 - prog(f, nextAt, 16)}}>
				<Chip x={0} y={0} at={recapAt} size={34} w={720} border={TEAL.stroke} color={TEAL.ink}>orbit: v² = GM/r</Chip>
				<Chip x={0} y={90} at={recapAt + 10} size={34} w={720} border={NAVY.stroke} color={NAVY.ink}>circular orbit: E = −GMm/2r (bound)</Chip>
				<Chip x={0} y={180} at={recapAt + 20} size={34} w={720} border={TEAL.stroke} color={TEAL.ink}>escape: v = √(2GM/r) from E = 0</Chip>
			</div>
			{patchO > 0 ? <Lbl x={PATCH.x + PATCH.w / 2} y={PATCH.y - 20} at={nextAt + 16} color={VIOLET.ink} anchor="middle" size={30}>near the surface: uniform</Lbl> : null}
			<Lbl x={PL.x1 - 20} y={PL.top - 4} at={signsAt} color={INK} anchor="end" size={44}>+</Lbl>
			<Lbl x={PL.x1 - 20} y={PL.bot + 28} at={signsAt} color={INK} anchor="end" size={44}>−</Lbl>
			<Lbl x={PL.x2 + 80} y={(PL.top + PL.bot) / 2 + 12} at={signsAt + 10} color={NAVY.ink} size={40}>V</Lbl>
			<Lbl x={PL.x1 + 40} y={PL.bot + 80} at={uniformAt} color={INK} size={32}>E: uniform</Lbl>
			<HandTag x={PL.x1 + 300} y={PL.bot + 80} text="just like gravity near the ground" at={likeAt} size={30} color={VIOLET.ink} />
			<Lbl x={(PL.x1 + PL.x2) / 2 - 10} y={(PL.top + PL.bot) / 2 + 150} at={particleAt} color={INK} size={34}>a = ?</Lbl>
			<Lbl x={(PL.x1 + PL.x2) / 2 - 10} y={(PL.top + PL.bot) / 2 - 40} at={particleAt} color={INK} size={30}>+q</Lbl>
			<Chip x={96} y={890 - 0} at={chipAt} size={30} w={1728} color={INK} border={INK}>Next: how does the voltage between parallel plates set a charged particle's acceleration?</Chip>
		</>
	);
};
/** v23's final frame (the parallel plates that open the next topic). */
export const V23FinalFrame: React.FC = () => <BridgeBoard />;
export const S14: React.FC = () => {
	const id = 'module-bridge';
	const wraps = cue(id, 'That wraps up'), radial = cue(id, 'A gravitational field around every mass'), next = cue(id, 'Next, we meet'), kind = cue(id, 'a different kind'), between = cue(id, 'Between two charged plates'), uniform = cue(id, 'the electric field is uniform'), like = cue(id, 'just like gravity close'), particle = cue(id, 'a charged particle accelerates'), how = cue(id, 'So how does the voltage');
	return <BridgeBoard recapAt={wraps} radialAt={radial} nextAt={next} platesAt={kind} signsAt={between} uniformAt={uniform} likeAt={like} particleAt={particle} chipAt={how} />;
};

// ---------- 15. key notes ----------
export const S15: React.FC = () => {
	const notes = [
		{content: <>Gravity only: <span style={{color: NAVY.ink}}>E = K + U</span> stays constant.</>, at: 2},
		{content: <>Just escaping: E = 0, so ½mv² = GMm/r.</>, at: 6},
		{content: <><span style={{color: TEAL.ink}}>Escape velocity = √(2GM/r)</span>; from Earth's surface 11.2 km s⁻¹.</>, at: 10},
		{content: <>Escape speed = √2 × orbit speed; mass and direction don't matter.</>, at: 14},
		{content: <>Assumes no air, no thrust after launch, one planet's gravity.</>, at: 18},
	];
	return (
		<Accent color={ACCENT}>
			<KeyNotesScene notes={notes} size={34} aid={
				<MemoryCard at={24} main={<span><span style={{color: TEAL.ink}}>Escape = √2 × orbit. </span><span style={{color: NAVY.ink}}>The 2 goes inside the root.</span></span>} sub="same r, same planet"
					picture={<svg width={584} height={220} viewBox="0 0 584 220">
						<circle cx={150} cy={130} r={80} fill="none" stroke={INK} strokeWidth={3} strokeDasharray="8 6" />
						<circle cx={150} cy={130} r={42} fill="#e8dcc6" stroke={INK} strokeWidth={3} />
						<Satellite cx={150} cy={50} w={50} />
						<VecArrow x={180} y={40} dx={130} dy={0} color={TEAL.stroke} width={6} head={18} />
						<VecArrow x={180} y={70} dx={130 * Math.SQRT2} dy={0} color={TEAL.stroke} width={6} head={18} dash="10 6" />
						<T x={330} y={48} size={26} color={TEAL.ink}>orbit</T>
						<T x={380} y={100} size={26} color={TEAL.ink}>escape (× √2)</T>
					</svg>} />
			} />
			<HandTag x={1824} y={116} text="pause to copy" at={cue('key-notes', 'Pause')} size={TYPE.hand} color={ACCENT} anchor="end" />
		</Accent>
	);
};
