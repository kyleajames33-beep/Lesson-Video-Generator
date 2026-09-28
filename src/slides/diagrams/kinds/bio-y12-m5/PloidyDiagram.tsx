// PloidyDiagram — chromosome SETS through meiosis and fertilisation.
//
// A "set" is one long + one short chromosome (model: n = 1 set, 2n = 2 sets).
// Colour tells you which parent a set came from this generation: father's in
// the accent colour, mother's in coral. Counts are computed from the sets
// drawn, never typed.
//
// mode 'fertilise'  a haploid sperm (n) swims into a haploid egg (n); the two
//                   nuclei fuse into a diploid zygote (2n): n + n = 2n.
// mode 'cycle'      father 2n → meiosis → sperm n; mother 2n → meiosis → egg n;
//                   fertilisation → zygote 2n. Optional `doubling` panel: if
//                   gametes stayed diploid, 2n + 2n = 4n, then 8n next
//                   generation (struck through): why meiosis halves first.
//
// Props: `mode`, `at` (frames after `delay`), `sequence` (optional strip text).

import {useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {Arrow, CORAL, CellBody, Chromosome, GlossDefs, Ledge, Pill, ease, fadeAt, lerp, popAt} from './shared';

export type PloidyProps = {
	mode?: 'fertilise' | 'cycle';
	at?: {gametes?: number; meiosis?: number; fuse?: number; zygote?: number; rule?: number; doubling?: number; stable?: number; sequence?: number};
	doubling?: boolean;
	delay?: number;
};

const ID = 'b12m5plo';
const W = 760, H = 530;

/** One chromosome set (long + short), unreplicated, centred at (x, y). */
const Set = ({x, y, color, s = 1, opacity = 1, frame, seed}: {x: number; y: number; color: string; s?: number; opacity?: number; frame: number; seed: number}) => (
	<g opacity={opacity}>
		<Chromosome id={ID} x={x - 9 * s} y={y + idleBob(frame, seed, 1.2)} len={40 * s} w={10 * s} color={color} chromatids={1} />
		<Chromosome id={ID} x={x + 9 * s} y={y + 5 * s + idleBob(frame, seed + 1, 1.2)} len={26 * s} w={10 * s} color={color} chromatids={1} />
	</g>
);

const Sperm = ({x, y, frame, color}: {x: number; y: number; frame: number; color: string}) => {
	const wig = (k: number) => Math.sin(frame / 4 + k) * 8;
	return (
		<g>
			<path d={`M ${x + 34} ${y} Q ${x + 60} ${y + wig(0)} ${x + 86} ${y + wig(1.2) * 0.6} T ${x + 140} ${y + wig(2.4) * 0.4}`} fill="none" stroke="#b9ab93" strokeWidth={5} strokeLinecap="round" />
			<ellipse cx={x} cy={y} rx={40} ry={28} fill={`url(#${ID}-cyto)`} stroke="#b9ab93" strokeWidth={3.5} />
			<ellipse cx={x - 3} cy={y} rx={30} ry={21} fill={`url(#${ID}-nuc)`} stroke="#9fb2c6" strokeWidth={2} />
			<Set x={x - 3} y={y} color={color} s={0.62} frame={frame} seed={11} />
		</g>
	);
};

export const PloidyDiagram = ({mode = 'fertilise', at = {}, doubling = true, delay = 62}: PloidyProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	return mode === 'cycle' ? <Cycle frame={frame} fps={fps} accent={theme.accent} soft={theme.soft} at={at} doubling={doubling} /> : <Fertilise frame={frame} fps={fps} accent={theme.accent} soft={theme.soft} at={at} />;
};

const Fertilise = ({frame, fps, accent, soft, at}: {frame: number; fps: number; accent: string; soft: string; at: NonNullable<PloidyProps['at']>}) => {
	const tG = at.gametes ?? 30, tF = at.fuse ?? 160, tZ = at.zygote ?? 300, tRule = at.rule ?? 420, tSeq = at.sequence ?? 560;
	const swim = ease(frame, tF - 30, tF + 40);
	const merge = ease(frame, tF + 44, tZ);
	const EGG = {x: 470, y: 222};
	const spX = lerp(130, EGG.x - 20, swim), spY = lerp(170, EGG.y - 10, swim) + Math.sin(frame / 9) * 4 * (1 - swim);
	const setsInZygote = 2; // one from the sperm + one from the egg
	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="A haploid sperm and a haploid egg fuse into a diploid zygote" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={{pat: accent, mat: CORAL}} />
			<g opacity={fadeAt(frame, 0, 16)}>
				<DioramaPlinth id={ID} cx={EGG.x} cy={378} rx={200} />
				<CellBody id={ID} cx={EGG.x} cy={EGG.y} rx={128} ry={124} stroke={merge > 0.5 ? accent : '#b9ab93'} />
				{/* egg nucleus (mother's set), later the fused zygote nucleus */}
				<ellipse cx={EGG.x + lerp(20, 0, merge)} cy={EGG.y} rx={lerp(46, 64, merge)} ry={lerp(40, 52, merge)} fill={`url(#${ID}-nuc)`} stroke="#9fb2c6" strokeWidth={2.5} />
				<Set x={EGG.x + lerp(20, 20, merge)} y={EGG.y} color="mat" frame={frame} seed={3} />
			</g>
			{/* sperm swims in; its nucleus joins the egg's */}
			{swim < 0.98 ? (
				<g opacity={fadeAt(frame, 6)}>
					<Sperm x={spX} y={spY} frame={frame} color="pat" />
				</g>
			) : (
				<g>
					<ellipse cx={lerp(EGG.x - 20, EGG.x - 20, merge)} cy={EGG.y} rx={30} ry={21} fill={`url(#${ID}-nuc)`} stroke="#9fb2c6" strokeWidth={2} opacity={1 - merge} />
					<Set x={lerp(EGG.x - 23, EGG.x - 22, merge)} y={EGG.y} color="pat" s={lerp(0.62, 1, merge)} frame={frame} seed={11} />
				</g>
			)}

			{/* Labels */}
			<g opacity={fadeAt(frame, tG) * (1 - swim)}>
				<Pill x={130} y={112} text="sperm: haploid, n" color={accent} fill="#ffffff" size={16} />
			</g>
			<g opacity={fadeAt(frame, tG + 10) * (1 - merge)}>
				<Pill x={EGG.x} y={72} text="egg: haploid, n" color={CORAL} fill="#ffffff" size={16} />
			</g>
			<g opacity={popAt(frame, fps, tZ)}>
				<Pill x={EGG.x} y={72} text={`zygote: diploid, ${setsInZygote}n`} color={accent} fill={soft} size={17} strokeWidth={2 + (frame > tRule ? idlePulse(frame) * 1.5 : 0)} />
			</g>
			<g opacity={fadeAt(frame, tRule)}>
				<text x={150} y={300} textAnchor="middle" fill={TOK.ink} fontSize={30} fontWeight={800}>n + n = {setsInZygote}n</text>
				<text x={150} y={328} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={700}>1 set + 1 set = 2 sets</text>
				<text x={150} y={352} textAnchor="middle" fill={TOK.amberInk} fontSize={16} fontWeight={800}>chromosome number restored</text>
			</g>
			<g opacity={fadeAt(frame, tSeq)}>
				<Ledge x={40} y={470} w={W - 80} />
				{['haploid gametes', 'fertilisation', 'diploid zygote'].map((t, i) => (
					<g key={t}>
						<text x={150 + i * 230} y={507} textAnchor="middle" fill={i === 2 ? accent : TOK.inkDim} fontSize={17} fontWeight={800}>{t}</text>
						{i < 2 && <text x={265 + i * 230} y={507} textAnchor="middle" fill={TOK.inkMute} fontSize={17} fontWeight={800}>→</text>}
					</g>
				))}
			</g>
		</svg>
	);
};

