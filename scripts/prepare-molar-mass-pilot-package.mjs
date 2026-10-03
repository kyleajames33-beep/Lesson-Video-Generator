import {createHash} from 'node:crypto';
import {mkdirSync, readFileSync, writeFileSync} from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const wordCount = text => text.trim().split(/\s+/).length;
const sha = text => createHash('sha256').update(text).digest('hex');

export function buildPilotPackage(protocol, voiceSelection) {
  function passage(marker) {
    const start = protocol.indexOf(marker);
    if (start < 0) throw new Error(`Missing source marker: ${marker}`);
    const headingEnd = protocol.indexOf('\n', start);
    const paragraph = protocol.slice(headingEnd + 1).match(/^\s*> ([^\r\n]+)/)?.[1];
    if (!paragraph) throw new Error(`Missing narration after: ${marker}`);
    if (paragraph.includes(String.fromCodePoint(0x2014))) throw new Error('Selected speech contains prohibited punctuation.');
    return paragraph;
  }
  const introduction = passage('**Common introduction:**');
  const descriptive = passage('**A: descriptive middle,');
  const causal = passage('**B: causal middle,');
  const prompt = passage('**Common prompt:**');
  const feedback = passage('**Common feedback:**');
  const segment = (id, text) => ({id, kind: 'speech', text, wordCount: wordCount(text), textSha256: sha(text), selectedAudio: null, alignment: null, resolvedDurationFrames: null});
  const variant = (id, label, middle) => {
    const segments = [segment('introduction', introduction), segment('worked-explanation', middle), segment('prompt', prompt),
      {id: 'response-hold', kind: 'silence', durationSeconds: 6, durationFrames: 180, allowLongerViewerPause: true, answerVisible: false}, segment('feedback', feedback)];
    return {id, label, segments, totalSpokenWords: segments.reduce((sum, s) => sum + (s.wordCount ?? 0), 0), render: null};
  };
  const variants = [variant('A', 'Descriptive worked explanation', descriptive), variant('B', 'Causal worked explanation', causal)];
  if (Math.abs(wordCount(descriptive) - wordCount(causal)) > 5) throw new Error('Middle passages no longer approximately word-matched; review experiment.');
  return {
    schemaVersion: 1, id: 'molar-mass-script-comparison', status: 'draft-for-science-and-production-review',
    sourceProtocol: 'docs/research/pilot-protocol.md', sourceProtocolSha256: sha(protocol),
    scope: 'Isolated script comparison; not a replacement lesson or an audio generation request',
    target: {subject: 'Chemistry', yearLevel: 'Year 11 foundations', syllabusVersion: '2017', objective: 'Choose and explain a mass/mole operation using mass per mole', teacherApproval: 'pending'},
    controls: {voiceId: voiceSelection.voiceId, voiceName: voiceSelection.voiceName, trialModelId: voiceSelection.modelId, modelDecision: 'same in both variants; not a library-wide model commitment', settings: null, fps: 30, visual: 'same existing calculation board', responseHoldSeconds: 6, feedback: 'identical', captionPolicy: 'faithful speech; no answer during hold', opening: 'no stinger in isolated comparison; separate from production lesson opening decision'},
    suppliedValues: {carbonMolarMass: 12.01, unit: 'g mol^-1', workedAmountMol: 2.00, workedMassGuardDigitsG: 24.02, workedMassReportedG: '24.0', promptMassG: 36.03, promptAmountMol: '3.00'},
    unresolved: ['Subject review', 'Supported model settings and generation budget', 'Selected fresh takes and listening review', 'Actual duration and reveal/caption timeline', 'Phone/export review', 'Learner recruitment and consent'],
    variants,
    assessment: {primary: 'new mass-to-amount calculation plus operation explanation, 0 to 4', secondary: ['opposite direction, 0 to 2', 'misconception repair, 0 to 2', 'delayed meaning and transfer'], formCounterbalancing: 'Both immediate forms used within each variant; unused form at delayed test', forms: [
      {id: 'A', carbonMolarMass: 12.01, primaryMassG: 18.015, primaryAmountMol: '1.500', oppositeAmountMol: '0.500', oppositeMassG: '6.01'},
      {id: 'B', carbonMolarMass: 12.01, primaryMassG: 30.025, primaryAmountMol: '2.500', oppositeAmountMol: '0.250', oppositeMassG: '3.00'},
    ]},
  };
}

