// Scenes 7 to 11: forty-five and sixty degrees (the launcher as an angle slider), why thirty wins (split range
// bars), three samples are not the optimum (range against angle sweep), two slips, the memory aid.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {DrawPath, Enter, FONT_HAND, prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading, kf} from '../../math/studio';
import {CARD, CARD_SHADOW, INK, INK_SOFT, TYPE, rgba} from '../../shared/tokens';
import {AidCard, AnswerBox, BallSvg, Bracket, CrossedChip, DISPLAY, HandNote, MS, Sub, Q, ROLE, Readouts, Row, VecArrow, type World, sx} from '../../physics/projectile/board';
import {flightAt, fx, landT, range, ux, uy} from '../../physics/projectile/flight';
import {rangeFrom} from '../../physics/projectile/height';
import {Lbl, StandingLauncher} from '../phys-y12-m5-v02/parts';
import {Ring} from '../phys-y12-m5-v03/parts';
import {ANGLES, type Ang, BEST, CASE, HC, PATH, U, cue} from './common';
import {AnglePath, CliffStage, RangeAngleGraph, pathT, raGeom} from './parts';
import {GY, LW, MX, SEA, W} from './s1';

const card: React.CSSProperties = {background: CARD, borderRadius: 18, boxShadow: CARD_SHADOW, padding: '12px 24px 16px'};
const Title: React.FC<{children: React.ReactNode; color?: string}> = ({children, color = INK_SOFT}) => <div style={{...DISPLAY(TYPE.label, color, 800), textTransform: 'uppercase', letterSpacing: 1.5}}>{children}</div>;

