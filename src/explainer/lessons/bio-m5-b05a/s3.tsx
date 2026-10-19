import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {
	AMBER, AMBER_INK, anaOffsets, ANA_GRID, ANA_X, CellBody, CELL_FILL, CELL_LINE, CH, Chrom, clamp01, CX, CY, DrawPath, Envelope, Fibre, FONT_DISPLAY, FONT_HAND, GreyTag, Hand, Heading,
	INK, INK_SOFT, Arrow, lerp, META_Y, NUC_R, NUC_X, Overlay, Pole, prog, RX, S, Scribble, SplitCells, StageStrip, vis, Bracket, Line, PCell, poleDX,
} from './shared';
import {HAVE} from './assets';
import {PLATES, SvgPlate} from './shared';

const PLUM_INK = '#7e3a69';
const TEAL_INK = '#1f7a6f';
/** Scattered spots once the nuclear envelope has gone (chromosome order LP, LT, SP, ST). */
const SCAT: [number, number][] = [[-165, -80], [-55, 70], [70, -70], [165, 85]];

// ---------- 4a and 4a2. Prophase and metaphase ----------
export const ScenePhase: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('prophase'), {
		four: 'four steps', pro: 'In prophase', coil: 'coil up', easier: 'easier to move', env: 'nuclear envelope', breaks: 'breaks down', spindle: 'Spindle fibres', grow: 'grow from', meta: 'In metaphase',
		attach: 'attach to every', cenph: 'its centromere', one: 'one end', line: 'line up', own: 'on its own', notnext: 'not next to',
	});
	const cp = prog(f, c.coil, 62);
	const ep = prog(f, c.breaks, 46);
	const lu = prog(f, c.line, 56);
	const pos = (i: number, lineup = lu, scat = ep): [number, number] => {
		const bx = lerp(NUC_X[i], SCAT[i][0], scat), by = lerp(0, SCAT[i][1], scat);
		return [lerp(bx, 0, lineup), lerp(by, META_Y[i], lineup)];
	};
	const gp = 0.5 * prog(f, c.grow, 52) + 0.5 * prog(f, c.attach, 36);
	const PL = CX - poleDX(RX), PR = CX + poleDX(RX);
	const spin = prog(f, c.spindle, 36);
	const heading: [number, string][] = [[0, 'Mitosis has four steps'], [c.pro, 'Step 1: prophase'], [c.meta, 'Step 2: metaphase']];
	const p0 = pos(0, 0, 1);
	const glowPartner = vis(f, c.notnext, c.notnext + 60, 10);
	return (
		<>
			<Heading items={heading} size={64} />
			<Overlay>
				<CellBody spindle={spin} />
				<Envelope p={ep} />
				{/* spindle: poles and fibres */}
				{[0, 1, 2, 3].map(i => {
					const [x, y] = pos(i);
					const ax = CX + x, ay = CY + y;
					return (
						<g key={i}>
							<Fibre x1={PL} y1={CY} x2={ax - 4} y2={ay} p={gp} />
							<Fibre x1={PR} y1={CY} x2={ax + 4} y2={ay} p={gp} />
						</g>
					);
				})}
				{CH.map((ch, i) => {
					const [x, y] = pos(i);
					return <Chrom key={i} x={CX + x} y={CY + y} kind={ch.kind} color={ch.color} dup={1} coil={cp} hiA={(i === 0 || i === 1) ? glowPartner : 0} hiB={(i === 0 || i === 1) ? glowPartner : 0} />;
				})}
				{/* the nuclear envelope circled */}
				<g opacity={vis(f, c.env, c.breaks + 24, 10)}><Scribble cx={CX + NUC_R * 0.72} cy={CY - NUC_R * 0.7} rx={46} ry={46} at={c.env} color={AMBER_INK} seed={6} /></g>
				<g opacity={vis(f, c.one, c.line - 6, 10)}><Scribble cx={CX + SCAT[0][0]} cy={CY + SCAT[0][1]} rx={36} ry={36} at={c.one} color={AMBER_INK} seed={4} /></g>
				{/* tags and the pairing contrast after line-up */}
				{lu > 0.99 ? <DrawPath d={`M${CX + 110},${CY + META_Y[1]} Q${CX + 190},${CY - 60} ${CX + 110},${CY + META_Y[0]}`} at={c.notnext} dur={22} color="#7a8088" width={4} dash="3 12" /> : null}
			</Overlay>
			<Hand at={c.easier} out={c.breaks - 6} x={96} y={290} size={50} w={360}>coils up: easier to move</Hand>
			<Hand at={c.env} out={c.breaks + 24} x={1500} y={250} size={50} w={340}>nuclear envelope</Hand>
			<Overlay><g opacity={vis(f, c.env, c.breaks + 24, 10)}><DrawPath d={`M1500,285 L${CX + NUC_R * 0.72 + 46},${CY - NUC_R * 0.7 - 10}`} at={c.env + 8} dur={14} color={AMBER_INK} width={4} /></g></Overlay>
			<GreyTag at={c.breaks + 4} out={c.breaks + 40} x={1500} y={330} text="animal and plant cells" size={30} />
			<Hand at={c.spindle + 12} out={c.attach - 10} x={1500} y={430} size={50} w={340}>spindle fibres: thin protein threads</Hand>
			<Hand at={c.one} out={c.line + 20} x={96} y={470} size={46} w={360}>fibres from opposite ends, one end to each chromatid</Hand>
			<Hand at={c.own} x={96} y={290} size={50} w={370}>each chromosome on its own, not paired up</Hand>
			<GreyTag at={c.notnext + 14} x={1500} y={430} text="partners apart" size={32} />
			<StageStrip at={[c.pro, c.meta, null, null, null]} active={f >= c.meta ? 1 : 0} />
		</>
	);
};

