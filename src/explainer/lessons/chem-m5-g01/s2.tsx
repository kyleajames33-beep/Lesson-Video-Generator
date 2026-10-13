// G01 scenes 5 to 7: burning glucose worked example, how strong the pull is, heading versus speed.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {DrawPath, Enter, FONT_HAND, HandText, INK, INK_SOFT, Plate, prog} from '../../kit';
import {cues} from '../../cues';
import {DG, G1, SvgPaint, HEAT, SPREAD, kf, sc, Heading} from './common';
import * as A from './assets';
import {AnswerBox, Fade, GFormula, GivensCard, GuideBar, LevelDiagram, Overlay, Panel, Pill, ReactionBox, RateBar, StageTabs, Sub, SvgText, T, TEAL, rbPos, ClockCal} from './parts';

const EQ_BURN = 'C_6H_12O_6(s) + 6O_2(g) → 6CO_2(g) + 6H_2O(l)';

// ---------- 4. Worked example: burning glucose ----------
const K5 = cues(sc('glucose'), {start: 'glucose plus', dh: 'minus two thousand eight hundred and three', tds: 'plus seventy-eight', first: 'first heat', negH: 'delta h is negative', flows: 'heat flows out', helps: 'and that helps', second: 'second spreading', solid: 'a solid sugar crystal', become: ['become', 1], gone: 'is gone', twelve: 'twelve', ways: 'more ways', up: 'entropy goes up', now: 'now delta g is', which: 'which is minus', giving: 'giving', e81: 'eighty-one', same: 'push the same way', heatTerm: 'heat term', adds: 'spreading adds'});
export const SceneGlucose: React.FC = () => {
	const f = useCurrentFrame();
	const q = prog(f, K5.become + 10, 130);
	const BX = 730, BY = 300, BW = 1100, BH = 520;
	const pz = rbPos(BX, BY, BW, BH);
	return (
		<>
			<Heading text="Burning glucose: can it run on its own?" at={4} size={58} />
			<Enter at={K5.start} style={{position: 'absolute', left: 96, top: 190}}><Sub text={EQ_BURN} size={40} /></Enter>
			<GivensCard x={96} y={270} w={600} titleAt={K5.dh - 14} rows={[
				{sym: 'H', value: '−2803', unit: 'kJ/mol', at: K5.dh},
				{sym: 'S', value: '+78', unit: 'kJ/mol', at: K5.tds, note: 'about, at 25 °C'},
			]} />
			<Panel x={96} y={560} w={600} at={K5.start + 40}><GFormula size={50} /></Panel>
			<StageTabs x={880} y={196} labels={['heat', 'spreading', 'ΔG']} stageAt={[K5.first, K5.second, K5.now]} w={880} />
			{/* stage 1: heat */}
			<Overlay>
				<Fade at={K5.first} out={K5.second - 4}>
					<LevelDiagram x={730} y={270} w={1000} h={560} dir="down" t={{levels: K5.first + 6, arrow: K5.negH, heat: K5.flows}} value="ΔH = −2803 kJ/mol" startLabel="reactants" endLabel="products" heat />
					<SvgText x={1200} y={880} text="heat flows out: that helps" size={46} color={HEAT} anchor="middle" at={K5.helps} />
				</Fade>
				{/* stage 2: spreading, particles only */}
				<Fade at={K5.second} out={K5.now - 4}>
					<ReactionBox x={BX} y={BY} w={BW} h={BH} q={q} ms={2.5} />
					<Fade at={K5.solid} out={K5.become + 60}><SvgText x={BX + BW / 2} y={BY - 18} text="before: sugar crystal (solid), 6 O_2 (gas)" size={40} color={INK} anchor="middle" at={K5.solid} /></Fade>
					<Fade at={K5.become + 70}><SvgText x={BX + BW / 2} y={BY - 18} text="after: 6 CO_2 (gas), 6 H_2O (liquid)" size={40} color={SPREAD} anchor="middle" at={K5.become + 70} /></Fade>
					<SvgText x={pz.puddle[0]} y={pz.puddle[1] - 120} text="liquid water" size={34} color="#3d5266" anchor="middle" at={K5.become + 100} />
					<Pill x={BX + 120} y={BY + BH + 22} w={300} text="7 particles" at={K5.solid + 40} out={K5.twelve} color={SPREAD} size={46} h={66} />
					<Pill x={BX + 120} y={BY + BH + 22} w={450} text="7 particles become 12" at={K5.twelve} color={SPREAD} size={46} h={66} />
					<SvgText x={BX + BW} y={BY + BH + 66} text="more ways to arrange: entropy up" size={40} color={SPREAD} anchor="end" at={K5.up} />
				</Fade>
			</Overlay>
			{/* stage 3: delta G */}
			<Enter at={K5.which} out={undefined} style={{position: 'absolute', left: 760, top: 300}}>
				<span style={{fontFamily: "'Inter Tight', sans-serif", fontWeight: 800, fontSize: 72, color: INK, whiteSpace: 'pre'}}>ΔG = <span style={{color: HEAT}}>(−2803)</span> − <span style={{color: SPREAD}}>(+78)</span></span>
			</Enter>
			<AnswerBox x={760} y={430} at={K5.e81} text="= −2881 kJ/mol" size={92} />
			<Overlay>
				<Fade at={K5.same}>
					<DrawPath d="M900,600 L900,860" at={K5.same} dur={30} color={HEAT} width={16} />
					<DrawPath d="M868,826 L900,868 L932,826" at={K5.same + 24} dur={10} color={HEAT} width={16} />
					<DrawPath d="M1460,600 L1460,700" at={K5.same + 4} dur={20} color={SPREAD} width={16} />
					<DrawPath d="M1428,668 L1460,710 L1492,668" at={K5.same + 20} dur={10} color={SPREAD} width={16} />
				</Fade>
				<SvgText x={940} y={760} text="heat term: almost all the work" size={44} color={HEAT} at={K5.heatTerm} />
				<SvgText x={1500} y={660} text="spreading adds" size={42} color={SPREAD} at={K5.adds} />
				<SvgText x={1500} y={706} text="a little more" size={42} color={SPREAD} at={K5.adds + 16} />
			</Overlay>
		</>
	);
};

