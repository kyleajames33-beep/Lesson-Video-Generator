# Maths S12 A07: Where do linear and exponential models stop matching reality? The city model pushed 200 years ahead, inside and outside the data, the assumption behind the model, a car's value that never reaches zero, and (Standard 1) strengths and a fare cap (design)

Status: Revision 1 (18 Nov 2026): first design, written to the Year 12 Maths standard (`../maths-visual-standard.md`), the accepted Year 11 Advanced designs (`math-a11-e08.md`, `w14.md`, `g01.md`), the w-strand learning-review resolutions (`../checks/m-a11-w01-w31-learning-review-resolution.md`) and root's rulings on the Standard outline (`../checks/root-rulings-maths-standard-outline.md`, rulings 1 to 12). Opens on a06's final frame as specified in `math-s12-a06.md` (Decisions, "Handoff", and scene 12; a06 Revision 1). Not voiced. Next: student learning review and Codex maths check, then voicing on the Google voice and a build on the studio kit to grade A.

Narration 5,696 characters by script (see "Narration length estimate"), 13 scene headings, about 518 s with holds (key notes fixed at 45 s). Nothing recorded; human listening pending.

Scope: seventh video of Year 12 Mathematics Standard (2024), outline order 7, Algebraic relationships. **Standard 1 and Standard 2.** Standard 2 needs the exponential limitations (`ci5c87181e`); Standard 1 also needs the strengths of both models and the limitations of a linear model (`cid72ff748`), taught in one clearly labelled segment (scene 6) that also revises Year 11 for Standard 2. Pre-design pack: `../pre-design/maths-standard/math-s12-a07.md`. Site lesson (read through the pack's quotations, read only): `algebraic-relationships/lesson03.sa.html` (Exponential Relationships, SHA256 `f8c86393c1deaadd77ae8585d6c8d8473dad655d6c287e794bdf184991d21b60`): card 07's limitations list (growth cannot go on for ever; decay never reaches zero; a constant factor assumed; extrapolating too far gives nonsense); `we-2`'s city (P = 250 000 × 1.03^t, about 452,000 after 20 years) and its part (d) ("The model assumes a constant 3% growth rate every year. In reality, population growth depends on birth rates, migration, economic factors ..."; tip: "State what assumption the model makes and why that assumption may fail"); `we-3` (c)'s car (V = 24 000 × 0.82^t never equals zero). All with their exact numbers. Not used: the bacteria and bushfire contexts (science or distressing; root ruling 11); SA 3's mark note (MS-09); the "scraped" wording (MS-07). The Standard 1 strengths and linear limitations have no Year 12 site content (route `siteGap`; root ruling 3 for the missing part). Route entry: `math-s12-a07` in `../../programme/maths-standard-route-inputs-1.json`. Visual system: maths studio kit; the reused painted skyline (a06's), red hatchback, travel card and reader, and sneakers; the course-neutral population engine with lesson labels; every graph, table and card coded.

Owner rules applied: 2024 syllabus only, cited by codename and exact wording; painted plates for real objects (none new here), code for graphs; no people, hands or faces (the city is a skyline; nobody is drawn); one main learner question; one reasoning stage at a time; every step said in words before symbols; g01 worked examples; "Pause here to answer." then a 10 s countdown with the full worded question on screen; brief feedback with one crossed slip; five key notes with a framed card; everyday anchors (a city, a car, travel, shopping, work; root ruling 6), no science; Australian spelling; no em dashes; decimals spoken "zero point"; conversational narration. Root ruling 5: the fare and overtime figures are labelled examples, not network or award rates.

Syllabus content points (Mathematics Standard 11-12 (2024), Year 12, Algebraic relationships), quoted from `../../programme/maths-standard-route-inputs-1.json`:

- `ci5c87181e` (Standard 2, Exponential relationships): "Explain the limitations of exponential models in practical contexts"
- `cid72ff748` (Standard 1, Graphs of practical situations): "Identify the strengths and limitations of linear and exponential models in given practical contexts"

Sources: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/faf5e47f4a (Standard 2) and https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba1/fa493dfdfb (Standard 1)

**Boundary:** starts from a06's final frame exactly (a06 scene 12: the skyline strip `ma12-city-skyline-strip-v1.png` across the top; the model chip "P = 250 000 × 1.03ᵗ" (250 000 violet, 1.03 amber) at the top left; axes t 0 to 20 years across the left 65 per cent ("t (years)") and P 0 to 500,000 ("P (people)", gridlines every 100,000); the teal curve from (0, 250 000) (ringed violet, "k = 250 000: today") to (20, 451 528) (ringed green, "≈ 452 000 after 20 years"); a broken-axis mark "//" right of t = 20 with a tick "200" near the right edge; a dashed teal arrow leaving the top of the frame; an amber "?" ring at t = 200; chips "200 years: 250 000 × 1.03²⁰⁰ = ?", "Next: when do models stop matching reality?" and "?"). Standard 1 students arrive from a05 and have not seen this frame, so the first sentence states the model in full (a06's open decision 1). Recalls a06 (y = k·a^x, the city and the car) and a05 (exponential tables and graphs) and Year 11's interpolation, extrapolation and linear limitations (math-s11-l04, `ci4777471a`, `ci1b3cf962`; math-s11-l03, `cib2d6c0df`) in a phrase or grey chip each. Teaches: a model can be good inside its data and absurd far outside it (extrapolation); an exponential model assumes the same percentage change every step and has no upper limit, so growth that really levels off breaks it; a decay model never reaches zero though real values do; a limitation names the model's assumption and says why it fails in this context. Standard 1 segment: a strength of a linear model (simple, constant rate, easy to predict inside the data) and of an exponential model (it captures growth that speeds up or decay that slows down); a linear model's limitations (a cap or a new rate; values below zero). Stops at judging models. Not taught: graphing a story (a08); building logistic or other models (only an illustrative curve is drawn).

