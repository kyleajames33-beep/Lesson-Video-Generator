// Scenes 6 to 9: sorting launches by total energy (the launch-speed slider with live E per kilogram and result,
// then three lanes on the field motion engine), what escape velocity does not depend on (three probes of three
// sizes in three directions at one speed), the model's assumptions and real rockets (the painted rocket
// against one kick), and the memory card with an escaping probe still pulled back.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Enter, FONT_HAND, prog} from '../../kit';
import {FrameSvg, HandTag, MarkSpan, SceneHeading, kf} from '../../math/studio';
import {CARD, INK, INK_SOFT, TYPE} from '../../shared/tokens';
import {AnswerBox, DISPLAY, Readouts, Row} from '../../physics/projectile/board';
import {stateAt, trailTo} from '../../sims/field-motion';
import type {MotionPath} from '../../sims/field-motion';
import {DIRS, ESC9, GM_R, HEAD, HEAD_SIZE, R9, RE, RUNS, SIDE, VESC, cue, ePerKg, hMax, mono, rocketAt, runAt, timeAtR, vEsc, vInf, vOrb} from './common';
import {Earth, GREEN, GREY, Lbl, NAVY, Probe, Ring, Rocket, SLATE, Satellite, T, TEAL, VIOLET, VecArrow, comma, fx, sci, toS} from './parts';
import type {LS} from './parts';

/** Display time for an escaping run: slow near launch, fast far out (t = D p^3). */
const farT = (p: MotionPath, u: number) => p.duration * Math.pow(Math.max(0, Math.min(1, u)), 3);
const pathD = (pts: [number, number][]) => pts.map(([x, y], i) => `${i ? 'L' : 'M'}${x.toFixed(1)},${y.toFixed(1)}`).join(' ');
const round100 = (m: number) => (m > 1e7 ? Math.round(m / 1e6) * 1000 : Math.round(m / 1e5) * 100);

