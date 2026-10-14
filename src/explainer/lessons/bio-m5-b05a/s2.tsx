import React from 'react';
import {useCurrentFrame, interpolate} from 'remotion';
import {cues} from '../../cues';
import {
	AMBER, AMBER_INK, arcPath, Bracket, CellBody, CH, Chrom, CX, CY, DrawPath, Envelope, FONT_DISPLAY, FONT_HAND, GreyCross, GreyTag, Hand, Heading,
	INK, INK_SOFT, lerp, NUC_X, onCircle, Overlay, PenTap, Pill, prog, S, Scribble, vis, Line,
} from './shared';

const PLUM_INK = '#7e3a69';
const TEAL_INK = '#1f7a6f';

// ---------- 2c. Why copy first ----------
const HalfBar: React.FC<{x: number; y: number; h: number; top: boolean; color: string; o?: number}> = ({x, y, h, top, color, o = 1}) => {
	const w = 9;
	const d = top
		? `M${x - w},${y} L${x - w},${y - h + w} A${w},${w} 0 0 1 ${x + w},${y - h + w} L${x + w},${y} Z`
		: `M${x - w},${y} L${x - w},${y + h - w} A${w},${w} 0 0 0 ${x + w},${y + h - w} L${x + w},${y} Z`;
	return <path d={d} fill={color} stroke={INK} strokeWidth={3} strokeLinejoin="round" opacity={o} />;
};
export const SceneWhyCopy: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('why-copy-first'), {
		problem: 'Here is the problem', cut: 'cut in half', half: 'each half would', shared: 'just shared out', onlyHalf: 'only half of them', both: 'both sets', copied: 'has to be copied', video: 'DNA copying video',
	});
	const cutLine = prog(f, c.cut, 18);
	const apart = prog(f, c.cut + 24, 22) * (1 - prog(f, c.shared - 10, 14));
	const out = prog(f, c.shared - 6, 30) * (1 - prog(f, c.copied - 4, 30));
	const home = (i: number): [number, number] => [CX + NUC_X[i], CY];
	const away: [number, number][] = [[565, 540], [1245, 540], [675, 540], [1355, 540]];
	const pos = (i: number): [number, number] => [lerp(home(i)[0], away[i][0], out), lerp(home(i)[1], away[i][1], out)];
	const ghostO = out;
	const mainO = 1 - out;
	const copyIcon = prog(f, c.copied + 6, 18);
	const [lx, ly] = home(0);
	const barsO = 1 - apart;
	return (
		<>
			<Heading items={[[0, 'Why copy first?']]} size={64} />
			<Overlay>
				<g opacity={mainO}>
					<CellBody />
					<Envelope />
				</g>
				{[[620, 540], [1300, 540]].map(([x, y], i) => (
					<g key={i} opacity={ghostO}>
						<circle cx={x} cy={y} r={190} fill="rgba(251,246,232,0.7)" stroke={INK_SOFT} strokeWidth={5} strokeDasharray="14 12" />
						<GreyCross x={x + 140} y={y - 160} at={c.onlyHalf + 20 + i * 10} />
					</g>
				))}
				{CH.map((ch, i) => <Chrom key={i} x={pos(i)[0]} y={pos(i)[1]} kind={ch.kind} color={ch.color} dup={0} o={i === 0 ? barsO : 1} />)}
				{/* the cut: two grey halves */}
				<g opacity={apart}>
					<HalfBar x={lx} y={ly - 10 * apart} h={85} top color="#c9ccd0" />
					<HalfBar x={lx} y={ly + 10 * apart} h={85} top={false} color="#c9ccd0" />
					<GreyCross x={lx - 42} y={ly - 54} at={c.half + 4} s={0.8} />
					<GreyCross x={lx - 42} y={ly + 54} at={c.half + 12} s={0.8} />
				</g>
				<line x1={lx - 62} x2={lx + 62} y1={ly} y2={ly} stroke={AMBER_INK} strokeWidth={6} strokeDasharray="12 9" strokeLinecap="round" opacity={cutLine * (1 - prog(f, c.half + 50, 12))} style={{clipPath: `inset(0 ${100 - cutLine * 100}% 0 0)`}} />
				{/* copy icon lands beside the nucleus */}
				<g opacity={copyIcon} transform={`translate(${1330},${380 - (1 - copyIcon) * 90})`}>
					<rect x={-48} y={-52} width={72} height={92} rx={8} fill="#fffdf8" stroke={AMBER_INK} strokeWidth={5} />
					<rect x={-24} y={-32} width={72} height={92} rx={8} fill="#fffdf8" stroke={AMBER_INK} strokeWidth={5} />
					<line x1={-8} x2={30} y1={-6} y2={-6} stroke={AMBER_INK} strokeWidth={5} strokeLinecap="round" />
					<line x1={-8} x2={30} y1={14} y2={14} stroke={AMBER_INK} strokeWidth={5} strokeLinecap="round" />
					<line x1={-8} x2={18} y1={34} y2={34} stroke={AMBER_INK} strokeWidth={5} strokeLinecap="round" />
				</g>
			</Overlay>
			<Hand at={c.half} out={c.shared - 8} x={110} y={420} size={46} w={350}>each half would carry only half of the instructions</Hand>
			<Hand at={c.onlyHalf} out={c.copied - 6} x={430} y={760} size={46} w={380}>only half the chromosomes</Hand>
			<Hand at={c.onlyHalf + 10} out={c.copied - 6} x={1110} y={760} size={46} w={380}>only half the chromosomes</Hand>
			<Hand at={c.both} out={c.copied - 6} x={560} y={878} size={56}>a skin cell needs both sets</Hand>
			<Hand at={c.copied + 14} x={1230} y={470} size={58}>copy first</Hand>
			<Pill at={c.video} x={620} y={850} size={44}>recall: the DNA copying video</Pill>
		</>
	);
};

