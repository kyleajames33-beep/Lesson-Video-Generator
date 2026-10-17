# Website video placement plan

Brief 51, 16 October 2026. This is a read-only plan for the site repository at `C:/Users/kygs/hscscience`. Its Git remote is `kyleajames33-beep/Teaching-APP.git`. No site files were changed.

## Inventory and placement

`site-video-manifest.json` maps all 22 videos recorded as published across YouTube upload waves 1 to 4, including brief 28j. Every entry has a matching Year 12 Module 5 lesson file and an exact section heading found in that file. Both the bread mould and fission/budding videos fit the same Biology lesson 3 section. Chemistry C6a and C6b use different sections in lessons 10 and 11. G03c and G03d fit the worked examples section of Chemistry lesson 11. The manifest records published videos only; new uploads need a new entry after their video IDs and caption status are verified.

The site lessons are static HTML under `subjects/{subject}/year12/module5/lessonNN.sa.html`. Chemistry pages use `.sa-step` and `.sa-step-content` with heading IDs. Biology pages use the same step structure, although their headings generally lack IDs. The pages load shared `senior-adventure-v2.js` and subject Module 5 CSS. `lesson-nav.js` handles navigation, and `lesson-components.css` defines shared lesson styling. Neither course's Module 5 lesson pages contain a YouTube embed or a reusable video component now.

Put the video card in the matching section from the manifest, inside that section's `.sa-step-content`, just after its introduction and before the worked explanation. This ties the video to the task it teaches. For a video that introduces the whole lesson, a small `Watch the video` card in the orient step can link to the same embedded card without adding a second player. The two videos in Biology lesson 3 should have distinct cards under their shared section. Avoid placing a player over a diagram or inside a quiz control.

## Embed implementation

Create one shared CSS rule set and a small script for the click-to-load card. Generate the cards from the checked manifest during the site build, or insert the same markup into the mapped pages. Host a small local poster image for each video. The poster, title, duration and a normal YouTube link are available before the player loads. On click, replace the button with a privacy-enhanced iframe from `www.youtube-nocookie.com`; set `loading="lazy"`, an informative `title`, `allowfullscreen`, and only the permissions the player needs. YouTube documents the privacy-enhanced domain in its [embed guidance](https://support.google.com/youtube/answer/171780). It does not remove all third-party requests after the student chooses to play.

Example for Chemistry lesson 9, in the `The Keq expression rules` step:

```html
<div class="lesson-video" data-youtube-id="NJjEgjilgAE">
  <button class="lesson-video__load" type="button"
    aria-label="Play The Equilibrium Constant, K: Writing Expressions, 7 minutes 12 seconds">
    <img src="../../../../assets/video-posters/NJjEgjilgAE.webp"
      alt="" width="640" height="360" loading="lazy">
    <span>Watch the video (7:12)</span>
  </button>
  <a href="https://youtu.be/NJjEgjilgAE">Open on YouTube</a>
</div>
<script>
document.querySelectorAll('.lesson-video__load').forEach(button => {
  button.addEventListener('click', () => {
    const card = button.closest('.lesson-video');
    const id = card.dataset.youtubeId;
    if (!/^[A-Za-z0-9_-]{11}$/.test(id)) return;
    const frame = document.createElement('iframe');
    frame.src = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1`;
    frame.title = button.getAttribute('aria-label');
    frame.loading = 'lazy';
    frame.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share';
    frame.allowFullscreen = true;
    button.replaceWith(frame);
  });
});
</script>
```

Style the card and iframe with `aspect-ratio: 16 / 9`, `width: 100%`, clear focus styling and a maximum width that matches the lesson content column. Keep the YouTube link outside the replaced button. The example script belongs in one shared asset when implemented, not repeated on every page. Check keyboard activation, mobile width, collapsed step behaviour, captions, and page speed before rollout. The public upload ledgers record timed English (Australia) captions for all 22 entries.

## Later self-hosting

Keep the source MP4, exact hash, poster and captions together in a media inventory. There are local `captions.vtt` files in the measured lesson folders. A self-hosted `<video controls preload="none" poster="...">` can use an MP4 source and `<track kind="captions" srclang="en-AU" ...>` after checking that the VTT matches the exact master. Adaptive HLS/DASH variants, a CDN, range requests, cache rules, transcoding, accessibility checks and backup/restore tests would be needed for reliable delivery at scale. Google Drive is a backup source, not a public streaming origin.

The initial sample of 15 published MP4s present locally totalled about 1.01 GB, around 67 MB each. At that average, 22 masters are about 1.47 GB before any streaming variants or posters. As an illustrative workload, 10,000 full views a month would transfer roughly 670 GB; actual viewing and compressed variants will differ. [Cloudflare R2 Standard pricing](https://developers.cloudflare.com/r2/pricing/) as posted on 1 October 2026 is US$0.015 per GB-month of stored data, US$0.36 per million read operations, and no egress charge. At 2 GB stored and 100,000 read operations, the listed usage is about US$0.07 per month before CDN/compute, taxes and any minimum billing. This is a storage and request illustration, not a complete streaming quote. Recheck current pricing and provider terms before deciding to migrate.
