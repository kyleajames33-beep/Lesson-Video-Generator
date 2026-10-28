// M7 C12 scenes 6 to 10: how soap lifts grease (tails into the blob; coated droplets; negative surfaces repel; an
// emulsion), hard water (the scum lock; the hard tube fades in on "scum"; charges balance), detergents (the head swap:
// anionic, cationic, non-ionic), soap or detergent (the comparison board) and the memory aid.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {prog} from '../../kit';
import {Overlay, Sx, TEAL, TaskLine, smooth} from '../chem-m6-c01/parts';
import {Crossed, DISP, Dots, Tag, VIOLET} from '../chem-m7-c01/molecules';
import type {V2} from '../chem-m7-c01/molecules';
import {CT, dimAt, vis} from '../chem-m7-c04a/parts';
import {WaterMol} from '../chem-m7-c03/parts';
import {Arrow2, EqRow, Plate, RingAt, ptOn} from '../chem-m7-c06/parts';
import {OW, ST, sc} from './common';
import {CA, Fabric, INDIGO, INK, INK_SOFT, Ion, Micelle, NA, NAVY, OIL, OIL_SOFT, RED, SoapSym, kpos} from './parts';
import type {Head} from './parts';

// ---------- 6. Cleaning action ----------
const K6 = cues(sc('cleaning-action'), {now: 'Now add', tails: 'The tails dissolve', heads: 'while the heads', water: 'water.', rub: 'Rubbing', each: 'each one', every: 'Every', repel: 'repel', stay: 'They stay', emul: 'emulsion', rinse: 'rinse carries', doesnt: "doesn't dissolve", still: 'still oil'});
export const SceneClean: React.FC = () => {
	const f = useCurrentFrame();
	const BX = 960, BY = 840;
	const split = smooth(prog(f, K6.rub + 10, 34));
	const blobO = 1 - prog(f, K6.rub + 20, 14);
	const k1 = kpos(f, [{at: -100, p: [760, 560]}, {at: K6.repel - 20, p: [880, 560]}, {at: K6.repel + 10, p: [700, 540]}, {at: K6.stay, p: [520, 470]}]);
	const k2 = kpos(f, [{at: -100, p: [1040, 560]}, {at: K6.repel - 20, p: [1000, 560]}, {at: K6.repel + 10, p: [1170, 540]}, {at: K6.stay, p: [1000, 700]}]);
	const k3 = kpos(f, [{at: -100, p: [1300, 640]}, {at: K6.stay, p: [1340, 430]}]);
	const rinse = smooth(prog(f, K6.rinse, 40)) * 900;
	const dO = prog(f, K6.rub + 20, 14);
	return (
		<Overlay>
			<TaskLine text="Clean it: lifting grease" at={K6.now} size={54} y={130} />
			<Fabric x={360} y={900} w={1200} at={0} />
			<g opacity={blobO}>
				<ellipse cx={BX} cy={BY + 10 - split * 60} rx={260} ry={60} fill={OIL_SOFT} stroke={OIL} strokeWidth={4} />
				<Sx x={BX} y={BY + 22 - split * 60} text="grease" size={30} color="#a8761a" anchor="middle" weight={800} at={-1000} />
				{Array.from({length: 9}, (_, i) => { const x = BX - 220 + i * 55; const t = smooth(prog(f, K6.tails - 20 + i * 4, 24)); return <SoapSym key={i} x={x} y={BY - 40 - (1 - t) * 260 - split * 60} ang={Math.PI / 2} s={0.9} len={70} o={prog(f, K6.tails - 20 + i * 4, 8)} />; })}
				<Dots a={[BX - 200, BY - 10]} b={[BX + 200, BY - 10]} at={K6.tails + 20} color={DISP} width={4} flicker />
			</g>
			<Tag x={96} y={260} text="tails into grease: dispersion" at={K6.tails + 10} out={K6.every} size={26} color="#2d6f9e" fill="#e3f0fa" />
			<Tag x={96} y={320} text="heads in water: ion–dipole" at={K6.heads + 10} out={K6.every} size={26} color={NAVY} fill="#e7edf8" />
			<g transform={`translate(${rinse},0)`} opacity={dO * (1 - prog(f, K6.rinse + 30, 14))}>
				<Micelle cx={k1[0]} cy={k1[1]} r={90} n={12} s={0.75} grease at={-100} glow={K6.repel - 10} />
				<Micelle cx={k2[0]} cy={k2[1]} r={90} n={12} s={0.75} grease at={-100} glow={K6.repel - 10} />
				<Micelle cx={k3[0]} cy={k3[1]} r={90} n={12} s={0.75} grease at={-100} />
			</g>
			<Tag x={96} y={380} text="droplet wrapped in soap: tails in, heads out" at={K6.each} out={K6.repel} size={26} />
			<Tag x={760} y={380} text="negative surfaces repel" at={K6.repel} out={K6.emul + 40} size={30} color={RED} fill="#f9e1dc" />
			<g opacity={vis(f, K6.emul)}><Plate p={OW.emulsion} cx={1700} top={300} h={420} /></g>
			<Tag x={1700} y={740} text="emulsion: tiny droplets spread out" at={K6.emul + 6} size={24} color={NAVY} fill="#e7edf8" anchor="middle" />
			<Arrow2 a={[1100, 820]} b={[1500, 820]} at={K6.rinse} out={K6.doesnt} color="#4f86ad" width={6} />
			<Crossed x={96} y={760} text="soap dissolves the grease in water" at={K6.doesnt - 10} cross={K6.still} note="emulsified: still oil, in coated droplets" size={30} />
			{void K6.water}{void INK_SOFT}
		</Overlay>
	);
};

