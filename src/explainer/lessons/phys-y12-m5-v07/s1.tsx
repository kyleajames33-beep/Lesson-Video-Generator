// Scenes 1 to 5: the hook (opening on last time's final frame), the one-clock reveal, the range equation run
// backwards for speed and for angle, and the second angle from the sine graph.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Countdown, DrawPath, Enter, prog} from '../../kit';
import {FrameSvg, HandTag, MarkSpan, SceneHeading} from '../../math/studio';
import {CARD, CARD_SHADOW, INK, INK_SOFT, TYPE} from '../../shared/tokens';
import {AnswerBox, BallSvg, Bracket, Chip, CrossedChip, DISPLAY, FlightLane, Ledger, MS, MS2, Q, ROLE, ReadCard, Row, Sup, VecArrow, type World} from '../../physics/projectile/board';
import {clockAt, flightAt, fx} from '../../physics/projectile/flight';
import {Ring} from '../phys-y12-m5-v03/parts';
import {V06FinalFrame} from '../phys-y12-m5-v06/s3';
import {HIGH, HEAD, HEAD_SIZE, LOW, PEAK_HIGH, PEAK_LOW, R0, RUN_HIGH, RUN_LOW, T_HIGH, T_LOW, U, WE1, cue, hold} from './common';
import {HG, HPPM, HX, LaunchPits, Lbl, StrobesA, Target, W12, pathA, ptA} from './parts';

export const card: React.CSSProperties = {background: CARD, borderRadius: 18, boxShadow: CARD_SHADOW, padding: '12px 24px 16px'};
export const Title: React.FC<{children: React.ReactNode; color?: string}> = ({children, color = INK_SOFT}) => <div style={{...DISPLAY(TYPE.label, color, 800), textTransform: 'uppercase', letterSpacing: 1.5}}>{children}</div>;
export const Boxed: React.FC<{color: string; size?: number; children: React.ReactNode}> = ({color, size = TYPE.working, children}) => (
	<div style={{display: 'inline-block', background: CARD, border: `5px solid ${color}`, borderRadius: 16, padding: '2px 22px 8px', ...DISPLAY(size, color)}}>{children}</div>
);
export const Givens: React.FC<{x?: number; y?: number; w?: number; size?: number; at?: number; children: React.ReactNode}> = ({x = 96, y = 176, w = 1150, size = 30, at = -30, children}) => (
	<Enter at={at} style={{position: 'absolute', left: x, top: y, width: w}}>
		<div style={{display: 'inline-block', background: ROLE.given.soft, borderRadius: 12, border: `3px solid ${ROLE.given.stroke}`, padding: '4px 18px 6px', ...DISPLAY(size, ROLE.given.ink, 700), whiteSpace: 'normal'}}>{children}</div>
	</Enter>
);
/** A plain calculator readout chip (dark-ink border, 44 px digits); not a drawing of a calculator. */
export const Calc: React.FC<{children: React.ReactNode}> = ({children}) => (
	<div style={{display: 'inline-block', background: CARD, border: `4px solid ${INK}`, borderRadius: 12, padding: '4px 18px 6px', boxShadow: CARD_SHADOW, ...DISPLAY(TYPE.current, INK, 800), fontVariantNumeric: 'tabular-nums'}}>{children}</div>
);
const TARGET_X = HX + R0 * HPPM;

