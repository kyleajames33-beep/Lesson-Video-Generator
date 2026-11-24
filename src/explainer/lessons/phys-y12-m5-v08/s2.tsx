// Scenes 6 to 11: repeats and uncertainty, straightening the curve, the gradient as a speed, spread or shift,
// what a straight line can't tell you, the memory aid.
import React from 'react';
import {staticFile, useCurrentFrame} from 'remotion';
import {DrawPath, Enter, FONT_HAND, prog} from '../../kit';
import {DrawnMark, FrameSvg, HandTag, MarkSpan, SceneHeading} from '../../math/studio';
import {CARD, INK, INK_SOFT, TYPE} from '../../shared/tokens';
import {AidCard, AnswerBox, Bracket, Chip, DISPLAY, HandNote, MS, Q, ROLE, Row, Sup} from '../../physics/projectile/board';
import {fx} from '../../physics/projectile/flight';
import {FIT, H, HEAD, HEAD_SIZE, REP, REP_MORE, RS, SHIFT, SQ, cue, fallT} from './common';
import {Dot, GraphFrame, LAB, Lbl, Strip, grGeom, landX, rig, stripX} from './parts';
import {BenchStage, Boxed, Title, card, launchFrames, launchState} from './s1';

const Half = () => <Sup>½</Sup>;
const GATE_SRC = 'assets/physics/phys-y11-light-gate-v1.png';

