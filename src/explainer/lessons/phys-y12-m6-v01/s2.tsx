// Scenes 6 to 10: from force to acceleration (a proton from rest across the gap on the field motion engine, strobe
// images with equal acceleration arrows, the chain V, d to E to F to a), the worked electron (calculation layout with
// the plate stage beside it), the gravity check (a/g bar, proton against electron, the painted oil drop held
// still), back to the puzzle (the live plate stage: dial, gap slider, particle toggle, readouts every frame) and the
// memory card.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_HAND, prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading, kf} from '../../math/studio';
import {CARD, INK, INK_SOFT} from '../../shared/tokens';
import {AnswerBox, CrossedChip, DISPLAY, Readouts, Row, Sub} from '../../physics/projectile/board';
import {FieldLines, OilDrop, Particle, PlatePair, Slider, StrobeDot} from '../../physics/electromagnetism/plates';
import type {PG, SupplyAt} from '../../physics/electromagnetism/plates';
import {stateAt} from '../../sims/field-motion';
import {AE, AG, D1, D2, E1, F1, HEAD, HEAD_SIZE, ME, MP, QE, RATIO, RUN6, STATES, V1, V2, cue, mono} from './common';
import {AMBER, BLUE, GREY, Givens, Lbl, NAVY, Ring, Stage, Strip, T, VIOLET, VecArrow, logLerp, sci, usePulse} from './parts';
import {GhostPanel, cap} from './s1';

