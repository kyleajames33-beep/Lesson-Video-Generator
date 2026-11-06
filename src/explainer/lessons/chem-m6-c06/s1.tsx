// M6 C06 scenes 1 to 5: one powder, two jobs; run one equation backwards; conjugate pairs; worked example (follow the
// proton in HPO4 2- + H2O); conjugate strength explains the arrows.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {cues} from '../../cues';
import {Heading, sc} from './common';
import {AMMONIA, SODA_BOX, SODA_CLIP} from './assets';
import {
	AChip, ACID, ACID_INK, AMBER, BASE, BASE_INK, Dim, EqBox, EqLine, EqUnder, Fade, GREY_INK, INK, INK_SOFT, LoopHops, MiniPH, MistakeX, Note, OpGlow, Overlay, PROTON, PairAt, PairBracket, PicH,
	PlateAt, ProtonHop, PullMeter, RevHop, Ring, SeeSaw, Sx, TEAL, TaskLine, eSpan, eq, fitSize, natP, picW, vis, RoleRing, PROTON_INK, FieldLens, HopPair,
} from './parts';
import {ProtonSwap, SP, mobPos, slotPos} from './particles';
import type {EItem} from './parts';

// ---------- 1. Hook: one powder, two jobs ----------
const H1 = 'hook';
const K1 = cues(sc(H1), {soda: 'Sprinkle baking soda', fizz: 'it fizzes', lessA: 'less acidic', now: 'Now sprinkle', naoh: 'sodium hydroxide solution', nofizz: 'No fizz', lessB: 'less basic', same: 'The same white', calms: 'calms a base', how: 'So how can', acid: 'acid in another'});
export const CH = 400;
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const cw = picW(SODA_CLIP.before, CH);
	const LX = 200, RX = 1720 - cw, Y = 330;
	const labDim = 1 - 0.6 * prog(f, K1.acid, 14);
	const [qx, qy] = natP(SODA_CLIP.before, RX, Y, CH, 1024, 1000);
	return (
		<>
			<Heading text="One powder, two jobs?" at={K1.how} size={58} />
			<Overlay>
				<PlateAt p={SODA_BOX} x={960 - picW(SODA_BOX, 200) / 2} y={190} h={200} at={0} />
				<PairAt a={SODA_CLIP.before} b={SODA_CLIP.fizz} x={LX} y={Y} h={CH} at={0} swap={K1.fizz} dur={24} />
				<PlateAt p={SODA_CLIP.before} x={RX} y={Y} h={CH} at={K1.now - 10} />
				<g opacity={labDim}>
					<Note x={LX + cw / 2} y={Y + CH + 50} text="hydrochloric acid" size={36} anchor="middle" at={K1.soda + 20} />
					<Note x={RX + cw / 2} y={Y + CH + 50} text="sodium hydroxide solution" size={36} anchor="middle" at={K1.naoh} />
				</g>
				<MiniPH x={LX + cw / 2 - 160} y={Y + CH + 90} w={320} from={1.5} to={4.5} move={K1.lessA} at={K1.fizz + 10} />
				<MiniPH x={RX + cw / 2 - 160} y={Y + CH + 90} w={320} from={12.5} to={9.5} move={K1.lessB} at={K1.naoh + 10} />
				<Ring cx={qx} cy={qy} rx={cw * 0.42} ry={CH * 0.2} at={K1.nofizz} out={K1.same + 20} color={AMBER} seed={4} />
				<AChip x={LX + cw / 2} y={940} text="base here?" size={38} color={BASE_INK} anchor="middle" at={K1.acid - 26} />
				<AChip x={RX + cw / 2} y={940} text="acid here?" size={38} color={ACID_INK} anchor="middle" at={K1.acid} />
				{void K1.calms}
			</Overlay>
		</>
	);
};

