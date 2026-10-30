# Brief 28ab: upload Chemistry M6 C02, and correct the Biology M7 P02 description

Read `28y-youtube-upload-m6-practicals-s05-m7-first-twenty.md` first and follow its rules: hash checks, metadata, cumulative-timing chapters, captions, playlists and the hand-in.

## 1. Upload chem-m6-c02

The coverage audit (brief 113) found this video voiced and built on 19 October but never rendered. It was rendered on 30 October under the standing render policy, and Claude verified it: 1920 by 1080, with audio and all 16,884 frames.

| Video | File (under `out/explainer/`) | sha256 | Captions (under `docs/production/claude-pm/lessons/`) | Design | Min |
|---|---|---|---|---|---|
| chem-m6-c02 | `Explainer-chem-m6-c02/Explainer-chem-m6-c02-v2.mp4` | `a2850ece55131cd2ee6cef5fe961544cf348ac7d21fabae659d36c7f1ee418a7` | `m6c02/measured/captions-cumulative.srt` | `chem-m6-c02.md` | 9.4 |

Use only the `captions-cumulative.srt` file, exported on 30 October. Put the video in the Chemistry M6 playlist at its route position (`module6-video-route-draft.json`), then read the playlist back.

## 2. Correct the published Biology M7 P02 description

The owner decided on 30 October to leave the video unchanged and add a correction to its description; see `checks/codex-check-112.md`, separate finding. Its upload record is in `wave5-uploads.json` under `bio-m7-p02`.

Add this paragraph after the syllabus quote and before the chapters:

> Correction: the video's memory line says "tape, don't seal". Follow your school's approved procedure for securing the lid, which may use tape or parafilm. Keep grown plates closed.

Save the change, read it back, and update the record in `wave5-uploads.json`. Don't change the title, video, captions or playlist.

Hand in to `status.md` with the C02 link and the P02 readback.
