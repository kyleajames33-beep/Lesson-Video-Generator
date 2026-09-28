// DnaDiagram — a DNA ladder model on a stone ledge, in three teaching modes.
// The sequence is a prop; every partner base is computed (A–T, C–G), so the
// pairing can never be drawn wrong.
//
// mode 'nucleotide'   one nucleotide assembles (phosphate, deoxyribose, base),
//                     copies link into a strand (sugar–phosphate backbone), a
//                     second strand pairs, the ladder twists into a double
//                     helix and turns slowly; then the base order is read out:
//                     the backbone repeats, the bases carry the message.
// mode 'pairing'      bottom-strand bases dock under their partners one by one
//                     (a wrong base is turned away at "no other combinations
//                     fit"), hydrogen bonds appear, 2 for A–T and 3 for C–G
//                     (counted per pair), then 5′→3′ / 3′→5′ arrows show the
//                     strands are antiparallel, and finally one strand alone
//                     templates the other.
// mode 'replication'  the old molecule (both strands slate) unzips, new
//                     nucleotides (accent) pair onto each old strand, and two
//                     molecules result, each one old strand + one new strand.
//
// Colours: pairing mode colours bases by pair type (A–T / C–G); replication
// mode keeps bases white and colours strands old vs new (≤ 3 meanings).

import {useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, idleBob, idlePulse} from '../../diorama';
import {Arrow, GlossDefs, Ledge, PAIR_DNA, PURPLE, Pill, SLATE, baseTone, ease, fadeAt, lerp, popAt} from './shared';

export type DnaProps = {
	mode?: 'nucleotide' | 'pairing' | 'replication';
	/** Top strand, 5′→3′, left to right. */
	sequence?: string;
	at?: Record<string, number>;
	delay?: number;
};

const ID = 'b12m5dna';
const W = 760, H = 530;
const TILE = 36;

const Sugar = ({x, y, s = 1, color}: {x: number; y: number; s?: number; color: string}) => {
	const r = 15 * s;
	const pts = Array.from({length: 5}, (_, k) => {
		const a = -Math.PI / 2 + (k * 2 * Math.PI) / 5;
		return `${x + Math.cos(a) * r},${y + Math.sin(a) * r}`;
	}).join(' ');
	return <polygon points={pts} fill={`url(#${ID}-g-${color})`} stroke="rgba(0,0,0,0.3)" strokeWidth={1} />;
};
const Phos = ({x, y, s = 1, color}: {x: number; y: number; s?: number; color: string}) => (
	<circle cx={x} cy={y} r={10 * s} fill={`url(#${ID}-g-${color})`} stroke="rgba(0,0,0,0.3)" strokeWidth={1} />
);
const Tile = ({x, y, b, color, s = 1, opacity = 1, letter = 1}: {x: number; y: number; b: string; color: string; s?: number; opacity?: number; letter?: number}) => (
	<g opacity={opacity} transform={`translate(${x},${y}) scale(${s})`}>
		<rect x={-TILE / 2} y={-TILE / 2} width={TILE} height={TILE} rx={8} fill={`url(#${ID}-g-${color})`} stroke="rgba(0,0,0,0.25)" />
		<text y={TILE * 0.2} textAnchor="middle" fill={color === 'white' ? TOK.ink : '#ffffff'} fontSize={TILE * 0.56} fontWeight={800} opacity={letter}>{b}</text>
	</g>
);
const HBonds = ({x, y1, y2, n, opacity = 1, color = TOK.inkDim}: {x: number; y1: number; y2: number; n: number; opacity?: number; color?: string}) => (
	<g opacity={opacity}>
		{Array.from({length: n}, (_, k) => {
			const dx = (k - (n - 1) / 2) * 9;
			return <line key={k} x1={x + dx} y1={y1} x2={x + dx} y2={y2} stroke={color} strokeWidth={2.5} strokeDasharray="3 3" />;
		})}
	</g>
);
const hCount = (b: string) => (b === 'C' || b === 'G' ? 3 : 2);

