import React from 'react';
import {staticFile, useCurrentFrame} from 'remotion';
import {AMBER_INK, Countdown, DrawPath, FONT_HAND, HandText, INK, INK_SOFT, prog} from '../../kit';
import {cues} from '../../cues';
import {AnswerTable, Chip, Fade, Flame, HABER_EQ, MEOH_EQ, Overlay, Snowflake, Sx, eqLayout} from './parts';
import type {TRow} from './parts';
import {GivensCard} from '../chem-m5-c06/parts';
import {Heading, COLD, COST, HEAT, RATE, YIELD, GREEN, sc} from './common';
import {HAVE_TUG, TUG, TUG_NAT, TUG_PLATE_ICONS} from './assets';

const clamp = (v: number, a = 0, b = 1) => Math.max(a, Math.min(b, v));

export const EqRow: React.FC<{items: typeof HABER_EQ; x: number; y: number; size: number; at: number}> = ({items, x, y, size, at}) => {
	const pos = eqLayout(items, size, x).pos;
	return (
		<g>
			{items.map((it, i) => {
				const p = pos[i];
				const a = at + i * 4;
				if (it.k === 'plus') return <Sx key={i} x={p.cx} y={y} text="+" size={size} at={a} />;
				if (it.k === 'arrow') {
					return (
						<Fade key={i} at={a}>
							<path d={`M${p.cx},${y - size * 0.4} L${p.cx + p.w},${y - size * 0.4} M${p.cx + p.w - 14},${y - size * 0.4 - 11} L${p.cx + p.w},${y - size * 0.4} L${p.cx + p.w - 14},${y - size * 0.4 + 11}`} fill="none" stroke={INK} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" />
							<path d={`M${p.cx + p.w},${y - size * 0.12} L${p.cx},${y - size * 0.12} M${p.cx + 14},${y - size * 0.12 - 11} L${p.cx},${y - size * 0.12} L${p.cx + 14},${y - size * 0.12 + 11}`} fill="none" stroke={INK} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" />
						</Fade>
					);
				}
				return (
					<g key={i}>
						{it.coef ? <Sx x={p.cx} y={y} text={it.coef} size={size} color={it.color} at={a} /> : null}
						<Sx x={p.sx} y={y} text={it.t} size={size} color={it.color} at={a} />
					</g>
				);
			})}
		</g>
	);
};

// ---------- 7. The model answer, one stage at a time ----------
const M = 'model-answer';
const K1 = cues(sc(M), {one: 'one condition at a time', yw: 'to the yield', rw: 'to the rate', lw: 'what limits it', temp: 'Temperature', cool: 'cooling raises the yield', fewer: 'fewer collisions', both: 'both rates fall', uses: 'So the plant uses', press: 'Pressure', four: 'four gas particles', rateP: 'and the rate', strong: 'strong equipment', it: 'So it uses', rem: 'Removal', out: 'taking the ammonia out', rev: 'keeps the reverse rate low', ahead: 'stays ahead'});
export const SceneModelAnswer: React.FC = () => {
	const rows: TRow[] = [
		{label: 'Temperature', at: K1.temp, cells: [
			{text: 'exothermic: cooling shifts toward NH_3', at: K1.cool, tick: K1.cool + 40},
			{text: 'fewer collisions have enough energy', at: K1.both - 20},
			{text: 'rate falls, so a middle temperature, about 450 C, plus iron', at: K1.uses},
		]},
		{label: 'Pressure', at: K1.press, cells: [
			{text: '4 gas to 2: squeeze shifts toward NH_3', at: K1.four, tick: K1.four + 50},
			{text: 'more crowded, more collisions', at: K1.rateP},
			{text: 'cost and safety, so about 200 atm', at: K1.strong},
		]},
		{label: 'Removal', at: K1.rem, cells: [
			{text: 'taking NH_3 away: more is made in total', at: K1.out, tick: K1.out + 60},
			{text: 'reverse rate stays low, so forward stays ahead', at: K1.rev},
			// owner fix (16 Oct): the Removal limit. No narration of its own, so it writes on during the Removal row, after the rate cell.
			{text: 'cooling to condense NH_3 costs energy; unreacted N_2 and H_2 are recycled', at: K1.rev + 30, size: 30},
		]},
	];
	return (
		<>
			<Heading text="Justify the Haber conditions" at={4} size={58} />
			<Overlay>
				<EqRow items={HABER_EQ} x={96} y={262} size={44} at={K1.one} />
				<Fade at={K1.one + 20}>
					<rect x={1000} y={190} width={820} height={100} rx={20} fill="#fffdf8" stroke="rgba(60,45,20,0.18)" strokeWidth={3} />
					<Sx x={1026} y={232} text="about 450 C, about 200 atm, iron catalyst" size={32} color={INK} hand at={K1.one + 20} />
					<Sx x={1026} y={272} text="NH_3 condensed out, unused gas recycled" size={32} color={INK} hand at={K1.one + 28} />
				</Fade>
				<AnswerTable x={96} y={322} labelW={210} colW={470} rowH={165} size={34} rows={rows} headAt={[K1.yw, K1.rw, K1.lw]} />
				<Sx x={96} y={944} text="one condition at a time: yield, rate, limit" size={44} color={AMBER_INK} hand at={K1.ahead + 40} />
			</Overlay>
		</>
	);
};

