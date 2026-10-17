import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER_INK, DrawPath, HandText, INK, INK_SOFT, prog} from '../../kit';
import {cues} from '../../cues';
import {AN_INK, CAT_INK, CROSS, Heading, sc} from './common';
import {BASO4, MEAL, NOPPT, baso4Tube, have} from './assets';
import {Chip, CompCard, EqLine, Fade, Funnel, IonLens, LineLabel, MistakeChip, Overlay, PicH, Pieces, RulesMini, Sx, SwapCross, TEAL, fitSize, funnelPts} from './parts';
import type {EItem, LensIon} from './parts';
import {AGCL_PAIRS, FULL1, MOL1, RM, SX, WHITE_INK} from './s2';

// ---------- 11. The third syllabus pair: barium sulfate and the barium meal ----------
const BA = 'baso4-meal';
const K11 = cues(sc(BA), {third: 'third pair', naso: 'sodium sulfate', bano: 'barium nitrate', swap: 'Swap partners', nano: 'sodium nitrate is soluble', baso: 'barium sulfate is one', exc: 'sulfate exceptions', white: 'a white precipitate', net: 'Barium ion plus sulfate', gives: 'gives barium sulfate', meal: 'barium meal', drink: 'white drink', xray: 'X-ray', dissolved: 'Dissolved barium ions', poison: 'are poisonous', solid: 'solid barium sulfate', barely: 'barely dissolves', gut: 'through the gut', absorbed: 'without being absorbed'});
export const SceneBariumSulfate: React.FC = () => {
	const outA = K11.meal - 6;
	const tube = baso4Tube();
	const m1: EItem[] = [{t: 'Na_2SO_4(aq)', at: K11.white + 20}, {op: '+', at: K11.white + 24}, {t: 'Ba(NO_3)_2(aq)', at: K11.white + 26}, {op: '->', at: K11.white + 30}, {t: 'BaSO_4(s)', color: WHITE_INK, at: K11.white + 32}, {op: '+', at: K11.white + 36}, {t: '2NaNO_3(aq)', at: K11.white + 38}];
	const net: EItem[] = [{t: 'Ba^{2+}(aq)', color: CAT_INK, at: K11.net}, {op: '+', at: K11.net + 10}, {t: 'SO_4^{2-}(aq)', color: AN_INK, at: K11.net + 16}, {op: '->', at: K11.gives}, {t: 'BaSO_4(s)', color: WHITE_INK, at: K11.gives + 8}];
	return (
		<>
			<Heading text="Pair 3: barium sulfate" at={4} size={56} />
			<Overlay>
				<SwapCross x={SX.x} xr={SX.xr} y1={SX.y1} y2={SX.y2} size={SX.size} left={[['Na^{+}', 'SO_4^{2-}'], ['Ba^{2+}', 'NO_3^{-}']]} leftAt={[K11.naso, K11.bano]} swap={K11.swap} resAt={[K11.swap + 20, K11.nano - 10]}
					verdicts={[{kind: 'ppt', at: K11.exc, label: 'sulfate with Ba^{2+}: insoluble'}, {kind: 'ok', at: K11.nano, label: 'soluble'}]} out={outA} />
				<RulesMini x={RM.x} y={RM.y} size={RM.size} at={K11.swap + 10} out={outA} hi={[{id: 'N', at: K11.nano, out: K11.baso}, {id: 'S', at: K11.baso}]} />
				<Fade at={K11.white}><PicH p={tube} x={90} y={300} h={330} /></Fade>
				<Sx x={180} y={680} text={have(BASO4) ? 'white solid' : 'BaSO_4(s), white'} size={34} color={WHITE_INK} anchor="middle" hand at={K11.white + 6} />
				<LineLabel x={96} y={746} text="molecular equation" at={K11.white + 20} />
				<EqLine items={m1} x={96} y={800} size={fitSize(m1, 1100, 40)} />
				<LineLabel x={96} y={866} text="net ionic equation" at={K11.net} />
				<EqLine items={net} x={96} y={930} size={52} />
				<Pieces x={960} y={930} size={38} items={[{t: 'charges: (+2) + (−2) = 0', at: K11.gives + 30}]} />
				{/* the barium meal */}
				<Fade at={K11.meal}><PicH p={MEAL} x={860} y={230} h={330} /></Fade>
				<Sx x={1110} y={290} text="barium meal: a BaSO_4 suspension" size={36} color={INK} weight={700} at={K11.drink} />
				<Sx x={1110} y={336} text="shows up the gut on an X-ray" size={34} color={INK_SOFT} hand at={K11.xray} />
				<Chip x={1130} y={390} w={380} text="Ba^{2+}(aq): toxic" size={36} color={CROSS} at={K11.poison} />
				<Chip x={1130} y={480} w={680} text="BaSO_4(s): barely dissolves, so not absorbed" size={34} color={TEAL} at={K11.barely} />
				<DrawPath d={`M1120,421 L1100,421 L1100,511 L1120,511`} at={K11.gut} dur={14} color={INK_SOFT} width={4} />
				<Sx x={1130} y={600} text="same element, different state" size={36} color={INK_SOFT} hand at={K11.gut + 6} />
				{void K11.third}{void K11.dissolved}{void K11.solid}{void K11.absorbed}{void INK}
			</Overlay>
		</>
	);
};

