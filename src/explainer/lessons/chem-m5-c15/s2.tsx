import React from 'react';
import {useCurrentFrame} from 'remotion';
import {HandText} from '../../kit';
import {cues} from '../../cues';
import {AN_INK, CAT_INK, CORAL_INK, GHOST, LEFT, S_INK, sc} from './common';
import {NOPPT, PIPETTE} from './assets';
import {ALine, AMBER, AMBER_INK, BD, CodeBeaker, EqLine, ExpLabels, Expr, Fade, GivensCard, HBracket, INK, INK_SOFT, KMarker, LogLine, MistakeChip, Overlay, PicH, PptBeaker, QMarker, Ring, Struck, Sx, SwapCross, TEAL, Tag, TaskLine, cardH, dissEq, exprTermX, lgx, mRowXs, mw, picW, segXs} from './parts';
import type {Ln, MPiece} from './parts';

const B = BD;

// ---------- shared: the CaSO4 board ----------
export const CASO4_EQ = (ats: number[] | number) => dissEq('CaSO_4(s)', 'Ca^{2+}(aq)', 'SO_4^{2-}(aq)', ats);
const CaSCard: React.FC<{at: number; a: [number, number, number, number]}> = ({at, a}) => (
	<GivensCard x={B.card.x} y={B.card.y} w={B.card.w} h={cardH(4)} at={at} lh={B.card.lh} lines={[
		{text: 'equal volumes of', at: a[0], size: B.card.s, color: INK_SOFT},
		{text: 'CaCl_2(aq): 0.010 mol/L', at: a[1], size: B.card.s},
		{text: 'Na_2SO_4(aq): 0.010 mol/L', at: a[2], size: B.card.s},
		{text: 'Ksp(CaSO_4) = 4.93 × 10^{−5} (25 °C)', at: a[3], size: B.card.s, color: TEAL},
	]} />
);

// ---------- 5. Worked example 1: calcium sulfate (set up) ----------
const W1 = 'caso4-setup';
const K5 = cues(sc(W1), {try: 'Try it', equal: 'Equal volumes', cacl: 'calcium chloride', naso: 'sodium sulfate', mixed: 'are mixed', could: 'could form', caso: 'is calcium sulfate', slight: 'slightly soluble', ksp: 'its Ksp', v493: '4.93', after: 'After mixing', doubles: 'volume doubles', each: 'are each', v005: '0.0050', mpl: ['moles per litre', 3]});
export const SceneCaSetup: React.FC = () => {
	const eq = CASO4_EQ([K5.caso, K5.caso + 8, K5.caso + 14, K5.caso + 18, K5.caso + 22]);
	return (
		<>
			<Overlay>
				<TaskLine text="Will CaSO_4 precipitate?" at={K5.try} />
				<EqLine items={eq.items} x={B.strip.x} y={B.strip.y} size={B.strip.s} />
				<CaSCard at={K5.equal - 6} a={[K5.equal, K5.cacl, K5.naso, K5.v493]} />
				<SwapCross x={800} xr={1300} y1={300} y2={410} size={36} left={[['Ca^{2+}', 'Cl^{-}'], ['Na^{+}', 'SO_4^{2-}']]} leftAt={[K5.cacl, K5.naso]} swap={K5.mixed} resAt={[K5.mixed + 20, K5.could]}
					verdicts={[{kind: 'ok', at: K5.slight - 20, label: 'NaCl: soluble'}, {kind: 'ppt', at: K5.slight, label: 'CaSO_4: slightly soluble'}]} />
				{/* after mixing: twice the volume */}
				<CodeBeaker x={110} y={700} w={90} h={110} level={0.4} at={K5.after} />
				<CodeBeaker x={220} y={700} w={90} h={110} level={0.4} at={K5.after} />
				<Sx x={340} y={770} text="→" size={56} color={INK} at={K5.after + 6} />
				<CodeBeaker x={420} y={640} w={120} h={180} level={0.8} at={K5.after + 10} />
				<Sx x={110} y={880} text="volume doubles" size={34} color={TEAL} hand at={K5.doubles} />
				<GivensCard x={800} y={560} w={1020} h={360} at={K5.after} title="after mixing" lh={66} lines={[
					{text: 'volume × 2, so each concentration ÷ 2', at: K5.doubles, size: 34},
					{text: '[Ca^{2+}] = 0.0050 mol/L', at: K5.v005, size: 38, color: CAT_INK},
					{text: '[SO_4^{2-}] = 0.0050 mol/L', at: K5.v005 + 8, size: 38, color: AN_INK},
					{text: 'Na^{+} and Cl^{−}: spectators', at: K5.mpl, size: 30, color: LEFT},
				]} />
				{void K5.ksp}{void K5.each}
			</Overlay>
		</>
	);
};

