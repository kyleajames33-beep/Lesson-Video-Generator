// node --test scripts/explainer-grade-rules.test.mjs
import test from 'node:test';
import assert from 'node:assert/strict';
import {PNG} from 'pngjs';
import {RULES, analyseFrame, analyseLesson, changedFraction, inkStats} from './lib/explainer-grade-rules.mjs';

const paper = (w = 960, h = 540) => { const p = new PNG({width: w, height: h}); for (let o = 0; o < w * h * 4; o += 4) { p.data[o] = 246; p.data[o + 1] = 241; p.data[o + 2] = 231; p.data[o + 3] = 255; } return p; };
const fillRect = (p, x, y, w, h, c = [38, 35, 31]) => { for (let j = y; j < y + h; j++) for (let i = x; i < x + w; i++) { const o = (j * p.width + i) * 4; p.data[o] = c[0]; p.data[o + 1] = c[1]; p.data[o + 2] = c[2]; } };
const text = (t, size, extra = {}) => ({t, size, op: 1, box: [200, 300, 600, size * 1.2], hand: false, fontOk: true, family: 'Inter Tight', ...extra});
const frame = (audit, extra = {}) => ({audit: {texts: [], images: [], shapes: 0, countdown: false, fonts: {hand: true, display: true}, ...audit}, png: null, ink: null, role: 'sheet', slot: 1, ...extra});
const rules = f => analyseFrame(f).map(x => `${x.level}:${x.rule}`);

test('a full paper frame is 100% empty and a spread frame is not', () => {
	assert.equal(inkStats(paper()).empty, 1);
	const p = paper();
	for (let c = 0; c < 8; c++) for (let r = 0; r < 6; r++) fillRect(p, c * 120 + 30, 38 + r * 83 + 20, 50, 30);
	assert.equal(inkStats(p).empty, 0);
});

test('one small item in a corner reads as mostly empty', () => {
	const p = paper();
	fillRect(p, 40, 80, 150, 90);
	assert.ok(inkStats(p).empty > RULES.emptyFail);
});

test('the header band is not counted as content', () => {
	const p = paper();
	fillRect(p, 40, 4, 800, 20);
	assert.equal(inkStats(p).empty, 1);
});

test('identical stills have no change; a moved block does', () => {
	const a = paper(), b = paper();
	fillRect(a, 100, 100, 200, 200); fillRect(b, 100, 100, 200, 200);
	assert.equal(changedFraction(a, b), 0);
	fillRect(b, 500, 100, 200, 200);
	assert.ok(changedFraction(a, b) > RULES.sameChange);
});

test('small text fails once there is a sentence of it, short labels are spared', () => {
	assert.deepEqual(rules(frame({texts: [text('The forward rate falls as reactant is used up', 52), text('mol', 22, {box: [900, 500, 60, 30]})], shapes: 60})), []);
	assert.ok(rules(frame({texts: [text('The forward rate falls', 52), text('this caption is far too small to read', 20, {box: [200, 500, 600, 30]})], shapes: 60})).includes('fail:Text too small'));
	assert.ok(rules(frame({texts: [text('The forward rate falls', 52), text('tiny', 12, {box: [200, 500, 60, 20]})], shapes: 60})).includes('warn:Text too small'));
});

test('a frame with no line at working size fails', () => {
	assert.ok(rules(frame({texts: [text('Everything here is set at thirty pixels', 30)], shapes: 60})).includes('fail:No line at working size'));
});

test('mostly faint text fails, a faint secondary label only warns or passes', () => {
	const faint = extra => text('a ghosted preview line that students must read', 48, {op: 0.3, ...extra});
	assert.ok(rules(frame({texts: [faint(), text('Solid line', 48)], shapes: 60})).includes('fail:Faint text'));
	assert.deepEqual(rules(frame({texts: [text('A long solid line of working that carries the frame today', 48), text('later answer', 40, {op: 0.3})], shapes: 60})), []);
});

test('title-only frame, stretched plate, broken picture, em dash and off-frame text all fail', () => {
	assert.ok(rules(frame({texts: [text('Equilibrium', 90)]})).includes('fail:Thin frame'));
	const img = extra => ({src: 'p/a.png', box: [0, 0, 600, 400], broken: false, stretch: 1, op: 1, ...extra});
	assert.ok(rules(frame({images: [img({stretch: 1.2})]})).includes('fail:Stretched plate'));
	assert.ok(rules(frame({images: [img({broken: true})]})).includes('fail:Broken picture'));
	assert.ok(rules(frame({texts: [text('rate — not yield, is what changes here', 50)], shapes: 60})).includes('fail:Em dash on screen'));
	assert.ok(rules(frame({texts: [text('this line runs off the right edge', 50, {box: [1700, 300, 400, 60]})], shapes: 60})).includes('fail:Text off the frame'));
	assert.deepEqual(rules(frame({texts: [text('Equilibrium', 90)], images: [img()]})), []);
});

test('a fallback font is a render defect', () => {
	assert.ok(rules(frame({texts: [text('Times-like text in the frame here', 50, {fontOk: false, family: 'Times'})], shapes: 60})).includes('fail:Fallback font'));
	assert.ok(rules(frame({fonts: {hand: false, display: true}, shapes: 60})).includes('fail:Font not loaded'));
});

test('lesson rules: unchanged run, short notes hold, missing scene', () => {
	const audit = {texts: [], images: [], shapes: 60};
	const sheet = [0, 1, 2, 3, 4].map(i => ({slot: i + 1, frame: i * 900, changedFromPrev: i ? 0.001 : null, audit}));
	const scenes = [{id: 'hook', durationInFrames: 900}, {id: 'key-notes', durationInFrames: 700}];
	const found = analyseLesson({config: {scenes: {hook: () => null}}, scenes, sheet}).map(x => `${x.level}:${x.rule}`);
	assert.ok(found.includes('fail:Unchanged set-up'));
	assert.ok(found.includes('fail:Short key-notes hold'));
	assert.ok(found.includes('fail:Scene has no picture'));
	const moving = sheet.map(f => ({...f, changedFromPrev: f.changedFromPrev === null ? null : 0.2}));
	assert.ok(!analyseLesson({config: {scenes: {hook: () => null, 'key-notes': () => null}}, scenes: [{id: 'hook', durationInFrames: 900}, {id: 'key-notes', durationInFrames: 1200}], sheet: moving}).length);
});