// ---------- 6. from force to acceleration ----------
const GD: PG = {x1: 540, x2: 1260, yTop: 350, yBot: 700};
const SD: SupplyAt = {x: 96, y: 700, w: 340};
const ChainBox: React.FC<{x: number; at: number; glow: number; color: string; children: React.ReactNode; w?: number}> = ({x, at, glow, color, children, w = 300}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 12), g = prog(f, glow, 12);
	return (
		<div style={{position: 'absolute', left: x, top: 180, width: w, opacity: o, transform: `scale(${1 + 0.06 * g})`, transformOrigin: 'center'}}>
			<div style={{background: g > 0 ? '#fbf3e2' : CARD, border: `${3 + 2 * g}px solid ${g > 0 ? color : 'rgba(60,45,20,0.16)'}`, borderRadius: 14, padding: '6px 16px 8px', textAlign: 'center', ...DISPLAY(40, color, 800)}}>{children}</div>
		</div>
	);
};
export const S06: React.FC = () => {
	const id = 'acceleration-chain';
	const f = useCurrentFrame();
	const newton = cue(id, "Newton's second law"), fom = cue(id, 'a equals F over m'), unif = cue(id, 'because the field is uniform'), constant = cue(id, 'so the acceleration is constant'), likeG = cue(id, 'just like g'), chain = cue(id, 'Put the whole chain'), vg = cue(id, 'The voltage and the gap'), fc = cue(id, 'The field and the charge'), fm = cue(id, 'The force and the mass'), so = cue(id, 'set the acceleration') + 14;
	const T6 = RUN6.duration;
	const t = kf(f, mono([[unif - 6, 0], [unif + 84, T6]]), false);
	const gap = GD.yBot - GD.yTop, px = 760;
	const yOf = (y: number) => GD.yTop + 30 + (y / D1) * (gap - 60);
	const s = stateAt(RUN6, t);
	const strobes = Array.from({length: 7}, (_, k) => (k * T6) / 6).filter(tk => tk <= t + 1e-12);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<ChainBox x={96} at={chain} glow={vg} color={NAVY.ink} w={240}>V, d</ChainBox>
			<ChainBox x={430} at={chain + 6} glow={vg + 10} color={BLUE.ink}>E = V/d</ChainBox>
			<ChainBox x={820} at={chain + 12} glow={fc} color={AMBER.ink}>F = qE</ChainBox>
			<ChainBox x={1210} at={chain + 18} glow={fm} color={VIOLET.ink}>a = F/m</ChainBox>
			{[350, 735, 1125].map((x, i) => <div key={i} style={{position: 'absolute', left: x, top: 186, opacity: prog(f, chain + 6 * (i + 1), 12), ...DISPLAY(48, INK_SOFT, 800)}}>→</div>)}
			<FrameSvg>
				<Stage g={GD} sup={SD} reading={`${V1} V`} />
				{strobes.map((tk, k) => { const y = yOf(stateAt(RUN6, tk).y); return <g key={k}><StrobeDot cx={px} cy={y} r={14} /><VecArrow x={px + 34} y={y - 24} dx={0} dy={48} color={VIOLET.stroke} width={5} head={14} /></g>; })}
				{f >= newton ? <Particle cx={px} cy={yOf(s.y)} sign="+" r={24} /> : null}
				<Ring cx={px + 34} cy={yOf(stateAt(RUN6, (4 * T6) / 6).y) + 10} rx={70} ry={150} at={likeG + 6} color={VIOLET.stroke} />
			</FrameSvg>
			<Lbl x={px - 40} y={GD.yTop + 34} at={newton} color={INK} size={30} anchor="end">proton, from rest</Lbl>
			<HandTag x={px + 120} y={yOf(stateAt(RUN6, (4 * T6) / 6).y)} text="same arrow every step" at={likeG + 16} size={30} color={VIOLET.ink} />
			<Lbl x={px - 40} y={GD.yBot - 20} at={unif + 90} color={INK_SOFT} size={28} anchor="end">equal time steps</Lbl>
			<div style={{position: 'absolute', left: 1320, top: 300, display: 'flex', flexDirection: 'column', gap: 14, width: 504}}>
				<Row at={fom} ageAt={chain} size={48} oldSize={38}><span style={{color: VIOLET.ink}}>a = F/m = qE/m</span></Row>
				<Row at={constant} ageAt={chain} size={36} oldSize={32} style={{whiteSpace: 'normal'}}>uniform E → <span style={{color: VIOLET.ink}}>constant a</span></Row>
				<Row at={likeG} size={32} style={{whiteSpace: 'normal'}}><span style={{color: INK_SOFT}}>just like g near the ground</span></Row>
			</div>
			<Row at={so} size={60} style={{position: 'absolute', left: 1320, top: 620}}><AnswerBox at={so + 10}><span style={{color: VIOLET.ink}}>a = qV/(md)</span></AnswerBox></Row>
			<HandTag x={1330} y={790} text="V and d set it all" at={cap(id, so + 20)} size={30} color={NAVY.ink} marks={[{kind: 'arrow', from: [220, 260], to: [1310, 650], bend: 0.12}]} markAt={cap(id, so + 24)} />
		</>
	);
};

