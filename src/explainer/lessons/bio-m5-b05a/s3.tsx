import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {
	AMBER_INK, Arrow, CELL_FILL, CELL_LINE, DrawPath, FONT_DISPLAY, FONT_HAND, GreyTag, Hand, Heading,
	INK, INK_SOFT, Overlay, prog, S, Scribble, StageStrip, vis, Bracket,
} from './shared';
import {HAVE} from './assets';
import {PLATES, SvgPlate} from './shared';
import {AN, CD, camAt, cbox, Dissolve, Leader, Morph, PL, Ring, Stage, toS, xf} from './cd';
import type {Cam, Piece} from './cd';

// Revision 7 (owner, 20 Oct): the stage scenes crossfade through the brief 88 painted plates, which share one cell
// canvas, so the cell changes shape with the stage (round, then long in anaphase, then furrowed and split). The
// chromosomes are painted in; labels, rings and arrows sit beside them, placed from the anchors (cd.tsx AN). Chromosome
// moves (line-up, chromatids parting, reaching the ends) are painted crops that travel over a dissolve of the empty plates.

/** Cameras on the shared cell canvas. */
export const C_INT: Cam = {zoom: 1, fx: 1000, fy: 960};
export const C_NUC: Cam = {zoom: 2.1, fx: 1000, fy: 990};
export const C_PRO: Cam = {zoom: 1.25, fx: 1000, fy: 975};
export const C_MET: Cam = {zoom: 1.55, fx: 1000, fy: 985};
export const C_ANA: Cam = {zoom: 1.4, fx: 1000, fy: 1005};
export const C_TEL: Cam = {zoom: 1.15, fx: 1000, fy: 1005};
const K = (c: Cam): [number, number, number] => [c.zoom, c.fx, c.fy];
/** The nucleus close-up plates drawn inside the interphase nucleus (its r 765 nucleus onto the cell's r 385 nucleus). */
const NZ: [number, number, number] = [AN.interphase.nuc[0], AN.interphase.nuc[1], AN.interphase.nuc[2] / AN.nucleusZoom.r];
const nzAt = (x: number, y: number): [number, number] => [NZ[0] + (x - 1000) * NZ[2], NZ[1] + (y - 1000) * NZ[2]];

const STRIP = {x: 96, y: 960, k: 0.8};

/** Prophase X shapes travel to their metaphase places (order: pink long, teal long, teal short, pink short). */
export const LINEUP: Piece[] = [0, 1, 2, 3].map(i => {
	const a = AN.prophase.cen[i], b = AN.metaphase.cen[i];
	const la = AN.prophase.len[i] / 2 + 16, lb = AN.metaphase.len[i] / 2 + 14;
	return {a, b, boxA: cbox(a[0], a[1], la, la, i < 2 ? 50 : 40), boxB: cbox(b[0], b[1], lb, lb, i < 2 ? 56 : 46)};
});
/** Each metaphase X splits at its centromere: the left half goes to the left group, the right half to the right. */
export const SPLIT: Piece[] = [0, 1, 2, 3].flatMap(i => {
	const [mx, my] = AN.metaphase.cen[i];
	const ml = AN.metaphase.len[i] / 2 + 14;
	const ay = AN.anaphase.y[i], al = AN.anaphase.len[i] / 2 + 12;
	return ([-1, 1] as const).map(side => ({
		a: [mx, my] as [number, number], b: [AN.anaphase.x[side < 0 ? 0 : 1], ay] as [number, number],
		boxA: (side < 0 ? [mx - 44, my - ml, mx + 1, my + ml] : [mx - 1, my - ml, mx + 44, my + ml]) as [number, number, number, number],
		boxB: cbox(AN.anaphase.x[side < 0 ? 0 : 1], ay, al, al, 22),
	}));
});
/** Anaphase chromatids reach the ends and settle in the telophase nuclei. */
const TELO_SLOT = [0, 1, 2, 3];
export const REACH: Piece[] = [0, 1].flatMap(g => [0, 1, 2, 3].map(i => {
	const a: [number, number] = [AN.anaphase.x[g], AN.anaphase.y[i]];
	const b = AN.telophase.cen[g * 4 + TELO_SLOT[i]];
	const la = AN.anaphase.len[i] / 2 + 12, lb = (i < 2 ? 46 : 30) + 12;
	return {a, b, boxA: cbox(a[0], a[1], la, la, 26), boxB: cbox(b[0], b[1], lb, lb, 24)};
}));

