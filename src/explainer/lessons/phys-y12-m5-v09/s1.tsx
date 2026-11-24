// Scenes 1 to 5: the hook (opening on last time's final frame), the reveal (turning-tendency arrows, torque
// defined), right angles (the distance slider), the 30° push split into components, and the moment arm.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Countdown, prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading} from '../../math/studio';
import {INK, INK_SOFT, TYPE} from '../../shared/tokens';
import {AnswerBox, Bracket, Chip, CrossedChip, DISPLAY, HandNote, ROLE, Readouts, Row, VecArrow} from '../../physics/projectile/board';
import {ArcAngle, DashLine, PenRing, PivotDot, RightMark, SpannerNut, TurnArrow, spannerGeom} from '../../physics/projectile/turning';
import {V08FinalFrame} from '../phys-y12-m5-v08/s3';
import {ARM, FORCE, HEAD, cue, fx, hold, kfm, tau} from './common';
import {AMBER, ARM0, Badge, Boxed, Card, Lbl, Line, NUT0, PUSH0, Push, TURN, Title, tipOf} from './parts';

const [NX, NY] = NUT0;
const END: [number, number] = [NX + ARM0, NY];
/** Turning-tendency arc: 6 degrees of arc per newton metre (20 N m draws 120°). */
export const ARC_PER_NM = 6;

// ---------- 1. hook: rank the pushes ----------
export const S01: React.FC = () => {
	const id = 'hook';
	const f = useCurrentFrame();
	const t25 = cue(id, 'twenty-five'), eighty = cue(id, 'eighty newtons'), right = cue(id, 'right angles'), thirty = cue(id, 'thirty degrees'), nut = cue(id, 'the nut'), sameF = cue(id, 'Same force'), spot = cue(id, 'same spot'), rank = cue(id, 'Rank them'), all = cue(id, 'all');
	const hd = hold(id);
	const fade = prog(f, 10, 24);
	const litA = prog(f, right, 10) * (1 - prog(f, thirty, 10)), litB = prog(f, thirty, 10) * (1 - prog(f, nut, 10)), litC = prog(f, nut, 10) * (1 - prog(f, sameF, 10));
	const [ax, ay] = tipOf(END[0], END[1], 90), [bx, by] = tipOf(END[0], END[1], 30), [cx, cy] = tipOf(END[0], END[1], 180);
	return (
		<>
			{fade < 1 ? <div style={{position: 'absolute', inset: 0, opacity: 1 - fade}}><V08FinalFrame /></div> : null}
			<div style={{position: 'absolute', inset: 0, opacity: fade}}>
				<SceneHeading text="Same force, three directions: rank them" at={14} size={52} />
				<FrameSvg>
					<SpannerNut cx={NX} cy={NY} armPx={ARM0} />
					<Push x={END[0]} y={END[1]} deg={90} lit={litA} />
					<Push x={END[0]} y={END[1]} deg={30} lit={litB} />
					<Push x={END[0]} y={END[1]} deg={180} lit={litC} />
					<RightMark x={END[0]} y={END[1]} a={90} at={right} size={26} width={3.5} />
					<line x1={END[0]} y1={END[1]} x2={END[0] + 120} y2={END[1]} stroke={INK_SOFT} strokeWidth={2.5} strokeDasharray="6 6" opacity={prog(f, thirty, 10)} />
					<ArcAngle px={END[0]} py={END[1]} r={78} a1={0} a2={30} label="30°" at={thirty} size={34} lr={118} />
					<Badge x={ax - 44} y={ay + 10} letter="A" />
					<Badge x={bx + 4} y={by + 52} letter="B" />
					<Badge x={cx + 30} y={cy + 50} letter="C" />
					<Bracket x1={NX} y1={NY + 92} x2={END[0]} y2={NY + 92} color={ROLE.given.stroke} at={t25} label="r = 0.25 m" ly={NY + 136} size={34} />
					<PenRing cx={END[0]} cy={END[1]} rx={58} ry={52} at={spot} />
				</FrameSvg>
				<Lbl x={ax + 16} y={ay + 10} at={eighty} color={AMBER.ink}>80 N</Lbl>
				<Lbl x={bx + 12} y={by} at={eighty + 6} color={AMBER.ink}>80 N</Lbl>
				<Lbl x={cx + 30} y={cy - 46} at={eighty + 12} color={AMBER.ink} anchor="middle">80 N</Lbl>
				<HandTag x={END[0] + 30} y={ay - 50} text="same force" at={sameF} size={TYPE.handSmall} color={AMBER.ink} />
				<HandTag x={END[0] + 70} y={END[1] + 80} text="same spot" at={spot} size={TYPE.handSmall} color={INK} />
				<Lbl x={(NX + END[0]) / 2} y={NY + 220} color={INK_SOFT} anchor="middle" size={30}>top view: a spanner on a stuck nut</Lbl>
				<Card x={1290} y={200} w={534}>
					<Title>Same force, three directions</Title>
					<Line>which turns the nut best?</Line>
					<Line>which does nothing?</Line>
				</Card>
				<Card x={1290} y={420} w={534} border={ROLE.given.stroke}>
					<Title color={ROLE.given.ink}>The case</Title>
					<Line color={ROLE.given.ink}>handle: r = {f >= t25 ? '0.25 m' : '?'}</Line>
					<Line color={AMBER.ink}>each push: F = {f >= eighty ? '80 N, at the end' : '?'}</Line>
				</Card>
				{(['A: at right angles', 'B: at 30° to the handle', 'C: along the handle'] as const).map((t, i) => <Chip key={t} x={1290} y={600 + i * 72} at={rank + i * 6} size={34}>{t}</Chip>)}
				<Chip x={1290} y={830} at={all} size={34} border={INK}>best → worst: ?  ?  ?</Chip>
				<FrameSvg><Countdown start={hd.startFrame} end={hd.endFrame} x={1740} y={690} ringFrom={all} /></FrameSvg>
			</div>
		</>
	);
};

