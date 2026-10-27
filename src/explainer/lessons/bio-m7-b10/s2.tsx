// M7 B10 scenes 5 to 8: a route hygiene can't break (measles particles drift in a room's air and outlast the infected
// host; the sink's break mark sits under them), isolation (the bed and a room outline at "leave"; the case timeline
// shows infectious days before the rash), contact tracing and quarantine (three contact circles, one immune; the sign
// with a dashed break; incubation and quarantine windows on the timeline; one contact moves into isolation), and
// border quarantine (cargo, the airport bin, post-entry quarantine and the 2020 quarantine; no people, plane or hotel).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Heading, Overlay} from '../bio-m5-b13/shared';
import {S} from './common';
import {PLATES} from './assets';
import {
	AMBER, AMBER_INK, Board, BreakMark, CH, CTag, DashBreak, DrawPath, Drift, GREYT, GREY_INK, GTag, HEAD, INK_SOFT, MistakeChip, Pl, PlainArrow, ST_PLATE, SX, SignText, Sx, TEAL,
	TERRA, TLBr, Timeline, boardPt, clamp01, fitW, lerp, prog, pulse, smooth, tlx, vis,
} from './parts';
import type {BoardP, BoardPlate, Pt, TL} from './parts';

// ---------- 5. A route hygiene can't break ----------
const K5 = cues(S('air-route'), {but: "But hygiene can't", air: 'spreads through the', breathes: 'breathes out tiny', hours: 'up to two', washing: 'Washing your hands', apart: 'keep people apart', immune: 'make them immune'});
export const SceneAirRoute: React.FC = () => {
	const f = useCurrentFrame();
	const gone = prog(f, K5.hours + 30, 30);
	const plates: BoardPlate[] = [{p: PLATES.bed, at: ST_PLATE[0], w: 160, h: 100, dim: 0.6}, {p: PLATES.vial, at: ST_PLATE[3], w: 150, h: 100, dim: 0.6}];
	const sinkY = lerp(620, 548, smooth(prog(f, K5.washing, 20)));
	const bar = smooth(prog(f, K5.hours + 4, 40));
	return (
		<>
			<Heading text={HEAD} at={-100} size={52} />
			<Overlay>
				<Board stLit={[vis(f, K5.apart, undefined, 10), 0, 0]} st4Glow={pulse(f, K5.immune + 2, 40)} leftGone={gone} plates={plates}>
					{f >= K5.hours ? <rect x={190} y={360} width={900} height={230} rx={18} fill="none" stroke={GREYT} strokeWidth={3} strokeDasharray="14 10" opacity={prog(f, K5.hours, 12)} /> : null}
					<Drift sx={CH.lx + 60} sy={CH.y - 6} x1={1060} band={40} at={K5.air + 4} n={26} period={170} />
					<Pl p={PLATES.sink} cx={SX[1]} cy={sinkY} w={fitW(PLATES.sink, 120, 90)} o={prog(f, K5.washing, 12)} />
					<BreakMark x={SX[1] + 90} y={CH.y + 24} h={50} at={K5.washing + 18} />
				</Board>
				<Pl p={PLATES.measles} cx={140} cy={260} w={150} o={prog(f, K5.air - 10, 14)} />
				<GTag x={30} y={346} text="measles virus, drawn far larger than real" at={K5.air} size={15} />
				<GTag x={SX[1] - 40} y={CH.y - 76} text="air" at={K5.air + 14} size={22} />
				{bar > 0.001 ? (
					<g>
						<rect x={560} y={700} width={500} height={22} rx={11} fill="#f3f2ee" stroke={GREYT} strokeWidth={2} />
						<rect x={560} y={700} width={500 * bar} height={22} rx={11} fill="#9aa9b0" />
						{[0, 1, 2].map(h => <Sx key={h} x={560 + h * 250} y={750} text={`${h}`} size={20} color={GREY_INK} weight={600} anchor="middle" at={-100} />)}
						<Sx x={560} y={790} text="hours the virus can stay in a room's air" size={22} color={GREY_INK} weight={600} at={-100} />
					</g>
				) : null}
				<CTag x={1180} y={700} text="hygiene misses the air route" at={K5.washing + 26} color={AMBER_INK} size={28} />
				<MistakeChip x={1180} y={790} text="hygiene stops every disease" at={K5.washing + 40} cross={K5.washing + 60} size={26} />
				{void K5.but}{void K5.breathes}{void TEAL}
			</Overlay>
		</>
	);
};

