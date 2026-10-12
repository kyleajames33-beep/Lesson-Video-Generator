import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER_INK, DrawPath, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {cues} from '../../cues';
import {BARS, Bars, Fade, NetBar, Overlay, Pill, RxnChip, SvgText, Syringe, TEAL, FWD} from './parts';
import type {Piece} from './parts';
import {BAR_SCALE, CHIP_L, CHIP_R, N2O4G, NO2G, Title, shade, train, BX} from './board';
import {CO_C, CO_INK, HI_C, HI_INK, IODINE, IODINE_DEEP, IODINE_INK, IODINE_PALE, N2O4_INK, NO2_INK, hexMix, kf, sc} from './common';

// ---------- 5. Why the squeeze favours fewer gas particles ----------
const K1 = cues(sc('fewer-gas-particles'), {why: 'why did joining gain more', dep: ['depends on more gas particles', 1], rule: 'That gives a rule', squeeze: 'A squeeze speeds up', fewer: 'fewer gas particles', count: 'Count only the gases', moles: 'moles of gas', numbers: 'numbers in front', ammonia: 'nitrogen plus three hydrogen', four: 'four gas particles', two: 'two on the right', fwd: ['forward reaction depends', 1], squeezing: 'Squeezing shifts it right', expanding: 'Expanding', opposite: 'does the opposite', more: 'side with more gas particles'});
export const SceneFewer: React.FC = () => {
	const f = useCurrentFrame();
	const E = K1.expanding;
	// right side: the squeezed syringe, then reset to equilibrium and pulled out to double the volume
	const vol = kf(f, [[E - 10, 0.5], [E + 20, 1], [K1.opposite - 20, 1], [K1.opposite + 50, 2]]);
	const fwd = kf(f, [[E - 10, 128], [E + 20, 32], [K1.opposite, 32], [K1.opposite + 50, 8]]);
	const rev = kf(f, [[E - 10, 64], [E + 20, 32], [K1.opposite + 20, 32], [K1.opposite + 60, 16]]);
	const bursts = [...train(K1.why, E, 16, 'join'), ...train(K1.why + 8, E, 36, 'split')];
	const left1: Piece[] = [{t: '2NO_2(g)', color: NO2_INK, dot: '#9a5a24', cap: '2 gas particles', capAt: K1.rule + 10}];
	const right1: Piece[] = [{t: 'N_2O_4(g)', color: N2O4_INK, dot: '#ece6d6', cap: '1 gas particle', capAt: K1.rule + 24}];
	const left2: Piece[] = [{t: 'N_2(g)', cap: '1', capAt: K1.four}, {t: '+'}, {t: '3H_2(g)', cap: '3', capAt: K1.four + 12}];
	const right2: Piece[] = [{t: '2NH_3(g)', cap: '2', capAt: K1.two}];
	const ex = f >= E;
	return (
		<>
			<Title text="The counting rule" />
			<RxnChip x={96} y={200} at={K1.why - 10} left={left1} right={right1} size={44} words={false} fwdLit={K1.fewer} revLit={-100} capPad={36} fwdTag={{text: 'squeeze: shift right', at: K1.squeeze, color: FWD}} />
			<RxnChip x={96} y={520} at={K1.ammonia} left={left2} right={right2} size={44} words={false} fwdLit={K1.fwd} revLit={-100} capPad={36} fwdTag={{text: 'squeeze: shift right', at: K1.squeezing, color: FWD}} />
			<Overlay>
				<Pill x={96} y={716} w={600} text="in this simple model (one-step reactions)" at={K1.dep} color={INK_SOFT} size={30} h={50} />
				<Fade at={K1.dep}><SvgText x={96} y={472} text="joining depends on more gas particles, so it gains more" size={32} color={FWD} at={K1.dep} hand={false} weight={600} /></Fade>
				<Fade at={K1.count}><SvgText x={96} y={858} text="Count only the gases" size={54} color={TEAL} at={K1.count} /></Fade>
				<Fade at={K1.moles}><SvgText x={96} y={918} text="moles of gas = the numbers in front of the gases" size={34} color={INK} at={K1.moles} hand={false} weight={600} /></Fade>
				<Fade at={K1.four}><SvgText x={96} y={800} text="left: 1 + 3 = 4 gas particles, right: 2" size={34} color={FWD} at={K1.four} hand={false} weight={600} /></Fade>
				<Fade at={K1.fewer}><SvgText x={1250} y={260} text={ex ? 'volume doubled' : 'squeezed to half'} size={38} color={INK_SOFT} at={K1.why} /></Fade>
				<Bars fwd={fwd} rev={rev} at={K1.why} scale={BAR_SCALE} x0={1330} />
				<Fade at={K1.dep} out={E - 10}>
					<SvgText x={1250} y={800} text="joining: depends on 2 gas particles" size={34} color={FWD} at={K1.dep} hand={false} weight={600} />
					<SvgText x={1250} y={846} text="splitting: depends on 1" size={34} color={AMBER_INK} at={K1.dep + 20} hand={false} weight={600} />
				</Fade>
				<Fade at={E + 30}>
					<SvgText x={1250} y={800} text="joining: 32 × 1/2 × 1/2 = 8" size={34} color={FWD} at={K1.opposite + 20} hand={false} weight={600} />
					<SvgText x={1250} y={846} text="splitting: 32 × 1/2 = 16" size={34} color={AMBER_INK} at={K1.opposite + 44} hand={false} weight={600} />
				</Fade>
				<Fade at={K1.more}>
					<path d="M1750,914 L1560,914 M1590,896 L1558,914 L1590,932" stroke={AMBER_INK} strokeWidth={8} fill="none" strokeLinecap="round" strokeLinejoin="round" />
					<SvgText x={1250} y={936} text="toward more gas" size={34} color={AMBER_INK} at={K1.more + 6} />
				</Fade>
			</Overlay>
			<Syringe x={1250} y={90} w={600} left={200} vol={vol} groups={[NO2G(16), N2O4G(8)]} tint={shade(0.5 / vol)} bursts={bursts} opacity={prog(f, K1.why - 10, 16)} seed={5} />
		</>
	);
};

