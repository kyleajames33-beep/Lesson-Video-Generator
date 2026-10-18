# Brief 75: refresh the website video embed manifest

Read `00-standing-rules.md` and `51-website-video-embed-manifest.md` first. Update the brief 51 manifest so it covers every published video (check `youtube/*-uploads.json` and today's uploads), with the site lesson file each video belongs to and where on the page it fits best (section id or heading).

For each site lesson with at least one video, also write a ready-to-paste embed block in the site's own markup style. Follow the site's existing patterns: read any lesson that already embeds media. Use privacy-enhanced youtube-nocookie URLs and a short caption.

**Do not edit the site.** Output `docs/production/claude-pm/website-embeds/` with `manifest.json` and one `<lessonfile>.html.snippet` per lesson, plus a README saying where each snippet goes. Hand in to `status.md`.
