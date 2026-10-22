// M6 B18 scenes 5 to 9: put in (cold calcium chloride helps DNA stick, a quick heat shock lets it in: transformation,
// and only a few cells take a plasmid); pick (two plates from one tube grow side by side, only bacteria with a plasmid
// grow on antibiotic, a second check finds the colonies with the gene, each is a clone); use it (a promoter the host
// recognises, the shared code read the same by two ribosomes, insulin's two chains made apart and joined, fermenters);
// plants (the cell wall and the chromosomes, Agrobacterium as the carrier, Bt cotton grown from transformed cells,
// transgenic); memory.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Heading, Overlay, QMark} from '../bio-m5-b13/shared';
import {GTag} from '../bio-m6-b01/parts';
import {GreyCross, ScribbleRing, Tg, TickG} from '../bio-m6-b07/parts';
import {S} from './common';
import {COLONIES, HAS_INSERT, PT} from './assets';
import {Term} from './s1';
import {
	AMBER, AMBER_INK, Arr, Bact, BreedIcon, Chain, Colonies, DivTree, DrawPath, GREYT, GREY_INK, INK, INK_SOFT, LigBlob, MRNA, Overhang, PLATES, Pl, PolBean, REBlob,
	RED_BROWN, RecRing, RiboG, Seed, Snow, Sx, TEAL, Track, Tube, clamp01, lerp, platePt, prog, ringPt, smooth, vis,
} from './parts';

const pp = platePt;

// ---------- 5. Put in ----------
const K5 = cues(S('put-in'), {easily: 'plasmids easily', chill: 'chill them in', stick: 'stick to the cell', add: 'add the plasmids', shock: 'quick heat shock', lets: 'briefly lets DNA', transformation: 'called transformation', fraction: 'small fraction'});
const FEW = [4, 13, 22];
export const ScenePutIn: React.FC = () => {
	const f = useCurrentFrame();
	const bath = {cx: 430, cy: 640, w: 520};
	const tube = pp(PLATES.bath, bath.cx, bath.cy, bath.w, PT.tube[0], PT.tube[1]);
	const shock = vis(f, K5.shock, K5.shock + 46, 6);
	const up = {cx: 1360, cy: 540, w: 640};
	const upO = vis(f, K5.lets - 6, K5.fraction - 6, 12);
	return (
		<>
			<Heading text="Put in" at={4} size={56} />
			<Overlay>
				<Track n={5} active={3} o={prog(f, 0, 12)} />
				<Pl p={PLATES.bath} cx={bath.cx} cy={bath.cy} w={bath.w} o={prog(f, 4, 14)} />
				{shock > 0.01 ? <circle cx={tube[0]} cy={tube[1]} r={46} fill="#e0603a" opacity={0.35 * shock} /> : null}
				<Snow x={760} y={690} s={0.9} o={vis(f, K5.chill, K5.shock, 10)} />
				<GTag x={720} y={740} text="cold + CaCl₂" at={K5.chill + 6} out={K5.shock} size={26} />
				<Tg x={720} y={830} text="42 °C, under a minute" at={K5.shock + 4} out={K5.lets + 30} size={36} />
				<GTag x={720} y={740} text="cold" at={K5.lets + 30} size={26} />
				{/* the rings drop into the tube */}
				{[0, 1, 2].map(k => {
					const t = smooth(prog(f, K5.add + 4 + k * 8, 22));
					return <RecRing key={k} cx={tube[0] - 14 + k * 14} cy={lerp(tube[1] - 260, tube[1] - 10, t)} r={10} sw={4} insert={1} o={t > 0.01 ? 1 - prog(f, K5.add + 40 + k * 8, 10) : 0} />;
				})}
				{/* inset: DNA sticks to the cell surface */}
				<g opacity={vis(f, K5.stick - 6, K5.lets, 12)}>
					<rect x={880} y={290} width={400} height={260} rx={20} fill="#fffdf8" stroke="rgba(60,45,20,0.22)" strokeWidth={2.5} />
					<Bact cx={1090} cy={440} w={300} />
					{[0, 1, 2, 3].map(k => {
						const t = smooth(prog(f, K5.stick + 4 + k * 6, 24));
						return <RecRing key={k} cx={980 + k * 50} cy={lerp(320, 410 + (k % 2) * 6, t)} r={11} sw={4} insert={1} o={prog(f, K5.stick + k * 6, 8)} />;
					})}
				</g>
				{/* into the cell */}
				<g opacity={upO}>
					<Pl p={PLATES.upStart} cx={up.cx} cy={up.cy} w={up.w} o={1 - prog(f, K5.lets + 16, 20)} />
					<Pl p={PLATES.upEnd} cx={up.cx} cy={up.cy} w={up.w} o={prog(f, K5.lets + 16, 20)} />
				</g>
				<Term x={880} y={860} term="transformation" gloss="a cell taking up DNA" at={K5.transformation} out={K5.fraction} />
				{/* only a few take one up */}
				{Array.from({length: 30}, (_, i) => {
					const x = 980 + (i % 6) * 140 + (Math.floor(i / 6) % 2) * 40, y = 330 + Math.floor(i / 6) * 96;
					const has = FEW.includes(i);
					return <Bact key={i} cx={x} cy={y} w={100} ring={has ? 'new' : undefined} ringO={has ? prog(f, K5.fraction + 24 + FEW.indexOf(i) * 8, 10) : 0} grey={has ? 0 : 0.5 * prog(f, K5.fraction + 40, 12)} o={prog(f, K5.fraction - 4 + (i % 6) * 2, 10)} />;
				})}
				<Tg x={880} y={900} text="only a few take one up" at={K5.fraction + 30} size={38} />
				{void K5.easily}{void AMBER}{void INK}
			</Overlay>
		</>
	);
};

