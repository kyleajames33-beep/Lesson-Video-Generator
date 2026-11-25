// Scenes 6 to 10: how many orders (the camera pulls back to the to-scale order fan; second and third orders from the
// engine, the impossible fourth order crossed), white light (the wavelength slider moving the first-order spot in its
// true colour, then the spectra on an arc with the overlap hatched), why a grating is the better ruler (a broad
// two-slit band against a sharp grating line, the same error bar on both, the painted pocket spectroscope), doing the
// investigation (painted bench, the top view with both first-order angles, the grating tilted 2°, the results table)
// and the memory aid.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading, kf} from '../../math/studio';
import {MemoryCard} from '../../shared/scenes';
import {INK} from '../../shared/tokens';
import {AnswerBox, Chip, CrossedChip, Row} from '../../physics/projectile/board';
import {ANCHOR, LPlate, SPECTRO, anchorAt, placeByAnchor} from '../../physics/light/plates';
import {OpticsBench, PatternGraph, benchGeom} from '../../physics/light/bench';
import type {BenchAt} from '../../physics/light/bench';
import {GratingBar, Ray, SpectrumArc, arcPath, rayEnd} from '../../physics/light/grating';
import {wlColor} from '../../physics/light/spectrum';
import {gratingBrightness} from '../../sims/waves';
import {Slider} from '../phys-y12-m7-v04/parts';
import {D, DL, ERR, HEAD, HEAD_SIZE, LAM, MMAX, ORDERS, PCT_GRAT, PCT_TWO, RED2, S2, SLIDER_NM, TH2, TH3, TWO_ANGLE, VIO3, X2, X3, cap, cue, th1For, tilt} from './common';
import {Arc, Bracket, GREY, Lbl, NAVY, ORANGE, RED, RED_INK, ROSE, SLATE, Strip, TopView, fx, sci} from './parts';
import type {Pt} from './parts';

