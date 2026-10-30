# Remaining five NIST IR catalogs: phase and ordinate audit

Inspected 31 October 2026 using the official web tool. This covers only the five catalogs below. Root inspected acetone and ethyl acetate separately. No existing review, data file or archive was changed.

| Compound | Record indices and phases in the viewed catalog | Decision for neat-liquid transmittance |
| --- | --- | --- |
| [Ethanol, C64175](https://webbook.nist.gov/cgi/cbook.cgi?ID=C64175&Mask=80) | Gas: 0, 1, 2 and 4 through 28. Solvent solution: 3. Liquid: 29. | Index 29 is real refractive index, not transmittance. No qualifying curve certified from this catalog. |
| [Acetic acid, C64197](https://webbook.nist.gov/cgi/cbook.cgi?ID=C64197&Mask=80) | Gas: 0 and 1. Solution versus solvent: 2, using carbon tetrachloride/carbon disulfide in different spectral regions. | No neat-liquid record shown in this viewed catalog. The solution spectrum is not a neat-liquid replacement. |
| [Propan-1-amine, C107108](https://webbook.nist.gov/cgi/cbook.cgi?ID=C107108&Mask=80) | The directly displayed record is index 0, explicitly gas phase. | No liquid record shown on this viewed page. |
| [Propan-1-ol, C71238](https://webbook.nist.gov/cgi/cbook.cgi?ID=C71238&Mask=80) | Gas: 0, 1 and 2. Solvent solution: 3. Indices 1 and 2 are saturated gas at different resolutions. | No neat-liquid record shown in this viewed catalog. Link labels 2 and 4 are resolution values, not phases. |
| [Propan-2-ol, C67630](https://webbook.nist.gov/cgi/cbook.cgi?ID=C67630&Mask=80) | Gas: 0, 1, 2 and 4 through 28. Solvent solution: 3. Liquid: 29. | Index 29 is real refractive index, not transmittance. No qualifying curve certified from this catalog. |

The complete per-index record and JCAMP URLs are in `brief120-ir-2026-10-31-catalog-audit.json`. For both alcohols with many numeric links, the five apodization groups explicitly sit under gas phase. Their numeric links select spectral resolution.

The two apparently liquid records were inspected separately: [ethanol index 29](https://webbook.nist.gov/cgi/cbook.cgi?ID=C64175&Index=29&Type=IR-SPEC) and [propan-2-ol index 29](https://webbook.nist.gov/cgi/cbook.cgi?ID=C67630&Index=29&Type=IR-SPEC). Both pages identify PNNL liquid measurements from March 2017. Their previously retained JCAMP headers identify `YUNITS=dispersion index` and `YLABEL=Real refractive index`. Their NIST source identifier is IARPA-IR-L. Header excerpts, original retained-file hashes and the PNNL documentation filenames are preserved in the JSON and `brief120-ir-2026-10-31-rawheaders/`.

Those raw headers were inspected from the retained files, not freshly downloaded today. The web tool could read the catalogs and liquid-record pages, but rejected the ethanol JCAMP response as an unsupported chemical/x-jcamp-dx content type. One small direct HTTP attempt per liquid record then returned 403; neither was retried. The gas and solution ordinates were not inspected because their phases already disqualify them from the requested neat-liquid set.

Result: zero newly certified neat-liquid transmittance datasets or extracted absorption peaks. The prior accepted count remains 3 of 10. This does not claim that suitable spectra are absent from every source, or that all NIST content is inaccessible. No SDBS automation, phase substitution or conversion of dispersion extrema into transmission peaks was used.
