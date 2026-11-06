// M8 B06 scenes 6 to 10: effect, not cause (the chain lifted with its plates, the crossed chip, the trace-back arrow, the
// letters-only Punnett square), silicosis (dust drifting into the lungs, healthy to scarred), iron-deficiency anaemia
// (red cells with O₂ dots, live haemoglobin and oxygen bars, normal to pale), melanoma (division under control, the
// dividing ring, normal skin to melanoma, UV, group then trigger) and several causes at once (type 2 diabetes ringed by
// four contributing factors).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {P, RBC_C, sc} from './common';
import {
	Bars, CAN, CH, CHAIN_HEADS, Callout, Card, Chain, DivRing, DrawPath, DustFlow, ENV, Framed, GEN, GREYC, Glow, GroupTab, INK, MistakeX, NAVY, NUT, O2Dots, PicF, PicV, Pill, Punnett, Sx, TaskLine,
	Thumb, Wr, dustPts, plPt, plW, prog, smooth,
} from './parts';

// ---------- 6. Effect, not cause; inherited, not caught ----------
const K6 = cues(sc('effect-not-cause'), {notice: 'Notice', thick: 'Thick mucus', effect: 'effect near', notcause: 'not the cause', thecause: 'The cause is', gene: 'altered gene', protein: 'faulty protein', two: 'two altered', carriers: 'carriers', child: 'a child', runs: 'runs in families', inherited: 'inherited'});
export const SceneEffect: React.FC = () => {
	const f = useCurrentFrame();
	const Y = 200, H = 300, sw = (CH.w - 2 * CH.gap) / 3;
	const slots: [string[], typeof P.bact][] = [
		[['altered CFTR gene', '→ faulty protein'], P.protein],
		[['too few channels:', 'less Cl⁻ and water out'], P.cftrMissing],
		[['thick mucus,', 'repeated infections'], P.thick],
	];
	const pl = Math.max(0, Math.sin(Math.min(1, Math.max(0, (f - K6.gene) / 40)) * Math.PI));
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<TaskLine text="Effect, not cause; inherited, not caught" at={0} />
			<GroupTab lit={0} />
			{slots.map(([lines, p], i) => {
				const sx = CH.x + i * (sw + CH.gap);
				return (
					<g key={i}>
						{i === 0 && pl > 0.01 ? <rect x={sx - 10} y={Y - 10} width={sw + 20} height={H + 20} rx={26} fill="#f6d77a" opacity={0.55 * pl} /> : null}
						<rect x={sx} y={Y} width={sw} height={H} rx={20} fill="#fff6e2" stroke={i === 2 && prog(f, K6.effect, 12) > 0.5 ? '#c4432f' : NAVY} strokeWidth={4} />
						<Sx x={sx + 24} y={Y + 46} text={CHAIN_HEADS[i]} size={34} color={NAVY} hand weight={700} at={-1000} />
						<Thumb p={p} x={sx + sw - (i === 2 ? 300 : 190)} y={Y + 70} h={i === 2 ? 150 : 210} />
						{lines.map((ln, k) => <Sx key={k} x={sx + 24} y={Y + 130 + k * 44 + (i === 2 ? 100 : 0)} text={ln} size={33} color={INK} weight={800} at={-1000} />)}
						{i < 2 ? <path d={`M${sx + sw + 8},${Y + H / 2} L${sx + sw + CH.gap - 10},${Y + H / 2} M${sx + sw + CH.gap - 24},${Y + H / 2 - 12} L${sx + sw + CH.gap - 10},${Y + H / 2} L${sx + sw + CH.gap - 24},${Y + H / 2 + 12}`} stroke={NAVY} strokeWidth={5} fill="none" strokeLinecap="round" /> : null}
					</g>
				);
			})}
			<Pill x={CH.x + 2 * (sw + CH.gap) + 20} y={Y + H + 14} text="the effect" at={K6.effect} color="#c4432f" size={32} />
			<DrawPath d={`M${CH.x + 2 * (sw + CH.gap) + sw / 2},${Y + H + 90} Q 960 ${Y + H + 170} ${CH.x + sw / 2},${Y + H + 90}`} at={K6.thecause} dur={26} color={GEN} width={6} />
			<path d={`M${CH.x + sw / 2 + 22},${Y + H + 84} L${CH.x + sw / 2},${Y + H + 90} L${CH.x + sw / 2 + 14},${Y + H + 110}`} fill="none" stroke={GEN} strokeWidth={6} opacity={prog(f, K6.thecause + 24, 6)} />
			<Wr x={960} y={Y + H + 190} text="trace back to the gene" at={K6.thecause + 10} size={40} color={GEN} hand anchor="middle" />
			<MistakeX x={96} y={660} text="thick mucus causes CF" at={K6.thick} cross={K6.notcause} size={36} />
			<Card x={96} y={770} w={1000} h={270} color={GEN} title="Inherited, not caught" titleSize={34} />
			<Wr x={126} y={866} text="needs two altered copies:" at={-1000} size={38} color={INK} weight={800} />
			<Wr x={126} y={912} text="two healthy carriers can have a child with CF" at={K6.child} size={34} color={INK} weight={700} />
			<Wr x={126} y={966} text="inherited: passed on in genes," at={K6.inherited} size={38} color={GEN} weight={800} />
			<Wr x={126} y={1012} text="not by a pathogen" at={K6.inherited + 14} size={38} color={GEN} weight={800} />
			<Card x={1200} y={640} w={630} h={400} />
			<Sx x={1230} y={700} text="Ff × Ff" size={40} color={NAVY} weight={800} at={-1000} />
			<Punnett x={1300} y={770} cell={110} at={-1000} hi={K6.child} />
			<Sx x={1560} y={810} text="F = working" size={30} color={INK} weight={700} at={K6.carriers + 10} />
			<Sx x={1560} y={850} text="f = altered" size={30} color={INK} weight={700} at={K6.carriers + 16} />
			<Sx x={1560} y={1000} text="ff: CF" size={34} color="#b06a12" weight={800} at={K6.child} />
			<Pill x={1500} y={655} text="Module 5" at={K6.carriers} color={GREYC} size={26} />
			{void K6.runs}{void K6.protein}{void K6.notice}
		</svg>
	);
};