// ---------- 2. Run one equation backwards ----------
const H2 = 'run-backwards';
const K2 = cues(sc(H2), {start: 'Start with an', amm: 'ammonia in water', water: 'Water gives a proton', making: 'making ammonium', back: 'run it backwards', ammon: 'Ammonium can give', acid: "it's an acid", hyd: 'Hydroxide can take', base: "it's a base", every: 'Every acid-base reaction', swap: 'swap the proton back', keeps: 'keeps swapping', dbl: 'the double arrow'});
export const EQS = 66, EQY = 540;
export const nh3 = (at: number | number[]): EItem[] => eq(['NH_3(aq)', '+', 'H_2O(l)', '<=>', 'NH_4^{+}(aq)', '+', 'OH^{-}(aq)'], at);
export const SceneBackwards: React.FC = () => {
	const items = nh3([0, 1, 2, 3, 4, 5, 6].map(i => K2.amm + i * 5));
	const sp = (i: number) => eSpan(items, i, EQS, 960, 'middle');
	const top = EQY - EQS - 14, bot = EQY + 30;
	const firstOut = K2.back + 6;
	return (
		<>
			<Heading text="Run one equation backwards" at={4} size={58} />
			<Overlay>
				<PlateAt p={AMMONIA} x={1640} y={170} h={230} at={K2.amm} />
				<EqBox items={items} i={2} size={EQS} x={960} y={EQY} at={K2.water} out={firstOut} color={ACID} anchor="middle" />
				<EqBox items={items} i={0} size={EQS} x={960} y={EQY} at={K2.water + 12} out={firstOut} color={BASE} anchor="middle" />
				<OpGlow items={items} i={3} size={EQS} x={960} y={EQY} at={K2.dbl} anchor="middle" len={50} />
				<EqLine items={items} x={960} y={EQY} size={EQS} anchor="middle" />
				<ProtonHop a={[sp(2).cx, top]} b={[sp(0).cx, top]} at={K2.water + 16} dur={30} bow={-80} />
				<RevHop a={[sp(4).cx, bot]} b={[sp(6).cx, bot]} at={K2.back + 4} bow={80} keep={50} />
				<EqBox items={items} i={4} size={EQS} x={960} y={EQY} at={K2.acid} color={ACID} anchor="middle" tag="acid" />
				<EqBox items={items} i={6} size={EQS} x={960} y={EQY} at={K2.base} color={BASE} anchor="middle" tag="base" />
				<LoopHops fa={[sp(2).cx, top]} fb={[sp(0).cx, top]} ra={[sp(4).cx, bot]} rb={[sp(6).cx, bot]} at={K2.swap} P={110} />
				<Note x={sp(3).cx} y={top - 90} text="proton can go either way" size={38} color={TEAL} anchor="middle" at={K2.swap + 20} />
				{void K2.start}{void K2.making}{void K2.ammon}{void K2.hyd}{void K2.every}{void K2.keeps}
			</Overlay>
		</>
	);
};

// ---------- 3. Conjugate pairs ----------
const H3 = 'conjugate-pairs';
const K3 = cues(sc(H3), {each: 'Each new species', acidg: 'When an acid gives', cb: 'its conjugate base', baset: 'When a base takes', ca: 'its conjugate acid', means: 'Conjugate means joined', pair: 'one conjugate pair', other: 'are the other', exactly: 'exactly one proton', charge: 'the charge changes', opp: 'opposite sides'});
export const SceneConjugate: React.FC = () => {
	const S = 62, Y = 300;
	const items = nh3(-100);
	const x0 = 960 - eqHalf(items, S);
	const shrink = K3.pair - 4;
	// particle stage: ammonia (base) left, water (acid) right; water's proton hops onto ammonia
	const PY = 700, PS = 2.1, WX = 1290, NX = 630;
	const hop = K3.acidg + 18;
	const left = mobPos(SP.H2O, WX, PY, PS), landed = slotPos(SP.NH3, NX, PY, PS);
	return (
		<>
			<Heading text="Conjugate pairs" at={4} size={58} />
			<Overlay>
				<EqLine items={items} x={x0} y={Y} size={S} />
				<PairBracket items={items} i={2} j={6} size={S} x={x0} y={Y} at={K3.cb} above label="acid → conjugate base (−H^{+})" labelOut={shrink} pulse={K3.opp} lsize={36} />
				<PairBracket items={items} i={2} j={6} size={S} x={x0} y={Y} at={-100} above label="pair: H_2O / OH^{-}" labelAt={shrink + 10} o={prog(useCurrentFrame(), shrink + 10, 10)} lsize={36} />
				<PairBracket items={items} i={0} j={4} size={S} x={x0} y={Y} at={K3.ca} above={false} gap={70} label="base → conjugate acid (+H^{+})" labelOut={shrink} pulse={K3.opp + 14} lsize={36} />
				<PairBracket items={items} i={0} j={4} size={S} x={x0} y={Y} at={-100} above={false} gap={70} label="pair: NH_4^{+} / NH_3" labelAt={shrink + 10} o={prog(useCurrentFrame(), shrink + 10, 10)} lsize={36} />
				<Fade at={6}>
					<ProtonSwap a={[WX, PY]} b={[NX, PY]} da={SP.H2O} ac={SP.NH3} s={PS} events={[hop]} glow={K3.acidg - 6} bow={-150} labels={{a: ['H_2O', 'OH^{-}'], b: ['NH_3', 'NH_4^{+}'], size: 52}} />
				</Fade>
				<RoleRing x={WX} y={PY} r={168} role="acid" at={K3.acidg} out={K3.pair} />
				<RoleRing x={NX} y={PY} r={175} role="base" at={K3.baset} out={K3.pair} />
				<Note x={WX} y={PY + 262} text="lost one H^{+}: its conjugate base" size={42} color={ACID_INK} anchor="middle" at={K3.cb} />
				<Note x={NX} y={PY + 262} text="gained one H^{+}: its conjugate acid" size={42} color={BASE_INK} anchor="middle" at={K3.ca} />
				<Ring cx={landed[0]} cy={landed[1]} rx={48} ry={48} at={K3.exactly} color={PROTON} seed={3} />
				<Fade at={K3.exactly + 8}><circle cx={left[0]} cy={left[1]} r={30} fill="none" stroke={ACID} strokeWidth={5} strokeDasharray="8 7" /></Fade>
				<Note x={960} y={PY - 10} text="one H^{+}" size={50} color={PROTON_INK} anchor="middle" at={K3.exactly + 6} />
				<Note x={560} y={140} text="conjugate = joined" size={44} color={TEAL} at={K3.means} />
				{void K3.each}{void K3.other}{void K3.charge}
			</Overlay>
		</>
	);
};
/** Half the width of an equation line (for start-anchored helpers on a centred line). */
export const eqHalf = (items: EItem[], size = EQS) => {
	const last = eSpan(items, items.length - 1, size, 0);
	return last.x2 / 2;
};

