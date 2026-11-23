# HMS pre-design: How can we tell how healthy a whole population is, when every number only shows part of the picture?

Video **hms-y11-m1-v03** (route order 3). Site lesson: Year 11 L03, Measuring a population's health: epidemiology, mortality, morbidity, incidence and prevalence. [Page](https://hscscience.com.au/subjects/health-movement-science/year11/module1/lesson03.sa); local file `C:\Users\kygs\teaching-app-fix\subjects\health-movement-science\year11\module1\lesson03.sa.html` (sha256 `29ba11f71a22b594`, read-only).

## 1. Exact syllabus content

- **hms-y11-fa1-g1-d3** (p15, inquiry question: "How do we understand and measure Australia’s health?"): "Discuss the use of epidemiology, mortality, infant mortality, morbidity, incidence and prevalence to explain the health status of Australians using tables and graphs from Australia’s Health and other health reports"

Source: NESA Health and Movement Science 11-12 Syllabus (2023), via the site spine `docs/syllabus/hms-11-12-2023.json` (verbatim, page-verified by the site). Spine ids are local, not NESA codes. NESA source typos are kept verbatim.

## 2. Site order, ideas, examples and practice

- **Epidemiology, and the question it exists to answer:** Epidemiology is the study of patterns and causes of health and disease across populations. The definition is easy; the reason it exists is the part worth understanding. A doctor sees one patient at a time and can say what is wrong with that person. No amount of that work answers the questions a health system actually has to answer: is this getting worse, who is it worst for, and would money spent here save more life ...
- **The five measures, and the job each one does:** Mortality counts deaths, usually as a rate per 100,000 so that populations of different sizes can be compared. It is the most reliably collected health measure there is, because deaths are registered by law. Its weakness is that it says nothing about anyone still alive. Infant mortality counts deaths before age one, per 1,000 live births. It gets its own measure because it responds sharply to things that matter far b...
- **Reading the table: five questions, in this order:** The dot point does not ask you to memorise figures. It asks you to use tables and graphs to explain health status, and the examinable skill is reading one you have never seen before. Ask these five questions every time, in order: 1. What is the unit? A count, a percentage, or a rate, and if a rate, per how many. A number without its unit is not evidence. 2. Who is in it? The population, the age range, the years cover...
- **What the numbers hide, and why that is examinable:** The verb in this dot point is discuss, which means the limitations are part of the content, not a criticism bolted on at the end. Four limitations are worth knowing well. An average hides its distribution. A national figure that improves can conceal a group whose figure is getting worse, because the majority moves the average. Any claim that “Australia's health is improving” is a claim about a mean, and Lesson 5 is a...
- **Using the measures together to explain health status:** No single measure describes health status. The skill the dot point is really asking for is reading several together, because each one covers a blind spot in another. Work through Table 1 above. Incidence falls year on year, so fewer people are newly acquiring the condition, prevention is working. Mortality halves, so those who have it are surviving longer, treatment is working. Prevalence rises by 35 per cent, and ta...
- **Activity 1 · Interrogate the table:** 2 A newspaper writes: “Cases of Condition X up 35 per cent in three years.” Is the claim accurate? Is it honest? Answer both separately. 3 Name two columns that are not in this table and that you would need before advising a government where to spend. auto-saved
- **Activity 2 · Find and read a real one:** 
- **Worked response we-hms-y11-m1-l03-b1** (4 marks): "Distinguish between incidence and prevalence, using an example to show why the two can move in opposite directions."
- **Worked response we-hms-y11-m1-l03-b2** (6 marks): "Discuss the use of epidemiology to explain the health status of Australians."
- **Page "In your book":** In your book. Write the four questions as a column, and beside each, name the measure from card 05 that answers it best. Two of them will need more than one measure, which is the point of the next card.
- **Page "In your book":** In your book. Draw the bathtub. Label tap, water level and drain with incidence, prevalence and recovery or death. Then write the diabetes and influenza examples beside it. This single diagram answers most incidence-versus-prevalence questions you will meet.

## 3. Number and science check

Figures the page states (to be independently checked in the design; current statistics must come from a dated report):
- Write the four questions as a column, and beside each, name the measure from card 05 that answers it best.
- Infant mortality counts deaths before age one, per 1,000 live births.
- A condition with a slow tap and almost no drain, such as type 1 diabetes, has low incidence and high prevalence that climbs year after year.
- Ask these five questions every time, in order: 1.
- Question 3 deserves a sentence of its own, because it is the one students skip.
- Work through Table 1 above.
- Prevalence rises by 35 per cent, and taken on its own that reads as a crisis.
- The last part is the one that separates a Band 6 answer from a Band 4 one.

Independent check: pending at design. See `../../site-corrections-hms.md` for errors already logged.

## 4. Exam traps and student mistakes (from the page)

- The bathtub, which is the only explanation of incidence and prevalence you need Think of a bath. Incidence is the tap, the rate of new cases flowing in. Prevalence is the water level, how many cases are in there now. The drain is people recovering or dying. Everything follows from the picture. A condition with a fast tap and a fast drain, such as influenza, ...
- No NESA marking-trend claim is made.

## 5. Visual plan, real objects and plates

Live coded bathtub: inflow rate (incidence), water level (prevalence) and drain (recovery and death) with readouts read from one simple stock-and-flow model; coded data table and trend line (math graphs kit) with a per-100,000 scale demonstration; no people.

New plates needed: painted watercolour plates in the house style with the `hms-` prefix (transparent PNG, true alpha, never stretched, no people, hands, faces or whole-body outlines, no real brands or logos). Exact list at design.

## 6. Course coherence

- **Entry knowledge:** hms-y11-m1-v02: Health is dynamic; individual health has position, direction and rate.; Stage 5 PDHPE (assumed, not re-taught): Reading simple tables and graphs.
- **Opens on:** the continuum from v02 multiplies into a crowd of markers: one person's health is a point, a population's is a pattern (the final frame of hms-y11-m1-v02).
- **Start:** Start from the shift from one person to a population: epidemiology as the study of patterns and causes across populations.
- **Stop:** Stop when students can say what mortality, infant mortality, morbidity, incidence and prevalence each measure and why rates are per 100,000, use the bathtub model to explain how incidence and prevalence can move in opposite directions, read an unfamiliar table with five ordered questions, name four limits of the numbers, and combine measures to describe health status. Current Australian figures belong to Year 12 and are not memorised here.
- **Next handoff:** hms-y11-m1-v04: opens on the v03 table splits by group: the averages hide rows that are much worse.
- **Later homes:** Current Australian data, life expectancy and the major causes: hms-y12-m3-v01 (reuses the bathtub and the five measures).
- **Recurring models:** intro:bathtub model (incidence tap, prevalence level, outflow drain), intro:five questions for reading a health table
- **Cross-year overlap:** Year 12 hms-y12-m3-v01 recalls these measures in one sentence each and reuses the bathtub; it does not re-teach them.

## 7. Open questions for the designer

- Which worked response becomes the on-screen attempt, and which is shortened to a second item in real exam wording?
- Which page activity, if any, can become a short on-screen task without a long hold?
