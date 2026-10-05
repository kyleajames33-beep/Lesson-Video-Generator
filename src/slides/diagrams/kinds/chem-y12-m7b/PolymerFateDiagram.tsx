// PolymerFateDiagram — what happens to polymer chains: heat, water, enzymes, UV.
//
// Chains are bead strings (carbon beads, as in the Y11 polymer kinds). An
// addition-polymer backbone is all C–C; a condensation-polymer backbone has an
// ester link (a red O bead, with a C=O on the carbon before it) every few
// beads. Three modes:
//
//  thermo       (L21) Chains held only by intermolecular forces (dashed). Heat
//               loosens them (they spread and wiggle: soft, remouldable), cooling
//               restores them (recyclable). Then the environmental half: an
//               enzyme bounces off the C–C backbone, and UV/abrasion fragments
//               the chains into ever-smaller pieces (microplastics).
//  hydrolysis   (L22) Addition chain vs condensation chain. Water arrives: it
//               bounces off the C–C backbone but splits the condensation chain
//               at every ester link. The addition chain only fragments.
//  environment  (L23) Addition chain: enzyme can't cut it; UV fragments it into
//               microplastics. Condensation chain: hydrolysed at its links. Then
//               the recycling verdict: thermoplastic yes, cross-linked thermoset no.
//
// Pieces are drawn stylised (bead counts are not atom counts).

import {Easing, interpolate, useCurrentFrame} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, ELEMENT_COLORS, idleBob} from '../../diorama';
import {Chip, ELEMENTS, Mol, Title, clamp, fadeAt, shade} from './shared';

export type PolymerFateProps = {
	reviewedPolymer?: boolean;
	mode?: 'thermo' | 'hydrolysis' | 'environment';
	title?: string;
	beats?: {
		chains?: number; imf?: number; heat?: number; cool?: number; recycle?: number; enzyme?: number; uv?: number; micro?: number; verdict?: number;
		addition?: number; condensation?: number; water?: number; degradable?: number; protein?: number; fragments?: number;
		thermoplastic?: number; thermoset?: number;
	};
	delay?: number;
};

const ID = 'c12m7fate';
const W = 760;
const H = 530;
const STOP = '#b3261e';
const ease = Easing.inOut(Easing.cubic);
export const SP = 17;

type Pt = {x: number; y: number};

/** Bead positions for a gently waving horizontal chain. */
export const chainPts = (x0: number, y0: number, n: number, frame: number, seed: number, amp = 3, wig = 1): Pt[] =>
	Array.from({length: n}, (_, k) => ({
		x: x0 + k * SP,
		y: y0 + (k % 2 ? 1 : -1) * 3.5 + Math.sin(k * 1.1 + seed * 1.7) * amp + Math.sin(frame / 15 + k * 0.7 + seed) * 1.6 * wig,
	}));

/**
 * A chain drawn from its bead points. `links` = indices of ester-O beads.
 * `cuts` = bead indices after which the chain is split; `spread` 0..1 pushes pieces apart.
 */
