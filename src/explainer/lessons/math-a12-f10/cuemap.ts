// Every cue phrase for math-a12-f10, resolved once at load against the measured word timings (a missing phrase
// throws here, before any scene renders). Repeated words name their occurrence: [phrase, n].
import {cue} from './common';

const C = <K extends string>(id: string, map: Record<K, string | [string, number]>): Record<K, number> => {
	const out = {} as Record<K, number>;
	for (const [k, v] of Object.entries(map) as [K, string | [string, number]][]) out[k] = Array.isArray(v) ? cue(id, v[0], v[1]) : cue(id, v);
	return out;
};

export const K1 = C('scene-01', {heres: "Here's a home loan", repaying: 'Repaying two thousand', clears: 'clears it in thirty', term: 'called the term', calc: 'A mortgage calculator', now: 'Now suppose you pay', more: "That's about three", how: 'How much sooner', less: 'Less than a year', guess: 'Make a guess'});
export const K2 = C('scene-02', {look: 'Look at the first', interest: 'The interest is charged', either: 'either way', paying: 'Paying more', straight: 'straight to the debt', at30: 'At the thirty-year', falls1: 'falls by four', at25: 'At two thousand five', eight: 'by eight hundred', nearly: 'nearly twice', and: "And it doesn't stop", lower: 'The lower balance', debt: ['to the debt', 2]});
export const K3 = C('scene-03', {to: 'To see the whole', calc: 'A mortgage calculator', runs: 'runs the recurrence', mult: 'multiply by one plus', slide: 'Slide the repayment', reaches: 'reaches zero', last: 'That last one', twentytwo: "That's twenty-two", sooner: 'years sooner', answer: 'So the answer', smaller: 'That last repayment is', owed: "what's owed plus"});
export const K4 = C('scene-04', {heres: "Here's a graph", each: 'Each curve ends', thirty: 'Thirty years', t22: 'about twenty-two', t16: 'about sixteen', t13: 'about thirteen', step: 'Each step up', first: 'the first five hundred', next: 'the next saves', buys: 'buys less time'});
export const K5 = C('scene-05', {why: 'Why do the savings', only: 'Only the part', first: "The first month's interest", pay: 'Pay exactly that', stays: 'stays at four', called: "That's called an", less: 'Pay any less', grows: 'the balance grows', plot: 'Now plot the term', just: 'Just above the', s79: 'seventy-nine years', s36: 'thirty-six at', far: 'Far above it', flattens: 'the curve flattens', time: 'a little time'});
export const K6 = C('scene-06', {now: 'Now keep the repayment', each: 'Each rate is', at5: 'At five per cent', at4: 'At four per cent', at6: 'At six per cent', at7: 'at seven per cent', rise: 'a rate rise', fall: 'a fall of one', why: "Here's why", higher: 'A higher rate raises', closer: 'the closer that line', grows: 'the term grows'});
export const K7 = C('scene-07', {this: 'This matters most', with: 'With a rate fixed', stretches: 'stretches the term', at65: 'At six and a half', more: "That's more than", grows: 'the balance grows', never: 'never repaid', only: 'A loan only shrinks'});
export const K8 = C('scene-08', {heres: "Here's the idea", only: "Only what's left", bigger: 'A bigger repayment', higher: 'A higher rate', nothing: "if nothing's left", never: 'never shrinks'});
export const K9 = C('scene-09', {your: 'Your turn', pause: 'Pause here'});
export const K10 = C('scene-10', {monthly: 'The monthly rate', so: "so the first month's", which: 'which is one thousand', whole: "That's the whole", none: 'None of it', still: 'is still two hundred', every: 'every month', wrong: 'Two hundred months', dividing: 'Dividing the loan'});
export const K11 = C('scene-11', {last: 'Last one', pause: 'Pause here'});
export const K12 = C('scene-12', {find: 'Find fifteen years', across: 'go across', down: 'then down', its: "It's about three", doubling: 'Doubling the thirty-year', halving: "Halving the term doesn't"});
export const K13 = C('scene-13', {so: 'So paying more', calc: 'Calculators and graphs', but: 'But how do you', heres: "Here's a used motorbike", loan: 'a loan of twenty', seven: 'seven point two', comp: 'compounded monthly', reps: 'The repayments are', how: 'How many will it'});
export const K14 = C('scene-14', {here: 'Here are the key', pause: 'Pause the video'});
