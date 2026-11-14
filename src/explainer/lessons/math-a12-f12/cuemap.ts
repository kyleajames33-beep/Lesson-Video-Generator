// Every cue phrase for math-a12-f12, resolved once at load against the measured word timings (a missing phrase
// throws here, before any scene renders). Repeated words name their occurrence: [phrase, n].
import {cue} from './common';

const C = <K extends string>(id: string, map: Record<K, string | [string, number]>): Record<K, number> => {
	const out = {} as Record<K, number>;
	for (const [k, v] of Object.entries(map) as [K, string | [string, number]][]) out[k] = Array.isArray(v) ? cue(id, v[0], v[1]) : cue(id, v);
	return out;
};

export const K1 = C('scene-01', {last: 'Last video ended', towards: 'towards a first', climbs: 'the balance climbs', now: 'Now put a', hundred: 'A hundred thousand', comes: 'comes out at', falls: 'the balance falls', one: 'One grows', same: 'the same kind', what: 'What do these'});
export const K2 = C('scene-02', {an: 'An annuity is', equal: 'equal payments', regular: 'regular times', comp: ['interest compounding', 1], means: 'Compounding means', two: 'There are two', first: 'In the first', second: 'In the second', single: 'one single sum', withd: 'equal withdrawals', same: 'Same size', pattern: "That's the pattern"});
export const K3 = C('scene-03', {lets: "Let's test", two: 'Two thousand dollars', is: 'Is that an', guess: 'Make a guess', isnt: "It isn't", deposits: 'Deposits of fifty', either: 'annuity either', putting: 'And putting money', regular: "isn't regular", but: 'But two hundred', is2: 'quarter is'});
export const K4 = C('scene-04', {now: 'Now look inside', say: 'Say it earns', so: 'So each month', then: 'and then the two', m1: 'Month one starts', just: 'is just two', m2: 'In month two', earns: 'earns one dollar', giving: 'giving four hundred', m3: 'Month three gives', cent: 'one cent', rule: "It's one rule", next: 'The next balance', plus: ['plus M', 1], first: 'The first deposit'});
export const K5 = C('scene-05', {a: 'A cash-flow diagram', zero: 'Time zero is', nothing: 'nothing goes in', each: 'Each arrow is', one: 'at one', two: ['two', 1], three: ['three', 1], upto: 'up to n', so: 'So n periods', deps: 'n deposits', future: 'The future value', last: 'That last deposit'});
export const K6 = C('scene-06', {now: 'Now the fund', first: 'In the first month', then: 'Then the withdrawal', leaving: 'leaving ninety-nine', cents: 'nine cents', rule: "Here's the rule", next: 'The next balance', loan: 'exactly the loan rule', a: 'A loan has', one: 'One sum goes', back: 'come back'});
export const K7 = C('scene-07', {why: 'Why does the fund', each: 'Each month the', so: 'So it falls', runs: 'runs out at', years: 'which is ten years', last: 'That last one', if: 'If you only', forever: 'forever', set: 'The withdrawal was set'});
export const K8 = C('scene-08', {one: 'One more condition', in: ['In this course', 1], five: 'Five hundred dollars', r: 'has r equal', n24: 'twenty-four months', not: 'not two', q: 'For quarterly', fort: 'For fortnightly', in2: ['In this course', 2], end: 'at the end of its'});
export const K9 = C('scene-09', {heres: "Here's a way", size: 'Same size', gap: ['same gap', 1], int: 'interest every gap', in: 'In goes a', always: 'always the same'});
export const K10 = C('scene-10', {your: 'Your turn', pause: 'Pause here'});
export const K11 = C('scene-11', {bd: 'B and D', b: 'B has equal', d: 'D starts with', c: "C isn't", choosing: 'Choosing A', it: 'It earns compound', no: 'There are no'});
export const K12 = C('scene-12', {last: 'Last one', pause: 'Pause here'});
export const K13 = C('scene-13', {six: 'Six per cent', so: 'So A sub', zero: 'equal to zero', then: 'Then A three', cent: 'one cent', a1: "A one isn't", first: 'The first deposit'});
export const K14 = C('scene-14', {so: 'So an annuity', super: 'Super works', picture: 'Picture a super', after: 'After five years', twelve: 'twelve thousand dollars', will: 'Will the balance', more: 'lot more'});
export const K15 = C('scene-15', {pause: 'Pause the video'});