// ---------- 6. how many orders? ----------
const G6: Pt = [200, 560], L6 = 300;
export const S06: React.FC = () => {
	const id = 'orders';
	const f = useCurrentFrame();
	const where = cue(id, "Where's the second-order spot"), deg2 = cue(id, 'thirty-one point two degrees'), sin1 = cue(id, "sine theta can't be bigger than one"), dl = cue(id, 'three point eight six'), side = cue(id, 'three on each side'), metre = cap(id, cue(id, 'over a metre out'));
	const z = 1.7 - 0.7 * prog(f, 0, 30);
	const o1 = ORDERS.find(o => o.m === 1)?.deg ?? 15;
	const ray = (deg: number, at: number) => ({deg, draw: f < at ? 0 : prog(f, at, 20)});
	const len = (deg: number) => L6 / Math.cos((deg * Math.PI) / 180);
	const fan = [0, o1, -o1, TH2, -TH2, TH3, -TH3];
	const ats = [-30, -30, -30, deg2, deg2, side, side];
	const sx = G6[0] + L6;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<rect x={96} y={180} width={800} height={740} rx={14} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} />
				<g transform={`translate(${G6[0]} ${G6[1]}) scale(${z}) translate(${-G6[0]} ${-G6[1]})`}>
					<line x1={sx} y1={G6[1] - 380} x2={sx} y2={G6[1] + 380} stroke={INK} strokeWidth={2} strokeDasharray="8 8" />
					<line x1={sx} y1={G6[1] - 130} x2={sx} y2={G6[1] + 130} stroke={INK} strokeWidth={7} strokeLinecap="round" />
					{fan.map((d, i) => { const r = ray(d, ats[i]); const e = rayEnd(G6, d, len(d)); return <g key={i}><Ray o={G6} deg={d} len={len(d)} color={RED} width={4} draw={r.draw} />{r.draw > 0.98 ? <circle cx={e[0]} cy={e[1]} r={8} fill={RED} stroke={INK} strokeWidth={2} /> : null}</g>; })}
					<GratingBar x={G6[0]} y0={G6[1] - 50} y1={G6[1] + 50} n={10} />
					<line x1={G6[0] - 120} y1={G6[1]} x2={G6[0]} y2={G6[1]} stroke={RED} strokeWidth={5} />
				</g>
				{f >= side ? <g opacity={prog(f, side + 10, 12)}>
					<Ray o={G6} deg={102} len={260} color={SLATE.stroke} width={4} dash="10 8" />
					<g stroke={SLATE.stroke} strokeWidth={6}><line x1={rayEnd(G6, 102, 200)[0] - 18} y1={rayEnd(G6, 102, 200)[1] - 18} x2={rayEnd(G6, 102, 200)[0] + 18} y2={rayEnd(G6, 102, 200)[1] + 18} /><line x1={rayEnd(G6, 102, 200)[0] + 18} y1={rayEnd(G6, 102, 200)[1] - 18} x2={rayEnd(G6, 102, 200)[0] - 18} y2={rayEnd(G6, 102, 200)[1] + 18} /></g>
				</g> : null}
				{f >= deg2 ? <Arc c={G6} r={120} a0={0} a1={TH2} opacity={prog(f, deg2, 12)} /> : null}
				{f >= metre ? <Bracket a={[sx + 26, G6[1]]} b={[sx + 26, G6[1] - X3 * L6]} n={[-1, 0]} color={ORANGE.stroke} width={5} opacity={prog(f, metre, 10)} /> : null}
			</FrameSvg>
			<Lbl x={120} y={215} at={2} color={GREY.ink} size={26}>from above (to scale: L = 1.00 m)</Lbl>
			<Lbl x={sx - 10} y={G6[1] + 170} at={30} color={INK} size={26} anchor="middle">bench screen</Lbl>
			{[[o1, '+1'], [TH2, '+2'], [TH3, '+3']].map(([d, t]) => <Lbl key={t as string} x={rayEnd(G6, d as number, len(d as number))[0] + 22} y={rayEnd(G6, d as number, len(d as number))[1] + 10} at={t === '+1' ? 30 : t === '+2' ? deg2 + 10 : side + 10} color={INK} size={28}>{`m = ${t}`}</Lbl>)}
			<Lbl x={G6[0] + 135} y={G6[1] - 30} at={deg2 + 6} color={NAVY.ink} size={28}>θ₂</Lbl>
			<HandTag x={G6[0] - 90} y={G6[1] - 290} text="m = 4: impossible" at={side + 20} size={30} color={SLATE.ink} />
			<Lbl x={sx + 50} y={G6[1] - (X3 * L6) / 2} at={metre} color={ORANGE.ink} size={28}>{`x₃ = ${fx(X3, 2)} m: off a small screen`}</Lbl>
			<div style={{position: 'absolute', left: 960, top: 190, display: 'flex', flexDirection: 'column', gap: 10, width: 864}}>
				<Row at={where} ageAt={dl} size={44} oldSize={30}><span style={{whiteSpace: 'nowrap'}}>sin θ₂ = 2λ / d</span></Row>
				<Row at={where + 30} ageAt={dl} size={40} oldSize={30}><span style={{whiteSpace: 'nowrap'}}>{`= (2 × ${sci(LAM, 2)}) / (${sci(D, 1)})`}</span></Row>
				<Row at={deg2 - 6} ageAt={dl} size={52} oldSize={34}><AnswerBox at={deg2}><span style={{whiteSpace: 'nowrap', color: ORANGE.ink}}>{`= ${fx(S2, 3)} → θ₂ = ${fx(TH2, 1)}°`}</span></AnswerBox></Row>
				<Row at={dl - 30} size={44}><span style={{whiteSpace: 'nowrap'}}>{`m ≤ d / λ = (${sci(D, 1)}) / (${sci(LAM, 2)})`}</span></Row>
				<Row at={dl} size={52}><AnswerBox at={dl + 6}><span style={{whiteSpace: 'nowrap', color: ORANGE.ink}}>{`= ${fx(DL, 2)} → highest m = ${MMAX}`}</span></AnswerBox></Row>
			</div>
			<Chip x={960} y={680} at={sin1} size={32} w={300} color={NAVY.ink} border={NAVY.stroke}>sin θ ≤ 1</Chip>
			<CrossedChip x={1300} y={680} at={dl + 20} crossAt={dl + 36} size={30} caption="whole orders that fit: round down">{`${fx(DL, 2)} rounds up to 4`}</CrossedChip>
			<Chip x={960} y={830} at={side} size={32} w={860} color={INK}>{`7 spots: m = 0, ±1, ±2, ±${MMAX}`}</Chip>
			<HandTag x={960} y={790} text="sin θ can't pass 1" at={side + 30} size={32} color={NAVY.ink} />
			<Lbl x={960} y={930} at={deg2 + 10} color={GREY.ink} size={26}>{`x₂ = tan ${fx(TH2, 1)}° × 1.00 m = ${fx(X2, 3)} m`}</Lbl>
		</>
	);
};

