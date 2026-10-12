import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, DrawPath, FONT_HAND, INK, INK_SOFT, Mark, prog, scribbleEllipse} from '../../kit';
import {cues} from '../../cues';
import {BARS, Bars, FWD, Fade, IRON_SP, IronKey, LENS, NetArrowH, Overlay, Pill, RxnChip, SlotRings, SpeciesLens, StageTable, SvgText, TEAL, ghostTrain} from './parts';
import type {TRow} from './parts';
import {ChemSvg, FE_INK, Heading, IRON_TINT_DEEP, RED, RED_INK, SCN, SCN_INK, kf, sc} from './common';
import {BoardTube, Tally, lensTint} from './s1';

const CHIP_L = [{t: 'Fe^3+', color: FE_INK}, {t: '+'}, {t: 'SCN^-', color: SCN_INK}];
const CHIP_R = [{t: 'FeSCN^2+', color: RED_INK}];
const HEADS = [{text: 'Fe^3+', color: FE_INK}, {text: 'SCN^-', color: SCN_INK}, {text: 'FeSCN^2+', color: RED_INK}];

// ---------- 3a. The response ----------
const K4 = cues(sc('response'), {faster: 'forward reaction is faster', redIons: 'more red ions', move: 'start to move', usedUp: 'used up', fall: 'forward rate falls', build: 'build up', rise: 'reverse rate rises', later: 'little later', fortyThree: 'forty-three', thirtyThree: 'thirty-three', diff: 'difference', closing: 'closing', story: 'same story', aidA: 'faster rate falls', aidB: 'slower rate rises'});
export const SceneResponse: React.FC = () => {
	const f = useCurrentFrame();
	const counts = (t: number) => [t < K4.usedUp ? 17 : 16, t < K4.usedUp + 14 ? 10 : 9, t < K4.build ? 10 : 11];
	const fwd = kf(f, [[K4.fall, 51], [K4.fortyThree + 12, 43]]);
	const rev = kf(f, [[K4.rise, 30], [K4.thirtyThree + 12, 33]]);
	const tubeT = kf(f, [[K4.redIons, 0], [K4.later + 200, 0.4]]);
	const ghosts = [...ghostTrain(K4.faster, 1500, 19, 'join', [0, 4, 8, 2, 10, 6, 1, 3]), ...ghostTrain(K4.faster + 9, 1500, 44, 'split', [5, 9, 7, 11])];
	const rows: TRow[] = [
		{label: 'just after adding', at: -100, cells: [['17', -100], ['10', -100], ['10', -100], ['51', -100], ['30', -100]], gap: ['21', -100]},
		{label: 'a little later', at: K4.later, cells: [['16', K4.later + 6], ['9', K4.later + 12], ['11', K4.later + 18], ['43', K4.fortyThree + 8], ['33', K4.thirtyThree + 8]], gap: ['10', K4.diff + 20]},
	];
	const xr = BARS.x0 + BARS.gx + BARS.w / 2;
	const top = (v: number) => BARS.base - v * 6.2;
	return (
		<>
			<Heading text="The response" at={4} />
			<BoardTube t={tubeT} at={-100} label="a little redder" />
			<Overlay>
				<SpeciesLens cx={LENS.cx} cy={LENS.cy} r={LENS.r} counts={counts} species={IRON_SP} ghosts={ghosts} tint={lensTint(tubeT)} />
								<IronKey x={110} y={868} at={-100} counts={counts} countsAt={-100} />
				<Pill x={96} y={190} w={880} text="the faster rate falls, the slower rate rises" at={K4.story} color={TEAL} size={34} h={56} />
				<Bars fwd={fwd} rev={rev} at={-100} scale={6.2} bracketAt={K4.diff} />
				<Fade at={K4.fall}>
					<path d={`M1085,${top(51) + 6} L1085,${top(51) + 80} M1066,${top(51) + 58} L1085,${top(51) + 84} L1104,${top(51) + 58}`} fill="none" stroke={FWD} strokeWidth={7} strokeLinecap="round" strokeLinejoin="round" />
					<SvgText x={1070} y={top(51) + 130} text="falls" size={40} color={FWD} anchor="end" at={K4.fall} />
				</Fade>
				<Fade at={K4.rise}>
					<path d={`M${xr + 90},${top(30) + 6} L${xr + 90},${top(30) - 60} M${xr + 71},${top(30) - 38} L${xr + 90},${top(30) - 64} L${xr + 109},${top(30) - 38}`} fill="none" stroke={AMBER} strokeWidth={7} strokeLinecap="round" strokeLinejoin="round" />
				</Fade>
				<NetArrowH gap={fwd - rev} at={K4.faster} lines={[{text: 'more join', at: K4.redIons}, {text: 'than split', at: K4.redIons + 8}]} />
				<SvgText x={700} y={600} text="rounded to the" size={32} color={INK_SOFT} at={K4.fortyThree + 20} hand={false} weight={600} />
				<SvgText x={700} y={640} text="nearest whole unit" size={32} color={INK_SOFT} at={K4.fortyThree + 28} hand={false} weight={600} />
				<StageTable rows={rows} at={-100} heads={HEADS} gapAt={K4.diff} />
			</Overlay>
			<RxnChip x={1020} y={92} at={-100} left={CHIP_L} right={CHIP_R} size={38} fwdLit={-100} revLit={-100} fwdWordAt={-100} revWordAt={-100} />
		</>
	);
};

