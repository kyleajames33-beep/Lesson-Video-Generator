// Scenes 6 to 9: one datum and the clearance, the rounding trap, why the sideways launch hit the wall (with
// the launch-angle slider), the method.
import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {Countdown, Enter, FONT_HAND, prog} from '../../kit';
import {FrameSvg, HandTag, MarkSpan, SceneHeading, kf} from '../../math/studio';
import {CARD, CARD_SHADOW, INK, INK_SOFT, TYPE} from '../../shared/tokens';
import {AidCard, AnswerBox, BallSvg, Bracket, CarryArrow, Chip, CrossedChip, DISPLAY, HandNote, Ledger, MS, Q, ROLE, ReadCard, Readouts, Row, Sub, Sup, type World} from '../../physics/projectile/board';
import {clockAt, flightAt, fx} from '../../physics/projectile/flight';
import {Ring} from '../phys-y12-m5-v03/parts';
import {CliffStage} from '../phys-y12-m5-v05/parts';
import {C0, C35, DEG, RUN0, T35, atWall, cue, hold} from './common';
import {BALL_D, GY, LW, Lbl, MX, PPM, TermBars, W, WallStage, pathU, ptU, seaY, wallTop, wallX} from './parts';
import {Boxed, StageBrackets, Title, card} from './s1';

const WX = wallX(W), WT = wallTop(W);

