"""Reconcile only B2 display timing against the root-assembled word captions.

Run without --apply first. --apply requires root assembly-complete authorization.
No audio generation, assembly, shared runtime, brief approval or export here.
"""
import argparse
import copy
import hashlib
import json
import math
from pathlib import Path

HERE = Path(__file__).resolve().parent
ROOT = HERE.parents[2]
SOURCE = ROOT / 'docs/production/drafts/module5-b2-selected-2026-10-10/lesson.json'
EXPECTED_SOURCE = 'a9caaa09366537f56d1ea60cee0184313a62a421b9b64e76b023ae5c112ca8af'
CANDIDATE = ROOT / 'out/prototypes/module5-b2-voiced-2026-10-10'

# All phrases are from the exact independently reviewed narration.
# Diagram at, revealDelays and stage lineAts consume scene-local frames.
# Bullet at consumes seconds from scene start.
SPECS = {
    'concept-fertilisation': {
        'diagram': {'start': 'a sperm and an egg each carry one set',
                    'second': 'Fertilisation brings the two sets together',
                    'result': 'The zygote is diploid'},
        'bullets': ['We call that haploid', 'The zygote is diploid'],
        'reveals': {'secondary': 'The diagram uses just a few chromosomes'},
    },
    'concept-asexual-animal': {
        'diagram': {'start': 'In a hydra', 'second': 'a small bud grows',
                    'result': 'it can detach as a separate hydra',
                    'condition': 'That event is asexual reproduction'},
        'bullets': ['Its cells divide', 'We classify the event by its mechanism'],
    },
    'concept-external': {
        'diagram': {'start': 'In our frog example',
                    'second': 'That is external fertilisation',
                    'condition': 'Release close together in place and time'},
        'bullets': ['A moist environment protects',
                    'Release close together in place and time',
                    'Fertilisation is only the first stage'],
    },
    'concept-internal': {
        'diagram': {'start': 'In internal fertilisation',
                    'second': 'sperm reaches eggs inside',
                    'condition': 'reduces exposure to drying'},
        'bullets': ['Keeping the meeting within a moist reproductive tract',
                    'Achieving that transfer can require time and energy',
                    'But internal fertilisation does not tell us'],
    },
    'definition-comparison': {
        'diagram': {'start': 'A bird uses internal fertilisation',
                    'second': 'then lays an egg',
                    'result': 'the embryo develops outside the body',
                    'condition': 'Parental investment means resources'},
        'bullets': ['Where do gametes fuse', 'Where does the embryo develop',
                    'What support does the offspring receive'],
    },
    'worked-example': {
        'steps': ['Fusion is outside the body',
                  'so fertilisation is internal',
                  'Fusion occurred before laying'],
        'lines': [['Fusion is outside the body', 'The water provides a moist setting'],
                  ['sperm meets egg inside the female', 'The protected moist setting'],
                  ['Fusion occurred before laying', 'development continues outside in the egg']],
    },
    'misconception': {
        'reveals': {'body': 'We need the mechanism and the conditions',
                    'callout': 'Neither strategy promises'},
    },
    'quick-check': {
        'steps': ['In the stated model', 'That supports a prediction',
                  'And fertilisation is not the same as survival'],
        'lines': [['carrying sperm away', 'reduces opportunities for sperm and eggs to meet'],
                  ['That supports a prediction', 'it does not give us an exact count'],
                  ['Development predation and later conditions still matter',
                   'And fertilisation is not the same as survival to reproduction']],
    },
    'summary': {
        'takeaways': ['A hydra bud can make a new animal',
                      'In our sexual model',
                      'External and internal fertilisation describe',
                      'Explain an advantage by connecting a feature'],
        'reveals': {'finalPrompt': 'Next we will compare reproduction'},
    },
}


def digest(path):
    return hashlib.sha256(path.read_bytes()).hexdigest()


def read(path):
    return json.loads(path.read_text(encoding='utf-8-sig'))