// ---------- 4. Worked example: follow the proton ----------
const H4 = 'worked-example';
const K4 = cues(sc(H4), {try: 'Try a harder', hpo: 'H P O four two', plus1: 'plus water, gives', gives: 'gives H two', plus2: 'plus hydroxide', follow: 'Follow the proton', loses: 'Water loses one', acid: 'water is the acid', gains: 'gains one', base: "it's the base", always: 'Always one proton', hso: 'is H S O four', not: 'not sulfate'});
export const SceneWorked: React.FC = () => {
	const S = 60, Y = 330;
	const items = eq(['HPO_4^{2-}(aq)', '+', 'H_2O(l)', '<=>', 'H_2PO_4^{-}(aq)', '+', 'OH^{-}(aq)'], [K4.hpo, K4.plus1, K4.plus1 + 8, K4.gives - 10, K4.gives, K4.plus2, K4.plus2 + 10]);
	const x0 = 960 - eqHalf(items, S);
	const dimAt = K4.hso - 4;
	const chain = eq(['H_2SO_4', '->', 'HSO_4^{-}', '->', 'SO_4^{2-}'], [K4.hso, K4.hso + 6, K4.hso + 10, K4.not - 10, K4.not - 6]);
	const PY = 680, PS = 1.85, WX = 1330, HX = 620;
	return (
		<>
			<Overlay>
				<Dim at={K4.follow} to={0.4}><TaskLine text="Identify the acid, the base and both conjugate pairs." at={K4.try} size={52} /></Dim>
				<Dim at={dimAt} to={0.3}>
					<EqLine items={items} x={x0} y={Y} size={S} />
					<EqUnder items={items} i={2} size={S} x={x0} y={Y} at={K4.loses} color={ACID} out={K4.gains} />
					<EqUnder items={items} i={6} size={S} x={x0} y={Y} at={K4.loses + 10} color={ACID} out={K4.gains} />
					<EqBox items={items} i={2} size={S} x={x0} y={Y} at={K4.acid} color={ACID} />
					<PairBracket items={items} i={2} j={6} size={S} x={x0} y={Y} at={K4.acid + 6} above gap={18} label="acid H_2O / OH^{-} (−H^{+})" lsize={36} />
					<EqUnder items={items} i={0} size={S} x={x0} y={Y} at={K4.gains} color={BASE} />
					<EqUnder items={items} i={4} size={S} x={x0} y={Y} at={K4.gains + 10} color={BASE} />
					<EqBox items={items} i={0} size={S} x={x0} y={Y} at={K4.base} color={BASE} />
					<PairBracket items={items} i={0} j={4} size={S} x={x0} y={Y} at={K4.base + 6} above={false} gap={56} label="base HPO_4^{2-} / H_2PO_4^{-} (+H^{+})" lsize={36} />
					<Fade at={K4.plus1 + 10}>
						<ProtonSwap a={[WX, PY]} b={[HX, PY]} da={SP.H2O} ac={SP.HPO4} s={PS} events={[K4.loses + 8]} glow={K4.follow} bow={-130} labels={{a: ['H_2O', 'OH^{-}'], b: ['HPO_4^{2-}', 'H_2PO_4^{-}'], size: 48, dy: 82}} />
					</Fade>
					<RoleRing x={WX} y={PY} r={150} role="acid" at={K4.acid} />
					<RoleRing x={HX} y={PY} r={190} role="base" at={K4.base} />
					<Note x={975} y={PY + 30} text="follow the proton" size={46} color={PROTON_INK} anchor="middle" at={K4.follow} out={K4.base} />
				</Dim>
				<EqLine items={chain} x={180} y={1000} size={50} />
				<MistakeX x={1100} y={952} text="H_2SO_4 / SO_4^{2-}" at={K4.hso + 14} cross={K4.not} note="one H^{+} at a time" size={40} />
				{void K4.always}{void ProtonHop}
			</Overlay>
		</>
	);
};

