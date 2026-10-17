# Brief 51: plan for putting the videos on hscscience.com.au

Read `00-standing-rules.md` first. The owner wants the videos on the website eventually. The site repo is `C:/Users/kygs/hscscience`. For this brief it is **read-only**: no edits, commits or deploys there. Produce a plan and a manifest only.

1. **Manifest.** For every published video in `docs/production/claude-pm/youtube/wave4-uploads.json`, and the older ones in that ledger, map it to the site lesson page or pages where it belongs. Use the site extracts and the lesson designs' "Site sources used" lines. Write `docs/production/programme/site-video-manifest.json` with: `videoId`, `youtubeUrl`, `title`, `subject`, `year`, `module`, `siteLessonPath(s)`, `sectionWhereItFits` (heading text), `durationSeconds`, `captionsAvailable` (true).
2. **Embedding approach.**
   - Look at how the site's lesson pages are built: shared JS such as `lesson-nav.js`, the CSS, and whether a video component exists. The memory notes mention a webapp repo `kyleajames33-beep/teachingapp`; check whether the site in `C:/Users/kygs/hscscience` is that repo.
   - Recommend how to embed: privacy-enhanced YouTube embed (`youtube-nocookie.com`), lazy loading, and a click-to-load thumbnail for page speed.
   - Recommend where on the page: near the matching section, or a "Watch the video" box at the top.
   - Draft an example HTML/JS snippet in the plan doc. Do not apply it.
3. **Later self-hosting.** Note what would be needed to self-host the masters from the Google Drive backup instead of YouTube: storage, bandwidth cost estimate, and captions as WebVTT (the `captions.vtt` files exist in each measured folder).

Write `docs/production/programme/website-video-plan.md`. Hand in to `status.md` with the number of videos mapped and any videos with no matching site page.