function scriptsMarkdown(pilot) {
  return `# Molar-mass matched scripts\n\nDraft for review. Source: [pilot protocol](../../../research/pilot-protocol.md). No recordings are attached. These full scripts include identical introduction, prompt and feedback. Word counts are whitespace counts, not delivery measurements. Do not read segment names or hold instructions aloud.\n\n` + pilot.variants.map(v =>
    `## Variant ${v.id}: ${v.label}\n\n${v.totalSpokenWords} spoken words.\n\n` + v.segments.map(s => s.kind === 'silence' ? '**Assembly instruction:** six seconds of exact silence after prompt audio finishes. Keep only the question and supplied values. No answer cue or explanatory arithmetic.\n' : `**${s.id}:**\n\n> ${s.text}\n`).join('\n')).join('\n');
}

function studentForm(form) {
  return `# Molar-mass assessment: form ${form.id}\n\nParticipant code: ______  Date: ______\n\nUse a calculator if you wish. Work independently without lesson notes for the first attempt. Your responses are not school grades. Explain your reasoning even if unsure. Use carbon molar mass 12.01 g mol⁻¹ throughout.\n\n1. A sample has mass ${form.primaryMassG} g. Find its amount in moles. Show your setup and unit. Explain why you multiply or divide.\n\n   Calculation: __________________________________________\n\n   Explanation: __________________________________________\n\n2. A sample contains ${form.oppositeAmountMol} mol. Find its mass. Show your setup and unit.\n\n   Response: __________________________________________\n\n3. A student multiplies ${form.primaryMassG} g by 12.01 g mol⁻¹ and reports an answer in moles. Identify and repair the error.\n\n   Response: __________________________________________\n\nAfter you submit the science responses:\n\n- Confidence solving another problem: 0 (not confident) to 100 (very confident): ____\n- Interest: 1 (very low) to 5 (very high): ____\n- Mental effort: 1 (very low) to 5 (very high): ____\n- What was confusing or useful? ____________________________\n\nFor a delayed session only, before these questions: explain the meaning and unit of molar mass. Do not rewatch first.\n\n   Meaning/unit: __________________________________________\n`;
}

const scenePlan = `# Matched scene and hold plan

Status: draft cues, not frame-resolved. Reuse the existing formula/worked calculation boards rather than making an art-style comparison. No new artwork is required for this package. Follow the standing animation-planning and visual-design handbook.

| Beat | Objective/student decision | Speech ID | Common board | Motion/constraint | Hold and evidence |
| --- | --- | --- | --- | --- | --- |
| Introduction | Identify mass per mole and the target conversion | introduction | Carbon M = 12.01 g mol⁻¹; given n = 2.00 mol; identify m, n and M with meanings | Stable labels; distinguish sample mass and amount; no word-by-word hero movement | Brief readable landing; exact time after audio review |
| Worked example | Follow the relationship and final precision | worked-explanation | m = nM; 2.00 × 12.01 = 24.02 g; reported 24.0 g | Same board and reveal sequence for both variants; reveal according to equivalent spoken ideas, not decorative treatment | Keep given values; log differences in reading exposure |
| Prompt | Choose multiplication/division and explain | prompt | M = 12.01 g mol⁻¹; sample mass 36.03 g; choose operation and explain | Clear example arithmetic before asking; no n = m/M displayed during response | Gap starts at actual prompt audio endpoint |
| Response | Think or choose a longer pause | response-hold | Question and given values only | Exactly 180 frames at 30 fps, stable board; no answer audio, visual, caption or transition leakage | First answer exposure must follow all six seconds |
| Feedback | Explain the operation and interpret result | feedback | n = m/M; 36.03/12.01 = 3.00 mol; mass per mole explanation | Same explanatory feedback; final result stable | Brief final reading hold, resolved fairly for both |

The causal middle provides more interpretation but does not receive an extra helpful animation. The common feedback supplies reasoning to both groups and may reduce measured differences. Assessment is close transfer; no claim of broad mastery follows.

Use segment-local cues while drafting. After selecting fresh recordings, resolve cumulative frames from actual audio durations plus the 180-frame response gap. Derive assembled audio, caption offsets and reveal cues from that same timeline. The first visible answer, including an opacity fade, defines answer exposure. No scene crossfade may bring the answer into the response interval.

Review: teacher/science pending; delivery listening pending; phone/caption and full playback pending. A still does not close these items.
`;

