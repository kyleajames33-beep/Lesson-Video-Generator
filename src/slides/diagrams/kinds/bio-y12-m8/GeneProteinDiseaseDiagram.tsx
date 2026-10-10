// GeneProteinDiseaseDiagram (bio12m8GeneProteinDisease): the framework scene
// for genetic disease. It previews the three mechanisms; the lesson's later
// scenes (CFTR step by step, the PKU / Huntington's table) carry the detail,
// so nothing here repeats them.
//
// Top: the three-link chain, gene → protein → consequence, with a mutated
// base flagged in the gene.
// Below, one panel per mechanism, each arriving on its narration beat:
//   loss of function     a channel protein misfolds and closes; the ions that
//                        passed through it now bounce off (CF, PKU).
//   gain of toxic function  altered proteins clump together inside a neuron
//                        (Huntington's).
//   immune trigger       immune cells attack the body's own insulin-making
//                        beta cells; genes raise the risk (type 1 diabetes).
// Exam beat: the chain's links are numbered 1 2 3 and briefly outlined, so
// "name all three links" is literally the chain on screen.
//
// Beats are frames after `delay`. Hold: ions, clumps and immune cells keep
// gentle deterministic motion.

import {useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {idleBob, idlePulse} from '../../diorama';
import {Arrow, COL, GlossDefs, Pill, ease, fadeAt, popAt} from './shared';

export type GeneProteinDiseaseProps = {
	at?: {
		chain?: number;
		loss?: number;
		gain?: number;
		immune?: number;
		exam?: number;
		missLink?: number;
	};
	examples?: {loss?: string; gain?: string; immune?: string};
	delay?: number;
};

const ID = 'b12m8gpd';
const W = 760;
const H = 530;
const CHAIN_Y = 84;
const PANEL_Y0 = 186;
const PANEL_H = 250;
const PANEL_W = 236;
const GAP = (W - 3 * PANEL_W) / 4;
const px0 = (k: number) => GAP + k * (PANEL_W + GAP);

export const GeneProteinDiseaseDiagram = ({
	at = {},
	examples = {loss: 'cystic fibrosis, PKU', gain: "Huntington's disease", immune: 'type 1 diabetes'},
	delay = 62,
}: GeneProteinDiseaseProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const t = {
		chain: at.chain ?? 60,
		loss: at.loss ?? 330,
		gain: at.gain ?? 520,
		immune: at.immune ?? 720,
		exam: at.exam ?? 940,
		missLink: at.missLink ?? 1220,
	};

	// ---------- chain ----------
	const nodes = [
		{x: 132, label: 'mutated gene', at: t.chain},
		{x: 380, label: 'altered protein', at: t.chain + 40},
		{x: 628, label: 'consequence', at: t.chain + 80},
	];
	const exam = fadeAt(frame, t.exam, 16);

	const Gene = ({x, y}: {x: number; y: number}) => (
		<g>
			{Array.from({length: 7}, (_, k) => {
				const yy = y - 21 + k * 7;
				const off = Math.sin(k * 0.9) * 16;
				const mut = k === 3;
				return (
					<g key={k}>
						<line x1={x - 30 + off * 0.3} y1={yy} x2={x + 30 - off * 0.3} y2={yy} stroke={mut ? COL.red : '#b9c3cd'} strokeWidth={mut ? 4 : 3} strokeLinecap="round" />
					</g>
				);
			})}
			<path d={`M ${x - 32} ${y - 24} C ${x - 10} ${y - 10}, ${x - 54} ${y + 8}, ${x - 30} ${y + 24}`} fill="none" stroke={theme.accent} strokeWidth={4} strokeLinecap="round" />
			<path d={`M ${x + 32} ${y - 24} C ${x + 10} ${y - 10}, ${x + 54} ${y + 8}, ${x + 30} ${y + 24}`} fill="none" stroke={theme.accent} strokeWidth={4} strokeLinecap="round" />
		</g>
	);
	const Protein = ({x, y, misfold = 0}: {x: number; y: number; misfold?: number}) => (
		<path
			d={`M ${x - 30} ${y} C ${x - 30} ${y - 26}, ${x - 4} ${y - 30 + misfold * 10}, ${x + 6} ${y - 14} C ${x + 18} ${y - 30}, ${x + 34} ${y - 12 - misfold * 8}, ${x + 26} ${y + 6} C ${x + 36} ${y + 22 + misfold * 6}, ${x + 8} ${y + 30}, ${x - 4} ${y + 18} C ${x - 18} ${y + 30}, ${x - 34} ${y + 18}, ${x - 30} ${y}`}
			fill={`url(#${ID}-g-prot)`}
			stroke="rgba(0,0,0,0.22)"
			strokeWidth={1.2}
		/>
	);
	const Consequence = ({x, y}: {x: number; y: number}) => (
		<g>
			<circle cx={x} cy={y - 14} r={11} fill={COL.flesh} stroke="rgba(0,0,0,0.2)" />
			<path d={`M ${x - 18} ${y + 26} Q ${x} ${y - 10} ${x + 18} ${y + 26} Z`} fill={COL.flesh} stroke="rgba(0,0,0,0.2)" />
			<circle cx={x + 20} cy={y - 18} r={8} fill={COL.red} opacity={0.85} />
			<text x={x + 20} y={y - 14} textAnchor="middle" fill="#ffffff" fontSize={11} fontWeight={800}>!</text>
		</g>
	);

	// ---------- panels ----------
	const panelShell = (k: number, title: string, tAt: number, color: string) => {
		const p = Math.min(1, popAt(frame, fps, tAt));
		return (
			<g opacity={p} transform={`translate(0,${(1 - p) * 14})`}>
				<rect x={px0(k)} y={PANEL_Y0} width={PANEL_W} height={PANEL_H} rx={16} fill="#ffffff" stroke={TOK.rule} strokeWidth={1.5} />
				<rect x={px0(k)} y={PANEL_Y0} width={PANEL_W} height={34} rx={16} fill={color} opacity={0.14} />
				<text x={px0(k) + PANEL_W / 2} y={PANEL_Y0 + 23} textAnchor="middle" fill={color} fontSize={16} fontWeight={800}>{title}</text>
			</g>
		);
	};

	// Loss of function: a membrane channel. Before the beat ions pass through;
	// after it the channel misfolds shut and the ions bounce off.
	const lossShown = fadeAt(frame, t.loss, 14);
	const closed = ease(frame, t.loss + 40, t.loss + 80);
	const LX = px0(0) + PANEL_W / 2, LMY = PANEL_Y0 + 132;
	const ions = [0, 1, 2, 3].map((k) => {
		const p = ((frame + k * 22) % 88) / 88;
		const startY = LMY - 70, endY = LMY + 70;
		const x = LX - 30 + k * 20;
		if (closed < 0.5) {
			// funnel through the channel
			const y = startY + (endY - startY) * p;
			const xx = x + (LX - x) * Math.sin(Math.min(1, Math.max(0, (y - (LMY - 30)) / 60)) * Math.PI);
			return {x: xx, y};
		}
		// bounce off the closed channel
		const q = p < 0.5 ? p * 2 : (1 - p) * 2;
		return {x: x + Math.sin(p * 6 + k) * 4, y: startY + (LMY - 30 - startY) * q};
	});

	// Gain of toxic function: proteins drift together into a clump.
	const gainShown = fadeAt(frame, t.gain, 14);
	const clump = ease(frame, t.gain + 40, t.gain + 110);
	const GX = px0(1) + PANEL_W / 2, GY = PANEL_Y0 + 140;
	const blobs = Array.from({length: 7}, (_, k) => {
		const a = (k / 7) * Math.PI * 2 + 0.4;
		const r0 = 74, r1 = 15 + (k % 3) * 7;
		const r = r0 + (r1 - r0) * clump;
		return {x: GX + Math.cos(a) * r * 1.15 + idleBob(frame, k + 7, 1.2), y: GY + Math.sin(a) * r * 0.75 + idleBob(frame, k + 3, 1.2)};
	});

	// Immune trigger: immune cells close in on a beta cell.
	const immShown = fadeAt(frame, t.immune, 14);
	const attack = ease(frame, t.immune + 40, t.immune + 110);
	const IX = px0(2) + PANEL_W / 2, IY = PANEL_Y0 + 136;
	const tcells = [0, 1, 2].map((k) => {
		// left, right and below the beta cell, clear of the panel's text
		const a = [Math.PI, 0, Math.PI / 2][k];
		const r = 88 - 44 * attack;
		return {x: IX + Math.cos(a) * r + idleBob(frame, k + 11, 1.4), y: IY + Math.sin(a) * r * 0.6 + idleBob(frame, k + 13, 1.4)};
	});
	const beta = 1 - 0.35 * attack;

	const pulse = idlePulse(frame, 50);

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Genetic disease framework: a mutated gene makes an altered protein, which causes the consequence; three mechanisms are loss of function, gain of toxic function and an immune trigger" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<GlossDefs id={ID} colors={{prot: '#c9a0dc', tcell: COL.blue, beta: '#f2d27a', ion: COL.green, clump: COL.violet}} />

			{/* ---------- chain ---------- */}
			{nodes.map((n, k) => {
				const p = Math.min(1, popAt(frame, fps, n.at));
				return (
					<g key={k} opacity={p} transform={`translate(${n.x},${CHAIN_Y}) scale(${0.8 + 0.2 * p}) translate(${-n.x},${-CHAIN_Y})`}>
						<rect x={n.x - 96} y={CHAIN_Y - 50} width={192} height={100} rx={18} fill="#ffffff" stroke={exam > 0 ? theme.accent : TOK.rule} strokeWidth={1.5 + 2 * exam} />
						<g transform={`translate(${n.x},${CHAIN_Y - 14}) scale(0.78) translate(${-n.x},${-(CHAIN_Y - 14)})`}>
							{k === 0 && <Gene x={n.x} y={CHAIN_Y - 14} />}
							{k === 1 && <Protein x={n.x} y={CHAIN_Y - 14} misfold={1} />}
							{k === 2 && <Consequence x={n.x} y={CHAIN_Y - 10} />}
						</g>
						<text x={n.x} y={CHAIN_Y + 36} textAnchor="middle" fill={TOK.ink} fontSize={16} fontWeight={800}>{n.label}</text>
						<g opacity={exam}>
							<circle cx={n.x - 84} cy={CHAIN_Y - 40} r={14} fill={theme.accent} />
							<text x={n.x - 84} y={CHAIN_Y - 35} textAnchor="middle" fill="#ffffff" fontSize={15} fontWeight={800}>{k + 1}</text>
						</g>
					</g>
				);
			})}
			<Arrow x1={232} y1={CHAIN_Y} x2={280} y2={CHAIN_Y} color={theme.accent} width={3.5} head={11} t={ease(frame, t.chain + 30, t.chain + 50)} />
			<Arrow x1={480} y1={CHAIN_Y} x2={528} y2={CHAIN_Y} color={theme.accent} width={3.5} head={11} t={ease(frame, t.chain + 70, t.chain + 90)} />
			<text x={132} y={CHAIN_Y + 72} textAnchor="middle" fill={COL.red} fontSize={15} fontWeight={800} opacity={fadeAt(frame, t.chain + 20, 14) * (1 - exam)}>one base changed</text>
			<g opacity={exam}>
				<text x={W / 2} y={CHAIN_Y + 76} textAnchor="middle" fill={theme.accent} fontSize={16} fontWeight={800}>name the gene, the protein change, the consequence</text>
			</g>

			<text x={W / 2} y={PANEL_Y0 - 14} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={800} opacity={fadeAt(frame, t.loss - 20, 14) * (1 - exam)}>three ways the altered protein causes disease</text>

			{/* ---------- loss of function ---------- */}
			{panelShell(0, 'loss of function', t.loss, theme.accent)}
			<g opacity={lossShown}>
				<rect x={px0(0) + 12} y={LMY - 12} width={PANEL_W - 24} height={24} rx={6} fill="#f1e3c8" />
				<line x1={px0(0) + 12} y1={LMY - 12} x2={px0(0) + PANEL_W - 12} y2={LMY - 12} stroke="#d6bf92" strokeWidth={2} />
				<line x1={px0(0) + 12} y1={LMY + 12} x2={px0(0) + PANEL_W - 12} y2={LMY + 12} stroke="#d6bf92" strokeWidth={2} />
				{/* channel: two halves that close together */}
				<rect x={LX - 30 + 10 * closed} y={LMY - 30} width={20} height={60} rx={9} fill={`url(#${ID}-g-prot)`} stroke="rgba(0,0,0,0.22)" transform={`rotate(${-14 * closed},${LX - 20},${LMY})`} />
				<rect x={LX + 10 - 10 * closed} y={LMY - 30} width={20} height={60} rx={9} fill={`url(#${ID}-g-prot)`} stroke="rgba(0,0,0,0.22)" transform={`rotate(${12 * closed},${LX + 20},${LMY})`} />
				{ions.map((ion, k) => (
					<circle key={k} cx={ion.x} cy={ion.y} r={6.5} fill={`url(#${ID}-g-ion)`} stroke="rgba(0,0,0,0.2)" />
				))}
				<text x={LX} y={PANEL_Y0 + 216} textAnchor="middle" fill={TOK.ink} fontSize={15} fontWeight={800} opacity={fadeAt(frame, t.loss + 60, 14)}>protein no longer works</text>
				<text x={LX} y={PANEL_Y0 + 238} textAnchor="middle" fill={TOK.inkDim} fontSize={14} fontWeight={700} opacity={fadeAt(frame, t.loss + 70, 14)}>{examples.loss}</text>
			</g>

			{/* ---------- gain of toxic function ---------- */}
			{panelShell(1, 'gain of toxic function', t.gain, COL.violet)}
			<g opacity={gainShown}>
				<ellipse cx={GX} cy={GY} rx={96} ry={70} fill="#fbf4ff" stroke="#d8c3e6" strokeWidth={2} />
				<text x={GX + 64} y={GY - 52} textAnchor="middle" fill={TOK.inkMute} fontSize={13} fontWeight={800}>neuron</text>
				{blobs.map((b, k) => (
					<g key={k} transform={`translate(${b.x},${b.y}) scale(0.42) translate(${-b.x},${-b.y})`}>
						<Protein x={b.x} y={b.y} misfold={0} />
					</g>
				))}
				<circle cx={GX} cy={GY} r={40 + 4 * pulse} fill="none" stroke={COL.violet} strokeWidth={2.5} strokeDasharray="4 5" opacity={fadeAt(frame, t.gain + 100, 14)} />
				<text x={GX} y={PANEL_Y0 + 216} textAnchor="middle" fill={TOK.ink} fontSize={15} fontWeight={800} opacity={fadeAt(frame, t.gain + 90, 14)}>new harmful role: clumps</text>
				<text x={GX} y={PANEL_Y0 + 238} textAnchor="middle" fill={TOK.inkDim} fontSize={14} fontWeight={700} opacity={fadeAt(frame, t.gain + 100, 14)}>{examples.gain}</text>
			</g>

			{/* ---------- immune trigger ---------- */}
			{panelShell(2, 'immune trigger', t.immune, COL.red)}
			<g opacity={immShown}>
				<circle cx={IX} cy={IY} r={34 * beta} fill={`url(#${ID}-g-beta)`} stroke="rgba(0,0,0,0.2)" />
				<text x={IX} y={IY - 40} textAnchor="middle" fill="#6b5414" fontSize={14} fontWeight={800}>β cell</text>
				{tcells.map((c, k) => (
					<g key={k}>
						<circle cx={c.x} cy={c.y} r={17} fill={`url(#${ID}-g-tcell)`} stroke="rgba(0,0,0,0.2)" />
						{[0, 1, 2, 3, 4, 5].map((j) => {
							const a = (j / 6) * Math.PI * 2;
							return <line key={j} x1={c.x + Math.cos(a) * 17} y1={c.y + Math.sin(a) * 17} x2={c.x + Math.cos(a) * 23} y2={c.y + Math.sin(a) * 23} stroke={COL.blue} strokeWidth={2.5} strokeLinecap="round" />;
						})}
					</g>
				))}
				{attack > 0.6 &&
					tcells.map((c, k) => (
						<line key={`z${k}`} x1={c.x + (IX - c.x) * 0.45} y1={c.y + (IY - c.y) * 0.45} x2={c.x + (IX - c.x) * 0.62} y2={c.y + (IY - c.y) * 0.62} stroke={COL.red} strokeWidth={3} strokeLinecap="round" opacity={0.5 + 0.5 * pulse} />
					))}
				<text x={IX} y={PANEL_Y0 + 216} textAnchor="middle" fill={TOK.ink} fontSize={15} fontWeight={800} opacity={fadeAt(frame, t.immune + 90, 14)}>body attacks its own cells</text>
				<text x={IX} y={PANEL_Y0 + 238} textAnchor="middle" fill={TOK.inkDim} fontSize={14} fontWeight={700} opacity={fadeAt(frame, t.immune + 100, 14)}>{examples.immune}</text>
				<text x={IX} y={PANEL_Y0 + 56} textAnchor="middle" fill={COL.red} fontSize={14} fontWeight={800} opacity={fadeAt(frame, t.immune + 20, 14)}>genes raise the risk</text>
			</g>

			<g opacity={fadeAt(frame, t.missLink, 14)}>
				<Pill x={W / 2} y={H - 30} text="miss a link, lose a mark" color={TOK.amberInk} fill="#fff8ec" size={17} />
			</g>
		</svg>
	);
};
