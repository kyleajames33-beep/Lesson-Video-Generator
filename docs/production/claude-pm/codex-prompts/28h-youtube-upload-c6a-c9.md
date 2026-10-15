# Brief 28h: upload C6a (ICE tables) and C9 (temperature and K)

Read `00-standing-rules.md` and `28-youtube-upload-c4a-b4-and-ledger.md` first. Do brief 28g first if it is not done. Upload both videos exactly as in brief 28. The owner approved both on 15 October, and both are loudness normalised. Check each sha256 before uploading.

| Video | File | Length | sha256 | Captions |
|---|---|---|---|---|
| C6a | `out/explainer/Explainer-chem-m5-c06a/Explainer-chem-m5-c06a-v1.mp4` | 10:17 | `286a6b1fbf72e85b671ceea612b03a4f1e848fbe11ce167dfe73a079531ff1ab` | `docs/production/claude-pm/lessons/c6a/measured/captions.srt` |
| C9 | `out/explainer/Explainer-chem-m5-c09/Explainer-chem-m5-c09-v1.mp4` | 8:48 | `08ae49b72958f1d1a512938fc10ce3df969ee6ca1ad058af1bf6201d842e23a6` | `docs/production/claude-pm/lessons/c9/measured/captions.srt` |

Use the metadata entries `chem-m5-c06a` and `chem-m5-c09` in `docs/production/claude-pm/youtube/wave4-metadata-draft.json`. Ignore the old `chem-m5-c06` entry, because C6 was split into C6a and C6b.

Check the dotpoint wording word for word against the official 2017 Chemistry syllabus:
- C6a: check it as usual.
- C9: `verifyWording` is true. If the official wording for the temperature and Keq dotpoint differs from the draft, use the official wording in the description and correct the draft JSON.

Playlist: Year 12 Chemistry Module 5 (2017 syllabus), in syllabus order:
- C6a goes directly after C5.
- C9 goes after C8, or after the last uploaded video before it.
- C6b, C7 and the G videos will be inserted later.

Add both entries to `docs/production/claude-pm/youtube/wave4-uploads.json` and append a short hand-in to `status.md`.
