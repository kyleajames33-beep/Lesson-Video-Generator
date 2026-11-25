// Scenes 6 to 10: what the negative sign means (tangent nubs, the "from rest" bracket, the well cross-section
// beside its graph), only changes matter (full-width algebra with the graph as a thumbnail), the worked check
// of the hook, where mgh still works (the exact change, the small-height limit and a height slider), and the
// memory card with the well.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Enter, FONT_HAND, prog} from '../../kit';
import {FrameSvg, HandTag, MarkSpan, SceneHeading, kf} from '../../math/studio';
import {CARD, INK, INK_SOFT, TYPE} from '../../shared/tokens';
import {AnswerBox, Chip, CrossedChip, DISPLAY, Readouts, Row} from '../../physics/projectile/board';
import {GM, GMm, HEAD, HEAD_SIZE, HOOK, RE, R_GEO, SLIP_U2, TOTAL, U, V_SURF, cue, hOverR, mono} from './common';
import {Earth, GREEN, GREY, Lbl, NAVY, SLATE, Satellite, T, VIOLET, VecArrow, WellSection, fx, sci, wellWall, wx, wy} from './parts';
import type {Well} from './parts';
import {Strip, WL, WellGraph} from './s1';

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const Givens: React.FC<{x: number; y: number; w: number; at: number; lines: React.ReactNode[]; size?: number}> = ({x, y, w, at, lines, size = 32}) => (
	<Enter at={at} style={{position: 'absolute', left: x, top: y, width: w}}>
		<div style={{background: NAVY.soft, border: `3px solid ${NAVY.stroke}`, borderRadius: 14, padding: '6px 22px 10px'}}>
			{lines.map((t, i) => <div key={i} style={{...DISPLAY(size, NAVY.ink, 800)}}>{t}</div>)}
		</div>
	</Enter>
);

