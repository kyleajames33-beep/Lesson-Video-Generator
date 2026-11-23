# Health and Movement Science site corrections

Read-only source audit by Claude (HMS design wave), started 23 November 2026. These are proposed repairs for the owner's site record, not website edits; nothing in the site clone was changed. Site clone: `C:/Users/kygs/teaching-app-fix` (branch main, site commit 5d74a6272). Exact old text keeps the page's spelling; where the source contains an em dash it is shown as a comma. Videos follow the correct science or syllabus, not the error.

Root decision (23 Nov 2026): items 1 to 6 are accepted for the site record. Items 7 to 11 accepted by root (23 Nov 2026, second set). Item 12 accepted by root (third set). Items 13 (v15) and 14 (v16) accepted by root (fourth set, 23 Nov 2026). Items 15 and 16 (hms-y11-m2-v01) accepted by root (24 Nov 2026).

Scope so far: the site lessons read in full for the first two full designs (Year 11 L01 and L02), plus the misconception boxes of all 84 lessons scanned for the pre-design packs. Later designs append here.

## 1. subjects/health-movement-science/year11/module1/lesson01.sa.html

Source hash: `92eaf324cfb892ed7d103c3261f4225dd0cf1a6e04d2c3d1f4633de20b0d1366`. Card 04 body and the "Key terms" card (WHO definition); the card 08 figure also labels the rung "WHO, 1948".

**Exact old text:** "written into the WHO constitution in 1948 and has not been amended since." and "Adopted in 1948 and unchanged since."

**Correction:** "set out in the WHO constitution, adopted in 1946 and in force from 1948, and has not been amended since." and "Adopted in 1946 (in force 1948) and unchanged since." The figure label can stay "WHO, 1948" if a caption says "in force 1948", or read "WHO, 1946".

**Reason:** The constitution was adopted by the International Health Conference and signed on 22 July 1946; it entered into force on 7 April 1948. "Adopted in 1948" is wrong; "in force since 1948" is right. Video hms-y11-m1-v01 says "since that came into force in 1948". Severity: minor (date).

## 2. subjects/health-movement-science/year11/module1/lesson01.sa.html and lesson02.sa.html

Source hashes: L01 `92eaf324cfb892ed7d103c3261f4225dd0cf1a6e04d2c3d1f4633de20b0d1366`; L02 `3c40ecc97677b9d9adf67a3c3f5e9afa7ddf73320803ae6121ff105c4fe5fdc4`. "Key terms" cards.

**Exact old text:** L01: "physical, mental, social, and in some frameworks spiritual and cultural." L02: "Physical, mental, social, and in many frameworks spiritual and emotional."

**Correction:** use one list in both lessons, for example "physical, mental and social (the WHO's three), and in some frameworks emotional, spiritual and cultural."

**Reason:** consecutive lessons give different optional dimensions, which invites students to think one list is wrong. Not a science error; a consistency fix. The videos speak only the WHO's three dimensions. Severity: minor.

## 3. subjects/health-movement-science/year11/module1/lesson02.sa.html

Source hash: `3c40ecc97677b9d9adf67a3c3f5e9afa7ddf73320803ae6121ff105c4fe5fdc4`. Card 04 ("The dimensions, and why they will not stay in their lanes").

**Exact old text:** "The dimensions are not four separate scores that happen to be printed on the same page, they are connected, and the connection runs both ways."

**Correction:** "The dimensions are not separate scores that happen to be printed on the same page, they are connected, and the connection runs both ways."

**Reason:** the lesson's own key terms give three core dimensions plus optional ones, and its worked loop uses three; "four" has no referent. Video hms-y11-m1-v02 says "three separate scores", following v01. Severity: minor.

## 4. subjects/health-movement-science/year11/module2/lesson04.sa.html

Source hash: `cdbfee5044799583fb7bfc2616f0f291eebac8d5f1ed86508a622e910d33bfbf`. Misconception box in card 07 ("Two circuits, one pump, and the exception everyone gets wrong").

**Exact old text:** "Arteries do not carry oxygenated blood. They carry blood away from the heart."

**Correction:** "Arteries are not defined by carrying oxygenated blood. They are defined by carrying blood away from the heart."

**Reason:** as printed, the box heading states something false: systemic arteries do carry oxygenated blood, as the box's own body then explains. A student skimming the bold heading learns the wrong rule. The body text is correct. Video hms-y11-m2-v04 will use the corrected wording. Severity: moderate (a bold heading that is literally false).

