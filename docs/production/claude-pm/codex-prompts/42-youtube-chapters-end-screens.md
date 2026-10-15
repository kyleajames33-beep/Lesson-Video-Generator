# Brief 42: YouTube chapters, end screens and a published-video audit

Read `00-standing-rules.md` and `28-youtube-upload-c4a-b4-and-ledger.md` first. Work in YouTube Studio on the HSCScience channel. The owner approved this housekeeping on 15 October. Change only what is listed here.

1. **Chapters.** Add chapter timestamps to the description of every published Module 5 video listed in `docs/production/claude-pm/youtube/wave4-uploads.json` that does not already have them.
   - Compute each video's scene start times from its measured lesson at `docs/production/claude-pm/lessons/<key>/measured/lesson.json`:
     - a running total of `durationInFrames` at 30 fps;
     - add `introDurationInFrames` if it is non-zero.
   - Group scenes into about 5 to 9 chapters with short plain names, for example "0:00 The puzzle", "1:42 Writing the expression", "6:10 Practice question", "7:30 Key notes".
   - Rules:
     - the first chapter is 0:00;
     - each chapter is at least 10 seconds long;
     - no em dashes;
     - keep the existing description text and the syllabus dotpoint block exactly as they are, and insert the chapter list after the first paragraph.
   - Save the chapter list per video in `wave4-uploads.json` under `chapters`.
2. **End screens.** On each published Module 5 video, add an end screen over the last 15 to 20 seconds (the key-notes hold):
   - one element linking the next video in syllabus order (use the playlist order in `wave4-uploads.json`);
   - one subscribe element.

   Do not cover the key notes text: place elements in the top corners, or skip a video whose notes fill the screen and say so.
3. **Audit.** For every published Module 5 video, record in `wave4-uploads.json` and in a table in your hand-in:
   - visibility;
   - captions published (English, Australia);
   - dotpoint present;
   - playlist position;
   - whether a thumbnail is set;
   - any copyright or processing warnings.

   Fix only these: a missing caption file (upload the matching measured `captions.srt`) and a wrong playlist position. Report anything else.

Append a hand-in to `status.md`.