// ---------- 4a and 4a2. Prophase and metaphase ----------
export const ScenePhase: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('prophase'), {
		four: 'four steps', pro: 'In prophase', coil: 'coil up', easier: 'easier to move', env: 'nuclear envelope', breaks: 'breaks down', spindle: 'Spindle fibres', grow: 'grow from', meta: 'In metaphase',
		attach: 'attach to every', cenph: 'its centromere', one: 'one end', line: 'line up', own: 'on its own', notnext: 'not next to',
	});
	// camera: the cell, into its nucleus, back out as the spindle grows, then in on the metaphase line
	const cam = camAt(f, [[0, ...K(C_INT)], [c.pro - 6, ...K(C_NUC)], [c.spindle - 4, ...K(C_NUC)], [c.spindle + 36, ...K(C_PRO)], [c.line - 10, ...K(C_PRO)], [c.line + 50, ...K(C_MET)]]);
	const P = (x: number, y: number) => toS(cam, x, y);
	const tIn = prog(f, c.four - 10, 30); // the nucleus close-up fades in over the cell's nucleus as the camera moves in
	const tCyto = prog(f, c.four + 24, 30); // then the cytoplasm fades, so the nucleus is seen alone on clean paper
	const tCoil = prog(f, c.coil, 52); // threads coil into X shapes
	const tBreak = prog(f, c.breaks, 40); // the envelope breaks up
	const tOut = prog(f, c.spindle, 38); // back out to the cell: spindle
	const tLine = prog(f, c.line - 4, 56); // chromosomes line up
	const wOut = xf(tOut);
	// labels
	const envPt = P(...nzAt(1000 + 765 * 0.72, 1000 - 765 * 0.69));
	const fibrePt = P(1470, 905);
	const cenPt = P(...AN.prophase.cen[0]);
	const metPts = AN.metaphase.cen.map(([x, y]) => P(x, y));
	const heading: [number, string][] = [[0, 'Mitosis has four steps'], [c.pro, 'Step 1: prophase'], [c.meta, 'Step 2: metaphase']];
	return (
		<>
			<Heading items={heading} size={64} />
			<Overlay>
				<Stage cam={cam} srcs={[CD('interphase'), CD('nucleus-zoom'), CD('nucleus-zoom-breaking'), CD('prophase'), CD('metaphase'), CD('prophase', true), CD('metaphase', true)]}>
					{/* the cell, and its nucleus replaced by the painted nucleus close-up drawn exactly over it (same size), so the camera
					    zooms into the real nucleus; only the nucleus is used (circle mask), the cytoplasm stays the cell's own */}
					{wOut.a > 0.004 ? (
						<g opacity={wOut.a}>
							<PL src={CD('interphase')} o={1 - tCyto} />
							{tIn > 0.004 ? (
								<g opacity={tIn}>
									<PL src={CD('nucleus-zoom')} at={NZ} circ={[1000, 1000, 800]} feather={40} />
									{/* coil: the condensed X shapes fade in over the threads (the nucleolus goes too), envelope still whole */}
									{tCoil > 0.004 ? <PL src={CD('nucleus-zoom-breaking')} at={NZ} circ={[1000, 1000, 700]} feather={90} o={tCoil} /> : null}
									{tBreak > 0.004 ? <PL src={CD('nucleus-zoom-breaking')} at={NZ} circ={[1000, 1000, 800]} feather={40} o={tBreak} /> : null}
								</g>
							) : null}
						</g>
					) : null}
					{wOut.b > 0.004 ? (
						<g opacity={wOut.b}>
							{tLine <= 0 ? <PL src={CD('prophase')} /> : <Morph A={CD('prophase')} B={CD('metaphase')} t={tLine} pieces={LINEUP} />}
						</g>
					) : null}
				</Stage>
				{/* nuclear envelope */}
				<g opacity={vis(f, c.env, c.breaks + 30, 10)}>
					<Scribble cx={envPt[0]} cy={envPt[1]} rx={44} ry={44} at={c.env} color={AMBER_INK} seed={6} />
					<DrawPath d={`M1450,300 L${envPt[0] + 40},${envPt[1] - 26}`} at={c.env + 8} dur={14} color={AMBER_INK} width={4} />
				</g>
				{/* spindle fibres */}
				<g opacity={vis(f, c.spindle + 40, c.attach - 10, 10)}>
					<Ring x={fibrePt[0]} y={fibrePt[1]} r={30} />
					<Leader x1={1460} y1={455} x2={fibrePt[0] + 18} y2={fibrePt[1] - 24} o={1} />
				</g>
				{/* fibres attach at the centromere */}
				<g opacity={vis(f, c.cenph, c.line - 6, 10)}><Ring x={cenPt[0]} y={cenPt[1]} r={24} /></g>
				<g opacity={vis(f, c.one, c.line - 6, 10)}><Leader x1={440} y1={540} x2={cenPt[0] - 26} y2={cenPt[1] + 6} /></g>
				{/* each chromosome on its own: one ring per chromosome on the line */}
				{metPts.map(([x, y], i) => <g key={i} opacity={vis(f, c.own + i * 6, c.own + 110, 8)}><Ring x={x} y={y} r={i < 2 ? 58 : 44} w={4} /></g>)}
			</Overlay>
			<Hand at={c.easier} out={c.breaks - 6} x={96} y={290} size={50} w={360}>coils up: easier to move</Hand>
			<Hand at={c.env} out={c.breaks + 30} x={1450} y={250} size={50} w={360}>nuclear envelope</Hand>
			<GreyTag at={c.breaks + 4} out={c.breaks + 50} x={1450} y={330} text="animal and plant cells" size={30} />
			<Hand at={c.spindle + 36} out={c.attach - 10} x={1460} y={380} size={50} w={360}>spindle fibres: thin protein threads</Hand>
			<Hand at={c.one} out={c.line + 20} x={96} y={430} size={46} w={360}>fibres from opposite ends, one end to each chromatid</Hand>
			<Hand at={c.own} x={96} y={290} size={48} w={290}>each chromosome on its own, not paired up</Hand>
			<GreyTag at={c.notnext + 14} x={1545} y={430} text="not in pairs" size={30} />
			<StageStrip at={[c.pro, c.meta, null, null, null]} active={f >= c.meta ? 1 : 0} x={STRIP.x} y={STRIP.y} k={STRIP.k} />
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
	const cam = camAt(f, [[0, ...K(C_MET)], [c.split, ...K(C_MET)], [c.shorten + 90, ...K(C_ANA)]]);
	const P = (x: number, y: number) => toS(cam, x, y);
	const move = prog(f, c.split + 6, c.shorten + 96 - c.split);
	const pop = prog(f, c.split, 18);
	const L = (i: number) => P(AN.anaphase.x[0], AN.anaphase.y[i]);
	const gl = P(AN.anaphase.x[0], 1035), gr = P(AN.anaphase.x[1], 1035);
	const gTop = P(700, 700)[1], gBot = P(700, 1310)[1];
	const cellBot = P(1000, 1533)[1];
	const ry = (gBot - gTop) / 2 + 10, rxx = 64;
	return (
		<>
			<Heading items={[[0, 'Step 3: anaphase']]} size={64} />
			<Overlay>
				<Stage cam={cam} srcs={[CD('metaphase'), CD('anaphase'), CD('metaphase', true), CD('anaphase', true)]}>
					<Morph A={CD('metaphase')} B={CD('anaphase')} t={move} pieces={SPLIT} fade={[0.3, 0.7]} />
				</Stage>
				{f >= c.split && f < c.split + 20 ? AN.metaphase.cen.map(([x, y], i) => { const [sx, sy] = P(x, y); return <circle key={i} cx={sx} cy={sy} r={12 + 34 * pop} fill="none" stroke={AMBER_INK} strokeWidth={5} opacity={1 - pop} />; }) : null}
				<g opacity={vis(f, c.soon + 6, c.twice, 8)}>
					<Ring x={L(0)[0]} y={L(0)[1]} r={36} />
					<Leader x1={360} y1={470} x2={L(0)[0] - 36} y2={L(0)[1]} />
				</g>
				<g opacity={vis(f, c.each, c.both - 20, 10)}><Scribble cx={gl[0]} cy={gl[1]} rx={rxx} ry={ry} at={c.each} color={AMBER_INK} seed={3} /></g>
				<g opacity={vis(f, c.one, c.both - 20, 10)}><Scribble cx={gr[0]} cy={gr[1]} rx={rxx} ry={ry} at={c.one} color={AMBER_INK} seed={8} /></g>
				<Bracket x1={gl[0] - 60} x2={gl[0] + 60} y={cellBot + 18} at={c.both} color={AMBER_INK} down={false} />
				<Bracket x1={gr[0] - 60} x2={gr[0] + 60} y={cellBot + 18} at={c.both + 6} color={AMBER_INK} down={false} />
			</Overlay>
			<Hand at={c.soon + 8} out={c.called} x={96} y={430} size={46} w={280}>a separated chromatid</Hand>
			<Hand at={c.called} out={c.twice - 4} x={96} y={430} size={46} w={280} color={INK}>is now a chromosome</Hand>
			<Hand at={c.each + 6} out={c.four} x={96} y={260} size={44} w={280}>a copy of each of the four chromosomes</Hand>
			<Hand at={c.four} x={96} y={260} size={44} w={280}>4 chromosomes: same as the parent</Hand>
			<Hand at={c.one + 6} out={c.four} x={1550} y={260} size={44} w={290}>a copy of each of the four chromosomes</Hand>
			<Hand at={c.four + 24} x={1550} y={260} size={44} w={290}>4 chromosomes</Hand>
			<Hand at={c.both + 8} x={gl[0] - 150} y={cellBot + 30} size={46} w={300}><span style={{display: 'block', textAlign: 'center'}}>both sets</span></Hand>
			<Hand at={c.both + 14} x={gr[0] - 150} y={cellBot + 30} size={46} w={300}><span style={{display: 'block', textAlign: 'center'}}>both sets</span></Hand>
			{/* counter */}
			<div style={{position: 'absolute', left: 1540, top: 560, width: 360, opacity: prog(f, c.twice - 6, 10)}}>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 28, color: INK_SOFT}}>before: 4 chromosomes</div>
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 88, color: AMBER_INK, lineHeight: 1, marginTop: 6, transform: `scale(${1 + 0.15 * Math.sin(Math.PI * prog(f, c.twice, 18))})`, transformOrigin: '0 50%'}}>{prog(f, c.but, 10) > 0.5 ? '4 + 4' : '8'}</div>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, color: INK}}>{prog(f, c.but, 10) > 0.5 ? 'chromosomes: 4 at each end' : 'chromosomes now'}</div>
			</div>
			<StageStrip at={[-999, -999, c.ana, null, null]} active={2} x={STRIP.x} y={STRIP.y} k={STRIP.k} />
		</>
	);
};

