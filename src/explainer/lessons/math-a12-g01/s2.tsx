// Scenes 5 to 8: worked problem 1 solved (the violet rider reaches gradient 4 at x = 3 where the board settles;
// x = −1 is crossed against x > 0; the tangent y = 4x − 3 − 6 ln 3), worked problem 2 (the torch at the origin: the
// slip y = x misses the curve; the contact point a slides along y = eˣ with the tangent's height at x = 0 read live,
// reaching 0 only at a = 1), worked problem 3 (the family through (1, −2) narrows to x³ − 3x, which lands on d10's
// painted coaster track; the car rides; (−1, 2) is a local maximum) and the framed memory card.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {FrameSvg, HandTag, LiveReadoutBoard, MATH_DOWN, MATH_UP, PlateImg, SceneHeading, StudioPlot, TangentPlate, fnPath, kf, screenAngle, smooth} from '../../math/studio';
import {K5, K6, K7, K8} from './cuemap';
import {AR, Ac, AnswerBox, BR, BoxCard, Bc, CAR, Calc, CarOnRail, Chip, EqStrip, FONT_DISPLAY, FONT_HAND, FramedCard, GOOD, GREY, Gy, HOOK_WIN, INK, LIT, MarkChip, MiniTree, RED, Row, SKATE, Slip, SkateGraph, TORCH, TORCH_LENS, Task, TrackPlate, TreeChips, VIO, df1, rideH, stageMap} from './parts';
import type {Stage} from './parts';
import {G4, W1Top, gp} from './s1';

// ---------- 5. worked problem 1: solve, reject, tangent ----------
export const S05: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K5;
	const xr = kf(fr, [[0, 0.7], [k.set, 0.7], [k.one - 40, 3]]);
	const settle = prog(fr, k.one - 34, 24);
	const [cx, cy] = gp(G4, -1, 9.5);
	return (
		<>
			<SceneHeading text="Worked problem 1: solve, reject, tangent" at={-300} size={44} />
			<W1Top />
			<SkateGraph g={G4} board={0.25 + 0.75 * settle} boardLift={40 * (1 - smooth(settle))} vm1={1 - prog(fr, k.rej + 10, 16)} band={1}
				rider={{x: xr, o: prog(fr, k.set, 12) * (1 - prog(fr, k.so, 12))}} tangent={smooth(prog(fr, k.three, 30))} point={prog(fr, k.height, 12)} />
			<MarkChip x={cx - 70} y={cy - 30} at={-300} out={k.one - 10} size={34} color={GREY}>x = −1</MarkChip>
			<LiveReadoutBoard x={466} y={412} width={240} at={k.set} out={k.so} rows={[{label: 'x', value: xr, digits: 2}, {label: 'gradient', value: df1(xr), digits: 2, role: 'gradient'}]} />
			<Chip x={1180} y={284} at={-300} size={40} color={BR.ink}>domain: x &gt; 0</Chip>
			<Row x={960} y={390} at={k.set} size={52} small={36} dim={prog(fr, k.mult, 12)}>2x − 6/x = 4</Row>
			<Row x={960} y={455} at={k.mult} size={48} small={36} dim={prog(fr, k.fact, 12)}>2x² − 6 = 4x, so x² − 2x − 3 = 0</Row>
			<Row x={960} y={520} at={k.fact} size={52} small={36} dim={prog(fr, k.at, 12)}>(x − 3)(x + 1) = 0</Row>
			<Row x={960} y={590} at={k.one} size={52} small={40} dim={prog(fr, k.at, 12)}>x = 3  or</Row>
			<MarkChip x={1230} y={582} at={k.one} crossAt={k.rej} size={44}>x = −1</MarkChip>
			<HandTag x={1450} y={548} text="outside the domain" at={k.rej + 8} size={36} color={RED} />
			<Row x={960} y={680} at={k.height} size={48} small={36} dim={prog(fr, k.so + 30, 12)}>point: (3, 9 − 6 ln 3)</Row>
			<Row x={960} y={748} at={k.so} size={46} small={36}>y − (9 − 6 ln 3) = 4(x − 3)</Row>
			<AnswerBox x={960} y={830} at={k.three} size={48}>y = 4x − 3 − 6 ln 3</AnswerBox>
			<Calc x={1680} y={600} w={190} value={fr >= k.height + 20 ? '≈ 2.408' : undefined} />
			<HandTag x={690} y={760} text="gradient 4 here" at={k.one - 10} out={k.so} size={36} color={VIO.ink} />
		</>
	);
};

