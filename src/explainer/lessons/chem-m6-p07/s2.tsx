// M6 P07 scenes 6 to 10: the titration (standardised NaOH, a diluted aliquot, phenolphthalein, the first faint pink
// that lasts 30 s); the titre table, concordance strip and mean; the calculation through the mole bridge, one line at a
// time, with the scale bar for the dilution; the report in the label's units with the comparison bars; two results with
// two meanings, the Ka check and why pH cannot replace the titration.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {cues} from '../../cues';
import {kf, sc} from './common';
import {CFLASK, PHTH, PIPETTE_G, TILE} from './assets';
import {
	AChip, AMB, BuretteFill, CompareBars, ConcStrip, DimG, Drop, EqLine, Fade, GCard, GREEN, GREYX, GTick, INK, INK_SOFT, KeptChip, MoleBridge, NAVY, Note, Overlay, P, PHV, PicH,
	PipettePlate, RX, ResultRow, RingAt, ScaleBar, StepCard, Sx, TEAL, TRead, Table4, TaskLine, TimerIcon, WLine, burAt, countRead, eq, fitSize, flaskW, mw, picW, rigPts, smooth,
	vis, wobAt,
} from './parts';

// ---------- 6. The titration ----------
const S6 = 'titrate';
const K6 = cues(sc(S6), {std: 'was standardised', abs: 'absorbs carbon', c: 'zero point zero nine nine four zero', pip: 'Pipette twenty', drops: 'add two drops', phth: 'phenolphthalein', stop: 'Stop at', pink: 'faint pink', thirty: 'thirty seconds'});
export const SceneTitrate: React.FC = () => {
	const f = useCurrentFrame();
	const R = {tx: 620, ty: 600, bh: 480, fh: 240};
	const b = burAt(R.tx, R.ty, R.bh);
	const p = rigPts(R.tx, R.ty, R.bh);
	const fw = flaskW(R.fh), fx = R.tx - fw / 2, fy = R.ty + 16;
	const tw = fw * 1.7, th = (tw * TILE.box[3]) / TILE.box[2];
	const dr = [K6.stop - 6, K6.stop + 14, K6.pink - 16];
	const added = countRead([{t0: K6.phth + 40, t1: K6.stop - 14, a: 0, b: 16.9}, {t0: dr[0] + 10, t1: dr[0] + 12, a: 16.9, b: 16.95}, {t0: dr[1] + 10, t1: dr[1] + 12, a: 16.95, b: 17.0}, {t0: dr[2] + 10, t1: dr[2] + 12, a: 17.0, b: 17.05}], 2, 4);
	const level = (fr: number) => 0.2 + Number(added(fr) || 0);
	const wob = wobAt(dr.map(t => t + 12), 4)(f);
	const clear = prog(f, K6.pip + 40, 16);
	const flash = vis(f, dr[0] + 12, dr[0] + 26, 6) * 0.7;
	const pink = Math.max(flash, prog(f, K6.pink, 20));
	const fast = vis(f, K6.phth + 40, K6.stop - 14, 4);
	const pipO = vis(f, K6.pip - 6, K6.drops, 10);
	const fc = fx + fw / 2;
	return (
		<Overlay>
			<StepCard n={3} text="Titrate" at={6} />
			<PicH p={TILE} x={R.tx - tw / 2} y={fy + R.fh - th * 0.55} h={th} />
			<BuretteFill x={b.x} y={b.y} h={R.bh} level={level} />
			<g transform={wob ? `rotate(${wob} ${fc} ${fy + R.fh})` : undefined}>
				<PicH p={CFLASK} x={fx} y={fy} h={R.fh} o={1 - clear} />
				{clear > 0.01 ? <PicH p={PHTH.clear} x={fx} y={fy} h={R.fh} o={clear * (1 - pink)} /> : null}
				{pink > 0.01 ? <PicH p={PHTH.pink} x={fx} y={fy} h={R.fh} o={pink} /> : null}
			</g>
			{fast > 0.01 ? <line x1={p.tip[0]} y1={p.tip[1] + 2} x2={p.tip[0]} y2={fy + R.fh * 0.7} stroke="#7f9cc8" strokeWidth={5} strokeLinecap="round" opacity={0.9 * fast} /> : null}
			{dr.map((t, i) => <Drop key={i} x={p.tip[0]} y0={p.tip[1] + 4} y1={fy + R.fh * 0.68} at={t} color="#7f9cc8" />)}
			<Sx x={p.tube(500)[0] + 24} y={p.tube(500)[1]} text="NaOH, standardised" size={30} color={NAVY} weight={800} at={8} />
			<Sx x={p.tube(500)[0] + 24} y={p.tube(500)[1] + 40} text="0.09940 mol/L" size={30} color={NAVY} weight={800} at={K6.c} />
			<KeptChip x={RX} y={300} text="c(NaOH) = 0.09940 mol/L" at={K6.c + 24} color={NAVY} size={36} />
			<DimG at={K6.c} to={0.35}><Note x={RX} y={400} text="standardised: NaOH absorbs CO_2 (titration video)" size={26} color={INK_SOFT} hand={false} at={K6.abs} /></DimG>
			{pipO > 0.01 ? <PipettePlate tipX={fc - 4} tipY={fy + 34} h={300} rot={PIPETTE_G.tilt - 28} o={pipO} /> : null}
			<DimG at={K6.stop} to={0.4}><Sx x={fx - 30} y={fy + R.fh + 70} text="25.00 mL diluted vinegar" size={28} color={AMB} anchor="end" weight={800} at={K6.pip + 30} /></DimG>
			{[0, 1].map(i => <Drop key={'i' + i} x={fc} y0={fy - 60} y1={fy + R.fh * 0.7} at={K6.drops + 10 + i * 14} color="#f4f0f6" />)}
			<DimG at={K6.stop} to={0.4}><Sx x={fx - 30} y={fy + R.fh + 108} text="+ 2 drops phenolphthalein" size={28} color={INK_SOFT} anchor="end" weight={700} at={K6.drops + 20} /></DimG>
			<Sx x={900} y={470} text="volume added (mL)" size={28} color={INK_SOFT} hand at={K6.phth + 30} />
			<TRead x={900} y={500} text={added} at={K6.phth + 30} size={42} sample="17.05" />
			<DimG at={K6.pink} to={0.35}><Note x={RX} y={470} text="technique: the titration practical" size={28} color={INK_SOFT} at={K6.phth + 40} /></DimG>
			<TimerIcon cx={RX + 40} cy={640} r={34} at={K6.thirty - 10} spin={60} />
			<Sx x={RX + 92} y={652} text="30 s" size={36} color={INK} weight={800} at={K6.thirty} />
			<GTick x={RX + 200} y={640} at={K6.thirty + 64} color={TEAL} s={1.4} />
			<Note x={RX} y={740} text="first faint pink that lasts 30 s" size={36} color="#c2417a" at={K6.pink} />
			<Sx x={RX} y={784} text="(the pink can fade as CO_2 from air dissolves)" size={24} color={INK_SOFT} weight={600} at={K6.pink + 20} />
			{void K6.std}{void INK}{void kf}
		</Overlay>
	);
};