## Decisions

- **Anchor: a06's city, pushed 200 years ahead (reused painted skyline, live).** a06 built P = 250 000 × 1.03^t (site `we-2`) and ended on "200 years: ?". This video reveals it: about 92.3 million people, more than three times Australia's whole population today, in one city. The same model gave a believable 452,000 after 20 years, so the absurd answer is caused by how far out the prediction goes and by what the model assumes, not by a wrong calculation. The skyline `maths/ma12-city-skyline-strip-v1.png` (viewed 18 Nov: a harbourside town skyline with low-rise and mid-rise buildings, trees and a jetty, true alpha). A city's population is a neutral context, not science (a06's pack and design). Site `we-2` (d)'s own limitation (a constant 3% when real growth depends on births, migration and the economy) is the worked limitation, in plain words.
- **Decay: a06's car (site `we-3`, reused plate).** V = 24 000 × 0.82^t: about $453 after 20 years, about $62 after 30, and never $0; a real old car is eventually worth nothing, or only its parts. The red hatchback `maths/ma12-used-hatchback-v1.png` (viewed 18 Nov: a small red hatchback, true alpha). Root ruling 12 allowed a06 one sentence of depreciation preview; here the car is a decay model's limitation, and depreciation itself stays with i10.
- **Standard 1 segment (scene 6): a transport card and a fare cap (reused plates).** The travel card `maths/ma11-travel-card-v1.png` (viewed 18 Nov: a plain teal card with a contactless mark, true alpha) and the reader `maths/ma11-travel-card-reader-v1.png` (a yellow card reader on a post). An example card: $4 a trip with a daily cap of $16 (labelled "example fares, not a real network's"). The linear model C = 4n is a strength (simple, steady, exact) until the cap: at 6 trips the model says $24, but the card charges $16. The segment opens with a header chip "Standard 1: strengths, and linear models (Standard 2: a Year 11 refresher)".
- **Simulations (standard item 3).**
  1. **Model against reality** (scene 2; `runLogistic` with `SeriesGraph` from `src/explainer/sims/`, lesson labels only): the model P = 250 000 × 1.03^t (teal) and an illustrative levelling curve (ink, dotted, "how real growth tends to go (illustration)", same start and early growth, levelling towards 2 million) draw together year by year over 100 years; they agree for about the first 10 to 20 years and then split; the "near the data" region shades pale green-grey, the far region greys; a gap readout grows.
  2. **Population counter** (scene 1): a coded counter beside the skyline spins from 250,000 to 451,528 (20 years), then on through millions to 92,338,954 (200 years) with a comparison bar "everyone in Australia today, about 27.6 million".
  3. **Decay hug** (scene 5; `FunctionRider`, `LiveReadoutBoard`): a rider on V = 24 000 × 0.82^t with a value readout ($19,680, $453, $62, $8.57) never reaching a red "$0" marker on the axis, while the car plate fades towards a grey "scrapped" tag.
  4. **Fare taps** (scene 6): taps on the reader add $4 each to a running total; the model line C = 4n keeps rising past the cap, while the real total goes flat at $16.