// ---------- 6. Pick ----------
const K6 = cues(S('pick'), {spread: 'Spread the bacteria', agar: 'agar containing the', only: 'Only bacteria carrying', grow: 'grow into colonies', but: "surviving doesn't prove", close: 'close up without', second: 'second check', finds: 'finds the colonies', clone: 'colonies is a clone'});
export const ScenePick: React.FC = () => {
	const f = useCurrentFrame();
	const g = prog(f, K6.grow, 60, x => x);
	const m = smooth(prog(f, K6.but - 14, 26));
	const L = {cx: 620, cy: 650, w: 420};
	const R = {cx: lerp(1300, 960, m), cy: 650, w: lerp(420, 520, m)};
	const leftO = 1 - prog(f, K6.but - 14, 16);
	const col = (i: number) => pp(PLATES.plateFew, R.cx, R.cy, R.w, COLONIES[i][0], COLONIES[i][1]);
	const ringO = prog(f, K6.grow + 50, 12) * (1 - prog(f, K6.second, 12));
	const pulseI = 5;
	const pc = col(pulseI);
	const pulse = vis(f, K6.clone, K6.clone + 70, 8) * (0.5 + 0.5 * Math.sin((f - K6.clone) / 4));
	return (
		<>
			<Heading text="Pick" at={4} size={56} />
			<Overlay>
				<Track n={5} active={4} o={prog(f, 0, 12)} />
				<Tube x={960} y={340} s={0.75} o={prog(f, 4, 12) * (1 - prog(f, K6.but - 14, 14))} />
				<Arr a={[920, 400]} b={[700, 450]} at={K6.spread + 6} o={1 - prog(f, K6.grow, 14)} />
				<Arr a={[1000, 400]} b={[1220, 450]} at={K6.spread + 10} o={1 - prog(f, K6.grow, 14)} />
				<g opacity={leftO * prog(f, K6.spread + 10, 14)}>
					<Pl p={PLATES.plateEmpty} cx={L.cx} cy={L.cy} w={L.w} dim={prog(f, K6.grow + 64, 14)} />
					<Pl p={PLATES.plateCrowd} cx={L.cx} cy={L.cy} w={L.w} o={g} dim={prog(f, K6.grow + 64, 14)} />
				</g>
				<GTag x={L.cx} y={880} text="no antibiotic" at={K6.spread + 14} out={K6.but - 14} size={26} anchor="middle" />
				<g opacity={prog(f, K6.spread + 14, 14)}>
					<Pl p={PLATES.plateEmpty} cx={R.cx} cy={R.cy} w={R.w} />
					<Pl p={PLATES.plateFew} cx={R.cx} cy={R.cy} w={R.w} o={g} />
				</g>
				<Tg x={1300} y={910} text="with antibiotic" at={K6.agar} out={K6.grow + 40} size={36} anchor="middle" />
				{/* survivors carry a plasmid */}
				{COLONIES.map((_, i) => {
					const [x, y] = col(i);
					return <RecRing key={i} cx={x + 22} cy={y - 18} r={8} sw={3} o={ringO} insert={0} />;
				})}
				<Tg x={960} y={970} text="survivors carry a plasmid" at={K6.grow + 54} out={K6.but} size={36} anchor="middle" />
				{/* but a plasmid may have closed up without the gene */}
				<g opacity={vis(f, K6.but + 6, K6.clone, 12)}>
					<rect x={1500} y={360} width={220} height={190} rx={18} fill="#fffdf8" stroke="rgba(60,45,20,0.22)" strokeWidth={2.5} />
					<RecRing cx={1610} cy={455} r={56} insert={1} marker={1} />
					<rect x={1500} y={600} width={220} height={190} rx={18} fill="#fffdf8" stroke="rgba(60,45,20,0.22)" strokeWidth={2.5} />
					<RecRing cx={1610} cy={695} r={56} marker={1} empty />
				</g>
				<QMark x={R.cx} y={R.cy - R.w / 2 - 6} size={70} color={GREY_INK} o={vis(f, K6.but + 10, K6.second, 10)} />
				<Tg x={960} y={970} text="plasmid, but gene?" at={K6.but + 14} out={K6.second} size={36} anchor="middle" />
				{/* the second check */}
				{COLONIES.map((_, i) => {
					const [x, y] = col(i);
					const at = K6.second + 10 + i * 3;
					return HAS_INSERT.includes(i) ? <TickG key={i} x={x + 2} y={y - 2} at={at} s={30} /> : <GreyCross key={i} x={x} y={y} at={at} s={14} />;
				})}
				<Sx x={960} y={970} text="second marker, or read the DNA" size={28} color={GREY_INK} hand anchor="middle" at={K6.second + 14} out={K6.clone} />
				{/* each is a clone */}
				<circle cx={pc[0]} cy={pc[1]} r={30} fill={AMBER} opacity={0.4 * pulse} />
				<line x1={pc[0] - 20} y1={pc[1]} x2={420} y2={650} stroke={GREYT} strokeWidth={2} strokeDasharray="5 5" opacity={prog(f, K6.clone + 10, 10)} />
				<DivTree x0={200} y={650} h={360} dx={70} t={prog(f, K6.clone + 14, 60, x => x) * 3} levels={3} w0={80} o={prog(f, K6.clone + 10, 10)} />
				<Tg x={140} y={900} text="a clone of one transformed cell" at={K6.clone + 16} size={34} />
				{void K6.only}{void K6.close}{void K6.finds}{void clamp01}
			</Overlay>
		</>
	);
};

