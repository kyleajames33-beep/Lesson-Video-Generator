import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import crypto from 'node:crypto';
import vm from 'node:vm';
import http from 'node:http';
import {createCaptionReviewServer, parseArgs} from './serve-caption-review.mjs';

const sha = value => crypto.createHash('sha256').update(value).digest('hex');
async function fixture(t, {missingVideo = false, uncertain = false, badVideoHash = false, corruptCaption = false, secondManifest = false, savedTrack = false, corruptDownload = false} = {}) {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), 'caption-review-test-'));
  const srt = '1\n00:00:00,000 --> 00:00:01,000\nQuestion.\n\n2\n00:00:08,000 --> 00:00:09,000\nFeedback.\n';
  const vtt = 'WEBVTT\n\n00:00:00.000 --> 00:00:01.000\nQuestion.\n\n00:00:12.000 --> 00:00:13.000\nFeedback.\n';
  const lesson = JSON.stringify({title: 'Fixture lesson', fps: 30, introDurationInFrames: 0, scenes: [
    {id: 'attempt', durationInFrames: 360, responseHold: {startFrame: 240, endFrame: 330}},
    {id: 'feedback', durationInFrames: 90},
  ]});
  const video = '0123456789abcdefghijklmnop';
  const input = JSON.stringify({videos: [{videoId: 'fixture', captionSha256: uncertain ? null : sha(srt)}]});
  const files = {'original.srt': srt, 'corrected.srt': srt, 'corrected.vtt': vtt, 'lesson.json': lesson, 'uploads.json': input, 'video.mp4': video};
  for (const [name, bytes] of Object.entries(files)) if (!(missingVideo && name === 'video.mp4')) await fs.writeFile(path.join(root, name), bytes);
  const row = {lessonId: 'fixture', videoId: 'fixture', videoPath: 'video.mp4', recordedVideoSha256: badVideoHash ? '0'.repeat(64) : sha(video),
    originalCaptionPath: 'original.srt', originalCaptionSha256: sha(srt), lessonPath: 'lesson.json', lessonSha256: sha(lesson),
    correctedSrtPath: 'corrected.srt', correctedSrtSha256: sha(srt), correctedVttPath: 'corrected.vtt', correctedVttSha256: sha(vtt)};
  if (uncertain) Object.assign(row, {recordedCaptionSha256: null, uploadedTrackIdentityVerified: false});
  if (savedTrack) {
    const sbv = srt.replace(/^\d+\n/gm, '').replaceAll(' --> ', ',').replaceAll(/(\d{2}:\d{2}:\d{2}),(\d{3})/g, '$1.$2');
    const evidence = JSON.stringify({videos: [{videoId: 'fixture', downloadedSha256: sha(sbv), downloadPath: 'captured.sbv'}]});
    await fs.writeFile(path.join(root, 'captured.sbv'), corruptDownload ? 'changed' : sbv);
    await fs.writeFile(path.join(root, 'capture.json'), evidence);
    Object.assign(row, {currentSavedTrackIdentityVerified: true, savedStudioReferenceSrtPath: row.originalCaptionPath, savedStudioReferenceSrtSha256: row.originalCaptionSha256,
      rawDownloadProvenance: {downloadPath: 'captured.sbv', downloadedSha256: sha(sbv), rawSnapshot: {path: 'captured.sbv', sha256: sha(sbv)}, evidenceSnapshot: {path: 'capture.json', sha256: sha(evidence)}}});
  }
  const manifest = {input: 'uploads.json', inputSha256: sha(input), videos: [row]};
  await fs.writeFile(path.join(root, 'manifest.json'), JSON.stringify(manifest));
  const manifests = ['manifest.json'];
  if (secondManifest) { await fs.writeFile(path.join(root, 'second.json'), JSON.stringify(manifest)); manifests.push('second.json'); }
  if (corruptCaption) await fs.writeFile(path.join(root, 'corrected.vtt'), 'changed');
  const server = await createCaptionReviewServer({root, manifests});
  await new Promise((resolve, reject) => { server.once('error', reject); server.listen(0, '127.0.0.1', resolve); });
  const base = `http://127.0.0.1:${server.address().port}`;
  t.after(async () => { server.closeAllConnections(); await new Promise(resolve => server.close(resolve)); await fs.rm(root, {recursive: true, force: true}); });
  return {base, root, video, server};
}

test('native player, hold targets, original conversion and lazy MP4 check', async t => {
  const {base, server} = await fixture(t);
  assert.equal(server.address().address, '127.0.0.1');
  const html = await (await fetch(base)).text();
  assert.match(html, /<video[^>]+controls[^>]+playsinline/);
  assert.doesNotMatch(html, /\sautoplay(?:\s|=|>)/i);
  assert.match(html, /Phone width/);
  assert.match(html, /Corrected candidate/);
  new vm.Script(html.match(/<script>([\s\S]*?)<\/script>/)[1]);
  const catalog = await (await fetch(base + '/api/lessons')).json();
  assert.equal(catalog[0].videoState, 'unchecked');
  assert.equal(catalog[0].identityUncertain, false);
  assert.deepEqual(catalog[0].holds, [{scene: 'attempt', start: 8, end: 11, playFrom: 2}]);
  const detail = await (await fetch(base + '/api/lessons/m0v0')).json();
  assert.equal(detail.videoState, 'verified');
  const original = await fetch(base + '/captions/m0v0/original.vtt');
  assert.equal(original.headers.get('content-type'), 'text/vtt; charset=utf-8');
  assert.match(await original.text(), /WEBVTT\n\n00:00:00\.000 --> 00:00:01\.000\nQuestion\./);
  assert.match(await (await fetch(base + '/captions/m0v0/corrected.vtt')).text(), /00:00:12\.000/);
});