/** A horizontal strand: backbone of sugars (at each base) and phosphates (between), bases hanging toward `dir`. */
const Strand = ({xs, y, dir, bases, color, baseColor, reveal = 1, frame, ends, endsOpacity = 1}: {
	xs: number[]; y: number; dir: 1 | -1; bases: string[]; color: string; baseColor: (b: string) => string; reveal?: number; frame: number; ends?: [string, string]; endsOpacity?: number;
}) => {
	const n = xs.length;
	const shown = reveal * n;
	return (
		<g>
			{xs.map((x, i) => {
				const o = Math.max(0, Math.min(1, shown - i));
				if (o <= 0) return null;
				return (
					<g key={i} opacity={o}>
						{i < n - 1 && <line x1={x} y1={y} x2={xs[i + 1]} y2={y} stroke="#9a948a" strokeWidth={5} opacity={Math.max(0, Math.min(1, shown - i - 1))} />}
						<line x1={x} y1={y} x2={x} y2={y + dir * 30} stroke="#9a948a" strokeWidth={4} />
						<Sugar x={x} y={y} color={color} />
						{i < n - 1 && <Phos x={(x + xs[i + 1]) / 2} y={y} color={color} />}
						<Tile x={x} y={y + dir * 46} b={bases[i]} color={baseColor(bases[i])} />
					</g>
				);
			})}
			{ends && (
				<g opacity={endsOpacity}>
					<text x={xs[0] - 34} y={y + 6} textAnchor="middle" fill={TOK.ink} fontSize={18} fontWeight={800}>{ends[0]}</text>
					<text x={xs[n - 1] + 34} y={y + 6} textAnchor="middle" fill={TOK.ink} fontSize={18} fontWeight={800}>{ends[1]}</text>
				</g>
			)}
		</g>
	);
};

export const DnaDiagram = ({mode = 'pairing', sequence = 'ACTGGA', at = {}, delay = 62}: DnaProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const top = sequence.split('');
	const bot = top.map((b) => PAIR_DNA[b]);
	const n = top.length;
	const xs = top.map((_, i) => 120 + (i * 480) / Math.max(1, n - 1));
	const colors = {at: theme.accent, cg: PURPLE, old: SLATE, new: theme.accent, white: '#f4f2ee', bb: '#c9c1b2'};
	const common = {frame, fps, theme, top, bot, n, xs, at};
	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={`DNA model: ${mode}`} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={colors} />
			{mode === 'nucleotide' ? <NucleotideMode {...common} /> : mode === 'replication' ? <ReplicationMode {...common} /> : <PairingMode {...common} />}
		</svg>
	);
};

type Common = {frame: number; fps: number; theme: {accent: string; soft: string}; top: string[]; bot: string[]; n: number; xs: number[]; at: Record<string, number>};

