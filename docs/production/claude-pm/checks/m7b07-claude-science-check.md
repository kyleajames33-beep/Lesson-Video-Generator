# m7b07 science check (Claude): how do B cells recognise and target an antigen?

Checked on 22 October 2026 by an independent reviewer who did not author the design. Input: `../lessons/bio-m7-b07.md` (Revision 1, 22 Oct).

**Method.** I checked every narration line, the on-screen text, both attempts and their model answers, the feedback, the key notes, the memory aids, the logged site errors and the YouTube draft against standard texts (Janeway, *Immunobiology*; Campbell Biology) and the sources below. Sources marked (searched) were found by web search in this session. Sources marked "for Codex to open" are standard references not opened here. I compared the syllabus wording character for character against `docs/production/programme/syllabus/bio-2017-y12.json` by script. I searched the narration for the absolute words "every", "all", "always", "never", "only", "no", "can't", "most", "any" and "must" and checked each hit. I checked each logged site error against the live page (`C:/Users/kygs/hscscience/subjects/biology/year12/module7/lesson11.sa.html`), searched by exact phrase after stripping tags. No renders and no audio. I searched the design for U+2014 and found none; none are used here.

## Dotpoint check

- **B7-IQ3-01** (p 54, section "Immunity", inquiry question "How does the human immune system respond to exposure to a pathogen?"): "investigate and model the innate and adaptive immune systems in the human body (ACSBL119)".
- **Match.** The string appears verbatim in the Decisions and the YouTube draft (script check), with the correct inquiry question. This is the only action the route assigns to bio-m7-b07.
- **Note (no change).** B7-IQ3-02 ("explain how the immune system responds after primary exposure to a pathogen, including innate and acquired immunity") is mapped by the route to bio-m7-b09. This video teaches much of the primary humoral response. Leave the blurb as is; the coverage ledger may record b07 as contributing.

## Findings

| # | Severity | Exact quoted text | Problem | Exact replacement (about the same length) | Sources |
| --- | --- | --- | --- | --- | --- |
| 1 | minor | Scene 8: "Most cells in the clone become **plasma cells**." Note 4: "Most become plasma cells". | Not a fixed ratio. Activated B cells become short-lived plasma cells, enter germinal centres (and later become memory cells or long-lived plasma cells), or become memory cells; the balance varies with the antigen and the stage of the response. "Many" is safe; "most" is a common textbook simplification but not needed. | "Many cells in the clone become **plasma cells**." Note 4: "Many become plasma cells". | Janeway, *Immunobiology*, ch. 10 "The humoral immune response" (NCBI Bookshelf, for Codex to open) |
| 2 | minor | Scene 3: "And a receptor doesn't grab a whole antigen, just one small part of it, which has a particular shape." | Correct (an epitope on the antigen), but the wording can suggest the antigen is broken up before binding. B cell receptors bind epitopes on intact antigen; processing into fragments is for presentation to helper T cells. | "And a receptor doesn't fit the whole antigen, just one small part of its surface, which has a particular shape." | (searched) Roozendaal et al., *Immunity* 2009: large antigens are caught by lymph node sinus macrophages and handed intact to follicular B cells; small ones reach follicles through conduits https://pubmed.ncbi.nlm.nih.gov/19185517/ |
| 3 | minor | Scene 5: "you already have millions of B cells, with millions of different receptor shapes." | True as a lower bound but very conservative for the cell count: an adult has tens of billions of B cells, and the naive repertoire holds a vast number of distinct receptors. Optional. | Optional: "you already have billions of B cells, with millions of different receptor shapes." (+1.) The scene 5 grey tag can stay "millions of shapes, before any infection". | Janeway ch. 4 and 5 (repertoire size, for Codex to open) |
| 4 | minor | Scene 4: "Its stem is the same in every antibody of a type." | Accurate for a class (isotype), but "type" is undefined and "every" invites the allotype exception. | "Its stem is the same in many different antibodies." | Janeway ch. 4 (antibody structure, for Codex to open) |
| 5 | minor | 13a model: "Antigens on bacterium A were bound by the few B cells whose receptors fitted them". | Sound. A strong answer may also say why killed cells still work: their surface antigens are intact. Optional for the marker notes only. | Add to the model: "Killed cells still carry their surface antigens." | Standard serology (agglutination with immune serum) |
| 6 | minor | Not logged. L11 Q1 model: "Each B cell has a unique B cell receptor (BCR) that can bind only one specific antigen"; L11 links: "the framework behind every vaccine". | (a) One receptor shape can bind similar epitopes on different antigens (cross-reactivity); "only one" is absolute. (b) "every vaccine" is absolute. | Add as site errors 10 and 11 for Codex: "Each B cell carries receptors of one binding shape, which fits one epitope best"; "the framework behind how vaccines work". | Janeway ch. 4 (cross-reactivity, for Codex to open) |

