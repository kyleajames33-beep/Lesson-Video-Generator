// M8 C05 scenes 7 to 12: one look isn't enough (the clear sample bottle with invisible ions; the three empty columns),
// the parameter board one column per scene (physical: temperature and turbidity; chemical: pH, dissolved oxygen,
// conductivity, nitrate and phosphate by colourimetry or ion chromatography; biological: E. coli and algal cell counts),
// each with a shows / can't show pair, the worked read of the three-site table (one column at a time; the ranking; a
// snapshot, not a history) and why monitor (the guideline depends on use; above and below a source; what a treatment
// plant must remove; checking the response).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {prog} from '../../kit';
import {BOTTLE1, COLM, CPLATE, DOM, KIT, LAKE, MICRO, NB, OUTLET, PHM, THERMO, TURB, sc} from './common';
import {
	AChip, ALG, Arrow, ShrinkAt, BIOL, BottleOutline, CHEM, Column, Dam, DimG, Fade, Field, GREYX, HTag, INK, INK_SOFT, MistakeX, MoonGlyph, NAVY, NIT, Note, O2_INK, PCol, PHOS, PHYS,
	Peaks, PicV, RED8, Sx, Tap, TaskLine, TreatBox, WLine, clamp01, natPt, picWp, smooth, vis,
} from './parts';
import type {PDef} from './common';

const SUM = {
	phys: ['temperature', 'turbidity'],
	chem: ['pH, dissolved oxygen', 'conductivity', 'nitrate, phosphate'],
	bio: ['E. coli', 'algal cell counts'],
};
const Pl: React.FC<{p: PDef; x: number; y: number; h: number; at: number}> = ({p, x, y, h, at}) => <PicV p={p} x={x} y={y} h={h} at={at} />;

// ---------- 7. One look isn't enough ----------
const K7 = cues(sc('one-look'), {so: 'So how', not: 'Not by', clear: 'Clear water', nutrients: 'dissolved nutrients', salts: 'salts', ph: 'a pH', says: 'says nothing', set: 'set of', read: 'read together', chemists: 'Chemists group', phys: 'physical', chem: 'chemical', bio: 'biological'});
export const SceneOneLook: React.FC = () => {
	const f = useCurrentFrame();
	const BX = 96, BY = 230, BH = 440;
	const P = (nx: number, ny: number) => natPt(BOTTLE1, BX, BY, BH, nx, ny);
	const toks: [number, number, string][] = [[1080, 1520, NIT], [1250, 1600, PHOS], [1380, 1500, '#8a8f96'], [1150, 1660, '#8a8f96'], [1320, 1690, NIT]];
	const cols = [{t: 'Physical', c: PHYS, at: K7.phys, hint: 'how the water is'}, {t: 'Chemical', c: CHEM, at: K7.chem, hint: "what's dissolved"}, {t: 'Biological', c: BIOL, at: K7.bio, hint: 'what lives in it'}];
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<TaskLine text="One look isn't enough" at={2} size={52} />
			<PicV p={BOTTLE1} x={BX} y={BY} h={BH} />
			{toks.map(([nx, ny, c], i) => { const [x, y] = P(nx, ny); return <circle key={i} cx={x + Math.sin(f * 0.05 + i) * 3} cy={y} r={9} fill={c} stroke="#fffdf8" strokeWidth={2} opacity={vis(f, K7.nutrients + i * 6)} />; })}
			<HTag x={BX} y={730} text="nitrate, phosphate, salts, metals" size={34} color={NIT} at={K7.nutrients} />
			<MistakeX x={BX} y={770} text="clear water is clean water" at={K7.not - 10} cross={K7.not + 14} note="dissolved substances are invisible" size={34} />
			<AChip x={BX} y={930} text="pH 7" size={36} color={INK} hand={false} at={K7.ph} />
			<HTag x={BX + 150} y={970} text="says nothing about O_2" size={34} color={O2_INK} at={K7.says} />
			{cols.map((c, i) => (
				<PCol key={c.t} x={640 + i * 410} w={380} title={c.t} color={c.c} at={c.at} y={220} h={700}>
					<Sx x={640 + i * 410 + 28} y={350} text={c.hint} size={34} color={c.c} hand weight={700} at={c.at + 6} />
					<PicV p={[THERMO, PHM, MICRO][i]} x={640 + i * 410 + 190 - picWp([THERMO, PHM, MICRO][i], [120, 200, 300][i]) / 2} y={[560, 480, 420][i]} h={[120, 200, 300][i]} />
					<Sx x={640 + i * 410 + 190} y={790} text={['measures temperature', 'measures pH and ions', 'counts living cells'][i]} size={30} color={GREYX} anchor="middle" weight={600} at={-1000} />
				</PCol>
			))}
			<Note x={640} y={990} text="water quality: a set of measurements, read together" size={38} color={INK} at={K7.set} />
			<AChip x={640} y={1010} text="site L06: read the set together" size={26} color={GREYX} hand={false} at={K7.read + 30} />
			{void K7.so}{void K7.clear}{void K7.salts}{void K7.chemists}
		</svg>
	);
};

