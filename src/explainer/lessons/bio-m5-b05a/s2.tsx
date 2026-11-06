import React, {useId} from 'react';
import {useCurrentFrame, interpolate} from 'remotion';
import {cues} from '../../cues';
import {
	AMBER, AMBER_INK, arcPath, Bracket, CH, CX, CY, DrawPath, GreyCross, Hand, Heading,
	INK_SOFT, lerp, NUC_X, onCircle, Overlay, PenTap, Pill, prog, S, Scribble, vis, Line, RX, RY, NUC_R,
} from './shared';
import {Enter} from '../../kit';
import {Chrom, ChromPlate, FONT_HAND, plateLen, plateOf, PLUM} from './shared';
import {PNuc, usePNuc} from './pnuc';

// Revision 7 used coded outline cells here; the 6 Nov quality fix replaced them with the painted nucleus close-up
// and painted chromosomes (pnuc.tsx), large 2n = 4 model, counted on screen.

// ---------- 2c. Why copy first ----------
// Quality fix (6 Nov): the coded outline cells became the painted nucleus close-up with painted chromosomes (pnuc.tsx).
const NC: [number, number] = [960, 600];
const NRAD = 320;
const ROW_Y = NC[1] - 0.41 * NRAD;
/** Chromosome x offsets in the big nucleus (long plum, long teal, short plum, short teal), kept above the nucleolus. */
const X0 = [-205, -100, 95, 190];
const CS = 1.7;
export const SceneWhyCopy: React.FC = () => {
	const f = useCurrentFrame();
	usePNuc();
	const c = cues(S('why-copy-first'), {
		problem: 'Here is the problem', cut: 'cut in half', half: 'each half would', shared: 'just shared out', onlyHalf: 'only half of them', both: 'both sets', copied: 'has to be copied', video: 'DNA copying video',
	});
	const cutLine = prog(f, c.cut, 18);
	const apart = prog(f, c.cut + 24, 22) * (1 - prog(f, c.shared - 10, 14));
	const out = prog(f, c.shared - 6, 30) * (1 - prog(f, c.copied - 4, 30));
	const DL: [number, number] = [610, 580], DR: [number, number] = [1310, 580], DRAD = 195;
	const dRow = DL[1] - 0.42 * DRAD;
	const home = (i: number): [number, number] => [NC[0] + X0[i], ROW_Y];
	const away: [number, number][] = [[DL[0] - 95, dRow], [DR[0] - 95, dRow], [DL[0] - 30, dRow], [DR[0] - 30, dRow]];
	const pos = (i: number): [number, number] => [lerp(home(i)[0], away[i][0], out), lerp(home(i)[1], away[i][1], out)];
	const mainO = 1 - out;
	const copyIcon = prog(f, c.copied + 6, 18);
	const [lx, ly] = home(0);
	const barsO = 1 - apart;
	const L = plateLen('L', 1) * CS;
	const grey = plateOf(PLUM, false);
	return (
		<>
			<Heading items={[[0, 'Why copy first?']]} size={64} />
			<Overlay>
				<PNuc cx={NC[0]} cy={NC[1]} r={NRAD} o={mainO} />
				{[DL, DR].map(([x, y], i) => (
					<g key={i} opacity={out}>
						<PNuc cx={x} cy={y} r={DRAD} />
						<GreyCross x={x + 150} y={y - 190} at={c.onlyHalf + 20 + i * 10} />
					</g>
				))}
				{CH.map((ch, i) => <Chrom key={i} x={pos(i)[0]} y={pos(i)[1]} kind={ch.kind} color={ch.color} dup={0} coil={1} s={lerp(CS, 1.05, out)} o={i === 0 ? barsO : 1} />)}
				{/* the cut: the long chromosome in two grey halves */}
				<g opacity={apart}>
					<g transform={`translate(0,${-12 * apart})`}><ChromPlate p={grey.p} cx={lx} cy={ly} h={L} filter="grayscale(1) brightness(1.05)" half="top" /></g>
					<g transform={`translate(0,${12 * apart})`}><ChromPlate p={grey.p} cx={lx} cy={ly} h={L} filter="grayscale(1) brightness(1.05)" half="bot" /></g>
					<GreyCross x={lx - 52} y={ly - 60} at={c.half + 4} s={0.8} />
					<GreyCross x={lx - 52} y={ly + 64} at={c.half + 12} s={0.8} />
				</g>
				<line x1={lx - 66} x2={lx + 66} y1={ly} y2={ly} stroke={AMBER_INK} strokeWidth={6} strokeDasharray="12 9" strokeLinecap="round" opacity={cutLine * (1 - prog(f, c.half + 50, 12))} style={{clipPath: `inset(0 ${100 - cutLine * 100}% 0 0)`}} />
				{/* copy first: a painted copied chromosome lands beside the nucleus */}
				<g opacity={copyIcon} transform={`translate(0,${-(1 - copyIcon) * 70})`}>
					<Chrom x={1585} y={390} kind="L" color={PLUM} dup={1} coil={1} s={1.15} />
				</g>
			</Overlay>
			<Hand at={c.half} out={c.shared - 8} x={130} y={400} size={46} w={360}>each half would carry only half of the instructions</Hand>
			<Hand at={c.onlyHalf} out={c.copied - 6} x={420} y={850} size={46} w={380}>only half the chromosomes</Hand>
			<Hand at={c.onlyHalf + 10} out={c.copied - 6} x={1120} y={850} size={46} w={380}>only half the chromosomes</Hand>
			<Hand at={c.both} out={c.copied - 6} x={600} y={930} size={56}>a skin cell needs both sets</Hand>
			<Hand at={c.copied + 14} x={1490} y={500} size={58}>copy first</Hand>
			<Pill at={c.video} x={620} y={950} size={44}>recall: the DNA copying video</Pill>
		</>
	);
};