// ---------- 6. sorting launches by total energy ----------
const LANES = [{x: 96, w: 560}, {x: 680, w: 560}, {x: 1264, w: 560}];
const LTOP = 430, LBOT = 900, LR = 44;
const Lane: React.FC<{i: number; at: number; head: React.ReactNode; e: number; eAt: number; children: React.ReactNode; eLabel: string}> = ({i, at, head, e, eAt, children, eLabel}) => {
	const f = useCurrentFrame();
	const L = LANES[i], o = prog(f, at, 14);
	const bx = L.x + L.w - 90, y0 = 620, s = 120 / GM_R, he = e * s * prog(f, eAt, 14);
	return (
		<g opacity={o}>
			<rect x={L.x} y={LTOP} width={L.w} height={LBOT - LTOP} rx={16} fill={CARD} stroke="rgba(60,45,20,0.18)" strokeWidth={2.5} />
			<defs><clipPath id={`v23lane${i}`}><rect x={L.x} y={LTOP} width={L.w} height={LBOT - LTOP} rx={16} /></clipPath></defs>
			<g clipPath={`url(#v23lane${i})`}>{children}</g>
			<line x1={bx - 16} y1={y0} x2={bx + 66} y2={y0} stroke={INK} strokeWidth={3} />
			<rect x={bx} y={he > 0 ? y0 - he : y0} width={50} height={Math.max(3, Math.abs(he))} fill={NAVY.soft} stroke={NAVY.stroke} strokeWidth={4} />
			<T x={bx + 25} y={he > 0 ? y0 - he - 12 : y0 + Math.abs(he) + 32} size={26} anchor="middle" color={NAVY.ink}>{eLabel}</T>
			<foreignObject x={L.x + 16} y={LTOP + 8} width={L.w - 32} height={60}><div style={{...DISPLAY(32, NAVY.ink, 800)}}>{head}</div></foreignObject>
		</g>
	);
};
export const S06: React.FC = () => {
	const id = 'classify';
	const f = useCurrentFrame();
	const sorts = cue(id, 'So the launch speed sorts'), below = cue(id, 'Below escape velocity'), neg = cue(id, 'the total is negative'), fallsBack = cue(id, 'falls back'), sideways = cue(id, 'launched sideways'), exactly = cue(id, 'Exactly at escape'), zero = cue(id, 'the total is zero'), just = cue(id, 'just escapes'), above = cue(id, 'Above it'), pos = cue(id, 'the total is positive'), spare = cue(id, 'speed to spare'), fourteen = cue(id, 'Launch at fourteen'), eight = cue(id, 'eight point four');
	// The slider sweep: 5, 8, 10, then escape speed, then 14 km/s.
	const v = kf(f, mono([[sorts, 5000], [sorts + 40, 5000], [below - 10, 8000], [below + 30, 8000], [neg, 10000], [exactly, 10000], [exactly + 24, VESC], [above, VESC], [above + 24, 14000]], 6));
	const e = ePerKg(v);
	const escaping = v >= VESC - 1;
	const result = escaping ? (v > VESC + 50 ? 'escapes' : 'just escapes') : `back from ${comma(round100(hMax(v)) )} km`;
	const SL = {x: 120, y: 300, w: 760, lo: 4000, hi: 15000};
	const sx = (vv: number) => SL.x + ((vv - SL.lo) / (SL.hi - SL.lo)) * SL.w;
	// Lane 1: the 10 km/s radial launch, then the sideways launch on a closed path.
	const st = (i: number): LS => ({cx: LANES[i].x + 200, cy: LBOT - 40 + LR, R: LR});
	const r1 = RUNS[10000];
	const t1 = kf(f, mono([[below, 0], [fallsBack + 20, r1.duration]], 6), false);
	const s1 = runAt(r1, t1);
	const tSide = ((Math.max(0, f - sideways) / 150) % 1) * SIDE.duration;
	const side = stateAt(SIDE, tSide);
	// Lanes 2 and 3: escaping runs, slow near launch and fast far out.
	const r2 = RUNS[VESC], r3 = RUNS[14000];
	const t2 = farT(r2, (f - exactly) / 520), t3 = farT(r3, (f - above) / Math.max(200, eight - above + 10));
	const s2 = runAt(r2, t2), s3 = runAt(r3, t3);
	const P = (i: number, x: number, y: number) => toS(st(i), x, y);
	const band = 1 - prog(f, fourteen, 14);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			{band > 0 ? <div style={{opacity: band}}>
				<FrameSvg>
					<g opacity={prog(f, sorts, 12)}>
						<line x1={SL.x} y1={SL.y} x2={SL.x + SL.w} y2={SL.y} stroke={INK_SOFT} strokeWidth={7} strokeLinecap="round" />
						{[[5000, '5'], [8000, '8'], [10000, '10'], [VESC, '11.2'], [14000, '14']].map(([vv, l]) => <g key={l as string}><line x1={sx(vv as number)} y1={SL.y - 12} x2={sx(vv as number)} y2={SL.y + 12} stroke={INK} strokeWidth={3} /><T x={sx(vv as number)} y={SL.y + 44} size={28} anchor="middle" color={INK_SOFT} weight={700}>{l as string}</T></g>)}
						<circle cx={sx(v)} cy={SL.y} r={17} fill={TEAL.stroke} stroke={CARD} strokeWidth={4} />
						<T x={SL.x} y={SL.y - 34} size={28} color={INK_SOFT} weight={700}>launch speed (km s⁻¹)</T>
					</g>
				</FrameSvg>
				<Readouts x={960} y={176} w={864} size={40} at={sorts} rows={[
					{label: 'launch speed', value: `${fx(v / 1000, 1)} km s⁻¹`, color: TEAL.ink},
					{label: 'E per kg (½v² − GM/R)', value: Math.abs(e) < 2e5 ? '0' : `${e > 0 ? '+' : ''}${sci(e)} J kg⁻¹`, color: NAVY.ink},
					{label: 'result', value: result, color: GREY.ink},
				]} />
			</div> : null}
			<div style={{position: 'absolute', left: 96, top: 186, opacity: prog(f, fourteen + 6, 14)}}>
				<Row at={fourteen + 6} size={38}>½mv∞² = ½mv² − GMm/r  →  v∞ = √(v² − v<sub style={{fontSize: '0.6em'}}>esc</sub>²)</Row>
				<Row at={fourteen + 40} size={44}>&nbsp;&nbsp;&nbsp;= √(14.0² − {fx(VESC / 1000, 2)}²) = <AnswerBox at={eight}><span style={{color: TEAL.ink}}>{fx(vInf(14000) / 1000, 2)} km s⁻¹</span></AnswerBox></Row>
			</div>
			<FrameSvg>
				<Lane i={0} at={below} head={<>v &lt; v<sub style={{fontSize: '0.6em'}}>esc</sub>: E &lt; 0, bound</>} e={ePerKg(10000)} eAt={neg} eLabel="E < 0">
					<Earth cx={st(0).cx} cy={st(0).cy} d={2 * LR} />
					{t1 > 0 ? <line x1={st(0).cx} y1={LBOT - 40} x2={st(0).cx} y2={P(0, 0, RE + hMax(10000))[1]} stroke={TEAL.stroke} strokeWidth={3} strokeDasharray="8 6" opacity={prog(f, below, 12)} /> : null}
					{t1 > 0 ? <line x1={st(0).cx - 24} y1={P(0, 0, RE + hMax(10000))[1]} x2={st(0).cx + 24} y2={P(0, 0, RE + hMax(10000))[1]} stroke={TEAL.stroke} strokeWidth={4} opacity={prog(f, fallsBack, 12)} /> : null}
					{t1 > 0 ? <Probe x={P(0, s1.x, s1.y)[0]} y={P(0, s1.x, s1.y)[1] - 12} w={40} /> : null}
					{f >= sideways ? <g opacity={prog(f, sideways, 12)}>
						<path d={pathD(trailTo(SIDE, SIDE.duration, 200).map(([x, y]) => P(0, x, y)))} fill="none" stroke={TEAL.stroke} strokeWidth={3} strokeDasharray="8 6" />
						<Satellite cx={P(0, side.x, side.y)[0]} cy={P(0, side.x, side.y)[1]} w={36} />
					</g> : null}
				</Lane>
				<Lane i={1} at={exactly} head={<>v = v<sub style={{fontSize: '0.6em'}}>esc</sub>: E = 0</>} e={0} eAt={zero} eLabel="E = 0">
					<Earth cx={st(1).cx} cy={st(1).cy} d={2 * LR} />
					<line x1={st(1).cx} y1={LBOT - 40} x2={st(1).cx} y2={Math.max(LTOP, P(1, s2.x, s2.y)[1])} stroke={TEAL.stroke} strokeWidth={3} strokeDasharray="8 6" />
					<Probe x={P(1, s2.x, s2.y)[0]} y={P(1, s2.x, s2.y)[1] - 12} w={40} />
				</Lane>
				<Lane i={2} at={above} head={<>v &gt; v<sub style={{fontSize: '0.6em'}}>esc</sub>: E &gt; 0</>} e={ePerKg(14000)} eAt={pos} eLabel="E > 0">
					<Earth cx={st(2).cx} cy={st(2).cy} d={2 * LR} />
					<line x1={st(2).cx} y1={LBOT - 40} x2={st(2).cx} y2={Math.max(LTOP, P(2, s3.x, s3.y)[1])} stroke={TEAL.stroke} strokeWidth={3} strokeDasharray="8 6" />
					<Probe x={P(2, s3.x, s3.y)[0]} y={P(2, s3.x, s3.y)[1] - 12} w={40} />
				</Lane>
				<Ring cx={LANES[1].x + LANES[1].w - 65} cy={620} rx={70} ry={36} at={zero + 12} color={NAVY.stroke} />
			</FrameSvg>
			<Lbl x={LANES[0].x + 20} y={LTOP + 100} at={fallsBack} color={GREY.ink} size={28}>radial: falls back</Lbl>
			<Lbl x={LANES[0].x + 20} y={LTOP + 140} at={sideways} color={TEAL.ink} size={28}>sideways: an orbit</Lbl>
			<Lbl x={LANES[1].x + 20} y={LTOP + 100} at={just} color={TEAL.ink} size={30}>speed: {fx(s2.v / 1000, 2)} km s⁻¹</Lbl>
			<Lbl x={LANES[1].x + 20} y={LTOP + 140} at={just + 30} color={GREY.ink} size={28}>slowing towards 0, forever</Lbl>
			<Lbl x={LANES[2].x + 20} y={LTOP + 100} at={above + 10} color={TEAL.ink} size={30}>speed: {fx(s3.v / 1000, 2)} km s⁻¹</Lbl>
			<Lbl x={LANES[1].x + 20} y={LTOP + 180} at={just + 30} color={GREY.ink} size={26}>r = {fx(s2.r / RE, 0)} R</Lbl>
			<Lbl x={LANES[2].x + 20} y={LTOP + 180} at={above + 10} color={GREY.ink} size={26}>r = {fx(s3.r / RE, 0)} R</Lbl>
			<HandTag x={LANES[2].x + 20} y={LTOP + 230} text="speed to spare" at={spare} size={30} color={TEAL.ink} />
			<HandTag x={940} y={400} text="the sign of E decides" at={sorts + 30} out={fourteen} size={30} color={NAVY.ink} />
		</>
	);
};