// ---------- 7. white light ----------
const G7: Pt = [330, 600], R7 = 380;
export const S07: React.FC = () => {
	const id = 'white-light';
	const f = useCurrentFrame();
	const shine = cue(id, 'Shine white light'), centre = cue(id, 'The centre stays white'), longer = cue(id, 'longer wavelengths come out at bigger angles'), out = cue(id, 'furthest out'), over = cap(id, cue(id, 'second and third orders overlap'));
	const k = f < longer ? 0 : Math.min(2, Math.floor((f - longer) / 28));
	const spread = prog(f, longer + 90, 24);
	const nm = SLIDER_NM[k];
	const th = th1For(nm);
	const nmLive = kf(f, [[longer, 450], [longer + 28, 450], [longer + 34, 532], [longer + 56, 532], [longer + 62, 647]]);
	const o2 = prog(f, over - 10, 16);
	const a3v = (Math.asin((VIO3 * 1e-9) / D) * 180) / Math.PI, a2r = (Math.asin((RED2 * 1e-9) / D) * 180) / Math.PI;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<rect x={96} y={180} width={1100} height={740} rx={14} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} />
				<path d={arcPath(G7, R7, -62, 62)} fill="none" stroke="#cfc6b6" strokeWidth={3} strokeDasharray="8 8" />
				<line x1={G7[0] - 220} y1={G7[1]} x2={G7[0]} y2={G7[1]} stroke="#e9e2d2" strokeWidth={12} strokeLinecap="round" opacity={prog(f, shine, 12)} />
				<line x1={G7[0] - 220} y1={G7[1]} x2={G7[0]} y2={G7[1]} stroke={INK} strokeWidth={1.5} strokeDasharray="4 6" opacity={prog(f, shine, 12)} />
				<Ray o={G7} deg={0} len={R7} color="#e9e2d2" width={10} draw={prog(f, shine + 8, 16)} />
				{f >= centre ? <circle cx={G7[0] + R7} cy={G7[1]} r={16} fill="#fffdf8" stroke={INK} strokeWidth={4} opacity={prog(f, centre, 10)} /> : null}
				{f >= longer && spread < 0.999 ? <g opacity={1 - spread}>
					{[1, -1].map(s => <g key={s}><Ray o={G7} deg={s * th} len={R7} color={wlColor(nm)} width={5} /><circle cx={rayEnd(G7, s * th, R7)[0]} cy={rayEnd(G7, s * th, R7)[1]} r={11} fill={wlColor(nm)} stroke={INK} strokeWidth={2} /></g>)}
				</g> : null}
				{spread > 0.001 ? <g>
					<SpectrumArc c={G7} r={R7} band={22} d={D} m={1} reveal={spread} />
					<SpectrumArc c={G7} r={R7} band={22} d={D} m={1} sign={-1} reveal={spread} />
				</g> : null}
				{o2 > 0.001 ? <g opacity={o2}>
					<SpectrumArc c={G7} r={R7} band={22} d={D} m={2} />
					<SpectrumArc c={G7} r={R7 + 34} band={22} d={D} m={3} />
					<path d={arcPath(G7, R7 + 17, a3v, a2r)} fill="none" stroke={INK} strokeWidth={56} opacity={0.12} />
					{Array.from({length: 7}, (_, i) => { const a = a3v + ((a2r - a3v) * (i + 0.5)) / 7; const p0 = rayEnd(G7, a, R7 - 14), p1 = rayEnd(G7, a + 1.2, R7 + 48); return <line key={i} x1={p0[0]} y1={p0[1]} x2={p1[0]} y2={p1[1]} stroke={INK} strokeWidth={2.5} />; })}
				</g> : null}
				<GratingBar x={G7[0]} y0={G7[1] - 60} y1={G7[1] + 60} n={12} />
				<Slider x={1290} y={420} w={480} v0={400} v1={700} v={nmLive} ticks={[450, 532, 647]} label="λ (nm)" color={NAVY.stroke} opacity={prog(f, longer, 12)} />
			</FrameSvg>
			<Lbl x={120} y={215} at={2} color={GREY.ink} size={26}>a grating from above (not to scale)</Lbl>
			<Lbl x={G7[0] - 220} y={G7[1] - 30} at={shine} color={INK} size={28}>white light</Lbl>
			<Lbl x={G7[0] + R7 + 30} y={G7[1] + 10} at={centre} color={INK} size={28}>m = 0: white</Lbl>
			<Lbl x={1290} y={330} at={longer} color={NAVY.ink} size={52}>{`θ₁ = ${fx(th, 1)}°`}</Lbl>
			<Lbl x={1290} y={540} at={longer} color={GREY.ink} size={26}>laser lines through the same grating</Lbl>
			<Strip x={1240} y={190} at={0} size={36}>d sin θ = mλ,  d = 2.5 × 10⁻⁶ m</Strip>
			<HandTag x={rayEnd(G7, 13, R7)[0] + 24} y={rayEnd(G7, 13, R7)[1] + 30} text="violet: least deviated" at={out} size={30} color="#6b4fa0" />
			<HandTag x={rayEnd(G7, 20, R7)[0] + 24} y={rayEnd(G7, 20, R7)[1] - 20} text="red: most" at={out + 8} size={30} color={RED_INK} />
			<Chip x={1240} y={640} at={out} size={30} w={580} color={INK}>d sin θ = mλ: bigger λ, bigger θ</Chip>
			<HandTag x={rayEnd(G7, a2r, R7 + 60)[0] + 10} y={rayEnd(G7, a2r, R7 + 60)[1] - 10} text="overlap" at={over} size={34} color={INK} />
			<Chip x={1240} y={760} at={over} size={26} w={580} color={INK}>{`m = 2 red (2 × 700 = ${RED2} nm) passes m = 3 violet (3 × 400 = ${VIO3} nm)`}</Chip>
			<HandTag x={G7[0] + R7 - 60} y={G7[1] + 120} text="white centre: m = 0 for all" at={centre + 16} size={30} color={INK} marks={[{kind: 'circle', cx: G7[0] + R7, cy: G7[1], rx: 34, ry: 34}]} />
		</>
	);
};

