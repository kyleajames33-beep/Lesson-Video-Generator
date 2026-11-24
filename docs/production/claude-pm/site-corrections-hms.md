# Health and Movement Science site corrections

Read-only source audit by Claude (HMS design wave), started 23 November 2026. These are proposed repairs for the owner's site record, not website edits; nothing in the site clone was changed. Site clone: `C:/Users/kygs/teaching-app-fix` (branch main, site commit 5d74a6272). Exact old text keeps the page's spelling; where the source contains an em dash it is shown as a comma. Videos follow the correct science or syllabus, not the error.

Root decision (23 Nov 2026): items 1 to 6 are accepted for the site record. Items 7 to 11 accepted by root (23 Nov 2026, second set). Item 12 accepted by root (third set). Items 13 (v15) and 14 (v16) accepted by root (fourth set, 23 Nov 2026). Items 15 and 16 (hms-y11-m2-v01) accepted by root (24 Nov 2026). Item 17 (hms-y11-m2-v06) accepted by root (24 Nov 2026, Module 2 second set). Items 18 to 22 (hms-y11-m2-v09 to v13) accepted by root (24 Nov 2026, Module 2 third set). Item 23 (hms-y11-m2-v16) follows root's 24 Nov ruling on the attention-focus wording. Item 24 (hms-y11-m2-v18) accepted by root (24 Nov 2026, fourth set). Items 25 (hms-y12-m3-v04) and 26 (hms-y12-m3-v06) accepted by root (24 Nov 2026, fifth set). Items 27 (hms-y12-m3-v09), 28 (hms-y12-m3-v11, also L09), 29 (hms-y12-m3-v14) and 30 (hms-y12-m3-v17) accepted by root (24 Nov 2026, sixth set); item 30's shared-record dates stay flagged for the science check. Item 31 (hms-y12-m4-v03, L03) accepted by root (24 Nov 2026, seventh set). Items 32 (hms-y12-m3-v12, L12 "approved") and 33 (hms-y12-m3-v06, L06 injury "concentrated in the young") accepted by root (24 Nov 2026, science check). Items from 34 on are pending root.

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

## 17. subjects/health-movement-science/year11/module2/lesson06.sa.html

Source hash: `aaa5957803f9c7cd09a478c0570846eb96e291baa55a490e05f461df9e5ea2a4`. Card 04 ("The digestive system: one long tube, and the organs that serve it"), the small intestine item.

**Exact old text:** "Its lining is folded into millions of villi, each covered in microvilli, giving a surface area of around 250 square metres."

**Correction:** "Its lining is folded into millions of villi, each covered in microvilli, giving an enormous surface area: current measurements put the whole digestive tract's inner surface at about 30 to 40 square metres, most of it in the small intestine, roughly the floor area of a small flat."

**Reason:** the "250 square metres" (tennis court) figure is an older textbook estimate. Helander and Fändriks (2014, Scandinavian Journal of Gastroenterology) measured the mean total mucosal surface of the adult digestive tract, including villi and microvilli, at about 32 square metres. The lesson's point (a huge folded surface, the same design as the alveoli) is unchanged. Video hms-y11-m2-v06 says "a huge folded surface" and shows no number. Severity: minor (dated figure). Science check to confirm the citation.

## 18. subjects/health-movement-science/year11/module2/lesson09.sa.html

Source hash: `0e5c63ee48c957b731a2441bb207c89f0447fd087b0f341b96a899ea58ed14ef`. Card 05 ("The ATP-PCr system: the fastest thing the body can do"), the cause of fatigue row and the paragraph after the table.

**Exact old text:** "Depletion of phosphocreatine. Nothing accumulates and nothing becomes acidic, the fuel simply runs out" and "They have run out of phosphocreatine."

**Correction:** "Depletion of phosphocreatine: the store runs too low to rebuild ATP at the maximal rate. This system itself adds little that accumulates, though glycolysis, running alongside it from the first seconds, has already begun to add hydrogen ions (Card 07)." and "Their phosphocreatine is running low."

**Reason:** by the end of a 10 s maximal sprint phosphocreatine is substantially depleted but not exhausted; the rate of ATP resynthesis falls as the store runs low. The card also contradicts the page's own Card 07 ("hydrogen ions begin accumulating well before the ten second mark in a maximal effort"). Depletion stays the fatigue cause the syllabus expects. Video hms-y11-m2-v09 says "running low", "too low to rebuild ATP fast enough" and shows the gauge at about a quarter at the line. Severity: minor (overstated; internal inconsistency).

