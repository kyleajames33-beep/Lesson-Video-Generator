import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, DrawPath, FONT_DISPLAY, FONT_HAND, HandText, INK, INK_SOFT, Mark, prog, scribbleEllipse} from '../../kit';
import {cues} from '../../cues';
import {Bars, BARS, EqRR, FWD, Fade, LENS, NET, NetArrow, Overlay, ParticleLens, Pill, StageTable, SvgText, TEAL, ColourKey, ghostTrain} from './parts';
import type {TRow} from './parts';
import {GREENP, GREEN_INK, Heading, NAVY, PaintedFlask, U_EQ, VIOLET, fwdAt as fwdModel, kf, paintedH, revAt as revModel, sc, uWhere, xAt} from './common';

// ---------- 4a. Closing in (stage 2) ----------
const K4 = cues(sc('closing-in'), {again: 'Later again', c14: '0.14', c06: '0.06', thirtyFive: 'thirty-five', seventeen: 'seventeen', gap: 'gap', falling: 'still falling'});
export const SceneClosing: React.FC = () => {
	const f = useCurrentFrame();
	const counts = (t: number) => ({n: kf(t, [[K4.again, 16], [K4.again + 150, 14]], false), v: kf(t, [[K4.again, 4], [K4.again + 150, 6]], false)});
	const fwd = kf(f, [[K4.thirtyFive - 14, 40], [K4.thirtyFive + 24, 35]]);
	const rev = kf(f, [[K4.seventeen - 14, 8], [K4.seventeen + 30, 17]]);
	const ghosts = [...ghostTrain(30, 1100, 29, 'split', [0, 4, 8, 2, 10, 6, 1, 12]), ...ghostTrain(60, 1100, 60, 'join', [5, 9, 3, 11])];
	const rows: TRow[] = [
		{label: 'start', at: -300, cells: [['0.20', -300], ['0', -300], ['0', -300], ['50', -300], ['0', -300]], gap: ['50', -300]},
		{label: 'later', at: -200, cells: [['0.16', -200], ['0.04', -200], ['0.04', -200], ['40', -200], ['8', -200]], gap: ['32', -200]},
		{label: 'closer', at: K4.c14, cells: [['0.14', K4.c14], ['0.06', K4.c06], ['0.06', K4.c06], ['35', K4.thirtyFive], ['17', K4.seventeen]], gap: ['18', K4.seventeen + 26]},
	];
	return (
		<>
			<Heading text="Later again" at={4} />
			<Overlay>
				<ParticleLens cx={LENS.cx} cy={LENS.cy} r={LENS.r} counts={counts} ghosts={ghosts} />
				<SvgText x={190} y={236} text="0.14 mol/L of PCl_5" size={50} color={NAVY} at={K4.c14} />
				<SvgText x={190} y={290} text="even less left to split" size={40} color={FWD} at={K4.thirtyFive} />
				<ColourKey x={225} y={870} at={-100} />
				<EqRR x={1010} y={140} at={-100} fwdAt={-100} revAt={-100} fwdWordAt={-100} revWordAt={-100} size={40} />
				<Bars fwd={fwd} rev={rev} at={-100} bracketAt={K4.gap} />
				<NetArrow gap={fwd - rev} at={-100} ghostGap={32}
					label={<>
						<Fade at={-100} out={K4.falling}><SvgText x={NET.x + 40} y={NET.y0 + 70} text="still falling," size={44} color={FWD} /></Fade>
						<Fade at={K4.falling}>
							<SvgText x={NET.x + 40} y={NET.y0 + 74} text="PCl_5 still falls," size={40} color={FWD} at={K4.falling} />
							<SvgText x={NET.x + 40} y={NET.y0 + 120} text="just more slowly" size={40} color={FWD} at={K4.falling + 8} />
						</Fade>
					</>} />
				<StageTable rows={rows} at={-100} gapAt={-100} />
			</Overlay>
		</>
	);
};

