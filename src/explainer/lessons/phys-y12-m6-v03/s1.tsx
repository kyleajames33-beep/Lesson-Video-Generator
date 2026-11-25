// Scenes 1 to 5: the hook (last time's speed-in and speed-out, then an exam-style electron gun wired to the painted
// supply at 5000 V, the beam leaving it, the doubled voltage), the work done by the field (a proton crossing the gap
// with W counters for d and 2d), the energy ledger with signs (the potential ladder, a proton down and an electron
// up, change bars from one zero line), the electronvolt and the speed from rest (calculation layout with the gun).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Countdown, prog} from '../../kit';
import {FrameSvg, HandTag, MarkSpan, SceneHeading, kf} from '../../math/studio';
import {CARD, INK, INK_SOFT} from '../../shared/tokens';
import {AnswerBox, Bracket, Chip, CrossedChip, Readouts, Row, Sub} from '../../physics/projectile/board';
import {Equipotentials, FieldLines, Particle, PlatePair} from '../../physics/electromagnetism/plates';
import type {PG, SupplyAt} from '../../physics/electromagnetism/plates';
import {stateAt} from '../../sims/field-motion';
import {M6V02FinalFrame} from '../phys-y12-m6-v02/s3';
import {GUN, HEAD, HEAD_SIZE, QE, RUN_P, cap, cue, holdIf, mono} from './common';
import {AMBER, BLUE, Beam, GREY, Givens, GunRig, Lbl, NAVY, ORANGE, Ring, Strip, TEAL, VIOLET, VecArrow, nV, fx, sci} from './parts';

// ---------- 1. hook: does double the voltage mean double the speed? ----------
export const GUN1 = {x: 560, y: 380};
export const SUP1: SupplyAt = {x: 300, y: 560, w: 560};
export const S01: React.FC = () => {
	const id = 'hook';
	const f = useCurrentFrame();
	const last = cue(id, 'Last time'), energy = cue(id, 'so the field gave it energy'), gun = cue(id, 'An electron gun uses'), start = cue(id, 'Electrons start almost at rest'), beam = cue(id, 'speeds them up into a beam'), puzzle = cue(id, "Here's the puzzle"), dbl = cue(id, 'Double the voltage of the gun'), twice = cue(id, 'Does the electron come out'), make = cue(id, 'Make a prediction');
	const h = holdIf(id);
	if (f < 1) return <M6V02FinalFrame />;
	const cut = prog(f, gun, 20);
	const V = kf(f, mono([[dbl, 5000], [dbl + 30, 10000]]));
	const beamO = prog(f, beam - 6, 16);
	const vRead = kf(f, mono([[beam - 6, 0], [beam + 30, GUN.v]]));
	const anode = GUN1.x + 34 + 150 + 13;
	return (
		<>
			<div style={{position: 'absolute', inset: 0, opacity: 1 - cut, clipPath: 'inset(150px 0 0 0)'}}><M6V02FinalFrame /></div>
			{cut < 1 ? <FrameSvg><g opacity={1 - cut}><Ring cx={1060} cy={885} rx={420} ry={44} at={last + 20} color={ORANGE.stroke} /></g></FrameSvg> : null}
			{cut < 1 ? <div style={{opacity: 1 - cut}}><HandTag x={1660} y={830} text="energy in" at={energy} size={32} color={ORANGE.ink} marks={[{kind: 'arrow', from: [1650, 846], to: [1616, 876], bend: 0.2}]} markAt={energy + 6} /></div> : null}
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			{cut > 0 ? <div style={{position: 'absolute', inset: 0, opacity: cut}}>
				<FrameSvg>
					<GunRig x={GUN1.x} y={GUN1.y} sup={SUP1} reading={`${nV(V)} V`} knobDeg={(V - 5000) / 60} h={220} gap={150} />
					<Beam x0={anode + 14} x1={1760} y={GUN1.y} phase={(f * 9) % 70} opacity={beamO} />
				</FrameSvg>
				<Lbl x={GUN1.x + 17} y={GUN1.y - 136} at={gun} color={GREY.ink} size={32} anchor="middle">0 V</Lbl>
				<Lbl x={anode} y={GUN1.y - 136} at={gun} color={GREY.ink} size={32} anchor="middle">+{V >= 9999 ? '10 000' : '5000'} V</Lbl>
				<Lbl x={GUN1.x - 30} y={GUN1.y + 10} at={gun + 10} color={INK} size={30} anchor="end">cathode</Lbl>
				<Lbl x={anode + 30} y={GUN1.y + 90} at={gun + 10} color={INK} size={30}>anode</Lbl>
				<HandTag x={GUN1.x - 30} y={GUN1.y + 80} text="start ≈ rest" at={start + 10} size={32} color={TEAL.ink} anchor="end" />
				<Lbl x={SUP1.x + 280} y={SUP1.y + 350} at={gun + 20} color={NAVY.ink} size={28} anchor="middle">high-voltage supply</Lbl>
			</div> : null}
			<Readouts x={1100} y={470} w={640} size={48} at={beam} rows={[
				{label: 'gun voltage', value: `${V >= 9999 ? '10 000' : '5000'} V`, color: GREY.ink},
				{label: 'beam speed', value: f >= dbl ? 'v = ?' : `${sci(vRead)} m s⁻¹`, color: TEAL.ink},
			]} />
			<Strip x={1100} y={690} at={twice} size={36} border={TEAL.stroke} color={TEAL.ink}>10 000 V: twice as fast?</Strip>
			<div style={{position: 'absolute', left: 1100, top: 810, display: 'flex', gap: 16}}>
				{['× 2', '× 4', '× 1.41'].map((c, i) => <Chip key={c} x={i * 170} y={0} w={150} at={twice + 50 + i * 6} size={36}>{c}</Chip>)}
			</div>
			<Lbl x={1100} y={440} at={puzzle} color={INK_SOFT} size={28}>an exam-style electron gun</Lbl>
			{h ? <FrameSvg><Countdown start={h.startFrame} end={h.endFrame} x={1720} y={880} r={46} ringFrom={make} /></FrameSvg> : null}
		</>
	);
};

