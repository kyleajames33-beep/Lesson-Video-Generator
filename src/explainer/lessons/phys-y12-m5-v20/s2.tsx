// Scenes 6 to 10: the speeds at the two ends (thin triangles from the teaching run, then Earth's orbit with
// the NASA figures), law 3 (Earth and Mars runs with live lap counters, the a-cubed and T-squared table),
// Halley's period (its true ellipse above full-width working), the extreme-distance mistake, and the memory
// card with the three filled law slots.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Enter, FONT_HAND, prog} from '../../kit';
import {FrameSvg, HandTag, MarkSpan, SceneHeading} from '../../math/studio';
import {CARD, INK, INK_SOFT, TYPE} from '../../shared/tokens';
import {AnswerBox, Chip, CrossedChip, DISPLAY, Readouts, Row, Sub} from '../../physics/projectile/board';
import {EARTH, HALLEY, HEAD, HEAD_SIZE, MARS, RUN_EARTH, RUN_MARS, RUN_TEACH, TEACH, cue} from './common';
import {AMBER, Comet, Earth, Focus, GREY, Lbl, Mars, NAVY, Sun, T, TEAL, VecArrow, at, ellipseD, fx, head, toV} from './parts';
import type {View} from './parts';
import {HalleyEllipse, LawSlot, cometAt} from './s1';

const card: React.CSSProperties = {background: CARD, borderRadius: 18, boxShadow: '0 10px 26px rgba(60,45,20,0.12)', padding: '10px 24px 14px', border: '2.5px solid rgba(60,45,20,0.16)'};
export const Strip: React.FC<{x: number; y: number; at: number; w?: number; children: React.ReactNode; size?: number; border?: string; color?: string; bg?: string}> = ({x, y, at: a, w, children, size = 34, border = 'rgba(60,45,20,0.16)', color = INK, bg = CARD}) => (
	<Enter at={a} style={{position: 'absolute', left: x, top: y, width: w}}>
		<div style={{display: 'inline-block', background: bg, border: `3px solid ${border}`, borderRadius: 14, padding: '6px 20px 8px', ...DISPLAY(size, color, 800), whiteSpace: 'normal'}}>{children}</div>
	</Enter>
);
const Givens: React.FC<{x: number; y: number; w: number; at: number; lines: React.ReactNode[]; size?: number}> = ({x, y, w, at: a, lines, size = 34}) => (
	<Enter at={a} style={{position: 'absolute', left: x, top: y, width: w}}>
		<div style={{background: NAVY.soft, border: `3px solid ${NAVY.stroke}`, borderRadius: 14, padding: '6px 22px 10px'}}>
			{lines.map((t, i) => <div key={i} style={{...DISPLAY(size, NAVY.ink, 800)}}>{t}</div>)}
		</div>
	</Enter>
);
const RA: React.FC<{x: number; y: number; a: [number, number]; b: [number, number]; s?: number}> = ({x, y, a, b, s = 18}) => <path d={`M${x + a[0] * s},${y + a[1] * s} L${x + a[0] * s + b[0] * s},${y + a[1] * s + b[1] * s} L${x + b[0] * s},${y + b[1] * s}`} fill="none" stroke={INK} strokeWidth={3} />;
const p = (s: string) => <Sub>{s}</Sub>;