// ---------- 2d. What the copy looks like, and how to count ----------
export const SceneTheCopy: React.FC = () => {
	const f = useCurrentFrame();
	usePNuc();
	const c = cues(S('the-copy'), {
		after: 'After copying', identical: 'identical copies', joined: 'joined at', cen: 'the centromere', each: 'Each copy', chrom: 'chromatid', both: 'the two together',
		sister: 'sister chromatids', still: 'It is still', count: 'count the centromeres', not: 'not the chromatids',
	});
	const zp = prog(f, 0, 56);
	const Z = 1 + 0.25 * zp;
	const dupP = (i: number) => prog(f, c.after + 8 + i * 4, 34);
	const hiA = vis(f, c.each, c.both - 4, 8);
	const hiB = vis(f, c.both - 2, c.sister - 6, 8);
	const pts: [number, number][] = X0.map(x => [NC[0] + x * Z, ROW_Y]);
	const lp = pts[0];
	const L = plateLen('L', 1) * CS * Z;
	const armY = L * 0.45;
	const tapAt = [c.count + 10, c.count + 30, c.count + 50, c.count + 70];
	return (
		<>
			<Heading items={[[0, 'What the copy looks like']]} size={64} />
			<Overlay>
				<PNuc cx={NC[0]} cy={ROW_Y + (NC[1] - ROW_Y) * Z} r={NRAD * Z} />
				{CH.map((ch, i) => <Chrom key={i} x={pts[i][0]} y={ROW_Y} kind={ch.kind} color={ch.color} coil={1} s={CS * Z} dup={dupP(i)} hiA={i === 0 ? hiA : 0} hiB={i === 0 ? hiB : 0} />)}
				<Scribble cx={lp[0]} cy={lp[1]} rx={34} ry={34} at={c.cen} color={AMBER_INK} seed={3} />
				<g opacity={1 - prog(f, c.each, 10)}><DrawPath d={`M${lp[0] - 34},${lp[1] + 10} L${lp[0] - 140},${lp[1] + 90}`} at={c.cen + 10} dur={12} color={AMBER_INK} width={4} /></g>
				<g opacity={1 - prog(f, c.sister, 10)}><DrawPath d={`M${lp[0] - 24},${lp[1] - armY + 20} L${lp[0] - 100},${lp[1] - armY - 40}`} at={c.chrom - 6} dur={12} color={AMBER_INK} width={4} /></g>
				<g opacity={1 - prog(f, c.still, 10)}><DrawPath d={`M${lp[0] + 24},${lp[1] + 120} L${lp[0] + 80},${lp[1] + 170}`} at={c.both + 6} dur={12} color={AMBER_INK} width={4} /></g>
				<Bracket x1={lp[0] - 34} x2={lp[0] + 34} y={lp[1] + L * 0.55 + 18} at={c.sister} color={AMBER_INK} />
				<PenTap pts={pts} at={tapAt} badge={[0, -175]} out={c.not + 60} />
			</Overlay>
			<Hand at={c.cen + 6} out={c.each} x={150} y={lp[1] + 96} size={54}>centromere</Hand>
			<Hand at={c.chrom - 4} out={c.sister} x={150} y={lp[1] - armY - 110} size={54}>chromatid</Hand>
			<Hand at={c.both + 8} out={c.still} x={lp[0] + 40} y={lp[1] + 166} size={54}>chromatid</Hand>
			<Hand at={c.sister + 8} x={1500} y={300} size={50} w={390}>sister chromatids: identical copies</Hand>
			<Hand at={c.still} x={1500} y={430} size={46} color="#2a2a2a" w={390}>still one chromosome</Hand>
			<Enter at={c.not} style={{position: 'absolute', left: 250, top: 870, padding: '6px 26px', borderRadius: 20, background: 'rgba(255,253,248,0.94)', boxShadow: '0 4px 14px rgba(60,45,20,0.12)'}}>
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 60, color: AMBER_INK, whiteSpace: 'nowrap'}}>4 centromeres = 4 chromosomes (8 chromatids)</div>
			</Enter>
		</>
	);
};

