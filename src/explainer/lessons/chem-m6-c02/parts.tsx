// Drawing parts for M6 C02 (naming acids and bases, acid reaction patterns). Reuses the C01 molecules, proton token and
// hop, equation helpers, chips and question card; new here: ion tiles (positive amber, negative violet), the salt
// builder with charge tallies, pattern cards and the activity series bar.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {CAT, CAT_INK} from '../chem-m5-c11/common';
import {CodeThermo} from '../chem-m5-c11/parts';
import {ACID_INK, AN, AN_INK, Arrow, BASE_INK, Fade, INK, INK_SOFT, Note, Sx, TEAL, mw, smooth, vis} from '../chem-m6-c01/parts';

export * from '../chem-m6-c01/parts';
export {CAT, CAT_INK, CodeThermo};
export const CAT_SOFT = '#fbebcb', AN_SOFT = '#ece2f7';
export const CO2C = '#8fb59a', CO2_INK = '#4f7d5c';
export const ELEC = '#e2c13b';

/** An ion on a pill tile: positive amber, negative violet. */
export const IonTile: React.FC<{x: number; y: number; t: string; kind: '+' | '-'; size?: number; at: number; out?: number; anchor?: 'start' | 'middle'; dx?: number; dy?: number}> = ({x, y, t, kind, size = 40, at, out, anchor = 'middle', dx = 0, dy = 0}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 12);
	if (o <= 0.01) return null;
	const w = mw(t, size, false, 800) + size * 0.9, h = size * 1.45;
	const x0 = (anchor === 'middle' ? x - w / 2 : x) + dx;
	const pop = 0.85 + 0.15 * smooth(prog(f, at, 12));
	return (
		<g opacity={o} transform={`translate(${x0 + w / 2},${y + dy}) scale(${pop}) translate(${-(x0 + w / 2)},${-(y + dy)})`}>
			<rect x={x0} y={y + dy - h * 0.66} width={w} height={h} rx={h / 2} fill={kind === '+' ? CAT_SOFT : AN_SOFT} stroke={kind === '+' ? CAT : AN} strokeWidth={3.5} />
			<Sx x={x0 + w / 2} y={y + dy + size * 0.06} text={t} size={size} color={kind === '+' ? CAT_INK : AN_INK} anchor="middle" weight={800} at={-1000} />
		</g>
	);
};
export const ionTileW = (t: string, size = 40) => mw(t, size, false, 800) + size * 0.9;

export type SaltSpec = {cat: string; an: string; nCat: number; nAn: number; formula: string; tally?: string; name?: string};
/** The salt builder: an amber slot for the positive ion (from the base or metal), a violet slot for the negative ion
 *  (from the acid). Tiles drop in on their cues, then the salt formula and its charge tally write. */
export const SaltBuilder: React.FC<{x: number; y: number; at: number; out?: number; spec: SaltSpec; catAt: number; anAt: number; resAt: number; tallyAt?: number; labels?: boolean; s?: number; size?: number; nameAt?: number; slotW?: number}> = ({x, y, at, out, spec, catAt, anAt, resAt, tallyAt, labels = true, s = 1, size = 40, nameAt, slotW = 300}) => {
	const f = useCurrentFrame();
	const W = slotW, Hs = 210, gap = 40;
	const lh = size * 1.6;
	const slot = (sx: number, n: number, t: string, kind: '+' | '-', a: number) => {
		const y0 = y + Hs / 2 - ((n - 1) * lh) / 2 + size * 0.3;
		return Array.from({length: n}, (_, i) => <IonTile key={i} x={sx + W / 2} y={y0 + i * lh} t={t} kind={kind} size={size} at={a + i * 6} dy={(1 - smooth(prog(f, a + i * 6, 14))) * -40} />);
	};
	const rx = x + 2 * W + gap + 60;
	return (
		<Fade at={at} out={out}>
			<g transform={`translate(${x},${y}) scale(${s}) translate(${-x},${-y})`}>
				<rect x={x} y={y} width={W} height={Hs} rx={20} fill="#fffaf0" stroke={CAT} strokeWidth={3.5} strokeDasharray="12 8" />
				<rect x={x + W + gap} y={y} width={W} height={Hs} rx={20} fill="#faf6fd" stroke={AN} strokeWidth={3.5} strokeDasharray="12 8" />
				{labels ? <>
					<Sx x={x + 14} y={y - 16} text="positive ion" size={30} color={CAT_INK} hand at={-1000} />
					<Sx x={x + W + gap + 14} y={y - 16} text="negative ion" size={30} color={AN_INK} hand at={-1000} />
				</> : null}
				{slot(x, spec.nCat, spec.cat, '+', catAt)}
				{slot(x + W + gap, spec.nAn, spec.an, '-', anAt)}
				<Arrow x1={x + 2 * W + gap + 10} y1={y + Hs / 2} x2={rx - 6} y2={y + Hs / 2} at={resAt - 8} color={INK} width={5} />
				<Sx x={rx + 6} y={y + Hs / 2 + size * 0.45} text={spec.formula} size={size * 1.35} color={INK} weight={800} at={resAt} />
				{spec.name ? <Note x={rx + 6} y={y + Hs / 2 + size * 1.5} text={spec.name} size={34} color={INK_SOFT} at={nameAt ?? resAt + 6} /> : null}
				{spec.tally ? <Sx x={rx + 6} y={y + Hs / 2 + size * (spec.name ? 2.6 : 1.6)} text={spec.tally} size={32} color={TEAL} weight={700} at={tallyAt ?? resAt + 14} /> : null}
			</g>
		</Fade>
	);
};

