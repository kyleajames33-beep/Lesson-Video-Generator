# C2 fact check

Checked `lessons/chem-m5-c02.md`, revision 3, against `site-extracts/chem-m5-l03.md` on 11 October 2026. No stills were available.

| # | type | where | problem | fix |
| --- | --- | --- | --- | --- |
| 1 | science | Scene 1: "hot enough that everything inside stays a gas"; scene 4b: "0.12 moles per litre of P C L five and 0.08 of each product" | These concentrations imply a real equilibrium temperature near 161 C, where the PCl5 pressure exceeds its saturation pressure, so this cannot be an all-gas flask. | Recalculate the concentrations and rates for a temperature and pressure that keep the flask entirely gaseous. |

Syllabus and site mismatch: None found. The focus matches the collision theory and reaction rate content in [NSW Chemistry Stage 6 Syllabus (2017), page 50](https://kiama-h.schools.nsw.gov.au/content/dam/doe/sws/schools/k/kiama-h/content/learning-at-our-school/chemistry-stage6-syllabus-pdf.pdf).

Screen: Not checked, no stills available.

Copy: None found in narration, visual text or key notes, including no U+2014 characters.

## Number verification

The illustrative arithmetic works: forward coefficient = 50/0.20 = 250; reverse coefficient = 30/(0.08 x 0.08) = 4687.5. Forward rates are 50, 40, 35, 30. Reverse rates are 0, 7.5, 16.875, 30, which round to 0, 8, 17, 30. The displayed gaps are the differences of the rounded rates.

For the products start, the initial reverse rate is 187.5, correctly described as high. Let x be the PCl5 formed: 250x = 4687.5(0.20 - x)^2 gives the physically allowed root x = 0.12. Both starts conserve 0.20 mol/L phosphorus atoms and 1.00 mol/L chlorine atoms, so they reach the same illustrative mixture at the same volume and temperature.

The implied Kc is 0.08 x 0.08 / 0.12 = 0.05333 mol/L. Calculating ideal-gas equilibrium from the NIST-JANAF Shomate tables for [PCl5](https://webbook.nist.gov/cgi/cbook.cgi?ID=C10026138&Mask=1), [PCl3](https://webbook.nist.gov/cgi/cbook.cgi?ID=C7719122&Mask=1) and [Cl2](https://webbook.nist.gov/cgi/cbook.cgi?ID=C7782505&Mask=1) gives this Kc at approximately 434.36 K. There, PCl5 alone has p = cRT = 4.33 bar. The [NIST PCl5 vapour pressure fit](https://webbook.nist.gov/cgi/formula?ID=C10026138&Mask=4&Units=CAL), valid through 435 K, gives total saturated vapour pressure about 0.965 atm (0.978 bar). This supports finding 1; the numbers work algebraically but not as this real all-gas mixture.

## Colour and asset implications

[CDC NIOSH](https://www.cdc.gov/niosh/npg/npgd0115.html) confirms chlorine is greenish-yellow. No false colour statement was established. A primary source explicitly confirming the colour of intact PCl5 vapour was not located, so that part of the colour check remains unresolved. Solid-colour descriptions were not used to infer vapour colour. The transparent flask pair can remain colourless to yellow-green; finding 1 affects numerical flask conditions, not the intended colour change. No artwork inspected.

Findings: 1 science, 0 syllabus, 0 copy; screen not checked; PCl5 vapour colour verification unresolved.

## Resolution (11 Oct)

- Finding 1 (science, all-gas flask): the hook now states the flask is heated to about 250 degrees Celsius ("heated to about two hundred and fifty degrees Celsius and held there, hot enough that everything inside stays a gas"). At 250 C, 0.20 mol/L PCl5 is about 8.7 bar, below its vapour pressure at that temperature, and the textbook Kc there (about 0.04) is close to the illustrative mixture (0.053), so all the numbers are kept. The "made-up numbers to show the pattern" chip stays. The reasoning is recorded as an author note in the design (Decisions, "Flask temperature").
- Colour (unresolved verification): chlorine stays yellow-green; scene 4b now calls PCl5 vapour "pale and nearly colourless", and no stronger claim is made.
