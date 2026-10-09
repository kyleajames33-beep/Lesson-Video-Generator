import {readFileSync} from 'node:fs';
import path from 'node:path';
import {verifyRelease} from './release-snapshot.mjs';
import {verifyReview} from './release-review.mjs';
import {checkProductionBrief} from './production-brief.mjs';
import {sha256} from './playback-assembly.mjs';

export const reviewScopes = ['science', 'listening', 'motion', 'device', 'accessibility'];

// Pure decision layer. The filesystem adapter below supplies verified facts.
export function assessReleaseEvidence(facts) {
  const blockers = [];
  const block = (code, detail) => blockers.push({code, detail});
  if (!facts.snapshotValid) block('PACKAGE_INVALID', 'Export dependencies changed, are missing or could not be verified.');
  if (!facts.inputValid) block('INPUT_PACKAGE_INVALID', 'Render inputs changed, are missing or could not be verified.');
  if (facts.teachingBriefValid !== true) block('TEACHING_BRIEF_REQUIRED', 'Provide a current teaching/visual brief with named script review and exact voiced-preview evidence.');
  const record = facts.renderRecord;
  if (!record || !facts.renderRecordTracked) block('RENDER_RECORD_MISSING', 'An exact hashed render record must be part of the export snapshot.');
  if (record) {
    if (record.status !== 'full-render-unreviewed' || record.inputDriftCheckPassed !== true) block('FULL_RENDER_REQUIRED', 'Previews and unverified renders do not satisfy a full-lesson release.');
    if (record.inputPackageSha256 !== facts.inputPackageSha256) block('RENDER_INPUT_MISMATCH', 'Render record points to different inputs.');
    if (!facts.videoSha256 || record.videoSha256 !== facts.videoSha256) block('RENDER_VIDEO_MISMATCH', 'Rendered video hash differs from the selected export.');
    if (record.render?.fps !== facts.fps || record.render?.frameRange?.[0] !== 0 || record.render?.frameRange?.[1] !== facts.durationInFrames - 1) block('RENDER_TIMELINE_MISMATCH', 'Render must cover the entire selected timeline at its declared fps.');
  }
  if (!facts.captionsTracked) block('CAPTION_EXPORTS_MISSING', 'Both SRT and VTT must belong to the selected export snapshot.');
  const latest = new Map();
  for (const item of facts.reviews ?? []) {
    const review = item.record;
    if (!item.valid || !review || review.packageSha256 !== facts.packageSha256 || !reviewScopes.includes(review.scope)
      || !['pass', 'changes-required'].includes(review.outcome) || typeof review.reviewer !== 'string' || !review.reviewer.trim()
      || typeof review.recordedAt !== 'string' || !Number.isFinite(Date.parse(review.recordedAt))) {
      block('REVIEW_INVALID', item.path ?? 'Invalid, stale or mismatched review record.');
      continue;
    }
    const prior = latest.get(review.scope);
    if (!prior || Date.parse(review.recordedAt) > Date.parse(prior.recordedAt)
      || (Date.parse(review.recordedAt) === Date.parse(prior.recordedAt) && review.outcome === 'changes-required')) latest.set(review.scope, review);
  }
  for (const scope of reviewScopes) {
    const review = latest.get(scope);
    if (!review) block('REVIEW_MISSING', scope);
    else if (review.outcome !== 'pass') block('REVIEW_CHANGES_REQUIRED', `${scope}: ${review.reviewer}`);
  }
  return {ready: blockers.length === 0, status: blockers.length ? 'release-evidence-incomplete' : 'release-evidence-complete', blockers,
    reviews: Object.fromEntries([...latest].map(([scope, record]) => [scope, {reviewer: record.reviewer, outcome: record.outcome, recordedAt: record.recordedAt}])),
    limitation: 'Checks versioned local evidence, not reviewer identity, scientific judgement, omitted records or publication permission.'};
}

function workspacePath(root, value) {
  if (typeof value !== 'string' || !value.trim()) throw new Error('Evidence path must be a nonempty string');
  const file = path.resolve(root, value), relative = path.relative(root, file);
  if (!relative || relative.startsWith('..') || path.isAbsolute(relative)) throw new Error('Evidence must stay inside the workspace');
  return file;
}
export function checkReleaseEvidence(root, config) {
  const allowed = new Set(['snapshotPath', 'inputSnapshotPath', 'renderRecordPath', 'reviews', 'teachingBriefPath']);
  if (!config || Object.keys(config).some((key) => !allowed.has(key)) || !Array.isArray(config.reviews)) throw new Error('Gate config needs snapshotPath, inputSnapshotPath, renderRecordPath and a reviews array. No scoring thresholds or scope waivers.');
  const load = (file) => JSON.parse(readFileSync(workspacePath(root, file), 'utf8'));
  const snapshot = load(config.snapshotPath), inputs = load(config.inputSnapshotPath), renderRecord = load(config.renderRecordPath);
  const relative = (file) => path.relative(root, workspacePath(root, file)).replaceAll('\\', '/');
  const exports = snapshot.files?.filter((file) => file.roles?.includes('export')) ?? [];
  const verification = (snapshot) => { try { return verifyRelease(root, snapshot).valid; } catch { return false; } };
  const reviews = config.reviews.map((file) => {
    try {
      const record = load(file);
      const valid = verifyReview(root, record).valid;
      return {path: file, record, valid};
    } catch { return {path: file, valid: false}; }
  });
  const videos = exports.filter((file) => /\.mp4$/iu.test(file.path));
  let teachingBrief = {ready: false, blockers: [{code: 'BRIEF_MISSING', detail: 'Set teachingBriefPath in this gate config.'}]};
  let teachingBriefSha256 = null;
  if (config.teachingBriefPath) {
    teachingBrief = checkProductionBrief(root, config.teachingBriefPath, {stage: 'export'});
    teachingBriefSha256 = sha256(readFileSync(workspacePath(root, config.teachingBriefPath)));
    const source = teachingBrief.source;
    if (source && !inputs.files?.some(file => file.path === relative(source.lessonPath) && file.sha256 === source.lessonSha256)) {
      teachingBrief.ready = false;
      teachingBrief.blockers.push({code: 'BRIEF_RENDER_INPUT_MISMATCH', detail: 'Brief must belong to the exact lesson used by this full render.'});
    }
  }
  const report = assessReleaseEvidence({snapshotValid: verification(snapshot), inputValid: verification(inputs), teachingBriefValid: teachingBrief.ready,
    packageSha256: snapshot.packageSha256, inputPackageSha256: inputs.packageSha256, renderRecord,
    renderRecordTracked: exports.some((file) => file.path === relative(config.renderRecordPath) && file.sha256),
    videoSha256: videos.length === 1 ? videos[0].sha256 : null,
    captionsTracked: exports.some((file) => /\.srt$/iu.test(file.path) && file.sha256) && exports.some((file) => /\.vtt$/iu.test(file.path) && file.sha256),
    fps: inputs.timeline?.fps, durationInFrames: inputs.timeline?.durationInFrames, reviews});
  return {...report, teachingBrief: {...teachingBrief, path: config.teachingBriefPath ?? null, sha256: teachingBriefSha256},
    limitation: report.limitation + ' The brief checks declared teaching/visual decisions and exact preview evidence, not the quality of those judgements. Human listening still needs the existing full-package listening review.'};
}
