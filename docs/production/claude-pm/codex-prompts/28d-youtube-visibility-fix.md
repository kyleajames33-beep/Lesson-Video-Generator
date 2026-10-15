# Brief 28d: fix visibility of G01, C4a and B4

Read `00-standing-rules.md` first. In brief 28c you saw that YouTube Studio shows these as Private, although `docs/production/claude-pm/youtube/wave4-uploads.json` records them as Public. The owner approved all three for public release on 14 October.

1. In Studio, set each of these to Public: G01 (https://youtu.be/BdF_sRrt5Yw), C4a (https://youtu.be/yk5KVdipGRE), B4 (https://youtu.be/P9jyiLiGhZI). Change nothing else: title, description, captions and thumbnail stay the same.
2. Check every other wave video in `wave4-uploads.json` (and B3a, https://youtu.be/bUPs256KyVY) and confirm it is Public. Record what Studio shows for each.
3. Check the Chemistry Module 5 and Biology Module 5 (2017 syllabus) playlists: each video appears once, in syllabus order. Biology: B1, B2a, B2b, B2c, mould, B3a, B4 for now (B3a part 2 and B3b will go between B3a and B4 later).
4. If `wave4-uploads.json` records a visibility that Studio does not show, correct the JSON to match Studio after your fix. Append a short hand-in to `status.md`: what was Private, what you changed, and the final playlist order.