## 19. subjects/health-movement-science/year11/module2/lesson10.sa.html

Source hash: `9a488c328b68f170052cbe0bacf68cbd912f8cac829a433766cb1fc902774ce7`. Card 04 (the aerobic table, efficiency row), card 07 (two truths and a lie), card 08 (the three-system table) and the summary.

**Exact old text:** "Around 36 ATP per glucose molecule, against 2 from the same molecule anaerobically"

**Correction:** "About 30 to 36 ATP per glucose molecule (current estimates are about 30 to 32; many textbooks still give 36 to 38), against 2 from the same molecule anaerobically: roughly fifteen times as much."

**Reason:** the 36 to 38 figure assumes whole-number yields per carrier molecule; measured proton costs give about 2.5 and 1.5 ATP per NADH and FADH₂, so about 30 to 32 ATP per glucose (standard in current biochemistry and exercise physiology texts). HSC marking guides still accept 36 to 38, so the page's comparison stands; only the single figure is dated. Video hms-y11-m2-v10 says "more than thirty ATP per glucose, against two" and shows "about 30 to 36". Severity: minor (dated figure).

## 20. subjects/health-movement-science/year11/module2/lesson11.sa.html

Source hash: `2eb2cfff8f280a4e9fb9dcaff9713d3fdc2c4923e1eeae38ed3df6afe94e5dd8`. Card 07 ("Micronutrients: no energy of their own, and nothing works without them"), the calcium row, third column.

**Exact old text:** "Impaired contraction, and over time a raised risk of stress fracture, which removes the athlete from training altogether"

**Correction:** "Little effect on contraction, because blood calcium is held steady by drawing on bone; over time, lower bone mineral density and a raised risk of stress fracture, which removes the athlete from training altogether"

**Reason:** blood calcium is tightly regulated (parathyroid hormone releases calcium from bone when intake is low), so a low dietary intake does not impair muscle contraction in an otherwise healthy athlete; the cost falls on the skeleton. Impaired contraction from low blood calcium (hypocalcaemia) is a medical condition, not a dietary shortfall. The middle column ("Required for the muscle contraction itself") is correct. Video hms-y11-m2-v11 says calcium "triggers every contraction and builds bone" and that a low intake "shows up mainly in the bones". Severity: minor (mechanism).

## 21. subjects/health-movement-science/year11/module2/lesson12.sa.html

Source hash: `638bd91e42a9a160febf70687ce2699851cbb4d15edd4b7e86800fb0ca8b9e3e`. Card 04 ("What makes a session aerobic or anaerobic"), the "In your book" note.

**Exact old text:** "Write the two sprint sessions side by side with their work-to-rest ratios, roughly 1:18 and 1:4"

**Correction:** "Write the two sprint sessions side by side with their work-to-rest ratios, roughly 1:36 and 1:4 (a maximal 30 metre sprint takes about 5 seconds)"

**Reason:** the card's sessions are maximal 30 m sprints with three minutes or twenty seconds of rest. A 30 m sprint from a standing start takes about 4 to 5.5 s, so 180 s of rest is about 1:36 (1:33 to 1:45); 1:18 would need a 10 s effort. The 1:4 figure for 20 s of rest is correct. The card's diagram scale ("1:20 rest" for speed and power) is unaffected. Video hms-y11-m2-v12 says "about five seconds each, with three minutes' rest, is about one to thirty-six". Severity: minor (arithmetic).

## 22. subjects/health-movement-science/year11/module2/lesson13.sa.html

Source hash: `9e13cb02918a7deab0d68384ea438b03b259a6a5d4b40ba5c981609222e7a397`. Card 07 ("Progression"), the six-week table and the paragraph after it.

**Exact old text:** the table's weeks 1 to 2 (3 per week, 70% HRmax, 25 min), week 3 (4 per week, 25 min, "Frequency only") and week 4 (4 per week, 35 min, "Time only"), followed by "A widely used starting guideline is to increase total weekly load by no more than about 10 per cent per week."