- **Colour roles (from a06, kept).** The starting value k **violet**; the multiplier a **amber**; growth curves **teal**; decay curves **blue**; time (the input) labelled in ink on the axis; the illustrative real curve ink, dotted, labelled "(illustration)"; the "near the data" region pale green-grey, the far region grey; the limitation card's "assumption" chip **amber** and "why it fails here" chip **violet** (the a-strand pattern, reused in a11b and a13); answer **green**; mistake **red**, crossed slips only.
- **Large type, handwritten voice.** As e08. Hand tags: "believable", "absurd", "near the data", "far outside", "same 3%, for ever?", "no ceiling", "levels off", "assumption", "why it fails here", "never $0", "really $0", "simple and steady", "speeds up", "slows down", "the cap", "below zero?", "rate changes".
- **Stage changes (standard item 2).** a06's frame, then the counter and the comparison bar (1); model against reality, near and far from the data (2); the limitation card (3); the g01 board on the city's limitation (4); the car's decay (5); the Standard 1 segment with the fare cap (6); framed card (7); question cards (8 to 11); the fare-cap frame for a08 (12); key notes (13).
- **Worked examples (g01 layout).** 4: the city (site `we-2` (d) in plain words): assumption "3% growth every year, for ever, with no upper limit"; why it fails "a city's growth depends on housing, jobs, births and people moving, which change, and it can't grow for ever"; data "200 years is far outside the recent numbers the model came from"; crossed "the model might be wrong". 5: site `we-3`: V never 0; limitation in the card. 6: the fare: C = 4n, its strength and its limitation; crossed "6 trips cost $24".
- **Memory aid.** Framed card: "A limitation = the assumption + why it fails here." Key line: "Good near the data. Risky far outside it."
- **Visual surprise.** The counter: from a believable 451,528 at 20 years to 92 million at 200 years, with Australia's whole population drawn as a much shorter bar beside it.
- **Site notes (pack section 8; `../site-corrections-maths-standard.md` MS-07, MS-09).** `we-2` and `we-3` numbers unchanged; the 200-year value (pack section 3: about 92 million) is an original illustration. The bacteria and bushfire contexts are not used (root ruling 11). MS-07 and MS-09 are not used.
- **Plain meanings at first use.** Model ("an equation that describes a real situation, so we can predict"); limitation ("a way the model fails to match reality"); assumption ("something the model takes for granted"); interpolation, extrapolation ("predicting inside the data", "predicting outside it", recalled from Year 11); strength ("something the model does well").
- **Attempts (pack questions).** A1 (pack question 1, parts (b) and (c), Standard 2 style): the online sneaker store N = 200 × 1.1^t: week 156 gives about 573 million orders a week; not reliable because the model assumes 10% growth every week for ever, while customers, stock, staff and delivery limit orders, and week 156 is far outside the data; crossed "the model might not be accurate". The sneakers `maths/ma11-sneakers-v1.png` (viewed 18 Nov: white sneakers with teal laces and gum soles) as the card's picture. A2 (pack question 2, parts (a) and (c), Standard 1 style, also useful for Standard 2): P = 30h; (a) $600 for 20 hours; (b) with time-and-a-half above 38 hours, 45 hours pays $1,455, the model says $1,350; limitation: one rate for every hour; crossed "$1,350". Pack question 2 (b) (a strength) is taught in scene 6, not asked.
- **Mistake scene:** none separate. A limitation with no assumption (3 and 4 crossed, A1 crossed); a model wrong everywhere because it is wrong far away (2, said: "near the data it works"); "a decay model reaches zero" (5); a line running past a cap or below zero (6 crossed, A2 crossed).
- **Cause chain taught, in order:** (1) a model is built from recent data, so predictions near that data are tested and predictions far away are not (2); (2) an exponential model multiplies by the same factor every step, so it has no ceiling (2, 3); (3) real growth meets limits (housing, jobs, land), and its rate changes, so it levels off and the model overshoots (2, 3, 4); (4) a decay factor below 1 shrinks a value but never to zero, while real values do reach zero (5); (5) a linear model adds the same amount every step, a strength while the rate holds and a limitation when a cap, a new rate or zero arrives (6); (6) so a good limitation names the assumption and why it fails here (3, 4, 7).
- **Entry knowledge (route):** a06 (y = k·a^x models and predictions; the city and the car; Standard 2) or a05 (exponential tables and graphs; Standard 1); math-s11-l04 (`ci4777471a`, `ci1b3cf962`); math-s11-l03 (`cib2d6c0df`).
- **What later videos rely on.** a08 opens on this video's fare-cap frame ("a model that goes flat at a cap"). a11b and a13 recall "a limitation names the assumption, then why it fails here" with the same amber and violet card.
- **Handoff (to math-s12-a08 for Standard 1; Standard 2 continues to a09, with a08 optional).** Scene 12: the travel card and reader plates; the coded fare graph (trips 0 to 6 across, total $ 0 to 28 up) rising $4 a trip to the $16 cap at 4 trips, then flat to 6 trips; the flat piece ringed; chips "the total stops rising: a flat piece", "Next: a graph that tells a story" and "?"; a small grey chip "Standard 2: this next video is optional; then 'Parabolas: the vertex and axis'". This is a08's opening frame (`math-s12-a08.md`, Boundary). The narration tells Standard 2 students that a08 is optional and quadratics follow it.
- **Legacy logic ported:** none.
- **Author notes (not learner copy):**
  (a) City: 250 000 × 1.03^20 = 451,527.8 (about 452,000; a06); 250 000 × 1.03^200 = 92,338,954 (about 92.3 million); Australia about 27.6 million (ABS estimate, 2025), ratio about 3.3 ("more than three times").
  (b) Illustrative curve: logistic K = 2,000,000, P(0) = 250,000, r = ln 1.03; years 0, 10, 20, 50, 80, 100: 250,000, 322,131, 410,195, 770,194, 1,206,389, 1,466,029; the model: 250,000, 335,979, 451,528, 1,095,977, 2,660,223, 4,804,658. Never spoken or labelled as data.
  (c) `we-3`: 24 000 × 0.82^t: t = 1: 19,680; 20: 453.41; 30: 62.32; 40: 8.57; positive for every t.
  (d) Fare: C = 4n for n ≤ 4; cap 16; at 6 trips model 24, actual 16. Example fares only.
  (e) A1: 200 × 1.1^156 = 5.73 × 10^8 (about 573 million).
  (f) A2: 30 × 20 = 600; 38 × 30 + 7 × 45 = 1,140 + 315 = 1,455; 30 × 45 = 1,350; gap 105. Overtime rules vary by award; the question states its own rule.
  (g) Pronunciations: "two hundred and fifty thousand, times one point zero three to the power of t" (a06's reading); "ninety-two million"; "twenty-four thousand, times zero point eight two to the t".
  (h) Windows: scene 1 keeps a06's axes, then the counter replaces them; scene 2 years 0 to 100, P 0 to 5,000,000; car years 0 to 40, $0 to $25,000; fares trips 0 to 6, $0 to $28.

Main question: *The city model says about 452,000 people after 20 years, and about 92 million after 200. Where do linear and exponential models stop matching reality?*
Entry knowledge (a06 or a05; math-s11-l04, l03): exponential models and predictions; interpolation, extrapolation and linear limitations from Year 11.
Stops after: a model's limitations in context (assumption plus why it fails), extrapolation risk, growth without limit, decay that never reaches zero; Standard 1: strengths of both models and a linear model's limitations. No story graphs.
Handoff: a08 (Standard 1; optional for Standard 2): "a graph that goes flat at a cap tells part of a story".

## Script and shots

Cue words in **bold** trigger the visual change. Exact frames are set from the recording's word timings. Colour roles (fixed, from a06): k violet; a amber; growth teal; decay blue; illustration ink, dotted; near-data region pale green-grey, far region grey; assumption amber, why-it-fails violet; answer green; mistake red. Header strip "MATHEMATICS STANDARD · ALGEBRAIC RELATIONSHIPS". Scene headings in the hand font, 44 px. Every stage's main visual is solid from the stage's first frame.

### 1. hook: two hundred years
> Here's a city of two hundred and fifty thousand people, growing by three per cent a year. Its model is P equals two hundred and fifty thousand, times one point zero three to the power of t. After twenty years, it predicts about four hundred and fifty-two thousand people. That sounds **believable**. Now push the same model two hundred years ahead. It predicts about ninety-two million **people**. That's more than three times everyone living in Australia today, in one city. The maths is right, but the answer is absurd. So where do linear and exponential models stop matching **reality**?

Visual: opens on a06's final frame exactly (the skyline strip; the model chip "P = 250 000 × 1.03ᵗ" with 250 000 violet and 1.03 amber; the axes t 0 to 20 and P 0 to 500,000; the teal curve from (0, 250 000) ringed violet "k = 250 000: today" to (20, 451 528) ringed green "≈ 452 000 after 20 years"; the "//" and "200" tick; the dashed arrow; the amber "?" at t = 200; chips "200 years: 250 000 × 1.03²⁰⁰ = ?", "Next: when do models stop matching reality?" and "?"). On the first sentence the "Next" chip fades and the model chip pulses (for Standard 1 viewers arriving from a05, the whole model is said and shown). On "believable" the green ring at (20, 451 528) pulses, hand tag "believable". On "two hundred years ahead" the axes slide left and shrink to a 30 px strip; the population counter (simulation 2, 52 px, teal) appears beside the skyline at "451,528" and spins on, its digits multiplying; on "people" it lands at "92,338,954 after 200 years", and the amber "?" ring at t = 200 fills with "≈ 92 300 000" (join 9's recommendation) before the axes strip settles. A bar comparison draws below the skyline: a long teal bar "the model: 92 million" beside a much shorter grey bar "everyone in Australia today: about 27.6 million"; hand tag "absurd". On "reality" heading "Limitations of models", and the question chip "Right maths, absurd answer. Why?" moves to the top right.

