// Scenes 1 to 5: Halley's comet (opening on last time's frame; the comet on its true ellipse from the field
// motion engine, year counter and live speed bar), Kepler's three laws (the Mars table and failed circles),
// law 1 (the constant-sum ellipse and the shape slider), law 2 (the equal-area run on the teaching orbit),
// and the cause (gravity resolved along and across the motion, then the whole ellipse with the torque note).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Countdown, Enter, prog} from '../../kit';
import {FrameSvg, HandTag, MarkSpan, SceneHeading, kf} from '../../math/studio';
import {CARD, INK, INK_SOFT} from '../../shared/tokens';
import {AnswerBox, Chip, DISPLAY, Readouts, Row} from '../../physics/projectile/board';
import {V19FinalFrame} from '../phys-y12-m5-v19/s3';
import {HALLEY, HEAD, HEAD_SIZE, RUN_HALLEY, RUN_TEACH, TEACH, cue, holdIf, mono} from './common';
import {AMBER, Comet, Earth, Focus, GREY, Lbl, Mars, NAVY, Ring, SLATE, SpeedBar, Sun, T, TEAL, VecArrow, at, ellipseD, fx, head, lerpView, sector, toV} from './parts';
import type {View} from './parts';

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const card: React.CSSProperties = {background: CARD, borderRadius: 18, boxShadow: '0 10px 26px rgba(60,45,20,0.12)', padding: '10px 24px 14px', border: '2.5px solid rgba(60,45,20,0.16)'};
export const LawSlot: React.FC<{n: number; at: number; fillAt: number; text: string; x: number; y: number; w: number; size?: number}> = ({n, at: a, fillAt, text, x, y, w, size = 32}) => {
	const f = useCurrentFrame();
	return (
		<Enter at={a} style={{position: 'absolute', left: x, top: y, width: w}}>
			<div style={{...card, padding: '6px 18px 8px', border: `3px solid ${f >= fillAt ? INK : 'rgba(60,45,20,0.16)'}`}}>
				<span style={{...DISPLAY(size, INK_SOFT, 800)}}>Law {n}: </span>
				<span style={{...DISPLAY(size, INK, 800), whiteSpace: 'normal', opacity: prog(f, fillAt, 12)}}>{text}</span>
			</div>
		</Enter>
	);
};

