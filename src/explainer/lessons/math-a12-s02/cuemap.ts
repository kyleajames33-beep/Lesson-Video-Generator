// Every cue phrase for math-a12-s02, resolved once at load against the measured word timings (a missing phrase
// throws here, before any scene renders). Repeated words name their occurrence: [phrase, n].
import {cue} from './common';

const C = <K extends string>(id: string, map: Record<K, string | [string, number]>): Record<K, number> => {
	const out = {} as Record<K, number>;
	for (const [k, v] of Object.entries(map) as [K, string | [string, number]][]) out[k] = Array.isArray(v) ? cue(id, v[0], v[1]) : cue(id, v);
	return out;
};

export const K1 = C('scene-01', {last: 'Last video', tear: 'Tear one page', but: 'But is every', guess: 'Make a guess', flip: "Let's flip", date: 'each date', jan: 'January has', feb: 'February stops', end: 'By the end', twelve: 'have twelve', ninth: 'twenty-ninth', seven: 'only seven', page: 'Every page is', isnt: "the date isn't", so: 'So when is'});
export const K2 = C('scene-02', {def: 'A discrete random', uniform: 'Uniform just', bars: 'row of bars', shared: 'And the shared', say: 'Say there are', must: 'They must add', c: 'and c is', page: 'The page itself', die: 'A fair die', sixth: 'one sixth', digit: 'A random digit', tenth: 'one tenth', so: 'So when something'});
export const K3 = C('scene-03', {why: 'So why', look: 'Look behind', first: 'The first of', month: 'every month', thirty: 'The thirty-first sits', short: 'too short', p1: 'So P of', p31: 'and P of the', test: "Here's the test", prop: 'Uniform is a', ask: 'Ask does', no: 'answer is no'});
export const K4 = C('scene-04', {classic: 'The classic', make: 'Make one die', three: 'four then three', gives: 'That gives', if: 'If you only', ways: 'two ways', twelve: 'A sum of twelve', outcome: 'one outcome', seven: 'A sum of seven', outcomes: 'six outcomes', so: 'So seven', not: 'sum is not'});
export const K5 = C('scene-05', {once: 'Once a', count: 'Count the values', digit: 'For a random', tenths: 'three tenths', careful: 'Be careful', suppose: 'Suppose X', twenty: 'Twenty minus', fifteen: 'is fifteen', both: 'Both ends', values: 'sixteen values', then: 'Then P of', quarter: 'one quarter'});
export const K6 = C('scene-06', {two: 'Two more', say: 'Say X is', p15: 'P of fifteen', because: 'because there are', nothing: 'It has nothing', that: 'That kind', likely: 'equally likely', back: 'work backwards', if: 'If every value', n: 'then n is', but: 'But zero point three', number: 'whole number', group: 'A group of'});
export const K7 = C('scene-07', {one: 'One last', watch: 'Watch what', grows: 'values grows', six: 'Six values', twelve: 'twelve, twenty-four', t24: 'twenty-four, forty-eight', t48: 'forty-eight', each: 'Each bar', shorter: 'shorter and', now: 'Now try', zero: 'If that probability', bigger: "If it's anything", either: 'Either way', thats: "That's why", cont: 'Continuous ones'});
export const K8 = C('scene-08', {here: "Here's a way", same: 'Same count', look: 'Look behind', only: 'This only', if: 'If every count', cal: "The calendar's"});
export const K9 = C('scene-09', {your: 'Your turn', pause: 'Pause here'});
export const K10 = C('scene-10', {values: 'The values are', four: ['four', 1], six: ['six', 1], twenty: ['twenty', 1], tenth: 'one tenth', greater: 'Greater than', sixteen: ['sixteen', 1], tenths: 'three tenths', wrong: 'Three twentieths', largest: 'Twenty is', values2: 'number of values'});
export const K11 = C('scene-11', {last: 'Last one', pause: 'Pause here'});
export const K12 = C('scene-12', {two: 'or two', count: 'Count the sectors', rem0: 'Remainder zero', each: 'sectors each', so: 'So the probabilities', isnt: "X isn't", saying: 'Saying', variable: 'fair variable'});
export const K13 = C('scene-13', {so: 'So a distribution', next: 'Next, a new', here: "Here's the fair", if: 'If these bars', balance: 'it balance'});
export const K14 = C('scene-14', {here: 'Here are the key', pause: 'Pause the video'});