// ---------- 6. Worked example 1: compare, and the trap ----------
const W2 = 'caso4-compare';
const K6 = cues(sc(W2), {qsp: 'Qsp is calcium', times: '0.0050 times', v25: '2.5 times', less: 'less than Ksp', noppt: 'no precipitate', trap: 'the trap', without: 'Without diluting', wrong: '0.010 times', v10: '1.0 times', four: 'four times too big', bigger: 'bigger than Ksp', predict: 'predict a solid'});
export const AfterCard: React.FC<{lines: [string, string]; x?: number; y?: number; w?: number}> = ({lines, x = 800, y = 196, w = 640}) => (
	<GivensCard x={x} y={y} w={w} h={200} at={-100} title="after mixing" lh={50} lines={[
		{text: lines[0], at: -100, size: 32, color: CAT_INK},
		{text: lines[1], at: -100, size: 32, color: AN_INK},
	]} />
);
export const SceneCaCompare: React.FC = () => {
	const eq = CASO4_EQ(-100);
	const ln: Ln = {y: 800, x0: 820, x1: 1720, lo: -6, hi: -3};
	const X = 800;
	return (
		<>
			<Overlay>
				<TaskLine text="Will CaSO_4 precipitate?" at={-100} />
				<EqLine items={eq.items} x={B.strip.x} y={B.strip.y} size={B.strip.s} />
				<CaSCard at={-100} a={[-100, -100, -100, -100]} />
				<AfterCard lines={['[Ca^{2+}] = 0.0050 mol/L', '[SO_4^{2-}] = 0.0050 mol/L']} />
				<ALine x={X} y={470} items={[{t: 'Qsp = [Ca^{2+}][SO_4^{2-}]', at: K6.qsp}, {t: '= (0.0050)(0.0050)', at: K6.times}]} size={40} />
				<ALine x={X} y={540} items={[{t: '= 2.5 × 10^{−5}', at: K6.v25, color: CORAL_INK}]} size={40} />
				<Struck x={X} y={610} text="undiluted: (0.010)(0.010) = 1.0 × 10^{−4}" size={36} at={K6.wrong} strike={K6.four + 30} color={GHOST} />
				<Tag x={1500} y={636} w={250} text="4 × too big" at={K6.four} color={GHOST} />
				<LogLine ln={ln} at={K6.qsp} labels={false} />
				<ExpLabels ln={ln} at={K6.qsp + 10} />
				<KMarker k={4.93e-5} ln={ln} at={K6.qsp + 14} label="Ksp" size={40} />
				<QMarker ln={ln} at={K6.less} value={2.5e-5} label="Qsp < Ksp" side="left" color={CORAL_INK} size={38} />
				<QMarker ln={ln} at={K6.bigger} value={1.0e-4} label="undiluted" side="right" color={GHOST} size={34} ghost />
				<Fade at={K6.noppt}><PicH p={NOPPT} x={96} y={640} h={300} /></Fade>
				<Sx x={290} y={760} text="no precipitate" size={44} color={TEAL} hand at={K6.noppt + 6} />
				<MistakeChip x={290} y={860} text="precipitate" size={34} at={K6.predict} note="dilute first" />
				{void K6.trap}{void K6.without}{void K6.v10}
			</Overlay>
		</>
	);
};

// ---------- shared: the PbSO4 board ----------
export const PBSO4_EQ = (ats: number[] | number) => dissEq('PbSO_4(s)', 'Pb^{2+}(aq)', 'SO_4^{2-}(aq)', ats);
const PbCard: React.FC<{at: number; a: number[]; ksp?: number}> = ({at, a, ksp}) => (
	<GivensCard x={B.card.x} y={B.card.y} w={640} h={cardH(ksp === undefined ? 4 : 5)} at={at} lh={B.card.lh} lines={[
		{text: 'Pb(NO_3)_2(aq):', at: a[0], size: B.card.s, color: CAT_INK},
		{text: '25.0 mL of 4.0 × 10^{−3} mol/L', at: a[1], size: B.card.s},
		{text: 'Na_2SO_4(aq):', at: a[2], size: B.card.s, color: AN_INK},
		{text: '75.0 mL of 2.0 × 10^{−4} mol/L', at: a[3], size: B.card.s},
		...(ksp === undefined ? [] : [{text: 'Ksp(PbSO_4) = 2.53 × 10^{−8} (25 °C)', at: ksp, size: B.card.s, color: TEAL}]),
	]} />
);

