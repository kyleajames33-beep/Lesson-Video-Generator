import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {
	AMBER, AMBER_INK, DnaRing, DrawPath, EUK, Envelope, Fade, GreyTag, Grips, Hand, Heading, INK, INK_SOFT, MITO_IN_ANIMAL, NUC, Overlay,
	PL, PLUM, Pl, Plasmid, Ring2, Rod, S, Sx, TagP, Ticker, eukPt, prog, tw,
} from './shared';
import {Beads} from './shared';
import {MAIN_Q} from './s1';

// ---------- 9. DNA in mitochondria and chloroplasts ----------
const H9 = 'organelle-dna';
const K9 = cues(S(H9), {outside: 'outside the nucleus too', mito: 'Mitochondria where cells', copies: 'many copies', ring: 'small ring of DNA', chloro: 'so do chloroplasts', photo: 'photosynthesis', why: 'Why a ring', came: 'came from bacteria', inside: 'living inside larger cells', still: 'still carry', our: 'In our cells', extra: 'extra to the 46'});
const INS = {x: 560, y: 520};
const COPIES: [number, number][] = [[0, 0], [-92, -24], [96, 30], [40, -52], [-60, 44]];
export const SceneOrganelle: React.FC = () => {
	const f = useCurrentFrame();
	const animalO = 1 - prog(f, K9.chloro - 6, 18) + prog(f, K9.our - 20, 18);
	const plantO = prog(f, K9.chloro - 6, 18) * (1 - prog(f, K9.came - 10, 16));
	const mitoIn = prog(f, K9.mito - 6, 16) * (1 - prog(f, K9.chloro - 6, 14));
	const chlIn = prog(f, K9.chloro + 4, 16) * (1 - prog(f, K9.came - 10, 14));
	const endo = prog(f, K9.came - 6, 16) * (1 - prog(f, K9.our - 20, 14));
	const drift = prog(f, K9.inside - 10, 40);
	const pair = prog(f, K9.still - 6, 16) * (1 - prog(f, K9.our - 20, 14));
	const m0 = MITO_IN_ANIMAL[0];
	const mp = eukPt(m0[0], m0[1]);
	const rings = (at: number, more: number, o: number, rx = 30, ry = 20) => (
		<g opacity={o}>
			{COPIES.map(([dx, dy], i) => <DnaRing key={i} cx={INS.x + dx} cy={INS.y + dy} rx={rx} ry={ry} at={i ? more + i * 6 : at} width={4} />)}
		</g>
	);
	return (
		<>
			<Heading text="DNA outside the nucleus" at={4} size={60} />
			<Overlay>
				{/* right: the cell (animal, then plant, then animal again) */}
				<Pl p={PL.animal} x={EUK.x} y={EUK.y} k={EUK.k} o={Math.min(1, animalO) * (1 - 0.0)} />
				<Envelope cx={NUC.cx} cy={NUC.cy} r={NUC.r * 0.97} width={2} o={Math.min(1, animalO) * prog(f, K9.outside, 12)} fill={false} />
				<Pl p={PL.plant} x={EUK.x} y={EUK.y} k={0.4} o={plantO} />
				{/* beat 1: zoom into a mitochondrion */}
				<g opacity={mitoIn}>
					<path d={`M${mp[0] - 60},${mp[1] + 10} L${INS.x + 300},${INS.y - 60}`} stroke={AMBER_INK} strokeWidth={3} strokeDasharray="8 6" />
					<Ring2 cx={mp[0]} cy={mp[1]} rx={78} ry={50} at={K9.mito} />
					<Pl p={PL.mito} x={INS.x} y={INS.y} k={0.33} />
					{rings(K9.copies, K9.ring, 1)}
					<Sx x={INS.x} y={300} text="mitochondrion: releases energy from food" size={36} color={INK} hand anchor="middle" at={K9.mito + 6} />
					<TagP x={INS.x} y={720} text="many copies (rings drawn larger for clarity)" anchor="middle" at={K9.copies + 10} size={30} />
				</g>
				{/* beat 2: a plant cell and a chloroplast */}
				<g opacity={chlIn}>
					<Pl p={PL.chloro} x={INS.x} y={INS.y} k={0.34} />
					{rings(K9.chloro + 14, K9.chloro + 24, 1)}
					<Sx x={INS.x} y={300} text="chloroplast: photosynthesis" size={36} color={INK} hand anchor="middle" at={K9.chloro + 8} />
					<Sx x={INS.x} y={740} text="small rings of DNA here too" size={36} color={PLUM} hand anchor="middle" at={K9.photo} />
				</g>
				{/* beat 3: they came from bacteria */}
				<g opacity={endo}>
					<circle cx={INS.x} cy={INS.y} r={210} fill="#fbf6e8" stroke="#8a7a63" strokeWidth={5} strokeDasharray="20 10" />
					<Sx x={INS.x} y={INS.y - 230} text="a larger cell" size={34} color={INK_SOFT} hand anchor="middle" at={K9.came} />
					<g transform={`translate(${-300 * (1 - drift)},${-40 * (1 - drift)})`}>
						<Pl p={PL.bact} x={INS.x} y={INS.y + 20} k={0.15} />
						<DnaRing cx={INS.x + 10} cy={INS.y + 20} rx={40} ry={12} width={3} />
					</g>
					<GreyTag x={INS.x} y={INS.y + 240} text="endosymbiosis" anchor="middle" at={K9.inside + 10} />
				</g>
				<g opacity={pair}>
					<Pl p={PL.mito} x={1250} y={560} k={0.13} />
					<DnaRing cx={1250} cy={560} rx={34} ry={22} width={4} />
					<Pl p={PL.bact} x={1640} y={560} k={0.17} />
					<DnaRing cx={1650} cy={556} rx={44} ry={14} width={4} />
					<path d="M1390,560 L1500,560 M1404,546 L1390,560 L1404,574 M1486,546 L1500,560 L1486,574" fill="none" stroke={AMBER_INK} strokeWidth={5} strokeLinecap="round" />
					<Sx x={1445} y={700} text="alike: small rings, own DNA" size={40} color={AMBER_INK} hand anchor="middle" at={K9.still + 6} />
					<Sx x={1250} y={470} text="mitochondrion" size={30} color={INK_SOFT} hand anchor="middle" at={K9.still} />
					<Sx x={1640} y={470} text="bacterium" size={30} color={INK_SOFT} hand anchor="middle" at={K9.still} />
				</g>
				{/* beat 4: in our cells the rings are extra to the 46 */}
				<Fade at={K9.our - 6}>
					<Ticker x={200} y={540} from={46} to={46} at={K9.our} dur={1} label="chromosomes in the nucleus" size={110} />
					<Sx x={210} y={650} text="+" size={90} color={AMBER_INK} at={K9.extra} />
					<DnaRing cx={330} cy={622} rx={44} ry={28} at={K9.extra + 4} width={5} />
					<Sx x={400} y={636} text="rings in mitochondria" size={40} color={PLUM} hand at={K9.extra + 8} />
					<TagP x={200} y={720} text="46 is the nucleus count only" at={K9.extra + 20} />
					{MITO_IN_ANIMAL.map((m, i) => { const p = eukPt(m[0], m[1]); return <DnaRing key={i} cx={p[0]} cy={p[1]} rx={18} ry={11} at={K9.extra + i * 6} width={3} />; })}
				</Fade>
			</Overlay>
		</>
	);
};