// ---------- 8. Physical ----------
const K8 = cues(sc('physical'), {phys: 'Physical parameters', temp: 'Temperature', warm: 'warm water', less: 'less oxygen', turb: 'Turbidity', cloud: 'cloudiness', susp: 'suspended', cloudy: 'Cloudy water', blocks: 'blocks light', soil: 'soil', but: 'but turbidity', germs: 'germs'});
export const ScenePhysical: React.FC = () => {
	const f = useCurrentFrame();
	const lp = prog(f, K8.blocks, 30);
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<TaskLine text="Physical parameters" at={2} size={52} />
			<PCol x={96} w={1004} title="Physical" color={PHYS} at={-1000}>
				<Pl p={THERMO} x={126} y={320} h={110} at={K8.temp - 6} />
				<Sx x={350} y={370} text="temperature: warm water holds less O_2" size={38} color={INK} weight={700} at={K8.warm} />
				<Fade at={K8.less}>
					<Sx x={350} y={418} text="O_2 saturation (fresh water)" size={28} color={GREYX} weight={600} at={-1000} />
					<Sx x={350} y={466} text="20 °C" size={30} color={INK} weight={700} at={-1000} />
					<rect x={450} y={440} width={9.1 * 55 * smooth(prog(f, K8.less, 20))} height={32} rx={8} fill="#7fb8dc" />
					<Sx x={960} y={466} text={`about 9.1${NB}mg/L`} size={30} color={O2_INK} weight={700} at={K8.less + 14} />
					<Sx x={350} y={516} text="30 °C" size={30} color={RED8} weight={700} at={-1000} />
					<rect x={450} y={490} width={7.6 * 55 * smooth(prog(f, K8.less + 6, 20))} height={32} rx={8} fill="#e9a07a" />
					<Sx x={880} y={516} text={`about 7.6${NB}mg/L`} size={30} color={RED8} weight={700} at={K8.less + 20} />
				</Fade>
				<Pl p={TURB} x={126} y={570} h={220} at={K8.turb - 6} />
				<Sx x={350} y={620} text="turbidity: cloudiness from" size={38} color={INK} weight={700} at={K8.cloud} />
				<Sx x={350} y={666} text="suspended particles" size={38} color={INK} weight={700} at={K8.susp} />
				<Fade at={K8.blocks - 4}>
					<rect x={350} y={700} width={320} height={80} rx={10} fill="#b49a6a" opacity={0.45} />
					<line x1={360} y1={712} x2={360 + 300 * lp} y2={712 + 60 * lp} stroke="#f2c94c" strokeWidth={8} strokeLinecap="round" opacity={1 - 0.8 * lp} />
					<HTag x={690} y={756} text="blocks light; soil washed in" size={32} color="#8a6d3b" at={K8.blocks} />
				</Fade>
				<Sx x={130} y={850} text="shows: particles, runoff, less light" size={34} color={INK} weight={600} at={K8.cloudy} />
				<Sx x={130} y={906} text="can't show: dissolved toxins or microbes" size={40} color={RED8} weight={800} at={K8.but} />
			</PCol>
			<PCol x={1130} w={340} title="Chemical" color={CHEM} dim summary={SUM.chem} />
			<PCol x={1500} w={340} title="Biological" color={BIOL} dim summary={SUM.bio} />
			{void K8.phys}{void K8.soil}{void K8.germs}
		</svg>
	);
};