// ---------- 6. step 3: one datum, then compare (camera pull back to the whole cliff) ----------
export const S06: React.FC = () => {
	const id = 'datum-clearance';
	const f = useCurrentFrame();
	const launchPt = cue(id, 'launch point'), seaC = cue(id, 'sea'), oneD = cue(id, 'one datum'), takeSea = cue(id, 'Take sea'), fifteenPlus = cue(id, 'fifteen plus'), sea3 = cue(id, 'sea', 3), soClr = cue(id, 'So the clearance'), about104 = cue(id, 'about ten point four'), clears = cue(id, 'clears');
	const p = prog(f, 0, 34);
	const w: World = {x0: interpolate(p, [0, 1], [170, MX]), y0: interpolate(p, [0, 1], [610, GY]), ppm: interpolate(p, [0, 1], [22, PPM])};
	const lw = interpolate(p, [0, 1], [160, LW]);
	const wx = wallX(w), wt = wallTop(w), sea = seaY(w);
	const [bx, by] = ptU(w, DEG, C35.t);
	const glow = Math.max(0, Math.min(1, (f - oneD) / 14));
	const pulse = (at: number) => Math.sin(Math.PI * Math.max(0, Math.min(1, (f - at) / 30)));
	return (
		<>
			<SceneHeading text="One datum, then compare" at={-40} size={54} />
			<FrameSvg>
				<WallStage w={w} deg={DEG} lw={lw} ball={false} levelLine={f < oneD + 20} />
				<path d={pathU(w, DEG, T35)} fill="none" stroke={ROLE.v.stroke} strokeWidth={4} />
				<BallSvg cx={bx} cy={by} d={BALL_D + 4} />
				<Bracket x1={wx - 30} y1={w.y0} x2={wx - 30} y2={by} color={ROLE.y.ink} />
				{glow > 0 ? <line x1={96} x2={1250} y1={sea} y2={sea} stroke={ROLE.given.stroke} strokeWidth={6 + 6 * pulse(oneD)} strokeDasharray="18 10" opacity={glow} /> : null}
				<Bracket x1={620} y1={sea} x2={620} y2={by} color={ROLE.given.ink} at={sea3} />
				{f >= sea3 ? <line x1={620} x2={bx - 18} y1={by} y2={by} stroke={INK_SOFT} strokeWidth={2.5} strokeDasharray="7 7" opacity={prog(f, sea3, 12)} /> : null}
				<Bracket x1={wx} y1={wt} x2={wx} y2={by + 18} color={INK} at={soClr} />
				<Ring cx={wx - 70} cy={(w.y0 + by) / 2} rx={70} ry={44} at={launchPt} color={ROLE.y.stroke} />
			</FrameSvg>
			<StageBrackets w={w} sub={false} />
			<Lbl x={wx - 44} y={(w.y0 + by) / 2 + 8} color={ROLE.y.ink} anchor="end" size={30}>3.42 m</Lbl>
			<Lbl x={1000} y={w.y0 - 22} at={launchPt} out={oneD + 20} color={INK_SOFT} size={30}>launch datum</Lbl>
			<HandTag x={wx + 70} y={wt - 40} text="sea datum" at={seaC} size={30} color={ROLE.given.ink} />
			<Lbl x={880} y={sea + 50} at={oneD} color={ROLE.given.ink} size={30}>datum: sea level, 0 m</Lbl>
			<Lbl x={606} y={650} at={sea3} color={ROLE.given.ink} anchor="end" size={TYPE.current}>18.42 m</Lbl>
			<Lbl x={wx + 16} y={(wt + by) / 2 + 20} at={soClr} color={INK} size={36}>{f >= about104 ? '10.4 m' : '?'}</Lbl>
			<HandTag x={110} y={915} text="one datum: the sea" at={takeSea} size={30} color={ROLE.given.ink} />
			<div style={{position: 'absolute', left: 96, top: 180, display: 'flex', flexDirection: 'column', gap: 6}}>
				<Row at={fifteenPlus} ageAt={soClr} size={TYPE.current} oldSize={36}><span style={{color: ROLE.given.ink}}>height above sea</span> = 15 + 3.4187 = 18.4187 m</Row>
				<Row at={soClr} size={TYPE.current}>clearance = 18.4187 − 8 = 10.4187 m</Row>
			</div>
			<Enter at={-30} style={{position: 'absolute', left: 1290, top: 186, width: 534}}>
				<div style={{...card, border: `3px solid ${INK}`}}>
					<Title>Two different zero levels</Title>
					<div style={{...DISPLAY(32, ROLE.y.ink, 800), marginTop: 4, whiteSpace: 'normal', transform: `scale(${1 + 0.05 * pulse(launchPt)})`, transformOrigin: 'left center'}}>ball: 3.42 m above the launch point</div>
					<div style={{...DISPLAY(32, ROLE.given.ink, 800), whiteSpace: 'normal', marginTop: 4, transform: `scale(${1 + 0.05 * pulse(seaC)})`, transformOrigin: 'left center'}}>wall top: 8 m above the sea</div>
				</div>
			</Enter>
			<Enter at={oneD - 6} style={{position: 'absolute', left: 1290, top: 430, width: 534}}>
				<div style={{...card, borderLeft: `10px solid ${ROLE.given.stroke}`}}>
					<div style={{...DISPLAY(34, ROLE.given.ink, 800), whiteSpace: 'normal'}}>datum: the one level every height is measured from</div>
					<div style={{...DISPLAY(30, INK, 700), whiteSpace: 'normal', marginTop: 6, opacity: prog(f, takeSea, 12)}}>height above the datum: the absolute height</div>
				</div>
			</Enter>
			<Enter at={about104} style={{position: 'absolute', left: 1290, top: 690}}>
				<div style={{...DISPLAY(TYPE.working, INK)}}><AnswerBox at={about104}>clearance ≈ 10.4 m</AnswerBox></div>
			</Enter>
			<Chip x={1290} y={820} at={clears} size={36} border={INK}>Yes: clears by 10.4 m ✓</Chip>
		</>
	);
};