// ---------- 5. Conjugate strength explains the arrows ----------
const H5 = 'conjugate-strength';
const K5 = cues(sc(H5), {pairs: 'Pairs also explain', look: 'Look at the conjugate', chl: 'Chloride, from', nopull: 'no pull', never: 'almost never takes', all: 'all the way', single: 'single arrow', acet: 'Acetate, from', real: 'real pull', keeps: 'keeps taking', dbl: 'the double arrow', stronger: 'the stronger the acid', weaker: 'the weaker its'});
export const SceneStrength: React.FC = () => {
	const S = 52, X = 120, Y1 = 300, Y2 = 520;
	const e1 = eq(['HCl(aq)', '+', 'H_2O(l)', '->', 'H_3O^{+}(aq)', '+', 'Cl^{-}(aq)'], [0, 1, 2, 3, 4, 5, 6].map(i => 4 + i * 4));
	const e2 = eq(['CH_3COOH(aq)', '+', 'H_2O(l)', '<=>', 'H_3O^{+}(aq)', '+', 'CH_3COO^{-}(aq)'], [0, 1, 2, 3, 4, 5, 6].map(i => 20 + i * 4));
	const s1 = (i: number) => eSpan(e1, i, S, X), s2 = (i: number) => eSpan(e2, i, S, X);
	const meterOut = K5.weaker - 6;
	const LY = 820, LR = 175, L1 = 400, L2 = 1520;
	const hops = Array.from({length: 9}, (_, i) => K5.keeps + 4 + i * 36);
	return (
		<>
			<Heading text="Conjugate strength explains the arrows" at={4} size={56} />
			<Overlay>
				<OpGlow items={e1} i={3} size={S} x={X} y={Y1} at={K5.single} len={46} />
				<EqLine items={e1} x={X} y={Y1} size={S} />
				<PairBracket items={e1} i={0} j={6} size={S} x={X} y={Y1} at={K5.nopull - 10} above />
				<PullMeter x={s1(6).x2 + 40} y={Y1 + 10} fill={0} at={K5.nopull} out={meterOut} />
				<Sx x={s1(6).x2 + 100} y={Y1 - 40} text="no pull" size={38} color={GREY_INK} hand at={K5.nopull + 6} out={meterOut} />
				<OpGlow items={e2} i={3} size={S} x={X} y={Y2} at={K5.dbl} len={46} color={ACID} />
				<EqLine items={e2} x={X} y={Y2} size={S} />
				<PairBracket items={e2} i={0} j={6} size={S} x={X} y={Y2} at={K5.real - 10} above />
				<PullMeter x={s2(6).x2 + 40} y={Y2 + 10} fill={0.55} at={K5.real} out={meterOut} />
				<Sx x={s2(6).x2 + 100} y={Y2 - 40} text="real pull" size={38} color={BASE_INK} hand at={K5.real + 6} out={meterOut} />
				<RevHop a={[s2(4).cx, Y2 + 30]} b={[s2(6).cx, Y2 + 30]} at={K5.keeps} bow={70} keep={60} />
				<FieldLens cx={L1} cy={LY} r={LR} at={K5.chl}>
					<HopPair a={[L1 - 80, LY]} b={[L1 + 80, LY]} events={[]} s={3} startSplit />
				</FieldLens>
				<Sx x={L1} y={LY - LR - 22} text="Cl^{-} and H_3O^{+}" size={36} color={INK} anchor="middle" weight={800} at={K5.chl} />
				<Note x={L1} y={LY + LR + 52} text="Cl^{-} never takes it back" size={40} color={GREY_INK} anchor="middle" at={K5.never} />
				<FieldLens cx={L2} cy={LY} r={LR} at={K5.acet}>
					<HopPair a={[L2 - 80, LY]} b={[L2 + 80, LY]} events={hops} s={3} startSplit />
				</FieldLens>
				<Sx x={L2} y={LY - LR - 22} text="CH_3COO^{-} and H_3O^{+}" size={36} color={INK} anchor="middle" weight={800} at={K5.acet} />
				<Note x={L2} y={LY + LR + 52} text="acetate keeps taking it back" size={40} color={ACID_INK} anchor="middle" at={K5.keeps} />
				<SeeSaw x={960} y={760} at={K5.weaker - 10} s={0.75} />
				{void K5.pairs}{void K5.look}{void K5.all}{void K5.stronger}{void INK}{void PROTON}{void MistakeX}{void Fade}{void PicH}{void fitSize}{void TEAL}
			</Overlay>
		</>
	);
};
