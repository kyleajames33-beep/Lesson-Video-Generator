// Scenes 6 to 10: the twist (a pulse crossing one metre in 1/299 792 458 s, the two navy definition boxes, the measured
// estimates with "±" beside the exact value on a number line), now time tells you distance (the painted Earth and Moon,
// a pulse timed out and back, the working, the painted satellite and the GPS error), the memory card with its two
// painted rows, attempt 1 (the painted wheel and a distant mirror) and its brief feedback.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading} from '../../math/studio';
import {Accent, MemoryCard, QuestionScene} from '../../shared/scenes';
import {INK} from '../../shared/tokens';
import {AnswerBox, Chip, CrossedChip, Row} from '../../physics/projectile/board';
import {Arrow} from '../../physics/light/em';
import {LightPath} from '../../physics/light/spectrum';
import {Disc, EARTH, LPlate, MOON, SATELLITE} from '../../physics/light/plates';
import {A1_C, A1_D, A1_F, A1_N, A1_T, A1_WRONG, ACCENT, C_EXACT, C_TEXT, FC_V, FZ_C, GPS_ERR, HEAD, HEAD_SIZE, LR_D, LR_T, LR_WRONG, R_V22, cap, cue, hold} from './common';
import {CardRect, GREY, LIGHT, Lbl, MirrorAt, NAVY, ORANGE, ROSE, Shrunk, TimerBox, WheelAt, fx, rimR, sci} from './parts';

type Pt = [number, number];

