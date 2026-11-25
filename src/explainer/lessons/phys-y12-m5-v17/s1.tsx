// Scenes 1 to 6: the hook (opening on last time's Earth and Moon, then the two-sphere bench and the ground
// panel), the law (camera push to the equation stage), measuring r from the centres (the pull back to the
// Earth plate and the near and far pulls adding tip to tail), mass (the discs double and the force bar
// doubles twice), distance (the spreading spheres with 1, 4 and 9 patches), and the test (the explorer with
// its separation slider, F against r, then F against 1/r squared).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Countdown, DrawPath, Enter, prog} from '../../kit';
import {FrameSvg, HandTag, MarkSpan, SceneHeading, kf} from '../../math/studio';
import {CARD, INK, INK_SOFT, TYPE} from '../../shared/tokens';
import {Bracket, Chip, CrossedChip, DISPLAY, Readouts, Row, VecArrow} from '../../physics/projectile/board';
import {V16FinalFrame} from '../phys-y12-m5-v16/s3';
import {HEAD, HEAD_SIZE, SPH, cue, hold, mono} from './common';
import {AMBER, AxesG, BenchSpheres, Earth, GREY, GroundPanel, Lbl, NAVY, Ring, SLATE, Sphere, T, VIOLET, benchGeom, fx, gmap, sci} from './parts';
import type {GraphG} from './parts';

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const card: React.CSSProperties = {background: CARD, borderRadius: 18, boxShadow: '0 10px 26px rgba(60,45,20,0.12)', padding: '10px 24px 14px', border: '2.5px solid rgba(60,45,20,0.16)'};
/** The law in one strip, with optional marks on M, m and r squared. */
export const Law: React.FC<{size?: number; mAt?: number; MAt?: number; r2At?: number; r2Role?: string}> = ({size = 60, mAt, MAt, r2At, r2Role = AMBER.stroke}) => (
	<span style={{...DISPLAY(size, INK)}}>
		<span style={{color: AMBER.ink}}>F</span> = G{MAt === undefined ? 'M' : <MarkSpan kind="circle" at={MAt} color={AMBER.stroke}>M</MarkSpan>}{mAt === undefined ? 'm' : <MarkSpan kind="circle" at={mAt} color={AMBER.stroke}>m</MarkSpan>} / {r2At === undefined ? <span style={{color: NAVY.ink}}>r²</span> : <MarkSpan kind="circle" at={r2At} color={r2Role}><span style={{color: NAVY.ink}}>r²</span></MarkSpan>}
	</span>
);
/** The scene-1 option chips (mass, distance); `tickAt` ticks mass, `noteAt` notes distance. */
export const OptionChips: React.FC<{x: number; y: number; at: number; tickAt?: number}> = ({x, y, at, tickAt}) => {
	const f = useCurrentFrame();
	const tk = tickAt === undefined ? 0 : prog(f, tickAt, 12);
	return (
		<Enter at={at} style={{position: 'absolute', left: x, top: y, display: 'flex', gap: 14}}>
			<div style={{background: '#f1ebdf', border: `${tk > 0 ? 4.5 : 2.5}px solid ${tk > 0 ? INK : 'rgba(60,45,20,0.16)'}`, borderRadius: 14, padding: '6px 18px 8px', ...DISPLAY(36, INK, 700)}}>mass{tk > 0 ? <span style={{opacity: tk}}> ✓</span> : null}</div>
			<div style={{background: '#f1ebdf', border: '2.5px solid rgba(60,45,20,0.16)', borderRadius: 14, padding: '6px 18px 8px', ...DISPLAY(36, INK, 700)}}>distance</div>
		</Enter>
	);
};

