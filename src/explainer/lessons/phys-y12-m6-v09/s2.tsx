// Scenes 6 to 9: the worked example (working layout with the coil's side view: field perpendicular to its plane, then
// its plane at 40° to the field, θ = 50° from the normal), the angle trap (a large side view: α to the plane, θ = 90° − α
// to the normal, two small views), three ways to change flux (four mini-stages with live counters of the field symbols
// inside the loop), and the memory card.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {FrameSvg, HandTag, MarkSpan, SceneHeading, kf} from '../../math/studio';
import {CARD, INK} from '../../shared/tokens';
import {AidCard, AnswerBox, CrossedChip, Row} from '../../physics/projectile/board';
import {CrossRegion} from '../../physics/electromagnetism/plates';
import {LoopInField} from '../../physics/electromagnetism/flux';
import {HEAD, HEAD_SIZE, WE, cap, cue, mono} from './common';
import {A0, CardRect, FIELD1, GREY, Givens, LIT, Lbl, NAVY, Ring, SideView, Strip, sci, sideNormalTip} from './parts';

const rad = (d: number) => (d * Math.PI) / 180;

// ---------- 6. a worked example ----------
const SV6 = {cx: 440, cy: 560, w: 680, h: 560};
export const S06: React.FC = () => {
	const id = 'worked-example';
	const f = useCurrentFrame();
	const ex = cue(id, "Here's an example"), area = cue(id, 'Its area is pi'), a = cue(id, 'one point five times ten to the minus three webers'), forty = cue(id, 'makes forty degrees with the field'), careful = cue(id, 'Careful here'), plane = cue(id, 'not the plane'), fifty = cue(id, 'fifty degrees'), b = cap(id, cue(id, 'nine point seven times ten to the minus four webers'));
	const pl = kf(f, [[forty, 90], [forty + 40, 40]]);
	const nt = sideNormalTip(SV6.cx, SV6.cy, pl);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<SideView cx={SV6.cx} cy={SV6.cy} w={SV6.w} h={SV6.h} plane={pl} len={300} normal={prog(f, fifty, 14)} alphaArc={prog(f, forty + 30, 12)} thetaArc={prog(f, fifty + 10, 12)} />
			</FrameSvg>
			<Lbl x={SV6.cx + SV6.w / 2 - 20} y={SV6.cy - SV6.h / 2 + 40} color={GREY.ink} size={34} anchor="end">B = 0.30 T</Lbl>
			<Lbl x={SV6.cx - SV6.w / 2 + 20} y={SV6.cy + SV6.h / 2 - 24} color={INK} size={28}>side view: the coil edge on</Lbl>
			<Lbl x={SV6.cx + 110} y={SV6.cy - 60} at={forty + 30} color={GREY.ink} size={32}>40°</Lbl>
			<Lbl x={SV6.cx + 70} y={SV6.cy + 60} at={fifty + 10} color={INK} size={32}>θ = 50°</Lbl>
			<Lbl x={nt[0] + 10} y={nt[1] + 30} at={fifty} color={NAVY.ink} size={30}>normal</Lbl>
			<Strip x={880} y={176} at={ex} size={28} w={940}>Find the flux through the coil: (a) field perpendicular to its plane, (b) plane at 40° to the field.</Strip>
			<Strip x={880} y={286} at={ex + 8} size={32} border={INK}>Φ = BA cos θ (θ from the normal)</Strip>
			<Givens x={880} y={356} w={940} at={ex + 16} size={30} lines={[<>r = 4.0 cm = <MarkSpan kind="circle" at={ex + 60} color={NAVY.stroke}>0.040 m</MarkSpan>, B = 0.30 T</>]} />
			<HandTag x={1560} y={390} text="cm → m" at={ex + 66} size={32} color={NAVY.ink} />
			<div style={{position: 'absolute', left: 880, top: 450, display: 'flex', flexDirection: 'column', gap: 8, width: 950}}>
				<Row at={area} ageAt={fifty} size={44} oldSize={34}>A = πr² = π × 0.040² = {sci(WE.A, 2)} m²</Row>
				<Row at={a - 30} ageAt={fifty} size={40} oldSize={32}>(a) θ = 0°: Φ = 0.30 × {sci(WE.A, 2)} × 1 = <AnswerBox at={a + 6}>{sci(WE.phiA, 1)} Wb</AnswerBox></Row>
				<Row at={fifty} ageAt={b} size={44} oldSize={36}>θ = 90° − 40° = 50°</Row>
				<Row at={b - 40} size={40}>(b) Φ = {sci(WE.phiA, 3)} × cos 50° = <AnswerBox at={b}>{sci(WE.phiB, 1)} Wb</AnswerBox></Row>
			</div>
			<CrossedChip x={880} y={800} at={careful} crossAt={plane + 10} size={30} caption="40° is to the plane">Φ = BA cos 40° = {sci(WE.slip, 1)} Wb</CrossedChip>
		</>
	);
};