// ---------- 7. forty-five and sixty degrees: the launcher as an angle slider ----------
const M7 = 420, G7 = 600, S7 = 870, P7 = 9;
const W7: World = {x0: M7, y0: G7, ppm: P7};
export const S07: React.FC = () => {
	const id = 'forty-five-and-sixty';
	const f = useCurrentFrame();
	const at45 = cue(id, 'At forty-five'), lasts = cue(id, 'the flight lasts'), out = cue(id, 'out'), at60 = cue(id, 'At sixty'), stays = cue(id, 'stays up longest'), cliff = cue(id, 'cliff');
	const deg = kf(f, [[at45, 30], [at45 + 50, 45], [at60, 45], [at60 + 40, 60]]);
	const dr = Math.round(deg * 10) / 10;
	const tL = landT(U, dr, HC), R = rangeFrom(U, dr, HC);
	const fly = (d: Ang, start: number, end: number) => (f < start ? null : Math.min(CASE[d].t, ((f - start) / Math.max(1, end - start)) * CASE[d].t));
	const t45 = fly(45, at45 + 50, out), t60 = fly(60, at60 + 40, cliff);
	const done45 = f >= out, done60 = f >= cliff;
	const ball = (() => {
		const t = f >= at60 + 40 ? t60 : f >= at45 + 50 && f < at60 ? t45 : null;
		const d: Ang = f >= at60 + 40 ? 60 : 45;
		if (t === null) return null;
		const s = flightAt(CASE[d].run, t);
		return [sx(W7, s.x), G7 - s.y * P7 - (t >= CASE[d].t - 0.001 ? 14 : 0)] as [number, number];
	})();
	const mark = (d: Ang, show: boolean, label: string, dy = 0) => (show ? <g key={d}><line x1={sx(W7, CASE[d].R)} x2={sx(W7, CASE[d].R)} y1={S7 - 16} y2={S7 + 16} stroke={PATH[d].stroke} strokeWidth={6} /><text x={sx(W7, CASE[d].R)} y={S7 + 50 + dy} textAnchor="middle" style={{fontFamily: 'Inter Tight, sans-serif', fontWeight: 800, fontSize: 30}} fill={PATH[d].ink}>{label}</text></g> : null);
	const row = (d: Ang, at: number, ageAt?: number) => (
		<>
			<Row at={at} ageAt={ageAt} size={TYPE.current} oldSize={32}><span style={{color: PATH[d].ink}}>{d}°:</span> t = ({fx(CASE[d].uy, 2)} + √{fx(CASE[d].uy ** 2 + 2 * 9.8 * HC, 0)}) ÷ 9.8 = {fx(CASE[d].t, 2)} s</Row>
			<Row at={at + 20} ageAt={ageAt} size={TYPE.current} oldSize={32}>R = <Q s="u" ax="x" plain />t = {fx(CASE[d].ux, 2)} × {fx(CASE[d].t, 3)} = <AnswerBox at={d === 45 ? out : cliff}><span style={{color: ROLE.x.ink}}>{fx(CASE[d].R, 1)} m</span></AnswerBox></Row>
		</>
	);
	return (
		<>
			<SceneHeading text="The same steps at 45° and 60°" at={-40} size={54} />
			<div style={{position: 'absolute', left: 96, top: 176, display: 'flex', flexDirection: 'column', gap: 6}}>
				{row(45, lasts, at60)}
				{row(60, stays)}
			</div>
			<FrameSvg>
				<CliffStage mx={M7} gy={G7} seaY={S7} lw={200} deg={deg} rightX={1220} ball={ball === null} />
				<AnglePath w={W7} u={U} deg={30} t1={CASE[30].t} thin />
				{done45 ? <AnglePath w={W7} u={U} deg={45} t1={CASE[45].t} thin /> : null}
				{done60 ? <AnglePath w={W7} u={U} deg={60} t1={CASE[60].t} thin /> : null}
				<path d={pathT(W7, U, dr, tL)} fill="none" stroke={dr < 37.5 ? PATH[30].stroke : dr < 52.5 ? PATH[45].stroke : PATH[60].stroke} strokeWidth={6} strokeDasharray={dr >= 52.5 ? PATH[60].dash : undefined} />
				{ball ? <BallSvg cx={ball[0]} cy={ball[1]} d={28} /> : null}
				{mark(30, true, '64.0')}
				{mark(45, done45, '60.9', 34)}
				{mark(60, done60, '48.1')}
				<line x1={sx(W7, R)} x2={sx(W7, R)} y1={S7 - 30} y2={S7} stroke={INK} strokeWidth={4} />
			</FrameSvg>
			<HandTag x={sx(W7, CASE[60].R) - 230} y={S7 - 50} text="shortest range" at={cliff} size={30} color={ROLE.x.ink} />
			<Readouts x={1280} y={186} w={544} title="live: tilt the launcher" rows={[
				{label: 'θ', value: `${fx(dr, 0)}°`, color: INK},
				{label: <Q s="u" ax="x" />, value: fx(ux(U, dr), 2), unit: <MS />, color: ROLE.x.ink},
				{label: <Q s="u" ax="y" />, value: fx(uy(U, dr), 2), unit: <MS />, color: ROLE.y.ink},
				{label: 'landing time t', value: fx(tL, 2), unit: 's', color: INK},
				{label: 'range R', value: fx(R, 1), unit: 'm', color: ROLE.x.ink},
			]} />
			<Enter at={-30} style={{position: 'absolute', left: 1280, top: 610, width: 544}}>
				<div style={{...card, border: `3px solid ${INK}`, padding: '8px 22px 12px'}}>
					<Title>From the 30 m cliff, 20 m s⁻¹</Title>
					{ANGLES.map(d => (
						<div key={d} style={{...DISPLAY(36, INK, 750), display: 'flex', justifyContent: 'space-between', opacity: d === 30 ? 1 : prog(f, d === 45 ? out : cliff, 12)}}>
							<span style={{color: PATH[d].ink}}>{d}°</span><span>t = {fx(CASE[d].t, 2)} s</span><span style={{color: ROLE.x.ink}}>R = {fx(CASE[d].R, 1)} m</span>
						</div>
					))}
				</div>
			</Enter>
			<HandTag x={1290} y={860} text="60°: longest flight, shortest range" at={cliff + 6} size={30} color={ROLE.y.ink} />
		</>
	);
};

