// Y11 Chem M2 V06 scenes 12 to 17: two HSC-style attempts (the full card, data and a picture of the given set-up
// arrive at once and stay through the 10 s countdown), brief feedback (framed answers, one crossed slip each), the
// conclusion and handoff (recap strip with plates, the model panel, the old copper sulfate jar), and the key notes,
// which cross-fade back to the handoff's final frame.
import React from 'react';
import {Freeze, useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {BALANCE, CRUCIBLE, CUP, JAR, dur, hold, sc} from './common';
import {
	AMB, AMB_INK, Ammonia, CAxes, CPts, CSeg, Card, Chip, Di, Fade, Framed, GOLD, GREY_INK, H_FILL, Heading, INK, INK_SOFT, Move, NAVY, N_FILL, O_FILL, PauseHold, PenRing,
	Plate, RED, Rich, StrikeLine, TickMark, Sx, TEAL, TEAL_INK, VIOLET, Water, Write, gx, gy, prog, tw,
} from './parts';
import type {CG, Seg} from './parts';

const SVG: React.FC<{children: React.ReactNode}> = ({children}) => <svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>{children}</svg>;
const TAG = 'HSC-style question, written for HSCScience';
const QTag: React.FC = () => <Sx x={1824} y={150} text={TAG} size={30} color={INK_SOFT} anchor="end" hand at={-1000} />;
const Lines: React.FC<{x: number; y: number; lines: Seg[][]; size: number; lh: number}> = ({x, y, lines, size, lh}) => <>{lines.map((l, i) => <Rich key={i} x={x} y={y + i * lh} segs={l} size={size} weight={700} />)}</>;
/** Data table: header column then values. */
const Table: React.FC<{x: number; y: number; heads: Seg[][]; rows: string[][]; hw: number; cw: number; rh: number; size: number}> = ({x, y, heads, rows, hw, cw, rh, size}) => {
	const W = hw + cw * rows[0].length;
	return (
		<g>
			<rect x={x} y={y} width={W} height={rh * 2} fill="#fffdf8" stroke="rgba(60,45,20,0.35)" strokeWidth={2.5} />
			<rect x={x} y={y} width={hw} height={rh * 2} fill="#f1ebdf" />
			<line x1={x} x2={x + W} y1={y + rh} y2={y + rh} stroke="rgba(60,45,20,0.35)" strokeWidth={2} />
			{rows[0].map((_, i) => <line key={i} x1={x + hw + i * cw} x2={x + hw + i * cw} y1={y} y2={y + rh * 2} stroke="rgba(60,45,20,0.35)" strokeWidth={2} />)}
			{heads.map((h, r) => <Rich key={r} x={x + 16} y={y + r * rh + rh * 0.66} segs={h} size={size} weight={700} />)}
			{rows.map((row, r) => row.map((v, i) => <Sx key={r + '-' + i} x={x + hw + i * cw + cw / 2} y={y + r * rh + rh * 0.66} text={v} size={size} color={INK} anchor="middle" weight={600} at={-1000} />))}
		</g>
	);
};

// ---------- 12. Attempt 1 ----------
const K12 = cues(sc('attempt-1'), {turn: 'Your turn', pause: 'Pause here'});
const A1_HEAD: Seg[][] = [[{t: 'volume of H_2SO_4 (mL)'}], [{t: 'temperature rise (°C)'}]];
const A1_ROWS = [['5', '10', '15', '20', '25'], ['4.4', '8.8', '6.6', '4.4', '2.2']];
const Question1: React.FC = () => (
	<>
		<Card h={690} />
		<Lines x={140} y={262} size={36} lh={52} lines={[
			[{t: 'A student mixed 1.0 mol L^{−1} sulfuric acid, H_2SO_4, with'}],
			[{t: '1.0 mol L^{−1} sodium hydroxide, NaOH, keeping the total'}],
			[{t: 'volume at 30 mL, and recorded the temperature rise.'}],
		]} />
		<Table x={140} y={410} heads={A1_HEAD} rows={A1_ROWS} hw={400} cw={150} rh={58} size={34} />
		<Lines x={140} y={608} size={36} lh={52} lines={[
			[{t: '(a) Use the data to determine the mole ratio in which', w: 700}],
			[{t: '      H_2SO_4 and NaOH react.', w: 700}],
			[{t: '(b) Write a balanced equation consistent with this ratio.', w: 700}],
			[{t: '      The products are sodium sulfate, Na_2SO_4, and water.', w: 700}],
		]} />
		<Sx x={1340} y={764} text="(3 marks)" size={34} color={INK} weight={700} at={-1000} />
		<Plate p={CUP} x={1440} y={215} h={330} />
		<Sx x={1530} y={580} text="same method" size={34} color={INK} anchor="middle" hand at={-1000} />
	</>
);
export const SceneAttempt1: React.FC = () => (
	<SVG>
		<Heading text="Your turn" at={0} />
		<QTag />
		<Question1 />
		<PauseHold h={hold('attempt-1')} at={K12.pause} x={140} y={936} cx={1690} cy={700} />
		{void K12.turn}
	</SVG>
);

// ---------- 13. Feedback 1 ----------
const K13 = cues(sc('feedback-1'), {lines: 'The lines through', cross: 'cross at ten', base: 'twenty of base', equal: 'Equal concentrations mean', onetwo: 'one to two', so: 'So H two', makes: 'makes N a two', o: 'plus two H two O', saying: 'Saying one to one', slip: 'classic slip', make: 'Equal concentrations make', one2: ['one to one', 2]});
const G13: CG = {x: 1230, y: 220, w: 570, h: 340, x0: 0, x1: 30, y0: 0, y1: 10};
const A1_PTS = [[5, 4.4], [10, 8.8], [15, 6.6], [20, 4.4], [25, 2.2]];
const Recap1: React.FC = () => (
	<g>
		<Table x={96} y={200} heads={A1_HEAD} rows={A1_ROWS} hw={400} cw={120} rh={60} size={34} />
		<Sx x={96} y={380} text="1.0 mol L^{−1} each; total 30 mL" size={34} color={INK} weight={700} at={-1000} />
		<Sx x={96} y={428} text="(a) mole ratio  (b) balanced equation" size={34} color={INK} weight={700} at={-1000} />
	</g>
);
export const SceneFeedback1: React.FC = () => {
	const f = useCurrentFrame();
	const cx = gx(G13, 10), cy = gy(G13, 8.8);
	const Y1 = 620, S1 = 56;
	const a0 = 96, a1 = a0 + tw('(a) ', S1), a2 = a1 + tw('10', S1), a3 = a2 + tw(' : ', S1), a4 = a3 + tw('20', S1), a5 = a4 + tw(' by volume = ', S1);
	const eq: Seg[] = [{t: 'H_2SO_4 + '}, {t: '2', c: TEAL}, {t: 'NaOH → Na_2SO_4 + '}, {t: '2', c: TEAL}, {t: 'H_2O'}];
	const B1 = 48;
	const bx = a0 + tw('(b) ', B1);
	const ringX = bx + B1 * 0.45 + tw('H_2SO_4 + ', B1) + tw('2', B1) / 2;
	return (
		<SVG>
			<Heading text="Your turn" at={-1000} />
			<Recap1 />
			<CAxes g={G13} at={-1000} xLabel="volume of H₂SO₄ (mL)" yLabel="ΔT (°C)" xTicks={[0, 10, 20, 30]} yTicks={[0, 5, 10]} grid={{dx: 5, dy: 2.5}} size={28} />
			<CPts g={G13} pts={A1_PTS.map(([x, y]) => ({x, y, at: -1000, color: INK}))} r={10} />
			<CSeg g={G13} a={[1.5, 1.32]} b={[11.2, 9.86]} at={K13.lines} color={'#8a8478'} width={4} />
			<CSeg g={G13} a={[28, 0.88]} b={[8, 9.68]} at={K13.lines + 14} color={'#8a8478'} width={4} />
			<Fade at={K13.cross}>
				<line x1={cx} x2={cx} y1={cy} y2={G13.y + G13.h} stroke={TEAL} strokeWidth={4} strokeDasharray="9 7" />
				<circle cx={cx} cy={cy} r={14} fill="none" stroke={TEAL} strokeWidth={5} />
			</Fade>
			<Rich x={cx + 30} y={cy - 26} segs={[{t: '10 mL acid', c: NAVY}, {t: ' : ', c: INK}, {t: '20 mL base', c: VIOLET}]} size={34} hand at={K13.cross + 10} />
			<Rich x={a0} y={Y1} segs={[{t: '(a) '}, {t: '10', c: NAVY}, {t: ' : '}, {t: '20', c: VIOLET}, {t: ' by volume = '}]} size={S1} weight={800} at={K13.base} />
			<Framed x={a5 - 10} y={Y1} segs={[{t: '1 : 2', c: INK}]} at={K13.onetwo} size={S1} tick={false} />
			<Rich x={a5 + tw('1 : 2', S1) + 50} y={Y1} segs={[{t: ' by moles'}]} size={S1} weight={800} at={K13.onetwo} />
			<Write x={a1 + tw('10', S1) / 2} y={Y1 + 62} text="acid" at={K13.base + 10} size={40} color={NAVY} anchor="middle" />
			<Write x={a3 + tw('20', S1) / 2} y={Y1 + 62} text="base" at={K13.base + 16} size={40} color={VIOLET} anchor="middle" />
			<Write x={96} y={Y1 + 136} text="equal concentrations: volumes count moles" at={K13.equal} size={42} color={TEAL_INK} />
			<Rich x={a0} y={860} segs={[{t: '(b)'}]} size={B1} weight={800} at={K13.so} />
			<Rich x={bx + B1 * 0.45} y={860} segs={eq} size={B1} weight={800} at={K13.so} out={K13.o + 10} />
			<Framed x={bx} y={860} segs={eq} at={K13.o + 10} size={B1} />
			<PenRing cx={ringX} cy={860 - B1 * 0.34} rx={26} ry={36} at={K13.makes - 30} color={TEAL} seed={3} />
			<Chip x={1180} y={680} segs={[{t: "1 : 1 (equal concentrations)"}]} at={K13.saying} color={RED} size={38} hand strike={K13.slip} />
			<Write x={1180} y={800} text="equal concentrations do not" at={K13.make} size={42} color={RED} />
			<Write x={1180} y={848} text="make the ratio 1 : 1" at={K13.make + 20} size={42} color={RED} />
			{void f}{void K13.one2}
		</SVG>
	);
};

// ---------- 14. Attempt 2 ----------
const K14 = cues(sc('attempt-2'), {last: 'Last one', pause: 'Pause here'});
const EqN: React.FC<{x: number; y: number}> = ({x, y}) => (
	<g>
		<Di x={x} y={y} r={26} fill={N_FILL} />
		<Sx x={x + 70} y={y + 14} text="+" size={44} color={INK} anchor="middle" at={-1000} />
		{[0, 1, 2].map(i => <Di key={i} x={x + 135} y={y - 46 + i * 46} r={17} fill={H_FILL} />)}
		<Sx x={x + 205} y={y + 14} text="→" size={44} color={INK} anchor="middle" at={-1000} />
		<Ammonia x={x + 270} y={y - 42} r={22} />
		<Ammonia x={x + 270} y={y + 34} r={22} />
	</g>
);
const Question2: React.FC = () => (
	<>
		<Card h={715} />
		<Rich x={140} y={285} segs={[{t: 'N_2 + 3H_2 → 2NH_3'}]} size={56} weight={800} />
		<Sx x={140} y={350} text="(N = 14.01, H = 1.008)" size={36} color={INK} weight={700} at={-1000} />
		<rect x={1140} y={205} width={650} height={290} rx={18} fill="#f7f3ea" />
		<g transform="translate(1465,350) scale(1.75) translate(-1535,-287)"><EqN x={1400} y={280} /></g>
		<Lines x={140} y={560} size={36} lh={54} lines={[
			[{t: 'A student claims: "28.0 g of N_2 reacts with 3 × 28.0 = 84.0 g'}],
			[{t: 'of H_2, because the coefficients are 1 and 3."'}],
		]} />
		<Lines x={140} y={690} size={36} lh={54} lines={[
			[{t: "Evaluate the student's claim, including a calculation of the", w: 700}],
			[{t: 'mass of H_2 that reacts.', w: 700}],
		]} />
		<Sx x={580} y={744} text="(3 marks)" size={34} color={INK} weight={700} at={-1000} />
		<rect x={140} y={772} width={1040} height={110} rx={14} fill="none" stroke="rgba(60,45,20,0.45)" strokeWidth={3} strokeDasharray="12 9" />
		<Sx x={166} y={816} text="your working" size={34} color={INK} hand at={-1000} />
	</>
);
export const SceneAttempt2: React.FC = () => (
	<SVG>
		<Heading text="Last one" at={0} />
		<QTag />
		<Question2 />
		<PauseHold h={hold('attempt-2')} at={K14.pause} x={140} y={940} cx={1640} cy={680} />
		{void K14.last}
	</SVG>
);

// ---------- 15. Feedback 2 ----------
const K15 = cues(sc('feedback-2'), {wrong: 'The claim is wrong', g28: 'Twentyeight point zero grams', mole: 'one mole', says: 'The equation says', three: 'three moles of hydrogen', threeH: 'three moles of H two', six: 'six grams', treated: 'The student treated', mass: 'mass ratio', theyre: "They're"});
const MB = {x: 1320, k: 5.4};
const MassBar: React.FC<{y: number; label: string; g: number; val: string; grow?: number; inside?: boolean; strike?: number; tick?: number; fill?: string}> = ({y, label, g, val, grow, inside = false, strike, tick, fill = '#f6d9a3'}) => {
	const f = useCurrentFrame();
	const p = grow === undefined ? 1 : prog(f, grow, 24);
	const w = Math.max(3, g * MB.k * p);
	return (
		<g>
			<Rich x={MB.x} y={y} segs={[{t: label}]} size={32} weight={700} />
			<rect x={MB.x} y={y + 16} width={w} height={54} rx={8} fill={fill} stroke={AMB} strokeWidth={4} />
			{inside ? <Sx x={MB.x + w - 18} y={y + 58} text={val} size={40} color={AMB_INK} anchor="end" weight={800} at={-1000} /> : <Sx x={MB.x + w + 16} y={y + 58} text={val} size={40} color={AMB_INK} weight={800} at={grow ?? -1000} />}
			{strike !== undefined ? <StrikeLine x1={MB.x - 8} y1={y + 52} x2={MB.x + w + 8} y2={y + 34} at={strike} width={8} /> : null}
			{tick !== undefined ? <TickMark x={MB.x + w + 170} y={y + 42} at={tick} s={1.3} /> : null}
		</g>
	);
};
export const SceneFeedback2: React.FC = () => {
	const S = 48;
	const r3 = 96 + tw('m(H_2) = 2.998 × 2.016 = ', S);
	return (
		<SVG>
			<Heading text="Last one" at={-1000} />
			<Rich x={96} y={250} segs={[{t: 'N_2 + 3H_2 → 2NH_3'}]} size={48} weight={800} />
			<Rich x={96} y={312} segs={[{t: 'claim: 28.0 g N_2 needs 3 × 28.0 = '}, {t: '84.0 g', c: AMB_INK}, {t: ' H_2'}]} size={36} weight={700} />
			<Sx x={96} y={364} text="N = 14.01, H = 1.008" size={34} color={INK} weight={700} at={-1000} />
			<Write x={940} y={314} text="wrong" at={K15.wrong + 6} size={48} color={RED} />
			<rect x={1290} y={180} width={530} height={220} rx={18} fill="#f7f3ea" />
			<g transform="translate(1535,287) scale(1.25) translate(-1535,-287)"><EqN x={1400} y={280} /></g>
			<Rich x={1555} y={440} segs={[{t: '1 mol : 3 mol', c: TEAL_INK}]} size={42} anchor="middle" weight={800} at={K15.says} />
			<Rich x={96} y={520} segs={[{t: 'n(N_2) = '}, {t: '28.0', c: AMB_INK}, {t: ' ÷ 28.02 = '}, {t: '0.9993 mol', c: TEAL_INK}, {t: '  ≈ 0.999', c: GREY_INK, w: 700}]} size={S} weight={800} at={K15.g28} />
			<Write x={300} y={588} text="grams → moles first" at={K15.mole} size={46} color={TEAL_INK} />
			<Rich x={96} y={690} segs={[{t: 'n(H_2) = 0.9993 '}, {t: '× 3', c: TEAL_INK}, {t: ' = '}, {t: '2.998 mol', c: TEAL_INK}, {t: '  ≈ 3.00', c: GREY_INK, w: 700}]} size={S} weight={800} at={K15.says} />
			<Rich x={96} y={820} segs={[{t: 'm(H_2) = 2.998 × 2.016 = '}, {t: '6.044 g', c: AMB_INK}]} size={S} weight={800} at={K15.threeH} />
			<Framed x={r3 + tw('6.044 g', S) + 36} y={820} segs={[{t: '6.04 g', c: AMB_INK}]} at={K15.six} size={S} />
			<Sx x={96} y={880} text="unrounded amounts carried; 3.00 × 2.016 would give 6.05" size={28} color={GREY_INK} weight={700} at={K15.six + 20} />
			{/* mass bars to scale: the given N2, the claimed H2 (crossed), the H2 that reacts (lands on its cue) */}
			<rect x={1290} y={470} width={530} height={430} rx={18} fill="#fffdf8" stroke="rgba(60,45,20,0.25)" strokeWidth={3} />
			<Sx x={1316} y={512} text="masses, to scale" size={34} color={INK} hand at={-1000} />
			<MassBar y={560} label="N_2 given" g={28.0} val="28.0 g" />
			<MassBar y={680} label="H_2 the student claims" g={84.0} val="84.0 g" inside strike={K15.mass} />
			<MassBar y={800} label="H_2 that reacts" g={6.044} val="6.04 g" grow={K15.six} tick={K15.six + 14} fill="#cfe9d8" />
			<Write x={1300} y={940} text="coefficients are moles, not grams" at={K15.theyre - 10} size={40} color={RED} />
			{void K15.treated}{void K15.three}
		</SVG>
	);
};

// ---------- 16. Conclusion and handoff ----------
const K16 = cues(sc('conclusion-handoff'), {so: 'So coefficients', ratios: 'mole ratios', masses: 'Masses follow', exp: 'Experiments confirm', now: 'Now we have', model: 'model', moles: ['moles', 2], molar: 'molar mass', ratios2: 'and ratios', can: 'Can it solve', jar: 'old jar', pct: 'thirty point two', how: 'How can'});
const Panel: React.FC<{x: number; at: number; title: Seg[][]; children: React.ReactNode}> = ({x, at, title, children}) => (
	<Fade at={at}>
		<rect x={x} y={350} width={548} height={330} rx={20} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={3} />
		{children}
		{title.map((l, i) => <Rich key={i} x={x + 28} y={600 + i * 44} segs={l} size={36} weight={700} />)}
	</Fade>
);
const MiniPeak: React.FC<{x: number; y: number}> = ({x, y}) => {
	const g: CG = {x, y, w: 240, h: 150, x0: 0, x1: 40, y0: 0, y1: 8};
	return (
		<g>
			<line x1={x} y1={y} x2={x} y2={y + 150} stroke={INK} strokeWidth={3} />
			<line x1={x} y1={y + 150} x2={x + 240} y2={y + 150} stroke={INK} strokeWidth={3} />
			<path d={`M${gx(g, 3)},${gy(g, 1)} L${gx(g, 20)},${gy(g, 6.6)} L${gx(g, 37)},${gy(g, 1)}`} fill="none" stroke="#8a8478" strokeWidth={4} />
			{[5, 10, 15, 20, 25, 30, 35].map((v, i) => <circle key={i} cx={gx(g, v)} cy={gy(g, [1.7, 3.3, 5.0, 6.6, 5.0, 3.4, 1.6][i])} r={7} fill={INK} />)}
			<Sx x={gx(g, 20)} y={y - 8} text="1 : 1" size={30} color={TEAL_INK} anchor="middle" weight={800} at={-1000} />
		</g>
	);
};
export const SceneConclusion: React.FC = () => {
	const f = useCurrentFrame();
	const stripOut = K16.jar - 24;
	const MODEL: [string, number][] = [['moles count particles', K16.moles], ['n = m ÷ MM', K16.molar], ['ratios come from moles', K16.ratios2]];
	return (
		<SVG>
			<rect x={96} y={180} width={1100} height={140} rx={22} fill="#fffdf8" stroke={TEAL} strokeWidth={5} />
			<Rich x={130} y={262} segs={[{t: 'Coefficients count; ', c: TEAL_INK}, {t: 'masses weigh.', c: AMB_INK}]} size={64} hand weight={700} />
			<Sx x={130} y={304} text="total mass still conserved" size={28} color={GREY_INK} weight={600} at={-1000} />
			<Sx x={1180} y={214} text="memory aid" size={28} color={INK_SOFT} anchor="end" hand at={-1000} />
			{/* recap strip: three panels with their pictures; the model chips write under them */}
			<g opacity={1 - prog(f, stripOut, 16)}>
				<Panel x={96} at={0} title={[[{t: 'coefficients count particles', c: TEAL_INK}], [{t: '→ mole ratios', c: TEAL_INK}]]}>
					<Di x={180} y={450} r={18} fill={H_FILL} /><Di x={180} y={510} r={18} fill={H_FILL} />
					<Di x={290} y={480} r={26} fill={O_FILL} />
					<Sx x={360} y={494} text="→" size={44} color={INK} anchor="middle" at={-1000} />
					<Water x={450} y={440} r={26} /><Water x={450} y={515} r={26} />
					<Sx x={570} y={492} text="2 : 1 : 2" size={34} color={TEAL_INK} anchor="middle" weight={800} at={-1000} />
				</Panel>
				<Panel x={666} at={K16.masses} title={[[{t: 'masses from moles;', c: AMB_INK}], [{t: 'total conserved', c: AMB_INK}]]}>
					<Plate p={BALANCE} x={700} y={385} h={180} />
					<Sx x={1190} y={460} text="4.03 + 32.00" size={32} color={AMB_INK} anchor="end" weight={800} at={-1000} />
					<Sx x={1190} y={505} text="= 36.03 g" size={32} color={AMB_INK} anchor="end" weight={800} at={-1000} />
				</Panel>
				<Panel x={1236} at={K16.exp} title={[[{t: 'experiment confirms', c: INK}], [{t: 'whole numbers', c: INK}]]}>
					<Plate p={CUP} x={1262} y={380} h={190} />
					<MiniPeak x={1440} y={410} />
				</Panel>
				<Write x={96} y={760} text="the model:" at={K16.model} size={44} color={TEAL_INK} />
				{MODEL.map(([t, at], i) => <Chip key={t} x={96 + i * 570 + 274} y={790} segs={[{t}]} at={at} color={TEAL_INK} size={38} anchor="middle" fill="#eef7f6" />)}
				<Sx x={1244 + 274} y={900} text="(formulae and equations)" size={30} color={TEAL_INK} anchor="middle" weight={600} at={K16.ratios2 + 6} />
			</g>
			{/* final frame: the unfamiliar problem against the model */}
			<Fade at={stripOut + 10}>
				<rect x={1240} y={350} width={584} height={330} rx={20} fill="#eef7f6" stroke={TEAL} strokeWidth={4} />
				<Sx x={1270} y={400} text="the model" size={40} color={TEAL_INK} hand at={-1000} />
				<Sx x={1270} y={470} text="moles count particles" size={38} color={TEAL_INK} weight={800} at={-1000} />
				<Sx x={1270} y={540} text="n = m ÷ MM" size={38} color={TEAL_INK} weight={800} at={-1000} />
				<Sx x={1270} y={610} text="ratios come from moles" size={38} color={TEAL_INK} weight={800} at={-1000} />
				<Sx x={1270} y={652} text="(formulae and equations)" size={30} color={TEAL_INK} weight={600} at={-1000} />
			</Fade>
			<Plate p={JAR} x={96} y={370} h={340} at={K16.jar} dy={-50} />
			<Plate p={CRUCIBLE} x={470} y={410} h={300} at={K16.jar + 10} dy={-50} />
			<Sx x={300} y={752} text="old crystals, pale crust" size={32} color={INK_SOFT} anchor="middle" hand at={K16.jar + 10} />
			<Chip x={700} y={430} segs={[{t: 'lost only 30.2%'}]} at={K16.pct} color={NAVY} size={42} />
			<Chip x={700} y={530} segs={[{t: 'formula: 36.1%'}]} at={K16.pct + 14} color={GOLD} size={42} />
			<Sx x={1135} y={600} text="?" size={140} color={AMB} anchor="middle" weight={800} at={K16.pct + 30} />
			<Chip x={960} y={810} segs={[{t: 'Next: How can a chemistry model solve an unfamiliar quantitative problem?'}]} at={K16.how} color={NAVY} size={36} anchor="middle" />
			{void K16.so}{void K16.ratios}{void K16.now}{void K16.can}{void Move}
		</SVG>
	);
};

// ---------- 17. Key notes ----------
const NOTES: Seg[][][] = [
	[[{t: 'Coefficients give mole ratios: 2H_2 + O_2 → 2H_2O is'}], [{t: '2 : 1 : 2 by moles', c: TEAL_INK}, {t: ', '}, {t: 'about 1 : 8 : 9 by mass', c: AMB_INK}, {t: '.'}]],
	[[{t: 'Total mass is conserved', c: AMB_INK}, {t: '; masses do not react in the coefficient ratio.'}]],
	[[{t: 'Coefficients count particles', c: TEAL_INK}, {t: ' (molecules, atoms or formula units);'}], [{t: 'subscripts count atoms in one particle. Balance with coefficients only.'}]],
	[[{t: 'n(wanted) = n(given) × '}, {t: 'coeff(wanted) ÷ coeff(given)', c: TEAL_INK}]],
	[[{t: 'Continuous variation: equal concentrations, fixed total volume;'}], [{t: 'best-fit lines cross at the mole ratio.'}]],
];
export const SceneNotes: React.FC = () => {
	const f = useCurrentFrame();
	const D = dur('key-notes');
	const back = prog(f, D - 70, 45);
	let y = 262;
	const rows = NOTES.map((lines, i) => {
		const y0 = y;
		y += lines.length * 52 + 26;
		return (
			<Fade key={i} at={30 + i * 12}>
				<circle cx={112} cy={y0 - 13} r={8} fill={AMB} />
				{lines.map((l, k) => <Rich key={k} x={140} y={y0 + k * 52} segs={l} size={38} weight={600} />)}
			</Fade>
		);
	});
	return (
		<>
			<SVG>
				<g opacity={1 - back}>
					<Write x={96} y={150} text="Key notes: what to write in your book" at={2} size={60} color={INK} cps={40} />
					<Write x={1824} y={150} text="Pause the video if you need more time to copy." at={100} size={36} color={AMB_INK} anchor="end" />
					{rows}
					<Fade at={96}>
						<rect x={96} y={790} width={1300} height={140} rx={22} fill="#fffdf8" stroke={TEAL} strokeWidth={5} />
						<Sx x={130} y={830} text="memory aid" size={28} color={INK_SOFT} hand at={-1000} />
						<Rich x={130} y={890} segs={[{t: 'Coefficients count; ', c: TEAL_INK}, {t: 'masses weigh.', c: AMB_INK}]} size={60} hand weight={700} />
						<Sx x={1370} y={900} text="total mass still conserved" size={28} color={GREY_INK} anchor="end" weight={600} at={-1000} />
					</Fade>
				</g>
			</SVG>
			{back > 0.005 ? (
				<div style={{position: 'absolute', inset: 0, opacity: back}}>
					<Freeze frame={dur('conclusion-handoff') - 16}><SceneConclusion /></Freeze>
				</div>
			) : null}
		</>
	);
};
void StrikeLine; void PenRing;
