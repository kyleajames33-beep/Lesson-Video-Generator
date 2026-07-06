// ConceptText — wraps any string in concept-color threading.
//
// Hands off to tokenizeConcepts which knows the canonical N/n/Avogadro/
// mole/particles palette. Pass children as a string; the component splits
// it into colored spans where conceptual tokens appear.
//
// Usage:
//   <ConceptText>{scene.body}</ConceptText>
//
// To make a token bold + colored (e.g. in headings), pass strongConcepts.
// To inherit base color for non-concept text, omit baseColor.

import {Fragment} from 'react';
import {tokenizeConcepts} from '../../styles/conceptColors';

type ConceptTextProps = {
	children: string | undefined | null;
	/** Slightly bolder weight for colored tokens. Defaults to true. */
	strongConcepts?: boolean;
	/** If set, applied to all non-concept text spans. Otherwise inherits. */
	baseColor?: string;
};

export const ConceptText = ({children, strongConcepts = true, baseColor}: ConceptTextProps) => {
	if (!children) return null;
	const tokens = tokenizeConcepts(children);
	return (
		<>
			{tokens.map((t, i) => {
				if (!t.color) {
					return baseColor ? (
						<span key={i} style={{color: baseColor}}>{t.text}</span>
					) : (
						<Fragment key={i}>{t.text}</Fragment>
					);
				}
				return (
					<span
						key={i}
						style={{color: t.color, fontWeight: strongConcepts ? 720 : undefined}}
					>
						{t.text}
					</span>
				);
			})}
		</>
	);
};
