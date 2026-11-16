// Every cue phrase for math-a12-s07, resolved once at load against the measured word timings (a missing phrase
// throws here, before any scene renders). Repeated words name their occurrence: [phrase, n].
import {cue} from './common';

const C = <K extends string>(id: string, map: Record<K, string | [string, number]>): Record<K, number> => {
	const out = {} as Record<K, number>;
	for (const [k, v] of Object.entries(map) as [K, string | [string, number]][]) out[k] = Array.isArray(v) ? cue(id, v[0], v[1]) : cue(id, v);
	return out;
};

export const K1 = C('scene-01', {last: 'Last video', soon: 'soon', first: 'First', bus: 'A bus comes', random: 'random moment', wait: 'will you wait', sim: "Let's simulate", classes: 'one-minute classes', level: 'roughly level', any: 'Any wait', stretch: 'no stretch', what: 'So what does', tall: 'how tall'});
export const K2 = C('scene-02', {eq: 'Equally likely', take: 'Take any two', eight: 'six to eight', must: 'They must carry', slide: 'Slide a window', change: "can't change", on: 'On a density', so: 'So equal widths', flat: 'has to be flat', outside: 'zero outside', because: 'because a wait'});
export const K3 = C('scene-03', {now: 'Now, how tall', total: 'The total area', here: 'Here the area', ten: 'ten times c', tenth: 'c is one tenth', means: 'That height means', each: 'each minute', same: 'The same works', rect: 'The rectangle is b', over: 'one over b', didnt: "We didn't", forced: 'forced it'});
export const K4 = C('scene-04', {chance: "what's the chance", area: "That's the area", four1: ['zero point four', 1], between: 'And between three', four2: ['zero point four', 2], frac: 'For a uniform model', where: 'Where the interval', width: 'only its width', same: "It's the same idea", if: 'If X is uniform', whole: 'the whole width', eighths: 'three eighths'});
export const K5 = C('scene-05', {here: "Here's a surprise", narrower: 'The narrower', what: 'What if X', half: 'to a half', rect: 'The rectangle is only', so: 'So to have', two: 'must be two', fine: 'A density of two', isnt: "It isn't", prob: 'Probability is area', one: 'exactly one'});
export const K6 = C('scene-06', {what: 'What about', back: 'Back at the bus', as: 'As t moves', changes: 'never changes', so: 'So F climbs', end: 'at the end', on: 'On any interval', fx: 'F of x is x', before: 'Before a', one: 'stays at one', check: 'You can check', integral: 'the integral from', gives: 'which gives'});
export const K7 = C('scene-07', {now: 'Now back to', say: "Say it's the time", interval: 'The interval is four', elsewhere: 'zero elsewhere', then: 'Then F of t', four: 'over four', chance: 'The chance the train', thats: "That's one minus", five: 'three seven five', and: 'And the chance it', half: 'quarter a half', two: "That's two of"});
export const K8 = C('scene-08', {this: 'This should feel', die: 'A fair die', sixth: 'one sixth', cont: 'A continuous uniform', because: 'And because', mode: 'no single mode'});
export const K9 = C('scene-09', {when: 'When is this', nothing: 'When nothing makes', turning: 'Turning up', rounding: 'The rounding error', half: ['to a half', 1], lengths: "if the lengths", but: 'But a reaction', those: 'Those times bunched', showed: 'histogram showed', flat: 'A flat model', prob: 'too much probability', and: 'And a bus wait', arrive: "you'd arrive"});
export const K10 = C('scene-10', {here: "Here's a way", flat: 'Flat, so one', and: 'And the probability', width: ['whole width', 1]});
export const K11 = C('scene-11', {your: 'Your turn', write: 'Write down', pause: 'Pause here'});
export const K12 = C('scene-12', {interval: 'The interval is five', elsewhere: 'zero elsewhere', from: 'From four to', half: 'which is a half', height: 'A height of one', width: 'The width is', not: 'not eight'});
export const K13 = C('scene-13', {last: 'Last one', find: 'Find k', pause: 'Pause here'});
export const K14 = C('scene-14', {more: 'More than six', so: 'So k minus six', five: 'zero point two five', then: 'Then k minus six', eight: 'k is eight', p3: 'So P of X', eighths: 'three eighths', six: ['Six over k', 2], thats: "That's the chance", four: 'twenty-four'});
export const K15 = C('scene-15', {so: 'So a uniform', next: 'Next', think: 'Think of the', balance: 'balance', and: 'And for a'});
export const K16 = C('scene-16', {here: 'Here are the key', pause: 'Pause the video'});