// ---------- 2. the work done by the field ----------
const G2: PG = {x1: 200, x2: 900, yTop: 300, yBot: 560};
export const S02: React.FC = () => {
	const id = 'work-qv';
	const f = useCurrentFrame();
	const start = cue(id, 'Start with work'), pushes = cue(id, 'The field pushes the charge'), moves = cue(id, 'If the charge moves'), qed = cue(id, 'the work done on it is'), but = cue(id, 'But E is V over d'), just = cue(id, 'and the work is just'), big = cue(id, "That's a big idea"), wider = cue(id, 'A wider gap makes'), longer = cue(id, 'but the push acts for longer'), only = cue(id, 'Only the voltage matters');
	const stretch = prog(f, wider, 30);
	const gap1 = G2.yBot - G2.yTop;
	const g: PG = {...G2, yBot: G2.yBot + gap1 * stretch};
	const t1 = kf(f, mono([[moves, 0], [moves + 60, RUN_P.duration]]), false);
	const t2 = kf(f, mono([[longer - 10, 0], [longer + 80, RUN_P.duration]]), false);
	const second = f >= wider;
	const u = second ? stateAt(RUN_P, t2).y : stateAt(RUN_P, t1).y;
	const gap = g.yBot - g.yTop;
	const py = g.yTop + 26 + u * (gap - 52);
	const fill1 = prog(f, moves, 60), fill2 = prog(f, longer - 10, 90);
	const arrowLen = 90 * (1 - 0.5 * stretch);
	return (
		<>
			<SceneHeading text={HEAD} at={-30} size={HEAD_SIZE} />
			<FrameSvg>
				<FieldLines g={g} density={1 - 0.5 * stretch} step={120} />
				<PlatePair g={g} />
				<Particle cx={420} cy={py} sign="+" r={22} />
				{f >= pushes ? <VecArrow x={460} y={py - 30} dx={0} dy={arrowLen} color={AMBER.stroke} width={8} head={22} at={pushes} /> : null}
				<Bracket x1={g.x2 + 40} y1={g.yTop} x2={g.x2 + 40} y2={g.yBot} color={NAVY.stroke} at={moves} label={second ? '2d' : 'd (along E)'} size={34} lx={g.x2 + 56} anchor="start" />
				{/* the W counters for the two gaps */}
				<g opacity={prog(f, moves, 12)}>
					<rect x={1000} y={700} width={520} height={30} rx={15} fill="#ede4d3" />
					<rect x={1000} y={700} width={520 * fill1} height={30} rx={15} fill={ORANGE.stroke} />
				</g>
				<g opacity={prog(f, wider, 12)}>
					<rect x={1000} y={800} width={520} height={30} rx={15} fill="#ede4d3" />
					<rect x={1000} y={800} width={520 * fill2} height={30} rx={15} fill={ORANGE.stroke} />
				</g>
				<Ring cx={1270} cy={765} rx={310} ry={100} at={cap(id, only + 4)} color={INK} />
			</FrameSvg>
			<Lbl x={480} y={py - 50} at={pushes + 10} color={AMBER.ink} size={34}>qE</Lbl>
			<Lbl x={1000} y={680} at={moves} color={INK} size={30}>gap d: W</Lbl>
			<Lbl x={1000} y={780} at={wider} color={INK} size={30}>gap 2d: W</Lbl>
			<Lbl x={1540} y={722} at={moves + 60} color={ORANGE.ink} size={34}>qV</Lbl>
			<Lbl x={1540} y={822} at={longer + 80} color={ORANGE.ink} size={34}>qV</Lbl>
			<div style={{position: 'absolute', left: 1000, top: 186, display: 'flex', flexDirection: 'column', gap: 10}}>
				<Row at={start} ageAt={qed} size={44} oldSize={34}>W = F × d, with F = qE</Row>
				<Row at={qed} ageAt={but} size={48} oldSize={36}>W = qEd</Row>
				<Row at={but} ageAt={just} size={48} oldSize={36}>W = q(V/<MarkSpan kind="strike" at={but + 30} color={INK}>d</MarkSpan>)<MarkSpan kind="strike" at={but + 36} color={INK}>d</MarkSpan></Row>
				<Row at={just} size={60}><AnswerBox at={just + 12}><span style={{color: ORANGE.ink}}>W = qV</span></AnswerBox></Row>
				<Row at={just + 30} size={30}><span style={{color: GREY.ink}}>sizes: |q|V</span></Row>
			</div>
			<HandTag x={500} y={g.yBot + 70} text="half the push" at={wider + 40} size={30} color={AMBER.ink} />
			<HandTag x={g.x2 + 60} y={(g.yTop + g.yBot) / 2 + 60} text="twice as far" at={wider + 40} size={30} color={NAVY.ink} />
			<Strip x={1000} y={860} at={big} out={wider} size={30}>a big idea: the gap cancels</Strip>
			<HandTag x={1000} y={905} text="weaker push × longer path = same work" at={only} size={30} color={INK} />
			<CrossedChip x={1000} y={520} at={wider + 20} crossAt={only} size={30} caption="the same qV either way">wider gap → more work</CrossedChip>
		</>
	);
};

