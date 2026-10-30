// Local, read-only review of manifest-listed videos and caption candidates.
import http from 'node:http';
import fs from 'node:fs/promises';
import {createReadStream} from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {fileURLToPath} from 'node:url';
import {parseTimedCaptions, compareTimedCaptions} from './lib/caption-provenance.mjs';

const sha = bytes => crypto.createHash('sha256').update(bytes).digest('hex');
const validHash = value => typeof value === 'string' && /^[a-f0-9]{64}$/i.test(value);
const json = bytes => JSON.parse(bytes.toString('utf8').replace(/^\uFEFF/, ''));
const fingerprint = stat => [stat.size, stat.mtimeMs, stat.ctimeMs, stat.ino].join(':');

export function srtToVtt(bytes) {
  const blocks = bytes.toString('utf8').replace(/^\uFEFF/, '').replace(/\r\n/g, '\n').trim().split(/\n\s*\n/);
  const cues = blocks.filter(Boolean).map(block => {
    const lines = block.split('\n');
    if (/^\d+$/.test(lines[0])) lines.shift();
    if (!/^\d{2}:\d{2}:\d{2},\d{3} --> \d{2}:\d{2}:\d{2},\d{3}$/.test(lines[0]) || lines.length < 2) throw new Error('Invalid original SRT cue.');
    lines[0] = lines[0].replaceAll(',', '.');
    return lines.join('\n');
  });
  return Buffer.from('WEBVTT\n\n' + cues.join('\n\n') + '\n');
}

async function checkedFile(root, relative, expected) {
  if (typeof relative !== 'string' || !validHash(expected)) throw new Error('Missing file path or SHA256.');
  const bytes = await fs.readFile(path.resolve(root, relative));
  if (sha(bytes) !== expected.toLowerCase()) throw new Error('SHA256 mismatch.');
  return bytes;
}