// ---------- 1. hook: mass or distance? ----------
export const S01: React.FC = () => {
	const id = 'hook';
	const f = useCurrentFrame();
	const seventy = cue(id, 'seventy kilograms'), apart = cue(id, 'apart'), force = cue(id, 'about three point three'), grain = cue(id, 'fine grain'), put = cue(id, 'Put one'), pulls = cue(id, 'Earth pulls'), ninety = cue(id, 'ninety newtons'), billion = cue(id, 'two billion'), think = cue(id, 'Have a think');
	const h = hold(id);
	if (f < 1) return <V16FinalFrame />;
	const old = prog(f, 1, 60);
	const slide = 1 - prog(f, put, 24);
	const kb = prog(f, put - 6, 24);
	const bppm = lerp(720, 520, kb), bx0 = lerp(290, 260, kb), mid = bx0 + (bppm * SPH.d) / 2;
	return (
		<>
			{old < 1 ? <div style={{position: 'absolute', inset: 0, opacity: 1 - old, transform: `scale(${1 - 0.7 * old})`, transformOrigin: '1824px 110px'}}><V16FinalFrame /></div> : null}
			<FrameSvg>
				<g opacity={prog(f, 18, 20)}><BenchSpheres x={bx0} y={470} ppm={bppm} size={40} tagsAt={seventy} bracketAt={apart} arrowsAt={force} /></g>
				{f >= put ? <g transform={`translate(${slide * 900},0)`} opacity={prog(f, put, 16)}><GroundPanel x={1060} y={170} w={760} h={560} arrowAt={pulls} labelAt={ninety} /></g> : null}
				<Countdown start={h.startFrame} end={h.endFrame} x={1150} y={800} r={50} ringFrom={think} />
			</FrameSvg>
			<Lbl x={mid} y={420} at={force + 8} color={AMBER.ink} anchor="middle" size={44}>F = {sci(SPH.F)} N</Lbl>
			<HandTag x={mid} y={520} text="tiny" at={force + 30} size={TYPE.handSmall} color={AMBER.ink} anchor="middle" />
			<Lbl x={mid} y={706} at={grain} color={GREY.ink} anchor="middle" size={32}>about the weight of a fine grain of sand</Lbl>
			<HandTag x={1560} y={500} text="huge" at={ninety + 16} size={TYPE.hand} color={AMBER.ink} />
			<Lbl x={1560} y={868} at={billion} color={AMBER.ink} anchor="middle" size={52}>× 2 × 10⁹</Lbl>
			<FrameSvg><Ring cx={1560} cy={854} rx={150} ry={46} at={billion + 16} color={AMBER.stroke} /></FrameSvg>
			<Lbl x={1560} y={790} at={billion - 10} color={INK} anchor="middle" size={32}>Earth's pull is stronger by</Lbl>
			<Enter at={seventy} style={{position: 'absolute', left: 96, top: 176}}><div style={{display: 'inline-block', background: NAVY.soft, border: `3px solid ${NAVY.stroke}`, borderRadius: 14, padding: '4px 20px 8px', ...DISPLAY(44, NAVY.ink, 800)}}>two steel spheres: 70 kg each, centres 1.0 m apart</div></Enter>
			<Enter at={think} style={{position: 'absolute', left: 96, top: 790}}>
				<div style={{...DISPLAY(40, INK, 800)}}>Earth's mass, or its distance?</div>
			</Enter>
			<OptionChips x={720} y={782} at={think + 8} />
		</>
	);
};

// ---------- 2. the law ----------
/** Scene-2 layout of the bench and ground panel (the push to the equation stage). */
export const B2 = {x: 220, y: 330, ppm: 360};
export const P2 = {x: 96, y: 520, w: 600, h: 400};
export const S02: React.FC = () => {
	const id = 'the-law';
	const f = useCurrentFrame();
	const every = cue(id, 'every mass attracts'), force = cue(id, 'The force is'), masses = cue(id, 'the two masses'), dist = cue(id, 'divided by the distance'), squared = cue(id, 'them squared'), bigG = cue(id, 'Big G is'), tiny = cue(id, "it's tiny"), other = cue(id, 'towards the other'), third = cue(id, "Newton's third law"), opposite = cue(id, 'opposite'), whole = cue(id, 'pulls the whole Earth');
	const p = prog(f, 0, 30);
	const bx = lerp(260, B2.x, p), by = lerp(450, B2.y, p), ppm = lerp(520, B2.ppm, p);
	const px = lerp(1060, P2.x, p), py = lerp(170, P2.y, p), pw = lerp(760, P2.w, p), ph = lerp(560, P2.h, p);
	return (
		<>
			<SceneHeading text={HEAD} at={6} size={HEAD_SIZE} />
			<FrameSvg>
				<BenchSpheres x={bx} y={by} ppm={ppm} size={32} bracketAt={-60} arrowsAt={-60} arrowLen={lerp(26, 22, p)} lineAt={other} pulse={opposite} />
				<GroundPanel x={px} y={py} w={pw} h={ph} arrowAt={-60} labelAt={-60} upAt={whole} pulse={opposite} size={32} />
			</FrameSvg>
			<HandTag x={B2.x + 150} y={B2.y - 110} text="same size, opposite way" at={opposite + 20} size={30} color={AMBER.ink} anchor="middle" />
			<div style={{position: 'absolute', left: 780, top: 186, display: 'flex', flexDirection: 'column', gap: 10}}>
				<Row at={every} size={40}>Every mass attracts every other mass.</Row>
				<Row at={force} size={72}><Law size={72} r2At={squared + 6} /></Row>
				<Row at={masses} size={36}><span style={{color: INK}}>M, m: the two masses (kg)</span></Row>
				<Row at={dist} size={36}><span style={{color: NAVY.ink}}>r: the distance between them (m)</span></Row>
				<Row at={force + 20} size={36}><span style={{color: AMBER.ink}}>F: the pull on each mass (N)</span></Row>
			</div>
			<Enter at={bigG} style={{position: 'absolute', left: 780, top: 560}}>
				<div style={{display: 'inline-block', background: NAVY.soft, border: `4px solid ${NAVY.stroke}`, borderRadius: 14, padding: '6px 22px 10px', ...DISPLAY(40, NAVY.ink, 800)}}>G = 6.67 × 10⁻¹¹ N m² kg⁻²</div>
			</Enter>
			<Lbl x={790} y={676} at={bigG + 20} color={GREY.ink} size={30}>the HSC data sheet value</Lbl>
			<HandTag x={1440} y={676} text="tiny G" at={tiny} size={TYPE.handSmall} color={NAVY.ink} />
			<Row at={third} size={44} style={{position: 'absolute', left: 780, top: 740, color: AMBER.ink}}>equal and opposite (third law)</Row>
			<Row at={whole + 10} size={36} style={{position: 'absolute', left: 780, top: 820}}>The sphere pulls Earth up with 690 N too.</Row>
		</>
	);
};