/** The level-ground stage: launchers, target, 72 m bracket and the two paths (dashed until lit). */
export const PairStage: React.FC<{w?: World; lowLit?: number; highLit?: number; launchers?: number; pathW?: number; lw?: number; right?: number}> = ({w = W12, lowLit, highLit, launchers = 1, pathW = 5, lw, right = 1250}) => {
	const f = useCurrentFrame();
	const tx = w.x0 + R0 * w.ppm;
	const lo = lowLit === undefined ? 0 : prog(f, lowLit, 14), hi = highLit === undefined ? 0 : prog(f, highLit, 14);
	return (
		<g>
			<LaunchPits mx={w.x0} gy={w.y0} degs={[HIGH, LOW]} right={right} opacity={launchers} lw={lw} />
			<Target x={tx} y={w.y0} />
			<path d={pathA(w, LOW, T_LOW)} fill="none" stroke={ROLE.v.stroke} strokeWidth={pathW + 3 * lo} strokeDasharray={lo >= 1 ? undefined : '14 10'} strokeLinecap="round" />
			<path d={pathA(w, HIGH, T_HIGH)} fill="none" stroke={ROLE.v.stroke} strokeWidth={pathW + 3 * hi} strokeDasharray="14 10" strokeLinecap="round" />
		</g>
	);
};

// ---------- 1. hook: which lands first? ----------
export const S01: React.FC = () => {
	const id = 'hook';
	const f = useCurrentFrame();
	const launcher = cue(id, 'launcher'), low = cue(id, 'stays low'), climbs = cue(id, 'climbs'), down = cue(id, 'down'), same = cue(id, 'same instant'), together = cue(id, 'together');
	const h = hold(id);
	const fade = prog(f, 10, 24);
	const twin = prog(f, launcher, 24);
	const a = Math.PI / 4;
	const pk = HX + (R0 / 2) * HPPM;
	return (
		<>
			{fade < 1 ? <div style={{position: 'absolute', inset: 0, opacity: 1 - fade}}><V06FinalFrame /></div> : null}
			<div style={{position: 'absolute', inset: 0, opacity: fade}}>
				<SceneHeading text="Will a projectile clear a wall at a known horizontal position?" at={-60} size={48} out={launcher} />
				<SceneHeading text="Two paths, one target" at={launcher + 6} size={56} />
				<FrameSvg>
					{twin < 1 ? <g opacity={1 - twin}><FlightLane mx={HX} gy={HG} ppm={HPPM} u={U} deg={45} lw={170} right={1250} /></g> : null}
					<PairStage launchers={twin} lowLit={low} highLit={climbs} />
					{twin < 1 ? <g opacity={1 - twin}><VecArrow x={HX} y={HG} dx={150 * Math.cos(a)} dy={-150 * Math.sin(a)} color={ROLE.v.stroke} width={7} /></g> : null}
					<Bracket x1={HX} y1={HG + 34} x2={TARGET_X} y2={HG + 34} color={ROLE.x.ink} />
					<Bracket x1={pk - 24} y1={HG} x2={pk - 24} y2={HG - PEAK_LOW * HPPM} color={ROLE.y.ink} at={low + 10} />
					<Bracket x1={pk + 24} y1={HG} x2={pk + 24} y2={HG - PEAK_HIGH * HPPM} color={ROLE.y.ink} at={climbs + 10} />
					<Ring cx={TARGET_X + 10} cy={HG - 40} rx={50} ry={56} at={down} />
					<Countdown start={h.startFrame} end={h.endFrame} x={1130} y={330} ringFrom={together} />
				</FrameSvg>
				<Lbl x={(HX + TARGET_X) / 2} y={HG + 72} color={ROLE.x.ink} anchor="middle" size={TYPE.current}>72 m</Lbl>
				<Lbl x={TARGET_X + 12} y={HG - 96} color={INK} anchor="middle" size={30}>target</Lbl>
				<Lbl x={HX - 10} y={HG - 110} out={launcher} color={ROLE.v.ink} anchor="end" size={32}>u = 30<MS /></Lbl>
				<Lbl x={pk - 38} y={HG - 40} at={low + 10} color={ROLE.y.ink} anchor="end" size={34}>8.7 m</Lbl>
				<Lbl x={pk + 40} y={HG - PEAK_HIGH * HPPM / 2} at={climbs + 10} color={ROLE.y.ink} size={34}>37.2 m</Lbl>
				<HandTag x={pk - 200} y={HG - 150} text="under 9 m" at={low + 20} size={30} color={ROLE.y.ink} anchor="end" />
				<HandTag x={pk + 40} y={HG - PEAK_HIGH * HPPM - 40} text="37 m" at={climbs + 20} size={30} color={ROLE.y.ink} />
				<Lbl x={300} y={250} at={launcher} color={ROLE.v.ink} size={36}>u = 30<MS /> for both</Lbl>
				<Ledger x={1290} y={186} w={534} h={290} size={30} titleSize={28}
					clock={{value: 't', t: 0.4}}
					hor={{rows: [{content: <><Q s="s" ax="x" plain /> = 72 m</>, at: -30}]}}
					ver={{rows: [{content: <><Q s="s" ax="y" plain /> = 0 (level)</>, at: -30}]}} />
				<Enter at={same - 10} style={{position: 'absolute', left: 1290, top: 520, width: 534}}>
					<div style={{...DISPLAY(TYPE.body, INK, 800), whiteSpace: 'normal'}}>Launched at the same instant: which reaches the target first?</div>
				</Enter>
				{['low first', 'high first', 'together'].map((t, i) => <Chip key={t} x={1290} y={680 + i * 70} at={together + i * 4} size={36}>{t}</Chip>)}
			</div>
		</>
	);
};

