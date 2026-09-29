// MammalDiagram — mammalian reproduction in three modes.
//
// mode 'gametes'    a sperm (acrosome, haploid nucleus, mitochondria-packed
//                   midpiece, flagellum) and a far larger, non-motile egg
//                   (haploid nucleus, nutrient-rich cytoplasm), labelled as the
//                   narration names each part; then the sperm reaches the egg
//                   (fertilisation, normally in the oviduct): n + n = 2n.
// mode 'journey'    ovary → oviduct → uterus. The zygote divides by cleavage
//                   (1 → 2 → 4 → 8 cells) WHILE it travels, becomes a
//                   blastocyst (hollow ball, inner cell mass) and embeds in the
//                   endometrium: implantation, the make-or-break step.
// mode 'placenta'   mother's blood and the fetus's blood flow past each other
//                   either side of a thin barrier; O₂ and nutrients cross to
//                   the fetus, CO₂ and wastes cross back; the blood cells never
//                   cross (no direct mixing). Then hormone and embryo/fetus
//                   chips.

import {useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {CORAL, GlossDefs, Pill, ease, fadeAt, hash01, lerp, popAt} from './shared';

export type MammalProps = {
	mode?: 'gametes' | 'journey' | 'placenta';
	at?: Record<string, number>;
	delay?: number;
};

const ID = 'b12m5mam';
const W = 760, H = 530;

export const MammalDiagram = ({mode = 'gametes', at = {}, delay = 62}: MammalProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={`Mammalian reproduction: ${mode}`} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={{cell: '#f1e4d0', egg: '#f6e7cf', nuc: '#b9c7d8', mito: '#d98b5f', mat: CORAL, fet: theme.accent, o2: '#e0433a', nut: '#f0c93a', co2: '#8a93a0', blast: '#f0d9bd', endo: '#e7a9a0'}} />
			{mode === 'journey' ? <Journey frame={frame} fps={fps} at={at} accent={theme.accent} soft={theme.soft} /> : mode === 'placenta' ? <Placenta frame={frame} fps={fps} at={at} accent={theme.accent} soft={theme.soft} /> : <Gametes frame={frame} fps={fps} at={at} accent={theme.accent} soft={theme.soft} />}
		</svg>
	);
};

type Ctx = {frame: number; fps: number; at: Record<string, number>; accent: string; soft: string};

const Label = ({x, y, tx, ty, text, o, color = TOK.inkDim, anchor = 'start'}: {x: number; y: number; tx: number; ty: number; text: string; o: number; color?: string; anchor?: 'start' | 'end' | 'middle'}) => (
	<g opacity={o}>
		<line x1={x} y1={y} x2={tx} y2={ty} stroke={color} strokeWidth={1.8} />
		<circle cx={x} cy={y} r={3} fill={color} />
		<text x={tx + (anchor === 'start' ? 6 : anchor === 'end' ? -6 : 0)} y={ty + 5} textAnchor={anchor} fill={color} fontSize={15} fontWeight={800}>{text}</text>
	</g>
);

