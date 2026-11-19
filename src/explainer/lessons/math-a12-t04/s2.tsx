// Scenes 6 to 10: the library and café worked board (g01 layout, the small dB scale with four hops and the live
// ratio), the seismograph (the trace grows × 10, then × 50 off the strip; M = 5 + log₁₀ 50), pH (the meter reads
// 4.00 and 7.00; three hops on the [H⁺] axis), star magnitudes (smaller is brighter) and the framed memory card.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, prog} from '../../kit';
import {FrameSvg, HandTag, LiveReadoutBoard, PlateImg, PlateReadout, SceneHeading, kf} from '../../math/studio';
import {K6, K7, K8, K9, K10} from './cuemap';
import {AnswerBox, BoxCard, DbStage, GREY, INK, Meter, NUM, Nc, PHM, PHM_SCREEN, PhAxes, RATIO, RatioCard, Rc, Row, STAR, STEP, Sb, Sc, Seismo, Slip, T04Card, Task, dbX, p10} from './parts';
import type {DbGeom} from './parts';

const GREEN = '#287347';

// ---------- 6. worked example: library and café ----------
const G6: DbGeom = {x: 360, w: 1460, iy: 0, dy: 250, iAxis: false, labelEvery: 10, noTitle: true};
const ratioTxt = (r: number) => (r >= 1000 ? Math.round(r).toLocaleString('en-AU').replace(/,/g, ' ') : r >= 9.995 ? r.toFixed(0) : r.toFixed(2));
export const S06: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K6;
	const step = kf(fr, [[0, 0], [k.intense - 70, 0], [k.intense - 10, 40]]);
	return (
		<>
			<SceneHeading text="Worked example: library and café" at={4} size={44} />
			<Meter x={80} y={150} w={220} value={String(Math.round(30 + step))} />
			<DbStage g={G6} base={30} step={step} hopsFrom={k.intense - 64}
				marks={[{L: 30, o: prog(fr, k.library, 10), label: 'library'}, {L: 70, o: prog(fr, k.cafe, 10), label: 'café'}]} />
			<Task x={96} y={380} w={1120} at={k.how} size={44}>How many times more intense is the café than the library?</Task>
			<CardEq x={96} y={565} at={k.divide}>L = <Nc>10</Nc> log₁₀(I ÷ I₀)</CardEq>
			<BoxCard x={1260} y={380} w={560} at={k.library} size={40} title="given">library 30 dB<br />café 70 dB<br />I₀ = 10⁻¹² W/m²</BoxCard>
			<Row x={96} y={660} at={k.nought1 - 8} size={48} small={40} dim={prog(fr, k.them, 12)}>I<Sb>library</Sb> = 10³ I₀ = 10⁻⁹ W/m²</Row>
			<Row x={96} y={730} at={k.nought2 - 8} size={48} small={40} dim={prog(fr, k.them, 12)}>I<Sb>café</Sb> = 10⁷ I₀ = 10⁻⁵ W/m²</Row>
			<AnswerBox x={96} y={808} at={k.four1} size={44}>I<Sb>café</Sb> ÷ I<Sb>library</Sb> = 10⁷ ÷ 10³ = 10⁴ = 10 000</AnswerBox>
			<HandTag x={1000} y={700} text="I₀ cancels" at={k.cancels} size={38} color={GREY} />
			<RatioCard x={1260} y={620} at={k.intense - 70} text={`× ${ratioTxt(10 ** (step / 10))}`} sub={`step +${Math.round(step)} dB`} />
			<Slip x={1260} y={760} w={600} at={k.intense + 24} strikeAt={k.intense + 40} size={36} caption="decibels aren't ordinary numbers">70 ÷ 30 ≈ 2.3 times</Slip>
			<Row x={96} y={892} at={k.quick + 10} size={38} small={38} color={INK}>(70 − 30) ÷ <Nc>10</Nc> = <Sc>4</Sc>, so 10⁴</Row>
		</>
	);
};
/** The g01 equation strip (paper card, 48 px). */
const CardEq: React.FC<{x: number; y: number; at: number; children: React.ReactNode}> = ({x, y, at, children}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 12);
	if (o <= 0.001) return null;
	return <div style={{position: 'absolute', left: x, top: y, opacity: o, background: '#fffdf8', borderRadius: 16, boxShadow: '0 14px 32px rgba(60,45,20,0.10), 0 2px 6px rgba(60,45,20,0.06)', padding: '4px 24px 8px', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 48, color: INK, whiteSpace: 'pre'}}>{children}</div>;
};

