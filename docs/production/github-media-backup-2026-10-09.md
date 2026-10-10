# GitHub media backup

The user asked to put the media on GitHub as well as the code, and continue production on the current computer. The repository's ignored media snapshot is stored as split assets on a dedicated GitHub release.

Release: https://github.com/kyleajames33-beep/Lesson-Video-Generator/releases/tag/workspace-media-2026-10-09

This backs the 9 October handoff at commit `7d22ea3`. The archive and parts are immutable snapshots, not a live copy of later production. See [the transfer record](computer-transfer-2026-10-09.json) for upload status, expected sizes and SHA-256 hashes. Credentials are excluded.

GitHub blocks ordinary Git files larger than 100 MiB. Release assets must each be smaller than 2 GiB, so the 2.85 GiB ZIP is split into two byte ranges. This avoids adding several gigabytes to the source history. Sources: [large files](https://docs.github.com/en/repositories/working-with-files/managing-large-files/about-large-files-on-github), [release limits](https://docs.github.com/en/repositories/releasing-projects-on-github/about-releases).

After cloning the latest `main`, install Python and GitHub CLI, then:

```powershell
python scripts/github-media-transfer.py download
python scripts/transfer-workspace.py restore-state
python scripts/transfer-workspace.py restore-media
python scripts/github-media-transfer.py download-continuation --continuation continuation-media-2026-10-09.zip
python scripts/transfer-workspace.py restore-media out/archives/continuation-media-2026-10-09.zip
python scripts/github-media-transfer.py download-continuation --continuation calculation-batch-media-2026-10-09.zip
python scripts/transfer-workspace.py restore-media out/archives/calculation-batch-media-2026-10-09.zip
python scripts/github-media-transfer.py download-continuation --continuation calculation-feedback-media-2026-10-10.zip
python scripts/transfer-workspace.py restore-media out/archives/calculation-feedback-media-2026-10-10.zip
python scripts/github-media-transfer.py download-continuation --continuation calculation-feedback-frames-2026-10-10.zip
python scripts/transfer-workspace.py restore-media out/archives/calculation-feedback-frames-2026-10-10.zip
python scripts/github-media-transfer.py download-continuation --continuation module5-parallel-review-media-2026-10-10.zip
python scripts/transfer-workspace.py restore-media out/archives/module5-parallel-review-media-2026-10-10.zip
python scripts/github-media-transfer.py download-continuation --continuation module5-visual-v2-media-2026-10-10.zip
python scripts/transfer-workspace.py restore-media out/archives/module5-visual-v2-media-2026-10-10.zip
python scripts/github-media-transfer.py download-continuation --continuation module5-c2-b2-selected-media-2026-10-10.zip
python scripts/transfer-workspace.py restore-media out/archives/module5-c2-b2-selected-media-2026-10-10.zip --skip-rebuildable-pages
python scripts/github-media-transfer.py download-continuation --continuation calculation-full-empirical-media-2026-10-10.zip
python scripts/transfer-workspace.py restore-media out/archives/calculation-full-empirical-media-2026-10-10.zip
python scripts/github-media-transfer.py download-continuation --continuation module5-c2-b2-voiced-media-2026-10-10.zip
python scripts/transfer-workspace.py restore-media out/archives/module5-c2-b2-voiced-media-2026-10-10.zip
python scripts/github-media-transfer.py download-continuation --continuation calculation-full-mole-media-2026-10-10.zip
python scripts/transfer-workspace.py restore-media out/archives/calculation-full-mole-media-2026-10-10.zip
python scripts/github-media-transfer.py download-continuation --continuation module5-c2-b2-caption-safe-media-2026-10-10.zip
python scripts/transfer-workspace.py restore-media out/archives/module5-c2-b2-caption-safe-media-2026-10-10.zip
python scripts/github-media-transfer.py download-continuation --continuation calculation-full-mass-media-2026-10-10.zip
python scripts/transfer-workspace.py restore-media out/archives/calculation-full-mass-media-2026-10-10.zip
python scripts/github-media-transfer.py download-continuation --continuation calculation-full-limiting-media-2026-10-10.zip
python scripts/transfer-workspace.py restore-media out/archives/calculation-full-limiting-media-2026-10-10.zip
python scripts/github-media-transfer.py download-continuation --continuation module5-c2-b2-caption-safe-v4-media-2026-10-10.zip
python scripts/transfer-workspace.py restore-media out/archives/module5-c2-b2-caption-safe-v4-media-2026-10-10.zip
python scripts/build-parallel-production-review.py
python scripts/build-calculation-full-review.py
python scripts/build-module5-course-plan.py
python scripts/build-module5-voiced-review.py
```

Sign in with `gh auth login` if the repository requires authentication. The downloader preserves matching existing parts and refuses conflicting files. It checks each part and the joined ZIP against the checked-in hashes. The subsequent restore checks individual contents.

Alternatively, download both `.part01` and `.part02` assets from the release into `out/archives/`, then run `python scripts/github-media-transfer.py join` before the restore commands. A plain Git clone still does not download release assets automatically. Existing local copies of the complete ZIP remain valid.

Both archive parts, the checksum file and every continuation marked published-verified in the transfer record have matching server-side sizes and SHA-256 digests. The archives also passed content verification and restore checks locally. The release was published on 9 October 2026; later continuations were added after their content checks. See the transfer record for the publication timestamp and hash evidence.

The first additive continuation restores the recorded empirical lesson and its verified pilots over the original handoff. The second, `calculation-batch-media-2026-10-09.zip`, adds mole-ratios and mass-to-mass recordings, measured sources and four short pilots, plus the combined review page. See [the current batch](calculation-review-batch-2026-10-09.md) for selected paths and remaining checks. Restore both continuations in the documented order. The helper verifies each full ZIP hash before restoration; use explicit names because its unnamed default selects the latest continuation. Future work needs a new dated snapshot; this release does not automatically synchronise ignored files.

The third additive continuation, `calculation-feedback-media-2026-10-10.zip`, contains the explicit-ratio correction, targeted gentler calculation delivery, four new worked pilots, full listening tracks and the new review page. Consult [the feedback report](calculation-feedback-2026-10-10.md) and transfer record for exact prepared/uploaded status. Restore this after the two earlier continuations, preserving their older sources and media. The revised listening and full-release gates remain pending.

The fourth continuation, `calculation-feedback-frames-2026-10-10.zip`, preserves the 27 native decoded PNG frames referenced by the independent pilot review. Restore it after the third continuation, which includes the six associated evidence JSON files. The separate companion preserves the settled media ZIP unchanged. Static evidence does not establish listening or continuous playback approval.

The fifth continuation, `module5-parallel-review-media-2026-10-10.zip`, preserves the parallel team's original and revised Module 5 diagnostic stills, source-bound evidence manifests and render helpers, plus the local production reading desk. Draft lessons, narration, briefs, independent reports and ownership board are in ordinary Git. The ZIP excludes reproducible bundles and dependency folders. It contains no new recordings or full videos and does not clear pending visual, listening or release gates. Restore it after the previous four continuations. The [production board](parallel-production-board-2026-10-10.json) distinguishes completed checks from the next required work.

The additive Module 5 v2 archive preserves 40 visual evidence/planning-page files. Rebuild the latest production desk with `python scripts/build-parallel-production-review.py` after restoration. The focused route and source drafts are tracked in Git.

The selected C2/B2 archive preserves 86 ignored evidence/page files in a seventh additive continuation. Its two production HTML pages are reproducible and may differ from earlier checkpoints. The explicit `--skip-rebuildable-pages` option verifies those archived page hashes, preserves current local pages and restores the other 84 evidence files. Rebuild both pages with the tracked commands above. Conflict refusal still applies to all frame and scientific evidence files. This checkpoint contains no new narration or completed full exports.

Fresh narration checkpoint: `module5-c2-b2-voiced-media-2026-10-10.zip` preserves 436 files including all 20 raw Simon v4 takes and sidecars, lossless assemblies, measured v1/v2 sources, full listening tracks and both short voiced pilot packages. The selected archive restored 84 evidence files after explicit HTML skipping; all 436 voiced archive members restored and matched hashes in `out/checks/module5-voiced-v2-transfer-2026-10-10`. Both exact pilot snapshots verified in the byte-preserved runtime at `af390e9`. The transfer helper's four isolated conflict/corruption cases also passed. See [the voiced checkpoint](module5-c2-b2-voiced-checkpoint-2026-10-10.json) and [skip validation](transfer-skip-validation-2026-10-10.json). Human listening and whole-lesson visual review remain pending. An observed captions-with-controls overlap is receiving an additive selected v3 fix; this archive preserves the earlier v2 evidence.

Complete empirical and mole-ratios exports have separate immutable archives, leaving the accepted pilot/archive bytes unchanged. Full packages need their own release checks. Restoring these copies makes review media available, but verification against the original render dependencies uses the pinned calculation runtime at `5ff1e4a2851193d4bad26750145592c1ae97d4bf`. Do not imply that the current Module 5 renderer generated these older calculation packages.

The caption-safe archive adds 38 v3 source/props, two short voiced pilot02 packages and native/decoded frame evidence files. It reuses the earlier frozen raw/assembled audio, so restore the voiced archive first. The live narration page is rebuilt from the current tracked selection, with unchanged full audio and the selected clip paths. Older archived page bytes are retained. Native and narrow evidence, controls-visible caption observation and human listening remain distinct; pending late-task/whole-lesson checks are not release approval.

Latest additive checkpoint: complete mass-to-mass and limiting exports and caption-safe v4 selected sources, three voiced pilots and late native/decoded evidence are uploaded with matching GitHub SHA256 and size. The v3 archive also restores into its own pinned 7106255 checkout: all 474 voiced/v3 files and both pilot02 snapshots verify. See the transfer record for exact immutable archive names and the independent current full-package science reviews for scope. Human listening and other complete-package release reviews remain pending.

V4 fresh-checkout validation is complete at runtime `faf71befabae61b302c6e48f2cfc03432875f648`: all 485 restored files match their archive members and all three pilot dependency snapshots verify. See [the v4 transfer check](module5-c2-b2-v4-transfer-check-2026-10-10.json). Keep prior v2/v3 runtimes pinned for their earlier evidence.

Current Chemistry C3 voiced continuation: `module5-c3-voiced-media-2026-10-10.zip` preserves98 ignored files, including twelve raw takes/sidecars, ten lossless assemblies, both short pilots and decoded frames. GitHub API uploaded state, exact size and digest match the locally CRC/SHA-verified archive and checksum. [Current C3 checkpoint](module5-c3-voiced-preparation-2026-10-10/README.md) gives explicit download/restore and page rebuild commands. Ordinary Git contains the selected v2 source, briefs, scripts and exact historical v1 wrapper/tool snapshots. Complete playback, human listening, full export and public release remain pending. No fresh-clone restoration is claimed for this new archive yet.