// ---------- 5a. How strong ----------
const K6 = cues(sc('how-strong'), {how: 'how big', strong: 'very strong pull', rev: 'reverse reaction', meas: 'measured', compl: 'running to completion', rough: 'rough guide', close: 'close to zero', mix: 'a real mixture', hundreds: 'hundreds of kilojoules', ess: 'essentially all products', never: 'never becomes'});
export const SceneHowStrong: React.FC = () => {
	const f = useCurrentFrame();
	const revL = kf(f, [[K6.rev, 0], [K6.rev + 24, 230], [K6.meas - 4, 230], [K6.meas + 36, 0]], false);
	return (
		<>
			<Heading text="How big is big?" at={4} />
			<AnswerBox x={96} y={196} at={K6.how} text="ΔG = −2881 kJ/mol" size={82} />
			<Overlay>
				<SvgText x={96} y={430} text="reactants" size={44} color={INK} at={K6.strong - 10} />
				<Fade at={K6.strong}>
					<DrawPath d="M300,402 L1040,402" at={K6.strong} dur={34} color={HEAT} width={16} />
					<DrawPath d="M300,444 L1040,444" at={K6.strong + 6} dur={34} color={SPREAD} width={10} />
					<DrawPath d="M1000,380 L1046,422 L1000,466" at={K6.strong + 30} dur={10} color={INK} width={10} />
				</Fade>
				<SvgText x={1090} y={434} text="all products" size={50} color={INK} at={K6.strong + 20} />
				<SvgText x={1090} y={480} text="a very strong pull" size={40} color={INK_SOFT} at={K6.strong + 10} />
				{/* the reverse shrinks to a dot */}
				<Fade at={K6.rev}>
					{revL > 6 ? <DrawPath d={`M1040,540 L${1040 - revL},540`} at={0} dur={1} color={INK_SOFT} width={7} /> : null}
					<circle cx={1040 - revL} cy={540} r={revL > 6 ? 8 : 9} fill={INK_SOFT} />
					<SvgText x={1090} y={548} text="reverse: too slight to measure" size={40} color={INK_SOFT} at={K6.rev + 10} />
				</Fade>
				<Pill x={1080} y={574} w={520} text="treated as complete" at={K6.compl} color={TEAL} size={42} h={60} />
			</Overlay>
			<GuideBar x={96} y={690} w={1720} at={K6.rough} s={1} rightAt={K6.close} leftAt={K6.hundreds} />
			<Overlay><Pill x={1040} y={196} w={700} text="so ash never becomes a log again" at={K6.never} color={DG} size={44} h={70} /></Overlay>
			<span style={{display: 'none'}}>{K6.mix}{K6.ess}</span>
		</>
	);
};