### 2. near the data, and far outside it
> Here's what went wrong. The model was built from the city's recent numbers, and close to those, it works well. A prediction inside the data, or close to it, is fairly safe. In Year 11 that was called interpolation. Two hundred years is far outside the data. Predicting there is extrapolation, and the further out you go, the riskier it gets. Watch the model against the way real growth tends to go. At first, the two curves agree. But a real city's growth slows down as it fills up, so its curve starts to level **off**. The model never levels off. It keeps multiplying by one point zero three, with no ceiling, so the gap grows every **year**.

Visual: clear change to the model-against-reality simulation (simulation 1): a large plot (1,400 × 720 px, years 0 to 100 across, "P (people)" 0 to 5,000,000 up), the skyline as a 1,000 px strip above. Years 0 to 10 shade pale green-grey with the label "near the city's recent numbers"; hand tag "near the data", grey chip "Year 11: interpolation". On "far outside the data" an arrow runs off the right edge with "200 years →", hand tag "far outside", grey chip "Year 11: extrapolation". On "Watch the model" both curves draw year by year: the model (teal) and the illustrative curve (ink, dotted, "how real growth tends to go (illustration)"); they overlap closely for the first 10 to 20 years. On "off" the dotted curve bends and levels towards 2 million, hand tag "levels off". On "year" (last bold) the teal curve climbs past 4 million while a gap readout between them grows (52 px), the region past year 30 greying with "model fails here", hand tag "no ceiling".

### 3. what the model assumes
> So what exactly is the problem? Every model takes something for granted. That's called an assumption. This model assumes the city grows by the same three per cent every single year, for **ever**. That's reasonable for a few years. But a city's growth depends on housing, jobs, births, and people moving in or out, and all of those change. A city also runs out of room. So the growth rate changes, and the assumption **fails**. That's what a limitation is. It names the assumption, then says why it fails in this situation. Just saying the model might be wrong isn't **enough**.

Visual: clear change: a limitation card (1,300 × 520 px, 44 px text) at the centre with two slots, "assumption" (amber) and "why it fails here" (violet), the city's plot small above it and the model chip with "1.03" amber. On "ever" the amber slot fills: "the same 3% growth every year, for ever", the "1.03" pulsing amber, hand tag "same 3%, for ever?". On "fails" the violet slot fills: "housing, jobs, births and people moving change; a city runs out of room", hand tag "why it fails here". On "enough" a red slip "the model might be wrong" writes and is crossed, caption "name the assumption".

### 4. worked example: writing the limitation
> Here's how that looks as an exam answer. The question says, explain why the prediction for two hundred years is not reliable. Step one, name the assumption. The model assumes the population grows by three per cent every year, with no upper **limit**. Step two, say why that fails here. A city's growth depends on housing, jobs, births and migration, which change over time, so the real growth rate won't stay at three per cent. Step three, if it helps, mention the data. Two hundred years is far outside the recent numbers the model was built **from**. That's a complete answer, specific to this city.

Visual: clear change to the g01 board. Task strip (44 px): "P = 250 000 × 1.03ᵗ models a city's population. Explain why the prediction for 200 years is not reliable." Givens card (44 px): "P = 250 000 × 1.03ᵗ" (250 000 violet, 1.03 amber); "t = 200: about 92 million". Rows (current 52 px, earlier 32 px), each with its role chip: on "limit" "Assumption: 3% growth every year, with no upper limit." (amber chip); "Why it fails: housing, jobs, births and migration change, so the rate won't stay at 3%." (violet chip; site `we-2` (d)); on "from" "Data: 200 years is far outside the numbers the model came from." (grey chip "extrapolation"). Framed answer (green) around all three rows, hand tag "specific to this city".

### 5. decay that never reaches zero
> Decay models have a limitation too. Remember the car from last time, bought for twenty-four thousand dollars, and losing eighteen per cent of its value each year. Its model is twenty-four thousand, times zero point eight two to the power of t. After twenty years, that's about four hundred and fifty-three dollars. After thirty, about sixty-two dollars. Multiplying by zero point eight two always leaves something, so the model never reaches zero, **ever**. But a real car does reach zero. Eventually it's scrapped, or it's only worth its **parts**. So the model's assumption, the same eighteen per cent drop for ever, fails for a very old car.