// ---------- 7. Hard water ----------
const K7 = cues(sc('hard-water'), {soap: 'Soap has', hard: 'hard water', calc: 'calcium and magnesium', two: 'Two soap anions', ion: 'calcium ion,', form: 'form calcium', scum: 'scum', charges: 'charges balanced', less: 'less froth'});
export const SceneHard: React.FC = () => {
	const f = useCurrentFrame();
	const LX = 330, RX = 1590, TOP = 260, H = 520;
	const lock = smooth(prog(f, K7.ion, 30));
	const drop = smooth(prog(f, K7.form + 20, 30));
	const C: V2 = [960, 470 + drop * 120];
	const g = prog(f, K7.form, 14);
	const froth = ptOn(ST.hard, RX, TOP, H, 1000, 900);
	const ions = [[1500, 340], [1660, 470], [1540, 620], [1680, 300]] as V2[];
	return (
		<Overlay>
			<TaskLine text="Hard water" at={K7.soap} size={54} y={130} />
			<Plate p={ST.soft} cx={LX} top={TOP} h={H} at={0} />
			<Sx x={LX} y={TOP + H + 40} text="soft water + soap" size={28} color={INK} anchor="middle" weight={700} at={0} />
			<g opacity={vis(f, 0, K7.scum)}><Sx x={RX} y={TOP + H + 40} text="hard water" size={28} color={INK} anchor="middle" weight={700} at={0} /></g>
			<g opacity={vis(f, K7.scum)}><Sx x={RX} y={TOP + H + 40} text="hard water + soap" size={28} color={INK} anchor="middle" weight={700} at={-1000} /></g>
			<g opacity={vis(f, K7.hard, K7.scum)}>{ions.map((p, i) => <Ion key={i} x={p[0] + Math.sin((f + i * 30) * 0.05) * 14} y={p[1] + Math.cos((f + i * 20) * 0.04) * 10} t={i % 2 ? 'Mg²⁺' : 'Ca²⁺'} r={30} />)}</g>
			<Tag x={RX} y={200} text="hard water: Ca²⁺, Mg²⁺ dissolved" at={K7.calc} out={K7.scum} size={24} anchor="middle" />
			<Plate p={ST.hard} cx={RX} top={TOP} h={H} at={K7.scum} />
			<g opacity={vis(f, K7.two - 10)}>
				<Ion x={C[0]} y={C[1]} t="Ca²⁺" r={32} color={g > 0.5 ? '#9a948a' : CA} />
				<SoapSym x={C[0] - 52 - (1 - lock) * 120} y={C[1] - (1 - lock) * 60} ang={Math.PI + (1 - lock) * 0.6} s={1} head={g > 0.5 ? 'grey' : 'neg'} />
				<SoapSym x={C[0] + 52 + (1 - lock) * 120} y={C[1] + (1 - lock) * 60} ang={(1 - lock) * 0.6} s={1} head={g > 0.5 ? 'grey' : 'neg'} />
				<Ion x={C[0] - 220} y={330} t="Na⁺" color={NA} r={24} />
				<Ion x={C[0] + 220} y={330} t="Na⁺" color={NA} r={24} />
			</g>
			<Tag x={960} y={250} text="Na⁺: spectators" at={K7.ion + 20} out={K7.charges} size={24} anchor="middle" />
			<Tag x={RX} y={TOP + H + 70} text="scum, little froth" at={K7.scum + 10} size={26} anchor="middle" />
			<EqRow left={[{t: '2C_17H_35COO⁻(aq)', at: K7.scum + 20}, {t: '+', at: K7.scum + 20}, {t: 'Ca²⁺(aq)', at: K7.scum + 20}]} right={[{t: '(C_17H_35COO)_2Ca(s)', at: K7.scum + 30}]} cx={960} y={900} size={36} len={110} arrow={{at: K7.scum + 26}} />
			<Tag x={1150} y={940} text="calcium stearate: insoluble" at={K7.scum + 40} out={K7.charges} size={22} />
			<Tag x={560} y={940} text="2 × (1−)" at={K7.charges} size={24} color={RED} fill="#f9e1dc" />
			<Tag x={880} y={940} text="2+" at={K7.charges + 6} size={24} color={CA} fill="#dff2ef" />
			<Tag x={1150} y={940} text="Mg²⁺ the same" at={K7.charges + 20} size={22} />
			<RingAt c={froth} rx={70} ry={40} at={K7.less} />
			<Tag x={RX - 240} y={froth[1] - 100} text="soap used up" at={K7.less + 10} size={26} color={RED} fill="#f9e1dc" />
		</Overlay>
	);
};