// ---------- 7. the angle trap ----------
const SV7 = {cx: 470, cy: 540, w: 740, h: 520};
export const S07: React.FC = () => {
	const id = 'angle-trap';
	const f = useCurrentFrame();
	const trap = cue(id, 'most common trap'), alpha = cue(id, 'call it alpha'), sine = cue(id, 'B A sine alpha'), thirty = cue(id, 'a plane at thirty degrees to the field'), ask = cue(id, 'what angle does the field make with the normal'), right = cue(id, 'Field at right angles to the plane'), all = cap(id, cue(id, 'none at all'));
	const pl = kf(f, mono([[trap, 50], [thirty - 4, 50], [thirty + 30, 30]]));
	const nt = sideNormalTip(SV7.cx, SV7.cy, pl);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<SideView cx={SV7.cx} cy={SV7.cy} w={SV7.w} h={SV7.h} plane={pl} len={320} normal={prog(f, sine - 20, 14)} alphaArc={prog(f, alpha, 12)} thetaArc={prog(f, sine, 12)} />
				{f >= right ? <g opacity={prog(f, right, 14)}>
					<SideView cx={1180} cy={790} w={300} h={210} plane={90} len={150} rows={3} normal={0.55} />
				</g> : null}
				{f >= all ? <g opacity={prog(f, all, 14)}>
					<SideView cx={1560} cy={790} w={300} h={210} plane={0} len={170} rows={3} normal={0.55} />
				</g> : null}
			</FrameSvg>
			<Lbl x={SV7.cx + 110} y={SV7.cy - 34} at={alpha} color={GREY.ink} size={32}>α</Lbl>
			<Lbl x={SV7.cx + 70} y={SV7.cy + 70} at={sine} color={INK} size={32}>θ = 90° − α</Lbl>
			<Lbl x={nt[0] + 10} y={nt[1] + 30} at={sine - 20} color={NAVY.ink} size={30}>normal</Lbl>
			<Lbl x={SV7.cx - SV7.w / 2 + 20} y={SV7.cy - SV7.h / 2 + 40} at={trap} color={GREY.ink} size={32}>B</Lbl>
			<Row at={trap} out={sine} size={40} style={{position: 'absolute', left: 960, top: 200}}>the angle given to the plane: α</Row>
			<HandTag x={SV7.cx - 340} y={SV7.cy + SV7.h / 2 + 40} text="the right angle: plane to normal" at={sine} size={30} color={NAVY.ink} />
			<div style={{position: 'absolute', left: 960, top: 190, display: 'flex', flexDirection: 'column', gap: 10, width: 860}}>
				<Row at={sine} ageAt={thirty} size={48} oldSize={36}>Φ = BA cos(90° − α) = <AnswerBox at={sine + 12}>BA sin α</AnswerBox></Row>
				<Row at={thirty} size={44}>α = 30° → θ = 60° → Φ = 0.5 BA</Row>
			</div>
			<div style={{position: 'absolute', left: 960, top: 400, width: 860, opacity: prog(f, ask, 12), background: CARD, border: `4px solid ${NAVY.stroke}`, borderRadius: 16, padding: '12px 24px', fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 40, color: NAVY.ink}}>Angle between B and the normal?</div>
			<CrossedChip x={960} y={520} at={ask + 10} crossAt={ask + 40} size={32} caption="from the normal, not the plane">θ = α</CrossedChip>
			<Lbl x={1180} y={930} at={right} color={INK} size={30} anchor="middle">Φ = BA (max)</Lbl>
			<Lbl x={1560} y={930} at={all} color={INK} size={30} anchor="middle">Φ = 0</Lbl>
		</>
	);
};

