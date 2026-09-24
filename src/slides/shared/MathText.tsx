// MathText — shared coloured math/equation rendering.
//
// Concept tokens (N, n, Nₐ, mol, particles) draw from the canonical
// CONCEPT_PALETTE so a formula like "N = n × Nₐ" matches the colors used
// in prose elsewhere. Operators stay in muted ink so they don't fight
// the conceptual emphasis.

import {TOK} from '../../styles/tokens';
import {CONCEPT_PALETTE} from '../../styles/conceptColors';

type MathTextProps = {
	text: string;
	/** When true, variables render in amber (final answer emphasis). */
	isFinal?: boolean;
	/** When true, operators render in inkMute instead of inkDim. */
	muted?: boolean;
	/**
	 * P1.5 — numbers that are new in this step (not present in the previous
	 * step) get an amber highlight whose strength is `deltaStrength` (0–1).
	 * The slide animates the strength up and back down so "what changed"
	 * flashes, then settles to normal ink.
	 */
	newNumbers?: ReadonlySet<string>;
	deltaStrength?: number;
};

// Numbers incl. decimals, signs and ×10ⁿ scientific notation.
export const NUMBER_RE = /(−?\d+(?:\.\d+)?(?:\s*×\s*10[⁻⁰¹²³⁴⁵⁶⁷⁸⁹]+)?)/g;

export const numbersIn = (text: string): Set<string> => new Set(text.match(NUMBER_RE) ?? []);

// Split rule: capture concept tokens, operators, and compound phrases.
// Order matters — longer patterns first so e.g. "Nₐ" doesn't get split
// into "N" + "ₐ".
//
// Word boundaries (\b) on the bare-letter and plain-word tokens are CRITICAL:
// without them the lone `n`/`N` alternative matches every n/N character inside
// ordinary words (e.g. "ge[n]e", "[n]o[n]", "affecti[n]g", "[mol]ecule"),
// painting random sub-word letters in the mole-concept palette. With \b they
// only match standalone symbols/words, as intended. This corrects both biology
// prose and chemistry prose (e.g. "co[n]ce[n]tratio[n]").
const MATH_RE = /(6\.022 × 10²³|10²³|N = n × Nₐ|N or n\?|Nₐ|mol⁻¹|g\/mol|\bformula units\b|\batoms?\b|\bmolecules?\b|\bions?\b|\bmoles?\b|\bmol\b|\bN\b|\bn\b|=|×|÷|:|\?)/g;

export const colorForPiece = (piece: string, isFinal = false, muted = false): string | undefined => {
	// Avogadro-family
	if (piece === 'Nₐ' || piece === '6.022 × 10²³' || piece === '10²³') {
		return CONCEPT_PALETTE.avogadro.color;
	}
	// Mole + mole-derived units
	if (piece === 'mol' || piece === 'moles' || piece === 'mole') return CONCEPT_PALETTE.mole.color;
	if (piece === 'mol⁻¹' || piece === 'g/mol') return CONCEPT_PALETTE.mole.color;
	// Particles being counted
	if (['atom', 'atoms', 'molecule', 'molecules', 'ion', 'ions', 'formula units'].includes(piece)) {
		return CONCEPT_PALETTE.particles.color;
	}
	// N (count of particles)
	if (piece === 'N') return isFinal ? TOK.amberInk : CONCEPT_PALETTE.N.color;
	// n (amount in moles)
	if (piece === 'n') return CONCEPT_PALETTE.n.color;
	// Compound phrases — keep canonical concept color of the dominant token
	if (piece === 'N = n × Nₐ') return CONCEPT_PALETTE.avogadro.color;
	if (piece === 'N or n?') return CONCEPT_PALETTE.N.color;
	// Operators stay subdued
	if (['=', '×', '÷', ':', '?'].includes(piece)) return muted ? TOK.inkMute : TOK.inkDim;
	return undefined;
};

export const MathText = ({text, isFinal = false, muted = false, newNumbers, deltaStrength = 0}: MathTextProps) => {
	const pieces = text.split(MATH_RE).filter(Boolean);
	const highlight = newNumbers && newNumbers.size > 0 && deltaStrength > 0.01;

	return (
		<>
			{pieces.map((piece, index) => {
				const color = colorForPiece(piece, isFinal, muted);
				if (!highlight || color !== undefined) {
					return (
						<span key={`${piece}-${index}`} style={{color}}>
							{piece}
						</span>
					);
				}
				// Plain run: split out numbers and flag the new ones.
				return (
					<span key={`${piece}-${index}`}>
						{piece.split(NUMBER_RE).filter(Boolean).map((part, j) =>
							newNumbers.has(part) ? (
								<span
									key={j}
									style={{
										borderRadius: 4,
										boxShadow: `0 0 0 3px rgba(240,168,48,${0.28 * deltaStrength})`,
										background: `rgba(240,168,48,${0.28 * deltaStrength})`,
										color: deltaStrength > 0.5 ? TOK.amberInk : undefined,
									}}
								>
									{part}
								</span>
							) : (
								<span key={j}>{part}</span>
							),
						)}
					</span>
				);
			})}
		</>
	);
};
