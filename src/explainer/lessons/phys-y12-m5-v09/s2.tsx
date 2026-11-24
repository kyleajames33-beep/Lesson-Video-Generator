// Scenes 6 to 9: the push along the handle (tail-to-tail panel), torque against angle (the live sweep and the
// graph), two slips, and the memory aid.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {DrawPath, FONT_HAND, prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading} from '../../math/studio';
import {CARD, INK, INK_SOFT, TYPE} from '../../shared/tokens';
import {AnswerBox, Bracket, CrossedChip, DISPLAY, ROLE, Readouts, Row, VecArrow} from '../../physics/projectile/board';
import {ArcAngle, DashLine, PenRing, PivotDot, RightMark, SpannerNut, TurnArrow, polar} from '../../physics/projectile/turning';
import {ARM, FORCE, cue, fx, kfm, tau} from './common';
import {AMBER, ARM0, Boxed, Card, Lbl, Line, PUSH0, Push, TURN, Title, tipOf} from './parts';
import {ARC_PER_NM} from './s1';

// ---------- 6. the push along the handle ----------
const S6 = {cx: 400, cy: 560};
export const S06: React.FC = () => {
	const id = 'along-handle';
	const f = useCurrentFrame();
	const pivot = cue(id, 'pivot'), zeroT = cue(id, 'so is the torque'), two = cue(id, 'two arrows'), oneFrom = cue(id, 'one from the pivot'), itself = cue(id, 'force itself'), degrees = cue(id, 'degrees'), pulling = cue(id, 'Pulling outwards'), sine = cue(id, 'The sine'), push2 = cue(id, 'push', 2), door = cue(id, "That's why");
	const ex = S6.cx + ARM0, ey = S6.cy;
	const L = PUSH0 + 110 * prog(f, push2, 24);
	const fade30 = 1 - prog(f, 4, 18);
	const T = {x: 1480, y1: 420, y2: 690};
	const AL = 210;
	return (
		<>
			<SceneHeading text="Along the handle: the line goes through the pivot" at={-40} size={52} />
			<FrameSvg>
				<SpannerNut cx={S6.cx} cy={S6.cy} armPx={ARM0} />
				{fade30 > 0.01 ? <g opacity={fade30}><Push x={ex} y={ey} deg={30} /></g> : null}
				<DashLine x1={ex + 160} y1={ey} x2={110} y2={ey} color={AMBER.stroke} at={pivot} dur={26} width={5} />
				<Push x={ex} y={ey} deg={180} L={L} />
				<VecArrow x={S6.cx} y={ey + 120} dx={ARM0} dy={0} color={TURN.r.stroke} width={7} at={oneFrom} dur={20} head={24} />
				<DashLine x1={S6.cx} y1={ey + 20} x2={S6.cx} y2={ey + 120} color={TURN.r.stroke} at={oneFrom} width={2.5} dash="5 5" />
				<DashLine x1={ex} y1={ey + 20} x2={ex} y2={ey + 120} color={TURN.r.stroke} at={oneFrom} width={2.5} dash="5 5" />
				<circle cx={S6.cx} cy={S6.cy} r={12} fill={TURN.arm.stroke} opacity={prog(f, pivot + 20, 10)} />
				<PenRing cx={S6.cx} cy={S6.cy} rx={40} ry={40} at={pivot + 24} />
				{/* the tail-to-tail panel */}
				<rect x={1150} y={190} width={674} height={760} rx={18} fill={CARD} stroke="rgba(60,45,20,0.16)" strokeWidth={2.5} opacity={prog(f, two - 12, 16)} />
				<VecArrow x={T.x} y={T.y1} dx={AL} dy={0} color={TURN.r.stroke} width={8} at={two} head={26} />
				<VecArrow x={T.x} y={T.y1} dx={-AL} dy={0} color={AMBER.stroke} width={8} at={itself} head={26} />
				<circle cx={T.x} cy={T.y1} r={7} fill={INK} opacity={prog(f, two, 10)} />
				<ArcAngle px={T.x} py={T.y1} r={70} a1={0} a2={180} label="θ = 180°" at={degrees} size={38} lr={112} />
				<VecArrow x={T.x} y={T.y2} dx={AL} dy={0} color={TURN.r.stroke} width={8} at={pulling} head={26} />
				<VecArrow x={T.x} y={T.y2 - 22} dx={AL} dy={0} color={AMBER.stroke} width={6} at={pulling + 8} head={22} />
				<circle cx={T.x} cy={T.y2} r={7} fill={INK} opacity={prog(f, pulling, 10)} />
			</FrameSvg>
			<Lbl x={ex - L / 2} y={ey - 44} color={AMBER.ink} anchor="middle">{L > PUSH0 + 50 ? '160 N' : '80 N'}</Lbl>
			<Card x={1150} y={200} w={674} out={two - 14} border={AMBER.stroke}>
				<Title color={AMBER.ink}>Push C: along the handle</Title>
				<Line size={TYPE.current} color={TURN.arm.ink}>moment arm: r⊥ = {f >= pivot + 20 ? '0' : '?'}</Line>
				<Line size={TYPE.current}>torque: τ = {f >= zeroT ? '0' : '?'}</Line>
				<Line size={32} color={INK_SOFT} at={zeroT + 10}>its line of action passes through the pivot</Line>
			</Card>
			<Lbl x={S6.cx + ARM0 / 2} y={ey + 170} at={oneFrom} color={TURN.r.ink} anchor="middle" size={TYPE.current}>r</Lbl>
			<Lbl x={S6.cx} y={ey - 90} at={pivot + 20} color={TURN.arm.ink} anchor="middle" size={TYPE.current}>r⊥ = 0</Lbl>
			<HandTag x={130} y={ey - 160} text="line through the pivot" at={pivot + 14} size={TYPE.handSmall} color={AMBER.ink} />
			<Lbl x={S6.cx + 200} y={ey + 290} at={zeroT} color={INK} anchor="middle" size={TYPE.working}>τ = <AnswerBox at={push2}>0</AnswerBox></Lbl>
			<div style={{position: 'absolute', left: 1180, top: 206, width: 620, ...DISPLAY(30, INK, 800), whiteSpace: 'normal', opacity: prog(f, two - 12, 16)}}>θ: the angle between r and F, drawn tail to tail</div>
			<Lbl x={1180} y={T.y1 - 110} at={two} color={TURN.r.ink} size={32}>pushing in:</Lbl>
			<Lbl x={T.x + AL} y={T.y1 + 50} at={two} color={TURN.r.ink} anchor="end" size={34}>r</Lbl>
			<Lbl x={T.x - AL} y={T.y1 + 50} at={itself} color={AMBER.ink} size={34}>F</Lbl>
			<Lbl x={T.x - AL - 10} y={T.y2 + 70} at={pulling} color={TURN.r.ink} size={32}>pulling out:  θ = 0°</Lbl>
			<Lbl x={T.x + AL + 12} y={T.y2 - 22} at={pulling + 8} color={AMBER.ink} size={34}>F</Lbl>
			<Lbl x={T.x + AL + 12} y={T.y2 + 14} at={pulling} color={TURN.r.ink} size={34}>r</Lbl>
			<div style={{position: 'absolute', left: 1180, top: 820}}>
				<Row at={sine} size={TYPE.current}>sin 180° = 0, sin 0° = 0 → τ = 0</Row>
			</div>
			<HandTag x={96} y={950} text="a door pushed at its edge straight towards the hinges won't open" at={door} size={30} color={INK} />
		</>
	);
};