// ---------- 1. hook: Halley's comet ----------
/** Halley's true ellipse across the frame: the Sun at the left focus, 46 px per AU. */
export const HV: View = {sx: 150, sy: 560, k: 46};
export const HalleyEllipse: React.FC<{v: View; width?: number}> = ({v, width = 3}) => <path d={ellipseD(v, HALLEY.a, HALLEY.e, 400)} fill="none" stroke={NAVY.stroke} strokeWidth={width} strokeDasharray="12 9" />;
export const cometAt = (v: View, t: number) => {
	const s = at(RUN_HALLEY, t);
	const [x, y] = toV(v, s.x, s.y);
	const d = Math.hypot(x - v.sx, y - v.sy) || 1;
	return {x, y, away: [(x - v.sx) / d, (y - v.sy) / d] as [number, number], kms: head(v, RUN_HALLEY, t).kms};
};
export const S01: React.FC = () => {
	const id = 'hook';
	const f = useCurrentFrame();
	const zoom = cue(id, "Let's zoom"), nineteen = cue(id, 'In nineteen'), headed = cue(id, 'headed out'), thirty = cue(id, 'thirty-five times'), sixty = cue(id, 'twenty sixty-one'), spends = cue(id, 'It spends'), crawl = cue(id, 'crawling'), racing = cue(id, 'racing near'), why = cue(id, 'Why does'), think = cue(id, 'Have a think');
	const h = holdIf(id);
	if (f < 1) return <V19FinalFrame />;
	const z = prog(f, 1, 40);
	const old = prog(f, 20, 20);
	// First pass: 1986 (perihelion) forwards to the 2061 return, one orbit in real proportion.
	const t1 = HALLEY.T * Math.max(0, Math.min(1, (f - nineteen) / Math.max(60, sixty + 20 - nineteen)));
	// Replay from the 2061 return: one more orbit in real proportion, out fast, crawling, then the whip back in on "racing".
	const r0 = sixty + 20, rEnd = racing + 30;
	const replay = f >= r0;
	const t = replay ? HALLEY.T * (1 + Math.min(1.1, (f - r0) / Math.max(60, rEnd - r0))) : t1;
	const c = cometAt(HV, t);
	const year = Math.min(2061, 1986 + Math.floor(t1 + 1e-6));
	const showComet = f >= nineteen - 10;
	return (
		<>
			<FrameSvg>
				<circle cx={HV.sx} cy={HV.sy} r={HV.k} fill="none" stroke={TEAL.stroke} strokeWidth={2} opacity={prog(f, 20, 20)} />
				<g opacity={prog(f, 24, 20)}>
					<HalleyEllipse v={HV} />
					<Sun cx={HV.sx} cy={HV.sy} d={40} />
					<Earth cx={HV.sx} cy={HV.sy - HV.k} d={12} />
				</g>
				{showComet ? <Comet x={c.x} y={c.y} w={170} away={c.away} opacity={prog(f, nineteen - 10, 10)} /> : null}
				{showComet ? <circle cx={c.x} cy={c.y} r={5} fill={INK} /> : null}
				<Ring cx={HV.sx - 10} cy={HV.sy} rx={70} ry={80} at={racing} color={TEAL.stroke} />
				{f >= spends ? <SpeedBar x={1770} y={930} h={140} kms={c.kms} vMax={HALLEY.vpKms} /> : null}
			</FrameSvg>
			{old < 1 ? <div style={{position: 'absolute', inset: 0, opacity: 1 - old, transform: `scale(${1 - 0.97 * z})`, transformOrigin: `${HV.sx}px ${HV.sy - HV.k}px`}}>
				<V19FinalFrame />
			</div> : null}
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<Lbl x={HV.sx + 4} y={HV.sy - HV.k - 22} at={zoom + 30} color={TEAL.ink} size={28}>Earth's orbit (1 AU)</Lbl>
			<Lbl x={HV.sx - 20} y={HV.sy + 70} at={zoom + 30} color={INK} size={30}>Sun</Lbl>
			<Lbl x={760} y={HV.sy + 300} at={zoom + 40} color={GREY.ink} anchor="middle" size={28}>Halley's orbit: distances to scale; Sun and comet drawn larger</Lbl>
			<Readouts x={96} y={176} w={520} size={52} at={nineteen} rows={[{label: 'year', value: replay ? '2061' : `${year}`, color: INK}]} />
			<Chip x={660} y={196} at={nineteen + 10} size={32} border={NAVY.stroke} color={NAVY.ink}>1986: 0.59 × Earth's distance</Chip>
			<Chip x={1200} y={196} at={thirty} size={32} border={NAVY.stroke} color={NAVY.ink}>furthest: 35.25 × Earth's distance</Chip>
			<Lbl x={1700} y={HV.sy - 40} at={headed + 30} color={GREY.ink} anchor="end" size={28}>beyond Neptune</Lbl>
			<HandTag x={1380} y={HV.sy + 140} text="crawls" at={crawl} size={34} color={TEAL.ink} />
			<HandTag x={HV.sx + 60} y={HV.sy + 140} text="races" at={racing} size={34} color={TEAL.ink} />
			{f >= spends ? <Lbl x={1740} y={900} at={spends} color={TEAL.ink} anchor="end" size={44}>{fx(c.kms, 1)} km s⁻¹</Lbl> : null}
			<Enter at={why} style={{position: 'absolute', left: 96, top: 272, width: 1728}}>
				<div style={{display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap'}}>
					<div style={{...DISPLAY(38, INK, 800)}}>Why faster near the Sun?</div>
					{['pulled harder', 'a shorter path', 'something speeds it up'].map((s, i) => <div key={i} style={{background: '#f1ebdf', border: '2.5px solid rgba(60,45,20,0.16)', borderRadius: 14, padding: '4px 14px 6px', ...DISPLAY(32, INK, 700), opacity: prog(f, why + 8 + i * 8, 10)}}>{s}</div>)}
				</div>
			</Enter>
			{h ? <FrameSvg><Countdown start={h.startFrame} end={h.endFrame} x={1560} y={860} r={46} ringFrom={think} /></FrameSvg> : null}
		</>
	);
};

// ---------- 2. Kepler's three laws ----------
const MV: View = {sx: 900, sy: 600, k: 230};
const ME = 0.3, MA = 1.0;
/** Plotted "Mars" positions on an exaggerated ellipse (e = 0.3) at equal steps of time. */
const DOTS = Array.from({length: 14}, (_, k) => {
	const M = (2 * Math.PI * k) / 14;
	let E = M;
	for (let i = 0; i < 30; i++) E -= (E - ME * Math.sin(E) - M) / (1 - ME * Math.cos(E));
	return toV(MV, MA * (Math.cos(E) - ME), MA * Math.sqrt(1 - ME * ME) * Math.sin(E));
});
const FITS = [
	{cx: MV.sx, cy: MV.sy, r: MA * MV.k},
	{cx: MV.sx + 0.3 * MV.k, cy: MV.sy, r: 0.98 * MV.k},
	{cx: MV.sx + 0.3 * MV.k, cy: MV.sy, r: 0.93 * MV.k},
];
export const S02: React.FC = () => {
	const id = 'kepler-laws';
	const f = useCurrentFrame();
	const tycho = cue(id, 'twenty years'), noCircle = cue(id, 'No circle'), however = cue(id, 'however he'), ell = cue(id, 'an ellipse'), three = cue(id, 'three laws'), describe = cue(id, 'They describe'), newton = cue(id, "Newton's gravity");
	const fitI = f < noCircle ? -1 : f < however ? 0 : f < however + 24 ? 1 : 2;
	const fit = fitI >= 0 && f < ell ? FITS[fitI] : null;
	const misses = fit ? DOTS.map(([x, y], k) => ({k, x, y, off: Math.abs(Math.hypot(x - fit.cx, y - fit.cy) - fit.r)})).filter(m => m.off > 10).slice(0, 4) : [];
	const ep = prog(f, ell, 20);
	const mt = Math.max(0, f - ell) / 300;
	const ms = (() => { let E = 2 * Math.PI * mt; const M = E; for (let i = 0; i < 30; i++) E -= (E - ME * Math.sin(E) - M) / (1 - ME * Math.cos(E)); return toV(MV, MA * (Math.cos(E) - ME), MA * Math.sqrt(1 - ME * ME) * Math.sin(E)); })();
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				{ep > 0 ? <path d={ellipseD(MV, MA, ME)} fill="none" stroke={NAVY.stroke} strokeWidth={5} opacity={ep} /> : null}
				{fit ? <circle cx={fit.cx} cy={fit.cy} r={fit.r} fill="none" stroke={INK_SOFT} strokeWidth={3} strokeDasharray="12 9" /> : null}
				<Sun cx={MV.sx} cy={MV.sy} d={70} />
				{DOTS.map(([x, y], k) => <circle key={k} cx={x} cy={y} r={8} fill="#b5502f" stroke={CARD} strokeWidth={2} opacity={prog(f, tycho + k * 4, 8)} />)}
				{misses.map(m => <g key={m.k} stroke={SLATE.stroke} strokeWidth={4}><line x1={m.x - 12} y1={m.y - 12} x2={m.x + 12} y2={m.y + 12} /><line x1={m.x + 12} y1={m.y - 12} x2={m.x - 12} y2={m.y + 12} /></g>)}
				{ep > 0 ? <g opacity={ep}><Mars cx={ms[0]} cy={ms[1]} d={46} /></g> : null}
				{misses[0] ? <Ring cx={misses[0].x} cy={misses[0].y} rx={34} ry={34} at={however + 30} color={SLATE.stroke} /> : null}
			</FrameSvg>
			<Enter at={-30} style={{position: 'absolute', left: 96, top: 186, width: 420}}>
				<div style={{...card}}>
					<div style={{...DISPLAY(28, INK_SOFT, 800), textTransform: 'uppercase', letterSpacing: 1.5}}>Mars record (naked eye)</div>
					{[['night', 'sky angle'], ['1', '127.4°'], ['2', '134.9°'], ['3', '142.6°'], ['4', '150.1°'], ['...', '...']].map((r, i) => (
						<div key={i} style={{display: 'flex', borderTop: i ? '2px solid rgba(60,45,20,0.16)' : undefined, padding: '3px 0'}}>
							<span style={{...DISPLAY(30, GREY.ink, i ? 700 : 800), width: 150}}>{r[0]}</span>
							<span style={{...DISPLAY(30, GREY.ink, i ? 700 : 800)}}>{r[1]}</span>
						</div>
					))}
					<div style={{...DISPLAY(28, GREY.ink, 700), marginTop: 6}}>20 years of records</div>
				</div>
			</Enter>
			<Lbl x={96} y={640} at={tycho} color={GREY.ink} size={28}>dots: Mars positions; shape exaggerated</Lbl>
			<HandTag x={96} y={720} text="no circle fits" at={noCircle + 20} size={34} color={SLATE.ink} />
			<HandTag x={96} y={790} text="an ellipse does" at={ell + 10} size={34} color={NAVY.ink} />
			<LawSlot n={1} at={three} fillAt={9999} text="" x={1300} y={300} w={524} size={36} />
			<LawSlot n={2} at={three + 8} fillAt={9999} text="" x={1300} y={390} w={524} size={36} />
			<LawSlot n={3} at={three + 16} fillAt={9999} text="" x={1300} y={480} w={524} size={36} />
			<Row at={describe} size={44} style={{position: 'absolute', left: 1300, top: 600, width: 524, whiteSpace: 'normal'}}>laws describe how</Row>
			<Row at={newton} size={44} style={{position: 'absolute', left: 1300, top: 670, width: 524, whiteSpace: 'normal'}}><span style={{color: AMBER.ink}}>gravity explains why</span></Row>
		</>
	);
};

// ---------- 3. law 1: an ellipse with the Sun at a focus ----------
export const KV: View = {sx: 396, sy: 590, k: 340};
export const S03: React.FC = () => {
	const id = 'law-1-ellipse';
	const f = useCurrentFrame();
	const first = cue(id, "first law"), foci = cue(id, 'called foci'), from = cue(id, 'From any'), total = cue(id, 'same total'), sunSits = cue(id, 'The Sun sits'), empty = cue(id, 'empty space'), half = cue(id, 'Half the longest'), semi = cue(id, 'semi-major'), closest = cue(id, 'The closest'), aph = cue(id, 'the aphelion'), squash = cue(id, 'Squash'), circle = cue(id, 'becomes a circle'), where = cue(id, 'where a is');
	const e = kf(f, mono([[squash, 0.6], [squash + 80, 0.0]], 10));
	const a = 1, b = a * Math.sqrt(1 - e * e), c = a * e;
	// Geometric centre fixed at the stage centre while the foci squash together.
	const cx = KV.sx + 0.6 * KV.k, cy = KV.sy;
	const F1: [number, number] = [cx - c * KV.k, cy], F2: [number, number] = [cx + c * KV.k, cy];
	const th = (2 * Math.PI * Math.max(0, f - from)) / 360 + Math.PI * 0.75;
	const P: [number, number] = [cx + a * KV.k * Math.cos(th), cy - b * KV.k * Math.sin(th)];
	const d1 = Math.hypot(P[0] - F1[0], P[1] - F1[1]) / KV.k, d2 = Math.hypot(P[0] - F2[0], P[1] - F2[1]) / KV.k;
	const ell = Array.from({length: 161}, (_, k) => { const t = (2 * Math.PI * k) / 160; return [cx + a * KV.k * Math.cos(t), cy - b * KV.k * Math.sin(t)]; }).map(([x, y], k) => `${k ? 'L' : 'M'}${x.toFixed(1)},${y.toFixed(1)}`).join(' ');
	const axis = prog(f, half, 24);
	const sunP = prog(f, sunSits, 16);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<path d={ell} fill="none" stroke={NAVY.stroke} strokeWidth={5} />
				{axis > 0 ? <g>
					<line x1={cx - a * KV.k} y1={cy} x2={lerp(cx - a * KV.k, cx + a * KV.k, axis)} y2={cy} stroke={INK_SOFT} strokeWidth={3} />
					<line x1={cx} y1={cy + 2} x2={lerp(cx, cx + a * KV.k, prog(f, semi, 20))} y2={cy + 2} stroke={NAVY.stroke} strokeWidth={9} />
				</g> : null}
				{f >= from ? <g opacity={prog(f, from, 12)}>
					<line x1={F1[0]} y1={F1[1]} x2={P[0]} y2={P[1]} stroke={NAVY.stroke} strokeWidth={3.5} />
					<line x1={F2[0]} y1={F2[1]} x2={P[0]} y2={P[1]} stroke={NAVY.stroke} strokeWidth={3.5} strokeDasharray="10 7" />
					<circle cx={P[0]} cy={P[1]} r={10} fill={INK} stroke={CARD} strokeWidth={3} />
				</g> : null}
				{sunP > 0 ? <g opacity={sunP}><Sun cx={F1[0]} cy={F1[1]} d={60} /></g> : null}
				<g opacity={prog(f, foci, 12)}><Focus x={F1[0]} y={F1[1]} /><Focus x={F2[0]} y={F2[1]} /></g>
				{f >= closest ? <g opacity={prog(f, closest, 12)}><circle cx={cx - a * KV.k} cy={cy} r={9} fill={INK} /></g> : null}
				{f >= aph ? <g opacity={prog(f, aph, 12)}><circle cx={cx + a * KV.k} cy={cy} r={9} fill={INK} /></g> : null}
				<Ring cx={1270} cy={845} rx={110} ry={40} at={circle + 30} color={NAVY.stroke} />
			</FrameSvg>
			<Lbl x={F2[0]} y={F2[1] + 44} at={empty} out={squash} color={GREY.ink} anchor="middle" size={30}>empty</Lbl>
			<HandTag x={F2[0] + 20} y={F2[1] + 90} text="nothing here" at={empty + 10} out={squash} size={30} color={GREY.ink} />
			<Lbl x={cx + (a * KV.k) / 2} y={cy - 24} at={semi} color={NAVY.ink} anchor="middle" size={32}>a</Lbl>
			<Lbl x={cx - a * KV.k - 14} y={cy + 52} at={closest} color={INK} size={30}>perihelion (closest)</Lbl>
			<Lbl x={cx + a * KV.k + 14} y={cy - 30} at={aph} color={INK} anchor="end" size={30}>aphelion (furthest)</Lbl>
			<Lbl x={cx} y={cy + b * KV.k + 50} at={-30} color={GREY.ink} anchor="middle" size={28}>stretched for clarity</Lbl>
			<Readouts x={1080} y={186} w={744} size={52} at={from} rows={[
				{label: 'd₁ (to the Sun focus)', value: fx(d1, 2), color: NAVY.ink},
				{label: 'd₂ (to the other focus)', value: fx(d2, 2), color: NAVY.ink},
				{label: 'd₁ + d₂', value: fx(d1 + d2, 2), color: INK},
			]} />
			<HandTag x={1100} y={500} text="sum stays the same" at={total} size={32} color={NAVY.ink} />
			<Row at={semi} size={40} style={{position: 'absolute', left: 1080, top: 540, width: 744, whiteSpace: 'normal'}}><span style={{color: NAVY.ink}}>a: semi-major axis = half the longest width</span></Row>
			<Enter at={squash} style={{position: 'absolute', left: 1080, top: 650, width: 744}}>
				<svg width={744} height={110} style={{overflow: 'visible'}}>
					<line x1={20} y1={40} x2={600} y2={40} stroke={INK_SOFT} strokeWidth={7} strokeLinecap="round" />
					<circle cx={20 + 580 * (1 - e / 0.6)} cy={40} r={16} fill={NAVY.stroke} stroke={CARD} strokeWidth={4} />
					<T x={20} y={96} size={28} color={INK_SOFT} weight={700}>more stretched</T>
					<T x={600} y={96} size={28} color={INK_SOFT} weight={700} anchor="end">circle</T>
				</svg>
			</Enter>
			<Row at={circle} size={48} style={{position: 'absolute', left: 1180, top: 810}}><MarkSpan kind="circle" at={where} color={NAVY.stroke}><span style={{color: NAVY.ink}}>a = r</span></MarkSpan></Row>
			<LawSlot n={1} at={first} fillAt={circle} text="shape: ellipse, Sun at one focus" x={96} y={186} w={760} size={30} />
		</>
	);
};

