import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, DrawPath, INK, INK_SOFT, prog, scribbleEllipse} from '../../kit';
import {cues} from '../../cues';
import {BARS, Bars, ColourStrip, Dial, FWD, Fade, NetBar, Overlay, RxnChip, StageTable, SvgText, Syringe, TEAL} from './parts';
import type {TRow} from './parts';
import {BAR_SCALE, BeatLabel, CHIP_L, CHIP_R, N2O4G, NO2G, SYX, Title, shade, train, BX} from './board';
import {DEEP, N2O4_INK, NO2C, NO2_INK, PALE, kf, sc} from './common';

const HEADS = [{text: 'NO_2', color: NO2_INK}, {text: 'N_2O_4', color: N2O4_INK}];
const ROW_EQ: TRow = {label: 'at equilibrium', at: -100, cells: [['8', -100], ['4', -100], ['32', -100], ['32', -100]], gap: ['0', -100]};
const ROW_SQ: TRow = {label: 'just after squeezing', at: -100, cells: [['16', -100], ['8', -100], ['128', -100], ['64', -100]], gap: ['64', -100]};
const ROW_LATER: TRow = {label: 'a little later', at: -100, cells: [['14', -100], ['9', -100], ['98', -100], ['72', -100]], gap: ['26', -100]};
const Chip: React.FC<{at?: number; fwdTag?: {text: string; at: number; color?: string}}> = ({at = -100, fwdTag}) => (
	<RxnChip x={1020} y={60} at={at} left={CHIP_L} right={CHIP_R} size={38} words={false} fwdLit={-100} revLit={-100} fwdTag={fwdTag ?? {text: 'forward = joining', at: -100, color: FWD}} revTag={{text: 'reverse = splitting', at: -100, color: AMBER_INK}} />
);

// ---------- 3a. The response ----------
const K5 = cues(sc('response'), {faster: 'Joining is now faster', fade: 'starts to fade', two: 'Two N O two join', falls: 'particles falls', step: 'One joining step later', fourteen: 'fourteen', nine: 'risen to nine', dep: 'Joining depends', slows: 'it slows', n98: 'ninety-eight', sdep: 'Splitting depends', rises: 'it rises', s72: 'seventy-two', closing: 'is closing'});
export const SceneResponse: React.FC = () => {
	const f = useCurrentFrame();
	const no2 = kf(f, [[K5.fourteen, 16], [K5.fourteen + 40, 14]], false);
	const n2o4 = kf(f, [[K5.nine, 8], [K5.nine + 40, 9]], false);
	const fwd = kf(f, [[K5.slows, 128], [K5.n98 + 10, 98]]);
	const rev = kf(f, [[K5.rises, 64], [K5.s72 + 10, 72]]);
	const conc = kf(f, [[K5.fade, 16], [K5.fourteen + 40, 14]]);
	const bursts = [...train(K5.faster, 1400, 14, 'join'), ...train(K5.faster + 7, 1400, 40, 'split')];
	const rows: TRow[] = [ROW_EQ, ROW_SQ, {label: 'a little later', at: K5.step, cells: [['14', K5.fourteen + 6], ['9', K5.nine + 6], ['98', K5.n98 + 8], ['72', K5.s72 + 8]], gap: ['26', K5.closing + 6]}];
	const top = (v: number) => BARS.base - v * BAR_SCALE;
	return (
		<>
			<Title text="The response" />
			<BeatLabel text="the response" at={4} color={TEAL} w={330} />
			<Syringe x={SYX.x} y={SYX.y} w={SYX.w} vol={0.5} groups={[NO2G(no2), N2O4G(n2o4)]} tint={shade(conc / 16)} bursts={bursts} />
			<Overlay>
				<ColourStrip x={260} y={500} w={380} from={PALE} to={DEEP} t={conc / 16} at={-100} label="colour" h={40} mark={0.5} />
				<Fade at={K5.fade}><SvgText x={420} y={490} text="fading" size={36} color={NO2_INK} at={K5.fade} /></Fade>
				<Dial x={96} y={580} label="NO_2" value={no2} text={String(Math.round(no2))} color={NO2_INK} at={-100} />
				<Dial x={400} y={580} label="N_2O_4" value={n2o4} text={String(Math.round(n2o4))} color={N2O4_INK} at={-100} />
				<NetBar xc={250} y={860} gap={fwd - rev} at={K5.faster} scale={5.5} lines={[{text: 'more join than split', at: K5.fade}]} />
				<Fade at={K5.two}><SvgText x={96} y={800} text="2 NO_2 join into 1 N_2O_4: fewer gas particles" size={32} color={INK_SOFT} at={K5.two} hand={false} weight={600} /></Fade>
				<Bars fwd={fwd} rev={rev} at={-100} scale={BAR_SCALE} bracketAt={K5.closing} x0={BX} />
				<Fade at={K5.slows}>
					<path d={`M${BX - 40},${top(128) + 6} L${BX - 40},${top(128) + 70} M${BX - 59},${top(128) + 48} L${BX - 40},${top(128) + 74} L${BX - 21},${top(128) + 48}`} fill="none" stroke={FWD} strokeWidth={7} strokeLinecap="round" strokeLinejoin="round" />
				</Fade>
				<Fade at={K5.rises}>
					<path d={`M${BX + BARS.gx + BARS.w + 44},${top(64) + 60} L${BX + BARS.gx + BARS.w + 44},${top(64) - 4} M${BX + BARS.gx + BARS.w + 25},${top(64) + 18} L${BX + BARS.gx + BARS.w + 44},${top(64) - 8} L${BX + BARS.gx + BARS.w + 63},${top(64) + 18}`} fill="none" stroke={AMBER} strokeWidth={7} strokeLinecap="round" strokeLinejoin="round" />
				</Fade>
				<Fade at={K5.dep}>
					<SvgText x={690} y={500} text="forward:" size={38} color={FWD} at={K5.dep} hand={false} />
					<SvgText x={690} y={546} text="128 × 14/16 × 14/16" size={38} color={FWD} at={K5.n98 - 40} hand={false} weight={600} />
					<SvgText x={690} y={594} text="= 98" size={46} color={FWD} at={K5.n98} hand={false} weight={800} />
				</Fade>
				<Fade at={K5.sdep}>
					<SvgText x={690} y={656} text="reverse: 64 × 9/8" size={38} color={AMBER_INK} at={K5.sdep} hand={false} />
					<SvgText x={690} y={704} text="= 72" size={46} color={AMBER_INK} at={K5.s72} hand={false} weight={800} />
				</Fade>
				<StageTable rows={rows} at={-100} heads={HEADS} gapAt={-100} />
			</Overlay>
			<Chip />
		</>
	);
};