const Gametes = ({frame, fps, at, accent, soft}: Ctx) => {
	const tFl = at.flagellum ?? 30, tMi = at.mito ?? 100, tAc = at.acrosome ?? 170, tNu = at.nucleus ?? 240, tEgg = at.egg ?? 300, tNm = at.nonmotile ?? 380, tCy = at.cytoplasm ?? 460, tOv = at.oviduct ?? 600, tDip = at.diploid ?? 700;
	const swim = ease(frame, tOv, tOv + 70);
	const EGG = {x: 540, y: 250, r: 150};
	const sx = lerp(130, EGG.x - EGG.r - 8, swim), sy = lerp(240, EGG.y - 30, swim);
	const wig = (k: number) => Math.sin(frame / 4 + k) * 10;
	return (
		<g>
			<DioramaPlinth id={ID} cx={EGG.x} cy={EGG.y + 170} rx={180} />
			{/* egg */}
			<g opacity={fadeAt(frame, tEgg - 20)}>
				<circle cx={EGG.x} cy={EGG.y} r={EGG.r} fill={`url(#${ID}-g-egg)`} stroke="#c9b28b" strokeWidth={5} />
				{Array.from({length: 26}, (_, k) => {
					const a = hash01(k + 2) * Math.PI * 2, r = 30 + hash01(k + 9) * 100;
					return <circle key={k} cx={EGG.x + Math.cos(a) * r} cy={EGG.y + Math.sin(a) * r} r={4} fill="#e2c28e" opacity={0.8} />;
				})}
				<circle cx={EGG.x + 20} cy={EGG.y - 10} r={34} fill={`url(#${ID}-g-nuc)`} stroke="#8fa3bb" strokeWidth={2} />
				<text x={EGG.x + 20} y={EGG.y - 3} textAnchor="middle" fill={TOK.ink} fontSize={18} fontWeight={800}>n</text>
			</g>
			<Label x={EGG.x + 44} y={EGG.y - 26} tx={740} ty={EGG.y - 150} text="haploid nucleus" o={fadeAt(frame, tEgg + 20)} anchor="end" />
			<Label x={EGG.x - 60} y={EGG.y + 70} tx={EGG.x - 20} ty={EGG.y + 190} text="nutrient-rich cytoplasm" o={fadeAt(frame, tCy)} anchor="middle" />
			<g opacity={fadeAt(frame, tNm)}>
				<Pill x={EGG.x} y={EGG.y - EGG.r - 30} text="egg: large, doesn't move" color={CORAL} fill="#fff4f1" size={16} />
			</g>
			{/* sperm */}
			<g opacity={fadeAt(frame, 0)} transform={`translate(${sx},${sy})`}>
				<path d={`M 58 0 Q 90 ${wig(0)} 120 ${wig(1.2) * 0.7} T 190 ${wig(2.4) * 0.5}`} fill="none" stroke="#c9b28b" strokeWidth={5} strokeLinecap="round" />
				<rect x={26} y={-9} width={34} height={18} rx={9} fill={`url(#${ID}-g-cell)`} stroke="#c9b28b" strokeWidth={2} />
				{[0, 1, 2, 3].map((k) => <ellipse key={k} cx={32 + k * 7} cy={0} rx={4} ry={7} fill={`url(#${ID}-g-mito)`} />)}
				<ellipse cx={0} cy={0} rx={30} ry={22} fill={`url(#${ID}-g-cell)`} stroke="#c9b28b" strokeWidth={3} />
				<path d="M -30 0 A 30 22 0 0 1 -6 -21 L -6 21 A 30 22 0 0 1 -30 0 Z" fill={theme_acro()} opacity={0.85} />
				<ellipse cx={6} cy={0} rx={15} ry={13} fill={`url(#${ID}-g-nuc)`} />
				<text x={6} y={5} textAnchor="middle" fill={TOK.ink} fontSize={14} fontWeight={800}>n</text>
			</g>
			{swim < 0.2 && (
				<g opacity={1 - swim * 5}>
					<Label x={130 + 150} y={240} tx={210} ty={350} text="flagellum: swims" o={fadeAt(frame, tFl)} anchor="middle" />
					<Label x={130 + 42} y={240} tx={150} ty={140} text="mitochondria: energy" o={fadeAt(frame, tMi)} anchor="middle" />
					<Label x={130 - 22} y={236} tx={90} ty={180} text="acrosome: enzymes" o={fadeAt(frame, tAc)} anchor="middle" />
					<Label x={136} y={244} tx={110} ty={300} text="haploid nucleus" o={fadeAt(frame, tNu)} anchor="middle" />
					<Pill x={150} y={70} text="sperm: built to travel light" color={accent} fill={soft} size={16} opacity={fadeAt(frame, tFl)} />
				</g>
			)}
			<g opacity={fadeAt(frame, tOv + 40)}>
				<Pill x={200} y={400} text="fertilisation: normally in the oviduct" color={accent} fill={soft} size={15} />
			</g>
			<text x={200} y={452} textAnchor="middle" fill={TOK.amberInk} fontSize={20} fontWeight={800} opacity={fadeAt(frame, tDip)}>n + n = 2n: diploid restored</text>
		</g>
	);
};
const theme_acro = () => '#8e5bd6';

