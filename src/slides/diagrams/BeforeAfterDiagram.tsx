// BeforeAfterDiagram — two states side by side in the diorama family.
//
// Each side is a painted placard standing on its own plinth: a coloured tab
// with the label, then the content. Content written as "value — description"
// gets the value large and the description below. Text is wrapped and sized to
// fit the placard; nothing is ever cut off (the legacy version kept only the
// first three lines, which dropped examples and melting points).
//
// The medallion between the placards says how the two relate: "→" when the
// labels describe a change (before/after, start/equilibrium, atom/its ion,
// predicted/observed), "vs" for a side-by-side comparison. (The legacy "≠" was
// written for N vs n and read wrongly on every other scene.)
//
// Timing: the left placard lands with the card; the right one lands when the
// narration names its label (else shortly after). In the hold the medallion
// breathes and the placards sway very slightly on their posts.

import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {FONT_DISPLAY, TOK} from '../../styles/tokens';
import {useAccent} from '../../styles/theme';
import {DioramaDefs, idleBob, idlePulse} from './diorama';
import {clamp, idHash, shade, StonePlinth} from './kinds/restyle-generic/paint';
import {buildStart, mentionOf, sceneTimingFor} from './kinds/restyle-generic/sceneSync';

type Props = {
	beforeLabel: string;
	afterLabel: string;
	beforeContent: string;
	afterContent: string;
	delay?: number;
};

// Rendered at ~0.85× (ConceptSlide's default wrapper), so text is sized up to
// stay phone-legible.
const W = 720;
const H = 580;
const CARD_W = 322;
const CARD_TOP = 18;
const CARD_BOTTOM = 432;
const CXS = [176, 544];
const PLINTH_Y = 482;
const PLINTH_RX = 132;
const PAD = 20;
const CHAR_EM = 0.52;

const splitPanelContent = (content: string) => {
	const [rawValue, rawDescription] = content.split('—').map((part) => part.trim());
	if (rawDescription) {
		return {value: rawValue, description: rawDescription};
	}
	return content.length <= 18 ? {value: content, description: ''} : {value: '', description: content};
};

const wrapText = (text: string, maxChars: number) => {
	const words = text.split(/\s+/).filter(Boolean);
	const lines: string[] = [];
	let current = '';
	for (const word of words) {
		const next = current ? `${current} ${word}` : word;
		if (next.length > maxChars && current) {
			lines.push(current);
			current = word;
		} else {
			current = next;
		}
	}
	if (current) lines.push(current);
	return lines;
};

const getBadge = (label: string) => {
	const normalized = label.toLowerCase();
	if (normalized.includes('molar')) return 'g mol⁻¹';
	if (normalized === 'mass' || normalized.includes('sample')) return 'g';
	if (normalized.includes('moles') || normalized === 'n') return 'in mol';
	if (normalized.includes('particles') || normalized === 'n (particles)') return 'no units';
	return '';
};

const CHANGE_WORDS = /\b(before|after|start|end|equilibrium|predicted|observed|its ion|then|now)\b/i;

const charsFor = (size: number) => Math.floor((CARD_W - PAD * 2) / (size * CHAR_EM));

/** Lay out one placard's text: largest sizes (within caps) that fit the card. */
const layoutPanel = (label: string, content: string) => {
	const {value, description} = splitPanelContent(content);
	let labelSize = 30;
	let labelLines = wrapText(label, charsFor(labelSize));
	while (labelSize > 18 && labelLines.length > 2) {
		labelSize -= 1;
		labelLines = wrapText(label, charsFor(labelSize));
	}
	const tabH = labelLines.length * labelSize * 1.12 + 26;
	let valueSize = value.length > 14 ? 34 : 44;
	let valueLines = value ? wrapText(value, charsFor(valueSize)) : [];
	while (valueSize > 22 && valueLines.length > 2) {
		valueSize -= 2;
		valueLines = wrapText(value, charsFor(valueSize));
	}
	const badge = getBadge(label);
	const bodyTop = CARD_TOP + tabH + 22;
	const bodyH = CARD_BOTTOM - bodyTop - 18 - (badge ? 44 : 0);
	const valueH = valueLines.length ? valueLines.length * valueSize * 1.1 + 14 : 0;
	let descSize = 30;
	let descLines = wrapText(description, charsFor(descSize));
	while (descSize > 17 && descLines.length * descSize * 1.28 > bodyH - valueH) {
		descSize -= 1;
		descLines = wrapText(description, charsFor(descSize));
	}
	const textH = valueH + descLines.length * descSize * 1.28;
	return {labelSize, labelLines, tabH, valueSize, valueLines, descSize, descLines, badge, bodyTop: bodyTop + Math.max(0, (bodyH - textH) / 2)};
};

