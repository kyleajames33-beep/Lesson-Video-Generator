import React from 'react';
import {staticFile, useCurrentFrame} from 'remotion';
import {AMBER_INK, Countdown, DrawPath, FONT_HAND, HandText, INK, INK_SOFT, prog} from '../../kit';
import {cues} from '../../cues';
import {AnswerTable, Chip, Fade, Flame, HABER_EQ, MEOH_EQ, Overlay, Snowflake, Sx, eqLayout} from './parts';
import type {TRow} from './parts';
import {GivensCard} from '../chem-m5-c06/parts';
import {Heading, COLD, COST, HEAT, RATE, YIELD, GREEN, sc} from './common';
import {HAVE_TUG, HAVE_TUG_SCENE, TUG, TUG_NAT, TUG_PLATE_ICONS, TUG_SCENE, TUG_SCENE_NAT, TUG_SCENE_ROPE_Y} from './assets';

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
/**
 * Hand-drawn cartoon puller in the video's doodle style (ink outline, flat colour), drawn facing right with the
 * rope at local height ROPE_H; the right-hand puller is the mirror image. Local origin: back foot on the ground.
 */
const ROPE_H = 136;
type Look = {jumper: string; jeans: string; skin: string; hair: string; shoe: string; long?: boolean};
const Puller: React.FC<{x: number; ground: number; dir: 1 | -1; look: Look; lean: number}> = ({x, ground, dir, look, lean}) => {
	const ink = {stroke: INK, strokeWidth: 5, strokeLinejoin: 'round' as const, strokeLinecap: 'round' as const};
	const limb = (d: string, colour: string, w: number) => (
		<>
			<path d={d} stroke={INK} strokeWidth={w + 10} fill="none" strokeLinecap="round" strokeLinejoin="round" />
			<path d={d} stroke={colour} strokeWidth={w} fill="none" strokeLinecap="round" strokeLinejoin="round" />
		</>
	);
	return (
		<g transform={`translate(${x},${ground}) scale(${dir},1) rotate(${lean},0,0)`}>
			{limb('M44,-108 Q8,-70 -14,-8', look.jeans, 26)}
			{limb('M44,-108 Q100,-74 112,-8', look.jeans, 26)}
			<path d="M-34,-2 Q-36,-20 -12,-18 L8,-12 Q14,0 4,2 Z" fill={look.shoe} {...ink} />
			<path d="M96,-2 Q94,-20 118,-18 L138,-12 Q144,0 134,2 Z" fill={look.shoe} {...ink} />
			{limb(`M14,-184 Q60,-150 112,-${ROPE_H}`, look.jumper, 18)}
			<path d="M-14,-196 Q10,-212 34,-200 Q58,-150 66,-112 Q44,-96 20,-104 Q-2,-150 -14,-196 Z" fill={look.jumper} {...ink} />
			<path d="M20,-104 Q44,-98 66,-112" fill="none" stroke={INK} strokeWidth={3} opacity={0.5} />
			<circle cx={-6} cy={-232} r={27} fill={look.skin} {...ink} />
			{look.long
				? <path d="M-34,-238 Q-30,-266 -4,-262 Q22,-262 18,-240 Q4,-252 -12,-246 Q-26,-240 -30,-206 Q-44,-218 -34,-238 Z" fill={look.hair} {...ink} />
				: <path d="M-33,-236 Q-30,-264 -4,-262 Q22,-262 20,-240 Q6,-250 -10,-246 Q-24,-244 -33,-236 Z" fill={look.hair} {...ink} />}
			<circle cx={8} cy={-234} r={3} fill={INK} />
			<path d="M4,-218 Q10,-214 16,-218" fill="none" stroke={INK} strokeWidth={3} strokeLinecap="round" />
			{limb(`M22,-178 Q74,-160 136,-${ROPE_H + 2}`, look.jumper, 18)}
			<circle cx={112} cy={-ROPE_H} r={11} fill={look.skin} {...ink} />
			<circle cx={136} cy={-ROPE_H - 2} r={11} fill={look.skin} {...ink} />
		</g>
	);
};
const LEFT_LOOK: Look = {jumper: '#5b8fc4', jeans: '#6d86a8', skin: '#e8c4a3', hair: '#2b211b', shoe: '#f4f1ea'};
const RIGHT_LOOK: Look = {jumper: '#d9773f', jeans: '#8fa3bf', skin: '#8d5a3b', hair: '#241812', shoe: '#3a3a42', long: true};
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
/** Painted tug of war on one canvas: the whole picture sways with the pull and settles; the coded flag rides the rope. */
const TS = {x: 400, y: 200, w: 1120};
const TugScene: React.FC<{wob: number; flag: number; at: number; flagAt: number}> = ({wob, flag, at, flagAt}) => {
	const h = (TS.w / TUG_SCENE_NAT[0]) * TUG_SCENE_NAT[1];
	// The painted rope sags slightly to the right: its centre line is 0.385 of the canvas height at the middle and
	// drops about 0.029 of the height per full canvas width (measured from the alpha channel), so the pole foot follows it.
	const fx = (flag - TS.x) / TS.w;
	const ropeY = TS.y + h * (TUG_SCENE_ROPE_Y + (fx - 0.5) * 0.029);
	return (
		<>
			<Fade at={at}><image href={staticFile(TUG_SCENE)} x={TS.x + wob} y={TS.y} width={TS.w} height={h} /></Fade>
			<Fade at={flagAt}>
				<path d={`M${flag + wob},${ropeY} L${flag + wob},${ropeY - 82}`} stroke={INK} strokeWidth={6} strokeLinecap="round" />
				<path d={`M${flag + wob},${ropeY - 82} L${flag + wob + 70},${ropeY - 62} L${flag + wob},${ropeY - 42} Z`} fill="#f5c542" stroke={AMBER_INK} strokeWidth={4} strokeLinejoin="round" />
			</Fade>
		</>
	);
};
export const SceneAid: React.FC = () => {
	const f = useCurrentFrame();
	const settle = prog(f, K2.comp, 40);
	const wob = Math.sin((f - K2.when) * 0.28) * 8 * (1 - settle);
	const flag = 1105 + 220 * (1 - settle) * Math.sin((f - K2.comp) * 0.12); // settles where the curves cross
	const lx = 430 + wob, rx = 1490 - wob;
	const GROUND = 640;
	return (
		<>
			<div style={{position: 'absolute', left: 96, top: 78}}><HandText text="Haber is a compromise." at={K2.when} size={96} cps={26} /></div>
			<Overlay>
				{/* Yield and rate against temperature (owner, 16 Oct: a graph instead of a tug of war). Not to scale. */}
				<Fade at={K2.when + 10}>
					<path d="M400,620 L1560,620" stroke={INK} strokeWidth={5} strokeLinecap="round" />
					<path d="M1560,620 L1538,608 M1560,620 L1538,632" stroke={INK} strokeWidth={5} strokeLinecap="round" fill="none" />
					<path d="M400,620 L400,215" stroke={INK} strokeWidth={5} strokeLinecap="round" />
					<Sx x={1560} y={668} text="temperature" size={34} color={INK_SOFT} anchor="end" hand at={K2.when + 12} />
					<Sx x={1560} y={704} text="(not to scale)" size={26} color={INK_SOFT} anchor="end" at={K2.when + 16} />
					<Snowflake x={340} y={624} s={1.3} />
					<Flame x={1620} y={600} s={1.3} />
				</Fade>
				{/* yield falls as it gets hotter */}
				<DrawPath d="M420,262 C760,290 1120,470 1520,592" at={K2.yc} dur={34} color={COLD} width={9} />
				<Fade at={K2.yc + 6}>
					<Sx x={440} y={232} text="yield" size={60} color={COLD} hand at={K2.yc + 6} />
					<Sx x={600} y={232} text="asks for cold" size={34} color={COLD} hand at={K2.yc + 14} />
				</Fade>
				{/* rate rises as it gets hotter */}
				<DrawPath d="M420,598 C820,590 1140,450 1520,250" at={K2.sh} dur={34} color={HEAT} width={9} />
				<Fade at={K2.sh + 6}>
					<Sx x={1520} y={226} text="speed" size={60} color={HEAT} anchor="end" hand at={K2.sh + 6} />
					<Sx x={1360} y={226} text="asks for hot" size={34} color={HEAT} anchor="end" hand at={K2.sh + 14} />
				</Fade>
				{/* the compromise */}
				<Fade at={K2.comp}>
					<path d={`M${flag},612 L${flag},300`} stroke={AMBER_INK} strokeWidth={5} strokeDasharray="14 10" strokeLinecap="round" />
					<circle cx={flag} cy={620} r={11} fill="#f5c542" stroke={AMBER_INK} strokeWidth={4} />
					<circle cx={1105} cy={448} r={13} fill="none" stroke={AMBER_INK} strokeWidth={4} opacity={settle} />
					<Sx x={flag} y={286} text="about 450 C" size={52} color={AMBER_INK} anchor="middle" hand at={K2.comp} />
				</Fade>
				<Fade at={K2.mid}>
					<Sx x={1000} y={704} text="a middle temperature that gives the most" size={38} color={INK} anchor="middle" hand at={K2.mid} />
					<Sx x={1000} y={746} text="in the time available" size={38} color={INK} anchor="middle" hand at={K2.mid + 8} />
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