// ---------- 4c. Telophase and cytokinesis ----------
export const SceneTelophase: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('telophase-cytokinesis'), {
		telo: 'In telophase', reach: 'reach the ends', uncoil: 'uncoil', env: 'a new nuclear envelope', cyto: 'Cytokinesis', splitting: 'splitting of the cytoplasm', often: 'often begins', animal: 'In an animal cell',
		pinch: 'pinches in', now: 'Now there are two', each: 'each with both sets',
	});
	const cam = camAt(f, [[0, ...K(C_ANA)], [c.telo, ...K(C_ANA)], [c.reach + 40, ...K(C_TEL)]]);
	const P = (x: number, y: number) => toS(cam, x, y);
	const tReach = prog(f, c.telo + 4, c.reach + 24 - c.telo);
	const tUncoil = prog(f, c.uncoil + 6, c.env + 36 - c.uncoil);
	const tPinch = prog(f, c.animal, 44);
	const tTwo = prog(f, c.now - 4, 34);
	const nucL = P(...AN.telophase.nuc[0]), nucR = P(...AN.telophase.nuc[1]);
	const nr = AN.telophase.r * 1.12 * (cam.zoom * 0.41);
	const fTop = P(1000, 690), fBot = P(1000, 1280);
	const dL = P(...AN.daughters.nuc[0]), dR = P(...AN.daughters.nuc[1]);
	const cellBot = P(1000, 1556)[1];
	const parentO = prog(f, c.now, 16);
	const tickAt = c.each + 4;
	return (
		<>
			<Heading items={[[0, 'Step 4: telophase, then cytokinesis']]} size={64} />
			<Overlay>
				<Stage cam={cam} srcs={[CD('anaphase'), CD('telophase'), CD('cytokinesis'), CD('daughters'), CD('anaphase', true), CD('telophase', true)]}>
					{tReach < 1 ? <Morph A={CD('anaphase')} B={CD('telophase')} t={tReach} pieces={REACH} /> : (
						<>
							{/* uncoil: the painted chromosomes fade into the new nuclei; then the furrow deepens and two cells part */}
							<Dissolve a={CD('telophase', true)} b={CD('cytokinesis')} t={tPinch} o={xf(tTwo).a} />
							{tPinch < 0.5 ? <PL src={CD('telophase')} o={(1 - tUncoil) * xf(tPinch).a} /> : null}
							{tTwo > 0.004 ? <PL src={CD('daughters')} o={xf(tTwo).b} /> : null}
							{/* uncoiled: the thin chromatin threads of the nucleus close-up, painted into each new nucleus */}
							{tUncoil > 0.004 ? (
								<g opacity={tUncoil}>
									{[0, 1].map(k => {
										const tel = AN.telophase.nuc[k], cyt = AN.daughters.nuc[k];
										const m = Math.max(tPinch, tTwo);
										const cx = tel[0] + (cyt[0] - tel[0]) * m, cy = tel[1] + (cyt[1] - tel[1]) * m;
										return <PL key={k} src={CD('nucleus-zoom')} at={[cx, cy, (AN.telophase.r * 0.93) / AN.nucleusZoom.r]} circ={[1000, 1000, 700]} feather={120} o={0.9} />;
									})}
								</g>
							) : null}
						</>
					)}
				</Stage>
				<g opacity={vis(f, c.env + 30, c.cyto + 20, 10)}>
					<Scribble cx={nucL[0]} cy={nucL[1]} rx={nr} ry={nr} at={c.env + 30} color={AMBER_INK} seed={4} />
					<Scribble cx={nucR[0]} cy={nucR[1]} rx={nr} ry={nr} at={c.env + 38} color={AMBER_INK} seed={9} />
				</g>
				{/* the membrane is pinched in from the top and bottom */}
				<g opacity={vis(f, c.animal, c.now + 10, 8)}>
					<Arrow x1={fTop[0]} y1={fTop[1] - 130} x2={fTop[0]} y2={fTop[1] + 10} at={c.animal} color={AMBER_INK} />
					<Arrow x1={fBot[0]} y1={fBot[1] + 130} x2={fBot[0]} y2={fBot[1] - 10} at={c.animal} color={AMBER_INK} />
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
							<DrawPath d="M1685,600 L1685,526 M1685,600 L1685,676" at={c.pinch} dur={50} color="#6f7f2a" width={9} cap="butt" />
						</>
					)}
				</g>
				{/* the parent cell, small, for the comparison */}
				<g opacity={parentO}>
					<Stage cam={{zoom: 1, fx: 1000, fy: 960}} base={{cx: 215, cy: 600, size: 250}} win={null}>
						<PL src={CD('interphase')} />
					</Stage>
				</g>
				<DrawPath d={`M${dL[0] - 30},${cellBot + 26} l16,18 l36,-42`} at={tickAt} dur={12} color="#2f8a5b" width={9} />
				<DrawPath d={`M${dR[0] - 30},${cellBot + 26} l16,18 l36,-42`} at={tickAt + 8} dur={12} color="#2f8a5b" width={9} />
			</Overlay>
			<Hand at={c.uncoil} out={c.env} x={96} y={290} size={50} w={360}>uncoil into long thin threads</Hand>
			<Hand at={c.env + 36} out={c.cyto + 20} x={96} y={290} size={50} w={360}>two nuclei</Hand>
			<Hand at={c.splitting} out={c.animal + 20} x={96} y={290} size={50} w={360}>cytokinesis: the cytoplasm splits</Hand>
			<Hand at={c.animal + 6} out={c.now + 10} x={1460} y={230} size={50} w={400}>animal cell: membrane pinches in</Hand>
			<Hand at={c.pinch + 20} x={1540} y={720} size={44} w={300} color={INK_SOFT}>plant cell: new wall</Hand>
			<Hand at={c.now + 4} x={96} y={740} size={44} w={300} color={INK_SOFT}>parent cell</Hand>
			<Hand at={c.each} x={600} y={cellBot + 70} size={56} color={AMBER_INK}>same chromosomes as the parent</Hand>
			<StageStrip at={[-999, -999, -999, c.telo, c.cyto]} active={f >= c.cyto ? 4 : 3} x={STRIP.x} y={STRIP.y} k={STRIP.k} />
		</>
	);
};