// ---------- 6. what the negative sign means ----------
const W6: Well = {...WL, w: 760};
const tangent = (w: Well, r: number, len: number) => {
	const x0 = wx(w, r), y0 = wy(w, U(r));
	const dr = r * 0.01, x1 = wx(w, r + dr), y1 = wy(w, U(r + dr));
	const d = Math.hypot(x1 - x0, y1 - y0);
	return {x0, y0, ux: (x1 - x0) / d, uy: (y1 - y0) / d, len};
};
export const S06: React.FC = () => {
	const id = 'negative-meaning';
	const f = useCurrentFrame();
	const always = cue(id, 'always negative'), rises = cue(id, 'rises towards'), steep = cue(id, 'steep near'), flat = cue(id, 'flat far'), sign = cue(id, 'The negative sign'), less = cue(id, 'less than no'), means = cue(id, 'It means'), rest = cue(id, 'from rest'), deep = cue(id, 'how deep');
	const p = prog(f, 0, 30);
	const w: Well = {...WL, w: lerp(WL.w, W6.w, p)};
	const rM = kf(f, mono([[0, 2 * RE], [rises, 2 * RE], [rises + 60, 8 * RE], [means - 20, 8 * RE], [means + 30, RE]], 8));
	const t1 = tangent(w, 1.25 * RE, 150), t2 = tangent(w, 9 * RE, 150);
	const bx = wx(w, RE) - 34, by = wy(w, U(RE));
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<WellGraph w={w} markR={rM} bar />
				{f >= steep ? <line x1={t1.x0 - t1.ux * 70} y1={t1.y0 - t1.uy * 70} x2={t1.x0 + t1.ux * 80} y2={t1.y0 + t1.uy * 80} stroke={INK} strokeWidth={5} opacity={prog(f, steep, 12)} /> : null}
				{f >= flat ? <line x1={t2.x0 - t2.ux * 80} y1={t2.y0 - t2.uy * 80} x2={t2.x0 + t2.ux * 80} y2={t2.y0 + t2.uy * 80} stroke={INK} strokeWidth={5} opacity={prog(f, flat, 12)} /> : null}
				{f >= rest ? <g opacity={prog(f, rest, 14)}>
					<line x1={bx} y1={w.y0} x2={bx} y2={by} stroke={NAVY.stroke} strokeWidth={5} />
					<line x1={bx - 12} y1={w.y0} x2={bx + 12} y2={w.y0} stroke={NAVY.stroke} strokeWidth={5} />
					<line x1={bx - 12} y1={by} x2={bx + 12} y2={by} stroke={NAVY.stroke} strokeWidth={5} />
				</g> : null}
				{f >= deep ? <WellSection cx={1480} y0={WL.y0} halfW={300} depth={420} U={U} rMax={12 * RE} draw={prog(f, deep, 20)} /> : null}
			</FrameSvg>
			<Lbl x={w.ox + 20} y={w.y0 - 26} at={-30} color={INK} size={32}>U = 0 at infinity</Lbl>
			<Lbl x={w.ox + w.w + 30} y={w.y0 - 26} at={-30} color={INK} anchor="end" size={40}>∞</Lbl>
			<Row at={always} size={40} style={{position: 'absolute', left: 960, top: 186}}><span style={{color: VIOLET.ink}}>U &lt; 0 everywhere; rises towards 0 as r grows</span></Row>
			<Lbl x={t1.x0 + 40} y={t1.y0 + 10} at={steep} color={VIOLET.ink} size={30}>strong pull: steep</Lbl>
			<HandTag x={t1.x0 + 40} y={t1.y0 + 60} text="steep near Earth" at={steep + 14} size={30} color={VIOLET.ink} />
			<Lbl x={t2.x0 - 60} y={t2.y0 - 30} at={flat} color={VIOLET.ink} anchor="end" size={30}>weak pull: flat</Lbl>
			<CrossedChip x={960} y={250} at={sign} crossAt={less + 10} size={32}>negative = less than no energy</CrossedChip>
			<Row at={rest - 6} size={36} style={{position: 'absolute', left: 160, top: 870, width: 1100, whiteSpace: 'normal'}}><span style={{color: NAVY.ink}}>energy needed to separate from rest = <MarkSpan kind="circle" at={rest + 20} color={NAVY.stroke}>GMm/R = {sci(TOTAL)} J</MarkSpan></span></Row>
			<HandTag x={bx + 70} y={(w.y0 + by) / 2 + 60} text="from rest" at={rest + 10} size={32} color={NAVY.ink} />
			<Lbl x={1480} y={WL.y0 + 560} at={deep} color={VIOLET.ink} anchor="middle" size={32}>gravity well</Lbl>
			<HandTag x={1480} y={925} text="an energy picture, not a hole" at={deep + 10} size={30} color={GREY.ink} anchor="middle" />
		</>
	);
};