// ---------- 7. Environmental: silicosis ----------
const K7 = cues(sc('silicosis'), {env: 'An environmental', cutting: 'Cutting engineered', once: 'once used', fine: 'fine silica', deep: 'deep into', immune: 'Immune cells', break: "can't break", scar: 'scar', stiff: 'stiff', sil: 'silicosis', dust: 'The dust', nobody: 'nobody caught'});
const LU = {x: 140, y: 196, h: 660};
const DPTS = dustPts(5, 46, [[420, 650, 820, 1450], [1180, 650, 1600, 1450], [560, 520, 820, 760], [1180, 520, 1440, 760]]);
export const SceneSilicosis: React.FC = () => {
	const f = useCurrentFrame();
	const q = prog(f, K7.scar, 30);
	const [tx, ty0] = plPt(P.lungs, LU.x, LU.y, LU.h, [1000, 120]);
	const [, ty1] = plPt(P.lungs, LU.x, LU.y, LU.h, [1000, 700]);
	const pts = DPTS.map(p => plPt(P.lungs, LU.x, LU.y, LU.h, p));
	const RX = 860;
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<TaskLine text="Environmental: silicosis" at={0} />
			<GroupTab lit={1} litAt={K7.env} />
			<PicF p={P.lungs} x={LU.x} y={LU.y} h={LU.h} o={1 - q} />
			<PicF p={P.silic} x={LU.x} y={LU.y} h={LU.h} o={q} />
			<DustFlow tx={tx} ty0={ty0 - 60} ty1={ty1} pts={pts} at={K7.fine} every={3} o={1 - 0.6 * q} />
			<Wr x={RX} y={250} text="engineered stone: fine silica dust" at={K7.cutting} size={38} color={INK} weight={800} />
			<Wr x={RX} y={296} text="Australia banned new engineered stone benchtops, panels and slabs" at={K7.once} size={26} color="#3f3a33" weight={600} />
			<Wr x={RX} y={330} text="from 1 July 2024; old stone and other silica work still carry risk" at={K7.once + 14} size={26} color="#3f3a33" weight={600} />
			<Wr x={RX} y={410} text="fine dust reaches the air sacs" at={K7.deep} size={38} color={ENV} weight={800} />
			<Wr x={RX} y={480} text="immune cells (macrophages) take it up" at={K7.immune} size={36} color={INK} weight={700} />
			<Wr x={RX} y={526} text="but can't break silica down" at={K7.break} size={36} color={INK} weight={700} />
			<Callout from={plPt(P.lungs, LU.x, LU.y, LU.h, [560, 520])} x={RX} y={610} text="scar tissue (fibrosis)" at={K7.scar + 8} size={38} color="#8a4a24" />
			<Wr x={RX} y={680} text="stiff lungs: harder to breathe" at={K7.stiff} size={38} color={INK} weight={800} />
			<Framed x={RX} y={790} text="silicosis" at={K7.sil} size={46} color={ENV} />
			<Pill x={1260} y={748} text="Next: environmental exposure, in detail" at={K7.nobody} color={GREYC} size={26} />
			<Wr x={1260} y={826} text="caused by dust, not caught" at={K7.dust} size={34} color={ENV} hand />
			<Chain slots={[
				{lines: ['inhaled silica dust'], at: K7.fine, thumb: P.lungs},
				{lines: ['dust-damaged lung', 'tissue scars'], at: K7.scar, thumb: P.silic},
				{lines: ['stiff lungs,', 'harder to breathe'], at: K7.stiff},
			]} />
		</svg>
	);
};