// ---------- 7. torque follows sin θ (sweep on the stage, trace on the graph) ----------
const S7 = {cx: 200, cy: 640, arm: 300};
const GR = {x: 690, y: 190, w: 610, h: 560};
const grg = () => {
	const left = GR.x + 96, right = GR.x + GR.w - 34, top = GR.y + 70, bottom = GR.y + GR.h - 90;
	return {left, right, top, bottom, gx: (d: number) => left + (d / 180) * (right - left), gy: (t: number) => bottom - (t / 20) * (bottom - top)};
};
export const S07: React.FC = () => {
	const id = 'sin-graph';
	const f = useCurrentFrame();
	const follows = cue(id, 'Torque follows'), zero = cue(id, "It's zero"), ninety = cue(id, 'ninety degrees'), eighty = cue(id, 'eighty'), onlyPart = cue(id, 'Only the part'), angles2 = cue(id, 'angles', 2), direction = cue(id, 'also has a direction'), acw = cue(id, 'anticlockwise'), opposite = cue(id, 'Push the opposite');
	const g = grg();
	const ex = S7.cx + S7.arm, ey = S7.cy;
	const th = kfm(f, [[zero, 0], [ninety, 90], [eighty, 180]]);
	const t = tau(ARM, th);
	const Lf = 170;
	const sweepOut = prog(f, direction, 14);
	let d = '';
	const n = Math.max(1, Math.round(th));
	for (let i = 0; i <= n; i++) { const a = (th * i) / n; d += `${i ? 'L' : 'M'}${g.gx(a).toFixed(1)},${g.gy(tau(ARM, a)).toFixed(1)} `; }
	const flip = prog(f, opposite, 18);
	const [px, py] = [g.gx(th), g.gy(t)];
	const ghosts = prog(f, angles2, 14) * (1 - prog(f, acw - 10, 12));
	const tick = {fontFamily: 'Inter Tight, sans-serif', fontWeight: 700, fontSize: 28} as const;
	return (
		<>
			<SceneHeading text="Torque follows sin θ" at={-40} size={56} />
			<FrameSvg>
				<SpannerNut cx={S7.cx} cy={S7.cy} armPx={S7.arm} />
				<PivotDot x={S7.cx} y={S7.cy} />
				{sweepOut < 0.99 ? <g opacity={1 - sweepOut}>
					<line x1={ex} y1={ey} x2={ex} y2={ey - Lf * Math.sin((th * Math.PI) / 180)} stroke={TURN.perp.stroke} strokeWidth={9} strokeLinecap="round" opacity={prog(f, follows, 12)} />
					<Push x={ex} y={ey} deg={th} L={Lf} />
					<ArcAngle px={ex} py={ey} r={52} a1={0} a2={Math.max(0.6, th)} color={INK} size={30} />
				</g> : null}
				{ghosts > 0.01 ? <g opacity={ghosts}>{[30, 90, 150].map(a => { const [tx, ty] = tipOf(ex, ey, a, Lf); return <g key={a}><line x1={ex} y1={ey} x2={tx} y2={ty} stroke={AMBER.stroke} strokeWidth={4} /><line x1={tx} y1={ty} x2={tx} y2={ey} stroke={TURN.perp.stroke} strokeWidth={7} strokeLinecap="round" /></g>; })}</g> : null}
				{f >= direction ? <g>
					<Push x={ex} y={ey} deg={90 - 180 * flip} L={Lf} at={direction} />
					<TurnArrow cx={S7.cx} cy={S7.cy} r={120} from={100} to={190} color={TURN.acw.stroke} at={acw} out={opposite} />
					<TurnArrow cx={S7.cx} cy={S7.cy} r={120} from={260} to={170} color={TURN.cw.stroke} at={opposite + 14} />
				</g> : null}
				{/* graph */}
				<rect x={GR.x} y={GR.y} width={GR.w} height={GR.h} rx={18} fill={CARD} stroke="rgba(60,45,20,0.16)" strokeWidth={2.5} />
				{[0, 30, 60, 90, 120, 150, 180].map(a => <g key={a}><line x1={g.gx(a)} x2={g.gx(a)} y1={g.top} y2={g.bottom} stroke="#e4dccd" strokeWidth={2} /><text x={g.gx(a)} y={g.bottom + 34} textAnchor="middle" style={tick} fill={INK}>{a}</text></g>)}
				{[0, 5, 10, 15, 20].map(v => <g key={v}><line x1={g.left} x2={g.right} y1={g.gy(v)} y2={g.gy(v)} stroke="#e4dccd" strokeWidth={2} /><text x={g.left - 12} y={g.gy(v) + 9} textAnchor="end" style={tick} fill={INK}>{v}</text></g>)}
				<path d={`M${g.left},${g.top - 14} V${g.bottom} H${g.right + 12}`} fill="none" stroke={INK} strokeWidth={3.5} />
				{f >= zero ? <path d={d} fill="none" stroke={INK} strokeWidth={5} strokeLinejoin="round" /> : null}
				{f >= zero ? <circle cx={px} cy={py} r={10} fill={AMBER.stroke} stroke={CARD} strokeWidth={3} /> : null}
				{th >= 30 ? <circle cx={g.gx(30)} cy={g.gy(10)} r={8} fill={INK} /> : null}
				{th >= 90 ? <circle cx={g.gx(90)} cy={g.gy(20)} r={8} fill={INK} /> : null}
				{th >= 179.5 ? <circle cx={g.gx(180)} cy={g.gy(0)} r={8} fill={INK} /> : null}
			</FrameSvg>
			<Lbl x={g.left + 6} y={g.top - 36} color={INK} size={28}>τ (N m)</Lbl>
			<Lbl x={g.right} y={g.bottom + 74} color={INK} anchor="end" size={28}>θ (degrees)</Lbl>
			<Lbl x={g.gx(30) + 14} y={g.gy(10) + 34} at={ninety - 40} color={INK} size={28}>30°: 10</Lbl>
			{th >= 90 ? <Lbl x={g.gx(90)} y={g.gy(20) - 26} color={INK} anchor="middle" size={30}><AnswerBox at={ninety + 8}>20 N m</AnswerBox></Lbl> : null}
			<HandTag x={g.gx(90) + 70} y={g.gy(20) + 40} text="peak at 90°" at={ninety + 16} size={30} color={INK} />
			<Lbl x={g.gx(180) - 6} y={g.gy(0) - 26} at={eighty} color={INK} anchor="end" size={28}>180°: 0</Lbl>
			<Lbl x={g.left + 20} y={GR.y + GR.h + 46} at={follows} color={INK} size={32}>τ = 0.25 × 80 × sin θ</Lbl>
			<Readouts x={1330} y={190} w={494} size={46} title="live" rows={[
				{label: 'θ', value: fx(th, 0) + '°', color: INK},
				{label: 'F sin θ', value: fx(FORCE * Math.sin((th * Math.PI) / 180), 1), unit: 'N', color: TURN.perp.ink},
				{label: 'r⊥ = r sin θ', value: fx(ARM * Math.sin((th * Math.PI) / 180), 3), unit: 'm', color: TURN.arm.ink},
				{label: 'τ', value: fx(t, 1), unit: 'N m', color: INK},
			]} />
			<Card x={96} y={200} w={560} border={AMBER.stroke}>
				<Title color={AMBER.ink}>The sweep</Title>
				<Line size={34}>same 80 N, same point,</Line>
				<Line size={34}>only the angle θ changes</Line>
			</Card>
			<Card x={1330} y={590} w={494} at={onlyPart - 6}>
				<Line size={34}>Only F sin θ turns it.</Line>
				<Line size={34} at={angles2 - 40}>Biggest when F is at 90°.</Line>
			</Card>
			<HandTag x={ex - 60} y={ey + 120} text="biggest at 90°" at={angles2 + 6} out={acw - 10} size={30} color={TURN.perp.ink} />
			<Lbl x={S7.cx - 40} y={S7.cy - 160} at={acw} out={opposite} color={TURN.acw.ink} anchor="middle" size={34}>anticlockwise</Lbl>
			<Lbl x={S7.cx - 40} y={S7.cy + 170} at={opposite + 14} color={TURN.cw.ink} anchor="middle" size={34}>clockwise</Lbl>
			<HandTag x={96} y={950} text="more on direction next time" at={opposite + 20} size={30} color={INK_SOFT} />
		</>
	);
};

