# Members-only videos on Bunny Stream: plan

Prepared 14 November 2026 for the owner. Status: groundwork only. No account, payment, API call or site change has been made. Prices were read from bunny.net and stripe.com on 14 November 2026; anything marked **(not verified)** still needs checking.

## In one paragraph

Keep YouTube free for discovery. Put a second, private copy of each finished video in a Bunny Stream library that only plays when hscscience.com.au hands the viewer a signed link that expires. The site only signs links for logged-in people with an active A$5 a week subscription paid through Stripe. Bunny costs are small: about US$5 to US$40 a month at 100 to 1,000 members if we set the encoding bitrates sensibly. The real work and the real risks are on the site (payments, access checks, refunds, GST) and in the voice and artwork licences, not in Bunny.

## (a) What the site has today

The site is the private repo `kyleajames33-beep/Teaching-APP` (the brief called it "teachingapp"). It was audited read-only from a shallow clone of `main` at commit `e0b94ead` (9 November 2026).

| Question | Finding | Where |
|---|---|---|
| Stack | Plain static HTML pages with small React bundles compiled in advance. It is **not** Next.js. | `index.html`, `pricing.html`, `*.compiled.js`, `package.json` |
| Hosting | **Cloudflare Pages**, not Vercel. `vercel.json` is still in the repo but the redirect file says Cloudflare ignores it in production. Pages Functions exist. | `_redirects` (header comment), `_headers`, `scripts/pages-deploy.js`, `functions/subjects/_middleware.js` |
| Accounts | **Supabase Auth** (email sign-up, login, profile), with a 15+ age self-declaration on forms. | `supabase-client.js`, `auth-state.js`, `auth/login.html`, `auth/register.html`, `age-gate.js` |
| Database and server code | Supabase Postgres (85 migrations) and Supabase Edge Functions. | `supabase/migrations/`, `supabase/functions/` |
| Membership | A "StudyPass" membership is **designed and partly built but switched off and not deployed**: a `membership_grants` table (who has access, until when), an audit table, a pure policy module and an authenticated delivery Edge Function. | `supabase/migrations/20261015094540_membership_delivery_foundation.sql`, `supabase/functions/membership-delivery/index.ts`, `supabase/functions/_shared/membership-policy.mjs`, `docs/plans/membership/STATUS.md` |
| Payments | **None.** Stripe is named as the proposed provider only. There is no checkout, webhook or price. The pricing page says paid tiers are "in development". | `docs/plans/membership/IMPLEMENTATION-PLAN.md` ("Payment lifecycle"), `pricing.html` |
| Videos | 31 published YouTube videos are listed in a curated registry. A build script writes a click-to-load card into each lesson page; the player is a `youtube-nocookie.com` iframe. **Embeds are currently turned off** (`"embedsEnabled": false`), so pages show the cards without the player script. | `data/lesson-videos.json`, `scripts/build-lesson-videos.js`, `lesson-videos.js`, `lesson-videos.css` |
| Video manifest from this repo | This repo's `scripts/export-site-video-manifest.mjs` writes `out/site-video-manifest.json` (composition id, title, syllabus, `/videos/<id>.mp4` paths). The site used a copy of it once, as a **seed** for its registry (`provenance.seedManifest` in `data/lesson-videos.json`). The site does not read it at build or run time; the registry is edited by hand from the YouTube upload ledgers. | `data/lesson-videos.json` (`provenance`) |

**Important conflict to decide first.** The site's membership plan (`docs/plans/membership/PRODUCT-DECISIONS.md`, 15 October 2026) says lessons, diagrams and **videos stay free**, and StudyPass is a working **A$5 a month** price for practice, worksheets and revision tools. The new direction (A$5 a week, videos included) reverses part of that. Also, every video that is on YouTube is free there anyway. The paid offer therefore needs a reason to pay beyond "the same videos": for example members-only practice walkthroughs, the full catalogue before it reaches YouTube, ad-free organised playback beside the notes, and the StudyPass practice tools.

### Where the paywall plugs in