// ── Pairing ────────────────────────────────────────────────────────────────
const PairingMode = ({frame, fps, theme, top, bot, n, xs, at}: Common) => {
	const tAT = at.at ?? 20, tCG = at.cg ?? 90, tNo = at.nofit ?? 160, tH = at.hbonds ?? 280, tH2 = at.two ?? 380, tH3 = at.three ?? 450, tAnti = at.anti ?? 800, tTpl = at.template ?? 1100;
	const YT = 150, YB = 360;
	const tileTop = YT + 46, tileBot = YB - 46;
	// Pairs dock in two waves: the A–T pairs at "A with T", the C–G pairs at "C with G".
	const dockAt = (i: number) => {
		const isCG = top[i] === 'C' || top[i] === 'G';
		const k = top.slice(0, i).filter((b) => (b === 'C' || b === 'G') === isCG).length;
		return (isCG ? tCG : tAT) + k * 10;
	};
	const tone = (b: string) => baseTone(b);
	const tpl = ease(frame, tTpl, tTpl + 40);
	const firstAT = top.findIndex((b) => b === 'A' || b === 'T');
	const firstCG = top.findIndex((b) => b === 'C' || b === 'G');
	// A wrong partner (C against the first A/T) tries to dock and is turned away.
	const wrongT = frame - tNo;
	const wrongY = wrongT < 0 ? 470 : wrongT < 24 ? lerp(470, tileBot + 24, ease(frame, tNo, tNo + 24)) : lerp(tileBot + 24, 480, ease(frame, tNo + 34, tNo + 60));
	return (
		<g>
			<Ledge x={40} y={452} w={680} opacity={fadeAt(frame, 0)} />
			<g opacity={fadeAt(frame, 0, 14)}>
				<Strand xs={xs} y={YT} dir={1} bases={top} color="bb" baseColor={tone} frame={frame} ends={['5′', '3′']} endsOpacity={fadeAt(frame, tAnti)} />
			</g>
			{bot.map((b, i) => {
				const d = dockAt(i);
				const t = ease(frame, d, d + 22);
				if (t <= 0) return null;
				const lift = (1 - t) * 60;
				const redraw = tpl > 0 ? Math.min(1, Math.max(0, (frame - tTpl - 40 - i * 8) / 14)) : 1;
				const o = Math.min(1, t * 1.5) * (tpl > 0 ? lerp(1, 0.25, tpl) * (1 - redraw) + redraw : 1);
				const bob = frame > tTpl + 120 ? idleBob(frame, i, 1) : 0;
				return (
					<g key={i} opacity={o} transform={`translate(0,${lift + bob})`}>
						{i < n - 1 && <line x1={xs[i]} y1={YB} x2={xs[i + 1]} y2={YB} stroke="#9a948a" strokeWidth={5} opacity={ease(frame, dockAt(i + 1), dockAt(i + 1) + 22)} />}
						<line x1={xs[i]} y1={YB} x2={xs[i]} y2={YB - 30} stroke="#9a948a" strokeWidth={4} />
						<Sugar x={xs[i]} y={YB} color="bb" />
						{i < n - 1 && <Phos x={(xs[i] + xs[i + 1]) / 2} y={YB} color="bb" />}
						<Tile x={xs[i]} y={tileBot} b={b} color={tone(b)} />
					</g>
				);
			})}
			{/* hydrogen bonds, counted per pair */}
			{top.map((b, i) => {
				const o = fadeAt(frame, Math.max(tH, dockAt(i) + 22) + i * 4);
				return <HBonds key={i} x={xs[i]} y1={tileTop + TILE / 2 + 3} y2={tileBot - TILE / 2 - 3} n={hCount(b)} opacity={o} />;
			})}
			{firstAT >= 0 && (
				<g opacity={fadeAt(frame, tH2)}>
					<Pill x={xs[firstAT]} y={YB + 58} text="2 H-bonds" color={theme.accent} size={15} strokeWidth={2 + (frame < tH3 + 60 && frame > tH2 ? idlePulse(frame, 30) * 1.5 : 0)} />
				</g>
			)}
			{firstCG >= 0 && (
				<g opacity={fadeAt(frame, tH3)}>
					<Pill x={xs[firstCG]} y={YB + 58} text="3 H-bonds" color={PURPLE} size={15} />
				</g>
			)}
			{/* the wrong partner */}
			{firstAT >= 0 && wrongT > 0 && wrongT < 70 && (
				<g>
					<Tile x={xs[firstAT] + 4} y={wrongY} b={top[firstAT] === 'A' ? 'C' : 'G'} color={top[firstAT] === 'A' ? 'cg' : 'cg'} />
					<g opacity={fadeAt(frame, tNo + 20, 6) * (1 - fadeAt(frame, tNo + 56, 8))}>
						<circle cx={xs[firstAT] + 34} cy={tileBot} r={14} fill="#ffffff" stroke={TOK.amber} strokeWidth={3} />
						<path d={`M ${xs[firstAT] + 28} ${tileBot - 6} L ${xs[firstAT] + 40} ${tileBot + 6} M ${xs[firstAT] + 40} ${tileBot - 6} L ${xs[firstAT] + 28} ${tileBot + 6}`} stroke={TOK.amberInk} strokeWidth={3.5} strokeLinecap="round" />
					</g>
				</g>
			)}
			{/* antiparallel */}
			<g opacity={fadeAt(frame, tAnti)}>
				<Arrow x1={xs[0]} y1={YT - 34} x2={xs[n - 1]} y2={YT - 34} color={theme.accent} width={3} head={11} t={ease(frame, tAnti, tAnti + 30)} />
				<Arrow x1={xs[n - 1]} y1={YB + 22} x2={xs[0]} y2={YB + 22} color={theme.accent} width={3} head={11} t={ease(frame, tAnti + 10, tAnti + 40)} />
				<text x={xs[n - 1] + 34} y={YB + 6} textAnchor="middle" fill={TOK.ink} fontSize={18} fontWeight={800}>5′</text>
				<text x={xs[0] - 34} y={YB + 6} textAnchor="middle" fill={TOK.ink} fontSize={18} fontWeight={800}>3′</text>
				<text x={380} y={YT - 48} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={800}>antiparallel: the strands run opposite ways</text>
			</g>
			<g opacity={fadeAt(frame, tTpl + 30)}>
				<text x={380} y={500} textAnchor="middle" fill={TOK.amberInk} fontSize={19} fontWeight={800}>one base, one partner: either strand is a template</text>
			</g>
		</g>
	);
};

