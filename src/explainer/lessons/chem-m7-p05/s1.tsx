// M7 P05 scenes 1 to 6: the hook (banana ester; is 60% a fail?), the aim and the limiting reactant (mole blocks; the
// alcohol ringed), the reflux set-up (coded pours, granules, the teacher's dropper; open top; water bath crossed; mantle;
// vapour return), the variables (pen links to the plate), getting the ester out (funnel cross-fade, wash bubbles, vent,
// the drying flask, the balance readouts) and the yield (the mole bridge, one stage per cue).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {prog} from '../../kit';
import {GCard, Overlay, P, PenLink, Sx, TaskLine, WLine, smooth} from '../chem-m6-p02/parts';
import {AnswerChip, Crossed, Tag} from '../chem-m7-c01/molecules';
import {CT, ctW, dimAt, vis} from '../chem-m7-c04a/parts';
import {Arrow2, Bubbles, EqRow, Leader, Plate, Reflux, RingAt, ptOn} from '../chem-m7-c06/parts';
import {DRY, FP, FRUIT, FUNNEL, Heading, REFLUX, sc} from './common';
import {AMB, BLUE, BalR, Blocks, DropperO, GREENC, Grains, INK, INK_SOFT, Ladder, NAVY, Note, R11, R21, Stream, rp} from './parts';
import type {RPos} from './parts';


// ---------- 1. Hook ----------
const K1 = cues(sc('hook'), {warm: 'Warm', bananas: 'bananas.', class: 'A class', sixty: 'sixty', failed: 'Is that', not: 'Not necessarily.', yield: 'yield,'});
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const R: RPos = {cx: 860, top: 230, h: 600};
	const liq = rp(R, 'liq');
	const fw = (FRUIT.box[2] / FRUIT.box[3]) * 200, fx = 260 - fw / 2;
	const formula = 'CH_3COOCH_2CH_2CH_2CH_2CH_3', fs = 40, fxF = 470;
	const r1 = fxF + ctW('CH_3', fs), r2 = fxF + ctW('CH_3COO', fs);
	return (
		<>
			<Heading text="Making an ester: is 60% a fail?" at={K1.failed} size={60} />
			<Overlay>
				<g opacity={vis(f, 0, K1.yield)}>
					<Plate p={FRUIT} cx={260} top={330} h={200} o={1 - 0.7 * prog(f, K1.bananas, 14)} />
					<clipPath id="p05-banana"><rect x={fx - 10} y={320} width={fw * 0.34 + 10} height={220} /></clipPath>
					<g clipPath="url(#p05-banana)" opacity={prog(f, K1.bananas, 14)}><Plate p={FRUIT} cx={260} top={330} h={200} /></g>
					<Tag x={260} y={560} text="pentyl ethanoate: often described as banana" at={K1.bananas} size={20} anchor="middle" />
				</g>
				<Plate p={REFLUX} cx={R.cx} top={R.top} h={R.h} at={0} />
				<Tag x={liq[0] + 150} y={liq[1] - 24} text="pentan-1-ol + ethanoic acid + conc. H₂SO₄" at={K1.warm + 14} size={22} o={dimAt(f, K1.class, 0.5)} />
				<CT x={fxF} y={910} text={formula} size={fs} at={K1.bananas - 4} />
				<RingAt c={[(r1 + r2) / 2 + 9, 896]} rx={(r2 - r1) / 2 + 6} ry={32} at={K1.bananas + 10} />
				<Tag x={fxF} y={950} text="c10: alkyl first, alkanoate second" at={K1.bananas + 20} size={20} o={dimAt(f, K1.class, 0.5)} />
				<Ladder L={{x: 1620, y: 270, w: 90, h: 520}} at={K1.sixty - 10} fill={[{at: K1.sixty, v: 0.6}]} />
				<Tag x={1665} y={820} text="class result" at={K1.sixty + 10} size={22} anchor="middle" />
				<Tag x={1740} y={300} text="?" at={K1.failed} size={40} color={AMB} fill="#fbedd0" />
				{void K1.not}
			</Overlay>
		</>
	);
};