// ---------- 12. No precipitate ----------
const NP = 'no-precipitate';
const K12 = cues(sc(NP), {not: 'Not every mixture', mix: 'Mix potassium nitrate', nacl: ['sodium chloride', 1], swap: 'Swap partners', nano: 'sodium nitrate and potassium', both: 'Both soluble', noppt: 'so no precipitate', write: 'Write', noreact: 'not no reaction', all: 'All four ions', spect: 'every one is a spectator', nonet: 'no net ionic equation'});
const NP_IONS: LensIon[] = [{ion: 'K^{+}', u: -0.45, v: -0.35, ph: 0.3}, {ion: 'NO_3^{-}', u: 0.15, v: -0.5, ph: 1.2}, {ion: 'Na^{+}', u: 0.5, v: 0.05, ph: 2.1}, {ion: 'Cl^{-}', u: -0.4, v: 0.35, ph: 3.3}, {ion: 'K^{+}', u: 0.1, v: 0.5, ph: 4.4}, {ion: 'Cl^{-}', u: 0.0, v: -0.02, ph: 5.2}, {ion: 'NO_3^{-}', u: -0.62, v: -0.02, ph: 0.8}, {ion: 'Na^{+}', u: 0.45, v: -0.42, ph: 2.9}];
export const SceneNoPrecipitate: React.FC = () => {
	const f = useCurrentFrame();
	const grey = 0.75 * prog(f, K12.spect, 20);
	return (
		<>
			<Heading text="No precipitate" at={4} size={60} />
			<Overlay>
				<SwapCross x={SX.x} xr={SX.xr} y1={SX.y1} y2={SX.y2} size={SX.size} left={[['K^{+}', 'NO_3^{-}'], ['Na^{+}', 'Cl^{-}']]} leftAt={[K12.mix, K12.nacl]} swap={K12.swap} resAt={[K12.nano, K12.nano + 16]}
					verdicts={[{kind: 'ok', at: K12.both, label: 'soluble'}, {kind: 'ok', at: K12.both + 8, label: 'soluble'}]} />
				<Fade at={K12.noppt}><PicH p={NOPPT} x={90} y={300} h={330} /></Fade>
				<Sx x={180} y={680} text="no precipitate" size={36} color={TEAL} anchor="middle" hand at={K12.noppt + 6} />
				<MistakeChip x={SX.x} y={700} text="no reaction" size={36} at={K12.noreact} note="write: no precipitate" />
				<IonLens cx={1500} cy={720} r={190} at={K12.all} ions={NP_IONS.map(d => ({...d, grey}))} title="all spectators" titleAt={K12.spect} scale={0.85} />
				<Sx x={SX.x} y={940} text="net ionic equation: none (all spectators)" size={40} color={INK} hand at={K12.nonet} />
				{void K12.not}{void K12.write}
			</Overlay>
		</>
	);
};