// ---------- 7. Use it ----------
const K7 = cues(S('use-it'), {promoter: 'a promoter that', recog: 'polymerase recognises', reads: 'reads it like one', shared: 'the genetic code is shared', codons: 'same codons mean', first: 'The first insulin', chains: 'two chains separately', joined: 'joined them into insulin', today: 'Today, huge tanks'});
export const SceneUse: React.FC = () => {
	const f = useCurrentFrame();
	const R = {cx: 430, cy: 580, r: 180};
	const ringO = prog(f, 4, 14) * (1 - prog(f, K7.first, 14));
	const bean = smooth(prog(f, K7.recog, 24));
	const pb = ringPt(R.cx, R.cy, R.r + 40, -121);
	const top = ringPt(R.cx, R.cy, R.r, -90);
	const codeO = vis(f, K7.shared - 4, K7.first, 12);
	const bactO = prog(f, K7.chains - 10, 12) * (1 - prog(f, K7.today + 30, 14));
	const join = smooth(prog(f, K7.joined + 6, 26));
	const drop = smooth(prog(f, K7.joined + 40, 24));
	const ch = (y0: number, n: number, k: number) => {
		const out = smooth(prog(f, K7.chains + 8 + k * 12, 30));
		const x = lerp(420, 520, out);
		const xj = lerp(x, 760, join), yj = lerp(y0, 560 + k * 34, join);
		return <Chain key={k} x={lerp(xj, 1050, drop)} y={lerp(yj, 640 + k * 10, drop)} n={n} r={lerp(12, 5, drop)} gap={lerp(26, 10, drop)} o={prog(f, K7.chains + 8 + k * 12, 8) * (1 - prog(f, K7.joined + 60, 10))} />;
	};
	const fer = {cx: 1560, cy: 600, w: 380};
	const win = pp(PLATES.fermenter, fer.cx, fer.cy, fer.w, PT.window[0], PT.window[1]);
	return (
		<>
			<Heading text="Use it" at={4} size={56} />
			<Overlay>
				<Track n={6} active={5} slide6={prog(f, 0, 20)} o={prog(f, 0, 12)} />
				<g opacity={ringO}>
					<RecRing cx={R.cx} cy={R.cy} r={R.r} insert={1} marker={0.6} promoter={1} promLit={vis(f, K7.promoter, K7.shared, 10)} />
					<PolBean x={pb[0]} y={lerp(pb[1] - 120, pb[1], bean)} s={0.9} o={prog(f, K7.recog, 10)} />
					{f >= K7.reads ? <DrawPath d={`M${top[0] + 10},${top[1] - 10} C${top[0] + 120},${top[1] - 120} ${720},${560} ${830},${480}`} at={K7.reads} dur={24} color={MRNA} width={8} /> : null}
					<RiboG x={880} y={480} s={0.8} o={prog(f, K7.reads + 16, 12)} />
				</g>
				<Term x={720} y={330} term="promoter" gloss="where RNA polymerase starts" at={K7.promoter} out={K7.shared} />
				{/* the shared code */}
				<g opacity={codeO}>
					<rect x={1270} y={430} width={170} height={70} rx={16} fill="#fffdf8" stroke={AMBER} strokeWidth={3} />
					{['#e9b8a0', '#c8dca0', '#e4d08a'].map((c, k) => <rect key={k} x={1288 + k * 48} y={446} width={38} height={38} rx={8} fill={c} stroke="rgba(60,45,20,0.35)" strokeWidth={1.5} />)}
					<Sx x={1355} y={412} text="one codon" size={24} color={GREY_INK} hand anchor="middle" />
					<RiboG x={1160} y={620} s={0.9} />
					<RiboG x={1550} y={620} s={0.9} tint="#e3cfc0" />
					<Sx x={1160} y={700} text="bacterium" size={24} color={GREY_INK} hand anchor="middle" />
					<Sx x={1550} y={700} text="human cell" size={24} color={GREY_INK} hand anchor="middle" />
					<line x1={1300} y1={505} x2={1200} y2={570} stroke={INK_SOFT} strokeWidth={3} />
					<line x1={1410} y1={505} x2={1510} y2={570} stroke={INK_SOFT} strokeWidth={3} />
					<circle cx={1240} cy={640} r={16} fill="#e8b48a" stroke="#a8704a" strokeWidth={2.5} opacity={prog(f, K7.codons + 10, 10)} />
					<circle cx={1630} cy={640} r={16} fill="#e8b48a" stroke="#a8704a" strokeWidth={2.5} opacity={prog(f, K7.codons + 10, 10)} />
				</g>
				<Tg x={1110} y={790} text="same codons, same amino acids" at={K7.codons + 12} out={K7.first} size={36} />
				{/* insulin: two chains made apart, then joined */}
				<g opacity={bactO}>
					<Bact cx={300} cy={450} w={220} />
					<Bact cx={300} cy={700} w={220} />
				</g>
				{ch(450, 5, 0)}
				{ch(700, 8, 1)}
				{[0, 1].map(k => <line key={k} x1={800 + k * 60} y1={566} x2={800 + k * 60} y2={588} stroke={AMBER_INK} strokeWidth={4} opacity={vis(f, K7.joined + 26, K7.joined + 40, 6)} />)}
				<Pl p={PLATES.vial} cx={1080} cy={620} w={100} o={prog(f, K7.joined + 20, 12) * (1 - prog(f, K7.today + 30, 14))} />
				<Tg x={200} y={900} text="chains made apart, then joined" at={K7.joined + 10} out={K7.today + 10} size={36} />
				{/* fermenters */}
				<Pl p={PLATES.fermenter} cx={fer.cx} cy={fer.cy} w={fer.w} o={prog(f, K7.today, 14)} />
				<g opacity={prog(f, K7.today + 14, 12)}>
					<circle cx={win[0] - 210} cy={win[1]} r={90} fill="#f6efd8" stroke={INK_SOFT} strokeWidth={3} />
					<line x1={win[0] - 120} y1={win[1]} x2={win[0] - 32} y2={win[1]} stroke={GREYT} strokeWidth={2} strokeDasharray="5 5" />
					{Array.from({length: 7}, (_, k) => {
						const a = (f - K7.today) / 30 + k * 0.9;
						const rr = 28 + (k % 3) * 18;
						return <Bact key={k} cx={win[0] - 210 + Math.cos(a) * rr} cy={win[1] + Math.sin(a) * rr} w={44} />;
					})}
				</g>
				<GTag x={fer.cx} y={980} text="fermenters" at={K7.today + 16} size={26} anchor="middle" />
				{void TEAL}
			</Overlay>
		</>
	);
};

