# m7b02 science check (Claude): how did experiments establish germ theory?

Checked on 22 October 2026 by an independent reviewer who did not author the design. Input: `../lessons/bio-m7-b02.md` (Revision 1, 21 Oct).

**Method.** I checked every narration line, the on-screen text, both attempts and their model answers, the feedback, the key notes, the memory aids, the logged site errors and the YouTube draft against standard texts (Campbell Biology; OpenStax Microbiology 1.1 and 3.1) and the sources listed below. Sources marked (searched) were opened or found by search in this session. Sources marked "for Codex to open" are standard references not opened here. I compared the syllabus wording character for character against `docs/production/programme/syllabus/bio-2017-y12.json`. I searched for the absolute words "always", "never", "every", "all", "only", "no", "can't", "isn't" and "just" and checked each hit. I checked each logged site error against the live page `C:/Users/kygs/hscscience/subjects/biology/year12/module7/lesson03.sa.html`, searched by exact phrase.

No renders and no audio. I searched the design for U+2014 and found none; none are used here.

## Dotpoint check

The ledger entry for **B7-IQ1-02** (Module 7, p 54, section "Causes of Infectious Disease", inquiry question "How are diseases transmitted?") reads: "investigate the work of Robert Koch and Louis Pasteur, to explain the causes and transmission of infectious diseases, including:". Its listed examples are "Koch’s postulates" and "Pasteur’s experiments on microbial contamination".

**The design's syllabus line, the YouTube draft and the inquiry question match the ledger exactly**, except for one character. The ledger's apostrophes are typographic (U+2019), not "mis-encoded" as the design says. The YouTube draft's straight apostrophes are acceptable. If a character-exact quote is wanted, use U+2019.

The ledger flags B7-IQ1-02 `depthStudyOrPractical: true`. The video models the secondary-source investigation of the two scientists' designs, which the design states correctly. The ledger's practical or investigation component should stay open for p02 and any depth-study entry (finding 9).

## Findings