// ---------- 6. the speeds at the two ends ----------
const DT = 0.035;
const EV: View = {sx: 520, sy: 590, k: 2.0};
const K6: View = {sx: 380, sy: 600, k: 400};
export const S06: React.FC = () => {
	const id = 'end-speeds';
	const f = useCurrentFrame();
	const rightA = cue(id, 'right angles'), thin = cue(id, 'thin triangle'), half = cue(id, 'half times r'), equal = cue(id, 'Equal areas means'), both = cue(id, 'both points'), earth = cue(id, 'Earth is a hundred'), jan = cue(id, 'January'), july = cue(id, 'July'), so = cue(id, 'So in January'), three = cue(id, 'three per cent'), nasa = cue(id, 'NASA lists');
	const out = prog(f, earth - 10, 20), inn = prog(f, earth, 20);
	const tri = (t0: number) => {
		const a0 = at(RUN_TEACH, t0), a1 = at(RUN_TEACH, t0 + DT);
		const P0 = toV(K6, a0.x, a0.y), P1 = toV(K6, a1.x, a1.y);
		return {d: `M${K6.sx},${K6.sy} L${P0[0]},${P0[1]} L${P1[0]},${P1[1]} Z`, P0, P1};
	};
	const tp = tri(-DT / 2), ta = tri(0.5 - DT / 2);
	const hp = head(K6, RUN_TEACH, 0), ha = head(K6, RUN_TEACH, 0.5);
	const rU = (h: {x: number; y: number}): [number, number] => { const d = Math.hypot(h.x - K6.sx, h.y - K6.sy); return [(K6.sx - h.x) / d, (K6.sy - h.y) / d]; };
	const ep = toV(EV, EARTH.rp, 0), ea = toV(EV, -EARTH.ra, 0);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			{out < 1 ? <div style={{position: 'absolute', inset: 0, opacity: 1 - out}}>
				<FrameSvg>
					<path d={ellipseD(K6, TEACH.a, TEACH.e)} fill="none" stroke={NAVY.stroke} strokeWidth={4} />
					{f >= thin ? <g opacity={prog(f, thin, 14)}>
						<path d={tp.d} fill="#f6dcae" stroke={AMBER.stroke} strokeWidth={3} />
						<path d={ta.d} fill="#f6dcae" stroke={AMBER.stroke} strokeWidth={3} />
					</g> : null}
					<Sun cx={K6.sx} cy={K6.sy} d={60} />
					<VecArrow x={hp.x} y={hp.y} dx={hp.ux * TEACH.vpKms * 2.4} dy={hp.uy * TEACH.vpKms * 2.4} color={TEAL.stroke} width={7} head={20} at={-30} />
					<VecArrow x={ha.x} y={ha.y} dx={ha.ux * TEACH.vaKms * 2.4} dy={ha.uy * TEACH.vaKms * 2.4} color={TEAL.stroke} width={7} head={20} at={-30} />
					{f >= rightA ? <g opacity={prog(f, rightA, 12)}><RA x={hp.x} y={hp.y} a={rU(hp)} b={[hp.ux, hp.uy]} /><RA x={ha.x} y={ha.y} a={rU(ha)} b={[ha.ux, ha.uy]} /></g> : null}
					<Mars cx={hp.x} cy={hp.y} d={34} />
					<Mars cx={ha.x} cy={ha.y} d={34} />
				</FrameSvg>
				<Lbl x={hp.x - 20} y={hp.y + 60} at={-30} color={TEAL.ink} anchor="end" size={30}>v<Sub>p</Sub></Lbl>
				<Lbl x={ha.x + 20} y={ha.y + 60} at={-30} color={TEAL.ink} size={30}>v<Sub>a</Sub></Lbl>
				<Lbl x={(K6.sx + hp.x) / 2} y={K6.sy + 44} at={thin} color={NAVY.ink} anchor="middle" size={30}>r<Sub>p</Sub></Lbl>
				<Lbl x={(K6.sx + ha.x) / 2} y={K6.sy + 44} at={thin} color={NAVY.ink} anchor="middle" size={30}>r<Sub>a</Sub></Lbl>
				<Lbl x={K6.sx + 0.6 * K6.k} y={K6.sy - 0.8 * K6.k - 30} at={half} color={AMBER.ink} anchor="middle" size={36}>each area ≈ ½ r v t</Lbl>
				<HandTag x={hp.x - 40} y={hp.y - 220} text="short r, long base" at={thin + 20} size={30} color={NAVY.ink} />
			</div> : null}
			{inn > 0 ? <div style={{position: 'absolute', inset: 0, opacity: inn}}>
				<FrameSvg>
					<path d={ellipseD(EV, 149.598, EARTH.e)} fill="none" stroke={NAVY.stroke} strokeWidth={3} strokeDasharray="12 9" />
					<Sun cx={EV.sx} cy={EV.sy} d={70} />
					<line x1={EV.sx} y1={EV.sy} x2={ep[0]} y2={ep[1]} stroke={NAVY.stroke} strokeWidth={4} opacity={prog(f, jan, 12)} />
					<line x1={EV.sx} y1={EV.sy} x2={ea[0]} y2={ea[1]} stroke={NAVY.stroke} strokeWidth={4} opacity={prog(f, july, 12)} />
					<Earth cx={ep[0]} cy={ep[1]} d={48} />
					<g opacity={prog(f, july, 12)}><Earth cx={ea[0]} cy={ea[1]} d={48} /></g>
				</FrameSvg>
				<Lbl x={ep[0] + 30} y={ep[1] - 40} at={jan} color={NAVY.ink} size={30}>January: 147.1 × 10⁶ km</Lbl>
				<Lbl x={ea[0] - 30} y={ea[1] + 60} at={july} color={NAVY.ink} anchor="end" size={30}>July: 152.1 × 10⁶ km</Lbl>
				<Lbl x={EV.sx} y={EV.sy - 320} at={earth} color={GREY.ink} anchor="middle" size={28}>Earth's orbit, true shape (nearly a circle)</Lbl>
			</div> : null}
			<div style={{position: 'absolute', left: 1040, top: 190, display: 'flex', flexDirection: 'column', gap: 10, width: 784}}>
				<Row at={rightA} ageAt={equal} size={36} oldSize={30}>at the ends: v at 90° to r</Row>
				<Row at={equal} ageAt={earth} size={48} oldSize={36}>½ r{p('p')}v{p('p')}t = ½ r{p('a')}v{p('a')}t</Row>
				<Row at={equal + 30} ageAt={earth} size={52} oldSize={38}><MarkSpan kind="circle" at={both + 20} color={NAVY.stroke}>r{p('p')}v{p('p')} = r{p('a')}v{p('a')}</MarkSpan></Row>
				<Row at={both - 10} size={52}><AnswerBox at={both}><span>v{p('p')} / v{p('a')} = r{p('a')} / r{p('p')}</span></AnswerBox></Row>
				<Row at={so} size={52}>v{p('p')} / v{p('a')} = 152.1 / 147.1 = <AnswerBox at={three}><span>{fx(EARTH.ratio, 3)}</span></AnswerBox></Row>
			</div>
			<HandTag x={1060} y={700} text="about 3 % faster" at={three + 10} size={32} color={TEAL.ink} />
			<Chip x={1040} y={760} at={nasa} size={30} w={784} border={GREY.stroke} color={GREY.ink}>NASA: {EARTH.vmax} and {EARTH.vmin} km s⁻¹ (ratio {fx(EARTH.vRatio, 3)})</Chip>
		</>
	);
};

