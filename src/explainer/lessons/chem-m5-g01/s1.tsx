// G01 scenes 1 to 4: hook, non-equilibrium, recall heat and spreading, recall delta G.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {DrawPath, Enter, FONT_HAND, HandText, INK, INK_SOFT, Mark, Plate, prog, scribbleEllipse} from '../../kit';
import {cues} from '../../cues';
import {BAD, DG, G1, HEAT, SPREAD, SvgPaint, kf, sc, Heading} from './common';
import {DotBlock, Fade, GFormula, HeatIcon, LevelDiagram, Overlay, Panel, Pill, RateBar, SpreadIcon, SvgText, T, TEAL} from './parts';
import * as A from './assets';

const ESC = '#1f6fb2';
const AMB = '#e2a63b';
const vh = (crop: [number, number, number, number], w: number) => (w * crop[3]) / crop[2];

// ---------- 1. Hook ----------
const K1 = cues(sc('hook'), {fire: 'light a log', ash: ['ash', 1], reverse: 'the reverse', back: 'log back', tree: 'a tree', why: 'so why', enth: 'enthalpy', entr: 'entropy', heatW: 'about heat', spreadW: 'about spreading'});
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const FW = 660, FX = 96, FY = 190;
	const toAsh = prog(f, K1.ash, 40);
	const smokeM = prog(f, 14, 24) * (1 - prog(f, K1.ash + 40, 70));
	const treeP = prog(f, K1.tree, 24);
	return (
		<>
			<Heading text="Why does a fire burn all the way to ash?" at={6} size={62} />
			<Plate src={A.CAMP_FIRE} natural={A.CAMP_NAT} crop={A.CAMP_CROP} width={FW} style={{left: FX, top: FY, opacity: (1 - toAsh) * prog(f, 2, 16)}} />
			<Plate src={A.CAMP_ASH} natural={A.CAMP_NAT} crop={A.CAMP_CROP} width={FW} style={{left: FX, top: FY, opacity: toAsh}} />
			<Overlay>
				{/* smoke drifting up */}
				{Array.from({length: 10}, (_, i) => {
					const u = ((f * 1.1 + i * 24) % 240) / 240;
					return <circle key={i} cx={FX + 300 + Math.sin(i * 2.3 + f * 0.03) * 50 + u * 26} cy={FY + 130 - u * 130} r={14 + u * 26} fill="#8d8780" opacity={0.42 * smokeM * (1 - u)} />;
				})}
				{/* the reverse, tried and crossed out */}
				<Fade at={K1.reverse}>
					<DrawPath d="M780,660 C940,660 950,340 800,318" at={K1.reverse} dur={34} color={INK_SOFT} width={7} />
					<DrawPath d="M830,292 L800,318 L832,342" at={K1.reverse + 28} dur={10} color={INK_SOFT} width={7} />
					<SvgText x={810} y={730} text="ash back to log?" size={50} color={INK} at={K1.reverse + 20} />
				</Fade>
				<Fade at={K1.back}><Mark x={900} y={490} at={K1.back + 4} kind="cross" size={130} /></Fade>
				{/* the tree */}
				<SvgPaint {...G1.tree} x={1212} y={250} w={416} opacity={treeP} />
				<Fade at={K1.tree + 8}>
					<DrawPath d="M1090,420 L1205,440" at={K1.tree + 10} dur={20} color={INK} width={6} />
					<DrawPath d="M1185,418 L1207,440 L1182,456" at={K1.tree + 26} dur={8} color={INK} width={6} />
					<SvgText x={1010} y={400} text="CO_2" size={58} color={INK} at={K1.tree + 14} />
					<DrawPath d="M1700,800 L1624,736" at={K1.tree + 16} dur={20} color={ESC} width={6} />
					<DrawPath d="M1630,766 L1622,734 L1654,738" at={K1.tree + 32} dur={8} color={ESC} width={6} />
					<SvgText x={1712} y={800} text="H_2O" size={58} color={ESC} at={K1.tree + 20} />
					<DrawPath d="M1570,310 L1660,236" at={K1.tree + 36} dur={20} color={TEAL} width={6} />
					<SvgText x={1500} y={210} text="sugar and wood" size={52} color={TEAL} at={K1.tree + 48} />
				</Fade>
				{/* the two ideas */}
				<HeatIcon cx={300} cy={870} s={1.2} at={K1.enth} />
				<Fade at={K1.entr}><SpreadIcon cx={1000} cy={870} s={1.3} p={prog(f, K1.entr, 50)} /></Fade>
			</Overlay>
			<div style={{position: 'absolute', left: 390, top: 820}}><HandText text="enthalpy: heat" at={K1.enth} size={64} color={HEAT} cps={20} /></div>
			<Enter at={K1.heatW} style={{position: 'absolute', left: 392, top: 888}}><T size={30} color={INK_SOFT} weight={500}>the heat a reaction gives out or takes in</T></Enter>
			<div style={{position: 'absolute', left: 1130, top: 820}}><HandText text="entropy: spreading out" at={K1.entr} size={64} color={SPREAD} cps={20} /></div>
			<Enter at={K1.spreadW} style={{position: 'absolute', left: 1132, top: 888}}><T size={30} color={INK_SOFT} weight={500}>how spread out the particles and energy are</T></Enter>
		</>
	);
};