const Journey = ({frame, fps, at, accent, soft}: Ctx) => {
	const tZ = at.zygote ?? 10, tCl = at.cleavage ?? 150, tTr = at.travel ?? 250, tBl = at.blastocyst ?? 500, tIm = at.implant ?? 650, tEn = at.endometrium ?? 750, tKey = at.key ?? 900;
	// Path along the oviduct into the uterus (param 0..1).
	// Follows the oviduct's own curve: M 110 170 C 220 90, 330 150, 430 230 S 520 300, 560 300.
	const bez = (a: number[], b: number[], c: number[], d: number[], u: number) => {
		const v = 1 - u;
		return {x: v * v * v * a[0] + 3 * v * v * u * b[0] + 3 * v * u * u * c[0] + u * u * u * d[0], y: v * v * v * a[1] + 3 * v * v * u * b[1] + 3 * v * u * u * c[1] + u * u * u * d[1]};
	};
	const P = (t: number) => (t < 0.75 ? bez([110, 170], [220, 90], [330, 150], [430, 230], t / 0.75) : bez([430, 230], [530, 310], [520, 300], [560, 300], (t - 0.75) / 0.25));
	const travel = ease(frame, tZ + 20, tBl + 40);
	const embed = ease(frame, tIm, tIm + 60);
	const pos = P(travel);
	const ex = lerp(pos.x, 610, embed), ey = lerp(pos.y, 360, embed);
	// Cell count: 1 → 2 → 4 → 8 during travel (cleavage), then blastocyst.
	const stage = frame < tCl ? 0 : Math.min(3, Math.floor(((frame - tCl) / Math.max(1, tBl - tCl)) * 4));
	const isBlast = frame >= tBl;
	const cells = 2 ** stage;
	const cellPos = (k: number, n: number) => {
		if (n === 1) return [{x: 0, y: 0, r: 20}][k];
		const r = n === 2 ? 11 : n === 4 ? 9 : 7;
		const R = n === 2 ? 10 : n === 4 ? 10 : 12;
		const a = (k / n) * Math.PI * 2 + (n === 8 ? (k % 2) * 0.4 : 0.6);
		return {x: Math.cos(a) * R, y: Math.sin(a) * R * (n === 8 ? 0.9 : 1), r};
	};
	return (
		<g>
			{/* ovary, oviduct, uterus with endometrium */}
			<g opacity={fadeAt(frame, 0)}>
				<ellipse cx={80} cy={200} rx={44} ry={32} fill="#f0cfc0" stroke="#c99b8a" strokeWidth={3} />
				<text x={80} y={258} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={800}>ovary</text>
				<path d={`M 110 170 C 220 90, 330 150, 430 230 S 520 300, 560 300`} fill="none" stroke="#e8c3b6" strokeWidth={46} strokeLinecap="round" />
				<path d={`M 110 170 C 220 90, 330 150, 430 230 S 520 300, 560 300`} fill="none" stroke="#f7e3db" strokeWidth={30} strokeLinecap="round" />
				<text x={300} y={104} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={800}>oviduct</text>
				<path d="M 540 250 Q 700 230 720 330 Q 730 470 600 470 Q 500 470 520 360 Z" fill="#f7e3db" stroke="#d9a79a" strokeWidth={3} />
				<path d="M 560 300 Q 660 290 680 340 Q 690 430 610 440 Q 540 440 548 360 Z" fill={`url(#${ID}-g-endo)`} opacity={0.55} />
				<text x={650} y={500} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={800}>uterus</text>
			</g>
			<g opacity={fadeAt(frame, tEn)}>
				<text x={704} y={268} textAnchor="end" fill={CORAL} fontSize={15} fontWeight={800}>endometrium (lining)</text>
			</g>
			{/* the conceptus */}
			<g transform={`translate(${ex},${ey + idleBob(frame, 2, 1)})`}>
				{!isBlast ? (
					Array.from({length: cells}, (_, k) => {
						const c = cellPos(k, cells);
						return <circle key={`${cells}-${k}`} cx={c.x} cy={c.y} r={c.r} fill={`url(#${ID}-g-cell)`} stroke="#b9a07a" strokeWidth={1.5} />;
					})
				) : (
					<g transform={`scale(${popAt(frame, fps, tBl)})`}>
						<circle r={26} fill={`url(#${ID}-g-blast)`} stroke="#b9a07a" strokeWidth={2} />
						<circle r={19} fill="#fdf6ec" />
						<ellipse cx={-9} cy={-9} rx={12} ry={9} fill={`url(#${ID}-g-cell)`} stroke="#b9a07a" />
					</g>
				)}
			</g>
			{/* stage labels */}
			<g opacity={fadeAt(frame, tZ)}>
				<text x={170} y={60} fill={TOK.ink} fontSize={16} fontWeight={800}>{isBlast ? 'blastocyst: ready to implant' : stage === 0 ? 'zygote (fertilised in the oviduct)' : `cleavage: ${cells} cells, still travelling`}</text>
			</g>
			<g opacity={fadeAt(frame, tTr) * (1 - fadeAt(frame, tIm))}>
				<text x={330} y={330} textAnchor="middle" fill={accent} fontSize={16} fontWeight={800}>divides while it travels →</text>
			</g>
			<g opacity={fadeAt(frame, tIm + 40)}>
				<Pill x={420} y={410} text="implantation: embeds in the endometrium" color={TOK.amberInk} fill="#fff8ea" size={15} strokeWidth={2 + (frame > tKey ? idlePulse(frame) * 1.5 : 0)} />
			</g>
			<text x={380} y={H - 12} textAnchor="middle" fill={TOK.amberInk} fontSize={17} fontWeight={800} opacity={fadeAt(frame, tKey)}>no implantation, no pregnancy</text>
		</g>
	);
};

