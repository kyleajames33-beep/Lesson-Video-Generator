import React from 'react';
import {useCurrentFrame} from 'remotion';
import {HandText} from '../../kit';
import {cues} from '../../cues';
import {
	AMBER, AMBER_INK, Cam, CH, Chip, CX, CY, DrawPath, FONT_DISPLAY, FONT_HAND, GreyTag, Hand, Heading,
	INK, INK_SOFT, lerp, NUC_X, RX, RY, Overlay, PlateArt, PLATES, plateAt, PLUM, prog, S, Scribble, vis,
	PImg, P_ZOOM,
} from './shared';
import type {BPlate} from './shared';
import {CD, Dissolve, HCell, HChrom, Panel, PL, SPREAD, Stage, usePlates} from './cd';
import type {HCol} from './cd';

const PLUM_INK = '#7e3a69';
const TEAL_INK = '#1f7a6f';

// ---------- 1. Hook: a graze heals ----------
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('hook'), {
		fill: 'new skin has filled', same: 'the same instructions', beside: 'the cells beside it', n46: '46', dna: 'the DNA packages',
		half: 'only half the job', copies: 'the copies still', shared: 'shared out', how: 'How does', keepEvery: 'keep every', parentS: "parent's",
	});
	const PX = 200, PY = 215, PW = 1520;
	const pa = plateAt(PLATES.skin, PX, PY, PW);
	const slide = prog(f, c.fill - 6, 44);
	const divide = prog(f, c.fill + 36, 30);
	const heal = prog(f, c.fill + 40, 44);
	const L0 = pa(845, 420), L1 = pa(920, 428), R0 = pa(1105, 452), R1 = pa(1040, 428);
	const lx = lerp(L0[0], L1[0], slide), ly = lerp(L0[1], L1[1], slide);
	const rx = lerp(R0[0], R1[0], slide), ry = lerp(R0[1], R1[1], slide);
	const CR = 34;
	const dx = 36 * divide;
	const gap = [[858, 392], [900, 400], [985, 418], [1060, 408], [1120, 392], [1128, 440], [1080, 472], [985, 482], [900, 472], [860, 440]].map(([a, b]) => pa(a, b));
	const gapD = 'M' + gap.map(p => p.join(',')).join(' L') + ' Z';
	const S1 = pa(950, 428), S2 = pa(1010, 428);
	// revision 7: one label centred above the two new cells, the subline under it, short leaders down (the two
	// "46 chromosomes" labels and "the DNA packages" overlapped each other and the cells)
	const LX = (S1[0] + S2[0]) / 2, LAB_Y = 96;
	const camO = 1 - prog(f, c.half + 36, 30);
	const insideO = prog(f, c.half + 40, 30);
	const labO = 1 - prog(f, c.half - 24, 10);
	return (
		<>
			<div style={{opacity: camO * prog(f, 0, 20), position: 'absolute', inset: 0}}>
				<Cam keys={[[0, 1, 960, 540], [c.half - 8, 1, 960, 540], [c.half + 56, 2.4, S1[0], S1[1]]]}>
					<PlateArt a={PLATES.skin} x={PX} y={PY} w={PW} />
					<Overlay>
						<path d={gapD} fill="#f2c9a8" opacity={heal * 0.96} />
						<g>
							{/* the left cell slides in, then divides into two */}
							{[[lx, ly], [rx, ry]].map(([x, y], k) => (
								<g key={k}>
									<g opacity={slide}>
										<ellipse cx={x - dx} cy={y} rx={CR} ry={CR * 0.92 - 2 * divide} fill="none" stroke="#8e7aa9" strokeWidth={7} />
										<ellipse cx={x + dx} cy={y} rx={CR} ry={CR * 0.92 - 2 * divide} fill="none" stroke="#8e7aa9" strokeWidth={7} />
									</g>
									<g opacity={slide}>
										<ellipse cx={x - dx} cy={y} rx={CR} ry={CR * 0.92 - 2 * divide} fill="#e2d9ee" />
										<ellipse cx={x + dx} cy={y} rx={CR} ry={CR * 0.92 - 2 * divide} fill="#e2d9ee" />
										<circle cx={x - dx} cy={y} r={CR * 0.31} fill="#9b7cc4" stroke="#6a4c93" strokeWidth={2.5} />
										<circle cx={x + dx} cy={y} r={CR * 0.31} fill="#9b7cc4" stroke="#6a4c93" strokeWidth={2.5} />
									</g>
								</g>
							))}
						</g>
						<Scribble cx={S1[0]} cy={S1[1]} rx={46} ry={42} at={c.same} color={AMBER_INK} seed={5} />
						<Scribble cx={S2[0]} cy={S2[1]} rx={46} ry={42} at={c.beside} color={AMBER_INK} seed={9} />
						<g opacity={labO}>
							<DrawPath d={`M${LX - 26},${LAB_Y + 116} L${S1[0] - 6},${S1[1] - 48}`} at={c.n46 + 4} dur={10} color={AMBER_INK} width={4} />
							<DrawPath d={`M${LX + 26},${LAB_Y + 116} L${S2[0] + 6},${S2[1] - 48}`} at={c.n46 + 10} dur={10} color={AMBER_INK} width={4} />
						</g>
					</Overlay>
					<Hand at={c.n46} out={c.half - 20} x={LX - 300} y={LAB_Y} size={54} w={600}><span style={{display: 'block', textAlign: 'center'}}>46 chromosomes</span></Hand>
					<Hand at={c.dna} out={c.half - 20} x={LX - 300} y={LAB_Y + 60} size={38} w={600} color={INK_SOFT}><span style={{display: 'block', textAlign: 'center'}}>the DNA packages</span></Hand>
					<GreyTag at={c.fill + 10} out={c.same + 30} x={330} y={150} text="cells move in and divide" size={34} />
					<GreyTag at={c.fill + 40} out={c.half + 30} x={1330} y={64} text="skin cells, simplified" size={34} />
				</Cam>
			</div>
			{/* inside one new skin cell (revision 7): the painted nucleus close-up, chromatin painted at scale, then two new cells */}
			<div style={{opacity: insideO, position: 'absolute', inset: 0}}>
				<Overlay>
					<Stage cam={{zoom: lerp(0.84, 1, prog(f, c.half + 40, 60)), fx: 1000, fy: 1000}} base={{cx: 800, cy: 610, size: 720}} win={null} srcs={[CD('nucleus-zoom'), CD('daughters')]}>
						<Dissolve a={CD('nucleus-zoom')} b={CD('daughters')} t={prog(f, c.shared - 2, 34)} />
					</Stage>
				</Overlay>
				<GreyTag at={c.half + 50} out={c.shared - 6} x={1290} y={300} text="inside one new skin cell" size={34} />
				<Hand at={c.copies} out={c.how - 6} x={1290} y={390} size={46} w={520}>the DNA is copied first</Hand>
				<Hand at={c.shared} out={c.how - 6} x={1290} y={470} size={46} w={520}>then shared out into two cells</Hand>
			</div>
			<div style={{position: 'absolute', left: 96, top: 92, opacity: f >= c.how ? 1 : 0}}><HandText text="How does a cell divide so that both new cells" at={c.how} size={56} cps={(45 * 30) / (c.keepEvery - c.how)} /></div>
			<div style={{position: 'absolute', left: 96, top: 160, opacity: f >= c.keepEvery ? 1 : 0}}><HandText text="keep every chromosome, an exact copy of the parent's?" at={c.keepEvery} size={56} cps={(53 * 30) / (c.parentS - c.keepEvery + 24)} /></div>
		</>
	);
};

