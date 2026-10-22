// M7 B05 scenes 7 to 11: the evidence (the race strip: a day line with ticks at day 0, 1, 3, 5 and 9 only; two rows,
// scarlet banksia above and old man banksia below, each seedling stepping to the reported ticks and crossfading to its
// observed state, leaving grey ghosts behind); what it shows (callose chips, the held bracket, a separate fast damage
// bar, the crossed "hyphae outran the defence?" chip, a grey hairpin banksia row); the limits (grey limit chips, the
// tolerant seedling, the crossed "never met it, so no defence" chip, the myrtle rust callback); control that matches
// (the station, a closed track, phosphite on the dying banksia over infested soil, a mini strip and ladder); memory.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Overlay} from '../bio-m5-b13/shared';
import {S} from './common';
import {
	AMBER, AMBER_INK, CTag, CardBox, ClockMark, CrossChip, DayLine, DrawPath, FEAT, GREEN, GREYT, GREY_INK, GTag, Glow, GrowBar, INK, INK_SOFT, LAD, Ladder, PLATES, Pl,
	PlateB, RS, Ring, SEED_H, Seedling, SoilBand, Sx, TEAL, TERRA, dayX, fitW, lerp, plH, prog, ptOf, pulse, rungY, seedW, smooth, vis,
} from './parts';
import type {Pt, Rung} from './parts';

// ---------- the race rows ----------
export const TOP_Y = 330, BOT_Y = 650;
type RaceT = {rows: number; top: number; bot: number; d1: number; d5: number; d3: number; d9: number};
const ALL: RaceT = {rows: -100, top: -100, bot: -100, d1: -100, d5: -100, d3: -100, d9: -100};
/** A seedling that steps between day ticks: `steps` lists [frame, day]; it moves over 20 frames at each step. */
const stepX = (f: number, steps: [number, number][]) => {
	let x = dayX(steps[0][1]);
	for (let i = 1; i < steps.length; i++) x = lerp(x, dayX(steps[i][1]), smooth(prog(f, steps[i][0], 20)));
	return x;
};
export const RaceRows: React.FC<{t: RaceT; topDim?: number; botDim?: number; o?: number; topGlow?: number; botGlow?: number; speciesGlow?: number}> = ({t, topDim = 0, botDim = 0, o = 1, topGlow = 0, botGlow = 0, speciesGlow = 0}) => {
	const f = useCurrentFrame();
	const rowsO = prog(f, t.rows, 16);
	if (rowsO <= 0.01 || o <= 0.01) return null;
	const sw = seedW();
	const gy = (y: number) => y + SEED_H / 2 + 6;
	const topX = stepX(f, [[0, 0], [t.d1, 1], [t.d5, 5]]);
	const botX = stepX(f, [[0, 0], [t.d3, 3], [t.d9, 9]]);
	const tipT = prog(f, t.d1 + 8, 20), deadT = prog(f, t.d5 + 10, 24);
	const heldT = 0.4 * prog(f, t.d3 + 8, 20) + 0.6 * prog(f, t.d9 + 10, 24);
	const ghost = (at: number) => 0.4 * prog(f, at + 6, 14);
	return (
		<g opacity={o * rowsO}>
			{[TOP_Y, BOT_Y].map(y => <line key={y} x1={RS.x0 - 50} x2={dayX(9) + 70} y1={gy(y)} y2={gy(y)} stroke={GREYT} strokeWidth={2.5} strokeDasharray="6 8" />)}
			<Glow x={250} y={TOP_Y} r={120} o={speciesGlow} color={TEAL} />
			<Glow x={250} y={BOT_Y} r={120} o={speciesGlow} color={TEAL} />
			<Pl p={PLATES.coccinea} cx={250} cy={TOP_Y - 10} w={fitW(PLATES.coccinea, 210, 200)} o={prog(f, t.top, 14)} dim={topDim * 0.6} />
			<Pl p={PLATES.serrata} cx={250} cy={BOT_Y - 10} w={fitW(PLATES.serrata, 210, 200)} o={prog(f, t.bot, 14)} dim={botDim * 0.6} />
			<GTag x={250} y={TOP_Y + 104} text="scarlet banksia, WA" at={t.top + 6} anchor="middle" />
			<GTag x={250} y={BOT_Y + 104} text="old man banksia, NSW" at={t.bot + 6} anchor="middle" />
			{/* ghosts at the ticks already passed */}
			<Seedling id="b05-g-t0" cx={dayX(0)} cy={TOP_Y} o={ghost(t.d1)} dim={1} />
			<Seedling id="b05-g-t1" cx={dayX(1)} cy={TOP_Y} o={ghost(t.d5)} tip={1} dim={1} />
			<Seedling id="b05-g-b0" cx={dayX(0)} cy={BOT_Y} o={ghost(t.d3)} dim={1} />
			<Seedling id="b05-g-b3" cx={dayX(3)} cy={BOT_Y} o={ghost(t.d9)} held={0.4} dim={1} />
			<Seedling id="b05-top" cx={topX} cy={TOP_Y} tip={tipT} dead={deadT} dim={topDim} glow={topGlow} />
			<Seedling id="b05-bot" cx={botX} cy={BOT_Y} held={heldT} dim={botDim} glow={botGlow} />
			{void sw}
		</g>
	);
};