export const Chain = ({pts, links = [], cuts = [], spread = 0, frame, seed = 0, opacity = 1, linkGlow = 0, id = ID}: {pts: Pt[]; links?: number[]; cuts?: number[]; spread?: number; frame: number; seed?: number; opacity?: number; linkGlow?: number; id?: string}) => {
	const pieces: Pt[][] = [];
	let cur: Pt[] = [];
	pts.forEach((p, k) => {
		cur.push(p);
		if (cuts.includes(k)) {
			pieces.push(cur);
			cur = [];
		}
	});
	if (cur.length) pieces.push(cur);
	let idx = 0;
	return (
		<g opacity={opacity}>
			{pieces.map((pc, j) => {
				const mid = (pieces.length - 1) / 2;
				const dx = (j - mid) * 22 * spread;
				const dy = Math.sin(j * 2.1 + seed) * 16 * spread + Math.sin(frame / 22 + j) * 3 * spread;
				const rot = Math.sin(j * 1.7 + seed) * 18 * spread;
				const cx = pc.reduce((s, p) => s + p.x, 0) / pc.length;
				const cy = pc.reduce((s, p) => s + p.y, 0) / pc.length;
				const start = idx;
				idx += pc.length;
				return (
					<g key={j} transform={`translate(${dx}, ${dy}) rotate(${rot}, ${cx}, ${cy})`}>
						<polyline points={pc.map((p) => `${p.x},${p.y}`).join(' ')} fill="none" stroke={shade(ELEMENT_COLORS.C, 0.3)} strokeWidth={3.2} strokeLinejoin="round" />
						{pc.map((p, k) => {
							const gi = start + k;
							const isO = links.includes(gi);
							const carbonyl = links.includes(gi + 1);
							return (
								<g key={k}>
									{carbonyl && (
										<>
											<line x1={p.x - 2} y1={p.y} x2={p.x - 2} y2={p.y - 16} stroke="#8a8a8a" strokeWidth={2.2} />
											<line x1={p.x + 2} y1={p.y} x2={p.x + 2} y2={p.y - 16} stroke="#8a8a8a" strokeWidth={2.2} />
											<circle cx={p.x} cy={p.y - 18} r={5.6} fill={`url(#${id}-atom-O)`} />
										</>
									)}
									{isO && linkGlow > 0 && <circle cx={p.x - 6} cy={p.y - 6} r={16} fill="none" stroke={TOK.amber} strokeWidth={2.5} strokeDasharray="4 3" opacity={linkGlow} />}
									<circle cx={p.x} cy={p.y} r={isO ? 6.4 : 6.8} fill={`url(#${id}-atom-${isO ? 'O' : 'C'})`} />
								</g>
							);
						})}
					</g>
				);
			})}
		</g>
	);
};

const Stop = ({x, y, s = 1}: {x: number; y: number; s?: number}) => (
	<g transform={`translate(${x}, ${y}) scale(${s})`}>
		<circle r={15} fill={STOP} />
		<path d="M -6 -6 L 6 6 M 6 -6 L -6 6" stroke="#ffffff" strokeWidth={3.5} strokeLinecap="round" />
	</g>
);

/** A stylised enzyme: a rounded blob with a notch (active site). */
const Enzyme = ({x, y, color}: {x: number; y: number; color: string}) => (
	<g transform={`translate(${x}, ${y})`}>
		<path d="M -26 -6 C -28 -26 -4 -32 8 -24 C 22 -16 30 -6 26 8 C 22 24 -4 28 -18 20 C -24 16 -18 10 -10 8 C -2 6 -2 -4 -10 -6 C -18 -8 -24 4 -26 -6 Z" fill={color} stroke={shade(color, -0.3)} strokeWidth={1.5} />
		<ellipse cx={4} cy={-14} rx={7} ry={4} fill="#ffffff" opacity={0.4} />
	</g>
);

const Sun = ({x, y, frame}: {x: number; y: number; frame: number}) => (
	<g transform={`translate(${x}, ${y}) rotate(${frame * 0.6})`}>
		{Array.from({length: 10}, (_, k) => (
			<line key={k} x1={0} y1={-20} x2={0} y2={-30} stroke={TOK.amber} strokeWidth={3.5} strokeLinecap="round" transform={`rotate(${k * 36})`} />
		))}
		<circle r={15} fill={TOK.amber} />
	</g>
);

