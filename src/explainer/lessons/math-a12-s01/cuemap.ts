// Every cue phrase for math-a12-s01, resolved once at load against the measured word timings (a missing phrase
// throws here, before any scene renders). Repeated words name their occurrence: [phrase, n].
import {cue} from './common';

const C = <K extends string>(id: string, map: Record<K, string | [string, number]>): Record<K, number> => {
	const out = {} as Record<K, number>;
	for (const [k, v] of Object.entries(map) as [K, string | [string, number]][]) out[k] = Array.isArray(v) ? cue(id, v[0], v[1]) : cue(id, v);
	return out;
};

export const K1 = C('scene-01', {starts: 'starts something new', die: 'a die from', board: 'board game', four: 'A four came', watch: "Let's watch", faces: 'other faces', more: 'came up more', fair: ['fair', 1], before: 'Before we can', dist: 'probability distribution', how: 'So how do'});
export const K2 = C('scene-02', {first: 'First, a name', rv: 'A random variable', here: 'Here, X', face: 'top face', disc: "It's discrete", one: 'them: one', two: ['two', 1], three: 'three, four', four: ['four', 1], five: 'five and', six: 'six', write: 'We write', value4: 'value four', capital: 'Capital X', small: 'small x', when: "When it's", px: ['P of x', 2]});
export const K3 = C('scene-03', {now: 'Now turn', divide: 'Divide each', thirty: 'Thirty-eight out', nine: 'one nine', that: 'That fraction', watch: 'Now watch', bars: 'the bars', every: 'Every bar', these: 'These numbers', not: 'not equals', a: ['A relative frequency', 2], prob: 'The probability belongs', replay: 'Replay the', ten: 'After ten', fifty: 'After fifty', more: 'More rolls', est: ['estimate', 2]});
export const K4 = C('scene-04', {add: 'Add the six', one: ['one', 1], but: 'But adding', shows: 'only shows', why: "Here's why", every: 'Every roll', none: 'none is missed', so: 'So the six', rolls: 'number of rolls', divide: 'Divide that', one2: 'you get one', that: 'That works', rounded: 'Rounded ones'});
export const K5 = C('scene-05', {what: "What we've built", set: "It's the set", value: 'each value', two: 'two ways', table: 'A table gives', graph: 'A bar graph', shape: 'the shape', apart: 'The bars stand', between: 'in between', every: 'Every probability', one: 'add to one', both: 'Both checks', these: 'These three', minus: 'minus zero', dist: "isn't a distribution"});
export const K6 = C('scene-06', {data: 'Data is one', model: 'A model is', fair: 'If the die', sixth: 'one sixth, before', roll: 'single roll', given: 'given counts', told: 'told how', compare: 'Now compare', datagave: 'The data gave', says: 'The model says', seven: 'six seven', five: 'almost five', big: 'big gap', three: 'three runs', die: 'simulated fair die', look: 'Look how much', each: 'In each of', is: 'our four is', happens: 'happens easily', illus: "That's an illustration", strong: 'strong evidence'});
export const K7 = C('scene-07', {often: "Often there's", toss: 'Toss a fair', each: 'Each sequence', step1: 'Step one', can: 'X can be', three: 'or three', step2: 'Step two', eight: 'There are eight', head: 'exactly one head', p1: 'so P of one', step3: 'Step three', check: 'check', add: 'add to one', graph: 'The graph shows', sym: 'symmetric', times: ['three times', 2]});
export const K8 = C('scene-08', {here: "Here's a way", one: 'One trial', every: 'Every trial', counts: 'the counts add', probs: 'the probabilities add', if: 'If your'});
export const K9 = C('scene-09', {your: 'Your turn', pause: 'Pause here'});
export const K10 = C('scene-10', {two: 'Two came', seventy: 'seventy', fifty: ['fifty', 1], eight: 'two eight', reason: 'For the reason', dont: "don't just add", each: 'Each spin', counts: 'the counts add', dividing: 'dividing by', one: 'gives one', adding: 'Adding the estimates', it: 'explain it'});
export const K11 = C('scene-11', {last: 'Last one', pause: 'Pause here'});
export const K12 = C('scene-12', {two: 'or two', call: 'Call the', six: 'six possible', likely: ['likely', 1], one: 'One pair', four: 'four pairs', two2: 'two reds', so: 'So the probabilities', add: 'add to one', third: 'One third', three: 'Three values', likely2: ['likely', 2]});
export const K13 = C('scene-13', {so: 'So data give', model: 'a model gives', here: 'here with', next: 'Next, a question', for: 'For one fair', now: 'Now tear', date: 'The date could', thirty: 'the thirty-first', are: 'Are those'});
export const K14 = C('scene-14', {here: 'Here are the key', pause: 'Pause the video'});
