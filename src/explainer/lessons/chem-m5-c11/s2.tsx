import React from 'react';
import {useCurrentFrame} from 'remotion';
import {DrawPath, FONT_DISPLAY, INK, INK_SOFT, prog} from '../../kit';
import {cues} from '../../cues';
import {AN, CAT, COOL, COOL_SOFT, HOT, HOT_SOFT, Heading, kf, sc} from './common';
import {COLD_PACK, HOT_PACK, coldPack, have, hotPack} from './assets';
import {Balance, CodeThermo, DotBlock, Fade, HBracket, HeatIcon, Ledger, MistakeChip, Overlay, PicFit, StepIcon, Sx, TEAL, ledgerX} from './parts';

// ---------- 5. Two energy steps: the ledger ----------
const ES = 'energy-steps';
const K5 = cues(sc(ES), {count: 'count it in two steps', one: 'Step one', away: 'away from each other', costs: 'costs energy', attract: 'opposite charges attract', in: 'Energy goes in', two: 'Step two', cling: 'cling to', released: 'energy is released', outc: 'Energy comes out', together: 'both happen together', split: 'splitting them', mole: 'when one mole dissolves', enth: 'enthalpy of solution', added: 'added together', more: 'If more energy comes out', heats: 'heats the water', moreIn: 'If more goes in', from: 'from the water', colder: 'gets colder'});
const LG = {x: 580, base: 700, bw: 110, gap: 70, h1: 320};
export const SceneEnergySteps: React.FC = () => {
	const f = useCurrentFrame();
	const h2 = kf(f, [[0, 260], [K5.more, 260], [K5.heats, 400], [K5.moreIn, 400], [K5.from, 200]]);
	const level = kf(f, [[0, 0.45], [K5.heats, 0.45], [K5.heats + 50, 0.78], [K5.from, 0.78], [K5.from + 50, 0.18]]);
	const X = ledgerX(LG.x, LG.bw, LG.gap);
	const LX = 1250;
	return (
		<>
			<Heading text="Two energy steps" at={4} size={60} />
			<Overlay>
				<CodeThermo x={300} y={300} h={520} level={level} at={K5.count} label="the water" />
				<Sx x={300} y={930} text="warms" size={40} color={COOL} anchor="middle" hand at={K5.heats + 20} out={K5.moreIn} />
				<Sx x={300} y={930} text="cools" size={40} color={HOT} anchor="middle" hand at={K5.from + 20} />
				<Fade at={K5.count}>
					<Ledger x={LG.x} base={LG.base} h1={LG.h1} h2={h2} bw={LG.bw} gap={LG.gap} p1={prog(f, K5.away, 40)} p2={prog(f, K5.cling, 40)} pn={prog(f, K5.enth, 30)} startLabel="start" />
				</Fade>
				<Sx x={X.b1 + LG.bw / 2} y={LG.base + 130} text="step 1" size={34} color={HOT} anchor="middle" hand at={K5.one} />
				<Sx x={X.b2 + LG.bw / 2} y={LG.base + 130} text="step 2" size={34} color={COOL} anchor="middle" hand at={K5.two} />
				<Sx x={X.bn + LG.bw / 2} y={LG.base + 130} text="overall" size={34} color={INK} anchor="middle" hand at={K5.enth} />
				{/* counted separately, happen together */}
				<HBracket x1={X.b1} x2={X.b2 + LG.bw} y={LG.base - LG.h1 - 44} at={K5.together} color={INK_SOFT} />
				<Sx x={X.b1} y={LG.base - LG.h1 - 62} text="counted separately, happen together" size={34} color={INK_SOFT} hand at={K5.together + 6} />
				{/* the step labels */}
				<StepIcon x={LX - 70} y={292} step={1} at={K5.one} s={0.9} />
				<Sx x={LX} y={302} text="1. Separate the ions: energy in, +" size={38} color={HOT} hand at={K5.costs} />
				<Sx x={LX} y={346} text="because opposite charges attract" size={30} color={INK_SOFT} hand at={K5.attract} />
				<Sx x={LX} y={388} text="(lattice energy, counted as energy in)" size={26} color={INK_SOFT} weight={600} at={K5.in} />
				<StepIcon x={LX - 70} y={470} step={2} at={K5.two} s={0.9} />
				<Sx x={LX} y={480} text="2. Hydrate the ions: energy out, −" size={38} color={COOL} hand at={K5.released} />
				<Sx x={LX} y={522} text="(hydration energy)" size={26} color={INK_SOFT} weight={600} at={K5.outc} />
				<Sx x={LX} y={630} text="ΔH(solution) = step 1 + step 2" size={42} color={INK} weight={700} at={K5.enth} />
				<Sx x={LX} y={676} text="the heat change when 1 mol dissolves" size={32} color={INK_SOFT} hand at={K5.added} />
				<Sx x={LX} y={790} text="more out than in: the water warms" size={38} color={COOL} hand at={K5.heats} />
				<Sx x={LX} y={844} text="more in than out: the water cools" size={38} color={HOT} hand at={K5.from} />
				{void K5.split}{void K5.mole}{void K5.colder}
			</Overlay>
		</>
	);
};