// ---------- 2. reveal: one target, two very different flights ----------
export const S02: React.FC = () => {
	const id = 'reveal';
	const f = useCurrentFrame();
	const secs1 = cue(id, 'seconds'), still = cue(id, 'still'), different = cue(id, 'very different'), soWhy = cue(id, 'So why');
	const L = secs1 - Math.round(T_LOW * 30);
	const clk = clockAt(f, L, T_HIGH);
	const tl = Math.min(clk, T_LOW);
	const sl = flightAt(RUN_LOW, tl), sh = flightAt(RUN_HIGH, clk);
	const landL = L + Math.round(T_LOW * 30), landH = L + Math.round(T_HIGH * 30);
	const bl: [number, number] = [HX + sl.x * HPPM, HG - sl.y * HPPM - (tl >= T_LOW - 0.001 ? 13 : 0)];
	const bh: [number, number] = [HX + sh.x * HPPM, HG - sh.y * HPPM - (clk >= T_HIGH - 0.001 ? 13 : 0)];
	return (
		<>
			<SceneHeading text="Two paths, one target" at={-60} size={56} out={soWhy - 10} />
			<SceneHeading text={HEAD} at={soWhy} size={HEAD_SIZE} />
			<FrameSvg>
				<PairStage launchers={1} lowLit={-30} highLit={-30} pathW={3} />
				{tl > 0.001 ? <path d={pathA(W12, LOW, tl)} fill="none" stroke={ROLE.v.stroke} strokeWidth={7} /> : null}
				{clk > 0.001 ? <path d={pathA(W12, HIGH, clk)} fill="none" stroke={ROLE.v.stroke} strokeWidth={7} strokeDasharray="18 10" /> : null}
				<StrobesA w={W12} deg={LOW} upTo={tl} />
				<StrobesA w={W12} deg={HIGH} upTo={clk} />
				{f >= L ? <BallSvg cx={bl[0]} cy={bl[1]} d={26} /> : null}
				{f >= L ? <BallSvg cx={bh[0]} cy={bh[1]} d={26} /> : null}
				<Bracket x1={HX} y1={HG + 34} x2={TARGET_X} y2={HG + 34} color={ROLE.x.ink} />
				<Ring cx={bh[0]} cy={bh[1]} rx={30} ry={30} at={still} />
			</FrameSvg>
			<Lbl x={(HX + TARGET_X) / 2} y={HG + 72} color={ROLE.x.ink} anchor="middle" size={TYPE.current}>72 m</Lbl>
			<HandTag x={760} y={300} text="still in the air" at={still + 6} size={TYPE.handSmall} color={INK} />
			<Chip x={1040} y={640} at={landL} size={34} border={INK}>low: 2.67 s</Chip>
			<Chip x={1040} y={710} at={landH} size={34} border={INK}>high: 5.51 s</Chip>
			<HandTag x={1290} y={540} text="more than twice as long" at={different} size={30} color={INK} />
			<ReadCard x={1290} y={186} w={534} label="one clock, both launches" value={`t = ${fx(clk, 2)}`} unit="s" />
			<Enter at={-30} style={{position: 'absolute', left: 1290, top: 350, width: 534}}>
				<div style={{...card, border: `3px solid ${INK}`}}>
					<Title>Same speed, same target</Title>
					<div style={{...DISPLAY(34, ROLE.v.ink, 800), marginTop: 4}}>low: lands at 2.67 s</div>
					<div style={{...DISPLAY(34, ROLE.v.ink, 800), opacity: prog(f, landH, 12)}}>high: lands at 5.51 s</div>
				</div>
			</Enter>
		</>
	);
};

