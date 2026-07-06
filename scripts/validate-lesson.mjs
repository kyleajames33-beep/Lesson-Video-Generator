import {existsSync, readFileSync, readdirSync} from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import {getVoiceoverBudget} from './lesson-utils.mjs';

const supportedSceneTypes = new Set([
  'title',
  'hook',
  'concept',
  'definition',
  'formula',
  'workedExample',
  'misconception',
  'quickCheck',
  'summary',
  'marginalia',
  'labFootage',
  'endCard',
]);

const supportedDiagramTypes = new Set([
  'bridge',
  'dozenMole',
  'massComparison',
  'balance',
  'barChart',
  'galvanicCell',
  'energyProfile',
  'boltzmannDistribution',
  'venn',
  'flow',
  'orbit',
  'table',
  'beforeAfter',
  'explode',
  'gasVolumeComparison',
  'massBreakdown',
  'concentrationCompare',
  'titrationSetup',
  'limitingExcess',
  'errorDartboard',
  'calorimeter',
  'bondEnergy',
  'hessCycle',
  'entropyDisorder',
  'gibbsSpontaneity',
  'reductionPotentialLadder',
  'isotopeAtoms',
  'aufbauStaircase',
  'latticeVsElectronSea',
  'lineGraph',
  'punnettSquare',
  'pedigree',
  'dnaHelix',
  'transcriptionStrand',
  'chromosomeMutation',
  'lottie',
  'molecule3d',
  'circuit3d',
]);

const isObject = (value) => value !== null && typeof value === 'object' && !Array.isArray(value);
const isNonEmptyString = (value) => typeof value === 'string' && value.trim().length > 0;
const isPositiveInteger = (value) => Number.isInteger(value) && value > 0;

const getLessonFiles = () => {
  const args = process.argv.slice(2);
  if (args.length > 0) return args;

  const dataDir = path.resolve('src/data');
  return readdirSync(dataDir)
    .filter((file) => file.endsWith('.json'))
    .map((file) => path.join(dataDir, file));
};

const loadJson = (filePath, errors) => {
  if (!existsSync(filePath)) {
    errors.push(`File not found: ${filePath}`);
    return null;
  }

  try {
    return JSON.parse(readFileSync(filePath, 'utf8'));
  } catch (error) {
    errors.push(`Invalid JSON in ${filePath}: ${error.message}`);
    return null;
  }
};

const requireString = (scene, field, errors, pathLabel) => {
  if (!isNonEmptyString(scene[field])) {
    errors.push(`${pathLabel}: missing non-empty "${field}"`);
  }
};

const requireOptionalString = (scene, field, warnings, pathLabel, reason) => {
  if (!isNonEmptyString(scene[field])) {
    warnings.push(`${pathLabel}: consider adding "${field}" (${reason})`);
  }
};

const requireOptionalRootString = (lesson, field, warnings, reason) => {
  if (!isNonEmptyString(lesson[field])) {
    warnings.push(`root: consider adding "${field}" (${reason})`);
  }
};

const validateUnitCancel = (unitCancel, errors, pathLabel) => {
  if (!isObject(unitCancel)) {
    errors.push(`${pathLabel}: "unitCancel" must be an object`);
    return;
  }

  for (const field of ['left', 'right', 'result']) {
    if (!isNonEmptyString(unitCancel[field])) {
      errors.push(`${pathLabel}: "unitCancel.${field}" must be a non-empty string`);
    }
  }
};

const validateDiagram = (diagram, errors, pathLabel) => {
  if (diagram === undefined) return;
  if (!isObject(diagram)) {
    errors.push(`${pathLabel}: "diagram" must be an object`);
    return;
  }

  if (!supportedDiagramTypes.has(diagram.type)) {
    errors.push(`${pathLabel}: unsupported diagram type "${diagram.type}"`);
  }
};

