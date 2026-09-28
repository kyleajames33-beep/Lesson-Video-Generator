// ReadsDiagram — DNA as rows of letter tiles, for SNPs, sequencing and
// bioinformatics. Every highlighted column, count and frequency is computed
// from the sequences in props, so the picture and the numbers always agree.
//
// mode 'snp'       copies of the same stretch of DNA (people × 2 copies, since
//                  every autosomal position is carried twice) line up; the one
//                  column where they differ is the SNP. Each version is an
//                  allele, so the tally gives its frequency in this sample.
//                  A chromosome strip above shows SNPs scattered, mostly
//                  outside genes (noncoding DNA), a few inside.
// mode 'assemble'  a stretch is read letter by letter (a single-base change
//                  shows up directly against the usual sequence), then it is
//                  broken into short overlapping fragments, all read at once,
//                  and software lines the overlaps up to rebuild the sequence.
// mode 'align'     a patient's reads align under a reference; columns that
//                  differ are flagged as variants; each variant is checked
//                  against a database; most are harmless, one is known harmful.

import {useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, idleBob, idlePulse} from '../../diorama';
import {Arrow, GlossDefs, Ledge, PURPLE, Pill, ease, fadeAt, hash01, lerp, popAt} from './shared';

export type ReadsProps = {
	mode?: 'snp' | 'assemble' | 'align';
	reference?: string;
	/** snp: one string per copy; assemble: the patient's sequence; align: reads as "start:letters". */
	rows?: string[];
	/** snp: labels per person (each person = 2 rows). */
	people?: string[];
	/** align: verdict per variant column, left to right. */
	verdicts?: string[];
	/** assemble: fragment start/end indices. */
	fragments?: [number, number][];
	at?: Record<string, number>;
	delay?: number;
};

const ID = 'b12m5reads';
const W = 760, H = 530;

const LetterTile = ({x, y, b, s = 26, fill = '#ffffff', stroke = 'rgba(0,0,0,0.16)', color = TOK.ink, opacity = 1, ring = 0}: {x: number; y: number; b: string; s?: number; fill?: string; stroke?: string; color?: string; opacity?: number; ring?: number}) => (
	<g opacity={opacity}>
		<rect x={x - s / 2} y={y - s / 2 + 2} width={s} height={s} rx={6} fill="rgba(40,36,30,0.12)" />
		<rect x={x - s / 2} y={y - s / 2} width={s} height={s} rx={6} fill={fill} stroke={stroke} strokeWidth={1.2} />
		{ring > 0 && <rect x={x - s / 2 - 4} y={y - s / 2 - 4} width={s + 8} height={s + 8} rx={8} fill="none" stroke={TOK.amber} strokeWidth={2 + ring * 1.5} />}
		<text x={x} y={y + s * 0.2} textAnchor="middle" fill={color} fontSize={s * 0.6} fontWeight={800}>{b}</text>
	</g>
);

export const ReadsDiagram = (props: ReadsProps) => {
	const frame = useCurrentFrame() - (props.delay ?? 62);
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const mode = props.mode ?? 'snp';
	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={`DNA sequences: ${mode}`} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={{a: theme.accent, b: PURPLE, stone: '#d6d1c7'}} />
			{mode === 'assemble' ? <Assemble {...props} frame={frame} fps={fps} accent={theme.accent} soft={theme.soft} /> : mode === 'align' ? <Align {...props} frame={frame} fps={fps} accent={theme.accent} soft={theme.soft} /> : <Snp {...props} frame={frame} fps={fps} accent={theme.accent} soft={theme.soft} />}
		</svg>
	);
};

type Ctx = ReadsProps & {frame: number; fps: number; accent: string; soft: string};