// ---------- 6a. Real salts: hot packs and cold packs ----------
const HC = 'hot-cold-packs';
const K6 = cues(sc(HC), {real: 'real numbers', ca: 'Calcium chloride', m81: 'minus 81', minus: 'Minus means', small: 'small, doubly charged', releases: 'releases more energy', hot: 'instant hot packs', amm: 'Ammonium nitrate', p257: 'plus 25.7', costs: 'lattice costs more', colder: 'gets colder', cold: 'instant cold packs'});
const CH = {x0: 540, x1: 1200, zero: 520, k: 3.4};
/** One bar of the delta H chart, growing from the zero line. */
const DHBar: React.FC<{x: number; w: number; v: number; at: number; label: string; name: string}> = ({x, w, v, at, label, name}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 30);
	if (p <= 0.01) return null;
	const h = Math.abs(v) * CH.k * p;
	const up = v > 0;
	const c = up ? HOT : COOL, s = up ? HOT_SOFT : COOL_SOFT;
	return (
		<g>
			<rect x={x} y={up ? CH.zero - h : CH.zero} width={w} height={h} rx={6} fill={s} stroke={c} strokeWidth={4} />
			<Sx x={x + w / 2} y={up ? CH.zero - h - 16 : CH.zero + h + 50} text={label} size={46} color={c} anchor="middle" weight={800} at={at + 10} />
			<Sx x={x + w / 2} y={up ? CH.zero - h - 70 : CH.zero + h + 94} text={name} size={30} color={INK} anchor="middle" weight={700} at={at + 16} />
		</g>
	);
};
export const SceneHotCold: React.FC = () => {
	const f = useCurrentFrame();
	const caL = {x: 1360, base: 560};
	const hp = hotPack(), cp = coldPack();
	return (
		<>
			<Heading text="Real salts: hot packs and cold packs" at={4} size={58} />
			<Overlay>
				<Fade at={K6.real}>
					<path d={`M${CH.x0},${CH.zero} L${CH.x1},${CH.zero}`} stroke={INK} strokeWidth={5} strokeLinecap="round" />
					<Sx x={CH.x0 - 14} y={CH.zero + 12} text="0" size={34} color={INK_SOFT} anchor="end" weight={700} at={K6.real} />
					<Sx x={CH.x0} y={262} text="ΔH(solution), kJ/mol, 25 C" size={32} color={INK_SOFT} weight={600} at={K6.real} />
				</Fade>
				<DHBar x={600} w={150} v={-81} at={K6.m81} label="−81" name="calcium chloride, CaCl_2" />
				<DHBar x={920} w={150} v={25.7} at={K6.p257} label="+25.7" name="ammonium nitrate, NH_4NO_3" />
				{/* mini ledgers */}
				<Fade at={K6.small} out={K6.amm - 6}>
					<Sx x={caL.x - 40} y={280} text="Ca^{2+}: small, 2+ charge" size={36} color={INK} weight={700} at={K6.small} />
					<Ledger x={caL.x} base={caL.base} h1={150} h2={230} bw={64} gap={44} p1={prog(f, K6.small + 6, 24)} p2={prog(f, K6.releases, 24)} pn={prog(f, K6.releases + 20, 20)} s={0.7} />
					<Sx x={caL.x - 40} y={760} text="hydration out is bigger" size={34} color={COOL} hand at={K6.releases + 10} />
					<Sx x={caL.x - 40} y={804} text="than the lattice cost" size={34} color={COOL} hand at={K6.releases + 16} />
				</Fade>
				<Fade at={K6.costs - 10}>
					<Sx x={caL.x - 40} y={280} text="NH_4NO_3" size={36} color={INK} weight={700} at={K6.costs - 10} />
					<Ledger x={caL.x} base={caL.base} h1={210} h2={150} bw={64} gap={44} p1={prog(f, K6.costs - 6, 24)} p2={prog(f, K6.costs + 14, 24)} pn={prog(f, K6.costs + 34, 20)} s={0.7} />
					<Sx x={caL.x - 40} y={760} text="the lattice cost is bigger" size={34} color={HOT} hand at={K6.costs + 20} />
					<Sx x={caL.x - 40} y={804} text="so the water gets colder" size={34} color={HOT} hand at={K6.colder} />
				</Fade>
				{/* painted packs (interims: hot thermometer and ice cube until brief 59 lands) */}
				<Fade at={K6.hot}><PicFit p={hp} x={150} y={250} w={240} h={290} bottom /></Fade>
				<Sx x={270} y={590} text={have(HOT_PACK) ? 'instant hot pack' : 'hot pack: warms'} size={34} color={COOL} anchor="middle" hand at={K6.hot + 6} />
				<Fade at={K6.cold}><PicFit p={cp} x={150} y={640} w={240} h={250} bottom /></Fade>
				<Sx x={270} y={940} text={have(COLD_PACK) ? 'instant cold pack' : 'cold pack: cools'} size={34} color={HOT} anchor="middle" hand at={K6.cold + 6} />
				<MistakeChip x={1240} y={880} text="Dissolving always takes in energy" size={30} at={K6.cold + 16} note="it can go either way" />
				{void K6.ca}{void K6.minus}{void K6.amm}
			</Overlay>
		</>
	);
};

