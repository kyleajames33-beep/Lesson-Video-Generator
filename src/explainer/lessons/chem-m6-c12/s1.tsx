// M6 C12 scenes 1 to 5: the meter can't count it (vinegar, meter, lens); the idea and the apparatus (burette, pipette,
// conical flask, tile); equivalence, endpoint and why it counts every molecule (the C09 lens); standard solutions and
// primary standards; titres you can trust (table, concordance strip, mean).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {cues} from '../../cues';
import {Heading, kf, sc} from './common';
import {FLASK, VINEGAR} from './assets';
import {
	AChip, ACID_INK, Arrow, BuretteFill, ConcStrip, Counter, CritCard, DimG, EqLine, FallDrop, Fade, FullMeter, H3O, HA, INK, INK_SOFT, IonSite, KeptChip, LensFrame, NAVY, Note, OpGlow, Overlay, P,
	PicH, PipettePlate, PlateAt, Rig, RingAt, Sx, TEAL, TaskLine, TitreTable, VBracket, WLine, burAt, burPt, eSpan, eq, fitSize, levelY, meterBeaker, picW, rigFlask,
} from './parts';
import {ETH_SITES} from '../chem-m6-c09/s1';

const LENS_BG = '#eef6fb';
export const STRIP = (at: number) => eq(['CH_3COOH(aq)', '+', 'H_2O(l)', '<=>', 'H_3O^{+}(aq)', '+', 'CH_3COO^{-}(aq)'], at);

// ---------- 1. Hook ----------
const S1 = 'hook';
const K1 = cues(sc(S1), {label: 'The label on', how: 'How could you', meter: 'A pH meter', weak: 'is weak so', senses: 'only senses the', ka: 'through K a', reading: 'a reading of', need: 'You need a', every: 'counts every', titration: 'a titration', so: 'So how does'});
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const VX = 150, VY = 300, VH = 560;
	const vw = picW(VINEGAR, VH);
	const MX = 1080, MY = 450, MH = 380;
	const mb = meterBeaker(MX, MY, MH);
	const L = {cx: mb.cx + 10, cy: 280, r: 160};
	const U = (u: number, v: number): [number, number] => [L.cx + u * L.r, L.cy + v * L.r];
	const lit = prog(f, K1.every, 14);
	return (
		<>
			<Heading text="How much acid is in it?" at={K1.titration} size={60} />
			<Overlay>
				<PicH p={VINEGAR} x={VX} y={VY} h={VH} />
				<Sx x={VX + vw + 30} y={VY + 280} text="white vinegar:" size={36} color={INK} weight={700} at={K1.label} />
				<Sx x={VX + vw + 30} y={VY + 330} text="5% acidity" size={36} color={ACID_INK} weight={800} at={K1.label + 10} />
				<FullMeter x={MX} y={MY} h={MH} at={K1.meter} out={K1.titration} read={() => '2.4'} pulse={K1.senses} />
				<Sx x={mb.cx} y={mb.bottom + 44} text="vinegar" size={30} color={INK} anchor="middle" weight={700} at={K1.meter} out={K1.titration} />
				<Fade at={K1.weak} out={K1.titration}>
					<line x1={mb.cx} y1={MY + 120} x2={L.cx} y2={L.cy + L.r} stroke={INK_SOFT} strokeWidth={3} strokeDasharray="8 8" />
				</Fade>
				<LensFrame cx={L.cx} cy={L.cy} r={L.r} at={K1.weak}>
					<rect x={L.cx - L.r} y={L.cy - L.r} width={2 * L.r} height={2 * L.r} fill={LENS_BG} />
					{ETH_SITES.map(([u, v, a], i) => {
						const [x, y] = U(u * 0.9, v * 0.9);
						return i === 4 ? <IonSite key={i} x={x} y={y} ion={-100} meet={null} from={[0, 0]} s={1.0} ang={a} /> : (
							<g key={i}>
								{lit > 0.01 ? <circle cx={x} cy={y} r={20} fill="#f6d77a" opacity={0.7 * lit} /> : null}
								<HA x={x} y={y} s={1.05} a={a} />
							</g>
						);
					})}
					{(() => { const [x, y] = U(-0.1 * 0.9, -0.1 * 0.9); return <circle cx={x + 18} cy={y - 10} r={34} fill="none" stroke={TEAL} strokeWidth={4} opacity={prog(f, K1.senses, 12) * (1 - prog(f, K1.ka, 12))} />; })()}
				</LensFrame>
				<Note x={L.cx - L.r - 20} y={L.cy - 40} text="the meter senses only these" size={32} color={TEAL} anchor="end" at={K1.senses} out={K1.ka} />
				<Note x={MX - 20} y={mb.bottom + 110} text="pH 2.35 to 2.45 → c ≈ 0.70 to 1.1 mol/L (via Ka)" size={32} color={INK_SOFT} at={K1.ka} out={K1.need} />
				{void K1.how}{void K1.reading}{void K1.so}{void H3O}
			</Overlay>
		</>
	);
};

