// Scenes 6 to 9: the worked example (working layout with the end-on pair: equal arrows for 12 A and 8.0 A, the third-law
// pair), the ampere then and now (two long wires 1 m apart, the historical card and stamp, the check, the 2019 card with
// a stream of elementary charges and a live counter), the balance investigation (painted balance, rods on painted
// blocks, stand and boss, supply and multimeter on the circuits engine; the reading rising; the illustrative points on a
// straight line through the origin), and the memory card.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {FrameSvg, HandTag, MarkSpan, SceneHeading, kf} from '../../math/studio';
import {CARD, INK, INK_SOFT} from '../../shared/tokens';
import {AidCard, AnswerBox, Chip, CrossedChip, Row} from '../../physics/projectile/board';
import {Arrow2} from '../../physics/electromagnetism/magnetic';
import {Lead} from '../../physics/electromagnetism/plates';
import {BALANCE, BARMAG, BLOCK, Boss, DMM, Display, LVS, Plate, Rod, Stand, balancePts, barMagnetPts, dmmPts, lvsPts, rodAt} from '../../physics/electromagnetism/bench';
import type {Place} from '../../physics/electromagnetism/bench';
import {EndOnWire} from '../../physics/electromagnetism/wires';
import {runCircuit, circuitAt} from '../../sims/circuits';
import {AMP, HEAD, HEAD_SIZE, INV, WE, cap, cue, mono} from './common';
import {AMBER, CardRect, FArrow, GREY, Givens, Lbl, NAVY, ORANGE, Ring, Strip, fl, fx, sci} from './parts';

// ---------- 6. equal forces: a worked example ----------
const P6 = {x1: 260, y: 560, k: 4000};
export const S06: React.FC = () => {
	const id = 'worked-example';
	const f = useCurrentFrame();
	const two = cue(id, 'Two long parallel wires are'), metre = cue(id, 'newtons per metre'), repel = cue(id, 'so the wires repel'), which = cue(id, 'Which wire gets the bigger push'), neither = cue(id, 'Neither'), pair = cap(id, cue(id, "That's a Newton's third law"));
	const x2 = P6.x1 + WE.r * P6.k;
	const eq = prog(f, neither, 16);
	const L = 120;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<CardRect x={96} y={300} w={720} h={520} />
				<EndOnWire cx={P6.x1} cy={P6.y} r={46} dir="out" />
				<EndOnWire cx={x2} cy={P6.y} r={34} dir="in" />
				<line x1={P6.x1} y1={P6.y + 110} x2={x2} y2={P6.y + 110} stroke={NAVY.stroke} strokeWidth={4} />
				{f >= repel ? <g opacity={prog(f, repel, 12)}>
					<FArrow x={P6.x1} y={P6.y} len={-(L - 30 * (1 - eq))} r={46} width={8} />
					<FArrow x={x2} y={P6.y} len={L + 30 * (1 - eq)} r={34} width={8} />
				</g> : null}
			</FrameSvg>
			<Lbl x={P6.x1} y={P6.y - 80} color={ORANGE.ink} size={32} anchor="middle">12 A (up)</Lbl>
			<Lbl x={x2} y={P6.y - 80} color={ORANGE.ink} size={32} anchor="middle">8.0 A (down)</Lbl>
			<Lbl x={(P6.x1 + x2) / 2} y={P6.y + 150} color={NAVY.ink} size={30} anchor="middle">r = 8.0 cm</Lbl>
			<Lbl x={P6.x1 - 40} y={P6.y + 220} at={neither} color={AMBER.ink} size={28}>{fl(WE.F)} N m⁻¹</Lbl>
			<Lbl x={x2 - 20} y={P6.y + 260} at={neither} color={AMBER.ink} size={28}>{fl(WE.F)} N m⁻¹</Lbl>
			<HandTag x={140} y={360} text="equal arrows" at={neither + 16} size={32} color={AMBER.ink} />
			<Strip x={900} y={176} at={two} size={30} w={920}>Find the force per metre between the wires, and whether they attract or repel.</Strip>
			<Strip x={900} y={286} at={two + 8} size={32} border={INK}>F/l = (μ₀/2π)(I₁I₂/r)</Strip>
			<Givens x={900} y={356} w={920} at={two + 16} size={30} lines={[<>I₁ = 12 A (up), I₂ = 8.0 A (down)</>, <>r = 8.0 cm = <MarkSpan kind="circle" at={two + 60} color={NAVY.stroke}>0.080 m</MarkSpan></>, <>μ₀/2π = 2 × 10⁻⁷ N A⁻²</>]} />
			<HandTag x={1500} y={430} text="cm → m" at={two + 66} size={32} color={NAVY.ink} />
			<div style={{position: 'absolute', left: 900, top: 520, display: 'flex', flexDirection: 'column', gap: 6, width: 940}}>
				<Row at={metre - 60} ageAt={repel} size={44} oldSize={36}>F/l = 2 × 10⁻⁷ × (12 × 8.0) / 0.080</Row>
				<Row at={metre} size={48}>&nbsp;&nbsp;= <AnswerBox at={metre + 12}><span style={{color: AMBER.ink}}>{fl(WE.F)} N m⁻¹</span></AnswerBox></Row>
			</div>
			<Chip x={900} y={680} at={repel} size={30} w={460}>opposite currents: repel</Chip>
			<div style={{position: 'absolute', left: 900, top: 760, width: 920, opacity: prog(f, pair, 12), background: CARD, border: `4.5px solid ${INK}`, borderRadius: 12, padding: '6px 18px 8px', fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 32, color: INK, lineHeight: 1.2}}>Newton's third law pair: equal size, opposite direction, on different wires ✓</div>
			<CrossedChip x={1380} y={672} at={which} crossAt={neither + 10} size={28} caption="same product">12 A wire pushes harder</CrossedChip>
		</>
	);
};