// ---------- 2. The aim, and the limiting reactant ----------
const K2 = cues(sc('aim-limiting'), {aim: 'The aim:', some: 'Some groups', one: ['one to one.', 1], twice: 'twice', react: 'They react', sets: 'sets the most', every: 'every yield', from: 'From the', pushes: 'pushes', right: 'right.'});
export const SceneAim: React.FC = () => {
	const f = useCurrentFrame();
	const grey = dimAt(f, K2.from, 0.4);
	return (
		<Overlay>
			<TaskLine text="Aim: does excess ethanoic acid raise the ester yield?" at={K2.aim} size={46} y={130} />
			<EqRow left={[{t: 'CH_3COOH', at: K2.aim + 30}, {t: '+', at: K2.aim + 30}, {t: 'CH_3(CH_2)_4OH', at: K2.aim + 30}]} right={[{t: 'CH_3COO(CH_2)_4CH_3', at: K2.aim + 36}, {t: '+', at: K2.aim + 36}, {t: 'H_2O', at: K2.aim + 36}]} cx={960} y={260} size={34} len={130} arrow={{at: K2.aim + 34, eqAt: K2.aim + 34}} />
			<Note x={500} y={300} text="straight chain: pentan-1-ol" at={K2.aim + 50} o={dimAt(f, K2.some, 0.5)} />
			<g opacity={vis(f, K2.pushes - 4)}>
				<Tag x={960} y={300} text="shifts right →" at={K2.pushes} size={30} color={NAVY} fill="#e7edf8" anchor="middle" />
				<Note x={1180} y={308} text="c10: excess reactant, more ester" at={K2.right} />
			</g>
			<Tag x={300} y={420} text="1 : 1" at={K2.one - 10} size={40} color={R11} fill="#e6edf5" />
			<Blocks x={300} y={530} acid={1} at={K2.one} ring={K2.sets} s={1.6} />
			<Note x={300} y={680} text="1 : 1: both set the same maximum" at={K2.sets + 30} o={dimAt(f, K2.from, 0.5)} />
			<Tag x={1060} y={420} text="2 : 1 acid : alcohol" at={K2.twice} size={40} color={R21} fill="#dff2ef" />
			<Blocks x={1060} y={530} acid={2} at={K2.twice + 6} ring={K2.sets} s={1.6} />
			<Note x={1060} y={680} text="2 : 1: alcohol is limiting" at={K2.sets + 20} o={dimAt(f, K2.from, 0.5)} />
			<Tag x={960} y={790} text="limiting reactant: sets the most ester you could make" at={K2.sets + 6} size={32} color={NAVY} fill="#e7edf8" anchor="middle" />
			<Tag x={960} y={880} text="every yield is measured against the alcohol" at={K2.every} size={24} anchor="middle" o={grey} />
			{void AMB}{void BLUE}{void K2.react}
		</Overlay>
	);
};