## 5. subjects/health-movement-science/year11/module1/lesson03.sa.html

Source hash: see `docs/production/claude-pm/pre-design/hms/hms-y11-m1-v03.md`. Card 06, "Table 1, Condition X in a population of 200,000, over three years"; also card 08's reading ("Prevalence rises by 35 per cent") and Activity 1 item 2 ("Cases of Condition X up 35 per cent in three years").

**Exact old text (table rows):** "Year 1 400 2,000 180 / Year 2 380 2,300 120 / Year 3 360 2,700 90" (new cases, total cases, deaths).

**Correction:** total cases (prevalence) "2,000 / 2,260 / 2,530", and "rises by about 26 per cent" (and "up 26 per cent" in the activity). This assumes no recoveries (a chronic condition) and no migration, which the table implies.

**Reason:** prevalence can only change by new cases minus cases leaving (recovery or death), the lesson's own bathtub. Year 2: 2,000 + 380 − 2,300 = 80 cases leaving, yet 120 people died. Year 3: 2,300 + 360 − 2,700 = −40, so 40 cases appear from nowhere. A student who applies the bathtub correctly to the table gets a contradiction. The reading the lesson draws (incidence falls, mortality halves, prevalence rises, so treatment is succeeding) is unchanged by the correction. Video hms-y11-m1-v03 uses the corrected column. Severity: moderate (the worked table contradicts the lesson's central model).

## 6. subjects/health-movement-science/year11/module1/lesson04.sa.html

Card 08 ("Using the four together, and how they promote health status").

**Exact old text:** "A population's health status is an aggregate, and aggregates are dragged down hardest by the groups furthest behind. Improving the health of a group that is already close to the ceiling produces a small movement in the national figure; improving the health of the group furthest from it produces a large one."

**Correction:** "A population's health status is an aggregate. The group furthest behind carries the most avoidable ill health, so the same resource, matched to that group's needs, removes far more ill health there than in a group already close to the best it can achieve, and the national figure moves further."

**Reason:** an average is moved equally by one unit of improvement in any group of the same size; the gain is larger for the worst-off group because the same resource produces a larger improvement there, which is exactly what the lesson's own worked response (step 3) says. The card's wording attributes the effect to the average itself. Video hms-y11-m1-v04 uses the worked response's mechanism. Severity: minor (imprecise mechanism).

## Not errors (checked and kept)

- Year 11 module 2 lesson 13 uses "220 minus age" for maximum heart rate and already flags its limits on the page; the video keeps the caveat.
- Year 11 module 2 lesson 09: "Two ATP per glucose molecule when no oxygen is used, twice the yield of a phosphocreatine molecule". Correct as a per-glucose figure (glycogen-derived glucose gives three); the video can keep it.
- The syllabus's own typos ("anerobic interval", "what is digital heath?", the missing comma in "family, peers culture") are NESA's and are quoted verbatim, flagged, not corrected.

## 7. subjects/health-movement-science/year11/module1/lesson09.sa.html

Source hash: `e7656227ab7fbc5e61df8fddc83c4343f96cf042240203a6ce2fed117c63191d`. Card 08 ("The seven questions, run once on a worked issue"), the "Data" line.

**Exact old text:** "Self-report is the main source, which is cheap and large but subject to recall error; sleep studies are accurate and tiny. Both are needed, and neither alone is sufficient, a validity point, not a complaint."

**Correction:** "Self-report surveys are the largest source and are subject to recall error. Device-measured sleep (a wrist accelerometer) now exists for a national sample: the ABS's Measured physical activity and sleep, 2023 (released March 2026) found 12 to 17 year olds averaged 7 h 56 min a night, though it reports 12 to 17 together and does not separate school nights. Laboratory sleep studies are the most accurate and the smallest. Each misses something, a validity point, not a complaint."

**Reason:** the page implies there is no large objective measure; since March 2026 there is one, and its own gaps (age band, school nights) are a better illustration of "what does this measure miss?". Video hms-y11-m1-v09 uses the ABS figures with source and year (release re-check). Severity: minor (dated).

## 8. subjects/health-movement-science/year11/module1/lesson09.sa.html

