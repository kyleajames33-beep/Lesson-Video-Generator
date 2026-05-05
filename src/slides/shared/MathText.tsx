// MathText — shared coloured math rendering for chemistry equations.
// Highlights symbols (Nₐ, N, n, mol) and units in subject colours.
// Use whenever an equation or formula appears in a slide.

import {TOK} from '../../styles/tokens';

type MathTextProps = {
	text: string;
	/** When true, variables render in amber (final answer emphasis). */
	isFinal?: boolean;
	/** When true, operators render in inkMute instead of inkDim. */
	muted?: boolean;
};

const MATH_RE = /(Nₐ|N|n|mol⁻¹|mol|g\/mol|atoms|molecules|formula units|6\.022 × 10²³|10²³|N = n × Nₐ|N or n\?|=|×|÷|:|\?)/g;

export const colorForPiece = (piece: string, isFinal = false, muted = false) => {
	if (piece === 'Nₐ' || piece === '6.022 × 10²³') return TOK.amber;
	if (piece === 'N = n × Nₐ' || piece === 'N or n?') return TOK.chem2;
	if (piece === 'N' || piece === 'n') return isFinal ? TOK.amber : TOK.chem2;
	if (['mol', 'mol⁻¹', 'g/mol'].includes(piece)) return TOK.chem2;
	if (['atoms', 'molecules', 'formula units'].includes(piece)) return TOK.amber;
	if (['=', '×', '÷', ':', '?'].includes(piece)) return muted ? TOK.inkMute : TOK.inkDim;
	return undefined;
};

export const MathText = ({text, isFinal = false, muted = false}: MathTextProps) => {
	const pieces = text.split(MATH_RE).filter(Boolean);

	return (
		<>
			{pieces.map((piece, index) => (
				<span key={`${piece}-${index}`} style={{color: colorForPiece(piece, isFinal, muted)}}>
					{piece}
				</span>
			))}
		</>
	);
};