// ---------- 7. what it doesn't depend on ----------
const ST7: LS = {cx: 440, cy: 800, R: 110};
const SIZES = [40, 58, 80];
export const S07: React.FC = () => {
	const id = 'independence';
	const f = useCurrentFrame();
	const two = cue(id, 'Two things'), mass = cue(id, "The probe's mass"), cancelled = cue(id, 'because it cancelled'), dir = cue(id, 'And the direction'), noDir = cue(id, 'energy has no direction'), aim = cue(id, 'Aim it sideways'), same = cue(id, 'the threshold is the same'), aslong = cue(id, 'as long as'), hit = cue(id, 'hit the planet'), depends = cue(id, 'It depends only'), pm = cue(id, "the planet's mass"), dist = cue(id, 'the distance from its centre');
	const tShow = Math.max(0, Math.min(3200, ((f - (dir + 20)) / 420) * 3200));
	const [lx, ly] = toS(ST7, 0, RE);
	const r3 = 3 * RE;
	const cross = DIRS.map(p => timeAtR(p, r3));
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<defs><clipPath id="v23st7"><rect x={0} y={150} width={1040} height={800} /></clipPath></defs>
				<g clipPath="url(#v23st7)">
				<circle cx={ST7.cx} cy={ST7.cy} r={3 * ST7.R} fill="none" stroke={NAVY.stroke} strokeWidth={2.5} strokeDasharray="8 8" opacity={prog(f, dir, 12) * 0.9} />
				<Earth cx={ST7.cx} cy={ST7.cy} d={2 * ST7.R} />
				{DIRS.map((p, i) => {
					const t = tShow;
					if (t <= 0) return <Probe key={i} x={lx} y={ly - 14} w={SIZES[i]} opacity={prog(f, mass + i * 8, 12)} />;
					const pts = trailTo(p, t, 160).map(([x, y]) => toS(ST7, x, y));
					const s = stateAt(p, t), [hx, hy] = toS(ST7, s.x, s.y);
					return <g key={i}><path d={pathD(pts)} fill="none" stroke={TEAL.stroke} strokeWidth={3} strokeDasharray="10 7" /><Probe x={hx} y={hy} w={SIZES[i]} /></g>;
				})}
				{[90, 45, 0].map((d, i) => <VecArrow key={d} x={lx} y={ly - 20} dx={150 * Math.cos((d * Math.PI) / 180)} dy={-150 * Math.sin((d * Math.PI) / 180)} color={TEAL.stroke} width={6} head={18} at={dir + i * 6} out={dir + 120} />)}
				{f >= aslong ? <g opacity={prog(f, aslong, 12)}>
					<line x1={lx} y1={ly} x2={lx - 110} y2={ly + 110} stroke={SLATE.stroke} strokeWidth={3} strokeDasharray="8 6" />
					<path d={`M${lx - 130},${ly + 90} l40,40 M${lx - 90},${ly + 90} l-40,40`} stroke={INK} strokeWidth={6} strokeLinecap="round" />
				</g> : null}
				</g>
			</FrameSvg>
			<Lbl x={lx + 30} y={ly - 190} at={dir + 10} out={dir + 120} color={TEAL.ink} size={30}>v = 11.2 km s⁻¹ each</Lbl>
			<HandTag x={lx - 200} y={ly + 40} text="unless the path hits the planet" at={hit} size={30} color={SLATE.ink} anchor="middle" />
			<Lbl x={ST7.cx + 3 * ST7.R * 0.71 + 10} y={ST7.cy - 3 * ST7.R * 0.71} at={dir} color={NAVY.ink} size={28}>r = 3R</Lbl>
			<Row at={two} size={36} style={{position: 'absolute', left: 1100, top: 186}}>escape velocity does not depend on:</Row>
			<Row at={mass} size={40} style={{position: 'absolute', left: 1100, top: 250}}>the probe's mass: ½<MarkSpan kind="strike" at={cancelled} color={INK}>m</MarkSpan>v² = GM<MarkSpan kind="strike" at={cancelled + 6} color={INK}>m</MarkSpan>/r</Row>
			<Row at={dir} size={40} style={{position: 'absolute', left: 1100, top: 320}}>the direction: energy has no direction</Row>
			<HandTag x={1100} y={400} text="any mass" at={mass + 20} size={30} color={GREY.ink} />
			<HandTag x={1300} y={400} text="any direction" at={aim} size={30} color={TEAL.ink} />
			<Readouts x={1100} y={440} w={724} size={40} at={dir + 40} title="speed when r = 3R" rows={DIRS.map((p, i) => ({label: ['straight up', 'slanted', 'sideways'][i], value: tShow >= cross[i] ? `${fx(stateAt(p, cross[i]).speed / 1000, 2)} km s⁻¹` : '...', color: TEAL.ink}))} />
			<Lbl x={1100} y={760} at={same} color={TEAL.ink} size={30}>same threshold: {fx(vEsc(RE) / 1000, 1)} km s⁻¹ from the surface</Lbl>
			<Row at={depends} size={52} style={{position: 'absolute', left: 1100, top: 800}}><span style={{color: TEAL.ink}}>v<sub style={{fontSize: '0.6em'}}>esc</sub> = √(2G<MarkSpan kind="circle" at={pm} color={NAVY.stroke}>M</MarkSpan>/<MarkSpan kind="circle" at={dist} color={NAVY.stroke}>r</MarkSpan>)</span></Row>
			<HandTag x={1100} y={720} text="mass cancels; energy has no direction" at={noDir} out={same} size={30} color={NAVY.ink} />
			<Lbl x={96} y={930} at={-30} color={GREY.ink} size={28}>three probe sizes; one launch speed</Lbl>
		</>
	);
};