// ---------- 8. Plants need a different carrier ----------
const K8 = cues(S('plants'), {wall: 'tough cell wall', chrom: "plant's own chromosomes", agro: 'called Agrobacterium', inserts: 'inserts a piece', remove: 'remove its disease-causing', useful: 'useful gene in', bt: 'Bt cotton was', gene: 'A gene for a', grown: 'grown into whole plants', every: 'Every cell of', seeds: 'in their seeds', transgenic: 'is transgenic'});
export const ScenePlants: React.FC = () => {
	const f = useCurrentFrame();
	const cell = {cx: 480, cy: 620, w: 380};
	const W0 = pp(PLATES.plantCell, cell.cx, cell.cy, cell.w, 190, 230), W1 = pp(PLATES.plantCell, cell.cx, cell.cy, cell.w, 1340, 1780);
	const nuc = pp(PLATES.plantCell, cell.cx, cell.cy, cell.w, PT.nucleus[0], PT.nucleus[1]);
	const nr = (175 * cell.w) / 1264;
	const ag = {cx: 1000, cy: 470, w: 300};
	const agO = prog(f, K8.agro - 4, 14) * (1 - prog(f, K8.bt, 14));
	const tr = smooth(prog(f, K8.inserts + 10, 40));
	const from: [number, number] = [ag.cx - 170, ag.cy];
	const to: [number, number] = [nuc[0] + 6, nuc[1] + 10];
	const trX = lerp(from[0], to[0], tr), trY = lerp(from[1], to[1], tr) - Math.sin(tr * Math.PI) * 90;
	const lift = smooth(prog(f, K8.remove + 8, 24));
	const slideIn = smooth(prog(f, K8.useful, 24));
	const stripO = prog(f, K8.remove - 4, 12) * (1 - prog(f, K8.bt + 30, 14));
	const cot = {cx: 1600, cy: 580, w: 330};
	const jarsO = prog(f, K8.grown, 14);
	return (
		<>
			<Heading text="Plants need a different carrier" at={4} size={56} />
			<Overlay>
				<Track n={5} active={3} plant o={prog(f, 0, 12)} />
				<Pl p={PLATES.plantCell} cx={cell.cx} cy={cell.cy} w={cell.w} o={prog(f, 4, 14)} />
				<rect x={W0[0]} y={W0[1]} width={W1[0] - W0[0]} height={W1[1] - W0[1]} rx={16} fill="none" stroke={AMBER} strokeWidth={6} opacity={vis(f, K8.wall, K8.chrom + 10, 10) * (0.6 + 0.4 * Math.sin((f - K8.wall) / 4))} />
				<GTag x={cell.cx} y={900} text="cell wall" at={K8.wall + 6} out={K8.chrom} size={26} anchor="middle" />
				<ScribbleRing cx={nuc[0]} cy={nuc[1]} rx={nr + 14} ry={nr + 14} at={K8.chrom} out={K8.agro + 40} seed={3} />
				<g opacity={prog(f, K8.chrom + 6, 12)}>
					{[[-22, -14, 30], [8, -20, -20], [-10, 14, -40], [18, 12, 25]].map(([dx, dy, a], i) => {
						const r = (a * Math.PI) / 180;
						return <line key={i} x1={nuc[0] + dx - Math.cos(r) * 16} y1={nuc[1] + dy - Math.sin(r) * 16} x2={nuc[0] + dx + Math.cos(r) * 16} y2={nuc[1] + dy + Math.sin(r) * 16} stroke="#7a4a8c" strokeWidth={6} strokeLinecap="round" />;
					})}
				</g>
				<GTag x={cell.cx} y={900} text="into the chromosomes" at={K8.chrom + 6} out={K8.agro + 30} size={26} anchor="middle" />
				{/* Agrobacterium carries DNA into the chromosomes */}
				<g opacity={agO}>
					<g style={{filter: 'hue-rotate(70deg) saturate(0.7)'}}><Pl p={PLATES.bact} cx={ag.cx} cy={ag.cy} w={ag.w} /></g>
					<RecRing cx={from[0] + 10} cy={from[1]} r={18} sw={5} />
				</g>
				<Term x={800} y={330} term="Agrobacterium" gloss="a soil bacterium that puts DNA into plant chromosomes" at={K8.agro} out={K8.bt} />
				<rect x={trX - 16} y={trY - 6} width={32} height={12} rx={5} fill={TEAL} opacity={f >= K8.inserts + 10 ? 1 - 0.5 * prog(f, K8.bt, 12) : 0} />
				{/* disease genes out, useful gene in */}
				<g opacity={stripO}>
					<rect x={880} y={690} width={120} height={22} rx={8} fill={TEAL} />
					<rect x={1000} y={lerp(690, 620, lift)} width={110} height={22} rx={8} fill={RED_BROWN} opacity={1 - lift} />
					<rect x={lerp(1260, 1000, slideIn)} y={690} width={110} height={22} rx={8} fill={AMBER} opacity={prog(f, K8.useful, 8)} />
					<rect x={1110} y={690} width={120} height={22} rx={8} fill={TEAL} />
				</g>
				<Tg x={880} y={790} text="disease genes out, useful gene in" at={K8.useful + 10} out={K8.bt + 30} size={36} />
				{/* Bt cotton */}
				<Pl p={PLATES.cotton} cx={cot.cx} cy={cot.cy} w={cot.w} o={prog(f, K8.bt - 4, 14)} glow={vis(f, K8.every, K8.transgenic, 12)} />
				<GTag x={cot.cx} y={830} text="gene from Bacillus thuringiensis" at={K8.gene + 10} out={K8.every} size={24} anchor="middle" />
				<g opacity={jarsO}>
					<Pl p={PLATES.jars} cx={1110} cy={640} w={320} />
				</g>
				<Arr a={[700, 640]} b={[930, 640]} at={K8.grown + 6} />
				<Arr a={[1280, 640]} b={[1420, 640]} at={K8.grown + 14} />
				<Sx x={1110} y={760} text="transformed cells selected with a marker, grown into plants" size={24} color={GREY_INK} hand anchor="middle" at={K8.grown + 16} />
				<Seed x={1600} y={880} o={prog(f, K8.every + 10, 12)} lit={prog(f, K8.seeds, 12)} />
				<Tg x={1210} y={950} text="in every cell, and in the seeds" at={K8.seeds} size={36} />
				<Term x={800} y={330} term="transgenic" gloss="DNA from another species, inserted" at={K8.transgenic} />
				{/* silent grey contrast during the hold */}
				<BreedIcon x={140} y={960} o={0.8 * prog(f, K8.transgenic + 36, 14)} />
				<GTag x={380} y={975} text="breeding: only parents that can interbreed" at={K8.transgenic + 40} size={22} />
				{void INK}{void clamp01}
			</Overlay>
		</>
	);
};

