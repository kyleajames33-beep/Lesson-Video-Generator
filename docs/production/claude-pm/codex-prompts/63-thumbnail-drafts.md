# Brief 63: draft thumbnails for the published Module 5 videos (for owner review, do not upload)

Read `00-standing-rules.md` first. Read the owner's thumbnail research in `docs/production/claude-pm/thumbnails/research-top-channels.md` and any thumbnail notes in `docs/production/claude-pm/thumbnails/`.

The published videos currently use YouTube's auto-picked frame. The owner does not want thumbnails that look AI-generated. Make **non-AI** drafts by compositing real frames from our own videos with bold, readable text, following the research.

1. For each published Module 5 video in `docs/production/claude-pm/youtube/wave4-uploads.json`:
   - Extract 3 to 5 strong candidate frames from the MP4 with ffmpeg (`node_modules/@remotion/compositor-win32-x64-msvc/ffmpeg.exe`). The best frames show the key visual (the clip moment, a big diagram, a painted plate), not a text-heavy frame.
   - Pick the best frame and compose a 1280x720 thumbnail with Python and Pillow:
     - the frame, cropped and zoomed to the key visual;
     - a short hook in 2 to 5 large words (for example "Why K never moves", "Q vs K in 10 s", "5 calculation types");
     - a consistent HSCScience colour band or corner tag, and the subject colour (Chemistry teal, Biology blue).
   - Use the site's fonts if available, otherwise a clean bold sans. No AI image generation. No faces or people. No clickbait arrows unless the research recommends them.
2. Make one consistent template and apply it to all of them, so the channel looks like a set.
3. Save the drafts to `docs/production/claude-pm/thumbnails/drafts/<lessonId>.png` (create the folder; this path is gitignored only if the owner says so), plus a contact sheet `drafts/contact-sheet.png` showing them all.

**Do not upload anything to YouTube.** The owner reviews first.

Hand in to `status.md` with the template choices and any videos where no frame worked well.