// ---------- 7. only changes matter ----------
const WT: Well = {ox: 110, y0: 330, w: 520, depth: 420, xMax: 8 * RE, umin: U(RE)};
const R1 = 1.5 * RE, R2 = 4 * RE;
export const S07: React.FC = () => {
	const id = 'changes';
	const f = useCurrentFrame();
	const what = cue(id, 'What actually'), moving = cue(id, 'Moving from'), finalV = cue(id, 'final value'), minus = cue(id, 'minus the starting'), which = cue(id, 'which is big'), one = cue(id, 'one over r one'), out = cue(id, 'Moving outwards'), less = cue(id, 'less negative'), inc = cue(id, 'it increases'), divide = cue(id, 'Divide U');
	const u1 = [wx(WT, R1), wy(WT, U(R1))], u2 = [wx(WT, R2), wy(WT, U(R2))];
	const up = prog(f, inc, 20);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<WellGraph w={WT} axisTitle={false} />
				<g opacity={prog(f, moving, 14)}>
					<line x1={u1[0]} y1={WT.y0} x2={u1[0]} y2={u1[1]} stroke={NAVY.stroke} strokeWidth={2.5} strokeDasharray="6 6" />
					<line x1={u2[0]} y1={WT.y0} x2={u2[0]} y2={u2[1]} stroke={NAVY.stroke} strokeWidth={2.5} strokeDasharray="6 6" />
					<circle cx={u1[0]} cy={u1[1]} r={10} fill={VIOLET.stroke} stroke={CARD} strokeWidth={3} />
					<circle cx={u2[0]} cy={u2[1]} r={10} fill={VIOLET.stroke} stroke={CARD} strokeWidth={3} />
				</g>
				{up > 0 ? <VecArrow x={u2[0] + 40} y={u1[1]} dx={0} dy={(u2[1] - u1[1]) * up} color={GREEN.stroke} width={7} head={20} /> : null}
			</FrameSvg>
			<Lbl x={u1[0]} y={WT.y0 - 20} at={moving} color={NAVY.ink} anchor="middle" size={30}>r₁</Lbl>
			<Lbl x={u2[0]} y={WT.y0 - 20} at={moving} color={NAVY.ink} anchor="middle" size={30}>r₂</Lbl>
			<Lbl x={u1[0] + 18} y={u1[1] + 10} at={moving} color={VIOLET.ink} size={30}>U₁</Lbl>
			<Lbl x={u2[0] - 18} y={u2[1] + 44} at={moving} color={VIOLET.ink} anchor="end" size={30}>U₂</Lbl>
			<Lbl x={u2[0] + 64} y={(u1[1] + u2[1]) / 2} at={inc} color={GREEN.ink} size={32}>outwards: ΔU &gt; 0</Lbl>
			<Lbl x={WT.ox} y={WT.y0 + WT.depth + 70} at={-30} color={GREY.ink} size={28}>the well graph from before</Lbl>
			<Row at={what} size={36} style={{position: 'absolute', left: 780, top: 186}}>Only the change in U matters.</Row>
			<div style={{position: 'absolute', left: 780, top: 260, display: 'flex', flexDirection: 'column', gap: 12}}>
				<Row at={finalV} ageAt={which} size={52} oldSize={40}>ΔU = U₂ − U₁ <span style={{...DISPLAY(30, GREY.ink, 700)}}>(final − starting)</span></Row>
				<Row at={minus} ageAt={which} size={52} oldSize={40}>&nbsp;&nbsp;&nbsp;= (−GMm/r₂) − (−GMm/r₁)</Row>
				<Row at={which} size={60}>&nbsp;&nbsp;&nbsp;= <AnswerBox at={which + 16}><span>GMm (<MarkSpan kind="circle" at={one} color={VIOLET.stroke}>1/r₁ − 1/r₂</MarkSpan>)</span></AnswerBox></Row>
				<Row at={out} size={40}><span style={{color: GREEN.ink}}>r₂ &gt; r₁ (outwards): 1/r₁ &gt; 1/r₂, so ΔU &gt; 0</span></Row>
				<Row at={inc + 20} size={34}><span style={{color: GREY.ink}}>work you supply (slowly) = ΔU</span></Row>
			</div>
			<HandTag x={1500} y={330} text="minus a minus" at={minus + 20} size={30} color={SLATE.ink} />
			<HandTag x={1360} y={620} text="less negative = up" at={less} size={32} color={VIOLET.ink} />
			<Chip x={780} y={780} at={divide} size={32} w={1044} border={GREY.stroke} color={GREY.ink}>potential V = U/m = −GM/r (J kg⁻¹); at the surface {sci(V_SURF)} J kg⁻¹</Chip>
		</>
	);
};