// ---------- 8. three ways to change flux ----------
/** Field symbols (crosses, B into the page) inside a region, and how many fall inside a rectangle. */
const STEP0 = 44;
const crossesIn = (rx: number, ry: number, rw: number, rh: number, step: number, lx: number, ly: number, lw: number, lh: number) => {
	let n = 0;
	const nx = Math.floor(rw / step), ny = Math.floor(rh / step);
	const ox = rx + (rw - (nx - 1) * step) / 2, oy = ry + (rh - (ny - 1) * step) / 2;
	for (let i = 0; i < nx; i++) for (let j = 0; j < ny; j++) { const x = ox + i * step, y = oy + j * step; if (x >= lx && x <= lx + lw && y >= ly && y <= ly + lh) n++; }
	return n;
};
const Mini: React.FC<{x: number; y: number; w: number; h: number; step: number; loop: [number, number, number, number]; region?: [number, number, number, number]; label: string; count: number; opacity: number; color: string}> = ({x, y, w, h, step, loop, region, label, count, opacity, color}) => {
	const [rx, ry, rw, rh] = region ?? [x + 10, y + 10, w - 20, h - 70];
	return (
		<g opacity={opacity}>
			<CardRect x={x} y={y} w={w} h={h} />
			<rect x={rx} y={ry} width={rw} height={rh} fill="#eef1f4" />
			<CrossRegion x={rx} y={ry} w={rw} h={rh} step={step} border={false} />
			<rect x={loop[0]} y={loop[1]} width={loop[2]} height={loop[3]} fill="none" stroke={INK} strokeWidth={7} />
			<text x={x + 20} y={y + h - 20} style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 34, fill: color} as React.CSSProperties}>{label}</text>
			<text x={x + w - 20} y={y + h - 20} textAnchor="end" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 40, fill: LIT, fontVariantNumeric: 'tabular-nums'} as React.CSSProperties}>{`× inside: ${count}`}</text>
		</g>
	);
};
export const S08: React.FC = () => {
	const id = 'three-ways';
	const f = useCurrentFrame();
	const three = cue(id, 'flux can change in three ways'), bStr = cue(id, 'Change the field strength'), area = cue(id, 'Change the area inside the field'), out = cue(id, 'part of the way out of the field'), turn = cue(id, 'by turning the loop'), nothing = cue(id, 'changes nothing'), same = cap(id, cue(id, 'so the same flux'));
	// stage 1: B grows (crosses crowd); stage 2: stretch, then slide half out; stage 3: turn (projected width cos θ); stage 4: slide inside.
	const s1 = {x: 96, y: 190, w: 540, h: 360};
	const step1 = kf(f, [[bStr + 10, STEP0], [bStr + 60, 30]]);
	const L1: [number, number, number, number] = [s1.x + 170, s1.y + 60, 200, 170];
	const s2 = {x: 690, y: 190, w: 540, h: 360};
	const grow = kf(f, [[area + 10, 0], [area + 50, 1]]);
	const slide = kf(f, [[out, 0], [out + 50, 1]]);
	const L2: [number, number, number, number] = [s2.x + 150 - 40 * grow + 160 * slide, s2.y + 70 - 20 * grow, 200 + 80 * grow, 150 + 40 * grow];
	const R2: [number, number, number, number] = [s2.x + 10, s2.y + 10, 400, 280];
	const s3 = {x: 1284, y: 190, w: 540, h: 360};
	const th = kf(f, [[turn, 0], [turn + 50, 70]]);
	const w3 = 220 * Math.cos(rad(th));
	const L3: [number, number, number, number] = [s3.x + 270 - w3 / 2, s3.y + 60, w3, 170];
	const s4 = {x: 96, y: 590, w: 1000, h: 330};
	const sx = f >= nothing ? 260 * (0.5 - 0.5 * Math.cos((f - nothing) * 0.05)) : 0;
	const L4: [number, number, number, number] = [s4.x + 300 + sx, s4.y + 70, 200, 150];
	const n1 = crossesIn(s1.x + 10, s1.y + 10, s1.w - 20, s1.h - 70, step1, ...L1);
	const n2 = crossesIn(...R2, STEP0, ...L2);
	const n3 = crossesIn(s3.x + 10, s3.y + 10, s3.w - 20, s3.h - 70, STEP0, ...L3);
	const n4 = crossesIn(s4.x + 10, s4.y + 10, s4.w - 20, s4.h - 70, STEP0, ...L4);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<Mini {...s1} step={step1} loop={L1} label="B" count={n1} opacity={prog(f, three, 12)} color={GREY.ink} />
				<Mini {...s2} step={STEP0} loop={L2} region={R2} label="A inside" count={n2} opacity={prog(f, three + 6, 12)} color={NAVY.ink} />
				<Mini {...s3} step={STEP0} loop={L3} label="θ" count={n3} opacity={prog(f, three + 12, 12)} color={INK} />
				<Mini {...s4} step={STEP0} loop={L4} label="slide inside" count={n4} opacity={prog(f, nothing - 10, 12)} color={INK} />
				<Ring cx={s4.x + s4.w - 150} cy={s4.y + s4.h - 34} rx={150} ry={40} at={nothing + 30} color={LIT} />
			</FrameSvg>
			<Lbl x={s1.x + 20} y={s1.y - 2} at={bStr} color={GREY.ink} size={28}>magnet closer</Lbl>
			<Lbl x={s2.x + 20} y={s2.y - 2} at={area} color={NAVY.ink} size={28}>{f >= out ? 'slide part way out' : 'stretch the loop'}</Lbl>
			<Lbl x={s3.x + 20} y={s3.y - 2} at={turn} color={INK} size={28}>turn the loop (seen face on)</Lbl>
			<div style={{position: 'absolute', left: 1140, top: 620, width: 680, opacity: prog(f, same, 12), background: CARD, border: `4.5px solid ${INK}`, borderRadius: 12, padding: '8px 20px', fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 40, color: INK}}>B, A and θ unchanged → Φ unchanged ✓</div>
			<CrossedChip x={1140} y={800} at={nothing + 20} crossAt={same} size={30}>any motion changes flux</CrossedChip>
		</>
	);
};

