import json
import sys
from pathlib import Path

from faster_whisper import WhisperModel

model = WhisperModel(
    "base.en", device="cpu", compute_type="int8", cpu_threads=4 if sys.argv[1] == "--jobs" else 2,
    download_root="work/voice-batch-pilot/models", local_files_only=True,
)
result = {}
jobs = (json.loads(Path(sys.argv[2]).read_text(encoding="utf-8"))
        if sys.argv[1] == "--jobs" else
        [{"audio": name} for name in sys.argv[2:]])
for index, job in enumerate(jobs):
    name = job["audio"]
    if job.get("cache") and Path(job["cache"]).exists():
        continue
    segments, _ = model.transcribe(
        name, language="en", beam_size=5, word_timestamps=True,
        condition_on_previous_text=False,
    )
    result[name] = [
        {"word": word.word, "start": word.start, "end": word.end}
        for segment in segments for word in segment.words
    ]
    if job.get("cache"):
        target = Path(job["cache"])
        target.parent.mkdir(parents=True, exist_ok=True)
        temporary = target.with_suffix(target.suffix + ".tmp")
        temporary.write_text(json.dumps({name: result.pop(name)}, indent=2), encoding="utf-8")
        temporary.replace(target)
        print(f"Recognition {index + 1}/{len(jobs)}: {name}", flush=True)
if sys.argv[1] != "--jobs":
    Path(sys.argv[1]).write_text(json.dumps(result, indent=2), encoding="utf-8")
