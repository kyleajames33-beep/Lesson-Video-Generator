# Module 5 starter media backup

The immutable archive preserves 196 files: 63 fresh raw audio/alignment/generation files, 57 selected lossless assembled audio/alignment/provenance files and 76 exact initial, v2 and voiced Player assets. It includes no environment files, credentials or installed dependencies. Base drafts and measured production documents remain tracked separately.

Archive: `out/archives/module5-starters-voiced-media-2026-10-10.zip`, 126,843,124 bytes. SHA-256: `023bd655dc1205db958f99da974f3161cc0389d4e2b344f708bab069623c560a`.

All archive members pass CRC and SHA-256 verification. Its schema-1 transfer manifest binds state archive SHA-256 `c2eac9023566c0dd42e8b341dd8965963733a9fefdbfa22baf344f7c43eed7ca`. The unmodified media restorer passed an isolated test: 196 restored, repeat restore found 196 identical, and a deliberately conflicting page was refused and preserved. See `module5-starters-media-restore-check-2026-10-10.json`.

Download and restore against the matching tracked checkout:

```powershell
python scripts/github-media-transfer.py download-continuation --continuation module5-starters-voiced-media-2026-10-10.zip
python scripts/transfer-workspace.py restore-media out/archives/module5-starters-voiced-media-2026-10-10.zip
```

GitHub asset state, size and digest verification are recorded in the companion checkpoint JSON and computer-transfer continuation. Restore into a fresh matching workspace if any existing page bytes differ; the restorer deliberately preserves conflicting files.

The voiced page's input metadata retains an old builder sentence saying silent/estimated. This exact historical text is preserved. The bound measured lesson and selected audio hashes establish its actual identity; the independent measured source/timing report is separate. Backup and restore do not supply human listening, actual-device review, full export or public release approval.