// ---------- 8. two slips ----------
const Mini: React.FC<{cx: number; cy: number; arm: number; children?: React.ReactNode}> = ({cx, cy, arm, children}) => (
	<FrameSvg><SpannerNut cx={cx} cy={cy} armPx={arm} /><PivotDot x={cx} y={cy} r={8} />{children}</FrameSvg>
);
export const S08: React.FC = () => {
	const id = 'two-slips';
	const f = useCurrentFrame();
	const first = cue(id, 'First'), asIf = cue(id, 'as if'), ten = cue(id, 'ten'), second = cue(id, 'Second'), ifQ = cue(id, 'If a question'), factor = cue(id, 'factor'), always = cue(id, 'Always use');
	const A = {cx: 230, cy: 390, arm: 300}, B = {cx: 230, cy: 760, arm: 300};
	const ea = A.cx + A.arm, eb = B.cx + B.arm, L = 150;
	const c30 = Math.cos(Math.PI / 6), s30 = Math.sin(Math.PI / 6);
	const tf = -A.arm * c30, foot: [number, number] = [ea + tf * c30, A.cy - tf * s30];
	return (
		<>
			<SceneHeading text="Two slips to avoid" at={-40} size={56} />
			<Mini cx={A.cx} cy={A.cy} arm={A.arm}>
				<Push x={ea} y={A.cy} deg={30} L={L} width={6} />
				<ArcAngle px={ea} py={A.cy} r={56} a1={0} a2={30} label="30°" size={28} lr={86} />
				<line x1={A.cx} y1={A.cy} x2={foot[0]} y2={foot[1]} stroke={TURN.arm.stroke} strokeWidth={6} opacity={prog(f, ten, 12)} />
				<DashLine x1={ea} y1={A.cy} x2={foot[0] - 60 * c30} y2={foot[1] + 60 * s30} color={AMBER.stroke} at={ten} width={3} />
				<Bracket x1={A.cx} y1={A.cy + 70} x2={ea} y2={A.cy + 70} color={ROLE.slate.stroke} at={asIf} />
			</Mini>
			<Lbl x={(A.cx + ea) / 2} y={A.cy + 116} at={asIf} color={ROLE.slate.ink} anchor="middle" size={30}>full r = 0.25 m</Lbl>
			<Lbl x={A.cx + 360} y={A.cy + 150} at={ten} color={TURN.arm.ink} size={30}>r⊥ = 0.125 m</Lbl>
			<Lbl x={96} y={250} at={first} color={INK} size={TYPE.current}>1. the full handle with an angled force</Lbl>
			<Card x={1340} y={430} w={484} out={ifQ - 10} border={ROLE.given.stroke}>
				<Title color={ROLE.given.ink}>The case</Title>
				<Line size={32} color={AMBER.ink}>F = 80 N at 30° to the handle</Line>
				<Line size={32} color={ROLE.given.ink}>r = 0.25 m</Line>
			</Card>
			<CrossedChip x={720} y={300} at={asIf} crossAt={ten} size={38} caption="full r, angled F">τ = rF = 0.25 × 80 = 20 N m</CrossedChip>
			<Row at={ten + 10} size={TYPE.current} style={{position: 'absolute', left: 720, top: 430}}>τ = rF sin 30° = <AnswerBox at={ten + 14}>10 N m</AnswerBox></Row>
			<Mini cx={B.cx} cy={B.cy} arm={B.arm}>
				<Push x={eb} y={B.cy} deg={30} L={L} width={6} />
				<DashLine x1={eb} y1={B.cy + 40} x2={eb} y2={B.cy - 170} color={INK_SOFT} at={ifQ} width={3} dash="8 7" />
				<ArcAngle px={eb} py={B.cy} r={96} a1={30} a2={90} label="60°" size={30} lr={130} at={ifQ + 8} color={ROLE.slate.ink} />
				<ArcAngle px={eb} py={B.cy} r={56} a1={0} a2={30} label="30°" size={28} lr={86} at={always} />
				<VecArrow x={B.cx} y={B.cy + 64} dx={B.arm} dy={0} color={TURN.r.stroke} width={5} at={always} head={18} />
			</Mini>
			<Lbl x={B.cx + B.arm / 2} y={B.cy + 106} at={always} color={TURN.r.ink} anchor="middle" size={30}>r</Lbl>
			<Lbl x={96} y={600} at={second} color={INK} size={TYPE.current}>2. the angle from the wrong line</Lbl>
			<CrossedChip x={720} y={660} at={ifQ} crossAt={factor} size={38} caption="wrong line">τ = rF sin 60°</CrossedChip>
			<Row at={always} size={TYPE.current} style={{position: 'absolute', left: 720, top: 790}}>θ from r: τ = rF sin 30°</Row>
			<HandTag x={720} y={900} text="find θ between r and F" at={always + 20} size={TYPE.handSmall} color={TURN.r.ink} />
		</>
	);
};