// ---------- 7. Unequal volumes: work through moles ----------
const W3 = 'pbso4-moles';
const K7 = cues(sc(W3), {work: 'work through moles', v25: '25.0 millilitres', lead: 'lead nitrate', v75: '75.0 millilitres', naso: 'sodium sulfate', moles: 'Moles of lead ions', cv: 'concentration times volume', n1: ['1.0 times', 1], div: 'Divide by the total', v100: ['0.100 litres', 1], pb: 'lead is 1.0', so: 'Sulfate 1.5', n2: '1.5 times ten to the minus five', over: ['over 0.100', 1], c2: ['1.5 times', 2]});
export const ScenePbMoles: React.FC = () => {
	const eq = PBSO4_EQ(0);
	const C = {x: 780, y: 196, w: 1040};
	const X = C.x + 30, s = 32;
	const l1: MPiece[] = [{t: 'n(Pb^{2+}) = c × V', at: K7.moles}, {t: '= 4.0 × 10^{−3} mol/L × 0.0250 L', at: K7.cv + 20}];
	return (
		<>
			<Overlay>
				<TaskLine text="Will PbSO_4 precipitate?" at={0} />
				<EqLine items={eq.items} x={B.strip.x} y={B.strip.y} size={B.strip.s} />
				<PbCard at={K7.v25 - 10} a={[K7.v25, K7.v25 + 8, K7.v75, K7.v75 + 8]} />
				<Fade at={K7.v25}><PicH p={PIPETTE} x={96} y={660} h={280} /></Fade>
				<Sx x={96 + picW(PIPETTE, 280) / 2} y={980} text="each volume measured" size={28} color={INK_SOFT} anchor="middle" hand at={K7.v25 + 10} />
				<Fade at={K7.work}><rect x={C.x} y={C.y} width={C.w} height={760} rx={22} fill="#fffdf8" stroke="rgba(60,45,20,0.18)" strokeWidth={3} /></Fade>
				<Sx x={X} y={C.y + 54} text="after mixing: work through moles" size={38} color={INK_SOFT} hand at={K7.work} />
				<ALine x={X} y={C.y + 130} items={l1} size={s} />
				<ALine x={X + 160} y={C.y + 190} items={[{t: '= 1.0 × 10^{−4} mol', at: K7.n1, color: CAT_INK}]} size={s} />
				<Sx x={X + 560} y={C.y + 190} text="mL to L: ÷ 1000" size={30} color={AMBER_INK} hand at={K7.cv + 30} />
				<ALine x={X} y={C.y + 270} items={[{t: 'V total = 25.0 + 75.0 = 100.0 mL', at: K7.div}, {t: '= 0.100 L', at: K7.v100, color: TEAL}]} size={s} />
				<ALine x={X} y={C.y + 350} items={[{t: '[Pb^{2+}] = 1.0 × 10^{−4} mol ÷ 0.100 L', at: K7.pb - 30}]} size={s} />
				<ALine x={X + 160} y={C.y + 410} items={[{t: '= 1.0 × 10^{−3} mol/L', at: K7.pb + 10, color: CAT_INK}]} size={s + 4} />
				<ALine x={X} y={C.y + 500} items={[{t: 'n(SO_4^{2-}) = 2.0 × 10^{−4} mol/L × 0.0750 L', at: K7.so}]} size={s} />
				<ALine x={X + 160} y={C.y + 560} items={[{t: '= 1.5 × 10^{−5} mol', at: K7.n2, color: AN_INK}]} size={s} />
				<ALine x={X} y={C.y + 640} items={[{t: '[SO_4^{2-}] = 1.5 × 10^{−5} mol ÷ 0.100 L', at: K7.over}]} size={s} />
				<ALine x={X + 160} y={C.y + 700} items={[{t: '= 1.5 × 10^{−4} mol/L', at: K7.c2, color: AN_INK}]} size={s + 4} />
				{void segXs}
			</Overlay>
		</>
	);
};