Visual: clear change. The red hatchback `maths/ma12-used-hatchback-v1.png` (420 px) at the top left with a value readout (52 px, blue) "$24,000". The plot (1,250 × 600 px, years 0 to 40 across, value $0 to $25,000 up) with "V = 24 000 × 0.82ᵗ" (24 000 violet, 0.82 amber; site `we-3`), grey chip "a06: the car". The decay rider (simulation 3) runs along the blue curve: "$19,680" at 1 year, "$453" at 20, "$62" at 30; the curve hugs the axis, a red "$0" marker on the axis never reached. On "ever" a zoomed inset of the tail (years 30 to 40, $0 to $100) shows "$62 ... $8.57" still above the "$0" marker, hand tag "never $0". On "parts" the car plate fades towards grey with a coded tag "scrapped: $0", hand tag "really $0". The limitation card returns small: amber "the same 18% drop every year, for ever"; violet "a very old car is scrapped, worth $0".

### 6. Standard 1: strengths, and a linear model
> If you're doing Standard 1, you also need strengths, and linear models. For Standard 2, this is a Year 11 refresher. A linear model adds the same amount each step. Here's an example transport card, four dollars a trip, so the cost is four times the number of trips. That's its strength. It's simple, the rate is steady, and inside the data it's exact. An exponential model's strength is different. It captures growth that speeds up, or decay that slows **down**. Now a limitation. This card has a daily cap of sixteen dollars, so after four trips, the total stops rising. The line keeps going, so at six trips the model says twenty-four dollars, but the card charges sixteen. Lines can also run below zero. Here, the model assumes one rate for every trip, and the cap changes **that**.

Visual: clear change, header chip at the top (44 px): "Standard 1: strengths, and linear models (Standard 2: a Year 11 refresher)". The travel card `maths/ma11-travel-card-v1.png` (420 px) and the reader `maths/ma11-travel-card-reader-v1.png` (420 px tall) at the left, with a grey tag "example fares, not a real network's". The plot at the right (1,000 × 600 px, trips 0 to 6 across, total $0 to $28 up). The fare taps (simulation 4): each tap adds "+$4" and a point; the model line "C = 4n" draws in ink. A strengths card (44 px) writes: "linear: simple, steady rate, exact inside the data", hand tag "simple and steady"; on "down" a second row "exponential: growth that speeds up, decay that slows down" with two tiny curves (teal up, blue down), hand tags "speeds up" and "slows down". On "daily cap" a dashed grey line at $16; taps 5 and 6 add nothing to the real total, which draws flat (teal) from 4 trips, while the model line keeps rising to (6, 24), hand tag "the cap". A red slip "6 trips cost $24" writes and is crossed, caption "the cap: $16". On "below zero" a tiny grey sketch of a falling line crossing the axis, hand tag "below zero?". On "that" the limitation card fills: amber "one rate ($4) for every trip", violet "the daily cap stops the total at $16", hand tag "rate changes".

### 7. memory aid
> Here's the summary. A limitation is the assumption, plus why it fails here. And a model is good near its data, but risky far outside **it**.

Visual: stage change to the framed `MemoryAidCard`. Left slot: the city's two curves splitting, the near-data region shaded. Main line, hand font 60 px: "A limitation = the assumption + why it fails here." with "the assumption" amber and "why it fails here" violet. On "it" the key line, 40 px: "Good near the data. Risky far outside it." Hold about 2 s.

### 8. attempt 1 (countdown, 10 seconds)
> Your turn. An online sneaker store had two hundred orders in its first week. The owner models the weekly orders as two hundred, times one point one to the power of t. Use the model to predict the orders in week one hundred and fifty-six, three years later. Then explain why that prediction isn't reliable. Pause here to answer.

Visual: `QuestionCard`, 40 px, worded as printed: "An online sneaker store had 200 orders in its first week. The owner models the weekly orders N after t weeks with N = 200 × 1.1ᵗ. (a) Use the model to predict the orders in week 156 (three years). (b) Explain why the prediction in (a) is not reliable." The full question stays on screen. Picture slot: the sneakers `maths/ma11-sneakers-v1.png` (300 px) with a blank coded order counter. Countdown ring shown full from "Pause here to answer.", then 10 s. Nothing answer-bearing.

### 9. feedback 1 (brief)
> The model gives about five hundred and seventy-three million orders, in one **week**. It assumes the orders grow by ten per cent every week, for ever. But a store only has so many customers, and only so much stock and staff, so growth levels off. And week one hundred and fifty-six is far outside the data. Saying the model might not be accurate is the slip.

Visual: the card shrinks to the top (30 px). On "week" row (44 px) "N = 200 × 1.1¹⁵⁶ ≈ 573,000,000", the counter spinning to it. The limitation card writes: amber "10% more every week, for ever"; violet "only so many customers; stock and staff limit orders"; grey "week 156: far outside the data". Framed answer (green) around the card. On "the slip" (spoken) a red slip "the model might not be accurate" writes and is crossed, caption "name the assumption". Hold about 1 s.

### 10. attempt 2 (countdown, 10 seconds)
> Last one. A casual worker is paid thirty dollars an hour, so the model P equals thirty h gives the pay for h hours worked in a week. Find the pay for twenty hours. Hours over thirty-eight in a week are paid at time and a half. Find the actual pay for forty-five hours, and explain one limitation of the model. Pause here to answer.

Visual: `QuestionCard`, 40 px: "A casual worker is paid $30 an hour, so the model P = 30h gives the pay P for h hours worked in a week. (a) Use the model to find the pay for 20 hours. (b) Hours over 38 in a week are paid at time-and-a-half. Find the actual pay for 45 hours and explain one limitation of the model." Picture slot: empty axes "hours" and "pay ($)". Countdown ring shown full from "Pause here to answer.", then 10 s.