// ---------- 2d. What the copy looks like, and how to count ----------
export const SceneTheCopy: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('the-copy'), {
		after: 'After copying', identical: 'identical copies', joined: 'joined at', cen: 'the centromere', each: 'Each copy', chrom: 'chromatid', both: 'the two together',
		sister: 'sister chromatids', still: 'It is still', count: 'count the centromeres', not: 'not the chromatids',
	});
	const zp = prog(f, 0, 56);
	const Z = 1 + 0.4 * zp;
	const T = (x: number, y: number): [number, number] => [CX + (x - CX) * Z, CY + (y - CY) * Z];
	const dupP = (i: number) => prog(f, c.after + 8 + i * 4, 34);
	const pulse = (i: number) => 1 + 0.07 * Math.sin(Math.PI * prog(f, c.after + 8 + i * 4, 34));
	const hiA = vis(f, c.each, c.both - 4, 8) ;
	const hiB = vis(f, c.both - 2, c.sister - 6, 8);
	const lp = T(CX + NUC_X[0], CY);
	const pts: [number, number][] = [0, 1, 2, 3].map(i => T(CX + NUC_X[i], CY));
	const tapAt = [c.count + 10, c.count + 30, c.count + 50, c.count + 70];
	return (
		<>
			<Heading items={[[0, 'What the copy looks like']]} size={64} />
			<Overlay>
				<g transform={`translate(${CX},${CY}) scale(${Z}) translate(${-CX},${-CY})`}>
					<CellBody o={1 - 0.8 * zp} />
					<Envelope />
					{CH.map((ch, i) => <Chrom key={i} x={CX + NUC_X[i]} y={CY} kind={ch.kind} color={ch.color} dup={dupP(i)} s={pulse(i)} hiA={i === 0 ? hiA : 0} hiB={i === 0 ? hiB : 0} />)}
				</g>
				<Scribble cx={lp[0]} cy={lp[1]} rx={34} ry={34} at={c.cen} color={AMBER_INK} seed={3} />
				<DrawPath d={`M${lp[0] - 34},${lp[1] + 10} L${lp[0] - 140},${lp[1] + 90}`} at={c.cen + 10} dur={12} color={AMBER_INK} width={4} />
				<DrawPath d={`M${lp[0] - 8},${lp[1] - 112} L${lp[0] - 90},${lp[1] - 190}`} at={c.chrom - 6} dur={12} color={AMBER_INK} width={4} />
				<DrawPath d={`M${lp[0] + 8},${lp[1] + 112} L${lp[0] + 80},${lp[1] + 170}`} at={c.both + 6} dur={12} color={AMBER_INK} width={4} />
				<Bracket x1={lp[0] - 22} x2={lp[0] + 22} y={lp[1] + 128} at={c.sister} color={AMBER_INK} />
				<PenTap pts={pts} at={tapAt} badge={[0, -150]} out={c.not + 60} />
			</Overlay>
			<Hand at={c.cen + 6} out={c.each} x={120} y={lp[1] + 96} size={54}>centromere</Hand>
			<Hand at={c.chrom - 4} out={c.sister} x={140} y={lp[1] - 262} size={54}>chromatid</Hand>
			<Hand at={c.both + 8} out={c.still} x={lp[0] + 40} y={lp[1] + 166} size={54}>chromatid</Hand>
			<Hand at={c.sister + 8} x={1340} y={300} size={52} w={480}>sister chromatids: identical copies</Hand>
			<Hand at={c.still} x={1340} y={420} size={46} color={INK} w={480}>still one chromosome</Hand>
			<Hand at={c.not} x={300} y={876} size={60} color={AMBER_INK}>4 centromeres = 4 chromosomes (8 chromatids)</Hand>
		</>
	);
};

