import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {
	AMBER, AMBER_INK, Body, Card, CELL_FILL, CELL_LINE, CellDot, COPY, CountChip, Cross, DrawPath, Enter, EggDot, Fade, FONT_HAND, Heading, INK, INK_SOFT, Label, Line, Loop, Nucleus, Overlay, PArt, pm, PL, Pill, pH, prog,
	PSeq, S, Scribble, SHARE, Split, SpermDot, SPLIT, Stamp, Strip, along,
} from './shared';

const PURPLE = '#7b4fb3';
const vis = (f: number, from: number, to?: number, d = 14) => prog(f, from, d) * (to === undefined ? 1 : 1 - prog(f, to, d));

// ---------- 6. Conjugation: DNA moves, no new cell ----------
const CW = 500, LX = 300, RX = 1120, CY1 = 250;
export const SceneConjugation: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('conjugation'), {
		touch: 'bacteria touch', bridge: 'thin bridge forms', passes: 'passes a copy', called: 'called conjugation', count: 'count the cells', before: 'Before, there were two', after: 'After, there are still two', nothing: 'Nothing divided',
		nonew: 'no new cell was made', indiv: 'making a new individual', isnt: "isn't reproduction", changes: 'changes what the cells carry', spread: 'spread a feature', resist: 'resistance to an antibiotic',
		surv: 'surviving a drug', fis: 'Fission makes more cells', conj2: 'Conjugation changes cells', fast: 'Fast copying makes lots', alike: 'alike, apart from rare errors',
	});
	const s = CW / 654;
	const midY = CY1 + (323 * s) / 2;
	const loopL: [number, number] = [LX + 290 * s, CY1 + 166 * s];
	const loopR: [number, number] = [RX + 290 * s, CY1 + 166 * s];
	const bp = prog(f, c.bridge, 34);
	const bridgeL = LX + CW, bridgeR = RX;
	const half = (bridgeR - bridgeL) / 2;
	const route: [number, number][] = [[loopL[0] + 80, loopL[1]], [bridgeL, midY], [bridgeR, midY], [loopR[0] - 90, loopR[1] - 30]];
	const travel = prog(f, c.passes, 56);
	const ring = along(route, travel);
	const ringO = prog(f, c.passes, 8);
	const phase1 = vis(f, c.count - 12, c.changes - 8);
	const phase2 = vis(f, c.changes - 4, c.fis - 10);
	const phase3 = vis(f, c.fis - 4);
	const beadP = prog(f, c.changes, 16);
	// antibiotic panel
	const dropP = prog(f, c.surv, 36);
	const cellsX = [400, 640, 880, 1120];
	const PY = 790;
	const fall = dropP * 120;
	return (
		<>
			<Heading items={[[0, 'One more thing about bacteria'], [c.called, 'Conjugation']]} size={72} />
			<PArt a={PL.cellL} x={LX} y={CY1} w={CW} style={{opacity: prog(f, 0, 20)}} />
			<PArt a={PL.cellR} x={RX} y={CY1} w={CW} style={{opacity: prog(f, 0, 20)}} />
			<Overlay>
				{/* the bridge draws on from both cells */}
				<rect x={bridgeL - 6} y={midY - 14} width={half * bp + 6} height={28} rx={6} fill="#e4eeb8" stroke={CELL_LINE} strokeWidth={5} />
				<rect x={bridgeR - half * bp} y={midY - 14} width={half * bp + 6} height={28} rx={6} fill="#e4eeb8" stroke={CELL_LINE} strokeWidth={5} />
				<Fade at={c.bridge + 10} out={c.passes - 6}><Label x={(bridgeL + bridgeR) / 2} y={midY - 40} at={c.bridge + 10} text="thin bridge" size={50} color={INK_SOFT} /></Fade>
				{/* the DNA copy travelling across, the donor keeps its own loop */}
				<g opacity={ringO}>
					<ellipse cx={ring[0]} cy={ring[1]} rx={26} ry={18} fill="none" stroke="#4a2a70" strokeWidth={11} />
					<ellipse cx={ring[0]} cy={ring[1]} rx={26} ry={18} fill="none" stroke={PURPLE} strokeWidth={6} />
				</g>
				<Fade at={c.passes + 14} out={c.count}><Label x={(bridgeL + bridgeR) / 2} y={CY1 + 290} at={c.passes + 14} text="a copy of some DNA" size={50} color={PURPLE} /></Fade>
				<Fade at={c.called}><Label x={(bridgeL + bridgeR) / 2} y={CY1 - 28} at={c.called} text="conjugation" size={66} color={AMBER_INK} /></Fade>
				{/* receiver now carries something new */}
				<g opacity={beadP * (1 - prog(f, c.fis - 10, 10))}>
					<Scribble cx={loopR[0]} cy={loopR[1]} rx={170} ry={134} at={c.changes} color={PURPLE} seed={8} width={6} />
				</g>
			</Overlay>

			{/* count the cells */}
			<div style={{position: 'absolute', inset: 0, opacity: phase1}}>
				<CountChip at={c.before} x={300} y={570} label="Before: 2" n={2} />
				<Enter at={c.after - 6} style={{position: 'absolute', left: 700, top: 584}}><span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 70, color: INK}}>=</span></Enter>
				<CountChip at={c.after} x={780} y={570} label="After: 2" n={2} />
				<Overlay>
					<Fade at={c.nonew}><Cross x={1640} y={612} s={1.7} at={c.nonew + 4} /></Fade>
				</Overlay>
				<Line at={c.nonew} x={1250} y={574} size={60} hand color={SPLIT}>no new cell</Line>
				<Card x={300} y={720} w={1320} at={c.indiv} tint="#fff6e0" pad="12px 28px">
					<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 56, color: AMBER_INK, lineHeight: 1.1}}>reproduction = making a new individual = a new cell</div>
				</Card>
				<Stamp at={c.isnt} x={1240} y={850} text="NOT REPRODUCTION" color={SPLIT} size={34} />
			</div>

			{/* B. a feature spreads through a crowd, and resistance */}
			<div style={{position: 'absolute', inset: 0, opacity: phase2}}>
				<Enter at={c.changes} style={{position: 'absolute', left: 300, top: 560}}>
					<span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 60, color: PURPLE}}>the receiving cell now carries something new</span>
				</Enter>
				<Overlay>
					{cellsX.map((x, i) => {
						const dead = i === 3 && dropP > 0.9;
						return (
							<g key={i}>
								<CellDot x={x} y={PY} r={66} dead={dead} bead={i < 3 && f >= c.spread + i * 14} />
								<Fade at={c.surv + 36}>
									{i < 3 ? <DrawPath d={`M${x - 20},${PY + 100} L${x - 4},${PY + 118} L${x + 24},${PY + 84}`} at={c.surv + 38 + i * 4} dur={12} color="#2f8a5b" width={9} /> : <Cross x={x} y={PY + 108} s={1.1} at={c.surv + 38} />}
								</Fade>
							</g>
						);
					})}
					<g opacity={prog(f, c.surv, 8) * (1 - prog(f, c.surv + 40, 10))} transform={`translate(${cellsX[3]},${PY - 250 + fall * 1.9})`}>
						<path d="M0,-40 C-26,-4 -24,26 0,30 C24,26 26,-4 0,-40Z" fill="#6fa8d8" stroke="#2a5f8f" strokeWidth={5} />
					</g>
				</Overlay>
				<Line at={c.spread} x={300} y={640} size={42} color={INK_SOFT}>a feature can spread through a crowd</Line>
				<Pill at={c.resist} x={1330} y={690} size={60} color={PURPLE}>resistance</Pill>
				<Line at={c.surv} x={1330} y={790} w={500} size={38}>surviving a drug that kills bacteria or stops them growing</Line>
			</div>

			{/* C. the rule, and what fast copying gives */}
			<div style={{position: 'absolute', inset: 0, opacity: phase3}}>
				<Line at={c.fis} x={300} y={580} size={76} hand color={SPLIT}>fission = more cells</Line>
				<Line at={c.conj2} x={300} y={676} size={76} hand color={PURPLE}>conjugation = changes cells that already exist</Line>
				<Overlay>
					{Array.from({length: 9}, (_, i) => <CellDot key={i} x={340 + i * 90} y={820} r={34} o={prog(f, c.fast + i * 3, 10)} />)}
				</Overlay>
				<Line at={c.fast + 10} x={300} y={880} size={38}>fast copying = lots of cells, alike apart from rare errors</Line>
			</div>
		</>
	);
};