// ---------- 8. Detergents ----------
const K8 = cues(sc('detergents'), {syn: 'Synthetic', most: 'The most common', neg: 'negative', attr: 'attracted', sol: 'much more soluble', free: 'free to clean', cat: 'Cationic', pos: 'positive', soft: 'fabric softeners', non: 'non-ionic', charge: 'no charge', grab: 'nothing to grab'});
export const SceneDetergents: React.FC = () => {
	const f = useCurrentFrame();
	const head: Head = f >= K8.charge ? 'non' : f >= K8.pos ? 'pos' : 'neg';
	const X = 760, Y = 560;
	const ca = kpos(f, [{at: -100, p: [1500, 760]}, {at: K8.attr, p: [X - 70, Y]}, {at: K8.cat - 20, p: [1500, 760]}, {at: K8.charge + 40, p: [1350, 820]}, {at: K8.grab - 30, p: [600, 820]}]);
	const stage = (a: number, b?: number) => vis(f, a, b);
	return (
		<Overlay>
			<TaskLine text="Detergents: change the head" at={K8.syn} size={54} y={130} />
			<SoapSym x={240} y={560} ang={0} s={1.2} head="grey" />
			<Sx x={300} y={650} text="soap" size={24} color={INK_SOFT} anchor="middle" weight={700} at={0} />
			<Tag x={96} y={200} text="same plan: long non-polar tail + water-loving head" at={K8.syn + 20} out={K8.neg} size={24} />
			<g opacity={vis(f, K8.most)}><SoapSym x={X} y={Y} ang={0} s={1.8} head={head} len={150} /></g>
			<g opacity={stage(K8.neg, K8.cat)}>
				<CT x={X - 60} y={Y - 110} text="CH_3(CH_2)_11OSO_3⁻ Na⁺" size={34} />
				<Tag x={X - 60} y={Y + 80} text="anionic: sulfonate or sulfate head (still negative)" at={K8.neg} size={26} color={RED} fill="#f9e1dc" />
				<Tag x={X - 60} y={Y + 140} text="sulfonate: –SO₃⁻, e.g. alkylbenzene sulfonate" at={K8.neg + 20} size={20} />
				<Tag x={X - 60} y={Y + 200} text="Ca²⁺ still attracted, but its salt stays dissolved: little scum" at={K8.sol} size={26} color={NAVY} fill="#e7edf8" />
				<g opacity={vis(f, K8.sol)}>{[[X - 170, Y - 50], [X - 140, Y + 50], [X + 10, Y - 60]].map((p, i) => <WaterMol key={i} p={{o: p as V2, a: i * 2}} s={0.8} />)}</g>
			</g>
			<g opacity={stage(K8.pos, K8.charge)}>
				<CT x={X - 60} y={Y - 110} text="R–N(CH_3)_3⁺" size={36} color={INDIGO} />
				<Tag x={X - 60} y={Y + 80} text="cationic: positive N head (c11: ammonium ions)" at={K8.pos} size={26} color={INDIGO} fill="#e2e5f7" />
				<Tag x={X - 60} y={Y + 140} text="fabric softeners" at={K8.soft} size={22} />
			</g>
			<g opacity={stage(K8.charge)}>
				<Sx x={X - 60} y={Y - 110} text="R–(OCH₂CH₂)ₙ–OH" size={36} color="#7a5bb5" weight={800} at={-1000} />
				<WaterMol p={{o: [X - 90, Y - 60], a: 0.4}} s={0.8} />
				<WaterMol p={{o: [X - 100, Y + 60], a: -0.4}} s={0.8} />
				<Dots a={[X - 60, Y - 40]} b={[X - 22, Y - 10]} at={K8.charge + 10} color={VIOLET} width={4} />
				<Dots a={[X - 70, Y + 44]} b={[X - 22, Y + 10]} at={K8.charge + 16} color={VIOLET} width={4} />
				<Tag x={X - 60} y={Y + 80} text="non-ionic: no charge, hydrogen bonds with water" at={K8.charge} size={26} color="#7a5bb5" fill="#e6ddf5" />
				<Tag x={X - 60} y={Y + 140} text="Ca²⁺: nothing to grab" at={K8.grab} size={28} color={TEAL} fill="#dff2ef" />
			</g>
			<Ion x={ca[0]} y={ca[1]} t="Ca²⁺" r={30} o={vis(f, K8.attr - 20)} />
			{(['neg', 'pos', 'non'] as Head[]).map((h, i) => { const a = [K8.neg, K8.pos, K8.charge][i]; return <g key={h} opacity={vis(f, a) * (head === h ? 1 : 0.4)}><SoapSym x={1400 + i * 150} y={300} ang={Math.PI / 2} s={0.9} head={h} len={80} /></g>; })}
			{void K8.free}{void CA}{void NA}{void RED}{void OIL}
		</Overlay>
	);
};