1. **Who is a member:** a Stripe webhook handler (a new Supabase Edge Function) writes or ends a row in `membership_grants` with `source = 'subscription'`. The table already has the right shape (status, valid from, valid until, revoked). Its capability list needs one new value such as `video_library` (a migration change in the site repo).
2. **Who gets a playable link:** a new Supabase Edge Function, built like `membership-delivery`, checks the logged-in user with `Auth.getUser`, checks their grant, then signs a Bunny embed URL with the token key held in Supabase secrets. It returns only the signed URL, never the key.
3. **What the page shows:** `lesson-videos.js` gains a members mode. A member's card asks the Edge Function for a signed URL and loads the Bunny iframe. Anyone else sees the free YouTube player (or a "members only" prompt for members-only videos).
4. **Release gates already written on the site** still apply: no restriction goes live until payment lifecycle, grants and a hosted rehearsal pass (`PRODUCT-DECISIONS.md`, "Release conditions").

## (b) Target design

```
Student browser                hscscience.com.au (Cloudflare Pages)        Supabase                     Bunny Stream
lesson page  ── logged in? ──► lesson-videos.js ── "play v123" ──────────► video-embed Edge Function
                                                                            checks login + active grant
                                                                            signs URL (token key secret)
              ◄──────────────── signed iframe URL, expires in ~2 h ◄───────
iframe ─────────────────────────────────────────────────────────────────────────────────────► player plays only
                                                                                               if token valid and
                                                                                               domain allowed
Stripe Checkout (A$5/week) ──► Stripe webhook ──► stripe-webhook Edge Function ──► membership_grants row
```