// ---------- 4. law 2: equal areas in equal times ----------
const MONTH = 1 / 12;
const YEARF = 360;
export const S04: React.FC = () => {
	const id = 'law-2-areas';
	const f = useCurrentFrame();
	const second = cue(id, 'second law'), equal = cue(id, 'equal areas'), near = cue(id, 'Near the Sun'), path = cue(id, 'stretch of its path'), far = cue(id, 'Far away'), job = cue(id, 'does the job'), so = cue(id, 'So a planet'), fastest = cue(id, 'fastest at perihelion');
	const t = Math.max(0, f - 10) / YEARF;
	const hd = head(KV, RUN_TEACH, t);
	const month = Math.floor(t / MONTH);
	const lapStart = Math.floor(t) * 12;
	const shown = Array.from({length: month - lapStart + 1}, (_, k) => lapStart + k).filter(m => m >= 0);
	const cur = sector(KV, RUN_TEACH, Math.max(0, t - MONTH), t);
	const pPulse = (at0: number) => 1 + 0.6 * Math.sin(Math.PI * Math.max(0, Math.min(1, (f - at0) / 30)));
	const sPeri = sector(KV, RUN_TEACH, -MONTH / 2, MONTH / 2), sAph = sector(KV, RUN_TEACH, 0.5 - MONTH / 2, 0.5 + MONTH / 2);
	const peri = head(KV, RUN_TEACH, 0), aph = head(KV, RUN_TEACH, 0.5);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				{shown.map(m => { const s = sector(KV, RUN_TEACH, m * MONTH, Math.min(t, (m + 1) * MONTH)); return <path key={m} d={s.d} fill={m % 2 ? '#f6dcae' : '#fbe9c9'} stroke={AMBER.stroke} strokeWidth={1.5} />; })}
				{f >= path ? <path d={sPeri.d} fill="#f3c98a" stroke={AMBER.stroke} strokeWidth={3 * pPulse(path)} opacity={prog(f, path, 10)} /> : null}
				{f >= job ? <path d={sAph.d} fill="#f3c98a" stroke={AMBER.stroke} strokeWidth={3 * pPulse(job)} opacity={prog(f, job, 10)} /> : null}
				<path d={ellipseD(KV, TEACH.a, TEACH.e)} fill="none" stroke={NAVY.stroke} strokeWidth={4} />
				<Sun cx={KV.sx} cy={KV.sy} d={60} />
				<line x1={KV.sx} y1={KV.sy} x2={hd.x} y2={hd.y} stroke={NAVY.stroke} strokeWidth={3.5} />
				<VecArrow x={hd.x + hd.ux * 20} y={hd.y + hd.uy * 20} dx={hd.ux * hd.kms * 2.4} dy={hd.uy * hd.kms * 2.4} color={TEAL.stroke} width={6} head={18} />
				<Mars cx={hd.x} cy={hd.y} d={40} />
				{f >= so ? <g opacity={prog(f, so, 12)}>
					<VecArrow x={peri.x} y={peri.y + 30} dx={peri.ux * TEACH.vpKms * 2.4} dy={peri.uy * TEACH.vpKms * 2.4} color={TEAL.stroke} width={7} head={20} />
					<VecArrow x={aph.x} y={aph.y - 30} dx={aph.ux * TEACH.vaKms * 2.4} dy={aph.uy * TEACH.vaKms * 2.4} color={TEAL.stroke} width={7} head={20} />
				</g> : null}
				<Ring cx={1700} cy={372} rx={130} ry={34} at={job + 30} color={NAVY.stroke} />
			</FrameSvg>
			<Lbl x={KV.sx + 0.6 * KV.k} y={KV.sy + 0.8 * KV.k + 50} at={-30} color={GREY.ink} anchor="middle" size={28}>teaching orbit, not a real planet (a = 1 AU)</Lbl>
			<Lbl x={peri.x - 30} y={peri.y - 210} at={path} color={AMBER.ink} anchor="end" size={30}>long arc</Lbl>
			<Lbl x={aph.x + 20} y={aph.y - 140} at={job} color={AMBER.ink} anchor="end" size={30}>short arc</Lbl>
			<HandTag x={peri.x - 30} y={peri.y + 170} text="fast" at={so} size={34} color={TEAL.ink} anchor="end" />
			<HandTag x={aph.x - 20} y={aph.y + 120} text="slow" at={so + 10} size={34} color={TEAL.ink} anchor="end" />
			<Readouts x={1080} y={186} w={744} size={52} at={second} rows={[
				{label: 'r', value: `${fx(hd.r, 2)} AU`, color: NAVY.ink},
				{label: 'v', value: `${fx(hd.kms, 1)} km s⁻¹`, color: TEAL.ink},
				{label: 'area this month', value: `${fx(t >= MONTH ? cur.area : TEACH.area, 3)} AU²`, color: AMBER.ink},
			]} />
			<Row at={equal} size={36} style={{position: 'absolute', left: 1080, top: 520, width: 744, whiteSpace: 'normal'}}>equal areas in equal times</Row>
			<Row at={near} size={34} style={{position: 'absolute', left: 1080, top: 580, width: 744, whiteSpace: 'normal'}}>near: short line, so a long stretch of path</Row>
			<Row at={far} size={34} style={{position: 'absolute', left: 1080, top: 630, width: 744, whiteSpace: 'normal'}}>far: long line, so a short stretch</Row>
			<LawSlot n={2} at={second} fillAt={fastest} text="speed: equal areas in equal times, fast when near" x={1080} y={720} w={744} size={30} />
		</>
	);
};