// ---------- 6. the twist: c is now exact ----------
const NL = {x0: 260, x1: 1700, y: 800, v0: 2.0e8, v1: 3.4e8};
const nlx = (v: number) => NL.x0 + ((v - NL.v0) / (NL.v1 - NL.v0)) * (NL.x1 - NL.x0);
export const S06: React.FC = () => {
	const id = 'defined-c';
	const f = useCurrentFrame();
	const sec = cue(id, 'fifty-eighth of a second'), def = cue(id, 'by definition'), est = cue(id, 'measured estimates'), all = cap(id, cue(id, 'no uncertainty at all'));
	const P = 70;
	const u = ((f % P) / P);
	const ests: [string, number, number][] = [['Rømer data', R_V22, 0.45e8], ['Fizeau', FZ_C, 0.12e8], ['Foucault', FC_V, 0.03e8]];
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<div style={{position: 'absolute', left: 96, top: 180, width: 1150, background: NAVY.soft, border: `4px solid ${NAVY.stroke}`, borderRadius: 14, padding: '10px 24px', fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 36, color: NAVY.ink, opacity: prog(f, 4, 12)}}>
				{`1983: the metre = the distance light travels in a vacuum in 1 / ${C_TEXT} s`}
			</div>
			<FrameSvg>
				<line x1={200} y1={400} x2={1100} y2={400} stroke={INK} strokeWidth={4} />
				<line x1={200} y1={385} x2={200} y2={415} stroke={INK} strokeWidth={4} /><line x1={1100} y1={385} x2={1100} y2={415} stroke={INK} strokeWidth={4} />
				<LightPath pts={[[200, 400], [1100, 400]]} color={LIGHT} draw={0} pulses={[u]} pulseLen={0.05} width={7} />
				{f >= def ? <g opacity={prog(f, def + 20, 12)}>
					<Arrow from={[1300, 280]} to={[1300, 470]} color={NAVY.stroke} width={4} head={18} />
					<Arrow from={[1300, 470]} to={[1300, 280]} color={NAVY.stroke} width={4} head={18} />
				</g> : null}
				<line x1={NL.x0} y1={NL.y} x2={NL.x1} y2={NL.y} stroke={INK} strokeWidth={4} />
				{[2.0e8, 2.5e8, 3.0e8].map(v => <g key={v}><line x1={nlx(v)} y1={NL.y - 10} x2={nlx(v)} y2={NL.y + 10} stroke={INK} strokeWidth={3} /></g>)}
				{ests.map(([, v, e], i) => <g key={i} opacity={prog(f, 10 + 8 * i, 12)}>
					<line x1={nlx(v - e)} y1={NL.y - 40 - 30 * i} x2={nlx(v + e)} y2={NL.y - 40 - 30 * i} stroke={GREY.stroke} strokeWidth={4} />
					<line x1={nlx(v - e)} y1={NL.y - 50 - 30 * i} x2={nlx(v - e)} y2={NL.y - 30 - 30 * i} stroke={GREY.stroke} strokeWidth={4} />
					<line x1={nlx(v + e)} y1={NL.y - 50 - 30 * i} x2={nlx(v + e)} y2={NL.y - 30 - 30 * i} stroke={GREY.stroke} strokeWidth={4} />
					<circle cx={nlx(v)} cy={NL.y - 40 - 30 * i} r={8} fill={GREY.stroke} />
				</g>)}
				{f >= def ? <line x1={nlx(C_EXACT)} y1={NL.y - 150} x2={nlx(C_EXACT)} y2={NL.y + 14} stroke={NAVY.stroke} strokeWidth={5} opacity={prog(f, def, 12)} /> : null}
			</FrameSvg>
			<Lbl x={650} y={360} at={0} color={INK} size={30} anchor="middle">1 m</Lbl>
			<Lbl x={650} y={470} at={sec} color={NAVY.ink} size={30} anchor="middle">{`time: 1 / ${C_TEXT} s`}</Lbl>
			<div style={{position: 'absolute', left: 96, top: 500, background: NAVY.soft, border: `4px solid ${NAVY.stroke}`, borderRadius: 14, padding: '8px 24px', fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 44, color: NAVY.ink, opacity: prog(f, def, 12)}}>{`c = ${C_TEXT} m s⁻¹ (exact, defined)`}</div>
			<HandTag x={1330} y={380} text="c and the metre: each fixes the other" at={def + 26} size={30} color={NAVY.ink} />
			<HandTag x={980} y={540} text="fixed by agreement" at={def + 20} size={34} color={NAVY.ink} />
			{ests.map(([name, v], i) => <Lbl key={i} x={NL.x1 - 1440} y={NL.y - 132 - 44 * i} at={10 + 8 * i} color={GREY.ink} size={26}>{`${name}: ${sci(v, 2)}`}</Lbl>)}
			{ests.map((_, i) => <Lbl key={i} x={NL.x1 - 1110} y={NL.y - 132 - 44 * i} at={est + 10 * i} color={GREY.ink} size={30}>±</Lbl>)}
			<HandTag x={560} y={560} text="measured: ±" at={est + 30} size={34} color={GREY.ink} />
			{[2.0, 2.5, 3.0].map(v => <Lbl key={v} x={nlx(v * 1e8)} y={NL.y + 48} at={0} color={INK} size={26} anchor="middle">{`${v.toFixed(1)} × 10⁸`}</Lbl>)}
			<Lbl x={NL.x1} y={NL.y + 48} at={0} color={INK} size={26} anchor="end">speed (m s⁻¹)</Lbl>
			<Lbl x={nlx(C_EXACT) + 14} y={NL.y - 160} at={def} color={NAVY.ink} size={28}>defined c</Lbl>
			<Chip x={1100} y={600} at={all} size={30} w={560} color={NAVY.ink} border={NAVY.stroke}>defined c: no uncertainty</Chip>
			<Lbl x={96} y={920} at={est} color={GREY.ink} size={26}>± ranges drawn schematically</Lbl>
		</>
	);
};