// ---------- 7. worked example: an electron between plates ----------
const GE: PG = {x1: 1200, x2: 1790, yTop: 440, yBot: 780};
export const S07: React.FC = () => {
	const id = 'worked-electron';
	const f = useCurrentFrame();
	const now = cue(id, 'Now the electron version'), released = cue(id, 'An electron is released'), fe = cue(id, 'The force on the electron is'), eight = cue(id, 'which is eight point oh one'), up = cue(id, 'towards the positive plate'), divide = cue(id, "Divide by the electron's mass"), accel = cue(id, 'and the acceleration is eight');
	const ex = 1495, ey = GE.yBot - 44;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<Strip x={96} y={176} at={now} size={32}>Electron released near the negative plate: find F and a.</Strip>
			<Strip x={1150} y={176} at={now + 8} size={34} border={AMBER.stroke} color={AMBER.ink}>F = qE, a = F/m</Strip>
			<Givens x={96} y={254} w={900} at={now + 14} size={30} lines={[<>E = {sci(E1, 1)} V m⁻¹, down (found earlier)</>, <>q = −e = −1.602 × 10⁻¹⁹ C</>, <>m<Sub>e</Sub> = 9.109 × 10⁻³¹ kg (data sheet)</>]} />
			<div style={{position: 'absolute', left: 96, top: 420, display: 'flex', flexDirection: 'column', gap: 10, width: 1060}}>
				<Row at={fe} ageAt={divide} size={44} oldSize={34}>|F| = 1.602 × 10⁻¹⁹ × {sci(E1, 1)}</Row>
				<Row at={eight} ageAt={divide} size={48} oldSize={36}>&nbsp;&nbsp;&nbsp;= <span style={{color: AMBER.ink}}>{sci(F1)} N, up (towards +)</span></Row>
				<Row at={divide} ageAt={accel} size={44} oldSize={36}>a = {sci(F1)} / 9.109 × 10⁻³¹</Row>
				<Row at={accel} size={52}>&nbsp;&nbsp;&nbsp;= <AnswerBox at={accel + 20}><span style={{color: VIOLET.ink}}>{sci(AE, 1)} m s⁻², up</span></AnswerBox></Row>
			</div>
			<HandTag x={430} y={400} text="use the size of q" at={fe + 16} size={30} color={AMBER.ink} marks={[{kind: 'circle', cx: 124, cy: 446, rx: 36, ry: 30}]} markAt={fe + 10} />
			<CrossedChip x={96} y={790} at={cap(id, accel + 40)} crossAt={cap(id, accel + 60)} size={32} caption="− charge: against E">a = {sci(AE, 1)} m s⁻², down (with E)</CrossedChip>
			<FrameSvg>
				<FieldLines g={GE} step={110} />
				<PlatePair g={GE} />
				<g opacity={prog(f, released, 12)}><Particle cx={ex} cy={ey} sign="−" r={24} /></g>
				{f >= up - 10 ? <VecArrow x={ex - 40} y={ey - 10} dx={0} dy={-120} color={AMBER.stroke} width={8} head={22} at={up - 10} label="F" lx={ex - 78} ly={ey - 90} size={36} labelColor={AMBER.ink} /> : null}
				{f >= accel ? <VecArrow x={ex + 40} y={ey - 10} dx={0} dy={-160} color={VIOLET.stroke} width={8} head={22} at={accel} label="a" lx={ex + 56} ly={ey - 130} size={36} labelColor={VIOLET.ink} /> : null}
			</FrameSvg>
			<Lbl x={GE.x1} y={GE.yTop - 70} at={now} color={BLUE.ink} size={30}>E = {sci(E1, 1)} V m⁻¹, down</Lbl>
			<Lbl x={ex + 40} y={ey + 10} at={released} color={INK} size={28}>electron</Lbl>
		</>
	);
};