// ---------- 6. worked problem 2: a tangent through an outside point ----------
const G6 = {x: 40, y: 420, w: 880, h: 510};
const W6 = {x: [-2, 2.5] as [number, number], y: [-1, 8] as [number, number]};
const E = Math.E;
export const S06: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K6;
	const a = kf(fr, [[0, -1], [k.a, -1], [k.a + 200, 2], [k.now + 20, 0.2], [k.one, 1]]);
	const slide = prog(fr, k.a, 12);
	const h0 = Math.exp(a) * (1 - a);
	const yx = prog(fr, k.yx - 10, 12) * (1 - prog(fr, k.instead, 16));
	const graze = prog(fr, k.one + 6, 16);
	return (
		<>
			<SceneHeading text="Worked problem 2: through an outside point" at={4} size={44} />
			<Chip x={1120} y={92} at={k.here + 10} size={30} color={LIT.ink}>Demand? → outside point: name it a</Chip>
			<Task x={96} y={180} w={1728} at={k.find} size={40}>Find the equation of the beam (the tangent through the origin).</Task>
			<EqStrip x={96} y={300} at={k.torch} size={48}>y = eˣ</EqStrip>
			<BoxCard x={400} y={294} w={620} at={k.isnt} size={36} title="given">torch at (0, 0), not on the curve</BoxCard>
			<StudioPlot x={G6.x} y={G6.y} width={G6.w} height={G6.h} window={W6} xTicks={[-1, 1, 2]} yTicks={[{value: E, label: 'e'}, 5]} at={-30}
				html={m => <TangentPlate plate={TORCH} point={m.pf(0, 0)} angle={screenAngle(m.pf, 0, 0, graze > 0.5 ? E : 1)} w={200} contact={TORCH_LENS} />}>
				{m => {
					const line = (s: number, c: number, o: number, color: string, w = 6, dash?: string) => {const [p0, q0] = m.p(W6.x[0], s * W6.x[0] + c), [p1, q1] = m.p(W6.x[1], s * W6.x[1] + c); return <line x1={p0} y1={q0} x2={p1} y2={q1} stroke={color} strokeWidth={w} strokeLinecap="round" strokeDasharray={dash} opacity={o} />;};
					const [ox, oy] = m.p(0, 0), [, o1] = m.p(0, 1);
					return <>
						<g clipPath={m.clip}>
							{yx > 0.01 ? line(1, 0, yx * 0.9, '#9a9184', 7) : null}
							{graze > 0.01 ? <>{line(E, 0, graze * 0.35, '#f2c94c', 26)}{line(E, 0, graze, VIO.stroke, 6)}</> : null}
							{slide > 0.01 && graze < 0.99 ? line(Math.exp(a), Math.exp(a) * (1 - a), slide * (1 - graze), VIO.stroke, 6) : null}
							<path d={fnPath(m, Math.exp, W6.x[0], Math.log(8.2), 300)} stroke={INK} strokeWidth={7} fill="none" strokeLinecap="round" />
						</g>
						{prog(fr, k.comp, 10) * yx > 0.01 ? <g opacity={prog(fr, k.comp, 10) * (1 - prog(fr, k.instead, 16))}><line x1={ox - 26} x2={ox - 26} y1={oy} y2={o1} stroke={RED} strokeWidth={5} /><text x={ox - 40} y={(oy + o1) / 2 + 10} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 30, fill: RED}}>gap 1</text>
							{(() => {const [bx, by] = m.p(1.9, 1.9); return <g stroke={RED} strokeWidth={7} strokeLinecap="round"><line x1={bx - 22} y1={by - 22} x2={bx + 22} y2={by + 22} /><line x1={bx - 22} y1={by + 22} x2={bx + 22} y2={by - 22} /></g>;})()}</g> : null}
						{slide > 0.01 ? <g opacity={slide}>
							<circle cx={m.p(a, Math.exp(a))[0]} cy={m.p(a, Math.exp(a))[1]} r={14} fill={AR.stroke} stroke="#fffdf8" strokeWidth={4} />
							{h0 > W6.y[0] && h0 < W6.y[1] ? <circle cx={ox} cy={m.p(0, h0)[1]} r={10} fill={VIO.stroke} stroke="#fffdf8" strokeWidth={3} opacity={1 - graze} /> : null}
						</g> : null}
						<circle cx={ox} cy={oy} r={11} fill={INK} stroke="#fffdf8" strokeWidth={3} />
						{graze > 0.01 ? <text x={m.p(1, E)[0] + 22} y={m.p(1, E)[1] + 10} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 32, fill: INK}} stroke="#fffdf8" strokeWidth={7} paintOrder="stroke" opacity={graze}>(1, e)</text> : null}
					</>;
				}}
			</StudioPlot>
			<LiveReadoutBoard x={170} y={474} width={300} at={k.a} labelSize={28} rows={[{label: <Ac>contact point a</Ac>, value: a, digits: 2, role: 'a'}, {label: 'height at x = 0', value: h0, digits: 2, role: 'gradient'}]} />
			<HandTag x={560} y={520} text="beam misses" at={k.comp + 10} out={k.instead} size={40} color={RED} />
			<HandTag x={600} y={560} text="grazes" at={k.one + 20} size={42} color={VIO.ink} />
			<MarkChip x={960} y={420} at={k.slip} out={k.instead + 30} crossAt={k.comp} size={38}>gradient at x = 0 is 1, so y = x?</MarkChip>
			<Row x={960} y={430} at={k.point} size={44} small={34} dim={prog(fr, k.so, 12)}>contact point: (<Ac>a</Ac>, e<sup><Ac>a</Ac></sup>)</Row>
			<Row x={960} y={492} at={k.grad} size={44} small={34} dim={prog(fr, k.so, 12)}>gradient: e<sup><Ac>a</Ac></sup></Row>
			<Row x={960} y={554} at={k.so} size={48} small={36} dim={prog(fr, k.put, 12)}>y − e<sup><Ac>a</Ac></sup> = e<sup><Ac>a</Ac></sup>(x − <Ac>a</Ac>)</Row>
			<Row x={960} y={622} at={k.put} size={48} small={36} dim={prog(fr, k.divide, 12)}>0 − e<sup><Ac>a</Ac></sup> = e<sup><Ac>a</Ac></sup>(0 − <Ac>a</Ac>)</Row>
			<Row x={960} y={690} at={k.divide} size={48} small={36} dim={prog(fr, k.one, 12)}>−e<sup><Ac>a</Ac></sup> = −<Ac>a</Ac> e<sup><Ac>a</Ac></sup></Row>
			<Row x={960} y={758} at={k.one} size={52} small={52}><Ac>a</Ac> = 1</Row>
			<div style={{position: 'absolute', left: 1130, top: 772, opacity: prog(fr, k.one + 10, 12), fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, color: GREY}}>(e<sup>a</sup> ≠ 0)</div>
			<AnswerBox x={960} y={838} at={k.ex} size={52}>y = ex</AnswerBox>
			<Calc x={1680} y={560} w={190} value={fr >= k.comp ? (fr < k.instead + 20 ? 'gap 1' : fr >= k.beam ? 'e ≈ 2.718' : undefined) : undefined} />
		</>
	);
};