// ---------- 8. Worked example 2: compare ----------
const W4 = 'pbso4-compare';
const K8 = cues(sc(W4), {qsp: 'Qsp for lead sulfate', times: 'times 1.5', v15: '1.5 times ten to the minus seven', table: 'data table', v253: '2.53', bigger: 'is bigger', six: 'about six', white: 'white precipitate', pbso: ['lead sulfate forms', 1]});
export const ScenePbCompare: React.FC = () => {
	const eq = PBSO4_EQ(-100);
	const ln: Ln = {y: 820, x0: 820, x1: 1720, lo: -9, hi: -6};
	const X = 800;
	const xk = lgx(2.53e-8, ln), xq = lgx(1.5e-7, ln);
	return (
		<>
			<Overlay>
				<TaskLine text="Will PbSO_4 precipitate?" at={-100} />
				<EqLine items={eq.items} x={B.strip.x} y={B.strip.y} size={B.strip.s} />
				<PbCard at={-100} a={[-100, -100, -100, -100]} ksp={K8.v253} />
				<AfterCard lines={['[Pb^{2+}] = 1.0 × 10^{−3} mol/L', '[SO_4^{2-}] = 1.5 × 10^{−4} mol/L']} />
				<ALine x={X} y={470} items={[{t: 'Qsp = [Pb^{2+}][SO_4^{2-}]', at: K8.qsp}]} size={40} />
				<ALine x={X} y={540} items={[{t: '= (1.0 × 10^{−3})(1.5 × 10^{−4})', at: K8.times - 30}]} size={40} />
				<ALine x={X} y={610} items={[{t: '= 1.5 × 10^{−7}', at: K8.v15, color: CORAL_INK}]} size={40} />
				<LogLine ln={ln} at={K8.table} labels={false} />
				<ExpLabels ln={ln} at={K8.table + 10} />
				<KMarker k={2.53e-8} ln={ln} at={K8.v253} label="Ksp" size={40} />
				<QMarker ln={ln} at={K8.bigger} value={1.5e-7} label="Qsp > Ksp" side="right" color={CORAL_INK} size={38} />
				<HBracket x1={xk} x2={xq} y={700} at={K8.six} d={16} color={AMBER_INK} />
				<Sx x={(xk + xq) / 2} y={688} text="about 6 ×" size={38} color={AMBER_INK} anchor="middle" hand at={K8.six + 6} />
				<PptBeaker x={96} y={680} h={250} at={K8.white} label="PbSO_4(s), white" />
				<Sx x={420} y={800} text="precipitate" size={44} color={TEAL} hand at={K8.pbso} />
				{void Ring}{void AMBER}
			</Overlay>
		</>
	);
};

// ---------- 9. Memory aid ----------
const MA = 'memory-aid';
const K9 = cues(sc(MA), {order: 'the order', dilute: 'Dilute first', then: 'Then Qsp', over: 'Over Ksp', falls: 'falls out'});
export const SceneAid: React.FC = () => {
	const f = useCurrentFrame();
	const ln: Ln = {y: 790, x0: 1180, x1: 1700, lo: -2, hi: 2};
	const fall = Math.min(1, Math.max(0, (f - K9.falls) / 30));
	const qpx = mRowXs([{t: 'Pb^{2+}', at: 0}, {t: 'I^{-}', at: 0, p: '2'}], 46, exprTermX(1180, 46, 'Q'));
	return (
		<>
			<div style={{position: 'absolute', left: 96, top: 200}}><HandText text="Dilute first." at={K9.dilute} size={90} cps={24} color={TEAL} /></div>
			<div style={{position: 'absolute', left: 96, top: 400}}><HandText text="Then Qsp." at={K9.then} size={90} cps={24} color={TEAL} /></div>
			<div style={{position: 'absolute', left: 96, top: 600}}><HandText text="Over Ksp, it falls out." at={K9.over} size={90} cps={24} color={TEAL} /></div>
			<Overlay>
				<Sx x={96} y={170} text="the order" size={42} color={INK_SOFT} hand at={K9.order} />
				<CodeBeaker x={1180} y={180} w={140} h={200} level={0.84} at={K9.dilute} ticks={[0.42, 0.84]} />
				<Sx x={1350} y={300} text="after mixing" size={34} color={INK_SOFT} hand at={K9.dilute + 8} />
				<Expr x={1180} y={510} size={46} at={K9.then} base="Q" color={CORAL_INK} terms={[{t: 'Pb^{2+}', at: K9.then, color: CAT_INK}, {t: 'I^{-}', at: K9.then, color: AN_INK, p: '2', pColor: AMBER_INK}]} />
				<Ring cx={qpx[1].x + qpx[1].w + 10} cy={510 - 34} rx={22} ry={24} at={K9.then + 14} color={AMBER} seed={3} />
				<LogLine ln={ln} at={K9.over} labels={false} />
				<KMarker k={1} ln={ln} at={K9.over + 4} label="Ksp" size={36} />
				<QMarker ln={ln} at={K9.over + 10} value={10 ** 1.3} label="Qsp" side="mid" color={CORAL_INK} size={34} />
				<g opacity={fall} transform={`translate(0,${fall * 40})`}>
					{[0, 1, 2, 3, 4].map(i => <rect key={i} x={1620 + (i % 3) * 18} y={620 + Math.floor(i / 3) * 16} width={14} height={14} rx={2} fill="#ffffff" stroke="#9aa7b0" strokeWidth={1.6} />)}
				</g>
				<Tag x={96} y={900} w={1260} text="after-mixing concentrations; same powers as Ksp; Ksp at the same temperature" at={K9.falls + 10} color={TEAL} />
			</Overlay>
		</>
	);
};
void S_INK; void INK;