// ---------- 8. Nutritional: iron-deficiency anaemia ----------
const K8 = cues(sc('iron-anaemia'), {too: 'Too little', diet: 'poor diet', nut: 'nutritional deficiency', iron: 'Iron is', hb: 'haemoglobin', carries: 'carries oxygen', less: 'makes less', smaller: 'smaller', paler: 'paler', blood: 'the blood carries', anaemia: 'anaemia', tired: 'tired', much: 'Too much', soon: 'coming up'});
const RB = {x: 140, y: 220, h: 600};
export const SceneIron: React.FC = () => {
	const f = useCurrentFrame();
	const q = prog(f, K8.paler, 30);
	const o2: [number, number][] = [];
	RBC_C.forEach(c => { [[-90, -40], [70, -60], [10, 70]].forEach(([dx, dy]) => o2.push(plPt(P.rbc, RB.x, RB.y, RB.h, [c[0] + dx * 1.8, c[1] + dy * 1.8]))); });
	const RX = 880;
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<TaskLine text="Nutritional: iron-deficiency anaemia" at={0} />
			<GroupTab lit={2} litAt={K8.nut} />
			<PicF p={P.rbc} x={RB.x} y={RB.y} h={RB.h} o={1 - q} />
			<PicF p={P.rbcLow} x={RB.x} y={RB.y} h={RB.h} o={q} />
			<O2Dots pts={o2} at={K8.carries} fadeIdx={[1, 3, 5, 7, 9, 11, 13, 14]} fadeAt={K8.blood} />
			<Callout from={plPt(P.rbc, RB.x, RB.y, RB.h, [1065, 1060])} x={RX} y={570} text="full of haemoglobin:" text2="carries oxygen" at={K8.hb} size={36} color="#a3271a" />
			<Card x={RX} y={196} w={950} h={315} title="Per red cell" titleSize={36} />
			<Bars x={RX + 30} y={300} w={620} rows={[
				{label: 'haemoglobin', from: K8.less, to: K8.less + 40, low: 0.5, color: '#b5302a'},
				{label: 'oxygen carried', from: K8.blood, to: K8.blood + 40, low: 0.5, color: '#d0661a'},
			]} />
			<Wr x={RX + 680} y={300} text="iron is part" at={K8.iron} size={32} color={NUT} hand />
			<Wr x={RX + 680} y={340} text="of haemoglobin" at={K8.iron + 10} size={32} color={NUT} hand />
			<Wr x={RX} y={700} text="smaller, paler red cells" at={K8.smaller} size={38} color={INK} weight={800} />
			<Framed x={RX} y={810} text="iron-deficiency anaemia" at={K8.anaemia} size={44} color={NUT} />
			<Wr x={RX + 520} y={700} text="tired, short of breath" at={K8.tired} size={36} color={INK} hand />
			<Pill x={RX + 610} y={752} text="too much can harm too" at={K8.much} color={NUT} size={28} />
			<Wr x={RX + 620} y={840} text="coming up: nutrition" at={K8.soon} size={28} color="#3f3a33" weight={600} />
			<Wr x={96} y={866} text="blood loss can also lower iron" at={K8.diet} size={28} color="#3f3a33" weight={600} />
			<Chain y={890} slots={[
				{lines: ['too little iron taken', 'in or absorbed'], at: K8.too + 10},
				{lines: ['less haemoglobin;', 'smaller, paler red cells'], at: K8.paler, thumb: P.rbcLow},
				{lines: ['less oxygen carried →', 'tired, short of breath'], at: K8.anaemia},
			]} />
		</svg>
	);
};