// ---------- 8. worked example: back to the satellite ----------
const E8 = {cx: 230, cy: 840, R: 48};
export const S08: React.FC = () => {
	const id = 'worked-geo';
	const f = useCurrentFrame();
	const surface = cue(id, "At Earth's surface"), six = cue(id, 'which is minus six'), geo = cue(id, 'At geostationary radius'), nine = cue(id, 'nine point four six'), change = cue(id, 'The change is'), finalMinus = cue(id, 'final minus initial'), plus = cue(id, 'plus five point three four'), exactly = cue(id, 'exactly the true');
	const yG = E8.cy - (R_GEO / RE) * E8.R;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<line x1={E8.cx} y1={E8.cy} x2={E8.cx} y2={yG} stroke={NAVY.stroke} strokeWidth={3} strokeDasharray="10 8" />
				<Earth cx={E8.cx} cy={E8.cy} d={2 * E8.R} />
				<g opacity={1 - 0.6 * prog(f, geo, 14)}><Satellite cx={E8.cx} cy={E8.cy - E8.R - 12} w={40} /></g>
				<g opacity={prog(f, geo, 14)}><Satellite cx={E8.cx} cy={yG} w={40} /></g>
			</FrameSvg>
			<Lbl x={E8.cx + 30} y={E8.cy - E8.R} at={surface} color={NAVY.ink} size={28}>r₁ = R</Lbl>
			<Lbl x={E8.cx + 30} y={yG + 10} at={geo} color={NAVY.ink} size={28}>r₂ = {sci(R_GEO)} m</Lbl>
			<Lbl x={96} y={E8.cy + 90} at={-30} color={GREY.ink} size={28}>true scale</Lbl>
			<Strip x={96} y={176} at={-30} size={34}>Find ΔU for 1000 kg, surface to geostationary radius.</Strip>
			<Strip x={1180} y={176} at={-30} size={36} border={VIOLET.stroke} color={VIOLET.ink}>U = −GMm/r; ΔU = U₂ − U₁</Strip>
			<Givens x={96} y={256} w={470} at={-20} lines={[`GM = ${sci(GM, 3)} m³ s⁻²`, 'm = 1000 kg', `r₁ = ${sci(RE, 3)} m`, `r₂ = ${sci(R_GEO)} m`]} />
			<div style={{position: 'absolute', left: 620, top: 256, display: 'flex', flexDirection: 'column', gap: 6}}>
				<Row at={surface} ageAt={change} size={44} oldSize={34}>U₁ = −{sci(GMm, 3)} / {sci(RE, 3)} = <span style={{opacity: prog(f, six, 10)}}>{sci(U(RE))} J</span></Row>
				<Row at={geo} ageAt={change} size={44} oldSize={34}>U₂ = −{sci(GMm, 3)} / {sci(R_GEO)} = <span style={{opacity: prog(f, nine, 10)}}>{sci(U(R_GEO))} J</span></Row>
				<Row at={change} size={48}>ΔU = {sci(U(R_GEO))} − ({sci(U(RE))})</Row>
				<Row at={plus - 8} size={56}>&nbsp;&nbsp;&nbsp;= <AnswerBox at={plus}><span style={{color: VIOLET.ink}}><MarkSpan kind="circle" at={exactly} color={VIOLET.stroke}>+{sci(HOOK.dU)} J</MarkSpan></span></AnswerBox></Row>
			</div>
			<HandTag x={1380} y={560} text="final minus initial" at={finalMinus} size={32} color={NAVY.ink} />
			<HandTag x={1380} y={620} text="less negative" at={plus + 20} size={32} color={VIOLET.ink} />
			<CrossedChip x={620} y={690} at={geo + 40} crossAt={nine + 20} size={30} caption="r from the centre">r₂ = {sci(HOOK.h)} m (the altitude) → U₂ = {sci(SLIP_U2)} J</CrossedChip>
			<Chip x={620} y={850} at={exactly} size={32} border={NAVY.stroke} color={NAVY.ink}>true ΔU from the start: {sci(HOOK.dU)} J ✓</Chip>
		</>
	);
};