// ---------- 8. can we ignore gravity? ----------
const G8: PG = {x1: 140, x2: 860, yTop: 530, yBot: 830};
const G8b: PG = {x1: 1040, x2: 1780, yTop: 330, yBot: 770};
export const S08: React.FC = () => {
	const id = 'gravity-check';
	const f = useCurrentFrame();
	const about = cue(id, "That's about ninety thousand"), check = cue(id, 'Check it, though'), proton = cue(id, 'A proton in the same field'), smaller = cue(id, 'that many times smaller'), heads = cue(id, 'and it heads for'), oil = cue(id, 'For a charged oil drop'), matter = cue(id, 'gravity really does matter'), millikan = cue(id, "That's how Millikan");
	const mid = (G8.yTop + G8.yBot) / 2, dropC = {x: (G8b.x1 + G8b.x2) / 2, y: (G8b.yTop + G8b.yBot) / 2};
	const pz = usePulse(millikan + 20, 30);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				{/* the a / g bar */}
				<g opacity={prog(f, about - 4, 12)}>
					<rect x={140} y={250} width={720 * prog(f, about, 30)} height={34} fill={VIOLET.soft} stroke={VIOLET.stroke} strokeWidth={3} />
					<circle cx={140} cy={330} r={5} fill={GREY.stroke} />
				</g>
				<FieldLines g={G8} step={120} />
				<PlatePair g={G8} />
				<g opacity={prog(f, check, 12)}><Particle cx={320} cy={mid} sign="−" r={24} /></g>
				{f >= check ? <VecArrow x={290} y={mid - 30} dx={0} dy={-90} color={AMBER.stroke} width={7} head={20} at={check} /> : null}
				{f >= check ? <VecArrow x={352} y={mid - 30} dx={0} dy={-110} color={VIOLET.stroke} width={7} head={20} at={check + 8} /> : null}
				<g opacity={prog(f, proton, 12)}><Particle cx={680} cy={mid} sign="+" r={24} /></g>
				{f >= proton ? <VecArrow x={650} y={mid + 30} dx={0} dy={90} color={AMBER.stroke} width={7} head={20} at={proton + 6} /> : null}
				{f >= smaller ? <g opacity={prog(f, smaller, 10)}><line x1={712} y1={mid + 30} x2={712} y2={mid + 36} stroke={VIOLET.stroke} strokeWidth={7} strokeLinecap="round" /></g> : null}
				{/* the oil drop held still */}
				<g opacity={prog(f, oil, 14)}>
					<FieldLines g={G8b} step={120} />
					<PlatePair g={G8b} />
					<OilDrop cx={dropC.x} cy={dropC.y} d={100} />
				</g>
				{f >= millikan ? <g>
					<VecArrow x={dropC.x} y={dropC.y - 56} dx={0} dy={-130} color={AMBER.stroke} width={8 + 2 * pz} head={22} at={millikan} label="|q|E" lx={dropC.x + 16} ly={dropC.y - 170} size={34} labelColor={AMBER.ink} />
					<VecArrow x={dropC.x} y={dropC.y + 56} dx={0} dy={130} color={AMBER.stroke} width={8 + 2 * pz} head={22} at={millikan + 10} label="mg" lx={dropC.x + 16} ly={dropC.y + 170} size={34} labelColor={AMBER.ink} />
				</g> : null}
			</FrameSvg>
			<Lbl x={140} y={226} at={about} color={VIOLET.ink} size={30}>a (electron) = {sci(AE, 1)} m s⁻²</Lbl>
			<Lbl x={160} y={340} at={about + 10} color={GREY.ink} size={30}>g = 9.8 m s⁻²: too small to draw at this scale</Lbl>
			<Row at={about + 20} size={46} style={{position: 'absolute', left: 140, top: 380}}><AnswerBox at={about + 30} tick={false}><span>a / g ≈ {sci(AG, 1)}</span></AnswerBox></Row>
			<Lbl x={360} y={mid + 70} at={check} color={INK} size={28}>electron</Lbl>
			<Lbl x={720} y={mid - 50} at={proton} color={INK} size={28}>proton</Lbl>
			<Lbl x={730} y={mid + 80} at={smaller} color={VIOLET.ink} size={30}>a<Sub>p</Sub> = a<Sub>e</Sub> / {Math.round(RATIO)}</Lbl>
			<HandTag x={560} y={mid + 140} text={`÷ ${Math.round(RATIO)}`} at={smaller + 12} size={34} color={VIOLET.ink} marks={[{kind: 'arrow', from: [620, mid + 120], to: [705, mid + 46], bend: -0.2}]} markAt={smaller + 16} />
			<Lbl x={dropC.x - 66} y={dropC.y + 10} at={matter} color={INK} size={40} anchor="end">−</Lbl>
			<Lbl x={dropC.x + 70} y={dropC.y - 10} at={matter} color={INK} size={28}>charged oil drop</Lbl>
			<Strip x={1040} y={180} at={millikan + 20} size={34} border={AMBER.stroke} color={AMBER.ink}>held still: |q|E = mg</Strip>
			<HandTag x={dropC.x + 100} y={dropC.y + 60} text="sizes equal" at={millikan + 30} size={30} color={AMBER.ink} />
			<Lbl x={140} y={918} at={heads} color={INK_SOFT} size={28}>same field, same size of force</Lbl>
		</>
	);
};