async function loadEntries(manifests, root) {
  const entries = [];
  for (const [mi, manifestPath] of manifests.entries()) {
    const manifest = json(await fs.readFile(path.resolve(root, manifestPath)));
    if (!Array.isArray(manifest.videos)) throw new Error(`Manifest has no video list: ${manifestPath}`);
    const manifestIssues = [];
    let input;
    try { input = json(await checkedFile(root, manifest.input, manifest.inputSha256)); }
    catch (error) { manifestIssues.push(`Manifest input: ${error.message}`); }
    for (const source of manifest.sourceInputs ?? []) {
      try { await checkedFile(root, source.path, source.sha256); }
      catch (error) { manifestIssues.push(`Source record: ${error.message}`); }
    }
    for (const [vi, record] of manifest.videos.entries()) {
      const entry = {key: `m${mi}v${vi}`, record, manifestPath, issues: [...manifestIssues], buffers: {}, holds: [], videoState: 'unchecked'};
      for (const [name, file, hash] of [
        ['lesson', record.lessonPath, record.lessonSha256],
        ['original', record.originalCaptionPath, record.originalCaptionSha256],
        ['correctedSrt', record.correctedSrtPath, record.correctedSrtSha256],
        ['correctedVtt', record.correctedVttPath, record.correctedVttSha256],
      ]) {
        try { entry.buffers[name] = await checkedFile(root, file, hash); }
        catch (error) { entry.issues.push(`${name}: ${error.message}`); }
      }
      try {
        if (entry.buffers.original) entry.buffers.originalVtt = srtToVtt(entry.buffers.original);
        if (entry.buffers.lesson) {
          const lesson = json(entry.buffers.lesson), fps = lesson.fps ?? 30;
          if (fps !== 30 || (lesson.introDurationInFrames ?? 0) !== 0 || !Array.isArray(lesson.scenes)) throw new Error('Unsupported lesson timeline.');
          entry.title = lesson.title;
          let frame = 0;
          for (const scene of lesson.scenes) {
            if (!Number.isInteger(scene.durationInFrames) || scene.durationInFrames <= 0) throw new Error('Invalid scene duration.');
            const hold = scene.responseHold;
            if (hold) {
              if (!Number.isInteger(hold.startFrame) || !Number.isInteger(hold.endFrame) || hold.startFrame < 0 || hold.endFrame <= hold.startFrame || hold.endFrame > scene.durationInFrames) throw new Error('Invalid response hold.');
              entry.holds.push({scene: scene.id, start: (frame + hold.startFrame) / fps, end: (frame + hold.endFrame) / fps, playFrom: Math.max(0, (frame + hold.startFrame) / fps - 6)});
            }
            frame += scene.durationInFrames;
          }
        }
      } catch (error) { entry.issues.push(error.message); }
      const upload = input?.videos?.find(v => v.videoId === record.videoId);
      const recordedCaptionHash = Object.hasOwn(record, 'recordedCaptionSha256') ? record.recordedCaptionSha256 : upload?.captionSha256;
      entry.identityUncertain = record.uploadedTrackIdentityVerified === false || !validHash(recordedCaptionHash) || recordedCaptionHash.toLowerCase() !== record.originalCaptionSha256?.toLowerCase();
      entry.savedTrackVerified = false;
      if (record.currentSavedTrackIdentityVerified === true) {
        try {
          const provenance = record.rawDownloadProvenance;
          const raw = await checkedFile(root, provenance.rawSnapshot.path, provenance.rawSnapshot.sha256);
          const evidence = json(await checkedFile(root, provenance.evidenceSnapshot.path, provenance.evidenceSnapshot.sha256));
          const capture = evidence.videos?.find(v => v.videoId === record.videoId);
          if (!capture || capture.downloadedSha256 !== sha(raw) || capture.downloadPath !== provenance.downloadPath || provenance.downloadedSha256 !== sha(raw)) throw new Error('Saved track capture does not match provenance.');
          if (record.savedStudioReferenceSrtPath !== record.originalCaptionPath || record.savedStudioReferenceSrtSha256 !== record.originalCaptionSha256) throw new Error('Saved track reference is inconsistent.');
          const comparison = compareTimedCaptions(parseTimedCaptions(raw.toString('utf8'), 'sbv'), parseTimedCaptions(entry.buffers.original.toString('utf8'), 'srt'), 0);
          if (!comparison.equivalent || comparison.lineBreakDifferences) throw new Error('Saved track differs from reference captions.');
          entry.savedTrackVerified = true;
          entry.identityUncertain = false;
        } catch (error) { entry.issues.push(`Saved track: ${error.message}`); entry.identityUncertain = true; }
      } else if (record.currentSavedTrackIdentityVerified === false) entry.identityUncertain = true;
      entry.videoPath = typeof record.videoPath === 'string' ? path.resolve(root, record.videoPath) : null;
      try { entry.videoExists = !!entry.videoPath && (await fs.stat(entry.videoPath)).isFile(); }
      catch { entry.videoExists = false; }
      if (!entry.videoExists) entry.videoState = 'missing';
      if (!validHash(record.recordedVideoSha256)) entry.issues.push('Recorded MP4 SHA256 is missing or invalid.');
      entries.push(entry);
    }
  }
  return entries;
}

function publicEntry(entry) {
  return {key: entry.key, lessonId: entry.record.lessonId, title: entry.record.title ?? entry.title ?? entry.record.lessonId, manifest: entry.manifestPath,
    videoExists: entry.videoExists, videoState: entry.videoState, identityUncertain: entry.identityUncertain, issues: entry.issues, holds: entry.holds,
    reviewNotes: [
      ...(Array.isArray(entry.record.reviewNotes) ? entry.record.reviewNotes.filter(note => typeof note === 'string') : []),
      ...(entry.savedTrackVerified ? ['Reference: captured saved Studio track. Raw download, capture evidence and converted reference verified. Public playback and listening remain pending.'] : []),
      ...(entry.record.qaSourcePath ? ['Candidate preserves the documented 18 October QA text and line breaks.'] : []),
      ...(entry.record.videoTailVarianceSeconds == null ? [] : [`Video duration differs from the source total by ${Math.abs(entry.record.videoTailVarianceSeconds).toFixed(3)} seconds. Check its timing evidence and video ending separately.`]),
    ]};
}

