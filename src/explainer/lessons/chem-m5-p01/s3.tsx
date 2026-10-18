import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER_INK, HandText, INK, INK_SOFT, prog} from '../../kit';
import {cues} from '../../cues';
import {EqStrip} from '../chem-m5-c05/parts';
import type {EqItem} from '../chem-m5-c05/parts';
import {Arrow, Bound, Card, Chip, CoTube, CrystalRig, Fade, HeatIcon, ITube, MistakeChip, Overlay, Pic, PicH, PushLoop, Sx, TEAL, Table, Thermometer, TubeRow, coBath, coW, ironW, picW, rowC} from './parts';
import type {RowG, TRow} from './parts';
import {CO_BLUE_INK, CO_PINK_INK, CO_PURPLE_INK, GREEN, HAZ, Heading, SW_STOCK, kf, sc} from './common';
import {BEAKER, BOTTLE_SCN, COLOURIMETER, CRYS, DROPPER, GLASSES, GLOVES, HOLDER, ICECUBE, MG, NO2, WASTE} from './assets';

// ---------- 9. Temperature, in a sealed tube ----------
const T = 'temperature';
const K9 = cues(sc(T), {temp: 'For temperature', cobalt: 'the cobalt solution', pinkions: 'pink cobalt ions', chloride: 'lots of chloride', blueion: 'a blue ion', heat: 'takes in heat', stopper: 'Stopper the tube', water: 'water is part', escape: 'none should escape', hot: 'hot water bath', sixty: 'about sixty degrees', blue: 'turns blue', ice: 'an ice bath', pink: 'turns pink', room: 'room temperature', purple: 'starting purple', rev: "it's reversible too"});
const CO9 = {x: 120, y: 390, h: 560};
const CO_EQ: EqItem[] = [{k: 'sp', t: '[Co(H_2O)_6]^{2+}', color: CO_PINK_INK}, {k: 'plus'}, {k: 'sp', coef: '4', t: 'Cl^{-}', color: '#3f7d5a'}, {k: 'arrow'}, {k: 'sp', t: '[CoCl_4]^{2-}', color: CO_BLUE_INK}, {k: 'plus'}, {k: 'sp', coef: '6', t: 'H_2O'}];
export const SceneTemperature: React.FC = () => {
	const f = useCurrentFrame();
	// colour state: purple (1) at room temperature, blue (2) hot, pink (0) iced, purple again
	const s = kf(f, [[K9.blue - 20, 1], [K9.blue + 30, 2], [K9.pink - 20, 2], [K9.pink + 30, 0], [K9.purple - 10, 0], [K9.purple + 36, 1]]);
	const hot = prog(f, K9.hot, 20) * (1 - prog(f, K9.ice - 10, 20));
	const ice = prog(f, K9.ice, 20) * (1 - prog(f, K9.room, 24));
	const temp = kf(f, [[K9.hot, 22], [K9.sixty + 10, 60], [K9.ice, 60], [K9.ice + 40, 2], [K9.room, 2], [K9.room + 40, 22]]);
	const b = coBath(CO9.x, CO9.y, CO9.h);
	const cw = coW(CO9.h);
	const cubeH = 60;
	const no2w = picW(NO2.brown, 300);
	return (
		<>
			<Heading text="Temperature, in a stoppered tube" at={4} size={62} />
			<Overlay>
				<EqStrip items={CO_EQ} x={96} y={250} size={42} at={K9.pinkions} />
				<Sx x={96} y={296} text="pink" size={30} color={CO_PINK_INK} hand at={K9.pinkions + 6} />
				<Sx x={600} y={296} text="blue" size={30} color={CO_BLUE_INK} hand at={K9.blueion} />
				<HeatIcon x={525} y={170} dir="in" at={K9.heat} size={0.32} />
				<Sx x={560} y={196} text="forward takes in heat" size={30} color={HAZ} hand at={K9.heat + 6} />
				<Fade at={K9.cobalt - 6}><CoTube x={CO9.x} y={CO9.y} h={CO9.h} s={s} stopper={prog(f, K9.stopper, 18)} hot={hot} ice={ice} /></Fade>
				{ice > 0.01 ? [[0.12, 0.08, -12], [0.66, 0.02, 14], [0.2, 0.42, 22], [0.62, 0.48, -18]].map(([u, v, r], i) => {
					const x = b.L + (b.R - b.L) * u, y = b.T + (b.B - b.T) * v + Math.sin(f * 0.06 + i) * 3;
					return <g key={i} opacity={ice} transform={`rotate(${r} ${x + 30} ${y + 30})`}><PicH p={ICECUBE} x={x} y={y} h={cubeH} /></g>;
				}) : null}
				<Bound x={CO9.x - 24} y={CO9.y - 76} w={cw + 48} h={CO9.h + 96} at={K9.stopper + 10} closeAt={K9.stopper + 11} />
				<Sx x={CO9.x + cw + 40} y={CO9.y + 20} text="stoppered: water stays in" size={32} color={TEAL} hand at={K9.water} />
				<Thermometer x={CO9.x + cw + 130} y={CO9.y + 120} h={360} temp={temp} at={K9.hot - 4} label={temp > 40 ? 'about 60 °C' : temp < 10 ? 'ice' : 'room'} />
				{/* the results, one line per bath */}
				<Card x={720} y={360} w={760} h={330} at={K9.hot} />
				<Sx x={750} y={420} text="results" size={34} color={INK_SOFT} hand at={K9.hot} />
				<Sx x={750} y={490} text="hot bath, about 60 °C:  blue" size={38} color={CO_BLUE_INK} hand at={K9.blue + 8} />
				<Sx x={750} y={556} text="ice bath:  pink" size={38} color={CO_PINK_INK} hand at={K9.pink + 8} />
				<Sx x={750} y={622} text="room temperature:  purple again" size={38} color={CO_PURPLE_INK} hand at={K9.purple + 8} />
				<PushLoop x={740} y={760} w={560} at={K9.purple + 14} changeAt={K9.purple + 14} backAt={K9.rev} s={0.62} labels={false} tickAt={K9.rev + 10} />
				<Sx x={1330} y={800} text="reversible too" size={34} color={TEAL} hand at={K9.rev + 6} />
				{/* nitrogen dioxide, on screen only */}
				<Fade at={K9.purple + 30}>
					<Pic p={NO2.brown} x={1530} y={380} h={300} />
					<Pic p={NO2.pale} x={1680} y={380} h={300} />
				</Fade>
				<Sx x={1530 + no2w / 2} y={720} text="hot: browner" size={28} color="#7a4416" anchor="middle" hand at={K9.purple + 36} />
				<Sx x={1680 + no2w / 2} y={760} text="ice: paler" size={28} color={INK_SOFT} anchor="middle" hand at={K9.purple + 40} />
				<Sx x={1530} y={330} text="sealed NO_2 tube" size={28} color={INK_SOFT} hand at={K9.purple + 30} />
				<Sx x={720} y={1000} text="volume and pressure: sealed NO_2 syringe, usually a teacher demonstration (see the squeezing video)" size={24} color={INK_SOFT} weight={600} at={K9.purple + 44} />
				<Sx x={720} y={1036} text="keep the cobalt solution (made with concentrated HCl) well away from thiocyanate" size={24} color={HAZ} weight={600} at={K9.purple + 50} />
				{void K9.temp}{void K9.chloride}{void K9.escape}{void K9.room}
			</Overlay>
		</>
	);
};