**Correction:** either keep the table and qualify the guideline ("For a low starting volume, single steps larger than 10 per cent are common; what matters is one change at a time and a planned recovery week"), or use smaller steps, for example weeks 1 to 2: 3 × 30 min at 70%; week 3: 3 × 33 min (time only, +10%); week 4: 3 × 33 min at 75% (intensity only); week 5: 3 × 25 min (recovery); week 6: 3 × 36 min at 75% (time only).

**Reason:** the table's own steps raise weekly running time from 75 to 100 minutes (+33%) and then to 140 minutes (+40%), which contradicts the guideline stated immediately after it. The "10 per cent rule" is itself a rule of thumb with weak evidence, so the page should not present both without reconciling them. Video hms-y11-m2-v13 uses the smaller-step table above and says "one variable at a time, in small steps", without teaching the 10% figure. Severity: minor (internal inconsistency).

## 23. subjects/health-movement-science/year11/module2/lesson16.sa.html

Source hash: `ce91a7ef4a3469e1813d7724c9fed4fd62e184ad37ed35f335113b7f6256309a`. Card 01 answer (after the stage table, "Now Card 01") and the overview ("instruction that is exactly right for a beginner actively damages an expert, and the reverse").

**Exact old text:** ""Watch your elbow" directs attention to the body. For the beginner, that is exactly right: her attention is on her body anyway, and the cue gives it something correct to attend to."

**Correction:** ""Watch your elbow" directs attention to the body. For the beginner, one body cue can help with a single key point: her attention is on her body anyway, and the cue gives it something correct to attend to. But learners at every stage usually do better attending to the effect of the movement, such as the ball's path, than to their body parts, and for the nine-year player a body cue is the worst instruction available."

**Reason:** reviews of attentional focus research (Wulf and colleagues) find that an external focus on the movement's effect generally benefits novices as well as skilled performers; the evidence does not support internal cues as the right default for beginners. The page's expert half (an internal cue disrupts an autonomous skill) is correct. Video hms-y11-m2-v16 says "Learners usually do better attending to the movement's effect, like the ball's path, than to their own body parts. A single body cue can still help a beginner with one key point." Severity: minor (overstated). Science check to confirm.

## 24. subjects/health-movement-science/year11/module2/lesson18.sa.html

Source hash: `5849fdf508d96a7e7a04ace1a87379c2871f05213bcc47b5252dc044ee38e4a6`. Card 06 ("Performance elements: decision-making, strategy and tactics"), the paragraph after the table.

**Exact old text:** "Random and varied practice is not only better for retaining the movement, it is the only arrangement that trains the decision at all, which is why the two halves of this lesson are really one idea."

**Correction:** "Random practice is better for retaining the movement, but a shuffled order called out by a coach still asks for no decision. Decision-making is trained only when the player must choose a response from information she reads in the moment (small-sided games, conditioned games, drills with two or more legitimate options), which is varied, open practice. That is why the two halves of this lesson connect: both work by making the learner do the job the match will ask of her."

**Reason:** the page defines random practice as "several skills in an unpredictable order" (card 03), and its own warm-up and Activity 1 run it as an order called out to the learner. Contextual interference research shows retention benefits from that shuffling, but the learner selects nothing; the response is announced. The page's own table (decision-making "cannot be developed by a drill with one correct answer") and Lesson 17's open-practice test (a decision from information not available in advance) make the distinction. Video hms-y11-m2-v18 says "A coach calling out a shuffled order isn't a decision, either. The player has to choose from what she reads." Severity: minor (conflation of two ideas).

## 25. subjects/health-movement-science/year12/module3/lesson04.sa.html

Source hash: `edb8c5be8359e006df877965fa580bf494cf2e42a6a8ca3c9e993376aa7f3b23`. Worked response we-hms-y12-m3-l04-b1 ("Compare the health status of Australia with that of other OECD countries"), step 4 ("Where Australia lags") and the same sentence in step 6 ("What a full-mark answer looks like").

**Exact old text:** "Against the third criterion, Australia's gap between its Indigenous and non-Indigenous populations is wider than the comparable gaps reported in New Zealand and Canada, so a strong national average coexists with a poorer equity performance."

**Correction:** "Against the third criterion, Australia, like other settler countries such as New Zealand and Canada, reports a large life expectancy gap between its Indigenous and non-Indigenous populations, so a strong national average coexists with a poorer equity performance."

