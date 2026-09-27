// PolymerDiagram (chem12m8Polymer): polymers, M8 L16.
//
// Modes
//   types  (concept-types)     addition: three ethene monomers open their C=C and
//          join into polyethylene, nothing lost. Condensation: diacid + diamine
//          blocks join through amide links and a water molecule pops off at each
//          new link (the by-product is the test).
//   named  (concept-named)     the named addition polymers with their -CH₂-CHX-
//          side group, and the condensation polymers with their polar link.
//   dials  (concept-structure) four dials: chain length, branching,
//          cross-linking, intermolecular forces (Kevlar's H-bond network).
//
// Beats are frames after `delay`, placed where the voiceover says each thing.

import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, Molecule, idleBob, idlePulse} from '../../diorama';
import {Ball, GlossDefs, Mark, Pill, clamp, ease, pop, ramp} from './shared';

export type PolymerProps = {
	mode?: 'types' | 'named' | 'dials';
	delay?: number;
	beats?: number[];
};

const W = 760;
const H = 530;

const DEFAULT_BEATS: Record<NonNullable<PolymerProps['mode']>, number[]> = {
	// addition, doubleBond, noByproduct, polyethylene, condensation, bifunctional, eliminate, nylonPolyester, key
	types: [249, 318, 349, 388, 450, 480, 558, 627, 681],
	// PE, PP, PVC, PS, PTFE, sideGroups, condensation, nylon, PET, polycarbonate, polarLinks
	named: [71, 112, 154, 181, 229, 332, 524, 578, 620, 661, 674],
	// fourDials, chainLength, branching, crossLinking, imf, kevlar
	dials: [245, 272, 400, 529, 644, 752],
};

const beatsFor = (mode: NonNullable<PolymerProps['mode']>, beats?: number[]) =>
	DEFAULT_BEATS[mode].map((v, i) => (beats && typeof beats[i] === 'number' ? beats[i] : v));

const GLOSS = {C: '#3b3b3b', H: '#f2f2ef', Cl: '#4fbf4a', F: '#b8e07a', Me: '#6b6b6b', O: '#e0433a', N: '#3f6fd8'};

// ── types ───────────────────────────────────────────────────────────────────
const Stick = ({x1, y1, x2, y2, w = 6, opacity = 1}: {x1: number; y1: number; x2: number; y2: number; w?: number; opacity?: number}) => (
	<g opacity={opacity}>
		<line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#8c877f" strokeWidth={w} strokeLinecap="round" />
		<line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#d8d3cb" strokeWidth={w * 0.35} strokeLinecap="round" />
	</g>
);

