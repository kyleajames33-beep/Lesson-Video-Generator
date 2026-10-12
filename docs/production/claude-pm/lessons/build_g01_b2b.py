"""Build lesson.json and lesson.production-brief.json for G01 and B2b (run from repo root).

Scene ids are assigned in design order. Quoted lines ("> ...") are the narration with
**bold** cue markers stripped. The scriptReview stays pending until the Codex fact
check evidence file exists (checks/<lesson>-check.md).
"""
import io, re, json, os, sys, hashlib

HOLD_FRAMES = {'g01': 1350, 'b2b': 1200}  # G01 45 seconds, B2b 40 seconds
NOTES_LINE = 'Here are the key notes. Pause the video if you need more time to copy them.'
D = 'docs/production/claude-pm/'
E = 'explain'


def sha(p):
    return hashlib.sha256(open(p, 'rb').read()).hexdigest()


G01_ROWS = {
    'hook': ['reuse', 'C1 campfire and ash idea (painted plate if it fits, else coded flames fading to grey) with coded tree and heat and spread icons', 'Poses the fire versus tree puzzle and names the two Year 11 ideas the lesson needs', 'log / enthalpy / entropy',
             'Log burns to ash while smoke drifts up, a reverse arrow is crossed out, then a tree appears and the heat and spreading icons write on',
             E, 'Heading writes on; the log burns to ash with smoke particles; a pen arrow with "?" tries ash back to log and is crossed out on "log"; a coded tree with CO2 and H2O arrow appears on "tree"; a terracotta heat-wave icon writes on at "enthalpy" and an indigo scattering-dots icon at "entropy"',
             ['HandText write-on', 'particle smoke', 'Mark cross', 'DrawPath arrow'], 'Brief look at the ash and the two icons'],
    'non-equilibrium': ['adjust', 'C2 rate-bar pair thumbnail beside a single falling fire bar, with the term card', 'Contrasts a balanced flask with a fire that nothing balances and defines non-equilibrium system', 'balances / non-equilibrium system / opposite reasons',
                        'The matched C2 bars sit small with a teal tick while the fire bar falls to empty with no second bar rising, then two arrows split from the new term',
                        E, 'The fire bar falls to empty with no second bar; a pen ring circles the missing bar on "balances"; "non-equilibrium system" writes large with its plain meaning; two arrows split from the term on "opposite reasons"',
                        ['NumberTicker rate bar', 'ScribbleCircle', 'HandText write-on', 'DrawPath arrows'], 'Hold the two arrows to read'],
    'recall-heat-spread': ['adjust', 'Coded energy-level diagram with surroundings box, then a 20-particle crystal that scatters', 'Recalls enthalpy and entropy in plain words and keeps the heat term apart from the particle spreading term', 'surroundings / fly',
                           'A terracotta drop with heat arrows into the surroundings, then the diagram ghosts and a packed grid of indigo particles scatters, ending with two separate tags',
                           E, 'The energy-level diagram draws live with the terracotta drop and heat arrows into the surroundings box on "surroundings"; it ghosts and the 20 packed particles scatter across the frame on "fly" with no heat arrows; two tags (delta H term: heat leaving, entropy term: particles in the mixture) land side by side',
                           ['DrawPath energy levels', 'particle scatter', 'heat arrows', 'tag pop'], 'Hold the two tags'],
    'recall-delta-g': ['adjust', 'Large formula delta G = delta H - T delta S alone on the board with a tick tag', 'Recalls the Year 11 combination in one formula and defines spontaneous', 'T delta S / spontaneous',
                       'The formula writes on with the two terms underlined in their colours, then a tick and the gloss "runs on its own" appear',
                       E, 'The formula writes on large; delta H underlined terracotta and T delta S underlined indigo on "T delta S" with a "T in kelvin" chip; a teal tick and "negative delta G: runs on its own" appear; "spontaneous" writes beside the tick on its cue',
                       ['HandText write-on', 'ScribbleUnderline', 'chip pop'], 'Hold the formula alone'],
    'glucose': ['adjust', 'Board with short task, equation with phases, grouped givens, level diagram, particle spreading stage and staged substitution', 'Works the glucose example one stage at a time: heat, then spreading, then delta G', 'minus two thousand eight hundred and three / plus seventy-eight / twelve / two thousand eight hundred and eighty-one',
                'Givens appear on their spoken numbers, the heat stage then the spreading stage replace each other, and the substitution writes line by line to a boxed result',
                E, 'The task and phased equation write on; "delta H = -2803 kJ/mol" and "T delta S = +78 kJ/mol" appear on their numbers; stage 1 shows the long terracotta drop with heat arrows; stage 2 clears them and the crystal and six O2 break into 12 particles with the "7 particles to 12" chip; the substitution writes with a pen bracket and the -2881 result is boxed in dark ink on "eighty-one"; two arrows point down together on "push the same way"',
                ['HandText write-on', 'DrawPath energy levels', 'particle spreading', 'NumberTicker chip', 'pen bracket'], 'Hold the boxed result'],
    'how-strong': ['adjust', 'Glucose result kept large with a long arrow, a shrinking reverse arrow and a two-label calibration bar', 'Gives students a rough scale so a new delta G value can be judged', 'measured / rough guide',
                   'A long arrow runs to "all products" while a small reverse arrow shrinks to a dot, then the two-label bar appears',
                   E, 'The terracotta and indigo arrow runs down to "all products"; the reverse arrow shrinks to a dot on "measured"; the bar with "close to zero: a real mixture" (C2 flask thumbnail) and "hundreds below zero: essentially all products" appears on "rough guide" and stays',
                   ['DrawPath arrows', 'dot shrink', 'bar reveal', 'thumbnail pop'], 'Hold the bar on screen'],
    'heading-not-speed': ['adjust', 'Fire bar tagged non-equilibrium then static, compass arrow, coded sugar bowl and calendar clock', 'Joins the lesson to C1 and separates where a change is heading from how fast it gets there', 'non-equilibrium system / static / heading',
                          'The fire bar empties and its tag changes to static, a heading arrow appears, then a sugar bowl sits unchanged while a calendar flips',
                          E, 'The fire bar returns with "non-equilibrium"; on "gone" the bar empties and the tag changes to "static: both rates zero"; a compass arrow "where it ends up" appears on "heading"; the sugar bowl and calendar clock appear with "heading is not speed" and the bowl does not change',
                          ['NumberTicker rate bar', 'tag swap', 'icon pop', 'calendar flip'], 'Hold the unchanged bowl and clock'],
    'photo-reverse': ['adjust', 'Glucose board returned with the equation reversed, updated givens, level diagram climbing and particles gathering into a crystal', 'Shows every sign flipping, including the double negative, so photosynthesis cannot run on its own', 'flips / negative',
                      'A flip arrow reverses the equation, the givens change sign, the energy arrow climbs, and the substitution writes with the double negative ringed',
                      E, 'A pen flip arrow appears on "flips" and the equation reverses; the givens swap to +2803 and -78 (old values ghost); the level arrow climbs labelled "energy in (light)" with a light-ray icon; particles gather into a crystal with the "12 particles to 7" chip; a pen ring marks -78 on "negative", then "minus a negative adds" and the boxed +2881; a red cross lands over "runs on its own"',
                      ['pen flip arrow', 'DrawPath energy levels', 'particle gather', 'ScribbleCircle', 'Mark cross'], 'Hold the boxed +2881'],
    'photo-leaf': ['adjust', 'Coded leaf in sunlight with CO2 and O2 arrows, dashed open-system boundary and a separate respiration pair', 'Explains why a leaf can run an uphill change: open system with a constant light supply', 'open system / stops / respiration / constant light input',
                   'Rays and gas arrows move, then the rays fade and the photosynthesis arrows stop while a separate respiration pair appears beneath',
                   E, 'Yellow rays arrive, CO2 arrows go in and O2 arrows leave the leaf with a dashed boundary on "open system"; on "stops" the rays fade and the photosynthesis arrows freeze and grey out; a separate smaller respiration pair appears in another colour on "respiration"; a pen underline writes "light in = photosynthesis going"',
                   ['particle arrows', 'ray fade', 'dashed boundary', 'ScribbleUnderline'], 'Hold the underlined line'],
    'aid': ['new', 'Four-row sign table with fire and leaf icons and the handwritten memory aid', 'Gives a reusable aid for the cases where both terms agree and flags the disagreeing cases', 'agree / disagree',
            'Four table rows write on, rows one and two light up, rows three and four grey, then the aid writes on large',
            E, 'The sign table writes on row by row; row 1 (fire) and row 2 (leaf) light up, rows 3 and 4 grey with "work out delta G"; the aid writes on large with terracotta and indigo underlines and the tag "when both terms agree"',
            ['table row reveal', 'HandText write-on', 'ScribbleUnderline'], 'Short reading hold on the aid'],
    'attempt': ['new', 'New board with the hydrogen equation, sealed tube vignette, grouped givens, formula, small rough-guide bar and three numbered questions', 'Unseen mixed-sign transfer with every demand and supplied value visible', 'Pause',
                'Countdown ring runs through the answer-free thinking hold',
                E, 'The hydrogen equation, the sealed tube with drifting molecules and a slow calendar, the givens, the formula and bar, and the three numbered questions appear as named; the countdown ring starts after the narration',
                ['Countdown ring', 'Enter reveals'], 'Quiet answer-free thinking hold with countdown'],
    'feedback': ['adjust', 'Same board with line-by-line substitution, small level diagram, rough-guide bar, tube fast-forward and wrong-answer chips', 'Explains the answer, shows heat outweighing lost spreading, and corrects the likeliest slips', 'four hundred and seventy-four / nearly all water / fast',
                 'The substitution writes to a boxed -474, a heat bar beats a smaller spreading bar, a marker lands in the all-products label and the tube fills with water while the calendar flips',
                 E, 'The substitution writes line by line and the double negative is ringed; the -670 chip appears crossed as "sign slip"; the 572 and 98 bars show the net drop of 474; the marker lands on "hundreds below zero"; the tube molecules convert to water with the C2 flask thumbnail crossed out on "nearly all water"; the clock and calendar return on "fast"; wrong-answer chips appear crossed as named',
                 ['HandText write-on', 'ScribbleCircle', 'Mark cross', 'bar compare', 'particle convert', 'calendar flip'], 'Settle on the boxed answer'],
    'decision-rule': ['adjust', 'Three question cards with icons, two outcome arrows, speed warning chip and the C2 steady-state flask', 'Packs the lesson into a reusable three-question rule and hands off to disturbing an equilibrium', 'disturb',
                      'Three question cards write on one by one, two outcome arrows and a speed chip follow, then the steady flask shakes with a next chip',
                      E, 'Three question cards write on with heat wave, scattering dots and delta G icons; the arrows "very negative: runs to completion" and "very positive: needs energy fed in all the time" draw with fire and leaf icons; a "not the speed" chip with a clock appears; on "disturb" the steady-state flask shakes and the next-lesson chip appears',
                      ['HandText write-on', 'card slide-in', 'DrawPath arrows', 'flask shake'], 'Hold the three questions to read'],
    'key-notes': ['new', 'Key notes card with the memory aid in large writing', 'Essentials to copy into books', 'key notes',
                  'Notes appear then stay still for copying',
                  'hold', 'Six notes and the aid appear and lock', ['Enter reveals'], 'Quiet copy hold with pause invitation'],
}