// ---------- 7. the rounding trap ----------
const hBar = (x: number, y: number, len: number, color: string, soft: string, h = 34) => <rect x={x} y={y} width={len} height={h} fill={soft} stroke={color} strokeWidth={4} />;
export const S07: React.FC = () => {
	const id = 'rounding-trap';
	const f = useCurrentFrame();
	const roundUy = cue(id, 'round u y'), theTime = cue(id, 'the time'), eachTerm = cue(id, 'each term'), figures = cue(id, 'three figures'), s175 = cue(id, 'Seventeen point five'), three3 = cue(id, 'three point three'), twelve = cue(id, 'twelve centimetres'), clrOut = cue(id, 'clearance comes'), instead = cue(id, 'instead'), ten4 = cue(id, 'ten point four'), nearly = cue(id, 'nearly equal'), soKeep = cue(id, 'So keep'), answer = cue(id, 'answer');
	const K = 200; // px per metre for the result bars
	const k2 = 30; // px per metre for the term bars
	const S = ROLE.slate;
	return (
		<>
			<SceneHeading text="The rounding trap" at={-40} size={56} />
			<Enter at={-30} style={{position: 'absolute', left: 96, top: 180, width: 820}}>
				<div style={{...card, border: `3px solid ${INK}`, padding: '12px 26px 16px'}}>
					<Title>Unrounded (kept in the calculator)</Title>
					<div style={{...DISPLAY(40, ROLE.y.ink, 750), marginTop: 6}}>10.324 × 1.6955 = 17.505</div>
					<div style={{...DISPLAY(40, ROLE.a.ink, 750)}}>4.9 × 1.6955<Sup>2</Sup> = 14.086</div>
					<div style={{...DISPLAY(TYPE.current, INK, 800), marginTop: 4}}>17.505 − 14.086 = <AnswerBox at={-30}>3.4187 m</AnswerBox></div>
				</div>
			</Enter>
			<Enter at={-30} style={{position: 'absolute', left: 980, top: 180, width: 844}}>
				<div style={{...card, border: `4px solid ${S.stroke}`, padding: '12px 26px 16px', minHeight: 300}}>
					<Title color={S.ink}>Rounded early</Title>
					{f < roundUy ? <div style={{...DISPLAY(40, S.ink, 750), marginTop: 6, whiteSpace: 'normal'}}>What if you round before you subtract?</div> : null}
					<div style={{...DISPLAY(40, INK, 750), marginTop: 6}}><span style={{opacity: prog(f, roundUy, 12)}}><Q s="u" ax="y" plain /> ≈ <MarkSpan kind="underline" at={roundUy + 20} color={S.stroke}>10.32</MarkSpan><MS /></span><span style={{opacity: prog(f, theTime, 12)}}>, t ≈ <MarkSpan kind="underline" at={theTime + 20} color={S.stroke}>1.70</MarkSpan> s</span></div>
					<Row at={eachTerm} size={40}>10.32 × 1.70 = 17.544 → <b>17.5</b></Row>
					<Row at={figures} size={40}>4.9 × 1.70<Sup>2</Sup> = 14.161 → <b>14.2</b></Row>
					<Row at={s175} size={TYPE.current}>17.5 − 14.2 = <MarkSpan kind="circle" at={three3} color={S.stroke}>3.3 m</MarkSpan></Row>
				</div>
			</Enter>
			<HandNote x={1000} y={520} at={roundUy + 24} size={32} color={S.ink}>rounded u<Sub>y</Sub></HandNote>
			<HandNote x={1300} y={520} at={theTime + 24} size={32} color={S.ink}>rounded t</HandNote>
			<FrameSvg>
				<text x={110} y={590} style={{fontFamily: 'Inter Tight, sans-serif', fontWeight: 800, fontSize: 28, letterSpacing: 1.5}} fill={INK_SOFT}>HEIGHT AT THE WALL, ABOVE THE LAUNCH POINT</text>
				{hBar(110, 612, C35.sy * K, INK, '#ebe4d6', 60)}
				{f >= three3 ? hBar(110, 690, 3.3 * K, S.stroke, S.soft, 60) : null}
				{f >= twelve ? <Bracket x1={110 + 3.3 * K} y1={772} x2={110 + C35.sy * K} y2={772} color={INK} at={twelve} /> : null}
				<text x={k2 * 0 + 1000} y={590} style={{fontFamily: 'Inter Tight, sans-serif', fontWeight: 800, fontSize: 28, letterSpacing: 1.5}} fill={INK_SOFT}>THE TWO TERMS</text>
				{hBar(1000, 612, C35.rise * k2, ROLE.y.stroke, ROLE.y.soft, 60)}
				{hBar(1000, 690, C35.drop * k2, ROLE.a.stroke, ROLE.a.soft, 60)}
				{f >= nearly ? <Bracket x1={1000 + C35.drop * k2} y1={772} x2={1000 + C35.rise * k2} y2={772} color={INK} at={nearly} /> : null}
			</FrameSvg>
			<Lbl x={120 + C35.sy * K} y={650} color={INK} size={38}>3.42 m</Lbl>
			<Lbl x={120 + 3.3 * K} y={728} at={three3} color={S.ink} size={38}>3.3 m</Lbl>
			<Lbl x={110 + 3.36 * K} y={810} at={twelve} color={INK} anchor="middle" size={32}>12 cm too low</Lbl>
			<Lbl x={1010 + C35.rise * k2} y={650} color={ROLE.y.ink} size={38}>17.5</Lbl>
			<Lbl x={1010 + C35.drop * k2} y={728} color={ROLE.a.ink} size={38}>14.1</Lbl>
			<Lbl x={1000 + ((C35.rise + C35.drop) / 2) * k2} y={810} at={nearly} color={INK} anchor="middle" size={32}>3.4</Lbl>
			<HandTag x={1000} y={856} text="small difference of big numbers" at={nearly + 10} size={TYPE.handSmall} color={INK} />
			<CrossedChip x={110} y={850} at={clrOut} crossAt={instead} size={36}>clearance 10.3 m</CrossedChip>
			<Chip x={600} y={850} at={ten4} size={36} border={INK}>10.4 m ✓</Chip>
			<Enter at={soKeep} style={{position: 'absolute', left: 1000, top: 892, width: 824}}>
				<div style={{display: 'inline-block', background: ROLE.given.soft, border: `4.5px solid ${INK}`, borderRadius: 14, padding: '4px 18px 6px', ...DISPLAY(34, ROLE.given.ink, 800)}}>carry unrounded values, round once at the end</div>
			</Enter>
			<HandTag x={860} y={870} text="round once" at={answer - 20} size={TYPE.handSmall} color={INK} />
		</>
	);
};