**Reason:** the comparative claim is not supported. Statistics Canada reports life expectancy gaps for First Nations and Inuit people that are comparable to or larger than Australia's (ABS 2020–2022: 8.8 years for males, 8.1 for females), and New Zealand's gap for Māori is somewhat smaller but of the same order. Differences in how each country identifies Indigenous people and estimates life expectancy also make a ranking of the gaps unreliable. The page's point (a strong average with poor equity) does not need the comparison. Video hms-y12-m3-v04 does not use the claim and names no foreign country. Severity: minor (unsupported comparison). Science check to confirm the cross-country figures.

## 26. subjects/health-movement-science/year12/module3/lesson06.sa.html

Source hash: `e648fb55f66e6077f2295bb8f83db545d6cd30e782c639022c5038e1199c45a5`. Card 08 ("Worked example: type 2 diabetes, all six rows"), the incidence row; also WE b1 step 2 and its full answer ("one of the fastest-growing chronic conditions in Australia").

**Exact old text:** "Incidence. Rising over decades, alongside rising overweight and obesity and an ageing population; some of the recent rise reflects earlier detection through routine testing."

**Correction:** "Incidence. The age-standardised rate of new diagnoses has fallen since about 2000 (AIHW reports a 45% drop between 2000 and 2021), possibly reflecting prevention, screening and awareness, while the number of people living with the condition keeps rising because people live with it for decades. This is the incidence-down, prevalence-up pattern from Lesson 5." For WE b1: "Type 2 diabetes is one of the most common chronic conditions in Australia, and the number of people living with it continues to grow."

**Reason:** AIHW, *Diabetes: Australian facts* (summary, read 24 Nov 2026): "a steady decline in the age-standardised incidence rate for type 2 diabetes in Australia between 2000 and 2021", "an overall drop of 45%" (45,700 new diagnoses in 2021, 178 per 100,000; National Diabetes Services Scheme data). Prevalence still rises. Card 05's trend line ("prevalence rising over decades") is correct and unaffected. Video hms-y12-m3-v06 says "The rate of new cases has fallen by almost half since 2000. Yet prevalence keeps rising, because people live with it for decades." Severity: moderate (a trend direction in the worked profile). Science check to confirm.

## 27. subjects/health-movement-science/year12/module3/lesson09.sa.html

Source hash: `7b7c201c009ed1036a1b5b81200ba60e778d6d39d959351ddbd3418df216e50e`. Card 04 ("Who is responsible for what"), the federal column; also Activity 1's model answer 1 ("practitioners registered federally").

**Exact old text:** "Regulates medicines, devices and health practitioner registration, and the private health insurance industry." and "practitioners registered federally".

**Correction:** "Regulates medicines and devices, and the private health insurance industry. Health practitioner registration is a national scheme that every state and territory set up by passing the same national law, overseen jointly by all health ministers." and "practitioners registered under the national registration scheme".

**Reason:** the National Registration and Accreditation Scheme for health practitioners operates under the Health Practitioner Regulation National Law, which each state and territory adopted in its own legislation; it is a joint scheme of all Australian governments, not a Commonwealth function. Placing it in the federal column also undercuts the page's own point that responsibility is shared. Video hms-y12-m3-v09 lists only medicines and insurance as federal regulation and does not assign registration to one level. Severity: minor (attribution). Science check to confirm.

## 28. subjects/health-movement-science/year12/module3/lesson11.sa.html (and lesson09.sa.html)

Source hash (lesson11): `c42d4a82cf8ed9e587c5938f70fc522b323d03e6dbe10c4a83e741c6741ab510`. Card 07 ("Related Commonwealth-funded programs"), the My Aged Care paragraph; Activity 1 item 4; also lesson09.sa.html Activity 1 item 3 and its model answer ("A home care package delivered by a not-for-profit organisation").

**Exact old text:** "The entry point to federally funded aged care: assessment, then home support, home care packages or residential care." and "needs a home care package that has not yet been assigned" (L11); "A home care package delivered by a not-for-profit organisation." (L09).

**Correction:** "The entry point to federally funded aged care: assessment, then support at home or residential care. (Since 1 November 2025, under the new Aged Care Act, the Support at Home program has replaced Home Care Packages and short-term restorative care; the entry-level home support program is due to move across later.)" L11 Activity 1 item 4: "needs home support services that have not yet been assigned". L09 Activity 1 item 3: "Aged care services in an older person's home, delivered by a not-for-profit organisation."