async function verifyVideo(entry) {
  if (entry.issues.length) return (entry.videoState = 'blocked');
  let stat;
  try { stat = await fs.stat(entry.videoPath); if (!stat.isFile()) throw new Error('Not a file'); }
  catch { entry.videoState = 'missing'; entry.videoExists = false; return 'missing'; }
  const signature = fingerprint(stat);
  if (entry.videoCheck?.signature === signature) return entry.videoCheck.promise;
  entry.videoState = 'checking';
  const promise = (async () => {
    const hash = crypto.createHash('sha256');
    for await (const chunk of createReadStream(entry.videoPath)) hash.update(chunk);
    const after = await fs.stat(entry.videoPath);
    entry.videoState = fingerprint(after) !== signature ? 'changed-during-check' : hash.digest('hex') === entry.record.recordedVideoSha256.toLowerCase() ? 'verified' : 'hash-mismatch';
    return entry.videoState;
  })().catch(() => (entry.videoState = 'unreadable'));
  entry.videoCheck = {signature, promise};
  return promise;
}

function byteRange(header, size) {
  if (!header) return {start: 0, end: size - 1, status: 200};
  const match = /^bytes=(\d*)-(\d*)$/.exec(header);
  if (!match || (!match[1] && !match[2]) || !size) return null;
  let start, end;
  if (!match[1]) { const suffix = Number(match[2]); if (!Number.isSafeInteger(suffix) || suffix <= 0) return null; start = Math.max(0, size - suffix); end = size - 1; }
  else { start = Number(match[1]); end = match[2] ? Math.min(Number(match[2]), size - 1) : size - 1; }
  return Number.isSafeInteger(start) && Number.isSafeInteger(end) && start >= 0 && start <= end && start < size ? {start, end, status: 206} : null;
}

