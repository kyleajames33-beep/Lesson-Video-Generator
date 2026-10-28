// M7 C09 scenes 7 to 11: the shared charge (ethanoate: the glow spreads over both O, two equal bonds, ½− each;
// propoxide: one O, full −; the pKa ladder), litmus (the blue strip cross-fades to red), the acid reactions (NaOH, Mg;
// "-oic acid" becomes "-oate"), the hydrogen carbonate test (proton to HCO₃⁻; the beaker fizz) and the memory aid.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {prog} from '../../kit';
import {Overlay, Proton, ProtonHop, Sx, TEAL, TaskLine, mw, smooth} from '../chem-m6-c01/parts';
import {Tag} from '../chem-m7-c01/molecules';
import type {V2} from '../chem-m7-c01/molecules';
import {CT, Mol2D, apt, dimAt, vis} from '../chem-m7-c04a/parts';
import {Bubbles, EqRow, Plate, RingAt, eqLay, ptOn} from '../chem-m7-c06/parts';
import {LIT, SODA_CLIP, sc} from './common';
import {Charge, Dimer, Drop, GREY, HalfBond, INK, INK_SOFT, ION_F, NAVY, PKaLadder, PROPO_F, RED, Spread} from './parts';

// ---------- 7. The shared charge ----------
const K7 = cues(sc('shared-charge'), {but: 'But why', look: 'Look at', conj: 'conjugate base', when: 'When ethanoic', beside: 'right beside', spread: 'spread', half: 'about half', pulls: 'Half a charge', less: 'less readily', alc: 'An alcohol has', one: 'on one oxygen', snatch: 'snatch', pka: 'four point seven', sixteen: 'sixteen'});
export const SceneShared: React.FC = () => {
	const f = useCurrentFrame();
	const X = 430, Y = 470, S = 1.4;
	const C = apt(ION_F, ION_F.k.c1, X, Y, S), Ou = apt(ION_F, ION_F.k['1u'], X, Y, S), Or = apt(ION_F, ION_F.k['1r'], X, Y, S);
	const RX = 1060, RY = 470, RS = 1.0;
	const Oa = apt(PROPO_F, PROPO_F.k['2r'], RX, RY, RS);
	// the proton that drifts close and away (less pull)
	const t = prog(f, K7.less - 20, 70);
	const d = Math.sin(t * Math.PI);
	const pp: V2 = [Or[0] + 170 - 90 * d, Or[1] - 120 + 50 * d];
	return (
		<Overlay>
			<TaskLine text="Why does the acid let go?" at={K7.but} size={54} y={130} />
			<Mol2D m={ION_F} x={X} y={Y} s={S} at={K7.look - 20} relax={{4: K7.spread}} />
			<Tag x={96} y={190} text="conjugate base: what's left after H⁺ goes (M6)" at={K7.conj} out={K7.spread - 10} size={24} />
			<RingAt c={[(C[0] + Ou[0]) / 2, (C[1] + Ou[1]) / 2]} rx={44} ry={70} at={K7.beside} out={K7.spread + 20} color={RED} />
			<Charge p={Or} at={K7.when} out={K7.spread + 6} label="−" />
			<Spread a={Ou} b={Or} at={K7.spread} />
			<Charge p={Or} at={K7.spread} label="½−" labelAt={K7.half} dx={46} dy={36} />
			<Charge p={Ou} at={K7.spread + 16} label="½−" labelAt={K7.half} dx={-48} dy={-30} />
			<HalfBond a={C} b={Ou} at={K7.spread + 20} off={-12} />
			<HalfBond a={C} b={Or} at={K7.spread + 20} off={12} />
			<Tag x={150} y={700} text="charge shared across both O" at={K7.spread} size={30} color="#5e4a8c" fill="#e4ddf0" />
			<Sx x={166} y={790} text="(also called delocalised, or resonance)" size={22} color={GREY} weight={600} at={K7.spread + 20} />
			{f >= K7.less - 20 && t < 1 ? <Proton x={pp[0]} y={pp[1]} dashed /> : null}
			<Tag x={150} y={830} text="half a charge: less pull on H⁺" at={K7.pulls} out={K7.alc + 10} size={26} />
			<Mol2D m={PROPO_F} x={RX} y={RY} s={RS} at={K7.alc} />
			<Sx x={RX} y={RY - 140} text="from propan-1-ol" size={24} color={INK_SOFT} anchor="middle" weight={700} at={K7.alc} />
			<Charge p={Oa} at={K7.one} label="−" r={42} />
			<Tag x={RX - 230} y={620} text="no C=O: charge on one O" at={K7.one} size={28} color="#5e4a8c" fill="#e4ddf0" />
			<ProtonHop a={[Oa[0] + 120, Oa[1] - 150]} b={[Oa[0] + 30, Oa[1] - 30]} at={K7.snatch} dur={20} />
			<Proton x={Oa[0] + 30} y={Oa[1] - 30} o={vis(f, K7.snatch + 18, K7.pka - 20)} />
			<Tag x={RX - 230} y={690} text="takes H⁺ straight back" at={K7.snatch} out={K7.pka + 30} size={26} />
			<PKaLadder x={1560} top={250} bot={800} at={K7.pka - 20} marks={[{v: 4.74, label: 'ethanoic acid 4.74', at: K7.pka}, {v: 16, label: 'alcohol ≈ 16', at: K7.sixteen, color: GREY}]} />
			<Tag x={1520} y={870} text="lower pKa: stronger acid; each unit ×10" at={K7.sixteen + 10} size={22} anchor="middle" />
			{void smooth}
		</Overlay>
	);
};