// ---------- 8. why a grating is the better ruler ----------
const P8L = {x: 130, y: 260, w: 760, h: 260}, P8R = {x: 1030, y: 260, w: 760, h: 260};
const TWO_MAX = 0.29, GRAT_MAX = 30;
const SP8 = placeByAnchor(SPECTRO, ANCHOR.spectroSlit[0], ANCHOR.spectroSlit[1], 720, 760, 560);
export const S08: React.FC = () => {
	const id = 'better-ruler';
	const f = useCurrentFrame();
	const why = cue(id, 'So why use a grating'), sharp = cue(id, 'find their centres precisely'), frac = cue(id, 'small fraction of it'), grat = cap(id, cue(id, 'use gratings'));
	const XL = (a: number) => P8L.x + (a / TWO_MAX) * P8L.w, XR = (a: number) => P8R.x + (a / GRAT_MAX) * P8R.w;
	const twoFn = (u: number) => { const a = ((u + 1) / 2) * TWO_MAX; return Math.cos((Math.PI * a) / TWO_ANGLE) ** 2; };
	const gFn = (u: number) => { const a = ((u + 1) / 2) * GRAT_MAX; return gratingBrightness(60, D, LAM, (a * Math.PI) / 180); };
	const wander = f < sharp ? 0 : 0.03 * Math.sin((f - sharp) / 7) * (1 - 0.3 * Math.cos((f - sharp) / 3));
	const ch = (x: number, y: number, o: number) => <g opacity={o} stroke={NAVY.stroke} strokeWidth={4}><line x1={x} y1={y - 40} x2={x} y2={y + P8L.h + 10} /><circle cx={x} cy={y + 60} r={16} fill="none" /></g>;
	const sp = anchorAt(SPECTRO, SP8, 1300, 326);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<PatternGraph x={P8L.x} y={P8L.y} w={P8L.w} h={P8L.h} fn={twoFn} color={RED} n={300} fill opacity={prog(f, why, 12)} />
				<PatternGraph x={P8R.x} y={P8R.y} w={P8R.w} h={P8R.h} fn={gFn} color={RED} n={900} fill opacity={prog(f, why + 10, 12)} />
				{[0, 0.1, 0.2].map(t => <text key={t} x={XL(t)} y={P8L.y + P8L.h + 34} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 700, fontSize: 26, fill: INK}} opacity={prog(f, 2, 12)}>{`${fx(t, 1)}°`}</text>)}
				{[0, 10, 20, 30].map(t => <text key={t} x={XR(t)} y={P8R.y + P8R.h + 34} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 700, fontSize: 26, fill: INK}} opacity={prog(f, 2, 12)}>{`${t}°`}</text>)}
				{f >= sharp ? ch(XL(TWO_ANGLE + wander), P8L.y, prog(f, sharp, 10)) : null}
				{f >= sharp ? ch(XR(15), P8R.y, prog(f, sharp, 10)) : null}
				{f >= frac ? <g opacity={prog(f, frac, 12)}>
					<rect x={XL(TWO_ANGLE - ERR)} y={P8L.y + P8L.h + 50} width={XL(TWO_ANGLE + ERR) - XL(TWO_ANGLE - ERR)} height={16} rx={6} fill={NAVY.stroke} />
					<rect x={XR(15 - ERR) - 2} y={P8R.y + P8R.h + 50} width={XR(15 + ERR) - XR(15 - ERR) + 4} height={16} rx={2} fill={NAVY.stroke} />
					<path d={`M${XL(0)},${P8L.y + P8L.h + 92} H${XL(TWO_ANGLE)}`} stroke={GREY.stroke} strokeWidth={3} strokeDasharray="6 6" />
					<path d={`M${XR(0)},${P8R.y + P8R.h + 92} H${XR(15)}`} stroke={GREY.stroke} strokeWidth={3} strokeDasharray="6 6" />
				</g> : null}
				<LPlate spec={SPECTRO} p={SP8} opacity={prog(f, grat, 14)} />
				{f >= grat ? <g opacity={prog(f, grat + 10, 12)}>
					<ellipse cx={sp[0]} cy={sp[1]} rx={46} ry={34} fill="#fffdf8" stroke={INK} strokeWidth={3} strokeDasharray="7 5" />
					{Array.from({length: 7}, (_, i) => <line key={i} x1={sp[0] - 18 + i * 6} y1={sp[1] - 20} x2={sp[0] - 18 + i * 6} y2={sp[1] + 20} stroke="#34322f" strokeWidth={2.5} />)}
				</g> : null}
			</FrameSvg>
			<Lbl x={P8L.x} y={P8L.y - 30} at={2} color={INK} size={30}>two slits: a broad band at a tiny angle</Lbl>
			<Lbl x={P8R.x} y={P8R.y - 30} at={2} color={INK} size={30}>grating: a sharp line at 15°</Lbl>
			<HandTag x={XL(TWO_ANGLE) + 40} y={P8L.y + 40} text="fuzzy centre" at={sharp + 10} size={30} color={NAVY.ink} />
			<HandTag x={XR(15) + 30} y={P8R.y + 40} text="sharp centre" at={sharp + 10} size={30} color={NAVY.ink} marks={[{kind: 'circle', cx: XR(15), cy: P8R.y + 60, rx: 30, ry: 30}]} />
			<Lbl x={P8L.x} y={P8L.y + P8L.h + 130} at={frac} color={NAVY.ink} size={30}>{`± ${fx(ERR, 2)}° on ${fx(TWO_ANGLE, 3)}°: about ${fx(PCT_TWO, 0)}%`}</Lbl>
			<Lbl x={P8R.x} y={P8R.y + P8R.h + 130} at={frac} color={NAVY.ink} size={30}>{`± ${fx(ERR, 2)}° on 15°: about ${fx(PCT_GRAT, 1)}%`}</Lbl>
			<HandTag x={P8L.x} y={P8L.y + P8L.h + 180} text="tiny angle: big % error" at={frac + 12} size={30} color={NAVY.ink} />
			<HandTag x={P8R.x} y={P8R.y + P8R.h + 180} text="small % error" at={frac + 12} size={30} color={NAVY.ink} />
			<Lbl x={1040} y={P8L.y + P8L.h + 230} at={frac} color={GREY.ink} size={26}>same reading error (illustrative)</Lbl>
			<Lbl x={SP8.x} y={SP8.y - 18} at={grat} color={INK} size={28}>pocket spectroscope</Lbl>
			<HandTag x={sp[0] + 60} y={sp[1] - 60} text="grating inside" at={grat} size={30} color={INK} />
		</>
	);
};

