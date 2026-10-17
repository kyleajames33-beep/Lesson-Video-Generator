// B6c scenes 1 to 3: the hook (four letters, twenty building blocks), why codons are three bases, and the ribosome.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {pulse} from '../bio-m5-b04/dna';
import {
	AMBER, AMBER_INK, BaseTile, CELLPT, CellPlate, Chip, Cross, DrawPath, FONT_DISPLAY, FONT_HAND, Fade, GREYT, GREY_INK, GreyTag, Heading, INK, INK_SOFT,
	MRNA, MRNA_INK, Overlay, PlainArrow, Ribbon, Ring, SpanBracket, Strand, Sx, Tick, kf, prog,
} from '../bio-m5-b06b/shared';
import {HOOK, exitPath, hookPt} from '../bio-m5-b06b/s1';
import {AABead, CODON_W, MX, MrnaC, MrnaEnds, PB, Ribosome, S, Slots, TRna, TWENTY, WORKED, YG, codonToAA, ribX} from './shared';

// ---------- 1. Hook ----------
const H1 = 'hook';
const K1 = cues(S(H1), {last: 'Last time', copied: 'copied into mRNA', four: 'just four bases', twenty: 'twenty different amino acids', so: 'So how does a four-letter message', kinds: 'twenty kinds of building block', read: 'how the message is read', trans: 'acts as a translator'});
export const SceneHookB6c: React.FC = () => {
	const f = useCurrentFrame();
	const P = hookPt;
	const path = exitPath(P, CELLPT.pores.ul, CELLPT.erRibo[0], [930, 930]);
	const head = kf(f, [[4, 0], [70, path.len]]);
	const r = P(...CELLPT.erRibo[0]);
	const push = kf(f, [[70, 1], [110, 4.5]]);
	const plateO = 1 - prog(f, 92, 20);
	const boardO = prog(f, 96, 18);
	const lift = prog(f, K1.four + 4, 22);
	const fan = prog(f, K1.twenty + 4, 30);
	const strandX = 360, strandY = 330, sp = 100;
	const fourL = ['A', 'U', 'C', 'G'];
	const fourSrc = [0, 1, 7, 2];
	return (
		<>
			<Overlay>
				<g opacity={plateO} transform={`translate(${r[0]},${r[1]}) scale(${push}) translate(${-r[0]},${-r[1]})`}>
					<CellPlate x={HOOK.x} y={HOOK.y} k={HOOK.k} />
					<Ribbon path={path} head={head} len={70} />
				</g>
				<g opacity={boardO}>
					<Strand x={strandX} y={strandY} letters={WORKED} pitch={sp} face="up" color={MRNA} tw={80} th={60} so={20} />
					<Sx x={strandX - 60} y={strandY + 16} text="5'" size={44} color={MRNA_INK} hand anchor="middle" at={96} />
					<Sx x={strandX + 11 * sp + 60} y={strandY + 16} text="3'" size={44} color={MRNA_INK} hand anchor="middle" at={96} />
					<Sx x={strandX} y={strandY + 80} text="mRNA in the cytoplasm" size={36} color={INK_SOFT} hand at={110} />
				</g>
				{/* four letters lift out */}
				{fourL.map((l, i) => {
					const x0 = strandX + fourSrc[i] * sp, y0 = strandY - 20;
					const x1 = 160 + i * 96, y1 = 600;
					return <g key={l} opacity={prog(f, K1.four, 8)}><BaseTile x={x0 + (x1 - x0) * lift} y={y0 + (y1 - y0) * lift} face="up" l={l} w={80} h={60} /></g>;
				})}
				<Sx x={160 + 1.5 * 96} y={680} text="4 letters" size={48} color={MRNA_INK} hand anchor="middle" at={K1.four + 20} />
				{/* twenty labelled beads fan out */}
				{TWENTY.map((aa, i) => {
					const row = Math.floor(i / 10), col = i % 10;
					const x1 = 950 + col * 88, y1 = 540 + row * 80;
					const x = 1390 + (x1 - 1390) * fan, y = 580 + (y1 - 580) * fan;
					return <AABead key={aa} x={x} y={y} aa={aa} r={32} o={prog(f, K1.twenty + i, 8)} />;
				})}
				<Sx x={1346} y={700} text="20 building blocks" size={48} color={INK} hand anchor="middle" at={K1.twenty + 30} />
				<PlainArrow x1={560} y1={580} x2={880} y2={580} at={K1.so} color={AMBER_INK} width={5} dash="4 12" />
				<Sx x={720} y={560} text="?" size={70} color={AMBER_INK} hand anchor="middle" at={K1.so + 12} />
				<g transform={`translate(${kf(f, [[K1.trans - 10, 360], [K1.trans + 30, 0]])},0)`}>
					<TRna x={1600} ya={1000} s={0.7} o={prog(f, K1.trans - 10, 14)} />
				</g>
				<Sx x={1440} y={830} text="a translator?" size={40} color={INK_SOFT} hand anchor="middle" at={K1.trans + 20} />
			</Overlay>
			<Heading text="How does a four-letter message build a protein?" at={K1.read} size={58} />
		</>
	);
};