// ---------- 2a zoom-out recall (visual only, revision 6): bases, helix, nucleosomes, fibre, chromosome ----------
const ZOOM: {p: BPlate; label: string}[] = [
	{p: P_ZOOM.bases, label: 'bases, paired'},
	{p: P_ZOOM.helix, label: 'the double helix'},
	{p: P_ZOOM.nucleosomes, label: 'wound around proteins'},
	{p: P_ZOOM.fibre, label: 'coiled into a fibre'},
	{p: P_ZOOM.chromosome, label: 'packed: a chromosome'},
];
const ZC: [number, number] = [560, 540];
/** Fit a plate inside maxW x maxH around ZC. */
const zfit = (p: BPlate, maxW = 440, maxH = 520) => {
	const k = Math.min(maxW / p.box[2], maxH / p.box[3]);
	return {w: p.box[2] * k, h: p.box[3] * k};
};
const ZoomRecall: React.FC<{at: number[]}> = ({at}) => {
	const f = useCurrentFrame();
	const T = 22;
	return (
		<>
			<Overlay>
				{ZOOM.map((z, i) => {
					const inP = i === 0 ? prog(f, at[0], 14) : prog(f, at[i], T);
					const outP = i < ZOOM.length - 1 ? prog(f, at[i + 1], T) : 0;
					const o = inP * (1 - outP);
					if (o <= 0.01) return null;
					// zooming out: each picture arrives large and settles, then shrinks away into the next
					const k = (i === 0 ? 1 : lerp(1.7, 1, inP)) * lerp(1, 0.28, outP);
					const {w, h} = zfit(z.p, i === 2 ? 520 : 440);
					return (
						<g key={i} transform={`translate(${ZC[0]},${ZC[1]}) scale(${k}) translate(${-ZC[0]},${-ZC[1]})`}>
							<PImg p={z.p} x={ZC[0] - w / 2} y={ZC[1] - h / 2} w={w} h={h} o={o} />
						</g>
					);
				})}
			</Overlay>
			{ZOOM.map((z, i) => {
				const o = prog(f, at[i] + 8, 12) * (i < ZOOM.length - 1 ? 1 - prog(f, at[i + 1], 10) : 1);
				return o > 0.01 ? <div key={i} style={{position: 'absolute', left: ZC[0] - 260, top: 820, width: 520, textAlign: 'center', opacity: o, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40, color: INK_SOFT}}>{z.label}</div> : null;
			})}
			{/* step dots: where we are in the zoom */}
			<Overlay>
				{ZOOM.map((_, i) => <circle key={i} cx={ZC[0] - 64 + i * 32} cy={890} r={8} fill={f >= at[i] ? AMBER : '#fffdf8'} stroke={AMBER_INK} strokeWidth={3} opacity={prog(f, at[0], 14)} />)}
			</Overlay>
		</>
	);
};