| # | Severity | Exact quoted text | Problem | Exact replacement (about the same length) | Sources |
| --- | --- | --- | --- | --- | --- |
| 1 | should fix | Scene 9: "And for a disease that only infects humans, deliberately infecting a healthy person isn't ethical." Key note 5: "infecting healthy people is unethical." | **Absolute claim, contradicted by current practice.** Controlled human infection (challenge) studies deliberately infect consenting healthy volunteers under ethics approval. Examples include the UK SARS-CoV-2 challenge study (ethics approval February 2021) and long-running malaria, typhoid, cholera and influenza challenge models. Usually these use a treatable or attenuated strain. The true point is that deliberately infecting people to fulfil postulate 3 is rarely acceptable, especially for a severe, untreatable disease. | "And for a disease that only infects humans, deliberately infecting a healthy person is rarely ethical." Key note 5: "deliberately infecting healthy people is rarely ethical." | (searched) https://www.gov.uk/government/news/worlds-first-coronavirus-human-challenge-study-receives-ethics-approval-in-the-uk ; https://www.nuffieldbioethics.org/blog/how-ethically-challenging-are-challenge-trials ; https://cerclecoalition.org/?p=343 |
| 2 | should fix | Scene 9: "Some bacteria, like the one that causes leprosy, still can't be grown in a lab." | **Inaccurate as worded.** *M. leprae* has never been grown in cell-free (axenic) media. It is propagated in laboratories in mouse footpads and nine-banded armadillos. The postulate needs a culture of the microbe on its own. | "Some bacteria, like the one that causes leprosy, still can't be grown on their own in a lab." Tag: "leprosy bacterium: no culture on its own". | (searched) CDC https://www.cdc.gov/leprosy/health-care-workers/etiologic-agent.html ; 2025 review https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12708612/ |
| 3 | minor | Scene 7: "which then caused about one in seven deaths in Europe" | Koch's 24 March 1882 lecture stated that one in seven of all human beings dies of tuberculosis. His data were European, but the claim was general. The design's facts list already notes this is Koch's figure. | "which Koch said caused about one in seven of all deaths". Tag: "Koch: about 1 in 7 of all deaths". | (searched) https://www.pbs.org/newshour/health/march-24-1882-robert-koch-announces-his-discovery-of-the-cause-of-tuberculosis ; https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10063131/ (contemporary 1882 report: "one-seventh of the deaths of the human race") |
| 4 | minor | Scene 7 visual: mixed-colony petri dish, then an arrow to the serum tube | **Historically inaccurate step.** Koch inoculated heat-coagulated serum directly with material from tuberculous tissue. The slow-growing bacillus could not be isolated by picking colonies from a mixed plate. | See learning review finding 4: tissue field, then an inoculating loop, then the serum tube. | Koch 1882, *Berl Klin Wochenschr* 19:221 (translation in Brock, *Milestones in Microbiology*) (for Codex to open); (searched) https://historyrise.com/robert-koch-the-discoverer-of-the-tuberculosis-bacteria/ (coagulated serum medium) |
| 5 | minor | Key note 3: "Koch's postulates (tuberculosis, 1882):"; site error 9 ("decisive in 1884") | **Dating.** Koch announced the TB proof in 1882. The postulates were first written as explicit rules by Friedrich Loeffler in 1884, in his diphtheria paper, and stated by Koch in 1890. Neither date is wrong in its own sentence, but the note implies the postulates were set out in 1882. | "Koch's postulates (from his 1882 tuberculosis work):". Facts list: "written as rules by Loeffler (1884) and Koch (1890)". The narration gives only 1882 for the TB announcement and is correct. | (searched) Gradmann 2008 summary and Loeffler 1884 citation via https://embryo.asu.edu/pages/robert-koch-1843-1910 ; LibreTexts Koch's postulates https://bio.libretexts.org/Bookshelves/Microbiology/Book%3A_Microbiology_(Boundless)/10%3A_Epidemiology/10.1%3A_Principles_of_Epidemiology/10.1D%3A__Kochs_Postulates |
| 6 | minor | Site error 7: "Pasteur's published comparison centred on intact against broken or tilted swan necks; open, straight-necked comparisons are a common textbook reconstruction." Scene 4's straight-neck sentence. | **Withdraw as a site error.** Visionlearning's history of the experiment reports that Pasteur placed broth in straight-necked flasks open to the air. It also states that a figure in his 1861 memoir (Fig. 26) illustrates a straight-necked flask open to the atmosphere. The broken and tilted neck remain the best-known controls (Memorial University summary). The site's straight-neck control is defensible, so scene 4 may stay. Add "Boiled broth" (learning review finding 2) so the comparison is fair. | Scene 4: "Boiled broth in flasks with short, straight necks, open to falling dust, turned cloudy within days." Site error 7: remove from the list sent to Codex, or reword as "Optional: say the broken neck was Pasteur's decisive control; the straight-neck flask was a comparison." | (searched) https://www.visionlearning.com/en/library/Hidden/59//171 ; https://www.mun.ca/biology/scarr/4270_Pasteur_experiment.html |
| 7 | minor | Site error 4: "Koch's 1882 statement was that tuberculosis caused about one seventh of all deaths. Proposed: 'causing about one in seven deaths in Europe'." | **Not an error.** The site's "killing one in seven people" is close to Koch's own wording ("one in seven of all human beings dies of tuberculosis"). The proposed correction adds "in Europe", which Koch did not say. | Withdraw site error 4, or keep only a wording note: "Koch's words: one in seven of all human beings dies of tuberculosis." | As finding 3 |
| 8 | minor | Hook: "For centuries, many people thought those microbes simply sprang from the broth itself" | Microbes were first described by van Leeuwenhoek in the 1670s. Spontaneous generation of microbes was debated from about the 1740s (Needham) to the 1860s. Spontaneous generation in general is ancient (Aristotle). | "For a long time, many people thought those microbes simply sprang from the broth itself". | OpenStax Microbiology 3.1 (Needham, Spallanzani, Pasteur) (for Codex to open) |
| 9 | minor | Design Decisions: "This video covers both listed examples ... the video is the secondary-sourced investigation" | The dotpoint verb "investigate" and the ledger flag `depthStudyOrPractical: true` call for student investigation. An explainer models it but does not deliver it. | Add: "The ledger's investigation component stays open for p02 (microbial contamination practical) and any depth-study entry." | `bio-2017-y12.json` (B7-IQ1-02) |
| 10 | minor | Scene 4: "supporters of spontaneous generation argued that boiling or sealing a flask destroyed something in the air that life needed" | **Slightly compressed.** Needham argued that heating destroyed a "vegetative force" in the infusion. Later critics, including Pouchet's side, argued that sealed flasks excluded the fresh air life needed. The plain summary is acceptable, and the open neck answers both. | Optional: "argued that boiling or sealing a flask destroyed or shut out something in the air that life needed." (+15.) | OpenStax Microbiology 3.1 (for Codex to open) |
| 11 | minor | 11c stem: "Koalas in New South Wales are listed as an endangered species"; facts list: WHO TB deaths 2024 (not spoken) | **Time-sensitive, confirmed today.** The koala (combined Queensland, NSW and ACT populations) was uplisted from Vulnerable to Endangered under the EPBC Act from 12 February 2022. The NSW Threatened Species Scientific Committee's final determination lists *Phascolarctos cinereus* as Endangered under the NSW Biodiversity Conservation Act 2016 (2022). WHO's *Global Tuberculosis Report 2025* (released 12 November 2025) estimates 1.23 million TB deaths in 2024. | No change. Recheck both near recording. If a present-day hook line is added, use "tuberculosis still kills more than a million people a year". | (searched) https://www.environment.nsw.gov.au/sites/default/files/final-determination-phascolarctos-cinereus-endangered-species.pdf ; https://www.holdingredlich.com/koalas-classified-as-an-endangered-species-in-parts-of-eastern-australia ; https://www.cidrap.umn.edu/tuberculosis/who-cites-progress-against-tb-globally-warns-about-reduced-funding ; https://www.mlo-online.com/disease/news/55330031/whos-global-tuberculosis-report-2025-highlights-progress-and-challenges |