// ---------- 7. the ampere, then and now ----------
const W7 = {x1: 96, x2: 880, y1: 300, y2: 540};
export const S07: React.FC = () => {
	const id = 'ampere';
	const f = useCurrentFrame();
	const once = cue(id, 'once used to define the amp'), until = cue(id, 'Until twenty nineteen'), wire = cue(id, 'on each metre of wire'), check = cue(id, 'Check it'), third = cue(id, "Newton's third law is what made"), measured = cue(id, 'which wire you measured'), since = cue(id, 'Since twenty nineteen'), fixed = cue(id, 'is fixed exactly'), second = cue(id, 'elementary charges every second'), mu = cap(id, cue(id, 'Mu nought is now measured'));
	const card1 = prog(f, until, 14) * (1 - prog(f, since, 14));
	const card2 = prog(f, since, 14);
	const pulse = Math.sin(Math.PI * Math.min(1, Math.max(0, (f - measured) / 24)));
	const cnt = kf(f, mono([[second, 0], [second + 60, 1]]));
	const stream = f >= second ? (f - second) * 4 : 0;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				{[W7.y1, W7.y2].map(y => <g key={y} opacity={prog(f, 0, 14)}>
					<rect x={W7.x1} y={y - 13} width={W7.x2 - W7.x1} height={26} rx={13} fill="#d99a5b" stroke="#8a4f1c" strokeWidth={4} />
					<Arrow2 from={[W7.x1 + 40, y - 46]} to={[W7.x1 + 220, y - 46]} color={ORANGE.stroke} width={6} head={20} />
				</g>)}
				{[W7.x1 + 300, W7.x1 + 520].map(x => <g key={x} opacity={prog(f, 0, 12)}>
					<Arrow2 from={[x, W7.y1 + 16]} to={[x, W7.y1 + 70 + 6 * pulse]} color={AMBER.stroke} width={6 + 2 * pulse} head={20} />
					<Arrow2 from={[x, W7.y2 - 16]} to={[x, W7.y2 - 70 - 6 * pulse]} color={AMBER.stroke} width={6 + 2 * pulse} head={20} />
				</g>)}
				<line x1={W7.x2 + 30} y1={W7.y1} x2={W7.x2 + 30} y2={W7.y2} stroke={NAVY.stroke} strokeWidth={4} opacity={prog(f, 0, 14)} />
				<Ring cx={W7.x1 + 410} cy={(W7.y1 + W7.y2) / 2} rx={190} ry={70} at={measured + 6} color={AMBER.stroke} />
				{card1 < 0.99 && card2 < 0.01 ? <g opacity={1 - prog(f, until, 14)}>
					<CardRect x={1180} y={190} w={600} h={300} />
					<EndOnWire cx={1360} cy={340} r={40} dir="out" />
					<EndOnWire cx={1600} cy={340} r={40} dir="out" />
					<FArrow x={1360} y={340} len={70} r={40} width={7} />
					<FArrow x={1600} y={340} len={-70} r={40} width={7} />
					<line x1={1360} y1={430} x2={1600} y2={430} stroke={NAVY.stroke} strokeWidth={4} />
				</g> : null}
				{card2 > 0 ? <g opacity={card2}>
					<line x1={1450} y1={610} x2={1450} y2={720} stroke={INK} strokeWidth={4} />
					{Array.from({length: 9}, (_, i) => { const x = 1140 + ((i * 70 + stream) % 630); return <circle key={i} cx={x} cy={665} r={10} fill={CARD} stroke={INK} strokeWidth={3} />; })}
				</g> : null}
			</FrameSvg>
			<Lbl x={W7.x1 + 230} y={W7.y1 - 40} at={0} color={ORANGE.ink} size={30}>1 A</Lbl>
			<Row at={0} size={44} style={{position: 'absolute', left: 960, top: 560, opacity: 1 - card2}}>defining the amp with this force</Row>
			<Lbl x={W7.x1 + 230} y={W7.y2 - 40} at={once} color={ORANGE.ink} size={30}>1 A</Lbl>
			<Lbl x={W7.x2 + 44} y={(W7.y1 + W7.y2) / 2 + 10} at={0} color={NAVY.ink} size={30}>1 m</Lbl>
			<Lbl x={1480} y={470} at={0} out={until} color={NAVY.ink} size={30} anchor="middle">1 m (seen end on)</Lbl>
			<Lbl x={W7.x1 + 560} y={(W7.y1 + W7.y2) / 2 + 10} at={wire} color={AMBER.ink} size={30}>2 × 10⁻⁷ N m⁻¹</Lbl>
			<Row at={check} size={44} style={{position: 'absolute', left: 96, top: 620}}>F/l = 2 × 10⁻⁷ × (1 × 1) / 1 = <AnswerBox at={check + 30}>2 × 10⁻⁷ N m⁻¹</AnswerBox></Row>
			<Chip x={96} y={710} at={measured} size={32} w={780}>third law: same force on each wire</Chip>
			<HandTag x={500} y={235} text="equal on each wire: third law" at={third + 10} size={30} color={AMBER.ink} />
			<div style={{position: 'absolute', left: 960, top: 190, width: 864, opacity: card1, background: CARD, borderRadius: 16, border: '3px solid rgba(60,45,20,0.25)', padding: '16px 26px', fontFamily: 'Inter Tight', fontWeight: 600, fontSize: 30, lineHeight: 1.3, color: INK}}>
				"One ampere is the constant current which, if maintained in two straight parallel conductors of infinite length, of negligible circular cross-section, and placed one metre apart in vacuum, would produce between these conductors a force equal to 2 × 10⁻⁷ newtons per metre of length."
				<div style={{marginTop: 12, display: 'inline-block', border: `4px solid ${INK}`, borderRadius: 10, padding: '2px 14px', fontWeight: 900, fontSize: 30, transform: 'rotate(-3deg)'}}>SI DEFINITION UNTIL 20 MAY 2019</div>
			</div>
			<HandTag x={1560} y={600} text="until 2019" at={until + 30} out={since} size={34} color={INK} />
			<div style={{position: 'absolute', left: 960, top: 190, width: 864, opacity: card2, background: CARD, borderRadius: 16, border: `3px solid ${INK}`, padding: '16px 26px', fontFamily: 'Inter Tight', fontWeight: 700, fontSize: 34, lineHeight: 1.3, color: INK}}>
				<div style={{fontWeight: 900}}>SI definition since 2019</div>
				<div style={{opacity: prog(f, fixed, 12)}}>e = 1.602176634 × 10⁻¹⁹ C exactly</div>
				<div style={{opacity: prog(f, second, 12), fontSize: 32, marginTop: 8}}>1 A = 1 C s⁻¹ ≈ {sci(AMP.perSecond, 2)} elementary charges per second</div>
			</div>
			<Lbl x={1140} y={770} at={second} color={INK} size={36}>{sci(AMP.perSecond * cnt, 2)} in {fx(cnt, 2)} s</Lbl>
			<Chip x={960} y={830} at={mu} size={30} w={860}>μ₀ ≈ 4π × 10⁻⁷ N A⁻² (measured)</Chip>
			<Chip x={96} y={790} at={since} size={28} w={780} color={INK_SOFT}>historical: the wire definition, until 2019</Chip>
			<CrossedChip x={96} y={860} at={since + 20} crossAt={since + 50} size={28}>the wire definition is today's SI</CrossedChip>
		</>
	);
};