// ---------- 2. Non-equilibrium ----------
const K2 = cues(sc('non-equilibrium'), {flask: 'sealed flask', matched: 'rates matched', fire: 'fire is different', one: 'one way', out: 'runs out', bal: 'balances', term: 'non-equilibrium system', comb: 'combustion is one', photo: 'photosynthesis is another', opp: 'opposite reasons'});
export const SceneNonEq: React.FC = () => {
	const f = useCurrentFrame();
	const BASE = 720, BH = 240;
	const fwdH = kf(f, [[K2.flask, BH], [K2.matched + 30, BH]]);
	const fireH = kf(f, [[K2.one, 300], [K2.term + 60, 150], [K2.photo + 30, 150], [K2.photo + 90, 0]], false);
	const toAsh = prog(f, K2.photo + 40, 40);
	const FW = 600;
	return (
		<>
			<Heading text="A fire never settles" at={4} />
			{/* left panel: the C2 flask at equilibrium */}
			<Plate src={A.FLASK_EQ} natural={A.FLASK_NAT} crop={A.FLASK_CROP} width={170} style={{left: 110, top: 250, opacity: prog(f, K2.flask, 16)}} />
			<Overlay>
				<SvgText x={96} y={226} text="last time: a sealed flask" size={48} color={INK} at={K2.flask} />
				<RateBar x={420} base={BASE} h={BH} w={110} color={ESC} label="forward" labelColor={ESC} at={K2.flask} />
				<RateBar x={570} base={BASE} h={BH} w={110} color={AMB} label="reverse" labelColor="#8a5a00" at={K2.flask + 4} />
				<Fade at={K2.matched + 24}>
					<Mark x={430} y={310} at={K2.matched + 28} kind="tick" size={54} />
					<SvgText x={480} y={330} text="rates match" size={52} color={TEAL} at={K2.matched + 30} />
				</Fade>
				{/* right panel: the fire */}
				<SvgText x={980} y={226} text="a fire" size={52} color={HEAT} at={K2.fire} />
				<RateBar x={1560} base={BASE} h={fireH} w={110} color={HEAT} label="burning rate" labelColor={HEAT} at={K2.fire + 6} />
				<Fade at={K2.fire + 10}><rect x={1710} y={BASE - 300} width={110} height={300} rx={6} fill="none" stroke={INK_SOFT} strokeWidth={4} strokeDasharray="12 10" opacity={0.7} /></Fade>
				<Fade at={K2.bal}>
					<DrawPath d={scribbleEllipse(1765, BASE - 150, 100, 190, 9)} at={K2.bal} dur={28} color={BAD} width={6} />
					<SvgText x={1700} y={BASE - 372} text="nothing runs back" size={40} color={BAD} anchor="middle" at={K2.bal + 14} />
				</Fade>
			</Overlay>
			<Plate src={A.CAMP_FIRE} natural={A.CAMP_NAT} crop={A.CAMP_CROP} width={FW} style={{left: 940, top: 240, opacity: (1 - toAsh) * prog(f, K2.fire, 16)}} />
			<Plate src={A.CAMP_ASH} natural={A.CAMP_NAT} crop={A.CAMP_CROP} width={FW} style={{left: 940, top: 240, opacity: toAsh}} />
			<Overlay><Pill x={1000} y={775} w={500} text="all used: nothing left to run" at={K2.photo + 90} color={INK_SOFT} size={38} h={56} /></Overlay>
			<div style={{position: 'absolute', left: 96, top: 825}}><HandText text="non-equilibrium system" at={K2.term} size={70} color={DG} cps={26} /></div>
			<Enter at={K2.term + 30} style={{position: 'absolute', left: 100, top: 905}}><T size={34} color={INK}>net change still going, no steady balance</T></Enter>
			<Overlay>
				<Pill x={780} y={838} w={480} text="burning: runs on its own" at={K2.comb} color={HEAT} size={42} h={66} />
				<Pill x={1290} y={838} w={540} text="photosynthesis: needs energy in" at={K2.photo} color={TEAL} size={42} h={66} />
			</Overlay>
			<Enter at={K2.opp} style={{position: 'absolute', left: 780, top: 912}}><T size={30} color={INK_SOFT} weight={500}>opposite reasons, explained next</T></Enter>
		</>
	);
};