// ---------- 8. the model's assumptions, and real rockets ----------
export const S08: React.FC = () => {
	const id = 'assumptions';
	const f = useCurrentFrame();
	const model = cue(id, 'This model makes'), noAir = cue(id, 'No air'), heat = cue(id, 'slow the probe and heat it'), noProp = cue(id, 'No propulsion after launch'), only = cue(id, "And only Earth's gravity"), ignoring = cue(id, 'ignoring the Sun'), real = cue(id, 'Real rockets never'), keep = cue(id, 'They keep their engines'), gradual = cue(id, 'supplied gradually'), high = cue(id, 'much of it high up'), weaker = cue(id, 'pull is weaker'), esc = cue(id, 'Escape velocity is the speed');
	const tR = kf(f, mono([[real, 0], [real + 60, 20], [esc, 300]], 6), false);
	const rk = rocketAt(tR);
	const PAD = 880, RX = 820, LEN = 300;
	const ny = PAD - (rk.h / rocketAt(300).h) * 380;
	const glow = prog(f, heat, 14) * (1 - prog(f, real, 14));
	const kick = prog(f, esc, 10);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				{/* air: a coded atmosphere band over a ground line, a fast probe at its nose glowing */}
				<g opacity={prog(f, noAir, 12) * (1 - prog(f, real, 14))}>
					<rect x={96} y={560} width={560} height={320} fill="#dfeef8" opacity={0.7} />
					<line x1={96} y1={880} x2={656} y2={880} stroke={INK} strokeWidth={4} />
					<circle cx={376} cy={640} r={50 * glow + 1} fill="#e86a3a" opacity={0.35 * glow} />
					<Probe x={376} y={640 + 20} w={70} rotate={0} />
					<VecArrow x={376} y={720} dx={0} dy={-60} color={TEAL.stroke} width={6} head={18} at={noAir} />
				</g>
				{/* the rocket keeps thrusting */}
				<g opacity={prog(f, real, 14)}>
					<line x1={RX - 160} y1={PAD} x2={RX + 160} y2={PAD} stroke={INK} strokeWidth={5} />
					<Rocket nx={RX} ny={ny} len={LEN} />
					{f >= keep ? <VecArrow x={RX + 48} y={ny + 70} dx={0} dy={-120} color={GREEN.stroke} width={8} head={22} at={keep} /> : null}
					{f >= weaker ? <g>
						<VecArrow x={RX - 90} y={PAD - 60} dx={0} dy={60} color={VIOLET.stroke} width={6} head={16} at={weaker} />
						<VecArrow x={RX - 90} y={260} dx={0} dy={22} color={VIOLET.stroke} width={6} head={10} at={weaker + 8} />
					</g> : null}
				</g>
				<Ring cx={RX + 48} cy={ny + 10} rx={44} ry={80} at={high} color={GREEN.stroke} />
				{/* one kick at launch */}
				{kick > 0 ? <g opacity={kick}>
					<line x1={1240} y1={880} x2={1820} y2={880} stroke={INK} strokeWidth={4} />
					<circle cx={1320} cy={850} r={40 * (1 - prog(f, esc + 6, 16)) + 1} fill="#fff4c2" stroke={TEAL.stroke} strokeWidth={3} opacity={1 - prog(f, esc + 6, 16)} />
					<Probe x={1320} y={856} w={60} />
					<VecArrow x={1360} y={850} dx={0} dy={-170} color={TEAL.stroke} width={8} head={22} at={esc} />
				</g> : null}
			</FrameSvg>
			<Lbl x={110} y={540} at={noAir} out={real} color={INK_SOFT} size={28}>with air</Lbl>
			<HandTag x={430} y={600} text="air: drag and heating" at={heat} out={real} size={30} color={INK} />
			<Enter at={model} style={{position: 'absolute', left: 1240, top: 186, width: 584}}>
				<div style={{background: CARD, border: `3px solid ${NAVY.stroke}`, borderRadius: 16, padding: '10px 24px'}}>
					<div style={{...DISPLAY(30, INK_SOFT, 800)}}>THE MODEL ASSUMES</div>
					{[['no air', noAir], ['no propulsion after launch', noProp], ["only the planet's gravity", only]].map(([t, a]) => <div key={t as string} style={{...DISPLAY(36, NAVY.ink, 800), opacity: prog(f, a as number, 12)}}>{t as string}</div>)}
					<div style={{...DISPLAY(28, GREY.ink, 700), opacity: prog(f, ignoring, 12)}}>(ignore the Sun and the Moon)</div>
				</div>
			</Enter>
			<Readouts x={1240} y={470} w={584} size={44} at={real} title="the rocket (illustrative)" rows={[
				{label: 'speed', value: `${fx(rk.v / 1000, 1)} km s⁻¹`, color: TEAL.ink},
				{label: 'height', value: `${comma(rk.h / 1000)} km`, color: NAVY.ink},
			]} />
			<Lbl x={RX - 150} y={PAD + 44} at={real} color={INK} size={28}>leaves the pad slowly</Lbl>
			<HandTag x={RX + 110} y={ny + 30} text="keeps thrusting: not the escape-velocity model" at={keep + 10} out={esc} size={28} color={GREEN.ink} />
			<HandTag x={RX + 110} y={ny + 90} text="energy added all the way up" at={gradual} out={esc} size={28} color={GREEN.ink} />
			<Lbl x={RX - 110} y={250} at={weaker} color={VIOLET.ink} anchor="end" size={28}>weaker pull up here</Lbl>
			<Lbl x={1420} y={740} at={esc + 6} color={TEAL.ink} size={30}>escape velocity:</Lbl>
			<Lbl x={1420} y={780} at={esc + 6} color={TEAL.ink} size={30}>one kick at launch</Lbl>
			<HandTag x={1420} y={830} text="one kick" at={esc + 20} size={32} color={TEAL.ink} />
		</>
	);
};

