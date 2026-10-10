from pathlib import Path
import json, re, hashlib

ROOT = Path(__file__).resolve().parents[4]
DEST = Path(__file__).resolve().parent
PREP = ROOT / 'docs/production/drafts/module5-next-preparation-2026-10-10/chemistry-c2.md'
EXPECTED = '699108d28dc0ee421351c70d3223f42a50b9e1eb188e2d4e67e7d0498719f3a5'
sha = lambda b: hashlib.sha256(b).hexdigest()
assert sha(PREP.read_bytes()) == EXPECTED, 'Reviewed preparation drifted'
text = PREP.read_text(encoding='utf-8')
if (DEST / 'production-brief.json').exists():
    existing_brief = json.loads((DEST / 'production-brief.json').read_text(encoding='utf-8'))
    existing_lesson = json.loads((DEST / 'lesson.json').read_text(encoding='utf-8'))
    assert existing_brief['scriptReview']['status'] == 'pending', 'Preserve reviewed source: prepare a new additive revision instead'
    assert not any(s.get('voiceover', {}).get('audioFile') for s in existing_lesson['scenes']), 'Preserve recorded source: prepare a new additive revision instead'
blocks = dict(re.findall(r'### (c2-[\w-]+):[^\n]*\n(.*?)(?=\n### |\n## |\Z)', text, re.S))
speech = {}
for ident, block in blocks.items():
    if ident == 'c2-title': continue
    speech[ident] = re.findall(r'\*\*Narration(?:, (?:prompt|feedback) segment)?:\*\* “([^”]+)”', block)
    assert speech[ident]

words = lambda s: len(s.split())
frames = lambda s: round(words(s) / 145 * 1800) + 60
def cue(ident, phrase):
    spoken = ' '.join(speech[ident])
    return round(words(spoken[:spoken.index(phrase)]) / 145 * 1800)

def diagram(mode, **props):
    return {'type': 'diorama', 'kind': 'chem12m5Approach', 'props': {'mode': mode, **props}}
def concept(ident, heading, body, bullets, mode, props, caption, secondary='', callout=''):
    return {'id': ident, 'type': 'concept', 'heading': heading, 'body': body,
        'bullets': [{'text': s, 'at': at / 30} for s, at in bullets],
        'secondary': secondary, 'callout': callout, 'conceptVisualLayout': 'diagramFocus',
        'diagram': diagram(mode, **props), 'durationInFrames': frames(' '.join(speech[ident])),
        'caption': caption, 'voiceover': {'text': ' '.join(speech[ident])},
        'revealDelays': {'heading': 12, 'body': 36, 'diagram': 20, 'secondary': 90, 'callout': max(100, frames(' '.join(speech[ident])) - 300)}}

lesson = {'title': 'How reversible reactions approach equilibrium', 'subtitle': 'Two changing rates, one dynamic balance',
    'subject': 'Chemistry', 'yearLevel': 'Year 12', 'module': 'Module 5', 'lesson': 'Lesson 2',
    'syllabusVersion': 'Chemistry Stage 6 Syllabus (2017)', 'syllabusModule': 'Module 5: Equilibrium and Acid Reactions',
    'syllabusDotPoints': ['Explain concentration and rate relationships in a stated reversible model (candidate contribution to ACSCH070 and ACSCH094).'],
    'moduleLessonCount': 18, 'nesaOutcomes': ['CH12-12', 'CH11/12-5', 'CH11/12-6', 'CH11/12-7'],
    'inquiryQuestion': 'What happens when chemical reactions do not go through to completion?',
    'lessonIntent': 'Explain the changing opposing rates in a stated A-only reversible model and distinguish faster equilibration from a changed final equilibrium composition.',
    'examSkill': 'Use both supplied direction rates to justify initial net change; explain the catalyst effect under fixed conditions.',
    'productionRole': 'production', 'fps': 30, 'width': 1920, 'height': 1080, 'introDurationInFrames': 0, 'scenes': []}
scenes = lesson['scenes']
scenes.append({'id': 'c2-title', 'type': 'title', 'durationInFrames': 120, 'caption': 'How reversible reactions approach equilibrium'})
scenes.append({'id': 'c2-hook', 'type': 'hook', 'heading': 'Does reverse have to wait?',
    'body': 'A starts turning into B. Can B turn back before equilibrium?',
    'callout': 'The opposing processes overlap.', 'diagram': diagram('hook', reverseAt=cue('c2-hook', 'It can turn back')),
    'durationInFrames': frames(speech['c2-hook'][0]), 'caption': 'Follow the opposing processes from an A-only start.',
    'voiceover': {'text': speech['c2-hook'][0]},
    'revealDelays': {'heading': 12, 'body': 36, 'diagram': 20, 'callout': cue('c2-hook', 'It can turn back')}})