// ---------- 6b. Table salt: two big steps that nearly cancel ----------
const SC = 'salt-cancel';
const K7 = cues(sc(SC), {table: 'And table salt', close: 'close to 800', cancel: 'almost cancel', p39: 'plus 3.9', diff: 'The difference', big: 'two big numbers', own: 'on its own'});
const NL = {x: 640, base: 930, bw: 120, gap: 80, h1: 700, h2: 697};
export const SceneSaltCancel: React.FC = () => {
	const f = useCurrentFrame();
	const X = ledgerX(NL.x, NL.bw, NL.gap);
	const mag = prog(f, K7.p39, 18);
	const MC = {x: 1420, y: 780, r: 150};
	return (
		<>
			<Heading text="Table salt: two big steps that nearly cancel" at={4} size={56} />
			<Overlay>
				<Ledger x={NL.x} base={NL.base} h1={NL.h1} h2={NL.h2} bw={NL.bw} gap={NL.gap} p1={prog(f, K7.close, 30)} p2={prog(f, K7.close + 24, 34)} pn={prog(f, K7.cancel, 20)} />
				<Sx x={X.b1 - 20} y={360} text="about +800" size={44} color={HOT} anchor="end" weight={800} at={K7.close + 10} />
				<Sx x={X.b1 - 20} y={404} text="kJ/mol" size={30} color={HOT} anchor="end" weight={600} at={K7.close + 10} />
				<Sx x={X.b2 + NL.bw + 24} y={360} text="about −800" size={44} color={COOL} weight={800} at={K7.close + 34} />
				<Sx x={X.b2 + NL.bw + 24} y={404} text="kJ/mol" size={30} color={COOL} weight={600} at={K7.close + 34} />
				<Sx x={X.b1 - 20} y={NL.base - 14} text="almost cancel" size={36} color={INK_SOFT} anchor="end" hand at={K7.cancel} />
				{/* magnifier on the tiny gap */}
				{mag > 0.01 ? (
					<g opacity={mag}>
						<path d={`M${X.bn + NL.bw / 2},${NL.base - 8} L${MC.x - MC.r * 0.82},${MC.y + MC.r * 0.5}`} stroke={INK_SOFT} strokeWidth={3} strokeDasharray="7 6" />
						<circle cx={X.bn + NL.bw / 2} cy={NL.base - 2} r={18} fill="none" stroke={INK} strokeWidth={3} />
						<circle cx={MC.x} cy={MC.y} r={MC.r} fill="#fffdf8" stroke={INK} strokeWidth={6} />
						<path d={`M${MC.x - MC.r + 20},${MC.y + 46} L${MC.x + MC.r - 20},${MC.y + 46}`} stroke={INK} strokeWidth={5} />
						<path d={`M${MC.x - MC.r + 30},${MC.y - 20} L${MC.x + MC.r - 30},${MC.y - 20}`} stroke={INK_SOFT} strokeWidth={4} strokeDasharray="8 6" />
						<rect x={MC.x - 30} y={MC.y - 20} width={60} height={66} fill={HOT_SOFT} stroke={HOT} strokeWidth={4} strokeDasharray="8 5" />
						<Sx x={MC.x} y={MC.y - 44} text="+3.9" size={46} color={HOT} anchor="middle" weight={800} at={K7.p39 + 6} />
						<Sx x={MC.x - MC.r + 26} y={MC.y + 84} text="start" size={26} color={INK_SOFT} weight={600} at={K7.p39} />
					</g>
				) : null}
				<Sx x={MC.x} y={MC.y + MC.r + 54} text="NaCl: +3.9 kJ/mol (measured)" size={34} color={INK} anchor="middle" weight={700} at={K7.p39 + 10} />
				<Sx x={MC.x} y={MC.y + MC.r + 96} text="1 mol in 1 L: under 1 C cooler" size={30} color={INK_SOFT} anchor="middle" hand at={K7.p39 + 24} />
				<Sx x={MC.x} y={500} text="the difference decides" size={48} color={TEAL} anchor="middle" hand at={K7.diff} />
				<Sx x={MC.x} y={556} text="not either step on its own" size={38} color={INK} anchor="middle" hand at={K7.own} />
				{void K7.table}{void K7.big}{void DrawPath}
			</Overlay>
		</>
	);
};

