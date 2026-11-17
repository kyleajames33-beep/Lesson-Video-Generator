// Scenes 10 to 15: attempt 1 (daylight in a coastal town: k, a, c and D(2)) and its feedback (crossed k = 5), attempt
// 2 (the buoy, 1.5 sin(πt/8) + 3 = 3.75) and its feedback (crossed t = π/6), the phone-storage handoff (exported as
// T03FinalFrame, t04's opening frame) and the key notes, which return silently to that frame.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {FrameSvg, GivensStrip, HandTag, KeyNotesBullets, PlateImg, QuestionCard, SceneHeading, StudioPlot, fnPath, smooth} from '../../math/studio';
import type {PlateSpec} from '../../math/studio';
import {K10, K11, K12, K13, K14, K15} from './cuemap';
import {dur, hold} from './common';
import {AR, Ac, AnswerBox, BROWN, BUOY, CARD, CR, Cc, Chip, FONT_DISPLAY, FONT_HAND, FramedCard, GOOD, GREY, Hand, INK, KR, Kc, Lb, PI, QStrip, Ring, Row, SKYLINE, SUN, Slip, TIDE, TIDE_WIN, hM} from './parts';
import {T03Card} from './s2';

const GREEN = '#2e7d4f';

// ---------- 10. attempt 1 ----------
const Q1 = 'In a coastal town, the longest day has 14.5 hours of daylight. The shortest day, 6 months later, has 9.5 hours. Let t be the number of months after the longest day, and model the daylight hours as D = k cos(at) + c. Assume a sinusoidal pattern whose longest and shortest days are consecutive extremes. (i) Find k, a and c. (ii) Find D when t = 2.';
const TownPic: React.FC = () => (
	<div style={{position: 'relative', width: 380, height: 220}}>
		<svg width={380} height={220} style={{position: 'absolute', left: 0, top: 0, overflow: 'visible'}}><path d="M30,150 Q190,-10 350,150" fill="none" stroke="#c98a1b" strokeWidth={4} strokeDasharray="12 9" /></svg>
		<PlateImg plate={SUN} x={160} y={40} w={64} />
		<PlateImg plate={SKYLINE} x={0} y={150} w={380} />
	</div>
);
export const S10: React.FC = () => (
	<QuestionCard at={0} size={38} w={1480} y={180} hold={{...hold('scene-10'), ringFrom: K10.pause}} pauseAt={K10.pause} picture={{node: <TownPic />, w: 380}}><div>{Q1}</div></QuestionCard>
);

// ---------- 11. feedback 1 ----------
const D11 = (t: number) => 2.5 * Math.cos((PI * t) / 6) + 12;
export const S11: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K11;
	return (
		<>
			<SceneHeading text="Check your working" at={2} size={44} />
			<QStrip y={150} size={28} parts={['In a coastal town, the longest day has ', {u: '14.5', at: k.twelve}, ' hours of daylight. The shortest day, ', {u: '6 months later', at: k.six1}, ', has ', {u: '9.5', at: k.twelve}, ' hours. Let t be the number of months after the longest day, and model the daylight hours as D = k cos(at) + c. Assume a sinusoidal pattern whose longest and shortest days are consecutive extremes. (i) Find k, a and c. (ii) Find D when ', {u: 't = 2', at: k.hours}, '.']} />
			<GivensStrip x={96} y={340} size={36} items={[{content: 'max 14.5 h', at: k.mid}, {content: 'min 9.5 h', at: k.mid + 8}, {content: '6 months apart', at: k.mid + 16}]} />
			<Row x={96} y={430} at={k.twelve} size={42} small={30} dim={prog(fr, k.amp, 12)}><Cc>c = (14.5 + 9.5) ÷ 2 = 12</Cc></Row>
			<Row x={96} y={492} at={k.five} size={42} small={30} dim={prog(fr, k.six1, 12)}><Kc>k = (14.5 − 9.5) ÷ 2 = 2.5</Kc></Row>
			<Row x={96} y={554} at={k.six2} size={42} small={30} dim={prog(fr, k.at, 12)}><Ac>period 12 months: a = 2π ÷ 12 = π/6</Ac></Row>
			<AnswerBox x={96} y={630} at={k.hours} size={34}>{'k = 2.5, a = π/6, c = 12\nD(2) = 2.5cos(π/3) + 12 = 13.25 hours'}</AnswerBox>
			<div style={{position: 'absolute', left: 96, top: 790}}><Slip x={0} y={0} w={420} at={k.an} strikeAt={k.half} size={36} caption="half the gap">k = 5</Slip></div>
			<StudioPlot x={1180} y={420} width={700} height={420} window={{x: [-0.5, 12.5], y: [8, 16]}} xTicks={[2, 6, 12]} yTicks={[10, 12, 14]} xLabel="t (months)" yLabel="D (h)" at={k.six2}>
				{m => <>
					<g clipPath={m.clip}><path d={fnPath(m, D11, 0, 12, 200)} stroke={INK} strokeWidth={6} fill="none" /></g>
					<Ring at={m.p(2, 13.25)} o={prog(fr, k.hours, 10)} r={18} color={GREEN} />
					<Lb at={[m.p(2, 13.25)[0] + 26, m.p(0, 13.25)[1] + 10]} o={prog(fr, k.hours + 6, 10)} anchor="start" size={30} color={GREEN}>(2, 13.25)</Lb>
				</>}
			</StudioPlot>
		</>
	);
};

