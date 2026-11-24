# Brief 271: Year 11 Maths Standard, strands m, a, t and n: facts first, then maths check, plates and voice

Read `00-standing-rules.md`, `maths-visual-standard.md`, and briefs 251 and 256. Use brief 251's method, file formats, plate method and voicing settings exactly: Google voice `voice_shdbjsxcrr0a`, model `gemini-3.8-flash-tts`. Do not spawn sub-agents. Make no design edits and no commits. Never print, log or commit a key. Voicing runs alone.

## Designs (34), all now at Revision 2

Claude's learning reviews are resolved for every design. The records are `checks/m-s11-m-a-learning-review-resolution.md` and `checks/m-s11-t-n-learning-review-resolution.md`.

- **Managing money:** `docs/production/claude-pm/lessons/math-s11-m01.md` to `m09`.
- **Applications of measurement:** `math-s11-a01` to `a11`, including `a05a` and `a05b`.
- **Time and location:** `math-s11-t01` to `t06`.
- **Networks, paths and trees:** `math-s11-n01` to `n07`.

The strand and playlist order is in `maths-standard-y11-design-status-2026-11-23.md` (section 3). The Data analysis strand (d01 to d19) follows in a later brief, once its review is resolved.

## Step 1: official facts and outside facts

Add these to `checks/maths-standard-y11-official-facts.md`. For each fact, give:
- the value
- the source page's title and URL
- the date you read it
- the exact place it goes (design, scene and chip)

Mark anything you cannot confirm as "not confirmed". Never estimate. Brief 264 part B already covers some of these; reuse those answers rather than repeating the work.

1. **m05:** NSW transfer (stamp) duty rates on a motor vehicle in 2026, from Revenue NSW.
   - Also check the registration, green slip and transfer fee figures the design uses (Service NSW or Transport for NSW).
   - The design shows them as "NSW rates, 2026, example". Confirm every value or give the corrected value.
2. **m02:** whether UK VAT applies to a London hotel room, and at what rate (gov.uk).
3. **m07:** the electricity, water and gas example rates. They are labelled examples, so give one dated NSW source showing a typical range for each.
4. **a11:** whether the trapezoidal rule is printed on the NESA Mathematics Standard 2024 reference sheet.
   - Hold a11 from voicing until root has applied your answer.
5. **a01, a05b, a06:** the measurements the designs use for a standard 400 m running track and for a ramp gradient limit. For the ramp limit, use the Australian standard the design names, or say none is named.
6. **a04 or wherever it appears:** the Sydney to Brisbane distance the design states, and any "Babylon" history line. Confirm each against a reputable source, or mark it "not confirmed".

Root edits the designs from your answers.

## Steps 2 to 4 (per design)

**Step 2: maths check.** Use brief 251's format. Write the checks to `checks/m-s11-<id>-maths-check.md` and the scripts to `work/brief271/`. Run the joins in playlist order. Pay attention to:
- every time-zone offset against its stated month (t03 to t06);
- every network answer: list the paths and spanning trees (n03 to n07).

**Step 3: plates.** Paint every new `ms11-` plate named in these designs' asset briefs, one video early. The electricity meter, water meter and fridge come first; see `maths-standard-y11-kit-and-plate-needs.md`. Report them in `assets/brief271-manifest.json`.

**Step 4: voice.** Voice in playlist order, after the voicing already queued, and write the measured lesson in brief 256's layout. Do not voice m05, m07, a11 or any design with an open step 1 fact until root has applied the fact and the design's revision note says so.

## Hand-in to `status.md`

One block per design.