// ---------- 7. law 3: size and period ----------
const TV: View = {sx: 470, sy: 600, k: 205};
const YEAR7 = 200;
export const S07: React.FC = () => {
	const id = 'law-3';
	const f = useCurrentFrame();
	const third = cue(id, 'third law'), tsq = cue(id, 'T squared is'), circles = cue(id, 'For circles'), place = cue(id, 'in place of'), measure = cue(id, 'Measure a'), earthG = cue(id, 'Earth gives'), mars = cue(id, 'Mars has'), cube = cue(id, 'Cube one'), both = cue(id, 'both come');
	const t = f / YEAR7;
	const e = at(RUN_EARTH, t), m = at(RUN_MARS, t);
	const [ex, ey] = toV(TV, e.x, e.y), [mx, my] = toV(TV, m.x, m.y);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<path d={ellipseD(TV, 1, EARTH.e)} fill="none" stroke={TEAL.stroke} strokeWidth={3} strokeDasharray="10 8" />
				<path d={ellipseD(TV, MARS.a, MARS.e)} fill="none" stroke={NAVY.stroke} strokeWidth={3} strokeDasharray="10 8" />
				<Sun cx={TV.sx} cy={TV.sy} d={70} />
				<Earth cx={ex} cy={ey} d={40} />
				<Mars cx={mx} cy={my} d={36} />
				<line x1={TV.sx} y1={TV.sy} x2={TV.sx + MARS.a * TV.k * 0.99} y2={TV.sy} stroke={NAVY.stroke} strokeWidth={5} opacity={prog(f, place, 14)} />
			</FrameSvg>
			<Lbl x={TV.sx + MARS.a * TV.k / 2} y={TV.sy - 16} at={place} color={NAVY.ink} anchor="middle" size={30}>a</Lbl>
			<Lbl x={96} y={925} at={-30} color={GREY.ink} size={28}>true shapes and sizes</Lbl>
			<Readouts x={1000} y={186} w={824} size={44} at={third} title="laps since the start" rows={[
				{label: 'Earth', value: fx(t, 1), color: TEAL.ink},
				{label: 'Mars', value: fx(t / MARS.T, 1), color: NAVY.ink},
			]} />
			<div style={{position: 'absolute', left: 1000, top: 360, display: 'flex', flexDirection: 'column', gap: 6, width: 824}}>
				<Row at={tsq} ageAt={circles} size={48} oldSize={36}>T² ∝ a³</Row>
				<Row at={circles} ageAt={place} size={44} oldSize={32}>r³/T² = GM/4π² <span style={{...DISPLAY(28, GREY.ink, 700)}}>(circles, from gravity)</span></Row>
				<Row at={place} ageAt={measure} size={52} oldSize={38}><span style={{color: NAVY.ink}}>a</span>³/T² = GM/4π²</Row>
				<Row at={place + 20} size={30}>same constant for everything orbiting the Sun</Row>
			</div>
			<HandTag x={TV.sx + 120} y={TV.sy - 60} text="a in place of r" at={place + 10} size={30} color={NAVY.ink} />
			<Enter at={measure} style={{position: 'absolute', left: 1000, top: 590, width: 824}}>
				<div style={{...card}}>
					<div style={{...DISPLAY(30, GREY.ink, 800), whiteSpace: 'normal'}}>a in AU (Earth's average distance from the Sun), T in years</div>
					<div style={{...DISPLAY(36, TEAL.ink, 800), opacity: prog(f, earthG, 12)}}>Earth: a = 1 AU, T = 1 yr: a³ = 1, T² = 1</div>
					<div style={{...DISPLAY(36, NAVY.ink, 800), opacity: prog(f, mars, 12)}}>Mars: a = {fx(MARS.a, 3)} AU, T = {fx(MARS.T, 3)} yr</div>
					<div style={{...DISPLAY(44, INK, 800), marginTop: 6, opacity: prog(f, cube - 6, 12)}}><AnswerBox at={cube}><span><MarkSpan kind="circle" at={cube + 20} color={NAVY.stroke}>a³ = {fx(MARS.a3, 2)}</MarkSpan>, <MarkSpan kind="circle" at={cube + 28} color={NAVY.stroke}>T² = {fx(MARS.T2, 2)}</MarkSpan></span></AnswerBox></div>
				</div>
			</Enter>
			<HandTag x={980} y={640} anchor="end" text="AU and years" at={measure + 20} size={30} color={GREY.ink} />
			<Chip x={1560} y={540} at={mars} size={28} border={GREY.stroke} color={GREY.ink}>NASA Mars Fact Sheet</Chip>
			<LawSlot n={3} at={tsq} fillAt={both} text="size: T² ∝ a³, one constant per central body" x={1000} y={850} w={824} size={30} />
		</>
	);
};