No blocker. Two should-fix findings (1 and 2). Findings 3 to 11 are wording, dating, history and ledger fixes.

## Facts confirmed (no change)

- **Swan-neck design.**
  - Pasteur boiled nutrient broth in flasks whose necks he had heated and drawn into S-shaped curves. The necks stayed open.
  - Dust and microbes settled in the bend, and the broth stayed clear. Breaking the neck (or tilting the flask so broth touched the bend) led to growth within days.
  - "Around 1860", "for months" and "within days" are correct and deliberately not over-precise.
  - The experiments ran 1859 to 1861. Pasteur's *Mémoire sur les corpuscules organisés qui existent dans l'atmosphère* was published in 1861 (*Annales des sciences naturelles, Zoologie*), with the full version in *Annales de chimie et de physique* in 1862.
  - (searched: https://www.mun.ca/biology/scarr/4270_Pasteur_experiment.html ; https://www.camillesourget.com/en/ouvrages/18252-pasteur-memoire-sur-les-corpuscules-rare-books-first-edition-antique-books-camille-sourget/)
- **Alhumbert Prize (1862) against the commission (1864 to 1865).**
  - The Académie des sciences announced the prize in January 1860. Pouchet withdrew in November 1862, and the prize went to Pasteur in 1862 (Wikipedia; Victorian Web; the HAL paper on Pouchet).
  - A second commission was set up on 4 January 1864. Pasteur gave his Sorbonne lecture on 7 April 1864. The Académie's decision against Pouchet is dated 20 February 1865 (Universalis).
  - One secondary source (Visionlearning) dates the prize to 1864; the weight of sources supports 1862.
  - **Site error 3 is real:** the site's "In 1862 an Académie des Sciences commission ruled" conflates the 1862 prize with the 1864 to 1865 commission.
  - (searched: https://en.wikipedia.org/wiki/Louis_Pasteur ; https://victorianweb.org/science/biology/bacteriology/pasteur.html ; https://halshs.archives-ouvertes.fr/halshs-00006160v1/file/Pouchet-EJS.pdf ; https://www.universalis.fr/encyclopedie/generation-spontanee-reperes-chronologiques/ ; https://en.wikipedia.org/wiki/F%C3%A9lix_Archim%C3%A8de_Pouchet)
- **Koch and tuberculosis.**
  - Lecture to the Berlin Physiological Society on 24 March 1882 (now World TB Day), published in *Berliner Klinische Wochenschrift* on 10 April 1882.
  - Staining used alkaline methylene blue with a vesuvin (Bismarck brown) counterstain. Bacilli were found in tuberculous tissue and not in non-tuberculous tissue.
  - Culture was on heat-coagulated (bovine or sheep) blood serum in sloped tubes, and colonies took weeks to appear because the bacillus divides about every 15 to 20 hours.
  - Guinea pigs inoculated with the culture developed tuberculosis, and the bacilli were recovered from them.
  - "German doctor" is correct.
  - (searched: https://www.dhm.de/lemo/bestand/objekt/robert-koch-die-aetiologie-der-tuberculose-1882 ; https://www.pbs.org/newshour/health/march-24-1882-robert-koch-announces-his-discovery-of-the-cause-of-tuberculosis ; https://historyrise.com/robert-koch-the-discoverer-of-the-tuberculosis-bacteria/)
- **Why all four.** Correct logic. Presence shows association, the microbe might be a secondary invader, inoculating a healthy host shows cause, and re-isolation confirms that it is the same agent.
- **Limits of the postulates.**
  - Viruses need living cells.
  - Some bacteria cannot be cultured: *M. leprae* (finding 2) and *Treponema pallidum*.
  - Asymptomatic carriers break postulate 1: *Salmonella* Typhi, *Vibrio cholerae*. Koch himself relaxed the "not in healthy hosts" condition after finding cholera carriers.
  - There are ethical limits on postulate 3 (finding 1).
  - Molecular (sequence-based) criteria exist (Fredricks and Relman, *Clin Microbiol Rev* 1996;9:18).
  - "Today, scientists often detect a microbe's DNA instead of growing it" is correct.
- **Germ theory definitions.**
  - Spontaneous generation: life from non-living matter.
  - Miasma: disease from bad air given off by rotting matter.
  - Germ theory as "infectious diseases are caused by microbes and other pathogens, and microbes come only from other microbes" combines germ theory with biogenesis, as the site does. This is acceptable at this level.
- **Attempt 1.** The data are hypothetical and labelled so. One sheep in five not developing disease is plausible (dose, susceptibility). The model answer correctly treats step 4 as not done and gives a qualified judgement.
- **Attempt 2.**
  - *Chlamydia pecorum* is an obligate intracellular bacterium. It causes keratoconjunctivitis, urinary tract disease (cystitis) and reproductive tract disease in koalas, and it is cultured only in host cell lines (for example McCoy cells), not on cell-free media.
  - Healthy koalas can carry it without signs, which the model correctly notes as an extra credit point.
  - The two givens map to steps 2 and 3. Crossing "Chlamydia is a virus" is apt.
  - (searched: https://wildlifehealthaustralia.com.au/Portals/0/ResourceCentre/FactSheets/Mammals/Chlamydia_in_koalas.pdf ; https://pmc.ncbi.nlm.nih.gov/articles/PMC6472425/ ; Polkinghorne, Hanger and Timms, *Vet Microbiol* 2013;165:214, for Codex to open)
- **Absolute words.**
  - "In every one ... he found" reports Koch's own finding. "Didn't find it in healthy tissue" is consistent with Koch's report.
  - "Microbes come only from other microbes" is the germ theory and biogenesis statement.
  - "Viruses can't be grown on their own" is true.
  - "Isn't ethical" and "can't be grown in a lab" are findings 1 and 2. No other absolute word is a problem.
- **Memory aids.** "Find it, grow it, give it, find it again" gives the correct order and content. "Air in, microbes trapped" is correct for the intact neck. The two-question contrast is correct.

## Logged site errors (each checked against the live page)

| # | Real? | Note |
| --- | --- | --- |
| 1 "published in 1859" | Real | The memoir was published in 1861 (and 1862). The page's own hook says 1859 to 1861. |
| 2 "11 swan-neck flask experiments", "18 months", "three days" | Unsourced (agree) | No primary source was found. "For months" and "within days" are the safe wording. |
| 3 "In 1862 an Académie des Sciences commission ruled" | Real | 1862 was the Alhumbert Prize; the commission was 1864 to 1865 (above). |
| 4 "killing one in seven people" | **Not an error** | Finding 7. |
| 5 "standing ovation" | Unsourced (agree) | Ehrlich's recollection describes stunned silence. |
| 6 "two more scientists, Pasteur and Koch" | Real | Pasteur is already the subject, so "two more" is wrong. |
| 7 straight-neck control | **Withdraw** | Finding 6. |
| 8 viroids "plant-only" | Minor convention only (agree, not logged) | |
| 9 "decisive in 1884" | Not an error (agree) | See finding 5 for dating. |

## Exam style

Both items are HSC Section II style. They use NESA verbs (assess, explain) with mark values (4 and 4), are tagged "HSC-style question, written for HSCScience", and give new contexts (a hypothetical sheep lung disease, koala chlamydia). A web search for these scenarios and wordings found no NESA or past-paper match (searched); the items are original.

## YouTube metadata

The dotpoint and both examples are quoted verbatim. "Trace Koch's four steps through his 1882 tuberculosis work" is correct. Prerequisite and next link match.

## Verdict

**Ready to voice after fixes 1 and 2** on science. Findings 3 to 11 are minor. The Codex error check remains as planned, especially the koala listing and the *M. leprae* culture status near recording. Site errors 4 and 7 should not be forwarded as errors.

## Resolution