// ---------- 8. thirty wins: why (split range bars) ----------
const BX = 230, BK = 12, ROWS: Record<Ang, number> = {30: 340, 45: 550, 60: 760};
export const S08: React.FC = () => {
	const id = 'why-thirty-wins';
	const f = useCurrentFrame();
	const tie = cue(id, 'tie'), extra = cue(id, 'adds time'), slowly = cue(id, 'slowly'), horiz = cue(id, 'horizontal component'), best = cue(id, 'So the best');
	return (
		<>
			<SceneHeading text="Why 30° wins from the cliff" at={-40} size={54} />
			<div style={{position: 'absolute', left: 1180, top: 176, display: 'inline-flex', alignItems: 'center', gap: 8, background: CARD, border: `4.5px solid ${INK}`, borderRadius: 14, padding: '2px 16px 6px', ...DISPLAY(36, PATH[30].ink, 800)}}>30° ✓</div>
			<CrossedChip x={1340} y={170} at={-30} crossAt={10} size={36}>45°</CrossedChip>
			<div style={{position: 'absolute', left: 1500, top: 176, ...DISPLAY(36, PATH[60].ink, 800)}}><span style={{display: 'inline-block', background: '#f1ebdf', border: `2.5px solid ${PATH[60].stroke}`, borderRadius: 14, padding: '2px 16px 6px'}}>60°</span></div>
			<HandTag x={1180} y={252} text="45° rule: level ground only" at={20} size={28} color={ROLE.slate.ink} />
			<div style={{position: 'absolute', left: BX, top: 272, ...DISPLAY(30, PATH[30].ink, 800)}}>level-ground part</div>
			<div style={{position: 'absolute', left: BX + CASE[30].R0 * BK + 12, top: 272, ...DISPLAY(30, ROLE.x.ink, 800)}}>extra part (below the launch level)</div>
			<FrameSvg>
				{ANGLES.map(d => {
					const c = CASE[d], y = ROWS[d];
					const a = c.R0 * BK, b = (c.R - c.R0) * BK;
					return (
						<g key={d}>
							<rect x={BX} y={y} width={a} height={76} rx={8} fill={ROLE.v.soft} stroke={ROLE.v.stroke} strokeWidth={4} />
							<rect x={BX + a} y={y} width={b} height={76} rx={8} fill={rgba(ROLE.x.stroke, 0.28)} stroke={ROLE.x.stroke} strokeWidth={4} />
							<text x={BX + a / 2} y={y + 50} textAnchor="middle" style={{fontFamily: 'Inter Tight, sans-serif', fontWeight: 800, fontSize: 34}} fill={INK}>{fx(c.R0, 1)} m</text>
							<text x={BX + a + b / 2} y={y + 50} textAnchor="middle" style={{fontFamily: 'Inter Tight, sans-serif', fontWeight: 800, fontSize: 34}} fill={INK}>{fx(c.R - c.R0, 1)}</text>
							{prog(f, slowly, 12) > 0 ? <VecArrow x={1270} y={y - 50} dx={0} dy={c.uy * 6} color={ROLE.y.stroke} width={6} at={slowly} head={16} /> : null}
						</g>
					);
				})}
				<Ring cx={BX + CASE[30].R0 * BK + ((CASE[30].R - CASE[30].R0) * BK) / 2} cy={ROWS[30] + 38} rx={200} ry={58} at={best} color={ROLE.x.stroke} />
				{f >= tie ? <DrawPath d={`M1190,${ROWS[30] + 38} L1210,${ROWS[30] + 38} L1210,${ROWS[60] + 38} L1190,${ROWS[60] + 38}`} at={tie} dur={14} color={INK} width={4} /> : null}
			</FrameSvg>
			{ANGLES.map(d => (
				<React.Fragment key={d}>
					<div style={{position: 'absolute', left: 96, top: ROWS[d] + 10, ...DISPLAY(TYPE.working, PATH[d].ink, 800)}}>{d}°</div>
					<div style={{position: 'absolute', left: BX + CASE[d].R * BK + 16, top: ROWS[d] + 12, ...DISPLAY(TYPE.current, INK, 800)}}>= {fx(CASE[d].R, 1)} m</div>
					<div style={{position: 'absolute', left: 1300, top: ROWS[d] - 64, opacity: prog(f, extra, 12)}}>
						<div style={DISPLAY(32, ROLE.y.ink, 750)}>back at {fx(CASE[d].uy, 1)}<MS /> down</div>
						<div style={DISPLAY(TYPE.current, ROLE.y.ink, 800)}>extra time {fx(CASE[d].below, 2)} s</div>
						<div style={{...DISPLAY(34, ROLE.x.ink, 800), opacity: prog(f, horiz, 12)}}>× <Q s="u" ax="x" plain /> {fx(CASE[d].ux, 1)}<MS /> = {fx(CASE[d].R - CASE[d].R0, 1)} m</div>
					</div>
				</React.Fragment>
			))}
			<Lbl x={1222} y={(ROWS[30] + ROWS[60]) / 2 + 38} at={tie} size={TYPE.working} color={INK}>≠</Lbl>
			<HandTag x={BX} y={ROWS[30] + 120} text="most extra distance" at={best + 10} size={TYPE.handSmall} color={ROLE.x.ink} />
			<HandTag x={BX} y={ROWS[45] + 120} text="the extra 30 m adds time to every flight" at={extra} size={30} color={ROLE.y.ink} />
			<Enter at={best} style={{position: 'absolute', left: 96, top: 900}}>
				<div style={DISPLAY(34, INK, 700)}>extra time × <Q s="u" ax="x" plain />: biggest for the flatter launch, so the best angle drops below 45°</div>
			</Enter>
		</>
	);
};