def write(path, value):
    path.write_text(json.dumps(value, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')


def norm(text):
    return ''.join(c.lower() for c in text if c.isalnum())


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--apply', action='store_true')
    args = parser.parse_args()
    assert digest(SOURCE) == EXPECTED_SOURCE, 'Reviewed silent source drift'
    assembled_path = CANDIDATE / 'assembled.lesson.json'
    candidate_path = CANDIDATE / 'narrated.lesson.json'
    before = read(assembled_path)
    lesson = copy.deepcopy(before)
    original = read(SOURCE)
    fps = lesson['fps']
    assert fps == 30
    entries = []
    durations = []
    for scene in lesson['scenes']:
        reviewed = next(s for s in original['scenes'] if s['id'] == scene['id'])
        assert scene.get('voiceover', {}).get('text') == reviewed.get('voiceover', {}).get('text'), scene['id'] + ' text drift'
        captions = scene.get('captions', [])

        def cue(phrase, field, units='frames', floor=0):
            words = [norm(w) for w in phrase.split()]
            matches = [i for i in range(len(captions))
                       if all(i+j < len(captions) and norm(captions[i+j]['text']) == w
                              for j, w in enumerate(words))]
            assert len(matches) == 1, (scene['id'], phrase, 'cue must be unique', matches)
            ms = captions[matches[0]]['startMs']
            raw = math.ceil(ms * fps / 1000)
            frame = max(raw, floor)
            entries.append({'sceneId': scene['id'], 'field': field,
                            'phrase': phrase, 'alignedStartMs': ms,
                            'alignedFrameCeil': raw, 'effectiveFrame': frame,
                            'clampFrame': floor, 'consumerUnits': units,
                            'value': frame / fps if units == 'seconds' else frame})
            return frame / fps if units == 'seconds' else frame

        spec = SPECS.get(scene['id'], {})
        rd = scene.setdefault('revealDelays', {}) if spec else scene.get('revealDelays', {})
        if 'diagram' in spec:
            # ConceptSlide otherwise delays the entire board by 62 frames.
            # Its 18-frame entrance must not mask measured cues at frame zero.
            rd['diagram'] = 0
        for field, phrase in spec.get('diagram', {}).items():
            scene['diagram']['props']['at'][field] = cue(phrase, 'diagram.props.at.' + field)
        for i, phrase in enumerate(spec.get('bullets', [])):
            scene['bullets'][i]['at'] = cue(phrase, f'bullets.{i}.at', 'seconds')
        for field, phrase in spec.get('reveals', {}).items():
            rd[field] = cue(phrase, 'revealDelays.' + field)
        if 'takeaways' in spec:
            rd['takeawayAts'] = [cue(p, f'revealDelays.takeawayAts.{i}')
                                 for i, p in enumerate(spec['takeaways'])]
        floor = 0
        if scene['id'] == 'quick-check':
            hold = scene['responseHold']
            assert hold['endFrame'] - hold['startFrame'] == 12 * fps, 'Root response gap must remain 12 seconds'
            floor = hold['endFrame']
            rd['responseHoldStart'] = hold['startFrame']
            rd['answerVisibleStart'] = floor
            assert all(not (c['startMs'] < floor * 1000 / fps and
                            c['endMs'] > hold['startFrame'] * 1000 / fps)
                       for c in captions), 'Caption overlaps measured response gap'
        if 'steps' in spec:
            rd['stepAts'] = [cue(p, f'revealDelays.stepAts.{i}', floor=floor)
                              for i, p in enumerate(spec['steps'])]
            assert all(a < b for a, b in zip(rd['stepAts'], rd['stepAts'][1:])), 'Stage sequence is not strictly increasing'
            for i, phrases in enumerate(spec['lines']):
                stage = scene['calculationPresentation']['stages'][i]
                stage['lineAts'] = [cue(p, f'calculationPresentation.stages.{i}.lineAts.{j}',
                                       floor=rd['stepAts'][i]) for j, p in enumerate(phrases)]
                end = rd['stepAts'][i+1] if i+1 < len(rd['stepAts']) else scene['durationInFrames'] - 24
                assert max(stage['lineAts']) + 16 < end, 'Stage switches before a result line settles'
        old_duration = scene['durationInFrames']
        if scene.get('voiceover', {}).get('audioFile'):
            scene_entries = [e for e in entries if e['sceneId'] == scene['id']]
            last_essential_cue = max([0] + [e['effectiveFrame'] for e in scene_entries])
            scene['durationInFrames'] = max(scene['voiceover']['endFrame'] + 45 + 24,
                                             last_essential_cue + 90 + 24)
            durations.append({'sceneId': scene['id'], 'assembledFrames': old_duration,
                              'candidateFrames': scene['durationInFrames'],
                              'audioEndFrame': scene['voiceover']['endFrame'],
                              'lastEssentialCueFrame': last_essential_cue,
                              'quietTailFrames': scene['durationInFrames'] - scene['voiceover']['endFrame'],
                              'quietTailBeforeTransitionFrames': scene['durationInFrames'] - 24 - scene['voiceover']['endFrame'],
                              'purpose': 'Short settled reading tail after measured speech, then 24-frame transition.'})
    report = {'scope': 'Authored measured cue reconciliation. Independent voiced review and human listening pending.',
              'reviewedSilentSourceSha256': EXPECTED_SOURCE,
              'assembledCandidateSha256Before': digest(assembled_path),
              'fps': fps, 'rounding': 'ceil aligned caption start to avoid anticipating speech; clamps explicit',
              'units': {'bullet.at': 'scene-local seconds', 'diagram.props.at': 'scene-local frames',
                        'revealDelays': 'scene-local frames', 'stage.lineAts': 'scene-local frames'},
              'entries': entries, 'applied': args.apply}
    report['durationRule'] = 'max(audio end + 45 reading frames + 24 transition frames, last essential cue + 90 reading frames + 24 transition frames)'
    report['durations'] = durations
    report['assemblyRecordSha256'] = digest(CANDIDATE / 'assembly-record.json')
    if args.apply:
        assert not candidate_path.exists(), 'Refusing to replace an existing voiced candidate'
        write(candidate_path, lesson)
        props_path = CANDIDATE / 'remotion-props.json'
        assert not props_path.exists(), 'Refusing to replace existing voiced props'
        props = read(CANDIDATE / 'assembled.remotion-props.json')
        props['lesson'] = lesson
        write(props_path, props)
        report['candidateSha256After'] = digest(candidate_path)
        report['propsSha256After'] = digest(props_path)
    write(HERE / ('measured-cue-reconciliation.json' if args.apply else 'cue-dry-run.json'), report)
    print(json.dumps({'applied': args.apply, 'cueCount': len(entries),
                      'candidateSha256': report.get('candidateSha256After'),
                      'report': str(HERE)}, indent=2))


if __name__ == '__main__':
    main()