// ---------- 3. The reflux set-up ----------
const K3 = cues(sc('reflux-setup'), {measure: 'Measure', acid: 'ethanoic acid', granules: 'anti-bumping', teacher: 'Your teacher', cat: 'catalyst.', fit: 'Fit the', open: 'open.', hundred: 'a hundred', enough: 'enough.', heat: 'Heat it', mantle: 'mantle', forty: 'forty', sends: 'sends', escape: "escape."});
export const SceneReflux: React.FC = () => {
	const f = useCurrentFrame();
	const R: RPos = {cx: 560, top: 190, h: 800};
	const neck = rp(R, 'neck'), liq = rp(R, 'liq'), ctop = rp(R, 'ctop'), cb = rp(R, 'cbody'), man = rp(R, 'mantle');
	const steps: {t: string; at: number; y: number; next?: number}[] = [
		{t: '1  pentan-1-ol 4.41 g (about 5.4 mL)', at: K3.measure, y: 250, next: K3.granules},
		{t: '    + glacial ethanoic acid (2.9 or 5.7 mL)', at: K3.acid, y: 295, next: K3.granules},
		{t: '2  anti-bumping granules', at: K3.granules, y: 370, next: K3.teacher},
		{t: '3  teacher adds about 10 drops conc. H₂SO₄', at: K3.teacher + 10, y: 445, next: K3.hundred},
		{t: '4  electric heating mantle, about 40 min', at: K3.heat, y: 790},
	];
	return (
		<Overlay>
			<TaskLine text="Reflux" at={0} size={54} y={130} />
			<Plate p={REFLUX} cx={R.cx} top={R.top} h={R.h} at={0} />
			<Stream b={[neck[0], neck[1] + 10]} at={K3.measure + 10} dur={34} color="#e6cf8a" />
			<Stream b={[neck[0], neck[1] + 10]} at={K3.acid + 10} dur={34} color="#d8e6f0" />
			<Grains b={[neck[0], liq[1]]} at={K3.granules + 6} />
			<DropperO b={[neck[0] + 4, neck[1] + 20]} rot={38} at={K3.teacher + 10} out={K3.fit} />
			{steps.map((s, i) => <g key={i} opacity={s.next ? dimAt(f, s.next, 0.4) : 1}><Sx x={1000} y={s.y} text={s.t} size={28} color={INK} weight={600} at={s.at} /></g>)}
			<Tag x={1440} y={330} text="smooth boiling" at={K3.granules + 16} out={K3.teacher} size={22} />
			<Note x={1030} y={470} text="to the cooled mixture; c10: catalyst, not a reactant" at={K3.cat} o={dimAt(f, K3.hundred, 0.5)} />
			<RingAt c={[ctop[0], ctop[1] + 4]} rx={40} ry={26} at={K3.open} color={GREENC} />
			<Tag x={ctop[0] + 60} y={ctop[1] - 30} text="open top: never seal a heated system" at={K3.open + 6} size={24} color={GREENC} fill="#e3f3e9" o={dimAt(f, K3.heat, 0.55)} />
			<g opacity={dimAt(f, K3.heat, 0.5)}><Crossed x={1000} y={560} text="water bath: 100 °C max" at={K3.hundred} cross={K3.enough - 10} note="this mixture needs more than 100 °C to reflux" size={30} /></g>
			<RingAt c={man} rx={120} ry={52} at={K3.mantle} color={GREENC} />
			<Note x={1030} y={815} text="no flame: flammable liquids" at={K3.mantle + 10} />
			<Reflux base={[liq[0], liq[1] - 6]} top={[cb[0], cb[1] - 160]} at={K3.sends} until={K3.sends + 120} s={1.2} />
			<Tag x={cb[0] - 70} y={cb[1] - 230} anchor="end" text="vapours drip back" at={K3.sends + 10} size={24} color={NAVY} fill="#e7edf8" />
			{void K3.forty}{void K3.escape}
		</Overlay>
	);
};

// ---------- 4. The variables ----------
const K4 = cues(sc('variables'), {what: 'What changes', ind: 'independent', ratio: 'mole ratio', one: 'one to', two: 'two to', dep: 'dependent', yield: 'yield.', keep: 'Keep', pent: 'pentan-1-ol,', cat: 'catalyst,', heat: 'heating', work: 'work-up', same: 'same.'});
export const SceneVariables: React.FC = () => {
	const f = useCurrentFrame();
	const R: RPos = {cx: 380, top: 240, h: 640};
	const items = [
		{t: '4.41 g pentan-1-ol', at: K4.pent, to: rp(R, 'liq')},
		{t: '10 drops conc. H₂SO₄', at: K4.cat, to: rp(R, 'neck')},
		{t: '40 min reflux, same mantle setting', at: K4.heat, to: rp(R, 'mantle')},
	];
	const dimC = dimAt(f, K4.work, 0.45);
	return (
		<Overlay>
			<TaskLine text="A fair comparison" at={K4.what} size={54} y={130} />
			<Plate p={REFLUX} cx={R.cx} top={R.top} h={R.h} at={0} />
			<g opacity={dimAt(f, K4.dep, 0.45)}>
				<Sx x={860} y={250} text="Independent: acid : alcohol (1 : 1 or 2 : 1)" size={32} color={NAVY} weight={800} at={K4.ratio} />
				<Tag x={880} y={278} text="1 : 1" at={K4.one} size={24} color={R11} fill="#e6edf5" />
				<Tag x={990} y={278} text="2 : 1" at={K4.two} size={24} color={R21} fill="#dff2ef" />
			</g>
			<g opacity={dimAt(f, K4.keep, 0.45)}><Sx x={860} y={400} text="Dependent: percentage yield" size={32} color={INK} weight={800} at={K4.dep} /></g>
			<Sx x={860} y={480} text="Controlled:" size={32} color={GREENC} weight={800} at={K4.keep} />
			{items.map((it, i) => {
				const y = 540 + i * 60;
				return (
					<g key={i} opacity={dimC}>
						<Sx x={890} y={y} text={it.t} size={28} color={INK} weight={600} at={it.at} />
						<PenLink a={[880, y - 10]} b={it.to} at={it.at + 4} out={items[i + 1]?.at ?? K4.work} />
					</g>
				);
			})}
			<Sx x={860} y={760} text="matched work-up: same washes, same drying, same transfers" size={30} color={GREENC} weight={800} at={K4.work} />
			<Note x={890} y={790} text="work-up: getting the ester out and cleaning it" at={K4.work + 16} />
			{void K4.ind}{void K4.yield}{void K4.same}
		</Overlay>
	);
};