// ---------- scenes 6 and 7: the board scaled to the top ----------
const BS: BoardP = {s: 0.72, ox: 60, oy: -10};
const caseC: Pt = boardPt(BS, [CH.lx, CH.y]);
const ROOM = {x: 180, y: 300, w: 440, h: 300};
const TLC: TL = {x0: 260, x1: 1660, y: 900, days: 21};
const roomScreen = () => ({x: boardPt(BS, [ROOM.x, ROOM.y])[0], y: boardPt(BS, [ROOM.x, ROOM.y])[1], w: ROOM.w * BS.s!, h: ROOM.h * BS.s!});
/** The rash marker on the timeline (coded red dots above a tick). */
const Rash: React.FC<{d: number; at: number}> = ({d, at}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 12);
	if (o <= 0.01) return null;
	const x = tlx(TLC, d);
	return (
		<g opacity={o}>
			{[[-10, -16], [6, -22], [12, -10], [-4, -6], [0, -30]].map(([dx, dy], i) => <circle key={i} cx={x + dx} cy={TLC.y + dy} r={5} fill="#c4432f" />)}
			<Sx x={x} y={TLC.y - 44} text="rash" size={22} color="#9e2a22" weight={700} anchor="middle" at={-100} />
		</g>
	);
};
const IsoRoom: React.FC<{at: number; o?: number}> = ({at, o = 1}) => {
	const f = useCurrentFrame();
	if (f < at || o <= 0.01) return null;
	const d = `M${ROOM.x + 80},${ROOM.y} L${ROOM.x},${ROOM.y} L${ROOM.x},${ROOM.y + ROOM.h} L${ROOM.x + ROOM.w},${ROOM.y + ROOM.h} L${ROOM.x + ROOM.w},${ROOM.y} L${ROOM.x + 160},${ROOM.y}`;
	return (
		<g opacity={o}>
			<DrawPath d={d} at={at} dur={24} color={AMBER_INK} width={5} />
			<line x1={ROOM.x + 80} x2={ROOM.x + 150} y1={ROOM.y} y2={ROOM.y - 30} stroke={AMBER_INK} strokeWidth={5} opacity={prog(f, at + 20, 8)} />
		</g>
	);
};

// ---------- 6. Isolation ----------
const K6 = cues(S('isolation'), {called: 'is called isolation', until: 'until four days', catch: "there's a catch", infectious: "They're infectious from", before: 'four days before', knows: 'anyone knows'});
export const SceneIsolation: React.FC = () => {
	const f = useCurrentFrame();
	const z = smooth(prog(f, 0, 26));
	const plates: BoardPlate[] = [{p: PLATES.bed, at: ST_PLATE[0], w: lerp(160, 190, z), h: 120}, {p: PLATES.vial, at: ST_PLATE[3], w: 150, h: 100, dim: 0.6}];
	return (
		<>
			<Heading text={HEAD} at={-100} size={52} />
			<Overlay>
				<Board s={lerp(1, BS.s!, z)} ox={lerp(0, BS.ox!, z)} oy={lerp(0, BS.oy!, z)} stLit={[1, 0, 0]} plates={plates}>
					<IsoRoom at={K6.called + 6} />
					<Drift sx={CH.lx + 60} sy={CH.y - 6} x1={ROOM.x + ROOM.w - 10} band={30} at={-100} n={14} period={110} o={0.8} />
				</Board>
				<CTag x={1330} y={220} text="isolation: separating people who are infected" at={K6.called + 10} color={AMBER_INK} size={28} maxW={520} dim={prog(f, K6.catch, 10)} />
				<Timeline t={TLC} at={K6.until - 10} />
				<Rash d={14} at={K6.until + 10} />
				<TLBr t={TLC} d0={14} d1={18} y={TLC.y - 70} label="isolated" at={K6.until + 24} color={AMBER_INK} />
				<TLBr t={TLC} d0={10} d1={18} y={TLC.y - 130} label="infectious" at={K6.before} color={TERRA} />
				<TLBr t={TLC} d0={10} d1={14} y={TLC.y - 130} at={K6.knows - 10} color={TERRA} fill={1} />
				<CTag x={tlx(TLC, 4)} y={TLC.y - 230} text="spreads before anyone knows" at={K6.knows} color={TERRA} size={28} />
				{f >= K6.knows + 6 ? <PlainArrow x1={tlx(TLC, 9.4)} y1={TLC.y - 176} x2={tlx(TLC, 11.4)} y2={TLC.y - 120} at={K6.knows + 6} color={TERRA} width={3.5} /> : null}
				{void K6.infectious}{void caseC}
			</Overlay>
		</>
	);
};

