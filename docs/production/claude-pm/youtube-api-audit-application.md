# YouTube API audit application: draft answers

Form: YouTube API Services, Audit and Quota Extension Form
(https://support.google.com/youtube/contact/yt_api_form). The owner submits it, signed in to the
Google account that owns the HSC Learn Cloud project and the HSCScience channel.

Fill these in from Google Cloud Console first:
- Project name: HSC Learn
- Project number: (Cloud Console, project dashboard, "Project number")
- OAuth client ID: (APIs and Services, Credentials, the Desktop app client)

## Suggested answers

**Organisation / developer:** HSCScience (hscscience.com.au), a sole-trader education business in
New South Wales, Australia.

**Contact email:** the owner's account email.

**Which API services:** YouTube Data API v3.

**Is the API client used by anyone other than your organisation?** No. It is an internal tool. Only the
channel owner signs in, and it only acts on our own channel (HSCScience).

**Describe your use case:**
> HSCScience makes free video lessons for the NSW HSC (Year 11 and 12 Mathematics, Chemistry,
> Biology and Physics). We render each lesson locally and use a command-line script to upload
> the finished video to our own channel. The script also uploads the lesson's English caption
> file (SRT), sets the title and description, and adds the video to the right course playlist.
> The script runs only on our own computer, signed in as the channel owner through OAuth (Desktop
> app client). It does not read, collect or store data about any other user or channel, and it
> has no public interface.

**API methods used:** videos.insert, videos.update (privacy status and metadata), videos.list
(our own uploads), captions.insert, playlistItems.insert, playlists.list (mine=true),
channels.list (mine=true).

**Why do you need the audit?** Videos uploaded through an unaudited project are restricted to
private. We need to publish lessons through the script so that the release step is repeatable and
always includes captions and the correct playlist.

**Quota requested:** Our catalogue releases about 10 to 25 videos a day during production
periods. Each release is one upload, one caption track and one playlist insert, plus a few list
calls. Request: 50,000 units per day (about 25 releases a day with room for retries). Check
the per-method costs shown in the form or the Cloud quota page before submitting; the current
default is 10,000 units per day.

**Data storage and privacy:** We store only our own OAuth refresh token, on the local machine,
in a folder excluded from version control. We store each upload's video ID and URL in a local
release record. No end-user data is accessed. Privacy policy: link the site's privacy policy
page on hscscience.com.au if the form requires one.

**Screencast / demo (if asked):** record the terminal running `node scripts/youtube-upload.mjs`
with `--dry-run`, then a real private upload, then the video in YouTube Studio with its captions.

## After approval

- Re-test with one private upload, then change it to public in the script only with the owner's
  standing permission (`YT_PUBLISH_OK=1`).
- Record the approved quota here.
