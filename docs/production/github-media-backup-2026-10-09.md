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
```

Sign in with `gh auth login` if the repository requires authentication. The downloader preserves matching existing parts and refuses conflicting files. It checks each part and the joined ZIP against the checked-in hashes. The subsequent restore checks individual contents.

Alternatively, download both `.part01` and `.part02` assets from the release into `out/archives/`, then run `python scripts/github-media-transfer.py join` before the restore commands. A plain Git clone still does not download release assets automatically. Existing local copies of the complete ZIP remain valid.

Both archive parts, the checksum file and all four additive continuation ZIPs have matching server-side sizes and SHA-256 digests. The archives also passed content verification and restore checks locally. The release was published on 9 October 2026; later continuations were added after their content checks. See the transfer record for the publication timestamp and hash evidence.

The first additive continuation restores the recorded empirical lesson and its verified pilots over the original handoff. The second, `calculation-batch-media-2026-10-09.zip`, adds mole-ratios and mass-to-mass recordings, measured sources and four short pilots, plus the combined review page. See [the current batch](calculation-review-batch-2026-10-09.md) for selected paths and remaining checks. Restore both continuations in the documented order. The helper verifies each full ZIP hash before restoration; use explicit names because its unnamed default selects the latest continuation. Future work needs a new dated snapshot; this release does not automatically synchronise ignored files.

The third additive continuation, `calculation-feedback-media-2026-10-10.zip`, contains the explicit-ratio correction, targeted gentler calculation delivery, four new worked pilots, full listening tracks and the new review page. Consult [the feedback report](calculation-feedback-2026-10-10.md) and transfer record for exact prepared/uploaded status. Restore this after the two earlier continuations, preserving their older sources and media. The revised listening and full-release gates remain pending.

The fourth continuation, `calculation-feedback-frames-2026-10-10.zip`, preserves the 27 native decoded PNG frames referenced by the independent pilot review. Restore it after the third continuation, which includes the six associated evidence JSON files. The separate companion preserves the settled media ZIP unchanged. Static evidence does not establish listening or continuous playback approval.

The fifth continuation, `module5-parallel-review-media-2026-10-10.zip`, preserves the parallel team's original and revised Module 5 diagnostic stills, source-bound evidence manifests and render helpers, plus the local production reading desk. Draft lessons, narration, briefs, independent reports and ownership board are in ordinary Git. The ZIP excludes reproducible bundles and dependency folders. It contains no new recordings or full videos and does not clear pending visual, listening or release gates. Restore it after the previous four continuations. The [production board](parallel-production-board-2026-10-10.json) distinguishes completed checks from the next required work.

The additive Module 5 v2 archive preserves 40 visual evidence/planning-page files. Rebuild the latest production desk with `python scripts/build-parallel-production-review.py` after restoration. The focused route and source drafts are tracked in Git.
