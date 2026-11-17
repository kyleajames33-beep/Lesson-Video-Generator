// Every cue phrase for math-a12-t03, resolved once at load against the measured word timings (a missing phrase
// throws here, before any scene renders). Repeated words name their occurrence: [phrase, n].
import {cue} from './common';

const C = <K extends string>(id: string, map: Record<K, string | [string, number]>): Record<K, number> => {
	const out = {} as Record<K, number>;
	for (const [k, v] of Object.entries(map) as [K, string | [string, number]][]) out[k] = Array.isArray(v) ? cue(id, v[0], v[1]) : cue(id, v);
	return out;
};

export const K1 = C('scene-01', {here: 'Here are two', high: 'high tide', low: 'low tide', water: 'The water keeps', same: 'same pattern', quantity: 'A quantity', periodic: 'called periodic', it: 'describe it', build: "Let's build"});
export const K2 = C('scene-02', {start: 'Start with', water: 'The water swings', mid: 'so the midline', five: 'is four point five', amp: 'The amplitude is', three: 'is three', so: 'So the curve'});
export const K3 = C('scene-03', {now: 'Now the period', assume: 'We assume', half: 'only half', hours: 'twelve hours', one: 'For one cycle', grow: 'grow by two', six: 'pi over six', rule: "That's the period rule"});
export const K4 = C('scene-04', {which: 'Which curve', at: 'At time zero', peak: 'its peak', so: 'So no slide', five: 'plus four point five', check: 'Check the other', six: 'equals six', tide: 'low tide', sine: 'A sine model', left: 'left by three', but: 'but cos is'});
export const K5 = C('scene-05', {now: 'Now use', what: "What's the water", inside: 'The inside is', three: 'two pi over three', cos: 'Cos of two', metres: 'three metres', on: 'On the graph', falling: 'still falling'});
export const K6 = C('scene-06', {hard: 'Harder question', one: "There's one cycle", times: 'two times', three: 'Three cos', quarter: 'a quarter', exact: "isn't an exact", inverse: 'use inverse cos', eight1: 'one point three one eight', t1: 'two point five two', sym: 'By symmetry', eight2: 'nine point four eight', so: 'So a boat', again: 'and again', model: 'The model repeats', hours: 'every twelve hours'});
export const K7 = C('scene-07', {remember: 'Remember the Ferris', here: "Here's one", follow: 'Follow one cabin', bottom: 'the bottom', as: 'As the wheel', wave: 'a wave', midline: 'Midline twelve', amp: 'amplitude ten', period: 'period sixty', thirty1: 'pi over thirty', starts: 'It starts', thirty2: 'cos of pi t over thirty', check: 'Check:', top: 'the top'});
export const K8 = C('scene-08', {when: 'When is the cabin', twelve: 'Twelve minus', half: 'minus a half', exact: "That's an exact", cos: 'Cos is minus', three: 'four pi over three', twenty: 'twenty seconds', seconds: 'forty seconds', on: 'On the wheel', up: 'way up', down: 'way down'});
export const K9 = C('scene-09', {here: "Here's a checklist", middle: 'Middle, half', start: ['period, start', 1], mid: 'The midline is', amp: 'The amplitude is', a: 'a is two pi', and: 'And the start', cos: 'cos if it starts', minus: 'minus cos', sine: 'and sine', up: 'going up'});
export const K10 = C('scene-10', {your: 'Your turn', pause: 'Pause here'});
export const K11 = C('scene-11', {mid: 'The midline c', twelve: 'half: twelve', amp: 'The amplitude k', five: 'two point five', six1: 'Six months', six2: 'pi over six', at: 'At t equals', hours: 'two five hours', an: 'An amplitude', half: 'not half'});
export const K12 = C('scene-12', {last: 'Last one', pause: 'Pause here'});
export const K13 = C('scene-13', {one: 'One point five', five: 'point seven five', half: 'is a half', sine: 'Sine is a half', six: 'five pi over six', mult: 'Multiply by', four: 'four thirds', second: 'twenty thirds of a second', pi: 'Pi over six is', time: 'not the time'});
export const K14 = C('scene-14', {so: 'So a sinusoidal', water: 'The water level', ordinary: 'an ordinary axis', next: 'Next', here: "Here's a phone's", text: 'a text message', photo: 'a photo', film: 'a film', whole: 'the whole phone', ruler: 'one ordinary ruler', see: 'see the text'});
export const K15 = C('scene-15', {here: 'Here are', pause: 'Pause the video'});