// ---------- 7. now time tells you distance ----------
const EA: Pt = [330, 520], MO: Pt = [1460, 520];
export const S07: React.FC = () => {
	const id = 'ranging';
	const f = useCurrentFrame();
	const refl = cue(id, 'Reflectors placed on the Moon'), leaves = cue(id, 'after it leaves'), res = cue(id, 'three point eight four times ten to the eight metres'), gps = cue(id, 'GPS'), err = cap(id, cue(id, 'three hundred metres'));
	const trip = Math.round(LR_T * 30);
	const P = trip + 40;
	const k = f >= leaves ? (f - leaves) % P : -1;
	const u = k >= 0 && k <= trip ? k / trip : -1;
	const tShow = k < 0 ? 0 : Math.min(LR_T, k / 30);
	const A: Pt = [EA[0] + 190, EA[1]], Bp: Pt = [MO[0] - 86, MO[1]];
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<Disc spec={EARTH} cx={EA[0]} cy={EA[1]} d={380} />
				<Disc spec={MOON} cx={MO[0]} cy={MO[1]} d={180} />
				<rect x={Bp[0] - 8} y={Bp[1] - 8} width={16} height={16} fill="#d9d4ca" stroke={INK} strokeWidth={3} />
				{f >= refl ? <circle cx={Bp[0]} cy={Bp[1]} r={26} fill="none" stroke={NAVY.stroke} strokeWidth={4} opacity={prog(f, refl, 12)} /> : null}
				<LightPath pts={[A, Bp]} color={LIGHT} width={3} opacity={0.35} />
				{u >= 0 ? <LightPath pts={[A, Bp, [A[0], A[1] + 0.001]]} color={LIGHT} draw={0} pulses={[u]} pulseLen={0.04} width={6} /> : null}
				<TimerBox x={780} y={600} w={340} h={80} text={`t = ${fx(tShow, 2)} s`} opacity={prog(f, 4, 12)} />
				{f >= gps ? <g opacity={prog(f, gps, 14)}>
					<LPlate spec={SATELLITE} p={{x: 520, y: 200, w: 150}} />
					<path d={`M590,250 Q520,320 ${EA[0] + 80},${EA[1] - 170}`} fill="none" stroke={LIGHT} strokeWidth={4} strokeDasharray="10 8" />
					<circle cx={EA[0] + 80} cy={EA[1] - 170} r={8} fill={INK} />
				</g> : null}
				{f >= err ? <ellipse cx={1040} cy={258} rx={70} ry={34} fill="none" stroke={NAVY.stroke} strokeWidth={4} opacity={prog(f, err + 10, 12)} /> : null}
			</FrameSvg>
			<Lbl x={MO[0]} y={MO[1] + 130} at={0} color={INK} size={26} anchor="middle">Moon (reflector)</Lbl>
			<Lbl x={96} y={930} at={0} color={GREY.ink} size={26}>not to scale</Lbl>
			<Lbl x={950} y={720} at={leaves} color={NAVY.ink} size={28} anchor="middle">round trip</Lbl>
			<div style={{position: 'absolute', left: 96, top: 780}}><Row at={res - 6} size={44}><AnswerBox at={res}><span style={{whiteSpace: 'nowrap', color: ORANGE.ink}}>{`d = ct / 2 = (${sci(C_EXACT, 3)} × ${LR_T}) / 2 = ${sci(LR_D, 2)} m`}</span></AnswerBox></Row></div>
			<CrossedChip x={1300} y={640} at={res + 30} crossAt={res + 46} size={26} caption="there and back: halve it">{`d = ct = ${sci(LR_WRONG, 2)} m`}</CrossedChip>
			<Chip x={760} y={180} at={gps + 10} size={28} w={520} color={INK}>GPS: distance = c × travel time</Chip>
			<Chip x={760} y={240} at={err} size={28} w={620} color={NAVY.ink} border={NAVY.stroke}>{`1 μs × c ≈ ${fx(GPS_ERR, 0)} m of distance (range) error`}</Chip>
			<HandTag x={1420} y={330} text="timing is everything" at={err + 16} size={34} color={NAVY.ink} />
		</>
	);
};

// ---------- 8. a way to remember ----------
export const S08: React.FC = () => {
	const id = 'memory-aid';
	const f = useCurrentFrame();
	const then = cue(id, 'Then, measure distance and time'), now = cap(id, cue(id, 'and find the distance'));
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<g opacity={prog(f, then, 12)}><CardRect x={300} y={560} w={1320} h={150} /><WheelAt cx={400} cy={635} d={120} deg={f * 2} /></g>
				<g opacity={prog(f, now - 30, 12)}><CardRect x={300} y={730} w={1320} h={150} /><Disc spec={MOON} cx={400} cy={805} d={110} /></g>
			</FrameSvg>
			<Lbl x={500} y={650} at={then} color={INK} size={44}>then: d, t → c</Lbl>
			<Lbl x={500} y={820} at={now - 30} color={NAVY.ink} size={44}>now: c (fixed), t → d</Lbl>
			<div style={{position: 'absolute', left: 300, top: 190, width: 1320}}>
				<MemoryCard at={then} main={<>Then: measure d and t, find c. <span style={{color: NAVY.ink}}>Now: fix c, time it, find d.</span></>} />
			</div>
		</>
	);
};