// ---------- 9. back to the puzzle (the live plate stage) ----------
const PXC = 80;
const S9: SupplyAt = {x: 96, y: 700, w: 330};
export const S09: React.FC = () => {
	const id = 'puzzle-answers';
	const f = useCurrentFrame();
	const back = cue(id, 'So, back to the puzzle'), dbl = cue(id, 'and the field doubles'), dblA = cue(id, 'so the force and the acceleration'), pull = cue(id, 'Pull the plates twice'), halves = cue(id, 'and the field halves'), halvesA = cue(id, 'so the acceleration halves'), swap = cue(id, 'Swap in an electron'), flips = cue(id, 'and the force flips'), also = cue(id, 'Its acceleration is also'), because = cue(id, 'because the electron is');
	const V = kf(f, mono([[dbl - 6, V1], [dbl + 30, V2], [pull, V2], [pull + 24, V1]]));
	const d = kf(f, mono([[pull, D1], [pull + 36, D2], [swap, D2], [swap + 24, D1]]));
	const isE = f >= swap + 24;
	const E = V / d, F = QE * E;
	const aP = F / MP;
	const grow = prog(f, also, 50);
	const a = isE ? logLerp(F / MP, F / ME, grow) : aP;
	const g: PG = {x1: 520, x2: 1340, yTop: 470, yBot: 470 + d * 100 * PXC};
	const mid = (g.yTop + g.yBot) / 2, px = 930;
	const fLen = 100 * (F / F1), aLen = isE ? Math.min(mid - g.yTop + 40, 110 + 300 * grow) : 110 * (aP / STATES.base.a);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				{(['2V', '2d', 'e'] as const).map((k, i) => <g key={k} transform={`translate(${96 + i * 410} 176) scale(0.8)`}><GhostPanel x={0} y={0} kind={k} at={back} fs={33} tick={['a × 2', 'a ÷ 2', 'flips, × 1837'][i]} tickAt={[dblA, halvesA, because][i]} /></g>)}
				<Stage g={g} sup={S9} reading={`${Math.round(V)} V`} knobDeg={(V - V1) * 0.9} density={E / E1} step={140} />
				<Particle cx={px} cy={mid} sign={isE ? '−' : '+'} r={26} />
				<VecArrow x={px - 40} y={isE ? mid - 30 : mid + 30} dx={0} dy={(isE ? -1 : 1) * fLen} color={AMBER.stroke} width={8} head={22} />
				<VecArrow x={px + 40} y={isE ? mid - 30 : mid + 30} dx={0} dy={(isE ? -1 : 1) * aLen} color={VIOLET.stroke} width={8} head={22} />
				<Slider x={1400} y={890} w={400} value={(d - 0.01) / 0.04} color={NAVY.stroke} label="gap d" ticks={[[0.25, '2.0 cm'], [0.75, '4.0 cm']]} />
			</FrameSvg>
			<Lbl x={px - 56} y={mid + (isE ? -34 : 64)} color={AMBER.ink} size={32} anchor="end">F</Lbl>
			<Lbl x={px + 56} y={mid + (isE ? -60 : 90)} color={VIOLET.ink} size={32}>a</Lbl>
			<Readouts x={1400} y={176} w={424} size={40} at={back} rows={[
				{label: 'V', value: `${Math.round(V)} V`, color: NAVY.ink},
				{label: 'd', value: `${(d * 100).toFixed(1)} cm`, color: NAVY.ink},
				{label: 'E', value: `${sci(E, 1)}`, unit: 'V m⁻¹', color: BLUE.ink},
				{label: '|F|', value: `${sci(F)}`, unit: 'N', color: AMBER.ink, ring: flips + 10},
				{label: 'a', value: `${sci(a)}`, unit: 'm s⁻²', color: VIOLET.ink},
			]} />
			<Lbl x={1420} y={650} color={INK} size={30}>particle: {isE ? 'electron (−)' : 'proton (+)'}</Lbl>
			<HandTag x={1400} y={720} text="same size of force" at={flips + 14} out={also} size={30} color={AMBER.ink} />
			<HandTag x={px + 80} y={g.yTop + 40} text="× 1837: acceleration, not force" at={also + 30} size={30} color={VIOLET.ink} />
			<Lbl x={px + 80} y={g.yBot + 70} at={halves} out={swap} color={NAVY.ink} size={28}>same V, wider gap</Lbl>
		</>
	);
};