// ---------- 9. memory aid ----------
const S9 = {cx: 250, cy: 600, arm: 540};
export const S09: React.FC = () => {
	const id = 'memory-aid';
	const f = useCurrentFrame();
	const sq = cue(id, 'Push square'), far = cue(id, 'push far'), sqMeans = cue(id, 'Square means'), farMeans = cue(id, 'far means'), bigger = cue(id, 'bigger'), andIf = cue(id, 'And if'), passes = cue(id, 'passes through'), helps = cue(id, 'helps');
	const ex = S9.cx + S9.arm, ey = S9.cy;
	const pz = (a: number) => Math.sin(Math.PI * Math.max(0, Math.min(1, (f - a) / 24)));
	return (
		<>
			<SceneHeading text="The short version" at={-40} size={56} />
			<FrameSvg>
				<SpannerNut cx={S9.cx} cy={S9.cy} armPx={S9.arm} />
				<PivotDot x={S9.cx} y={S9.cy} />
				<Push x={ex} y={ey} deg={90} L={280} />
				<RightMark x={ex} y={ey} a={90} size={26 + 10 * pz(sq)} width={3.5 + 2 * pz(sq)} color={TURN.perp.stroke} />
				<Bracket x1={S9.cx} y1={ey + 90} x2={ex} y2={ey + 90} color={TURN.arm.stroke} />
				{pz(far) > 0.01 ? <line x1={S9.cx} y1={ey + 90} x2={ex} y2={ey + 90} stroke={TURN.arm.soft} strokeWidth={22 * pz(far)} strokeLinecap="round" opacity={0.9} /> : null}
				<TurnArrow cx={S9.cx} cy={S9.cy} r={170} from={100} to={100 + ARC_PER_NM * 20} color={INK} at={bigger} />
				{f >= andIf ? <g opacity={prog(f, andIf, 12)}>
					<line x1={ex} y1={ey} x2={ex - 190} y2={ey} stroke={INK_SOFT} strokeWidth={7} strokeLinecap="round" />
					<path d={`M${ex - 214},${ey} L${ex - 186},${ey - 14} L${ex - 186},${ey + 14} Z`} fill={INK_SOFT} />
				</g> : null}
				<DashLine x1={ex + 60} y1={ey} x2={S9.cx - 150} y2={ey} color={INK_SOFT} at={passes} width={3} dash="10 8" />
			</FrameSvg>
			<Lbl x={(S9.cx + ex) / 2} y={ey + 140} color={TURN.arm.ink} anchor="middle" size={34}>moment arm (far)</Lbl>
			<Lbl x={ex + 20} y={ey - 240} color={TURN.perp.ink} size={34}>at right angles</Lbl>
			<Lbl x={ex + 20} y={ey - 196} color={TURN.perp.ink} size={34}>(square)</Lbl>
			<Lbl x={ex - 130} y={ey - 90} at={andIf} color={INK_SOFT} anchor="middle" size={30}>push along</Lbl>
			<HandTag x={96} y={900} text="line through the pivot: τ = 0" at={helps - 20} size={TYPE.handSmall} color={INK} />
			<Card x={1150} y={680} w={674} at={andIf} border={INK_SOFT}>
				<Line size={34}>line of action through the pivot:</Line>
				<Line size={34}>r⊥ = 0, so τ = 0, however hard you push</Line>
			</Card>
			<Card x={1150} y={200} w={674} pad="18px 36px 22px">
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: INK_SOFT}}>Memory aid</div>
				<div style={{...DISPLAY(64, TURN.perp.ink), fontFamily: FONT_HAND, transform: `scale(${1 + 0.06 * pz(sq)})`, transformOrigin: 'left center'}}>Push square,</div>
				<div style={{...DISPLAY(64, TURN.arm.ink), fontFamily: FONT_HAND, transform: `scale(${1 + 0.06 * pz(far)})`, transformOrigin: 'left center'}}>push far.</div>
				<Line size={32} color={TURN.perp.ink} at={sqMeans}>square: at right angles to r</Line>
				<Line size={32} color={TURN.arm.ink} at={farMeans}>far: a long moment arm</Line>
				<Line size={34} at={bigger} mt={12}><Boxed at={bigger + 10} size={34}>τ = r⊥F = rF sin θ</Boxed></Line>
			</Card>
		</>
	);
};

export {polar, DrawPath, Title};
