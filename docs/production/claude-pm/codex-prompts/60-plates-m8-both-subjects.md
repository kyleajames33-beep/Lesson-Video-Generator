# Brief 60: painted plate libraries for Year 12 Module 8 (applying chemical ideas; non-infectious disease)

Read `00-standing-rules.md` first. Style as in brief 27:
- transparent PNG with a real alpha channel;
- ink and watercolour textbook plates matching the existing plates;
- no text, labels or numbers;
- at least 1600 px, 8% margin, reads at 200 px.

Rules from the owner:
- **No people, faces or body figures.** Show objects, apparatus, organs (as textbook anatomy, not people), cells and settings only.
- **Molecules and spectra are coded;** do not paint them.

Use the Module 8 site extracts (`docs/production/claude-pm/site-extracts/chem-m8-*.md`, `bio-m8-*.md`) and, if brief 57 is done, the plate lists in its Module 8 packs. Paint what the site uses. Save as `public/assets/chemistry/m8-<name>-v1.png` and `public/assets/biology/m8-<name>-v1.png`, with matched sets on one canvas.

**Chemistry Module 8 (analysis):**
- Flame test set: a Bunsen flame coloured by Na (yellow), K (lilac), Ca (brick red), Cu (blue-green), Ba (pale green) and Sr (crimson). Matched, one flame per plate.
- Precipitation test tubes for ion identification (check against the existing `m5x-ppt-*` set; only paint missing colours).
- Instruments, as simple textbook views with blank screens:
  - atomic absorption spectrometer (AAS) with a hollow cathode lamp;
  - mass spectrometer;
  - infrared (IR) spectrometer;
  - NMR machine;
  - UV-visible spectrophotometer (reuse the colourimeter style if it suits).
- Water quality: a river sampling bottle, a water testing kit (plain), a sediment core, a sewage treatment pond (simple landscape).
- Organic tests: matched pairs of bromine water, acidified dichromate (orange, then green) and permanganate (purple, then colourless).
- Process-clip pairs (aligned start and end): a flame test (no flame, then coloured flame); acidified dichromate going orange to green.

**Biology Module 8 (non-infectious disease and disorders):**
- Organs as textbook anatomy (organ alone, no body): kidney (with a cut-away nephron view), pancreas, eye (cut-away), ear (cut-away), heart, lungs (healthy and smoker's lungs as a matched pair), skin cross-section.
- Homeostasis: a thermometer, a glucose meter (blank screen), an insulin pen (plain).
- Disease and disorder examples, only those the site uses: a cataract eye pair (healthy, then cloudy lens), skin with a melanoma pair (no face), a cochlear implant (device only), glasses and contact lenses, a hearing aid (device only).
- Epidemiology: a world map outline (no labels), a hospital bed (empty), sun and UV protection objects (hat, sunscreen bottle, plain).
- Process-clip pairs: a lens clouding (cataract forming); a blood glucose meter reading rising, then falling (blank screens with a coloured bar only).

Write provenance to `docs/production/claude-pm/assets/brief60-provenance.json` and QA views to `docs/production/claude-pm/assets/brief60-qa/`. Hand in to `status.md` with one line per plate. If the site uses a different example, paint the site's and note the swap.