// ---------- 9. Soap or detergent ----------
const K9 = cues(sc('soap-vs-detergent'), {which: 'So which', both: 'Both clean', isnt: "isn't a stronger", made: 'Soap is made', breaks: 'breaks down readily', water: 'hard water.', det: 'Detergents work', varies: 'varies', best: 'The best'});
const ROWS = [['cleaning', 'micelles', 'micelles'], ['made from', 'fats and oils (renewable)', 'often petrochemicals, some plant oils'], ['breaks down', 'readily', 'varies'], ['hard water', 'scum', 'little or no scum']];
export const SceneVs: React.FC = () => {
	const f = useCurrentFrame();
	const at = [K9.both, K9.made, K9.breaks, K9.water];
	const atR = [K9.both, K9.det, K9.varies, K9.det + 20];
	return (
		<Overlay>
			<TaskLine text="Soap or detergent?" at={K9.which} size={54} y={130} />
			<Sx x={900} y={230} text="soap" size={34} color={RED} anchor="middle" hand at={K9.which} />
			<Sx x={1430} y={230} text="detergent" size={34} color="#2d6f9e" anchor="middle" hand at={K9.which} />
			{ROWS.map((r, i) => {
				const lit = i === 3 ? 1 : dimAt(f, at[i + 1], 0.45);
				const y = 300 + i * 80;
				return (
					<g key={i} opacity={lit}>
						<Sx x={180} y={y + 10} text={r[0]} size={28} color={INK_SOFT} weight={700} at={at[i]} />
						<Sx x={900} y={y + 10} text={r[1]} size={28} color={INK} anchor="middle" weight={700} at={at[i]} />
						<Sx x={1430} y={y + 10} text={r[2]} size={28} color={INK} anchor="middle" weight={700} at={Math.max(at[i], atR[i])} />
					</g>
				);
			})}
			<g opacity={vis(f, K9.water)}>
				<Plate p={ST.hard} cx={900} top={640} h={300} />
				<Plate p={ST.soft} cx={1430} top={640} h={300} />
				<Sx x={900} y={970} text="hard water + soap" size={22} color={INK_SOFT} anchor="middle" weight={700} at={-1000} />
				<Sx x={1430} y={970} text="hard water + detergent" size={22} color={INK_SOFT} anchor="middle" weight={700} at={-1000} />
			</g>
			<Crossed x={96} y={700} text="detergents are stronger soaps" at={K9.isnt - 10} cross={K9.isnt + 20} note="same action; the head differs" size={28} />
			{void K9.best}
		</Overlay>
	);
};

// ---------- 10. Memory aid ----------
const K10 = cues(sc('memory-aid'), {so: 'So, head', tails: 'The tails grab', charged: 'the charged', soap: 'And soap'});
const CARDS = ['tail: non-polar, dispersion (hydrophobic) | head: ionic, ion–dipole (hydrophilic)', 'micelle: tails in grease, heads out; negative surfaces repel; emulsion', '2RCOO⁻ + Ca²⁺ → (RCOO)₂Ca(s): scum'];
export const SceneAid: React.FC = () => {
	const f = useCurrentFrame();
	const at = [K10.so + 20, K10.charged, K10.soap];
	return (
		<Overlay>
			{CARDS.map((c, i) => <Tag key={i} x={120} y={200 + i * 90} text={c} at={at[i]} size={30} color={NAVY} fill="#fffdf8" o={at[i + 1] === undefined ? 1 : dimAt(f, at[i + 1], 0.5)} />)}
			<TaskLine text="Head in the water, tail in the grease." at={K10.so} size={64} x={120} y={640} color={TEAL} />
			<Micelle cx={1600} cy={600} r={80} n={12} s={0.6} grease at={K10.tails} />
			<TaskLine text="Soap makes scum in hard water; detergents mostly don't." at={K10.soap} size={50} x={120} y={790} color={TEAL} />
		</Overlay>
	);
};
