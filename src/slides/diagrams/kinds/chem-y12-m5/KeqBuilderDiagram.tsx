// KeqBuilderDiagram (kind: chem12m5KeqBuilder) — build an equilibrium
// expression from the balanced equation.
//
// The equation stands as a row of species tiles, each on its own small stone
// plinth. Product formulas fly down into the numerator, reactant formulas into
// the denominator, and each coefficient flies after its formula to become the
// power on that bracket. Pure solids and liquids (state s or l) drop into a
// "left out" tray instead. Optional extras, all config-driven:
//   rules   — the inclusion rule as two panels (stay in / left out)
//   tray    — a side tray with items (e.g. solvent water) dropping in
//   subst   — values drop into the brackets, powers are applied to each
//             concentration separately, top and bottom are worked out, then
//             divided (every number computed here from the values)
//   acids   — weak vs strong acid on two plinths (HA intact vs split)
//   notes   — note lines on their beats
//
// Beats are frames after `delay`.

import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {AtomDefs, Ball, clamp, eramp, ramp, textW} from './shared';
import {Frac, P, Panel, RED, Rich, Strike, VIOLET, fracW, partBox, partsW, sig, sigMid, type Part} from './kbKit';

export type KbSpecies = {f: string; state: string; coef?: number; side: 'r' | 'p'; val?: string};
export type KeqBuilderProps = {
	delay?: number;
	species?: KbSpecies[];
	/** Constant's symbol in compact form: 'K_{eq}', 'K_{a}'. */
	k?: string;
	exprX?: number;
	exprY?: number;
	productsAt?: number;
	reactantsAt?: number;
	powersAt?: number;
	/** Colour the coefficients / powers amber (the key idea on the rules scene). */
	amberPowers?: boolean;
	rules?: {at: number; stayAt?: number; y?: number; stay?: string[]; out?: string[]};
	tray?: {at: number; x?: number; y?: number; w?: number; h?: number; items?: {f: string; state: string; reason: string; at: number}[]};
	pulses?: {at: number; side: 'p' | 'r'}[];
	subst?: {valuesAt: number; dropAt: number; trapAt?: number; squareAt: number; bottomAt: number; divideAt: number; unitsAt?: number; sig?: number};
	acids?: {at: number; notAt?: number; strongAt?: number; weakAt?: number; notText?: string};
	notes?: {at: number; text: string; y?: number; amber?: boolean}[];
};

const ID = 'c12m5kb';
const W = 760;
const TS = 42; // tile formula size
const TILE_Y = 12;
const TILE_H = 88;
const PLY = TILE_Y + TILE_H + 6;
const TAG_Y = 190;
const ES = 52; // expression size

const DEFAULT_SPECIES: KbSpecies[] = [
	{f: 'N₂', state: 'g', coef: 1, side: 'r'},
	{f: 'H₂', state: 'g', coef: 3, side: 'r'},
	{f: 'NH₃', state: 'g', coef: 2, side: 'p'},
];

