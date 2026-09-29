// CellDnaDiagram — where DNA lives, and how it is packed.
//
// mode 'compare'     prokaryote: one main circular DNA loop lying in the
//                    nucleoid (no membrane). Eukaryote: several linear
//                    chromosomes inside a membrane-bound nucleus. Between them
//                    the shared chemistry: same bases, same pairing.
// mode 'prokaryote'  the main circular chromosome plus small separate plasmids;
//                    one plasmid carries an antibiotic-resistance gene (amber)
//                    and passes to a neighbouring cell; a plasmid is used as a
//                    vector with a chosen gene inserted.
// mode 'eukaryote'   DNA wraps around proteins (histones) → chromatin, loose
//                    most of the time → condenses into a visible chromosome for
//                    division; "about 2 m of DNA per human cell" from the scene.

import {useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {CORAL, Chromosome, GlossDefs, PURPLE, Pill, ease, fadeAt, lerp, popAt} from './shared';

export type CellDnaProps = {
	mode?: 'compare' | 'prokaryote' | 'eukaryote';
	at?: Record<string, number>;
	delay?: number;
};

const ID = 'b12m5cdna';
const W = 760, H = 530;

const Loop = ({cx, cy, rx, ry, color, w = 4, frame, seed, dash}: {cx: number; cy: number; rx: number; ry: number; color: string; w?: number; frame: number; seed: number; dash?: string}) => {
	const pts = Array.from({length: 40}, (_, k) => {
		const a = (k / 40) * Math.PI * 2;
		const wob = 1 + 0.12 * Math.sin(a * 5 + seed + frame / 50);
		return `${cx + Math.cos(a) * rx * wob},${cy + Math.sin(a) * ry * wob}`;
	});
	return <polygon points={pts.join(' ')} fill="none" stroke={color} strokeWidth={w} strokeLinejoin="round" strokeDasharray={dash} />;
};

export const CellDnaDiagram = ({mode = 'compare', at = {}, delay = 62}: CellDnaProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const defs = <GlossDefs id={ID} colors={{bact: '#e8dcc0', histone: '#d9b36a', pat: theme.accent, mat: CORAL}} />;

	if (mode === 'compare') {
		const tSame = at.same ?? 20, tArr = at.arranged ?? 200, tCirc = at.circular ?? 300, tNuc = at.nucleoid ?? 400, tLin = at.linear ?? 500, tMem = at.nucleus ?? 600, tRule = at.rule ?? 800;
		return (
			<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Prokaryotes: circular DNA in a nucleoid; eukaryotes: linear chromosomes in a nucleus" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
				<DioramaDefs id={ID} />
				{defs}
				<g opacity={fadeAt(frame, tSame)}>
					<Pill x={380} y={34} text="same DNA: A T C G, same pairing rules" color={theme.accent} fill={theme.soft} size={16} />
				</g>
				{/* prokaryote */}
				<g opacity={fadeAt(frame, tArr)}>
					<text x={190} y={98} textAnchor="middle" fill={TOK.ink} fontSize={19} fontWeight={800}>prokaryote</text>
					<DioramaPlinth id={`${ID}p`} cx={190} cy={330} rx={160}>
						<rect x={60} y={170} width={260} height={130} rx={65} fill={`url(#${ID}-g-bact)`} stroke="#b9ab93" strokeWidth={4} />
						<g opacity={fadeAt(frame, tCirc)}>
							<Loop cx={190} cy={234} rx={62} ry={36} color={theme.accent} frame={frame} seed={1} />
						</g>
						<ellipse cx={190} cy={234} rx={82} ry={52} fill="none" stroke={TOK.amberInk} strokeWidth={2} strokeDasharray="4 6" opacity={fadeAt(frame, tNuc)} />
					</DioramaPlinth>
					<text x={190} y={440} textAnchor="middle" fill={theme.accent} fontSize={16} fontWeight={800} opacity={fadeAt(frame, tCirc)}>one circular DNA molecule</text>
					<text x={190} y={462} textAnchor="middle" fill={TOK.amberInk} fontSize={15} fontWeight={800} opacity={fadeAt(frame, tNuc)}>in the nucleoid: no membrane</text>
				</g>
				{/* eukaryote */}
				<g opacity={fadeAt(frame, tLin - 30)}>
					<text x={570} y={98} textAnchor="middle" fill={TOK.ink} fontSize={19} fontWeight={800}>eukaryote</text>
					<DioramaPlinth id={`${ID}e`} cx={570} cy={330} rx={160}>
						<ellipse cx={570} cy={232} rx={140} ry={96} fill={`url(#${ID}-cyto)`} stroke="#b9ab93" strokeWidth={4} />
						<circle cx={570} cy={232} r={62} fill={`url(#${ID}-nuc)`} stroke="#6f8aa8" strokeWidth={fadeAt(frame, tMem) > 0.5 ? 4 : 2} />
						{[[-26, -18, 20, 'pat', 44], [18, -24, -30, 'mat', 44], [-18, 22, 70, 'pat', 30], [24, 20, -10, 'mat', 30]].map(([dx, dy, a, c, l], k) => (
							<Chromosome key={k} id={ID} x={570 + (dx as number)} y={232 + (dy as number) + idleBob(frame, k, 1)} len={l as number} w={9} color={c as string} chromatids={1} angle={a as number} opacity={fadeAt(frame, tLin + k * 6)} />
						))}
					</DioramaPlinth>
					<text x={570} y={440} textAnchor="middle" fill={theme.accent} fontSize={16} fontWeight={800} opacity={fadeAt(frame, tLin)}>several linear chromosomes</text>
					<text x={570} y={462} textAnchor="middle" fill={TOK.amberInk} fontSize={15} fontWeight={800} opacity={fadeAt(frame, tMem)}>in a membrane-bound nucleus</text>
				</g>
				<text x={380} y={H - 16} textAnchor="middle" fill={TOK.amberInk} fontSize={18} fontWeight={800} opacity={fadeAt(frame, tRule)}>only the arrangement differs; the molecule is the same</text>
			</svg>
		);
	}

	if (mode === 'prokaryote') {
		const tMain = at.main ?? 20, tPl = at.plasmids ?? 150, tSmall = at.small ?? 250, tExtra = at.extra ?? 350, tRes = at.resistance ?? 450, tVec = at.vector ?? 700, tRule = at.rule ?? 900;
		const plas = [{x: 356, y: 190, r: 16}, {x: 362, y: 262, r: 13}, {x: 78, y: 262, r: 14}];
		const hop = ease(frame, tRes + 40, tRes + 100);
		return (
			<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Bacterium with a circular chromosome and plasmids carrying extra genes" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
				<DioramaDefs id={ID} />
				{defs}
				<DioramaPlinth id={`${ID}b`} cx={230} cy={346} rx={170}>
					<rect x={40} y={140} width={380} height={170} rx={85} fill={`url(#${ID}-g-bact)`} stroke="#b9ab93" strokeWidth={4} />
					<Loop cx={210} cy={226} rx={92} ry={52} color={theme.accent} w={5} frame={frame} seed={2} />
					{plas.map((p, k) => (
						<g key={k} opacity={popAt(frame, fps, tPl + k * 10)} transform={`translate(${idleBob(frame, k, 1.5)},0)`}>
							<circle cx={p.x} cy={p.y} r={p.r} fill="none" stroke={PURPLE} strokeWidth={4} />
							{k === 0 && <path d={`M ${p.x} ${p.y - p.r} A ${p.r} ${p.r} 0 0 1 ${p.x + p.r} ${p.y}`} fill="none" stroke={TOK.amber} strokeWidth={5} opacity={fadeAt(frame, tRes)} />}
						</g>
					))}
				</DioramaPlinth>
				<g opacity={fadeAt(frame, tMain)}>
					<text x={210} y={110} textAnchor="middle" fill={theme.accent} fontSize={16} fontWeight={800}>main chromosome: one circular DNA</text>
				</g>
				<g opacity={fadeAt(frame, tSmall)}>
					<text x={230} y={470} textAnchor="middle" fill={PURPLE} fontSize={16} fontWeight={800}>plasmids: small, separate DNA rings</text>
				</g>
				<g opacity={fadeAt(frame, tExtra)}>
					<text x={230} y={492} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={800}>extra, optional genes</text>
				</g>
				{/* resistance plasmid moves to a neighbour */}
				<g opacity={fadeAt(frame, tRes)}>
					<rect x={520} y={150} width={200} height={100} rx={50} fill={`url(#${ID}-g-bact)`} stroke="#b9ab93" strokeWidth={3} />
					<Loop cx={600} cy={200} rx={40} ry={24} color={theme.accent} w={4} frame={frame} seed={5} />
					<circle cx={lerp(356, 680, hop)} cy={lerp(190, 196, hop) - Math.sin(hop * Math.PI) * 60} r={16} fill="none" stroke={PURPLE} strokeWidth={4} opacity={hop > 0 ? 1 : 0} />
					<path d={`M ${lerp(356, 680, hop)} ${lerp(190, 196, hop) - Math.sin(hop * Math.PI) * 60 - 16} a 16 16 0 0 1 16 16`} fill="none" stroke={TOK.amber} strokeWidth={5} opacity={hop > 0 ? 1 : 0} />
					<text x={620} y={120} textAnchor="middle" fill={TOK.amberInk} fontSize={15} fontWeight={800}>antibiotic resistance spreads</text>
				</g>
				<g opacity={popAt(frame, fps, tVec)}>
					<circle cx={600} cy={340} r={40} fill="none" stroke={PURPLE} strokeWidth={5} />
					<path d="M 600 300 A 40 40 0 0 1 640 340" fill="none" stroke={theme.accent} strokeWidth={8} />
					<text x={600} y={410} textAnchor="middle" fill={TOK.ink} fontSize={16} fontWeight={800}>plasmid as a vector</text>
					<text x={600} y={432} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={800}>carries a chosen gene</text>
				</g>
				<text x={380} y={H - 6} textAnchor="middle" fill={TOK.amberInk} fontSize={18} fontWeight={800} opacity={fadeAt(frame, tRule)}>plasmids: the spare, transferable rings</text>
			</svg>
		);
	}

	// eukaryote packing
	const tLin = at.linear ?? 20, tWrap = at.wrap ?? 150, tChrom = at.chromatin ?? 250, tLoose = at.loose ?? 330, tCond = at.condense ?? 450, tLen = at.length ?? 700, tReg = at.regulation ?? 900;
	const wrap = ease(frame, tWrap, tWrap + 60);
	const cond = ease(frame, tCond, tCond + 70);
	const beads = 7;
	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="DNA wraps around proteins as chromatin and condenses into chromosomes for division" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			{defs}
			<g opacity={fadeAt(frame, tLin)}>
				<text x={380} y={34} textAnchor="middle" fill={TOK.ink} fontSize={17} fontWeight={800}>eukaryote: several linear chromosomes in the nucleus</text>
			</g>
			{/* stage 1: DNA around proteins */}
			<g opacity={fadeAt(frame, tWrap - 20)}>
				<DioramaPlinth id={`${ID}1`} cx={130} cy={330} rx={110}>
					{Array.from({length: beads}, (_, k) => {
						const x = 50 + k * 27, y = 280 + Math.sin(k * 1.3) * 16;
						return (
							<g key={k}>
								<circle cx={x} cy={y} r={lerp(0, 11, wrap)} fill={`url(#${ID}-g-histone)`} stroke="rgba(0,0,0,0.25)" />
								<ellipse cx={x} cy={y} rx={13} ry={8} fill="none" stroke={theme.accent} strokeWidth={3} opacity={wrap} />
							</g>
						);
					})}
					<path d={Array.from({length: beads}, (_, k) => `${k ? 'L' : 'M'} ${50 + k * 27} ${280 + Math.sin(k * 1.3) * 16}`).join(' ')} fill="none" stroke={theme.accent} strokeWidth={2.5} />
				</DioramaPlinth>
				<text x={130} y={422} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={800}>DNA wound around proteins</text>
			</g>
			{/* stage 2: chromatin (loose) */}
			<g opacity={fadeAt(frame, tChrom)}>
				<DioramaPlinth id={`${ID}2`} cx={380} cy={330} rx={110}>
					<path d={Array.from({length: 26}, (_, k) => `${k ? 'L' : 'M'} ${320 + (k % 13) * 10 + Math.sin(k + frame / 30) * 6} ${256 + Math.floor(k / 13) * 34 + Math.cos(k * 1.7) * 14}`).join(' ')} fill="none" stroke={theme.accent} strokeWidth={4} strokeLinejoin="round" />
				</DioramaPlinth>
				<text x={380} y={422} textAnchor="middle" fill={theme.accent} fontSize={15} fontWeight={800}>chromatin: less condensed</text>
				<text x={380} y={444} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={800} opacity={fadeAt(frame, tLoose)}>most of the cell's life</text>
			</g>
			{/* stage 3: condensed chromosome */}
			<g opacity={fadeAt(frame, tCond - 10)}>
				<DioramaPlinth id={`${ID}3`} cx={630} cy={330} rx={110}>
					<g transform={`translate(0,${idleBob(frame, 3, 1)})`}>
						<Chromosome id={ID} x={630} y={300 - lerp(20, 120, cond) / 2} len={lerp(20, 120, cond)} w={lerp(6, 24, cond)} color="pat" splay={lerp(2, 14, cond)} />
					</g>
				</DioramaPlinth>
				<text x={630} y={422} textAnchor="middle" fill={theme.accent} fontSize={15} fontWeight={800}>condensed chromosome</text>
				<text x={630} y={444} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={800}>visible during division</text>
			</g>
			<text x={255} y={300} textAnchor="middle" fill={TOK.inkMute} fontSize={26} fontWeight={800} opacity={fadeAt(frame, tChrom)}>→</text>
			<text x={505} y={300} textAnchor="middle" fill={TOK.inkMute} fontSize={26} fontWeight={800} opacity={fadeAt(frame, tCond)}>→</text>
			<g opacity={popAt(frame, fps, tLen)}>
				<Pill x={380} y={96} text="about 2 metres of DNA per human cell, packed into the nucleus" color={TOK.amberInk} fill="#fff8ea" size={15} strokeWidth={2 + idlePulse(frame) * 1.5} />
			</g>
			<text x={380} y={H - 14} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={800} opacity={fadeAt(frame, tReg)}>packing also lets genes be kept accessible and regulated</text>
		</svg>
	);
};