const validateScene = (scene, index, errors, warnings, fps) => {
  const pathLabel = `scene[${index}]${scene?.id ? ` (${scene.id})` : ''}`;

  if (!isObject(scene)) {
    errors.push(`${pathLabel}: scene must be an object`);
    return;
  }

  requireString(scene, 'id', errors, pathLabel);

  if (!supportedSceneTypes.has(scene.type)) {
    errors.push(`${pathLabel}: unsupported scene type "${scene.type}"`);
    return;
  }

  if (!isPositiveInteger(scene.durationInFrames)) {
    errors.push(`${pathLabel}: "durationInFrames" must be a positive integer`);
  }

  requireString(scene, 'caption', errors, pathLabel);

  if (!isObject(scene.voiceover) || !isNonEmptyString(scene.voiceover.text)) {
    errors.push(`${pathLabel}: missing "voiceover.text"`);
  } else if (isPositiveInteger(scene.durationInFrames)) {
    const budget = getVoiceoverBudget({
      text: scene.voiceover.text,
      durationInFrames: scene.durationInFrames,
      fps,
    });
    if (budget.status === 'tight') {
      warnings.push(
        `${pathLabel}: voiceover may be too long (${budget.estimatedSeconds.toFixed(1)}s estimated; target ${budget.targetSeconds.toFixed(1)}s / ${budget.targetWords} words)`
      );
    }

    if (scene.voiceover.audioFile !== undefined) {
      if (!isNonEmptyString(scene.voiceover.audioFile)) {
        errors.push(`${pathLabel}: "voiceover.audioFile" must be a non-empty string when present`);
      } else if (!existsSync(path.resolve(scene.voiceover.audioFile))) {
        warnings.push(`${pathLabel}: voiceover audio file not found: ${scene.voiceover.audioFile}`);
      }
    }
  }

  if (['hook', 'concept', 'definition', 'formula', 'misconception'].includes(scene.type)) {
    requireString(scene, 'heading', errors, pathLabel);
    requireString(scene, 'body', errors, pathLabel);
    validateDiagram(scene.diagram, errors, pathLabel);
  }

  if (['hook', 'concept', 'definition', 'formula', 'misconception'].includes(scene.type)) {
    requireOptionalString(scene, 'callout', warnings, pathLabel, 'student-thinking prompt');
  }

  if (scene.type === 'formula' && scene.unitCancel) {
    validateUnitCancel(scene.unitCancel, errors, pathLabel);
  }

  if (scene.type === 'workedExample') {
    requireString(scene, 'heading', errors, pathLabel);
    requireString(scene, 'question', errors, pathLabel);
    requireOptionalString(scene, 'coachNote', warnings, pathLabel, 'target/method decision');

    if (!Array.isArray(scene.steps) || scene.steps.length < 3) {
      errors.push(`${pathLabel}: "steps" must contain at least 3 items`);
    } else {
      scene.steps.forEach((step, stepIndex) => {
        if (!isNonEmptyString(step)) {
          errors.push(`${pathLabel}: steps[${stepIndex}] must be a non-empty string`);
        }
      });
    }

    if (scene.unitCancel) {
      validateUnitCancel(scene.unitCancel, errors, pathLabel);
    } else {
      warnings.push(`${pathLabel}: consider adding "unitCancel" when units determine the answer`);
    }
  }

  if (scene.type === 'quickCheck') {
    requireString(scene, 'heading', errors, pathLabel);
    requireString(scene, 'question', errors, pathLabel);
    requireOptionalString(scene, 'pausePrompt', warnings, pathLabel, 'active recall before reveal');

    if (!Array.isArray(scene.answerSteps) || scene.answerSteps.length < 2) {
      errors.push(`${pathLabel}: "answerSteps" must contain at least 2 items`);
    } else {
      scene.answerSteps.forEach((step, stepIndex) => {
        if (!isNonEmptyString(step)) {
          errors.push(`${pathLabel}: answerSteps[${stepIndex}] must be a non-empty string`);
        }
      });
    }
  }

  if (scene.type === 'marginalia') {
    requireString(scene, 'heading', errors, pathLabel);
    requireString(scene, 'body', errors, pathLabel);
    requireOptionalString(scene, 'callout', warnings, pathLabel, 'student-thinking prompt');

    if (!Array.isArray(scene.notes) || scene.notes.length === 0) {
      errors.push(`${pathLabel}: "notes" must be a non-empty array`);
    } else {
      const validPositions = new Set(['top-right', 'mid-right', 'bottom-right']);
      scene.notes.forEach((note, noteIndex) => {
        if (!isObject(note)) {
          errors.push(`${pathLabel}: notes[${noteIndex}] must be an object`);
        } else {
          if (!isNonEmptyString(note.text)) {
            errors.push(`${pathLabel}: notes[${noteIndex}].text must be a non-empty string`);
          }
          if (!validPositions.has(note.position)) {
            errors.push(`${pathLabel}: notes[${noteIndex}].position must be one of top-right, mid-right, bottom-right`);
          }
        }
      });
    }
  }

  if (scene.type === 'labFootage') {
    requireString(scene, 'heading', errors, pathLabel);
    requireString(scene, 'image', errors, pathLabel);
    requireOptionalString(scene, 'body', warnings, pathLabel, 'what the student should observe');

    if (scene.annotations !== undefined) {
      const validPositions = new Set(['top-left', 'top-right', 'bottom-left', 'bottom-right']);
      scene.annotations.forEach((annotation, annotationIndex) => {
        if (!isObject(annotation)) {
          errors.push(`${pathLabel}: annotations[${annotationIndex}] must be an object`);
        } else {
          if (!isNonEmptyString(annotation.text)) {
            errors.push(`${pathLabel}: annotations[${annotationIndex}].text must be a non-empty string`);
          }
          if (!validPositions.has(annotation.position)) {
            errors.push(`${pathLabel}: annotations[${annotationIndex}].position must be one of top-left, top-right, bottom-left, bottom-right`);
          }
        }
      });
    }
  }

  if (scene.type === 'misconception') {
    requireOptionalString(scene, 'mistakeTag', warnings, pathLabel, 'explicit common-trap label');
  }

  if (scene.type === 'summary') {
    requireString(scene, 'heading', errors, pathLabel);
    requireOptionalString(scene, 'finalPrompt', warnings, pathLabel, 'transfer decision rule');

    if (!Array.isArray(scene.points) || scene.points.length < 3) {
      errors.push(`${pathLabel}: "points" must contain at least 3 items`);
    } else {
      scene.points.forEach((point, pointIndex) => {
        if (!isNonEmptyString(point)) {
          errors.push(`${pathLabel}: points[${pointIndex}] must be a non-empty string`);
        }
      });
    }
  }
};