// ---------- 9. Cancer: melanoma ----------
const K9 = cues(sc('melanoma'), {own: 'its own group', defined: 'defined by', genes: 'Genes normally', when: 'When enough', keeps: 'keeps dividing', tumour: 'tumour', invade: 'invade', start: 'damage can start', mel: 'Melanoma', uv: 'ultraviolet', trigger: 'trigger', name: 'Name the group'});
const SK = {x: 120, y: 216, h: 610};
export const SceneMelanoma: React.FC = () => {
	const f = useCurrentFrame();
	const q = prog(f, K9.tumour, 30);
	const [dx, dy] = plPt(P.skin, SK.x, SK.y, SK.h, [800, 640]);
	const RX = 860;
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<TaskLine text="Cancer: melanoma" at={0} />
			<GroupTab lit={3} litAt={K9.own} second={{i: 1, at: K9.trigger, label: 'trigger'}} />
			<PicF p={P.skin} x={SK.x} y={SK.y} h={SK.h} o={1 - q} />
			<PicF p={P.melanoma} x={SK.x} y={SK.y} h={SK.h} o={q} />
			<DivRing x={dx} y={dy} at={K9.keeps} out={K9.tumour + 30} every={12} gens={5} />
			<PicF p={P.dividing} x={RX} y={210} h={190} />
			<Wr x={RX + 220} y={260} text="cancer: defined by what" at={K9.defined} size={36} color={CAN} weight={800} />
			<Wr x={RX + 220} y={304} text="the cells do" at={K9.defined + 14} size={36} color={CAN} weight={800} />
			<Wr x={RX + 220} y={370} text="genes control when a cell divides" at={K9.genes} size={30} color={INK} weight={700} />
			<PicV p={P.uv} x={1590} y={420} h={250} at={K9.mel} />
			<Callout from={plPt(P.melanoma, SK.x, SK.y, SK.h, [820, 560])} x={RX} y={480} text="cells dividing out of" text2="control, invading" at={K9.tumour + 6} size={36} color="#4a2a1a" />
			<Wr x={RX} y={600} text="melanoma: a skin cancer" at={K9.mel} size={36} color={INK} weight={800} />
			<Wr x={RX} y={650} text="UV damages DNA in skin cells" at={K9.uv} size={34} color={INK} weight={700} />
			<Wr x={RX} y={700} text="mutations in body cells: not inherited" at={K9.uv + 30} size={28} color="#3f3a33" weight={600} />
			<Framed x={RX} y={810} text="group: cancer; trigger: UV (environmental)" at={K9.name} size={36} color={CAN} />
			<Chain slots={[
				{lines: ['UV damages', 'control genes'], at: K9.uv, thumb: P.uv},
				{lines: ['cells divide', 'without stopping'], at: K9.keeps, thumb: P.dividing},
				{lines: ['tumour invades', 'the skin'], at: K9.invade, thumb: P.melanoma},
			]} />
			{void K9.when}{void K9.start}{void Glow}
		</svg>
	);
};

// ---------- 10. Several causes at once ----------
const K10 = cues(sc('multifactorial'), {real: 'Real diseases', several: 'several causes', t2: 'Type 2', genes: 'inherited genes', diet: 'diet', act: 'activity', age: 'age', all: 'all pushing', multi: 'multifactorial', classify: 'classify', name: 'name its', explain: 'then explain'});
export const SceneMulti: React.FC = () => {
	const f = useCurrentFrame();
	const PH = 290, pw = plW(P.pancreas, PH), PX = 960 - pw / 2, PY = 300;
	const C: [number, number] = [960, PY + PH / 2];
	const fac: [string, string, number, [number, number]][] = [
		['genes', GEN, K10.genes, [330, 260]],
		['diet', NUT, K10.diet, [1590, 260]],
		['activity', GREYC, K10.act, [330, 560]],
		['age', GREYC, K10.age, [1590, 560]],
	];
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<TaskLine text="Several causes at once" at={0} />
			<GroupTab all={-1000} />
			<PicF p={P.pancreas} x={PX} y={PY} h={PH} />
			<Sx x={960} y={PY + PH + 50} text="type 2 diabetes" size={44} color={INK} anchor="middle" hand weight={700} at={K10.t2} />
			{fac.map(([t, c, at, [x, y]], i) => {
				const ax = x < 960 ? x + 120 : x - 120;
				const bx = x < 960 ? C[0] - pw * 0.42 : C[0] + pw * 0.42;
				return (
					<g key={t}>
						<Pill x={x} y={y - 30} text={t} at={at - 4} color={c} size={40} anchor="middle" solid={i < 2} />
						<DrawPath d={`M${ax},${y} L${bx},${C[1] + (y < 400 ? -40 : 40)}`} at={at} dur={16} color={c === GREYC ? '#5f584c' : c} width={6} />
					</g>
				);
			})}
			<Wr x={960} y={710} text="all pushing the same way: each raises the risk" at={K10.all} size={34} color={INK} hand anchor="middle" />
			<Card x={300} y={735} w={1320} h={120} at={K10.multi - 6} color={NAVY} />
			<Wr x={330} y={790} text="multifactorial: several causes acting together" at={K10.multi} size={40} color={NAVY} weight={800} />
			<Wr x={330} y={838} text="classify by the main factor, then give its mechanism" at={K10.name} size={34} color={INK} weight={700} />
			<Pill x={1500} y={150} text="risk factors: coming up" at={K10.classify} color={GREYC} size={26} />
			<Chain y={880} headPulse={K10.explain} />
			{void f}{void K10.real}{void K10.several}{void smooth}{void CAN}{void ENV}
		</svg>
	);
};