// ---------- 6. repeats and uncertainty ----------
export const S06: React.FC = () => {
	const id = 'repeats';
	const f = useCurrentFrame();
	const m53 = cue(id, 'fifty-three'), m55 = cue(id, 'fifty-five'), m57 = cue(id, 'fifty-seven'), random = cue(id, 'random uncertainty'), mean = cue(id, 'mean'), twoCm = cue(id, 'two centimetres'), reading = cue(id, 'reading uncertainty'), us = cue(id, 'limits us'), repeating = cue(id, 'Repeating'), reliable = cue(id, 'reliable'), but = cue(id, 'but it');
	const SX = 140, SW = 1000, A = 0.5, B = 0.6, SY = 470;
	const sx = stripX(SX, SW, A, B);
	const marks = [{v: REP[0], at: m53}, {v: REP[1], at: m55}, {v: REP[2], at: m57}, {v: REP_MORE[0], at: repeating}, {v: REP_MORE[1], at: repeating + 18}];
	const all5 = [...REP, ...REP_MORE].reduce((a, b) => a + b, 0) / 5;
	const lands = [m53, m55, m57];
	const uxs = REP.map(r => r / fallT(0.3));
	const gos = lands.map(l => l - launchFrames(0.3));
	let k = 0;
	for (let i = 0; i < 3; i++) if (f >= gos[i]) k = i;
	const ls = launchState(f, gos[k], 0.3, uxs[k]);
	const miniCam = {k: 0.55, fx: 800, fy: 700, tx: 620, ty: 830};
	const mini = 1 - prog(f, reading - 10, 16);
	return (
		<>
			<SceneHeading text="Repeats and uncertainty" at={-40} size={56} />
			<FrameSvg>
				<Strip x={SX} y={SY} w={SW} a={A} b={B} marks={marks} band={{lo: 0.53, hi: 0.57, at: random}} mean={{v: 0.55, at: mean}} />
				<Bracket x1={sx(0.53)} y1={SY - 80} x2={sx(0.57)} y2={SY - 80} color={INK_SOFT} at={twoCm - 30} />
				{mini > 0 ? <g opacity={mini}><BenchStage h={0.3} cam={miniCam} ball={ls.pos}>
					{REP.map((r, i) => <Dot key={i} x={landX(0.3, uxs[i])} at={lands[i]} r={9} />)}
				</BenchStage></g> : null}
				{f >= reading ? <g opacity={prog(f, reading, 14)}>
					<rect x={140} y={700} width={1000} height={210} rx={16} fill={CARD} stroke="rgba(60,45,20,0.16)" strokeWidth={2.5} />
					{Array.from({length: 51}, (_, i) => <line key={i} x1={180 + i * 18} x2={180 + i * 18} y1={760} y2={760 + (i % 10 === 0 ? 40 : i % 5 === 0 ? 28 : 18)} stroke={INK} strokeWidth={i % 10 === 0 ? 3 : 1.8} />)}
					<line x1={180} x2={1080} y1={760} y2={760} stroke={INK} strokeWidth={3} />
					<rect x={180 + 5 * 18} y={830} width={40 * 18} height={30} rx={6} fill="rgba(107,99,88,0.22)" stroke={INK_SOFT} strokeWidth={2} />
				</g> : null}
			</FrameSvg>
			<Lbl x={SX + 10} y={SY - 170} color={INK_SOFT} size={30}>illustrative values, h = 0.30 m</Lbl>
			<Lbl x={(sx(0.53) + sx(0.57)) / 2} y={SY - 112} at={twoCm - 30} color={INK} anchor="middle" size={32}>spread 0.04 m</Lbl>
			<HandTag x={sx(0.57) + 60} y={SY - 30} text="random: unpredictable scatter" at={random + 10} size={30} color={INK_SOFT} />
			<Lbl x={sx(0.55)} y={SY + 140} at={mean} color={ROLE.given.ink} anchor="middle" size={32}>mean 0.55 m</Lbl>
			{f >= reading ? <Lbl x={160} y={735} color={INK} size={30}>1 mm divisions (to scale): reading ± 0.5 mm</Lbl> : null}
			{f >= reading ? <Lbl x={180 + 5 * 18 + 360} y={890} color={INK_SOFT} anchor="middle" size={28}>the 40 mm scatter band</Lbl> : null}
			<HandTag x={830} y={895} text="the scatter limits us" at={us} size={30} color={INK} />
			<Enter at={-30} style={{position: 'absolute', left: 1290, top: 186, width: 534}}>
				<div style={{...card, border: `3px solid ${INK}`}}>
					<Title>One height, three trials</Title>
					<div style={{...DISPLAY(34, ROLE.x.ink, 800), marginTop: 4}}>R: {f >= m53 ? '0.53' : '?'}, {f >= m55 ? '0.55' : '?'}, {f >= m57 ? '0.57' : '?'} m</div>
				</div>
			</Enter>
			<div style={{position: 'absolute', left: 1290, top: 340, display: 'flex', flexDirection: 'column', gap: 10, width: 534}}>
				<Row at={mean} size={TYPE.current}>mean = 0.55 m</Row>
				<Row at={twoCm - 30} size={36}>± = (0.57 − 0.53) ÷ 2 = 0.02 m</Row>
				<Row at={twoCm} size={TYPE.working}><AnswerBox at={twoCm}>R = 0.55 ± 0.02 m</AnswerBox></Row>
			</div>
			<HandTag x={1290} y={640} text="half-range: a simple spread estimate" at={twoCm + 20} size={28} color={INK} />
			<Chip x={1290} y={700} at={reliable} size={32} w={534} border={INK}>more repeats: steadier mean, same scatter</Chip>
			<Lbl x={1300} y={850} at={reliable + 10} color={ROLE.given.ink} size={30}>mean of 5: {fx(all5, 3)} m</Lbl>
			<HandTag x={sx(0.53) - 10} y={SY + 50} text="band stays" at={but} size={30} color={INK_SOFT} anchor="end" />
			<HandTag x={sx(0.55) + 20} y={SY + 186} text="mean steadies" at={but + 10} size={30} color={ROLE.given.ink} />
		</>
	);
};