// ---------- 8. worked example: Halley's period ----------
export const HW: View = {sx: 300, sy: 330, k: 31};
const HalleyTop: React.FC<{axisAt: number; halfAt: number; pulse?: number}> = ({axisAt, halfAt, pulse}) => {
	const f = useCurrentFrame();
	const per = toV(HW, HALLEY.rp, 0), aph = toV(HW, -HALLEY.ra, 0);
	const cx = (per[0] + aph[0]) / 2;
	const c = cometAt(HW, HALLEY.T * 0.47);
	const ax = prog(f, axisAt, 24), hx = prog(f, halfAt, 20);
	const pz = pulse === undefined ? 0 : Math.sin(Math.PI * Math.max(0, Math.min(1, (f - pulse) / 24)));
	return (
		<FrameSvg>
			<HalleyEllipse v={HW} />
			{ax > 0 ? <line x1={per[0]} y1={per[1]} x2={per[0] + (aph[0] - per[0]) * ax} y2={aph[1]} stroke={INK_SOFT} strokeWidth={4} /> : null}
			{hx > 0 ? <line x1={cx} y1={HW.sy + 3} x2={cx + (aph[0] - cx) * hx} y2={HW.sy + 3} stroke={NAVY.stroke} strokeWidth={9 + 5 * pz} /> : null}
			<Sun cx={HW.sx} cy={HW.sy} d={30} />
			<Focus x={cx * 2 - HW.sx} y={HW.sy} size={10} />
			<Comet x={c.x} y={c.y} w={150} away={c.away} />
			<circle cx={c.x} cy={c.y} r={5} fill={INK} />
		</FrameSvg>
	);
};
export const S08: React.FC = () => {
	const id = 'worked-halley';
	const now = cue(id, 'Now Halley'), closest = cue(id, 'closest distance'), furthest = cue(id, 'furthest is'), axis = cue(id, 'long axis runs'), halfS = cue(id, 'half their sum'), seventeen = cue(id, 'about seventeen'), withT = cue(id, 'With T squared'), seventy = cue(id, 'seventy-six years'), matches = cue(id, 'That matches'), real = cue(id, 'real return'), notice = cue(id, 'Notice we');
	const per = toV(HW, HALLEY.rp, 0), aph = toV(HW, -HALLEY.ra, 0);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<HalleyTop axisAt={axis} halfAt={seventeen} />
			<Lbl x={(per[0] + aph[0]) / 2} y={HW.sy - 20} at={axis + 10} color={INK} anchor="middle" size={30}>2a = 0.587 + 35.25 = {fx(HALLEY.twoA, 2)} AU</Lbl>
			<Lbl x={per[0] - 10} y={HW.sy + 64} at={closest} color={NAVY.ink} size={28}>0.587 AU</Lbl>
			<Lbl x={aph[0] + 10} y={HW.sy + 64} at={furthest} color={NAVY.ink} anchor="end" size={28}>35.25 AU</Lbl>
			<HandTag x={(per[0] + aph[0]) / 2 + 80} y={HW.sy + 70} text="half the long axis" at={seventeen + 10} size={30} color={NAVY.ink} />
			<Chip x={1440} y={200} at={real} size={30} w={384} border={GREY.stroke} color={GREY.ink}>NASA: average about 76 years; next return 2061</Chip>
			<Strip x={96} y={530} at={now} size={34}>Find Halley's period.</Strip>
			<Strip x={540} y={530} at={now} size={34} border={NAVY.stroke} color={NAVY.ink}>T² = a³ (T in years, a in AU, around the Sun)</Strip>
			<Givens x={96} y={610} w={420} at={closest} size={32} lines={['perihelion 0.587 AU', 'aphelion 35.25 AU']} />
			<div style={{position: 'absolute', left: 560, top: 610, display: 'flex', flexDirection: 'column', gap: 8}}>
				<Row at={axis} ageAt={withT} size={44} oldSize={34}>2a = 0.587 + 35.25 = {fx(HALLEY.twoA, 2)} AU</Row>
				<Row at={halfS} ageAt={withT} size={52} oldSize={38}>a = {fx(HALLEY.twoA, 2)} / 2 = <span style={{color: NAVY.ink}}>{fx(HALLEY.a, 2)} AU</span></Row>
				<Row at={withT} size={52}>T = {fx(HALLEY.a, 4)}<sup>1.5</sup> = <AnswerBox at={seventy}><span><MarkSpan kind="circle" at={matches} color={NAVY.stroke}>{fx(HALLEY.T, 1)} years</MarkSpan> ≈ 76 years</span></AnswerBox></Row>
			</div>
			<HandTag x={1300} y={700} text="keep 17.9186 in the calculator" at={seventeen + 20} size={30} color={GREY.ink} />
			<HandTag x={1500} y={790} text="power 1.5" at={withT + 30} size={30} color={GREY.ink} />
			<Row at={notice} size={32} style={{position: 'absolute', left: 560, top: 890}}>no Sun's mass needed: Earth's orbit sets the constant</Row>
		</>
	);
};

