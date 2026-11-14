// Every cue phrase for math-a12-f13, resolved once at load against the measured word timings (a missing phrase
// throws here, before any scene renders). Repeated words name their occurrence: [phrase, n].
import {cue} from './common';

const C = <K extends string>(id: string, map: Record<K, string | [string, number]>): Record<K, number> => {
	const out = {} as Record<K, number>;
	for (const [k, v] of Object.entries(map) as [K, string | [string, number]][]) out[k] = Array.isArray(v) ? cue(id, v[0], v[1]) : cue(id, v);
	return out;
};

export const K1 = C('scene-01', {last: 'Last video ended', two: 'Two hundred dollars', super: 'super account', steady: 'steady six', comp: 'compounded monthly', sixty: 'sixty deposits', twelve: 'twelve thousand dollars', will: 'Will the balance', little: 'a little more', lot: 'a lot more', guess: 'guess', run: 'You could run', slow: 'slow', faster: 'a faster way', follow: 'follow each deposit'});
export const K2 = C('scene-02', {take: 'Take the very last', read: 'is read straight', all: 'at all', worth: "It's worth two", before: 'The one before', one: 'one month to grow', which: 'which is two hundred', first: 'the very first', fifty: 'fifty-nine months', its: ["It's worth", 2], three: 'forty-three', every: 'Every deposit earns'});
export const K3 = C('scene-03', {so: 'So the future value', write: 'Write them newest', two: 'Two hundred plus', sq: 'squared', up: 'up to two', nine: 'to the fifty-nine', sixty: 'sixty terms', each: 'And each term', five: ['five', 4]});
export const K4 = C('scene-04', {geo: 'a geometric series', first: 'first term is', ratio: 'its ratio is', sixty: 'sixty terms', you: 'You already have', a: 'a times r', where: 'where r was', here: "Here that's", over: 'all over', thats: "That's thirteen", cent: ['cent', 1], so: "So it's a little", five: 'Five years', average: 'the average deposit', half: 'a half years', stays: 'stays fairly small', on: 'On the statement', earnings: 'earnings'});
export const K5 = C('scene-05', {does: 'Does this agree', use: 'Use three deposits', sum: 'The sum is', thats: "That's six hundred", exactly: 'exactly the balance', months: 'three months', rule: 'The rule adds', sumadds: 'The sum adds', same: 'the same balance'});
export const K6 = C('scene-06', {gen: 'In general', end: ['end of each period', 1], future: 'then the future value', over: 'all over r', ratio: 'The ratio of the series', not: 'not r so', bottom: 'its bottom line', has: 'The formula has', pay: 'Payments come', read: 'is read at', starts: 'The account starts', rate: 'the rate per period', periods: 'counts the periods'});
export const K7 = C('scene-07', {lets: "Let's use it", three: 'Three hundred dollars', what: 'What is the balance', first: 'First match', rate: 'The rate per month', five: 'five years is sixty', months: 'sixty months', so: 'So the future value', thats: "That's twenty thousand", cents: ['five cents', 1], put: 'You put in', interest: 'the interest is'});
export const K8 = C('scene-08', {super: 'Super runs', thirty: 'thirty years', put: 'You put in', but: 'but the balance', cents: 'twenty-four cents', why: 'Why so much', early: 'The early deposits', interest: 'starts earning', watch: 'Watch the gap', widens: 'widens', after: 'After about', overtaken: 'overtaken', in: ['put in', 3]});
export const K9 = C('scene-09', {heres: "Here's a way", last: 'Last in earns', with: 'With a positive', first: 'first in earns', list: 'List the deposits', each: 'each one is', thats: "That's n terms", first2: 'first term M', ratio: 'ratio one plus'});
export const K10 = C('scene-10', {your: 'Your turn', pause: 'Pause here'});
export const K11 = C('scene-11', {last: 'The last deposit', first: 'the first earns', interest: 'of interest', so: 'So the sum', up: 'up to nine', thats: "That's four thousand", cents: 'seven cents', five: 'Five thousand', wrong: 'is wrong', pays: 'It pays every', start: 'the start'});
export const K12 = C('scene-12', {last: 'Last one', pause: 'Pause here'});
export const K13 = C('scene-13', {monthly: 'Monthly deposits', zero: 'zero point zero zero three', n: 'n is twenty-four', so: 'So the future value', three: ['sixty-three', 1], interest: 'the interest is', five: 'Five hundred and nine', uses: 'It uses the', less: "it's less than", themselves: 'themselves'});
export const K14 = C('scene-14', {so: 'So a future value', one: 'one term for each', back: 'Back to three', app: 'savings app', what: 'What would make', deposit: 'bigger deposit', rate: 'higher rate', years: 'more years', start: 'to start'});
export const K15 = C('scene-15', {here: 'Here are the key', pause: 'Pause the video'});