// ---------- 10. Validity, reliability and accuracy ----------
const V = 'validity-reliability';
const K10 = cues(sc(V), {three: 'Three words', validity: 'Validity', claims: 'what it claims', reftube: 'The reference tube', valid: 'conclusion valid', reliability: 'Reliability', same: 'same result', repeat: 'Repeat each tube', groups: 'other groups', two: 'two people', accuracy: 'Accuracy', close: 'how close', eye: 'Judging by eye', col: 'A colourimeter', later: 'later in the module'});
const ROW10: RowG = {x0: 100, dx: 105, y: 300, h: 300};
export const SceneValidity: React.FC = () => {
	const iw = ironW(ROW10.h);
	const tubes = [{pulse: K10.reftube}, {s: {deep: 0.8}}, {s: {deep: 0.8}}, {s: {faded: 1}}, {s: {dil: 1}, pulse: K10.reftube + 30}, {}];
	const CX = 760, CW = 1060;
	const mini = (y: number, at: number, label: string) => (
		<Fade at={at}>
			<Sx x={100} y={y + 30} text={label} size={26} color={INK_SOFT} hand at={-100} />
			{[SW_STOCK, '#b33a2e', '#b33a2e', '#f8e6bd', '#f4ddcd', SW_STOCK].map((c, i) => <rect key={i} x={230 + i * 62} y={y} width={46} height={40} rx={8} fill={c} stroke={INK} strokeWidth={2} />)}
		</Fade>
	);
	return (
		<>
			<Heading text="Validity, reliability, accuracy" at={4} size={62} />
			<Overlay>
				<TubeRow g={ROW10} at={0} tubes={tubes} numSize={30} />
				<Card x={CX} y={190} w={CW} h={240} at={K10.validity} stroke={TEAL} />
				<Sx x={CX + 30} y={250} text="Validity: does it test what it claims?" size={38} color={TEAL} hand at={K10.validity} />
				<Sx x={CX + 30} y={310} text="reference tube; one change per tube;" size={32} weight={600} at={K10.reftube} />
				<Sx x={CX + 30} y={360} text="dilution control" size={32} weight={600} at={K10.reftube + 40} />
				<Sx x={CX + 30} y={410} text="so the conclusion is valid" size={30} color={TEAL} hand at={K10.valid} />
				<Arrow x1={CX - 10} y1={300} x2={rowC(ROW10, 0)[0] + 20} y2={ROW10.y + 40} at={K10.reftube + 6} color={TEAL} width={4} />
				<Arrow x1={CX - 10} y1={350} x2={rowC(ROW10, 4)[0] + 14} y2={ROW10.y + 40} at={K10.reftube + 40} color={TEAL} width={4} />
				<Card x={CX} y={460} w={CW} h={240} at={K10.reliability} stroke="#1f6fb2" />
				<Sx x={CX + 30} y={520} text="Reliability: same result on repeats?" size={38} color="#1f6fb2" hand at={K10.reliability} />
				<Sx x={CX + 30} y={580} text="repeat each tube;" size={32} weight={600} at={K10.repeat} />
				<Sx x={CX + 30} y={630} text="compare with other groups;" size={32} weight={600} at={K10.groups} />
				<Sx x={CX + 30} y={680} text="two people judge the colours" size={32} weight={600} at={K10.two} />
				{mini(700, K10.repeat + 6, 'repeat 1')}
				{mini(760, K10.repeat + 16, 'repeat 2')}
				{mini(820, K10.repeat + 26, 'repeat 3')}
				<Sx x={100} y={900} text="repeats agree" size={30} color="#1f6fb2" hand at={K10.repeat + 36} />
				<Card x={CX} y={730} w={CW} h={240} at={K10.accuracy} stroke={AMBER_INK} />
				<Sx x={CX + 30} y={790} text="Accuracy: close to the true value?" size={38} color={AMBER_INK} hand at={K10.accuracy} />
				<Sx x={CX + 30} y={850} text="judging by eye is rough;" size={32} weight={600} at={K10.eye} />
				<Sx x={CX + 30} y={900} text="a colourimeter gives a number" size={32} weight={600} at={K10.col} />
				<Fade at={K10.col}><Pic p={COLOURIMETER} x={CX + CW - 230} y={760} h={190} /></Fade>
				<Sx x={CX + CW - 250} y={950} text="later" size={32} color={AMBER_INK} hand at={K10.later} />
				<MistakeChip x={100} y={960} text="repeating fixes a missing control" size={30} at={K10.two + 20} />
				{void K10.three}{void K10.claims}{void K10.same}{void K10.close}{void iw}
			</Overlay>
		</>
	);
};