// ---------- 3. When the copying happens (interphase) ----------
const RC: [number, number] = [1200, 545];
const RR = 255;
const COPYC = '#e08a1e', SHAREC = '#2a9d8f', SPLITC = '#c4432f';
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
				{/* the model cell inside the ring */}
				<ellipse cx={RC[0]} cy={RC[1]} rx={190} ry={176} fill="#fbf6e8" stroke="#8a7a63" strokeWidth={5} opacity={ringP} />
				<Envelope cx={RC[0]} cy={RC[1]} r={128} o={ringP} />
				{CH.map((ch, i) => <Chrom key={i} x={RC[0] + NUC_X[i] * 0.52} y={RC[1]} kind={ch.kind} color={ch.color} dup={dup} s={0.55} o={ringP} />)}
				<Scribble cx={RC[0] + NUC_X[0] * 0.52} cy={RC[1]} rx={28} ry={58} at={c.two} color={AMBER_INK} seed={3} />
				<GreyCross x={onCircle(RC[0], RC[1], RR, 341)[0]} y={onCircle(RC[0], RC[1], RR, 341)[1]} at={c.never} s={1.1} />
			</Overlay>
			<Hand at={c.inter + 16} x={1490} y={610} size={56}>interphase</Hand>
			<Hand at={c.grows} out={c.copies - 12} x={96} y={250} size={50} w={540}>grows, makes what it needs</Hand>
			<Hand at={c.sph + 6} x={780} y={830} size={56} color={COPYC}>S phase: DNA copied</Hand>
			<Hand at={c.short} x={840} y={215} size={54} color={SHAREC}>mitosis</Hand>
			<Hand at={c.shares} x={96} y={420} size={52} color={SHAREC} w={560}>mitosis shares the copies out</Hand>
			<Hand at={c.never + 10} x={96} y={560} size={52} color={INK_SOFT} w={560}>no copying here</Hand>
			<Hand at={c.two + 40} x={96} y={690} size={46} w={600} color={INK}>every chromosome already has two chromatids</Hand>
			<Line at={c.copies + 10} x={96} y={800} size={60} hand color={COPYC}>copy,</Line>
			<Line at={c.shares + 10} x={290} y={800} size={60} hand color={SHAREC}>share,</Line>
		</>
	);
};