// ---------- 5. Getting it out and weighing it ----------
const K5 = cues(sc('work-up'), {after: 'After cooling', funnel: 'funnel', cold: 'cold water.', barely: 'barely', layer: 'layer:', top: 'top', dense: 'less dense', wash: 'Wash it', sodium: 'sodium hydrogen', vent: 'vent', away: 'away', dioxide: 'dioxide.', dry: 'Then dry', anh: 'anhydrous', pour: 'pour it', vial: 'weighed vial', weigh: ['weigh it.', 1]});
export const SceneWorkUp: React.FC = () => {
	const f = useCurrentFrame();
	const t = smooth(prog(f, K5.anh - 10, 26));
	const FX = 420 - 200 * t, FT = 210 + 170 * t, FH = 720 - 300 * t;
	const up = ptOn(FUNNEL.clear, FX, FT, FH, FP.up[0], FP.up[1]), lo = ptOn(FUNNEL.clear, FX, FT, FH, FP.lo[0], FP.lo[1]), st = ptOn(FUNNEL.clear, FX, FT, FH, FP.stop[0], FP.stop[1]);
	const lw = ptOn(FUNNEL.clear, FX, FT, FH, 965, 860), lw2 = ptOn(FUNNEL.clear, FX, FT, FH, 1035, 1000);
	const labO = vis(f, K5.layer, K5.anh - 10);
	const bal = (fr: number) => (fr < K5.weigh ? '12.36 g' : '16.26 g');
	const strip = [{t: 'water  →', at: K5.cold}, {t: 'NaHCO₃ wash  →', at: K5.sodium}, {t: 'dry  →', at: K5.dry}, {t: 'weigh', at: K5.weigh}];
	let sx = 140;
	return (
		<Overlay>
			<TaskLine text="Get it out" at={K5.after} size={54} y={130} />
			<Plate p={FUNNEL.cloudy} to={FUNNEL.clear} swap={K5.layer - 10} swapDur={30} cx={FX} top={FT} h={FH} at={K5.after + 20} />
			<Tag x={FX} y={FT + FH + 6} text="mixture + cold water" at={K5.cold} out={K5.layer} size={22} anchor="middle" />
			<g opacity={labO * dimAt(f, K5.wash, 0.5)}>
				<Leader a={[620, up[1]]} b={[up[0] + 40, up[1]]} at={K5.layer + 6} />
				<Tag x={630} y={up[1] - 22} text="ester layer (0.88 g/mL)" at={K5.layer + 6} size={24} color="#a8761a" fill="#fbedd0" />
				<Leader a={[620, lo[1] + 30]} b={[lo[0] + 40, lo[1]]} at={K5.dense} />
				<Tag x={630} y={lo[1] + 8} text="water layer" at={K5.dense} size={24} color="#4f86ad" fill="#dcebf6" />
				<Note x={630} y={lo[1] + 70} text="check densities: don't assume" at={K5.dense + 16} />
			</g>
			<g opacity={vis(f, K5.sodium, K5.anh - 10)}>
				<Tag x={630} y={250} text="wash: NaHCO₃(aq)" at={K5.sodium} size={30} color={NAVY} fill="#e7edf8" />
				<Note x={630} y={310} text="c09: the fizz test" at={K5.sodium + 14} />
			</g>
			<Bubbles x={lw[0]} y={lw[1]} w={lw2[0] - lw[0]} h={lw2[1] - lw[1]} at={K5.sodium} stop={K5.dry} every={5} />
			<Arrow2 a={[st[0] + 40, st[1] + 10]} b={[st[0] + 130, st[1] - 50]} at={K5.vent} out={K5.anh - 10} color={NAVY} />
			<Tag x={st[0] + 140} y={st[1] - 92} text="vent often, away from people" at={K5.away} out={K5.anh - 10} size={24} color={NAVY} fill="#e7edf8" />
			<Plate p={DRY} cx={900} top={300} h={440} at={K5.anh} />
			<Tag x={900} y={770} text="anhydrous MgSO₄: no water in it; clumps as it takes up water" at={K5.anh + 10} size={22} anchor="middle" color={NAVY} fill="#e7edf8" o={dimAt(f, K5.weigh, 0.5)} />
			<Note x={900} y={830} text="pour off the liquid, leave the solid behind" at={K5.pour} anchor="middle" o={dimAt(f, K5.weigh, 0.5)} />
			<BalR cx={1560} top={360} h={380} at={K5.vial - 6} text={bal} pulse={K5.weigh} sample="16.26 g" />
			<Tag x={1560} y={300} text="weighed vial" at={K5.vial} out={K5.weigh} size={26} anchor="middle" />
			<Tag x={1560} y={300} text="vial + ester" at={K5.weigh} size={26} anchor="middle" />
			<AnswerChip x={1560} y={770} text="ester 3.90 g" at={K5.weigh + 24} size={34} anchor="middle" />
			{strip.map((s, i) => { const x = sx; sx += s.t.length * 13 + 60; return <Tag key={i} x={x} y={960} text={s.t} at={s.at} size={24} color={INK} fill="#fffdf8" />; })}
			<Note x={1360} y={966} text="c10: why each wash works" at={K5.cold + 30} />
			{void K5.funnel}{void K5.barely}{void K5.top}{void K5.dioxide}
		</Overlay>
	);
};