// ---------- 5. why: gravity's components ----------
const CLOSE: View = {sx: 820, sy: 540, k: 400};
const WHOLE: View = {sx: 396, sy: 590, k: 340};
export const S05: React.FC = () => {
	const id = 'gravity-cause';
	const f = useCurrentFrame();
	const always = cue(id, 'always points'), falls = cue(id, 'falls inwards'), along = cue(id, 'along its motion'), up = cue(id, 'speeds up'), wayOut = cue(id, 'On the way out'), slows = cue(id, 'slows down'), work = cue(id, 'does work'), inCircle = cue(id, 'In a circle'), twists = cue(id, 'never twists'), why = cue(id, "That's why");
	const pull = prog(f, why - 10, 30);
	const v = lerpView(CLOSE, WHOLE, pull);
	// The inward leg (before perihelion) until "On the way out", then the outward leg.
	const legT = f < wayOut ? lerp(0.86, 0.975, Math.max(0, Math.min(1, (f - falls) / Math.max(30, wayOut - falls)))) : 1 + lerp(0.025, 0.14, Math.max(0, Math.min(1, (f - wayOut) / Math.max(30, inCircle - wayOut))));
	const hd = head(v, RUN_TEACH, legT);
	const gScale = 90 / Math.hypot(hd.ax, hd.ay);
	const showParts = f >= along;
	const sw = prog(f, why, 20);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<defs><clipPath id="v20close"><rect x={0} y={150} width={1160} height={930} /></clipPath></defs>
				<g clipPath="url(#v20close)">
				{sw > 0 ? [0, 3, 6, 9].map(m => { const s = sector(v, RUN_TEACH, m * MONTH, (m + 1) * MONTH); return <path key={m} d={s.d} fill="#f6dcae" stroke={AMBER.stroke} strokeWidth={2 + 2 * Math.sin(Math.PI * Math.min(1, (f - why) / 30))} opacity={sw} />; }) : null}
				<path d={ellipseD(v, TEACH.a, TEACH.e)} fill="none" stroke={NAVY.stroke} strokeWidth={4} />
				<Sun cx={v.sx} cy={v.sy} d={70} />
				<VecArrow x={hd.x} y={hd.y} dx={hd.ux * hd.kms * 2.6} dy={hd.uy * hd.kms * 2.6} color={TEAL.stroke} width={7} head={20} at={falls} />
				<VecArrow x={hd.x} y={hd.y} dx={hd.ax * gScale * 1.6} dy={hd.ay * gScale * 1.6} color={AMBER.stroke} width={7} head={20} at={always} />
				{showParts ? <g opacity={prog(f, along, 14) * (1 - pull)}>
					<VecArrow x={hd.x} y={hd.y} dx={hd.along[0] * gScale * 1.6} dy={hd.along[1] * gScale * 1.6} color={AMBER.stroke} width={5} head={16} dash="10 7" />
					<VecArrow x={hd.x} y={hd.y} dx={hd.across[0] * gScale * 1.6} dy={hd.across[1] * gScale * 1.6} color={GREY.stroke} width={5} head={16} dash="10 7" />
				</g> : null}
				<Mars cx={hd.x} cy={hd.y} d={56} />
				</g>
				{f >= inCircle ? <g opacity={prog(f, inCircle, 14)}>
					<rect x={1180} y={560} width={300} height={300} rx={18} fill={CARD} stroke="rgba(60,45,20,0.16)" strokeWidth={2.5} />
					<circle cx={1330} cy={720} r={100} fill="none" stroke={NAVY.stroke} strokeWidth={3} strokeDasharray="10 8" />
					<Sun cx={1330} cy={720} d={30} />
					<VecArrow x={1330} y={620} dx={110} dy={0} color={TEAL.stroke} width={6} head={18} />
					<VecArrow x={1330} y={620} dx={0} dy={70} color={AMBER.stroke} width={6} head={18} />
					<path d="M1350,620 L1350,640 L1330,640" fill="none" stroke={INK} strokeWidth={3} />
					<circle cx={1330} cy={620} r={9} fill={INK} />
				</g> : null}
				<Ring cx={1340} cy={630} rx={40} ry={40} at={inCircle + 30} color={AMBER.stroke} />
			</FrameSvg>
			{showParts && pull < 0.5 ? <>
				<Lbl x={hd.x + hd.along[0] * gScale * 1.6 + 16} y={hd.y + hd.along[1] * gScale * 1.6 + 36} at={along} color={AMBER.ink} size={32}>{f < wayOut ? 'part along the motion' : 'part against it'}</Lbl>
				<Lbl x={hd.x + hd.across[0] * gScale * 1.6 - 14} y={hd.y + hd.across[1] * gScale * 1.6 - 10} at={along + 10} color={GREY.ink} anchor="end" size={30}>part across</Lbl>
			</> : null}
			<Lbl x={v.sx + 50} y={v.sy - 40} at={always} color={AMBER.ink} size={30}>gravity: towards the Sun</Lbl>
			<HandTag x={1180} y={540} text="v at 90° to gravity" at={inCircle + 20} size={30} color={AMBER.ink} />
			<Readouts x={1180} y={186} w={644} size={52} at={falls} rows={[{label: 'speed', value: `${fx(hd.kms, 1)} km s⁻¹`, color: TEAL.ink}]} />
			<div style={{position: 'absolute', left: 1180, top: 330, display: 'flex', flexDirection: 'column', gap: 8, width: 644}}>
				<Row at={up} size={34}><span style={{color: AMBER.ink}}>way in: part along the motion: speeds up</span></Row>
				<Row at={slows} size={34}><span style={{color: AMBER.ink}}>way out: part against it: slows down</span></Row>
				<Row at={work} size={32}>gravity does work in, against it out</Row>
			</div>
			<Enter at={twists} style={{position: 'absolute', left: 1500, top: 560, width: 324}}>
				<div style={{...card, padding: '8px 16px 10px'}}><div style={{...DISPLAY(32, INK, 800), whiteSpace: 'normal'}}>force through the Sun: no moment arm, no twist (torque = 0)</div></div>
			</Enter>
			<Row at={why} size={44} style={{position: 'absolute', left: 96, top: 870}}><AnswerBox at={why + 10}><span>so the area swept each month stays the same</span></AnswerBox></Row>
		</>
	);
};