// ---------- 7. worked problem 3: working backwards ----------
const ST: Stage = {x: 40, y: 410, w: 940, h: rideH(940)};
const fam = (b: number) => {const a = -3 - b; return (x: number) => x ** 3 + a * x * x + b * x;};
const GHOSTS = [-6, -4.5, -1.5, 0];
export const S07: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K7;
	const famO = prog(fr, k.three1, 14);
	const b = fr < k.three2 ? -3 + 3 * Math.sin(((fr - k.three1) / 114) * 2 * Math.PI) * famO : kf(fr, [[k.three2, -3 + 3 * Math.sin(((k.three2 - k.three1) / 114) * 2 * Math.PI)], [k.three2 + 34, -3]]);
	const a = -3 - b;
	const known = fr >= k.three1;
	const track = 0.4 + 0.6 * prog(fr, k.track - 10, 24);
	const car = prog(fr, k.track, 12);
	const carX = kf(fr, [[k.track, -1.85], [k.track + 150, 1]]);
	const Mp = stageMap(ST);
	const phase2 = prog(fr, k.deriv - 10, 16);
	return (
		<>
			<SceneHeading text="Worked problem 3: working backwards" at={4} size={44} />
			<Chip x={1060} y={92} at={k.last + 10} size={30} color={LIT.ink}>Demand? → stationary point: f(c) = k, f′(c) = 0</Chip>
			<Task x={96} y={180} w={1728} at={k.find} size={40}>Find a and b, then classify the other stationary point.</Task>
			<EqStrip x={96} y={300} at={k.coaster} size={48}>f(x) = x³ + <Ac>a</Ac>x² + <Bc>b</Bc>x</EqStrip>
			<BoxCard x={640} y={294} w={640} at={k.coaster + 30} size={36} title="given">dip (stationary point): (1, −2)</BoxCard>
			<StudioPlot x={ST.x} y={ST.y} width={ST.w} height={ST.h} window={HOOK_WIN} xTicks={[-2, -1, 1, 2, 3]} yTicks={[5, 10, 15]} at={-30} />
			<FrameSvg>
				<TrackPlate Mp={Mp} opacity={track} />
				<defs><clipPath id="g01-s7"><rect x={Mp.box.left} y={Mp.box.top} width={Mp.box.width} height={Mp.box.height} /></clipPath></defs>
				<g clipPath="url(#g01-s7)">
					{GHOSTS.map(g => {const fn = fam(g); let d = ''; for (let i = 0; i <= 200; i++) {const x = -2.5 + (6 * i) / 200; const [px, py] = Mp.pt(x, Math.max(-8, Math.min(28, fn(x)))); d += `${i ? 'L' : 'M'}${px.toFixed(1)},${py.toFixed(1)}`;} return <path key={g} d={d} stroke="#9a9184" strokeWidth={4} fill="none" opacity={famO * (1 - prog(fr, k.three2, 20)) * 0.8} />;})}
					{known ? (() => {const fn = fam(b); let d = ''; for (let i = 0; i <= 240; i++) {const x = -2.5 + (6 * i) / 240; const [px, py] = Mp.pt(x, Math.max(-8, Math.min(28, fn(x)))); d += `${i ? 'L' : 'M'}${px.toFixed(1)},${py.toFixed(1)}`;} return <path d={d} stroke={INK} strokeWidth={7} fill="none" strokeLinejoin="round" opacity={famO} />;})() : null}
					{(() => {const o = prog(fr, k.three2 + 30, 12); if (o < 0.01) return null; const [p0, q0] = Mp.pt(0.3, -2), [p1, q1] = Mp.pt(1.7, -2); return <line x1={p0} y1={q0} x2={p1} y2={q1} stroke={VIO.stroke} strokeWidth={7} strokeLinecap="round" opacity={o} />;})()}
				</g>
				{(() => {const [px, py] = Mp.pt(1, -2); return <><circle cx={px} cy={py} r={14} fill={INK} stroke="#fffdf8" strokeWidth={4} opacity={prog(fr, k.coaster + 30, 10)} /><text x={px + 22} y={py + 44} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 32, fill: INK}} stroke="#fffdf8" strokeWidth={7} paintOrder="stroke" opacity={prog(fr, k.coaster + 30, 10)}>(1, −2)</text></>;})()}
				<CarOnRail Mp={Mp} x0={carX} w={130} opacity={car} />
				{(() => {const o = prog(fr, k.max, 12); if (o < 0.01) return null; const [px, py] = Mp.pt(-1, 2), [qx, qy] = Mp.pt(1, -2); return <g opacity={o}><circle cx={px} cy={py} r={26} fill="none" stroke={GOOD.stroke} strokeWidth={6} /><circle cx={qx} cy={qy} r={26} fill="none" stroke={GREY} strokeWidth={5} /></g>;})()}
				{(() => {const o = prog(fr, k.deriv + 20, 12); if (o < 0.01) return null; const yy = Mp.pt(0, -3.2)[1], xs = [-2.5, -1, 1, 3.5].map(v => Mp.pt(v, 0)[0]); return <g opacity={o}>
					<line x1={xs[0]} x2={xs[3]} y1={yy} y2={yy} stroke={INK} strokeWidth={3} />
					{[1, 2].map(i => <line key={i} x1={xs[i]} x2={xs[i]} y1={yy - 22} y2={yy + 22} stroke={INK} strokeWidth={3} />)}
					{[['+', MATH_UP], ['−', MATH_DOWN], ['+', MATH_UP]].map(([s, c], i) => <text key={i} x={(xs[i] + xs[i + 1]) / 2} y={yy + 14} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, fill: c}} opacity={i === 2 ? prog(fr, k.grad + 20, 10) : prog(fr, k.grad, 10)}>{s}</text>)}
					<text x={xs[0] + 4} y={yy - 18} style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 28, fill: GREY}}>sign of f′</text>
				</g>;})()}
			</FrameSvg>
			<LiveReadoutBoard x={140} y={460} width={320} size={40} labelSize={30} at={k.on} inline rows={[
				{label: <Ac>a</Ac>, value: a, digits: 2, role: 'a', text: known ? undefined : '?'},
				{label: <Bc>b</Bc>, value: b, digits: 2, role: 'b', text: known ? undefined : '?'},
				{label: 'f(1)', value: -2, digits: 2, text: known ? undefined : '?'},
				{label: 'f′(1)', value: 3 + 2 * a + b, digits: 2, role: 'gradient', text: known ? undefined : '?'},
			]} />
			<HandTag x={520} y={470} text="the coaster track!" at={k.track + 6} size={42} color={GOOD.ink} />
			<div style={{position: 'absolute', inset: 0, opacity: 1 - phase2}}>
				<div style={{position: 'absolute', left: 1020, top: 420, display: 'flex', gap: 14, opacity: prog(fr, k.two, 12)}}>
					{['on the curve', 'flat there'].map(s => <div key={s} style={{background: '#fffdf8', border: `3px solid ${INK}`, borderRadius: 14, padding: '2px 16px 4px', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 32, color: INK}}>{s}</div>)}
				</div>
				<Row x={1020} y={490} at={k.on} size={40} small={34} dim={prog(fr, k.flat, 12)}>f(1) = 1 + <Ac>a</Ac> + <Bc>b</Bc> = −2, so <Ac>a</Ac> + <Bc>b</Bc> = −3</Row>
				<HandTag x={1030} y={572} text="one condition: still a family" at={k.three1 + 20} out={k.three2} size={36} color={GREY} />
				<Row x={1020} y={610} at={k.flat} size={40} small={34} dim={prog(fr, k.three2, 12)}>f′(x) = 3x² + 2<Ac>a</Ac>x + <Bc>b</Bc></Row>
				<Row x={1020} y={668} at={k.three2 - 30} size={40} small={34} dim={prog(fr, k.sub, 12)}>f′(1) = 3 + 2<Ac>a</Ac> + <Bc>b</Bc> = 0, so 2<Ac>a</Ac> + <Bc>b</Bc> = −3</Row>
				<HandTag x={1030} y={752} text="two conditions: one curve" at={k.three2 + 30} out={k.sub + 20} size={36} color={VIO.ink} />
				<Row x={1020} y={760} at={k.sub + 20} size={44} small={44}>subtract: <Ac>a</Ac> = 0, <Bc>b</Bc> = −3</Row>
			</div>
			<AnswerBox x={1020} y={850} at={k.curve} size={48}>f(x) = x³ − 3x</AnswerBox>
			{phase2 > 0.01 ? <div style={{position: 'absolute', inset: 0, opacity: phase2}}>
				<Row x={1020} y={420} at={k.deriv} size={44} small={44}>f′(x) = 3x² − 3 = 3(x − 1)(x + 1)</Row>
				<Row x={1020} y={488} at={k.grad} size={34} small={34} color={GREY}>+ then − around x = −1</Row>
				<Chip x={1020} y={540} at={k.max} size={40} color={GOOD.ink}>local maximum (−1, 2)</Chip>
				<Chip x={1020} y={620} at={k.max + 20} size={32} color={GREY}>(1, −2): local minimum, the dip</Chip>
				<Slip x={1020} y={690} w={800} at={k.using} strikeAt={k.family - 20} size={38} caption="it leaves a whole family of a and b">one equation, two unknowns</Slip>
			</div> : null}
		</>
	);
};

