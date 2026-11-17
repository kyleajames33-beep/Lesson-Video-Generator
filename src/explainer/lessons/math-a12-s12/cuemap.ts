// Every cue phrase for math-a12-s12, resolved once at load against the measured word timings (a missing phrase
// throws here, before any scene renders). Repeated words name their occurrence: [phrase, n].
import {cue} from './common';

const C = <K extends string>(id: string, map: Record<K, string | [string, number]>): Record<K, number> => {
	const out = {} as Record<K, number>;
	for (const [k, v] of Object.entries(map) as [K, string | [string, number]][]) out[k] = Array.isArray(v) ? cue(id, v[0], v[1]) : cue(id, v);
	return out;
};

export const K1 = C('scene-01', {last: 'Last video', until: 'Until now', time: 'This time', fixed: 'is fixed', dial: 'The filling machine', only: 'Only one percent', unknown: 'the unknown', where: 'Where must'});
export const K2 = C('scene-02', {key: "Here's the key", turn: 'Turn the dial', slides: 'slides to the right', smaller: 'gets smaller', at500: 'At a mean', fill: 'Fill two hundred', short: 'come up short', keep: 'Keep turning', percent: 'exactly one percent', sigmas: 'In sigmas', same: 'same curve', so: 'So a one percent', number: 'That number', job: 'So the job', mean: ['then the mean', 1]});
export const K3 = C('scene-03', {table: 'The table gives', mirrors: 'mirrors', right: 'And a right tail', left: 'percent to the left', search: 'So search', nine: ['nine nine', 1], at232: 'At two point three two', at233: 'and at two point three three', one: ['zero one', 1], closer: 'is closer', below: 'Four ninety is below', minus: ['minus two point three three', 1]});
export const K4 = C('scene-04', {now: 'Now put it', zed: 'Zed is x', eight: ['all over eight', 1], multiply: 'Multiply by eight', four: ['six four', 1], so: 'So mu is', ml: ['millilitres', 1], with: "With the table's", in: 'In words', mean: ['below the mean', 1]});
export const K5 = C('scene-05', {check: 'Check it forwards', nine: ['nine nine', 2], under: "That's just under", fill: 'Fill two hundred', short: 'come up short', picture: 'And the picture', shrinks: 'the tail shrinks', so: 'So, using', round: 'If you round', up: 'round up'});
export const K6 = C('scene-06', {spread: 'The spread can', bolts: 'Bolts are made', right: 'Right now sigma', rejected: ['are rejected', 1], maker: 'The maker wants', means: 'That means', sigma: 'is three sigma', so: 'So the one', three: 'Three sigma equals', mm: 'third of a millimetre', shrinking: 'Shrinking sigma', limits: 'inside the limits'});
export const K7 = C('scene-07', {when: 'When the percentage', cereal: 'Cereal boxes', mean: 'The mean is', under: 'underweight', largest: "What's the largest", tail: 'A left tail', table: 'The table gives', z575: 'so zed is about', then: 'Then five over', grams: 'one point nine four grams', round: 'round down', up: 'Round up to two', fails: 'which fails'});
export const K8 = C('scene-08', {two: 'two levers', keep: 'Keep sigma', three: ['Three seventy-five minus', 1], mu: ['so mu is', 1], short: "That's just short", grams: ['one six grams', 1], either: 'Either move', spread: 'shrink the spread'});
export const K9 = C('scene-09', {here: "Here's a way", area: 'Area to zed', find: 'Find the zed', solve: 'then solve', sketch: 'on a sketch'});
export const K10 = C('scene-10', {your: 'Your turn', find: 'Find the mean', pause: 'Pause here'});
export const K11 = C('scene-11', {two: 'Two percent', closer: 'is closer', mean: ['below the mean', 1], sigma: 'Sigma is three', five: ['six point one five', 1], grams: ['one five grams', 1], wrong: 'A thousand minus', cutoff: 'the cut-off'});
export const K12 = C('scene-12', {last: 'Last one', find: 'Find sigma', pause: 'Pause here'});
export const K13 = C('scene-13', {four: 'Four percent', five: ['one point seven five', 1], mean: 'above the mean', seven: 'Seven over sigma', hours: 'four hours', wrong: 'A zed of', negative: ["can't be negative", 1]});
export const K14 = C('scene-14', {so: 'So a probability', last: "That's the last", you: 'You can now', sigma: ['or sigma', 1], later: 'Later practice', course: 'the course'});
export const K15 = C('scene-15', {here: 'Here are the key', pause: 'Pause the video'});
