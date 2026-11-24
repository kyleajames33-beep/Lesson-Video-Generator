// Scenes 6 to 10: the limit (live speed slider with needed and available bars), worked example 2 (the
// limiting speed), what sets the limit (car and truck), past the limit (the wider path), the mistake and the
// memory aid.
import React from 'react';
import {staticFile, useCurrentFrame} from 'remotion';
import {Enter, FONT_HAND, prog} from '../../kit';
import {FrameSvg, HandTag, MarkSpan, SceneHeading, kf} from '../../math/studio';
import {INK, INK_SOFT, TYPE} from '../../shared/tokens';
import {AidCard, AnswerBox, CrossedChip, DISPLAY, MS, MS2, ROLE, Readouts, Row, Sub, Sup, VecArrow} from '../../physics/projectile/board';
import {fx} from '../../physics/projectile/flight';
import {RearCar, RoadSection, Roundabout, TopCar} from '../../physics/circular/road-cone';
import {Ring} from '../phys-y12-m5-v03/parts';
import {HEAD, HEAD_SIZE, WE2, WET, avail, cue, mono, needed} from './common';
import {AMBER, Bars, Force, Lbl, PointerLabel, RB, RoadStage, SIDE_SRC, TRUCK_SRC, carOnRing, roadGeom} from './parts';
import {Boxed, Givens, card} from './s1';

const Strike: React.FC<{on: number; children: React.ReactNode}> = ({on, children}) => {
	const p = prog(useCurrentFrame(), on, 12);
	return <span style={{position: 'relative', color: p > 0 ? ROLE.slate.ink : undefined}}>{children}{p > 0 ? <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{position: 'absolute', left: -4, top: 0, width: 'calc(100% + 8px)', height: '100%', overflow: 'visible'}}><path d="M0,70 L100,30" stroke={ROLE.slate.ink} strokeWidth={5} vectorEffect="non-scaling-stroke" fill="none" style={{clipPath: `inset(-50% ${100 - p * 100}% -50% 0)`}} /></svg> : null}</span>;
};