// ---------- 8. measure it yourself ----------
const BAL: Place = {x: 110, y: 650, w: 560};
const ROD_LEN = 600, GAP = 90;
const LV: Place = {x: 840, y: 710, w: 250}, DM: Place = {x: 1110, y: 554, w: 150};
const GR = {ox: 1300, oy: 660, w: 500, h: 330};
export const S08: React.FC = () => {
	const id = 'investigation';
	const f = useCurrentFrame();
	const meas = cue(id, 'You can measure this force'), fix = cue(id, 'Fix one copper rod'), clamp = cue(id, 'clamp a second rod'), same = cue(id, 'the same current runs out'), rises = cue(id, 'the balance reading rises'), ten = cue(id, 'For example, ten amps'), turn = cue(id, 'Turn that into a force'), fixed = cue(id, 'and the alignment fixed'), plot = cue(id, 'Then plot'), line = cap(id, cue(id, 'If the model holds'));
	const b = balancePts(BAL);
	const ra = rodAt(BAL.x + BAL.w / 2, 0, ROD_LEN);
	const lowY = b.panY - 14 - ra.thick / 2, upY = lowY - GAP;
	const cx = BAL.x + BAL.w / 2;
	const run = runCircuit([{id: 'sup', kind: 'battery', from: 'n', to: 'p', emf: 2}, {id: 'A', kind: 'ammeter', from: 'p', to: 'a'}, {id: 'rods', kind: 'resistor', from: 'a', to: 'n', r: 0.2}], [{at: 0, set: {sup: {emf: 0}}}, {at: same, set: {sup: {emf: 2}}, over: 30}]);
	const I = circuitAt(run, f).current.A ?? 0;
	const dm = 0.1 * (I / 10) ** 2;
	const lv = lvsPts(LV), dmm = dmmPts(DM);
	const ptsO = (i: number) => prog(f, plot + 20 + i * 12, 10);
	const gx = (x: number) => GR.ox + (x / 20000) * GR.w, gy = (y: number) => GR.oy - (y / 4.0e-3) * GR.h;
	const chipsO = 1 - prog(f, plot, 14);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<line x1={60} y1={BAL.y + 160} x2={1240} y2={BAL.y + 160} stroke={INK} strokeWidth={4} />
				<Stand rodX={760} baseY={BAL.y + 160} height={560} />
				<g opacity={prog(f, meas, 14)}><Plate spec={BALANCE} p={BAL} />
				<Display box={b.display} text={`+${fx(dm, 2)} g`} color="#c8f0c0" /></g>
				<g opacity={prog(f, fix, 14)}>
					<Plate spec={BLOCK} p={{x: cx - 230, y: b.panY - 14, w: 110}} />
					<Plate spec={BLOCK} p={{x: cx + 120, y: b.panY - 14, w: 110}} />
					<Rod cx={cx} cy={lowY} len={ROD_LEN} />
				</g>
				<g opacity={prog(f, clamp, 14)}>
					<line x1={cx + ROD_LEN / 2 - 20} y1={upY} x2={760} y2={upY} stroke="#8d8f93" strokeWidth={10} />
					<Boss x={760} y={upY} w={90} />
					<Rod cx={cx} cy={upY} len={ROD_LEN} />
				</g>
				<g opacity={prog(f, meas, 12)}>
					<Lead pts={[lv.pos, [lv.pos[0], 470], [cx - ROD_LEN / 2 - 30, 470], [cx - ROD_LEN / 2 - 30, upY], [cx - ROD_LEN / 2 + 6, upY]]} width={3.5} />
					<Lead pts={[[cx + ROD_LEN / 2 - 6, upY], [cx + ROD_LEN / 2 + 12, upY], [cx + ROD_LEN / 2 + 12, lowY], [cx + ROD_LEN / 2 - 6, lowY]]} width={3.5} />
					<Lead pts={[[cx - ROD_LEN / 2 + 6, lowY], [cx - ROD_LEN / 2 - 50, lowY], [cx - ROD_LEN / 2 - 50, 915], [dmm.amp[0], 915], dmm.amp]} width={3.5} />
					<Lead pts={[dmm.com, [dmm.com[0], 885], [lv.neg[0], 885], lv.neg]} width={3.5} />
					<Plate spec={LVS} p={LV} />
					<Plate spec={DMM} p={DM} />
					<Display box={dmm.display} text={`${fx(I, 1)} A`} />
				</g>
				{I > 0.5 ? <g>
					<Arrow2 from={[cx - 160, upY - 40]} to={[cx + 160, upY - 40]} color={ORANGE.stroke} width={6} head={20} />
					<Arrow2 from={[cx + 160, lowY + 38]} to={[cx - 160, lowY + 38]} color={ORANGE.stroke} width={6} head={20} />
				</g> : null}
				{f >= rises ? <Arrow2 from={[cx, lowY - 70]} to={[cx, lowY - 22]} color={AMBER.stroke} width={8} head={24} opacity={prog(f, rises, 12)} /> : null}
				<line x1={cx + 230} y1={upY} x2={cx + 230} y2={lowY} stroke={NAVY.stroke} strokeWidth={5} opacity={prog(f, clamp + 20, 12)} />
				{f >= plot ? <g opacity={prog(f, plot, 14)}>
					<line x1={GR.ox} y1={GR.oy} x2={GR.ox + GR.w + 20} y2={GR.oy} stroke={INK} strokeWidth={3} />
					<line x1={GR.ox} y1={GR.oy} x2={GR.ox} y2={GR.oy - GR.h - 20} stroke={INK} strokeWidth={3} />
					{INV.pts.map((p, i) => <circle key={i} cx={gx(p.x)} cy={gy(p.y)} r={9} fill={INK} opacity={ptsO(i)} />)}
					{f >= line ? <line x1={GR.ox} y1={GR.oy} x2={gx(20000)} y2={gy(INV.grad * 20000)} stroke={INK} strokeWidth={4} opacity={prog(f, line, 14)} /> : null}
				</g> : null}
			</FrameSvg>
			<Lbl x={cx + 180} y={upY - 70} at={clamp + 20} color={NAVY.ink} size={28}>r: centre to centre</Lbl>
			<HandTag x={BAL.x + 40} y={410} text="pushed down: reading up" at={rises + 10} size={30} color={AMBER.ink} />
			<Chip x={BAL.x + 200} y={BAL.y + 180} at={ten} size={28} w={360} color={INK_SOFT}>illustrative data</Chip>
			<Strip x={96} y={176} at={meas} out={turn} size={32} w={1100}>Measure the force between two rods with a balance</Strip>
			<Strip x={96} y={176} at={turn} size={28} w={1728}>F = Δm g = 0.10 × 10⁻³ × 9.8 = {sci(INV.F10, 1)} N;  F/l = {sci(INV.F10, 1)} ÷ 0.50 = {sci(INV.Fl10, 2)} N m⁻¹</Strip>
			<div style={{position: 'absolute', left: 1280, top: 250, width: 544, opacity: chipsO, display: 'flex', flexDirection: 'column', gap: 10}}>
				{['independent: I', 'dependent: F/l', 'controlled: r, l, alignment', "lower rod's leads: at right angles, twisted together", 'control: remove the top rod; reading should not change'].map((c, i) => (
					<div key={c} style={{opacity: prog(f, fixed + i * 6, 12), background: '#f1ebdf', border: '2.5px solid rgba(60,45,20,0.16)', borderRadius: 14, padding: '4px 16px 6px', fontFamily: 'Inter Tight', fontWeight: 700, fontSize: 28, color: INK}}>{c}</div>
				))}
			</div>
			<Lbl x={GR.ox + GR.w} y={GR.oy + 40} at={plot} color={INK} size={28} anchor="end">I₁I₂/r (A² m⁻¹)</Lbl>
			<Lbl x={GR.ox + 10} y={GR.oy - GR.h - 30} at={plot} color={AMBER.ink} size={28}>F/l (N m⁻¹)</Lbl>
			<Row at={line + 10} size={36} style={{position: 'absolute', left: 1280, top: 715, width: 560, whiteSpace: 'normal'}}><AnswerBox at={line + 20}>gradient ≈ {sci(INV.grad, 1)} N A⁻² = μ₀/2π</AnswerBox></Row>
			<HandTag x={GR.ox + 180} y={GR.oy - 80} text="straight through 0" at={line + 16} size={30} color={INK} />
			<Chip x={1280} y={815} at={line + 24} size={26} w={560} color={INK_SOFT}>safety: short bursts (rods heat up); limits: finite rods, rods move, heating, forces on leads</Chip>
		</>
	);
};