// ---------- 3. the energy ledger, with signs ----------
const G3: PG = {x1: 200, x2: 820, yTop: 300, yBot: 800};
const LED = {x: 960, y0: 550, w: 96, gap: 50, s: 220 / 5000};
export const S03: React.FC = () => {
	const id = 'energy-ledger';
	const f = useCurrentFrame();
	const where = cue(id, 'Where does that energy'), pe = cue(id, 'From electric potential energy'), falls0 = cue(id, 'As the field does work'), take = cue(id, 'Take a proton'), pFalls = cue(id, 'so its potential energy falls'), now = cue(id, 'Now an electron'), eFalls = cue(id, 'so again its potential energy'), rule = cue(id, 'Positive charges fall'), both = rule + 70;
	const pT = prog(f, pFalls - 10, 60), eT = prog(f, eFalls - 10, 60);
	const isE = f >= now;
	const gap = G3.yBot - G3.yTop;
	const py = isE ? G3.yBot - 26 - eT * eT * (gap - 52) : G3.yTop + 26 + pT * pT * (gap - 52);
	const len = 5000 * LED.s * (isE ? eT * eT : pT * pT);
	const ladder = ['5000 V', '4000 V', '3000 V', '2000 V', '1000 V', '0 V'];
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<Strip x={96} y={176} at={pe} size={30} w={1728}>electric potential energy: the energy a charge has because of where it sits in the field</Strip>
			<FrameSvg>
				<FieldLines g={G3} step={180} width={3} />
				<Equipotentials g={G3} n={6} />
				<PlatePair g={G3} />
				{f >= take ? <Particle cx={510} cy={py} sign={isE ? '−' : '+'} r={24} /> : null}
				<line x1={LED.x - 20} y1={LED.y0} x2={LED.x + 2 * LED.w + LED.gap + 20} y2={LED.y0} stroke={INK} strokeWidth={4} opacity={prog(f, falls0, 12)} />
				{len > 0 ? <g>
					<rect x={LED.x} y={LED.y0} width={LED.w} height={len} fill="#e7e0f2" stroke={VIOLET.stroke} strokeWidth={3} />
					<rect x={LED.x + LED.w + LED.gap} y={LED.y0 - len} width={LED.w} height={len} fill="#f6d2b4" stroke={ORANGE.stroke} strokeWidth={3} />
				</g> : null}
			</FrameSvg>
			{ladder.map((s, i) => <Lbl key={s} x={G3.x1 - 14} y={G3.yTop + (i * gap) / 5 + 10} at={where + i * 4} color={GREY.ink} size={28} anchor="end">{s}</Lbl>)}
			<Lbl x={LED.x - 20} y={LED.y0 - 290} at={falls0} color={INK} size={28}>changes during the move</Lbl>
			<Lbl x={LED.x + LED.w / 2} y={LED.y0 - 24} at={falls0} color={VIOLET.ink} size={34} anchor="middle">ΔU</Lbl>
			<Lbl x={LED.x + LED.w * 1.5 + LED.gap} y={LED.y0 + 44} at={falls0} color={ORANGE.ink} size={34} anchor="middle">ΔK</Lbl>
			<HandTag x={LED.x - 26} y={LED.y0 + 30} text="changes, not amounts" at={falls0 + 30} size={28} color={GREY.ink} anchor="end" />
			<HandTag x={LED.x + LED.w / 2} y={LED.y0 + 290} text="U falls" at={pFalls + 50} size={30} color={VIOLET.ink} anchor="middle" />
			<HandTag x={LED.x + 2 * LED.w + LED.gap + 8} y={LED.y0 - 140} text="K rises" at={pFalls + 56} size={30} color={ORANGE.ink} anchor="start" marks={[{kind: 'arrow', from: [LED.x + LED.w, LED.y0 + 120], to: [LED.x + LED.w + LED.gap + 10, LED.y0 - 120], bend: -0.3}]} markAt={pFalls + 60} />
			<div style={{position: 'absolute', left: 1300, top: 270, width: 524, display: 'flex', flexDirection: 'column', gap: 6}}>
				<Row at={take} ageAt={now} size={34} oldSize={28}>proton: ΔV = −5000 V, q = +e</Row>
				<Row at={pFalls} ageAt={now} size={34} oldSize={28}><span style={{color: VIOLET.ink}}>ΔU = qΔV = −5000 eV</span></Row>
				<Row at={pFalls + 30} ageAt={now} size={34} oldSize={28}><span style={{color: ORANGE.ink}}>ΔK = +5000 eV</span></Row>
				<div style={{height: 14}} />
				<Row at={now} size={34}>electron: ΔV = +5000 V, q = −e</Row>
				<Row at={eFalls} size={34}><span style={{color: VIOLET.ink}}>ΔU = qΔV = −5000 eV</span></Row>
				<Row at={eFalls + 30} size={34}><span style={{color: ORANGE.ink}}>ΔK = +5000 eV</span></Row>
			</div>
			<Strip x={1300} y={720} at={rule} size={30} w={524} border={INK} color={INK}>+ charges: towards lower V; − charges: towards higher V</Strip>
			<Lbl x={1300} y={880} at={cap(id, both)} color={INK} size={28}>signed: W<Sub>field</Sub> = −qΔV = ΔK</Lbl>
			<Lbl x={510} y={G3.yBot + 70} at={take} color={INK} size={28} anchor="middle">{isE ? 'electron: 0 V up to 5000 V' : 'proton: 5000 V down to 0 V'}</Lbl>
		</>
	);
};