// ── SNP ────────────────────────────────────────────────────────────────────
const Snp = ({rows = [], people = [], at = {}, frame, fps, accent, soft}: Ctx) => {
	const tDiff = at.differ ?? 30, tMany = at.many ?? 200, tNon = at.noncoding ?? 300, tGene = at.gene ?? 400, tAllele = at.allele ?? 600, tFreq = at.frequency ?? 700;
	const L = rows[0]?.length ?? 0;
	const snpCol = Array.from({length: L}, (_, c) => c).find((c) => new Set(rows.map((r) => r[c])).size > 1) ?? 0;
	const versions = Array.from(new Set(rows.map((r) => r[snpCol])));
	const counts = versions.map((v) => rows.filter((r) => r[snpCol] === v).length);
	const X0 = 170, DX = 34, Y0 = 186, DY = 31;
	const colX = (c: number) => X0 + c * DX;
	const rowY = (r: number) => Y0 + r * DY + Math.floor(r / 2) * 8;
	const vColor = (v: string) => (v === versions[0] ? accent : PURPLE);
	// chromosome strip with genes and SNP ticks (mostly outside genes)
	const genes = [[120, 190], [360, 420], [560, 610]];
	const ticks = Array.from({length: 26}, (_, k) => 70 + k * 24 + (hash01(k + 3) - 0.5) * 14);
	const inGene = (x: number) => genes.some(([a, b]) => x >= a && x <= b);
	return (
		<g>
			{/* chromosome strip */}
			<g opacity={fadeAt(frame, tMany - 20)}>
				<rect x={60} y={44} width={640} height={26} rx={13} fill={`url(#${ID}-g-stone)`} stroke="rgba(0,0,0,0.2)" />
				{genes.map(([a, b], k) => <rect key={k} x={a} y={44} width={b - a} height={26} fill={accent} opacity={0.85} />)}
				{ticks.map((x, k) => (
					<line key={k} x1={x} y1={38} x2={x} y2={76} stroke={inGene(x) ? TOK.amberInk : TOK.ink} strokeWidth={2.5} opacity={fadeAt(frame, tMany + k * 3, 6)} />
				))}
				<text x={60} y={100} fill={TOK.inkDim} fontSize={15} fontWeight={800} opacity={fadeAt(frame, tNon)}>most SNPs: noncoding DNA</text>
				<text x={700} y={100} textAnchor="end" fill={accent} fontSize={15} fontWeight={800} opacity={fadeAt(frame, tGene)}>genes (a few SNPs fall inside)</text>
			</g>
			{/* rows */}
			<Ledge x={40} y={Y0 + rows.length * DY + 40} w={680} opacity={fadeAt(frame, 0)} />
			{people.map((p, k) => (
				<g key={k} opacity={fadeAt(frame, k * 4)}>
					<text x={X0 - 60} y={rowY(k * 2) + DY / 2 + 6} textAnchor="end" fill={TOK.inkDim} fontSize={16} fontWeight={800}>{p}</text>
					<path d={`M ${X0 - 50} ${rowY(k * 2) - 10} L ${X0 - 56} ${rowY(k * 2) - 10} L ${X0 - 56} ${rowY(k * 2 + 1) + 10} L ${X0 - 50} ${rowY(k * 2 + 1) + 10}`} fill="none" stroke={TOK.inkMute} strokeWidth={2} />
				</g>
			))}
			{rows.map((r, ri) => (
				<g key={ri} opacity={fadeAt(frame, ri * 4)}>
					{r.split('').map((b, c) => {
						const isSnp = c === snpCol;
						const hl = isSnp ? fadeAt(frame, tDiff, 14) : 0;
						return (
							<LetterTile key={c} x={colX(c)} y={rowY(ri) + (isSnp && frame > tFreq + 60 ? idleBob(frame, ri, 1) : 0)} b={b} fill={isSnp && hl > 0.5 ? vColor(b) : '#ffffff'} color={isSnp && hl > 0.5 ? '#ffffff' : TOK.ink} stroke={isSnp && hl > 0.5 ? 'rgba(0,0,0,0.2)' : 'rgba(0,0,0,0.16)'} />
						);
					})}
				</g>
			))}
			{/* SNP column highlight */}
			<g opacity={fadeAt(frame, tDiff)}>
				<rect x={colX(snpCol) - 20} y={rowY(0) - 22} width={40} height={rowY(rows.length - 1) - rowY(0) + 44} rx={10} fill="none" stroke={TOK.amber} strokeWidth={3 + idlePulse(frame) * 1.2} />
				<text x={colX(snpCol)} y={rowY(0) - 32} textAnchor="middle" fill={TOK.amberInk} fontSize={16} fontWeight={800}>SNP</text>
			</g>
			{/* versions = alleles, with frequencies */}
			{versions.map((v, k) => (
				<g key={v} opacity={popAt(frame, fps, tAllele + k * 10)}>
					<Pill x={colX(L - 1) + 70} y={rowY(1) + k * 60} text={`allele ${v}`} color={vColor(v)} fill="#ffffff" size={16} />
					<text x={colX(L - 1) + 70} y={rowY(1) + k * 60 + 34} textAnchor="middle" fill={vColor(v)} fontSize={16} fontWeight={800} opacity={fadeAt(frame, tFreq)}>
						{counts[k]}/{rows.length} = {Math.round((100 * counts[k]) / rows.length)}%
					</text>
				</g>
			))}
			<text x={380} y={H - 10} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={800} opacity={fadeAt(frame, tFreq + 30)}>
				{people.length} people = {rows.length} copies of this position
			</text>
		</g>
	);
};