// ---------- 3. measure from the centres ----------
const E3 = {cx: 450, top: 330, R: 260};
/** The five patches (in Earth radii from the centre, y down) and the sketch length of each pull at the sphere. */
const PATCHES: [number, number][] = [[0, -0.62], [-0.45, -0.45], [0.45, -0.45], [-0.5, 0.55], [0.5, 0.55]];
const pulls3 = () => {
	const P: [number, number] = [E3.cx, E3.top];
	return PATCHES.map(([u, v]) => {
		const q: [number, number] = [E3.cx + u * E3.R, E3.top + E3.R + v * E3.R];
		const dx = q[0] - P[0], dy = q[1] - P[1], d = Math.hypot(dx, dy);
		const L = 100 * (0.38 * E3.R / d);
		return {q, a: [(dx / d) * L, (dy / d) * L] as [number, number]};
	});
};
export const S03: React.FC = () => {
	const id = 'centre-distance';
	const f = useCurrentFrame();
	const centres = cue(id, 'between the centres'), butFor = cue(id, 'But for a sphere'), notZero = cue(id, "isn't zero"), radius = cue(id, "It's Earth's radius"), metres = cue(id, 'million metres'), why = cue(id, 'Why the centre'), near = cue(id, 'near side'), harder = cue(id, 'pulls harder'), far = cue(id, 'far side'), angle = cue(id, 'at an angle'), addUp = cue(id, 'add up'), centre = cue(id, 'at the centre'), outside = cue(id, 'only works outside');
	// Phase A: the bench, larger, centres marked; Phase B: the pull back to the Earth plate.
	const pa = prog(f, 0, 24);
	const bx = lerp(B2.x, 220, pa), by = lerp(B2.y, 470, pa), ppm = lerp(B2.ppm, 440, pa);
	const benchOut = prog(f, butFor, 16);
	const g = benchGeom(bx, by, ppm);
	const k = kf(f, mono([[butFor, 10], [radius, 10], [radius + 60, 1]], 10));
	const eo = prog(f, butFor, 14);
	const ecy = E3.top + E3.R * k;
	const ds = Math.max(0, (120 * (k - 1)) / 9);
	const P: [number, number] = [E3.cx, E3.top];
	const lineAt = radius + 60;
	const pl = pulls3();
	const chainU = (i: number) => prog(f, addUp + i * 8, 24);
	const starts: [number, number][] = [];
	{ let s: [number, number] = [...P]; for (const p of pl) { starts.push(s); s = [s[0] + p.a[0], s[1] + p.a[1]]; } }
	const sum = pl.reduce((s, p) => [s[0] + p.a[0], s[1] + p.a[1]] as [number, number], [0, 0] as [number, number]);
	const lit = [near, harder, harder + 8, far, far + 8];
	const dashOut = prog(f, addUp - 6, 10);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				{benchOut < 1 ? <g opacity={1 - benchOut}>
					<BenchSpheres x={bx} y={by} ppm={ppm} size={34} bracketAt={-60} arrowsAt={1e9} dotsAt={centres} pulse={centres + 10} />
					<Bracket x1={g.c1[0] + g.d / 2} y1={g.c1[1]} x2={g.c2[0] - g.d / 2} y2={g.c2[1]} color={GREY.stroke} at={centres + 24} label="0.74 m" ly={g.c1[1] - 30} size={32} />
					{f >= centres + 44 ? <g stroke={SLATE.ink} strokeWidth={6} strokeLinecap="round" opacity={prog(f, centres + 44, 8)}><line x1={(g.c1[0] + g.c2[0]) / 2 - 40} y1={g.c1[1] - 60} x2={(g.c1[0] + g.c2[0]) / 2 + 40} y2={g.c1[1] + 6} /><line x1={(g.c1[0] + g.c2[0]) / 2 + 40} y1={g.c1[1] - 60} x2={(g.c1[0] + g.c2[0]) / 2 - 40} y2={g.c1[1] + 6} /></g> : null}
				</g> : null}
				{eo > 0 ? <g opacity={eo}>
					<Earth cx={E3.cx} cy={ecy} d={2 * E3.R * k} />
					{ds > 1 ? <Sphere cx={E3.cx} cy={E3.top - ds / 2} d={ds} /> : null}
					{k < 3 ? <circle cx={E3.cx} cy={E3.top - 6} r={9} fill={GREY.stroke} stroke={CARD} strokeWidth={2.5} opacity={prog(f, radius + 40, 12)} /> : null}
				</g> : null}
				{f >= lineAt ? <g opacity={prog(f, lineAt, 14)}>
					<line x1={E3.cx} y1={E3.top + E3.R} x2={E3.cx} y2={E3.top - 6} stroke={NAVY.stroke} strokeWidth={5} />
					<circle cx={E3.cx} cy={E3.top + E3.R} r={7} fill={NAVY.stroke} />
				</g> : null}
				{pl.map((p, i) => f >= lit[i] ? <g key={i} opacity={prog(f, lit[i], 12)}>
					<circle cx={p.q[0]} cy={p.q[1]} r={24} fill={AMBER.soft} stroke={AMBER.stroke} strokeWidth={4} />
					{dashOut < 1 ? <line x1={P[0] + p.a[0]} y1={P[1] + p.a[1]} x2={p.q[0]} y2={p.q[1]} stroke={AMBER.stroke} strokeWidth={2.5} strokeDasharray="6 7" opacity={1 - dashOut} /> : null}
				</g> : null)}
				{pl.map((p, i) => {
					const u = chainU(i);
					const s: [number, number] = [lerp(P[0], starts[i][0], u), lerp(P[1], starts[i][1], u)];
					return <g key={i}><VecArrow x={s[0]} y={s[1]} dx={p.a[0]} dy={p.a[1]} color={CARD} width={14} head={24} at={lit[i] + 4} /><VecArrow x={s[0]} y={s[1]} dx={p.a[0]} dy={p.a[1]} color={AMBER.ink} width={7} head={18} at={lit[i] + 4} /></g>;
				})}
				<VecArrow x={P[0] - 40} y={P[1]} dx={0} dy={sum[1]} color={CARD} width={17} head={30} at={centre - 10} dur={18} /><VecArrow x={P[0] - 40} y={P[1]} dx={0} dy={sum[1]} color={AMBER.stroke} width={10} head={26} at={centre - 10} dur={18} />
				{f >= centre ? <g opacity={prog(f, centre, 10)}><circle cx={E3.cx} cy={E3.top + E3.R} r={13} fill={NAVY.stroke} stroke={CARD} strokeWidth={3} /></g> : null}
				<Ring cx={E3.cx} cy={E3.top + E3.R} rx={34} ry={30} at={centre + 14} color={NAVY.stroke} />
			</FrameSvg>
			<HandTag x={440} y={700} text="centre to centre" at={centres + 30} out={butFor} size={TYPE.handSmall} color={NAVY.ink} anchor="middle" />
			<Lbl x={E3.cx + 22} y={E3.top + 130} at={lineAt + 6} out={near - 10} color={NAVY.ink} size={44}>r</Lbl>
			<Lbl x={E3.cx} y={E3.top + 2 * E3.R + 50} at={metres} color={NAVY.ink} anchor="middle" size={32}>r = R = {sci(6.371e6, 3)} m (Earth's radius)</Lbl>
			<Lbl x={E3.cx + 30} y={E3.top + 110} at={centre} color={AMBER.ink} size={30}>total pull</Lbl>
			<Lbl x={E3.cx + 30} y={E3.top + E3.R + 56} at={centre + 10} color={NAVY.ink} size={30}>all the mass acts as if here</Lbl>
			<div style={{position: 'absolute', left: 960, top: 186, display: 'flex', flexDirection: 'column', gap: 8, width: 864}}>
				<Row at={centres} size={44}><span style={{color: NAVY.ink}}>r runs from centre to centre</span></Row>
			</div>
			<CrossedChip x={960} y={262} at={notZero} crossAt={radius} size={34} caption="r is measured to Earth's centre">sphere on the ground: r = 0</CrossedChip>
			<Row at={metres} size={40} style={{position: 'absolute', left: 960, top: 410}}>on Earth: r = R = {sci(6.371e6, 3)} m</Row>
			<Enter at={why} style={{position: 'absolute', left: 960, top: 490, width: 864}}>
				<div style={card}>
					<div style={{...DISPLAY(28, INK_SOFT, 800), textTransform: 'uppercase', letterSpacing: 1.5}}>Why the centre?</div>
					<div style={{...DISPLAY(34, AMBER.ink, 800), opacity: prog(f, near, 12)}}>near rock: pulls harder, straight down</div>
					<div style={{...DISPLAY(34, AMBER.ink, 800), opacity: prog(f, angle, 12)}}>far rock: pulls weaker, at an angle</div>
					<div style={{...DISPLAY(34, INK, 800), opacity: prog(f, addUp + 30, 12)}}>tip to tail: the sideways parts cancel</div>
					<div style={{...DISPLAY(34, NAVY.ink, 800), opacity: prog(f, centre, 12)}}>total = all the mass at the centre</div>
				</div>
			</Enter>
			<Chip x={960} y={800} at={outside} size={36} border={NAVY.stroke} color={NAVY.ink}>spherical body: true outside the surface</Chip>
		</>
	);
};

