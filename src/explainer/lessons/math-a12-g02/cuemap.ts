// Every cue phrase for math-a12-g02, resolved once at load against the measured word timings (a missing phrase
// throws here, before any scene renders). Repeated words name their occurrence: [phrase, n].
import {cue} from './common';

const C = <K extends string>(id: string, map: Record<K, string | [string, number]>): Record<K, number> => {
	const out = {} as Record<K, number>;
	for (const [k, v] of Object.entries(map) as [K, string | [string, number]][]) out[k] = Array.isArray(v) ? cue(id, v[0], v[1]) : cue(id, v);
	return out;
};

export const K1 = C('scene-01', {rain: 'rainwater tank', fast: 'how fast', notHow: 'not how much', second: ['second', 2], t: 'time t', area: 'an area', table: 'table of readings', every: 'Every one', notSame: 'not the same one', so: 'So how'});
export const K2 = C('scene-02', {first: 'The first thing', fn: 'function itself', plusc: 'fixes the plus', start: 'Starting from', change: 'changes between', def: 'use a definite', adds: 'adds up rate', below: 'parts below', area: 'the area between', split: 'split where', readings: 'only readings', trap: 'trapezoidal rule', which: 'Which one does', seconds: 'seconds', its: "It's a change", integral: "it's a definite"});
export const K3 = C('scene-03', {so: 'So find', look: 'Look inside', inside: 'The inside is', front: 'front', prim: 'So a primitive', at1: 'At one', litres: 'litres', never: 'never negative', curve: 'curve', gauge: "On the tank's gauge"});
export const K4 = C('scene-04', {now: 'Now the second', held: 'held five', find: 'Find the volume', t: 'time t', asks: 'asks for a function', vt: 'V of t is', at0: 'At t equals zero', four: 'four', sovt: 'So V of t', check: 'good check', v1: 'V of one', emo: 'which is e minus one', cancels: 'cancels'});
export const K5 = C('scene-05', {boat: 'small boat', three: ['three', 1], how: 'How far', zero: 'is zero', disp: 'the displacement', ends: 'ends exactly', but: 'But it did', neg: 'velocity is negative', drifts: 'drifts back', forward: 'comes forward', split: 'Split at two', first: 'first piece', second: 'the second is', count: 'Count both', eight: 'eight thirds', metre: 'metre', classic: 'Zero is the classic'});
export const K6 = C('scene-06', {last: 'Last kind', read: 'read every', eight: 'to eight', estimate: 'Estimate the water', noformula: "There's no formula", cant: "can't integrate", use: 'Use the trapezoidal', each: 'Each trapezium', strips: 'The strips are', h: 'h is two', ends: 'The ends', twice: 'twice', thats: "That's two over", tf: ['thirty-five', 1], about: 'So about', est: "It's an estimate", know: "don't know", readings: 'between readings'});
export const K7 = C('scene-07', {now: 'Now a quick', first: 'First, a', find: 'Find the population', sec1: ['seconds', 1], func: 'It asks for a function', second: 'Second, find', pi: 'two pi', curve: 'The curve crosses', split: 'split there', alone: 'integral alone', four: 'four', third: 'Third, estimate', formula: "there's a formula", noprim: 'no primitive', again: 'again'});
export const K8 = C('scene-08', {here: "Here's the decision", fn: 'Function', plusc: 'Plus C', change: 'Change', limits: 'Limits', area: 'Area', split: 'Split', table: 'Table', trap: 'Trapezia', then: 'Then look'});
export const K9 = C('scene-09', {your: 'Your turn', pause: 'Pause here'});
export const K10 = C('scene-10', {asks: 'It asks', vol: ['volume', 1], v: 'V equals', twenty: ['twenty', 2], at5: 'At t equals five', litres: 'litres', five: 'Five litres', change: 'the change', volume: ['volume', 2]});
export const K11 = C('scene-11', {last: 'Last one', pause: 'Pause here'});
export const K12 = C('scene-12', {top: 'The top', prim: 'so a primitive', below: 'below the axis', split: 'split at zero', left: 'left piece', five: ['five', 1], add: 'Add them', ten: 'ten', log52: 'Log of five', cancel: 'cancel'});
export const K13 = C('scene-13', {so: 'So for any', next: 'Next', here: 'Here are two', simple: 'simple interest', comp: 'compounded', annually: 'annually', which: 'Which model'});
export const K14 = C('scene-14', {here: 'Here are the key', pause: 'Pause the video'});