// ---------- compare table ----------
type Cell = {lines: string[]; at: number; icon?: React.ReactNode};
export type Row = {label: string; at: number; L: Cell; R: Cell};
const TB = {x: 96, lw: 250, cl: 730, cr: 748, y0: 250, rh: 108, hh: 70};
const IconRing: React.FC<{x: number; y: number; coil?: number}> = ({x, y, coil = 0}) => <DnaRing cx={x} cy={y} rx={30} ry={16} coil={coil} width={3} />;
const IconRods: React.FC<{x: number; y: number}> = ({x, y}) => <g>{[[-26, -14, 4, -18], [-20, 6, 18, -4], [-8, 18, 26, 14]].map((q, i) => <Rod key={i} x1={x + q[0]} y1={y + q[1]} x2={x + q[2]} y2={y + q[3]} width={3} />)}</g>;
const IconBeads: React.FC<{x: number; y: number}> = ({x, y}) => <Beads xs={[x - 26, x, x + 26]} y={y} r={10} wind={[1, 1, 1]} x0={x - 44} x1={x + 44} width={2.5} />;
const IconNuc: React.FC<{x: number; y: number; none?: boolean}> = ({x, y, none}) => (
	<g>
		<circle cx={x} cy={y} r={22} fill="none" stroke={none ? '#9a9a9a' : '#5b4d70'} strokeWidth={3} strokeDasharray="8 5" />
		{none ? <path d={`M${x - 20},${y - 20} L${x + 20},${y + 20} M${x + 20},${y - 20} L${x - 20},${y + 20}`} stroke="#8d949b" strokeWidth={4} /> : null}
	</g>
);
const IconPlasmids: React.FC<{x: number; y: number}> = ({x, y}) => <g><Plasmid cx={x - 14} cy={y - 6} r={10} width={3} /><Plasmid cx={x + 16} cy={y + 8} r={10} width={3} /></g>;
export const ICON = {ring: IconRing, rods: IconRods, beads: IconBeads, nuc: IconNuc, plasmids: IconPlasmids};
export const CompareTable: React.FC<{rows: Row[]; at: number; lit?: [number, number, number][]; size?: number; rh?: number; y0?: number; icons?: boolean}> = ({rows, at, lit = [], size = 30, rh = TB.rh, y0 = TB.y0, icons = true}) => {
	const f = useCurrentFrame();
	const xL = TB.x + TB.lw, xR = xL + TB.cl, xE = xR + TB.cr;
	const yH = y0 - TB.hh;
	const yB = y0 + rows.length * rh;
	return (
		<Fade at={at}>
			<rect x={TB.x} y={yH} width={xE - TB.x} height={yB - yH} rx={18} fill="#fffdf8" stroke="rgba(60,45,20,0.25)" strokeWidth={3} />
			{rows.map((r, i) => {
				const l = lit.filter(q => q[0] === i).reduce((a, q) => Math.max(a, prog(f, q[1], 10) * (1 - prog(f, q[2], 10))), 0);
				return l > 0.01 ? <rect key={'l' + i} x={TB.x + 4} y={y0 + i * rh + 4} width={xE - TB.x - 8} height={rh - 8} rx={12} fill="#f6d77a" opacity={0.4 * l} /> : null;
			})}
			<path d={`M${TB.x},${y0} L${xE},${y0} M${xL},${yH} L${xL},${yB} M${xR},${yH} L${xR},${yB}`} stroke="rgba(60,45,20,0.35)" strokeWidth={2.5} />
			{rows.map((_, i) => i ? <path key={i} d={`M${TB.x},${y0 + i * rh} L${xE},${y0 + i * rh}`} stroke="rgba(60,45,20,0.15)" strokeWidth={2} /> : null)}
			<Sx x={xL + 20} y={yH + 46} text="typical prokaryote (e.g. a bacterium)" size={32} color={PLUM} hand at={at} />
			<Sx x={xR + 20} y={yH + 46} text="typical eukaryote" size={32} color={PLUM} hand at={at} />
			{rows.map((r, i) => {
				const yc = y0 + i * rh + rh / 2;
				const cell = (c: Cell, x0: number, w: number) => (
					<g>
						{c.lines.map((t, k) => <Sx key={k} x={x0 + 20} y={yc + (k - (c.lines.length - 1) / 2) * size * 1.15 + size * 0.36} text={t} size={size} color={INK} weight={600} at={c.at} />)}
						{icons && c.icon ? <Fade at={c.at + 4}><g transform={`translate(${x0 + w - 60},${yc})`}>{c.icon}</g></Fade> : null}
					</g>
				);
				return (
					<g key={i}>
						<Sx x={TB.x + 20} y={yc + size * 0.36} text={r.label} size={size + 2} color={INK_SOFT} hand at={r.at} />
						{cell(r.L, xL, TB.cl)}
						{cell(r.R, xR, TB.cr)}
					</g>
				);
			})}
		</Fade>
	);
};
export const tableRows = (t: Record<string, number>, short = false): Row[] => [
	{label: 'nucleus', at: t.r1, L: {lines: ['none'], at: t.l1, icon: <IconNuc x={0} y={0} none />}, R: {lines: ['present'], at: t.e1, icon: <IconNuc x={0} y={0} />}},
	{label: 'main DNA', at: t.r2, L: {lines: [short ? 'one circular chromosome' : 'one ring (circular chromosome)'], at: t.l2, icon: <IconRing x={0} y={0} />}, R: {lines: ['several linear chromosomes'], at: t.e2, icon: <IconRods x={0} y={0} />}},
	{label: 'where', at: t.r3, L: {lines: ['nucleoid, no membrane'], at: t.l3, icon: <IconRing x={0} y={0} />}, R: {lines: ['inside the nucleus'], at: t.e3, icon: <IconNuc x={0} y={0} />}},
	{label: 'packaging', at: t.r4, L: {lines: short ? ['coiled, held by proteins'] : ['in bacteria: coiled, held by', 'proteins, not on histones'], at: t.l4, icon: <IconRing x={0} y={0} coil={1} />}, R: {lines: ['wound on histones: chromatin'], at: t.e4, icon: <IconBeads x={0} y={0} />}},
	{label: 'extra DNA', at: t.r5, L: {lines: ['plasmids'], at: t.l5, icon: <IconPlasmids x={0} y={0} />}, R: {lines: short ? ['rings in mitochondria, chloroplasts'] : ['small rings in mitochondria', 'and chloroplasts'], at: t.e5, icon: <IconRing x={0} y={0} />}},
];