const Cycle = ({frame, fps, accent, soft, at, doubling}: {frame: number; fps: number; accent: string; soft: string; at: NonNullable<PloidyProps['at']>; doubling: boolean}) => {
	const tG = at.gametes ?? 200, tM = at.meiosis ?? 60, tF = at.fuse ?? 320, tD = at.doubling ?? 480, tZ = at.zygote ?? 640, tS = at.stable ?? 800;
	const toGam = ease(frame, tM, tM + 50);
	const fuse = ease(frame, tF, tF + 60);
	const par = [{x: 96, y: 136, c: 'pat', who: 'father'}, {x: 96, y: 350, c: 'mat', who: 'mother'}];
	const gam = [{x: 330, y: 136}, {x: 330, y: 350}];
	const Z = {x: 590, y: 232};
	const sets = {parent: 2, gamete: 1, zygote: 2};
	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Meiosis halves the chromosome number to make haploid gametes; fertilisation restores the diploid number" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={{pat: accent, mat: CORAL}} />

			{par.map((p, k) => (
				<g key={k} opacity={fadeAt(frame, k * 6)}>
					<CellBody id={ID} cx={p.x} cy={p.y} rx={74} ry={68} />
					<Set x={p.x - 22} y={p.y} color={p.c} frame={frame} seed={k * 7} />
					<Set x={p.x + 22} y={p.y} color={p.c} frame={frame} seed={k * 7 + 3} />
					<Pill x={p.x} y={p.y + 90} text={`${p.who}: ${sets.parent}n`} color={TOK.inkDim} size={15} />
				</g>
			))}
			{/* meiosis arrows */}
			{par.map((p, k) => (
				<g key={`m${k}`}>
					<Arrow x1={p.x + 84} y1={p.y} x2={gam[k].x - 62} y2={gam[k].y} color={TOK.inkMute} width={3} head={10} t={toGam} />
					<text x={(p.x + gam[k].x) / 2 + 4} y={p.y - 14} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={800} opacity={toGam}>meiosis</text>
				</g>
			))}
			{/* gametes */}
			{gam.map((g, k) => (
				<g key={`g${k}`} transform={`translate(${g.x},${g.y}) scale(${popAt(frame, fps, tM + 30 + k * 6)}) translate(${-g.x},${-g.y})`} opacity={1 - fuse * 0.55}>
					<CellBody id={ID} cx={g.x} cy={g.y} rx={k === 0 ? 46 : 58} ry={k === 0 ? 40 : 54} />
					<Set x={g.x} y={g.y} color={par[k].c} frame={frame} seed={20 + k} />
				</g>
			))}
			{gam.map((g, k) => (
				<g key={`gl${k}`} opacity={fadeAt(frame, tG)}>
					<Pill x={g.x} y={g.y + 82} text={`${k === 0 ? 'sperm' : 'egg'}: ${sets.gamete === 1 ? 'n' : `${sets.gamete}n`}`} color={accent} fill={soft} size={16} strokeWidth={2 + (frame > tG && frame < tD ? idlePulse(frame) : 0)} />
				</g>
			))}
			{/* fertilisation */}
			{gam.map((g, k) => (
				<Arrow key={`f${k}`} x1={g.x + 66} y1={g.y} x2={Z.x - 84} y2={Z.y + (k === 0 ? -24 : 24)} color={TOK.inkMute} width={3} head={10} t={ease(frame, tF - 16, tF + 10)} />
			))}
			<text x={466} y={Z.y + 5} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={800} opacity={fadeAt(frame, tF)}>fertilisation</text>
			<g transform={`translate(${Z.x},${Z.y}) scale(${popAt(frame, fps, tF + 40)}) translate(${-Z.x},${-Z.y})`}>
				<DioramaPlinth id={ID} cx={Z.x} cy={Z.y + 70} rx={96} />
				<CellBody id={ID} cx={Z.x} cy={Z.y} rx={74} ry={68} stroke={accent} />
				<Set x={Z.x - 22} y={Z.y} color="pat" frame={frame} seed={30} />
				<Set x={Z.x + 22} y={Z.y} color="mat" frame={frame} seed={33} />
			</g>
			<g opacity={fadeAt(frame, tZ)}>
				<Pill x={Z.x} y={Z.y - 96} text={`zygote: ${sets.zygote}n, restored`} color={accent} fill={soft} size={17} strokeWidth={2 + idlePulse(frame) * 1.5} />
			</g>

			{/* What if gametes were diploid? */}
			{doubling && (
				<g opacity={fadeAt(frame, tD) * (1 - 0.5 * fadeAt(frame, tZ))}>
					<rect x={432} y={378} width={308} height={90} rx={14} fill="#fff8ea" stroke={TOK.amber} strokeWidth={2} strokeDasharray="7 6" />
					<text x={586} y={402} textAnchor="middle" fill={TOK.amberInk} fontSize={15} fontWeight={800}>if gametes were diploid:</text>
					<text x={586} y={432} textAnchor="middle" fill={TOK.ink} fontSize={21} fontWeight={800}>2n + 2n = 4n</text>
					<text x={586} y={456} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={800}>next generation 8n … doubling</text>
				</g>
			)}
			<g opacity={fadeAt(frame, tS)}>
				<Ledge x={40} y={476} w={W - 80} />
				<text x={W / 2} y={512} textAnchor="middle" fill={accent} fontSize={18} fontWeight={800}>2n → n → 2n: stable every generation</text>
			</g>
		</svg>
	);
};