// ---------- 12. attempt 2 ----------
const Q2 = 'The height of a buoy is h(t) = 1.5 sin(πt/8) + 3 metres, where t is the time in seconds. Find the first two times t > 0 at which h = 3.75 m.';
export const BuoyPic: React.FC<{bob?: number}> = ({bob = 0}) => (
	<div style={{position: 'relative', width: 260, height: 360}}>
		<PlateImg plate={BUOY} x={60} y={-bob} w={140} />
		<svg width={260} height={360} style={{position: 'absolute', left: 0, top: 0, overflow: 'visible'}}>
			<path d="M0,180 Q32,168 65,180 T130,180 T195,180 T260,180 V320 H0 Z" fill="#5f9fb8" opacity={0.5} />
			<path d="M0,180 Q32,168 65,180 T130,180 T195,180 T260,180" fill="none" stroke="#2f6f88" strokeWidth={4} />
		</svg>
	</div>
);
export const S12: React.FC = () => (
	<QuestionCard at={0} size={40} w={1480} y={190} heading="Last one" hold={{...hold('scene-12'), ringFrom: K12.pause}} pauseAt={K12.pause} picture={{node: <BuoyPic />, w: 260}}><div>{Q2}</div></QuestionCard>
);

// ---------- 13. feedback 2 ----------
export const S13: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K13;
	return (
		<>
			<SceneHeading text="Check your working" at={2} size={44} />
			<QStrip y={150} size={32} parts={['The height of a buoy is h(t) = 1.5 sin(πt/8) ', {u: '+ 3', at: k.five}, ' metres, where t is the time in seconds. Find the first two times t > 0 at which h = ', {u: '3.75', at: k.five}, ' m.']} />
			<GivensStrip x={96} y={300} size={36} items={[{content: 'h = 1.5 sin(πt/8) + 3', at: k.one}, {content: 'h = 3.75 m', at: k.one + 8}, {content: 't > 0', at: k.one + 16}]} />
			<Row x={96} y={400} at={k.five} size={44} small={30} dim={prog(fr, k.half, 12)}>1.5 sin(πt/8) = 0.75</Row>
			<Row x={96} y={466} at={k.half} size={44} small={30} dim={prog(fr, k.sine, 12)}>sin(πt/8) = ½</Row>
			<Row x={96} y={532} at={k.sine} size={44} small={30} dim={prog(fr, k.second, 12)}>πt/8 = π/6 or 5π/6</Row>
			<AnswerBox x={96} y={610} at={k.second} size={36}>t = 8/6 = 4/3 s or t = 40/6 = 20/3 s</AnswerBox>
			<Hand x={100} y={700} at={k.second + 20} size={32} color={GREY}>≈ 1.33 s, ≈ 6.67 s</Hand>
			<div style={{position: 'absolute', left: 96, top: 770}}><Slip x={0} y={0} w={480} at={k.pi} strikeAt={k.time} size={36} caption="that's πt/8, not t">t = π/6</Slip></div>
			<StudioPlot x={1180} y={360} width={700} height={400} window={{x: [-0.3, 2 * PI + 0.3], y: [-1.3, 1.3]}} xTicks={[{value: PI / 6, label: 'π/6'}, {value: 5 * PI / 6, label: '5π/6'}, {value: 2 * PI, label: '2π'}]} yTicks={[-1, 1]} xLabel="πt/8" yLabel="sin" at={k.sine - 10}>
				{m => <>
					<g clipPath={m.clip}><path d={fnPath(m, Math.sin, 0, 2 * PI, 200)} stroke={INK} strokeWidth={5} fill="none" /></g>
					<line x1={m.p(-0.3, 0.5)[0]} x2={m.p(2 * PI + 0.3, 0.5)[0]} y1={m.p(0, 0.5)[1]} y2={m.p(0, 0.5)[1]} stroke={KR.stroke} strokeWidth={4} />
					{[PI / 6, 5 * PI / 6].map(v => <circle key={v} cx={m.p(v, 0.5)[0]} cy={m.p(v, 0.5)[1]} r={11} fill={INK} stroke={CARD} strokeWidth={4} />)}
				</>}
			</StudioPlot>
		</>
	);
};