B2B_ROWS = {
    'hook': ['reuse', 'Strawberry runner and flower plates (alpha) with the bee plate and coded pollen specks', 'Poses the question of whether pollen arriving means a seed has formed, and names the two plant routes', 'runner / Or it can flower / bee landing / Has the plant made a seed yet',
             'The runner stem draws on, the board pushes through to the flower, a bee flies in and shakes off pollen, then a question mark and empty seed outline hold still',
             E, 'The connecting stem draws on at "runner"; push-through to the flower plate on "Or it can flower"; the bee flies in and yellow pollen specks fall on the centre; a question mark and empty "seed?" outline appear and hold about two seconds before "Not yet"; the heading writes on',
             ['DrawPath stem', 'CameraStage push-through', 'particle specks', 'HandText write-on'], 'Hold on the question mark'],
    'male-side': ['new', 'Flower cut-away plate with coded pollen grain and stacked name key', 'Shows where the sperm-forming cells are made and introduces the part names one at a time', 'stamens / anthers / pollen grain / up here',
                  'The camera pushes into the stamens, names draw on and drop into the name key, and a pollen grain pops out of an anther',
                  E, 'The cut-away appears with "typical flower"; the camera pushes in on "stamens"; a scribble circle on "anthers" and a plain-cell pollen grain pops out; each name draws on with a leader line and drops into the stacked key; the STAMEN has MEN tag writes on; a pin lands on the anthers on "up here"',
                  ['CameraStage push', 'ScribbleCircle', 'leader line draw-on', 'name key stack', 'pin drop'], 'Hold the name key'],
    'female-side': ['new', 'Same flower cut-away with ovule close-up crossfade and persistent name key', 'Shows where the egg sits and sets the distance problem the pollen tube solves', 'stigma / style / ovary / egg cell / buried deep / can\'t swim',
                    'The camera travels down the carpel, names drop into the key, the ovule close-up shows the egg, and a dotted measure line links the two pins',
                    E, 'The camera follows the carpel on "stigma", "style", "ovary"; names draw on and join the key; the ovule close-up crossfades in with the egg dot lit on "egg cell"; a second pin lands on "buried deep"; a dotted red measure line and a crossed-out swimming sperm appear on "can\'t swim"',
                    ['CameraStage travel', 'leader line draw-on', 'plate crossfade', 'pin drop', 'Mark cross'], 'Hold the long measure line'],
    'pollination': ['new', 'Bee flight between two flower plates, grass and wind plate, water icon, then the cut-away with the name key', 'Defines pollination and shows it only delivers pollen, so it is not fertilisation', 'pollination / rubs off / wind / not fertilisation',
                    'The bee flies flower to flower and pollen drops on the stigma, carrier icons gain a carries-pollen tag, then a bracket shows pollen and egg still far apart',
                    E, 'The bee flies along a motion path with pollen specks and a few drop on the stigma on "rubs off"; a pollen cloud drifts from the grass plate on "wind" and a ripple icon appears for water; each carrier gets an amber "carries pollen" tag; back at the cut-away a bracket reads "still far apart" and a tick on arrival and cross on "= seed" appear on "not fertilisation"',
                    ['motion path', 'particle cloud', 'tag pop', 'bracket draw', 'Mark cross'], 'Hold the pollination = arrival doodle'],
    'pollen-tube': ['new', 'Cut-away with coded pollen tube path, chemical signal dots, sperm dots and pollen grain close-up', 'Explains how the tube solves the distance problem and carries sperm to the egg', 'takes in water / grows a thin tube / guided by chemical signals / the two sperm cells form / small opening',
                    'The grain swells, the tube draws down the style toward signal dots, two sperm dots form and travel inside it, and they spill out beside the egg',
                    E, 'Water droplets enter the grain and it swells; the tube draws down the style over about 8 seconds with the camera following the tip; faint signal dots drift from the ovule and the tip bends toward them; the plain cell enters the tube and splits into two sperm dots that travel along it; the tube enters the ovule opening and the sperm spill out beside the egg with a scribble circle; the "pollen tube" label draws on',
                    ['DrawPath tube', 'CameraStage follow', 'particle drift', 'cell split', 'ScribbleCircle'], 'Hold the sperm beside the egg'],
    'fertilisation': ['new', 'Ovule close-up with coded sperm dots, zygote circle, doubling cells and the sequence strip', 'Shows fertilisation as one sperm joining the egg and the zygote growing into an embryo', 'fertilisation / zygote / divides again and again / embryo',
                      'One sperm dot merges with the egg into a zygote circle, then it doubles to a tiny embryo while the land, tube, join strip builds at the bottom',
                      E, 'One sperm dot moves into the egg and merges into a circle labelled "zygote"; the "one set + one set = two sets" chip appears; the circle splits to two, four and a cluster that grows into the embryo outline; "embryo" draws on; the strip icons for land, tube and join land on their cue words',
                      ['particle merge', 'cell doubling', 'chip pop', 'DrawPath outline', 'sequence strip build'], 'Hold the embryo and the strip'],
    'seed-fruit': ['new', 'Aligned ovary and pod plates, then the bean seed cut-away with three leader lines', 'Shows the ovule becoming a seed and the ovary becoming a fruit, and what a seed holds', 'seed / fruit / pea pod',
                   'The ovary crossfades into an open pod with seeds, then the bean seed cut-away gains three leader lines',
                   E, 'The ovary with three ovules crossfades to the pod with three seeds on "becomes a seed" and "grows into a fruit"; "pea pod", "fruit" and "seeds inside" draw on with leader lines; the bean seed appears with leader lines for embryo, food store (cotyledons) and seed coat; "seed" is added to the strip',
                   ['plate crossfade', 'leader line draw-on', 'HandText write-on', 'sequence strip build'], 'Hold the labelled bean seed'],
    'dispersal': ['new', 'Bean seed anchor, carrier icons in a second colour, condition chips and the bean seedling plate', 'Separates seed dispersal from pollination and explains what a seed waits for before growing', 'carry seeds away / seed dispersal / water, oxygen and a suitable temperature / germinates',
                  'Carrier icons return tagged carries seeds, three condition chips draw on, and the seedling fades in over the seed with roots down and leaves up',
                  E, 'The bean seed shrinks to the side; wind, water and animal icons return in blue-green with "carries seeds" and "seed dispersal" writes on with a tick and cross against the amber pollination tags; water drop, oxygen bubbles and thermometer chips draw on; the seedling fades in on "germinates" with roots drawing down and leaves lifting',
                  ['icon pop', 'tag pop', 'DrawPath chips', 'plate crossfade', 'growth reveal'], 'Hold the seedling'],
    'vegetative': ['reuse', 'Strawberry runner recall, then onion bulb, potato tuber and mint cutting plates in turn', 'Names vegetative propagation as the asexual plant route with concrete examples', 'vegetative propagation / onion bulb / potato tuber / cutting / clone',
                   'The runner stem draws on, three plates appear one at a time with the new part circled, then the plate duplicates into a clone pair',
                   E, 'The runner stem draws on as a recall; push-through to the onion, potato and mint plates one at a time with a scribble circle on the new bulb, sprouting eye and new roots; a "piece of parent, roots and leaves, new plant" strip runs under each; sperm and egg dots cross out; the plate duplicates on "clone"; a bee icon and wind line cross out',
                   ['DrawPath stem', 'CameraStage push-through', 'ScribbleCircle', 'plate duplicate', 'Mark cross'], 'Hold the clone pair'],
    'seeds-better': ['reuse', 'Split board with the B1 clone row with disease and varied seedlings plates', 'Matches each route to conditions, retrieving B1 reasoning about clones and variety', 'steady paddock / new disease / reach new places',
                     'The board splits into a healthy paddock of runners and a diseased clone row, then varied seedlings show a few survivors and a seed arcs over a fence',
                     E, 'A split board writes on; the paddock side shows runners spreading with a tick; the disease side shows every clone plant spotted, then the varied seedlings with survivors circled; a seed icon arcs over a fence on "reach new places"; "alike and close" and "varied and far" tags land',
                     ['split board', 'DrawPath runners', 'ScribbleCircle', 'arc motion', 'tag pop'], 'Hold the two tags'],
    'worked-outline': ['new', 'Question card and four answer cards with sequence icons and marking brackets', 'Models how to build an outline answer one ordered sentence at a time', 'outline / First / Then / Next / Finally',
                       'The question card writes on, then four answer cards land on their sequence words with brackets, earlier cards shrinking to the rail',
                       E, 'The question writes on and "outline" is underlined with the margin note; the four cards land on "First", "Then", "Next" and "Finally" with sequence words underlined and key terms highlighted; each carries its strip icon; brackets for the three marking groups appear as each card lands; earlier cards shrink to the top rail',
                       ['HandText write-on', 'card slide-in', 'ScribbleUnderline', 'bracket draw', 'chip shrink'], 'Hold the four cards to read'],
    'attempt': ['new', 'Three numbered vignettes: bagged flower, paintbrush on a stigma with part-way tubes, potato field beside seedling row', 'Unseen transfer with every condition visible, including that the bagged flowers cannot self-pollinate', 'Pause',
                'Countdown ring runs through the answer-free thinking hold',
                E, 'The three numbered vignettes appear as each situation is named; the conditions stay on the board; the countdown ring starts after the narration',
                ['Countdown ring', 'Enter reveals'], 'Quiet answer-free thinking hold with countdown'],
    'feedback': ['adjust', 'Same three vignettes with verdict stamps, sequence strip states and clone and seedling rows', 'Explains each answer and names the knock-on, arrival-versus-joining and clones-worse slips', 'pollination failed / not yet / clones',
                 'Each vignette gets a verdict stamp and one-line card, with the strip showing which icons never start, which are lit, and the diseased clone row beside survivors',
                 E, 'Vignette one crosses out "land" with the bag and greys the later icons, then a knock-on arrow from "join" appears; vignette two lights "land" and "tube" with the tip short of the ovule and the verdict "not yet"; vignette three shows the spotted clone row beside circled survivors; amber doodles mark each trap',
                 ['stamp pop', 'sequence strip states', 'Mark cross', 'ScribbleCircle'], 'Settle on all three verdicts'],
    'memory': ['reuse', 'Land, tube, join, seed strip written large with the stamen tag and next-lesson chip', 'Gives a reusable sequence aid and hands off to single-celled organisms', 'Pollination / Fertilisation / land, tube, join, seed / Next',
               'The four icons write on in a row with arrival and joining labels, the stamen tag returns, then the next chip with three cell icons appears',
               E, 'The strip writes on large with "arrival" under land and "joining" under join; the STAMEN has MEN tag returns beside the stamen; the next-lesson chip appears with a budding yeast, a splitting bacterium and a protist outline',
               ['HandText write-on', 'icon pop', 'chip pop'], 'Hold the strip'],
    'key-notes': ['new', 'Key notes card with the memory aid in large writing', 'Essentials to copy into books', 'key notes',
                  'Notes appear then stay still for copying',
                  'hold', 'Five notes and the aid appear and lock', ['Enter reveals'], 'Quiet copy hold with pause invitation'],
}