// ---------- the graph of the sample data ----------
const G7 = {x: 640, y: 176, w: 1184, h: 760};
const dotsAt = (g: ReturnType<typeof grGeom>, p: number) => H.map((h, i) => [g.gx(h + (SQ[i] - h) * p), g.gy(RS[i])] as [number, number]);
const SampleTable: React.FC<{sqAt: number}> = ({sqAt}) => {
	const f = useCurrentFrame();
	return (
		<div style={{position: 'absolute', left: 96, top: 186, width: 500}}>
			<div style={{display: 'inline-block', background: ROLE.given.soft, border: `3px solid ${ROLE.given.stroke}`, borderRadius: 12, padding: '4px 14px 6px', ...DISPLAY(28, ROLE.given.ink, 800), whiteSpace: 'normal'}}>sample data for processing practice, not primary data</div>
			<div style={{...card, marginTop: 16, padding: '8px 18px 12px'}}>
				<div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', ...DISPLAY(32, INK, 800), borderBottom: `2.5px solid ${INK}`, paddingBottom: 4}}><span style={{color: ROLE.y.ink}}>h (m)</span><span style={{color: ROLE.y.ink, opacity: prog(f, sqAt, 12)}}>√h</span><span style={{color: ROLE.x.ink}}>R (m)</span></div>
				{H.map((h, i) => <div key={h} style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', ...DISPLAY(36, INK, 700), borderBottom: '1.5px solid #e4dccd', padding: '4px 0'}}><span>{h.toFixed(2)}</span><span style={{opacity: prog(f, sqAt + i * 4, 12), color: ROLE.y.ink}}>{SQ[i].toFixed(3)}</span><span>{RS[i].toFixed(2)}</span></div>)}
			</div>
		</div>
	);
};

// ---------- 7. straighten the curve ----------
export const S07: React.FC = () => {
	const id = 'linearise';
	const f = useCurrentFrame();
	const plot = cue(id, 'Plot'), curve = cue(id, 'curve'), straight = cue(id, 'straight line'), origin = cue(id, 'origin'), lin = cue(id, 'linearising'), up = cue(id, 'line up');
	const p = prog(f, origin, 40);
	const g = grGeom(G7.x, G7.y, G7.w, G7.h);
	const dots = dotsAt(g, p);
	let curveD = '';
	for (let i = 0; i <= 50; i++) { const h = 0.5 * i / 50; curveD += `${i ? 'L' : 'M'}${g.gx(h).toFixed(1)},${g.gy(FIT.m * Math.sqrt(h) + FIT.c).toFixed(1)} `; }
	return (
		<>
			<SceneHeading text="Straighten the curve" at={-40} size={56} />
			<SampleTable sqAt={straight} />
			<FrameSvg>
				<GraphFrame x={G7.x} y={G7.y} w={G7.w} h={G7.h} xTitle={p < 0.5 ? <>h (m)</> : <>√h (m<Half />)</>} />
				{f >= curve + 10 && p < 1 ? <g opacity={1 - p}><DrawPath d={curveD} at={curve + 10} dur={30} color={ROLE.given.stroke} width={3.5} /></g> : null}
				{f >= origin + 30 ? <DrawPath d={`M${g.gx(0)},${g.gy(0)} L${g.gx(0.75)},${g.gy(0.75 * 1.012)}`} at={origin + 30} dur={24} color={ROLE.v.stroke} width={4} dash="14 9" /> : null}
				{dots.map(([x, y], i) => <circle key={i} cx={x} cy={y} r={11 + 5 * Math.sin(Math.PI * Math.max(0, Math.min(1, (f - plot - i * 5) / 16)))} fill={ROLE.given.stroke} stroke={CARD} strokeWidth={3} />)}
				{f >= up ? <DrawnMark mark={{kind: 'arrow', from: [g.gx(0.62), g.gy(0.52)], to: [g.gx(0.06), g.gy(0.02)], bend: 0.06}} at={up} color={INK} width={4} /> : null}
			</FrameSvg>
			<HandTag x={g.gx(0.38)} y={g.gy(0.28)} text="curve: hard to judge" at={curve + 20} out={origin} size={TYPE.handSmall} color={ROLE.given.ink} />
			<Lbl x={g.gx(0.72)} y={g.gy(0.79)} at={origin + 40} color={ROLE.v.ink} anchor="end" size={30}>model: straight through the origin</Lbl>
			<HandTag x={g.gx(0.52)} y={g.gy(0.36)} text="now straight" at={up} size={TYPE.hand} color={ROLE.given.ink} />
			<Chip x={96} y={640} at={lin} size={32} w={520} border={INK}>linearise: plot so the model gives a straight line</Chip>
		</>
	);
};

// ---------- 8. the gradient is a speed in disguise ----------
const G8 = {x: 96, y: 176, w: 880, h: 600};
export const S08: React.FC = () => {
	const id = 'gradient-test';
	const f = useCurrentFrame();
	const fromModel = cue(id, 'From the model'), soG = cue(id, 'So the gradient'), zero = cue(id, 'zero'), rearr = cue(id, 'Rearranging'), two2 = cue(id, 'two point two'), another = cue(id, 'another way'), gate = cue(id, 'light gate'), agree = cue(id, 'agree'), passed = cue(id, 'passed');
	const g = grGeom(G8.x, G8.y, G8.w, G8.h);
	const dots = dotsAt(g, 1);
	const x1 = 0.75, ry = (x: number) => FIT.m * x + FIT.c;
	const gs = 0.2, gateX = LAB.exitX + 10, gateY = LAB.benchY - 0.4 * LAB.ppm - rig(0.4).r;
	const cam = {k: 1, fx: 560, fy: 520, tx: 380, ty: 860};
	return (
		<>
			<SceneHeading text="The gradient is a speed in disguise" at={-40} size={54} />
			<FrameSvg>
				<GraphFrame x={G8.x} y={G8.y} w={G8.w} h={G8.h} xTitle={<>√h (m<Half />)</>} />
				{dots.map(([x, y], i) => <circle key={i} cx={x} cy={y} r={10} fill={ROLE.given.stroke} stroke={CARD} strokeWidth={3} />)}
				{f >= zero ? <DrawPath d={`M${g.gx(0)},${g.gy(ry(0))} L${g.gx(x1)},${g.gy(ry(x1))}`} at={zero} dur={24} color={ROLE.given.stroke} width={5} /> : null}
				{f >= zero + 20 ? <g opacity={prog(f, zero + 20, 12)}><path d={`M${g.gx(0.35)},${g.gy(ry(0.35))} H${g.gx(0.65)} V${g.gy(ry(0.65))}`} fill="none" stroke={INK} strokeWidth={3} strokeDasharray="8 6" /></g> : null}
				<g>
					<rect x={96} y={790} width={880} height={160} rx={16} fill={CARD} stroke="rgba(60,45,20,0.16)" strokeWidth={2.5} />
					<clipPath id="v08gate"><rect x={98} y={792} width={876} height={156} rx={16} /></clipPath>
					<g clipPath="url(#v08gate)"><BenchStage h={0.4} cam={cam} ball={rig(0.4).exitCentre}>
						{f >= gate ? <image href={staticFile(GATE_SRC)} x={gateX - 420 * gs} y={gateY - 667 * gs} width={1000 * gs} height={1400 * gs} opacity={prog(f, gate, 14)} preserveAspectRatio="none" /> : null}
					</BenchStage></g>
				</g>
			</FrameSvg>
			<Lbl x={g.gx(0.5)} y={g.gy(ry(0.35)) + 40} at={zero + 20} color={INK} anchor="middle" size={32}>m = 1.00 m<Half /></Lbl>
			<Lbl x={g.gx(0.02)} y={g.gy(0.74)} at={zero + 30} color={ROLE.given.ink} size={30}>intercept = 0.002 m (about 0)</Lbl>
			<Enter at={-30} style={{position: 'absolute', left: 1030, top: 186}}><Boxed color={ROLE.v.stroke} size={TYPE.current}><span style={{color: INK}}><MarkSpan kind="underline" at={fromModel} color={ROLE.v.stroke}>R = <Q s="u" ax="x" plain /> √(2 ÷ g) × √h</MarkSpan></span></Boxed></Enter>
			<Enter at={-30} out={rearr - 10} style={{position: 'absolute', left: 1030, top: 440, width: 794}}>
				<div style={{...card, border: `3px solid ${INK}`}}>
					<Title>From the sample data</Title>
					<div style={{...DISPLAY(34, INK, 800), marginTop: 4}}>R ÷ √h ≈ 1.0 at every height</div>
					<div style={{...DISPLAY(34, ROLE.given.ink, 800)}}>the points lie on one straight line</div>
				</div>
			</Enter>
			<Enter at={soG} style={{position: 'absolute', left: 1030, top: 290}}>
				<div style={DISPLAY(TYPE.current, INK, 800)}>gradient m = <span style={{display: 'inline-block', border: `4px solid ${ROLE.x.stroke}`, borderRadius: 12, padding: '0 10px'}}><Q s="u" ax="x" plain /> √(2 ÷ g)</span></div>
			</Enter>
			<HandTag x={1040} y={390} text="a speed in disguise" at={two2} size={TYPE.handSmall} color={ROLE.x.ink} />
			<div style={{position: 'absolute', left: 1030, top: 440, display: 'flex', flexDirection: 'column', gap: 10}}>
				<Row at={rearr} ageAt={two2} size={TYPE.current} oldSize={36}><Q s="u" ax="x" /> = m √(g ÷ 2) = 1.003 × √4.9</Row>
				<Row at={two2 - 6} size={TYPE.working}>&nbsp;&nbsp;= {fx(FIT.ux, 2)}<MS /> ≈ <AnswerBox at={two2}>2.2<MS /></AnswerBox></Row>
			</div>
			<HandTag x={1040} y={640} text="independent check" at={another} size={TYPE.handSmall} color={INK} />
			<Lbl x={560} y={830} color={ROLE.x.ink} size={32}>{f >= gate ? 'light gate at the exit' : 'the exit'}</Lbl>
			{f >= gate ? <Lbl x={560} y={880} color={ROLE.x.ink} size={34}><Q s="u" ax="x" plain /> = ? (measured)</Lbl> : null}
			{f >= agree ? <FrameSvg><g opacity={prog(f, agree, 14)}>
				<line x1={1100} x2={1700} y1={760} y2={760} stroke={INK} strokeWidth={2} />
				<line x1={1300} x2={1500} y1={720} y2={720} stroke={ROLE.given.stroke} strokeWidth={14} /><line x1={1300} x2={1300} y1={704} y2={736} stroke={ROLE.given.stroke} strokeWidth={4} /><line x1={1500} x2={1500} y1={704} y2={736} stroke={ROLE.given.stroke} strokeWidth={4} />
				<line x1={1340} x2={1560} y1={800} y2={800} stroke={ROLE.x.stroke} strokeWidth={14} /><line x1={1340} x2={1340} y1={784} y2={816} stroke={ROLE.x.stroke} strokeWidth={4} /><line x1={1560} x2={1560} y1={784} y2={816} stroke={ROLE.x.stroke} strokeWidth={4} />
			</g></FrameSvg> : null}
			<Lbl x={1290} y={720} at={agree} color={ROLE.given.ink} anchor="end" size={30}>from gradient</Lbl>
			<Lbl x={1330} y={800} at={agree} color={ROLE.x.ink} anchor="end" size={30}>from light gate</Lbl>
			<Chip x={1030} y={850} at={passed - 10} size={32} border={INK}>agree within uncertainty: model supported ✓</Chip>
		</>
	);
};

// ---------- 9. spread or shift? ----------
const IM = [0.572, 0.585, 0.6, 0.611, 0.628] as const, IM_MORE = [0.592, 0.606, 0.58] as const;
export const S09: React.FC = () => {
	const id = 'spread-or-shift';
	const f = useCurrentFrame();
	const spread = cue(id, 'spread over'), random = cue(id, 'spread is random'), three = cue(id, 'three centimetres'), shortfall = cue(id, 'shortfall'), averaging = cue(id, 'averaging'), air = cue(id, 'Air resistance'), tilted = cue(id, 'exit tilted'), height = cue(id, 'height measured'), invest = cue(id, 'investigate');
	const SX = 140, SW = 1240, A = 0.55, B = 0.67, SY = 420;
	const sx = stripX(SX, SW, A, B);
	const marks = [...IM.map((v, i) => ({v, at: spread + i * 4, color: INK_SOFT})), ...IM_MORE.map((v, i) => ({v, at: averaging + 10 + i * 10, color: INK_SOFT}))];
	const chip = (text: string, at: number, y: number) => (
		<Enter at={at} style={{position: 'absolute', left: 140, top: y}}>
			<div style={{display: 'inline-flex', alignItems: 'center', gap: 16, background: CARD, border: `3px solid ${SHIFT.stroke}`, borderRadius: 14, padding: '4px 18px 6px', ...DISPLAY(34, INK, 800)}}>
				<span style={{display: 'inline-block', width: 30, height: 30, border: `3.5px solid ${INK_SOFT}`, borderRadius: 6, opacity: prog(f, invest, 12)}} />{text}
			</div>
		</Enter>
	);
	return (
		<>
			<SceneHeading text="Spread or shift?" at={-40} size={56} />
			<FrameSvg>
				<Strip x={SX} y={SY} w={SW} a={A} b={B} step={0.01} marks={marks} band={{lo: 0.572, hi: 0.628, at: random}} mean={{v: 0.6, at: spread + 24}} />
				<line x1={sx(0.64)} x2={sx(0.64)} y1={SY - 70} y2={SY + 40} stroke={ROLE.v.stroke} strokeWidth={6} strokeDasharray="10 7" />
				<Bracket x1={sx(0.6)} y1={SY - 110} x2={sx(0.64)} y2={SY - 110} color={SHIFT.stroke} at={shortfall} />
				<BenchStage h={0.4} cam={{k: 0.5, fx: 900, fy: 700, tx: 1400, ty: 820}} ball={rig(0.4).at(0)}>
					<line x1={landX(0.4)} x2={landX(0.4)} y1={LAB.benchY - 40} y2={LAB.benchY + 10} stroke={ROLE.v.stroke} strokeWidth={8} strokeDasharray="10 7" />
					{[...IM, ...IM_MORE].map((v, i) => <Dot key={i} x={LAB.exitX + v * LAB.ppm} at={i < 5 ? spread + i * 4 : averaging + 10 + (i - 5) * 10} r={8} color={INK_SOFT} />)}
				</BenchStage>
			</FrameSvg>
			<Lbl x={SX} y={SY - 170} color={INK_SOFT} size={30}>imagine (h = 0.40 m)</Lbl>
			<Lbl x={sx(0.64) + 12} y={SY - 70} color={ROLE.v.ink} size={30}>predicted</Lbl>
			<Lbl x={(sx(0.572) + sx(0.628)) / 2} y={SY + 150} at={random} color={INK_SOFT} anchor="middle" size={32}>6 cm spread, random{f >= three ? ': ± 3 cm' : ''}</Lbl>
			<Lbl x={(sx(0.6) + sx(0.64)) / 2} y={SY - 146} at={shortfall} color={SHIFT.ink} anchor="middle" size={32}>4 cm short: systematic</Lbl>
			<HandTag x={sx(0.64) + 30} y={SY - 140} text="same way every time" at={shortfall + 20} size={30} color={SHIFT.ink} />
			<Enter at={-30} style={{position: 'absolute', left: 1440, top: 186, width: 384}}>
				<div style={{...card, border: `3px solid ${INK}`}}>
					<Title>Two kinds of error</Title>
					<div style={{...DISPLAY(32, INK_SOFT, 800), marginTop: 4, whiteSpace: 'normal', opacity: prog(f, random, 12)}}>random: sets the ±</div>
					<div style={{...DISPLAY(32, SHIFT.ink, 800), marginTop: 4, whiteSpace: 'normal', opacity: prog(f, shortfall, 12)}}>systematic: shifts every result</div>
					<div style={{...DISPLAY(30, INK, 700), marginTop: 4, whiteSpace: 'normal', opacity: prog(f, averaging, 12)}}>averaging never removes a shift</div>
				</div>
			</Enter>
			<Lbl x={140} y={690} at={air - 10} color={SHIFT.ink} size={32}>leads to investigate:</Lbl>
			{chip('air resistance (can only shorten R)', air, 720)}
			{chip('exit tilted down', tilted, 800)}
			{chip("h measured to the ball's centre", height, 880)}
		</>
	);
};

// ---------- 10. what a straight line can't tell you ----------
const G10 = {x: 96, y: 176, w: 1100, h: 760};
export const S10: React.FC = () => {
	const id = 'straight-not-proof';
	const f = useCurrentFrame();
	const slower = cue(id, 'a little slower'), perfect = cue(id, 'perfect straight'), grad = cue(id, 'lower gradient'), indep = cue(id, 'independent'), heights = cue(id, 'heights and speeds');
	const g = grGeom(G10.x, G10.y, G10.w, G10.h);
	const dots = dotsAt(g, 1);
	const x1 = 0.75, ry = (x: number) => FIT.m * x + FIT.c;
	return (
		<>
			<SceneHeading text="What a straight line can't tell you" at={-40} size={54} />
			<FrameSvg>
				<GraphFrame x={G10.x} y={G10.y} w={G10.w} h={G10.h} xTitle={<>√h (m<Half />)</>} shade={[SQ[0], SQ[4]]} shadeAt={heights} />
				<line x1={g.gx(0)} y1={g.gy(ry(0))} x2={g.gx(x1)} y2={g.gy(ry(x1))} stroke={ROLE.given.stroke} strokeWidth={5} />
				{dots.map(([x, y], i) => <circle key={i} cx={x} cy={y} r={10} fill={ROLE.given.stroke} stroke={CARD} strokeWidth={3} />)}
				{SQ.map((s, i) => f >= slower + i * 5 ? <circle key={'s' + i} cx={g.gx(s)} cy={g.gy(RS[i] * 0.97)} r={10} fill={CARD} stroke={SHIFT.stroke} strokeWidth={4} opacity={prog(f, slower + i * 5, 8)} /> : null)}
				{f >= slower + 30 ? <DrawPath d={`M${g.gx(0)},${g.gy(0)} L${g.gx(x1)},${g.gy(ry(x1) * 0.97)}`} at={slower + 30} dur={22} color={SHIFT.stroke} width={4} dash="14 8" /> : null}
			</FrameSvg>
			<Lbl x={g.gx(0.45)} y={g.gy(0.3)} at={slower + 40} color={SHIFT.ink} size={30}>every R × 0.97: still straight</Lbl>
			<HandTag x={g.gx(0.5)} y={g.gy(0.24)} text="straight, but wrong" at={perfect} size={TYPE.handSmall} color={SHIFT.ink} />
			<Lbl x={g.gx(0.33)} y={g.top + 40} at={heights} color={INK} size={30}>tested range: h = 0.10 to 0.50 m, this ball</Lbl>
			<Enter at={-30} style={{position: 'absolute', left: 1250, top: 186, width: 574}}>
				<div style={{...card, border: `3px solid ${INK}`}}>
					<Title>Gradients</Title>
					<div style={{display: 'flex', gap: 28, marginTop: 6}}>
						<div style={DISPLAY(TYPE.working, ROLE.given.ink, 800)}>1.00</div>
						<div style={{...DISPLAY(TYPE.working, SHIFT.ink, 800), opacity: prog(f, grad, 12)}}>0.97</div>
					</div>
					<div style={{...DISPLAY(30, INK, 700), marginTop: 4, whiteSpace: 'normal'}}>both lines straight, both through the origin</div>
				</div>
			</Enter>
			<Enter at={indep - 10} style={{position: 'absolute', left: 1250, top: 470, width: 574}}>
				<div style={{...card, borderLeft: `10px solid ${ROLE.x.stroke}`}}>
					<div style={{...DISPLAY(34, ROLE.x.ink, 800), whiteSpace: 'normal'}}>only an independent <Q s="u" ax="x" plain /> check tells them apart</div>
				</div>
			</Enter>
			<Enter at={heights} style={{position: 'absolute', left: 1250, top: 680, width: 574}}>
				<div style={{...DISPLAY(32, INK, 800), whiteSpace: 'normal'}}>agreement holds only over the heights and speeds tested</div>
			</Enter>
		</>
	);
};

// ---------- 11. memory aid ----------
export const S11: React.FC = () => {
	const id = 'memory-aid';
	const repeats = cue(id, 'Repeats');
	const L = {x: 140, w: 700}, R = {x: 1060, w: 700}, A = 0.58, B = 0.7, Y = 650;
	const lx = stripX(L.x, L.w, A, B), rx = stripX(R.x, R.w, A, B);
	const lm = [0.615, 0.66, 0.632, 0.648, 0.625, 0.655].map((v, i) => ({v, at: i < 3 ? -30 : repeats + (i - 3) * 8, color: INK_SOFT}));
	const rm = [0.596, 0.6, 0.604, 0.598, 0.602, 0.601].map((v, i) => ({v, at: i < 3 ? -30 : repeats + (i - 3) * 8, color: INK_SOFT}));
	return (
		<>
			<SceneHeading text="Spread or shift: keep them apart" at={-40} size={54} />
			<FrameSvg>
				<Strip x={L.x} y={Y} w={L.w} a={A} b={B} step={0.02} labels={false} marks={lm} band={{lo: 0.615, hi: 0.66, at: -30}} mean={{v: 0.64, at: -30}} />
				<Strip x={R.x} y={Y} w={R.w} a={A} b={B} step={0.02} labels={false} marks={rm} band={{lo: 0.596, hi: 0.604, at: -30}} mean={{v: 0.6, at: -30}} />
				<line x1={lx(0.64)} x2={lx(0.64)} y1={Y - 80} y2={Y + 40} stroke={ROLE.v.stroke} strokeWidth={6} strokeDasharray="10 7" />
				<line x1={rx(0.64)} x2={rx(0.64)} y1={Y - 80} y2={Y + 40} stroke={ROLE.v.stroke} strokeWidth={6} strokeDasharray="10 7" />
				<Bracket x1={rx(0.6)} y1={Y - 100} x2={rx(0.64)} y2={Y - 100} color={SHIFT.stroke} />
			</FrameSvg>
			<Lbl x={L.x + L.w / 2} y={Y + 140} color={INK_SOFT} anchor="middle" size={34}>spread: random</Lbl>
			<Lbl x={R.x + R.w / 2} y={Y + 140} color={SHIFT.ink} anchor="middle" size={34}>shift: systematic</Lbl>
			<Lbl x={lx(0.64) + 10} y={Y - 90} color={ROLE.v.ink} size={28}>predicted</Lbl>
			<Lbl x={rx(0.64) + 10} y={Y - 90} color={ROLE.v.ink} size={28}>predicted</Lbl>
			<AidCard x={300} y={190} w={1320} at={repeats - 10}>
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 64, lineHeight: 1.1}}><span style={{color: ROLE.given.ink}}>Repeats steady the mean,</span> <span style={{color: SHIFT.ink}}>not the shift.</span></div>
			</AidCard>
			<HandNote x={140} y={420} at={repeats} size={TYPE.handSmall} color={INK}>more trials: the means settle, the bands stay</HandNote>
		</>
	);
};

export {HEAD, HEAD_SIZE};