// ---------- 14. handoff (the phone-storage stage; t04 opens on it) ----------
const PHONE: PlateSpec = {src: 'assets/maths/ma12-phone-v1.png', nat: [971, 1657], box: [138, 148, 830, 1524]};
const SCREEN = [175, 239, 795, 1429] as const;
const RUL = {x: 520, y: 640, w: 1300};
const rx = (gb: number) => RUL.x + (gb / 256) * RUL.w;
const Storage: React.FC<{text: number; photo: number; film: number; whole: number; zoom: number; chip: number; next: number}> = ({text, photo, film, whole, zoom, chip, next}) => {
	const f = useCurrentFrame();
	const o = (a: number) => prog(f, a, 12);
	const pw = 260, s = pw / (PHONE.box[2] - PHONE.box[0]), px = 120, py = 220;
	const scr = {x: px + (SCREEN[0] - PHONE.box[0]) * s, y: py + (SCREEN[1] - PHONE.box[1]) * s, w: (SCREEN[2] - SCREEN[0]) * s, h: (SCREEN[3] - SCREEN[1]) * s};
	const pin = (gb: number, lab: string, oo: number, lift: number, col = INK) => oo > 0.01 ? <g opacity={oo}><line x1={rx(gb)} x2={rx(gb)} y1={RUL.y} y2={RUL.y - lift + 12} stroke={col} strokeWidth={3} /><circle cx={rx(gb)} cy={RUL.y} r={12} fill={col} stroke={CARD} strokeWidth={4} />
		<text x={rx(gb) + (gb > 200 ? -10 : 10)} y={RUL.y - lift} textAnchor={gb > 200 ? 'end' : 'start'} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 32, fill: col}} stroke={CARD} strokeWidth={7} paintOrder="stroke">{lab}</text></g> : null;
	return <>
		<PlateImg plate={PHONE} x={px} y={py} w={pw} />
		<div style={{position: 'absolute', left: scr.x + 14, top: scr.y + 30, width: scr.w - 28, fontFamily: FONT_DISPLAY, color: '#f5f1e8'}}>
			<div style={{fontWeight: 800, fontSize: 30}}>Storage</div>
			<div style={{fontWeight: 800, fontSize: 40}}>256 GB</div>
			<div style={{height: 18, borderRadius: 9, background: '#5b5650', margin: '8px 0 14px', overflow: 'hidden'}}><div style={{width: '22%', height: '100%', background: '#f5f1e8'}} /></div>
			{['messages', 'photos', 'films'].map(r => <div key={r} style={{fontWeight: 700, fontSize: 26, color: '#d9d2c4', borderTop: '2px solid #5b5650', padding: '6px 0'}}>{r}</div>)}
		</div>
		<FrameSvg>
			<line x1={RUL.x} x2={RUL.x + RUL.w} y1={RUL.y} y2={RUL.y} stroke={INK} strokeWidth={5} strokeLinecap="round" />
			{[0, 50, 100, 150, 200, 250].map(v => <g key={v}><line x1={rx(v)} x2={rx(v)} y1={RUL.y - 12} y2={RUL.y + 12} stroke={INK} strokeWidth={3} /><text x={rx(v)} y={RUL.y + 50} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, fill: INK}}>{v ? `${v} GB` : '0'}</text></g>)}
			<text x={RUL.x + RUL.w} y={RUL.y + 100} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, fill: INK}}>file size (bytes)</text>
			{pin(0, 'text message ≈ 1 kB', o(text), 90)}
			{pin(0, 'photo ≈ 3 MB', o(photo), 150)}
			{pin(4, 'film ≈ 4 GB', o(film), 210)}
			{pin(256, 'whole phone 256 GB', o(whole), 90)}
			{o(zoom) > 0.01 ? <g opacity={o(zoom)}><circle cx={rx(0)} cy={RUL.y} r={46} fill="none" stroke={KR.stroke} strokeWidth={5} /></g> : null}
		</FrameSvg>
		<HandTag x={RUL.x - 30} y={RUL.y + 80} text="can't tell them apart" at={zoom} size={38} color={KR.ink} />
		<Chip x={1100} y={290} at={chip} size={48} color={KR.ink}>one ruler for all of them?</Chip>
		<Chip x={96} y={96} at={next} size={34} color={BROWN}>Next: logarithmic scales</Chip>
	</>;
};
/** t03's final frame, and t04's opening frame. */
export const T03FinalFrame: React.FC = () => <Storage text={-300} photo={-300} film={-300} whole={-300} zoom={-300} chip={-300} next={-300} />;
export const S14: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K14;
	const sw = prog(fr, k.next - 6, 18);
	return (
		<>
			{sw < 1 ? <div style={{position: 'absolute', inset: 0, opacity: 1 - sw}}>
				<SceneHeading text="Middle, half, period, start" at={4} size={44} />
				<div style={{position: 'absolute', inset: 0, opacity: 1 - prog(fr, k.water - 10, 14)}}><T03Card x={360} y={190} scale={0.82} c0={-300} c1={-300} c2={-300} c3={-300} c4={-300} /></div>
				{fr > k.water - 20 ? <div style={{position: 'absolute', inset: 0, opacity: prog(fr, k.water - 10, 14)}}>
					<StudioPlot x={300} y={200} width={1000} height={600} window={TIDE_WIN} xTicks={[2, 4, 6, 8, 10, 12]} yTicks={[2, 4, 6, 8]} xLabel="t (hours)" yLabel="h (m)" at={-300}>
						{m => <>
							<g clipPath={m.clip}><path d={fnPath(m, hM, 0, 12, 300)} stroke={INK} strokeWidth={7} fill="none" /></g>
							{(() => {const o = prog(fr, k.ordinary, 12), x0 = m.box.left - 70; return o > 0.01 ? <g opacity={o}><path d={`M${x0 + 16},${m.p(0, 0)[1]} H${x0} V${m.p(0, 8)[1]} H${x0 + 16}`} fill="none" stroke={KR.stroke} strokeWidth={5} /><text x={x0 - 12} y={m.p(0, 4)[1]} textAnchor="end" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 38, fill: KR.ink}}>fits easily</text></g> : null;})()}
						</>}
					</StudioPlot>
					<PlateImg plate={TIDE} x={1420} y={220} w={180} />
				</div> : null}
			</div> : null}
			{sw > 0 ? <div style={{position: 'absolute', inset: 0, opacity: sw}}><Storage text={k.text} photo={k.photo} film={k.film} whole={k.whole} zoom={k.see} chip={k.see + 10} next={k.next} /></div> : null}
		</>
	);
};