// ---------- 6. the limit (live speed slider) ----------
const M_CAR = 1200;
export const S06: React.FC = () => {
	const id = 'the-limit';
	const f = useCurrentFrame();
	const maxIs = cue(id, 'maximum is'), coef = cue(id, 'coefficient'), most = cue(id, 'most friction available'), justEq = cue(id, 'just equals'), soM = cue(id, 'So m v'), cancels = cue(id, 'cancels'), vmax = cue(id, 'v max equals');
	const v = kf(f, mono([[justEq, 8], [justEq + 110, 14], [justEq + 150, 14], [justEq + 190, WE2.vmax]], 10));
	const need = needed(M_CAR, v), have = avail(M_CAR);
	const meet = Math.abs(v - WE2.vmax) < 0.15;
	const [x, y] = roadGeom(330, 860, 320).com;
	return (
		<>
			<SceneHeading text="The limit: how much grip is there?" at={-40} size={54} />
			<FrameSvg>
				<RoadSection cx={330} cy={860} half={260} />
				<RearCar cx={330} cy={860} w={320} />
				<Force x={x} y={y} L={Math.max(30, (need / have) * 150)} dir="left" color={need > have * 1.0005 ? ROLE.slate.stroke : AMBER.stroke} />
				<Bars x={720} base={860} scale={300 / 8000} need={f >= justEq ? need : 0.001} have={have} at={most} />
			</FrameSvg>
			<Lbl x={x - 100} y={y - 60} color={AMBER.ink} size={34}>f</Lbl>
			{f >= justEq && meet ? <Lbl x={790} y={860 - have * 300 / 8000 - 30} color={ROLE.given.ink} size={32}>limit</Lbl> : null}
			{f >= justEq && need > have * 1.0005 ? <Lbl x={720} y={500} color={ROLE.slate.ink} size={32}>not enough grip</Lbl> : null}
			<div style={{position: 'absolute', left: 96, top: 186, display: 'flex', flexDirection: 'column', gap: 10}}>
				<Row at={maxIs} size={TYPE.current}>f ≤ f<Sub>max</Sub> = μ<Sub>s</Sub>N</Row>
				<Row at={most} size={TYPE.current}>f<Sub>max</Sub> = μ<Sub>s</Sub>mg</Row>
			</div>
			<HandTag x={480} y={206} text="most grip" at={maxIs + 20} size={30} color={ROLE.given.ink} />
			<Enter at={coef} style={{position: 'absolute', left: 96, top: 340, width: 600}}>
				<div style={{...card, border: `3px solid ${ROLE.given.stroke}`, padding: '6px 18px 8px'}}>
					<div style={{...DISPLAY(30, ROLE.given.ink, 800), whiteSpace: 'normal'}}>μ<Sub>s</Sub>: how well the surfaces grip (no unit)</div>
				</div>
			</Enter>
			<Readouts x={1290} y={186} w={534} size={44} at={coef} title="live: speed up the car" rows={[
				{label: 'v', value: fx(v, 1), unit: <>m s<Sup>−1</Sup></>, color: ROLE.x.ink},
				{label: 'needed: mv²/r', value: fx(need, 0), unit: 'N', color: need > have * 1.0005 ? ROLE.slate.ink : AMBER.ink},
				{label: <>available: μ<Sub>s</Sub>mg</>, value: fx(have, 0), unit: 'N', color: ROLE.given.ink},
			]} />
			<Lbl x={1290} y={470} at={coef} color={ROLE.given.ink} size={30}>r = 30 m, μ<Sub>s</Sub> = 0.60, m = 1200 kg</Lbl>
			<div style={{position: 'absolute', left: 1290, top: 540, display: 'flex', flexDirection: 'column', gap: 12, width: 534}}>
				<Row at={soM} size={TYPE.current}><Strike on={cancels}>m</Strike>v<Sub>max</Sub><Sup>2</Sup>/r = μ<Sub>s</Sub><Strike on={cancels + 4}>m</Strike>g</Row>
				<Row at={vmax - 6} size={60}><AnswerBox at={vmax}><span>v<Sub>max</Sub> = √(μ<Sub>s</Sub>gr)</span></AnswerBox></Row>
			</div>
			<HandTag x={1290} y={770} text="m on both sides" at={cancels + 10} size={TYPE.handSmall} color={ROLE.slate.ink} />
		</>
	);
};

// ---------- 7. worked example: the limiting speed ----------
export const S07: React.FC = () => {
	const id = 'worked-limiting-speed';
	const six = cue(id, 'zero point six zero', 2), th = cue(id, 'thirteen point three'), kmh = cue(id, 'forty-eight');
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<Enter at={-30} style={{position: 'absolute', left: 96, top: 176}}>
				<div style={{display: 'inline-block', background: '#f1ebdf', border: `3px solid ${INK}`, borderRadius: 14, padding: '4px 18px 6px', ...DISPLAY(36, INK, 800)}}>Find the maximum speed on a flat curve without slipping.</div>
			</Enter>
			<Givens y={246} w={1200}>r = 30 m | μ<Sub>s</Sub> = 0.60 | g = 9.8<MS2 /></Givens>
			<FrameSvg>
				<Roundabout cx={330} cy={680} R={190} w={70} />
				<TopCar x={520} y={680} len={110} heading={90} />
				<line x1={330} y1={680} x2={520} y2={680} stroke={ROLE.given.stroke} strokeWidth={4} />
			</FrameSvg>
			<Lbl x={425} y={650} color={ROLE.given.ink} anchor="middle" size={32}>r = 30 m</Lbl>
			<HandTag x={110} y={940} text="no mass needed" at={-30} size={30} color={ROLE.given.ink} />
			<Enter at={-30} style={{position: 'absolute', left: 820, top: 340}}><Boxed color={INK} size={TYPE.current}>v<Sub>max</Sub> = √(μ<Sub>s</Sub>gr)</Boxed></Enter>
			<div style={{position: 'absolute', left: 820, top: 460, display: 'flex', flexDirection: 'column', gap: 14}}>
				<Row at={six} size={TYPE.working}>v<Sub>max</Sub> = <MarkSpan kind="circle" at={th} color={ROLE.given.stroke}>√</MarkSpan>(0.60 × 9.8 × 30) = √176.4</Row>
				<Row at={th - 6} size={TYPE.working}>&nbsp;&nbsp;= <AnswerBox at={th}><span>13.3<MS /></span></AnswerBox></Row>
				<Row at={kmh - 10} size={TYPE.current}>13.28 × 3.6 = 47.8 km h<Sup>−1</Sup> (about 48)</Row>
			</div>
			<HandTag x={830} y={770} text="keep 13.28" at={th + 20} size={30} color={ROLE.given.ink} />
		</>
	);
};