// ── Replication ────────────────────────────────────────────────────────────
const ReplicationMode = ({frame, fps, theme, top, bot, n, xs, at}: Common) => {
	const tUnzip = at.unzip ?? 60, tTpl = at.template ?? 200, tNew = at.build ?? 240, tTwo = at.two ?? 460, tRule = at.rule ?? 560;
	const apart = ease(frame, tUnzip, tUnzip + 70);
	// Old strands: top strand moves up, bottom strand moves down.
	const YT0 = 194, YB0 = 346; // together (tiles meet in the middle)
	const YT1 = 50, YB1 = 490;
	const yt = lerp(YT0, YT1, apart), yb = lerp(YB0, YB1, apart);
	const newAt = (i: number) => tNew + i * 14;
	const white = () => 'white';
	const settle = frame > tNew + n * 14 + 30;
	const hb = (1 - ease(frame, tUnzip - 10, tUnzip + 20));
	return (
		<g>
			{/* old strands */}
			<g opacity={fadeAt(frame, 0, 14)}>
				<Strand xs={xs} y={yt} dir={1} bases={top} color="old" baseColor={white} frame={frame} />
				<Strand xs={xs} y={yb} dir={-1} bases={bot} color="old" baseColor={white} frame={frame} />
				{top.map((b, i) => <HBonds key={i} x={xs[i]} y1={yt + 46 + TILE / 2 + 2} y2={yb - 46 - TILE / 2 - 2} n={hCount(b)} opacity={hb} />)}
			</g>
			<text x={380} y={272} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={800} opacity={fadeAt(frame, tUnzip + 30) * (1 - fadeAt(frame, tNew))}>hydrogen bonds break: the strands unzip</text>
			{/* new strands built on each old template */}
			{[0, 1].map((k) => {
				const oldY = k === 0 ? YT1 : YB1;
				const dir = k === 0 ? 1 : -1;
				const newY = oldY + dir * 184;
				const bases = k === 0 ? bot : top;
				return (
					<g key={k}>
						{bases.map((b, i) => {
							const t = ease(frame, newAt(i), newAt(i) + 20);
							if (t <= 0) return null;
							const off = (1 - t) * 40 * dir;
							const bob = settle ? idleBob(frame, i + k * 10, 0.8) : 0;
							return (
								<g key={i} opacity={Math.min(1, t * 1.4)} transform={`translate(0,${off + bob})`}>
									{i < n - 1 && <line x1={xs[i]} y1={newY} x2={xs[i + 1]} y2={newY} stroke="#9a948a" strokeWidth={5} opacity={ease(frame, newAt(i + 1), newAt(i + 1) + 20)} />}
									<line x1={xs[i]} y1={newY} x2={xs[i]} y2={newY - dir * 30} stroke="#9a948a" strokeWidth={4} />
									<Sugar x={xs[i]} y={newY} color="new" />
									{i < n - 1 && <Phos x={(xs[i] + xs[i + 1]) / 2} y={newY} color="new" />}
									<Tile x={xs[i]} y={newY - dir * 46} b={b} color="white" />
									<HBonds x={xs[i]} y1={oldY + dir * (46 + TILE / 2 + 2)} y2={newY - dir * (46 + TILE / 2 + 2)} n={hCount(b)} opacity={fadeAt(frame, newAt(i) + 16)} />
								</g>
							);
						})}
					</g>
				);
			})}
			{/* labels, at the left end of each strand */}
			<g opacity={fadeAt(frame, tTpl)}>
				<Pill x={62} y={yt} text="old" color={SLATE} size={15} />
				<Pill x={62} y={yb} text="old" color={SLATE} size={15} />
			</g>
			<g opacity={fadeAt(frame, tNew + 30)}>
				<Pill x={62} y={YT1 + 184} text="new" color={theme.accent} fill={theme.soft} size={15} />
				<Pill x={62} y={YB1 - 184} text="new" color={theme.accent} fill={theme.soft} size={15} />
			</g>
			{/* two molecules, each one old + one new */}
			{[0, 1].map((k) => {
				const y0 = k === 0 ? YT1 : YB1 - 184;
				return (
					<g key={k} opacity={popAt(frame, fps, tTwo + k * 8)}>
						<rect x={18} y={y0 - 24} width={W - 36} height={184 + 48} rx={18} fill="none" stroke={theme.accent} strokeWidth={2} strokeDasharray="8 7" opacity={0.6} />
						<text x={W - 36} y={y0 + 102} textAnchor="end" fill={theme.accent} fontSize={16} fontWeight={800}>molecule {k + 1}</text>
					</g>
				);
			})}
			<g opacity={fadeAt(frame, tRule)}>
				<rect x={196} y={250} width={368} height={34} rx={17} fill="#fff8ea" stroke={TOK.amber} strokeWidth={2 + idlePulse(frame) * 1.5} />
				<text x={380} y={273} textAnchor="middle" fill={TOK.amberInk} fontSize={17} fontWeight={800}>each molecule: 1 old strand + 1 new</text>
			</g>
		</g>
	);
};