// ---------- 7. earthquakes ----------
const MAX = {x: 1250, y: 690, w: 580};
const mX = (M: number) => MAX.x + ((M - 4) / 4) * MAX.w;
export const S07: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K7;
	const amp = kf(fr, [[0, 1], [k.amp, 1], [k.amp + 30, 10], [k.ea - 10, 10], [k.ea + 14, 1], [k.tall, 1], [k.tall + 40, 50]]);
	const M = 5 + Math.log10(amp);
	return (
		<>
			<SceneHeading text="Earthquake magnitude: one step is ten times the wiggle" at={4} size={44} />
			<Seismo x={96} y={170} w={1080} h={300} amp={amp} ghost={amp > 1.2 ? 1 : 0} clipLabel={prog(fr, k.tall + 34, 10)} />
			<LiveReadoutBoard x={1250} y={170} width={580} at={k.m} inline rows={[
				{label: 'trace amplitude', value: amp, text: `× ${amp < 9.95 ? amp.toFixed(1) : amp.toFixed(0)}`, role: 'a'},
				{label: 'magnitude M', value: M, digits: 2},
			]} />
			<HandTag x={700} y={500} text="+1 = × 10" at={k.amp + 20} out={k.ea} size={42} color={RATIO.ink} />
			<Row x={96} y={500} at={k.m} size={52} small={44} dim={prog(fr, k.its, 12)}>M = log₁₀(A ÷ A₀)</Row>
			<div style={{position: 'absolute', left: 96, top: 578, width: 1100, opacity: prog(fr, k.where, 12), fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, color: GREY, lineHeight: 1.25}}>A: height of the wiggle on a seismograph. Simplified local magnitude: same distance and instrument (Richter is one such scale).</div>
			<BoxCard x={1250} y={380} w={580} at={k.ea} size={36} title="given">M<Sb>A</Sb> = 5.0<br />{fr >= k.eb ? <>A<Sb>B</Sb> = 50 A<Sb>A</Sb><br /><span style={{fontSize: 30, color: GREY}}>(seismograph trace amplitude)</span></> : null}</BoxCard>
			<Row x={96} y={672} at={k.eb + 20} size={40} small={34} dim={prog(fr, k.seven, 12)}>M<Sb>A</Sb> = 5, so A<Sb>A</Sb> = 10⁵ A₀</Row>
			<Row x={96} y={732} at={k.its} size={48} small={40} dim={prog(fr, k.seven, 12)}>M<Sb>B</Sb> = log₁₀(50 × 10⁵)</Row>
			<AnswerBox x={96} y={812} at={k.seven} size={44}>M<Sb>B</Sb> = 5 + log₁₀ 50 ≈ 5 + 1.699 ≈ 6.70</AnswerBox>
			<Slip x={1250} y={800} w={600} at={k.seven + 26} strikeAt={k.seven + 42} size={36} caption="magnitude is a log: 5 + log₁₀ 50">50 × 5 = 250</Slip>
			<FrameSvg>
				<g opacity={prog(fr, k.ea, 12)}>
					<line x1={MAX.x - 10} x2={MAX.x + MAX.w + 10} y1={MAX.y} y2={MAX.y} stroke={INK} strokeWidth={5} strokeLinecap="round" />
					{[4, 5, 6, 7, 8].map(v => <g key={v}><line x1={mX(v)} x2={mX(v)} y1={MAX.y - 12} y2={MAX.y + 12} stroke={INK} strokeWidth={3} /><text x={mX(v)} y={MAX.y + 46} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, fill: INK}}>{v}</text></g>)}
					<text x={MAX.x + MAX.w + 10} y={MAX.y + 84} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, fill: INK}}>magnitude</text>
					<circle cx={mX(5)} cy={MAX.y} r={13} fill={INK} stroke="#fffdf8" strokeWidth={4} />
					<circle cx={mX(Math.min(M, 6.7))} cy={MAX.y} r={13} fill={RATIO.stroke} stroke="#fffdf8" strokeWidth={4} opacity={prog(fr, k.eb, 10)} />
				</g>
				<g opacity={prog(fr, k.fifty, 12)}>
					<path d={`M${mX(5)},${MAX.y - 34} V${MAX.y - 50} H${mX(6.699)} V${MAX.y - 34}`} fill="none" stroke={STEP.stroke} strokeWidth={5} />
					<text x={(mX(5) + mX(6.7)) / 2} y={MAX.y - 62} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 32, fill: STEP.ink}} stroke="#fffdf8" strokeWidth={7} paintOrder="stroke">× 50 is only + 1.7</text>
				</g>
			</FrameSvg>
		</>
	);
};