// ---------- 3. the range equation, run backwards for speed ----------
const WS: World = {x0: 160, y0: 900, ppm: 14};
const W72: World = {x0: 160, y0: 900, ppm: 8};
export const S03: React.FC = () => {
	const id = 'speed-backwards';
	const f = useCurrentFrame();
	const conditions = cue(id, 'conditions'), same = cue(id, 'same height'), air = cue(id, 'no air'), constG = cue(id, 'constant g'), runBack = cue(id, 'run backwards'), say = cue(id, 'Say a projectile'), forU = cue(id, 'for u'), thats = cue(id, "That's the square"), four = cue(id, 'four hundred'), tw1 = cue(id, 'twenty-one');
	const sw = prog(f, say, 20);
	const T38 = (2 * WE1.u * Math.sin((38 * Math.PI) / 180)) / 9.8;
	const cond = (t: string, at: number) => <div style={{...DISPLAY(36, ROLE.given.ink, 800)}}><span style={{opacity: prog(f, at, 12)}}>✓</span> {t}</div>;
	return (
		<>
			<SceneHeading text={HEAD} at={-60} size={HEAD_SIZE} />
			<Enter at={-30} style={{position: 'absolute', left: 96, top: 180}}><Boxed color={ROLE.v.stroke} size={TYPE.working}><span style={{color: INK}}>R = u<Sup>2</Sup> sin 2θ ÷ g</span></Boxed></Enter>
			<HandTag x={96} y={300} text="the equation runs backwards" at={runBack} size={TYPE.handSmall} color={INK} />
			<Enter at={-30} style={{position: 'absolute', left: 860, top: 180, width: 964}}>
				<div style={{...card, borderLeft: `10px solid ${ROLE.given.stroke}`, padding: '10px 24px 12px'}}>
					<Title color={ROLE.given.ink}><MarkSpan kind="underline" at={conditions} color={ROLE.given.stroke}>Only when</MarkSpan></Title>
					{cond('launch and landing at the same height', same)}
					{cond('no air resistance', air)}
					{cond('constant g', constG)}
				</div>
			</Enter>
			<FrameSvg>
				{sw < 1 ? <g opacity={1 - sw}><PairStage w={W72} launchers={1} lowLit={-30} highLit={-30} pathW={4} lw={110} right={820} /></g> : null}
				{sw > 0 ? (
					<g opacity={sw}>
						<LaunchPits mx={WS.x0} gy={WS.y0} degs={[38]} lw={130} right={820} />
						<Target x={WS.x0 + WE1.R * WS.ppm} y={WS.y0} />
						<path d={pathA(WS, 38, T38, 0, 80, WE1.u)} fill="none" stroke={ROLE.v.stroke} strokeWidth={5} strokeDasharray="14 10" />
						<Bracket x1={WS.x0} y1={WS.y0 + 30} x2={WS.x0 + WE1.R * WS.ppm} y2={WS.y0 + 30} color={ROLE.x.ink} />
					</g>
				) : null}
			</FrameSvg>
			{sw < 1 ? <Lbl x={W72.x0 + 300} y={W72.y0 - 330} out={say} color={ROLE.v.ink} size={34}>72 m at 30<MS />: two angles</Lbl> : null}
			<Lbl x={WS.x0 + WE1.R * WS.ppm / 2} y={WS.y0 + 64} at={say} color={ROLE.x.ink} anchor="middle" size={36}>45 m</Lbl>
			<Lbl x={WS.x0 + 80} y={WS.y0 - 44} at={say} color={INK} size={34}>38°</Lbl>
			<Lbl x={WS.x0 + 40} y={WS.y0 - 240} at={say} color={ROLE.v.ink} size={TYPE.current}>u = {f >= tw1 ? <>21.3<MS /></> : '?'}</Lbl>
			<Enter at={runBack - 10} style={{position: 'absolute', left: 860, top: 430, width: 964}}>
				<div style={{display: 'inline-block', background: '#f1ebdf', border: `3px solid ${INK}`, borderRadius: 14, padding: '4px 18px 6px', ...DISPLAY(36, INK, 800)}}>Find the launch speed</div>
			</Enter>
			<Givens x={860} y={500} w={964} at={say} size={30}>R = 45 m | θ = 38° | level ground | g = 9.8<MS2 /></Givens>
			<div style={{position: 'absolute', left: 860, top: 580, display: 'flex', flexDirection: 'column', gap: 10}}>
				<Row at={forU} size={TYPE.working}><Boxed color={INK} size={TYPE.working}>u = √(Rg ÷ sin 2θ)</Boxed></Row>
				<Row at={thats} ageAt={four} size={TYPE.current} oldSize={38}>u = √(45 × 9.8 ÷ sin 76°)</Row>
				<Row at={four} size={TYPE.current}>&nbsp;&nbsp;= √(441 ÷ 0.9703) = √454.5</Row>
				<Row at={tw1 - 6} size={TYPE.working}>&nbsp;&nbsp;= <AnswerBox at={tw1}>21.3<MS /></AnswerBox></Row>
			</div>
		</>
	);
};

