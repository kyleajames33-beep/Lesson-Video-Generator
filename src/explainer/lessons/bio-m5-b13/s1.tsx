// B13 scenes 1 to 4: the hook (UK Biobank as a filling tube grid), why scale matters (pooled sites, then the
// sample-bounce simulation at 200 and 200,000 people), the sickle cell puzzle (expected decline against the pooled
// map) and three kinds of evidence (cards docking beside the map, which then shrinks into the third card).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {
	AMBER, AMBER_INK, BounceStrip, CARD, DrawPath, EDGE, Fade, GreyTag, HBar, Heading, INK, INK_SOFT, MistakeChip, Overlay, PL13, PSym, Panel, PlateB, QMark,
	Ring, S, SiteBadge, Stream, Sx, TEAL, Ticker, TubeChip, TubeGrid, lerp, prog, rng, studyResults, vis,
} from './shared';
import {BANDS, BandLegend, World, proj, zoneD} from './world';
import type {LL, MapBox} from './world';

// ---------- 1. Hook ----------
const K1 = cues(S('hook'), {
	shared: 'UK Biobank is a shared research project', rec: 'began recruiting in 2006', half: 'Half a million volunteers', aged: 'aged 40 to 69', link: 'link their health records',
	each: 'Each sample was tested', places: 'around 850,000 places', approved: 'approved researchers', fam: 'one family, or one hospital', trust: 'how far can we trust it',
});
const G1 = {x: 790, y: 340, cols: 44, rows: 9, dx: 23, dy: 40};
const BADGES1: [number, number][] = [[730, 330], [730, 640], [1828, 330], [1828, 640], [1290, 716]];
const RecordCard: React.FC<{x: number; y: number; o?: number}> = ({x, y, o = 1}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		<rect x={x} y={y} width={300} height={130} rx={16} fill={CARD} stroke={EDGE} strokeWidth={3} />
		<path d={`M${x + 50},${y + 82} C${x + 18},${y + 58} ${x + 26},${y + 30} ${x + 50},${y + 46} C${x + 74},${y + 30} ${x + 82},${y + 58} ${x + 50},${y + 82} Z`} fill="#d0574a" stroke="#8a2f25" strokeWidth={2.5} />
		<g transform={`translate(${x + 118},${y + 58}) rotate(-30)`}>
			<rect x={-30} y={-12} width={60} height={24} rx={12} fill="#fffdf8" stroke={INK_SOFT} strokeWidth={2.5} />
			<rect x={0} y={-12} width={30} height={24} rx={12} fill="#4f9fc9" />
		</g>
		{[0, 1, 2].map(i => <line key={i} x1={x + 170} y1={y + 40 + i * 24} x2={x + 276} y2={y + 40 + i * 24} stroke={INK_SOFT} strokeWidth={3} strokeLinecap="round" opacity={0.6} />)}
		<text x={x + 150} y={y + 120} textAnchor="middle" style={{fontFamily: 'Caveat', fontWeight: 700, fontSize: 26}} fill={INK_SOFT}>health record (no name)</text>
	</g>
));
export const SceneHookB13: React.FC = () => {
	const f = useCurrentFrame();
	const gp = prog(f, K1.half, 120);
	const chipA: [number, number] = [G1.x + 40 * G1.dx, G1.y + 8 * G1.dy];
	const chipB: [number, number] = [G1.x, G1.y + 8 * G1.dy];
	const famO = prog(f, K1.fam, 12);
	return (
		<>
			<Heading text="What big shared data can show" at={K1.trust - 20} size={60} />
			<Overlay>
				<PlateB p={PL13.rack} cx={330} cy={420} w={400} o={prog(f, 0, 14) * (1 - 0.6 * famO)} />
				<Sx x={330} y={640} text="UK Biobank, recruiting from 2006" size={30} color={INK} hand anchor="middle" at={K1.rec} />
				{/* the volunteers as a tube grid */}
				<TubeGrid x={G1.x} y={G1.y} cols={G1.cols} rows={G1.rows} dx={G1.dx} dy={G1.dy} p={gp} s={0.78} />
				<Ticker x={G1.x - 10} y={G1.y - 56} to={500000} a={K1.half} b={K1.half + 120} size={50} />
				<Sx x={G1.x + 230} y={G1.y - 56} text="volunteers" size={38} color={INK} hand at={K1.half + 10} />
				<GreyTag x={G1.x + 420} y={G1.y - 92} text="aged 40 to 69" at={K1.aged} size={24} />
				<GreyTag x={G1.x + 640} y={G1.y - 92} text="1 chip = many people" at={K1.half + 40} size={24} />
				{/* link to a health record */}
				<g opacity={prog(f, K1.link, 12)}>
					<circle cx={chipA[0]} cy={chipA[1]} r={18} fill="none" stroke={AMBER} strokeWidth={4} />
					<DrawPath d={`M${chipA[0]},${chipA[1] + 20} C${chipA[0]},${chipA[1] + 70} ${1640},${730} ${1640},${770}`} at={K1.link} dur={16} color={AMBER_INK} width={3.5} />
				</g>
				<RecordCard x={1500} y={770} o={prog(f, K1.link + 12, 12)} />
				{/* one sample opens into a DNA strip */}
				<g opacity={prog(f, K1.each, 12)}>
					<circle cx={chipB[0]} cy={chipB[1]} r={18} fill="none" stroke={AMBER} strokeWidth={4} />
					<DrawPath d={`M${chipB[0]},${chipB[1] + 20} L${chipB[0]},${818}`} at={K1.each} dur={12} color={AMBER_INK} width={3.5} />
					<DrawPath d={`M${chipB[0]},${830} L${1400},${830}`} at={K1.each + 8} dur={26} color="#6e2a63" width={10} />
				</g>
				{Array.from({length: 92}, (_, i) => {
					const x = chipB[0] + 8 + i * 6.6;
					const o = prog(f, K1.places + i * 0.5, 6);
					return o > 0.01 ? <line key={i} x1={x} y1={814} x2={x} y2={846} stroke={i % 7 === 3 ? AMBER : '#b88aae'} strokeWidth={i % 7 === 3 ? 3.5 : 2} opacity={o} /> : null;
				})}
				<Sx x={chipB[0]} y={900} text="about 850,000 variants measured per sample" size={34} color={AMBER_INK} hand at={K1.places + 20} />
				<GreyTag x={chipB[0]} y={918} text="B12: reading DNA" at={K1.places + 30} size={24} />
				{/* approved researchers */}
				{BADGES1.map((b, i) => (
					<g key={i}>
						<SiteBadge x={b[0]} y={b[1]} r={28} o={prog(f, K1.approved + i * 5, 12)} />
						<Stream a={b} b={[G1.x + (G1.cols * G1.dx) / 2, G1.y + (G1.rows * G1.dy) / 2 - 20]} at={K1.approved + 10 + i * 5} n={2} o={0.8} />
					</g>
				))}
				<Sx x={1290} y={790} text="shared with approved researchers" size={32} color={TEAL} hand anchor="middle" at={K1.approved + 14} />
				{/* one family, one hospital, for scale */}
				<g opacity={famO}>
					<Sx x={130} y={712} text="one family" size={30} color={INK} hand />
					{([[300, 700, 'M', false], [380, 700, 'F', false], [270, 780, 'M', false], [340, 780, 'F', true], [410, 780, 'M', false]] as [number, number, 'M' | 'F', boolean][]).map((q, i) => <PSym key={i} x={q[0]} y={q[1]} sex={q[2]} aff={q[3]} sz={34} />)}
					<line x1={317} y1={700} x2={363} y2={700} stroke={INK} strokeWidth={3} />
					<line x1={340} y1={700} x2={340} y2={745} stroke={INK} strokeWidth={3} />
					<line x1={270} y1={745} x2={410} y2={745} stroke={INK} strokeWidth={3} />
					<Sx x={130} y={850} text="one hospital: 200 people" size={30} color={INK} hand />
				</g>
				{Array.from({length: 200}, (_, i) => (famO > 0.01 ? <TubeChip key={i} x={140 + (i % 25) * 14} y={882 + Math.floor(i / 25) * 16} s={0.36} cap={i % 3} o={famO} /> : null))}
				<Ring cx={1285} cy={500} rx={540} ry={205} at={K1.fam + 30} seed={4} />
			</Overlay>
		</>
	);
};