// ---------- 2. reveal: torque, the turning effect ----------
export const S02: React.FC = () => {
	const id = 'reveal-torque';
	const f = useCurrentFrame();
	const curved = cue(id, 'curved arrow'), ra = cue(id, 'right-angle push'), th = cue(id, 'thirty degree push'), al = cue(id, 'push along'), all = cue(id, 'all'), pivot = cue(id, 'pivot'), called = cue(id, 'called torque'), notF = cue(id, "isn't a force"), soWhy = cue(id, 'So why');
	const litA = prog(f, ra, 10) * (1 - prog(f, th, 10)), litB = prog(f, th, 10) * (1 - prog(f, al, 10)), litC = prog(f, al, 10) * (1 - prog(f, pivot, 10));
	const [ax, ay] = tipOf(END[0], END[1], 90), [bx, by] = tipOf(END[0], END[1], 30), [cx, cy] = tipOf(END[0], END[1], 180);
	const s0 = 100;
	return (
		<>
			<SceneHeading text="Torque: the turning effect of a force" at={-40} size={56} out={soWhy - 6} />
			<SceneHeading text={HEAD} at={soWhy} size={48} />
			<FrameSvg>
				<SpannerNut cx={NX} cy={NY} armPx={ARM0} />
				<Push x={END[0]} y={END[1]} deg={90} lit={litA} />
				<Push x={END[0]} y={END[1]} deg={30} lit={litB} />
				<Push x={END[0]} y={END[1]} deg={180} lit={litC} />
				<Badge x={ax - 44} y={ay + 10} letter="A" />
				<Badge x={bx + 4} y={by + 52} letter="B" />
				<Badge x={cx + 30} y={cy + 50} letter="C" />
				<TurnArrow cx={NX} cy={NY} r={158} from={s0} to={s0 + ARC_PER_NM * tau(ARM, 90)} color={INK} at={ra} dur={24} />
				<TurnArrow cx={NX} cy={NY} r={116} from={s0} to={s0 + ARC_PER_NM * tau(ARM, 30)} color={INK} at={th} dur={18} />
				<Badge x={NX + 158 * Math.cos(((s0 + 120) * Math.PI) / 180) - 40} y={NY - 158 * Math.sin(((s0 + 120) * Math.PI) / 180) + 18} letter="A" at={ra + 20} color={INK} />
				<Badge x={NX + 116 * Math.cos(((s0 + 60) * Math.PI) / 180) - 34} y={NY - 116 * Math.sin(((s0 + 60) * Math.PI) / 180) - 6} letter="B" at={th + 16} color={INK} />
				<PivotDot x={NX} y={NY} at={pivot} />
				{f >= pivot ? <PenRing cx={NX} cy={NY} rx={34} ry={34} at={pivot + 4} color={ROLE.given.stroke} /> : null}
			</FrameSvg>
			<Lbl x={ax + 16} y={ay + 10} color={AMBER.ink}>80 N</Lbl>
			<Lbl x={bx + 12} y={by} color={AMBER.ink}>80 N</Lbl>
			<Lbl x={cx + 30} y={cy - 46} color={AMBER.ink} anchor="middle">80 N</Lbl>
			<HandTag x={NX - 330} y={NY - 70} text="half as big" at={th + 14} size={TYPE.handSmall} color={INK} />
			<HandTag x={cx - 40} y={cy + 62} text="just shoves" at={all - 30} size={TYPE.handSmall} color={INK} />
			<Lbl x={NX} y={NY + 200} at={pivot} color={ROLE.given.ink} anchor="middle" size={34}>pivot: the point it turns about</Lbl>
			<Card x={1290} y={200} w={534}>
				<Title>Turning effect</Title>
				<Line>A: {f >= ra ? 'the biggest' : '?'}</Line>
				<Line>B: {f >= th ? 'only half as big' : '?'}</Line>
				<Line>C: {f >= all - 20 ? 'none, it just shoves' : '?'}</Line>
			</Card>
			<Card x={1290} y={440} w={534} at={called - 6} border={INK}>
				<Line size={TYPE.current}>torque: the turning effect of a force about a pivot</Line>
				<Line size={32} color={INK_SOFT} at={notF}>not a force: it's what a force does to rotation</Line>
			</Card>
			<Card x={1290} y={720} w={534} at={soWhy} border={INK}>
				<Line size={34}>Ranking: <AnswerBox at={soWhy + 20}>A &gt; B &gt; C</AnswerBox></Line>
				<Line size={30} color={INK_SOFT}>C does nothing. Why?</Line>
			</Card>
			{f < curved ? null : <HandNote x={96} y={940} at={curved} size={30} color={INK_SOFT}>arrow length shows how strongly each push tries to turn the nut</HandNote>}
		</>
	);
};