// ---------- 3b. The new equilibrium ----------
const K6 = cues(sc('new-equilibrium'), {meet: 'rates meet again', s78: 'seventy-eight', twelve: 'twelve and a half', between: 'between the eight', sixteen: 'sixteen straight', darker: 'ends darker', paler: 'paler than right', higher: 'Both rates are higher', crowd: 'more crowded', shifted: 'shifted to the right', toward: 'toward N two O four', partly: 'only partly cancelled'});
const NL = {x0: 130, x1: 630, y: 896};
const nx = (v: number) => NL.x0 + ((v - 8) / 8) * (NL.x1 - NL.x0);
export const SceneNewEq: React.FC = () => {
	const f = useCurrentFrame();
	const no2 = kf(f, [[K6.twelve, 14], [K6.twelve + 40, 12.5]]);
	const nCount = kf(f, [[K6.twelve, 14], [K6.twelve + 40, 12]], false);
	const n2o4 = kf(f, [[K6.twelve, 9], [K6.twelve + 40, 9.8]]);
	const pairs = kf(f, [[K6.twelve, 9], [K6.twelve + 40, 10]], false);
	const fwd = kf(f, [[K6.meet, 98], [K6.s78 + 10, 78]]);
	const rev = kf(f, [[K6.meet, 72], [K6.s78 + 10, 78]]);
	const bursts = [...train(K6.meet - 40, 1000, 22, 'join'), ...train(K6.meet - 30, 1000, 22, 'split')];
	const settled = f >= K6.twelve + 40;
	const rows: TRow[] = [ROW_EQ, ROW_SQ, ROW_LATER, {label: 'new equilibrium', at: K6.s78 - 10, cells: [['≈12.5', K6.twelve + 8], ['≈9.8', K6.twelve + 16], ['≈78', K6.s78 + 8], ['≈78', K6.s78 + 16]], gap: ['0', K6.s78 + 24], color: TEAL}];
	return (
		<>
			<Title text="The new equilibrium" />
			<BeatLabel text="the response" at={-100} color={TEAL} w={330} />
			<Syringe x={SYX.x} y={SYX.y} w={SYX.w} vol={0.5} groups={[NO2G(nCount), N2O4G(pairs)]} tint={shade(no2 / 16)} bursts={bursts} />
			<Overlay>
				<ColourStrip x={260} y={500} w={380} from={PALE} to={DEEP} t={no2 / 16} at={-100} label="colour" h={40} mark={0.5} />
				<Dial x={96} y={560} label="NO_2" value={no2} text={settled ? '≈12.5' : String(Math.round(no2))} color={NO2_INK} at={-100} />
				<Dial x={400} y={560} label="N_2O_4" value={n2o4} text={settled ? '≈9.8' : String(Math.round(n2o4))} color={N2O4_INK} at={-100} />
				<Fade at={K6.twelve}><SvgText x={96} y={776} text="≈ means about (rounded)" size={30} color={INK_SOFT} anchor="start" at={K6.twelve} hand={false} weight={600} /></Fade>
				<Bars fwd={fwd} rev={rev} at={-100} scale={BAR_SCALE} x0={BX} />
				<g opacity={prog(f, K6.s78 + 20, 14)}>
					<path d={`M${BX + BARS.w},${BARS.base - 78 * BAR_SCALE} L${BX + BARS.gx},${BARS.base - 78 * BAR_SCALE}`} stroke={TEAL} strokeWidth={6} strokeDasharray="10 8" />
					<text x={BX + (BARS.gx + BARS.w) / 2} y={BARS.base - 78 * BAR_SCALE - 105} textAnchor="middle" fill={TEAL} style={{fontFamily: 'Caveat, cursive', fontWeight: 700, fontSize: 52}}>equal</text>
				</g>
				<Fade at={K6.higher}><SvgText x={690} y={500} text="both rates higher than before" size={30} color={INK} at={K6.higher} hand={false} weight={600} /><SvgText x={690} y={540} text="because everything is" size={30} color={INK} at={K6.crowd} hand={false} weight={600} /><SvgText x={690} y={578} text="more crowded" size={30} color={INK} at={K6.crowd + 10} hand={false} weight={600} /></Fade>
				{/* number line for NO2: start, instant, settled */}
				<Fade at={K6.between}>
					<path d={`M${NL.x0},${NL.y} L${NL.x1},${NL.y}`} stroke={INK} strokeWidth={5} strokeLinecap="round" />
					<circle cx={nx(8)} cy={NL.y} r={20} fill={shade(0.5)} stroke={INK} strokeWidth={4} />
					<SvgText x={nx(8)} y={NL.y + 60} text="8 start" size={34} color={INK} anchor="middle" at={K6.between} />
				</Fade>
				<Fade at={K6.sixteen}>
					<circle cx={nx(16)} cy={NL.y} r={20} fill={shade(1)} stroke={INK} strokeWidth={4} />
					<SvgText x={nx(16)} y={NL.y + 60} text="16 instant" size={34} color={INK} anchor="middle" at={K6.sixteen} />
				</Fade>
				<Fade at={K6.twelve + 20}>
					<circle cx={nx(12.5)} cy={NL.y} r={20} fill={shade(0.78)} stroke={TEAL} strokeWidth={6} />
					<SvgText x={nx(12.5)} y={NL.y + 60} text="12.5" size={38} color={TEAL} anchor="middle" at={K6.twelve + 20} />
				</Fade>
				<Fade at={K6.darker}>
					<path d={`M${nx(8)},${NL.y - 44} L${nx(8)},${NL.y - 56} L${nx(16)},${NL.y - 56} L${nx(16)},${NL.y - 44}`} fill="none" stroke={TEAL} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" />
					<SvgText x={(nx(8) + nx(16)) / 2} y={NL.y - 70} text="between the start and the instant" size={32} color={TEAL} anchor="middle" at={K6.darker} />
				</Fade>
				<StageTable rows={rows} at={-100} heads={HEADS} gapAt={-100} />
				<Fade at={K6.shifted}><SvgText x={1130} y={272} text="net reaction runs forward until the rates match" size={32} color={FWD} at={K6.shifted} hand={false} weight={600} /></Fade>
				<Fade at={K6.partly}><SvgText x={690} y={650} text="it only partly cancelled" size={36} color={TEAL} at={K6.partly} /><SvgText x={690} y={692} text="the squeeze" size={36} color={TEAL} at={K6.partly + 8} /></Fade>
			</Overlay>
			<Chip fwdTag={{text: 'shift right', at: K6.shifted, color: FWD}} />
		</>
	);
};

