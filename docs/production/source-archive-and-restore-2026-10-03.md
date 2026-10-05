# Source archive and restoration evidence

The selected source work now has a compressed archive and a checked restore.
The restored check now covers two six-lesson Chemistry packages, the three-lesson
Biology package and all 81
source tests. The latest receipt and matching restore report record whether
that exact capture passed. This is a source-recovery increment of T8/C18.
Full media restoration, rights evidence and off-machine backup remain open.
No renderer, speech provider, audio player or decoder was invoked.

## Included source and review material

The archive conservatively captures permitted text source under `src`,
`scripts`, `docs` and CI workflows, plus the root package lock/configuration,
README and project instructions. Original lesson JSON is preserved byte for
byte, including recorded-text references. Archiving a reference does not read
or verify the referenced recording.

It also includes the isolated science/quantitative/thermochemistry/Biology correction packages,
selected artwork and model-usage inventories and cached public curriculum
HTML/metadata. Those ignored review files are necessary to recover the current
draft handoff. The archive includes code beyond the fifteen drafts so local source
checks retain their catalogue context. This does not imply broader catalogue
approval.

The curriculum/learner-task increment also includes selected curriculum review
JSON/Markdown and the exact official Chemistry syllabus DOCX at its single
allowlisted cache path. Other DOCX files remain excluded. This primary-source
document is the only binary-document exception; public media assets remain
excluded. Its source hash and paragraph extraction are checked by the restored
offline Chemistry audit. The source suite now has 81 tests; the previous
thermochemistry increment had 73 tests. Student sheets and separate teacher
keys for Chemistry and Biology are included as repository documentation. Full
cached Biology responses are independently hash-pinned by package validation;
the selected Biology metadata audit also runs in the restored workspace.

Excluded material: public recordings, images, fonts and other binary assets;
installed dependencies; Git history; environment files; finished video/release
evidence. The archive records bytes and paths, rather than filesystem timestamps,
permissions or repository history. It is a local recovery copy, not independent
protection against disk loss.

## Capture and restore

```powershell
npm run archive:source
npm run check:source-restore
```

Capture first validates all three review packages and the selected Chemistry
and Biology curriculum audits, refusing changed original/export/evidence hashes
or media wiring.
It then hashes and captures the source
files, checks them again for drift during capture, and writes a gzip-compressed
JSON/base64 bundle named by its archive SHA-256. Existing archive files are
retained. A repeated capture of the same bytes with the same runtime produces
the same archive; the source fingerprint independently records file paths,
lengths and hashes.

The [latest receipt](../../out/archives/quantitative-source/latest.json) records
the archive path/hash, source fingerprint, exact file count, sizes, scope and
restore status. It points to the [restore report](../../out/checks/source-restore-report.json),
which records the matching archive hash, fresh destination and check outputs.
Refreshing capture requires another restore check. Check those hashes together
before relying on an older report.

Restoration verifies the compressed-file hash, manifest, every payload hash and
length, path scope and collisions before creating a destination. It restores
only into a fresh local directory under `out/checks/source-restore`, never into
production source paths. Traversal, absolute/Windows alias paths, case collisions,
file/directory collisions, symlinks and existing destinations are rejected.
File-count and expansion limits bound the archive reader. Hashes establish
byte agreement, not trusted authorship or scientific approval.

Every declared restored file is checked before and after the restored source
tests. The test runner executes the fixed source suite, all three package
validators and both selected curriculum audits with the system Node runtime. Generated validation logs are additional
check artifacts. Dependency installation, restored TypeScript compilation and
renderer/media execution are outside this check.

## Checks and remaining scope

Four archive tests cover exact byte preservation/determinism, forbidden and
colliding paths, corrupted payloads/manifests and fresh-destination restoration
with subsequent change detection. Together with the existing model/source/gate
tests, curriculum checks, thermochemistry checks and eight Biology checks,
the restored source suite has 81 tests. The fifteen source-validated drafts
have zero schema errors or narration-budget warnings. Original-workspace
TypeScript passed for this source increment.

The first checked capture contained 1,093 source/review files, about 24 MB before
compression and 7 MB compressed. The final documentation refresh adds this
handoff; the latest receipt provides the current exact counts and hash rather
than treating those first-run figures as immutable.

The [quantitative component repairs](quantitative-model-repairs-2026-10-03.md)
and [thermochemistry corrections](thermochemistry-repairs-2026-10-03.md)
plus [Biology integration](biology-lesson-integration-2026-10-04.md)
still need subject and visual review. Four earlier selected images, six thermochemistry
images and one shared Biology image remain missing at their expected registered
paths. The DNA image is present but its rights/science review is open. Seventeen
earlier custom reveal cues and 35 new cues remain deliberately omitted.
The source restore does not close those dependencies or certify learning,
listening, accessibility, device playback or a full release package.

For a later full release, archive the actual selected recordings, settings,
alignment, captions, assets/rights evidence, dependency/render records and
reviews. Restore and check that concrete media package, then place the approved
archive in a separately authorised storage destination. The existing
`backup:media` mirror is not invoked by these source-only commands.