const Placenta = ({frame, fps, at, accent, soft}: Ctx) => {
	const tEx = at.exchange ?? 20, tIn = at.inward ?? 40, tOut = at.outward ?? 200, tNo = at.nomix ?? 400, tBar = at.barrier ?? 500, tHor = at.hormones ?? 700, tEmb = at.embryo ?? 900, tFet = at.fetus ?? 1000;
	const YM = 150, YF = 330, BAR = 240; // channel centres + barrier
	const flow = frame / 3;
	return (
		<g>
			{/* channels */}
			<g opacity={fadeAt(frame, tEx - 10)}>
				<rect x={30} y={YM - 60} width={700} height={120} rx={30} fill="#fbe3dc" stroke={CORAL} strokeWidth={2} />
				<rect x={30} y={YF - 60} width={700} height={120} rx={30} fill="#e3eef8" stroke={accent} strokeWidth={2} />
				<text x={46} y={YM - 70} fill={CORAL} fontSize={17} fontWeight={800}>mother's blood</text>
				<text x={46} y={YF + 84} fill={accent} fontSize={17} fontWeight={800}>fetus's blood</text>
				{/* blood cells flowing, never crossing */}
				{Array.from({length: 9}, (_, k) => (
					<g key={k}>
						<ellipse cx={((k * 84 + flow) % 700) + 30} cy={YM + (hash01(k) - 0.5) * 60} rx={13} ry={9} fill={`url(#${ID}-g-mat)`} />
						<ellipse cx={((k * 84 - flow + 7000) % 700) + 30} cy={YF + (hash01(k + 20) - 0.5) * 60} rx={13} ry={9} fill={`url(#${ID}-g-fet)`} />
					</g>
				))}
			</g>
			{/* barrier */}
			<g opacity={fadeAt(frame, tEx)}>
				<rect x={30} y={BAR - 30} width={700} height={60} fill="#f1ece3" />
				<rect x={30} y={BAR - 8} width={700} height={16} fill="#d8cfbf" stroke={frame > tBar ? TOK.amber : 'none'} strokeWidth={3} />
			</g>
			{/* crossing particles */}
			{Array.from({length: 6}, (_, k) => {
				const inward = k % 2 === 0;
				const t0 = (inward ? tIn : tOut) + Math.floor(k / 2) * 12;
				if (frame < t0) return null;
				const t = ((frame - t0) % 110) / 110;
				const x = 150 + k * 90;
				const y = inward ? lerp(YM + 20, YF - 20, t) : lerp(YF - 20, YM + 20, t);
				const name = inward ? (k % 4 === 0 ? 'o2' : 'nut') : 'co2';
				return <circle key={k} cx={x} cy={y} r={8} fill={`url(#${ID}-g-${name})`} stroke="rgba(0,0,0,0.25)" />;
			})}
			<g opacity={fadeAt(frame, tIn)}>
				<text x={704} y={BAR - 44} textAnchor="end" fill={TOK.ink} fontSize={15} fontWeight={800}>↓ O₂ + nutrients to the fetus</text>
			</g>
			<g opacity={fadeAt(frame, tOut)}>
				<text x={704} y={BAR + 56} textAnchor="end" fill={TOK.ink} fontSize={15} fontWeight={800}>↑ CO₂ + wastes to the mother</text>
			</g>
			<g opacity={fadeAt(frame, tNo)}>
				<Pill x={210} y={BAR} text="barrier: the bloods never mix" color={TOK.amberInk} fill="#fff8ea" size={15} strokeWidth={2 + idlePulse(frame) * 1.5} />
			</g>
			<g opacity={popAt(frame, fps, tHor)}>
				<Pill x={380} y={440} text="the placenta also releases hormones" color={accent} fill={soft} size={15} />
			</g>
			<g opacity={popAt(frame, fps, tEmb)}>
				<Pill x={220} y={488} text="embryo: early, organs forming" color={TOK.inkDim} size={15} />
			</g>
			<g opacity={popAt(frame, fps, tFet)}>
				<Pill x={560} y={488} text="fetus: later, growth" color={TOK.inkDim} size={15} />
			</g>
		</g>
	);
};
