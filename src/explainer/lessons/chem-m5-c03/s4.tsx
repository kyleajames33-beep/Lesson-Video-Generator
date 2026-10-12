import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, DrawPath, Enter, FONT_DISPLAY, FONT_HAND, HandText, INK, INK_SOFT, prog} from '../../kit';
import {cues} from '../../cues';
import {Bars, BARS, BathTint, CobaltTube, FWD, Fade, HeatIcon, MiniBars, NetArrowH, Overlay, RxnChip, StageTable, SvgText, TEAL, Thermometer, coW} from './parts';
import type {TRow} from './parts';
import {CLC_INK, COBLUE_INK, HEAT, Heading, ICE, PINK_INK, kf, sc} from './common';
import {CO_BLUEC, CO_PINKC} from './parts';

const COB_L = [{t: '[Co(H_2O)_6]^2+', color: PINK_INK, dot: CO_PINKC}, {t: '+'}, {t: '4Cl^-', color: CLC_INK}];
const COB_R = [{t: '[CoCl_4]^2-', color: COBLUE_INK, dot: CO_BLUEC}, {t: '+'}, {t: '6H_2O', color: INK_SOFT}];

// ---------- 8. Temperature: the response ----------
const K = cues(sc('temperature-response'), {were: 'were thirty', straight: 'straight after heating', fifty: 'fifty', t38: 'thirty-eight', faster: 'Forward is faster', blueForm: 'blue ions form', build: 'build up', f44: 'forty-four', higher: 'higher than before', shifted: 'shifted to the right', bluer: 'bluer', cool: 'Cool it', drop: 'both rates drop', more: 'drops more', revWins: 'reverse wins', pink: 'pink'});
export const SceneTempResponse: React.FC = () => {
	const f = useCurrentFrame();
	const H = 700, PX = 96, PY = 200;
	const s = kf(f, [[K.faster, 1], [K.bluer + 30, 2], [K.cool, 2], [K.cool + 40, 1], [K.revWins, 1], [K.pink + 10, 0]]);
	const temp = kf(f, [[K.straight, 20], [K.straight + 40, 70], [K.cool, 70], [K.cool + 40, 20], [K.cool + 70, 3]]);
	const hot = kf(f, [[K.straight, 0], [K.straight + 30, 1], [K.cool, 1], [K.cool + 30, 0]]);
	const ice = kf(f, [[K.cool + 30, 0], [K.cool + 60, 1]]);
	const fwd = kf(f, [[K.fifty - 14, 30], [K.fifty + 14, 50], [K.build, 50], [K.build + 60, 46], [K.f44 + 10, 44], [K.cool, 44], [K.cool + 30, 30], [K.drop, 30], [K.drop + 30, 26], [K.more, 26], [K.more + 40, 20]]);
	const rev = kf(f, [[K.t38 - 14, 30], [K.t38 + 14, 38], [K.build, 38], [K.build + 60, 41], [K.f44 + 10, 44], [K.cool, 44], [K.cool + 30, 30], [K.drop, 30], [K.drop + 30, 26]]);
	const rows: TRow[] = [
		{label: 'room temperature', at: K.were, cells: [['30', K.were + 6], ['30', K.were + 14]], gap: ['0', K.were + 20]},
		{label: 'just after heating', at: K.fifty, cells: [['50', K.fifty + 8], ['38', K.t38 + 8]], gap: ['12', K.faster + 10]},
		{label: 'a little later', at: K.build, cells: [['46', K.build + 10], ['41', K.build + 18]], gap: ['5', K.build + 26]},
		{label: 'new equilibrium', at: K.f44, color: TEAL, cells: [['44', K.f44 + 4], ['44', K.f44 + 10]], gap: ['0', K.f44 + 16]},
		{label: 'start again', at: K.cool + 20, cells: [['30', K.cool + 24], ['30', K.cool + 28]], gap: ['0', K.cool + 32]},
		{label: 'just after cooling', at: K.more, cells: [['20', K.more + 10], ['26', K.drop + 20]], gap: ['-6', K.more + 24]},
	];
	const tri = prog(f, K.pink + 20, 16);
	const boardO = 1 - tri;
	const plateLabel = f < K.straight ? 'room temperature: purple' : f < K.cool ? (f < K.bluer ? 'heated' : 'hot: bluer') : f < K.pink ? 'cooled in ice' : 'cold: pink';
	const arrowHeatO = 1 - prog(f, K.cool - 6, 10);
	const TW = coW(520), TY = 200;
	return (
		<>
			<Heading text="The temperature response" at={4} size={62} />
			<div style={{opacity: boardO}}>
				<CobaltTube x={PX} y={PY} h={H} s={s} />
				<BathTint x={PX} y={PY} h={H} kind="hot" amount={hot} />
				<BathTint x={PX} y={PY} h={H} kind="ice" amount={ice} />
				<div style={{position: 'absolute', left: PX - 40, top: PY + H + 24, width: coW(H) + 80, textAlign: 'center', fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40, color: INK_SOFT}}>{plateLabel}</div>
				<Overlay>
					<Thermometer x={500} y={260} h={560} temp={temp} at={-100} />
					<Fade at={K.were}><SvgText x={1500} y={338} text="made-up numbers" size={38} color={INK_SOFT} at={K.were} /><SvgText x={1500} y={384} text="to show the pattern" size={38} color={INK_SOFT} at={K.were + 8} /></Fade>
					<Bars fwd={fwd} rev={rev} at={K.were - 10} scale={6.2} />
					<g opacity={arrowHeatO}><NetArrowH gap={fwd - rev} at={K.faster} zeroAt={K.f44 + 16} lines={[{text: 'more join', at: K.faster}, {text: 'than split', at: K.faster + 8}]} /></g>
					<g opacity={prog(f, K.drop, 12)}><NetArrowH gap={fwd - rev} at={K.drop} lines={[{text: 'more split', at: K.revWins}, {text: 'than join', at: K.revWins + 8}]} /></g>
					<Fade at={K.straight} out={K.faster}><SvgText x={620} y={640} text="no concentration changes" size={34} color={TEAL} at={K.straight} /></Fade>
					<StageTable rows={rows} at={K.were - 12} gapAt={K.were + 14} />
				</Overlay>
				<RxnChip x={900} y={84} at={K.faster - 20} left={COB_L} right={COB_R} size={32} fwdLit={K.faster} revLit={K.revWins} words={false} fwdTag={{text: 'shift right', at: K.shifted, color: FWD}} revTag={{text: 'shift left', at: K.revWins, color: AMBER_INK}} />
			</div>
			<div style={{opacity: tri, position: 'absolute', left: 0, top: 0, width: 1920, height: 1080}}>
				{tri > 0 ? [[312, 0, 'cold (ice)', 'pink'], [832, 1, 'room temperature', 'purple'], [1352, 2, 'hot water', 'blue']].map(([x, sv, a, b]) => (
					<React.Fragment key={b as string}>
						<CobaltTube x={x as number} y={TY} h={520} s={sv as number} />
						<div style={{position: 'absolute', left: (x as number) - 70, top: TY + 540, width: TW + 140, textAlign: 'center', fontFamily: FONT_HAND, fontWeight: 700, fontSize: 48, color: INK}}>{a as string}</div>
						<div style={{position: 'absolute', left: (x as number) - 70, top: TY + 600, width: TW + 140, textAlign: 'center', fontFamily: FONT_HAND, fontWeight: 700, fontSize: 56, color: sv === 0 ? PINK_INK : sv === 2 ? COBLUE_INK : '#7a4ea8'}}>{b as string}</div>
					</React.Fragment>
				)) : null}
				<Overlay>
					<path d="M810,470 L610,470 M634,448 L608,470 M634,492 L608,470" fill="none" stroke={AMBER} strokeWidth={9} strokeLinecap="round" strokeLinejoin="round" />
					<SvgText x={710} y={420} text="cool: shift left" size={36} color={AMBER_INK} anchor="middle" />
					<path d="M1110,470 L1310,470 M1286,448 L1312,470 M1286,492 L1312,470" fill="none" stroke={FWD} strokeWidth={9} strokeLinecap="round" strokeLinejoin="round" />
					<SvgText x={1210} y={420} text="heat: shift right" size={36} color={FWD} anchor="middle" />
				</Overlay>
			</div>
		</>
	);
};
void BARS; void DrawPath; void Enter; void FONT_DISPLAY; void HandText; void INK; void MiniBars; void HEAT; void ICE;