// ---------- 3. When the copying happens (interphase) ----------
const RC: [number, number] = [1200, 545];
const RR = 255;
const COPYC = '#e08a1e', SHAREC = '#2a9d8f';
export const SceneInterphase: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('interphase'), {
		inter: 'In interphase', notrest: 'not a rest', grows: 'The cell grows', sph: 'S phase', copies: 'copies all', two: 'every chromosome already', short: 'much shorter', shares: 'shares those', never: 'never copied', itself: 'mitosis itself',
	});
	const ringP = prog(f, c.inter - 12, 40);
	const angle = interpolate(f, [c.inter, c.sph, c.copies + 36, c.two + 70, c.short + 30, c.shares + 30, c.itself + 36], [0, 126, 198, 322, 326, 357, 360], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
	const dotO = prog(f, c.inter, 10);
	const dot = onCircle(RC[0], RC[1], RR, angle);
	const dup = prog(f, c.copies, 30);
	const sArc = prog(f, c.sph, 20);
	const mArc = prog(f, c.short, 16);
	const icon = (a: number, at: number) => {
		const pop = prog(f, at, 10) * (1 + 0.25 * Math.sin(Math.PI * prog(f, at, 22)));
		return {pt: onCircle(RC[0], RC[1], RR + 62, a), pop};
	};
	const gI = icon(30, c.grows + 10), cI = icon(62, c.grows + 24), tI = icon(94, c.grows + 38);
	const IX = [-100, -52, 22, 66];
	const IROW = RC[1] + 20 - 0.42 * 150;
	usePNuc();
	return (
		<>
			<Heading items={[[0, 'When does the copying happen?']]} size={64} />
			<Overlay>
				{/* the ring */}
				<path d={arcPath(RC[0], RC[1], RR, 0, 324 * ringP)} fill="none" stroke="#d8cdb6" strokeWidth={34} strokeLinecap="butt" />
				<path d={arcPath(RC[0], RC[1], RR, 324, 358)} fill="none" stroke="#d8cdb6" strokeWidth={34} opacity={prog(f, c.short - 20, 14)} />
				<path d={arcPath(RC[0], RC[1], RR, 358, 360)} fill="none" stroke="#d8cdb6" strokeWidth={34} opacity={prog(f, c.itself + 20, 14)} />
				<path d={arcPath(RC[0], RC[1], RR, 126, 126 + 72 * sArc)} fill="none" stroke={COPYC} strokeWidth={34} />
				<path d={arcPath(RC[0], RC[1], RR, 324, 358)} fill="none" stroke={SHAREC} strokeWidth={34} opacity={mArc} />
				<circle cx={dot[0]} cy={dot[1]} r={19} fill={AMBER} stroke={AMBER_INK} strokeWidth={5} opacity={dotO} />
				{/* grows, makes what it needs */}
				<g transform={`translate(${gI.pt[0]},${gI.pt[1]}) scale(${gI.pop})`}>
					<path d="M0,22 L0,-22 M-15,-8 L0,-24 L15,-8" fill="none" stroke={AMBER_INK} strokeWidth={6} strokeLinecap="round" strokeLinejoin="round" />
				</g>
				<g transform={`translate(${cI.pt[0]},${cI.pt[1]}) scale(${cI.pop})`}>
					<circle r={13} fill="none" stroke={AMBER_INK} strokeWidth={6} />
					{Array.from({length: 8}, (_, k) => <line key={k} x1={0} y1={-19} x2={0} y2={-29} stroke={AMBER_INK} strokeWidth={7} strokeLinecap="round" transform={`rotate(${k * 45})`} />)}
				</g>
				<g transform={`translate(${tI.pt[0]},${tI.pt[1]}) scale(${tI.pop})`}>
					<path d="M-20,2 L-6,18 L22,-18" fill="none" stroke="#2f8a5b" strokeWidth={8} strokeLinecap="round" strokeLinejoin="round" />
				</g>
				{/* the model cell inside the ring: the clean coded model */}
				{/* quality fix (6 Nov): the painted nucleus close-up with painted chromosomes, still uncoiled in interphase */}
				<PNuc cx={RC[0]} cy={RC[1] + 20} r={150} o={ringP} />
				<g opacity={ringP}>
					{CH.map((ch, i) => <Chrom key={i} x={RC[0] + IX[i]} y={IROW} kind={ch.kind} color={ch.color} coil={0.15} s={0.62} dup={dup} />)}
				</g>
				<Scribble cx={RC[0] + IX[0]} cy={IROW} rx={32} ry={70} at={c.two} color={AMBER_INK} seed={3} />
				<GreyCross x={onCircle(RC[0], RC[1], RR, 341)[0]} y={onCircle(RC[0], RC[1], RR, 341)[1]} at={c.never} s={1.1} />
			</Overlay>
			<Hand at={c.inter + 16} x={1490} y={610} size={56}>interphase</Hand>
			<Hand at={c.grows} out={c.copies - 12} x={96} y={250} size={50} w={540}>grows, makes what it needs</Hand>
			<Hand at={c.sph + 6} x={780} y={830} size={56} color={COPYC}>S phase: DNA copied</Hand>
			<Hand at={c.short} x={840} y={215} size={54} color={SHAREC}>mitosis</Hand>
			<Hand at={c.shares} x={96} y={420} size={52} color={SHAREC} w={560}>mitosis shares the copies out</Hand>
			<Hand at={c.never + 10} x={96} y={560} size={52} color={INK_SOFT} w={560}>no copying here</Hand>
			<Hand at={c.two + 40} out={c.short} x={96} y={690} size={46} w={600} color="#2a2a2a">every chromosome already has two chromatids</Hand>
			<Line at={c.copies + 10} x={96} y={800} size={60} hand color={COPYC}>copy,</Line>
			<Line at={c.shares + 10} x={290} y={800} size={60} hand color={SHAREC}>share,</Line>
		</>
	);
};