// ---------- 8. why the sideways launch hit the wall (with the launch-angle slider) ----------
export const S08: React.FC = () => {
	const id = 'sideways-contrast';
	const f = useCurrentFrame();
	const same = cue(id, 'Same steps'), tw5 = cue(id, 'twenty-five over'), secs = cue(id, 'seconds'), falls = cue(id, 'falls'), five5 = cue(id, 'five point five'), below = cue(id, 'below the wall top'), top = cue(id, 'top'), sooner = cue(id, 'sooner'), noUp = cue(id, 'no upward velocity'), lift = cue(id, 'lift'), both = cue(id, 'changes both'), isC = cue(id, 'how high it is');
	const rep = secs - Math.round(C0.t * 30);
	const c0 = clockAt(f, rep, C0.t);
	const st0 = flightAt(RUN0, c0);
	const sweepA = both - 6, sweepB = isC + 14;
	const deg = f < sweepA ? 0 : kf(f, [[sweepA, 0], [sweepB, DEG]], false);
	const live = atWall(deg);
	const sliding = f >= sweepA;
	const [iwx, iwy] = ptU(W, DEG, C35.t);
	const b0y = GY - st0.y * PPM;
	const b0x = Math.min(MX + st0.x * PPM, WX - 13 - BALL_D / 2);
	const [lx, ly] = ptU(W, deg, live.t);
	const S = ROLE.slate;
	return (
		<>
			<SceneHeading text="Why the sideways launch hit the wall" at={-40} size={54} />
			<FrameSvg>
				<WallStage w={W} deg={deg} ball={f < rep} />
				<path d={pathU(W, DEG, C35.t)} fill="none" stroke={ROLE.v.stroke} strokeWidth={3.5} />
				<BallSvg cx={iwx} cy={iwy} d={BALL_D} />
				{c0 > 0.001 ? <path d={pathU(W, 0, c0)} fill="none" stroke={ROLE.v.stroke} strokeWidth={5} strokeDasharray="14 10" /> : null}
				{f >= rep ? <BallSvg cx={b0x} cy={b0y} d={BALL_D} /> : null}
				{f >= falls ? <rect x={WX + 30} y={GY} width={24} height={C0.drop * PPM * prog(f, falls, 30)} fill={ROLE.a.soft} stroke={ROLE.a.stroke} strokeWidth={4} /> : null}
				{f >= falls + 30 ? <line x1={b0x + 16} x2={WX + 58} y1={b0y} y2={b0y} stroke={INK} strokeWidth={3} strokeDasharray="8 7" /> : null}
				<Bracket x1={WX + 110} y1={WT} x2={WX + 110} y2={GY + C0.drop * PPM} color={INK} at={below} />
				<TermBars x={WX + 64} y0={GY} ppm={PPM} rise={C35.rise} drop={C35.drop} riseAt={noUp} dropAt={noUp + 10} gap={4} bw={22} />
				{sliding ? <path d={pathU(W, deg, live.t)} fill="none" stroke={ROLE.v.stroke} strokeWidth={6} /> : null}
				{sliding ? <BallSvg cx={Math.min(lx, live.clear < 0 ? WX - 13 - BALL_D / 2 : lx)} cy={ly} d={BALL_D + 4} /> : null}
			</FrameSvg>
			<StageBrackets wall={false} />
			<Lbl x={WX + 64} y={650} at={falls + 20} color={ROLE.a.ink} size={34}>9.45 m</Lbl>
			<Lbl x={WX + 124} y={250} at={noUp + 20} color={ROLE.y.ink} size={32}>17.5 m</Lbl>
			<Lbl x={WX + 124} y={360} at={noUp + 30} color={ROLE.a.ink} size={32}>14.1 m</Lbl>
			<Lbl x={WX + 126} y={WT + 26} at={below} color={INK} size={34}>2.45 m below the top</Lbl>
			<HandNote x={880} y={810} at={lift} size={TYPE.handSmall} color={ROLE.y.ink}>u<Sub>y</Sub> lifts it first</HandNote>
			<HandTag x={880} y={920} text="later, but higher" at={isC} size={TYPE.handSmall} color={INK} />
			<ReadCard x={110} y={190} w={300} label="sideways: t at wall" value="1.39" unit="s" at={sooner} color={ROLE.x.ink} />
			<ReadCard x={430} y={190} w={300} label="35°: t at wall" value="1.70" unit="s" at={sooner + 8} color={ROLE.x.ink} />
			<Enter at={-30} out={sweepA - 8} style={{position: 'absolute', left: 1250, top: 186, width: 574}}>
				<div style={{...card, border: `3px solid ${INK}`, padding: '10px 22px 14px'}}>
					<Title>Sideways launch, same steps</Title>
					<div style={{display: 'flex', flexDirection: 'column', gap: 4, marginTop: 4}}>
						<Row at={same} ageAt={tw5} size={TYPE.current} oldSize={34}><Q s="u" ax="x" plain /> = 18<MS />, <Q s="u" ax="y" plain /> = 0</Row>
						<Row at={tw5} ageAt={falls} size={TYPE.current} oldSize={34}><span style={{color: ROLE.x.ink}}>t = 25 ÷ 18 = </span>{f >= secs ? <AnswerBox at={secs} tick={false}>1.3889 s</AnswerBox> : '?'}</Row>
						<Row at={falls} ageAt={five5} size={TYPE.current} oldSize={34}><span style={{color: ROLE.a.ink}}><Q s="s" ax="y" plain /> = −4.9t<Sup>2</Sup></span></Row>
						<Row at={falls + 20} ageAt={five5} size={TYPE.current} oldSize={34}>&nbsp;&nbsp;= −9.4522 m</Row>
						<Row at={five5} ageAt={below} size={TYPE.current} oldSize={34}><span style={{color: ROLE.given.ink}}>height</span> = 15 − 9.45 = 5.55 m</Row>
						<Row at={below} size={TYPE.current}>5.548 − 8 = <AnswerBox at={top}>−2.45 m</AnswerBox></Row>
					</div>
				</div>
			</Enter>
			<Readouts x={1250} y={186} w={574} at={sweepA} size={44} title="live: tilt the launcher (at the wall)" rows={[
				{label: 'θ', value: `${Math.round(deg)}°`, color: ROLE.v.ink},
				{label: <>t at wall</>, value: fx(live.t, 2), unit: 's', color: ROLE.x.ink},
				{label: <><Q s="u" ax="y" plain />t</>, value: fx(live.rise, 1), unit: 'm', color: ROLE.y.ink},
				{label: <>½gt<Sup>2</Sup></>, value: fx(live.drop, 1), unit: 'm', color: ROLE.a.ink},
				{label: 'height above sea', value: fx(live.height, 1), unit: 'm', color: ROLE.given.ink},
				{label: 'clearance', value: (live.clear >= 0 ? '+' : '') + fx(live.clear, 1), unit: 'm', color: live.clear < 0 ? S.ink : INK},
			]} />
		</>
	);
};