// ---------- 2. The idea and the apparatus ----------
const S2 = 'idea-apparatus';
const K2 = cues(sc(S2), {idea: 'The idea is', standard: 'standard solution and', measure: 'measure precisely', pipette: 'A pipette delivers', aliquot: 'called an aliquot', conical: 'a conical flask', indicator: 'drops of indicator', burette: 'A burette adds', titrant: 'the titrant', until: 'until the acid', titre: 'the titre'});
export const RIG2 = {tx: 980, ty: 610, bh: 600, fh: 270};
export const SceneApparatus: React.FC = () => {
	const f = useCurrentFrame();
	const R = RIG2;
	const fl = rigFlask(R.tx, R.ty, R.fh);
	const level = (fr: number) => kf(fr, [[K2.standard - 10, 52], [K2.standard + 30, 0], [K2.burette + 10, 0], [K2.titre - 6, 18.6]], true);
	const fill = (fr: number) => prog(fr, K2.standard - 10, 10);
	const b = burAt(R.tx, R.ty, R.bh);
	const [tubeX] = burPt(b.x, b.y, R.bh, 1172, 0);
	const yZero = burPt(b.x, b.y, R.bh, 0, levelY(0))[1], yT = burPt(b.x, b.y, R.bh, 0, levelY(18.6))[1];
	const pin = smooth01(prog(f, K2.pipette - 10, 30)) * (1 - prog(f, K2.indicator, 20));
	const ptip: [number, number] = [fl.x + fl.w * 0.42, fl.y + 30];
	const vol = level(f);
	return (
		<Overlay>
			<Rig tx={R.tx} ty={R.ty} bh={R.bh} fh={R.fh} level={level} fill={fill} at={0} clearAt={K2.aliquot} />
			<g opacity={pin}><PipettePlate tipX={ptip[0] - 200 * (1 - pin)} tipY={ptip[1] - 120 * (1 - pin)} h={430} rot={-34} /></g>
			{[0, 1, 2, 3, 4, 5].map(i => <FallDrop key={'p' + i} x={ptip[0]} y0={ptip[1]} y1={fl.y + fl.h * 0.6} at={K2.pipette + 34 + i * 12} />)}
			{[0, 1, 2].map(i => <FallDrop key={i} x={fl.x + fl.w * 0.52} y0={fl.y - 60} y1={fl.y + fl.h * 0.6} at={K2.indicator + 8 + i * 14} color="#e9e4f5" />)}
			<Note x={tubeX + 74} y={yZero + 20} text="NaOH: 0.5000 mol/L (known exactly)" size={36} color={NAVY} at={K2.standard + 10} />
			<Note x={fl.x - 30} y={fl.y + fl.h * 0.55} text="aliquot: 10.00 mL vinegar" size={36} color={ACID_INK} anchor="end" at={K2.aliquot} />
			<Counter x={tubeX + 200} y={yZero + 90} text={`${Math.max(0, Math.min(18.6, vol)).toFixed(2)} mL`} at={K2.burette + 4} color={NAVY} size={32} />
			<Fade at={K2.titre}>
				<VBracket x={tubeX + 22} y1={yZero} y2={yT} at={K2.titre} color={NAVY} />
				<Note x={tubeX + 64} y={(yZero + yT) / 2 + 120} text="titre = volume delivered" size={36} color={NAVY} at={K2.titre + 6} />
			</Fade>
			{void K2.idea}{void K2.measure}{void K2.conical}{void K2.titrant}{void K2.until}
		</Overlay>
	);
};
const smooth01 = (u: number) => u * u * (3 - 2 * u);

