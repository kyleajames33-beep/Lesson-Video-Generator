import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {checkGoogleRunOn, compareGoogleWords, googleSceneHasLongPause} from './lib/google-batch-checks.mjs';

const fixtures = JSON.parse(fs.readFileSync(new URL('./fixtures/google-runon-brief257.json', import.meta.url)));
test('actual v14 run-on fails and all 17 v13 takes pass', () => {
  assert.equal(fixtures.filter(f => f.lesson.endsWith('13')).length, 17);
  for (const fixture of fixtures) {
    const result = checkGoogleRunOn(fixture);
    assert.equal(result.pass, fixture.expectedPass, fixture.lesson + '/' + fixture.scene);
    if (!fixture.expectedPass) {
      assert.equal(result.insertedWords, 125);
      assert.equal(result.trailingInsertedWords, 123);
      assert.equal(result.failures.length, 3);
    }
  }
});
test('rate threshold, short clips and deliberate pauses', () => {
  const comparison = compareGoogleWords('hello', 'hello');
  assert.equal(checkGoogleRunOn({text:'hello',seconds:3,comparison}).pass, false);
  assert.equal(checkGoogleRunOn({text:'hello',seconds:2.99,comparison}).pass, true);
  assert.equal(checkGoogleRunOn({text:'hello',seconds:3,comparison,deliberateLongPauses:true}).pass, true);
  assert.equal(checkGoogleRunOn({text:'x'.repeat(30),seconds:3,comparison}).pass, true);
});
test('insertions block even short clips and deliberate pauses', () => {
  const trailing = n => compareGoogleWords('hello', 'hello ' + 'extra '.repeat(n));
  assert.equal(checkGoogleRunOn({text:'hello',seconds:2,comparison:trailing(4)}).pass, true);
  assert.equal(checkGoogleRunOn({text:'hello',seconds:2,comparison:trailing(5)}).pass, false);
  const middle = n => compareGoogleWords('hello goodbye', 'hello ' + 'extra '.repeat(n) + 'goodbye');
  assert.equal(checkGoogleRunOn({text:'hello goodbye',seconds:10,deliberateLongPauses:true,comparison:middle(12)}).pass, true);
  assert.equal(checkGoogleRunOn({text:'hello goodbye',seconds:10,deliberateLongPauses:true,comparison:middle(13)}).pass, false);
});
test('designed countdown and notes holds exempt only the rate check', () => {
  const scene={holdKind:'countdown',holdSeconds:10};
  assert.equal(googleSceneHasLongPause(scene), true);
  assert.equal(googleSceneHasLongPause({holdKind:'notes'}), true);
  assert.equal(googleSceneHasLongPause({holdKind:'visual',holdSeconds:2}), false);
  const text='x'.repeat(150),comparison=compareGoogleWords('hello','hello');
  assert.equal(checkGoogleRunOn({text,seconds:15.6,comparison,
    deliberateLongPauses:googleSceneHasLongPause(scene)}).pass,true);
  assert.equal(checkGoogleRunOn({text:'hello',seconds:15.6,
    comparison:compareGoogleWords('hello','hello one two three four five'),
    deliberateLongPauses:googleSceneHasLongPause(scene)}).pass,false);
});
