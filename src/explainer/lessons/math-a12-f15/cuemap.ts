// Every cue phrase for math-a12-f15, resolved once at load against the measured word timings (a missing phrase
// throws here, before any scene renders). Repeated words name their occurrence: [phrase, n].
import {cue} from './common';

const C = <K extends string>(id: string, map: Record<K, string | [string, number]>): Record<K, number> => {
	const out = {} as Record<K, number>;
	for (const [k, v] of Object.entries(map) as [K, string | [string, number]][]) out[k] = Array.isArray(v) ? cue(id, v[0], v[1]) : cue(id, v);
	return out;
};

export const K1 = C('scene-01', {last: 'Last video ended', holiday: 'saving for a holiday', want: 'you want six', end: 'end of every month', how: 'How much should', quick: 'A quick guess', which: 'which is two hundred', is: 'Is the real answer', guess: ['guess', 2]});
export const K2 = C('scene-02', {every: 'Every problem', check: 'check its conditions', start: 'start at zero', equal: 'payments equal', match: 'match how often', read: 'read at the end', want: 'want at the end', rounding: 'rounding to the cent', whole: 'a whole number', growth: 'more growth', conditions: 'those conditions'});
export const K3 = C('scene-03', {here: 'Here the payments', r: 'r is zero point', n: 'n is twenty-four', put: 'Put the goal', m: 'M is the unknown', six: 'Six thousand equals', fraction: 'That fraction', it: 'divide by it', mis: 'M is two hundred', cents: 'ninety-two cents', less: 'a little less', adds: 'interest adds', watch: 'watch the goal', reaches: 'reaches only', short: 'cents short', sure: 'To be sure', round: 'round up', three: 'ninety-three'});
export const K4 = C('scene-04', {over: 'Over a longer', say: 'Say the goal', dividing: 'Dividing by', but: 'But the same', round: 'round up', one: 'thirty-one', you: 'You deposit', interest: 'interest adds', thousand: 'eighty-five thousand'});
export const K5 = C('scene-05', {next: 'Next a different', four: 'Four hundred and fifty', there: 'There are twenty-six', r: 'so r is', n: 'and n is', fifty: 'six hundred and fifty', keep: 'Keep r', rounded: 'Rounded to', add: 'would add', future: 'The future value', cents: 'thirty-two cents'});
export const K6 = C('scene-06', {now: 'Now the time', back: 'Back to the holiday', how: 'How many deposits', set: 'Set six thousand', rearr: 'Rearranging gives', five: 'one point one five', power: 'is a power', take: 'take logs', nis: 'n is log', about: 'about twenty-eight', two: ['zero two', 1], but: 'But in this model', after: 'After twenty-eight', still: 'still short', round: 'So round up', deposits: 'twenty-nine deposits'});
export const K7 = C('scene-07', {last: 'The last condition', say: 'Say you deposit', grows: 'grows to', then: 'Then the trip', stop: 'The deposits stop', two: 'two stages', covers: 'formula covers', after: 'After that', twelve: 'to the twelve', final: 'The final balance', using: 'Using the annuity', made: 'never made'});
export const K8 = C('scene-08', {heres: "Here's a way", match: ['Match', 1], model: ['model', 1], finish: ['finish', 1], match2: ['Match r', 1], write: 'Write the model', then: 'Then finish', round: 'round the right'});
export const K9 = C('scene-09', {your: 'Your turn', pause: 'Pause here'});
export const K10 = C('scene-10', {q: 'Quarterly means', n: 'n is twenty-four', dividing: 'Dividing thirty', round: 'round up', cents: 'eight cents', twelve: 'Twelve hundred', divides: 'It divides', interest: 'the interest'});
export const K11 = C('scene-11', {last: 'Last one', pause: 'Pause here'});
export const K12 = C('scene-12', {two: 'Two stages', ten: 'The ten deposits', one: 'twenty-one', then: 'Then five years', times: 'Times one point', three: 'fifty-three', forty: 'Forty thousand', treats: 'It treats', made: 'never made'});
export const K13 = C('scene-13', {so: 'So every annuity', match: 'match model finish', end: "That's the end", next: 'Next something new', die: 'A die is rolled', four: 'the four comes', thirty: 'thirty-eight', fair: 'Is the die fair', like: 'look like'});
export const K14 = C('scene-14', {here: 'Here are the key', pause: 'Pause the video'});
