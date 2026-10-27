// S07 scenes 8 and 9: fixes that fix (Answer A "repeat and be careful" against Answer B, which names the change and
// what it fixes; one 2025 Chemistry ladder, paraphrased; when "repeat it" earns marks, from one 2024 Biology guideline,
// with a two-way sign) and risk answers (hazard, harm, control, filled from the combustion practical's risk table; "wear
// a lab coat" alone crossed; one 2024 Biology guideline).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {FONT_HAND} from '../../kit';
import {AMBER, AMBER_INK, AnswerBox, CARD, Chip, CrossedHabit, GREEN, GREY, GREY_INK, GreyTag, INK, INK_SOFT, LostMarksTag, Overlay, Plate, T, TEAL, plateW, prog, vis} from './kit';
import type {ARow, AnsSpec} from './kit';
import {BOTTLE7, sc} from './common';
import {BandLadder} from './pieces';

// ---------- 8. Fixes that fix ----------
const K8 = cues(sc('fixes-that-fix'), {now: 'Now compare', a: 'Answer A', careful: 'be more careful', any: 'any practical', b: 'Answer B', justified: 'each justified', two: 'got two', when: 'when does', rel: 'about reliability'});
export const SceneFixes: React.FC = () => {
	const f = useCurrentFrame();
	const panelO = 1 - 0.65 * prog(f, K8.justified - 10, 14);
	const ladderO = vis(f, K8.justified - 10, K8.rel, 12) + 0.35 * prog(f, K8.rel, 12);
	const A: AnsSpec = {x: 330, y: 170, w: 700, lines: 3, lh: 46, size: 28, label: 'Answer A'};
	const B: AnsSpec = {x: 1080, y: 170, w: 760, lines: 4, lh: 46, size: 28, label: 'Answer B'};
	const ra: ARow[] = [{text: 'Repeat the experiment more times and be more careful when measuring.', at: K8.a + 20, dur: 60}];
	const rb: ARow[] = [{text: 'Keep the can 2 cm above the wick for both alcohols, trimming the propan-1-ol wick, so both lose a similar share of heat and the difference is caused by the alcohol.', at: K8.b, dur: 80}];
	return (
		<Overlay>
			<g opacity={panelO}>
				<AnswerBox spec={A} rows={ra} at={K8.a} />
				<AnswerBox spec={B} rows={rb} at={K8.b - 10} ann={[{kind: 'under', row: 0, phrase: 'so both lose a similar share of heat', at: K8.b + 90, color: AMBER}]} />
				<GreyTag x={330} y={400} text="repeat → reliability, not the distance" at={K8.careful + 10} size={22} />
				<GreyTag x={330} y={440} text="be more careful → which step?" at={K8.careful + 24} size={22} />
				<LostMarksTag x={330} y={490} text="fix mark: 0" at={K8.any + 10} size={26} />
				<Chip x={1080} y={470} text="fix mark: 1" at={K8.b + 100} size={26} color={GREEN} tick={K8.b + 110} />
				<GreyTag x={1300} y={480} text="HSCScience marking guide (illustrative)" at={K8.b + 100} size={18} />
			</g>
			<BandLadder x={330} y={590} at={K8.justified} under={K8.two} o={ladderO}
				rungs={[
					{mark: '3', crit: 'two changes, each justified by its effect on accuracy'},
					{mark: '2', crit: 'one justified change, OR two changes', judge: 'named without reasons'},
					{mark: '1', crit: 'some relevant information'},
				]} />
			<GreyTag x={330} y={930} text="a NESA Chemistry marking guideline, 2025 (3 marks), paraphrased" at={K8.justified + 20} size={22} />
			<Chip x={1300} y={600} text="reliability question: 'repeat it' + how it shows whether results agree → marks" at={K8.rel} size={28} color={TEAL} fill="#e3f3f0" maxW={520} />
			<GreyTag x={1300} y={770} text="a NESA Biology marking guideline, 2024 (2 marks)" at={K8.rel + 14} size={20} maxW={520} />
			<Chip x={1300} y={830} text="systematic error or validity problem → repeats don't fix it" at={K8.rel + 40} size={24} color={GREY} textColor={GREY_INK} maxW={520} />
			<Chip x={1300} y={930} text="reliability question → explain the repeats" at={K8.rel + 54} size={24} color={TEAL} maxW={520} />
			{void K8.now}{void K8.when}{void CARD}{void INK}
		</Overlay>
	);
};