export const KeqBuilderDiagram = ({
	delay = 62,
	species = DEFAULT_SPECIES,
	k = 'K_{eq}',
	exprX = W / 2,
	exprY = 246,
	productsAt = 40,
	reactantsAt = 80,
	powersAt = 130,
	amberPowers = false,
	rules,
	tray,
	pulses = [],
	subst,
	acids,
	notes = [],
}: KeqBuilderProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const sideCol = (s: 'r' | 'p') => (s === 'r' ? theme.accent : VIOLET);
	const powCol = amberPowers ? TOK.amberInk : TOK.ink;

	// ── Tile row layout ──
	const coefStr = (sp: KbSpecies) => ((sp.coef ?? 1) > 1 ? String(sp.coef) : '');
	const tiles = species.map((sp) => {
		const cw = textW(coefStr(sp), TS);
		const fw = textW(sp.f, TS);
		const w = Math.max(cw + fw, textW(`(${sp.state})`, 20) + 30) + 40;
		return {sp, cw, fw, w};
	});
	const firstP = species.findIndex((s) => s.side === 'p');
	const sepW = (i: number) => (i === firstP ? 74 : 50);
	const rowW = tiles.reduce((a, t, i) => a + t.w + (i > 0 ? sepW(i) : 0), 0);
	let cursor = W / 2 - rowW / 2;
	const tilePos = tiles.map((t, i) => {
		if (i > 0) cursor += sepW(i);
		const x0 = cursor;
		cursor += t.w;
		const cx = x0 + t.w / 2;
		const textLeft = cx - (t.cw + t.fw) / 2;
		return {x0, cx, coefX: textLeft, fX: textLeft + t.cw, base: TILE_Y + 52};
	});

	// ── Expression layout ──
	const excluded = (sp: KbSpecies) => sp.state === 's' || sp.state === 'l';
	const bw = textW('[', ES);
	const itemW = (sp: KbSpecies) => 2 * bw + textW(sp.f, ES) + ((sp.coef ?? 1) > 1 ? textW(String(sp.coef), ES * 0.6) + 3 : 0);
	const numIdx = species.map((s, i) => i).filter((i) => species[i].side === 'p' && !excluded(species[i]));
	const denIdx = species.map((s, i) => i).filter((i) => species[i].side === 'r' && !excluded(species[i]));
	const rowWidth = (idx: number[]) => idx.reduce((a, i) => a + itemW(species[i]), 0);
	const numW = rowWidth(numIdx);
	const denW = rowWidth(denIdx);
	const fW = Math.max(numW, denW) + ES * 0.5;
	const labelParts = P(`${k} = `);
	const labelW = partsW(labelParts, ES);
	const ex0 = exprX - (labelW + fW) / 2;
	const fracCX = ex0 + labelW + fW / 2;
	const numBase = exprY - ES * 0.36;
	const denBase = exprY + ES * 1.02;
	const itemPos: Record<number, {x: number; base: number}> = {};
	const placeRow = (idx: number[], width: number, base: number) => {
		let x = fracCX - width / 2;
		idx.forEach((i) => {
			itemPos[i] = {x, base};
			x += itemW(species[i]);
		});
	};
	placeRow(numIdx, numW, numBase);
	placeRow(denIdx, denW, denBase);

	// ── Tray (side) ──
	const trayBox = tray ? {x: tray.x ?? 486, y: tray.y ?? 172, w: tray.w ?? 250, h: tray.h ?? 132} : undefined;
	const trayItems = [
		...species.filter(excluded).map((sp) => ({f: sp.f, state: sp.state, reason: sp.state === 's' ? 'pure solid' : 'pure liquid', at: reactantsAt + 20})),
		...(tray?.items ?? []),
	];

	// Flight timing per species.
	const flyStart = (i: number) => {
		const sp = species[i];
		const order = species.filter((s) => s.side === sp.side).indexOf(sp);
		return (sp.side === 'p' ? productsAt : reactantsAt) + order * 12;
	};
	const FLY = 26;

	const intro = (j: number) => spring({frame: frame - 2 - j * 4, fps, config: {damping: 14, stiffness: 200, mass: 0.6}});

	// ── Pulses behind numerator / denominator ──
	const pulseAmt = (side: 'p' | 'r') =>
		pulses.filter((p) => p.side === side).reduce((a, p) => Math.max(a, interpolate(frame, [p.at, p.at + 12, p.at + 70, p.at + 95], [0, 1, 1, 0], clamp)), 0);

	// ── Substitution numbers (all computed) ──
	const nsig = subst?.sig ?? 3;
	const num = (s?: string) => Number(s ?? '0');
	const pw = (sp: KbSpecies) => num(sp.val) ** (sp.coef ?? 1);
	const topVal = numIdx.reduce((a, i) => a * pw(species[i]), 1);
	const denFactors = denIdx.map((i) => pw(species[i]));
	const botVal = denFactors.reduce((a, v) => a * v, 1);
	const answer = topVal / botVal;

	const valParts = (i: number, color?: string): Part[] => {
		const sp = species[i];
		const c = sp.coef ?? 1;
		return c > 1 ? [{t: `(${sp.val})`}, {t: String(c), pow: true, c: color}] : [{t: sp.val ?? ''}];
	};
	const joinX = (lists: Part[][]): Part[] => lists.flatMap((l, j) => (j === 0 ? l : [{t: ' × '}, ...l]));

	const SS = 30;
	const SY = 394;
	const f1Num = joinX(numIdx.map((i) => valParts(i)));
	const f1Den = joinX(denIdx.map((i) => valParts(i)));
	const topStr = numIdx.length === 1 && (species[numIdx[0]].coef ?? 1) === 1 ? species[numIdx[0]].val ?? '' : sigMid(topVal, nsig);
	const f2Num: Part[] = [{t: topStr}];
	const f2DenA = joinX(denIdx.map((i) => [{t: (species[i].coef ?? 1) > 1 ? sigMid(pw(species[i]), nsig) : species[i].val ?? ''}]));
	const f2DenB: Part[] = [{t: sigMid(botVal, nsig)}];
	const eqW = textW(' = ', SS);
	const w1 = fracW(f1Num, f1Den, SS);
	const w2 = Math.max(fracW(f2Num, f2DenA, SS), fracW(f2Num, f2DenB, SS));
	const ansStr = sig(answer, nsig);
	const ansW = textW(ansStr, 40);
	const rowTot = eqW + w1 + eqW + w2 + eqW + ansW;
	const r0 = W / 2 - rowTot / 2;
	const f1CX = r0 + eqW + w1 / 2;
	const f2CX = r0 + eqW + w1 + eqW + w2 / 2;
	const ansX = r0 + eqW * 3 + w1 + w2;

	// Where each value lands inside fraction 1 (left edge of its text).
	const valLanding = (i: number) => {
		const inNum = numIdx.includes(i);
		const idx = inNum ? numIdx : denIdx;
		const parts = inNum ? f1Num : f1Den;
		const rowW = partsW(parts, SS);
		// find the part index where species i's value begins
		let pi = 0;
		for (const j of idx) {
			if (j === i) break;
			pi += valParts(j).length + 1;
		}
		const box = partBox(parts, SS, pi);
		const x = (inNum ? f1CX : f1CX) - rowW / 2 + box.x;
		return {x, base: inNum ? SY - SS * 0.36 : SY + SS * 1.02};
	};

	// ── Acids panel ──
	const acidN = 6;
	const acidPl = [{cx: 190, strong: false}, {cx: 570, strong: true}];
	const ACY = 440;
	const molPos = (j: number) => {
		const row = j < 3 ? 0 : 1;
		const col = j % 3;
		return {dx: (col - 1) * 64 + (row ? 16 : -16), dy: row ? 11 : -14};
	};

	const aria = `${species.map((s) => `${(s.coef ?? 1) > 1 ? s.coef : ''}${s.f}(${s.state})`).join(' ')}: products go on top, reactants on the bottom, each raised to its coefficient`;
	const els = ['H', 'B'];

	return (
		<svg viewBox={`0 0 ${W} 530`} role="img" aria-label={aria} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<AtomDefs id={ID} elements={els} />

			{/* ── Equation tiles on plinths ── */}
			{tiles.map((t, i) => {
				const p = tilePos[i];
				const sp = t.sp;
				const s = Math.max(0, intro(i));
				const bob = frame > 40 ? idleBob(frame, i, 0.8) : 0;
				const col = sideCol(sp.side);
				const tickIn = rules?.stayAt !== undefined && !excluded(sp) ? ramp(frame, rules.stayAt + i * 6, 12) : 0;
				return (
					<g key={i} opacity={Math.min(1, s * 1.2)}>
						<DioramaPlinth id={`${ID}t${i}`} cx={p.cx} cy={PLY} rx={t.w / 2 + 12} />
						<g transform={`translate(0 ${(1 - s) * -30 + bob})`}>
							<rect x={p.x0} y={TILE_Y} width={t.w} height={TILE_H} rx={12} fill="#ffffff" stroke={col} strokeWidth={2.5} />
							<rect x={p.x0} y={TILE_Y} width={t.w} height={8} rx={4} fill={col} opacity={0.85} />
							<text x={p.coefX} y={p.base} fill={amberPowers ? TOK.amberInk : TOK.ink} fontSize={TS} fontWeight={800}>{coefStr(sp)}</text>
							<text x={p.fX} y={p.base} fill={col} fontSize={TS} fontWeight={800}>{sp.f}</text>
							<text x={p.cx - (tickIn > 0 ? 11 : 0)} y={TILE_Y + 78} textAnchor="middle" fill={TOK.inkDim} fontSize={20} fontWeight={700}>({sp.state})</text>
							{tickIn > 0 && (
								<text x={p.cx + textW(`(${sp.state})`, 20) / 2 + 3} y={TILE_Y + 78} textAnchor="middle" fill={theme.accent} fontSize={21} fontWeight={900} opacity={tickIn}>✓</text>
							)}
						</g>
					</g>
				);
			})}
			{/* separators */}
			{tiles.map((t, i) =>
				i === 0 ? null : (
					<text key={`s${i}`} x={tilePos[i].x0 - sepW(i) / 2} y={TILE_Y + 60} textAnchor="middle" fill={TOK.inkDim} fontSize={i === firstP ? 46 : 40} fontWeight={800} opacity={ramp(frame, 6)}>
						{i === firstP ? '⇌' : '+'}
					</text>
				),
			)}

			{/* value tags under each tile (substitution) */}
			{subst &&
				species.map((sp, i) =>
					sp.val && !excluded(sp) ? (
						<g key={`v${i}`} opacity={ramp(frame, subst.valuesAt + i * 8, 12)}>
							<rect x={tilePos[i].cx - 50} y={TAG_Y - 25} width={100} height={36} rx={18} fill="#ffffff" stroke={sideCol(sp.side)} strokeWidth={2.5} />
							<text x={tilePos[i].cx} y={TAG_Y} textAnchor="middle" fill={TOK.ink} fontSize={22} fontWeight={800}>{sp.val}</text>
						</g>
					) : null,
				)}

			{/* ── Expression ── */}
			<g>
				{(['p', 'r'] as const).map((side) => {
					const a = pulseAmt(side);
					if (a <= 0) return null;
					const w = side === 'p' ? numW : denW;
					const y = side === 'p' ? numBase - ES * 0.95 : denBase - ES * 0.95;
					return <rect key={side} x={fracCX - w / 2 - 10} y={y} width={w + 20} height={ES * 1.35} rx={10} fill={sideCol(side)} opacity={0.14 * a} stroke={sideCol(side)} strokeOpacity={0.5 * a} strokeWidth={2} />;
				})}
				<Rich x={ex0} y={exprY + ES * 0.34} size={ES} parts={labelParts} anchor="start" opacity={ramp(frame, productsAt - 14, 12)} />
				<line x1={fracCX - fW / 2} y1={exprY} x2={fracCX + fW / 2} y2={exprY} stroke={TOK.ink} strokeWidth={3} strokeLinecap="round" opacity={ramp(frame, productsAt - 10, 12)} />
				{species.map((sp, i) => {
					if (excluded(sp)) return null;
					const dst = itemPos[i];
					const s0 = flyStart(i);
					const u = eramp(frame, s0, FLY);
					if (u <= 0) return null;
					const src = tilePos[i];
					const x = src.fX + (dst.x + bw - src.fX) * u;
					const y = src.base + (dst.base - src.base) * u - Math.sin(Math.PI * u) * (sp.side === 'p' ? 36 : 14);
					const size = TS + (ES - TS) * u;
					const land = ramp(frame, s0 + FLY - 4, 8);
					const col = sideCol(sp.side);
					const fwid = textW(sp.f, ES);
					// power flight
					const c = sp.coef ?? 1;
					const pu = c > 1 ? eramp(frame, powersAt + (sp.side === 'p' ? 0 : 14) + species.filter((q, j) => j < i && (q.coef ?? 1) > 1 && q.side === sp.side).length * 12, 30) : 0;
					const pDstX = dst.x + 2 * bw + fwid + 2;
					const pDstY = dst.base - ES * 0.42;
					const px = src.coefX + (pDstX - src.coefX) * pu;
					const py = src.base + (pDstY - src.base) * pu - Math.sin(Math.PI * pu) * 50;
					const psize = TS + (ES * 0.6 - TS) * pu;
					return (
						<g key={`e${i}`}>
							<text x={dst.x} y={dst.base} fill={col} fontSize={ES} fontWeight={700} opacity={land}>[</text>
							<text x={x} y={y} fill={col} fontSize={size} fontWeight={800}>{sp.f}</text>
							<text x={dst.x + bw + fwid} y={dst.base} fill={col} fontSize={ES} fontWeight={700} opacity={land}>]</text>
							{pu > 0 && (
								<text x={px} y={py} fill={powCol} fontSize={psize} fontWeight={900}>{c}</text>
							)}
						</g>
					);
				})}
			</g>

			{/* ── Side tray ── */}
			{trayBox && (
				<g opacity={ramp(frame, tray!.at, 14)}>
					<Panel x={trayBox.x} y={trayBox.y} w={trayBox.w} h={trayBox.h} title="LEFT OUT" dashed stroke="#a9a59d" fill="#f1efeb" />
					{trayItems.map((it, j) => {
						const d = eramp(frame, it.at, 22);
						const iy = trayBox.y + 74 + j * 56;
						return (
							<g key={j} opacity={Math.min(1, d * 2)} transform={`translate(0 ${(1 - d) * -80})`}>
								<text x={trayBox.x + 20} y={iy} fill={TOK.inkDim} fontSize={32} fontWeight={800}>
									{it.f}
									<tspan fontSize={21} fontWeight={700}>({it.state})</tspan>
								</text>
								<text x={trayBox.x + 20} y={iy + 32} fill={TOK.inkDim} fontSize={21} fontWeight={700}>{it.reason}</text>
							</g>
						);
					})}
				</g>
			)}

			{/* ── Rules panels ── */}
			{rules && (() => {
				const ry = rules.y ?? 322;
				const stay = rules.stay ?? ['(g)  gases', '(aq)  dissolved species'];
				const out = rules.out ?? ['(s)  pure solids', '(l)  pure liquids,', '      incl. water as solvent'];
				const h = 46 + Math.max(stay.length, out.length) * 32;
				return (
					<g>
						<Panel x={392} y={ry} w={330} h={h} title="LEFT OUT OF K" dashed stroke="#a9a59d" fill="#f1efeb" opacity={ramp(frame, rules.at, 14)}>
							{out.map((l, j) => (
								<text key={j} x={410} y={ry + 64 + j * 32} fill={TOK.ink} fontSize={23} fontWeight={700} opacity={ramp(frame, rules.at + 8 + j * 10, 12)} style={{whiteSpace: 'pre'}}>{l}</text>
							))}
						</Panel>
						<Panel x={38} y={ry} w={330} h={h} title="STAYS IN ✓" stroke={theme.accent} titleColor={theme.accent} opacity={ramp(frame, rules.stayAt ?? rules.at, 14)}>
							{stay.map((l, j) => (
								<text key={j} x={56} y={ry + 64 + j * 32} fill={TOK.ink} fontSize={23} fontWeight={700} style={{whiteSpace: 'pre'}}>{l}</text>
							))}
						</Panel>
					</g>
				);
			})()}

			{/* ── Substitution ── */}
			{subst && (() => {
				const d0 = subst.dropAt;
				const f1In = ramp(frame, d0 - 6, 10);
				const landed = (i: number) => ramp(frame, d0 + i * 8 + 22, 8);
				const f2NumIn = ramp(frame, subst.squareAt, 14);
				const f2DenAIn = ramp(frame, subst.bottomAt, 14) * (1 - ramp(frame, subst.bottomAt + 40, 12));
				const f2DenBIn = ramp(frame, subst.bottomAt + 44, 12);
				const ansIn = ramp(frame, subst.divideAt, 14);
				// fraction 1 drawn statically once values land; values fly from the tags
				const staticNum = f1Num.map((p) => ({...p, o: 1}));
				return (
					<g>
						<text x={r0} y={SY + SS * 0.34} fill={TOK.ink} fontSize={SS} fontWeight={800} opacity={f1In}> =</text>
						<g opacity={f1In}>
							<line x1={f1CX - w1 / 2} y1={SY} x2={f1CX + w1 / 2} y2={SY} stroke={TOK.ink} strokeWidth={2.5} strokeLinecap="round" />
						</g>
						{/* static fraction-1 pieces appear as each value lands (whole run once all landed) */}
						{(() => {
							const all = Math.min(...species.map((sp, i) => (sp.val && !excluded(sp) ? landed(i) : 1)));
							return (
								<g opacity={all}>
									<Rich x={f1CX} y={SY - SS * 0.36} size={SS} parts={staticNum} />
									<Rich x={f1CX} y={SY + SS * 1.02} size={SS} parts={f1Den} />
								</g>
							);
						})()}
						{species.map((sp, i) => {
							if (!sp.val || excluded(sp)) return null;
							const u = eramp(frame, d0 + i * 8, 24);
							const all = Math.min(...species.map((q, j) => (q.val && !excluded(q) ? landed(j) : 1)));
							if (u <= 0 || all >= 1) return null;
							const dst = valLanding(i);
							const lead = (sp.coef ?? 1) > 1 ? textW('(', SS) : 0;
							const sx = tilePos[i].cx - textW(sp.val, 22) / 2;
							const x = sx + (dst.x + lead - sx) * u;
							const y = TAG_Y + (dst.base - TAG_Y) * u;
							return (
								<text key={`fly${i}`} x={x} y={y} fill={TOK.ink} fontSize={22 + (SS - 22) * u} fontWeight={800}>{sp.val}</text>
							);
						})}
						<text x={r0 + eqW + w1} y={SY + SS * 0.34} fill={TOK.ink} fontSize={SS} fontWeight={800} opacity={f2NumIn}> =</text>
						<g>
							<Rich x={f2CX} y={SY - SS * 0.36} size={SS} parts={f2Num} opacity={f2NumIn} />
							<line x1={f2CX - w2 / 2} y1={SY} x2={f2CX + w2 / 2} y2={SY} stroke={TOK.ink} strokeWidth={2.5} strokeLinecap="round" opacity={f2NumIn} />
							<Rich x={f2CX} y={SY + SS * 1.02} size={SS} parts={f2DenA} opacity={f2DenAIn} />
							<Rich x={f2CX} y={SY + SS * 1.02} size={SS} parts={f2DenB} opacity={f2DenBIn} />
						</g>
						<g opacity={ansIn}>
							<text x={ansX - eqW} y={SY + SS * 0.34} fill={TOK.ink} fontSize={SS} fontWeight={800}> =</text>
							<rect x={ansX - 10} y={SY - 32} width={ansW + 20} height={56} rx={12} fill="#fff7e8" stroke={TOK.amber} strokeWidth={2 + idlePulse(frame) * 1.5} />
							<text x={ansX} y={SY + 40 * 0.34} fill={TOK.amberInk} fontSize={40} fontWeight={900}>{ansStr}</text>
						</g>
						{subst.unitsAt !== undefined && (
							<g opacity={ramp(frame, subst.unitsAt, 14)}>
								<text x={ansX + ansW / 2} y={SY + 52} textAnchor="middle" fill={TOK.inkDim} fontSize={20} fontWeight={800}>no units</text>
							</g>
						)}
						{subst.trapAt !== undefined && (() => {
							const t0 = subst.trapAt;
							const coefMax = Math.max(...denIdx.map((i) => species[i].coef ?? 1));
							const wrong: Part[] = [{t: `(${denIdx.map((i) => species[i].val).join(' × ')})`}, {t: String(coefMax), pow: true}];
							const right: Part[] = f1Den;
							const ty = 474;
							const wW = partsW(wrong, 26);
							const rW = partsW(right, 26);
							const lx = 200, rx = 540;
							return (
								<g>
									<g opacity={ramp(frame, t0, 12)}>
										<text x={lx - wW / 2 - 32} y={ty + 9} fill={RED} fontSize={28} fontWeight={900}>✗</text>
										<Rich x={lx} y={ty + 9} size={26} parts={wrong} fill={TOK.inkDim} />
										<Strike x1={lx - wW / 2} x2={lx + wW / 2} y={ty} p={eramp(frame, t0 + 20, 16)} />
										<text x={lx} y={ty + 44} textAnchor="middle" fill={TOK.inkDim} fontSize={19} fontWeight={700}>power on the whole bracket</text>
									</g>
									<g opacity={ramp(frame, t0 + 40, 12)}>
										<text x={rx - rW / 2 - 32} y={ty + 9} fill={theme.accent} fontSize={28} fontWeight={900}>✓</text>
										<Rich x={rx} y={ty + 9} size={26} parts={right} />
										<text x={rx} y={ty + 44} textAnchor="middle" fill={theme.accent} fontSize={19} fontWeight={800}>power on each one separately</text>
									</g>
								</g>
							);
						})()}
					</g>
				);
			})()}

			{/* ── Weak vs strong acid ── */}
			{acids && (() => {
				const inA = ramp(frame, acids.at, 16);
				const split = eramp(frame, acids.at + 30, 40);
				return (
					<g opacity={inA}>
						{acidPl.map((pl, k) => {
							const tagAt = pl.strong ? acids.strongAt : acids.weakAt;
							const mols = Array.from({length: acidN}, (_, j) => {
								const m = molPos(j);
								const doSplit = pl.strong ? true : j === 4;
								return {j, x: pl.cx + m.dx, y: ACY + m.dy, s: doSplit ? split : 0};
							}).sort((a, b) => a.y - b.y);
							return (
								<g key={k}>
									<text x={pl.cx} y={ACY - 86} textAnchor="middle" fill={TOK.ink} fontSize={23} fontWeight={800}>
										{pl.strong ? 'strong acid' : 'weak acid'}
									</text>
									<DioramaPlinth id={`${ID}a${k}`} cx={pl.cx} cy={ACY} rx={112}>
										{mols.map((m) => {
											const b1 = idleBob(frame, m.j + k * 10, 1.4);
											const b2 = idleBob(frame, m.j + k * 10 + 5, 1.8 * m.s);
											const hx = m.x + 15 + (32 - 15) * m.s;
											const hy = m.y - 9 + (-4 + 9) * m.s;
											return (
												<g key={m.j}>
													<Ball id={ID} el="B" x={m.x} y={m.y + b1} r={16} label={m.s > 0.5 ? '−' : undefined} labelSize={22} shadow />
													<Ball id={ID} el="H" x={hx} y={hy + b1 + b2} r={10} label={m.s > 0.5 ? '+' : undefined} labelColor={TOK.ink} labelSize={15} />
												</g>
											);
										})}
									</DioramaPlinth>
									<text x={pl.cx} y={ACY - 60} textAnchor="middle" fill={TOK.inkDim} fontSize={19} fontWeight={700} opacity={ramp(frame, acids.at + 70, 14)}>
										{pl.strong ? 'fully split into H⁺ + A⁻' : 'mostly HA, still intact'}
									</text>
									{tagAt !== undefined && (
										<g opacity={ramp(frame, tagAt, 14)}>
											<Rich x={pl.cx} y={ACY + 82} size={23} parts={P(pl.strong ? 'K_{a} ≫ 1' : 'K_{a} ≪ 1', pl.strong ? VIOLET : theme.accent)} />
										</g>
									)}
								</g>
							);
						})}
						{acids.notAt !== undefined && (() => {
							const txt = acids.notText ?? 'Ka is not pH, and not [H⁺]';
							const parts = P(txt.replace(/^Ka/, 'K_{a}'), TOK.amberInk);
							const w = partsW(parts, 20) + 30;
							return (
								<g opacity={ramp(frame, acids.notAt, 14)}>
									<rect x={W / 2 - w / 2} y={ACY - 70} width={w} height={40} rx={20} fill="#fff7e8" stroke={TOK.amber} strokeWidth={2 + idlePulse(frame) * 1.2} />
									<Rich x={W / 2} y={ACY - 43} size={20} parts={parts} />
								</g>
							);
						})()}
					</g>
				);
			})()}

			{/* ── Notes ── */}
			{notes.map((n, j) => (
				<text key={j} x={W / 2} y={n.y ?? 488 + j * 32} textAnchor="middle" fill={n.amber ? TOK.amberInk : TOK.inkDim} fontSize={21} fontWeight={800} opacity={ramp(frame, n.at, 14)}>
					{n.text}
				</text>
			))}
		</svg>
	);
};
