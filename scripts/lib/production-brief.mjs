import {readFileSync, existsSync} from 'node:fs';
import path from 'node:path';
import {sha256} from './playback-assembly.mjs';
import {verifyRelease} from './release-snapshot.mjs';

const stages = ['draft', 'recording', 'export', 'release'];
const filled = value => typeof value === 'string' && value.trim().length > 0;
const reviewStatuses = ['pending', 'pass', 'changes-required'];
function inside(root, value) {
  if (!filled(value)) throw new Error('A nonempty workspace-relative path is required.');
  const resolved = path.resolve(root, value), relative = path.relative(root, resolved);
  if (!relative || relative.startsWith('..') || path.isAbsolute(relative)) throw new Error('Production brief paths must stay inside the workspace.');
  return resolved;
}
export const companionBriefPath = lessonPath => lessonPath.replace(/\.json$/i, '') + '.production-brief.json';

// Full exports freeze their review brief. Pilot input snapshots omit the mutable
// brief so a later playback review can reference them without a hash cycle.
export function prepareRenderProductionBrief(root, config) {
  if (config.frameRange !== undefined && (!Array.isArray(config.frameRange) || config.frameRange.length !== 2 || config.frameRange.some(n => !Number.isInteger(n)) || config.frameRange[0] < 0 || config.frameRange[1] < config.frameRange[0])) throw new Error('Invalid frame range.');
  if (config.inputs !== undefined && !Array.isArray(config.inputs)) throw new Error('Render inputs must be an array.');
  const inputs = config.inputs ?? [];
  if (config.frameRange !== undefined) {
    const briefPath = filled(config.teachingBriefPath) ? inside(root, config.teachingBriefPath) : undefined;
    return {inputs: inputs.filter(input => !briefPath || inside(root, input) !== briefPath), teachingBrief: undefined};
  }
  if (!filled(config.teachingBriefPath)) throw new Error('Full render requires teachingBriefPath. Complete the exact voiced preview and run node scripts/check-production-brief.mjs <brief.json> --stage=export. Use frameRange for an unreviewed short pilot.');
  const report = checkProductionBrief(root, config.teachingBriefPath, {stage: 'export', expectedLessonPath: config.lessonPath});
  if (!report.ready) throw new Error('Full render production brief is not ready: ' + JSON.stringify(report.blockers));
  const absolute = inside(root, config.teachingBriefPath);
  const relative = path.relative(root, absolute).replaceAll('\\', '/');
  return {inputs: [...new Set([...inputs, relative])], teachingBrief: {path: relative, sha256: sha256(readFileSync(absolute)), stage: 'export', pending: report.pending}};
}

export function createProductionBrief(root, lessonPath) {
  const bytes = readFileSync(inside(root, lessonPath)), lesson = JSON.parse(bytes);
  return {schemaVersion: 2, source: {lessonPath, lessonSha256: sha256(bytes)},
    progression: {planPath: 'docs/production/course-progression-plan-2026-10-09.md', prerequisiteKnowledge: '', startsWith: '', stopsAfter: '', nextLesson: ''},
    researchReferences: ['docs/research/hsc-video-production-standard-2026-10-02.md', 'docs/production/teaching-templates.md', 'docs/animation-planning.md'],
    teaching: {task: lesson.lessonIntent ?? '', causalExplanation: '', conversationalApproach: '', openingDecision: '', understandingCheck: '', curriculumScope: ''},
    scenes: lesson.scenes.map(scene => ({sceneId: scene.id, visualDecision: '', visualReference: '', teachingReason: '', narrationCue: '', motionPurpose: '', holdPurpose: ''})),
    scriptReview: {status: 'pending', reviewer: '', evidence: null},
    voicedPreview: {status: 'pending', reviewer: '', mode: '', inputSnapshotPath: '', evidence: null,
      humanListening: {status: 'pending', reviewer: '', mode: 'human-listening', evidence: null}},
    limitation: 'Pending scaffold, not approval. Fill the teaching and scene decisions before recording; review the exact voiced revision before a full export.'};
}