// ---------- 9. Chemical ----------
const K9 = cues(sc('chemical'), {chem: 'Chemical parameters', ph: 'pH', dox: 'dissolved oxygen', cond: 'conductivity', rises: 'rises with', quick: 'quick check', which: 'which ions', nit: 'For nitrate', reagent: 'a reagent', coloured: 'coloured compound', standards: 'against standards', last: 'last video', ion: 'ion chromatography', separates: 'separates', out: 'out'});
export const SceneChemical: React.FC = () => (
	<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
		<TaskLine text="Chemical parameters" at={2} size={52} />
		<PCol x={96} w={340} title="Physical" color={PHYS} dim summary={SUM.phys} />
		<PCol x={466} w={1004} title="Chemical" color={CHEM} at={-1000}>
			<Pl p={PHM} x={496} y={290} h={100} at={K9.ph - 6} />
			<Sx x={640} y={350} text="pH: acidity" size={38} color={INK} weight={700} at={K9.ph} />
			<Pl p={DOM} x={920} y={280} h={120} at={K9.dox - 6} />
			<Sx x={1010} y={334} text="dissolved oxygen" size={38} color={INK} weight={700} at={K9.dox} />
			<Sx x={1010} y={374} text="(measured next video)" size={28} color={GREYX} weight={600} at={K9.dox + 10} />
			<Pl p={KIT} x={496} y={420} h={130} at={K9.cond - 6} />
			<Sx x={650} y={460} text="conductivity: rises with dissolved ions" size={36} color={INK} weight={700} at={K9.rises} />
			<Sx x={650} y={506} text="shows: total dissolved ion load, fast" size={32} color={INK} weight={600} at={K9.quick} />
			<Sx x={650} y={552} text="can't show: which ions" size={40} color={RED8} weight={800} at={K9.which} />
			<Pl p={COLM} x={496} y={590} h={130} at={K9.nit - 6} />
			<Sx x={650} y={636} text="nitrate, phosphate: a reagent makes a" size={34} color={INK} weight={700} at={K9.reagent} />
			<Sx x={650} y={678} text="coloured compound, read against standards" size={34} color={INK} weight={700} at={K9.standards} />
			<AChip x={650} y={700} text="phosphate: molybdenum blue" size={28} color={GREYX} hand={false} at={K9.coloured} />
			<AChip x={1080} y={700} text="c04: inside the range" size={28} color={GREYX} hand={false} at={K9.last} />
			<Column x={530} y={780} h={140} at={K9.ion - 6} sep={K9.separates} />
			<Peaks x={590} y={790} w={340} h={130} at={K9.separates + 10} size={28} />
			<Sx x={970} y={830} text="ion chromatography: a column" size={34} color={CHEM} weight={700} at={K9.ion} />
			<Sx x={970} y={872} text="separates the ions, then each" size={34} color={CHEM} weight={700} at={K9.separates} />
			<Sx x={970} y={914} text="is measured as it comes out" size={34} color={CHEM} weight={700} at={K9.out - 20} />
		</PCol>
		<PCol x={1500} w={340} title="Biological" color={BIOL} dim summary={SUM.bio} />
		{void K9.chem}
	</svg>
);