// ---------- 5b. Heading, not speed ----------
const K7 = cues(sc('heading-not-speed'), {still: 'still burning', gone: 'is gone', stat: 'the static case', head: 'heading', fast: 'how fast', bowl: 'a bowl of sugar', years: 'for years', start: 'gets it started'});
const Compass: React.FC<{cx: number; cy: number; r: number; at: number}> = ({cx, cy, r, at}) => {
	const f = useCurrentFrame();
	const ang = kf(f, [[at, -80], [at + 50, 50]]);
	const a = (ang * Math.PI) / 180;
	return (
		<Fade at={at}>
			<circle cx={cx} cy={cy} r={r} fill="#fffdf8" stroke={INK} strokeWidth={5} />
			{['N', 'E', 'S', 'W'].map((l, i) => <text key={l} x={cx + Math.sin(i * 1.5708) * (r - 20)} y={cy - Math.cos(i * 1.5708) * (r - 20) + 10} textAnchor="middle" fill={INK_SOFT} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 30}}>{l}</text>)}
			<path d={`M${cx - Math.sin(a) * 30},${cy + Math.cos(a) * 30} L${cx + Math.sin(a) * (r - 38)},${cy - Math.cos(a) * (r - 38)}`} stroke={HEAT} strokeWidth={9} strokeLinecap="round" />
			<circle cx={cx} cy={cy} r={9} fill={INK} />
		</Fade>
	);
};
const Bowl: React.FC<{cx: number; cy: number; at: number}> = ({cx, cy, at}) => (
	<Fade at={at}><SvgPaint {...G1.bowl} x={cx - 234} y={cy - 130} w={468} /></Fade>
);
export const SceneHeading: React.FC = () => {
	const f = useCurrentFrame();
	const barH = kf(f, [[K7.still, 300], [K7.gone - 20, 300], [K7.gone + 20, 0]], false);
	const toAsh = prog(f, K7.gone, 30);
	return (
		<>
			<Heading text="Where it heads, not how fast" at={4} />
			<Plate src={A.CAMP_FIRE} natural={A.CAMP_NAT} crop={A.CAMP_CROP} width={380} style={{left: 96, top: 300, opacity: (1 - toAsh) * prog(f, 2, 14)}} />
			<Plate src={A.CAMP_ASH} natural={A.CAMP_NAT} crop={A.CAMP_CROP} width={380} style={{left: 96, top: 300, opacity: toAsh}} />
			<Overlay>
				<RateBar x={500} base={640} h={barH} w={100} color={HEAT} label="burning rate" labelColor={HEAT} at={2} />
				<Pill x={96} y={230} w={460} text="non-equilibrium" at={K7.still} out={K7.gone} color={HEAT} size={46} h={66} />
				<Pill x={96} y={230} w={560} text="static: both rates zero" at={K7.gone} color="#7b5c3a" size={46} h={66} />
				<Fade at={K7.gone}><SvgText x={96} y={800} text="finished: nothing running" size={42} color="#7b5c3a" at={K7.gone + 12} /></Fade>
				<Compass cx={730} cy={400} r={90} at={K7.head} />
				<SvgText x={720} y={535} text="where it ends up" size={46} color={HEAT} anchor="middle" at={K7.head + 20} />
				<Pill x={450} y={640} w={380} text="ΔG = −2881: heading" at={K7.head + 40} color={HEAT} size={42} h={66} />
				<Bowl cx={1150} cy={570} at={K7.bowl} />
				<ClockCal cx={1100} cy={340} r={100} at={K7.bowl + 10} />
				<Pill x={1500} y={560} w={340} text="speed: very slow here" at={K7.fast} color="#8a5a00" size={42} h={70} />
				<Pill x={1500} y={650} w={340} text="heading is not speed" at={K7.fast + 20} color={DG} size={42} h={70} />
			</Overlay>
			<Enter at={K7.start} style={{position: 'absolute', left: 1500, top: 750, width: 340}}><T size={34} color={INK_SOFT} weight={500}>until something gets it started</T></Enter>
			<span style={{display: 'none'}}><HandText text="" at={0} />{K7.stat}{K7.years}</span>
		</>
	);
};
void DG;