// ---------- 9. doing the investigation ----------
const B9: BenchAt = {x: 96, y: 390, w: 900, g: 0.85, ap: 230, slit: 560, scr: 900};
const G9: Pt = [300, 705], L9 = 340;
export const S09: React.FC = () => {
	const id = 'investigation';
	const f = useCurrentFrame();
	const both = cue(id, 'both sides of the centre'), halve = cue(id, 'halve the total angle'), tl = cue(id, 'small tilt of the grating'), rep = cue(id, 'Repeat the measurement'), second = cue(id, 'use the second order too'), rev = cue(id, "repeating can't reveal"), beam = cap(id, cue(id, 'never look along the beam'));
	const g = benchGeom(B9);
	const a = kf(f, [[tl, 0], [tl + 24, 2]]);
	const t2 = tilt(2);
	const tR = f < tl ? 15 : 15 + (t2.R - 15) * (a / 2), tL = f < tl ? 15 : 15 + (t2.L - 15) * (a / 2);
	const len = (d: number) => L9 / Math.cos((d * Math.PI) / 180);
	const rows = [{a: 0, ...tilt(0)}, {a: 2, ...t2}, {a: 5, ...tilt(5)}];
	const o2 = f < second ? 0 : prog(f, second, 12);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<OpticsBench b={B9} color={RED} spread={44} slide="grating" gap={0.8} sep={2.4} />
				<rect x={96} y={490} width={900} height={430} rx={14} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} />
				<TopView g={G9} len={0} orders={[]} screenX={G9[0] + L9} screenH={215} gh={70} tiltDeg={a} beamIn={0.5} />
				<Ray o={G9} deg={0} len={L9} color={RED} width={4} />
				<Ray o={G9} deg={tR} len={len(tR)} color={RED} width={4} />
				<Ray o={G9} deg={-tL} len={len(tL)} color={RED} width={4} />
				{o2 > 0.001 ? <g opacity={o2}>{[TH2, -TH2].map(d => <g key={d}><Ray o={G9} deg={d} len={len(d)} color={RED} width={4} /><circle cx={rayEnd(G9, d, len(d))[0]} cy={rayEnd(G9, d, len(d))[1]} r={14} fill="none" stroke={NAVY.stroke} strokeWidth={4} /></g>)}</g> : null}
				{[tR, -tL].map(d => <circle key={d} cx={rayEnd(G9, d, len(Math.abs(d)))[0]} cy={rayEnd(G9, d, len(Math.abs(d)))[1]} r={8} fill={RED} stroke={INK} strokeWidth={2} />)}
				<Arc c={G9} r={150} a0={0} a1={tR} opacity={prog(f, both, 12)} />
				<Arc c={G9} r={150} a0={-tL} a1={0} opacity={prog(f, both + 6, 12)} />
				{f >= beam ? <circle cx={g.aperture[0]} cy={g.aperture[1]} r={26} fill="none" stroke={RED_INK} strokeWidth={5} opacity={prog(f, beam, 10)} /> : null}
			</FrameSvg>
			<Lbl x={120} y={525} at={2} color={GREY.ink} size={26}>from above (not to scale)</Lbl>
			<Lbl x={G9[0] + 160} y={G9[1] - 30} at={both} color={NAVY.ink} size={32}>θ_R</Lbl>
			<Lbl x={G9[0] + 160} y={G9[1] + 50} at={both + 6} color={NAVY.ink} size={32}>θ_L</Lbl>
			<Lbl x={G9[0] - 20} y={G9[1] + 90} at={tl} color={INK} size={26} anchor="middle">{`tilt ${fx(a, 0)}°`}</Lbl>
			<Strip x={1060} y={190} at={halve} size={44}>θ = (θ_L + θ_R) / 2</Strip>
			<div style={{position: 'absolute', left: 1060, top: 290, opacity: prog(f, tl, 12), display: 'flex', flexDirection: 'column', gap: 4}}>
				<Lbl x={0} y={30} at={tl} color={NAVY.ink} size={44}>{`θ_L = ${fx(tL, 2)}°   θ_R = ${fx(tR, 2)}°`}</Lbl>
				<Lbl x={0} y={96} at={tl} color={NAVY.ink} size={44}>{`mean = ${fx((tL + tR) / 2, 2)}°  (untilted 15.00°)`}</Lbl>
			</div>
			<HandTag x={1060} y={440} text="averaging shrinks the tilt error" at={tl + 30} size={32} color={NAVY.ink} />
			<div style={{position: 'absolute', left: 1060, top: 490, width: 760, fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 30, color: INK, opacity: prog(f, rep, 12)}}>
				<div style={{display: 'grid', gridTemplateColumns: '1.2fr 1fr 1fr 1fr', borderBottom: `3px solid ${INK}`, padding: '4px 8px'}}><span>tilt</span><span>θ_L</span><span>θ_R</span><span>mean</span></div>
				{rows.map((r, i) => <div key={r.a} style={{display: 'grid', gridTemplateColumns: '1.2fr 1fr 1fr 1fr', padding: '4px 8px', opacity: prog(f, rep + i * 16, 10)}}><span>{`${r.a}°`}</span><span>{`${fx(r.L, 2)}°`}</span><span>{`${fx(r.R, 2)}°`}</span><span style={{color: NAVY.ink}}>{`${fx(r.mean, 2)}°`}</span></div>)}
			</div>
			<HandTag x={G9[0] + L9 + 30} y={rayEnd(G9, TH2, len(TH2))[1] + 10} text="m = 2: bigger angle" at={second + 10} size={30} color={NAVY.ink} />
			<Chip x={1060} y={720} at={rev} size={30} w={760} color={ROSE.ink} border={ROSE.stroke}>quoted N: systematic uncertainty</Chip>
			<Chip x={1060} y={810} at={beam} size={32} color={RED_INK} border={RED_INK}>never look along the beam</Chip>
			<Lbl x={B9.ap - 80} y={196} at={2} color={INK} size={26} anchor="middle">laser</Lbl>
			<Lbl x={B9.slit} y={196} at={2} color={INK} size={26} anchor="middle">grating</Lbl>
			<Lbl x={B9.scr} y={196} at={2} color={INK} size={26} anchor="middle">screen</Lbl>
		</>
	);
};

