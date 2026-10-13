import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {
	AMBER, AMBER_INK, Arrow, Bracket, Cross, DrawPath, Enter, FONT_DISPLAY, FONT_HAND, GREYTAG, Hand, Heading, INK, INK_SOFT, Label, O2, Overlay, PArt, PL, prog, PURPLE, Rail, RoundPlate, ROSE, S, Say,
	StackedSupply, TEAL, TEAL_INK, GraphAxes, G, YELLOW, vis,
} from './shared';

// ---------- 7a. The hand-over ----------
const Pill2: React.FC<{at: number; x: number; y: number; w: number; text: string; color: string; lit?: number; grey?: number}> = ({at, x, y, w, text, color, grey = 0}) => (
	<Enter at={at} style={{position: 'absolute', left: x, top: y, width: w}}>
		<div style={{height: 52, borderRadius: 999, background: '#fffdf8', border: `4px solid ${grey > 0.5 ? '#b9b3a8' : color}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, color: grey > 0.5 ? '#9a948a' : INK, opacity: grey > 0.5 ? 0.7 : 1, whiteSpace: 'nowrap'}}>{text}</div>
	</Enter>
);
export const SceneHandover: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('handover'), {
		last: 'last long enough', neworg: 'a new organ', forms: 'the placenta forms', tissue: "the embryo's tissue", lining: "the mother's lining", over: 'Over the first two', takes: 'takes over making the progesterone', nolonger: 'no longer depends',
	});
	const p = interpolate(f, [8, 60, c.forms, c.forms + 90, c.over, c.takes + 70], [0, 0.4, 0.4, 0.5, 0.5, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
	const grey = prog(f, c.takes, 14);
	const FP = {x: 1330, y: 215, w: 508};
	const gOp = prog(f, 4, 14);
	return (
		<>
			<Heading items={[[0, 'The placenta takes over'], [c.takes, 'The pregnancy no longer needs the corpus luteum']]} size={66} />
			<Overlay>
				<g transform="translate(96,200)" opacity={gOp}>
					<GraphAxes at={4} xlabel="weeks after fertilisation" labels />
					<StackedSupply p={p} />
					{/* legend */}
					<g>
						<g opacity={prog(f, 18, 14)}><rect x={110} y={58} width={34} height={22} rx={4} fill="#f6c86a" stroke={YELLOW} strokeWidth={5} /><text x={156} y={78} style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 32}} fill={INK}>from the corpus luteum</text></g>
						<g opacity={prog(f, c.forms + 10, 14)}><rect x={110} y={108} width={34} height={22} rx={4} fill="#f0a830" stroke={TEAL} strokeWidth={5} /><text x={156} y={128} style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 32}} fill={INK}>from the placenta</text></g>
					</g>
					<Bracket x1={379} x2={546} y={500} at={c.over} />
					<line x1={379} x2={379} y1={G.y0} y2={G.y0 + 10} stroke={INK} strokeWidth={4} /><line x1={546} x2={546} y1={G.y0} y2={G.y0 + 10} stroke={INK} strokeWidth={4} />
					<text x={462} y={542} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40}} fill={AMBER_INK} opacity={prog(f, c.over + 12, 14)}>first 2 to 3 months</text>
				</g>
			</Overlay>
						{/* the organ chain returns small */}
			<Pill2 at={20} x={96} y={776} w={160} text="embryo" color={TEAL} />
			<Pill2 at={20} x={440} y={776} w={250} text="corpus luteum" color={YELLOW} grey={grey} />
			<Pill2 at={20} x={900} y={776} w={150} text="lining" color={AMBER} />
			<Overlay>
				<Arrow x1={262} y1={802} x2={432} y2={802} at={20} color={grey > 0.5 ? '#b9b3a8' : TEAL} width={7} dur={14} head={16} />
				<Label x={346} y={790} at={24} text="hCG" size={40} color={grey > 0.5 ? '#9a948a' : TEAL_INK} />
				<Arrow x1={696} y1={802} x2={892} y2={802} at={20} color={grey > 0.5 ? '#b9b3a8' : AMBER} width={7} dur={14} head={16} />
				<Arrow x1={696} y1={858} x2={940} y2={836} at={c.takes + 10} color={AMBER} width={7} dur={18} head={16} />
				<Label x={800} y={850} at={c.takes + 20} text="progesterone" size={34} color={AMBER_INK} anchor="middle" />
			</Overlay>
			<Pill2 at={c.takes} x={440} y={834} w={250} text="placenta" color={TEAL} />
			{/* fetus and placenta plate */}
			<div style={{position: 'absolute', inset: 0, opacity: prog(f, c.forms - 4, 24)}}>
				<PArt a={PL.fetus} x={FP.x} y={FP.y} w={FP.w} />
				<Overlay>
					<ellipse cx={1688} cy={432} rx={48} ry={124} fill={TEAL} opacity={0.4 * prog(f, c.tissue, 16)} />
					<ellipse cx={1736} cy={432} rx={48} ry={124} fill={ROSE} opacity={0.4 * prog(f, c.lining, 16)} />
				</Overlay>
				<Say at={c.forms + 16} x={1250} y={862} w={640} size={32} color={INK_SOFT} weight={600}>later in pregnancy (about 5 months)</Say>
			</div>
			<Hand at={c.over + 12} x={930} y={300} w={380} size={46} color={AMBER_INK}>the main shift</Hand>
			<Hand at={c.takes + 20} x={930} y={440} w={380} size={46} color={TEAL_INK}>placenta the main source</Hand>
			<Rail upTo={5} newAt={c.takes} />
			<div style={{display: 'none'}}>{[AMBER, DrawPath, GREYTAG, INK, O2, PURPLE, RoundPlate, Cross, vis, Say, Overlay].length}</div>
		</>
	);
};

// ---------- exchange close-up (used by 7b and by feedback three) ----------
const PX = 1180, PY = 230, PW = 650, PH = 640;
const RY = 330, BY = 510;
export type ExCues = {flow: number; mix: number; more: number; cross: number; nutr: number; waste: number};
const O2_X = Array.from({length: 11}, (_, i) => 1340 + i * 38);
const O2_Y0 = (i: number) => 382 + ((i * 37) % 70);
const O2_Y1 = (i: number) => 556 + ((i * 29) % 70);
export const ExchangePanel: React.FC<{c: ExCues; ox?: number; oy?: number; o?: number; title?: string; fillAt?: number; fall?: boolean}> = ({c, ox = PX, oy = PY, o = 1, title = 'later in pregnancy: the fetal stage', fillAt = 0}) => {
	const f = useCurrentFrame();
	const dx = ox - PX, dy = oy - PY;
	const blue = (x: number, y: number, k: number) => <circle key={k} cx={x} cy={y} r={11} fill={O2} stroke="#2f6a9d" strokeWidth={2.5} />;
	const chev = (row: number) => Array.from({length: 4}, (_, i) => {
		const ph = ((f - c.flow) / 80 + i / 4) % 1;
		const x = 1230 + ph * 560;
		const y = row === 0 ? RY + 112 : BY + 112;
		return <path key={i} d={`M${x},${y - 12} l16,12 l-16,12`} fill="none" stroke={row === 0 ? ROSE : PURPLE} strokeWidth={6} strokeLinecap="round" opacity={0.7 * Math.sin(ph * Math.PI)} />;
	});
	void fillAt;
	return (
		<g transform={`translate(${dx},${dy})`} opacity={o}>
			<rect x={PX} y={PY} width={PW} height={PH} rx={28} fill="#fbf6ec" stroke={INK} strokeWidth={5} />
			<text x={PX + PW / 2} y={PY + 52} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 46}} fill={INK}>{title}</text>
			{/* mother's blood */}
			<rect x={1200} y={RY} width={610} height={140} rx={16} fill="#f8d9de" stroke={ROSE} strokeWidth={5} />
			<text x={1216} y={RY + 38} style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 32}} fill="#a1485a">mother's blood</text>
			{/* thin barrier */}
			<rect x={1200} y={RY + 140} width={610} height={40} fill="#fffdf8" stroke="none" />
			<line x1={1200} x2={1810} y1={RY + 141} y2={RY + 141} stroke={INK_SOFT} strokeWidth={4} />
			<line x1={1200} x2={1810} y1={RY + 179} y2={RY + 179} stroke={INK_SOFT} strokeWidth={4} />
			<text x={1300} y={RY + 168} textAnchor="start" style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 28}} fill={INK_SOFT} opacity={prog(f, c.mix - 20, 12)}>thin membranes</text>
			{/* baby's blood */}
			<rect x={1200} y={BY + 20} width={610} height={140} rx={16} fill="#e6dcf3" stroke={PURPLE} strokeWidth={5} />
			<text x={1216} y={BY + 150} style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 32}} fill="#573a86">baby's blood</text>
			<g opacity={prog(f, c.flow, 14)}>{chev(0)}{chev(1)}</g>
			{/* no mixing: the two bloods stop at the membrane (droplets), separate from the oxygen arrow */}
			<g opacity={prog(f, c.mix, 12)}>
				<path d={`M1788,${RY + 98} C1802,${RY + 118} 1800,${RY + 132} 1788,${RY + 132} C1776,${RY + 132} 1774,${RY + 118} 1788,${RY + 98}Z`} fill={ROSE} stroke="#a1485a" strokeWidth={3} />
				<path d={`M1788,${BY + 54} C1802,${BY + 34} 1800,${BY + 20} 1788,${BY + 20} C1776,${BY + 20} 1774,${BY + 34} 1788,${BY + 54}Z`} fill={PURPLE} stroke="#573a86" strokeWidth={3} />
			</g>
			<Cross x={1788} y={RY + 160} s={1.2} at={c.mix + 8} />
			<Label x={1750} y={RY + 168 + 8} at={c.mix + 14} text="no mixing" size={42} color="#c4432f" anchor="end" />
			{/* oxygen crosses: its own arrow */}
			<g opacity={prog(f, c.cross, 14)}>
				<path d={`M1276,${RY + 64} L1276,${BY + 54}`} stroke="#2f8f5b" strokeWidth={7} strokeLinecap="round" />
				<path d={`M1260,${BY + 38} L1276,${BY + 58} L1292,${BY + 38}`} fill="none" stroke="#2f8f5b" strokeWidth={7} strokeLinecap="round" strokeLinejoin="round" />
				<text transform={`translate(1254,${(RY + BY + 118) / 2}) rotate(-90)`} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 24}} fill="#2f8f5b">crosses the barrier</text>
			</g>
			{/* oxygen */}
			{O2_X.map((x, i) => {
				const appear = prog(f, c.more + i * 2, 8);
				const move = prog(f, c.cross + i * 5, 44);
				const y = O2_Y0(i) + (O2_Y1(i) - O2_Y0(i)) * move;
				return <g key={i} opacity={appear}>{blue(x + Math.sin(i + f / 14) * 4, y, i)}</g>;
			})}
			{[0, 1, 2].map(i => <g key={'p' + i} opacity={prog(f, c.more + 20, 10)}>{blue(1340 + i * 180, 598 + (i % 2) * 24, 100 + i)}</g>)}
			<Label x={1792} y={RY + 38} at={c.more} text="more oxygen" size={36} color="#2f6a9d" anchor="end" />
			<Label x={1792} y={BY + 150} at={c.more + 30} text="less oxygen" size={36} color="#2f6a9d" anchor="end" />
			{/* nutrients cross the same way */}
			{Array.from({length: 6}, (_, i) => {
				const move = prog(f, c.nutr + i * 6, 44);
				const y0 = 400 + ((i * 41) % 60), y1 = 580 + ((i * 23) % 50);
				const x = 1340 + i * 72;
				return <circle key={i} cx={x} cy={y0 + (y1 - y0) * move} r={10} fill={AMBER} stroke={AMBER_INK} strokeWidth={2.5} opacity={prog(f, c.nutr, 8)} />;
			})}
			{/* carbon dioxide and wastes go the other way */}
			{Array.from({length: 6}, (_, i) => {
				const move = prog(f, c.waste + i * 6, 44);
				const y0 = 590 + ((i * 17) % 40), y1 = 405 + ((i * 31) % 50);
				const x = 1350 + i * 68;
				return <rect key={i} x={x - 9} y={y0 + (y1 - y0) * move - 9} width={18} height={18} rx={5} fill="#8d949b" stroke="#5d646b" strokeWidth={2.5} opacity={prog(f, c.waste, 8)} />;
			})}
			{/* legend */}
			<g opacity={prog(f, c.more, 12)}><circle cx={1222} cy={PY + PH - 92} r={11} fill={O2} stroke="#2f6a9d" strokeWidth={2.5} /><text x={1244} y={PY + PH - 80} style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 30}} fill={INK}>oxygen</text></g>
			<g opacity={prog(f, c.nutr, 12)}><circle cx={1360} cy={PY + PH - 92} r={10} fill={AMBER} stroke={AMBER_INK} strokeWidth={2.5} /><text x={1380} y={PY + PH - 80} style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 30}} fill={INK}>nutrients</text></g>
			<g opacity={prog(f, c.waste, 12)}><rect x={1500} y={PY + PH - 102} width={18} height={18} rx={5} fill="#8d949b" stroke="#5d646b" strokeWidth={2.5} /><text x={1528} y={PY + PH - 80} style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 28}} fill={INK}>carbon dioxide, wastes</text></g>
			<text x={PX + PW / 2} y={PY + PH - 22} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30}} fill={INK} opacity={prog(f, c.mix + 24, 12)}>no mixing: things cross the thin barrier</text>
		</g>
	);
};

// ---------- 7b. Embryo, fetus and what the placenta carries ----------
const EmbryoDraw: React.FC<{x: number; y: number}> = ({x, y}) => (
	<g transform={`translate(${x},${y})`}>
		<path d="M10,56 C-14,30 6,-10 40,-12 C78,-14 90,26 62,48 C50,58 54,74 74,78 C56,92 30,82 24,70" fill="#f2cfb4" stroke="#b07f61" strokeWidth={5} strokeLinejoin="round" strokeLinecap="round" />
		<circle cx={38} cy={14} r={12} fill="#f2cfb4" stroke="#b07f61" strokeWidth={4} />
		<circle cx={20} cy={66} r={9} fill="#f2cfb4" stroke="#b07f61" strokeWidth={4} /><circle cx={70} cy={58} r={9} fill="#f2cfb4" stroke="#b07f61" strokeWidth={4} />
		<circle cx={42} cy={14} r={3} fill="#6c4a35" />
	</g>
);
export const SceneExchange: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('exchange'), {
		emb: 'called an embryo', forming: 'organs are forming', fetus: 'called a fetus', grows: 'grows and matures', later1: 'Later it is', later: 'Later in pregnancy', like: 'like this', flow: 'flow close together', mix: "don't mix", more: 'Oxygen moves', cross: "into the baby's blood", nutr: 'Nutrients cross too', waste: 'Carbon dioxide',
	});
	const lens = prog(f, c.later, 34);
	const FPL = {x: 610, y: 215, w: 460};
	const lx = FPL.x + 0.757 * FPL.w, ly = FPL.y + 0.328 * ((FPL.w * 1439) / 1143);
	return (
		<>
			<Heading items={[[0, 'Embryo, then fetus'], [c.later, 'How the placenta feeds the fetus']]} size={72} />
			<Enter at={8} style={{position: 'absolute', left: 96, top: 250, width: 470}}>
				<div style={{background: '#fffdf8', borderRadius: 22, padding: '18px 22px', boxShadow: '0 18px 40px rgba(60,45,20,0.10)', border: '1.5px solid rgba(60,45,20,0.08)', height: 150, boxSizing: 'border-box', display: 'flex', alignItems: 'center', gap: 20}}>
					<svg width={110} height={110} viewBox="-10 -24 110 124"><EmbryoDraw x={0} y={0} /></svg>
					<div style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 32, color: INK, lineHeight: 1.18}}><span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 52, color: TEAL_INK}}>embryo</span><br />organs forming</div>
				</div>
			</Enter>
			<Enter at={c.later1 - 4} style={{position: 'absolute', left: 96, top: 440, width: 470}}>
				<div style={{background: '#fffdf8', borderRadius: 22, padding: '18px 22px', boxShadow: '0 18px 40px rgba(60,45,20,0.10)', border: '1.5px solid rgba(60,45,20,0.08)', height: 150, boxSizing: 'border-box', display: 'flex', alignItems: 'center', gap: 20}}>
					<div style={{width: 110, height: 110, flex: 'none', position: 'relative'}}><RoundPlate a={PL.fetusHead} x={0} y={0} d={110} ring={INK_SOFT} /></div>
					<div style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 32, color: INK, lineHeight: 1.18}}><span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 52, color: AMBER_INK}}>fetus</span><br />grows and matures</div>
				</div>
			</Enter>
			<div style={{position: 'absolute', inset: 0, opacity: prog(f, c.later1 - 2, 24)}}>
				<PArt a={PL.fetus} x={FPL.x} y={FPL.y} w={FPL.w} />
				<Say at={c.later1 + 20} x={560} y={812} w={600} size={32} color={INK_SOFT}>later in pregnancy (about 5 months)</Say>
			</div>
			<Overlay>
				<g opacity={lens}>
					<circle cx={lx} cy={ly} r={78 * (0.4 + 0.6 * lens)} fill="rgba(255,255,255,0.18)" stroke={INK} strokeWidth={8} />
					<path d={`M${lx + 70},${ly - 30} L${PX},${PY + 20} M${lx + 70},${ly + 30} L${PX},${PY + PH - 20}`} stroke={INK_SOFT} strokeWidth={4} strokeDasharray="4 12" strokeLinecap="round" />
				</g>
			</Overlay>
			<div style={{position: 'absolute', inset: 0, transformOrigin: `${lx}px ${ly}px`, transform: `scale(${0.1 + 0.9 * lens})`, opacity: Math.min(1, lens * 3)}}>
				<Overlay><ExchangePanel c={{flow: c.flow, mix: c.mix, more: c.more, cross: c.cross, nutr: c.nutr, waste: c.waste}} /></Overlay>
			</div>
			<Rail upTo={5} />
			<div style={{display: 'none'}}>{[AMBER, Arrow, DrawPath, GREYTAG, TEAL, YELLOW, vis, interpolate, Bracket, Label].length}</div>
		</>
	);
};