// ---------- 3. Equivalence, endpoint, and why it counts every molecule ----------
const S3 = 'equivalence-endpoint';
const K3 = cues(sc(S3), {eqp: 'equivalence point', endpoint: 'endpoint when', close: 'very close to', pink: 'faint pink', video: 'weak acid heat video', counted: 'fully counted', hyd: 'Hydroxide removes', right: 'right until', every: 'every molecule', much: 'how much acid'});
export const RIG3 = {tx: 1560, ty: 470, bh: 400, fh: 200};
export const SceneEndpoint: React.FC = () => {
	const f = useCurrentFrame();
	const R = RIG3;
	const L = {cx: 560, cy: 650, r: 270};
	const U = (u: number, v: number): [number, number] => [L.cx + u * L.r, L.cy + v * L.r];
	const order = [1, 5, 0, 7, 2, 6, 3, 8];
	const span = (K3.every - 18) - (K3.hyd + 40);
	const ionAt = (i: number) => (i === 4 ? -100 : K3.hyd + 40 + (order.indexOf(i) / (order.length - 1)) * span);
	const meetAt = (i: number) => (i === 4 ? K3.hyd + 26 : ionAt(i) + 52);
	const left = ETH_SITES.filter((_, i) => i !== 4 && f < ionAt(i)).length;
	const strip = STRIP(K3.hyd - 10);
	const ss = fitSize(strip, 1100, 44);
	const arr = eSpan(strip, 3, ss, 96);
	return (
		<Overlay>
			<Rig tx={R.tx} ty={R.ty} bh={R.bh} fh={R.fh} level={() => 18.6} at={-100} clearAt={-100} pinkAt={K3.endpoint + 10} />
			<Note x={96} y={290} text="equivalence point: amounts match the equation" size={38} color={INK} at={K3.eqp} out={K3.video} />
			<Note x={96} y={360} text="endpoint: the colour change (very close to the equivalence point)" size={38} color={'#b8457a'} at={K3.endpoint} out={K3.video} />
			<EqLine items={strip} x={96} y={250} size={ss} />
			<OpGlow items={strip} i={3} size={ss} x={96} y={250} at={K3.right} len={60} color={TEAL} />
			<Note x={arr.cx} y={310} text="Module 5: Le Chatelier" size={28} color={INK_SOFT} anchor="middle" at={K3.right} out={K3.every + 30} />
			<LensFrame cx={L.cx} cy={L.cy} r={L.r} at={K3.video}>
				<rect x={L.cx - L.r} y={L.cy - L.r} width={2 * L.r} height={2 * L.r} fill={LENS_BG} />
				{ETH_SITES.map(([u, v, a], i) => { const [x, y] = U(u * 0.92, v * 0.92); return <IonSite key={i} x={x} y={y} ion={ionAt(i)} meet={meetAt(i)} from={[L.cx - L.r - 30, y]} s={1.6} ang={a} />; })}
			</LensFrame>
			<Note x={L.cx + L.r + 30} y={L.cy - L.r + 40} text="weak acid heat video" size={28} color={INK_SOFT} at={K3.video} out={K3.hyd} />
			<Counter x={L.cx} y={L.cy + L.r + 18} text={`whole molecules left: ${left}`} at={K3.counted} size={30} color={left === 0 ? TEAL : INK} />
			<AChip x={900} y={850} text="titre counts moles of acid, weak or strong" size={38} color={TEAL} hand={false} at={K3.much} />
			{void K3.close}{void K3.pink}
		</Overlay>
	);
};