// ---------- 9. a way to remember ----------
export const S09: React.FC = () => {
	const id = 'memory-aid';
	const f = useCurrentFrame();
	const here = cue(id, "Here's a way to remember"), face = cue(id, 'Face on, full flux'), edge = cue(id, 'Edge on, no flux'), normal = cap(id, cue(id, 'from the normal'));
	const p1 = Math.sin(Math.PI * Math.min(1, Math.max(0, (f - face) / 24))), p2 = Math.sin(Math.PI * Math.min(1, Math.max(0, (f - edge) / 24)));
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<g transform={`translate(330 560) scale(${1 + 0.06 * p1}) translate(-330 -560)`}><LoopInField clip={[0, 150, 1920, 790]} cam={{cx: 330, cy: 560, k: 0.7, yaw: -70, pitch: 22}} a={A0} phi={0} L={2.8} lit={1} normal={1} lineColor={FIELD1} litColor={LIT} normalColor={NAVY.stroke} /></g>
				<g transform={`translate(830 560) scale(${1 + 0.06 * p2}) translate(-830 -560)`}><LoopInField clip={[0, 150, 1920, 790]} cam={{cx: 830, cy: 560, k: 0.7, yaw: -70, pitch: 22}} a={A0} phi={90} L={2.8} lit={1} normal={1} lineColor={FIELD1} litColor={LIT} normalColor={NAVY.stroke} /></g>
			</FrameSvg>
			<Lbl x={330} y={830} at={face} color={INK} size={34} anchor="middle">face on: 6 through</Lbl>
			<Lbl x={830} y={830} at={edge} color={INK} size={34} anchor="middle">edge on: 0 through</Lbl>
			<AidCard x={1120} y={300} w={704} at={here}>
				<div style={{fontFamily: 'Caveat', fontWeight: 700, fontSize: 52, color: INK, lineHeight: 1.1}}>Face on, full flux.<br />Edge on, no flux.</div>
				<div style={{fontFamily: 'Inter Tight', fontWeight: 700, fontSize: 36, color: NAVY.ink, marginTop: 12, opacity: prog(f, normal, 12)}}>θ: between B and the normal</div>
			</AidCard>
			<HandTag x={1120} y={760} text="measure θ from the normal" at={here + 20} size={32} color={NAVY.ink} />
		</>
	);
};