// ---------- 6a. Equal counts ----------
const K2 = cues(sc('equal-counts'), {what: 'What if both sides', h2: 'hydrogen plus purple iodine', hi: 'two colourless hydrogen iodide', hot: 'as hot gases', two: 'two against two', dbl: 'A squeeze doubles', meet: 'two particles to meet', four: 'four times', equal: 'stay equal', darker: 'purple is darker', nothing: 'nothing shifts'});
export const SceneEqual: React.FC = () => {
	const f = useCurrentFrame();
	const vol = kf(f, [[K2.dbl, 1], [K2.dbl + 80, 0.5]]);
	const bar = kf(f, [[K2.four - 30, 24], [K2.four + 30, 96]]);
	const left: Piece[] = [{t: 'H_2(g)', cap: '1', capAt: K2.two - 20}, {t: '+'}, {t: 'I_2(g)', color: IODINE_INK, cap: '1', capAt: K2.two - 10}];
	const right: Piece[] = [{t: '2HI(g)', color: HI_INK, cap: '2', capAt: K2.two}];
	const bursts = [...train(K2.dbl + 60, 1000, 16, 'join'), ...train(K2.dbl + 68, 1000, 16, 'split')];
	return (
		<>
			<Title text="Equal numbers of gas particles" size={62} />
			<RxnChip x={96} y={190} at={K2.what} left={left} right={right} size={48} words={false} fwdLit={-100} revLit={-100} capPad={36} />
			<Syringe x={96} y={470} w={1000} vol={vol} groups={[{n: 6, kind: 'dot', r: 8, fill: HI_C, stroke: HI_INK, seed: 21}, {n: 6, kind: 'pair', r: 11, fill: IODINE, stroke: IODINE_INK, seed: 22}, {n: 12, kind: 'dot', r: 7, fill: '#ffffff', stroke: HI_INK, seed: 23}]} tint={hexMix(IODINE_PALE, IODINE_DEEP, 0.5 / vol * 0.9 - 0.2)} bursts={bursts} opacity={prog(f, K2.h2 - 10, 20)} seed={7} />
			<Overlay>
				<Pill x={1010} y={92} w={330} text="hot gases" at={K2.hot} color={INK_SOFT} size={40} h={58} />
				<Fade at={K2.two}><SvgText x={96} y={450} text="gas particles: 2 against 2" size={44} color={TEAL} at={K2.two} /></Fade>
				<Fade at={K2.h2}><SvgText x={150} y={730} text="I_2: purple" size={38} color={IODINE_INK} hand={false} weight={700} at={K2.h2} /><SvgText x={420} y={730} text="HI and H_2: colourless" size={38} color={HI_INK} hand={false} weight={700} at={K2.hi} /></Fade>
				<Fade at={K2.darker}><SvgText x={96} y={790} text="darker, but no shift" size={54} color={IODINE_INK} at={K2.darker} /></Fade>
				<Fade at={K2.meet}><SvgText x={700} y={420} text="both reactions need" size={36} color={INK} at={K2.meet} hand={false} weight={600} /><SvgText x={700} y={466} text="two particles to meet" size={36} color={INK} at={K2.meet + 6} hand={false} weight={600} /></Fade>
				<Bars x0={BX} fwd={bar} rev={bar} at={K2.dbl} scale={BAR_SCALE} fwdLabel={f >= K2.four ? '× 4' : '24'} revLabel={f >= K2.four ? '× 4' : '24'} />
				<g opacity={prog(f, K2.equal, 14)}>
					<path d={`M${BX + BARS.w},${BARS.base - bar * BAR_SCALE} L${BX + BARS.gx},${BARS.base - bar * BAR_SCALE}`} stroke={TEAL} strokeWidth={6} strokeDasharray="10 8" />
					<text x={BX + (BARS.gx + BARS.w) / 2} y={BARS.base - bar * BAR_SCALE - 100} textAnchor="middle" fill={TEAL} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 56}}>equal</text>
				</g>
				<NetBar xc={110} y={900} gap={0} at={K2.nothing - 10} zeroAt={K2.nothing} />
			</Overlay>
		</>
	);
};

