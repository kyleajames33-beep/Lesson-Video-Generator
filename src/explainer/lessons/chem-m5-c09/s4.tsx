import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, Countdown, DrawPath, INK, INK_SOFT, prog} from '../../kit';
import {cues} from '../../cues';
import {H2I2_EQ} from '../chem-m5-c06/board';
import {HotTube} from '../chem-m5-c06/parts';
import {Thermo} from '../chem-m5-c04b/parts';
import {LitArrows} from '../chem-m5-c08/parts';
import {Arrow, BLUE, Bars9, Chip, EqStrip, Fade, Flame, GivensCard, KMark, LogLine, Overlay, Ring, Sx, TEAL, Tag, Tick, UpDown, eqLayout} from './parts';
import type {EqItem, Ln} from './parts';
import {HEAT, Heading, K100, K25, NO2_INK, QINK, kf, sc} from './common';

// ---------- 8. Memory aid ----------
const M = 'memory-aid';
const KM = cues(sc(M), {two: 'two lines', first: 'First', changeT: 'change T', changeK: 'change K', anything: 'Change anything else', stays: 'K stays', second: 'Second', direction: 'to find the direction', treat: 'treat heat like a chemical', onlyDir: 'only for the direction', takesIn: 'reaction takes in heat', left: 'on the left', right: 'mixture right', up: 'goes up', givesOut: 'gives out heat', rightSide: 'on the right', down: 'goes down', unlike: 'Unlike a real reactant', diff: 'different amounts', moves: 'why K moves'});
const LNM: Ln = {y: 330, x0: 1290, x1: 1790, lo: -3, hi: 3};
const EQA: EqItem[] = [{k: 'sp', t: 'reactants'}, {k: 'plus'}, {k: 'sp', t: 'heat', color: HEAT}, {k: 'arrow'}, {k: 'sp', t: 'products'}];
const EQB: EqItem[] = [{k: 'sp', t: 'reactants'}, {k: 'arrow'}, {k: 'sp', t: 'products'}, {k: 'plus'}, {k: 'sp', t: 'heat', color: HEAT}];
export const SceneMemoryAid: React.FC = () => {
	const f = useCurrentFrame();
	const kv = 10 ** kf(f, [[KM.changeK, Math.log10(K25)], [KM.changeK + 30, Math.log10(K100)]]);
	const jump = f < KM.anything ? 0 : f < KM.anything + 8 ? (f - KM.anything) / 8 : Math.max(0, 1 - (f - KM.anything - 8) / 30);
	const qv = 10 ** (Math.log10(K100) - 1.1 * jump);
	const ya = 600, yb = 740, X = 170;
	const la = eqLayout(EQA, 50, X), lb = eqLayout(EQB, 50, X);
	const bx = 1520, bb = 900;
	const bh = (base: number, gain: number) => kf(f, [[KM.unlike, base], [KM.diff, base + gain]]);
	return (
		<>
			<Heading text="Two lines to remember" at={4} size={62} />
			<Overlay>
				{/* line 1: the invariant */}
				<Sx x={96} y={300} text="Change T, change K." size={80} color={TEAL} hand at={KM.changeT} />
				<Sx x={96} y={392} text="Change anything else, K stays." size={64} color={INK} hand at={KM.anything} />
				<LogLine ln={LNM} at={KM.first} labels={false} />
				<KMark ln={LNM} value={() => kv} at={KM.first + 6} label="K" size={46} />
				<g opacity={prog(f, KM.anything - 4, 8) * (1 - prog(f, KM.second, 10))}>
					{(() => {
						const x = LNM.x0 + ((Math.log10(qv) - LNM.lo) * (LNM.x1 - LNM.x0)) / (LNM.hi - LNM.lo);
						return <path d={`M${x},${LNM.y + 16} L${x + 16},${LNM.y + 34} L${x},${LNM.y + 52} L${x - 16},${LNM.y + 34} Z`} fill={QINK} />;
					})()}
				</g>
				<Tick x={LNM.x1 - 20} y={LNM.y - 80} at={KM.stays} s={40} />
				<Arrow x1={900} y1={276} x2={1230} y2={300} at={KM.changeK + 6} color={AMBER_INK} width={5} />
				{/* line 2: heat on a side, for the direction only */}
				<Sx x={96} y={500} text="To find the direction: treat heat like a chemical on one side" size={40} color={INK} hand at={KM.treat} />
				<EqStrip items={EQA} x={X} y={ya} size={50} at={KM.takesIn} />
				<Flame x={la.pos[2].sx + 52} y={ya + 76} s={0.8} at={KM.left} />
				<Ring cx={la.pos[2].sx + 52} cy={ya - 18} rx={80} ry={40} at={KM.left} color={HEAT} seed={3} width={4} />
				<Arrow x1={la.pos[4].sx} y1={ya + 40} x2={la.end - 10} y2={ya + 40} at={KM.right} color={BLUE} width={6} />
				<Sx x={la.end + 60} y={ya} text="K up when heated" size={50} color={TEAL} hand at={KM.up} />
				<UpDown x={la.end + 440} y={ya + 4} dir="up" at={KM.up} color={TEAL} />
				<EqStrip items={EQB} x={X} y={yb} size={50} at={KM.givesOut} />
				<Flame x={lb.pos[4].sx + 52} y={yb + 76} s={0.8} at={KM.rightSide} />
				<Ring cx={lb.pos[4].sx + 52} cy={yb - 18} rx={80} ry={40} at={KM.rightSide} color={HEAT} seed={5} width={4} />
				<Sx x={lb.end + 60} y={yb} text="K down when heated" size={50} color={TEAL} hand at={KM.down} />
				<UpDown x={lb.end + 480} y={yb + 4} dir="down" at={KM.down} color={TEAL} />
				{/* unlike a real reactant: the two rates rise by different amounts */}
				<Fade at={KM.unlike}>
					<path d={`M${bx - 20},${bb} L${bx + 230},${bb}`} stroke={INK} strokeWidth={4} strokeLinecap="round" />
					<rect x={bx} y={bb - bh(70, 120)} width={70} height={bh(70, 120)} rx={5} fill="#bcd6ee" stroke={BLUE} strokeWidth={4} />
					<rect x={bx + 140} y={bb - bh(70, 40)} width={70} height={bh(70, 40)} rx={5} fill="#f6dfae" stroke={AMBER} strokeWidth={4} />
				</Fade>
				<Tag x={X} y={836} w={820} text="direction only; heat changes the rates unequally" at={KM.unlike} color={HEAT} size={36} />
				<Tag x={X} y={916} w={1180} text="same equation as written; heat is never put in the K expression" at={KM.onlyDir} color={INK} size={40} />
			</Overlay>
		</>
	);
};

