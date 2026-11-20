// Y11 Chem WS V02 scenes 11 to 16: two HSC-style attempts (the whole card with a neutral painted picture from the
// first frame; ring full from "Pause here", 10 s countdown), brief feedback (navy givens strip, answers framed in
// green with ticks, one red crossed slip), the handoff (the final frame: lidded crucible, desiccator and blank
// balance at the left, the completed plan board at the right, the "Next" chip; chem-y11-ws-v03 opens on it) and the
// key notes with the framed memory card, cross-fading back to the final frame at the end.
import React from 'react';
import {Freeze, useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Givens, QTag} from '../chem-y11-m1-v01/s3';
import {BEAKER_S, CRU_K, CRU_L, CRU_LID, DESIC, WASTE, dur, hold, sc} from './common';
import {
	BalanceW, Card, Chip, Fade, Framed, GOLD_S, GOLD_T, GREEN_S, GREEN_T, Heading, INK, NAVY_T, PauseHoldR, PenArrow, PenRing, Plate, PlanBoard, RED_T, Rich, SVG, Sx, Tag, balW, plateMap, prog,
	richW,
} from './parts';
import type {Seg} from './parts';
import {MEMORY, fullSecs} from './s2';

const Q: React.FC<{lines: string[]; y0?: number; lh?: number; x?: number; size?: number}> = ({lines, y0 = 290, lh = 58, x = 140, size = 38}) => <>{lines.map((t, i) => <Rich key={i} x={x} y={y0 + i * lh} segs={[{t}]} size={size} weight={700} />)}</>;
/** A framed answer row (green box, tick) that lands on cue. */
const Ans: React.FC<{x?: number; y: number; segs: Seg[]; at: number; size?: number}> = ({x = 120, y, segs, at, size = 46}) => <Framed x={x} y={y} segs={segs} at={at} size={size} stroke={GREEN_S} />;

// ---------- 11. attempt 1 ----------
const K11 = cues(sc('attempt-1'), {turn: 'Your turn', pause: 'Pause here'});
export const SceneAttempt1: React.FC = () => {
	const bh = 380, bw = (bh / BEAKER_S.box[3]) * BEAKER_S.box[2];
	return (
		<SVG>
			<Heading text="Your turn" at={0} />
			<QTag />
			<Card h={700} />
			<Q lines={['A student investigates how the volume of water used affects the', 'salt recovered from a sand and salt mixture. Samples of 20.00 g', 'of the mixture are each stirred with 20, 40, 60 or 80 mL of water,', 'filtered, and the filtrate is evaporated to recover the salt.']} />
			<Q y0={560} lines={['(a)  Identify the independent and dependent variables.', '(b)  Identify TWO controlled variables, and justify why ONE of', '       them must be controlled.']} />
			<Sx x={140} y={800} text="(3 marks)" size={34} color={INK} weight={700} at={-1000} />
			<Plate p={BEAKER_S} x={1600 - bw / 2} y={330} h={bh} />
			<PauseHoldR h={hold('attempt-1')} at={K11.pause} x={140} y={936} cx={1100} cy={790} />
			{void K11.turn}
		</SVG>
	);
};

// ---------- 12. feedback 1 ----------
const K12 = cues(sc('feedback-1'), {iv: 'The independent variable', dv: 'The dependent variable', ctrl: 'Controlled variables include', mass: 'mass of mixture', temp: 'water temperature', stir: 'stirring time', dry: 'the drying', must: 'Temperature must', warmer: 'warmer water', change: 'change the result', writing: 'Writing', slip: 'classic slip', same: "what's kept the same"});
export const SceneFeedback1: React.FC = () => {
	const bh = 340, bw = (bh / BEAKER_S.box[3]) * BEAKER_S.box[2];
	const b1: Seg[] = [{t: '(b)  controls: '}, {t: 'mass of mixture (20.00 g), ', c: GOLD_T}, {t: 'water temperature,', c: GOLD_T, at: K12.temp}];
	const tx = 120 + 46 * 0.45 + richW(b1.slice(0, 2), 46);
	const tw2 = richW([b1[2]], 46);
	return (
		<SVG>
			<Heading text="Your turn" at={-1000} />
			<Givens segs={[{t: '20.00 g samples  |  20, 40, 60, 80 mL of water  |  filter, evaporate'}]} />
			<Plate p={BEAKER_S} x={1640 - bw / 2} y={320} h={bh} />
			<Ans y={360} segs={[{t: '(a)  IV: '}, {t: 'volume of water', c: NAVY_T}]} at={K12.iv + 10} />
			<Ans y={450} segs={[{t: '       DV: % of the mixture recovered as salt'}]} at={K12.dv + 10} />
			<Ans y={560} segs={b1} at={K12.mass} />
			<Ans y={650} segs={[{t: '       '}, {t: 'stirring time, ', c: GOLD_T, at: K12.stir}, {t: 'drying to constant mass', c: GOLD_T, at: K12.dry}]} at={K12.stir} />
			<PenRing cx={tx + tw2 / 2} cy={545} rx={tw2 / 2 + 22} ry={36} at={K12.must} color={GOLD_S} seed={4} />
			<Rich x={120} y={750} segs={[{t: 'warmer water dissolves a little more salt,'}]} size={40} at={K12.warmer} />
			<Rich x={120} y={798} segs={[{t: 'so it would change the result too'}]} size={40} at={K12.change - 8} />
			<Tag x={780} y={798} text="a second thing changing" at={K12.change + 6} color={GOLD_T} />
			<Chip x={120} y={830} segs={[{t: 'Controlled variable: the salt'}]} at={K12.writing} size={38} color={RED_T} strike={K12.slip} />
			<Tag x={720} y={880} text="what is kept the same?" at={K12.same} color={RED_T} />
		</SVG>
	);
};

