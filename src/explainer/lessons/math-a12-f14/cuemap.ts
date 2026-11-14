// Every cue phrase for math-a12-f14, resolved once at load against the measured word timings (a missing phrase
// throws here, before any scene renders). Repeated words name their occurrence: [phrase, n].
import {cue} from './common';

const C = <K extends string>(id: string, map: Record<K, string | [string, number]>): Record<K, number> => {
	const out = {} as Record<K, number>;
	for (const [k, v] of Object.entries(map) as [K, string | [string, number]][]) out[k] = Array.isArray(v) ? cue(id, v[0], v[1]) : cue(id, v);
	return out;
};

export const K1 = C('scene-01', {heres: "Here's last video's", three: 'Three hundred dollars', gives: 'gives twenty', you: 'You can change', dep: 'the deposit', rate: 'the rate', years: ['the number of years', 1], start: 'at the start', which: 'Which change makes', guess: 'Make a guess'});
export const K2 = C('scene-02', {an: 'An app like', to: 'To see what', one: 'one thing at a time', that: 'That way', exam: 'And in an exam', show: 'show the formula', tool: 'The tool is for', right: 'Right now', plus: ['plus two thousand', 1], interest: 'of interest'});
export const K3 = C('scene-03', {first: 'First, with no', double: 'double the deposit', fv: 'The future value becomes', cents: 'eleven cents', exactly: 'exactly double', heres: "Here's why", every: 'Every term', dbl: 'Double the deposit', total: ['the total doubles', 1], int: 'The interest doubles', share: 'same share'});
export const K4 = C('scene-04', {now: 'Now put the deposit', start: 'start with five', that: 'That five thousand', all: 'for all sixty', grows: 'It grows like', cents1: ['twenty cents', 1], deps: 'The deposits still', total: 'so the total is', cents2: 'twenty-six cents', add: 'just add'});
export const K5 = C('scene-05', {next: 'Next, double the rate', after: 'After five years', cents: 'sixteen cents', only: "That's only about", why: 'Why so little', deps: 'The deposits are still', interest: 'Only the interest', more: 'more than double', reaches: 'it reaches four', but: 'But over five', little: 'only a little'});
export const K6 = C('scene-06', {now: 'Now go back', five: 'Five years gives', ten: 'Ten years gives', nine: 'eighty-nine dollars', twenty: ['Twenty years gives', 1], thirty: ['thirty years gives', 1], each: 'Each extra year', adds: 'It adds twelve', every: 'every earlier deposit', grow: 'year to grow'});
export const K7 = C('scene-07', {now: 'Now try the higher', at48: ['At four point eight', 1], at96: 'At nine point six', cents: 'ninety-seven cents', over5: 'Over five years', over30: 'Over thirty', rate: 'The rate works', effect: 'its effect'});
export const K8 = C('scene-08', {heres: "Here's how big", nine: 'Nine thousand two', after: 'After forty years', deps: ['of deposits', 1], start: 'Start ten years later', those: 'Those first ten', ninety: 'ninety-two thousand', missing: 'missing them costs', longest: 'grow the longest'});
export const K9 = C('scene-09', {which: 'Which change wins', but: 'But the four inputs', dep: 'The deposit and', rate: 'The rate and the time', starts: 'starts small', heres: "Here's a way", money: 'Money in adds', comp: 'Rate and time compound'});
export const K10 = C('scene-10', {your: 'Your turn', pause: 'Pause here'});
export const K11 = C('scene-11', {fv: 'The future value doubles', in: 'In the formula', for: 'For example', four: 'and four hundred', saying: 'Saying it more', each: 'Each deposit still'});
export const K12 = C('scene-12', {last: 'Last one', pause: 'Pause here'});
export const K13 = C('scene-13', {at: 'At zero point', a: "Plan A's", b: "Plan B's", larger: 'Plan A is larger', saying: "Saying they're equal", equal: 'Equal deposits'});
export const K14 = C('scene-14', {so: 'So money in', now: 'Now flip', say: "Say you're saving", holiday: 'a holiday', goal: 'a goal of', what: 'What monthly deposit', there: 'gets you there'});
export const K15 = C('scene-15', {pause: 'Pause the video'});