// ---------- 9. where mgh still works ----------
const SL9 = {x: 120, y: 650, w: 820, lo: 0, hi: 5};
const hX = (hKm: number) => SL9.x + ((Math.log10(Math.max(1, hKm)) - SL9.lo) / (SL9.hi - SL9.lo)) * SL9.w;
export const S09: React.FC = () => {
	const id = 'mgh-limit';
	const f = useCurrentFrame();
	const good = cue(id, 'good shortcut'), small = cue(id, 'For a small'), exact = cue(id, 'exact change becomes'), justG = cue(id, 'is just g'), change = cue(id, 'the change is m'), error = cue(id, 'error is roughly'), hR = cue(id, 'h over R'), tenKm = cue(id, 'Ten kilometres'), fifth = cue(id, 'fifth of a'), four = cue(id, 'Four hundred'), six = cue(id, 'about six per'), always = cue(id, 'always overestimates'), strongest = cue(id, 'strongest pull'), sats = cue(id, 'For satellites');
	const lh = kf(f, mono([[0, 0], [error, 0], [tenKm, 1], [four - 10, 1], [four + 20, Math.log10(400)], [always - 6, Math.log10(400)], [always + 24, Math.log10(HOOK.h / 1000)]], 6));
	const hKm = 10 ** lh;
	const hr = hOverR(hKm * 1000);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<Row at={-30} size={32} style={{position: 'absolute', left: 96, top: 176}}><span style={{color: GREY.ink}}>Last check: surface to geostationary, ΔU = {sci(HOOK.dU)} J, but mgh = {sci(HOOK.mgh)} J</span></Row>
			<div style={{position: 'absolute', left: 96, top: 240, display: 'flex', flexDirection: 'column', gap: 10}}>
				<Row at={small} ageAt={justG} size={44} oldSize={34}>ΔU = GMm (1/R − 1/(R + h)) = GMm h / R(R + h)</Row>
				<Row at={exact} ageAt={change} size={44} oldSize={34}>h ≪ R: R + h ≈ R, so ΔU ≈ GMm h / R²</Row>
				<Row at={justG} ageAt={change} size={44} oldSize={34}>GM/R² = g</Row>
				<Row at={change} size={56}><AnswerBox at={change + 12}><span>ΔU ≈ m (GM/R²) h = mgh</span></AnswerBox></Row>
			</div>
			<HandTag x={1300} y={250} text="near the ground: fine" at={good} size={32} color={GREY.ink} />
			<FrameSvg>
				<g opacity={prog(f, error, 14)}>
					<line x1={SL9.x} y1={SL9.y} x2={SL9.x + SL9.w} y2={SL9.y} stroke={INK_SOFT} strokeWidth={7} strokeLinecap="round" />
					{[[10, '10 km'], [400, '400 km'], [36000, '36,000 km']].map(([v, l]) => <g key={l as string}><line x1={hX(v as number)} y1={SL9.y - 12} x2={hX(v as number)} y2={SL9.y + 12} stroke={INK} strokeWidth={3} /><T x={hX(v as number)} y={SL9.y + 46} size={28} anchor="middle" color={INK_SOFT} weight={700}>{l as string}</T></g>)}
					<circle cx={hX(hKm)} cy={SL9.y} r={17} fill={GREY.stroke} stroke={CARD} strokeWidth={4} />
					<T x={SL9.x} y={SL9.y - 30} size={28} color={INK_SOFT} weight={700}>height h (slider)</T>
				</g>
			</FrameSvg>
			<Readouts x={96} y={740} w={860} size={44} at={error} rows={[
				{label: 'h', value: `${hKm < 1.5 ? '0' : Math.round(hKm).toLocaleString('en-AU')} km`, color: GREY.ink},
				{label: 'mgh too big by about h/R', value: hr < 1 ? `${fx(hr * 100, hr < 0.01 ? 2 : 1)} %` : `× ${fx(1 + hr, 1)}`, color: GREY.ink},
			]} />
			<div style={{position: 'absolute', left: 1080, top: 560, display: 'flex', flexDirection: 'column', gap: 10, width: 744}}>
				<Row at={hR - 10} size={44}>error ≈ <MarkSpan kind="circle" at={hR + 10} color={GREY.stroke}>h/R</MarkSpan></Row>
				<Row at={fifth} size={36}>10 km: h/R = {fx(hOverR(1e4) * 100, 2)} %</Row>
				<Row at={six} size={36}>400 km: h/R = {fx(hOverR(4e5) * 100, 1)} %</Row>
				<Row at={always} size={36}>36,000 km: mgh {fx(HOOK.ratio, 1)} × too big</Row>
				<Row at={strongest} size={32}>it always overestimates: strongest pull, whole climb</Row>
			</div>
			<HandTag x={1100} y={900} text="satellites: exact formula" at={sats} size={32} color={VIOLET.ink} />
		</>
	);
};