// ---------- 9. attempt 1 ----------
const Q1: React.FC<{u?: boolean}> = ({u = false}) => <>In a toothed-wheel experiment, light passes through a gap in a wheel with {u ? <u>500 teeth</u> : '500 teeth'}, travels to a mirror {u ? <u>7.50 km</u> : '7.50 km'} away and returns. The returning light is {u ? <u>first blocked</u> : 'first blocked'} when the wheel rotates at 20.0 revolutions per second. Calculate the speed of light from these data.</>;
const WheelPic: React.FC<{f?: number; blocked?: boolean; w?: number; h?: number}> = ({f = 0, blocked = false, w = 678, h = 560}) => {
	const cx = 150, cy = h / 2 + 30, d = 200, by = cy - rimR(d) + 8;
	const u = blocked ? ((f % 90) / 90) : -1;
	return (
		<svg width={w} height={h} style={{overflow: 'visible'}}>
			<rect x={10} y={20} width={w - 28} height={h - 40} rx={16} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} />
			<WheelAt cx={cx} cy={cy} d={d} deg={f * 1.2} />
			<LightPath pts={[[30, by], [w - 110, by]]} color={LIGHT} width={4} opacity={0.7} />
			{u >= 0 ? <LightPath pts={[[30, by], [w - 110, by], [cx + 10, by + 0.001]]} color={LIGHT} draw={0} pulses={[Math.min(u, 0.97)]} pulseLen={0.04} width={6} /> : null}
			<MirrorAt x={w - 90} y={by} w={110} n={[-1, 0]} />
			<path d={`M${cx},${by - 50} v-12 h${w - 90 - cx} v12`} fill="none" stroke={ORANGE.stroke} strokeWidth={4} />
			<text x={(cx + w - 90) / 2} y={by - 76} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 30, fill: ORANGE.ink}}>7.50 km</text>
			<text x={w / 2 + 40} y={h - 44} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 700, fontSize: 26, fill: GREY.ink}}>not to scale</text>
		</svg>
	);
};
export const S09: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Your turn" pauseAt={cue('attempt-1', 'Pause here')} hold={hold('attempt-1')} size={38} marks={3} picture={<WheelPic />}><Q1 /></QuestionScene></Accent>;

// ---------- 10. feedback 1 ----------
export const S10: React.FC = () => {
	const id = 'feedback-1';
	const f = useCurrentFrame();
	const secs = cue(id, 'minus five seconds'), three = cue(id, 'three times ten to the eight'), ans = cap(id, cue(id, 'half the right answer'));
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk accent={ACCENT} gy={310} givens={<>{`N = ${A1_N} teeth   `}<span style={{color: ROSE.ink}}>{`f = ${fx(A1_F, 1)} turns per second`}</span>{'   '}<span style={{color: ORANGE.ink}}>{`d = 7.50 km = ${A1_D} m (one way)`}</span></>}><Q1 u /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 420, display: 'flex', flexDirection: 'column', gap: 18, width: 1150}}>
				<Row at={10} size={34} style={{whiteSpace: 'normal'}}><span>gap → tooth is half a tooth spacing: t = 1 / (2Nf)</span></Row>
				<Row at={secs - 10} size={44}>{`t = 1 / (2 × ${A1_N} × ${fx(A1_F, 1)}) = ${sci(A1_T, 2)} s`}</Row>
				<Row at={three - 6} size={44}><AnswerBox at={three}><span style={{whiteSpace: 'nowrap', color: ORANGE.ink}}>{`c = 2d / t = 15 000 / (${sci(A1_T, 2)}) = ${sci(A1_C, 2)} m s⁻¹`}</span></AnswerBox></Row>
			</div>
			<div style={{position: 'absolute', left: 1290, top: 410}}><WheelPic f={f} blocked w={560} h={440} /></div>
			<CrossedChip x={96} y={790} at={ans - 40} crossAt={ans} size={28} caption="the light goes there and back: 2d">{`c = ${A1_D} / (${sci(A1_T, 2)}) = ${sci(A1_WRONG, 2)} m s⁻¹`}</CrossedChip>
		</>
	);
};
export type {Pt};