const TypesMode = ({frame, fps, b}: {frame: number; fps: number; b: number[]}) => {
	const theme = useAccent();
	const ID = 'c12m8poly-typ';
	const [tAdd, tDbl, tNoBy, tPE, tCond, tBi, tElim, tEx, tKey] = b;
	const pulse = idlePulse(frame);

	// Addition: 3 ethene → chain of 6 carbons
	const AY = 128;
	const join = ease(ramp(frame, tDbl + 6, 40));
	const monoCx = [210, 380, 550];
	const chainX = (k: number) => 380 + (k - 2.5) * 68;
	const carbons = [0, 1, 2, 3, 4, 5].map((k) => {
		const m = Math.floor(k / 2), side = k % 2 ? 1 : -1;
		const x0 = monoCx[m] + side * 24;
		return {x: x0 + (chainX(k) - x0) * join, y: AY};
	});
	const hAng = (k: number, up: boolean) => {
		// monomer: H at ±60° from the C=C axis, outward; chain: straight up/down
		const side = k % 2 ? 1 : -1;
		const monoA = (up ? -1 : 1) * (side > 0 ? 60 : 120);
		const chainA = up ? -90 : 90;
		return ((monoA + (chainA - monoA) * join) * Math.PI) / 180;
	};
	const addIn = ramp(frame, tAdd - 30, 16);

	// Condensation: diacid – diamine – diacid
	const CY = 382;
	const link = ease(ramp(frame, tElim, 30));
	const blocks = [
		{x0: 118, x1: 150, name: 'diacid', l: 'HOOC', r: 'COOH', fill: '#dcefe8'},
		{x0: 380, x1: 380, name: 'diamine', l: 'H₂N', r: 'NH₂', fill: '#e2e6f3'},
		{x0: 642, x1: 610, name: 'diacid', l: 'HOOC', r: 'COOH', fill: '#dcefe8'},
	];
	const BW = 100;
	const condIn = ramp(frame, tCond, 16);
	const bi = ramp(frame, tBi, 14);
	const waterT = (j: number) => ramp(frame, tElim + 20 + j * 10, 60);
	const junction = (j: number) => {
		const a = blocks[j], c = blocks[j + 1];
		const ax = a.x0 + (a.x1 - a.x0) * link, cx = c.x0 + (c.x1 - c.x0) * link;
		return (ax + BW / 2 + cx - BW / 2) / 2;
	};
	return (
		<g>
			<DioramaDefs id={ID} elements={['O', 'H']} />
			<GlossDefs id={ID} colors={GLOSS} />
			{/* ADDITION */}
			<g opacity={addIn}>
				<text x={28} y={36} fill={TOK.ink} fontSize={24} fontWeight={800}>Addition</text>
				<text x={150} y={36} fill={TOK.inkDim} fontSize={18} fontWeight={700}>alkene monomers join across the C=C</text>
				{/* C–C bonds */}
				{carbons.map((c, k) => {
					if (k === 5) return null;
					const n = carbons[k + 1];
					const inMono = k % 2 === 0;
					if (inMono) {
						// C=C: second stick fades as the double bond opens
						return (
							<g key={k}>
								<Stick x1={c.x} y1={c.y - 6 * (1 - join)} x2={n.x} y2={n.y - 6 * (1 - join)} />
								<Stick x1={c.x} y1={c.y + 7} x2={n.x} y2={n.y + 7} opacity={1 - join} />
							</g>
						);
					}
					return <Stick key={k} x1={c.x} y1={c.y} x2={c.x + (n.x - c.x) * join} y2={n.y} opacity={join > 0.02 ? 1 : 0} />;
				})}
				{/* dangling chain ends */}
				<g opacity={ramp(frame, tDbl + 40, 12)}>
					<line x1={carbons[0].x - 18} y1={AY} x2={carbons[0].x - 50} y2={AY} stroke="#8c877f" strokeWidth={6} strokeLinecap="round" strokeDasharray="2 10" />
					<line x1={carbons[5].x + 18} y1={AY} x2={carbons[5].x + 50} y2={AY} stroke="#8c877f" strokeWidth={6} strokeLinecap="round" strokeDasharray="2 10" />
				</g>
				{carbons.map((c, k) => (
					<g key={k}>
						{[true, false].map((up) => {
							const a = hAng(k, up);
							const hx = c.x + Math.cos(a) * 40, hy = c.y + Math.sin(a) * 40;
							return (
								<g key={String(up)}>
									<Stick x1={c.x} y1={c.y} x2={hx} y2={hy} w={4.5} />
									<Ball id={ID} name="H" color={GLOSS.H} x={hx} y={hy + idleBob(frame, k * 2 + (up ? 0 : 1), 0.6)} r={12} />
								</g>
							);
						})}
					</g>
				))}
				{carbons.map((c, k) => <Ball key={k} id={ID} name="C" color={GLOSS.C} x={c.x} y={c.y} r={18} label="C" labelSize={16} />)}
				<g opacity={(1 - join) * ramp(frame, tAdd, 14)}>
					{monoCx.map((x) => (
						<text key={x} x={x} y={AY + 72} textAnchor="middle" fill={TOK.ink} fontSize={18} fontWeight={800}>CH₂=CH₂</text>
					))}
				</g>
				<g opacity={ramp(frame, tPE, 14)}>
					<text x={380} y={AY + 74} textAnchor="middle" fill={TOK.ink} fontSize={20} fontWeight={800}>polyethylene</text>
				</g>
				<g opacity={ramp(frame, tNoBy, 14)}>
					<Mark x={590} y={AY + 68} ok size={13} color={theme.accent} />
					<text x={610} y={AY + 74} fill={theme.accent} fontSize={18} fontWeight={800}>no by-product</text>
				</g>
			</g>
			<line x1={24} y1={236} x2={W - 24} y2={236} stroke={TOK.rule} strokeWidth={2} opacity={condIn} />
			{/* CONDENSATION */}
			<g opacity={condIn}>
				<text x={28} y={276} fill={TOK.ink} fontSize={24} fontWeight={800}>Condensation</text>
				<text x={206} y={276} fill={TOK.inkDim} fontSize={18} fontWeight={700} opacity={bi}>bifunctional monomers: two reactive groups</text>
				{blocks.map((bk, i) => {
					const x = bk.x0 + (bk.x1 - bk.x0) * link;
					const bob = idleBob(frame, i + 10, 1.2);
					const inner = (j: 'l' | 'r') => (i === 1 ? true : i === 0 ? j === 'r' : j === 'l');
					return (
						<g key={i} transform={`translate(0,${bob})`}>
							<rect x={x - BW / 2} y={CY - 20} width={BW} height={40} rx={12} fill={bk.fill} stroke={shadeInk} strokeWidth={1.5} />
							<text x={x} y={CY + 6} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={800}>{bk.name}</text>
							{/* end groups: the inner ones react */}
							<text x={x - BW / 2 - 6} y={CY + 6} textAnchor="end" fill={inner('l') ? TOK.ink : TOK.inkDim} fontSize={18} fontWeight={800} opacity={inner('l') ? 1 - link : 1}>{bk.l}</text>
							<text x={x + BW / 2 + 6} y={CY + 6} fill={inner('r') ? TOK.ink : TOK.inkDim} fontSize={18} fontWeight={800} opacity={inner('r') ? 1 - link : 1}>{bk.r}</text>
						</g>
					);
				})}
				{[0, 1].map((j) => {
					const jx = junction(j);
					const wt = waterT(j);
					const txt = j === 0 ? '–CO–NH–' : '–NH–CO–';
					return (
						<g key={j}>
							<text x={jx} y={CY + 6} textAnchor="middle" fill={theme.accent} fontSize={18} fontWeight={800} opacity={link}>{txt}</text>
							{wt > 0 && wt < 1 && (
								<g opacity={interpolate(wt, [0, 0.1, 0.75, 1], [0, 1, 1, 0], clamp)}>
									<Molecule id={ID} atoms={['O', 'H', 'H']} x={jx + (j ? 1 : -1) * wt * 20} y={CY - 36 - wt * 36} r={15} />
									<text x={jx + (j ? 1 : -1) * wt * 20 + 28} y={CY - 38 - wt * 36} fill={TOK.amberInk} fontSize={18} fontWeight={800}>H₂O</text>
								</g>
							)}
						</g>
					);
				})}
				<g opacity={ramp(frame, tElim + 70, 14)}>
					<Pill x={622} y={CY + 88} text="H₂O (or HCl) lost" size={17} color={TOK.amber} fill="#fff6e6" textColor={TOK.amberInk} strokeWidth={2 + pulse * 1.2} />
				</g>
				<g opacity={link}>
					<text x={junction(0)} y={CY + 50} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={700}>amide link</text>
					<text x={junction(1)} y={CY + 50} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={700}>amide link</text>
				</g>
				<text x={296} y={CY + 94} textAnchor="middle" fill={TOK.ink} fontSize={19} fontWeight={800} opacity={ramp(frame, tEx, 14)}>
					e.g. nylon (polyamide) and polyester
				</text>
			</g>
			<g opacity={ramp(frame, tKey, 16)}>
				<text x={W / 2} y={518} textAnchor="middle" fill={TOK.amberInk} fontSize={21} fontWeight={800}>The test: by-product or no by-product?</text>
			</g>
		</g>
	);
};
const shadeInk = 'rgba(0,0,0,0.18)';

