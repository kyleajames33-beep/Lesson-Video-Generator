// Concept-color threading — the visual vocabulary that runs across every
// lesson. The same idea is always painted the same color. After a few
// scenes, students stop reading the label and start reading the color:
// "amber means count of particles, teal means moles."
//
// The colors are deliberately distinct from prose ink so students never
// confuse a conceptual token with general body text.
//
// Authoring rule (documented for the human editor):
//   Use prose normally. The ConceptText component auto-paints any matches.
//   Do NOT manually color tokens in JSX — that defeats the purpose.

import {TOK} from './tokens';

/**
 * Per-domain palette. Chemistry is the current focus; physics/bio/math
 * stay reserved for module-level subject identity, not concept tokens.
 *
 * `description` documents the meaning so a future contributor can
 * extend the table without breaking the visual contract.
 */
export const CONCEPT_PALETTE = {
	/** N = number of particles — raw count, no units. */
	N: {color: TOK.amber, description: 'Number of particles (count)'},
	/** n = amount of substance, in moles. */
	n: {color: TOK.chem2, description: 'Amount of substance (moles)'},
	/** Nₐ = Avogadro's number — the bridge. */
	avogadro: {color: TOK.math, description: 'Avogadro constant (bridge)'},
	/** mole / mol — the counting unit. */
	mole: {color: TOK.chem1, description: 'Mole — the counting unit'},
	/** atoms / molecules / ions / particles — what's being counted. */
	particles: {color: TOK.bio, description: 'Particles being counted'},
} as const;

export type ConceptKey = keyof typeof CONCEPT_PALETTE;

/**
 * Tokenization rules — order matters. Longer/more specific patterns first
 * so e.g. "Nₐ" is captured as Avogadro before "N" alone is captured as the
 * count symbol.
 *
 * The `g` flag is required; we re-build matchers per call to keep regex
 * lastIndex from leaking between renders.
 */
type ConceptRule = {
	key: ConceptKey;
	/** Source pattern. We compile fresh per call with the g flag. */
	source: string;
	/** True if matching should respect existing word boundaries. */
	caseSensitive?: boolean;
};

export const CONCEPT_RULES: ConceptRule[] = [
	// Avogadro / Nₐ — most specific first
	{key: 'avogadro', source: "Avogadro's number"},
	{key: 'avogadro', source: 'Avogadro’s number'}, // smart quote
	{key: 'avogadro', source: 'Avogadro’s'},
	{key: 'avogadro', source: "Avogadro's"},
	{key: 'avogadro', source: 'Avogadro'},
	{key: 'avogadro', source: 'N_A'},
	{key: 'avogadro', source: 'Nₐ'}, // Latin small letter a subscript
	{key: 'avogadro', source: 'N₊'},
	{key: 'avogadro', source: 'Nₐ'},

	// Particle nouns
	{key: 'particles', source: '\\bparticles?\\b'},
	{key: 'particles', source: '\\batoms?\\b'},
	{key: 'particles', source: '\\bmolecules?\\b'},
	{key: 'particles', source: '\\bions?\\b'},
	{key: 'particles', source: '\\bformula units?\\b'},
	{key: 'particles', source: '\\belementary entities\\b'},

	// Mole — singular, plural, abbreviation
	{key: 'mole', source: '\\bmoles?\\b', caseSensitive: false},
	{key: 'mole', source: '\\bmol\\b', caseSensitive: false},

	// N / n — only when standalone (not inside another word)
	// "Capital N" + "Lowercase n" must come before bare N/n.
	{key: 'N', source: '\\bCapital N\\b', caseSensitive: true},
	{key: 'n', source: '\\bLowercase n\\b', caseSensitive: true},
	{key: 'n', source: '\\blowercase n\\b', caseSensitive: true},
	{key: 'N', source: 'capital N', caseSensitive: true},
	// Standalone N (must be uppercase, not followed by a letter)
	{key: 'N', source: '(?<![A-Za-z])N(?![A-Za-zₐ₊])', caseSensitive: true},
	// Standalone n (must be lowercase, not followed by a letter)
	{key: 'n', source: '(?<![A-Za-z])n(?![A-Za-z])', caseSensitive: true},
];

/**
 * Tokenize a string into [text, color?] segments. Used by <ConceptText>.
 * Exported for testing.
 */
export type Token = {text: string; color?: string};

export const tokenizeConcepts = (input: string): Token[] => {
	if (!input) return [];

	// Build a list of all match ranges across all rules
	const matches: Array<{start: number; end: number; color: string}> = [];

	for (const rule of CONCEPT_RULES) {
		const flags = rule.caseSensitive ? 'g' : 'gi';
		const re = new RegExp(rule.source, flags);
		let m: RegExpExecArray | null;
		while ((m = re.exec(input)) !== null) {
			// Skip if any existing match already covers this range — earlier
			// rules win (they're more specific).
			const start = m.index;
			const end = start + m[0].length;
			const overlaps = matches.some((x) => start < x.end && end > x.start);
			if (!overlaps) {
				matches.push({start, end, color: CONCEPT_PALETTE[rule.key].color});
			}
			if (m[0].length === 0) re.lastIndex++; // safety
		}
	}

	matches.sort((a, b) => a.start - b.start);

	// Walk the string, emitting plain text + colored spans
	const tokens: Token[] = [];
	let cursor = 0;
	for (const m of matches) {
		if (m.start > cursor) tokens.push({text: input.slice(cursor, m.start)});
		tokens.push({text: input.slice(m.start, m.end), color: m.color});
		cursor = m.end;
	}
	if (cursor < input.length) tokens.push({text: input.slice(cursor)});
	return tokens;
};
