import json, os, sys
from pathlib import Path
os.environ['PATH']=str(Path('node_modules/@remotion/compositor-win32-x64-msvc').resolve())+os.pathsep+os.environ.get('PATH','')
os.environ['HF_HUB_DISABLE_SYMLINKS_WARNING']='1'
import whisperx, torch, av, numpy as np
torch.set_num_threads(4)
audio_file, transcript_file, output_file = sys.argv[1:]
text=Path(transcript_file).read_text(encoding='utf8')
container=av.open(audio_file); resampler=av.AudioResampler(format='flt',layout='mono',rate=16000); chunks=[]
for frame in container.decode(audio=0):
    for part in resampler.resample(frame): chunks.append(part.to_ndarray().reshape(-1))
for part in resampler.resample(None): chunks.append(part.to_ndarray().reshape(-1))
container.close(); audio=np.concatenate(chunks).astype(np.float32)
model, metadata=whisperx.load_align_model(language_code='en',device='cpu')
result=whisperx.align([{'start':0.,'end':len(audio)/16000,'text':text}],model,metadata,audio,'cpu',return_char_alignments=False)
Path(output_file).write_text(json.dumps(result,indent=2),encoding='utf8')