No blocker. No should-fix science findings (the two should-fix items in the learning review are teaching gaps, not errors). Six minor (1 to 6).

## Facts confirmed (no change)

- **Burnet (hook).** Frank Macfarlane Burnet, Walter and Eliza Hall Institute, Melbourne, proposed the clonal selection theory in 1957 (*Australian Journal of Science*); Talmage proposed a similar idea the same year. "The right cells already exist before the infection, and the infection picks them out" is a fair plain statement. The hook rightly does not mention the Nobel Prize. (searched) WEHI https://www.wehi.edu.au/about/history/burnet-nobel-prize/
- **1960 Nobel Prize.** Shared by Burnet and Medawar "for discovery of acquired immunological tolerance", not for clonal selection (site error 1 is real). (searched) https://www.nobelprize.org/prizes/medicine/1960/summary/
- **BCR is membrane-bound antibody (scene 4).** The B cell receptor is a membrane immunoglobulin with a signalling complex (Igα/Igβ). Y shape, two identical binding sites at the arm tips (variable regions), stem in the constant region. One antibody can bind two copies of the same epitope. Correct.
- **One cell, one shape; diversity by gene rearrangement (scene 5).** Each developing B cell randomly joins V, D and J gene segments (with extra variation at the joins) in the bone marrow, and each cell expresses one receptor specificity (allelic exclusion). "Shuffles pieces of its receptor genes at random" and the three-groups-to-one-bar diagram are pitched at a suitable level: they explain why shapes are many and pre-made, without naming segments or enzymes. Somatic hypermutation is rightly kept in author notes.
- **B cells bind whole antigen (scenes 2, 6, 11).** B cells in follicles bind intact antigen (free, on pathogens, or held on sinus macrophages and follicular dendritic cells); they then present fragments to helper T cells. The design's chain (dendritic cells show pieces to T cells; bacteria and molecules drain to the node, where B cells bind them) is correct. (searched) https://pubmed.ncbi.nlm.nih.gov/19185517/
- **Helper T cell help (scene 6).** Most protein antigens need T cell help (linked recognition); repetitive polysaccharides (type 2 T-independent antigens such as capsular polysaccharides) and some microbial products can activate B cells without it, so "Usually" is right. "A helper T cell that has recognised the same pathogen" is correct (the learning review's replacement keeps this). (searched) T-independent antigen overview https://en.wikipedia.org/wiki/T_independent_antigen_(TI) ; PMC review of TI-1 and TI-2 antigens https://pmc.ncbi.nlm.nih.gov/articles/PMC2118207 ; https://pmc.ncbi.nlm.nih.gov/articles/PMC116555
- **Several clones (scene 6).** "Only the few whose receptors fit one of those shapes" correctly allows a polyclonal response (site error 2).
- **Clonal expansion and timing (scene 7, 13c).** Repeated division over several days into thousands of cells per clone; in a primary response, specific antibody is usually detectable after about a week (IgM first). The card's "about 7 to 10 days" and narration's "a week or more" are acceptable at this level.
- **Plasma cells (scene 8).** Extensive rough ER and Golgi; secretion "thousands of antibody molecules every second" is correctly hedged (common teaching figure about 2,000 per second; reviews say "some thousands"; one 2023 IgG study reports over 10,000). Secreted antibody has the selected binding site. (searched) https://en.wikipedia.org/wiki/Plasma_cell ; UCLA bioengineering 2023 https://www.bioeng.ucla.edu/?p=62578
- **Memory B cells (scene 8).** "Stay in the body long after the infection" is correct; their action is left to b09.
- **Antibody actions (scene 9).** Neutralisation (covering adhesins and toxins), agglutination (two arms cross-link cells), opsonisation (phagocyte Fc receptors bind the stem); complement as a screen tag. "Antibodies don't kill bacteria by themselves" is correct (killing is by phagocytes or complement that antibodies recruit).
- **Specificity (scene 10).** "Usually isn't bound" correctly allows cross-reactivity.
- **Secondary response timing.** This video makes no secondary timing claim (moved to b09). Site error 5 is real: the page says "1–3 days to peak" while its own data table has a second exposure on day 60 and the peak on day 67 (7 days). Secondary antibody rises sooner and peaks sooner and higher than the primary; the design's proposed wording ("rises within days and peaks sooner than the primary response") is correct. For b09 to carry.
- **"Antigen = antibody generator" (scene 3 screen gloss).** The word was coined in French (*antigène*) in 1899, credited to László Detre; dictionaries derive it as "anti(body)" plus "-gen" (producer), and a later reported explanation is a contraction of "antisomatogen". The gloss is the standard dictionary derivation and works as a memory hook. Keep it grey and unspoken, as designed. (searched) Etymonline https://www.etymonline.com/word/antigen ; Merriam-Webster https://www.merriam-webster.com/dictionary/Antigenic ; Detre https://en.wikipedia.org/wiki/L%C3%A1szl%C3%B3_Detre_(microbiologist)
- **Shape model (doubt a).** The notched tips are labelled as a model, and scene 3 shows three kinds of antigen on one bacterium, so the model does not teach "one antigen per pathogen". Acceptable. It does imply one epitope per antigen; that is a harmless simplification here.
- **Attempt 1.** Agglutination of bacteria by immune serum (classic serology); serum has antibodies and no cells; two weeks is enough for a primary response in a mouse. Model correct.
- **Attempt 2.** Selection rather than instruction; delay from rarity, activation and expansion. Model correct.
- **Memory aids.** "Clonal selection: the name is the process" is sound with its stated limits. "What antibodies actually do" (block, clump, coat; complement on screen) is sound.
- **Absolute words.** "never met before" (true for the case), "every antibody of a type" (finding 4), "every cell in it has the same receptor shape" (true at HSC level; hypermutation in author notes), "all the receptors have the same shape" (true), "Only the few" (correct), "can't work" (neutralised, fine), "Most will never meet anything they fit" (hedged), "Most cells in the clone" (finding 1), "They must be selected" (true). Only findings 1 and 4 flagged.

## Logged site errors (each checked against the live page)

| # | Real? | Note |
| --- | --- | --- |
| 1 Nobel Prize for clonal selection | Real | "Burnet's theory won the 1960 Nobel Prize" and "vindicated by the 1960 Nobel Prize" are both on the page. |
| 2 "only one matches"; "Only the clone whose receptor matches" | Real | Both on the page (Activity 1 and the multiple-choice item). |
| 3 Antigen "presented on MHC II by a dendritic cell or macrophage" to B cells | Real | In the Q1 model, the Explain model's linked pair 1 and Activity 1 item 1. |
| 4 "B cells cannot fully activate without" T help; two signals "prevents" self-reaction | Real | Both on the page. |
| 5 "explained entirely by memory B cells"; "1–3 days to peak" | Real | Both on the page; the page's own table peaks 7 days after re-exposure (day 60 to 67). |
| 6 Antigen definition against "Self-antigen"; epitope as "A particular amino acid sequence" | Real | Both on the page. |
| 7 "the constant (Fc) region sets the antibody's class" | Real | On the page. |
| 8 "short-lived antibody factories"; "The plasma cells died within weeks" | Real | Both on the page. |
| 9 "A single activated B cell can produce up to 2,000 antibody molecules per second" | Real | On the page. |

## Exam style

Both items are HSC Section II style: NESA verbs ("explain", "evaluate") with mark values (4 and 3), the tag "HSC-style question, written for HSCScience", and hypothetical contexts. Neither copies a NESA item: the two-tube serum test is an original stem built on classic agglutination, and the "design" claim is the site's own misconception written as an evaluate item. The 13c model gives a judgement with reasons, which "evaluate" needs (see learning review finding 6 for the spoken verdict).

## YouTube metadata

Dotpoint quoted verbatim with the correct inquiry question; title 85 characters by script. The description makes no claim beyond the narration.

## Verdict

**Ready to voice on science** after the optional minor fixes; no blocker and no should-fix error. Apply the learning review's two should-fix items before voicing.

## Resolution

The design author resolved these findings in Revision 2 of `../lessons/bio-m7-b07.md` (22 Oct). Every finding is applied, including the optional ones; none is declined.

| # | Resolution |
| --- | --- |
| 1 | Applied. "Many cells in the clone become **plasma cells**"; key note 4: "Many become plasma cells"; 13a model: "Many cells of these clones". |
| 2 | Applied. Scene 3: "And a receptor doesn't fit the whole antigen, just one small part of its surface, which has a particular shape." |
| 3 | Applied (optional). Scene 5: "you already have billions of B cells, with millions of different receptor shapes." The grey tag stays "millions of shapes, before any infection". |
| 4 | Applied. Scene 4: "Its stem is the same in many different antibodies." |
| 5 | Applied (marker notes only). The 13a model adds "killed cells still carry their surface antigens". |
| 6 | Applied. Logged as site error 10 (L11 Q1: BCR "can bind only one specific antigen"; proposed "Each B cell carries receptors of one binding shape, which fits one epitope best") and site error 11 ("the framework behind every vaccine"; proposed "the framework behind how vaccines work"). The Codex check list now says site errors 1 to 11. |

The learning review's two should-fix items are also applied: the blood carries antibodies to the infection, and the helper T cell is linked to b06's dendritic cells. The facts list records both. Narration recount: 5,697 characters, about 554 s. Status: needs the Codex error check before voicing.