// ── named ───────────────────────────────────────────────────────────────────
const NamedMode = ({frame, fps, b}: {frame: number; fps: number; b: number[]}) => {
	const theme = useAccent();
	const ID = 'c12m8poly-nam';
	const [tPE, tPP, tPVC, tPS, tPTFE, tSide, tCond, tNy, tPET, tPC, tPolar] = b;
	const pulse = idlePulse(frame);
	type Row = {t: number; name: string; pre: string; side: string; post: string; ball: 'H' | 'Me' | 'Cl' | 'Ph' | 'F'; sideName: string};
	const add: Row[] = [
		{t: tPE, name: 'polyethylene', pre: '–CH₂–CH₂–', side: '', post: '', ball: 'H', sideName: 'H'},
		{t: tPP, name: 'polypropylene', pre: '–CH₂–CH(', side: 'CH₃', post: ')–', ball: 'Me', sideName: 'CH₃'},
		{t: tPVC, name: 'PVC', pre: '–CH₂–CH', side: 'Cl', post: '–', ball: 'Cl', sideName: 'Cl'},
		{t: tPS, name: 'polystyrene', pre: '–CH₂–CH(', side: 'C₆H₅', post: ')–', ball: 'Ph', sideName: 'phenyl'},
		{t: tPTFE, name: 'PTFE', pre: '–C', side: 'F₂', post: '–C', ball: 'F', sideName: 'all F'},
	];
	const cond = [
		{t: tNy, name: 'nylon-6,6', kind: 'polyamide', link: '–CO–NH–', linkName: 'amide link'},
		{t: tPET, name: 'PET', kind: 'polyester', link: '–CO–O–', linkName: 'ester link'},
		{t: tPC, name: 'polycarbonate', kind: 'polycarbonate', link: '–O–CO–O–', linkName: 'carbonate link'},
	];
	return (
		<g>
			<GlossDefs id={ID} colors={GLOSS} />
			{/* addition panel */}
			<g opacity={ramp(frame, tPE - 40, 14)}>
				<rect x={14} y={14} width={420} height={420} rx={20} fill="#ffffff" fillOpacity={0.6} stroke={TOK.cardBorder} strokeWidth={1.5} />
				<text x={34} y={50} fill={TOK.ink} fontSize={22} fontWeight={800}>Addition</text>
				<text x={414} y={50} textAnchor="end" fill={TOK.inkDim} fontSize={18} fontWeight={800}>repeat unit –CH₂–CHX–</text>
			</g>
			{add.map((r, i) => {
				const p = pop(frame, fps, r.t);
				const y = 102 + i * 60;
				const bob = idleBob(frame, i, 1);
				return (
					<g key={r.name} opacity={Math.min(1, p * 1.3)} transform={`translate(${(1 - Math.min(p, 1)) * -12},0)`}>
						<text x={34} y={y + 7} fill={TOK.ink} fontSize={19} fontWeight={800}>{r.name}</text>
						<text x={190} y={y + 7} fill={TOK.ink} fontSize={19} fontWeight={700}>
							{r.pre}
							<tspan fill={theme.accent} fontWeight={800}>{r.side}</tspan>
							{r.post}
							{r.ball === 'F' && (
								<>
									<tspan fill={theme.accent} fontWeight={800}>F₂</tspan>–
								</>
							)}
						</text>
						<g transform={`translate(0,${bob})`}>
							{r.ball === 'Ph' ? (
								<g>
									<polygon points={[0, 1, 2, 3, 4, 5].map((k) => `${392 + 15 * Math.cos(((60 * k - 90) * Math.PI) / 180)},${y + 15 * Math.sin(((60 * k - 90) * Math.PI) / 180)}`).join(' ')} fill="#ffffff" stroke={TOK.ink} strokeWidth={2.5} />
									<circle cx={392} cy={y} r={8} fill="none" stroke={TOK.ink} strokeWidth={2} />
								</g>
							) : (
								<Ball id={ID} name={r.ball} color={GLOSS[r.ball]} x={392} y={y} r={r.ball === 'H' ? 12 : 18} label={r.ball === 'Me' ? 'CH₃' : r.ball} labelSize={r.ball === 'Me' ? 15 : r.ball === 'H' ? 15 : 17} labelColor={r.ball === 'H' || r.ball === 'F' ? TOK.ink : '#ffffff'} />
							)}
						</g>
					</g>
				);
			})}
			<g opacity={ramp(frame, tSide, 16)}>
				<text x={224} y={404} textAnchor="middle" fill={TOK.inkDim} fontSize={17} fontWeight={700}>side group changes packing and IMFs</text>
			</g>
			{/* condensation panel */}
			<g opacity={ramp(frame, tCond, 14)}>
				<rect x={446} y={14} width={300} height={420} rx={20} fill="#ffffff" fillOpacity={0.6} stroke={TOK.cardBorder} strokeWidth={1.5} />
				<text x={466} y={50} fill={TOK.ink} fontSize={22} fontWeight={800}>Condensation</text>
			</g>
			{cond.map((c, i) => {
				const p = pop(frame, fps, c.t);
				const y = 110 + i * 100;
				return (
					<g key={c.name} opacity={Math.min(1, p * 1.3)} transform={`translate(${(1 - Math.min(p, 1)) * 12},0)`}>
						<text x={466} y={y} fill={TOK.ink} fontSize={20} fontWeight={800}>{c.name}</text>
						{c.kind !== c.name && <text x={466} y={y + 26} fill={TOK.inkDim} fontSize={17} fontWeight={700}>{c.kind}</text>}
						<rect x={466} y={y + 38} width={textWidth(c.link, 20) + 20} height={32} rx={9} fill={theme.soft} stroke={theme.accent} strokeWidth={2} />
						<text x={476} y={y + 61} fill={theme.accent} fontSize={20} fontWeight={800}>{c.link}</text>
						{c.linkName && <text x={466 + textWidth(c.link, 20) + 32} y={y + 61} fill={TOK.inkDim} fontSize={16} fontWeight={700}>{c.linkName}</text>}
					</g>
				);
			})}
			<g opacity={ramp(frame, tPolar, 16)}>
				<rect x={60} y={458} width={640} height={52} rx={26} fill="#fff6e6" stroke={TOK.amber} strokeWidth={2 + pulse * 1.5} />
				<text x={W / 2} y={491} textAnchor="middle" fill={TOK.amberInk} fontSize={20} fontWeight={800}>polar links in the backbone → stronger IMFs</text>
			</g>
		</g>
	);
};
const textWidth = (s: string, size: number) => s.length * size * 0.56;