// ── Assemble ───────────────────────────────────────────────────────────────
const Assemble = ({reference = '', rows = [], fragments = [], at = {}, frame, fps, accent, soft}: Ctx) => {
	const tRead = at.read ?? 20, tVar = at.variant ?? 200, tBreak = at.fragments ?? 400, tAll = at.simultaneous ?? 500, tAlign = at.overlap ?? 600, tBuild = at.assemble ?? 660;
	const seq = rows[0] ?? reference;
	const L = seq.length;
	const DX = 32, X0 = 380 - ((L - 1) * DX) / 2;
	const colX = (c: number) => X0 + c * DX;
	const varCol = Array.from({length: L}, (_, c) => c).find((c) => reference[c] && reference[c] !== seq[c]) ?? -1;
	const broken = ease(frame, tBreak, tBreak + 40);
	const aligned = ease(frame, tAlign, tAlign + 60);
	const flash = frame >= tAll && frame < tAll + 90 ? 0.5 + 0.5 * Math.sin((frame - tAll) / 4) : 0;
	const build = ease(frame, tBuild + 30, tBuild + 110);
	const Y_REF = 70, Y_SEQ = 124, Y_PILE = 210, Y_OUT = 432;
	return (
		<g>
			{/* reference (usual sequence) + this person's sequence */}
			<g opacity={fadeAt(frame, tVar - 20) * (1 - broken * 0.6)}>
				<text x={X0 - 22} y={Y_REF + 6} textAnchor="end" fill={TOK.inkDim} fontSize={15} fontWeight={800}>usual</text>
				{reference.split('').map((b, c) => <LetterTile key={c} x={colX(c)} y={Y_REF} b={b} s={24} color={TOK.inkDim} />)}
			</g>
			<g opacity={1 - broken}>
				<text x={X0 - 22} y={Y_SEQ + 6} textAnchor="end" fill={TOK.inkDim} fontSize={15} fontWeight={800} opacity={fadeAt(frame, tVar - 20)}>patient</text>
				{seq.split('').map((b, c) => (
					<LetterTile key={c} x={colX(c)} y={Y_SEQ} b={b} opacity={fadeAt(frame, tRead + c * 5, 8)} ring={c === varCol ? fadeAt(frame, tVar) : 0} />
				))}
			</g>
			<g opacity={fadeAt(frame, tVar + 10) * (1 - broken)}>
				<text x={380} y={Y_SEQ + 50} textAnchor="middle" fill={TOK.amberInk} fontSize={16} fontWeight={800}>a single-base change is read directly</text>
			</g>
			{/* fragments: scatter, all read at once, then line up by overlap */}
			{broken > 0 && fragments.map(([a, b], k) => {
				const sx = 70 + hash01(k + 11) * 420, sy = 240 + hash01(k + 29) * 120;
				const ax = colX(a), ay = Y_PILE + k * 38;
				const fx = lerp(lerp(colX(a), sx, broken), ax, aligned);
				const fy = lerp(lerp(Y_SEQ, sy, broken), ay, aligned);
				const bob = frame > tBuild + 120 ? idleBob(frame, k, 1) : 0;
				return (
					<g key={k} transform={`translate(${fx - colX(a)},${fy + bob})`}>
						<rect x={colX(a) - 18} y={-19} width={(b - a) * DX + 36} height={38} rx={10} fill={soft} stroke={accent} strokeWidth={1.5 + flash * 2.5} opacity={0.9} />
						{seq.slice(a, b + 1).split('').map((ch, j) => <LetterTile key={j} x={colX(a + j)} y={0} b={ch} s={24} ring={a + j === varCol ? 0.4 : 0} />)}
					</g>
				);
			})}
			<g opacity={flash > 0 ? 1 : 0}>
				<text x={380} y={Y_PILE - 24} textAnchor="middle" fill={accent} fontSize={16} fontWeight={800}>every fragment read at the same time</text>
			</g>
			<g opacity={fadeAt(frame, tAlign + 30)}>
				<text x={380} y={Y_PILE - 24} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={800}>software lines up the overlaps</text>
			</g>
			{/* assembled sequence */}
			<Ledge x={40} y={Y_OUT + 30} w={680} opacity={fadeAt(frame, tBuild)} />
			<g opacity={fadeAt(frame, tBuild)}>
				<text x={X0 - 22} y={Y_OUT + 6} textAnchor="end" fill={accent} fontSize={15} fontWeight={800}>assembled</text>
				{seq.split('').map((b, c) => (
					<LetterTile key={c} x={colX(c)} y={Y_OUT} b={b} fill={accent} color="#ffffff" stroke="rgba(0,0,0,0.2)" opacity={Math.max(0, Math.min(1, build * L - c))} ring={c === varCol && build >= 1 ? idlePulse(frame) : 0} />
				))}
			</g>
			<text x={380} y={H - 12} textAnchor="middle" fill={TOK.amberInk} fontSize={17} fontWeight={800} opacity={fadeAt(frame, tBuild + 120)}>the output: the letters, in order</text>
		</g>
	);
};