Same source hash. Card 06 ("A small number of schools internationally have trialled later start times"), card 08 "Current strategies" and "Further research", WE b1 step 4 and full answer ("genuine uncertainty about whether bedtimes simply shift later to match, which is not yet settled"), WE b2.

**Exact old text:** "A small number of schools internationally have trialled later start times" and "Does a later start time improve sleep duration, or does bedtime simply shift later to match? That is the question a decision-maker would ask first, and it is not settled by a campaign."

**Correction:** "Some schools and school systems overseas have moved to later start times" and "Evaluations overseas have generally found that later starts lengthen school-night sleep, with bedtimes moving later by less than the start time. Would that hold in Australian schools, and for the students sleeping least? That is the question a decision-maker would ask first."

**Reason:** later starts are no longer a handful of trials (for example Seattle's public high schools from 2016, and California's law setting a high-school start no earlier than 8.30 am from 2022), and the evidence leans one way: Dunster et al. (2018, Science Advances) found a 55-minute later start gave about 34 minutes more school-night sleep, and systematic reviews report longer sleep with later starts. "Not yet settled" overstates the doubt; the honest open question is transfer and equity. The worked responses' structure (conceding uncertainty) still works with the corrected wording. Video hms-y11-m1-v09 says "Studies overseas suggest sleep gets longer, but would that hold here, for the students sleeping least?" Severity: minor. Science check to confirm the citations.

## 9. subjects/health-movement-science/year11/module1/lesson10.sa.html

Source hash: `b3a42d45fb6f386f89085b0d4cd046467077dc93560af5e4b9f9a6dd588deb09`. Card 06 ("Help-seeking, and the five things that stop it"), opening sentence.

**Exact old text:** "Help-seeking is the skill with the largest single effect on young people's health outcomes, because almost every issue from Lesson 8 gets worse with delay and better with early contact."

**Correction:** "Help-seeking matters for young people's health outcomes because almost every issue from Lesson 8 gets worse with delay and better with early contact."

**Reason:** no comparative evidence ranks the four skills by effect size, and the page's own card 08 and WE b2 argue that skills cannot be ranked apart from conditions. The mechanism (delay worsens, early contact helps) is correct and is what the video keeps. A student copying the superlative into an answer makes an unsupported claim. Video hms-y11-m1-v10 uses the mechanism without the ranking. Severity: minor (unsupported superlative).

## 10. subjects/health-movement-science/year11/module1/lesson12.sa.html

Source hash: `a73276f9a2ad6d7081ea893e31b5baad86b2d78bcdf1dc824e4e801556bdf182`. Card 05 ("Auditing yourself across the dimensions, with evidence"), the caution paragraph.

**Exact old text:** "Lesson 8 covered help-seeking and where it goes; if your audit turns up something that worries you, that lesson is the relevant one, not this one."

**Correction:** "Lesson 10 covered help-seeking and where it goes; if your audit turns up something that worries you, that lesson is the relevant one, not this one."

**Reason:** help-seeking, its barriers and where to go are taught in Lesson 10 (card 06); Lesson 8 only names help-seeking as a protective factor. A student following the pointer at a worrying moment lands on the wrong page. Video hms-y11-m1-v12 points to help-seeking without a lesson number. Severity: minor (cross-reference).

## 11. subjects/health-movement-science/year11/module1/lesson12.sa.html

Same source hash. Card 07 ("What makes a course of action usable"), the paragraph after the table.

**Exact old text:** "Supported is the one with the strongest evidence behind it, and Lesson 11 explains why"

**Correction:** "Supported matters, and Lesson 11 explains why"

**Reason:** no evidence ranks the five properties; the if-then cue in the page's own card 08 has a strong meta-analytic base (Gollwitzer and Sheeran, 2006), so calling "supported" the strongest is unsupported. The mechanism the card gives (recruiting connectedness, someone in a position to notice) is sound and is what the video keeps. Severity: minor (unsupported superlative).

## 12. subjects/health-movement-science/year11/module1/lesson13.sa.html

Source hash: `eeeee69d894046e983a200c2b4c332a88a5a8e542be72f94bcac01b2caa11b39`. Card 08 ("The individual in their community, and choosing the mode"), the first rung.

**Exact old text:** "Self-advocacy. Asking for what you need, for yourself. Requires only the help-seeking skill from Lesson 8."

**Correction:** "Self-advocacy. Asking for what you need, for yourself. Requires only the help-seeking skill from Lesson 10."