scenes.append(concept('c2-model', 'State the model first', 'A and B are two forms of one model substance.',
    [('One A becomes one B.', 30), ('A-only start: no B to convert back.', cue('c2-model', 'At the beginning')), ('Fixed first-order coefficients, not a general rate law.', 90)],
    'model', {'runAt': cue('c2-model', 'Closed means')}, 'Closed, fixed-volume, constant-temperature first-order model.',
    'Well mixed; no side reactions. Schematic quantities, not measurements.', 'Closed does not mean insulated.'))
scenes.append(concept('c2-collision', 'Meeting is only part of it', 'An effective collision leads to reaction.',
    [('Enough energy and a suitable arrangement.', cue('c2-collision', 'The particles also')), ('More particles in the same volume: more opportunities to meet.', cue('c2-collision', 'With more nitrogen'))],
    'association', {}, 'Collision explanation and a distinct two-to-one association example.',
    'The A/B conversion model is not a collision mechanism.', 'Activation energy is the reaction barrier.'))
scenes.append(concept('c2-rates', 'Both rates change together', 'Our start: A only.',
    [('Less A: forward rate falls.', cue('c2-rates', 'As A decreases')), ('More B: reverse rate rises.', cue('c2-rates', 'As B builds up'))],
    'rates', {'forwardAt': cue('c2-rates', 'As A decreases'), 'reverseAt': cue('c2-rates', 'As B builds up'), 'limitAt': cue('c2-rates', 'At equilibrium')},
    'Finite curves approach the equal, non-zero equilibrium limiting rate.',
    'Fixed scale and conditions. The exact equilibrium limit is shown separately.', 'Replacement balances removal.'))
scenes.append(concept('c2-amounts', 'A different graph quantity', 'Same model, start and conditions.',
    [('Rate: conversion per time.', cue('c2-amounts', 'Rate tells us')), ('Concentration: amount per volume.', cue('c2-amounts', 'Concentration tells us'))],
    'amounts', {'forwardAt': 90, 'reverseAt': 210, 'limitAt': cue('c2-amounts', 'Their two final levels')},
    'Schematic concentrations approach unequal limiting levels.',
    'A:B equilibrium limit is 2:1, an authored model choice.', 'A different start can reverse the approach.'))
scenes.append(concept('c2-catalyst', 'Sooner, same final balance', 'Repeat the identical starting mixture.',
    [('Alternative pathway with a lower effective barrier.', cue('c2-catalyst', 'A catalyst provides')), ('Overall endpoint energies stay the same.', cue('c2-catalyst', 'It does not change'))],
    'catalyst', {'graphAt': cue('c2-catalyst', 'In our comparison'), 'limitAt': cue('c2-catalyst', 'In our comparison'),
        'comparisonAt': cue('c2-catalyst', 'At an early comparison time'), 'comparisonEnd': cue('c2-catalyst', 'Once both mixtures')},
    'Same starting mixture and conditions; catalyst changes approach time.',
    'Schematic pathways and concentrations. No universal numerical catalyst factor.', 'Same final equilibrium composition.'))