// ---------- 4. mass: proportional ----------
const D4 = {M: [330, 580] as [number, number], m: [940, 580] as [number, number], rM: 86, rm: 40};
const Disc: React.FC<{c: [number, number]; r: number; label: string; size?: number; glow?: number}> = ({c, r, label, size = 44, glow = 0}) => (
	<g>
		<circle cx={c[0]} cy={c[1]} r={r} fill="#e4dccb" stroke={INK} strokeWidth={4 + 4 * glow} />
		<T x={c[0]} y={c[1] + size * 0.36} size={size} anchor="middle">{label}</T>
	</g>
);
const BarF: React.FC<{x: number; base: number; hU: number; v: number; label: React.ReactNode; at?: number; w?: number; color?: string}> = ({x, base, hU, v, label, at = -60, w = 120, color = AMBER.stroke}) => {
	const p = prog(useCurrentFrame(), at, 16);
	if (p <= 0) return null;
	return (
		<g opacity={p}>
			<rect x={x} y={base - hU * v} width={w} height={hU * v} fill={AMBER.soft} stroke={color} strokeWidth={4} />
			<T x={x + w / 2} y={base - hU * v - 14} size={40} color={AMBER.ink} anchor="middle">{label}</T>
		</g>
	);
};
export const S04: React.FC = () => {
	const id = 'mass-factor';
	const f = useCurrentFrame();
	const prop = cue(id, 'proportional to each'), doubles = cue(id, 'pull doubles'), again = cue(id, 'doubles again'), bigger = cue(id, 'So a bigger');
	const kM = kf(f, mono([[doubles, 1], [doubles + 16, Math.SQRT2]], 6)), km = kf(f, mono([[again, 1], [again + 16, Math.SQRT2]], 6));
	const Fv = kf(f, mono([[doubles, 1], [doubles + 16, 2], [again, 2], [again + 16, 4]], 6));
	const rM = D4.rM * kM, rm = D4.rm * km;
	const aL = 36 * Fv;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<g opacity={prog(f, 0, 14)}>
					<line x1={D4.M[0]} y1={D4.M[1]} x2={D4.m[0]} y2={D4.m[1]} stroke={NAVY.stroke} strokeWidth={3} strokeDasharray="10 8" />
					<Disc c={D4.M} r={rM} label={kM > 1.2 ? '2M' : 'M'} glow={Math.sin(Math.PI * Math.max(0, Math.min(1, (f - doubles) / 30)))} />
					<Disc c={D4.m} r={rm} label={km > 1.2 ? '2m' : 'm'} size={36} glow={Math.sin(Math.PI * Math.max(0, Math.min(1, (f - again) / 30)))} />
					<line x1={D4.M[0]} y1={D4.M[1] + 150} x2={D4.m[0]} y2={D4.m[1] + 150} stroke={NAVY.stroke} strokeWidth={4} />
					<line x1={D4.M[0]} y1={D4.M[1] + 138} x2={D4.M[0]} y2={D4.M[1] + 162} stroke={NAVY.stroke} strokeWidth={4} />
					<line x1={D4.m[0]} y1={D4.m[1] + 138} x2={D4.m[0]} y2={D4.m[1] + 162} stroke={NAVY.stroke} strokeWidth={4} />
					<T x={(D4.M[0] + D4.m[0]) / 2} y={D4.M[1] + 198} size={34} color={NAVY.ink} anchor="middle">r (kept the same)</T>
				</g>
				<VecArrow x={D4.M[0] + rM + 6} y={D4.M[1]} dx={aL} dy={0} color={AMBER.stroke} width={8} head={22} at={4} />
				<VecArrow x={D4.m[0] - rm - 6} y={D4.m[1]} dx={-aL} dy={0} color={AMBER.stroke} width={8} head={22} at={4} />
				<line x1={1240} y1={860} x2={1780} y2={860} stroke={INK} strokeWidth={4} />
				<BarF x={1280} base={860} hU={88} v={1} label="F" at={4} />
				<BarF x={1440} base={860} hU={88} v={Math.min(2, Fv)} label={Fv < 1.95 ? '' : '2F'} at={doubles} />
				<BarF x={1600} base={860} hU={88} v={Math.max(2, Fv)} label={Fv < 3.9 ? '' : '4F'} at={again} />
				<Ring cx={1660} cy={490} rx={70} ry={40} at={bigger} color={AMBER.stroke} />
			</FrameSvg>
			<Lbl x={D4.M[0]} y={D4.M[1] - 120} at={doubles + 6} color={AMBER.ink} anchor="middle" size={34}>mass × 2</Lbl>
			<Lbl x={D4.m[0]} y={D4.m[1] - 100} at={again + 6} color={AMBER.ink} anchor="middle" size={34}>mass × 2</Lbl>
			<HandTag x={1500} y={636} text="× 2" at={doubles + 14} size={TYPE.hand} color={AMBER.ink} anchor="middle" />
			<HandTag x={1740} y={420} text="× 2" at={again + 14} size={TYPE.hand} color={AMBER.ink} anchor="middle" />
			<Lbl x={1510} y={905} at={4} color={INK_SOFT} anchor="middle" size={28}>force on each mass</Lbl>
			<Readouts x={1240} y={176} w={560} size={44} at={prop} title="compared with the start" rows={[
				{label: 'Earth mass M', value: `× ${kM > 1.2 ? 2 : 1}`, color: INK},
				{label: 'sphere mass m', value: `× ${km > 1.2 ? 2 : 1}`, color: INK},
				{label: 'pull F', value: `× ${fx(Fv, 0)}`, color: AMBER.ink},
			]} />
			<div style={{position: 'absolute', left: 96, top: 190, display: 'flex', flexDirection: 'column', gap: 8}}>
				<Row at={prop} size={72}><Law size={72} MAt={doubles + 4} mAt={again + 4} /></Row>
				<Row at={bigger} size={44}><span style={{color: AMBER.ink}}>F ∝ M and F ∝ m</span></Row>
			</div>
		</>
	);
};