// ---------- 15. key notes ----------
export const S15: React.FC = () => {
	const fr = useCurrentFrame();
	const items = [
		{content: <><Cc>Midline c = (max + min) ÷ 2.</Cc></>, at: 2},
		{content: <><Kc>Amplitude |k| = (max − min) ÷ 2.</Kc></>, at: 6},
		{content: <><Ac>a = 2π ÷ period.</Ac></>, at: 10},
		{content: <>Start: max → cos, min → −cos, middle rising → sin.</>, at: 14},
		{content: <>Solve: count first; inverse trig in radians; t = angle ÷ a.</>, at: 18},
	];
	const end = Math.max(1350, dur('scene-15'));
	const back = prog(fr, end - 40, 18);
	return (
		<>
			<div style={{position: 'absolute', inset: 0, opacity: 1 - back}}>
				<SceneHeading text="Key notes: what to write in your book" at={-60} size={52} />
				<div style={{position: 'absolute', right: 96, top: 108, opacity: prog(fr, K15.pause, 12), fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: BROWN}}>pause to copy</div>
				<KeyNotesBullets x={96} y={250} w={1090} items={items} size={36} gap={44} />
				<FramedCard x={1230} y={196} w={650} h={660} at={8} />
				{fr >= 8 ? <div style={{position: 'absolute', inset: 0, opacity: prog(fr, 8, 14)}}>
					<div style={{position: 'absolute', left: 1270, top: 214, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: GOOD.ink}}>Memory aid</div>
					<PlateImg plate={TIDE} x={1770} y={214} w={70} />
					<div style={{position: 'absolute', left: 1270, top: 300, width: 470, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 58, lineHeight: 1.12, color: INK}}>Middle, half, period, start.</div>
					<div style={{position: 'absolute', left: 1270, top: 560, width: 580, fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, lineHeight: 1.3, color: GREY}}>Assumes a smooth sinusoid with consecutive extremes. Some sources write a cos(bt) + d.</div>
				</div> : null}
			</div>
			{back > 0 ? <div style={{position: 'absolute', inset: 0, opacity: back}}><T03FinalFrame /></div> : null}
		</>
	);
};
export {AR, CR, smooth};
