// Scenes 6 to 9: the physics (swap the parts, keep the product), the two flight times, two, one or none (the
// target slider), the memory aid.
import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {Enter, FONT_HAND, prog} from '../../kit';
import {FrameSvg, HandTag, MarkSpan, SceneHeading, kf} from '../../math/studio';
import {INK, INK_SOFT, TYPE} from '../../shared/tokens';
import {AidCard, AnswerBox, BallSvg, Bracket, Chip, DISPLAY, HandNote, MS, Q, ROLE, Readouts, Row, Sub, Sup, type World} from '../../physics/projectile/board';
import {clockAt, flightAt, fx} from '../../physics/projectile/flight';
import {Ring} from '../phys-y12-m5-v03/parts';
import {CliffStage} from '../phys-y12-m5-v05/parts';
import {HIGH, LOW, R0, RMAX, RUN_HIGH, RUN_LOW, T_HIGH, T_LOW, U, UX_LOW, UY_LOW, angles, cue, flightT} from './common';
import {HG, HX, LaunchPits, Lbl, SideTri, StrobesA, Target, pathA} from './parts';
import {Boxed, Calc, Title, card} from './s1';

const K = 13; // px per m s^-1 for the triangles
const XL = UX_LOW * K, YL = UY_LOW * K;

// ---------- 6. the physics: swap the parts, keep the product ----------
const WS6: World = {x0: 150, y0: 930, ppm: 5};
export const S06: React.FC = () => {
	const id = 'swap-product';
	const f = useCurrentFrame();
	const resolve = cue(id, 'Resolve both'), tw7 = cue(id, 'twenty-seven'), th1 = cue(id, 'thirteen point one'), highOne = cue(id, 'high one'), swapped = cue(id, 'swapped'), hv = cue(id, 'horizontal velocity'), depends = cue(id, 'depends only'), fast = cue(id, 'fast across'), slow = cue(id, 'slow across'), swapping = cue(id, 'Swapping'), product = cue(id, 'product'), change = cue(id, 'change');
	const sp = prog(f, swapped, 30);
	const slide = prog(f, swapping, 30);
	const lowT: [number, number] = [150, 600];
	const hx0 = interpolate(slide, [0, 1], [560, lowT[0]]);
	const hiT: [number, number] = [hx0, 600];
	// moving numbers: the low triangle's 27.0 (horizontal) goes to the high triangle's vertical side; 13.1 the other way
	const p27: [number, number] = [interpolate(sp, [0, 1], [lowT[0] + XL / 2, hiT[0] + YL + 16]), interpolate(sp, [0, 1], [lowT[1] + 40, hiT[1] - XL / 2 - 125 * slide])];
	const p13: [number, number] = [interpolate(sp, [0, 1], [lowT[0] + XL + 16, hiT[0] + YL / 2]), interpolate(sp, [0, 1], [lowT[1] - YL / 2, hiT[1] + 40 + 50 * slide])];
	const col27 = sp < 0.5 ? ROLE.x.ink : ROLE.y.ink, col13 = sp < 0.5 ? ROLE.y.ink : ROLE.x.ink;
	return (
		<>
			<SceneHeading text="The physics: swap the parts" at={-40} size={56} />
			<FrameSvg>
				<SideTri x0={lowT[0]} y0={lowT[1]} X={XL} Y={YL} arc="25.8°" arcR={200} />
				<SideTri x0={hiT[0]} y0={hiT[1]} X={YL} Y={XL} at={highOne} arc={slide > 0.5 ? undefined : '64.2°'} />
				{slide > 0 ? <line x1={lowT[0]} y1={lowT[1]} x2={lowT[0] + 330} y2={lowT[1] - 330} stroke={INK_SOFT} strokeWidth={3} strokeDasharray="10 8" opacity={slide} /> : null}
				<line x1={WS6.x0 - 50} x2={760} y1={WS6.y0} y2={WS6.y0} stroke={INK} strokeWidth={4} />
				<Target x={WS6.x0 + R0 * WS6.ppm} y={WS6.y0} />
				<path d={pathA(WS6, LOW, T_LOW)} fill="none" stroke={ROLE.v.stroke} strokeWidth={4} />
				<path d={pathA(WS6, HIGH, T_HIGH)} fill="none" stroke={ROLE.v.stroke} strokeWidth={4} strokeDasharray="12 9" />
				{f >= fast ? <StrobesA w={WS6} deg={LOW} upTo={T_LOW} d={20} /> : null}
				{f >= slow ? <StrobesA w={WS6} deg={HIGH} upTo={T_HIGH} d={20} /> : null}
			</FrameSvg>
			<Lbl x={lowT[0] - 10} y={lowT[1] - YL - 30} out={swapping} color={ROLE.v.ink} size={30}>low: 30<MS /></Lbl>
			<Lbl x={lowT[0] + XL + 18} y={lowT[1] - YL + 40} at={swapping + 30} color={ROLE.v.ink} size={30}>low: 30<MS /></Lbl>
			<Lbl x={p27[0]} y={p27[1]} at={tw7} color={col27} anchor={sp < 0.5 ? 'middle' : 'start'} size={TYPE.current}>27.0</Lbl>
			<Lbl x={p13[0]} y={p13[1]} at={th1} color={col13} anchor={sp < 0.5 ? 'start' : 'middle'} size={TYPE.current}>13.1</Lbl>
			{sp >= 1 && slide < 0.02 ? <Lbl x={hiT[0] - 10} y={hiT[1] - XL - 30} color={ROLE.v.ink} size={30}>high: 30<MS /></Lbl> : null}
			<HandTag x={560} y={800} text="fast across, brief" at={fast} size={TYPE.handSmall} color={ROLE.x.ink} />
			<HandTag x={560} y={860} text="slow across, long" at={slow} size={TYPE.handSmall} color={ROLE.y.ink} />
			<Enter at={resolve} style={{position: 'absolute', left: 860, top: 186, width: 964}}>
				<div style={{...card, border: `3px solid ${INK}`}}>
					<Title>Resolve both launches</Title>
					<div style={{...DISPLAY(34, INK, 750), marginTop: 4}}>low 25.8°: <Q s="u" ax="x" /> = 27.01, <Q s="u" ax="y" /> = 13.06</div>
					<div style={{...DISPLAY(34, INK, 750), opacity: prog(f, highOne, 12)}}>high 64.2°: <Q s="u" ax="x" /> = 13.06, <Q s="u" ax="y" /> = 27.01 <span style={{fontFamily: FONT_HAND, color: INK, opacity: prog(f, swapped, 12)}}>  swapped</span></div>
				</div>
			</Enter>
			<div style={{position: 'absolute', left: 860, top: 420, display: 'flex', flexDirection: 'column', gap: 12}}>
				<Row at={hv} ageAt={depends} size={TYPE.current} oldSize={38}>R = <Q s="u" ax="x" /> × t<Sub2>flight</Sub2></Row>
				<Row at={depends} size={TYPE.current}>t<Sub2>flight</Sub2> = 2<Q s="u" ax="y" /> ÷ g</Row>
				<Row at={depends + 40} size={TYPE.working}><Boxed color={INK} size={TYPE.working}>R = 2<Q s="u" ax="x" /><Q s="u" ax="y" /> ÷ g</Boxed></Row>
				<Row at={product - 6} size={TYPE.current}><MarkSpan kind="circle" at={change} color={INK}><Q s="u" ax="x" /><Q s="u" ax="y" /> = 27.01 × 13.06 = 352.8 m<Sup>2</Sup> s<Sup>−2</Sup></MarkSpan></Row>
			</div>
			<Chip x={860} y={830} at={product + 14} size={34} color={ROLE.given.ink} border={ROLE.given.stroke} bg={ROLE.given.soft}>same product for both, so the same range</Chip>
		</>
	);
};
const Sub2: React.FC<{children: React.ReactNode}> = ({children}) => <span style={{fontSize: '0.62em', position: 'relative', top: '0.28em'}}>{children}</span>;