export function checkProductionBrief(root, briefPath, {stage = 'export', expectedLessonPath} = {}) {
  if (!stages.includes(stage)) throw new Error('Review stage must be draft, recording, export or release.');
  const blockers = [], pending = [];
  const block = (code, detail) => blockers.push({code, detail});
  let brief, lesson, lessonPath, lessonBytes;
  try {
    brief = JSON.parse(readFileSync(inside(root, briefPath), 'utf8'));
    lessonPath = inside(root, brief.source?.lessonPath);
    lessonBytes = readFileSync(lessonPath); lesson = JSON.parse(lessonBytes);
  } catch (error) { return {ready: false, stage, blockers: [{code: 'BRIEF_INPUT_INVALID', detail: error.message}], pending}; }
  if (![1, 2].includes(brief.schemaVersion) || !lesson || !Array.isArray(lesson.scenes) || !lesson.scenes.every(scene => scene && filled(scene.id))) {
    return {ready: false, stage, blockers: [{code: 'BRIEF_SCHEMA_INVALID', detail: 'Use the production teaching/visual brief template with a valid selected lesson.'}], pending};
  }
  if (brief.source.lessonSha256 !== sha256(lessonBytes)) block('BRIEF_LESSON_CHANGED', 'Selected lesson changed. Reconcile the brief and review the affected scenes before updating its source hash.');
  if (expectedLessonPath && lessonPath !== inside(root, expectedLessonPath)) block('BRIEF_LESSON_MISMATCH', 'Brief belongs to a different lesson.');
  if (!Array.isArray(brief.researchReferences) || !brief.researchReferences.length) block('BRIEF_RESEARCH_MISSING', 'Name the existing research/template/planning references.');
  else for (const reference of brief.researchReferences) {
    try { if (!existsSync(inside(root, reference))) block('BRIEF_RESEARCH_MISSING', reference); }
    catch (error) { block('BRIEF_RESEARCH_INVALID', error.message); }
  }
  const requireDecision = (value, label) => {
    if (!filled(value)) (stage === 'draft' ? pending : blockers).push({code: 'BRIEF_DECISION_MISSING', detail: label});
  };
  if (brief.schemaVersion === 2) {
    for (const name of ['planPath', 'prerequisiteKnowledge', 'startsWith', 'stopsAfter', 'nextLesson']) requireDecision(brief.progression?.[name], 'progression.' + name);
    if (filled(brief.progression?.planPath)) {
      try {if (!existsSync(inside(root, brief.progression.planPath))) block('BRIEF_PROGRESSION_PLAN_MISSING', brief.progression.planPath);}
      catch (error) {block('BRIEF_PROGRESSION_PLAN_INVALID', error.message);}
    }
  }
  for (const name of ['task', 'causalExplanation', 'conversationalApproach', 'openingDecision', 'understandingCheck', 'curriculumScope']) requireDecision(brief.teaching?.[name], 'teaching.' + name);
  const sceneRows = Array.isArray(brief.scenes) ? brief.scenes : [];
  const scenes = sceneRows.filter(scene => scene && typeof scene === 'object' && !Array.isArray(scene));
  if (scenes.length !== sceneRows.length) block('BRIEF_SCENE_COVERAGE', 'Scene rows must be objects.');
  const sceneIds = new Set(scenes.map(scene => scene.sceneId));
  if (scenes.length !== lesson.scenes.length || sceneIds.size !== scenes.length || lesson.scenes.some(scene => !sceneIds.has(scene.id))) block('BRIEF_SCENE_COVERAGE', 'Give exactly one decision row for every selected scene.');
  for (const scene of scenes) {
    if (!['reuse', 'adjust', 'new', 'none'].includes(scene.visualDecision)) {
      (stage === 'draft' ? pending : blockers).push({code: 'BRIEF_VISUAL_DECISION', detail: scene.sceneId + ': choose reuse, adjust, new or none.'});
    }
    for (const name of ['visualReference', 'teachingReason', 'narrationCue', 'motionPurpose', 'holdPurpose']) requireDecision(scene[name], scene.sceneId + '.' + name);
  }
  const evidence = (item, label) => {
    try {
      const bytes = readFileSync(inside(root, item?.path));
      if (!bytes.length || item.sha256 !== sha256(bytes)) block('BRIEF_EVIDENCE_CHANGED', label + ': evidence is empty or its hash changed.');
    } catch (error) { block('BRIEF_EVIDENCE_MISSING', label + ': ' + error.message); }
  };
  const review = (item, label, required) => {
    if (!reviewStatuses.includes(item?.status)) block('BRIEF_REVIEW_INVALID', label + ': status must be pending, pass or changes-required.');
    else if (item.status !== 'pass') (required ? blockers : pending).push({code: 'BRIEF_REVIEW_PENDING', detail: label + ': ' + item.status});
    if (item?.status === 'pass') {
      if (!filled(item.reviewer)) block('BRIEF_REVIEWER_MISSING', label);
      evidence(item.evidence, label);
    }
  };
  review(brief.scriptReview, 'Script/source review', stage !== 'draft');
  const needsPreview = ['export', 'release'].includes(stage);
  review(brief.voicedPreview, 'Exact voiced preview', needsPreview);
  if (brief.voicedPreview?.status === 'pass') {
    if (!['ui-playback', 'rendered-pilot'].includes(brief.voicedPreview.mode)) block('BRIEF_PREVIEW_MODE', 'A source read or still image does not establish voiced motion playback.');
    try {
      const snapshot = JSON.parse(readFileSync(inside(root, brief.voicedPreview.inputSnapshotPath), 'utf8'));
      if (!verifyRelease(root, snapshot).valid) block('BRIEF_PREVIEW_CHANGED', 'Preview inputs have drifted or are missing. Review the current exact voiced revision.');
      const relativeLesson = path.relative(root, lessonPath).replaceAll('\\', '/');
      if (!snapshot.files?.some(file => file.path === relativeLesson && file.sha256 === sha256(lessonBytes))) block('BRIEF_PREVIEW_LESSON_MISMATCH', 'Preview input snapshot must include this exact selected lesson.');
      const narrated = [...lesson.scenes];
      if (snapshot.timeline?.introFrames > 0 && lesson.introVoiceover) narrated.push({id: 'intro', voiceover: lesson.introVoiceover});
      const spoken = narrated.filter(scene => filled(scene.voiceover?.text));
      if (!spoken.length) block('BRIEF_PREVIEW_UNVOICED', 'A voiced preview needs at least one selected recording.');
      for (const scene of spoken) {
        if (!filled(scene.voiceover.audioFile)) { block('BRIEF_PREVIEW_UNVOICED', scene.id + ': no selected recording.'); continue; }
        const audioPath = scene.voiceover.audioFile.startsWith('public/') ? scene.voiceover.audioFile : 'public/' + scene.voiceover.audioFile;
        const audio = inside(root, audioPath), relativeAudio = path.relative(root, audio).replaceAll('\\', '/');
        if (!snapshot.files?.some(file => file.path === relativeAudio && file.sha256 === sha256(readFileSync(audio)))) block('BRIEF_PREVIEW_AUDIO_MISMATCH', scene.id + ': preview must bind the current selected recording.');
      }
    } catch (error) { block('BRIEF_PREVIEW_INPUT_INVALID', error.message); }
  }
  const listening = brief.voicedPreview?.humanListening;
  review(listening, 'Human listening', stage === 'release');
  if (listening?.status === 'pass' && listening.mode !== 'human-listening') block('BRIEF_LISTENING_MODE', 'UI/source evidence must not be described as human listening.');
  return {ready: blockers.length === 0, stage, blockers, pending,
    source: {lessonPath: brief.source.lessonPath, lessonSha256: sha256(lessonBytes)},
    limitation: 'Checks evidence presence, declared scope and exact dependencies. Does not judge teaching quality, verify reviewer identity or invent listening approval.'};
}