// ---------- 3. right angles: distance times force (camera push to the handle, live slider) ----------
const S3 = {cx: 330, cy: 640, arm: 600};
export const S03: React.FC = () => {
	const id = 'right-angles';
	const f = useCurrentFrame();
	const door = cue(id, 'and a door'), dist = cue(id, 'Distance from the pivot'), half = cue(id, 'halfway'), effect = cue(id, 'turning effect'), forRA = cue(id, 'For a force'), tauEq = cue(id, 'Tau equals'), here = cue(id, "Here that's"), twenty = cue(id, 'twenty newton'), measured = cue(id, 'measured in'), energy = cue(id, "isn't energy");
	const k = prog(f, 0, 34);
	const cx = NX + (S3.cx - NX) * k, cy = NY + (S3.cy - NY) * k, arm = ARM0 + (S3.arm - ARM0) * k;
	const ppm = arm / ARM;
	const r = kfm(f, [[dist, 0.25], [dist + 32, 0.05], [half, 0.25], [half + 34, 0.125], [forRA, 0.125], [forRA + 34, 0.25]]);
	const t = tau(r, 90);
	const px = cx + r * ppm, L = 200 * (arm / 600);
	return (
		<>
			<SceneHeading text="At right angles: distance times force" at={-40} size={56} />
			<FrameSvg>
				<SpannerNut cx={cx} cy={cy} armPx={arm} />
				{f >= half ? <TurnArrow cx={cx} cy={cy} r={196} from={100} to={100 + ARC_PER_NM * 20} color={INK_SOFT} width={3} head={14} at={half} dur={12} /> : null}
				<TurnArrow cx={cx} cy={cy} r={150} from={100} to={100 + ARC_PER_NM * t} color={INK} />
				<Push x={px} y={cy} deg={90} L={L} />
				<RightMark x={px} y={cy} a={90} size={22} />
				<Bracket x1={cx} y1={cy + 100} x2={px} y2={cy + 100} color={ROLE.given.stroke} />
				<PivotDot x={cx} y={cy} />
			</FrameSvg>
			<Lbl x={px + 14} y={cy - L + 6} color={AMBER.ink}>80 N</Lbl>
			<Lbl x={(cx + px) / 2} y={cy + 146} color={ROLE.given.ink} anchor="middle" size={34}>r = {fx(r, 3)} m</Lbl>
			<Lbl x={cx - 120} y={cy - 210} at={half + 4} color={INK_SOFT} anchor="middle" size={30}>full: 20 N m</Lbl>
			<HandTag x={cx + 330} y={cy + 230} text="half the distance, half the turning" at={effect} size={TYPE.handSmall} color={INK} />
			<HandTag x={96} y={950} text="a door pushed near its hinge barely moves" at={door} size={30} color={INK_SOFT} />
			<Readouts x={1290} y={200} w={534} title="push at right angles, F = 80 N" rows={[
				{label: 'r (from the pivot)', value: fx(r, 3), unit: 'm', color: ROLE.given.ink},
				{label: 'τ = rF', value: fx(t, 1), unit: 'N m', color: INK, ring: half + 34},
			]} />
			<div style={{position: 'absolute', left: 1290, top: 470}}>
				<Row at={tauEq - 30} size={TYPE.working}><Boxed at={tauEq} size={TYPE.working}>τ = rF</Boxed></Row>
				<Row at={tauEq - 30} size={30} style={{color: INK_SOFT, marginTop: 6}}>(force at right angles to r)</Row>
				<Row at={here} ageAt={twenty} size={TYPE.current} oldSize={36} style={{marginTop: 14}}>τ = 0.25 m × 80 N</Row>
				<Row at={twenty - 8} size={TYPE.working}>&nbsp;&nbsp;= <AnswerBox at={twenty}>20 N m</AnswerBox></Row>
			</div>
			<Card x={1290} y={470} w={534} out={tauEq - 34} border={ROLE.given.stroke}>
				<Title color={ROLE.given.ink}>Slide the push along</Title>
				<Line size={34}>same 80 N, at right angles</Line>
				<Line size={34}>only r changes</Line>
			</Card>
			<Chip x={1290} y={820} at={measured} size={30} border={INK}>unit: N m (newton metre)</Chip>
			<CrossedChip x={1730} y={814} at={energy - 6} crossAt={energy + 4} size={34} caption="not energy">J</CrossedChip>
		</>
	);
};