// ---------- 10. Biological ----------
const K10 = cues(sc('biological'), {bio: 'Biological parameters', ecoli: 'E. coli', gut: 'gut bacteria', faecal: 'faecal contamination', sewage: 'sewage', counting: 'Counting algal', micro: 'microscope', shows: 'shows a', bank: 'bank'});
export const SceneBiological: React.FC = () => {
	const f = useCurrentFrame();
	const lit = prog(f, K10.bank, 12);
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<TaskLine text="Biological parameters" at={2} size={52} />
			<g opacity={1}>
				<PCol x={96} w={340} title="Physical" color={PHYS} dim={lit < 0.5} summary={SUM.phys} />
				<PCol x={466} w={340} title="Chemical" color={CHEM} dim={lit < 0.5} summary={SUM.chem} />
			</g>
			<PCol x={836} w={1004} title="Biological" color={BIOL} at={-1000}>
				<Pl p={CPLATE} x={866} y={300} h={220} at={K10.ecoli - 6} />
				<Sx x={1120} y={350} text="E. coli: gut bacteria" size={40} color={INK} weight={700} at={K10.ecoli} />
				<Sx x={1120} y={398} text="sign of faecal contamination" size={36} color={INK} weight={700} at={K10.faecal} />
				<Sx x={1120} y={442} text="(sewage or animal waste)" size={32} color={INK_SOFT} weight={600} at={K10.sewage} />
				<MistakeX x={1120} y={470} text="total coliforms = faecal" at={K10.sewage + 20} cross={K10.sewage + 40} note="E. coli is the faecal indicator" size={32} />
				<Pl p={MICRO} x={866} y={640} h={290} at={K10.counting - 10} />
				<Field cx={1200} cy={790} r={120} at={K10.micro} />
				<Sx x={1350} y={760} text="algal cell counts:" size={40} color={INK} weight={700} at={K10.counting} />
				<Sx x={1350} y={810} text="a bloom starting early" size={40} color={ALG} weight={800} at={K10.shows} />
			</PCol>
			{lit > 0.01 ? <rect x={90} y={214} width={1756} height={752} rx={26} fill="none" stroke={NAVY} strokeWidth={4} opacity={lit * 0.6} /> : null}
		</svg>
	);
};