// ---------- 8. what sets the limit ----------
export const S08: React.FC = () => {
	const id = 'what-sets-limit';
	const f = useCurrentFrame();
	const truck = cue(id, 'loaded truck'), radius = cue(id, 'bigger radius'), wet = cue(id, 'wet road'), nine = cue(id, 'nine point four'), square = cue(id, 'square of the speed');
	const sT = 360 / 1967, sC = 230 / 1279;
	const vmax = WE2.vmax;
	const gx = (v: number) => 1330 + v * 28, gy = (F: number) => 900 - F * 0.018;
	let d = '';
	for (let i = 0; i <= 40; i++) { const v = (16 * i) / 40; d += `${i ? 'L' : 'M'}${gx(v).toFixed(1)},${gy(needed(M_CAR, v)).toFixed(1)} `; }
	return (
		<>
			<SceneHeading text="What sets the limit?" at={-40} size={56} />
			<FrameSvg>
				<line x1={96} x2={1180} y1={520} y2={520} stroke={INK} strokeWidth={4} />
				<image href={staticFile(SIDE_SRC)} x={150 - 161 * sC} y={520 - 664 * sC} width={1600 * sC} height={800 * sC} preserveAspectRatio="none" />
				<image href={staticFile(TRUCK_SRC)} x={560 - 217 * sT} y={520 - 816 * sT} width={2400 * sT} height={1000 * sT} preserveAspectRatio="none" />
				<Bars x={120} base={880} scale={220 / 60000} need={avail(M_CAR)} have={avail(M_CAR)} at={truck} />
				<Bars x={560} base={880} scale={220 / 60000} need={avail(10000)} have={avail(10000)} at={truck + 20} />
				{f >= square ? <g opacity={prog(f, square, 14)}>
					<path d={`M${gx(0)},${gy(9000)} V${gy(0)} H${gx(16)}`} fill="none" stroke={INK} strokeWidth={3} />
					<line x1={gx(0)} x2={gx(16)} y1={gy(avail(M_CAR))} y2={gy(avail(M_CAR))} stroke={ROLE.given.stroke} strokeWidth={4} />
					<path d={d} fill="none" stroke={AMBER.stroke} strokeWidth={5} />
					<Ring cx={gx(vmax)} cy={gy(avail(M_CAR))} rx={22} ry={22} at={square + 10} color={AMBER.stroke} />
				</g> : null}
			</FrameSvg>
			<Lbl x={255} y={560} at={truck} color={INK} anchor="middle" size={30}>car, 1200 kg</Lbl>
			<Lbl x={740} y={560} at={truck} color={INK} anchor="middle" size={30}>truck, 10 000 kg</Lbl>
			<Lbl x={255} y={620} at={truck + 10} color={ROLE.x.ink} anchor="middle" size={34}>v<Sub>max</Sub> = 13.3<MS /></Lbl>
			<Lbl x={740} y={620} at={truck + 30} color={ROLE.x.ink} anchor="middle" size={34}>v<Sub>max</Sub> = 13.3<MS /></Lbl>
			<HandTag x={880} y={760} text="heavier: more needed," at={truck + 40} size={30} color={ROLE.given.ink} />
			<HandTag x={880} y={800} text="and more available" at={truck + 46} size={30} color={ROLE.given.ink} />
			<Enter at={-30} style={{position: 'absolute', left: 1290, top: 186}}><Boxed color={INK} size={TYPE.working}>v<Sub>max</Sub> = √(μ<Sub>s</Sub>gr)</Boxed></Enter>
			<Lbl x={1300} y={320} at={truck} color={ROLE.slate.ink} size={32}>no m in it</Lbl>
			<Lbl x={1300} y={380} at={radius} color={ROLE.given.ink} size={34}>r ↑, v<Sub>max</Sub> ↑</Lbl>
			<Lbl x={1300} y={440} at={wet} color={ROLE.given.ink} size={34}>wet road: μ<Sub>s</Sub> ↓</Lbl>
			<Enter at={nine - 10} style={{position: 'absolute', left: 1290, top: 480, width: 534}}>
				<div style={{...DISPLAY(34, INK, 800)}}>μ<Sub>s</Sub> = 0.30:</div>
				<div style={{...DISPLAY(34, INK, 800)}}>v<Sub>max</Sub> = √(0.30 × 9.8 × 30)</div>
				<div style={{...DISPLAY(34, INK, 800)}}>&nbsp;&nbsp;= <AnswerBox at={nine}><span>{fx(WET.vmax, 1)}<MS /></span></AnswerBox></div>
			</Enter>
			<HandTag x={1290} y={680} text="half the grip, not half the speed" at={nine + 20} size={30} color={ROLE.given.ink} />
			{f >= square ? <Lbl x={gx(vmax) + 18} y={gy(avail(M_CAR)) + 30} color={AMBER.ink} size={30}>v<Sub>max</Sub></Lbl> : null}
			{f >= square ? <Lbl x={gx(16)} y={gy(0) + 34} color={INK_SOFT} anchor="end" size={28}>speed</Lbl> : null}
			{f >= square ? <Lbl x={gx(5)} y={gy(avail(M_CAR)) - 26} color={ROLE.given.ink} size={28}>available</Lbl> : null}
			{f >= square ? <Lbl x={gx(9.5)} y={gy(needed(M_CAR, 9.5)) + 34} color={AMBER.ink} size={28}>needed ∝ v²</Lbl> : null}
		</>
	);
};