LESSONS = {
    'g01': {
        'design': D + 'lessons/chem-m5-g01.md',
        'meta': {'title': 'Non-equilibrium systems, enthalpy and entropy', 'subtitle': 'Why does a fire burn all the way to ash, when a tree can build wood again?', 'subject': 'Chemistry', 'yearLevel': 12, 'module': 5, 'lesson': 3,
                 'lessonIntent': 'Explain why combustion and photosynthesis are non-equilibrium systems using the signs of delta H and entropy change, read the sign of delta G, and keep favourability separate from speed.'},
        'ids': ['hook', 'non-equilibrium', 'recall-heat-spread', 'recall-delta-g', 'glucose', 'how-strong', 'heading-not-speed', 'photo-reverse', 'photo-leaf', 'aid', 'attempt', 'feedback', 'decision-rule', 'key-notes'],
        'progression': {
            'prerequisiteKnowledge': 'C1 and C2: reversible reactions and dynamic equilibrium, rates and amounts, a flask settling into a steady mixture. Year 11: exothermic and endothermic, entropy as spread of particles and energy, delta G = delta H - T delta S with negative delta G meaning spontaneous (recalled in scene 3b).',
            'startsWith': 'A log burning to ash, set against a tree building sugar and wood from carbon dioxide and water.',
            'stopsAfter': 'Explaining why combustion and photosynthesis are non-equilibrium systems using the signs of delta H and entropy change, reading the sign of delta G, and keeping favourability separate from speed.',
            'nextLesson': 'C3: what a flask already at equilibrium does when it is disturbed (concentration and temperature).'},
        'teaching': {
            'task': 'Explain why a fire runs all the way to ash while photosynthesis cannot run on its own, using enthalpy, entropy and delta G, and predict a new combustion case.',
            'causalExplanation': 'Giving out heat (negative delta H) and spreading out (more entropy) each favour a change; delta G combines them. Burning glucose has both terms pushing the same way, so delta G is hugely negative and the reverse is too slight to measure, so it runs essentially to completion. Photosynthesis is the reverse, so every sign flips and delta G is hugely positive; a leaf manages only because it is an open system with continuous light. Delta G says where a change is heading, never how fast.',
            'conversationalApproach': 'One question (fire versus tree), the C2 flask recalled in one line, a staged worked example with the numbers in groups, a calibration bar so students can judge new values, a speed warning with a sugar bowl, and an unseen hydrogen case with a sealed tube.',
            'openingDecision': 'Why does a fire run all the way one way, while a tree can build the other way?',
            'understandingCheck': 'Work out delta G for hydrogen burning (delta H -572 kJ, T delta S -98 kJ), judge whether it ends as a mixture or nearly all products, and explain why a sealed tube that has not reacted does not contradict that.',
            'curriculumScope': 'Explain why combustion and photosynthesis are non-equilibrium systems in terms of enthalpy and entropy changes (Module 5). Delta G is recalled from Year 11 as a tool. K, Q, delta G = 0 at equilibrium, the delta G to K link, activation energy and catalysts are deferred.'},
        'design_block': {
            'renderer': 'src/explainer/ExplainerVideo.tsx',
            'visualSystem': 'Explainer engine: warm paper stage, handwritten Caveat headings, amber doodle layer, coded energy-level diagrams, particle spreading, rate bars and a staged worked-example board. Colour key for this video: heat terracotta, spreading indigo, delta G dark ink, positive values on a warm tag and negative on a cool tag.',
            'transitionPlan': 'Fire bar and C2 bar pair cut to the term card; the energy-level diagram ghosts as the particles scatter; the worked-example board is reused with every sign flipped for photosynthesis; the board cuts to the leaf and back; the attempt board replaces the aids; the steady flask returns at the end; scene crossfades with settle.'},
        'rows': G01_ROWS,
    },
    'b2b': {
        'design': D + 'lessons/bio-m5-b02b.md',
        'meta': {'title': 'Reproduction in flowering plants', 'subtitle': 'A bee brushes pollen onto a flower. Has the plant made a seed yet?', 'subject': 'Biology', 'yearLevel': 12, 'module': 5, 'lesson': 3,
                 'lessonIntent': 'Sequence pollination to seed with the pollen tube explained, separate pollination from fertilisation, name vegetative propagation as the asexual plant route, and match each route to conditions in a short answer.'},
        'ids': ['hook', 'male-side', 'female-side', 'pollination', 'pollen-tube', 'fertilisation', 'seed-fruit', 'dispersal', 'vegetative', 'seeds-better', 'worked-outline', 'attempt', 'feedback', 'memory', 'key-notes'],
        'progression': {
            'prerequisiteKnowledge': 'B1: gametes (sperm, egg) join in sexual reproduction, copies without joining are asexual, a clone and the conditions favouring clones or variety. B2a: fertilisation and zygote. Roots take up water and leaves make food in light.',
            'startsWith': 'A gardener with one strawberry plant, a runner, a flower and a bee brushing off pollen.',
            'stopsAfter': 'Sequencing pollination to seed with the pollen tube explained, separating pollination from fertilisation, naming vegetative propagation as the asexual plant route, and matching each to conditions in a short answer.',
            'nextLesson': 'B2c: reproduction without flowers or seeds: yeast, bacteria and protists.'},
        'teaching': {
            'task': 'Outline how a flowering plant makes a seed from pollination to seed formation, and say when seeds suit better than vegetative propagation.',
            'causalExplanation': 'The sperm-forming cells are in the pollen and the egg is deep in the ovary, and plant sperm cannot swim, so pollination only delivers pollen; the pollen tube grows down the style, guided by chemical signals, carrying sperm to the egg, where fertilisation makes a zygote that becomes an embryo; the ovule becomes a seed and the ovary a fruit. Vegetative propagation makes clones without sperm or egg, so runners are fast and alike while seeds are varied and travel.',
            'conversationalApproach': 'Opens with a bee brushing pollen onto a strawberry flower and asks whether a seed exists yet, builds the journey with a persistent name key and a land, tube, join, seed strip, then builds an outline answer on screen one sentence at a time.',
            'openingDecision': 'A bee brushes pollen onto a flower. Has the plant made a seed yet, and what has to happen before it does?',
            'understandingCheck': 'Say which step failed when bagged flowers make no seed, whether fertilisation has happened when tubes are part-way down the style, and why a potato field grown from tubers is at more risk from a new disease.',
            'curriculumScope': 'Describe the mechanisms of reproduction in flowering plants and vegetative propagation (BIO12-12, Module 5). Meiosis, haploid and diploid, self- and cross-pollination, double fertilisation, and fungi, bacteria and protists (B2c) are deferred.'},
        'design_block': {
            'renderer': 'src/explainer/ExplainerVideo.tsx',
            'visualSystem': 'Explainer engine: warm paper stage, handwritten Caveat headings, amber doodle layer, painted flower and plant plates with a coded pollen tube path, sperm dots, a persistent name key, a land, tube, join, seed strip and answer cards.',
            'transitionPlan': 'Push-through from the runner to the flower; the camera pushes into the stamens then travels down the carpel; the bee flies between flowers; the camera follows the growing tube; crossfade from ovary to pod and from seed to seedling; plates change one plant at a time; the board splits for the conditions comparison; scene crossfade with settle.'},
        'rows': B2B_ROWS,
    },
}


