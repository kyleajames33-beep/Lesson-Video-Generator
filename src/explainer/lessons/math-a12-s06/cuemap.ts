// Every cue phrase for math-a12-s06, resolved once at load against the measured word timings (a missing phrase
// throws here, before any scene renders). Repeated words name their occurrence: [phrase, n].
import {cue} from './common';

const C = <K extends string>(id: string, map: Record<K, string | [string, number]>): Record<K, number> => {
	const out = {} as Record<K, number>;
	for (const [k, v] of Object.entries(map) as [K, string | [string, number]][]) out[k] = Array.isArray(v) ? cue(id, v[0], v[1]) : cue(id, v);
	return out;
};

export const K1 = C('scene-01', {last: 'Last video', where: 'Where is X', both: 'both answers', now: 'Now a cookie', ideal: 'In the ideal', let: 'Let X be', dist: 'distance from the centre', dens: 'Its density', climbs: 'It climbs', outer: 'outer rings', so: 'So distances', four: 'peaks at four', yet: 'Yet half', centre: ['of the centre', 1], apart: 'far apart', how: 'How do we'});
export const K2 = C('scene-02', {mode: 'The mode is', here: "Here's why", slide: 'Slide a narrow', catches: 'It catches', near1: 'Near one', near2: 'near zero point two', so: 'So the mode', F: 'not of F', only: 'F only builds'});
export const K3 = C('scene-03', {finding: 'Finding the peak', write: 'Write f', deriv: 'Its derivative', one: 'equals one', second: 'The second derivative', mode: 'The mode is one', quarters: 'three quarters', because: 'And because', median: 'the median is one', f1: 'F of one'});
export const K4 = C('scene-04', {but: 'But a density', cookie: 'For the cookie', deriv: 'the derivative is', keeps: 'The density keeps', four: 'mode is four', check: 'check the endpoints', flat: 'completely flat', mode: 'no single mode'});
export const K5 = C('scene-05', {now: 'Now the middle', median: 'The median', area: "That's an area", F: 'F already holds', solve: 'So we solve', cookie: 'For the cookie', pi: 'pi x squared', integ: 'Integrating x', so: 'So m squared', root: 'two root two', three: 'eight three', neg: 'The negative root', reject: 'we reject'});
export const K6 = C('scene-06', {q: 'The quartiles split', lower: 'The lower quartile solves', upper: 'the upper quartile solves', here: 'Here, the lower', six: 'four six', look: 'look at the cookie', circles: 'Circles at', sample: 'In this sample', real: 'A real cookie', narrower: 'get narrower', quarter: 'A quarter of', width: 'less width'});
export const K7 = C('scene-07', {one: 'One trap', median: 'The median comes', setting: 'Setting x', height: 'The height', area: 'half the area'});
export const K8 = C('scene-08', {try: 'Try one more', dens: 'A density is', its: 'and its F', keeps: 'The density keeps', two: 'at two', median: 'For the median', nine: 'five nine', lower: 'the lower quartile', six: 'two six', left: 'well left', low: 'The density is low'});
export const K9 = C('scene-09', {here: "Here's why", a: "A component's", that: 'That density', zero: 'mode is zero', its: 'Its F', setting: 'Setting F', so: 'So m is', hours: ['three hours', 1], half: 'Half of these', fifty: 'fifty minutes', most: 'The most likely'});
export const K10 = C('scene-10', {here: "Here's a way", mode: 'The mode is', median: 'The median and', for: 'For the median', axis: 'the axis'});
export const K11 = C('scene-11', {your: 'Your turn', find: 'Find the mode', pause: 'Pause here'});
export const K12 = C('scene-12', {expand: 'Expand f', or: 'or twelve', thats: "That's zero", thirds: ['two thirds', 1], but: 'But f of zero', at: 'At two thirds', so: 'So the mode', thirds2: ['two thirds', 3], zero: 'Zero is wrong', min: 'a minimum'});
export const K13 = C('scene-13', {last: 'Last one', find: 'Find the lower', pause: 'Pause here'});
export const K14 = C('scene-14', {solve: 'Solve F', so: 'So x squared', complete: 'Complete the', x: 'so x is', minus: 'Minus one minus', the: 'The lower quartile', three: 'seven three', keeping: 'Keeping both', domain: 'the domain'});
export const K15 = C('scene-15', {so: 'So the mode', next: 'Next', what: 'What if', no: "There's no", how: 'How high', what2: 'what does its'});
export const K16 = C('scene-16', {here: 'Here are the key', pause: 'Pause the video'});