// ---------- 9. memory aid ----------
const ST9: LS = {cx: 330, cy: 600, R: 80};
export const S09: React.FC = () => {
	const id = 'memory-aid';
	const f = useCurrentFrame();
	const rem = cue(id, 'To remember it'), orbit = cue(id, 'orbit speed is root'), esc = cue(id, 'escape speed is root two'), times = cue(id, 'Escape is root two times'), inside = cue(id, 'the two goes inside'), escaping = cue(id, "And escaping doesn't mean"), pulled = cue(id, 'pulled back the whole way'), never = cue(id, 'it just never stops');
	const t = Math.max(0, Math.min(ESC9.duration, ((f - escaping) / 220) * 9000));
	const s = stateAt(ESC9, t), r = Math.hypot(s.x, s.y);
	const [px, py] = toS(ST9, s.x, s.y);
	const [cx0, cy0] = toS(ST9, 0, R9);
	const gLen = Math.min(90, 90 * (R9 / r) ** 2);
	const pulse = Math.sin(Math.PI * Math.max(0, Math.min(1, (f - inside) / 24)));
	const vo = vOrb(R9) / 1000, ve = vEsc(R9) / 1000, KP = 26;
	const trail = t > 0 ? pathD(trailTo(ESC9, t, 160).map(([x, y]) => toS(ST9, x, y))) : '';
	const toC = Math.hypot(ST9.cx - px, ST9.cy - py) || 1;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<div style={{position: 'absolute', left: 96, top: 186, display: 'flex', flexDirection: 'column', gap: 14}}>
				<Row at={orbit} size={52}><span style={{color: TEAL.ink}}>orbit: v = √(GM/r)</span></Row>
				<Row at={esc} size={52}><span style={{color: TEAL.ink}}>escape: v<sub style={{fontSize: '0.6em'}}>esc</sub> = √(<span style={{display: 'inline-block', transform: `scale(${1 + 0.35 * pulse})`}}><MarkSpan kind="circle" at={esc + 20} color={NAVY.stroke}>2</MarkSpan></span>GM/r)</span></Row>
			</div>
			<FrameSvg>
				<defs><clipPath id="v23st9"><rect x={0} y={380} width={960} height={560} /></clipPath></defs>
				<g clipPath="url(#v23st9)" opacity={prog(f, orbit, 14)}>
					<circle cx={ST9.cx} cy={ST9.cy} r={2 * ST9.R} fill="none" stroke={INK} strokeWidth={3} strokeDasharray="10 8" />
					<Earth cx={ST9.cx} cy={ST9.cy} d={2 * ST9.R} />
					{trail ? <path d={trail} fill="none" stroke={TEAL.stroke} strokeWidth={4} strokeDasharray="10 7" /> : null}
					<Satellite cx={t > 0 ? px : cx0} cy={t > 0 ? py : cy0} w={70} />
					{f >= orbit && f < escaping ? <VecArrow x={cx0 + 40} y={cy0 - 16} dx={vo * KP} dy={0} color={TEAL.stroke} width={7} head={20} at={orbit + 10} out={escaping - 10} /> : null}
					{f >= esc && f < escaping ? <VecArrow x={cx0 + 40} y={cy0 + 18} dx={ve * KP} dy={0} color={TEAL.stroke} width={7} head={20} at={esc + 10} out={escaping - 10} dash="12 7" /> : null}
					{f >= pulled ? <VecArrow x={px} y={py} dx={((ST9.cx - px) / toC) * gLen} dy={((ST9.cy - py) / toC) * gLen} color={VIOLET.stroke} width={6} head={16} at={pulled} /> : null}
				</g>
			</FrameSvg>
			{f < escaping ? <Lbl x={cx0 + 50 + vo * KP} y={cy0 - 12} at={orbit + 10} color={TEAL.ink} size={28}>orbit</Lbl> : null}
			{f < escaping ? <Lbl x={cx0 + 50 + ve * KP} y={cy0 + 30} at={esc + 10} color={TEAL.ink} size={28}>escape (× √2)</Lbl> : null}
			<Lbl x={Math.min(820, px + 50)} y={Math.min(880, py) - 20} at={escaping} color={TEAL.ink} size={30}>{fx(s.speed / 1000, 1)} km s⁻¹</Lbl>
			<Lbl x={Math.min(820, px + 50)} y={Math.min(880, py) + 20} at={pulled} color={VIOLET.ink} size={28}>still pulled back</Lbl>
			<Enter at={rem} style={{position: 'absolute', left: 1000, top: 186, width: 824}}>
				<div style={{background: CARD, border: `4px solid ${INK}`, borderRadius: 24, boxShadow: `inset 0 0 0 8px ${CARD}, inset 0 0 0 10.5px ${INK}, 0 10px 26px rgba(60,45,20,0.12)`, padding: '18px 34px 22px'}}>
					<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: TYPE.hand, color: INK_SOFT}}>Memory aid</div>
					<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 52, lineHeight: 1.12}}>
						<div style={{color: TEAL.ink, opacity: prog(f, times, 12)}}>Escape = √2 × orbit.</div>
						<div style={{color: NAVY.ink, opacity: prog(f, inside, 12)}}>The 2 goes inside the root.</div>
					</div>
				</div>
			</Enter>
			<Row at={escaping} size={36} style={{position: 'absolute', left: 1000, top: 560, width: 824, whiteSpace: 'normal'}}>escaping does not mean leaving gravity behind</Row>
			<Row at={never} size={36} style={{position: 'absolute', left: 1000, top: 660, width: 824, whiteSpace: 'normal'}}>pulled back all the way out; it just never stops</Row>
			<Lbl x={1000} y={930} at={-30} color={GREY.ink} size={28}>same r, same planet; no air, no later thrust</Lbl>
		</>
	);
};