// ---------- 7. The same pattern three ways ----------
const COLX = [96, 690, 1284];
export const SceneSamePattern: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('same-pattern'), {put: 'Put the three side by side', bact: 'A bacterium', yeast: 'a yeast', para: 'a paramecium', copy: 'copy their DNA', share: 'share the copies', split: 'and split', nojoin: 'no cell joins another'});
	// bacterium
	const BX = 116, BY = 395, BW = 500;
	const bm = pm(PL.fis1, BX, BY, BW);
	const bl = bm(897, 620);
	const cp = prog(f, c.copy, 20);
	const pulse = Math.sin(Math.PI * prog(f, c.copy, 30));
	// yeast
	const YX = 820, YY = 285, YW = 330;
	const ym = pm(PL.bud1, YX, YY, YW);
	const yn = ym(725, 657);
	// paramecium
	const PX = 1314, PY = 395, PW = 480;
	const pm2 = pm(PL.para, PX, PY, PW);
	const macro = pm2(908, 565), micro = pm2(1026, 591);
	const dupMove = 70 + 60 * prog(f, c.share, 24);
	const cutX = 1597;
	const slide = 34 * prog(f, c.split + 20, 20);
	const paraGlow = pulse;
	const parts: React.ReactNode = (
		<>
			<PArt a={PL.para} x={PX} y={PY} w={PW} />
			<Overlay>
				<g opacity={cp}>
					<ellipse cx={macro[0] + dupMove} cy={macro[1]} rx={38} ry={20} fill="#7b4fb3" stroke="#4a2a70" strokeWidth={4} opacity={0.92} />
					<circle cx={micro[0] + dupMove} cy={micro[1]} r={9} fill="#7b4fb3" stroke="#4a2a70" strokeWidth={3} />
				</g>
				<g opacity={paraGlow}>
					<circle cx={macro[0]} cy={macro[1]} r={52} fill="none" stroke={AMBER} strokeWidth={7} />
					<circle cx={micro[0]} cy={micro[1]} r={18} fill="none" stroke={AMBER} strokeWidth={7} />
				</g>
			</Overlay>
		</>
	);
	const stepWord = (x: number, text: string, at: number, color: string) => (
		<div style={{position: 'absolute', left: x, top: 690, opacity: 0.3 + 0.7 * prog(f, at, 10), fontFamily: FONT_HAND, fontWeight: 700, fontSize: 48, color}}>{text}</div>
	);
	return (
		<>
			<Heading items={[[0, 'The same pattern, three ways']]} size={72} />
			{[['bacterium', c.bact], ['yeast', c.yeast], ['paramecium', c.para]].map(([name, at], i) => (
				<React.Fragment key={name as string}>
					<div style={{position: 'absolute', left: COLX[i] - 6, top: 215, width: 540, height: 560, borderRadius: 28, background: '#fffdf8', border: '1.5px solid rgba(60,45,20,0.08)', boxShadow: '0 18px 40px rgba(60,45,20,0.08)', opacity: prog(f, at as number, 16), transform: `translateY(${(1 - prog(f, at as number, 16)) * 18}px)`}} />
					<Enter at={(at as number) + 4} style={{position: 'absolute', left: COLX[i] + 22, top: 226}}><span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 56, color: INK}}>{name as string}</span></Enter>
					{stepWord(COLX[i] + 22, 'copy', c.copy, COPY)}
					{stepWord(COLX[i] + 190, 'share', c.share, SHARE)}
					{stepWord(COLX[i] + 360, 'split', c.split, SPLIT)}
				</React.Fragment>
			))}
			<div style={{opacity: prog(f, c.bact, 16)}}><PSeq arts={[PL.fis1, PL.fis2, PL.fis3]} x={BX} y={BY} w={BW} at={[c.share, c.split]} dur={20} /></div>
			<div style={{opacity: prog(f, c.yeast, 16)}}><PSeq arts={[PL.bud1, PL.bud2, PL.bud3]} x={YX} y={YY + 40} w={YW} at={[c.share, c.split]} dur={20} /></div>
			<Overlay>
				<g opacity={prog(f, c.copy, 10) * (1 - prog(f, c.share, 16))}>
					<Loop x={bl[0]} y={bl[1]} s={0.7} ring={pulse} o={0} />
					<circle cx={bl[0]} cy={bl[1]} r={40 + 12 * pulse} fill="none" stroke={AMBER} strokeWidth={7} opacity={pulse} />
					<Loop x={bl[0] + 100 * cp} y={bl[1]} s={0.62} o={cp} />
				</g>
				<g opacity={1 - prog(f, c.share, 16)}>
					<circle cx={yn[0]} cy={yn[1] + 40} r={42 + 10 * pulse} fill="none" stroke={AMBER} strokeWidth={7} opacity={pulse} />
					<Nucleus x={yn[0] + 55 * cp} y={yn[1] + 40 - 30 * cp} r={20} o={cp} />
				</g>
			</Overlay>
			<div style={{opacity: prog(f, c.para, 16)}}>
				{f >= c.split ? <Split cut={cutX} d={slide}>{parts}</Split> : parts}
			</div>
			<Overlay>
				<DrawPath d={`M${cutX},${PY - 20} L${cutX},${PY + 230}`} at={c.split} dur={20} color={SPLIT} width={6} dash="12 10" opacity={1 - prog(f, c.split + 22, 12)} />
				<Fade at={c.share} out={c.split}><DrawPath d={`M${PX + 220},${PY + 220} L${PX + 300},${PY + 220}`} at={c.share} dur={12} color={SHARE} width={7} /></Fade>
			</Overlay>
			{/* no cell joins another */}
			<Overlay>
				<g opacity={prog(f, c.nojoin, 14)}>
					<SpermDot x={700} y={822} s={2.4} />
					<EggDot x={800} y={822} r={26} />
					<Cross x={750} y={822} s={2.2} at={c.nojoin + 8} />
				</g>
			</Overlay>
			<Pill at={c.nojoin} x={880} y={790} size={54}>no cell joins another</Pill>
			<Strip on={[[c.copy], [c.share], [c.split]]} y={892} />
		</>
	);
};
void [AMBER_INK, Body, CELL_FILL, COPY, INK, along, pH, Label, Line];
