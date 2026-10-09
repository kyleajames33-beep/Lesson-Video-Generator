# GitHub media backup

The user asked to put the media on GitHub as well as the code, and continue production on the current computer. The repository's ignored media snapshot is therefore being uploaded as split assets on a dedicated GitHub release.

Release: https://github.com/kyleajames33-beep/Lesson-Video-Generator/releases/tag/workspace-media-2026-10-09

This backs the 9 October handoff at commit `7d22ea3`. The archive and parts are immutable snapshots, not a live copy of later production. See [the transfer record](computer-transfer-2026-10-09.json) for upload status, expected sizes and SHA-256 hashes. Credentials are excluded.

GitHub blocks ordinary Git files larger than 100 MiB. Release assets must each be smaller than 2 GiB, so the 2.85 GiB ZIP is split into two byte ranges. This avoids adding several gigabytes to the source history. Sources: [large files](https://docs.github.com/en/repositories/working-with-files/managing-large-files/about-large-files-on-github), [release limits](https://docs.github.com/en/repositories/releasing-projects-on-github/about-releases).

After cloning the latest `main`, install Python and GitHub CLI, then:

```powershell
python scripts/github-media-transfer.py download
python scripts/transfer-workspace.py restore-state
python scripts/transfer-workspace.py restore-media
python scripts/github-media-transfer.py download-continuation
python scripts/transfer-workspace.py restore-media out/archives/continuation-media-2026-10-09.zip
```

Sign in with `gh auth login` if the repository requires authentication. The downloader preserves matching existing parts and refuses conflicting files. It checks each part and the joined ZIP against the checked-in hashes. The subsequent restore checks individual contents.

Alternatively, download both `.part01` and `.part02` assets from the release into `out/archives/`, then run `python scripts/github-media-transfer.py join` before the restore commands. A plain Git clone still does not download release assets automatically. Existing local copies of the complete ZIP remain valid.

The release is prepared as a draft and only published after both uploads have matching server-side sizes and SHA-256 digests. A prepared or draft status is not proof that the off-machine backup is available.

The additive continuation snapshot restores the subsequently recorded empirical lesson and verified pilots over the original handoff. See [the current review](continuation-review-2026-10-09.md) for the selected paths and remaining checks. Its download helper verifies the full ZIP hash before restoration. Future changes require a fresh dated snapshot; this release does not automatically synchronise ignored files.