// ---------- 10. Side by side ----------
const H10 = 'side-by-side';
const K10 = cues(S(H10), {put: 'Put it side by side', bact: 'Bacterial DNA is usually', ring: 'one main ring', nucleoid: 'in the nucleoid', nomem: 'no membrane', coiled: 'coiled and held', plus1: 'plus plasmids', euk: 'Eukaryotic DNA is', linear: 'several linear chromosomes', innuc: 'in a nucleus', wound: 'wound on histones', plus2: 'plus small rings', both: 'Both are made', diff: 'The difference is'});
export const SceneSideBySide: React.FC = () => {
	const t = {r1: K10.put + 6, r2: K10.put + 10, r3: K10.put + 14, r4: K10.put + 18, r5: K10.put + 22, l1: K10.bact, l2: K10.ring, l3: K10.nucleoid, l4: K10.coiled, l5: K10.plus1, e1: K10.innuc, e2: K10.linear, e3: K10.innuc + 6, e4: K10.wound, e5: K10.plus2};
	const yB = TB.y0 + 5 * TB.rh;
	return (
		<>
			<Heading text={MAIN_Q} at={-100} size={56} />
			<Overlay>
				<CompareTable rows={tableRows(t)} at={K10.put} lit={[[1, K10.ring, K10.nucleoid], [2, K10.nucleoid, K10.coiled], [3, K10.coiled, K10.plus1], [4, K10.plus1, K10.euk], [1, K10.linear, K10.innuc], [2, K10.innuc, K10.wound], [3, K10.wound, K10.plus2], [4, K10.plus2, K10.both]]} />
				<Fade at={K10.both}>
					<rect x={TB.x} y={yB + 16} width={1728} height={64} rx={14} fill={PLUM} opacity={0.12} stroke={PLUM} strokeWidth={2.5} />
					<Sx x={960} y={yB + 60} text="both: the same double helix, the same four bases" size={36} color={PLUM} weight={700} anchor="middle" at={K10.both} />
				</Fade>
				<Sx x={960} y={1000} text="The difference is the arrangement." size={52} color={AMBER_INK} hand anchor="middle" at={K10.diff} />
			</Overlay>
		</>
	);
};