// ---------- 9. Risk answers ----------
const K9 = cues(sc('risk-answers'), {hazard: 'the hazard', harm: 'the harm', control: 'a control', flam: 'are flammable', refill: 'refill a', coat: 'lab coat', prevents: 'it prevents'});
const COLW = [520, 470, 600];
export const SceneRisk: React.FC = () => {
	const f = useCurrentFrame();
	const X0 = 180, Y0 = 220, HH = 70, RH = 210;
	const heads = ['Hazard', 'Harm', 'Control'];
	const hat = [K9.hazard, K9.harm, K9.control];
	const cells = ['alcohols: flammable (methanol, ethanol, propan-1-ol highly flammable)', 'fire; vapour reaches a flame', 'refill cold, away from flames; cap to put it out'];
	const cat = [K9.flam, K9.flam + 30, K9.refill];
	let x = X0;
	return (
		<Overlay>
			<rect x={X0} y={Y0} width={COLW.reduce((a, b) => a + b, 0)} height={HH + RH} rx={14} fill={CARD} stroke={INK_SOFT} strokeWidth={2.5} opacity={prog(f, 4, 12)} />
			{heads.map((h, i) => {
				const cx = x;
				x += COLW[i];
				const lit = vis(f, hat[i], hat[i + 1] ?? K9.flam, 10) > 0.5;
				return (
					<g key={h} opacity={prog(f, 4 + i * 4, 12)}>
						{i > 0 ? <line x1={cx} x2={cx} y1={Y0} y2={Y0 + HH + RH} stroke="rgba(60,45,20,0.22)" strokeWidth={2} /> : null}
						<rect x={cx + 3} y={Y0 + 3} width={COLW[i] - 6} height={HH - 6} rx={10} fill={lit ? '#f6d77a' : '#efe8da'} opacity={lit ? 0.7 : 1} />
						<T x={cx + 20} y={Y0 + 46} text={h} size={32} weight={700} color={INK} />
						<g opacity={prog(f, cat[i], 12)}>
							{i === 0 ? <Plate p={BOTTLE7} x={cx + 20} y={Y0 + HH + 20} h={150} /> : null}
							<foreignObject x={cx + (i === 0 ? 20 + plateW(BOTTLE7, 150) + 16 : 20)} y={Y0 + HH + 14} width={COLW[i] - (i === 0 ? 40 + plateW(BOTTLE7, 150) + 16 : 40)} height={RH - 20}>
								<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 32, lineHeight: 1.12, color: AMBER_INK}}>{cells[i]}</div>
							</foreignObject>
						</g>
					</g>
				);
			})}
			<line x1={X0} x2={X0 + COLW.reduce((a, b) => a + b, 0)} y1={Y0 + HH} y2={Y0 + HH} stroke="rgba(60,45,20,0.22)" strokeWidth={2} opacity={prog(f, 4, 12)} />
			<T x={X0 + 20 + plateW(BOTTLE7, 150) / 2} y={Y0 + HH + 192} text="alcohol" size={18} weight={700} color={GREY_INK} anchor="middle" o={prog(f, K9.flam, 12)} />
			<GreyTag x={X0} y={Y0 + HH + RH + 20} text="from the combustion practical's risk table" at={K9.flam + 20} size={22} />
			<CrossedHabit x={X0} y={640} text="wear a lab coat" at={K9.coat - 10} cross={K9.coat + 20} caption="which hazard? which harm?" size={34} />
			<Chip x={900} y={640} text="a safety answer that earned the marks: the precaution, and how it prevents infection" at={K9.prevents} size={28} color={TEAL} fill="#e3f3f0" maxW={820} />
			<GreyTag x={900} y={780} text="a NESA Biology marking guideline, 2024 (2 marks)" at={K9.prevents + 14} size={22} />
		</Overlay>
	);
};