// ---------- 10. a way to remember ----------
export const S10: React.FC = () => {
	const id = 'memory-aid';
	const f = useCurrentFrame();
	const way = cue(id, "Here's a way to remember it"), flip = cue(id, 'Flip it for d'), ang = cap(id, cue(id, 'big angles'));
	const crowd = prog(f, ang - 20, 30);
	const lines = Math.round(8 + 14 * crowd);
	const th = 8 + 22 * crowd;
	const G: Pt = [1180, 680];
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<div style={{position: 'absolute', left: 300, top: 170, width: 1320}}>
				<MemoryCard at={way} main={<>Lines per metre? Flip it for d. Many lines, tiny d, big angles.</>} />
			</div>
			<div style={{position: 'absolute', left: 140, top: 560, fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 52, color: INK, opacity: prog(f, 4, 12)}}>
				<div style={{color: NAVY.ink}}>N (lines per metre)</div>
				<div style={{color: ROSE.ink, marginTop: 90}}>d = 1 / N</div>
			</div>
			<FrameSvg>
				<path d="M560,640 C680,660 680,730 560,750" fill="none" stroke={ROSE.stroke} strokeWidth={6} opacity={prog(f, flip, 12)} strokeDasharray={`${300 * prog(f, flip, 20)} 400`} />
				<path d="M560,750 l26,-4 l-14,22 z" fill={ROSE.stroke} opacity={prog(f, flip + 16, 6)} />
				<GratingBar x={G[0]} y0={G[1] - 120} y1={G[1] + 120} n={lines} t={16} />
				{[0, 1, -1, 2, -2].map(m => <Ray key={m} o={G} deg={m * th} len={400} color={RED} width={4} />)}
			</FrameSvg>
		</>
	);
};