// ---------- 9. the extreme-distance mistake ----------
export const S09: React.FC = () => {
	const id = 'extreme-mistake';
	const classic = cue(id, 'classic mistake'), furthest = cue(id, 'furthest distance'), two = cue(id, 'two hundred'), closest = cue(id, 'the closest'), halfY = cue(id, 'half a year'), needs = cue(id, 'third law needs'), avg = cue(id, 'the average'), circle = cue(id, 'A circle is');
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<HalleyTop axisAt={-60} halfAt={-60} pulse={avg} />
			<Row at={-30} size={34} style={{position: 'absolute', left: 96, top: 530}}>Halley: a = {fx(HALLEY.a, 2)} AU, T = {fx(HALLEY.T, 1)} years</Row>
			<Row at={classic} size={44} style={{position: 'absolute', left: 96, top: 600}}>The mistake: using one end distance as a</Row>
			<CrossedChip x={96} y={680} at={furthest} crossAt={two + 10} size={34} caption="not one end">a = 35.25 AU → T = {fx(HALLEY.tFar, 0)} years</CrossedChip>
			<CrossedChip x={760} y={680} at={closest} crossAt={halfY + 10} size={34} caption="not the other end">a = 0.587 AU → T = {fx(HALLEY.tNear, 2)} years</CrossedChip>
			<Row at={needs} size={44} style={{position: 'absolute', left: 96, top: 840}}>a = semi-major axis: <AnswerBox at={avg}><span>a = (r<Sub>min</Sub> + r<Sub>max</Sub>) / 2</span></AnswerBox></Row>
			<HandTag x={1290} y={860} text="the average" at={avg + 10} size={32} color={NAVY.ink} />
			<Lbl x={1440} y={560} at={circle} color={NAVY.ink} size={30}>for a circle, r<Sub>min</Sub> = r<Sub>max</Sub> = r</Lbl>
		</>
	);
};