prompt, feedback = speech['c2-transfer']
hold_start = frames(prompt) - 60
answer_start = hold_start + 300
feedback_cue = lambda phrase: answer_start + round(words(feedback[:feedback.index(phrase)]) / 145 * 1800)
stages = [
    {'label': 'Which process makes C?', 'lines': ['D → C makes C.', 'C initially increases.'], 'summary': 'C initially increases.'},
    {'label': 'Compare both rates', 'lines': ['Six makes C; two removes C.', 'Net four units towards C.'], 'lineAts': [feedback_cue('The reverse process'), feedback_cue('In this one-for-one model')], 'summary': 'Supplied rates justify direction.'},
    {'label': 'Compare final composition', 'lines': ['Same final equilibrium D.', 'The catalyst gets there sooner.'], 'lineAts': [feedback_cue('It does not finish'), feedback_cue('With the suitable catalyst')], 'summary': 'Final composition unchanged.'}
]
step_ats = [answer_start, feedback_cue('The reverse process'), feedback_cue('With the suitable catalyst')]
scenes.append({'id': 'c2-transfer', 'type': 'quickCheck', 'heading': 'A different start',
    'question': 'Which substance initially increases? Use both rates. Does a catalyst change the final equilibrium concentration of D?',
    'answerSteps': ['C initially increases.', 'Net four units towards C in the one-to-one model.', 'Catalyst: same final equilibrium concentration of D.'],
    'durationInFrames': answer_start + frames(feedback), 'caption': 'Use both rates. Compare initial change with final equilibrium.',
    'voiceover': {'text': prompt + ' ' + feedback},
    'revealDelays': {'heading': 24, 'pausePrompt': max(24, hold_start - 60), 'responseHoldStart': hold_start, 'answerVisibleStart': answer_start, 'stepAts': step_ats},
    'calculationPresentation': {'layout': 'module5Evidence', 'task': 'Initial increase? Final catalyst effect?', 'equation': 'C ⇌ D (one-to-one)',
        'givens': [{'label': 'C → D', 'value': '2 rate units'}, {'label': 'D → C', 'value': '6 rate units'}],
        'references': [{'label': 'Start', 'value': 'Mostly D'}, {'label': 'System', 'value': 'Closed'}],
        'note': 'Same scale: arbitrary rate units. Fixed temperature and volume.', 'stages': stages}})
scenes.append({'id': 'c2-summary', 'type': 'summary', 'heading': 'What changes, what balances?',
    'points': ['Opposing processes overlap before equilibrium.', 'Rates balance; concentrations may differ.', 'Catalyst changes approach time, not final composition.'],
    'finalPrompt': 'Next: concentration and temperature disturbances (C3).',
    'durationInFrames': frames(speech['c2-summary'][0]), 'caption': 'Explain changing rates and the catalyst comparison.', 'voiceover': {'text': speech['c2-summary'][0]}})

def save(name, value):
    (DEST / name).write_text(json.dumps(value, ensure_ascii=False, indent=2) + '\n', encoding='utf-8', newline='\n')