const validateLesson = (lesson, filePath) => {
  const errors = [];
  const warnings = [];

  if (!isObject(lesson)) {
    errors.push('lesson root must be an object');
    return {filePath, errors, warnings};
  }

  for (const field of ['title', 'subtitle', 'subject', 'yearLevel', 'module', 'lesson']) {
    if (!isNonEmptyString(lesson[field])) {
      errors.push(`missing non-empty root "${field}"`);
    }
  }

  requireOptionalRootString(lesson, 'syllabusVersion', warnings, 'bulk production and future syllabus migration');
  requireOptionalRootString(lesson, 'syllabusModule', warnings, 'site filtering and syllabus coverage tracking');
  requireOptionalRootString(lesson, 'lessonIntent', warnings, 'clear learning target');
  requireOptionalRootString(lesson, 'examSkill', warnings, 'HSC transfer skill');

  if (lesson.syllabusDotPoints !== undefined) {
    if (!Array.isArray(lesson.syllabusDotPoints)) {
      errors.push('"syllabusDotPoints" must be an array when present');
    } else if (lesson.syllabusDotPoints.some((point) => !isNonEmptyString(point))) {
      errors.push('"syllabusDotPoints" must contain only non-empty strings');
    }
  } else {
    warnings.push('root: consider adding "syllabusDotPoints" (syllabus coverage tracking)');
  }

  if (lesson.productionRole !== undefined && !['reference', 'production'].includes(lesson.productionRole)) {
    errors.push('"productionRole" must be "reference" or "production" when present');
  }

  if (!isPositiveInteger(lesson.fps)) errors.push('"fps" must be a positive integer');
  if (!isPositiveInteger(lesson.width)) errors.push('"width" must be a positive integer');
  if (!isPositiveInteger(lesson.height)) errors.push('"height" must be a positive integer');

  if (!Array.isArray(lesson.scenes) || lesson.scenes.length === 0) {
    errors.push('"scenes" must be a non-empty array');
  } else {
    const ids = new Set();
    lesson.scenes.forEach((scene, index) => {
      if (isObject(scene) && isNonEmptyString(scene.id)) {
        if (ids.has(scene.id)) {
          errors.push(`scene[${index}] (${scene.id}): duplicate scene id`);
        }
        ids.add(scene.id);
      }
      validateScene(scene, index, errors, warnings, isPositiveInteger(lesson.fps) ? lesson.fps : 30);
    });

    if (lesson.scenes[0]?.type !== 'title') {
      warnings.push('scene[0]: first scene should usually be "title"');
    }

    if (!lesson.scenes.some((scene) => scene.type === 'hook')) {
      warnings.push('lesson should include a "hook" scene');
    }
    if (!lesson.scenes.some((scene) => scene.type === 'quickCheck')) {
      warnings.push('lesson should include a "quickCheck" scene');
    }
    if (!lesson.scenes.some((scene) => scene.type === 'misconception')) {
      warnings.push('lesson should include a "misconception" scene');
    }
    if (!lesson.scenes.some((scene) => scene.type === 'summary')) {
      warnings.push('lesson should include a "summary" scene');
    }
  }

  return {filePath, errors, warnings};
};

const results = getLessonFiles().map((filePath) => {
  const resolved = path.resolve(filePath);
  const loadErrors = [];
  const lesson = loadJson(resolved, loadErrors);
  if (!lesson) return {filePath: resolved, errors: loadErrors, warnings: []};
  return validateLesson(lesson, resolved);
});

let hasErrors = false;

for (const result of results) {
  console.log(`\n${result.filePath}`);

  if (result.errors.length === 0 && result.warnings.length === 0) {
    console.log('  ok');
    continue;
  }

  for (const error of result.errors) {
    hasErrors = true;
    console.error(`  error: ${error}`);
  }

  for (const warning of result.warnings) {
    console.log(`  warning: ${warning}`);
  }
}

if (hasErrors) {
  process.exitCode = 1;
}