### 11. feedback 2 (brief)
> Twenty hours is six hundred **dollars**. For forty-five hours, thirty-eight hours at thirty dollars is eleven forty, and seven hours at forty-five dollars is three fifteen, so the actual pay is fourteen fifty-**five**. The model assumes one rate for every hour, but overtime raises the rate. Giving thirteen fifty, from the model, is the slip.

Visual: the card shrinks to the top. On "dollars" row (44 px) "(a) P = 30 × 20 = $600". Rows: "38 × $30 = $1,140"; "7 × $45 = $315"; on "five" "(b) $1,140 + $315 = $1,455" (framed, green). On the axes, the model line P = 30h and the real pay, which steepens after 38 hours (teal), the gap at 45 hours bracketed "$105". The limitation card: amber "one rate for every hour", violet "overtime raises the rate above 38 hours". On "the slip" (spoken) a red slip "$1,350" writes and is crossed, caption "that's the model, not the actual pay". Hold about 1 s.

### 12. handoff
> So every model has limits, and a good answer names the assumption and why it fails. Remember the fare cap? The total rose trip by trip, then went flat. That flat piece tells part of a story. If you're doing Standard 1, next we sketch graphs that tell a whole story. If you're doing Standard 2, that video is optional, and quadratics come straight **after**.