// ---------- 9. Memory ----------
const K9 = cues(S('memory'), {cut: 'cut, paste', paste: 'paste, put', putin: 'put in, pick', pick: ['pick', 1], cutwith: 'Cut with a', pastewith: 'paste with ligase', putthe: 'put the plasmid', pickthe: 'pick the hosts', matching: 'matching sticky ends'});
export const SceneMemory: React.FC = () => {
	const f = useCurrentFrame();
	const WORDS = [{t: 'Cut,', at: K9.cut, p: K9.cutwith}, {t: 'paste,', at: K9.paste, p: K9.pastewith}, {t: 'put in,', at: K9.putin, p: K9.putthe}, {t: 'pick.', at: K9.pick, p: K9.pickthe}];
	const X = [200, 640, 1080, 1520];
	const pulse = (a: number, b: number) => vis(f, a, b, 8) * (0.5 + 0.5 * Math.sin((f - a) / 4));
	return (
		<>
			<Heading text="The whole method" at={4} size={56} />
			<Overlay>
				<Track n={5} allLit={1} o={prog(f, 0, 12)} />
				{WORDS.map((w, i) => {
					const next = i < 3 ? WORDS[i + 1].p : K9.matching - 20;
					const gl = pulse(w.p, next);
					return (
						<g key={i}>
							<Sx x={X[i]} y={430} text={w.t} size={76} color={INK} hand at={w.at} />
							<circle cx={X[i] + 90} cy={580} r={90} fill={AMBER} opacity={0.25 * gl} />
						</g>
					);
				})}
				<REBlob x={X[0] + 80} y={580} s={1.2} open={0.5} o={prog(f, K9.cut, 12)} />
				<LigBlob x={X[1] + 90} y={580} s={1.2} o={prog(f, K9.paste, 12)} />
				<g opacity={prog(f, K9.putin, 12)}>
					<Bact cx={X[2] + 110} cy={590} w={220} />
					<RecRing cx={X[2] + 30} cy={540} r={20} sw={5} insert={1} />
				</g>
				<g opacity={prog(f, K9.pick, 12)}>
					<Pl p={PLATES.dish} cx={X[3] + 90} cy={580} w={170} />
					<Colonies cx={X[3] + 90} cy={580} R={70} n={6} t={1} r={8} />
				</g>
				<Sx x={200} y={810} text="Same enzyme, matching sticky ends." size={62} color={AMBER_INK} hand at={K9.matching} />
				<g opacity={prog(f, K9.matching + 10, 12)}>
					<Overhang x={1420} y={760} start={4} s={0.9} />
					<Overhang x={1420} y={822} start={4} comp s={0.9} />
				</g>
				<Sx x={200} y={870} text="(or any enzyme pair that leaves matching ends)" size={30} color={GREY_INK} hand at={K9.matching + 30} />
				{void RED_BROWN}
			</Overlay>
		</>
	);
};
