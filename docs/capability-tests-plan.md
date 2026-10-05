# Voice and animation capability comparisons

## Purpose

User authorised three comparisons on 2026-10-02: newer ElevenLabs voices,
an actual native hand-drawn mechanism, and painted context combined with a
diorama. Preserve the original lessons, media and catalogue components.

## Visual tests

| Test | Reused capability | Teaching point | Review |
| --- | --- | --- | --- |
| Native DNA, 18 s | HdDnaReplication with 12 complementary base pairs | Exposed templates guide pairing; each copy keeps one original strand | Slow fork travel, large stable legend, no added decorative motion |
| Plain molar mass, 18 s | MolarMassScaleDiagram | One mole of each element has the same atom count but a different mass | H 1.008 g, C 12.01 g, O 16.00 g |
| Painted molar mass, 18 s | Same diagram plus the already generated lab plate | Situate balances in a lab without embedding scientific content in the art | Identical numerical content, diagram motion and timing to the plain control |

The native DNA component retains its computed A-T and C-G pairing and
antiparallel template ends. New DNA synthesis runs 5-prime to 3-prime, with
the lagging strand built in backwards-ordered fragments behind the fork.
Large external labels replace its small legend in the camera crop. The
hand-drawn effect is restrained. This is not a complete enzyme animation:
helicase is illustrated, but primers, polymerase, ligase and proofreading
are omitted. Fragments become
connected schematically; do not use this clip alone to teach primer removal
or ligase action. Its movement is slowed for teaching, not realistic speed.

Scientific reference: [DNA replication review](https://pmc.ncbi.nlm.nih.gov/articles/PMC5695668/).

The chemistry particle heaps are schematic. The numerical masses use the
existing lesson's periodic-table values, rounded for school calculations.
This clip makes no claim that carbon-12 defines the modern mole. Exact
quantities and labels remain in code. The painted plate is the same saved
asset described in docs/design-prototypes-plan.md; no new art was generated.

## Voice comparison

Use the existing molar-mass formula recording as the baseline, and its exact
transcript for all new samples. Compare Flash v2.5, Multilingual v2, v3 and v4
with the same configured voice ID. The old recording has no verified model
or voice provenance, so a difference from it cannot be attributed solely to
a model upgrade. Provider-supported controls differ across models and must
be recorded. Save originals and normalize review copies to comparable levels.

Evaluate in this order: correct words and numbers, chemistry pronunciation,
clear distinctions between m/n/M, calm teaching delivery, pacing, then accent
and character. Avoid choosing whichever sample is loudest or most dramatic.
A short winner must still pass a longer lesson excerpt for consistency.

Official models checked on 2026-10-02:
[ElevenLabs model documentation](https://elevenlabs.io/docs/overview/models).
v4 is a quality candidate, Multilingual v2 a long-form consistency candidate,
v3 an expressiveness candidate and Flash a speed/cost control. These are
provider descriptions, not our listening results.

No local API key or voice ID was available when this comparison began. New
samples must be clearly marked pending until actual API generation succeeds.
Do not substitute another provider while calling it an ElevenLabs test.

## Reproduce and review

Visual review completed: all three clips rendered at 1280x720 and 30 fps,
with exactly 540 video frames each. Nine stills cover the early, building
and final states. TypeScript passed. Browser playback and phone-size review
checked the native DNA and painted diorama. Native video controls were removed
from the silent review page because they obscured the lower teaching labels;
external play, pause and beat buttons remain available. New ElevenLabs model
samples are still pending account access. Only baseline sample A is ready.

`npm run prototype:capabilities` renders the visual clips and nine stills.
Append `-- --stills` for layout iteration. `npm run voice:compare -- --prepare`
prepares the baseline and pending comparison page without paid generation.
After configuring ELEVENLABS_API_KEY and ELEVENLABS_VOICE_ID, run
`npm run voice:compare` for four short samples. `npm run prototype:review`
serves the results at `http://127.0.0.1:8778/capability-tests/`.

Output media remains ignored by Git and needs a separate backup. API keys
must stay out of commits and chat. The source recordings are not overwritten.