// ---------- 7. two flight times, one landing point ----------
const W7: World = {x0: 150, y0: 880, ppm: 10};
export const S07: React.FC = () => {
	const id = 'flight-times';
	const f = useCurrentFrame();
	const ft = cue(id, 'flight time'), lowP = cue(id, 'For the low path'), t1 = cue(id, "that's two times"), r1 = cue(id, 'twenty-seven times'), m1 = cue(id, 'metres'), highP = cue(id, 'For the high path'), t2 = cue(id, "it's two times"), r2 = cue(id, 'thirteen point one times'), m2 = cue(id, 'metres', 2), diff = cue(id, 'different times'), one = cue(id, 'one landing point');
	const start = f >= highP ? highP : lowP;
	const clk = clockAt(f, start, T_HIGH);
	const sl = flightAt(RUN_LOW, Math.min(clk, T_LOW)), sh = flightAt(RUN_HIGH, clk);
	const pulse = Math.sin(Math.PI * Math.max(0, Math.min(1, (f - one) / 24)));
	const tx = (t: number) => 1010 + t * 130;
	return (
		<>
			<SceneHeading text="Two flight times, one landing point" at={-40} size={54} />
			<FrameSvg>
				<LaunchPits mx={W7.x0} gy={W7.y0} degs={[HIGH, LOW]} lw={110} right={930} />
				<Target x={W7.x0 + R0 * W7.ppm} y={W7.y0} />
				<path d={pathA(W7, LOW, T_LOW)} fill="none" stroke={ROLE.v.stroke} strokeWidth={4} />
				<path d={pathA(W7, HIGH, T_HIGH)} fill="none" stroke={ROLE.v.stroke} strokeWidth={4} strokeDasharray="12 9" />
				{f >= lowP ? <BallSvg cx={W7.x0 + sl.x * W7.ppm} cy={W7.y0 - sl.y * W7.ppm - 12} d={24} /> : null}
				{f >= lowP ? <BallSvg cx={W7.x0 + sh.x * W7.ppm} cy={W7.y0 - sh.y * W7.ppm - 12} d={24} /> : null}
				<line x1={tx(0)} x2={tx(6)} y1={880} y2={880} stroke={INK} strokeWidth={4} />
				{[0, 1, 2, 3, 4, 5, 6].map(t => <g key={t}><line x1={tx(t)} x2={tx(t)} y1={872} y2={888} stroke={INK} strokeWidth={3} /><text x={tx(t)} y={922} textAnchor="middle" style={{fontFamily: 'Inter Tight, sans-serif', fontWeight: 700, fontSize: 28}} fill={INK}>{t}</text></g>)}
				<circle cx={tx(Math.min(clk, 6))} cy={880} r={10} fill={INK} opacity={f >= lowP ? 1 : 0} />
				{f >= t1 ? <circle cx={tx(T_LOW)} cy={880} r={13 + 5 * pulse} fill={ROLE.v.stroke} stroke={INK} strokeWidth={3} /> : null}
				{f >= t2 ? <circle cx={tx(T_HIGH)} cy={880} r={13 + 5 * pulse} fill={CARD_FILL} stroke={ROLE.v.stroke} strokeWidth={5} /> : null}
				<Ring cx={W7.x0 + R0 * W7.ppm + 10} cy={W7.y0 - 40} rx={50} ry={56} at={one} />
			</FrameSvg>
			<Lbl x={tx(6) + 20} y={884} color={INK_SOFT} size={28}>t (s)</Lbl>
			<Lbl x={tx(T_LOW)} y={840} at={t1} color={ROLE.v.ink} anchor="middle" size={30}>low</Lbl>
			<Lbl x={tx(T_HIGH)} y={840} at={t2} color={ROLE.v.ink} anchor="middle" size={30}>high</Lbl>
			<Enter at={ft - 6} style={{position: 'absolute', left: 1000, top: 180}}><Boxed color={ROLE.y.stroke} size={TYPE.current}><span style={{color: INK}}>level ground: t = 2<Q s="u" ax="y" plain /> ÷ g</span></Boxed></Enter>
			<Enter at={lowP - 10} style={{position: 'absolute', left: 1000, top: 280, width: 824}}>
				<div style={{...card, border: `3px solid ${ROLE.v.stroke}`, padding: '8px 22px 10px'}}>
					<Title color={ROLE.v.ink}>low 25.8°</Title>
					<Row at={t1} size={TYPE.current}><span style={{color: ROLE.y.ink}}>t = 2 × 13.064 ÷ 9.8 = 2.666 s</span></Row>
					<Row at={r1} size={TYPE.current}><span style={{color: ROLE.x.ink}}>R = 27.006 × 2.666 = </span><AnswerBox at={m1}>72.0 m</AnswerBox></Row>
				</div>
			</Enter>
			<Enter at={highP - 10} style={{position: 'absolute', left: 1000, top: 540, width: 824}}>
				<div style={{...card, border: `3px dashed ${ROLE.v.stroke}`, padding: '8px 22px 10px'}}>
					<Title color={ROLE.v.ink}>high 64.2°</Title>
					<Row at={t2} size={TYPE.current}><span style={{color: ROLE.y.ink}}>t = 2 × 27.006 ÷ 9.8 = 5.511 s</span></Row>
					<Row at={r2} size={TYPE.current}><span style={{color: ROLE.x.ink}}>R = 13.064 × 5.511 = </span><AnswerBox at={m2}>72.0 m</AnswerBox></Row>
				</div>
			</Enter>
			<HandTag x={300} y={330} text="different times, same spot" at={diff} size={TYPE.hand} color={INK} />
			<Lbl x={W7.x0 + 40} y={250} color={INK} size={32}>{`one clock: t = ${fx(f >= lowP ? clk : 0, 2)} s`}</Lbl>
		</>
	);
};
const CARD_FILL = '#fffdf8';