// ---------- 9. three angles aren't the whole story ----------
const GX9 = 470, GY9 = 186, GW9 = 790, GH9 = 720, RMAX = 70;
export const S09: React.FC = () => {
	const id = 'three-samples';
	const f = useCurrentFrame();
	const careful = cue(id, 'Careful'), prove = cue(id, 'prove that thirty'), many = cue(id, 'try many more'), deg2 = cue(id, 'degrees', 2), height = cue(id, 'So from a height'), below = cue(id, 'below forty-five');
	const g = raGeom(GX9, GY9, GW9, GH9, RMAX);
	// The barrel settles to the best angle after the sweep ends, even if "So from a height" comes first (keys must rise).
	const settle = Math.max(height, many + 210);
	const sweep = f < many ? 30 : kf(f, [[many, 30], [many + 20, 10], [many + 200, 80], [settle, 80], [settle + 40, BEST.deg]]);
	const drawn = f < many + 20 ? 0 : f < many + 200 ? sweep : 80;
	const Rnow = rangeFrom(U, sweep, HC);
	const level = (d: number) => range(U, d);
	const cliffR = (d: number) => rangeFrom(U, d, HC);
	const pk: [number, number] = [g.gx(BEST.deg), g.gy(BEST.R)];
	return (
		<>
			<SceneHeading text="Three samples aren't the whole story" at={-40} size={54} />
			<FrameSvg>
				<StandingLauncher px={190} groundY={760} lw={240} deg={sweep} x1={96} x2={420} />
				<RangeAngleGraph x={GX9} y={GY9} w={GW9} h={GH9} rMax={RMAX} rStep={10} curves={[
					{fn: level, to: 90, color: INK_SOFT, width: 4},
					{fn: cliffR, from: 10, to: Math.max(10, drawn), color: PATH[30].stroke, width: 6},
				]}>
					{prog(f, deg2, 12) > 0 ? <g opacity={prog(f, deg2, 12)}><line x1={pk[0]} x2={pk[0]} y1={pk[1]} y2={g.bottom} stroke={INK} strokeWidth={3} strokeDasharray="10 8" /><line x1={g.gx(45)} x2={g.gx(45)} y1={g.gy(level(45))} y2={g.bottom} stroke={INK_SOFT} strokeWidth={3} strokeDasharray="10 8" /></g> : null}
					{ANGLES.map((d, i) => prog(f, careful + i * 8, 10) > 0 ? <circle key={d} cx={g.gx(d)} cy={g.gy(CASE[d].R)} r={13} fill={PATH[d].stroke} stroke={CARD} strokeWidth={4} opacity={prog(f, careful + i * 8, 10)} /> : null)}
					{f >= many ? <circle cx={g.gx(sweep)} cy={g.gy(Rnow)} r={11} fill={INK} stroke={CARD} strokeWidth={4} /> : null}
					{f >= below ? <g><DrawPath d={`M${g.gx(45)},${g.bottom - 26} L${pk[0] + 4},${g.bottom - 26}`} at={below} dur={14} color={INK} width={4} /><DrawPath d={`M${pk[0] + 22},${g.bottom - 38} L${pk[0] + 4},${g.bottom - 26} L${pk[0] + 22},${g.bottom - 14}`} at={below + 12} dur={8} color={INK} width={4} /></g> : null}
				</RangeAngleGraph>
				<Ring cx={g.gx(30)} cy={g.gy(CASE[30].R)} rx={30} ry={30} at={prove} color={PATH[30].stroke} />
			</FrameSvg>
			<Lbl x={g.gx(60) + 20} y={g.gy(level(60)) + 40} color={INK_SOFT} size={30}>level ground</Lbl>
			<Lbl x={g.gx(62) + 10} y={g.gy(cliffR(62)) - 10} color={PATH[30].ink} size={30} at={many + 90}>from a 30 m cliff</Lbl>
			<HandTag x={g.gx(3)} y={g.gy(47)} text="best of three samples" at={prove + 10} size={30} color={PATH[30].ink} />
			<HandTag x={g.gx(46)} y={g.bottom - 60} text="slides below 45°" at={below + 10} size={30} color={INK} />
			<Lbl x={120} y={830} color={INK} size={TYPE.current}>θ = {fx(sweep, 0)}°</Lbl>
			<Readouts x={1290} y={186} w={534} title="live: sweep the angle" rows={[
				{label: 'θ', value: `${fx(sweep, 1)}°`, color: INK},
				{label: 'range R', value: fx(Rnow, 1), unit: 'm', color: PATH[30].ink},
			]} />
			<Enter at={deg2} style={{position: 'absolute', left: 1290, top: 450, width: 534}}>
				<div style={{...card, border: `3px solid ${INK}`}}>
					<Title>Largest range found</Title>
					<div style={{...DISPLAY(TYPE.current, INK, 800), marginTop: 6}}><AnswerBox at={deg2}>R = {fx(BEST.R, 1)} m</AnswerBox></div>
					<div style={{...DISPLAY(TYPE.current, INK, 800), marginTop: 4}}>at θ ≈ 32.5°</div>
					<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 32, color: INK, marginTop: 8}}>best overall: about 32.5°</div>
				</div>
			</Enter>
			<Enter at={careful} style={{position: 'absolute', left: 1290, top: 680, width: 534}}>
				<div style={{...card, border: `3px solid ${INK}`}}><Title>The three samples</Title>{ANGLES.map(d => <div key={d} style={{...DISPLAY(TYPE.body, PATH[d].ink, 800), display: 'flex', justifyContent: 'space-between'}}><span>{d}°</span><span>R = {fx(CASE[d].R, 1)} m</span></div>)}</div>
			</Enter>
		</>
	);
};