// ---------- 7. Contact tracing and quarantine ----------
const K7 = cues(S('quarantine'), {traced: 'are traced', tracing: 'contact tracing', some: 'Some contacts who', immune: "aren't immune", quar: 'need quarantine', kept: "They're kept away", lasts: 'Quarantine lasts about', incub: 'incubation period', eighteen: 'up to about', move: 'move into isolation'});
const CONTACTS: Pt[] = [[150, 560], [300, 600], [450, 560]];
export const SceneQuarantine: React.FC = () => {
	const f = useCurrentFrame();
	const plates: BoardPlate[] = [{p: PLATES.bed, at: ST_PLATE[0], w: 190, h: 120}, {p: PLATES.vial, at: ST_PLATE[3], w: 150, h: 100, dim: 0.6}];
	const rm = roomScreen();
	const mv = smooth(prog(f, K7.move + 4, 26));
	const into: Pt = [rm.x + rm.w * 0.78, rm.y + rm.h * 0.62];
	const sign: Pt = [640, 560];
	const signW = 170;
	return (
		<>
			<Heading text={HEAD} at={-100} size={52} />
			<Overlay>
				<Board {...BS} stLit={[1, 0, 0]} plates={plates}>
					<IsoRoom at={-100} />
					<Drift sx={CH.lx + 60} sy={CH.y - 6} x1={ROOM.x + ROOM.w - 10} band={30} at={-100} n={14} period={110} o={0.8} />
				</Board>
				{CONTACTS.map((c, i) => {
					const o = prog(f, K7.traced + i * 6, 12);
					if (o <= 0.01) return null;
					const immune = i === 0 ? prog(f, K7.immune + 4, 10) : 0;
					const sick = i === 2 ? prog(f, K7.move, 10) : 0;
					const p: Pt = i === 2 ? [lerp(c[0], into[0], mv), lerp(c[1], into[1], mv)] : c;
					return (
						<g key={i} opacity={o}>
							<line x1={p[0]} y1={p[1] - 30} x2={caseC[0]} y2={caseC[1] + 60} stroke={GREYT} strokeWidth={2.5} strokeDasharray="5 7" opacity={1 - mv * (i === 2 ? 1 : 0)} />
							{sick > 0.01 ? <circle cx={p[0]} cy={p[1]} r={46} fill={AMBER} opacity={0.22 * sick} /> : null}
							<circle cx={p[0]} cy={p[1]} r={32} fill={sick > 0.5 ? '#f6c35a' : '#f4efe4'} stroke={sick > 0.5 ? AMBER_INK : INK_SOFT} strokeWidth={3} />
							{immune > 0.01 ? <circle cx={p[0]} cy={p[1]} r={40} fill="none" stroke={TEAL} strokeWidth={5} opacity={immune} /> : null}
						</g>
					);
				})}
				<GTag x={60} y={650} text="contacts" at={K7.traced + 20} out={K7.quar} size={22} />
				<GTag x={60} y={650} text="immune: released" at={K7.immune + 10} out={K7.lasts} size={20} />
				<Pl p={PLATES.sign} cx={sign[0]} cy={sign[1]} w={signW} o={prog(f, K7.quar + 4, 12)} />
				<SignText cx={sign[0]} cy={sign[1]} w={signW} text="quarantine" o={prog(f, K7.quar + 12, 12)} />
				<DashBreak x={530} y={580} h={110} at={K7.quar + 18} />
				<CTag x={1330} y={220} text="contact tracing: finding who was exposed" at={K7.tracing + 6} color={INK_SOFT} size={26} maxW={520} dim={prog(f, K7.quar, 10)} out={K7.quar + 30} />
				<CTag x={1330} y={220} text="quarantine: separating people who were exposed but aren't sick" at={K7.quar + 24} color={AMBER_INK} size={26} maxW={520} dim={prog(f, K7.incub, 10)} />
				<Timeline t={TLC} at={-100} />
				<Rash d={14} at={-100} />
				<TLBr t={TLC} d0={14} d1={18} y={TLC.y - 70} label="isolated" at={-100} dim={1} />
				<TLBr t={TLC} d0={10} d1={18} y={TLC.y - 130} label="infectious" at={-100} dim={1} out={K7.incub} />
				<TLBr t={TLC} d0={0} d1={10} y={TLC.y - 70} label="incubation: infection to symptoms" at={K7.incub + 4} color={INK_SOFT} dim={prog(f, K7.eighteen + 20, 10)} />
				{f >= K7.incub + 16 ? <DrawPath d={`M${tlx(TLC, 10)},${TLC.y - 70} L${tlx(TLC, 14)},${TLC.y - 70}`} at={K7.incub + 16} dur={12} color={GREYT} width={3} dash="4 7" /> : null}
				<TLBr t={TLC} d0={0} d1={18} y={TLC.y - 190} label="quarantine: up to 18 days after last contact" at={K7.eighteen + 10} color={AMBER_INK} dash />
				<CTag x={1330} y={400} text="NSW childcare and primary school: non-immune contacts exposed outside the facility stay away until 18 days after last contact; other settings, including health facilities, follow a public health unit assessment" at={K7.eighteen + 24} color={GREY_INK} size={19} maxW={540} />
				{void K7.some}{void K7.kept}{void clamp01}
			</Overlay>
		</>
	);
};