**Reason:** the Home Care Packages Program closed to new arrangements when Support at Home began on 1 November 2025 (Department of Health, Disability and Ageing). Students in 2026 and later will meet the current program name; the page's other points (assessment, ageing in place, waiting times, navigation) still hold. Videos hms-y12-m3-v09 and v11 do not use the retired name. Severity: minor (dated program name). Science check to confirm the commencement date and the entry-level program's transition.

## 29. subjects/health-movement-science/year12/module3/lesson14.sa.html

Source hash: `66ae95795c899ee7f0cc883c682d7dd1578a7b18e3a5b9a99610fd93417c9530`. Worked response we-hms-y12-m3-l14-b1 ("Investigate the current and emerging challenges facing the Australian healthcare system"), step 4 ("Report the findings: current pressures") and the same clause in step 7.

**Exact old text:** "And rising out-of-pocket costs, including falling bulk-billing rates, increasingly determine whether primary care is accessed at all."

**Correction:** "And out-of-pocket costs, especially for services at or beyond the edge of universal coverage such as specialist gaps, dental and allied health, increasingly determine whether care is accessed at all."

**Reason:** GP bulk-billing rates fell from 2022 into 2023, but rose after the Commonwealth tripled the bulk-billing incentive in November 2023, and the incentive was extended to all patients from November 2025. "Falling bulk-billing rates" is out of date as a present-tense finding, and a student quoting it in 2026 states a reversed trend. The worked response's point about out-of-pocket costs stands without it. Video hms-y12-m3-v14 states no bulk-billing trend. Severity: minor (dated trend). Science check to confirm the latest Medicare statistics before release.

## 30. subjects/health-movement-science/year12/module3/lesson17.sa.html

Source hash: `290bb9e8ea6763e869877b1eb257431e6d04bd896907bc50bc72987de2794320`. Card 05 ("What services exist in Australia", the shared record paragraph) and card 08 ("What would actually make it work", condition 1).

**Exact old text:** "Crucially, it is a summary that providers choose to contribute to, not a complete clinical record automatically fed by every system." and "Contribution has to be the default, not a choice. A shared record is only as good as what is in it, and voluntary contribution guarantees an incomplete record."

**Correction:** "Crucially, it is a summary, not a complete clinical record. Contribution has mostly been the provider's choice; legislation passed in 2025 now requires prescribed providers, starting with pathology and diagnostic imaging, to share key reports by default, from 1 July 2026, with a transition period." and for card 08: "Contribution has to be the default, not a choice. Australia has begun this for some test results; for most other documents contribution is still voluntary, and voluntary contribution guarantees an incomplete record."

**Reason:** the "sharing by default" amendments to the national shared record legislation (2025) changed the voluntary model for some report types. The page's argument still holds for most documents, but as written it tells 2026 students that no default exists. Video hms-y12-m3-v17 says "Uploading has mostly been the provider's choice, and new rules are starting to make some test results upload by default." Severity: minor (dated). Dates confirmed by the science check (24 Nov 2026, `checks/hms-y12-m3-v17-science-check.md`): the Act passed in February 2025, the rules were made in December 2025, and the obligation for pathology and diagnostic imaging reports applied from 1 July 2026, with a transition period. Release re-check whether further provider types are added.

## 31. subjects/health-movement-science/year12/module4/lesson03.sa.html

Source hash: `293826ac11b60ceb` (prefix; full hash in hms-y12-m4-v03.md). Card 04 ("The energy systems set the rules of the session"), the table's first row, "Limiting factor" column; and worked response we-hms-y12-m4-l03-b1, step 3 and the full-mark answer.

**Exact old text:** "Stored phosphocreatine runs out" (card 04 table) and "develop the ATP-PC and lactic acid systems" (WE b1, twice).

**Correction:** "Stored phosphocreatine runs low" and "develop the ATP-PC and anaerobic glycolytic systems".

**Reason:** phosphocreatine falls steeply in a maximal effort but is not fully depleted by about 10 s (the same point as accepted correction 18 for Year 11 L09). "Lactic acid system" is a dated name; the page's own key terms and card 04 use anaerobic glycolysis and hydrogen ions, and the course treats "lactic acid causes fatigue" as an exam trap. Video hms-y12-m4-v03 says "phosphocreatine runs low" and "anaerobic glycolysis". Severity: minor (terminology). Science check to confirm.