// ---------- 4b. Anaphase ----------
export const SceneAnaphase: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('anaphase'), {
		ana: 'In anaphase', split: 'the centromeres split', shorten: 'the fibres shorten', opp: 'opposite ends', soon: 'As soon as', called: 'called a chromosome', twice: 'twice as many', but: 'But look',
		each: 'each end', one: 'holds one copy', four: 'the four chromosomes', both: 'both sets again',
	});
	const open = prog(f, c.split, 16);
	const travel = prog(f, c.shorten, 100);
	const e = 0.04 * open + 0.96 * travel;
	const bend = prog(f, c.shorten - 6, 40);
	const rx = RX + 40 * travel;
	const PL = CX - poleDX(rx), PR = CX + poleDX(rx);
	const pop = f >= c.split && f < c.split + 16 ? prog(f, c.split, 16) : 1;
	const bars = [0, 1, 2, 3].map(i => ({i, ch: CH[i], o: anaOffsets(i, e), y: CY + META_Y[i]}));
	const cnt8 = prog(f, c.twice, 10);
	const cnt44 = prog(f, c.but, 10);
	const gl = CX - ANA_X, gr = CX + ANA_X;
	return (
		<>
			<Heading items={[[0, 'Step 3: anaphase']]} size={64} />
			<Overlay>
				<CellBody rx={rx} spindle={1} />
				{bars.map(b => {
					const ax = CX + b.o.xa, ay = b.y + b.o.ya, bx = CX + b.o.xb, by = b.y + b.o.yb;
					return (
						<g key={b.i}>
							<Fibre x1={PL} y1={CY} x2={ax - 4} y2={ay} />
							<Fibre x1={PR} y1={CY} x2={bx + 4} y2={by} />
						</g>
					);
				})}
				{bars.map(b => <Chrom key={b.i} x={CX} y={b.y} kind={b.ch.kind} color={b.ch.color} dup={1} coil={1} bend={bend} {...b.o} />)}
				{f >= c.split && f < c.split + 18 ? [0, 1, 2, 3].map(i => <circle key={i} cx={CX} cy={CY + META_Y[i]} r={14 + 40 * pop} fill="none" stroke={AMBER_INK} strokeWidth={5} opacity={1 - pop} />) : null}
				<g opacity={vis(f, c.soon, c.twice, 8)}><Scribble cx={gl + ANA_GRID[0][0] - 2} cy={CY + ANA_GRID[0][1]} rx={34} ry={78} at={c.soon + 6} color={AMBER_INK} seed={5} /></g>
				<g opacity={vis(f, c.soon + 10, c.twice, 8)}><DrawPath d={`M330,478 L${gl + ANA_GRID[0][0] - 44},${CY + ANA_GRID[0][1] - 10}`} at={c.soon + 12} dur={14} color={AMBER_INK} width={4} /></g>
				<g opacity={vis(f, c.each, c.both - 20, 10)}><Scribble cx={gl} cy={CY} rx={92} ry={196} at={c.each} color={AMBER_INK} seed={3} /></g>
				<g opacity={vis(f, c.one, c.both - 20, 10)}><Scribble cx={gr} cy={CY} rx={92} ry={196} at={c.one} color={AMBER_INK} seed={8} /></g>
				<Bracket x1={gl - 92} x2={gl + 92} y={CY + 232} at={c.both} color={AMBER_INK} down={false} />
				<Bracket x1={gr - 92} x2={gr + 92} y={CY + 232} at={c.both + 6} color={AMBER_INK} down={false} />
			</Overlay>
			<Hand at={c.soon + 8} out={c.called} x={96} y={430} size={50} w={340}>a separated chromatid</Hand>
			<Hand at={c.called} out={c.twice - 4} x={96} y={430} size={50} w={340} color={INK}>is now a chromosome</Hand>
			<Hand at={c.each + 6} out={c.four} x={96} y={290} size={46} w={330}>a copy of each of the four chromosomes</Hand>
			<Hand at={c.four} x={96} y={290} size={46} w={330}>4 chromosomes: same as the parent</Hand>
			<Hand at={c.one + 6} out={c.four} x={1500} y={290} size={46} w={330}>a copy of each of the four chromosomes</Hand>
			<Hand at={c.four + 24} x={1500} y={290} size={46} w={330}>4 chromosomes</Hand>
			<Hand at={c.both + 8} x={gl - 80} y={CY + 262} size={46}>both sets</Hand>
			<Hand at={c.both + 14} x={gr - 80} y={CY + 262} size={46}>both sets</Hand>
			{/* counter */}
			<div style={{position: 'absolute', left: 1500, top: 600, width: 340, opacity: prog(f, c.twice - 6, 10)}}>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 28, color: INK_SOFT}}>before: 4 chromosomes</div>
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 88, color: AMBER_INK, lineHeight: 1, marginTop: 6, transform: `scale(${1 + 0.15 * Math.sin(Math.PI * prog(f, c.twice, 18))})`, transformOrigin: '0 50%'}}>{cnt44 > 0.5 ? '4 + 4' : '8'}</div>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, color: INK}}>{cnt44 > 0.5 ? 'chromosomes: 4 at each end' : 'chromosomes now'}</div>
			</div>
			<StageStrip at={[-999, -999, c.ana, null, null]} active={2} />
		</>
	);
};

