// Every cue phrase for math-a12-f11, resolved once at load against the measured word timings (a missing phrase
// throws here, before any scene renders). Repeated words name their occurrence: [phrase, n].
import {cue} from './common';

const C = <K extends string>(id: string, map: Record<K, string | [string, number]>): Record<K, number> => {
	const out = {} as Record<K, number>;
	for (const [k, v] of Object.entries(map) as [K, string | [string, number]][]) out[k] = Array.isArray(v) ? cue(id, v[0], v[1]) : cue(id, v);
	return out;
};

export const K1 = C('scene-01', {last: 'Last video ended', used: 'used motorbike', seven: 'seven point two', repaid: 'repaid at four', quick: 'A quick guess', fifty: ['fifty repayments', 1], but: 'But the first', hundred: 'a hundred and twenty', only: 'only two hundred', bike: 'pays off the bike', is: 'Is it fifty', about: 'about sixty', more: 'more than seventy', guess: ['guess', 2], race: 'the race', without: 'Without interest', gone: 'gone at fifty', with: 'With interest', sixty: ['sixty', 2]});
export const K2 = C('scene-02', {so: 'So how do we', start: 'Start with what', after: 'After the last', zero1: ['zero', 1], formula: 'a formula for', an: 'A sub n equals', here: 'Here P is', r: 'r is zero point', m: 'M is four', set: 'So we set', zero: 'equal to zero', unknown: 'the unknown is n'});
export const K3 = C('scene-03', {mult: 'Multiply both sides', first: "first month's interest", gather: 'Gather the powers', two80: 'two hundred and eighty', so: 'So one point', ten: ['ten sevenths', 1], take: 'Take logs', comes: 'comes down', nis: 'n is log', about: 'about fifty-nine', two: 'six two', this: 'This only works', matched: 'only matched', divide: 'divide by zero', less: 'If it were less', negative: 'negative'});
export const K4 = C('scene-04', {fifty: 'Fifty-nine point', after: 'After fifty-nine', owing: 'owing', needs: 'needs sixty', last: 'the last one', just: 'just two hundred', always: 'Always round', total: 'The total actually', lots: 'fifty-nine lots', plus: 'plus that last', which: 'which is twenty-three', cents: 'cents', take: 'Take away', bike: 'the bike cost', interest: 'in interest'});
export const K5 = C('scene-05', {now: 'Now turn it', say: 'Say you want', four: 'four years', what: 'What should each', set: 'Set A forty-eight', now2: 'now M is', add: 'Add the repayment', so: "so the loan's", then: 'Then multiply', divide: 'divide by the bracket', gives: 'That gives', one: 'minus one'});
export const K6 = C('scene-06', {here: 'Here P r', and: 'and one point', about: 'about one point three', so: 'So M is', over: 'over the power', which: 'which is four hundred', cents: 'seventy-eight cents', more: 'eighty dollars more', but: 'But forty-eight', add: 'add to about', less: 'less than before', debt: 'The debt is gone', altogether: 'altogether'});
export const K7 = C('scene-07', {one: 'One more question', at: 'At four hundred', still: 'still owed', two: 'after two years', that: "That's after twenty-four", use: 'use the same', twenty: 'Twenty thousand times', minus: 'minus four hundred', gives: 'gives twelve', cents: 'twenty-six cents', forty: 'forty per cent', only: 'only about thirty-six', because: 'because the early', most: 'most interest'});
export const K8 = C('scene-08', {heres: "Here's the idea", paid: 'Paid off means', set: 'Set it to zero', missing: 'missing', for: 'For the amount', work: 'just work out'});
export const K9 = C('scene-09', {your: 'Your turn', pause: 'Pause here'});
export const K10 = C('scene-10', {here: 'Here r is', n: 'n is two hundred', pr: 'P r is one', so: 'So M is', times: 'times one point', over: 'over that power', thats: "That's one thousand", cents: 'eight cents', and: 'and with two hundred', total: 'the total paid', twenty: 'fifty-nine dollars twenty', two: 'Two hundred and fifty thousand over', doesnt: "doesn't even cover", interest: "first month's interest"});
export const K11 = C('scene-11', {last: 'Last one', pause: 'Pause here'});
export const K12 = C('scene-12', {first: "The first month's", so: 'so one point', five: 'five hundred over', which: 'which is fifty', taking: 'Taking logs', n: 'n is about', nine: 'seven nine', round: 'Round up', forty: 'forty repayments', thirty: 'Thirty-nine is wrong', after: 'After thirty-nine', owing: 'dollars owing'});
export const K13 = C('scene-13', {so: 'So one formula', set: 'set the balance', just: 'just work it out', now: 'Now turn the money', instead: 'Instead of borrowing', save: 'you save towards', two: 'two hundred dollars', every: 'every month', earns: 'earns interest', how: 'How much will', years: 'five years'});
export const K14 = C('scene-14', {here: 'Here are the key', pause: 'Pause the video'});