// ---------- 10. memory aid ----------
const WS = {cx: 560, y0: 400, halfW: 430, depth: 430, rMax: 12 * RE};
export const S10: React.FC = () => {
	const id = 'memory-aid';
	const f = useCurrentFrame();
	const picture = cue(id, 'picture to keep'), bottom = cue(id, 'bottom of a well'), ground = cue(id, 'infinity is ground'), zero = cue(id, 'Zero at the top'), neg = cue(id, 'negative everywhere'), climb = cue(id, 'Climbing out'), inc = cue(id, 'an increase');
	const r = lerp(1.4 * RE, 9 * RE, Math.max(0, Math.min(1, (f - climb) / Math.max(40, inc + 20 - climb))));
	const [px, py] = wellWall(WS.cx, WS.y0, WS.halfW, WS.depth, U, WS.rMax, r);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<g opacity={prog(f, picture, 16)}><WellSection cx={WS.cx} y0={WS.y0} halfW={WS.halfW} depth={WS.depth} U={U} rMax={WS.rMax} earthD={90} /></g>
				{f >= climb ? <g><Satellite cx={px + 10} cy={py - 22} w={44} rotate={-50} /></g> : null}
				{f >= inc ? <VecArrow x={px + 70} y={py + 40} dx={0} dy={-120} color={GREEN.stroke} width={8} head={22} at={inc} /> : null}
			</FrameSvg>
			<Lbl x={WS.cx} y={WS.y0 - 30} at={ground} color={INK} anchor="middle" size={32}>infinity: ground level, U = 0</Lbl>
			<Lbl x={WS.cx} y={WS.y0 + WS.depth + 100} at={bottom} color={INK} anchor="middle" size={30}>Earth at the bottom</Lbl>
			<Lbl x={WS.cx - 120} y={WS.y0 + 200} at={neg} color={VIOLET.ink} anchor="end" size={30}>U &lt; 0 below</Lbl>
			<Enter at={picture} style={{position: 'absolute', left: 1080, top: 186, width: 744}}>
				<div style={{background: CARD, border: `4px solid ${INK}`, borderRadius: 24, boxShadow: `inset 0 0 0 8px ${CARD}, inset 0 0 0 10.5px ${INK}, 0 10px 26px rgba(60,45,20,0.12)`, padding: '18px 34px 22px'}}>
					<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: TYPE.hand, color: INK_SOFT}}>Memory aid</div>
					<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 52, lineHeight: 1.12}}>
						<div style={{color: INK, opacity: prog(f, zero, 12)}}>Zero at infinity.</div>
						<div style={{color: VIOLET.ink, opacity: prog(f, neg, 12)}}>Negative below.</div>
						<div style={{color: NAVY.ink, opacity: prog(f, climb, 12)}}>Climbing out is an increase.</div>
					</div>
				</div>
			</Enter>
			<Row at={inc} size={44} style={{position: 'absolute', left: 1080, top: 640}}><span style={{color: GREEN.ink}}>U less negative: ΔU &gt; 0</span></Row>
		</>
	);
};
