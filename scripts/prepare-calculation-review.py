"""Prepare immutable recording packages and bind measured cues for calculation pilots."""
import argparse
import copy
import hashlib
import json
from pathlib import Path
import re
import subprocess

ROOT = Path(__file__).resolve().parents[1]


def read(path):
    return json.loads((ROOT / path).read_text(encoding='utf-8'))


def digest(path):
    return hashlib.sha256((ROOT / path).read_bytes()).hexdigest()


def write(path, value):
    target = ROOT / path
    target.parent.mkdir(parents=True, exist_ok=True)
    with target.open('x', encoding='utf-8', newline='\n') as stream:
        stream.write(json.dumps(value, indent=2, ensure_ascii=False) + '\n')


def prepare(brief_path, text_path, directory):
    brief, text = read(brief_path), read(text_path)
    source = brief['source']['lessonPath']
    assert digest(source) == brief['source']['lessonSha256'] == text['lessonSha256']
    assert source == text['lessonPath']
    subprocess.run(['node', 'scripts/check-production-brief.mjs', brief_path, '--stage=recording'], cwd=ROOT, check=True)
    lesson = read(source)
    assert chr(0x2014) not in json.dumps(lesson, ensure_ascii=False)
    assert not (ROOT / directory).exists(), 'Preserve the existing package. Resume missing takes instead.'
    manifest = {key: text[key] for key in ['compositionId', 'lessonPath', 'lessonSha256', 'fps']}
    manifest['compositionId'] += '-simon-v4-2026-10-09'
    manifest['voiceSelection'] = {'voiceName': 'Simon - Australian male', 'voiceId': 'cOEV2DrZBBGNLpE74kQu',
        'modelId': 'eleven_v4', 'requiredAccent': 'Australian',
        'selectionBasis': 'Preserved selected narrator and request settings. Exact takes remain pending listening.'}
    manifest['scenes'], plan = [], {'lessonPath': source, 'playback': []}
    canon = lambda value: ' '.join(value.split())
    for scene in lesson['scenes']:
        segments = [item for item in text['scenes'] if item['parentSceneId'] == scene['id']]
        assert canon(' '.join(item['text'] for item in segments)) == canon(scene['voiceover']['text']), scene['id']
        assert len(segments) == (2 if scene['type'] == 'quickCheck' else 1)
        items = []
        for index, item in enumerate(segments):
            assert len(item['text']) < 2000 and chr(0x2014) not in item['text']
            signature = hashlib.sha256(item['text'].encode()).hexdigest()[:12]
            segment = {**item, 'hash': signature,
                'audioFile': f"public/audio/{manifest['compositionId']}/{item['id']}.{signature}.mp3"}
            manifest['scenes'].append(segment)
            if index:
                items.append({'kind': 'silence', 'seconds': 2, 'frames': 60})
            items.append({'kind': 'audio', 'segmentId': item['id'], 'audioFile': segment['audioFile']})
        plan['playback'].append({'sceneId': scene['id'], 'items': items})
    write(directory + '/voice-manifest.json', manifest)
    write(directory + '/voice-playback-plan.json', plan)
    write(directory + '/request-options.json', {'stability': 0.35, 'similarity': 0.75})
    write(directory + '/recording-brief.json', brief)
    write(directory + '/recording-inputs.json', {'source': brief['source'], 'scriptReview': brief['scriptReview'],
        'briefPath': brief_path, 'briefSha256': digest(brief_path), 'textManifestSha256': digest(text_path),
        'words': sum(len(item['text'].split()) for item in manifest['scenes']), 'status': 'Unrecorded, no listening or preview approval.'})
    print(f"Prepared {len(manifest['scenes'])} exact hashed recording segments.")