// ---------- 4b. Equal (stage 3, with colour evidence) ----------
const K5 = cues(sc('equal'), {equal: 'equal', c12: '0.12', c08: '0.08', bothRates: 'both rates', thirty: 'thirty', madeFast: 'made as fast', stops: 'stops changing', never: 'never runs out', still: 'still running', dyn: 'dynamic equilibrium', see: 'see it', chlorine: 'Chlorine', vapour: 'vapour', flask: 'flask slowly', turns: ['yellow-green', 2], darker: 'getting any darker', stopped: 'has stopped'});
export const SceneEqual: React.FC = () => {
	const f = useCurrentFrame();
	const counts = (t: number) => ({n: kf(t, [[K5.equal, 14], [K5.equal + 110, 12]], false), v: kf(t, [[K5.equal + 60, 6], [K5.equal + 190, 8]], false)});
	const close = [[K5.equal + 10, 0], [K5.equal + 120, 1]] as [number, number][];
	const fwd = 35 - 5 * kf(f, close), rev = 17 + 13 * kf(f, close);
	const ghosts = [...ghostTrain(K5.equal + 120, K5.see + 10, 34, 'split', [0, 4, 8, 2, 10, 6, 1, 3]), ...ghostTrain(K5.equal + 137, K5.see + 10, 34, 'join', [5, 9, 7, 11])];
	const rows: TRow[] = [
		{label: 'later', at: -300, cells: [['0.16', -300], ['0.04', -300], ['0.04', -300], ['40', -300], ['8', -300]], gap: ['32', -300]},
		{label: 'closer', at: -200, cells: [['0.14', -200], ['0.06', -200], ['0.06', -200], ['35', -200], ['17', -200]], gap: ['18', -200]},
		{label: 'equilibrium', at: K5.c12, color: TEAL, cells: [['0.12', K5.c12], ['0.08', K5.c08], ['0.08', K5.c08], ['30', K5.thirty], ['30', K5.thirty]], gap: ['0', K5.thirty + 8]},
	];
	const lensOut = 1 - prog(f, K5.see, 14);
	const tableOut = lensOut;
	const painted = prog(f, K5.see + 4, 16);
	const eq = prog(f, K5.turns, 40);
	const PW = 250, PX = 250, PY = 215;
	const lockO = prog(f, K5.equal + 110, 14);
	const yy = (v: number) => BARS.base - v * 6.5;
	return (
		<>
			<Heading text="The moment they are equal" at={4} />
			<PaintedFlask x={PX} y={PY} w={PW} eq={eq} opacity={painted} />
			<Overlay>
				<g opacity={lensOut}>
					<ParticleLens cx={LENS.cx} cy={LENS.cy} r={LENS.r} counts={counts} ghosts={ghosts} />
					<SvgText x={190} y={236} text="0.12 mol/L of PCl_5" size={50} color={NAVY} at={K5.c12} />
					<ColourKey x={225} y={870} at={-100} />
					<Pill x={190} y={256} w={480} text="still happening both ways" at={K5.still} out={K5.see - 4} color={TEAL} size={38} h={56} />
				</g>
				<EqRR x={1010} y={140} at={-100} fwdAt={-100} revAt={-100} fwdWordAt={-100} revWordAt={-100} size={40} />
				<Bars fwd={fwd} rev={rev} at={-100} fwdLabel={f >= K5.thirty ? '30' : ''} revLabel={f >= K5.thirty ? '30' : ''} />
				<g opacity={lockO}>
					<path d={`M${BARS.x0 + BARS.w},${yy(30)} L${BARS.x0 + BARS.gx},${yy(30)}`} stroke={TEAL} strokeWidth={6} strokeDasharray="10 8" />
					<text x={BARS.x0 + (BARS.gx + BARS.w) / 2} y={yy(30) - 96} textAnchor="middle" fill={TEAL} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 56}}>equal</text>
				</g>
				<NetArrow gap={fwd - rev} at={-100} zeroAt={K5.equal + 124} subAt={K5.madeFast} />
				<g opacity={tableOut}><StageTable rows={rows} at={-100} gapAt={-100} /></g>
				{/* colour evidence */}
				<Fade at={K5.chlorine} dur={14}>
					<circle cx={690} cy={760} r={30} fill="#d8e7a0" stroke={INK} strokeWidth={3} />
					<SvgText x={740} y={774} text="Cl_2: pale yellow-green" size={46} color={GREEN_INK} at={K5.chlorine} />
				</Fade>
				<Fade at={K5.vapour} dur={14}>
					<circle cx={690} cy={836} r={30} fill="#fbf9f1" stroke={INK} strokeWidth={3} />
					<SvgText x={740} y={850} text="PCl_5 vapour: nearly colourless" size={46} color={NAVY} at={K5.vapour} />
				</Fade>
				<Fade at={K5.flask}>
					<text x={690} y={925} fill={INK_SOFT} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40}}>flask colour</text>
					<rect x={860} y={894} width={620} height={36} rx={18} fill="#fffdf8" stroke={INK} strokeWidth={3} />
					<rect x={864} y={898} width={Math.max(0, 612 * eq)} height={28} rx={14} fill="#d3e48e" />
				</Fade>
				<Fade at={K5.darker}><SvgText x={1500} y={924} text="stops getting darker" size={42} color={TEAL} at={K5.darker} /></Fade>
				<Mark x={1868} y={914} at={K5.stopped} kind="tick" size={36} />
			</Overlay>
		</>
	);
};