// ---------- 8. Litmus ----------
const K8 = cues(sc('litmus'), {see: 'You can see', drop: 'A drop of ethanoic', red: 'red', because: 'because', drop2: 'A drop of propan-one-ol', blue: 'blue.', own: 'On its own'});
export const SceneLitmus: React.FC = () => {
	const LX = 560, RX = 1360, TOP = 330, H = 320;
	const pl = ptOn(LIT.blue, LX, TOP, H, 1000, 930), pr = ptOn(LIT.blue, RX, TOP, H, 1000, 930);
	return (
		<Overlay>
			<TaskLine text="Test it: litmus" at={K8.see} size={54} y={130} />
			<Plate p={LIT.blue} to={LIT.red} swap={K8.red} swapDur={30} cx={LX} top={TOP} h={H} at={0} />
			<Plate p={LIT.blue} cx={RX} top={TOP} h={H} at={6} />
			<Sx x={LX} y={TOP + H + 60} text="ethanoic acid (aq)" size={32} color={INK} anchor="middle" weight={700} at={K8.drop} />
			<Sx x={RX} y={TOP + H + 60} text="propan-1-ol (aq)" size={32} color={INK} anchor="middle" weight={700} at={K8.drop2} />
			<Drop x={pl[0]} y={pl[1]} at={K8.red - 22} />
			<Drop x={pr[0]} y={pr[1]} at={K8.blue - 26} />
			<Tag x={LX} y={TOP + H + 100} text="more H₃O⁺: blue → red" at={K8.because} size={30} color={RED} fill="#f9e1dc" anchor="middle" />
			<Tag x={RX} y={TOP + H + 100} text="stays blue: no change" at={K8.blue} size={30} color={NAVY} fill="#e7edf8" anchor="middle" />
			<Tag x={RX} y={TOP + H + 170} text="about as neutral as water" at={K8.own} size={24} anchor="middle" />
		</Overlay>
	);
};