// ---------- 8. Border quarantine ----------
const K8 = cues(S('border'), {works: 'Quarantine works at', checks: 'checks travellers, cargo', animals: 'imported animals', y2020: 'in 2020', fourteen: 'fourteen days'});
const COAST = 'M1180,220 C1150,300 1215,360 1180,440 C1150,520 1210,580 1185,660 C1160,740 1215,800 1180,880 C1160,940 1195,980 1180,1020';
export const SceneBorder: React.FC = () => {
	const f = useCurrentFrame();
	const z = smooth(prog(f, 0, 26));
	const plates: BoardPlate[] = [{p: PLATES.bed, at: ST_PLATE[0], w: 190, h: 120}, {p: PLATES.vial, at: ST_PLATE[3], w: 150, h: 100, dim: 0.6}];
	return (
		<>
			<Heading text={HEAD} at={-100} size={52} />
			<Overlay>
				<Board s={lerp(BS.s!, 0.45, z)} ox={lerp(BS.ox!, 20, z)} oy={lerp(BS.oy!, 140, z)} stLit={[1, 0, 0]} plates={plates} o={1 - 0.3 * z} />
				{f >= K8.works ? <DrawPath d={COAST} at={K8.works} dur={30} color={INK_SOFT} width={5} /> : null}
				<Sx x={1180} y={205} text="border" size={30} color={INK_SOFT} hand weight={700} anchor="middle" at={K8.works + 10} />
				<Sx x={1050} y={1000} text="Australia" size={26} color={GREY_INK} weight={600} anchor="end" at={K8.works + 16} />
				<Sx x={1320} y={1000} text="overseas" size={26} color={GREY_INK} weight={600} at={K8.works + 16} />
				<Pl p={PLATES.container} cx={1440} cy={360} w={300} o={prog(f, K8.checks + 6, 14)} />
				<CTag x={1610} y={300} text="cargo inspected" at={K8.checks + 16} color={TEAL} size={24} />
				<Pl p={PLATES.bin} cx={1440} cy={580} w={fitW(PLATES.bin, 160, 190)} o={prog(f, K8.checks - 10, 14)} />
				<CTag x={1540} y={555} text="airport biosecurity bin" at={K8.checks + 4} color={TEAL} size={24} />
				<Pl p={PLATES.sign} cx={1440} cy={820} w={150} o={prog(f, K8.animals, 14)} />
				<GTag x={1540} y={800} text="post-entry quarantine" at={K8.animals + 10} size={22} />
				<CTag x={160} y={600} text="2020: 14-day quarantine for returning travellers" at={K8.y2020 + 6} color={AMBER_INK} size={28} maxW={720} />
				{f >= K8.fourteen - 20 ? <PlainArrow x1={1560} y1={700} x2={860} y2={700} at={K8.fourteen - 20} color={INK_SOFT} width={4} /> : null}
				<BreakMark x={1185} y={700} h={80} at={K8.fourteen} />
				<CTag x={760} y={730} text="slows entry" at={K8.fourteen + 10} color={TERRA} size={26} />
				{void AMBER}{void SX}
			</Overlay>
		</>
	);
};