// ---------- 5. Graphs ----------
const K6 = cues(sc('graphs'), {journey: 'whole journey', conc: 'concentrations', fall5: ['falls', 1], rise: 'rise together', c08: '0.08', c12: '0.12', match: "don't have to match", rates: 'Now the rates', fall: ['falls', 2], rises: 'rises', meet: 'meet', level: 'level', thirty: 'thirty', slip: 'common slip', neither: 'Neither rate'});
const GX = 220, GW = 1300, UMAX = 7;
const gx = (u: number) => GX + (u / UMAX) * GW;
const cy = (c: number) => 500 - (c / 0.22) * 300;
const ry = (r: number) => 870 - (r / 55) * 280;
const poly = (fn: (u: number) => number, ymap: (v: number) => number, u1 = UMAX) => {
	let d = '';
	for (let u = 0; u <= u1 + 1e-6; u += 0.05) d += `${u === 0 ? 'M' : 'L'}${gx(u).toFixed(1)},${ymap(fn(u)).toFixed(1)} `;
	return d;
};
const SNAP = [0, uWhere(0.04), uWhere(0.06), U_EQ];
export const SceneGraphs: React.FC = () => {
	const f = useCurrentFrame();
	const pcl5 = (u: number) => 0.2 - xAt('r', u);
	const prod = (u: number) => xAt('r', u);
	const fw = (u: number) => fwdModel('r', u);
	const rv = (u: number) => revModel('r', u);
	const dotAt = K6.fall5 + 100;
	return (
		<>
			<Heading text="The whole journey" at={4} size={58} />
			<Overlay>
				{/* axes */}
				<DrawPath d={`M${GX},200 L${GX},500 L${GX + GW + 20},500`} at={K6.journey} dur={26} color={INK} width={5} />
				<DrawPath d={`M${GX},590 L${GX},870 L${GX + GW + 20},870`} at={K6.journey + 10} dur={26} color={INK} width={5} />
				<SvgText x={GX + 12} y={196} text="concentration (mol/L)" size={36} color={INK_SOFT} at={K6.conc} />
				<SvgText x={GX + 12} y={582} text="rate (made-up units)" size={42} color={INK_SOFT} at={K6.rates} />
				<SvgText x={GX + GW + 36} y={500} text="time" size={44} color={INK_SOFT} at={K6.journey + 20} />
				<SvgText x={GX + GW + 36} y={870} text="time" size={44} color={INK_SOFT} at={K6.journey + 30} />
				<SvgText x={GX - 14} y={cy(0.2) + 12} text="0.20" size={40} color={INK_SOFT} anchor="end" at={K6.conc} />
				{/* concentration curves */}
				<DrawPath d={poly(pcl5, cy)} at={K6.fall5} dur={100} color={NAVY} width={9} />
				<DrawPath d={poly(prod, cy)} at={K6.rise} dur={90} color={GREENP} width={14} />
				<DrawPath d={poly(prod, cy)} at={K6.rise} dur={90} color={VIOLET} width={6} />
				<Fade at={K6.rise + 80}><SvgText x={gx(UMAX) + 18} y={cy(0.12) + 12} text="PCl_5" size={46} color={NAVY} at={K6.rise + 80} /><SvgText x={gx(UMAX) + 18} y={cy(0.08) + 14} text="PCl_3 and Cl_2" size={46} color={VIOLET} at={K6.rise + 90} /></Fade>
				<Fade at={K6.c08}><path d={`M${GX},${cy(0.08)} L${gx(UMAX)},${cy(0.08)}`} stroke={VIOLET} strokeWidth={3} strokeDasharray="10 9" /><SvgText x={GX - 14} y={cy(0.08) + 12} text="0.08" size={40} color={VIOLET} anchor="end" at={K6.c08} /></Fade>
				<Fade at={K6.c12}><path d={`M${GX},${cy(0.12)} L${gx(UMAX)},${cy(0.12)}`} stroke={NAVY} strokeWidth={3} strokeDasharray="10 9" /><SvgText x={GX - 14} y={cy(0.12) + 12} text="0.12" size={40} color={NAVY} anchor="end" at={K6.c12} /></Fade>
				<Fade at={K6.match}><Pill x={gx(3.2)} y={cy(0.2) - 6} w={430} text="they don't have to match" at={K6.match} color={TEAL} size={40} h={58} /></Fade>
				{/* rate curves */}
				<DrawPath d={poly(fw, ry)} at={K6.fall} dur={100} color={FWD} width={11} />
				<DrawPath d={poly(rv, ry)} at={K6.rises} dur={100} color={AMBER} width={6} />
				<Fade at={K6.rises + 90}><SvgText x={gx(UMAX) + 18} y={ry(30) - 28} text="forward" size={46} color={FWD} at={K6.rises + 90} /><SvgText x={gx(UMAX) + 18} y={ry(30) + 26} text="reverse" size={46} color={AMBER_INK} at={K6.rises + 100} /></Fade>
				{/* snapshot dots */}
				{SNAP.map((u, i) => {
					const t = [K6.rises + 30, K6.rises + 50, K6.rises + 70, K6.rises + 90][i];
					const o = prog(f, t, 10);
					return (
						<g key={i} opacity={o}>
							<circle cx={gx(u)} cy={cy(pcl5(u))} r={11} fill={NAVY} stroke="#fffdf8" strokeWidth={3} />
							<circle cx={gx(u)} cy={cy(prod(u))} r={11} fill={VIOLET} stroke="#fffdf8" strokeWidth={3} />
							<circle cx={gx(u)} cy={ry(fw(u))} r={11} fill={FWD} stroke="#fffdf8" strokeWidth={3} />
							<circle cx={gx(u)} cy={ry(rv(u))} r={11} fill={AMBER} stroke={INK} strokeWidth={2} />
						</g>
					);
				})}
				{/* equal moment */}
				<DrawPath d={`M${gx(U_EQ)},210 L${gx(U_EQ)},870`} at={K6.meet} dur={30} color={TEAL} width={5} dash="14 10" />
				<SvgText x={gx(U_EQ) - 12} y={560} text="rates equal" size={44} color={TEAL} anchor="end" at={K6.meet + 10} />
				<Fade at={K6.level}>
					<path d={`M${gx(U_EQ) + 20},${ry(30) - 26} L${gx(UMAX) - 10},${ry(30) - 26} M${gx(UMAX) - 32},${ry(30) - 40} L${gx(UMAX) - 10},${ry(30) - 26} L${gx(UMAX) - 32},${ry(30) - 12}`} fill="none" stroke={TEAL} strokeWidth={6} strokeLinecap="round" strokeLinejoin="round" />
					<SvgText x={gx(U_EQ) + 24} y={ry(30) - 96} text="both rates" size={42} color={TEAL} at={K6.level} />
					<SvgText x={gx(U_EQ) + 24} y={ry(30) - 54} text="stay level" size={42} color={TEAL} at={K6.level + 8} />
				</Fade>
				<Fade at={K6.thirty}>
					<path d={`M${GX},${ry(30)} L${gx(UMAX)},${ry(30)}`} stroke={TEAL} strokeWidth={3} strokeDasharray="10 9" />
					<SvgText x={GX - 14} y={ry(30) + 12} text="30" size={52} color={TEAL} anchor="end" at={K6.thirty} />
					<path d={`M${gx(5.9)},870 L${gx(5.9)},${ry(30) + 8}`} stroke={TEAL} strokeWidth={6} strokeLinecap="round" />
					<path d={`M${gx(5.9) - 14},${ry(30) + 30} L${gx(5.9)},${ry(30) + 6} L${gx(5.9) + 14},${ry(30) + 30}`} fill="none" stroke={TEAL} strokeWidth={6} strokeLinecap="round" strokeLinejoin="round" />
					<SvgText x={gx(5.9) + 22} y={810} text="30, not zero" size={46} color={TEAL} at={K6.thirty + 10} />
				</Fade>
				{/* the slip */}
				<Fade at={K6.slip} out={K6.neither + 60}>
					<rect x={1510} y={186} width={380} height={112} rx={40} fill="#fffdf8" stroke="#c4432f" strokeWidth={4} />
					<text x={1540} y={236} fill="#c4432f" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44}}>the reaction</text>
					<text x={1540} y={280} fill="#c4432f" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44}}>stops</text>
					<Mark x={1824} y={242} at={K6.slip + 24} kind="cross" size={60} />
				</Fade>
			</Overlay>
		</>
	);
};