// ---------- 8. Memory aid (yield asks cold, speed asks hot) ----------
const A = 'memory-aid';
const K2 = cues(sc(A), {when: 'When the forward', yc: 'yield asks for cold', sh: 'speed asks for hot', comp: 'industry compromises', mean: 'That means', mid: 'a middle temperature', neither: 'neither best', has: 'in the time it has'});
const Figure: React.FC<{cx: number; dir: 1 | -1; color: string; jitter: number}> = ({cx, dir, color, jitter}) => {
	const x = cx + jitter;
	const lean = -dir * 34;
	return (
		<g stroke={INK} strokeWidth={8} strokeLinecap="round" strokeLinejoin="round" fill="none">
			<circle cx={x + lean} cy={436} r={30} fill={color} />
			<path d={`M${x + lean * 0.7},${468} L${x + 6 * dir * -1},${548}`} />
			<path d={`M${x + 6 * dir * -1},${548} L${x - dir * 46},${620} M${x + 6 * dir * -1},${548} L${x + dir * 50},${620}`} />
			<path d={`M${x + lean * 0.6},${486} L${x - dir * 90},${520}`} />
		</g>
	);
};
/**
 * Painted tug of war (Codex brief 43): three aligned layers on one canvas. The rope-and-flag layer slides with the
 * wobble and settles centred (the flag at the middle); each figure leans back and slides a little with its end of the rope.
 */
const TG = {x: 400, y: 215, w: 1120};
const TugPlates: React.FC<{wob: number; flagDx: number; leftAt: number; rightAt: number; settle: number}> = ({wob, flagDx, leftAt, rightAt, settle}) => {
	const f = useCurrentFrame();
	const h = (TG.w / TUG_NAT[0]) * TUG_NAT[1];
	const lean = (1 - settle) * 2.2 * Math.sin(f * 0.21);
	const layer = (src: string, dx: number, rot: number, px: number) => (
		<g transform={`translate(${dx},0) rotate(${rot},${px},${TG.y + h * 0.95})`}>
			<image href={staticFile(src)} x={TG.x} y={TG.y} width={TG.w} height={h} />
		</g>
	);
	return (
		<>
			<Fade at={leftAt}>{layer(TUG.rope, flagDx, 0, TG.x + TG.w / 2)}</Fade>
			<Fade at={leftAt}>{layer(TUG.left, wob, -2.5 - lean, TG.x + TG.w * 0.2)}</Fade>
			<Fade at={rightAt}>{layer(TUG.right, -wob, 2.5 + lean, TG.x + TG.w * 0.8)}</Fade>
		</>
	);
};
export const SceneAid: React.FC = () => {
	const f = useCurrentFrame();
	const settle = prog(f, K2.comp, 40);
	const wob = Math.sin((f - K2.when) * 0.28) * 8 * (1 - settle);
	const flag = 960 + 80 * Math.sin((f - K2.when) * 0.05) * (1 - settle);
	const lx = 430 + wob, rx = 1490 - wob;
	return (
		<>
			<div style={{position: 'absolute', left: 96, top: 78}}><HandText text="Haber is a compromise." at={K2.when} size={96} cps={26} /></div>
			<Overlay>
				{/* the two forces */}
				<Fade at={K2.yc}>
					{TUG_PLATE_ICONS && HAVE_TUG ? null : <Snowflake x={170} y={528} s={2.2} />}
					<Sx x={290} y={360} text="yield" size={68} color={COLD} anchor="middle" hand at={K2.yc} />
					<Sx x={290} y={400} text="asks for cold" size={36} color={COLD} anchor="middle" hand at={K2.yc + 8} />
				</Fade>
				<Fade at={K2.sh}>
					{TUG_PLATE_ICONS && HAVE_TUG ? null : <Flame x={1750} y={528} s={2.2} />}
					<Sx x={1630} y={360} text="speed" size={68} color={HEAT} anchor="middle" hand at={K2.sh} />
					<Sx x={1630} y={400} text="asks for hot" size={36} color={HEAT} anchor="middle" hand at={K2.sh + 8} />
				</Fade>
				{HAVE_TUG ? <TugPlates wob={wob} flagDx={flag - 960} leftAt={K2.yc} rightAt={K2.sh} settle={settle} /> : <>
				<Fade at={K2.yc}>
					<g opacity={1}><Figure cx={lx} dir={-1} color="#cfe3f3" jitter={0} /></g>
				</Fade>
				<Fade at={K2.sh}>
					<Figure cx={rx} dir={1} color="#f6d3bd" jitter={0} />
				</Fade>
				<Fade at={K2.yc}>
					<path d={`M${lx - 90},520 L${rx + 90},520`} stroke="#8a6a3c" strokeWidth={9} strokeLinecap="round" strokeDasharray="1 0" />
				</Fade>
				{/* the flag settles at the middle */}
				<Fade at={K2.sh + 20}>
					<path d={`M${flag},520 L${flag},438`} stroke={INK} strokeWidth={6} strokeLinecap="round" />
					<path d={`M${flag},438 L${flag + 70},458 L${flag},478 Z`} fill="#f5c542" stroke={AMBER_INK} strokeWidth={4} strokeLinejoin="round" />
				</Fade>
				</>}
				<Fade at={K2.comp}>
					<Sx x={960} y={HAVE_TUG ? 636 : 606} text="about 450 C" size={56} color={AMBER_INK} anchor="middle" hand at={K2.comp} />
				</Fade>
				<Fade at={K2.mid}>
					<Sx x={960} y={HAVE_TUG ? 692 : 680} text="a middle temperature that gives the most" size={38} color={INK} anchor="middle" hand at={K2.mid} />
					<Sx x={960} y={HAVE_TUG ? 736 : 726} text="in the time available" size={38} color={INK} anchor="middle" hand at={K2.mid + 8} />
				</Fade>
				{/* when it applies */}
				<Fade at={K2.mean}>
					<rect x={160} y={782} width={1600} height={134} rx={22} fill="#fffdf8" stroke={AMBER_INK} strokeWidth={4} />
					<Sx x={200} y={836} text="holds when the forward reaction gives out heat and is too slow when cold." size={40} color={INK} hand at={K2.mean} />
					<Sx x={200} y={892} text="If it takes in heat, heat helps both." size={40} color={AMBER_INK} hand at={K2.mean + 14} />
				</Fade>
			</Overlay>
		</>
	);
};