## 32. subjects/health-movement-science/year12/module3/lesson12.sa.html

Source hash: `ed9e3cf454bd8e9921a4d802468cb0128bdb486201a61675e9346db617b77c03`. Card 04 (the five groups; "Two facts about the Australian setting worth knowing") and its quick check.

**Exact old text:** "Products are regulated for safety and quality and, for lower-risk products, the specific efficacy claim is generally not individually assessed [em dash] so “approved” means “unlikely to hurt you and contains what it says”, not “proven to work”." Quick check stem: "A lower-risk complementary product is approved for sale in Australia." Option B: "the product has been assessed for safety and quality, but its specific efficacy claim generally has not been individually assessed".

**Correction:** "Most of these products are listed (AUST L on the label), not approved. A listed product can only use ingredients from a list approved as low risk and must be made to quality standards, but the product itself is not individually assessed before sale, and nobody has checked that it works. So “listed” means “low-risk ingredients, made to a standard”, not “proven to work”." Quick check stem: "A lower-risk complementary product is listed for sale in Australia (AUST L on the label)." Option B: "its ingredients come from a low-risk list and it must be made to quality standards, but nobody has checked that it works".

**Reason:** the TGA states that listed (AUST L) medicines are "not 'approved' by the TGA" and are not individually assessed before sale: the sponsor self-certifies, ingredients come from a pre-approved low-risk list, manufacture must follow good manufacturing practice, and the TGA may review a product after it is on sale (TGA, "How we regulate medicines" and "About listed medicines", read by the science check 24 Nov 2026). "Approved" and "assessed for safety and quality" tell students the product was checked, which it was not. Video hms-y12-m3-v12 says "a listed product has had its ingredients drawn from a low-risk list, but nobody has checked that it works" (Revision 3, root ruling 2). Severity: moderate (regulatory fact; science check blocker in the video). Pending root.

## 33. subjects/health-movement-science/year12/module3/lesson06.sa.html

Source hash: `e648fb55f66e6077f2295bb8f83db545d6cd30e782c639022c5038e1199c45a5`. The key-term card ("Injury"), the candidates card ("Injury contrast value"), the two-axis map's injury note (figure label and its text description) and MC 3, option B.

**Exact old text:** "unlike most chronic disease it is concentrated in younger age groups" (key term); "it is concentrated in the young, it is not a chronic disease" (contrast value); "regulation and design; concentrated in the young" (map note, and "regulation and design, concentrated in the young" in its description); MC 3 option B "is concentrated in younger age groups and is not a chronic disease".

**Correction:** key term: "unlike most chronic disease it is the leading cause of death for young people, although falls make older people the largest group of injury deaths"; contrast value: "it is the leading cause of death for young people, it is not a chronic disease"; map note: "regulation and design; leading killer of the young"; MC 3 option B: "is the leading cause of death in younger age groups and is not a chronic disease".

**Reason:** falls are the leading cause of injury deaths in Australia, and over 95 per cent of fall deaths (about 6,400 in 2023 to 24) are in people aged 65 and over (AIHW, *Injury in Australia*), so injury deaths are not concentrated in the young. Injury is the leading cause of death for young people, which is a different claim. The page's own trend line ("falls in older people are rising with the ageing population") already points this way. Video hms-y12-m3-v06 says "It's the leading cause of death for young people, while falls hit older people hardest" (Revision 3, science check blocker). Severity: moderate (a distribution claim a student would repeat). Pending root.

## 34. subjects/health-movement-science/year12/module4/lesson22.sa.html

Warm-up, first paragraph (line 177 in the clone, read 24 Nov 2026): "One takes a strong painkiller ... Only the second will be sanctioned if tested." Under the WADA Prohibited List, narcotic painkillers (and tramadol since 2024) are prohibited in competition, so a "strong painkiller" taken before a match may itself be sanctioned. Suggested wording: "One takes a permitted painkiller (for example paracetamol) so that a sore ankle will not trouble them for eighty minutes." The video (hms-y12-m4-v22, Revision 3) already says "a permitted painkiller". Root decision (24 Nov 2026): accepted.
