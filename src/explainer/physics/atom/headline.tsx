// Module 8 kit: a scene heading whose chosen words take a hand underline at a cue (additive kit file, 26 November 2026;
// first used by phys-y12-m8-v13 to v16). It draws the heading in the same hand font, size and place as the studio
// `SceneHeading` (left 96, top 92), already written, so swapping one for the other does not move a letter.
import React from 'react';
import {FONT_HAND} from '../../kit';
import {INK} from '../../shared/tokens';
import {MarkSpan} from '../../math/studio';

/** The heading with `marks` (exact substrings, in order) underlined from frame `at` in `color`. */
export const MarkedHeading: React.FC<{text: string; marks: readonly string[]; at: number; size?: number; color?: string; markColor?: string}> = ({text, marks, at, size = 50, color = INK, markColor = INK}) => {
	const parts: {t: string; m: boolean}[] = [];
	let rest = text;
	for (const m of marks) {
		const i = rest.indexOf(m);
		if (i < 0) continue;
		if (i > 0) parts.push({t: rest.slice(0, i), m: false});
		parts.push({t: m, m: true});
		rest = rest.slice(i + m.length);
	}
	if (rest) parts.push({t: rest, m: false});
	return (
		<div style={{position: 'absolute', left: 96, top: 92}}>
			<span style={{display: 'inline-block', fontFamily: FONT_HAND, fontWeight: 700, fontSize: size, color, lineHeight: 1.05, whiteSpace: 'pre', paddingRight: '0.12em'}}>
				{parts.map((p, i) => (p.m ? <MarkSpan key={i} kind="underline" at={at + i * 4} color={markColor} width={5}>{p.t}</MarkSpan> : <span key={i}>{p.t}</span>))}
			</span>
		</div>
	);
};
