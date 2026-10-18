// B13 scenes 5 to 8: the malaria overlay (a hatched layer wipes over the allele map; a carrier's infected cell sickles
// and clears; genotype bars; a generation strip), a match isn't proof (study card, then founders sail to an island and
// the island grows from them, counts computed), protecting a threatened species (diversity trays, a disease passes
// along them, pairing cards) and what shared variants say about human history (one element per cue, in three phases).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {
	AMBER, AMBER_INK, BEADC, Bead, Boat, CARD, CrashLine, DiversityTray, DrawPath, EDGE, Fade, GreyTag, HBar, Heading, INK, INK_SOFT, ISLAND, LandChip, MAINLAND,
	MistakeChip, Overlay, PL13, PSym, Panel, PlateB, QMark, RED_BLOOD, Ring, S, Sx, TEAL, Tick, Cross, clamp01, lerp, prog, rng, vis,
} from './shared';
import {BANDS, BAND_FILL, MALARIA, TASMANIA, World, proj, zoneD} from './world';
import type {LL, MapBox} from './world';

// ---------- the map with its hatched layer ----------
const M5: MapBox = {x: 70, y: 200, w: 1010};
/** Allele map with a malaria layer that wipes on from the left (wipe 0..1). */
const OverlayMap: React.FC<{wipe: number; ringO?: number; ringAt?: number; id: string}> = ({wipe, ringO = 0, ringAt = 0, id}) => {
	const f = useCurrentFrame();
	const h = (M5.w * 136) / 350;
	return (
		<g>
			<World M={M5} id={id + 'a'} band={() => 1} />
			<defs><clipPath id={id + '-wipe'}><rect x={M5.x - 10} y={M5.y - 10} width={(M5.w + 20) * clamp01(wipe)} height={h + 20} /></clipPath></defs>
			<g clipPath={`url(#${id}-wipe)`}><World M={M5} id={id + 'b'} outline={0} hatch={() => 1} /></g>
			{wipe > 0.01 && wipe < 0.99 ? <line x1={M5.x + M5.w * wipe} y1={M5.y} x2={M5.x + M5.w * wipe} y2={M5.y + h} stroke="#3d5a7a" strokeWidth={4} opacity={0.6} /> : null}
			{ringO > 0.01 && f >= ringAt ? (
				<g opacity={ringO}>
					<DrawPath d={zoneD(M5, BANDS[1].pts)} at={ringAt} dur={20} color={AMBER} width={6} />
					<DrawPath d={zoneD(M5, MALARIA[0].pts)} at={ringAt + 8} dur={20} color={AMBER_INK} width={3.5} dash="10 8" />
				</g>
			) : null}
		</g>
	);
};
const MapKey: React.FC<{x: number; y: number; o?: number}> = ({x, y, o = 1}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		{[1, 2, 3].map(b => <rect key={b} x={x + (b - 1) * 34} y={y} width={30} height={24} rx={4} fill={BAND_FILL[b]} stroke={INK_SOFT} strokeWidth={1.5} />)}
		<text x={x + 112} y={y + 20} style={{fontFamily: 'Inter Tight', fontWeight: 600, fontSize: 22}} fill={INK}>sickle allele: 1 to 5%, 5 to 10%, over 10%</text>
		<defs><pattern id="keyhatch" width={10} height={10} patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1={0} y1={0} x2={0} y2={10} stroke="#3d5a7a" strokeWidth={2.4} /></pattern></defs>
		<rect x={x + 600} y={y} width={44} height={24} rx={4} fill="url(#keyhatch)" stroke={INK_SOFT} strokeWidth={1.5} />
		<text x={x + 656} y={y + 20} style={{fontFamily: 'Inter Tight', fontWeight: 600, fontSize: 22}} fill={INK}>historical malaria</text>
	</g>
));