// ---------- 2. Why scale matters ----------
const K2 = cues(S('why-scale'), {
	called: 'called a large-scale collaborative project', pool: 'many researchers and sites pool their data', scale: 'Scale matters', nudge: 'only nudge risk a little',
	small: 'In a small study', lost: 'gets lost in the noise', hundreds: 'With hundreds of thousands of people', stands: 'stands out from chance',
	inference: 'stronger inference', meaning: 'meaning a conclusion drawn', never: 'never certain',
});
/** True risks used for the illustration: 20% against 22% (a two-point difference). */
const RISK = {non: 0.2, car: 0.22};
const SMALL = studyResults(11, 14, RISK.non, RISK.car, 100);
const LARGE = studyResults(12, 10, RISK.non, RISK.car, 100000);
(() => {
	if (!SMALL.some(v => v < 0)) throw new Error('B13 check: some small studies should fall below zero');
	if (!LARGE.every(v => v > 1 && v < 3)) throw new Error('B13 check: large studies should cluster near +2');
})();
export const SceneScaleB13: React.FC = () => {
	const f = useCurrentFrame();
	const aO = vis(f, 0, K2.small - 6);
	const bars = [180, 380, 580, 780, 980];
	return (
		<>
			<Heading text="Why scale matters" at={K2.scale} size={56} />
			<Overlay>
				{/* pooled sites */}
				<g opacity={aO}>
					{bars.map((x, i) => (
						<g key={i}>
							<SiteBadge x={x} y={260} r={30} o={prog(f, K2.pool + i * 5, 12)} />
							<Stream a={[x, 292]} b={[580, 400]} at={K2.pool + 8 + i * 5} n={3} tubes />
						</g>
					))}
					<rect x={260} y={400} width={640} height={40} rx={12} fill={CARD} stroke={TEAL} strokeWidth={3} opacity={prog(f, K2.pool + 10, 12)} />
					<rect x={262} y={402} width={636 * prog(f, K2.pool + 20, 60)} height={36} rx={11} fill={TEAL} opacity={0.35} />
					<Sx x={580} y={480} text="one pooled data set" size={30} color={TEAL} hand anchor="middle" at={K2.pool + 30} />
					<Panel x={1080} y={230} w={740} h={160} o={prog(f, K2.called, 12)} stroke={AMBER} />
					<Sx x={1110} y={295} text="large-scale collaborative project" size={44} color={INK} hand at={K2.called} />
					<Sx x={1110} y={355} text="many groups pooling data" size={32} color={INK_SOFT} weight={600} at={K2.pool} />
				</g>
				{/* a small real difference */}
				<g opacity={prog(f, K2.nudge, 12)}>
					<Panel x={1180} y={450} w={640} h={160} />
					<HBar x={1380} y={474} w={380} v={RISK.car * 100} max={30} label="carriers" color={AMBER} p={prog(f, K2.nudge + 6, 20)} />
					<HBar x={1380} y={516} w={380} v={RISK.non * 100} max={30} label="non-carriers" color="#c9b99a" p={prog(f, K2.nudge + 10, 20)} />
					<Sx x={1210} y={590} text="a small real difference (illustrative)" size={28} color={AMBER_INK} hand />
				</g>
				{/* small studies */}
				<Sx x={160} y={420} text="200 people per study" size={34} color={INK} weight={800} at={K2.small} />
				<BounceStrip x={160} y={640} w={960} vals={SMALL} at={K2.small + 8} gap={5} o={prog(f, K2.small, 12)} r={10} truth={2} />
				<Sx x={1180} y={690} text="each dot: one small study's result" size={30} color={INK} hand at={K2.small + 20} />
				<Sx x={1180} y={735} text="200 people: chance swamps it" size={34} color={AMBER_INK} hand at={K2.lost} />
				{/* large studies */}
				<Sx x={160} y={716} text="200,000 people per study" size={34} color={INK} weight={800} at={K2.hundreds} />
				<BounceStrip x={160} y={930} w={960} vals={LARGE} at={K2.hundreds + 8} gap={5} o={prog(f, K2.hundreds, 12)} r={8} truth={2} color="#7fb0b5" axisLabel="" />
				<Sx x={1180} y={880} text="each dot: one big study's result" size={30} color={INK} hand at={K2.hundreds + 20} />
				<Sx x={1180} y={930} text="200,000 people: the real difference shows" size={34} color={TEAL} hand at={K2.stands} />
				<GreyTag x={1180} y={958} text="difference in risk, percentage points; teal line: the true difference" at={K2.hundreds + 30} size={22} />
				{/* inference, never certain */}
				<Fade at={K2.inference}>
					<Panel x={1080} y={200} w={740} h={150} stroke={AMBER} />
					<Sx x={1110} y={262} text="inference" size={46} color={INK} hand />
				</Fade>
				<Sx x={1110} y={320} text="a conclusion drawn from evidence" size={32} color={INK_SOFT} weight={600} at={K2.meaning} />
				<MistakeChip x={1240} y={372} text="big data = certainty" at={K2.never - 8} cross={K2.never + 8} size={30} />
			</Overlay>
		</>
	);
};

