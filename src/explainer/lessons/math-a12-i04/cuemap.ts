// Every cue phrase for math-a12-i04, resolved once at load against the measured word timings (a missing phrase
// throws here, before any scene renders). Repeated words name their occurrence: [phrase, n].
import {cue} from './common';

const C = <K extends string>(id: string, map: Record<K, string | [string, number]>): Record<K, number> => {
	const out = {} as Record<K, number>;
	for (const [k, v] of Object.entries(map) as [K, string | [string, number]][]) out[k] = Array.isArray(v) ? cue(id, v[0], v[1]) : cue(id, v);
	return out;
};

export const K1 = C('scene-01', {zero: 'divide by zero', fund: "A fundraiser's", onday: 'On day t', day: ['dollars a day', 1], so: 'So the total', gradient: 'has gradient a thousand', question: 'this question', first: 'The first term is done', second: 'The second is still', waiting: 'waiting', which: 'So which curve', abs: 'absolute value', mod: 'mod x'});
export const K2 = C('scene-02', {think: 'Think about', want: 'We want a curve', height: 'equals the height', positive: 'For positive x', deriv: 'The derivative of the natural', at2: 'At x equals two', half: 'one half', same: 'the same as the height', but: 'But one over x has', negative: 'negative', exist: "doesn't exist"});
export const K3 = C('scene-03', {left: 'On the left', downhill: 'downhill', near: 'Near zero', flatten: 'flatten out', thats: "That's the log curve", axis: 'axis', mirroring: 'Mirroring left', slope: 'every slope', atm2: 'At x equals minus two', half: ['one half', 1], minushalf: 'is minus a half', this: 'This mirrored curve', chain: 'The chain rule', its: 'Its derivative', inner: 'the inner derivative', thats1: "That's one over x"});
export const K4 = C('scene-04', {put: 'Put the two', positive: 'For positive x', negative: 'for negative x', both: 'Both are', mod: 'Mod x is the size', watch: 'Now watch', piece: 'each piece', exactly: 'exactly', so: 'So the integral'});
export const K5 = C('scene-05', {notice: 'Notice the gap', fill: "doesn't fill the gap", two: 'two separate pieces', right: 'Slide the right', change: "don't change", left: 'Slide the left', true: 'is true', nothing: 'Nothing joins', own: 'its own constant', diff: 'Differentiate any', question: 'In a question'});
export const K6 = C('scene-06', {back: 'Back to the waiting', four: 'Four over x is', its: 'so its integral', modx: ['mod x', 1], add: 'Add the first', one: 'one constant', answer: 'whole answer', thats: "That's two thirds", zero: 'not equal to zero', diff: 'Differentiate back', two: 'Two thirds times', comes: 'comes back'});
export const K6A = C('scene-06a', {back: 'Back to the fundraiser', total: 'Its total', here: 'Here t is positive', after: 'After day one', ln1: 'the natural log of one', cIs: 'so C is', thousand: ['two thousand', 2], each: 'Each time the number', same: 'the same amount', dollars: 'ninety-three dollars', never: 'It never stops', down: 'slowing down'});
export const K7 = C('scene-07', {now: 'Now a reciprocal', find: 'Find the integral', tryit: 'Try the natural', chain: 'By the chain rule', want: 'twice what we want', graph: 'On the graph', squashed: 'squashed sideways', slid: 'then slid along', slide: 'The slide changes', every: 'every one', same: "It's the same cause", divide: 'divide by the inner rate', answer: 'The answer is', C: ['plus C', 1], too: 'The gap moves too', zero: 'is zero at', works: 'so the answer works', across: 'not across it'});
export const K8 = C('scene-08', {what: 'What if the top', find: 'Find the integral', look: 'Look at the bottom', its: 'Its derivative is', top: 'exactly the top', chain: 'By the chain rule', so: 'So this integral', here: 'Here, x squared', positive: 'always positive', go: 'can go', every: 'works for every x', but: 'But if the bottom', change: 'change sign', keep: "you'd keep", gaps: 'with gaps'});
export const K9 = C('scene-09', {one: 'One more from', find: 'Find the integral', last: 'Last video gave', three: 'Three over x gives', sq: 'And x squared gives', plusC: 'One plus C', zero: "x can't be zero"});
export const K10 = C('scene-10', {pattern: "Here's the pattern", when: 'When the top', answer: 'the answer is', multiple: 'constant multiple', fix: 'fix the number', keep: 'And keep the absolute', positive: 'always positive'});
export const K11 = C('scene-11', {pause: 'Pause here'});
export const K12 = C('scene-12', {bottom: 'The bottom, three', three: 'derivative three', six: 'and six is two', so: 'So the answer', C: 'plus C', diff: 'Differentiate back', valid: "It's valid for", third: 'one third', wrong: 'Six times the log', forgets: 'It forgets'});
export const K13 = C('scene-13', {pause: 'Pause here'});
export const K14 = C('scene-14', {deriv: "The bottom's derivative", third: 'a third of that', so: 'So the answer', C: 'plus C', zero: 'The bottom is zero', less: 'x less than two', greater: 'greater than two', drop: 'Dropping the absolute', for: ['For x less than two', 2], exist: "doesn't exist"});
export const K15 = C('scene-15', {so: 'So one over x', mirrored: 'mirrored log', next: 'Next, the trig', here: "Here's y equals", which: 'Which curve', cos: 'cos x', else: 'something else'});
export const K16 = C('scene-16', {pause: 'Pause the video'});