// ---------- 11. The risk assessment ----------
const RA = 'risk-assessment';
const K11 = cues(sc(RA), {before: 'Before any of this', each: 'each hazard', harm: 'the harm', control: "how you'll control", cobalt: 'Cobalt chloride is', cancer: 'may cause cancer', allerg: 'cause allergies', small: 'small amounts', gloves: 'wear gloves', thio: 'Never let thiocyanate', acid: 'an acid', toxic: 'very toxic gas', naoh: 'Sodium hydroxide even', eyes: 'harm your eyes', glasses: 'safety glasses', hot: 'The hot bath', holder: 'test tube holder', mg: 'Never look straight', waste: 'all the waste', sink: 'down the sink'});
const RT = {x: 96, y: 210, rowH: 104};
export const SceneRisk: React.FC = () => {
	const cols = [420, 560, 750];
	const iconBox = 120;
	const icon = (j: number, node: React.ReactNode) => <g key={'i' + j}>{node}</g>;
	const ry = (j: number) => RT.y + 58 + j * RT.rowH;
	const ic = (p: typeof GLASSES, j: number, h = 80) => {
		const w = picW(p, h);
		const k = Math.min(1, (iconBox - 16) / w);
		return <PicH p={p} x={RT.x + 10 + (iconBox - w * k) / 2} y={ry(j) + (RT.rowH - h * k) / 2} h={h * k} />;
	};
	const rows: TRow[] = [
		{at: K11.cobalt, cells: ['cobalt chloride', ['harmful if swallowed; may cause cancer', 'if dust is inhaled; skin and breathing allergies'], ['small amounts, no dust, gloves;', 'teacher demo in many schools']], colors: [HAZ, INK, GREEN], icon: icon(0, ic(CRYS.pink, 0, 92))},
		{at: K11.thio, cells: ['thiocyanate', 'with acid, releases a very toxic gas', ['never mix with acid;', 'keep the cobalt solution apart']], colors: [HAZ, INK, GREEN], icon: icon(1, ic(BOTTLE_SCN, 1, 88))},
		{at: K11.naoh, cells: ['sodium hydroxide', 'can irritate eyes', 'wear safety glasses'], colors: [HAZ, INK, GREEN], icon: icon(2, ic(DROPPER, 2, 92))},
		{at: K11.hot, cells: ['hot water bath', 'scalds', ['test tube holder; water bath,', 'no naked flame near the tubes']], colors: [HAZ, INK, GREEN], icon: icon(3, ic(BEAKER, 3, 80))},
		{at: K11.mg, cells: ['burning magnesium', 'intense light; fire', ['never look at the flame; heatproof mat;', 'teacher demo; never water on a Mg fire']], colors: [HAZ, INK, GREEN], icon: icon(4, ic(MG.ribbon, 4, 70))},
		{at: K11.waste, cells: ['waste', 'cobalt is toxic to water life', 'labelled residues container, never the sink'], colors: [HAZ, INK, GREEN], icon: icon(5, ic(WASTE, 5, 88))},
	];
	return (
		<>
			<Heading text="The risk assessment" at={4} size={62} />
			<Overlay>
				<Table x={RT.x} y={RT.y} cols={cols} head={['Hazard', 'Harm', 'Control']} headColors={[HAZ, INK, GREEN]} rows={rows} at={K11.each} rowH={RT.rowH} size={26} headSize={30} iconW={iconBox} />
				<Fade at={K11.before + 10}>
					<Sx x={1310} y={150} text="always:" size={34} color={GREEN} hand at={K11.before + 10} />
					<PicH p={GLASSES} x={1430} y={108} h={62} />
					<PicH p={GLOVES} x={1620} y={96} h={84} />
				</Fade>
				<Fade at={K11.holder}><PicH p={HOLDER} x={1690} y={ry(3) + 30} h={54} /></Fade>
				<Fade at={K11.glasses}><PicH p={GLASSES} x={1690} y={ry(2) + 34} h={40} /></Fade>
				<Sx x={RT.x} y={RT.y + 58 + 6 * RT.rowH + 46} text="also: concentrated HCl in the cobalt solution is corrosive: teacher-prepared, stoppered" size={26} color={INK_SOFT} weight={600} at={K11.sink + 10} />
				<Chip x={RT.x} y={RT.y + 58 + 6 * RT.rowH + 72} w={1000} h={56} text="follow your school's risk assessment and your teacher's method" size={30} color={TEAL} at={K11.sink + 20} />
				{void K11.harm}{void K11.control}{void K11.cancer}{void K11.allerg}{void K11.small}{void K11.gloves}{void K11.acid}{void K11.toxic}{void K11.eyes}{void K11.sink}
			</Overlay>
		</>
	);
};