// ---------- 2a. Chromosomes, sets and pairs ----------
/** Wrapped grey note in the GreyTag style. */
const GreyNote: React.FC<{at: number; x: number; y: number; w: number; size?: number; children: React.ReactNode}> = ({at, x, y, w, size = 28, children}) => {
	const f = useCurrentFrame();
	return <div style={{position: 'absolute', left: x, top: y, width: w, opacity: prog(f, at, 14), fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: size, color: '#5d646b', background: '#e8eaec', border: '3px solid #8d949b', borderRadius: 14, padding: '4px 18px', lineHeight: 1.2, boxSizing: 'border-box'}}>{children}</div>;
};
export const SceneChromosomeSets: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('chromosome-sets'), {
		dna: 'Your DNA', packed: 'structures called', eachOne: 'each one', single: 'a single long', wound: 'wound up', body: 'A human body cell', n46: '46', sets: 'two sets', oneSet: 'one set from',
		parent: 'each parent', aset: 'A set is', kind: 'each kind', twice: 'every kind', xy: 'apart from', two: 'the two of one', homol: 'homologous pair', from: 'one from each',
	});
	usePlates([SPREAD]);
	// stage 1 (revision 6): visual-only zoom-out recall over the first sentence, on its existing cues
	const s1 = vis(f, 0, c.body - 6, 12);
	const zoomAt = [c.dna, c.packed, c.eachOne, c.single, c.wound];
	// stage 3: the four chromosomes in two rows, so each kind sits over its twin
	const st3 = prog(f, c.two - 28, 18);
	// stage 2 (revision 7): a real stained spread shows what 46 chromosomes look like (no rows of 46 tiny bars)
	const st2 = prog(f, c.body - 4, 14) * (1 - st3);
	const sp = prog(f, c.body - 4, 30);
	const four: [number, number][] = [[640, 410], [640, 690], [1360, 410], [1360, 690]];
	return (
		<>
			<Heading items={[[0, 'Chromosomes, sets and pairs']]} size={64} />
			{/* stage 1 */}
			<div style={{opacity: s1, position: 'absolute', inset: 0}}>
				<ZoomRecall at={zoomAt} />
				<Hand at={c.dna + 6} out={c.wound + 6} x={880} y={320} size={58}>DNA: a very long thread</Hand>
				<Hand at={c.wound + 24} x={880} y={320} size={64}>a chromosome</Hand>
				<Hand at={c.single} x={880} y={470} size={56} w={760} color={INK}>one long DNA molecule</Hand>
				<Hand at={c.wound} x={880} y={580} size={56} w={760} color={INK}>wound up with proteins</Hand>
			</div>
			{/* stage 2 */}
			<div style={{opacity: st2, position: 'absolute', inset: 0}}>
				<Overlay>
					<g transform={`translate(600,560) scale(${lerp(0.9, 1, sp)}) translate(-600,-560)`}>
						<Stage cam={{zoom: 1, fx: 1000, fy: 1000}} base={{cx: 600, cy: 560, size: 640}} win={null}>
							<PL src={SPREAD} />
						</Stage>
					</g>
				</Overlay>
				<GreyNote at={c.body + 16} x={300} y={858} w={600} size={26}>chromosomes from one dividing human cell, stained and seen under a microscope</GreyNote>
				<Hand at={c.n46} x={1010} y={250} size={92} color={AMBER_INK}>46 chromosomes</Hand>
				<Hand at={c.sets} out={c.kind} x={1010} y={370} size={56} color={INK}>two sets of 23</Hand>
				<Hand at={c.oneSet} out={c.twice} x={1010} y={450} size={46} color={PLUM_INK}>set from one parent: 23</Hand>
				<Hand at={c.parent} out={c.twice} x={1010} y={514} size={46} color={TEAL_INK}>set from the other parent: 23</Hand>
				<Hand at={c.kind} x={1010} y={370} size={52} color={INK}>a set = one of each kind</Hand>
				<Hand at={c.twice} x={1010} y={460} size={52} color={AMBER_INK}>so every kind appears twice</Hand>
				<GreyNote at={c.xy} x={1010} y={560} w={700}>in males, X and Y are different and only partly match (the 23rd pair)</GreyNote>
			</div>
			{/* stage 3 */}
			<div style={{opacity: st3, position: 'absolute', inset: 0}}>
				<Overlay>
					{/* revision 7: the same clean coded chromosomes as the model cell in 2b */}
					{four.map(([x, y], i) => <HChrom key={i} x={x} y={y} len={HLEN[CH[i].kind as 'L' | 'S'] * 1.05} w={HW + 2} col={hcol(CH[i].color)} />)}
					<Scribble cx={640} cy={550} rx={74} ry={256} at={c.two + 4} color={AMBER_INK} seed={4} />
					<DrawPath d="M714,550 L760,550" at={c.homol} dur={10} color={AMBER_INK} width={4} />
					<Scribble cx={1360} cy={550} rx={74} ry={256} at={c.homol + 24} color={AMBER_INK} seed={7} />
					<DrawPath d="M1434,550 L1480,550" at={c.homol + 40} dur={10} color={AMBER_INK} width={4} />
				</Overlay>
				<Hand at={c.homol + 6} x={770} y={440} size={48} color={AMBER_INK} w={440}>homologous pair: a matching pair, one from each parent</Hand>
				<Hand at={c.homol + 40} x={1490} y={520} size={52} color={AMBER_INK} w={330}>another pair</Hand>
				<Hand at={c.two - 20} x={96} y={225} size={44} color={INK_SOFT}>a simpler example: two kinds, long and short</Hand>
				<Hand at={c.two - 16} x={96} y={380} size={40} color={PLUM_INK} w={400}>set from one parent</Hand>
				<Hand at={c.two - 16} x={96} y={660} size={40} color={TEAL_INK} w={400}>set from the other parent</Hand>
			</div>
		</>
	);
};