// ---------- 4. the electronvolt ----------
export const S04: React.FC = () => {
	const id = 'electronvolt';
	const f = useCurrentFrame();
	const handy = cue(id, "There's a handy unit"), one = cue(id, 'One electronvolt is'), joules = cue(id, 'one point six oh two'), so = cue(id, 'So an electron accelerated'), inJ = cue(id, "In joules, that's"), asks = cue(id, 'If a question asks');
	const cross = prog(f, one + 20, 50);
	const track = prog(f, handy, 14);
	const fill = prog(f, so, 50);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<Row at={one} size={52} style={{position: 'absolute', left: 96, top: 190}}><AnswerBox at={joules + 16} tick={false}><span style={{color: ORANGE.ink}}>1 eV = e × 1 V = 1.602 × 10⁻¹⁹ J</span></AnswerBox></Row>
			<FrameSvg>
				{/* one charge crossing a one-volt step */}
				<g opacity={prog(f, one, 12)}>
					<line x1={160} y1={340} x2={1100} y2={340} stroke={GREY.stroke} strokeWidth={4} strokeDasharray="14 9" />
					<line x1={160} y1={560} x2={1100} y2={560} stroke={GREY.stroke} strokeWidth={4} strokeDasharray="14 9" />
					{[300, 520, 740, 960].map(x => <VecArrow key={x} x={x} y={360} dx={0} dy={180} color={BLUE.stroke} width={4} head={16} />)}
					<Particle cx={630} cy={560 - cross * 220} sign="−" r={30} />
				</g>
				<rect x={96} y={680} width={1100} height={60} rx={8} fill="#ede4d3" opacity={track} />
				<rect x={96} y={680} width={1100 * fill} height={60} rx={8} fill="#f6d2b4" stroke={ORANGE.stroke} strokeWidth={3} opacity={prog(f, so, 12)} />
				{/* the ledger as a thumbnail */}
				<g opacity={prog(f, handy - 10, 12)}>
					<rect x={1480} y={190} width={340} height={230} rx={14} fill={CARD} stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} />
					<line x1={1510} y1={305} x2={1790} y2={305} stroke={INK} strokeWidth={3} />
					<rect x={1560} y={305} width={70} height={90} fill="#e7e0f2" stroke={VIOLET.stroke} strokeWidth={3} />
					<rect x={1670} y={215} width={70} height={90} fill="#f6d2b4" stroke={ORANGE.stroke} strokeWidth={3} />
				</g>
			</FrameSvg>
			<Lbl x={1120} y={348} at={one} color={GREY.ink} size={32}>1 V</Lbl>
			<Lbl x={1120} y={568} at={one} color={GREY.ink} size={32}>0 V</Lbl>
			<Lbl x={680} y={470} at={one + 10} color={INK} size={30}>one elementary charge, e</Lbl>
			<HandTag x={1200} y={460} text="1 e through 1 V" at={one + 40} size={30} color={GREY.ink} />
			<Lbl x={1500} y={450} at={handy} color={INK_SOFT} size={26}>last scene's ledger</Lbl>
			<Lbl x={96} y={650} at={handy} color={ORANGE.ink} size={34}>gain ΔK = {nV(5000 * fill)} eV</Lbl>
			<Row at={inJ} size={48} style={{position: 'absolute', left: 96, top: 770}}>= 5000 × 1.602 × 10⁻¹⁹ = <AnswerBox at={inJ + 20}><span style={{color: ORANGE.ink}}>{sci(QE * 5000)} J</span></AnswerBox></Row>
			<HandTag x={1240} y={650} text="× 1.602 × 10⁻¹⁹ to get J" at={inJ + 10} size={30} color={ORANGE.ink} marks={[{kind: 'arrow', from: [1260, 680], to: [1180, 790], bend: 0.2}]} markAt={inJ + 14} />
			<Strip x={1240} y={880} at={asks} size={32} border={ORANGE.stroke} color={ORANGE.ink}>eV answer: no conversion</Strip>
		</>
	);
};