// ---------- 9. Attempt (unseen: methanol; countdown) ----------
const T = 'attempt';
const KA = cues(sc(T), {turn: 'Your turn', meoh: 'Methanol', eq: 'C O plus', kj: '91 kilojoules', plant: 'A plant runs', t250: '250 degrees', p50: '50 to 100', cu: 'copper-based catalyst', cond: 'condenses the methanol', rec: 'recycles the unused', student: 'A student says', c25: '25 degrees', a500: '500 atmospheres', hi: 'highest yield', temp: 'the temperature', press: 'the pressure', rem: 'removing the methanol', pause: 'Pause here'});
export const SceneAttempt: React.FC = () => {
	const hold = sc(T).responseHold as {startFrame: number; endFrame: number};
	const lines = [
		{y: 735, label: 'Temperature', at: KA.temp},
		{y: 813, label: 'Pressure', at: KA.press},
		{y: 891, label: 'Removing the methanol', at: KA.rem},
	];
	return (
		<>
			<Heading text="Justify the plant's conditions" at={KA.turn + 4} size={58} />
			<Overlay>
				<Sx x={96} y={262} text="methanol: CH_3OH" size={56} color="#2f8a5b" hand at={KA.meoh} out={KA.eq - 6} />
				<EqRow items={MEOH_EQ} x={96} y={262} size={52} at={KA.eq} />
				<Sx x={96} y={314} text="forward gives out about 91 kJ for each mole of CH_3OH" size={36} color={HEAT} hand at={KA.kj} />
				<GivensCard x={96} y={340} w={640} h={330} at={KA.plant} lh={46} title="the plant" lines={[
					{text: 'about 250 C', at: KA.t250, size: 34},
					{text: '50 to 100 atm', at: KA.p50, size: 34},
					{text: 'copper-based catalyst', at: KA.cu, size: 34},
					{text: 'methanol condensed out', at: KA.cond, size: 34},
					{text: 'unused gas recycled', at: KA.rec, size: 34},
				]} />
				<GivensCard x={780} y={340} w={520} h={230} at={KA.student} lh={46} title="the student's claim" lines={[
					{text: '25 C and 500 atm', at: KA.a500, size: 36, color: COST},
					{text: 'for the highest yield', at: KA.hi, size: 34},
				]} />
				{lines.map(l => (
					<g key={l.label}>
						<Sx x={96} y={l.y} text={l.label} size={42} hand at={l.at} />
						<DrawPath d={`M96,${l.y + 14} L1000,${l.y + 14}`} at={l.at + 6} dur={20} color={INK_SOFT} width={3} />
						<Chip x={1030} y={l.y - 40} w={150} h={52} text="yield" size={30} at={l.at + 10} color={GREEN} />
						<Chip x={1200} y={l.y - 40} w={150} h={52} text="rate" size={30} at={l.at + 14} color={RATE} />
						<Chip x={1370} y={l.y - 40} w={150} h={52} text="limit" size={30} at={l.at + 18} color={COST} />
					</g>
				))}
				<Sx x={1330} y={420} text="Pause here to answer." size={58} color={AMBER_INK} hand at={KA.pause} />
				<Countdown start={hold.startFrame} end={hold.endFrame} x={1650} y={590} r={72} />
			</Overlay>
		</>
	);
};
void FONT_HAND; void YIELD; void clamp;