// ---------- 3a. Recall: heat and spreading ----------
const K3 = cues(sc('recall-heat-spread'), {heat: 'first heat', neg: 'a negative delta h', surr: 'surroundings', giving: 'giving out heat', second: 'second spreading', ent: 'entropy written s', ways: 'ways they can be arranged', crystal: 'tightly packed crystal', fly: 'fly', pos: 'delta s is positive', keep: 'keep the two apart'});
export const SceneRecallHeat: React.FC = () => {
	const f = useCurrentFrame();
	const stage1 = 1 - prog(f, K3.second, 18);
	const pBlock = prog(f, K3.fly, 70);
	return (
		<>
			<Heading text="Two helpers: heat and spreading" at={4} />
			<Overlay>
				<LevelDiagram x={96} y={200} w={960} h={520} dir="down" t={{levels: K3.heat + 6, arrow: K3.neg, heat: K3.surr}} value="ΔH negative: heat out" startLabel="reactants" endLabel="products" heat opacity={stage1} />
				{/* stage 2: particles only */}
				<g opacity={prog(f, K3.second, 18)}>
					<rect x={96} y={250} width={960} height={450} rx={22} fill="rgba(255,255,255,0.55)" stroke={INK_SOFT} strokeWidth={4} />
					<DotBlock cx={576} cy={475} cols={5} rows={4} gap={46} p={pBlock} spread={330} />
				</g>
				<Fade at={K3.crystal} out={K3.fly}><SvgText x={576} y={236} text="a tightly packed crystal: low entropy" size={44} color={SPREAD} anchor="middle" at={K3.crystal} /></Fade>
				<Fade at={K3.fly + 30}><SvgText x={576} y={236} text="more spread out: entropy up, ΔS positive" size={44} color={SPREAD} anchor="middle" at={K3.fly + 30} /></Fade>
				<Pill x={96} y={770} w={560} text="ΔH term: heat leaving" at={K3.keep} color={HEAT} size={44} h={72} />
				<Pill x={700} y={770} w={760} text="entropy term: particles in the mixture" at={K3.keep + 24} color={SPREAD} size={44} h={72} />
			</Overlay>
			<Panel x={1140} y={250} w={680} at={K3.giving} out={K3.second - 6} border={HEAT}>
				<T size={28} color={HEAT} weight={800} style={{letterSpacing: 2, textTransform: 'uppercase'}}>enthalpy change, ΔH</T>
				<T size={38}>the heat a reaction gives out or takes in. Giving out heat spreads energy into the surroundings, and that helps.</T>
			</Panel>
			<Panel x={1140} y={250} w={680} at={K3.ent} border={SPREAD}>
				<T size={28} color={SPREAD} weight={800} style={{letterSpacing: 2, textTransform: 'uppercase'}}>entropy, S</T>
				<T size={38}>how spread out the particles and energy are: how many ways they can be arranged.</T>
			</Panel>
		</>
	);
};