// ---------- 7. The evidence: two banksias ----------
const K7 = cues(S('evidence'), {study: 'In a 1998 study', seedlings: 'banksia seedlings', scarlet: 'In scarlet banksia', tips: 'root tips were dead', stem: "reached the seedling's stem", callose: 'Callose was laid', oldman: 'In old man banksia', three: 'started on day three', nine: 'by day nine'});
export const RACE7: RaceT = {rows: K7.seedlings, top: K7.seedlings + 6, bot: K7.seedlings + 14, d1: K7.tips, d5: K7.stem, d3: K7.three, d9: K7.nine};
export const SceneEvidence: React.FC = () => {
	const f = useCurrentFrame();
	const topOn = vis(f, K7.scarlet, K7.oldman, 12), botOn = prog(f, K7.oldman, 12);
	const band = (y: number, o: number) => (o > 0.01 ? <rect x={110} y={y - 160} width={1730} height={320} rx={26} fill="#fff3d9" opacity={0.6 * o} /> : null);
	return (
		<Overlay>
			{band(TOP_Y, topOn)}
			{band(BOT_Y, botOn)}
			<DayLine at={K7.study} />
			<GTag x={1840} y={170} text="Tynan, Scott and Sedgley, 1998" at={K7.study + 10} anchor="end" />
			<RaceRows t={RACE7} topDim={prog(f, K7.oldman, 12)} botDim={vis(f, K7.scarlet, K7.oldman, 12)} />
			<GTag x={dayX(5) + 90} y={TOP_Y - 40} text="day 5: stem reached" at={K7.stem + 30} />
			<CTag x={1660} y={TOP_Y - 30} text="callose late" at={K7.callose} color={AMBER_INK} size={30} dim={prog(f, K7.oldman, 10)} />
			<GTag x={dayX(9) - 90} y={BOT_Y + 150} text="day 9: under halfway up" at={K7.nine + 34} anchor="end" />
		</Overlay>
	);
};

// ---------- 8. What it shows: timing ----------
const K8 = cues(S('timing'), {both: 'Both species laid', timing: 'The clearest difference', held: 'something held the damage', rapid: 'rapid root damage', later: 'later callose deposition', notshow: 'do not show', outran: 'outran the defence', hairpin: 'hairpin banksia'});
export const SceneTiming: React.FC = () => {
	const f = useCurrentFrame();
	const by = BOT_Y + SEED_H / 2 + 26;
	const later = pulse(f, K8.later, 40);
	return (
		<Overlay>
			<DayLine at={-100} bright={prog(f, K8.timing, 12)} />
			<GTag x={1840} y={170} text="Tynan, Scott and Sedgley, 1998" at={-100} anchor="end" />
			<RaceRows t={ALL} />
			<g transform={`translate(${1660 + 0},${TOP_Y - 30}) scale(${1 + 0.1 * later}) translate(${-1660},${-(TOP_Y - 30)})`}>
				<CTag x={1660} y={TOP_Y - 30} text="callose late" at={-100} color={AMBER_INK} size={30} dim={vis(f, K8.timing, K8.later, 10)} />
			</g>
			<CTag x={1660} y={BOT_Y - 30} text="callose" at={K8.both + 10} color={TEAL} size={30} dim={prog(f, K8.timing, 10)} />
			{f >= K8.timing + 10 ? <DrawPath d={`M${dayX(3)},${by - 14} L${dayX(3)},${by} L${dayX(9)},${by} L${dayX(9)},${by - 14}`} at={K8.timing + 10} dur={18} color={TEAL} width={5} /> : null}
			<Sx x={(dayX(3) + dayX(9)) / 2} y={by + 40} text="damage held: lower root" size={32} color={TEAL} hand anchor="middle" at={K8.held} opacity={1 - 0.55 * prog(f, K8.rapid, 10)} />
			<GrowBar x={dayX(1)} y={TOP_Y + SEED_H / 2 + 18} w={dayX(5) - dayX(1)} h={18} at={K8.rapid} color={AMBER} />
			<Sx x={dayX(1) - 24} y={TOP_Y + SEED_H / 2 + 38} text="root damage: fast" size={32} color={AMBER_INK} hand anchor="end" at={K8.rapid + 8} opacity={1 - 0.55 * prog(f, K8.notshow, 10)} />
			<CrossChip x={dayX(1) - 40} y={150} text="hyphae outran the defence?" at={K8.notshow} cross={K8.outran + 10} size={30} out={K8.hairpin} />
			{f >= K8.hairpin ? <line x1={RS.x0 - 50} x2={dayX(9) + 70} y1={905} y2={905} stroke={GREYT} strokeWidth={2.5} strokeDasharray="6 8" opacity={prog(f, K8.hairpin, 12)} /> : null}
			<GTag x={RS.x0 - 40} y={870} text="hairpin banksia: entry delayed" at={K8.hairpin + 8} />
		</Overlay>
	);
};