save('lesson.json', lesson)
save('remotion-props.json', {'lesson': lesson})
relative = lambda p: p.relative_to(ROOT).as_posix()
source = {'lessonPath': relative(DEST / 'lesson.json'), 'lessonSha256': sha((DEST / 'lesson.json').read_bytes())}
scenefields = []
purposeful_cues = {
    'c2-title': 'Silent identity hold.',
    'c2-hook': 'It can turn back while the forward reaction is still happening.',
    'c2-model': 'So the forward process can run, but the reverse rate is zero because there is no B to convert yet. Conversion begins only after this starting-state explanation.',
    'c2-collision': 'Activation energy is the energy barrier that reacting particles must overcome. Association board remains distinct on two nitrogen dioxide molecules.',
    'c2-rates': 'As A decreases, the forward rate falls. As B builds up, the reverse rate rises. At equilibrium introduces the separate limiting-state card.',
    'c2-amounts': 'Rate tells us how quickly conversion happens. Concentration tells us how much is present per volume.',
    'c2-catalyst': 'In our comparison, B approaches the same final level sooner. At an early comparison time introduces the common early marker; Once both mixtures removes it.',
    'c2-transfer': 'Prompt ends at Take a moment, or pause if you would like longer. Feedback begins C initially increases. Net four appears at In this one-for-one model; final D appears at It does not finish.',
    'c2-summary': 'Equilibrium is the balance of equal non-zero rates, not a requirement for equal concentrations.'
}
motion_decisions = {
    'c2-hook': 'Reveal the reverse arrow on It can turn back. Forward remains visible, explaining overlap. Stable rhetorical stimulus; no scored response hold.',
    'c2-model': 'The initial A-only board holds with forward positive and reverse zero. Start bar conversion after that explanation; reverse arrow appears only when B exists. Bars represent schematic concentrations, not particles or collision paths.',
    'c2-collision': 'Stable coded two-to-one association inset preserves two N and four O atoms. No unreviewed collision animation or inferred real rate law. Reading hold makes energy and arrangement the explanation.',
    'c2-rates': 'Draw forward and reverse curves at their separate spoken changes on one fixed scale. The finite trace stays labelled approaching equilibrium. At equilibrium reveals a separately labelled exact limiting state with both directions retained.',
    'c2-amounts': 'Draw concentrations from the same declared first-order model and fixed scale, retaining unequal limiting levels. No tiny duplicate rate reference; the preceding rate scene supplies the contrast without compromising essential graph labels.',
    'c2-catalyst': 'Stable schematic energy pathways retain identical endpoints. Reveal concentration comparison at In our comparison. Add one shared early marker at At an early comparison time and remove it at Once both mixtures. Limiting B level is shared; no universal numeric factor.',
    'c2-transfer': 'Keep the entire prompt and response answer-free. Stage C increase at feedback start, compare both supplied rates next, delay net-four line to its own cue and delay final-D line to It does not finish. Retain established compact results.',
    'c2-title': 'Stable identity reading hold.',
    'c2-summary': 'Ordered stable recap anchors and the C3 handoff.'
}
for scene in scenes:
    ident = scene['id']
    block = blocks[ident]
    decision = re.search(r'\*\*Visual decision:\*\* (.*?)(?=\n\n|\Z)', block, re.S).group(1)
    mode = scene.get('diagram', {}).get('props', {}).get('mode')
    ref = 'src/slides/TitleSlide.tsx' if ident == 'c2-title' else 'src/slides/SummarySlide.tsx' if ident == 'c2-summary' else 'src/slides/shared/Module5EvidenceBoard.tsx via existing quick-check response gate' if ident == 'c2-transfer' else 'src/slides/diagrams/kinds/chem-y12-m5/Module5ApproachDiagram.tsx; mode ' + str(mode) + ' in existing ' + ('HookSlide' if ident == 'c2-hook' else 'ConceptSlide diagramFocus')
    cue_text = purposeful_cues[ident]
    scenefields.append({'sceneId': ident, 'visualDecision': 'reuse' if ident in ['c2-title', 'c2-summary'] else 'adjust',
        'visualReference': ref, 'teachingReason': decision,
        'narrationCue': cue_text + (' Estimated cue fields must be replaced by measured alignment after recording.' if ident != 'c2-title' else ''),
        'motionPurpose': motion_decisions[ident] + ' All cues remain estimates until selected narration is aligned.',
        'holdPurpose': 'Ten seconds of planned assembled silence after the complete prompt, with answer-free stimulus and no captions or answer stage until answerVisibleStart. Estimated source boundary only, not measured silence.' if ident == 'c2-transfer' else 'Stable labelled board for reading and reasoning. Silent author stills cannot establish voiced timing, device fit or listening.'})