// ---------- 7. If it costs energy, why does it dissolve? ----------
const EN = 'entropy';
const K8 = cues(sc(EN), {puzzle: "Here's a puzzle", takes: 'takes in energy', why: 'why does it dissolve', remember: 'Remember from', heat: 'releasing heat', spread: 'spreading out', locked: 'Ions locked', through: 'spread out through', inc: 'increase in entropy', wins: 'wins over', cant: "you can't predict", alone: 'energy change alone'});
export const SceneEntropy: React.FC = () => {
	const f = useCurrentFrame();
	const tilt = 14 * prog(f, K8.wins, 30);
	const sp = prog(f, K8.through, 70);
	const cp = coldPack();
	return (
		<>
			<Heading text="If it costs energy, why does it dissolve?" at={4} size={56} />
			<Overlay>
				<Fade at={2}><PicFit p={cp} x={110} y={230} w={230} h={220} bottom /></Fade>
				<Sx x={100} y={510} text="ammonium nitrate:" size={32} color={INK} weight={700} at={4} />
				<Sx x={100} y={556} text="ΔH = +25.7 kJ/mol" size={32} color={HOT} weight={700} at={K8.takes} />
				<Sx x={100} y={600} text="takes in energy..." size={32} color={HOT} hand at={K8.takes + 8} />
				<Sx x={100} y={660} text="so why does it dissolve?" size={36} color={INK} hand at={K8.why} />
				<Balance cx={980} cy={420} L={280} tilt={tilt} at={K8.remember}
					left={<g><Fade at={K8.heat}><HeatIcon cx={0} cy={18} s={0.8} at={K8.heat} /></Fade><Sx x={0} y={110} text="energy: +25.7" size={32} color={HOT} anchor="middle" weight={700} at={K8.heat} /><Sx x={0} y={148} text="(against)" size={30} color={HOT} anchor="middle" hand at={K8.heat + 8} /></g>}
					right={<g><Fade at={K8.spread}><DotBlock cx={0} cy={20} cols={3} rows={2} gap={18} p={0.6 + 0.4 * Math.sin(f * 0.04) ** 2} spread={50} r={7} color={TEAL} /></Fade><Sx x={0} y={110} text="spreading out" size={32} color={TEAL} anchor="middle" weight={700} at={K8.spread} /><Sx x={0} y={148} text="(entropy): for" size={30} color={TEAL} anchor="middle" hand at={K8.spread + 8} /></g>} />
				<Sx x={980} y={300} text="a change is favoured by:" size={36} color={INK_SOFT} anchor="middle" hand at={K8.remember + 6} />
				{/* the entropy inset: ordered lattice ions spread through water */}
				<Fade at={K8.locked}>
					<rect x={1440} y={640} width={380} height={300} rx={22} fill="#eef6fb" stroke="rgba(60,45,20,0.2)" strokeWidth={3} />
					<DotBlock cx={1612} cy={782} cols={3} rows={3} gap={34} p={sp} spread={150} r={11} color={CAT} seed={3} />
					<DotBlock cx={1629} cy={799} cols={3} rows={3} gap={34} p={sp} spread={150} r={12} color={AN} seed={8} />
					<Sx x={1630} y={985} text="locked in a lattice, then spread out" size={28} color={INK_SOFT} anchor="middle" hand at={K8.locked} />
				</Fade>
				<Sx x={1630} y={610} text="entropy increases" size={40} color={TEAL} anchor="middle" hand at={K8.inc} />
				<Sx x={1280} y={330} text="NH_4NO_3 dissolves anyway" size={38} color={TEAL} weight={700} at={K8.wins + 16} />
				<MistakeChip x={520} y={900} text="big ΔH cost = won't dissolve" size={32} at={K8.cant} note="energy alone does not decide" />
				{void K8.puzzle}{void K8.alone}{void FONT_DISPLAY}{void INK}
			</Overlay>
		</>
	);
};