// ---------- 10. memory aid ----------
export const S10: React.FC = () => {
	const id = 'memory-aid';
	const f = useCurrentFrame();
	const here = cue(id, "Here's a chain"), chain = cue(id, 'V over d gives the field'), q = cue(id, 'Times q gives the force'), m = cue(id, 'Over m gives the acceleration'), dir = cue(id, 'And for direction');
	const links: [string, string, string, number][] = [['V/d', 'E', BLUE.ink, chain], ['× q', 'F', AMBER.ink, q], ['÷ m', 'a', VIOLET.ink, m]];
	return (
		<div style={{position: 'absolute', left: 200, top: 170, width: 1520, opacity: prog(f, here - 10, 12)}}>
			<div style={{background: CARD, border: `4px solid ${INK}`, borderRadius: 24, boxShadow: `inset 0 0 0 8px ${CARD}, inset 0 0 0 10.5px ${INK}, 0 14px 32px rgba(60,45,20,0.10)`, padding: '26px 44px 34px'}}>
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: INK_SOFT}}>Memory aid</div>
				<div style={{display: 'flex', alignItems: 'flex-end', gap: 34, justifyContent: 'center', marginTop: 10}}>
					{links.map(([top, sub, c, at], i) => (
						<div key={i} style={{display: 'flex', alignItems: 'center', gap: 34, opacity: prog(f, at, 12)}}>
							{i ? <span style={{fontFamily: FONT_HAND, fontSize: 72, color: INK_SOFT}}>→</span> : null}
							<div style={{textAlign: 'center', fontFamily: FONT_HAND, fontWeight: 700}}>
								<div style={{fontSize: 84, color: INK, lineHeight: 1}}>{top}</div>
								<div style={{fontSize: 52, color: c}}>gives {sub}</div>
							</div>
						</div>
					))}
				</div>
				<div style={{display: 'flex', alignItems: 'center', gap: 30, marginTop: 24, opacity: prog(f, dir, 14)}}>
					<svg width={420} height={240}>
						<rect x={40} y={20} width={340} height={14} fill="#d9d2c4" stroke={INK} strokeWidth={3} />
						<rect x={40} y={206} width={340} height={14} fill="#d9d2c4" stroke={INK} strokeWidth={3} />
						<T x={28} y={36} size={30} anchor="end">+</T><T x={28} y={222} size={30} anchor="end">−</T>
						{[80, 340].map(x => <line key={x} x1={x} y1={40} x2={x} y2={200} stroke={BLUE.stroke} strokeWidth={4} />)}
						<Particle cx={160} cy={120} sign="+" r={22} /><VecArrow x={160} y={146} dx={0} dy={50} color={AMBER.stroke} width={6} head={16} />
						<Particle cx={260} cy={120} sign="−" r={22} /><VecArrow x={260} y={94} dx={0} dy={-50} color={AMBER.stroke} width={6} head={16} />
					</svg>
					<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 52, lineHeight: 1.15, color: INK}}>Field arrows show the push on a + charge.<br /><span style={{color: AMBER.ink}}>A − charge goes the other way.</span></div>
				</div>
			</div>
		</div>
	);
};