// ---------- 4. run it backwards for the angle ----------
const W4: World = {x0: 1060, y0: 920, ppm: 10};
export const S04: React.FC = () => {
	const id = 'angle-backwards';
	const f = useCurrentFrame();
	const rearr = cue(id, 'Rearranging'), s72 = cue(id, 'seventy-two'), z784 = cue(id, 'zero point seven'), inv = cue(id, 'inverse sine'), soTheta = cue(id, 'so theta'), lowPath = cue(id, 'low path'), onlyGave = cue(id, 'only gave');
	const tx = W4.x0 + R0 * W4.ppm;
	return (
		<>
			<SceneHeading text={HEAD} at={-60} size={HEAD_SIZE} />
			<Enter at={-30} style={{position: 'absolute', left: 96, top: 172}}>
				<div style={{display: 'inline-block', background: '#f1ebdf', border: `3px solid ${INK}`, borderRadius: 14, padding: '4px 18px 6px', ...DISPLAY(36, INK, 800)}}>Find the launch angles</div>
			</Enter>
			<Givens x={500} y={176} w={900}>u = 30<MS /> | R = 72 m | level ground | g = 9.8<MS2 /></Givens>
			<Enter at={-30} style={{position: 'absolute', left: 1430, top: 176}}>
				<div style={{display: 'inline-block', background: '#f1ebdf', border: '2.5px solid rgba(60,45,20,0.16)', borderRadius: 12, padding: '2px 12px 4px', ...DISPLAY(28, INK, 700)}}>speed: u = √(Rg ÷ sin 2θ)</div>
			</Enter>
			<div style={{position: 'absolute', left: 96, top: 270, display: 'flex', flexDirection: 'column', gap: 12}}>
				<Row at={rearr} ageAt={z784} size={TYPE.working} oldSize={40}>sin 2θ = Rg ÷ u<Sup>2</Sup></Row>
				<Row at={s72} ageAt={inv} size={TYPE.current} oldSize={38}>&nbsp;&nbsp;= 72 × 9.8 ÷ 30<Sup>2</Sup> = 705.6 ÷ 900</Row>
				<Row at={z784} size={60}>&nbsp;&nbsp;= 0.784</Row>
				<Row at={soTheta} size={TYPE.current}>2θ = 51.63°, θ = 25.81°</Row>
				<Row at={lowPath - 10} size={TYPE.working}>θ ≈ <AnswerBox at={lowPath}>25.8°</AnswerBox> <span style={{fontSize: 32, color: ROLE.v.ink}}>the low path</span></Row>
			</div>
			<Enter at={-30} style={{position: 'absolute', left: 1000, top: 270, width: 824}}>
				<div style={{...card, border: `3px solid ${INK}`, padding: '8px 22px 10px'}}>
					<div style={DISPLAY(34, INK, 800)}>know: u = 30<MS />, R = 72 m</div>
					<div style={DISPLAY(34, ROLE.v.ink, 800)}>want: θ (the launch angle)</div>
				</div>
			</Enter>
			<Enter at={inv} style={{position: 'absolute', left: 96, top: 700}}>
				<MarkSpan kind="circle" at={onlyGave} color={INK}><Calc>sin<Sup>−1</Sup>(0.784) = 51.63°</Calc></MarkSpan>
				<div style={{...DISPLAY(30, INK_SOFT, 700), marginTop: 10, whiteSpace: 'normal', width: 760}}>principal value: the one angle the calculator returns</div>
			</Enter>
			<HandTag x={660} y={726} text="only one?" at={onlyGave + 14} size={TYPE.hand} color={INK} />
			<FrameSvg>
				<LaunchPits mx={W4.x0} gy={W4.y0} degs={[HIGH, LOW]} lw={100} right={1824} left={1000} />
				<Target x={tx} y={W4.y0} />
				<path d={pathA(W4, LOW, T_LOW)} fill="none" stroke={ROLE.v.stroke} strokeWidth={f >= lowPath ? 7 : 4} strokeDasharray={f >= lowPath ? undefined : '12 9'} />
				<path d={pathA(W4, HIGH, T_HIGH)} fill="none" stroke={ROLE.v.stroke} strokeWidth={4} strokeDasharray="12 9" />
			</FrameSvg>
			<Lbl x={W4.x0 + 190} y={W4.y0 - 40} at={lowPath} color={ROLE.v.ink} size={34}>25.8°</Lbl>
			<Lbl x={W4.x0 + 100} y={W4.y0 - 300} color={ROLE.v.ink} size={34}>θ = ?</Lbl>
		</>
	);
};