export const BeforeAfterDiagram = ({beforeLabel, afterLabel, beforeContent, afterContent, delay}: Props) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const theme = useAccent();

	const timing = sceneTimingFor('beforeAfter', [beforeLabel, afterLabel, beforeContent, afterContent]);
	const start = buildStart(delay, timing);
	// A side is "named" by its label or its content, whichever the narration reaches first.
	const firstOf = (texts: string[], from: number) =>
		texts
			.map((t) => (timing ? mentionOf(timing, t, from) : undefined))
			.reduce<ReturnType<typeof mentionOf>>((best, m) => (m && (!best || m.word < best.word) ? m : best), undefined);
	const leftM = firstOf([beforeLabel, beforeContent], 0);
	const rightM = firstOf([afterLabel, afterContent], (leftM?.word ?? -1) + 1);
	const latest = timing ? Math.round(timing.durationInFrames * 0.6) : start + 14;
	const rightAt = rightM ? Math.min(latest, Math.max(start + 14, rightM.frame - 10)) : start + 14;

	const isChange = CHANGE_WORDS.test(beforeLabel) || CHANGE_WORDS.test(afterLabel);
	const colors = isChange ? ['#7d8b96', theme.accent] : [theme.accent2, theme.accent];
	const ID = `ba-${idHash(beforeLabel + afterLabel)}`;

	const leftP = spring({frame: frame - start, fps, config: {damping: 16, stiffness: 140, mass: 0.9}});
	const rightP = spring({frame: frame - rightAt, fps, config: {damping: 16, stiffness: 140, mass: 0.9}});
	const medP = spring({frame: frame - rightAt - 10, fps, config: {damping: 12, stiffness: 170, mass: 0.7}});
	const holdOn = interpolate(frame, [rightAt + 40, rightAt + 70], [0, 1], clamp);

	const panels = [
		{label: beforeLabel, content: beforeContent, p: leftP, dir: -1},
		{label: afterLabel, content: afterContent, p: rightP, dir: 1},
	];

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={`${beforeLabel}: ${beforeContent}. ${isChange ? 'Changes to' : 'Compared with'} ${afterLabel}: ${afterContent}.`} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<defs>
				<linearGradient id={`${ID}-paper`} x1="0" x2="0.35" y1="0" y2="1">
					<stop offset="0%" stopColor="#ffffff" />
					<stop offset="100%" stopColor="#f1efe9" />
				</linearGradient>
				<linearGradient id={`${ID}-post`} x1="0" x2="1" y1="0" y2="0">
					<stop offset="0%" stopColor="#a8a49c" />
					<stop offset="100%" stopColor="#6f6b64" />
				</linearGradient>
				{colors.map((c, i) => (
					<linearGradient key={i} id={`${ID}-tab-${i}`} x1="0" x2="0.5" y1="0" y2="1">
						<stop offset="0%" stopColor={shade(c, 0.12)} />
						<stop offset="100%" stopColor={shade(c, -0.08)} />
					</linearGradient>
				))}
				<radialGradient id={`${ID}-medal`} cx="38%" cy="32%" r="70%" fx="32%" fy="26%">
					<stop offset="0%" stopColor="#ffffff" />
					<stop offset="26%" stopColor={shade(theme.accent2, 0.1)} />
					<stop offset="100%" stopColor={shade(theme.accent, -0.12)} />
				</radialGradient>
			</defs>

			{panels.map((panel, i) => {
				const cx = CXS[i];
				const L = layoutPanel(panel.label, panel.content);
				const o = interpolate(panel.p, [0, 0.4], [0, 1], clamp);
				const rise = interpolate(panel.p, [0, 1], [40, 0]);
				const sway = idleBob(frame, i * 3, 1.1) * holdOn;
				const x0 = cx - CARD_W / 2;
				const tabColor = colors[i];
				return (
					<g key={i} opacity={o}>
						<StonePlinth id={ID} cx={cx} cy={PLINTH_Y} rx={PLINTH_RX} />
						<g transform={`translate(0, ${rise + sway})`}>
							{/* metal stand posts into the stone */}
							{[-0.3, 0.3].map((f) => (
								<rect key={f} x={cx + f * CARD_W - 6} y={CARD_BOTTOM - 10} width={12} height={PLINTH_Y - CARD_BOTTOM + 14} rx={3} fill={`url(#${ID}-post)`} />
							))}
							<rect x={x0 + 6} y={CARD_TOP + 10} width={CARD_W} height={CARD_BOTTOM - CARD_TOP} rx={16} fill="rgba(58,40,18,0.14)" />
							<rect x={x0} y={CARD_TOP} width={CARD_W} height={CARD_BOTTOM - CARD_TOP} rx={16} fill={`url(#${ID}-paper)`} stroke={shade(tabColor, 0.25)} strokeWidth={2} />
							{/* label tab */}
							<path
								d={`M ${x0} ${CARD_TOP + 16} a 16 16 0 0 1 16 -16 h ${CARD_W - 32} a 16 16 0 0 1 16 16 v ${L.tabH - 16} h ${-CARD_W} Z`}
								fill={`url(#${ID}-tab-${i})`}
							/>
							<rect x={x0} y={CARD_TOP + L.tabH} width={CARD_W} height={5} fill="rgba(0,0,0,0.08)" />
							<text x={cx} y={CARD_TOP + 13 + L.labelSize * 0.92} textAnchor="middle" fill="#ffffff" fontSize={L.labelSize} fontWeight={800} letterSpacing="-0.01em">
								{L.labelLines.map((line, k) => (
									<tspan key={k} x={cx} dy={k === 0 ? 0 : L.labelSize * 1.12}>
										{line}
									</tspan>
								))}
							</text>
							{/* value, then description */}
							{L.valueLines.length ? (
								<text x={cx} y={L.bodyTop + L.valueSize * 0.9} textAnchor="middle" fill={shade(tabColor, -0.12)} fontSize={L.valueSize} fontWeight={850} letterSpacing="-0.02em">
									{L.valueLines.map((line, k) => (
										<tspan key={k} x={cx} dy={k === 0 ? 0 : L.valueSize * 1.1}>
											{line}
										</tspan>
									))}
								</text>
							) : null}
							<text
								x={cx}
								y={L.bodyTop + (L.valueLines.length ? L.valueLines.length * L.valueSize * 1.1 + 14 : 0) + L.descSize * 0.95}
								textAnchor="middle"
								fill={TOK.ink}
								fontSize={L.descSize}
								fontWeight={560}
							>
								{L.descLines.map((line, k) => (
									<tspan key={k} x={cx} dy={k === 0 ? 0 : L.descSize * 1.28}>
										{line}
									</tspan>
								))}
							</text>
							{L.badge ? (
								<g>
									<rect x={cx - 64} y={CARD_BOTTOM - 54} width={128} height={34} rx={17} fill={`${tabColor}22`} />
									<text x={cx} y={CARD_BOTTOM - 31} textAnchor="middle" fill={shade(tabColor, -0.15)} fontSize={18} fontWeight={700}>
										{L.badge}
									</text>
								</g>
							) : null}
						</g>
					</g>
				);
			})}

			{/* relation medallion */}
			<g
				transform={`translate(${W / 2}, ${(CARD_TOP + CARD_BOTTOM) / 2}) scale(${interpolate(medP, [0, 1], [0.3, 1]) * (1 + 0.06 * idlePulse(frame, 64) * holdOn)})`}
				opacity={interpolate(medP, [0, 0.4], [0, 1], clamp)}
			>
				<circle r={33} fill="rgba(58,40,18,0.18)" cx={3} cy={5} />
				<circle r={32} fill={`url(#${ID}-medal)`} stroke="#ffffff" strokeWidth={3} />
				<text y={isChange ? 11 : 8} textAnchor="middle" fill="#ffffff" fontSize={isChange ? 34 : 24} fontWeight={850} style={{textShadow: '0 1px 1px rgba(0,0,0,0.25)'}}>
					{isChange ? '→' : 'vs'}
				</text>
			</g>
		</svg>
	);
};
