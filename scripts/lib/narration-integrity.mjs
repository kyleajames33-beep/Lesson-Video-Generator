import {readFileSync, existsSync, statSync} from 'node:fs';
import path from 'node:path';
import {sha256, canonical, publicPath} from './playback-assembly.mjs';
import {alignmentPathFor, alignmentToCaptions} from './caption-timeline.mjs';

// Same 12-hex exact-text suffix used by the existing generator and preflight.
export const narrationFilenameTextHash = audio => path.basename(audio).match(/\.([a-f0-9]{12})\.(?:mp3|wav)$/iu)?.[1] ?? null;
export function assertRecordingMatchesNarration(text, audio) {
  const filenameHash = narrationFilenameTextHash(audio);
  if (filenameHash && filenameHash !== sha256(text).slice(0, 12)) {
    throw new Error('Selected recording filename text hash differs from exact current narration. Rebuild audio/alignment before captions.');
  }
}

// Exact text is intentional: whitespace, punctuation and scientific Unicode
// changes all require a reviewed new pairing. A match is not listening approval.
export function captionsForExactNarration(text, alignment) {
  const captions = alignmentToCaptions(alignment);
  if (typeof text !== 'string' || alignment.characters.join('') !== text) {
    throw new Error('Alignment text differs from exact current narration. Rebuild audio/alignment before captions.');
  }
  return captions;
}

export function inspectNarration(segment, root = process.cwd()) {
  const vo = segment.voiceover;
  const errors = [], warnings = [];
  const issue = (code, message) => errors.push({code, message});
  const report = {textSha256: typeof vo?.text === 'string' ? sha256(vo.text) : null, audioReference: vo?.audioFile ?? null,
    audioPresent: false, alignmentPresent: false, exactTextMatch: null, captionsMatch: null, errors, warnings};
  if (!vo?.text?.trim()) {
    if (vo?.audioFile || segment.captions?.length) issue('NARRATION_TEXT_MISSING', 'Audio/captions have no current narration text.');
    return report;
  }
  const hasCaptions = Array.isArray(segment.captions) && segment.captions.length > 0;
  if (!hasCaptions) issue('CAPTIONS_MISSING', 'Timed captions must be rebuilt from the exact selected alignment.');
  if (!vo.audioFile) { issue('AUDIO_UNWIRED', 'Narration has no selected recording.'); return report; }
  let audio;
  try { audio = publicPath(root, vo.audioFile); }
  catch (e) { issue('AUDIO_PATH_INVALID', e.message); return report; }
  const filenameHash = narrationFilenameTextHash(audio);
  if (filenameHash && filenameHash !== report.textSha256.slice(0, 12)) issue('AUDIO_STALE', 'Filename text hash differs from exact current narration.');
  if (!filenameHash) warnings.push({code: 'AUDIO_UNVERSIONED', message: 'Filename does not bind this recording to exact text.'});
  try { report.audioPresent = statSync(audio).isFile() && statSync(audio).size > 0; } catch {}
  if (!report.audioPresent) issue('AUDIO_MISSING', 'Selected recording is unavailable in this checkout; its production existence is unknown.');
  const sidecar = alignmentPathFor(audio);
  if (sidecar === audio) { issue('ALIGNMENT_FORMAT_UNSUPPORTED', 'Use a supported audio extension.'); return report; }
  if (!existsSync(sidecar)) { issue('ALIGNMENT_MISSING', 'Alignment is unavailable in this checkout.'); return report; }
  report.alignmentPresent = true;
  try {
    const bytes = readFileSync(sidecar), alignment = JSON.parse(bytes);
    report.alignmentSha256 = sha256(bytes);
    const expected = captionsForExactNarration(vo.text, alignment);
    report.exactTextMatch = true;
    if (hasCaptions) {
      report.captionsMatch = canonical(expected) === canonical(segment.captions);
      if (!report.captionsMatch) issue('CAPTIONS_STALE', 'Timed captions differ from the exact selected alignment.');
    }
  } catch (e) {
    report.exactTextMatch = false;
    issue(/exact current narration/u.test(e.message) ? 'NARRATION_ALIGNMENT_STALE' : 'ALIGNMENT_INVALID', e.message);
  }
  return report;
}