review_path = ROOT / 'docs/production/chemistry-c2-preparation-review-2026-10-10.md'
brief = {'schemaVersion': 2, 'source': source,
    'progression': {'planPath': 'docs/production/course-progression-plan-2026-10-09.md',
        'prerequisiteKnowledge': 'C1: equal non-zero rates, concentration versus rate, closed versus insulated systems; particle motion. Activation energy receives a short bridge here. Entry check: equal amounts changing oppositely each second leave composition unchanged. C1 support is not a promised public link.',
        'startsWith': 'A-only start in a closed, constant-temperature, fixed-volume, well-mixed first-order A/B model with positive fixed conversion coefficients and no side reactions.',
        'stopsAfter': 'Explain changing opposing rates in this model and why a suitable catalyst changes approach time, not the fixed-condition final equilibrium composition. No K, ICE, Q, disturbance rules or industrial optimisation.',
        'nextLesson': 'Core chem-m5-c03: concentration and temperature disturbance from established equilibrium. Retain chem-m5-g01 non-equilibrium enthalpy/entropy companion and chem-m5-p01 supervised practical support. g01 is not a universal C3 prerequisite.'},
    'researchReferences': ['docs/research/hsc-video-production-standard-2026-10-02.md', 'docs/research/library-implementation-plan.md', 'docs/production/teaching-templates.md', 'docs/production/teaching-visual-brief-template.md', 'docs/visual-design-handbook.md', 'docs/animation-planning.md', 'docs/production/preview-first-review.md', 'docs/production/module5-video-route-2026-10-10.json', 'docs/production/course-content-checklist-2026-10-09.json', 'docs/production/course-progression-ledger-2026-10-09.json'],
    'teaching': {'task': lesson['lessonIntent'],
        'causalExplanation': 'The declared first-order one-to-one model begins with A only: forward rate is positive and reverse rate zero. A falls and B rises, changing both rates concurrently. The equilibrium limit has equal non-zero rates despite unequal concentrations. The suitable catalyst comparison uses the same conditions and final composition with a faster approach.',
        'conversationalApproach': 'Preserve every reviewed spoken word from the corrected human-readable preparation. Connected explanations separate observations, kinetic causes and final composition, with no invented attainment claims.',
        'openingDecision': 'Rhetorical reverse-before-equilibrium question with immediate explanation. It is not a scored response opportunity.',
        'understandingCheck': 'Changed C/D start with supplied C-to-D two and D-to-C six on the same scale. Separate prompt/feedback recordings and planned ten-second assembled silence. Require C increase justified by both rates, net four under one-to-one assumptions and catalyst same final equilibrium D. Actual measured timing and first-answer exposure remain pending.',
        'curriculumScope': 'Chemistry Stage 6 (2017), Year 12 Module 5, chem-m5-c02. Candidate contributions only to C-collision-investigate, C-activation and C-reversibility. No complete outcome, mandatory practical conduct or named non-equilibrium coverage claim. Cached official paragraph scope retained in the preparation.'},
    'scenes': scenefields, 'scriptReview': {'status': 'pending', 'reviewer': '', 'evidence': None},
    'voicedPreview': {'status': 'pending', 'reviewer': '', 'mode': '', 'inputSnapshotPath': '', 'evidence': None,
        'humanListening': {'status': 'pending', 'reviewer': '', 'mode': 'human-listening', 'evidence': None}},
    'preparationEvidence': {'path': relative(PREP), 'sha256': EXPECTED, 'independentReview': {'path': relative(review_path), 'sha256': sha(review_path.read_bytes())}, 'scope': 'Human-readable corrected preparation only. Selected JSON and opt-in component need independent review.'},
    'routeIdentity': 'chem-m5-c02',
    'limitation': 'Silent selected source, no audio/audio paths, alignment or accessible captions. Durations, reveals and response boundaries are estimates. Preparation review is not selected-source approval. Recording, voiced preview, human listening, full export, full-package release review and publication remain pending.'}
save('production-brief.json', brief)
segments = []
for scene in scenes:
    ident = scene['id']
    for i, spoken in enumerate(speech.get(ident, [])):
        role = ('prompt' if i == 0 else 'feedback') if ident == 'c2-transfer' else 'narration'
        segments.append({'id': ident + ('-' + role if ident == 'c2-transfer' else ''), 'sceneId': ident,
            'role': role, 'text': spoken, 'textSha256': sha(spoken.encode()), 'wordCount': words(spoken),
            'audioSelected': False, 'alignmentStatus': 'pending'})
save('narration-plan.json', {'schemaVersion': 1, 'source': source, 'preparationSha256': EXPECTED,
    'status': 'text-only plan, not a production voice manifest and not paid-generation approval',
    'preferredVoice': 'Simon, Australian male; root selects manifest and request options after exact-source recording gate',
    'segments': segments, 'responseAssembly': {'sceneId': 'c2-transfer', 'promptId': 'c2-transfer-prompt',
        'feedbackId': 'c2-transfer-feedback', 'plannedSilenceSeconds': 10, 'status': 'estimated; measure prompt alignment, assemble exact silence, align staged feedback and rebuild captions'},
    'estimatedCues': [{'sceneId': s['id'], 'durationInFrames': s['durationInFrames'], 'revealDelays': s.get('revealDelays', {}), 'diagramProps': s.get('diagram', {}).get('props', {})} for s in scenes],
    'humanListening': 'pending'})
save('revision.json', {'source': source, 'preparationSha256': EXPECTED, 'reviewedSpeechPreservedExactly': True,
    'newAudioSelected': False, 'allTimingsEstimated': True, 'sourceReview': 'pending', 'frames': sum(s['durationInFrames'] for s in scenes) - 24 * (len(scenes) - 1)})
assert not any('\u2014' in p.read_text(encoding='utf-8') for p in DEST.glob('*.json'))
assert [s['voiceover']['text'] for s in scenes if 'voiceover' in s] == [' '.join(speech[i]) for i in speech]
print(json.dumps({'source': source, 'scenes': len(scenes), 'spokenSegments': len(segments), 'spokenWords': sum(s['wordCount'] for s in segments), 'estimatedHold': [hold_start, answer_start]}, indent=2))