// ---------- 8. memory aid ----------
export const AID_MAIN = 'Last step suggests the rule. The domain picks the answers.';
export const S08: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K8;
	return (
		<>
			<SceneHeading text="The whole habit in one line" at={4} size={44} />
			<FramedCard x={290} y={170} w={1340} h={700} at={-30} />
			<div style={{position: 'absolute', left: 340, top: 192, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 46, color: '#6b6358'}}>Memory aid</div>
			<PlateImg plate={SKATE} x={1050} y={204} w={170} />
			<PlateImg plate={TORCH} x={1250} y={204} w={150} />
			<PlateImg plate={CAR} x={1440} y={196} w={140} />
			<div style={{position: 'absolute', left: 340, top: 270, width: 1240, opacity: prog(fr, k.last, 12), fontFamily: FONT_HAND, fontWeight: 700, fontSize: 60, lineHeight: 1.1, color: INK}}>{AID_MAIN}</div>
			<div style={{position: 'absolute', left: 340, top: 430, opacity: prog(fr, k.a, 12), fontFamily: FONT_HAND, fontWeight: 700, fontSize: 48, color: INK}}>Point not given? Name it <Ac>a</Ac>.</div>
			<div style={{position: 'absolute', left: 330, top: 510, width: 1260, height: 3, background: 'rgba(60,45,20,0.14)', opacity: prog(fr, k.try, 12)}} />
			<TreeChips x={340} y={540} dir="col" size={34} at={k.try} lit={[k.last2, k.allowed]} res={['× : product rule', 'all real x']} resAt={[k.last2 + 12, k.allowed + 6]} gap={14} />
			<div style={{position: 'absolute', left: 1000, top: 530, opacity: prog(fr, k.try, 12), fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 44, color: INK}}>x e^(2x)</div>
			<MiniTree kind="xe2x" cx={1330} y={600} s={0.9} leafAt={[k.last2 - 30, k.last2 - 20]} rootAt={k.last2 + 6} collapsed o={prog(fr, k.try + 6, 12)} />
		</>
	);
};
export {Gy, CAR, AR, BR, LIT, smooth, PlateImg};