// ── Align to a reference, flag variants, check databases ───────────────────
const Align = ({reference = '', rows = [], verdicts = [], at = {}, frame, fps, accent, soft}: Ctx) => {
	const tAlign = at.align ?? 20, tFlag = at.flag ?? 150, tVar = at.variants ?? 250, tDb = at.database ?? 350, tHarm = at.harmless ?? 600, tEnd = at.interpret ?? 800;
	const L = reference.length;
	const DX = 30, X0 = 380 - ((L - 1) * DX) / 2;
	const colX = (c: number) => X0 + c * DX;
	const reads = rows.map((r) => {
		const [s, letters] = r.split(':');
		return {start: Number(s), letters};
	});
	// Variant columns: any read letter differing from the reference.
	const varCols = Array.from(new Set(reads.flatMap((rd) => rd.letters.split('').map((ch, j) => (ch !== reference[rd.start + j] ? rd.start + j : -1)).filter((c) => c >= 0)))).sort((a, b) => a - b);
	const Y_REF = 66, Y_R0 = 118, DY = 34;
	const flag = fadeAt(frame, tFlag, 14);
	const harmful = verdicts.findIndex((v) => /harmful/i.test(v) && !/harmless/i.test(v));
	return (
		<g>
			<g opacity={fadeAt(frame, 0)}>
				<text x={X0 - 22} y={Y_REF + 6} textAnchor="end" fill={TOK.inkDim} fontSize={15} fontWeight={800}>reference</text>
				{reference.split('').map((b, c) => <LetterTile key={c} x={colX(c)} y={Y_REF} b={b} s={24} fill="#eeece7" />)}
			</g>
			{reads.map((rd, k) => {
				const t = ease(frame, tAlign + k * 10, tAlign + k * 10 + 30);
				const fromX = (hash01(k + 5) - 0.5) * 300;
				return (
					<g key={k} opacity={t} transform={`translate(${fromX * (1 - t)},0)`}>
						{rd.letters.split('').map((ch, j) => {
							const c = rd.start + j;
							const diff = ch !== reference[c];
							return <LetterTile key={j} x={colX(c)} y={Y_R0 + k * DY} b={ch} s={24} fill={diff && flag > 0.5 ? TOK.amber : '#ffffff'} color={TOK.ink} />;
						})}
					</g>
				);
			})}
			<text x={X0 - 22} y={Y_R0 + 6} textAnchor="end" fill={TOK.inkDim} fontSize={15} fontWeight={800} opacity={fadeAt(frame, tAlign)}>reads</text>
			{varCols.map((c, k) => (
				<g key={c} opacity={flag}>
					<rect x={colX(c) - 16} y={Y_REF - 18} width={32} height={Y_R0 + (reads.length - 1) * DY - Y_REF + 36} rx={8} fill="none" stroke={TOK.amber} strokeWidth={2.5} />
					<text x={colX(c)} y={Y_R0 + reads.length * DY + 8} textAnchor="middle" fill={TOK.amberInk} fontSize={15} fontWeight={800} opacity={fadeAt(frame, tVar)}>v{k + 1}</text>
				</g>
			))}
			{/* database check */}
			{(() => {
				const yDb = 420;
				return (
					<g>
						<g opacity={fadeAt(frame, tDb - 10)}>
							<rect x={40} y={yDb - 34} width={170} height={68} rx={12} fill={`url(#${ID}-g-stone)`} stroke="rgba(0,0,0,0.2)" />
							<text x={125} y={yDb - 6} textAnchor="middle" fill={TOK.ink} fontSize={17} fontWeight={800}>variant</text>
							<text x={125} y={yDb + 16} textAnchor="middle" fill={TOK.ink} fontSize={17} fontWeight={800}>database</text>
						</g>
						{varCols.map((c, k) => {
							const t = ease(frame, tDb + k * 30, tDb + k * 30 + 24);
							const x = 290 + k * 150;
							const v = verdicts[k] ?? '';
							const bad = k === harmful;
							const final = fadeAt(frame, bad ? tHarm + 40 : tDb + k * 30 + 26);
							return (
								<g key={c} opacity={t}>
									
									<Pill x={x} y={yDb - 20} text={`v${k + 1}`} color={TOK.amberInk} size={15} />
									<g opacity={final}>
										<Pill x={x} y={yDb + 22} text={v} color={bad ? TOK.amberInk : accent} fill={bad ? '#fff8ea' : soft} size={15} strokeWidth={bad ? 2 + idlePulse(frame) * 1.5 : 2} />
									</g>
								</g>
							);
						})}
					</g>
				);
			})()}
			<text x={380} y={H - 14} textAnchor="middle" fill={TOK.amberInk} fontSize={18} fontWeight={800} opacity={fadeAt(frame, tEnd)}>the sequencer reads; the software interprets</text>
		</g>
	);
};