// ---------- 4. Standard solutions and primary standards ----------
const S4 = 'primary-standard';
const K4 = cues(sc(S4), {rests: 'Everything rests on', primary: 'primary standard a', pure: 'very pure', stable: 'stable in air', water: "doesn't take up water", mass: 'its mass gives', anhyd: 'Anhydrous sodium carbonate', naoh: 'Sodium hydroxide fails', soaks: 'soaks up water', reacts: 'reacts with carbon', std: 'standardised titrated'});
export const SceneStandard: React.FC = () => {
	const FX = 180, FY = 250, FH = 560;
	const fw = picW(FLASK, FH);
	const BH = 380, BTX = 1560, BTY = 880;
	const b = burAt(BTX, BTY, BH);
	return (
		<Overlay>
			<PicH p={FLASK} x={FX} y={FY} h={FH} />
			<Sx x={FX + fw / 2} y={FY + FH * 0.78} text="Na_2CO_3" size={30} color={NAVY} anchor="middle" weight={800} at={4} />
			<Sx x={FX + fw / 2} y={FY + FH * 0.78 + 36} text="standard" size={26} color={NAVY} anchor="middle" weight={700} at={4} />
			<DimG at={K4.naoh} to={0.3}>
				<CritCard x={520} y={250} w={640} title="primary standard" at={K4.primary} rows={[
					{t: 'very pure', at: K4.pure - 4, mark: 'tick', markAt: K4.pure + 10},
					{t: 'stable in air', at: K4.stable - 4, mark: 'tick', markAt: K4.stable + 10},
					{t: 'no water taken up while weighing', at: K4.water - 4, mark: 'tick', markAt: K4.mass},
				]} size={32} />
				<Note x={540} y={630} text="Na_2CO_3: dried in an oven first" size={32} color={INK_SOFT} at={K4.anhyd} out={K4.naoh + 40} />
			</DimG>
			<DimG at={K4.std} to={0.3}>
				<CritCard x={1220} y={250} w={600} title="NaOH(s)" color={'#9a948a'} at={K4.naoh} rows={[
					{t: 'soaks up water', at: K4.soaks - 4, mark: 'cross', markAt: K4.soaks + 12},
					{t: 'reacts with CO_2', at: K4.reacts - 4, mark: 'cross', markAt: K4.reacts + 16},
				]} size={32} />
			</DimG>
			<Fade at={K4.std}>
				<BuretteFill x={b.x} y={b.y} h={BH} level={() => 0} />
			</Fade>
			<Arrow x1={FX + fw + 30} y1={FY + FH * 0.7} x2={b.x - 10} y2={BTY - 140} at={K4.std + 6} color={NAVY} width={6} />
			<Note x={1440} y={985} text="NaOH: concentration found by titration" size={38} color={NAVY} anchor="middle" at={K4.std + 16} />
			{void K4.rests}
		</Overlay>
	);
};

// ---------- 5. Titres you can trust ----------
const S5 = 'concordant-titres';
const K5 = cues(sc(S5), {back: 'Back to the', rough: 'A rough first', careful: 'The careful titres', t1: 'eighteen point six zero', t2: 'eighteen point five five', t3: ['eighteen point five five', 2], t4: 'eighteen point nine zero', called: 'called concordant', within: 'zero point one zero', left: 'left out', mean: 'eighteen point five seven'});
export const TASK = 'Find c(CH_3COOH) in the vinegar';
export const TT = {x: 120, y: 340};
export const SceneConcordant: React.FC = () => {
	const ring = K5.within + 40;
	return (
		<Overlay>
			<TaskLine text={TASK} at={K5.back} />
			<Note x={96} y={240} text="10.00 mL vinegar; 0.5000 mol/L NaOH" size={34} color={INK_SOFT} at={K5.back + 30} />
			<DimG at={K5.mean} to={0.55}>
				<TitreTable x={TT.x} y={TT.y} at={K5.rough - 10} rows={[
					{label: 'rough', v: '19.0', at: K5.rough, grey: true, tag: 'not used'},
					{label: '1', v: '18.60', at: K5.t1, ring},
					{label: '2', v: '18.55', at: K5.t2, ring: ring + 6},
					{label: '3', v: '18.55', at: K5.t3, ring: ring + 12},
					{label: '4', v: '18.90', at: K5.t4, pulse: K5.t4 + 10, cross: K5.left},
				]} />
			</DimG>
			<DimG at={K5.mean - 10} to={0.3}>
				<ConcStrip x={820} y={560} w={900} lo={18.5} hi={18.95} at={K5.within - 20} ticks={[18.5, 18.6, 18.7, 18.8, 18.9]} dots={[
					{v: 18.6, at: K5.within - 10}, {v: 18.55, at: K5.within - 6}, {v: 18.55, at: K5.within - 2, stack: 1}, {v: 18.9, at: K5.within + 2, grey: K5.left},
				]} bracket={{a: 18.55, b: 18.65, at: K5.within + 10, from: 18.75, text: '0.10 mL'}} />
				<Note x={820} y={680} text="concordant: agree within 0.10 mL" size={34} color={TEAL} at={K5.within + 30} />
			</DimG>
			<WLine x={96} y={780} size={40} dim={K5.mean + 50} items={P('(18.60 + 18.55 + 18.55) ÷ 3', K5.mean - 30, {t: '= 18.57 mL', color: TEAL}, K5.mean)} />
			<KeptChip x={96} y={840} text="mean titre = 18.57 mL" at={K5.mean + 50} color={NAVY} size={40} />
			{void K5.careful}{void K5.called}{void RingAt}{void EqLine}{void H3O}{void PlateAt}
		</Overlay>
	);
};