test('video GET and HEAD support bounded, open and suffix byte ranges', async t => {
  const {base, video} = await fixture(t);
  const get = async range => fetch(base + '/video/m0v0', {headers: {Range: range}});
  const first = await get('bytes=0-3');
  assert.equal(first.status, 206); assert.equal(first.headers.get('content-range'), `bytes 0-3/${video.length}`); assert.equal(await first.text(), '0123');
  const tail = await get('bytes=-4'); assert.equal(await tail.text(), 'mnop');
  const open = await get('bytes=20-'); assert.equal(await open.text(), video.slice(20));
  const head = await fetch(base + '/video/m0v0', {method: 'HEAD', headers: {Range: 'bytes=1-4'}});
  assert.equal(head.status, 206); assert.equal(head.headers.get('content-length'), '4'); assert.equal(await head.text(), '');
  const full = await fetch(base + '/video/m0v0'); assert.equal(full.status, 200); assert.equal(await full.text(), video);
  for (const range of ['bytes=99-', 'bytes=8-3', 'bytes=-0', 'bytes=0-1,3-4', 'garbage']) {
    const response = await get(range); assert.equal(response.status, 416); assert.equal(response.headers.get('content-range'), `bytes */${video.length}`);
  }
});

test('routes whitelist resources, reject writes and reject nonlocal Host', async t => {
  const {base} = await fixture(t);
  for (const route of ['/lesson.json', '/uploads.json', '/manifest.json', '/original.srt', '/video/m0v1', '/captions/m0v0/../../lesson.json', '/api/lessons/m0v0/original.vtt']) assert.equal((await fetch(base + route)).status, 404);
  const write = await fetch(base + '/video/m0v0', {method: 'POST', body: 'change'});
  assert.equal(write.status, 405); assert.equal(write.headers.get('allow'), 'GET, HEAD');
  const foreignHostStatus = await new Promise((resolve, reject) => {
    http.get(base, {headers: {Host: 'example.com'}}, response => { response.resume(); resolve(response.statusCode); }).on('error', reject);
  });
  assert.equal(foreignHostStatus, 403);
  const head = await fetch(base + '/captions/m0v0/original.vtt', {method: 'HEAD'}); assert.equal(head.status, 200); assert.equal(await head.text(), '');
});

test('missing video and absent recorded caption hash remain explicit candidates', async t => {
  const {base} = await fixture(t, {missingVideo: true, uncertain: true});
  const [row] = await (await fetch(base + '/api/lessons')).json();
  assert.equal(row.videoExists, false); assert.equal(row.videoState, 'missing'); assert.equal(row.identityUncertain, true);
  assert.equal((await fetch(base + '/video/m0v0')).status, 404);
  assert.equal((await fetch(base + '/captions/m0v0/original.vtt')).status, 200);
});

test('saved Studio capture supplies identity independently of a missing historical upload hash', async t => {
  const {base} = await fixture(t, {uncertain: true, savedTrack: true});
  const [row] = await (await fetch(base + '/api/lessons')).json();
  assert.equal(row.identityUncertain, false);
  assert.deepEqual(row.issues, []);
  assert.match(row.reviewNotes.join(' '), /captured saved Studio track/);
});

test('a claimed saved identity with changed download bytes blocks playback and captions', async t => {
  const {base} = await fixture(t, {uncertain: true, savedTrack: true, corruptDownload: true});
  const [row] = await (await fetch(base + '/api/lessons')).json();
  assert.equal(row.identityUncertain, true);
  assert.match(row.issues.join(' '), /Saved track: SHA256 mismatch/);
  assert.equal((await fetch(base + '/captions/m0v0/original.vtt')).status, 409);
});

test('source hash mismatch blocks caption and video serving', async t => {
  const {base} = await fixture(t, {corruptCaption: true});
  const [row] = await (await fetch(base + '/api/lessons')).json(); assert.match(row.issues.join(' '), /correctedVtt: SHA256 mismatch/);
  assert.equal((await fetch(base + '/captions/m0v0/corrected.vtt')).status, 409);
  assert.equal((await fetch(base + '/video/m0v0')).status, 409);
});

test('lazy MP4 hash mismatch blocks playback and changed files are rechecked', async t => {
  const bad = await fixture(t, {badVideoHash: true});
  const detail = await (await fetch(bad.base + '/api/lessons/m0v0')).json(); assert.equal(detail.videoState, 'hash-mismatch');
  assert.equal((await fetch(bad.base + '/video/m0v0')).status, 409);
  const good = await fixture(t);
  assert.equal((await fetch(good.base + '/video/m0v0')).status, 200);
  await fs.writeFile(path.join(good.root, 'video.mp4'), 'different bytes');
  assert.equal((await fetch(good.base + '/video/m0v0')).status, 409);
});

test('multiple manifests keep duplicate lesson IDs on distinct whitelist keys', async t => {
  const {base} = await fixture(t, {secondManifest: true});
  const rows = await (await fetch(base + '/api/lessons')).json(); assert.deepEqual(rows.map(r => r.key), ['m0v0', 'm1v0']);
  assert.equal((await fetch(base + '/captions/m1v0/corrected.vtt')).status, 200);
});

test('CLI defaults and explicit manifest/port arguments', () => {
  assert.equal(parseArgs([]).port, 8784);
  assert.deepEqual(parseArgs(['a.json', '--port=8785', 'b.json']), {port: 8785, manifests: ['a.json', 'b.json']});
  assert.equal(parseArgs(['--port', '8786']).port, 8786);
  assert.throws(() => parseArgs(['--host=0.0.0.0']), /Unknown option/);
  for (const value of ['0', '-1', '65536', 'text']) assert.throws(() => parseArgs(['--port', value]), /Port/);
});