// ---------- 10. memory aid ----------
export const LawIcons: React.FC<{glow?: number}> = ({glow}) => {
	const f = useCurrentFrame();
	const g = glow === undefined ? 0 : Math.sin(Math.PI * Math.max(0, Math.min(1, (f - glow) / 30)));
	return (
		<>
			<g><ellipse cx={0} cy={0} rx={80} ry={52} fill="none" stroke={NAVY.stroke} strokeWidth={4} /><circle cx={-50} cy={0} r={12} fill="#f0a020" /><Focus x={50} y={0} size={7} /></g>
			<g transform="translate(260,0)"><ellipse cx={0} cy={0} rx={80} ry={52} fill="none" stroke={NAVY.stroke} strokeWidth={3} /><path d="M-50,0 L-80,0 A80,52 0 0 1 -66,-29 Z" fill="#f3c98a" stroke={AMBER.stroke} strokeWidth={2} /><path d="M-50,0 L66,-29 A80,52 0 0 1 80,0 Z" fill="#f3c98a" stroke={AMBER.stroke} strokeWidth={2} /><circle cx={-50} cy={0} r={10} fill="#f0a020" /></g>
			<g transform="translate(520,0)" opacity={1}><ellipse cx={0} cy={0} rx={80} ry={52} fill="none" stroke={NAVY.stroke} strokeWidth={3 + 4 * g} /><line x1={0} y1={0} x2={80} y2={0} stroke={NAVY.stroke} strokeWidth={6} /><T x={40} y={-10} size={28} anchor="middle" color={NAVY.ink}>a</T></g>
		</>
	);
};
export const S10: React.FC = () => {
	const id = 'memory-aid';
	const f = useCurrentFrame();
	const think = cue(id, 'think shape'), first = cue(id, 'first law gives'), second = cue(id, 'second gives'), third = cue(id, 'third links'), cubed = cue(id, 'a cubed');
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<Enter at={think - 20} style={{position: 'absolute', left: 96, top: 176, width: 1728}}>
				<div style={{background: CARD, border: `4px solid ${INK}`, borderRadius: 24, boxShadow: `inset 0 0 0 8px ${CARD}, inset 0 0 0 10.5px ${INK}, 0 10px 26px rgba(60,45,20,0.12)`, padding: '18px 40px 22px'}}>
					<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: TYPE.hand, color: INK_SOFT}}>Memory aid</div>
					<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 60, lineHeight: 1.1, opacity: prog(f, think, 12)}}><span style={{color: NAVY.ink}}>Shape, </span><span style={{color: AMBER.ink}}>speed, </span><span style={{color: TEAL.ink}}>size.</span></div>
				</div>
			</Enter>
			<svg width={1728} height={280} style={{position: 'absolute', left: 96, top: 400, overflow: 'visible'}}>
				<g transform="translate(330,130) scale(1.7)" opacity={prog(f, first, 14)}><LawIcons glow={cubed} /></g>
			</svg>
			<div style={{position: 'absolute', left: 96, top: 690, display: 'flex', flexDirection: 'column', gap: 14, width: 1728}}>
				<LawSlotRow at={first} label="Law 1 (shape)" text="an ellipse, Sun at one focus" color={NAVY.ink} />
				<LawSlotRow at={second} label="Law 2 (speed)" text="equal areas: fast when close, slow when far" color={AMBER.ink} />
				<LawSlotRow at={third} label="Law 3 (size)" text="T² ∝ a³" color={TEAL.ink} glow={cubed} />
			</div>
		</>
	);
};
const LawSlotRow: React.FC<{at: number; label: string; text: string; color: string; glow?: number}> = ({at: a, label, text, color, glow}) => {
	const f = useCurrentFrame();
	const g = glow === undefined ? 0 : prog(f, glow, 12);
	return (
		<Enter at={a}>
			<div style={{...card, padding: '6px 22px 8px', border: `${3 + 2 * g}px solid ${g > 0 ? INK : 'rgba(60,45,20,0.16)'}`, display: 'flex', gap: 18}}>
				<span style={{...DISPLAY(40, color, 800)}}>{label}:</span>
				<span style={{...DISPLAY(40, INK, 800)}}>{text}</span>
			</div>
		</Enter>
	);
};
