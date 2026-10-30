# Briefs 28ab and 116 to 121: continuation

31 October 2026. No design, narration, existing review, measured spectrum or earlier archive was changed.

## YouTube

The browser inventory still fails after the user's Chrome reset, a fresh control session and a direct Chrome connection attempt. Both browser and native-app access are unavailable. The exact errors are recorded in `../youtube/brief28ab-access-2026-10-31.json`. No live YouTube change was applied.

The C02 MP4, design, measured lesson and cumulative caption file still match all four prepared hashes. There is no C02 entry in the local upload record. Before a later upload, check the live channel for an upload made elsewhere, then follow Brief 28ab and its prepared metadata. P02's description correction remains prepared and unapplied by this session.

## IR source check

All seven previously missing compounds' public NIST catalogs can now be read through the web tool. The catalog inventory does not provide a newly verified neat-liquid transmission curve. The accepted measured package remains three of ten compounds.

| Compound | What the viewed catalog provides | Result |
| --- | --- | --- |
| Ethanol | Gas, solvent solution and liquid index 29 | Index 29 records real refractive index, not transmittance. |
| Acetic acid | Gas and solvent solution | No neat-liquid curve shown in the viewed catalog. |
| Acetone | Gas and solvent solution | No neat-liquid curve shown in the viewed catalog. |
| Propan-1-amine | Gas | No liquid curve shown on the viewed page. |
| Propan-1-ol | Gas and solvent solution | No neat-liquid curve shown in the viewed catalog. |
| Propan-2-ol | Gas, solvent solution and liquid index 29 | Index 29 records real refractive index, not transmittance. |
| Ethyl acetate | Gas and solvent solution | No neat-liquid curve shown in the viewed catalog. |

Five catalogs and both apparent liquid records are documented in `brief120-ir-2026-10-31-catalog-audit.md` and `.json`, with links to the official pages, per-index URLs and retained raw-header hashes. Acetone and ethyl acetate are documented separately in `brief120-ir-2026-10-31-root-catalogs.json`. Root inspected their linked Coblentz records: [acetone catalog](https://webbook.nist.gov/cgi/cbook.cgi?ID=C67641&Mask=80), [ethyl acetate catalog](https://webbook.nist.gov/cgi/cbook.cgi?ID=C141786&Mask=80).

The liquid-record pages were freshly inspected, but their raw JCAMP headers came from retained files. Fresh direct downloads still returned HTTP 403, and the web tool could not parse the JCAMP content type. Gas, solution and refractive-index data were not substituted. No new absorption peaks were extracted. This result describes the viewed catalogs, not every possible source. The exact liquid-film IR and solvent-labelled NMR checks remain open.

## Changed author inputs

Nineteen of the 39 design files have changed since the 30 October hand-in. Some now explicitly identify author revisions and unresolved recording holds. Their old and current hashes are listed in `../checks/brief116-121-resume-2026-10-31.json`. The old reviews and integrity report remain evidence for their original inputs. No new error check of these author revisions was commissioned or claimed here.

## Handoff

The additive archive and its member hashes are recorded in `brief116-121-continuation-2026-10-31-checkpoint.json`. Earlier media and hand-in archives are preserved. Continue Brief 28ab once browser access works. Keep the measured-spectrum checks open until appropriate experimental records are verified.
