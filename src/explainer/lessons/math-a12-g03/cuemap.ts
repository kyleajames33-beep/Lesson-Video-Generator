// Every cue phrase for math-a12-g03, resolved once at load against the measured word timings (a missing phrase
// throws here, before any scene renders). Repeated words name their occurrence: [phrase, n].
import {cue} from './common';

const C = <K extends string>(id: string, map: Record<K, string | [string, number]>): Record<K, number> => {
	const out = {} as Record<K, number>;
	for (const [k, v] of Object.entries(map) as [K, string | [string, number]][]) out[k] = Array.isArray(v) ? cue(id, v[0], v[1]) : cue(id, v);
	return out;
};

export const K1 = C('scene-01', {jar: 'each jar', ten: 'Ten thousand', phrase: 'one phrase', simple: 'Simple interest', same: 'same six hundred', arith: "That's an arithmetic", dollars: 'sixteen thousand dollars', comp: 'Compound interest', mult: 'multiplies', geo: "That's a geometric", eight: 'forty-eight', same2: 'Same numbers', so: 'So which words'});
export const K2 = C('scene-02', {here: 'Here are the finance', same: 'The same amount', pct: 'The same percentage', dep: 'Equal end-of-period', geoser: 'geometric series', fv: 'future value', r: 'all over r', loan: 'And equal repayments', zero: 'balance zero', period: 'rate for one period', which: 'Which model does', seconds: 'seconds', its: "It's a loan"});
export const K3 = C('scene-03', {so: "So here's that", buyer: 'A buyer', what: "What's the most", per: 'Per month', hundred: ['hundred', 2], paid: 'The loan is paid', zero: 'to zero', unknown: 'The unknown', move: 'Move the', p: 'P is about', nine: 'seventy-nine', because: 'Because', round: 'round down', sure: 'sure to clear', mult: 'Multiplying', total: 'total repaid', interest: 'interest'});
export const K4 = C('scene-04', {prob: 'Probability questions', lists: 'lists the values', one: ['one', 1], density: 'gives a density', area: 'total area', unif: 'If equal-width', flat: 'density is flat', normal: 'normally distributed', bell: 'a bell', probs: 'give the probabilities', test: "Here's a test", delivery: 'a delivery', seconds: 'seconds', cant: "can't tell", means: 'it means'});
export const K5 = C('scene-05', {first: 'First, suppose', uniform: 'is uniform', over20: 'one over twenty', more: 'More than', last: 'last two', ten: 'one in ten', now: 'Now suppose', normal: 'normally distributed', mean: 'mean fifty', fs: 'Fifty-eight is two', ab95: 'About ninety-five', outside: 'outside', half: 'half of that', cent: ['per cent', 3], same: 'Same threshold', diff: 'different answer', limited: 'limited to', piles: 'piles', there: 'out there'});
export const K6 = C('scene-06', {one: 'One more pair', spinner: 'a spinner', kx1: 'probability k x', second: 'In the second', cookie: 'a cookie', dens: 'has density', same: 'k the same', list: 'For the list', add: 'add to one', tenk: 'ten k', tenth: 'one tenth', forD: 'For the density', area: 'the area under', isone: 'four is one', triangle: 'a triangle', eightk: 'eight k', eighth: 'one eighth', cookieD: "cookie's density", sum: 'A sum of bars', diff: 'different values'});
export const K7 = C('scene-07', {here: "Here's the habit", words: 'The words pick', amount: 'Same amount', pct: 'Same percentage', list: 'A list', dens: 'A density', one: ['one', 2]});
export const K8 = C('scene-08', {your: 'Your turn', pause: 'Pause here'});
export const K9 = C('scene-09', {equal: 'Equal end-of-year', last: 'The last one', so: 'So the value', five: ['point zero five', 2], tf: 'twenty-five thousand', nine: 'seventy-nine', thirty: 'Thirty-two thousand', wrong: 'is wrong', start: 'the start'});
export const K10 = C('scene-10', {last: 'Last one', pause: 'Pause here'});
export const K11 = C('scene-11', {four: 'Four hundred', dev: 'standard deviations', about: 'About ninety-five', outside: 'outside', only: 'Only the lower', cent: ['per cent', 3], five: 'Five per cent is', both: 'both tails', well: 'well'});
export const K12 = C('scene-12', {so: 'So in every', last: "That's the last", here: 'Here are the three', diff: 'differentiation', integ: 'integration', models: 'models'});
export const K13 = C('scene-13', {here: 'Here are the key', pause: 'Pause the video'});