// ---------- 10. two slips ----------
export const S10: React.FC = () => {
	const id = 'two-slips';
	const f = useCurrentFrame();
	const plus = cue(id, 'using plus thirty'), doubling = cue(id, 'doubling'), level = cue(id, 'level'), gives = cue(id, 'That gives');
	const c = CASE[30];
	const crossX = sx(W, c.R0);
	return (
		<>
			<SceneHeading text="Two slips that cost marks" at={-40} size={54} />
			<FrameSvg>
				<CliffStage mx={MX} gy={GY} seaY={SEA} lw={LW} deg={30} />
				<AnglePath w={W} u={U} deg={30} t1={c.t} />
				<Bracket x1={210} y1={GY} x2={210} y2={SEA} color={ROLE.given.ink} />
				<line x1={crossX} x2={crossX} y1={GY - 22} y2={GY + 22} stroke={ROLE.x.stroke} strokeWidth={6} />
				<Ring cx={crossX} cy={GY} rx={36} ry={32} at={gives} />
			</FrameSvg>
			<Lbl x={196} y={(GY + SEA) / 2} color={ROLE.given.ink} anchor="end" size={TYPE.current}>−30 m</Lbl>
			<Lbl x={crossX} y={GY - 50} color={ROLE.x.ink} anchor="middle" size={34}>2.04 s</Lbl>
			<CrossedChip x={1290} y={200} at={plus - 6} crossAt={level} size={TYPE.current} caption="sea is below: −30"><Q s="s" ax="y" plain /> = +30 m</CrossedChip>
			<CrossedChip x={1290} y={380} at={doubling - 6} crossAt={level + 8} size={TYPE.current} caption="too short">t = 2 × 1.02 = 2.04 s</CrossedChip>
			<div style={{position: 'absolute', left: 1290, top: 580, width: 534, background: CARD, borderRadius: 14, boxShadow: CARD_SHADOW, padding: '14px 22px', opacity: 1 - prog(f, gives - 14, 12), ...DISPLAY(34, INK, 700), whiteSpace: 'normal', lineHeight: 1.3}}>
				<div style={{...DISPLAY(28, INK_SOFT, 800)}}>THE CASE</div>
				<div>u = 20 m s<sup>−1</sup> at 30°</div>
				<div>launched from a <span style={{color: ROLE.given.ink}}>30 m</span> cliff</div>
				<div>lands at sea level</div>
			</div>
			<Enter at={gives} style={{position: 'absolute', left: 1290, top: 560, width: 534}}>
				<div style={{...DISPLAY(34, INK, 700), whiteSpace: 'normal'}}>2.04 s is when it comes back through the launch level, not when it lands.</div>
			</Enter>
			<Enter at={gives + 10} style={{position: 'absolute', left: 1290, top: 730, width: 534}}>
				<div style={DISPLAY(TYPE.current, INK, 800)}>lands at <AnswerBox at={gives + 10} tick={false}>3.70 s</AnswerBox></div>
			</Enter>
		</>
	);
};