// ---------- 3b. The new equilibrium ----------
const K5 = cues(sc('new-equilibrium'), {meet: 'meet again', thirtySix: 'thirty-six', higher: 'higher than before', moreRed: 'more red ion', moreIron: 'more iron to meet', thio: 'thiocyanate that', twelve: 'ten to twelve', deeper: 'deeper red', look: 'Now look', seven: 'seven units', fifteen: 'fifteen', notBack: 'not back to ten', partly: 'partly cancelled', never: 'never fully', shifted: 'shifted', ran: 'ran forward', matched: 'matched again', position: 'position'});
const LAD = {x: 770, y0: 690, unit: 22, v0: 8};
const ly = (v: number) => LAD.y0 - (v - LAD.v0) * LAD.unit;
export const SceneNewEq: React.FC = () => {
	const f = useCurrentFrame();
	const counts = (t: number) => [t < K5.meet + 40 ? 16 : 15, t < K5.thio ? 9 : 8, t < K5.meet + 40 ? 11 : 12];
	const fwd = kf(f, [[K5.meet, 43], [K5.thirtySix + 14, 36]]);
	const rev = kf(f, [[K5.meet, 33], [K5.thirtySix + 14, 36]]);
	const tubeT = kf(f, [[K5.twelve, 0.4], [K5.deeper + 40, 1]]);
	const ghosts = [...ghostTrain(K5.meet - 20, K5.thirtySix + 14, 22, 'join', [0, 4, 8, 2, 10, 6]), ...ghostTrain(K5.meet - 10, K5.thirtySix + 14, 34, 'split', [5, 9, 7, 11]), ...ghostTrain(K5.thirtySix + 14, 2000, 30, 'join', [1, 3, 7, 9, 11]), ...ghostTrain(K5.thirtySix + 29, 2000, 30, 'split', [6, 8, 10, 2])];
	const rows: TRow[] = [
		{label: 'a little later', at: -100, cells: [['16', -100], ['9', -100], ['11', -100], ['43', -100], ['33', -100]], gap: ['10', -100]},
		{label: 'new equilibrium', at: K5.meet + 60, color: TEAL, cells: [['15', K5.fifteen], ['8', K5.thio], ['12', K5.twelve], ['36', K5.thirtySix + 6], ['36', K5.thirtySix + 14]], gap: ['0', K5.thirtySix + 24]},
	];
	const yy = (v: number) => BARS.base - v * 6.2;
	const lockO = prog(f, K5.thirtySix + 16, 14);
	const slide = prog(f, K5.fifteen, 24);
	const curV = 17 - 2 * slide;
	return (
		<>
			<Heading text="The new equilibrium" at={4} />
			<BoardTube t={tubeT} at={-100} label={f >= K5.deeper ? 'deeper red' : ''} />
			<Overlay>
				<SpeciesLens cx={LENS.cx} cy={LENS.cy} r={LENS.r} counts={counts} species={IRON_SP} ghosts={ghosts} tint={lensTint(tubeT)} />
								<IronKey x={110} y={868} at={-100} counts={counts} countsAt={-100} />
				<Pill x={96} y={190} w={880} text="rates equal, but the amounts need not match" at={K5.thirtySix} out={K5.higher - 8} color={TEAL} size={32} h={56} />
				<Pill x={96} y={190} w={880} text="both rates higher: more to split, more to meet" at={K5.higher} out={K5.shifted - 20} color={AMBER_INK} size={32} h={56} />
				<Pill x={96} y={190} w={880} text="a new position: the mixture at equilibrium" at={K5.position} color={TEAL} size={32} h={56} />
				<Bars fwd={fwd} rev={rev} at={-100} scale={6.2} fwdLabel={f >= K5.thirtySix ? '36' : undefined} revLabel={f >= K5.thirtySix ? '36' : undefined} />
				<g opacity={lockO}>
					<path d={`M${BARS.x0 + BARS.w},${yy(36)} L${BARS.x0 + BARS.gx},${yy(36)}`} stroke={TEAL} strokeWidth={6} strokeDasharray="10 8" />
					<text x={BARS.x0 + (BARS.gx + BARS.w) / 2} y={yy(36) - 80} textAnchor="middle" fill={TEAL} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 56}}>equal</text>
				</g>
				<NetArrowH gap={fwd - rev} at={-100} zeroAt={K5.thirtySix + 16} lines={[{text: 'more join', at: -100}, {text: 'than split', at: -100}]} />
				{/* the iron ladder: added 7, used up 2, never back to 10 */}
				<Fade at={K5.look}>
					<ChemSvg x={LAD.x - 60} y={734} text="iron, Fe^3+ (units)" size={30} color={FE_INK} hand={false} at={K5.look} />
					<path d={`M${LAD.x},${ly(8)} L${LAD.x},${ly(18)}`} stroke={INK} strokeWidth={5} strokeLinecap="round" />
					{[10, 15, 17].map(v => <g key={v}><path d={`M${LAD.x - 12},${ly(v)} L${LAD.x + 12},${ly(v)}`} stroke={INK} strokeWidth={4} /><SvgText x={LAD.x - 24} y={ly(v) + 12} text={String(v)} size={36} color={INK_SOFT} anchor="end" hand={false} /></g>)}
					<circle cx={LAD.x} cy={ly(17)} r={13} fill="#e3bf45" stroke={INK} strokeWidth={3} opacity={0.55} />
				</Fade>
				<Fade at={K5.seven}><SvgText x={LAD.x + 40} y={ly(17) + 12} text="added 7: up to 17" size={32} color={FE_INK} hand={false} at={K5.seven} /></Fade>
				<Fade at={K5.fifteen}>
					<path d={`M${LAD.x + 18},${ly(17) + 12} Q${LAD.x + 38},${ly(16)} ${LAD.x + 18},${ly(curV) - 8}`} fill="none" stroke={RED_INK} strokeWidth={5} strokeLinecap="round" />
					<circle cx={LAD.x} cy={ly(curV)} r={14} fill="#e3bf45" stroke={INK} strokeWidth={4} />
					<SvgText x={LAD.x + 52} y={ly(15) + 6} text="only down to 15" size={32} color={FE_INK} hand={false} at={K5.fifteen + 14} /><SvgText x={LAD.x + 52} y={ly(15) + 40} text="(used up 2)" size={32} color={FE_INK} hand={false} at={K5.fifteen + 22} />
				</Fade>
				<Fade at={K5.notBack}>
					<path d={`M${LAD.x},${ly(10)} L${LAD.x + 230},${ly(10)}`} stroke={RED_INK} strokeWidth={5} strokeDasharray="12 9" />
					<SvgText x={LAD.x + 30} y={ly(10) + 42} text="not back to 10" size={36} color={RED_INK} at={K5.notBack} />
					<Mark x={LAD.x + 262} y={ly(10)} at={K5.notBack + 14} kind="cross" size={34} />
				</Fade>
				<StageTable rows={rows} at={-100} heads={HEADS} gapAt={-100} />
			</Overlay>
			<RxnChip x={1020} y={92} at={-100} left={CHIP_L} right={CHIP_R} size={38} fwdLit={-100} revLit={-100} fwdWordAt={-100} words={false} fwdTag={{text: 'shift right', at: K5.shifted, color: FWD}} />
			<Overlay>
				<SvgText x={1020} y={278} text="the net reaction ran forward until the rates matched" size={30} color={FWD} at={K5.ran} hand={false} weight={600} />
			</Overlay>
		</>
	);
};
void AMBER; void DrawPath; void INK; void scribbleEllipse; void SlotRings; void IRON_TINT_DEEP; void RED; void SCN; void NetArrowH;