// ---------- 7. The results ----------
const S7 = 'results';
const K7 = cues(sc(S7), {rough: 'rough run', acc: 'accurate titres', a: 'seventeen point zero five', b: 'seventeen point one zero', c: 'seventeen point one five', within: 'within zero point', mean: ['seventeen point one zero', 2]});
export const SceneResults: React.FC = () => {
	const TX = 110, TY = 260;
	return (
		<Overlay>
			<TaskLine text="The results" at={4} size={56} />
			<DimG at={K7.mean + 40} to={0.7}>
				<Table4 x={TX} y={TY} at={4} rows={[
					{cells: ['rough', '0.00', '17.4', '17.4'], at: K7.rough, titreAt: K7.rough + 30, grey: true},
					{cells: ['1', '0.20', '17.25', '17.05'], at: K7.a - 20, titreAt: K7.a, ring: K7.mean},
					{cells: ['2', '0.50', '17.60', '17.10'], at: K7.b - 20, titreAt: K7.b, ring: K7.mean + 6},
					{cells: ['3', '0.10', '17.25', '17.15'], at: K7.c - 16, titreAt: K7.c, ring: K7.mean + 12},
				]} />
			</DimG>
			<Sx x={TX + 860} y={TY + 24 + 70 * 0.8} text="not used" size={28} color={GREYX} hand at={K7.rough + 40} />
			<DimG at={K7.within} to={0.4}><Note x={TX + 620} y={TY - 50} text="titre = final − initial" size={32} color={TEAL} at={K7.acc} /></DimG>
			<DimG at={K7.mean} to={0.45}>
				<ConcStrip x={150} y={830} w={900} lo={17.0} hi={17.2} at={K7.acc} ticks={[17.0, 17.05, 17.1, 17.15, 17.2]} size={24} dots={[
					{v: 17.05, at: K7.a + 6}, {v: 17.1, at: K7.b + 6}, {v: 17.15, at: K7.c + 6},
				]} bracket={{a: 17.05, b: 17.15, at: K7.within, text: '0.10 mL'}} />
			</DimG>
			<Sx x={TX} y={1000} text="(17.05 + 17.10 + 17.15) ÷ 3 = 17.10 mL" size={36} color={INK} weight={700} at={K7.mean + 4} />
			<KeptChip x={1220} y={500} text="mean titre = 17.10 mL" at={K7.mean + 30} color={TEAL} size={40} />
		</Overlay>
	);
};