// ---------- 11. memory aid: down is negative, time is positive ----------
export const S11: React.FC = () => {
	const id = 'memory-aid';
	const f = useCurrentFrame();
	const down = cue(id, 'down is negative'), time = cue(id, 'time is positive'), sy_ = cue(id, 's y is negative'), keep = cue(id, 'keep the positive');
	const c = CASE[30];
	const glow = Math.sin(Math.PI * Math.max(0, Math.min(1, (f - sy_) / 30)));
	return (
		<>
			<AidCard x={300} y={140} w={1320} at={-30}>
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 76, lineHeight: 1.05, textAlign: 'center'}}><span style={{color: ROLE.given.ink, display: 'inline-block', transform: `scale(${1 + 0.05 * Math.sin(Math.PI * prog(f, down, 20))})`}}>Down is negative,</span> <span style={{display: 'inline-block', transform: `scale(${1 + 0.05 * Math.sin(Math.PI * prog(f, time, 20))})`}}>time is positive.</span></div>
				<div style={{...DISPLAY(32, INK, 700), textAlign: 'center', marginTop: 2, opacity: prog(f, time + 20, 14)}}>(up positive; launch above the landing)</div>
			</AidCard>
			<FrameSvg>
				<CliffStage mx={MX} gy={GY + 40} seaY={SEA + 20} lw={LW} deg={30} />
				<path d={pathT({x0: MX, y0: GY + 40, ppm: (SEA - GY - 20) / HC}, U, 30, c.t)} fill="none" stroke={PATH[30].stroke} strokeWidth={6} />
				<line x1={210} x2={210} y1={GY + 40} y2={SEA + 20} stroke={ROLE.given.stroke} strokeWidth={6 + 8 * glow} />
			</FrameSvg>
			<Lbl x={196} y={(GY + SEA) / 2 + 30} color={ROLE.given.ink} anchor="end" size={TYPE.working}>−30 m</Lbl>
			<div style={{position: 'absolute', left: 1290, top: 470, display: 'flex', flexDirection: 'column', gap: 18}}>
				<div style={{display: 'inline-block', background: CARD, border: `${f >= keep ? 6 : 3}px solid ${INK}`, borderRadius: 14, padding: '2px 18px 6px', boxShadow: CARD_SHADOW, ...DISPLAY(TYPE.working, INK)}}>t = 3.70 s ✓</div>
				<div style={{display: 'inline-block', background: CARD, border: `3px solid ${ROLE.slate.stroke}`, borderRadius: 14, padding: '2px 18px 6px', boxShadow: CARD_SHADOW, ...DISPLAY(TYPE.current, ROLE.slate.ink)}}>t = −1.66 s ✗</div>
			</div>
			<HandTag x={1290} y={720} text="two roots: keep the positive one" at={keep - 10} size={30} color={INK} />
			<HandNote x={470} y={820} at={sy_} size={30} color={ROLE.given.ink}>below the launch: s<Sub>y</Sub> &lt; 0</HandNote>
		</>
	);
};