// ── Nucleotide → strand → double helix ─────────────────────────────────────
const NucleotideMode = ({frame, fps, theme, top, bot, n, xs, at}: Common) => {
	const tParts = at.parts ?? 20, tSug = at.sugar ?? 60, tPho = at.phosphate ?? 90, tBase = at.base ?? 130, tLink = at.link ?? 200, tBack = at.backbone ?? 300, tTwist = at.twist ?? 400, tInfo = at.info ?? 600, tSeq = at.sequence ?? 700;
	const solo = 1 - ease(frame, tLink, tLink + 30); // the big single nucleotide
	const link = ease(frame, tLink + 10, tLink + 70);
	const pair = ease(frame, tTwist - 60, tTwist - 10);
	const twist = ease(frame, tTwist, tTwist + 60);
	const CY = 250, HH = 110;
	const phase = frame > tTwist ? (frame - tTwist) / 70 : 0;
	const k = 1.35; // radians per base step
	const th = (x: number) => ((x - xs[0]) / (xs[1] - xs[0])) * k + phase;
	const ytop = (x: number) => lerp(CY - HH, CY - HH * Math.cos(th(x)), twist);
	const ybot = (x: number) => lerp(CY + HH, CY + HH * Math.cos(th(x)), twist);
	const depth = (x: number) => (twist > 0 ? Math.sin(th(x)) : 0);
	const tone = (b: string) => baseTone(b);
	const path = (f: (x: number) => number) => {
		let d = '';
		for (let x = xs[0]; x <= xs[n - 1] + 0.1; x += 8) d += `${d ? ' L' : 'M'} ${x} ${f(x)}`;
		return d;
	};
	// Big nucleotide labels
	const big = {x: 380, y: 220};
	return (
		<g>
			<Ledge x={40} y={452} w={680} opacity={fadeAt(frame, 0)} />
			{/* one nucleotide, three parts */}
			{solo > 0 && (
				<g opacity={solo} transform={`translate(${big.x},${big.y}) scale(${lerp(1, 0.4, 1 - solo)}) translate(${-big.x},${-big.y})`}>
					<g opacity={popAt(frame, fps, tPho)}>
						<circle cx={big.x - 130} cy={big.y} r={34} fill={`url(#${ID}-g-bb)`} stroke="rgba(0,0,0,0.3)" />
						<text x={big.x - 130} y={big.y + 7} textAnchor="middle" fill={TOK.ink} fontSize={20} fontWeight={800}>P</text>
						<text x={big.x - 130} y={big.y + 66} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={800}>phosphate</text>
						<line x1={big.x - 96} y1={big.y} x2={big.x - 46} y2={big.y} stroke="#9a948a" strokeWidth={6} />
					</g>
					<g opacity={popAt(frame, fps, tSug)}>
						<Sugar x={big.x} y={big.y} s={3} color="bb" />
						<text x={big.x} y={big.y + 76} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={800}>deoxyribose</text>
						<text x={big.x} y={big.y + 96} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={800}>(sugar)</text>
					</g>
					<g opacity={popAt(frame, fps, tBase)}>
						<line x1={big.x + 46} y1={big.y} x2={big.x + 96} y2={big.y} stroke="#9a948a" strokeWidth={6} />
						<Tile x={big.x + 140} y={big.y} b={top[0]} color={tone(top[0])} s={2} />
						<text x={big.x + 140} y={big.y + 66} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={800}>nitrogenous base</text>
					</g>
					<text x={big.x} y={70} textAnchor="middle" fill={TOK.ink} fontSize={22} fontWeight={800} opacity={fadeAt(frame, tParts)}>one nucleotide = 3 parts</text>
				</g>
			)}
			{/* strands (top builds at `link`, bottom pairs before the twist) */}
			{link > 0 && (
				<g>
					{[0, 1].map((s) => {
						const reveal = s === 0 ? link : pair;
						if (reveal <= 0) return null;
						const f = s === 0 ? ytop : ybot;
						return <path key={s} d={path(f)} fill="none" stroke="#9a948a" strokeWidth={6} opacity={reveal} strokeLinecap="round" />;
					})}
					{xs.map((x, i) => {
						const yT = ytop(x), yB = ybot(x);
						const z = depth(x);
						const fore = Math.abs(yB - yT) / (2 * HH); // rung length: 1 flat → 0 edge-on
						const o = 0.55 + 0.45 * (1 - Math.max(0, -z));
						const tIn = Math.max(0, Math.min(1, link * n - i));
						const bIn = Math.max(0, Math.min(1, pair * n - i));
						const sgn = yB >= yT ? 1 : -1;
						const tileS = lerp(1, 0.55, 1 - fore) * (twist > 0 ? 0.9 : 1);
						return (
							<g key={i} opacity={o}>
								{bIn > 0 && <line x1={x} y1={yT} x2={x} y2={yB} stroke="#9a948a" strokeWidth={4} opacity={bIn} />}
								{tIn > 0 && (
									<g opacity={tIn}>
										{bIn <= 0 && <line x1={x} y1={yT} x2={x} y2={yT + sgn * (fore * HH * 0.55 + 8)} stroke="#9a948a" strokeWidth={4} />}
										<Sugar x={x} y={yT} color="bb" s={0.9} />
										{i < n - 1 && <Phos x={(x + xs[i + 1]) / 2} y={ytop((x + xs[i + 1]) / 2)} color="bb" s={0.9} />}
										<Tile x={x} y={yT + sgn * (fore * HH * 0.55 + 8)} b={top[i]} color={tone(top[i])} s={tileS} letter={fore > 0.35 ? 1 : 0} />
									</g>
								)}
								{bIn > 0 && (
									<g opacity={bIn}>
										<Sugar x={x} y={yB} color="bb" s={0.9} />
										{i < n - 1 && <Phos x={(x + xs[i + 1]) / 2} y={ybot((x + xs[i + 1]) / 2)} color="bb" s={0.9} />}
										<Tile x={x} y={yB - sgn * (fore * HH * 0.55 + 8)} b={bot[i]} color={tone(bot[i])} s={tileS} letter={fore > 0.35 ? 1 : 0} />
									</g>
								)}
							</g>
						);
					})}
					<g opacity={fadeAt(frame, tBack) * (1 - fadeAt(frame, tTwist - 20))}>
						<Pill x={380} y={CY - HH - 44} text="sugar–phosphate backbone" color={TOK.inkDim} size={16} />
					</g>
					<g opacity={fadeAt(frame, tTwist + 30)}>
						<Pill x={380} y={60} text="double helix" color={theme.accent} fill={theme.soft} size={17} />
					</g>
				</g>
			)}
			{/* the message is in the bases */}
			<g opacity={fadeAt(frame, tInfo)}>
				<text x={380} y={434} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={800}>backbone: the same sugar + phosphate every time</text>
			</g>
			<g opacity={fadeAt(frame, tSeq)}>
				<text x={380} y={500} textAnchor="middle" fill={TOK.amberInk} fontSize={21} fontWeight={800}>
					the message is the base order: {top.join(' ')}
				</text>
			</g>
		</g>
	);
};