// ---------- 10b. Writing the comparison ----------
const H10b = 'writing-comparison';
const K10b = cues(S(H10b), {exam: 'In an exam', both: 'both sides in one sentence', notjust: 'Not just bacteria', circ: 'a circular chromosome', whereas: 'whereas', several: 'several linear chromosomes', each: 'Each row of the table', tryr: 'Try the packaging row', coiled: 'coiled and held', whereas2: ['whereas', 2], wound: 'wound on histones'});
export const SceneWriting: React.FC = () => {
	const f = useCurrentFrame();
	const t = {r1: -100, r2: -100, r3: -100, r4: -100, r5: -100, l1: -100, l2: -100, l3: -100, l4: -100, l5: -100, e1: -100, e2: -100, e3: -100, e4: -100, e5: -100};
	const Y1 = 820, Y2 = 890, S1 = 46;
	const a = 'Bacterial DNA is ', b = 'whereas eukaryotic DNA is ';
	const blank = (x: number, y: number, w: number) => <path d={`M${x},${y + 8} L${x + w},${y + 8}`} stroke={INK_SOFT} strokeWidth={3} strokeDasharray="10 8" />;
	const reset = K10b.tryr;
	return (
		<>
			<Heading text="Writing a compare answer" at={4} size={60} />
			<Overlay>
				<CompareTable rows={tableRows(t, true)} at={-100} y0={280} rh={72} size={28} icons={false} lit={[[1, K10b.notjust, reset], [3, reset + 10, 99999]]} />
				<Sx x={96} y={740} text="Both sides in one sentence:" size={40} color={INK_SOFT} hand at={K10b.both} />
				<Fade at={K10b.notjust - 6}>
					<Sx x={96} y={Y1} text={a} size={S1} color={INK} hand at={K10b.notjust - 6} />
					{blank(96 + tw(a, S1, true), Y1, 620)}
					<Sx x={96} y={Y2} text={b} size={S1} color={AMBER_INK} hand at={K10b.notjust - 2} />
					{blank(96 + tw(b, S1, true), Y2, 620)}
				</Fade>
				<Sx x={96 + tw(a, S1, true) + 10} y={Y1} text="a circular chromosome," size={S1} color={PLUM} hand at={K10b.circ} out={reset} />
				<Sx x={96 + tw(b, S1, true) + 10} y={Y2} text="several linear chromosomes." size={S1} color={PLUM} hand at={K10b.several} out={reset} />
				<Sx x={96 + tw(a, S1, true) + 10} y={Y1} text="coiled and held by proteins," size={S1} color={PLUM} hand at={K10b.coiled} />
				<Sx x={96 + tw(b, S1, true) + 10} y={Y2} text="wound on histones as chromatin." size={S1} color={PLUM} hand at={K10b.wound} />
				<Fade at={K10b.notjust} out={K10b.each}>
					<rect x={1240} y={700} width={584} height={64} rx={32} fill="#fffdf8" stroke={INK_SOFT} strokeWidth={3} />
					<Sx x={1270} y={743} text="Bacteria have a ring. (one side only)" size={32} color={INK_SOFT} hand at={K10b.notjust} />
					<DrawPath d="M1250,750 L1814,710" at={K10b.notjust + 14} dur={10} color="#c4432f" width={6} />
				</Fade>
				<Sx x={1240} y={990} text="each row can become a sentence" size={38} color={INK_SOFT} hand at={K10b.each} />
				<Sx x={96} y={990} text={f >= reset ? 'packaging row' : 'main DNA row'} size={36} color={AMBER_INK} hand at={K10b.notjust} />
			</Overlay>
		</>
	);
};

