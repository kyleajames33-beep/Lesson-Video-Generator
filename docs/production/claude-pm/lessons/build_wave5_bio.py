"""Build lesson.json and lesson.production-brief.json for the wave 5 Biology designs (run from repo root).

Same method as build_wave4.py (helpers and build() copied verbatim). Builds b3b, b4, b5a and b5b when their
design Status line says "ready to voice". Optional arguments name the lesson keys to build.
    python docs/production/claude-pm/lessons/build_wave5_bio.py
"""
import io, re, json, os, sys, hashlib

NOTES_LINE = 'Here are the key notes. Pause the video if you need more time to copy them.'
D = 'docs/production/claude-pm/'
E = 'explain'
H = 'hold'
FPS = 30
CHECK_REVIEWER = 'Claude science check (web-sourced), findings resolved; Codex check pending before render'
LEARN_REVIEWER = 'Independent Claude Sonnet student-learning reviewer (AI source review, re-review pass; findings resolved in the design)'
RENDERER = 'src/explainer/ExplainerVideo.tsx'


def sha(p):
    return hashlib.sha256(open(p, 'rb').read()).hexdigest()



B3B_ROWS = {
    'hook': ['new', 'Painted dairy bull and cow pair on the left, the wheat leaf plate (rust beside healthy) and the wheat ear plate on the right, a coded map chip and two small trait chips', 'Poses two linked questions on two real farmers: how each gets what they want, then how to judge whether it is worth it', 'wants her calves fathered by the best bull in the country / hours away / Rust is a fungal disease of wheat / how would you judge whether it is worth the cost',
             'A dashed line draws between the two farms, a ring marks the rust spots, two trait chips point to one wheat ear with a question mark, and the heading holds on its question',
             E, 'The bull and cow plate fills the left; a map chip draws a dashed line on "hours away"; the rust leaf plate shows a scribble circle on the pustules on "Rust is a fungal disease of wheat"; the ear plate slides in with "high yield" and "rust resistant" chips arrowing to one ear; the heading writes on and its second half writes on "worth the cost"',
             ['CameraStage push', 'HandText write-on', 'DrawPath', 'ScribbleCircle', 'plate slide-in'], 'Hold on the question mark for about two seconds'],
    'insemination': ['new', 'Bull plate at the left, coded collection vial, straws, freezer icon and a coded cutaway of the cow\'s reproductive tract with a thin tube', 'Shows what the farmer does, step by step, before the name artificial insemination is used again as a label', 'artificial insemination / collected, diluted and split into many small doses / usually frozen / any farm / thaws one dose',
                      'The vial fills and splits into a row of straws, frost spreads, one straw travels to the cow plate, thaws, and a thin tube carries the dose into the uterus',
                      E, 'The vial fills on "collected"; its contents divide into straws on "split into many small doses"; a frost wash and an opening freezer icon appear on "usually frozen"; a dot carries one straw along a dashed route on "any farm"; the frost fades and a thin tube draws into the cow\'s tract outline on "thaws one dose"',
                      ['TravelingDotOnPath', 'DrawPath', 'frost wash', 'HandText write-on', 'plate reuse'], 'Brief hold on the dose reaching the uterus'],
    'heat-timing': ['new', 'Enlarged cow tract outline, coded cycle strip with an on heat bar and a short green egg-ready arc, and a clock ring', 'Shows why timing matters: the egg is ready for only a short window, so the dose must be placed during heat', 'an egg ready for only a short time in each cycle / being on heat / about a day after it starts / during heat, before the egg is released',
                    'The tract enlarges, a short green window draws on the cycle strip, an egg leaves the ovary, and a clock ring ticks across the heat bar before the dose is placed',
                    E, 'The tract outline enlarges; the cycle strip draws with a short green "egg ready" arc on "an egg ready for only a short time"; an egg dot leaves an ovary on "ovulation"; the label "on heat" writes over the heat bar with a ticking clock ring; the egg follows about a day later and the dose arrow lands inside the heat bar',
                    ['CameraStage push', 'DrawPath arc', 'TravelingDotOnPath', 'clock ring', 'HandText write-on'], 'Hold the heat bar and the egg window together'],
    'gain-and-risk': ['new', 'Coded scorecard (gain, variety, cost, welfare by method), gene pool tray of 24 beads in six colours with a herd of cow icons, a gentle rising line marked illustrative', 'Names the gain first, then shows with the tray how the same reach narrows the herd\'s variety', 'What does it gain? / a proven bull / the same reach is the risk / If a few bulls father most of the calves / one disease can spread through the whole herd',
                      'The scorecard gains a green tick row, a rising line draws on, then one bead colour spreads through the tray until the herd shares it and a disease icon moves along the herd',
                      E, 'The scorecard appears with four rows; the gain row writes on with a green tick and the rising line draws on; the gene pool tray appears with six bead colours; the bull\'s orange bead spreads across the herd on "If a few bulls father most of the calves"; the variety row fills with a blue bead; a disease icon passes along the herd and lights each cow grey',
                      ['table row write-on', 'DrawPath trace', 'bead colour spread', 'ParticleEmitter', 'tag pop'], 'Hold the narrowed tray'],
    'fertility-cost': ['new', 'Source chip, three-step chain with a steepening line and a falling line (both illustrative), welfare heart and cost coin on the scorecard', 'Gives the fertility trade-off with its source, then fills welfare and cost on the scorecard', 'Studies of Holstein cows in several countries / the chance of becoming pregnant after each insemination fell / A cow that struggles to get pregnant can have a harder life on the farm / usually less than buying and keeping a top bull on every farm',
                       'A source chip writes on, a three-step chain builds with one line steepening and another falling, a rose heart lands on welfare and an amber coin lands on cost',
                       E, 'The source chip writes on; the chain steps land one per spoken idea; the rising line steepens and a second short line falls; the welfare row writes on with a rose heart; an amber coin falls on the cost row on "Semen and a trained worker cost money" with the comparison note writing on',
                       ['chain build', 'DrawPath lines', 'icon pop', 'coin drop', 'table row write-on'], 'Hold the filled column'],
    'pollination': ['new', 'Wheat ear plate with a camera push to one floret, coded forceps, bag and donor plant; scorecard shrunk to a chip', 'Shows what the breeder does with her hands before the technique has a name and why self-pollination must be stopped', 'artificial pollination / removes the anthers / rust-resistant plant / covers the flowers with a bag',
                     'The camera pushes to the floret, forceps lift the anthers out, pollen from the donor plant travels to the stigma and a bag covers the ear',
                     E, 'A slow push reaches one open floret; a scribble circle lands on the anthers on "removes the anthers" and forceps lift them out; two tags mark the seed parent and the pollen parent; a pollen dot travels from the donor to the stigma; a coded bag draws over the ear on "covers the flowers with a bag"',
                     ['CameraStage push', 'ScribbleCircle', 'TravelingDotOnPath', 'DrawPath bag', 'HandText write-on'], 'Hold the bagged ear'],
    'pollination-knowledge': ['reuse', 'Flower cutaway plate (anther, stigma, pollen tube) as a recall, two plant icons sending dots to seeds, seedling rows with allele beads, and the second scorecard column', 'Ties the technique back to the pollen tube and sexual mixing, and shows the new variety takes generations', 'a tube carries sperm to the egg / Every seed has the two parents she picked / the alleles are mixed in new ways / only some plants show both traits / takes years of hand work',
                              'The flower plate recalls the tube path, two parents send dots to a seed, identical first seedlings grow, then the next generation mixes and only some show both traits',
                              E, 'The cutaway plate crossfades in with anther, stigma and tube labels writing on in turn, then shrinks; green and gold plants send dots to a seed; three identical seedlings grow; the next row shows mixed bead pairs with only some ringed as showing both traits; the scorecard column gains gain and cost',
                              ['plate crossfade', 'DrawPath', 'TravelingDotOnPath', 'ScribbleCircle', 'table row write-on'], 'Hold the kept plants'],
    'shared-weakness': ['new', 'Gene pool tray in one colour, coded field of identical wheat plants with shield icons, coded Uganda pin and rust wash', 'Shows why growing one variety everywhere shares one weakness, with a sourced example', 'share the same defences / first found in Uganda in 1998 to 1999 / overcame a resistance gene',
                        'The tray turns to one colour, a field of shielded plants fills the screen, a pin drops on Uganda, an orange wash spreads and the shields shatter',
                        E, 'The tray shows one colour; identical shielded plants fill the right half on "share the same defences"; a pin drops on a coded Africa outline on "first found in Uganda"; a rust wash spreads across the field; the shields shatter on "overcame a resistance gene"; the variety row writes "one variety everywhere: shared weakness"',
                        ['tray recolour', 'DrawPath pin', 'rust wash', 'shield shatter', 'HandText write-on'], 'Hold the source chip over the field'],
    'cloning': ['reuse', 'Potato tuber plate, clone row plate, Cavendish bunch and banana plantation plates, third scorecard column', 'Names cloning as the third option and ties it back to the first video\'s banana', 'copy the winner / pieces of tubers / it is a clone / shares one weakness / Cavendish banana',
                'Tuber pieces duplicate into a clone row, identical plants ripple out, disease marks spread along the whole row and the banana plates crossfade in',
                E, 'The tuber plate crossfades in with a sprout row duplicating on "pieces of tubers"; "clone: the same alleles" writes on in amber; plants ripple along the row on "uniform crop quickly"; disease marks spread plant to plant on "shares one weakness"; the Cavendish and plantation plates land with a ring on the wilting plants; the third column fills',
                ['plate crossfade', 'row ripple', 'DrawPath', 'ScribbleCircle', 'table row write-on'], 'Hold the three filled columns'],
    'evaluate': ['new', 'Scorecard enlarged to a three-column comparison with a balance doodle, amber hand type and four gloss lines in the four criterion colours', 'Names the verb evaluate and the criteria only after the student has used them on three methods', 'make a judgement using criteria / the things you judge it by / Gain: what does it improve / Variety: does it narrow the gene pool? / for animals, welfare',
                 'The scorecard enlarges, the verb and its meaning write on large, a balance doodle appears and clears, and each criterion is circled with its gloss in turn',
                 E, '"evaluate: make a judgement using criteria" writes on with "criteria: the things you judge it by"; a balance doodle with "worth it?" draws and clears; scribble circles land on the gain, variety, cost and welfare row labels in turn with a short gloss writing beside each; a checklist line "judgement, reasons, weighing, when it would change" writes on',
                 ['table enlarge', 'HandText write-on', 'ScribbleCircle', 'balance doodle', 'checklist build'], 'Hold the finished checklist'],
    'model-judgement-gain': ['new', 'Question card, model answer card 1 (judgement) and card 2 (gain) with two herd icons and a pair of rising lines (illustrative)', 'Starts the model Evaluate answer with the judgement first, then the gain with comparison evidence', 'Here is a model answer for dairy farming / First, the judgement / worthwhile when many unrelated bulls are used / Second, the gain / similar herds that mate naturally',
                             'The question writes on, the judgement card writes on with its condition lit, then the gain card fills while two herd icons face each other with two rising lines',
                             E, 'The question card writes on at the top; card 1 "Judgement" writes on with "worthwhile when" lit in amber; card 2 "Gain" writes on with a green tick; two herd icons face each other on "similar herds that mate naturally" and a pair of rising lines draws with the faster one on the straw herd',
                             ['card slide-in', 'HandText write-on', 'clause highlight', 'DrawPath lines'], 'Hold both cards'],
    'model-variety-cost': ['adjust', 'Cards 3 and 4 beside the small gene pool tray, amber coin and rose heart, scorecard rows lighting in step', 'Adds the variety, cost and welfare cards using the tray the student has already seen', 'Third, the variety / the gene pool narrows / Fourth, cost and welfare / lower fertility',
                           'Card 3 writes on while the tray replays its narrowing, card 4 writes on with a coin and a heart, and the scorecard rows light in step',
                           E, 'Card 3 "Variety" writes on with a blue bead and the small tray replays the colour change; card 4 "Cost and welfare" writes on with the coin and the heart; earlier cards stay on screen; scorecard rows light as each is spoken',
                           ['card slide-in', 'HandText write-on', 'bead colour spread', 'icon pop'], 'Hold the four cards'],
    'model-verdict': ['adjust', 'Card 5 with a small balance tipping to the risk pan, the tray refilling with six colours, a freezer-and-straw icon and an old-breed cow icon', 'Finishes the model answer with the weighing and a verdict that says when, and names the ways to protect variety', 'Finally, weigh them / the answer turns on variety and welfare / The verdict / Frozen semen / outcrossing',
                      'The balance tips to the risk pan, a circle lands on the condition, and the tray refills with six colours as three repair icons appear beside it',
                      E, 'Card 5 writes on with a balance tipping to the risk pan; a scribble circle lands on "lasts if"; unrelated bulls\' beads enter the tray and "outcrossing" writes on; the freezer-and-straw icon and the old-breed cow icon appear with their labels',
                      ['balance tip', 'ScribbleCircle', 'bead colour spread', 'icon pop', 'HandText write-on'], 'Hold the finished answer'],
    'attempt': ['new', 'Two numbered vignettes: a coded sheep outline with a straw and farm icons, and a wheat floret outline with a donor head; no scorecard, tray or hints', 'Unseen transfer on a new species and on a plant fault, with every demand and condition visible and no answer cues', 'Your turn / one champion ram / Give one benefit of this plan / Suggest why, and name two steps she should add / Pause here to answer',
                'The countdown ring runs through the answer-free thinking hold',
                E, 'The two vignettes appear as each situation is named with their pen notes and demands; the scorecard, tray, criteria rows and trend arrows are absent; the countdown ring starts after the narration',
                ['Countdown ring', 'Enter reveals'], 'Quiet answer-free thinking hold with a 10 second countdown'],
    'feedback-one': ['adjust', 'Vignette one enlarged with the gene pool tray replayed over a ten-year strip, a disease icon, extra rams\' beads and two crossed chips', 'Explains the benefit, the strongest risk and a change that keeps the benefit, and corrects a one-dose cost mistaken for the risk', 'the champion\'s traits spreading quickly / a narrow gene pool / several unrelated good rams / a cost of one dose',
                     'The ram\'s bead colour spreads along the farm icons over ten ticks, a disease icon greys them, three more rams\' beads refill the tray, and the wrong chips are crossed',
                     E, 'The tray replays on the flock board; the ram\'s colour spreads along the farm icons across the ten-year strip; a disease icon lights the farms grey; a second path adds three more rams\' colours and the tray refills with "several unrelated good rams"; the chips "the semen might not work" and a second wrong chip appear crossed; a note says another valid risk is accepted',
                     ['bead colour spread', 'DrawPath arrows', 'ParticleEmitter', 'Mark cross', 'HandText write-on'], 'Hold the refilled tray'],
    'feedback-two': ['adjust', 'Vignette two enlarged replaying the floret: P\'s own pollen, wind-blown pollen, forceps, Q pollen and a bag', 'Shows which pollen actually reached the stigma and what two steps fix it', 'fertilised by P\'s own pollen / remove P\'s anthers / cover the flowers with a bag / the problem is which pollen arrived',
                     'A yellow dot from P\'s own anther and a grey wind dot both land, then forceps remove the anthers, Q\'s pollen goes on and a bag makes the wind dot bounce off',
                     E, 'P\'s pollen dot lifts and lands on its stigma; a wind wisp brings a grey dot; the repair draws step by step with forceps, Q\'s pollen and the bag; labels "1 remove P\'s anthers" and "2 cover with a bag" write on; the chip "Q\'s pollen failed" is crossed with the assumed note',
                     ['TravelingDotOnPath', 'DrawPath', 'Mark cross', 'HandText write-on', 'dot bounce'], 'Hold the two steps'],
    'memory': ['adjust', 'Scorecard returned large with three columns, amber aid line with a green tick and blue bead, the four criteria in colour, Cavendish thumbnail and next-lesson chip', 'Gives a reusable aid and a four-word checklist, then hands off to DNA copying', 'picking a few parents and using them widely / gain, variety, cost, welfare / say when it is worth it / how a cell copies its DNA',
               'The scorecard returns, the aid writes on large, the four words write on in their colours, and a chip with a double helix doodle slides in',
               E, 'The scorecard returns large; "Pick few parents: gain speed, risk variety." writes on with a tick and a bead; "gain, variety, cost, welfare" writes on in the four colours with icons; "then say when it is worth it" writes on large; the Cavendish thumbnail lands small; the next chip slides in',
               ['HandText write-on', 'icon pop', 'table enlarge', 'chip slide-in'], 'Hold the aid and the checklist'],
    'key-notes': ['new', 'Key notes card with the memory aid in large writing', 'Essentials to copy into books', 'key notes',
                  'Notes appear then stay still for copying',
                  H, 'The key notes and the memory aid appear and lock', ['Enter reveals'], 'Quiet copy hold of about 60 seconds with pause invitation'],
}


B4_ROWS = {
    'hook': ['reuse', 'Amoeba fission plate 1 tagged only a cell, a camera push to its nucleus, a coded DNA thread drawing out, a pinhead dot and an opening book icon', 'Poses the copying problem on a real cell: huge amount of information, tiny space, and a question about the original', 'billions of letters / packed into a nucleus far smaller than a pinhead / Copy a book that long and the copy would drift / what happens to the original',
             'The camera pushes into the nucleus, a thread draws out across the screen, a pinhead dot sits beside the nucleus, and a book opens with a drifting copy',
             E, 'The amoeba plate is centred; a slow push reaches the nucleus and a scribble circle lands on it; a long DNA thread keeps drawing out across the screen width; a pinhead dot appears with its size note on "far smaller than a pinhead"; a book icon opens and a second copy drifts on "the copy would drift"; the heading writes on',
             ['CameraStage push', 'ScribbleCircle', 'DrawPath thread', 'HandText write-on', 'book icon'], 'Hold on the question about the original'],
    'nucleotides': ['new', 'One large coded nucleotide (sugar pentagon, phosphate circle, base tile) with amber join notches, then two more nucleotides snapping on', 'Builds the unit before any pairing, so the backbone and the letter are separate ideas', 'a long chain of small units called nucleotides / a sugar called deoxyribose / a phosphate group / the part that carries the letter / The order of those letters is the information a cell stores',
                     'Labels draw on part by part with each part pulsing, two more nucleotides snap on at the same join points, and the four base letters appear',
                     E, 'One nucleotide appears centred; leader labels write on for sugar, phosphate and base as each is named and each part pulses amber; two more nucleotides slide in and snap at the amber notches on "link in a long backbone"; four base tiles A, T, C and G appear and the order row writes on',
                     ['DrawPath leader lines', 'part pulse', 'snap slide-in', 'HandText write-on', 'tile pop'], 'Hold the chain with its four letters'],
    'pairing': ['reuse', 'Twisting double helix helper that flattens into a ladder board, jigsaw-shaped base tiles and dotted hydrogen bonds', 'Shows the pairing rule from the shapes first, then names it, and gives a mnemonic after the rule is understood', 'double helix / A always pairs with T, and C always pairs with G / like jigsaw pieces / two between A and T, three between C and G / Apple in the Tree, Car in the Garage',
                'The helix turns once and flattens into a ladder, tiles slide together, a wrong tile clashes, then dotted bonds draw on and the aid writes in',
                E, 'The helix draws on and rotates once; a credit tag writes on; the camera pushes into a stretch and it unwinds into the ladder; tiles meet on "meet"; an A tile dragged to a C tile clashes in shape; A fits T and C fits G on "jigsaw pieces"; two then three dotted lines draw on the pairs; the aid writes in amber',
                ['Helix helper', 'CameraStage push', 'tile slide', 'DrawPath bonds', 'HandText write-on'], 'Hold the ladder with the aid'],
    'antiparallel': ['new', 'Ladder board with amber join notches, a direction arrow along the top backbone and tags 5\' and 3\', plus a two-lane road doodle', 'Gives the direction of a strand its cause (the join always on one side) before the end names and the word antiparallel', 'start end and a finish end / said five prime / antiparallel / the two lanes of a road',
                     'Join notches flash along the top backbone, an arrow draws from the start end to the finish end, the end tags land, and the partner strand gets an opposite arrow with a road doodle',
                     E, 'The notches flash on "one particular side"; an arrow draws along the top ribbon with "start" and "finish"; scribble circles land on the 5\' and 3\' tags; the bottom ribbon gets its opposite arrow; "antiparallel" writes on with a two-lane road doodle',
                     ['DrawPath arrow', 'ScribbleCircle', 'notch flash', 'HandText write-on', 'icon pop'], 'Hold the two opposite arrows'],
    'template': ['new', 'Four-rung ladder A-T, T-A, C-G, G-C with the bottom row erased, empty slots filling with matching tiles, and dotted bonds stretching', 'Shows that pairing makes one strand fix the order of the other, and why weak bonds let the strands separate while the backbones stay whole', 'one strand fixes the order of the other / its partner has to read T, A, G, C / a pattern to copy from / the strands can be pulled apart without breaking either backbone',
                 'The bottom row is erased, the empty slots fill with matching tiles, a template tag lands, and the dotted bonds stretch and pop while the backbones stay whole',
                 E, 'The ladder shows four rungs; the bottom row erases on "one strand fixes the order of the other"; slots fill one tile at a time with ticks; a scribble circle and "template: a pattern to copy from" land on the top row; the dotted lines highlight and stretch on "hydrogen bonds are weak" while the backbones stay whole',
                 ['tile snap', 'ScribbleCircle', 'DrawPath bonds', 'HandText write-on', 'bond stretch'], 'Brief hold on the separated strands'],
    'copy-steps': ['new', 'Longer eight-rung ladder with a helicase wedge, a numbered step strip along the bottom, free tiles and a polymerase icon', 'Puts the three copying steps in order and says what each enzyme does before leaning on its name', 'First, an enzyme / helicase unwinds the helix / replication fork / Second, loose nucleotides / DNA polymerase joins each new nucleotide',
                   'The wedge opens the ladder from left to right, loose tiles pair with the exposed bases, and the polymerase icon joins them into a new backbone as each step chip lands',
                   E, 'The step chip "1 separate" lands; the helicase wedge moves and the ladder opens into a Y with a scribble circle on the fork; the separated backbones recolour blue; "2 pair" lands and free tiles drop onto exposed bases; "3 join" lands and the polymerase icon draws a green backbone behind the tiles in short stretches',
                   ['ladder unzip', 'step chip', 'tile drop', 'DrawPath backbone', 'ScribbleCircle'], 'Hold the three step chips'],
    'semi-conservative': ['new', 'Two daughter molecules separated vertically, each with a blue original strand and a green new strand, a half-and-half icon and a grey ghost alternative', 'Names semi-conservative replication after showing what each daughter holds, and rules out the other way it could have gone', 'two new DNA molecules / semi-conservative replication / Semi means half, and conservative means kept / Half old, half new',
                         'The two daughters separate, circles mark the blue and green strands, a half-filled icon appears, and a ghost alternative shows and is crossed out',
                         E, 'The daughters separate vertically with "daughter molecule" tags; scribble circles land on the blue strand ("original") and the green strand ("new") of each; the half-circle icon fills; "semi = half, conservative = kept" writes on; a grey ghost with one all-blue and one all-green molecule appears on "It could have gone another way" and is crossed; "Half old, half new" writes large',
                         ['strand recolour', 'ScribbleCircle', 'half icon fill', 'ghost overlay', 'Mark cross', 'HandText write-on'], 'Hold the aid on screen'],
    'worked-molecule': ['new', 'Clean worked-example board: task line, a four-rung ladder drawn the other way round with 3\' on the left of the top strand, end tags and a step chip', 'Starts the worked example with the givens and the first step, and shows a flipped drawing so the unseen attempt is fair', 'four pairs of bases long / the other way round / Step one: the strands separate / we colour them blue',
                        'The task writes on, the end tags land on the flipped ladder, then the strands separate and recolour blue',
                        E, 'The task "Copy this molecule. Label original and new strands and every end." writes on; the ladder shows tiles A T C G over T A G C with end tags; a note "drawn the other way round this time" writes on; the chip "1 separate" lands and the ladder opens vertically; both strands recolour blue on "colour them blue"',
                        ['HandText write-on', 'tile snap', 'ladder unzip', 'strand recolour', 'step chip'], 'Hold the two blue templates'],
    'worked-bottom': ['new', 'Top template with exposed bases, free green tiles dropping in, a green backbone with an arrow, end tags, then the pair turned round', 'Builds the new bottom strand one base at a time and shows how the letters swap order when the pair is turned round', 'needs a T / The new strand, in green / it runs opposite to its template / turn the pair round',
                       'The bottom strand slides away, green tiles drop in on each spoken letter, a green backbone and its end tags write on, and the pair turns round with the letters swapping order',
                       E, 'The chip "2 build the new bottom strand" lands; green tiles T, A, G, C drop in with a tick each; a green backbone with a direction arrow draws and end tags write on with a circle linking new 5\' under template 3\'; the pair rotates and the reading orders swap with the new labels',
                       ['tile drop', 'DrawPath backbone', 'ScribbleCircle', 'board rotate', 'step chip'], 'Hold the pair for about a second'],
    'worked-top': ['new', 'Blue bottom template in the centre with an empty top row, green tiles dropping in, and the old blue top strand parked above for comparison', 'Builds the second new strand and shows that it matches the original top strand', 'the bottom template / T needs an A / exactly like the original top strand',
                   'The blue template slides in, green tiles drop in on each spoken letter, and a bracket and tick compare the new top strand with the parked original',
                   E, 'The chip "3 build the new top strand" lands; green tiles A, T, C, G drop in with ticks; the green backbone and end tags write on; the parked blue top strand pulses and a bracket and tick appear between the two rows',
                   ['tile drop', 'DrawPath backbone', 'bracket draw', 'step chip'], 'Brief hold on the matching rows'],
    'worked-daughters': ['new', 'Two daughter molecules (blue top with green bottom, green top with blue bottom), a ghost of the starting molecule with ticks and a dashed matching arrow', 'Puts the result together and states why the information survives', 'one blue original strand and one green new strand / exactly like the molecule we began with / that is how the information survives',
                         'The two daughters assemble, the starting molecule fades in as a ghost with ticks across all three, and a dashed arrow links each new strand to the old partner it matches',
                         E, 'The daughters assemble one above the other; the strand key lights; the starting molecule fades in as a ghost with ticks across the three; a curved dashed arrow runs from each new strand to the original partner of its template with an equals sign; "information survives" writes on',
                         ['strand assemble', 'ghost overlay', 'DrawPath arrow', 'tick pop', 'HandText write-on'], 'Hold the three matching molecules'],
    'errors-repair': ['new', 'Short ladder with a wrong tile snapping in, a polymerase icon backing up, a repair sweep and a third wrong tile that survives', 'Qualifies the accuracy: rare mistakes, two checks, and the few that survive become mutations', 'accurate, but not perfect / DNA polymerase checks each base / repair proteins check the new strand afterwards / a mutation',
                      'A wrong tile glows grey, the polymerase backs up and removes it, a second wrong tile is swept out by repair proteins, and a third survives and is tagged',
                      E, 'A wrong G opposite T snaps in with a "mismatch" circle; the polymerase icon backs up one step, the tile pops out and the correct A drops in; a second wrong tile is removed by a repair sweep; a third wrong tile stays tagged "survived" and the note about a mutation writes on',
                      ['tile snap', 'ScribbleCircle', 'icon sweep', 'Mark cross', 'HandText write-on'], 'Hold the surviving mismatch'],
    'errors-effects': ['new', 'Three plain outcome chips, the mismatched ladder unzipping into a normal copy and a changed copy, then a dividing-cell strip for a bacterium and a person', 'Shows the effect of a mutation, how it is passed on at the next copying, and when it reaches children', 'Many mutations have no effect / one new copy has a changed base pair / only one of the two new cells gets the changed pair / reaches children only if it is in a cell that makes gametes',
                        'Three outcome chips appear, the mismatched ladder unzips into one changed and one normal copy, and the change follows the dividing cells for a bacterium and a body cell',
                        E, 'Grey chips "no effect", "harmful" and "useful" come up beside the changed ladder; the ladder unzips and each strand takes a new partner giving "normal copy" and "changed pair"; a bacterium splits with only one new cell marked; a body cell lineage is marked and only a gamete-making cell carries it to children',
                        ['chip pop', 'ladder unzip', 'lineage strip', 'cell split', 'HandText write-on'], 'Hold the lineage strip'],
    'attempt': ['new', 'Two numbered vignettes: a template row of six tiles T G C C A T with end tags and empty slots, and a ladder with heavy-tag beads; no key, no colours, no hints', 'Unseen transfer on pairing and ends and on tracing old strands over two rounds of copying, with every demand and condition visible', 'Two questions / Write the new strand built beneath it, base for base / both strands of one DNA molecule carry a heavy tag / Pause here to answer',
                'The countdown ring runs through the answer-free thinking hold',
                E, 'The two vignettes appear as each is named with their demands and conditions; the strand key, blue and green, the pairing card and direction arrows are absent; the countdown ring starts after the narration',
                ['Countdown ring', 'Enter reveals'], 'Quiet answer-free thinking hold with a 10 second countdown'],
    'feedback-one': ['adjust', 'Vignette one enlarged: slots filling with ticks, end tags written on, a curved amber reading arrow and four crossed wrong-answer chips', 'Explains the answer by pairing and then by ends, and corrects the likeliest slips (order, U for T, both ends the same)', 'Pair each base with its partner / If you wrote U, that is RNA / they are not antiparallel',
                     'The six slots fill on each spoken letter, the end tags write on, an arrow reads the new strand from its own 5\' end, and the wrong chips are crossed in turn',
                     E, 'The slots fill with pair snaps and ticks; end tags 3\' on the left and 5\' on the right write on; a curved amber arrow reads the new strand from its 5\' end; four chips including "U for T (RNA)" appear and are crossed with grey scribbles',
                     ['tile snap', 'DrawPath arrow', 'Mark cross', 'HandText write-on'], 'Hold the corrected strand'],
    'feedback-two': ['adjust', 'Vignette two enlarged: a heavy molecule copied twice as a trace, hybrid daughters, four final molecules with bead counts and a running count', 'Traces old strands through two rounds and corrects the mistake that all four molecules are partly heavy', 'one heavy original strand and one light new strand / two with two light strands / they never multiply',
                     'Round one gives two hybrids, round two gives two hybrids and two all-light molecules, and a running count shows only two heavy strands throughout',
                     E, 'The heavy molecule opens and takes light partners giving two labelled hybrids; both hybrids open again giving two hybrids and two all-light molecules; bead counts label the four finals; a running count under the board stays at 2 heavy strands; the chip "all four are partly heavy" is crossed',
                     ['strand split', 'NumberTicker count', 'bead label', 'Mark cross'], 'Hold the four final molecules'],
    'memory': ['adjust', 'Ladder board with the starting molecule and two daughters small, the aid in large amber writing with a blue and green half icon, the pairing aid and a four-molecule row', 'Gives the reusable half old, half new rule, shows why first strands never multiply and hands off to cell division', 'half old, half new / The very first strands never multiply / Next time: how a cell shares its copied DNA',
               'The aid writes large over the small daughters, the pairing aid returns, two of the four molecules light as holding a first strand, and the three-step rule writes on',
               E, 'The starting molecule and two daughters return small; "Half old, half new." writes on with the half icon and the old-strand tag; the pairing aid returns smaller; the four-molecule row returns with two lit and two greyed; the three-step rule writes on silently; the next chip slides in',
               ['HandText write-on', 'half icon fill', 'ghost overlay', 'chip slide-in'], 'Hold the aid and the three-step rule'],
    'key-notes': ['new', 'Key notes card with the memory aid in large writing', 'Essentials to copy into books', 'key notes',
                  'Notes appear then stay still for copying',
                  H, 'The key notes and the memory aid appear and lock', ['Enter reveals'], 'Quiet copy hold of about 75 seconds with pause invitation'],
}


B5A_ROWS = {
    'hook': ['new', 'Coded skin patch with a graze gap, cells sliding in and dividing, a 46 chromosomes tag on a new cell', 'Poses the problem on a familiar event: new skin needs the full instructions in every cell, and copying is only half the job', 'Scrape your knee / new skin has filled the gap / 46 chromosomes / both new cells keep every chromosome',
             'Cells slide in and pinch in two to close the gap, a ring lands on one new cell with a 46 chromosomes tag, and the heading writes on its question',
             E, 'The skin patch shows the gap; edge cells slide in as a sheet while cells behind them divide on "new skin has filled the gap"; a scribble circle and the tag "46 chromosomes" land on one new cell; a "copy" half is ticked and a "share" half is left open; the heading writes on',
             ['cell slide', 'cell divide', 'ScribbleCircle', 'HandText write-on'], 'Hold on the open share half'],
    'chromosome-sets': ['adjust', 'Zoom-out recall on five painted plates (bases, helix, nucleosomes, coiled fibre, single chromosome), then a nucleus with 23 pink (plum role) and 23 teal single chromosome plates, counters to 23 and 46, a bracket for one set and a homologous pair highlight', 'Recalls what a chromosome is made of by zooming out from the DNA of the copying video, then builds chromosome, set and homologous pair from the counts the student can see', 'Your DNA / is packed into / wound up with proteins / two sets of 23 / A set is one of each kind of chromosome / homologous pair',
                        'The plates crossfade out one magnification at a time from base pairs to a chromosome over the first sentence, the chromosome shrinks into a row, a plum row and a teal row draw on with counters, a bracket sweeps one set, and two plates of one kind are linked as a pair',
                        E, 'Bases on "Your DNA", the helix on "is packed into", nucleosomes then the coiled fibre on "wound up with proteins", and an uncopied chromosome plate as "A human body cell has 46" begins (about 11 seconds); it shrinks into the plum row; rows of 23 plates draw on with counters to 46; a bracket sweeps along one row on "A set is one of each kind"; two plates of one kind light and a pair link writes on "homologous pair"; a grey note covers X and Y',
                        ['CameraStage pull-back', 'plate crossfade', 'NumberTicker counter', 'bracket draw', 'ScribbleCircle', 'HandText write-on'], 'Hold the pair highlight'],
    'diploid-haploid': ['new', 'Two cell outlines (two sets and one set), a big 46 ticker and the four-chromosome model cell', 'Names diploid and haploid after the sets are clear and sets up the small model cell used from here on', 'diploid / haploid / a model cell with just four chromosomes',
                        'Two cell outlines sit side by side with their set tags, the left turns into a 46 ticker, and the board clears to a four-chromosome model cell',
                        E, 'The left outline shows plum and teal bars tagged "two sets: diploid" and the right shows plum bars only tagged "one set: haploid"; chips "body cell" and "gamete" land; the left cell becomes a 46 ticker; the board clears to the model cell with the tag "model cell: 4 chromosomes"',
                        ['side-by-side build', 'NumberTicker', 'board clear', 'HandText write-on'], 'Brief hold on the model cell'],
    'why-copy-first': ['new', 'Model cell with four bars, a cut line on the long plum bar, two ghost cells sharing out the bars, and an arrow to copying', 'Gives the cause for copying first before any stage name', 'each half would carry only half of its instructions / each new cell would get only half of them / The DNA has to be copied first',
                       'A cut line splits a bar into two grey halves, the bars are shared two and two between ghost cells that are crossed, and the board turns to copying',
                       E, 'A ghost cut line crosses the long plum bar and it splits into halves with grey crosses and "half the instructions each"; the four bars are shared into two ghost cells tagged "only half the chromosomes" with a cross; the ghosts fade and "copy first" writes on',
                       ['DrawPath cut line', 'Mark cross', 'ghost overlay', 'HandText write-on'], 'Hold the copy first tag'],
    'the-copy': ['new', 'Four bars each doubling into an X shape joined at a cream centromere disc, tags for centromere and chromatid, a ticking counter to 4', 'Shows what the copy looks like and teaches the counting rule on the picture', 'two identical copies, joined at a point called the centromere / sister chromatids / count the centromeres, not the chromatids',
                 'Each bar doubles and snaps together at a cream disc, labels circle the disc and the two threads, and a pen taps each disc while a counter ticks to four',
                 E, 'The four bars duplicate with a soft pulse and snap together at a centromere disc; a scribble circle lands on one disc with "centromere"; the two threads light in turn as "chromatid"; a bracket reads "sister chromatids: identical copies"; a pen taps each disc with a counter to 4 on the counting rule',
                 ['bar duplicate', 'ScribbleCircle', 'bracket draw', 'NumberTicker counter'], 'Hold the counter at four'],
    'interphase': ['new', 'Coded cycle ring with a long interphase arc, a short mitosis arc, a very short cytokinesis arc, a travelling dot and the model cell changing as the dot passes the S phase sub-arc', 'Places the copying in interphase, before mitosis, so the student does not think copying happens inside it', 'In interphase, the long stage between divisions / It is not a rest / S phase / DNA is never copied during mitosis itself',
                  'A travelling dot circles the ring, the cell grows, the threads double as the dot passes S phase, and the short mitosis arc is marked as sharing, not copying',
                  E, 'The ring draws on with its three arcs; a dot circles it; the model cell inside shows four single threads, then four doubled threads as the dot crosses the marked "S phase: DNA copied" sub-arc; the mitosis arc is tagged "shares the copies out"; a cross lands on "copying" at the mitosis arc',
                  ['CycleRing', 'TravelingDotOnPath', 'bar duplicate', 'Mark cross', 'HandText write-on'], 'Hold the ring with the S phase tag'],
    'prophase': ['new', 'Model cell board with a stage strip, a coil animation of the threads into X shapes, a dissolving dashed nuclear envelope, spindle poles and fibres attaching to centromeres', 'Shows why the chromosomes coil, then how fibres attach and line them up, one stage chip at a time', 'Mitosis has four steps / coil up into short, thick X shapes / Spindle fibres, thin protein threads / the chromosomes line up across the middle / not next to its homologous partner',
                 'The threads coil into short X shapes, the nuclear envelope breaks into dashes, fibres grow from two poles and attach to each centromere, and the chromosomes line up across the middle',
                 E, 'The chip "1 prophase" lands; the doubled threads coil into compact X shapes with "coils up: easier to move"; the envelope breaks into dashes; spindle poles and fibres grow; the chip "2 metaphase" lands, fibres attach one to each chromatid at every centromere and the chromosomes line up, each on its own, with a note that they are not next to their partners',
                 ['coil animation', 'DrawPath fibres', 'step chip', 'envelope fade', 'ScribbleCircle'], 'Hold the lined-up chromosomes'],
    'anaphase': ['new', 'Lined-up X shapes with a halving centromere pop, shortening fibres, groups travelling apart, a counter to 8 then 4 + 4 and circles on each end', 'Shows what separates and where it goes, and the point that each end holds one copy of every chromosome', 'the centromeres split / pulling the sister chromatids to opposite ends / twice as many chromosomes as before / Each end has both sets again',
                 'Each centromere splits, the fibres shorten and two groups travel apart, a counter shows eight then four and four, and circles land on each end',
                 E, 'The chip "3 anaphase" lands; each centromere disc halves with a small pop and the X shapes open into single bars; the fibres shorten and the groups travel apart; a counter ticks to "8 chromosomes" then splits to "4 + 4"; scribble circles land on each end with the tag "one of each kind"',
                 ['centromere split', 'fibre shorten', 'NumberTicker counter', 'ScribbleCircle'], 'Hold the two groups'],
    'telophase-cytokinesis': ['new', 'Bars uncoiling at each end, dashed nuclear envelopes drawing round both groups, a pinch line, an animal pinch and a small plant inset', 'Finishes the division and shows that each cell holds both sets', 'uncoil into long thin threads / a new nuclear envelope forms around each group / the membrane pinches in / two cells, each with both sets',
                              'The bars uncoil at each end, envelopes draw round both groups, and a line pinches the cell into two',
                              E, 'The chip "4 telophase" lands; the bars uncoil; a dashed envelope draws round each group with "two nuclei"; the chip "cytokinesis" lands and a pinch line closes the cell; a plant inset shows a wall line growing; the two cells show plum and teal bars',
                              ['uncoil animation', 'DrawPath envelope', 'cell pinch', 'step chip'], 'Hold the two finished cells'],
    'tracking': ['new', 'Count tracker with four columns (start, after copying, anaphase, each new cell), mini cell icons, a chromosome row and a chromatid row, then the same four figures for a human cell', 'Tracks chromosomes and chromatids stage by stage so students see the number is never halved', 'starts with four chromosomes / now eight chromatids / briefly holds eight / A human cell goes the same way / The number is never halved',
                'One column fills at a time as each figure is spoken, chromatid chips pop in under the second column, and the human numbers repeat the pattern',
                E, 'The tracker draws on beside a small model cell; column 1 ticks to 4; column 2 stays at 4 with the tag "count centromeres" and eight chromatid chips pop in; column 3 ticks to 8 with a 4 + 4 split; column 4 ticks to 4; a human row ticks 46, 92 chromatids, 92, 46; "never halved" writes on',
                ['CountTracker', 'NumberTicker', 'chip pop', 'HandText write-on'], 'Hold the full tracker'],
    'identical': ['new', 'Model cell at metaphase with the tracker parked small, a bracket and equals sign between chromatids, arrows to opposite poles and a mini-split with ticks', 'Explains why the two new cells are identical, using the fact that sister chromatids are copies', 'sister chromatids are copies of the same chromosome / opposite ends / both sets / attached from both ends before anaphase starts',
                  'The two chromatids of one chromosome light with an equals sign, arrows run to opposite poles, a mini-split shows one copy of every bar in each end, and a checkpoint tag appears',
                  E, 'The model cell returns at metaphase with the tracker small; the chromatids of the long plum X light and a bracket with "=" appears; arrows run to opposite poles; a mini-split lands one copy of each bar in each end with ticks and the note "both long bars and both short bars are here"; a checkpoint tag writes on',
                  ['bracket draw', 'DrawPath arrows', 'bar split', 'tick pop', 'HandText write-on'], 'Hold the mini-split'],
    'not-perfect': ['new', 'Short model cell strip with a flipped base letter on one chromatid, a mutation tag that follows one daughter only, and an extra and a missing chromosome', 'Qualifies accurate with the two ways mitosis can go wrong, without alarming the student', 'accurate, not perfect / is a mutation / one new cell gets an extra chromosome and the other is one short',
                     'A base letter flips on one chromatid and the mark follows one daughter and its descendants, then both chromatids go to one end leaving one cell extra and one short',
                     E, 'A grey tag "mutation: a change in the base order" appears on one chromatid; only one daughter carries the mark and passes it to its two cells; a second strip shows both chromatids of one chromosome moving to one end with the tags "one extra" and "one short"; "checks catch many, not all" writes on',
                     ['tag pop', 'cell split', 'lineage strip', 'HandText write-on'], 'Hold the two ways it can go wrong'],
    'uses': ['new', 'Four small icons with tags and mini cells: growth, repair, replacement and identical offspring (yeast, amoeba, cutting), with a bacterium fission note', 'Closes the explanation with the purposes of mitosis, linked back to the opening graze', 'how an organism grows from one cell / how a graze heals / identical offspring / Bacteria have no nucleus',
             'Four icons come up in a row each with its mini dividing cell, the hook patch is shown healed, and a bacterium splitting is marked as fission without mitosis',
             E, 'Icons for growth, repair, replacement and identical offspring land in turn; the hook\'s closed skin patch returns on "how a graze heals"; yeast, amoeba and cutting icons appear with the tag "nucleus divides by mitosis"; a bacterium splits with the tag "no nucleus: fission, not mitosis"',
             ['icon pop', 'HandText write-on', 'plate reuse', 'cell split'], 'Hold the four icons'],
    'attempt': ['new', 'Two numbered vignettes: a fruit fly body cell with its conditions and demands, and a part-way cell with six X-shaped chromosomes lined up with fibres attached; no tracker, stage strip or tags', 'Unseen transfer on counting chromosomes and chromatids and on stage recognition in a new picture, with every demand and condition visible', 'a fruit fly body cell has 8 chromosomes / Name the stage and count the chromosomes / Assume no mistakes / Pause here to answer',
                'The countdown ring runs through the answer-free thinking hold',
                E, 'The two vignettes appear as each is named with all conditions and demands on screen; the tracker, stage strip and tags are absent; the countdown ring starts after the narration',
                ['Countdown ring', 'Enter reveals'], 'Quiet answer-free thinking hold with a 10 second countdown'],
    'feedback-one': ['adjust', 'Vignette one enlarged on the painted cell plate (nospindle, then pinching) with eight pink and teal chromosome plates: single plates crossfade to duplicated plates while a coded counter stays at 8 and a chip ticks to 16 chromatids, then 8 in each new cell; one crossed chip', 'Brief feedback (owner rule 16 Oct): gives the answers and the key reason (the copies stay joined at their centromeres) and crosses one classic mistake, halving, then moves on', 'still has 8 chromosomes / 16 chromatids / each new cell has 8 / you halved the number',
                     'The chromosome plates double while the counter holds at 8 and a chip ticks to 16, the cell pinches to 8 in each, and one halving chip is crossed',
                     E, 'Single plates crossfade to duplicated plates with the chromosome counter held at 8 and a chip ticking to 16 chromatids; the board crossfades to the pinching cell plate with 8 plates and a coded 8 in each half; the chip "4 in each (halved)" writes on and is crossed with a grey scribble',
                     ['plate crossfade', 'NumberTicker counter', 'Mark cross', 'HandText write-on'], 'Brief hold on the corrected counts, then move on'],
    'feedback-two': ['adjust', 'Vignette two enlarged: the dividing cell plate with six duplicated chromosome plates lined up, a pen tapping each painted centromere with a counter to 6, the stage strip with metaphase lit and one crossed chip', 'Brief feedback (owner rule 16 Oct): names the stage from the lined-up chromosomes, gives the count by centromeres and crosses one classic mistake, counting chromatids', 'so this is metaphase / Count the centromeres / 6 chromosomes / you counted chromatids',
                     'The metaphase chip lights, a pen taps six centromeres while a counter reaches 6, and a chip for 12 is crossed as the two chromatids of one X light',
                     E, 'The stage strip returns small with "2 metaphase" lit; a pen taps each painted centromere, a cream disc pops on each and a counter reaches 6 with "6 centromeres = 6 chromosomes"; the chip "12 chromosomes (counted chromatids)" appears and is crossed',
                     ['pen tap counter', 'NumberTicker counter', 'step chip', 'Mark cross'], 'Brief hold on the stage strip with metaphase lit, then move on'],
    'memory': ['adjust', 'Five large amber letters I P M A T each with a small icon and keyword, a bracket over the four mitosis steps, a cytokinesis chip and the counting rule', 'Gives the order aid after the stages are understood, repeats the counting rule and hands off to meiosis', 'I P M A T / count the centromeres, not the chromatids / Next: meiosis',
               'The five letters write on one at a time with their icons, a bracket drops over the four steps, a final chip adds cytokinesis, and the next chip slides in',
               E, 'The letters write on on each spoken name with an icon and keyword; a bracket drops over P M A T and a grey tag under I reads "interphase comes before mitosis (the copying)"; a chip "then split" writes after T; a pen taps the centromere rule; a chip "Next: meiosis" slides in',
               ['HandText write-on', 'icon pop', 'bracket draw', 'chip slide-in'], 'Hold the letters and the rule'],
    'key-notes': ['new', 'Key notes card with the memory aid in large writing', 'Essentials to copy into books', 'key notes',
                  'Notes appear then stay still for copying',
                  H, 'The key notes and the memory aid appear and lock', ['Enter reveals'], 'Quiet copy hold of about 75 seconds with pause invitation'],
}


B5B_ROWS = {
    'hook': ['new', 'Coded family scene: parents holding an egg and a sperm cell, two brothers with visibly different features, paths from the gametes to a zygote above each brother', 'Poses the two questions on a familiar observation: siblings differ, yet each began from one set of chromosomes from each parent', 'Two brothers have the same parents / one sperm and one egg / halve its chromosome number',
             'A sperm and an egg path-draw from the parents to a small cell above each brother, a ring marks the one set each carried, and the heading writes on its question',
             E, 'The parents and the two brothers appear with differing features; a sperm and an egg draw from the parents and meet in a zygote above each brother on "one sperm and one egg"; a scribble circle lands on one gamete with "one set"; the heading writes on',
             ['DrawPath', 'ScribbleCircle', 'HandText write-on', 'plate build'], 'Hold on the two brothers and the question'],
    'why-halve': ['new', 'Body cell with a 46 ticker, a mitosis arrow making a sperm and an egg tagged 46, a zygote climbing to 92 and 184 with a grey cross, then the correct chain 46, 23, 46', 'Shows the cause for halving before meiosis is named: gametes made by mitosis would double the number every generation', 'made by mitosis, like skin cells / 92 / 184 / one set, 23 chromosomes / copies its DNA once, then divides twice',
                 'The wrong chain climbs from 46 to 92 to 184 and is crossed, then the board wipes to the correct chain 46, 23, 46 and the rule one copy, two divisions writes on',
                 E, 'The body cell ticks to 46; the mitosis arrow makes gametes tagged 46; the zygote ticker climbs to 92 and then 184 with a grey cross and "the number would double every generation"; the board wipes to the correct chain with 23 in each gamete and 46 in the zygote; "one copy, two divisions" writes on on the meiosis cue',
                 ['NumberTicker', 'DrawPath arrows', 'Mark cross', 'board wipe', 'HandText write-on'], 'Hold the correct chain'],
    'model-alleles': ['adjust', 'The b05a model cell (long and short plum and teal bars) with labelled allele beads and dotted same-gene links', 'Adds alleles to the familiar model so crossing over and assortment can be seen as mixing existing versions', 'our model cell again / a plum version and a teal version / a capital and a small letter, only to tell them apart',
                      'The model cell returns as single threads, beads pop onto matching levels of the plum and teal bars and dotted lines link each pair of versions',
                      E, 'The model cell settles with its tag; a plum bead appears near the top of the long plum bar and a teal bead at the same level of the long teal bar with a dotted link and "same gene, two versions"; the lower gene and the short pair follow; a grey tag says the letters are labels only',
                      ['bead pop', 'DrawPath link', 'HandText write-on', 'plate reuse'], 'Hold the labelled model cell'],
    'prophase-one': ['adjust', 'Four bars doubling into joined threads with alleles on both chromatids, the stage strip with a meiosis I divider, and homologous partners sliding side by side', 'Starts the first division and gives the reason for pairing: one partner of each pair can then go to each end', 'every chromosome is copied / prophase one / side by side, gene against gene / one partner of each pair to each end',
                     'The bars double, the stage strip lands, and each chromosome slides beside its homologous partner, gene against gene',
                     E, 'The four bars duplicate and snap at a centromere disc with "copied once: each chromosome has 2 sister chromatids"; the stage strip lands with the divider "meiosis I" and "1 prophase I"; the plum and teal long chromosomes slide together and the short pair follows, with dotted links lining up the matching genes',
                     ['bar duplicate', 'PairUp slide', 'step chip', 'DrawPath link'], 'Hold the paired chromosomes'],
    'crossing-what': ['new', 'Paired long chromosomes enlarged, inner chromatids lit, an amber break mark between the two genes, and a CrossOver swap of the lower pieces', 'Shows what crossing over is before naming it, and separates non-sister from sister chromatids', 'break at the same place and swap the matching pieces / non-sister chromatids / This is crossing over',
                      'A push reaches the pair, the two inner chromatids light, both break at the same level and the lower pieces swap with their colours following their origin',
                      E, 'The camera pushes to the pair; scribble circles land on the inner plum and teal chromatids in turn; an amber break mark appears between the two genes on both; the lower pieces swap over three seconds; "non-sister chromatids" and "crossing over" write on',
                      ['CameraStage push', 'ScribbleCircle', 'CrossOver', 'HandText write-on'], 'Hold the swapped chromatids'],
    'crossing-makes': ['new', 'The same board with the four long chromatids tagged A B, A b, a B, a b, a crossed ghost bead labelled new and a caption', 'Shows crossing over makes new combinations of existing alleles and no new alleles', 'It does not make new alleles / new combinations of the alleles already there / even the sister chromatids',
                       'Circles land on the four long chromatids with their letter tags, a ghost bead labelled new is crossed out, and a caption says it is normal and regulated',
                       E, 'Scribble circles land on the four long chromatids in turn with tags "A B", "A b", "a B", "a b" and a bracket "4 different chromatids"; a ghost bead labelled "new" gets a flat grey cross with "no new allele"; a caption says "normal and regulated, not an error"',
                       ['ScribbleCircle', 'bracket draw', 'Mark cross', 'HandText write-on'], 'Hold the four different chromatids'],
    'metaphase-one-line-up': ['adjust', 'The nuclear envelope dashing away, spindle poles and fibres, and the two pairs sliding to the middle with one partner facing each pole', 'Shows the first lining-up and how it differs from mitosis (pairs, not single chromosomes)', 'the nuclear envelope breaks down / metaphase one / one partner facing each end',
                              'The envelope breaks into dashes, fibres grow, and the two pairs slide to the middle with one partner facing each pole and fibres attaching',
                              E, 'The first chip stays lit; the envelope dashes away and fibres draw from the poles; the chip "2 metaphase I" lands; the pairs slide to the middle as two units with one partner facing the left pole and the other the right; fibres attach to the centromeres',
                              ['envelope fade', 'DrawPath fibres', 'PairUp slide', 'step chip'], 'Hold the lined-up pairs'],
    'independent-assortment': ['new', 'Same board with coin flips above each pair, a TwoWays shuffle landing on line-up 1 and a ghost board showing line-up 2', 'Shows the direction is chance for each pair and names independent assortment after the idea', 'Which partner faces which end is chance / plum long and teal short on the left / This is independent assortment',
                              'A coin flips above each pair in turn and the pairs face either way, a ghost board shows the other line-up, and the name writes on',
                              E, 'A coin flips above each pair one at a time and each pair slides to face either way, landing on line-up 1; a ghost copy appears beside it with the short pair flipped and tagged "line-up 2"; "independent assortment" writes on in amber',
                              ['coin flip', 'TwoWays shuffle', 'ghost overlay', 'HandText write-on'], 'Hold both line-ups side by side'],
    'first-division': ['new', 'Line-up 1 whole X shapes travelling to opposite poles with discs staying whole, brackets for one of each kind, and two cells with half the number', 'Shows what separates in the first division and that this is the step that halves the number', 'the fibres pull the homologous partners apart / the centromeres do not split / one of each kind of chromosome, which is one set / half the chromosome number',
                       'Whole X shapes travel to opposite ends with their centromeres intact, brackets mark one of each kind at each end, and the cell divides into two with half the number',
                       E, 'The chip "3 anaphase I" lands; the plum pair goes left and the teal pair goes right as whole X shapes; a circle on one disc reads "centromere stays whole: chromatids not separated"; brackets read "one of each kind"; the chips telophase I and cytokinesis land and two cells form tagged "half the number"',
                       ['PairUp slide', 'ScribbleCircle', 'bracket draw', 'cell pinch', 'step chip'], 'Hold the two cells'],
    'second-division': ['new', 'Meiosis II divider and stage chips, a grey tag for no copying between divisions, the left cell enlarged with its chromosomes lining up on their own and chromatids separating', 'Gives the cause for a second division and shows what separates in it', 'A gamete cannot keep doubled chromosomes / In anaphase two, the centromeres split / the two cells get different chromosomes',
                        'The second-division chips land with a no copying tag, each doubled chromosome lines up on its own, the centromeres split and the chromatids are pulled apart',
                        E, 'The divider "meiosis II" and chips for prophase II to telophase II land in turn; a grey tag with a cross reads "no copying between the divisions"; the left cell enlarges and its chromosomes line up each on its own; the centromeres split and the chromatids move apart; the two cells receive different chromosomes',
                        ['step chip', 'Mark cross', 'bar split', 'cell pinch'], 'Hold the finished second division'],
    'four-cells': ['new', 'FourCells row under the parent cell with letter labels and haploid tags, a bracket for four different cells and a crossing-over toggle that collapses them to two kinds twice', 'Shows the end state and what crossing over adds, with the no crossing over contrast', 'one cell has made four haploid cells / all four differ / Now switch crossing over off / only two kinds, each twice',
                    'Four cells settle in a row with their letter labels and a bracket, then a toggle switches crossing over off and the labels collapse to two kinds, each twice',
                    E, 'Four cells appear under the parent each with two single-thread chromosomes, letter labels and "haploid: 2 chromosomes"; a bracket reads "4 different haploid cells (in this cell)"; a toggle switches off on "switch crossing over off" and the labels collapse to two kinds each twice',
                    ['FourCells', 'bracket draw', 'toggle flip', 'label collapse'], 'Hold the two-kinds row'],
    'tracking': ['adjust', 'Count tracker with four columns (start, after copying, after division 1 each cell, after division 2 each cell), mini cell icons, chromosome row and a chromatids-joined-copies-only row, then the human numbers', 'Tracks the numbers through both divisions so the halving and the loss of sister chromatids are visible', 'which starts with four chromosomes / eight chromatids / none has a sister chromatid / from 46 chromosomes to 23 in each of four cells',
                 'Each column fills as its figure is spoken, the chromatid row stays at zero in the last column, and the human row repeats the pattern',
                 E, 'The tracker draws on beside the small model cell; columns tick 4, 4, 2, 2 for chromosomes and 0, 8, 4, 0 for chromatids as spoken; the last column notes no sister chromatids; a human row runs 46, 46, 23, 23 with 92 chromatids after copying',
                 ['CountTracker', 'NumberTicker', 'chip pop', 'HandText write-on'], 'Hold the full tracker'],
    'combinations': ['new', 'CombosGrid on the model board: two coins flipping, a 2 by 2 grid of mini gametes, a doubling to 2 to the power n, and a human row to 2 to the power 23', 'Counts the whole-chromosome combinations from assortment alone and states honestly that two gametes almost never match', 'the choices multiply / 2 to the power n / more than 8 million / almost never match, but it is possible',
                     'Two coins flip, a 2 by 2 grid of mini gametes appears, the doubling rule writes on, and the human number counts up',
                     E, 'The tracker shrinks to a thin strip; the two pairs return as coins flipping between two faces; a 2 by 2 grid of mini gametes draws with the four line-up labels; "2 to the power n" writes on; a human row shows 23 pairs and "2 to the power 23" with "more than 8 million"; a caveat chip says almost never match, but it is possible',
                     ['CombosGrid', 'coin flip', 'NumberTicker', 'HandText write-on'], 'Hold the grid and the human count'],
    'fertilisation': ['new', 'Two 23 gametes in one colour each travelling together and merging into a 46 zygote, with the generation chain 46, 23, 46 repeating', 'Closes the loop: meiosis halves and fertilisation restores, so the number stays steady', '23 plus 23 makes 46 again / Meiosis halves the number and fertilisation restores it / the number stays the same in every generation',
                      'Two gametes each tagged 23 travel together and merge into a 46 zygote, then the chain repeats for another generation',
                      E, 'A plum gamete and a teal gamete tagged "each gamete brings one set" travel together and merge; the zygote nucleus shows a plum set and a teal set tagged "one from each gamete"; the generation chain ticks 46, 23, 46 and repeats once',
                      ['TravelingDotOnPath', 'merge animation', 'NumberTicker', 'HandText write-on'], 'Hold the repeating chain'],
    'compare': ['new', 'CompareBoard with mitosis and meiosis columns and rows for divisions, cells made, chromosomes in each and alike or different, on the same model cell with the tracker at full size', 'Lets the student compare the two divisions on the one model cell, and puts the key difference where it starts, at the middle', 'Mitosis is one division that makes two cells / Meiosis is two divisions after one copy / usually different from each other / homologous pairs line up and the partners separate',
                'The board builds one row at a time on the spoken words, the tracker columns for each new cell sit beside it, and the line-up in the middle is shown for each',
                E, 'The two columns build row by row: divisions 1 against 2, cells made 2 against 4, chromosomes in each 4 against 2, alike or different; the tracker is redrawn at full size; the middle line-up is shown with single chromosomes for mitosis and homologous pairs for meiosis I',
                ['CompareBoard', 'row build', 'CountTracker', 'HandText write-on'], 'Hold the finished comparison'],
    'attempt': ['new', 'Two numbered vignettes: a pea plant body cell with 14 chromosomes in 7 homologous pairs and its conditions, and a part-way cell with six lined-up X shapes in three pairs and its demands; no tracker, stage strip or hints', 'Unseen transfer on halving, combinations and stage recognition, with every demand and condition visible', 'Two questions, both on screen / a pea plant / part-way through a division / Pause here to answer',
                'The countdown ring runs through the answer-free thinking hold',
                E, 'The two vignettes appear as each is named with all conditions and demands on screen; the tracker, stage strip and tags are absent; the countdown ring starts after the narration',
                ['Countdown ring', 'Enter reveals'], 'Quiet answer-free thinking hold with a 10 second countdown'],
    'feedback-one': ['adjust', 'Vignette one replayed: seven small pairs of pink and teal single chromosome plates, one from each pair sliding into a gamete with a counter to 7, seven coins and a doubling ticker to 128, two gametes joining to 14 and one crossed chip', 'Brief feedback (owner rule 16 Oct): gives the three answers with the rule (one from each pair, the choices multiply, 7 plus 7) and crosses one classic mistake, adding instead of multiplying, then moves on', 'one from each pair / the choices multiply / which is 128 / The fertilised egg holds 14 / instead of multiplying',
                     'One plate from each pair slides into a gamete as a counter ticks to 7, seven coins flip and the ticker doubles to 128, two gametes join into 14, and one chip is crossed',
                     E, 'A plate from each of seven pairs slides into a gamete with a counter to 7; seven coins flip and the ticker runs 2 to 128 with "2^7 = 128" in amber; two gametes of 7 join into 14; the chip "14 combinations (2 x 7)" appears and is crossed with a grey scribble',
                     ['coin flip', 'NumberTicker', 'plate slide', 'Mark cross'], 'Brief hold on the corrected answers, then move on'],
    'feedback-two': ['adjust', 'Vignette two replayed: the dividing cell plate with three painted homologous pair plates lined up, a circle on one whole centromere, the pairs splitting into duplicated plates that travel to opposite ends with 3 at each end and one crossed chip', 'Brief feedback (owner rule 16 Oct): names the division and stage from the pairs with no centromeres split, gives 3 per cell because the partners separate, and crosses one classic mistake, keeping the number', 'lined up in homologous pairs / no centromeres split / metaphase of meiosis one / each cell will hold 3 chromosomes / you kept the number',
                     'The pairs light as meiosis I, a circle marks a whole centromere, the partners pull apart with 3 at each end, and one chip for 6 is crossed',
                     E, 'The pair plates light with "pairs lined up: meiosis I"; a scribble circle lands on one unsplit centromere; each pair plate becomes two duplicated plates that travel to opposite ends and each end reads "3 chromosomes"; the chip "6 (kept the number)" appears and is crossed',
                     ['plate swap', 'ScribbleCircle', 'DrawPath arrow', 'Mark cross'], 'Brief hold on the 3 and 3 split, then move on'],
    'memory': ['adjust', 'Two big amber lines with icons (paired bars pulled apart, a doubled bar splitting), a third join icon line, a silent who-does-what strip and a next-lesson chip', 'Gives the reusable aid, keeps pair and copy distinct, closes with fertilisation and hands off to DNA arrangement', 'meiosis one splits the homologous pairs / Meiosis two splits the sister chromatids / fertilisation joins two gametes and restores the number / how DNA is arranged in different kinds of cell',
               'The two lines write on one at a time under their icons, the fertilisation line joins them, and a next chip slides in',
               E, '"Meiosis I splits the homologous pairs" writes on with a paired-bar icon and "halves the number"; "Meiosis II splits the sister chromatids" writes on with a doubled-bar icon and "the two halves of each doubled chromosome"; "fertilisation restores it" writes on with a join icon; a chip "Next: how DNA is arranged" slides in',
               ['HandText write-on', 'icon pop', 'chip slide-in'], 'Hold the three lines'],
    'key-notes': ['new', 'Key notes card with the memory aid in large writing', 'Essentials to copy into books', 'key notes',
                  'Notes appear then stay still for copying',
                  H, 'The key notes and the memory aid appear and lock', ['Enter reveals'], 'Quiet copy hold of about 75 seconds with pause invitation'],
}


# Revision 16 Oct (owner): Codex brief 54 painted chromosome and cell plates replace the coded bars and cell outlines
# in these scenes; coded labels, counts and arrows stay on top. Visual-only change: narration and takes are unchanged.
PLATE_NOTE = 'Codex brief 54 painted chromosome and cell plates (b5x-*) with coded labels, counts and arrows on top: '
for _sid in ['diploid-haploid', 'why-copy-first', 'the-copy', 'interphase', 'prophase', 'anaphase', 'telophase-cytokinesis', 'tracking', 'identical', 'not-perfect', 'uses', 'attempt', 'memory']:
    B5A_ROWS[_sid][0] = 'adjust'
    B5A_ROWS[_sid][1] = PLATE_NOTE + B5A_ROWS[_sid][1]
for _sid in ['hook', 'model-alleles', 'prophase-one', 'crossing-what', 'crossing-makes', 'metaphase-one-line-up', 'independent-assortment', 'first-division', 'second-division', 'four-cells', 'tracking', 'combinations', 'fertilisation', 'compare', 'attempt', 'memory']:
    B5B_ROWS[_sid][0] = 'adjust'
    B5B_ROWS[_sid][1] = PLATE_NOTE + B5B_ROWS[_sid][1]


B6A_ROWS = {
    'hook': ['adjust', 'Coded human cell (or painted animal cell plate) with a plum DNA thread drawing out of the nucleus, a tennis ball morph, a landmark strip and a bacterium sliding in to split the board', 'Poses the scale puzzle (two metres of DNA in a tiny nucleus) and the comparison question with a bacterium that has no nucleus',
             'two metres / six thousandths of a millimetre / Blow that nucleus up / a bacterium, which has no nucleus',
             'A helix flashes then a plum thread draws out of the nucleus across the screen, the nucleus morphs to a tennis ball while the thread runs off the edge past landmarks, then a bacterium slides in and the board splits',
             E, 'The helix flashes with "billions of letters"; the cell centres with a pen ring on the nucleus; the plum thread draws across the full width with "about 2 metres"; a tiny ring reads "nucleus: about 6 micrometres (0.006 mm)"; on "Blow that nucleus up" the nucleus morphs into a tennis ball tagged "enlarged about 11,000 times" and the thread runs off the edge past landmarks to "more than 10 km"; a bacterium slides in on the left, the board splits and the heading "How is DNA arranged in a bacterium and in your cells?" writes on',
             ['DrawPath thread', 'CameraStage push', 'ScribbleCircle', 'morph', 'HandText write-on'], 'Hold about 2 seconds on the question'],
    'two-kinds-of-cell': ['adjust', 'Split board with a bacterium on the left and a eukaryotic cell on the right, the b04 helix collapsing to a plum thread in each, a dashed nuclear envelope and a grey cross over a ghost envelope', 'Says where the DNA sits and what encloses it before naming prokaryote and eukaryote, and keeps the DNA as the same molecule in both',
                          'the same double helix / where the DNA is kept / a nucleus, an inner compartment with a membrane / has no nucleus / Bacteria are the prokaryotes',
                          'The helix draws on and collapses to a plum thread in each cell, scribble circles land on each interior, the dashed envelope draws round the right cell DNA, and a cross lands on a ghost envelope on the left',
                          E, 'The helix draws on with "same four bases, A, T, C, G" then collapses to a plum thread in each cell tagged "one thread = the whole double helix"; scribble circles land on each cell interior; the dashed envelope draws round the right DNA with "eukaryote: DNA inside a nucleus"; a grey cross lands on a ghost envelope on the left with "prokaryote: no nucleus"; a bacterium doodle ticks',
                          ['DrawPath helix', 'ScribbleCircle', 'dashed ring draw', 'Mark cross', 'HandText write-on'], 'Hold about 1 second after the last word'],
    'bacterium-ring': ['adjust', 'Camera push into a painted rod-shaped bacterium plate with a coded plum DNA thread whose ends fuse into a ring, a pale nucleoid patch and a ghost dashed ring', 'Builds the bacterial chromosome in order: ends joined, so a ring, then the membrane-free nucleoid region',
                       'whose two ends are joined / lies in one region / nucleoid / has no membrane',
                       'The thread draws across the cell with amber end dots, the ends travel together and fuse into a ring with a click, the ring settles into a pale patch that is circled, and a grey cross lands on a ghost dashed ring',
                       E, 'The right half of the board dims; the thread draws with amber end dots; on "whose two ends are joined" the ends fuse into a ring and "circular chromosome: a ring" writes on; on "lies in one region" the ring settles into a pale patch with a scribble circle; "nucleoid" writes in amber with the gloss "nucleus-like"; on "has no membrane" a grey cross lands on a ghost dashed ring with "no membrane around it"',
                       ['CameraStage push', 'DrawPath thread', 'ring fuse', 'ScribbleCircle', 'Mark cross'], 'Hold about 1 second after the last word'],
    'coiling': ['new', 'Coded giant ring crossing the cell wall with a scale bar (about 1.5 mm against 2 to 4 micrometres), a rubber-band loop twisting, a coiled ring with sand-coloured protein blobs, and a crossed tangled ghost', 'Shows why the ring cannot float loose (far longer than the cell) and how twisting and protein grips pack it without a membrane',
                'one and a half millimetres / Enzymes twist the ring / proteins grip the coiled ring / not floating loose',
                'The ring swells to a giant loop beside the scale bar, a rubber-band loop twists, the cell ring twists into coils, protein blobs snap on at many points, and a cross lands on a tangled ghost',
                E, 'The ring swells into a giant loop crossing the cell wall with the scale bar "ring about 1.5 mm; cell about 2 to 4 micrometres"; a rubber-band loop tagged "analogy: twisting a loop of rubber band" twists; the cell ring twists and folds into coils; sand-coloured blobs snap on at many points with "held compact by proteins"; the coiled ring fits the nucleoid patch; a grey cross lands on a tangled ghost with "not floating loose"',
                ['scale bar', 'coil twist', 'blob snap-on', 'Mark cross', 'HandText write-on'], 'Hold about 1 second after the last word'],
    'plasmids': ['new', 'Two or three small plum rings in the bacterium outside the nucleoid, a gene bead with a pill icon, a second bacterium joined by a conjugation tube, and a grey tool tag', 'Defines plasmids as small separate rings, copied separately, and ties antibiotic resistance spread to conjugation the learner has seen',
                 'small, separate rings / copies a plasmid separately from the main chromosome / extra genes / pass DNA to each other',
                 'Small rings appear and are circled, one plasmid pulses and splits while the main ring stays still, a resistance bead lights, then a second bacterium slides in and a plasmid copy travels across a thin tube',
                 E, 'Two or three small rings appear outside the nucleoid with a scribble circle and "plasmid: small, separate ring", marked "not to scale"; one plasmid pulses and splits while the main ring stays still; a gene bead with a pill icon lights on one plasmid with "e.g. antibiotic resistance gene"; a second bacterium slides in with a thin tube "conjugation, as in the single-celled video" and a plasmid copy travels across and lights; the grey tag "plasmids are also used as tools in biotechnology, later" lands',
                 ['ScribbleCircle', 'ring split', 'TravelingDotOnPath', 'gene bead light', 'tag pop'], 'Hold about 1 second after the last word'],
    'eukaryote-linear': ['adjust', 'Coded eukaryotic cell cutaway with the nucleus enlarged, plum rods with amber end dots, a ticker to 46 with a model of 8 rods, and the rods straightening into the long thread', 'Shows that the eukaryotic DNA is several linear chromosomes, each one molecule with two ends, and sets up why the packing matters',
                         'one ring / several chromosomes / one DNA molecule with two ends / those two metres / That is why the packing matters',
                         'The camera moves to the right cell, a ghost ring flashes grey, the rods are counted by a pen tap, one rod lights with its two ends flashing, then the rods straighten into the long thread beside a nucleus-size line',
                         E, 'The camera moves to the right cell and the left half dims; plum rods fill the nucleus; on "one ring" a ghost ring flashes grey and fades; on "several chromosomes" a ticker runs to 46 with "model: 8 shown; human: 46"; on "one DNA molecule with two ends" one rod lights and its ends flash with "linear: two ends"; on "those two metres" the rods straighten end to end with "all 46 together: about 2 metres"; on "That is why the packing matters" the line "2 m of DNA in a nucleus about 6 micrometres across" writes on with "about 6 billion base pairs"',
                         ['CameraStage push', 'NumberTicker', 'ScribbleCircle', 'rod straighten', 'HandText write-on'], 'Hold about 1 second after the last word'],
    'why-thread-winds': ['new', 'Zoom into one rod, a painted spool and thread plate for one beat, sand-coloured histone discs with the plum thread winding round each, and negative and positive signs', 'Explains why the thread winds (it must fit and be found) and what holds it (opposite charges) before naming histones',
                         'wraps around groups of proteins called histones / negative charge / positive one / opposite charges attract',
                         'The camera zooms into one rod, a spool plate appears and fades, histone discs appear along the thread and the thread winds round each in turn, and minus and plus signs pulse',
                         E, 'The left half stays dimmed; a painted spool and thread plate tagged "analogy: thread on a spool" shows for one beat; on "wraps around groups of proteins called histones" sand discs appear along the thread and it winds round each in turn over about three seconds; "-" signs on the thread and "+" signs on the discs pulse on "negative charge" and "positive one" with "opposite charges attract"; the tag "histone: a packaging protein" lands',
                         ['CameraStage push', 'WindOnSpools', 'sign pulse', 'plate fade', 'tag pop'], 'Hold about 1 second after the last word'],
    'nucleosome-chromatin': ['adjust', 'The wound discs from the last scene kept on screen with a scribble circle on one disc, a bracket along the beaded thread and the thread folding into a looser coil', 'Names the nucleosome and chromatin as a separate short beat on a picture the learner has just seen',
                             'nucleosome / chromatin / folds it further',
                             'The spool plate fades, a scribble circle lands on one wound disc, a bracket draws along the whole beaded thread, and the thread folds into a shorter coil',
                             E, 'The spool plate fades while the wound discs stay; on "nucleosome" a scribble circle lands on one disc with "DNA wound on histones"; on "chromatin" a bracket along the whole beaded thread writes "chromatin"; on "folds it further" the beaded thread folds into a looser, shorter coil with "wound on histones, then folded further"',
                             ['ScribbleCircle', 'bracket draw', 'coil fold', 'HandText write-on'], 'Hold about 1 second after the last word'],
    'loosen-to-read': ['new', 'The beaded thread loosening and tightening around a gene bead, a magnifying glass reaching in, and a histone plus sign fading so the grip loosens', 'Shows why the winding is adjustable: a gene can only be used when reachable, and chemical tags change how tightly histones grip',
                       'loosen the thread where it needs to read a gene / tighten it elsewhere / weaken a histone\'s positive charge',
                       'The beaded thread loosens and tightens in a short loop, a pen taps a gene bead, the discs slide apart around it as a magnifying glass reaches in, the rest contracts, and a plus sign fades so the thread loosens',
                       E, 'The beaded thread loosens and tightens in a short loop while a pen taps a stretch with an amber gene bead; on "loosen the thread where it needs to read a gene" the discs slide apart around the bead and a magnifying glass reaches in with "gene reachable"; on "tighten it elsewhere" the rest contracts; on "weaken a histone\'s positive charge" the "+" on one histone fades and the thread loosens with "weaker + : looser grip"; the tags "histone tag: a small chemical group added to a histone" and "read a gene = use its instructions (next video)" land',
                       ['WindOnSpools reverse', 'gene bead light', 'icon slide', 'sign fade', 'tag pop'], 'Hold about 1 second after the last word'],
    'tight-for-division': ['adjust', 'The nucleus with a chromatin fibre folding into the b05a bar and X chromosome shapes in the same plum colour, and a scale bar', 'Ties the packing to mitosis the learner has met: much tighter winding makes short thick chromosomes that move without tangling',
                           'wound far more tightly / thousands of times',
                           'The chromatin fibre folds and refolds into the bar and X chromosome shapes while the scale bar reads about 10,000 times shorter',
                           E, 'The board switches to the nucleus; the chromatin fibre folds and re-folds into the b05a bar and X shapes with "mitosis chromosomes: chromatin wound tightly"; the scale bar reads "about 10,000 times shorter than stretched out" (screen only)',
                           ['fibre fold', 'scale bar', 'tag pop'], 'Hold about 1 second after the last word'],
    'organelle-dna': ['new', 'Painted animal cell cutaway with oval mitochondria outside the nucleus, a zoom to a small plum ring inside, a painted plant cell with chloroplasts, a bacterium drifting into a larger cell, and the 46 ticker with a ring added', 'Shows extra circular DNA outside the nucleus and gives the reason (bacterial origin), and prevents 46 being read as all of the cell DNA',
                      'Mitochondria / chloroplasts / came from bacteria that began living inside larger cells / In our cells / extra to the 46',
                      'The animal cell shows mitochondria and a zoom to a plum ring with copies fading in, a plant cell slides in with chloroplast rings, a bacterium drifts into a larger cell and a double arrow joins the two small rings, then the 46 ticker gains a ring',
                      E, 'An animal cell cutaway shows oval mitochondria outside an empty nucleus; a zoom shows a small plum ring with a few copies fading in and "many copies (one ring drawn for clarity)"; a plant cell slides in with chloroplast rings; a bacterium-shaped cell drifts into a larger cell with the grey tag "endosymbiosis"; the mitochondrion ring and a bacterium ring sit side by side with "alike: small rings, own DNA"; the animal cell returns and on "extra to the 46" the 46 ticker holds with a plum ring added and "46 is the nucleus count only"',
                      ['CameraStage push', 'plate slide-in', 'ring copy fade', 'double arrow draw', 'NumberTicker'], 'Hold about 1 second after the last word'],
    'side-by-side': ['new', 'Coded compare table on the fixed split board with rows nucleus, main DNA, where, packaging and extra DNA, tiny plum icons in each cell and a same-double-helix bar under it', 'Brings both arrangements together on the board the learner has used all lesson and states that the difference is the arrangement',
                     'one main ring in the nucleoid / several linear chromosomes in a nucleus / same double helix / The difference is the arrangement',
                     'The table builds one row at a time on the cue words with a plum icon in each cell, and a bar for the same double helix and four bases appears beneath it',
                     E, 'Both halves return to full strength; the table builds with headings "typical prokaryote (e.g. a bacterium)" and "typical eukaryote"; row 1 nucleus (none / present), row 2 main DNA (one ring / several linear chromosomes), row 3 where (nucleoid, no membrane / inside the nucleus), row 4 packaging (coiled, held by proteins / wound on histones: chromatin), row 5 extra DNA (plasmids / rings in mitochondria and chloroplasts) each with a tiny icon; the bar "same double helix, same four bases" appears under the table',
                     ['table build', 'icon pop', 'HandText write-on', 'bar reveal'], 'Hold about 1 second after the last word'],
    'writing-comparison': ['new', 'The compare table with a pen lighting row 2, a sentence frame in hand type with blanks filling from the row, and a crossed one-sided chip', 'Shows how a table row becomes a compare sentence with both sides, since exam answers need both sides in one sentence',
                           'both sides in one sentence / a circular chromosome / several linear chromosomes / Try the packaging row / coiled and held by proteins / wound on histones as chromatin',
                           'A pen lights row 2, the sentence frame writes beneath it and the blanks fill with whereas in amber, a one-sided chip is crossed, then row 4 lights and the frame resets and fills',
                           E, 'A pen tap lights row 2 and the frame "Bacterial DNA is ____, whereas eukaryotic DNA is ____." writes beneath; on "a circular chromosome" and "several linear chromosomes" the blanks fill with "whereas" in amber; the chip "Bacteria have a ring. (one side only)" is crossed; on "Try the packaging row" row 4 lights, the frame resets and the blanks fill on "coiled and held by proteins" and "wound on histones as chromatin"',
                           ['pen tap', 'HandText write-on', 'Mark cross', 'row highlight'], 'Hold about 1 second after the last word'],
    'memory': ['new', 'Two big handwritten amber lines with a bare bacterium doodle and a nucleus doodle, the nucleoid gloss sliding in, and a second pair of lines with a ring, rods and a mitochondrion', 'Gives two reusable aids after the arrangement is understood: the Greek roots for the nucleus and a ring-versus-lines shape line',
               'Karyon / Pro means before / Eu means good / bacteria use a ring',
               'The pro-karyote line writes on, then the eu-karyote line, the nucleoid gloss slides in beside them, and a second pair of lines writes on with a ring, rods and a mitochondrion',
               E, '"pro-karyote: before a kernel (no nucleus)" writes on with a bare bacterium doodle; "eu-karyote: eu = good, a proper (true) nucleus" writes on with a nucleus doodle; underlines land under "pro", "eu" and "karyon"; the "nucleoid = nucleus-like" gloss slides in as the same word family; then "bacteria: ring" and "us: lines, in a nucleus" write on with the ring and rods, and "ring kept in mitochondria" with a small mitochondrion',
               ['HandText write-on', 'underline draw', 'icon pop', 'gloss slide-in'], 'Hold about half a second after the last word'],
    'attempt': ['new', 'A question card headed "Two cells, described by their DNA" with columns X and Y under plain grey cell outlines (nothing drawn inside), two evidence rows per cell, demands (a) and (b) and two answer boxes', 'Harder unseen transfer: the student translates DNA descriptions into structures, identifies each cell as precisely as possible with evidence, and explains the circular organelle DNA, with no structure or cell-type names on the card',
                'described only by their DNA / as precisely as you can / explain why some of X\'s DNA is circular / Pause here to answer',
                'The evidence rows write on one at a time, the precision word is underlined, the explain demand writes on, then the countdown ring runs through the answer-free thinking hold with the whole card on screen',
                E, 'The card writes on with X rows "Long, linear DNA molecules, wound on histones, inside a compartment with a membrane" and "Small circular DNA molecules in two different kinds of organelle" and Y rows "One long circular DNA molecule, coiled and held by proteins, with no membrane around it" and "Several small, separate rings of DNA; one carries an antibiotic resistance gene"; demand (a) "What kind of cell is X, and what kind is Y? Be as precise as you can, and give evidence from the card for each." writes on with "precise" underlined in amber; demand (b) "Explain why some of X\'s DNA is circular, like Y\'s." writes on; the card, rows and demands stay at full size during and after the countdown; no structure or cell-type word appears',
                ['HandText write-on', 'underline draw', 'Countdown ring', 'Enter reveals'], 'Quiet answer-free thinking hold with a 10 second countdown; the full card stays on screen'],
    'feedback-one': ['new', 'The item one card held at the left third with the inactive column dimmed, each evidence row turning into its picture (beaded rods in a dashed nucleus ring, mitochondrion and chloroplast icons with rings, an animal-cell chip, the coiled ring with protein blobs and plasmids), an endosymbiosis replay with a double arrow, a model-answer column joined to the rows by amber connectors, and a crossed mistake chip', 'Models a full answer one point at a time, each conclusion tied to its evidence, explains why plant is more precise than eukaryote, gives the endosymbiosis cause and crosses out the classic mistake that circular DNA means prokaryote',
                     'That is a nucleus / mitochondria and chloroplasts / mitochondria only / There is no nucleus / came from bacteria / look again',
                     'Each evidence row lights and becomes its picture, the matching model-answer line writes on with an amber connector, the column focus moves from X to Y, the endosymbiosis motion replays small, and the mistake chip is scribbled out with an arrow to the nucleus',
                     E, 'On "linear and wound on histones, inside a compartment with a membrane" X row 1 lights and beaded plum rods draw inside a dashed ring; on "That is a nucleus" the ring is labelled and "X: ... = nucleus, so eukaryote" writes on; on "mitochondria and chloroplasts" mitochondrion and chloroplast icons pop in with plum rings and "most likely a plant cell" writes on; on "mitochondria only" an animal-cell chip shows an empty chloroplast slot crossed; X dims and Y lights; the coiled ring with sand protein blobs and a crossed ghost membrane draws, the plasmids are circled; on "There is no nucleus" "Y: ... so prokaryote (e.g. a bacterium)" writes on; on "came from bacteria" a small endosymbiosis replay and a double arrow "alike: rings, from bacteria" draw with line (b); the chip "X has circular DNA, so X is a prokaryote" takes a grey scribble cross with an arrow to the nucleus "the nucleus decides"; earlier pictures shrink to icons; ticks are amber',
                     ['row highlight', 'HandText write-on', 'ScribbleCircle', 'double arrow draw', 'Mark cross'], 'Settle on the full model answer for about a second'],
    'attempt-two': ['new', 'A question card with two small coded bacterium panels (type A with a resistance bead on a plasmid, type B with the bead on the main ring), a cluster of grey bacteria without the gene under each, the explain demand and one answer box', 'Harder unseen explain item: the student builds a cause chain from the plasmid form (copied separately, passed in conjugation) and the necessary condition (bacteria that lack the gene), with no conjugation or division cue drawn',
                    'type A / main chromosome / bacteria that lack the gene / Pause here to answer',
                    'The two panels and their tags write on, the grey clusters appear on the condition, the demand writes on, then the countdown ring runs through the answer-free thinking hold',
                    E, 'Panel A draws a bacterium with its main ring and a small plasmid carrying the amber pill bead, tagged "Type A: gene on a plasmid"; panel B draws a bacterium with the bead on its main ring, tagged "Type B: gene on the main chromosome"; on "bacteria that lack the gene" a grey cluster appears under each, tagged "mixed with bacteria that lack the gene"; the demand "Explain why the resistance gene can spread through the mixture faster from type A than from type B." writes on with a four-line answer box; no tube, arrow or dividing cell is drawn; panels, tags and demand stay during and after the countdown',
                    ['Enter reveals', 'HandText write-on', 'Countdown ring'], 'Quiet answer-free thinking hold with a 10 second countdown; the full card stays on screen'],
    'feedback-two': ['new', 'The two panels enlarged into two 16-cell populations, binary fission down a family-tree line in B, plasmid copying and conjugation tubes spreading the bead sideways in A, cell counters tagged as an illustration, sideways and downward arrows, a model-answer column and a crossed mistake chip', 'Models the explain answer one cause at a time on two populations so the student sees the gene spread down only in B and sideways and down in A, and crosses out the classic mistake that conjugation is reproduction',
                     'only when its cell divides / copied separately / keeps its own / pass it on / spreads sideways / No new cell is made',
                     'B divides with the bead passing only to offspring, then A copies its plasmid and passes copies along conjugation tubes with the donor keeping its own, new carriers pass it on while the counters diverge, arrows sweep sideways and down, and the mistake chip is crossed',
                     E, 'A dims; on "only when its cell divides" the B carrier splits into 2 then 4 down a family-tree line with "passed down to offspring only" and a counter "cells with the gene: 4", and the B model line writes on; B dims and A lights; on "copied separately" the plasmid pulses and splits; on "keeps its own" a conjugation tube draws, a copy travels across, the neighbour lights and the donor keeps its ring with a "kept" tag, and the A line writes on; on "pass it on" tubes fan out while divisions continue and the A counter passes B\'s (for example 11 against 4) with "illustration, not measured data"; on "spreads sideways" amber sideways arrows cross A and downward arrows cross B with "A: sideways (conjugation) and down (division)" and "B: down only"; the chip "conjugation is how bacteria reproduce" takes a grey scribble cross with "no new cell is made: a copy of DNA moves"',
                     ['binary fission split', 'ring split', 'TravelingDotOnPath', 'NumberTicker', 'Mark cross'], 'Settle on the two populations and the model answer for about a second'],
    'decision-rule': ['adjust', 'Three question chips with nucleus, ring and rod, and spool icons that tick on the matching half of the split board, and a next chip with a gene-to-mRNA doodle', 'Packs the lesson into three reusable questions about any picture of DNA and hands off to how a gene is read',
                      'is there a nucleus / a ring or a line / wound on histones / Next',
                      'The three question chips write on one at a time and each ticks on the matching half of the board, then a next chip slides in',
                      E, 'Three chips write on one at a time ("nucleus?", "ring or line?", "on histones?") each with a small icon; each ticks on the matching half so the left lights "bacterium" and the right lights "eukaryote" (screen only); both halves are at full strength; the chip "Next: how a gene is copied into mRNA" slides in with a gene-to-mRNA doodle',
                      ['HandText write-on', 'chip pop', 'tick', 'chip slide-in'], 'Hold about half a second before the notes'],
    'key-notes': ['new', 'Key notes card with the compare table, the four essentials and the memory line in large writing', 'Essentials to copy into books', 'key notes',
                  'Notes appear then stay still for copying',
                  H, 'The notes and the compare table appear and lock', ['Enter reveals'], 'Quiet copy hold of about 75 seconds with pause invitation'],
}

B6B_ROWS = {
    'hook': ['reuse', '''Painted cell protein synthesis plate (nucleus, pores, rough ER and free ribosomes), a plum thread, amber rings, a dotted path through a pore and a short terracotta strand''', '''Poses the problem before any term: the DNA stays in the nucleus, the ribosomes are outside, so how does the message get out''',
             'stays inside the nucleus / ribosomes / never leaves / sends out a copy',
             'A circle lands on the nucleus with a plum thread, ribosomes get amber rings, a bar blocks the pore for DNA, and a terracotta copy slides along the dotted path and out',
             E, '''The painted plate is centred and large; on "stays inside the nucleus" a scribble circle lands on the nucleus and a plum thread coils inside it ("DNA, wound on histones (last video)"); on "ribosomes" a pen taps painted dots on the rough ER and two free ones, each ringed amber ("ribosomes: build proteins"); on "never leaves" the thread pushes at the envelope and a grey bar flashes across a pore ("DNA stays in"); a dotted amber path draws from the nucleus through a pore to a ribosome with a "?" travelling along it; on "sends out a copy" a short terracotta strand slides along it and out; the heading "How does a gene get out of the nucleus?" writes on''',
             ['plate zoom', 'ScribbleCircle', 'DrawPath arrow', 'tag pop', 'strand slide'], '''Hold about 2 seconds on the question'''],
    'gene-and-mrna': ['new', '''Camera zoom into a coded nucleus board with a plum DNA ladder, an amber gene bracket, a terracotta mRNA strand, a polypeptide bead chip, the painted recipe book and copied page, and a five-row mapping''', '''Says what a gene does before naming mRNA and transcription, and gives the recipe-book analogy for a copy that leaves while the master stays''',
                      'gene / polypeptide / mRNA / transcription / recipe book / never allowed / as many copies',
                      'The plate zooms into the coded nucleus, a bracket marks the gene, a terracotta copy draws beneath it, the book plate enters with a five-row mapping and the loose page multiplies into three',
                      E, '''The camera zooms into the nucleus and the plate crossfades to the coded board; a long plum ladder runs across it; on "a section of DNA" an amber bracket marks one stretch and "gene" writes on; on "polypeptide" a grey chip shows beads folding into a blob; on "messenger RNA, or mRNA" a terracotta single strand draws beneath the gene; "transcription" writes in amber; on "recipe book" the board slides left and the painted book and loose page enter; the mapping writes row by row (library = nucleus, book = DNA, one page = a gene, photocopy = mRNA, kitchen = cytoplasm) lighting the matching part; on "as many copies" the page multiplies into three; the grey tag "analogy: the copy is not letter-for-letter (next)" lands''',
                      ['camera zoom', 'plate crossfade', 'bracket draw', 'HandText write-on', 'plate slide', 'row reveal'], '''Hold about 1 second after the last word'''],
    'rna-differences': ['new', '''B4 plum ladder with jigsaw base tiles beside a single terracotta strand, ribose and deoxyribose sugar pentagons, an amber U tile with the same notch as T, and the pair rule chip''', '''Shows the three differences between RNA and DNA on the molecules themselves and why U fits where T does''',
                        'single strand / ribose / uracil / A with U',
                        'The analogy plate leaves, three difference chips write on one at a time with their evidence, the U tile drops in for T and clicks against A, and the pair rule chip settles top right',
                        E, '''The analogy plate leaves; left, B4's ladder, right, a single terracotta strand with tiles; on "single strand" the lone backbone pulses while the ladder's two backbones are bracketed "two"; on "ribose" the sugar pentagons are tagged "deoxyribose" and "ribose"; on "uracil" a sand T tile lifts and an amber U tile with the same notch drops into its place; the U slides against a coral A tile and clicks, with a ghost T showing the same fit; on "A with U" the chip "RNA: A with U, C with G" writes top right and stays for scenes 4 to 7''',
                        ['tile fly-in', 'bracket draw', 'chip pop', 'pulse', 'HandText write-on'], '''Hold about 1 second after the last word'''],
    'polymerase-promoter': ['new', '''The DNA ladder in the nucleus close-up, a coded ochre RNA polymerase bean, a grey-plum promoter stretch with an amber start arrow, and a nine-base bubble with fading hydrogen bonds''', '''Says what the polymerase must find before naming the promoter, then shows the strands opening so the bases are exposed''',
                            'RNA polymerase / promoter / breaking the hydrogen bonds',
                            'The ochre bean drifts along the ladder, the promoter lights with an arrow, the bean settles on it, and the ladder opens into a bubble as the dotted bonds fade',
                            E, '''The ochre bean drifts along the ladder; on "promoter" a stretch left of the gene bracket lights grey-plum ("promoter: where the polymerase binds") with an amber arrow "gene starts here"; on "binds to" the bean settles over it with a soft click; on "pulls the two DNA strands apart" the ladder opens into a bubble about nine bases long; on "breaking the hydrogen bonds" the dotted bonds fade out and the separated tiles face the gap ("bases exposed"); the strands stay unnamed''',
                            ['slide', 'tag pop', 'bubble open', 'bond fade', 'arrow draw'], '''Hold about 1 second after the last word'''],
    'template-strand': ['new', '''The open bubble with the lower strand glowing amber and the upper strand dimmed to 35 per cent, tags for template and coding strand, and thin amber connectors to empty slots''', '''Names the template and coding strands and gives the cause of copying only one: the template fixes every base of the mRNA''',
                        'only one / template strand / coding strand / the template fixes every base',
                        'The lower strand glows with a read tag, the upper strand dims with a not-read tag, and amber connectors flick from each template tile to an empty slot',
                        E, '''On "only one" the lower strand glows amber ("template strand: read") and the upper dims to about 35 per cent ("coding strand: not read"); on "the template fixes every base" a thin amber connector flicks from each template tile to an empty slot beneath; no direction arrows yet''',
                        ['glow', 'dim', 'tag pop', 'connector flick'], '''Hold about 1 second after the last word'''],
    'direction': ['new', '''End tags 5' and 3' on both strands, small grey B4 arrowheads, a two-tile mRNA stub with a pulsing 3' tag, a free tile joining and one turned away, and two large amber process arrows labelled read and built''', '''Gives the cause of the direction rule (nucleotides join only at the 3' end) before the rule that the template is read 3' to 5', with one large arrow per strand''',
                  '''add each new nucleotide to the 3' end / grows from its 5' end to its 3' end / from its 3' end to its 5' end''',
                  "End tags write on, a free tile joins only at the 3' end while another is turned away, an amber arrow reads mRNA built 5' to 3', then an amber arrow reads template read 3' to 5' and the polymerase steps right so both arrows point the same way",
                  E, '''The end tags write on (template 3' left and 5' right; coding strand 5' left and 3' right) with each strand's own arrowhead drawn small and grey; on "add each new nucleotide to the 3' end" a two-tile terracotta stub appears under the template's left end with a pulsing 3' tag, a free tile joins only there and a second tile at the 5' end is turned away ("only at the 3' end"); on "grows from its 5' end to its 3' end" the amber arrow "mRNA built 5' to 3'" draws under the mRNA; on "from its 3' end to its 5' end" the amber arrow "template read 3' to 5'" draws along the template and the polymerase nudges one base right; the grey chip "antiparallel, as in DNA" lands''',
                  ['end tag write-on', 'tile dock', 'arrow draw', 'slide', 'tag pop'], '''Hold about 1 second on the two arrows'''],
    'worked-copy': ['adjust', '''The board reset to the site's template 3' TAC CGA ATT 5' in groups of three with a dim coding strand, the polymerase at the 3' end, free RNA tiles (wrong ones turned away) and a result line''', '''Worked example: each base is paired one at a time from the template, with wrong tiles turned away, so the pairing rule and direction are seen working''',
                    '''T A C, C G A, A T T / joins the 3' end of the one before / A U G, G C U, U A A''',
                    "The givens line writes, the polymerase sits at the 3' end, a free tile drifts in for each spoken pair (wrong tiles bounce off for the first three), the backbone extends and the bean moves right, then the full mRNA writes as the result line",
                    E, '''The givens line writes "Template strand: 3' TAC CGA ATT 5'" with the coding strand dim above; for each spoken pair a free tile drifts in from below and docks with a click, the terracotta backbone extending and the bean moving right one base; for the first three pairs a wrong tile tries first (G for T, a sand T with "T is DNA's base: RNA uses U", A for C) and is turned away; after the first codon the pace quickens; on "joins the 3' end of the one before" the 3' tag rides the growing end; on the final line "5' AUG GCU UAA 3'" writes under the tiles and the three Us glow amber''',
                    ['tile dock', 'wrong tile bounce', 'polymerase slide', 'result line write-on', 'glow'], '''Hold about 1.5 seconds after the last word'''],
    'coding-check': ['adjust', '''The coding strand returning to full strength and lining up above the finished mRNA with a pen running along both, T tiles flipping to amber U tiles, a result line and two chips''', '''Shows that the mRNA matches the coding strand with U for T, though it is built on the template, and flags the exam trap''',
                     'coding strand / T has become U / which strand',
                     'The coding strand brightens and slides over the mRNA, a pen ticks matching letters and flips each T to U, the result line writes, and two chips say what to do for each strand',
                     E, '''The coding strand returns to full strength, its tiles lift and it slides down to line up above the finished mRNA with 5' over 5'; a pen runs along both, ticking matching letters amber and flipping each of the three T tiles to an amber U ("T becomes U"); the result line "coding strand 5' ATG GCT TAA 3' = mRNA 5' AUG GCU UAA 3', with U for T" writes; on "which strand" the chips "given the template? pair it" and "given the coding strand? copy it, T to U" write on; the coding strand slides back''',
                     ['strand slide', 'tick', 'tile flip', 'HandText write-on', 'chip pop'], '''Hold about 1 second after the last word'''],
    'release-export': ['adjust', '''The polymerase leaving the gene, the mRNA peeling away, the ladder zipping shut, the dashed envelope arc with a ringed nuclear pore, and the painted cell plate with the strand reaching a ribosome''', '''Shows the gene unchanged after copying and the mRNA leaving through a nuclear pore to the ribosomes, answering the hook''',
                       'paired up again / nuclear pore',
                       'The polymerase slides off and the mRNA peels away, the ladder zips shut behind it, the camera pans to the ringed pore and the strand threads through, then the plate shows it reaching a ribosome and the hook path ticks',
                       E, '''The polymerase slides off the gene's right end and the mRNA peels away, 5' end first; behind it the ladder zips shut with the dotted bonds reappearing ("gene unchanged"); on "nuclear pore" the camera pans up to the dashed envelope arc and the pore is circled ("nuclear pore: opening in the envelope"); the mRNA threads through, 5' end leading; the view cuts back out to the painted plate where the strand emerges from a pore and travels to a ribosome on the rough ER and the hook's "?" path ticks; a small grey tag notes that bacteria have no nucleus''',
                       ['slide', 'zip animation', 'ScribbleCircle', 'camera pan', 'strand slide', 'tick'], '''Hold about 1 second after the last word'''],
    'many-copies': ['adjust', '''The painted cell plate with a small inset of the polymerase copying again, four more mRNA strands leaving through pores to ribosomes, a copy counter and amber protein blobs''', '''Shows why many temporary copies help: a lot of one protein quickly, and a way to stop by stopping the copying''',
                    'many times / broken down',
                    'The inset copies the gene again and again as four more strands exit and reach ribosomes, the counter climbs to five copies and protein blobs appear, then the first strand frays and fades',
                    E, '''On "many times" the polymerase in a small inset copies the gene repeatedly; four more mRNA strands exit through different pores and each reaches a ribosome with the counter "1 gene, 5 mRNA copies" and amber protein blobs appearing beside the ribosomes; on "broken down" the first strand frays and fades with the tag "mRNA is temporary; the DNA stays"''',
                    ['inset reveal', 'strand slide', 'counter tick', 'fade', 'tag pop'], '''Hold about 1 second after the last word'''],
    'not-replication': ['adjust', '''A split board: B4's small replication fork with blue and green new strands on the left, the transcription bubble with one terracotta mRNA on the right, a shared row and three chips, and the sentence frame''', '''Contrasts transcription with replication so the two are not confused, ending in a compare sentence frame with whereas''',
                        'base pairing / both strands / one strand / whereas',
                        'The board splits, a bracket joins the shared row, the fork lights both new strands with the replication chip, the bubble lights one strand with the transcription chip, and the sentence frame writes with whereas in amber',
                        E, '''The board splits for this scene only: left B4's fork (tag "replication (copying video)"), right the transcription bubble; on "base pairing" a bracket joins them with "both: open the DNA, pair bases on a template"; on "both strands" the fork lights both new strands and the chip "both strands, all the DNA, makes DNA, before division" writes; on "one strand" the right side lights its single strand and the chip "one strand, one gene, makes RNA (U), when needed" writes; on "whereas" the sentence frame writes beneath in hand type with "whereas" in amber''',
                        ['split board', 'bracket draw', 'glow', 'chip pop', 'HandText write-on'], '''Hold about 1 second after the last word'''],
    'codons-cftr': ['adjust', '''The worked mRNA alone under its template, codon brackets, a CFTR chip tagged illustration, a template tile flipping C to T with an amber ring and the mRNA tile flipping G to A''', '''Names codons as groups of three and shows one consequence: a changed template base changes a codon before any protein is made''',
                    'codons / CFTR / codon changes',
                    'The mRNA returns, brackets snap under each group and the codons light in turn, a CFTR chip appears, the fourth template tile flips C to T and the matching mRNA tile flips G to A so the second codon changes',
                    E, '''The worked mRNA "5' AUG GCU UAA 3'" returns alone under its template; on "groups of three" brackets snap under each group and "codon" writes under the first, the codons lighting in turn ("meaning: next video"); on "CFTR" the chip "CFTR gene (cystic fibrosis)" appears with "illustration: not the real CFTR change"; the fourth template tile flips C to T with an amber ring and the mRNA's fourth tile flips from G to A by computed pairing, so GCU becomes ACU with the bracket glowing amber ("one DNA change, one codon changed")''',
                    ['bracket draw', 'tile flip', 'ScribbleCircle', 'glow', 'tag pop'], '''Hold about 1 second after the last word'''],
    'memory': ['new', '''Two large handwritten amber lines with a DNA tile row turning into an RNA tile row, a tile row turning into beads (greyed next video), a C before L chip, and the coding strand, mRNA and template with an equals sign and a pairing zip''', '''Gives the transcription language aid and the coding-versus-template trap after both ideas are explained''',
               'transcription keeps the language / matches',
               'The first line writes with a DNA row turning into an RNA row, the translation line writes greyed with beads, the C and L are underlined, then the trap line writes with the coding strand above, mRNA and template below',
               E, '''Line 1 "transCription keeps the language (bases to bases)" writes with a DNA tile row turning into an RNA tile row; "transLation changes it (bases to amino acids)" writes greyed with "next video" and a row turning into beads; the C and L are underlined with the chip "C before L"; line 2 "mRNA matches the coding strand, built on the template" writes with the coding strand above the mRNA (equals sign, "T to U") and the template below (pairing zip)''',
               ['HandText write-on', 'tile row morph', 'underline draw', 'chip pop'], '''Hold about half a second after the last word'''],
    'attempt': ['new', '''A question card headed "Which strand is the template?" with a nine-pair double strand at full strength, a grey promoter block, the ochre bean with a moves-this-way arrow, two demands and two answer boxes''', '''Unseen application where the template is the top strand, so the direction rule must be used rather than a position habit; all conditions stay visible''',
                "left / right / 5' and 3' ends / Pause here to answer",
                'The countdown ring runs through the answer-free thinking hold',
                E, '''The board clears with no pair rule chip, no earlier arrows and no template tag; the card writes on with top strand "3' T G C A A T C G G 5'" and bottom strand "5' A C G T T A G C C 3'", both identical in style; the promoter block and bean sit on the left with a plain arrow "moves this way"; the demands "(a) Which strand is the template? Explain using the direction." and "(b) Write the mRNA, with its 5' and 3' ends." stay; two answer boxes; the countdown ring starts after "Pause here to answer." for 10 seconds with the card at full size''',
                ['Countdown ring', 'Enter reveals'], '''Quiet answer-free thinking hold with a 10 second countdown'''],
    'feedback-one': ['adjust', '''The attempt card shrunk to a strip, the rule chip, the top strand glowing as template with the bottom dimmed, terracotta tiles docking one codon at a time by computed pairing, the result line, and a crossed wrong-template chip''', '''Brief feedback (owner rule): the answer from the direction rule, the mRNA as three codons with its ends, and one crossed-out classic mistake (pairing the coding strand), then move on''',
                    '''reads its template from the 3' end to the 5' end / 3' end on the left / top strand / Pairing it / A C G, U U A, G C C / If you paired the bottom strand / comes out wrong''',
                    'The rule chip writes beside the polymerase arrow, the top strand glows as the template, terracotta tiles dock one codon per spoken group with the result line, and the wrong template chip is written and crossed',
                    E, '''The demands shrink to a strip; on "reads its template from the 3' end to the 5' end" the chip "template read 3' to 5'" writes with its arrow beside the polymerase's; on "3' end on the left" the top strand's 3' tag is circled amber; on "top strand" the top strand glows as the template while the bottom dims, with the line "(a) top strand: read 3' to 5', the way the polymerase moves"; on "Pairing it" terracotta tiles dock under the top strand one codon per spoken group (U in amber) and "(b) mRNA 5' ACG UUA GCC 3'" writes as the last group lands; on "If you paired the bottom strand" the chip "template = bottom strand, so mRNA 3' UGC AAU CGG 5'" writes and on "comes out wrong" it takes a grey scribble cross ("that pairs the coding strand: the wrong message")''',
                    ['glow', 'dim', 'tile dock', 'result line write-on', 'Mark cross'], '''Settle on the model answer for about a second'''],
    'attempt-two': ['new', '''A question card with a plain mushroom icon (no species plate), the painted cell plate small and tagged liver cell, three stimulus lines and the demand with a four-line answer box''', '''Unseen explanation of why protein production falls when transcription stops although the DNA and ribosomes are intact; the stem is neutral, naming no species''',
                    'moving along DNA / not damaged / still work / Pause here to answer',
                    'The countdown ring runs through the answer-free thinking hold',
                    E, '''The board clears; a plain mushroom icon sits on the left; the small painted cell plate is tagged "liver cell"; the stimulus lines write on one at a time ("Toxin: stops RNA polymerase moving along DNA", "DNA: not damaged", "Ribosomes: still work"); the demand "Explain why the cell makes less and less of its proteins over the following hours." and a four-line answer box stay; the countdown ring starts after "Pause here to answer." for 10 seconds; no mRNA, pore path or arrows are drawn''',
                    ['Countdown ring', 'Enter reveals'], '''Quiet answer-free thinking hold with a 10 second countdown'''],
    'feedback-two': ['adjust', '''The painted cell plate enlarged to the centre with the polymerase clamped, a ghost ribosome arrow stopped at the envelope, four cytoplasm mRNA strands fraying with a falling counter, ticks on the stimulus lines and a crossed replication chip''', '''Brief feedback (owner rule): the model chain one cause per line (no new mRNA, ribosomes depend on mRNA, existing mRNA is broken down and not replaced) and one crossed-out mistake (replication), then move on''',
                    "no new mRNA / can't read the DNA / depend on mRNA / broken down / protein production falls / that's replication / transcription",
                    'The clamp and empty slot appear, a ribosome arrow hits the envelope, four strands fray as a counter falls and protein blobs stop, ticks land on the unchanged DNA and ribosomes, and the replication chip is crossed',
                    E, '''The card shrinks to a strip and the cell plate enlarges; on "no new mRNA" a grey clamp covers the polymerase and a grey bar crosses the empty mRNA slot ("no new mRNA"); on "can't read the DNA" a ghost arrow from a ribosome hits the envelope ("DNA stays in") and on "depend on mRNA" the line "ribosomes need mRNA" writes; on "broken down" four terracotta strands at ribosomes fray and fade while the counter "mRNA in the cytoplasm" falls 4, 3, 2, 1, 0 and the protein blobs stop appearing ("over hours"); on "protein production falls" the line "existing mRNA is not replaced, so protein production falls" writes and ticks land on "DNA: not damaged" and "Ribosomes: still work"; on "can't copy its DNA" the chip "the cell can't copy its DNA, so it can't make proteins" writes, on "that's replication" it is crossed, and on "transcription" the tag "the toxin stops transcription" writes''',
                    ['plate zoom', 'counter tick', 'fade', 'tick', 'Mark cross'], '''Settle on the model answer for about a second'''],
    'decision-rule': ['adjust', '''Three chips with small icons (two strands with one amber, pair or copy, an arrow) and a next chip with a ribosome doodle and a clock ring''', '''Collects the strand decision into one rule, ends on the direction check and hands off to translation''',
                      "template / coding / 5' to 3'",
                      'The three chips write on one at a time with their icons, then the next chip slides in at the lower right',
                      E, '''Three chips write on one at a time: "template or coding?" (two strands, one amber), "template: pair (A to U) / coding: copy (T to U)", "mRNA: 5' to 3'" (arrow); a chip "Next: from mRNA to a chain of amino acids" with a small ribosome doodle and a clock ring slides in at the lower right''',
                      ['HandText write-on', 'icon pop', 'chip slide-in'], '''Hold about half a second before the notes'''],
    'key-notes': ['new', '''Key notes card with the memory line in large writing''', '''Essentials to copy into books''', 'key notes',
                  '''Notes appear then stay still for copying''',
                  H, '''The heading "Key notes: what to write in your book", the five notes and the memory line appear and lock''', ['Enter reveals'], '''Quiet copy hold of about 60 seconds with pause invitation'''],
}


B6C_ROWS = {
    'hook': ['adjust', '''B6b's terracotta mRNA strand leaving a painted pore on the cell plate, then lying across the cytoplasm, four base tiles with a 4 counter, a fan of twenty labelled amino acid beads with a 20 counter, and a lilac-grey tRNA silhouette''', '''Poses the puzzle: a four-letter message must spell a chain of twenty kinds of building block, with a translator as the answer''',
             'four / twenty / translator',
             'The strand slides out of the pore and the camera pushes in, four tiles lift out with a counter, twenty beads fan out with a counter, a dotted arrow gets a question mark and a tRNA drifts in',
             E, '''The terracotta strand slides out of a painted pore (the same move as B6b scene 6) and the camera pushes in until it lies across the screen; on "four" four tiles (A, U, C, G) lift out with "4 letters"; on "twenty" twenty small labelled beads fan out beneath with "20 building blocks"; a dotted arrow from the 4 to the 20 carries a "?"; on "translator" an unlabelled lilac-grey tRNA silhouette drifts in and stops; the heading "How does a four-letter message build a protein?" writes on''',
             ['plate zoom', 'strand slide', 'tile lift', 'counter tick', 'fan reveal'], '''Hold about 2 seconds on the question'''],
    'why-three': ['new', '''A coded combination counter: single tiles against a need-20 bar, a 4 by 4 grid of pairs, a stack of sixty-four triplets, the mRNA with codon brackets, and four Gly codons and three stop codons gathering''', '''Works out why codons are three bases by counting before the word codon is used, and why most amino acids have more than one codon''',
                  'four / sixteen / sixty-four / codons / read in threes / more than one codon / stop',
                  'Three rows build in turn: four tiles fall short of the line, sixteen pairs still fall short, sixty-four triplets pour past it with a tick, then the mRNA returns with brackets and the Gly and stop codons gather',
                  E, '''Row 1 shows four single tiles ("1 base: 4") against a bar marked "need 20", which falls short with a grey cross; row 2 fills a 4 by 4 grid of pairs ("2 bases: 4 x 4 = 16"), still short; row 3 pours in sixty-four three-tile groups ("3 bases: 4 x 4 x 4 = 64") passing the line with an amber tick; on "read in threes" the mRNA returns and brackets snap under each triplet with "codon"; on "more than one codon" GGU, GGC, GGA and GGG light and point to one "Gly" bead; on "stop" three codons gather with a grey "stop" tag''',
                  ['counter tick', 'grid fill', 'bracket draw', 'Mark cross', 'tick'], '''Hold about 1 second after the last word'''],
    'ribosome': ['adjust', '''The painted cell plate with free ribosomes and rough ER, a grey-crossed ghost ribosome in the nucleus, the painted ribosome plate flipped so the large subunit is on top, the terracotta mRNA through the groove and two faint slot outlines''', '''Says where translation happens and what the ribosome holds and does, and that it does not choose the amino acids, setting up the need for an adaptor''',
                 'translation / ribosome / small subunit / large subunit / rRNA / one codon at a time',
                 'The plate returns with taps on ribosome dots and a cross on a ghost nuclear ribosome, the camera zooms to the flipped ribosome, the halves lift and label, the mRNA slides into the groove, the ribosome steps one codon and a grey question mark sits over the empty slots',
                 E, '''The cell plate returns; a pen taps two free ribosome dots ("free ribosomes") and circles the studded ER ("rough ER: ribosomes on a membrane"); a grey cross lands on a ghost ribosome in the nucleus ("not in the nucleus"); the camera zooms on one dot and crossfades to the painted ribosome plate flipped with the large subunit on top; on "small subunit" and "large subunit" each half lifts slightly apart and back with its label; on "rRNA" the chip "made of protein and rRNA" writes on; the mRNA slides into the groove from the left, 5' end first, and the halves close; on "one codon at a time" the ribosome steps right by one bracketed codon; two faint slots appear labelled "first slot" and "second slot"; a grey "?" sits over them''',
                 ['plate zoom', 'plate crossfade', 'ScribbleCircle', 'strand slide', 'label pop', 'Mark cross'], '''Hold about 1 second after the last word'''],
    'trna-adaptor': ['new', '''A large coded tRNA close-up (lilac-grey L silhouette folding from a strand) with a Glu bead, three anticodon tiles, an adaptor bracket, four different tRNAs with beads and a coded enzyme blob loading a Gly bead while a wrong Ala bead bounces off''', '''Says what the adaptor must do (match the code, hold the amino acid) before naming the anticodon, and that enzymes load each kind of tRNA with its own amino acid''',
                     'transfer RNA / amino acid / anticodon / adaptor / many kinds of tRNA / only',
                     'The board slides left and a tRNA strand draws and folds into its L shape, a Glu bead clips on, the anticodon lights and lowers onto a codon, an adaptor bracket labels the two ends, four tRNAs line up and an enzyme loads a matching bead while a wrong one is rejected',
                     E, '''The board slides left; a strand draws on the right and folds into the L silhouette (short paired stretches flash, "folds on itself"); on "amino acid" a "Glu" bead clips onto the top end ("amino acid end"); on "anticodon" the three bottom tiles light ("anticodon"); the tRNA lowers onto a codon and the tiles meet by jigsaw shape; on "adaptor" the labels "matches the code (bases)" and "holds the amino acid" write at the two ends with an amber bracket "adaptor"; on "many kinds of tRNA" four tRNAs with different anticodons and beads (Met, Glu, Ala, Gly) line up; on "only" an enzyme blob snaps a Gly bead onto the Gly tRNA and a wrong Ala bead bumps off ("wrong amino acid: rejected")''',
                     ['strand fold', 'plate slide', 'bead clip', 'jigsaw dock', 'bracket draw', 'bounce'], '''Hold about 1 second after the last word'''],
    'codon-anticodon': ['new', '''A close-up of codon 5' GAA 3' in the second slot, the Glu tRNA with anticodon tiles 3' CUU 5' docking pair by pair, an antiparallel chip, the anticodon turning round to read 5' UUC 3', and a pair rule card with the site's second example''', '''Teaches that codon and anticodon pair in opposite directions, so the anticodon is written with its ends and the two are not confused''',
                        '''opposite directions / from its 3' end / Keep the ends''',
                        'The codon sits with a right-pointing arrow, the tRNA lowers and its tiles click in with a left-pointing arrow, the antiparallel chip writes, the anticodon turns round to read the other way and the pair rule card settles with the second example',
                        E, '''A close-up shows "5' G A A 3'" with its arrow pointing right; the Glu tRNA lowers and its anticodon tiles "3' C U U 5'" dock beneath, each pair clicking (G with C, A with U, A with U) with the arrow pointing left; the chip "antiparallel, as in DNA" writes on; on "Written the tRNA's own way" the anticodon lifts, turns round to read "5' U U C 3'" and an equals sign links it back to "3' C U U 5'"; on "Keep the ends" the card "codon 5' GAA 3' / anticodon 3' CUU 5' (= 5' UUC 3')" settles with the site's example "5' GCA 3' / 3' CGU 5'" small beneath''',
                        ['jigsaw dock', 'arrow draw', 'turn-round flip', 'card slide-in', 'chip pop'], '''Hold about 1 second after the last word'''],
    'codon-chart': ['new', '''A coded 4 by 4 codon chart in standard layout filled by the ported lookup, stop cells grey, an amber start flag on AUG, a lookup pointer, a Glu bead and two crossed ghost lookups (UUC and CTT)''', '''Teaches the chart look-up with the mRNA codon, base by base, and blocks looking up the anticodon or the DNA''',
                   'codon chart / mRNA codon / glutamate / start codon',
                   'The chart draws on, the bottom row, third column and then the third line light for GAA and a Glu bead pops out, two ghost lookups slide in and are crossed, and the pointer runs AUG to Met with a start flag',
                   E, '''The chart draws on as a full grid (U, C, A, G down the left, across the top and down each box's right edge) with the three stop cells grey and an amber "start" flag on AUG; the tag "mRNA codons only"; on "first base" the bottom row lights; on "second base" the third column lights and their crossing box glows; on "third base" the pointer drops to the third line and "GAA: Glu" lights with a Glu bead popping out; on "never the anticodon or the DNA" ghost lookups "UUC" and "CTT" slide toward the chart and are stopped by grey crosses; on "A U G" the pointer runs A, U, G to "AUG: Met (start)"''',
                   ['chart draw', 'pointer run', 'glow', 'bead pop', 'Mark cross'], '''Hold about 1 second after the last word'''],
    'start': ['new', '''The givens line "mRNA 5' AUG GAA GCU UAA 3'" with codon brackets, the small ribosome subunit carrying a Met tRNA (anticodon 3' UAC 5') sliding along the mRNA, an amber start bracket, the large subunit lowering, and a chain tally chip''', '''Shows initiation in order: the small subunit with Met tRNA slides to the first AUG, the anticodon pairs, and the large subunit closes''',
              'A U G, G A A, G C U, U A A / start codon / large subunit',
              "The givens line writes, the small subunit with its Met tRNA attaches near the 5' end and slides until AUG sits in the first slot, the anticodon docks pair by pair, the large subunit clamps on top and the tally starts at 1 Met",
              E, '''The givens line writes at top left with codon brackets; the board resets to the small subunit alone with a tRNA (tiles "3' U A C 5'", Met bead) riding on it; it attaches near the mRNA's 5' end and slides right until the first codon sits in the first slot; on "start codon" the AUG bracket glows amber; the tRNA's tiles drop onto the codon and dock (A with U, U with A, G with C clicking); on "large subunit" the upper half lowers onto it with a soft clamp; a chip "1 Met" starts the tally at the lower right''',
              ['givens line write-on', 'plate slide', 'jigsaw dock', 'glow', 'clamp'], '''Hold about half a second after the last word'''],
    'elongate': ['new', '''The translation board with the GAA bracket in the second slot, a Glu tRNA (3' CUU 5') docking, an ink peptide bond flashing amber between the Met and Glu beads, the ribosome sliding right by one codon, the empty Met tRNA leaving with a small reloading inset, and an Ala tRNA (3' CGA 5') docking on GCU''', '''Shows one full cycle of elongation: a matching tRNA arrives, the amino acids are joined, the ribosome moves on, the empty tRNA leaves and the next codon is exposed''',
                 'glutamate / peptide bond / moves one codon / alanine',
                 'The GAA bracket lights in the second slot, the Glu tRNA docks, the Met bead links to Glu with a flashing bond, the ribosome slides right while the mRNA stays still, the empty tRNA leaves for reloading and the Ala tRNA docks on GCU',
                 E, '''On "sits in the second slot" the GAA bracket lights in the second slot; the Glu tRNA (3' C U U 5') drifts in from below and docks; on "peptide bond" the Met bead swings across and links to the Glu bead with a short ink bond that flashes amber ("peptide bond, made by rRNA", a pointer on the large subunit); on "moves one codon" the ribosome slides right by exactly one bracket while the mRNA stays still and the Met-Glu chain hangs from the Glu tRNA in the first slot; the empty Met tRNA lifts away out of the top left and a small grey inset shows an enzyme blob giving it a new Met bead; on "alanine" the Ala tRNA (3' C G A 5') docks on GCU; the tally reads "Met, Glu"''',
                 ['jigsaw dock', 'bond flash', 'ribosome slide', 'inset reveal', 'tally write-on'], '''Hold about half a second after the last word'''],
    'stop': ['new', '''A three-part cycle ring (tRNA arrives, peptide bond, move one codon), the third round playing on the board, the UAA stop codon in the second slot with no matching tRNA, a coded release protein blob, the chain detaching, the subunits drifting apart, and the tally with a stop bracket''', '''Shows that a round repeats and that a stop codon has no matching tRNA, so a release protein ends the chain and the result is a polypeptide''',
             'the same three steps / stop codon / release protein / polypeptide',
             'The cycle ring draws with a pointer going round once as the third round plays, the stop codon glows grey and a tRNA fails to dock, the release protein fits the slot, the chain detaches and the subunits part, and the tally and a long bead string write on',
             E, '''On "the same three steps" the three-part ring draws beside the board and a pointer goes round it once as the third round plays (the Glu-Ala bond flashes, the ribosome shifts, the empty tRNA leaves); on "stop codon" UAA in the second slot glows grey and a tRNA tries to dock and finds no matching tiles ("no tRNA matches"); on "release protein" a coded blob fits into the slot; the chain detaches and the two halves separate and drift off the mRNA; the tally "Met, Glu, Ala: 4 codons, 3 amino acids" writes on with the stop bracket tagged "stop: adds nothing"; after "polypeptide" the short chain is replaced for a beat by a long bead string running off screen ("real polypeptides: usually hundreds of amino acids")''',
             ['cycle ring draw', 'ribosome slide', 'bond flash', 'blob fit', 'plate split', 'tally write-on'], '''Hold about 1 second after the last word'''],
    'polypeptide-to-protein': ['new', '''A three-station strip (gene as a plum ladder, mRNA codons, amino acid order beads) with transcription and translation arrows, the long bead string folding into a compact blob, a second folded chain, and a next-video chip''', '''Connects the amino acid order back to the gene and states that a polypeptide must fold before it works, leaving the how for the next video''',
                               'came from the gene / fold / more than one chain',
                               'The strip draws left to right with its two labelled arrows and a pen runs back from the beads to the DNA, the long bead string folds into a blob, and a second folded chain joins it',
                               E, '''The strip draws left to right: "gene (DNA)" (plum ladder), "mRNA codons" (terracotta), "amino acid order" (Met, Glu, Ala beads) with arrows labelled "transcription" and "translation"; on "came from the gene" a pen runs back along the strip from the beads to the DNA; on "fold" the long bead string folds into a compact blob ("folds into a shape"); on "more than one chain" a second folded chain joins it ("some proteins: more than one chain"); the grey chip "shape and job: next video" lands''',
                               ['strip draw', 'pen run', 'fold morph', 'chip pop'], '''Hold about 1 second after the last word'''],
    'both-rnas': ['adjust', '''The ribosome mid-translation with one mRNA and two tRNAs, two chips, an idle ribosome with a no-message tag, a waiting codon with a codon-unread tag, and two quick computed fault cases''', '''Assesses the importance of each RNA by removing it in turn and showing what stops, with the two roles in one line''',
                  'order / readable / Without mRNA / Without the right tRNAs',
                  'The mRNA lights with its chip, a tRNA lights with its chip, the mRNA fades and the ribosome idles then returns, the tRNAs fade and a codon waits then they return, and two fault cases play side by side with a closing line',
                  E, '''On "mRNA carries" the mRNA lights terracotta and the chip "mRNA: carries the sequence, sets the order" writes on; on "tRNA is the molecule that links" a tRNA lights and the chip "tRNA: links each codon to its amino acid" writes; on "Without mRNA" the mRNA fades and the ribosome sits idle ("no message") then returns; on "Without the right tRNAs" the tRNAs fade and a codon waits ("codon unread") then they return; after the spoken lines two computed cases play side by side (GAA to GUA, Glu to Val; a Glu tRNA carrying Ala), each putting a wrong bead in the chain with an amber ring; the line "both are essential: one carries the order, one reads it" writes''',
                  ['glow', 'fade', 'chip pop', 'bead swap', 'HandText write-on'], '''Hold about 1 second after the last word'''],
    'memory': ['new', '''Three large handwritten amber stop-codon lines with underlined first letters, B6b's language line returning small, and a translation line with a tRNA icon tagged the translator''', '''Gives the stop-codon mnemonic and the language aid after both are explained''',
               'U Are Away, U Are Gone, U Go Away / changes / translator',
               'The three codon lines write on in turn with their first letters underlined, then the language line returns and the translation line writes with the tRNA icon',
               E, '''Three lines write on one at a time under their codons: "UAA: U Are Away", "UAG: U Are Gone", "UGA: U Go Away" with the first letters underlined; B6b's line "transcription keeps the language" returns small and "translation changes it: bases to amino acids" writes on with a tRNA icon tagged "the translator"''',
               ['HandText write-on', 'underline draw', 'icon pop'], '''Hold about half a second after the last word'''],
    'attempt': ['new', '''A question card headed "From a gene to a chain" with the DNA template 3' TAC TTC GGA ACT 5', an eight-row codon chart excerpt, two demands and two answer boxes, with no mRNA, brackets or ribosome''', '''Unseen multi-step application: transcribe first, translate, count amino acids with the stop adding none, and write a directed anticodon; the excerpt allows plausible wrong answers from wrong methods''',
                "template / how many / second / Pause here to answer",
                'The countdown ring runs through the answer-free thinking hold',
                E, '''The board clears with no givens line, rule card or earlier chart; the card writes on with "DNA template strand: 3' TAC TTC GGA ACT 5'" and the excerpt "Codon chart (part)" (AAG Lys, ACU Thr, AUG Met (start), CCU Pro, GGA Gly, UAC Tyr, UGA stop, UUC Phe); the demands "(a) Write the amino acid sequence of the polypeptide. Explain how many amino acids it has." and "(b) Write the anticodon of the tRNA that brings the second amino acid, with its 5' and 3' ends." stay with two answer boxes; the countdown ring starts after "Pause here to answer." for 10 seconds with the card at full size''',
                ['Countdown ring', 'Enter reveals'], '''Quiet answer-free thinking hold with a 10 second countdown'''],
    'feedback-one': ['adjust', '''The attempt card shrunk to a strip with the chart excerpt at the right, terracotta tiles docking under the template one codon at a time, a pointer and beads for Met, Lys, Pro, a grey stop bracket, a tRNA with tiles 3' UUC 5', and a crossed DNA-letters chip''', '''Brief feedback (owner rule): only the essential working (transcribe because the chart reads mRNA, the codons read from the chart with the stop adding none, the anticodon with its ends) and one crossed-out mistake (DNA letters read straight into the chart), then move on''',
                    '''transcribe first / A U G, A A G, C C U, U G A / methionine, lysine, proline / stop codon / three amino acids / The second codon / 3' end / straight into the chart / which is wrong''',
                    'Terracotta tiles dock under the template one codon per spoken group, a pointer runs to each excerpt row as its bead pops out, the stop row greys with a stop bracket, a tRNA docks on the second codon with its ends, and the wrong DNA-letters chip is written and crossed',
                    E, '''On "transcribe first" terracotta tiles dock under the template one codon per spoken group and "mRNA 5' AUG AAG CCU UGA 3'" writes as the last group lands; on "methionine", "lysine" and "proline" a pointer runs to each excerpt row and a labelled bead pops out (Met, Lys, Pro); on "stop codon" the UGA row lights grey and a "stop: adds nothing" bracket closes the chain; on "three amino acids" "(a) Met, Lys, Pro: 3 amino acids (stop adds none)" writes; on "The second codon" AAG lights and a tRNA with tiles "3' U U C 5'" docks under it, its 3' tag pulsing on "3' end"; "(b) anticodon 3' UUC 5' (= 5' CUU 3')" writes; on "straight into the chart" the chip "Tyr, Phe, Gly, Thr (DNA letters read straight into the chart)" writes with its four excerpt rows flashing grey and on "which is wrong" it takes a scribble cross ("the chart reads mRNA codons")''',
                    ['tile dock', 'pointer run', 'bead pop', 'result line write-on', 'Mark cross'], '''Settle on the model answer for about a second'''],
    'attempt-two': ['new', '''A card with two panels: the painted bacterium with a coded ribosome inset and a streptomycin chip attached to its small subunit, and the small painted human cell with a different-shaped ribosome inset and the chip drawn beside it, plus stimulus lines, two demands and answer boxes''', '''Unseen explain-and-suggest case on streptomycin; every condition stays visible and nothing carries the model answer''',
                    'Streptomycin / misread codons / mitochondria / Pause here to answer',
                    'The countdown ring runs through the answer-free thinking hold',
                    E, '''The board clears; the left panel shows the painted bacterium with a ribosome inset and an amber "streptomycin" chip attached to its small subunit; the right panel shows the small painted cell tagged "human cell" with a ribosome inset of a different outline and the chip beside it, not attached; the stimulus lines "Streptomycin binds the small subunit of bacterial ribosomes: codons are misread, wrong tRNAs pair" and "It does not bind human cytoplasmic ribosomes (different shape)" write on; the two demands (a) and (b) stay with an answer box each; the countdown ring starts after "Pause here to answer." for 10 seconds; no chains, folding, mitochondrion picture or bacteria-like wording appears''',
                    ['Countdown ring', 'Enter reveals'], '''Quiet answer-free thinking hold with a 10 second countdown'''],
    'feedback-two': ['adjust', '''The bacterial ribosome enlarged into the translation board with a clashing tRNA and a wrong bead in the chain, a misfolded blob beside a correct one, a human ribosome inset reading correctly, the painted mitochondrion with a bacterial-outline inset, and a crossed DNA-changes chip''', '''Brief feedback (owner rule): the key reasons only (misreading puts wrong amino acids in, proteins misfold and the bacterium dies; human cytoplasmic ribosomes are not bound; mitochondria keep bacteria-like ribosomes) and one crossed-out mistake (the DNA is changed), then move on''',
                      "misread codons / wrong amino acids / fold wrongly / dies / human cytoplasmic ribosomes / Mitochondria came from bacteria / bacteria-like / look again / reading",
                      'The bacterial ribosome enlarges and a mismatched tRNA docks anyway, a wrong bead joins the chain, the chain folds into a misshapen blob and the bacterium dims, the human inset plays a correct round, the mitochondrion appears with a bacterial-shaped ribosome, and the DNA-changes chip is crossed',
                      E, '''The bacterial inset enlarges into the translation board with the chip on its small subunit; on "misread codons" a tRNA with one clashing tile docks anyway and on "wrong amino acids" its wrong bead joins the chain with an amber ring; on "fold wrongly" the chain folds into a misshapen blob beside a correct one ("wrong shape: does not work") and on "dies" the bacterium plate dims with "enzymes fail" and "(a) wrong amino acids, misfolded proteins: the bacterium dies" writes; on "human cytoplasmic ribosomes" the human inset plays one correct round with a tick and on "most of the cell's proteins" "human cytoplasmic ribosomes (most proteins): drug does not bind, codons read correctly" writes; on "Mitochondria came from bacteria" the painted mitochondrion appears with a ribosome inset matching the bacterial outline and B6a's endosymbiosis motion replays small, and on "bacteria-like" the (b) line writes; on "changes the bacteria's DNA" the chip "streptomycin changes the bacteria's DNA" writes, on "look again" it is crossed, and on "reading" the tag "the message is fine: the reading goes wrong" writes''',
                      ['inset enlarge', 'jigsaw clash', 'bead swap', 'fold morph', 'tick', 'Mark cross'], '''Settle on the model answer for about a second'''],
    'decision-rule': ['adjust', '''Four chips with a next chip showing a small folded-blob doodle and a clock ring''', '''Collects the method into one order for any sequence question and hands off to protein shape and job''',
                      'DNA or mRNA / ends / Next',
                      'The four chips write on one at a time, then the next chip slides in at the lower right',
                      E, '''Four chips write on one at a time: "DNA or mRNA?", "DNA: transcribe first", "chart: mRNA codons, AUG to stop", "anticodon: write the ends"; the chip "Next: from a chain to a working protein" with a small folded-blob doodle and a clock ring slides in at the lower right''',
                      ['HandText write-on', 'chip slide-in', 'icon pop'], '''Hold about half a second before the notes'''],
    'key-notes': ['new', '''Key notes card with the stop-codon memory line in large writing''', '''Essentials to copy into books''', 'key notes',
                  '''Notes appear then stay still for copying''',
                  H, '''The heading "Key notes: what to write in your book", the five notes and the memory line appear and lock''', ['Enter reveals'], '''Quiet copy hold of about 60 seconds with pause invitation'''],
}


B7_ROWS = {
    'hook': [
        'adjust',
        'Painted pink and blue hydrangea plates with coded cuttings, soil strips, a DNA ladder icon under each plant and the B6c bead chain',
        "Poses the puzzle that identical genes can give two colours, and links it to last video's amino acid chain",
        'takes cuttings / two different gardens / blue / pink / a chain of amino acids / a trait you can see',
        'Three cuttings slide out of the plant onto two soil strips, one plant turns blue while the other stays pink, an equals-genes bracket links them and a question arrow runs from the bead chain to the flowers',
        E,
        'The heading "From a chain to a trait" writes on; on "takes cuttings" three cut marks appear and three small copies slide out tagged "cuttings: clones, same genes"; on "two different gardens" two copies move onto strips tagged "garden 1" and "garden 2" and grow; on "blue" the left plant crossfades to the blue plate; on "pink" the right plant stays pink; the bracket "= genes" links them; on "a chain of amino acids" the bead chain drifts in with the tag "B6c"; on "a trait you can see" a dotted arrow with "?" runs to the flowers',
        ['HandText write-on', 'plate slide', 'plate crossfade', 'DrawPath', 'bracket draw'],
        'Hold about 2 seconds on the question arrow',
    ],
    'protein-jobs': [
        'new',
        'Jobs board of five tiles: the painted enzyme and substrate, the painted red blood cells with coded haemoglobin, a coded keratin fibre with the muscle cell plates, a coded receptor and a coded antibody',
        'Shows five jobs of proteins on real objects, ending on the point that each is a folded polypeptide',
        'Enzymes / Transport / Structural / keratin / Receptors / antibodies / polypeptide chain, folded',
        'Five tiles build left to right on their spoken words, the substrate slides into its pocket, oxygen dots land on haemoglobin, a signal lands in a receptor and an antibody clamps a marker, then each tile coils a tiny bead chain',
        E,
        'The tiles build on their words: on "Enzymes" the substrate slides into the pocket; on "Transport" a pen zooms into a red cell where haemoglobin blobs pick up oxygen dots; on "Structural" and "keratin" a three-strand fibre draws tagged "keratin (hair)" while the muscle cell plate crossfades from relaxed to contracted with "contractile proteins"; on "Receptors" a signal lands in a cup-shaped receptor and a spark passes in; on "antibodies" a Y-shaped antibody clamps a marker; on "polypeptide chain, folded" each tile gets a tiny bead chain that coils',
        ['JobsBoard tile build', 'plate crossfade', 'DrawPath', 'bead coil'],
        'Hold about 1 second on the five tiles',
    ],
    'why-fold': [
        'new',
        'Coded twelve-bead chain folding into a blob: water-avoiding beads tucking in, charged beads pulling together and two cysteine beads joining with an S-S link, then a shuffled chain folding differently',
        'Explains the cause of folding from the properties of the amino acids, and why order decides shape',
        'avoid water / opposite charges attract / cysteine / disulfide bond / decides which parts end up next to each other',
        'A straight labelled chain bends as three grey beads tuck to the centre, a plus bead and a minus bead swing together, an amber S-S link snaps between two cysteines and a shuffled chain folds into a different blob',
        E,
        'A twelve-bead chain lies across the screen with labelled beads; on "avoid water" a faint water-dot wash surrounds it and the grey Val, Leu and Phe beads pull to the centre with the tag "water-avoiding: tuck in"; on "opposite charges attract" Lys and Glu swing together with "charges attract"; on "cysteine" and "disulfide bond" the two Cys beads meet and an amber "S-S" link snaps with "disulfide bond: strong link"; on "decides which parts end up next to each other" the finished blob holds and the same beads shuffled fold into a different blob with "different order, different shape"',
        ['FoldChain bead fold', 'link snap', 'tag pop', 'DrawPath'],
        'Hold about 1 second on the two blobs',
    ],
    'shape-job': [
        'adjust',
        'Painted enzyme and substrate plate with a traced pocket, the folded blob beside it with one bead changing, and two small case panels with a computed codon card',
        'Shows that proteins work by fit, that one changed amino acid in the pocket can stop the fit, and that not every change matters',
        'fitting / active site / can flex a little / Change one amino acid in that pocket / not every change matters',
        'The substrate slides into the traced pocket, the pocket breathes once, a pocket bead flips and the pocket narrows so the substrate bumps off, then two small panels show a harmless far swap and a same amino acid codon change',
        E,
        'The enzyme plate returns large and a coded outline traces the pocket tagged "active site"; on "fitting" the substrate slides in with a tick and a chip "key and lock" appears; on "can flex a little" the outline breathes once with "flexes as it binds"; on "Change one amino acid in that pocket" the blob beside it flips one pocket bead with an amber ring, the pocket narrows and the substrate bumps off with "can stop fitting"; on "not every change matters" two panels play: a far bead changes and the pocket holds, and a card "GAA to GAG" computes "Glu to Glu" with "same amino acid"',
        ['plate slide', 'pocket outline', 'bead flip', 'tick', 'panel build'],
        'Hold about 1 second on the two panels',
    ],
    'sickle-base': [
        'new',
        'Chain-to-trait strip of five stations with a haemoglobin blob, a DNA ladder with a flashing base pair, terracotta mRNA tiles, a chart excerpt and a numbered bead run',
        'Starts the one full causal chain with one base change, one codon change and one amino acid change in a chain of 146',
        'four chains / a single base change / G A G / G U G / in the mRNA / The chart gives / sixth amino acid / a hundred and forty-six',
        'The five-station strip builds, a four-lobed haemoglobin blob appears, one base pair flashes amber, mRNA tiles change from GAG to GUG, the chart excerpt lights two rows and bead six flips from Glu to Val',
        E,
        'The strip builds with "gene (DNA)", "polypeptide", "protein shape", "cell", "trait"; on "four chains" a four-lobed haemoglobin blob appears small in the protein shape station; on "a single base change" a DNA stretch flashes one base pair amber and the coding strand codon changes GAG to GTG; on "G A G" and "G U G" the mRNA tiles write GAG then GUG; on "The chart gives" the excerpt slides in with the pointer lighting "GAG Glu" then "GUG Val"; on "sixth amino acid" a bead run numbered 1 to 7 shows bead 6 flip from Glu to Val with an amber ring; on "a hundred and forty-six" the counter "1 of 146 amino acids changed" writes on',
        ['strip build', 'DrawPath', 'tile swap', 'bead flip', 'counter write-on'],
        'Hold half a second on the counter',
    ],
    'sickle-trait': [
        'new',
        'Enlarged protein shape station with haemoglobin blobs stacking into a fibre, the painted normal and sickle cell plate, a narrowing coded vessel and the filled strip',
        'Follows the changed protein to the cell and the body, so the genes-to-trait link is a drawn chain',
        'valine avoids water / two copies / when oxygen is low / stick to each other / stack into long stiff fibres / sickle / block small blood vessels / break down quickly / the trait',
        'A sticky patch pulses, oxygen dots drift off, blobs dock and line up into a rod, a round cell bends into a sickle, a sickle cell jams in a narrowing vessel and two cells fade, then the last station fills',
        E,
        'The protein shape station enlarges; on "valine avoids water" the grey Val patch pulses with "sticky, water-avoiding patch"; on "two copies" the tag "two copies of the allele" lands under station 1; on "when oxygen is low" the oxygen dots drift off; on "stick to each other" a Val patch docks into the next blob; on "stack into long stiff fibres" they line up into a rod; on "sickle" the cell plate crossfades from round to sickle with a rod inside it; on "block small blood vessels" a sickle cell jams at a narrowing vessel with "blocks small vessels: pain"; on "break down quickly" two cells fade with "short-lived: too few red cells"; on "the trait" the last station fills with "sickle cell disease"',
        ['HbFibre stack', 'plate crossfade', 'vessel narrow', 'tag pop', 'strip fill'],
        'Hold about 1 second on the finished strip',
    ],
    'no-shortcut': [
        'adjust',
        'The five-station strip at full width with a crossed overhead shortcut arc, genotype and phenotype brackets with small icons and fanned extra strips',
        'Names the skipped steps behind the wrong shortcut and defines genotype and phenotype after the causes',
        "Genes don't become traits directly / codes for a polypeptide / genotype / phenotype / many genes, at once",
        'An overhead arc from gene to trait is drawn and crossed, a pen walks the stations in order, two brackets write their definitions with icons and three faint strips fan in',
        E,
        'On "Genes don\'t become traits directly" the arc draws from gene to trait labelled "genes become traits" and takes a grey cross with "skips the protein and the cell"; on "codes for a polypeptide" a pen runs along the five stations lighting each; on "genotype" a bracket under station 1 writes "genotype: the alleles you have"; on "phenotype" a bracket under station 5 writes "phenotype: what you can observe" with a sickle cell and a pink hydrangea icon; on "many genes, at once" three faint strips fan in with "most traits: many genes"',
        ['DrawPath', 'Mark cross', 'bracket draw', 'strip fan'],
        'Hold about 1 second on the fanned strips',
    ],
    'environment': [
        'adjust',
        'The two painted hydrangeas on acidic and less acidic soil, a shared gene card, pigment rings, aluminium dots rising through a root line and a range bar for height',
        'Gives the mechanism for the same genotype giving two phenotypes, then a second case with height and food',
        "make a red pigment / aluminium dissolves / binds to the pigment / blue / little aluminium dissolves / pink / The environment changes what it produces / Height works the same way / don't get enough food",
        'Aluminium dots appear only in acidic soil and travel up the root, clip onto pigment rings that turn pink to blue, the other plant stays pink, then a height range bar shows the pointer near the top and dropping',
        E,
        'The plants return labelled "acidic soil" and "less acidic soil"; on "make a red pigment" both show the gene card "same genotype" and a pigment ring tagged "pigment, made by enzymes"; on "aluminium dissolves" Al dots appear in the acidic soil and travel up a root line; on "binds to the pigment" an inset shows Al clipping onto rings that turn pink to blue beside the blue plate; on "little aluminium dissolves" the other soil shows almost no dots and the rings stay pink beside the pink plate; on "The environment changes what it produces" "same genotype, different phenotype" writes between them; on "Height works the same way" the range bar draws with a pointer near the top, and on "don\'t get enough food" it drops with "poor nutrition"',
        ['dot travel', 'ring recolour', 'RangeBar pointer', 'plate crossfade', 'HandText write-on'],
        'Hold about 1 second on the range bar',
    ],
    'genes-and-environment': [
        'adjust',
        'Trait spectrum line from mostly genes to strongly environment with the range bar, the blood typing tile, a height icon, a hydrangea icon and a cutting that turns pink',
        'Weighs genes against environment: genes set the range, environment affects where in it, and the environment does not change the genotype',
        "Genes set what's possible / ABO blood group / Height depends on both / not the genes themselves / a cutting from the blue plant",
        'The range bar shrinks to the left with two tags, the blood typing tile slides to the genes end, the height icon sits in the middle, the hydrangea icon sits right of middle, and a blue cutting crossfades to pink on less acidic soil',
        E,
        'The spectrum line draws from "mostly genes" to "strongly environment"; on "Genes set what\'s possible" the range bar shrinks left with "genes: the possible range" and "environment: where in it"; on "ABO blood group" the blood typing tile slides to the left end with "ABO: set by alleles"; on "Height depends on both" a range bar icon slides to the middle; the hydrangea icon sits right of middle with "hydrangea colour: soil matters"; on "not the genes themselves" a gene card holds with an amber tick while a soil chip changes under it; on "a cutting from the blue plant" a copy goes onto less acidic soil and crossfades to pink with "= genes"',
        ['TraitSpectrum slide', 'plate slide', 'plate crossfade', 'tick', 'tag pop'],
        'Hold about 1 second on the cutting',
    ],
    'why-synthesis': [
        'adjust',
        'Strip stations expanded into transcription and translation icons, the five job tiles small with bead chains, the red cell and muscle cell plates with a shared gene card, and a greyed empty job tile',
        'Assesses why polypeptide synthesis matters: every job depends on a made protein and each cell type makes its own set',
        "every protein is made / each kind of cell makes its own set of proteins / the sequence is wrong / isn't made",
        'A pen runs along the transcription and translation icons, the job tiles return fed by bead chains, two cell plates fill with different proteins under one gene card, the sickle icon flashes and an empty tile greys',
        E,
        'The first two stations expand into "transcription" and "translation" with a pen along them; on "every protein is made" the five job tiles return small, each fed by its own bead chain; on "each kind of cell makes its own set of proteins" the red cell plate fills with haemoglobin blobs and the muscle cell plate with contractile fibres under the card "same genes" with tags "makes haemoglobin" and "makes contractile proteins"; on "the sequence is wrong" the sickle icon flashes; on "isn\'t made" an empty job tile greys with "no protein: no job"',
        ['DrawPath', 'tile fly-in', 'plate slide', 'tag pop'],
        'Hold about 1 second on the greyed tile',
    ],
    'memory': [
        'new',
        'Four-panel levels stack numbered in amber and a handwritten traits line under a mini range bar',
        'Gives two reusable aids after the fold and the genes-and-environment ideas are explained',
        "one / two / three / four / genes set what's possible",
        'Four panels build left to right with amber numbers, small level names appear, and the traits line writes on under a mini range bar',
        E,
        'The panels build on their numbers: "1 order" a straight bead run, "2 local coils" a coil and a zigzag, "3 whole fold" the blob, "4 more than one chain" the four-lobed haemoglobin with the small tag "only when there is more than one"; small names "primary", "secondary", "tertiary", "quaternary" appear under them; on "genes set what\'s possible" the line "genes set what\'s possible; environment affects what develops" writes on in amber under a mini range bar',
        ['LevelsStack build', 'HandText write-on', 'tag pop'],
        'Hold half a second so the aids can be copied',
    ],
    'attempt': [
        'new',
        'Cleared card headed The Himalayan rabbit with the painted rabbit and patch plates, a coded ice pack icon, a stimulus line, two demands and the countdown ring',
        'Unseen explain and predict item with every observation visible and nothing answer-bearing',
        'Himalayan rabbits / enzyme / shaved a patch / dark / Explain why / predict / Pause here to answer',
        'The countdown ring runs through the answer-free thinking hold while the whole card stays visible',
        E,
        'The board clears and the card writes on with tags "dark: ears, nose, feet, tail" and "white: body" on the first plate and "patch shaved, ice pack while fur regrew: new fur dark" beside the second; the line "The dark pigment is made by an enzyme." and both demands (a) and (b) stay visible with two answer boxes; the countdown ring starts after "Pause here to answer." and the card stays during and after',
        ['Countdown ring', 'Enter reveals', 'plate slide'],
        'Quiet answer-free thinking hold with a 10 second countdown',
    ],
    'feedback-one': [
        'adjust',
        'The card shrunk to a strip with a cool to warm wash on the rabbit, enzyme icons, an offspring rabbit, a same allele gene card and one crossed wrong chip',
        'Gives the model answer in order: temperature sensitive enzyme, the patch, the young, then corrects the genes slip',
        "coolest parts / cool / The ice pack cooled the skin / white / changed the rabbit's genes",
        'A cool to warm wash tints the rabbit, an enzyme icon makes pigment dots only on the cool parts, the patch cools and lights, an offspring appears with a white back and the wrong chip is crossed',
        E,
        'The card shrinks to a strip; on "coolest parts" a wash tints the first plate; on "cool" a coded enzyme sits on the ears making pigment dots and grey on the body; on "The ice pack cooled the skin" the patch cools, its enzyme lights and the line "(a) the enzyme works only in cool skin; the ice pack cooled the patch, so pigment formed" writes; on "white" a half-size offspring appears with "white back, dark tips" and the line "(b)" writes with a gene card "same allele"; on "changed the rabbit\'s genes" the chip "the ice changed the rabbit\'s genes, so the young have dark backs" writes and takes a grey cross',
        ['wash tint', 'enzyme icon', 'chip write-on', 'Mark cross'],
        'Settle on the model answer for about 1 second',
    ],
    'attempt-two': [
        'new',
        'Cleared card with the white and red snapdragon plates, the two codon changes, a codon chart excerpt, one demand and the countdown ring',
        'Unseen apply and explain item on a supplied chart with every condition visible and nothing answer-bearing',
        'C A U / C C U / G A A / G A G / white flowers / red flowers / Use the chart / Pause here to answer',
        'The countdown ring runs through the answer-free thinking hold while both plant columns, the chart and the demand stay visible',
        E,
        'The board clears; the columns "Plant P" with the white plate and "two copies; active-site codon: mRNA CAU to CCU" and "Plant Q" with the red plate and "two copies; codon far from the active site: mRNA GAA to GAG" write on under "Red petals need an enzyme that helps make red pigment."; the chart "Codon chart (part)" lists CAC His, CAU His, CCU Pro, GAA Glu, GAG Glu, GUA Val; the demand and two answer boxes stay; the countdown ring starts after "Pause here to answer."',
        ['Countdown ring', 'Enter reveals', 'plate slide'],
        'Quiet answer-free thinking hold with a 10 second countdown',
    ],
    'feedback-two': [
        'adjust',
        'The card shrunk to a strip with the chart beside it, a pointer lighting codon rows, a folded enzyme blob whose pocket bead flips, the Glu to Glu tick and one crossed wrong chip',
        'Answers both plants from the chart and corrects the every gene change slip',
        'C A U is histidine / active site / white / glutamate / every change to a gene changes the protein',
        'The pointer lights CAU then CCU while a pocket bead flips and the pocket narrows, then lights GAA and GAG together with a tick, and the wrong chip is crossed',
        E,
        'The card shrinks and the chart stays at the right; on "C A U is histidine" the pointer lights "CAU His" then "CCU Pro" and a pocket bead flips from His to Pro with an amber ring; on "active site" the pocket outline narrows and a substrate bumps off; on "white" the line "P: His to Pro in the active site, shape changes, no pigment: white" writes; on "glutamate" "GAA Glu" and "GAG Glu" light together, the bead stays Glu with a tick and "Q: Glu to Glu, same protein: red" writes; on "every change to a gene changes the protein" the chip writes and takes a grey cross with "check the chart"',
        ['pointer light', 'bead flip', 'tick', 'Mark cross'],
        'Settle on the model answer for about 1 second',
    ],
    'decision-rule': [
        'adjust',
        'The chain-to-trait strip at full width with a pen walking the stations, six chips above and a soil chip and ice pack chip joining the last station, then a next chip with a pea seed',
        'Packs the lesson into one walk along the chain and one rule for same genes with different results, then hands off',
        'the base / the codon / the amino acid / the shape / the trait / the environment is changing / Next',
        'A pen walks the strip station by station while six chips write on, a soil chip and an ice pack chip slide under the last station and the next chip slides in',
        E,
        'The strip returns at full width; the pen walks it as each step is named while chips "base", "codon", "amino acid", "shape", "cell", "trait" write on above; on "the environment is changing" a soil chip and an ice pack chip slide under the last station; on "Next" the chip "Next: sources of genetic variation" slides in at the lower right with the pea seed plate',
        ['DrawPath', 'chip write-on', 'chip slide'],
        'Hold half a second before the notes',
    ],
    'key-notes': [
        'new',
        'Key notes card with the five notes',
        'Essentials to copy into books',
        'key notes',
        'Notes appear then stay still for copying',
        H,
        'The heading "Key notes: what to write in your book" and the five notes appear and lock',
        ['Enter reveals'],
        'Quiet copy hold of about 60 seconds with pause invitation',
    ],
}

B8_ROWS = {
    'hook': [
        'adjust',
        'Painted ovary and pod pair with a coded paintbrush and pollen, four painted pea seed types in a row and a ghost fifth seed with an amber question bead',
        'Poses the puzzle that seeds from the same parents differ, and asks whether one could carry an allele neither parent had',
        'A few weeks later / same two parents / yellow / green / round / wrinkled / neither parent had',
        'Pollen is dusted onto the ovary, the plate crossfades to the open pod, a bracket marks the same parents, four seed types land one per word and a ghost fifth seed appears',
        E,
        'The heading "Same parents, different offspring" writes on; the paintbrush dusts pollen with tags "pollen from plant 1" and "flower of plant 2"; on "A few weeks later" the ovary crossfades to the pod; on "same two parents" a bracket reads "same two parents"; the seeds lift out and the four pea plates land under the pod on "yellow", "green", "round" and "wrinkled"; on "neither parent had" a ghost fifth seed outline appears with an amber "?" bead',
        ['HandText write-on', 'plate crossfade', 'plate slide', 'bracket draw'],
        'Hold about 2 seconds on the ghost seed',
    ],
    'two-jobs': [
        'new',
        'Source sort: four chips dropping into a reshuffle bin and a new allele bin, white allele beads, a coded deck splitting into hands and an amber new card',
        'Sorts the four sources by what they do, reshuffling existing alleles or making a new one, with a deck of cards as the one mapped analogy',
        'crossing over / independent assortment / random fertilisation / mutation / reshuffle alleles that already exist / dealing new hands from the same deck / brand-new allele / a new card',
        'Four chips drop in on their names, three slide into the reshuffle bin with white beads that swap places, a deck splits into two hands, and the mutation chip enters the other bin and its bead and a card turn amber',
        E,
        'The chips drop in on "crossing over", "independent assortment", "random fertilisation" and "mutation"; the first two carry the tag "B5b: meiosis"; two bins draw: "reshuffle existing alleles" and "make a new allele"; on "reshuffle alleles that already exist" the first three chips slide left with white beads changing neighbours; on "dealing new hands from the same deck" a mini deck splits into two hands with "same cards, new hands"; on "brand-new allele" the mutation chip slides right and its bead fills amber; on "a new card" a deck card turns amber with "a new card"; the line "crossing over makes no new alleles" sits under the left bin',
        ['SourceSort chip drop', 'bead recolour', 'deck split', 'tag pop'],
        'Hold about 1 second on the two bins',
    ],
    'trace-parent': [
        'new',
        'Origin board with grandparent set-cards, the parent cell plate with plum and teal chromosomes, tracing lines, gamete cells with computed labels and an assumptions box',
        "Traces one parent's alleles back to its own parents and forward into four gamete types, with the assumptions stated",
        'one set of chromosomes from each / capital Y / capital R / each pair lines up either way / like the grandparents / two new mixes / If both ways are equally likely, and nothing mutates / a quarter',
        'Three rows draw in, tracing lines run from the set-cards to the chromosomes, a coin flip plays on each pair, four gamete cells drop into the bottom row with lines back to the grandparents, and each gets a quarter',
        E,
        'The board draws "its parents" (plum Y and R, teal y and r), "parent plant" and "gametes"; on "one set of chromosomes from each" tracing lines run up to the set-cards and the tag "letters are labels only; which version shows: next video" lands; on "each pair lines up either way" the coin flip plays once over each pair; on "like the grandparents" gametes "Y R" and "y r" drop in with lines back to their grandparent card; on "two new mixes" gametes "Y r" and "y R" drop in with amber outline rings and "new combination"; on "If both ways are equally likely, and nothing mutates" the box "assume: genes on different chromosomes; either way equally likely; no mutation" writes; on "a quarter" each gamete shows "1/4"',
        ['OriginBoard draw', 'TwoWays coin flip', 'tracing line', 'gamete drop', 'tag pop'],
        'Hold about 1 second on the four gametes',
    ],
    'same-chromosome': [
        'adjust',
        'Origin board zoomed to the long pair with genes A, B, a and b, the crossover swap between the genes, a gamete strip adding the swapped types and eight cell icons showing swaps in two',
        'Shows that genes on one chromosome travel together until a swap between them, and why the swapped combinations are less common',
        'same / keep their alleles together / Crossing over is what splits them up / capital A and small b / small a with capital B / only some cells / usually less common',
        'A ghost strip shows two kinds, the swap plays between the genes, the strip adds two kinds with amber rings, and eight cell icons show a swap in only two while the swapped gametes shrink',
        E,
        'The middle row zooms to the long pair with A and B on the plum chromosome and a and b on the teal; on "keep their alleles together" a strip shows "A B" and "a b" with the bracket "no crossing over: 2 kinds"; on "Crossing over is what splits them up" the swap plays between the A and B levels; on "capital A and small b" and "small a with capital B" the swapped chromatids light and the strip adds "A b" and "a B" with amber rings and "new combinations, same alleles"; on "only some cells" eight cell icons appear with a swap mark in two of them and "swap here in some cells only"; on "usually less common" the "A b" and "a B" gametes shrink beside the larger ones',
        ['zoom', 'CrossOver swap', 'gamete strip', 'tag pop', 'size change'],
        'Hold about 1 second on the shrunken gametes',
    ],
    'fertilisation': [
        'adjust',
        'Ovary plate with three coded pollen tubes, the pod with two-label seed tags, a 4 by 4 pairing grid and the painted sperm and egg with number tickers',
        'Shows that random fertilisation multiplies the gamete types, first with a pea pod and then with the human number held back from the meiosis video',
        'pollen tube / chance / a different pair of gametes / sixteen / For people / 70 trillion / before crossing over adds even more',
        'Three tubes grow to different ovules and a different grain wins, the plate becomes the pod with a tag on each seed, the pairing grid fills to sixteen, and tickers run to about 70 trillion with a swap icon adding more',
        E,
        'The ovary plate returns with three pollen tubes tagged "Y R", "y r" and "Y r"; on "pollen tube" they grow to different ovules; on "chance" one hesitates and a different grain wins with the tag "chance"; on "a different pair of gametes" the plate crossfades to the pod and each seed gets a two-label tag; on "sixteen" the grid fills with 16 paired labels and "4 x 4 = 16" with "pairings only; which seed looks how: next video"; on "For people" the board wipes to the sperm and egg plates each with the ticker "2^23 = 8,388,608" and the product ticker runs; on "70 trillion" it reads about 70 trillion; on "before crossing over adds even more" a swap icon adds a plus',
        ['pollen tube grow', 'plate crossfade', 'PairingGrid fill', 'NumberTicker', 'tag pop'],
        'Hold about 1 second on the ticker',
    ],
    'siblings': [
        'adjust',
        'Full origin board with grandparent cards, two parent cells and two seed cells traced up, circled differences between the seeds, two painted seeds and a ghost amber bead that is crossed',
        'Explains that siblings share alleles but differ by combination, with no new mutation needed',
        'came from the same two parents / different combination / almost never genetically identical / No new mutation is needed',
        'Tracing lines run from every bead in both seeds up to a parent, the differences are circled, two different painted seeds appear and a ghost amber bead is drawn and crossed',
        E,
        'The board returns full; on "came from the same two parents" every bead in both seed cells traces up to a parent bead, all white; on "different combination" the two letter rows sit side by side with scribble rings round the differences; on "almost never genetically identical" a yellow round seed plate and a green wrinkled seed plate sit under the cells; on "No new mutation is needed" a ghost amber bead appears and takes a grey cross with "no new allele needed"',
        ['tracing line', 'scribbleEllipse', 'plate slide', 'Mark cross'],
        'Hold about 1 second on the crossed bead',
    ],
    'mutation': [
        'adjust',
        'DNA ladder stretch with an unrepaired mismatch, a jar of red-eyed fly plates with one turning white-eyed, offspring flies and a fly outline with a gut cell and an egg or sperm line',
        'Shows mutation as the only source of a new allele and the condition for it to be inherited',
        "mutation / a copying error that isn't repaired / red-eyed fruit flies / white / passed it on / a cell that makes eggs or sperm / gut cell",
        'One base pair mismatches and stays while the allele bead turns amber, a red-eyed fly turns white-eyed, offspring flies carry the new allele tag, and a gut cell mutation stops at the fly while an egg or sperm line mutation travels on',
        E,
        'The ladder draws; on "mutation" the allele bead above it is ready; on "a copying error that isn\'t repaired" one base pair mismatches in amber with "copying error, not repaired" and the bead turns amber with "new allele"; on "red-eyed fruit flies" five red-eyed fly plates sit in a jar outline; on "white" one crossfades to the white-eyed plate with an amber ring; on "passed it on" offspring flies appear with "the new allele is inherited"; on "a cell that makes eggs or sperm" the fly outline shows two cell lines; on "gut cell" its amber bead ends with a cross and "stays in that fly" while the egg or sperm line bead travels into a gamete and an offspring with a tick',
        ['DrawPath', 'bead recolour', 'plate crossfade', 'arrow travel', 'Mark cross'],
        'Hold about 1 second on the two cell lines',
    ],
    'genetic-or-environmental': [
        'adjust',
        'Variation split: the blue and pink hydrangea plates on two soil strips beside four pea seeds with letter tags, same conditions strip and gamete arrows',
        'Separates genetic from environmental variation and shows that only genetic differences are inherited',
        'hydrangea cuttings / environment / genetic / same conditions / only genetic differences are inherited',
        'Same conditions are applied to both panels, the hydrangeas converge on one colour while the seeds still differ, and a gamete arrow leaves each panel carrying unchanged or different letters',
        E,
        'The left panel "environmental variation" shows the two hydrangea plates with "= genotype" and the tag "B7"; the right panel "genetic variation" shows four pea seeds with letter tags; on "hydrangea cuttings" the left bracket lights; on "environment" a soil chip pulses; on "genetic" the seed tags pulse; on "same conditions" the right strip is labelled and the seeds still differ ("differences remain: genetic") while the two plants move onto one strip and turn the same colour ("differences vanish: environmental"); on "only genetic differences are inherited" a gamete arrow leaves the hydrangea with an unchanged gene card and one leaves the seeds with their different letters, ticked',
        ['VariationSplit panels', 'plate slide', 'plate crossfade', 'arrow travel', 'tick'],
        'Hold about 1 second on the two gamete arrows',
    ],
    'why-it-matters': [
        'adjust',
        'Row of eight painted seeds on a soil strip with a weather chip, then a split into one generation with a big ticker icon and long periods with a timeline of rare amber beads',
        'Says why variation matters and which source works on which timescale',
        'when conditions change / crossing over, assortment and fertilisation / Mutation is rare / every new allele',
        'A dry spell crosses the seeds so some grey and some sprout, then the board splits into one generation with a combinations ticker and long periods with rare amber beads that are then mixed into white beads',
        E,
        'On "when conditions change" a dry soil chip slides across, some seeds grey and others sprout a shoot with "some survive: the population continues"; the board splits; on "crossing over, assortment and fertilisation" the left panel "one generation" shows three chips and a ticker icon "huge numbers of combinations"; on "Mutation is rare" the right panel "long periods" shows an amber bead appearing rarely; on "every new allele" each amber bead is copied into white-bead reshuffles with "mutation supplies new alleles; reshuffling mixes them"',
        ['weather chip slide', 'plate recolour', 'panel split', 'timeline write-on', 'bead copy'],
        'Hold about 1 second on the timeline',
    ],
    'memory': [
        'new',
        'Three large amber handwritten words with underlined first letters and source chips, a reshuffle bracket and a mutation line with an amber bead',
        'Gives a reusable aid for the four sources after all four are explained',
        'Cross, Independently, Randomly / reshuffle / only Mutation makes new',
        'Three words write on with their first letters underlined, a bracket groups them as reshuffling, and the mutation line writes with an amber-filled bead',
        E,
        'The words "Cross", "Independently" and "Randomly" write on in amber with the first letters underlined and small chips "crossing over", "independent assortment" and "random fertilisation" beneath; a bracket labelled "reshuffle" groups them; on "only Mutation makes new" the line writes on beneath with an amber-filled bead',
        ['HandText write-on', 'underline draw', 'bracket draw', 'bead recolour'],
        'Hold half a second so the aid can be copied',
    ],
    'attempt': [
        'new',
        'Cleared card headed with a fruit fly cell, the cell plate with two chromosome pairs and allele beads, an assumptions box, two demands and the countdown ring',
        'Unseen modelling item on genes on one pair and a third on another pair, with every condition visible and nothing answer-bearing',
        "fruit fly's ovary / D and E / no crossing over / crossing over happens between the D and E genes / less common / Pause here to answer",
        'The countdown ring runs through the answer-free thinking hold while the whole card stays visible',
        E,
        'The board clears and the card writes on headed "A cell in a fruit fly\'s ovary, making eggs" with a small fly plate; the cell plate shows the long pair with D and E on one chromosome and d and e on the other and the short pair with F and f; the box "assume: no mutation; the two pairs line up independently" and demands (a) and (b) with two answer boxes stay visible; the countdown ring starts after "Pause here to answer." and the card stays during and after',
        ['Countdown ring', 'Enter reveals', 'plate slide'],
        'Quiet answer-free thinking hold with a 10 second countdown',
    ],
    'feedback-one': [
        'adjust',
        'The card shrunk to a strip with travel together brackets, computed gamete cells, a swap mark with four smaller ringed gametes and one crossed wrong chip',
        'Gives the model answer in stages: four types with no crossing over, four more with a swap, why they are rarer, then corrects the all eight slip',
        'stays with capital E / four / Crossing over between the genes / four more / only some cells / listed all eight as equally common',
        'Brackets join D with E and d with e, four gamete cells drop in, a swap mark draws and four smaller ringed cells follow, and the equal-eight chip is crossed',
        E,
        'The card shrinks to a strip; on "stays with capital E" brackets "travel together" join the D-E and d-e chromosomes; four gamete cells drop in and on "four" the line "(a) DEF, DEf, deF, def" writes; on "Crossing over between the genes" a swap mark draws and four smaller cells with amber rings drop in; on "four more" the line "(b) DeF, Def, dEF, dEf" writes; on "only some cells" the line "less common: a crossover between D and E happens in only some cells" writes; on "listed all eight as equally common" the chip writes and takes a grey cross with "D and E are on the same chromosome"',
        ['bracket draw', 'gamete drop', 'CrossOver swap', 'Mark cross'],
        'Settle on the model answer for about 1 second',
    ],
    'attempt-two': [
        'new',
        'Cleared card with two columns: runner plants on sunny and shady beds and seedling plants on one sunny bed with a pollination chip, two demands and the countdown ring',
        'Unseen explain and justify item on clones against seedlings with every condition visible and nothing answer-bearing',
        "runners / seeds / Explain the source of the variation in each group / which group's differences could be passed on through seeds / Pause here to answer",
        'The countdown ring runs through the answer-free thinking hold while both columns and both demands stay visible',
        E,
        'The board clears; the left column "Group A: from runners" shows the runner plate with lines to plants on beds tagged "sunny bed (10)" and "shady bed (10)" and "fruit size differs between beds"; the right column "Group B: from seeds" shows seedlings on "sunny bed (20)" with the chip "pollinated by another plant" and "fruit size, shape and colour vary"; the grower\'s plant sits small at the top; demands (a) and (b) with two answer boxes stay; the countdown ring starts after "Pause here to answer."',
        ['Countdown ring', 'Enter reveals', 'plate slide'],
        'Quiet answer-free thinking hold with a 10 second countdown',
    ],
    'feedback-two': [
        'adjust',
        'The card shrunk to a strip with an equals-genotype bracket on the runner plants, sun and shade chips, letter tags on the seedlings, reshuffle chips and one crossed wrong chip',
        "Gives the model answer in stages: clones differ by environment, seedlings by genetics, only the seedlings' differences are inherited, then corrects the shade slip",
        "clones, with the same genotype / environment / same bed / different gametes / Only Group B's differences can be passed on / the shady plants will pass on small fruit",
        'An equals-genotype bracket links the runner plants and the sun and shade chips light, the seedling bed glows as the same conditions and each seedling gets a different letter tag, then the inheritance line writes and the shady chip is crossed',
        E,
        'The card shrinks to a strip; on "clones, with the same genotype" an "= genotype" bracket links the left plants; on "environment" the sun and shade chips light and "(a) A: clones, same genotype; differences from the environment (light)" writes; on "same bed" the right bed glows "same conditions"; on "different gametes" each seedling gets a different small letter tag and the three reshuffle chips light and "B: same conditions; different genotypes from meiosis and fertilisation: genetic" writes; on "Only Group B\'s differences can be passed on" "(b) B: genetic differences are inherited; A\'s environmental differences are not" writes; on "the shady plants will pass on small fruit" the chip writes and takes a grey cross with "environment does not change the alleles"',
        ['bracket draw', 'chip light', 'tag pop', 'Mark cross'],
        'Settle on the model answer for about 1 second',
    ],
    'decision-rule': [
        'adjust',
        'Three chips writing on one per cue, with an amber bead on the new allele chip, and two next chips with a kit icon and a pea seed',
        'Packs the lesson into a sort-first rule and hands off to modelling and Punnett squares',
        'crossing over, assortment and fertilisation / mutation in the egg or sperm line / environment / Next',
        'Three chips write on one per cue and two next chips slide in at the lower right',
        E,
        'The chips "new combinations: crossing over, assortment, fertilisation", "new allele: mutation in the egg or sperm line" (with an amber bead) and "same genotype, different phenotype: environment" write on as each is said; on "Next" the chips "Next: model it yourself" with a small bead-and-card kit icon and "Then: Punnett squares and pedigrees" with a small pea seed slide in',
        ['HandText write-on', 'chip slide', 'bead recolour'],
        'Hold half a second before the notes',
    ],
    'key-notes': [
        'new',
        'Key notes card with the five notes and the memory aid',
        'Essentials to copy into books',
        'key notes',
        'Notes appear then stay still for copying',
        H,
        'The heading "Key notes: what to write in your book", the five notes and the memory line appear and lock',
        ['Enter reveals'],
        'Quiet copy hold of about 60 seconds with pause invitation',
    ],
}


B9_ROWS = {
    'hook': [
        "adjust",
        "The painted tall and short pea plants with four tall offspring copies, a coded field of 1,064 plant icons and a small pedigree sketch",
        "Poses how two tall plants can have a short offspring, using Mendel counts, and previews the family tree",
        "every one of their offspring grew tall / vanished / pollinate themselves / 1,064 plants / 277 were short / a family tree",
        "Tall copies grow in a row, a ghost short plant fades in with a question mark, the field of icons fills to 1,064 and 277 drop short, then a small pedigree sketches in",
        "explain",
        "`m5x-pea-tall-v1.png` and `m5x-pea-short-v1.png` stand side by side on a soil strip, joined by a coded \"x\" (tag \"parents\"). On \"every one of their offspring grew tall\" four small copies of the tall plate grow up in a row below (tag \"all tall\"). On \"seemed to have vanished\" a ghost outline of the short plant fades beside them with a \"?\". On \"pollinate themselves\" a small coded loop arrow circles one tall offspring's flower. On \"1,064 plants\" a coded field of small plant icons fills a grid (tally ticker counting to 1,064, computed sum 787 + 277); on \"277 were short\" 277 of the icons drop to short height and a short-plant plate lifts out of the grid beside the ticker \"277 short\". On \"two tall plants have a short offspring\" the two tall parents and one short offspring pull to the centre with a bracket. On \"a family tree\" a small coded pedigree (three symbols, no people) sketches in at the lower right. The heading writes on: \"Predicting offspring\".",
        ["plate slide", "ticker count", "icon field fill", "HandText write-on", "DrawPath"],
        "Hold about two seconds",
    ],
    'hide-allele': [
        "adjust",
        "The B8 grey tag struck through, a coded gene to enzyme to hormone chain, a working and a weak enzyme, and allele chips on the stem outlines",
        "Explains why one allele can hide another through one working enzyme making enough hormone, before naming dominant and recessive",
        "genes code for proteins / makes a growth hormone / barely works / one of each / dominant / recessive",
        "The old tag is struck and replaced by now, enzyme blobs release hormone dots into a stem that lengthens, and the dominant and recessive chips write on beside their plants",
        "explain",
        "the cross board's left side. B8's grey tag \"which version shows: next video\" slides in and is struck through, replaced by \"now\". On \"genes code for proteins\" a small gene card with an arrow to a coded enzyme blob (grey tag \"B7\"). On \"makes a growth hormone\" the enzyme blob turns small coded hormone dots out into a stem outline, which lengthens. On \"barely works\" a second enzyme blob with a slightly misshapen pocket makes one hormone dot (tag \"barely works\"). On \"one of each\" a stem outline with one working and one weak enzyme still fills with hormone dots and grows tall; `m5x-pea-tall-v1.png` stands beside it. On \"dominant\" a chip \"T\" (capital, large serif) writes \"dominant: shows with one copy\". On \"recessive\" a chip \"t\" writes \"recessive: shows only with two copies\", and `m5x-pea-short-v1.png` stands beside a \"t t\" card. A grey tag: \"genotype: the alleles; phenotype: what you see (B7)\".",
        ["tag strike", "enzyme blob", "dot flow", "plate slide", "HandText write-on"],
        "Hold one second",
    ],
    'gametes': [
        "adjust",
        "Three allele cards under tall and short plates, the B5b plum and teal chromosome plates, gamete discs and four offspring cards",
        "Names homozygous and heterozygous, shows each gamete gets one allele, and explains why the first cross gave all tall",
        "homozygous / heterozygous / separate / half carry / Mendel's first cross / every one carries the short allele",
        "The three cards line up with their tags, the chromosomes slide apart into two gamete discs, four offspring cards drop in and each hidden short allele is ringed",
        "explain",
        "on \"homozygous\" three allele cards line up under three plates: \"TT\" (tall, tag \"homozygous\"), \"Tt\" (tall, tag \"heterozygous\" on its cue), \"tt\" (short, tag \"homozygous\"). Then the \"Tt\" card opens into B5b's plum and teal single chromosome plates, a \"T\" chip on the plum and a \"t\" chip on the teal (grey tag \"B5b\"). On \"separate\" the two chromosomes slide apart into two gamete discs (no stage drawing), each keeping one chip: \"T\" (plum edge) and \"t\" (teal edge). On \"half carry\" each disc gets \"1/2\" (computed). On \"Mendel's first cross\" the board shows \"TT x tt\": the TT parent sends only \"T\" discs, the tt parent only \"t\" discs; on \"all get one of each\" four offspring cards \"Tt\" drop in under four small tall plates; on \"every one carries the short allele\" each card's \"t\" chip gets a small amber ring (tag \"hidden, not lost\").",
        ["card line-up", "chromosome slide", "chip fly", "scribbleEllipse"],
        "Hold one second",
    ],
    'punnett': [
        "new",
        "The coded Punnett grid for Tt x Tt filling box by box with a ratio strip and the hook ticker returning",
        "Builds the square as every equally likely fertilisation and reads the genotype and phenotype ratios",
        "across the top / down the side / Each box / Fill them in / 1 to 2 to 1 / Three of the four boxes / 787 to 277",
        "Gamete discs slide along the top and side, one chip flies into each box in turn, the ratio rows compute and the ticker returns beside them",
        "explain",
        "`PunnettGrid` draws on the right: \"Tt x Tt\" above it. On \"across the top\" the plum-edged discs \"T\" and \"t\" slide along the top; on \"down the side\" the teal-edged discs slide down the side. On \"Each box\" one box pulses with two thin lines from its row and column disc (tag \"one fertilisation, chance 1/4\"). On \"Fill them in\" the boxes fill one per cue, each chip flying in from its disc: \"TT\", \"Tt\", \"Tt\", \"tt\". On \"1 to 2 to 1\" `RatioStrip` row 1 writes \"genotypes: 1 TT : 2 Tt : 1 tt\" (computed). On \"Three of the four boxes\" small tall plates pop into three boxes and a short plate into one; row 2 writes \"phenotypes: 3 tall : 1 short\" (computed by merging). On \"787 to 277\" the hook's ticker returns beside the strip: \"787 : 277 = 2.84 : 1\" (computed) with a tag \"close to 3 : 1\".",
        ["PunnettGrid", "chip fly", "ratio strip", "ticker count"],
        "Hold one second",
    ],
    'chance-per-offspring': [
        "new",
        "The grid shrunk to the corner, rows of four seeds from a seeded draw, a rolling die and a bar chart of short plants per four seeds",
        "Shows that a ratio is a chance for each offspring, not a count for every group, and that larger samples settle",
        "not a promise / whatever happened to the seed before it / about 42 per cent / hundreds of seeds",
        "Rows of four seeds draw one at a time with different counts, a die rolls above each seed, the bar chart highlights exactly one at 42 per cent and a ticker settles near 26 per cent",
        "explain",
        "the grid shrinks to the corner with a tag \"1/4 short, for each seed\". `FamilyReplay`: rows of four seed plates (`m5x-pea-yellow-round-v1.png` used as a neutral seed token, with a small plant icon that grows tall or short above each) draw one row at a time, outcomes from a seeded random with p = 1/4: row 1 \"0 short\", row 2 \"2 short\", row 3 \"1 short\", row 4 \"1 short\", row 5 \"0 short\". On \"whatever happened to the seed before it\" a small coded die rolls fresh above each seed in turn (tag \"each seed: a new chance\"). On \"about 42 per cent\" a bar chart writes on: number of short plants in a group of four (0 to 4) with the \"exactly 1\" bar highlighted at 42% (computed: 27/64 = 42.2%; other bars 31.6%, 21.1%, 4.7%, 0.4%, labels on bars \"0\", \"1\", \"2\", \"3\", \"4\" only, percentages small). On \"hundreds of seeds\" a ticker runs the hook's 1,064 plants and the short share settles at 26% beside a dashed \"25%\" line (computed 277/1,064 = 26.0%).",
        ["family replay", "die roll", "bar chart", "ticker count"],
        "Hold one second",
    ],
    'test-cross': [
        "new",
        "Two tall plates with unknown genotype cards, a short plate and two small grids for the two possible tall parents",
        "Shows why a test cross works because the tester can only give the short allele",
        "homozygous or heterozygous / short plant / test cross / even one offspring is short / probably homozygous / more offspring",
        "The short plate slides in, both small grids fill, one short offspring removes the question mark from the heterozygous card, and a counter and certainty bar rise for the all-tall grid",
        "explain",
        "two tall plates side by side with cards \"TT?\" and \"Tt?\" and a tag \"same phenotype\". A short plate with \"tt\" slides in below (tag \"can only give t\"). The grid splits into two small grids: left \"TT x tt\" fills with four \"Tt\" boxes (computed, tag \"all tall\"), right \"Tt x tt\" fills \"Tt, Tt, tt, tt\" (computed, tag \"1 tall : 1 short\"). On \"test cross\" the label writes over both. On \"even one offspring is short\" a single short plant icon appears under the right grid and the \"Tt?\" card loses its \"?\" with an amber tick. On \"probably homozygous\" the left grid's tag reads \"all tall: likely TT, not proven\"; on \"more offspring\" a counter of tall offspring under it rises 4, 10, 40 while a small certainty bar fills (no number).",
        ["PunnettGrid", "plate slide", "tick pop", "counter bar"],
        "Hold one second",
    ],
    'read-pedigree': [
        "new",
        "A coded pedigree legend and symbols with Roman numerals, individual numbers and an autosome strip",
        "Teaches the pedigree symbols and numbering so individuals can be named, and says what autosomes are",
        "pedigrees / Squares are males / shaded symbol / A line joins two parents / Roman numeral / each person a number / autosomes",
        "The board wipes to the pedigree board, the legend and a couple with a sibship bar draw in, numerals and numbers write on, and the autosome pairs highlight",
        "explain",
        "the board wipes to the pedigree board. A legend writes on at the right, one entry per cue: an open square \"male\", an open circle \"female\", a filled square and circle \"has the trait\". On \"A line joins two parents\" a square and circle connect with a horizontal couple line; on \"a line down\" a vertical line drops to a sibship bar with three symbols. On \"Roman numeral\" \"I\", \"II\" write on at the left; on \"each person a number\" \"1, 2\" under generation I and \"1, 2, 3\" under generation II. A grey tag: \"carriers are often not marked\". On \"autosomes\" a small coded karyotype strip (22 numbered bar pairs plus an X and Y pair greyed) highlights the numbered pairs (tag \"autosomes: not X or Y\"). No people, faces or bodies.",
        ["Pedigree", "DrawPath", "HandText write-on", "strip highlight"],
        "Hold one second",
    ],
    'recessive-pedigree': [
        "new",
        "Pedigree P1 building generation by generation with travelling allele chips, genotype chips and amber rings",
        "Shows how unaffected parents can have an affected child because each carries a hidden recessive allele",
        "two unaffected children / got one recessive allele from him / In generation three / That's the giveaway / carriers / skip a generation",
        "Each generation drops in, a recessive chip travels down the lines, amber rings and a bracket mark the giveaway, genotype chips pin and a skip arrow runs across",
        "explain",
        "`Pedigree` (data in Numbers, pedigree P1) builds generation by generation. Generation I: I-1 filled square, I-2 open circle. On \"two unaffected children\" II-2 (open square) and II-3 (open circle) drop in below. On \"got one recessive allele from him\" a small \"a\" chip travels down the line from I-1 to each child (genotype chips \"Aa\" pinned under II-2 and II-3). On \"In generation three\" II-4 (open square, married in) joins II-3 with a couple line, and III-1 (filled circle) and III-2 (open square) drop in. On \"That's the giveaway\" II-3, II-4 and III-1 get amber rings and a bracket \"unaffected parents, affected child\". On \"each parent must carry\" \"Aa\" chips pin under II-3 and II-4 and \"aa\" under III-1. On \"carriers\" a tag \"carrier: has one hidden recessive allele\" writes on. On \"skip a generation\" a soft amber arrow runs from I-1 past generation II to III-1 (tag \"skips a generation\"). A small assumption tag sits at the lower right throughout scenes 8 to 10: \"assume: one gene; the trait always shows when its allele pattern is present; no new mutation\".",
        ["Pedigree", "chip travel", "scribbleEllipse", "bracket draw"],
        "Hold one second",
    ],
    'dominant-pedigree': [
        "new",
        "Pedigree P2 with generation ticks and lines to affected parents, a half-chance grid, an inset trio and a crossed chip",
        "Teaches the dominant pedigree clues, the decisive affected parents with an unaffected child, and that dominant does not mean common",
        "every generation / every affected child has an affected parent / a half chance / two affected parents with an unaffected child / dominant doesn't mean common",
        "Amber ticks and lines mark the clues, a small grid fills for the half chance, an inset trio shows the decisive pattern and a dominant equals common chip is crossed",
        "explain",
        "the board slides to pedigree P2 (data in Numbers). I-1 filled square x I-2 open circle; generation II: II-1 filled circle, II-2 open square, II-3 filled square; II-1 x II-4 (open square, married in): III-1 filled square, III-2 open circle. On \"every generation\" each generation's filled symbols get a soft amber tick down the left margin, with a grey tag \"clues, not proof\". On \"every affected child has an affected parent\" thin amber lines run from II-1 and II-3 up to I-1, and from III-1 up to II-1. On \"a half chance\" a small grid \"Aa x aa\" fills beside I-1 and I-2 (\"Aa, Aa, aa, aa\", computed, tag \"1/2 affected, for each child\"). On \"two affected parents with an unaffected child\" a separate inset trio draws (two filled symbols with an open circle child, labelled \"inset\"), with chips \"Aa\", \"Aa\" above and \"aa\" below; a bracket \"affected parents, unaffected child\". On \"dominant doesn't mean common\" a chip \"dominant = common\" writes on and takes a grey scribble cross, with a tag \"Huntington's: dominant and rare\".",
        ["Pedigree", "PunnettGrid", "scribbleEllipse", "strike"],
        "Hold one second",
    ],
    'giveaways': [
        "new",
        "Two large handwritten rules with trio icons, pedigree P1 returning small with named individuals ringed and a three-part model answer",
        "Gives the memory aid and models naming numbered individuals in an answer",
        "Hidden in the parents / Hidden in the child / name the people / genotypes / Punnett square",
        "The two rules write on, the pedigree returns small and each named person rings in turn, then the model answer writes in three short parts with a mini grid",
        "explain",
        "two big handwritten lines write on, each with a tiny trio icon beside it: \"Hidden in the parents: recessive\" (two open symbols, filled child) and \"Hidden in the child: dominant\" (two filled symbols, open child). On \"name the people\" pedigree P1 returns small, and as each person is named, \"II-3\", \"II-4\" and \"III-1\" ring in amber under their symbols. A model answer line writes on in three short parts, one per cue: \"II-3 and II-4 unaffected; their daughter III-1 affected: recessive\", \"II-3 Aa, II-4 Aa, III-1 aa\", and a mini grid \"Aa x Aa\" (computed) with \"next child: 1/4 affected\".",
        ["HandText write-on", "Pedigree", "scribbleEllipse", "PunnettGrid"],
        "Hold half a second",
    ],
    'attempt': [
        "new",
        "A cleared card with an unseen pedigree P3, a legend, three demands and answer boxes",
        "Unseen transfer on dominant against recessive with evidence, genotypes and a per-child chance, with nothing answer-bearing",
        "Two harder questions / numbered individuals / probability that their next child is unaffected / Pause here to answer",
        "The countdown ring runs through the answer-free thinking hold",
        "explain",
        "the board clears: no earlier pedigrees, tags or trio icons. The card writes on, headed \"A condition caused by a gene on an autosome\". Centre: pedigree P3 (data in Numbers) with Roman numerals and individual numbers, and a legend (open = unaffected, filled = affected). Demands: \"(a) Dominant or recessive? Justify using numbered individuals.\" \"(b) Give the genotypes of I-1 and I-2.\" \"(c) Probability that their next child is unaffected?\" Three answer boxes and an assumption line: \"assume: one gene; no new mutation\". Nothing answer-bearing: no genotype chips, no rings, no grid. The countdown ring starts after \"Pause here to answer.\" and runs for 10 seconds. The whole card stays on screen during the countdown and after it.",
        ["Countdown ring", "Enter reveals"],
        "Quiet answer-free thinking hold with a 10 second countdown",
    ],
    'feedback-one': [
        "adjust",
        "The attempt card shrunk to a strip, with amber rings, genotype chips, a mini grid and a crossed chip",
        "Gives the answer and key reason briefly and corrects the dominant-because-common slip",
        "It's dominant / both affected / both are heterozygous / one in four / most of the family has it",
        "The pedigree rings the evidence, genotype chips pin, a mini grid fills with the unaffected box ringed and the wrong chip is crossed",
        "explain",
        "the card shrinks to a strip at the top (pedigree and demands stay readable). (1) On \"both affected\" I-1 and I-2 ring amber; on \"unaffected\" II-1 rings amber; the line \"(a) Dominant: I-1 and I-2 affected, their daughter II-1 unaffected (hidden in the child)\" writes on. (2) On \"both are heterozygous\" chips \"Aa\" pin under I-1 and I-2 and \"aa\" under II-1; the line \"(b) I-1 Aa, I-2 Aa\" writes on. (3) On \"one in four\" a mini grid \"Aa x Aa\" fills (computed) with the \"aa\" box ringed; \"(c) 1/4 (25%)\" writes on. (4) On \"most of the family has it\" the chip \"dominant, because most have it\" writes on and takes a grey scribble cross, with the tag \"cite individuals; dominant does not mean common\".",
        ["scribbleEllipse", "chip pin", "PunnettGrid", "Mark cross"],
        "Settle on the model answer for about a second",
    ],
    'attempt-two': [
        "new",
        "A cleared card with the round and wrinkled seed plates, the seed counts, two demands and an empty grid outline",
        "Unseen transfer on inferring a parent genotype from data and explaining sampling variation, with nothing answer-bearing",
        "Second / 52 round seeds and 48 wrinkled seeds / Use a Punnett square / Pause here to answer",
        "The countdown ring runs through the answer-free thinking hold",
        "explain",
        "the board clears. The card shows `m5x-pea-yellow-round-v1.png` labelled \"round parent (seed)\" and `m5x-pea-yellow-wrinkled-v1.png` labelled \"wrinkled parent (seed)\" joined by \"x\", with the line \"round (R) is dominant to wrinkled (r)\". Below: a results box with a round seed plate \"52\" and a wrinkled seed plate \"48\". Demands: \"(a) Use a Punnett square to find the genotype of the round parent.\" \"(b) Explain why the counts are not exactly 50 : 50.\" Two answer boxes and an empty 2 x 2 grid outline (no letters). Nothing answer-bearing: no genotypes, no gametes, no ratio. The countdown ring starts after \"Pause here to answer.\" and runs for 10 seconds. The whole card stays on screen during the countdown and after it.",
        ["Countdown ring", "Enter reveals"],
        "Quiet answer-free thinking hold with a 10 second countdown",
    ],
    'feedback-two': [
        "adjust",
        "The attempt card shrunk to a strip, with parent genotypes, a filled grid, a seeded replay tally and a crossed chip",
        "Gives the answer and key reason briefly and corrects the homozygous round parent slip",
        "only give the wrinkled allele / heterozygous / a separate chance / the round parent is homozygous",
        "Genotypes write beside the parents, the grid fills, a tally flickers through three replays and the homozygous chip is crossed with its all-round grid",
        "explain",
        "the card shrinks to a strip. (1) On \"can only give the wrinkled allele\" the wrinkled parent gets \"rr\" and its gamete discs \"r\", \"r\". (2) On \"heterozygous\" the round parent gets \"Rr\" with discs \"R\", \"r\"; the grid fills \"Rr, Rr, rr, rr\" (computed); the line \"(a) Rr x rr: 1 round : 1 wrinkled, so the round parent is Rr\" writes on. (3) On \"a separate chance\" a small tally flickers through three replays of 100 seeds (seeded: 52:48, 47:53, 50:50) beside the line \"(b) each seed is an independent chance; a sample of 100 varies around 1 : 1\" writing on. (4) On \"the round parent is homozygous\" the chip \"round parent RR\" writes on with a mini grid \"RR x rr\" filling four \"Rr\" boxes (computed, tag \"all round\"), and the chip takes a grey scribble cross.",
        ["PunnettGrid", "family replay", "HandText write-on", "Mark cross"],
        "Settle on the model answer for about a second",
    ],
    'decision-rule': [
        "adjust",
        "Four step chips with icons, a pedigree row and two next chips with the white-eyed fly and pink snapdragon plates",
        "Packs the method into reusable steps and hands off to sex linkage and other dominance patterns",
        "genotypes / split each into its gametes / fill the square / giveaway / Next",
        "The step chips write on one per cue, the pedigree row follows and two next chips slide in with small plates",
        "explain",
        "four step chips write on, one per cue, each with a tiny icon: \"1 genotypes\" (allele cards), \"2 gametes\" (discs), \"3 square\" (grid), \"4 ratios = chances per offspring\" (die). A second row: \"pedigree: giveaway, then named people, then square\" (trio icon). Two \"Next\" chips slide in at the lower right: \"Next: sex linkage\" (a small `m5x-fly-white-eye-v1.png`) and \"and beyond dominant and recessive\" (a small `m5x-snapdragon-pink-v1.png`).",
        ["HandText write-on", "line highlight", "chip slide"],
        "Hold half a second before the notes",
    ],
    'key-notes': [
        "new",
        "Key notes card with the five notes and the memory aid",
        "Essentials to copy into books",
        "key notes",
        "Notes appear then stay still for copying",
        "hold",
        "The heading \"Key notes: what to write in your book\", the five notes and the memory aid appear and lock",
        ["Enter reveals"],
        "Quiet copy hold of about 60 seconds with pause invitation",
    ],
}

B10_ROWS = {
    'hook': [
        "adjust",
        "The B8 jar with the painted white-eyed fly, red-eyed fly plates, a three-tally counter and an empty white-eyed females column",
        "Poses why every white-eyed fly was male, from Morgan's counts",
        "Morgan's lab / red-eyed females / all their offspring had red eyes / bred those offspring with each other / Every single white-eyed fly was male",
        "Red-eyed plates slide in, a row of red offspring fills, three tallies write one per cue and an empty white-eyed females column writes on with a zero and an amber ring",
        "explain",
        "B8's jar outline with `m5x-fly-white-eye-v1.png` in it (grey tag \"B8: a new allele, 1910\"). On \"red-eyed females\" three `m5x-fly-red-eye-v1.png` plates slide in beside it, each with a small \"female\" tag (coded sex symbols are not used; tags are words). On \"all their offspring had red eyes\" a row of red-eyed fly plates fills below (tag \"all red\"). On \"white was recessive\" a chip \"white: recessive\" writes on. On \"bred those offspring with each other\" the row splits into a second generation: a counter board writes three tallies, one per cue: \"red-eyed females 2,459\", \"red-eyed males 1,011\", \"white-eyed males 782\" (Morgan's counts), with fly plates above each tally. On \"Every single white-eyed fly was male\" an empty fourth column \"white-eyed females\" writes on with \"0\" and an amber ring. The heading writes on: \"When 3 : 1 breaks\".",
        ["plate slide", "tally count", "HandText write-on", "scribbleEllipse"],
        "Hold about two seconds",
    ],
    'sex-chromosomes': [
        "new",
        "Female XX and male XY chip panels with allele tag slots, a dashed empty slot on the Y and the white-eyed fly plate",
        "Explains why one X allele shows in a male because the Y has no partner, before naming sex-linked",
        "sex chromosomes / The eye colour gene is on the X / two copies / only one / no other allele to hide it / sex-linked",
        "The X and Y panels draw, tag slots appear with a dashed empty slot on the Y, allele tags land and the term writes on",
        "explain",
        "B9's karyotype strip returns small with the X and Y pair now highlighted (tag \"sex chromosomes\"; grey tag \"B9: autosomes\"). Two coded panels draw: \"female: XX\" (two X chips) and \"male: XY\" (an X chip and a shorter Y chip). On \"The eye colour gene is on the X\" an allele tag slot appears on each X chip; the Y chip gets a small empty dashed slot with the tag \"no copy on the Y\". On \"two copies\" the female's X chips take tags \"R\" and \"r\" (shown as X^R X^r, tag \"red eyes: r is hidden\"). On \"only one\" the male's X takes \"r\" (X^r Y) and on \"no other allele to hide it\" a dashed amber ring circles the empty Y slot; `m5x-fly-white-eye-v1.png` slides in beside him. On \"sex-linked\" the term writes on, with a grey tag \"write the allele on the X: X^R, X^r; Y has none\".",
        ["SexChrom", "tag pop", "scribbleEllipse", "HandText write-on"],
        "Hold one second",
    ],
    'morgan-cross': [
        "new",
        "The cross board with a carrier female and a red-eyed male, sex bands on the square and Morgan's tallies returning",
        "Builds Morgan's second cross on a square and reads sons and daughters separately",
        "carriers / his X / to every daughter / every daughter has red eyes / half the sons / matches",
        "Gamete discs form, the square fills one box per cue with daughter and son bands, fly icons appear and the tallies return with the empty column ticked",
        "explain",
        "the cross board. Left: a red-eyed fly plate tagged \"carrier female X^R X^r\" and a red-eyed fly plate tagged \"male X^R Y\". On \"a white allele on their father's X\" a thin line runs from the carrier's X^r chip back up to a small ghost of the hook's white-eyed male (tag \"from her father\"). Gamete discs: female \"X^R\", \"X^r\" (teal edges, side); male \"X^R\", \"Y\" (plum edges, top). On \"his X ... to every daughter\" `SexBands` labels the X^R column \"daughters\" and the Y column \"sons\"; the square fills one box per cue: \"X^R X^R\", \"X^R X^r\" (daughters), \"X^R Y\", \"X^r Y\" (sons), computed. On \"every daughter has red eyes\" both daughter boxes take small red-eyed fly icons. On \"half the sons\" one son box takes a white-eyed fly icon and the ratio strip writes \"daughters: all red; sons: 1 red : 1 white\" (computed by `bySex`). On \"matches what Morgan saw\" the hook's tallies return small with the empty \"white-eyed females 0\" column ticked and a small tag under the male tallies \"1,011 : 782, close to 1 : 1\".",
        ["PunnettGrid", "SexBands", "chip fly", "ratio strip"],
        "Hold one second",
    ],
    'haemophilia': [
        "new",
        "Carrier mother and unaffected father pedigree symbols, a square with sex bands and brackets for all children and for sons",
        "Separates the chance for all children from the chance for sons and explains why males are affected more often",
        "one in four chance, for each child / for each son / all children, or sons / No daughter / far more common in males",
        "The square fills with pedigree symbols, one bracket outlines all four boxes then another outlines the sons, and tags write on for daughters and for the male excess",
        "explain",
        "the fly plates slide off; two coded parent symbols (an open circle with a centre dot, tag \"carrier mother X^H X^h\", and an open square, tag \"unaffected father X^H Y\"; pedigree symbols only, no people) sit at the left. The square fills (computed): \"X^H X^H\", \"X^H X^h\" (daughters band), \"X^H Y\", \"X^h Y\" (sons band); each box takes the matching pedigree symbol (open circle, dotted circle, open square, filled square). On \"one in four chance, for each child\" all four boxes outline with a bracket \"all children: 1/4 affected son\". On \"for each son\" only the sons band outlines, with \"sons: 1/2 affected\". On \"all children, or sons?\" the two brackets sit side by side, amber. On \"No daughter\" the daughters band takes a tag \"0 affected; 1/2 of daughters are carriers\". On \"far more common in males\" a small grey tag writes on: \"if 1 in 100 X chromosomes carries the allele: about 1 in 100 males, 1 in 10,000 females (random mating)\".",
        ["PunnettGrid", "SexBands", "bracket draw", "tag pop"],
        "Hold one second",
    ],
    'x-linked-pedigree': [
        "new",
        "Pedigree P4 with amber rings and a carrier path, a father-to-son tag, travelling X chips and B9 pedigree P1 returning small",
        "Teaches the X-linked recessive pedigree pattern and the one decisive exclusion of an affected daughter with an unaffected father",
        "mostly males / carrier mothers / never passes from father to son / doesn't only come from mothers / an affected daughter with an unaffected father",
        "Affected males ring, a carrier path draws, X chips travel to the daughters, the only-from-mothers chip is crossed and the earlier pedigree slides in with its two people ringed",
        "explain",
        "`Pedigree` P4 (data in Numbers) builds: I-1 filled square x I-2 open circle; generation II: II-1 dotted circle (carrier), II-2 open square, II-3 dotted circle; II-1 x II-4 (open square): III-1 filled square, III-2 open circle, III-3 filled square. On \"mostly males\" the filled squares ring amber. On \"through unaffected carrier mothers\" a soft amber path runs I-1 to II-1 to III-1 and III-3. On \"never passes from father to son\" the line from I-1 to his son II-2 takes a tag \"father to son: never (son gets his Y)\". On \"doesn't only come from mothers\" a chip \"only from mothers\" writes on and takes a grey scribble cross; on \"every daughter\" chips \"X^h\" travel from I-1 down to II-1 and II-3 (tag \"all his daughters: carriers\"). On \"an affected daughter with an unaffected father\" B9's pedigree P1 slides in small (grey tag \"B9\"), its III-1 and II-4 ringed, and the tag \"affected daughter, unaffected father: not X-linked recessive\" writes on. A grey tag at the lower right: \"this video: X-linked recessive only\".",
        ["Pedigree", "DrawPath", "chip travel", "strike"],
        "Hold one second",
    ],
    'heterozygote-first': [
        "new",
        "The heterozygote board with the complete dominance row from B9 and two empty rows with question marks",
        "Gives the quick test of reading the heterozygote first to tell the patterns apart",
        "fully dominant / read the heterozygote first / in between / both at once",
        "Row 1 fills with its tags, the heterozygote is ringed, then two empty rows draw in with a question mark in each middle slot",
        "explain",
        "`HetBoard`. Row 1, \"complete dominance\": `m5x-pea-tall-v1.png` \"TT\", `m5x-pea-tall-v1.png` \"Tt\", `m5x-pea-short-v1.png` \"tt\", with B9's mini grid and \"3 : 1\" (grey tag \"B9\"). On \"read the heterozygote first\" the middle column of row 1 rings amber (tag \"heterozygote looks like TT\"). On \"in between\" an empty row 2 draws with \"?\" in its middle slot; on \"both at once\" an empty row 3 draws with \"?\" in its middle slot.",
        ["HetBoard", "scribbleEllipse", "row draw"],
        "Hold one second",
    ],
    'incomplete-dominance': [
        "new",
        "The snapdragon row with enzyme blobs and pigment dots, a pink offspring strip, a filled square and a crossed blending chip",
        "Explains the pink heterozygote with one working enzyme and shows the alleles do not blend",
        "every offspring is pink / an enzyme that makes red pigment / incomplete dominance / Cross two pinks / never blended",
        "The pink strip appears, enzyme blobs and pigment dots show less pigment, the label writes on, the square fills and the blending chip is crossed",
        "explain",
        "row 2 fills: `m5x-snapdragon-red-v1.png` \"CR CR\", `m5x-snapdragon-pink-v1.png` \"CR CW\", `m5x-snapdragon-white-v1.png` \"CW CW\" (a grey tag: \"neither allele dominant: one capital letter, two superscripts\"). On \"every offspring is pink\" a short `pre` strip: red x white gives a row of pink plates. On \"an enzyme that makes red pigment\" each flower gets a small coded enzyme blob and pigment dots: red flower, two working blobs, many dots; white flower, two misshapen blobs, no dots (grey tag \"B7\"); pink flower, one working and one misshapen blob, fewer dots. On \"incomplete dominance\" the row label writes on. On \"Cross two pinks\" the cross board's grid fills \"CR CR\", \"CR CW\", \"CR CW\", \"CW CW\" with flower icons (computed); the ratio strip writes \"genotypes 1 : 2 : 1; phenotypes 1 red : 2 pink : 1 white\" (computed by merging, which merges nothing). On \"never blended\" a chip \"pink = blended alleles\" writes on and takes a grey scribble cross, with the tag \"red and white return\".",
        ["HetBoard", "enzyme blob", "PunnettGrid", "strike"],
        "Hold one second",
    ],
    'co-dominance': [
        "new",
        "The cattle row, a hair zoom on the roan flank beside a petal zoom, and a filled square",
        "Shows that roan is two colours side by side and that both patterns give 1 : 2 : 1 because the heterozygote looks new",
        "roan / Look closely / Both alleles are fully expressed / co-dominance / Two roans / different from both homozygotes",
        "Two magnifier circles open to show separate hairs against an even wash, the label writes on, the square fills and both middle slots ring together",
        "explain",
        "row 3 fills: `m5x-cattle-red-v1.png` \"CR CR\", `m5x-cattle-roan-v1.png` \"CR CW\", `m5x-cattle-white-v1.png` \"CW CW\". On \"Look closely\" `HairZoom`: a magnified circle opens over the roan's flank showing separate coded hair strokes, each fully red or fully white, beside a second magnified circle over the pink snapdragon petal showing an even pink wash (tags \"roan: each hair one colour\", \"pink: every cell in between\"). On \"co-dominance\" the row label writes on. On \"Two roans\" the grid fills (computed) with cattle icons; the ratio strip writes \"1 red : 2 roan : 1 white\". On \"the heterozygote looks different from both homozygotes\" rows 2 and 3 ring their middle slots amber together, with the tag \"heterozygote looks new: phenotype ratio = genotype ratio, 1 : 2 : 1\".",
        ["HetBoard", "HairZoom", "PunnettGrid", "scribbleEllipse"],
        "Hold one second",
    ],
    'abo': [
        "new",
        "The fourth board row, three allele chips, a red cell plate gaining antigen marks and a genotype table",
        "Explains multiple alleles and ABO through each allele's enzyme before the table of six genotypes",
        "three alleles / multiple alleles / only two of them / A antigens / adds neither / co-dominant / two small i alleles",
        "Three allele chips write on, antigen marks grow on a red cell, a bare cell shows the third allele, an AB cell carries both and the genotype table fills",
        "explain",
        "a fourth row draws under the heterozygote board, then the board slides up and row 4 expands. Three allele chips write on, one per cue: \"IA\", \"IB\", \"i\" (tag \"three alleles in the population\"); on \"only two of them\" two of the chips drop into a person-genotype slot (a coded card, no person), tag \"each person: two\". `AntigenCell`: `m5x-red-blood-cells-v1.png` cropped to one cell; on \"A antigens\" coded triangle marks tagged \"A\" grow on its surface; a second cell gets coded circle marks tagged \"B\"; on \"adds neither\" a third cell stays bare (tag \"i: enzyme doesn't work\"). On \"co-dominant\" a fourth cell carries both triangles and circles (tag \"IA IB: type AB\"). On \"two small i alleles\" a genotype table fills, six rows, computed: \"IA IA, IA i: A\", \"IB IB, IB i: B\", \"IA IB: AB\", \"i i: O\", with the tag \"6 genotypes, 4 blood groups\". A small handwritten tag beside the table: \"O is only ii\" (bank shortcut). (Revision 2: the typing tile and well rows are removed; the narration never uses them.)",
        ["AntigenCell", "chip drop", "table fill", "HandText write-on"],
        "Hold one second",
    ],
    'abo-surprise': [
        "new",
        "The cross board with two genotype cards, gamete discs and a four-box square of antigen cells",
        "Shows that an A parent and a B parent can have a child of any group when each carries a hidden i",
        "type A parent / hidden small i / four boxes / one in four",
        "The gamete discs form and the four boxes fill with antigen-cell icons and the ratio strip",
        "explain",
        "the cross board. Left: two genotype cards \"type A: IA i\" and \"type B: IB i\", each with a small cell icon. Gamete discs \"IA\", \"i\" (plum) and \"IB\", \"i\" (teal). On \"four boxes\" the grid fills one per cue (computed): \"IA IB: AB\", \"IA i: A\", \"IB i: B\", \"i i: O\", each box taking its antigen-cell icon. The ratio strip writes \"AB : A : B : O = 1 : 1 : 1 : 1, each 1/4\".",
        ["PunnettGrid", "chip fly", "ratio strip"],
        "Hold one second",
    ],
    'memory': [
        "adjust",
        "Two large handwritten lines with a snapdragon and hair-zoom icon, then the sex-linkage line with a father diagram",
        "Gives the memory aids after the causes are explained",
        "incomplete is in-between / co shows both / Dad gives his X to daughters",
        "The two rules write large beside their icons, then the sex-linkage rule writes with a small father-and-children arrow diagram",
        "explain",
        "two big handwritten lines write on beside small icons: \"Incomplete is in-between\" (pink snapdragon), \"Co shows both\" (the hair zoom circle). Then \"Dad gives his X to daughters and his Y to sons\" writes on with a tiny square-and-circle diagram (a father square sending an \"X\" arrow to a daughter circle and a \"Y\" arrow to a son square).",
        ["HandText write-on", "arrow draw"],
        "Hold half a second",
    ],
    'attempt': [
        "new",
        "A cleared card with the colour blindness pedigree, three demands and answer boxes",
        "Unseen transfer on X-linked inheritance from a carrier inferred from her father, with nothing answer-bearing",
        "Two harder questions / colour-blind / first child is a colour-blind son / Pause here to answer",
        "The countdown ring runs through the answer-free thinking hold",
        "explain",
        "the board clears: no earlier squares, rows or tags. The card writes on, headed \"Red-green colour blindness: recessive allele on the X\". A small coded pedigree (standard symbols, no carrier dot, no genotypes): generation I, an affected square (the woman's father) and an open circle; generation II, the woman (open circle, labelled \"woman, normal vision\") with a couple line to an open square (\"man, normal vision\"); a \"?\" child below. Demands: \"(a) Probability that their first child is a colour-blind son?\" \"(b) Probability that a son of theirs is colour-blind?\" \"(c) Could a daughter of theirs be colour-blind? Explain.\" Three answer boxes. Nothing answer-bearing: no genotypes, no grid, no carrier mark. The countdown ring starts after \"Pause here to answer.\" and runs for 10 seconds. The whole card stays on screen during the countdown and after it.",
        ["Countdown ring", "Enter reveals"],
        "Quiet answer-free thinking hold with a 10 second countdown",
    ],
    'feedback-one': [
        "adjust",
        "The attempt card shrunk to a strip, with a travelling X chip, the sex-band square and a crossed chip",
        "Gives the answer and key reason briefly and corrects answering for sons instead of all children",
        "only X / a one in two chance / one in four chance of a colour-blind son / no daughter / one in two for the first child",
        "The X chip travels to the woman, the square fills, each band rings in turn with its answer and the wrong chip is crossed",
        "explain",
        "the card shrinks to a strip at the top (pedigree and demands stay readable). (1) On \"his only X\" an \"X^b\" chip travels from the woman's father to her, and her circle gets a centre dot with the genotype \"X^B X^b\". (2) The grid fills (computed): \"X^B X^B\", \"X^B X^b\" (daughters), \"X^B Y\", \"X^b Y\" (sons). On \"a son has a one in two chance\" the sons band rings: \"(b) 1/2 of sons\". (3) On \"all their children\" all four boxes ring: \"(a) 1/4 of all children\". (4) On \"no daughter\" the daughters band rings: \"(c) No: every daughter gets X^B from her father; half are carriers\". (5) On \"one in two for the first child\" the chip \"first child: 1/2 colour-blind son\" writes on and takes a grey scribble cross, with the tag \"that's sons only\".",
        ["chip travel", "PunnettGrid", "scribbleEllipse", "Mark cross"],
        "Settle on the model answer for about a second",
    ],
    'attempt-two': [
        "new",
        "A cleared card with a small family diagram of type A, type B and type O, an allele key and two demands",
        "Unseen transfer on ABO genotypes and a per-child chance, with nothing answer-bearing",
        "Second / type O blood / Work out the genotypes / Pause here to answer",
        "The countdown ring runs through the answer-free thinking hold",
        "explain",
        "the board clears. The card shows three genotype cards with blank genotype lines and a cell icon each: \"mother: type A\", \"father: type B\", \"child: type O\", joined as a small family diagram with standard symbols (circle, square, a child symbol; no people). A key strip: \"alleles: IA, IB, i\". Demands: \"(a) Genotypes of the mother, father and child?\" \"(b) Probability that their next child is type AB?\" Two answer boxes. Nothing answer-bearing: no genotypes, no grid, no antigen marks beyond the plain cell icons. The countdown ring starts after \"Pause here to answer.\" and runs for 10 seconds. The whole card stays on screen during the countdown and after it.",
        ["Countdown ring", "Enter reveals"],
        "Quiet answer-free thinking hold with a 10 second countdown",
    ],
    'feedback-two': [
        "adjust",
        "The attempt card shrunk to a strip, with genotype cards filling, the four-box square and a crossed chip",
        "Gives the answer and key reason briefly and corrects the idea that A and B parents cannot have a type O child",
        "two small i alleles / hidden small i / Their square / can't have a type O child",
        "The child card fills and the i chips trace to the parents, the parent genotypes write, the square fills with the AB box ringed and the wrong chip is crossed",
        "explain",
        "the card shrinks to a strip. (1) On \"two small i alleles\" the child's card fills \"i i\" and two \"i\" chips trace up to the parents. (2) On \"the mother is type A\" the mother's card fills \"IA i\" and the father's \"IB i\"; the line \"(a) mother IA i, father IB i, child i i\" writes on. (3) On \"Their square\" the grid fills (computed) and the AB box rings; \"(b) 1/4 (25%)\" writes on. (4) On \"can't have a type O child\" the chip \"A x B can't give O\" writes on and takes a grey scribble cross, with the tag \"both can hide i\".",
        ["chip travel", "PunnettGrid", "scribbleEllipse", "Mark cross"],
        "Settle on the model answer for about a second",
    ],
    'decision-rule': [
        "adjust",
        "Four chips with small icons for the four patterns and a next chip with a pedigree question icon",
        "Packs the patterns into reusable questions and hands off to unfamiliar crosses and pedigrees",
        "read the heterozygote first / In between / Both showing / More than two alleles / sons and daughters / Next",
        "The four chips write on one per cue, each with its icon, then the next chip slides in",
        "explain",
        "four chips write on, one per cue, each with a tiny icon: \"heterozygote in between: incomplete dominance\" (pink snapdragon), \"heterozygote shows both: co-dominance\" (roan zoom), \"more than two alleles in the population: multiple alleles\" (three chips IA, IB, i), \"sons and daughters differ: X-linked\" (an X chip). A \"Next\" chip slides in at the lower right: \"Next: unfamiliar crosses and pedigrees\" (a small pedigree icon with a \"?\").",
        ["HandText write-on", "line highlight", "chip slide"],
        "Hold half a second before the notes",
    ],
    'key-notes': [
        "new",
        "Key notes card with the five notes and the memory aids",
        "Essentials to copy into books",
        "key notes",
        "Notes appear then stay still for copying",
        "hold",
        "The heading \"Key notes: what to write in your book\", the five notes and the two memory aids appear and lock",
        ["Enter reveals"],
        "Quiet copy hold of about 60 seconds with pause invitation",
    ],
}


BIO_B13_ROWS = {
    "hook": [
        "new",
        "the data board.",
        "Hook (half a million volunteers): UK Biobank is a shared research project that began recruiting in 2006.",
        "Half a million volunteers / link their health records / 850,000 places / approved researchers / one family, or one hospital",
        "A painted rack of sample tubes (m5x-sample-tube-rack-v1.png, new) sits at the left with the tag \"UK Biobank, recruiting from 2006\". On \"Half a million volunteers\" a coded TubeGrid fills the right side with small tube chips, a counter ticking to \"500,000\" (grey tag \"aged 40 to 69\"); on \"link their health records\" a thin line joins one chip to a small coded record card (no names, a heart and a pill icon).",
        "explain",
        "the data board. A painted rack of sample tubes (m5x-sample-tube-rack-v1.png, new) sits at the left with the tag \"UK Biobank, recruiting from 2006\". On \"Half a million volunteers\" a coded TubeGrid fills the right side with small tube chips, a counter ticking to \"500,000\" (grey tag \"aged 40 to 69\"); on \"link their health records\" a thin line joins one chip to a small coded record card (no names, a heart and a pill icon). On \"850,000 places\" one chip opens into a short DNA strip with many tiny ticks along it (tag \"about 850,000 variants measured\"; grey tag \"B12: reading DNA\"). On \"approved researchers\" five small coded lab badges ring the grid with dashed lines into it (tag \"shared with approved researchers\"). On \"one family, or one hospital\" a tiny pedigree of five symbols and a small 200-chip block appear beside the huge grid for scale. The heading writes on: \"What big shared data can show\". Hold two seconds.",
        [
            "HandText write-on",
            "scribbleEllipse",
            "Enter reveals"
        ],
        "Hold two seconds"
    ],
    "why-scale": [
        "adjust",
        "on \"many researchers and sites pool their data\" five site badges each send a stream of chips into one central bar; the term writes on with the gloss \"many groups pooling data\".",
        "Why scale matters: A project like this is called a large-scale collaborative project: many researchers and sites pool their data.",
        "many researchers and sites pool their data / only nudge risk a little / In a small study / hundreds of thousands / inference / never certain",
        "On \"only nudge risk a little\" two bars appear, \"carriers\" and \"non-carriers\", differing by a sliver (illustrative; tag \"a small real difference\"). On \"In a small study\" B11's SampleBounce runs with n = 200: repeated estimates of the difference scatter widely, some below zero (computed with seeded rng; as the first dots land the tag \"each dot: one small study's result\" writes on, then \"200 people: chance swamps it\").",
        "explain",
        "on \"many researchers and sites pool their data\" five site badges each send a stream of chips into one central bar; the term writes on with the gloss \"many groups pooling data\". On \"only nudge risk a little\" two bars appear, \"carriers\" and \"non-carriers\", differing by a sliver (illustrative; tag \"a small real difference\"). On \"In a small study\" B11's SampleBounce runs with n = 200: repeated estimates of the difference scatter widely, some below zero (computed with seeded rng; as the first dots land the tag \"each dot: one small study's result\" writes on, then \"200 people: chance swamps it\"). On \"hundreds of thousands\" the same simulation reruns with n = 200,000 and the dots cluster tightly above zero (tags \"each dot: one big study's result\" and \"200,000 people: the real difference shows\"). On \"inference\" the word writes on with the gloss \"a conclusion drawn from evidence\". On \"never certain\" a chip \"big data = certainty\" writes on and takes a grey scribble cross. Hold one second.",
        [
            "HandText write-on",
            "scribbleEllipse",
            "Enter reveals"
        ],
        "Hold one second"
    ],
    "sickle-puzzle": [
        "new",
        "the map board.",
        "The sickle cell puzzle: Pooling data isn't new.",
        "should become rare / combined into one map / large parts of Africa / Mediterranean, the Middle East and India / can't explain",
        "m6-red-cells-normal-sickle-v1.png sits small at the upper left (tag \"two copies: sickle cell anaemia\"). On \"should become rare\" a small coded line graph draws a frequency falling towards zero over generations (tag \"expected: selection removes it\"; grey tag \"Year 11: natural selection\").",
        "explain",
        "the map board. m6-red-cells-normal-sickle-v1.png sits small at the upper left (tag \"two copies: sickle cell anaemia\"). On \"should become rare\" a small coded line graph draws a frequency falling towards zero over generations (tag \"expected: selection removes it\"; grey tag \"Year 11: natural selection\"). On \"combined into one map\" many small survey dots drop onto the coded world outline and merge into shaded regions (WorldShade, banded legend written: \"under 1%\", \"1 to 5%\", \"5 to 10%\", \"over 10%\" of allele copies; source tag \"redrawn from Piel et al. 2010, bands simplified\"; shading drawn from the published figure, not by eye). On \"large parts of Africa\" the African bands brighten; on \"Mediterranean, the Middle East and India\" small shaded patches pulse in turn. On \"can't explain\" the falling expected line and the map sit side by side with a \"?\" between them. Hold one second.",
        [
            "DrawPath"
        ],
        "Hold one second"
    ],
    "three-streams": [
        "adjust",
        "three EvidenceCards dock at the right of the map in turn.",
        "Three kinds of evidence: Studies like this combine three kinds of evidence.",
        "Family trees / one base / where it's common / No single kind / all three agreeing",
        "Card 1 on \"Family trees\": B9's Pedigree (two open parent symbols, one filled child) with the tag \"recessive; carriers healthy\" (grey tag \"B9\"). Card 2 on \"one base\": B7's recall strip \"GAG to GTG\" with one amber tile (grey tag \"B7\").",
        "explain",
        "three EvidenceCards dock at the right of the map in turn. Card 1 on \"Family trees\": B9's Pedigree (two open parent symbols, one filled child) with the tag \"recessive; carriers healthy\" (grey tag \"B9\"). Card 2 on \"one base\": B7's recall strip \"GAG to GTG\" with one amber tile (grey tag \"B7\"). Card 3 on \"where it's common\": a thumbnail of the shaded map. On \"No single kind\" each card gets a small tag of what it cannot show: \"not how common\", \"not its effect in a population\", \"not why\". On \"all three agreeing\" three lines draw from the cards to one central chip: \"conclusion from agreement\". Hold one second.",
        [
            "DrawPath"
        ],
        "Hold one second"
    ],
    "malaria-overlay": [
        "new",
        "on \"Lay a map of malaria\" a hatched overlay (WorldShade second layer, hatching not colour, tag \"historical malaria\") slides over the allele map; on \"across Africa\" the overlap regions ring amber in Africa only, and a grey tag writes on over Asia and the Americas: \"weaker match outside Africa\" (source tag \"Piel et al.",
        "The malaria overlay: So why is it common in those places?",
        "Lay a map of malaria / across Africa / a parasite that a mosquito passes on / infected cells tend to sickle and get cleared / carriers don't get the anaemia / survive and have children more often / heterozygote advantage",
        "2010\"). On \"a parasite that a mosquito passes on\" the painted Anopheles plate (m5x-anopheles-mosquito-v1.png, new) and m7-plasmodium-red-cell-v1.png appear small at the lower left (tag \"malaria parasite inside a red cell\").",
        "explain",
        "on \"Lay a map of malaria\" a hatched overlay (WorldShade second layer, hatching not colour, tag \"historical malaria\") slides over the allele map; on \"across Africa\" the overlap regions ring amber in Africa only, and a grey tag writes on over Asia and the Americas: \"weaker match outside Africa\" (source tag \"Piel et al. 2010\"). On \"a parasite that a mosquito passes on\" the painted Anopheles plate (m5x-anopheles-mosquito-v1.png, new) and m7-plasmodium-red-cell-v1.png appear small at the lower left (tag \"malaria parasite inside a red cell\"). On \"infected cells tend to sickle and get cleared\" a small coded inset shows one infected red cell deforming into a sickle shape and fading out (tag \"infected carrier cells sickle and are removed\"). On \"carriers don't get the anaemia\" three genotype chips line up: \"two normal alleles\", \"carrier (one sickle allele)\", \"two sickle alleles\", each with two small bars, \"anaemia\" and \"severe malaria risk\": the carrier's anaemia bar is near zero and its malaria bar is short (illustrative heights; grey tag \"illustrative\"). On \"survive and have children more often\" a short generation strip shows the carrier chips passing more copies forward. On \"heterozygote advantage\" the term writes on with the gloss \"carriers do better than either kind of homozygote, here\". Hold one second.",
        [
            "HandText write-on",
            "Enter slide",
            "scribbleEllipse",
            "Enter reveals"
        ],
        "Hold one second"
    ],
    "match-not-proof": [
        "new",
        "on \"aren't proof\" the amber overlap rings dim and a chip \"maps match, so malaria caused it\" writes on with a grey \"?\" (tag \"association, not cause\"; grey tag \"B11\").",
        "A match isn't proof: But two maps that line up aren't proof on their own.",
        "aren't proof / other studies showed / another cause / a few of the founders",
        "On \"other studies showed\" a coded study card slides in: \"carriers vs non-carriers: severe malaria\" with two bars, the carrier bar much shorter (illustrative heights, tag \"direct evidence\"). On \"another cause\" the map pans to a small island inset.",
        "explain",
        "on \"aren't proof\" the amber overlap rings dim and a chip \"maps match, so malaria caused it\" writes on with a grey \"?\" (tag \"association, not cause\"; grey tag \"B11\"). On \"other studies showed\" a coded study card slides in: \"carriers vs non-carriers: severe malaria\" with two bars, the carrier bar much shorter (illustrative heights, tag \"direct evidence\"). On \"another cause\" the map pans to a small island inset. On \"a few of the founders\" a boat icon carries five bead symbols (two amber) to the island; the island population grows from them and the amber share stays high (computed bead counts; tag \"founders\"; grey tag \"founder effect: Module 6\"). Hold one second.",
        [
            "HandText write-on",
            "Enter slide",
            "scribbleEllipse"
        ],
        "Hold one second"
    ],
    "conservation": [
        "new",
        "the population board.",
        "Protecting a threatened species: The same kind of data helps protect threatened species.",
        "contagious facial cancer / very little genetic diversity / past population crashes / helps against a new disease / pair devils that are less related / doesn't guarantee survival",
        "The painted devil plate (m5x-tasmanian-devil-v1.png, new) enters at the left with a small coded map chip of Tasmania. On \"contagious facial cancer\" a grey tag writes on: \"devil facial tumour disease, first seen 1996\".",
        "explain",
        "the population board. The painted devil plate (m5x-tasmanian-devil-v1.png, new) enters at the left with a small coded map chip of Tasmania. On \"contagious facial cancer\" a grey tag writes on: \"devil facial tumour disease, first seen 1996\". On \"very little genetic diversity\" two DiversityTrays draw side by side, each a row of five markers: \"a diverse population\" with many bead colours per marker, \"devils\" with one or two colours per marker (illustrative; grey tag \"illustrative pattern, not measured values\"). The term \"genetic diversity\" writes on with the gloss \"how many different alleles\". On \"past population crashes\" a small coded line drops sharply and recovers narrow (tag \"population crash (bottleneck)\"). On \"helps against a new disease\" a disease icon passes along both trays: in the diverse tray a few beads glow (tag \"some may resist\"); in the devil tray none glow. On \"pair devils that are less related\" two coded animal cards (devil silhouettes in the plate's style, no labels) join with a tick, while a closely related pair takes a cross (tag \"pair the least related\"). On \"doesn't guarantee survival\" a chip \"diversity guarantees survival\" takes a grey scribble cross (tag \"also habitat, disease, numbers\"). Hold one second.",
        [
            "HandText write-on",
            "scribbleEllipse",
            "DrawPath"
        ],
        "Hold one second"
    ],
    "human-evolution": [
        "new",
        "on \"1000 Genomes Project\" a coded title card writes on with \"2,504 people, 26 populations\" (source tag \"1000 Genomes Project, 2015\"); 26 small region dots light on a faint world outline.",
        "What shared variants say about human history: Large data also show how human populations are related.",
        "1000 Genomes Project / share more variants / the most variation / most common variants found elsewhere / each group that left was a small set of founders / the reference genome / four to five million places",
        "On \"share more variants\" two pairs of variant strips compare: a pair sharing many amber ticks (tag \"more shared: more recent common ancestors\") and a pair sharing few. On \"the most variation\" VariantBars draw: five continental-group bars of variant sites per genome, the African-ancestry bar tallest (values from the phase 3 paper; tag \"variant sites per genome\").",
        "explain",
        "on \"1000 Genomes Project\" a coded title card writes on with \"2,504 people, 26 populations\" (source tag \"1000 Genomes Project, 2015\"); 26 small region dots light on a faint world outline. On \"share more variants\" two pairs of variant strips compare: a pair sharing many amber ticks (tag \"more shared: more recent common ancestors\") and a pair sharing few. On \"the most variation\" VariantBars draw: five continental-group bars of variant sites per genome, the African-ancestry bar tallest (values from the phase 3 paper; tag \"variant sites per genome\"). On \"most common variants found elsewhere\" nested coded circles draw, headed \"common variants\": a large circle \"found in African populations\" with smaller overlapping circles mostly inside it (grey tag \"rare variants: mostly found in one region\"). On \"each group that left was a small set of founders\" a SimilarityTree draws from one root, and at each branch a small handful of beads (scene 6's founder look) is drawn from the parent group's larger bead set (tag \"founders carry part of the variety\"; illustrative branching, no dates). On \"the reference genome\" a single strip labelled \"reference genome\" writes on, with three small donor symbols feeding it (pedigree squares and circles, no people) and the tag \"built from a few donors\". On \"four to five million places\" one person's strip slides under it and many differing ticks flash (tag \"a typical genome differs at 4 to 5 million sites\"). Hold one second.",
        [
            "HandText write-on",
            "Enter slide",
            "scribbleEllipse",
            "DrawPath"
        ],
        "Hold one second"
    ],
    "improves-not-removes": [
        "new",
        "the data board returns as a two-column table, written row by row on each cue: left \"improves\": \"pattern detection\", \"confidence in broad trends\", \"comparison across populations\"; right \"does not remove\": \"a biased sample\", \"method limits\", \"uncertainty for one person\".",
        "What big data improve, and what they don't: So, large data improve pattern detection, confidence in broad trends, and comparisons across many populations.",
        "healthier on average / states both sides",
        "On \"healthier on average\" the big tube grid tints slightly and a small comparison chip appears: \"volunteers vs whole population: volunteers healthier on average\" (source tag \"Fry et al. 2017\").",
        "explain",
        "the data board returns as a two-column table, written row by row on each cue: left \"improves\": \"pattern detection\", \"confidence in broad trends\", \"comparison across populations\"; right \"does not remove\": \"a biased sample\", \"method limits\", \"uncertainty for one person\". On \"healthier on average\" the big tube grid tints slightly and a small comparison chip appears: \"volunteers vs whole population: volunteers healthier on average\" (source tag \"Fry et al. 2017\"). On \"states both sides\" the two column headers pulse together. Hold one second.",
        [
            "Enter reveals"
        ],
        "Hold one second"
    ],
    "memory": [
        "new",
        "two handwritten lines write on with small icons: \"big data sharpen the trend; they don't predict a person\" (the settled simulation dots), \"common but harmful?",
        "Memory: Two lines to remember.",
        "Two lines to remember.",
        "carrier advantage, or chance in a small group\" (the carrier chip and the founder boat). Hold half a second.",
        "explain",
        "two handwritten lines write on with small icons: \"big data sharpen the trend; they don't predict a person\" (the settled simulation dots), \"common but harmful? carrier advantage, or chance in a small group\" (the carrier chip and the founder boat). Hold half a second.",
        [
            "HandText write-on"
        ],
        "Hold half a second"
    ],
    "attempt": [
        "new",
        "the board clears: no maps, cards or tags from earlier.",
        "Unseen transfer: attempt one (frequency and malaria data), with every demand and condition on screen and nothing answer-bearing",
        "Two questions now.",
        "The card for \"attempt one (frequency and malaria data)\" writes on and stays up while the countdown ring runs through the answer-free thinking hold",
        "explain",
        "the board clears: no maps, cards or tags from earlier. The card writes on, headed \"Example data: a red blood cell variant\". A table with three columns, \"region\", \"malaria\", \"variant allele frequency\": A none 0.01; B low 0.03; C moderate 0.06; D high 0.11; E high 0.13; F (island) none 0.10. Beside it a coded scatter of the same six points (x \"malaria level\", y \"allele frequency\"), island point drawn like the others (not highlighted). Demands: \"(a) Describe the trend.\" \"(b) Suggest one reason region F doesn't fit.\" Two answer boxes. Nothing answer-bearing: no trend line, no highlighted point. The countdown ring starts after \"Pause here to answer.\" and runs for 10 seconds. The whole card stays on screen during the countdown and after it.",
        [
            "Countdown ring",
            "Enter reveals"
        ],
        "Quiet answer-free thinking hold with a 10 second countdown"
    ],
    "feedback-one": [
        "adjust",
        "the card shrinks to a strip at the top (the table and demands stay readable).",
        "Feedback, item one: The variant gets more common as malaria increases, which suggests carriers have an advantage where there's malaria.",
        "more common as malaria increases / suggests / The island / the numbers match",
        "(1) On \"more common as malaria increases\" a trend line draws through A to E (tag \"rises with malaria\"). (2) On \"suggests\" the line \"(a) frequency rises with malaria: suggests a carrier advantage\" writes on.",
        "explain",
        "the card shrinks to a strip at the top (the table and demands stay readable). (1) On \"more common as malaria increases\" a trend line draws through A to E (tag \"rises with malaria\"). (2) On \"suggests\" the line \"(a) frequency rises with malaria: suggests a carrier advantage\" writes on. (3) On \"The island\" point F rings amber; the line \"(b) F: no malaria, high frequency: e.g. founders carried it by chance\" writes on. (4) On \"the numbers match\" the chip \"the variant protects against malaria\" writes on and takes a grey scribble cross, with the tag \"a pattern; needs direct evidence\". Settle on the model answer for about a second.",
        [
            "chip travel",
            "scribbleEllipse",
            "Mark cross"
        ],
        "Settle for about a second before the next scene"
    ],
    "attempt-two": [
        "new",
        "the board clears.",
        "Unseen transfer: attempt two (conservation data), with every demand and condition on screen and nothing answer-bearing",
        "Second.",
        "The card for \"attempt two (conservation data)\" writes on and stays up while the countdown ring runs through the answer-free thinking hold",
        "explain",
        "the board clears. The card shows two population panels, \"mainland\" and \"island\" (coded map chips, no animal plates needed; small wallaby silhouette icon), each with a DiversityTray summary bar: \"average alleles per marker: 9\" and \"3\" (example data, labelled). Demands: \"(a) What does this suggest about the island population?\" \"(b) Name one way managers could use this.\" Two answer boxes. The countdown ring starts after \"Pause here to answer.\" and runs for 10 seconds. The whole card stays on screen during the countdown and after it.",
        [
            "Countdown ring",
            "Enter reveals"
        ],
        "Quiet answer-free thinking hold with a 10 second countdown"
    ],
    "feedback-two": [
        "adjust",
        "the card shrinks to a strip.",
        "Feedback, item two: The island animals have much less genetic diversity.",
        "much less genetic diversity / past population crash, or a small founding group / move some mainland animals / guarantees they'll survive",
        "(1) On \"much less genetic diversity\" the island bar rings amber (tag \"3 vs 9\"). (2) On \"past population crash, or a small founding group\" the line \"(a) low diversity: a past crash or few founders, and isolation\" writes on, with a small dropping line icon.",
        "explain",
        "the card shrinks to a strip. (1) On \"much less genetic diversity\" the island bar rings amber (tag \"3 vs 9\"). (2) On \"past population crash, or a small founding group\" the line \"(a) low diversity: a past crash or few founders, and isolation\" writes on, with a small dropping line icon. (3) On \"move some mainland animals\" an arrow draws from the mainland chip to the island chip; the line \"(b) move animals in (adds alleles), or pair the least related (keeps them)\" writes on. (4) On \"guarantees they'll survive\" the chip \"more diversity guarantees survival\" takes a grey scribble cross, with the tag \"improves the odds\". Settle on the model answer for about a second.",
        [
            "chip travel",
            "scribbleEllipse",
            "Mark cross"
        ],
        "Settle for about a second before the next scene"
    ],
    "decision-rule": [
        "new",
        "three chips write on, one per cue: \"read the trend\" (the settled dots), \"what else could explain it?\" (the founder boat), \"what can't it tell you?\" (the \"does not remove\" column).",
        "Decision rule and handoff: So, with any large data set, read the trend, ask what else could explain it, and say what the data can't tell you.",
        "So, with any large data set, read the trend, ask what else could explain it, and say what ",
        "A \"Next\" chip slides in at the lower right: \"Next: group risk and one person\" (a dot array with a \"?\" on one dot). Hold half a second before the notes.",
        "explain",
        "three chips write on, one per cue: \"read the trend\" (the settled dots), \"what else could explain it?\" (the founder boat), \"what can't it tell you?\" (the \"does not remove\" column). A \"Next\" chip slides in at the lower right: \"Next: group risk and one person\" (a dot array with a \"?\" on one dot). Hold half a second before the notes.",
        [
            "HandText write-on",
            "Enter slide"
        ],
        "Hold half a second before the notes"
    ],
    "key-notes": [
        "new",
        "Key notes card with the numbered notes and the memory aid",
        "Essentials to copy into books",
        "key notes",
        "Notes appear then stay still for copying",
        "hold",
        "The heading \"Key notes: what to write in your book\", the numbered notes and the memory aid appear and lock",
        [
            "Enter reveals"
        ],
        "Quiet copy hold of about 60 seconds with pause invitation"
    ]
}


BIO_BG03_ROWS = {
    "hook": [
        "adjust",
        "the risk board.",
        "Hook (seventy-two in a hundred): A collaborative study from several countries followed nearly 10,000 women who carry a harmful version of a gene called BRCA1 or BRCA2.",
        "BRCA1 or BRCA2 / about 72 in every 100 / will get breast cancer?",
        "B13's m5x-sample-tube-rack-v1.png sits small at the left; five coded site badges with country chips (\"UK\", \"Netherlands\", \"France\", \"Australia\", \"North America\"; tag \"and other countries\"; tag \"BRCA cohort consortium\") send streams into one bar with a counter to \"nearly 10,000 carriers\". On \"BRCA1 or BRCA2\" a coded chromosome bar appears with one locus marked (tag \"BRCA1: a gene\").",
        "explain",
        "the risk board. B13's m5x-sample-tube-rack-v1.png sits small at the left; five coded site badges with country chips (\"UK\", \"Netherlands\", \"France\", \"Australia\", \"North America\"; tag \"and other countries\"; tag \"BRCA cohort consortium\") send streams into one bar with a counter to \"nearly 10,000 carriers\". On \"BRCA1 or BRCA2\" a coded chromosome bar appears with one locus marked (tag \"BRCA1: a gene\"). On \"about 72 in every 100\" a large coded DotArray of 100 dots draws, and 72 fill one by one in seeded random order (tag \"estimated, by age 80\"; source tag \"Kuchenbaecker et al. 2017\"). On \"will get breast cancer?\" one open dot and one filled dot each get a \"?\". The heading writes on: \"Risk is not destiny\". Hold two seconds.",
        [
            "HandText write-on",
            "DrawPath",
            "Enter reveals"
        ],
        "Hold two seconds"
    ],
    "group-not-person": [
        "new",
        "on \"100 dots\" the array tidies into a 10 x 10 block; on \"About 72\" the filled dots count to 72 (computed) and on \"about 28\" the open dots count to 28.",
        "A group proportion, not one person's future: Here's what that number really says.",
        "100 dots / About 72 / about 28 / measured across thousands / another large group / which dots are which / a probability, not a forecast",
        "On \"measured across thousands\" the array briefly shrinks into one tile of a huge mosaic of similar tiles (tag \"thousands of carriers\"; grey tag \"B13: big data sharpen the trend\"). On \"another large group\" a second 100-dot array draws beside it, filling to 71 (seeded; tag \"a new group: close to the same proportion\").",
        "explain",
        "on \"100 dots\" the array tidies into a 10 x 10 block; on \"About 72\" the filled dots count to 72 (computed) and on \"about 28\" the open dots count to 28. On \"measured across thousands\" the array briefly shrinks into one tile of a huge mosaic of similar tiles (tag \"thousands of carriers\"; grey tag \"B13: big data sharpen the trend\"). On \"another large group\" a second 100-dot array draws beside it, filling to 71 (seeded; tag \"a new group: close to the same proportion\"). The term \"risk pattern\" writes on with the gloss \"how likely, across a group\". On \"which dots are which\" every dot turns grey and a single dot is picked out with an amber ring and a \"?\" (tag \"this person: filled or open? unknown\"). On \"a probability, not a forecast\" the tag \"about 72% chance by 80\" writes beside the ringed dot. Hold one second.",
        [
            "HandText write-on",
            "scribbleEllipse",
            "DrawPath"
        ],
        "Hold one second"
    ],
    "why-not-decided": [
        "adjust",
        "WorkingCopy.",
        "Why the gene doesn't decide on its own: So why can't the gene decide on its own?",
        "repair damaged DNA / one faulty copy / a cell also loses that working copy / chance damage, other genes and other factors / raises the risk",
        "On \"repair damaged DNA\" a short coded DNA strip with a nick is mended by a small repair-protein blob (tag \"BRCA1 protein: DNA repair\"). On \"one faulty copy\" a chromosome pair appears in B5b's plum and teal: the plum copy's BRCA1 locus is marked with a grey cross (tag \"faulty copy, inherited\"), the teal copy's locus glows (tag \"working copy\"); a grey tag under the pair: \"inherited like a dominant trait; in a cell, bot",
        "explain",
        "WorkingCopy. On \"repair damaged DNA\" a short coded DNA strip with a nick is mended by a small repair-protein blob (tag \"BRCA1 protein: DNA repair\"). On \"one faulty copy\" a chromosome pair appears in B5b's plum and teal: the plum copy's BRCA1 locus is marked with a grey cross (tag \"faulty copy, inherited\"), the teal copy's locus glows (tag \"working copy\"); a grey tag under the pair: \"inherited like a dominant trait; in a cell, both copies must fail\". On \"a cell also loses that working copy\" a row of 20 coded cells appears, each carrying the pair; one cell's teal locus flickers out by chance (seeded) and that cell darkens (tag \"both copies lost: this cell can become a cancer\"). On \"chance damage, other genes and other factors\" three small tags write on around the row: \"chance\", \"other genes\", \"other factors: hormones, age\" (grey tag \"B7: environment affects phenotype\"). On \"raises the risk\" a single chip writes on: \"variant: raises risk, doesn't fix the outcome\". Hold one second.",
        [
            "HandText write-on",
            "Enter reveals"
        ],
        "Hold one second"
    ],
    "not-certain": [
        "new",
        "on \"isn't a certain outcome\" a chip \"carrier, so she will get cancer\" writes on and takes a grey scribble cross.",
        "Probability isn't certainty: So a higher probability isn't a certain outcome.",
        "isn't a certain outcome / Most women who get breast cancer / testing negative for a BRCA variant / not genetic destiny",
        "On \"Most women who get breast cancer\" a second coded DotArray of 100 dots draws, labelled \"women with breast cancer\", with about 2 dots amber-edged (tag \"BRCA carriers: about 2 in 100\"; grey source tag \"population studies\"). On \"testing negative for a BRCA variant\" the chip \"no variant, so no cancer\" writes on and takes a grey scribble cross.",
        "explain",
        "on \"isn't a certain outcome\" a chip \"carrier, so she will get cancer\" writes on and takes a grey scribble cross. On \"Most women who get breast cancer\" a second coded DotArray of 100 dots draws, labelled \"women with breast cancer\", with about 2 dots amber-edged (tag \"BRCA carriers: about 2 in 100\"; grey source tag \"population studies\"). On \"testing negative for a BRCA variant\" the chip \"no variant, so no cancer\" writes on and takes a grey scribble cross. On \"not genetic destiny\" the line writes on in hand type: \"genetic risk is not genetic destiny\". Hold one second.",
        [
            "HandText write-on",
            "scribbleEllipse",
            "DrawPath"
        ],
        "Hold one second"
    ],
    "carrier-estimate": [
        "new",
        "the calculation board.",
        "A population prediction that works: Population predictions can be very accurate, though.",
        "can't be counted by looking / one baby in 2,500 / times itself is one in 2,500 / Take the square root / the normal allele's is 0.98 / two ways to get that / two times 0.98 times 0.02",
        "The painted blood-spot card (m5x-newborn-blood-spot-card-v1.png, new) sits small at the upper left (tag \"newborn screening\"). The task writes on at the top: \"How common are carriers?\" On \"can't be counted by looking\" three coded genotype chips appear, \"two normal\", \"carrier\", \"two CF alleles\", the first two drawn identically healthy (tag \"carriers look the same\").",
        "explain",
        "the calculation board. The painted blood-spot card (m5x-newborn-blood-spot-card-v1.png, new) sits small at the upper left (tag \"newborn screening\"). The task writes on at the top: \"How common are carriers?\" On \"can't be counted by looking\" three coded genotype chips appear, \"two normal\", \"carrier\", \"two CF alleles\", the first two drawn identically healthy (tag \"carriers look the same\"). On \"one baby in 2,500\" the givens group writes on: \"affected babies: 1 in 2,500 (two copies)\" and \"CF: recessive\". Then one stage at a time in the stage column, each on its cue, earlier results retained small at the left: (1) on \"times itself is one in 2,500\": \"q squared = 1/2,500 = 0.0004\" with the glosses \"q = CF allele frequency\" and \"from mother AND from father: q x q\" (grey tag \"B11: counting alleles\"); (2) on \"Take the square root\": \"q = 0.02\"; (3) on \"the normal allele's is 0.98\": \"p = 1 minus q = 0.98\"; (4) on \"two ways to get that\" two small arrows show \"CF from mother, normal from father\" and \"normal from mother, CF from father\"; (5) on \"two times 0.98 times 0.02\": \"carriers = 2pq = 2 x 0.98 x 0.02 = 0.039\" and on \"about one person in 25\" \"about 1 in 25\" (all computed). On \"Hardy-Weinberg principle\" the name writes on above the stage column, with the gloss \"allele frequencies predict genotype frequencies, if nothing disturbs them\". On \"rare disease, common carriers\" a PopBar draws: a hair-thin \"affected\" slice, a visible \"carriers\" slice and a long \"neither\" bar (computed widths; tag \"rare disease, common carriers\"). Grey tag at the lower right: \"example figures, similar to cystic fibrosis in some populations\". Hold one second.",
        [
            "HandText write-on",
            "DrawPath",
            "Enter reveals"
        ],
        "Hold one second"
    ],
    "when-predictions-hold": [
        "new",
        "the stage column dims; a checklist writes on, one line per cue: \"large population\", \"random mating\", \"no selection\", \"no migration\", \"no new mutations\" (tag \"Hardy-Weinberg conditions\").",
        "When population predictions hold: But that estimate only holds if the population is large, mates at random, and isn't changed by selection, migration or new mutations.",
        "that's useful too / DNA tests give the allele's frequency / more babies are affected than it predicts / a large population over a short time / In a small population",
        "On \"that's useful too\" the tag \"a gap between prediction and data means something is acting\" writes on. On \"DNA tests give the allele's frequency\" a small coded DNA-test chip writes \"q from DNA tests\" and a bar \"predicted affected (from DNA tests: q x q)\" draws; on \"more babies are affected than it predicts\" an \"observed affected\" bar grows past it, the gap ringed amber (illustrative), and a small two-symbol marriage",
        "explain",
        "the stage column dims; a checklist writes on, one line per cue: \"large population\", \"random mating\", \"no selection\", \"no migration\", \"no new mutations\" (tag \"Hardy-Weinberg conditions\"). On \"that's useful too\" the tag \"a gap between prediction and data means something is acting\" writes on. On \"DNA tests give the allele's frequency\" a small coded DNA-test chip writes \"q from DNA tests\" and a bar \"predicted affected (from DNA tests: q x q)\" draws; on \"more babies are affected than it predicts\" an \"observed affected\" bar grows past it, the gap ringed amber (illustrative), and a small two-symbol marriage line with a double bar (pedigree convention for related parents) appears (tag \"relatives having children: not random mating\"). On \"a large population over a short time\" DriftTraces draws: five allele-frequency traces for a population of 10,000 stay close to their start of 0.1 across 50 generations (seeded; tag \"large: stays close\"). On \"In a small population\" five traces for a population of 20, also starting at 0.1, wander up and down in steps of 1/40, some hitting zero (seeded; tag \"illustrative starting frequency\"; tag \"small: chance pushes it either way\"; grey tag \"genetic drift: Module 6\"). Hold one second.",
        [
            "HandText write-on",
            "scribbleEllipse",
            "DrawPath",
            "Enter reveals"
        ],
        "Hold one second"
    ],
    "shared-with-relatives": [
        "new",
        "the family board.",
        "Risk is shared with relatives: Genetic risk is also shared within families.",
        "each of her children / brothers and sisters / one of her parents / never only about one person / Iceland's Supreme Court",
        "B9's Pedigree builds: I-1 open square, I-2 circle with a small amber dot (tag \"carrier\"); II-1 the woman (circle with amber dot, amber ring), II-2 brother, II-3 sister; III-1 and III-2 her children. On \"each of her children\" tags \"1 in 2\" pin under III-1 and III-2 (grey tag \"B9: one in two per child\").",
        "explain",
        "the family board. B9's Pedigree builds: I-1 open square, I-2 circle with a small amber dot (tag \"carrier\"); II-1 the woman (circle with amber dot, amber ring), II-2 brother, II-3 sister; III-1 and III-2 her children. On \"each of her children\" tags \"1 in 2\" pin under III-1 and III-2 (grey tag \"B9: one in two per child\"). On \"brothers and sisters\" tags \"1 in 2\" pin under II-2 and II-3; on \"one of her parents\" I-2's amber dot pulses (tag \"a parent almost certainly carries it\"; grey tag \"unless it arose new in her\"). On \"never only about one person\" a thin amber outline spreads from II-1 across the whole pedigree. On \"Iceland's Supreme Court\" a coded Iceland outline chip and a document card \"2003: Supreme Court of Iceland\" slide in (no people, no names); a small two-symbol pedigree (father square, daughter circle) draws on the card with an arrow from father to daughter and the tag \"data about him reveal information about her\". Hold one second.",
        [
            "Enter slide",
            "scribbleEllipse",
            "DrawPath"
        ],
        "Hold one second"
    ],
    "strong-wording": [
        "new",
        "the WordingCard writes on in two columns, one phrase per cue.",
        "Strong and weak wording: So in an exam, match your claim to your evidence.",
        "don't write that carriers will get the disease / more likely / precise and cautious",
        "Left \"strong\": \"suggests a trend\", \"indicates increased risk\", \"more likely in this population\". Right \"weak\": \"proves every individual will\", \"guarantees\", \"removes all uncertainty\", each struck through in grey as it lands.",
        "explain",
        "the WordingCard writes on in two columns, one phrase per cue. Left \"strong\": \"suggests a trend\", \"indicates increased risk\", \"more likely in this population\". Right \"weak\": \"proves every individual will\", \"guarantees\", \"removes all uncertainty\", each struck through in grey as it lands. On \"don't write that carriers will get the disease\" the sentence \"Carriers will get the disease.\" writes on and takes a grey scribble cross; on \"more likely\" the replacement \"Carriers are more likely to get it.\" writes on beneath with a tick. On \"precise and cautious\" both column headers pulse. Hold one second.",
        [
            "HandText write-on",
            "scribbleEllipse"
        ],
        "Hold one second"
    ],
    "memory": [
        "new",
        "three handwritten lines write on with small icons: \"population evidence, population conclusions\" (the 100-dot array), \"genetic risk is not genetic destiny\" (the single ringed dot), \"rare disease, common carriers\" (the PopBar).",
        "Memory: Three lines to remember.",
        "Three lines to remember.",
        "Hold half a second.",
        "explain",
        "three handwritten lines write on with small icons: \"population evidence, population conclusions\" (the 100-dot array), \"genetic risk is not genetic destiny\" (the single ringed dot), \"rare disease, common carriers\" (the PopBar). Hold half a second.",
        [
            "HandText write-on",
            "scribbleEllipse"
        ],
        "Hold half a second"
    ],
    "attempt": [
        "new",
        "the board clears: no arrays, pedigrees or wording card.",
        "Unseen transfer: attempt one (an overclaim), with every demand and condition on screen and nothing answer-bearing",
        "Two harder questions.",
        "The card for \"attempt one (an overclaim)\" writes on and stays up while the countdown ring runs through the answer-free thinking hold",
        "explain",
        "the board clears: no arrays, pedigrees or wording card. The card writes on, headed \"Example study: a heart disease variant\". Stimulus: \"50,000 adults followed. Carriers develop heart disease twice as often as non-carriers.\" Below it, a report chip: \"Report on one carrier: 'This person will get heart disease.'\" Demands: \"(a) What does the study support?\" \"(b) Rewrite the claim to match the evidence.\" Two answer boxes. Nothing answer-bearing. The countdown ring starts after \"Pause here to answer.\" and runs for 10 seconds. The whole card stays on screen during the countdown and after it.",
        [
            "Countdown ring",
            "Enter reveals"
        ],
        "Quiet answer-free thinking hold with a 10 second countdown"
    ],
    "feedback-one": [
        "adjust",
        "the card shrinks to a strip at the top.",
        "Feedback, item one: The study supports a group trend: carriers, as a group, have about twice the risk.",
        "a group trend / can't say what happens to one person / A better claim / fifty per cent chance",
        "(1) On \"a group trend\" two small dot arrays draw, \"non-carriers\" and \"carriers\", with the carriers' filled count twice the other's (illustrative, for example 5 and 10 in 100; grey tag \"example numbers\"). The line \"(a) a group trend: carriers have about twice the risk\" writes on.",
        "explain",
        "the card shrinks to a strip at the top. (1) On \"a group trend\" two small dot arrays draw, \"non-carriers\" and \"carriers\", with the carriers' filled count twice the other's (illustrative, for example 5 and 10 in 100; grey tag \"example numbers\"). The line \"(a) a group trend: carriers have about twice the risk\" writes on. (2) On \"can't say what happens to one person\" one carrier dot rings with a \"?\". (3) On \"A better claim\" the line \"(b) 'This person has a higher risk of heart disease than a non-carrier.'\" writes on. (4) On \"fifty per cent chance\" the chip \"twice the risk = 50% chance\" writes on and takes a grey scribble cross, with the tag \"5 in 100 doubled is 10 in 100\". Settle on the model answer for about a second.",
        [
            "chip travel",
            "scribbleEllipse",
            "Mark cross"
        ],
        "Settle for about a second before the next scene"
    ],
    "attempt-two": [
        "new",
        "the board clears.",
        "Unseen transfer: attempt two (a carrier estimate), with every demand and condition on screen and nothing answer-bearing",
        "Second.",
        "The card for \"attempt two (a carrier estimate)\" writes on and stays up while the countdown ring runs through the answer-free thinking hold",
        "explain",
        "the board clears. Task line: \"Estimate the carrier frequency.\" Givens group: \"affected babies: 1 in 10,000 (two copies)\", \"recessive\", \"assume Hardy-Weinberg\". Demands: \"(a) Estimate the carrier frequency.\" \"(b) Why is it less reliable in a small, isolated village?\" Two answer boxes. No equation lines shown (nothing answer-bearing). The countdown ring starts after \"Pause here to answer.\" and runs for 10 seconds. The whole card stays on screen during the countdown and after it.",
        [
            "Countdown ring",
            "Enter reveals"
        ],
        "Quiet answer-free thinking hold with a 10 second countdown"
    ],
    "feedback-two": [
        "adjust",
        "the card shrinks to a strip.",
        "Feedback, item two: The allele's frequency, squared, is one in 10,000, so the allele's frequency is 0.01, and the normal allele's is 0.99.",
        "small village / one in 10,000",
        "(1) One stage at a time on its cue (computed): \"q squared = 1/10,000 = 0.0001\", \"q = 0.01\", \"p = 0.99\", \"carriers = 2pq = 2 x 0.99 x 0.01 = 0.0198, about 1 in 50\". (2) On \"small village\" the line \"(b) small population: chance shifts frequencies; relatives marrying: not random mating\" writes on.",
        "explain",
        "the card shrinks to a strip. (1) One stage at a time on its cue (computed): \"q squared = 1/10,000 = 0.0001\", \"q = 0.01\", \"p = 0.99\", \"carriers = 2pq = 2 x 0.99 x 0.01 = 0.0198, about 1 in 50\". (2) On \"small village\" the line \"(b) small population: chance shifts frequencies; relatives marrying: not random mating\" writes on. (3) On \"one in 10,000\" the chip \"carriers = 1 in 10,000\" writes on and takes a grey scribble cross, with the tag \"that's q squared: affected\". Settle on the model answer for about a second.",
        [
            "chip travel",
            "scribbleEllipse",
            "Mark cross"
        ],
        "Settle for about a second before the next scene"
    ],
    "decision-rule": [
        "new",
        "three chips write on, one per cue, under a header \"predicts well\": \"risk across a group\" (dot array), \"carrier frequencies\" (the PopBar), \"how alleles are spread\" (a small banded map chip from B13).",
        "Decision rule and handoff: So, population genetics predicts group patterns well: risk across a group, carrier frequencies, how alleles are spread, and how related populations are.",
        "Module 5",
        "A fourth chip, \"how related populations are\" (a small similarity tree from B13), then a fifth chip with a grey border: \"can't fix one person's future\" (the ringed dot). On \"Module 5\" a thin chain draws along the bottom: \"reproduction, cell division, gene expression, inheritance, populations\" (grey, small).",
        "explain",
        "three chips write on, one per cue, under a header \"predicts well\": \"risk across a group\" (dot array), \"carrier frequencies\" (the PopBar), \"how alleles are spread\" (a small banded map chip from B13). A fourth chip, \"how related populations are\" (a small similarity tree from B13), then a fifth chip with a grey border: \"can't fix one person's future\" (the ringed dot). On \"Module 5\" a thin chain draws along the bottom: \"reproduction, cell division, gene expression, inheritance, populations\" (grey, small). A \"Next\" chip slides in at the lower right: \"Next: Module 6, genetic change\". Hold half a second before the notes.",
        [
            "HandText write-on",
            "Enter slide",
            "scribbleEllipse",
            "DrawPath"
        ],
        "Hold half a second before the notes"
    ],
    "key-notes": [
        "new",
        "Key notes card with the numbered notes and the memory aid",
        "Essentials to copy into books",
        "key notes",
        "Notes appear then stay still for copying",
        "hold",
        "The heading \"Key notes: what to write in your book\", the numbered notes and the memory aid appear and lock",
        [
            "Enter reveals"
        ],
        "Quiet copy hold of about 60 seconds with pause invitation"
    ]
}


BIO_G01B_ROWS = {
    "hook": [
        "new",
        "heading \"Trace it\" writes on.",
        "Hook: Exam questions on DNA and meiosis rarely ask you to recite the steps.",
        "which strand / which end / what you're counting",
        "Four small stimulus thumbnails fan out on the right on \"something new\": a strand of tiles with \"3'\" on the left (on \"written from its 3' end\"), a pair of tiles with one red-ringed mismatch (on \"a copying error\"), the koala plate in a cell outline (on \"a cell you've never seen\"), a chromosome pair with a crossover mark. On the three checks, the trace checklist builds on the left, one row per spoken phrase: \"which stra",
        "explain",
        "heading \"Trace it\" writes on. Four small stimulus thumbnails fan out on the right on \"something new\": a strand of tiles with \"3'\" on the left (on \"written from its 3' end\"), a pair of tiles with one red-ringed mismatch (on \"a copying error\"), the koala plate in a cell outline (on \"a cell you've never seen\"), a chromosome pair with a crossover mark. On the three checks, the trace checklist builds on the left, one row per spoken phrase: \"which strand?\" (two strand icons), \"which end?\" (a \"5'\" tag), \"what am I counting?\" (a centromere dot beside a chromatid pair). On \"four HSC-style questions\" the thumbnails become four question cards, each with the tag \"HSC-style question, written for HSCScience\". Hold about 1 second; the checklist shrinks to a strip at the far left.",
        [
            "HandText write-on",
            "scribbleEllipse"
        ],
        "Hold about 1 second; the checklist shrinks to a strip at the far left"
    ],
    "q1-question": [
        "new",
        "fresh board.",
        "Unseen transfer: q1-question (question 1: a copying error), with every demand and condition on screen and nothing answer-bearing",
        "G / not repaired / how many",
        "The card for \"q1-question (question 1: a copying error)\" writes on and stays up while the countdown ring runs through the answer-free thinking hold",
        "explain",
        "fresh board. Type badge \"Replication\". b6a-bacterium-v1.png small at top left, tagged \"a bacterium\". Task line: \"How many of the four molecules have a changed pair? Which pair?\" Stimulus: a short B4 ladder of five base pairs (original strands blue) with the middle pair \"T = A\" ringed amber on \"T paired with an A\". Givens card, one line per cue: \"round 1: G added opposite the T (an error)\", \"the error is not repaired\", \"round 2: both molecules copied again, no more errors\". Under the card, an empty row of four molecule outlines labelled \"after round 2\". Nothing answer-bearing: no new strands, no mismatch drawn. Countdown ring 10 seconds with \"Pause here to answer.\" on screen; the checklist strip dims.",
        [
            "Countdown ring",
            "Enter reveals"
        ],
        "Quiet answer-free thinking hold with a 10 second countdown"
    ],
    "q1-first-copy": [
        "new",
        "the ladder unzips (B4 motion).",
        "Q1-first-copy (round one): Start with the first copy.",
        "each one is a template / normal / mismatch",
        "On \"each one is a template\" both blue strands glow and the tag \"each strand: a template\" writes on (grey tag \"B4\"). Left daughter: green tiles dock opposite the A strand; at the ringed spot a green T snaps to the A with a tick; tag \"normal\".",
        "explain",
        "the ladder unzips (B4 motion). On \"each one is a template\" both blue strands glow and the tag \"each strand: a template\" writes on (grey tag \"B4\"). Left daughter: green tiles dock opposite the A strand; at the ringed spot a green T snaps to the A with a tick; tag \"normal\". Right daughter: green tiles dock opposite the T strand; at the ringed spot a green G slides in and sits crooked against the T, with a red outline; on \"mismatch\" the tag \"T and G: a mismatch\" writes on. Checklist: \"which strand?\" ticks.",
        [
            "HandText write-on",
            "Enter slide",
            "scribbleEllipse"
        ],
        "Settle for about a second before the next scene"
    ],
    "q1-second-copy": [
        "new",
        "both daughters unzip together.",
        "Q1-second-copy (round two): Now copy again.",
        "two normal / C / one",
        "Left: two normal molecules drop into the first two outlines with ticks. Right: the blue T strand picks up a new green A (tick, \"normal\"); the green G strand picks up a new C, and the pair \"G = C\" locks in with an amber ring.",
        "explain",
        "both daughters unzip together. Left: two normal molecules drop into the first two outlines with ticks. Right: the blue T strand picks up a new green A (tick, \"normal\"); the green G strand picks up a new C, and the pair \"G = C\" locks in with an amber ring. On \"one\" the four outlines fill: \"normal\", \"normal\", \"normal\", \"G-C: changed\", and the answer line writes on: \"1 of 4 molecules: G-C in place of T-A\". A thin family-tree line links each final molecule back to the strand it was copied from.",
        [
            "HandText write-on",
            "scribbleEllipse"
        ],
        "Settle for about a second before the next scene"
    ],
    "q1-mistake": [
        "new",
        "a ghost row \"normal, normal, changed, changed\" appears beside the answer; on \"two\" it takes a red scribble cross with the caption \"the mismatch does not copy into both\".",
        "Q1-mistake (the classic mistake): The classic mistake is saying two, as if the mismatch copies itself into both daughters.",
        "two / the mismatch does not copy into both / the T strand still holds the right base",
        "On \"the T strand still holds the right base\" the T strand's tile pulses blue with the tag \"original base kept\". Hold about 1.5 seconds.",
        "explain",
        "a ghost row \"normal, normal, changed, changed\" appears beside the answer; on \"two\" it takes a red scribble cross with the caption \"the mismatch does not copy into both\". On \"the T strand still holds the right base\" the T strand's tile pulses blue with the tag \"original base kept\". Hold about 1.5 seconds.",
        [
            "scribbleEllipse",
            "Enter reveals"
        ],
        "Hold about 1"
    ],
    "q2-question": [
        "new",
        "board clears.",
        "Unseen transfer: q2-question (question 2: a strand written backwards), with every demand and condition on screen and nothing answer-bearing",
        "coding strand / 3' end / how many",
        "The card for \"q2-question (question 2: a strand written backwards)\" writes on and stays up while the countdown ring runs through the answer-free thinking hold",
        "explain",
        "board clears. Type badge \"Transcription and translation\". The painted firefly plate (new, m5x-firefly-glow-v1.png) small at the top left, its lantern glowing, tagged \"firefly\". Task line: \"Write the mRNA (with ends). Give the amino acid chain and how many.\" Stimulus: one strand of 15 B4 tiles in plum, no codon gaps: \"3' C G G A A T A A A G G T G T A 5'\", labelled \"coding strand\"; on \"coding strand\" the label rings amber; on \"3' end\" the left \"3'\" tag rings. Grey chip: \"illustrative sequence, not the real gene\". The full B6c CodonChart sits at the right, unlit (cells from codonToAA; no pointer). Empty mRNA slot row under the strand with two blank end boxes. Nothing answer-bearing. Countdown 10 seconds; checklist dims.",
        [
            "Countdown ring",
            "Enter reveals"
        ],
        "Quiet answer-free thinking hold with a 10 second countdown"
    ],
    "q2-direction": [
        "adjust",
        "on \"Which strand?\" the checklist row lights and a chip \"coding strand: copy it, T becomes U\" writes on (recalls B6b's trap line, grey tag \"B6b\").",
        "Q2-direction (which strand, which end): Two checks first.",
        "Which strand? / Which end? / right / A U G",
        "On \"Which end?\" the \"5'\" tag on the right pulses amber; on \"right\" an amber process arrow draws under the strand pointing right to left, labelled \"read from 5'\". The tiles then slide and re-order right to left into a terracotta mRNA row beneath the strand (letters stay upright; the \"5'\" tag stays attached to the A end), copied base for base with T turned to amber U, one codon per spoken group; the chip \"same letters,",
        "explain",
        "on \"Which strand?\" the checklist row lights and a chip \"coding strand: copy it, T becomes U\" writes on (recalls B6b's trap line, grey tag \"B6b\"). On \"Which end?\" the \"5'\" tag on the right pulses amber; on \"right\" an amber process arrow draws under the strand pointing right to left, labelled \"read from 5'\". The tiles then slide and re-order right to left into a terracotta mRNA row beneath the strand (letters stay upright; the \"5'\" tag stays attached to the A end), copied base for base with T turned to amber U, one codon per spoken group; the chip \"same letters, same direction as the coding strand (B6b)\" writes beside it: \"5' AUG UGG AAA UAA GGC 3'\". Codon gaps appear as each group lands. Checklist: \"which end?\" ticks.",
        [
            "HandText write-on",
            "DrawPath",
            "Enter reveals"
        ],
        "Settle for about a second before the next scene"
    ],
    "q2-chain": [
        "new",
        "the CodonChart pointer runs each lookup (first base row, second base column, third base line) as each codon is spoken; a labelled bead pops out and joins the AminoChain: \"Met\" (with the chart's amber start flag), \"Trp\", \"Lys\".",
        "Q2-chain (the chart, and the stop codon): Now the chart.",
        "methionine / stop codon / three",
        "On \"stop codon\" the UAA cell lights grey and a grey bracket \"stop: adds nothing\" closes the chain; the GGC codon greys out with the tag \"after the stop: not read\". On \"three\" the answer line writes on: \"mRNA 5' AUG UGG AAA UAA GGC 3'; chain Met-Trp-Lys: 3 amino acids\".",
        "explain",
        "the CodonChart pointer runs each lookup (first base row, second base column, third base line) as each codon is spoken; a labelled bead pops out and joins the AminoChain: \"Met\" (with the chart's amber start flag), \"Trp\", \"Lys\". On \"stop codon\" the UAA cell lights grey and a grey bracket \"stop: adds nothing\" closes the chain; the GGC codon greys out with the tag \"after the stop: not read\". On \"three\" the answer line writes on: \"mRNA 5' AUG UGG AAA UAA GGC 3'; chain Met-Trp-Lys: 3 amino acids\". All amino acids on screen are computed by translate, never typed.",
        [
            "HandText write-on"
        ],
        "Settle for about a second before the next scene"
    ],
    "q2-mistake": [
        "new",
        "a ghost mRNA \"C G G A A U A A A G G U G U A\" writes left to right under the original strand with the ghost chain \"Arg, Asn, Lys, Gly, Val\" (computed); on \"left\" it takes a red scribble cross with the caption \"read from the 3' end: wrong\".",
        "Q2-mistake (the classic mistake): The classic mistake is reading from the left, because that's how we read English.",
        "left / read from the 3' end: wrong",
        "A second crossed chip, unspoken, lands only after the spoken cross has settled: \"paired it like a template: Ala, Leu, Phe, Pro, His\" with the tag \"it's the coding strand: copy, don't pair\". Hold about 1.5 seconds.",
        "explain",
        "a ghost mRNA \"C G G A A U A A A G G U G U A\" writes left to right under the original strand with the ghost chain \"Arg, Asn, Lys, Gly, Val\" (computed); on \"left\" it takes a red scribble cross with the caption \"read from the 3' end: wrong\". A second crossed chip, unspoken, lands only after the spoken cross has settled: \"paired it like a template: Ala, Leu, Phe, Pro, His\" with the tag \"it's the coding strand: copy, don't pair\". Hold about 1.5 seconds.",
        [
            "scribbleEllipse"
        ],
        "Hold about 1"
    ],
    "q3-question": [
        "new",
        "board clears.",
        "Unseen transfer: q3-question (question 3: counting through meiosis), with every demand and condition on screen and nothing answer-bearing",
        "16 chromosomes / 7.0 picograms / prophase one / each cell after meiosis one / each sperm cell",
        "The card for \"q3-question (question 3: counting through meiosis)\" writes on and stays up while the countdown ring runs through the answer-free thinking hold",
        "explain",
        "board clears. Type badge \"Meiosis: counts\". The painted koala plate (new, m5x-koala-v1.png) small at the top left, tagged \"koala\". Task line: \"Chromosomes and DNA mass at three stages.\" Givens card: \"body cells: 16 chromosomes\", \"before copying: 16 chromosomes, 7.0 pg DNA\", grey gloss \"pg = picogram, a millionth of a millionth of a gram\", \"assume no mistakes in division\". On screen, a coded empty count table with three rows (\"prophase I\", \"each cell after meiosis I\", \"each sperm cell\") and two columns (\"chromosomes\", \"DNA (pg)\"). Beside it b5x-cell-dividing-nospindle-v1.png, empty. Nothing answer-bearing. Countdown 10 seconds; checklist dims.",
        [
            "Countdown ring",
            "Enter reveals"
        ],
        "Quiet answer-free thinking hold with a 10 second countdown"
    ],
    "q3-s-phase": [
        "new",
        "two rule chips write on, each with an icon: \"chromosomes: count centromeres\" (a single dot) and \"DNA: count chromatids\" (two arms).",
        "Q3-s-phase (two rules, then the copy): Use two rules.",
        "chromosomes / DNA / one centromere / 14 picograms",
        "The cell shows 16 single chromosome plates (8 pink, 8 teal, small). On \"one centromere\" each plate is replaced by its duplicated plate (b5x-chromosome-duplicated-pink-v1.png, -teal-) and a centromere dot rings on one.",
        "explain",
        "two rule chips write on, each with an icon: \"chromosomes: count centromeres\" (a single dot) and \"DNA: count chromatids\" (two arms). The cell shows 16 single chromosome plates (8 pink, 8 teal, small). On \"one centromere\" each plate is replaced by its duplicated plate (b5x-chromosome-duplicated-pink-v1.png, -teal-) and a centromere dot rings on one. On \"14 picograms\" the first table row fills \"16\" and \"about 14.0\" with a pen \"x 2\" beside the DNA cell. Checklist: \"what am I counting?\" ticks.",
        [
            "HandText write-on",
            "scribbleEllipse",
            "Enter reveals"
        ],
        "Settle for about a second before the next scene"
    ],
    "q3-divisions": [
        "new",
        "the duplicated plates pair up across the middle (B5b metaphase I look, no stage drawing beyond the plates); on \"homologous pairs\" the partners slide to two daughter outlines (8 X-shaped plates each); row 2 fills \"8\" and \"about 7.0\" with a tag \"each still two chromatids\".",
        "Q3-divisions (meiosis one, then meiosis two): Meiosis one separates the homologous pairs, so each cell gets 8 chromosomes.",
        "homologous pairs / 7.0 picograms / sister chromatids / 3.5 picograms",
        "On \"sister chromatids\" each daughter splits again into two, four cell outlines, each with 8 single plates; row 3 fills \"8\" and \"about 3.5\" (grey tag: \"about: X- and Y-carrying cells differ slightly\"). The bank line writes small under the table: \"Meiosis I splits the pairs.",
        "explain",
        "the duplicated plates pair up across the middle (B5b metaphase I look, no stage drawing beyond the plates); on \"homologous pairs\" the partners slide to two daughter outlines (8 X-shaped plates each); row 2 fills \"8\" and \"about 7.0\" with a tag \"each still two chromatids\". On \"sister chromatids\" each daughter splits again into two, four cell outlines, each with 8 single plates; row 3 fills \"8\" and \"about 3.5\" (grey tag: \"about: X- and Y-carrying cells differ slightly\"). The bank line writes small under the table: \"Meiosis I splits the pairs. Meiosis II splits the copies.\" A thin check row, unspoken: \"4 sperm x 3.5 = 14.0 pg: all the copied DNA accounted for\".",
        [
            "Enter reveals"
        ],
        "Settle for about a second before the next scene"
    ],
    "q3-mistake": [
        "new",
        "a ghost value \"3.5\" sits in row 2's DNA cell; on \"3.5 picograms\" it takes a red scribble cross with the caption \"still two chromatids each\".",
        "Q3-mistake (the classic mistake): The classic mistake is 3.5 picograms after meiosis one.",
        "3.5 picograms / still two chromatids each",
        "A second crossed chip, unspoken, lands only after the spoken cross has settled: \"prophase I: 32 chromosomes (counted chromatids)\". Memory chip: \"Centromeres count the chromosomes; chromatids count the DNA.\" Hold about 1.5 seconds.",
        "explain",
        "a ghost value \"3.5\" sits in row 2's DNA cell; on \"3.5 picograms\" it takes a red scribble cross with the caption \"still two chromatids each\". A second crossed chip, unspoken, lands only after the spoken cross has settled: \"prophase I: 32 chromosomes (counted chromatids)\". Memory chip: \"Centromeres count the chromosomes; chromatids count the DNA.\" Hold about 1.5 seconds.",
        [
            "scribbleEllipse"
        ],
        "Hold about 1"
    ],
    "q4-question": [
        "new",
        "board clears.",
        "Unseen transfer: q4-question (question 4: one crossover, four cells), with every demand and condition on screen and nothing answer-bearing",
        "same chromosome / single crossover / four pollen cells / less common than half",
        "The card for \"q4-question (question 4: one crossover, four cells)\" writes on and stays up while the countdown ring runs through the answer-free thinking hold",
        "explain",
        "board clears. Type badge \"Meiosis: alleles\". The painted sweet pea plates (new, m5x-sweetpea-purple-v1.png and m5x-sweetpea-red-v1.png) small at the top left, tagged \"purple flower\" and \"red flower\". Task line: \"(a) Alleles in each of the four pollen cells. (b) Using the givens, why are new combinations much less than half?\" Stimulus: one homologous pair as single chromosome plates (pink and teal) with allele beads: pink \"P\" (purple) above \"L\" (long), teal \"p\" (red) above \"l\" (round); a key strip \"P purple, p red; L long, l round\". Givens: \"genes on the same chromosome\", \"this cell: one crossover between the two genes\", \"most other anther cells: no crossover between these two genes\". Four empty pollen-cell outlines. Nothing answer-bearing: no chromatids drawn, no swap mark. Countdown 10 seconds; checklist dims.",
        [
            "Countdown ring",
            "Enter reveals"
        ],
        "Quiet answer-free thinking hold with a 10 second countdown"
    ],
    "q4-chromatids": [
        "new",
        "each single plate becomes its duplicated plate; the four chromatids are drawn as a coded chromatid strip (four parallel rods, two pink, two teal, each carrying its bead pair).",
        "Q4-chromatids (copy, then cross over): Start with the chromatids.",
        "chromatids / two / purple round / red long",
        "On \"two\" an inner pink and an inner teal rod light; a swap mark draws between the two gene levels and the lower segments trade places (pink rod now ends teal with \"l\"; teal rod now ends pink with \"L\"). The outer two rods stay unchanged with a grey tag \"not touched\".",
        "explain",
        "each single plate becomes its duplicated plate; the four chromatids are drawn as a coded chromatid strip (four parallel rods, two pink, two teal, each carrying its bead pair). On \"two\" an inner pink and an inner teal rod light; a swap mark draws between the two gene levels and the lower segments trade places (pink rod now ends teal with \"l\"; teal rod now ends pink with \"L\"). The outer two rods stay unchanged with a grey tag \"not touched\". Bead labels update on their spoken words. Checklist: \"what am I counting?\" ticks (chromatids).",
        [
            "DrawPath"
        ],
        "Settle for about a second before the next scene"
    ],
    "q4-four-cells": [
        "new",
        "the pink pair and the teal pair move apart (meiosis I) into two outlines, then each splits (meiosis II) into the four pollen-cell outlines, each carrying one rod; labels write on in the cells: \"P L\", \"P l\", \"p L\", \"p l\".",
        "Q4-four-cells (two divisions, four cells): Meiosis one sends the two partners to different cells, and meiosis two splits each pair of sister chromatids.",
        "one chromatid / Two / new",
        "On \"Two\" the parental pair gets a plain tag \"original\"; on \"new\" the recombinant pair gets amber rings and the tag \"new combination\". Answer line (a): \"PL, Pl, pL, pl: 2 original, 2 new\".",
        "explain",
        "the pink pair and the teal pair move apart (meiosis I) into two outlines, then each splits (meiosis II) into the four pollen-cell outlines, each carrying one rod; labels write on in the cells: \"P L\", \"P l\", \"p L\", \"p l\". On \"Two\" the parental pair gets a plain tag \"original\"; on \"new\" the recombinant pair gets amber rings and the tag \"new combination\". Answer line (a): \"PL, Pl, pL, pl: 2 original, 2 new\".",
        [
            "HandText write-on",
            "scribbleEllipse"
        ],
        "Settle for about a second before the next scene"
    ],
    "q4-limit": [
        "new",
        "the four cells shrink to the left as \"this cell: 2 of 4 new\".",
        "Q4-limit (why less than half, and the classic mistake): So why are new combinations much less than half?",
        "only two / between these two genes / two chromatids",
        "On \"between these two genes\" the card's given \"most other anther cells: no crossover between these two genes\" rings amber, and a second small cell writes on beside it with the crossover mark drawn outside the gene interval (grey tag \"crossover elsewhere\"), giving four \"original\" cells; a third cell with no crossover gives four \"original\" cells. A row of small pollen dots fills below, mostly plain with a few amber (il",
        "explain",
        "the four cells shrink to the left as \"this cell: 2 of 4 new\". On \"between these two genes\" the card's given \"most other anther cells: no crossover between these two genes\" rings amber, and a second small cell writes on beside it with the crossover mark drawn outside the gene interval (grey tag \"crossover elsewhere\"), giving four \"original\" cells; a third cell with no crossover gives four \"original\" cells. A row of small pollen dots fills below, mostly plain with a few amber (illustrative, no number), with the line (b): \"a cell with one crossover between the genes gives half new; most cells have none there, so far fewer than half overall\". On \"all four pollen cells are new\" a crossed chip \"all four cells new\" takes a red scribble cross with the caption \"only two chromatids swap\". Grey tag (author-approved model limit): \"real cells can have no crossover, or more than one, along a chromosome\". Hold about 1.5 seconds.",
        [
            "HandText write-on",
            "scribbleEllipse",
            "Enter reveals"
        ],
        "Hold about 1"
    ],
    "decision-board": [
        "new",
        "the checklist returns full size as a two-column board, \"What you see\" and \"What you do first\", each row lighting on its cue word with the question number badge: \"a sequence → which strand?",
        "Decision-board: So here's how to start any trace.",
        "sequence / copying error / count / crossover / Next",
        "then find 5' (Q2)\"; \"a copying error → each strand is its own template (Q1)\"; \"a count → centromeres = chromosomes, chromatids = DNA (Q3)\"; \"a crossover → two chromatids change, not four (Q4)\". On \"Next\" a chip \"Next: from a chain to a trait\" with a small folded-blob doodle slides in at the lower right.",
        "explain",
        "the checklist returns full size as a two-column board, \"What you see\" and \"What you do first\", each row lighting on its cue word with the question number badge: \"a sequence → which strand? then find 5' (Q2)\"; \"a copying error → each strand is its own template (Q1)\"; \"a count → centromeres = chromosomes, chromatids = DNA (Q3)\"; \"a crossover → two chromatids change, not four (Q4)\". On \"Next\" a chip \"Next: from a chain to a trait\" with a small folded-blob doodle slides in at the lower right. Hold about 2 seconds.",
        [
            "Enter slide"
        ],
        "Hold about 2 seconds"
    ],
    "key-notes": [
        "new",
        "Key notes card with the numbered notes and the memory aid",
        "Essentials to copy into books",
        "key notes",
        "Notes appear then stay still for copying",
        "hold",
        "The heading \"Key notes: what to write in your book\", the numbered notes and the memory aid appear and lock",
        [
            "Enter reveals"
        ],
        "Quiet copy hold of about 60 seconds with pause invitation"
    ]
}


BIO_G02B_ROWS = {
    "hook": [
        "new",
        "heading \"Choose the model, then the chance\" writes on.",
        "Hook: Inheritance questions in the HSC rarely use peas.",
        "choose the model / sure of / combine the chances",
        "Four thumbnails fan out on the right: the blue chicken plate (on \"an animal you haven't met\"), the tortoiseshell cat plate, a small pedigree with a \"?\" (on \"a family\"), a pedigree with a question mark over its legend (on \"can't tell you\"). On the three moves, the first-moves strip builds on the left, one row per cue: \"1 choose the model\", \"2 genotypes you're sure of\", \"3 combine the chances\".",
        "explain",
        "heading \"Choose the model, then the chance\" writes on. Four thumbnails fan out on the right: the blue chicken plate (on \"an animal you haven't met\"), the tortoiseshell cat plate, a small pedigree with a \"?\" (on \"a family\"), a pedigree with a question mark over its legend (on \"can't tell you\"). On the three moves, the first-moves strip builds on the left, one row per cue: \"1 choose the model\", \"2 genotypes you're sure of\", \"3 combine the chances\". On \"four HSC-style questions\" the thumbnails become four question cards with the tag \"HSC-style question, written for HSCScience\". Hold about 1 second; the strip shrinks to the far left.",
        [
            "HandText write-on"
        ],
        "Hold about 1 second; the strip shrinks to the far left"
    ],
    "q1-question": [
        "new",
        "fresh board.",
        "Unseen transfer: q1-question (question 1: Andalusian chickens), with every demand and condition on screen and nothing answer-bearing",
        "all blue / ratio / first two chicks / only blue",
        "The card for \"q1-question (question 1: Andalusian chickens)\" writes on and stays up while the countdown ring runs through the answer-free thinking hold",
        "explain",
        "fresh board. Type badge hidden during the attempt (it names the model) and shown from 2b. Stimulus: the painted plates m5x-chicken-black-v1.png and m5x-chicken-splash-v1.png joined by \"x\", an arrow down to three small m5x-chicken-blue-v1.png copies tagged \"all blue\" on \"all blue\". Below, \"blue x blue\" with a \"?\" row. Givens card: \"black x splashed white gives all blue\", \"farmer: blue x blue\". Demands: \"(a) Why are some chicks black and some white? Give the ratio.\" \"(b) Probability that the first two chicks are both blue?\" \"(c) Which cross gives only blue chicks?\" Three answer boxes and an empty 2 x 2 grid outline (no letters). Nothing answer-bearing. Countdown 10 seconds; strip dims.",
        [
            "Countdown ring",
            "Enter reveals"
        ],
        "Quiet answer-free thinking hold with a 10 second countdown"
    ],
    "q1-model": [
        "adjust",
        "type badge \"Incomplete dominance\" writes on.",
        "Q1-model (choose the model, fill the square): First, choose the model.",
        "choose the model / incomplete dominance / 1 black, 2 blue, 1 white",
        "On \"a third colour, in between\" the three plates line up black, blue, splashed white with the bank line \"Incomplete is in-between\" (grey tag \"B10\"). Allele chips \"C^B\" and \"C^W\" (on screen only) pin under the plates: \"C^B C^B\", \"C^B C^W\", \"C^W C^W\".",
        "explain",
        "type badge \"Incomplete dominance\" writes on. On \"a third colour, in between\" the three plates line up black, blue, splashed white with the bank line \"Incomplete is in-between\" (grey tag \"B10\"). Allele chips \"C^B\" and \"C^W\" (on screen only) pin under the plates: \"C^B C^B\", \"C^B C^W\", \"C^W C^W\". On \"Two blue parents\" GameteDiscs \"C^B\" and \"C^W\" slide along the top and down the side; the Punnett fills box by box (computed by cross with a a lesson-local in-between (incomplete dominance) phenotype map, inBetween('black', 'blue', 'splashed white'), written like B10's CO but named so no code path or label can show \"co-dominance\" on this question), each box gaining a tiny chicken plate. On \"1 black, 2 blue, 1 white\" the ratio strip writes \"1 black : 2 blue : 1 splashed white\" (computed). Answer line (a): \"blue = heterozygous; alleles separate: 1 : 2 : 1\". Strip: \"1 choose the model\" ticks.",
        [
            "HandText write-on",
            "Enter reveals"
        ],
        "Settle for about a second before the next scene"
    ],
    "q1-chance": [
        "new",
        "the two blue boxes ring amber with \"2/4 = 1/2\" (computed).",
        "Q1-chance (two chicks, then only blue): Each chick has a one in two chance of being blue, and each chick is a separate chance.",
        "one in two / separate chance / one in four / black with white",
        "On \"separate chance\" a coded two-step probability tree draws: first chick \"blue 1/2\" or \"not blue 1/2\", then from \"blue\" a second branch \"blue 1/2\"; on \"one in four\" the path blue-blue lights with \"1/2 x 1/2 = 1/4\" and answer line (b) writes on. The chip \"Separate offspring, known parents: multiply.\" writes small beside it.",
        "explain",
        "the two blue boxes ring amber with \"2/4 = 1/2\" (computed). On \"separate chance\" a coded two-step probability tree draws: first chick \"blue 1/2\" or \"not blue 1/2\", then from \"blue\" a second branch \"blue 1/2\"; on \"one in four\" the path blue-blue lights with \"1/2 x 1/2 = 1/4\" and answer line (b) writes on. The chip \"Separate offspring, known parents: multiply.\" writes small beside it. On \"black with white\" a second mini grid \"C^B C^B x C^W C^W\" fills four \"C^B C^W\" boxes (computed) with four blue chick plates; answer line (c): \"black x splashed white: all blue\". Strip: \"3 combine the chances\" ticks.",
        [
            "HandText write-on",
            "scribbleEllipse",
            "DrawPath",
            "Enter reveals"
        ],
        "Settle for about a second before the next scene"
    ],
    "q1-mistake": [
        "new",
        "the chip \"blue x blue gives only blue\" writes on; on \"blue with blue\" it takes a red scribble cross with the caption \"heterozygotes don't breed true\".",
        "Q1-mistake (the classic mistake): The classic mistake is crossing blue with blue to get blue chicks.",
        "blue with blue / heterozygotes don't breed true",
        "A second crossed chip, unspoken: \"1/2 + 1/2 = 1 (added instead of multiplied)\". Hold about 1.5 seconds.",
        "explain",
        "the chip \"blue x blue gives only blue\" writes on; on \"blue with blue\" it takes a red scribble cross with the caption \"heterozygotes don't breed true\". A second crossed chip, unspoken: \"1/2 + 1/2 = 1 (added instead of multiplied)\". Hold about 1.5 seconds.",
        [
            "HandText write-on",
            "scribbleEllipse"
        ],
        "Hold about 1"
    ],
    "q2-question": [
        "new",
        "board clears.",
        "Unseen transfer: q2-question (question 2: tortoiseshell cats), with every demand and condition on screen and nothing answer-bearing",
        "X chromosome / both colours / female / tortoiseshell female / sons",
        "The card for \"q2-question (question 2: tortoiseshell cats)\" writes on and stays up while the countdown ring runs through the answer-free thinking hold",
        "explain",
        "board clears. Type badge hidden during the attempt. Stimulus: the painted plates m5x-cat-tortoiseshell-v1.png (tagged \"tortoiseshell\") and m5x-cat-orange-v1.png (tagged \"orange\"), joined by \"x\" with the pedigree symbols \"female\" (circle) and \"male\" (square) under them; m5x-cat-black-v1.png small in a key strip: \"on the X: orange allele, black allele; one of each: tortoiseshell\". Demands: \"(a) Why are tortoiseshell cats almost always female?\" \"(b) Probability that a kitten is a tortoiseshell female?\" \"(c) What fraction of their sons are black?\" Three answer boxes, an empty 2 x 2 grid outline. Nothing answer-bearing: no X or Y chips. Countdown 10 seconds; strip dims.",
        [
            "Countdown ring",
            "Enter reveals"
        ],
        "Quiet answer-free thinking hold with a 10 second countdown"
    ],
    "q2-why-female": [
        "new",
        "type badge \"X-linked\".",
        "Q2-why-female (choose the model): The gene is on the X, and a tortoiseshell cat needs both alleles, so it needs two X chromosomes.",
        "both / two X chromosomes / one colour",
        "The tortoiseshell plate gets two chips \"X^O\" and \"X^o\" (on screen only) with a bracket \"both alleles: two X\"; the bank line \"Co shows both\" appears small (grey tag \"B10\") with the screen wording \"both alleles show, in different patches\" directly under it. On \"one X and a Y\" the orange male plate gets \"X^O Y\"; a ghost male \"X^O X^o?\" fades and is struck with the grey tag \"males: one X\".",
        "explain",
        "type badge \"X-linked\". The tortoiseshell plate gets two chips \"X^O\" and \"X^o\" (on screen only) with a bracket \"both alleles: two X\"; the bank line \"Co shows both\" appears small (grey tag \"B10\") with the screen wording \"both alleles show, in different patches\" directly under it. On \"one X and a Y\" the orange male plate gets \"X^O Y\"; a ghost male \"X^O X^o?\" fades and is struck with the grey tag \"males: one X\". Answer line (a): \"needs two different X alleles; males have one X\". Grey author tag, small: \"rare XXY males can be tortoiseshell\" (screen only, explains \"almost\").",
        [
            "Enter reveals"
        ],
        "Settle for about a second before the next scene"
    ],
    "q2-square": [
        "adjust",
        "Punnett with the mother's gametes \"X^O\", \"X^o\" down the side (teal-edged) and the father's \"X^O\", \"Y\" across the top (plum-edged).",
        "Q2-square (fill it, then read it two ways): Now the cross.",
        "daughter / son / one in four / one in two",
        "On \"every daughter\" the X^O column fills two daughter boxes \"X^O X^O\" (orange), \"X^O X^o\" (tortoiseshell); on \"every son\" the Y column fills \"X^O Y\" (orange), \"X^o Y\" (black) (computed with B10's xlinked split). The bank line \"Dad gives his X to daughters and his Y to sons\" writes small (grey tag \"B10\").",
        "explain",
        "Punnett with the mother's gametes \"X^O\", \"X^o\" down the side (teal-edged) and the father's \"X^O\", \"Y\" across the top (plum-edged). On \"every daughter\" the X^O column fills two daughter boxes \"X^O X^O\" (orange), \"X^O X^o\" (tortoiseshell); on \"every son\" the Y column fills \"X^O Y\" (orange), \"X^o Y\" (black) (computed with B10's xlinked split). The bank line \"Dad gives his X to daughters and his Y to sons\" writes small (grey tag \"B10\"). On \"one in four\" all four boxes outline with the tortoiseshell box ringed: (b) \"1/4 of all kittens\". On \"one in two\" only the son column outlines with the black box ringed: (c) \"1/2 of sons\". Strip: \"2 genotypes\" and \"3 combine\" tick.",
        [
            "scribbleEllipse",
            "Enter reveals"
        ],
        "Settle for about a second before the next scene"
    ],
    "q2-mistake": [
        "new",
        "a ghost grid \"O o x O O\" fills (computed, autosomal) with two \"tortoiseshell\" boxes, one labelled with a square symbol; on \"autosome\" it takes a red scribble cross with the caption \"the gene is on the X\".",
        "Q2-mistake (the classic mistake): The classic mistake is treating the gene as if it were on an autosome.",
        "autosome / mother's X",
        "On \"mother's X\" an arrow runs from the mother's chips to the son column. Hold about 1.5 seconds.",
        "explain",
        "a ghost grid \"O o x O O\" fills (computed, autosomal) with two \"tortoiseshell\" boxes, one labelled with a square symbol; on \"autosome\" it takes a red scribble cross with the caption \"the gene is on the X\". On \"mother's X\" an arrow runs from the mother's chips to the son column. Hold about 1.5 seconds.",
        [
            "scribbleEllipse",
            "Enter reveals"
        ],
        "Hold about 1"
    ],
    "q3-question": [
        "new",
        "board clears.",
        "Unseen transfer: q3-question (question 3: a PKU family), with every demand and condition on screen and nothing answer-bearing",
        "P K U / brother / mother / first child / second child",
        "The card for \"q3-question (question 3: a PKU family)\" writes on and stays up while the countdown ring runs through the answer-free thinking hold",
        "explain",
        "board clears. Type badge \"Pedigree: probability\". Stimulus: B9 Pedigree (data P-Q3 in Numbers): generation I, two couples, I-1 and I-2 (both open), I-3 (filled circle) and I-4 (open square); generation II, II-1 (filled square, \"brother\"), II-2 (open circle, \"woman\"), II-3 (open square, \"partner\"), with a couple line from II-2 to II-3 and a \"?\" child below. Legend: \"filled: has PKU\". Givens card: \"PKU: autosomal recessive\", \"assume: one gene; no new mutation\". Demands: \"(a) Probability that their first child has PKU?\" \"(b) If the first child has PKU, probability for the second child?\" Two answer boxes. Nothing answer-bearing: no genotype chips, no grid. Countdown 10 seconds; strip dims.",
        [
            "Countdown ring",
            "Enter reveals"
        ],
        "Quiet answer-free thinking hold with a 10 second countdown"
    ],
    "q3-sure": [
        "new",
        "on \"two recessive alleles\" chip \"pp\" pins under I-3 and a \"p\" chip travels down to II-3; \"Pp\" pins under II-3 with the tag \"carrier: certain\" on \"carrier\".",
        "Q3-sure (the genotypes you can be sure of): Start with the people you can be sure of.",
        "sure of / carrier / both parents",
        "On \"brother is affected\" \"pp\" pins under II-1; on \"both parents\" \"Pp\" chips pin under I-1 and I-2 with the trio bracket \"unaffected parents, affected child\" (B9 giveaway, grey tag \"B9\"). II-2 gets a dashed \"?\" chip.",
        "explain",
        "on \"two recessive alleles\" chip \"pp\" pins under I-3 and a \"p\" chip travels down to II-3; \"Pp\" pins under II-3 with the tag \"carrier: certain\" on \"carrier\". On \"brother is affected\" \"pp\" pins under II-1; on \"both parents\" \"Pp\" chips pin under I-1 and I-2 with the trio bracket \"unaffected parents, affected child\" (B9 giveaway, grey tag \"B9\"). II-2 gets a dashed \"?\" chip. Strip: \"2 genotypes you're sure of\" ticks.",
        [
            "Enter reveals"
        ],
        "Settle for about a second before the next scene"
    ],
    "q3-two-thirds": [
        "new",
        "a Punnett \"Pp x Pp\" fills beside I-1 and I-2 (computed).",
        "Q3-two-thirds (cross out the box she can't be): Now the woman.",
        "cross out / two / two in three / one in six",
        "On \"cross out\" the \"pp\" box takes a grey scribble cross with the tag \"she's unaffected: not this box\"; the remaining three boxes ring, two amber (\"Pp\"), and \"2/3\" writes beside them (computed: 2 of 3 remaining). The chip \"Cross out the box they can't be.\" writes small.",
        "explain",
        "a Punnett \"Pp x Pp\" fills beside I-1 and I-2 (computed). On \"cross out\" the \"pp\" box takes a grey scribble cross with the tag \"she's unaffected: not this box\"; the remaining three boxes ring, two amber (\"Pp\"), and \"2/3\" writes beside them (computed: 2 of 3 remaining). The chip \"Cross out the box they can't be.\" writes small. A two-step chain writes on: \"P(she's a carrier) = 2/3\", \"x P(pp child from Pp x Pp) = 1/4\", \"= 2/12 = 1/6\"; the partner's certainty sits as \"x 1 (he's a carrier)\". Answer line (a): \"1/6\". Strip: \"3 combine the chances\" ticks.",
        [
            "HandText write-on",
            "scribbleEllipse",
            "Enter reveals"
        ],
        "Settle for about a second before the next scene"
    ],
    "q3-update": [
        "new",
        "a filled \"III-1\" symbol drops under the couple with the tag \"first child: PKU\"; on \"needed a recessive allele from her\" a \"p\" chip travels up from III-1 to II-2; on \"proves\" II-2's \"?\" chip becomes \"Pp\" with an amber tick; a mini grid \"Pp x Pp\" fills and its \"pp\" box rings; answer line (b): \"1/4 (she is now known to be a carrier; each child is a new chance)\".",
        "Q3-update (new evidence, and the classic mistake): Now suppose their first child has P K U.",
        "proves / one in four / one in two",
        "On \"one in two\" the chip \"her carrier chance = 2/4 = 1/2, child = 1/8\" writes on and takes a red scribble cross, with an arrow to the crossed \"pp\" box. A second crossed chip, unspoken: \"1/4 for the first child (assumed both certain carriers)\".",
        "explain",
        "a filled \"III-1\" symbol drops under the couple with the tag \"first child: PKU\"; on \"needed a recessive allele from her\" a \"p\" chip travels up from III-1 to II-2; on \"proves\" II-2's \"?\" chip becomes \"Pp\" with an amber tick; a mini grid \"Pp x Pp\" fills and its \"pp\" box rings; answer line (b): \"1/4 (she is now known to be a carrier; each child is a new chance)\". On \"one in two\" the chip \"her carrier chance = 2/4 = 1/2, child = 1/8\" writes on and takes a red scribble cross, with an arrow to the crossed \"pp\" box. A second crossed chip, unspoken: \"1/4 for the first child (assumed both certain carriers)\". Hold about 1.5 seconds.",
        [
            "HandText write-on",
            "scribbleEllipse",
            "Enter reveals"
        ],
        "Hold about 1"
    ],
    "q4-question": [
        "new",
        "board clears.",
        "Unseen transfer: q4-question (question 4: which pattern?), with every demand and condition on screen and nothing answer-bearing",
        "rare / rule out / can't decide / more likely",
        "The card for \"q4-question (question 4: which pattern?)\" writes on and stays up while the countdown ring runs through the answer-free thinking hold",
        "explain",
        "board clears. Type badge \"Pedigree: which pattern?\". Stimulus: B9 Pedigree (data P-Q4 in Numbers) with Roman numerals, individual numbers and a legend (open unaffected, filled affected). Givens card: \"a rare condition\", \"choose from: autosomal dominant, autosomal recessive, X-linked recessive\", \"assume: one gene; anyone with the genotype for the trait shows it; no new mutation\". Demands: \"(a) Which pattern can you rule out? Justify using numbered individuals.\" \"(b) Why can't this pedigree decide between the other two?\" \"(c) Which is more likely? Why?\" Three answer boxes and an empty mode-test table (three rows, no ticks). Nothing answer-bearing. Countdown 10 seconds; strip dims.",
        [
            "Countdown ring",
            "Enter reveals"
        ],
        "Quiet answer-free thinking hold with a 10 second countdown"
    ],
    "q4-rule-out": [
        "new",
        "mode-test table row \"X-linked recessive\" lights.",
        "Q4-rule-out (test X-linked recessive): Test X-linked recessive first.",
        "X-linked recessive / every son / unaffected / not",
        "On \"affected mother\" I-2 rings amber; chips \"X^a X^a\" pin under her (dashed, \"if X-linked recessive\"); on \"every son\" an arrow runs from I-2 to II-2 carrying \"X^a\"; on \"unaffected\" II-2 rings and a red clash mark lands on the arrow. On \"her daughter is affected\" II-1 and I-1 ring with the bank rule tag \"affected daughter, unaffected father: not X-linked recessive\" (grey tag \"B10\").",
        "explain",
        "mode-test table row \"X-linked recessive\" lights. On \"affected mother\" I-2 rings amber; chips \"X^a X^a\" pin under her (dashed, \"if X-linked recessive\"); on \"every son\" an arrow runs from I-2 to II-2 carrying \"X^a\"; on \"unaffected\" II-2 rings and a red clash mark lands on the arrow. On \"her daughter is affected\" II-1 and I-1 ring with the bank rule tag \"affected daughter, unaffected father: not X-linked recessive\" (grey tag \"B10\"). On \"not\" the row takes a cross; answer line (a): \"not X-linked recessive: I-2 affected but her son II-2 unaffected (and II-1 affected with unaffected father I-1)\". Strip: \"1 choose the model\" ticks.",
        [
            "scribbleEllipse"
        ],
        "Settle for about a second before the next scene"
    ],
    "q4-both-fit": [
        "adjust",
        "B9's two Trio icons (\"Hidden in the parents: recessive\", \"Hidden in the child: dominant\") slide over the pedigree and scan each couple; none matches, and each gets a grey \"no match\" tag.",
        "Q4-both-fit (no giveaway, so both fit): Now look for the giveaways.",
        "giveaways / both patterns fit / both carriers",
        "On \"both patterns fit\" the table rows \"autosomal dominant\" and \"autosomal recessive\" tick. Dominant: chips \"Aa\" under I-2, II-1, III-1 and \"aa\" under the rest (computed by onlyGeno or a fit from fitsMode).",
        "explain",
        "B9's two Trio icons (\"Hidden in the parents: recessive\", \"Hidden in the child: dominant\") slide over the pedigree and scan each couple; none matches, and each gets a grey \"no match\" tag. On \"both patterns fit\" the table rows \"autosomal dominant\" and \"autosomal recessive\" tick. Dominant: chips \"Aa\" under I-2, II-1, III-1 and \"aa\" under the rest (computed by onlyGeno or a fit from fitsMode). Recessive: the chips swap to the recessive set, and on \"both carriers\" I-1 and II-4 ring amber with \"Aa\" chips and the tag \"both must be carriers\". Answer line (b): \"no giveaway pattern: both fit (recessive needs I-1 and II-4 to be carriers)\".",
        [
            "scribbleEllipse"
        ],
        "Settle for about a second before the next scene"
    ],
    "q4-more-likely": [
        "new",
        "on \"rare\" the two ringed partner symbols (I-1 and II-4) pulse with the tag \"two unrelated carriers: unlikely if rare\"; on \"more likely\" answer line (c) writes on: \"autosomal dominant is more likely (recessive needs two unrelated carriers), but not proven\".",
        "Q4-more-likely (judge, and the classic mistake): For a rare condition, two unrelated partners both being carriers is unlikely, so dominant is more likely.",
        "rare / more likely / proven",
        "A small grey tag, unspoken: \"decisive future evidence: II-3 and an unaffected partner having an affected child would mean recessive\". On \"every generation\" the chip \"dominant: it's in every generation\" writes on and takes a red scribble cross with the caption \"a clue, not proof\".",
        "explain",
        "on \"rare\" the two ringed partner symbols (I-1 and II-4) pulse with the tag \"two unrelated carriers: unlikely if rare\"; on \"more likely\" answer line (c) writes on: \"autosomal dominant is more likely (recessive needs two unrelated carriers), but not proven\". A small grey tag, unspoken: \"decisive future evidence: II-3 and an unaffected partner having an affected child would mean recessive\". On \"every generation\" the chip \"dominant: it's in every generation\" writes on and takes a red scribble cross with the caption \"a clue, not proof\". Hold about 1.5 seconds.",
        [
            "HandText write-on",
            "scribbleEllipse"
        ],
        "Hold about 1"
    ],
    "decision-board": [
        "new",
        "the first-moves strip returns full size as a two-column board, \"What you see\" and \"What you do first\", each row lighting on its cue word with the question badge: \"a third phenotype, or both shown → incomplete or co-dominance (Q1, Q2)\"; \"sons and daughters differ → a gene on the X (Q2)\"; \"certain genotypes first → affected people, parents of affected children (Q3)\"; \"an unaffected relative → cross ",
        "Decision-board: So here's how to start.",
        "Choose the model / sure of / cross out / separate offspring / no giveaway / Next",
        "On \"Next\" a chip \"Next: frequencies in a population\" with a small herd-of-dots icon. Hold about 2 seconds.",
        "explain",
        "the first-moves strip returns full size as a two-column board, \"What you see\" and \"What you do first\", each row lighting on its cue word with the question badge: \"a third phenotype, or both shown → incomplete or co-dominance (Q1, Q2)\"; \"sons and daughters differ → a gene on the X (Q2)\"; \"certain genotypes first → affected people, parents of affected children (Q3)\"; \"an unaffected relative → cross out the box they can't be (Q3)\"; \"two offspring, parents known → multiply (Q1)\"; \"no giveaway → name what fits; 'more likely' is not 'proven' (Q4)\". On \"Next\" a chip \"Next: frequencies in a population\" with a small herd-of-dots icon. Hold about 2 seconds.",
        [
            "scribbleEllipse"
        ],
        "Hold about 2 seconds"
    ],
    "key-notes": [
        "new",
        "Key notes card with the numbered notes and the memory aid",
        "Essentials to copy into books",
        "key notes",
        "Notes appear then stay still for copying",
        "hold",
        "The heading \"Key notes: what to write in your book\", the numbered notes and the memory aid appear and lock",
        [
            "Enter reveals"
        ],
        "Quiet copy hold of about 60 seconds with pause invitation"
    ]
}


BIO_BP01_ROWS = {
    "hook": [
        "new",
        "the bench strip draws across the centre.",
        "Hook (a model on the bench): This strip of paper cards is a model of twelve base pairs of DNA.",
        "DNA copying / making a polypeptide",
        "The finished coded card ladder (twelve pairs, blue backbones, jigsaw tabs, letters printed) slides on and settles. On \"can't do anything a real cell does\" the real helix plate (b5x-zoom-helix-v1.png) fades in small at the right with a grey \"?\" between it and the cards.",
        "explain",
        "the bench strip draws across the centre. The finished coded card ladder (twelve pairs, blue backbones, jigsaw tabs, letters printed) slides on and settles. On \"can't do anything a real cell does\" the real helix plate (b5x-zoom-helix-v1.png) fades in small at the right with a grey \"?\" between it and the cards. On \"follow the same rules\" one A card lifts and drops back onto its T partner with a soft snap. On \"DNA copying\" a small icon of two ladders appears above the bench; on \"making a polypeptide\" a small bead chain icon appears beside it. The question writes on at the top left: \"What does a model show, and what does it hide?\" Hold about 2 seconds.",
        [
            "HandText write-on",
            "Enter slide",
            "DrawPath",
            "Enter reveals"
        ],
        "Hold about 2 seconds"
    ],
    "aim-kit": [
        "new",
        "the aim card writes on in the right zone: \"Aim: build models of DNA replication and polypeptide synthesis, and assess how well they represent the real processes.\" On \"card in four colours\" the painted card sheets fan in (m5x-card-sheets-v1.png, Codex item 1); on \"scissors\" (m5x-scissors-v1.png, item 2), \"sticky tape\" (m5x-tape-roll-v1.png, item 3), \"pencil\" (m5x-pencil-v1.png, item 4) and \"pop-bea",
        "Aim and kit: Here's the aim: build models of DNA replication and polypeptide synthesis, and assess how well they represent the real processes.",
        "Blue / green / yellow / orange",
        "On \"Blue\", \"green\", \"yellow\" and \"orange\" the matching sheet lifts and the colour key chip builds one row per cue at the lower left; on \"amino acids\" a bead row joins the key. Small grey tag on \"scissors\": \"cut on the desk\".",
        "explain",
        "the aim card writes on in the right zone: \"Aim: build models of DNA replication and polypeptide synthesis, and assess how well they represent the real processes.\" On \"card in four colours\" the painted card sheets fan in (m5x-card-sheets-v1.png, Codex item 1); on \"scissors\" (m5x-scissors-v1.png, item 2), \"sticky tape\" (m5x-tape-roll-v1.png, item 3), \"pencil\" (m5x-pencil-v1.png, item 4) and \"pop-beads\" (three bead plates, items 9 to 11) each land on the bench in turn with a small materials tag. On \"Blue\", \"green\", \"yellow\" and \"orange\" the matching sheet lifts and the colour key chip builds one row per cue at the lower left; on \"amino acids\" a bead row joins the key. Small grey tag on \"scissors\": \"cut on the desk\". Hold about 2 seconds.",
        [
            "HandText write-on"
        ],
        "Hold about 2 seconds"
    ],
    "cut-nucleotides": [
        "adjust",
        "step rail lights \"1.",
        "Step 1: cut nucleotides that only fit one partner: Step one: make the nucleotides.",
        "phosphate / sugar / A only fits T / C only fits G / two / three",
        "Make nucleotides\". The painted pile of cut cards (m5x-card-pile-v1.png, item 5) sits at the left of the bench.",
        "explain",
        "step rail lights \"1. Make nucleotides\". The painted pile of cut cards (m5x-card-pile-v1.png, item 5) sits at the left of the bench. One coded blank card enlarges at centre; on \"phosphate\" a small pencil circle draws at the strip's end (tag \"phosphate\"); on \"sugar\" a pencil pentagon draws beside it (tag \"sugar\"); on \"the tab is the base\" the tab outlines (tag \"base\"); a bracket over circle and pentagon reads \"backbone part\". On \"A only fits T\" an A card and a T card slide together and seat (snap); a C card tries the T and does not seat (small grey bounce, tag \"doesn't fit\"). On \"C only fits G\" C and G seat. On \"two\" two bumps on the A tab and two slots on the T tab pulse, with B4's HBonds two dotted lines between; on \"three\" the C-G tabs pulse with three dotted lines. Tag: \"notches = hydrogen bonds: A-T two, C-G three\" (B4 recall, grey tag \"B4\"). Hold about 1 second.",
        [
            "scribbleEllipse",
            "DrawPath"
        ],
        "Hold about 1 second"
    ],
    "make-synthesis-pieces": [
        "new",
        "step rail lights \"1b.",
        "Make the pieces for the second model: While you're cutting, make the pieces for the second model too.",
        "yellow / orange / three base tabs / ribosome",
        "Make RNA, tRNA and ribosome\". No hands: the painted scissors (m5x-scissors-v1.png) rest beside each piece as it separates along a coded dashed cut line.",
        "explain",
        "step rail lights \"1b. Make RNA, tRNA and ribosome\". No hands: the painted scissors (m5x-scissors-v1.png) rest beside each piece as it separates along a coded dashed cut line. On \"yellow\" a yellow sheet (from the card sheets plate) gives up a row of coded yellow cards; one U card enlarges beside a blue T card, their tabs outlined side by side (tag \"U: same notches as T\"), and the U seats onto an A (snap). On \"orange\" the painted tRNA card (m5x-trna-card-v1.png, Codex item 7) cuts free; on \"three base tabs\" its three blank tabs outline and coded letters write on them, \"U A C\", with a small direction tag \"3' to 5'\" and the bracket \"anticodon\". On \"paper cup\" the cup on the plate pulses; on \"red bead\" a red pop-bead (m5x-popbead-red-v1.png) drops into the cup. On \"C G U\" and \"A A A\" two more cards slide in beside it with gold and green beads; a small codon chart excerpt (B6c style) rings AUG for Met, GCA for Ala and UUU for Phe as each card is filled (tag \"bead = the amino acid for the codon this card fits\"). On \"ribosome\" the painted card ribosome (m5x-paper-ribosome-v1.png, item 6) cuts free and three coded yellow tabs slide into its window and fit exactly (bracket \"three tabs: one codon\"). Hold about 1 second.",
        [
            "HandText write-on",
            "Enter slide",
            "scribbleEllipse"
        ],
        "Hold about 1 second"
    ],
    "build-molecule": [
        "adjust",
        "step rail \"2.",
        "Step 2: build the starting molecule: Step two: build the starting molecule.",
        "point the second arrow the other way / touch",
        "Build the molecule\". Twelve blue cards slide into a row on the bench, tape strips appearing between backbones (coded tape pieces matching the painted roll); the sequence prints in the tabs: A T G G C A T T T T G A.",
        "explain",
        "step rail \"2. Build the molecule\". Twelve blue cards slide into a row on the bench, tape strips appearing between backbones (coded tape pieces matching the painted roll); the sequence prints in the tabs: A T G G C A T T T T G A. On \"pair a second blue strand\" the partner cards slide in one by one and seat: T A C C G T A A A A C T. On \"Draw a five prime to three prime arrow\" a pencil arrow draws along the top strand, left to right, with \"5'\" and \"3'\" tags at its ends (B4's Strand arrows); on \"point the second arrow the other way\" a second arrow draws along the partner strand right to left, tags \"3'\" left and \"5'\" right, and the two arrows pulse together (tag \"antiparallel: arrows opposite\"). On \"covalent bonds\" the tape strips glow with the tag \"tape: strong backbone bonds\"; on \"touch\" the tab joins show dotted HBonds with \"tabs: weak hydrogen bonds\". Hold about 1 second.",
        [
            "Enter slide",
            "scribbleEllipse",
            "DrawPath",
            "Enter reveals"
        ],
        "Hold about 1 second"
    ],
    "replicate": [
        "new",
        "step rail \"3.",
        "Step 3: model replication: Step three: copy it.",
        "apart / template / two molecules",
        "Copy (replicate)\". On \"apart\" the ladder opens like a zip from the left (B4's Fork motion), the dotted bonds vanishing pair by pair while the tape strips stay (tag \"tape unbroken\").",
        "explain",
        "step rail \"3. Copy (replicate)\". On \"apart\" the ladder opens like a zip from the left (B4's Fork motion), the dotted bonds vanishing pair by pair while the tape strips stay (tag \"tape unbroken\"). On \"template\" both blue strands get the tag \"template\". Green cards slide in from a small green pile, one per base on the template, each seating with a snap; a coded tape strip joins each new backbone. On \"two molecules\" the two ladders separate along the bench, each with a bracket: \"1 blue + 1 green\". The colour key's blue and green rows pulse. Hold about 1 second.",
        [
            "Enter slide"
        ],
        "Hold about 1 second"
    ],
    "record-check": [
        "new",
        "the record sheet (painted clipboard m5x-clipboard-sheet-v1.png, item 12, with a coded sketch drawing on it) in the right zone: two small ladders sketched, labels \"old (blue)\" and \"new (green)\" writing on.",
        "Record and check: Now record what the model shows.",
        "match base for base / semi-conservative / sister chromatids",
        "On \"match base for base\" each molecule's top row reads across against the original sequence chip with ticks along it. On \"forcing a wrong card in\" a green C card tries an A on the template and tilts, not seated (grey tag \"mismatch: doesn't fit\"; small grey tag \"cells also proofread: B4\").",
        "explain",
        "the record sheet (painted clipboard m5x-clipboard-sheet-v1.png, item 12, with a coded sketch drawing on it) in the right zone: two small ladders sketched, labels \"old (blue)\" and \"new (green)\" writing on. On \"match base for base\" each molecule's top row reads across against the original sequence chip with ticks along it. On \"forcing a wrong card in\" a green C card tries an A on the template and tilts, not seated (grey tag \"mismatch: doesn't fit\"; small grey tag \"cells also proofread: B4\"). On \"semi-conservative\" the term writes on under the sketch: \"each copy keeps one original strand\". On \"sister chromatids\" the two ladders shrink and slide into the two arms of b5x-chromosome-duplicated-v1.png (small, grey tag \"B5a\"), each arm tagged \"one copy\". Hold about 2 seconds.",
        [
            "HandText write-on",
            "Enter slide"
        ],
        "Hold about 2 seconds"
    ],
    "transcribe": [
        "new",
        "step rail \"4.",
        "Step 4: model transcription: Step four switches to the second model: making a polypeptide.",
        "template strand / U instead of T / messenger RNA / unchanged",
        "Transcribe\". One of the two molecules returns to centre; the colour key's yellow row pulses.",
        "explain",
        "step rail \"4. Transcribe\". One of the two molecules returns to centre; the colour key's yellow row pulses. On \"Unzip the whole gene\" the ladder opens across the twelve cards; the lower strand gets the tag \"template strand (3' to 5')\" and the upper strand dims (tag \"not read\"). On \"yellow cards\" yellow cards seat one by one opposite the template: A U G G C A U U U U G A, built from the 5' end (small arrow \"built 5' to 3'\", grey tag \"B6b\"). On \"U instead of T\" each U card rings briefly where an A sits opposite. On \"peel the yellow strand off\" it lifts away and the DNA ladder closes again with its dotted bonds back. On \"messenger RNA\" the yellow strip gets the tag \"mRNA\"; on \"unchanged\" the DNA gets a teal tick \"gene unchanged, can be read again\". Grey tag, unspoken: \"a cell opens only a short stretch at a time\". Hold about 1 second.",
        [
            "scribbleEllipse"
        ],
        "Hold about 1 second"
    ],
    "translate": [
        "new",
        "step rail \"5.",
        "Step 5: model translation: Step five: translation.",
        "codon / anticodon / clip its bead / stop codon",
        "Translate\". The painted paper ribosome (m5x-paper-ribosome-v1.png, item 6) sits at centre; the yellow mRNA strip slides into its window from the left, three cards visible in the window (bracket \"codon\").",
        "explain",
        "step rail \"5. Translate\". The painted paper ribosome (m5x-paper-ribosome-v1.png, item 6) sits at centre; the yellow mRNA strip slides into its window from the left, three cards visible in the window (bracket \"codon\"). On \"orange card\" a tRNA card plate (m5x-trna-card-v1.png, item 7) appears above the window with a coded red bead (m5x-popbead-red-v1.png) in its cup and its three base tabs lettered \"U A C\" (direction tag \"3' to 5'\"); on \"fit its codon\" its tabs seat into the codon's tabs in the window. On \"start codon\" it drops and seats over A U G (snap, tag \"start: methionine\"). On \"clip its bead\" the strip moves one codon left, a second card (gold bead, anticodon C G U) seats over G C A, and the gold bead clips to the red one (small coded peg joint, tag \"peptide bond\"). The first card lifts away empty. The third card (green bead, anticodon A A A) seats over U U U and its bead clips on. On \"stop codon\" U G A enters the window; an orange card hovers and finds no fit (grey \"?\"), tag \"stop: no tRNA\". On \"comes off\" the three-bead chain lifts free. Grey tag, unspoken: \"a real ribosome holds two tRNAs at a time\". Hold about 1 second.",
        [
            "Enter slide",
            "Enter reveals"
        ],
        "Hold about 1 second"
    ],
    "results-table": [
        "new",
        "the results table writes in the right zone, one row per cue: \"codon / anticodon (3' to 5') / amino acid\": \"AUG / UAC / Met (start)\", \"GCA / CGU / Ala\", \"UUU / AAA / Phe\", \"UGA / none / stop\".",
        "Results table: Record the results in a table: codon, anticodon and amino acid, using a codon chart.",
        "methionine, alanine and phenylalanine / one card",
        "A small codon chart excerpt (B6c style) sits under the table with each looked-up cell ringing as its row writes. On \"methionine, alanine and phenylalanine\" the bead chain sits under the table with each bead tagged \"Met\", \"Ala\", \"Phe\".",
        "explain",
        "the results table writes in the right zone, one row per cue: \"codon / anticodon (3' to 5') / amino acid\": \"AUG / UAC / Met (start)\", \"GCA / CGU / Ala\", \"UUU / AAA / Phe\", \"UGA / none / stop\". A small codon chart excerpt (B6c style) sits under the table with each looked-up cell ringing as its row writes. On \"methionine, alanine and phenylalanine\" the bead chain sits under the table with each bead tagged \"Met\", \"Ala\", \"Phe\". On \"one card\" one template card in the DNA (the C opposite the first base of codon 2; computed, see Numbers) flashes amber and the matching mRNA codon and bead flash with a \"?\" (no new amino acid named; grey tag \"a changed base can change an amino acid: B6b, B6c\"). Hold about 2 seconds.",
        [
            "scribbleEllipse"
        ],
        "Hold about 2 seconds"
    ],
    "assess-strengths": [
        "new",
        "the assessment card writes in the right zone with three column headings: \"Represents well\", \"Leaves out or distorts\", \"Improvement\".",
        "Assess: what the models represent well: Now assess the models.",
        "represent well / threes",
        "On each cue a row writes in the first column with a small pen link to the matching piece on the bench: \"pairing rule (tab shapes)\" to a seated A-T tab; \"one original strand kept (colours)\" to the two blue-green ladders; \"code read in threes (window)\" to the ribosome window, with m5x-ribosome-v1.png small beside the paper ribosome (tag \"real ribosome\"); \"tRNA links codon to amino acid\" to an orange card with its bead.",
        "explain",
        "the assessment card writes in the right zone with three column headings: \"Represents well\", \"Leaves out or distorts\", \"Improvement\". On each cue a row writes in the first column with a small pen link to the matching piece on the bench: \"pairing rule (tab shapes)\" to a seated A-T tab; \"one original strand kept (colours)\" to the two blue-green ladders; \"code read in threes (window)\" to the ribosome window, with m5x-ribosome-v1.png small beside the paper ribosome (tag \"real ribosome\"); \"tRNA links codon to amino acid\" to an orange card with its bead. Hold about 1 second.",
        [
            "scribbleEllipse"
        ],
        "Hold about 1 second"
    ],
    "assess-limits": [
        "new",
        "the second column fills, one row per cue: \"no enzymes: hides who does each job\" with a small grey tag \"helicase, DNA polymerase, RNA polymerase\"; \"flat: hides the twist that must unwind\" with b5x-zoom-helix-v1.png sliding in beside the flat ladder; \"12 base pairs: hides how long copying takes\" with a scale bar that stretches far off screen; \"direction not enforced: hides one-way building\" with a g",
        "Assess: limitations: Then the limits.",
        "enzymes / flat / tiny / direction / folding",
        "Hold about 2 seconds (reading hold).",
        "explain",
        "the second column fills, one row per cue: \"no enzymes: hides who does each job\" with a small grey tag \"helicase, DNA polymerase, RNA polymerase\"; \"flat: hides the twist that must unwind\" with b5x-zoom-helix-v1.png sliding in beside the flat ladder; \"12 base pairs: hides how long copying takes\" with a scale bar that stretches far off screen; \"direction not enforced: hides one-way building\" with a green card sliding on at the wrong end and a grey \"?\"; \"no folding: hides why order matters\" with the bead chain and a dotted fold outline (grey tag \"next video\"). Hold about 2 seconds (reading hold).",
        [
            "Enter reveals"
        ],
        "Hold about 2 seconds (reading hold)"
    ],
    "improvements": [
        "new",
        "the third column fills opposite its limit, one per cue: \"add cards at the 3' end only\" (the scene 4 arrows pulse, and a green card is only allowed at the 3' end of a growing strand, tick); \"enzyme job cards\" (three small blank coded cards labelled \"unzip\", \"build DNA\", \"build RNA\" slide near the fork); \"twist into a helix\" (the card ladder twists a half turn on the bench).",
        "Improving the model: A good assessment ends with improvements.",
        "improvements / twist",
        "On \"fixes one limit\" pen links join each improvement to its limit across the card. A crossed chip: \"the model is wrong because it's simplified\".",
        "explain",
        "the third column fills opposite its limit, one per cue: \"add cards at the 3' end only\" (the scene 4 arrows pulse, and a green card is only allowed at the 3' end of a growing strand, tick); \"enzyme job cards\" (three small blank coded cards labelled \"unzip\", \"build DNA\", \"build RNA\" slide near the fork); \"twist into a helix\" (the card ladder twists a half turn on the bench). On \"fixes one limit\" pen links join each improvement to its limit across the card. A crossed chip: \"the model is wrong because it's simplified\". Hold about 1 second.",
        [
            "Enter reveals"
        ],
        "Hold about 1 second"
    ],
    "attempt": [
        "new",
        "the board clears: no colour key, no assessment card.",
        "Unseen transfer: attempt (countdown, 10 seconds), with every demand and condition on screen and nothing answer-bearing",
        "Your turn.",
        "The card for \"attempt (countdown, 10 seconds)\" writes on and stays up while the countdown ring runs through the answer-free thinking hold",
        "explain",
        "the board clears: no colour key, no assessment card. The attempt card writes on: two coded white-card ladders on the bench (all backbones white, letters printed, sequences identical), tag \"white cards only, original and new\"; givens line \"both copies match the original\"; demands \"(a) Explain why this model can't show semi-conservative replication.\" \"(b) Suggest one change.\" Two answer boxes. Nothing answer-bearing: no blue or green, no \"old\" or \"new\" labels. The countdown ring starts after \"Pause here to answer.\" and runs for 10 seconds. The card stays on screen during and after the countdown.",
        [
            "Countdown ring",
            "Enter reveals"
        ],
        "Quiet answer-free thinking hold with a 10 second countdown"
    ],
    "feedback": [
        "adjust",
        "the card shrinks to a strip.",
        "Feedback (brief): With one colour, old and new strands look the same, so you can't see that each new molecule keeps one original strand.",
        "look the same / two colours",
        "On \"look the same\" a \"?\" hovers over each white strand. On \"two colours\" the original strands recolour blue and the new ones green; bracket \"1 original + 1 new\" on each ladder.",
        "explain",
        "the card shrinks to a strip. On \"look the same\" a \"?\" hovers over each white strand. On \"two colours\" the original strands recolour blue and the new ones green; bracket \"1 original + 1 new\" on each ladder. Answer line writes on: \"(a) old and new strands look identical, so 'one original kept' can't be seen; (b) two colours, original and new\". On \"fine because the sequences match\" the chip \"fine: the sequences match\" writes on and takes a grey scribble cross, tag \"shows accuracy, not which strand is old\". Hold about 1 second.",
        [
            "chip travel",
            "scribbleEllipse",
            "Mark cross"
        ],
        "Hold about 1 second"
    ],
    "decision-rule": [
        "new",
        "the plan card writes, each line lighting on its words: \"Key: what each piece stands for.\" \"Build by the real rules (valid).\" \"Record what you see.\" \"Assess: represents well / leaves out / improve.\" The two models sit small along the bottom (ladders and bead chain).",
        "Decision rule and handoff: So, to build and assess a model: decide what each piece stands for, follow the real rules so the model is valid, and record what you see.",
        "Next",
        "On \"Next\" a chip \"Next: from chain to protein to trait\" appears with the bead chain folding into a small blob. Hold about 1 second.",
        "explain",
        "the plan card writes, each line lighting on its words: \"Key: what each piece stands for.\" \"Build by the real rules (valid).\" \"Record what you see.\" \"Assess: represents well / leaves out / improve.\" The two models sit small along the bottom (ladders and bead chain). On \"Next\" a chip \"Next: from chain to protein to trait\" appears with the bead chain folding into a small blob. Hold about 1 second.",
        [
            "Enter reveals"
        ],
        "Hold about 1 second"
    ],
    "key-notes": [
        "new",
        "Key notes card with the numbered notes and the memory aid",
        "Essentials to copy into books",
        "key notes",
        "Notes appear then stay still for copying",
        "hold",
        "The heading \"Key notes: what to write in your book\", the numbered notes and the memory aid appear and lock",
        [
            "Enter reveals"
        ],
        "Quiet copy hold of about 60 seconds with pause invitation"
    ]
}


BIO_BP02_ROWS = {
    "hook": [
        "new",
        "the bench strip draws across.",
        "Hook (one pair of parents, many offspring): Two parent plants can produce a hundred seeds, and no two are quite the same.",
        "meiosis / fertilisation / mutation",
        "A loose heap of painted pop-beads (plum and teal single-bead plates, Codex items 1 and 2, scattered by code) sits at the left; at the right a row of eight coded seed outlines appears, each with a different short letter label (screen only). On \"meiosis\" four bead chains assemble themselves in a string loop (item 3); on \"fertilisation\" two face-down cards slide together; on \"mutation\" one sticker on a chain turns amber",
        "explain",
        "the bench strip draws across. A loose heap of painted pop-beads (plum and teal single-bead plates, Codex items 1 and 2, scattered by code) sits at the left; at the right a row of eight coded seed outlines appears, each with a different short letter label (screen only). On \"meiosis\" four bead chains assemble themselves in a string loop (item 3); on \"fertilisation\" two face-down cards slide together; on \"mutation\" one sticker on a chain turns amber. The question writes on at the top left: \"Can a model predict offspring genotypes?\" Hold about 2 seconds.",
        [
            "HandText write-on",
            "scribbleEllipse",
            "DrawPath",
            "Enter reveals"
        ],
        "Hold about 2 seconds"
    ],
    "aim-kit": [
        "adjust",
        "the aim card writes on in the right zone.",
        "Aim and kit: The aim: model meiosis, fertilisation and mutation to predict the variation in offspring genotypes.",
        "die / Plum / teal",
        "On each item the matching plate lands on the bench with a materials tag: plum and teal bead plates (items 1, 2), the centromere piece (item 4), a sheet of blank round stickers (item 5), B5b's coded coin, the painted die (m5x-die-v1.png, item 7), string loops (item 3), a stack of blank index cards (item 6) and the clipboard results sheet (m5x-clipboard-sheet-v1.png, shared item). On \"Plum\" and \"teal\" the colour key ch",
        "explain",
        "the aim card writes on in the right zone. On each item the matching plate lands on the bench with a materials tag: plum and teal bead plates (items 1, 2), the centromere piece (item 4), a sheet of blank round stickers (item 5), B5b's coded coin, the painted die (m5x-die-v1.png, item 7), string loops (item 3), a stack of blank index cards (item 6) and the clipboard results sheet (m5x-clipboard-sheet-v1.png, shared item). On \"Plum\" and \"teal\" the colour key chip builds two rows; small grey tag \"B5b colours\". Hold about 1 second.",
        [
            "HandText write-on",
            "scribbleEllipse"
        ],
        "Hold about 1 second"
    ],
    "build-parent": [
        "new",
        "step rail lights \"1.",
        "Step 1: build the parent cell: Step one: build a parent cell with two pairs of chromosomes.",
        "matching positions / the same genes in the same places",
        "Build the parent cell\". A string loop opens on the bench.",
        "explain",
        "step rail lights \"1. Build the parent cell\". A string loop opens on the bench. Bead chains assemble bead by bead (painted single-bead plates chained in code): long plum, long teal, short plum, short teal. On \"matching positions\" sticker dots (white, ink outline) land on each chain with letters on screen only: P and T on long plum (P near the top, T near the bottom), p and t on long teal at the same heights, R on short plum, r on short teal. On \"the same genes in the same places\" dashed level lines join P to p and T to t across the long pair, and R to r across the short pair; tag \"homologous pair: same genes, same places\" (grey tag \"B5a\"). Tag under the loop: \"2n = 4\". Hold about 1 second.",
        [
            "scribbleEllipse"
        ],
        "Hold about 1 second"
    ],
    "copy": [
        "adjust",
        "step rail \"2.",
        "Step 2: copy each chromosome: Step two: the DNA is copied before meiosis starts.",
        "centromere / four",
        "Copy\". Each chain duplicates beside itself (same colours, same stickers) and a painted centromere piece (item 4) clips the two together, forming an X-like pair of bead chains.",
        "explain",
        "step rail \"2. Copy\". Each chain duplicates beside itself (same colours, same stickers) and a painted centromere piece (item 4) clips the two together, forming an X-like pair of bead chains. On \"sister chromatids\" the real plates b5x-chromosome-duplicated-pink-v1.png and -teal-v1.png fade in small at the right as \"the real thing\". On \"four\" B5a's counting chip counts centromeres: 1, 2, 3, 4 (each centromere piece rings in turn); a crossed chip \"8 chromosomes\" (grey tag \"count centromeres\"). Hold about 1 second.",
        [
            "scribbleEllipse"
        ],
        "Hold about 1 second"
    ],
    "cross-over": [
        "new",
        "step rail \"3.",
        "Step 3: crossing over: Step three, in prophase one: crossing over.",
        "prophase one / die / swap the end pieces / matching points / purple with short / white with tall",
        "Cross over (prophase I)\". The long pair slides together side by side (B5b's PairUp).",
        "explain",
        "step rail \"3. Cross over (prophase I)\". The long pair slides together side by side (B5b's PairUp). On \"die\" the painted die (m5x-die-v1.png) tumbles on the bench and settles; code draws six pips on its blank top face (tag \"six: cross over\"; a small rule chip \"1 to 5: no swap\" sits beside it). On \"Unclip\" one inner plum chromatid and one inner teal chromatid separate at the bead between P and T (a small gap opens at the same bead count on both, tag \"same point\"). On \"swap the end pieces\" the two end segments exchange places (B5b's CrossOver motion), keeping their own colours (B5b rule: swapped pieces keep their parent's colour). On \"matching points\" a level line confirms the gap is at the same position on both; a small inset shows an unmatched swap with one chromatid gaining an extra bead and the other losing one, grey cross, tag \"unmatched: genes lost or doubled\". On \"purple with short\" the plum-top, teal-bottom chromatid rings (P with t); on \"white with tall\" the teal-top, plum-bottom chromatid rings (p with T). The gamete record table opens in the right zone with the line \"new combinations: P t, p T\". Hold about 1 second.",
        [
            "Enter slide",
            "scribbleEllipse",
            "DrawPath"
        ],
        "Hold about 1 second"
    ],
    "line-up-divide": [
        "new",
        "step rail \"4.",
        "Step 4: line up and divide twice: Step four, in metaphase one: line the pairs up across the middle of the cell.",
        "metaphase one / coin / random / sister chromatids / four gametes",
        "Line up (metaphase I), divide twice (meiosis I, II)\". A coded dashed equator draws across the loop; both pairs slide onto it.",
        "explain",
        "step rail \"4. Line up (metaphase I), divide twice (meiosis I, II)\". A coded dashed equator draws across the loop; both pairs slide onto it. On \"coin\" B5b's TwoWays coin flips over the long pair (heads: plum left) and again over the short pair (tails: plum right), each result pinning a small tag. On \"random\" the second flip's tag reads \"decided separately\". On \"apart into two new loops\" the homologous partners separate to opposite sides and two new string loops close around them (tag \"partners separate; centromeres stay joined\", grey tag \"B5b\"). On \"sister chromatids\" each loop splits again, centromere pieces unclipping, into four small loops. On \"four gametes\" each small loop gets a \"n = 2\" tag and its alleles print beside it. Hold about 1 second.",
        [
            "scribbleEllipse",
            "DrawPath"
        ],
        "Hold about 1 second"
    ],
    "record-gametes": [
        "new",
        "step rail \"5.",
        "Step 5: record the gametes, and run it again: Step five: record each gamete's alleles on a card, then rebuild and run it again with different coin results.",
        "four types / mixed types",
        "Record and repeat\". Each gamete's letters write onto a blank card plate (item 6) which slides into the record table.",
        "explain",
        "step rail \"5. Record and repeat\". Each gamete's letters write onto a blank card plate (item 6) which slides into the record table. The bench resets with a quick rewind; the die rolls a three (code draws three pips; tag \"no swap this run\") and the coins flip differently; new, unmixed gametes drop in. The table sorts into two blocks: \"no crossover: P T R, P T r, p t R, p t r\" with \"2 x 2 = 4 = 2^n\" (grey tag \"site: confirm 2^n\"), and \"with a crossover: P t R, P t r, p T R, p T r\" with a smaller font and the tag \"less common: only on a six\". On \"like your die\" the die rolls once more beside the table. Grey tag \"B8\". Hold about 2 seconds.",
        [
            "HandText write-on",
            "Enter slide",
            "DrawPath"
        ],
        "Hold about 2 seconds"
    ],
    "fertilise": [
        "new",
        "step rail \"6.",
        "Step 6: fertilisation by random draw: Step six: fertilisation.",
        "one at random / zygote",
        "Fertilise\". Two card stacks sit at the left and right of the bench, labelled \"parent 1 gametes\" and \"parent 2 gametes\".",
        "explain",
        "step rail \"6. Fertilise\". Two card stacks sit at the left and right of the bench, labelled \"parent 1 gametes\" and \"parent 2 gametes\". On \"shuffles\" each stack shuffles itself (cards riffle in code). On \"one at random\" one card flips from each stack (P T r and p t R). On \"together in one loop\" their bead chromosomes join in one string loop; tag \"zygote: 2n = 4\". On \"Record its genotype\" the line \"Pp Tt Rr\" writes on a tally sheet; on \"return the cards\" both cards slide back into their stacks and reshuffle. Hold about 1 second.",
        [
            "HandText write-on",
            "scribbleEllipse"
        ],
        "Hold about 1 second"
    ],
    "mutate": [
        "new",
        "step rail \"7.",
        "Step 7: add a mutation: Step seven: mutation.",
        "new allele / neither parent had / new one",
        "Mutate\". One gamete card is drawn; its R sticker peels off and an amber sticker lands in the same place, labelled \"R*\" (tag \"new allele\", B8 rule: amber only for a new allele).",
        "explain",
        "step rail \"7. Mutate\". One gamete card is drawn; its R sticker peels off and an amber sticker lands in the same place, labelled \"R*\" (tag \"new allele\", B8 rule: amber only for a new allele). On \"DNA change\" a small grey tag: \"in a cell that makes eggs or sperm (B8)\". On \"neither parent had\" the zygote forms with the amber sticker and both parents' cards show no amber (tags \"parent 1: no R*\", \"parent 2: no R*\"). On \"reshuffle\" the earlier white stickers pulse; on \"new one\" the amber sticker rings. Hold about 1 second.",
        [
            "scribbleEllipse"
        ],
        "Hold about 1 second"
    ],
    "results": [
        "new",
        "the tally table writes in the right zone: \"offspring genotype / tally / observed / expected\": \"RR / III / 3 / 4\", \"Rr / IIII IIII / 9 / 8\", \"rr / IIII / 4 / 4\".",
        "Results: expected against observed: Here's an example class result for just the seed-shape gene, from sixteen fertilisations.",
        "equally likely / expects / got",
        "On \"equally often\" two small gamete chips \"R\", \"r\" appear under each parent label. On \"equally likely\" four pairing chips write on, one per spoken pairing: \"R + R\", \"R + r\", \"r + R\", \"r + r\" (parent 1 allele first); on \"Two of the four\" the two middle chips bracket together, tagged \"1 of each\".",
        "explain",
        "the tally table writes in the right zone: \"offspring genotype / tally / observed / expected\": \"RR / III / 3 / 4\", \"Rr / IIII IIII / 9 / 8\", \"rr / IIII / 4 / 4\". On \"equally often\" two small gamete chips \"R\", \"r\" appear under each parent label. On \"equally likely\" four pairing chips write on, one per spoken pairing: \"R + R\", \"R + r\", \"r + R\", \"r + r\" (parent 1 allele first); on \"Two of the four\" the two middle chips bracket together, tagged \"1 of each\". A line writes: \"1 : 2 : 1, so of 16: 4, 8, 4\" (no grid; grey tag \"Punnett squares: next video\"). On \"expects\" the expected column writes; on \"got\" the observed column writes. A small column chart builds under the table: three category pairs, observed (solid) beside expected (outline), y-axis \"number of offspring\" from 0 to 10, x-axis \"genotype\". Tag: \"example data\". Hold about 2 seconds.",
        [
            "HandText write-on",
            "scribbleEllipse",
            "Enter reveals"
        ],
        "Hold about 2 seconds"
    ],
    "assess-strengths": [
        "new",
        "the assessment card writes in the right zone with three headings: \"Represents well\", \"Leaves out or distorts\", \"Keep it valid and reliable\".",
        "Assess: what the model represents well: Now assess the model.",
        "new combinations / restoring / predicts",
        "Rows in the first column, one per cue, each pen-linked to the bench: \"same genes at matching places\"; \"crossing over: new combinations, no new alleles\"; \"random direction for each pair (coin)\"; \"2n to n to 2n\" (counter chips \"4, 2, 4\"); \"predicts possible gametes\". The real cell plate b5x-cell-dividing-nospindle-v1.png sits small beside the string loop (tag \"real cell\").",
        "explain",
        "the assessment card writes in the right zone with three headings: \"Represents well\", \"Leaves out or distorts\", \"Keep it valid and reliable\". Rows in the first column, one per cue, each pen-linked to the bench: \"same genes at matching places\"; \"crossing over: new combinations, no new alleles\"; \"random direction for each pair (coin)\"; \"2n to n to 2n\" (counter chips \"4, 2, 4\"); \"predicts possible gametes\". The real cell plate b5x-cell-dividing-nospindle-v1.png sits small beside the string loop (tag \"real cell\"). Hold about 1 second.",
        [
            "scribbleEllipse"
        ],
        "Hold about 1 second"
    ],
    "assess-limits": [
        "new",
        "the second column fills, one row per cue: \"2 pairs: 4 combinations, so most variety is hidden; humans 23 pairs: 2^23, over 8 million\" (a number ticker runs from 4 to 8,388,608); \"crossover chosen: real position varies, often more than one\" (the chain shows two faint possible break points); \"mutation chosen: real ones rare, random, often no effect\"; \"no DNA, no spindle\" (a faint spindle outline ove",
        "Assess: limitations: Its limits matter too.",
        "over eight million / rare and random",
        "Hold about 2 seconds (reading hold).",
        "explain",
        "the second column fills, one row per cue: \"2 pairs: 4 combinations, so most variety is hidden; humans 23 pairs: 2^23, over 8 million\" (a number ticker runs from 4 to 8,388,608); \"crossover chosen: real position varies, often more than one\" (the chain shows two faint possible break points); \"mutation chosen: real ones rare, random, often no effect\"; \"no DNA, no spindle\" (a faint spindle outline over the loop with a grey \"not modelled\" tag). Hold about 2 seconds (reading hold).",
        [
            "Enter reveals"
        ],
        "Hold about 2 seconds (reading hold)"
    ],
    "valid-reliable": [
        "new",
        "the third column fills: \"valid (tests what meiosis really does): matching breaks, fresh die and coin each run, random draw\" (each pen-linked to the bench step); \"reliable (repeats agree): many repeats, pool the class\" (the tally table from scene 10 returns small; a pooled class row writes on beneath it with larger totals: \"class pooled: 41, 79, 40 / expected 40, 80, 40\", example data).",
        "Valid and reliable: To keep it valid, so it really tests what meiosis does, follow the real rules every time: break at matching points, roll and flip fresh each run, and draw at random.",
        "valid / reliable",
        "A crossed chip: \"one run is enough\". Hold about 1 second.",
        "explain",
        "the third column fills: \"valid (tests what meiosis really does): matching breaks, fresh die and coin each run, random draw\" (each pen-linked to the bench step); \"reliable (repeats agree): many repeats, pool the class\" (the tally table from scene 10 returns small; a pooled class row writes on beneath it with larger totals: \"class pooled: 41, 79, 40 / expected 40, 80, 40\", example data). A crossed chip: \"one run is enough\". Hold about 1 second.",
        [
            "HandText write-on",
            "Enter reveals"
        ],
        "Hold about 1 second"
    ],
    "attempt": [
        "new",
        "the board clears: no tally, no assessment card.",
        "Unseen transfer: attempt (countdown, 10 seconds), with every demand and condition on screen and nothing answer-bearing",
        "Your turn.",
        "The card for \"attempt (countdown, 10 seconds)\" writes on and stays up while the countdown ring runs through the answer-free thinking hold",
        "explain",
        "the board clears: no tally, no assessment card. The attempt card writes on: two parent chips \"R r\" and \"R r\"; a small results row of four offspring cards \"RR, Rr, Rr, Rr\"; the conclusion in a quote box \"rr offspring can't occur from these parents\". Key line: \"R = round allele, r = wrinkled allele\" (screen only). Givens line: \"4 fertilisations\". Demand: \"Evaluate their conclusion.\" One answer box. Nothing answer-bearing: no expected values, no fractions. The countdown ring starts after \"Pause here to answer.\" and runs for 10 seconds. The card stays on screen during and after the countdown.",
        [
            "Countdown ring",
            "Enter reveals"
        ],
        "Quiet answer-free thinking hold with a 10 second countdown"
    ],
    "feedback": [
        "adjust",
        "the card shrinks to a strip.",
        "Feedback (brief): The conclusion isn't supported.",
        "one time in four / one time in three / repeat",
        "On \"one time in four\" gamete chips \"r 1/2\" from each parent multiply to \"rr 1/4\". On \"three in four\" a chip \"not rr: 3/4\" appears under each of the four offspring cards; on \"one time in three\" the working line writes on: \"chance of no rr in 4 = 3/4 x 3/4 x 3/4 x 3/4 = (3/4)^4, about 0.32\".",
        "explain",
        "the card shrinks to a strip. On \"one time in four\" gamete chips \"r 1/2\" from each parent multiply to \"rr 1/4\". On \"three in four\" a chip \"not rr: 3/4\" appears under each of the four offspring cards; on \"one time in three\" the working line writes on: \"chance of no rr in 4 = 3/4 x 3/4 x 3/4 x 3/4 = (3/4)^4, about 0.32\". On \"repeat\" the pooled row from scene 13 flashes in small with its rr count. Answer line: \"not supported: rr expected 1/4; 4 trials is too few; repeat and pool\". On \"the model is wrong\" the chip \"the model is wrong\" writes on and takes a grey scribble cross, tag \"too few trials, not a bad model\". Hold about 1 second.",
        [
            "chip travel",
            "scribbleEllipse",
            "Mark cross"
        ],
        "Hold about 1 second"
    ],
    "decision-rule": [
        "new",
        "the plan card writes, one line per cue: \"Track by colour.\" \"Copy first.\" \"Die: cross over on a six, at matching points.\" \"Coin for each pair; random draw for fertilisation.\" \"Mutation: a new allele, on purpose.\" \"Repeat and pool.\" The bench shows the model small along the bottom.",
        "Decision rule and handoff: So, to model offspring variation: track each parent's chromosomes by colour, copy before dividing, cross over on a six at matching points, randomise every pair and every fertilisation, add a mutation on purpose, and repeat enough ",
        "Next",
        "On \"Next\" a chip \"Next: Punnett squares and pedigrees\" appears with a small coded 2 x 2 grid outline. Hold about 1 second.",
        "explain",
        "the plan card writes, one line per cue: \"Track by colour.\" \"Copy first.\" \"Die: cross over on a six, at matching points.\" \"Coin for each pair; random draw for fertilisation.\" \"Mutation: a new allele, on purpose.\" \"Repeat and pool.\" The bench shows the model small along the bottom. On \"Next\" a chip \"Next: Punnett squares and pedigrees\" appears with a small coded 2 x 2 grid outline. Hold about 1 second.",
        [
            "DrawPath",
            "Enter reveals"
        ],
        "Hold about 1 second"
    ],
    "key-notes": [
        "new",
        "Key notes card with the numbered notes and the memory aid",
        "Essentials to copy into books",
        "key notes",
        "Notes appear then stay still for copying",
        "hold",
        "The heading \"Key notes: what to write in your book\", the numbered notes and the memory aid appear and lock",
        [
            "Enter reveals"
        ],
        "Quiet copy hold of about 60 seconds with pause invitation"
    ]
}


BIO_BP03_ROWS = {
    "hook": [
        "new",
        "the desk strip draws.",
        "Hook (one class, one number): In one class, nine of the twenty-eight students who were counted have attached earlobes.",
        "Not yet / does and doesn't show",
        "A coded tally sheet on the painted clipboard (m5x-clipboard-sheet-v1.png) shows \"attached: 9 of 28\". On \"everyone your age\" the number zooms out to a wide coded field of small grey squares (abstract population, no people) with a \"?\" over it.",
        "explain",
        "the desk strip draws. A coded tally sheet on the painted clipboard (m5x-clipboard-sheet-v1.png) shows \"attached: 9 of 28\". On \"everyone your age\" the number zooms out to a wide coded field of small grey squares (abstract population, no people) with a \"?\" over it. On \"Not yet\" three chips write on under the field, one per cue: \"how collected?\", \"how big?\", \"how judged?\". On \"does and doesn't show\" the question writes on at the top left: \"How common is it, and how sure are you?\" Hold about 2 seconds.",
        [
            "HandText write-on",
            "DrawPath"
        ],
        "Hold about 2 seconds"
    ],
    "aim-characteristic": [
        "new",
        "the aim card writes on in the right zone.",
        "Aim and choosing a characteristic: The aim: collect data on how common a characteristic is in a population, present it clearly, and identify trends, patterns and limitations.",
        "easy to see / not sensitive / one-gene trait",
        "On \"easy to see\" a checklist writes beside it: \"visible\", \"quick to judge\", \"not sensitive\", \"can't identify anyone\", each with a teal tick. Two candidate chips drop in: \"earlobe shape\" and \"tongue rolling\" (words only, no pictures).",
        "explain",
        "the aim card writes on in the right zone. On \"easy to see\" a checklist writes beside it: \"visible\", \"quick to judge\", \"not sensitive\", \"can't identify anyone\", each with a teal tick. Two candidate chips drop in: \"earlobe shape\" and \"tongue rolling\" (words only, no pictures). A crossed chip \"health conditions\" fades in (tag \"sensitive: not for a class survey\"). On \"one-gene trait\" a small grey tag writes: \"many genes involved: count the characteristic; allele frequencies, see the roan cattle (B11)\". Hold about 1 second.",
        [
            "HandText write-on",
            "Enter reveals"
        ],
        "Hold about 1 second"
    ],
    "agreement-privacy": [
        "new",
        "step rail lights \"1.",
        "Agreement and privacy: Data about people needs their agreement.",
        "agreement / say no / no names",
        "Plan and agree\". A coded plan card writes on: \"teacher approval\", \"say what and why\", \"anyone can say no\".",
        "explain",
        "step rail lights \"1. Plan and agree\". A coded plan card writes on: \"teacher approval\", \"say what and why\", \"anyone can say no\". On \"say no\" one blank slip stays on the desk, unticked, with the tag \"no reason needed\". On \"no names\" a painted blank slip (from m5x-slip-box-v1.png, item 2) enlarges with a coded \"name: ___\" line that takes a grey cross, leaving three tick boxes. Tag: \"anonymous: can't be traced\". Hold about 1 second.",
        [
            "HandText write-on"
        ],
        "Hold about 1 second"
    ],
    "define-categories": [
        "new",
        "step rail \"2.",
        "Define the categories before counting: Next, write the definitions before anyone counts.",
        "free / attached / unsure / test the definitions",
        "Define\". The definition card writes in the right zone as a coded line diagram (no face, no head shape): in each of three panels, a vertical line tagged \"side of head\" and, beside it, a single ink outline of the lower half of an ear rim curving down into the lobe, with a pointer \"earlobe\" and a small dot \"join point\" where the lobe meets the line.",
        "explain",
        "step rail \"2. Define\". The definition card writes in the right zone as a coded line diagram (no face, no head shape): in each of three panels, a vertical line tagged \"side of head\" and, beside it, a single ink outline of the lower half of an ear rim curving down into the lobe, with a pointer \"earlobe\" and a small dot \"join point\" where the lobe meets the line. On \"free\" the first panel draws: the lobe rounds and hangs below the dot, the hanging part shaded teal and tagged \"hangs below the join\"; on \"attached\" the second: the rim runs straight into the line at the dot, amber outline, tagged \"joins directly\"; on \"unsure\" the third: a short lobe barely below the dot, grey, tagged \"in between\". On \"judge the same earlobe differently\" two coded tick marks land in different boxes for the same grey curve, with a pen \"?\" between them. On \"test the definitions\" three small practice outline curves appear under the card with two coded tick rows beneath; two ticks agree, one pair disagrees and the definition line \"hangs below the join\" gains an underline (tag \"sharpen the wording\"). Hold about 1 second.",
        [
            "DrawPath",
            "Enter reveals"
        ],
        "Hold about 1 second"
    ],
    "method": [
        "new",
        "step rail \"3.",
        "The method: Now the method.",
        "mirror / two people count",
        "Collect\". The painted slip box (m5x-slip-box-v1.png, item 2) sits centre-left; the hand mirror (m5x-hand-mirror-v1.png, item 1) lies on the desk with only a soft highlight in its glass.",
        "explain",
        "step rail \"3. Collect\". The painted slip box (m5x-slip-box-v1.png, item 2) sits centre-left; the hand mirror (m5x-hand-mirror-v1.png, item 1) lies on the desk with only a soft highlight in its glass. On \"or asks a partner to look\" a small grey tag writes beside the mirror: \"earlobes are visible anyway; the slip stays unnamed\". On \"ticks one box\" a coded tick lands in a slip's box; the slip folds and drops into the box slot (no hand); several more follow. On \"two people count\" the slips tip out in a neat pile and two coded tally columns build side by side on the clipboard, one per counter, in two pencil colours (m5x-pencil-v1.png small); on \"totals agree\" both columns end \"30\" with a teal tick between them. Hold about 1 second.",
        [
            "Enter reveals"
        ],
        "Hold about 1 second"
    ],
    "record-frequency": [
        "new",
        "step rail \"4.",
        "Record: the table and the frequency: Record the counts in a table: category, tally, count and frequency.",
        "thirty / which total / thirty-two per cent",
        "Record\". The table writes in the right zone (B11 table look): columns \"category / tally / count / frequency (%)\"; rows \"attached / IIII IIII / 9\", \"free / IIII IIII IIII IIII / 19\", \"unsure / II / 2\", \"total slips / 30\".",
        "explain",
        "step rail \"4. Record\". The table writes in the right zone (B11 table look): columns \"category / tally / count / frequency (%)\"; rows \"attached / IIII IIII / 9\", \"free / IIII IIII IIII IIII / 19\", \"unsure / II / 2\", \"total slips / 30\". On \"count divided by the total\" the formula line writes: \"frequency = count / total x 100\". On \"which total\" the 30 and a new \"classified: 28\" ring with a \"?\"; on \"Leave out the unsure slips\" the unsure row greys and a table footnote writes: \"frequency of the 28 classified (2 unsure left out)\". On \"thirty-two per cent\" the working \"9 / 28 x 100 = 32%\" writes in the attached row; then \"19 / 28 x 100 = 68%\" in the free row; a small check \"32 + 68 = 100\". Hold about 2 seconds.",
        [
            "scribbleEllipse"
        ],
        "Hold about 2 seconds"
    ],
    "pool": [
        "new",
        "the table shrinks to a strip; a four-row class table writes: \"class 1: 9 / 28 = 32%\", \"class 2: 6 / 27 = 22%\", \"class 3: 8 / 29 = 28%\", \"class 4: 7 / 26 = 27%\", then a bold total row \"pooled: 30 / 110 = 27%\".",
        "Pool the year group: One class is a small sample, so pool the results from four classes.",
        "pool / twenty-seven per cent / better estimate",
        "On \"pool\" the four tally sheets slide together into one. On \"jump around\" the four percentages pulse in turn; on \"better estimate\" the pooled row rings teal with the tag \"bigger sample\".",
        "explain",
        "the table shrinks to a strip; a four-row class table writes: \"class 1: 9 / 28 = 32%\", \"class 2: 6 / 27 = 22%\", \"class 3: 8 / 29 = 28%\", \"class 4: 7 / 26 = 27%\", then a bold total row \"pooled: 30 / 110 = 27%\". On \"pool\" the four tally sheets slide together into one. On \"jump around\" the four percentages pulse in turn; on \"better estimate\" the pooled row rings teal with the tag \"bigger sample\". Grey tag: \"add the counts, not the percentages\". Hold about 2 seconds.",
        [
            "scribbleEllipse"
        ],
        "Hold about 2 seconds"
    ],
    "column-graph": [
        "new",
        "step rail \"5.",
        "Present: a column graph: To present it, use a column graph, because the classes are separate groups, not points on a continuous scale.",
        "column graph / starting from zero",
        "Present\". A small tag on \"column graph\": \"column graph (a bar chart with vertical bars)\".",
        "explain",
        "step rail \"5. Present\". A small tag on \"column graph\": \"column graph (a bar chart with vertical bars)\". A coded column graph builds in the right zone: x-axis \"group\" with \"class 1, class 2, class 3, class 4, pooled\"; y-axis \"frequency of attached earlobes (%)\" from 0 to 40 in steps of 10; columns rise to 32, 22, 28, 27 and 27 (the pooled column in a darker fill); gaps between columns. On \"starting from zero\" the y-axis zero tick rings; a small inset shows the same columns on an axis starting at 20 with the differences looking huge, grey cross, tag \"axis must start at zero\". Title writes: \"Frequency of attached earlobes in four Year 12 classes (example data)\". A crossed chip \"line graph\" (tag \"categories, not a continuous scale\"). Hold about 2 seconds.",
        [
            "scribbleEllipse"
        ],
        "Hold about 2 seconds"
    ],
    "bead-model": [
        "new",
        "a small grey tag \"B11: small samples bounce\" writes at the top of the right zone on \"You saw earlier\".",
        "Why a bigger sample helps: a bead model: You saw earlier that small samples bounce around.",
        "test it yourself / Small samples scatter",
        "The painted bead bag (m5x-bead-bag-v1.png, item 3) sits centre with a coded tag \"200 beads: 50 red = 25%\". On \"draw ten\" ten bead plates (m5x-bead-red-v1.png, m5x-bead-white-v1.png, items 4 and 5) tumble out into a row (one red); they slide back in and the bag gives a small shake.",
        "explain",
        "a small grey tag \"B11: small samples bounce\" writes at the top of the right zone on \"You saw earlier\". The painted bead bag (m5x-bead-bag-v1.png, item 3) sits centre with a coded tag \"200 beads: 50 red = 25%\". On \"draw ten\" ten bead plates (m5x-bead-red-v1.png, m5x-bead-white-v1.png, items 4 and 5) tumble out into a row (one red); they slide back in and the bag gives a small shake. A dot-strip chart builds in the right zone: a horizontal axis 0 to 50 percent with a dashed line at 25 tagged \"true value\". On \"Ten-bead samples\" four amber dots land at 10, 40, 20 and 30 (row \"samples of 10\"); on \"Fifty-bead samples\" three teal dots land at 22, 28 and 26 (row \"samples of 50\"). On \"Small samples scatter\" a bracket spans the amber dots (tag \"wide spread\") and a narrow bracket spans the teal dots (tag \"close to 25%\"). Hold about 2 seconds.",
        [
            "DrawPath"
        ],
        "Hold about 2 seconds"
    ],
    "analyse-trend-pattern": [
        "new",
        "step rail \"6.",
        "Analyse: trend and pattern: Now analyse.",
        "trend / pattern",
        "Analyse\". The analysis card writes in the right zone, one row per cue, each pen-linked to the graph: \"Trend (overall direction): free more common in every class\" (the four columns' free complements show above each attached column as pale outlines); \"Pattern (a repeated feature): every class 22% to 32% attached\" (a bracket across the column tops).",
        "explain",
        "step rail \"6. Analyse\". The analysis card writes in the right zone, one row per cue, each pen-linked to the graph: \"Trend (overall direction): free more common in every class\" (the four columns' free complements show above each attached column as pale outlines); \"Pattern (a repeated feature): every class 22% to 32% attached\" (a bracket across the column tops). Hold about 1 second.",
        [
            "Enter reveals"
        ],
        "Hold about 1 second"
    ],
    "analyse-relationship": [
        "new",
        "the analysis card stays; its third row writes: \"Relationship (two characteristics change together): needs both on each slip\" (a coded slip with two rows of boxes, \"earlobes\" and \"tongue rolling\").",
        "Analyse: a relationship: A relationship is when two characteristics change together, so each slip needs both, like earlobes and tongue rolling.",
        "relationship / no relationship",
        "On \"Say twenty\" a 2 x 2 count grid fills: rows \"attached (30)\", \"free (80)\", columns \"can roll\", \"can't roll\": 20, 10 / 54, 26 (tag \"example data\"); on \"sixty-seven\" and \"sixty-eight\" two short bars draw beside the grid, \"attached: 20 / 30 = 67%\" and \"free: 54 / 80 = 68%\", nearly level; on \"no relationship\" a bracket joins the two bar tops with the tag \"about the same: no relationship in this sample\". On \"association",
        "explain",
        "the analysis card stays; its third row writes: \"Relationship (two characteristics change together): needs both on each slip\" (a coded slip with two rows of boxes, \"earlobes\" and \"tongue rolling\"). On \"Say twenty\" a 2 x 2 count grid fills: rows \"attached (30)\", \"free (80)\", columns \"can roll\", \"can't roll\": 20, 10 / 54, 26 (tag \"example data\"); on \"sixty-seven\" and \"sixty-eight\" two short bars draw beside the grid, \"attached: 20 / 30 = 67%\" and \"free: 54 / 80 = 68%\", nearly level; on \"no relationship\" a bracket joins the two bar tops with the tag \"about the same: no relationship in this sample\". On \"association, not proof\" a tag writes: \"association, not cause (B11)\". A sentence-starter strip writes along the bottom: \"In this sample, ... was more common than ...\" Hold about 1 second.",
        [
            "DrawPath",
            "Enter reveals"
        ],
        "Hold about 1 second"
    ],
    "limitations": [
        "new",
        "the limitations card writes, three columns \"Limitation / Why it matters / Improvement\", one row per cue: \"one school, 110 students / may not represent other places / sample several schools\"; \"self-judging, in-between lobes / classification errors / clear definition card, unsure box, practise on the diagrams first\"; then two summary chips: \"valid: measures what it claims (clear definitions, unsure ",
        "Limitations, validity and reliability: Then the limits.",
        "one school / valid / reliable",
        "On \"in this sample\" a pair of chips: \"in this sample\" (teal tick) and \"in all people\" (grey cross). Hold about 2 seconds (reading hold).",
        "explain",
        "the limitations card writes, three columns \"Limitation / Why it matters / Improvement\", one row per cue: \"one school, 110 students / may not represent other places / sample several schools\"; \"self-judging, in-between lobes / classification errors / clear definition card, unsure box, practise on the diagrams first\"; then two summary chips: \"valid: measures what it claims (clear definitions, unsure box)\" and \"reliable: repeats agree (two counters, pool classes, recount)\". On \"in this sample\" a pair of chips: \"in this sample\" (teal tick) and \"in all people\" (grey cross). Hold about 2 seconds (reading hold).",
        [
            "Enter reveals"
        ],
        "Hold about 2 seconds (reading hold)"
    ],
    "attempt": [
        "new",
        "the board clears: no tables, graphs or cards from earlier.",
        "Unseen transfer: attempt (countdown, 10 seconds), with every demand and condition on screen and nothing answer-bearing",
        "eighteen attached / forty-two free / thirty attached / thirty free",
        "The card for \"attempt (countdown, 10 seconds)\" writes on and stays up while the countdown ring runs through the answer-free thinking hold",
        "explain",
        "the board clears: no tables, graphs or cards from earlier. The attempt card writes on: a two-row table \"group / attached / free\": \"A / 18 / 42\", \"B / 30 / 30\". Demands: \"(a) Frequency of attached earlobes in each group.\" \"(b) Compare the groups.\" \"(c) One limitation of the data.\" Three answer boxes. Nothing answer-bearing: no totals column, no percentages, no formula. The countdown ring starts after \"Pause here to answer.\" and runs for 10 seconds. The card stays on screen during and after the countdown.",
        [
            "Countdown ring",
            "Enter reveals"
        ],
        "Quiet answer-free thinking hold with a 10 second countdown"
    ],
    "feedback": [
        "adjust",
        "the card shrinks to a strip.",
        "Feedback (brief): Each group has sixty people.",
        "thirty per cent / fifty per cent",
        "On \"sixty people\" a totals column writes on: \"60\", \"60\". On \"thirty per cent\" the working \"18 / 60 x 100 = 30%\" writes in row A; on \"fifty per cent\" \"30 / 60 x 100 = 50%\" in row B.",
        "explain",
        "the card shrinks to a strip. On \"sixty people\" a totals column writes on: \"60\", \"60\". On \"thirty per cent\" the working \"18 / 60 x 100 = 30%\" writes in row A; on \"fifty per cent\" \"30 / 60 x 100 = 50%\" in row B. Answer lines: \"(b) higher in group B (50% vs 30%) in these samples\"; \"(c) small sample from one school; difference could be chance\". On \"eighteen by forty-two\" the chip \"18 / 42 = 43%\" writes on and takes a grey scribble cross, tag \"divide by the whole group\". Hold about 1 second.",
        [
            "chip travel",
            "scribbleEllipse",
            "Mark cross"
        ],
        "Hold about 1 second"
    ],
    "decision-rule": [
        "new",
        "the plan card writes, one line per cue: \"Agree; anonymous.\" \"Define first (with unsure).\" \"Two counters.\" \"Frequency = count / stated total.\" \"Column graph from zero.\" \"Name the limits; 'in this sample'.\" The column graph returns small along the bottom.",
        "Decision rule and handoff: So, to collect frequency data well: get agreement and keep it anonymous, define the categories first, count with two people, divide by the right total and say which one, graph it clearly, and name the limits.",
        "Next",
        "On \"Next\" a chip \"Next: DNA sequencing and profiling\" appears with a small coded base-tile row. Hold about 1 second.",
        "explain",
        "the plan card writes, one line per cue: \"Agree; anonymous.\" \"Define first (with unsure).\" \"Two counters.\" \"Frequency = count / stated total.\" \"Column graph from zero.\" \"Name the limits; 'in this sample'.\" The column graph returns small along the bottom. On \"Next\" a chip \"Next: DNA sequencing and profiling\" appears with a small coded base-tile row. Hold about 1 second.",
        [
            "Enter reveals"
        ],
        "Hold about 1 second"
    ],
    "key-notes": [
        "new",
        "Key notes card with the numbered notes and the memory aid",
        "Essentials to copy into books",
        "key notes",
        "Notes appear then stay still for copying",
        "hold",
        "The heading \"Key notes: what to write in your book\", the numbered notes and the memory aid appear and lock",
        [
            "Enter reveals"
        ],
        "Quiet copy hold of about 60 seconds with pause invitation"
    ]
}


LESSONS = {
    'b3b': {
        'design': D + 'lessons/bio-m5-b03b.md',
        'meta': {'title': 'How do farmers use reproduction, and what does it cost?', 'subtitle': 'A dairy farmer and a wheat breeder each want a particular parent. How do they get it, and how would you judge whether it is worth it?', 'subject': 'Biology', 'yearLevel': 12, 'module': 5, 'lesson': 7,
                 'lessonIntent': 'Describe artificial insemination in dairy cattle and artificial pollination in wheat and the reproduction knowledge each uses, explain why copying a winner gives a shared weakness, and evaluate each method by gain, variety, cost and welfare in a model answer that gives a judgement, reasons, a weighing and a verdict that says when.'},
        'hold_seconds': 10,
        'ids': ['hook', 'insemination', 'heat-timing', 'gain-and-risk', 'fertility-cost', 'pollination', 'pollination-knowledge', 'shared-weakness', 'cloning', 'evaluate', 'model-judgement-gain', 'model-variety-cost', 'model-verdict', 'attempt', 'feedback-one', 'feedback-two', 'memory', 'key-notes'],
        'progression': {
            'prerequisiteKnowledge': 'The first video of this series: clone, alleles, variation, asexual copying is fast and alike while sexual reproduction is slow and varied, and the Cavendish banana as a clone with one shared weakness. The plant reproduction video: anthers make pollen, a stigma receives it, a pollen tube carries sperm to the egg, pollination is not fertilisation, bags keep pollen out. The mammal videos: sperm must reach an egg and an egg is released at ovulation. Not assumed: selective breeding, artificial insemination, artificial pollination, gene pool, semen, being on heat, rust, evaluate, criteria.',
            'startsWith': 'A dairy farmer who wants calves from a bull that lives hours away, and a wheat breeder who wants the yield of one variety and the rust resistance of another.',
            'stopsAfter': 'Saying what artificial insemination and artificial pollination do and which reproduction knowledge each depends on; saying why copying a winner gives a uniform crop and a shared weakness; defining evaluate as making a judgement using criteria and using gain, variety, cost and welfare as a good start; building a model Evaluate answer with a judgement, gain with evidence, variety, cost and welfare, and a weighing with a verdict that says when; applying the same reasoning to an unseen sheep case and an unseen plant fault.',
            'nextLesson': 'DNA structure and semi-conservative replication: how a cell copies its DNA, the step behind every clone and every egg and sperm.'},
        'teaching': {
            'task': 'Explain how farmers use knowledge of reproduction to improve animals and crops, and evaluate the gain and the cost of each method.',
            'causalExplanation': 'Artificial insemination works because an egg is ready for only a short time around ovulation, so semen that is collected, split into doses and usually frozen can be placed in the cow during heat from a bull on any farm. Artificial pollination works because anthers make pollen, pollen landing on a stigma leads to a pollen tube that carries sperm to the egg, and bags keep other pollen out. Both speed up improvement by picking few parents, and the same reach narrows the gene pool, so one disease can reach every animal or plant, and chasing one trait can harm another. A good evaluation weighs the gain, the variety, the cost and the welfare and says when the method is worth it.',
            'conversationalApproach': 'Opens on two farmers with a wish and a distance or a disease, shows what each person does with their hands before naming the method, fills one scorecard of gain, variety, cost and welfare across the three methods, then names evaluate and builds a model answer one card at a time before an unseen sheep and wheat case.',
            'openingDecision': 'A dairy farmer wants calves from the best bull in the country and a wheat breeder wants yield and rust resistance in one plant. How could each of them use what we know about reproduction, and how would you judge whether it is worth the cost?',
            'understandingCheck': 'Give one benefit, one ten-year risk and one change that keeps the benefit for a sheep farmer using one champion ram, and name why many seedlings are not resistant and two steps that fix it when a wheat breeder places pollen on open flowers of a plant that pollinates itself.',
            'curriculumScope': 'Evaluate the impact of scientific knowledge on the manipulation of plant and animal reproduction in agriculture (Module 5). Embryo transfer, general selective breeding, DNA and the nucleus, cloning of animals and the 6-mark Assess question are held back.'},
        'design_block': {
            'renderer': RENDERER,
            'visualSystem': 'Explainer engine: warm paper stage, handwritten Caveat headings, amber doodle layer, painted dairy bull and cow, wheat ear and floret, and wheat leaf with rust plates beside coded straws, freezer, cycle strip, gene pool bead tray, scorecard, model answer cards, attempt boards and countdown. Colour key: green gain, blue variety, amber cost, rose welfare, flat grey tags for risks so nothing reads as a score.',
            'transitionPlan': 'The hook plates slide in side by side; the bull plate stays while the straw route draws; the tract outline enlarges for the timing scene; the scorecard and gene pool tray appear in the gain and risk scene and stay in the same positions; the camera pushes into one wheat floret; the flower cutaway crossfades in as a recall; the potato and banana plates crossfade in; the scorecard enlarges for the evaluate scene and cards stack for the model answer; the attempt board removes the scorecard and tray and they return in the feedback and memory scenes; scene crossfade with settle.'},
        'rows': B3B_ROWS,
    },
    'b4': {
        'design': D + 'lessons/bio-m5-b04.md',
        'meta': {'title': 'How does DNA copy itself so accurately?', 'subtitle': 'A cell has to copy billions of DNA letters almost without error. How, and what happens to the original?', 'subject': 'Biology', 'yearLevel': 12, 'module': 5, 'lesson': 8,
                 'lessonIntent': 'Describe a DNA nucleotide, complementary and antiparallel base pairing and the template idea, explain the copying steps and semi-conservative replication, trace a short molecule into two labelled daughters, and qualify errors as rare, proofread and repaired, with a surviving error called a mutation.'},
        'hold_seconds': 10,
        'ids': ['hook', 'nucleotides', 'pairing', 'antiparallel', 'template', 'copy-steps', 'semi-conservative', 'worked-molecule', 'worked-bottom', 'worked-top', 'worked-daughters', 'errors-repair', 'errors-effects', 'attempt', 'feedback-one', 'feedback-two', 'memory', 'key-notes'],
        'progression': {
            'prerequisiteKnowledge': 'The first video of this series: DNA is inherited information, a gene is a section of DNA, alleles are versions, a copying error is a mutation. The video on single-celled organisms: a cell copies its DNA, shares it, then splits. Year 11: DNA exists, bases are named, covalent and hydrogen bonds, enzymes. Not assumed: nucleotide, deoxyribose, phosphate group, nitrogenous base, double helix, complementary, antiparallel, 5 prime and 3 prime, template, helicase, DNA polymerase, replication fork, semi-conservative, daughter molecule, proofreading.',
            'startsWith': 'A cell that must copy billions of DNA letters before it divides, in a nucleus smaller than a pinhead, and the question of what happens to the original.',
            'stopsAfter': 'Naming the parts of a nucleotide and the bonds in the backbone and the middle; pairing A with T and C with G and saying why only those pairs fit; saying what antiparallel means; explaining why one strand fixes the order of the other; saying how the strands separate and what DNA copying adds; defining semi-conservative replication and tracing a short molecule into two labelled daughters; qualifying errors; writing a new strand with its ends on an unseen template; tracing a heavy tag through two rounds of copying. No leading and lagging strands, no Okazaki fragments, no RNA.',
            'nextLesson': 'Mitosis: how a cell shares its copied DNA between two new cells when it divides.'},
        'teaching': {
            'task': 'Explain how DNA is copied accurately while its information is kept, and trace the original strands through a copy.',
            'causalExplanation': 'DNA is a chain of nucleotides with a sugar and phosphate backbone and a base that carries the letter. Because A fits only T and C fits only G, each strand fixes the order of its partner and so acts as a template. Weak hydrogen bonds let the strands separate without breaking either backbone. Helicase separates them, loose nucleotides pair with the exposed bases, and DNA polymerase joins them into a new backbone, so each daughter molecule keeps one original strand and one new strand. Proofreading and repair fix almost every mistake, and one that survives becomes a mutation that is copied into later cells.',
            'conversationalApproach': 'Opens on the size of the copying job, builds the molecule from one nucleotide to a ladder, uses jigsaw pieces and an apple-and-car aid for pairing, shows the copying as three numbered steps, and then works a four-pair molecule into two coloured daughters one stage at a time before an unseen strand and heavy-tag trace.',
            'openingDecision': 'A cell has to copy billions of DNA letters almost without error. How can DNA be copied accurately, and what happens to the original?',
            'understandingCheck': 'Write the new strand under an unseen template written 5 prime to 3 prime and label both ends, and trace a heavy tag through two rounds of copying to say how many strands in each of four molecules are heavy and light.',
            'curriculumScope': 'Replication of DNA using the Watson and Crick model, including nucleotide composition, pairing and bonding (Module 5). Leading and lagging strands, ligase, Okazaki fragments, RNA and chromosome structure are held back.'},
        'design_block': {
            'renderer': RENDERER,
            'visualSystem': 'Explainer engine: warm paper stage, handwritten Caveat headings, amber doodle layer, coded nucleotide, base tiles with jigsaw outlines, strand ribbons with direction arrows and 5 prime and 3 prime tags, hydrogen bond dots, fork, helicase and polymerase icons, a numbered step strip and the amoeba plate in the hook. Colour key: blue original strands and green new strands from the copying scene on, neutral backbones before it, warm tiles for A and T, purple tiles for C and G, flat grey tags for mismatches.',
            'transitionPlan': 'The amoeba plate pushes into its nucleus and a DNA thread draws out; one nucleotide enlarges and more snap on; the helix flattens into the ladder board; the ladder stays through direction, template and copying scenes; the numbered strip lands and stays; the worked example clears to a clean four-rung ladder and builds one strand at a time; the attempt board removes the key and hints and the ladder returns in the feedback; scene crossfade with settle.'},
        'rows': B4_ROWS,
    },
    'b5a': {
        'design': D + 'lessons/bio-m5-b05a.md',
        'meta': {'title': 'How does a cell divide so both new cells keep every chromosome?', 'subtitle': 'A graze heals with new skin cells that each need the full instructions. How does one cell divide into two exact copies?', 'subject': 'Biology', 'yearLevel': 12, 'module': 5, 'lesson': 9,
                 'lessonIntent': 'Explain why DNA is copied before sharing, describe a copied chromosome as two sister chromatids joined at a centromere and count chromosomes by centromeres, place copying in interphase, name the four steps of mitosis and cytokinesis, track chromosome and chromatid numbers, and explain why mitosis does not halve the number.'},
        'hold_seconds': 10,
        'ids': ['hook', 'chromosome-sets', 'diploid-haploid', 'why-copy-first', 'the-copy', 'interphase', 'prophase', 'anaphase', 'telophase-cytokinesis', 'tracking', 'identical', 'not-perfect', 'uses', 'attempt', 'feedback-one', 'feedback-two', 'memory', 'key-notes'],
        'progression': {
            'prerequisiteKnowledge': 'The first video of this series: chromosomes hold DNA, a gamete carries one set and two gametes joining make two sets, a copying error is a mutation. The single-celled organisms video: copy, share, split. The mammal video: the zygote divides and every new cell keeps the full two sets. The DNA copying video: DNA is copied accurately before a cell divides and each copy keeps one original strand. Not assumed: homologous pair, diploid, haploid, chromatid, sister chromatids, centromere, interphase, S phase, mitosis, prophase, metaphase, anaphase, telophase, cytokinesis, spindle fibres, nuclear envelope.',
            'startsWith': 'A graze that heals with new skin cells that each need the same 46 chromosomes, and the question of how a cell divides so both new cells keep every chromosome.',
            'stopsAfter': 'Saying what a chromosome set, homologous pair, diploid and haploid mean; saying why DNA is copied before sharing and what a copied chromosome looks like; counting chromosomes by centromeres; placing the copying in interphase; naming the four steps of mitosis and cytokinesis and what happens in each; tracking chromosome and chromatid numbers for a model cell and a human cell; explaining why each new cell gets one copy of every chromosome; qualifying accurate, not perfect; naming what mitosis is used for; applying the count and stage names to an unseen cell. No meiosis beyond a closing handoff.',
            'nextLesson': 'Meiosis: how a cell ends up with one set instead of two to make gametes.'},
        'teaching': {
            'task': 'Explain how a cell divides so both new cells keep every chromosome, and track the numbers of chromosomes and chromatids through mitosis.',
            'causalExplanation': 'A chromosome cannot be cut in half without losing half its instructions, so the DNA is copied first in interphase and each chromosome becomes two identical sister chromatids joined at a centromere. In mitosis the chromosomes coil, spindle fibres attach to every centromere and line them up, the centromeres split and the fibres pull one chromatid of each chromosome to each end, and two new nuclei form before the cell splits. Each separated chromatid is a chromosome, so each new cell has one copy of every chromosome and the number is never halved.',
            'conversationalApproach': 'Starts from a healing graze, builds sets and pairs from visible counts, shows why copying must come first, teaches the counting rule on the picture, runs the four steps on a four-chromosome model cell with a tracker, repeats the numbers for a human cell, and gives IPMAT only after the steps are understood.',
            'openingDecision': 'Scrape your knee and new skin fills the gap, and each new cell needs every chromosome. How does a cell divide so that both new cells keep every chromosome, an exact copy of the parent\'s?',
            'understandingCheck': 'Give the chromosome and chromatid counts after copying and the chromosome count in each new cell for a fruit fly body cell with 8 chromosomes, and name the stage and count the chromosomes in a drawn cell with six X-shaped chromosomes lined up across the middle.',
            'curriculumScope': 'Model the processes of cell replication, including mitosis, and assess the effect on continuity of species (Module 5). Meiosis, G1 and G2 by name, kinetochores, centrioles, cyclins, cancer and non-disjunction diseases are held back.'},
        'design_block': {
            'renderer': RENDERER,
            'visualSystem': 'Explainer engine: warm paper stage, handwritten Caveat headings, amber doodle layer, coded skin patch, painted chromosome and cell plates from Codex brief 54 (single and duplicated chromosomes in pink and teal, the dividing, spindle-free and pinching cell, and a five-plate zoom-out recall) under coded centromere discs, spindle fibres, nuclear envelope, cycle ring, count tracker, numbered stage strip, labels and arrows. Colour key: plum is one parent\'s set and teal the other\'s, sister chromatids always the same colour, cream centromere discs with ink outline, amber for tags and emphasis, grey for crossed wrong ideas; blue and green are not used.',
            'transitionPlan': 'The skin patch heals and a camera settles on a nucleus; bars draw on and two cell outlines compare sets; the board clears to the model cell; bars duplicate into X shapes; the cycle ring draws on around a small model cell; the stage strip builds chip by chip through prophase, metaphase, anaphase and telophase; the count tracker draws on and parks small for the identical scene; the attempt board removes the tracker and strip and they return in the feedback and memory scenes; scene crossfade with settle.'},
        'rows': B5A_ROWS,
    },
    'b5b': {
        'design': D + 'lessons/bio-m5-b05b.md',
        'meta': {'title': 'How does meiosis halve the chromosome number and make different gametes?', 'subtitle': 'Two brothers have the same parents yet can look quite different. How does a cell make gametes with half the chromosomes, each one different?', 'subject': 'Biology', 'yearLevel': 12, 'module': 5, 'lesson': 10,
                 'lessonIntent': 'Explain why gametes must be haploid, describe meiosis as one copying and two divisions making four haploid cells, say what happens in prophase I, metaphase I, anaphase I and meiosis II, explain crossing over and independent assortment as new combinations of existing alleles, count 2 to the power n combinations, and contrast mitosis and meiosis.'},
        'hold_seconds': 10,
        'ids': ['hook', 'why-halve', 'model-alleles', 'prophase-one', 'crossing-what', 'crossing-makes', 'metaphase-one-line-up', 'independent-assortment', 'first-division', 'second-division', 'four-cells', 'tracking', 'combinations', 'fertilisation', 'compare', 'attempt', 'feedback-one', 'feedback-two', 'memory', 'key-notes'],
        'progression': {
            'prerequisiteKnowledge': 'The mitosis video: chromosome, set, homologous pair, diploid, haploid, chromatid, sister chromatids, centromere, the counting rule, interphase and S phase, the four steps of mitosis, the model cell and the human 46, 92, 92, 46 tracker. The first video of this series: a gamete carries one set, alleles are versions of a gene, sexual reproduction gives new combinations. The DNA copying video: DNA is copied accurately before division. Not assumed: meiosis, prophase I, metaphase I, anaphase I, the second division, crossing over, non-sister chromatids, independent assortment, 2 to the power n.',
            'startsWith': 'Two brothers with the same parents who look different, and the question of how a cell halves its chromosome number and makes gametes that differ from each other.',
            'stopsAfter': 'Saying why gametes must be haploid; saying meiosis is one copying and two divisions making four haploid cells; saying what happens in prophase I, metaphase I, anaphase I and meiosis II; tracking chromosome and chromatid numbers; saying why crossing over and assortment make new combinations but not new alleles; counting whole-chromosome combinations as 2 to the power n; saying how fertilisation restores the number; contrasting mitosis and meiosis on the same model; applying the counts and stage recognition to an unseen case. No Punnett squares, no genotype ratios, no non-disjunction.',
            'nextLesson': 'DNA in prokaryotes and eukaryotes: how DNA is arranged in different kinds of cell. The later variation video returns to crossing over, assortment, random fertilisation and mutation together.'},
        'teaching': {
            'task': 'Explain how meiosis halves a cell\'s chromosome number and makes gametes that differ from each other.',
            'causalExplanation': 'If gametes were made by mitosis each would carry two sets and the number would double every generation, so a cell copies its DNA once and divides twice. In prophase I homologous partners pair gene against gene and non-sister chromatids swap matching pieces, which makes new combinations of existing alleles. In metaphase I the pairs line up and each pair faces either way by chance, in anaphase I the homologous partners separate with their centromeres intact, which halves the number of sets, and in meiosis II the sister chromatids separate. Fertilisation then joins two haploid gametes and restores the number.',
            'conversationalApproach': 'Starts from two different brothers, shows the doubling problem with a crossed chain, reuses the model cell with alleles marked, runs each stage with the same stage strip as mitosis, tracks the numbers on the same tracker, counts combinations with coins and a doubling grid, and compares the two divisions on the model cell.',
            'openingDecision': 'Two brothers have the same parents and each began from one sperm and one egg carrying one set of chromosomes. How does a cell halve its chromosome number and make gametes that differ from each other?',
            'understandingCheck': 'For a pea plant body cell with 14 chromosomes in 7 pairs and no crossing over, give the chromosomes in each gamete, the number of combinations and the chromosomes in a fertilised egg, and name the division and stage and the chromosome count per cell for a drawn cell with six lined-up chromosomes in three pairs.',
            'curriculumScope': 'Model meiosis, crossing over and independent assortment and explain chromosome continuity (Module 5). Sub-stage names inside prophase I, chiasma, linkage, non-disjunction, spermatogenesis and oogenesis detail and genotype prediction are held back.'},
        'design_block': {
            'renderer': RENDERER,
            'visualSystem': 'Explainer engine: warm paper stage, handwritten Caveat headings, amber doodle layer, the b05a model cell on the painted Codex brief 54 chromosome and cell plates (single, duplicated and homologous pair chromosomes in pink and teal; dividing, spindle-free and pinching cells), with coded centromere discs, allele beads with dotted same-gene links, a crossing-over mask, spindle fibres, stage strip with meiosis I and II dividers, count tracker, combinations grid and compare board. Colour key: plum is one parent\'s set and teal the other\'s, cream centromere discs with ink outline, alleles as white beads with a letter, amber for tags and emphasis, grey for crossed wrong ideas.',
            'transitionPlan': 'The family scene draws gametes into zygotes; the doubling chain is crossed and the board wipes to the correct chain; the b05a model cell returns and gains allele beads; the stage strip lands with a meiosis I divider; a camera push reaches the paired chromosomes for crossing over; the board stays for metaphase I and the ghost line-up appears beside it; the second-division chips land with a divider and the left cell enlarges; the four-cell row builds under the parent; the tracker draws on and shrinks; the compare board builds beside the full tracker; the attempt board removes tracker and strip and they return in the feedback; scene crossfade with settle.'},
        'rows': B5B_ROWS,
    },
    'b6a': {
        'design': D + 'lessons/bio-m5-b06a.md',
        'meta': {'title': 'How does DNA differ in prokaryotic and eukaryotic cells?', 'subtitle': 'A cell holds metres of DNA in a space thousands of times smaller. How is it arranged in a bacterium and in your cells, and how does it still get used?', 'subject': 'Biology', 'yearLevel': 12, 'module': 5, 'lesson': 11,
                 'lessonIntent': 'Explain that both cell types store genes in the same DNA and differ in where it is kept and how it is arranged, describe a bacterium\'s circular chromosome in the nucleoid with plasmids and a eukaryote\'s linear chromosomes wound on histones in a nucleus, explain why the winding is adjustable, describe the circular DNA in mitochondria and chloroplasts, and compare the forms in one sentence.'},
        'hold_seconds': 10,
        'holds': ['attempt', 'attempt-two'],
        'ids': ['hook', 'two-kinds-of-cell', 'bacterium-ring', 'coiling', 'plasmids', 'eukaryote-linear', 'why-thread-winds', 'nucleosome-chromatin', 'loosen-to-read', 'tight-for-division', 'organelle-dna', 'side-by-side', 'writing-comparison', 'memory', 'attempt', 'feedback-one', 'attempt-two', 'feedback-two', 'decision-rule', 'key-notes'],
        'progression': {
            'prerequisiteKnowledge': 'B4 to B5b and the single-celled organisms video: DNA is a double helix of two strands with four bases (A, T, C, G) copied accurately before division; a chromosome is one long DNA molecule, and the human body cell has 46 in two sets of 23; chromosomes are condensed for mitosis; bacteria divide by binary fission, have no nucleus, pass DNA by conjugation and can be antibiotic resistant; mitochondria release energy from food and chloroplasts carry out photosynthesis; opposite charges attract. Not assumed: prokaryote, eukaryote, nucleoid, plasmid, histone, nucleosome, chromatin, circular and linear molecules, supercoiling, endosymbiosis.',
            'startsWith': 'About two metres of DNA in a nucleus a few thousandths of a millimetre across, and the question of how a cell stores DNA this long and still uses it, with a bacterium that has no nucleus for comparison.',
            'stopsAfter': 'Saying the difference is where DNA is kept and how it is arranged, not what it is made of; naming prokaryote and eukaryote by the nucleus; describing a bacterium\'s usual DNA (one circular chromosome in the nucleoid, no membrane, coiled and held by proteins) and plasmids; describing a eukaryote\'s DNA (several linear chromosomes in a nucleus, wound on histones as nucleosomes and chromatin, loosened to read a gene and tightened for division); describing the small circular DNA in mitochondria and chloroplasts and why it looks bacterial; comparing the forms side by side; applying all of it to two unseen cells described only by their DNA and to explaining why a resistance gene on a plasmid can spread faster than one on the main chromosome. No Griffith or Avery history, no transformation, no archaeal histones, no nucleosome numbers, no transcription detail.',
            'nextLesson': 'B6b: how a cell reads one gene by copying a section of DNA into mRNA.'},
        'teaching': {
            'task': 'Compare how DNA is arranged in a prokaryotic and a eukaryotic cell and explain why the arrangement matters.',
            'causalExplanation': 'Both cell types store genes in the same double helix, so the difference is where it is kept and how it is arranged. A bacterium has no nucleus, so its main DNA is one ring lying in the membrane-free nucleoid, and because the ring is several hundred times longer than the cell, enzymes twist it and proteins grip the coils to hold it compact, with plasmids as small separate rings. A eukaryote keeps several linear chromosomes in a nucleus, and because DNA is negatively charged and histones positively charged, the thread winds on histones into nucleosomes and chromatin. The winding is adjustable, so the cell can loosen the thread to read a gene and tighten it before division. Mitochondria and chloroplasts keep their own small rings because they came from bacteria.',
            'conversationalApproach': 'Opens on two metres of thread in a tennis-ball nucleus, keeps one fixed split board of bacterium and eukaryote cell throughout, dims the half not being explained, explains each cause before naming the term, uses a thread-on-spool picture and a twisted rubber band with their limits stated, builds the side-by-side table, teaches the compare sentence frame, and checks with two harder unseen items, each followed by a model answer built one point at a time.',
            'openingDecision': 'If you unwound the DNA in one of your cells you would have a thread about two metres long in a nucleus a few thousandths of a millimetre across. How does a cell store it and still use it, and does a bacterium do it differently?',
            'understandingCheck': 'For two cells described only by their DNA, identify each as precisely as possible with evidence (X: linear DNA on histones in a membrane compartment plus circular DNA in two kinds of organelle, so a eukaryote and most likely a plant cell; Y: one ring with no membrane, held by proteins, plus plasmids, so a prokaryote such as a bacterium) and explain why X\'s organelle DNA is circular; then explain why a resistance gene on a plasmid can spread through a mixed population faster than one on the main chromosome.',
            'curriculumScope': 'Construct appropriate representations to model and compare the forms in which DNA exists in eukaryotes and prokaryotes (Module 5, p1045). The learner construction stays with the practical-style video. Griffith and Avery, transformation, archaeal histones, nucleosome numbers and transcription are held back.'},
        'design_block': {
            'renderer': RENDERER,
            'visualSystem': 'Explainer engine: warm paper stage, handwritten Caveat headings, amber doodle layer, one deep plum DNA thread colour for every ring, rod and thread, warm sand histone spools, dashed ink rings for membranes and solid ink for walls, a fixed split board (bacterium left, eukaryotic cell right), thread and spool winding, a coiling ring, scale bars and a compare table. Amber is the tag and emphasis colour; blue and green are not used.',
            'transitionPlan': 'The hook board splits into the fixed bacterium and eukaryote halves; the half not being explained dims to about 30 per cent through scenes 3 to 9; camera pushes reach the bacterium and the rod; the spool plate fades while the wound discs stay; the compare table builds on the same split board with both halves at full strength and stays for the sentence frame; each attempt card clears the aids and its feedback follows at once, turning the card\'s evidence into pictures and model-answer lines (item two grows into two 16-cell populations); the next chip slides in; scene crossfade with settle.'},
        'rows': B6A_ROWS,
    },
    'b6b': {
        'design': D + 'lessons/bio-m5-b06b.md',
        'meta': {'title': 'How does a cell copy a gene into mRNA?', 'subtitle': 'Your DNA never leaves the nucleus, yet ribosomes outside it build proteins. How does a cell copy one gene, and why does it need a copy at all?', 'subject': 'Biology', 'yearLevel': 12, 'module': 5, 'lesson': 12,
                 'lessonIntent': 'Explain why a cell needs an mRNA copy of a gene, give three differences between RNA and DNA, describe how RNA polymerase binds the promoter, separates the strands and builds mRNA by pairing with the template strand, state which way each strand runs and why, write the mRNA for a given template with its ends, say that the mRNA matches the coding strand with U for T, describe release and export, contrast transcription with replication, and name codons as groups of three.'},
        'hold_seconds': 10,
        'holds': ['attempt', 'attempt-two'],
        'ids': ['hook', 'gene-and-mrna', 'rna-differences', 'polymerase-promoter', 'template-strand', 'direction', 'worked-copy', 'coding-check', 'release-export', 'many-copies', 'not-replication', 'codons-cftr', 'memory', 'attempt', 'feedback-one', 'attempt-two', 'feedback-two', 'decision-rule', 'key-notes'],
        'progression': {
            'prerequisiteKnowledge': 'B4 to B6a: DNA nucleotides with A pairing T and C pairing G by hydrogen bonds; antiparallel strands with 5\' and 3\' ends; one strand acts as a template; a gene is a section of DNA; eukaryotic DNA is wound on histones in a nucleus with an envelope and is loosened where a gene is read; bacteria have no nucleus. Year 11: enzymes, organelles, the nuclear envelope. Not assumed: RNA, uracil, ribose, mRNA, transcription, RNA polymerase, promoter, template and coding strand as transcription terms, nuclear pore, codon.',
            'startsWith': 'The DNA stays in the nucleus while the ribosomes that build proteins are outside it, and the question of how the instructions in a gene get from one place to the other.',
            'stopsAfter': 'Saying why a copy is needed; defining a gene; giving three differences between RNA and DNA; describing how RNA polymerase binds the promoter, separates the strands and builds mRNA by pairing with the template strand (A with U, T with A, C with G, G with C); saying which way each strand runs and why; writing the mRNA for a given template with ends; saying the mRNA matches the coding strand with U for T; describing release, the unchanged gene and export through a nuclear pore; saying why many temporary copies help; contrasting transcription with replication; naming codons as groups of three; predicting that a changed template base changes a codon. It does not say what codons mean. No pre-mRNA processing, transcription factors or polymerase types.',
            'nextLesson': 'B6c: how a ribosome turns the mRNA code into a chain of amino acids.'},
        'teaching': {
            'task': 'Explain how a cell copies one gene into mRNA and why it needs a copy, and write the mRNA for a given strand with its ends.',
            'causalExplanation': 'The DNA stays in the nucleus and the ribosomes are outside, so the cell sends out a copy of the gene. RNA polymerase binds the promoter and opens the strands, and it copies only the template strand because the template fixes every base of the mRNA. New nucleotides join only at the 3\' end, so the mRNA grows 5\' to 3\' and, because paired strands run in opposite directions, the template is read 3\' to 5\'. U pairs with A as T does, so the mRNA matches the coding strand with U for T. The gene re-pairs behind the polymerase and is unchanged; the mRNA leaves through a nuclear pore, and many temporary copies let one gene make a lot of protein, with control by stopping the copying.',
            'conversationalApproach': 'Opens on the painted cell and the problem of a gene stuck in the nucleus, explains the copy with a recipe-book analogy and states where it breaks, builds the RNA differences on the molecules, shows one strand and the direction as separate beats, works the site template tile by tile with wrong tiles turned away, checks against the coding strand, then asks two harder unseen items, each followed by a model answer built one point at a time.',
            'openingDecision': 'Your DNA never leaves the nucleus, but the machines that build proteins are outside it. How does a gene get out?',
            'understandingCheck': 'Given a double strand with ends labelled and the polymerase moving left to right, identify the template strand using the direction rule and write the mRNA with its 5\' and 3\' ends (top strand 3\' TGC AAT CGG 5\' is the template; mRNA 5\' ACG UUA GCC 3\'). Then explain why a toxin that stops RNA polymerase moving along DNA makes a cell produce less and less protein although the DNA and ribosomes are undamaged.',
            'curriculumScope': 'Model the process of polypeptide synthesis, including transcription and translation, and assess the importance of mRNA and tRNA (Module 5, ACSBL079). This video owns transcription and the importance of mRNA; translation and tRNA are the next video. Pre-mRNA processing, transcription factors, polymerase types and what each codon means are deferred.'},
        'design_block': {
            'renderer': RENDERER,
            'visualSystem': 'Explainer engine: warm paper stage, handwritten Caveat headings, amber doodle layer, the painted cell protein synthesis plate and recipe book, and a coded transcription board (nucleus close-up with a dashed envelope arc and a pore, plum DNA ladder, B4 jigsaw base tiles with a new amber U tile, a terracotta mRNA strand, an ochre RNA polymerase bean, end tags and process arrows). The coding strand dims to about 35 per cent while the template is read. Blue and green are not used for mRNA.',
            'transitionPlan': 'The painted cell opens the lesson and the camera zooms into the coded nucleus board; the analogy plate slides in and out; the board persists through scenes 3 to 8 with the polymerase and the dim rule carrying attention; the camera pans to the envelope arc and cuts back out to the painted cell for the export; the board splits once for the replication contrast; each attempt card clears the aids and its feedback follows at once, turning the card into pictures and model-answer lines; the next chip slides in; scene crossfade with settle.'},
        'rows': B6B_ROWS,
    },
    'b6c': {
        'design': D + 'lessons/bio-m5-b06c.md',
        'meta': {'title': 'How does a ribosome turn mRNA into a polypeptide?', 'subtitle': 'An mRNA message has only four bases, but proteins are built from twenty amino acids. How does a four-letter message build a chain?', 'subject': 'Biology', 'yearLevel': 12, 'module': 5, 'lesson': 13,
                 'lessonIntent': 'Explain why codons are three bases, describe the ribosome and tRNA, write a directed anticodon for a codon, use the codon chart with mRNA codons, describe start at AUG, the repeating cycle and stop codons, say that a polypeptide must fold before it works, assess the importance of mRNA and tRNA, and apply all of it to a DNA template with a chart excerpt and to an antibiotic that makes bacterial ribosomes misread codons.'},
        'hold_seconds': 10,
        'holds': ['attempt', 'attempt-two'],
        'ids': ['hook', 'why-three', 'ribosome', 'trna-adaptor', 'codon-anticodon', 'codon-chart', 'start', 'elongate', 'stop', 'polypeptide-to-protein', 'both-rnas', 'memory', 'attempt', 'feedback-one', 'attempt-two', 'feedback-two', 'decision-rule', 'key-notes'],
        'progression': {
            'prerequisiteKnowledge': 'B6b: mRNA is a single strand of RNA copied from one gene, built 5\' to 3\' with U in place of T; it leaves the nucleus through pores to ribosomes in the cytoplasm; it is read in codons of three bases; a gene usually codes for a polypeptide, a chain of amino acids that folds into a protein; RNA pairing is A with U and C with G. B4: antiparallel strands with 5\' and 3\' ends. B6a: mitochondria came from bacteria that began living inside larger cells. Year 11: enzymes, the cytoplasm, rough endoplasmic reticulum. Not assumed: translation, ribosome structure, rRNA, tRNA, anticodon, start and stop codons, peptide bond, the codon chart.',
            'startsWith': 'An mRNA message written in four bases, proteins built from twenty amino acids, and the question of how the message is read and what acts as the translator.',
            'stopsAfter': 'Explaining why codons are three bases; describing the ribosome (small and large subunits, protein and rRNA, in the cytoplasm); describing tRNA (one specific amino acid, an anticodon, many kinds loaded by enzymes); writing a directed anticodon for a codon; using the codon chart with mRNA codons; describing start at AUG (methionine), the repeating cycle and stop codons; saying a polypeptide must fold before it works as a protein; assessing the roles of mRNA and tRNA; applying all of it to a DNA template with a chart excerpt and to an antibiotic that makes bacterial ribosomes misread codons. No A, P and E site names, wobble, protein structure levels, mutation types or sedimentation labels.',
            'nextLesson': 'B07: proteins, phenotype and gene-environment interaction: how the order of amino acids decides a protein\'s shape and job.'},
        'teaching': {
            'task': 'Explain how a ribosome turns a code of four bases into a chain of amino acids, and use the codon chart and a directed anticodon on an unseen sequence.',
            'causalExplanation': 'Four bases can name only four amino acids and pairs only sixteen, but triplets give sixty-four, more than enough for twenty, so the code is read in threes. The ribosome holds the mRNA and moves along it one codon at a time but does not choose amino acids; tRNA is the adaptor, with an anticodon that pairs antiparallel with a codon at one end and one particular amino acid, loaded by an enzyme, at the other. The chart is written for mRNA codons. Translation starts at AUG, then each round a matching tRNA arrives, rRNA joins the amino acids with a peptide bond and the ribosome moves one codon, until a stop codon, which no tRNA matches, lets a release protein free the chain. The order of codons sets the order of amino acids, and the polypeptide then has to fold. mRNA sets the order and tRNA makes the code readable, so both are essential.',
            'conversationalApproach': 'Opens on the strand leaving the pore and the four-to-twenty puzzle, works out why three bases by counting, builds the ribosome and tRNA one need at a time, keeps ends on every anticodon, runs one four-codon message from start to stop on one board with a chain tally, assesses both RNAs by removing each in turn, gives a stop-codon mnemonic and the language aid, then asks two harder unseen items, each followed by a model answer built one point at a time.',
            'openingDecision': 'A message written with four bases has to build a chain made from twenty kinds of amino acid. How does it do that?',
            'understandingCheck': 'Given the DNA template 3\' TAC TTC GGA ACT 5\' and a chart excerpt, write the amino acid sequence (Met, Lys, Pro, with UGA a stop that adds none), explain why there are three amino acids, and write the anticodon for the second amino acid with its ends (3\' UUC 5\'). Then explain how streptomycin can kill bacteria while the patient\'s own cytoplasmic ribosomes keep working, and suggest why it can affect mitochondrial ribosomes.',
            'curriculumScope': 'Model the process of polypeptide synthesis, including translation, and assess the importance of mRNA and tRNA (Module 5, ACSBL079). Function and phenotype of proteins go to the proteins lesson; A, P and E sites, wobble, mutation types and protein structure levels are deferred.'},
        'design_block': {
            'renderer': RENDERER,
            'visualSystem': 'Explainer engine: warm paper stage, handwritten Caveat headings, amber doodle layer, the painted ribosome flipped in code so the large subunit is on top, the painted cell and bacterium plates, and a coded translation board (terracotta mRNA with B4 jigsaw tiles and amber U, two slots, lilac-grey L-shaped tRNAs with directed anticodon tiles, warm-coloured named amino acid beads, ink peptide bonds that flash amber, a 4 by 4 codon chart filled by the ported lookup). Blue and green are not used.',
            'transitionPlan': 'The strand leaves the painted pore and the camera pushes in; the cell plate crossfades to the flipped ribosome plate; the translation board persists from the ribosome scene to the both-RNAs scene with the givens line holding the worked message; the codon chart and the three-station strip take the board for one scene each; each attempt card clears the aids and its feedback follows at once, turning the card into pictures and model-answer lines; the next chip slides in; scene crossfade with settle.'},
        'rows': B6C_ROWS,
    },
    'b7': {
        'design': D + 'lessons/bio-m5-b07.md',
        'meta': {'title': 'How does a chain of amino acids become a trait, and why can the same genes give different results?', 'subtitle': 'A ribosome builds a chain of amino acids. How does that chain become a trait you can see, and why can the same genes give different results?', 'subject': 'Biology', 'yearLevel': 12, 'module': 5, 'lesson': 14, 'lessonIntent': 'Name five jobs proteins do, explain why a chain folds into one shape and the four levels of structure, explain why shape decides function and why a changed amino acid can but need not change it, trace sickle cell from one base change to the trait, say why genes becoming traits directly skips steps, define genotype and phenotype, explain a same-genotype different-phenotype case, assess genes and environment together, analyse why polypeptide synthesis matters, and apply all of it to a temperature-sensitive enzyme and to two base changes read from a codon chart.'},
        'hold_seconds': 10,
        'holds': ['attempt', 'attempt-two'],
        'ids': ['hook', 'protein-jobs', 'why-fold', 'shape-job', 'sickle-base', 'sickle-trait', 'no-shortcut', 'environment', 'genes-and-environment', 'why-synthesis', 'memory', 'attempt', 'feedback-one', 'attempt-two', 'feedback-two', 'decision-rule', 'key-notes'],
        'progression': {'prerequisiteKnowledge': 'B6c: a polypeptide is a chain of amino acids in the order set by the codons and must fold before it works; codon chart use with mRNA codons. B6b: a gene is the stretch of DNA that codes for a polypeptide; a changed template base changes a codon. B4: a surviving copying error is a mutation. B1: alleles are versions of a gene and a clone has the same genes as its parent. Year 11 Biology: enzymes and active sites, cells and membranes, haemoglobin carries oxygen in red blood cells. Not assumed: protein jobs as a classification, why chains fold, levels of structure, phenotype, genotype, polygenic, gene-environment interaction.', 'startsWith': 'One hydrangea cloned into two gardens that flower blue and pink, with the question of how a chain of amino acids becomes a trait you can see and how identical genes give different results.', 'stopsAfter': 'Naming five jobs proteins do with an example of each; explaining why a chain folds into one shape and the four levels of structure; explaining why shape decides function and why a changed amino acid can, but need not, change it; tracing sickle cell from one base change to the trait; saying why genes become traits skips steps; defining genotype and phenotype; explaining a same-genotype, different-phenotype case with its mechanism; assessing genes and environment together; analysing why polypeptide synthesis matters; applying all of it to a temperature-sensitive enzyme and to two base changes read from a codon chart. No alpha helix and beta sheet by name, no gene regulation, no mutation types, no epigenetics.', 'nextLesson': 'B8: sources of genetic variation, where the different genotypes in one family come from.'},
        'teaching': {'task': 'Explain how a chain of amino acids becomes a trait, and why the same genes can give different results in different environments.', 'causalExplanation': 'The twenty amino acids differ: some avoid water and tuck into the middle of the chain, some carry opposite charges that attract, and two cysteines can lock together, so the order of amino acids decides which parts meet and therefore the shape. Proteins work by fitting, so a change in an active site can stop the fit, while a change far from it or to the same amino acid may not. In sickle cell, one base change turns a glutamate codon into a valine codon, and valine avoids water, so with two copies and low oxygen the haemoglobin molecules stick into fibres that bend the red cells, which block small vessels and break down early. Genes do not become traits directly: the gene codes for a polypeptide, which folds into a protein, which changes what a cell does. The same genotype can give different phenotypes because the environment changes what the proteins produce, for example soil aluminium binding the hydrangea pigment, without changing the alleles.', 'conversationalApproach': "Opens on cloned hydrangeas of two colours and last video's chain, shows five protein jobs on real objects, builds the fold from the amino acids' differences, shows shape deciding the job, runs sickle cell as one full chain on a five-station strip, names genotype and phenotype after the causes, gives the hydrangea mechanism and height, weighs genes against environment, explains why synthesis matters, adds the memory aids, then asks two harder unseen items with a short pause and brief model answers.", 'openingDecision': 'The same genes give blue flowers in one garden and pink in another. How does a chain of amino acids become a trait you can see, and how can the same genes give different results?', 'understandingCheck': 'A Himalayan rabbit has dark fur only on its cool extremities, and a shaved back patch under an ice pack regrew dark: explain why and predict the fur of its young. Then in two snapdragon lines, read a codon chart to explain why a histidine to proline change in an active site gives white flowers while GAA to GAG leaves them red.', 'curriculumScope': 'Model the process of polypeptide synthesis and analyse its importance, assess how genes and environment affect phenotypic expression, and investigate the structure and function of proteins in living things (Module 5, ACSBL079 to ACSBL081). The video gives the knowledge an investigation needs and does not claim the practical. Gene regulation, mutation types, protein structure by name, carrier advantage and epigenetics are deferred.'},
        'design_block': {'renderer': RENDERER, 'visualSystem': 'Explainer engine: warm paper stage, handwritten Caveat headings, amber doodle layer, painted hydrangea, enzyme and substrate, red blood cell, normal and sickle cell, muscle cell, blood typing, snapdragon and rabbit plates, and coded bead chains that fold, a chain-to-trait strip of five stations, haemoglobin fibres, a range bar and a trait spectrum. B6c beads carry a printed three-letter name, never colour only. Blue and green are used only inside the painted hydrangea plates.', 'transitionPlan': 'The painted hydrangea opens the lesson and the bead chain drifts in from the previous video; the jobs board builds tile by tile; the fold chain returns beside the enzyme plate; the chain-to-trait strip builds in the sickle cell scene and stays as a thin header to the synthesis scene; each attempt card clears the aids and its feedback shrinks the card to a strip and builds the model answer one point at a time; the next chip slides in; scene crossfade with settle.'},
        'rows': B7_ROWS,
    },
    'b8': {
        'design': D + 'lessons/bio-m5-b08.md',
        'meta': {'title': 'Same two parents, different offspring: where does genetic variation come from?', 'subtitle': 'Two parents, one pod of seeds. Why are the offspring different from each other, and where does a brand-new allele come from?', 'subject': 'Biology', 'yearLevel': 12, 'module': 5, 'lesson': 15, 'lessonIntent': "Sort the four sources of genetic variation into reshuffling existing alleles and making new alleles, trace a parent's alleles to its own parents and into four gamete types under stated assumptions, explain why genes on the same chromosome are reshuffled only by crossing over and why those combinations are usually less common, multiply gamete types at fertilisation, explain why siblings share alleles but differ, say mutation is the only source of new alleles and is inherited only from the egg or sperm line, separate genetic from environmental variation, say why variation matters, and apply all of it to an unseen fly cell and an unseen strawberry experiment."},
        'hold_seconds': 10,
        'holds': ['attempt', 'attempt-two'],
        'ids': ['hook', 'two-jobs', 'trace-parent', 'same-chromosome', 'fertilisation', 'siblings', 'mutation', 'genetic-or-environmental', 'why-it-matters', 'memory', 'attempt', 'feedback-one', 'attempt-two', 'feedback-two', 'decision-rule', 'key-notes'],
        'progression': {'prerequisiteKnowledge': "B5b: homologous pairs, crossing over in prophase I makes new combinations of existing alleles, independent assortment at metaphase I, 2 to the power n (2 to the power 23 is more than 8 million), fertilisation restores the number, and letters are labels only. B5a: diploid, haploid, chromosome sets. B4: a copying error that survives proofreading and repair is a mutation, inherited only if it is in a cell that makes gametes. B7: genotype, phenotype, the same genotype in different environments, and the environment does not change the genotype. B2b: pollen tube, ovule, a pea pod's seeds are fertilised ovules. B1: clones, runners and variation helps a species survive change. Not assumed: tracing alleles across generations, genes on one chromosome travelling together, multiplying gamete types, genetic against environmental variation.", 'startsWith': 'A pea pod whose seeds all have the same two parents yet differ, with the question of why offspring differ and whether one could carry an allele neither parent had.', 'stopsAfter': "Sorting the four sources into reshuffling existing alleles and making new alleles; tracing a parent's alleles to its own parents and listing four gamete types for two genes on different chromosomes with the assumptions stated; explaining why genes on the same chromosome are reshuffled only by crossing over and why those combinations are usually less common; multiplying gamete types at fertilisation; explaining why siblings share alleles but differ; saying mutation is the only source of new alleles and is inherited only from the egg or sperm line; separating genetic from environmental variation; saying why variation matters; applying all of it to an unseen fly cell and an unseen strawberry experiment. No linkage maps, no dominance or Punnett squares, no mutation types, no non-disjunction.", 'nextLesson': 'P02: model meiosis, fertilisation and mutation yourself; then B9: predict offspring with Punnett squares and pedigrees.'},
        'teaching': {'task': 'Explain where the differences between offspring of the same parents come from, and where a brand-new allele comes from.', 'causalExplanation': 'Crossing over, independent assortment and random fertilisation only rearrange alleles that already exist, like dealing new hands from the same deck, while mutation changes the DNA itself, so it is the only source of a new allele. A parent that got one set of chromosomes from each of its own parents makes four kinds of gamete for two genes on different chromosomes because each pair lines up either way on its own. Assortment moves whole chromosomes, so two genes on the same chromosome stay together until a swap between them, which happens in only some cells, so the swapped combinations are usually less common. Any pollen grain can reach any ovule, so fertilisation multiplies the gamete types. Siblings share alleles but differ because each came from different gametes, with no new mutation needed. A mutation is inherited only if it is in a cell that makes eggs or sperm. Environmental differences between clones are not inherited because the environment does not change the alleles in the gametes.', 'conversationalApproach': "Opens on a pod of different seeds from the same two parents, sorts the four sources by whether they reshuffle or make something new, traces one parent's alleles back and forward on one origin board, adds the same-chromosome case, multiplies at fertilisation, explains siblings and mutation with the white-eyed fly, separates genetic from environmental variation, says why variation matters, gives the memory aid, then asks two harder unseen items with a short pause and brief model answers.", 'openingDecision': 'Seeds from one pod have the same two parents, yet they differ. Why, and where could a brand-new allele come from?', 'understandingCheck': "A cell in a fruit fly's ovary has D and E on one chromosome, d and e on its partner, and F and f on another pair: list the egg combinations with no crossing over, the extra ones with crossing over between D and E, and why those are less common. Then explain the variation in strawberry plants grown from runners against plants grown from seeds, and say which differences could be passed on through seeds.", 'curriculumScope': 'Model the formation of new combinations of genotypes produced during meiosis and the knowledge half of the investigation of crossing over, fertilisation and mutation (Module 5, B5-IQ4-01 and B5-IQ4-02, ACSBL084). The video models on screen and does not claim learner modelling. Linkage maps, dominance, Punnett squares, mutation types and non-disjunction are deferred.'},
        'design_block': {'renderer': RENDERER, 'visualSystem': 'Explainer engine: warm paper stage, handwritten Caveat headings, amber doodle layer, painted ovary, pod, pea seed, fly, hydrangea, strawberry, sperm and egg plates, the B5b dividing cell plate with plum and teal chromosome plates, and coded allele beads, an origin board of three generation rows, a pairing grid, number tickers and a variation split. Allele beads are white with an outline and a letter; amber is reserved for a new allele and only a mutation bead is ever amber-filled.', 'transitionPlan': 'The pod opens the lesson and crossfades from the ovary; the source chips sort into two bins; the origin board draws in three rows and persists from the tracing scene to the siblings scene, zooming to the long pair for the same-chromosome scene; the ovary and pod return for fertilisation; the DNA ladder and the fly jar carry mutation; the variation split carries the genetic against environmental scene; each attempt card clears the aids and its feedback shrinks the card to a strip and builds the model answer one point at a time; the next chips slide in; scene crossfade with settle.'},
        'rows': B8_ROWS,
    },
    'b9': {
        'design': D + 'lessons/bio-m5-b09.md',
        'meta': {"title": "Two tall parents, one short offspring: how do we predict inheritance and read it from a family tree?", "subtitle": "Two tall pea plants have a short offspring. How does that happen, how do we predict it, and how can a family tree show whether a trait is dominant or recessive?", "subject": "Biology", "yearLevel": 12, "module": 5, "lesson": 16, "lessonIntent": "Explain why one allele can hide another, use dominant, recessive, homozygous and heterozygous correctly, build a Punnett square for two heterozygotes and read the genotype and phenotype ratios as chances for each offspring, use a test cross, read pedigree symbols, identify autosomal recessive and dominant patterns citing numbered individuals, and apply all of it to an unseen pedigree and an unseen data set."},
        'hold_seconds': 10,
        'holds': ['attempt', 'attempt-two'],
        'ids': ['hook', 'hide-allele', 'gametes', 'punnett', 'chance-per-offspring', 'test-cross', 'read-pedigree', 'recessive-pedigree', 'dominant-pedigree', 'giveaways', 'attempt', 'feedback-one', 'attempt-two', 'feedback-two', 'decision-rule', 'key-notes'],
        'progression': {"prerequisiteKnowledge": "B8, B7, B5b, B2b, B1 and Year 10: tracing a parent's alleles into gametes, with letters as labels only (B8); genes code for polypeptides, many proteins are enzymes, genotype and phenotype (B7); homologous chromosomes separate in meiosis I so each gamete gets one of each pair (B5b); pea flowers and self-pollination (B2b); alleles as versions of a gene (B1); one in four and a half (Year 10 probability). Not assumed: dominant, recessive, homozygous, heterozygous, Punnett square, test cross, pedigree symbols, carrier, autosome.", "startsWith": "Mendel's tall pea plants whose short offspring vanished and came back, with the question of how two tall plants can have a short offspring and how a family tree can show the same kind of thing in people.", "stopsAfter": "Explaining why one allele can hide another; using dominant, recessive, homozygous and heterozygous; building a 2 x 2 Punnett square and reading 1 : 2 : 1 and 3 : 1; saying a ratio is a chance for each offspring and not a guaranteed count; using a test cross; reading pedigree symbols; identifying autosomal recessive and dominant patterns with numbered individuals; turning a pedigree into genotypes and a per-child probability. No sex linkage, no incomplete dominance, co-dominance or multiple alleles, no dihybrid crosses, no conditional probability.", "nextLesson": "B10: sex linkage and alleles that are not simply dominant or recessive; then G02 for unfamiliar crosses and pedigrees."},
        'teaching': {"task": "Predict offspring with a Punnett square and decide from a pedigree whether an autosomal trait is dominant or recessive.", "causalExplanation": "One working copy of a gene can make enough of a protein, so the tall allele shows with one copy and is dominant, while the short allele barely works and shows only with two copies. In meiosis the two chromosomes of each pair separate, so each gamete gets one allele of each gene and a heterozygous plant makes two kinds of gamete in equal numbers. A Punnett square lays out every equally likely fertilisation, so two heterozygotes give 1 : 2 : 1 genotypes and 3 : 1 phenotypes as a chance for each offspring, not a guaranteed count for every group of four. A test cross works because the short parent can only give the short allele, so one short offspring shows the tall parent carries it. In a pedigree, unaffected parents with an affected child must each carry a hidden recessive allele, and affected parents with an unaffected child must each carry a hidden recessive allele that the dominant allele covers, which shows the condition is dominant. Naming numbered individuals is the evidence.", "conversationalApproach": "Opens on Mendel's vanishing and returning short plants, explains why one allele hides another with an enzyme, builds the gamete step and the square one box at a time, shows a ratio as a chance with replayed families, uses a test cross, teaches pedigree symbols, traces a recessive and a dominant family generation by generation, gives the hidden-in-the-parents memory aid, then asks two unseen items with a short pause and brief feedback.", "openingDecision": "Mendel crossed tall and short pea plants and every offspring was tall, yet when those tall plants self-pollinated 277 of 1,064 were short. How can two tall plants have a short offspring, and how can a family tree tell us the same kind of thing about people?", "understandingCheck": "In an unseen autosomal pedigree, say whether the condition is dominant or recessive using numbered individuals, give two genotypes and find the chance that the next child is unaffected. Then round seed by wrinkled seed gives 52 round and 48 wrinkled: find the round parent's genotype with a square and explain why the counts are not exactly 50 : 50.", "curriculumScope": "Model the formation of new combinations of genotypes produced during meiosis, including interpreting examples of autosomal inheritance, and construct and interpret information and data from pedigrees and Punnett squares (Module 5, B5-IQ4-02, ACSBL085). Sex linkage, incomplete dominance, co-dominance, multiple alleles, dihybrid crosses and conditional probability are deferred."},
        'design_block': {'renderer': RENDERER, "visualSystem": "Explainer engine: warm paper stage, handwritten Caveat headings, amber doodle layer, painted tall and short pea plants, round and wrinkled seed plates, the B5b plum and teal chromosome plates, and coded allele chips, gamete discs, a Punnett grid, a ratio strip, a family replay, a data-driven pedigree with standard symbols and an autosome strip. Allele chips are cream with an ink outline and a printed letter; the top parent is edged plum and the side parent teal. Amber is emphasis only. No people are drawn.", "transitionPlan": "The painted plants open the lesson and carry the cross board from scene 2 to scene 6, with the grid shrinking to the corner for the chance scene; the board wipes to the pedigree board for scenes 7 to 10; each attempt card clears the board and its feedback shrinks the card to a strip and builds the model answer one point at a time; the next chips slide in; scene crossfade with settle."},
        'rows': B9_ROWS,
    },
    'b10': {
        'design': D + 'lessons/bio-m5-b10.md',
        'meta': {"title": "Why don't all crosses give 3 to 1? Sex linkage, incomplete dominance, co-dominance and multiple alleles", "subtitle": "Why don't all crosses give 3 to 1, and how do you tell which pattern you are looking at?", "subject": "Biology", "yearLevel": 12, "module": 5, "lesson": 17, "lessonIntent": "Explain why a recessive X-linked allele shows in a male, build X-linked crosses and read sons and daughters separately including all children against sons, recognise the X-linked recessive pedigree pattern and the exclusion of an affected daughter of an unaffected father, tell complete, incomplete and co-dominance apart by reading the heterozygote first, explain ABO as three alleles with two per person, predict ABO crosses, and apply the patterns to an unseen colour blindness family and an unseen ABO family."},
        'hold_seconds': 10,
        'holds': ['attempt', 'attempt-two'],
        'ids': ['hook', 'sex-chromosomes', 'morgan-cross', 'haemophilia', 'x-linked-pedigree', 'heterozygote-first', 'incomplete-dominance', 'co-dominance', 'abo', 'abo-surprise', 'memory', 'attempt', 'feedback-one', 'attempt-two', 'feedback-two', 'decision-rule', 'key-notes'],
        'progression': {"prerequisiteKnowledge": "B9, B8, B7 and B5b: dominant, recessive, homozygous, heterozygous, carrier, autosome, the 2 x 2 square, ratios as chances per offspring, pedigree symbols and the giveaways (B9); the white-eyed male fly that appeared by mutation in 1910 (B8); genes code for enzymes and the white snapdragon with a non-working pigment enzyme (B7); each gamete gets one of each pair (B5b). Not assumed: genes on sex chromosomes, X-linked notation, incomplete dominance, co-dominance, multiple alleles, antigens.", "startsWith": "Morgan's white-eyed flies that were all male, with the question of why eye colour should care whether a fly is male or female and why not every cross gives 3 to 1.", "stopsAfter": "Saying a gene on the X has no partner on the Y so one recessive allele shows in a male; building X-linked crosses and reading sons and daughters separately; recognising the X-linked recessive pedigree pattern and ruling it out with an affected daughter of an unaffected father; reading the heterozygote first to tell complete, incomplete and co-dominance apart; explaining ABO as three alleles with two per person and predicting ABO crosses. No X-linked dominance, no Y-linked traits, no Rh factor, no conditional probability.", "nextLesson": "G02: unfamiliar crosses and pedigrees with competing modes; then B11: frequencies of characteristics in a population."},
        'teaching': {"task": "Explain why some crosses do not give 3 to 1, and tell sex linkage, incomplete dominance, co-dominance and multiple alleles apart.", "causalExplanation": "A gene on the X has no partner on the Y, so a male with one recessive allele has nothing to hide it and shows it, while a female needs two. A father gives his X to every daughter and his Y to every son, so sons depend on the mother, a father never passes an X-linked allele to a son, and all his daughters are carriers. That is why X-linked recessive conditions are far more common in males and why an affected daughter of an unaffected father rules the pattern out. For other relationships, read the heterozygote first. One working enzyme copy makes less pigment, so a snapdragon heterozygote is pink, and the alleles do not blend because red and white return. In roan cattle each hair is fully red or fully white, so both alleles are expressed. Two heterozygotes give 1 : 2 : 1 in both because the heterozygote looks different from both homozygotes. The ABO gene has three alleles in the population but each person carries two, A and B are co-dominant, and the i enzyme does not work, so type O is only two i alleles and an A parent and a B parent who each carry i can have any group.", "conversationalApproach": "Opens on the white-eyed flies that were all male, builds the sex chromosomes and Morgan's cross on a square with daughter and son bands, applies it to haemophilia and the pedigree pattern, then asks why not every cross gives 3 to 1 and teaches incomplete dominance, co-dominance and ABO by reading the heterozygote first, gives the memory aids, then asks two harder unseen items with a short pause and brief feedback.", "openingDecision": "Morgan's F2 flies gave white eyes again, but every white-eyed fly was male. Why would eye colour care whether a fly is male or female, and why do not all crosses give 3 to 1?", "understandingCheck": "Red-green colour blindness is an X-linked recessive allele: a woman with normal vision whose father was colour-blind has children with a man with normal vision, so find the chance of a colour-blind son among all children and among sons, and say whether a daughter could be colour-blind. Then a type A mother and a type B father have a type O child: give the genotypes and the chance that the next child is type AB.", "curriculumScope": "Model the formation of new combinations of genotypes produced during meiosis, including interpreting examples of sex-linkage, co-dominance, incomplete dominance and multiple alleles, and construct and interpret information from pedigrees and Punnett squares (Module 5, B5-IQ4-02, ACSBL085). X-linked dominance, Y-linked traits, Rh factor, epistasis and conditional probability are deferred."},
        'design_block': {'renderer': RENDERER, "visualSystem": "Explainer engine: warm paper stage, handwritten Caveat headings, amber doodle layer, painted red and white-eyed flies, snapdragons, roan cattle and red blood cells, and coded X and Y chips with allele tags, daughter and son bands on the Punnett grid, a heterozygote board of rows, hair and petal zoom circles, antigen marks on a cell, a data-driven pedigree and a genotype table. Genotypes use superscripts on screen, never colour only. No people are drawn.", "transitionPlan": "The B8 jar and fly plates open the lesson and give way to the sex chromosome panels and the cross board for scenes 2 to 5; the heterozygote board builds one row per relationship from scene 6 to scene 9 and the cross board returns for the ABO square; each attempt card clears the board and its feedback shrinks the card to a strip and builds the model answer one point at a time; the next chip slides in; scene crossfade with settle."},
        'rows': B10_ROWS,
    },
    'b13': {
        'design': D + 'lessons/bio-m5-b13.md',
        'meta': {"title": "What Big Population Genetics Data Can Show", "subtitle": "What can data pooled from huge numbers of people (or animals) show that one family or one hospital can't, and how far can we trust what it shows?", "subject": "Biology", "yearLevel": 12, "module": 5, "lesson": 22, "lessonIntent": "saying what a large-scale collaborative project is (many researchers and sites pooling data); explaining why a large sample detects a small effect that chance hides in a small one, giving stronger inference but not certainty; describing how pooled frequency data revealed the sickle allele as unexpectedly common; naming the three evidence streams (pedigree, DNA, frequency) and why their agreement matters; explaining heterozygote advantage with malaria; giving two reasons a matching pattern is not proof (coincidence; founders and chance in a small group); explaining how diversity data guide conservation and why diversity does not guarantee survival; explaining how shared variants indicate more recent common ancestry and what the 1000 Genomes pattern suggests; saying the reference genome is a composite, not everyone's genome; stating what large data improve and what they do not remove; applying this to unseen frequency and diversity data."},
        'hold_seconds': 10,
        'holds': ['attempt', 'attempt-two'],
        'ids': ['hook', 'why-scale', 'sickle-puzzle', 'three-streams', 'malaria-overlay', 'match-not-proof', 'conservation', 'human-evolution', 'improves-not-removes', 'memory', 'attempt', 'feedback-one', 'attempt-two', 'feedback-two', 'decision-rule', 'key-notes'],
        'progression': {"prerequisiteKnowledge": "From B12: sequencing reads base order, profiling compares selected markers; sequencing thousands of people gives an allele's frequency. From B11: allele frequency = copies / all copies; a SNP is a one-base difference; association is not cause; sample size and representation limit conclusions. From B9: unaffected parents with an affected child show a recessive trait; carriers. From B7: the sickle allele is one base change in the haemoglobin gene; sickle-shaped red cells. Year 11 (Biological Diversity): natural selection removes alleles that lower survival or reproduction. Not assumed: large-scale collaborative project, inference, heterozygote advantage, genetic diversity as a population measure, founder, reference genome.", "startsWith": "The hook: UK Biobank is a shared research project that began recruiting in 2006. Half a million volunteers in Britain, aged 40 to 69, gave blood samples and agreed to link their health records.", "stopsAfter": "saying what a large-scale collaborative project is (many researchers and sites pooling data); explaining why a large sample detects a small effect that chance hides in a small one, giving stronger inference but not certainty; describing how pooled frequency data revealed the sickle allele as unexpectedly common; naming the three evidence streams (pedigree, DNA, frequency) and why their agreement matters; explaining heterozygote advantage with malaria; giving two reasons a matching pattern is not proof (coincidence; founders and chance in a small group); explaining how diversity data guide conservation and why diversity does not guarantee survival; explaining how shared variants indicate more recent common ancestry and what the 1000 Genomes pattern suggests; saying the reference genome is a composite, not everyone's genome; stating what large data improve and what they do not remove; applying this to unseen frequency and diversity data.", "nextLesson": "what population patterns can and cannot predict about one person's risk (route entry bio-m5-g03)."},
        'teaching': {"task": "What can data pooled from huge numbers of people (or animals) show that one family or one hospital can't, and how far can we trust what it shows?", "causalExplanation": "Causes: why scale helps (chance swamps small effects in small samples, 2); why the sickle map is a puzzle (selection should remove a harmful allele, 3); why three streams are needed (each misses something, 4); why carriers are favoured (no anaemia, less severe malaria, so more children, 5); why a match is not proof (coincidence; founders, 6); why diversity matters (more alleles, more chance some resist a new disease, 7); why shared variants mean relatedness (inherited from common ancestors, 8). Visible case: one map, one devil tray pair, one bar chart. Video advantage: the simulation settles live; the malaria layer slides over the allele map; founder beads carry an allele to an island; a disease passes along two trays. Thinking opportunities: two unseen data items with every value and demand on screen. Reading load: one board at a time; the scene 8 frame is the busiest and builds one element per cue.", "conversationalApproach": "Opens on the hook (hook (half a million volunteers)), then works through why scale matters, the sickle cell puzzle, three kinds of evidence, the malaria overlay, a match isn't proof and the remaining scenes in order, with each reasoning stage shown on its own cue; ends with the unseen attempt (10 second countdown), brief feedback, the decision rule or board, and the key notes.", "openingDecision": "UK Biobank is a shared research project that began recruiting in 2006. Half a million volunteers in Britain, aged 40 to 69, gave blood samples and agreed to link their health records. So what can data from half a million people show that one family, or one hospital, never could? And how far can we trust it?", "understandingCheck": "11a is a data table (example data, labelled) of a red blood cell variant's frequency and malaria level in six regions, one of them an island that breaks the trend: it tests describing a trend, naming a relationship as a suggestion, and giving a rival explanation. 11c is conservation data (example data) for a mainland and an island wallaby population: it tests reading diversity, inferring population history and naming a management use, with the diversity trap. Each ends \"Pause here to answer.\" with a 10 s countdown; each card stays on screen during and after the countdown. Each feedback is brief (about 25 s): answer, key reason, one crossed-out classic mistake. No mark-allocation talk.", "curriculumScope": "Syllabus (2017, BIO12-12, programme/syllabus/bio-2017-y12.json, B5-IQ5-03 to B5-IQ5-06, p 50): \"investigate the use of data analysis from a large-scale collaborative project to identify trends, patterns and relationships, for example: (ACSBL064, ACSBL073)\" with the examples \"the use of population genetics data in conservation management\", \"population genetics studies used to determine the inheritance of a disease or disorder\" and \"population genetics relating to human evolution\". The two spaces before \"for example\" are in the official DOCX extraction (pack note). Route action B-collaborative-data. The parent line is marked as a depth-study or practical opportunity; this video supplies the concepts and two analysis tasks, not a student investigation. Update the ledger row for B-collaborative-data when this design passes review."},
        'design_block': {'renderer': RENDERER, "visualSystem": "Three boards, one at a time. (1) The data board (scenes 1, 2, 9): a coded grid of many small sample-tube chips that pools into one data bar; SampleBounce from B11 (seeded rng) reused to show a small study's estimate bouncing and a large study's estimate settling. (2) The map board (scenes 3 to 6, attempt 1): a coded world outline (simplified public-domain outline, for example Natural Earth 110 m, drawn as a single stroke; no painted map), with region shading for allele frequency drawn from banded values (legend with written bands, never colour only), a second overlay layer for malaria, and evidence cards (pedigree, DNA strip, frequency) docked at the side. (3) The population board (scenes 7, 8): allele-bead trays (B11's bead look) for diversity, and a coded bar chart and a simple coded similarity tree for the 1000 Genomes pattern. Individuals are never drawn as people: pedigree symbols, tube chips or beads only. Amber is the emphasis colour only.", "transitionPlan": "The data board (sample tubes pooling into one bar and the small-against-large simulation) opens the lesson and gives way to the map board for scenes 3 to 6, where the allele map, the evidence cards and the malaria overlay build on one outline; the population board takes over for scenes 7 and 8 and the data board returns for scene 9; each attempt card clears the board and its feedback shrinks the card to a strip and builds the model answer one point at a time; the next chip slides in; scene crossfade with settle."},
        'rows': BIO_B13_ROWS,
    },
    'bg03': {
        'design': D + 'lessons/bio-m5-g03.md',
        'meta': {"title": "Genetic Risk: Population Patterns and Individual Limits", "subtitle": "If a big study shows that carriers of a variant are at high risk, what can that predict for a group, and what can't it tell one person?", "subject": "Biology", "yearLevel": 12, "module": 5, "lesson": 23, "lessonIntent": "reading a cohort estimate as a proportion of a group (about 72 in 100 BRCA1 carriers by age 80) and saying it cannot say which individuals; explaining why a variant raises risk without deciding the outcome (a working second copy must also be lost; other genes, environment and chance); saying that higher probability is not certainty and a negative result is not a guarantee; estimating a carrier frequency from the incidence of a recessive condition (q squared, q, p, 2pq) and explaining why carriers cannot be counted directly; stating the Hardy-Weinberg conditions, that deviation shows a force acting, and that predictions hold best in large populations over short times; explaining why a genetic result also gives information about relatives (one in two for each child, with the 2003 Icelandic ruling as a consequence); using strong, cautious wording; applying this to an unseen overclaim and an unseen carrier estimate."},
        'hold_seconds': 10,
        'holds': ['attempt', 'attempt-two'],
        'ids': ['hook', 'group-not-person', 'why-not-decided', 'not-certain', 'carrier-estimate', 'when-predictions-hold', 'shared-with-relatives', 'strong-wording', 'memory', 'attempt', 'feedback-one', 'attempt-two', 'feedback-two', 'decision-rule', 'key-notes'],
        'progression': {"prerequisiteKnowledge": "From B13: large samples give stronger inference, not certainty; a collaborative project pools data; heterozygote advantage. From B11: allele frequency = copies / all copies; association is not cause. From B9: autosomal dominant and recessive inheritance; carriers; each child of a heterozygous parent has a one in two chance of inheriting a given allele; a probability per child is not a guaranteed count. From B7: genes code for proteins; genotype and phenotype; environment can affect phenotype. From B4: DNA can be damaged and repaired (Year 11 and B4 level). Year 10 probability and square roots. Not assumed: risk pattern, the Hardy-Weinberg principle, carrier frequency estimates, the working-copy explanation.", "startsWith": "The hook: A collaborative study from several countries followed nearly 10,000 women who carry a harmful version of a gene called BRCA1 or BRCA2. Among the BRCA1 carriers, about 72 in every 100 were estimated to get breast cancer by age 80.", "stopsAfter": "reading a cohort estimate as a proportion of a group (about 72 in 100 BRCA1 carriers by age 80) and saying it cannot say which individuals; explaining why a variant raises risk without deciding the outcome (a working second copy must also be lost; other genes, environment and chance); saying that higher probability is not certainty and a negative result is not a guarantee; estimating a carrier frequency from the incidence of a recessive condition (q squared, q, p, 2pq) and explaining why carriers cannot be counted directly; stating the Hardy-Weinberg conditions, that deviation shows a force acting, and that predictions hold best in large populations over short times; explaining why a genetic result also gives information about relatives (one in two for each child, with the 2003 Icelandic ruling as a consequence); using strong, cautious wording; applying this to an unseen overclaim and an unseen carrier estimate.", "nextLesson": "Module 6, how mutation and technology change these patterns (route entry bio-m6-genetic-change-route)."},
        'teaching': {"task": "If a big study shows that carriers of a variant are at high risk, what can that predict for a group, and what can't it tell one person?", "causalExplanation": "Causes: why a proportion cannot name individuals (it is measured across a group, 2); why one faulty copy does not decide the outcome (a working copy must also be lost, by chance, 3); why a negative result is no guarantee (most cases have other causes, 4); why carriers cannot be counted but can be estimated (they look healthy; affected babies reveal q squared; two ways to be a carrier, 5); why predictions fail in small populations (chance pushes frequencies either way, 6); why relatives share risk (one in two per child, 7). Visible case: one dot array, one chromosome pair and cell row, one stage column, one pedigree. Video advantage: dots fill and then lose their identity; one cell loses its working copy; the stage column builds; drift traces wander live. Thinking opportunities: two unseen items with every value and demand on screen. Reading load: scene 5 is the densest and builds one stage per cue with earlier results retained small.", "conversationalApproach": "Opens on the hook (hook (seventy-two in a hundred)), then works through a group proportion, not one person's future, why the gene doesn't decide on its own, probability isn't certainty, a population prediction that works, when population predictions hold and the remaining scenes in order, with each reasoning stage shown on its own cue; ends with the unseen attempt (10 second countdown), brief feedback, the decision rule or board, and the key notes.", "openingDecision": "A collaborative study from several countries followed nearly 10,000 women who carry a harmful version of a gene called BRCA1 or BRCA2. Among the BRCA1 carriers, about 72 in every 100 were estimated to get breast cancer by age 80. So does carrying that variant mean a woman will get breast cancer? And can population genetics predict anything with real accuracy?", "understandingCheck": "10a is a cohort finding (carriers develop heart disease twice as often) with an overclaiming report about one carrier: it tests what group data support, the rewrite, and the relative-risk trap. 10c is a Hardy-Weinberg carrier estimate from a new incidence (1 in 10,000) with a reliability demand for a small isolated village: it transfers scene 5's stages and scene 6's assumptions. Each ends \"Pause here to answer.\" with a 10 s countdown; each card stays on screen during and after the countdown. Each feedback is brief (about 25 to 30 s): answer, key reason, short working, one crossed-out classic mistake. No mark-allocation talk.", "curriculumScope": "Syllabus (2017, BIO12-12, programme/syllabus/bio-2017-y12.json, B5-IQ5-03, p 50, inquiry question IQ5): \"investigate the use of data analysis from a large-scale collaborative project to identify trends, patterns and relationships, for example: (ACSBL064, ACSBL073)\", example \"population genetics studies used to determine the inheritance of a disease or disorder\" (B5-IQ5-05). Inquiry question: \"Can population genetic patterns be predicted with any accuracy?\" Route action B-collaborative-data (shared with B13). The two spaces before \"for example\" are in the official DOCX extraction."},
        'design_block': {'renderer': RENDERER, "visualSystem": "Three boards. (1) The risk board (scenes 1 to 4): a coded 10 x 10 dot array (dots, never people icons), with filled and open dots computed from the cohort proportion; a coded chromosome pair for the working-copy explanation; a coded cell row for \"a cell also loses that copy\". (2) The calculation board (scenes 5, 6): the task line, a givens group, a stage column; a coded population bar for affected, carriers and non-carriers (computed); a coded allele-frequency trace for large and small populations (B11's seeded rng sampling, illustrative). (3) The family and wording board (scenes 7, 8): B9's pedigree with one-in-two tags; a coded Iceland outline chip; a two-column strong and weak wording card. Amber is the emphasis colour only.", "transitionPlan": "The risk board (a 10 by 10 dot array) opens the lesson and carries scenes 1 to 4; the Hardy-Weinberg and conditions board builds in scenes 5 and 6; the relatives and wording boards follow in scenes 7 and 8; each attempt card clears the board and its feedback shrinks the card to a strip and builds the model answer one point at a time; the next chip slides in; scene crossfade with settle."},
        'rows': BIO_BG03_ROWS,
    },
    'g01b': {
        'design': D + 'lessons/bio-m5-g01.md',
        'meta': {"title": "Trace a DNA Sequence or a Meiosis Cell: HSC-Style Practice", "subtitle": "When a question hands you a sequence or a cell you have never seen, what do you check first so the trace comes out right?", "subject": "Biology", "yearLevel": 12, "module": 5, "lesson": 12, "lessonIntent": "tracing a copying error through two rounds and counting the changed molecules; turning a coding strand written 3' to 5' into mRNA with ends and an amino acid chain that stops at a stop codon; tracking chromosome number and DNA mass through meiosis; listing the four products of one meiosis with one crossover and explaining why new combinations are less than half of a plant's gametes."},
        'hold_seconds': 10,
        'holds': ['q1-question', 'q2-question', 'q3-question', 'q4-question'],
        'ids': ['hook', 'q1-question', 'q1-first-copy', 'q1-second-copy', 'q1-mistake', 'q2-question', 'q2-direction', 'q2-chain', 'q2-mistake', 'q3-question', 'q3-s-phase', 'q3-divisions', 'q3-mistake', 'q4-question', 'q4-chromatids', 'q4-four-cells', 'q4-limit', 'decision-board', 'key-notes'],
        'progression': {"prerequisiteKnowledge": "From B4: A pairs with T, C with G; antiparallel strands with 5' and 3' ends; each original strand is a template; semi-conservative copying; a surviving error becomes a changed pair after the next copy. From B6b: template versus coding strand; mRNA is built 5' to 3' and matches the coding strand with U for T. From B6c: codon chart with mRNA codons only; start AUG; stop codons add no amino acid. From B5a: count chromosomes by centromeres; DNA is copied in interphase into two sister chromatids. From B5b: meiosis I separates homologous pairs, meiosis II separates sister chromatids; crossing over swaps matching pieces between non-sister chromatids and makes new combinations of existing alleles; four cells from one. Not assumed: DNA mass per cell (introduced in Q3 as \"the DNA follows the chromatids\"), linkage frequencies (B8, later in the route; Q4 reasons only from one cell).", "startsWith": "The hook: Exam questions on DNA and meiosis rarely ask you to recite the steps. They hand you something new, a sequence written from its 3' end, a copying error, a cell you've never seen, and ask you to trace it.", "stopsAfter": "tracing a copying error through two rounds and counting the changed molecules; turning a coding strand written 3' to 5' into mRNA with ends and an amino acid chain that stops at a stop codon; tracking chromosome number and DNA mass through meiosis; listing the four products of one meiosis with one crossover and explaining why new combinations are less than half of a plant's gametes.", "nextLesson": "proteins, phenotype and gene-environment interaction (route entry bio-m5-b07)."},
        'teaching': {"task": "When a question hands you a sequence or a cell you have never seen, what do you check first so the trace comes out right?", "causalExplanation": "Why only one molecule changes (each strand templates its own partner; the T strand keeps the right base) (2b, 2c); why the mRNA is a copy, not a pair, of the coding strand, and why direction matters (mRNA read from 5') (3b); why GGC is not read (stop codon releases the chain) (3c); why copying doubles DNA but not chromosomes (sister chromatids share one centromere) (4b); why meiosis I halves chromosomes but not chromatid count per chromosome (4c); why only two products are new (the crossover joins two non-sister chromatids) and why the plant's overall share is lower (crossovers between these genes happen in only some cells) (5b to 5d).", "conversationalApproach": "Opens on the hook (hook), then works through q1-question (question 1: a copying error), q1-first-copy (round one), q1-second-copy (round two), q1-mistake (the classic mistake), q2-question (question 2: a strand written backwards) and the remaining scenes in order, with each reasoning stage shown on its own cue; ends with the unseen attempt (10 second countdown), brief feedback, the decision rule or board, and the key notes.", "openingDecision": "Exam questions on DNA and meiosis rarely ask you to recite the steps. They hand you something new, a sequence written from its 3' end, a copying error, a cell you've never seen, and ask you to trace it.", "understandingCheck": "Four, each 10 s with the countdown and every demand and condition visible (2a, 3a, 4a, 5a). Nothing answer-bearing during the holds; the checklist strip dims.", "curriculumScope": "Syllabus (2017, BIO12-12, programme/syllabus/bio-2017-y12.json, p 49). B5-IQ2-01 \"model the processes involved in cell replication, including but not limited to:\" with \"mitosis and meiosis (ACSBL075)\" and \"DNA replication using the Watson and Crick DNA model, including nucleotide composition, pairing and bonding (ACSBL076, ACSBL077)\"; B5-IQ3-02 \"model the process of polypeptide synthesis, including: (ACSBL079)\" with \"transcription and translation\"; B5-IQ4-02 \"model the formation of new combinations of genotypes produced during meiosis, including but not limited to:\" (the crossing over part only); and, for the crossing over skill by name (Revision 2), B5-IQ4-01 \"conduct practical investigations to predict variations in the genotype of offspring by modelling meiosis, including the crossing over of homologous chromosomes, fertilisation and mutations (ACSBL084)\", whose practical coverage stays with P01 and P02. Practice and transfer only: the ledger rows stay with their core videos (B4, B5b, B6b, B6c, B8); G01 adds a practice row, not first coverage."},
        'design_block': {'renderer': RENDERER, "visualSystem": "One practice board throughout, in the G03c layout: top-left the short task line, kept until the answer lands; under it the stimulus strip (sequence, cell or chromosome); under that the grouped givens card; the working fills the right two thirds; the type badge sits top-right (\"Replication\", \"Transcription and translation\", \"Meiosis: counts\", \"Meiosis: alleles\"). A trace checklist strip on the far left carries three rows, \"which strand?\", \"which end?\", \"what am I counting?\", and ticks the row each question used. It dims to an outline during every countdown. Earlier questions are cleared before the next card writes on.", "transitionPlan": "One practice board persists: the shared question card sits at the top left and each question clears the working area and writes on its stimulus; working scenes add one reasoning stage at a time, the classic-mistake chip crosses out at the end of each question, and the next question card slides in; the decision board gathers the four methods before the notes; scene crossfade with settle."},
        'rows': BIO_G01B_ROWS,
    },
    'g02b': {
        'design': D + 'lessons/bio-m5-g02.md',
        'meta': {"title": "Inheritance Probability: Unfamiliar Crosses and Pedigrees", "subtitle": "When a cross or a family tree is new to you, how do you choose the model, find the probability, and say what the evidence can and cannot prove?", "subject": "Biology", "yearLevel": 12, "module": 5, "lesson": 18, "lessonIntent": "choosing incomplete dominance from a third phenotype and predicting a 1:2:1 cross and a two-birth probability; explaining why tortoiseshell cats are almost always female and finding sex-specific and overall probabilities in an X-linked cross; finding a 2/3 carrier chance and a 1/6 child probability across two families, then updating to 1/4 on new evidence; ruling out X-linked recessive with named individuals, explaining why autosomal dominant and recessive both fit, and judging which is more likely for a rare condition."},
        'hold_seconds': 10,
        'holds': ['q1-question', 'q2-question', 'q3-question', 'q4-question'],
        'ids': ['hook', 'q1-question', 'q1-model', 'q1-chance', 'q1-mistake', 'q2-question', 'q2-why-female', 'q2-square', 'q2-mistake', 'q3-question', 'q3-sure', 'q3-two-thirds', 'q3-update', 'q4-question', 'q4-rule-out', 'q4-both-fit', 'q4-more-likely', 'decision-board', 'key-notes'],
        'progression': {"prerequisiteKnowledge": "From B9: dominant, recessive, homozygous, heterozygous, carrier; each gamete gets one allele; the 2 x 2 square; a ratio is a chance per offspring; pedigree symbols and numbering; \"Hidden in the parents: recessive. Hidden in the child: dominant.\" with its assumptions. From B10: X and Y; a male's single X; \"Dad gives his X to daughters and his Y to sons\"; \"of all children\" against \"of sons\"; X-linked recessive pedigree pattern and the rule-out; \"Incomplete is in-between. Co shows both.\" Year 10: multiply for \"and\" (introduced in one sentence in Q1 as each birth being a separate chance). Not assumed: conditional probability (Q3 explains it as crossing out the box the person cannot be), X-linked dominant (not used).", "startsWith": "The hook: Inheritance questions in the HSC rarely use peas. They give you an animal you haven't met, or a family where the pattern isn't obvious, and ask for a probability, or for what the evidence can and can't tell you.", "stopsAfter": "choosing incomplete dominance from a third phenotype and predicting a 1:2:1 cross and a two-birth probability; explaining why tortoiseshell cats are almost always female and finding sex-specific and overall probabilities in an X-linked cross; finding a 2/3 carrier chance and a 1/6 child probability across two families, then updating to 1/4 on new evidence; ruling out X-linked recessive with named individuals, explaining why autosomal dominant and recessive both fit, and judging which is more likely for a rare condition.", "nextLesson": "population frequencies and SNP evidence (route entry bio-m5-b11)."},
        'teaching': {"task": "When a cross or a family tree is new to you, how do you choose the model, find the probability, and say what the evidence can and cannot prove?", "causalExplanation": "Why some chicks are black and white (the heterozygous parents each pass one allele; the alleles separate, they did not blend) (2b); why multiply (each chick is a separate fertilisation) (2c); why tortoiseshell needs two X chromosomes (both alleles must be present) (3b); why sons cannot get the father's X (he gives sons his Y) (3c); why the man is a certain carrier (his mother could only give a recessive allele) (4b); why 2/3 (the woman cannot be the affected box, leaving three equally likely boxes) (4c); why the second child's chance changes (an affected child proves she is a carrier) (4d); why X-linked recessive fails (an affected mother would have only affected sons) (5b); why both autosomal patterns fit (no giveaway trio) (5c); why dominant is more likely (recessive needs two unrelated carriers for a rare allele) (5d).", "conversationalApproach": "Opens on the hook (hook), then works through q1-question (question 1: Andalusian chickens), q1-model (choose the model, fill the square), q1-chance (two chicks, then only blue), q1-mistake (the classic mistake), q2-question (question 2: tortoiseshell cats) and the remaining scenes in order, with each reasoning stage shown on its own cue; ends with the unseen attempt (10 second countdown), brief feedback, the decision rule or board, and the key notes.", "openingDecision": "Inheritance questions in the HSC rarely use peas. They give you an animal you haven't met, or a family where the pattern isn't obvious, and ask for a probability, or for what the evidence can and can't tell you.", "understandingCheck": "Four, each 10 s with the countdown and every demand and condition visible (2a, 3a, 4a, 5a). The type badge is hidden during each hold in Q1 and Q2 because it names the model.", "curriculumScope": "Syllabus (2017, BIO12-12, programme/syllabus/bio-2017-y12.json, B5-IQ4-02, p 49): \"model the formation of new combinations of genotypes produced during meiosis, including but not limited to:\" with \"interpreting examples of autosomal, sex-linkage, co-dominance, incomplete dominance and multiple alleles (ACSBL085)\" and \"constructing and interpreting information and data from pedigrees and Punnett squares\". Practice and transfer: ledger rows p1058 and p1059 stay with B9 and B10; G02 adds the practice row and the two items B9 deferred here (the 2/3 conditional probability and choosing between competing modes)."},
        'design_block': {'renderer': RENDERER, "visualSystem": "One practice board throughout, in the G03c layout: top-left the short task line; under it the stimulus (painted organism plates or a pedigree); under that the grouped givens card; the working fills the right two thirds; a type badge top-right (\"Incomplete dominance\", \"X-linked\", \"Pedigree: probability\", \"Pedigree: which pattern?\"). A first-moves strip on the far left carries three rows: \"1 choose the model\", \"2 write the genotypes you are sure of\", \"3 combine the chances\" and ticks the row each scene uses; it dims to an outline during every countdown. Earlier questions are cleared before the next card writes on. Pedigrees use B9's data-driven Pedigree (standard symbols only, Roman numerals, individual numbers); no people, faces or bodies.", "transitionPlan": "One practice board persists: the question card at the top left, the working area below it. Each question clears the area, writes on its stimulus (square or pedigree) and then builds one reasoning stage per scene, with the classic-mistake chip crossed out at the end; the decision board gathers the four methods before the notes; scene crossfade with settle."},
        'rows': BIO_G02B_ROWS,
    },
    'bp01': {
        'design': D + 'lessons/bio-m5-p01.md',
        'meta': {"title": "Build and Assess DNA Replication and Protein Synthesis Models", "subtitle": "How do you build a model of DNA copying and of making a polypeptide, and how do you judge what each model shows and what it hides?", "subject": "Biology", "yearLevel": 12, "module": 5, "lesson": 11, "lessonIntent": "stating what each piece and colour represents; building a paired, antiparallel DNA stretch whose tabs only fit A-T and C-G; modelling replication by separating at the tabs and adding new-colour cards, and recording two molecules each with one original strand; linking the two copies to sister chromatids; modelling transcription on the template strand with U for T and the gene unchanged; modelling translation codon by codon with tRNA cards and beads to a stop codon; recording a codon, anticodon and amino acid table; assessing each model by what it represents well, what it leaves out or distorts, and one improvement per limit; applying this to an unseen one-colour replication model. No enzyme names required, no Okazaki fragments, no folding mechanism (B7)."},
        'hold_seconds': 10,
        'holds': ['attempt'],
        'ids': ['hook', 'aim-kit', 'cut-nucleotides', 'make-synthesis-pieces', 'build-molecule', 'replicate', 'record-check', 'transcribe', 'translate', 'results-table', 'assess-strengths', 'assess-limits', 'improvements', 'attempt', 'feedback', 'decision-rule', 'key-notes'],
        'progression': {"prerequisiteKnowledge": "Entry knowledge: B4 (nucleotide = sugar, phosphate, base; A-T and C-G; hydrogen bonds between bases, covalent backbone; antiparallel 5' and 3' ends; template; semi-conservative replication; original blue and new green), B5a (copied chromosome = two sister chromatids; mitosis separates them), B6b (template strand; mRNA built with U opposite A; gene unchanged), B6c (codons of three; ribosome; tRNA with an anticodon and one amino acid; AUG start; stop codons; codon chart; a polypeptide must fold). Year 11 Working Scientifically: models represent part of reality and have limitations.", "startsWith": "The hook: This strip of paper cards is a model of twelve base pairs of DNA. It can't do anything a real cell does.", "stopsAfter": "stating what each piece and colour represents; building a paired, antiparallel DNA stretch whose tabs only fit A-T and C-G; modelling replication by separating at the tabs and adding new-colour cards, and recording two molecules each with one original strand; linking the two copies to sister chromatids; modelling transcription on the template strand with U for T and the gene unchanged; modelling translation codon by codon with tRNA cards and beads to a stop codon; recording a codon, anticodon and amino acid table; assessing each model by what it represents well, what it leaves out or distorts, and one improvement per limit; applying this to an unseen one-colour replication model. No enzyme names required, no Okazaki fragments, no folding mechanism (B7).", "nextLesson": "how a chain of amino acids folds into a protein and becomes a trait (route entry bio-m5-b07)."},
        'teaching': {"task": "How do you build a model of DNA copying and of making a polypeptide, and how do you judge what each model shows and what it hides?", "causalExplanation": "(1) building a model makes you follow the real rules, which is why it is worth doing (1); (2) a fixed colour key lets you track old and new strands (2); (3) tab shapes that only fit the partner model complementary pairing, with two or three notches for the number of hydrogen bonds (3); (4) taped backbones and touching tabs model strong covalent bonds and weak hydrogen bonds, so strands separate without breaking (4, 5); (5) each template fixes its new partner, so both copies match the original and each keeps one original strand (5, 6); (6) the template strand alone is read to make mRNA, with U for T, and the gene is unchanged (7); (7) a ribosome reads three bases at a time and each tRNA links one codon to one amino acid, so the order of codons sets the order of beads (8, 9); (8) a model is assessed by what it represents accurately, what it leaves out or distorts, and how to improve it (10 to 12).", "conversationalApproach": "Opens on the hook (hook (a model on the bench)), then works through aim and kit, step 1: cut nucleotides that only fit one partner, make the pieces for the second model, step 2: build the starting molecule, step 3: model replication and the remaining scenes in order, with each reasoning stage shown on its own cue; ends with the unseen attempt (10 second countdown), brief feedback, the decision rule or board, and the key notes.", "openingDecision": "This strip of paper cards is a model of twelve base pairs of DNA. It can't do anything a real cell does. So why build it?", "understandingCheck": "a replication model built with one colour of card for both original and new strands; both daughter molecules match the original. Demand: explain why the model cannot show semi-conservative replication, and suggest one change. Answer: old and new strands look identical, so you cannot see that each daughter keeps one original strand; use two colours (original and new). Crossed mistake: \"the model is fine because the sequences match\" (matching shows accurate copying, not which strand is old).", "curriculumScope": "follows the chemistry practical format (chem-m5-p01.md, chem-m5-p03.md) and the Biology format and voice (bio-m5-b12.md). No pre-design pack exists for this route entry; this design works from the site extracts ../site-extracts/bio-m5-l06.md and ../site-extracts/bio-m5-l07.md, and from site lessons 06 and 07 (read 18 Oct: lesson 06 \"Build and Pair\" activity, DNA Builder tool, Explain walkthrough and the \"Beyond the syllabus\" box; lesson 07 Explain walkthrough). Route entry: bio-m5-p01 (\"Build and assess replication and synthesis models\", playlist order 12, practical-support, prerequisite bio-m5-b06c, next bio-m5-b07). Route start: \"Learners construct and use a representation rather than only watch one.\" Route stop: \"Support construction, comparison and critique of DNA forms, replication/division and synthesis models; collect learner explanations/limitations as separate evidence.\" Route syllabus actions (candidates): B-DNA-replication, B-mitosis, B-meiosis, B-continuity, B-DNA-forms, B-transcription, B-translation, B-mRNA-tRNA. This design serves B-DNA-replication, B-transcription, B-translation and B-mRNA-tRNA; B-mitosis is linked in one sentence; B-meiosis and B-continuity sit with P02 and B5b; B-DNA-forms with B6a."},
        'design_block': {'renderer': RENDERER, "visualSystem": "B4's coded BasePiece jigsaw tiles, Strand ribbon with 5' and 3' tags and HBonds (two or three dotted lines), restyled as paper cards on the explainer paper grain (public/assets/explainer-paper-grain.png): card body tinted by strand (B4 blue original and green new; yellow RNA and orange tRNA are kit colours for this practical), base letter always printed, tab shape by pair family (B4 rule). B6c's codon chart excerpt and anticodon chip style. b5x-zoom-helix-v1.png (real helix, scene 11 comparison) and m5x-ribosome-v1.png (real ribosome, scene 10 and 11 comparison). B5a's b5x-chromosome-duplicated-v1.png (scene 6 link, small). The explainer kit (Plate, Callout, Mark, Countdown, HandText, DrawPath, scribbleEllipse, Enter), B6a's WrongChip, GreyTag, Cross, Cam. New coded items: the colour-key chip, the method step rail (step 1 to 5, one lit at a time), the record sheet (sketch plus labels), the codon results table, the assessment card (three columns: represents well / leaves out or distorts / improvement), the attempt card. New painted plates: see the Codex asset brief. - No human figures: every step is shown as cards moving on a bench by themselves (slide, flip, snap), tape strips appearing, scissors resting beside cut cards. No hands.", "transitionPlan": "One bench persists across the practical: the step rail along the top shows where the student is, the bench holds only the pieces the current step uses, and the right zone holds one card at a time. Replication is built on the bench, transcription and translation reuse the same twelve-base stretch, the results table and assessment cards follow, the attempt card clears the bench and feedback shrinks it to a strip; scene crossfade with settle."},
        'rows': BIO_BP01_ROWS,
    },
    'bp02': {
        'design': D + 'lessons/bio-m5-p02.md',
        'meta': {"title": "Model Meiosis, Fertilisation and Mutation with Pop-Beads", "subtitle": "How do you model meiosis, fertilisation and mutation to predict the genotypes offspring can have, and how far can you trust the predictions?", "subject": "Biology", "yearLevel": 12, "module": 5, "lesson": 15, "lessonIntent": "building a parent cell with colour-tracked homologues and alleles at matching positions; copying each chromosome into sister chromatids and counting by centromeres; modelling crossing over at matching points and recording the new combinations; randomising each pair with a coin and dividing twice into four gametes; listing the four gamete types without crossing over (2 x 2) and the extra crossover types; modelling random fertilisation by random draw; adding a deliberate mutation and tracing the new allele into an offspring; tallying offspring for one gene and comparing observed with expected; assessing the model (strengths, limitations, validity, reliability); evaluating a conclusion drawn from too few trials. No Punnett square method (B9), no dihybrid ratios, no linkage maps."},
        'hold_seconds': 10,
        'holds': ['attempt'],
        'ids': ['hook', 'aim-kit', 'build-parent', 'copy', 'cross-over', 'line-up-divide', 'record-gametes', 'fertilise', 'mutate', 'results', 'assess-strengths', 'assess-limits', 'valid-reliable', 'attempt', 'feedback', 'decision-rule', 'key-notes'],
        'progression': {"prerequisiteKnowledge": "Entry knowledge: B5a (chromosome, homologous pair, diploid, haploid, sister chromatids, count centromeres), B5b (one copy, two divisions; prophase I pairing and crossing over; metaphase I either way round, independently; anaphase I partners separate; meiosis II chromatids separate; 2^n; fertilisation restores the number), B8 (four sources; reshuffle against new allele; gamete types for two genes; crossover combinations rarer; mutation inherited only in the egg or sperm line). Allele and genotype from B5b and B8. Punnett squares are not assumed (B9 comes next); the expected 1 : 2 : 1 in scene 10 is given from the gamete reasoning in one clause (\"each parent gives either allele half the time\") with a grey tag \"Punnett squares: next video\".", "startsWith": "The hook: Two parent plants can produce a hundred seeds, and no two are quite the same. Can you predict which genotypes their offspring could have?", "stopsAfter": "building a parent cell with colour-tracked homologues and alleles at matching positions; copying each chromosome into sister chromatids and counting by centromeres; modelling crossing over at matching points and recording the new combinations; randomising each pair with a coin and dividing twice into four gametes; listing the four gamete types without crossing over (2 x 2) and the extra crossover types; modelling random fertilisation by random draw; adding a deliberate mutation and tracing the new allele into an offspring; tallying offspring for one gene and comparing observed with expected; assessing the model (strengths, limitations, validity, reliability); evaluating a conclusion drawn from too few trials. No Punnett square method (B9), no dihybrid ratios, no linkage maps.", "nextLesson": "Punnett squares and pedigrees (route entry bio-m5-b09)."},
        'teaching': {"task": "How do you model meiosis, fertilisation and mutation to predict the genotypes offspring can have, and how far can you trust the predictions?", "causalExplanation": "(1) the model can predict which offspring genotypes are possible, and test those predictions against chance (1); (2) colours track where each chromosome came from (2); (3) matching sticker positions because homologues carry the same genes at the same places (3); (4) copying before meiosis gives two sister chromatids, still one chromosome (4); (5) breaking at matching points means a crossover exchanges the same genes, so nothing is lost or doubled, and it makes new combinations (5); (6) a coin per pair makes each pair's direction random and independent (6); (7) without crossing over there are 2 x 2 = 4 gamete types; crossing over adds rarer mixed types (7); (8) a random draw models random fertilisation and restores two of each chromosome (8); (9) only mutation makes a new allele, and only in a gamete-making cell is it passed on (9); (10) observed counts differ from expected by chance; pooling brings them closer (10); (11) assessment: what the model represents, what it leaves out, and how to keep it valid and make it reliable (11 to 13).", "conversationalApproach": "Opens on the hook (hook (one pair of parents, many offspring)), then works through aim and kit, step 1: build the parent cell, step 2: copy each chromosome, step 3: crossing over, step 4: line up and divide twice and the remaining scenes in order, with each reasoning stage shown on its own cue; ends with the unseen attempt (10 second countdown), brief feedback, the decision rule or board, and the key notes.", "openingDecision": "Two parent plants can produce a hundred seeds, and no two are quite the same. Can you predict which genotypes their offspring could have?", "understandingCheck": "a group models Rr x Rr but runs only four fertilisations; none gives rr; they conclude rr offspring cannot occur. Demand: evaluate. Answer: not supported; rr expected about one in four; four trials can easily give none by chance (about one time in three, (3/4)^4 = 0.32); repeat many times and pool. Crossed mistake: \"the model is wrong\" (it is the sample size, not the model).", "curriculumScope": "follows the chemistry practical format (chem-m5-p01.md, chem-m5-p03.md) and the Biology format and voice (bio-m5-b12.md). No pre-design pack exists for this route entry; this design works from the site extracts ../site-extracts/bio-m5-l08.md and ../site-extracts/bio-m5-l13.md, and from site lesson 13 Activity 3 (\"Model Meiosis to Predict Gamete Variation\", read in full 18 Oct) and its Predict walkthrough (AaBb unlinked gives four gamete types; expected, not guaranteed, proportions), plus lesson 08's key ideas (2n to n to 2n; crossing over in prophase I; independent assortment at metaphase I). Route entry: bio-m5-p02 (\"Model meiosis, fertilisation and mutation in offspring\", playlist order 16, practical-support branch, prerequisite bio-m5-b08, next bio-m5-b09). Route start: \"A learner physically or interactively models the required processes.\" Route stop: \"Prepare practical modelling of offspring genotype variation through crossing over, fertilisation and mutation; retain actual conduct/results separately.\" Route syllabus actions: B-genotype-practical, B-new-genotypes. Syllabus (2017, p49): B5-IQ4-01 \"conduct practical investigations to predict variations in the genotype of offspring by modelling meiosis, including the crossing over of homologous chromosomes, fertilisation and mutations (ACSBL084)\"."},
        'design_block': {'renderer': RENDERER, "visualSystem": "B5b's lesson-local AlleleBead (white with ink outline and letter), PairUp, CrossOver, TwoWays (the coin flip, coded in B5b, reused here as the coin), CombosGrid; B8's amber-only-for-new-allele rule and GameteList; B5a's ModelCell counting chips; the real-structure comparison plates b5x-chromosome-duplicated-pink-v1.png, b5x-chromosome-duplicated-teal-v1.png and b5x-cell-dividing-nospindle-v1.png (scenes 4 and 11, small, \"the real thing\"). The explainer kit (Plate, Callout, Mark, Countdown, HandText, DrawPath, scribbleEllipse, Enter), B6a's WrongChip, GreyTag, Cross, Cam. Bead chains are built in code from the painted single pop-bead plates (Codex items, shared with bio-m5-p01). New coded items: the method step rail, the colour key chip, the gamete record table, the tally table and a small expected-against-observed column chart (counts, labelled axes), the assessment card, the attempt card. - No human figures: chromosomes are bead chains on a bench; cells are loops of string; gamete cards are face-down index cards that shuffle themselves; the coin flips on its own. No hands.", "transitionPlan": "One bench persists across the practical: the step rail along the top shows where the student is, the bench holds only the beads and string the current step uses, and the right zone holds one card at a time. The parent cell is built, copied, crossed over, divided, recorded, fertilised and mutated in order, the results and assessment cards follow, the attempt card clears the bench and feedback shrinks it to a strip; scene crossfade with settle."},
        'rows': BIO_BP02_ROWS,
    },
    'bp03': {
        'design': D + 'lessons/bio-m5-p03.md',
        'meta': {"title": "Collect and Present Population Frequency Data", "subtitle": "How do you collect, record and present data on how common a characteristic is, and how sure can you be about what it shows?", "subject": "Biology", "yearLevel": 12, "module": 5, "lesson": 20, "lessonIntent": "choosing a visible, non-sensitive, non-identifying characteristic and saying why it is counted, not converted to alleles; stating the agreement and anonymity rules; writing definitions with an \"unsure\" category before counting; describing an anonymous slip method with two counters; recording a tally table and calculating frequencies with a stated total; pooling classes and saying why the pooled value is a better estimate; drawing a column graph with correct conventions; explaining with a bead model why small samples scatter; identifying a trend, a pattern and a relationship (association, not cause); naming limitations and improvements to validity and reliability; using cautious language; applying all of it to the site's two-group earlobe task. SNP data analysis stays with B11."},
        'hold_seconds': 10,
        'holds': ['attempt'],
        'ids': ['hook', 'aim-characteristic', 'agreement-privacy', 'define-categories', 'method', 'record-frequency', 'pool', 'column-graph', 'bead-model', 'analyse-trend-pattern', 'analyse-relationship', 'limitations', 'attempt', 'feedback', 'decision-rule', 'key-notes'],
        'progression': {"prerequisiteKnowledge": "Entry knowledge: B11 (frequency = count over stated total, table and bar chart; allele frequency by copies; recessive phenotype frequency; SNPs; association, not cause; sample limits: size, representation, consistent definitions). Year 11 Working Scientifically: validity, reliability, graph conventions.", "startsWith": "The hook: In one class, nine of the twenty-eight students who were counted have attached earlobes. Does that tell you how common attached earlobes are in everyone your age?", "stopsAfter": "choosing a visible, non-sensitive, non-identifying characteristic and saying why it is counted, not converted to alleles; stating the agreement and anonymity rules; writing definitions with an \"unsure\" category before counting; describing an anonymous slip method with two counters; recording a tally table and calculating frequencies with a stated total; pooling classes and saying why the pooled value is a better estimate; drawing a column graph with correct conventions; explaining with a bead model why small samples scatter; identifying a trend, a pattern and a relationship (association, not cause); naming limitations and improvements to validity and reliability; using cautious language; applying all of it to the site's two-group earlobe task. SNP data analysis stays with B11.", "nextLesson": "DNA sequencing and profiling for inheritance studies (route entry bio-m5-b12)."},
        'teaching': {"task": "How do you collect, record and present data on how common a characteristic is, and how sure can you be about what it shows?", "causalExplanation": "(1) one class's count is not yet a population frequency: method, sample size and classification decide what it means (1); (2) the characteristic must be visible, quick, non-sensitive, and is not a one-gene trait, so it is counted, not turned into alleles (2); (3) data about people need agreement and anonymity, so no result can be traced and no one feels pressured (3); (4) definitions before counting, with an \"unsure\" box, because different judgements make the numbers mean different things (4); (5) unnamed slips and two counters reduce bias and counting errors (5); (6) frequency is count over total, and the total must be stated (6); (7) pooling gives a bigger sample and a better estimate (7); (8) separate categories go on a column graph with gaps, from zero, titled and labelled (8); (9) small samples scatter by chance; bigger samples land closer to the true value (9); (10) trend, pattern and relationship, with association not cause (10); (11) limitations, validity and reliability, and cautious wording (11).", "conversationalApproach": "Opens on the hook (hook (one class, one number)), then works through aim and choosing a characteristic, agreement and privacy, define the categories before counting, the method, record: the table and the frequency and the remaining scenes in order, with each reasoning stage shown on its own cue; ends with the unseen attempt (10 second countdown), brief feedback, the decision rule or board, and the key notes.", "openingDecision": "In one class, nine of the twenty-eight students who were counted have attached earlobes. Does that tell you how common attached earlobes are in everyone your age?", "understandingCheck": "group A 18 attached, 42 free; group B 30 attached, 30 free. Demands: frequency of attached in each group, compare, one limitation. Answer: A 18/60 = 30 percent; B 30/60 = 50 percent; attached more common in group B in these samples; limitation: 60 per group from one school is a small, possibly unrepresentative sample, so the difference could be chance. Crossed mistake: \"18 / 42 = 43 percent\" (divided by the other category, not the total).", "curriculumScope": "follows the chemistry practical format (chem-m5-p01.md, chem-m5-p03.md) and the Biology format and voice (bio-m5-b12.md). No pre-design pack exists for this route entry; this design works from the site extract ../site-extracts/bio-m5-l16.md and site lesson 16 (read 18 Oct: the frequency card with the earlobe populations, the \"Sample quality and limitations\" card, the four-step data interpretation sequence, the \"Read the Table\" earlobe task and the Analyse walkthrough). Route entry: bio-m5-p03 (\"Collect and present population-frequency data\", playlist order 21, practical-support branch, prerequisite bio-m5-b11, next bio-m5-b12). Route start: \"Select a teacher-approved dataset or characteristics collection protocol.\" Route stop: \"Prepare actual collection/recording/presentation and analyse trends, relationships and limitations; supplied data alone does not evidence learner collection.\" Route syllabus actions: B-frequency-collection, B-frequency-analysis. Syllabus (2017, p49): B5-IQ4-03 \"collect, record and present data to represent frequencies of characteristics in a population, in order to identify trends, patterns, relationships and limitations in data, for example: examining frequency data; analysing single nucleotide polymorphism (SNP)\"."},
        'design_block': {'renderer': RENDERER, "visualSystem": "B11's coded frequency table and bar chart look, its \"in this sample\" tag style, its pool bar; B3b's coded gene-pool tray bead look for the bead population (round beads, painted bead plates below); the explainer kit (Plate, Callout, Mark, Countdown, HandText, DrawPath, scribbleEllipse, Enter); B6a's WrongChip, GreyTag, Cross, Cam. Shared plates from bio-m5-p01: m5x-clipboard-sheet-v1.png (tally sheet), m5x-pencil-v1.png. New coded items: the definition line diagram, the slip (three boxes), tally table, frequency calculation lines, column graph, bead sample chart (dot strip), analysis card (trend, pattern, relationship), limitations card, attempt card. - No human figures: slips fold and drop into the box by themselves; the mirror lies on a desk and shows only a soft highlight; counters are represented by two pencil tallies agreeing on the clipboard. No people.", "transitionPlan": "One class-collection workflow persists across the practical: the step rail along the top shows where the student is and the right zone holds one card at a time. The slips, table, pooled year group, column graph and bead model build in order, the analysis and limitation cards follow, the attempt card clears the board and feedback shrinks it to a strip; scene crossfade with settle."},
        'rows': BIO_BP03_ROWS,
    },
}


def ready(design):
    for line in io.open(design, encoding='utf8'):
        if line.startswith('Status:'):
            return 'ready to voice' in line
    return False


def build(key):
    cfg = LESSONS[key]
    s = io.open(cfg['design'], encoding='utf8').read()
    parts = re.split(r'^### \d+[a-d]?\. ', s, flags=re.M)[1:]
    assert len(parts) == len(cfg['ids']), (key, len(parts))
    assert set(cfg['rows']) == set(cfg['ids']), key
    hold = cfg['hold_seconds'] * FPS
    scenes = []
    for sid, p in zip(cfg['ids'], parts):
        p = re.split(r'^## |^# ', p, flags=re.M)[0]
        quote = ' '.join(l[2:].strip() for l in p.split('\n') if l.startswith('> '))
        quote = re.sub(r'\*\*', '', quote).strip()
        if sid == 'key-notes':
            quote = NOTES_LINE
        assert quote and '—' not in quote and '*' not in quote, (key, sid)
        sc = {'id': sid, 'type': 'concept', 'durationInFrames': 300, 'voiceover': {'text': quote}}
        if sid == 'attempt' or sid in cfg.get('holds', []):
            sc['responseHold'] = {'startFrame': 0, 'endFrame': hold}
        scenes.append(sc)
    lesson = {**cfg['meta'], 'fps': FPS, 'width': 1920, 'height': 1080, 'introDurationInFrames': 0, 'productionRole': 'production-draft', 'scenes': scenes}
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
    chk = f'{D}checks/{key}-claude-science-check.md'
    brief['studentLearningReview'] = {'status': 'pass', 'reviewer': LEARN_REVIEWER, 'evidence': {'path': lr, 'sha256': sha(lr)}}
    assert 'Resolution' in io.open(chk, encoding='utf8').read(), chk
    brief['scriptReview'] = {'status': 'pass', 'reviewer': CHECK_REVIEWER, 'evidence': {'path': chk, 'sha256': sha(chk)}}
    brief['voicedPreview'] = {'status': 'pending', 'reviewer': '', 'mode': '', 'inputSnapshotPath': '', 'evidence': None,
                              'studentLearningReview': {'status': 'pending', 'reviewer': '', 'evidence': None},
                              'humanListening': {'status': 'pending', 'reviewer': '', 'mode': 'human-listening', 'evidence': None}}
    brief['limitation'] = 'Pending scaffold, not approval. Fill the teaching and scene decisions before recording; review the exact voiced revision before a full export.'
    io.open(base + 'lesson.production-brief.json', 'w', encoding='utf8', newline='\n').write(json.dumps(brief, ensure_ascii=False, indent=2) + '\n')
    chars = sum(len(x['voiceover']['text']) for x in scenes)
    words = sum(len(x['voiceover']['text'].split()) for x in scenes)
    print('BUILT', key, [x['id'] for x in scenes], chars, 'chars', words, 'words')
    return chars


total = 0
built, skipped = [], []
for k in (sys.argv[1:] or list(LESSONS)):
    c = LESSONS[k]
    if not ready(c['design']):
        skipped.append(k)
        print('SKIPPED', k, '(Status line does not say "ready to voice")')
    elif 'ids' not in c:
        skipped.append(k)
        print('SKIPPED', k, '(ready to voice, but no build config in LESSONS yet: add ids, meta, progression, teaching, design_block, rows, hold_seconds)')
    else:
        total += build(k)
        built.append(k)
print('built', built, 'skipped', skipped, 'total chars', total)
