// Every cue phrase for math-a12-d19, resolved once at load against the measured word timings (a missing phrase
// throws here, before any scene renders). Repeated words name their occurrence: [phrase, n].
import {cue} from './common';

const C = <K extends string>(id: string, map: Record<K, string | [string, number]>): Record<K, number> => {
	const out = {} as Record<K, number>;
	for (const [k, v] of Object.entries(map) as [K, string | [string, number]][]) out[k] = Array.isArray(v) ? cue(id, v[0], v[1]) : cue(id, v);
	return out;
};

export const K1 = C('scene-01', {here: 'ended here', car: 'thousand dollar car', fifteen: ['fifteen percent', 1], right: 'Right now', year: 'dollars a year', but: 'But the rate', when: 'When the car', worth15: 'worth fifteen thousand', two: 'two thousand two hundred', fast: 'half as fast', half: 'Half the value', so: 'So what curve', and: "And what's the car"});
export const K2 = C('scene-02', {same: 'same multiple', prop: ['proportional', 1], watch: 'Watch what', lower: 'A lower point', falls: 'it falls', rule: 'the rule is', number: 'The number k', car: 'For the car', k: ['k is minus', 1], unit: 'its unit', because: 'because dollars', neg: 'If k is negative', pos: 'If k is positive'});
export const K3 = C('scene-03', {here: "Here's a curve", q: ['Q equals A', 1], check: "Let's check", earlier: 'From earlier', so: ['So d Q d t is', 1], which: 'which is k', and: ['And A e', 1], eq: ['d Q d t equals k Q', 1], any: 'works for any', zero: 'At t equals zero', start: 'A is the starting', car: 'For the car', a: 'A is thirty thousand', k: ['k is minus', 1], after: 'After eight years', about: 'about nine thousand', dollars: ['dollars', 1]});
export const K3A = C('scene-03a', {savings: 'Savings follow', pos: 'with k positive', five: ['Five thousand dollars', 1], six: 'six percent', is: ['is five thousand', 1], after: 'After eight years', that: "that's five thousand", about: 'about eight thousand', dollars: 'eighty dollars'});
export const K4 = C('scene-04', {take: 'Take A equals two', change: 'change k', with: 'With k positive', turn: 'Turn k down', flat: 'a flat line', falls: 'then falls', drops: 'it drops', decay: 'That decay curve', never: 'never reaches', positive: ['is positive', 1], so: 'So Q equals zero', asym: 'horizontal asymptote', growth: 'For growth', back: 'back in time', neg: 'make A negative', every: 'Every value', reflects: 'reflects in', still: 'It still obeys', same: 'same asymptote', but: 'But money', models: 'so models use', posA: 'a positive A', zero: 't from zero'});
export const K5 = C('scene-05', {town: 'A town had', twelve: 'twelve thousand in', when: 'when will it', let: 'Let t be', a: 'so A is ten', at5: 'At t equals five', e5k: 'so e to the five k', two: ['one point two', 1], take: 'Take the natural log', fivek: ['Five k is', 2], so: 'so k is', about: 'about point zero', year: 'per year'});
export const K6 = C('scene-06', {now: 'Now set P', div: 'Dividing by', two: 'equals two', kt: 'So k t is', t: 'and t is', thats: "That's five times", about: 'about nineteen', so: 'So, if the growth', during: 'during twenty', keep: 'Keep k exact'});
export const K7 = C('scene-07', {half: 'a half-life of', means: 'That means', halves: 'amount halves', start: 'Start with', so: 'so a hundred equals', gives: 'That gives', twelvek: 'so twelve k is', k: 'So k is minus', sign: 'that minus sign', decay: 'the decay', after30: 'After thirty years', which: 'which is two hundred', about: 'about thirty-five', grams: 'four grams'});
export const K8 = C('scene-08', {equal: 'Equal times', any: 'In any five', because: 'because e', so: 'So ten thousand', twelve: 'becomes twelve', fourteen: 'then fourteen', soon: 'and so on', passing: 'passing twenty', thirty: 'twenty thirty', every: 'And every twelve', halves: 'substance halves', thirtyY: 'Thirty years is', between: 'between fifty', grams: 'twenty-five grams', only: 'This only works'});
export const K9 = C('scene-09', {pause: 'Pause here'});
export const K10 = C('scene-10', {doubling: 'Doubling means', sixteen: 'sixteen hundred equals', so: 'so e to the ten k', k: 'and k is', ten: 'over ten', after: 'After fifteen', about: 'about two thousand', sixty: 'sixty-three', not: "It's not", halfway: 'halfway', growth: "Growth isn't", line: 'straight line'});
export const K11 = C('scene-11', {pause: 'Pause here'});
export const K12 = C('scene-12', {ten: 'Ten years is', quarter: 'a quarter', grams: 'twenty-five grams', with: 'With k equal', rate: 'the rate is k', now: 'mass now', so: 'So d Q d t', about: 'about minus three', year: 'grams per year', using: 'Using the starting', gives: 'gives minus thirteen', thats: "That's the rate", notAt: 'not at ten'});
export const K13 = C('scene-13', {so: 'So a rate', picks: 'picks one curve', next: 'Next', if: 'If f prime', two: 'is two x', which: 'which functions', how: 'how does one', them: 'of them'});
export const K14 = C('scene-14', {pause: 'Pause the video'});