function rubric(pilot) {
  return `# Assessment rubric and facilitator instructions\n\nKeep this document separate from the student forms. Follow the [protocol](../../../research/pilot-protocol.md) for consent, allocation, outcomes and decision rules. No learner data should be committed here.\n\n## Answers and scores\n\n| Form | Primary amount | Opposite-direction mass |\n| --- | --- | --- |\n${pilot.assessment.forms.map(f => `| ${f.id} | ${f.primaryAmountMol} mol | ${f.oppositeMassG} g |`).join('\n')}\n\nPrimary 0 to 4: one point for division setup, one for correct numerical amount/unit, up to two for explanation. Two explanation points connect mass per mole to how many one-mole masses fit; one repeats a correct rule; zero is absent/incorrect. Record rounding separately; do not remove the numerical point solely for an otherwise correct conceptual answer with different rounding.\n\nOpposite direction 0 to 2: one point multiplication setup and one correct mass/unit. Accept guard digits while recording reporting precision separately. Misconception 0 to 2: one identifies wrong quantity/operation or invalid resulting units, one repairs with division and explains the count. Dimensional agreement alone does not prove full correctness.\n\nDelayed meaning/unit 0 to 2: one for mass per mole and one for g mol⁻¹ or equivalent. Use the unused calculation form and the same scoring. Record intervening study and days since viewing.\n\n## Session order\n\n1. Confirm voluntary consent/assent and accommodations. Use participant codes. Explain that performance is ungraded and this tests the material.\n2. Record topic exposure and initial confidence. Optional minimal prerequisite check: identify a mass unit and find the total mass of three identical two-kilogram bags. Give no target-method feedback before viewing.\n3. Allocate one variant per learner. Counterbalance immediate forms within each variant. Do not show both variants to the same learner for a learning comparison.\n4. Let students watch with normal pause/replay and equal accessibility options. Log device, captions, pauses, replay and assistance. Do not tutor during the test.\n5. Collect first science responses before preference questions or discussion. Ask retrospective usability questions afterward; no concurrent think-aloud in the main outcome session.\n6. Blind variant labels for scoring. Second reviewer checks at least a quarter of responses and ambiguous cases. Use the rubric before looking at group differences.\n7. Follow up at seven days, with plus/minus two days permitted. Use the other form; no rewatch before assessment. Document missing follow-up and subsequent teaching.\n\nForm IDs A/B are assessment forms and are independent of script variant A/B. Keep both columns in allocation records to prevent accidental confounding. Teacher review of scientific accuracy and parallel difficulty remains pending.\n\nThe formative group is 6 to 8, not an efficacy trial. Success and stop criteria remain the predeclared local rules in the protocol. Do not change thresholds after seeing favourable results.\n`;
}

export function preparePilotPackage(root = process.cwd()) {
  const protocol = readFileSync(path.join(root, 'docs/research/pilot-protocol.md'), 'utf8');
  const voice = JSON.parse(readFileSync(path.join(root, 'src/prototypes/data/molar-mass-voice-selection.json'), 'utf8'));
  const pilot = buildPilotPackage(protocol, voice);
  const dir = path.join(root, 'docs/production/pilots/molar-mass');
  mkdirSync(dir, {recursive: true});
  writeFileSync(path.join(dir, 'pilot.json'), JSON.stringify(pilot, null, 2) + '\n');
  writeFileSync(path.join(dir, 'scripts.md'), scriptsMarkdown(pilot));
  writeFileSync(path.join(dir, 'scene-plan.md'), scenePlan);
  writeFileSync(path.join(dir, 'assessment-rubric.md'), rubric(pilot));
  for (const form of pilot.assessment.forms) writeFileSync(path.join(dir, `assessment-${form.id.toLowerCase()}.md`), studentForm(form));
  return {directory: 'docs/production/pilots/molar-mass', status: pilot.status, variants: pilot.variants.map(v => ({id: v.id, spokenWords: v.totalSpokenWords})), holdFrames: 180, audioGenerated: false};
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  console.log(JSON.stringify(preparePilotPackage(), null, 2));
}