// ---------- 9. past the limit ----------
export const S09: React.FC = () => {
	const id = 'past-the-limit';
	const f = useCurrentFrame();
	const faster = cue(id, 'faster than'), sharply = cue(id, 'not as sharply'), round = cue(id, 'roundabout'), nothing = cue(id, 'Nothing throws'), enough = cue(id, 'big enough');
	const drift = kf(f, mono([[sharply, 0], [round + 30, 1]], 10));
	const phi = (2 * Math.PI * f) / 300;
	const R = RB.R + drift * 70;
	const [x, y] = carOnRing(phi, R);
	const ux = Math.cos(phi), uy = -Math.sin(phi);
	let trail = '';
	for (let k = 0; k <= 60; k++) { const ff = Math.max(sharply, f - 120) + ((f - Math.max(sharply, f - 120)) * k) / 60; const dd = kf(ff, mono([[sharply, 0], [round + 30, 1]], 10)); const [tx_, ty_] = carOnRing((2 * Math.PI * ff) / 300, RB.R + dd * 70); trail += `${k ? 'L' : 'M'}${tx_.toFixed(1)},${ty_.toFixed(1)} `; }
	return (
		<>
			<SceneHeading text="Past the limit" at={-40} size={56} />
			<FrameSvg>
				<Roundabout cx={RB.cx} cy={RB.cy} R={RB.R} w={RB.w} />
				{f > sharply ? <path d={trail} fill="none" stroke={ROLE.x.stroke} strokeWidth={5} strokeDasharray="10 7" /> : null}
				<TopCar x={x} y={y} len={130} heading={(phi * 180) / Math.PI + 90} />
				<VecArrow x={x - ux * 40} y={y - uy * 40} dx={-ux * (f >= faster ? 90 : 150)} dy={-uy * (f >= faster ? 90 : 150)} color={AMBER.stroke} width={7} head={22} />
				{f >= enough ? <line x1={x - ux * 40} y1={y - uy * 40} x2={x - ux * 190} y2={y - uy * 190} stroke={AMBER.stroke} strokeWidth={3} strokeDasharray="8 6" /> : null}
				{f >= nothing ? <g opacity={prog(f, nothing, 12)}><VecArrow x={x + ux * 70} y={y + uy * 70} dx={ux * 110} dy={uy * 110} color={ROLE.slate.stroke} width={5} dash="10 7" /></g> : null}
				<Bars x={1330} base={760} scale={300 / 10000} need={needed(1200, f >= faster ? 15.5 : 12)} have={avail(1200)} at={faster} />
			</FrameSvg>
			<Lbl x={1290} y={200} at={faster} color={ROLE.x.ink} size={TYPE.current}>v = 15.5<MS /> &gt; v<Sub>max</Sub></Lbl>
			<HandTag x={x + 60} y={y - 80} text="wider curve: model path" at={round} size={30} color={ROLE.x.ink} />
			<CrossedChip x={1290} y={820} at={nothing} crossAt={nothing + 20} size={32}>outward force</CrossedChip>
			<HandTag x={1290} y={940} text="too little inward force" at={enough} size={30} color={AMBER.ink} />
		</>
	);
};

