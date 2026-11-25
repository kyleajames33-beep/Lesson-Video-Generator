# Brief 279: free disk space in `work/` without losing anything we may need again

Read `00-standing-rules.md`. Do not spawn sub-agents. Make no design edits and no commits. Never print, log or commit a key. Run nothing heavy (renders, stills, voicing) while you work. Do not touch another session's files while that session is using them. Leave anything changed in the last 24 hours alone.

## Why (owner, 26 November 2026)

C: is 98% full, with about 5 GB free, and renders need 1 to 2 GB each. `work/` holds about 23 GB across 774 folders. The owner approved the cleanup. The owner also wants enough kept that any video can be changed, re-rendered or re-uploaded later.

Google Drive (`G:\My Drive`) is nearly full too, with about 1.7 GB free of 200 GB. So you cannot simply copy everything to Drive first.

## What must be kept

Keep everything below. Small files stay where they are.

- **Release evidence:** every hand-in, check, manifest, hash, measured lesson and status JSON or MD file that records what was released and why.
- **Voice takes:** the current takes in `public/audio`, and anything a current measured lesson points to.
- **Source material:** prompts, scripts, plates and their provenance files.
- **Active work:** anything a queued release (`work/release-queue/*.json`), a nightly voicing plan or an unfinished brief still reads.

## What may go

Delete only what can be rebuilt from git plus the kept files, or what has been replaced by a newer copy.

- **Bundles:** the `isolated-bundle` folders and other bundled or copied web builds, for example inside `work/brief245/<lesson>/`. Rebuild any of them from the commit recorded in their evidence.
- **Render intermediates:** frame dumps, chunks, temp WAVs, and contact sheets or montages older than 7 days, where a final file or a newer sheet exists.
- **Superseded attempts:** image attempts that were rejected or replaced (keep the accepted file and the manifest that names the rejects) and failed voice attempts. For a voice attempt, keep its report JSON and delete only the audio.
- **`work/google-tts-cache`:** clear entries older than 14 days that no current measured lesson uses. The final takes live in `public/audio`.
- **Duplicates:** byte-identical copies of a file kept elsewhere in the repo or on Drive (check by SHA-256).

## Task

1. **Inventory.** List each `work/` subfolder over 200 MB. For each, say what it is and what kind of contents it holds. Then estimate how much each "may go" category above would free.
2. **Delete only the "may go" items.** Before deleting, write `work/brief279/deleted-manifest.json`. For each item record:
   - the path, size and SHA-256;
   - why it was safe to delete;
   - how to rebuild it, where that applies.
3. **If in doubt, keep it.** Report it to root instead of deleting it.
4. **Report the result.** Give free space before and after (`df` on C:), the top 10 remaining `work/` folders by size, and anything over 500 MB you kept for a reason root should know about.

## Hand-in to `status.md`

Report:
- GB freed and free space before and after;
- what was deleted, by category, with the manifest path;
- what was kept and why;
- any decisions that need the owner, for example moving old release evidence to an external drive.