// ---------- 9. the method: where, when, how high, compare ----------
export const S09: React.FC = () => {
	const id = 'method';
	const f = useCurrentFrame();
	const where = cue(id, 'Where is it'), when = cue(id, 'When does'), howHigh = cue(id, 'How high'), compare1 = cue(id, 'Then compare'), compare2 = cue(id, 'compare', 2), landing = cue(id, 'landing problem'), gives = cue(id, 'gives'), height = cue(id, 'height');
	const h = hold(id);
	const chip = (n: string, body: React.ReactNode, color: string, at: number, y: number) => (
		<Enter at={at} style={{position: 'absolute', left: 820, top: y}}>
			<div style={{display: 'inline-block', background: CARD, border: `3.5px solid ${color}`, borderRadius: 16, padding: '4px 22px 8px', boxShadow: CARD_SHADOW, ...DISPLAY(TYPE.current, INK, 800)}}><span style={{color}}>{n}</span> {body}</div>
		</Enter>
	);
	return (
		<>
			<SceneHeading text="The method for any obstacle" at={-40} size={56} />
			<Ledger x={96} y={196} w={660} h={400} size={32} titleSize={28}
				clock={{value: 't', t: 0.6, pulse: gives}}
				carry={{at: gives, into: 'y'}}
				hor={{rows: [{content: <><Q s="s" ax="x" plain /> known</>, at: where}, {content: <>t = <Q s="s" ax="x" plain /> ÷ <Q s="u" ax="x" plain /></>, at: when, box: gives}], glow: when}}
				ver={{rows: [{content: <><Q s="s" ax="y" plain /> = <Q s="u" ax="y" plain />t + ½<Q s="a" ax="y" plain />t<Sup>2</Sup></>, at: howHigh}, {content: <>then compare</>, at: compare1}], glow: height}} />
			{chip('Where:', <><Q s="s" ax="x" /> to the obstacle</>, ROLE.x.ink, where, 190)}
			{chip('When:', <>t = <Q s="s" ax="x" /> ÷ <Q s="u" ax="x" /></>, ROLE.x.ink, when, 282)}
			{chip('How high:', <><Q s="s" ax="y" /> = <Q s="u" ax="y" />t + ½<Q s="a" ax="y" />t<Sup>2</Sup></>, ROLE.y.ink, howHigh, 374)}
			{chip('Compare:', <>on one datum</>, ROLE.given.ink, compare1, 466)}
			<AidCard x={820} y={580} w={760} at={compare2 - 8}>
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 60, lineHeight: 1.1}}><span style={{color: ROLE.x.ink}}>Where, when,</span> <span style={{color: ROLE.y.ink}}>how high,</span> <span style={{color: ROLE.given.ink}}>compare.</span></div>
			</AidCard>
			<Enter at={-30} style={{position: 'absolute', left: 96, top: 640, width: 660, height: 300}}>
				<div style={{...card, border: `3px solid ${INK_SOFT}`, height: 290, boxSizing: 'border-box', padding: '10px 22px'}}>
					<Title>Last time: a landing</Title>
					<div style={{...DISPLAY(32, INK, 800), marginTop: 4}}><span style={{color: ROLE.y.ink}}>vertical: t</span> → <span style={{color: ROLE.x.ink}}>horizontal: R</span></div>
				</div>
			</Enter>
			<FrameSvg>
				<g opacity={prog(f, -30, 12)}>
					<CliffStage mx={250} gy={790} seaY={900} lw={90} deg={30} leftX={120} rightX={720} edgeOff={30} levelLine={false} />
					<path d={pathU({x0: 250, y0: 790, ppm: 110 / 30}, 30, 3.697, 0, 60, 20)} fill="none" stroke={ROLE.v.stroke} strokeWidth={4} />
				</g>
				<CarryArrow from={[300, 752]} to={[560, 752]} at={landing} color={INK} bend={0.12} />
				<Countdown start={h.startFrame} end={h.endFrame} x={1700} y={330} ringFrom={height} />
			</FrameSvg>
			<HandTag x={1600} y={860} text="here: x gives t" at={gives + 10} size={TYPE.handSmall} color={ROLE.x.ink} anchor="end" />
		</>
	);
};

export {Boxed};