// ── dials ───────────────────────────────────────────────────────────────────
const Dial = ({x, y, value, label, amber = false}: {x: number; y: number; value: number; label: string; amber?: boolean}) => {
	const r = 38;
	const a = Math.PI * (1 - value);
	const nx = x + Math.cos(a) * (r - 6), ny = y - Math.sin(a) * (r - 6);
	const arc = (v: number) => {
		const e = Math.PI * (1 - v);
		return `M ${x - r} ${y} A ${r} ${r} 0 0 1 ${x + Math.cos(e) * r} ${y - Math.sin(e) * r}`;
	};
	const col = amber ? TOK.amber : '#148a6f';
	return (
		<g>
			<path d={arc(1)} fill="none" stroke="#e3dfd8" strokeWidth={10} strokeLinecap="round" />
			{value > 0.01 && <path d={arc(value)} fill="none" stroke={col} strokeWidth={10} strokeLinecap="round" />}
			<line x1={x} y1={y} x2={nx} y2={ny} stroke={TOK.ink} strokeWidth={3.5} strokeLinecap="round" />
			<circle cx={x} cy={y} r={6} fill={TOK.ink} />
			{label.split('\n').map((l, i) => (
				<text key={i} x={x} y={y + 26 + i * 18} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={800}>{l}</text>
			))}
		</g>
	);
};