Visual: the memory line shows small at the top (30 px), then fades on "Remember the fare cap". Board clear to the fare-cap frame: the travel card and reader plates at the left; the coded fare graph at the right (trips 0 to 6 across, total $0 to $28 up) rising $4 a trip to $16 at 4 trips, then flat to 6 trips. On "went flat" the flat piece rings, chip "the total stops rising: a flat piece". On "after" chips "Next: a graph that tells a story" and "?", and a small grey chip "Standard 2: this next video is optional; then 'Parabolas: the vertex and axis'" (the strand's branch-chip convention, a01 to a06 decisions file, open question 2). Hold about 2 s. This is a08's opening frame; scene 13 returns to it silently after the notes.

### 13. key notes (quiet, 45 seconds)
Heading on screen: "Key notes: what to write in your book" (hand font, 44 px). Bullets 38 to 40 px in the left 58 to 60 per cent, colour roles kept, each one line.
> Here are the key notes. Pause the video if you need more time to copy them.

- A limitation: name the assumption, then why it fails here.
- Near the data: fairly safe. Far outside: risky (extrapolation).
- Exponential growth assumes the same % for ever: real growth levels off.
- Exponential decay never reaches 0: real values can.
- Linear: simple and steady, until a cap, a new rate or zero.

Memory aid (framed card, right side, as in scene 7): *A limitation = the assumption + why it fails here.* The notes scene is 1,350 frames (45 s).

Visual (end of the hold, silent): cross-fade (1 s) back to scene 12's frame exactly. This is the final frame and a08's opening frame.

## Teaching checks

- **Does it explain causes?** Why 200 years is absurd: it is far outside the data and the model has no ceiling (2). Why real growth levels off: housing, jobs, births, migration and room (3). Why decay never reaches zero: multiplying by 0.82 always leaves something (5). Why the fare model fails: the cap changes the rate (6). Why a limitation needs an assumption: the model fails exactly where its assumption fails (3, 4).
- **Misconceptions addressed:** a general "it might be wrong" (3 and A1 crossed); a model wrong everywhere because it is wrong far away (2); decay reaching zero (5); a line running past a cap (6 crossed); the model's pay taken as the actual pay (A2 crossed).
- **Visual standard, item by item:** 1 the city skyline and its model from the first frame (a06's), back in 2 to 4; the car in 5; the card and reader in 6 and 12; 2 a new stage every 40 to 65 s; 3 the model-against-reality sim, the counter, the decay rider, the fare taps; 4 fixed roles (a06's); 5 large type; 6 hand tags; 7 g01 board in 4 with a framed answer and crossed slip; 8 framed card and five bullets; 9 the counter reaching 92 million beside Australia's population bar.
- **One idea at a time:** extrapolation (2), the assumption (3), the written answer (4), decay (5), Standard 1's strengths and linear limits (6).
- **Response opportunity:** two unseen tasks with every demand visible; 10 s each; feedback about 28 s and 26 s (speech plus hold).
- **Avoided double teaching:** a06's model-building is recalled in a phrase; Year 11's interpolation, extrapolation and linear limitations are grey chips.
- **Syllabus coverage:** `ci5c87181e` (1 to 5, A1; key notes 1 to 4); `cid72ff748` (2 to 6, A1, A2; key notes 1 to 5; strengths in 6).
- **Out of scope by design:** story graphs (a08); building non-exponential models.

## Practice questions and model answers

**Attempt 1 (scene 8; pack question 1 (b) and (c), original, HSC style, 3 marks suggested, not an official marking scheme).** "An online sneaker store had 200 orders in its first week. The owner models the weekly orders N after t weeks with N = 200 × 1.1ᵗ. (a) Use the model to predict the orders in week 156 (three years). (b) Explain why the prediction in (a) is not reliable."
Model answer: (a) 200 × 1.1¹⁵⁶ ≈ 573 million orders a week. (b) The model assumes the orders keep growing by 10% every week for ever; in reality there are only so many customers, and stock, staff and delivery limit growth, so orders would level off. Week 156 is far outside the weeks the model was based on. Classic mistake (crossed): "the model might not be accurate".

**Attempt 2 (scene 10; pack question 2 (a) and (c), original, Standard 1 style, also useful for Standard 2, 3 marks suggested).** "A casual worker is paid $30 an hour, so the model P = 30h gives the pay P for h hours worked in a week. (a) Use the model to find the pay for 20 hours. (b) Hours over 38 in a week are paid at time-and-a-half. Find the actual pay for 45 hours and explain one limitation of the model."
Model answer: (a) $600. (b) 38 × 30 + 7 × 45 = 1,140 + 315 = $1,455; the model gives $1,350. The model assumes one rate for every hour; overtime changes the rate, so the model underestimates pay above 38 hours. Classic mistake (crossed): "$1,350".

## Numbers used (author note: every value)

| Item | Value or result | Where it appears |
| --- | --- | --- |
| City (site `we-2`, a06) | P = 250 000 × 1.03^t; 20 years ≈ 452,000 (451,528); 200 years ≈ 92 million (92,338,954); Australia about 27.6 million | 1, 2, 3, 4 |
| Illustration | levels towards 2 million (no values spoken) | 2 |
| Car (site `we-3`, a06) | V = 24 000 × 0.82^t; $19,680 (1 y); about $453 (20 y); about $62 (30 y); $8.57 (40 y); never $0 | 5 |
| Fares (example) | $4 a trip; cap $16 at 4 trips; 6 trips: model $24, actual $16 | 6, 12 |
| A1 | N = 200 × 1.1^156 ≈ 573 million | 8, 9 |
| A2 | $600; $1,140 + $315 = $1,455; model $1,350; gap $105 | 10, 11 |

## Numbers to verify (all values, repeated for Codex)

Recalculated with SymPy 1.14 (18 Nov 2026, scratchpad `s12/verify.py` and inline checks, run with `python -I`); Codex to re-check.

- 250 000 × 1.03^20 = 451,527.81; 250 000 × 1.03^200 = 92,338,954; ÷ 27.6 million ≈ 3.35.
- 24 000 × 0.82^t at t = 1, 20, 30, 40: 19,680; 453.41; 62.32; 8.57.
- 4 × 4 = 16; 4 × 6 = 24.
- 200 × 1.1^156 = 5.7318 × 10^8.
- 30 × 20 = 600; 38 × 30 = 1,140; 7 × 45 = 315; 1,455; 30 × 45 = 1,350.
- Illustrative logistic (author only): K = 2,000,000, P(0) = 250,000, r = ln 1.03; years 0, 10, 20, 50, 80, 100: 250,000, 322,131, 410,195, 770,194, 1,206,389, 1,466,029.

## Memory aid check

- **"A limitation = the assumption + why it fails here."** with the key line "Good near the data. Risky far outside it." The first line is the pack's advice (section 8: "A good limitation answer has two parts: the assumption, and why it fails here. Use that as the memory aid"), which follows site `we-2` (d)'s tip; the key line is original. Meaning, as said in scene 7: to explain a limitation, state what the model takes for granted and why that is false in the context; predictions near the data are more reliable than far outside it. Assumptions checked: "why it fails here" means in this context, not in general (scene 4's answer is specific to the city); "fairly safe" near the data is not "certain". It helps a new case: a phone's battery model losing 10% an hour assumes the same rate at every charge level and never reaches 0%, but the phone switches off. Introduced after scenes 2 to 6. a11b and a13 reuse the first line.
- **Considered, not used:** "Models are useful liars" (memorable, but suggests every model is false everywhere).

## Narration length estimate

Counted by script (narration blockquotes, bold markers removed; scratchpad `s12/count.py`): 5,696 characters. At 13.3 characters per second, plus 2 countdowns (20 s), short holds 6 s, about 24 s of settling (the counter, the curves drawing, the decay rider, the fare taps) and the 45 s notes scene: about 518 s. Characters per scene (1 to 13): 578, 636, 565, 593, 636, 777, 136, 327, 354, 331, 335, 353, 75. Speech before the notes is about 423 s, under the 570 s cap. Feedback speech plus hold: about 28 s and 26 s.

Reserve trims if the voiced take runs long: scene 4's last sentence (the framed answer carries it); scene 6's "Lines can also run below zero." (keep the sketch).

## Scene list and build ids

Lesson key `m-s12a07` (route math-s12-a07). Explainer folder `src/explainer/lessons/math-s12-a07`; build inputs in `docs/production/claude-pm/lessons/math-s12-a07/` (at voicing).

In order (13 scene headings): hook-two-hundred-years, near-far-data, the-assumption, worked-limitation, decay-never-zero, standard1-strengths-linear, memory-aid, attempt-1, feedback-1, attempt-2, feedback-2, handoff, key-notes.

Stage plan (approximate seconds):

| Time (approx.) | Scenes | Stage |
| --- | --- | --- |
| 0 to 45 s | 1 | a06's frame; the counter to 92 million |
| 45 to 100 s | 2 | Model against reality: near and far from the data |
| 100 to 140 s | 3 | The limitation card |
| 140 to 190 s | 4 | g01 board: writing the limitation |
| 190 to 240 s | 5 | The car's decay rider |
| 240 to 305 s | 6 | Standard 1 segment: strengths and the fare cap |
| 305 to 320 s | 7 | Framed memory card |
| 320 to 410 s | 8 to 11 | Question cards and countdowns, then feedback |
| 410 to 430 s | 12 | The fare-cap frame for a08 |
| 430 to 475 s | 13 | Key notes, then a silent return to scene 12's frame |

Per-scene motion (schema 4): all `explain` except attempt-1, attempt-2 and key-notes (`hold`). Transitions: a06's last frame continues into 1; 1 to 2 clear change; 2 to 3 clear change; 3 to 4 clear change to the board; 4 to 5 clear change; 5 to 6 clear change; 6 to 7 camera pull back; attempts and feedback: the card shrinks to the top; 11 to 12 board clear; 12 to 13 fade, then a silent return.

Holds: attempt-1, attempt-2 (10 s). key-notes 45 s (1,350 frames). Review evidence paths: `learning_review` = `checks/m-s12-a07-learning-review.md`, `science_check` = `checks/m-s12-a07-maths-check.md`.

## Assets

Inspected before choosing (18 Nov 2026, `public/assets/maths`, read only, viewed on the paper background): `ma12-city-skyline-strip-v1.png` (harbourside skyline; a06's, reused); `ma12-used-hatchback-v1.png` (small red hatchback); `ma11-travel-card-v1.png` (teal card, contactless mark) and `ma11-travel-card-reader-v1.png` (yellow reader on a post); `ma11-sneakers-v1.png` (A1's picture). No new plate.

Coded: the counter and population bar, every graph and region, the limitation card, the board, the value readout, the fare taps and totals, the strengths card, the question cards, the countdown, the key notes.

### Studio kit use and additions

Uses: `runLogistic` and `SeriesGraph` (sims/population.ts, series-views.tsx; lesson labels only, no biology words), `StudioPlot`, `AxisShadow` or `StudioDomainStrip` (near and far regions), `FunctionRider`, `LiveReadoutBoard`, `PlateImg`, `HandTag`, the g01 `WorkingBoard` parts, `MistakeCard`, `MemoryAidCard`, `KeyNotesScreen`, `QuestionCard`.

Additions (kit-needs row a07: none essential):
1. **Limitation card** (small, a `GivensCard` layout reused in a11b and a13): two slots, "assumption" (amber) and "why it fails here" (violet), filling on cue.
2. **Big-number counter with a comparison bar** (small `LiveReadoutBoard` mode): spins through orders of magnitude with thousands separators and draws a proportional comparison bar. Check: 92,338,954 against 27,600,000 gives a bar ratio of about 3.3.

## Codex asset brief

No new plate. All five plates are reused (inspected 18 Nov).

## Codex error-check brief

Error-only check (report errors; do not restyle or rewrite):
1. Re-check every value under "Numbers to verify", and every value in narration, screen text, attempts and key notes against "Numbers used".
2. Confirm both syllabus quotes match the route-inputs JSON exactly, with the Standard 2 and Standard 1 codes attached correctly.
3. Confirm site `we-2` and `we-3` numbers are unchanged, and that no bacteria, bushfire or other science context appears.
4. Confirm the illustrative levelling curve is labelled "(illustration)" wherever it appears and that no value from it is spoken as data.
5. Confirm the fares and overtime figures are labelled examples (root ruling 5) and the Standard 1 segment is labelled.
6. Confirm both attempts carry every demand and neither card nor picture shows an answer.
7. Confirm scene 1 opens on a06's final frame (a06 scene 12) and scene 12 matches a08's opening frame.
8. Confirm no em dash (U+2014), Australian spelling, the narration count, and every bold cue quoted in its scene's Visual in spoken order.

## YouTube metadata (draft)

Title: Limitations of Linear and Exponential Models | Year 12 Maths Standard

(Title length: 69 characters.)

Description: Full lesson, notes and practice questions: https://hscscience.com.au/subjects/maths-standard/year12/algebraic-relationships/lesson03.sa.html

A city of 250,000 people grows by 3% a year. The model predicts about 452,000 people after 20 years, and about 92 million after 200 years: more than three times everyone in Australia, in one city. When does a good model stop being good? See why predictions far outside the data are risky, why exponential growth can't go on for ever, why a decay model never reaches zero, and how to write a limitation the way markers want: name the assumption, then say why it fails here. For Standard 1, the strengths of linear and exponential models, and a linear model that runs past a fare cap. Two exam-style questions at the end. All questions are written for HSCScience in the HSC style; they are not official NESA questions.

Mathematics Standard 11-12 (2024 syllabus), Year 12, Algebraic relationships. Standard 2 and Standard 1.
Syllabus content (NSW Mathematics Standard 11-12, 2024):
Standard 2 (ci5c87181e): "Explain the limitations of exponential models in practical contexts"
Standard 1 (cid72ff748): "Identify the strengths and limitations of linear and exponential models in given practical contexts"
Official syllabus: https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba2/faf5e47f4a (Standard 2) and https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-standard-11-12-2024/content/year-12-tba1/fa493dfdfb (Standard 1)

Builds on: Exponential models. Next (Standard 1): Sketching graphs from real-life stories. Next (Standard 2): Parabolas, the vertex and axis of symmetry.

#Year12Maths #MathsStandard #ExponentialModels #HSCScience

## Open decisions

- **1. The a06 join (root).** Scene 1 opens on a06 Revision 1's final frame exactly as specified in `math-s12-a06.md` (scene 12) and `../checks/root-decisions-maths-s12-a01-a06.md` (join 9), read at the end of this work. Join 9 recommended keeping the sneaker anchor and paying off the 200-year question first; this design instead makes the city the teaching example (it is the inherited question) and moves the sneakers to attempt 1 (open decision 4). The "?" ring fills with "≈ 92 300 000" as join 9 suggests.
- **2. Standard 1 arrives from a05 (root).** Standard 1 viewers have not seen a06's frame. The first sentence states the city and its model in full, so the frame reads as new; nothing else in the video depends on a06 except the "remember the car" sentence in scene 5, which still works for a newcomer because the model is stated.
- **3. The illustrative curve (learning review).** The levelling curve is an illustration, not data, and is labelled so. Check that students do not read its values as facts.
- **4. Pack question 1 moved to the attempt (record).** The pack's sneaker store becomes attempt 1 (parts (b) and (c)); the city carries the teaching, because a06 hands it over.

## Review notes

- Revision 1 has had no independent review. Next: student learning review (trace from a06, a05 and Year 11 l03, l04; check that the 92 million counter makes extrapolation felt, that the limitation card's two slots land before the exam answer, that the Standard 1 segment is clearly optional for Standard 2, and that the cards give nothing away), then the Codex maths check and error check, then voicing and a build to grade A.