def bind(directory, cues_path):
    manifest, spec = read(directory + '/voice-manifest.json'), read(cues_path)
    assert digest(manifest['lessonPath']) == manifest['lessonSha256'], 'Reviewed draft changed.'
    lesson, original = read(directory + '/assembled.lesson.json'), read(manifest['lessonPath'])
    normalize = lambda word: re.sub(r'[^\w]', '', word.lower())
    rows, cursor = [], 0
    for scene in lesson['scenes']:
        assert scene['voiceover']['text'] == next(s for s in original['scenes'] if s['id'] == scene['id'])['voiceover']['text']
        def cue(value):
            if isinstance(value, int):
                return value
            phrase = value['phrase'] if isinstance(value, dict) else value
            offset = value.get('offset', 0) if isinstance(value, dict) else 0
            words = list(map(normalize, phrase.split()))
            tokens = scene['captions']
            matches = [i for i in range(len(tokens)) if [normalize(t['text']) for t in tokens[i:i+len(words)]] == words]
            occurrence = value.get('occurrence', 0) if isinstance(value, dict) else 0
            assert len(matches) > occurrence, f"Missing measured phrase: {scene['id']}: {phrase}"
            return max(0, int(-(-tokens[matches[occurrence]]['startMs'] * 30 // 1000)) + offset)
        settings = spec['scenes'][scene['id']]
        for field, value in settings.get('reveals', {}).items():
            scene.setdefault('revealDelays', {})[field] = list(map(cue, value)) if isinstance(value, list) else cue(value)
        for bullet, value in zip(scene.get('bullets', []), settings.get('bullets', [])):
            bullet['at'] = cue(value) / 30
        if settings.get('diagramBeats'):
            scene['diagram']['props']['beats'] = {field: max(0, cue(value)-scene['diagram']['delay']) for field,value in settings['diagramBeats'].items()}
        for index, values in settings.get('stageLines', {}).items():
            stage = scene['calculationPresentation']['stages'][int(index)]
            stage['lines'] = [value['text'] for value in values]
            stage['lineAts'] = [cue(value['cue']) for value in values]
        if scene['type'] == 'quickCheck':
            gap = scene['responseHold']
            scene['revealDelays']['responseHoldStart'] = gap['startFrame']
            scene['revealDelays']['answerVisibleStart'] = gap['endFrame']
            assert gap['endFrame'] - gap['startFrame'] == 60
            assert min(scene['revealDelays']['stepAts']) >= gap['endFrame']
        stages = scene.get('revealDelays', {}).get('stepAts', [])
        assert all(b > a for a,b in zip(stages, stages[1:])), scene['id']
        last = max([0] + stages + scene.get('revealDelays', {}).get('takeawayAts', []))
        last_lines = [at for stage in scene.get('calculationPresentation', {}).get('stages', []) for at in stage.get('lineAts', [])]
        scene['durationInFrames'] = max(scene['voiceover']['endFrame'] + 39, last + 124, max([0] + last_lines) + 114)
        rows.append({'sceneId': scene['id'], 'startFrame': cursor, 'frames': scene['durationInFrames'],
            'stepAts': stages, 'stageSeconds': [(next_at-at)/30 for at,next_at in zip(stages, stages[1:]+[scene['durationInFrames']])],
            'responseHold': scene.get('responseHold')})
        cursor += scene['durationInFrames'] - 24
    source = directory + '/narrated.lesson.json'
    write(source, lesson)
    write(directory + '/remotion-props.json', {'lesson': lesson})
    write(directory + '/timing-review.json', {'source': source, 'sourceSha256': digest(source),
        'durationFrames': cursor+24, 'durationSeconds': (cursor+24)/30, 'scenes': rows,
        'limitation': 'Measured speech/assembly source checks. Motion, phone fit and actual listening pending.'})
    review = directory + '/assembly-source-review.md'
    message = f"# Measured narration source check\n\nReviewer: coordinating agent. Original source: {manifest['lessonPath']}, SHA-256 {manifest['lessonSha256']}. Voiced source: {source}, SHA-256 {digest(source)}.\n\nAll scene transcripts are unchanged. The existing independently reviewed science, tasks, givens, boundaries and model limits are preserved. Measured character alignment controls scene durations, diagram beats, bullets and individual calculation/result lines. Practice uses separately recorded prompt and answer, with sixty silent frames inserted between them. Display-only line splitting retains the same arithmetic. Actual motion, caption/device clearance, pronunciation and delivery remain pending review.\n\nRecording-stage evidence: {read(directory+'/recording-brief.json')['scriptReview']['evidence']['path']}. Cue specification: {cues_path}, SHA-256 {digest(cues_path)}.\n"
    with (ROOT/review).open('x', encoding='utf-8', newline='\n') as stream:
        stream.write(message)
    brief = copy.deepcopy(read(directory + '/recording-brief.json'))
    brief['source'] = {'lessonPath': source, 'lessonSha256': digest(source)}
    brief['scriptReview'] = {'status': 'pass', 'reviewer': 'Coordinating agent (unchanged transcript and measured assembly source review)',
        'evidence': {'path': review, 'sha256': digest(review)}}
    brief['limitation'] = 'Source and measured assembly checks passed. Exact voiced playback and human listening remain pending. No full export or publication approval.'
    for item in brief['scenes']:
        selected = next(s for s in lesson['scenes'] if s['id'] == item['sceneId'])
        item['narrationCue'] = json.dumps({'measuredReveals': selected['revealDelays'], 'diagramBeats': selected.get('diagram', {}).get('props', {}).get('beats')})
    write(directory + '/production-brief.json', brief)
    base = {'lessonPath': source, 'entryPoint': 'src/dev/release-entry.tsx', 'compositionId': 'Lesson-release',
        'codec': 'h264', 'scale': 1, 'crf': 16, 'concurrency': 1, 'audioMode': 'alignedPcm', 'normalizeAudio': True,
        'teachingBriefPath': directory+'/production-brief.json',
        'inputs': ['scripts/prepare-calculation-review.py', cues_path, directory+'/voice-manifest.json', directory+'/voice-playback-plan.json', directory+'/request-options.json']}
    write(directory + '/full-config.json', base)
    for name, scene_id in spec['pilots'].items():
        row = next(r for r in rows if r['sceneId'] == scene_id)
        write(directory+f'/{name}-pilot-config.json', {**base, 'frameRange': [row['startFrame'], row['startFrame']+row['frames']-1]})
    print(f"Bound measured cues for {len(rows)} scenes, {(cursor+24)/30:.2f} seconds. Listening pending.")


def audio(directory):
    # Use the existing PCM/caption libraries so listening and video share a timeline.
    code = r'''
import fs from 'node:fs';
import {spawnSync} from 'node:child_process';
import {assembleTimelineNarration} from './scripts/lib/timeline-narration.mjs';
import {lessonCaptionCues,toSrt,toVtt} from './scripts/lib/caption-timeline.mjs';
import {mediaTool} from './scripts/lib/media-tools.mjs';
import {verifyAssembly} from './scripts/lib/verify-assembly.mjs';
import {sha256} from './scripts/lib/playback-assembly.mjs';
const dir=process.argv[2], source=dir+'/narrated.lesson.json';
const lesson=JSON.parse(fs.readFileSync(source,'utf8'));
for(const scene of lesson.scenes){const errors=verifyAssembly(scene,30);if(errors.length)throw Error(scene.id+': '+errors.join('; '));}
const paths=['narration-listen.wav','narration-listen.m4a','narration-listen.record.json','full-captions.srt','full-captions.vtt'];
if(paths.some(name=>fs.existsSync(dir+'/'+name)))throw Error('Preserve existing listening package.');
const {cues,warnings}=lessonCaptionCues(lesson);if(warnings.length)throw Error(warnings.join('; '));
const audio=assembleTimelineNarration(lesson);
fs.writeFileSync(dir+'/narration-listen.wav',audio.wav,{flag:'wx'});
const run=args=>{const result=spawnSync(mediaTool('ffmpeg'),args,{encoding:'utf8',windowsHide:true});if(result.status!==0||result.error)throw Error(result.error?.message??result.stderr);return result.stderr;};
const measure=file=>JSON.parse(run(['-hide_banner','-i',file,'-vn','-af','loudnorm=I=-18:TP=-2:LRA=7:print_format=json','-f','null',process.platform==='win32'?'NUL':'/dev/null']).match(/\{\s*"input_i"[\s\S]*?\}/)?.[0]??'null');
const before=measure(dir+'/narration-listen.wav');
if(!before||!Number.isFinite(Number(before.input_i)))throw Error('Missing or silent full narration.');
const filter=`loudnorm=I=-18:TP=-2:LRA=7:measured_I=${before.input_i}:measured_TP=${before.input_tp}:measured_LRA=${before.input_lra}:measured_thresh=${before.input_thresh}:offset=${before.target_offset}:linear=true`;
run(['-hide_banner','-n','-i',dir+'/narration-listen.wav','-af',filter,'-c:a','aac','-b:a','192k','-ar','48000','-f','mp4',dir+'/narration-listen.m4a']);
const after=measure(dir+'/narration-listen.m4a');
if(Math.abs(Number(after.input_i)+18)>1||Number(after.input_tp)>-1.5)throw Error('Full narration outside listening targets.');
fs.writeFileSync(dir+'/full-captions.srt',toSrt(cues),{flag:'wx'});
fs.writeFileSync(dir+'/full-captions.vtt',toVtt(cues),{flag:'wx'});
fs.writeFileSync(dir+'/narration-listen.record.json',JSON.stringify({source,sourceSha256:sha256(fs.readFileSync(source)),audioSha256:sha256(fs.readFileSync(dir+'/narration-listen.m4a')),audioAssembly:audio.record,before,after,cues:cues.length,status:'Technical assembly/mastering passed. Actual listening pending.'},null,2)+'\n',{flag:'wx'});
console.log(JSON.stringify({seconds:audio.record.sampleCount/48000,cues:cues.length,loudness:after.input_i,peak:after.input_tp,assemblyChecked:true,humanListening:'pending'}));
'''
    subprocess.run(['node', '--input-type=module', '-', directory], input=code, text=True, cwd=ROOT, check=True)


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    commands = parser.add_subparsers(dest='command', required=True)
    prep = commands.add_parser('prepare')
    prep.add_argument('brief'); prep.add_argument('text_manifest'); prep.add_argument('directory')
    final = commands.add_parser('bind')
    final.add_argument('directory'); final.add_argument('cues')
    listen = commands.add_parser('audio')
    listen.add_argument('directory')
    args = parser.parse_args()
    if args.command == 'prepare':
        prepare(args.brief, args.text_manifest, args.directory)
    elif args.command == 'bind':
        bind(args.directory, args.cues)
    else:
        audio(args.directory)