// ---------- 11. Memory ----------
const H11 = 'memory';
const K11 = cues(S(H11), {two: 'Two ways', karyon: 'Karyon is Greek', kernel: 'a kernel', pro: 'Pro means before', before: 'from before the nucleus', eu: 'Eu means good', proper: 'a proper nucleus', truen: 'true nucleus', shapes: 'For shapes', ring: 'bacteria use a ring', lines: 'we use lines', mito: 'but our mitochondria', past: 'bacterial past'});
export const SceneMemory: React.FC = () => {
	const f = useCurrentFrame();
	const u = (x: number, y: number, w: number, at: number) => <DrawPath d={`M${x},${y + 10} L${x + w},${y + 10}`} at={at} dur={12} color={AMBER} width={5} />;
	const L = 420, SZ = 50;
	return (
		<>
			<Heading text="Two ways to keep it straight" at={4} size={60} />
			<Overlay>
				<Sx x={L} y={250} text="karyon = kernel (here, the nucleus)" size={SZ} color={AMBER_INK} hand at={K11.karyon} />
				{u(L, 250, tw('karyon', SZ, true), K11.kernel)}
				<Pl p={PL.bact} x={230} y={388} k={0.15} o={prog(f, K11.pro - 4, 12)} />
				<Sx x={L} y={400} text="pro-karyote: pro = before (no nucleus)" size={SZ} color={INK} hand at={K11.pro} />
				{u(L, 400, tw('pro', SZ, true), K11.before)}
				<g opacity={prog(f, K11.eu - 4, 12)}><Envelope cx={230} cy={530} r={56} width={3.5} /><Rod x1={205} y1={515} x2={250} y2={540} width={3} /></g>
				<Sx x={L} y={550} text="eu-karyote: eu = good, a proper (true) nucleus" size={SZ} color={INK} hand at={K11.eu} />
				{u(L, 550, tw('eu', SZ, true), K11.proper)}
				<Sx x={L} y={620} text="same word family: nucleoid = nucleus-like" size={34} color={INK_SOFT} hand at={K11.truen + 10} />
				{/* shapes */}
				<g opacity={prog(f, K11.ring - 4, 12)}><DnaRing cx={300} cy={780} rx={70} ry={34} width={5} /></g>
				<Sx x={300} y={900} text="bacteria: ring" size={46} color={PLUM} hand anchor="middle" at={K11.ring} />
				<g opacity={prog(f, K11.lines - 4, 12)}><Envelope cx={900} cy={780} r={80} width={3.5} /><Rod x1={850} y1={750} x2={930} y2={735} width={4} /><Rod x1={860} y1={790} x2={950} y2={800} width={4} /><Rod x1={880} y1={825} x2={920} y2={760} width={4} /></g>
				<Sx x={900} y={900} text="us: lines, in a nucleus" size={46} color={PLUM} hand anchor="middle" at={K11.lines} />
				<Pl p={PL.mito} x={1500} y={780} k={0.15} o={prog(f, K11.mito - 4, 12)} />
				<g opacity={prog(f, K11.mito + 4, 12)}><DnaRing cx={1500} cy={780} rx={36} ry={22} width={4} /></g>
				<Sx x={1500} y={900} text="a ring kept in mitochondria" size={44} color={PLUM} hand anchor="middle" at={K11.mito + 6} />
				<Sx x={1500} y={950} text="(and chloroplasts): bacterial past" size={34} color={INK_SOFT} hand anchor="middle" at={K11.past} />
			</Overlay>
		</>
	);
};
void Grips; void Hand; void INK; void AMBER;