// ---------- 10. mistake and memory aid ----------
export const S10: React.FC = () => {
	const id = 'mistake-memory-aid';
	const extra = cue(id, 'extra arrow'), twice = cue(id, 'twice'), job = cue(id, 'Centripetal is a job'), centre = cue(id, 'centre');
	const [x, y] = roadGeom().com;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<RoadStage />
				<Force x={x} y={y} L={170} dir="down" />
				<Force x={x} y={y} L={170} dir="up" />
				<Force x={x} y={y} L={170} dir="left" />
				<Force x={x} y={y - 60} L={170} dir="left" at={extra} color={ROLE.slate.stroke} dash="12 8" />
				<Ring cx={x - 85} cy={y} rx={110} ry={34} at={centre} color={AMBER.stroke} />
			</FrameSvg>
			<PointerLabel />
			<Lbl x={400} y={y + 30} color={AMBER.ink} anchor="end" size={TYPE.current}>f</Lbl>
			<Lbl x={400} y={y - 80} at={extra} color={ROLE.slate.ink} anchor="end" size={30}>"centripetal force"</Lbl>
			<CrossedChip x={96} y={840} at={twice - 10} crossAt={twice} size={32} caption="f already is the centripetal force">extra centripetal arrow</CrossedChip>
			<HandTag x={400} y={y + 100} text="does the job" at={centre + 10} size={TYPE.handSmall} color={AMBER.ink} anchor="end" />
			<Enter at={-30} style={{position: 'absolute', left: 1190, top: 640, width: 634}}>
				<div style={{...card, border: `3px solid ${ROLE.slate.stroke}`}}>
					<div style={{...DISPLAY(TYPE.label, ROLE.slate.ink, 800), textTransform: 'uppercase', letterSpacing: 1.5}}>The classic mistake</div>
					<div style={{...DISPLAY(32, INK, 700), whiteSpace: 'normal'}}>an extra "centripetal force" arrow drawn beside friction</div>
				</div>
			</Enter>
			<AidCard x={1190} y={200} w={634} at={job - 10}>
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 60, lineHeight: 1.1, color: AMBER.ink}}>Centripetal is a job, not a force.</div>
				<div style={{...DISPLAY(30, INK, 700), marginTop: 8, whiteSpace: 'normal'}}>Draw the real forces first, then find the one pointing in.</div>
			</AidCard>
		</>
	);
};