// ---------- 13. attempt 2 ----------
const K13 = cues(sc('attempt-2'), {pause: 'Pause here'});
export const SceneAttempt2: React.FC = () => {
	const ch = 400, cw = (ch / CRU_L.box[3]) * CRU_L.box[2];
	return (
		<SVG>
			<Heading text="Last one" at={0} />
			<QTag />
			<Card h={700} />
			<rect x={128} y={228} width={1220} height={194} rx={14} fill="#eef2fa" stroke="rgba(36,64,122,0.45)" strokeWidth={3} />
			<Q y0={278} size={36} lh={54} lines={["Plan: 'Heat 2.50 g of blue copper sulfate crystals strongly, using a", 'roaring flame, so that the water leaves quickly. Weigh the powder.', "Then tip the leftover powder into the sink.'"]} />
			<Q y0={480} lines={['The plan aims to measure the percentage of water in the crystals.']} />
			<Q y0={556} lines={['(a)  Identify ONE problem with the validity of this plan.', '(b)  Identify ONE safety or ethical problem.', '(c)  Modify the plan to fix both problems.']} />
			<Sx x={140} y={800} text="(3 marks)" size={34} color={INK} weight={700} at={-1000} />
			<Plate p={CRU_L} x={1600 - cw / 2} y={420} h={ch} />
			<PauseHoldR h={hold('attempt-2')} at={K13.pause} x={140} y={936} cx={1100} cy={790} />
		</SVG>
	);
};

// ---------- 14. feedback 2 ----------
const K14 = cues(sc('feedback-2'), {strong: 'Strong heat', valid: "isn't valid", gases: 'irritating gases', use: 'So use', mass: 'constant mass', toxic: 'toxic to aquatic', waste: 'a waste container', adding: 'Adding', slip: 'classic slip', likelihood: 'the likelihood', control: 'a control'});
export const SceneFeedback2: React.FC = () => {
	const kh = 260, kw = (kh / CRU_K.box[3]) * CRU_K.box[2];
	const wh = 270, ww = (wh / WASTE.box[3]) * WASTE.box[2];
	return (
		<SVG>
			<Heading text="Last one" at={-1000} />
			<Givens segs={[{t: 'heat strongly, roaring flame  |  tip the powder into the sink  |  aim: % of water'}]} />
			<Plate p={CRU_K} x={1660 - kw / 2} y={280} h={kh} />
			<Sx x={1660} y={578} text="strong heat" size={30} color={INK} anchor="middle" weight={700} at={-1000} />
			<Ans y={360} segs={[{t: '(a)  strong heat breaks down CuSO_4: mass lost ≠ water only'}]} at={K14.strong + 20} />
			<Sx x={140} y={420} text="so the result isn't valid" size={34} color={INK} weight={700} at={K14.valid} />
			<Ans y={524} segs={[{t: '(b)  irritating gases'}]} at={K14.gases} />
			<Ans x={700} y={524} segs={[{t: 'toxic to aquatic life: not the sink'}]} at={K14.toxic} />
			<Ans y={630} segs={[{t: '(c)  small gentle flame, heat to constant mass'}]} at={K14.use + 8} />
			<Ans y={720} segs={[{t: '       residue into a labelled waste container'}]} at={K14.waste} />
			<Plate p={WASTE} x={1660 - ww / 2} y={610} h={wh} at={K14.waste - 6} dy={16} />
			<Chip x={120} y={790} segs={[{t: 'Be careful.'}]} at={K14.adding} size={40} color={RED_T} strike={K14.slip} />
			<Tag x={460} y={836} text="changes neither likelihood nor harm" at={K14.likelihood - 4} color={RED_T} />
			{void K14.mass}{void K14.control}
		</SVG>
	);
};