// ---------- 8. pH ----------
export const S08: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K8;
	const reading = fr < k.ph4 ? '' : fr < k.ph7 ? '4.00' : fr < k.so ? '7.00' : '4.00';
	return (
		<>
			<SceneHeading text="pH: a minus sign reverses the direction" at={4} size={44} />
			<PlateReadout plate={PHM} x={40} y={200} w={600} region={PHM_SCREEN} value={reading || ' '} regionColor="#1f3a2e" at={-300} />
			<div style={{position: 'absolute', left: 60, top: 770, opacity: prog(fr, k.ph4, 12), fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, color: GREY}}>pH meter, probe in the solution</div>
			<Row x={680} y={176} at={4} size={52} small={52}>pH = <Nc>−</Nc>log₁₀[H⁺]</Row>
			<Row x={680} y={252} at={30} size={28} small={28} color={GREY}>[H⁺]: mol/L of hydrogen ions; dilute-solution model</Row>
			<Row x={680} y={340} at={k.ph4} size={44} small={36} dim={prog(fr, k.so, 12)}>pH 4: [H⁺] = 10⁻⁴ mol/L</Row>
			<Row x={680} y={410} at={k.ph7} size={44} small={36} dim={prog(fr, k.so, 12)}>pH 7: [H⁺] = 10⁻⁷ mol/L</Row>
			<AnswerBox x={680} y={500} at={k.thousand} size={44}>10⁻⁴ ÷ 10⁻⁷ = 10³ = 1000</AnswerBox>
			<Slip x={680} y={620} w={640} at={k.thousand + 40} strikeAt={k.thousand + 56} size={36} caption="3 steps = × 1000">pH 4 is 3 times as acidic</Slip>
			<PhAxes marks={[{pH: 4, o: prog(fr, k.ph4, 10)}, {pH: 7, o: prog(fr, k.ph7, 10)}]} arrows={prog(fr, k.lower - 10, 12) * (1 - prog(fr, k.ph4 - 10, 12))} hopsAt={k.so + 10} />
			<HandTag x={1420} y={340} text="more H⁺" at={k.lower - 4} out={k.ph4 - 10} size={36} color={STEP.ink} anchor="end" />
			<HandTag x={1420} y={400} text="lower pH" at={k.lower + 10} out={k.ph4 - 10} size={36} color={STEP.ink} anchor="end" />
			<HandTag x={1630} y={905} text="more H⁺, lower pH" at={k.each} size={36} color={STEP.ink} anchor="middle" />
		</>
	);
};

