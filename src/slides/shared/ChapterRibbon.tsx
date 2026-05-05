// Chapter Ribbon — P1.4, 2026-05-02.
//
// Purpose: persistent progress bar showing the student where they are
// in the lesson flow. Appears above the bottom chrome row.
//
// Phase mapping:
//   Hook      → title, hook
//   Concept   → concept, definition, formula, marginalia, labFootage, misconception
//   Worked    → workedExample
//   Check     → quickCheck
//   Summary   → summary

import {interpolate, useCurrentFrame} from 'remotion';
import {TOK, FONT_MONO} from '../../styles/tokens';

const clamp = {extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const};

const PHASES = ['Hook', 'Concept', 'Worked', 'Check', 'Summary'] as const;
type Phase = (typeof PHASES)[number];

const getPhase = (sceneType: string): Phase => {
	switch (sceneType) {
		case 'title':
		case 'hook':
			return 'Hook';
		case 'concept':
		case 'definition':
		case 'formula':
		case 'marginalia':
		case 'labFootage':
		case 'misconception':
			return 'Concept';
		case 'workedExample':
			return 'Worked';
		case 'quickCheck':
			return 'Check';
		case 'summary':
			return 'Summary';
		default:
			return 'Concept';
	}
};

type ChapterRibbonProps = {
	sceneType: string;
};

export const ChapterRibbon = ({sceneType}: ChapterRibbonProps) => {
	const frame = useCurrentFrame();
	const currentPhase = getPhase(sceneType);
	const activeIndex = PHASES.indexOf(currentPhase);

	// Subtle pulse on the active segment
	const t = frame / 30;
	const pulse = 0.7 + 0.3 * Math.sin(t * Math.PI * 0.8);

	return (
		<div
			style={{
				position: 'absolute',
				bottom: 88,
				left: 64,
				right: 64,
				height: 28,
				display: 'flex',
				alignItems: 'center',
				gap: 8,
			}}
		>
			{PHASES.map((phase, index) => {
				const isActive = index === activeIndex;
				const isPast = index < activeIndex;
				const isFuture = index > activeIndex;

				const barOpacity = isActive ? pulse : isPast ? 0.5 : 0.2;
				const textColor = isActive ? TOK.amber : isPast ? TOK.inkDim : TOK.inkMute;
				const textOpacity = isActive ? 1 : isPast ? 0.6 : 0.35;

				return (
					<div
						key={phase}
						style={{
							flex: 1,
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							gap: 4,
						}}
					>
						<div
							style={{
								width: '100%',
								height: 3,
								borderRadius: 2,
								background: isActive ? TOK.amber : isPast ? TOK.inkDim : TOK.inkMute,
								opacity: barOpacity,
								transition: 'none',
							}}
						/>
						<div
							style={{
								fontFamily: FONT_MONO,
								fontSize: 11,
								letterSpacing: '0.12em',
								textTransform: 'uppercase',
								color: textColor,
								opacity: textOpacity,
								transition: 'none',
							}}
						>
							{phase}
						</div>
					</div>
				);
			})}
		</div>
	);
};