// ---------- 5. The malaria overlay ----------
const K5 = cues(S('malaria-overlay'), {
	why: 'So why is it common', lay: 'Lay a map of malaria', africa: 'across Africa', line: 'they line up closely', caused: 'Malaria is caused by',
	parasite: 'a parasite that a mosquito passes on', grows: 'grows inside red blood cells', inc: 'In carriers', sickle: 'infected cells tend to sickle',
	anaemia: "carriers don't get the anaemia", severe: 'die of severe malaria', where: 'So where malaria is common', survive: 'carriers survive and have children',
	stays: 'the allele stays common', het: 'heterozygote advantage',
});
/** One infected red cell (coded) that deforms into a sickle and fades (p 0..1). */
const SickleInset: React.FC<{x: number; y: number; p: number; o?: number}> = ({x, y, p, o = 1}) => {
	if (o <= 0.01) return null;
	const k = clamp01(p * 1.6);
	const fade = 1 - clamp01((p - 0.7) / 0.3);
	const d = `M${x - 60},${y} C${x - 60},${lerp(y - 40, y - 10, k)} ${x + 60},${lerp(y - 40, y - 60, k)} ${x + 60},${lerp(y, y - 24, k)} C${x + 60},${lerp(y + 40, y - 8, k)} ${x - 60},${lerp(y + 40, y + 6, k)} ${x - 60},${y} Z`;
	return (
		<g opacity={o * fade}>
			<path d={d} fill="#d0574a" stroke={RED_BLOOD} strokeWidth={3} />
			<circle cx={x + 6} cy={lerp(y, y - 16, k)} r={10} fill="#c9a2d6" stroke="#6e3f80" strokeWidth={2} />
		</g>
	);
};
const GENOS = [
	{t: 'two normal alleles', an: 0, mal: 0.9},
	{t: 'carrier (one sickle allele)', an: 0.04, mal: 0.15},
	{t: 'two sickle alleles', an: 1, mal: 0},
];
export const SceneMalariaB13: React.FC = () => {
	const f = useCurrentFrame();
	const wipe = prog(f, K5.lay, 40);
	const genO = prog(f, K5.survive, 12);
	return (
		<>
			<Heading text="Malaria and the sickle allele" at={K5.why} size={54} />
			<Overlay>
				<OverlayMap id="m5" wipe={wipe} ringO={1} ringAt={K5.africa} />
				<MapKey x={M5.x} y={M5.y + 410} o={prog(f, K5.lay, 12)} />
				<GreyTag x={proj(M5)([-150, -22])[0]} y={proj(M5)([-150, -22])[1]} text="weaker match in the Americas" at={K5.line + 10} size={22} />
				<GreyTag x={proj(M5)([98, -20])[0]} y={proj(M5)([98, -20])[1]} text="weaker match in Asia" at={K5.line + 16} size={22} />
				<GreyTag x={M5.x + 790} y={M5.y + 362} text="Piel et al. 2010" at={K5.line + 20} size={22} />
				{/* parasite, mosquito, sickling inset */}
				<PlateB p={PL13.mosquito} cx={1240} cy={290} w={210} o={prog(f, K5.parasite, 14)} />
				<PlateB p={PL13.plasmo} cx={1470} cy={290} w={170} o={prog(f, K5.grows, 14)} />
				<Sx x={1360} y={400} text="malaria parasite inside a red cell" size={28} color={INK} hand anchor="middle" at={K5.grows + 6} />
				<Fade at={K5.inc} out={K5.sickle + 80}>
					<circle cx={1720} cy={290} r={92} fill={CARD} stroke={EDGE} strokeWidth={3} />
				</Fade>
				<SickleInset x={1720} y={300} p={prog(f, K5.sickle, 60)} o={prog(f, K5.inc, 10)} />
				<Sx x={1720} y={440} text="infected carrier cells sickle" size={26} color={AMBER_INK} hand anchor="middle" at={K5.sickle + 10} />
				<Sx x={1720} y={470} text="and are removed" size={26} color={AMBER_INK} hand anchor="middle" at={K5.sickle + 30} />
				{/* genotype bars */}
				{GENOS.map((g, i) => {
					const x = 90 + i * 340;
					const at = K5.anaemia + i * 6;
					return (
						<g key={i} opacity={prog(f, at, 12)}>
							<Panel x={x} y={680} w={320} h={210} stroke={i === 1 ? AMBER : EDGE} sw={i === 1 ? 4 : 3} />
							<Sx x={x + 160} y={724} text={g.t} size={26} color={INK} weight={800} anchor="middle" />
							<Sx x={x + 20} y={776} text="anaemia" size={24} color={INK_SOFT} weight={600} />
							<HBar x={x + 20} y={786} w={280} v={g.an} max={1} p={prog(f, at + 6, 18)} h={22} color={RED_BLOOD} />
							{i < 2 ? <>
								<Sx x={x + 20} y={840} text="severe malaria risk" size={24} color={INK_SOFT} weight={600} />
								<HBar x={x + 20} y={850} w={280} v={g.mal} max={1} p={prog(f, K5.severe + i * 4, 18)} h={22} color="#3d5a7a" />
							</> : <Sx x={x + 20} y={858} text="sickle cell disease" size={24} color={INK_SOFT} weight={600} at={K5.severe + 8} />}
						</g>
					);
				})}
				<GreyTag x={90} y={910} text="illustrative heights" at={K5.anaemia + 20} size={22} />
				{/* carriers leave more children */}
				<g opacity={genO}>
					<Panel x={1130} y={510} w={710} h={190} />
					<Sx x={1150} y={550} text="where malaria is common" size={26} color={INK_SOFT} weight={700} />
					{[0, 1, 2].map(gn => (
						<g key={gn}>
							{Array.from({length: 8}, (_, k) => {
								const car = k % 3 === 1;
								const o = prog(f, K5.survive + gn * 16 + k * 1.5, 8);
								return <circle key={k} cx={1170 + gn * 230 + (k % 4) * 40} cy={600 + Math.floor(k / 4) * 44} r={15} fill={car ? AMBER : CARD} stroke={car ? AMBER_INK : INK_SOFT} strokeWidth={2.5} opacity={o} />;
							})}
							{gn < 2 ? <DrawPath d={`M${1330 + gn * 230},${620} L${1375 + gn * 230},${620}`} at={K5.survive + gn * 16 + 10} dur={8} color={INK_SOFT} width={3} /> : null}
						</g>
					))}
					<Sx x={1150} y={690} text="carriers leave more children: the allele stays common" size={26} color={AMBER_INK} hand at={K5.stays} />
				</g>
				{/* the term */}
				<Fade at={K5.het}>
					<Panel x={1130} y={730} w={710} h={170} stroke={AMBER} sw={4} />
					<Sx x={1160} y={792} text="heterozygote advantage" size={46} color={INK} hand />
					<Sx x={1160} y={850} text="carriers do better than either kind" size={28} color={INK_SOFT} weight={600} />
					<Sx x={1160} y={884} text="of homozygote, here" size={28} color={INK_SOFT} weight={600} />
				</Fade>
			</Overlay>
		</>
	);
};