// ---------- 15. conclusion and handoff (the final frame; chem-y11-ws-v03 opens on it) ----------
const K15 = cues(sc('conclusion-handoff'), {valid: 'a valid plan', repeating: 'Repeating the whole', equip: 'Equipment, risks', next: 'Next, we carry', how: 'How do we', accurately: 'accurately'});
export const HANDOFF_LAYOUT = {
	crucible: {x: 96, y: 326, h: 480}, desiccator: {x: 420, y: 406, h: 400}, balance: {x: 800, w: 340}, bench: 808,
	board: {x: 1170, y: 178, w: 654, h: 674}, chip: {x: 96, y: 866, size: 38},
};
const HL = HANDOFF_LAYOUT;
const BALF = balW(HL.balance.x, 0, HL.balance.w);
const BALF2 = balW(HL.balance.x, HL.bench - BALF.h, HL.balance.w);
export const SceneHandoff: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<SVG>
			<Rich x={96} y={150} segs={MEMORY} size={46} hand weight={700} />
			<Plate p={CRU_LID} x={HL.crucible.x} y={HL.crucible.y} h={HL.crucible.h} at={4} dy={20} />
			<Plate p={DESIC} x={HL.desiccator.x} y={HL.desiccator.y} h={HL.desiccator.h} at={12} dy={20} />
			<BalanceW g={BALF2} text="– . – – g" size={40} at={20} />
			<line x1={96} x2={1140} y1={HL.bench} y2={HL.bench} stroke={INK} strokeWidth={5} strokeLinecap="round" opacity={prog(f, 4, 12)} />
			<PlanBoard {...HL.board} tsize={32} lh={37} gap={10} secs={fullSecs({valid: [K15.valid, K15.repeating - 4], reliable: [K15.repeating, K15.equip - 4], equipment: [K15.equip, K15.next - 4], safe: [K15.equip + 10, K15.next - 4]})} />
			<Chip x={HL.chip.x} y={HL.chip.y} segs={[{t: 'Next: How do we collect and source chemistry data safely and accurately?'}]} at={K15.accurately - 24} size={HL.chip.size} color={NAVY_T} />
			{void K15.how}{void BALF}
		</SVG>
	);
};

// ---------- 16. key notes (cross-fades back to the final frame at the end) ----------
const NOTES: Seg[][][] = [
	[[{t: 'Valid: ', c: '#0b625d'}, {t: 'measures what it claims.'}], [{t: 'Reliable: ', c: '#5b3f94'}, {t: 'repeats agree.'}]],
	[[{t: 'Change one (independent), measure one', c: NAVY_T}], [{t: '(dependent), control the rest.', c: NAVY_T}]],
	[[{t: 'Experimental control: a run without the thing tested.'}]],
	[[{t: 'Equipment fine enough for the change.'}], [{t: 'A control lowers a risk.', c: GREEN_T}]],
	[[{t: 'No toxic waste in the sink. Record every'}], [{t: 'reading. New evidence can change the plan.'}]],
];
export const SceneNotes: React.FC = () => {
	const f = useCurrentFrame();
	const D = dur('key-notes');
	const back = prog(f, D - 40, 30);
	let y = 300;
	const rows = NOTES.map((lines, i) => {
		const y0 = y;
		y += lines.length * 48 + 26;
		return (
			<Fade key={i} at={i * 3}>
				<circle cx={112} cy={y0 - 12} r={8} fill="#e8a33d" />
				{lines.map((l, kk) => <Rich key={kk} x={140} y={y0 + kk * 48} segs={l} size={36} weight={700} />)}
			</Fade>
		);
	});
	const ch = 300, cw = (ch / CRU_LID.box[3]) * CRU_LID.box[2];
	return (
		<>
			<SVG>
				<g opacity={1 - back}>
					<Sx x={96} y={150} text="Key notes: what to write in your book" size={60} color={INK} hand weight={700} at={-1000} />
					<Sx x={96} y={214} text="Pause the video if you need more time to copy." size={38} color={GOLD_T} weight={700} at={-1000} />
					{rows}
					<Fade at={6}>
						<rect x={1080} y={280} width={744} height={600} rx={22} fill="#fffdf8" stroke={NAVY_T} strokeWidth={5} />
						<Sx x={1110} y={324} text="memory aid" size={30} color={INK} hand at={-1000} />
						<Rich x={1112} y={404} segs={[MEMORY[0], MEMORY[1]]} size={50} hand weight={700} />
						<Rich x={1112} y={470} segs={[MEMORY[2]]} size={50} hand weight={700} />
						<Rich x={1112} y={536} segs={[MEMORY[3]]} size={50} hand weight={700} />
						<Plate p={CRU_LID} x={1452 - cw / 2} y={566} h={ch} />
					</Fade>
				</g>
			</SVG>
			{back > 0.005 ? <div style={{position: 'absolute', inset: 0, opacity: back}}><Freeze frame={dur('conclusion-handoff') - 1}><SceneHandoff /></Freeze></div> : null}
			{void BALF}{void PenArrow}{void GOLD_S}{void plateMap}
		</>
	);
};