const wavy = (x0: number, y: number, len: number, amp: number, phase: number) => {
	const pts: string[] = [];
	for (let i = 0; i <= 24; i++) {
		const t = i / 24;
		pts.push(`${x0 + t * len},${y + Math.sin(t * Math.PI * (len / 22) + phase) * amp}`);
	}
	return pts.join(' ');
};

const DialsMode = ({frame, fps, b}: {frame: number; fps: number; b: number[]}) => {
	const theme = useAccent();
	const ID = 'c12m8poly-dia';
	const [tFour, tLen, tBr, tX, tImf, tKev] = b;
	const pulse = idlePulse(frame);
	const panels = [
		{x: 16, y: 14, t: tLen, title: 'Chain length', dial: 'strength', out: 'longer → stronger,', out2: 'higher melting range'},
		{x: 392, y: 14, t: tBr, title: 'Branching', dial: 'flexibility', out: 'packs loosely →', out2: 'softer, more flexible'},
		{x: 16, y: 262, t: tX, title: 'Cross-linking', dial: 'rigidity', out: 'rigid network: thermoset,', out2: 'cannot be remelted'},
		{x: 392, y: 262, t: tImf, title: 'Intermolecular forces', dial: 'tensile\nstrength', out: 'H-bonds → high strength', out2: 'and thermal resistance'},
	];
	const PW = 352, PH = 236;
	const wob = (i: number) => Math.sin(frame / 20 + i) * 1.5;
	return (
		<g>
			<GlossDefs id={ID} colors={GLOSS} />
			{panels.map((p, i) => {
				const o = ramp(frame, i === 0 ? Math.min(tFour, p.t) : p.t, 16);
				const g = ease(ramp(frame, p.t + 10, 50));
				const val = i === 3 ? 0.2 + 0.35 * g + 0.38 * ease(ramp(frame, tKev, 40)) : 0.2 + 0.7 * g;
				const ix = p.x + 18, iy = p.y + 64; // illustration box origin (220 × 120)
				return (
					<g key={i} opacity={o}>
						<rect x={p.x} y={p.y} width={PW} height={PH} rx={18} fill="#ffffff" fillOpacity={0.7} stroke={i === 3 && frame > tKev ? TOK.amber : TOK.cardBorder} strokeWidth={i === 3 && frame > tKev ? 2 + pulse * 1.5 : 1.5} />
						<text x={p.x + 18} y={p.y + 34} fill={TOK.ink} fontSize={20} fontWeight={800}>{p.title}</text>
						<Dial x={p.x + PW - 58} y={p.y + 120} value={val} label={p.dial} amber={i === 3 && frame > tKev} />
						<text x={p.x + 18} y={p.y + PH - 38} fill={TOK.ink} fontSize={17} fontWeight={800}>
							{i === 3 ? (
								<>
									<tspan fill={frame > tKev ? TOK.amberInk : TOK.ink}>H-bonds</tspan> → high strength
								</>
							) : (
								p.out
							)}
						</text>
						<text x={p.x + 18} y={p.y + PH - 16} fill={TOK.ink} fontSize={17} fontWeight={800}>{p.out2}</text>
						{/* illustrations */}
						{i === 0 && [0, 1, 2, 3].map((k) => {
							const len = 70 + 150 * g;
							return <polyline key={k} points={wavy(ix + (k % 2) * 8, iy + 14 + k * 26 + wob(k), len, 5, k)} fill="none" stroke={TOK.ink} strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />;
						})}
						{i === 1 && [0, 1, 2].map((k) => {
							const y0 = iy + 14 + k * 40 + wob(k + 4);
							const x0 = ix + (k % 2) * 14;
							return (
								<g key={k}>
									<polyline points={wavy(x0, y0, 200, 4, k)} fill="none" stroke={TOK.ink} strokeWidth={4} strokeLinecap="round" />
									{[0, 1, 2, 3].map((m) => {
										const bx = x0 + 26 + m * 48;
										const by = y0;
										const up = (m + k) % 2 ? -1 : 1;
										return <polyline key={m} points={`${bx},${by} ${bx + 8 * g},${by + up * 16 * g} ${bx + 2 * g},${by + up * 26 * g}`} fill="none" stroke={theme.accent} strokeWidth={3.5} strokeLinecap="round" strokeLinejoin="round" opacity={g > 0.02 ? 1 : 0} />;
									})}
								</g>
							);
						})}
						{i === 2 && (
							<g>
								{[0, 1, 2].map((k) => <polyline key={k} points={wavy(ix, iy + 14 + k * 42 + wob(k + 8) * 0.5, 210, 5, k * 2)} fill="none" stroke={TOK.ink} strokeWidth={4} strokeLinecap="round" />)}
								{[0, 1, 2, 3, 4].map((m) => {
									const k = m % 2;
									const x = ix + 24 + m * 40;
									const pr = ramp(frame, p.t + 14 + m * 6, 12);
									return <line key={m} x1={x} y1={iy + 18 + k * 42} x2={x} y2={iy + 18 + k * 42 + 34 * pr} stroke={theme.accent} strokeWidth={5} strokeLinecap="round" />;
								})}
							</g>
						)}
						{i === 3 && (
							<g>
								{/* two amide-bearing chains: C=O on the top chain faces N–H on the bottom chain */}
								<polyline points={wavy(ix, iy + 12, 210, 3, 0)} fill="none" stroke={TOK.ink} strokeWidth={4} strokeLinecap="round" />
								<polyline points={wavy(ix, iy + 104, 210, 3, 1)} fill="none" stroke={TOK.ink} strokeWidth={4} strokeLinecap="round" />
								{[0, 1, 2, 3].map((m) => {
									const x = ix + 26 + m * 52;
									const hb = ramp(frame, tKev + m * 6, 12);
									return (
										<g key={m}>
											<line x1={x} y1={iy + 14} x2={x} y2={iy + 34} stroke="#8c877f" strokeWidth={4} />
											<Ball id={ID} name="O" color={GLOSS.O} x={x} y={iy + 38} r={9} />
											<line x1={x} y1={iy + 102} x2={x} y2={iy + 88} stroke="#8c877f" strokeWidth={4} />
											<Ball id={ID} name="N" color={GLOSS.N} x={x} y={iy + 102} r={8} />
											<Ball id={ID} name="H" color={GLOSS.H} x={x} y={iy + 82} r={7} />
											<line x1={x} y1={iy + 49} x2={x} y2={iy + 73} stroke={TOK.amber} strokeWidth={3.5} strokeDasharray="4 4" opacity={hb * (0.7 + 0.3 * pulse)} />
										</g>
									);
								})}
							</g>
						)}
					</g>
				);
			})}
			<g opacity={ramp(frame, tKev + 40, 16)}>
				<text x={W / 2} y={H - 8} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={700}>
					Kevlar, nylon: amide H-bond network · polyethylene: non-polar, much weaker
				</text>
			</g>
		</g>
	);
};

export const PolymerDiagram = ({mode = 'types', delay = 62, beats}: PolymerProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const b = beatsFor(mode, beats);
	const label = {
		types: 'Addition polymerisation joins ethene monomers with no by-product; condensation polymerisation eliminates water at each new link',
		named: 'Named addition polymers with their side groups and condensation polymers with their polar links',
		dials: 'Chain length, branching, cross-linking and intermolecular forces control polymer properties',
	}[mode];
	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={label} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			{mode === 'types' && <TypesMode frame={frame} fps={fps} b={b} />}
			{mode === 'named' && <NamedMode frame={frame} fps={fps} b={b} />}
			{mode === 'dials' && <DialsMode frame={frame} fps={fps} b={b} />}
		</svg>
	);
};