// ---------- 8. two, one or none (the target slider) ----------
export const S08: React.FC = () => {
	const id = 'two-one-none';
	const f = useCurrentFrame();
	const push = cue(id, 'Push'), meet = cue(id, 'meet at'), uxuy = cue(id, 'u x equals'), n918 = cue(id, 'ninety-one'), works = cue(id, 'works'), beyond = cue(id, 'Beyond'), bigger = cue(id, 'bigger than one'), calc = cue(id, 'calculator shows'), physics = cue(id, "that's the physics");
	const z = prog(f, 0, 30);
	const w: World = {x0: HX, y0: HG, ppm: interpolate(z, [0, 1], [12, 10])};
	const R = kf(f, [[push, R0], [meet + 20, RMAX], [beyond + 20, RMAX], [bigger, 100]]);
	const sol = angles(R);
	const s = (R * 9.8) / (U * U);
	const degs = sol ? [sol[1], sol[0]] : [45, 45];
	const tx = w.x0 + R * w.ppm;
	const out = !sol;
	return (
		<>
			<SceneHeading text="Two angles, one, or none?" at={-40} size={56} />
			<FrameSvg>
				<LaunchPits mx={w.x0} gy={w.y0} degs={degs} right={1250} />
				<Target x={tx} y={w.y0} />
				{sol ? <path d={pathA(w, sol[0], flightT(sol[0]))} fill="none" stroke={ROLE.v.stroke} strokeWidth={6} /> : null}
				{sol ? <path d={pathA(w, sol[1], flightT(sol[1]))} fill="none" stroke={ROLE.v.stroke} strokeWidth={6} strokeDasharray="16 10" /> : null}
				<Bracket x1={w.x0} y1={w.y0 + 34} x2={tx} y2={w.y0 + 34} color={ROLE.x.ink} />
				<SideTri x0={780} y0={460} X={U * Math.SQRT1_2 * 7} Y={U * Math.SQRT1_2 * 7} at={uxuy} arc="45°" />
			</FrameSvg>
			<Lbl x={(w.x0 + tx) / 2} y={w.y0 + 72} color={ROLE.x.ink} anchor="middle" size={TYPE.current}>R = {fx(R, 1)} m</Lbl>
			<Lbl x={780 + 74} y={500} at={uxuy} out={beyond} color={ROLE.x.ink} anchor="middle" size={30}>21.2</Lbl>
			<Lbl x={780 + 160} y={380} at={uxuy} out={beyond} color={ROLE.y.ink} size={30}>21.2</Lbl>
			<HandNote x={780} y={250} at={uxuy + 10} out={beyond} size={32} color={INK}>u<Sub>x</Sub> = u<Sub>y</Sub>: biggest product</HandNote>
			<Readouts x={1290} y={186} w={534} size={44} title="live: slide the target" rows={[
				{label: 'R', value: fx(R, 1), unit: 'm', color: ROLE.x.ink},
				{label: <>Rg ÷ u<Sup>2</Sup></>, value: s.toFixed(3), color: s > 1 ? ROLE.slate.ink : INK, ring: bigger},
				{label: 'θ low', value: sol ? `${fx(sol[0], 1)}°` : 'none', color: ROLE.v.ink},
				{label: 'θ high', value: sol ? `${fx(sol[1], 1)}°` : 'none', color: ROLE.v.ink},
				{label: 't low', value: sol ? fx(flightT(sol[0]), 2) : '–', unit: 's', color: ROLE.y.ink},
				{label: 't high', value: sol ? fx(flightT(sol[1]), 2) : '–', unit: 's', color: ROLE.y.ink},
			]} />
			<Enter at={works - 8} style={{position: 'absolute', left: 1290, top: 690, width: 534}}>
				<div style={{...DISPLAY(32, INK, 800), whiteSpace: 'normal'}}>maximum range: R = u<Sup>2</Sup> ÷ g = <AnswerBox at={works}>91.8 m</AnswerBox> at 45°</div>
			</Enter>
			<Enter at={calc} style={{position: 'absolute', left: 1290, top: 820}}><Calc>sin<Sup>−1</Sup>(1.089) = Error</Calc></Enter>
			<HandTag x={1290} y={930} text="sine can't exceed 1" at={calc + 20} size={30} color={INK} />
			<Chip x={300} y={200} at={physics} size={34} border={INK}>R &lt; 91.8 m: two angles</Chip>
			<Chip x={300} y={268} at={physics + 6} size={34} border={INK}>R = 91.8 m: one angle (45°)</Chip>
			<Chip x={300} y={336} at={physics + 12} size={34} border={INK}>R &gt; 91.8 m: none at this speed</Chip>
			{out ? <Lbl x={tx - 24} y={w.y0 - 34} color={ROLE.slate.ink} anchor="end" size={34}>out of reach</Lbl> : null}
			{f >= n918 && !out ? <Lbl x={w.x0 + 240} y={w.y0 - 60} color={ROLE.v.ink} size={32}>{sol && Math.abs(sol[0] - 45) < 0.2 ? 'one path: 45°' : ''}</Lbl> : null}
		</>
	);
};