// ---------- 13. What's left after filtering ----------
const FT = 'filtrate';
const K13 = cues(sc(FT), {one: 'One more question', filter: 'filter off', left: "what's left", spect: 'The spectators, always', excess: 'in excess', say: 'Say you add', more: 'more silver nitrate', needs: 'chloride needs', used: 'all used up', extra: 'extra silver ions', partner: 'no partner', stay: 'stay in solution'});
const FU = {x: 300, y: 330};
export const FILT_BASE: LensIon[] = [{ion: 'K^{+}', u: -0.45, v: -0.3, ph: 0.3}, {ion: 'NO_3^{-}', u: 0.15, v: -0.5, ph: 1.2}, {ion: 'K^{+}', u: 0.5, v: 0.1, ph: 2.1}, {ion: 'NO_3^{-}', u: -0.35, v: 0.4, ph: 3.3}, {ion: 'K^{+}', u: 0.12, v: 0.5, ph: 4.4}, {ion: 'NO_3^{-}', u: -0.02, v: 0.0, ph: 5.2}];
export const SceneFiltrate: React.FC = () => {
	const f = useCurrentFrame();
	const grey = 0.75 * prog(f, K13.spect, 16);
	const ag = prog(f, K13.extra, 16);
	const fp = funnelPts(FU.x, FU.y);
	const ions: LensIon[] = [...FILT_BASE.map(d => ({...d, grey})), {ion: 'Ag^{+}', u: 0.5, v: -0.4, ph: 0.6, o: ag}, {ion: 'NO_3^{-}', u: -0.6, v: -0.05, ph: 1.9, grey, o: ag}, {ion: 'Ag^{+}', u: -0.2, v: 0.68, ph: 2.6, o: ag}];
	return (
		<>
			<Heading text="What's left after filtering?" at={4} size={58} />
			<Overlay>
				<Sx x={96} y={250} text="KCl(aq) + AgNO_3(aq): filter off the white AgCl" size={36} color={INK} weight={600} at={K13.one} />
				<Sx x={96} y={294} text="(AgNO_3 added in excess)" size={34} color={AMBER_INK} hand at={K13.more} />
				<Funnel x={FU.x} y={FU.y} at={K13.one + 6} solidAt={K13.filter} dripAt={K13.filter + 10} fill={0.25} />
				<Sx x={FU.x + 290} y={FU.y + 110} text="residue: AgCl(s)" size={34} color={WHITE_INK} hand at={K13.filter + 20} />
				<Sx x={FU.x + 260} y={FU.y + 520} text="filtrate" size={36} color={INK} hand at={K13.filter + 30} />
				<path d={`M${fp.flask[0] + 80},${fp.flask[1]} L${880},${640}`} stroke={INK_SOFT} strokeWidth={2.5} strokeDasharray="7 6" opacity={prog(f, K13.left, 12)} />
				<IonLens cx={1100} cy={640} r={220} at={K13.left} ions={ions} title="in the filtrate" titleAt={K13.left + 10} />
				<Sx x={1100} y={960} text="leftover Ag^{+} (excess): no partner" size={34} color={CAT_INK} anchor="middle" hand at={K13.partner} />
				<CompCard x={1400} y={330} w={420} h={250} title="filtrate:" at={K13.spect} lines={[
					{t: 'K^{+}, NO_3^{-}', at: K13.spect, color: INK_SOFT},
					{t: '+ the excess Ag^{+}', at: K13.stay, color: CAT_INK},
				]} />
				<Sx x={1400} y={640} text="spectators, always," size={34} color={INK} hand at={K13.spect + 6} />
				<Sx x={1400} y={684} text="plus any ion in excess" size={34} color={INK} hand at={K13.excess} />
				{void K13.say}{void K13.needs}{void K13.used}{void AN_INK}
			</Overlay>
		</>
	);
};

// ---------- 14. Memory aid ----------
const MA = 'memory-aid';
const K14 = cues(sc(MA), {line: 'line to remember', swap: 'Swap partners', check: 'check both', then: 'for the equation', split: 'split only the aqueous', cross: 'cross out', same: 'same on both sides'});
export const SceneAid: React.FC = () => {
	const m1 = MOL1(Array(7).fill(-100)).map(it => it);
	const s1 = 34;
	const full = FULL1(m1, Array(13).fill(0).map((_, i) => K14.split + i * 3), 0, 0, {strike: [K14.cross, K14.cross + 8]});
	// FULL1 flies from the standard line 1 position; here line 1 sits elsewhere, so re-anchor the flights
	const fixed = full.map(it => ('from' in it && it.from ? {...it, from: undefined} : it));
	const s2 = fitSize(fixed, 1400, 32);
	return (
		<>
			<div style={{position: 'absolute', left: 96, top: 220}}><HandText text="Swap partners, check both." at={K14.swap} size={84} cps={26} color={TEAL} /></div>
			<div style={{position: 'absolute', left: 96, top: 820}}><HandText text="Split only (aq). Cross out what's the same on both sides." at={K14.split} size={52} cps={34} color={TEAL} /></div>
			<Overlay>
				<Sx x={96} y={170} text="the line to remember" size={42} color={INK_SOFT} hand at={K14.line} />
				<SwapCross x={1150} xr={1530} y1={260} y2={380} size={30} left={AGCL_PAIRS} leftAt={[K14.line, K14.line + 6]} swap={K14.swap} resAt={[K14.swap + 10, K14.swap + 18]}
					verdicts={[{kind: 'ppt', at: K14.check, label: undefined}, {kind: 'ok', at: K14.check + 6, label: undefined}]} />
				<EqLine items={m1} x={96} y={560} size={s1} />
				<EqLine items={fixed} x={96} y={660} size={s2} />
				<Sx x={96} y={740} text="the solid stays whole" size={32} color={INK_SOFT} hand at={K14.split + 30} />
				<Sx x={96} y={980} text="rules are a first prediction; the solid is never split" size={32} color={INK_SOFT} hand at={K14.same + 10} />
				{void K14.then}{void RulesMini}
			</Overlay>
		</>
	);
};