// ---------- 9. Attempt (unseen: H2 + I2; countdown) ----------
const A = 'attempt';
const KA = cues(sc(A), {turn: 'Your turn', h2: 'Hydrogen and iodine', sealed: 'sealed tube', eq: 'H two plus I two', gives: 'gives out about', kj: '10 kilojoules', at450: '450 degrees', k49: 'K is 49', heated: 'heated to 500', settle: 'left to settle', above: 'above 49', equal: 'equal to 49', below: 'below 49', reason: 'short reason', pause: 'Pause here'});
export const CARD9 = {x: 96, y: 300, w: 660, lh: 52};
export const HI_TUBE = {x: 330, y: 650, counts: {h: 3, i: 3, hi: 8}};
export const AttemptBoard: React.FC<{at?: number; eqAt?: number; cardAts?: number[]; heat?: number; extraLine?: {text: string; at: number}}> = ({at = -100, eqAt = -100, cardAts = [-100, -100, -100, -100], heat, extraLine}) => {
	const items: EqItem[] = heat === undefined ? H2I2_EQ : [...H2I2_EQ, {k: 'plus', at: heat}, {k: 'sp', t: 'heat', color: HEAT, at: heat}];
	return (
		<>
			<EqStrip items={items} x={96} y={250} size={50} at={eqAt} />
			<GivensCard x={CARD9.x} y={CARD9.y} w={CARD9.w} h={108 + 3 * CARD9.lh + 26} at={at} lh={CARD9.lh} lines={[
				{text: 'K = 49 (about 450 °C)', at: cardAts[0]},
				{text: 'sealed tube, constant volume', at: cardAts[1], size: 34},
				{text: extraLine ? 'forward reaction gives out heat' : 'forward reaction gives out about', at: cardAts[2], size: 34},
				{text: extraLine ? '' : '10 kJ per mole of H_2', at: cardAts[3], size: 34},
			]} />
			{extraLine ? <Sx x={CARD9.x + 28} y={CARD9.y + 108 + 3 * CARD9.lh} text={extraLine.text} size={34} color={AMBER_INK} weight={600} at={extraLine.at} /> : null}
		</>
	);
};
export const SceneAttempt: React.FC = () => {
	const f = useCurrentFrame();
	const hold = sc(A).responseHold as {startFrame: number; endFrame: number};
	return (
		<>
			<Heading text="Your turn" at={KA.turn} size={62} />
			<Overlay>
				<AttemptBoard at={KA.sealed - 10} eqAt={KA.eq} cardAts={[KA.k49, KA.sealed + 6, KA.gives, KA.kj]} />
				<HotTube x={HI_TUBE.x} y={HI_TUBE.y} counts={HI_TUBE.counts} reveal={prog(f, KA.h2, 16)} />
				<Sx x={HI_TUBE.x + 70} y={HI_TUBE.y + 380} text="sealed tube" size={34} color={INK_SOFT} anchor="middle" hand at={KA.sealed} />
				{/* the single demand */}
				<rect x={860} y={330} width={980} height={290} rx={24} fill="#fffdf8" stroke={AMBER_INK} strokeWidth={4} opacity={prog(f, KA.heated - 6, 12)} />
				<Sx x={900} y={410} text="Heated to 500 °C and settled:" size={48} color={INK} hand at={KA.heated} />
				<Sx x={900} y={480} text="is K above, equal to or below 49?" size={48} color={INK} hand at={KA.above} />
				<Sx x={900} y={560} text="Give a short reason." size={48} color={INK} hand at={KA.reason} />
				<Sx x={900} y={720} text="Pause here to answer." size={60} color={AMBER_INK} hand at={KA.pause} />
				<Countdown start={hold.startFrame} end={hold.endFrame} x={1620} y={800} r={64} />
			</Overlay>
		</>
	);
};