// ---------- 5. speed from rest ----------
const GUN5 = {x: 1400, y: 420};
const SUP5: SupplyAt = {x: 1150, y: 600, w: 560};
export const S05: React.FC = () => {
	const id = 'speed-from-rest';
	const f = useCurrentFrame();
	const now = cue(id, 'Now the speed'), half = cue(id, 'so a half m v squared'), sizes = cue(id, 'using the sizes'), root = cue(id, 'and v equals the square root'), ours = cue(id, 'For our electron'), about = cue(id, 'About four point one nine'), fourteen = cue(id, "That's around fourteen"), much = cue(id, 'Much faster than that');
	const anode = GUN5.x + 34 + 130 + 13;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<Strip x={96} y={176} at={now} size={32}>Electron from rest through 5000 V: find its speed.</Strip>
			<Row at={half} size={44} style={{position: 'absolute', left: 96, top: 250}}>from rest: ½mv² = |q|V <span style={{opacity: prog(f, root, 12)}}>→ <AnswerBox at={root + 12} tick={false}><span style={{color: TEAL.ink}}>v = <MarkSpan kind="circle" at={root + 40} color={TEAL.stroke}>√</MarkSpan>(2|q|V/m)</span></AnswerBox></span></Row>
			<Givens x={96} y={350} w={1000} at={sizes} size={30} lines={[<>|q|V = {sci(GUN.KJ)} J (the electronvolt step)</>, <>m<Sub>e</Sub> = 9.109 × 10⁻³¹ kg</>]} />
			<div style={{position: 'absolute', left: 96, top: 470, display: 'flex', flexDirection: 'column', gap: 10}}>
				<Row at={ours} ageAt={about} size={46} oldSize={36}>v = √(2 × {sci(GUN.KJ)} / 9.109 × 10⁻³¹)</Row>
				<Row at={about} size={52}>&nbsp;&nbsp;= <AnswerBox at={about + 20}><span style={{color: TEAL.ink}}>{sci(GUN.v)} m s⁻¹</span></AnswerBox></Row>
			</div>
			<HandTag x={880} y={204} text="square root last" at={root + 46} size={30} color={TEAL.ink} />
			<Lbl x={96} y={660} at={sizes + 20} color={INK} size={30}>in a vacuum: only the electric force does work</Lbl>
			<Chip x={96} y={700} at={fourteen} size={32} border={GREY.stroke} color={GREY.ink}>v ≈ {fx(GUN.frac, 2)}c: classical model starting to strain</Chip>
			<Lbl x={96} y={790} at={much} color={INK_SOFT} size={28}>(faster than this: a later topic)</Lbl>
			<CrossedChip x={96} y={830} at={about + 50} crossAt={about + 80} size={30} caption="kV → V">V = 5 (kV left in): v = {sci(GUN.slipKV)} m s⁻¹</CrossedChip>
			<FrameSvg>
				<GunRig x={GUN5.x} y={GUN5.y} sup={SUP5} reading="5000 V" h={200} gap={130} />
				<Beam x0={anode + 4} x1={1820} y={GUN5.y} phase={(f * 9) % 70} opacity={prog(f, ours, 14)} />
			</FrameSvg>
			<Lbl x={GUN5.x + 17} y={GUN5.y - 126} at={-30} color={GREY.ink} size={28} anchor="middle">0 V</Lbl>
			<Lbl x={anode} y={GUN5.y - 126} at={-30} color={GREY.ink} size={28} anchor="middle">+5000 V</Lbl>
			<Readouts x={1150} y={186} w={420} size={40} at={now} rows={[{label: 'v', value: f >= about ? `${sci(GUN.v)} m s⁻¹` : '?', color: TEAL.ink}]} />
			<Lbl x={GUN5.x - 30} y={GUN5.y + 10} at={-30} color={INK_SOFT} size={28} anchor="end">exam-style gun</Lbl>
		</>
	);
};
