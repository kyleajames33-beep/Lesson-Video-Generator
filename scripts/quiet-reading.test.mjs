import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import {spawnSync} from 'node:child_process';

test('quiet consolidation is explicit and cannot hide missing teaching narration', () => {
  const original = JSON.parse(fs.readFileSync('docs/production/module5-starters-2026-10-10/chemistry/lesson.json'));
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'lesson-quiet-reading-'));
  let count = 0;
  const run = mutate => {
    const lesson = structuredClone(original);
    mutate(lesson);
    const file = path.join(dir, `${count++}.json`);
    fs.writeFileSync(file, JSON.stringify(lesson));
    const result = spawnSync(process.execPath, ['scripts/validate-lesson.mjs', file], {encoding:'utf8', windowsHide:true});
    fs.unlinkSync(file);
    return result;
  };
  try {
    assert.equal(run(() => {}).status, 0);
    const ordinary = run(lesson => {delete lesson.scenes.at(-1).quietReading;});
    assert.equal(ordinary.status, 1);
    assert.match(ordinary.stderr, /missing "voiceover.text"/);
    const misuse = run(lesson => {lesson.scenes[1].quietReading = true; delete lesson.scenes[1].voiceover;});
    assert.equal(misuse.status, 1);
    assert.match(misuse.stderr, /summary scene only/);
    const spoken = run(lesson => {lesson.scenes.at(-1).voiceover = {text:'Unexpected speech.'};});
    assert.equal(spoken.status, 1);
    assert.match(spoken.stderr, /must not carry narration/);
  } finally {
    fs.rmdirSync(dir);
  }
});