// ---------- 5. distance: inverse square ----------
const C5 = {M: [420, 570] as [number, number], u: 105};
const S5Patch: React.FC<{n: number; k: number; at: number; full: number}> = ({n, k, at, full}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 12);
	if (p <= 0) return null;
	const side = 22;
	const a = (-42 * Math.PI) / 180;
	const cx = C5.M[0] + k * C5.u * Math.cos(a), cy = C5.M[1] + k * C5.u * Math.sin(a);
	const shown = f >= full ? n : 1;
	const w = Math.sqrt(shown) * side;
	return (
		<g opacity={p}>
			{Array.from({length: shown}, (_, i) => {
				const r = Math.floor(i / Math.sqrt(shown)), c = i % Math.sqrt(shown);
				return <rect key={i} x={cx - w / 2 + c * side} y={cy - w / 2 + r * side} width={side} height={side} fill={NAVY.soft} stroke={NAVY.stroke} strokeWidth={2.5} />;
			})}
		</g>
	);
};
export const S05: React.FC = () => {
	const id = 'inverse-square';
	const f = useCurrentFrame();
	const spread = cue(id, 'spreading out'), spheres = cue(id, 'bigger spheres'), dbl = cue(id, 'Double the distance'), area = cue(id, 'four times the area'), quarter = cue(id, 'a quarter'), triple = cue(id, 'Triple it'), ninth = cue(id, 'a ninth'), law = cue(id, 'inverse square law'), picture = cue(id, 'a picture');
	const back = prog(f, 0, 24);
	const rM = lerp(D4.rM * Math.SQRT2, 60, back), rm = lerp(D4.rm * Math.SQRT2, 26, back);
	const kPos = kf(f, mono([[0, 0], [24, 1], [dbl, 1], [dbl + 24, 2], [triple, 2], [triple + 24, 3]], 6));
	const mx = kPos === 0 ? D4.m[0] : lerp(D4.m[0], C5.M[0] + kPos * C5.u, Math.min(1, kPos));
	const mPos = kPos >= 1 ? C5.M[0] + kPos * C5.u : mx;
	const Fv = 1 / Math.max(1, kPos) ** 2;
	const ringAt = [spread, spread + 16, spheres];
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<defs><radialGradient id="v17shell" cx="40%" cy="35%" r="70%"><stop offset="0%" stopColor="#ffffff" stopOpacity={0.5} /><stop offset="100%" stopColor="#c9bfa9" stopOpacity={0.35} /></radialGradient></defs>
				{[3, 2, 1].map(k => f >= ringAt[k - 1] ? <circle key={k} cx={C5.M[0]} cy={C5.M[1]} r={k * C5.u} fill="url(#v17shell)" stroke={INK_SOFT} strokeWidth={3} opacity={prog(f, ringAt[k - 1], 16)} /> : null)}
				<S5Patch n={1} k={1} at={spheres + 10} full={0} />
				<S5Patch n={4} k={2} at={spheres + 16} full={area} />
				<S5Patch n={9} k={3} at={spheres + 22} full={ninth} />
				<circle cx={C5.M[0]} cy={C5.M[1]} r={rM} fill="#e4dccb" stroke={INK} strokeWidth={4} />
				<T x={C5.M[0]} y={C5.M[1] + 16} size={44} anchor="middle">M</T>
				<circle cx={mPos} cy={C5.M[1]} r={rm} fill="#e4dccb" stroke={INK} strokeWidth={4} />
				<T x={mPos} y={C5.M[1] + 12} size={32} anchor="middle">m</T>
				<VecArrow x={mPos - rm - 4} y={C5.M[1]} dx={-Math.max(10, 90 * Fv)} dy={0} color={AMBER.stroke} width={7} head={18} at={-30} />
				<line x1={1240} y1={860} x2={1780} y2={860} stroke={INK} strokeWidth={4} />
				<BarF x={1280} base={860} hU={360} v={1} label="F" at={4} />
				<BarF x={1440} base={860} hU={360} v={0.25} label="F ÷ 4" at={quarter} />
				<BarF x={1600} base={860} hU={360} v={1 / 9} label="F ÷ 9" at={ninth} />
				<Ring cx={C5.M[0] + 3 * C5.u * Math.cos(-0.733)} cy={C5.M[1] + 3 * C5.u * Math.sin(-0.733)} rx={56} ry={52} at={ninth + 16} color={AMBER.stroke} />
			</FrameSvg>
			<Lbl x={C5.M[0] + C5.u - 30} y={C5.M[1] + 60} at={24} color={NAVY.ink} size={30} anchor="middle">r</Lbl>
			<Lbl x={C5.M[0] + 2 * C5.u - 20} y={C5.M[1] + 60} at={dbl} color={NAVY.ink} size={30} anchor="middle">2r</Lbl>
			<Lbl x={C5.M[0] + 3 * C5.u - 20} y={C5.M[1] + 60} at={triple} color={NAVY.ink} size={30} anchor="middle">3r</Lbl>
			<Lbl x={1340} y={905} at={4} color={INK_SOFT} anchor="middle" size={28}>at r</Lbl>
			<Lbl x={1500} y={905} at={quarter} color={INK_SOFT} anchor="middle" size={28}>at 2r</Lbl>
			<Lbl x={1660} y={905} at={ninth} color={INK_SOFT} anchor="middle" size={28}>at 3r</Lbl>
			<Lbl x={C5.M[0] + 2 * C5.u * 0.743 + 40} y={C5.M[1] - 2 * C5.u * 0.669 - 10} at={area} color={NAVY.ink} size={30}>area × 4</Lbl>
			<HandTag x={760} y={240} text="2r → area × 4" at={area + 10} size={30} color={NAVY.ink} />
			<HandTag x={760} y={300} text="3r → area × 9" at={ninth + 10} size={30} color={NAVY.ink} />
			<div style={{position: 'absolute', left: 1040, top: 190, display: 'flex', flexDirection: 'column', gap: 8, width: 784}}>
				<Row at={-30} size={52}><Law size={52} r2At={law + 4} /></Row>
				<Row at={law} size={40}><span style={{color: AMBER.ink}}>F ∝ 1/r²: the inverse square law</span></Row>
			</div>
			<Lbl x={1040} y={400} at={picture} color={GREY.ink} size={30}>a picture, not a proof</Lbl>
		</>
	);
};