// ---------- 6. A match isn't proof ----------
const K6 = cues(S('match-not-proof'), {
	proof: "aren't proof on their own", coin: 'match by coincidence', assoc: 'like any association', trust: 'Scientists trust the malaria explanation',
	other: 'other studies showed directly', resist: 'really do resist severe malaria', another: 'have another cause', small: 'In a small, isolated group',
	chance: 'common just by chance', founders: 'a few of the founders', carry: 'happened to carry it',
});
/** Founder counts (computed): mainland 40 with 2 copies of the allele; 5 founders carry 2; the island grows fivefold. */
export const FOUNDER = (() => {
	const main = Array.from({length: 40}, (_, i) => (i === 7 || i === 29 ? 1 : 0));
	const founders = [main[7], main[3], main[29], main[12], main[20]];
	const island = founders.flatMap(b => Array.from({length: 5}, () => b));
	const share = (a: number[]) => a.filter(x => x).length / a.length;
	return {main, founders, island, mainShare: share(main), islandShare: share(island)};
})();
if (FOUNDER.mainShare !== 0.05 || FOUNDER.islandShare !== 0.4) throw new Error('B13 founder check failed');
export const SceneNotProofB13: React.FC = () => {
	const f = useCurrentFrame();
	const insetO = prog(f, K6.another, 14);
	const boatT = prog(f, K6.founders, 50);
	const grow = prog(f, K6.carry + 10, 40);
	const r = rng(9);
	const mainPos = FOUNDER.main.map((_, i) => [190 + (i % 8) * 34 + (Math.floor(i / 8) % 2) * 17, 760 + Math.floor(i / 8) * 32] as [number, number]);
	const islPos = FOUNDER.island.map(() => [1290 + r() * 230, 760 + r() * 150] as [number, number]);
	return (
		<>
			<Heading text="A match isn't proof" at={4} size={56} />
			<Overlay>
				<g opacity={1 - insetO * 0.55}>
					<OverlayMap id="m6" wipe={1} ringO={1 - prog(f, K6.proof, 16) * 0.75} ringAt={-40} />
				</g>
				{/* the tempting claim */}
				<Fade at={K6.proof}>
					<Panel x={1130} y={210} w={710} h={90} />
					<Sx x={1160} y={268} text="maps match, so malaria caused it" size={34} color={INK} weight={700} />
				</Fade>
				<QMark x={1800} y={276} size={64} o={prog(f, K6.coin, 10)} color={INK_SOFT} />
				<Sx x={1160} y={344} text="association, not cause" size={32} color={AMBER_INK} hand at={K6.assoc} />
				<GreyTag x={1500} y={318} text="B11" at={K6.assoc + 6} size={22} />
				{/* direct evidence */}
				<g opacity={prog(f, K6.other, 12)}>
					<Panel x={1130} y={380} w={710} h={220} stroke={TEAL} />
					<Sx x={1160} y={426} text="study: severe malaria" size={30} color={INK} weight={800} />
					<HBar x={1400} y={460} w={400} v={0.9} max={1} label="non-carriers" color="#3d5a7a" p={prog(f, K6.other + 6, 20)} />
					<HBar x={1400} y={510} w={400} v={0.12} max={1} label="carriers" color={AMBER} p={prog(f, K6.resist, 20)} />
					<Sx x={1160} y={584} text="direct evidence (illustrative heights)" size={28} color={TEAL} hand />
				</g>
				{/* another cause: founders */}
				<g opacity={insetO}>
					<Panel x={90} y={650} w={1750} h={340} />
					<Sx x={120} y={700} text="mainland" size={30} color={INK} hand />
					{mainPos.map((p, i) => <Bead key={i} x={p[0]} y={p[1]} c={FOUNDER.main[i] ? 2 : -1} r={12} />)}
					<Sx x={120} y={960} text={`allele: ${FOUNDER.main.filter(x => x).length} of ${FOUNDER.main.length} (${Math.round(FOUNDER.mainShare * 100)}%)`} size={28} color={INK} weight={700} />
					<LandChip pts={ISLAND} x={1250} y={730} w={320} o={1} />
					<Sx x={1410} y={700} text="small, isolated island" size={28} color={INK} hand anchor="middle" at={K6.small} />
				</g>
				{insetO > 0.01 ? <Boat x={lerp(640, 1180, boatT)} y={860 - Math.sin(Math.PI * boatT) * 30} s={0.9} beads={FOUNDER.founders.map(b => (b ? 2 : 7))} o={prog(f, K6.founders - 4, 10) * (1 - prog(f, K6.carry + 4, 10))} /> : null}
				{islPos.map((p, i) => {
					const k = Math.floor(i / 5), j = i % 5;
					const o = j === 0 ? prog(f, K6.carry, 10) : clamp01(grow * 5 - (j - 1) * 1.1);
					return <Bead key={i} x={p[0]} y={p[1]} c={FOUNDER.island[i] ? 2 : -1} r={11} o={o * (k < 5 ? 1 : 0)} />;
				})}
				<Sx x={1600} y={800} text="founders" size={30} color={AMBER_INK} hand at={K6.founders + 10} />
				<Sx x={1600} y={850} text={`allele: ${Math.round(FOUNDER.islandShare * 100)}%`} size={30} color={INK} weight={800} at={K6.carry + 40} />
				<Sx x={1600} y={890} text="by chance" size={30} color={AMBER_INK} hand at={K6.carry + 46} />
				<GreyTag x={1580} y={920} text="founder effect: Module 6" at={K6.carry + 20} size={22} />
			</Overlay>
		</>
	);
};