// ---------- 9. star magnitudes ----------
const MS = {x: 300, y: 760, w: 600};
const sX = (m: number) => MS.x + ((m + 1) / 8) * MS.w;
export const S09: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K9;
	const pulse = prog(fr, k.mag1, 8) * (1 - prog(fr, k.mag1 + 40, 20));
	return (
		<>
			<SceneHeading text="Star magnitudes: smaller is brighter" at={4} size={44} />
			<div style={{position: 'absolute', left: 96, top: 170, width: 820, height: 470, borderRadius: 22, background: '#1d2433', boxShadow: '0 14px 32px rgba(20,20,40,0.25)'}} />
			<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
				{pulse > 0.01 ? <circle cx={330} cy={380} r={120 + 20 * pulse} fill="none" stroke="#f5d77a" strokeWidth={6} opacity={pulse} /> : null}
			</svg>
			<PlateImg plate={STAR} x={240} y={290} w={180} />
			<PlateImg plate={STAR} x={690} y={360} w={40} />
			<div style={{position: 'absolute', left: 250, top: 520, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, color: '#f6f1e7'}}>m = 1</div>
			<div style={{position: 'absolute', left: 650, top: 520, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, color: '#f6f1e7'}}>m = 6</div>
			<Row x={960} y={176} at={k.diff} size={50} small={50}>m₁ − m₂ = <Nc>−2.5</Nc> log₁₀(F₁ ÷ F₂)</Row>
			<Row x={960} y={252} at={k.diff + 30} size={30} small={30} color={GREY}>F: brightness</Row>
			<Row x={960} y={340} at={k.five} size={44} small={36} dim={prog(fr, k.hundred, 12)}>1 − 6 = <Sc>−5</Sc> = <Nc>−2.5</Nc> log₁₀(F₁ ÷ F₂)</Row>
			<Row x={960} y={410} at={k.five + 40} size={44} small={36} dim={prog(fr, k.hundred, 12)}>log₁₀(F₁ ÷ F₂) = 2</Row>
			<AnswerBox x={960} y={500} at={k.hundred} size={48}>F₁ ÷ F₂ = 10² = 100</AnswerBox>
			<HandTag x={960} y={640} text="the m = 1 star is 100 × as bright" at={k.mag1 + 10} size={40} color={RATIO.ink} />
			<FrameSvg>
				<g opacity={prog(fr, k.so, 12)}>
					<line x1={MS.x - 10} x2={MS.x + MS.w + 10} y1={MS.y} y2={MS.y} stroke={INK} strokeWidth={5} strokeLinecap="round" />
					{[-1, 0, 1, 2, 3, 4, 5, 6, 7].map(v => <g key={v}><line x1={sX(v)} x2={sX(v)} y1={MS.y - 12} y2={MS.y + 12} stroke={INK} strokeWidth={3} /><text x={sX(v)} y={MS.y + 46} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, fill: INK}}>{v < 0 ? `−${-v}` : v}</text></g>)}
					<text x={96} y={MS.y + 10} style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, fill: INK}}>magnitude m</text>
					<circle cx={sX(1)} cy={MS.y} r={16} fill={INK} stroke="#fffdf8" strokeWidth={4} /><circle cx={sX(6)} cy={MS.y} r={9} fill={INK} stroke="#fffdf8" strokeWidth={3} />
					<line x1={sX(5.5)} x2={sX(-0.5)} y1={MS.y - 50} y2={MS.y - 50} stroke={STEP.stroke} strokeWidth={6} strokeLinecap="round" />
					<path d={`M${sX(-0.5) + 18},${MS.y - 64} L${sX(-0.5)},${MS.y - 50} L${sX(-0.5) + 18},${MS.y - 36}`} fill="none" stroke={STEP.stroke} strokeWidth={6} strokeLinecap="round" />
					<text x={sX(2.5)} y={MS.y - 66} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 32, fill: STEP.ink}}>brighter</text>
				</g>
				<g opacity={prog(fr, k.five, 12)}>
					<path d={`M${sX(1)},${MS.y + 64} V${MS.y + 78} H${sX(6)} V${MS.y + 64}`} fill="none" stroke={STEP.stroke} strokeWidth={5} />
				</g>
			</FrameSvg>
			<HandTag x={140} y={905} text="smaller is brighter" at={k.smaller} size={42} color={STEP.ink} />
			<HandTag x={560} y={905} text="5 magnitudes = × 100" at={k.hundred} size={38} color={RATIO.ink} />
		</>
	);
};

// ---------- 10. memory aid ----------
export const S10: React.FC = () => {
	const k = K10;
	return (
		<>
			<SceneHeading text="One rule for all four scales" at={4} size={44} />
			<T04Card x={310} y={190} c={{main: k.ratio, glow: k.power, keys: [k.db, k.eq, k.ph, k.stars], cond: k.flips}} />
			<div style={{position: 'absolute', left: 340, top: 860, fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, color: GREY}}><Sc>step</Sc> = later reading − earlier reading; <Nc>number in front</Nc>: 10, 1, −1, −2.5; <Rc>ratio</Rc> of the quantity inside the log</div>
		</>
	);
};
export {dbX, p10, NUM};