// ---------- 3b. Recall: delta G ----------
const K4 = cues(sc('recall-delta-g'), {giving: 'giving out heat', spreading: 'spreading out', eq: 'which equals', dh: 'delta h minus', tds: 't delta s', kelvin: 'kelvin', same: 'same sign', neg: 'is negative', own: 'on its own', spont: 'spontaneous'});
export const SceneRecallG: React.FC = () => {
	const f = useCurrentFrame();
	const ulH = prog(f, K4.dh, 14), ulS = prog(f, K4.tds, 14);
	const Term: React.FC<{p: number; color: string; term: string; pill: string; pillAt: number; desc: string}> = ({p, color, term, pill, pillAt, desc}) => (
		<span style={{position: 'relative', color, display: 'inline-block'}}>{term}
			<span style={{position: 'absolute', left: 0, right: 0, bottom: -4, height: 10, borderRadius: 5, background: color, transform: `scaleX(${p})`, transformOrigin: 'left'}} />
			<span style={{position: 'absolute', left: '50%', top: 150, width: 300, marginLeft: -150, textAlign: 'center', whiteSpace: 'normal', opacity: prog(f, pillAt, 12), transform: `translateY(${(1 - prog(f, pillAt, 12)) * 10}px)`}}>
				<span style={{display: 'inline-block', fontFamily: FONT_HAND, fontWeight: 700, whiteSpace: 'nowrap', fontSize: 50, color, border: `3px solid ${color}`, borderRadius: 999, padding: '2px 26px', background: '#fffdf8'}}>{pill}</span>
				<span style={{display: 'block', marginTop: 8, fontFamily: "'Inter Tight', sans-serif", fontWeight: 500, fontSize: 32, lineHeight: 1.18, color: INK}}>{desc}</span>
			</span>
		</span>
	);
	return (
		<>
			<Heading text="Combine them: delta G" at={4} />
			<Overlay>
				<Pill x={430} y={330} w={460} text="giving out heat" at={K4.giving} out={K4.eq - 4} color={HEAT} size={60} h={96} />
				<Fade at={K4.spreading} out={K4.eq - 4}><text x={960} y={400} textAnchor="middle" fill={INK} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 80}}>+</text></Fade>
				<Pill x={1030} y={330} w={460} text="spreading out" at={K4.spreading} out={K4.eq - 4} color={SPREAD} size={60} h={96} />
			</Overlay>
			<Enter at={K4.eq} style={{position: 'absolute', left: 0, right: 0, top: 190, textAlign: 'center'}}>
				<span style={{fontFamily: "'Inter Tight', sans-serif", fontWeight: 800, fontSize: 112, color: INK, whiteSpace: 'pre', display: 'inline-block', lineHeight: 1.1}}>
					ΔG = <Term p={ulH} color={HEAT} term="ΔH" pill="giving out heat" pillAt={K4.giving} desc="heat given out or taken in" /> − <Term p={ulS} color={SPREAD} term="TΔS" pill="spreading out" pillAt={K4.spreading} desc="change in spreading × temperature" />
				</span>
			</Enter>
			<Overlay>
				<Pill x={300} y={560} w={560} text="T in kelvin: always positive" at={K4.kelvin} color={INK} size={46} h={72} />
				<Pill x={900} y={560} w={720} text="so TΔS has the same sign as ΔS" at={K4.same} color={SPREAD} size={46} h={72} />
				<Fade at={K4.neg}>
					<Mark x={160} y={730} at={K4.neg + 4} kind="tick" size={60} />
				</Fade>
			</Overlay>
			<div style={{position: 'absolute', left: 230, top: 690}}><HandText text="negative ΔG: it can run on its own" at={K4.neg + 6} size={66} color={TEAL} cps={22} /></div>
			<div style={{position: 'absolute', left: 230, top: 790}}><HandText text="spontaneous" at={K4.spont} size={92} color={DG} cps={16} /></div>
			<Enter at={K4.spont + 14} style={{position: 'absolute', left: 840, top: 826}}><T size={38} color={INK_SOFT} weight={500}>= it can run on its own</T></Enter>
			<span style={{display: 'none'}}><GFormula />{K4.own}</span>
		</>
	);
};
void FONT_HAND;