// ---------- 8. The calculation ----------
const S8 = 'calculation';
const K8 = cues(sc(S8), {eth: 'Ethanoic acid', one: 'one to one', so: 'So the moles', n: 'one point six nine nine seven', eq: 'equal the moles', div: 'Divide by', c1: 'zero point zero six seven nine nine', times: 'Times ten for', c2: 'zero point six seven nine nine'});
export const SceneCalc: React.FC = () => {
	const strip = eq(['CH_3COOH(aq)', '+', 'NaOH(aq)', '->', 'CH_3COONa(aq)', '+', 'H_2O(l)'], K8.eth);
	const ss = fitSize(strip, 1000, 38);
	const l2 = 'c(diluted) = 1.6997 × 10^{−3} ÷ 0.02500';
	return (
		<Overlay>
			<TaskLine text="Find c(CH_3COOH) in the vinegar" at={4} size={54} />
			<DimG at={K8.so} to={0.5}><EqLine items={strip} x={96} y={240} size={ss} /></DimG>
			<AChip x={1160} y={196} text="1 : 1" size={38} color={TEAL} hand={false} at={K8.one} />
			<KeptChip x={1400} y={196} text="mean titre = 17.10 mL" at={4} color={TEAL} size={32} />
			<DimG at={K8.c2} to={0.5}>
				<GCard x={96} y={276} w={1100} size={30} lh={52} at={8} lines={[
					{t: 'NaOH: c = 0.09940 mol/L, mean titre = 17.10 mL', at: 12, marks: [{sub: '0.09940 mol/L', at: K8.so + 20}, {sub: '17.10 mL', at: K8.so + 30}]},
					{t: 'diluted vinegar: aliquot 25.00 mL', at: 18, marks: [{sub: '25.00 mL', at: K8.div}]},
					{t: 'dilution: 25.00 mL to 250.0 mL', at: 24, grey: true},
				]} />
			</DimG>
			<MoleBridge x={96} y={548} at={K8.so} w={440} h={112} gap={110} size={32} boxes={[
				{head: 'known: NaOH', color: NAVY, fill: {t: '1.6997 × 10^{−3} mol', at: K8.n + 16}, lit: K8.n},
				{head: 'ratio', color: TEAL, fill: {t: '1 : 1', at: K8.so + 10}, lit: K8.eq - 10},
				{head: 'unknown: CH_3COOH', color: AMB, fill: {t: '1.6997 × 10^{−3} mol', at: K8.eq + 10}, lit: K8.eq},
			]} />
			<WLine x={96} y={740} size={38} dim={K8.c1} items={P('n(NaOH) = 0.09940 × 0.01710', K8.so + 30, {t: '= 1.6997 × 10^{−3} mol = n(CH_3COOH)', color: NAVY}, K8.n)} />
			<DimG at={K8.div} to={0.35}><Note x={1290} y={742} text="keep the digits; round at the end" size={28} color={INK_SOFT} at={K8.n + 30} /></DimG>
			<WLine x={96} y={815} size={38} dim={K8.c2} items={P(l2, K8.div + 10, {t: '= 0.06799 mol/L', color: AMB}, K8.c1)} />
			<ScaleBar x1={1250} x2={1520} y={880} lift={40} text="× 10" at={K8.times} size={34} />
			<WLine x={96} y={890} size={40} items={P('c(vinegar) = 10 × 0.06799', K8.times + 10, {t: '= 0.6799 mol/L', color: AMB}, K8.c2)} />
			<AChip x={96} y={940} text="vinegar: 0.6799 mol/L ethanoic acid" size={38} color={AMB} hand={false} at={K8.c2 + 24} />
			<DimG at={K8.c2 + 90} to={0.4}><Note x={900} y={985} text="4 s.f., like the data" size={30} color={INK_SOFT} at={K8.c2 + 30} /></DimG>
		</Overlay>
	);
};