// ---------- 7. Protecting a threatened species ----------
const K7 = cues(S('conservation'), {
	same: 'The same kind of data helps', devils: 'Tasmanian devils are being killed', cancer: 'contagious facial cancer', gen: 'Genetic data from many devils',
	little: 'very little genetic diversity', meaning: 'meaning few different alleles', crashes: 'past population crashes', fewer: 'with fewer alleles',
	helps: 'helps against a new disease', breeders: 'So breeders use the data', pair: 'pair devils that are less related', keeping: 'keeping as much diversity',
	only: 'diversity only improves the odds', guarantee: "It doesn't guarantee survival",
});
const DIVERSE = [5, 6, 4, 6, 5];
const DEVILK = [1, 2, 1, 2, 1];
const TX1 = 640, TX2 = 1180, TY = 280;
/** A small coded pathogen marker (spiky dot). */
const Germ: React.FC<{x: number; y: number; o?: number}> = ({x, y, o = 1}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		{Array.from({length: 8}, (_, i) => { const a = (i / 8) * Math.PI * 2; return <line key={i} x1={x + Math.cos(a) * 14} y1={y + Math.sin(a) * 14} x2={x + Math.cos(a) * 24} y2={y + Math.sin(a) * 24} stroke="#7a3b6e" strokeWidth={4} strokeLinecap="round" />; })}
		<circle cx={x} cy={y} r={15} fill="#b8649e" stroke="#7a3b6e" strokeWidth={3} />
	</g>
));
export const SceneConservationB13: React.FC = () => {
	const f = useCurrentFrame();
	const gx = lerp(TX1 - 60, TX2 + 400, prog(f, K7.helps, 60));
	const passed = (x: number) => (gx > x ? 1 : 0);
	const resist = (m: number, k: number) => ((m === 1 && k === 3) || (m === 3 && k === 1) || (m === 4 && k === 4) ? passed(TX1 + 42 + m * 64) * (1 - prog(f, K7.breeders, 14)) : 0);
	const cardO = prog(f, K7.pair, 12);
	return (
		<>
			<Heading text="Protecting a threatened species" at={K7.same} size={54} />
			<Overlay>
				<PlateB p={PL13.devil} cx={270} cy={330} w={340} o={prog(f, K7.devils, 14)} />
				<LandChip pts={TASMANIA} x={470} y={210} w={110} o={prog(f, K7.devils + 10, 12)} label="Tasmania" size={22} />
				<GreyTag x={90} y={500} text="devil facial tumour disease, first seen 1996" at={K7.cancer} size={19} />
				<CrashLine x={110} y={590} w={330} h={110} at={K7.crashes} color={INK} />
				<Sx x={110} y={750} text="population crash (bottleneck)" size={30} color={AMBER_INK} hand at={K7.crashes + 20} />
				{/* trays */}
				<DiversityTray x={TX1} y={TY} kinds={DIVERSE} per={6} p={prog(f, K7.little - 10, 40)} seed={3} label="a diverse population" glowAt={resist} />
				<DiversityTray x={TX2} y={TY} kinds={DEVILK} per={6} p={prog(f, K7.little, 40)} seed={6} label="devils" />
				<Sx x={TX1} y={TY + 290} text="number written: different alleles at that marker" size={24} color={INK_SOFT} weight={600} at={K7.meaning} />
				<GreyTag x={TX1} y={TY + 302} text="illustrative pattern, not measured values" at={K7.little + 30} size={22} />
				<Fade at={K7.meaning}>
					<Panel x={1580} y={TY} w={260} h={230} stroke={AMBER} sw={4} />
					<Sx x={1600} y={TY + 56} text="genetic" size={40} color={INK} hand />
					<Sx x={1600} y={TY + 100} text="diversity" size={40} color={INK} hand />
					<Sx x={1600} y={TY + 150} text="how many" size={28} color={INK_SOFT} weight={600} />
					<Sx x={1600} y={TY + 186} text="different alleles" size={28} color={INK_SOFT} weight={600} />
				</Fade>
				{/* a new disease passes along the trays */}
				<Germ x={gx} y={TY + 110} o={vis(f, K7.helps, K7.breeders - 10)} />
				<Sx x={TX1 + 20} y={TY + 400} text="some may resist" size={30} color={AMBER_INK} hand at={K7.helps + 30} out={K7.breeders} />
				<Sx x={TX2 + 20} y={TY + 400} text="none resist" size={30} color={INK_SOFT} hand at={K7.helps + 50} out={K7.breeders} />
				{/* breeding: pair the least related */}
				<g opacity={cardO}>
					<Panel x={640} y={720} w={540} h={180} stroke={TEAL} />
					<PlateB p={PL13.devil} cx={760} cy={800} w={140} filter="brightness(0.25)" />
					<PlateB p={PL13.devil} cx={960} cy={800} w={140} filter="brightness(0.25)" flipX />
					<Sx x={860} y={880} text="less related" size={28} color={INK} hand anchor="middle" />
					<Panel x={1220} y={720} w={540} h={180} />
					<PlateB p={PL13.devil} cx={1340} cy={800} w={140} filter="brightness(0.25)" />
					<PlateB p={PL13.devil} cx={1540} cy={800} w={140} filter="brightness(0.25)" flipX />
					<Sx x={1440} y={880} text="closely related" size={28} color={INK} hand anchor="middle" />
				</g>
				{cardO > 0.01 ? <Tick x={1120} y={760} at={K7.pair + 14} s={44} /> : null}
				{cardO > 0.01 ? <Cross x={1700} y={760} at={K7.pair + 20} s={24} /> : null}
				<Sx x={640} y={940} text="pair the least related: keep as many alleles as possible" size={30} color={TEAL} hand at={K7.keeping} out={K7.only} />
				<MistakeChip x={640} y={910} text="diversity guarantees survival" at={K7.only} cross={K7.guarantee} size={28} />
				<Sx x={1180} y={948} text="improves the odds; also habitat, disease, numbers" size={28} color={AMBER_INK} hand at={K7.guarantee + 10} />
			</Overlay>
		</>
	);
};