// ---------- 4c. Telophase and cytokinesis ----------
const SLOT_X: Record<number, number> = {1: -72, 2: -24, 0: 24, 3: 72};
export const SceneTelophase: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('telophase-cytokinesis'), {
		telo: 'In telophase', reach: 'reach the ends', uncoil: 'uncoil', env: 'a new nuclear envelope', cyto: 'Cytokinesis', splitting: 'splitting of the cytoplasm', often: 'often begins', animal: 'In an animal cell',
		pinch: 'pinches in', now: 'Now there are two', each: 'each with both sets',
	});
	const u = prog(f, c.uncoil, 70);
	const eg = prog(f, c.env, 44);
	const rx = RX + 40;
	// cell division geometry
	const d = f < c.animal ? 40 * prog(f, c.often, c.animal - c.often) : lerp(40, rx / 2, prog(f, c.animal, c.now - c.animal)) + 40 * prog(f, c.now, c.each - c.now);
	const sepD = Math.max(0, d - rx / 2);
	const k = clamp01((d - 120) / (rx / 2 - 120 + 1));
	const off = lerp(300, Math.max(d, rx / 2), k);
	const cluster = (side: -1 | 1) => CX + side * off;
	const single = d < 1;
	const bars = [0, 1, 2, 3].flatMap(i => (['A', 'B'] as const).map(ab => ({i, ab})));
	const parentO = prog(f, c.now, 16);
	const tickAt = c.each + 4;
	return (
		<>
			<Heading items={[[0, 'Step 4: telophase, then cytokinesis']]} size={64} />
			<Overlay>
				{single ? <CellBody rx={rx} /> : <SplitCells rx={rx} d={d} />}
				{[-1, 1].map(side => <Envelope key={side} cx={cluster(side as -1 | 1)} cy={CY} r={140} grow={eg} />)}
				{bars.map(({i, ab}) => {
					const side = ab === 'A' ? -1 : 1;
					const o = anaOffsets(i, 1);
					const x0 = CX + (ab === 'A' ? o.xa : o.xb), y0 = CY + ANA_GRID[i][1];
					const x1 = cluster(side as -1 | 1) + SLOT_X[i], y1 = CY;
					const ox = lerp(x0, x1, u), oy = lerp(y0, y1, u);
					return <Chrom key={i + ab} x={ox} y={oy} kind={CH[i].kind} color={CH[i].color} dup={1} coil={1 - u} bend={1 - u} xa={0} xb={0} ya={0} yb={0} sep={1} only={ab} />;
				})}
				<g opacity={vis(f, c.env + 30, c.cyto + 20, 10)}>
					<Scribble cx={cluster(-1)} cy={CY} rx={160} ry={160} at={c.env + 30} color={AMBER_INK} seed={4} />
					<Scribble cx={cluster(1)} cy={CY} rx={160} ry={160} at={c.env + 38} color={AMBER_INK} seed={9} />
				</g>
				{/* the membrane is pinched in from the top and bottom */}
				<g opacity={vis(f, c.animal, c.now + 10, 8)}>
					<Arrow x1={CX} y1={CY - 300} x2={CX} y2={CY - 150} at={c.animal} color={AMBER_INK} />
					<Arrow x1={CX} y1={CY + 300} x2={CX} y2={CY + 150} at={c.animal} color={AMBER_INK} />
				</g>
				{/* plant cell inset (screen only) */}
				<g opacity={prog(f, c.pinch - 10, 16)}>
					{HAVE.has(PLATES.plant.src) ? (
						<>
							<SvgPlate a={PLATES.plant} cx={1685} cy={600} w={192} rot={90} />
							<DrawPath d="M1685,600 L1685,512 M1685,600 L1685,688" at={c.pinch} dur={50} color="#6f7f2a" width={7} cap="butt" />
						</>
					) : (
						<>
						<rect x={1560} y={520} width={250} height={160} rx={26} fill={CELL_FILL} stroke={CELL_LINE} strokeWidth={5} />
						<circle cx={1685} cy={600} r={14} fill="#e2d9ee" stroke="#6a4c93" strokeWidth={3} />
						<DrawPath d="M1685,600 L1685,526 M1685,600 L1685,676" at={c.pinch} dur={50} color="#6f7f2a" width={9} cap="butt" />
						</>
					)}
				</g>
				{/* parent and ticks */}
				<g opacity={parentO}>
					<PCell cx={215} cy={600} rx={112} ry={92} o={0.85} />
					{CH.map((ch, i) => <Chrom key={i} x={215 + (i - 1.5) * 40} y={600} kind={ch.kind} color={ch.color} dup={0} s={0.42} />)}
				</g>
				<DrawPath d={`M${cluster(-1) - 30},${CY + 232} l16,18 l36,-42`} at={tickAt} dur={12} color="#2f8a5b" width={9} />
				<DrawPath d={`M${cluster(1) - 30},${CY + 232} l16,18 l36,-42`} at={tickAt + 8} dur={12} color="#2f8a5b" width={9} />
			</Overlay>
			<Hand at={c.uncoil} out={c.env} x={96} y={290} size={50} w={360}>uncoil into long thin threads</Hand>
			<Hand at={c.env + 36} out={c.cyto + 20} x={96} y={290} size={50} w={360}>two nuclei</Hand>
			<Hand at={c.splitting} out={c.animal + 20} x={96} y={290} size={50} w={360}>cytokinesis: the cytoplasm splits</Hand>
			<Hand at={c.animal + 6} out={c.now + 10} x={1460} y={230} size={50} w={400}>animal cell: membrane pinches in</Hand>
			<Hand at={c.pinch + 20} x={1540} y={720} size={44} w={300} color={INK_SOFT}>plant cell: new wall</Hand>
			<Hand at={c.now + 4} x={96} y={730} size={44} w={300} color={INK_SOFT}>parent cell</Hand>
			<Hand at={c.each} x={600} y={812} size={56} color={AMBER_INK}>same chromosomes as the parent</Hand>
			<StageStrip at={[-999, -999, -999, c.telo, c.cyto]} active={f >= c.cyto ? 4 : 3} />
		</>
	);
};