**Reason:** help-seeking is taught in Lesson 10 (card 06); the same cross-reference slip as correction 10. Video hms-y11-m1-v13 recalls help-seeking without a lesson number. Severity: minor (cross-reference).

## 13. subjects/health-movement-science/year11/module1/lesson15.sa.html

Source hash: `85be5d43e98df976f237821b53fe8685e64ec88ebfa5851a53d9ebe444e69f2f`. Whole page against the syllabus examples for hms-y11-fa1-g4-d3 (p18).

**Exact old text:** not a wording error; an omission. The page teaches the biomedical, behavioural and socio-ecological approaches and four WHO statements (Alma-Ata, Ottawa, Jakarta, Bangkok), but never mentions the syllabus's own listed examples: "Aboriginal and Torres Strait Islander approaches to health", "Sociocultural model", "Salutogenic model", "Ecological model" (for -s1) and "UNESCO" (for -s2).

**Correction:** add a short card or panel: the salutogenic model (Antonovsky: asks what creates health rather than what causes disease; sense of coherence), Aboriginal and Torres Strait Islander holistic approaches to health (social, emotional, cultural, spiritual and physical wellbeing, connected to community and Country, community-led), a sentence placing the sociocultural and ecological models within the socio-ecological band, and UNESCO's role with the WHO (for example the Global Standards for Health Promoting Schools, 2021).

**Reason:** a student who studies only the page cannot answer a question that names one of the syllabus's examples (for example "the salutogenic model" or "UNESCO"). Video hms-y11-m1-v15 adds them in scenes 7 and 8. Severity: moderate (coverage of named syllabus examples).

## 14. subjects/health-movement-science/year11/module1/lesson16.sa.html

Source hash: `7d8e5a644a87157db243aa896c3f9deefbf12a67222ed4ab971cc263d83bfe84`. Card 07 ("Partnerships with communities, and the difference power makes") against sub-point hms-y11-fa1-g4-d3-s4 (p18).

**Exact old text:** not a wording error; an omission. The sub-point asks how partnerships with communities strengthen health "across a range of cultural groups including Aboriginal and Torres Strait Islander Peoples"; the page's only cultural-group example is the Aboriginal Community Controlled health sector and the national partnership agreement.

**Correction:** add one paragraph on partnerships with culturally and linguistically diverse communities, for example migrant and refugee communities working with bilingual community health workers and multicultural health services co-designing information and services, with the same three reasons (relevance, trust and reach, durability).

**Reason:** "a range of cultural groups" requires more than one group; a student using only the page cannot answer a question about another cultural group. Video hms-y11-m1-v16 adds a general example (scene 8). Severity: moderate (coverage of the sub-point).

## 15. subjects/health-movement-science/year11/module2/lesson01.sa.html

Source hash: `a146fa9abd93cb20bff942bede5966634919f25684bf8341c59f773878991902`. Card 06 ("Three classes of joint, and the trade-off that runs through all of them"), the cartilaginous paragraph.

**Exact old text:** "Each individual joint moves only a little; the twenty-four of them in the vertebral column together produce a spine that bends substantially while still protecting the spinal cord."

**Correction:** "Each individual joint moves only a little; the twenty-three intervertebral discs together produce a spine that bends substantially while still protecting the spinal cord."

**Reason:** there are 24 presacral vertebrae but 23 intervertebral discs, because there is no disc between the first two vertebrae (the atlas and axis, a synovial pivot joint). The paragraph counts discs as its example of a cartilaginous joint. Video hms-y11-m2-v01 says "twenty-three of them in a row". Severity: minor (count).

## 16. subjects/health-movement-science/year11/module2/lesson01.sa.html

Same source hash. Card 01 warm-up ("One of them will do something the other cannot") and card 07, the paragraph after the six-row table.

**Exact old text:** "Your knee is a hinge, so essentially it cannot."

**Correction:** "Your knee is a hinge, so it can rotate only a little, and only when it is bent; straight, it cannot rotate at all."

**Reason:** the knee is a modified hinge: with the knee flexed, the tibia can rotate a little on the femur (this is also why twisting on a bent knee loads the ligaments and menisci, the page's own Activity 2 mechanism). A student who tries the warm-up will feel a small rotation and doubt the lesson. The contrast with the hip still holds. Video hms-y11-m2-v01 says "You'll get a little at most" and "your knee barely does because it's a hinge". Severity: minor (overstated).