export const PolymerFateDiagram = ({mode = 'thermo', title, beats = {}, delay = 62, reviewedPolymer = false}: PolymerFateProps) => {
	if (reviewedPolymer && mode !== 'thermo') throw new Error('Reviewed polymer fate is limited to thermo');
	const frame = useCurrentFrame() - delay;
	const theme = useAccent();
	const b = {
		chains: 130, imf: 430, heat: 250, cool: 520, recycle: 634, enzyme: 1018, uv: 1186, micro: 1330, verdict: 1462,
		addition: 214, condensation: 598, water: 802, degradable: 1030, protein: 1306, fragments: 1438,
		thermoplastic: 1354, thermoset: 1450,
		...beats,
	};
	const titles = {thermo: reviewedPolymer ? 'Polyethylene: processing and persistence' : 'Held by IMFs only: melt, remould, persist', hydrolysis: 'Water can cut a link, not a C–C backbone', environment: 'The backbone decides the fate'};

	// ── helpers for the addition side (used by all three modes) ──
	const enzymeRun = (at: number, tx: number, ty: number) => {
		const t = interpolate(frame, [at, at + 40], [0, 1], {...clamp, easing: ease});
		const back = interpolate(frame, [at + 40, at + 80], [0, 1], {...clamp, easing: Easing.out(Easing.quad)});
		return {x: tx - 120 + 110 * t - 60 * back, y: ty - 80 + 60 * t - 40 * back, on: fadeAt(frame, at, 10), hit: frame >= at + 40};
	};

	const body = (() => {
		if (mode === 'thermo') {
			const cx = W / 2;
			const heat = interpolate(frame, [b.heat, b.heat + 50], [0, 1], {...clamp, easing: ease}) * (1 - interpolate(frame, [b.cool, b.cool + 50], [0, 1], {...clamp, easing: ease}));
			const frag = interpolate(frame, [b.uv + 30, b.uv + 110], [0, 1], {...clamp, easing: ease});
			const micro = interpolate(frame, [b.micro, b.micro + 90], [0, 1], {...clamp, easing: ease});
			const rows = [238, 266, 294, 322];
			const cuts1 = [3, 8, 13];
			const cuts2 = [1, 3, 5, 6, 8, 10, 11, 13, 15];
			const chains = rows.map((y, i) => chainPts(cx - 150 + (i % 2) * 8, y + (i - 1.5) * 26 * heat, 18, frame, i, 3, 1 + heat * 3));
			const en = enzymeRun(b.enzyme, cx + 60, 240);
			return (
				<g>
					<g opacity={fadeAt(frame, 2)}>
						<DioramaPlinth id={ID} cx={cx} cy={352} rx={250} />
					</g>
					{/* IMFs between neighbouring chains */}
					{chains.slice(0, -1).map((ch, i) =>
						[2, 6, 10, 14].map((k) => (
							<line key={`${i}-${k}`} x1={ch[k].x} y1={ch[k].y + 6} x2={chains[i + 1][k].x} y2={chains[i + 1][k].y - 6} stroke={theme.accent} strokeWidth={2.5} strokeDasharray="3 4" opacity={fadeAt(frame, b.imf, 12) * (1 - heat) * (1 - frag)} />
						)),
					)}
					{chains.map((ch, i) => (
						<Chain key={i} pts={ch} frame={frame} seed={i} cuts={micro > 0 ? cuts2 : frag > 0 ? cuts1 : []} spread={Math.max(frag * 0.9, micro * 1.6)} opacity={fadeAt(frame, b.chains + i * 6, 12)} />
					))}
					{/* heat */}
					<g opacity={heat}>
						{[-150, -75, 0, 75, 150].map((dx, i) => {
							const y0 = 452 - ((frame * 0.9 + i * 11) % 26);
							return <path key={i} d={`M ${cx + dx} ${y0 + 30} q 9 -9 0 -18 q -9 -9 0 -18`} fill="none" stroke={TOK.amber} strokeWidth={3.5} strokeLinecap="round" />;
						})}
					</g>
					<g opacity={fadeAt(frame, b.imf, 12) * (1 - fadeAt(frame, b.heat, 10))}>
						<Chip x={cx} y={82} text={reviewedPolymer ? 'uncrosslinked chains: interactions and entanglement' : 'chains held only by intermolecular forces'} color={theme.accent} size={18} />
					</g>
					<g opacity={fadeAt(frame, b.heat, 10) * (1 - fadeAt(frame, b.cool, 10))}>
						<Chip x={cx} y={82} text="heat: forces loosen, it softens and remoulds" color={TOK.amberInk} size={18} />
					</g>
					<g opacity={fadeAt(frame, b.cool, 10) * (1 - fadeAt(frame, b.enzyme - 10, 10))}>
						<Chip x={cx} y={82} text={frame >= b.recycle ? (reviewedPolymer ? 'reprocessing depends on material and system' : 'thermoplastic: melt and recycle ✓') : (reviewedPolymer ? 'cool: chain mobility decreases' : 'cool: forces re-form, it hardens')} color={theme.accent} size={18} />
					</g>
					{/* enzyme bounces off */}
					<g opacity={en.on * (1 - fadeAt(frame, b.uv, 12))}>
						<Enzyme x={en.x} y={en.y} color="#9bc27a" />
						{en.hit && <Stop x={cx + 64} y={180} />}
						<Chip x={cx} y={82} text={reviewedPolymer ? 'conventional PE: not readily biodegradable' : 'no microbe enzyme can cut the C–C backbone'} color={STOP} size={18} />
					</g>
					<g opacity={fadeAt(frame, b.uv, 12)}>
						<Sun x={cx + 250} y={110} frame={frame} />
						<Chip x={cx - 40} y={82} text={frame >= b.micro ? 'smaller and smaller: microplastics' : 'UV and abrasion: it fragments'} color={TOK.amberInk} size={18} />
					</g>
					<text x={cx} y={H - 26} textAnchor="middle" fill={TOK.ink} fontSize={22} fontWeight={800} opacity={fadeAt(frame, b.verdict, 14)}>
						{reviewedPolymer ? 'Fragmentation is not complete biodegradation' : 'Recyclable, yes. Biodegradable, no.'}
					</text>
				</g>
			);
		}

		// two-plinth modes
		const L = 196;
		const R = 564;
		const addIn = fadeAt(frame, b.addition, 12);
		const conIn = fadeAt(frame, b.condensation, 12);
		const links = [3, 7, 11, 15];
		const leftRows = [292, 326].map((y, i) => chainPts(L - 150, y, 18, frame, i + 1));
		const rightRows = [292, 326].map((y, i) => chainPts(R - 150, y, 18, frame, i + 4));
		const hyd = interpolate(frame, [b.water + 50, b.water + 120], [0, 1], {...clamp, easing: ease});
		const leftFrag = interpolate(frame, [b.fragments, b.fragments + 80], [0, 1], {...clamp, easing: ease});
		const micro = mode === 'environment' ? interpolate(frame, [b.micro, b.micro + 90], [0, 1], {...clamp, easing: ease}) : 0;
		const uvFrag = mode === 'environment' ? interpolate(frame, [b.uv + 30, b.uv + 110], [0, 1], {...clamp, easing: ease}) : 0;
		const lf = Math.max(leftFrag, uvFrag);
		const leftCuts = micro > 0 ? [1, 3, 5, 6, 8, 10, 11, 13, 15] : lf > 0 ? [4, 9, 13] : [];
		// water molecules approaching (hydrolysis) or enzyme (environment)
		const wT = interpolate(frame, [b.water, b.water + 50], [0, 1], {...clamp, easing: ease});
		const wBack = interpolate(frame, [b.water + 50, b.water + 100], [0, 1], {...clamp, easing: Easing.out(Easing.quad)});
		const en = enzymeRun(b.enzyme, L + 20, 262);
		return (
			<g>
				{[L, R].map((x) => (
					<g key={x} opacity={fadeAt(frame, 2)}>
						<DioramaPlinth id={ID} cx={x} cy={332} rx={170} />
					</g>
				))}
				{/* addition side */}
				<g opacity={addIn}>
					<text x={L} y={84} textAnchor="middle" fill={TOK.ink} fontSize={20} fontWeight={800}>addition polymer</text>
					<text x={L} y={106} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={800}>all C–C backbone: non-polar, inert</text>
					{leftRows.map((pts, i) => (
						<Chain key={i} pts={pts} frame={frame} seed={i + 1} cuts={leftCuts} spread={Math.max(lf * 0.9, micro * 1.5)} />
					))}
				</g>
				{/* condensation side */}
				<g opacity={conIn}>
					<text x={R} y={84} textAnchor="middle" fill={TOK.ink} fontSize={20} fontWeight={800}>condensation polymer</text>
					<text x={R} y={106} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={800}>ester or amide links in the backbone</text>
					{rightRows.map((pts, i) => (
						<Chain key={i} pts={pts} frame={frame} seed={i + 4} links={links} linkGlow={fadeAt(frame, b.condensation + 30, 12) * (1 - hyd)} cuts={hyd > 0 ? links.map((k) => k - 1) : []} spread={hyd} />
					))}
				</g>
				{/* water: bounces off the left, reacts on the right */}
				{mode === 'hydrolysis' && wT > 0 && (
					<g>
						{[-60, 30].map((dx, i) => (
							<g key={`l${i}`} opacity={1 - fadeAt(frame, b.water + 140, 20)}>
								<Mol id={ID} mol="water" x={L + dx - 20 * wBack} y={180 + 70 * wT - 60 * wBack} bond={26} ballScale={0.62} frame={frame} />
							</g>
						))}
						{frame >= b.water + 50 && <g opacity={1 - fadeAt(frame, b.water + 140, 20)}><Stop x={L} y={190} /></g>}
						{[-90, -20, 50, 120].map((dx, i) => (
							<g key={`r${i}`} opacity={1 - fadeAt(frame, b.water + 50, 16)}>
								<Mol id={ID} mol="water" x={R + dx} y={180 + 90 * wT} bond={26} ballScale={0.62} frame={frame} />
							</g>
						))}
					</g>
				)}
				{mode === 'hydrolysis' && (
					<>
						<text x={L} y={420} textAnchor="middle" fill={STOP} fontSize={18} fontWeight={800} opacity={fadeAt(frame, b.water + 60, 12) * (1 - fadeAt(frame, b.fragments - 10, 10))}>water can’t attack C–C</text>
						<text x={L} y={420} textAnchor="middle" fill={TOK.inkDim} fontSize={18} fontWeight={800} opacity={fadeAt(frame, b.fragments, 12)}>it only fragments</text>
						<text x={R} y={420} textAnchor="middle" fill={TOK.amberInk} fontSize={18} fontWeight={800} opacity={fadeAt(frame, b.water + 110, 12)}>hydrolysed at each link</text>
						<text x={R} y={444} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={800} opacity={fadeAt(frame, b.water + 130, 12)}>by acid, base or enzymes</text>
						<g opacity={fadeAt(frame, b.degradable, 12)}>
							<Chip x={R} y={486} text="more degradable" color={theme.accent} size={18} />
						</g>
						<text x={W / 2} y={H - 6} textAnchor="middle" fill={TOK.ink} fontSize={17} fontWeight={800} opacity={fadeAt(frame, b.protein, 12)}>
							e.g. proteins (natural polyamides) are cut fast by proteases
						</text>
					</>
				)}
				{mode === 'environment' && (
					<>
						<g opacity={en.on * (1 - fadeAt(frame, b.uv, 12))}>
							<Enzyme x={en.x} y={en.y} color="#9bc27a" />
							{en.hit && <Stop x={L + 30} y={200} />}
						</g>
						<text x={L} y={420} textAnchor="middle" fill={STOP} fontSize={17} fontWeight={800} opacity={fadeAt(frame, b.enzyme + 40, 12) * (1 - fadeAt(frame, b.uv, 10))}>microbes have no enzyme for C–C</text>
						<g opacity={fadeAt(frame, b.uv, 12)}>
							<Sun x={L + 140} y={170} frame={frame} />
							<text x={L} y={420} textAnchor="middle" fill={TOK.amberInk} fontSize={17} fontWeight={800}>{frame >= b.micro ? 'fragments → microplastics' : 'UV + abrasion: fragments'}</text>
						</g>
						{/* condensation side: hydrolysed by water/acid/base/enzymes */}
						<g opacity={conIn * (1 - fadeAt(frame, b.water + 140, 20))}>
							{[-80, 0, 80].map((dx, i) => (
								<Mol key={i} id={ID} mol="water" x={R + dx} y={180 + 90 * wT + idleBob(frame, i, 2)} bond={26} ballScale={0.62} frame={frame} opacity={1 - fadeAt(frame, b.water + 50, 16)} />
							))}
						</g>
						<text x={R} y={420} textAnchor="middle" fill={theme.accent} fontSize={17} fontWeight={800} opacity={fadeAt(frame, b.water + 110, 12)}>links hydrolyse: it breaks down</text>
						<g opacity={fadeAt(frame, b.thermoplastic, 12)}>
							<Chip x={200} y={470} text="thermoplastic: melt and recycle ✓" color={theme.accent} size={17} />
						</g>
						<g opacity={fadeAt(frame, b.thermoset, 12)}>
							<Chip x={560} y={470} text="cross-linked thermoset: can’t ✗" color={STOP} size={17} />
						</g>
					</>
				)}
				<text x={W / 2} y={mode === 'hydrolysis' ? 48 + 0 : H - 8} textAnchor="middle" fill={TOK.amberInk} fontSize={20} fontWeight={800} opacity={mode === 'environment' ? fadeAt(frame, b.verdict, 14) : 0}>
					The backbone you build in is the fate you get
				</text>
			</g>
		);
	})();

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={titles[mode]} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} elements={ELEMENTS} />
			<Title text={title ?? titles[mode]} opacity={fadeAt(frame, 0)} />
			{body}
		</svg>
	);
};