// ---------- 11. Worked read ----------
const K11 = cues(sc('worked-read'), {lets: "Let's read", three: 'Three sites', same: 'same day', read: 'Read one', nit: 'Nitrate and', rise: 'rise', nine: 'about nine', dox: 'Dissolved oxygen', falls: 'falls', obs: 'the observations', clear: 'clear water', scum: 'then scum', dead: 'dead fish', so: 'So C', follow: 'follow-up', what: 'What the', night: 'night'});
const TX = 96, TW = [150, 300, 320, 330, 644], TY = 220, HH = 110, RH = 110;
const colX = (i: number) => TX + TW.slice(0, i).reduce((a, b) => a + b, 0);
const ROWS: [string, string, string, string, string, string][] = [['A', '0.35', '0.02', '8.4', 'clear water,', 'no visible bloom'], ['B', '1.40', '0.18', '6.1', 'green surface scum', 'beginning to form'], ['C', '1.75', '0.25', '3.9', 'dead fish observed', 'near shore']];
export const SceneWorkedRead: React.FC = () => {
	const f = useCurrentFrame();
	const hl = (c: number[], a: number, b: number) => {
		const v = vis(f, a, b, 12);
		return v > 0.01 ? c.map(i => <rect key={i} x={colX(i) + 4} y={TY + 4} width={TW[i] - 8} height={HH + 3 * RH - 8} rx={12} fill="#f6d77a" opacity={0.35 * v} />) : null;
	};
	const heads = [['site'], ['nitrate (mg/L,', 'as NO_3^{−})'], ['phosphate (mg/L,', 'as PO_4^{3−})'], ['dissolved oxygen', '(mg/L)'], ['observation']];
	const lakes = [LAKE.clear, LAKE.bloom, LAKE.crash];
	const LW = (LAKE.clear.box[2] / LAKE.clear.box[3]) * 90;
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<TaskLine text="Which site shows the strongest signs of an oxygen problem?" at={2} size={46} />
			<Sx x={1840} y={205} text="site L09 data" size={28} color={GREYX} anchor="end" hand at={K11.three} />
			<rect x={TX} y={TY} width={1744} height={HH + 3 * RH} rx={16} fill="#fffdf8" stroke="rgba(60,45,20,0.3)" strokeWidth={2.5} opacity={prog(f, K11.three - 10, 12)} />
			{hl([1, 2], K11.nit, K11.dox)}
			{hl([3], K11.dox, K11.obs)}
			{hl([4], K11.obs, K11.so)}
			{heads.map((h, i) => h.map((t, k) => <Sx key={i + '-' + k} x={colX(i) + 20} y={TY + 46 + k * 38} text={t} size={30} color={INK} weight={700} at={K11.three - 10} />))}
			{[0, 1, 2].map(r => <line key={r} x1={TX} x2={TX + 1744} y1={TY + HH + r * RH} y2={TY + HH + r * RH} stroke="rgba(60,45,20,0.3)" strokeWidth={2} opacity={prog(f, K11.three, 12)} />)}
			{[1, 2, 3, 4].map(i => <line key={i} x1={colX(i)} x2={colX(i)} y1={TY} y2={TY + HH + 3 * RH} stroke="rgba(60,45,20,0.3)" strokeWidth={2} opacity={prog(f, K11.three, 12)} />)}
			{ROWS.map((row, r) => {
				const y = TY + HH + r * RH;
				const at = K11.three + r * 8;
				return (
					<g key={r}>
						<Sx x={colX(0) + TW[0] / 2} y={y + 70} text={row[0]} size={44} color={INK} anchor="middle" weight={800} at={at} />
						{[1, 2, 3].map(c => <Sx key={c} x={colX(c) + TW[c] / 2} y={y + 70} text={row[c]} size={44} color={c === 3 ? O2_INK : c === 1 ? NIT : PHOS} anchor="middle" weight={700} at={at} />)}
						<Sx x={colX(4) + 20} y={y + 48} text={row[4]} size={30} color={INK} weight={600} at={at} />
						<Sx x={colX(4) + 20} y={y + 86} text={row[5]} size={30} color={INK} weight={600} at={at} />
						<PicV p={lakes[r]} x={TX + 1744 - LW - 14} y={y + 10} h={90} at={[K11.clear, K11.scum, K11.dead][r]} />
					</g>
				);
			})}
			<Fade at={K11.rise}>
				<Arrow x1={colX(1) + 40} y1={TY + HH + 30} x2={colX(1) + 40} y2={TY + HH + 3 * RH - 20} at={K11.rise} color={NIT} width={5} />
				<Arrow x1={colX(2) + 40} y1={TY + HH + 30} x2={colX(2) + 40} y2={TY + HH + 3 * RH - 20} at={K11.rise + 6} color={PHOS} width={5} />
			</Fade>
			<Fade at={K11.falls}>
				<Arrow x1={colX(3) + 40} y1={TY + HH + 30} x2={colX(3) + 40} y2={TY + HH + 3 * RH - 20} at={K11.falls} color={O2_INK} width={5} />
			</Fade>
			<Note x={96} y={730} text="read one column at a time" size={40} color={NAVY} at={K11.read} out={K11.nine - 10} />
			<Fade at={K11.read} out={K11.so - 6}>
				<rect x={1000} y={710} width={840} height={320} rx={20} fill="#fffdf8" stroke={GREYX} strokeWidth={3} strokeDasharray="12 10" />
				<Sx x={1030} y={760} text="which site?" size={40} color={GREYX} hand weight={700} at={-1000} />
				<path d="M1040,880 Q1110,860 1160,870" fill="none" stroke="#7fb0d6" strokeWidth={12} strokeLinecap="round" />
				<ellipse cx={1460} cy={880} rx={300} ry={105} fill="#bcdcef" stroke="#3f7fb0" strokeWidth={4} />
				{([[1220, 880, 'A'], [1460, 860, 'B'], [1680, 890, 'C']] as [number, number, string][]).map(([x, y, t]) => (
					<g key={t}>
						<circle cx={x} cy={y} r={22} fill={NAVY} stroke="#fffdf8" strokeWidth={4} />
						<Sx x={x} y={y + 11} text={t} size={30} color="#fffdf8" anchor="middle" weight={800} at={-1000} />
					</g>
				))}
				<Sx x={1460} y={1012} text="one lake, three sites, one day" size={30} color={INK_SOFT} anchor="middle" weight={600} at={-1000} />
			</Fade>
			<DimG at={K11.so} to={0.5}>
				<WLine x={96} y={780} size={42} items={[{t: 'phosphate B ÷ A = 0.18 ÷ 0.02 =', at: K11.nine - 10}, {t: '9', at: K11.nine, color: PHOS}]} />
				<WLine x={96} y={860} size={42} items={[{t: 'dissolved oxygen:', at: K11.falls - 10}, {t: `8.4 → 3.9${NB}mg/L`, at: K11.falls, color: O2_INK}]} />
			</DimG>
			<Sx x={96} y={930} text="one day, three places:" size={34} color={INK_SOFT} hand weight={700} at={K11.so + 20} />
			<Sx x={96} y={976} text="a snapshot, not a history" size={34} color={INK_SOFT} hand weight={700} at={K11.so + 20} />
			<Fade at={K11.so - 6}>
				<rect x={1000} y={710} width={840} height={320} rx={20} fill="#fffdf8" stroke={RED8} strokeWidth={4} />
				<Sx x={1030} y={780} text="C: strongest signs of an oxygen problem" size={36} color={RED8} weight={800} at={K11.so} />
				<Sx x={1030} y={836} text="B: needs follow-up" size={36} color={INK} weight={700} at={K11.follow - 6} />
				<Sx x={1030} y={888} text="A: least affected" size={32} color={INK_SOFT} weight={700} at={K11.follow + 6} />
				<MoonGlyph x={1050} y={962} at={K11.night} r={16} />
				<Sx x={1080} y={972} text="one daytime sample: night-time O_2 unknown" size={30} color={NAVY} weight={600} at={K11.night} />
			</Fade>
			{void K11.lets}{void K11.same}{void K11.read}{void K11.what}{void clamp01}
		</svg>
	);
};