// ---------- 2. Why three bases ----------
const H2 = 'why-three';
const K2 = cues(S(H2), {suppose: 'Suppose each base', four: 'name only four', pairs: 'Pairs of bases', sixteen: 'is sixteen', groups: 'Groups of three', sixty: 'which is sixty-four', enough: 'more than enough for twenty', threes: 'read in threes', met: 'the codons you met', gaps: 'no gaps', with: 'With sixty-four codons', more: 'more than one codon', stop: 'three codons mean stop'});
const SQ_C: Record<string, string> = {A: '#f4b5a4', U: '#f6c35a', C: '#d3a2dc', G: '#adb6ee'};
const NB4 = ['U', 'C', 'A', 'G'];
const BarRow: React.FC<{y: number; n: number; at: number; ok: boolean; label: string}> = ({y, n, at, ok, label}) => {
	const f = useCurrentFrame();
	const L = 440, x0 = 1380;
	const p = prog(f, at + 6, 24);
	const w = (n / 64) * L * p;
	return (
		<g opacity={prog(f, at, 10)}>
			<Sx x={860} y={y + 14} text={label} size={44} color={INK} weight={700} at={at} />
			<rect x={x0} y={y - 16} width={L} height={32} rx={10} fill="#ece6da" />
			<rect x={x0} y={y - 16} width={w} height={32} rx={10} fill={ok ? MRNA : GREYT} />
			{ok ? <Tick x={x0 + L + 40} y={y} at={at + 30} s={36} /> : <Cross x={x0 + w + 36} y={y} at={at + 30} s={16} />}
		</g>
	);
};
export const SceneWhyThree: React.FC = () => {
	const f = useCurrentFrame();
	const rowsO = 1 - prog(f, K2.threes, 18);
	const strandO = prog(f, K2.threes + 10, 16);
	const sx = 420, sy = 480, sp = 90;
	const gly = ['GGU', 'GGC', 'GGA', 'GGG'];
	const stops = NB4.flatMap(a => NB4.flatMap(b => NB4.map(c => a + b + c))).filter(c => codonToAA(c) === 'stop');
	return (
		<>
			<Heading text="Why three bases?" at={4} size={58} />
			<Overlay>
				<g opacity={rowsO}>
					<Fade at={K2.suppose}>
						<line x1={1380 + (20 / 64) * 440} y1={230} x2={1380 + (20 / 64) * 440} y2={760} stroke={AMBER_INK} strokeWidth={4} strokeDasharray="10 8" />
						<Sx x={1380 + (20 / 64) * 440} y={216} text="need 20" size={36} color={AMBER_INK} hand anchor="middle" at={K2.suppose} />
					</Fade>
					{/* row 1: single bases */}
					{NB4.map((b, i) => <g key={b} opacity={prog(f, K2.suppose + i * 4, 10)}><BaseTile x={150 + i * 80} y={262} face="down" l={b} w={64} h={50} /></g>)}
					<BarRow y={290} n={4} at={K2.four} ok={false} label="1 base: 4" />
					{/* row 2: pairs */}
					{NB4.map((a, r) => NB4.map((b, c) => (
						<g key={a + b} opacity={prog(f, K2.pairs + (r * 4 + c) * 1.5, 8)}>
							<rect x={150 + c * 60} y={390 + r * 44} width={22} height={30} rx={4} fill={SQ_C[a]} stroke={INK_SOFT} strokeWidth={1.5} />
							<rect x={174 + c * 60} y={390 + r * 44} width={22} height={30} rx={4} fill={SQ_C[b]} stroke={INK_SOFT} strokeWidth={1.5} />
						</g>
					)))}
					<BarRow y={470} n={16} at={K2.sixteen - 10} ok={false} label="2 bases: 4 x 4 = 16" />
					{/* row 3: triplets pour in */}
					{NB4.map((a, r) => NB4.map((b, c) => NB4.map((t, k) => {
						const i = r * 16 + c * 4 + k;
						const col = i % 8, row = Math.floor(i / 8);
						const at = K2.groups + 4 + i * 0.7;
						const drop = (1 - prog(f, at, 10)) * -40;
						return (
							<g key={a + b + t} opacity={prog(f, at, 8)} transform={`translate(0,${drop})`}>
								{[a, b, t].map((q, j) => <rect key={j} x={150 + col * 62 + j * 18} y={605 + row * 30} width={16} height={22} rx={3} fill={SQ_C[q]} stroke={INK_SOFT} strokeWidth={1} />)}
							</g>
						);
					})))}
					<BarRow y={700} n={64} at={K2.sixty - 10} ok label="3 bases: 4 x 4 x 4 = 64" />
					<Sx x={860} y={790} text="more than enough for twenty" size={40} color={MRNA_INK} hand at={K2.enough} />
				</g>
				{/* the code is read in threes */}
				<g opacity={strandO}>
					<Strand x={sx} y={sy} letters={WORKED} pitch={sp} face="up" color={MRNA} tw={72} th={54} so={20} />
					<Sx x={sx - 56} y={sy + 16} text="5'" size={44} color={MRNA_INK} hand anchor="middle" at={-100} />
					<Sx x={sx + 11 * sp + 56} y={sy + 16} text="3'" size={44} color={MRNA_INK} hand anchor="middle" at={-100} />
				</g>
				{[0, 1, 2, 3].map(k => <SpanBracket key={k} x1={sx + 3 * k * sp - 42 + (k ? 3 : 0)} x2={sx + (3 * k + 2) * sp + 42 - (k < 3 ? 3 : 0)} y={sy + 34} at={K2.met + k * 6} label="codon" color={MRNA_INK} size={36} />)}
				<GreyTag x={sx + 12 * sp + 40} y={sy + 40} text="no gaps" at={K2.gaps} size={28} />
				{/* most amino acids have more than one codon; three mean stop */}
				{gly.map((c, i) => <Chip key={c} x={260 + i * 190} y={700} text={c} at={K2.more + i * 5} size={40} color={INK} hand={false} stroke={AMBER} />)}
				{gly.map((c, i) => <Fade key={c + 'a'} at={K2.more + 20}><line x1={340 + i * 190} y1={770} x2={1060} y2={810} stroke={AMBER} strokeWidth={3} /></Fade>)}
				<AABead x={1100} y={812} aa={codonToAA('GGU')} r={40} o={prog(f, K2.more + 20, 10)} />
				<Sx x={1160} y={826} text="all Gly" size={40} color={INK_SOFT} hand at={K2.more + 26} />
				{stops.map((c, i) => <Chip key={c} x={260 + i * 190} y={900} text={c} at={K2.stop + i * 5} size={40} color={GREY_INK} hand={false} fill="#eceeef" stroke={GREYT} />)}
				<Chip x={860} y={900} text="stop" at={K2.stop + 18} size={40} color={GREY_INK} fill="#eceeef" stroke={GREYT} />
			</Overlay>
		</>
	);
};

