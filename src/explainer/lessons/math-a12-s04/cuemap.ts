// Every cue phrase for math-a12-s04, resolved once at load against the measured word timings (a missing phrase
// throws here, before any scene renders). Repeated words name their occurrence: [phrase, n].
import {cue} from './common';

const C = <K extends string>(id: string, map: Record<K, string | [string, number]>): Record<K, number> => {
	const out = {} as Record<K, number>;
	for (const [k, v] of Object.entries(map) as [K, string | [string, number]][]) out[k] = Array.isArray(v) ? cue(id, v[0], v[1]) : cue(id, v);
	return out;
};

export const K1 = C('scene-01', {sofar: 'So far', now: 'Now X', measure: 'measure it', at: 'At an athletics', sensors: 'sensors in the', reads: 'One reads', p35: ['zero point three five seconds', 1], finer: 'a finer timer', p3517: 'three five one seven', more: 'more digits', so: "So what's", exactly: 'exactly zero point', guess: 'Make a guess'});
export const K2 = C('scene-02', {here: "Here's an", time: 'Time is a', ideal: 'For an ideal', ones: 'just ones', instead: 'Instead', classes: 'into classes', twenty: ['Twenty land', 1], fifty: 'then fifty', seventy: 'seventy', forty: 'forty and', twenty2: ['twenty', 2], hist: "That's a histogram", touch: 'bars touch', gaps: 'no gaps'});
export const K3 = C('scene-03', {what: "What's the", two: 'Two classes', fifty: 'with fifty', so: 'So the estimate', six: 'zero point six', each: "Each class's", rel: 'relative frequency', add: 'add to one', because: 'because every'});
export const K4 = C('scene-04', {what: 'What about', cuts: 'That cuts', where: "doesn't say", usual: 'The usual', spread: 'spread evenly', then: 'Then about', five: ['two five', 2], add: 'Add the twenty', thats: "that's forty", answer: ['zero point two two five', 1], exam: 'In an exam', write: 'write that'});
export const K5 = C('scene-05', {class: 'The class', shrink: 'Shrink it to one hundredth', hundredth: 'one hundredth', with: 'With the times', tenth: 'a tenth', so: 'so about', thousandth: 'one thousandth', about2: ["it's about", 1], under: 'Under that', step: 'in step', single: 'A single exact', width: 'width zero', its: 'its probability', zero: ['is zero', 1]});
export const K6 = C('scene-06', {but: "But someone's", prob: 'Probability zero', some: 'Some exact', no: 'but no single', intervals: 'Intervals do', like: 'like zero', seconds: 'seconds', events: 'the events'});
export const K7 = C('scene-07', {ends: 'The ends', so: 'So including', diff: 'no difference', thats: "That's not true", discrete: 'discrete variable', fair: 'For a fair', both: 'including both', four: 'four sixths', strictly: 'strictly between', two: 'two sixths', each: 'a sixth each'});
export const K8 = C('scene-08', {there: 'There are', one: 'one function', cdf: 'The cumulative', is: 'is F of x', cum: 'Cumulative means', for: 'For the reaction', add: 'Add the classes', p1: ['zero point one', 1], p35: 'zero point three five', p7: ['zero point seven', 1], p9: 'zero point nine', one1: 'and one', now: 'Now the probability', f4: 'F of zero point four', minus: ['minus', 1], thats: "That's zero point seven", six: 'zero point six', same: 'the same as before'});
export const K9 = C('scene-09', {as: 'As x moves', gain: 'only gain', so: 'So F never', we: 'We say', starts: 'starts at zero', range: 'the range', no: 'no jumps', jump: 'a jump would'});
export const K10 = C('scene-10', {now: 'Now a C D F', f: 'F of x is', zero: 'zero below', one: 'one above', valid: 'Is it valid', at0: 'At zero', at3: 'at three', join: 'pieces join', deriv: 'Its derivative', never: 'is never negative', graph: 'Graph it', flat: 'flat at zero', leaves: 'leaves the origin', curves: 'curves up', point: 'the point three', stays: 'stays flat', not: "It's not a straight"});
export const K11 = C('scene-11', {find: 'Find the', thats: "That's F of two", four: 'four ninths minus', third: 'one third', prob2: 'The probability that X is more than two', five: 'five ninths', and: 'And the probability', zero: 'is zero', cont: 'X is continuous'});
export const K12 = C('scene-12', {two: 'Two short', first: 'First', points: 'points carry', second: 'Second', bigger: 'the bigger end', smaller: 'smaller end', if: 'If you ever', negative: 'negative answer', wrong: 'wrong way round'});
export const K13 = C('scene-13', {your: 'Your turn', masses: 'The masses', estimate: 'Estimate the', pause: 'Pause here'});
export const K14 = C('scene-14', {half: 'in half', assume: 'Assume its', eighty: 'about eighty', add: 'Add the forty', thats: "That's one hundred", three: 'zero point three', wrong: 'Zero point five is wrong', counts: 'It counts'});
export const K15 = C('scene-15', {last: 'Last one', find: 'Find the', pause: 'Pause here'});
export const K16 = C('scene-16', {its: "It's F of", five: ['zero point five', 1], ends: 'The endpoints', f15: ['F of one point five', 2], f05: ['F of zero point five', 2], so: 'So the answer', half: 'one half', wrong: 'Minus one half', subtracts: 'It subtracts', negative: 'be negative'});
export const K17 = C('scene-17', {next: 'Next', here: "Here's F", slowly: 'climbs slowly', steeply: 'and steeply', what: 'What does', are: 'X are'});
export const K18 = C('scene-18', {here: 'Here are the key', pause: 'Pause the video'});