// ---------- 8. What shared variants say about human history ----------
const K8 = cues(S('human-evolution'), {
	large: 'Large data also show', project: 'The 1000 Genomes Project', people: '2,504 people', pops: '26 populations', share: 'Populations that share more variants',
	recent: 'more recent ancestors', african: 'African populations carry the most variation', common: 'most common variants found elsewhere', fits: 'That fits modern humans',
	each: 'each group that left', founders: 'a small set of founders', part: 'carrying only part of that variety', ref: 'the reference genome', typical: 'a typical person differs',
	million: 'four to five million places',
});
/** 1000 Genomes sampling sites (approximate; diaspora samples at the place sampled), by continental group. */
const POPS: [number, number, number][] = [
	[4, 8, 0], [37, 0, 0], [-16, 13, 0], [-12, 8, 0], [6, 6, 0], [-100, 33, 0], [-59, 13, 0],
	[-111, 40, 1], [11, 43, 1], [25, 62, 1], [-2, 53, 1], [-4, 40, 1],
	[116, 40, 2], [139, 36, 2], [113, 23, 2], [100, 22, 2], [106, 11, 2],
	[-95, 30, 3], [74, 31, 3], [90, 24, 3], [-1, 51.5, 3], [0, 52.5, 3],
	[-118, 34, 4], [-66, 18, 4], [-75, 6, 4], [-77, -12, 4],
];
const GROUP = ['African', 'European', 'East Asian', 'South Asian', 'American'];
const GCOL = ['#c4632e', '#3d7fb0', '#5e9c5a', '#8e6bb3', '#e2b13b'];
/** SNP sites per genome, millions (1000 Genomes phase 3, Table 1; root to confirm against the paper). */
const VAR = [4.31, 3.53, 3.55, 3.6, 3.64];
if (POPS.length !== 26 || VAR.indexOf(Math.max(...VAR)) !== 0) throw new Error('B13 1000 Genomes check failed');
const M8: MapBox = {x: 820, y: 190, w: 1020};
/** A strip with variant ticks at given positions (0..1). */
const VStrip: React.FC<{x: number; y: number; w: number; ticks: number[]; hot?: (i: number) => boolean; at: number; o?: number; color?: string}> = ({x, y, w, ticks, hot, at, o = 1, color = '#b88aae'}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 16);
	if (p <= 0.01 || o <= 0.01) return null;
	return (
		<g opacity={o * p}>
			<rect x={x} y={y - 8} width={w} height={16} rx={8} fill="#efe6d4" stroke={INK_SOFT} strokeWidth={2} />
			{ticks.map((t, i) => <line key={i} x1={x + t * w} y1={y - 16} x2={x + t * w} y2={y + 16} stroke={hot && hot(i) ? AMBER_INK : color} strokeWidth={hot && hot(i) ? 5 : 3} opacity={prog(f, at + 6 + i * 2, 6)} />)}
		</g>
	);
};
const TA = [0.06, 0.14, 0.22, 0.31, 0.4, 0.48, 0.57, 0.66, 0.74, 0.83, 0.91];
export const SceneHumanB13: React.FC = () => {
	const f = useCurrentFrame();
	const P = proj(M8);
	const phaseA = 1 - prog(f, K8.each - 10, 14);
	const phaseB = vis(f, K8.each, K8.ref - 6);
	const phaseC = prog(f, K8.ref, 12);
	const worldO = 1 - phaseC * 0.85;
	// tree geometry
	const root: [number, number] = [160, 790];
	const nodes = [{x: 520, y: 700, g: 0, beads: 10}, {x: 520, y: 880, g: -1, beads: 6}, {x: 900, y: 820, g: 1, beads: 4}, {x: 900, y: 940, g: 3, beads: 4}, {x: 1260, y: 900, g: 2, beads: 3}, {x: 1600, y: 960, g: 4, beads: 3}];
	const edges: [number, number, number][] = [[-1, 0, 0], [-1, 1, 0], [1, 2, 1], [1, 3, 1], [3, 4, 2], [4, 5, 3]];
	const nodeXY = (i: number): [number, number] => (i < 0 ? root : [nodes[i].x, nodes[i].y]);
	return (
		<>
			<Heading text="Shared variants and human history" at={K8.large} size={52} />
			<Overlay>
				{/* title card and sampling map */}
				<g opacity={prog(f, K8.project, 12)}>
					<Panel x={100} y={200} w={640} h={140} stroke={AMBER} />
					<Sx x={130} y={258} text="1000 Genomes Project" size={42} color={INK} hand />
				</g>
				<Sx x={130} y={314} text="2,504 people, 26 populations" size={32} color={INK} weight={700} at={K8.people} />
				<GreyTag x={100} y={352} text="1000 Genomes Project, 2015" at={K8.pops + 10} size={22} />
				<g opacity={worldO}>
					<World M={M8} id="m8" outline={prog(f, K8.project, 30)} landFill="#f8f2e4" strokeW={2} />
					{POPS.map((q, i) => { const [x, y] = P([q[0], q[1]] as LL); const o = prog(f, K8.pops + i * 1.5, 8); return o > 0.01 ? <circle key={i} cx={x} cy={y} r={9} fill={GCOL[q[2]]} stroke={INK} strokeWidth={1.5} opacity={o} /> : null; })}
					<GreyTag x={M8.x + 20} y={M8.y + 404} text="sampling sites (some groups sampled abroad)" at={K8.pops + 30} size={22} />
				</g>
				{/* phase A: shared variants, bars, nested circles */}
				<g opacity={phaseA}>
					<Sx x={100} y={428} text="share many variants" size={28} color={INK} weight={700} at={K8.share} />
					<VStrip x={100} y={460} w={640} ticks={TA} at={K8.share} hot={i => i % 4 !== 3} />
					<VStrip x={100} y={500} w={640} ticks={TA.map((t, i) => (i % 4 === 3 ? t + 0.03 : t))} at={K8.share + 6} hot={i => i % 4 !== 3} />
					<Sx x={100} y={566} text="share few" size={28} color={INK} weight={700} at={K8.share + 20} />
					<VStrip x={100} y={598} w={640} ticks={TA} at={K8.share + 20} hot={i => i === 2 || i === 8} />
					<VStrip x={100} y={638} w={640} ticks={TA.map((t, i) => (i === 2 || i === 8 ? t : t + 0.035))} at={K8.share + 26} hot={i => i === 2 || i === 8} />
					<Sx x={100} y={700} text="more shared: more recent common ancestors" size={30} color={AMBER_INK} hand at={K8.recent} />
					{/* variant bars */}
					<g opacity={prog(f, K8.african, 12)}>
						<Sx x={100} y={770} text="SNP sites per genome (millions)" size={26} color={INK} weight={700} />
						{VAR.map((v, i) => (
							<g key={i}>
								<HBar x={300} y={790 + i * 40} w={440} v={v} max={4.5} p={prog(f, K8.african + 6 + i * 4, 20)} h={28} color={GCOL[i]} label={GROUP[i]} size={22} />
								<text x={300 + (440 * v) / 4.5 * prog(f, K8.african + 6 + i * 4, 20) + 8} y={812 + i * 40} style={{fontFamily: 'Inter Tight', fontWeight: 700, fontSize: 22}} fill={INK}>{v.toFixed(2)}</text>
							</g>
						))}
					</g>
					{/* nested circles */}
					<g opacity={prog(f, K8.common, 12)}>
						<Sx x={1000} y={680} text="common variants" size={30} color={INK} weight={800} />
						<circle cx={1240} cy={845} r={148} fill="rgba(196,99,46,0.12)" stroke={GCOL[0]} strokeWidth={4} />
						{[[-60, -40, 70, 1], [40, -50, 68, 2], [50, 50, 66, 3], [-50, 60, 64, 4]].map((c, i) => (
							<circle key={i} cx={1240 + c[0] * prog(f, K8.common + 10 + i * 5, 14)} cy={845 + c[1] * prog(f, K8.common + 10 + i * 5, 14)} r={c[2] * 0.92} fill="none" stroke={GCOL[c[3]]} strokeWidth={3.5} opacity={prog(f, K8.common + 10 + i * 5, 10)} />
						))}
						<Sx x={1420} y={760} text="found in African" size={28} color={GCOL[0]} hand />
						<Sx x={1420} y={796} text="populations" size={28} color={GCOL[0]} hand />
						<Sx x={1420} y={850} text="small circles: other" size={24} color={INK_SOFT} weight={600} />
						<Sx x={1420} y={880} text="groups, mostly inside" size={24} color={INK_SOFT} weight={600} />
						<GreyTag x={1420} y={930} text="rare variants: mostly found in one region" at={K8.common + 30} size={22} />
					</g>
				</g>
				{/* phase B: founders leave with part of the variety */}
				<g opacity={phaseB}>
					<Sx x={100} y={460} text="out of Africa: each group a small set of founders" size={34} color={INK} hand />
					{edges.map(([a, b, k], i) => {
						const [x1, y1] = nodeXY(a), [x2, y2] = nodeXY(b);
						return <DrawPath key={i} d={`M${x1},${y1} C${(x1 + x2) / 2},${y1} ${(x1 + x2) / 2},${y2} ${x2},${y2}`} at={K8.each + 6 + k * 14} dur={18} color={INK_SOFT} width={4} />;
					})}
					<Sx x={root[0] - 60} y={root[1] + 60} text="ancestors in Africa" size={26} color={INK} hand at={K8.each} />
					{Array.from({length: 14}, (_, j) => <Bead key={'r' + j} x={root[0] - 50 + (j % 5) * 24} y={root[1] - 90 + Math.floor(j / 5) * 24} c={j % 9} r={10} o={prog(f, K8.each, 10)} />)}
					{nodes.map((n, i) => {
						const lvl = i === 0 || i === 1 ? 0 : i <= 3 ? 1 : i === 4 ? 2 : 3;
						const at = K8.founders + lvl * 14;
						return (
							<g key={i} opacity={prog(f, at, 10)}>
								{Array.from({length: n.beads}, (_, j) => <Bead key={j} x={n.x + 30 + (j % 5) * 22} y={n.y - 14 + Math.floor(j / 5) * 22} c={i === 0 ? j % 9 : [0, 2, 4, 5, 7][j % (n.beads <= 3 ? 3 : 4)] ?? 0} r={9} />)}
								{n.g >= 0 ? <Sx x={n.x + 30} y={n.y + 40} text={GROUP[n.g]} size={24} color={GCOL[n.g]} weight={700} /> : null}
							</g>
						);
					})}
					<Sx x={1100} y={720} text="founders carry part of the variety" size={34} color={AMBER_INK} hand at={K8.part} />
					<GreyTag x={1100} y={740} text="illustrative branching, no dates" at={K8.part + 10} size={22} />
				</g>
				{/* phase C: the reference genome */}
				<g opacity={phaseC}>
					{[0, 1, 2].map(i => <PSym key={i} x={220 + i * 70} y={560} sex={i === 1 ? 'F' : 'M'} aff={false} sz={40} />)}
					{[0, 1, 2].map(i => <DrawPath key={'d' + i} d={`M${220 + i * 70},${582} C${220 + i * 70},${640} ${560},${620} ${600},${680}`} at={K8.ref + 8 + i * 4} dur={14} color={INK_SOFT} width={3} />)}
					<Sx x={140} y={520} text="built from a few donors" size={30} color={AMBER_INK} hand at={K8.ref + 16} />
				</g>
				<VStrip x={300} y={700} w={1300} ticks={[]} at={K8.ref + 4} />
				<Sx x={300} y={670} text="reference genome" size={30} color={INK} weight={800} at={K8.ref + 4} />
				{phaseC > 0.01 ? (
					<g transform={`translate(${lerp(-1400, 0, prog(f, K8.typical, 24))},0)`}>
						<Sx x={300} y={800} text="one person" size={30} color={INK} weight={800} at={K8.typical} />
						<VStrip x={300} y={830} w={1300} ticks={Array.from({length: 60}, (_, i) => (i + 0.5) / 60 + Math.sin(i * 7.3) * 0.004)} at={K8.million} color={AMBER_INK} hot={() => true} />
					</g>
				) : null}
				{phaseC > 0.01 ? Array.from({length: 60}, (_, i) => {
					const x = 300 + ((i + 0.5) / 60 + Math.sin(i * 7.3) * 0.004) * 1300;
					const fl = prog(f, K8.million + 6 + i * 0.6, 6) * (1 - prog(f, K8.million + 40 + i * 0.6, 14));
					return fl > 0.01 ? <circle key={i} cx={x} cy={765} r={7} fill={AMBER} opacity={fl} /> : null;
				}) : null}
				<Sx x={300} y={920} text="a typical genome differs at 4 to 5 million sites" size={36} color={AMBER_INK} hand at={K8.million + 20} />
			</Overlay>
		</>
	);
};
void BEADC; void CARD; void Ring; void TEAL; void MAINLAND; void EDGE;
