# Interim Brief 28w semantic chapter review

Date: 25 October 2026. Reviewer: independent Codex reviewer.

**No semantic chapter or description alignment error found in the 12 requested records.** All 199 chapter labels describe the corresponding measured scene's narration in scene order. The practical step labels do not point to a different step or scene.

## Scope

Read the current `../youtube/wave5-uploads.json` entries for the 12 lesson IDs below, including their descriptions and chapter arrays. For each record, followed its exact `captionFile` directory to the adjacent `lesson.json`, then read every scene's `id` and `voiceover.text` in order. This includes `bio-m6-g02` using `m6g02b/measured`, rather than inferring a folder from the public lesson ID.

The description summaries match the measured lessons' subject matter and teaching sequence. Question and answer labels match the attempt and feedback scenes. The Chemistry practicals' apparatus, measurement, results, interpretation, variables, quality and risk labels match their own scenes. Biology's previously corrected chapter labels match the current measured scene order.

This was a read-only semantic source audit. It did not inspect YouTube, play video or audio, verify live descriptions, test links, recheck syllabus quotations, independently fact-check lesson science, or review biological methods. Mechanical timestamp, caption and media hash checks are owned by the integration owner and are not claimed here. No metadata, narration, scene, board or status file was changed.

## Exact inputs

Metadata: `docs/production/claude-pm/youtube/wave5-uploads.json`

SHA256: `2E92EC812A4C574EA27F53ADEE32546A33E30AFEA90DBB673FE2CE6B25E8C705`

In the table, each folder is relative to `docs/production/claude-pm/lessons/`. The inspected measured source is `<folder>/lesson.json`; the record's caption path is `<folder>/captions.srt`. Hashes identify the measured JSON inspected, not a new verification of the exported media.

| Lesson ID | Folder | Scenes reviewed | Measured lesson JSON SHA256 |
| --- | --- | ---: | --- |
| chem-m6-c15 | `m6c15/measured` | 17 | `E3D6E32DC666F0AAB912960DB75DD2F589D28B9A4C29516148EE5017F5A773F0` |
| bio-m6-b13 | `m6b13/measured` | 14 | `1D6D81D47E555416563284FD49866822AEB3723C01151BF6BB1F2C75575B79A9` |
| chem-m6-c16 | `m6c16/measured` | 15 | `8D4B68C2508C17CE5ACBC40DA7DD8CBEBB52AD4DB6151CE598A3E3D595D43330` |
| bio-m6-b15 | `m6b15/measured` | 15 | `6A1100E003A4243F6E5E8C4C6A9BA0166DC48B4C1B67E86C631E14A01A8E556E` |
| chem-m6-p02 | `m6p02/measured` | 18 | `4293A76CE10514F60FDD56AFB8F1C5679C0285D10F655545209D7B7B4E23B9C8` |
| bio-m6-b16 | `m6b16/measured` | 15 | `B3593144FE1347A87AD1A6C1C6CFA0EA2C98F6D7E051CFF3BDA7C2268474D3C6` |
| chem-m6-p03 | `m6p03/measured` | 19 | `60E531AA381FB013A9F2F6EF7CD2EFAE97F1F4AEF7F9A2440244763B4BECB1FD` |
| bio-m6-b18 | `m6b18/measured` | 15 | `793B15357A58F20C47821D00A28B14FD28811697D4C7881D4997EC0E30D142B6` |
| chem-m6-p04 | `m6p04/measured` | 20 | `3DC2ACB3466C2D1866EC1E4346CBD33DEF8A92AC89492956C7A6415000733861` |
| bio-m6-b19 | `m6b19/measured` | 15 | `245C8316DE828FCA75A12A30BD8D71772C734A8C89934DFEBC1694D8DA4AC185` |
| chem-m6-p05 | `m6p05/measured` | 19 | `94D9DAD05D0E56FF3C63F0BE7F08B04E7A714E885C10EA98F668ACE5550FD068` |
| bio-m6-g02 | `m6g02b/measured` | 17 | `2581A98B9792EF206CE42D021D18E72D8624502364B3C116BB5E7AB217308576` |