// ---------- 5. the second angle: sine takes each value twice ----------
const GL = 200, GR = 1030, GT = 300, GB = 740;
const gx = (d: number) => GL + (d / 180) * (GR - GL);
const gyv = (v: number) => GB - v * (GB - GT);
const sinePath = (a: number, b: number) => {
	let d = '';
	for (let i = 0; i <= 60; i++) { const x = a + ((b - a) * i) / 60; d += `${i ? 'L' : 'M'}${gx(x).toFixed(1)},${gyv(Math.sin((x * Math.PI) / 180)).toFixed(1)} `; }
	return d;
};
const W5: World = {x0: 1200, y0: 910, ppm: 6};
export const S05: React.FC = () => {
	const id = 'second-angle';
	const f = useCurrentFrame();
	const rises = cue(id, 'rises'), falls = cue(id, 'falls back'), sym = cue(id, 'symmetrically'), twice = cue(id, 'twice'), f516 = cue(id, 'fifty-one'), minus = cue(id, 'eighty minus'), t28 = cue(id, 'twenty-eight'), s642 = cue(id, 'sixty-four'), highPath = cue(id, 'high path'), notice = cue(id, 'Notice'), comp = cue(id, 'complementary'), subtract = cue(id, 'subtract from'), notAfter = cue(id, 'not after'), backwards = cue(id, 'aim the launcher');
	const tick = {fontFamily: 'Inter Tight, sans-serif', fontWeight: 700, fontSize: 30} as const;
	const L1 = 2 * LOW, L2 = 180 - 2 * LOW, lv = Math.sin((L1 * Math.PI) / 180);
	const bk = (154.2 * Math.PI) / 180;
	return (
		<>
			<SceneHeading text={HEAD} at={-60} size={HEAD_SIZE} />
			<FrameSvg>
				<rect x={96} y={186} width={1000} height={680} rx={18} fill={CARD} stroke="rgba(60,45,20,0.16)" strokeWidth={2.5} />
				<text x={120} y={232} style={{fontFamily: 'Inter Tight, sans-serif', fontWeight: 800, fontSize: 32}} fill={INK}>sin 2θ</text>
				{[0, 30, 60, 90, 120, 150, 180].map(d => <g key={d}><line x1={gx(d)} x2={gx(d)} y1={GT} y2={GB} stroke="#e4dccd" strokeWidth={2} /><text x={gx(d)} y={GB + 40} textAnchor="middle" style={tick} fill={INK}>{d}</text></g>)}
				{[0, 0.5, 1].map(v => <g key={v}><line x1={GL} x2={GR} y1={gyv(v)} y2={gyv(v)} stroke="#e4dccd" strokeWidth={2} /><text x={GL - 14} y={gyv(v) + 10} textAnchor="end" style={tick} fill={INK}>{v}</text></g>)}
				<path d={`M${GL},${GT - 20} V${GB} H${GR + 16}`} fill="none" stroke={INK} strokeWidth={3.5} />
				<text x={GR + 16} y={GB + 82} textAnchor="end" style={{...tick, fill: INK_SOFT}}>2θ (degrees)</text>
				{f >= rises ? <DrawPath d={sinePath(0, 90)} at={rises} dur={30} color={INK} width={6} /> : null}
				{f >= falls ? <DrawPath d={sinePath(90, 180)} at={falls} dur={30} color={INK} width={6} /> : null}
				{f >= rises + 28 ? <circle cx={gx(90)} cy={gyv(1)} r={10} fill={INK} /> : null}
				{f >= sym ? <DrawPath d={`M${gx(90)},${GT - 10} L${gx(90)},${GB}`} at={sym} dur={16} color={INK_SOFT} width={3} dash="10 8" /> : null}
				{f >= twice ? <DrawPath d={`M${GL},${gyv(lv)} L${GR},${gyv(lv)}`} at={twice} dur={20} color={ROLE.v.ink} width={4} /> : null}
				{f >= twice + 16 ? <g><circle cx={gx(L1)} cy={gyv(lv)} r={13} fill={ROLE.v.stroke} stroke={CARD} strokeWidth={3} /><circle cx={gx(L2)} cy={gyv(lv)} r={13} fill={ROLE.v.stroke} stroke={CARD} strokeWidth={3} /></g> : null}
				<Bracket x1={gx(L1)} y1={gyv(lv) + 44} x2={gx(90)} y2={gyv(lv) + 44} color={ROLE.x.ink} at={t28 + 16} />
				<Bracket x1={gx(90)} y1={gyv(lv) + 44} x2={gx(L2)} y2={gyv(lv) + 44} color={ROLE.x.ink} at={t28 + 22} />
			</FrameSvg>
			<Lbl x={GR - 6} y={gyv(lv) - 24} at={twice} color={ROLE.v.ink} anchor="end" size={30}>0.784</Lbl>
			<Lbl x={gx(L1) - 16} y={gyv(lv) - 30} at={f516} color={ROLE.v.ink} anchor="end" size={34}>51.6°</Lbl>
			<Lbl x={gx(L2) + 16} y={gyv(lv) - 30} at={t28} color={ROLE.v.ink} size={34}>128.4°</Lbl>
			<Lbl x={gx(90)} y={gyv(lv) + 84} at={t28 + 22} color={ROLE.x.ink} anchor="middle" size={30}>38.4° each side</Lbl>
			<HandTag x={gx(90)} y={gyv(1) - 36} text="twice" at={twice + 20} size={TYPE.hand} color={ROLE.v.ink} anchor="middle" />
			<div style={{position: 'absolute', left: 1140, top: 186, display: 'flex', flexDirection: 'column', gap: 10, width: 684}}>
				<div style={DISPLAY(34, INK, 750)}>θ = 25.8° <span style={{color: INK_SOFT, fontSize: 28}}>(from the calculator)</span></div>
				<Row at={minus} ageAt={s642} size={TYPE.current} oldSize={36}>2θ = 180° − 51.63° = 128.37°</Row>
				<Row at={s642 - 6} size={TYPE.working}>θ ≈ <AnswerBox at={highPath}>64.2°</AnswerBox> <span style={{fontSize: 32, color: ROLE.v.ink}}>the high path</span></Row>
				<Row at={notice} size={TYPE.current}>25.8° + 64.2° = 90°</Row>
			</div>
			<Enter at={comp} style={{position: 'absolute', left: 1140, top: 470, width: 684}}>
				<div style={{...card, borderLeft: `10px solid ${INK}`, padding: '8px 22px 10px'}}>
					<div style={DISPLAY(36, INK, 800)}>complementary</div>
					<div style={{...DISPLAY(30, INK, 700), whiteSpace: 'normal'}}>two angles that add to 90°</div>
				</div>
			</Enter>
			<CrossedChip x={1140} y={572} at={subtract} crossAt={notAfter} size={32} caption="subtract 2θ from 180°, then halve">θ = 180° − 25.8° = 154.2°</CrossedChip>
			<FrameSvg>
				<LaunchPits mx={W5.x0} gy={W5.y0} degs={[HIGH, LOW]} lw={80} right={1824} left={1140} />
				<Target x={W5.x0 + R0 * W5.ppm} y={W5.y0} />
				<path d={pathA(W5, LOW, T_LOW)} fill="none" stroke={ROLE.v.stroke} strokeWidth={5} />
				<path d={pathA(W5, HIGH, T_HIGH)} fill="none" stroke={ROLE.v.stroke} strokeWidth={f >= highPath ? 6 : 3.5} strokeDasharray="12 9" />
				{f >= backwards && f < backwards + 60 ? <g opacity={1 - prog(f, backwards + 44, 14)}><VecArrow x={W5.x0} y={W5.y0} dx={110 * Math.cos(bk)} dy={-110 * Math.sin(bk)} color={ROLE.slate.stroke} width={6} at={backwards} /></g> : null}
			</FrameSvg>
			<Lbl x={W5.x0 + 250} y={W5.y0 - 190} at={highPath} color={ROLE.v.ink} size={32}>64.2°</Lbl>
			<Lbl x={W5.x0 + 200} y={W5.y0 - 30} color={ROLE.v.ink} size={32}>25.8°</Lbl>
			<Enter at={rises} out={minus - 10} style={{position: 'absolute', left: 1140, top: 300, width: 684}}>
				<div style={{...card, borderLeft: `10px solid ${INK}`}}>
					<div style={{...DISPLAY(34, INK, 800), whiteSpace: 'normal'}}>sine rises to 1 at 90°, then falls back the same way</div>
					<div style={{...DISPLAY(34, ROLE.v.ink, 800), whiteSpace: 'normal', opacity: prog(f, twice, 12)}}>so each value below 1 comes twice</div>
				</div>
			</Enter>
		</>
	);
};

export {ptA};