def build(key):
    cfg = LESSONS[key]
    s = io.open(cfg['design'], encoding='utf8').read()
    parts = re.split(r'^### \d+[ab]?\. ', s, flags=re.M)[1:]
    assert len(parts) == len(cfg['ids']), (key, len(parts))
    scenes = []
    for sid, p in zip(cfg['ids'], parts):
        p = re.split(r'^## |^# ', p, flags=re.M)[0]
        quote = ' '.join(l[2:].strip() for l in p.split('\n') if l.startswith('> '))
        quote = re.sub(r'\*\*', '', quote).strip()
        if sid == 'key-notes':
            quote = NOTES_LINE
        assert quote and '—' not in quote and '*' not in quote, (key, sid)
        sc = {'id': sid, 'type': 'concept', 'durationInFrames': 300, 'voiceover': {'text': quote}}
        if sid == 'attempt':
            sc['responseHold'] = {'startFrame': 0, 'endFrame': HOLD_FRAMES[key]}
        scenes.append(sc)
    lesson = {**cfg['meta'], 'fps': 30, 'width': 1920, 'height': 1080, 'introDurationInFrames': 0, 'productionRole': 'production-draft', 'scenes': scenes}
    base = f'{D}lessons/{key}/'
    os.makedirs(base, exist_ok=True)
    lp = base + 'lesson.json'
    io.open(lp, 'w', encoding='utf8', newline='\n').write(json.dumps(lesson, ensure_ascii=False, indent=2) + '\n')

    brief = {'schemaVersion': 4, 'source': {'lessonPath': lp, 'lessonSha256': sha(lp)},
             'progression': {'planPath': 'docs/production/course-progression-plan-2026-10-09.md', **cfg['progression']},
             'researchReferences': ['docs/research/hsc-video-production-standard-2026-10-02.md', 'docs/production/teaching-templates.md', 'docs/animation-planning.md', 'docs/production/motion-design-standard.md', D + 'teaching-playbook.md', cfg['design']],
             'teaching': cfg['teaching'], 'design': cfg['design_block'], 'scenes': []}
    for sid in cfg['ids']:
        r = cfg['rows'][sid]
        brief['scenes'].append({'sceneId': sid, 'visualDecision': r[0], 'visualReference': r[1], 'teachingReason': r[2], 'narrationCue': r[3], 'motionPurpose': r[4],
                                'motionRole': r[5], 'onScreenChange': r[6], 'motionTools': r[7], 'holdPurpose': r[8]})
    lr = f'{D}checks/{key}-learning-review.md'
    chk = f'{D}checks/{key}-check.md'
    brief['studentLearningReview'] = {'status': 'pass', 'reviewer': 'Independent Claude Sonnet student-learning reviewer (AI source review, revision 3 pass; findings resolved in revision 5)', 'evidence': {'path': lr, 'sha256': sha(lr)}}
    if os.path.exists(chk):
        brief['scriptReview'] = {'status': 'pass', 'reviewer': 'Codex fact check (science, syllabus, copy); findings applied by Claude', 'evidence': {'path': chk, 'sha256': sha(chk)}}
    else:
        brief['scriptReview'] = {'status': 'pending', 'reviewer': '', 'evidence': None}
    brief['voicedPreview'] = {'status': 'pending', 'reviewer': '', 'mode': '', 'inputSnapshotPath': '', 'evidence': None,
                              'studentLearningReview': {'status': 'pending', 'reviewer': '', 'evidence': None},
                              'humanListening': {'status': 'pending', 'reviewer': '', 'mode': 'human-listening', 'evidence': None}}
    brief['limitation'] = 'Pending scaffold, not approval. Fill the teaching and scene decisions before recording; review the exact voiced revision before a full export.'
    io.open(base + 'lesson.production-brief.json', 'w', encoding='utf8', newline='\n').write(json.dumps(brief, ensure_ascii=False, indent=2) + '\n')
    chars = sum(len(x['voiceover']['text']) for x in scenes)
    print(key, [x['id'] for x in scenes], chars, 'chars', sum(len(x['voiceover']['text'].split()) for x in scenes), 'words')


for k in (sys.argv[1:] or LESSONS):
    build(k)