// ---------- 9. Acid reactions ----------
const K9 = cues(sc('acid-reactions'), {also: 'It also reacts', naoh: 'With sodium hydroxide', salt: 'sodium ethanoate', swaps: "The salt's name", oate: 'oate', mg: 'With magnesium', slowly: 'more slowly', forming: 'forming magnesium', bubbles: 'bubbles'});
const SwapName: React.FC<{x: number; y: number; at: number; strike: number; oate: number; size?: number}> = ({x, y, at, strike, oate, size = 50}) => {
	const f = useCurrentFrame();
	const v = vis(f, at);
	if (v <= 0.01) return null;
	const w1 = mw('ethan', size, false, 800), w2 = mw('oic acid', size, false, 800);
	const sp = prog(f, strike, 12);
	return (
		<g opacity={v}>
			<Sx x={x} y={y} text="ethan" size={size} color="#2d6f9e" weight={800} at={-1000} />
			<g opacity={1 - 0.6 * sp}><Sx x={x + w1} y={y} text="oic acid" size={size} color={INK} weight={800} at={-1000} /></g>
			<line x1={x + w1 - 4} y1={y - size * 0.3} x2={x + w1 - 4 + (w2 + 8) * sp} y2={y - size * 0.3} stroke={GREY} strokeWidth={5} />
			<g opacity={prog(f, oate, 10)}><Sx x={x + w1 + w2 + 30} y={y} text="→  ethanoate" size={size} color={RED} weight={800} at={-1000} /></g>
		</g>
	);
};
const MGL = (a: number) => [{t: '2CH_3COOH', at: a}, {t: '+', at: a}, {t: 'Mg', at: a}];
const MGR = (a: number) => [{t: '(CH_3COO)_2Mg', at: a}, {t: '+', at: a}, {t: 'H_2', at: a}];
export const SceneReactions: React.FC = () => {
	const f = useCurrentFrame();
	const d1 = dimAt(f, K9.mg, 0.4);
	const hx = eqLay(MGL(0), MGR(0), 46, 160, 900).rc[2];
	return (
		<Overlay>
			<TaskLine text="It reacts like an acid" at={K9.also} size={54} y={130} />
			<Tag x={96} y={190} text="M6: acid + base, acid + metal" at={K9.also + 10} out={K9.naoh + 10} size={24} />
			<g opacity={d1}>
				<EqRow left={[{t: 'CH_3COOH', at: K9.naoh}, {t: '+', at: K9.naoh}, {t: 'NaOH', at: K9.naoh}]} right={[{t: 'CH_3COONa', at: K9.naoh + 30, box: K9.salt}, {t: '+', at: K9.naoh + 30}, {t: 'H_2O', at: K9.naoh + 30}]} cx={900} y={320} size={46} len={160} arrow={{at: K9.naoh + 20}} />
				<Tag x={900} y={380} text="sodium ethanoate (a salt) + water" at={K9.salt + 10} size={26} anchor="middle" />
			</g>
			<SwapName x={300} y={560} at={K9.swaps} strike={K9.swaps + 20} oate={K9.oate} />
			<Tag x={300} y={610} text="acid → salt: -oic acid becomes -oate" at={K9.oate + 10} size={28} color={RED} fill="#f9e1dc" />
			<EqRow left={MGL(K9.mg)} right={MGR(K9.mg + 20)} cx={900} y={780} size={46} len={160} arrow={{at: K9.mg + 10}} />
			<Tag x={96} y={860} text="fewer H₃O⁺ ions than a strong acid, so slower" at={K9.slowly} out={K9.forming + 20} size={24} />
			<Bubbles x={hx - 30} y={640} w={60} h={110} at={K9.bubbles} />
			<Tag x={900} y={850} text="magnesium ethanoate + hydrogen gas" at={K9.forming} size={28} color={NAVY} fill="#e7edf8" anchor="middle" />
		</Overlay>
	);
};