// ---------- 3. The ribosome ----------
const H3 = 'ribosome';
const K3 = cues(S(H3), {trans: 'called translation', at: 'at a ribosome', cyto: 'in the cytoplasm', two: 'two parts', small: 'small subunit', large: 'large subunit', rrna: 'ribosomal RNA or rRNA', holds: 'holds the mRNA', one: 'one codon at a time', choose: "doesn't choose the amino acids", another: 'another RNA'});
export const SceneRibosome: React.FC = () => {
	const f = useCurrentFrame();
	const P = hookPt;
	const target = P(...CELLPT.freeRibo[0]);
	const zoomAt = K3.two - 40;
	const z = kf(f, [[zoomAt, 1], [zoomAt + 34, 7]]);
	const plateO = 1 - prog(f, zoomAt + 14, 18);
	const boardO = prog(f, zoomAt + 18, 18);
	const smallBob = pulse(f, K3.small, 30) * 34;
	const largeBob = pulse(f, K3.large, 30) * 34;
	const slide = prog(f, K3.holds, 34);
	const close = prog(f, K3.holds + 30, 14);
	const step = prog(f, K3.one, 26);
	const rx = ribX(0) + step * CODON_W;
	const ghost = P(1060, 980);
	return (
		<>
			<Heading text="Translation happens at a ribosome" at={4} size={56} />
			<Overlay>
				<g opacity={plateO} transform={`translate(${target[0]},${target[1]}) scale(${z}) translate(${-target[0]},${-target[1]})`}>
					<CellPlate x={HOOK.x} y={HOOK.y} k={HOOK.k} />
					{[CELLPT.freeRibo[0], CELLPT.freeRibo[1]].map((q, i) => { const p = P(...q); return <Ring key={i} cx={p[0]} cy={p[1]} rx={14} ry={14} at={K3.at + i * 6} color={AMBER_INK} seed={i + 4} width={4} />; })}
					<Chip x={1420} y={250} text="free ribosomes" at={K3.at + 10} size={34} color={AMBER_INK} stroke={AMBER} />
					{(() => { const e = P(640, 760); return <Ring cx={e[0]} cy={e[1]} rx={120} ry={150} at={K3.cyto} color={AMBER} seed={9} />; })()}
					<Chip x={96} y={300} text="rough ER: ribosomes on a membrane" at={K3.cyto + 8} size={32} color={AMBER_INK} stroke={AMBER} />
					<g opacity={0.55 * prog(f, K3.cyto + 10, 10)}><circle cx={ghost[0]} cy={ghost[1]} r={10} fill="none" stroke={GREYT} strokeWidth={3} strokeDasharray="4 4" /></g>
					<Cross x={ghost[0]} y={ghost[1]} at={K3.cyto + 16} s={16} />
					<GreyTag x={1420} y={760} text="not in the nucleus" at={K3.cyto + 20} size={28} />
				</g>
				<g opacity={boardO}>
					<Ribosome id="b6c-s3" x={rx} y={YG} k={0.5} smallDy={smallBob + (1 - close) * 26 * slide} largeDy={-largeBob - (1 - close) * 20 * slide} />
					<g transform={`translate(${(1 - slide) * -1500},0)`}>
						<MrnaC o={prog(f, K3.holds - 6, 8)} />
						<MrnaEnds />
					</g>
					<Slots rx={rx} o={prog(f, K3.one + 10, 14)} />
					<Sx x={rx} y={YG + 330} text="small subunit" size={40} color="#7b4a5e" hand anchor="middle" at={K3.small} />
					<Sx x={rx + 375} y={250} text="large subunit" size={40} color="#7a5a30" hand at={K3.large} />
					<Chip x={1330} y={820} text="made of protein and rRNA" at={K3.rrna} size={36} color={INK} stroke={AMBER} />
					<Sx x={1330} y={940} text="moves one codon at a time" size={36} color={MRNA_INK} hand at={K3.one + 10} />
					{[0, 1].map(s => <Sx key={s} x={rx - CODON_W / 2 + s * CODON_W} y={YG - 110} text="?" size={64} color={GREYT} anchor="middle" at={K3.choose + s * 6} />)}
					<Sx x={96} y={990} text="it does not choose the amino acids" size={36} color={GREY_INK} hand at={K3.choose + 10} />
				</g>
			</Overlay>
		</>
	);
};
void AMBER; void DrawPath; void FONT_DISPLAY; void FONT_HAND; void INK; void MX; void PB; void TRna;