// ---------- 9. The limits of the evidence ----------
const K9 = cues(S('limits'), {seedlings: 'used seedlings a few', lab: 'in a lab', tolerant: "Tolerant isn't immune", adult: 'Adult plants', overseas: 'probably arrived from overseas', yet: 'Yet old man banksia', held: 'held it back'});
export const SceneLimits: React.FC = () => {
	const f = useCurrentFrame();
	const dimAll = smooth(prog(f, 0, 20));
	const chips = [{at: K9.seedlings, t: 'seedlings, a few weeks old'}, {at: K9.lab, t: 'lab, one study'}, {at: K9.adult, t: 'field adults may differ'}];
	return (
		<Overlay>
			<g opacity={1 - 0.55 * dimAll}>
				<DayLine at={-100} />
			</g>
			<RaceRows t={ALL} topDim={dimAll * 0.8} botDim={dimAll * 0.8 * (1 - vis(f, K9.tolerant, K9.adult, 12))} botGlow={pulse(f, K9.tolerant + 6, 60)} speciesGlow={pulse(f, K9.overseas, 60)} />
			{chips.map((c, i) => <GTag key={c.t} x={1380} y={150 + i * 60} text={c.t} at={c.at} size={28} />)}
			<CTag x={RS.x0} y={BOT_Y + 160} text="tolerant: survives infection with limited damage" at={K9.tolerant + 10} color={TEAL} size={32} maxW={900} dim={prog(f, K9.overseas, 10)} />
			<GTag x={1380} y={336} text="introduced: probably from overseas" at={K9.overseas + 10} size={26} />
			<CrossChip x={1380} y={400} text="never met it, so no defence" at={K9.yet} cross={K9.held + 6} caption="old man banksia held it" size={28} />
			<Pl p={PLATES.myrtle} cx={1780} cy={770} w={170} o={prog(f, K9.overseas + 20, 14)} />
			<GTag x={1880} y={830} text="myrtle rust: little resistance in many species" at={K9.overseas + 26} size={22} anchor="end" />
		</Overlay>
	);
};

