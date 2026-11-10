// Every cue phrase for math-a12-d17, resolved once at load against the measured word timings (a missing phrase
// throws here, before any scene renders). Repeated words name their occurrence: [phrase, n].
import {cue} from './common';

const C = <K extends string>(id: string, map: Record<K, string | [string, number]>): Record<K, number> => {
	const out = {} as Record<K, number>;
	for (const [k, v] of Object.entries(map) as [K, string | [string, number]][]) out[k] = Array.isArray(v) ? cue(id, v[0], v[1]) : cue(id, v);
	return out;
};

export const K1 = C('scene-01', {now: "Now let's", laptop: 'This laptop', launch: 'at launch', fast: 'then fast', level: 'level off', from: 'From this graph', views: ['new views', 1], byEnd: 'By the end'});
export const K2 = C('scene-02', {y: 'y equals', max: 'local maximum', min: 'local minimum', infl: 'an inflection', enough: 'Are those', points: ['all three points', 1], lines: 'straight lines', wrong: 'Both are wrong', rules: 'What rules', constraints: 'constraints'});
export const K3 = C('scene-03', {fp: ['f prime of x', 1], pos: 'positive when', neg: 'negative between', again: 'positive again', one: ['after one', 1], rise: 'must rise', look: 'Now look', climbs: 'it climbs', fall: 'must fall', out: "it's out", each: 'Each sign'});
export const K4 = C('scene-04', {cant: "can't rule", fpp: 'f double prime', lessThan: ['For x less', 1], cap: 'like a cap', greater: 'For x greater', cup: 'like a cup', straight: 'Straight lines', corners: 'sharp corners', flat: 'smooth and flat', origin: 'At the origin', infl: ["that's the inflection", 1], grad: 'The gradient there', nonh: 'non-horizontal'});
export const K5 = C('scene-05', {sym: 'Symmetry', fmx: 'f of minus', odd: 'is odd', give: 'Give the right', turn: 'half turn', lands: 'lands exactly', half: 'left half', icpt: 'Intercepts', xtimes: 'x times', root3: 'root three', three: 'seven three', ends: 'And the ends', wins: 'term wins', right: 'on the right', left: ['on the left', 2], label: 'Label every'});
export const K6 = C('scene-06', {domain: 'domain', sym: 'symmetry', icpt: 'intercepts', stat: 'stationary points', conc: 'concavity and', asym: 'asymptotes and', ends: 'what happens', poly: 'For a polynomial', line: 'one line', next: 'The next curve'});
export const K7 = C('scene-07', {sketch: 'Sketch', domain: 'Domain first', zero: ["can't be zero", 1], pieces: 'separate pieces', odd: "It's odd", none: 'no intercepts', because: 'because', fp: 'f prime of', zeroAt: 'zero at one', minusOne: ['and minus one', 1], fpp: 'f double prime', at1: ['At one', 2], pos: "it's positive", min: 'local minimum', atM1: 'At minus one', neg: "it's negative", max: 'local maximum'});
export const K8 = C('scene-08', {two: 'Two over', change: 'does change', but: "But zero isn't", noInfl: 'no inflection', as: ['As x gets close', 1], grows: 'grows without', up: 'heads up', fromLeft: 'From the left', down: 'heads down', so: 'So x equals', asym: 'vertical asymptote', large: 'gets large', shrinks: 'shrinks towards', closer: 'gets closer', line: 'the line y'});
export const K9 = C('scene-09', {other: 'go the other', gradient: ['is the gradient of f', 1], lineUp: 'one under', turns: 'Where f turns', flat: ['tangent is flat', 1], zero: ['f prime is zero', 1], rises: 'Where f rises', above: 'above the axis', falls: 'Where f falls', below: "it's below", steep: 'falling most', lowest: 'lowest point', again: 'do it again', fpp: ['f double prime is the gradient', 1], until: 'falls until', thenRises: 'then rises', negPos: 'is negative', crossing: 'crossing zero', infl: 'the inflection'});
export const K10 = C('scene-10', {back: 'Back to', daily: 'Daily views are', launch: 'At launch', start: 'start near', steepest: 'steepest on', busiest: ['busiest day for', 1], views: 'new views', after: 'After that', tail: 'long tail', day3: 'And day three', up: 'concave up', down: 'concave down', last: 'The busiest day is'});
export const K11 = C('scene-11', {newg: 'new graph', at3: 'At x equals three', crosses: 'crosses the axis', positive: 'to positive', origin: 'at the origin', keeps: 'keeps falling', flat: 'tangent is flat', sign: 'its sign', touches: 'touches the axis', down: 'back down', hpi: 'horizontal point', bend: 'changes its bend', still: "while it's still", turning: 'turning point', alsoTurns: 'also turns', so: 'So f double', points: 'both points'});
export const K12 = C('scene-12', {turns: 'Turns drop', every: 'Every turning', crosses: 'that crosses', touches: 'only touches', works: 'This works', smooth: 'smooth piece'});
export const K13 = C('scene-13', {pause: 'Pause here'});
export const K14 = C('scene-14', {domain: 'The domain', odd: 'f is odd', fp: ['f prime of x', 1], always: 'always positive', rises: 'rises on each', never: 'never turns', fpp: 'f double prime', changes: 'changes sign', but: "but zero isn't", noPoint: 'No point', noInfl: 'no inflection'});
export const K15 = C('scene-15', {pause: 'Pause here'});
export const K16 = C('scene-16', {flat: 'f is flat', zero: 'is zero there', atM1: ['At minus one', 2], crosses: 'prime crosses', at2: ['At two', 2], touches: 'only touches', turns: 'turns where', zeroTwo: 'at zero and', two: ['at two', 3], and: 'And f crossing', there: ['zero there', 2]});
export const K17 = C('scene-17', {sketch: 'a sketch is', next: 'Next', forty: 'Forty metres', pen: 'sheep pen', wall: 'stone wall', which: 'Which shape', area: 'largest area'});
export const K18 = C('scene-18', {pause: 'Pause the video'});