// ---------- 4. Both graphs ----------
const K7 = cues(sc('graphs'), {moment: 'At the moment', jump: 'jump together', step: 'step up', joining: 'joining by more', responds: 'reaction responds', slides: 'slides down', creeps: 'creeps up', meet: 'rates meet'});
const GX = 250, GW = 1260, UMAX = 8, KK = Math.LN2 / 1.3, T_SQ = 1;
const gx = (u: number) => GX + (u / UMAX) * GW;
const cy = (c: number) => 500 - (c / 18) * 262;
const ry = (r: number) => 870 - (r / 135) * 262;
const ex = (u: number) => Math.exp(-KK * (u - T_SQ));
const no2f = (u: number) => (u < T_SQ ? 8 : 12.5 + 3.5 * ex(u));
const n2o4f = (u: number) => (u < T_SQ ? 4 : 9.8 - 1.8 * ex(u));
const fwf = (u: number) => (u < T_SQ ? 32 : 78 + 50 * ex(u));
const rvf = (u: number) => (u < T_SQ ? 32 : 78 - 14 * ex(u));
const slide = (fn: (u: number) => number, ymap: (v: number) => number) => {
	let d = '';
	for (let u = T_SQ + 0.001; u <= UMAX + 1e-6; u += 0.05) d += `${d ? 'L' : 'M'}${gx(u).toFixed(1)},${ymap(fn(u)).toFixed(1)} `;
	return d;
};
const T_EQ = 6.6;
const SNAP = [0.5, 1.0, T_SQ + 1.3, 7.3];
export const SceneGraphs: React.FC = () => {
	const f = useCurrentFrame();
	const GREY = '#8f897d';
	return (
		<>
			<Title text="Both graphs" size={62} />
			<Overlay>
				<DrawPath d={`M${GX},236 L${GX},500 L${GX + GW + 20},500`} at={K7.moment - 30} dur={26} color={INK} width={5} />
				<DrawPath d={`M${GX},600 L${GX},870 L${GX + GW + 20},870`} at={K7.moment - 20} dur={26} color={INK} width={5} />
				<SvgText x={GX + 20} y={548} text="concentration (units)" size={32} color={INK_SOFT} at={K7.moment - 10} />
				<SvgText x={GX + 20} y={912} text="rate (made-up units)" size={32} color={INK_SOFT} at={K7.moment - 4} />
				<SvgText x={GX + GW + 36} y={500} text="time" size={42} color={INK_SOFT} at={K7.moment} />
				<SvgText x={GX + GW + 36} y={870} text="time" size={42} color={INK_SOFT} at={K7.moment + 4} />
				{[16, 12.5, 8, 4].map(v => <SvgText key={v} x={GX - 14} y={cy(v) + 11} text={String(v)} size={30} color={INK_SOFT} anchor="end" hand={false} at={K7.moment} />)}
				{[128, 78, 32].map(v => <SvgText key={v} x={GX - 14} y={ry(v) + 11} text={String(v)} size={30} color={INK_SOFT} anchor="end" hand={false} at={K7.moment} />)}
				{/* before the squeeze */}
				<DrawPath d={`M${gx(0)},${cy(8)} L${gx(T_SQ)},${cy(8)}`} at={K7.moment - 20} dur={24} color={NO2C} width={12} />
				<DrawPath d={`M${gx(0)},${cy(4)} L${gx(T_SQ)},${cy(4)}`} at={K7.moment - 16} dur={24} color={GREY} width={9} />
				<DrawPath d={`M${gx(0)},${ry(32)} L${gx(T_SQ)},${ry(32)}`} at={K7.moment - 12} dur={24} color={FWD} width={11} />
				<DrawPath d={`M${gx(0)},${ry(32)} L${gx(T_SQ)},${ry(32)}`} at={K7.moment - 8} dur={24} color={AMBER} width={5} />
				{/* the squeeze */}
				<Fade at={K7.moment + 10}>
					<path d={`M${gx(T_SQ)},248 L${gx(T_SQ)},${cy(16) - 14} M${gx(T_SQ) - 14},${cy(16) - 34} L${gx(T_SQ)},${cy(16) - 10} L${gx(T_SQ) + 14},${cy(16) - 34}`} fill="none" stroke={TEAL} strokeWidth={6} strokeLinecap="round" strokeLinejoin="round" />
					<SvgText x={gx(T_SQ) - 48} y={290} text="squeeze" size={36} color={TEAL} anchor="end" at={K7.moment + 10} />
				</Fade>
				<DrawPath d={`M${gx(T_SQ)},${cy(8)} L${gx(T_SQ)},${cy(16)}`} at={K7.jump} dur={12} color={NO2C} width={12} />
				<DrawPath d={`M${gx(T_SQ)},${cy(4)} L${gx(T_SQ)},${cy(8)}`} at={K7.jump + 2} dur={12} color={GREY} width={9} />
				<DrawPath d={`M${gx(T_SQ)},${ry(32)} L${gx(T_SQ)},${ry(128)}`} at={K7.step} dur={14} color={FWD} width={11} />
				<DrawPath d={`M${gx(T_SQ)},${ry(32)} L${gx(T_SQ)},${ry(64)}`} at={K7.step + 4} dur={14} color={AMBER} width={5} />
				<Fade at={K7.joining}><DrawPath d={scribbleEllipse(gx(T_SQ), ry(100), 44, 82, 6)} at={K7.joining} dur={22} color={TEAL} width={6} /><SvgText x={gx(T_SQ) + 70} y={ry(128) - 24} text="joining steps up more" size={34} color={FWD} at={K7.joining + 8} /></Fade>
				{/* the response */}
				<DrawPath d={slide(no2f, cy)} at={K7.slides} dur={100} color={NO2C} width={12} />
				<DrawPath d={slide(n2o4f, cy)} at={K7.creeps} dur={100} color={GREY} width={9} />
				<DrawPath d={slide(fwf, ry)} at={K7.slides + 10} dur={100} color={FWD} width={11} />
				<DrawPath d={slide(rvf, ry)} at={K7.creeps + 10} dur={100} color={AMBER} width={5} />
				<Fade at={K7.creeps + 60}>
					<SvgText x={gx(UMAX) + 16} y={cy(12.5) + 4} text="NO_2" size={36} color={NO2_INK} at={K7.creeps + 60} hand={false} />
					<SvgText x={gx(UMAX) + 16} y={cy(9.8) + 22} text="N_2O_4" size={36} color={N2O4_INK} at={K7.creeps + 66} hand={false} />
				</Fade>
				{/* start and instant guides */}
				<Fade at={K7.jump + 20}>
					<path d={`M${GX},${cy(16)} L${gx(UMAX)},${cy(16)}`} stroke={NO2C} strokeWidth={2.5} strokeDasharray="9 9" opacity={0.7} />
					<SvgText x={gx(UMAX) - 6} y={cy(16) - 12} text="instant" size={32} color={NO2_INK} anchor="end" at={K7.jump + 20} />
					<path d={`M${GX},${cy(8)} L${gx(UMAX)},${cy(8)}`} stroke={NO2C} strokeWidth={2.5} strokeDasharray="9 9" opacity={0.7} />
					<SvgText x={gx(UMAX) - 6} y={cy(8) + 36} text="start" size={32} color={NO2_INK} anchor="end" at={K7.jump + 24} />
				</Fade>
				<DrawPath d={`M${gx(T_EQ)},250 L${gx(T_EQ)},870`} at={K7.meet} dur={30} color={TEAL} width={5} dash="14 10" />
				<SvgText x={gx(T_EQ) - 12} y={612} text="rates equal again" size={40} color={TEAL} anchor="end" at={K7.meet + 10} />
				{SNAP.map((u, i) => (
					<g key={i} opacity={prog(f, K7.meet + 40 + i * 12, 10)}>
						<circle cx={gx(u)} cy={cy(i === 1 ? 16 : no2f(u))} r={10} fill={NO2C} stroke={INK} strokeWidth={2.5} />
						<circle cx={gx(u)} cy={cy(i === 1 ? 8 : n2o4f(u))} r={10} fill={GREY} stroke={INK} strokeWidth={2.5} />
						<circle cx={gx(u)} cy={ry(i === 1 ? 128 : fwf(u))} r={10} fill={FWD} stroke="#fffdf8" strokeWidth={3} />
						<circle cx={gx(u)} cy={ry(i === 1 ? 64 : rvf(u))} r={10} fill={AMBER} stroke={INK} strokeWidth={2.5} />
					</g>
				))}
				{/* the two jobs */}
				<Fade at={K7.jump}>
					<rect x={gx(T_SQ) - 18} y={cy(16) - 6} width={36} height={cy(4) - cy(16) + 12} rx={10} fill="none" stroke={TEAL} strokeWidth={5} strokeDasharray="8 7" />
					<SvgText x={gx(T_SQ) - 4} y={206} text="the moment of the change" size={36} color={TEAL} anchor="middle" at={K7.jump} />
				</Fade>
				<Fade at={K7.responds}>
					<path d={`M${gx(T_SQ) + 40},244 L${gx(T_SQ) + 40},256 L${gx(T_EQ)},256 L${gx(T_EQ)},244`} fill="none" stroke={TEAL} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" />
					<SvgText x={(gx(T_SQ) + gx(T_EQ)) / 2 + 80} y={238} text="the response" size={36} color={TEAL} anchor="middle" at={K7.responds} />
				</Fade>
			</Overlay>
		</>
	);
};
void NO2_INK;