// ---------- 2b. Diploid, haploid and the model cell ----------
/** Model chromosome lengths in the coded panel (long thin until the prophase coil). */
export const HLEN = {L: 200, S: 135};
export const HW = 18;
export const hcol = (color: string): HCol => (color === PLUM ? 'P' : 'T');
export const SceneDiploidHaploid: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('diploid-haploid'), {
		cell: 'A cell with', two: 'two sets', dip: 'diploid', one: 'one set', sperm: 'human sperm', hap: 'haploid', keep: 'To keep', model: 'model cell', four: 'four chromosomes', sets2: 'two sets of two',
	});
	// revision 7: a clean coded diagram panel (outline cells, large chromosomes) replaces the painted cells with plates pasted in
	const m = prog(f, c.model - 10, 38);
	const cx = lerp(560, CX, m), cy = lerp(540, CY, m), rx = lerp(300, RX, m), ry = lerp(240, RY, m);
	const k = lerp(0.82, 1, m);
	const rightO = (1 - prog(f, c.keep, 16)) * prog(f, c.one - 8, 16);
	const glowP = vis(f, c.sets2, c.sets2 + 24, 6);
	const glowT = vis(f, c.sets2 + 22, c.sets2 + 46, 6);
	const bx = (i: number) => cx + NUC_X[i] * k;
	return (
		<>
			<Heading items={[[0, 'Diploid and haploid']]} size={64} />
			<Overlay>
				<Panel x={110} y={196} w={1700} h={784} o={prog(f, 0, 14)} />
				<HCell cx={cx} cy={cy} rx={rx} ry={ry} nuc={1} nucR={lerp(205, 230, m)} o={prog(f, 0, 14)} />
				{CH.map((ch, i) => <HChrom key={i} x={bx(i)} y={cy} len={HLEN[ch.kind as 'L' | 'S'] * k} w={HW} col={hcol(ch.color)} o={prog(f, 4 + i * 5, 12)} hi={ch.color === PLUM ? glowP : glowT} />)}
				<g opacity={rightO}>
					<HCell cx={1360} cy={540} rx={300} ry={240} nuc={1} nucR={190} />
					<HChrom x={1360 - 95} y={540} len={HLEN.L * 0.82} w={HW} col="P" />
					<HChrom x={1360 + 95} y={540} len={HLEN.S * 0.82} w={HW} col="P" />
				</g>
			</Overlay>
			<Chip x={380} y={218} at={c.cell} out={c.keep} text="body cell" color={AMBER_INK} size={46} />
			<Chip x={1190} y={218} at={c.sperm} out={c.keep} text="gamete" color={AMBER_INK} size={46} />
			<Hand at={c.dip} out={c.keep} x={300} y={816} size={58} color={AMBER_INK}>two sets: diploid</Hand>
			<Hand at={c.hap} out={c.keep} x={1070} y={816} size={58} color={AMBER_INK}>one set: haploid (a sperm or egg)</Hand>
			<Hand at={c.four} x={150} y={300} size={54} color={AMBER_INK} w={320}>model cell: 4 chromosomes</Hand>
			<Hand at={c.sets2} x={1500} y={300} size={54} color={AMBER_INK} w={300}>2 sets of 2</Hand>
			<Hand at={c.sets2 + 6} x={560} y={892} size={44} color={PLUM_INK}>set 1: one long, one short</Hand>
			<Hand at={c.sets2 + 24} x={1010} y={892} size={44} color={TEAL_INK}>set 2: one long, one short</Hand>
		</>
	);
};