// ---------- 9. Memory aid: heat in the equation ----------
const J = cues(sc('heat-aid'), {shortcut: 'shortcut', chem: 'as if it were a chemical', react: 'heat is a reactant', plus: 'plus heat', depends: 'depends on the reaction', left: 'heat on the left', right: 'heat on the right', pushes: 'heating pushes', toward: 'towards the reactants', treat: 'treat heat', added: 'added heat', away: 'away from it', taken: 'taken heat away', towardIt: 'toward it', rule: 'direction rule', rates: 'still the rates'});
const AID = ['Treat heat like a chemical.', 'Add it and the shift goes away from it.', 'Take it away and the shift goes toward it.', 'It only partly cancels the change.'];
export const SceneHeatAid: React.FC = () => {
	const f = useCurrentFrame();
	const aidAt = [J.rule - 4, J.rule + 26, J.rule + 56, J.rule + 86];
	return (
		<>
			<Heading text="Write heat into the equation" at={4} />
			<RxnChip x={96} y={178} at={J.shortcut + 20} left={[...COB_L, {t: '+', at: J.plus}, {t: 'heat', color: HEAT, at: J.plus, cap: 'heat on the left, as a reactant', capAt: J.left}]} right={COB_R} size={40} fwdLit={J.react} revLit={J.react} words={false} fwdTag={{text: 'forward takes in heat', at: J.react, icon: 'in'}} capPad={34} />
			{/* the generic ghost chip, held for the full two seconds */}
			<RxnChip x={96} y={440} at={J.right} left={[{t: 'A', color: INK}, {t: '+'}, {t: 'B', color: INK}]} right={[{t: 'C', color: INK}, {t: '+'}, {t: 'heat', color: HEAT}]} size={50} revLit={J.pushes} revTag={{text: 'heating: shift left', at: J.pushes, color: AMBER_INK, icon: 'in'}} words={false} border={HEAT} />
			<Overlay>
				<Fade at={J.right} out={J.treat - 8}>
					<SvgText x={880} y={510} text="if the forward reaction gives out heat," size={38} color={INK} at={J.right} hand={false} weight={600} />
					<SvgText x={880} y={558} text="write heat on the right" size={38} color={HEAT} at={J.right + 10} hand={false} weight={700} />
				</Fade>
				<Fade at={J.toward} out={J.treat - 8}><SvgText x={880} y={606} text="heating pushes the shift toward the reactants" size={38} color={AMBER_INK} at={J.toward} hand={false} weight={700} /></Fade>
				{/* heat added, heat taken away */}
				<Fade at={J.added}>
					<rect x={96} y={440} width={800} height={210} rx={24} fill="#fffdf8" stroke="rgba(60,45,20,0.12)" strokeWidth={2.5} />
					<HeatIcon x={200} y={528} dir="in" at={J.added} size={0.8} />
					<SvgText x={310} y={528} text="added heat" size={54} color={HEAT} at={J.added} />
					<path d="M320,584 L520,584 M494,562 L522,584 M494,606 L522,584" fill="none" stroke={FWD} strokeWidth={10} strokeLinecap="round" strokeLinejoin="round" opacity={prog(f, J.away, 12)} />
					<SvgText x={560} y={600} text="shift right" size={54} color={FWD} at={J.away} />
					<SvgText x={310} y={634} text="away from the heat: the tube turns blue" size={30} color={INK_SOFT} at={J.away + 10} hand={false} weight={600} />
				</Fade>
				<Fade at={J.taken}>
					<rect x={960} y={440} width={860} height={210} rx={24} fill="#fffdf8" stroke="rgba(60,45,20,0.12)" strokeWidth={2.5} />
					<rect x={1030} y={520} width={84} height={84} rx={14} fill="#e9f6fc" stroke={ICE} strokeWidth={5} transform="rotate(-10 1072 562)" />
					<SvgText x={1150} y={528} text="heat taken away" size={54} color={ICE} at={J.taken} />
					<path d="M1500,584 L1300,584 M1326,562 L1298,584 M1326,606 L1298,584" fill="none" stroke={AMBER} strokeWidth={10} strokeLinecap="round" strokeLinejoin="round" opacity={prog(f, J.towardIt, 12)} />
					<SvgText x={1530} y={600} text="shift left" size={54} color={AMBER_INK} at={J.towardIt} />
					<SvgText x={1150} y={634} text="toward the heat: the tube turns pink" size={30} color={INK_SOFT} at={J.towardIt + 10} hand={false} weight={600} />
				</Fade>
			</Overlay>
			{/* the aid, large, until the end of the scene */}
			<div style={{position: 'absolute', left: 96, top: 694}}>
				{AID.map((t, i) => <div key={i} style={{marginBottom: 6}}><HandText text={t} at={aidAt[i]} size={50} color={i === 0 ? TEAL : INK} cps={46} /></div>)}
			</div>
			<Enter at={J.rule + 110} style={{position: 'absolute', left: 1000, top: 890}}>
				<div style={{background: '#fffdf8', border: `3px solid ${TEAL}`, borderRadius: 999, padding: '8px 26px', fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 28, color: INK}}>for a dissolved substance, a gas in a fixed-size container, or heat</div>
			</Enter>
			<Enter at={J.rates} style={{position: 'absolute', left: 1130, top: 700, width: 720}}>
				<div style={{display: 'flex', alignItems: 'center', gap: 26}}>
					<MiniBars fw={84} rv={56} w={130} />
					<div style={{position: 'relative', display: 'inline-block', fontFamily: FONT_HAND, fontWeight: 700, fontSize: 46, color: INK, lineHeight: 1.1}}>
						It is a direction rule. The reason is still the rates.
						<svg width="100%" height={14} viewBox="0 0 100 14" preserveAspectRatio="none" style={{position: 'absolute', left: 0, bottom: -12}}><DrawPath d="M2,8 Q50,0 98,8" at={J.rates + 10} dur={16} color={AMBER} width={6} /></svg>
					</div>
				</div>
			</Enter>
		</>
	);
};