// ---------- 3. The sickle cell puzzle ----------
const K3 = cues(S('sickle-puzzle'), {
	pool: "Pooling data isn't new", classic: "Here's the classic case", allele: 'The sickle cell allele causes', two: 'inherits two copies', rare: 'should become rare',
	sel: 'natural selection removes it', combined: 'combined into one map', africa: 'large parts of Africa', med: 'Mediterranean', mid: 'the Middle East', india: 'and India',
	cant: "can't explain", dig: 'dig deeper',
});
export const M3: MapBox = {x: 640, y: 220, w: 1200};
/** Point in polygon (lon, lat). */
const inPoly = (pt: LL, poly: LL[]) => {
	let c = false;
	for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
		const [xi, yi] = poly[i], [xj, yj] = poly[j];
		if ((yi > pt[1]) !== (yj > pt[1]) && pt[0] < ((xj - xi) * (pt[1] - yi)) / (yj - yi) + xi) c = !c;
	}
	return c;
};
/** Survey dots: seeded points inside the outer bands (each a pooled survey site). */
export const SURVEYS: LL[] = (() => {
	const r = rng(41);
	const out: LL[] = [];
	const outer = BANDS.filter(b => b.band === 1);
	let guard = 0;
	while (out.length < 64 && guard++ < 5000) {
		const b = outer[Math.floor(r() * outer.length)];
		const lons = b.pts.map(p => p[0]), lats = b.pts.map(p => p[1]);
		const pt: LL = [Math.min(...lons) + r() * (Math.max(...lons) - Math.min(...lons)), Math.min(...lats) + r() * (Math.max(...lats) - Math.min(...lats))];
		if (inPoly(pt, b.pts)) out.push(pt);
	}
	return out;
})();
const bandAt = (b: (typeof BANDS)[number], at: number, f: number) => prog(f, at + (b.region === 'africa' ? 0 : 14) + b.band * 6, 18);
/** Expected decline line (allele frequency against generations, illustrative). */
const Decline: React.FC<{x: number; y: number; w: number; h: number; at: number}> = ({x, y, w, h, at}) => {
	const d = Array.from({length: 31}, (_, i) => {
		const t = i / 30;
		const q = 0.12 / (1 + 0.12 * t * 12);
		return `${i ? 'L' : 'M'}${x + t * w},${y + h - (q / 0.13) * h}`;
	}).join(' ');
	return (
		<Fade at={at}>
			<line x1={x} y1={y + h} x2={x + w} y2={y + h} stroke={INK} strokeWidth={3} />
			<line x1={x} y1={y} x2={x} y2={y + h} stroke={INK} strokeWidth={3} />
			<text x={x - 14} y={y + h / 2} textAnchor="middle" transform={`rotate(-90 ${x - 14} ${y + h / 2})`} style={{fontFamily: 'Inter Tight', fontWeight: 600, fontSize: 22}} fill={INK_SOFT}>allele frequency</text>
			<text x={x + w / 2} y={y + h + 32} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 600, fontSize: 22}} fill={INK_SOFT}>generations</text>
			<DrawPath d={d} at={at + 6} dur={40} color={AMBER_INK} width={5} />
		</Fade>
	);
};
export const SceneSickleB13: React.FC = () => {
	const f = useCurrentFrame();
	const P = proj(M3);
	const glowAf = prog(f, K3.africa, 12) * (1 - prog(f, K3.med, 20) * 0.6);
	return (
		<>
			<Heading text="The sickle cell puzzle" at={K3.classic} size={56} />
			<Overlay>
				<PlateB p={PL13.sickle} cx={300} cy={270} w={340} o={prog(f, K3.allele, 14)} />
				<Sx x={300} y={390} text="two copies: sickle cell anaemia" size={30} color={INK} hand anchor="middle" at={K3.two} />
				<Decline x={150} y={470} w={330} h={200} at={K3.rare} />
				<Sx x={150} y={760} text="expected: selection removes it" size={32} color={AMBER_INK} hand at={K3.rare + 20} />
				<GreyTag x={150} y={780} text="Year 11: natural selection" at={K3.sel} size={24} />
				{/* the pooled map */}
				<World M={M3} id="m3" outline={prog(f, 0, 40)} band={(b) => bandAt(b, K3.combined + 40, f)} glow={(b) => (b.region === 'africa' ? glowAf : 0)} />
				{SURVEYS.map((pt, i) => {
					const [x, y] = P(pt);
					const t = prog(f, K3.combined + (i % 16) * 2.5, 10);
					const out = 1 - prog(f, K3.combined + 60, 20) * 0.7;
					return t > 0.01 ? <circle key={i} cx={x} cy={lerp(y - 60, y, t)} r={5} fill={INK} opacity={t * out} /> : null;
				})}
				{BANDS.filter(b => b.region !== 'africa' && b.band === 1).map((b, i) => {
					const at = b.region === 'med' ? K3.med : b.region === 'mideast' ? K3.mid : K3.india;
					return f >= at ? <g key={i} opacity={1 - prog(f, at + 50, 14)}><DrawPath d={zoneD(M3, b.pts)} at={at} dur={14} color={AMBER} width={5} /></g> : null;
				})}
				<BandLegend x={M3.x + 20} y={760} o={prog(f, K3.combined + 50, 14)} size={24} />
				<GreyTag x={M3.x + 20} y={830} text="redrawn from Piel et al. 2010, bands simplified" at={K3.combined + 60} size={22} />
				{/* the puzzle */}
				<QMark x={560} y={600} size={110} o={prog(f, K3.cant, 12)} />
				<Fade at={K3.cant + 10}>
					<Panel x={150} y={890} w={1100} h={80} stroke={AMBER} />
					<Sx x={180} y={944} text="a pattern a simple model can't explain: dig deeper" size={36} color={INK} hand />
				</Fade>
			</Overlay>
		</>
	);
};