- **Private Bunny library with token authentication.** With "embed view token authentication" on, the Bunny player refuses any embed URL without a valid `token` and `expires`. The token is `SHA256_HEX(token_key + video_id + expires)`, with `expires` as a Unix time in seconds. Keep the key on the server only. ([token authentication](https://bunny.net/docs/stream/token-authentication.md), [signed embeds](https://bunny.net/docs/stream/player/signed-embeds.md))
- **Allowed domains:** set `hscscience.com.au` and `www.hscscience.com.au` (no `https://`). An empty list allows every domain. ([security options](https://bunny.net/docs/stream/security-options.md))
- **Short-lived links:** the site mints a fresh link per play. Suggested expiry: 2 hours. **(Not verified:** whether a playing video stops when the token expires mid-play. Test this in Phase 1.)
- **Stripe weekly subscription:** one Product, one recurring Price of A$5.00 every week, entered as **GST inclusive**. Stripe Checkout for sign-up and the Stripe customer portal for cancelling and card changes. Bill the parent or student who pays; access goes to the logged-in learner account (the site plan already separates payer and learner).
- **GST:** price is A$5 including GST once registered (A$0.45 of each charge is GST). Avoid Stripe Tax for this: it costs A$0.75 per transaction on the API integration or 0.5% on the no-code one, which hurts on a A$5 charge. A fixed 10% GST-inclusive tax rate on the price is enough for a single-country product. **(Not verified:** that Stripe's manual tax rates carry no fee.)
- **YouTube stays free and public**, with the site link in each description, exactly as today.
- **This repo's part:** `scripts/bunny-upload.mjs` and `scripts/bunny-catalogue.mjs` (new, below) upload masters and captions and keep a record per video in `out/bunny/<id>.json`. The site will later need a mapping from lesson id to Bunny video id; the simplest path is to add `bunnyVideoId` to each entry in the site's `data/lesson-videos.json`, copied from those records.

## (c) Costs

### Our real video sizes

Measured with Remotion's bundled ffprobe on the latest master of all 70 compositions in `out/explainer` (14 November 2026): average 8.25 minutes and 52.4 MB per video, 1080p at 30 fps, H.264 plus AAC, **average 847 kbps** (range 157 to 1,300 kbps; `math-a12-f01-v1` is 794 kbps). Our videos are mostly still drawings and text, so they compress very well.

### Bunny prices (USD, read 14 November 2026)

| Item | Price | Source |
|---|---|---|
| Encoding (standard) | Free | [Stream pricing](https://bunny.net/docs/stream/pricing) |
| Storage | US$0.01/GB per month in the main region (Frankfurt); 2nd region +US$0.01/GB; 3rd and later +US$0.005/GB | [Stream pricing](https://bunny.net/docs/stream/pricing) |
| Delivery, Standard network | Asia and Oceania US$0.03/GB; Europe and North America US$0.01/GB | [Stream pricing](https://bunny.net/docs/stream/pricing), [CDN pricing](https://bunny.net/pricing/) |
| Delivery, Volume network (10 PoPs) | US$0.005/GB up to 500 TB | same |
| Captions you upload | No fee found; they add a little storage | [Stream pricing](https://bunny.net/docs/stream/pricing) |
| AI transcribing (not needed, we have SRT) | US$0.10 per language minute | same |
| MediaCage Basic DRM | Free ("a basic free DRM system") | [security options](https://bunny.net/docs/stream/security-options.md) |
| MediaCage Enterprise DRM | US$99/month per library plus US$0.005 per licence (one per playback) up to 20,000, then US$0.004 | [DRM](https://bunny.net/docs/stream/drm), [Stream pricing](https://bunny.net/docs/stream/pricing) |
| Monthly minimum | US$1 | same |

### Assumptions

- An active member watches 20 videos a month (about 5 a week), so 165 minutes.
- **Tuned:** we set Bunny's encoding bitrates near our masters, about 1 Mbps at 1080p. That is 1.24 GB per member per month.
- **Defaults left on:** about 5 Mbps at 1080p. **(Not verified:** Bunny's default bitrate per resolution is not on the pages read; 5 Mbps is an assumption.) That is 6.2 GB per member per month for no visible gain, because our masters are under 1 Mbps.
- Delivery priced on the Standard network, Asia and Oceania rate, since most viewers are in NSW. **(Not verified:** whether the Volume network has an Australian PoP and whether a Stream library can use it.)
- Catalogue of 1,500 videos stored in two regions (main plus Sydney) with four renditions (1080p, 720p, 480p, 360p), originals not kept.

### Monthly cost estimates

| Members | Delivery, tuned | Delivery, defaults | Storage (1,500 videos) | Enterprise DRM (optional) | Stripe fees (weekly billing) | GST in revenue |
|---|---|---|---|---|---|---|
| 100 | US$4 | US$19 | US$4 tuned, US$19 defaults | US$109 | A$181 | A$197 |
| 1,000 | US$37 | US$186 | same | US$199 | A$1,809 | A$1,970 |
| 5,000 | US$186 | US$928 | same | US$519 | A$9,046 | A$9,848 |

Revenue: A$5 a week is A$21.67 a month per member (5 times 52, divided by 12). Gross per month: A$2,167 at 100 members, A$21,667 at 1,000, A$108,333 at 5,000.

Per member per month on weekly billing: A$21.67 gross, less A$1.97 GST, less about A$1.81 Stripe fees (1.65% plus A$0.30 per domestic card charge, 4.33 charges a month, plus 0.7% Stripe Billing), leaves about **A$17.89**. Bunny adds roughly US$0.04 (tuned). International cards cost 3.5% plus A$0.30. Disputes cost A$25 each. ([Stripe AU pricing](https://stripe.com/au/pricing))

**What this tells us:**
1. Bunny is cheap if we tune bitrates. Leaving defaults costs about 5 times more delivery for the same picture.
2. Stripe's fixed 30 cents on every weekly charge is the biggest per-member cost. A 4-weekly price (A$20 every 4 weeks) or a monthly option roughly halves card fees (about A$0.81 a month instead of A$1.81).
3. Enterprise DRM is the one Bunny cost that matters at small scale (US$99 a month floor). Start without it.

Exchange rate is not applied above. **(Not verified:** the current USD to AUD rate; at about A$1.55 per US$1, the tuned 1,000-member Bunny total is near A$65 a month.)

## (d) Owner-only steps

Do these yourself; agents must not create accounts or enter payment details.

1. **Create the Bunny account** at bunny.net under the business name and ABN. Turn on two-factor login.
2. **Add a card** (Billing). **(Not verified:** whether Bunny takes a prepaid balance or bills the card monthly; follow what the dashboard asks.)
3. **Create the Stream library:** Stream, then "Add Video Library". Name it `HSCScience Members`. In storage regions, add **Sydney** as a replication region (and keep the main region it offers). Replication regions cannot be removed later, so add only Sydney now. ([quickstart](https://bunny.net/docs/stream/quickstart.md))
4. **Encoding settings, before any upload** (they only affect videos uploaded afterwards): enable 360p, 480p, 720p and 1080p only; set bitrates near 1,000 kbps for 1080p and lower for the others; leave **Early-Play off** (it exposes the original file), **MP4 fallback off** (it creates downloadable files), and **Keep original files off** (our masters are backed up to Google Drive). ([encoding](https://bunny.net/docs/stream/encoding.md))
5. **Security settings:** turn on **Embed view token authentication**; add allowed domains `hscscience.com.au` and `www.hscscience.com.au`; turn on **Block direct URL file access**; turn on **MediaCage Basic DRM** (free), then check playback on an iPhone before relying on it.
6. **Copy three values into `secrets/bunny.json`** on this PC (the folder is git-ignored; never paste these into chat or a document):
   `{"libraryId": 123456, "apiKey": "<library API key from the library's API page>", "tokenAuthKey": "<Token authentication key from the Security page>"}`
   The token key is a different value from the API key.
7. **Tell root it is ready.** Root runs a 2 or 3 video pilot upload with `scripts/bunny-upload.mjs` and later puts the token key into Supabase Edge Function secrets for the site.
8. **Create the Stripe account** at stripe.com/au with the ABN, verify identity and add the bank account. Turn on two-factor login.
9. **In Stripe, create the Product and Price:** "HSCScience Membership", recurring, A$5.00 weekly, tax behaviour **inclusive** (and decide whether to add a 4-weekly price too). Turn on the customer portal (cancel at period end, update card).
10. **Decide GST:** if the business's total GST turnover (tutoring included) is or will be A$75,000 or more in 12 months, register for GST and give the ABN's GST status to root. Talk to your accountant either way.
11. **Write or approve the customer terms:** price, renewal, how to cancel, refund approach, what is included. Root and agents can draft; you approve.
12. **Confirm the voice and artwork licences** listed in section (f) before any paid video goes live.

## (e) Phased rollout (smallest launchable first)

**Phase 0: decisions (owner, 1 hour).** Choose: what members get that YouTube does not; weekly, 4-weekly or monthly billing; whether this replaces or joins StudyPass. Record the decision in the site's `docs/plans/membership/PRODUCT-DECISIONS.md` via a site PR.

**Phase 1: private pilot (no customers).** Owner steps 1 to 7. Upload 3 videos with captions using `scripts/bunny-upload.mjs`. Sign a test link by hand and check: playback on Windows Chrome, Android, iPhone Safari; captions show; an unsigned link, an expired link and a link on another domain all fail; what happens when a link expires mid-video.

**Phase 2: smallest launchable version.** In the site repo (its own PR and review gates):
- `stripe-webhook` Edge Function: on paid, renewed, cancelled, failed or refunded events, write the matching `membership_grants` row and audit row.
- `video-embed` Edge Function: logged-in member in, signed Bunny URL out.
- `lesson-videos.js` members mode plus a "Join" button to Stripe Checkout, and the customer portal link on the profile page.
- One course only (for example Year 12 Biology), with a clear statement of what is included.
- Stripe test mode end to end, then a few real friends-and-family subscriptions before public launch.

**Phase 3: whole catalogue.** Run `scripts/bunny-catalogue.mjs`, fix every NO CAPTIONS and NO TITLE flag, then upload all masters course by course. Add `bunnyVideoId` to each entry in the site registry.

**Phase 4: hardening.** Watch for account sharing (see below), add a monthly reconciliation of Stripe subscriptions against grants, add uploads to the release checklist so each new master goes to YouTube and Bunny together.

**Phase 5 (only if needed).** MediaCage Enterprise DRM if leaked copies become a real problem.

## (f) Risks and checks

1. **AI voice licences (must check before charging).**
   - ElevenLabs: its help centre says audio made **during a paid subscription** may be used commercially, and keeps that right after cancelling; audio made on the free plan, or after a subscription ends, may not be used commercially. ([ElevenLabs: can I publish](https://elevenlabs.io/docs/help-center/legal/can-i-publish-the-content-i-generate-on-the-platform), [after subscription ends](https://elevenlabs.io/docs/help-center/account/general/what-happens-to-my-content-after-my-subscription-ends.md)) **Check:** every Biology and Chemistry take was generated while a paid plan was active (the account usage history shows this). **(Not verified:** the exact Terms of Service wording; read it.)
   - Google voice (`gemini-3.8-flash-tts`, approved 3 November for Maths and Year 11): Google's general Text-to-Speech docs allow generated audio in applications and media under the Google Cloud terms, but **Generative AI Preview** products bar production and commercial use unless an exemption names the model and access route. ([GenAI preview terms](https://cloud.google.com/terms/genai-preview-products), read via search summary only) **Not verified:** whether this model is Preview or generally available, and whether it is used through Vertex AI or the Gemini API. This affects the 34 Maths masters now on disk. Check before Maths goes behind the paywall; if unclear, ask Google Cloud support in writing.
2. **AI-generated artwork.** The painted plates come from image tools via Codex. **Not verified:** which image service and plan made each plate, and its commercial terms. Most major services give the user rights in outputs, but copyright protection of purely AI-made images in Australia is uncertain, so others may be able to copy them. This is a low business risk but should be known.
3. **GST.** You must register within 21 days of GST turnover reaching A$75,000 over the current and previous 11 months (counting all business income, tutoring included), or if you expect to. 1,000 members alone is about A$260,000 a year. Prices to consumers must be shown GST inclusive. ([ATO: registering for GST](https://www.ato.gov.au/businesses-and-organisations/gst-excise-and-indirect-taxes/gst/registering-for-gst); page blocked automated reading, figures confirmed from search results quoting it.)
4. **Consumer law and refunds.** Australian Consumer Law guarantees cannot be excluded, so do not say "no refunds". Show the weekly price, that it renews automatically, and how to cancel, before payment; make cancelling as easy as joining. Many payers will be parents of students aged 15 to 18. **Not verified:** the status of the federal "subscription trap" reforms; ask the accountant or a lawyer to review the terms once.
5. **Password sharing.** One login could be shared by a class. Practical limits: log each signed-link request with the user and a coarse location; flag accounts with many simultaneous plays or many devices per day; cap simultaneous plays per account. Do not over-police a A$5 product.
6. **Link leakage.** A signed link works for anyone until it expires, but only on the allowed domains. Keep expiry short, keep the token key only in Supabase secrets, turn off MP4 fallback and Early-Play, and block direct file access. Screen recording cannot be fully stopped by any DRM, and the same videos are free on YouTube, so the paywall protects convenience and extras more than the files themselves.
7. **Captions.** Of the 70 masters on disk, 20 have no caption file the tool can find and 16 have captions from an older repair or release folder that must be checked against the current master version (for example `bio-m6-b05-v2` points at an October repair file). Fix these before Phase 3.
8. **Two video copies.** Every new or replaced master must be uploaded to both YouTube and Bunny. Add it to the release checklist so they do not drift.

## New tooling in this repo (not committed)

- `scripts/bunny-upload.mjs`: uploads one master (create video, PUT the file, add SRT captions as base64 JSON), into a collection named after its course, and writes `out/bunny/<id>.json`. Reads `secrets/bunny.json` only for a real upload and never prints it. Refuses em dashes in the title, refuses to upload a second copy unless told, and reuses the same Bunny video object after a failed upload. API reference: [create video](https://bunny.net/docs/api-reference/stream/manage-videos/create-video.md), [upload video](https://bunny.net/docs/api-reference/stream/manage-videos/upload-video.md), [add caption](https://bunny.net/docs/api-reference/stream/manage-videos/add-caption.md), [create collection](https://bunny.net/docs/api-reference/stream/manage-collections/create-collection.md). Fetch-from-URL also exists ([fetch video](https://bunny.net/docs/api-reference/stream/manage-videos/fetch-video.md)) but would need the masters on a public URL, so direct PUT is used.
- `scripts/bunny-catalogue.mjs`: read-only plan of every latest master, its collection, title and captions, with flags.
- `scripts/lib/bunny-catalogue-lib.mjs`: shared lookups for the two scripts.

Collections in Bunny are folders for tidiness only; they are not public and are not playlists ([collections](https://bunny.net/docs/stream/collections.md)). Bunny accepts `.srt` and `.vtt` captions ([video specification](https://bunny.net/docs/stream/video-specification.md)).