// ---------- 9. Report it the way the label does ----------
const S9 = 'report-label';
const K9 = cues(sc(S9), {label: "The label's", means: 'means about four', convert: 'so convert', zero: 'Zero point six', forty: 'forty point eight', g: 'four point zero eight three', just: 'just over', close: 'close'});
export const SceneReport: React.FC = () => {
	const X = 96;
	return (
		<Overlay>
			<StepCard n={4} text="Report" at={6} />
			<KeptChip x={X} y={196} text="vinegar: 0.6799 mol/L" at={4} color={AMB} size={34} />
			<WLine x={X} y={360} size={38} dim={K9.zero} items={P('label: about 4 g per 100 mL', K9.means)} />
			<WLine x={X} y={440} size={40} dim={K9.g} items={P('mass per litre = 0.6799 × 60.05', K9.zero + 10, {t: '= 40.83 g/L', color: AMB}, K9.forty)} />
			<WLine x={X} y={520} size={42} items={P('per 100 mL:', K9.g - 10, {t: '= 4.083 g per 100 mL', color: AMB}, K9.g)} />
			<CompareBars x={X} y={680} k={250} a={4} b={4.083} labA="label: 4 g per 100 mL" labB="measured: 4.083 g per 100 mL" at={K9.g + 10} atB={K9.g + 30} brk={K9.just} brkText="+2 % of the label value" />
			<GTick x={RX + 10} y={600} at={K9.close} color={GREEN} s={1.6} />
			<AChip x={RX + 40} y={560} text="consistent with the label" size={38} color={GREEN} hand={false} at={K9.close} />
			<Note x={RX + 40} y={690} text="labels state a nominal value" size={30} color={INK_SOFT} at={K9.close + 20} />
			{void K9.label}{void K9.convert}{void INK}
		</Overlay>
	);
};

// ---------- 10. Two results, two meanings ----------
const S10 = 'two-results';
const K10 = cues(sc(S10), {ph: 'The pH says', grams: 'The grams per', fit: 'fit together', ka: 'with K a', pred: 'two point four six', why: 'Why not run', out: 'zero point zero one out', titr: 'The titration counts', as: 'as ethanoic acid'});
export const SceneTwoResults: React.FC = () => {
	const f = useCurrentFrame();
	const X = 96;
	const chk = 'Ka = 1.8 × 10^{−5}, c = 0.6799 mol/L → [H_3O^{+}] ≈ 3.5 × 10^{−3} mol/L → pH ≈ 2.46';
	const cw = mw(chk, 32, false, 700);
	const pw = mw('pH ≈ 2.46', 32, false, 700);
	const g = smooth(prog(f, K10.as, 14));
	return (
		<Overlay>
			<TaskLine text="Two results, two meanings" at={4} size={56} />
			<ResultRow x={X} y={300} text="how acidic: pH 2.46 (25 °C)" color={PHV} at={K10.ph} size={42} />
			<ResultRow x={X} y={400} text="how much: 4.083 g per 100 mL" color={AMB} at={K10.grams} size={42} />
			<Sx x={X + 26} y={452} text="titratable acidity, as ethanoic acid" size={36} color={AMB} weight={800} at={K10.as} />
			<g opacity={g}><Sx x={X + 26} y={500} text="titratable acidity: all acid that reacts up to the endpoint, counted as one named acid" size={26} color={INK_SOFT} weight={600} at={-1000} /></g>
			<DimG at={K10.out} to={0.3}>
				<Sx x={X} y={620} text={chk} size={32} color={INK} weight={700} at={K10.ka} />
				<RingAt cx={X + cw - pw / 2} cy={610} rx={pw / 2 + 8} ry={28} at={K10.pred + 6} />
				<GTick x={X + cw + 40} y={612} at={K10.pred + 16} color={TEAL} s={1.4} />
				<Note x={X} y={670} text="weak acid pH video" size={28} color={INK_SOFT} at={K10.ka + 20} />
			</DimG>
			<DimG at={K10.titr} to={0.4}>
				<Sx x={X} y={790} text="pH 2.45 → 0.70 mol/L   |   2.46 → 0.67   |   2.47 → 0.64" size={34} color={INK_SOFT} weight={700} at={K10.out} />
				<Note x={X} y={850} text="0.01 in pH ≈ 5 % in the amount" size={32} color={INK} at={K10.out + 20} />
			</DimG>
			<Note x={X} y={930} text="pH checks the titration; it can't replace it" size={38} color={TEAL} at={K10.out + 40} />
			{void K10.fit}{void K10.why}{void Fade}{void picW}
		</Overlay>
	);
};