// ---------- 6. testing it ----------
const G1: GraphG = {ox: 720, oy: 790, w: 440, h: 400, xMax: 4.4, yMax: 1.12};
const G2: GraphG = {ox: 1320, oy: 790, w: 440, h: 400, xMax: 1.12, yMax: 1.12};
const EX = {M: [190, 300] as [number, number], ppu: 85};
const FTXT = ['F', 'F/4', 'F/9', 'F/16'];
const INV = ['1', '0.25', '0.111', '0.0625'];
export const S06: React.FC = () => {
	const id = 'test-graph';
	const f = useCurrentFrame();
	const measure = cue(id, 'measure the force'), zero = cue(id, 'reaches zero'), plot = cue(id, 'But plot'), origin = cue(id, 'the origin'), evidence = cue(id, 'That straight line');
	const s1 = [measure, measure + 40, measure + 80, measure + 120];
	const s2 = [plot + 34, plot + 58, plot + 82, plot + 106];
	const rK = mono([[0, 1], [s1[1] - 14, 1], [s1[1], 2], [s1[2] - 14, 2], [s1[2], 3], [s1[3] - 14, 3], [s1[3], 4], [plot, 4], [plot + 16, 1], [s2[1] - 14, 1], [s2[1], 2], [s2[2] - 14, 2], [s2[2], 3], [s2[3] - 14, 3], [s2[3], 4]], 4);
	const r = kf(f, rK);
	const ri = Math.round(r);
	const curve = Array.from({length: 60}, (_, i) => { const x = 0.95 + (i * (4.4 - 0.95)) / 59; return gmap(G1, x, 1 / (x * x)); }).map(([x, y], i) => `${i ? 'L' : 'M'}${x.toFixed(1)},${y.toFixed(1)}`).join(' ');
	const [ox2, oy2] = gmap(G2, 0, 0), [ex2, ey2] = gmap(G2, 1.08, 1.08);
	const tri = [gmap(G2, 0.45, 0.45), gmap(G2, 0.9, 0.45), gmap(G2, 0.9, 0.9)];
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<circle cx={EX.M[0]} cy={EX.M[1]} r={40} fill="#e4dccb" stroke={INK} strokeWidth={4} />
				<T x={EX.M[0]} y={EX.M[1] + 14} size={36} anchor="middle">M</T>
				<circle cx={EX.M[0] + EX.ppu * r} cy={EX.M[1]} r={22} fill="#e4dccb" stroke={INK} strokeWidth={4} />
				<T x={EX.M[0] + EX.ppu * r} y={EX.M[1] + 10} size={28} anchor="middle">m</T>
				<VecArrow x={EX.M[0] + EX.ppu * r - 26} y={EX.M[1]} dx={-Math.max(8, 40 / (r * r))} dy={0} color={AMBER.stroke} width={6} head={14} />
				<line x1={EX.M[0] + EX.ppu} y1={EX.M[1] + 76} x2={EX.M[0] + 4 * EX.ppu} y2={EX.M[1] + 76} stroke={INK_SOFT} strokeWidth={6} strokeLinecap="round" />
				{[1, 2, 3, 4].map(k => <g key={k}><line x1={EX.M[0] + k * EX.ppu} y1={EX.M[1] + 64} x2={EX.M[0] + k * EX.ppu} y2={EX.M[1] + 88} stroke={INK} strokeWidth={3} /><T x={EX.M[0] + k * EX.ppu} y={EX.M[1] + 124} size={28} anchor="middle" color={INK_SOFT} weight={700}>{k}</T></g>)}
				<circle cx={EX.M[0] + EX.ppu * r} cy={EX.M[1] + 76} r={14} fill={NAVY.stroke} stroke={CARD} strokeWidth={3} />
				<AxesG g={G1} xTitle="r" yTitle="F" xTicks={[[1, '1'], [2, '2'], [3, '3'], [4, '4']]} />
				{s1.map((t, i) => { const [x, y] = gmap(G1, i + 1, 1 / (i + 1) ** 2); return f >= t ? <circle key={i} cx={x} cy={y} r={10} fill={NAVY.stroke} opacity={prog(f, t, 8)} /> : null; })}
				<DrawPath d={curve} at={zero - 10} dur={36} color={INK} width={4} />
				{f >= plot ? <AxesG g={G2} xTitle="1/r²" yTitle="F" xTicks={[[0.25, '¼'], [0.5, '½'], [1, '1']]} opacity={prog(f, plot, 14)} /> : null}
				{s2.map((t, i) => { const v = 1 / (i + 1) ** 2; const [x, y] = gmap(G2, v, v); return f >= t ? <circle key={i} cx={x} cy={y} r={10} fill={NAVY.stroke} opacity={prog(f, t, 8)} /> : null; })}
				<DrawPath d={`M${ex2},${ey2} L${ox2},${oy2}`} at={origin - 16} dur={24} color={INK} width={4} />
				{f >= evidence + 20 ? <path d={`M${tri[0][0]},${tri[0][1]} L${tri[1][0]},${tri[1][1]} L${tri[2][0]},${tri[2][1]}`} fill="none" stroke={VIOLET.stroke} strokeWidth={3} strokeDasharray="8 6" opacity={prog(f, evidence + 20, 12)} /> : null}
				<Ring cx={ox2} cy={oy2} rx={34} ry={30} at={origin + 10} color={NAVY.stroke} />
			</FrameSvg>
			<Readouts x={96} y={500} w={540} size={52} title="model values" rows={[
				{label: 'separation r', value: String(ri), color: NAVY.ink},
				{label: '1/r²', value: INV[ri - 1], color: NAVY.ink},
				{label: 'force', value: FTXT[ri - 1], color: AMBER.ink},
			]} />
			<Lbl x={EX.M[0] - 60} y={EX.M[1] + 166} at={-30} color={INK_SOFT} size={28}>separation slider (masses fixed)</Lbl>
			<Lbl x={G1.ox} y={240} at={measure} color={INK} size={34}>F against r</Lbl>
			<Lbl x={G2.ox} y={240} at={plot} color={INK} size={34}>F against 1/r²</Lbl>
			<Lbl x={tri[0][0] + 20} y={tri[0][1] + 40} at={evidence + 24} color={VIOLET.ink} size={28}>gradient = GMm</Lbl>
			<HandTag x={G1.ox + 120} y={905} text="curve: hard to judge" at={zero + 20} size={30} color={NAVY.ink} />
			<HandTag x={G2.ox + 60} y={905} text="straight: easy to test" at={origin + 24} size={30} color={NAVY.ink} />
			<Chip x={96} y={800} at={evidence} size={30} w={600} border={NAVY.stroke} color={NAVY.ink}>straight line through the origin: F ∝ 1/r²</Chip>
		</>
	);
};
