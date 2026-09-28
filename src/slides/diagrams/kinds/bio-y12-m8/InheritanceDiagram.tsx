// InheritanceDiagram — single-gene inheritance patterns as families on stone
// plinths. Each panel crosses two parents (pedigree symbols: square male,
// circle female; filled = affected, dot = carrier) and the four children are
// the actual Punnett combinations of the parents' alleles, so the affected
// share (1 in 4 = 25%, 2 in 4 = 50%, sons vs daughters) is computed, not typed.
//
// type "AR": carrier × carrier (Aa × Aa), affected = aa.
// type "AD": affected × unaffected (Aa × aa), affected = any A.
// type "XR": carrier mother × unaffected father (XᴴXʰ × XᴴY), affected = no Xᴴ.
//
// Beats are frames after `delay`. Hold: the family bobs gently, the affected
// children's halo breathes.

import {useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {Arrow, COL, GlossDefs, Note, NoteLine, fadeAt, popAt} from './shared';

type Kind = 'AR' | 'AD' | 'XR';
export type InheritancePanel = {title: string; type: Kind; at: number; resultAt: number; example?: string};
export type InheritanceProps = {panels: InheritancePanel[]; notes?: Note[]; delay?: number};

const ID = 'b12m8inh';
const W = 760;
const H = 530;

type Person = {sex: 'M' | 'F' | 'U'; alleles: string[]};

const PARENTS: Record<Kind, [Person, Person]> = {
	AR: [{sex: 'M', alleles: ['A', 'a']}, {sex: 'F', alleles: ['A', 'a']}],
	AD: [{sex: 'M', alleles: ['A', 'a']}, {sex: 'F', alleles: ['a', 'a']}],
	XR: [{sex: 'M', alleles: ['Xᴴ', 'Y']}, {sex: 'F', alleles: ['Xᴴ', 'Xʰ']}],
};

const status = (type: Kind, p: Person): 'affected' | 'carrier' | 'unaffected' => {
	const a = p.alleles;
	if (type === 'AR') return a.every((x) => x === 'a') ? 'affected' : a.includes('a') ? 'carrier' : 'unaffected';
	if (type === 'AD') return a.includes('A') ? 'affected' : 'unaffected';
	const xs = a.filter((x) => x.startsWith('X'));
	if (!xs.includes('Xᴴ')) return 'affected';
	return xs.includes('Xʰ') ? 'carrier' : 'unaffected';
};

const children = (type: Kind): Person[] => {
	const [dad, mum] = PARENTS[type];
	const out: Person[] = [];
	for (const m of mum.alleles) {
		for (const d of dad.alleles) {
			const sex = type === 'XR' ? (d === 'Y' ? 'M' : 'F') : 'U';
			// write the genotype in a conventional order (dominant / X first)
			const rank: Record<string, number> = {A: 0, a: 1, 'Xᴴ': 0, 'Xʰ': 1, Y: 2};
			const al = [m, d].sort((p, q) => rank[p] - rank[q]);
			out.push({sex, alleles: al});
		}
	}
	// daughters first for the X-linked panel, then a stable order
	return out.sort((p, q) => (p.sex === q.sex ? 0 : p.sex === 'F' ? -1 : 1));
};

export const InheritanceDiagram = ({panels, notes = [], delay = 62}: InheritanceProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const n = panels.length;
	const pw = W / n;

	const Symbol = ({x, y, p, type, s = 1}: {x: number; y: number; p: Person; type: Kind; s?: number}) => {
		const st = status(type, p);
		const fill = st === 'affected' ? 'aff' : 'unaff';
		const r = 17 * s;
		return (
			<g>
				{p.sex === 'M' ? (
					<rect x={x - r} y={y - r} width={r * 2} height={r * 2} rx={4} fill={`url(#${ID}-g-${fill})`} stroke="#4a4f57" strokeWidth={2} />
				) : p.sex === 'U' ? (
					<rect x={x - r * 0.82} y={y - r * 0.82} width={r * 1.64} height={r * 1.64} rx={3} fill={`url(#${ID}-g-${fill})`} stroke="#4a4f57" strokeWidth={2} transform={`rotate(45 ${x} ${y})`} />
				) : (
					<circle cx={x} cy={y} r={r} fill={`url(#${ID}-g-${fill})`} stroke="#4a4f57" strokeWidth={2} />
				)}
				{st === 'carrier' && <circle cx={x} cy={y} r={5 * s} fill="#4a4f57" />}
			</g>
		);
	};

	const panel = (pn: InheritancePanel, i: number) => {
		const o = fadeAt(frame, pn.at, 14);
		if (o <= 0) return null;
		const cx = pw * (i + 0.5);
		const kids = children(pn.type);
		const affected = kids.filter((k) => status(pn.type, k) === 'affected');
		const res = fadeAt(frame, pn.resultAt, 14);
		const pct = Math.round((affected.length / kids.length) * 100);
		const sons = kids.filter((k) => k.sex === 'M');
		const sonsAff = sons.filter((k) => status(pn.type, k) === 'affected').length;
		const result = pn.type === 'XR'
			? [`sons: ${sonsAff} in ${sons.length} affected`, 'daughters: carriers or unaffected']
			: [`${affected.length} in ${kids.length} affected = ${pct}%`];
		const [dad, mum] = PARENTS[pn.type];
		const parentY = 124, kidY = 296;
		return (
			<g key={i} opacity={o}>
				<text x={cx} y={32} textAnchor="middle" fill={TOK.ink} fontSize={19} fontWeight={800}>{pn.title}</text>
				{pn.example && <text x={cx} y={54} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={700}>{pn.example}</text>}
				<DioramaPlinth id={`${ID}p${i}`} cx={cx} cy={parentY + 20} rx={82} />
				{[dad, mum].map((p, k) => {
					const x = cx + (k === 0 ? -34 : 34);
					const y = parentY + idleBob(frame, k + i * 3, 1.2);
					return (
						<g key={k}>
							<Symbol x={x} y={y} p={p} type={pn.type} />
							<text x={x} y={parentY - 26} textAnchor="middle" fill={TOK.ink} fontSize={16} fontWeight={800}>{p.alleles.join('')}</text>
						</g>
					);
				})}
				<line x1={cx - 16} y1={parentY} x2={cx + 16} y2={parentY} stroke="#4a4f57" strokeWidth={2} />
				<Arrow x1={cx} y1={parentY + 44} x2={cx} y2={kidY - 46} color={TOK.inkMute} width={3} t={fadeAt(frame, pn.at + 20, 20)} />
				<DioramaPlinth id={`${ID}k${i}`} cx={cx} cy={kidY + 20} rx={Math.min(112, pw * 0.46)} />
				{kids.map((k, j) => {
					const x = cx + (j - 1.5) * 44;
					const pop = popAt(frame, fps, pn.at + 40 + j * 8);
					const st = status(pn.type, k);
					const y = kidY + idleBob(frame, j + i * 7, 1.4);
					return (
						<g key={j} opacity={Math.min(1, pop)}>
							{st === 'affected' && res > 0 && <circle cx={x} cy={y} r={24 + idlePulse(frame, 50) * 3} fill={TOK.amber} opacity={0.3 * res} />}
							<g transform={`translate(${x} ${y}) scale(${Math.min(1.1, pop)}) translate(${-x} ${-y})`}>
								<Symbol x={x} y={y} p={k} type={pn.type} s={0.9} />
							</g>
							<text x={x} y={kidY + 70} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={800}>{k.alleles.join('')}</text>
						</g>
					);
				})}
				<g opacity={res}>
					{result.map((ln, k) => (
						<text key={k} x={cx} y={kidY + 112 + k * 24} textAnchor="middle" fill={k === 0 ? TOK.amberInk : TOK.inkDim} fontSize={k === 0 ? 18 : 15} fontWeight={800}>{ln}</text>
					))}
				</g>
			</g>
		);
	};

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={panels.map((p) => p.title).join(', ')} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={{aff: COL.red, unaff: '#f4f2ee'}} />
			{panels.map(panel)}
			{/* key */}
			<g opacity={fadeAt(frame, panels[0]?.at ?? 0, 14)} transform={`translate(${W / 2 - 190} ${H - 22})`}>
				<rect x={0} y={-12} width={16} height={16} rx={3} fill={`url(#${ID}-g-unaff)`} stroke="#4a4f57" strokeWidth={1.5} />
				<text x={22} y={2} fill={TOK.inkDim} fontSize={14} fontWeight={700}>male</text>
				<circle cx={80} cy={-4} r={8} fill={`url(#${ID}-g-unaff)`} stroke="#4a4f57" strokeWidth={1.5} />
				<text x={94} y={2} fill={TOK.inkDim} fontSize={14} fontWeight={700}>female</text>
				<circle cx={162} cy={-4} r={8} fill={`url(#${ID}-g-aff)`} stroke="#4a4f57" strokeWidth={1.5} />
				<text x={176} y={2} fill={TOK.inkDim} fontSize={14} fontWeight={700}>affected</text>
				<circle cx={254} cy={-4} r={8} fill={`url(#${ID}-g-unaff)`} stroke="#4a4f57" strokeWidth={1.5} />
				<circle cx={254} cy={-4} r={3} fill="#4a4f57" />
				<text x={268} y={2} fill={TOK.inkDim} fontSize={14} fontWeight={700}>carrier</text>
				<rect x={328} y={-12} width={16} height={16} rx={3} fill="#eceae5" stroke="#4a4f57" strokeWidth={1.5} transform="rotate(45 336 -4)" />
				<text x={352} y={2} fill={TOK.inkDim} fontSize={14} fontWeight={700}>either sex</text>
			</g>
			{notes.map((nt, k) => (
				<NoteLine key={k} note={nt} x={W / 2} y={H - 52 - (notes.length - 1 - k) * 24} frame={frame} size={18} />
			))}
		</svg>
	);
};