// ---------- 12. Why monitor? ----------
const K12 = cues(sc('why-monitor'), {so: 'So why', number: 'A number', guideline: 'guideline for', drinking: 'For drinking', fifty: 'fifty', babies: 'protect babies', lower: 'far lower', river: 'river', sampling: 'Sampling above', finds: 'finds where', fix: 'the fix', monitoring: 'Monitoring also', treat: 'treatment plant', remove: 'to remove', algae: 'like algae', nitrogen: 'or nitrogen', after: 'And after', only: 'only measurement', recovered: 'recovered'});
export const SceneWhy: React.FC = () => {
	const f = useCurrentFrame();
	const BX0 = 330, BW = 530;
	const OX = 140, OY = 770, OH = 230;
	const steps: [number, number][] = [[0, 0.32], [0.3, 0.32], [0.45, 0.3], [0.5, 0.18], [0.65, 0.12], [1, 0.1]];
	const tp = prog(f, K12.after, 40);
	const GX = 1440, GY = 790, GW = 380, GH = 170;
	const tline = steps.filter(([u]) => u <= tp + 0.001).map(([u, v]) => `${GX + u * GW},${GY + GH - (v / 0.35) * GH}`).join(' L');
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<TaskLine text="Why monitor?" at={2} size={52} />
			<ShrinkAt cx={96} cy={200} k={0.62} at={K12.sampling - 10}>
				<rect x={96} y={200} width={820} height={540} rx={20} fill="#fffdf8" stroke="rgba(60,45,20,0.22)" strokeWidth={3} opacity={prog(f, 4, 12)} />
				<rect x={950} y={200} width={890} height={540} rx={20} fill="#fffdf8" stroke="rgba(60,45,20,0.22)" strokeWidth={3} opacity={prog(f, 4, 12)} />
				<Sx x={126} y={258} text="drinking water" size={46} color={NAVY} hand weight={700} at={4} />
				<g transform="translate(720,610) scale(1.8) translate(-720,-610)"><Tap x={720} y={610} at={4} /></g>
				<rect x={BX0} y={340} width={(50 / 60) * BW} height={44} rx={8} fill={NIT} opacity={0.85} />
				<line x1={BX0 + (50 / 60) * BW} x2={BX0 + (50 / 60) * BW} y1={310} y2={410} stroke={RED8} strokeWidth={4} strokeDasharray="8 6" />
				<Sx x={BX0} y={420} text="nitrate" size={28} color={NIT} weight={700} at={-1000} />
				<Sx x={BX0 + (50 / 60) * BW} y={300} text={`50${NB}mg/L`} size={30} color={RED8} anchor="middle" weight={800} at={-1000} />
				<Sx x={126} y={470} text={`ADWG health value: 50${NB}mg/L as NO_3^{−}`} size={34} color={INK} weight={700} at={K12.fifty} />
				<Sx x={126} y={520} text="(protects bottle-fed babies)" size={32} color={INK_SOFT} weight={600} at={K12.babies} />
				<Sx x={980} y={258} text="river ecosystem" size={46} color={ALG} hand weight={700} at={4} />
				<PicV p={LAKE.bloom} x={980} y={290} h={250} at={4} />
				<rect x={1450} y={340} width={50 * smooth(prog(f, K12.lower, 20))} height={44} rx={8} fill={NIT} opacity={0.85} />
				<Sx x={1450} y={450} text="far lower levels" size={36} color={ALG} weight={700} at={K12.lower} />
				<Sx x={1450} y={494} text="can feed a bloom" size={36} color={ALG} weight={700} at={K12.lower} />
				<Sx x={980} y={700} text={'ANZG ecosystem trigger values; check the basis: as NO_3^{−} or as N'} size={28} color={GREYX} weight={600} at={K12.river} />
			</ShrinkAt>
			<Note x={96} y={820} text="a number means something only against the guideline for that water's use" size={40} color={INK} at={K12.number} out={K12.sampling - 10} />
			<PicV p={OUTLET} x={OX} y={OY} h={OH} at={K12.sampling - 6} />
			<BottleOutline x={OX - 40} y={OY + 150} at={K12.sampling} label="above" color={NAVY} s={0.8} />
			<BottleOutline x={OX + 300} y={OY + 170} at={K12.sampling + 12} label="below" color={NAVY} s={0.8} />
			{[0, 1, 2, 3].map(i => <circle key={i} cx={OX + 285 + (i % 2) * 22} cy={OY + 150 + Math.floor(i / 2) * 22} r={8} fill={i % 2 ? PHOS : NIT} opacity={vis(f, K12.finds + i * 5)} />)}
			<circle cx={OX - 40} cy={OY + 160} r={8} fill={NIT} opacity={vis(f, K12.finds)} />
			<Sx x={96} y={740} text="find the source → choose the fix" size={38} color={NAVY} hand weight={700} at={K12.finds} />
			<TreatBox x={700} y={790} w={500} h={190} at={K12.treat - 6} />
			<Dam x={700} y={690} at={K12.algae - 10} />
			<Arrow x1={800} y1={758} x2={830} y2={800} at={K12.algae} color={ALG} width={5} />
			<Sx x={880} y={740} text="algae, toxins at the intake" size={30} color={ALG} hand weight={700} at={K12.algae} />
			<Arrow x1={OX + 360} y1={OY + 120} x2={695} y2={880} at={K12.nitrogen} color={NIT} width={5} />
			<Sx x={480} y={1040} text="N and P in sewage" size={30} color={NIT} hand weight={700} at={K12.nitrogen} />
			<Sx x={950} y={1032} text="what to remove" size={40} color={INK} anchor="middle" hand weight={700} at={K12.remove} />
			<Fade at={K12.after - 6}>
				<line x1={GX} y1={GY + GH} x2={GX + GW} y2={GY + GH} stroke={INK} strokeWidth={3} />
				<line x1={GX} y1={GY} x2={GX} y2={GY + GH} stroke={INK} strokeWidth={3} />
				{tline ? <path d={'M' + tline} fill="none" stroke={PHOS} strokeWidth={5} /> : null}
				<line x1={GX + 0.38 * GW} x2={GX + 0.38 * GW} y1={GY} y2={GY + GH} stroke={RED8} strokeWidth={3} strokeDasharray="6 6" />
				<Sx x={GX + 0.38 * GW + 8} y={GY + 26} text="fix" size={30} color={RED8} hand weight={700} at={-1000} />
				<Sx x={GX} y={GY - 12} text="phosphate over months" size={28} color={INK_SOFT} weight={600} at={-1000} />
			</Fade>
			<Sx x={GX} y={GY + GH + 50} text="check the response" size={38} color={PHOS} hand weight={700} at={K12.only} />
			{void K12.so}{void K12.guideline}{void K12.drinking}{void K12.fix}{void K12.monitoring}{void K12.recovered}{void picWp}
		</svg>
	);
};