// ---------- 4. Both graphs ----------
const K6 = cues(sc('graphs'), {graphs: 'graphs', iron: 'The iron', jumps: 'jumps up', slides: 'slides down', fifteen: 'fifteen', climbs: 'climbs', twelve: 'twelve', steps: 'steps up', thenFalls: 'then falls', notMove: 'does not move', thenRises: 'then rises', meet: 'lines meet', thirtySix: 'thirty-six', two: 'two things happen', once: 'at once', responded: 'responded'});
const GX = 250, GW = 1260, UMAX = 8, K = Math.LN2 / 1.3;
const gx = (u: number) => GX + (u / UMAX) * GW;
const cy = (c: number) => 500 - (c / 18) * 262;
const ry = (r: number) => 870 - (r / 55) * 262;
const T_ADD = 1;
const ex = (u: number) => Math.exp(-K * (u - T_ADD));
const fe = (u: number) => (u < T_ADD ? 10 : 15 + 2 * ex(u));
const red = (u: number) => (u < T_ADD ? 10 : 12 - 2 * ex(u));
const scn = (u: number) => (u < T_ADD ? 10 : 8 + 2 * ex(u));
const fw = (u: number) => (u < T_ADD ? 30 : 36 + 15 * ex(u));
const rv = (u: number) => (u < T_ADD ? 30 : 36 - 6 * ex(u));
const slide = (fn: (u: number) => number, ymap: (v: number) => number, u0 = T_ADD + 0.001, u1 = UMAX) => {
	let d = '';
	for (let u = u0; u <= u1 + 1e-6; u += 0.05) d += `${d ? 'L' : 'M'}${gx(u).toFixed(1)},${ymap(fn(u)).toFixed(1)} `;
	return d;
};
const T_EQ = 6.6;
const SNAP: number[] = [0.5, 1.0, T_ADD + 1.3, 7.3];
export const SceneGraphs: React.FC = () => {
	const f = useCurrentFrame();
	const FEC = '#d9a91c';
	return (
		<>
			<Heading text="Both graphs" at={4} size={62} />
			<Overlay>
				{/* axes */}
				<DrawPath d={`M${GX},236 L${GX},500 L${GX + GW + 20},500`} at={K6.graphs} dur={26} color={INK} width={5} />
				<DrawPath d={`M${GX},600 L${GX},870 L${GX + GW + 20},870`} at={K6.graphs + 10} dur={26} color={INK} width={5} />
				<SvgText x={gx(T_EQ) + 56} y={232} text="concentration (units)" size={30} color={INK_SOFT} at={K6.graphs + 16} />
				<SvgText x={gx(T_EQ) + 56} y={594} text="rate (made-up units)" size={30} color={INK_SOFT} at={K6.graphs + 24} />
				<SvgText x={GX + GW + 36} y={500} text="time" size={42} color={INK_SOFT} at={K6.graphs + 20} />
				<SvgText x={GX + GW + 36} y={870} text="time" size={42} color={INK_SOFT} at={K6.graphs + 30} />
				{/* left ticks */}
				{[[17, cy(17)], [15, cy(15)], [12, cy(12)], [10, cy(10)], [8, cy(8)]].map(([v, y]) => <SvgText key={v} x={GX - 14} y={y + 11} text={String(v)} size={30} color={INK_SOFT} anchor="end" hand={false} at={K6.graphs + 30} />)}
				{[51, 36, 30].map(v => <SvgText key={v} x={GX - 14} y={ry(v) + 11} text={String(v)} size={32} color={INK_SOFT} anchor="end" hand={false} at={K6.graphs + 40} />)}
				{/* before the change: all three at 10, both rates at 30 */}
				<DrawPath d={`M${gx(0)},${cy(10)} L${gx(T_ADD)},${cy(10)}`} at={K6.graphs + 20} dur={24} color={FEC} width={12} />
				<DrawPath d={`M${gx(0)},${cy(10)} L${gx(T_ADD)},${cy(10)}`} at={K6.graphs + 24} dur={24} color={SCN} width={7} />
				<DrawPath d={`M${gx(0)},${cy(10)} L${gx(T_ADD)},${cy(10)}`} at={K6.graphs + 28} dur={24} color={RED} width={3.5} />
				<DrawPath d={`M${gx(0)},${ry(30)} L${gx(T_ADD)},${ry(30)}`} at={K6.graphs + 34} dur={24} color={FWD} width={11} />
				<DrawPath d={`M${gx(0)},${ry(30)} L${gx(T_ADD)},${ry(30)}`} at={K6.graphs + 38} dur={24} color={AMBER} width={5} />
				{/* the added iron: pen arrow at the moment of the change */}
				<Fade at={K6.iron}>
					<path d={`M${gx(T_ADD)},248 L${gx(T_ADD)},${cy(17) - 14} M${gx(T_ADD) - 14},${cy(17) - 34} L${gx(T_ADD)},${cy(17) - 10} L${gx(T_ADD) + 14},${cy(17) - 34}`} fill="none" stroke={FEC} strokeWidth={6} strokeLinecap="round" strokeLinejoin="round" />
					<ChemSvg x={gx(T_ADD) - 22} y={272} text="add Fe^3+" size={32} color={FE_INK} anchor="end" at={K6.iron} hand={false} />
				</Fade>
				{/* iron: jump then slide */}
				<DrawPath d={`M${gx(T_ADD)},${cy(10)} L${gx(T_ADD)},${cy(17)}`} at={K6.jumps} dur={12} color={FEC} width={12} />
				<DrawPath d={slide(fe, cy)} at={K6.slides} dur={90} color={FEC} width={12} />
				{/* red ion and thiocyanate */}
				<DrawPath d={slide(red, cy)} at={K6.climbs} dur={80} color={RED} width={8} />
				<DrawPath d={slide(scn, cy)} at={K6.climbs} dur={80} color={SCN} width={8} />
				<Fade at={K6.climbs + 70}>
					<ChemSvg x={gx(UMAX) + 18} y={cy(15) - 6} text="Fe^3+" size={36} color={FE_INK} at={K6.climbs + 70} />
					<ChemSvg x={gx(UMAX) + 18} y={cy(12) + 4} text="FeSCN^2+" size={36} color={RED_INK} at={K6.climbs + 76} />
					<ChemSvg x={gx(UMAX) + 18} y={cy(8) + 14} text="SCN^-" size={36} color={SCN_INK} at={K6.climbs + 82} />
				</Fade>
				<Fade at={K6.twelve}><path d={`M${GX},${cy(12)} L${gx(UMAX)},${cy(12)}`} stroke={RED} strokeWidth={2.5} strokeDasharray="9 9" opacity={0.6} /></Fade>
				<Fade at={K6.fifteen}><path d={`M${GX},${cy(15)} L${gx(UMAX)},${cy(15)}`} stroke={FEC} strokeWidth={2.5} strokeDasharray="9 9" opacity={0.8} /></Fade>
				{/* never back to 10 */}
				<Fade at={K6.fifteen + 40}>
					<path d={`M${gx(T_ADD)},${cy(10)} L${gx(UMAX)},${cy(10)}`} stroke={RED_INK} strokeWidth={3} strokeDasharray="12 9" />
					<Mark x={gx(6.45)} y={cy(10) + 2} at={K6.fifteen + 52} kind="cross" size={26} />
					<SvgText x={gx(UMAX) - 6} y={cy(10) + 22} text="not back to 10" size={26} color={RED_INK} anchor="end" at={K6.fifteen + 46} />
				</Fade>
				{/* rates */}
				<DrawPath d={`M${gx(T_ADD)},${ry(30)} L${gx(T_ADD)},${ry(51)}`} at={K6.steps} dur={12} color={FWD} width={11} />
				<DrawPath d={slide(fw, ry)} at={K6.thenFalls} dur={90} color={FWD} width={11} />
				<Fade at={K6.notMove}><DrawPath d={scribbleEllipse(gx(T_ADD), ry(30), 52, 34, 5)} at={K6.notMove} dur={20} color={AMBER_INK} width={6} /><SvgText x={gx(T_ADD) + 60} y={ry(30) + 72} text="reverse stays at 30" size={38} color={AMBER_INK} at={K6.notMove + 8} /></Fade>
				<DrawPath d={slide(rv, ry)} at={K6.thenRises} dur={90} color={AMBER} width={6} />
				{/* equal again */}
				<DrawPath d={`M${gx(T_EQ)},250 L${gx(T_EQ)},870`} at={K6.meet} dur={30} color={TEAL} width={5} dash="14 10" />
				<SvgText x={gx(T_EQ) - 12} y={612} text="rates equal again" size={40} color={TEAL} anchor="end" at={K6.meet + 10} />
				<Fade at={K6.thirtySix}>
					<path d={`M${gx(T_EQ)},${ry(36)} L${gx(UMAX)},${ry(36)}`} stroke={TEAL} strokeWidth={4} strokeDasharray="10 9" />
					<SvgText x={gx(UMAX) + 18} y={ry(36) + 14} text="36" size={52} color={TEAL} at={K6.thirtySix} />
				</Fade>
				{/* snapshot dots from the table */}
				{SNAP.map((u, i) => {
					const o = prog(f, K6.meet + 40 + i * 14, 10);
					const uu = Math.max(u, i === 1 ? T_ADD + 0.001 : u);
					return (
						<g key={i} opacity={o}>
							{i === 1 ? <circle cx={gx(u)} cy={cy(17)} r={10} fill={FEC} stroke={INK} strokeWidth={2.5} /> : <circle cx={gx(u)} cy={cy(fe(uu))} r={10} fill={FEC} stroke={INK} strokeWidth={2.5} />}
							<circle cx={gx(u)} cy={cy(red(uu))} r={10} fill={RED} stroke="#fffdf8" strokeWidth={3} />
							<circle cx={gx(u)} cy={cy(scn(uu))} r={10} fill={SCN} stroke="#fffdf8" strokeWidth={3} />
							<circle cx={gx(u)} cy={ry(i === 1 ? 51 : fw(uu))} r={10} fill={FWD} stroke="#fffdf8" strokeWidth={3} />
							<circle cx={gx(u)} cy={ry(i === 1 ? 30 : rv(uu))} r={10} fill={AMBER} stroke={INK} strokeWidth={2.5} />
						</g>
					);
				})}
				{/* the two jobs */}
				<Fade at={K6.two}>
					<SvgText x={gx(T_ADD) - 4} y={196} text="the moment of the change" size={36} color={FE_INK} anchor="middle" at={K6.two} />
				</Fade>
				<Fade at={K6.once}>
					<rect x={gx(T_ADD) - 18} y={cy(17) - 6} width={36} height={cy(10) - cy(17) + 12} rx={10} fill="none" stroke={FE_INK} strokeWidth={5} strokeDasharray="8 7" />
					<SvgText x={gx(T_ADD) + 34} y={312} text="at once" size={32} color={FE_INK} at={K6.once} />
				</Fade>
				<Fade at={K6.responded}>
					<path d={`M${gx(T_ADD) + 40},244 L${gx(T_ADD) + 40},256 L${gx(T_EQ)},256 L${gx(T_EQ)},244`} fill="none" stroke={TEAL} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" />
					<SvgText x={(gx(T_ADD) + gx(T_EQ)) / 2 + 130} y={238} text="the response, afterwards" size={36} color={TEAL} anchor="middle" at={K6.responded} />
				</Fade>
			</Overlay>
		</>
	);
};