// ---------- 9. memory aid ----------
const WC: World = {x0: 1010, y0: 690, ppm: 4.4};
const cliffPath = (deg: number) => {
	const u = 20, X = 50;
	const T = X / (u * Math.cos((deg * Math.PI) / 180));
	return pathA(WC, deg, T, 0, 60, u);
};
export const S09: React.FC = () => {
	const id = 'memory-aid';
	const f = useCurrentFrame();
	const product2 = cue(id, 'product', 1), level = cue(id, 'level ground'), cliff = cue(id, 'cliff'), comp2 = cue(id, 'complementary', 2), swapC = cue(id, 'swap the components');
	const x0 = 170, y0 = 720, k = 11;
	return (
		<>
			<SceneHeading text="Swap the parts, keep the product" at={-40} size={56} />
			<FrameSvg>
				<line x1={x0} y1={y0} x2={x0 + 360} y2={y0 - 360} stroke={INK_SOFT} strokeWidth={3} strokeDasharray="10 8" />
				<SideTri x0={x0} y0={y0} X={UX_LOW * k} Y={UY_LOW * k} arc="25.8°" arcR={170} />
				<SideTri x0={x0} y0={y0} X={UY_LOW * k} Y={UX_LOW * k} />
			</FrameSvg>
			<Lbl x={x0 + UX_LOW * k + 14} y={y0 - UY_LOW * k / 2} color={ROLE.y.ink} size={34}>13.1</Lbl>
			<Lbl x={x0 + UX_LOW * k / 2 + 60} y={y0 + 40} color={ROLE.x.ink} anchor="middle" size={34}>27.0</Lbl>
			<Lbl x={x0 + UY_LOW * k + 14} y={y0 - 280} color={ROLE.y.ink} size={34}>27.0</Lbl>
			<Lbl x={x0 + UY_LOW * k / 2 - 30} y={y0 + 40} color={ROLE.x.ink} anchor="middle" size={34}>13.1</Lbl>
			<HandTag x={x0 + 250} y={y0 - 380} text="mirror in 45°" at={swapC} size={30} color={INK_SOFT} />
			<Enter at={-30} style={{position: 'absolute', left: 120, top: 800}}><Boxed color={INK} size={TYPE.current}>R = 2<Q s="u" ax="x" /><Q s="u" ax="y" /> ÷ g</Boxed></Enter>
			<AidCard x={820} y={186} w={1004} at={product2 - 8}>
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 64, lineHeight: 1.1}}><span style={{color: ROLE.x.ink}}>Swap the parts,</span> <span style={{color: ROLE.y.ink}}>keep the product.</span></div>
				<div style={{...DISPLAY(30, INK_SOFT, 700), marginTop: 6}}>(level ground only)</div>
			</AidCard>
			<Enter at={level} style={{position: 'absolute', left: 820, top: 440}}>
				<div style={{display: 'inline-block', background: ROLE.given.soft, border: `3px solid ${ROLE.given.stroke}`, borderRadius: 12, padding: '4px 16px 6px', ...DISPLAY(32, ROLE.given.ink, 700)}}>level ground, no air resistance, constant g</div>
			</Enter>
			<Enter at={cliff - 6} style={{position: 'absolute', left: 820, top: 540, width: 1004, height: 380}}>
				<div style={{...card, border: `3px solid ${INK_SOFT}`, height: 370, boxSizing: 'border-box', padding: '8px 20px'}}>
					<Title>From a cliff (20 m high, 20<MS />, target 50 m out)</Title>
				</div>
			</Enter>
			<FrameSvg>
				{f >= cliff - 6 ? (
					<g opacity={prog(f, cliff - 6, 16)}>
						<CliffStage mx={WC.x0} gy={WC.y0} seaY={WC.y0 + 20 * WC.ppm} lw={80} deg={35} leftX={850} rightX={1780} edgeOff={10} levelLine={false} />
						<Target x={WC.x0 + 50 * WC.ppm} y={WC.y0 + 20 * WC.ppm} />
						<path d={cliffPath(14.1)} fill="none" stroke={ROLE.v.stroke} strokeWidth={5} />
						<path d={cliffPath(54.1)} fill="none" stroke={ROLE.v.stroke} strokeWidth={5} strokeDasharray="12 9" />
					</g>
				) : null}
			</FrameSvg>
			<Lbl x={1500} y={640} at={cliff + 10} color={ROLE.v.ink} size={32}>14.1° and 54.1°</Lbl>
			<HandTag x={1500} y={700} text="not complementary" at={comp2} size={TYPE.handSmall} color={INK} />
		</>
	);
};
