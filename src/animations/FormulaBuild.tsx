import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {useMemo} from 'react';

type Token = {
	text: string;
	kind: 'variable' | 'operator' | 'equals' | 'subscript-pair';
	sub?: string;
};

type FormulaBuildProps = {
	tokens: Token[];
	framesPerToken?: number;
	fontSize?: number;
};

const TOKEN_COLORS: Record<Token['kind'], string> = {
	variable: '#0068a5',
	operator: '#344a6b',
	equals: '#344a6b',
	'subscript-pair': '#0068a5',
};

const TokenEl = ({token, progress}: {token: Token; progress: number}) => {
	const scale = interpolate(progress, [0, 1], [0.4, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const opacity = interpolate(progress, [0, 0.35], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const y = interpolate(progress, [0, 1], [24, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
		<span
			style={{
				display: 'inline-block',
				color: TOKEN_COLORS[token.kind],
				opacity,
				transform: `translateY(${y}px) scale(${scale})`,
				transformOrigin: 'bottom center',
				fontFamily: 'Georgia, "Times New Roman", serif',
				fontStyle: token.kind === 'variable' ? 'italic' : 'normal',
				whiteSpace: 'pre',
			}}
		>
			{token.text}
			{token.sub ? (
				<sub
					style={{
						fontSize: '0.55em',
						verticalAlign: 'sub',
						fontStyle: 'normal',
					}}
				>
					{token.sub}
				</sub>
			) : null}
		</span>
	);
};

export const FormulaBuild = ({
	tokens,
	framesPerToken = 14,
	fontSize = 128,
}: FormulaBuildProps) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	return (
		<div
			style={{
				display: 'flex',
				alignItems: 'baseline',
				justifyContent: 'center',
				gap: '0.18em',
				fontSize,
				lineHeight: 1,
			}}
		>
			{tokens.map((token, i) => {
				const startFrame = i * framesPerToken;
				const progress = spring({
					frame: frame - startFrame,
					fps,
					config: {damping: 14, stiffness: 180, mass: 0.7},
					durationInFrames: framesPerToken + 10,
				});
				return <TokenEl key={i} token={token} progress={progress} />;
			})}
		</div>
	);
};

export type {Token};

// ─── P1.5 — DeltaMathText: highlight changed terms between equation steps ─
// When a new step appears below the previous, tokens that changed render in
// amber for 600ms (18 frames @ 30fps) then settle to their neutral colour.
// Terms that didn't change render at neutral colour immediately.
//
// Usage in WorkedExampleSlide:
//   <DeltaMathText text={rest} prevText={prevRest} delay={delay} isFinal={isFinal} />

import {TOK} from '../styles/tokens';

const clamp = {extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const};

const deltaColorForPiece = (piece: string, isFinal: boolean) => {
	if (piece === 'Nₐ') return TOK.amber;
	if (piece === 'N' || piece === 'n') return isFinal ? TOK.amber : TOK.chem2;
	if (['mol', 'mol⁻¹'].includes(piece)) return TOK.chem2;
	if (['atoms', 'molecules', 'formula units'].includes(piece)) return TOK.amber;
	if (['=', '×', '÷'].includes(piece)) return TOK.inkDim;
	return undefined;
};

type DeltaMathTextProps = {
	/** Current step equation text (the "rest" after splitting prefix). */
	text: string;
	/** Previous step equation text for comparison. Omit for first step. */
	prevText?: string;
	/** Frame at which this step appears. */
	delay: number;
	/** How long the amber highlight persists. Default 18 frames (~600ms). */
	highlightDurationFrames?: number;
	isFinal?: boolean;
};

export const DeltaMathText = ({
	text,
	prevText,
	delay,
	highlightDurationFrames = 18,
	isFinal = false,
}: DeltaMathTextProps) => {
	const frame = useCurrentFrame();

	const changedPositions = useMemo(() => {
		if (!prevText) return new Set<number>();
		const prevTokens = prevText.split(/\s+/).filter(Boolean);
		const currTokens = text.split(/\s+/).filter(Boolean);
		const set = new Set<number>();
		for (let i = 0; i < currTokens.length; i++) {
			if (currTokens[i] !== prevTokens[i]) {
				set.add(i);
			}
		}
		return set;
	}, [text, prevText]);

	const isHighlightPhase = frame < delay + highlightDurationFrames;

	const tokens = text.split(/\s+/).filter(Boolean);

	return (
		<>
			{tokens.map((token, i) => {
				const isChanged = changedPositions.has(i);
				const color = isChanged && isHighlightPhase
					? TOK.amber
					: deltaColorForPiece(token, isFinal);
				return (
					<span key={`${token}-${i}`} style={{color}}>
						{token}
						{i < tokens.length - 1 ? ' ' : ''}
					</span>
				);
			})}
		</>
	);
};
