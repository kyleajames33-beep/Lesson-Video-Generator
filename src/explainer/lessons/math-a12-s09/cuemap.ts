// Every cue phrase for math-a12-s09, resolved once at load against the measured word timings (a missing phrase
// throws here, before any scene renders). Repeated words name their occurrence: [phrase, n].
import {cue} from './common';

const C = <K extends string>(id: string, map: Record<K, string | [string, number]>): Record<K, number> => {
	const out = {} as Record<K, number>;
	for (const [k, v] of Object.entries(map) as [K, string | [string, number]][]) out[k] = Array.isArray(v) ? cue(id, v[0], v[1]) : cue(id, v);
	return out;
};

export const K1 = C('scene-01', {last: 'Last video', machine: 'The machine aims', most: 'Most bags land', images: 'mirror images', fill: 'bags fill', each: 'Each one gets', heights: 'Heights, measurement', so: 'So why does', when: 'When can we', us: 'tell us'});
export const K2 = C('scene-02', {here: "Here's one reason", lots: 'Lots of small', pegs: 'rows of pegs', each: 'Each peg nudges', far: 'To land at the far', that1: ['path does that', 1], one: 'To land one bin', twelve: 'so twelve paths', middle: 'To land in the middle', that2: ['paths do that', 1], so: 'So the dots', sides: 'both sides', when: 'When many small', bell: 'close to a bell'});
export const K3 = C('scene-03', {smooth: 'The smooth bell', things: 'occurring things', like: 'like adult heights', any: 'A bag can have', just: 'Just as in', area: 'the area over', fit: 'The fit is never', peak: 'one peak', tails: 'the tails have'});
export const K4 = C('scene-04', {so: 'So what does', sym: 'The curve is symmetric', fold: 'Fold it at', too: 'median too', high: 'The curve is highest', mode: 'also the mode', same: 'Mean, median and mode', most: 'Most of the area', thats: "That's why most", tails: 'Its tails get', never: 'never touch it', forever: 'goes on forever', dirs: 'both directions'});
export const K5 = C('scene-05', {we: 'We write X', this: 'like this', first: 'The first number', second: 'The second is', bags: 'The bags are', grams: 'four grams', change: 'Change mu', axis: 'along the axis', make: 'Make sigma bigger', one: 'stay one', wide: 'one and a half', third: 'two thirds'});
export const K6 = C('scene-06', {so: 'So when is', dirs: 'both directions', lay: 'Then lay the', clues: 'These are clues', many: 'Many small', water: 'Household water', right: 'to the right', bus: 'The bus wait', bell: 'not a bell', life: "And a component's", off: 'trails off', those: 'For those'});
export const K7 = C('scene-07', {in: 'In a normal model', bag: 'A bag is underweight', thats: "That's the area", inf1: ['minus infinity', 1], single: 'A single value', model: 'The model even', useful: 'still useful', over: 'A bag over', inf2: ['plus infinity', 1]});
export const K8 = C('scene-08', {one: 'One eighty is', area: 'the same area', and: 'And the bags', tails: 'minus both tails', mean: 'The mean splits', each: 'Each half is', you: 'You can find', curve: 'shape of the curve'});
export const K9 = C('scene-09', {here: "Here's a way", mirror: 'Mirror, middle', halves: 'The halves mirror', forever: ['on forever', 1]});
export const K10 = C('scene-10', {your: 'Your turn', pause: 'Pause here'});
export const K11 = C('scene-11', {first: 'The first number', four: ['is sixty-four', 1], too: 'sixty-four too', second: 'The second number', mm: 'six millimetres', a: 'A standard deviation', squared: 'sigma squared'});
export const K12 = C('scene-12', {last: 'Last one', pause: 'Pause here'});
export const K13 = C('scene-13', {two: 'Two fifty-eight', below: 'eight grams below', sym: 'The curve is symmetric', eight: ['zero five four eight', 1], middle: 'The middle is', four: 'eight nine zero four', one: 'One minus zero', tail: 'the left tail'});
export const K14 = C('scene-14', {so: 'So check the', next: 'Next', mark: 'Mark one sigma', marks: 'those marks', what: 'And what about', three: 'or three'});
export const K15 = C('scene-15', {here: 'Here are the key', pause: 'Pause the video'});