// ---------- 6b. Solids ----------
const K3 = cues(sc('solids'), {pure: 'Pure solids', crowd: 'any more crowded', carbon: 'solid carbon', co2: 'carbon dioxide', co: 'two carbon monoxide', only: 'only the gases count', one: 'one on the left', two: 'two on the right', rule: 'same rule applies', fewer: 'fewer gas particles', left: ['left', 2]});
export const SceneSolids: React.FC = () => {
	const f = useCurrentFrame();
	const sq = kf(f, [[K3.crowd, 0], [K3.crowd + 50, 1]]);
	const left: Piece[] = [{t: 'C(s)', color: INK_SOFT, cap: 'solid', capAt: K3.carbon}, {t: '+'}, {t: 'CO_2(g)', color: INK, cap: '1 gas particle', capAt: K3.one}];
	const right: Piece[] = [{t: '2CO(g)', color: CO_INK, cap: '2 gas particles', capAt: K3.two}];
	const blockW = 200, blockH = 150;
	return (
		<>
			<Title text="Solids do not count" />
			<RxnChip x={96} y={200} at={K3.carbon - 20} left={left} right={right} size={54} words={false} fwdLit={-100} revLit={K3.left} capPad={36} revTag={{text: 'squeeze: shift left', at: K3.left, color: AMBER_INK}} />
			<Overlay>
				<Fade at={K3.pure}><SvgText x={1230} y={226} text="pure solids and pure liquids" size={38} color={INK} at={K3.pure} /><SvgText x={1230} y={272} text="do not count" size={38} color={INK} at={K3.pure + 8} /></Fade>
				{/* a pure solid keeps its size when squeezed */}
				<Fade at={K3.pure + 20}>
					<rect x={1240} y={340} width={blockW} height={blockH} rx={14} fill="#6b6a73" stroke={INK} strokeWidth={6} />
					<text x={1340} y={430} textAnchor="middle" fill="#fffdf8" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 52}}>C(s)</text>
					<SvgText x={1340} y={540} text="before" size={36} color={INK_SOFT} anchor="middle" at={K3.pure + 24} />
				</Fade>
				<Fade at={K3.crowd}>
					<path d="M1470,415 L1530,415 M1512,397 L1532,415 L1512,433" fill="none" stroke={TEAL} strokeWidth={7} strokeLinecap="round" strokeLinejoin="round" />
					<SvgText x={1500} y={380} text="squeeze" size={34} color={TEAL} anchor="middle" at={K3.crowd} />
					<rect x={1560} y={340} width={blockW} height={blockH} rx={14} fill="#6b6a73" stroke={INK} strokeWidth={6} />
					<text x={1660} y={430} textAnchor="middle" fill="#fffdf8" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 52}}>C(s)</text>
					<SvgText x={1660} y={540} text="same size" size={36} color={INK_SOFT} anchor="middle" at={K3.crowd + 10} />
					<SvgText x={1230} y={620} text="squeezing does not make a pure solid" size={34} color={INK} at={K3.crowd + 16} hand={false} weight={600} />
					<SvgText x={1230} y={664} text="any more crowded" size={34} color={INK} at={K3.crowd + 22} hand={false} weight={600} />
				</Fade>
				{/* counting boxes */}
				<Fade at={K3.only}>
					<rect x={96} y={600} width={420} height={270} rx={24} fill="#fffdf8" stroke={FWD} strokeWidth={5} />
					<SvgText x={306} y={650} text="left: gas particles" size={38} color={INK} anchor="middle" at={K3.only} />
				</Fade>
				<Fade at={K3.one}>
					<circle cx={306} cy={760} r={26} fill="#e8e1d2" stroke={INK} strokeWidth={4} />
					<SvgText x={306} y={850} text="1" size={64} color={FWD} anchor="middle" at={K3.one} />
				</Fade>
				<Fade at={K3.only}>
					<rect x={600} y={600} width={420} height={270} rx={24} fill="#fffdf8" stroke={AMBER_INK} strokeWidth={5} />
					<SvgText x={810} y={650} text="right: gas particles" size={38} color={INK} anchor="middle" at={K3.only + 8} />
				</Fade>
				<Fade at={K3.two}>
					<circle cx={760} cy={760} r={26} fill={CO_C} stroke={CO_INK} strokeWidth={4} /><circle cx={860} cy={760} r={26} fill={CO_C} stroke={CO_INK} strokeWidth={4} />
					<SvgText x={810} y={850} text="2" size={64} color={AMBER_INK} anchor="middle" at={K3.two} />
				</Fade>
				<Fade at={K3.fewer}>
					<DrawPath d="M600,925 L140,925" at={K3.fewer} dur={30} color={TEAL} width={8} />
					<path d="M170,905 L136,925 L170,945" fill="none" stroke={TEAL} strokeWidth={8} strokeLinecap="round" strokeLinejoin="round" />
					<SvgText x={1060} y={940} text="toward the side with fewer gas particles" size={38} color={TEAL} at={K3.fewer} />
				</Fade>
			</Overlay>
			<div style={{display: 'none'}}>{sq}</div>
		</>
	);
};
void CHIP_L; void CHIP_R; void DrawPath; void INK;
