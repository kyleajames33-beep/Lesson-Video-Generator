import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import type {TextScene} from '../lesson/types';
import {WhiteboardFormula, type WhiteboardToken} from '../animations/WhiteboardFormula';
import {Callout} from '../animations/AttentionPrimitives';
import {UnitCancel} from '../animations/DoodlePrimitives';
import {DiagramRenderer} from './diagrams/DiagramRenderer';
import {Reveal} from './shared/Reveals';
import {SlideLayout} from './shared/SlideLayout';

const SUB_MAP: Record<string, string> = {
	ₐ: 'A', ₑ: 'e', ₒ: 'o', ₙ: 'n', ₘ: 'm',
	'₀': '0', '₁': '1', '₂': '2', '₃': '3', '₄': '4',
	'₅': '5', '₆': '6', '₇': '7', '₈': '8', '₉': '9',
};

/**
 * Parse a formula like "N = n × Nₐ" into whiteboard tokens.
 * Each variable can have a label that pops up briefly to identify it.
 */
const parseFormula = (
	body: string,
	startAt: number,
	stagger: number,
	labels: Record<string, string>,
	highlightVars: Set<string>,
): WhiteboardToken[] => {
	const parts = body.replace(/\s+/g, ' ').trim().split(' ');

	return parts.map((raw, i): WhiteboardToken => {
		const tokenStart = startAt + i * stagger;

		// Operator / equals
		if (raw === '=' || raw === '≡') {
			return {text: raw, color: '#44403c'};
		}
		if (['×', '÷', '+', '−', '-', '·'].includes(raw)) {
			return {text: ` ${raw} `, color: '#44403c'};
		}

		// Variable with subscript
		const subMatch = raw.match(/^([A-Za-z]+)([ₐₑₒₙₘ₀-₉]+)$/);
		const baseText = subMatch ? subMatch[1] : raw;
		const subscript = subMatch ? (SUB_MAP[subMatch[2]] ?? subMatch[2]) : undefined;
		const labelKey = subMatch ? `${subMatch[1]}${subMatch[2]}` : raw;

		const label = labels[labelKey] ?? labels[baseText];
		const isHighlighted = highlightVars.has(labelKey) || highlightVars.has(baseText);

		return {
			text: baseText,
			color: '#0068a5',
			italic: true,
			subscript,
			label,
			labelAt: label ? tokenStart + 28 : undefined,
			labelDuration: 90,
			circleAt: isHighlighted ? tokenStart + 32 : undefined,
		};
	});
};

const getNotes = (secondary?: string) => {
	if (!secondary) return [];
	return secondary
		.replace(/, and /g, ', ')
		.split(', ')
		.map((note) => note.replace(/\.$/, '').trim())
		.filter(Boolean);
};

// Variable → human-readable label that appears with arrow above the variable
const VARIABLE_LABELS: Record<string, string> = {
	N: 'particle count',
	n: 'moles',
	NA: 'Avogadro: 6.022 × 10²³ mol⁻¹',
	Nₐ: 'Avogadro: 6.022 × 10²³ mol⁻¹',
	NA_: 'Avogadro: 6.022 × 10²³ mol⁻¹',
	M: 'molar mass',
	m: 'mass',
	c: 'concentration',
	V: 'volume',
};

export const FormulaSlide = ({scene}: {scene: TextScene}) => {
	const frame = useCurrentFrame();
	const {durationInFrames} = useVideoConfig();
	const at = (frac: number) => Math.round(frac * durationInFrames);
	const clamp = {extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const};

	const startAt = at(0.10);
	const stagger = Math.min(64, Math.max(22, Math.round(0.075 * durationInFrames)));
	const tokens = parseFormula(scene.body, startAt, stagger, VARIABLE_LABELS, new Set(['Nₐ', 'NA']));

	const formulaDoneAt = startAt + tokens.length * stagger + 28;
	const notesStartAt = Math.max(formulaDoneAt + 8, at(0.48));

	const notes = getNotes(scene.secondary);
	const notesOpacity = interpolate(frame, [notesStartAt, notesStartAt + 24], [0, 1], clamp);

	return (
		<SlideLayout eyebrow="Formula" heading={scene.heading} pinHeading>
			<div className="formula-stage">
				<WhiteboardFormula
					tokens={tokens}
					startAt={startAt}
					tokenStagger={stagger}
					tokenWrite={22}
					fontSize={132}
				/>
				{notes.length > 0 || scene.unitCancel ? (
					<div className="formula-teaching-row" style={{opacity: notesOpacity}}>
						{notes.length > 0 && (
							<div className="formula-notes">
								{notes.map((note) => (
									<span key={note}>{note}</span>
								))}
							</div>
						)}
						{scene.unitCancel ? (
							<UnitCancel
								left={scene.unitCancel.left}
								right={scene.unitCancel.right}
								result={scene.unitCancel.result}
								delay={Math.max(notesStartAt + 6, at(0.56))}
								compact
							/>
						) : null}
					</div>
				) : null}
				{scene.callout && !scene.unitCancel ? (
					<Reveal className="formula-callout" delay={Math.max(notesStartAt + 22, at(0.68))}>
						<Callout text={scene.callout} delay={Math.max(notesStartAt + 26, at(0.68) + 4)} side="right" />
					</Reveal>
				) : null}
				{scene.diagram ? (
					<div className="formula-diagram" style={{opacity: notesOpacity}}>
						<DiagramRenderer diagram={scene.diagram} />
					</div>
				) : null}
			</div>
		</SlideLayout>
	);
};