// ---------- 10a. Feedback: heating the tube ----------
const F = 'feedback-heating';
const KF = cues(sc(F), {fwd: 'The forward reaction gives out heat', reverse: 'so the reverse reaction', takes: 'takes in heat', heating: 'Heating speeds up the reverse', more: 'more than the forward one', settled: 'settled tube ends', little: 'a little less hydrogen iodide', falls: 'K falls', below: 'below 49', slightly: 'only slightly', small: 'heat involved is small', n2o4: 'The N two O four reaction', eighty: 'eighty times', rises: 'K rises because', everything: 'everything is faster', both: 'both speed up', which: 'which one speeds up more', equal: 'said equal', fixed: 'stays fixed only', temp: 'temperature stays fixed'});
export const LNHI: Ln = {y: 330, x0: 1000, x1: 1780, lo: 1, hi: 2};
const BARS10 = {x0: 1120, base: 920, bw: 100, gx: 220};
export const SceneFeedbackHeating: React.FC = () => {
	const f = useCurrentFrame();
	const fwd = kf(f, [[KF.heating, 140], [KF.more, 190]]);
	const rev = kf(f, [[KF.heating, 140], [KF.more, 235]]);
	const kv = 10 ** kf(f, [[KF.falls, Math.log10(49)], [KF.falls + 30, Math.log10(42)]]);
	const items: EqItem[] = [...H2I2_EQ, {k: 'plus'}, {k: 'sp', t: 'heat', color: HEAT}];
	const lay = eqLayout(items, 50, 96);
	const counts = {h: kf(f, [[KF.settled, 3], [KF.little + 20, 4]]), i: kf(f, [[KF.settled, 3], [KF.little + 20, 4]]), hi: kf(f, [[KF.settled, 8], [KF.little + 20, 6]])};
	const chipX = 960, chipY = 440;
	return (
		<>
			<Heading text="Check: heating the tube" at={4} size={62} />
			<Overlay>
				<AttemptBoard heat={6} />
				<LitArrows items={items} x={96} y={250} size={50} rev={KF.heating} />
				<Flame x={lay.pos[6].sx + 60} y={300} s={0.7} at={KF.reverse} />
				<Sx x={lay.pos[6].sx + 100} y={296} text="heat it" size={36} color={HEAT} hand at={KF.reverse} />
				<HotTube x={HI_TUBE.x} y={HI_TUBE.y} counts={counts} />
				{/* the number line: K slides a little below 49 */}
				<LogLine ln={LNHI} at={KF.heating} size={28} />
				<KMark ln={LNHI} value={49} at={KF.falls} ghost label="" />
				<KMark ln={LNHI} value={() => kv} at={KF.heating + 6} label={ff => (ff < KF.falls + 14 ? 'K = 49' : 'K below 49')} size={42} />
				<Tick x={1630} y={232} at={KF.below} s={44} />
				<Tag x={1260} y={410} w={460} text="small heat, small change" at={KF.slightly} out={KF.rises - 6} color={INK_SOFT} size={34} />
				<Sx x={1010} y={520} text="N_2O_4: much more heat, K × 80" size={36} color={NO2_INK} weight={600} at={KF.eighty - 10} out={KF.rises - 6} />
				{/* the rates: both rise, the reverse a little further */}
				<Bars9 x0={BARS10.x0} base={BARS10.base} bw={BARS10.bw} gx={BARS10.gx} fwd={fwd} rev={rev} at={KF.heating} eq={1 - prog(f, KF.heating, 8)} labels={{fwd: ['forward'], rev: ['reverse']}} />
				<Fade at={KF.more} out={KF.settled + 30}>
					<Sx x={BARS10.x0 + BARS10.gx + BARS10.bw / 2} y={BARS10.base - 290} text="reverse up more" size={40} color={AMBER_INK} anchor="middle" hand at={KF.more} />
				</Fade>
				{/* named wrong answers */}
				<Chip x={chipX} y={chipY} w={860} text="K up: both speed up, but one speeds up more" size={38} at={KF.rises} out={KF.equal - 8} color={INK_SOFT} cross={KF.which + 10} />
				<Arrow x1={1300} y1={chipY + 70} x2={1360} y2={BARS10.base - 250} at={KF.which} out={KF.equal - 8} color={AMBER_INK} width={5} />
				<Chip x={chipX} y={chipY} w={860} text="K equal: K stays fixed only at a fixed temperature" size={36} at={KF.equal} color={INK_SOFT} cross={KF.temp + 10} />
				<Thermo x={chipX - 40} y={chipY + 30} s={1.4} at={KF.fixed} />
			</Overlay>
		</>
	);
};
void DrawPath; void INK; void TEAL; void K100; void QINK;