// ---------- 10. The hydrogen carbonate test ----------
const K10 = cues(sc('hydrogen-carbonate-test'), {most: 'The most useful', stronger: 'stronger acid', passes: 'passes a proton', breaks: 'breaks up', fizzes: 'fizzes.', alc: 'An alcohol is', nothing: 'nothing happens', course: 'In this course', co2: 'C O two'});
export const SceneTest: React.FC = () => {
	const f = useCurrentFrame();
	const LX = 520, RX = 1400, TOP = 290, H = 380;
	const b1 = ptOn(SODA_CLIP.before, LX, TOP, H, 620, 760), b2 = ptOn(SODA_CLIP.before, LX, TOP, H, 1420, 1450);
	const ruleO = dimAt(f, K10.co2, 0.35);
	return (
		<Overlay>
			<TaskLine text="Test it: sodium hydrogen carbonate" at={K10.most} size={52} y={130} />
			<Plate p={SODA_CLIP.before} to={SODA_CLIP.fizz} swap={K10.fizzes - 10} swapDur={30} cx={LX} top={TOP} h={H} at={K10.most} />
			<Bubbles x={b1[0]} y={b1[1]} w={b2[0] - b1[0]} h={b2[1] - b1[1]} at={K10.fizzes - 6} every={4} s={1.4} />
			<Plate p={SODA_CLIP.before} cx={RX} top={TOP} h={H} at={K10.most + 8} />
			<Sx x={LX} y={TOP + H + 44} text="ethanoic acid + NaHCO₃(s)" size={28} color={INK} anchor="middle" weight={700} at={K10.most + 10} />
			<Sx x={RX} y={TOP + H + 44} text="propan-1-ol + NaHCO₃(s)" size={28} color={INK} anchor="middle" weight={700} at={K10.most + 16} />
			<g opacity={vis(f, K10.stronger, K10.fizzes + 10)}>
				<CT x={720} y={330} text="CH_3COOH" size={34} at={K10.stronger} />
				<CT x={1030} y={330} text="HCO_3⁻" size={34} at={K10.stronger} />
				<ProtonHop a={[870, 290]} b={[1040, 290]} at={K10.passes} dur={30} bow={-60} />
			</g>
			<Tag x={720} y={380} text="pKa: ethanoic 4.7 < carbonic 6.4" at={K10.stronger + 10} out={K10.breaks} size={24} />
			<Tag x={720} y={380} text="H₂CO₃ → H₂O + CO₂" at={K10.breaks} out={K10.alc} size={28} color={NAVY} fill="#e7edf8" />
			<Tag x={LX} y={TOP + H + 70} text="CO₂ bubbles: fizz" at={K10.fizzes} size={28} color={RED} fill="#f9e1dc" anchor="middle" />
			<Tag x={RX} y={TOP + H + 70} text="no fizz" at={K10.nothing} size={28} anchor="middle" />
			<g opacity={ruleO}><Tag x={960} y={800} text="in this course: fizzes with NaHCO₃ → carboxylic acid" at={K10.course} size={28} color={TEAL} fill="#dff2ef" anchor="middle" /></g>
			<EqRow left={[{t: 'CH_3COOH', at: K10.co2 - 20}, {t: '+', at: K10.co2 - 20}, {t: 'NaHCO_3', at: K10.co2 - 20}]} right={[{t: 'CH_3COONa', at: K10.co2 - 10}, {t: '+', at: K10.co2 - 10}, {t: 'H_2O', at: K10.co2 - 10}, {t: '+', at: K10.co2}, {t: 'CO_2', at: K10.co2, ring: 'CO_2', ringAt: K10.co2 + 6}]} cx={960} y={900} size={40} len={110} arrow={{at: K10.co2 - 16}} />
			<Tag x={1650} y={950} text="don't drop the CO₂" at={K10.co2 + 16} size={24} color={RED} fill="#f9e1dc" anchor="middle" />
		</Overlay>
	);
};

// ---------- 11. Memory aid ----------
const K11 = cues(sc('memory-aid'), {so: 'So, a carboxyl', similar: 'For molecules of similar', twice: 'twice', acidic: "And it's acidic", share: 'Share the charge'});
const CARDS = ["–COOH: C=O + O–H on one carbon; '-oic acid', COOH carbon = C1", 'dimers: 2 hydrogen bonds per pair + dipole–dipole', 'weak acid: RCOO⁻ charge shared by 2 O, weaker grip on H⁺; fizzes with NaHCO₃'];
export const SceneAid: React.FC = () => {
	const f = useCurrentFrame();
	const at = [K11.so, K11.similar + 40, K11.acidic];
	return (
		<Overlay>
			{CARDS.map((c, i) => <Tag key={i} x={120} y={200 + i * 90} text={c} at={at[i]} size={30} color={NAVY} fill="#fffdf8" o={at[i + 1] === undefined ? 1 : dimAt(f, at[i + 1], 0.5)} />)}
			<TaskLine text="Similar size: carboxylic acid > alcohol > aldehyde, ketone > alkane." at={K11.similar} size={46} x={120} y={600} color={TEAL} />
			<Dimer x={1500} y={700} s={0.5} at={K11.twice} slide={K11.twice} bonds={K11.twice + 10} />
			<TaskLine text="Share the charge, loosen the grip." at={K11.share} size={64} x={120} y={830} color={TEAL} />
			{void smooth}{void INK_SOFT}
		</Overlay>
	);
};
