# Brief 165: memory-bounded model inference, followed by sentence-pause cuts and sentence alignment.
import os,json,re,sys
from pathlib import Path
import time, msvcrt
# Acquire before importing the model so waiting jobs do not consume model memory.
lock_path=Path('work/google-alignment.lock')
lock_path.parent.mkdir(parents=True,exist_ok=True)
alignment_lock=lock_path.open('a+b')
if lock_path.stat().st_size==0:
    alignment_lock.write(b'0');alignment_lock.flush()
while True:
    try:
        alignment_lock.seek(0);msvcrt.locking(alignment_lock.fileno(),msvcrt.LK_NBLCK,1);break
    except OSError:
        time.sleep(1)
if Path(sys.argv[3]).exists():
    print('Preserved saved alignment',flush=True)
    sys.exit(0)
os.environ['PATH']=str(Path('node_modules/@remotion/compositor-win32-x64-msvc').resolve())+os.pathsep+os.environ.get('PATH','')
import whisperx,torch,av,numpy as np
torch.set_num_threads(4)
base_model,metadata=whisperx.load_align_model(language_code='en',device='cpu')
class ChunkedModel:
    # Wav2Vec2 conv stride is 320 samples, receptive field 400 samples.
    # Preserve its exact global frame grid while bounding transformer context.
    def __call__(self,waveform,lengths=None):
        total=max(0,(waveform.shape[-1]-400)//320+1)
        emissions=[]
        with torch.inference_mode():
            for first in range(0,total,200):
                last=min(total,first+200); left=max(0,first-25); right=min(total,last+25)
                clip=waveform[:,left*320:(right-1)*320+400]
                output,_=base_model(clip)
                emissions.append(output[:,first-left:last-left])
        return torch.cat(emissions,dim=1),None
if metadata['type']!='torchaudio': raise RuntimeError('Chunked inference requires the tested torchaudio model')
model=ChunkedModel()
audio_file,text_file,output_file=sys.argv[1:]
for _ in [0]:
    dest=Path(output_file)
    if dest.exists(): raise RuntimeError('Output exists')
    meta={'text':Path(text_file).read_text(encoding='utf8')}
    container=av.open(audio_file)
    resampler=av.AudioResampler(format='flt',layout='mono',rate=16000)
    chunks=[]
    for frame in container.decode(audio=0):
        for part in resampler.resample(frame): chunks.append(part.to_ndarray().reshape(-1))
    for part in resampler.resample(None): chunks.append(part.to_ndarray().reshape(-1))
    container.close(); audio=np.concatenate(chunks).astype(np.float32); duration=len(audio)/16000
    text=meta['text']; sentences=re.findall(r'[^.!?]+(?:[.!?]+|$)',text)
    guide=whisperx.align([{'start':0.,'end':duration,'text':text}],model,metadata,audio,'cpu',return_char_alignments=False)
    words=guide['word_segments']; expected=text.split()
    if len(words)!=len(expected) or any('start' not in w or 'end' not in w for w in words): raise RuntimeError('Incomplete boundary guide '+audio_file)
    segments=[]; cursor=0; boundaries=[0.]
    for sentence in sentences[:-1]:
        cursor+=len(sentence.split()); lo=words[cursor-1]['end']; hi=words[cursor]['start']
        if hi<lo: raise RuntimeError('Overlapping guide')
        # Pick lowest 20 ms energy between the adjacent aligned sentence words.
        candidates=np.arange(lo,hi+.001,.01)
        cut=min(candidates,key=lambda t:float(np.mean(audio[max(0,int((t-.01)*16000)):min(len(audio),int((t+.01)*16000))]**2))) if len(candidates) else lo
        boundaries.append(float(cut))
    boundaries.append(duration)
    allwords=[]
    for i,sentence in enumerate(sentences):
        start,end=boundaries[i:i+2]; local=audio[int(start*16000):int(end*16000)]
        result=whisperx.align([{'start':0.,'end':len(local)/16000,'text':sentence.strip()}],model,metadata,local,'cpu',return_char_alignments=False)
        ws=result['word_segments']
        if len(ws)!=len(sentence.split()) or any('start' not in w or 'end' not in w for w in ws): raise RuntimeError('Incomplete sentence alignment')
        allwords.extend([{**w,'start':w['start']+start,'end':w['end']+start} for w in ws])
    dest.write_text(json.dumps({'segments':[{'words':allwords}],'sentenceBoundaries':boundaries,'method':'Memory-bounded Wav2Vec2 inference preserves the 20 ms frame grid; forced-alignment guide locates sentence gaps; minimum-energy cuts; sentence forced alignment. Human accuracy review pending.', 'quality':{'lowScoreWords':[w for w in allwords if w.get('score',0)<0.5],'humanListening':'pending'}},indent=2))
    print('Aligned',duration,'seconds',flush=True)