/** A pattern card: "acid + X → products"; products can light in turn. */
export const PatternCard: React.FC<{x: number; y: number; n: number; partner: string; products: string[]; at: number; out?: number; s?: number; lit?: number; dim?: number}> = ({x, y, n, partner, products, at, out, s = 1, lit, dim = 0}) => {
	const f = useCurrentFrame();
	const g = lit === undefined ? 0 : Math.max(0, Math.sin(Math.min(1, Math.max(0, (f - lit) / 50)) * Math.PI));
	const text = `acid + ${partner} → ${products.join(' + ')}`;
	const size = 38;
	const w = mw(text, size, true, 700) + 70 + 150;
	return (
		<Fade at={at} out={out}>
			<g transform={`translate(${x},${y}) scale(${s}) translate(${-x},${-y})`} opacity={1 - 0.55 * dim}>
				{g > 0.01 ? <rect x={x - 10} y={y - 10} width={w + 20} height={96} rx={26} fill="#f6d77a" opacity={0.6 * g} /> : null}
				<rect x={x} y={y} width={w} height={76} rx={20} fill="#fffdf8" stroke={TEAL} strokeWidth={3.5} />
				<rect x={x} y={y} width={130} height={76} rx={20} fill={TEAL} />
				<Sx x={x + 65} y={y + 50} text={`pattern ${n}`} size={28} color="#fffdf8" anchor="middle" hand at={-1000} />
				<Sx x={x + 150} y={y + 51} text={text} size={size} color={INK} hand at={-1000} />
			</g>
		</Fade>
	);
};
export const patternW = (partner: string, products: string[], s = 1) => (mw(`acid + ${partner} → ${products.join(' + ')}`, 38, true, 700) + 220) * s;

/** Activity series bar with hydrogen as a dashed divider. */
export const SeriesBar: React.FC<{x: number; y: number; metals: string[]; hAfter: number; at: number; litAbove?: number; litBelow?: number; size?: number; gap?: number}> = ({x, y, metals, hAfter, at, litAbove, litBelow, size = 44, gap = 26}) => {
	const f = useCurrentFrame();
	let cx = x;
	const items = metals.map((m, i) => { const w = Math.max(size * 1.7, mw(m, size, false, 800) + 30); const r = {m, x: cx, w, i}; cx += w + gap; if (i === hAfter) cx += 70; return r; });
	const hx = items[hAfter].x + items[hAfter].w + gap / 2 + 35;
	const a = litAbove === undefined ? 0 : prog(f, litAbove, 14), b = litBelow === undefined ? 0 : prog(f, litBelow, 14);
	return (
		<Fade at={at}>
			{items.map(it => {
				const above = it.i <= hAfter;
				const l = above ? a : b;
				const fill = above ? (l > 0.01 ? '#d8efe9' : '#fffdf8') : (l > 0.01 ? '#ebe8e2' : '#fffdf8');
				const st = above ? (l > 0.01 ? TEAL : 'rgba(60,45,20,0.3)') : (l > 0.01 ? '#9a948a' : 'rgba(60,45,20,0.3)');
				return (
					<g key={it.i}>
						<rect x={it.x} y={y - size * 1.05} width={it.w} height={size * 1.6} rx={14} fill={fill} stroke={st} strokeWidth={3} />
						<Sx x={it.x + it.w / 2} y={y + size * 0.1} text={it.m} size={size} color={above ? INK : (l > 0.5 ? '#7a746a' : INK)} anchor="middle" weight={800} at={-1000} />
					</g>
				);
			})}
			<line x1={hx} y1={y - size * 1.5} x2={hx} y2={y + size * 0.9} stroke={INK_SOFT} strokeWidth={4} strokeDasharray="10 8" />
			<Sx x={hx} y={y - size * 1.7} text="(H)" size={size * 0.9} color={INK} anchor="middle" weight={800} at={-1000} />
			<Sx x={(x + hx) / 2} y={y + size * 1.9} text="above H: react" size={34} color={TEAL} anchor="middle" hand at={litAbove ?? at} />
			<Sx x={(hx + cx) / 2} y={y + size * 1.9} text="below H: no reaction" size={34} color="#7a746a" anchor="middle" hand at={litBelow ?? at} />
		</Fade>
	);
};

/** Rising bubbles (CO2 grey-green or H2 white) from a point. */
export const Bubbles: React.FC<{x: number; y: number; at: number; until?: number; color?: string; n?: number; spread?: number; rise?: number; label?: string}> = ({x, y, at, until = 1e9, color = CO2C, n = 6, spread = 40, rise = 160, label}) => {
	const f = useCurrentFrame();
	if (f < at) return null;
	return (
		<g>
			{Array.from({length: n}, (_, i) => {
				const per = 50;
				const t = ((f - at + i * (per / n)) % per) / per;
				if (f > until && (f - at + i * (per / n)) % per < (f - until)) return null;
				const xx = x + Math.sin(i * 2.1 + t * 4) * spread * 0.5;
				return <circle key={i} cx={xx} cy={y - t * rise} r={6 + (i % 3) * 2} fill={color} stroke={color === '#ffffff' ? '#9aa7b0' : CO2_INK} strokeWidth={1.5} opacity={0.85 * Math.sin(t * Math.PI)} />;
			})}
			{label ? <Sx x={x + spread} y={y - rise - 10} text={label} size={28} color={CO2_INK} hand at={at} /> : null}
		</g>
	);
};
export {ACID_INK, BASE_INK};