// ---------- 4. at an angle: only the right-angle part turns (close-up of the handle end) ----------
const S4 = {cx: 260, cy: 700, arm: 600};
export const S04: React.FC = () => {
	const id = 'components';
	const f = useCurrentFrame();
	const split = cue(id, 'Split it'), oneRuns = cue(id, 'One runs along'), through = cue(id, 'through its centre'), other = cue(id, 'The other'), onlyThat = cue(id, 'only that part'), sinT = cue(id, "It's F sin theta"), forceC = cue(id, 'and the force'), eighty = cue(id, 'Eighty times'), soT = cue(id, 'so the torque'), ten = cue(id, 'ten newton'), halfF = cue(id, 'Half the force');
	const {end: [ex, ey]} = spannerGeom(S4.cx, S4.cy, S4.arm);
	const L = 300, cosL = L * Math.cos(Math.PI / 6), sinL = L * Math.sin(Math.PI / 6);
	const pulse = Math.sin(Math.PI * Math.max(0, Math.min(1, (f - onlyThat) / 30)));
	return (
		<>
			<SceneHeading text="At an angle: only the right-angle part turns" at={-40} size={54} />
			<FrameSvg>
				<SpannerNut cx={S4.cx} cy={S4.cy} armPx={S4.arm} />
				<DashLine x1={ex} y1={ey} x2={90} y2={ey} color={TURN.along.stroke} at={through} dur={24} width={5} />
				<Push x={ex} y={ey} deg={30} L={L} width={f >= split ? 6 : 9} />
				<DashLine x1={ex + cosL} y1={ey} x2={ex + cosL} y2={ey - sinL} color={INK_SOFT} at={split + 16} width={2.5} dash="6 6" />
				<DashLine x1={ex} y1={ey - sinL} x2={ex + cosL} y2={ey - sinL} color={INK_SOFT} at={split + 16} width={2.5} dash="6 6" />
				<VecArrow x={ex} y={ey} dx={cosL} dy={0} color={TURN.along.stroke} width={10} at={split} dur={18} head={26} />
				<VecArrow x={ex} y={ey} dx={0} dy={-sinL} color={TURN.perp.stroke} width={10 + 4 * pulse} at={split + 8} dur={18} head={26} />
				<RightMark x={ex} y={ey} a={0} size={24} at={split + 20} />
				<ArcAngle px={ex} py={ey} r={110} a1={0} a2={30} label="θ = 30°" at={forceC} size={36} lr={168} />
				<PivotDot x={S4.cx} y={S4.cy} at={through} />
			</FrameSvg>
			<Lbl x={ex + cosL - 20} y={ey - sinL - 34} color={AMBER.ink} anchor="end">F = 80 N</Lbl>
			<Card x={1290} y={430} w={534} out={sinT - 6} border={INK}>
				<Title>Plan</Title>
				<Line size={34}>split F into two parts:</Line>
				<Line size={34} color={TURN.along.ink}>along the handle</Line>
				<Line size={34} color={TURN.perp.ink}>at right angles to it</Line>
			</Card>
			<Lbl x={ex + cosL / 2 + 40} y={ey + 96} at={oneRuns} color={TURN.along.ink} anchor="middle">F cos θ</Lbl>
			<Lbl x={ex - 18} y={ey - sinL / 2} at={other} color={TURN.perp.ink} anchor="end">F sin θ</Lbl>
			<HandTag x={150} y={ey - 150} text="acts through the pivot: no turning" at={through + 10} size={TYPE.handSmall} color={TURN.along.ink} />
			<HandTag x={ex - 250} y={ey - 250} text="only this part turns" at={onlyThat} size={TYPE.handSmall} color={TURN.perp.ink} />
			<Lbl x={S4.cx} y={ey + 190} at={ten} color={INK} anchor="middle" size={TYPE.current}><AnswerBox at={ten}>τ = 10 N m</AnswerBox></Lbl>
			<Card x={1290} y={200} w={534} border={ROLE.given.stroke}>
				<Title color={ROLE.given.ink}>The case</Title>
				<Line color={AMBER.ink}>F = 80 N at 30° to the handle</Line>
				<Line color={ROLE.given.ink}>r = 0.25 m (pivot to the push)</Line>
			</Card>
			<div style={{position: 'absolute', left: 1290, top: 430, width: 560}}>
				<Row at={sinT} ageAt={eighty} size={TYPE.current} oldSize={36}><span style={{color: TURN.perp.ink}}>F⊥ = F sin θ</span></Row>
				<Row at={eighty} ageAt={soT} size={TYPE.current} oldSize={36}>&nbsp;&nbsp;= 80 × sin 30° = <span style={{color: TURN.perp.ink}}>40 N</span></Row>
				<Row at={soT} ageAt={ten} size={TYPE.current} oldSize={36} style={{marginTop: 12}}>τ = r F sin θ</Row>
				<Row at={ten - 10} size={TYPE.current}>&nbsp;&nbsp;= 0.25 × 40 = <AnswerBox at={ten}>10 N m</AnswerBox></Row>
			</div>
			<HandTag x={1290} y={830} text="half the force at right angles: half the torque" at={halfF} size={30} color={INK} />
		</>
	);
};