// ---------- 4. Three kinds of evidence ----------
const K4 = cues(S('three-streams'), {
	three: 'combine three kinds of evidence', fam: 'Family trees show', unaff: 'unaffected parents can have', rec: "so it's recessive", carriers: 'carriers are healthy',
	dna: 'DNA data show what changed', base: 'one base in the haemoglobin gene', freq: 'And frequency data show', common: "where it's common", nosingle: 'No single kind',
	concl: 'The conclusion comes from', agree: 'all three agreeing',
});
const CARDS4 = [{y: 190, title: 'family trees: how it is inherited', cant: 'not how common'}, {y: 420, title: 'DNA data: what changed', cant: 'not its effect in a population'}, {y: 650, title: 'frequency data: where it is common', cant: 'not why'}];
const CX4 = 1060, CW4 = 780, CH4 = 214;
/** B7's recall tiles: one codon, before and after. */
const Codon: React.FC<{x: number; y: number; t: string; hot?: number; o?: number}> = ({x, y, t, hot = -1, o = 1}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		{t.split('').map((c, i) => (
			<g key={i}>
				<rect x={x + i * 46} y={y} width={40} height={48} rx={8} fill={i === hot ? AMBER : CARD} stroke={i === hot ? AMBER_INK : INK_SOFT} strokeWidth={2.5} />
				<text x={x + i * 46 + 20} y={y + 35} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 30}} fill={INK}>{c}</text>
			</g>
		))}
	</g>
));
export const SceneStreamsB13: React.FC = () => {
	const f = useCurrentFrame();
	const t = prog(f, K4.freq, 30);
	const M0: MapBox = {x: 80, y: 260, w: 900};
	const M1: MapBox = {x: CX4 + 440, y: 712, w: 300};
	const M: MapBox = {x: lerp(M0.x, M1.x, t), y: lerp(M0.y, M1.y, t), w: lerp(M0.w, M1.w, t)};
	const agreeP = prog(f, K4.agree, 20);
	return (
		<>
			<Heading text="Three kinds of evidence" at={K4.three} size={56} />
			<Overlay>
				<BandLegend x={80} y={680} o={1 - prog(f, K4.concl - 12, 10)} size={22} />
				{CARDS4.map((c, i) => {
					const at = [K4.fam, K4.dna, K4.freq][i];
					const sx = lerp(1960, CX4, prog(f, at, 20));
					return (
						<g key={i} opacity={prog(f, at, 12)}>
							<g transform={`translate(${sx - CX4},0)`}>
								<Panel x={CX4} y={c.y} w={CW4} h={CH4} stroke={agreeP > 0.5 ? AMBER : EDGE} sw={agreeP > 0.5 ? 4 : 3} />
								<Sx x={CX4 + 24} y={c.y + 46} text={c.title} size={32} color={INK} weight={800} />
							</g>
						</g>
					);
				})}
				{/* the big map stays at the left; a copy flies into card 3 */}
				<World M={M0} id="m4big" band={() => 1} o={1 - prog(f, K4.nosingle, 14) * 0.45 - prog(f, K4.concl - 12, 12) * 0.55} />
				{t > 0.01 ? <World M={M} id="m4" band={() => 1} strokeW={lerp(2.5, 1.5, t)} /> : null}
				{/* card 1: a recessive trio */}
				<g opacity={prog(f, K4.unaff, 12)}>
					<PSym x={CX4 + 80} y={CARDS4[0].y + 88} sex="M" aff={false} sz={36} />
					<PSym x={CX4 + 170} y={CARDS4[0].y + 88} sex="F" aff={false} sz={36} />
					<line x1={CX4 + 98} y1={CARDS4[0].y + 88} x2={CX4 + 152} y2={CARDS4[0].y + 88} stroke={INK} strokeWidth={3} />
					<line x1={CX4 + 125} y1={CARDS4[0].y + 88} x2={CX4 + 125} y2={CARDS4[0].y + 118} stroke={INK} strokeWidth={3} />
					<PSym x={CX4 + 125} y={CARDS4[0].y + 136} sex="F" aff sz={30} />
				</g>
				<Sx x={CX4 + 240} y={CARDS4[0].y + 110} text="recessive; carriers healthy" size={32} color={AMBER_INK} hand at={K4.rec} />
				<GreyTag x={CX4 + CW4 - 70} y={CARDS4[0].y + 14} text="B9" at={K4.rec + 6} size={22} />
				{/* card 2: one base */}
				<Codon x={CX4 + 30} y={CARDS4[1].y + 80} t="GAG" o={prog(f, K4.base, 12)} />
				<Sx x={CX4 + 200} y={CARDS4[1].y + 116} text="to" size={30} color={INK_SOFT} hand at={K4.base + 6} />
				<Codon x={CX4 + 250} y={CARDS4[1].y + 80} t="GTG" hot={1} o={prog(f, K4.base + 10, 12)} />
				<Sx x={CX4 + 420} y={CARDS4[1].y + 116} text="one base, haemoglobin gene" size={28} color={AMBER_INK} hand at={K4.base + 16} />
				<GreyTag x={CX4 + CW4 - 70} y={CARDS4[1].y + 14} text="B7" at={K4.base + 20} size={22} />
				{/* card 3: the map has shrunk into it */}
				<Sx x={CX4 + 30} y={CARDS4[2].y + 120} text="pooled survey map" size={30} color={AMBER_INK} hand at={K4.common} />
				{/* what each cannot show */}
				{CARDS4.map((c, i) => (
					<g key={'c' + i}>
						<Sx x={CX4 + 30} y={c.y + CH4 - 22} text={'cannot show: ' + c.cant} size={26} color={INK_SOFT} weight={700} at={K4.nosingle + i * 10} />
					</g>
				))}
				{/* agreement */}
				{CARDS4.map((c, i) => (
					<g key={'l' + i} opacity={prog(f, K4.concl, 10)}>
						<DrawPath d={`M${CX4},${c.y + CH4 / 2} C${CX4 - 120},${c.y + CH4 / 2} ${720},${560} ${620},${560}`} at={K4.concl + i * 6} dur={18} color={AMBER} width={4} />
					</g>
				))}
				<Fade at={K4.agree}>
					<Panel x={120} y={510} w={500} h={100} stroke={AMBER} sw={4} />
					<Sx x={370} y={575} text="conclusion from agreement" size={38} color={INK} hand anchor="middle" />
				</Fade>
				<Ring cx={370} cy={560} rx={290} ry={80} at={K4.agree + 16} seed={8} />
			</Overlay>
		</>
	);
};
void TEAL;