// ---------- 10. Control that matches ----------
const K10 = cues(S('control'), {hygiene: 'Hygiene stops', tracks: 'closing tracks', phosphite: 'phosphite can be', remove: "doesn't remove", wall: 'wall it off faster'});
const BP = {cx: 1250, cy: 480, w: 340};
export const SceneControl: React.FC = () => {
	const f = useCurrentFrame();
	const st = ptOf(PLATES.banksiaSick, BP.cx, BP.cy, BP.w, FEAT.stem);
	const ph = plH(PLATES.banksiaSick, BP.w);
	const soilTop = BP.cy + ph / 2 - ph * 0.26;
	const mini = {x0: 1010, dx: 62, y: 960};
	const mX = (d: number) => mini.x0 + d * mini.dx;
	const rungs: Rung[] = [
		{at: -100, label: 'barriers: always there', labelAt: -100},
		{at: -100, label: 'switched on after detection', labelAt: -100, lit: prog(f, K10.wall + 10, 12)},
		{at: -100, label: 'firebreak: cells die', labelAt: -100},
	];
	return (
		<Overlay>
			<Pl p={PLATES.station} cx={360} cy={460} w={440} o={prog(f, K10.hygiene, 16)} />
			<CTag x={110} y={720} text="hygiene: stop soil moving" at={K10.hygiene + 8} color={TEAL} size={32} dim={prog(f, K10.phosphite, 10)} />
			{f >= K10.tracks ? <DrawPath d="M640,800 C700,700 640,600 720,520 S860,380 880,300" at={K10.tracks} dur={22} color={INK_SOFT} width={7} dash="14 10" /> : null}
			{f >= K10.tracks + 20 ? <DrawPath d="M690,600 L790,560" at={K10.tracks + 20} dur={8} color={GREY_INK} width={14} /> : null}
			<GTag x={600} y={830} text="close tracks when wet" at={K10.tracks + 24} />
			<SoilBand x0={1030} x1={1480} y0={soilTop} y1={soilTop + ph * 0.28} at={K10.phosphite} specksAt={K10.remove} n={16} />
			<Pl p={PLATES.banksiaSick} cx={BP.cx} cy={BP.cy} w={BP.w} o={prog(f, K10.phosphite, 16)} />
			{f >= K10.phosphite + 14 ? <g opacity={prog(f, K10.phosphite + 14, 10)}><line x1={st[0] - 30} x2={st[0] + 30} y1={st[1]} y2={st[1]} stroke={TEAL} strokeWidth={7} strokeLinecap="round" /><circle cx={st[0] + 30} cy={st[1]} r={9} fill={TEAL} /></g> : null}
			<GTag x={st[0] + 50} y={st[1] - 22} text="phosphite" at={K10.phosphite + 18} />
			<GTag x={1500} y={soilTop + 20} text="still in the soil" at={K10.remove + 16} />
			<g opacity={prog(f, K10.wall, 14)}>
				<line x1={mX(0) - 20} x2={mX(9) + 30} y1={mini.y} y2={mini.y} stroke={GREYT} strokeWidth={3} />
				{[0, 1, 3, 5, 9].map(d => <line key={d} x1={mX(d)} x2={mX(d)} y1={mini.y - 8} y2={mini.y + 8} stroke={GREYT} strokeWidth={3} />)}
				<path d={`M${mX(3)},${mini.y - 30} L${mX(3)},${mini.y - 20} L${mX(9)},${mini.y - 20} L${mX(9)},${mini.y - 30}`} fill="none" stroke={TEAL} strokeWidth={5} />
			</g>
			<Ladder rungs={rungs} x={1640} y={170} s={0.5} o={prog(f, K10.wall, 14)} />
			<CTag x={1010} y={990} text="faster walls: plant's own defence" at={K10.wall + 12} color={TEAL} size={32} />
			{void LAD}{void rungY}{void TERRA}{void lerp}
		</Overlay>
	);
};

// ---------- 11. Memory ----------
const K11 = cues(S('memory'), {hr: 'the hypersensitive response', dead: 'Dead cells around', feed: 'nothing to feed', speed: 'speed decides'});
export const SceneMemory: React.FC = () => {
	const f = useCurrentFrame();
	const DR = {cx: 960, cy: 640, w: 400};
	return (
		<Overlay>
			<CardBox x={240} y={190} w={1440} h={150} at={K11.hr - 6} />
			<Sx x={960} y={290} text="The hypersensitive response is a firebreak." size={70} color={INK} hand anchor="middle" at={K11.hr} />
			<PlateB p={PLATES.deadRing} cx={DR.cx} cy={DR.cy} w={DR.w} o={prog(f, K11.dead, 16)} id="b05-s11-ring" />
			<GTag x={DR.cx + DR.w / 2 + 40} y={600} text="nothing living to feed on" at={K11.feed} />
			<ClockMark x={DR.cx + DR.w / 2 + 80} y={740} at={K11.speed} />
			<Sx x={DR.cx + DR.w / 2 + 130} y={752} text="speed decides" size={36} color={AMBER_INK} hand at={K11.speed + 6} />
			{void GREEN}{void AMBER}{void Ring}{void TEAL}
		</Overlay>
	);
};