// ---------- 5. the same answer from the moment arm (pull back to the whole spanner) ----------
const S5 = {cx: 400, cy: 530, arm: 540};
export const S05: React.FC = () => {
	const id = 'moment-arm';
	const f = useCurrentFrame();
	const extend = cue(id, 'Extend'), loa = cue(id, 'line of action'), shortest = cue(id, 'shortest distance'), rightA = cue(id, 'right angles'), arm = cue(id, 'moment arm'), hereIts = cue(id, "Here it's"), twelve = cue(id, 'twelve and a half'), eighty = cue(id, 'Eighty newtons'), ten = cue(id, 'ten newton'), again = cue(id, 'again'), either = cue(id, 'Either way'), rPerp = cue(id, 'r perpendicular');
	const ex = S5.cx + S5.arm, ey = S5.cy, PL = PUSH0 * S5.arm / ARM0;
	const c30 = Math.cos(Math.PI / 6), s30 = Math.sin(Math.PI / 6);
	const P = (t: number): [number, number] => [ex + t * c30, ey - t * s30];
	const tf = -S5.arm * c30;
	const [fx_, fy_] = P(tf);
	const [l1x, l1y] = P(-800), [l2x, l2y] = P(300);
	const comp = 1 - prog(f, 6, 20);
	const sp = prog(f, shortest, 20);
	return (
		<>
			<SceneHeading text="Same answer from the moment arm" at={-40} size={56} />
			<FrameSvg>
				<SpannerNut cx={S5.cx} cy={S5.cy} armPx={S5.arm} />
				{comp > 0.01 ? <g opacity={comp}><line x1={ex} y1={ey} x2={ex + PL * c30} y2={ey} stroke={TURN.along.stroke} strokeWidth={8} /><line x1={ex} y1={ey} x2={ex} y2={ey - PL * s30} stroke={TURN.perp.stroke} strokeWidth={8} /></g> : null}
				<DashLine x1={ex} y1={ey} x2={l1x} y2={l1y} color={AMBER.stroke} at={extend + 10} dur={30} width={4} />
				<DashLine x1={ex} y1={ey} x2={l2x} y2={l2y} color={AMBER.stroke} at={extend + 10} dur={20} width={4} />
				<Push x={ex} y={ey} deg={30} L={PL} />
				{sp > 0 ? <line x1={S5.cx} y1={S5.cy} x2={S5.cx + (fx_ - S5.cx) * sp} y2={S5.cy + (fy_ - S5.cy) * sp} stroke={TURN.arm.stroke} strokeWidth={8} strokeLinecap="round" /> : null}
				<RightMark x={fx_} y={fy_} a={30} size={22} at={rightA} color={TURN.arm.stroke} width={3.5} />
				<ArcAngle px={ex} py={ey} r={80} a1={0} a2={30} label="30°" size={32} lr={116} />
				<PivotDot x={S5.cx} y={S5.cy} />
			</FrameSvg>
			<Lbl x={P(PL + 20)[0]} y={P(PL + 20)[1] - 4} color={AMBER.ink}>80 N</Lbl>
			<Lbl x={P(-700)[0] + 30} y={P(-700)[1] + 14} at={loa} color={AMBER.ink} size={34}>line of action</Lbl>
			<Lbl x={(S5.cx + fx_) / 2 - 24} y={(S5.cy + fy_) / 2 + 20} at={arm} color={TURN.arm.ink} anchor="end" size={TYPE.current}>r⊥</Lbl>
			<Lbl x={fx_ + 30} y={fy_ + 70} at={arm} color={TURN.arm.ink} size={32}>moment arm</Lbl>
			<HandTag x={fx_ + 30} y={fy_ + 120} text="shortest distance" at={shortest + 10} size={30} color={TURN.arm.ink} />
			<Card x={1290} y={200} w={534} pad="8px 22px 10px">
				<Title>From the components</Title>
				<Line size={36}>τ = 0.25 × 40 = 10 N m</Line>
			</Card>
			<div style={{position: 'absolute', left: 1290, top: 380, width: 560}}>
				<Row at={hereIts} ageAt={eighty} size={TYPE.current} oldSize={36}><span style={{color: TURN.arm.ink}}>r⊥ = r sin θ</span> = 0.25 × sin 30°</Row>
				<Row at={twelve} ageAt={eighty} size={TYPE.current} oldSize={36}>&nbsp;&nbsp;= <span style={{color: TURN.arm.ink}}>0.125 m</span></Row>
				<Row at={eighty} ageAt={either} size={TYPE.current} oldSize={36} style={{marginTop: 12}}>τ = F r⊥ = 80 × 0.125</Row>
				<Row at={ten - 8} ageAt={either} size={TYPE.working} oldSize={38}>&nbsp;&nbsp;= <AnswerBox at={again}>10 N m</AnswerBox></Row>
			</div>
			<Card x={1290} y={390} w={534} out={loa - 6} border={TURN.arm.stroke}>
				<Title color={TURN.arm.ink}>A second way</Title>
				<Line size={34}>1. extend F into a long line</Line>
				<Line size={34}>2. shortest distance from the pivot to it</Line>
				<Line size={34}>3. τ = F × that distance</Line>
			</Card>
			<Chip x={1290} y={390} at={loa} out={hereIts - 6} size={34} w={534} border={AMBER.stroke}>line of action: the line the force acts along, extended both ways</Chip>
			<Chip x={1290} y={560} at={arm} out={hereIts - 6} size={34} w={534} border={TURN.arm.stroke}>moment arm r⊥: the shortest distance from the pivot to the line of action</Chip>
			<HandTag x={1700} y={330} text="same 10 N m" at={again + 6} size={TYPE.handSmall} color={INK} anchor="end" />
			<div style={{position: 'absolute', left: 1290, top: 770, opacity: prog(f, either, 14)}}><Boxed at={rPerp} size={56}>τ = r⊥F = rF sin θ</Boxed></div>
			<HandTag x={1300} y={900} text="two forms of one formula" at={rPerp + 12} size={30} color={INK_SOFT} />
		</>
	);
};

export {FORCE};