const PAGE = `<!doctype html><html lang="en-AU"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Caption review</title>
<style>body{font:16px system-ui,sans-serif;background:#f6f4ef;color:#242424;margin:0;padding:24px}main{max-width:1150px;margin:auto}h1{font-size:26px;margin-bottom:8px}p{line-height:1.5}label{display:inline-block;margin:8px 16px 8px 0}select,button{font:inherit;padding:9px;border:1px solid #999;border-radius:5px;background:white}select{max-width:100%}button{cursor:pointer;margin:4px}button:disabled{cursor:default;opacity:.5}#screen{max-width:1100px;margin:18px auto;background:#111}#screen.phone{width:min(390px,100%)}video{display:block;width:100%;aspect-ratio:16/9}#status{padding:12px;background:#e5ece5;white-space:pre-line}#status.warning{background:#fff0d2}#status.error{background:#fbe2dd}#holds{display:flex;flex-wrap:wrap;gap:4px}small{color:#555}a{color:inherit}</style>
<main><h1>Caption review</h1><p>Compare prepared captions with the documented reference track. Check each lesson's provenance notes. Full playback and human listening remain pending.</p>
<label for="lesson">Lesson<br><select id="lesson"><option>Loading lessons...</option></select></label>
<label for="captionMode">Captions<br><select id="captionMode"><option value="corrected">Corrected candidate</option><option value="original">Reference captions</option><option value="off">Off</option></select></label>
<button id="desktop" type="button">Desktop width</button><button id="phone" type="button">Phone width</button>
<p id="status" role="status" aria-live="polite">Loading verified source details...</p>
<div id="screen"><video id="video" controls playsinline preload="none"></video></div>
<h2>Response holds</h2><p>Each button plays from six seconds before the hold begins.</p><div id="holds"></div>
<p><small>This local tool has no publishing or approval controls. A phone width preview changes the player width; it does not emulate a phone.</small></p></main>
<script>
const selector=document.querySelector('#lesson'),video=document.querySelector('#video'),status=document.querySelector('#status'),holds=document.querySelector('#holds'),mode=document.querySelector('#captionMode');let selection=0;
function captionMode(){for(const track of video.textTracks)track.mode=mode.value==='off'?'disabled':track.label===(mode.value==='corrected'?'Corrected candidate':'Original local')?'showing':'disabled';}
mode.addEventListener('change',captionMode);video.addEventListener('loadedmetadata',captionMode);
document.querySelector('#desktop').onclick=()=>document.querySelector('#screen').classList.remove('phone');document.querySelector('#phone').onclick=()=>document.querySelector('#screen').classList.add('phone');
function describe(item){const notes=[...(item.reviewNotes??[])];if(item.identityUncertain)notes.push('Reference identity remains pending. A historical upload hash does not verify a later saved track.');if(item.issues.length)notes.push('Source validation failed: '+item.issues.join(' '));else notes.push('Lesson, caption and source-record hashes verified.');if(!item.videoExists)notes.push('Missing local MP4. Playback is unavailable.');else notes.push('MP4: '+item.videoState.replaceAll('-',' ')+'.');notes.push('Manifest: '+item.manifest);status.textContent=notes.join('\\n');status.className=item.issues.length||['hash-mismatch','unreadable','changed-during-check'].includes(item.videoState)?'error':item.identityUncertain||!item.videoExists?'warning':'';}
async function selectLesson(){const token=++selection;video.pause();video.removeAttribute('src');video.replaceChildren();video.load();holds.replaceChildren();status.textContent='Checking the selected MP4 hash. This can take a moment...';status.className='';try{const response=await fetch('/api/lessons/'+selector.value);if(!response.ok)throw Error('Cannot read lesson');const item=await response.json();if(token!==selection)return;describe(item);const playable=item.videoState==='verified'&&!item.issues.length;
if(playable){for(const [kind,label]of[['corrected','Corrected candidate'],['original','Reference captions']]){const track=document.createElement('track');track.kind='captions';track.label=label;track.srclang='en-AU';track.src='/captions/'+item.key+'/'+kind+'.vtt';track.default=kind==='corrected';track.onload=captionMode;video.append(track);}video.src='/video/'+item.key;video.load();captionMode();}
for(const hold of item.holds){const button=document.createElement('button');button.type='button';button.textContent=hold.scene+' ('+hold.start.toFixed(1)+'s to '+hold.end.toFixed(1)+'s)';button.disabled=!playable;button.onclick=()=>{video.currentTime=hold.playFrom;video.play().catch(()=>{status.textContent+='\\nPress the native Play button to start.';});};holds.append(button);}if(!item.holds.length)holds.textContent='No response holds recorded.';
}catch(error){if(token===selection){status.textContent=error.message;status.className='error';}}}
selector.onchange=selectLesson;
fetch('/api/lessons').then(r=>r.json()).then(items=>{selector.replaceChildren();for(const item of items){const option=document.createElement('option');option.value=item.key;option.textContent=item.lessonId+' | '+item.title+(!item.videoExists?' [missing video]':'')+(item.identityUncertain?' [identity pending]':'')+(item.issues.length?' [invalid source]':'');selector.append(option);}if(items.length)selectLesson();else status.textContent='No manifest videos available.';}).catch(error=>{status.textContent=error.message;});
</script></html>`;