// ---------- 9. a way to remember ----------
export const S09: React.FC = () => {
	const id = 'memory-aid';
	const f = useCurrentFrame();
	const here = cue(id, "Here's a way to remember"), like = cue(id, 'Like currents attract'), unlike = cue(id, 'unlike currents repel'), mag = cue(id, 'from magnets'), size = cap(id, cue(id, 'always the same size'));
	const p1 = Math.sin(Math.PI * Math.min(1, Math.max(0, (f - like) / 24))), p2 = Math.sin(Math.PI * Math.min(1, Math.max(0, (f - unlike) / 24)));
	const mA: Place = {x: 150, y: 690, w: 290}, mB: Place = {x: 470, y: 690, w: 290};
	const ma = barMagnetPts(mA, true), mb = barMagnetPts(mB);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<g transform={`translate(${250} ${380}) scale(${1 + 0.06 * p1}) translate(${-250} ${-380})`}>
					<EndOnWire cx={170} cy={380} r={40} dir="out" /><EndOnWire cx={360} cy={380} r={40} dir="out" />
					<FArrow x={170} y={380} len={60} r={40} width={7} /><FArrow x={360} y={380} len={-60} r={40} width={7} />
				</g>
				<g transform={`translate(${720} ${380}) scale(${1 + 0.06 * p2}) translate(${-720} ${-380})`}>
					<EndOnWire cx={620} cy={380} r={40} dir="out" /><EndOnWire cx={810} cy={380} r={40} dir="in" />
					<FArrow x={620} y={380} len={-70} r={40} width={7} /><FArrow x={810} y={380} len={70} r={40} width={7} />
				</g>
				{f >= mag ? <g opacity={prog(f, mag, 14)}>
					<Plate spec={BARMAG} p={mA} flip />
					<Plate spec={BARMAG} p={mB} />
					<Arrow2 from={[mA.x + 40, 660]} to={[mA.x - 40, 660]} color={AMBER.stroke} width={6} head={18} />
					<Arrow2 from={[mB.x + mB.w - 40, 660]} to={[mB.x + mB.w + 40, 660]} color={AMBER.stroke} width={6} head={18} />
				</g> : null}
			</FrameSvg>
			<Lbl x={265} y={290} at={like} color={INK} size={32} anchor="middle">like: attract</Lbl>
			<Lbl x={715} y={290} at={unlike} color={INK} size={32} anchor="middle">unlike: repel</Lbl>
			<Lbl x={ma.red[0] - 30} y={ma.red[1] + 10} at={mag} color={CARD} size={34} bg={false}>N</Lbl>
			<Lbl x={mb.red[0] + 6} y={mb.red[1] + 10} at={mag} color={CARD} size={34} bg={false}>N</Lbl>
			<HandTag x={150} y={850} text="magnets: the other way round" at={mag + 14} size={32} color={GREY.ink} />
			<AidCard x={1000} y={300} w={824} at={here}>
				<div style={{fontFamily: 'Caveat', fontWeight: 700, fontSize: 52, color: INK, lineHeight: 1.1}}>Like currents attract,<br />unlike currents repel.</div>
				<div style={{fontFamily: 'Inter Tight', fontWeight: 700, fontSize: 36, color: AMBER.ink, marginTop: 12, opacity: prog(f, size, 12)}}>equal and opposite (Newton's third law)</div>
			</AidCard>
		</>
	);
};
