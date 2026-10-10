"""Consolidate verified backup evidence after exclusive upload succeeds."""
import json
from pathlib import Path
BASE=Path(__file__).resolve().parent;ROOT=BASE.parents[3]
archive=json.loads((BASE/'archive-record.json').read_text());github=json.loads((BASE/'github-verification.json').read_text());restore=json.loads((BASE/'restore-report.json').read_text());manifest=json.loads((BASE/'manifest-verification.json').read_text())
if not github['uploadedStateSizeAndDigestsMatch']or not github['downloadedChecksumMatches']:raise RuntimeError('GitHub verification pending')
if len({archive['sha256'],github['archiveSha256'],restore['archiveSha256']})!=1:raise RuntimeError('Evidence identity mismatch')
record={'schemaVersion':1,'status':'published-verified','archive':archive['archive'],'checksum':archive['archive']+'.sha256','bytes':archive['bytes'],'sha256':archive['sha256'],'mediaFiles':archive['files'],'zipMembersIncludingManifest':manifest['packageMembers'],'stateArchiveSha256':archive['stateArchiveSha256'],'scope':'Exact plant takes/assemblies; original/current overnight plant, pressure and fungi pages/assets; catalyst page/assets; saved native/UI evidence; final morning review desk. Source/documents travel through Git. Earlier starter/second/C3 packages and all earlier archives remain preserved.','checks':{'CRC':'pass for every ZIP member','memberSha256':'pass for all media plus separately bound transfer manifest','secretBytes':'pass via existing helper, private scan','firstRestore':'301 files restored and all hashes match','repeatRestore':'0 new files, 301 identical files accepted','conflictRestore':'conflicting file preserved, 0 other member writes','github':'uploaded state, size and SHA256 digest match for archive/checksum; downloaded checksum is byte-identical'},'github':github,'evidence':{name:(BASE/name).relative_to(ROOT).as_posix()for name in ['selection.json','archive-record.json','manifest-verification.json','restore-report.json','github-verification.json']},'restoreCommands':['python scripts/github-media-transfer.py download-continuation --continuation module5-overnight-review-media-2026-10-10.zip','python scripts/transfer-workspace.py restore-media out/archives/module5-overnight-review-media-2026-10-10.zip'],'limitation':'Verified review-media backup only. No human listening, continuous review, full lesson export, public release approval or video publication is established.'}
(BASE/'checkpoint.json').write_text(json.dumps(record,indent=2)+'\n',encoding='utf-8')
(BASE/'README.md').write_text(f'''# Overnight review media backup

Verified exclusive backup: `{archive['archive']}`, {archive['bytes']:,} bytes and {archive['files']} media files. SHA256 `{archive['sha256']}`.

[Existing GitHub media release]({github['url']}) contains the archive and checksum. API uploaded state, exact size and digest match for both assets; the downloaded checksum is byte-identical. All ZIP CRCs and member hashes pass. The original unmodified restorer restored all 301 files, accepted an identical repeat, and preserved a conflict without partial writes.

`checkpoint.json` consolidates exact evidence. `archive-record.json`, `manifest-verification.json`, `restore-report.json` and `github-verification.json` retain scoped checks. The schema-1 transfer manifest binds unchanged handoff state SHA256 `{archive['stateArchiveSha256']}`. Archive content is limited to `out/` and `public/audio/`, plus its required transfer manifest. Reproducible runtime bundles and secrets are excluded. Source/docs travel through Git.

```powershell
python scripts/github-media-transfer.py download-continuation --continuation module5-overnight-review-media-2026-10-10.zip
python scripts/transfer-workspace.py restore-media out/archives/module5-overnight-review-media-2026-10-10.zip
```

These are review-media backups. Listening, continuous/voiced/device/caption review, full exports and public lesson-release gates remain separate. Earlier archives and release assets remain preserved. No video posting occurred.
''',encoding='utf-8')
print(json.dumps({'checkpoint':(BASE/'checkpoint.json').relative_to(ROOT).as_posix(),'status':record['status'],'bytes':record['bytes'],'sha256':record['sha256']}))