// ---------- 12. Memory aids ----------
const MA = 'memory-aid';
const K12 = cues(sc(MA), {two: 'Two lines', push: 'Push it then bring', one: 'one change proves', ret: 'a return proves', cob: 'for cobalt chloride', rain: 'pink in the rain', desert: 'blue in the desert', water: 'Water makes it pink', dry: 'drying or heating'});
export const SceneAid: React.FC = () => {
	const ph = 300;
	const cw = picW(CRYS.pink, ph);
	return (
		<>
			<div style={{position: 'absolute', left: 96, top: 190}}><HandText text="Push it, then bring it back." at={K12.push} size={82} cps={26} color={TEAL} /></div>
			<div style={{position: 'absolute', left: 96, top: 570}}><HandText text="Pink in the rain, blue in the desert." at={K12.rain} size={76} cps={26} color={INK} /></div>
			<Overlay>
				<Sx x={96} y={160} text="Two lines to keep" size={40} color={INK_SOFT} hand at={K12.two} />
				<PushLoop x={1180} y={240} w={620} at={K12.push} changeAt={K12.push + 10} backAt={K12.ret} tickAt={K12.ret + 8} s={0.8} labels={false} />
				<Sx x={96} y={390} text="one change proves nothing; a return proves it's reversible" size={40} color={INK} hand at={K12.one} />
				<Fade at={K12.cob}>
					<CrystalRig x={1040} y={680} h={ph} blue={0} />
					<CrystalRig x={1440} y={680} h={ph} blue={1} />
				</Fade>
				<Cloud x={1040 + cw * 0.55} y={690} at={K12.rain} />
				<Sun x={1440 + cw * 0.6} y={700} at={K12.desert} />
				<Sx x={96} y={760} text="water makes it pink; drying or heating makes it blue" size={38} color={INK} hand at={K12.water} />
				<MistakeChip x={96} y={830} text="blue when wet" size={34} at={K12.dry + 10} />
				<Sx x={96} y={990} text="a return is the evidence; one change is not" size={34} color={TEAL} hand at={K12.dry + 20} />
				<Sx x={1040 + cw / 2} y={1030} text="hydrated: pink" size={30} color={CO_PINK_INK} anchor="middle" hand at={K12.water} />
				<Sx x={1440 + cw / 2} y={1030} text="dry: blue" size={30} color={CO_BLUE_INK} anchor="middle" hand at={K12.dry} />
			</Overlay>
		</>
	);
};
const Cloud: React.FC<{x: number; y: number; at: number}> = ({x, y, at}) => {
	const f = useCurrentFrame();
	return (
		<Fade at={at}>
			<path d={`M${x - 60},${y + 20} a30,30 0 0 1 20,-50 a40,40 0 0 1 70,-10 a30,30 0 0 1 40,40 a24,24 0 0 1 -10,40 Z`} fill="#e7eef4" stroke="#6f8aa3" strokeWidth={3} />
			{[0, 1, 2, 3].map(i => <path key={i} d={`M${x - 40 + i * 26},${y + 40 + ((f * 2 + i * 13) % 30)} l-6,14`} stroke="#5a8fc0" strokeWidth={4} strokeLinecap="round" />)}
		</Fade>
	);
};
const Sun: React.FC<{x: number; y: number; at: number}> = ({x, y, at}) => {
	const f = useCurrentFrame();
	return (
		<Fade at={at}>
			<circle cx={x} cy={y} r={30} fill="#f6c84c" stroke="#c48a14" strokeWidth={3} />
			{Array.from({length: 10}, (_, i) => { const t = (i / 10) * Math.PI * 2 + f * 0.01; return <path key={i} d={`M${x + Math.cos(t) * 40},${y + Math.sin(t) * 40} L${x + Math.cos(t) * 56},${y + Math.sin(t) * 56}`} stroke="#c48a14" strokeWidth={4} strokeLinecap="round" />; })}
		</Fade>
	);
};
void ITube; void CoTube; void Chip; void INK; void MG;