// ---------- 6. The yield, step by step ----------
const K6 = cues(sc('yield-calc'), {now: 'Now the', four: 'Four point', divided: 'divided', zero: 'zero point', one: 'One mole', so: "so that's", times: 'Times', six: 'six point', they: 'They collected', divide: 'Divide,', sixty: 'sixty'});
export const SceneYield: React.FC = () => {
	const x = 120, s = 36, y = [420, 510, 600, 690];
	return (
		<Overlay>
			<TaskLine text="Percentage yield (one 2 : 1 group)" at={K6.now} size={50} y={130} />
			<Tag x={96} y={190} text="% yield = mass collected ÷ maximum mass × 100" at={K6.now + 20} size={26} />
			<GCard x={1200} y={170} w={660} lh={46} size={26} at={K6.four} lines={[
				{t: 'pentan-1-ol: 4.41 g', at: K6.four},
				{t: 'M(pentan-1-ol) = 88.15 g mol⁻¹', at: K6.divided},
				{t: 'M(ester) = 130.18 g mol⁻¹', at: K6.times},
				{t: 'collected: 3.90 g', at: K6.they},
			]} />
			<WLine x={x} y={y[0]} size={s} dim={K6.one} dimTo={0.45} items={P('n(pentan-1-ol) = 4.41 ÷ 88.15', K6.divided, '= 0.0500 mol', K6.zero)} />
			<WLine x={x} y={y[1]} size={s} dim={K6.times} dimTo={0.45} items={P('1 : 1 → n(ester) max = 0.0500 mol', K6.one + 20)} />
			<WLine x={x} y={y[2]} size={s} dim={K6.divide} dimTo={0.45} items={P('m(ester) max = 0.0500 × 130.18', K6.times + 10, '= 6.51 g', K6.six)} />
			<WLine x={x} y={y[3]} size={s} items={P('% yield = 3.90 ÷ 6.51 × 100', K6.divide, '= 59.9% ≈ 60%', K6.sixty)} />
			<Tag x={1200} y={490} text="1 mol alcohol → 1 mol ester" at={K6.one} out={K6.times} size={26} color={NAVY} fill="#e7edf8" />
			<Tag x={1200} y={570} text="theoretical maximum" at={K6.six + 10} out={K6.divide} size={26} color={NAVY} fill="#e7edf8" />
			<AnswerChip x={x} y={780} text="percentage yield ≈ 60%" at={K6.sixty + 20} size={40} />
			{void K6.so}{void INK_SOFT}
		</Overlay>
	);
};