export async function createCaptionReviewServer({manifests, root = process.cwd()} = {}) {
  if (!Array.isArray(manifests) || !manifests.length) throw new Error('Supply at least one caption repair manifest.');
  const entries = await loadEntries(manifests, root), byKey = new Map(entries.map(entry => [entry.key, entry]));
  return http.createServer(async (request, response) => {
    const headers = {'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff', 'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; media-src 'self'; frame-ancestors 'none'"};
    const send = (code, body = '', type = 'text/plain; charset=utf-8', extra = {}) => { const bytes = Buffer.isBuffer(body) ? body : Buffer.from(body); response.writeHead(code, {...headers, 'Content-Type': type, 'Content-Length': bytes.length, ...extra}); response.end(request.method === 'HEAD' ? undefined : bytes); };
    try {
      if (!/^(127\.0\.0\.1|localhost)(:\d+)?$/i.test(request.headers.host ?? '')) return send(403, 'Localhost only.');
      if (!['GET', 'HEAD'].includes(request.method)) return send(405, 'Read-only server.', undefined, {Allow: 'GET, HEAD'});
      const url = new URL(request.url, 'http://127.0.0.1');
      if (url.pathname === '/') return send(200, PAGE, 'text/html; charset=utf-8');
      if (url.pathname === '/api/lessons') return send(200, JSON.stringify(entries.map(publicEntry)), 'application/json');
      const match = /^\/(api\/lessons|video|captions)\/(m\d+v\d+)(?:\/(corrected|original)\.vtt)?$/.exec(url.pathname);
      if (!match || !byKey.has(match[2])) return send(404, 'Not found.');
      const entry = byKey.get(match[2]);
      if (match[1] === 'api/lessons' && !match[3]) { await verifyVideo(entry); return send(200, JSON.stringify(publicEntry(entry)), 'application/json'); }
      if (match[1] === 'captions' && match[3]) {
        if (entry.issues.length) return send(409, 'Source hash validation failed.');
        return send(200, entry.buffers[match[3] === 'corrected' ? 'correctedVtt' : 'originalVtt'], 'text/vtt; charset=utf-8');
      }
      if (match[1] !== 'video' || match[3]) return send(404, 'Not found.');
      const state = await verifyVideo(entry);
      if (state !== 'verified') return send(state === 'missing' ? 404 : 409, `MP4 unavailable: ${state}.`);
      const stat = await fs.stat(entry.videoPath), range = byteRange(request.headers.range, stat.size);
      if (!range) return send(416, '', undefined, {'Content-Range': `bytes */${stat.size}`});
      response.writeHead(range.status, {...headers, 'Content-Type': 'video/mp4', 'Accept-Ranges': 'bytes', 'Content-Length': Math.max(0, range.end - range.start + 1), ...(range.status === 206 ? {'Content-Range': `bytes ${range.start}-${range.end}/${stat.size}`} : {})});
      if (request.method === 'HEAD' || !stat.size) return response.end();
      const stream = createReadStream(entry.videoPath, {start: range.start, end: range.end});
      stream.on('error', () => response.destroy()); response.on('close', () => stream.destroy()); stream.pipe(response);
    } catch { if (response.headersSent) response.destroy(); else send(500, 'Unable to read the selected review resource.'); }
  });
}

export function parseArgs(args) {
  const manifests = []; let port = 8784;
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === '--port' || arg.startsWith('--port=')) port = Number(arg === '--port' ? args[++i] : arg.slice(7));
    else if (arg.startsWith('--')) throw new Error(`Unknown option: ${arg}`);
    else manifests.push(arg);
  }
  if (!Number.isInteger(port) || port < 1 || port > 65535) throw new Error('Port must be an integer from 1 to 65535.');
  if (!manifests.length) manifests.push('out/caption-repairs/wave5-2026-10-25/manifest.json');
  return {manifests, port};
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const {manifests, port} = parseArgs(process.argv.slice(2));
  const server = await createCaptionReviewServer({manifests});
  server.on('error', error => { console.error(error.message); process.exitCode = 1; });
  server.listen(port, '127.0.0.1', () => console.log(`Caption review: http://127.0.0.1:${port}/`));
}
