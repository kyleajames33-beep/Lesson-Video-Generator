"""Build lesson.json and lesson.production-brief.json for the wave 5 Chemistry designs c5 to c8, c6a, c6b, g03, g03a, g03b, g03c, g03d, c9, p02 and c10 (run from repo root).

Same method and helpers as build_wave4.py (copied, not imported, because importing runs its main loop).
A design is built only when its Status line contains "ready to voice". Quoted lines ("> ...") are the
narration with **bold** cue markers stripped. Output is deterministic.
    python docs/production/claude-pm/lessons/build_wave5_chem.py
Optional arguments name the lesson keys to build (default: all registered).
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


C5_ROWS = {
    'hook': ['adjust', 'C3 iron thiocyanate tube (coded or painted) with three dot counts and a swatch strip, then two coded fractions and a dashed same value line', 'Poses the puzzle on a tube the learner already knows: every amount changes but one ratio does not',
             'Here is the iron thiocyanate tube from earlier / Every amount has changed / Ten over ten times ten is a tenth / how do we write it for any reaction',
             'Seven pale yellow dots drop in and the counts slide from 10, 10, 10 to 15, 8, 12, then two fractions fill with the spoken numbers and a dashed line joins the two matching 0.1 values',
             E, 'Heading writes on; the made-up numbers chip appears; seven iron dots drop in and the counts slide to 15, 8, 12 with a bracket "every amount has changed"; a fraction bar draws with the red ion on top; the first mixture drops in and "= 0.1" writes; the second drops in and "12 / 120 = 0.1" writes; a dashed "same value" line joins the two; a pen ring lands on the fraction on "this ratio"',
             ['DrawPath fraction', 'particle drop', 'NumberTicker counts', 'HandText write-on', 'dashed line reveal', 'ScribbleCircle'], 'Brief hold on the two matching tenths'],
    'ratio-name': ['adjust', 'The two iron thiocyanate fractions from the hook kept as evidence, square brackets explained, then a large K with the "at one temperature" condition', 'Names the constant ratio as the equilibrium constant from evidence, with no rate model',
                   'Square brackets around a species / is our ratio / at one temperature / the equilibrium constant',
                   'The two fractions stay up, a bracket meaning tag writes on, the ratio fraction builds with brackets, "same at one temperature" ticks both tenths, K writes large',
                   E, 'The hook fractions stay at the left; "[X] = concentration in mol/L" writes on; the red ion over iron times thiocyanate builds with brackets; both tenths get ticks and "at one temperature"; "K (Keq)" writes large',
                   ['HandText write-on', 'fraction build', 'tick', 'large label'], 'Hold K and its condition'],
    'any-equation': ['adjust', 'Coded expression builder (balanced equation strip, fraction, coefficients flying up as powers) and two H2 + I2 + HI tubes with dot counts', 'States the rule for any balanced equation and checks that the ratio stays put, but fails without the power',
                     'Products go on top, reactants underneath / raised to the power of its coefficient / fourteen squared over two times two / twenty-eight squared over two times eight / Leave the power off',
                     'The general expression assembles term by term, then two tubes get their fractions in three beats each with a dashed same value line joining 49 and 49, and a second row without powers gives 3.5 and 1.75',
                     E, 'aA + bB = cC + dD writes and K assembles beneath it with each coefficient flying up as a power; the tag "checking that the ratio stays put" appears; two tubes (2, 2, 14 and 2, 8, 28) get "14^2 / (2 x 2) = 196 / 4 = 49" and "28^2 / (2 x 8) = 784 / 16 = 49" joined by a dashed same value line; a second row writes the no-power results 3.5 and 1.75 with a cross',
                     ['expression builder', 'DrawPath fraction', 'NumberTicker', 'dashed line reveal', 'Mark cross'], 'Hold the two 49s and the failed no-power row'],
    'from-scratch': ['adjust', 'Equation strip for the cobalt tube with C3 pink and blue ion tints, state symbols, an empty fraction and the coefficient 4 flying to a power', 'Models writing an expression in three stages (states, products over reactants, powers) on an unseen equation',
                     'First, the states / so it stays out / Second, products over reactants / Third, each concentration to the power of its coefficient',
                     'State symbols are ringed one by one, the water is struck out, the ions lift into a fraction and the 4 flies up to chloride as a power',
                     E, 'The equation strip writes on large; each state symbol is ringed, the three (aq) species get ticks and water gets a bar through it with "solvent: huge, steady amount"; an empty fraction draws and the blue ion lifts to the top, the pink ion and chloride to the bottom; the 4 flies to the top right of [Cl-] and the faint 1s fade; the finished expression writes and a pen ring marks the outer brackets',
                     ['HandText write-on', 'ScribbleCircle', 'expression builder', 'Mark cross', 'DrawPath fraction'], 'Hold the finished expression'],
    'left-out': ['adjust', 'Beaker with many water dots and a few reacting dots, two counters, a coded carbon block with a CO2 and CO particle view, and the C4A carbon equation', 'Gives the reason a solid or the solvent drops out: its concentration does not change, so it folds into a fixed number',
                 'their concentration does not change / just another fixed number / the carbon never appears / its concentration changes, so it counts',
                 'A water counter stays level while a dissolved counter ticks, the locked counter slides into the fixed number, the carbon is greyed out of the expression, and a steam icon gets a tick',
                 E, 'The water counter stays level while a dissolved-species counter ticks up and down; the locked counter slides into the circled fixed number with "fixed x fixed = fixed"; a carbon block appears with its level counter and "pure solid" tag; C(s) + CO2(g) = 2CO(g) writes, the (s) is crossed and "K = [CO]^2 / [CO2]" builds; a steam icon lands with "(g): concentration changes" and a tick',
                 ['counter reveal', 'ScribbleCircle', 'Mark cross', 'expression builder', 'icon pop'], 'Hold the carbon expression'],
    'size-of-k': ['new', 'Coded horizontal log number line from 10^-30 to 10^13 with three rough guide bands and markers with H2 + I2, N2 + O2 and copper ammonia icons', 'Teaches reading the size of K as a rough guide and that K says where the mixture settles, not how fast',
                  'the bigger it is / a K above about a thousand / a K of forty-nine / ten to the minus thirty / ten to the thirteen / not how fast it gets there',
                  'The number line writes on, a pen arrow runs right on "bigger", the band edges ring in turn and three markers drop one at a time with their icons and tags',
                  E, 'The log line writes on with the bands "below about 10^-3: mostly reactants", "10^-3 to 10^3: both present in measurable amounts" and "above about 10^3: mostly products" and the tag "rough guides, around 0.1 to 1 mol/L"; a pen arrow runs right; the two band edges ring in turn; markers drop at 49 (H2 + I2 tube, "lots of HI, some H2 and I2 left"), at 10^-30 (N2 and O2 flask, "very little NO") and at 10^13 (copper ammonia, "almost all the copper is in the ion"); a tag "where it settles, not how fast" lands last',
                  ['DrawPath number line', 'ScribbleCircle', 'marker drop', 'tag pop', 'HandText write-on'], 'Hold the three markers'],
    'memory-aid': ['adjust', 'Large handwritten aid in three lines, each lifting to a small icon (fraction bar, power arrow, greyed solid and droplet), with the condition tag', 'Gives a reusable writing shortcut after the cause is explained',
                   'Here is a shortcut for writing any expression / Products over reactants, coefficients become powers / the solvent drop out',
                   'The aid writes on in three short lines, each lifting to its icon, and the solid and droplet grey out on the last line',
                   E, 'The three aid lines write on large; a fraction bar, a coefficient flying to a power, and a greyed solid and droplet ("or the solvent") appear in turn; the condition tag "written for the equation as given, concentrations in mol/L, water as solvent or gas" lands and the board holds',
                   ['HandText write-on', 'icon pop', 'greyed term'], 'Hold the aid for about 3 seconds after the last word'],
    'attempt': ['new', 'Coded vignette: a pale blue copper tube with the Cu2+ and NH3 equation strip, and a made-up A + B flask with its strip, plus two numbered demands', 'Unseen transfer on the power of four and the product over reactant form, and on reading K = 4, with every condition visible and no answer cues',
                'Your turn / copper two plus ions and ammonia make a deep blue ion / where A and B make C and D / In this question K is four / Pause here to answer',
                'The countdown ring runs through the answer-free thinking hold',
                E, 'The copper tube with its equation and condition tag and the made-up flask with "start with equal A and B and no C or D" appear as each is named; the two numbered demands stay on screen; earlier boards and the aid are removed; the countdown ring starts after the narration',
                ['Countdown ring', 'Enter reveals'], 'Quiet answer-free thinking hold with a 10 second countdown'],
    'feedback-one': ['adjust', 'The copper equation strip with the expression builder, a numerator lift, a coefficient flying up as a power and two crossed wrong-answer chips', 'Explains item one stage by stage and corrects the multiplier and the addition slips',
                     'Products on top, reactants underneath / to the power of four / a coefficient is a power, not a multiplier / so the counts multiply',
                     'The copper strip writes on and the expression builds, the new ion lifts up, the 4 flies to ammonia as a power and two wrong chips are crossed on their cues',
                     E, 'The equation strip writes on; the new ion lifts to the numerator, Cu2+ and NH3 to the denominator, and the 4 flies up as a power; "K = [[Cu(NH3)4]2+] / ([Cu2+][NH3]^4)" holds; the chip "4[NH3] in the denominator" is crossed with "a coefficient is a power"; the chip "[Cu2+] + [NH3]^4 underneath" is crossed with "counts multiply: particles must meet" and a callback tag to the iron tube',
                     ['expression builder', 'Mark cross', 'chip pop', 'DrawPath fraction'], 'Settle on the corrected expression'],
    'feedback-two': ['adjust', 'The A + B strip with the expression builder, the K number line with a marker at 4 and a bar showing one third left and two thirds converted', 'Explains item two and shows that K = 4 means measurable amounts of all four, not mostly products',
                     'The products go on top, C times D / Underneath go the reactants, A times B / about two thirds of the A reacting / not almost all products',
                     'The expression builds with no powers, a marker drops at 4 inside the middle band, a short working line writes and a bar splits into one third A and two thirds products',
                     E, 'The strip writes on and "K = [C][D] / ([A][B])" builds; the number line returns with a marker at 4 in the middle band, a tick on "both present" and a cross on "mostly products"; the working line "x / (a - x) = 2, so x = two thirds of a" writes; a bar shows one third of A left and two thirds turned into C and D; a short unspoken note about the solvent sits under the expression',
                     ['expression builder', 'marker drop', 'Mark cross', 'bar fill', 'HandText write-on'], 'Hold the bar and the corrected reading'],
    'decision-rule': ['adjust', 'Two question cards with fraction, power arrow and state-symbol icons and a miniature K number line, then a tube with starting counts and a question mark', 'Packs the lesson into two reusable questions and hands off to finding the settled mixture',
                      'write products over reactants / leave out pure solids, a pure liquid and the solvent / When it gives you K, read its size first / when you only know the starting amounts',
                      'Two cards write on one by one, then a tube with starting counts appears with a question mark over the settled counts and a next chip',
                      E, 'The first card "Given an equation: fraction, powers, check the states." writes on with its icons; the second card "Given K: above about 1000, below about 1/1000, or between?" writes on with the mini number line; on "starting amounts" a tube with starting counts and a "?" over the settled counts appears with a Next chip',
                      ['HandText write-on', 'card slide-in', 'icon pop', 'chip slide-in'], 'Hold about 3 seconds after the last word'],
    'key-notes': ['new', 'Key notes card with the memory aid in large writing and its condition tag', 'Essentials to copy into books', 'key notes',
                  'Notes appear then stay still for copying',
                  H, 'The notes and the memory aid appear and lock', ['Enter reveals'], 'Quiet copy hold of about 60 seconds with pause invitation'],
}

C6_ROWS = {
    'hook': ['adjust', 'C2 PCl5 flask (painted if available, else coded) with a grouped givens card, a colour sensor dial and the equation strip', 'Poses one measured value as the way into the whole table and uses colour as the reason the chlorine is measurable',
             'Back to the P C L five flask from earlier / we measure just one thing / Chlorine is yellow-green / 0.080 moles per litre / and then the equilibrium constant',
             'The givens write onto a card, the gas tints yellow-green, a sensor dial settles on 0.080 and two question marks appear over the other two species',
             E, 'Heading writes on; 0.40 mol and 2.0 L write onto the givens card with pen rings; the flask tints and a swatch strip fills; a sensor dial settles on "Cl2: 0.080 mol/L" and the card gains that line; dashed question marks appear over PCl5 and PCl3 in the equation strip; the illustrative values chip stays',
             ['CameraStage push', 'HandText write-on', 'swatch strip fill', 'NumberTicker dial', 'ScribbleCircle'], 'Brief look at the two question marks'],
    'ice-initial': ['new', 'Coded ICE table outline with row labels Initial, Change, Equilibrium and PCl5, PCl3, Cl2 columns, the givens card and a particle flask', 'Introduces the ICE table and fills the initial row by converting moles to concentration',
                    'spelled I, C, E / initial, change and equilibrium / 0.40 moles over 2.0 litres / the two products start at zero',
                    'The row labels are ringed in turn and settle from three large letters, 0.40 / 2.0 slides into 0.20 and flies into the first cell, and the product cells tick to zero',
                    E, 'The task line, equation strip and givens card sit on the board; the empty table gains its row labels and column headings with mol/L; I C E writes as three large letters that settle into the labels; 0.40 / 2.0 = 0.20 flies into the first Initial cell and the next two cells tick to 0; the particle flask beside the table shows the starting dots',
                    ['table build', 'ScribbleCircle', 'NumberTicker division', 'HandText write-on', 'particle dots'], 'Hold the initial row'],
    'change-row': ['new', 'The ICE table with the Change row, a particle flask showing splitting PCl5 dots and coefficient chips flying into the cells', 'Shows that the change row follows the coefficients with used up as minus and made as plus',
                   'its change is plus 0.080 / one P C L three and one chlorine / because one is used up for every chlorine made / The change row follows the coefficients',
                   'The chlorine cell ticks to +0.080 as eight dots split, the coefficient chips fly into the cells and the other two cells tick to +0.080 and -0.080 with made and used up labels',
                   E, 'The Cl2 Change cell ticks to "+0.080" while 8 PCl5 particles split into PCl3 and Cl2 with pen rings; the faint coefficient 1s fly down into the Change cells with "x 1"; PCl3 ticks to "+0.080" and PCl5 to "-0.080" in the used-up colour with "made" and "used up" labels; the equation arrow pulses',
                   ['table cell tick', 'particle split', 'coefficient fly-in', 'ScribbleCircle'], 'Hold the change row'],
    'equilibrium-row': ['new', 'The ICE table with a pen plus between the Initial and Change rows and the particle flask settling to 12, 8, 8', 'Shows equilibrium equals initial plus change and ties the table to the C2 flask',
                        'The equilibrium row is the initial row plus the change row / minus 0.080, is 0.12 / 0.080 each',
                        'A pen plus draws between the rows and the equilibrium cells tick one at a time while the flask dots settle to 12, 8, 8',
                        E, 'A pen plus draws between the Initial and Change rows; the Equilibrium cells tick 0.12, 0.080, 0.080 on their words with "0.20 + (-0.080)" visible in the first; the particle flask settles to 12 navy, 8 violet, 8 green; only the finished table, task, equation and givens remain on the board',
                        ['pen draw', 'table cell tick', 'particle settle'], 'Hold the finished table'],
    'find-k': ['adjust', 'C5 expression builder beside the finished table, pen arrows from the Equilibrium cells and a check line 12 + 8 = 20', 'Calculates K from the equilibrium row only and checks the subtraction against the start',
               'Now K / Products over reactants / 0.080 times 0.080, over 0.12 / 0.0533 / Check the subtraction',
               'The expression builds beside the table, equilibrium values drop in by pen arrows and the working writes to 0.053, then the particle counts are ringed for the check',
               E, 'The C5 builder writes the expression beside the table; numbers drop in from the Equilibrium row only with the tag "equilibrium values only"; "K = 0.080 x 0.080 / 0.12 = 0.0064 / 0.12 = 0.0533" writes, then "K = 0.053" larger with "2 s.f."; the tag "K: no unit written" stays throughout; the PCl5 and PCl3 counts are ringed and "12 + 8 = 20 = start" writes with a tick',
               ['expression builder', 'DrawPath arrows', 'HandText write-on', 'ScribbleCircle', 'tick'], 'Hold about 2 seconds on the checked result'],
    'k-given': ['adjust', 'Fresh board in the same three zones with the C4B hot H2 + I2 tube (9 H2 dots, 9 I2 dots), the K chip and a new empty ICE table', 'Switches the direction of the task: K and the start are known and the settled concentrations are wanted',
                'Now the other way round / where K is 49 / Each dot is 0.05 moles per litre / 0.45 moles per litre of hydrogen',
                'The PCl5 board slides out, a new board builds with the tube, the K chip pops on 49 and the initial row ticks to 0.45, 0.45 and 0',
                E, 'A camera push slides the old board away and a fresh one builds; the task line, equation strip with the coefficient 2 highlighted and givens card "K = 49 (450 C)" write on; the tube with 9 H2 and 9 purple I2 dots and the key "1 dot = 0.05 mol/L" appears; the K chip pops on "49"; the Initial row ticks 0.45, 0.45, 0',
                ['CameraStage push', 'chip pop', 'table build', 'particle dots'], 'Hold the initial row into the next scene'],
    'unknown-x': ['new', 'The new ICE table with a pen-written x, one H2 and one I2 dot turning into two HI dots, and coefficient chips flying into the Change row', 'Introduces x as the unknown amount used up and shows the change row follows the coefficients again',
                  'call the amount of hydrogen used up x / one iodine is used and two hydrogen iodide are made / minus x, minus x and plus two x',
                  'An x writes with an arrow to one H2 dot, one H2 and one I2 meet and become two HI, and the Change row fills with -x, -x and +2x',
                  E, 'A bracket "x = H2 used up, mol/L" writes with an arrow to one H2 dot; a single H2 and I2 dot meet and become two HI dots, looped once; the coefficient chips fly into the Change row giving "-x", "-x", "+2x" with the used-up colour; a crossed ghost chip "+x for HI" fades with the caption "the coefficient is 2"',
                  ['HandText write-on', 'particle meeting', 'coefficient fly-in', 'Mark cross'], 'Hold the change row'],
    'substitute': ['new', 'Equilibrium row algebra, the C5 expression returning, a pen ring on (2x)^2, and a perfect square rewrite with square-root signs', 'Substitutes into K and uses the perfect square to take a square root',
                   '0.45 minus x for hydrogen and for iodine / Hydrogen iodide squared is two x all squared / a perfect square / 49 is seven squared / we keep plus seven',
                   'The equilibrium row fills with algebra, the equation writes as (2x)^2 over (0.45 - x)^2, the line rewrites as a squared fraction equal to 7 squared and the root signs draw over both sides',
                   E, 'The Equilibrium row fills with "0.45 - x", "0.45 - x", "2x"; the C5 expression returns with the cells dropping in and "(2x)^2 / (0.45 - x)^2 = 49" with a pen ring and a chip "(2x)^2 = 2x times 2x, not 2x^2"; the line rewrites to "(2x / (0.45 - x))^2 = 7^2" with a small "perfect square" gloss; two root signs draw and the line becomes 2x / (0.45 - x) = 7 with a note on why the positive root is kept',
                   ['table cell tick', 'expression builder', 'ScribbleCircle', 'root sign draw', 'HandText write-on'], 'Hold the root line'],
    'solve': ['new', 'The algebra line moving up one stage at a time, then the shared countdown ring beside "9x = 3.15" and "x = ?"', 'Lets the learner finish the last step themselves before the answer',
              'Multiply both sides by 0.45 minus x / Add 7x to both sides / Find x / Pause here and try it',
              'The line transforms through 2x = 7(0.45 - x), 2x = 3.15 - 7x and 9x = 3.15, then holds on x = ? while the countdown runs',
              E, 'The line becomes "2x = 7(0.45 - x)" with the 7 flying into the bracket, then "2x = 3.15 - 7x", then the 7x slides across to give "9x = 3.15"; on "Find x" the question "x = ?" holds with the countdown ring and "Pause here and try it." in handwriting',
              ['HandText write-on', 'coefficient fly-in', 'Countdown ring'], '10 second answer-free countdown after "Pause here and try it."'],
    'check': ['new', 'The answer x = 0.35, the Change and Equilibrium rows turning into numbers, a substitute-back check and the rejected negative root', 'Gives the answer, completes the table, checks by substituting back and rejects the negative root',
              'x is 0.35 / 0.10 moles per litre / Check by substituting back / Why not minus seven?',
              'x = 0.35 ticks with a pen ring, the table fills with numbers, the check writes to 49 and minus seven is crossed',
              E, '"x = 0.35" ticks with mol/L; the Change cells become -0.35, -0.35, +0.70 and the Equilibrium cells 0.10, 0.10, 0.70; "0.70^2 / (0.10 x 0.10) = 49" writes with a tick; "-7 gives x = 0.63 > 0.45" is crossed',
              ['NumberTicker', 'table cell tick', 'HandText write-on', 'Mark cross'], 'Hold the checked table'],
    'memory-aid': ['adjust', 'The finished H2 + I2 table with the Change row lit, ratio chips and a large handwritten habit line', 'Gives a habit that separates the change row, which follows the coefficients, from the other rows, which do not',
                   'Here is the habit / Only the change row follows the coefficients / in the ratio one, one, two / do not have to be in that ratio',
                   'The Change row lights with a 1 : 1 : 2 chip and a tick while the Equilibrium row gets a 0.10 : 0.10 : 0.70 chip with a cross and the caption not 1 : 1 : 2',
                   E, 'The aid writes large over the finished table; the Change row lights with the chip "1 : 1 : 2" and a tick against "-0.35 : -0.35 : +0.70"; the Equilibrium row gets "0.10 : 0.10 : 0.70" with a cross beside 0.70 and "not 1 : 1 : 2"; a tag explains that H2 and I2 match only because they started equal; the condition tag "used up is minus, made is plus" lands',
                   ['row highlight', 'chip pop', 'Mark cross', 'HandText write-on'], 'Hold for about 2 seconds after the last word'],
    'reverse-equation': ['adjust', 'The settled tube with its three values, the original equation with K = 49, the flipped equation strip and the C5 builder', 'Shows that K belongs to the equation as written, so flipping the equation flips K and doubling the coefficients squares it',
                         'K belongs to the equation as it is written / write the equation backwards / and that is one over 49 / Flip the equation, flip K / 49 squared is 2401',
                         'The equation flips with a curved arrow, the new fraction builds and gives 0.020 beside 1 / 49, then a doubled-coefficient line gives K = 49^2 = 2401',
                         E, 'The settled tube values 0.10, 0.10, 0.70 sit at the left; the original equation and K = 49 sit above; the species swap sides with a curved arrow and "[H2][I2] / [HI]^2" builds with "0.10 x 0.10 / 0.70^2 = 0.010 / 0.49 = 0.020" and a bar "1 / 49" tagged "flipped"; "Flip the equation, flip K." writes with "same temperature, equation as written"; a second line "2H2 + 2I2 = 4HI" has its coefficients flying up as doubled powers and "K = 49^2 = 2401" writes',
                         ['equation flip', 'expression builder', 'HandText write-on', 'coefficient fly-in'], 'Hold the flipped and doubled K values'],
    'attempt': ['new', 'Coded sealed vessel (very pale gas), the N2O4 equation strip, a grouped givens card, two numbered demands and an empty ICE table outline', 'Unseen transfer on building a table from one measured value, finding K, and flipping the equation, with every given and unit visible and no answer cues',
                'Your turn / We seal 0.100 moles of N two O four / the concentration of N O two is 0.0300 moles per litre / the equation written the other way / Pause here to answer',
                'The countdown ring runs through the answer-free thinking hold',
                E, 'The vessel, the equation strip, the grouped givens card with units and the illustrative values chip appear as each is named; the two numbered demands stay on screen with an empty ICE outline as a first-use scaffold; earlier boards and the aid are removed; the countdown ring starts after the narration',
                ['Countdown ring', 'Enter reveals'], 'Quiet answer-free thinking hold with a 10 second countdown'],
    'feedback-one': ['adjust', 'The attempt board with the ICE table building cell by cell, a divide by two arrow and a particle strip of 10 N2O4 dots, plus three wrong-answer chips', 'Explains item one stage by stage and corrects the three likeliest numerical slips',
                     '0.100 moles over 2.00 litres is 0.0500 moles per litre / so N two O four fell by half of that, 0.0150 / gives 0.0257 / you forgot to square the N O two',
                     'The table builds under the cues, the half-of-the-change arrow draws, the working writes to 0.0257 and three wrong numbers fade in and are crossed',
                     E, 'The givens card divides 0.100 / 2.00 into the Initial cell; the Change row ticks "+0.0300" and "-0.0150" with coefficient chips 2 and 1 and a pen "divide by 2" arrow; a particle strip shows 3 of 10 N2O4 dots splitting into 6 NO2; "0.0300^2 = 0.000900", "0.000900 / 0.0350", "K = 0.0257" write in beats; a silent check line ticks; chips for 0.018, 0.045 and 0.86 are crossed with correcting captions',
                     ['table cell tick', 'coefficient fly-in', 'particle split', 'Mark cross', 'HandText write-on'], 'Settle on the corrected board'],
    'feedback-two': ['adjust', 'The flipped equation strip with the expression builder and the finished table, with one crossed wrong-answer chip', 'Explains item two as the flip of the item one value',
                     'Written backwards, K is the old value flipped / which is 38.9 / check the direction of the equation',
                     'The equation strip flips, the fraction builds and gives 38.9 with a one over 0.0257 tag, and the repeated 0.0257 chip is crossed',
                     E, 'The equation strip flips as in the reversal scene; "[N2O4] / [NO2]^2 = 0.0350 / 0.000900 = 38.9" builds with the tag "= 1 / 0.0257"; the chip "0.0257 again" is crossed with "direction flipped"; the finished table and both K values hold together',
                     ['equation flip', 'expression builder', 'Mark cross'], 'Hold about 2 seconds after the last word'],
    'decision-rule': ['adjust', 'Two question cards with a mini ICE table icon and a mini algebra line with a root sign, then a next chip with a furnace-and-tube icon', 'Packs the method into two reusable questions, names the limit of the clean case and hands off to why factories do not wait',
                      'write the expression, put the concentrations in the initial row / fill the change row by the coefficients / call the change x, substitute and solve / Next: why factories do not wait for equilibrium',
                      'Two cards write on one by one, the second with a small tag on perfect squares, then the next chip slides in',
                      E, 'The first card "Given a start and one settled value: table, then K." writes on with the mini table; the second "Given K: x, substitute, solve." writes on with the root-sign line and the tag "clean when both sides are perfect squares; other starts: later"; the chip "Next: why factories do not wait for equilibrium" appears with a furnace-and-tube icon',
                      ['HandText write-on', 'card slide-in', 'icon pop', 'chip slide-in'], 'Hold about 2 seconds after the last word'],
    'key-notes': ['new', 'Key notes card with the memory aid in large writing and its condition tag', 'Essentials to copy into books', 'key notes',
                  'Notes appear then stay still for copying',
                  H, 'The notes and the memory aid appear and lock', ['Enter reveals'], 'Quiet copy hold of about 70 seconds with pause invitation'],
}

C7_ROWS = {
    'hook': ['adjust', 'Painted converter tower (or coded plant outline) with the Haber equation strip and a coded dashboard of two sliders and two gauges', 'Poses why real plants run at conditions that give less ammonia than cooling and squeezing would',
             'Ammonia is the starting point / Cooling the mixture and squeezing it / about 450 degrees Celsius / about 200 atmospheres / Why choose conditions that make less ammonia',
             'A slow push on the tower, a ghost hand moves the sliders and a faint yield needle rises to the highest possible mark, then the plant values land lower',
             E, 'Heading writes on; the equation strip writes with "+ heat" and the tag "forward gives out heat"; the dashboard builds; a ghost hand slides temperature down and pressure up and a faint yield needle rises to a "highest possible yield" mark; the real plant values 450 C and 200 atm land lower on the sliders',
             ['CameraStage push', 'HandText write-on', 'slider slide', 'gauge needle', 'tag pop'], 'Brief hold on the question'],
    'yield': ['adjust', 'The full dashboard with the yield gauge, the equation strip with heat chip and gas-count chips 4 and 2, and the shift arrows', 'Defines equilibrium yield and shows what cooling, squeezing and removal each do to it, and that the catalyst does not',
              'what gives the most ammonia in the settled mixture / equilibrium yield / gives out heat, 92 kilojoules / Cooling takes heat away / Squeezing shifts toward fewer gas particles / The catalyst changes only the speed',
              'The yield gauge name writes on, the temperature slider drops and the yield needle climbs, the pressure slider rises with gas-count chips and a shift arrow, and the catalyst leaves the needle still',
              E, 'The yield gauge name writes with its plain meaning; the heat chip pulses with "-92 kJ for each mole of N2"; the temperature slider slides down and the yield needle climbs; the pressure slider slides up, the chips 4 and 2 appear with a shift arrow and the needle climbs again; removal and the catalyst are shown as separate small rows with the catalyst leaving the needle still',
              ['slider slide', 'gauge needle', 'HandText write-on', 'shift arrow draw', 'chip pop'], 'Hold the labelled dashboard'],
    'time-in-reactor': ['adjust', 'Coded pipe with green and navy dots drifting through an iron catalyst box, a vertical time line, small C2 rate bars and the C3 collision strip', 'Shows a factory is paid for what leaves the reactor in the time available, and why cooling slows both rates',
                        'not for a mixture that has had all day to settle / Cooling lowers both rates / fewer collisions have enough energy / hard to split',
                        'The dashboard shrinks away, dots drift through the iron box past a vertical time line, two small rate bars drop together and a collision strip shows fewer successes',
                        E, 'The dashboard shrinks away; a pipe runs across the top with dots drifting through a box tagged "iron catalyst" and a vertical line "time the gas spends over the catalyst" draws in; two small rate bars (forward blue, reverse amber) drop together; the collision strip shows fewer successes; a pen ring goes to an N2 molecule with "needs energetic collisions"',
                        ['pipe flow', 'DrawPath line', 'NumberTicker rate bars', 'collision animation', 'ScribbleCircle'], 'Hold about 1 second after the last word'],
    'three-temperatures': ['new', 'Large coded time plot (ammonia % against a made-up clock) with three curves, dashed ceilings and dots on the vertical time line', 'Shows three temperatures so the learner sees the middle one wins in the time available',
                           'three temperatures at the same pressure / These numbers are illustrative / settle at about sixty percent ammonia / it crawls / settles at once / gets close in the time available',
                           'The axes draw on and the cool curve climbs slowly to a high dashed ceiling, the hot curve shoots to a low ceiling, and the middle curve gets a green ring as it reaches its ceiling and the dot sits highest',
                           E, 'The time plot draws on with the tag "200 atm, N2 : H2 = 1 : 3, illustrative, about"; the cool curve climbs slowly toward a dashed ceiling "settles at about 60" with a low dot on the vertical line; the hot curve shoots to a low ceiling "settles at about 9"; the middle curve reaches "settles at about 25" with a high dot, a green ring and a label "most ammonia in the time available"',
                           ['lineGraph draw-on', 'dashed line reveal', 'marker drop', 'ScribbleCircle', 'label write-on'], 'Hold the three curves and the green ring'],
    'catalyst-speed': ['adjust', 'The same plot with a dashed no-catalyst copy of the middle curve, the C4b ridge profile as an inset and the hot curve returning', 'Shows the iron fixes the speed and not the ceiling, and explains why a plant without iron would need a hotter, lower-ceiling reactor',
                       'So what does the iron do? / lower-energy pathway in both directions / The ceiling does not move / a hotter reactor, with a lower ceiling',
                       'A pen ring goes to the iron tag, a slower dashed curve climbs with its dot staying low, the ridge inset shows the lower pass in both directions and a zero-height bracket reads same ceiling',
                       E, 'A pen ring goes to the iron pellet tag; a dashed "no catalyst" copy of the middle curve climbs slowly with its dot low while the solid dot stays high; the C4b ridge profile appears as an inset with a lower pass and a brace "both directions"; a zero-height bracket on the ceiling reads "same ceiling" with "sooner, not different"; the hot curve returns with its lower ceiling',
                       ['lineGraph draw-on', 'ScribbleCircle', 'bracket draw', 'DrawPath curve', 'tag pop'], 'Hold the two ceilings and the bracket'],
    'pressure-limit': ['new', 'Coded pressure axis with paired green and red bars that shrink and grow along it, a steel wall, a pump, a flame and a warning pipe', 'Explains why the plant stops at a middle pressure: each step buys less extra ammonia but costs more',
                       'Pressure helps both / toward the side with two gas particles / So why not a thousand atmospheres? / a leak is dangerous / about two hundred atmospheres',
                       'Two icons land for the rate and the shift, then pairs of bars step along the pressure axis with the green bar shrinking and the red bar growing until a band marks about 200 atm',
                       E, 'The plot clears and a pressure axis draws on with the tag "illustrative shapes, no numbers"; a rising rate bar pair and the 4 to 2 chip with a green shift arrow appear; pairs of bars step up the axis with the green "extra ammonia" bar shrinking and the red "extra cost" bar growing, the steel wall thickening, a pump growing and a flame; a warning mark lands on a pipe on "a leak"; a band closes on about 200 atm where the bars cross',
                       ['axis draw-on', 'bar resize', 'icon pop', 'band reveal', 'tag pop'], 'Hold the band at the crossing point'],
    'recycle': ['new', 'Coded plant loop: fresh gas in, reactor with iron beds, cooler, liquid tank and a recycle pipe with a pump', 'Shows removing the product and recycling the unused gas so most of the feed ends up as ammonia',
                'about a fifth of the gas leaving the reactor is ammonia / turns to a liquid, called condensing / while the nitrogen and hydrogen stay gases / pumped back into the reactor, which is recycling / more than ninety-five percent',
                'Five dots leave the reactor with one green, the green dots drop into the tank as liquid, the unused dots run back along a lit recycle pipe and a counter climbs past ninety-five percent',
                E, 'Fresh N2 and H2 dots enter and pass the reactor box tagged "450 C" and "200 atm"; five dots leave with one green and a pen ring; the green dots drop into the tank as liquid and "condensing" writes at the cooler; a pen ring goes to the gases that stay; the recycle pipe lights, "recycling" writes on it and the unused dots re-enter; the shift runs forward again; a counter climbs past 95 percent over many trips',
                ['pipe flow', 'particle drop', 'ScribbleCircle', 'label write-on', 'NumberTicker'], 'Hold the closed loop and the counter'],
    'model-answer': ['adjust', 'C6 style board with a conditions card and a three-column frame (Yield green, Rate blue, Limit red) with a row per condition', 'Models the staged written answer one cell at a time for temperature, pressure and removal',
                     'one condition at a time / Temperature: the reaction gives out heat / So the plant uses about 450 degrees with iron / Pressure: four gas particles become two / Removal: taking the ammonia out',
                     'The frame writes on and the rows fill one cell at a time on their spoken cues with ticks',
                     E, 'The task line and conditions card sit on the board; the frame "Yield / Rate / Limit" writes on; the Temperature row fills cell by cell ("exothermic: cooling shifts toward NH3", "fewer collisions have enough energy", "rate falls, so a middle temperature, about 450 C, plus iron"); the Pressure row and the Removal row fill in turn on their cues with ticks; the finished answer holds',
                     ['table build', 'HandText write-on', 'tick', 'colour coding'], 'Hold the finished answer for a beat'],
    'memory-aid': ['adjust', 'Large handwritten aid "Haber is a compromise" over a two-force tug of war between a snowflake and a flame with a flag settling at about 450 C', 'Gives a yield versus speed shortcut for temperature after the cause has been explained',
                   'yield asks for cold and speed asks for hot, so industry compromises / a middle temperature / neither best for the yield nor best for the speed',
                   'The aid writes on, the two figures pull the rope toward the snowflake and the flame, and the flag settles at about 450 C with its plain meaning',
                   E, 'The aid writes large; the cold-blue "yield" figure pulls toward a snowflake and the hot-orange "speed" figure toward a flame; the flag settles at "about 450 C" with "a middle temperature that gives the most in the time available"; the condition tag "forward reaction gives out heat and is too slow when cold. If it takes in heat, heat helps both." lands',
                   ['HandText write-on', 'DrawPath rope', 'figure pull', 'flag settle'], 'Hold for about 3 seconds after the last word'],
    'attempt': ['new', 'Coded board with the methanol equation strip, a grouped conditions card, a separate student claim card and three empty labelled lines with yield, rate and limit tags', 'Unseen transfer to a new exothermic fewer-gas-particle reaction with every condition and demand visible and no answer cues',
                'Your turn / Methanol, C H three O H, is made from carbon monoxide and hydrogen / A plant runs at about 250 degrees Celsius / A student says the plant should use 25 degrees and 500 atmospheres / Pause here to answer',
                'The countdown ring runs through the answer-free thinking hold',
                E, 'The task line, equation strip with "forward gives out about 91 kJ for each mole of CH3OH" and the grouped conditions card appear as each is named; the separate student claim card lands; the three empty labelled lines with yield, rate and limit tags stay as a first-use scaffold; the aid and earlier boards are removed; the countdown ring starts after the narration',
                ['Countdown ring', 'Enter reveals', 'card slide-in'], 'Quiet answer-free thinking hold with a 10 second countdown'],
    'feedback-temperature': ['adjust', 'The attempt board with the Temperature line filling its three coloured cells, a small two-curve inset and two crossed wrong-answer chips', 'Explains the temperature answer by yield, rate and limit and corrects the catalyst and always-hotter slips',
                             'Temperature. The reaction gives out heat / at 25 degrees almost no collisions have enough energy / the catalyst speeds both directions / it changes the speed, not the destination / hotter also lowers the yield',
                             'The Temperature line fills cell by cell, a small inset replays the cool and middle curves, and two wrong chips are crossed as they are named',
                             E, 'The Temperature cells fill: Yield "exothermic: cooling shifts toward CH3OH" with a tick, Rate "fewer collisions have enough energy", Limit "rate falls, so a middle temperature, about 250 C, plus a catalyst"; a two-curve inset replays the cool and 250 C curves with the same colours and no numbers; the chips "the catalyst increases the yield" and "always hotter, because faster" are crossed with correcting captions',
                             ['table build', 'lineGraph reuse', 'Mark cross', 'tick', 'chip pop'], 'Settle on the corrected temperature line'],
    'feedback-pressure-removal': ['adjust', 'The Pressure and Removal lines filling their cells, 3 to 1 gas-count chips with a shift arrow, and an inset of the extra-yield and extra-cost bars with a band at 50 to 100 atm', 'Explains the pressure and removal answers and corrects the pressure slows it and no reason against the highest pressure slips',
                                 'Three gas particles become one / it costs far more and a leak is more dangerous / Condensing the methanol takes it away / pressure slows the reaction, remember it crowds the particles',
                                 'The 3 to 1 chips and a shift arrow appear, the Pressure and Removal lines fill in on their cues, the cost inset marks 50 to 100 atm with a cross at 500, and two wrong chips are crossed',
                                 E, 'The 3 to 1 gas-count chips appear over the equation strip with a green shift arrow; the Pressure line fills ("3 gas to 1: squeeze shifts toward CH3OH", "more crowded, more collisions", "500 atm costs more and is less safe, so 50 to 100 atm"); the Removal line fills ("taking CH3OH away: more is made in total", "reverse rate stays low, so forward stays ahead", "recycle the unused gas"); the bar inset shows the 50 to 100 atm band and a cross at 500; two wrong chips are crossed',
                                 ['table build', 'shift arrow draw', 'band reveal', 'Mark cross', 'chip pop'], 'Settle on the corrected board'],
    'decision-rule': ['adjust', 'Two question cards with the yield, rate and limit tags and a split thermometer, then two chips with a K thermometer glyph and a curve icon', 'Packs the lesson into a reusable question order, notes the compromise exists only when the forward reaction gives out heat, and hands off to graphs',
                      'take one condition at a time / yield and speed pull apart on temperature / If it takes in heat, heat helps both / Later, K puts numbers on this / Next: reading equilibrium graphs',
                      'Two cards write on, the yield, rate and limit tags light in turn, a heat-helps-both branch greys, and two chips slide in for the later K video and the next video',
                      E, 'The card "Justify a condition: yield and why, rate and why, what limits it." writes on with the tags lighting in turn; the card on temperature writes on with a thermometer split into snowflake and flame and the second branch greyed "heat helps both"; on "Later, K" a chip "K and temperature: a later video" appears with a thermometer glyph; on "Next" the chip "Next: reading equilibrium graphs" appears with a curve icon',
                      ['HandText write-on', 'card slide-in', 'tag light', 'chip slide-in'], 'Hold about 2 seconds after the last word'],
    'key-notes': ['new', 'Key notes card with the memory aid in large writing and its condition tag', 'Essentials to copy into books', 'key notes',
                  'Notes appear then stay still for copying',
                  H, 'The notes and the memory aid appear and lock', ['Enter reveals'], 'Quiet copy hold of about 90 seconds with pause invitation'],
}

C8_ROWS = {
    'hook': ['adjust', 'C4B hot H2 + I2 tube with dots 4, 4, 10, the K chip, a stopwatch frozen at 0 and a givens card', 'Poses a mixture that has not settled and asks which way it will run before anything moves',
             'the hot hydrogen iodide tube again / where K is forty-nine / nobody let it settle first / There is a way to know before anything moves',
             'The tube shows 4, 4 and 10 dots with the made-up chip, the K chip pops, the givens card builds value by value and a stopwatch freezes at zero with a pen ring',
             E, 'Heading writes on; the tube (4 H2, 4 I2, 10 HI dots, key "1 dot = 0.05 mol/L") appears with the tags "just mixed, not settled" and "made-up mixture"; the K chip pops on "forty-nine" and the equation strip writes on with both arrows dim; the givens card builds as each value is said; the stopwatch freezes at 0 with a pen ring on "before anything moves"',
             ['HandText write-on', 'chip pop', 'particle jostle', 'stopwatch freeze', 'ScribbleCircle'], 'Brief hold on the frozen stopwatch'],
    'q-fraction': ['adjust', 'C5 expression builder writing K and then Q side by side with different tags, and a pen arrow from the tube dots to the brackets', 'Names Q as the K fraction with the numbers from now',
                   'put in the concentrations in the tube right now / That number is the reaction quotient, Q / powers for coefficients / At equilibrium Q is K',
                   'The K fraction writes with the tag settled values only, a second copy writes beside it as Q with the tag values right now, Q writes large and the two join with an equals sign on settled',
                   E, 'The builder writes "K = [HI]^2 / ([H2][I2])" with "settled values only"; a second copy writes as "Q = ..." with "values right now" and a pen arrow from the tube dots to the brackets; Q writes large with "the K fraction with the numbers from now"; the coefficient 2 flies to the exponent; the fractions join with an equals sign and the tag "only when settled"',
                   ['expression builder', 'DrawPath arrows', 'HandText write-on', 'coefficient fly-in'], 'Hold about 2 seconds after the last word'],
    'calculate-q': ['adjust', 'The Q fraction with numbers dropping in from the givens card, a three-beat working and a large ringed result', 'Calculates Q from the supplied mixture one step at a time',
                    'Substitute the values now / 0.50 squared, which is 0.25 / 0.20 times 0.20, which is 0.040 / which is 6.25',
                    'The three concentrations drop into the brackets, the working writes in three beats and 6.25 ticks large with a ring',
                    E, 'The three numbers drop from the givens card into the brackets with pen arrows; "0.50^2 = 0.25", "0.20 x 0.20 = 0.040" and "Q = 0.25 / 0.040 = 6.25" write in three beats; the tag "Q: no unit written" stays throughout; the result ticks large and is ringed; the K fraction fades to a small line at the top right',
                    ['DrawPath arrows', 'HandText write-on', 'ScribbleCircle', 'NumberTicker'], 'Hold the ringed result'],
    'compare-q-k': ['new', 'Coded log number line with ticks 0.1 to 1000, a teal K marker at 49, a Q marker at 6.25, a bracket between them and a ghost settled tube beside the live tube', 'Compares Q with K on a log scale and leads to the question of which reaction is quicker',
                    'Each tick on this line is ten times the one before / Q is 6.25 and K is forty-nine / Q is smaller than K / which reaction is quicker',
                    'The log line draws on with x10 hops, the K marker and the Q marker drop in, a bracket and a less-than sign appear and a ghost settled tube joins the live tube',
                    E, 'The log line draws on with the tag "each tick is 10 times the last" and a pen arrow hopping tick to tick with "x 10"; the teal K marker drops at 49; the Q marker drops at 6.25 with a bracket between them; a "<" sign writes between the markers; a ghost tube (2, 2, 14) appears beside the live tube (4, 4, 10) with the tag "less product than a settled tube"',
                    ['DrawPath number line', 'marker drop', 'bracket draw', 'ghost overlay', 'tag pop'], 'Hold the two markers and the question'],
    'rate-link': ['adjust', 'The live tube beside the ghost settled tube with ringed dot counts, the two rate bars growing unequal with no numbers, and the forward arrow lighting', 'Gives the direction a plain cause: too little product compared with a settled tube, so joining outpaces splitting',
                  'Q compares products with reactants / too little hydrogen iodide / joining happens faster than splitting / forward reaction wins / hydrogen iodide is made',
                  'The tubes are compared dot by dot, the forward bar grows taller than the reverse bar, the forward arrow lights and an H2 and I2 dot merge into HI',
                  E, 'A "products / reactants" tag writes under the Q marker; the live tube (4, 4, 10) and the settled ghost tube (2, 2, 14) sit side by side with pen rings on their HI and H2/I2 dots; the "?" marks clear and the blue forward bar grows clearly taller than the amber bar ("forward faster", no numbers); the forward arrow lights blue; an H2 and an I2 dot merge into HI',
                  ['ScribbleCircle', 'NumberTicker rate bars', 'arrow light', 'particle merge'], 'Hold the unequal bars'],
    'q-chases-k': ['adjust', 'The Q marker sliding along the log line toward K with the rate bars following live and the tube dots changing to the settled tube', 'Shows Q climbing to K as the rates meet and ties it to the settled tube from the ICE table video',
                   'the top of Q grows and the bottom shrinks, so Q climbs / The forward rate falls, the reverse rate rises / exactly when Q reaches K / 0.10, 0.10 and 0.70 / Q chases K',
                   'The Q marker slides toward 49 and slows near it, the forward bar shrinks and the reverse bar grows until they meet at the teal bracket, and the tube dots change to 2, 2, 14',
                   E, 'The Q marker slides right from 6.25 toward 49, slowing as it approaches; the rate bars follow until they meet at the teal bracket as the marker lands with a small teal flash; the tube dots change from 4, 4, 10 to 2, 2, 14; the settled values 0.10, 0.10, 0.70 tick under the tube and "0.70^2 / (0.10 x 0.10) = 49 = K" writes with a teal tick; a quiet tag about equal totals shows for about 2 seconds',
                   ['marker slide', 'NumberTicker rate bars', 'particle settle', 'bracket draw', 'tick'], 'Hold the landed marker briefly'],
    'other-side': ['new', 'Fresh board with a tube at 1 H2, 1 I2 and 16 HI dots, the Q working in three beats, a far-right Q marker at 256 and the shared countdown ring', 'Starts from the other side with a thinking hold so the learner predicts the direction before the answer',
                   'Now start from the other side / 0.05 of hydrogen, 0.05 of iodine and 0.80 of hydrogen iodide / so Q is 256 / Which way will it run?',
                   'A fresh board builds, the Q working writes in beats, a Q marker drops far right of K and the question holds with the countdown ring',
                   E, 'A fresh board in the same zones shows the givens card and a tube of 1, 1, 16 dots with the made-up chip; "0.80^2 = 0.64", "0.05 x 0.05 = 0.0025" and "Q = 0.64 / 0.0025 = 256" write in beats; the Q marker drops far right of the K marker; the question "Which way will it run?" holds with the countdown ring for about 10 seconds and the small line "pause if you need longer"',
                   ['board build', 'HandText write-on', 'marker drop', 'Countdown ring'], 'About 10 second answer-free thinking hold after the question'],
    'other-side-answer': ['new', 'A greater-than sign between the markers, the amber reverse arrow, the reverse bar growing taller than the forward bar, and a thumbnail of the first tube', 'Gives the answer, gives the rate reason and teaches that too much product depends on K',
                          'Q is above K / splitting happens faster than joining / the reverse reaction wins / Whether there is too much product depends on K',
                          'The greater-than sign writes, the reverse arrow lights, the reverse bar grows taller than the forward bar, the Q marker slides left and the tube lands on the settled picture, and three markers are shown in turn',
                          E, 'A ">" writes between the markers and the reverse arrow lights amber; the reverse bar grows clearly taller than the forward bar ("reverse faster", no numbers); the Q marker slides left toward 49 with the bars following and the dots change (HI 16 to 14, H2 and I2 1 to 2); a thumbnail of the first tube appears; the closing tag lists Q below K, Q equal K and Q above K with the three markers shown in turn',
                          ['marker slide', 'NumberTicker rate bars', 'particle settle', 'thumbnail pop', 'tag pop'], 'Hold the three markers'],
    'q-equals-k': ['adjust', 'Both markers at K with the equal-rates bracket, the broken-axis segments with a zero marker and an off the scale marker, and the C2 flask thumbnails', 'Covers Q equals K without equal concentrations and the two ends of the scale (only reactants, only products)',
                   'If Q equals K / That does not mean equal concentrations / if a flask holds only reactants / the top of Q is zero / If it holds only products / Q is off the scale',
                   'Both markers sit on K with the settled tube ticked, the line gains a broken axis at the far left for the reactants-only flask and at the far right for the products-only flask, and the aid writes large',
                   E, 'Both markers sit at the K position with the equal-rates bracket and the tag "rates equal, not concentrations equal" beside the settled tube; a broken-axis segment at the far left with a 0 marker and the C2 reactants-only flask thumbnail with a pen arrow toward K; a broken-axis segment at the far right with an off the scale marker and the products-only thumbnail with a pen arrow toward K; "Q chases K." writes large',
                   ['marker drop', 'broken axis draw', 'thumbnail pop', 'DrawPath arrows', 'HandText write-on'], 'Hold the aid on the line'],
    'disturbance': ['adjust', 'The settled hot tube with the log line, the Q marker at 49, four H2 dots dropping in, the Q marker dropping to 16.3 and the forward bar stepping up', 'Links Q to the disturbance videos: adding hydrogen lowers Q, and the forward rate wins',
                    'This also explains the disturbance videos / add 0.20 moles per litre of hydrogen / The bottom of Q gets bigger / about sixteen, below K / too little product / the mixture shifts right',
                    'Four hydrogen dots drop into the settled tube, a pen ring moves to the bottom of Q, the Q marker drops left to 16.3 and the forward bar steps up above the reverse bar',
                    E, 'The settled tube (2, 2, 14) with the log line, the K marker and the Q marker at 49 sits with level rate bars; the card gains "same volume, same temperature"; four H2 dots drop in and the card shows "[H2] = 0.30 mol/L"; a pen ring moves to the denominator; the Q marker drops to 16.3 with "0.70^2 / (0.30 x 0.10) = 0.49 / 0.030 = 16.3"; on "too little product" the forward bar steps up above the reverse bar ("forward faster", no numbers); a pen arrow runs right and Q begins to climb back',
                    ['particle drop', 'ScribbleCircle', 'marker slide', 'NumberTicker rate bars', 'HandText write-on'], 'Hold the shifted markers'],
    'k-unchanged': ['adjust', 'Two ghost markers on the line for removing and adding HI and a pulsing teal K marker', 'Shows removal and addition move Q only, and that K does not change unless the temperature does',
                    'Taking out some hydrogen iodide does the same / pushes Q above K and sends it left / K never changed / Only a change of temperature changes K',
                    'Two ghost markers appear with arrows right and left, then the K marker pulses with a pen ring and its fixed tag',
                    E, 'Two small ghost markers appear at 12.25 (removing HI) and 100 (adding HI) with arrows right and left and tags only; on "K never changed" the teal K marker pulses with a pen ring and the tag "K = 49 (fixed at this temperature)"',
                    ['marker drop', 'ScribbleCircle', 'tag pop', 'DrawPath arrows'], 'Hold about 2 seconds after the last word'],
    'attempt': ['new', 'Coded sealed vessel with a pressure gauge, the Haber equation strip, a grouped givens card with units and two numbered demands', 'Unseen transfer on writing and calculating Q with a cube and judging the direction, with every given and condition visible and no answer cues',
                'Your turn / held at four hundred degrees Celsius, where K is 0.50 / nitrogen at 0.40 moles per litre, hydrogen at 0.50 and ammonia at 0.20 / will the mixture make more ammonia or less, and why / Pause here to answer',
                'The countdown ring runs through the answer-free thinking hold',
                E, 'The vessel, the equation strip, the grouped givens card (K = 0.50 at 400 C, sealed vessel with iron catalyst, the three concentrations in mol/L) and the made-up mixture chip appear as each is named; the two numbered demands stay on screen; earlier boards and the aid are removed; the countdown ring starts after the narration',
                ['Countdown ring', 'Enter reveals'], 'Quiet answer-free thinking hold with a 10 second countdown'],
    'feedback': ['adjust', 'The C5 builder writing Q with the 2 and 3 flying up as powers, a three-beat working, the number line with Q at 0.80 right of K at 0.50 and three wrong-answer chips', 'Explains the answer stage by stage and corrects the missing cube and the flipped rule',
                 'ammonia squared over nitrogen times hydrogen cubed / Hydrogen cubed is 0.50 times 0.50 times 0.50 / So Q is 0.040 over 0.050, which is 0.80 / Q is above K, 0.50 / you left the cube off the hydrogen / a Q above K means too much product',
                 'The expression builds with powers flying up, the working writes in three beats, the Q marker lands right of K with a greater-than sign and the ammonia dots fall, and three wrong chips are crossed',
                 E, 'The equation strip writes on and Q builds in the C5 builder with the 2 flying up on ammonia and the 3 flying up on hydrogen; "0.20^2 = 0.040", "0.50^3 = 0.125, 0.40 x 0.125 = 0.050" and "Q = 0.040 / 0.050 = 0.80" write in beats; the number line returns with K at 0.50 and Q landing at 0.80 with a ">" sign and the amber reverse arrow; the NH3 dots fall while N2 and H2 dots rise, looped once; three wrong-answer chips are crossed with captions',
                 ['expression builder', 'HandText write-on', 'marker drop', 'particle drift', 'Mark cross'], 'Settle on the corrected board'],
    'decision-rule': ['adjust', 'Two question cards with a miniature number line and three small arrows (blue, amber, teal bracket), then a next chip with a table-and-number-line icon', 'Packs the method into a reusable order, states the limit that it gives direction only, and hands off to harder ICE and Q decisions',
                      'write the expression, put in the concentrations from now, calculate Q / Q below K, the reaction runs forward / Q above K, it runs back / That gives you the direction, not how far it goes',
                      'Two cards write on one by one with the mini number line and three arrows, a tag says direction only, and the next chip slides in',
                      E, 'The first card "Given a mixture and K: Q, compare, direction." writes on with a mini number line and the Q marker chasing the K marker; the second card "Q < K forward. Q > K reverse. Q = K no net change." writes on with blue, amber and teal arrows and the tag "direction only, not how far"; on "next" the chip "Next: harder ICE tables and Q decisions" appears with a table-and-number-line icon',
                      ['HandText write-on', 'card slide-in', 'DrawPath arrows', 'chip slide-in'], 'Hold about 2 seconds after the last word'],
    'key-notes': ['new', 'Key notes card with the memory aid in large writing and its condition tag', 'Essentials to copy into books', 'key notes',
                  'Notes appear then stay still for copying',
                  H, 'The notes and the memory aid appear and lock', ['Enter reveals'], 'Quiet copy hold of about 90 seconds with pause invitation'],
}

C6A_ROWS = {
    'hook-types': ['new', 'Three type cards in a column, each with a one-line label and a mini ICE table of shaded cells showing which rows the question fills in, and a K chip', 'Names the three question types by what the question gives, so the learner can pick a method before calculating',
                   'three types / Type one / Type two / one value / K and the start / next',
                   'Three cards build one per cue, the single shaded cell on card two and the K chip on card three get pen rings, and card three dims with a next video tag',
                   E, 'Heading "Calculating with K: three types" writes on; card 1 (only the Equilibrium row shaded, K chip "?") builds on "Type one"; card 2 (Initial row and one Equilibrium cell shaded) builds on "Type two" with a pen ring on the single shaded cell; card 3 (Initial row shaded, filled K chip, Equilibrium row "?") builds on "K and the start" with a ring on the K chip; on "next" card 3 dims with the tag "next video" and cards 1 and 2 brighten',
                   ['card slide-in', 'mini ICE table', 'ScribbleCircle', 'dim and brighten', 'HandText write-on'], 'Hold about 1 second on the three cards'],
    'type-one': ['adjust', 'Card 1 as the task line, the equation strip, the C4b/C6 hot H2 + I2 tube (2, 2, 14 dots, 1 dot = 0.05 mol/L), the grouped givens card and the C5 expression builder', 'Teaches the quickest type: write the expression with the coefficient as a power and substitute the settled concentrations',
                 'so it holds 0.10 moles per litre / squared / 0.70 squared is 0.49 / which is 49 / divide by the volume first',
                 'The tube values fill the givens card line by line, the 2 flies from the equation strip to a power, the numbers drop into the brackets and the working writes to K = 49 in teal',
                 E, 'Card 1 slides to the top-left as "Find K" and the other cards leave; the equation strip and tube appear; the givens card fills "[H2] = 0.10, [I2] = 0.10, [HI] = 0.70 mol/L" with pen arrows from the dot groups; the builder writes K = [HI]^2 / ([H2][I2]) with the 2 flying up; "0.70^2 = 0.49", "0.10 x 0.10 = 0.010" and "K = 0.49 / 0.010 = 49" write in beats with the tag "K: no unit written"; a small grey aside "given moles? divide by litres first" writes under the givens card',
                 ['CardSlide', 'particle dots', 'expression builder', 'DrawPath arrows', 'HandText write-on', 'coefficient fly-in'], 'Hold about 2 seconds on K = 49'],
    'reverse-equation': ['adjust', 'The settled tube values 0.10, 0.10 and 0.70 at the left, the original equation with K = 49, the flipped equation strip, the C5 builder and a doubled-coefficient line', 'Shows that K belongs to the equation as written, so flipping the equation flips K and doubling the coefficients squares it',
                         'write the equation backwards / 0.010 over 0.49 / one over 49 / Flip the equation, flip K / Double every coefficient / 49 squared is 2401',
                         'The equation flips with a curved arrow, the new fraction builds and gives 0.020 beside 1 / 49, then a doubled-coefficient line gives K = 49^2 = 2401',
                         E, 'The type one tube and K = 49 stay at the left; the species swap sides with a curved arrow and "[H2][I2] / [HI]^2" builds with "0.10 x 0.10 / 0.70^2 = 0.010 / 0.49 = 0.020" and a bar "1 / 49" tagged "flipped"; "Flip the equation, flip K." writes with the tag "same temperature, equation as written"; a second line "2H2 + 2I2 = 4HI" has its coefficients ringed and "K = 49^2 = 2401" writes',
                         ['equation flip', 'expression builder', 'HandText write-on', 'ScribbleCircle'], 'Hold about 2 seconds on the flipped and doubled K values'],
    'type-two': ['new', 'The three type cards returning, card 1 ticked, card 2 lifting with its mini table pulsing', 'Names type two and what it gives before the worked example starts',
                 'Now type two / just one value / you have to find K',
                 'Card 1 gains a tick, card 2 lifts and its single shaded Equilibrium cell is ringed, then card 2 slides to the top-left as the task line and the board clears',
                 E, 'The cards return in their column; card 1 gains a tick; card 2 lifts and its mini table pulses with a pen ring on the one shaded Equilibrium cell on "one value"; card 2 slides to the top-left as the task line "Find K" and the board clears for the flask',
                 ['card slide-in', 'tick', 'ScribbleCircle', 'table pulse'], 'About 4 seconds in all, no extra hold'],
    'one-value': ['reuse', 'The painted C2 flask on its burner, the givens card, a swatch strip and sensor dial, and dashed question marks over the unknowns, with the empty table outline at the end', 'Poses the type two problem on a flask the learner knows, with colour as the reason one measured value exists',
                  'Back to the P C L five flask from earlier / 0.40 moles / 2.0 litre / Chlorine is yellow-green / 0.080 moles per litre / the equilibrium constant',
                  'The givens card fills on the amounts, the gas tints yellow-green, the dial settles on 0.080 and dashed question marks appear over the unknowns',
                  E, 'The painted flask appears; the givens card fills "0.40 mol" and "2.0 L" with pen rings; the flask tints and the sensor dial settles on "0.080" with the card line "at equilibrium: [Cl2] = 0.080 mol/L"; dashed question marks appear over PCl5, PCl3 and K; the empty table outline draws on at the end',
                  ['CameraStage push', 'HandText write-on', 'swatch strip fill', 'NumberTicker dial', 'ScribbleCircle'], 'Brief look at the question marks'],
    'ice-initial': ['adjust', 'Coded ICE table with the letters I, C and E becoming row labels, PCl5, PCl3 and Cl2 column headings with mol/L, the givens card division and the PCl5 particle lens', 'Introduces the ICE table by what each letter stands for and fills the initial row by converting moles to concentration',
                    'I C E table / I for initial / C for change / E for equilibrium / 0.40 moles over 2.0 litres is 0.20 moles per litre / zero',
                    'Three large letters settle into the row labels one by one, the division flies into the first Initial cell and the product cells tick to zero',
                    E, 'The task line, equation strip and givens card sit on the board; I C E writes as three large letters; "I" becomes "Initial", "C" becomes "Change", "E" becomes "Equilibrium" each on its own cue with a pen ring; the column headings write on; the Initial row highlights; "0.40 mol / 2.0 L = 0.20 mol/L" flies into the first Initial cell; the two product cells tick to 0; the lens shows 20 navy particles',
                    ['table build', 'ScribbleCircle', 'NumberTicker division', 'HandText write-on', 'particle dots'], 'Hold the initial row'],
    'equilibrium-first': ['new', 'The ICE table with a pen arrow from the givens card into the Cl2 Equilibrium cell, an E minus I bracket up the Cl2 column, a small rule chip and a ghost inset of the 8 measured green particles', 'Teaches the first two moves of type two: the measured value goes in the Equilibrium row, then subtraction gives its change',
                          'it goes straight into the equilibrium row / Change is equilibrium minus initial / the change is how far it moved from the start / plus 0.080',
                          'A pen arrow puts 0.080 into the Equilibrium cell, a bracket runs up the column to the Change cell and the working 0.080 minus 0 ticks to plus 0.080',
                          E, 'A pen arrow runs from "[Cl2] = 0.080 mol/L" into the Cl2 Equilibrium cell, which ticks to "0.080" with a ring; the other two Equilibrium cells show dashed "?"; a bracket "E - I" draws up the Cl2 column with "0.080 - 0 = +0.080" and the Change cell ticks to "+0.080" in the made colour; the rule chip "1 measured value into E. 2 Change = E - I." writes under the table; a ghost inset shows "measured: 8 green at equilibrium"; no particle splits in this scene',
                          ['DrawPath arrow', 'bracket draw', 'table cell tick', 'ScribbleCircle', 'HandText write-on'], 'Hold the first two rule lines'],
    'change-row': ['adjust', 'The ICE table with the Change row, a particle lens showing PCl5 splitting into PCl3 and Cl2, coefficient chips flying into the cells and a ratio chip', 'Shows that the other changes follow the coefficients, with used up as minus and made as plus',
                   'one P C L three and one chlorine / because one is used up for every chlorine made / The change row follows the coefficients / a plus',
                   'One navy particle splits into a violet and a green, the coefficient chips fly into the cells and the other two cells tick to plus and minus 0.080 with made and used up labels',
                   E, 'The ghost inset fades; one navy particle in the lens splits into one violet and one green with pen rings and the rest follow in a quick wave; the coefficient chips fly from the equation strip into the PCl3 and PCl5 Change cells; PCl3 ticks to "+0.080" with "made" and PCl5 to "-0.080" with "used up"; the chip "1 : 1 : 1" lies along the row; the rule chip gains "3 Other changes from the coefficients."',
                   ['particle split', 'coefficient fly-in', 'table cell tick', 'ScribbleCircle'], 'Hold the change row'],
    'equilibrium-row': ['adjust', 'The ICE table with a pen plus between the Initial and Change rows, a teal tick on the already filled Cl2 cell and the lens settling to 12, 8, 8', 'Completes the Equilibrium row as initial plus change and checks it against the measured value',
                        'complete the equilibrium row / initial value plus the change / minus 0.080, is 0.12 / it agrees',
                        'A pen plus draws between the rows, the PCl5 and PCl3 cells tick in turn, the measured Cl2 cell gets a teal tick and the lens settles to 12, 8, 8',
                        E, 'A pen plus draws between the Initial and Change rows; the PCl5 cell ticks with "0.20 + (-0.080)" then "0.12"; the PCl3 cell ticks "0 + 0.080" then "0.080"; on "agrees" the Cl2 cell gets a teal tick and "0 + 0.080 = 0.080" writes small beside it; the lens settles to 12 navy, 8 violet, 8 green; the rule chip gains "4 Complete E = I + C."; the plus and equals marks fade when the row is full',
                        ['pen draw', 'table cell tick', 'particle settle', 'tick'], 'Hold the finished table'],
    'find-k': ['reuse', 'C5 expression builder beside the finished table, pen arrows from the Equilibrium cells and a check line 12 + 8 = 20', 'Calculates K from the equilibrium row only and checks the subtraction against the start',
               'Products over reactants / equilibrium values / 0.0064 divided by 0.12 is 0.0533 / K is 0.053 / 0.12 plus 0.080 is 0.20',
               'The expression builds beside the table, the equilibrium values drop in by pen arrows and the working writes to 0.053, then the particle counts are ringed for the check',
               E, 'The earlier rows dim as the Equilibrium row is highlighted with the tag "equilibrium values only"; the builder writes K = [PCl3][Cl2] / [PCl5]; "0.080 x 0.080 / 0.12 = 0.0064 / 0.12 = 0.0533" writes, then "K = 0.053" larger with "2 s.f."; the tag "K: no unit written" stays; "12 + 8 = 20 = start" writes with a tick',
               ['expression builder', 'DrawPath arrows', 'HandText write-on', 'ScribbleCircle', 'tick'], 'Hold about 2 seconds on the checked result'],
    'memory-aid': ['adjust', 'The finished PCl5 table with two handwritten habit lines, the Change row lit with a 1 : 1 : 1 chip and the Equilibrium row marked with a crossed ratio chip', 'Gives two habits for type two after the cause is explained: measured value first, and only the change row follows the coefficients',
                   'Two habits / equilibrium row / only the change row follows the coefficients / one to one to one / are not',
                   'The first habit writes large with the pen arrow replaying once, the second habit writes beneath, the Change row gets a ratio tick and the Equilibrium row a ratio cross',
                   E, 'The finished table fills the board; "Measured value: Equilibrium row first." writes large with the pen arrow from scene 6 replaying once; "Only the change row follows the coefficients." writes beneath; the Change row lights with the chip "1 : 1 : 1" and a tick; the Equilibrium row gets "0.12 : 0.080 : 0.080" with a cross and "not 1 : 1 : 1"; the condition tag "used up is minus, made is plus" lands',
                   ['HandText write-on', 'DrawPath arrow', 'row highlight', 'chip pop', 'Mark cross'], 'Hold about 2 seconds'],
    'attempt': ['reuse', 'Painted colourless N2O4 vessel, the equation strip, a grouped givens card with units, two numbered demands and an empty ICE outline as a first-use scaffold', 'Unseen transfer on a type two question with a 1 : 2 ratio, then a reversal, with every given and unit visible and no answer cues',
                'Your turn / N two O four / 0.100 moles / 2.00 litre / 0.0300 moles per litre / the equation written the other way / Pause here to answer',
                'The countdown ring runs through the answer-free thinking hold',
                E, 'The vessel, the equation, the givens card and the illustrative values chip appear as each is named; the two numbered demands stay on screen with an empty ICE outline; earlier boards and the aids are removed; the countdown ring starts after the narration',
                ['Countdown ring', 'Enter reveals'], 'Quiet answer-free thinking hold with a 10 second countdown'],
    'feedback-one': ['adjust', 'The attempt board with the ICE table building in the equilibrium-row-first order, the E minus I bracket, a divide by two arrow and a dot strip of 3 of 10 N2O4 dots splitting', 'Explains item one stage by stage using the same order as the worked example',
                     '0.0500 moles per litre / equilibrium row / plus 0.0300 / half of that / 0.0350 / 0.0257',
                     'The table fills in the taught order, the half-of-the-change arrow draws and the working writes to 0.0257',
                     E, 'The givens card divides 0.100 / 2.00 into the N2O4 Initial cell and 0 ticks into NO2; the pen arrow puts 0.0300 into the NO2 Equilibrium cell and the E - I bracket gives "+0.0300"; coefficient chips 1 and 2 fly in with a pen "divide by 2" arrow to "-0.0150"; "0.0500 - 0.0150 = 0.0350" ticks; "0.0300^2 = 0.000900", "0.000900 / 0.0350" and "K = 0.0257" write in beats; a silent check line ticks',
                     ['table cell tick', 'DrawPath arrow', 'bracket draw', 'coefficient fly-in', 'particle split', 'HandText write-on'], 'Keep the table for the next scene'],
    'feedback-slips': ['adjust', 'Three wrong-answer chips with pen arrows to the table cells that cause them', 'Corrects the three likeliest numerical slips by naming the cell each one came from',
                       '0.018 / 0.045 / 0.86 / forgot to square the N O two',
                       'Each chip fades in on its number, a pen arrow or ring points at the cause and the chip is crossed with its caption',
                       E, '"0.018: initial used" with a pen arrow to the N2O4 Initial cell; "0.045: change not halved" with an arrow to the Change cell and grey "not halved: -0.0300, leaves 0.0200"; "0.86: power left off" with a ring on the missing square; each chip is crossed on its number',
                       ['chip pop', 'Mark cross', 'DrawPath arrow', 'ScribbleCircle'], 'Settle on the corrected table'],
    'feedback-two': ['reuse', 'The flipped equation strip with the expression builder and the finished table, with one crossed wrong-answer chip', 'Explains item two as the flip of the item one value',
                     'one over 0.0257, which is 38.9 / The expression is N two O four over N O two squared / 0.0257 again / check the direction of the equation',
                     'The equation strip flips, the fraction builds and gives 38.9 with a one over 0.0257 tag, and the repeated 0.0257 chip is crossed',
                     E, 'The equation strip flips; "[N2O4] / [NO2]^2 = 0.0350 / 0.000900 = 38.9" builds with the tag "= 1 / 0.0257" and the answer lands after the expression; the chip "0.0257 again" is crossed with "direction flipped"; the finished table and both K values hold together',
                     ['equation flip', 'expression builder', 'Mark cross'], 'Hold about 2 seconds'],
    'decision-rule': ['adjust', 'The three type cards returning with card 3 dimmed, method lines on cards 1 and 2, a four-step rule chip and a reversed chip, then a next chip', 'Packs types one and two into a reusable order and hands off to type three',
                      'type one / equilibrium row / coefficients / flip K / Next',
                      'Card 1 gains its method line, card 2 lights its four steps in turn on the spoken words, a reversed chip attaches and card 3 lifts on the word next',
                      E, 'The type cards return with card 3 dimmed; card 1 gains "write K, substitute" on "type one"; card 2 gains the four-step chip with each step lighting on its words; "reversed: 1 / K" attaches under card 1 on "flip K"; on "Next" card 3 lifts with the chip "Next: K and a start, find the concentrations"',
                      ['card slide-in', 'step light', 'chip pop', 'dim and brighten'], 'Hold about 2 seconds'],
    'key-notes': ['reuse', 'Key notes card with the memory aids in large writing and their condition tag', 'Essentials to copy into books', 'key notes',
                  'Notes appear then stay still for copying',
                  H, 'The notes and the memory aids appear and lock', ['Enter reveals'], 'Quiet copy hold of about 50 seconds with pause invitation'],
}

C6B_ROWS = {
    'hook': ['adjust', 'The C6a type cards in their column with cards 1 and 2 ticked and card 3 lifting to the centre, its mini ICE table showing a filled K chip and an empty Equilibrium row', 'Poses type three and explains why nothing measured at equilibrium makes the change an unknown x',
             'type three / nothing at equilibrium is measured / the change has to be an unknown',
             'Card 1 and 2 tick, card 3 lifts, a pen ring circles the empty Equilibrium row and an x writes into the Change row of the mini table',
             E, 'Card 1 ticks with "0.70^2 / (0.10 x 0.10) = 49" on "49"; card 2 ticks; on "type three" card 3 lifts to the centre with its Equilibrium row of dashed "?" cells; on "nothing" a pen ring circles the empty row and a crossed ghost of the measured-value arrow fades in and out; on "unknown" an x writes into the Change row; card 3 then slides to the top-left as the task line',
             ['card slide-in', 'tick', 'ScribbleCircle', 'HandText write-on'], 'Brief hold on the unknown x'],
    'k-given': ['reuse', 'Fresh board with the task line, the H2 + I2 equation strip with the 2 highlighted, the givens card, the hot tube with 9, 9, 0 dots and a new ICE table outline', 'Switches the task to K and the start known, with the settled concentrations wanted',
                'Now the other way round / K is 49 / 0.05 moles per litre / 0.45 moles per litre',
                'The board builds, the K chip pops on 49 and the Initial row ticks to 0.45, 0.45 and 0',
                E, 'The task line, equation strip and givens card "K = 49 (450 C)" write on; the tube with 9 H2 and 9 purple I2 dots and the key "1 dot = 0.05 mol/L" appears; the K chip pops on "49"; the Initial row ticks 0.45, 0.45, 0',
                ['CameraStage push', 'chip pop', 'table build', 'particle dots'], 'Hold the initial row into the next scene'],
    'unknown-x': ['reuse', 'The ICE table, one H2 and one I2 dot becoming two HI dots, and coefficient chips flying into the Change row', 'Introduces x as the amount used up and shows the change row follows the coefficients',
                  'call the amount of hydrogen used up x / two H I / minus x, minus x and plus two x',
                  'An x writes with an arrow to one H2 dot, one H2 and one I2 meet and become two HI, and the Change row fills',
                  E, 'A bracket "x = H2 used up, mol/L" writes with an arrow to one H2 dot; a single H2 and I2 dot meet and become two HI dots; the coefficient chips fly into the Change row giving "-x", "-x", "+2x"',
                  ['HandText write-on', 'particle meeting', 'coefficient fly-in'], 'Hold the change row'],
    'substitute': ['reuse', 'The Equilibrium row algebra, the C5 expression returning, a pen ring on (2x)^2, a perfect-square label on the bracketed fraction and root signs over both sides', 'Substitutes into K and shows the whole fraction is squared so a square root can be taken',
                   '0.45 minus x / two x all squared / a perfect square / seven squared / we keep plus seven',
                   'The Equilibrium row fills with algebra, the equation writes as a squared fraction equal to 49, the label points at the bracketed fraction and the root signs draw over both sides',
                   E, 'The Equilibrium row fills "0.45 - x", "0.45 - x", "2x"; "(2x)^2 / (0.45 - x)^2 = 49" writes with a pen ring and a chip "(2x)^2 = 2x times 2x, not 2x^2"; the two (0.45 - x) factors are ringed with "equal because H2 and I2 started equal"; the line rewrites to "(2x / (0.45 - x))^2 = 7^2" with the label "perfect square: something squared"; two root signs draw and the line becomes 2x / (0.45 - x) = 7 with a tick',
                   ['table cell tick', 'expression builder', 'ScribbleCircle', 'root sign draw', 'HandText write-on'], 'Hold the root line'],
    'solve': ['reuse', 'The algebra line moving up one stage at a time, then the countdown ring beside 9x = 3.15 and x = ?', 'Lets the learner finish the last step themselves before the answer',
              'Multiply both sides by 0.45 minus x / 7 times 0.45 minus x / Add 7x / nine x equals 3.15 / Find x. Pause here and try it.',
              'The line transforms through 2x = 7(0.45 - x), 2x = 3.15 - 7x and 9x = 3.15, then holds on x = ? while the countdown runs',
              E, 'The line becomes "2x = 7(0.45 - x)" with the 7 flying into the bracket, then "2x = 3.15 - 7x", then the 7x slides across to give "9x = 3.15"; the question "x = ?" holds with the countdown ring and "Pause here and try it." in handwriting',
              ['HandText write-on', 'coefficient fly-in', 'Countdown ring'], '10 second answer-free countdown after "Pause here and try it."'],
    'check': ['reuse', 'The answer x = 0.35, the Change and Equilibrium rows turning into numbers, a substitute-back check and the rejected negative root', 'Gives the answer, completes the table, checks by substituting back and rejects the negative root',
              'x is 0.35 / 0.10 moles per litre / Check by substituting back / Why not minus seven / 0.63',
              'x = 0.35 ticks, the table fills with numbers, the check writes to 49 and minus seven is crossed',
              E, '"x = 0.35 mol/L" ticks; the Change cells become -0.35, -0.35, +0.70 and the Equilibrium cells 0.10, 0.10, 0.70; the tube moves to 2, 2, 14 with the tag "the type one tube from the last video"; "0.70^2 / (0.10 x 0.10) = 49" writes with a tick; "-7 gives x = 0.63 > 0.45" is crossed',
              ['NumberTicker', 'table cell tick', 'HandText write-on', 'Mark cross'], 'Hold about 2 seconds on the checked table'],
    'memory-aid': ['reuse', 'The finished H2 + I2 table with the Change row lit, ratio chips and a large handwritten habit line', 'Reinforces that only the change row follows the coefficients',
                   'Only the change row follows the coefficients / one, one, two / are not',
                   'The Change row lights with a 1 : 1 : 2 chip and a tick while the Equilibrium row gets a crossed ratio chip',
                   E, 'The aid writes large over the finished table; the Change row lights with "1 : 1 : 2" and a tick; the Equilibrium row gets "0.10 : 0.10 : 0.70" with a cross and "not 1 : 1 : 2"; a tag explains that H2 and I2 match only because they started equal; the condition tag "used up is minus, made is plus" lands',
                   ['row highlight', 'chip pop', 'Mark cross', 'HandText write-on'], 'Hold about 2 seconds'],
    'square-condition': ['new', 'The K equation returning large with the two bottom factors ringed, brackets marking the top and bottom as squares, a K = 50 swap and a crossed unequal-starts example', 'Explains why the square root worked: the top and the bottom are both squares, not because K is a square number',
                         'started equal / a square / If K were 50 / both squares / the fraction, not the number K / tiny K',
                         'The two bottom factors ring together, square brackets mark the top and the bottom, the 49 swaps for 50 and still works, and a label defines perfect square as the whole fraction',
                         E, '"(2x)^2 / ((0.45 - x)(0.45 - x)) = 49" returns large; on "started equal" the two factors ring with a pen line to "start: [H2] = [I2] = 0.45"; on "square" the bottom rewrites as "(0.45 - x)^2" and a bracket "square" lies under the top and the bottom; the 49 swaps for a grey 50 and "2x / (0.45 - x) = 7.07" ticks with "still works"; the label "perfect square = the whole fraction is something squared" writes; a crossed unequal-starts line appears; on "tiny K" the chip "next: tiny K" appears',
                         ['ScribbleCircle', 'bracket draw', 'number swap', 'Mark cross', 'chip pop', 'HandText write-on'], 'Hold the perfect-square label'],
    'tiny-k-setup': ['new', 'Fresh board with a hot iodine tube of paired purple dots with one splitting into two atoms, a K scale at 10^-5, a two-column ICE table and the C5 builder', 'Sets up a tiny-K case with the unknown x, the change row and the K line',
                     'iodine atoms / 1.6 times ten to the minus five / 0.25 moles per litre / Call the I two that splits x / minus x and plus two x / two x all squared, over 0.25 minus x',
                     'One iodine molecule splits into two atoms, the K chip and scale show how small K is, the table fills stage by stage and the builder writes the K line',
                     E, 'A camera push brings the fresh board; the equation I2 = 2I writes with the 2 highlighted; one purple molecule splits into two violet dots with a ring; the givens card shows "K = 1.6 x 10^-5 (very hot)" with the chip "illustrative value" and a small scale showing 10^-5 far below 1; the table fills Initial 0.25 and 0, the bracket "x = I2 that splits, mol/L", Change "-x" and "+2x" with the 2 flying in, Equilibrium "0.25 - x" and "2x"; the builder writes K = (2x)^2 / (0.25 - x)',
                     ['CameraStage push', 'particle split', 'table build', 'coefficient fly-in', 'expression builder'], 'Hold the K line'],
    'tiny-k-drop': ['new', 'The new check ruler: a long purple bar for the start 0.25 with a hair-thin sliver for x, the equation line with the x greying out of the bottom, and a condition card', 'Teaches why x can be dropped from start minus x when K is tiny, keeping x where it is the answer',
                    'The bottom is not a square / x is tiny / drop the x / Keep the x on top / K very small / a start that is not tiny',
                    'The ruler shows the sliver is almost nothing next to the start, the x greys out of the bottom, a ring holds the top and the condition card writes with two ticks',
                    E, 'The ruler draws under the equation with the bar "start: 0.25" and a sliver "x?"; the bar without the sliver is laid over the full bar and they look the same; the "- x" in (0.25 - x) greys and slides out, the line becomes "(2x)^2 / 0.25 = 1.6 x 10^-5" and the cell shows "about 0.25"; a pen ring holds (2x)^2 with "keep: this is the answer"; the givens card shrinks to a one-line strip; the condition card "Drop x only when: K very small, and the start not tiny" writes with two ticks',
                    ['bar draw', 'overlay compare', 'text slide-out', 'ScribbleCircle', 'tick'], 'Hold the condition card'],
    'tiny-k-solve': ['new', 'The algebra line transforming one stage at a time with a pen aside, and the table Equilibrium row ticking', 'Solves the easier equation with each algebra step explained',
                     'four x squared / Dividing by 0.25 is the same as multiplying by four / sixteen x squared / divide both sides by sixteen / 0.0010 / 0.0020',
                     'The line transforms through 4x^2 / 0.25, 16x^2, x^2 = 1.0 x 10^-6 and x = 0.0010, then the table ticks 0.0020 and about 0.25',
                     E, 'The line "4x^2 / 0.25 = 1.6 x 10^-5" becomes "16x^2 = 1.6 x 10^-5" with a pen aside "dividing by 0.25 is multiplying by 4", then "x^2 = 1.0 x 10^-6", then "x = 1.0 x 10^-3 = 0.0010 mol/L"; the Equilibrium row ticks "2x = 0.0020" and "about 0.25"',
                     ['HandText write-on', 'algebra line', 'table cell tick'], 'Hold the answer line'],
    'tiny-k-check': ['new', 'The check ruler at full width with x drawn to scale against a dashed 5 per cent line, then a substitute-back working ending in a teal K tick', 'Checks the shortcut was fair and substitutes back',
                     '0.4 per cent / 5 per cent / rule of thumb / Substitute back / 1.6 times ten to the minus five',
                     'The sliver is labelled 0.4 per cent and ticked, the dashed 5 per cent line labels itself a rule of thumb and the substitution writes to K',
                     E, 'The ruler returns full width with the sliver x = 0.0010 against the start 0.25 and a dashed line at 5 per cent; "0.0010 / 0.25 = 0.4%" writes with a tick; the dashed line labels itself "5%: a school rule of thumb"; "0.0020^2 = 4.0 x 10^-6" and "4.0 x 10^-6 / 0.25 = 1.6 x 10^-5" write with a teal "= K" tick',
                     ['bar draw', 'dashed line reveal', 'HandText write-on', 'tick'], 'Hold about 2 seconds'],
    'no-quadratic': ['new', 'A card saying the quadratic formula is allowed but HSC questions are written so you should not need it, a greyed sketch of the formula, and a two-shortcut card with a perfect-square half and a tiny-K half', 'Says the quadratic formula may be used but HSC questions are written so you should not need it, and gives the two shortcuts to look for',
                     "quadratic formula / shouldn't need / perfect square / Is K tiny / Drop the x, then check it",
                     "The card writes on, the formula sketch fades and greys on the words shouldn't need, and the two halves of the shortcut card build on their cues",
                     E, 'The card "Quadratic formula: allowed. HSC questions are written so you should not need it." writes on with a grey sketch of the formula that fades and greys on the words should not need; the left half "Perfect square: square root (keep the positive root)" builds with a thumbnail of 2x / (0.45 - x) = 7; the right half "Tiny K, start not tiny: drop x, then check under about 5%" builds with a thumbnail of the check ruler',
                     ['card slide-in', 'fade and grey', 'HandText write-on', 'thumbnail pop'], 'Hold about 2 seconds'],
    'attempt': ['new', 'Coded engine cylinder vignette, the N2 + O2 = 2NO equation, a grouped givens card with units, the demand line and an empty ICE outline as a scaffold', 'Unseen transfer where both shortcuts work, with every given and the demand visible and no answer cues',
                'Your turn / N two plus O two makes two N O / 4.0 times ten to the minus four / 0.50 moles per litre / no N O / Pause here to answer',
                'The countdown ring runs through the answer-free thinking hold',
                E, 'The cylinder, equation and givens card appear as each is named, with the chip "illustrative values"; the demand "Find [NO] at equilibrium." stays on screen; the two-shortcut card is removed; an empty ICE outline stays; the countdown ring starts after the narration',
                ['Countdown ring', 'Enter reveals', 'card slide-in'], 'Quiet answer-free thinking hold with a 10 second countdown'],
    'feedback-square': ['new', 'The ICE table filling on the cues and the board splitting into two columns under the two-shortcut headings, the left column filling with the square-root working', 'Explains the attempt by the perfect-square route, one route in this scene',
                        'two x / perfect square / take the square root / 0.020 / 0.0099',
                        'The table fills in order, the board splits into two columns, the root signs draw on the left and the working ends in a ticked NO concentration',
                        E, 'The table fills Initial 0.50, 0.50, 0; Change "-x", "-x", "+2x" with chips "1 : 1 : 2"; Equilibrium "0.50 - x", "0.50 - x", "2x"; the K line "(2x)^2 / (0.50 - x)^2 = 4.0 x 10^-4" writes; the board splits into two columns; on "perfect square" root signs draw and the left column writes "2x / (0.50 - x) = 0.020", "2x = 0.010 - 0.020x", "2.02x = 0.010", "x = 0.00495", "[NO] = 2x = 0.0099 mol/L" with a tick; the right column shows only its heading',
                        ['table cell tick', 'coefficient fly-in', 'root sign draw', 'HandText write-on', 'tick'], 'Keep the left column for the next scene'],
    'feedback-tiny-k': ['new', 'The left column kept with its working dimmed, the right column filling with the drop-the-x working, and the check ruler at 1 per cent with a bracket joining the two answers', 'Explains the attempt by the tiny-K route and shows the two routes agree',
                        'drop the x / sixteen x squared / 0.010 / 1 per cent / agree to about 1 per cent',
                        'The right column writes the drop-the-x working, the ruler shows x at 1 per cent under the dashed line and a bracket joins the two answers',
                        E, 'The left result line stays; the right column writes "(0.50 - x)^2 is about 0.50 x 0.50 = 0.25", "4x^2 / 0.25 = 16x^2 = 4.0 x 10^-4", "x^2 = 2.5 x 10^-5, x = 0.0050", "[NO] = 2x = 0.010 mol/L"; the ruler shows x = 0.0050 against 0.50 at "1%" under the dashed 5 per cent line with a tick; a bracket joins the two answers with "agree to within about 1%"; both columns carry a tick',
                        ['HandText write-on', 'bar draw', 'bracket draw', 'tick'], 'Hold the two ticked columns'],
    'feedback-slips': ['new', 'Three wrong-answer chips with pen arrows to the table cell, the denominator or the equation coefficient that causes each', 'Corrects the three likeliest slips by naming their cause',
                       '0.0050 / 0.014 / plus x for N O / coefficient',
                       'Three chips fade in on their cues and are crossed with captions while pen arrows point at the cause',
                       E, '"0.0050: that is x, [NO] = 2x" with a pen arrow to the "+2x" cell; "0.014: bottom should be [N2][O2] = 0.50 x 0.50" with a ring on the denominator and grey working; "+x for NO: coefficient 2" with a pen arrow from the 2 in the equation strip; each chip is crossed on its cue',
                       ['chip pop', 'Mark cross', 'DrawPath arrow', 'ScribbleCircle'], 'Hold about 2 seconds'],
    'decision-rule': ['adjust', 'The three type cards with cards 1 and 2 ticked, card 3 gaining a method line, the two-shortcut card attached beneath and a next chip with a furnace-and-tube icon', 'Packs type three into a reusable order and hands off to why factories do not wait for equilibrium',
                      'type three / perfect square / tiny K / substitute back / Next',
                      'Card 3 gains its method line, each half of the shortcut card lights on its cue, a teal tick appears under both and the next chip slides in',
                      E, 'The cards return with cards 1 and 2 ticked; card 3 gains "x from the coefficients, E = I + C, into K" on "type three" and the two-shortcut card attaches beneath, each half lighting on its cue; a teal tick "substitute back" appears under both; on "Next" the chip "Next: why factories do not wait for equilibrium" appears with a furnace-and-tube icon',
                      ['card slide-in', 'step light', 'tick', 'chip slide-in'], 'Hold about 2 seconds'],
    'key-notes': ['reuse', 'Key notes card with the memory aid in large writing and its condition tag', 'Essentials to copy into books', 'key notes',
                  'Notes appear then stay still for copying',
                  H, 'The notes and the memory aid appear and lock', ['Enter reveals'], 'Quiet copy hold of about 50 seconds with pause invitation'],
}

G03_ROWS = {
    'hook-board': ['adjust', 'The C6a type-card column extended to five cards, each with a one-line given and asked, a ghost question card, a flame icon on the hardest and a bracket between cards 3 and 4', 'Poses the main question: what the question gives and asks decides the method',
                   'five types / given / asked / one settled value / K and a start / A mixture and a K / added / the last one, the hardest',
                   'The five cards build as each type is said, the words given and asked get pen rings on a ghost question card, a bracket links cards 3 and 4 and a flame lands on card 5',
                   E, 'The heading "What you are given and asked decides the method" writes on; five cards build in a column on the cues (1 settled amounts: find K; 2 start plus one settled value; 3 start plus K; 4 mixture plus K; 5 old equilibrium plus something added); cards 1 to 3 carry a tag "C6a, C6b"; "given" and "asked" are pen ringed on the ghost question card; a bracket "same givens, different demand" joins cards 3 and 4; a flame icon lands on card 5 on "hardest"; the tag "HSC-style questions, written for HSCScience" shows',
                   ['card slide-in', 'mini ICE table', 'ScribbleCircle', 'bracket draw', 'icon pop', 'HandText write-on'], 'Hold about 2 seconds after the last word'],
    'direct-k': ['adjust', 'Task and equation strip with a givens card of moles, a mol/L column the amounts divide into, the C5 builder, a moles-only crossed chip and a silent CaCO3 card', 'Practises type one and the classic trap of using moles in K',
                 'two litre / divide by two first / powers / 53.3 / 26.7',
                 'The amounts divide by 2.00 and fly to a mol/L column, the builder writes the expression with the powers flying up, the working writes to 53.3 and a moles-only chip is crossed',
                 E, 'The givens card shows "vessel: 2.00 L" and the three amounts; on "divide by two first" each amount divides by 2.00 and flies into a mol/L column (0.150, 0.0750, 0.300); the builder writes K = [SO3]^2 / ([SO2]^2 [O2]) with the 2s flying up and a crossed ghost "2 x [SO2]" captioned "power, not multiplier"; "0.300^2 = 0.0900", "0.150^2 x 0.0750 = 0.0016875" and "K = 53.3" write in beats; the chip "moles used: 26.7" is crossed with "K needs mol/L"; a silent CaCO3 card shows two greyed solids',
                 ['NumberTicker division', 'expression builder', 'coefficient fly-in', 'Mark cross', 'HandText write-on'], 'Hold about 2 seconds'],
    'ice-one-value': ['adjust', 'The C6 ICE table with SO2, O2 and SO3 columns, the equilibrium-row-first pen arrow and E minus I bracket, coefficient chips, the C5 builder and three silent crossed slip chips', 'Practises type two with the measured value in the equilibrium row first, in a case with a 2 : 1 ratio',
                      'one settled value / another two litre vessel / different temperature / 0.160 moles per litre / equilibrium row / plus 0.160 / falls / half / only / 229',
                      'The table fills in the taught order, the pen arrow and bracket give the measured change, the coefficient chips fly in and only the equilibrium values drop into K',
                      E, 'The givens card and the tag "a different temperature from the last question, so a different K" appear; the Initial row ticks 0.200, 0.150, 0; the pen arrow puts 0.160 into the SO3 Equilibrium cell and the "E - I" bracket gives "+0.160"; SO2 ticks "-0.160" with chip "2 : 2"; O2 ticks "-0.0800" with chip "1 : 2" and a "divide by 2" arrow; the Equilibrium row completes 0.0400 and 0.0700; the builder writes K with the tag "equilibrium values only" and "K = 0.0256 / 0.000112 = 229"; three silent crossed chips carry the slips',
                      ['table cell tick', 'DrawPath arrow', 'bracket draw', 'coefficient fly-in', 'expression builder', 'Mark cross'], 'Hold about 2 seconds'],
    'tiny-k-question': ['adjust', 'A fresh question board with both demands on the task line, the N2O4 equation strip, the givens card, the C6b two-shortcut card with headings only and an empty ICE outline', 'Poses a type three practice question where the learner must choose the shortcut, with every given and demand visible',
                        'K and a start / perfect square / tiny K / 4.0 times ten to the minus four / 0.500 moles per litre / Which shortcut fits / Pause here to answer',
                        'The board builds as each given is named, the two shortcut headings appear on their cues with neither ticked, and the countdown ring runs through the answer-free hold',
                        E, 'The task line "Which shortcut fits? Find [NO2] at equilibrium." and the equation appear; the givens card shows "K = 4.0 x 10^-4" and "start: [N2O4] = 0.500 mol/L, no NO2" with the two tags; on "perfect square" and "tiny K" the two-shortcut card appears with headings only; the empty ICE outline stays; the countdown ring starts after the narration',
                        ['Countdown ring', 'card slide-in', 'Enter reveals'], 'Quiet answer-free thinking hold with a 10 second countdown'],
    'tiny-k-setup': ['adjust', 'The ICE table filling on the cues, the K line, the bottom ringed, the perfect-square half of the shortcut card crossed and the tiny-K half ticked', 'Chooses the shortcut for the question: the bottom is not a square, K is tiny',
                     '0.500 minus x / two x / not a square / tiny / drop the x',
                     'The table fills in order, the bottom is ringed and the perfect-square half is crossed, the tiny-K half ticks and the x greys out of the bottom',
                     E, 'The table fills Initial 0.500 and 0; Change "-x" and "+2x" with chips "1 : 2"; Equilibrium "0.500 - x" and "2x"; the line "(2x)^2 / (0.500 - x) = 4.0 x 10^-4" writes; on "not a square" the bottom is ringed and the perfect-square half greys with a cross; on "tiny" the tiny-K half ticks; on "drop the x" the "- x" greys and slides out and the cell shows "about 0.500"; an unspoken crossed chip "(2x)^2 = 2x^2" appears',
                     ['table cell tick', 'coefficient fly-in', 'ScribbleCircle', 'Mark cross', 'tick', 'text slide-out'], 'Hold the dropped line'],
    'tiny-k-solve-and-test': ['adjust', 'The working writing in beats, the C6b check ruler with x against the start and a dashed 5 per cent line, and an exact-value tag', 'Solves with the shortcut and tests it before trusting it',
                              'Four x squared / eight x squared / 5.0 times ten to the minus five / 0.0071 / 0.014 / Test it / 1.4 per cent',
                              'The working writes in beats to 0.014, then the ruler shows 1.4 per cent well under the dashed line with a tick and the aid chip lands',
                              E, 'The working writes "4x^2 / 0.500 = 8x^2 = 4.0 x 10^-4", "x^2 = 5.0 x 10^-5", "x = 0.0071", "[NO2] = 2x = 0.014 mol/L"; the ruler shows x = 0.0071 against 0.500 at "1.4%" under the dashed 5 per cent line ("a school rule of thumb") with a tick; the tag "exact answer 0.0140; the shortcut is about 0.7% high" appears; the aid chip "Test it or don\'t use it" lands',
                              ['HandText write-on', 'bar draw', 'dashed line reveal', 'tick', 'chip pop'], 'Hold about 2 seconds'],
    'huge-k-setup': ['adjust', 'A fresh board with the 2SO2 + O2 = 2SO3 strip, a givens card with a huge K and a product-only start, and an ICE table with signs reversed', 'Sets up the mirror case: with a huge K and a product start almost nothing splits',
                     'huge K / 4.0 times ten to the ten / oxygen / two x / about 0.400',
                     'The board builds, the ICE table fills with plus 2x, plus x and minus 2x, and the last cell shades to about 0.400 with a tag about how little splits',
                     E, 'Task "Find [O2] at equilibrium", the equation, and the givens card "K = 4.0 x 10^10", "start: [SO3] = 0.400 mol/L, no SO2, no O2" with the two tags appear; the table fills Initial 0, 0, 0.400; Change +2x, +x, -2x; Equilibrium 2x, x, 0.400 - 2x with the last cell shaded to about 0.400 and the tag "K is very large; test how little SO3 splits"',
                     ['board build', 'table build', 'coefficient fly-in', 'tag pop'], 'Hold about 1 second'],
    'huge-k-solve': ['adjust', 'The C5 builder writing K for the product start and the working in beats down to x cubed, with an unspoken crossed (2x)^2 chip', 'Solves the huge-K case with each step shown',
                     '0.160 / one times ten to the minus twelve / one times ten to the minus four / x cubed',
                     'The expression builds and the working writes in beats to x = 1.0 x 10^-4',
                     E, 'The builder writes K; the working writes "0.400^2 / ((2x)^2 x) = 4.0 x 10^10", "0.160 / 4x^3 = 0.040 / x^3", "x^3 = 0.040 / (4.0 x 10^10) = 1.0 x 10^-12", "x = 1.0 x 10^-4 mol/L" with the tag "K: no unit written"; an unspoken crossed chip "(2x)^2 = 2x^2" appears',
                     ['expression builder', 'HandText write-on', 'Mark cross'], 'Hold the answer line'],
    'huge-k-test-and-reactant-start': ['adjust', 'The check ruler with 2x against 0.400 at 0.05 per cent, then a coded mini diagram of reactants running all the way to products with a small x bar returning', 'Tests the huge-K shortcut and states the reactant-start case in one sentence',
                                       'Test it / 0.00020 / Now the other way round / started with just the reactants / products / back / An excess of one reactant would stay',
                                       'The ruler shows 2x as a hair against the start, the final concentrations write, and a mini diagram shows reactants going to products with a small x taken back',
                                       E, 'The ruler shows 2x = 0.00020 against 0.400 at "0.05%" under the 5 per cent line with a tick; the final line "[O2] = 1.0 x 10^-4 mol/L, [SO2] = 2.0 x 10^-4 mol/L" writes; on "started with just the reactants" a mini diagram shows 2SO2 + O2 running all the way to 2SO3 with a dashed arrow and a small bar "take x back" returning; the tag about reactants in the equation ratio and an excess reactant staying appears',
                                       ['bar draw', 'tick', 'diagram build', 'DrawPath arrow', 'tag pop'], 'Hold about 2 seconds'],
    'q-vs-k-question': ['adjust', 'A fresh board with a sealed vessel holding a carbon lump, the C(s) + CO2 = 2CO strip, the givens card, types 3 and 4 flashing with their bracket and the C8 log line with K only and an empty Q slot', 'Poses a type four question with a solid in the way and every given visible, with no answer cues',
                        'mixture and a K / direction / 1.90 / Work out Q / Which way will it run / Pause here to answer',
                        'The board builds as each given is named, cards 3 and 4 flash with their bracket, the number line shows only K and an empty Q slot, and the countdown ring runs',
                        E, 'The task "Which way will it run?", the equation and the givens card appear; the small vessel with a carbon lump shows; cards 3 and 4 flash once with the bracket "same givens, different demand" and card 4 lit; the log line shows a teal K marker at 1.90 and an empty slot "Q?" with two empty rate bars; the countdown ring starts after the narration; nothing is greyed or answered',
                        ['Countdown ring', 'card flash', 'board build', 'Enter reveals'], 'Quiet answer-free thinking hold with a 10 second countdown'],
    'q-vs-k-answer': ['adjust', 'The solid greying in the equation strip, the C5 builder writing Q, the C8 log line with the Q marker landing left of K, a forward arrow and CO dots rising, then a second marker right of K', 'Answers the direction question, gives the solid-leaves-out reason and recalls Q chases K once',
                      'Leave the solid out / 1.28 / below K / forward / Q chases K / 1.50 moles per litre / back',
                      'The carbon greys out, Q builds and lands at 1.28 left of K, the forward arrow lights and the CO dots rise, then a second marker lands at 4.50 and the reverse arrow lights',
                      E, 'The solid carbon greys; the builder writes Q = [CO]^2 / [CO2] and "0.800^2 = 0.640", "0.640 / 0.500 = 1.28"; the Q marker lands left of the K marker; a "<" writes, the forward arrow lights blue and the CO dots rise; "Q chases K" writes with a pen arrow from Q to K; on "1.50" a second marker lands at 4.50 right of K, the sign turns to ">" and the reverse arrow lights amber; unspoken crossed chips "left: rule flipped" and "carbon in Q"',
                      ['expression builder', 'marker drop', 'arrow light', 'particle drift', 'Mark cross', 'HandText write-on'], 'Hold about 2 seconds'],
    'addition-setup': ['adjust', 'A fresh board with the CO + H2O = CO2 + H2 strip, a grouped givens card of old and new amounts, and the amounts dividing into a mol/L column', 'Starts the worked example for the hardest type: reads the question and converts every amount to concentration',
                       'amount added / 2.00 litre / convert / 0.200 moles / The new carbon monoxide is 0.100',
                       'The givens card builds line by line, the old amounts divide by 2.00 into a mol/L column and the new carbon monoxide converts to 0.100',
                       E, 'Task "How many moles of steam were added?", the equation and the grouped givens card appear with the tag "HSC-style question, written for HSCScience"; on "convert" the old amounts divide by 2.00 into a mol/L column (0.200, 0.200, 0.400, 0.400) and the new CO converts to 0.100 mol/L; the chip "Concentrations, not moles" shows',
                       ['board build', 'NumberTicker division', 'DrawPath arrows', 'chip pop'], 'Hold the converted column'],
    'addition-ice-table': ['adjust', 'The C6 ICE table with CO, H2O, CO2 and H2 columns, a caption over the Initial row, y written in the pen colour with an added-steam icon, the E minus I bracket and 1 : 1 : 1 : 1 coefficient chips', 'Shows why y sits in the initial row, how the measured value gives the first change and how the other changes follow',
                           'Right after the steam goes in / initial row / plus y / equilibrium row / minus 0.100 / used up',
                           'A caption names the instant after adding, y writes into the steam cell, the pen arrow and bracket give the CO change, the chips fly in and the equilibrium row completes',
                           E, 'The caption "the instant after adding, before anything reacts: old equilibrium + y" appears over the Initial row; the row ticks 0.200, "0.200 + y", 0.400, 0.400 with y and the label "y = steam added, mol/L"; the pen arrow puts 0.100 into the CO Equilibrium cell and the "E - I" bracket with "0.100 - 0.200" gives "-0.100"; the chips "1 : 1 : 1 : 1" fill H2O -0.100, CO2 +0.100, H2 +0.100; the Equilibrium row completes "0.100 + y", 0.500, 0.500; a ghost crossed chip "y in the change row" fades; the aid "The added substance goes in the initial row" writes',
                           ['table cell tick', 'DrawPath arrow', 'bracket draw', 'coefficient fly-in', 'HandText write-on', 'Mark cross'], 'Hold the finished table'],
    'addition-k-equation': ['adjust', 'The C5 builder with the equilibrium cells dropping in, the equation 0.500 x 0.500 over 0.100 x (0.100 + y) = 4.00, and the question y = ? with the countdown ring', 'Sets up the K equation and lets the learner solve for y before the answer',
                            '0.100 plus y / K has not changed / 4.00 / moles per litre / Pause here and try it',
                            'The expression builds, the equilibrium values drop in, the equation writes and y = ? holds with the countdown ring',
                            E, 'The builder writes the K expression and the equilibrium cells drop in; "0.500 x 0.500 / (0.100 x (0.100 + y)) = 4.00" writes with the tag "K: no unit written"; the question "y = ? mol/L" holds with the countdown ring and "Pause here and try it." written beside it; no values for y are shown',
                            ['expression builder', 'HandText write-on', 'Countdown ring'], '10 second answer-free countdown after "Pause here and try it."'],
    'addition-answer-and-slips': ['adjust', 'The working writing in beats to y = 0.525 mol/L and 1.05 mol, a teal K check, two crossed wrong-answer chips with pen arrows and a silent Q mini number line', 'Gives the answer in moles, checks it and names the two classic slips',
                                  '0.250 / 0.625 / 0.525 / 1.05 moles / volume / used up',
                                  'The working writes to 0.525 mol/L, multiplies by 2.00 L to 1.05 mol, the independent check ticks in teal and the two wrong chips are crossed with arrows to their causes',
                                  E, 'The working writes "0.500 x 0.500 = 0.250", "0.100 + y = 0.250 / (4.00 x 0.100) = 0.625", "y = 0.525 mol/L", then "0.525 mol/L x 2.00 L = 1.05 mol" with a tick; the check "0.250 / (0.100 x 0.625) = 4.00" gets a teal "= K" tick; the chips "0.525 (mol/L, not mol): volume forgotten" and "0.425 mol/L: steam used up not counted" are crossed with arrows to the 2.00 L and the -0.100 cell; a silent mini number line shows Q at 1.10 below K = 4.00; the aid chip "Initial row: plus y. K stays." lands',
                                  ['HandText write-on', 'NumberTicker', 'tick', 'Mark cross', 'DrawPath arrow', 'marker drop'], 'Hold about 2 seconds'],
    'attempt': ['new', 'A coded sealed 1.00 L vessel with a carbon lump, the C(s) + CO2 = 2CO equation, a grouped givens card with units and the demand line', 'Unseen transfer of the amount-added type with a solid present and a 1 : 2 ratio, with every condition visible and no answer cues',
                'Your turn / solid / K is 0.400 / 1.00 litre / added / 0.500 moles per litre / Pause here to answer',
                'The countdown ring runs through the answer-free thinking hold',
                E, 'The vessel, the equation and the givens card appear as each is named; the demand "Find the moles of CO2 added." stays on screen; earlier boards are removed; the countdown ring starts after the narration; no table outline, ratio chips or direction arrows',
                ['Countdown ring', 'Enter reveals', 'card slide-in'], 'Quiet answer-free thinking hold with a 10 second countdown'],
    'feedback': ['adjust', 'The attempt board with a two-column ICE table and a grey carbon strip, the E minus I bracket, a divide by two arrow, the working in beats, a teal K check, three wrong-answer chips and a Q mini line', 'Explains the attempt stage by stage in the taught order and names the likely slips',
                 '0.500 / equilibrium row / plus 0.100 / 0.050 / 0.625 / 0.275 moles / used up / halve',
                 'The table fills in the taught order, the working writes to 0.275 mol, the independent check ticks in teal and the wrong chips are crossed with arrows',
                 E, 'The table builds with CO2 and CO columns and a grey carbon strip "solid, not in K"; the pen arrow puts 0.500 into the CO Equilibrium cell and the "E - I" bracket with "0.500 - 0.400" gives "+0.100"; the CO2 Change ticks "-0.050" with chips "1 : 2" and a divide by 2 arrow; the working writes "[CO2] = 0.500^2 / 0.400 = 0.625", "0.625 = 0.400 + y - 0.050", "y = 0.275 mol"; the check "0.500^2 / 0.625 = 0.400" gets a teal tick; chips "0.225", "0.325" and an unspoken "0.625" are crossed; a mini line shows Q at 0.237 below K',
                 ['table cell tick', 'DrawPath arrow', 'bracket draw', 'coefficient fly-in', 'HandText write-on', 'Mark cross'], 'Hold about 2 seconds'],
    'decision-board': ['adjust', 'The five-card type board returning with each card gaining its method line and its classic slip, the hard card pulsing, and a next chip with a thermometer icon', 'Packs the lesson into one decision order and hands off to temperature and K',
                       'given / asked / divide by the volume / equilibrium row first / Q / initial row / Next',
                       'Each card gains its method line and slip as the narration reaches it, cards 3 and 4 carry the bracket, the hard card pulses and the next chip slides in',
                       E, 'The board returns; card 1 gains "divide by V; powers, not multipliers" with the slip "moles in K"; card 2 gains "ICE table; measured value into E first" with its slip; card 3 gains "x; perfect square, tiny K or huge K, then test"; card 4 gains "Q, same form as K; compare"; card 5 gains "y in the initial row; K stays; moles at the end"; the bracket joins cards 3 and 4; the hard card pulses; on "temperature" the chip "Next: temperature and K" appears with a thermometer icon',
                       ['card slide-in', 'HandText write-on', 'chip slide-in', 'icon pop'], 'Hold about 2 seconds'],
    'key-notes': ['new', 'Key notes card with the memory aids in large writing and their condition tag', 'Essentials to copy into books', 'key notes',
                  'Notes appear then stay still for copying',
                  H, 'The notes and the memory aids appear and lock', ['Enter reveals'], 'Quiet copy hold of about 45 seconds with pause invitation'],
}

# G03a and G03b (15 Oct, owner decision B): G03 split in two. Reused scenes copy the G03 row; new scenes have their own.
G03A_ROWS = {k: G03_ROWS[k] for k in ['direct-k', 'ice-one-value', 'q-vs-k-answer']}
G03A_ROWS.update({
    'hook-board': ['adjust', 'The five-card type board with a one-line given and asked on each, a ghost question card, cards 1, 2 and 4 lit and cards 3 and 5 dimmed with a part two tag', 'Poses the main question for part one: what the question gives and asks decides whether to find K, build an ICE table or work out Q',
                   'five types / given / asked / Settled amounts / one / mixture / amounts',
                   'The five cards build as a column, the words given and asked get pen rings on a ghost question card, cards 1, 2 and 4 light on their cues and cards 3 and 5 dim',
                   E, 'The heading "What you are given and asked decides the method" writes on; five cards build in a column; "given" and "asked" are pen ringed on the ghost question card; cards 1, 2 and 4 light on "Settled amounts", "one" and "mixture"; on "amounts" cards 3 and 5 dim with the tag "part two"; the tag "HSC-style questions, written for HSCScience" shows',
                   ['card slide-in', 'ScribbleCircle', 'card light', 'card dim', 'HandText write-on'], 'Hold about 2 seconds after the last word'],
    'q-vs-k-question': ['adjust', 'A fresh board with a sealed vessel holding a carbon lump, the C(s) + CO2 = 2CO strip, the givens card, the five-card strip with card 4 lit and the C8 log line with K only and an empty Q slot', 'Poses a type four question with a solid in the way and every given visible, with no answer cues',
                        'mixture and a K / direction / 1.90 / Work out Q / Which way will it run / Pause here to answer',
                        'The board builds as each given is named, the type strip flashes with card 4 lit, the number line shows only K and an empty Q slot, and the countdown ring runs',
                        E, 'The task "Which way will it run?", the equation and the givens card appear; the small vessel with a carbon lump shows; the five-card strip flashes once with card 4 lit and cards 3 and 5 dim; the log line shows a teal K marker at 1.90 and an empty slot "Q?" with two empty rate bars; the countdown ring starts after the narration; nothing is greyed or answered',
                        ['Countdown ring', 'card flash', 'board build', 'Enter reveals'], 'Quiet answer-free thinking hold with a 10 second countdown'],
    'attempt': ['new', 'A fresh board with the 2SO2 + O2 = 2SO3 strip, the teal K = 229 card from the ICE table question sliding into the givens card, three current concentrations, a small vessel 1 thumbnail and the C8 log line with K only', 'Unseen transfer on the decision this video is about: the same numbers as a type one question, but asked for a direction at another temperature, so they give Q',
                'Your turn / 229 / first / Which way will it run / Pause here to answer',
                'The teal K card slides into the givens, the vessel 1 thumbnail pulses on first, the log line shows only K and an empty Q slot, and the countdown ring runs through the answer-free hold',
                E, 'Task "Which way will it run?"; the teal card "K = 229" slides into the givens card with "same temperature as the ICE table question" and "now: [SO2] = 0.150, [O2] = 0.0750, [SO3] = 0.300 mol/L"; on "first" the vessel 1 thumbnail (mol/L column only) pulses; the log line shows K at 229 and an empty "Q?" slot; the countdown ring starts after the narration; no 53.3, no K or Q label, no arrows',
                ['card slide-in', 'thumbnail pulse', 'Countdown ring', 'Enter reveals'], 'Quiet answer-free thinking hold with a 10 second countdown'],
    'feedback': ['new', 'The scene 2 working line returning with its K label crossed and rewritten as Q, the Q marker landing left of K on the log line, a forward arrow with SO3 dots rising, a bracket joining type cards 1 and 4 and a crossed chip', 'Explains that the same ratio is K only for an equilibrium mixture, so here it is Q, and Q below K runs forward',
                 '53.3 / Q, not K / below K / forward / the new K / at equilibrium',
                 'The working returns, K is crossed and rewritten as Q, the Q marker lands left of K, the forward arrow lights, cards 1 and 4 are bracketed and the slip chip is crossed',
                 E, 'On "53.3" the line "0.300^2 / (0.150^2 x 0.0750) = 53.3" returns headed "K ="; on "Q, not K" the K is crossed and rewritten "Q" with "not said to be at equilibrium"; the Q marker lands at 53.3 left of K at 229 and "<" writes on "below K"; on "forward" the forward arrow lights blue and SO3 dots rise; a bracket joins cards 1 and 4 "same numbers: at equilibrium, K; any mixture, Q"; on "the new K" the chip "K = 53.3 at this temperature" is crossed; on "at equilibrium" the tag "K: only from an equilibrium mixture" writes; aid chip "Q chases K"',
                 ['HandText write-on', 'Mark cross', 'marker drop', 'arrow light', 'particle drift', 'bracket draw'], 'Hold about 2 seconds'],
    'decision-board': ['adjust', 'The five-card board returning with cards 1, 2 and 4 gaining their method lines and slips, cards 3 and 5 dim, and a next chip', 'Packs part one into one decision order and hands off to part two',
                       'given / asked / divide by the volume / equilibrium row first / work out Q / Next',
                       'Cards 1, 2 and 4 gain their method lines and slips as the narration reaches them, and the next chip slides in as cards 3 and 5 light briefly',
                       E, 'The board returns; card 1 gains "divide by V; powers, not multipliers" with the slip "moles in K"; card 2 gains "ICE table; measured value into E first" with its slip; card 4 gains "Q, same form as K; compare" with the slip "solid in Q, rule flipped, Q called K"; cards 3 and 5 stay dim with "part two"; on "Next" the chip "Next: K and a start, and an amount added" appears and cards 3 and 5 light briefly',
                       ['card slide-in', 'HandText write-on', 'chip slide-in', 'card light'], 'Hold about 2 seconds'],
    'key-notes': ['reuse', 'Key notes card with the memory aids in large writing and their condition tag', 'Essentials to copy into books', 'key notes',
                  'Notes appear then stay still for copying',
                  H, 'The notes and the memory aids appear and lock', ['Enter reveals'], 'Quiet copy hold of about 45 seconds with pause invitation'],
})

G03B_ROWS = {k: list(G03_ROWS[k]) for k in ['huge-k-setup', 'huge-k-solve', 'huge-k-test-and-reactant-start', 'addition-setup', 'addition-ice-table', 'addition-k-equation', 'addition-answer-and-slips']}
# Revision 2 (16 Oct, owner): G03a dropped, its five-type map moved here; tiny-K scenes cut (repeat C6b). Two reused visuals gain the owner rearrangement tag.
G03B_ROWS['huge-k-solve'][0] = 'adjust'
G03B_ROWS['huge-k-solve'][6] += '; beside the x^3 line a small pen tag "multiply both sides by the bottom, then divide" writes'
G03B_ROWS['addition-answer-and-slips'][0] = 'adjust'
G03B_ROWS['addition-answer-and-slips'][6] += '; beside the "0.100 + y" line a small pen tag "multiply both sides by the bottom, then divide" writes'
G03B_ROWS.update({
    'hook-board': ['adjust', 'The C6a type cards extended to a five-card column, each with a one-line given and find and a tag for where it was taught (C6a, C6b, C8), sub-chips on card 3 for perfect square, tiny K and huge K, ticks for the taught types and the huge-K chip and card 5 lit as today', 'Gives the full map: three types from the C6 videos plus two more, each named once by what it gives and what it finds, so the learner knows which parts are recall and which are new',
                   'three types / five in all / Type one / Type two / first C6 video / Type three / second C6 video / huge K / Type four / Q video / Type five / added',
                   'Three cards slide in, two more join to make five, each card writes its given and find line on its cue, taught cards tick with their video tag, and the huge-K chip and card 5 light as today',
                   E, 'Heading "What you are given and asked decides the type" writes on; on "three types" three cards slide in; on "five in all" two more join and the column numbers 1 to 5; each card writes its given and find line on its cue (card 2 shows "I initial, C change, E equilibrium"); cards 1 and 2 tick on "first C6 video" with the tag "C6a"; card 3 gains sub-chips "perfect square" and "tiny K" ticked on "second C6 video" (tag "C6b") and a lit "huge K" chip tagged "today" on "huge K"; card 4 ticks on "Q video" (tag "C8, the Q video"); card 5 lights on "added" with "today"',
                   ['card slide-in', 'HandText write-on', 'tick', 'card light', 'chip pop'], 'Hold about 2 seconds'],
    'type-three-recall': ['new', 'Card 3 shrinking to a type badge, a C6b tiny-K thumbnail (I2 = 2I) with the start minus x sliding out, the C6b check ruler at 0.4 per cent with a tick, and a faint mirror line with an empty huge K half', 'Recalls the tiny-K drop and its test from C6b so that the recorded "A huge K is the mirror image" in the next scene has something to mirror',
                          'Type three / tiny K / dropped it / tested it',
                          'Card 3 shrinks to a badge, the C6b line writes and its minus x slides out, the ruler ticks under 5 per cent, and a mirror line draws with an empty right half',
                          E, 'Card 3 shrinks to the badge "Type 3: K + start"; on "tiny K" the thumbnail "I2 = 2I, K = 1.6 x 10^-5, start 0.25 mol/L" (tag "from C6b") writes; on "dropped it" "0.25 - x = 0.25 (approx.)" writes as the "- x" slides out; on "tested it" the check ruler shows "x = 0.0010: 0.4%" under the dashed 5 per cent line with a tick and the chip "Test it or don\'t use it"; a faint mirror line draws with an empty right half labelled "huge K?"',
                          ['panel shrink', 'HandText write-on', 'slide out', 'bar draw', 'tick', 'DrawPath line'], 'Hold about 1 second'],
    'decision-board': ['new', 'The five-card column opening into a two-column You see and You do table with typical question wording per type, one grey slip per row, a shortcuts line under type 3 and a next chip with a checklist icon', 'Leaves the learner with the full five-type map tied to the wording that signals each type, and hands off to the practice set',
                       'given / asked / Settled concentrations / A start and one equilibrium value / E row first / K and a start / test any shortcut / A mixture and K / Something added / Next / trap',
                       'Each row writes its You see wording and its You do method on its cue, the shortcuts line writes under type 3 and a ruler icon ticks, each slip appears in grey, then the next chip slides in',
                       E, 'The column opens into the table "You see / You do"; row 1 "at equilibrium, the vessel contains...; calculate K" / "concentrations into K (divide moles by V first)"; row 2 "initially...; at equilibrium, [X] was found to be..." / "ICE table: measured value into the E row first, Change = E - I, then K"; row 3 "K = ...; initially...; calculate the equilibrium concentrations" / "call the change x" with "Shortcuts: perfect square (square root), tiny K (drop x), huge K (go to products, x is what is left). Test it." and a ruler icon tick on "test any shortcut"; row 4 "a mixture contains...; which way will it shift?" / "work out Q; Q below K: forward; Q above K: reverse"; row 5 "...was added; when equilibrium was re-established...; how much was added?" / "old equilibrium + y in the I row; new value into E first; K unchanged; y x V for moles"; one grey slip per row; on "Next" the chip "Next: practice questions, each with a trap" appears with a checklist icon',
                       ['card slide-in', 'table build', 'HandText write-on', 'tick', 'chip slide-in', 'icon pop'], 'Hold about 2 seconds'],
    'key-notes': ['reuse', 'Key notes card listing the five types in one short line each, with the memory aids in large writing and their condition tag', 'Essentials to copy into books: the five-type map', 'key notes',
                  'Notes appear then stay still for copying',
                  H, 'The five notes and the memory aids appear and lock', ['Enter reveals'], 'Quiet copy hold of about 45 seconds with pause invitation'],
})

# G03c (15 Oct): HSC-style practice set, four questions (the last in two parts). Revision 2 order: solid first, methanol second.
# Revision 3 (16 Oct): split for length into G03c (part 1, Q1 and Q2) and G03d (part 2, Q3 and Q4); these are the take01 rows, subset below.
G03CD_ROWS = {
    'hook-traps': ['new', 'Coded trap checklist board with nine empty tick boxes, a small flipping equation strip, four question cards fanning out (the fourth with tabs a and b) and a method strip with a mini ICE table', 'Earns attention with the owner framing (these questions stump students) and gives the trap checklist that every later question ticks',
                   'trap / other equation / four HSC-style questions / one step at a time',
                   'The checklist rows write on as each trap is said, an equation strip flips on "other equation", four question cards fan out and the method strip writes under them, then the checklist shrinks to a strip on the left',
                   E, 'Heading "Where equilibrium calculations go wrong" writes on; the first four checklist rows write on their cues (moles, coefficient, solid, other equation) and the other five write on quietly; on "other equation" a small equation strip flips with a curved arrow; on "four HSC-style questions" four cards fan out with the tag "HSC-style question, written for HSCScience"; on "one step at a time" the strip "I C E: equilibrium value into E first, then Change = E - I, then the coefficients" writes with a mini ICE table; the checklist shrinks to a strip on the far left',
                   ['HandText write-on', 'card slide-in', 'equation flip', 'mini ICE table', 'panel shrink'], 'Hold about 1 second, then the checklist shrinks'],
    'q1-question': ['new', 'Fresh three-zone board: the task line, the FeO(s) + CO strip with state symbols, the G03a coded sealed vessel with a grey-black FeO lump, a grouped givens card with the molar mass of iron and an empty ICE outline with row labels only', 'Unseen practice on a solid in K, a linear K equation and converting back to grams, with every given and the demand visible and no answer cues',
                    'Question one / solid / 0.50 / 2.00 litre / 0.600 moles / mass of iron / Pause here to answer',
                    'The board builds as each given is named, the (s) on FeO and the task line get pen rings, the trap strip dims and the countdown ring runs through the answer-free hold',
                    E, 'Type badge "Type 3: K + start"; task "Find the mass of iron at equilibrium."; the equation strip with "(s)" visible; givens "K = 0.50 (about 800 C)", "vessel: 2.00 L", "FeO: solid, in excess", "start: CO 0.600 mol", "start: no Fe, no CO2", "Fe: 55.85 g/mol" with the two tags; pen rings on "(s)" and on the task line; an empty ICE outline with I, C and E only; the trap strip dims; the countdown ring starts after the narration with "Pause here to answer."',
                    ['Countdown ring', 'board build', 'ScribbleCircle', 'Enter reveals'], 'Quiet answer-free thinking hold with a 10 second countdown'],
    'q1-expression': ['adjust', 'The FeO and Fe in the strip greying out, the C5 expression builder with a crossed ghost expression, the C6 ICE table with CO and CO2 columns, a division on the givens card and 1 : 1 coefficient chips', 'Leaves the solids out of K, names the ICE rows and builds the table with x because nothing at equilibrium is measured',
                      'solids / I C E table / 0.300 moles per litre / x',
                      'The two solids grey out, the builder writes K = [CO2] / [CO] beside a crossed ghost, the ICE letters expand, 0.300 flies into the table and the change and equilibrium rows fill with x',
                      E, 'On "solids" FeO and Fe grey out with "solids: not in K"; the builder writes K = [CO2] / [CO] with a crossed ghost "[Fe][CO2] / ([FeO][CO])"; an unspoken chip "same rule: pure liquids and water as the solvent stay out"; on "I C E table" the row letters expand to Initial, Change, Equilibrium and the CO and CO2 headings write on; on "0.300 moles per litre" the division runs on the card into the CO Initial cell and CO2 ticks 0; on "x" the Change row fills -x and +x with chips "1 : 1" and the Equilibrium row fills "0.300 - x" and "x"; the trap strip ticks "a solid" and "moles given"',
                      ['grey-out', 'expression builder', 'Mark cross', 'ICE letter expand', 'NumberTicker division', 'coefficient fly-in', 'table cell tick'], 'Hold the finished table'],
    'q1-solve': ['adjust', 'The K line with the C6b check ruler flashing a crossed ghost case at 50 per cent, the C6 algebra line with pen asides for multiply both sides by the bottom and divide, and a teal check', 'Shows that K = 0.50 is not tiny, so x is kept, and solves the linear equation with the general rearranging move',
                 'do not drop the x / Multiply both sides by the bottom / divide both sides by 1.50 / x is 0.100',
                 'A ghost ruler shows dropping x would take half the start and is crossed, then the algebra line moves one stage at a time to x = 0.100 and a teal check ticks',
                 E, 'The K line "x / (0.300 - x) = 0.50" with "K: no unit written"; on "do not drop the x" the check ruler flashes "drop x: x = 0.150, half the start" far past the dashed 5 per cent line, crossed, "K = 0.50 is not tiny"; on "Multiply both sides by the bottom" a pen arrow carries (0.300 - x) across, "x = 0.50 (0.300 - x)", "x = 0.150 - 0.50x", the 0.50x slides across, "1.50x = 0.150"; on "divide both sides by 1.50" the aside and "x = 0.100 mol/L"; the Equilibrium row ticks 0.200 and 0.100; "0.100 / 0.200 = 0.50 = K" gets a teal tick',
                 ['bar draw', 'Mark cross', 'DrawPath arrow', 'term slide', 'HandText write-on', 'tick'], 'Hold the answer line'],
    'q1-mass': ['new', 'A pen bracket joining Fe and CO2 with 1 : 1, a new coded convert-back chain (mol/L, times L, mol, times g/mol, g), metal flecks in the vessel and two crossed wrong-answer chips', 'Converts the answer back to what was asked, a mass, and names the classic slip of forgetting the volume',
                'mass of iron / one iron for every carbon dioxide / 2.00 litres / 11.2 grams / 5.6 grams',
                'The task line pulses, the 1 : 1 bracket draws, the convert-back chain builds link by link to 11.2 g, flecks of iron appear in the vessel and the 5.6 g chip is crossed with an arrow to the volume',
                E, 'On "mass of iron" the task line pulses; on "one iron for every carbon dioxide" a pen bracket joins Fe and CO2 with "1 : 1"; the chain builds "[CO2] = 0.100 mol/L", "x 2.00 L", "= 0.200 mol CO2 = 0.200 mol Fe", "x 55.85 g/mol", "= 11.2 g Fe" with a tick; the lump gains grey metal flecks; on "5.6 grams" the chip "0.100 x 55.85 = 5.6 g: volume forgotten" is crossed with a pen arrow to "2.00 L"; an unspoken chip "0.100: a concentration, not a mass" is crossed; the trap strip ticks "convert back"; aid chip "Convert back last."',
                ['bracket draw', 'chain build', 'tick', 'particle flecks', 'Mark cross', 'DrawPath arrow'], 'Hold about 2 seconds'],
    'q2-question': ['new', 'Fresh three-zone board: the CO + 2H2 = CH3OH strip with the 2 highlighted, a coded sealed vessel, a grouped givens card with a non-zero methanol start and one equilibrium amount, and an empty ICE outline', 'Unseen practice on a start plus one equilibrium value where the product starts above its equilibrium value, with every given visible and no answer cues',
                    'Question two / 2.00 litre / 0.400 moles of methanol / 0.320 moles / Calculate K / Pause here to answer',
                    'The board builds as each given is named, the methanol start and the equilibrium line get pen rings, the trap strip dims and the countdown ring runs through the answer-free hold',
                    E, 'Type badge "Type 2: start + one equilibrium value"; task "Calculate K."; the equation strip with the 2 highlighted; givens "vessel: 2.00 L", "start: CO 0.200 mol, H2 0.400 mol, CH3OH 0.400 mol", "at equilibrium: CH3OH 0.320 mol", "about 230 C" with the tags; pen rings on the methanol start and on the equilibrium line; an empty ICE outline with mol/L headings; the trap strip dims; the countdown ring starts after the narration; no divisions, signs or arrows',
                    ['Countdown ring', 'board build', 'ScribbleCircle', 'Enter reveals'], 'Quiet answer-free thinking hold with a 10 second countdown'],
    'q2-initial': ['adjust', 'The C6 ICE table with divisions flying from the givens card, the C6a E-row-first pen arrow, the E minus I bracket and a right-to-left pen arrow under the equation strip', 'Practises the owner order: divide first, measured value into the E row, change as E minus I, and reads the direction from the sign',
                   'divide by 2.00 / equilibrium row / equilibrium minus initial / minus 0.0400 / down',
                   'Each start divides into the Initial row, the measured value flies into the Equilibrium cell, the E minus I bracket draws up the column to give -0.0400 and a reverse arrow appears under the equation',
                   E, 'On "divide by 2.00" each start divides on the card with "÷ 2.00" and flies into the Initial row (0.100, 0.200, 0.200); "0.320 mol / 2.00 L = 0.160 mol/L" converts; on "equilibrium row" the pen arrow carries 0.160 into the CH3OH Equilibrium cell and the other two show dashed "?"; on "equilibrium minus initial" the "E - I" bracket draws with "0.160 - 0.200" and on "minus 0.0400" the Change cell ticks -0.0400 in red; on "down" a pen arrow under the strip points right to left with "ran backwards: the sign says so"; the trap strip ticks "a value that does not start at zero"',
                   ['NumberTicker division', 'DrawPath arrow', 'bracket draw', 'table cell tick', 'HandText write-on'], 'Hold about 1 second'],
    'q2-change-and-k': ['adjust', 'Coefficient chips flying into the Change row, a pen plus between the Initial and Change rows, the C5 expression builder with the power flying up and the working in beats with a grey guard-digit aside', 'Shows that only the change row follows the coefficients, completes the table and finds K from the equilibrium row only',
                        'two / 0.0800 / Add each change to its start / squared / extra figures / K is 14.6',
                        'The 1 and 2 chips fly into the Change row, the Equilibrium row completes, the builder writes K with the power flying up and the working writes in beats to K = 14.6',
                        E, 'On "two" the chips fly to the CO and H2 Change cells: +0.0400 and, on "0.0800", +0.0800 with a "x 2" arrow and the ratio chip "1 : 2 : 1"; on "Add each change to its start" a pen plus draws and the Equilibrium row completes 0.140 and 0.280; on "squared" the builder writes K = [CH3OH] / ([CO][H2]^2) with the 2 flying up and "equilibrium values only"; "0.280^2 = 0.0784", "0.140 x 0.0784 = 0.010976", the aside "rounding to 0.0110 gives 14.5" on "extra figures", then "K = 0.160 / 0.010976 = 14.6" in teal with "K: no unit written"; the trap strip ticks "a coefficient"',
                        ['coefficient fly-in', 'table cell tick', 'expression builder', 'HandText write-on', 'NumberTicker'], 'Hold the K line'],
    'q2-mistake': ['adjust', 'A ghost copy of the ICE table with the measured value in the Change row, crossed in red beside the real table, and two smaller crossed wrong-answer chips', 'Names the classic slip for this question type and shows why the measured value is an equilibrium value, not a change',
                   'change row / ended up',
                   'A ghost table with +0.160 in the Change cell appears and is crossed, then the real table returns with a pen ring on 0.160 in the Equilibrium row',
                   E, 'A ghost table shows "+0.160" in the CH3OH Change cell and "0.360" in its Equilibrium cell; on "change row" it is crossed in red with "that is the equilibrium value, not the change"; on "ended up" the real table returns with a pen ring on 0.160 in the Equilibrium row; unspoken crossed chips "H2 +0.0400 (coefficient missed): K = 19.8" and "moles put into K: 3.64" fade in; aid chip "E row first."',
                   ['ghost table', 'Mark cross', 'ScribbleCircle', 'chip pop'], 'Hold about 2 seconds'],
    'q3-question': ['new', 'Fresh three-zone board: the 2NO + Cl2 = 2NOCl strip exactly as given, a coded sealed vessel with an orange-yellow tint and one NOCl splitting into dots, a grouped givens card and an empty ICE outline', 'Unseen practice on a K given for the reverse equation, a tiny K and a moles answer, with every given visible and no answer cues',
                    'Question three / 6.25 times ten to the four / 2.00 moles / 4.00 litre / splits / moles of chlorine / Pause here to answer',
                    'The board builds as each given is named, one NOCl in the vessel splits with a pen ring, the trap strip dims and the countdown ring runs through the answer-free hold',
                    E, 'Type badge "Type 3: K + start"; task "Find the moles of Cl2 at equilibrium."; the equation strip as given; givens "K = 6.25 x 10^4 for 2NO + Cl2 = 2NOCl (this temperature)", "vessel: 4.00 L", "start: NOCl 2.00 mol, no NO, no Cl2" with "illustrative value" and the HSC-style tag; on "splits" one NOCl breaks into coded dots with a pen ring; an empty ICE outline; the trap strip dims; the countdown ring starts after the narration; the strip is not flipped and K is not changed',
                    ['Countdown ring', 'board build', 'particle split', 'Enter reveals'], 'Quiet answer-free thinking hold with a 10 second countdown'],
    'q3-flip-and-table': ['adjust', 'The equation strip flipping with the C6a curved arrow, the K line with the C6a aid chip, a small log scale, a Q2 strip thumbnail, and the C6 ICE table filling with 2 : 2 : 1 chips', 'Explains that K belongs to the equation as written, rewrites the equation the way the vessel runs and flips K, contrasts Q2, then builds the table',
                          'makes / splits / flip K with it / tiny / Question two ran backwards too / 0.500 moles per litre / 0.500 minus two x',
                          'A pen arrow runs along the given equation, the split NOCl is ringed, the strip flips, K becomes 1.6 x 10^-5 beside a log scale, a Q2 thumbnail pops in and fades, and the table fills with -2x, +2x and +x',
                          E, 'On "makes" a pen arrow under the given equation points left to right; on "splits" the split NOCl is ringed and the strip flips to 2NOCl(g) = 2NO(g) + Cl2(g); on "flip K with it" "K = 1 / (6.25 x 10^4) = 1.6 x 10^-5" writes with the aid chip "Flip the equation, flip K." and "same temperature, equation as written"; on "tiny" a small log scale shows 10^-5 far below 1; on "Question two ran backwards too" a Q2 strip thumbnail with "K = 14.6, equation kept" pops in and fades; an unspoken grey tag shows the given-equation route; on "0.500 moles per litre" the division flies into the NOCl Initial cell; the chips "2 : 2 : 1" fill the Change row and the Equilibrium row fills "0.500 - 2x", "2x", "x"; the trap strip ticks "K for a different equation"',
                          ['DrawPath arrow', 'equation flip', 'HandText write-on', 'marker drop', 'thumbnail pulse', 'coefficient fly-in', 'table cell tick'], 'Hold the finished table'],
    'q3-drop-and-solve': ['adjust', 'The C5 builder writing K in x, the 2x greying and sliding out of the bottom, a pen ring holding the top, and the C6 algebra line with the multiply and divide asides down to a cube root', 'Uses the tiny K to drop 2x where it is taken from the start, keeps x where it is the answer, and solves with the general rearranging move',
                          'drop the two x / 0.250 / four x cubed / Multiply both sides by the bottom / divide both sides by four / 1.0 times ten to the minus six',
                          'The - 2x greys and slides out, the top is ringed and kept, then the algebra line moves one stage at a time through 4x^3 = 4.0 x 10^-6 to x = 0.0100',
                          E, 'The builder writes "(2x)^2 x / (0.500 - 2x)^2 = 1.6 x 10^-5" with "K: no unit written"; on "drop the two x" the "- 2x" greys and slides out, "=" becomes "≈" and the NOCl cell shades to "≈ 0.500"; "(2x)^2 x" is ringed with "keep: this is the answer"; "0.500^2 = 0.250", "(2x)^2 x = 4x^3", "4x^3 / 0.250 = 1.6 x 10^-5"; on "Multiply both sides by the bottom" a pen arrow carries 0.250 across: "4x^3 = 4.0 x 10^-6"; on "divide both sides by four" "x^3 = 1.0 x 10^-6", then "x = 0.0100 mol/L"; an unspoken crossed chip "(2x)^2 = 2x^2"; the givens card shrinks to a one-line strip',
                          ['expression builder', 'text slide-out', 'ScribbleCircle', 'DrawPath arrow', 'HandText write-on', 'Mark cross', 'panel shrink'], 'Hold the answer line'],
    'q3-check-and-moles': ['adjust', 'The C6b check ruler with 2x against the start near the dashed 5 per cent line, the convert-back chain, an exact-value tag and a crossed not-flipped chip with an arrow to the given K', 'Tests the shortcut on the amount actually taken off, converts to moles and names the classic slip of not flipping K',
                           'two x / 4 per cent / 0.0400 moles / without flipping it',
                           'The ruler draws 2x close to the dashed line at 4 per cent with a tick, the chain converts to 0.0400 mol, then the not-flipped chip shows an impossible 15.7 mol/L and is crossed',
                           E, 'The ruler shows the start bar 0.500 and the sliver "2x = 0.0200" close to the dashed 5 per cent line; on "4 per cent" "0.0200 / 0.500 = 4%" ticks with "5%: a school rule of thumb"; an unspoken crossed chip "x / 0.500 = 2%: wrong amount, NOCl loses 2x"; on "0.0400 moles" the chain "[Cl2] = 0.0100 mol/L x 4.00 L = 0.0400 mol" ticks with the tag "exact answer 0.0390 mol; the shortcut is about 3% high"; on "without flipping it" the chip "4x^3 = 6.25 x 10^4 x 0.250, x^3 = 3906, x = 15.7 mol/L > 0.500 start: impossible" is crossed with an arrow to the given K; the trap strip ticks "tiny K and the 5% check"',
                           ['bar draw', 'dashed line reveal', 'tick', 'chain build', 'Mark cross', 'DrawPath arrow'], 'Hold about 2 seconds'],
    'q4a-question': ['new', 'Fresh three-zone board: the NO2 + SO2 = NO + SO3 strip, a coded sealed vessel with a faint brown tint, a grouped givens card of four equilibrium amounts and a greyed part b placeholder', 'Unseen practice on finding K from equilibrium amounts in moles, with a visible signal that a second part will use the answer',
                     'Question four has two parts / 5.00 litre / 0.900 / 1.80 / calculate K / Pause here to answer',
                     'The board builds as each amount is named, the greyed part b line shows, the trap strip dims and the countdown ring runs through the answer-free hold',
                     E, 'Type badge "Type 1: every equilibrium value given"; task "4(a) Calculate K." with a greyed "4(b) uses your K"; the equation strip; givens "vessel: 5.00 L", "at equilibrium: NO2 0.100 mol, SO2 0.200 mol, NO 0.900 mol, SO3 1.80 mol", "460 C" with the tags; the trap strip dims; the countdown ring starts after the narration',
                     ['Countdown ring', 'board build', 'Enter reveals'], 'Quiet answer-free thinking hold with a 10 second countdown'],
    'q4a-answer': ['adjust', 'Divisions flying from the givens card into a mol/L column, the C5 builder and the working in beats, then the K result lifting into a teal card that slides to the corner', 'Practises divide first and K from equilibrium values, and keeps K on screen for part b',
                   '5.00 / Every coefficient is one / 0.0648 / 0.000800 / K is 81.0',
                   'Each amount divides into the mol/L column, the builder writes K, the working writes in beats to 81.0 and the result lifts into a teal card in the top right',
                   E, 'On "5.00" each amount divides on the card into a mol/L column (0.0200, 0.0400, 0.180, 0.360); on "Every coefficient is one" the builder writes K = [NO][SO3] / ([NO2][SO2]) and the values drop in; "0.180 x 0.360 = 0.0648", "0.0200 x 0.0400 = 0.000800", "K = 0.0648 / 0.000800 = 81.0" in teal with "K: no unit written"; "K = 81.0 (460 C)" lifts into a teal card that slides to the top right labelled "from part a"; the trap strip "moles given" gains another tick',
                   ['NumberTicker division', 'expression builder', 'HandText write-on', 'card slide'], 'Hold the teal K card'],
    'q4b-question': ['new', 'The same equation strip and the teal K card from part a, a new givens card with equal starts in a 2.00 L vessel, a pen line from the givens to the K card and an empty ICE outline', 'Unseen practice on reusing K at the same temperature with equal starts, with the demand and K visible and no answer cues',
                     'Part b / same temperature / 2.00 litre / N O two / Pause here to answer',
                     'The part a working clears, the teal K card stays, the new givens build, a pen line joins the temperature line to the K card, the trap strip dims and the countdown ring runs',
                     E, 'The part a working clears and the teal "K = 81.0 (460 C), from part a" card stays; task "4(b) Find [NO2] at equilibrium."; givens "same temperature: 460 C", "vessel: 2.00 L", "start: NO2 0.500 mol, SO2 0.500 mol", "start: no NO, no SO3"; on "same temperature" a pen line joins that line to the K card; an empty ICE outline; the trap strip dims; the countdown ring starts after the narration; no x, root signs or shortcut card',
                     ['Countdown ring', 'card pulse', 'DrawPath arrow', 'Enter reveals'], 'Quiet answer-free thinking hold with a 10 second countdown'],
    'q4b-square': ['adjust', 'The teal K card pulsing into the K line, the C6 ICE table with four columns, the C5 builder, a crossed grey quadratic sketch with the owner caption, ringed bottom factors and the C6b two-shortcut card', 'Reuses K because the temperature is the same and shows the hidden perfect square that equal starts make',
                   'same K / quadratic formula / x squared / all squared / perfect square',
                   'The K value flies into the line, the table fills, a quadratic sketch writes and is crossed with the owner caption, the two bottom factors ring together into a square and the perfect-square half of the shortcut card ticks',
                   E, 'On "same K" the teal card pulses and its value flies into the K line; the divisions run into the Initial row 0.250, 0.250, 0, 0; Change -x, -x, +x, +x with chips "1 : 1 : 1 : 1"; Equilibrium "0.250 - x", "0.250 - x", "x", "x"; the builder writes "x · x / ((0.250 - x)(0.250 - x)) = 81.0"; on "quadratic formula" a grey sketch "80x^2 - 40.5x + 5.0625 = 0" writes small and is crossed with "You can use it if you like, but HSC questions are written so you shouldn\'t need it"; on "x squared" the top rewrites "x^2"; on "all squared" the bottom factors ring and rewrite "(0.250 - x)^2" with a pen line to the equal starts; on "perfect square" the shortcut card ticks its "Perfect square: square root" half and the line rewrites "(x / (0.250 - x))^2 = 81.0"; the trap strip ticks two rows',
                   ['card pulse', 'table cell tick', 'coefficient fly-in', 'expression builder', 'Mark cross', 'ScribbleCircle', 'tick'], 'Hold the squared line'],
    'q4b-solve': ['adjust', 'Root signs drawing over both sides, the C6 algebra line with the multiply and divide asides, a pen arrow from the task line to the NO2 cell, a teal check and two crossed wrong-answer chips', 'Solves the square with the general rearranging move, answers what was asked and names the classic slip of reporting x',
                  '9.00 / Multiply both sides by the bottom / divide by ten / x is 0.225 / N O two / 0.0250 moles per litre / stopping at x',
                  'Root signs draw, the algebra line moves one stage at a time to x = 0.225, the task line pulses and an arrow runs to the NO2 cell, which ticks 0.0250, and the x-as-answer chip is crossed',
                  E, 'Root signs draw over both sides: "x / (0.250 - x) = 9.00" with "positive root: concentrations are positive" and an unspoken grey tag "-9.00 gives x = 0.281, more than the start"; on "Multiply both sides by the bottom" a pen arrow carries (0.250 - x) across: "x = 2.25 - 9x", the 9x slides across, "10x = 2.25"; on "divide by ten" "x = 0.225"; on "N O two" the task line pulses and a pen arrow runs to the NO2 cell, which ticks "0.250 - 0.225 = 0.0250 mol/L"; the check "0.225^2 / 0.0250^2 = 81.0" gets a teal tick; on "stopping at x" the chip "[NO2] = 0.225: that is x, the change" is crossed; an unspoken crossed chip "drop x: x = 2.25 > 0.250 start"; aid chip "Answer what was asked."',
                  ['root draw', 'DrawPath arrow', 'term slide', 'HandText write-on', 'tick', 'Mark cross'], 'Hold about 2 seconds'],
    'decision-board': ['new', 'The trap checklist returning full size as a two-column board (what you see, what you do first) with question badges on each row, a quadratic footer tag and a next chip with a coded thermometer icon', 'Packs the practice set into one reusable list of first moves and hands off to temperature and K',
                       'Moles and a volume / One equilibrium value / coefficient / solid / different equation / perfect square / tiny K / moles or grams / same K / Next',
                       'The checklist grows into a two-column board and each row lights on its cue with the badge of the question that used it, then the next chip slides in',
                       E, 'The strip grows to a two-column board "What you see in the question" and "What you do first"; rows light on their cues: moles and a volume (Q1 to Q4), one equilibrium value (Q2), a coefficient (Q2, Q3), a solid or water as the solvent (Q1), K for a different equation (Q3), K and a start (Q1, Q3, Q4b), mol or g (Q1, Q3), two parts (Q4); the footer tag "Quadratic formula: you can use it if you like, but HSC questions are written so you shouldn\'t need it"; on "Next" the chip "Next: temperature and K" slides in with a thermometer icon',
                       ['panel grow', 'row light', 'HandText write-on', 'chip slide-in', 'icon pop'], 'Hold about 2 seconds'],
    'key-notes': ['reuse', 'Key notes card with the memory aids in large writing and their condition tag', 'Essentials to copy into books', 'key notes',
                  'Notes appear then stay still for copying',
                  H, 'The notes and the memory aids appear and lock', ['Enter reveals'], 'Quiet copy hold of about 50 seconds with pause invitation'],
}

G03C_ROWS = {k: G03CD_ROWS[k] for k in ['q1-question', 'q1-expression', 'q1-solve', 'q1-mass', 'q2-question', 'q2-initial', 'q2-change-and-k', 'q2-mistake', 'key-notes']}
G03C_ROWS.update({
    'hook-traps': ['new', 'Coded trap checklist board with five empty tick boxes, two question cards fanning out with two faint part 2 cards behind, and a method strip with a mini ICE table', 'Earns attention with the owner framing (these questions stump students) and gives the part 1 trap checklist that both questions tick',
                   'trap / zero / solid / two HSC-style questions / one step at a time',
                   'The checklist rows write on as each trap is said, two question cards fan out with faint part 2 cards behind, and the method strip writes under them, then the checklist shrinks to a strip on the left',
                   E, 'Heading "Where equilibrium calculations go wrong" writes on; four checklist rows write on their cues (moles, coefficient, zero, solid) and "convert back to moles or grams" writes on quietly; on "two HSC-style questions" two cards fan out with the tag "HSC-style question, written for HSCScience" and two faint cards marked "part 2" behind them; on "one step at a time" the strip "I C E: equilibrium value into E first, then Change = E - I, then the coefficients" writes with a mini ICE table; the checklist shrinks to a strip on the far left',
                   ['HandText write-on', 'card slide-in', 'mini ICE table', 'panel shrink'], 'Hold about 1 second, then the checklist shrinks'],
    'decision-board': ['new', 'The part 1 trap checklist returning full size as a two-column board (what you see, what you do first) with question badges, a quiet K-not-tiny footer and a next chip with three small part 2 icons', 'Packs part 1 into a short list of first moves and hands off to part 2',
                       'Moles and a volume / One equilibrium value / coefficient / solid / grams / Next',
                       'The checklist grows into a two-column board and each row lights on its cue with the badge of the question that used it, then the next chip slides in',
                       E, 'The strip grows to a two-column board "What you see in the question" and "What you do first"; rows light on their cues: moles and a volume (Q1, Q2), one equilibrium value (Q2), a coefficient (Q2), a solid or water as the solvent (Q1), mol or g (Q1); a quiet footer "K not tiny (like 0.50): keep x (Q1)"; on "Next" the chip "Next: part 2, questions 3 and 4" slides in with a flipping strip, a tiny-K mark and a square bracket icon',
                       ['panel grow', 'row light', 'HandText write-on', 'chip slide-in', 'icon pop'], 'Hold about 2 seconds'],
})
G03C_ROWS['key-notes'] = G03CD_ROWS['key-notes'][:8] + ['Quiet copy hold of about 45 seconds with pause invitation']

G03D_ROWS = {k: G03CD_ROWS[k] for k in ['q3-question', 'q3-flip-and-table', 'q3-drop-and-solve', 'q3-check-and-moles', 'q4a-question', 'q4a-answer', 'q4b-question', 'q4b-square', 'q4b-solve']}
G03D_ROWS.update({
    'hook-traps': ['new', 'A faded part 1 checklist thumbnail, a mini ICE table with its letters expanding, the part 2 trap checklist with six empty tick boxes, a flipping equation strip, a small log mark and two question cards (3, and 4 with tabs a and b)', 'Reconnects to part 1 and its method, then names the three harder traps of part 2 so the learner knows what to watch for',
                   'divide by the volume first / other equation / tiny / two parts / perfect square',
                   'The method line and mini ICE table write on, the checklist rows write on as each trap is said, an equation strip flips, a log mark lands at ten to the minus five and two question cards fan out, then the checklist shrinks to a strip on the left',
                   E, 'Heading "Part 2: the harder traps" writes on beside a faded part 1 checklist thumbnail; on "divide by the volume first" a mini ICE table writes and I, C and E expand to Initial, Change and Equilibrium; checklist rows write on their cues: moles given, K for a different equation (with a small strip flipping on a curved arrow), tiny K and the 5% check (with a log mark at 10^-5), convert back to moles, two parts one K (with cards 3 and 4a/4b fanning out, tag "HSC-style question, written for HSCScience"), a hidden perfect square; the checklist shrinks to a strip on the far left',
                   ['HandText write-on', 'mini ICE table', 'equation flip', 'card slide-in', 'panel shrink'], 'Hold about 1 second, then the checklist shrinks'],
    'decision-board': ['new', 'The part 2 trap checklist returning full size as a two-column board (what you see, what you do first) with question badges, a quadratic footer tag and a next chip with a coded thermometer icon', 'Packs part 2 into a short list of first moves and hands off to temperature and K',
                       'different equation / perfect square / tiny K / moles / same K / Next',
                       'The checklist grows into a two-column board and each row lights on its cue with the badge of the question that used it, then the next chip slides in',
                       E, 'The strip grows to a two-column board "What you see in the question" and "What you do first"; a quiet carried-over row "Moles and a volume: divide first (Q3, Q4)" sits at the top; rows light on their cues: K for a different equation (Q3), K and a start with perfect square (Q4b) and tiny K (Q3), mol or one species with x the change (Q3, Q4b), two parts, same K (Q4); the footer tag "Quadratic formula: you can use it if you like, but HSC questions are written so you should not need it"; on "Next" the chip "Next: temperature and K" slides in with a thermometer icon',
                       ['panel grow', 'row light', 'HandText write-on', 'chip slide-in', 'icon pop'], 'Hold about 2 seconds'],
    'key-notes': G03C_ROWS['key-notes'],
})

C9_ROWS = {
    'hook': ['adjust', 'C3 sealed NO2 and N2O4 tube (coded, brown tint) in hot and ice baths, the C8 log number line with a small teal K marker, three ghost disturbance icons and a question arrow', 'Poses the puzzle: K held still through every disturbance, so does heating change it, and which way',
             'K never moved / hot water / ice / can K really stay fixed',
             'The tube and equation write on, three ghost icons pass over a teal K marker that holds still, the tube darkens in a hot bath and fades in ice, then the marker pulses with a question mark',
             E, 'Heading "Does temperature change K?" writes on; the tube and N2O4(g) = 2NO2(g) draw in; on "K never moved" a teal K marker holds still with a pen tick while a plus dot, a minus dot and a squeeze arrow pass over it; on "hot water" the tube moves into a terracotta bath and the brown deepens; on "ice" it moves into a pale blue bath and the brown fades; on "can K really stay fixed" the marker pulses with a "?" and an up-down arrow',
             ['HandText write-on', 'particle dots', 'bath slide', 'tint change', 'marker pulse'], 'Brief hold on the question marker'],
    'k-stayed-fixed': ['adjust', 'C4a disturbance thumbnails (add, squeeze) over the tube, the C8 log line with a teal K marker and a pen-colour Q marker, and a thermometer icon', 'Explains why K stayed fixed (a disturbance moves the amounts, not the chance a collision works) so temperature can be set against it',
                       'faster than the other / the same number again / the same K / Temperature is different',
                       'The thumbnails pop in, the Q marker jumps away from the K marker and slides back with a teal tick, then a thermometer rises and the K marker gets a pen ring and a question mark',
                       E, 'The add and squeeze thumbnails pop in a row with pen arrows to the log line; on "faster than the other" the Q marker jumps away from the teal K marker; on "the same number again" it slides back and the tag "Q moves, K stays" writes on; on "the same K" the K marker gets a teal tick; on "Temperature is different" a thermometer rises beside the tube and the K marker is ringed with a "?"',
                       ['thumbnail pop', 'marker slide', 'tick', 'ScribbleCircle', 'icon pop'], 'Hold about 2 seconds after the last word'],
    'temperature-cause': ['adjust', 'Blue and amber rate bars with the teal equal bracket, the C3 heat-in-the-equation chip, the C3 collision strip, a flame icon and a catalyst chip', 'Gives the cause of the K change: heating speeds up the heat-absorbing reaction more, so the rates only balance again at a browner mixture',
                          'both / takes in heat / far more / N O two builds up / equal again / more N O two / K is bigger / catalyst',
                          'Both bars rise on heating with the blue bar much further, brown NO2 dots build while the bars rebalance at the teal bracket, the K marker slides right, then a catalyst chip raises both bars equally',
                          E, 'The level rate bars stand with the teal bracket; on "takes in heat" the chip "N2O4 + heat = 2NO2" appears and the collision strip replays with "needs a hard collision"; on "far more" a flame heats the tube and both bars rise, blue much further, tagged "splitting speeds up more"; on "N O two builds up" brown dots build, N2O4 dots leave and the bars meet again at the bracket on "equal again"; on "K is bigger" the K reminder pulses and the teal marker slides right; on "catalyst" both bars rise equally and a tick lands on "same K"',
                          ['rate bars', 'collision animation', 'chip pop', 'particle dots', 'marker slide', 'tick'], 'Hold about 1 second after the last word'],
    'evidence': ['new', 'Wide coded log line from 0.001 to 1000 with a teal K marker, a pen bracket, and two coded tubes with 100-square percent grids (18 and 79 brown)', 'Shows the measured K values and the tubes so a bigger K is tied to the deeper brown the learner can see',
                 '0.49 / eighty times / eighteen percent / pale / seventy-nine percent / deep brown',
                 'The K marker drops at 0.0061 and slides to 0.49 with a bracket, then two tubes fill their percent grids and tint pale and deep brown',
                 E, 'The chip "measured values (from pressure data)" and the log line appear; the K marker drops at 0.0061 and on "a hundred degrees" slides to 0.49 with a bracket "about 80 times"; two tubes with 100-square grids appear with "start: 0.040 mol/L N2O4"; 18 squares fill brown and the tube stays pale; 79 squares fill and the tube deepens; the tag "settled amounts given; you can check them with the ICE table from C6" lands',
                 ['lineGraph draw-on', 'marker slide', 'bracket draw', 'grid fill', 'tint change'], 'Hold about 2 seconds after the last word'],
    'backwards': ['adjust', 'The equation strip flipping with the C6 curved arrow, and the same wide log line with mirror-image points at about 160 and 2.0', 'Shows the exothermic case from the same data written backwards, with K falling on heating',
                  'backwards / 160 / 2.0 / falls',
                  'The equation flips with a curved arrow and the heat term moves to the right, then reciprocal points land as mirror images of the first pair and the marker slides left',
                  E, 'The strip flips to 2NO2(g) = N2O4(g) + heat with the heat term in terracotta on the right; the points about 160 (cold) and about 2.0 (hot) drop on the wide log line as mirror images about 1 with the tag "flip"; the teal marker slides left with the arrow "K falls"',
                  ['equation flip', 'marker drop', 'marker slide', 'tag pop'], 'Hold about 2 seconds after the last word'],
    'reason-and-rule': ['adjust', 'The browning hot tube, rate bars relabelled for the backwards equation, the flipped K expression, and two rule cards with flame and arrow icons', 'Gives the reason for the falling K (the same tube, with N2O4 now the product) and the two-case rule',
                        'Why? / reverse / less product / takes in / gives out / Cooling does the opposite',
                        'The tube browns again with the tag same tube written the other way, the amber bar rises further, the N2O4 term is ringed, then two rule cards write on and a cool-it tag lands',
                        E, 'On "Why?" the tube browns in the hot bath with "same tube, written the other way"; the bars return labelled "joining, forward" and "splitting, reverse"; on "reverse" both rise and the amber bar rises further; on "less product" N2O4 dots fall and NO2 dots rise with a pen ring on the N2O4 term of "K = [N2O4] / [NO2]^2"; the card "forward takes in heat: heat it, K rises" writes on, then "forward gives out heat: heat it, K falls"; the tag "cool it: opposite" lands',
                        ['particle dots', 'rate bars', 'ScribbleCircle', 'card slide-in', 'tag pop'], 'Hold about 2 seconds after the last word'],
    'four-changes': ['new', 'Coded four-row change table with columns what you do, what moves and K, a one-beat tube icon for each row and a flame icon on the last row', 'Contrasts the four changes so the learner sees only heating moves the target, and separates a shift from a change in K',
                     'The first three / Heat the tube / K changes / A shift is Q moving / Only temperature moves the target',
                     'Rows one to three write on with teal ticks, row four writes on with a pen ring and flame, then two lines separate a shift from a change in K',
                     E, 'The table appears one row at a time: add N2O4, squeeze and catalyst each write on with "same" and a teal tick; on "Heat the tube" the heat row writes on with "changes", a pen ring and a flame; "shift: Q moves" and "K changes: the target moves" write on separate lines with a pen "not the same thing"',
                     ['table build', 'tick', 'ScribbleCircle', 'icon pop', 'HandText write-on'], 'Hold about 2 seconds after the last word'],
    'new-k': ['adjust', 'The cold settled tube with readouts, the C5 expression builder writing the Q working line, the wide log line with K and Q markers, and a boiling-water bath', 'Links heating to the reaction quotient: the amounts have not moved but K has, so Q is left below K',
              '0.0329 / 0.0142 / 0.0061 / boiling water / K is now 0.49 / Q is below K',
              'The readouts write on and the Q working line builds to 0.0061 with both markers together, then the tube drops into boiling water, the K marker jumps right and a bracket marks the gap',
              E, 'The tube tagged "settled at 25 C" shows [N2O4] = 0.0329 mol/L and [NO2] = 0.0142 mol/L; the builder writes "Q = 0.0142^2 / 0.0329 = 0.0061" with the tag "Q: no unit written"; the K and Q markers sit together at 0.0061 with the teal bracket; the tube drops into the hot bath, the K marker jumps to 0.49 with a small flash while Q stays, and a bracket reads "Q below K"',
              ['expression builder', 'HandText write-on', 'marker jump', 'bracket draw', 'bath slide'], 'Hold about 2 seconds after the last word'],
    'mixture-moves': ['adjust', 'Rate bars labelled splitting and joining, the Q marker climbing the log line to the new K as the tube browns, and two large step labels', 'Shows the second step of heating: the mixture moves until Q reaches the new K',
                      'splits faster than it forms / builds up / first K changes, then the mixture moves to match it / reaches the new K',
                      'The bars show a question mark then the blue bar grows taller, the Q marker climbs as the tube browns and lands with a teal flash, and two numbered steps write large',
                      E, 'The splitting (blue) and joining (amber) bars appear with "?"; on "splits faster than it forms" the blue bar grows taller with "splitting faster"; the Q marker climbs toward the new K as the tube browns and lands with a teal flash as the bars meet; the readouts tick to 0.0082 mol/L and 0.0635 mol/L with "0.0635^2 / 0.0082 = 0.49"; "1. K changes" and "2. Q moves to the new K" write large in turn',
                      ['rate bars', 'marker slide', 'particle dots', 'NumberTicker', 'HandText write-on'], 'Hold about 2 seconds after the last word'],
    'memory-aid': ['adjust', 'Large handwritten aid with a pen arrow to the K marker, two equation lines with a terracotta flame on the left and right, and a condition tag', 'Gives the invariant and the heat-on-a-side shortcut after the cause is explained, with its limit',
                   'change T, change K / Change anything else, K stays / heat like a chemical / left / up / right / down',
                   'The first aid line writes large, then two equation lines write on with the flame on each side and the K up and K down labels',
                   E, 'The aid line "Change T, change K. Change anything else, K stays." writes large with a pen arrow to the K marker; "reactants + heat = products" writes on with the flame on the left and "K up when heated"; "reactants = products + heat" writes on with the flame on the right and "K down when heated"; the tags "direction only; heat changes the rates unequally" and "same equation as written; heat is never put in the K expression" land',
                   ['HandText write-on', 'DrawPath arrow', 'icon pop', 'tag pop'], 'Hold about 2 seconds after the last word'],
    'attempt': ['new', 'Coded hot H2 + I2 tube (purple iodine), the H2(g) + I2(g) = 2HI(g) equation strip with no heat term, a grouped givens card with units and one numbered demand', 'Unseen transfer to an exothermic reaction with every given visible and no answer cues',
                'sealed tube / 10 kilojoules / 49 / Pause here to answer',
                'The countdown ring runs through the answer-free thinking hold',
                E, 'The tube and the equation strip appear as each is named; the givens card writes on "K = 49 (about 450 C)", "sealed tube, constant volume" and "forward reaction gives out about 10 kJ per mole of H2"; the demand "Heated to 500 C and settled: is K above, equal to or below 49? Give a short reason." stays on screen; earlier boards and the aid are removed; the countdown ring starts after the narration',
                ['Countdown ring', 'Enter reveals'], 'Quiet answer-free thinking hold with a 10 second countdown'],
    'feedback-heating': ['adjust', 'The attempt board with the heat term now on the right of the strip, rate bars rising unequally, the K marker sliding slightly left, and two crossed wrong-answer chips', 'Explains the answer by which reaction takes in heat and corrects the rises and equal slips',
                         'reverse / falls / slightly / eighty times / rises / equal',
                         'The strip writes the heat on the right, both bars rise with the amber bar a little further, the K marker slides slightly left, and two wrong chips are crossed on their cues',
                         E, 'The strip rewrites with the heat on the right and a flame icon pointing at the left; both bars rise with the amber reverse bar a little further; the K marker slides slightly left with "small heat, small change"; the tag "N2O4: K x 80" sits beside it; the chip "K up: both speed up, but one speeds up more" is crossed with a pen arrow to the unequal bars; the chip "K equal: K stays fixed only at a fixed temperature" is crossed with the thermometer icon; a tick lands on "below 49"',
                         ['rate bars', 'marker slide', 'Mark cross', 'chip pop', 'tick'], 'Settle on the corrected board'],
    'feedback-extra-check': ['adjust', 'The tube gaining four H2 dots, the log line with the K marker pulsing still at 49 while the Q marker drops and climbs back, and one crossed chip', 'Checks the first aid line as a stated extra case: adding hydrogen moves Q and leaves K alone',
                             'stay at 49 / Q / shifts right / K itself did not move',
                             'Four hydrogen dots drop in, the K marker pulses still while the Q marker drops left and begins climbing back, and the shift chip is crossed',
                             E, 'The tube gains four H2 dots with a pen arrow; the teal K marker pulses still at 49 while the Q marker drops left and begins climbing back; the forward arrow lights blue; the chip "K changed because it shifted" is crossed with the caption "a shift is Q moving; K is the target"',
                             ['particle drop', 'marker pulse', 'marker slide', 'arrow light', 'Mark cross'], 'Hold about 2 seconds after the last word'],
    'decision-rule': ['adjust', 'A question card with flame and arrow icons and a quiet second line with a still teal marker, a two-row table, and a next chip with a colourimeter icon', 'Packs the lesson into one reusable question, shows the table read backwards, and hands off to colour measurements',
                      'take in / give it out / backwards / Next',
                      'The question card writes on, a small two-row table writes in on backwards with the K marker moving right, then the next chip slides in',
                      E, 'The card "Temperature changed? Does the forward reaction take in or give out heat?" writes on with a flame and up and down arrows, with a quiet line "Anything else changed? K stays. Q moves."; on "backwards" a two-row table "T up: K up" and "forward takes in heat" writes on with the K marker moving right; on "Next" the chip "Next: finding K from measured colour" appears with a colourimeter and cuvette icon',
                      ['HandText write-on', 'card slide-in', 'marker slide', 'chip slide-in'], 'Hold about 2 seconds after the last word'],
    'key-notes': ['new', 'Key notes card with the memory aid in large writing and its condition tag', 'Essentials to copy into books', 'key notes',
                  'Notes appear then stay still for copying',
                  H, 'The notes and the memory aid appear and lock', ['Enter reveals'], 'Quiet copy hold of about 90 seconds with pause invitation'],
}

P02_ROWS = {
    'hook': ['adjust', '''C9 log line card with "K = 0.0061" and "K = 0.49", the painted C3 iron tube pair (pale to deep), painted magnifier, a coded dial icon and a teal K chip''', '''Poses the puzzle: every K so far was given, so how can a colour reading on a real tube become a measured K''',
             'red / number / real K',
             'The given-K card and a question mark write on, the magnifier fails to count ions, the tube deepens to red and a dial and a teal K chip land on the equation strip',
             E, '''Heading "Where do K values come from?" writes on; the C9 card sits top right with a pen "given" tag; the painted C3 tube enters left; on "count ions" the magnifier moves over it and its lens shows a blur of dots with a pen cross "too many to count"; the equation strip writes under the tube; on "red" the tube deepens to the deep plate (or crossfades) with an arrow "more red ion"; on "number" a dial icon with "?" appears; on "real K" a teal "K = ?" chip lands on the strip''',
             ['HandText write-on', 'plate crossfade', 'Enter reveals', 'ScribbleCircle', 'chip pop'], '''Hold about 1 second on the question'''],
    'colourimeter': ['adjust', '''Painted colourimeter, a coded cutaway (lamp, blue filter, cuvette slot, detector, readout), painted cuvettes, a colour wheel chip and the painted blank cuvette''', '''Shows what the instrument measures: the red ion absorbs blue light, more ions absorb more, and a blank sets zero''',
             'colourimeter / cuvette / blue light / absorbance / blank',
             'The cutaway opens beside the colourimeter, a cuvette slides in, the beam turns blue and thins as red dots multiply, the readout rises, then the blank snaps it to zero',
             E, '''The painted colourimeter gets a pen label; a coded cutaway opens beside it; the cuvette slides into the slot with the tag "cuvette: holds the sample in the beam"; a white beam leaves the filter blue (tag "447 nm") and the colour wheel chip marks blue as absorbed ("absorbs blue, so it looks red"); red dots multiply and the beam thins; the readout rises from 0.000 under "absorbance: how much light is soaked up"; the blank cuvette replaces the sample, the beam returns to full width and the readout snaps to 0.000 with "blank: water, set to zero"''',
             ['plate slide', 'cutaway reveal', 'beam animation', 'particle dots', 'readout tick', 'tag pop'], '''Hold about 2 seconds after the last word'''],
    'absorbance': ['new', '''Two coded cuvettes in the cutaway beam with 8 and 16 red dots, the A = epsilon l c equation, symbol tags, a pen bracket across the cuvette and teal lock icons''', '''Gives the relationship that lets a reading stand for a concentration: with fixed cuvette and light, absorbance rises in step with concentration''',
             'doubling / doubles / epsilon / in step',
             'The dots double and the readouts tick 0.20 then 0.40, then the equation writes and each symbol lights on its name before locks land on the fixed terms',
             E, '''Two cuvettes with 8 and 16 dots sit in the beam with the key "same cuvette, same light"; on "doubling" the dots double; on "doubles" the readouts tick 0.20 then 0.40 (tag "pattern, not data"); "A = εlc" writes large and each symbol lights on its spoken name with a short tag (absorbance, concentration, cuvette width with a pen bracket, how strongly this ion absorbs this light); on "stay fixed" teal locks land on ε and l; on "in step" the tag "A proportional to c" writes beside it, with a small grey note that the transmitted light does not simply halve''',
             ['particle dots', 'readout tick', 'HandText write-on', 'icon pop', 'bracket draw'], '''Hold about 2 seconds after the last word'''],
    'standards': ['new', '''Two painted reagent bottles (colourless KSCN, pale yellow Fe3+), grey and yellow dots, the equation strip with a heavy forward arrow, and the five painted cuvettes pale to deep''', '''Explains how a concentration can be known: a big excess of Fe3+ pushes the equilibrium right, so almost every SCN- becomes the red ion''',
             'standards / big excess / almost every / five known concentrations',
             'Yellow dots pour onto a few grey dots, a heavy arrow shifts the strip right, each grey dot pairs and turns red, then five cuvettes slide in with their labels',
             E, '''The bottles appear with coded labels "0.00200 mol/L KSCN" and "0.200 mol/L Fe3+, large excess"; on "big excess" many yellow dots pour onto a small cluster of grey dots; the strip gets a heavy forward arrow tagged "extra Fe3+ shifts it right"; on "almost every" each grey dot pairs with a yellow one and turns red, leaving one grey dot; the equality "[FeSCN2+] = [SCN-] in the standard" writes with a teal tick; on "five known concentrations" the five cuvettes slide in labelled 0.40 to 2.00 (x 10^-4 mol/L); a tag says standards are not equilibrium mixtures and K is never calculated from one''',
             ['plate slide', 'particle dots', 'shift arrow', 'tick', 'Enter reveals'], '''Hold about 2 seconds after the last word'''],
    'calibration': ['new', '''Coded calibration graph with gridlines, the five painted standard cuvettes flying to their points, the blank point, a fitted line, a crossed dot-to-dot zigzag and the chip "illustrative class data"''', '''Shows how measured points become a calibration line, why the line passes near the origin, and why each instrument needs its own line''',
             'absorbance up the side / straight line / calibration',
             'The axes label, each cuvette flies to its point with its reading, the blank drops the origin point, the fitted line draws through them and the range limit fades the line beyond 2.00 to dashed',
             E, '''Axes write on ("absorbance", "[FeSCN2+] (x 10^-4 mol/L)"); each standard cuvette shrinks and flies to its point with 0.191, 0.374, 0.566, 0.751, 0.939; the blank drops (0, 0.000); the fitted line draws through the cloud while a faint dashed zigzag is crossed; a pen ring on the origin with "intercept 0.001: close to zero"; the word "calibration" writes over the graph; the line beyond 2.00 fades to dashed with "use the line only inside the standards"''',
             ['lineGraph draw-on', 'plate fly-in', 'readout tick', 'ScribbleCircle', 'Mark cross'], '''Hold about 2 seconds after the last word'''],
    'read-mixture': ['adjust', '''Task line and grouped givens card, a yellow, grey and red dot view, the painted unknown cuvette in the cutaway, the calibration graph with across-then-down guides, and a small equation card''', '''Shows a real equilibrium mixture and how its measured absorbance becomes the unknown concentration, by graph or by the line equation''',
             'neither is in excess / 0.705 / across / down / 1.50 times ten to the minus four',
             'The givens write in groups, the three-ion dot view appears, the readout ticks to 0.705, a pen guide runs across then down to 1.50, and the equation card solves the same value',
             E, '''"Find K for this mixture" writes top left; the givens card fills in groups (5.00 mL of 0.00200 mol/L Fe3+, 5.00 mL of 0.00200 mol/L SCN-, total 10.00 mL, same temperature); on "neither is in excess" yellow, grey and red dots appear with "real equilibrium: all three present"; the unknown cuvette enters the cutaway and the readout ticks to "A = 0.705"; on "across" a guide runs from 0.705 to the line, on "down" it drops to the axis and "1.50" rings, writing "[FeSCN2+]eq = 1.50 x 10^-4 mol/L" into the card; the side card writes "A = 4690c + 0.001", "0.705 - 0.001 = 4690c", "c = 0.704 / 4690 = 1.50 x 10^-4" on the spoken moves''',
             ['Enter reveals', 'particle dots', 'readout tick', 'guide line draw', 'HandText write-on'], '''Hold about 2 seconds after the last word'''],
    'dilution': ['new', '''Two painted 5.00 mL pipettes emptying into one painted 10.00 mL volumetric flask with coded liquid fill, a dilution working line and a crossed bottle-value chip''', '''Teaches that mixing spreads each ion through twice the volume, so starting concentrations come from the volumes, never from the bottle''',
             '10 millilitre / halves / 0.00100',
             'The two pipettes empty into the flask, the liquid stands twice as tall with the dots at half density, the working writes under it and the bottle value is crossed',
             E, '''Two pipettes empty into the flask; the liquid is twice as tall and the yellow dots spread to half density (tag "same particles, twice the volume"); on "halves" "0.00200 x 5.00 / 10.00 = 0.00100 mol/L" writes with the 5.00 and 10.00 pen-linked to the volumes; on "for iron and for thiocyanate" it repeats as "SCN-: 0.00100 mol/L"; on "never the bottle values" the chip "start = 0.00200 (bottle value)" fades in and is crossed with "mixing dilutes: use 0.00100"; both starting values join the givens card''',
             ['plate slide', 'liquid fill', 'particle dots', 'HandText write-on', 'Mark cross'], '''Hold about 2 seconds after the last word'''],
    'ice-table': ['reuse', '''The C6a ICE table with row labels lighting on their letters, pen arrows from the givens card, the E-row-first arrow, the E - I bracket, 1 : 1 : 1 chips and the C6a rule chip''', '''Applies the known E-row-first method so the measured value fixes the change and the other equilibrium amounts follow''',
             'I for initial / C for change / E for equilibrium / equilibrium row / plus / fall / 8.50 times ten to the minus four',
             'Initial cells fill from the card, the measured value goes into the equilibrium cell first, the bracket gives the change, the 1 : 1 : 1 chips give the reactant falls and the equilibrium cells complete',
             E, '''The ICE table replaces the dilution strip with each row label lighting on its letter; Initial ticks to 1.00 x 10^-3, 1.00 x 10^-3 and 0; the pen arrow puts 1.50 x 10^-4 in the FeSCN2+ Equilibrium cell; the E - I bracket gives +1.50 x 10^-4 in made colour; the 1 : 1 : 1 chips fly along the Change row and the reactant cells tick -1.50 x 10^-4 in used colour; the reactant Equilibrium cells tick 8.50 x 10^-4 with the subtraction shown; the rule chip lists the four steps''',
             ['table fill', 'pen arrow draw', 'bracket draw', 'chip pop', 'tick'], '''Hold about 2 seconds after the last word'''],
    'find-k': ['adjust', '''The C5 expression builder, a 100-square grid with 15 red squares, the C5 three-band K line with a marker at 208 and a crossed products-favoured chip''', '''Substitutes the equilibrium values into K and stops a wrong reading of its size: 15 percent converted means the middle band, not mostly products''',
               'squared / 208 / fifteen percent / middle band',
               'The expression writes and the equilibrium values fly in, the denominator collapses to 7.225 x 10^-7, K = 208 lands in teal, then the grid fills 15 squares and the marker sits inside the middle band',
               E, '''The builder writes "K = [FeSCN2+] / ([Fe3+][SCN-])" and the Equilibrium values fly in; on "squared" the denominator collapses to "(8.50 x 10^-4)^2 = 7.225 x 10^-7"; on "208" "K = 208" writes in teal with "no unit written"; on "fifteen percent" a 100-square grid colours 15 squares red with "1.50 x 10^-4 / 1.00 x 10^-3 = 15%"; on "middle band" the small C5 band line shows a marker at 208 and the chip "K = 208, so mostly products" is crossed with "only 15% reacted"''',
               ['expression builder', 'value fly-in', 'grid fill', 'marker drop', 'Mark cross'], '''Hold about 2 seconds after the last word'''],
    'repeats': ['new', '''Coded results table (five mixtures, A and K columns) with the chip "illustrative class data", a short strip plot, the C9 thermometer icon and three weak-point icons''', '''Shows that repeat mixtures give nearly the same K, that the spread measures trust, and that the temperature must be recorded''',
                'five / same temperature / 205 and 214 / 208 / temperature',
                'The table writes on, the K column fills with 214, 205, 209, 205, 208, a range bracket and mean line follow, the strip plot clusters and the thermometer asks for the temperature',
                E, '''The results table writes on with the chip "illustrative class data" (SCN- added 1.00 to 5.00 mL, A 0.162 to 0.705); on "five" the K column fills 214, 205, 209, 205, 208 with row 5 pen-linked to the worked mixture; on "205 and 214" a bracket "range 205 to 214" and "mean 208" write under the column and the strip plot shows the five points clustered; on "temperature" the thermometer icon writes "T = ___ C (record it)"; on "weak points" three icons write in turn (small volumes, line fit, standards almost all red)''',
                ['table fill', 'bracket draw', 'strip plot', 'icon pop', 'HandText write-on'], '''Hold about 2 seconds after the last word'''],
    'memory-aid': ['adjust', '''Large handwritten aid with the colour wheel chip and a pen arrow from a red cuvette to the blue beam, a five-step chain strip, a "dilute first" clip tag and a condition tag''', '''Gives the absorbed-colour rule and the five-step order after both are explained, with the condition that the same instrument and temperature are used''',
                    'measure the colour it absorbs, not the colour you see / standards, graph, reading, ICE table, K / dilution',
                    'Aid one writes large with the wheel and arrow, then the five-step chain lights step by step and the dilute-first tag clips between reading and ICE table',
                    E, '''Aid one writes large with the colour wheel chip and a pen arrow from a red cuvette to the blue beam; aid two writes beneath as a chain strip lighting on its cues: five cuvettes (standards), the line (graph), the across-then-down guide (reading), a mini ICE table, teal K; on "dilution" the tag "dilute first" clips onto the arrow between reading and ICE table; the condition tag "same instrument, cuvette and light; record the temperature" lands''',
                    ['HandText write-on', 'DrawPath arrow', 'step highlight', 'tag pop'], '''Hold about 2 seconds after the last word'''],
    'attempt': ['new', '''Calibration graph with no guides, the equation strip, a grouped givens card with units, one demand and an empty ICE outline''', '''Unseen transfer with unequal volumes and added water; every value and the demand stay visible and no answer cues are shown''',
                '4.50 millilitres / 3.50 millilitres / 2.00 millilitres of water / 0.470 / Pause here to answer',
                'The countdown ring runs through the answer-free thinking hold',
                E, '''The board clears to the calibration graph without guides, the strip and a new givens card (4.50 mL of 0.00200 mol/L Fe3+, 3.50 mL of 0.00200 mol/L SCN-, 2.00 mL of water, absorbance 0.470, same calibration graph and temperature); the demand "Find K." stays; an empty ICE outline shows labels only; the countdown ring starts after the narration with "Pause here to answer."; no totals, working or 208 on screen''',
                ['Countdown ring', 'Enter reveals'], '''Quiet answer-free thinking hold with a 10 second countdown'''],
    'feedback': ['adjust', '''The attempt board with an answer chip, a volume sum, two dilution lines, the pen guide on the graph, the ICE table with the E-row-first arrow and bracket, the K builder, the worked K = 208 chip and one crossed bottle-value chip''', '''Gives the answer first, shows the short working one line per cue, the payoff that a different mixture gives the same K at one temperature, and one crossed classic mistake''',
                 '208 / dilute / 9.00 / 7.00 / across / 1.00 / equilibrium row first / 8.00 / 6.00 / Divide / same K / 28',
                 'The answer chip pins, the volumes sum and each dilution line writes and flies into the table, the guide reads 1.00 from the graph, the E-row arrow and bracket give the changes, K writes as 208, the worked chip slides in with a teal equals sign and the bottle-value chip is crossed',
                 E, '''On "208" the chip "K = 208" pins top right; on "dilute" "4.50 + 3.50 + 2.00 = 10.00 mL" adds with the water ringed; on "9.00" "Fe3+: 0.00200 x 4.50 / 10.00 = 9.00 x 10^-4" writes and flies into the Initial row; on "7.00" "SCN-: 0.00200 x 3.50 / 10.00 = 7.00 x 10^-4" does the same; on "across" the guide runs from 0.470 to the line and down, and "1.00 x 10^-4" rings on "1.00"; on "equilibrium row first" the pen arrow places 1.00 x 10^-4, the bracket gives +1.00 x 10^-4 and the chips give -1.00 x 10^-4 twice; the cells tick 8.00 and 6.00 x 10^-4 on their words; on "Divide" the builder writes "K = 1.00 x 10^-4 / (8.00 x 10^-4 x 6.00 x 10^-4) = 208"; on "same K" the worked chip "K = 208" slides in with a teal equals sign and "different mixture, same temperature, same K"; on "28" the chip "K = 28: bottle values 0.00200 used" fades in and is crossed with a pen arrow to the dilution lines and the caption "dilute first"''',
                 ['chip pop', 'value fly-in', 'guide line draw', 'table fill', 'expression builder', 'chip slide-in', 'Mark cross', 'pen arrow draw'], '''Hold about 2 seconds after the last word'''],
    'decision-rule': ['adjust', '''The five-step chain strip returning along the top, a dilute-first tag, an E-row-first tag, the thermometer icon, a next chip and the painted vinegar bottle''', '''Collects the method into one order, ends on the temperature condition and hands off to Ka and Kb''',
                      'after mixing / temperature / Next / Ka and Kb',
                      'Each step of the chain lights on its words, the dilute-first and E-row-first tags light, the thermometer pulses and the next chip slides in with the vinegar bottle',
                      E, '''The chain strip returns along the top and each step lights on its words; "dilute first" lights between reading and ICE table on "after mixing"; "E row first" lights on the mini ICE table; the thermometer icon pulses on "temperature"; on "Next" the chip "Next: Ka and Kb, K for acids and bases" slides in with the small painted vinegar bottle''',
                      ['step highlight', 'icon pulse', 'chip slide-in', 'plate slide'], '''Hold about 2 seconds after the last word'''],
    'key-notes': ['new', '''Key notes card with the two memory aids in large writing and the condition tag''', '''Essentials to copy into books''', 'key notes',
                  '''Notes appear then stay still for copying''',
                  H, '''The heading "Key notes: what to write in your book", the five notes, the two aids and the condition tag appear and lock''', ['Enter reveals'], '''Quiet copy hold of about 75 seconds with pause invitation'''],
}


C10_ROWS = {
    'hook': ['adjust', '''Painted strong and weak acid with magnesium beakers (aligned pair), coded bubble streams, the painted vinegar bottle and a teal K chip''', '''Poses the puzzle at equal concentration: same acid strength on the label, same metal, different fizz, so what does the difference say about equilibrium''',
             '0.10 moles per litre / fizzes hard / slowly / vinegar / its own name',
             'The two beakers appear with labels that pulse together, a steady bubble stream rises in the first and a sparse one in the second, the vinegar bottle joins and a K chip lands',
             E, '''Two painted beakers side by side with coded labels "hydrochloric acid, HCl, 0.10 mol/L" and "ethanoic (acetic) acid, CH3COOH, 0.10 mol/L"; on "0.10 moles per litre" the labels pulse with a pen "=" between them; on "fizzes hard" a steady bubble stream rises in the first; on "slowly" a sparse stream rises in the second; on "vinegar" the painted vinegar bottle appears with a pen link; the heading "Same acid concentration. Why a different fizz?" writes on; on "its own name" a teal "K?" chip lands under the second beaker''',
             ['HandText write-on', 'bubble streams', 'plate slide', 'chip pop', 'label pulse'], '''Hold about 1 second on the question'''],
    'strong-weak': ['new', '''Two particle lenses above the beakers (HCl all ions; acetic acid mostly whole molecules with one splitting and one rejoining), a C9 100-square grid and amber, violet and navy particles''', '''Explains why the fizz differs: hydrogen ions make the bubbles, and an acid that only partly ionises has far fewer of them''',
             'hydrogen ions / strong acid / join back up / one in a hundred / weak acid',
             'The lenses open, an H+ makes a bubble, every HCl splits, the acetic acid lens shows splitting and rejoining, one square of a hundred fills and the terms write under the beakers',
             E, '''A lens opens above each beaker; on "hydrogen ions" an amber H+ drifts to the ribbon and an H2 bubble forms ("H+ makes the bubbles"); on "every hydrochloric acid molecule" navy-amber pairs split until only H+ and Cl- remain ("all split"); "strong acid" writes under the first beaker with "ionises completely"; on "join back up" the acetic acid lens shows mostly whole molecules with one splitting and one pair rejoining (two-way arrows lighting both ways); on "one in a hundred" one square of a 100-square grid colours; a pen bracket compares the amber counts; "weak acid" writes under the second beaker with "only partly ionises"''',
             ['lens open', 'particle dots', 'two-way arrows', 'grid fill', 'bracket draw'], '''Hold about 2 seconds after the last word'''],
    'ka-is-k': ['adjust', '''The equation strip for any weak acid HA, the extended C5 expression builder with species tiles, the Ka name with its full name, and the C5 rules card with teal ticks''', '''Shows that a balance of molecules and ions is an equilibrium with a K written by the rule already known, so Ka is a name, not a new kind of constant''',
                'H plus times A minus, over H A / Ka / acid dissociation constant / not a new kind of constant',
                'The strip writes, the product tiles fly to the top and HA to the bottom, the small ones fade, Ka writes with its name, and the rules card slides in with ticks',
                E, '''The strip writes "HA(aq) = H+(aq) + A-(aq)" with the tag "any weak acid: HA"; on "Products over reactants" the H+ and A- tiles fly to the numerator and HA to the denominator giving "[H+][A-] / [HA]"; on "no powers" small 1s on each tile fade; "Ka" writes with a subscript a and "acid dissociation constant" beneath; on "not a new kind of constant" the C5 rules card slides in with a teal tick on each line and the label "Ka = K for an acid splitting into ions"; the acetic acid version writes small beneath''',
                ['expression builder', 'tile fly-in', 'HandText write-on', 'card slide-in', 'tick'], '''Hold about 2 seconds after the last word'''],
    'with-water': ['adjust', '''A second equation strip with water, a small coded H3O+ sketch (amber H+ on a pale blue water molecule), the "left out" tray and a crossed full-fraction chip''', '''Stops water being written into Ka: it is the solvent, so the expression keeps the same shape''',
                   'H three O plus / No / stays out / same shape',
                   'The water form writes under the first, the H3O+ sketch forms, the water tile drops into the tray, a wrong fraction is crossed and the two Ka lines are joined by a same bracket',
                   E, '''The strip "HA(aq) + H2O(l) = H3O+(aq) + A-(aq)" writes under the first; on "H three O plus" an amber H+ attaches to a pale blue water molecule ("H3O+ = H+ carried by water"); on "No" the H2O(l) tile drops into the "left out" tray ("solvent: huge, steady amount"); on "stays out" the chip "[H3O+][A-] / ([HA][H2O])" fades in and is crossed; on "same shape" "Ka = [H3O+][A-] / [HA]" writes under "Ka = [H+][A-] / [HA]" with a teal "same" bracket''',
                   ['equation write-on', 'tile drop', 'tray', 'Mark cross', 'bracket draw'], '''Hold about 2 seconds after the last word'''],
    'ka-size': ['adjust', '''A horizontal log size strip (ticks 10^-12 to 10^0, faint C5 band colours), a navy acetic acid marker and the acetic acid lens with mostly whole molecules''', '''Reads the size of Ka as for any K: a small Ka means a small top and a big bottom, so mostly whole molecules''',
                '1.8 times ten to the minus five / small top and a big bottom / whole molecules',
                'The size strip draws, the acetic acid marker drops onto it, the Ka fraction pulses small over big and the lens returns showing mostly whole molecules',
                E, '''The log ruler writes on with "each tick is ten times the last"; on "1.8 times ten to the minus five" the marker "acetic acid, Ka = 1.8 x 10^-5 (25 C)" drops onto it; on "small top and a big bottom" the Ka fraction pulses with a small numerator and large denominator and the acetic acid lens returns with the tag "mostly whole molecules"''',
                ['log ruler draw', 'marker drop', 'fraction pulse', 'lens open'], '''Hold about 1 second after the last word'''],
    'ka-compare': ['adjust', '''The size strip with the acetic acid marker kept and an HF marker added, two 100-square grids (8 and 1 squares), a stronger acid arrow and a crossed Ka-is-pH chip''', '''Compares two weak acids by powers of ten and states that Ka is a ratio, not the concentration of H+ or the pH''',
                   '6.8 times ten to the minus four / eight in a hundred / bigger the Ka, the stronger / not the concentration of H plus',
                   'The HF marker drops to the right with a nearly 40 times bracket, two grids fill 8 and 1 squares, an arrow along the ruler points to stronger and a wrong chip is crossed',
                   E, '''The strip and the acetic acid marker stay; on "6.8 times ten to the minus four" the marker "HF, Ka = 6.8 x 10^-4 (25 C)" drops to its right with the pen bracket "nearly 40 times"; on "eight in a hundred" two 100-square grids stand side by side with 8 squares for HF and 1 for acetic acid ("both at 0.10 mol/L"); on "bigger the Ka, the stronger" an arrow "stronger acid" points right along the ruler; on "not the concentration of H plus" the chip "Ka = [H+]? Ka = pH?" fades in, is crossed and the caption "Ka is a ratio; [H+] and pH also depend on how much acid" writes''',
                   ['marker drop', 'bracket draw', 'grid fill', 'arrow draw', 'Mark cross'], '''Hold about 2 seconds after the last word'''],
    'strong-acids': ['adjust', '''The HCl particle lens returning with only ions, a Ka fraction for HCl with a flashing near-zero denominator, and the acetic acid lens beside it''', '''Explains why no Ka value is quoted for a strong acid: no molecules are left for the bottom of the fraction''',
                     'no H C L molecules left / ionises completely / weak acids',
                     'The HCl lens returns with a ring on the empty space, the fraction writes and its denominator flashes, the fraction greys out under a strong-acid label, and the acetic acid lens slides in with a tick',
                     E, '''The HCl lens returns showing only amber and violet ions with a pen ring on the empty space ("no HCl molecules left"); the fraction "[H+][Cl-] / [HCl]" writes and the denominator flashes "about 0" with a pen "?"; on "We don't use a Ka value" the fraction greys out under the label "strong acid: ionises completely, no Ka value used"; on "weak acids" the acetic acid lens slides in with a teal tick and "weak acid: molecules and ions, so Ka"''',
                     ['lens open', 'ScribbleCircle', 'fraction fade', 'card slide-in', 'tick'], '''Hold about 2 seconds after the last word'''],
    'kb': ['adjust', '''The ammonia equation strip, the painted ammonia bottle (interim painted clear flask) with a particle lens, the "left out" tray, the Kb expression and a small copy of the size strip''', '''Shows the same rule for a weak base: ammonia takes a hydrogen ion from water, the ions rejoin, water stays out, and a small Kb means mostly molecules''',
           'hydrogen ion from a water molecule / stays out / Kb / base dissociation constant / 1.8 times ten to the minus five / weak base',
           'The strip writes, an H moves from a water molecule to NH3 making NH4+ and OH-, the water tile drops into the tray, Kb writes with its name, a marker lands on a small size strip and the lens shows mostly molecules',
           E, '''The strip "NH3(aq) + H2O(l) = NH4+(aq) + OH-(aq)" writes; the bottle stands in the left column with a lens above; on "hydrogen ion from a water molecule" an amber H moves from a water molecule to NH3, giving violet NH4+ and green OH-, while elsewhere one pair rejoins; on "stays out" the H2O(l) tile drops into the tray ("still the solvent"); on "Kb" "Kb = [NH4+][OH-] / [NH3]" writes with "base dissociation constant"; on "1.8 times ten to the minus five" the marker "ammonia, Kb = 1.8 x 10^-5 (25 C)" lands on a small size strip and the lens shows "mostly molecules"; "weak base" writes on''',
           ['particle dots', 'two-way arrows', 'tile drop', 'expression builder', 'marker drop'], '''Hold about 2 seconds after the last word'''],
    'ksp-preview': ['adjust', '''The painted saturated beaker with a coded lens at the crystal surface, the AgCl equation strip, the left-out tray and a Ksp expression with a "later videos" chip''', '''Shows the same one-rule pattern for a solid that barely dissolves, writing the expression only''',
                    'solid stays out / silver ions times chloride ions / Ksp',
                    'The saturated beaker and its lens show ions leaving and rejoining, the AgCl tile drops into the tray and the Ksp expression writes with no denominator',
                    E, '''The painted saturated beaker stands on the left with a lens at the crystal surface (ions leave and rejoin); the strip "AgCl(s) = Ag+(aq) + Cl-(aq)" writes; on "solid stays out" the AgCl(s) tile drops into the tray ("pure solid"); on "silver ions times chloride ions" "Ksp = [Ag+][Cl-]" writes with no denominator, a faint "(about 1.8 x 10^-10 at 25 C)" tag and the chip "Ksp: later videos"''',
                    ['plate slide', 'lens open', 'two-way arrows', 'tile drop', 'HandText write-on'], '''Hold about 1 second after the last word'''],
    'memory-aid': ['adjust', '''The three expressions in a row with teal name tags and the left-out tray beneath, the large handwritten aid, a condition tag and the size strip arrow''', '''Gives the one-rule line after all three cases are explained, with the like-with-like condition''',
                   'Ka, Kb and Ksp are just K with a name tag / same kind / further to the right',
                   'The three expressions stand in a row with name tags hanging from each K, the aid writes large, the condition tag writes and the ruler arrow lights',
                   E, '''The three expressions stand in a row, each with a teal name tag hanging from the K ("a", "b", "sp") and the tray beneath holding H2O(l), H2O(l) and AgCl(s); the aid "Ka, Kb and Ksp are just K with a name tag." writes large; on "same kind" the tag "compare like with like: same kind of equation, same temperature" writes; on "further to the right" the size strip arrow lights''',
                   ['HandText write-on', 'tag pop', 'tray', 'arrow light'], '''Hold about 2 seconds after the last word'''],
    'attempt': ['new', '''A grouped givens card with two Ka values and temperatures, the HCN equation strip and two numbered demands, with no builder, tray, size strip or markers''', '''Unseen transfer: write a Ka that includes water in the equation, and rank two acids; every value and demand stays visible and nothing carries an answer''',
                '1.8 times ten to the minus four / 6.2 times ten to the minus ten / H C N / Pause here to answer',
                'The countdown ring runs through the answer-free thinking hold',
                E, '''The board clears; the givens card shows "methanoic acid, HCOOH: Ka = 1.8 x 10^-4 (25 C)" and "hydrogen cyanide, HCN: Ka = 6.2 x 10^-10 (25 C)"; the strip "HCN(aq) + H2O(l) = H3O+(aq) + CN-(aq)" writes; the demands "1. Write Ka for this equation." and "2. Which is the stronger acid? Why?" stay visible; the countdown ring starts after the narration with "Pause here to answer."''',
                ['Countdown ring', 'Enter reveals'], '''Quiet answer-free thinking hold with a 10 second countdown'''],
    'feedback-expression': ['adjust', '''The expression builder on the attempt equation with products to the top, HCN to the bottom, water to the tray, and a crossed water-on-the-bottom chip''', '''Corrects the expression and the most likely slip, putting the solvent in the fraction''',
                            'H three O plus times C N minus, over H C N / water on the bottom',
                            'The tiles fly to the top and bottom, the water tile drops into the tray, Ka writes with a tick and the wrong chip fades in and is crossed',
                            E, '''The builder runs on the attempt equation: H3O+ and CN- tiles fly to the top, HCN to the bottom and H2O(l) drops into the tray; "Ka = [H3O+][CN-] / [HCN]" writes with a teal tick; on "water on the bottom" the chip "[H3O+][CN-] / ([HCN][H2O])" fades in and is crossed with the caption "solvent: left out"''',
                            ['expression builder', 'tile fly-in', 'tray', 'Mark cross', 'tick'], '''Hold about 1 second after the last word'''],
    'feedback-stronger': ['adjust', '''The size strip with HCOOH and HCN markers at their log positions, a teal tick, a stronger acid arrow, a crossed number-in-front chip, exponent rings and the ratio working''', '''Answers the ranking with powers of ten first and corrects the common slip of comparing the numbers in front''',
                          'Methanoic acid / powers of ten first / three hundred thousand times',
                          'The two markers drop about five and a half ticks apart, methanoic acid gets a tick, the 6.2 over 1.8 chip is crossed, the exponents are ringed and the ratio line writes',
                          E, '''The strip returns with markers "HCOOH 1.8 x 10^-4" and "HCN 6.2 x 10^-10" at their true log positions; on "Methanoic acid is stronger" its marker gets a teal tick and the stronger arrow lights; the chip "HCN: 6.2 > 1.8" fades in and is crossed; on "powers of ten first" the exponents -4 and -10 get pen rings and a bracket; on "three hundred thousand times" "1.8 x 10^-4 / 6.2 x 10^-10 = 2.9 x 10^5" writes under the strip''',
                          ['marker drop', 'tick', 'Mark cross', 'ScribbleCircle', 'bracket draw'], '''Hold about 2 seconds after the last word'''],
    'decision-rule': ['adjust', '''A question card with the rule, a greyed Module 6 side card, a next chip and the small painted saturated beaker''', '''Collects the rule in order, marks what belongs to Module 6, and hands off to dissolving''',
                      'Module 6 / Next',
                      'The question card writes line by line, a greyed Module 6 card writes with a later tag, and the next chip slides in beside the small beaker',
                      E, '''The card writes "Acid or base in water? Write K: products over reactants, water left out. Name it Ka or Kb. Bigger value (same concentration): more split into ions."; a greyed side card "Module 6: pH from Ka, Ka and Kb linked" writes on "Module 6" with a pen "later" tag; on "Next" the chip "Next: how an ionic solid dissolves in water" appears beside the small painted saturated beaker''',
                      ['HandText write-on', 'card slide-in', 'tag pop', 'plate slide'], '''Hold about 2 seconds after the last word'''],
    'key-notes': ['new', '''Key notes card with the memory aid in large writing and its condition tag''', '''Essentials to copy into books''', 'key notes',
                  '''Notes appear then stay still for copying''',
                  H, '''The heading "Key notes: what to write in your book", the five notes, the aid and the condition tag appear and lock''', ['Enter reveals'], '''Quiet copy hold of about 70 seconds with pause invitation'''],
}


C11_ROWS = {
    'hook': [
        'adjust',
        'Painted copper sulfate beaker pair (crystal then dissolved, aligned) with the process clip or an interim crossfade, the painted hot thermometer and a cold cue',
        'Poses the puzzle: a crystal vanishes into even colour, so what pulls ions out of a lattice, and why do some salts warm the water while others cool it',
        'watch / shrinks / pale blue / hot / cold',
        'The crystal beaker plays into the dissolved beaker, a ring marks the shrinking crystal, a tag names the spreading copper ions and two thermometers ask hot or cold',
        E,
        'Heading "Where does a dissolving crystal go?" writes on; on "watch" the crystal plate plays to the dissolved plate with blue streaks rising; on "shrinks" a pen ring circles the crystal; on "pale blue" the tag "copper ions spread out" writes; on "hot" the hot thermometer stands at the right with a pen "?"; on "cold" the cold cue stands beside it',
        ['HandText write-on', 'process clip crossfade', 'scribbleEllipse', 'plate slide', 'chip pop'],
        'Hold about 1 second on the two questions',
    ],
    'two-players': [
        'new',
        'Coded NaCl lattice block with amber sodium and larger violet chloride ions, and one enlarged polar water molecule with delta marks',
        'Gives the two players before the action: a lattice held by opposite charges and a polar water molecule, each with a plain meaning',
        'lattice / polar',
        'The beaker shrinks to the left column, the lattice builds ion by ion, one ion links to its neighbours and the water molecule enlarges with its charge marks',
        E,
        'The beaker shrinks to the left column; on "lattice" the NaCl block builds, one inner Na+ pulses and six pen lines run to its neighbours with the tag "held by every neighbour" and the plain meaning "a regular stack of ions"; on "polar" one water molecule enlarges with delta-minus on the oxygen and delta-plus on each hydrogen and the tag "one end slightly negative, the other slightly positive"',
        ['column shrink', 'DrawPath', 'tile build', 'HandText write-on', 'label pulse'],
        'Hold about 1 second so both definitions can be read',
    ],
    'hydration': [
        'new',
        'Lattice close-up filling with pale blue water molecules, with oxygen ends toward sodium and hydrogen ends toward chloride, a corner ion lifting off and a full water shell',
        'Explains the cause of dissolving: oppositely charged ends pull on the ions, a corner ion is held by the fewest neighbours, and a water shell makes the ion aqueous',
        'turn to face the ions / ion-dipole attraction / corner / surround it completely / hydrated',
        'Water molecules rotate to face the ions, a dashed attraction line pulses, a corner chloride with three neighbour lines lifts off, a shell of six waters closes round it and the aqueous labels land',
        E,
        'On "turn to face the ions" surface water molecules rotate, oxygen toward Na+ and hydrogen toward Cl-, with a pen arrow on one; on "ion-dipole attraction" a dashed line pulses between a Na+ and a water oxygen and the term and its plain meaning write below; on "corner" a corner Cl- is ringed with three neighbour lines against six inside and lifts off; on "surround it completely" a six-molecule shell closes round it and a Na+ follows; on "hydrated" the labels "Na+(aq)", "Cl-(aq)" and "(aq) = surrounded by water" land',
        ['particle rotation', 'dashed line pulse', 'scribbleEllipse', 'shell close', 'HandText write-on'],
        'Hold about 2 seconds on the hydrated ions',
    ],
    'equation': [
        'adjust',
        'Equation strip NaCl(s) to Na+(aq) + Cl-(aq) with the lattice and the drifting hydrated ions side by side and the dissolved copper sulfate beaker in the left column',
        'Shows that the ions were already in the crystal, so dissolving separates and hydrates them and no salt molecules exist in the water',
        'sodium ions and chloride ions / separates / no salt molecules',
        'The equation writes on with the aqueous labels flying in from the close-up, the lattice and the free ions sit side by side, and a wrong chip about salt molecules is crossed',
        E,
        'On "sodium ions and chloride ions" the strip writes "NaCl(s) -> Na+(aq) + Cl-(aq)" with the (aq) labels flying in; on "separates" the lattice and the drifting hydrated ions sit side by side with the tag "same ions, now apart"; on "no salt molecules" the chip "NaCl molecules in water" fades in and is crossed with the caption "only separate hydrated ions"; the beaker tag becomes "hydrated Cu2+ = the blue"',
        ['HandText write-on', 'token fly-in', 'Mark cross', 'chip pop'],
        'Hold about 1 second after the crossed chip',
    ],
    'energy-steps': [
        'adjust',
        'Coded two-step energy ledger: a warm red bar rising for separating the ions, a teal bar falling for hydrating them, a net bar and a thermometer column',
        'Counts the energy in two steps so the sign of their sum explains warming or cooling',
        'away from each other / goes in / cling to / comes out / both happen together / enthalpy of solution / heats the water / from the water',
        'A red bar rises, a teal bar falls from its top, a bracket joins them, a net bar appears, and the thermometer column rises or falls as the longer bar swaps',
        E,
        'The ledger replaces the close-up; on "away from each other" and "goes in" the red bar rises with the tag "separate the ions: energy in, +"; on "cling to" and "comes out" the teal bar falls with "hydrate the ions: energy out, -"; on "both happen together" a pen bracket joins them with "counted separately, happen together"; on "enthalpy of solution" the net bar shows "dH(solution) = step 1 + step 2"; on "heats the water" the teal bar outgrows the red, the net points down and the column rises; on "from the water" the lengths swap, the net points up and the column falls',
        ['bar grow', 'bracket draw', 'thermometer column', 'HandText write-on', 'tag pop'],
        'Hold about 2 seconds on the finished ledger',
    ],
    'hot-cold-packs': [
        'adjust',
        'Coded dH bar chart with CaCl2 below zero and NH4NO3 above, mini ledgers, hot pack and cold pack cues and a crossed always-endothermic chip',
        'Gives real values for both signs and corrects the idea that dissolving always takes in energy',
        'minus 81 kilojoules per mole / instant hot packs / plus 25.7 / instant cold packs',
        'A teal bar drops for calcium chloride, a hot pack cue appears, a red bar rises for ammonium nitrate, a cold pack cue appears and a wrong chip is crossed',
        E,
        'The chart draws with a zero line and "kJ/mol, 25 C"; on "minus 81 kilojoules per mole" a teal bar drops labelled "calcium chloride, CaCl2: -81" with a mini ledger showing the longer teal bar; on "instant hot packs" the hot pack cue stands under it; on "plus 25.7" a red bar rises labelled "ammonium nitrate, NH4NO3: +25.7" with a mini ledger; on "instant cold packs" the cold pack cue stands under it; the chip "Dissolving always takes in energy" fades in and is crossed with "it can go either way"',
        ['bar chart grow', 'plate slide', 'Mark cross', 'chip pop'],
        'Hold about 2 seconds on the two bars',
    ],
    'salt-cancel': [
        'adjust',
        'The bar chart kept faint with a tall compressed NaCl ledger, a magnifier ring on the tiny gap and a bracket',
        'Shows that the difference of two large steps, not either step alone, sets the temperature change',
        'close to 800 kilojoules per mole / plus 3.9 / difference',
        'Two tall bars draw, a magnifier ring zooms the tiny gap between their ends and a bracket marks the difference',
        E,
        'The earlier bars fade back; on "close to 800 kilojoules per mole" a tall NaCl ledger draws with a red bar up "about +800" and a teal bar down "about -800"; on "plus 3.9" a magnifier ring zooms the gap labelled "NaCl: +3.9 (measured)" with the screen tag "1 mol in 1 L: under 1 C cooler"; on "difference" a pen bracket spans the gap with "difference decides"',
        ['bar grow', 'magnifier zoom', 'bracket draw', 'tag pop'],
        'Hold about 2 seconds on the magnified gap',
    ],
    'entropy': [
        'new',
        'Two-pan balance sketch with an energy cost pan and a spreading out pan, an ordered-to-scattered ion inset and a crossed big-cost chip',
        'Resolves the puzzle of an endothermic salt that still dissolves by recalling spreading out from the earlier video',
        'releasing heat / spreading out / increase in entropy / wins',
        'The balance sketch writes, the ordered lattice scatters into a wide field of water, the balance tips toward spreading out and a wrong chip is crossed',
        E,
        'The cold pack cue and its red bar return small; on "releasing heat" and "spreading out" the balance writes with left pan "energy: +25.7 (against)" and right pan "spreading out (entropy): for"; on "increase in entropy" an inset shows ordered amber and violet ions scattering through water; on "wins" the balance tips with "NH4NO3 dissolves anyway"; on the closing sentence the chip "big dH cost = won\'t dissolve" fades in and is crossed',
        ['balance tip', 'particle scatter', 'HandText write-on', 'Mark cross'],
        'Hold about 1 second on the tipped balance',
    ],
    'saturating': [
        'reuse',
        'Painted unsaturated and saturated beaker pair (aligned) with coded crystals falling in and a stopped question tag',
        'Defines unsaturated and saturated by what is seen, then asks whether dissolving has really stopped',
        'unsaturated / saturated / stopped',
        'Crystals fall in and vanish, the beaker crossfades to the saturated plate with solid on the bottom, and a pen tag asks whether dissolving stopped',
        E,
        'The unsaturated plate shows with the label "unsaturated: all the solid dissolves" and coded crystals falling in and vanishing; on "saturated" it crossfades to the saturated plate with the label "saturated: the most it can hold at this temperature"; on "stopped" the pen tag "stopped?" hangs on the crystals',
        ['plate crossfade', 'falling crystals', 'HandText write-on', 'chip pop'],
        'Hold about 1 second on the question',
    ],
    'rates-meet': [
        'adjust',
        'Lens on the crystal surface with leaving and joining ions, a two-rate meter, the equation strip morphing to a two-way arrow and the left-out tray',
        'Explains why dissolving seems to stop: a steady dissolving rate is met by a rising crystallising rate until they are equal',
        'leaving / bump into / speeds up / equal / two-way arrow / Ksp',
        'Ions leave at a steady count and dissolved ions join the surface, the crystallising bar climbs to meet the flat dissolving bar, the arrow becomes two-way and the solid drops into the left-out tray',
        E,
        'A lens opens on the saturated crystal; on "leaving" hydrated ions leave steadily; on "bump into" a dissolved ion hits and joins with the tag "crystallising"; the meter shows a flat "dissolving rate" and a low "crystallising rate"; on "speeds up" the dissolved count rises and the crystallising bar climbs; on "equal" the bars meet with a teal "=" and "equal rates, not stopped"; on "two-way arrow" the strip becomes "NaCl(s) <=> Na+(aq) + Cl-(aq)"; on "Ksp" the NaCl(s) tile drops into the tray and "Ksp = [Na+][Cl-]" writes small with "calculations: later video"',
        ['particle lens', 'two-rate meter', 'arrow morph', 'tray drop', 'HandText write-on'],
        'Hold about 2 seconds on the equal bars',
    ],
    'tracer': [
        'adjust',
        'Saturated beaker plate with a small crystal of green-glowing ions, steady mass and concentration readouts and a rising radioactivity meter',
        'Gives the evidence that ions keep swapping in a saturated solution while the amounts stay fixed',
        'radioactive / in the solution / rejoining',
        'A glowing crystal drops on the pile, the readouts stay fixed, glowing ions appear in the liquid and the radioactivity meter rises, then plain ions dock where glowing ones left',
        E,
        'The beaker shows "saturated potassium bromide, KBr"; on "radioactive" a small crystal with green-glowing ions drops onto the pile with the tag "radioactive ions: a detector can track them" and the readouts "mass of solid: same", "concentration: same" hold; on "in the solution" glowing hydrated ions appear one by one in a lens and the "radioactivity in solution" meter rises from zero; on "rejoining" plain ions dock where glowing ones left and the two-way arrows light',
        ['glow pulse', 'meter rise', 'particle lens', 'tag pop'],
        'Hold about 1 second on the steady readouts',
    ],
    'added-solid': [
        'adjust',
        'Saturated beaker with a growing pile, the left-out tray with a second solid tile, a small Q against K gauge unmoved and a KNO3 warming panel',
        'Blocks the trap that adding solid shifts the equilibrium, and contrasts it with temperature, which changes K itself',
        'more salt / left out / equals K / warming',
        'Crystals tumble onto the pile while the concentration readout stays fixed, a second solid tile drops into the tray, the gauge pointer stays on the K notch and the KNO3 pile shrinks as it warms',
        E,
        'On "more salt" coded crystals tumble onto the pile with "concentration: same"; on "left out" the tray returns with NaCl(s) in it and a second solid tile drops beside it; on "equals K" the gauge shows Q on the K notch with the tag "added solid: no shift"; on "warming" a second panel relabels the beaker "KNO3, dissolving endothermic", shows "heat-absorbing: heat it, K rises", shrinks the pile and tags "about 32 g per 100 g water at 20 C; about 64 g at 40 C"',
        ['falling crystals', 'tray drop', 'gauge pointer', 'panel slide', 'tag pop'],
        'Hold about 1 second on the warming panel',
    ],
    'memory-aids': [
        'new',
        'Energy ledger returned small with costs and pays tags, then two large handwritten aids with a condition tag',
        'Gives two reusable lines after the causes are explained',
        'Lattice costs, hydration pays / saturated means equal rates, not stopped',
        'The ledger returns small, the first aid writes large with its warms and cools line, the second aid writes beside the saturated beaker and the condition tag lands',
        E,
        'The ledger returns with the red bar tagged "costs" and the teal bar "pays"; the first aid "Lattice costs, hydration pays." writes large with "bigger payback: water warms. Bigger cost: water cools."; on "saturated means equal rates, not stopped" the second aid writes beside the saturated beaker; the tag "same temperature; solid still present" lands',
        ['HandText write-on', 'tag pop', 'plate slide'],
        'Hold about 2 seconds so the aids can be copied',
    ],
    'attempt-1': [
        'new',
        'Cleared board with a givens card for ammonium chloride and its temperatures, the demand line and the countdown ring',
        'Unseen transfer on the two energy steps with every condition visible and nothing answer-bearing',
        'falls / Pause here to answer',
        'The countdown ring runs through the answer-free thinking hold',
        E,
        'The board clears; the givens card shows "ammonium chloride, NH4Cl, dissolves in water" and "temperature: 22 C -> 17 C"; the demand "Explain the temperature change using the two energy steps." stays visible; the countdown ring starts after the narration with "Pause here to answer."',
        ['Countdown ring', 'Enter reveals'],
        'Quiet answer-free thinking hold with a 10 second countdown',
    ],
    'feedback-1': [
        'adjust',
        'The attempt card with an answer chip, a mini ledger with a longer red bar, a falling thermometer and one crossed wrong chip',
        'Gives the answer and the key reason briefly and corrects the likeliest slip about hydration',
        'endothermic / more energy / releases',
        'The answer chip pins, a mini ledger draws with the red bar longer and the thermometer falls, and the wrong chip is crossed',
        E,
        'On "endothermic" the chip "endothermic: dH(solution) > 0" pins top right; on "more energy" a mini ledger draws with red "separate NH4+ and Cl-: in" longer than teal "hydrate them: out", the net points up and the thermometer falls; on "releases" the chip "hydration takes in energy" fades in and is crossed with "hydration always releases energy"',
        ['chip pin', 'bar grow', 'Mark cross', 'thermometer column'],
        'Hold about 1 second after the last word',
    ],
    'attempt-2': [
        'new',
        'Saturated beaker with solid present, a wash bottle adding water, a givens card, two numbered demands and the countdown ring',
        'Unseen transfer on adding water to a saturated solution with every condition visible and nothing answer-bearing',
        'more water / still left / Pause here to answer',
        'Water pours in and the level rises, then the countdown ring runs while both demands stay visible',
        E,
        'The beaker shows "saturated NaCl, solid present"; the wash bottle adds water and the level rises; the givens card reads "water added", "same temperature", "some solid still left at the end"; the demands "1. Mass of solid?" and "2. Final concentration?" stay visible; the countdown ring starts after the narration with "Pause here to answer."',
        ['Countdown ring', 'liquid rise', 'Enter reveals'],
        'Quiet answer-free thinking hold with a 10 second countdown',
    ],
    'feedback-2': [
        'adjust',
        'The attempt beaker with a shrinking pile, the Q against K gauge dropping below the notch and climbing back, answer chips and a crossed dilute chip',
        'Answers both demands by Q against K and corrects the dilution slip',
        'goes down / below K / same / more dilute',
        'The pile shrinks, the gauge pointer drops below the K notch then climbs back, two answer chips pin and the wrong chip is crossed',
        E,
        'On "goes down" the pile shrinks and "1. less solid" pins; on "below K" the gauge pointer drops below the K notch and climbs back as more dissolves; on "same" the chip "2. same concentration (saturated again)" pins; on "more dilute" the chip "final solution more dilute" fades in and is crossed with "solid present: saturated at this temperature"',
        ['gauge pointer', 'pile shrink', 'chip pin', 'Mark cross'],
        'Hold about 1 second after the last word',
    ],
    'decision-rule': [
        'adjust',
        'Question card with three lines lighting on their words and a next chip',
        'Packs the lesson into three reusable lines and hands off to the next video',
        'Next',
        'Three lines write on and light in turn, then the next chip slides in',
        E,
        'The three lines "Dissolving: water pulls ions out and hydrates them.", "Temperature: compare separating (in) with hydrating (out)." and "Solid on the bottom: equilibrium; use K and Q." write on and light on their words; on "Next" the chip "Next: solubility and food detoxification knowledge" slides in',
        ['HandText write-on', 'line highlight', 'chip slide'],
        'Hold about 2 seconds on the three lines',
    ],
    'key-notes': [
        'new',
        'Key notes card with the five notes, the two memory aids and the condition tag',
        'Essentials to copy into books',
        'key notes',
        'Notes appear then stay still for copying',
        H,
        'The heading "Key notes: what to write in your book", the five notes, the two aids and the condition tag appear and lock',
        ['Enter reveals'],
        'Quiet copy hold of about 60 seconds with pause invitation',
    ],
}

C13_ROWS = {
    'hook': [
        'adjust',
        'Two painted reagent bottles with coded labels and the painted lead iodide tube pair (clear then yellow solid, aligned) with the process clip or an interim crossfade',
        'Poses the puzzle: two clear liquids give a bright yellow solid, so where did it come from and what is left in the liquid',
        "potassium iodide / lead nitrate / bright yellow solid / what's left",
        'Each bottle pulses as it is named, yellow specks bloom where the drops land and settle, and a ring marks the liquid above the solid',
        E,
        'Two bottles stand at the left labelled "potassium iodide, KI(aq)" and "lead nitrate, Pb(NO3)2(aq)" and each pulses on its name; the clear tube shows in the main zone; on "bright yellow solid" the clip plays to the precipitate tube; the heading "Two clear solutions. Where did the solid come from?" writes on; on "what\'s left" a pen ring circles the liquid above the solid with a "?" tag',
        ['label pulse', 'process clip crossfade', 'HandText write-on', 'scribbleEllipse'],
        'Hold about 1 second on the ringed liquid',
    ],
    'four-ions': [
        'new',
        'Particle lenses of hydrated amber K+ and violet I-, and amber Pb2+ and violet NO3-, sliding together into one lens over the tube',
        'Shows that each bottle holds separate hydrated ions, so mixing gives four kinds of ion and only new partners are possible',
        'potassium ions and iodide ions / lead ions and nitrate ions / four kinds of ions / new partners',
        'Two lenses open above the bottles, slide together into one lens with all four ions mingling, and pen arcs link the possible new pairs',
        E,
        'A lens opens above each bottle: on "potassium ions and iodide ions" amber K+ and violet I- with water shells appear; on "lead ions and nitrate ions" amber Pb2+ and violet NO3- appear; on "four kinds of ions" the lenses merge over the tube with the tag "4 kinds of ion"; on "new partners" two pen arcs link Pb2+ to I- and K+ to NO3- labelled "new pair?"',
        ['particle lens', 'lens merge', 'DrawPath', 'tag pop'],
        'Hold about 1 second on the four ions',
    ],
    'precipitate-spectators': [
        'new',
        'The merged lens where Pb2+ and I- shed their water shells and lock into a yellow lattice cluster, spectator tags on K+ and NO3- and a composition card',
        'Explains the cause of a precipitate and names spectator ions, giving the composition of the mixture',
        'lead iodide / precipitate / spectator ions / solid lead iodide',
        'Lead and iodide ions lock into a yellow cluster and sink, the other ions keep swimming and gain spectator tags, and a composition card writes',
        E,
        'In the merged lens Pb2+ and I- shed their shells, lock into a small yellow lattice (1 Pb2+ to 2 I-) and sink; on "precipitate" the term and its plain meaning write below and the painted tube pulses; on "spectator ions" K+ and NO3- keep swimming with grey "spectator" tags; on "solid lead iodide" the card writes "solid: PbI2 (yellow)" and "dissolved: K+, NO3-"; the chip "every ionic compound dissolves in water" fades in and is crossed',
        ['ion lock and sink', 'particle lens', 'HandText write-on', 'Mark cross'],
        'Hold about 2 seconds on the composition card',
    ],
    'rules-origin': [
        'new',
        'Coded 5 by 5 grid of cations and anions filling cell by cell with real precipitate colours, with the sodium row bracketed and a practical video chip',
        'Shows that the solubility rules summarise experiments, and points to the practical video where learners find them',
        'solubility rules / practical video',
        'The grid fills cell by cell with clear, coloured and cloudy dots, a bracket groups the all-clear sodium row, and a practical chip writes on',
        E,
        'The grid fills with cations Na+, Ca2+, Ba2+, Pb2+, Ag+ down the side and anions Cl-, I-, SO4 2-, CO3 2-, OH- across, each cell showing clear, a coloured dot or a light cloud; on "solubility rules" a pen bracket groups the Na+ row with "pattern: sodium salts all dissolve"; on "practical video" the chip "Practical video: find the rules by experiment" writes with a pen "later" tag',
        ['grid fill', 'bracket draw', 'HandText write-on', 'chip pop'],
        'Hold about 1 second on the grid',
    ],
    'nagsag': [
        'new',
        'Rules card with six lettered rows stacking down the left, a bracket over the always soluble rows and a mostly insoluble box',
        'Gives the learnable rules in priority order, with exceptions on the card',
        'NAGSAG / Nitrates, Ammonium, and Group 1 / Sulfates / Acetates / Group 17 / silver and lead / carbonates and hydroxides / Barium hydroxide',
        'Six letters stack down the left, each row writes on its cue, a teal bracket joins the first three and a mostly insoluble box writes below',
        E,
        'The letters "N A G S A G" stack down the left and each row writes on its cue: nitrates, ammonium and Group 1 with a teal bracket "almost always soluble"; sulfates "soluble, except Ba2+, Sr2+, Pb2+ (insoluble); Ca2+, Ag+ (slightly)"; acetates "soluble"; Group 17 halides "soluble, except Ag+, Pb2+" with a footnote "PbCl2: slightly soluble"; on "carbonates and hydroxides" a box writes "Mostly insoluble unless with Group 1 or NH4+"; on "Barium hydroxide" it adds "Ba(OH)2 soluble, Ca(OH)2 slightly; CaS, SrS, BaS soluble"',
        ['row write-on', 'bracket draw', 'HandText write-on', 'tag pop'],
        'Reading hold of about 3 seconds on the full card',
    ],
    'swap-method': [
        'new',
        'Swap cross with two compound tiles, crossing arrows, a tick box under each new pair and a crossed one-product chip',
        'Gives the method as a picture: swap partners, then check both products',
        'swap partners / check both',
        'The cations cross over in an X, two new pairs form, a tick box appears under each, and a wrong chip about one product is crossed',
        E,
        'The tiles "A+ B-" and "C+ D-" sit on the left; on "swap partners" the cations cross over with pen arrows to give "A+ D-" and "C+ B-"; on "check both" a tick box appears under each new pair and the card shrinks to the corner; the chip "checked one product only" fades in and is crossed with "check both"',
        ['DrawPath', 'tile swap', 'Mark cross', 'chip pop'],
        'Hold about 1 second on the two tick boxes',
    ],
    'agcl-molecular': [
        'adjust',
        'Swap cross filled with KCl and AgNO3, the rules card in the corner, the painted white silver chloride tube and the first equation line',
        'Works the first syllabus pair step by step and writes the molecular equation',
        'silver chloride / soluble / insoluble / white / silver chloride solid',
        'The cross fills and swaps, one product ticks green, the other is flagged and the halide row flashes, the white tube stands and the first equation line writes',
        E,
        'The cross fills with "K+ Cl-" and "Ag+ NO3-" and swaps to "Ag+ Cl-" and "K+ NO3-"; on "soluble" the KNO3 box ticks with "nitrate, Group 1: soluble"; on "insoluble" the AgCl box gets an amber flag "halide with Ag+: insoluble" and the halide row flashes; on "white" the painted silver chloride tube stands in the left column; on "silver chloride solid" line 1 writes "KCl(aq) + AgNO3(aq) -> AgCl(s) + KNO3(aq)" with the margin label "molecular equation"',
        ['tile swap', 'tick', 'plate slide', 'HandText write-on'],
        'Hold about 1 second on the molecular equation',
    ],
    'full-ionic': [
        'adjust',
        'Equation stack where each aqueous compound splits into ions that fly down to line two and the solid drops whole with a lock tag',
        'Shows which compounds split and why the precipitate is never split',
        'aqueous / solid / whole / full ionic equation',
        'Each aqueous compound splits and its ions fly down to the second line while the solid drops straight down unsplit',
        E,
        'On "aqueous" each (aq) compound in line 1 splits and its ions fly down from their own token to line 2: "K+(aq) + Cl-(aq) + Ag+(aq) + NO3-(aq) -> AgCl(s) + K+(aq) + NO3-(aq)"; on "solid" the AgCl(s) token drops straight down with a teal lock icon and "(s): never split"; on "full ionic equation" the margin label writes',
        ['token flight', 'lock tag', 'HandText write-on'],
        'Hold about 1 second on the full ionic line',
    ],
    'net-ionic': [
        'adjust',
        'The three-line stack with pen links on matching ions, grey strikes, the net line, a charge tally and two ghost source chips',
        'Cancels the spectators to reach the net ionic equation, checks the charge and shows the net equation does not depend on the source',
        'unchanged on both sides / cross them out / net ionic equation / plus one and minus one / wherever',
        'Pen links join matching ions, the pairs are struck grey, the net line writes, a charge tally writes and two source chips point at the same line',
        E,
        'On "unchanged on both sides" pen links join K+ to K+ and NO3- to NO3-; on "cross them out" each pair is struck grey on both sides; on "net ionic equation" line 3 writes "Ag+(aq) + Cl-(aq) -> AgCl(s)" with the margin label; on "plus one and minus one" the tally "(+1) + (-1) = 0 -> 0" writes; on "wherever" ghost chips "from NaCl" and "from CaCl2" point at line 3 with "same net equation"',
        ['DrawPath', 'strike', 'HandText write-on', 'chip pop'],
        'Hold about 2 seconds on the net line',
    ],
    'pbi2-formula': [
        'adjust',
        'Cleared stack with the swap cross for KI and Pb(NO3)2, charge tiles balancing one lead against two iodides, the yellow tube and the three equation lines',
        'Shows why the formula is PbI2 by charge balance and carries the 2 into the net equation',
        'lead iodide / P b I / two plus / one minus / two iodides / two potassium iodides / lead ion plus two iodide ions gives lead iodide solid',
        'The cross swaps, a charge tile sits on each ion, a second iodide slides in to balance, then three equation lines write with the spectators struck',
        E,
        'The stack clears; the cross swaps "K+ I-" and "Pb2+ NO3-" to "Pb2+ I-" and "K+ NO3-" with KNO3 ticked and PbI2 flagged and the yellow tube standing at the left; on "P b I" the chip "PbI" fades in and is crossed; on "two plus" a tile "+2" sits over Pb2+; on "one minus" "-1" sits over I-; on "two iodides" a second I- slides in to give PbI2; on "two potassium iodides" line 1 and the token-flight line 2 write and the 2K+ and 2NO3- strike grey; on the net sentence line 3 writes "Pb2+(aq) + 2I-(aq) -> PbI2(s)" with the tally "(+2) + 2(-1) = 0 -> 0"',
        ['charge tiles', 'tile slide', 'token flight', 'strike', 'Mark cross'],
        'Hold about 2 seconds on the net line and tally',
    ],
    'baso4-meal': [
        'adjust',
        'Swap cross for Na2SO4 and Ba(NO3)2, a white solid tube with coded label, the painted barium meal glass and two state chips',
        'Works the third syllabus pair and shows why barium sulfate is safe to swallow while dissolved barium ions are not',
        'barium sulfate / white / barium meal / poisonous / through the gut',
        'The cross swaps, the sulfate row flashes at barium, a white tube stands, the barium meal glass appears and two chips are joined by a same element bracket',
        E,
        'The cross swaps "Na+ SO4 2-" and "Ba2+ NO3-" to "Ba2+ SO4 2-" and "Na+ NO3-" with NaNO3 ticked and BaSO4 flagged; on "barium sulfate" the sulfate row flashes "except Ba2+"; on "white" the white tube stands with the coded label "BaSO4(s), white"; line 1 and line 3 write with the tally "(+2) + (-2) = 0"; on "barium meal" the painted glass appears with "BaSO4 suspension"; on "poisonous" the chip "Ba2+(aq): toxic" writes; on "through the gut" the chip "BaSO4(s): barely dissolves, so not absorbed" writes and a pen bracket joins them with "same element, different state"',
        ['tile swap', 'row flash', 'plate slide', 'bracket draw', 'chip pop'],
        'Hold about 2 seconds on the two state chips',
    ],
    'no-precipitate': [
        'adjust',
        'Swap cross for KNO3 and NaCl with two green ticks, the clear tube plate, a crossed no reaction chip and an empty net line',
        'Teaches the no precipitate case: all ions are spectators and there is no net ionic equation',
        'Both soluble / no precipitate / spectator / no net ionic equation / no reaction',
        'The cross swaps and both boxes tick green, the clear tube is labelled, a wrong chip is crossed, all four ions gain spectator tags and the net line shows an empty bracket',
        E,
        'The cross swaps "K+ NO3-" and "Na+ Cl-" to "Na+ NO3-" and "K+ Cl-"; on "Both soluble" both boxes tick green; the clear tube stands with the label "no precipitate"; on "no reaction" the chip "no reaction" fades in and is crossed with "write: no precipitate"; on "spectator" the four ions in a lens each get grey tags; on "no net ionic equation" line 3 shows an empty bracket with "none: all spectators"',
        ['tile swap', 'tick', 'Mark cross', 'tag pop'],
        'Hold about 1 second on the empty bracket',
    ],
    'filtrate': [
        'new',
        'Abstract coded filter funnel over a flask, white solid on the paper, a filtrate lens with spectator tags, an excess silver label and a composition card',
        'Answers what is left after filtering: the spectators plus any ion added in excess',
        'filter off / in excess / silver ions',
        'White solid collects on the paper and clear liquid drips through, the lens shows the spectators, an excess label writes and extra silver ions appear in the lens',
        E,
        'On "filter off" the white AgCl collects on the paper with "residue: AgCl(s)" and clear liquid drips through with "filtrate"; a lens on the filtrate shows K+ and NO3- with grey spectator tags; on "in excess" the label "AgNO3 added in excess" writes; on "silver ions" a few amber Ag+ appear in the lens with "leftover Ag+ (excess)"; the card writes "filtrate: K+, NO3-, plus the excess Ag+"',
        ['funnel drip', 'particle lens', 'HandText write-on', 'tag pop'],
        'Hold about 2 seconds on the composition card',
    ],
    'memory-aid': [
        'adjust',
        'Swap cross returned small, the first aid in large handwriting, the three-line stack returned small and the second aid with a condition tag',
        'Gives two reusable lines after the method is explained',
        'Swap partners, check both / split only the aqueous',
        'The cross returns small with its X of arrows, the first aid writes large, the stack returns with split arrows and strikes lighting in turn, and the second aid writes',
        E,
        'The swap cross returns small and "Swap partners, check both." writes large; on "split only the aqueous" the KCl and AgNO3 stack returns small with the split arrows and the struck spectators lighting in turn; the second aid "Split only (aq). Cross out what\'s the same on both sides." writes; the tag "rules are a first prediction; the solid is never split" lands',
        ['HandText write-on', 'arrow light', 'tag pop'],
        'Hold about 2 seconds so the aids can be copied',
    ],
    'attempt-1': [
        'new',
        'Cleared board with two reagent bottles, a givens line, the rules card small in the corner, two numbered demands and the countdown ring',
        'Unseen transfer on a new pair with the supplied rules visible as in an exam, nothing answer-bearing',
        'copper two sulfate / sodium hydroxide / Pause here to answer',
        'The countdown ring runs through the answer-free thinking hold',
        E,
        'The board clears; two bottles are labelled "copper(II) sulfate, CuSO4(aq)" and "sodium hydroxide, NaOH(aq)"; the givens "Cu2+ is 2+" and the small rules card stay visible; the demands "1. Name the precipitate." and "2. Write the net ionic equation." stay visible; the countdown ring starts after the narration with "Pause here to answer."',
        ['Countdown ring', 'Enter reveals'],
        'Quiet answer-free thinking hold with a 10 second countdown',
    ],
    'feedback-1': [
        'adjust',
        'Quick swap cross, the pale blue copper hydroxide tube, two answer chips with a charge tally and one crossed wrong chip',
        'Gives the answer and the key reason briefly and corrects the charge balance slip',
        'copper(II) hydroxide / pale blue / copper ion plus two hydroxide ions gives copper hydroxide solid / C u O H',
        'The cross runs quickly with one tick and one flag, the tube stands beside the demands, two answer chips pin with a tally and the wrong chip is crossed',
        E,
        'The cross runs quickly, Na2SO4 ticks and Cu(OH)2 flags amber with "Cu(OH)2: insoluble" on "Hydroxides are mostly insoluble"; on "pale blue" the tube stands beside the demands and the chip "1. copper(II) hydroxide, Cu(OH)2(s), pale blue" pins; on the net sentence the chip "2. Cu2+(aq) + 2OH-(aq) -> Cu(OH)2(s)" pins with "(+2) + 2(-1) = 0"; on "C u O H" the chip "Cu2+ + OH- -> CuOH(s)" fades in and is crossed with "2+ needs two OH-"',
        ['tile swap', 'chip pin', 'Mark cross', 'plate slide'],
        'Hold about 1 second after the last word',
    ],
    'attempt-2': [
        'new',
        'Coded filter funnel with white solid on the paper, a givens card, one demand and the countdown ring',
        'Unseen transfer on what remains dissolved after filtering an excess mixture, with nothing answer-bearing',
        'more than enough / Pause here to answer',
        'The countdown ring runs while the empty filtrate lens and the demand stay visible',
        E,
        'The funnel shows white solid on the paper; the givens card reads "silver nitrate, AgNO3(aq)", "sodium chloride, NaCl(aq), more than enough (in excess)" and "white solid filtered off"; the demand "Which ions are in the filtrate?" stays visible with an empty filtrate lens; the countdown ring starts after the narration with "Pause here to answer."',
        ['Countdown ring', 'Enter reveals'],
        'Quiet answer-free thinking hold with a 10 second countdown',
    ],
    'feedback-2': [
        'adjust',
        'The filtrate lens filling with grey tagged Na+ and NO3- then violet excess Cl-, an answer chip and one crossed wrong chip',
        'Gives the filtrate composition and corrects the forgotten excess ion',
        'sodium ions and nitrate ions / chloride ions / forgot the excess',
        'The spectators appear in the lens, violet chloride ions join with an excess tag, the answer chip pins and the wrong chip is crossed',
        E,
        'On "sodium ions and nitrate ions" grey-tagged Na+ and NO3- fill the lens; on "chloride ions" violet Cl- appear with the tag "excess" and the chip "Na+, NO3-, and excess Cl-" pins with the small tag "Ag+: essentially all in AgCl(s); the trace left is a Ksp question (later)"; on "forgot the excess" the chip "Na+ and NO3- only" fades in and is crossed with "add the excess ion"',
        ['particle lens', 'chip pin', 'Mark cross', 'tag pop'],
        'Hold about 1 second after the last word',
    ],
    'decision-rule': [
        'adjust',
        'Question card with four lines lighting on their words and two next chips with small plates',
        'Packs the method into reusable lines and hands off to the practical video and Ksp',
        'practical video / Ksp / Next',
        'Four lines write on and light in turn, then two next chips slide in with small plates',
        E,
        'The lines "List the ions. Swap partners. Check both.", "Insoluble one = precipitate.", "Split only (aq); cross out spectators; check charges." and "Still dissolved: spectators + any excess." write on and light on their words; on "practical video" the chip "Next: investigating solubility rules (practical)" appears with two small tube plates; on "Ksp" the chip "Then: Ksp, how insoluble?" appears with the small saturated beaker plate',
        ['HandText write-on', 'line highlight', 'chip slide'],
        'Hold about 2 seconds on the chips',
    ],
    'key-notes': [
        'new',
        'Key notes card with the five notes, the two memory aids and the condition tag',
        'Essentials to copy into books',
        'key notes',
        'Notes appear then stay still for copying',
        H,
        'The heading "Key notes: what to write in your book", the five notes, the two aids and the condition tag appear and lock',
        ['Enter reveals'],
        'Quiet copy hold of about 60 seconds with pause invitation',
    ],
}


C14_ROWS = {
    'hook': [
        "adjust",
        "The painted barium meal glass with the C13 chip, a particle lens, a two-row Ksp strip and a pen question mark",
        "Poses the puzzle that a barely soluble salt still dissolves a little, and that a bigger Ksp may not mean a more soluble salt",
        "does dissolve / calculate / bigger",
        "A lens opens over the glass to show a few dissolved ions, the Ksp strip slides in and a pen question mark lands between its two rows",
        "explain",
        "`m5x-barium-meal-glass-v1.png` centre, with the C13 chip \"BaSO4(s): barely dissolves\" pinned beside it (callback). On \"does dissolve\" a particle lens opens over the glass: a few amber Ba2+ and violet SO4 2- ions with water shells drift among many solid specks (tag \"a few ions dissolved\"). On \"calculate\" a coded Ksp strip slides in at the bottom: \"BaSO4 1.08 x 10^-10\", \"CaF2 3.45 x 10^-11\" (two rows only, tagged \"Ksp at 25 C\"; CaF2 is not on the HSC data sheet, so the strip is not labelled \"data sheet\"). On \"bigger\" a pen \"?\" lands between the two rows. Heading \"Barely dissolves. How much is barely?\"",
        ["plate callout", "lens open", "strip slide", "scribbleEllipse", "HandText write-on"],
        "Hold about 1 second",
    ],
    'saturated': [
        "adjust",
        "The painted unsaturated and saturated beakers, a ratio-true ion swarm lens and the equilibrium equation strip",
        "Shows that excess solid in water makes a saturated solution, which is an equilibrium with its own equation",
        "saturated solution / leaving / rejoining / equilibrium",
        "The empty beaker crossfades to the saturated one, ions leave and rejoin the crystal at equal rates in the lens, and the equation writes on",
        "explain",
        "`m5x-unsaturated-beaker-v1.png` crossfades to `m5x-saturated-beaker-v1.png` (aligned pair) as the solid settles. On \"saturated solution\" the term and its plain meaning write under the beaker. On \"leaving\" a lens on the crystal floor (ported ion swarm, 1 : 1 ratio) shows a Ba2+ and an SO4 2- leaving with water shells; on \"rejoining\" another pair docks back; two equal arrows \"dissolving rate = crystallising rate\" pulse (callback chip \"dissolving video\"). On \"equilibrium\" the equation strip writes: \"BaSO4(s) <=> Ba2+(aq) + SO4 2-(aq)\".",
        ["plate crossfade", "lens open", "arrow pulse", "HandText write-on"],
        "Hold about 1 second",
    ],
    'ksp-expression': [
        "adjust",
        "The C5 and C10 expression builder with its left-out tray, applied to barium sulfate",
        "Builds the Ksp expression with no denominator because the solid is left out, and names it the solubility product",
        "solid / no bottom / solubility product / K s p / 1.08 times ten to the minus ten",
        "The ion tiles fly up to the numerator, the solid tile drops into the tray, the fraction bar fades and the Ksp line and the data table value write on",
        "explain",
        "the C5 and C10 expression builder: the strip's tiles lift; Ba2+ and SO4 2- fly to the numerator; on \"solid\" the BaSO4(s) tile drops into the \"left out\" tray (tag \"solid: left out\"). On \"no bottom\" the fraction bar fades away and a chip \"[Ba2+][SO4 2-] / [BaSO4]\" fades in and is crossed (caption \"no solid, no bottom\"). Line writes: \"Ksp = [Ba2+][SO4 2-]\". On \"solubility product\" the term writes with \"K for a saturated solution\" under it. A small tag \"changes only with temperature; no unit written\". On \"1.08 times ten to the minus ten\" the givens card writes \"Ksp(BaSO4) = 1.08 x 10^-10 (25 C)\".",
        ["expression builder", "tile fly", "strike", "HandText write-on"],
        "Hold about 1 second",
    ],
    'powers': [
        "adjust",
        "The builder cleared for calcium fluoride with a pen line from the subscript to the coefficient",
        "Shows that a subscript becomes a coefficient and the coefficient becomes a power in the Ksp expression",
        "two fluoride ions / power / squared",
        "A pen line runs from the subscript 2 to the coefficient 2, then the coefficient chip flies up and lands as the exponent",
        "explain",
        "the builder clears. Equation strip writes: \"CaF2(s) <=> Ca2+(aq) + 2F-(aq)\"; on \"two fluoride ions\" a pen line runs from the subscript 2 in CaF2 to the coefficient 2 on F-. On \"power\" the coefficient chip flies up and becomes the exponent (builder motion): \"Ksp = [Ca2+][F-]^2\", CaF2(s) in the tray. (Revision 2: the unspoken Ag2CrO4 line is removed; it competed with the CaF2 line and the 2 : 1 order is taught in scene 12b and attempt 2.)",
        ["DrawPath", "chip fly", "expression builder"],
        "Hold about 1 second",
    ],
    'molar-solubility': [
        "adjust",
        "The saturated beaker with a formula-unit lens that splits one barium sulfate into one barium ion and one sulfate ion",
        "Defines molar solubility, s, and links it to each ion concentration through what one formula unit gives",
        "molar solubility / one barium ion / both ion concentrations are s",
        "The term writes in teal, one formula unit lifts off the crystal and splits into two ions, and both ion labels gain a teal s tag",
        "explain",
        "back to the saturated beaker with the BaSO4 strip. On \"molar solubility\" the term writes in teal: \"s = mol of solid dissolved per litre (mol/L)\". On \"one\" a single BaSO4 unit lifts off the crystal in the lens and splits into one Ba2+ and one SO4 2-, each tagged \"1\"; the swarm repeats in a quick wave (always pairs). On \"s\" both ion labels in the strip gain teal \"s\" tags.",
        ["HandText write-on", "lens split", "tag pop"],
        "Hold about 1 second",
    ],
    'baso4-ice': [
        "adjust",
        "The C6 ICE table with ion columns and a greyed left-out solid column, filled for barium sulfate in pure water",
        "Starts the first worked example by filling the I, C and E rows from zero with the change equal to s",
        "I for initial / C for change / E for equilibrium / zero / plus s",
        "The letters I, C and E expand on their cues, the initial row ticks zero, coefficient chips fly in and the change and equilibrium rows fill with s",
        "explain",
        "task line \"Find s for BaSO4 in water\". ICE table (C6 component): columns Ba2+ and SO4 2- with \"mol/L\", and a narrow greyed BaSO4(s) column labelled \"left out\". The letters I, C, E expand on their cues (C6a motion). On \"zero\" the Initial row ticks \"0\", \"0\" with tag \"pure water\". On \"plus s\" the Change row writes \"+s\", \"+s\" in teal with the coefficient chips \"1\", \"1\" flying from the strip. Equilibrium row: \"s\", \"s\".",
        ["ICE table", "letter expand", "chip fly", "HandText write-on"],
        "Hold about 1 second",
    ],
    'baso4-solve': [
        "adjust",
        "The algebra line with root signs, a silent check line and a milligram side card with the barium meal plate returning small",
        "Solves for s by a square root, checks it and turns it into milligrams per litre to show what barely means",
        "Take the square root of both sides / 1.04 times ten to the minus five / 2.4 milligrams in a whole litre",
        "Algebra stages write one per line, root signs draw over both sides, the answer ticks and the side card and plate show about 2.4 milligrams per litre",
        "explain",
        "the algebra line, one stage per line: \"Ksp = [Ba2+][SO4 2-] = s x s = s^2\"; \"s^2 = 1.08 x 10^-10\"; on \"Take the square root of both sides\" root signs draw over both sides with the aside \"square root of both sides\"; \"s = 1.04 x 10^-5 mol/L\" ticks. Silent check line \"(1.04 x 10^-5)^2 = 1.08 x 10^-10\" with a teal tick. On \"molar mass\" a side card: \"1.04 x 10^-5 mol/L x 233 g/mol = 2.4 x 10^-3 g/L\". On \"2.4 milligrams\" the barium meal plate returns small with a tag \"about 2.4 mg per litre dissolves\".",
        ["HandText write-on", "DrawPath", "tick pop", "plate slide"],
        "Hold about 2 seconds",
    ],
    'caf2-setup': [
        "adjust",
        "A fresh three-zone board for calcium fluoride with a ratio-true lens, the ICE table and the algebra line with a crossed 2s squared chip",
        "Shows that fluoride rises by 2s so the bracket is squared, giving four s cubed, and blocks the (2s) squared slip",
        "3.45 times ten to the minus eleven / two fluoride ions / two s / two s, all squared / four s squared / four s cubed",
        "One calcium fluoride unit splits into one calcium and two fluoride ions in the lens, the 2 chip flies into the change cell and the bracket is ringed as 4s squared writes with a crossed chip",
        "explain",
        "board clears to the three zones. Task \"Find s for CaF2 in water\". Strip \"CaF2(s) <=> Ca2+(aq) + 2F-(aq)\". Givens \"Ksp(CaF2) = 3.45 x 10^-11 (25 C)\". Lens on the saturated beaker (ported ratio-true swarm): on \"two fluoride ions\" one CaF2 unit splits into one amber Ca2+ and two violet F- (pen rings on the two). ICE: Initial 0, 0; on \"two s\" the coefficient chip \"2\" flies from the strip into the F- Change cell, \"+2s\"; Ca2+ \"+s\"; Equilibrium \"s\", \"2s\". Algebra: \"Ksp = [Ca2+][F-]^2 = s x (2s)^2\"; on \"two s, all squared\" the bracket rings; on \"four s squared\" an aside \"(2s)^2 = 2s x 2s = 4s^2\" with a chip \"2s^2\" fading in and crossed; then \"Ksp = 4s^3\" on \"four s cubed\".",
        ["lens split", "chip fly", "scribbleEllipse", "strike", "HandText write-on"],
        "Hold about 1 second",
    ],
    'caf2-solve': [
        "adjust",
        "The algebra line continuing with divide-by-four and cube-root asides and the ICE equilibrium cells filling with numbers",
        "Finishes the second example by dividing, taking a cube root and checking, with the fluoride concentration at twice s",
        "Divide both sides by four / take the cube root / 2.05 times ten to the minus four",
        "Each algebra stage writes in turn with a divide aside and a cube-root sign, the answer ticks and the equilibrium cells fill with numbers",
        "explain",
        "the check is silent; the screen line carries it): algebra line continues, one stage per line: \"4s^3 = 3.45 x 10^-11\"; on \"Divide both sides by four\" aside \"divide both sides by 4\": \"s^3 = 8.63 x 10^-12\"; on \"take the cube root\" a cube-root sign draws over both sides (small calculator hint \"cube root key, or ^(1/3)\"): \"s = 2.05 x 10^-4 mol/L\" ticks. Under it \"[F-] = 2s = 4.10 x 10^-4 mol/L\", \"[Ca2+] = s = 2.05 x 10^-4 mol/L\" (the ICE Equilibrium cells fill with these numbers). Check line \"4 x (2.05 x 10^-4)^3 = 3.45 x 10^-11\" with a tick.",
        ["HandText write-on", "DrawPath", "tick pop"],
        "Hold about 2 seconds",
    ],
    'trap-2s': [
        "adjust",
        "A ghost ICE table with s in red, a struck ghost line, a two-bar size comparison and the real bracket line returning",
        "Names and sizes the s-for-2s slip so the learner puts the 2 inside the bracket before squaring",
        "writing s for fluoride / 1.6 times too big / inside the bracket",
        "The ghost table and its struck line appear, two bars show the answer about 1.6 times too big, then the real bracket line returns with its 2 pulsing",
        "explain",
        "a ghost ICE table beside the real one: F- Equilibrium cell \"s\" in red; ghost line \"Ksp = s x s^2 = s^3, s = 3.26 x 10^-4\" struck in red (ported strike); on \"1.6 times too big\" two bars compare 3.26 against 2.05 with the tag \"1.59 x too big\". On \"inside the bracket\" the real line \"s x (2s)^2\" returns with the \"2\" pulsing inside the bracket and a pen arrow from the subscript in CaF2 to it.",
        ["ghost table", "strike", "bar compare", "DrawPath"],
        "Hold about 1 second",
    ],
    'compare-ksp': [
        "adjust",
        "The two-row data strip with s values, the C8 log number line with two s markers and a rule card",
        "Shows that a bigger Ksp can belong to the less soluble salt when the formula types differ, so only like types are compared directly",
        "bigger / twenty times bigger / different powers / only for the same formula type",
        "A pen ring and up arrow mark the bigger Ksp, two s markers land on the log line with a twenty times bracket, and the rule card writes",
        "explain",
        "the data-table strip from the hook returns large: two rows, each with its Ksp and now its s: \"BaSO4: Ksp 1.08 x 10^-10, s = 1.04 x 10^-5\" and \"CaF2: Ksp 3.45 x 10^-11, s = 2.05 x 10^-4\". On \"bigger\" a pen ring on BaSO4's Ksp with an up arrow; on \"twenty times bigger\" a C8-style log number line draws two s markers (1.04 x 10^-5 and 2.05 x 10^-4) with a bracket \"about 20 x\". A chip \"smaller Ksp, so less soluble\" fades in and is crossed. On \"different powers\" \"s^2\" and \"4s^3\" pulse beside the two rows. On \"same formula type\" the rule card writes: \"Compare Ksp directly only for the same ion ratio (1 : 1 with 1 : 1). Otherwise, calculate s.\" with the example \"BaSO4 (1.08 x 10^-10) vs AgCl (1.77 x 10^-10): both 1 : 1, so AgCl is more soluble\".",
        ["log number line", "bracket draw", "scribbleEllipse", "strike", "HandText write-on"],
        "Hold about 2 seconds",
    ],
    'reverse-erow': [
        "adjust",
        "A fresh board with the saturated beaker plate, magnesium hydroxide strip, givens card and ICE table with the E-row-first pen arrow",
        "Reverses the task so a measured solubility goes in the equilibrium row first and the change is found as equilibrium minus initial",
        "1.12 times ten to the minus four / equilibrium row first / equilibrium minus initial",
        "The pen arrow carries the measured value from the givens card into the equilibrium cell and the E minus I bracket draws up to the change cell",
        "explain",
        "board clears. Saturated beaker plate with a coded label \"saturated Mg(OH)2(aq)\". Task \"Find Ksp for Mg(OH)2\". Strip \"Mg(OH)2(s) <=> Mg2+(aq) + 2OH-(aq)\". Givens \"dissolved Mg(OH)2: 1.12 x 10^-4 mol/L (measured, 25 C)\". ICE (Mg2+, OH-, greyed solid column): Initial 0, 0. On \"equilibrium row first\" the C6a pen arrow runs from the givens card into the Mg2+ Equilibrium cell, \"1.12 x 10^-4\"; on \"equilibrium minus initial\" the \"E - I\" bracket draws up to the Mg2+ Change cell, \"+1.12 x 10^-4\". The OH- column stays empty.",
        ["DrawPath", "bracket draw", "ICE table"],
        "Hold about 1 second",
    ],
    'reverse-ksp': [
        "adjust",
        "The same table with the doubling chip, the Ksp line and a struck forgot-to-double ghost line",
        "Doubles the hydroxide by the coefficient before squaring to reach Ksp, and shows the size of the slip",
        "two hydroxide ions / 5.62 times ten to the minus twelve / four times too small",
        "The 2 chip flies into the hydroxide cell, the Ksp line writes with no unit, and a ghost cubed line is struck with a four times too small tag",
        "explain",
        "the table, strip and givens stay. On \"two hydroxide ions\" the coefficient chip \"2\" flies into the OH- Change cell, \"+2.24 x 10^-4\", and the OH- Equilibrium cell fills \"2.24 x 10^-4\". Algebra: \"Ksp = [Mg2+][OH-]^2 = (1.12 x 10^-4)(2.24 x 10^-4)^2 = 5.62 x 10^-12\" with \"no unit written\" and a small unspoken grey tag \"data sheet: 5.61 x 10^-12 (the measured value is rounded)\". On \"four times too small\" a ghost line \"(1.12 x 10^-4)^3 = 1.40 x 10^-12\" is struck with the tag \"forgot to double: 4 x too small\".",
        ["chip fly", "HandText write-on", "strike"],
        "Hold about 2 seconds",
    ],
    'memory-aid': [
        "adjust",
        "The handwritten aid with two thumbnails for barium sulfate and calcium fluoride and a condition tag",
        "Gives a reusable habit after the cause is explained, with its pure water and saturated conditions",
        "Each ion is its count times s / raise it to that count / four s cubed",
        "The aid writes large, two thumbnails write beneath it and the condition tag lands",
        "explain",
        "the aid writes large and handwritten: \"Each ion = its count x s. Then raise it to that count.\" Two thumbnails beneath: \"BaSO4: s x s = s^2\" and \"CaF2: s x (2s)^2 = 4s^3\", with \"Ag2SO4 (2 : 1), the other way round: also 4s^3\" small under the second. Condition tag: \"pure water, saturated, same temperature\".",
        ["HandText write-on", "tag pop"],
        "Hold about 2 seconds",
    ],
    'attempt-1': [
        "new",
        "A cleared board with the task, a grouped givens card for lead iodide and an empty ICE outline",
        "Unseen transfer on a 1 : 2 salt with every condition visible and no answer cues",
        "9.8 times ten to the minus nine / Pause here to answer",
        "The countdown ring runs through the answer-free thinking hold",
        "explain",
        "board clears. Task \"Calculate the molar solubility of PbI2 in water.\" Givens card: \"PbI2\", \"Ksp = 9.8 x 10^-9 (25 C)\", \"Pb2+ is 2+, I- is 1-\". An empty ICE outline (labels only) as a scaffold. Countdown ring for 10 seconds with \"Pause here to answer.\" Nothing answer-bearing: no equation strip, no s terms, no plate.",
        ["Countdown ring", "Enter reveals"],
        "Quiet answer-free thinking hold with a 10 second countdown",
    ],
    'feedback-1': [
        "adjust",
        "The lead iodide strip with the ICE table filling cell by cell and a crossed 2.14 chip",
        "Gives the answer and the key reason briefly and corrects the s-for-2s slip",
        "two iodide ions / four s cubed / 1.35 times ten to the minus three / s instead of two s",
        "The ICE table fills quickly, the algebra lines write, the answer chip pins and the wrong chip is crossed",
        "explain",
        "strip \"PbI2(s) <=> Pb2+(aq) + 2I-(aq)\"; ICE fills quickly: 0, 0; +s, +2s; s, 2s. Lines: \"Ksp = s(2s)^2 = 4s^3 = 9.8 x 10^-9\", \"s^3 = 2.45 x 10^-9\", answer chip \"s = 1.35 x 10^-3 mol/L\" pins. On \"s instead of two s\" a chip \"s = 2.14 x 10^-3\" fades in and is crossed (caption \"iodide is 2s\").",
        ["ICE table", "HandText write-on", "chip pin", "Mark cross"],
        "Hold about 1 second",
    ],
    'attempt-2': [
        "new",
        "A cleared board with the task, a grouped givens card for silver carbonate in grams per litre and an empty ICE outline",
        "Unseen transfer on Ksp from a mass concentration, needing a conversion to moles first",
        "0.0354 grams per litre / 275.8 grams per mole / Pause here to answer",
        "The countdown ring runs through the answer-free thinking hold",
        "explain",
        "board clears. Task \"Calculate Ksp for Ag2CO3.\" Givens card grouped with units: \"saturated Ag2CO3(aq): 0.0354 g/L (25 C)\", \"M(Ag2CO3) = 275.8 g/mol\". Empty ICE outline. Countdown ring for 10 seconds with \"Pause here to answer.\" Nothing answer-bearing.",
        ["Countdown ring", "Enter reveals"],
        "Quiet answer-free thinking hold with a 10 second countdown",
    ],
    'feedback-2': [
        "adjust",
        "The givens card gaining a conversion line, the E-row-first arrow, the doubled silver cell and a crossed s equals 0.0354 chip",
        "Gives the answer and key reason briefly and corrects the grams-used-as-s slip",
        "convert to moles / two s / 8.46 times ten to the minus twelve / 0.0354",
        "The conversion line writes on the card, the arrow carries the value into the carbonate cell, the silver cell doubles, the answer pins and the wrong chip is crossed",
        "explain",
        "\"0.0354 g/L / 275.8 g/mol = 1.28 x 10^-4 mol/L\" writes on the givens card; the E-row-first arrow carries it into the CO3 2- Equilibrium cell; the Ag+ cell fills \"2.57 x 10^-4\" (from 2 x 1.2835 x 10^-4) with the coefficient chip \"2\". Line \"Ksp = [Ag+]^2[CO3 2-] = (2.57 x 10^-4)^2 (1.28 x 10^-4)\", answer chip \"Ksp = 8.46 x 10^-12\" pins with a small tag \"unrounded s\". On \"0.0354\" a chip \"s = 0.0354\" fades in and is crossed (caption \"g/L: divide by M first\").",
        ["DrawPath", "chip fly", "chip pin", "Mark cross"],
        "Hold about 1 second",
    ],
    'decision-rule': [
        "adjust",
        "A five-line decision card lighting on its words, then a next chip with the lead iodide and clear tube plates and a question mark",
        "Packs the method into reusable lines and hands off to mixing solutions",
        "count times s / Next / form",
        "Five lines write and light in turn, then the next chip slides in with two small plates and a question mark between them",
        "explain",
        "the decision card writes, each line lighting on its words: \"1 Dissolving equation.\" \"2 Each ion = count x s; raise to the count.\" \"3 Ksp given: solve for s (1 : 1 or 1 : 2 salts: square or cube root).\" \"4 s measured: E row first (g/L to mol/L), then Ksp.\" \"5 Compare Ksp directly only for the same formula type.\" On \"Next\" a chip \"Next: will mixing form a precipitate? (Qsp)\" with `m5x-ppt-pbi2-yellow-v1.png` and `m5x-no-ppt-clear-v1.png` small side by side and a \"?\" between them.",
        ["HandText write-on", "line highlight", "chip slide"],
        "Hold about 2 seconds",
    ],
    'key-notes': [
        "new",
        "Key notes card with the five notes, the memory aid in large writing and its condition tag",
        "Essentials to copy into books",
        "key notes",
        "Notes appear then stay still for copying",
        "hold",
        "The heading \"Key notes: what to write in your book\", the five notes, the memory aid and its condition tag appear and lock",
        ["Enter reveals"],
        "Quiet copy hold of about 60 seconds with pause invitation",
    ],
}

C15_ROWS = {
    'hook': [
        "adjust",
        "The painted kidney stone with a coin, a C13 rules corner, a coded urine lens and a counter with a question mark",
        "Poses why insoluble ions can coexist without a solid and asks how many ions are enough",
        "calcium oxalate / calcium ions / oxalate ions / no stone / enough",
        "Labels write beside the stone, a urine lens shows ions drifting apart without locking, a tick marks usually no solid and a counter with a question mark appears",
        "explain",
        "`m5x-kidney-stone-v1.png` centre (the coin gives scale; tag \"kidney stone (scale: coin)\"). On \"calcium oxalate\" a label \"mainly CaC2O4\" writes beside it, and a small C13 rules-card corner flashes \"mostly insoluble\". On \"calcium ions\" and \"oxalate ions\" a coded lens labelled \"urine\" opens with a few amber Ca2+ and violet C2O4 2- ions drifting apart, never locking. On \"no stone\" a pen tick beside the lens, tag \"usually no solid\". On \"enough\" a coded dial-free counter \"how many ions?\" appears with a \"?\". Heading \"Insoluble, but no solid. How many ions is enough?\"",
        ["plate callout", "lens open", "HandText write-on", "tick pop"],
        "Hold about 1 second",
    ],
    'qsp-idea': [
        "adjust",
        "Two side-by-side cards for Ksp and Qsp with beaker thumbnails, a Q against K chip and a crossed unpowered chip",
        "Defines Qsp as the Ksp expression with the concentrations right now, with the same powers",
        "at this moment / ion product / Q is compared with K / powers",
        "The right card writes on at this moment, the term writes in coral, a Q against K chip appears and an unpowered chip is crossed",
        "explain",
        "two cards side by side. Left \"Ksp = [Ca2+][SO4 2-] at equilibrium (saturated)\" with the C14 saturated beaker thumbnail. On \"at this moment\" the right card writes \"Qsp = [Ca2+][SO4 2-] right now\" with an unsaturated beaker thumbnail and a clock tick icon. On \"ion product\" the term writes in coral with \"Ksp expression, current concentrations\". On \"Q is compared with K\" a mini C8 log line thumbnail (callback chip \"Q against K video\"). On \"powers\" a third line writes: \"PbI2: Qsp = [Pb2+][I-]^2\", and a chip \"[Pb2+][I-]\" fades in and is crossed (caption \"same powers as Ksp\").",
        ["HandText write-on", "chip pop", "strike"],
        "Hold about 1 second",
    ],
    'qsp-decision': [
        "adjust",
        "The C8 log number line with a fixed Ksp marker, a coral Qsp marker, a crowding lens and a rule card",
        "Shows that more ions than a saturated solution can hold lock together until Qsp falls to Ksp, and what equal and smaller mean",
        "Qsp is bigger than Ksp / precipitate / equals / smaller",
        "The Qsp marker lands right and a white cluster forms and sinks while the marker slides back, then it sits on the mark, then lands left, and the rule card writes",
        "explain",
        "the C8 log number line, fixed teal Ksp marker in the middle (tag \"Ksp: saturated\"). On \"bigger than Ksp\" the coral Qsp marker lands to the right; a lens shows crowded ions locking into a small white cluster that sinks (ported Qsp motion, 1 : 1); the Qsp marker slides back to the Ksp mark as the solid forms (tag \"until Qsp = Ksp\"). On \"equals\" the marker sits on the mark (tag \"saturated\"). On \"smaller\" it lands to the left; the lens shows sparse ions, tag \"no precipitate; could dissolve more\". A rule card writes: \"Qsp > Ksp: precipitate. Qsp = Ksp: saturated. Qsp < Ksp: no precipitate.\" A chip \"Qsp < Ksp: precipitate\" fades in and is crossed.",
        ["log number line", "lens crowd", "marker slide", "HandText write-on"],
        "Hold about 2 seconds",
    ],
    'mixing-dilutes': [
        "adjust",
        "Two beakers tipping into a taller third beaker with an ion box doubling in height and a halving concentration bar",
        "Shows that each ion spreads into the combined volume so every concentration falls before Qsp is calculated",
        "combined volume / 100 millilitres / halves / after mixing",
        "The beakers tip into one, the liquid doubles in height, the same ions spread through a taller box and the concentration bar halves",
        "explain",
        "the ported mix-and-dilute move: two `m5x-unsaturated-beaker-v1.png` beakers labelled \"50 mL\" tip into a third (coded) beaker; on \"combined volume\" the liquid is twice as tall, tag \"100 mL\". A lens on one beaker shows 8 amber ions in a square; on \"100 millilitres\" the same 8 ions spread through a box twice as tall; on \"halves\" a concentration bar drops to half with the tag \"same ions, twice the volume: half the concentration\". On \"after mixing\" a pen arrow labelled \"1 after-mixing concentrations, 2 Qsp\" points to the next board.",
        ["beaker pour", "lens spread", "bar drop", "arrow pointer"],
        "Hold about 1 second",
    ],
    'caso4-setup': [
        "adjust",
        "A fresh board with the swap-cross thumbnail, the calcium sulfate strip, a grouped givens card and a mixing card",
        "Sets up the first worked example and halves each concentration after equal volumes mix",
        "calcium chloride / sodium sulfate / slightly soluble / 4.93 times ten to the minus five / volume doubles / 0.0050",
        "The thumbnail flags calcium sulfate, the givens card fills, and the mixing card writes the halved concentrations",
        "explain",
        "task \"Will CaSO4 precipitate?\" A C13 swap-cross thumbnail (CaCl2 + Na2SO4 to CaSO4 + NaCl) with NaCl ticked and CaSO4 flagged \"slightly soluble\" on \"slightly soluble\". Strip \"CaSO4(s) <=> Ca2+(aq) + SO4 2-(aq)\". Givens card: \"CaCl2(aq): 0.010 mol/L\", \"Na2SO4(aq): 0.010 mol/L\", \"equal volumes\", \"Ksp(CaSO4) = 4.93 x 10^-5 (25 C)\". On \"volume doubles\" the mixing card writes: \"volume x 2, so each concentration / 2\"; \"[Ca2+] = 0.0050 mol/L\", \"[SO4 2-] = 0.0050 mol/L\" on \"0.0050\". Na+ and Cl- appear small in grey with \"spectators\".",
        ["tick pop", "HandText write-on", "chip pop"],
        "Hold about 1 second",
    ],
    'caso4-compare': [
        "adjust",
        "The Qsp line, the log number line with left and ghost right markers, and the clear no precipitate plate",
        "Compares Qsp with Ksp, concludes no precipitate and shows the undiluted slip flipping the answer",
        "2.5 times ten to the minus five / less than / no precipitate / Without diluting / predict a solid",
        "The Qsp line writes, the marker lands left of the Ksp mark, the clear tube plate stands up, then a ghost marker lands right with a struck line and a crossed chip",
        "explain",
        "line \"Qsp = [Ca2+][SO4 2-] = (0.0050)(0.0050) = 2.5 x 10^-5\". On \"less than\" the log line: Qsp marker lands left of the Ksp mark (4.93 x 10^-5), tag \"Qsp < Ksp\". On \"no precipitate\" `m5x-no-ppt-clear-v1.png` stands in the left column with the label \"no precipitate\". On \"Without diluting\" a ghost Qsp marker lands right of the mark: ghost line \"(0.010)(0.010) = 1.0 x 10^-4\" with the tag \"4 x too big\" and a red strike; on \"predict a solid\" a ghost chip \"precipitate\" is crossed.",
        ["log number line", "plate slide", "strike", "HandText write-on"],
        "Hold about 2 seconds",
    ],
    'pbso4-moles': [
        "adjust",
        "A cleared board with the pipette plate, the lead sulfate strip, givens grouped by solution and a mixing card of mole lines",
        "Works unequal volumes through moles and the total volume, one line at a time",
        "25.0 millilitres / 75.0 millilitres / concentration times volume / total volume / 1.5 times ten to the minus four",
        "The givens card fills and the mixing card writes one line per beat: moles of lead, the total volume, the lead concentration, then sulfate",
        "explain",
        "board clears. Task \"Will PbSO4 precipitate?\" `m5x-graduated-pipette-v1.png` small in the left column (measuring the volumes). Strip \"PbSO4(s) <=> Pb2+(aq) + SO4 2-(aq)\". Givens card grouped by solution: \"Pb(NO3)2(aq): 25.0 mL, 4.0 x 10^-3 mol/L\"; \"Na2SO4(aq): 75.0 mL, 2.0 x 10^-4 mol/L\". Mixing card, one line per beat: on \"concentration times volume\" \"n(Pb2+) = 4.0 x 10^-3 mol/L x 0.0250 L = 1.0 x 10^-4 mol\"; on \"total volume\" \"V total = 25.0 + 75.0 = 100.0 mL = 0.100 L\"; \"[Pb2+] = 1.0 x 10^-4 mol / 0.100 L = 1.0 x 10^-3 mol/L\"; then \"n(SO4 2-) = 2.0 x 10^-4 x 0.0750 = 1.5 x 10^-5 mol\", \"[SO4 2-] = 1.5 x 10^-4 mol/L\". Small aside \"mL to L: / 1000\".",
        ["HandText write-on", "plate slide", "line reveal"],
        "Hold about 1 second",
    ],
    'pbso4-compare': [
        "adjust",
        "The two after-mixing results kept, the Qsp line, the log number line with a right marker and a white precipitate",
        "Compares Qsp with the data table Ksp and concludes a precipitate forms",
        "1.5 times ten to the minus seven / 2.53 times ten to the minus eight / bigger / lead sulfate",
        "The earlier working dims, the Qsp line writes, the marker lands right with an about six times bracket and white specks settle",
        "explain",
        "the two after-mixing results stay (working dimmed). Line \"Qsp = [Pb2+][SO4 2-] = (1.0 x 10^-3)(1.5 x 10^-4) = 1.5 x 10^-7\". Givens card adds \"Ksp(PbSO4) = 2.53 x 10^-8 (25 C)\" on \"2.53\". On \"bigger\" the log line: Qsp marker lands right of the mark, bracket \"about 6 x\". On \"lead sulfate\" a white precipitate tube stands in the left column (needed `m5x-ppt-baso4-white-v1.png`, already requested by C13, used here as a generic fine white precipitate with the coded label \"PbSO4(s), white\"; interim: coded white specks settling in the mixed beaker, no painted AgCl tube).",
        ["log number line", "bracket draw", "particle settle", "HandText write-on"],
        "Hold about 1 second",
    ],
    'memory-aid': [
        "adjust",
        "A three-line handwritten aid, each line with a small thumbnail, and a condition tag",
        "Gives the order of steps as a reusable habit after the method is explained",
        "Dilute first / Over Ksp, it falls out",
        "The three lines write one at a time, each lifting a small thumbnail, then the condition tag lands",
        "explain",
        "the aid writes large and handwritten in three lines, each with a thumbnail: \"Dilute first.\" (the tall mixed beaker), \"Then Qsp.\" (the Qsp line with a power highlighted), \"Over Ksp, it falls out.\" (the Qsp marker right of the mark with a falling white cluster). Condition tag: \"after-mixing concentrations; same powers as Ksp; Ksp at the same temperature\".",
        ["HandText write-on", "tag pop"],
        "Hold about 2 seconds",
    ],
    'common-ion': [
        "adjust",
        "The saturated beaker labelled silver chloride, an ion-docking lens, a small log line and a Ksp chip with a lock",
        "Explains the common ion effect as Qsp jumping above Ksp so solid forms, with Ksp itself unchanged",
        "sodium chloride / common ion / bigger than Ksp / left / less / hasn't changed",
        "Chloride ions rain in, the Qsp marker jumps right, silver ions dock onto the crystal while the marker slides back, a dissolved bar drops and the Ksp chip locks beside a crossed chip",
        "explain",
        "`m5x-saturated-beaker-v1.png` with the coded label \"saturated AgCl(aq)\" and strip \"AgCl(s) <=> Ag+(aq) + Cl-(aq)\". Ported common-ion lens: Ag+ and Cl- leave and dock at the crystal at equal rates. On \"sodium chloride\" violet Cl- ions rain in with grey Na+ (spectator tags). On \"common ion\" a tag \"Cl-: already in the equilibrium\". On \"bigger than Ksp\" the coral Qsp marker jumps right of the teal mark on a small log line. On \"left\" the equilibrium arrow's left half thickens; several Ag+ ions dock onto the crystal with pen rings, and the Qsp marker slides back onto the mark. On \"less\" a dissolved-AgCl bar drops. On \"hasn't changed\" the teal Ksp chip \"Ksp = 1.77 x 10^-10 (25 C): unchanged\" gets a lock icon, and a chip \"added Cl- changes Ksp\" fades in and is crossed.",
        ["lens open", "marker slide", "bar drop", "strike", "HandText write-on"],
        "Hold about 2 seconds",
    ],
    'common-ion-ice': [
        "adjust",
        "The C14 ICE table with a non-zero chloride start and the C6b check ruler",
        "Sets up the common-ion calculation with a non-zero initial row and drops the tiny s next to 0.10",
        "zero / 0.10 / about 0.10 / quadratic",
        "Silver ticks zero, chloride is ringed at 0.10, the rows fill, the ruler shows s as a sliver and the plus s slides out",
        "explain",
        "task \"Find s for AgCl in 0.10 mol/L NaCl\". Givens \"Ksp(AgCl) = 1.77 x 10^-10 (25 C)\", \"[Cl-] from NaCl: 0.10 mol/L\". ICE (C14 component, columns Ag+ and Cl-, greyed solid column): on \"zero\" Initial Ag+ \"0\"; on \"0.10\" Initial Cl- \"0.10\" with a pen ring and tag \"from NaCl\" (the non-zero start is the new thing). Change \"+s\", \"+s\"; Equilibrium \"s\", \"0.10 + s\". On \"about 0.10\" the C6b check ruler draws: a long bar \"0.10\" with a hair-thin sliver \"s?\", and the \"+ s\" greys and slides out: \"~ 0.10\". On \"quadratic\" a small grey card \"Quadratic formula: allowed. HSC questions are written so you should not need it.\" fades in and out.",
        ["ICE table", "scribbleEllipse", "check ruler", "HandText write-on"],
        "Hold about 1 second",
    ],
    'common-ion-solve': [
        "adjust",
        "The same table and ruler with the algebra line, a 5 per cent mark, a pure water side line and a two-row comparison",
        "Solves for s by dividing, checks the approximation and compares with pure water",
        "Divide both sides by 0.10 / 5 per cent / square root of Ksp / seven and a half thousand times less",
        "The algebra stage writes with a divide aside, the dashed 5 per cent line draws far beyond the sliver, the pure water line appears and a bracket links the two rows",
        "explain",
        "the table, ruler and givens stay. Algebra: \"Ksp = [Ag+][Cl-] ~ s x 0.10 = 1.77 x 10^-10\"; on \"Divide both sides by 0.10\" aside \"divide both sides by 0.10\"; \"s = 1.77 x 10^-9 mol/L\" ticks. On \"5 per cent\" the ruler shows the dashed 5 per cent line far beyond the sliver, tag \"s / 0.10 = 0.000002%\". On \"square root of Ksp\" a small side line \"pure water: s = sqrt (1.77 x 10^-10) = 1.33 x 10^-5 (C14 method)\". On \"seven and a half thousand\" a two-row comparison: \"pure water: s = 1.33 x 10^-5\" and \"0.10 mol/L Cl-: s = 1.77 x 10^-9\", bracket \"about 7,500 x less\".",
        ["HandText write-on", "check ruler", "bracket draw", "tick pop"],
        "Hold about 2 seconds",
    ],
    'attempt-1': [
        "new",
        "A cleared board with the task, givens grouped by solution and the Ksp, and a single demand",
        "Unseen transfer on mixing unequal volumes with a squared ion and every condition visible",
        "20.0 millilitres / 30.0 millilitres / Pause here to answer",
        "The countdown ring runs through the answer-free thinking hold",
        "explain",
        "board clears. Task \"Will PbI2 precipitate?\" Givens card grouped by solution: \"Pb(NO3)2(aq): 20.0 mL, 1.0 x 10^-3 mol/L\"; \"KI(aq): 30.0 mL, 2.0 x 10^-3 mol/L\"; \"Ksp(PbI2) = 9.8 x 10^-9 (25 C)\". Demand \"Will a precipitate form? Show Qsp.\" Countdown ring for 10 seconds with \"Pause here to answer.\" Nothing answer-bearing: no strip, no mixing card, no plate.",
        ["Countdown ring", "Enter reveals"],
        "Quiet answer-free thinking hold with a 10 second countdown",
    ],
    'feedback-1': [
        "adjust",
        "The mixing card filling quickly, the Qsp line, the log line with a left marker, the clear tube plate and a crossed chip",
        "Gives the answer and key reason briefly and corrects the forgotten square",
        "total 0.0500 litres / squared / no precipitate / forgot to square",
        "The mixing card fills, the Qsp line writes, the marker lands left, the answer chip pins and the wrong chip is crossed",
        "explain",
        "mixing card fills quickly: \"V total = 0.0500 L\", \"[Pb2+] = 2.0 x 10^-5 mol / 0.0500 L = 4.0 x 10^-4\", \"[I-] = 6.0 x 10^-5 mol / 0.0500 L = 1.2 x 10^-3\". Line \"Qsp = [Pb2+][I-]^2 = (4.0 x 10^-4)(1.2 x 10^-3)^2 = 5.8 x 10^-10\". Log line: Qsp left of the mark. Answer chip \"Qsp < Ksp: no precipitate\" pins with `m5x-no-ppt-clear-v1.png` small. On \"forgot to square\" a chip \"(4.0 x 10^-4)(1.2 x 10^-3) = 4.8 x 10^-7: precipitate\" fades in and is crossed (caption \"I- is squared\").",
        ["HandText write-on", "log number line", "chip pin", "Mark cross"],
        "Hold about 1 second",
    ],
    'attempt-2': [
        "new",
        "A cleared board with the saturated beaker plate, two givens and two numbered demands",
        "Unseen conceptual transfer on the common ion effect and Ksp with every condition visible",
        "sodium sulfate / What happens to the amount / Pause here to answer",
        "The countdown ring runs through the answer-free thinking hold",
        "explain",
        "the saturated beaker plate with the coded label \"saturated CaSO4(aq), solid present\". Givens: \"add Na2SO4(s): dissolves\", \"same temperature\". Two numbered demands: \"1. Amount of CaSO4 dissolved?\" \"2. Ksp of CaSO4?\" Countdown ring for 10 seconds with \"Pause here to answer.\" Nothing answer-bearing: no lens, no markers.",
        ["Countdown ring", "Enter reveals"],
        "Quiet answer-free thinking hold with a 10 second countdown",
    ],
    'feedback-2': [
        "adjust",
        "The ion lens with sulfate raining in, the Qsp marker jumping and returning, two answer chips and a crossed chip",
        "Gives the answer and key reason briefly and corrects the idea that Ksp falls",
        "common ion / less stays dissolved / stays the same / Ksp goes down",
        "Sulfate ions rain in, the marker jumps right and slides back as solid forms, two answer chips pin and the wrong chip is crossed",
        "explain",
        "sulfate ions rain into the lens; the Qsp marker jumps right, then slides back to the mark as white solid forms. Answer chips pin: \"1. less CaSO4 dissolved (more solid)\"; \"2. Ksp unchanged (same temperature)\". On \"Ksp goes down\" a chip \"Ksp decreases\" fades in and is crossed (caption \"solubility falls; Ksp fixed\").",
        ["lens open", "marker slide", "chip pin", "Mark cross"],
        "Hold about 1 second",
    ],
    'decision-rule': [
        "adjust",
        "A four-line decision card lighting on its words, the kidney stone returning small beside the log line, and a next chip",
        "Packs the method into reusable lines, closes the kidney stone loop and hands off to Module 6",
        "past Ksp / Next / K a",
        "Four lines write and light in turn, the stone returns beside the log line with the marker crossing the mark, and the next chip slides in",
        "explain",
        "the decision card writes, each line lighting on its words: \"1 After mixing: n = cV, / total V.\" \"2 Qsp with the Ksp powers.\" \"3 Qsp > Ksp: precipitate. Qsp <= Ksp: none.\" \"4 Common ion: solubility down, Ksp unchanged.\" On \"past Ksp\" `m5x-kidney-stone-v1.png` returns small beside the log line with the Qsp marker crossing the mark (tag \"Qsp > Ksp: a solid can start to form\"). On \"K a\" a chip \"Next: Module 6, acids and bases (Ka)\".",
        ["HandText write-on", "line highlight", "plate slide", "chip slide"],
        "Hold about 2 seconds",
    ],
    'key-notes': [
        "new",
        "Key notes card with the five notes, the memory aid in large writing and its condition tag",
        "Essentials to copy into books",
        "key notes",
        "Notes appear then stay still for copying",
        "hold",
        "The heading \"Key notes: what to write in your book\", the five notes, the memory aid and its condition tag appear and lock",
        ["Enter reveals"],
        "Quiet copy hold of about 60 seconds with pause invitation",
    ],
}


P01_ROWS = {
    'hook': [
        "adjust",
        "Heading \"Looks unchanged. Is that evidence?\" writes on.",
        "Explains why a still tube is not evidence: a finished reaction also looks still.",
        "push it",
        "On the spoken cues: The painted iron tube (`c3-iron-tube-start-v1.png`) stands centre on the white tile (`m6-white-tile-v1.png`); a coded clock icon sweeps one hour beside it. On \"finished reaction\" a second plate slides in beside it, the ash on its watch glass (`p01-mgo-ash-v1.png`, Codex item 4), with the tag \"finished: nothing changing\";",
        "explain",
        "heading \"Looks unchanged. Is that evidence?\" writes on. The painted iron tube (`c3-iron-tube-start-v1.png`) stands centre on the white tile (`m6-white-tile-v1.png`); a coded clock icon sweeps one hour beside it. On \"finished reaction\" a second plate slides in beside it, the ash on its watch glass (`p01-mgo-ash-v1.png`, Codex item 4), with the tag \"finished: nothing changing\"; both get the same \"still\" tag and a pen \"?\" between them (\"same appearance, different story\"). On \"push it\" a coded drop falls into the iron tube and a pen arrow labelled \"push\" points at it. The main question card writes: \"How do you get evidence you can trust?\"",
        [
            "HandText write-on",
            "DrawPath",
            "plate slide",
            "drop fall"
        ],
        "Hold 1 second"
    ],
    'reversibility-test': [
        "adjust",
        "The \"push it, bring it back\" loop writes at the top: an arrow out (\"change\") and an arrow back (\"reverse the change\"), with \"start comes back?\" at the end.",
        "Explains why a return is the evidence of reversibility: going one way happens in irreversible changes too; only coming back shows the reverse reaction can run.",
        "reverse / blue / pink again / reversible",
        "On the spoken cues: On \"Heat pink cobalt chloride crystals\" the painted clamped tube of pink crystals (`p01-cocl2-crystals-pink-v1.png`, Codex item 1) sits over the painted burner (`m5x-bunsen-burner-v1.png`, Codex item 3) on the clamp stand; on \"droplets\" small coded droplets bead near the mouth (or the plate's own droplets in item 2);",
        "explain",
        "the \"push it, bring it back\" loop writes at the top: an arrow out (\"change\") and an arrow back (\"reverse the change\"), with \"start comes back?\" at the end. On \"Heat pink cobalt chloride crystals\" the painted clamped tube of pink crystals (`p01-cocl2-crystals-pink-v1.png`, Codex item 1) sits over the painted burner (`m5x-bunsen-burner-v1.png`, Codex item 3) on the clamp stand; on \"droplets\" small coded droplets bead near the mouth (or the plate's own droplets in item 2); on \"blue\" the plate crossfades to `p01-cocl2-crystals-blue-v1.png` (optional process clip) and the first loop arrow lights. Equation chip, small, two one-way lines (no equilibrium arrow, because the tube is open): \"heat: CoCl2·6H2O(s), pink → CoCl2(s), blue + 6H2O(g)\" and, lit only on \"add a few drops of water\", \"add water: CoCl2(s), blue + 6H2O(l) → CoCl2·6H2O, pink\". On \"proves nothing yet\" a crossed chip \"blue, so reversible\" fades in. On \"add a few drops of water\" the burner fades out, the clear dropper (`m5x-dropper-clear-v1.png`, Codex item 5) appears above the tube and a coded drop falls; on \"pink again\" the plate crossfades back to pink and the return arrow lights with a teal tick; a small terracotta heat icon on \"warms slightly\". On \"reversible\" the word and its meaning write under the loop: \"reversible: the change can be run back by changing the conditions\".",
        [
            "HandText write-on",
            "ScribbleCircle",
            "Mark cross",
            "tick",
            "plate crossfade",
            "chip pop",
            "drop fall"
        ],
        "Hold 2 seconds"
    ],
    'magnesium-open': [
        "adjust",
        "Right zone. The painted magnesium ribbon on a heatproof mat (`p01-mg-ribbon-v1.png`, Codex item 4) gets a coded white glare (abstract light burst, with a small pen tag \"never look straight at it\"), then crossfades to the ash plate (`p01-mgo-ash-v1.png`).",
        "Explains why a return is the evidence of reversibility: going one way happens in irreversible changes too; only coming back shows the reverse reaction can run.",
        "irreversible / open",
        "On the spoken cues: The equation chip \"2Mg(s) + O2(g) → 2MgO(s)\" writes with a one-way arrow. On \"Add water, heat it, cool it\" three small attempt chips write in turn under the ash, each with a pen cross (\"no magnesium\"). On \"irreversible\" the term writes with its meaning: \"no change you can make brings the start back\".",
        "explain",
        "right zone. The painted magnesium ribbon on a heatproof mat (`p01-mg-ribbon-v1.png`, Codex item 4) gets a coded white glare (abstract light burst, with a small pen tag \"never look straight at it\"), then crossfades to the ash plate (`p01-mgo-ash-v1.png`). The equation chip \"2Mg(s) + O2(g) → 2MgO(s)\" writes with a one-way arrow. On \"Add water, heat it, cool it\" three small attempt chips write in turn under the ash, each with a pen cross (\"no magnesium\"). On \"irreversible\" the term writes with its meaning: \"no change you can make brings the start back\". On \"open\" the cobalt tube returns small with a dashed outline around it; a coded steam wisp crosses the outline (tag \"open: matter can leave\"). On \"isn't an equilibrium\" a tag writes: \"open: a reversibility test, not an equilibrium\".",
        [
            "HandText write-on",
            "ScribbleCircle",
            "Mark cross",
            "plate crossfade",
            "chip pop"
        ],
        "Hold 2 seconds"
    ],
    'closed-system': [
        "adjust",
        "Three plates in a row, each with the dashed boundary outline: the iron tube (open; ions stay in the water; tag \"open tube, but the ions stay in\"), the sealed NO2 tube (`c9-no2-tube-brown-v1.png`; tag \"sealed gas\"), the syringe (`c4a-syringe-barrel-v1.png` with `c4a-syringe-plunger-v1.png`, tip sealed;",
        "Explains why the closed system: a response to a disturbance only means something if nothing escapes.",
        "sealed / closed",
        "On the spoken cues: On \"write the condition\" a method line writes in pen: \"System: closed. Sealed: ___. Can enter or leave: ___.\" On \"closed\" the NO2 tube and syringe boundaries turn solid teal with the tag \"sealed tube and syringe: closed (matter stays in; heat can pass)\" (C1 recall); the open iron tube stays dashed.",
        "explain",
        "three plates in a row, each with the dashed boundary outline: the iron tube (open; ions stay in the water; tag \"open tube, but the ions stay in\"), the sealed NO2 tube (`c9-no2-tube-brown-v1.png`; tag \"sealed gas\"), the syringe (`c4a-syringe-barrel-v1.png` with `c4a-syringe-plunger-v1.png`, tip sealed; tag \"sealed syringe\"). On \"write the condition\" a method line writes in pen: \"System: closed. Sealed: ___. Can enter or leave: ___.\" On \"closed\" the NO2 tube and syringe boundaries turn solid teal with the tag \"sealed tube and syringe: closed (matter stays in; heat can pass)\" (C1 recall); the open iron tube stays dashed.",
        [
            "HandText write-on",
            "ScribbleCircle"
        ],
        "Hold 1 second"
    ],
    'setup-reference': [
        "adjust",
        "The two reagent bottles (`m5x-bottle-fe-v1.png`, `m5x-bottle-scn-v1.png`) with coded labels \"0.002 mol/L Fe(NO3)3\" and \"0.002 mol/L KSCN\"; on \"equal volumes\" two coded pours meet in the painted beaker (`m6-beaker-v1.png`, coded pale red fill).",
        "Explains why a pale stock: so a change can show in either direction; and why side by side: colour memory is unreliable.",
        "either direction / reference / one change / side by side",
        "On the spoken cues: On \"either direction\" a small swatch scale writes with an up arrow (\"deeper\") and a down arrow (\"paler\") either side of the pale red. On \"six identical tubes\" six painted iron tubes (`c3-iron-tube-start-v1.png`) slide into a row on the white tile, numbered 1 to 6 by coded tags.",
        "explain",
        "the two reagent bottles (`m5x-bottle-fe-v1.png`, `m5x-bottle-scn-v1.png`) with coded labels \"0.002 mol/L Fe(NO3)3\" and \"0.002 mol/L KSCN\"; on \"equal volumes\" two coded pours meet in the painted beaker (`m6-beaker-v1.png`, coded pale red fill). On \"either direction\" a small swatch scale writes with an up arrow (\"deeper\") and a down arrow (\"paler\") either side of the pale red. On \"six identical tubes\" six painted iron tubes (`c3-iron-tube-start-v1.png`) slide into a row on the white tile, numbered 1 to 6 by coded tags. On \"reference\" tube 1 gets the teal \"1: reference, never changed\" tag and a lock icon. On \"one change\" tubes 2 to 6 each get an empty \"change: ___\" tag. On \"side by side\" a pen bracket joins tube 1 to each other tube in turn; a crossed chip \"compare from memory\" fades in.",
        [
            "HandText write-on",
            "Mark cross",
            "DrawPath",
            "chip pop",
            "drop fall"
        ],
        "Hold 2 seconds"
    ],
    'variables': [
        "new",
        "The variables card writes in the right zone, one row per cue: \"Independent (what you change): substance added, or temperature\"; \"Dependent (what you observe): colour compared with tube 1\"; \"Controlled (kept the same): volume of stock, tube size, white tile and lighting, time before judging\".",
        "Teaches: the variables.",
        "independent variable / dependent variable / controlled variables",
        "On the spoken cues: As each controlled item is spoken, a small pen link points from it to the matching thing in the tube row (equal liquid levels, identical tubes, the tile, a small clock).",
        "explain",
        "the variables card writes in the right zone, one row per cue: \"Independent (what you change): substance added, or temperature\"; \"Dependent (what you observe): colour compared with tube 1\"; \"Controlled (kept the same): volume of stock, tube size, white tile and lighting, time before judging\". As each controlled item is spoken, a small pen link points from it to the matching thing in the tube row (equal liquid levels, identical tubes, the tile, a small clock).",
        [
            "HandText write-on"
        ],
        "Hold 2 seconds"
    ],
    'expected-results': [
        "adjust",
        "The equation chip \"Fe3+(aq) + SCN-(aq) ⇌ FeSCN2+(aq)\" (C3 style) top-centre.",
        "Explains why the results go the way they do: the C3 cause in a clause (adding a reactant shifts right; removing one shifts left; heating favours the reaction that takes in heat).",
        "deepens / fades",
        "On the spoken cues: On \"tube two\" a coded crystal drop falls into tube 2 (tag \"Fe(NO3)3 crystals\"); on \"tube three\" into tube 3 (tag \"KSCN crystals\"); on \"deepens\" both crossfade to `c3-iron-tube-deep-v1.png` and a blue \"shift right\" arrow slides on the chip (C3 shift arrow).",
        "explain",
        "the equation chip \"Fe3+(aq) + SCN-(aq) ⇌ FeSCN2+(aq)\" (C3 style) top-centre. On \"tube two\" a coded crystal drop falls into tube 2 (tag \"Fe(NO3)3 crystals\"); on \"tube three\" into tube 3 (tag \"KSCN crystals\"); on \"deepens\" both crossfade to `c3-iron-tube-deep-v1.png` and a blue \"shift right\" arrow slides on the chip (C3 shift arrow). On \"tube four\" the clear dropper with a coded drop over tube 4 (tag \"0.1 mol/L NaOH\"); on \"rust-brown solid\" tube 4 crossfades to `p01-iron-tube-faded-ppt-v1.png` (Codex item 6) and an amber \"shift left\" arrow slides on the chip, with the tag \"Fe3+ removed as Fe(OH)3(s)\". The expected results table writes in the right zone, rows 2, 3 and 4: \"added / colour vs tube 1 / shift / reason (C3)\". A small grey tag under row 2: \"added iron also adds a little yellow-brown tint\".",
        [
            "HandText write-on",
            "plate crossfade",
            "chip pop",
            "plate slide",
            "table build",
            "drop fall"
        ],
        "Hold 2 seconds"
    ],
    'dilution-control': [
        "adjust",
        "On \"also added water\" the liquid level in tube 4 rises a hair with a pen tag \"more volume\".",
        "Explains why the dilution control: adding a solution adds volume, which alone makes a tube paler; and why solids in tubes 2 and 3: volume hardly changes.",
        "more dilute / dilution control",
        "On the spoken cues: A chip \"paler, so shift left\" fades in with a \"?\" (not yet crossed). On \"dilution control\" the wash bottle (`m6-wash-bottle-v1.png`) and the clear dropper add the same count of coded drops to tube 5 (a counter \"10 drops\" under tube 4 and \"10 drops\" under tube 5, pen-linked as equal);",
        "explain",
        "on \"also added water\" the liquid level in tube 4 rises a hair with a pen tag \"more volume\". A chip \"paler, so shift left\" fades in with a \"?\" (not yet crossed). On \"dilution control\" the wash bottle (`m6-wash-bottle-v1.png`) and the clear dropper add the same count of coded drops to tube 5 (a counter \"10 drops\" under tube 4 and \"10 drops\" under tube 5, pen-linked as equal); on \"tiny bit paler\" tube 5 crossfades to `p01-iron-tube-diluted-v1.png` (Codex item 7). On \"clearly paler\" a comparison bar writes: three swatches, tube 1, tube 5, tube 4, with the small step from 1 to 5 labelled \"dilution\" and the big step from 5 to 4 labelled \"shift\"; the \"?\" chip turns into a teal tick \"shift confirmed by the control\". On \"solids\" tubes 2 and 3 pulse with the tag \"solid added: volume hardly changes\". Row 5 of the results table writes: \"same drops of water / very slightly paler / none / dilution only\".",
        [
            "HandText write-on",
            "Mark cross",
            "tick",
            "plate crossfade",
            "chip pop",
            "table build",
            "drop fall"
        ],
        "Hold 2 seconds"
    ],
    'temperature': [
        "adjust",
        "The cobalt tube in its beaker bath (`c3-cobalt-tube-purple-v1.png`) with the painted stopper composited on (`m5x-stopper-v1.png`, Codex item 8) and a teal boundary outline (closed).",
        "Explains why the results go the way they do: the C3 cause in a clause (adding a reactant shifts right; removing one shifts left; heating favours the reaction that takes in heat).",
        "blue / pink / purple",
        "On the spoken cues: Equation chip small: \"[Co(H2O)6]2+ (pink) + 4Cl- ⇌ [CoCl4]2- (blue) + 6H2O\", forward arrow tagged \"takes in heat\" (C3 icon). On \"hot water bath\" the thermometer (`c8-thermometer-hot-v1.png`) reads \"about 60 C\" and the bath water gets a coded warm tint; on \"blue\" the tube crossfades to `c3-cobalt-tube-blue-v1.png`.",
        "explain",
        "the cobalt tube in its beaker bath (`c3-cobalt-tube-purple-v1.png`) with the painted stopper composited on (`m5x-stopper-v1.png`, Codex item 8) and a teal boundary outline (closed). Equation chip small: \"[Co(H2O)6]2+ (pink) + 4Cl- ⇌ [CoCl4]2- (blue) + 6H2O\", forward arrow tagged \"takes in heat\" (C3 icon). On \"hot water bath\" the thermometer (`c8-thermometer-hot-v1.png`) reads \"about 60 C\" and the bath water gets a coded warm tint; on \"blue\" the tube crossfades to `c3-cobalt-tube-blue-v1.png`. On \"ice bath\" coded ice cubes (`c9-ice-cube-v1.png`, small) float in the bath, the thermometer drops, and on \"pink\" the tube crossfades to `c3-cobalt-tube-pink-v1.png`. On \"purple\" it returns to the purple plate with the \"push it, bring it back\" loop lighting small beside it. After \"purple\" (unspoken, Revision 2 reserve cut) the two C9 tubes (`c9-no2-tube-brown-v1.png` hot, `c9-no2-tube-pale-v1.png` ice) stand side by side with tags \"hot: browner\", \"ice: paler\". Results table rows: \"cobalt: hot blue, ice pink, room purple again\"; \"NO2 (sealed): hot browner, ice paler\". Margin tag, unspoken: \"volume/pressure: sealed NO2 syringe, usually a teacher demonstration (see the squeezing video)\". A second unspoken margin tag: \"keep the cobalt solution (made with concentrated HCl) well away from thiocyanate\".",
        [
            "ScribbleCircle",
            "plate crossfade",
            "chip pop",
            "table build",
            "drop fall"
        ],
        "Hold 2 seconds"
    ],
    'validity-reliability': [
        "adjust",
        "Three cards write in turn in the right zone, each with its plain question and this investigation's answer.",
        "Explains why validity differs from reliability: repeats cannot fix a missing control.",
        "Validity / Reliability / Accuracy",
        "On the spoken cues: \"Validity: does it test what it claims? Only one change per tube; reference; dilution control.\" (pen links to tubes 1, 5). \"Reliability: same result on repeats? Repeat each tube; compare groups; two observers.\" (three small coded tube rows appear, matching). \"Accuracy: close to the true value? Eye judgement is rough;",
        "explain",
        "three cards write in turn in the right zone, each with its plain question and this investigation's answer. \"Validity: does it test what it claims? Only one change per tube; reference; dilution control.\" (pen links to tubes 1, 5). \"Reliability: same result on repeats? Repeat each tube; compare groups; two observers.\" (three small coded tube rows appear, matching). \"Accuracy: close to the true value? Eye judgement is rough; a colourimeter gives a number.\" (the painted colourimeter, `m5x-colourimeter-v1.png`, small, with a pen \"later\" tag). A crossed chip under the reliability card: \"repeating fixes a missing control\".",
        [
            "HandText write-on",
            "Mark cross",
            "chip pop"
        ],
        "Hold 2 seconds"
    ],
    'risk-assessment': [
        "adjust",
        "The risk table writes in the right zone, three columns \"Hazard / Harm / Control\", one row per cue, each with its painted plate small in the hazard cell: cobalt chloride (pink crystals plate): \"harmful if swallowed; may cause cancer if dust inhaled;",
        "Teaches: the risk assessment.",
        "acid / eyes",
        "On the spoken cues: Gloves (`m5x-gloves-v1.png`) and glasses plates sit at the table head under \"always\". Unspoken row: \"concentrated hydrochloric acid in the cobalt solution: corrosive / teacher-prepared, stoppered\". Footer chip: \"follow your school's risk assessment and your teacher's method\".",
        "explain",
        "the risk table writes in the right zone, three columns \"Hazard / Harm / Control\", one row per cue, each with its painted plate small in the hazard cell: cobalt chloride (pink crystals plate): \"harmful if swallowed; may cause cancer if dust inhaled; skin and breathing allergies\" / \"small amounts, no dust, gloves, teacher demo in many schools\"; thiocyanate (KSCN bottle): \"acid releases a very toxic gas\" / \"never mix with acid; keep the cobalt solution apart\"; sodium hydroxide (dropper): \"eye damage\" / \"safety glasses (`m5x-safety-glasses-v1.png`)\"; hot bath (beaker, thermometer): \"scalds\" / \"test tube holder (`m5x-test-tube-holder-v1.png`), water bath, no naked flame near the tubes\"; burning magnesium (ribbon): \"intense light, fire\" / \"never look at the flame, heatproof mat, teacher demo, never water on a magnesium fire\"; waste (`m5x-waste-bottle-v1.png`): \"cobalt is toxic to water life\" / \"labelled residues container, never the sink\". Gloves (`m5x-gloves-v1.png`) and glasses plates sit at the table head under \"always\". Unspoken row: \"concentrated hydrochloric acid in the cobalt solution: corrosive / teacher-prepared, stoppered\". Footer chip: \"follow your school's risk assessment and your teacher's method\".",
        [
            "HandText write-on",
            "chip pop",
            "table build",
            "drop fall"
        ],
        "Hold 3 seconds (reading hold; the table returns in the key notes)"
    ],
    'memory-aid': [
        "adjust",
        "Aid 1 writes large and handwritten with the loop arrows: \"Push it, then bring it back.\" Aid 2 writes beneath with two small icons, a rain cloud over the pink crystals plate and a sun over the blue plate: \"Pink in the rain, blue in the desert.\" A crossed chip \"blue when wet\" (the site's common error)",
        "Gives reusable memory aids after the causes have been explained; each aid is checked in the design.",
        "Push it, then bring it back / pink in the rain, blue in the desert",
        "On the spoken cues: Condition tag: \"a return is the evidence; one change is not\".",
        "explain",
        "aid 1 writes large and handwritten with the loop arrows: \"Push it, then bring it back.\" Aid 2 writes beneath with two small icons, a rain cloud over the pink crystals plate and a sun over the blue plate: \"Pink in the rain, blue in the desert.\" A crossed chip \"blue when wet\" (the site's common error). Condition tag: \"a return is the evidence; one change is not\".",
        [
            "HandText write-on",
            "ScribbleCircle",
            "Mark cross",
            "chip pop"
        ],
        "Hold 2 seconds"
    ],
    'attempt-1': [
        "new",
        "The board clears to two tubes on the white tile: tube 1 (reference, start plate) and the silver nitrate tube (`p01-iron-tube-diluted-v1.png` with a coded faint white cloud at the bottom, tag \"+ 10 drops silver nitrate solution\").",
        "Unseen transfer task with every condition on screen: \"What extra tube would make this conclusion valid, and why?\"",
        "Your turn. A student adds ten drops of silver nitrate solution to an iron thiocyanate",
        "The question card builds with every given visible and stays on screen; no answer cues appear; the countdown ring runs for 10 seconds after \"Pause here to answer.\" (The board clears to two tubes on the white tile: tube 1 (reference, start plate) and the silver nitrate tube (`p01-iron-tube-diluted-v1.png`)",
        "explain",
        "The board clears and the question builds as each given is named; the demands stay on screen; the countdown ring starts after the narration. Givens card: \"10 drops of silver nitrate solution added\", \"paler than the reference\", \"conclusion: shifted left\". Demand: \"What extra tube would make this conclusion valid, and why?\" Countdown ring for 10 seconds with \"Pause here to answer.\" on screen.",
        [
            "ScribbleCircle",
            "drop fall",
            "Countdown ring"
        ],
        "10 second answer-free countdown after \"Pause here to answer.\""
    ],
    'feedback-1': [
        "adjust",
        "A third tube slides in (`p01-iron-tube-diluted-v1.png`, tag \"+ 10 drops water\") with the drop counters pen-linked as equal; answer chip \"dilution control: same 10 drops of water\" pins.",
        "Brief feedback: the answer, the key reason and one crossed classic mistake for 1 (owner rule, 16 October).",
        "ten drops of water / dilution control / reliable",
        "On the spoken cues: The three-swatch comparison bar from scene 8 returns with \"dilution\" and \"shift\" steps. On \"repeating\" a chip \"repeat it three times\" fades in and is crossed (caption \"reliability, not validity\").",
        "explain",
        "a third tube slides in (`p01-iron-tube-diluted-v1.png`, tag \"+ 10 drops water\") with the drop counters pen-linked as equal; answer chip \"dilution control: same 10 drops of water\" pins. The three-swatch comparison bar from scene 8 returns with \"dilution\" and \"shift\" steps. On \"repeating\" a chip \"repeat it three times\" fades in and is crossed (caption \"reliability, not validity\").",
        [
            "Mark cross",
            "chip pop",
            "plate slide",
            "drop fall",
            "bar draw"
        ],
        "Hold 1 second"
    ],
    'attempt-2': [
        "new",
        "The clamped tube of blue crystals (`p01-cocl2-crystals-blue-v1.png`) with the open dashed boundary; givens card: \"pink crystals heated in an open tube\", \"turned blue\", and the student's line in a quote box: \"This shows the reaction is reversible.\" Demand: \"Evaluate his conclusion.\" Countdown ring fo",
        "Unseen transfer task with every condition on screen: \"Evaluate his conclusion.\"",
        "One more. A student heats pink cobalt chloride crystals in an open test tube, and they",
        "The question card builds with every given visible and stays on screen; no answer cues appear; the countdown ring runs for 10 seconds after \"Pause here to answer.\" (The clamped tube of blue crystals (`p01-cocl2-crystals-blue-v1.png`) with the open dashed boundary;)",
        "explain",
        "The board clears and the question builds as each given is named; the demands stay on screen; the countdown ring starts after the narration. ",
        [
            "ScribbleCircle",
            "drop fall",
            "Countdown ring"
        ],
        "10 second answer-free countdown after \"Pause here to answer.\""
    ],
    'feedback-2': [
        "adjust",
        "The loop arrows return: the \"change\" arrow lit, the \"reverse\" arrow dashed with \"missing\"; on \"pink\" the dropper adds a drop and the plate crossfades to pink, the return arrow lights with a teal tick.",
        "Brief feedback: the answer, the key reason and one crossed classic mistake for 2 (owner rule, 16 October).",
        "one direction / pink",
        "On the spoken cues: Answer chip \"one direction only: reverse it (add water, pink returns)\". On \"open\" the steam wisp crosses the dashed boundary with the tag \"open: not an equilibrium\". On \"colour changed\" a chip \"correct, the colour changed\" fades in and is crossed (caption \"one change is not a return\").",
        "explain",
        "the loop arrows return: the \"change\" arrow lit, the \"reverse\" arrow dashed with \"missing\"; on \"pink\" the dropper adds a drop and the plate crossfades to pink, the return arrow lights with a teal tick. Answer chip \"one direction only: reverse it (add water, pink returns)\". On \"open\" the steam wisp crosses the dashed boundary with the tag \"open: not an equilibrium\". On \"colour changed\" a chip \"correct, the colour changed\" fades in and is crossed (caption \"one change is not a return\").",
        [
            "Mark cross",
            "tick",
            "plate crossfade",
            "chip pop",
            "drop fall"
        ],
        "Hold 1 second"
    ],
    'decision-rule': [
        "adjust",
        "The plan card writes, each line lighting on its words: \"Push it, bring it back.\" \"Closed system.\" \"Reference tube, never changed.\" \"One change per tube.\" \"Dilution control: same volume of water.\" \"Judge side by side on a white tile.\" \"Risk assessment first.\" The six-tube row returns small along the",
        "Packs the method into reusable lines and hands off to the next video.",
        "Next",
        "On the spoken cues: On \"Next\" a chip \"Next: a number for where an equilibrium sits\" appears with the painted iron tube small.",
        "explain",
        "the plan card writes, each line lighting on its words: \"Push it, bring it back.\" \"Closed system.\" \"Reference tube, never changed.\" \"One change per tube.\" \"Dilution control: same volume of water.\" \"Judge side by side on a white tile.\" \"Risk assessment first.\" The six-tube row returns small along the bottom with the matching tubes pulsing. On \"Next\" a chip \"Next: a number for where an equilibrium sits\" appears with the painted iron tube small.",
        [
            "HandText write-on",
            "ScribbleCircle",
            "chip pop"
        ],
        "Hold 2 seconds"
    ],
    'key-notes': [
        "new",
        "Key notes card with the numbered notes, the memory aids in large writing and the condition tag",
        "Essentials to copy into books",
        "key notes",
        "Notes appear then stay still for copying",
        "hold",
        "The notes and the memory aids appear and lock",
        [
            "Enter reveals"
        ],
        "Quiet copy hold of about 60 seconds with pause invitation"
    ],
}

P03_ROWS = {
    'hook': [
        "adjust",
        "Heading \"Where do the rules come from? Your own results.\" writes on.",
        "Teaches: hook (a grid of evidence).",
        "clear / cloudy / rules",
        "On the spoken cues: The painted well plate (`p03-well-plate-v1.png`, Codex item 1) sits centre on a coded black card; the 5 x 5 block is outlined in pen with the row and column ion labels writing on. On \"clear\" a few wells fill with coded clear liquid;",
        "explain",
        "heading \"Where do the rules come from? Your own results.\" writes on. The painted well plate (`p03-well-plate-v1.png`, Codex item 1) sits centre on a coded black card; the 5 x 5 block is outlined in pen with the row and column ion labels writing on. On \"clear\" a few wells fill with coded clear liquid; on \"cloudy\" others bloom with coded solids in their real colours (white, bright yellow, pale yellow, brown) in the matrix pattern of the Decisions table. On \"rules\" a small rules card (C13 NAGSAG, faint) slides in at the right with a pen arrow from the grid to it (\"evidence → rules\").",
        [
            "HandText write-on",
            "DrawPath",
            "plate slide",
            "table build"
        ],
        "Hold 1 second"
    ],
    'always-soluble-partners': [
        "adjust",
        "Ten painted dropper bottles (`p03-dropper-bottle-v1.png`, Codex item 2) line up, five down the left and five across the top, with coded labels \"NaNO3\", \"Ca(NO3)2\", \"Ba(NO3)2\", \"Pb(NO3)2\", \"AgNO3\" and \"NaCl\", \"NaI\", \"Na2SO4\", \"Na2CO3\", \"NaOH\", all \"0.1 mol/L\".",
        "Explains why nitrates and sodium salts: they always dissolve, so a solid can only be the tested pair; and why check each stock alone: a cloudy stock would fake a result.",
        "nitrate / sodium / pair you're testing",
        "On the spoken cues: On \"nitrate\" the NO3- part of each left label lights grey; on \"sodium\" the Na+ part of each top label lights grey. On \"always dissolve\" a tag \"N and G of NAGSAG: always soluble\" writes (C13 rules card rows flash).",
        "explain",
        "ten painted dropper bottles (`p03-dropper-bottle-v1.png`, Codex item 2) line up, five down the left and five across the top, with coded labels \"NaNO3\", \"Ca(NO3)2\", \"Ba(NO3)2\", \"Pb(NO3)2\", \"AgNO3\" and \"NaCl\", \"NaI\", \"Na2SO4\", \"Na2CO3\", \"NaOH\", all \"0.1 mol/L\". On \"nitrate\" the NO3- part of each left label lights grey; on \"sodium\" the Na+ part of each top label lights grey. On \"always dissolve\" a tag \"N and G of NAGSAG: always soluble\" writes (C13 rules card rows flash). On \"pair you're testing\" the C13 swap cross plays small for one well (Pb(NO3)2 + NaI): \"Na+ NO3-\" ticks green and greys out (spectators), \"Pb2+ I-\" lights amber: \"the only possible solid\". On \"on its own\" each bottle gets one coded drop in a separate check well with a little water from the wash bottle (`m6-wash-bottle-v1.png`); all stay clear, each with a teal tick (tag \"stock check: clear on its own\").",
        [
            "HandText write-on",
            "Mark cross",
            "tick",
            "drop fall"
        ],
        "Hold 2 seconds"
    ],
    'predict-method': [
        "adjust",
        "A coded results grid (book page lines) writes on; on \"predict\" each cell gets a pen prediction mark (\"ppt\" or \"none\") filling quickly row by row.",
        "Explains why predict first: it turns observations into a test of the rules; and why the tip stays out: it would carry one solution into the other's bottle; and why black: a white cloud is invisible on white.",
        "predict / black",
        "On the spoken cues: The well plate slides over the grid so each well sits on its cell. On \"along each row\" a dropper bottle tilts over row 1 and coded drops fall into five wells, then the rows fill in turn (fast); on \"down each column\" the columns fill.",
        "explain",
        "a coded results grid (book page lines) writes on; on \"predict\" each cell gets a pen prediction mark (\"ppt\" or \"none\") filling quickly row by row. The well plate slides over the grid so each well sits on its cell. On \"along each row\" a dropper bottle tilts over row 1 and coded drops fall into five wells, then the rows fill in turn (fast); on \"down each column\" the columns fill. On \"dropper tip out\" a close inset shows the dropper tip held above a well with a gap and a teal tick, beside a crossed inset of a tip touching the liquid (tag \"contaminates the bottle\"). On \"black\" the coded black card slides under half the plate: a thin white cloud (a solid just starting to form) is hard to see over the white tile (`m6-white-tile-v1.png`) half and clear over the black half (tags \"white on white: hard to see\", \"white on black: clear\"). A record-sheet tag under the grid: \"record: ppt or no ppt, colour, heavy or faint cloud. Write 'no precipitate', not 'no reaction'.\"",
        [
            "HandText write-on",
            "Mark cross",
            "tick",
            "plate slide",
            "drop fall"
        ],
        "Hold 2 seconds"
    ],
    'variables': [
        "new",
        "The variables card writes in the right zone, one row per cue: \"Independent (what you change): the cation and anion pair\"; \"Dependent (what you observe): ppt or not, colour, heavy or faint\"; \"Controlled (kept the same): 0.1 mol/L stocks, 3 drops + 3 drops, temperature, time before recording\".",
        "Explains why concentration matters most: some compounds only just dissolve, so the amount decides whether a cloud shows.",
        "independent variable / dependent variable / controlled",
        "On the spoken cues: On \"Concentration matters most\" two coded wells side by side show the same pair (Ca2+ + SO4 2-) with the same 3 + 3 drops from two stock concentrations: \"0.01 mol/L stocks\" (clear) and \"0.1 mol/L stocks\" (white solid), tag \"same pair, same drops, different concentration\".",
        "explain",
        "the variables card writes in the right zone, one row per cue: \"Independent (what you change): the cation and anion pair\"; \"Dependent (what you observe): ppt or not, colour, heavy or faint\"; \"Controlled (kept the same): 0.1 mol/L stocks, 3 drops + 3 drops, temperature, time before recording\". On \"Concentration matters most\" two coded wells side by side show the same pair (Ca2+ + SO4 2-) with the same 3 + 3 drops from two stock concentrations: \"0.01 mol/L stocks\" (clear) and \"0.1 mol/L stocks\" (white solid), tag \"same pair, same drops, different concentration\".",
        [
            "HandText write-on",
            "drop fall"
        ],
        "Hold 2 seconds"
    ],
    'expected-results': [
        "adjust",
        "The wells fill to the expected matrix (Decisions table) as each sentence lands, each group with its rules-card row flashing small in the corner: Na+ row (all clear, \"Group 1: soluble\"); CO3 2- column (white, Ag+ pale yellow, Na+ clear: \"carbonates: insoluble unless Group 1\");",
        "Explains why each expected result: the NAGSAG row it comes from.",
        "clear",
        "On the spoken cues: The painted tubes `m5x-ppt-agcl-white-v1.png` and `m5x-ppt-pbi2-yellow-v1.png` stand small at the side for the two syllabus solids. A chip \"expected, at 0.1 mol/L; your results are the test\" sits under the plate.",
        "explain",
        "the wells fill to the expected matrix (Decisions table) as each sentence lands, each group with its rules-card row flashing small in the corner: Na+ row (all clear, \"Group 1: soluble\"); CO3 2- column (white, Ag+ pale yellow, Na+ clear: \"carbonates: insoluble unless Group 1\"); Ag+ and Pb2+ with Cl- and I- (\"halides: except Ag+, Pb2+\"; PbCl2 white on \"lead gives\"); SO4 2- column (Ba2+, Pb2+ white, then Ca2+, Ag+ white on \"calcium and silver sulfate\": \"sulfates: except Ba2+, Pb2+; Ca2+, Ag+ slight\"), with a small unspoken tag \"PbCl2, CaSO4, Ag2SO4: slightly soluble, still solid here\"; OH- column (Ag+ brown, Pb2+ white, Ca2+ white, Ba2+ clear: \"hydroxides: insoluble, except Group 1 and Ba2+\"). The painted tubes `m5x-ppt-agcl-white-v1.png` and `m5x-ppt-pbi2-yellow-v1.png` stand small at the side for the two syllabus solids. A chip \"expected, at 0.1 mol/L; your results are the test\" sits under the plate.",
        [
            "chip pop",
            "table build"
        ],
        "Hold 2 seconds"
    ],
    'results-to-rules': [
        "new",
        "On \"along each row\" a pen bracket runs along the Na+ row; on \"down each column\" another runs down the CO3 2- column.",
        "Explains why untested rules are not your conclusion: no evidence from this experiment.",
        "along each row / down each column / evidence",
        "On the spoken cues: The rule-with-evidence card writes in the right zone, two filled examples: \"Rule: sodium compounds are soluble. Evidence: Na+ row, 5 of 5 clear. Exceptions: none seen.\" and \"Rule: carbonates are insoluble except with Na+. Evidence: CO3 2- column, 4 of 5 solid;",
        "explain",
        "on \"along each row\" a pen bracket runs along the Na+ row; on \"down each column\" another runs down the CO3 2- column. The rule-with-evidence card writes in the right zone, two filled examples: \"Rule: sodium compounds are soluble. Evidence: Na+ row, 5 of 5 clear. Exceptions: none seen.\" and \"Rule: carbonates are insoluble except with Na+. Evidence: CO3 2- column, 4 of 5 solid; Na+ clear.\" On \"ammonium or acetate\" a separate grey box writes: \"Not tested here: ammonium, acetate, nitrate as a test ion. Source: reference table.\" with a pen tag \"not my conclusion\".",
        [
            "HandText write-on",
            "DrawPath",
            "table build"
        ],
        "Hold 2 seconds"
    ],
    'test-predictions': [
        "new",
        "The predict-then-observe overlay: each cell shows its pen prediction over the well; matches get a small teal tick, mismatches a pen ring.",
        "Explains why a mismatch must be classified: it is either the rule or the technique.",
        "rule you had wrong / technique problem / slightly soluble / repeat",
        "On the spoken cues: The mismatch sorter writes in the right zone with two bins: \"rule wrong\" and \"technique\". On \"barium hydroxide\" the Ba2+/OH- cell (predicted \"ppt\", observed clear) is ringed and flies into \"rule wrong\" with the tag \"exception: Ba(OH)2 soluble\".",
        "explain",
        "the predict-then-observe overlay: each cell shows its pen prediction over the well; matches get a small teal tick, mismatches a pen ring. The mismatch sorter writes in the right zone with two bins: \"rule wrong\" and \"technique\". On \"barium hydroxide\" the Ba2+/OH- cell (predicted \"ppt\", observed clear) is ringed and flies into \"rule wrong\" with the tag \"exception: Ba(OH)2 soluble\". On \"calcium sulfate\" the Ca2+/SO4 2- white well is ringed; on \"slightly soluble\" it gets a third label beside \"soluble\" and \"insoluble\", and the tag \"Ca2+ + SO4 2-: a white solid, a real result\". On \"dirty well\" a coded speck appears in a different well that should be clear; it goes into \"technique\", and on \"repeat\" a clean well beside it runs again and stays clear (teal tick).",
        [
            "HandText write-on",
            "ScribbleCircle",
            "tick"
        ],
        "Hold 2 seconds"
    ],
    'test-the-liquid': [
        "adjust",
        "The painted settled tube (`m5x-ppt-pbi2-yellow-v1.png`) centre; the C13 equation strip small: \"Pb2+(aq) + 2I-(aq) → PbI2(s)\".",
        "Explains why more solid in the test well shows the excess ion: the added ion found a partner still dissolved.",
        "lead ions / iodide",
        "On the spoken cues: On \"take some clear liquid\" the graduated pipette (`m5x-graduated-pipette-v1.png`) draws off the clear layer (coded level change) and empties it into two clean wells of the plate, labelled \"test A\" and \"test B\". On \"a drop of potassium iodide\" a dropper bottle labelled \"KI\" adds a coded drop to test A;",
        "explain",
        "the painted settled tube (`m5x-ppt-pbi2-yellow-v1.png`) centre; the C13 equation strip small: \"Pb2+(aq) + 2I-(aq) → PbI2(s)\". On \"take some clear liquid\" the graduated pipette (`m5x-graduated-pipette-v1.png`) draws off the clear layer (coded level change) and empties it into two clean wells of the plate, labelled \"test A\" and \"test B\". On \"a drop of potassium iodide\" a dropper bottle labelled \"KI\" adds a coded drop to test A; on \"lead ions\" a yellow cloud blooms (tag \"much more PbI2: plenty of Pb2+ left, so Pb(NO3)2 in excess\"). On \"a drop of lead nitrate\" the \"Pb(NO3)2\" bottle adds a drop to test B; on \"iodide\" the alternative shows (tag \"or much more here: I- left over, so KI in excess\"). A small rule chip: \"faint in both: neither in big excess\". The C13 composition card writes on \"spectators\": \"dissolved: K+, NO3- (spectators), plus the ion in excess\".",
        [
            "HandText write-on",
            "DrawPath",
            "chip pop",
            "drop fall"
        ],
        "Hold 2 seconds"
    ],
    'validity-reliability': [
        "new",
        "Three cards write in turn in the right zone, each with its plain question and this investigation's answer: \"Validity: does it test what it claims? One pair per well; always-soluble partners; stock check.\" (pen link to the grey Na+ and NO3- labels);",
        "Teaches: validity, reliability and accuracy.",
        "valid / reliable / accurate",
        "On the spoken cues: three cards write in turn in the right zone, each with its plain question and this investigation's answer: \"Validity: does it test what it claims? One pair per well; always-soluble partners; stock check.\" (pen link to the grey Na+ and NO3- labels); \"Reliability: same result on repeats? Repeat doubtful cells;",
        "explain",
        "three cards write in turn in the right zone, each with its plain question and this investigation's answer: \"Validity: does it test what it claims? One pair per well; always-soluble partners; stock check.\" (pen link to the grey Na+ and NO3- labels); \"Reliability: same result on repeats? Repeat doubtful cells; compare groups.\" (two coded well rows matching); \"Accuracy: observations match what's really there? Black background, clean wells, fresh solutions, compare with accepted results.\" (the black card half pulses).",
        [
            "HandText write-on"
        ],
        "Hold 2 seconds"
    ],
    'risk-assessment': [
        "adjust",
        "The risk table writes in the right zone, three columns \"Hazard / Harm / Control\", one row per cue, each hazard cell with its dropper bottle and coded label: lead nitrate: \"toxic; builds up in the body; may harm an unborn baby; eye damage\" / \"drops only, gloves, glasses, wash hands;",
        "Explains why microscale is a safety control: smaller amounts, smaller exposure and waste.",
        "Lead nitrate / Silver nitrate / Barium nitrate / Sodium hydroxide",
        "On the spoken cues: Glasses and gloves plates (`m5x-safety-glasses-v1.png`, `m5x-gloves-v1.png`) at the table head under \"always\". On \"heavy-metal container\" the waste bottle (`m5x-waste-bottle-v1.png`) with a coded label \"heavy-metal waste: Pb, Ag, Ba\" and a crossed sink icon.",
        "explain",
        "the risk table writes in the right zone, three columns \"Hazard / Harm / Control\", one row per cue, each hazard cell with its dropper bottle and coded label: lead nitrate: \"toxic; builds up in the body; may harm an unborn baby; eye damage\" / \"drops only, gloves, glasses, wash hands; follow school rules (some schools use a teacher demo or supplied results)\"; silver nitrate: \"stains skin; damages eyes\" / \"gloves, glasses\"; barium nitrate: \"harmful if swallowed\" / \"no mouth pipetting, wash hands\"; sodium hydroxide (and sodium carbonate): \"eye damage or irritation\" / \"glasses\". Glasses and gloves plates (`m5x-safety-glasses-v1.png`, `m5x-gloves-v1.png`) at the table head under \"always\". On \"heavy-metal container\" the waste bottle (`m5x-waste-bottle-v1.png`) with a coded label \"heavy-metal waste: Pb, Ag, Ba\" and a crossed sink icon. On \"tiny amounts\" the well plate pulses beside a ghost test tube (tag \"microscale: less exposure, less waste\"). Footer chip: \"follow your school's risk assessment and your teacher's method\".",
        [
            "HandText write-on",
            "Mark cross",
            "chip pop",
            "table build",
            "drop fall"
        ],
        "Hold 3 seconds (reading hold; the table returns in the key notes)"
    ],
    'memory-aid': [
        "new",
        "Aid 1 writes large and handwritten with the greyed Na+ and NO3- labels and one amber pair: \"Partners that always dissolve: any solid is the pair you're testing.\" Aid 2 writes beneath as a three-step strip with icons (pen grid, dropper, sorter bins): \"Predict first. Test.",
        "Gives reusable memory aids after the causes have been explained; each aid is checked in the design.",
        "Partners that always dissolve, so any solid is the pair you're testing. / predict first, then test, then explain every mismatch.",
        "On the spoken cues: aid 1 writes large and handwritten with the greyed Na+ and NO3- labels and one amber pair: \"Partners that always dissolve: any solid is the pair you're testing.\" Aid 2 writes beneath as a three-step strip with icons (pen grid, dropper, sorter bins): \"Predict first. Test.",
        "explain",
        "aid 1 writes large and handwritten with the greyed Na+ and NO3- labels and one amber pair: \"Partners that always dissolve: any solid is the pair you're testing.\" Aid 2 writes beneath as a three-step strip with icons (pen grid, dropper, sorter bins): \"Predict first. Test. Explain every mismatch.\" Condition tag: \"same concentration and drops in every well; repeat anything doubtful\".",
        [
            "HandText write-on",
            "drop fall"
        ],
        "Hold 2 seconds"
    ],
    'attempt-1': [
        "adjust",
        "The board clears. The settled white tube (`m5x-ppt-agcl-white-v1.png`; build check: the plate must show settled solid under clear liquid, otherwise use the coded tube with a settled white layer) and one test well over the black card with a fresh white cloud.",
        "Unseen transfer task with every condition on screen: \"Which ions were in that clear liquid?\"",
        "Your turn. Potassium chloride solution is mixed with silver nitrate solution, and a",
        "The question card builds with every given visible and stays on screen; no answer cues appear; the countdown ring runs for 10 seconds after \"Pause here to answer.\" (The board clears. The settled white tube (`m5x-ppt-agcl-white-v1.png`; build check: the plate must show settled solid under clear liquid, ot)",
        "explain",
        "The board clears and the question builds as each given is named; the demands stay on screen; the countdown ring starts after the narration. The settled white tube (`m5x-ppt-agcl-white-v1.png`; build check: the plate must show settled solid under clear liquid, otherwise use the coded tube with a settled white layer) and one test well over the black card with a fresh white cloud. Givens card: \"potassium chloride + silver nitrate → white solid, settled\", \"clear liquid + 1 drop of potassium chloride → more white solid\".",
        [
            "ScribbleCircle",
            "drop fall",
            "Countdown ring"
        ],
        "10 second answer-free countdown after \"Pause here to answer.\""
    ],
    'feedback-1': [
        "adjust",
        "The composition card fills: \"dissolved: K+, NO3- (spectators), Ag+ (excess)\" with grey spectator tags and an amber \"excess\" tag on Ag+.",
        "Brief feedback: the answer, the key reason and one crossed classic mistake for 1 (owner rule, 16 October).",
        "Potassium, nitrate, and leftover silver ions.",
        "On the spoken cues: The C13 equation strip writes small: \"Ag+(aq) + Cl-(aq) → AgCl(s)\". Answer chip \"K+, NO3-, leftover Ag+\" pins. On \"It's not chloride\" a chip \"Cl- left over\" fades in and is crossed (caption \"if Cl- were in excess, almost no Ag+ would be left\").",
        "explain",
        "the composition card fills: \"dissolved: K+, NO3- (spectators), Ag+ (excess)\" with grey spectator tags and an amber \"excess\" tag on Ag+. The C13 equation strip writes small: \"Ag+(aq) + Cl-(aq) → AgCl(s)\". Answer chip \"K+, NO3-, leftover Ag+\" pins. On \"It's not chloride\" a chip \"Cl- left over\" fades in and is crossed (caption \"if Cl- were in excess, almost no Ag+ would be left\").",
        [
            "HandText write-on",
            "AgCl",
            "Mark cross",
            "chip pop"
        ],
        "Hold 1 second"
    ],
    'attempt-2': [
        "new",
        "Two coded well-plate strips side by side labelled \"group 1: white solid\" and \"group 2: no precipitate\", same Ca2+/SO4 2- cell ringed in each.",
        "Unseen transfer task with every condition on screen: attempt 2 (countdown, 10 seconds)",
        "Last one. Two groups mix calcium nitrate with sodium",
        "The question card builds with every given visible and stays on screen; no answer cues appear; the countdown ring runs for 10 seconds after \"Pause here to answer.\" (Two coded well-plate strips side by side labelled \"group 1: white solid\" and \"group 2: no precipitate\", same Ca2+/SO4 2- cell ringed i)",
        "explain",
        "The board clears and the question builds as each given is named; the demands stay on screen; the countdown ring starts after the narration. Givens card: \"calcium nitrate + sodium sulfate\", the two records. Two numbered demands: \"1. Explain how both results could happen.\" \"2. How would you make the result more reliable?\" Countdown ring for 10 seconds with \"Pause here to answer.\" Nothing answer-bearing: no \"slightly soluble\" label, no black card.",
        [
            "ScribbleCircle",
            "Countdown ring"
        ],
        "10 second answer-free countdown after \"Pause here to answer.\""
    ],
    'feedback-2': [
        "adjust",
        "The \"slightly soluble\" third label from scene 7 returns over the cell.",
        "Brief feedback: the answer, the key reason and one crossed classic mistake for 2 (owner rule, 16 October).",
        "slightly soluble / repeat",
        "On the spoken cues: Answer chip 1: \"CaSO4 slightly soluble: needs enough ions, can form slowly.\" On \"repeat\" three clean wells run with matched drop counters and a black card under them; all three show the same white solid; answer chip 2: \"repeat in clean wells: same stocks, drops, time; over black\".",
        "explain",
        "the \"slightly soluble\" third label from scene 7 returns over the cell. Answer chip 1: \"CaSO4 slightly soluble: needs enough ions, can form slowly.\" A line on \"not waiting long\": \"weaker stock or recorded too early: no precipitate\"; then \"a dirty well can fake a cloud\". On \"repeat\" three clean wells run with matched drop counters and a black card under them; all three show the same white solid; answer chip 2: \"repeat in clean wells: same stocks, drops, time; over black\". On \"Don't just\" a chip \"one group made a mistake, ignore it\" fades in and is crossed (caption \"find the cause, then repeat\").",
        [
            "Mark cross",
            "chip pop",
            "drop fall"
        ],
        "Hold 1 second"
    ],
    'decision-rule': [
        "adjust",
        "The plan card writes, each line lighting on its words: \"Always-soluble partners (nitrates, sodium salts); check each stock alone.\" \"Predict all 25 first.\" \"3 drops + 3 drops; tip out of the well.\" \"View over black and white.\" \"Repeat doubtful cells.\" \"Rule + evidence + exceptions;",
        "Packs the method into reusable lines and hands off to the next video.",
        "Next",
        "On the spoken cues: the plan card writes, each line lighting on its words: \"Always-soluble partners (nitrates, sodium salts); check each stock alone.\" \"Predict all 25 first.\" \"3 drops + 3 drops; tip out of the well.\" \"View over black and white.\" \"Repeat doubtful cells.\" \"Rule + evidence + exceptions;",
        "explain",
        "the plan card writes, each line lighting on its words: \"Always-soluble partners (nitrates, sodium salts); check each stock alone.\" \"Predict all 25 first.\" \"3 drops + 3 drops; tip out of the well.\" \"View over black and white.\" \"Repeat doubtful cells.\" \"Rule + evidence + exceptions; untested rules from the table.\" \"Every mismatch: rule wrong or technique?\" On \"Next\" a chip \"Next: Ksp, how slightly soluble?\" appears with `m5x-saturated-beaker-v1.png` small.",
        [
            "HandText write-on",
            "chip pop",
            "table build",
            "drop fall"
        ],
        "Hold 2 seconds"
    ],
    'key-notes': [
        "new",
        "Key notes card with the numbered notes, the memory aids in large writing and the condition tag",
        "Essentials to copy into books",
        "key notes",
        "Notes appear then stay still for copying",
        "hold",
        "The notes and the memory aids appear and lock",
        [
            "Enter reveals"
        ],
        "Quiet copy hold of about 60 seconds with pause invitation"
    ],
}

M6C01_ROWS = {
    "hook": [
        "adjust",
        "`m6-household-cleaner-bottle-v1.png` stands left with a coded tag \"ammonia cleaner\"; on a white tile beside it the new red litmus strip plate (`m6-litmus-red-v1.png`); on \"blue\" a 1 second crossfade to `m6-litmus-blue-v1.png` (aligned pair).",
        "Hook (a base with no hydroxide): Here's a bottle of household ammonia cleaner.",
        "blue / N H three",
        "On the spoken cues: Heading writes: \"A base with no hydroxide?\" On \"N H three\" a coded ball-and-stick NH₃ molecule (one blue N, three white H) rises beside the bottle; a pen ring searches it and a chip \"OH⁻?\" fades in and is crossed (caption \"no O at all\"). On \"supply its own hydroxide\" a grey card \"base = makes its own OH⁻\" slides in at the top. Hold about 1 second.",
        "explain",
        "`m6-household-cleaner-bottle-v1.png` stands left with a coded tag \"ammonia cleaner\"; on a white tile beside it the new red litmus strip plate (`m6-litmus-red-v1.png`); on \"blue\" a 1 second crossfade to `m6-litmus-blue-v1.png` (aligned pair). Heading writes: \"A base with no hydroxide?\" On \"N H three\" a coded ball-and-stick NH₃ molecule (one blue N, three white H) rises beside the bottle; a pen ring searches it and a chip \"OH⁻?\" fades in and is crossed (caption \"no O at all\"). On \"supply its own hydroxide\" a grey card \"base = makes its own OH⁻\" slides in at the top. Hold about 1 second.",
        [
            "HandText write-on",
            "Mark cross",
            "ScribbleCircle",
            "Enter slide",
            "Plate crossfade",
            "chip pop",
            "tick",
            "Plate"
        ],
        "Hold about 1 second"
    ],
    "models-change": [
        "new",
        "the timeline band draws across the top with four empty dated slots: \"1770s\", \"1810s\", \"1880s\", \"1923\".",
        "How models change: To answer that, follow how the idea changed.",
        "can't explain",
        "On the spoken cues: Under it a small loop diagram writes: \"model predicts\" → \"observation\" → \"fits? keep\" / \"can't explain? replace\". On \"can't explain\" the \"replace\" branch lights amber. On \"three times\" three small amber arrows appear between the four slots.",
        "explain",
        "the timeline band draws across the top with four empty dated slots: \"1770s\", \"1810s\", \"1880s\", \"1923\". Under it a small loop diagram writes: \"model predicts\" → \"observation\" → \"fits? keep\" / \"can't explain? replace\". On \"can't explain\" the \"replace\" branch lights amber. On \"three times\" three small amber arrows appear between the four slots. Hold about 1 second.",
        [
            "HandText write-on",
            "Mark cross",
            "DrawPath"
        ],
        "Hold about 1 second"
    ],
    "lavoisier": [
        "new",
        "name card fills slot 1: \"Antoine Lavoisier, Paris, 1770s: acids contain oxygen\" (text only).",
        "Lavoisier (acids contain oxygen): In the late seventeen hundreds, Antoine Lavoisier studied sulfuric, nitric and phosphoric acid.",
        "oxygen / acid maker / No oxygen",
        "On the spoken cues: Main zone: three coded formula tiles H₂SO₄, HNO₃, H₃PO₄; on \"oxygen\" every O in them glows red. On \"acid maker\" a word tile \"oxy + gen = acid + maker (Greek)\" writes under the card. On \"hydrochloric acid\" a fourth tile \"HCl\" slides in; on \"No oxygen\" a pen ring finds no O and the card gets an amber stamp \"broken by: HCl\".",
        "explain",
        "name card fills slot 1: \"Antoine Lavoisier, Paris, 1770s: acids contain oxygen\" (text only). Main zone: three coded formula tiles H₂SO₄, HNO₃, H₃PO₄; on \"oxygen\" every O in them glows red. On \"acid maker\" a word tile \"oxy + gen = acid + maker (Greek)\" writes under the card. On \"hydrochloric acid\" a fourth tile \"HCl\" slides in; on \"No oxygen\" a pen ring finds no O and the card gets an amber stamp \"broken by: HCl\". Hold about 1 second.",
        [
            "HandText write-on",
            "ScribbleCircle",
            "Enter slide"
        ],
        "Hold about 1 second"
    ],
    "davy": [
        "new",
        "slot 2 fills: \"Humphry Davy, London, 1810s: acids contain hydrogen\".",
        "Davy (acids contain hydrogen): So Davy proposed that hydrogen, not oxygen, is the key ingredient in acids.",
        "hydrogen / Methane / bases",
        "On the spoken cues: The four acid tiles return with every H glowing teal. On \"Methane\" a coded CH₄ molecule appears with four H atoms glowing and a tag \"not acidic\"; a pen bracket joins it to the HCl tile with \"both have H\". On \"bases\" a dashed empty box \"base = ?\" appears beside the card.",
        "explain",
        "slot 2 fills: \"Humphry Davy, London, 1810s: acids contain hydrogen\". The four acid tiles return with every H glowing teal. On \"Methane\" a coded CH₄ molecule appears with four H atoms glowing and a tag \"not acidic\"; a pen bracket joins it to the HCl tile with \"both have H\". On \"bases\" a dashed empty box \"base = ?\" appears beside the card. The card gets its stamp \"limit: hydrogen alone does not identify an acid; no base definition\". Hold about 1 second.",
        [
            "Enter reveals"
        ],
        "Hold about 1 second"
    ],
    "arrhenius": [
        "adjust",
        "slot 3 fills: \"Svante Arrhenius, Sweden, 1880s: acid releases H⁺ in water; base releases its own OH⁻\".",
        "Arrhenius (ions in water): In the eighteen eighties, Svante Arrhenius brought in ions.",
        "hydrogen ions / hydroxide ions / water / same ion",
        "On the spoken cues: Main zone: a beaker outline (`m6-beaker-v1.png`) with a particle lens. On \"hydrogen ions\" the equation strip writes \"HCl(g) → H⁺(aq) + Cl⁻(aq)\" (tag \"in water\") and teal H⁺ tokens appear in the lens; on \"hydroxide ions\" a second line \"NaOH(s) → Na⁺(aq) + OH⁻(aq)\" writes and violet OH⁻ tokens enter the lens, each leaving its own NaOH formula unit. On \"water\" an H⁺ and an OH⁻ meet in the lens and snap into a pale blue ",
        "explain",
        "slot 3 fills: \"Svante Arrhenius, Sweden, 1880s: acid releases H⁺ in water; base releases its own OH⁻\". Main zone: a beaker outline (`m6-beaker-v1.png`) with a particle lens. On \"hydrogen ions\" the equation strip writes \"HCl(g) → H⁺(aq) + Cl⁻(aq)\" (tag \"in water\") and teal H⁺ tokens appear in the lens; on \"hydroxide ions\" a second line \"NaOH(s) → Na⁺(aq) + OH⁻(aq)\" writes and violet OH⁻ tokens enter the lens, each leaving its own NaOH formula unit. On \"water\" an H⁺ and an OH⁻ meet in the lens and snap into a pale blue H₂O; the line \"H⁺ + OH⁻ → H₂O\" writes with the tag \"neutralisation\". On \"same ion\" HCl, HNO₃ and H₂SO₄ tiles each release a teal H⁺ token, bracketed \"all give H⁺\". Hold about 1 second.",
        [
            "HandText write-on",
            "token flight",
            "Cam lens zoom",
            "Plate"
        ],
        "Hold about 1 second"
    ],
    "arrhenius-ammonia": [
        "adjust",
        "a teal tick \"still works: acids and hydroxide bases in water\" pins under the Arrhenius card.",
        "Arrhenius and ammonia (a made-up compound): And the Arrhenius model still works for acids and hydroxide bases in water.",
        "its own / ammonium hydroxide / made-up compound",
        "On the spoken cues: Split panel: left, NaOH tile releasing its own OH⁻ token (arrow out of the formula, tag \"its own OH⁻\"); right, the NH₃ molecule with no OH to release (empty arrow, \"?\"). `m5x-ammonia-bottle-v1.png` stands under the right panel with label \"ammonia solution, NH₃(aq)\". On \"ammonium hydroxide\" a grey tile \"NH₄OH\" is stamped onto the bottle label; on \"made-up compound\" it gets a dashed outline and the tag \"never isolated\"",
        "explain",
        "a teal tick \"still works: acids and hydroxide bases in water\" pins under the Arrhenius card. Split panel: left, NaOH tile releasing its own OH⁻ token (arrow out of the formula, tag \"its own OH⁻\"); right, the NH₃ molecule with no OH to release (empty arrow, \"?\"). `m5x-ammonia-bottle-v1.png` stands under the right panel with label \"ammonia solution, NH₃(aq)\". On \"ammonium hydroxide\" a grey tile \"NH₄OH\" is stamped onto the bottle label; on \"made-up compound\" it gets a dashed outline and the tag \"never isolated\", and a chip \"Arrhenius was wrong\" fades in and is crossed (caption \"limited, not wrong\"). Hold about 1 second.",
        [
            "Mark cross",
            "token flight",
            "DrawPath",
            "chip pop",
            "tick",
            "Plate"
        ],
        "Hold about 1 second"
    ],
    "more-failures": [
        "adjust",
        "`m6-baking-soda-box-v1.png` left with tiles \"NaHCO₃\" and \"Na₂CO₃\", each ringed \"no OH⁻\" and a tag \"solution: basic\".",
        "Two more failures (carbonates, and no water): Two more problems piled up.",
        "Baking soda / white ring / water",
        "On the spoken cues: On \"white ring\" the main zone shows the new tube plate pair: `m6-nh4cl-tube-clear-v1.png` crossfading to `m6-nh4cl-tube-ring-v1.png` (interim until painted: a coded horizontal tube with drifting dots meeting as a white band); end tags \"HCl(g)\" and \"NH₃(g)\"; the ring is ringed with \"NH₄Cl(s)\". On \"water\" a tag \"gas reaction: no aqueous reaction medium\" pins to the tube (no crossed droplet: the cotton wool is wet) and ",
        "explain",
        "`m6-baking-soda-box-v1.png` left with tiles \"NaHCO₃\" and \"Na₂CO₃\", each ringed \"no OH⁻\" and a tag \"solution: basic\". On \"white ring\" the main zone shows the new tube plate pair: `m6-nh4cl-tube-clear-v1.png` crossfading to `m6-nh4cl-tube-ring-v1.png` (interim until painted: a coded horizontal tube with drifting dots meeting as a white band); end tags \"HCl(g)\" and \"NH₃(g)\"; the ring is ringed with \"NH₄Cl(s)\". On \"water\" a tag \"gas reaction: no aqueous reaction medium\" pins to the tube (no crossed droplet: the cotton wool is wet) and the Arrhenius card's stamp completes: \"limits: NH₃, carbonates, reactions not in aqueous solution\". Hold about 1 second.",
        [
            "Mark cross",
            "ScribbleCircle",
            "Plate"
        ],
        "Hold about 1 second"
    ],
    "bronsted-lowry": [
        "new",
        "slot 4 fills with two linked cards: \"Johannes Brønsted, Copenhagen, 1923\" and \"Thomas Lowry, Cambridge, 1923\", joined by a bracket \"independently\".",
        "Brønsted and Lowry (donate and accept a proton): In 1923, two chemists, Johannes Brønsted in Copenhagen and Thomas Lowry in Cambridge, independently published the same fix.",
        "moves / proton donor / proton acceptor / proton",
        "On the spoken cues: The definition card writes: \"Acid: proton (H⁺) donor. Base: proton (H⁺) acceptor. Any reaction, water or not.\" On \"moves\" a teal token travels from an amber-outlined box \"acid\" to a violet-outlined box \"base\".",
        "explain",
        "slot 4 fills with two linked cards: \"Johannes Brønsted, Copenhagen, 1923\" and \"Thomas Lowry, Cambridge, 1923\", joined by a bracket \"independently\". The definition card writes: \"Acid: proton (H⁺) donor. Base: proton (H⁺) acceptor. Any reaction, water or not.\" On \"moves\" a teal token travels from an amber-outlined box \"acid\" to a violet-outlined box \"base\". On \"proton\" a coded hydrogen atom (one proton, one electron dot) loses its electron dot, leaving the teal token, tagged \"H atom − electron = H⁺ = proton\". Hold about 1 second.",
        [
            "HandText write-on",
            "token flight"
        ],
        "Hold about 1 second"
    ],
    "hcl-water": [
        "new",
        "the timeline dims to a strip.",
        "Hydrogen chloride in water (hydronium): Watch it work.",
        "acid / base / H three O plus / attached to water",
        "On the spoken cues: Particle lens: an HCl molecule beside a pale blue H₂O; on \"moves\" the teal H token hops from Cl to the water O (pen arrow), Cl gains a \"−\" and the water becomes H₃O⁺ with a \"+\". On \"acid\" HCl gets an amber outline and tag \"donor\"; on \"base\" water gets a violet outline and tag \"acceptor\". The equation strip writes: \"HCl(g) + H₂O(l) → H₃O⁺(aq) + Cl⁻(aq)\" with amber and violet underlines matching.",
        "explain",
        "the timeline dims to a strip. Particle lens: an HCl molecule beside a pale blue H₂O; on \"moves\" the teal H token hops from Cl to the water O (pen arrow), Cl gains a \"−\" and the water becomes H₃O⁺ with a \"+\". On \"acid\" HCl gets an amber outline and tag \"donor\"; on \"base\" water gets a violet outline and tag \"acceptor\". The equation strip writes: \"HCl(g) + H₂O(l) → H₃O⁺(aq) + Cl⁻(aq)\" with amber and violet underlines matching. On \"H three O plus\" the label \"hydronium ion\" writes under H₃O⁺. On \"attached to water\" the \"hydronium ion\" label dims and a small chip \"H⁺(aq) = H₃O⁺(aq)\" pins; then the H⁺(aq) chip dims and beneath it a chip \"HCl → H⁺ + Cl⁻ (for a Brønsted-Lowry answer)\" fades in and is crossed (caption \"show the water\"). Hold about 1 second.",
        [
            "HandText write-on",
            "Mark cross",
            "Mark underline",
            "token flight",
            "Cam lens zoom",
            "DrawPath",
            "chip pop"
        ],
        "Hold about 1 second"
    ],
    "ammonia-water": [
        "new",
        "lens: NH₃ beside H₂O.",
        "Ammonia in water (where the hydroxide comes from): Now the hook.",
        "water / ammonium ion / hydroxide ion / comes from water / double arrow / accepts a proton",
        "On the spoken cues: On \"water is the donor\" the water gets an amber outline; the teal H token hops from the water to N (pen arrow). On \"ammonium ion\" NH₃ becomes NH₄⁺ with a violet outline; on \"hydroxide ion\" the remaining OH⁻ is ringed with the tag \"left from water\". The equation strip writes: \"NH₃(aq) + H₂O(l) ⇌ NH₄⁺(aq) + OH⁻(aq)\".",
        "explain",
        "lens: NH₃ beside H₂O. On \"water is the donor\" the water gets an amber outline; the teal H token hops from the water to N (pen arrow). On \"ammonium ion\" NH₃ becomes NH₄⁺ with a violet outline; on \"hydroxide ion\" the remaining OH⁻ is ringed with the tag \"left from water\". The equation strip writes: \"NH₃(aq) + H₂O(l) ⇌ NH₄⁺(aq) + OH⁻(aq)\". On \"comes from water\" a pen arrow runs from the H₂O on the left to the OH⁻ on the right. On \"double arrow\" the ⇌ pulses with a callback tag \"Module 5: reversible, at equilibrium\" and the lens shows most NH₃ unchanged with a few NH₄⁺. On \"accepts a proton\" the hook's NH₃ molecule and blue litmus return small with the tag \"base: proton acceptor\". Hold about 1 second.",
        [
            "HandText write-on",
            "ScribbleCircle",
            "token flight",
            "Cam lens zoom",
            "DrawPath"
        ],
        "Hold about 1 second"
    ],
    "gas-carbonate": [
        "new",
        "the tube plate returns small top-right.",
        "The gas tube and carbonate, solved: The other two problems fall the same way.",
        "directly / carbonate ion / proton acceptors",
        "On the spoken cues: Lens: an HCl molecule meets an NH₃ molecule with no water present (tag \"gas reaction, no aqueous medium\"); on \"directly\" the teal token hops from HCl to NH₃; the products NH₄⁺ and Cl⁻ settle into a small white lattice. The strip writes: \"HCl(g) + NH₃(g) → NH₄Cl(s)\" with the tag \"ions packed in the solid\". On \"carbonate ion\" a second strip writes under it: \"CO₃²⁻(aq) + H₂O(l) ⇌ HCO₃⁻(aq) + OH⁻(aq)\" with the token hopp",
        "explain",
        "the tube plate returns small top-right. Lens: an HCl molecule meets an NH₃ molecule with no water present (tag \"gas reaction, no aqueous medium\"); on \"directly\" the teal token hops from HCl to NH₃; the products NH₄⁺ and Cl⁻ settle into a small white lattice. The strip writes: \"HCl(g) + NH₃(g) → NH₄Cl(s)\" with the tag \"ions packed in the solid\". On \"carbonate ion\" a second strip writes under it: \"CO₃²⁻(aq) + H₂O(l) ⇌ HCO₃⁻(aq) + OH⁻(aq)\" with the token hopping from water to carbonate and the OH⁻ ringed \"left from water\". On \"proton acceptors\" NH₃ and CO₃²⁻ get matching violet outlines and one bracket \"both: proton acceptors\". Hold about 1 second.",
        [
            "HandText write-on",
            "ScribbleCircle",
            "token flight",
            "Cam lens zoom"
        ],
        "Hold about 1 second"
    ],
    "follow-proton": [
        "new",
        "the two water equations from 9 and 10 stack.",
        "Roles, not labels (follow the proton): Notice what water did.",
        "accepted / gave / roles / loses / gains",
        "On the spoken cues: In the first, H₂O has a violet outline and tag \"base here\"; in the second, an amber outline and \"acid here\"; a pen bracket links the two H₂O with \"same molecule, different role\". On \"follow the proton\" the rule card writes: \"Follow the proton: loses H⁺ = acid; gains H⁺ = base.\" Each equation gets a pen check: in each, the species that lost an H and dropped one charge gets a teal \"−H⁺\", the one that gained gets \"+H⁺\".",
        "explain",
        "the two water equations from 9 and 10 stack. In the first, H₂O has a violet outline and tag \"base here\"; in the second, an amber outline and \"acid here\"; a pen bracket links the two H₂O with \"same molecule, different role\". On \"follow the proton\" the rule card writes: \"Follow the proton: loses H⁺ = acid; gains H⁺ = base.\" Each equation gets a pen check: in each, the species that lost an H and dropped one charge gets a teal \"−H⁺\", the one that gained gets \"+H⁺\". A chip \"has H in its formula = acid\" fades in and is crossed (caption \"giving one away does\"). As the rule card finishes, a small chip \"Later: water and other species that can do both\" pins in the corner (screen only). Hold about 2 seconds.",
        [
            "HandText write-on",
            "Mark cross",
            "chip pop"
        ],
        "Hold about 2 seconds"
    ],
    "bl-limit": [
        "new",
        "the timeline strip brightens.",
        "Brønsted-Lowry has a limit too: Even this model has a limit.",
        "hydrogen atom / Lewis model",
        "On the spoken cues: The strip writes: \"CaO(s) + SO₃(g) → CaSO₄(s)\" with a tag \"heated; salt forms\"; on \"base and an acid\" two small grey tags appear under the reactants: \"in water: Ca(OH)₂, a base\" and \"in water: H₂SO₄, an acid\". On \"hydrogen atom\" a pen ring sweeps both reactants and finds no H; a grey teal-token outline with a cross shows \"no proton to move\". The Brønsted-Lowry card gets its stamp \"limit: needs a proton to transfer\".",
        "explain",
        "the timeline strip brightens. The strip writes: \"CaO(s) + SO₃(g) → CaSO₄(s)\" with a tag \"heated; salt forms\"; on \"base and an acid\" two small grey tags appear under the reactants: \"in water: Ca(OH)₂, a base\" and \"in water: H₂SO₄, an acid\". On \"hydrogen atom\" a pen ring sweeps both reactants and finds no H; a grey teal-token outline with a cross shows \"no proton to move\". The Brønsted-Lowry card gets its stamp \"limit: needs a proton to transfer\". On \"Lewis model\" a small grey card at the far right of the timeline: \"Lewis model (beyond the course)\". As the sentence ends, the equation shrinks to the strip and all four cards show their stamps together. Hold about 2 seconds.",
        [
            "HandText write-on",
            "Mark cross",
            "ScribbleCircle",
            "token flight"
        ],
        "Hold about 2 seconds"
    ],
    "memory-aid": [
        "new",
        "the timeline returns full size with each card's stamp lighting in turn on \"Oxygen\", \"Hydrogen\" and \"Ions in water\".",
        "Memory aid: So here's how to remember it.",
        "each model fixed a failure of the one before / acid gives, base takes / couldn't",
        "On the spoken cues: The first aid writes large and handwritten: \"Each model fixed a failure of the one before.\" On \"acid gives, base takes\" a second line writes with the teal token hopping from an amber \"gives\" box to a violet \"takes\" box. On \"couldn't\" a two-column frame writes: \"explained ... | couldn't explain ...\". Condition tag: \"gives and takes a proton (H⁺)\".",
        "explain",
        "the timeline returns full size with each card's stamp lighting in turn on \"Oxygen\", \"Hydrogen\" and \"Ions in water\". The first aid writes large and handwritten: \"Each model fixed a failure of the one before.\" On \"acid gives, base takes\" a second line writes with the teal token hopping from an amber \"gives\" box to a violet \"takes\" box. On \"couldn't\" a two-column frame writes: \"explained ... | couldn't explain ...\". Condition tag: \"gives and takes a proton (H⁺)\". Hold about 2 seconds.",
        [
            "HandText write-on",
            "token flight",
            "table build"
        ],
        "Hold about 2 seconds"
    ],
    "attempt-1": [
        "new",
        "the board clears.",
        "Unseen transfer task (attempt 1 (countdown, 10 seconds)) with every given and demand on screen, a 10 second countdown and no answer cues.",
        "Your turn. The equation shows the hydrogen carbonate",
        "The question card builds with every given visible and stays on screen; no answer cues appear; the countdown ring runs for 10 seconds after \"Pause here to answer.\" (attempt 1 (countdown, 10 seconds))",
        "explain",
        "the board clears. Question card, worded as printed: \"The equation shows the reaction of the hydrogen carbonate ion with water. HCO₃⁻(aq) + H₂O(l) ⇌ H₂CO₃(aq) + OH⁻(aq). Identify the Brønsted-Lowry acid and the Brønsted-Lowry base in the forward reaction. Justify your answer in terms of proton transfer.\" The full question stays on screen. Countdown ring for 10 seconds with \"Pause here to answer.\" Nothing answer-bearing: no outlines, no tokens, no rule card.",
        [
            "token flight",
            "Countdown ring"
        ],
        "10 second answer-free countdown after \"Pause here to answer.\"; the card stays on screen"
    ],
    "feedback-1": [
        "new",
        "the question card stays.",
        "Brief feedback (feedback 1 (brief)): the answer, the key reason with the givens underlined, and one crossed classic mistake (owner rule, 16 October).",
        "Water / lost / hydrogen carbonate ion / gained / Giving one away",
        "On the spoken cues: On \"Water\" a pen underline runs under H₂O(l) and OH⁻(aq) in the equation, joined by an arrow tagged \"−H⁺\"; H₂O gets an amber outline and the answer chip \"Acid: H₂O (donates H⁺, becomes OH⁻)\" pins. On \"hydrogen carbonate ion\" an underline runs under HCO₃⁻(aq) and H₂CO₃(aq), arrow \"+H⁺\", violet outline, chip \"Base: HCO₃⁻ (accepts H⁺, becomes H₂CO₃)\". The teal token hops once from water to HCO₃⁻.",
        "explain",
        "the question card stays. On \"Water\" a pen underline runs under H₂O(l) and OH⁻(aq) in the equation, joined by an arrow tagged \"−H⁺\"; H₂O gets an amber outline and the answer chip \"Acid: H₂O (donates H⁺, becomes OH⁻)\" pins. On \"hydrogen carbonate ion\" an underline runs under HCO₃⁻(aq) and H₂CO₃(aq), arrow \"+H⁺\", violet outline, chip \"Base: HCO₃⁻ (accepts H⁺, becomes H₂CO₃)\". The teal token hops once from water to HCO₃⁻. On \"classic slip\" a chip \"HCO₃⁻ is the acid: it contains H\" fades in and is crossed (caption \"giving H⁺ away makes an acid\"). Hold about 1 second.",
        [
            "Mark cross",
            "Mark underline",
            "token flight",
            "DrawPath",
            "chip pop"
        ],
        "Hold about 1 second"
    ],
    "attempt-2": [
        "new",
        "question card: \"A student states: 'The Arrhenius model has been proved wrong, so it should no longer be used.' Assess the validity of this statement.",
        "Unseen transfer task (attempt 2 (countdown, 10 seconds)) with every given and demand on screen, a 10 second countdown and no answer cues.",
        "Last one. A student states: \"The Arrhenius model",
        "The question card builds with every given visible and stays on screen; no answer cues appear; the countdown ring runs for 10 seconds after \"Pause here to answer.\" (attempt 2 (countdown, 10 seconds))",
        "explain",
        "question card: \"A student states: 'The Arrhenius model has been proved wrong, so it should no longer be used.' Assess the validity of this statement. Refer to ammonia in your answer.\" The full question stays on screen. Countdown ring for 10 seconds with \"Pause here to answer.\" Nothing answer-bearing: the timeline is hidden.",
        [
            "Countdown ring"
        ],
        "10 second answer-free countdown after \"Pause here to answer.\"; the card stays on screen"
    ],
    "feedback-2": [
        "new",
        "on \"not valid\" the phrase \"proved wrong\" in the question is underlined and a verdict chip \"Not valid: limited, not wrong\" pins.",
        "Brief feedback (feedback 2 (brief)): the answer, the key reason with the givens underlined, and one crossed classic mistake (owner rule, 16 October).",
        "not valid / in water / ammonia / accepts a proton / limited",
        "On the spoken cues: On \"in water\" a teal tick chip \"explains: acids and OH⁻ bases in water (HCl, NaOH)\". On \"ammonia\" the word \"ammonia\" in the question is underlined; chip \"limitation: NH₃ has no OH⁻ of its own\". On \"accepts a proton\" the strip \"NH₃ + H₂O ⇌ NH₄⁺ + OH⁻\" writes small with the token hop.",
        "explain",
        "on \"not valid\" the phrase \"proved wrong\" in the question is underlined and a verdict chip \"Not valid: limited, not wrong\" pins. On \"in water\" a teal tick chip \"explains: acids and OH⁻ bases in water (HCl, NaOH)\". On \"ammonia\" the word \"ammonia\" in the question is underlined; chip \"limitation: NH₃ has no OH⁻ of its own\". On \"accepts a proton\" the strip \"NH₃ + H₂O ⇌ NH₄⁺ + OH⁻\" writes small with the token hop. On \"mistake\" a chip \"Arrhenius was proved wrong\" fades in and is crossed (caption \"write: limited\"). Hold about 1 second.",
        [
            "HandText write-on",
            "Mark cross",
            "Mark underline",
            "token flight",
            "chip pop",
            "tick"
        ],
        "Hold about 1 second"
    ],
    "decision-rule": [
        "adjust",
        "the question card writes, each line lighting on its words: \"Follow the proton: loses H⁺ = acid; gains H⁺ = base.\" \"Any medium, water or not.\" \"Judge a model: what it explained, then what broke it.\" On \"Next\" a chip \"Next: naming acids and bases, and predicting acid reaction products\" appears with `m5x-strong-acid-mg-v1.png` and `m6-baking-soda-box-v1.png` small.",
        "Decision rule and handoff: So whenever you meet a reaction, follow the proton: the species that loses one is the acid, and the one that gains it is the base, in water or not.",
        "Next",
        "On the spoken cues: Hold about 2 seconds.",
        "explain",
        "the question card writes, each line lighting on its words: \"Follow the proton: loses H⁺ = acid; gains H⁺ = base.\" \"Any medium, water or not.\" \"Judge a model: what it explained, then what broke it.\" On \"Next\" a chip \"Next: naming acids and bases, and predicting acid reaction products\" appears with `m5x-strong-acid-mg-v1.png` and `m6-baking-soda-box-v1.png` small. Hold about 2 seconds.",
        [
            "HandText write-on",
            "chip pop",
            "Plate"
        ],
        "Hold about 2 seconds"
    ],
    "key-notes": [
        "new",
        "Key notes card with the numbered notes, the memory aid in large writing and its condition tag",
        "Essentials to copy into books",
        "key notes",
        "Notes appear then stay still for copying",
        "hold",
        "The notes and the memory aid appear and lock",
        [
            "Enter reveals"
        ],
        "Quiet copy hold of about 60 seconds with pause invitation"
    ]
}

M6C02_ROWS = {
    "hook": [
        "adjust",
        "three plates in a row: `m5x-strong-acid-mg-v1.png`, the new `m6-marble-chips-acid-v1.png` (interim: coded marble chips with rising bubbles in the same beaker outline) and `m6-beaker-v1.png` with a coded label \"sodium hydroxide + hydrochloric acid\".",
        "Hook (one acid, three results): Add hydrochloric acid to three different things.",
        "magnesium / marble chips / sodium hydroxide",
        "On the spoken cues: Each pulses on its cue; on \"gets warm\" a small coded thermometer beside the third beaker rises. Heading writes: \"One acid, three results. What forms?\" Under each plate a question tile \"products?\" appears.",
        "explain",
        "three plates in a row: `m5x-strong-acid-mg-v1.png`, the new `m6-marble-chips-acid-v1.png` (interim: coded marble chips with rising bubbles in the same beaker outline) and `m6-beaker-v1.png` with a coded label \"sodium hydroxide + hydrochloric acid\". Each pulses on its cue; on \"gets warm\" a small coded thermometer beside the third beaker rises. Heading writes: \"One acid, three results. What forms?\" Under each plate a question tile \"products?\" appears. Hold about 1 second.",
        [
            "HandText write-on",
            "chip pop",
            "Plate"
        ],
        "Hold about 1 second"
    ],
    "binary-acids": [
        "new",
        "the naming card heading writes first: \"Common inorganic acids: binary and oxoacids\" (the oxoacid half stays grey until scene 3); then the card writes: \"Binary acid: H + one non-metal, no O.",
        "Binary acids (hydro- ... -ic): First, names.",
        "Binary acids / hydro / ic acid / hydrochloric acid / hydrosulfuric acid / hydrogen chloride",
        "On the spoken cues: Name: hydro + non-metal + ic acid.\" On \"hydro\" \"ic acid\" the template blocks colour (hydro teal, root grey, ic acid amber). Formula tiles fill a table on their cues: HCl → hydro|chlor|ic acid; HBr, HF; H₂S → hydro|sulfur|ic acid. On \"hydrogen chloride\" a small chip \"HCl(g): hydrogen chloride; HCl(aq): hydrochloric acid\" with the C01 tube plate thumbnail.",
        "explain",
        "the naming card heading writes first: \"Common inorganic acids: binary and oxoacids\" (the oxoacid half stays grey until scene 3); then the card writes: \"Binary acid: H + one non-metal, no O. Name: hydro + non-metal + ic acid.\" On \"hydro\" \"ic acid\" the template blocks colour (hydro teal, root grey, ic acid amber). Formula tiles fill a table on their cues: HCl → hydro|chlor|ic acid; HBr, HF; H₂S → hydro|sulfur|ic acid. On \"hydrogen chloride\" a small chip \"HCl(g): hydrogen chloride; HCl(aq): hydrochloric acid\" with the C01 tube plate thumbnail. Hold about 1 second.",
        [
            "HandText write-on",
            "chip pop",
            "table build"
        ],
        "Hold about 1 second"
    ],
    "oxoacids": [
        "new",
        "second naming card: \"Oxoacid: contains O.",
        "Oxoacids (-ate to -ic, -ite to -ous): Oxoacids contain oxygen too, and they're named after the ion inside them.",
        "Oxoacids / ion / ate / ic / ite / ous / never",
        "On the spoken cues: Name from the ion.\" Two columns build one row per cue; each earlier row dims to grey as the next starts, so only the current row is bright: \"-ate → -ic\": SO₄²⁻ sulfate → H₂SO₄ sulfuric acid; NO₃⁻ nitrate → HNO₃ nitric acid; PO₄³⁻ phosphate → H₃PO₄ phosphoric acid; CO₃²⁻ carbonate → H₂CO₃ carbonic acid. \"-ite → -ous\": SO₃²⁻ sulfite → H₂SO₃ sulfurous acid; NO₂⁻ nitrite → HNO₂ nitrous acid. Each acid formula shows H⁺ to",
        "explain",
        "second naming card: \"Oxoacid: contains O. Name from the ion.\" Two columns build one row per cue; each earlier row dims to grey as the next starts, so only the current row is bright: \"-ate → -ic\": SO₄²⁻ sulfate → H₂SO₄ sulfuric acid; NO₃⁻ nitrate → HNO₃ nitric acid; PO₄³⁻ phosphate → H₃PO₄ phosphoric acid; CO₃²⁻ carbonate → H₂CO₃ carbonic acid. \"-ite → -ous\": SO₃²⁻ sulfite → H₂SO₃ sulfurous acid; NO₂⁻ nitrite → HNO₂ nitrous acid. Each acid formula shows H⁺ tokens joining the ion (number of H = size of the ion's charge). On \"never\" a teal bar strikes \"hydro\" off the oxoacid card. A chip \"H₂SO₄: hydrosulfuric acid\" fades in and is crossed (caption \"has O: sulfuric acid\"); the H₂S tile from scene 2 lights. Hold about 2 seconds.",
        [
            "Mark cross",
            "token flight",
            "chip pop",
            "table build"
        ],
        "Hold about 2 seconds"
    ],
    "naming-bases": [
        "new",
        "base card: \"Hydroxides: metal + hydroxide\" with tiles NaOH, Ca(OH)₂, Mg(OH)₂ (charge tiles show one OH⁻ per positive charge).",
        "Naming bases: Bases are named like any ionic compound: metal first, then the negative ion.",
        "Sodium hydroxide / Ammonia / carbonates / hydrogen carbonates",
        "On the spoken cues: On \"Ammonia\" the NH₃ molecule from C01 with a violet \"proton acceptor\" outline; a chip \"NH₄OH, ammonium hydroxide\" fades in and is crossed (caption \"write NH₃(aq)\"). On \"carbonates\" tiles CaCO₃ and NaHCO₃ with the C01 tag \"accepts H⁺\". Hold about 1 second.",
        "explain",
        "base card: \"Hydroxides: metal + hydroxide\" with tiles NaOH, Ca(OH)₂, Mg(OH)₂ (charge tiles show one OH⁻ per positive charge). On \"Ammonia\" the NH₃ molecule from C01 with a violet \"proton acceptor\" outline; a chip \"NH₄OH, ammonium hydroxide\" fades in and is crossed (caption \"write NH₃(aq)\"). On \"carbonates\" tiles CaCO₃ and NaHCO₃ with the C01 tag \"accepts H⁺\". Hold about 1 second.",
        [
            "Mark cross",
            "chip pop"
        ],
        "Hold about 1 second"
    ],
    "properties": [
        "adjust",
        "two columns.",
        "Family properties: Acids and bases each share properties because acids give away protons and bases take them.",
        "red / reactive metals / carbonates / blue / neutralise",
        "On the spoken cues: Acids: `m6-lemon-v1.png` and `m6-vinegar-bottle-v1.png` with tag \"sour\"; on \"red\" a litmus plate turns from blue to red (coded tint over `m6-litmus-blue-v1.png`; if Codex adds a blue-to-red pair later, use it); on \"reactive metals\" and \"carbonates\" two small icons link forward to scenes 9 and 10. Bases: `m6-soap-bar-v1.png` and `m6-household-cleaner-bottle-v1.png` with tags \"bitter, slippery\"; on \"blue\" `m6-litmus-re",
        "explain",
        "two columns. Acids: `m6-lemon-v1.png` and `m6-vinegar-bottle-v1.png` with tag \"sour\"; on \"red\" a litmus plate turns from blue to red (coded tint over `m6-litmus-blue-v1.png`; if Codex adds a blue-to-red pair later, use it); on \"reactive metals\" and \"carbonates\" two small icons link forward to scenes 9 and 10. Bases: `m6-soap-bar-v1.png` and `m6-household-cleaner-bottle-v1.png` with tags \"bitter, slippery\"; on \"blue\" `m6-litmus-red-v1.png` to `m6-litmus-blue-v1.png`. On \"neutralise\" the two columns slide together with a tag \"acid + base cancel\". A safety chip \"never taste or touch lab chemicals\" pins. On \"its own video\" a chip \"Later: strong and weak acids\". Hold about 1 second.",
        [
            "chip pop",
            "table build",
            "Plate"
        ],
        "Hold about 1 second"
    ],
    "salt-rule": [
        "new",
        "the salt builder: left slot \"positive ion (from the base or metal)\" amber; right slot \"negative ion (from the acid)\" violet.",
        "The salt rule: Those reactions are where prediction comes in.",
        "salt / positive ion / negative ion / chlorides / sulfates / charges",
        "On the spoken cues: On \"chlorides\" \"sulfates\" etc. a strip writes: \"HCl → chloride, Cl⁻ | H₂SO₄ → sulfate, SO₄²⁻ | HNO₃ → nitrate, NO₃⁻ | H₃PO₄ → phosphate, PO₄³⁻\", each acid losing its teal H⁺ tokens to leave the ion; the strip then shrinks and dims. On \"charges\" a demonstration (the only bright item): Ca²⁺ with Cl⁻ needs two Cl⁻ tiles, giving CaCl₂, with a charge tally \"(+2) + 2(−1) = 0\". Hold about 2 seconds.",
        "explain",
        "the salt builder: left slot \"positive ion (from the base or metal)\" amber; right slot \"negative ion (from the acid)\" violet. On \"chlorides\" \"sulfates\" etc. a strip writes: \"HCl → chloride, Cl⁻ | H₂SO₄ → sulfate, SO₄²⁻ | HNO₃ → nitrate, NO₃⁻ | H₃PO₄ → phosphate, PO₄³⁻\", each acid losing its teal H⁺ tokens to leave the ion; the strip then shrinks and dims. On \"charges\" a demonstration (the only bright item): Ca²⁺ with Cl⁻ needs two Cl⁻ tiles, giving CaCl₂, with a charge tally \"(+2) + 2(−1) = 0\". Hold about 2 seconds.",
        [
            "HandText write-on",
            "token flight"
        ],
        "Hold about 2 seconds"
    ],
    "acid-hydroxide": [
        "adjust",
        "pattern card 1 writes: \"acid + hydroxide → salt + water\".",
        "Acid plus hydroxide (salt and water): Pattern one: acid plus a hydroxide gives a salt and water.",
        "hydroxide / salt and water / accepts a proton / two plus / two / two waters",
        "On the spoken cues: Lens: a teal H⁺ hops from HCl onto an OH⁻ and the pair becomes a pale blue H₂O (tag \"OH⁻ + H⁺ = H₂O\"). On \"Antacid tablets\" `m6-antacid-tablets-v1.png` stands in the left column with a tag \"Mg(OH)₂\". On \"two plus\" the salt builder shows Mg²⁺ with two Cl⁻ tiles.",
        "explain",
        "pattern card 1 writes: \"acid + hydroxide → salt + water\". Lens: a teal H⁺ hops from HCl onto an OH⁻ and the pair becomes a pale blue H₂O (tag \"OH⁻ + H⁺ = H₂O\"). On \"Antacid tablets\" `m6-antacid-tablets-v1.png` stands in the left column with a tag \"Mg(OH)₂\". On \"two plus\" the salt builder shows Mg²⁺ with two Cl⁻ tiles. On \"two hydrochloric acids\" the strip writes: \"Mg(OH)₂(s) + 2HCl(aq) → MgCl₂(aq) + 2H₂O(l)\", with two proton hops shown in the lens and the 2s pulsing; a small check \"H: 2 + 2 = 4 = 2 × 2\" writes under it. As the scene closes, the third hook beaker returns as a thumbnail and a small line writes beside it: \"hook: NaOH(aq) + HCl(aq) → NaCl(aq) + H₂O(l)\" (screen only). Hold about 2 seconds.",
        [
            "HandText write-on",
            "token flight",
            "Cam lens zoom",
            "table build",
            "Plate"
        ],
        "Hold about 2 seconds"
    ],
    "acid-ammonia": [
        "adjust",
        "`m5x-ammonia-bottle-v1.png` (label \"ammonia, NH₃\") and the new `m6-fertiliser-granules-v1.png` (interim: coded white granule pile) in the left column.",
        "Acid plus ammonia (salt, no water): Now pattern one with a base that has no hydroxide.",
        "no hydroxide / ammonium sulfate / ammonium ion / two / no water",
        "On the spoken cues: Lens: H₂SO₄ gives one teal H⁺ to each of two NH₃ molecules, which become NH₄⁺ (violet outline to amber, \"+\"). On \"ammonium sulfate\" the salt builder: two NH₄⁺ tiles with one SO₄²⁻, giving (NH₄)₂SO₄, tally \"2(+1) + (−2) = 0\". On \"two ammonias\" the strip writes: \"2NH₃(g) + H₂SO₄(aq) → (NH₄)₂SO₄(aq)\".",
        "explain",
        "`m5x-ammonia-bottle-v1.png` (label \"ammonia, NH₃\") and the new `m6-fertiliser-granules-v1.png` (interim: coded white granule pile) in the left column. Lens: H₂SO₄ gives one teal H⁺ to each of two NH₃ molecules, which become NH₄⁺ (violet outline to amber, \"+\"). On \"ammonium sulfate\" the salt builder: two NH₄⁺ tiles with one SO₄²⁻, giving (NH₄)₂SO₄, tally \"2(+1) + (−2) = 0\". On \"two ammonias\" the strip writes: \"2NH₃(g) + H₂SO₄(aq) → (NH₄)₂SO₄(aq)\". On \"no water\" a chip \"+ 2H₂O\" fades in after the arrow and is crossed (caption \"no OH⁻, so no water\"). Hold about 2 seconds.",
        [
            "HandText write-on",
            "Mark cross",
            "Cam lens zoom",
            "DrawPath",
            "chip pop",
            "table build",
            "Plate"
        ],
        "Hold about 2 seconds"
    ],
    "acid-carbonate": [
        "adjust",
        "pattern card 2: \"acid + carbonate → salt + water + CO₂\".",
        "Acid plus carbonate (salt, water and carbon dioxide): Pattern two: acid plus a carbonate gives a salt, water and carbon dioxide.",
        "carbonate / carbon dioxide / two / water and carbon dioxide / calcium chloride / Hydrogen carbonates",
        "On the spoken cues: Lens: two teal tokens hop onto a CO₃²⁻ ion, making H₂CO₃ (dashed outline, tag \"unstable\"), which splits into H₂O and a grey-green CO₂ bubble that rises. On \"Marble\" `m6-marble-chips-acid-v1.png` in the left column. On \"calcium chloride\" the strip writes: \"CaCO₃(s) + 2HCl(aq) → CaCl₂(aq) + H₂O(l) + CO₂(g)\", with Ca²⁺ and two Cl⁻ in the salt builder.",
        "explain",
        "pattern card 2: \"acid + carbonate → salt + water + CO₂\". Lens: two teal tokens hop onto a CO₃²⁻ ion, making H₂CO₃ (dashed outline, tag \"unstable\"), which splits into H₂O and a grey-green CO₂ bubble that rises. On \"Marble\" `m6-marble-chips-acid-v1.png` in the left column. On \"calcium chloride\" the strip writes: \"CaCO₃(s) + 2HCl(aq) → CaCl₂(aq) + H₂O(l) + CO₂(g)\", with Ca²⁺ and two Cl⁻ in the salt builder. On \"Hydrogen carbonates\" the clip `m6-clip-baking-soda-vinegar-before-v1.png` to `-fizz-v1.png` plays small with the tag \"baking soda + vinegar: same pattern\", and a second strip line writes small: \"NaHCO₃(s) + HCl(aq) → NaCl(aq) + H₂O(l) + CO₂(g)\". Hold about 2 seconds.",
        [
            "HandText write-on",
            "token flight",
            "Cam lens zoom",
            "chip pop",
            "table build",
            "lineage split",
            "Plate"
        ],
        "Hold about 2 seconds"
    ],
    "acid-metal": [
        "adjust",
        "pattern card 3: \"acid + reactive metal → salt + H₂\".",
        "Acid plus reactive metal (salt and hydrogen): Pattern three: acid plus a reactive metal gives a salt and hydrogen gas.",
        "reactive metal / hydrogen gas / give electrons / three plus / three hydrogen molecules",
        "On the spoken cues: `m5x-strong-acid-mg-v1.png` in the left column. Lens: a metal surface atom releases small yellow electron dots to two H⁺ tokens, which join as a white H₂ bubble; the metal atom becomes an amber \"+\" ion that drifts into the solution. A tag \"electron transfer (Year 11), not proton transfer\".",
        "explain",
        "pattern card 3: \"acid + reactive metal → salt + H₂\". `m5x-strong-acid-mg-v1.png` in the left column. Lens: a metal surface atom releases small yellow electron dots to two H⁺ tokens, which join as a white H₂ bubble; the metal atom becomes an amber \"+\" ion that drifts into the solution. A tag \"electron transfer (Year 11), not proton transfer\". On \"three plus\" the salt builder: Al³⁺ with three Cl⁻, giving AlCl₃. On \"three hydrogen molecules\" the strip writes: \"2Al(s) + 6HCl(aq) → 2AlCl₃(aq) + 3H₂(g)\" with a hydrogen tally \"6 H = 3 × 2\". Hold about 2 seconds.",
        [
            "HandText write-on",
            "token flight",
            "Cam lens zoom",
            "table build",
            "Plate"
        ],
        "Hold about 2 seconds"
    ],
    "above-hydrogen": [
        "adjust",
        "a short activity series bar: \"Mg Al Zn Fe ...",
        "Only metals above hydrogen: But only metals above hydrogen in the activity series do this, like magnesium, aluminium, zinc and iron.",
        "above hydrogen / Copper / H two",
        "On the spoken cues: (H) ... Cu Ag\" with hydrogen as a dashed line; metals above it tinted teal (\"react\"), below grey (\"no reaction\"). On \"Copper\" the new `m6-copper-acid-v1.png` (copper turnings in the same beaker, no bubbles) stands beside the magnesium beaker, tagged \"no reaction\".",
        "explain",
        "a short activity series bar: \"Mg Al Zn Fe ... (H) ... Cu Ag\" with hydrogen as a dashed line; metals above it tinted teal (\"react\"), below grey (\"no reaction\"). On \"Copper\" the new `m6-copper-acid-v1.png` (copper turnings in the same beaker, no bubbles) stands beside the magnesium beaker, tagged \"no reaction\". On \"H two\" a chip \"Mg + 2HCl → MgCl₂ + 2H\" fades in and is crossed (caption \"hydrogen gas is H₂\"); under it the hook's magnesium case writes correctly beside the magnesium beaker: \"Mg(s) + 2HCl(aq) → MgCl₂(aq) + H₂(g)\". Hold about 1 second.",
        [
            "HandText write-on",
            "Mark cross",
            "DrawPath",
            "chip pop",
            "Plate"
        ],
        "Hold about 1 second"
    ],
    "gas-tests": [
        "adjust",
        "left half: the new limewater pair `m6-limewater-clear-v1.png` to `m6-limewater-milky-v1.png` (delivery tube bubbling into a tube of clear limewater, then milky), tag \"CO₂: limewater milky\".",
        "Telling the gases apart: Patterns two and three both fizz, so how do you tell the gases apart?",
        "limewater / milky / squeaky pop",
        "On the spoken cues: Right half: the new `m6-splint-pop-v1.png` (tube held in a clamp with metal granules fizzing in acid at the bottom, a burning splint resting at its mouth, small flame burst; no hands), with a coded \"pop!\" sound-word tag \"H₂: squeaky pop\". On \"Carbonate means carbon dioxide\" a pen arrow links the marble beaker to the limewater; on \"Metal means hydrogen\" the magnesium beaker to the splint. Safety chip \"teacher demonstr",
        "explain",
        "left half: the new limewater pair `m6-limewater-clear-v1.png` to `m6-limewater-milky-v1.png` (delivery tube bubbling into a tube of clear limewater, then milky), tag \"CO₂: limewater milky\". Right half: the new `m6-splint-pop-v1.png` (tube held in a clamp with metal granules fizzing in acid at the bottom, a burning splint resting at its mouth, small flame burst; no hands), with a coded \"pop!\" sound-word tag \"H₂: squeaky pop\". On \"Carbonate means carbon dioxide\" a pen arrow links the marble beaker to the limewater; on \"Metal means hydrogen\" the magnesium beaker to the splint. Safety chip \"teacher demonstration\". Hold about 1 second.",
        [
            "DrawPath",
            "chip pop",
            "Plate"
        ],
        "Hold about 1 second"
    ],
    "memory-aid": [
        "new",
        "the salt builder returns with \"magnesium\" sliding into the first slot and \"sulfate\" into the second; first aid line writes large and handwritten: \"Metal (or ammonium) names the first word; the acid names the second.\" On \"hydroxide, water\" the three pattern cards return small, each lighting its products in turn, with the limewater and pop icons beside carbonate and metal.",
        "Memory aid: So here's what to remember.",
        "metal, or ammonium, names the first word / acid names the second / hydroxide, water. Carbonate, water and carbon dioxide. Metal, hydrogen / ate becomes ic, ite becomes ous",
        "On the spoken cues: Third line: \"-ate → -ic; -ite → -ous; hydro- only without oxygen.\" Condition tags: \"ammonia: salt only, no water\"; \"metal must be above hydrogen\". Hold about 2 seconds.",
        "explain",
        "the salt builder returns with \"magnesium\" sliding into the first slot and \"sulfate\" into the second; first aid line writes large and handwritten: \"Metal (or ammonium) names the first word; the acid names the second.\" On \"hydroxide, water\" the three pattern cards return small, each lighting its products in turn, with the limewater and pop icons beside carbonate and metal. Third line: \"-ate → -ic; -ite → -ous; hydro- only without oxygen.\" Condition tags: \"ammonia: salt only, no water\"; \"metal must be above hydrogen\". Hold about 2 seconds.",
        [
            "HandText write-on"
        ],
        "Hold about 2 seconds"
    ],
    "attempt-1": [
        "new",
        "the board clears.",
        "Unseen transfer task (attempt 1 (countdown, 10 seconds)) with every given and demand on screen, a 10 second countdown and no answer cues.",
        "Your turn. Write a balanced chemical equation, including",
        "The question card builds with every given visible and stays on screen; no answer cues appear; the countdown ring runs for 10 seconds after \"Pause here to answer.\" (attempt 1 (countdown, 10 seconds))",
        "explain",
        "the board clears. Question card, worded as printed: \"Write a balanced chemical equation, including states, for the reaction between dilute nitric acid and solid calcium carbonate.\" The full question stays on screen. Countdown ring for 10 seconds with \"Pause here to answer.\" Nothing answer-bearing: no pattern cards, no salt builder, no formulas.",
        [
            "Countdown ring"
        ],
        "10 second answer-free countdown after \"Pause here to answer.\"; the card stays on screen"
    ],
    "feedback-1": [
        "new",
        "the question stays.",
        "Brief feedback (feedback 1 (brief)): the answer, the key reason with the givens underlined, and one crossed classic mistake (owner rule, 16 October).",
        "carbonate / water and carbon dioxide / calcium nitrate / two / left out",
        "On the spoken cues: On \"Nitric acid\" the words \"dilute nitric acid\" in the question are underlined and the tile \"HNO₃\" pins; on \"carbonate\" \"solid calcium carbonate\" is underlined, tile \"CaCO₃(s)\", and pattern card 2 returns small. On \"calcium nitrate\" the salt builder shows Ca²⁺ with two NO₃⁻, giving Ca(NO₃)₂; on \"two nitric acids\" the answer strip writes: \"CaCO₃(s) + 2HNO₃(aq) → Ca(NO₃)₂(aq) + H₂O(l) + CO₂(g)\"; \"including states\" in t",
        "explain",
        "the question stays. On \"Nitric acid\" the words \"dilute nitric acid\" in the question are underlined and the tile \"HNO₃\" pins; on \"carbonate\" \"solid calcium carbonate\" is underlined, tile \"CaCO₃(s)\", and pattern card 2 returns small. On \"calcium nitrate\" the salt builder shows Ca²⁺ with two NO₃⁻, giving Ca(NO₃)₂; on \"two nitric acids\" the answer strip writes: \"CaCO₃(s) + 2HNO₃(aq) → Ca(NO₃)₂(aq) + H₂O(l) + CO₂(g)\"; \"including states\" in the question is underlined as the state symbols write. On \"left out\" a chip \"CaCO₃ + 2HNO₃ → Ca(NO₃)₂ + H₂O\" fades in and is crossed (caption \"carbonate: CO₂ too\"). Hold about 1 second.",
        [
            "HandText write-on",
            "Mark cross",
            "Mark underline",
            "chip pop"
        ],
        "Hold about 1 second"
    ],
    "attempt-2": [
        "new",
        "question card as printed, with the supplied stimulus box under it: \"Part of the activity series: K > Na > Ca > Mg > Al > Zn > Fe > Sn > Pb > (H) > Cu > Ag > Au\".",
        "Unseen transfer task (attempt 2 (countdown, 10 seconds)) with every given and demand on screen, a 10 second countdown and no answer cues.",
        "Last one. Zinc granules are added to dilute",
        "The question card builds with every given visible and stays on screen; no answer cues appear; the countdown ring runs for 10 seconds after \"Pause here to answer.\" (attempt 2 (countdown, 10 seconds))",
        "explain",
        "question card as printed, with the supplied stimulus box under it: \"Part of the activity series: K > Na > Ca > Mg > Al > Zn > Fe > Sn > Pb > (H) > Cu > Ag > Au\". The full question and stimulus stay on screen. Countdown ring for 10 seconds with \"Pause here to answer.\" Nothing answer-bearing: no beaker plates.",
        [
            "Countdown ring"
        ],
        "10 second answer-free countdown after \"Pause here to answer.\"; the card stays on screen"
    ],
    "feedback-2": [
        "adjust",
        "on \"Zinc\" \"Zn\" and \"(H)\" in the stimulus are underlined with a pen arrow \"above H\"; the new `m6-zinc-acid-v1.png` (zinc granules fizzing in the same beaker) appears; answer chip \"Zinc: bubbles of gas; zinc dissolves\" pins.",
        "Brief feedback (feedback 2 (brief)): the answer, the key reason with the givens underlined, and one crossed classic mistake (owner rule, 16 October).",
        "Zinc / fizzes / zinc sulfate plus hydrogen / Copper / no visible change",
        "On the spoken cues: On \"zinc sulfate plus hydrogen\" the strip writes: \"Zn(s) + H₂SO₄(aq) → ZnSO₄(aq) + H₂(g)\". On \"Copper\" \"Cu\" is underlined with \"below H\"; `m6-copper-acid-v1.png` appears; chip \"Copper: no visible change, no reaction\". On \"trap\" a chip \"Cu + H₂SO₄ → CuSO₄ + H₂\" fades in and is crossed (caption \"below hydrogen: no reaction\").",
        "explain",
        "on \"Zinc\" \"Zn\" and \"(H)\" in the stimulus are underlined with a pen arrow \"above H\"; the new `m6-zinc-acid-v1.png` (zinc granules fizzing in the same beaker) appears; answer chip \"Zinc: bubbles of gas; zinc dissolves\" pins. On \"zinc sulfate plus hydrogen\" the strip writes: \"Zn(s) + H₂SO₄(aq) → ZnSO₄(aq) + H₂(g)\". On \"Copper\" \"Cu\" is underlined with \"below H\"; `m6-copper-acid-v1.png` appears; chip \"Copper: no visible change, no reaction\". On \"trap\" a chip \"Cu + H₂SO₄ → CuSO₄ + H₂\" fades in and is crossed (caption \"below hydrogen: no reaction\"). Hold about 1 second.",
        [
            "HandText write-on",
            "Mark cross",
            "Mark underline",
            "DrawPath",
            "chip pop",
            "Plate"
        ],
        "Hold about 1 second"
    ],
    "decision-rule": [
        "adjust",
        "the question card writes, each line lighting on its words: \"Name the acid.\" \"Spot the pattern: hydroxide, ammonia, carbonate, metal.\" \"Build the salt from the charges.\" \"Add water, CO₂ or H₂ (ammonia: nothing extra; metal below H: no reaction).\" \"Balance.\" On \"Next\" a chip \"Next: the heat of neutralisation\" appears with `m6-beaker-v1.png` and a small coded thermometer.",
        "Decision rule and handoff: So for any acid reaction: name the acid, spot the pattern, build the salt from the charges, add water, carbon dioxide or hydrogen as the pattern says, then balance.",
        "Next",
        "On the spoken cues: Hold about 2 seconds.",
        "explain",
        "the question card writes, each line lighting on its words: \"Name the acid.\" \"Spot the pattern: hydroxide, ammonia, carbonate, metal.\" \"Build the salt from the charges.\" \"Add water, CO₂ or H₂ (ammonia: nothing extra; metal below H: no reaction).\" \"Balance.\" On \"Next\" a chip \"Next: the heat of neutralisation\" appears with `m6-beaker-v1.png` and a small coded thermometer. Hold about 2 seconds.",
        [
            "HandText write-on",
            "chip pop",
            "Plate"
        ],
        "Hold about 2 seconds"
    ],
    "key-notes": [
        "new",
        "Key notes card with the numbered notes, the memory aid in large writing and its condition tag",
        "Essentials to copy into books",
        "key notes",
        "Notes appear then stay still for copying",
        "hold",
        "The notes and the memory aid appear and lock",
        [
            "Enter reveals"
        ],
        "Quiet copy hold of about 60 seconds with pause invitation"
    ]
}


# BEGIN generated rows: m6c03-m6c08, skills01, skills02
M6C03_ROWS = {
    "hook": [
        "adjust",
        "two `m6-beaker-v1.png` plates left and centre with coded labels \"hydrochloric acid\" and \"sodium hydroxide\", each with a small amber readout \"21.5 °C\".",
        "Hook (no fizz, but it warms): Here are two clear, colourless solutions, hydrochloric acid and sodium hydroxide, both at twenty one point five degrees.",
        "twenty eight degrees / different amounts",
        "On the spoken cues: `m6-foam-cup-calorimeter-v1.png` right, lid lifted a little (coded offset). On \"Pour\" each beaker tilts along a coded arc over the cup (no hands) and the lid settles. On \"nothing to see\" a pen ring circles the cup window with a tag \"no bubbles, no colour change\" (fades). On \"twenty eight degrees\" the readout chip on the probe counts 21.5 to 28.0 over about 2 seconds and the cup glows faint warm orange. Heading",
        "explain",
        "two `m6-beaker-v1.png` plates left and centre with coded labels \"hydrochloric acid\" and \"sodium hydroxide\", each with a small amber readout \"21.5 °C\". `m6-foam-cup-calorimeter-v1.png` right, lid lifted a little (coded offset). On \"Pour\" each beaker tilts along a coded arc over the cup (no hands) and the lid settles. On \"nothing to see\" a pen ring circles the cup window with a tag \"no bubbles, no colour change\" (fades). On \"twenty eight degrees\" the readout chip on the probe counts 21.5 to 28.0 over about 2 seconds and the cup glows faint warm orange. Heading writes: \"No fizz. How much heat?\" On \"different amounts\" a second, larger cup outline appears beside the first with a \"?\" between them. Hold about 1 second. Hold about 1 second.",
        [
            "HandText write-on",
            "ScribbleCircle",
            "chip pop",
            "NumberTicker",
            "Plate"
        ],
        "Hold about 1 second"
    ],
    "why-warm": [
        "new",
        "the board clears to a large particle lens of the mixed solution.",
        "Why it gets warm (spectators and water): First, why does it warm up?",
        "hydrogen ions / hydroxide ions / spectator ions / water / released as heat",
        "On the spoken cues: On \"hydrogen ions\" teal H⁺ tokens (each on a pale blue water, the C01 H₃O⁺ shape, small tag \"H⁺(aq) = H₃O⁺\") and grey Cl⁻ appear; on \"hydroxide ions\" grey Na⁺ and violet OH⁻ drift in. On \"spectator ions\" the Na⁺ and Cl⁻ turn grey with a tag \"spectators: unchanged\". On \"water\" an H⁺ and an OH⁻ meet and snap into a pale blue H₂O; the strip writes \"H⁺(aq) + OH⁻(aq) → H₂O(l)\". On \"released as heat\" orange ripples spread",
        "explain",
        "the board clears to a large particle lens of the mixed solution. On \"hydrogen ions\" teal H⁺ tokens (each on a pale blue water, the C01 H₃O⁺ shape, small tag \"H⁺(aq) = H₃O⁺\") and grey Cl⁻ appear; on \"hydroxide ions\" grey Na⁺ and violet OH⁻ drift in. On \"spectator ions\" the Na⁺ and Cl⁻ turn grey with a tag \"spectators: unchanged\". On \"water\" an H⁺ and an OH⁻ meet and snap into a pale blue H₂O; the strip writes \"H⁺(aq) + OH⁻(aq) → H₂O(l)\". On \"released as heat\" orange ripples spread from each new water into the surrounding solution; a small energy step beside the lens drops from \"H⁺ + OH⁻\" to \"H₂O\" with the gap tagged \"heat out\". Hold about 1 second. Hold about 1 second.",
        [
            "HandText write-on",
            "token flight",
            "Cam lens zoom"
        ],
        "Hold about 1 second"
    ],
    "per-mole": [
        "new",
        "the energy step from scene 2 enlarges: on \"exothermic\" its label writes \"exothermic: heat to the surroundings\"; on \"negative\" the arrow down is labelled \"ΔH < 0\" and the lens dims.",
        "Exothermic, negative, per mole of water: A reaction that releases heat is exothermic.",
        "exothermic / negative / enthalpy of neutralisation / mole of water",
        "On the spoken cues: On \"twice as much\" two cups side by side: the second has two water tokens for every one in the first and twice the orange ripples, each cup tagged \"heat\" and \"2 × heat\". On \"divide\" a fraction writes between them: \"heat ÷ mol of water = same\". On \"enthalpy of neutralisation\" the definition card writes: \"Enthalpy of neutralisation, ΔH: enthalpy change per mole of water formed (kJ/mol).\" The two cups fade.",
        "explain",
        "the energy step from scene 2 enlarges: on \"exothermic\" its label writes \"exothermic: heat to the surroundings\"; on \"negative\" the arrow down is labelled \"ΔH < 0\" and the lens dims. On \"twice as much\" two cups side by side: the second has two water tokens for every one in the first and twice the orange ripples, each cup tagged \"heat\" and \"2 × heat\". On \"divide\" a fraction writes between them: \"heat ÷ mol of water = same\". On \"enthalpy of neutralisation\" the definition card writes: \"Enthalpy of neutralisation, ΔH: enthalpy change per mole of water formed (kJ/mol).\" The two cups fade. Hold about 1 second. Hold about 1 second.",
        [
            "HandText write-on",
            "token flight",
            "Cam lens zoom",
            "DrawPath"
        ],
        "Hold about 1 second"
    ],
    "same-reaction": [
        "new",
        "on \"strong acids\" a small tag writes under the HCl tile: \"strong acid: splits completely into ions (later video)\".",
        "The same reaction, about minus 57: Acids that split completely into ions like this are called strong acids, explained in a later video.",
        "strong acids / minus fifty seven kilojoules per mole / different values",
        "On the spoken cues: Three formula pairs stack on the left, each lighting in turn: \"HCl + NaOH\", \"HNO₃ + KOH\", \"HNO₃ + NaOH\", each sending its spectators (grey) to the side and leaving the same teal-plus-violet pair; one bracket joins them to the single strip \"H⁺(aq) + OH⁻(aq) → H₂O(l)\", and the three pairs and the strong-acid tag dim. On \"minus fifty seven\" a value card pins: \"ΔH ≈ −57 kJ/mol\" with a small grey condition tag \"dilute;",
        "explain",
        "on \"strong acids\" a small tag writes under the HCl tile: \"strong acid: splits completely into ions (later video)\". Three formula pairs stack on the left, each lighting in turn: \"HCl + NaOH\", \"HNO₃ + KOH\", \"HNO₃ + NaOH\", each sending its spectators (grey) to the side and leaving the same teal-plus-violet pair; one bracket joins them to the single strip \"H⁺(aq) + OH⁻(aq) → H₂O(l)\", and the three pairs and the strong-acid tag dim. On \"minus fifty seven\" a value card pins: \"ΔH ≈ −57 kJ/mol\" with a small grey condition tag \"dilute; no precipitate\". On \"different values\" a chip \"−57 kJ/mol for every acid and base\" fades in and is crossed (caption \"partly split acids differ: later video\"). Revision 2: H₂SO₄ is not in this stack (its second hydrogen ion comes from HSO₄⁻, which is only partly split; author note f), and the separate dashed chip is merged into the crossed chip's caption to keep three bright items. Hold about 1 second. Hold about 1 second.",
        [
            "HandText write-on",
            "Mark cross",
            "chip pop",
            "DrawPath"
        ],
        "Hold about 1 second"
    ],
    "calorimeter": [
        "adjust",
        "`m6-foam-cup-calorimeter-v1.png` returns large; on \"calorimeter\" the word and its meaning write under it (\"insulated cup for measuring heat\").",
        "The calorimeter and q = mcΔT: To measure it, mix the solutions in a lidded polystyrene foam cup, called a calorimeter.",
        "calorimeter / m / c / Delta T",
        "On the spoken cues: On \"assume\" the orange ripples stay inside the cup outline with a tag \"assume: all heat warms the solution\". The equation writes alone at the top: \"q = m c ΔT\". Each symbol lights and its meaning writes under it on its cue, one at a time, the previous meaning dimming: on \"m\" \"m = mass of all the solution (g); 1 mL ≈ 1 g\"; on \"c\" \"c = 4.18 J g⁻¹ °C⁻¹ (treat as water)\"; on \"Delta T\" \"ΔT = T(final) − T(initial)\". The",
        "explain",
        "`m6-foam-cup-calorimeter-v1.png` returns large; on \"calorimeter\" the word and its meaning write under it (\"insulated cup for measuring heat\"). On \"assume\" the orange ripples stay inside the cup outline with a tag \"assume: all heat warms the solution\". The equation writes alone at the top: \"q = m c ΔT\". Each symbol lights and its meaning writes under it on its cue, one at a time, the previous meaning dimming: on \"m\" \"m = mass of all the solution (g); 1 mL ≈ 1 g\"; on \"c\" \"c = 4.18 J g⁻¹ °C⁻¹ (treat as water)\"; on \"Delta T\" \"ΔT = T(final) − T(initial)\". The three meanings then sit together small under the equation. Hold about 1 second. Hold about 1 second.",
        [
            "HandText write-on",
            "Plate"
        ],
        "Hold about 1 second"
    ],
    "we1-givens": [
        "new",
        "the board clears to the three zones.",
        "Worked example 1: the task and givens: Here's the hook experiment.",
        "enthalpy of neutralisation / heat / moles of water",
        "On the spoken cues: Task line: \"Find ΔH of neutralisation\". Equation strip: \"HCl(aq) + NaOH(aq) → NaCl(aq) + H₂O(l)\". Givens card, grouped with units, each group writing on its cue: \"HCl: 50.0 mL, 1.00 mol/L\" | \"NaOH: 50.0 mL, 1.00 mol/L\" | \"T: 21.5 °C → 28.0 °C\" | grey \"assume: 1.00 g/mL; c = 4.18 J g⁻¹ °C⁻¹\". On \"heat\", \"moles of water\" and \"divide\" a three-step ladder writes small at the right: \"1 q = mcΔT\", \"2 n(H₂O)\", \"3 ΔH = −q ÷",
        "explain",
        "the board clears to the three zones. Task line: \"Find ΔH of neutralisation\". Equation strip: \"HCl(aq) + NaOH(aq) → NaCl(aq) + H₂O(l)\". Givens card, grouped with units, each group writing on its cue: \"HCl: 50.0 mL, 1.00 mol/L\" | \"NaOH: 50.0 mL, 1.00 mol/L\" | \"T: 21.5 °C → 28.0 °C\" | grey \"assume: 1.00 g/mL; c = 4.18 J g⁻¹ °C⁻¹\". On \"heat\", \"moles of water\" and \"divide\" a three-step ladder writes small at the right: \"1 q = mcΔT\", \"2 n(H₂O)\", \"3 ΔH = −q ÷ n\". As the sentence ends the ladder collapses into one small step chip under the task line (Revision 2: in scenes 7 to 9 only the current step shows, \"Step 1 of 3: q\", \"Step 2 of 3: n(H₂O)\", \"Step 3 of 3: ΔH\", so the ladder does not become a fourth bright text item). The calorimeter plate sits small with readout \"28.0 °C\". Hold about 1 second. Hold about 1 second.",
        [
            "HandText write-on",
            "chip pop",
            "NumberTicker"
        ],
        "Hold about 1 second"
    ],
    "we1-heat": [
        "new",
        "the step chip reads \"Step 1 of 3: q\".",
        "Worked example 1, step 1: the heat: Step one, the heat.",
        "one hundred grams / six point five degrees / two thousand seven hundred and seventeen joules",
        "On the spoken cues: On \"one hundred grams\" both volumes in the givens card are underlined and the line writes: \"m = 50.0 + 50.0 = 100.0 g\"; on \"everything in the cup\" a chip \"m = 50.0 g\" fades in and is crossed (caption \"all the solution is warmed\"), then the m line dims. On \"six point five degrees\" the temperatures are underlined; \"ΔT = 28.0 − 21.5 = 6.5 °C\". On \"two thousand seven hundred and seventeen joules\": \"q = 100.0 × 4.18 ×",
        "explain",
        "the step chip reads \"Step 1 of 3: q\". On \"one hundred grams\" both volumes in the givens card are underlined and the line writes: \"m = 50.0 + 50.0 = 100.0 g\"; on \"everything in the cup\" a chip \"m = 50.0 g\" fades in and is crossed (caption \"all the solution is warmed\"), then the m line dims. On \"six point five degrees\" the temperatures are underlined; \"ΔT = 28.0 − 21.5 = 6.5 °C\". On \"two thousand seven hundred and seventeen joules\": \"q = 100.0 × 4.18 × 6.5 = 2717 J = 2.717 kJ\" with a small grey tag \"keep the digits; round at the end\". The ΔT line dims; the q result shrinks to a kept chip \"q = 2.717 kJ\". Hold about 1 second. Hold about 1 second.",
        [
            "HandText write-on",
            "Mark cross",
            "chip pop",
            "Mark underline"
        ],
        "Hold about 1 second"
    ],
    "we1-moles": [
        "new",
        "the step chip reads \"Step 2 of 3: n(H₂O)\".",
        "Worked example 1, step 2: the moles of water: Step two, the moles of water.",
        "zero point zero five zero zero moles / zero point zero five zero zero moles of water",
        "On the spoken cues: The line \"n = c × V (V in L)\" writes with a small grey tag \"50.0 mL = 0.0500 L\", then on \"zero point zero five zero zero moles\" the HCl group is underlined and \"n(H⁺) = 1.00 × 0.0500 = 0.0500 mol\" writes; the NaOH line \"n(OH⁻) = 1.00 × 0.0500 = 0.0500 mol\" writes under it. A small lens shows one teal and one violet token joining to one water, tagged \"1 : 1\". On \"moles of water\" the result chip pins: \"n(H₂O) = 0.0500",
        "explain",
        "the step chip reads \"Step 2 of 3: n(H₂O)\". The line \"n = c × V (V in L)\" writes with a small grey tag \"50.0 mL = 0.0500 L\", then on \"zero point zero five zero zero moles\" the HCl group is underlined and \"n(H⁺) = 1.00 × 0.0500 = 0.0500 mol\" writes; the NaOH line \"n(OH⁻) = 1.00 × 0.0500 = 0.0500 mol\" writes under it. A small lens shows one teal and one violet token joining to one water, tagged \"1 : 1\". On \"moles of water\" the result chip pins: \"n(H₂O) = 0.0500 mol\". The two n lines dim. Hold about 1 second. Hold about 1 second.",
        [
            "HandText write-on",
            "chip pop",
            "Mark underline",
            "token flight",
            "Cam lens zoom"
        ],
        "Hold about 1 second"
    ],
    "we1-enthalpy": [
        "new",
        "the step chip reads \"Step 3 of 3: ΔH\"; the kept chips \"q = 2.717 kJ\" and \"n(H₂O) = 0.0500 mol\" slide into the line \"q ÷ n = 2.717 kJ ÷ 0.0500 mol = 54.34 kJ/mol\" and leave.",
        "Worked example 1, step 3: divide, sign and compare: Step three, divide and add the sign.",
        "two significant figures / rose / minus fifty four kilojoules per mole / heat loss",
        "On the spoken cues: On \"two significant figures\" a small chip \"ΔT = 6.5 °C: 2 s.f.\" writes with a pen ring on \"6.5\", and \"54.34\" rounds to \"54\". On \"rose\" the readout's up arrow pulses and the minus sign writes in teal. Answer chip pins: \"ΔH = −54 kJ/mol\"; the s.f. chip and the line dim. On \"minus fifty seven\" a short number line draws: −57 and −54 marked, gap bracketed \"less negative\". On \"heat loss\" the calorimeter plate enlarges a",
        "explain",
        "the step chip reads \"Step 3 of 3: ΔH\"; the kept chips \"q = 2.717 kJ\" and \"n(H₂O) = 0.0500 mol\" slide into the line \"q ÷ n = 2.717 kJ ÷ 0.0500 mol = 54.34 kJ/mol\" and leave. On \"two significant figures\" a small chip \"ΔT = 6.5 °C: 2 s.f.\" writes with a pen ring on \"6.5\", and \"54.34\" rounds to \"54\". On \"rose\" the readout's up arrow pulses and the minus sign writes in teal. Answer chip pins: \"ΔH = −54 kJ/mol\"; the s.f. chip and the line dim. On \"minus fifty seven\" a short number line draws: −57 and −54 marked, gap bracketed \"less negative\". On \"heat loss\" the calorimeter plate enlarges a little and small orange arrows leave through the wall and the lid gap; tag \"heat lost, so ΔT too small\". Hold about 1 second. Hold about 1 second.",
        [
            "HandText write-on",
            "ScribbleCircle",
            "Enter slide",
            "chip pop",
            "DrawPath",
            "NumberTicker"
        ],
        "Hold about 1 second"
    ],
    "we2-count": [
        "new",
        "the board clears to the three zones.",
        "Worked example 2: count the ions that react: Twenty five millilitres of one mole per litre sulfuric acid is mixed with seventy five millilitres of one mole per litre sodium hydroxide, warming from twenty point zero to twenty six point six degrees.",
        "sulfuric acid / two / run out first / releases no heat",
        "On the spoken cues: Task line: \"Find ΔH of neutralisation\". Strip: \"H₂SO₄(aq) + 2NaOH(aq) → Na₂SO₄(aq) + 2H₂O(l)\". Givens card: \"H₂SO₄: 25.0 mL, 1.00 mol/L\" | \"NaOH: 75.0 mL, 1.00 mol/L\" | \"T: 20.0 °C → 26.6 °C\" | grey \"assume: 1.00 g/mL; c = 4.18 J g⁻¹ °C⁻¹\". On \"two\" the subscript 2 in H₂SO₄ on the strip gets a pen ring and two teal tokens drop from it (no separate lens; Revision 2). Lines write one per cue, each group in the givens",
        "explain",
        "the board clears to the three zones. Task line: \"Find ΔH of neutralisation\". Strip: \"H₂SO₄(aq) + 2NaOH(aq) → Na₂SO₄(aq) + 2H₂O(l)\". Givens card: \"H₂SO₄: 25.0 mL, 1.00 mol/L\" | \"NaOH: 75.0 mL, 1.00 mol/L\" | \"T: 20.0 °C → 26.6 °C\" | grey \"assume: 1.00 g/mL; c = 4.18 J g⁻¹ °C⁻¹\". On \"two\" the subscript 2 in H₂SO₄ on the strip gets a pen ring and two teal tokens drop from it (no separate lens; Revision 2). Lines write one per cue, each group in the givens card lighting while it is used and dimming after: \"n(H₂SO₄) = 1.00 × 0.0250 = 0.0250 mol\", \"n(H⁺) = 2 × 0.0250 = 0.0500 mol\", \"n(OH⁻) = 1.00 × 0.0750 = 0.0750 mol\". On \"run out first\" the n lines dim and fold into a two-bar comparison labelled with their values: teal bar \"H⁺ 0.0500 mol\", violet bar \"OH⁻ 0.0750 mol\"; the teal bar empties as the same length of violet empties, leaving a violet stub \"0.0250 mol OH⁻ left over\"; chip pins \"n(H₂O) = 0.0500 mol (H⁺ runs out first)\". On \"releases no heat\" the stub is tagged \"no reaction, no heat\". Hold about 2 seconds. Hold about 2 seconds.",
        [
            "HandText write-on",
            "ScribbleCircle",
            "chip pop",
            "token flight",
            "Cam lens zoom",
            "bar fill"
        ],
        "Hold about 2 seconds"
    ],
    "we2-enthalpy": [
        "new",
        "the bars shrink to a small thumbnail beside the kept chip \"n(H₂O) = 0.0500 mol\".",
        "Worked example 2: the heat and ΔH: But the leftover solution still gets warmed, so the mass is all of it, one hundred grams.",
        "one hundred grams / water / minus fifty five kilojoules per mole / double",
        "On the spoken cues: On \"one hundred grams\" both volumes are underlined and \"m = 25.0 + 75.0 = 100.0 g\" writes, the violet stub glowing faint orange (tag \"still warmed\"), then the m line dims. \"ΔT = 26.6 − 20.0 = 6.6 °C\"; \"q = 100.0 × 4.18 × 6.6 = 2758.8 J = 2.759 kJ\"; the ΔT line dims. On \"water\" the chip \"n(H₂O) = 0.0500 mol\" pulses. Line: \"ΔH = − 2.759 kJ ÷ 0.0500 mol = −55.18 kJ/mol\"; answer chip \"ΔH = −55 kJ/mol (2 s.f.)\" pins. On",
        "explain",
        "the bars shrink to a small thumbnail beside the kept chip \"n(H₂O) = 0.0500 mol\". On \"one hundred grams\" both volumes are underlined and \"m = 25.0 + 75.0 = 100.0 g\" writes, the violet stub glowing faint orange (tag \"still warmed\"), then the m line dims. \"ΔT = 26.6 − 20.0 = 6.6 °C\"; \"q = 100.0 × 4.18 × 6.6 = 2758.8 J = 2.759 kJ\"; the ΔT line dims. On \"water\" the chip \"n(H₂O) = 0.0500 mol\" pulses. Line: \"ΔH = − 2.759 kJ ÷ 0.0500 mol = −55.18 kJ/mol\"; answer chip \"ΔH = −55 kJ/mol (2 s.f.)\" pins. On \"double\" a chip \"÷ 0.0250 mol acid: −110 kJ/mol\" fades in and is crossed (caption \"per mole of water, not acid\"). Hold about 1 second. Hold about 1 second.",
        [
            "HandText write-on",
            "Mark cross",
            "chip pop",
            "Mark underline",
            "bar fill"
        ],
        "Hold about 1 second"
    ],
    "memory-aid": [
        "new",
        "the board clears.",
        "Memory aid: So here's what to remember.",
        "Per mole of water, not per mole of acid / mass of everything in the cup / temperature up, delta H negative",
        "On the spoken cues: The first aid writes large and handwritten: \"Per mole of water, not per mole of acid.\" Under it a small two-bar thumbnail (teal shorter than violet, \"runs out first sets the water\"). Second line: \"Mass of everything in the cup.\" with a small cup outline filled to the brim. Third line: \"Temperature up, ΔH negative.\" with an amber up arrow beside a teal minus sign (Revision 2: no separate condition tag; the narration",
        "explain",
        "the board clears. The first aid writes large and handwritten: \"Per mole of water, not per mole of acid.\" Under it a small two-bar thumbnail (teal shorter than violet, \"runs out first sets the water\"). Second line: \"Mass of everything in the cup.\" with a small cup outline filled to the brim. Third line: \"Temperature up, ΔH negative.\" with an amber up arrow beside a teal minus sign (Revision 2: no separate condition tag; the narration carries \"q is positive, then add the minus sign\", keeping three text lines). Hold about 2 seconds. Hold about 2 seconds.",
        [
            "HandText write-on",
            "DrawPath",
            "bar fill"
        ],
        "Hold about 2 seconds"
    ],
    "attempt-1": [
        "new",
        "the board clears.",
        "Unseen transfer task (attempt 1 (countdown, 10 seconds)) with every given and demand on screen, a 10 second countdown and no answer cues.",
        "Your turn. Forty point zero millilitres of one",
        "The question card builds with every given visible and stays on screen; no answer cues appear; the countdown ring runs for 10 seconds after \"Pause here to answer.\" (attempt 1 (countdown, 10 seconds))",
        "explain",
        "the board clears. Question card, worded as printed: \"40.0 mL of 1.50 mol/L nitric acid is mixed with 50.0 mL of 1.00 mol/L potassium hydroxide solution in a polystyrene cup. The temperature rises from 21.0 °C to 28.4 °C. Assume the density of the mixture is 1.00 g/mL and its specific heat capacity is 4.18 J g⁻¹ °C⁻¹. Calculate the molar enthalpy of neutralisation.\" The full question stays on screen. Countdown ring for 10 seconds with \"Pause here to answer.\" Nothing answer-bearing: no ladder, no aid, no equation strip.",
        [
            "Countdown ring"
        ],
        "10 second answer-free countdown after \"Pause here to answer.\"; the card stays on screen"
    ],
    "feedback-1": [
        "new",
        "the question card stays and shrinks to the top.",
        "Brief feedback (feedback 1 (brief)): the answer, the key reason with the givens underlined, and one crossed classic mistake (owner rule, 16 October).",
        "zero point zero six zero zero / zero point zero five zero zero / ninety grams / minus fifty six kilojoules per mole / excess",
        "On the spoken cues: On \"zero point zero six zero zero\" \"40.0 mL of 1.50 mol/L nitric acid\" is underlined and \"n(H⁺) = 1.50 × 0.0400 = 0.0600 mol\" writes; on \"zero point zero five zero zero\" \"50.0 mL of 1.00 mol/L potassium hydroxide\" is underlined, \"n(OH⁻) = 0.0500 mol\", the two bars show violet emptying first, chip \"n(H₂O) = 0.0500 mol\". On \"ninety grams\" both volumes are underlined again, \"m = 90.0 g\"; the temperatures are",
        "explain",
        "the question card stays and shrinks to the top. On \"zero point zero six zero zero\" \"40.0 mL of 1.50 mol/L nitric acid\" is underlined and \"n(H⁺) = 1.50 × 0.0400 = 0.0600 mol\" writes; on \"zero point zero five zero zero\" \"50.0 mL of 1.00 mol/L potassium hydroxide\" is underlined, \"n(OH⁻) = 0.0500 mol\", the two bars show violet emptying first, chip \"n(H₂O) = 0.0500 mol\". On \"ninety grams\" both volumes are underlined again, \"m = 90.0 g\"; the temperatures are underlined, \"ΔT = 7.4 °C\"; \"q = 90.0 × 4.18 × 7.4 = 2783.9 J\". The n lines and the m and ΔT lines dim as each next line writes. Line: \"ΔH = −2.784 kJ ÷ 0.0500 mol = −55.68 kJ/mol\"; answer chip \"ΔH = −56 kJ/mol (2 s.f., as ΔT = 7.4 °C)\". On \"excess\" a chip \"÷ 0.0600 mol: −46 kJ/mol\" fades in and is crossed (caption \"use the reactant that runs out\"). Hold about 1 second. Hold about 1 second.",
        [
            "HandText write-on",
            "Mark cross",
            "chip pop",
            "Mark underline",
            "bar fill"
        ],
        "Hold about 1 second"
    ],
    "attempt-2": [
        "new",
        "question card: \"A student repeats the experiment in which 50.0 mL of 1.00 mol/L HCl was mixed with 50.0 mL of 1.00 mol/L NaOH, this time using 100.0 mL of each solution at the same concentrations.",
        "Unseen transfer task (attempt 2 (countdown, 10 seconds)) with every given and demand on screen, a 10 second countdown and no answer cues.",
        "Last one. A student repeats the hook experiment,",
        "The question card builds with every given visible and stays on screen; no answer cues appear; the countdown ring runs for 10 seconds after \"Pause here to answer.\" (attempt 2 (countdown, 10 seconds))",
        "explain",
        "question card: \"A student repeats the experiment in which 50.0 mL of 1.00 mol/L HCl was mixed with 50.0 mL of 1.00 mol/L NaOH, this time using 100.0 mL of each solution at the same concentrations. Predict how the temperature rise and the calculated enthalpy of neutralisation would compare with the first experiment. Justify your answer.\" The full question stays on screen. Countdown ring for 10 seconds with \"Pause here to answer.\" Nothing answer-bearing: no cups, no earlier results.",
        [
            "Countdown ring"
        ],
        "10 second answer-free countdown after \"Pause here to answer.\"; the card stays on screen"
    ],
    "feedback-2": [
        "new",
        "on \"about the same\" \"100.0 mL of each solution\" in the question is underlined and verdict chip \"ΔT ≈ same (6.5 °C); ΔH ≈ same (−54 kJ/mol)\" pins.",
        "Brief feedback (feedback 2 (brief)): the answer, the key reason with the givens underlined, and one crossed classic mistake (owner rule, 16 October).",
        "about the same / twice the heat / twice the mass / per mole of water",
        "On the spoken cues: On \"twice the heat\" two cups side by side, the second twice the size with twice the water tokens and orange ripples (\"2 × q\"); on \"twice the mass\" the second cup's fill is bracketed \"2 × m\", and a fraction writes \"ΔT = q ÷ (m c): 2q ÷ 2m = same\". On \"per mole of water\" \"2q ÷ 2n = same\" writes under it. On \"classic slip\" a chip \"ΔT doubles to 13 °C\" fades in and is crossed (caption \"twice the mass to warm\").",
        "explain",
        "on \"about the same\" \"100.0 mL of each solution\" in the question is underlined and verdict chip \"ΔT ≈ same (6.5 °C); ΔH ≈ same (−54 kJ/mol)\" pins. On \"twice the heat\" two cups side by side, the second twice the size with twice the water tokens and orange ripples (\"2 × q\"); on \"twice the mass\" the second cup's fill is bracketed \"2 × m\", and a fraction writes \"ΔT = q ÷ (m c): 2q ÷ 2m = same\". On \"per mole of water\" \"2q ÷ 2n = same\" writes under it. On \"classic slip\" a chip \"ΔT doubles to 13 °C\" fades in and is crossed (caption \"twice the mass to warm\"). Hold about 1 second. Hold about 1 second.",
        [
            "HandText write-on",
            "Mark cross",
            "chip pop",
            "Mark underline",
            "token flight"
        ],
        "Hold about 1 second"
    ],
    "decision-rule": [
        "adjust",
        "the question card writes, each line lighting on its words: \"1 Moles of H⁺ and OH⁻: the smaller sets n(H₂O).\"",
        "Decision rule and handoff: So for any neutralisation heat question: the smaller of the hydrogen ion and hydroxide ion moles sets the moles of water.",
        "Next",
        "On the spoken cues: \"2 q = mcΔT with the mass of all the solution.\" \"3 ΔH = −q ÷ n(H₂O), in kJ/mol.\" \"4 Temperature up: ΔH negative.\" On \"Next\" a chip \"Next: measuring the enthalpy of neutralisation in the lab\" appears with `m6-foam-cup-calorimeter-v1.png` small and the three heat-loss arrows from scene 9.",
        "explain",
        "the question card writes, each line lighting on its words: \"1 Moles of H⁺ and OH⁻: the smaller sets n(H₂O).\" \"2 q = mcΔT with the mass of all the solution.\" \"3 ΔH = −q ÷ n(H₂O), in kJ/mol.\" \"4 Temperature up: ΔH negative.\" On \"Next\" a chip \"Next: measuring the enthalpy of neutralisation in the lab\" appears with `m6-foam-cup-calorimeter-v1.png` small and the three heat-loss arrows from scene 9. Hold about 2 seconds. Hold about 2 seconds.",
        [
            "HandText write-on",
            "chip pop",
            "DrawPath",
            "Plate"
        ],
        "Hold about 2 seconds"
    ],
    "key-notes": [
        "new",
        "Key notes card with the numbered notes, the memory aid in large writing and its condition tag",
        "Essentials to copy into books",
        "key notes",
        "Notes appear then stay still for copying",
        "hold",
        "The notes and the memory aid appear and lock",
        [
            "Enter reveals"
        ],
        "Quiet copy hold of about 60 seconds with pause invitation"
    ]
}

M6C04_ROWS = {
    "hook": [
        "adjust",
        "four plates arrive one per sentence in a 2 × 2 grid: `m6-antacid-tablets-v1.png` beside a coded beaker \"stomach acid, HCl\"; the new `m6-soil-crop-acid-v1.png`; `m6-flue-gas-scrubber-v1.png` (inlet duct and dark smoke only, the tower dimmed, coded); the new `m6-acid-mine-drainage-v1.png`.",
        "Hook (four problems, one cause): Four problems.",
        "orange / acid / choose",
        "On the spoken cues: On \"orange\" the creek plate pulses. On \"acid\" a teal H⁺ token drops onto each plate and a tag \"too much H⁺\" writes once in the centre. On \"sodium hydroxide\" a grey chip \"NaOH?\" moves to each plate in turn and is crossed. Heading writes: \"Too much acid. Which base, and why?\"",
        "explain",
        "four plates arrive one per sentence in a 2 × 2 grid: `m6-antacid-tablets-v1.png` beside a coded beaker \"stomach acid, HCl\"; the new `m6-soil-crop-acid-v1.png`; `m6-flue-gas-scrubber-v1.png` (inlet duct and dark smoke only, the tower dimmed, coded); the new `m6-acid-mine-drainage-v1.png`. On \"orange\" the creek plate pulses. On \"acid\" a teal H⁺ token drops onto each plate and a tag \"too much H⁺\" writes once in the centre. On \"sodium hydroxide\" a grey chip \"NaOH?\" moves to each plate in turn and is crossed. Heading writes: \"Too much acid. Which base, and why?\" Hold about 1 second. Hold about 1 second.",
        [
            "HandText write-on",
            "Mark cross",
            "chip pop",
            "token flight",
            "Plate"
        ],
        "Hold about 1 second"
    ],
    "choosing": [
        "new",
        "the grid shrinks to thumbnails along the bottom.",
        "What neutralising does, and how to choose: Neutralising means using up the extra hydrogen ions, so the pH moves back towards seven.",
        "hydrogen ions / safe / cheap / gently / leave behind",
        "On the spoken cues: A lens: teal H⁺ tokens; a base adds violet acceptors that take them (C01 hop), the teal count falls. On \"hydrogen ions\" the pH strip bar draws under the lens with the marker sliding from about 2 towards 7 (no numbers spoken; ticks 0, 7, 14 only). On \"safe\", \"cheap\", \"gently\" and \"leave behind\" the choice card writes one word at a time large in the centre, then shrinks to the top-right corner, where it stays for the",
        "explain",
        "the grid shrinks to thumbnails along the bottom. A lens: teal H⁺ tokens; a base adds violet acceptors that take them (C01 hop), the teal count falls. On \"hydrogen ions\" the pH strip bar draws under the lens with the marker sliding from about 2 towards 7 (no numbers spoken; ticks 0, 7, 14 only). On \"safe\", \"cheap\", \"gently\" and \"leave behind\" the choice card writes one word at a time large in the centre, then shrinks to the top-right corner, where it stays for the rest of the video. On \"too basic\" the marker overshoots towards 12 and is pulled back, tagged \"overshoot\". Hold about 1 second. Hold about 1 second.",
        [
            "HandText write-on",
            "tick",
            "token flight",
            "Cam lens zoom",
            "DrawPath",
            "bar fill"
        ],
        "Hold about 1 second"
    ],
    "stomach": [
        "adjust",
        "plate `m6-antacid-tablets-v1.png` large with the coded beaker \"hydrochloric acid, like stomach acid\".",
        "The stomach (antacids): Start with the stomach.",
        "caustic / Magnesium hydroxide / Calcium carbonate / burp",
        "On the spoken cues: The choice card lights \"safe\". On \"caustic\" a grey chip \"NaOH\" sits by the beaker with a red tag \"caustic: burns tissue\" and is crossed. On \"barely dissolve\" a tablet drops into the beaker in the lens; only its surface releases a few particles where teal tokens touch it (tag \"reacts where acid meets it\"); \"gently\" lights. On \"Magnesium hydroxide\" the strip writes small (callback, already taught in C02): \"Mg(OH)₂(s)",
        "explain",
        "plate `m6-antacid-tablets-v1.png` large with the coded beaker \"hydrochloric acid, like stomach acid\". The choice card lights \"safe\". On \"caustic\" a grey chip \"NaOH\" sits by the beaker with a red tag \"caustic: burns tissue\" and is crossed. On \"barely dissolve\" a tablet drops into the beaker in the lens; only its surface releases a few particles where teal tokens touch it (tag \"reacts where acid meets it\"); \"gently\" lights. On \"Magnesium hydroxide\" the strip writes small (callback, already taught in C02): \"Mg(OH)₂(s) + 2HCl(aq) → MgCl₂(aq) + 2H₂O(l)\". It dims; on \"Calcium carbonate\" the strip writes: \"CaCO₃(s) + 2HCl(aq) → CaCl₂(aq) + H₂O(l) + CO₂(g)\" and grey-green bubbles rise in the lens; \"leaves behind\" lights. On \"burp\" a tag \"CO₂ gas: carbonates only\" pins beside the CaCO₃ line; a chip \"Mg(OH)₂ antacid gives CO₂\" fades in and is crossed (caption \"no carbonate, no CO₂\"). Hold about 1 second. Hold about 1 second.",
        [
            "HandText write-on",
            "Mark cross",
            "chip pop",
            "token flight",
            "Cam lens zoom",
            "Plate"
        ],
        "Hold about 1 second"
    ],
    "soil-problem": [
        "adjust",
        "the new `m6-soil-crop-acid-v1.png` large (stunted yellowing seedlings; a cutaway of the soil shows short, stubby roots).",
        "The paddock (why soil turns acidic): Now the paddock.",
        "ammonium fertilisers / aluminium",
        "On the spoken cues: On \"rain\" faint coded rain lines fall and teal tokens appear in the soil cutaway. On \"ammonium fertilisers\" `m6-fertiliser-granules-v1.png` small with a tag \"NH₄⁺ → bacteria → H⁺\" (no equation). On \"aluminium\" the pH strip bar slides to just below 5.5 (a tick labelled \"about 5.5\") and small amber \"Al³⁺\" tokens leave a grey mineral grain in the cutaway; on \"damages plant roots\" a pen ring circles the stubby roots,",
        "explain",
        "the new `m6-soil-crop-acid-v1.png` large (stunted yellowing seedlings; a cutaway of the soil shows short, stubby roots). On \"rain\" faint coded rain lines fall and teal tokens appear in the soil cutaway. On \"ammonium fertilisers\" `m6-fertiliser-granules-v1.png` small with a tag \"NH₄⁺ → bacteria → H⁺\" (no equation). On \"aluminium\" the pH strip bar slides to just below 5.5 (a tick labelled \"about 5.5\") and small amber \"Al³⁺\" tokens leave a grey mineral grain in the cutaway; on \"damages plant roots\" a pen ring circles the stubby roots, tag \"dissolved Al³⁺ harms roots\". Hold about 1 second. Hold about 1 second.",
        [
            "ScribbleCircle",
            "Enter slide",
            "tick",
            "token flight",
            "bar fill",
            "Plate"
        ],
        "Hold about 1 second"
    ],
    "liming": [
        "adjust",
        "on \"agricultural lime\" the term writes with \"= crushed limestone, CaCO₃\" under it.",
        "Agricultural lime: The fix is agricultural lime, which is crushed limestone, calcium carbonate.",
        "agricultural lime / two hydrogen ions / pH rises / strongly basic",
        "On the spoken cues: The term dims before the lens opens (Revision 2). Lens in the soil: two teal tokens hop onto a CO₃²⁻ (C01 hop), forming dashed H₂CO₃ that splits into H₂O and a grey-green bubble (C02 motion); `m6-marble-chips-acid-v1.png` small beside the lens, untagged (the fizzing carries the link). The strip writes: \"CaCO₃(s) + 2H⁺(aq) → Ca²⁺(aq) + H₂O(l) + CO₂(g)\". On \"pH rises\" the pH marker slides up to about 6.5. On \"roots",
        "explain",
        "on \"agricultural lime\" the term writes with \"= crushed limestone, CaCO₃\" under it. The term dims before the lens opens (Revision 2). Lens in the soil: two teal tokens hop onto a CO₃²⁻ (C01 hop), forming dashed H₂CO₃ that splits into H₂O and a grey-green bubble (C02 motion); `m6-marble-chips-acid-v1.png` small beside the lens, untagged (the fizzing carries the link). The strip writes: \"CaCO₃(s) + 2H⁺(aq) → Ca²⁺(aq) + H₂O(l) + CO₂(g)\". On \"pH rises\" the pH marker slides up to about 6.5. On \"roots recover\" a 1 second crossfade from `m6-soil-crop-acid-v1.png` to the new aligned `m6-soil-crop-limed-v1.png` (green seedlings, longer roots, white lime worked into the surface); the Al³⁺ tokens return to grains. On \"strongly basic\" the choice card lights \"cheap\", \"safe\" and \"gently\" together; a tag \"no acid left: limestone stops reacting\" pins. Hold about 1 second. Hold about 1 second.",
        [
            "HandText write-on",
            "Enter slide",
            "Plate crossfade",
            "chip pop",
            "token flight",
            "Cam lens zoom",
            "Plate"
        ],
        "Hold about 1 second"
    ],
    "acid-rain": [
        "adjust",
        "`m6-flue-gas-scrubber-v1.png` with the tower masked out, showing only the inlet duct and its dark smoke (coded mask).",
        "The chimney (where acid rain comes from): The chimney is a different kind of problem.",
        "sulfur dioxide / sulfurous acid / sulfuric acid / acid rain",
        "On the spoken cues: On \"sulfur dioxide\" a coded SO₂ molecule (one yellow S, two red O) rises from the smoke. On \"sulfurous acid\" a droplet outline swallows it, tag \"SO₂ + H₂O → H₂SO₃\"; on \"sulfuric acid\" a second tag \"→ H₂SO₄ (oxidised in air)\". On \"acid rain\" coded drops fall onto a small lake outline and a limestone block outline; the lake's pH marker slides down; a pen ring on the block edge, tag \"limestone eaten away\".",
        "explain",
        "`m6-flue-gas-scrubber-v1.png` with the tower masked out, showing only the inlet duct and its dark smoke (coded mask). On \"sulfur dioxide\" a coded SO₂ molecule (one yellow S, two red O) rises from the smoke. On \"sulfurous acid\" a droplet outline swallows it, tag \"SO₂ + H₂O → H₂SO₃\"; on \"sulfuric acid\" a second tag \"→ H₂SO₄ (oxidised in air)\". On \"acid rain\" coded drops fall onto a small lake outline and a limestone block outline; the lake's pH marker slides down; a pen ring on the block edge, tag \"limestone eaten away\". Hold about 1 second. Hold about 1 second.",
        [
            "ScribbleCircle",
            "Enter slide",
            "Plate"
        ],
        "Hold about 1 second"
    ],
    "scrubber": [
        "new",
        "the mask lifts and the whole scrubber plate shows; on \"scrubber\" a pen arrow traces the gas path from the duct up through the sprays to the white plume.",
        "The scrubber (an acidic oxide meets a base): So power stations remove it before it leaves the chimney, in a scrubber.",
        "scrubber / slurry / calcium sulfite and water / acidic oxide / sulfurous acid / solid",
        "On the spoken cues: On \"slurry\" a ring on the spray nozzles, tag \"Ca(OH)₂ slurry\" (fades at the sentence end). The strip writes: \"Ca(OH)₂ + SO₂(g) → CaSO₃(s) + H₂O(l)\". On \"no hydrogen\" a pen ring sweeps SO₂, a grey teal-token outline beside it is crossed (C01 style), tag \"SO₂: no H of its own\". On \"acidic oxide\" the tag is replaced by the term and its meaning under the strip. On \"sulfurous acid\" a small lens in a slurry droplet: an",
        "explain",
        "the mask lifts and the whole scrubber plate shows; on \"scrubber\" a pen arrow traces the gas path from the duct up through the sprays to the white plume. On \"slurry\" a ring on the spray nozzles, tag \"Ca(OH)₂ slurry\" (fades at the sentence end). The strip writes: \"Ca(OH)₂ + SO₂(g) → CaSO₃(s) + H₂O(l)\". On \"no hydrogen\" a pen ring sweeps SO₂, a grey teal-token outline beside it is crossed (C01 style), tag \"SO₂: no H of its own\". On \"acidic oxide\" the tag is replaced by the term and its meaning under the strip. On \"sulfurous acid\" a small lens in a slurry droplet: an SO₂ molecule meets water and becomes \"H₂SO₃\" (the scene 6 droplet motion), then its teal tokens hop to violet OH⁻ and become pale blue water; tag \"SO₂ + H₂O → H₂SO₃, then neutralised\" replaces the term. (Revision 2: the \"no proton moves\" tag, the crossed \"SO₂ accepts a proton\" chip and the C01 CaO + SO₃ callback are removed; in a wet slurry the hydrogen ions that react come from sulfurous acid, so \"no proton transfer\" was wrong here, and the callback was to a dry reaction.) On \"solid\" the lens and tag fade; a ring on the slurry pool at the base; white particles settle; tag \"CaSO₃(s) collected → gypsum\". The choice card lights \"leaves behind\". Hold about 1 second. Hold about 1 second.",
        [
            "HandText write-on",
            "Mark cross",
            "ScribbleCircle",
            "chip pop",
            "token flight",
            "Cam lens zoom",
            "DrawPath"
        ],
        "Hold about 1 second"
    ],
    "mine-drainage": [
        "adjust",
        "the new `m6-acid-mine-drainage-v1.png` large (rust-orange water running over orange-stained rocks from a grey spoil heap).",
        "The orange creek (acid mine drainage): Now the orange creek.",
        "sulfuric acid / iron ions / toxic metals dissolved",
        "On the spoken cues: On \"sulfuric acid\" a tag \"iron sulfide + air + water → H₂SO₄\" writes over the spoil heap; teal tokens fill a lens of the creek water; on \"iron ions\" amber Fe³⁺ tokens join them. The pH marker drops to about 3 (\"pH 3 or lower\"). On \"toxic metals dissolved\" amber metal tokens drift downstream past a small coded water-weed outline, tag \"harms river life; metals stay dissolved\".",
        "explain",
        "the new `m6-acid-mine-drainage-v1.png` large (rust-orange water running over orange-stained rocks from a grey spoil heap). On \"sulfuric acid\" a tag \"iron sulfide + air + water → H₂SO₄\" writes over the spoil heap; teal tokens fill a lens of the creek water; on \"iron ions\" amber Fe³⁺ tokens join them. The pH marker drops to about 3 (\"pH 3 or lower\"). On \"toxic metals dissolved\" amber metal tokens drift downstream past a small coded water-weed outline, tag \"harms river life; metals stay dissolved\". Hold about 1 second. Hold about 1 second.",
        [
            "HandText write-on",
            "token flight",
            "Cam lens zoom",
            "Plate"
        ],
        "Hold about 1 second"
    ],
    "lime-treatment": [
        "adjust",
        "lens of the creek water: on \"hydrated lime\" violet OH⁻ tokens enter (tag \"Ca(OH)₂ = hydrated lime\"); each meets a teal token and becomes pale blue water; strip writes \"H⁺(aq) + OH⁻(aq) → H₂O(l)\" and the pH marker climbs.",
        "Hydrated lime treatment (neutralise and precipitate): Treatment plants add hydrated lime, calcium hydroxide, to the drainage water.",
        "hydrated lime / insoluble hydroxides / sludge / removes the metals / controls the dose",
        "On the spoken cues: On \"insoluble hydroxides\" each amber Fe³⁺ collects three violet OH⁻ and falls as a rust-brown particle (C13 motion); the second strip line writes \"Fe³⁺(aq) + 3OH⁻(aq) → Fe(OH)₃(s)\"; `m5x-ppt-feoh3-brown-v1.png` small with the callback tag \"precipitates video\". On \"sludge\" the particles settle into a brown layer at the bottom of the lens; tag \"sludge settles out\". On \"removes the metals\" the choice card lights",
        "explain",
        "lens of the creek water: on \"hydrated lime\" violet OH⁻ tokens enter (tag \"Ca(OH)₂ = hydrated lime\"); each meets a teal token and becomes pale blue water; strip writes \"H⁺(aq) + OH⁻(aq) → H₂O(l)\" and the pH marker climbs. On \"insoluble hydroxides\" each amber Fe³⁺ collects three violet OH⁻ and falls as a rust-brown particle (C13 motion); the second strip line writes \"Fe³⁺(aq) + 3OH⁻(aq) → Fe(OH)₃(s)\"; `m5x-ppt-feoh3-brown-v1.png` small with the callback tag \"precipitates video\". On \"sludge\" the particles settle into a brown layer at the bottom of the lens; tag \"sludge settles out\". On \"removes the metals\" the choice card lights \"leaves behind\"; the strips and the Fe(OH)₃ plate dim. On \"Why not limestone\" a small `m6-soil-crop-limed-v1.png` thumbnail with a \"CaCO₃\" tile slides in beside a \"Ca(OH)₂\" tile; the pH marker shows the limestone tile stopping near 7 to 8 and the hydrated lime tile reaching higher (bar positions only, no numbers spoken); on \"controls the dose\" the choice card lights \"gently\" with a small dial icon (tag \"less gentle: dose controlled\"). The thumbnail and tiles fade. On \"too basic\" the pH strip bar shows a marker at about 11 sliding down to 7 with a small tag \"alkaline waste: add acid or CO₂\". Hold about 1 second. Hold about 1 second.",
        [
            "HandText write-on",
            "Enter slide",
            "token flight",
            "Cam lens zoom",
            "bar fill",
            "Plate"
        ],
        "Hold about 1 second"
    ],
    "memory-aid": [
        "new",
        "the four plates return in the 2 × 2 grid.",
        "Memory aid (every fix leaves something behind): So here's the idea that ties these together.",
        "Every fix leaves something behind / problem / treatment / equation / effect",
        "On the spoken cues: The aid writes large and handwritten across the top: \"Every fix leaves something behind.\" On each case a small product tag pins to its plate in turn, and each tag dims as the next one writes (Revision 2): \"MgCl₂ + H₂O; CaCO₃ adds CO₂\"; \"Ca²⁺ + H₂O + CO₂\"; \"CaSO₃(s), collected\"; \"Fe(OH)₃ sludge\". On \"problem\" the tags fade and a four-step frame writes under the grid: \"problem → treatment → equation → effect on pH\".",
        "explain",
        "the four plates return in the 2 × 2 grid. The aid writes large and handwritten across the top: \"Every fix leaves something behind.\" On each case a small product tag pins to its plate in turn, and each tag dims as the next one writes (Revision 2): \"MgCl₂ + H₂O; CaCO₃ adds CO₂\"; \"Ca²⁺ + H₂O + CO₂\"; \"CaSO₃(s), collected\"; \"Fe(OH)₃ sludge\". On \"problem\" the tags fade and a four-step frame writes under the grid: \"problem → treatment → equation → effect on pH\". No condition tag (the choice card in the corner already carries safe, cheap and gentle). Hold about 2 seconds. Hold about 2 seconds.",
        [
            "HandText write-on"
        ],
        "Hold about 2 seconds"
    ],
    "attempt-1": [
        "new",
        "the board clears.",
        "Unseen transfer task (attempt 1 (countdown, 10 seconds)) with every given and demand on screen, a 10 second countdown and no answer cues.",
        "Your turn. A lake has become acidic as",
        "The question card builds with every given visible and stays on screen; no answer cues appear; the countdown ring runs for 10 seconds after \"Pause here to answer.\" (attempt 1 (countdown, 10 seconds))",
        "explain",
        "the board clears. Question card, worded as printed: \"A lake has become acidic as a result of acid rain, and its fish population is declining. Powdered limestone is added to the lake. Explain how the limestone raises the pH of the lake water. Include a balanced equation in your answer.\" The full question stays on screen. Countdown ring for 10 seconds with \"Pause here to answer.\" Nothing answer-bearing: no plates, no equations, no lens.",
        [
            "Cam lens zoom",
            "Countdown ring"
        ],
        "10 second answer-free countdown after \"Pause here to answer.\"; the card stays on screen"
    ],
    "feedback-1": [
        "new",
        "the question card stays.",
        "Brief feedback (feedback 1 (brief)): the answer, the key reason with the givens underlined, and one crossed classic mistake (owner rule, 16 October).",
        "carbonate ion / carbon dioxide / used up / pH rises / carbonate",
        "On the spoken cues: On \"carbonate ion\" \"Powdered limestone\" is underlined, and the tile \"CaCO₃(s)\" pins; the lens shows two teal tokens hopping onto CO₃²⁻ and the split into H₂O and a CO₂ bubble. The answer strip writes: \"CaCO₃(s) + 2H⁺(aq) → Ca²⁺(aq) + H₂O(l) + CO₂(g)\"; \"Include a balanced equation\" in the question is underlined as it writes. On \"used up\" \"raises the pH\" is underlined and the pH marker slides up; chip \"H⁺ used up, so",
        "explain",
        "the question card stays. On \"carbonate ion\" \"Powdered limestone\" is underlined, and the tile \"CaCO₃(s)\" pins; the lens shows two teal tokens hopping onto CO₃²⁻ and the split into H₂O and a CO₂ bubble. The answer strip writes: \"CaCO₃(s) + 2H⁺(aq) → Ca²⁺(aq) + H₂O(l) + CO₂(g)\"; \"Include a balanced equation\" in the question is underlined as it writes. On \"used up\" \"raises the pH\" is underlined and the pH marker slides up; chip \"H⁺ used up, so pH rises\". On \"trap\" a chip \"Ca²⁺ ions neutralise H⁺\" fades in and is crossed (caption \"the carbonate accepts H⁺\"). Hold about 1 second. Hold about 1 second.",
        [
            "HandText write-on",
            "Mark cross",
            "Enter slide",
            "chip pop",
            "Mark underline",
            "token flight",
            "Cam lens zoom"
        ],
        "Hold about 1 second"
    ],
    "attempt-2": [
        "new",
        "question card: \"Some power stations remove sulfur dioxide from flue gas using powdered limestone, CaCO₃, instead of calcium hydroxide.",
        "Unseen transfer task (attempt 2 (countdown, 10 seconds)) with every given and demand on screen, a 10 second countdown and no answer cues.",
        "Last one. Some power stations remove sulfur dioxide",
        "The question card builds with every given visible and stays on screen; no answer cues appear; the countdown ring runs for 10 seconds after \"Pause here to answer.\" (attempt 2 (countdown, 10 seconds))",
        "explain",
        "question card: \"Some power stations remove sulfur dioxide from flue gas using powdered limestone, CaCO₃, instead of calcium hydroxide. The products are calcium sulfite and one gas. Write a balanced equation for this reaction, and identify one disadvantage of using limestone.\" The full question stays on screen. Countdown ring for 10 seconds with \"Pause here to answer.\" Nothing answer-bearing: no scrubber plate, no earlier equations.",
        [
            "HandText write-on",
            "Countdown ring"
        ],
        "10 second answer-free countdown after \"Pause here to answer.\"; the card stays on screen"
    ],
    "feedback-2": [
        "new",
        "on \"calcium sulfite\" \"powdered limestone, CaCO₃\" and \"calcium sulfite and one gas\" are underlined; the answer strip writes: \"CaCO₃(s) + SO₂(g) → CaSO₃(s) + CO₂(g)\" with a silent tally under it \"Ca 1, S 1, C 1, O 5 = 5\".",
        "Brief feedback (feedback 2 (brief)): the answer, the key reason with the givens underlined, and one crossed classic mistake (owner rule, 16 October).",
        "calcium sulfite / carbon dioxide / hydrogen",
        "On the spoken cues: On \"hydrogen\" a pen ring sweeps both reactants, tag \"no H\". On \"carbon dioxide\" \"one disadvantage\" is underlined; answer chip \"Disadvantage: releases CO₂, a greenhouse gas\" pins, with a small grey tag \"advantage: limestone is cheaper\". The scrubber plate returns small with a grey-green tint in its plume. On \"classic slip\" a chip \"CaCO₃ + SO₂ → CaSO₃ + H₂O\" fades in and is crossed (caption \"no hydrogen, so no water\").",
        "explain",
        "on \"calcium sulfite\" \"powdered limestone, CaCO₃\" and \"calcium sulfite and one gas\" are underlined; the answer strip writes: \"CaCO₃(s) + SO₂(g) → CaSO₃(s) + CO₂(g)\" with a silent tally under it \"Ca 1, S 1, C 1, O 5 = 5\". On \"hydrogen\" a pen ring sweeps both reactants, tag \"no H\". On \"carbon dioxide\" \"one disadvantage\" is underlined; answer chip \"Disadvantage: releases CO₂, a greenhouse gas\" pins, with a small grey tag \"advantage: limestone is cheaper\". The scrubber plate returns small with a grey-green tint in its plume. On \"classic slip\" a chip \"CaCO₃ + SO₂ → CaSO₃ + H₂O\" fades in and is crossed (caption \"no hydrogen, so no water\"). Hold about 1 second. Hold about 1 second.",
        [
            "HandText write-on",
            "Mark cross",
            "ScribbleCircle",
            "chip pop",
            "Mark underline"
        ],
        "Hold about 1 second"
    ],
    "decision-rule": [
        "adjust",
        "the question card writes, each line lighting on its words: \"1 Problem: what is too acidic (or too basic), and why?\"",
        "Decision rule and handoff: So for any neutralisation application: name what's too acidic or too basic, choose a treatment that's safe, cheap and gentle, write the equation, and say what happens to the pH and what's left behind.",
        "Next",
        "On the spoken cues: \"2 Treatment: safe, cheap, gentle.\" \"3 Equation: hydroxide gives water; carbonate gives water and CO₂; oxide gives a salt.\" \"4 Effect: pH moves towards 7; what is left behind.\" On \"Next\" a chip \"Next: strong and weak acids, and concentration\" appears with `m6-ph-meter-probe-beaker-v1.png` small.",
        "explain",
        "the question card writes, each line lighting on its words: \"1 Problem: what is too acidic (or too basic), and why?\" \"2 Treatment: safe, cheap, gentle.\" \"3 Equation: hydroxide gives water; carbonate gives water and CO₂; oxide gives a salt.\" \"4 Effect: pH moves towards 7; what is left behind.\" On \"Next\" a chip \"Next: strong and weak acids, and concentration\" appears with `m6-ph-meter-probe-beaker-v1.png` small. Hold about 2 seconds. Hold about 2 seconds.",
        [
            "HandText write-on",
            "chip pop",
            "Plate"
        ],
        "Hold about 2 seconds"
    ],
    "key-notes": [
        "new",
        "Key notes card with the numbered notes, the memory aid in large writing and its condition tag",
        "Essentials to copy into books",
        "key notes",
        "Notes appear then stay still for copying",
        "hold",
        "The notes and the memory aid appear and lock",
        [
            "Enter reveals"
        ],
        "Quiet copy hold of about 60 seconds with pause invitation"
    ]
}

M6C05_ROWS = {
    "hook": [
        "adjust",
        "two `m6-beaker-v1.png` plates side by side with coded labels \"hydrochloric acid, 0.10 mol/L\" (left) and \"acetic acid, 0.10 mol/L\" (right); `m6-vinegar-bottle-v1.png` small beside the right beaker on \"vinegar\", then fades.",
        "Hook (same label, different acid): Here are two beakers of acid, hydrochloric acid and acetic acid, the acid in vinegar.",
        "one point zero / two point nine / fizzes hard",
        "On the spoken cues: On \"same amount\" both labels' \"0.10 mol/L\" get a pen underline and an \"=\" between them. `m6-ph-meter-probe-beaker-v1.png` slides in at the right; on \"one point zero\" the probe moves along a coded arc into the left beaker and the screen readout shows \"pH 1.0\", which pins as a chip on the left beaker; on \"two point nine\" it moves to the right beaker, \"pH 2.9\" pins on the right. The meter leaves. On \"fizzes hard\" the",
        "explain",
        "two `m6-beaker-v1.png` plates side by side with coded labels \"hydrochloric acid, 0.10 mol/L\" (left) and \"acetic acid, 0.10 mol/L\" (right); `m6-vinegar-bottle-v1.png` small beside the right beaker on \"vinegar\", then fades. On \"same amount\" both labels' \"0.10 mol/L\" get a pen underline and an \"=\" between them. `m6-ph-meter-probe-beaker-v1.png` slides in at the right; on \"one point zero\" the probe moves along a coded arc into the left beaker and the screen readout shows \"pH 1.0\", which pins as a chip on the left beaker; on \"two point nine\" it moves to the right beaker, \"pH 2.9\" pins on the right. The meter leaves. On \"fizzes hard\" the beakers crossfade to `m5x-strong-acid-mg-v1.png` (left) and `m5x-weak-acid-mg-v1.png` (right), labels kept. Once the \"=\" has been seen, both name labels dim to grey, so the bright items are the two pH chips and the heading. Heading writes: \"Same concentration. Why different?\" Hold about 1 second. Hold about 1 second.",
        [
            "HandText write-on",
            "Enter slide",
            "Plate crossfade",
            "chip pop",
            "Mark underline",
            "NumberTicker",
            "Plate"
        ],
        "Hold about 1 second"
    ],
    "inside-beakers": [
        "new",
        "the plates shrink to the top corners (labels and pH chips kept, dimmed).",
        "Inside the two beakers: Zoom in.",
        "every / whole / one molecule in eighty / fewer",
        "On the spoken cues: Two particle lenses open beneath them, the same size and drawn schematically (Codex check 86): each is filled edge to edge with a dense field of particles that runs on past the lens rim and softens at its edge, so no fraction can be counted; the counter under each lens carries the number. Left lens on \"every\": the HCl molecules release their teal tokens onto neighbouring waters, giving hydronium tokens and grey Cl⁻",
        "explain",
        "the plates shrink to the top corners (labels and pH chips kept, dimmed). Two particle lenses open beneath them, the same size and drawn schematically (Codex check 86): each is filled edge to edge with a dense field of particles that runs on past the lens rim and softens at its edge, so no fraction can be counted; the counter under each lens carries the number. Left lens on \"every\": the HCl molecules release their teal tokens onto neighbouring waters, giving hydronium tokens and grey Cl⁻ throughout; the counter reads \"split: all\". Right lens on \"whole\": the field of amber-outlined acetic acid molecules stays intact; on \"one molecule in eighty\" a single molecule in the foreground hops its token to a water (one example picked out, not a count; the counter reads \"split: about 1 in 80\"). On \"fewer\" both lenses' hydronium tokens pulse: hydronium everywhere on the left, the single example on the right. Hold about 1 second. Hold about 1 second.",
        [
            "chip pop",
            "token flight",
            "Cam lens zoom",
            "NumberTicker"
        ],
        "Hold about 1 second"
    ],
    "strong-weak": [
        "new",
        "the lenses stay.",
        "Strong and weak, and what pH shows: That difference is called strength.",
        "strength / strong acid / weak acid / ten times / hundred / eighty times",
        "On the spoken cues: On \"strong acid\" a tag writes under the left lens: \"strong acid: ionises completely\"; on \"weak acid\" under the right: \"weak acid: ionises partly\" (the counters fade). On \"lower pH\" a short horizontal pH scale draws across the bottom (0 to 14, below 7 tinted acid, 7 marked neutral); the two chips \"1.0\" and \"2.9\" drop onto it, and the tags in the lenses dim. On \"ten times\" the step from 1 to 2 gets a bracket \"× 10\".",
        "explain",
        "the lenses stay. On \"strong acid\" a tag writes under the left lens: \"strong acid: ionises completely\"; on \"weak acid\" under the right: \"weak acid: ionises partly\" (the counters fade). On \"lower pH\" a short horizontal pH scale draws across the bottom (0 to 14, below 7 tinted acid, 7 marked neutral); the two chips \"1.0\" and \"2.9\" drop onto it, and the tags in the lenses dim. On \"ten times\" the step from 1 to 2 gets a bracket \"× 10\". On \"hundred\" the step from 2 to 3 gets a second \"× 10\" and the two merge into one bracket \"× 10 × 10 = × 100\" across 1 to 3. On \"eighty times\" that bracket dims and a bracket from 1.0 to 2.9 reads \"about 80 × more H₃O⁺\". Bright at the end: the two chips and the 80 × bracket. Hold about 1 second. Hold about 1 second.",
        [
            "HandText write-on",
            "chip pop",
            "Cam lens zoom",
            "DrawPath"
        ],
        "Hold about 1 second"
    ],
    "why-weak-stops": [
        "new",
        "the left lens and the pH scale dim; the right lens enlarges.",
        "Why the weak acid stops early: Why does acetic acid stop at so few?",
        "both ways / back / dynamic equilibrium / all the way",
        "On the spoken cues: On \"both ways\" one acetic acid molecule hops its teal token to a water (amber arrow), and on \"back\" a different acetate pulls a token off a hydronium (violet arrow); the two hops repeat at matched pace in different places, and a small balance icon levels with the tag \"forward rate = reverse rate\". On \"dynamic equilibrium\" the tag \"dynamic equilibrium (Module 5)\" writes and the balance tag dims. On \"all the way\" the",
        "explain",
        "the left lens and the pH scale dim; the right lens enlarges. On \"both ways\" one acetic acid molecule hops its teal token to a water (amber arrow), and on \"back\" a different acetate pulls a token off a hydronium (violet arrow); the two hops repeat at matched pace in different places, and a small balance icon levels with the tag \"forward rate = reverse rate\". On \"dynamic equilibrium\" the tag \"dynamic equilibrium (Module 5)\" writes and the balance tag dims. On \"all the way\" the left lens returns small: a chloride sits next to a hydronium and nothing hops; tag \"Cl⁻: no pull back\". Hold about 1 second. Hold about 1 second.",
        [
            "HandText write-on",
            "token flight",
            "Cam lens zoom",
            "DrawPath"
        ],
        "Hold about 1 second"
    ],
    "arrows": [
        "new",
        "the lenses shrink to thumbnails at the left.",
        "The arrow says it: The equation has to say this.",
        "single arrow / double arrow / wrong",
        "On the spoken cues: The equation strip writes: \"HCl(aq) + H₂O(l) → H₃O⁺(aq) + Cl⁻(aq)\" with tag \"strong: complete\"; on \"single arrow\" the → pulses teal. Second strip: \"CH₃COOH(aq) + H₂O(l) ⇌ H₃O⁺(aq) + CH₃COO⁻(aq)\" with tag \"weak: equilibrium\"; on \"double arrow\" the ⇌ pulses. The first strip's tag dims as the second strip writes, and the second tag dims on \"wrong\", so the bright items are the two strips and the crossed chip. On \"wrong\"",
        "explain",
        "the lenses shrink to thumbnails at the left. The equation strip writes: \"HCl(aq) + H₂O(l) → H₃O⁺(aq) + Cl⁻(aq)\" with tag \"strong: complete\"; on \"single arrow\" the → pulses teal. Second strip: \"CH₃COOH(aq) + H₂O(l) ⇌ H₃O⁺(aq) + CH₃COO⁻(aq)\" with tag \"weak: equilibrium\"; on \"double arrow\" the ⇌ pulses. The first strip's tag dims as the second strip writes, and the second tag dims on \"wrong\", so the bright items are the two strips and the crossed chip. On \"wrong\" a chip \"HCl(aq) + H₂O(l) ⇌ ...\" fades in under the first strip and is crossed (caption \"HCl ionises completely: →\"). Hold about 1 second. Hold about 1 second.",
        [
            "HandText write-on",
            "Mark cross",
            "chip pop",
            "DrawPath"
        ],
        "Hold about 1 second"
    ],
    "strong-list": [
        "new",
        "the board clears.",
        "Which acids are strong: So which acids are strong?",
        "So I Brought No Clean Clothes / sulfuric / hydrofluoric acid",
        "On the spoken cues: On \"So I Brought No Clean Clothes\" the line writes large and handwritten across the top. From \"sulfuric\" six formula tiles write under it in mnemonic order, one per name, each under its word, with the word's key letters lighting as its tile writes: \"H₂SO₄ (first H⁺)\" under So, \"HI\" under I, \"HBr\" under Brought, \"HNO₃\" under No, \"HCl\" under Clean, \"HClO₄\" under Clothes. Grey tag: \"others: weak unless told\", which",
        "explain",
        "the board clears. On \"So I Brought No Clean Clothes\" the line writes large and handwritten across the top. From \"sulfuric\" six formula tiles write under it in mnemonic order, one per name, each under its word, with the word's key letters lighting as its tile writes: \"H₂SO₄ (first H⁺)\" under So, \"HI\" under I, \"HBr\" under Brought, \"HNO₃\" under No, \"HCl\" under Clean, \"HClO₄\" under Clothes. Grey tag: \"others: weak unless told\", which dims at the end of its sentence. On \"hydrofluoric acid\" the mnemonic line and the tiles dim except \"HCl\"; a tile \"HF\" slides in beside \"HCl\" with a chip \"HF is strong, like HCl\" that is crossed (caption \"HF is weak: ⇌\"). Hold about 2 seconds. Hold about 2 seconds.",
        [
            "HandText write-on",
            "Mark cross",
            "Enter slide",
            "chip pop"
        ],
        "Hold about 2 seconds"
    ],
    "concentration": [
        "new",
        "the board clears to two dials at the top, labelled with one word each, \"strength\" and \"concentration\" (one turns while the other stays still).",
        "Concentration is a separate dial: Now the second idea.",
        "Concentration / dilute / dilute strong acid / Dilute acetic acid / four combinations",
        "On the spoken cues: On \"Concentration\" the left lens from scene 2 returns and its concentration dial turns down; water molecules flood in so the acid particles thin out, every one still split. On \"dilute strong acid\" a chip \"dilute = weak\" fades in and is crossed (caption \"dilute strong acid\"); no separate tag. On \"Dilute acetic acid\" the chip dims and the right lens thins the same way, still schematic (the field fades at the rim, so",
        "explain",
        "the board clears to two dials at the top, labelled with one word each, \"strength\" and \"concentration\" (one turns while the other stays still). On \"Concentration\" the left lens from scene 2 returns and its concentration dial turns down; water molecules flood in so the acid particles thin out, every one still split. On \"dilute strong acid\" a chip \"dilute = weak\" fades in and is crossed (caption \"dilute strong acid\"); no separate tag. On \"Dilute acetic acid\" the chip dims and the right lens thins the same way, still schematic (the field fades at the rim, so it cannot be counted): a few highlighted molecules split, most still whole, and its counter changes from \"split: about 1 in 80\" to \"0.0010 mol/L: about 1 in 8 split\" (author note b). On \"four combinations\" the screen becomes a 2 × 2 grid of small schematic lenses: rows \"concentrated\", \"dilute\"; columns \"strong\", \"weak\"; the four labels write on and then dim to grey. Concentrated panels are dense fields and dilute panels sparse fields, each fading at the rim so no panel can be counted; strong panels show every particle split, weak panels mostly whole with a few highlighted split molecules as examples. Each weak panel carries a small counter, which is the only number on the grid: \"1.0 mol/L: about 1 in 240 split\" (concentrated weak) and \"0.0010 mol/L: about 1 in 8 split\" (dilute weak). The dials dim. Hold about 2 seconds. Hold about 2 seconds.",
        [
            "HandText write-on",
            "Mark cross",
            "chip pop",
            "Cam lens zoom",
            "NumberTicker"
        ],
        "Hold about 2 seconds"
    ],
    "weak-can-win": [
        "new",
        "two cells of the grid enlarge (concentrated weak, left; dilute strong, right); the other two fade.",
        "A concentrated weak acid can win: Here's the surprise.",
        "two point four / three point zero / four times / same concentration / safe",
        "On the spoken cues: One combined chip under each: \"acetic acid, 1.0 mol/L: pH ≈ 2.4\" on \"two point four\"; \"hydrochloric acid, 0.0010 mol/L: pH 3.0\" on \"three point zero\". On \"four times\" the hydronium tokens in each lens pulse and a bracket reads \"about 4 × more H₃O⁺ in the weak acid\" (the left lens is a dense, uncountable field of whole molecules with eight hydronium tokens; the right is sparse, with two hydronium tokens and two",
        "explain",
        "two cells of the grid enlarge (concentrated weak, left; dilute strong, right); the other two fade. One combined chip under each: \"acetic acid, 1.0 mol/L: pH ≈ 2.4\" on \"two point four\"; \"hydrochloric acid, 0.0010 mol/L: pH 3.0\" on \"three point zero\". On \"four times\" the hydronium tokens in each lens pulse and a bracket reads \"about 4 × more H₃O⁺ in the weak acid\" (the left lens is a dense, uncountable field of whole molecules with eight hydronium tokens; the right is sparse, with two hydronium tokens and two chloride ions and nothing whole; the hydronium tokens are drawn in the bracket's 4 : 1 ratio, and only they are meant to be compared). On \"pH alone\" the bracket dims and a chip \"lower pH = stronger acid\" fades in and is crossed (caption \"pH depends on strength and concentration\"). On \"same concentration\" the two lenses and their chips dim; the hook's two beakers return small with their \"0.10 mol/L\" labels underlined and a tag \"fair test: same concentration\". On \"safe\" the fair-test tag dims and a small grey hazard tag \"weak ≠ safe: concentrated acetic acid is corrosive\" pins at the side, not by the 1.0 mol/L chip (science check S1: 1.0 mol/L acetic acid, about 6%, is an irritant, not corrosive). Hold about 1 second. Hold about 1 second.",
        [
            "Mark cross",
            "chip pop",
            "Mark underline",
            "token flight",
            "Cam lens zoom",
            "DrawPath"
        ],
        "Hold about 1 second"
    ],
    "bases": [
        "adjust",
        "the board clears.",
        "Strong and weak bases: Bases work the same way.",
        "strong base / separate completely / dissociation / weak base / thirteen / eleven / two",
        "On the spoken cues: `m6-beaker-v1.png` (coded label \"sodium hydroxide, 0.10 mol/L\") and `m5x-ammonia-bottle-v1.png` (label \"ammonia solution, 0.10 mol/L\"). Left lens on \"separate completely\": a small Na⁺OH⁻ lattice breaks into grey Na⁺ and violet OH⁻ that drift apart; strip \"NaOH(s) → Na⁺(aq) + OH⁻(aq)\" (no strip tag; the → pulses teal and the narration names it). Right lens on \"weak base\": the left strip dims; a dense, uncountable",
        "explain",
        "the board clears. `m6-beaker-v1.png` (coded label \"sodium hydroxide, 0.10 mol/L\") and `m5x-ammonia-bottle-v1.png` (label \"ammonia solution, 0.10 mol/L\"). Left lens on \"separate completely\": a small Na⁺OH⁻ lattice breaks into grey Na⁺ and violet OH⁻ that drift apart; strip \"NaOH(s) → Na⁺(aq) + OH⁻(aq)\" (no strip tag; the → pulses teal and the narration names it). Right lens on \"weak base\": the left strip dims; a dense, uncountable field of NH₃ stays whole; one foreground molecule takes a teal token from a water, leaving a violet OH⁻ (one example, not a fraction); strip \"NH₃(aq) + H₂O(l) ⇌ NH₄⁺(aq) + OH⁻(aq)\" (the ⇌ pulses). On \"thirteen\" and \"eleven\" the strips dim and the readout chips \"pH 13.0\" and \"pH 11.1\" pin on the two plate labels (no extra pH scale). On \"two\" the plates, lenses and chips dim; a tile \"Ca(OH)₂(s) → Ca²⁺(aq) + 2OH⁻(aq)\" writes with the 2 ringed; \"Sr(OH)₂, Ba(OH)₂\" small beside it. Hold about 1 second. Hold about 1 second.",
        [
            "HandText write-on",
            "ScribbleCircle",
            "chip pop",
            "token flight",
            "Cam lens zoom",
            "NumberTicker",
            "Plate"
        ],
        "Hold about 1 second"
    ],
    "solubility": [
        "adjust",
        "`m5x-saturated-beaker-v1.png` centre with coded label \"limewater: saturated Ca(OH)₂\".",
        "Low solubility is not weakness: Limewater is a saturated calcium hydroxide solution, which means it holds as much as can dissolve.",
        "dissolves / low solubility",
        "On the spoken cues: On \"dissolves\" a lens opens on the clear solution: only a few particles, each one split into Ca²⁺ and two violet OH⁻; a pen ring marks the solid at the bottom with the tag \"undissolved\". On \"low solubility\" the \"undissolved\" tag dims and a two-row card writes in short rows: \"how much dissolves: little\" and \"how completely it splits: completely\". A chip \"Ca(OH)₂ is weak: little dissolves\" fades in and is crossed",
        "explain",
        "`m5x-saturated-beaker-v1.png` centre with coded label \"limewater: saturated Ca(OH)₂\". On \"dissolves\" a lens opens on the clear solution: only a few particles, each one split into Ca²⁺ and two violet OH⁻; a pen ring marks the solid at the bottom with the tag \"undissolved\". On \"low solubility\" the \"undissolved\" tag dims and a two-row card writes in short rows: \"how much dissolves: little\" and \"how completely it splits: completely\". A chip \"Ca(OH)₂ is weak: little dissolves\" fades in and is crossed (caption \"low solubility, still strong\"). Hold about 1 second. Hold about 1 second.",
        [
            "HandText write-on",
            "Mark cross",
            "ScribbleCircle",
            "chip pop",
            "Cam lens zoom",
            "Plate"
        ],
        "Hold about 1 second"
    ],
    "memory-aid": [
        "new",
        "the board clears.",
        "Memory aid: So here's what to remember.",
        "Strength is how much it breaks up. Concentration is how much you put in. / both",
        "On the spoken cues: The aid writes large and handwritten in two lines: \"Strength is how much it breaks up.\" \"Concentration is how much you put in.\" The two dials from scene 7 sit beside them small, unlabelled. On \"both\" an arrow from each dial meets at a small \"pH\" chip. On \"keep the concentration the same\" the condition tag writes: \"compare strength at the same concentration\". The strong-acid mnemonic is not repeated here (project",
        "explain",
        "the board clears. The aid writes large and handwritten in two lines: \"Strength is how much it breaks up.\" \"Concentration is how much you put in.\" The two dials from scene 7 sit beside them small, unlabelled. On \"both\" an arrow from each dial meets at a small \"pH\" chip. On \"keep the concentration the same\" the condition tag writes: \"compare strength at the same concentration\". The strong-acid mnemonic is not repeated here (project manager decision 5; it stays in scene 6 and the notes). Hold about 2 seconds. Hold about 2 seconds.",
        [
            "HandText write-on",
            "chip pop",
            "DrawPath"
        ],
        "Hold about 2 seconds"
    ],
    "attempt-1": [
        "new",
        "the board clears.",
        "Unseen transfer task (attempt 1 (countdown, 10 seconds)) with every given and demand on screen, a 10 second countdown and no answer cues.",
        "Your turn. Solutions of nitric acid and nitrous",
        "The question card builds with every given visible and stays on screen; no answer cues appear; the countdown ring runs for 10 seconds after \"Pause here to answer.\" (attempt 1 (countdown, 10 seconds))",
        "explain",
        "the board clears. Question card, worded as printed: \"Nitric acid (HNO₃) and nitrous acid (HNO₂) solutions each have a concentration of 0.10 mol/L at 25 °C. The nitric acid solution has a pH of 1.0 and the nitrous acid solution has a pH of 2.2. Explain the difference in pH. Include an ionic equation for each acid reacting with water, using the correct arrow.\" The full question stays on screen. Countdown ring for 10 seconds with \"Pause here to answer.\" Nothing answer-bearing: no lenses, no tiles, no strips.",
        [
            "DrawPath",
            "Countdown ring"
        ],
        "10 second answer-free countdown after \"Pause here to answer.\"; the card stays on screen"
    ],
    "feedback-1": [
        "new",
        "the question card stays and shrinks to the top.",
        "Brief feedback (feedback 1 (brief)): the answer, the key reason with the givens underlined, and one crossed classic mistake (owner rule, 16 October).",
        "same concentration / ionises completely / fewer hydronium ions / equal",
        "On the spoken cues: On \"same concentration\" both \"0.10 mol/L\" phrases are underlined. On \"ionises completely\" \"pH of 1.0\" is underlined and the strip writes \"HNO₃(aq) + H₂O(l) → H₃O⁺(aq) + NO₃⁻(aq)\" (→ teal, tag \"strong\"). On \"fewer hydronium ions\" \"pH of 2.2\" is underlined and \"HNO₂(aq) + H₂O(l) ⇌ H₃O⁺(aq) + NO₂⁻(aq)\" writes (⇌, tag \"weak\"); no thumbnail lenses (the strips and tags carry it). On \"equal\" a chip \"HNO₂ is more dilute\"",
        "explain",
        "the question card stays and shrinks to the top. On \"same concentration\" both \"0.10 mol/L\" phrases are underlined. On \"ionises completely\" \"pH of 1.0\" is underlined and the strip writes \"HNO₃(aq) + H₂O(l) → H₃O⁺(aq) + NO₃⁻(aq)\" (→ teal, tag \"strong\"). On \"fewer hydronium ions\" \"pH of 2.2\" is underlined and \"HNO₂(aq) + H₂O(l) ⇌ H₃O⁺(aq) + NO₂⁻(aq)\" writes (⇌, tag \"weak\"); no thumbnail lenses (the strips and tags carry it). On \"equal\" a chip \"HNO₂ is more dilute\" fades in and is crossed (caption \"same concentration: different strength\"). Hold about 1 second. Hold about 1 second.",
        [
            "HandText write-on",
            "Mark cross",
            "chip pop",
            "Mark underline"
        ],
        "Hold about 1 second"
    ],
    "attempt-2": [
        "new",
        "question card: \"A 0.10 mol/L ammonia solution has a pH of 11.1.",
        "Unseen transfer task (attempt 2 (countdown, 10 seconds)) with every given and demand on screen, a 10 second countdown and no answer cues.",
        "Last one. A zero point one zero mole",
        "The question card builds with every given visible and stays on screen; no answer cues appear; the countdown ring runs for 10 seconds after \"Pause here to answer.\" (attempt 2 (countdown, 10 seconds))",
        "explain",
        "question card: \"A 0.10 mol/L ammonia solution has a pH of 11.1. A 0.0010 mol/L sodium hydroxide solution has a pH of 11.0. A student claims that ammonia and sodium hydroxide are equally strong bases, because their pH values are almost the same. Assess this claim.\" The full question stays on screen. Countdown ring for 10 seconds with \"Pause here to answer.\" Nothing answer-bearing: no dials, no grid.",
        [
            "Countdown ring"
        ],
        "10 second answer-free countdown after \"Pause here to answer.\"; the card stays on screen"
    ],
    "feedback-2": [
        "new",
        "on \"not valid\" \"equally strong bases\" in the question is underlined and a short verdict chip \"Not valid\" pins.",
        "Brief feedback (feedback 2 (brief)): the answer, the key reason with the givens underlined, and one crossed classic mistake (owner rule, 16 October).",
        "not valid / a hundred times more concentrated / same pH, same strength",
        "On the spoken cues: No thumbnail lenses. On \"a hundred times more concentrated\" \"0.10 mol/L\" and \"0.0010 mol/L\" are underlined and a bracket reads \"100 × more ammonia\". On \"equal concentrations\" the bracket dims and a small line writes \"at 0.10 mol/L: NaOH pH 13.0, NH₃ pH 11.1\". On \"same pH, same strength\" a chip with those words fades in and is crossed (caption \"compare at the same concentration\").",
        "explain",
        "on \"not valid\" \"equally strong bases\" in the question is underlined and a short verdict chip \"Not valid\" pins. No thumbnail lenses. On \"a hundred times more concentrated\" \"0.10 mol/L\" and \"0.0010 mol/L\" are underlined and a bracket reads \"100 × more ammonia\". On \"equal concentrations\" the bracket dims and a small line writes \"at 0.10 mol/L: NaOH pH 13.0, NH₃ pH 11.1\". On \"same pH, same strength\" a chip with those words fades in and is crossed (caption \"compare at the same concentration\"). Hold about 1 second. Hold about 1 second.",
        [
            "HandText write-on",
            "Mark cross",
            "chip pop",
            "Mark underline",
            "DrawPath"
        ],
        "Hold about 1 second"
    ],
    "decision-rule": [
        "adjust",
        "the question card writes, each line lighting on its words: \"1 How much per litre?",
        "Decision rule and handoff: So whenever you compare acids or bases, ask two separate questions.",
        "Next",
        "On the spoken cues: Concentration.\" \"2 How completely does it ionise? Strength.\" \"3 Strong: →. Weak: ⇌.\" On \"Next\" a chip \"Next: measuring the pH of acids and bases\" appears with `m6-ph-meter-probe-beaker-v1.png` small.",
        "explain",
        "the question card writes, each line lighting on its words: \"1 How much per litre? Concentration.\" \"2 How completely does it ionise? Strength.\" \"3 Strong: →. Weak: ⇌.\" On \"Next\" a chip \"Next: measuring the pH of acids and bases\" appears with `m6-ph-meter-probe-beaker-v1.png` small. Hold about 2 seconds. Hold about 2 seconds.",
        [
            "HandText write-on",
            "chip pop",
            "Plate"
        ],
        "Hold about 2 seconds"
    ],
    "key-notes": [
        "new",
        "Key notes card with the numbered notes, the memory aid in large writing and its condition tag",
        "Essentials to copy into books",
        "key notes",
        "Notes appear then stay still for copying",
        "hold",
        "The notes and the memory aid appear and lock",
        [
            "Enter reveals"
        ],
        "Quiet copy hold of about 60 seconds with pause invitation"
    ]
}

M6C06_ROWS = {
    "hook": [
        "adjust",
        "`m6-baking-soda-box-v1.png` top centre, small.",
        "Hook (one powder, two jobs): Sprinkle baking soda into hydrochloric acid, and it fizzes, and the solution becomes less acidic.",
        "fizzes / No fizz / less basic / acid",
        "On the spoken cues: Left: `m6-clip-baking-soda-vinegar-before-v1.png` with coded label \"hydrochloric acid\"; on \"fizzes\" it crossfades to `m6-clip-baking-soda-vinegar-fizz-v1.png`, and a small pH bar beside it (acid end tinted, 7 marked) shows an arrow moving up toward 7, tag \"less acidic\". Right: the \"before\" plate alone with label \"sodium hydroxide solution\"; on \"No fizz\" a pen ring circles the quiet liquid; on \"less basic\" its pH bar",
        "explain",
        "`m6-baking-soda-box-v1.png` top centre, small. Left: `m6-clip-baking-soda-vinegar-before-v1.png` with coded label \"hydrochloric acid\"; on \"fizzes\" it crossfades to `m6-clip-baking-soda-vinegar-fizz-v1.png`, and a small pH bar beside it (acid end tinted, 7 marked) shows an arrow moving up toward 7, tag \"less acidic\". Right: the \"before\" plate alone with label \"sodium hydroxide solution\"; on \"No fizz\" a pen ring circles the quiet liquid; on \"less basic\" its pH bar arrow moves down toward 7. The pH bars carry arrows only, no text tags (the narration says \"less acidic\" and \"less basic\"). Heading writes: \"One powder, two jobs?\" On \"acid\" both beaker labels dim and two small chips appear under the beakers: \"base here?\" (left) and \"acid here?\" (right). Bright at the end: the heading and the two chips. Hold about 1 second. Hold about 1 second.",
        [
            "HandText write-on",
            "ScribbleCircle",
            "Plate crossfade",
            "chip pop",
            "DrawPath",
            "bar fill",
            "Plate"
        ],
        "Hold about 1 second"
    ],
    "run-backwards": [
        "adjust",
        "the board clears; `m5x-ammonia-bottle-v1.png` small at the right.",
        "Run one equation backwards: Start with an equation you already know: ammonia in water.",
        "backwards / acid / base / back",
        "On the spoken cues: The strip writes \"NH₃(aq) + H₂O(l) ⇌ NH₄⁺(aq) + OH⁻(aq)\"; the C01 hop plays once (water amber, ammonia violet). On \"backwards\" the teal token hops back from NH₄⁺ to OH⁻ along the same path, dashed. On \"acid\" NH₄⁺ gets an amber outline; on \"base\" OH⁻ gets a violet outline. On \"back\" both hops loop slowly, forward and reverse, with a tag on the ⇌ \"proton can go either way\".",
        "explain",
        "the board clears; `m5x-ammonia-bottle-v1.png` small at the right. The strip writes \"NH₃(aq) + H₂O(l) ⇌ NH₄⁺(aq) + OH⁻(aq)\"; the C01 hop plays once (water amber, ammonia violet). On \"backwards\" the teal token hops back from NH₄⁺ to OH⁻ along the same path, dashed. On \"acid\" NH₄⁺ gets an amber outline; on \"base\" OH⁻ gets a violet outline. On \"back\" both hops loop slowly, forward and reverse, with a tag on the ⇌ \"proton can go either way\". Hold about 1 second. Hold about 1 second.",
        [
            "HandText write-on",
            "token flight",
            "Plate"
        ],
        "Hold about 1 second"
    ],
    "conjugate-pairs": [
        "new",
        "the strip stays; the loop stops.",
        "Conjugate pairs: Each new species is linked to the one it came from.",
        "conjugate base / conjugate acid / conjugate pair / exactly one proton / opposite sides",
        "On the spoken cues: On \"conjugate base\" an amber bracket draws above the strip from H₂O to OH⁻, tagged \"acid → conjugate base (−H⁺)\"; on \"conjugate acid\" a violet bracket draws below from NH₃ to NH₄⁺, tagged \"base → conjugate acid (+H⁺)\". On \"conjugate pair\" the two tags shrink to pair labels \"pair: H₂O / OH⁻\" and \"pair: NH₄⁺ / NH₃\". On \"exactly one proton\" the H counts and charges of each pair light in turn (H₂O to OH⁻: 2 H to 1 H, 0",
        "explain",
        "the strip stays; the loop stops. On \"conjugate base\" an amber bracket draws above the strip from H₂O to OH⁻, tagged \"acid → conjugate base (−H⁺)\"; on \"conjugate acid\" a violet bracket draws below from NH₃ to NH₄⁺, tagged \"base → conjugate acid (+H⁺)\". On \"conjugate pair\" the two tags shrink to pair labels \"pair: H₂O / OH⁻\" and \"pair: NH₄⁺ / NH₃\". On \"exactly one proton\" the H counts and charges of each pair light in turn (H₂O to OH⁻: 2 H to 1 H, 0 to −1; NH₃ to NH₄⁺: 3 H to 4 H, 0 to +1). On \"opposite sides\" each bracket's two ends pulse across the arrow. Hold about 1 second. Hold about 1 second.",
        [
            "DrawPath"
        ],
        "Hold about 1 second"
    ],
    "worked-example": [
        "new",
        "the board clears.",
        "Worked example: follow the proton: Try a harder one: hydrogen phosphate in water.",
        "loses / gains / H S O four minus",
        "On the spoken cues: Task line: \"Identify the acid, the base and both conjugate pairs.\" Strip: \"HPO₄²⁻(aq) + H₂O(l) ⇌ H₂PO₄⁻(aq) + OH⁻(aq)\". The task line dims once the strip has written. On \"loses\" a pen underline runs under H₂O and OH⁻; H₂O gets an amber outline and the amber bracket draws above, labelled \"acid H₂O / OH⁻ (−H⁺)\". On \"gains\" the underline runs under HPO₄²⁻ and H₂PO₄⁻, violet outline, violet bracket below, labelled \"base",
        "explain",
        "the board clears. Task line: \"Identify the acid, the base and both conjugate pairs.\" Strip: \"HPO₄²⁻(aq) + H₂O(l) ⇌ H₂PO₄⁻(aq) + OH⁻(aq)\". The task line dims once the strip has written. On \"loses\" a pen underline runs under H₂O and OH⁻; H₂O gets an amber outline and the amber bracket draws above, labelled \"acid H₂O / OH⁻ (−H⁺)\". On \"gains\" the underline runs under HPO₄²⁻ and H₂PO₄⁻, violet outline, violet bracket below, labelled \"base HPO₄²⁻ / H₂PO₄⁻ (+H⁺)\"; the token hops once from water to hydrogen phosphate. The first underline dims as the second writes. Bright: the strip and the two bracket labels. On \"H S O four minus\" the strip dims and a small chain writes \"H₂SO₄ → HSO₄⁻ → SO₄²⁻\" with a chip \"H₂SO₄ / SO₄²⁻\" that is crossed (caption \"one H⁺ at a time\"). Hold about 1 second. Hold about 1 second.",
        [
            "HandText write-on",
            "Mark cross",
            "chip pop",
            "Mark underline",
            "token flight",
            "DrawPath"
        ],
        "Hold about 1 second"
    ],
    "conjugate-strength": [
        "new",
        "two strips stack: \"HCl(aq) + H₂O(l) → H₃O⁺(aq) + Cl⁻(aq)\" and \"CH₃COOH(aq) + H₂O(l) ⇌ H₃O⁺(aq) + CH₃COO⁻(aq)\".",
        "Conjugate strength explains the arrows: Pairs also explain the arrows from the strength video.",
        "no pull / real pull / weaker",
        "On the spoken cues: On \"no pull\" an amber bracket joins HCl and Cl⁻ and a small pull meter beside Cl⁻ shows an empty bar; no reverse hop; the → pulses. On \"real pull\" the bracket joins CH₃COOH and CH₃COO⁻, its pull meter shows a part-filled bar, and the dashed reverse hop plays from H₃O⁺ to acetate; the ⇌ pulses. On \"weaker\" the pull meters dim and a see-saw icon writes between the two: \"stronger acid\" up on one side, \"weaker conjugate",
        "explain",
        "two strips stack: \"HCl(aq) + H₂O(l) → H₃O⁺(aq) + Cl⁻(aq)\" and \"CH₃COOH(aq) + H₂O(l) ⇌ H₃O⁺(aq) + CH₃COO⁻(aq)\". On \"no pull\" an amber bracket joins HCl and Cl⁻ and a small pull meter beside Cl⁻ shows an empty bar; no reverse hop; the → pulses. On \"real pull\" the bracket joins CH₃COOH and CH₃COO⁻, its pull meter shows a part-filled bar, and the dashed reverse hop plays from H₃O⁺ to acetate; the ⇌ pulses. On \"weaker\" the pull meters dim and a see-saw icon writes between the two: \"stronger acid\" up on one side, \"weaker conjugate base\" down on the other (no extra tag; the see-saw is the statement). Hold about 1 second. Hold about 1 second.",
        [
            "HandText write-on",
            "DrawPath",
            "bar fill"
        ],
        "Hold about 1 second"
    ],
    "amphiprotic": [
        "new",
        "the hook beakers return small at the top.",
        "Amphiprotic: baking soda explained: Now the baking soda.",
        "hydrogen carbonate / takes / gives / amphiprotic",
        "On the spoken cues: On \"hydrogen carbonate\" a tile \"HCO₃⁻\" sits centre with a tag \"from NaHCO₃\". On \"takes\" the left strip writes \"HCO₃⁻(aq) + H₃O⁺(aq) → H₂CO₃(aq) + H₂O(l)\" with HCO₃⁻ outlined violet and the token hopping in; a short second line \"H₂CO₃(aq) → H₂O(l) + CO₂(g)\" writes under it while the fizz plate pulses. On \"gives\" the right strip writes \"HCO₃⁻(aq) + OH⁻(aq) → CO₃²⁻(aq) + H₂O(l)\" with HCO₃⁻ outlined amber and the token",
        "explain",
        "the hook beakers return small at the top. On \"hydrogen carbonate\" a tile \"HCO₃⁻\" sits centre with a tag \"from NaHCO₃\". On \"takes\" the left strip writes \"HCO₃⁻(aq) + H₃O⁺(aq) → H₂CO₃(aq) + H₂O(l)\" with HCO₃⁻ outlined violet and the token hopping in; a short second line \"H₂CO₃(aq) → H₂O(l) + CO₂(g)\" writes under it while the fizz plate pulses. On \"gives\" the right strip writes \"HCO₃⁻(aq) + OH⁻(aq) → CO₃²⁻(aq) + H₂O(l)\" with HCO₃⁻ outlined amber and the token hopping out; the quiet plate pulses. The left lines dim. On \"amphiprotic\" the HCO₃⁻ tile gets a split amber and violet outline and the word writes under it: \"amphiprotic: can give or take H⁺\". Hold about 1 second. Hold about 1 second.",
        [
            "HandText write-on",
            "token flight"
        ],
        "Hold about 1 second"
    ],
    "proton-chain": [
        "new",
        "the board clears.",
        "Spotting one: the middle of a proton chain: How do you spot one?",
        "proton chain / middle / amphiprotic / hydrogen phosphate",
        "On the spoken cues: Chain 1 writes left to right: \"H₂CO₃ ⇄ HCO₃⁻ ⇄ CO₃²⁻\"; only its first step carries the key arrows \"−H⁺ →\" above and \"← +H⁺\" below (later steps have plain arrows, so the labels do not repeat eight times). Chain 2 writes under it on \"Phosphoric acid\": \"H₃PO₄ ⇄ H₂PO₄⁻ ⇄ HPO₄²⁻ ⇄ PO₄³⁻\", each step lighting as it is named. On \"The ends\" H₃PO₄ gets an amber-only outline (\"gives only\") and PO₄³⁻ a violet-only outline",
        "explain",
        "the board clears. Chain 1 writes left to right: \"H₂CO₃ ⇄ HCO₃⁻ ⇄ CO₃²⁻\"; only its first step carries the key arrows \"−H⁺ →\" above and \"← +H⁺\" below (later steps have plain arrows, so the labels do not repeat eight times). Chain 2 writes under it on \"Phosphoric acid\": \"H₃PO₄ ⇄ H₂PO₄⁻ ⇄ HPO₄²⁻ ⇄ PO₄³⁻\", each step lighting as it is named. On \"The ends\" H₃PO₄ gets an amber-only outline (\"gives only\") and PO₄³⁻ a violet-only outline (\"takes only\"). On \"middle\" those two labels dim; HCO₃⁻, H₂PO₄⁻ and HPO₄²⁻ get split amber and violet outlines; tag \"middle = amphiprotic\". On \"hydrogen phosphate\" the tag dims and a chip \"a negative ion can't give a proton\" fades in by HPO₄²⁻ and is crossed (caption \"HPO₄²⁻ still has one to give\"). Hold about 2 seconds. Hold about 2 seconds.",
        [
            "HandText write-on",
            "Mark cross",
            "chip pop",
            "DrawPath"
        ],
        "Hold about 2 seconds"
    ],
    "salt-equations": [
        "adjust",
        "the board clears; `m6-baking-soda-box-v1.png` small at the right; a mini chain \"H₂CO₃ ⇄ HCO₃⁻ ⇄ CO₃²⁻\" sits small at the top right, HCO₃⁻ split-outlined.",
        "The syllabus salts: write both roles: Exam questions ask you to show this with equations, often for sodium hydrogen carbonate.",
        "sodium hydrogen carbonate / acid / base / double arrows / mildly basic",
        "On the spoken cues: Task line: \"Show that HCO₃⁻ is amphiprotic.\" On \"sodium hydrogen carbonate\" line 1 writes: \"NaHCO₃(s) → Na⁺(aq) + HCO₃⁻(aq)\" with Na⁺ turning grey (tag \"spectator\", which dims at the end of its sentence). On \"acid\" the task line and line 1 dim; line 2 writes: \"HCO₃⁻(aq) + H₂O(l) ⇌ CO₃²⁻(aq) + H₃O⁺(aq)\" with HCO₃⁻ amber and the token hopping to water, and in the mini chain the step from HCO₃⁻ to CO₃²⁻ lights amber.",
        "explain",
        "the board clears; `m6-baking-soda-box-v1.png` small at the right; a mini chain \"H₂CO₃ ⇄ HCO₃⁻ ⇄ CO₃²⁻\" sits small at the top right, HCO₃⁻ split-outlined. Task line: \"Show that HCO₃⁻ is amphiprotic.\" On \"sodium hydrogen carbonate\" line 1 writes: \"NaHCO₃(s) → Na⁺(aq) + HCO₃⁻(aq)\" with Na⁺ turning grey (tag \"spectator\", which dims at the end of its sentence). On \"acid\" the task line and line 1 dim; line 2 writes: \"HCO₃⁻(aq) + H₂O(l) ⇌ CO₃²⁻(aq) + H₃O⁺(aq)\" with HCO₃⁻ amber and the token hopping to water, and in the mini chain the step from HCO₃⁻ to CO₃²⁻ lights amber. On \"base\" line 3 writes: \"HCO₃⁻(aq) + H₂O(l) ⇌ H₂CO₃(aq) + OH⁻(aq)\" with HCO₃⁻ violet and the token hopping from water, and the mini-chain step to H₂CO₃ lights violet (no step tags, no callback tag). On \"double arrows\" both ⇌ pulse. On \"mildly basic\" the mini chain dims and a small grey tag \"NaHCO₃(aq): mildly basic\" pins by the box. Bright: lines 2 and 3 and one tag. Hold about 2 seconds. Hold about 2 seconds.",
        [
            "HandText write-on",
            "token flight",
            "DrawPath",
            "Plate"
        ],
        "Hold about 2 seconds"
    ],
    "water-role": [
        "adjust",
        "the board clears.",
        "Water's own role: Water sits in the middle of its own chain: hydronium, water, hydroxide.",
        "itself / a hydronium ion and a hydroxide ion / two water molecules in a billion / equal numbers / neutral",
        "On the spoken cues: Chain: \"H₃O⁺ ⇄ H₂O ⇄ OH⁻\" with H₂O split-outlined. On \"itself\" a lens shows two pale blue water molecules; one (amber) hops a token to the other (violet); on \"a hydronium ion and a hydroxide ion\" the product H₃O⁺ and OH⁻ pulse once together. The strip writes \"H₂O(l) + H₂O(l) ⇌ H₃O⁺(aq) + OH⁻(aq)\" with the two pair brackets \"H₂O / OH⁻\" (amber) and \"H₂O / H₃O⁺\" (violet). The chain dims, and the pair brackets dim when",
        "explain",
        "the board clears. Chain: \"H₃O⁺ ⇄ H₂O ⇄ OH⁻\" with H₂O split-outlined. On \"itself\" a lens shows two pale blue water molecules; one (amber) hops a token to the other (violet); on \"a hydronium ion and a hydroxide ion\" the product H₃O⁺ and OH⁻ pulse once together. The strip writes \"H₂O(l) + H₂O(l) ⇌ H₃O⁺(aq) + OH⁻(aq)\" with the two pair brackets \"H₂O / OH⁻\" (amber) and \"H₂O / H₃O⁺\" (violet). The chain dims, and the pair brackets dim when the beaker appears. On \"conducts\" `m6-beaker-v1.png` with label \"very pure water\" appears small with a coded faint current symbol; its label dims at the end of the sentence. On \"two water molecules in a billion\" the lens zooms out into a sea of pale blue water with one hydronium and one hydroxide far apart; tag \"about 2 in a billion have given H⁺\". On \"equal numbers\" the two ions pulse together and the tag dims; on \"neutral\" a tag writes \"neutral: equal H₃O⁺ and OH⁻\". Bright at the end: the strip and the neutral tag. Hold about 1 second. Hold about 1 second.",
        [
            "HandText write-on",
            "token flight",
            "Cam lens zoom",
            "DrawPath",
            "Plate"
        ],
        "Hold about 1 second"
    ],
    "memory-aid": [
        "new",
        "the board clears.",
        "Memory aid: So here's what to remember.",
        "exactly one proton / Amphi means both",
        "On the spoken cues: The first aid writes large and handwritten: \"A conjugate pair differs by exactly one H⁺.\" (No small sub-line; the narration carries \"take one off, add one\" and key note 1 holds it.) On \"Amphi means both\" the first aid dims slightly and the second line writes: \"Amphi means both: the middle of the chain goes either way\", with a tiny chain \"H₂CO₃ ⇄ HCO₃⁻ ⇄ CO₃²⁻\" and the middle box split-outlined. On \"stronger the",
        "explain",
        "the board clears. The first aid writes large and handwritten: \"A conjugate pair differs by exactly one H⁺.\" (No small sub-line; the narration carries \"take one off, add one\" and key note 1 holds it.) On \"Amphi means both\" the first aid dims slightly and the second line writes: \"Amphi means both: the middle of the chain goes either way\", with a tiny chain \"H₂CO₃ ⇄ HCO₃⁻ ⇄ CO₃²⁻\" and the middle box split-outlined. On \"stronger the acid\" the see-saw icon from scene 5 returns small, no new text. Hold about 2 seconds. Hold about 2 seconds.",
        [
            "HandText write-on"
        ],
        "Hold about 2 seconds"
    ],
    "attempt-1": [
        "new",
        "the board clears.",
        "Unseen transfer task (attempt 1 (countdown, 10 seconds)) with every given and demand on screen, a 10 second countdown and no answer cues.",
        "Your turn. Potassium dihydrogen phosphate is used in",
        "The question card builds with every given visible and stays on screen; no answer cues appear; the countdown ring runs for 10 seconds after \"Pause here to answer.\" (attempt 1 (countdown, 10 seconds))",
        "explain",
        "the board clears. Question card, worded as printed: \"Potassium dihydrogen phosphate, KH₂PO₄, is used in foods as an acidity regulator. Write an equation for KH₂PO₄ dissolving in water. Then write two equations, each with water as the reaction partner, to show that the dihydrogen phosphate ion is amphiprotic.\" The full question stays on screen. Countdown ring for 10 seconds with \"Pause here to answer.\" Nothing answer-bearing: no chains, no strips, no aid.",
        [
            "HandText write-on",
            "Countdown ring"
        ],
        "10 second answer-free countdown after \"Pause here to answer.\"; the card stays on screen"
    ],
    "feedback-1": [
        "new",
        "the question card stays and shrinks to the top.",
        "Brief feedback (feedback 1 (brief)): the answer, the key reason with the givens underlined, and one crossed classic mistake (owner rule, 16 October).",
        "potassium ions / hydrogen phosphate / phosphoric acid / one",
        "On the spoken cues: On \"potassium ions\" \"KH₂PO₄ dissolving\" is underlined and \"KH₂PO₄(s) → K⁺(aq) + H₂PO₄⁻(aq)\" writes (K⁺ grey). On \"hydrogen phosphate\" \"amphiprotic\" is underlined and \"H₂PO₄⁻(aq) + H₂O(l) ⇌ HPO₄²⁻(aq) + H₃O⁺(aq)\" writes (H₂PO₄⁻ amber, no tag); the dissolving line dims. On \"phosphoric acid\" \"H₂PO₄⁻(aq) + H₂O(l) ⇌ H₃PO₄(aq) + OH⁻(aq)\" writes (violet, no tag; the colours carry acid and base as in scene 8). A thumbnail",
        "explain",
        "the question card stays and shrinks to the top. On \"potassium ions\" \"KH₂PO₄ dissolving\" is underlined and \"KH₂PO₄(s) → K⁺(aq) + H₂PO₄⁻(aq)\" writes (K⁺ grey). On \"hydrogen phosphate\" \"amphiprotic\" is underlined and \"H₂PO₄⁻(aq) + H₂O(l) ⇌ HPO₄²⁻(aq) + H₃O⁺(aq)\" writes (H₂PO₄⁻ amber, no tag); the dissolving line dims. On \"phosphoric acid\" \"H₂PO₄⁻(aq) + H₂O(l) ⇌ H₃PO₄(aq) + OH⁻(aq)\" writes (violet, no tag; the colours carry acid and base as in scene 8). A thumbnail chain \"H₃PO₄ ⇄ H₂PO₄⁻ ⇄ HPO₄²⁻ ⇄ PO₄³⁻\" sits beside with one-step arrows from H₂PO₄⁻. On \"one\" a chip \"H₂PO₄⁻ + H₂O ⇌ PO₄³⁻ + ...\" fades in and is crossed (caption \"one H⁺ per step\"). Hold about 1 second. Hold about 1 second.",
        [
            "HandText write-on",
            "Mark cross",
            "chip pop",
            "Mark underline",
            "DrawPath"
        ],
        "Hold about 1 second"
    ],
    "attempt-2": [
        "new",
        "question card: \"NH₄⁺(aq) + CO₃²⁻(aq) ⇌ NH₃(aq) + HCO₃⁻(aq).",
        "Unseen transfer task (attempt 2 (countdown, 10 seconds)) with every given and demand on screen, a 10 second countdown and no answer cues.",
        "Last one. The equation shows ammonium ions reacting",
        "The question card builds with every given visible and stays on screen; no answer cues appear; the countdown ring runs for 10 seconds after \"Pause here to answer.\" (attempt 2 (countdown, 10 seconds))",
        "explain",
        "question card: \"NH₄⁺(aq) + CO₃²⁻(aq) ⇌ NH₃(aq) + HCO₃⁻(aq). Identify the two conjugate acid-base pairs in this reaction, and state which species is the Brønsted-Lowry acid.\" The full question stays on screen. Countdown ring for 10 seconds with \"Pause here to answer.\" Nothing answer-bearing: no brackets, no outlines.",
        [
            "DrawPath",
            "Countdown ring"
        ],
        "10 second answer-free countdown after \"Pause here to answer.\"; the card stays on screen"
    ],
    "feedback-2": [
        "new",
        "the question card stays.",
        "Brief feedback (feedback 2 (brief)): the answer, the key reason with the givens underlined, and one crossed classic mistake (owner rule, 16 October).",
        "loses / gains / same side",
        "On the spoken cues: On \"loses\" NH₄⁺(aq) and NH₃(aq) in the equation are underlined, the amber bracket draws above them, \"pair: NH₄⁺ / NH₃\", and the chip \"Acid: NH₄⁺ (donates H⁺)\" pins. On \"gains\" CO₃²⁻(aq) and HCO₃⁻(aq) are underlined, violet bracket below, \"pair: CO₃²⁻ / HCO₃⁻\"; the token hops once from NH₄⁺ to CO₃²⁻. On \"same side\" a chip \"NH₄⁺ / CO₃²⁻\" fades in and is crossed (caption \"partners are on opposite sides, one H⁺ apart\").",
        "explain",
        "the question card stays. On \"loses\" NH₄⁺(aq) and NH₃(aq) in the equation are underlined, the amber bracket draws above them, \"pair: NH₄⁺ / NH₃\", and the chip \"Acid: NH₄⁺ (donates H⁺)\" pins. On \"gains\" CO₃²⁻(aq) and HCO₃⁻(aq) are underlined, violet bracket below, \"pair: CO₃²⁻ / HCO₃⁻\"; the token hops once from NH₄⁺ to CO₃²⁻. On \"same side\" a chip \"NH₄⁺ / CO₃²⁻\" fades in and is crossed (caption \"partners are on opposite sides, one H⁺ apart\"). Hold about 1 second. Hold about 1 second.",
        [
            "Mark cross",
            "chip pop",
            "Mark underline",
            "token flight",
            "DrawPath"
        ],
        "Hold about 1 second"
    ],
    "decision-rule": [
        "new",
        "the question card writes, each line lighting on its words: \"1 Follow the proton: loses H⁺ = acid; gains H⁺ = base.\"",
        "Decision rule and handoff: So for any acid-base equation, follow the proton, then pair each species with its partner one proton away on the other side, and check the charge changes by one.",
        "Next",
        "On the spoken cues: \"2 Pair across the arrow: one H⁺ apart, charge changes by 1.\" \"3 Amphiprotic ion: one equation giving H⁺ to water, one taking H⁺ from water.\" On \"Next\" a chip \"Next: calculating pH for strong acids and bases\" appears with the scene 9 strip \"H₂O + H₂O ⇌ H₃O⁺ + OH⁻\" small.",
        "explain",
        "the question card writes, each line lighting on its words: \"1 Follow the proton: loses H⁺ = acid; gains H⁺ = base.\" \"2 Pair across the arrow: one H⁺ apart, charge changes by 1.\" \"3 Amphiprotic ion: one equation giving H⁺ to water, one taking H⁺ from water.\" On \"Next\" a chip \"Next: calculating pH for strong acids and bases\" appears with the scene 9 strip \"H₂O + H₂O ⇌ H₃O⁺ + OH⁻\" small. Hold about 2 seconds. Hold about 2 seconds.",
        [
            "HandText write-on",
            "chip pop",
            "DrawPath"
        ],
        "Hold about 2 seconds"
    ],
    "key-notes": [
        "new",
        "Key notes card with the numbered notes, the memory aid in large writing and its condition tag",
        "Essentials to copy into books",
        "key notes",
        "Notes appear then stay still for copying",
        "hold",
        "The notes and the memory aid appear and lock",
        [
            "Enter reveals"
        ],
        "Quiet copy hold of about 60 seconds with pause invitation"
    ]
}

M6C07_ROWS = {
    "hook": [
        "adjust",
        "`m6-ph-meter-probe-beaker-v1.png` centre, its beaker labelled (coded) \"hydrochloric acid, 0.10 mol/L\"; a second `m6-beaker-v1.png` at the right labelled \"sodium hydroxide, 0.10 mol/L\".",
        "Hook (one meter, two numbers): A pH meter in zero point one zero moles per litre hydrochloric acid reads one point zero zero.",
        "one point zero zero / thirteen point zero zero / have",
        "On the spoken cues: On \"one point zero zero\" the amber readout in the meter screen counts to \"1.00\". On \"In sodium hydroxide\" the probe lifts along a coded arc into the second beaker (no hands, no wash bottle) and the readout counts up to \"13.00\" on \"thirteen point zero zero\"; the acid beaker's label dims to grey \"1.00\" beside it. Heading writes: \"pH 1.00 and 13.00: where from?\" On \"have\" a small lens opens over the second beaker:",
        "explain",
        "`m6-ph-meter-probe-beaker-v1.png` centre, its beaker labelled (coded) \"hydrochloric acid, 0.10 mol/L\"; a second `m6-beaker-v1.png` at the right labelled \"sodium hydroxide, 0.10 mol/L\". On \"one point zero zero\" the amber readout in the meter screen counts to \"1.00\". On \"In sodium hydroxide\" the probe lifts along a coded arc into the second beaker (no hands, no wash bottle) and the readout counts up to \"13.00\" on \"thirteen point zero zero\"; the acid beaker's label dims to grey \"1.00\" beside it. Heading writes: \"pH 1.00 and 13.00: where from?\" On \"have\" a small lens opens over the second beaker: violet OH⁻ tokens everywhere, and one tag with a question mark beside a teal token outline: \"H₃O⁺?\" Bright at the end: the heading, the readout and the tag. Hold about 1 second. Hold about 1 second.",
        [
            "HandText write-on",
            "token flight",
            "Cam lens zoom",
            "NumberTicker",
            "Plate"
        ],
        "Hold about 1 second"
    ],
    "ph-meaning": [
        "new",
        "the board clears.",
        "What pH means: pH is the negative log, base ten, of the hydronium concentration.",
        "equals the acid's / log / one / one pH step",
        "On the spoken cues: The definition writes alone at the top: \"pH = −log₁₀[H₃O⁺]\" with \"[ ] = concentration, mol/L\" small under it (dims after its sentence). On \"equals the acid's\" a small lens shows HCl molecules each handing a teal token to water (C01 hop), tag \"complete: [H₃O⁺] = c\". On \"log\" the lens and its tag dim and a small line writes under the definition: \"log 10⁻¹ = −1\" (the power is circled); on \"one\" the \"−\" in the",
        "explain",
        "the board clears. The definition writes alone at the top: \"pH = −log₁₀[H₃O⁺]\" with \"[ ] = concentration, mol/L\" small under it (dims after its sentence). On \"equals the acid's\" a small lens shows HCl molecules each handing a teal token to water (C01 hop), tag \"complete: [H₃O⁺] = c\". On \"log\" the lens and its tag dim and a small line writes under the definition: \"log 10⁻¹ = −1\" (the power is circled); on \"one\" the \"−\" in the definition pulses, the line flips to \"−log 10⁻¹ = +1\", and the working line writes: \"[H₃O⁺] = 0.10 mol/L = 10⁻¹ mol/L → pH = 1.00\". On \"one pH step\" the small log line dims and the log ruler draws across the lower third: concentrations 10⁰, 10⁻¹, 10⁻², ... 10⁻¹⁴ on top, pH 0 to 14 underneath, each power of ten snapping down to its pH mark; 10⁻¹ and pH 1 light teal. Bright at the end: the definition, the working line and the ruler. Hold about 1 second. Hold about 1 second.",
        [
            "HandText write-on",
            "token flight",
            "Cam lens zoom",
            "DrawPath"
        ],
        "Hold about 1 second"
    ],
    "we1-strong-acid": [
        "new",
        "the board clears to the three zones.",
        "Worked example 1: a strong acid, and decimal places: Nitric acid at zero point zero two five moles per litre is strong, with one proton per molecule, so the hydronium is zero point zero two five, and the negative log gives one point six zero.",
        "zero point zero two five / one point six zero / power of ten / significant figures",
        "On the spoken cues: Task line: \"Find the pH\". Equation strip: \"HNO₃(aq) + H₂O(l) → H₃O⁺(aq) + NO₃⁻(aq)\". Givens card: \"HNO₃: 0.025 mol/L (strong, 1 H⁺ each)\". On \"zero point zero two five\" the givens line is underlined and the working writes \"[H₃O⁺] = 0.025 mol/L\"; then the strip and the givens card dim. On \"one point six zero\" the next line writes \"pH = −log(0.025) = 1.602 → 1.60\" and the first line dims; the result chip \"pH = 1.60\"",
        "explain",
        "the board clears to the three zones. Task line: \"Find the pH\". Equation strip: \"HNO₃(aq) + H₂O(l) → H₃O⁺(aq) + NO₃⁻(aq)\". Givens card: \"HNO₃: 0.025 mol/L (strong, 1 H⁺ each)\". On \"zero point zero two five\" the givens line is underlined and the working writes \"[H₃O⁺] = 0.025 mol/L\"; then the strip and the givens card dim. On \"one point six zero\" the next line writes \"pH = −log(0.025) = 1.602 → 1.60\" and the first line dims; the result chip \"pH = 1.60\" pins. On \"power of ten\" the 1 of \"1.60\" glows and a thin tie line runs to the \"10⁻²\" of \"2.5 × 10⁻²\" written small under the 0.025; the \".60\" glows and ties to the \"2.5\". On \"significant figures\" a pen ring circles \"25\" in 0.025 with a chip \"2 s.f.\", the tie lines fade, and the rule card writes: \"Decimal places in pH = significant figures in [H₃O⁺].\" No crossed chip in this scene. Bright at the end: the task line, the answer chip, the rule card. Hold about 1 second. Hold about 1 second.",
        [
            "HandText write-on",
            "Mark cross",
            "ScribbleCircle",
            "chip pop",
            "Mark underline"
        ],
        "Hold about 1 second"
    ],
    "ph-backwards": [
        "new",
        "the rule card shrinks to a small chip at the top right.",
        "Going backwards: You can also run it backwards: the hydronium concentration is ten to the minus pH.",
        "four point zero times ten to the minus four / two significant figures",
        "On the spoken cues: The reverse formula writes: \"[H₃O⁺] = 10⁻ᵖᴴ\". On \"three point four zero\" a given chip \"pH = 3.40\" writes; the line \"[H₃O⁺] = 10⁻³·⁴⁰ = 3.98 × 10⁻⁴\" writes in grey and, on \"four point zero times ten to the minus four\", rounds to \"4.0 × 10⁻⁴ mol/L\" in white. On \"two significant figures\" a pen ring circles \".40\" and a second ring circles \"4.0\", joined by a tie line (the rule card chip pulses, then dims). No ruler in",
        "explain",
        "the rule card shrinks to a small chip at the top right. The reverse formula writes: \"[H₃O⁺] = 10⁻ᵖᴴ\". On \"three point four zero\" a given chip \"pH = 3.40\" writes; the line \"[H₃O⁺] = 10⁻³·⁴⁰ = 3.98 × 10⁻⁴\" writes in grey and, on \"four point zero times ten to the minus four\", rounds to \"4.0 × 10⁻⁴ mol/L\" in white. On \"two significant figures\" a pen ring circles \".40\" and a second ring circles \"4.0\", joined by a tie line (the rule card chip pulses, then dims). No ruler in this scene (Revision 2: it added an item without a cue). Hold about 1 second. Hold about 1 second.",
        [
            "HandText write-on",
            "ScribbleCircle",
            "chip pop"
        ],
        "Hold about 1 second"
    ],
    "kw": [
        "adjust",
        "the board clears.",
        "Kw: the constant on water's own equilibrium: Now the base.",
        "K w equals hydronium times hydroxide / one point zero times ten to the minus fourteen / every / ten to the minus fourteen",
        "On the spoken cues: `m6-beaker-v1.png` small at the left, labelled \"pure water, 25 °C\". The C06 strip returns: \"H₂O(l) + H₂O(l) ⇌ H₃O⁺(aq) + OH⁻(aq)\". On \"K w equals\" the C5-style builder writes \"Kw = [H₃O⁺][OH⁻]\" with the two H₂O greying into a small \"left out\" tray; on \"one point zero times ten to the minus fourteen\" the chip \"= 1.0 × 10⁻¹⁴ at 25 °C\" pins, the left-out tray fades and the strip dims. On \"ten to the minus seven\" two",
        "explain",
        "the board clears. `m6-beaker-v1.png` small at the left, labelled \"pure water, 25 °C\". The C06 strip returns: \"H₂O(l) + H₂O(l) ⇌ H₃O⁺(aq) + OH⁻(aq)\". On \"K w equals\" the C5-style builder writes \"Kw = [H₃O⁺][OH⁻]\" with the two H₂O greying into a small \"left out\" tray; on \"one point zero times ten to the minus fourteen\" the chip \"= 1.0 × 10⁻¹⁴ at 25 °C\" pins, the left-out tray fades and the strip dims. On \"ten to the minus seven\" two equal bars rise beside the strip, teal \"[H₃O⁺] = 1.0 × 10⁻⁷\" and violet \"[OH⁻] = 1.0 × 10⁻⁷\", tag \"neutral: equal; pH 7.00\". On \"every\" the neutral tag fades, the Kw line shrinks to its chip, the strip brightens again, the beaker label changes to \"sodium hydroxide solution\" and the violet bar shoots up while the strip's ⇌ pulses with the reverse arrow brightening (an H₃O⁺ token meets an OH⁻ token and becomes water); on \"ten to the minus fourteen\" the teal bar sinks to a sliver and the product chip under the two bars ticks back to \"[H₃O⁺] × [OH⁻] = 1.0 × 10⁻¹⁴\". Bright at the end: the Kw chip, the product chip and the bars (at most three items at any moment from \"every\" on). Hold about 1 second. Hold about 1 second.",
        [
            "HandText write-on",
            "chip pop",
            "tick",
            "token flight",
            "DrawPath",
            "bar fill",
            "Plate"
        ],
        "Hold about 1 second"
    ],
    "kw-temperature": [
        "new",
        "the strip gains \"heat +\" on its left side on \"absorbs heat\" (Module 5 style), and a right-pointing arrow pulses over ⇌ with a tag \"warmer: shifts right, Kw bigger\".",
        "Kw and temperature: neutral is not always pH 7: That value is only for twenty five degrees.",
        "absorbs heat / six point eight one / six point five one / neutral",
        "On the spoken cues: The temperature ladder writes as four rows (data only, no thermometer art): \"10 °C | Kw 2.9 × 10⁻¹⁵ | neutral pH 7.27\", \"25 °C | 1.0 × 10⁻¹⁴ | 7.00\", \"37 °C | 2.4 × 10⁻¹⁴ | 6.81\", \"60 °C | 9.6 × 10⁻¹⁴ | 6.51\"; the 25 °C row writes first, the others fade in, and only the spoken row is bright (37 °C on \"six point eight one\", 60 °C on \"six point five one\"). On \"neutral\" the other ladder rows and the strip dim, and the",
        "explain",
        "the strip gains \"heat +\" on its left side on \"absorbs heat\" (Module 5 style), and a right-pointing arrow pulses over ⇌ with a tag \"warmer: shifts right, Kw bigger\". The temperature ladder writes as four rows (data only, no thermometer art): \"10 °C | Kw 2.9 × 10⁻¹⁵ | neutral pH 7.27\", \"25 °C | 1.0 × 10⁻¹⁴ | 7.00\", \"37 °C | 2.4 × 10⁻¹⁴ | 6.81\", \"60 °C | 9.6 × 10⁻¹⁴ | 6.51\"; the 25 °C row writes first, the others fade in, and only the spoken row is bright (37 °C on \"six point eight one\", 60 °C on \"six point five one\"). On \"neutral\" the other ladder rows and the strip dim, and the 60 °C row gets two equal bars, teal and violet, both labelled \"3.1 × 10⁻⁷\" with an \"=\" between them (no separate tag); a chip \"pH below 7, so acidic\" fades in beside the row and is crossed (caption \"neutral means equal, not pH 7\"). The heat tag dims. Bright at the end: the 60 °C row, the bars and the crossed chip. Hold about 2 seconds. Hold about 2 seconds.",
        [
            "HandText write-on",
            "Mark cross",
            "chip pop",
            "DrawPath",
            "bar fill"
        ],
        "Hold about 2 seconds"
    ],
    "base-poh": [
        "new",
        "the board clears; the meter plate returns small at the right with its readout \"13.00\".",
        "The base's pH, and pOH: Back to sodium hydroxide.",
        "thirteen / pH plus pOH equals fourteen / subtract from fourteen",
        "On the spoken cues: Lines write one per cue: \"[OH⁻] = 0.10 mol/L\" (givens underline on the hook's label), then \"[H₃O⁺] = 1.0 × 10⁻¹⁴ ÷ 0.10 = 1.0 × 10⁻¹³ mol/L\" on \"thirteen\", then \"pH = 13.00\" with the readout pulsing (the hook's question answered; the \"H₃O⁺?\" tag from scene 1 returns and gets a tick). The three lines dim and the readout dims. On \"use pOH\" a small definition \"pOH = −log₁₀[OH⁻]\" writes. On \"pH plus pOH\" the derivation",
        "explain",
        "the board clears; the meter plate returns small at the right with its readout \"13.00\". Lines write one per cue: \"[OH⁻] = 0.10 mol/L\" (givens underline on the hook's label), then \"[H₃O⁺] = 1.0 × 10⁻¹⁴ ÷ 0.10 = 1.0 × 10⁻¹³ mol/L\" on \"thirteen\", then \"pH = 13.00\" with the readout pulsing (the hook's question answered; the \"H₃O⁺?\" tag from scene 1 returns and gets a tick). The three lines dim and the readout dims. On \"use pOH\" a small definition \"pOH = −log₁₀[OH⁻]\" writes. On \"pH plus pOH\" the derivation writes in two short lines: \"Kw = [H₃O⁺][OH⁻] = 1.0 × 10⁻¹⁴\", then \"−log of both sides: pH + pOH = 14.00 (25 °C)\", the second line large. On \"subtract from fourteen\" a three-step chip writes small at the right: \"[OH⁻] → pOH → pH = 14.00 − pOH\". The derivation's first line dims. Hold about 1 second. Hold about 1 second.",
        [
            "HandText write-on",
            "chip pop",
            "tick",
            "Mark underline",
            "NumberTicker"
        ],
        "Hold about 1 second"
    ],
    "we2-strong-base": [
        "new",
        "the board clears to the three zones.",
        "Worked example 2: a base that releases two hydroxide ions: Calcium hydroxide at zero point zero zero four zero moles per litre.",
        "two / two point one zero / eleven point nine zero / assume both do",
        "On the spoken cues: Task line: \"Find the pH\". Equation strip: \"Ca(OH)₂(aq) → Ca²⁺(aq) + 2OH⁻(aq)\". Givens card: \"Ca(OH)₂: 0.0040 mol/L (strong)\" | grey \"25 °C\". On \"two\" the subscript 2 in Ca(OH)₂ on the strip gets a pen ring and two violet tokens drop from it; the line \"[OH⁻] = 2 × 0.0040 = 0.0080 mol/L\" writes; the strip and the givens card then dim. On \"two point one zero\" the line \"pOH = −log(0.0080) = 2.097 → 2.10\" writes (the",
        "explain",
        "the board clears to the three zones. Task line: \"Find the pH\". Equation strip: \"Ca(OH)₂(aq) → Ca²⁺(aq) + 2OH⁻(aq)\". Givens card: \"Ca(OH)₂: 0.0040 mol/L (strong)\" | grey \"25 °C\". On \"two\" the subscript 2 in Ca(OH)₂ on the strip gets a pen ring and two violet tokens drop from it; the line \"[OH⁻] = 2 × 0.0040 = 0.0080 mol/L\" writes; the strip and the givens card then dim. On \"two point one zero\" the line \"pOH = −log(0.0080) = 2.097 → 2.10\" writes (the [OH⁻] line dims), with a small \"2 s.f. → 2 d.p.\" tag that dims after its sentence. On \"eleven point nine zero\" the line \"pH = 14.00 − 2.10 = 11.90\" writes and the answer chip \"pH = 11.90\" pins; the pOH line dims. On \"classic slip\" a chip \"pH = 2.10\" fades in and is crossed (caption \"that's the pOH; a base has pH above 7\"). On \"Sulfuric acid\" the working, the crossed chip and the task line dim (the answer chip stays) and a grey-bordered conditional chip writes at the right: \"H₂SO₄: first H⁺ complete, second only partly.\" On \"assume both do\" its second line writes: \"Only if the question says assume both H⁺ are released completely: [H⁺] = 2 × c.\" The chip never shows \"H₂SO₄ → 2H⁺\" as an equation. Bright at the end: the answer chip and the conditional chip. Hold about 1 second. Hold about 1 second.",
        [
            "HandText write-on",
            "Mark cross",
            "ScribbleCircle",
            "chip pop",
            "token flight"
        ],
        "Hold about 1 second"
    ],
    "dilution": [
        "adjust",
        "the board clears.",
        "Dilution: Adding water doesn't add or remove hydrogen ions, so the moles stay the same and only the volume grows.",
        "moles stay the same / zero point zero one zero zero / two point zero zero zero / toward seven",
        "On the spoken cues: `m6-volumetric-pipette-filler-v1.png` at the left, coded label \"25.0 mL of 0.200 mol/L HCl\"; it tilts along a coded arc into `m6-volumetric-flask-v1.png` (coded label \"500.0 mL\"), and a coded water fill rises to the calibration ring. On \"moles stay the same\" a lens shows eight teal tokens in a small outline; the outline widens to twenty times its area as the flask fills, the same eight tokens spreading out; tag",
        "explain",
        "the board clears. `m6-volumetric-pipette-filler-v1.png` at the left, coded label \"25.0 mL of 0.200 mol/L HCl\"; it tilts along a coded arc into `m6-volumetric-flask-v1.png` (coded label \"500.0 mL\"), and a coded water fill rises to the calibration ring. On \"moles stay the same\" a lens shows eight teal tokens in a small outline; the outline widens to twenty times its area as the flask fills, the same eight tokens spreading out; tag \"same moles, bigger volume\". Task line: \"Find the pH after dilution\"; as it writes, the plates shrink to grey thumbnails and the lens tag fades. Lines write one per cue: \"n(H₃O⁺) = 0.200 × 0.0250 = 0.00500 mol\"; \"c = 0.00500 mol ÷ 0.5000 L = 0.0100 mol/L\" on \"zero point zero one zero zero\" (the n line dims); \"pH = −log(0.0100) = 2.000\" on \"two point zero zero zero\" (no separate tag; the narration gives the reason). After \"three significant figures\" the c line dims and the log ruler returns small: a marker slides from pH 0.699 (grey label \"before\") to 2.000, bracket \"× 20 dilution: +1.301 (= log 20)\" (screen only). On \"toward seven\" the marker keeps sliding right in shrinking jumps (3, 4, 5, 6, 6.9...) and stops against a teal wall at 7; a chip \"dilute enough and it passes 7\" fades in and is crossed (caption \"water's own H₃O⁺\"). Bright at the end: the pH line, the ruler and the crossed chip. Hold about 1 second. Hold about 1 second.",
        [
            "HandText write-on",
            "Mark cross",
            "ScribbleCircle",
            "Enter slide",
            "chip pop",
            "token flight",
            "Cam lens zoom",
            "DrawPath",
            "Plate"
        ],
        "Hold about 1 second"
    ],
    "mixing-method": [
        "adjust",
        "the board clears.",
        "Mixing: neutralise first, then dilute: Mixing an acid with a base is different, because they react.",
        "react / total volume",
        "On the spoken cues: Two `m6-beaker-v1.png` plates at the left, coded labels \"acid\" and \"base\"; on \"react\" both tilt along coded arcs into a third, larger beaker outline. A lens over it: teal and violet tokens pair up and snap into pale blue water (C03 motion) until the teal tokens are gone, leaving three violet tokens; tag \"left over sets the pH\". The method writes as three short lines, each on its words, the previous dimming: \"1 n(H⁺)",
        "explain",
        "the board clears. Two `m6-beaker-v1.png` plates at the left, coded labels \"acid\" and \"base\"; on \"react\" both tilt along coded arcs into a third, larger beaker outline. A lens over it: teal and violet tokens pair up and snap into pale blue water (C03 motion) until the teal tokens are gone, leaving three violet tokens; tag \"left over sets the pH\". The method writes as three short lines, each on its words, the previous dimming: \"1 n(H⁺) and n(OH⁻)\", \"2 subtract: the excess\", \"3 c = excess ÷ total volume\". On \"total volume\" the lens outline widens to include both beakers' volumes, the leftover violet tokens spreading out. Hold about 1 second. Hold about 1 second.",
        [
            "HandText write-on",
            "token flight",
            "Cam lens zoom",
            "Plate"
        ],
        "Hold about 1 second"
    ],
    "we3-excess": [
        "new",
        "the board clears to the three zones.",
        "Worked example 3: moles and the excess: Forty millilitres of zero point one five zero moles per litre hydrochloric acid is mixed with sixty millilitres of zero point zero eight zero zero moles per litre barium hydroxide.",
        "zero point zero zero six zero zero / zero point zero zero nine six zero / excess",
        "On the spoken cues: Task line: \"Find the pH of the mixture\". Equation strip: \"H⁺(aq) + OH⁻(aq) → H₂O(l)\". Givens card, grouped: \"HCl: 40.0 mL, 0.150 mol/L\" | \"Ba(OH)₂: 60.0 mL, 0.0800 mol/L (2 OH⁻ each)\" | grey \"25 °C\". Step chip: \"Step 1 of 2: the excess\". On \"zero point zero zero six zero zero\" the HCl group lights and \"n(H⁺) = 0.150 × 0.0400 = 0.00600 mol\" writes; on \"zero point zero zero nine six zero\" the HCl group dims, the",
        "explain",
        "the board clears to the three zones. Task line: \"Find the pH of the mixture\". Equation strip: \"H⁺(aq) + OH⁻(aq) → H₂O(l)\". Givens card, grouped: \"HCl: 40.0 mL, 0.150 mol/L\" | \"Ba(OH)₂: 60.0 mL, 0.0800 mol/L (2 OH⁻ each)\" | grey \"25 °C\". Step chip: \"Step 1 of 2: the excess\". On \"zero point zero zero six zero zero\" the HCl group lights and \"n(H⁺) = 0.150 × 0.0400 = 0.00600 mol\" writes; on \"zero point zero zero nine six zero\" the HCl group dims, the Ba(OH)₂ group lights, its \"2\" gets a pen ring, and \"n(OH⁻) = 2 × 0.0800 × 0.0600 = 0.00960 mol\" writes. On \"excess\" the givens card and the strip dim, and the two n lines fold into the C03 two-bar comparison labelled with their values (teal \"H⁺ 0.00600 mol\", violet \"OH⁻ 0.00960 mol\"); the teal bar empties as the same length of violet empties, leaving a violet stub; chip pins \"excess OH⁻ = 0.00360 mol\". Hold about 1 second. Hold about 1 second.",
        [
            "HandText write-on",
            "ScribbleCircle",
            "chip pop",
            "bar fill"
        ],
        "Hold about 1 second"
    ],
    "we3-ph": [
        "new",
        "step chip \"Step 2 of 2: the pH\".",
        "Worked example 3: total volume and pH: That leftover hydroxide spreads through all one hundred millilitres, so it's zero point zero three six zero moles per litre.",
        "all one hundred millilitres / twelve point five five six / forty millilitres",
        "On the spoken cues: The bars shrink to a thumbnail beside the kept chip \"excess OH⁻ = 0.00360 mol\". On \"all one hundred millilitres\" both volumes in the givens card are underlined and \"V(total) = 40.0 + 60.0 = 100.0 mL = 0.1000 L\" writes, the violet stub spreading into a wide outline. Lines write one per cue, each earlier one dimming: \"[OH⁻] = 0.00360 ÷ 0.1000 = 0.0360 mol/L\"; \"pOH = −log(0.0360) = 1.444\"; \"pH = 14.00 − 1.444 = 12.556\"",
        "explain",
        "step chip \"Step 2 of 2: the pH\". The bars shrink to a thumbnail beside the kept chip \"excess OH⁻ = 0.00360 mol\". On \"all one hundred millilitres\" both volumes in the givens card are underlined and \"V(total) = 40.0 + 60.0 = 100.0 mL = 0.1000 L\" writes, the violet stub spreading into a wide outline. Lines write one per cue, each earlier one dimming: \"[OH⁻] = 0.00360 ÷ 0.1000 = 0.0360 mol/L\"; \"pOH = −log(0.0360) = 1.444\"; \"pH = 14.00 − 1.444 = 12.556\" with the answer chip \"pH = 12.556\" pinning and a small tag \"3 s.f. → 3 d.p.\" On \"forty millilitres\" a chip \"÷ 0.0400 L: pH 12.954\" fades in and is crossed (caption \"use the total volume\"). Bright at the end: the task line, the answer chip and the crossed chip. Hold about 1 second. Hold about 1 second.",
        [
            "HandText write-on",
            "Mark cross",
            "chip pop",
            "Mark underline",
            "bar fill"
        ],
        "Hold about 1 second"
    ],
    "memory-aid": [
        "new",
        "the board clears.",
        "Memory aid: Remember: one pH unit is ten times.",
        "one pH unit is ten times. / pH equals fourteen minus pOH / neutralise first, then dilute",
        "On the spoken cues: The first aid writes large and handwritten: \"One pH unit is ten times.\" with the log ruler thumbnail under it. On \"pH equals fourteen minus pOH\" the second line writes: \"Base: [OH⁻] → pOH → pH = 14 − pOH (25 °C)\". On \"neutralise first\" the third line writes: \"Mixtures: neutralise first, then dilute.\" with the two-bar thumbnail. Each earlier line dims slightly as the next writes.",
        "explain",
        "the board clears. The first aid writes large and handwritten: \"One pH unit is ten times.\" with the log ruler thumbnail under it. On \"pH equals fourteen minus pOH\" the second line writes: \"Base: [OH⁻] → pOH → pH = 14 − pOH (25 °C)\". On \"neutralise first\" the third line writes: \"Mixtures: neutralise first, then dilute.\" with the two-bar thumbnail. Each earlier line dims slightly as the next writes. Hold about 2 seconds. Hold about 2 seconds.",
        [
            "HandText write-on",
            "bar fill"
        ],
        "Hold about 2 seconds"
    ],
    "attempt-1": [
        "new",
        "the board clears.",
        "Unseen transfer task (attempt 1 (countdown, 10 seconds)) with every given and demand on screen, a 10 second countdown and no answer cues.",
        "Your turn. Twenty five millilitres of zero point",
        "The question card builds with every given visible and stays on screen; no answer cues appear; the countdown ring runs for 10 seconds after \"Pause here to answer.\" (attempt 1 (countdown, 10 seconds))",
        "explain",
        "the board clears. Question card, worded as printed: \"25.0 mL of 0.120 mol/L nitric acid is mixed with 35.0 mL of 0.0500 mol/L potassium hydroxide solution at 25 °C. Calculate the pH of the resulting mixture.\" The full question stays on screen. Countdown ring for 10 seconds with \"Pause here to answer.\" Nothing answer-bearing: no method lines, no bars, no aid.",
        [
            "bar fill",
            "Countdown ring"
        ],
        "10 second answer-free countdown after \"Pause here to answer.\"; the card stays on screen"
    ],
    "feedback-1": [
        "new",
        "the question card stays and shrinks to the top.",
        "Brief feedback (feedback 1 (brief)): the answer, the key reason with the givens underlined, and one crossed classic mistake (owner rule, 16 October).",
        "zero point zero zero three zero zero / zero point zero zero one two five / sixty millilitres / one point six eight one",
        "On the spoken cues: On \"zero point zero zero three zero zero\" \"25.0 mL of 0.120 mol/L nitric acid\" is underlined and \"n(H⁺) = 0.120 × 0.0250 = 0.00300 mol\" writes; \"35.0 mL of 0.0500 mol/L potassium hydroxide\" is underlined and \"n(OH⁻) = 0.0500 × 0.0350 = 0.00175 mol\" writes. On \"zero point zero zero one two five\" the two-bar comparison shows violet emptying first; chip \"excess H⁺ = 0.00125 mol\". On \"sixty millilitres\" both volumes are",
        "explain",
        "the question card stays and shrinks to the top. On \"zero point zero zero three zero zero\" \"25.0 mL of 0.120 mol/L nitric acid\" is underlined and \"n(H⁺) = 0.120 × 0.0250 = 0.00300 mol\" writes; \"35.0 mL of 0.0500 mol/L potassium hydroxide\" is underlined and \"n(OH⁻) = 0.0500 × 0.0350 = 0.00175 mol\" writes. On \"zero point zero zero one two five\" the two-bar comparison shows violet emptying first; chip \"excess H⁺ = 0.00125 mol\". On \"sixty millilitres\" both volumes are underlined again: \"V(total) = 0.0600 L\". Lines: \"[H₃O⁺] = 0.00125 ÷ 0.0600 = 0.02083 mol/L\"; \"pH = −log(0.02083) = 1.681\" with the answer chip \"pH = 1.681 (3 s.f. → 3 d.p.)\". Earlier lines dim as each writes. On \"only the acid's volume\" a chip \"÷ 0.0250 L: pH 1.301\" fades in and is crossed (caption \"use the total volume\"). Hold about 1 second. Hold about 1 second.",
        [
            "HandText write-on",
            "Mark cross",
            "chip pop",
            "Mark underline",
            "bar fill"
        ],
        "Hold about 1 second"
    ],
    "attempt-2": [
        "new",
        "question card: \"A potassium hydroxide solution has a pH of 12.30 at 25 °C.",
        "Unseen transfer task (attempt 2 (countdown, 10 seconds)) with every given and demand on screen, a 10 second countdown and no answer cues.",
        "Last one. A potassium hydroxide solution has a",
        "The question card builds with every given visible and stays on screen; no answer cues appear; the countdown ring runs for 10 seconds after \"Pause here to answer.\" (attempt 2 (countdown, 10 seconds))",
        "explain",
        "question card: \"A potassium hydroxide solution has a pH of 12.30 at 25 °C. Calculate the hydroxide ion concentration in this solution.\" The full question stays on screen. Countdown ring for 10 seconds with \"Pause here to answer.\" Nothing answer-bearing: no formula chips, no ruler.",
        [
            "chip pop",
            "Countdown ring"
        ],
        "10 second answer-free countdown after \"Pause here to answer.\"; the card stays on screen"
    ],
    "feedback-2": [
        "new",
        "the question card stays.",
        "Brief feedback (feedback 2 (brief)): the answer, the key reason with the givens underlined, and one crossed classic mistake (owner rule, 16 October).",
        "one point seven zero / zero point zero two zero moles per litre / hydronium",
        "On the spoken cues: On \"one point seven zero\" \"pH of 12.30 at 25 °C\" is underlined and \"pOH = 14.00 − 12.30 = 1.70\" writes. On \"zero point zero two zero\" \"[OH⁻] = 10⁻¹·⁷⁰ = 0.020 mol/L\" writes and the answer chip \"[OH⁻] = 0.020 mol/L (2 s.f.)\" pins; the pOH line dims. On \"hydronium\" a chip \"[OH⁻] = 10⁻¹²·³⁰ = 5.0 × 10⁻¹³ mol/L\" fades in and is crossed (caption \"10⁻ᵖᴴ gives H₃O⁺\").",
        "explain",
        "the question card stays. On \"one point seven zero\" \"pH of 12.30 at 25 °C\" is underlined and \"pOH = 14.00 − 12.30 = 1.70\" writes. On \"zero point zero two zero\" \"[OH⁻] = 10⁻¹·⁷⁰ = 0.020 mol/L\" writes and the answer chip \"[OH⁻] = 0.020 mol/L (2 s.f.)\" pins; the pOH line dims. On \"hydronium\" a chip \"[OH⁻] = 10⁻¹²·³⁰ = 5.0 × 10⁻¹³ mol/L\" fades in and is crossed (caption \"10⁻ᵖᴴ gives H₃O⁺\"). Hold about 1 second. Hold about 1 second.",
        [
            "HandText write-on",
            "Mark cross",
            "chip pop",
            "Mark underline"
        ],
        "Hold about 1 second"
    ],
    "decision-rule": [
        "new",
        "the question card writes, each line lighting on its words: \"1 Strong?",
        "Decision rule and handoff: So for any strong acid or base: work in moles when solutions are diluted or mixed, divide by the final volume, then take the negative log, through pOH for a base.",
        "Next",
        "On the spoken cues: Then [H₃O⁺] = c (HCl, HNO₃), or count OH⁻ per formula unit.\" \"2 Diluted or mixed? Work in moles; neutralise first; ÷ total volume.\" \"3 pH = −log[H₃O⁺]; for a base pOH first, pH = 14.00 − pOH (25 °C).\" On \"check it's strong first\" a small gate icon writes before line 1: \"strong or weak?\", with the weak branch greyed and tagged \"weak: [H₃O⁺] ≠ c, later video\". On \"Next\" a chip \"Next: strong acid and base pH practice,",
        "explain",
        "the question card writes, each line lighting on its words: \"1 Strong? Then [H₃O⁺] = c (HCl, HNO₃), or count OH⁻ per formula unit.\" \"2 Diluted or mixed? Work in moles; neutralise first; ÷ total volume.\" \"3 pH = −log[H₃O⁺]; for a base pOH first, pH = 14.00 − pOH (25 °C).\" On \"check it's strong first\" a small gate icon writes before line 1: \"strong or weak?\", with the weak branch greyed and tagged \"weak: [H₃O⁺] ≠ c, later video\". On \"Next\" a chip \"Next: strong acid and base pH practice, then weak acids and ICE tables\" appears with the meter plate small. Hold about 2 seconds. Hold about 2 seconds.",
        [
            "HandText write-on",
            "chip pop"
        ],
        "Hold about 2 seconds"
    ],
    "key-notes": [
        "new",
        "Key notes card with the numbered notes, the memory aid in large writing and its condition tag",
        "Essentials to copy into books",
        "key notes",
        "Notes appear then stay still for copying",
        "hold",
        "The notes and the memory aid appear and lock",
        [
            "Enter reveals"
        ],
        "Quiet copy hold of about 60 seconds with pause invitation"
    ]
}

M6C08_ROWS = {
    "hook": [
        "adjust",
        "`m6-ph-meter-probe-beaker-v1.png` at the right, its beaker labelled (coded) \"propanoic acid, 0.150 mol/L\".",
        "Hook (the meter disagrees): A student needs the pH of zero point one five zero moles per litre propanoic acid.",
        "zero point eight two four / two point eight five / right",
        "On the spoken cues: At the left the student's working writes in grey handwriting: \"[H₃O⁺] = 0.150 mol/L\", then \"pH = −log(0.150) = 0.824\" on \"zero point eight two four\". On \"two point eight five\" the amber readout in the meter screen counts to \"2.85\" and a pen ring circles it. On \"two pH units out\" a short pH ruler draws between them: 0.824 and 2.85 marked, the gap bracketed \"about 100 × less H₃O⁺ than predicted\". On \"right\" the grey",
        "explain",
        "`m6-ph-meter-probe-beaker-v1.png` at the right, its beaker labelled (coded) \"propanoic acid, 0.150 mol/L\". At the left the student's working writes in grey handwriting: \"[H₃O⁺] = 0.150 mol/L\", then \"pH = −log(0.150) = 0.824\" on \"zero point eight two four\". On \"two point eight five\" the amber readout in the meter screen counts to \"2.85\" and a pen ring circles it. On \"two pH units out\" a short pH ruler draws between them: 0.824 and 2.85 marked, the gap bracketed \"about 100 × less H₃O⁺ than predicted\". On \"right\" the grey working dims and a heading writes: \"Weak acid: what is [H₃O⁺]?\" Bright at the end: the heading, the readout and the bracket. Hold about 1 second. Hold about 1 second.",
        [
            "HandText write-on",
            "ScribbleCircle",
            "DrawPath",
            "NumberTicker",
            "Plate"
        ],
        "Hold about 1 second"
    ],
    "why-weak": [
        "adjust",
        "the board clears.",
        "Why: a weak acid stays mostly whole: Propanoic acid is weak.",
        "weak / equilibrium / K a / x",
        "On the spoken cues: `m6-beaker-v1.png` small at the left with the same label; a large particle lens opens from it: about 100 amber-outlined propanoic acid molecules among pale blue water. On \"weak\" one molecule hands a teal token to a water molecule (C01 hop) while, elsewhere, a propanoate takes one back from a hydronium (dashed reverse hop, C06); the swap keeps going, so about one ion pair is present at any moment; a small counter",
        "explain",
        "the board clears. `m6-beaker-v1.png` small at the left with the same label; a large particle lens opens from it: about 100 amber-outlined propanoic acid molecules among pale blue water. On \"weak\" one molecule hands a teal token to a water molecule (C01 hop) while, elsewhere, a propanoate takes one back from a hydronium (dashed reverse hop, C06); the swap keeps going, so about one ion pair is present at any moment; a small counter under the lens reads \"ionised: about 1 in 100\". On \"equilibrium\" the strip writes \"CH₃CH₂COOH(aq) + H₂O(l) ⇌ H₃O⁺(aq) + CH₃CH₂COO⁻(aq)\". On \"K a\" the C5 builder writes \"Ka = [H₃O⁺][CH₃CH₂COO⁻] / [CH₃CH₂COOH]\" with H₂O sliding into the grey \"left out\" tray, and a small grey tag \"Module 5\" (dims after its sentence). On \"x\" one ionised pair in the lens gets a teal bracket \"x = concentration that ionises (mol/L)\", and the counter dims. Bright at the end: the strip, the Ka line and the x bracket. Hold about 1 second. Hold about 1 second.",
        [
            "HandText write-on",
            "token flight",
            "Cam lens zoom",
            "DrawPath",
            "NumberTicker",
            "Plate"
        ],
        "Hold about 1 second"
    ],
    "we1-ice-table": [
        "new",
        "the board clears to the three zones.",
        "Worked example 1: the task and the ICE table: Here's the full method, with K a for propanoic acid one point three times ten to the minus five.",
        "ICE table / no ions / one hydronium and one propanoate / x squared over zero point one five zero minus x",
        "On the spoken cues: Task line: \"Find the pH\". Equation strip: \"CH₃CH₂COOH(aq) + H₂O(l) ⇌ H₃O⁺(aq) + CH₃CH₂COO⁻(aq)\". Givens card: \"propanoic acid: 0.150 mol/L\" | \"Ka = 1.3 × 10⁻⁵ (25 °C)\". On \"ICE table\" a three-column table draws under the strip, its columns sitting under the three species and its rows labelled \"I\", \"C\", \"E\" (each letter expanding briefly to \"initial\", \"change\", \"equilibrium\" and shrinking back). On \"no ions\" the I",
        "explain",
        "the board clears to the three zones. Task line: \"Find the pH\". Equation strip: \"CH₃CH₂COOH(aq) + H₂O(l) ⇌ H₃O⁺(aq) + CH₃CH₂COO⁻(aq)\". Givens card: \"propanoic acid: 0.150 mol/L\" | \"Ka = 1.3 × 10⁻⁵ (25 °C)\". On \"ICE table\" a three-column table draws under the strip, its columns sitting under the three species and its rows labelled \"I\", \"C\", \"E\" (each letter expanding briefly to \"initial\", \"change\", \"equilibrium\" and shrinking back). On \"no ions\" the I row fills \"0.150\", \"0\", \"0\", with a small grey tag on the zeros \"ignore water's 10⁻⁷\" that dims. On \"one hydronium and one propanoate\" the C01 hop plays once on the strip (one teal token from the acid to water) and the C row fills \"−x\", \"+x\", \"+x\", each cell lighting as the 1 : 1 : 1 coefficients on the strip pulse. The E row fills \"0.150 − x\", \"x\", \"x\". On \"x squared\" the builder line from scene 2 returns and substitutes: \"Ka = x · x / (0.150 − x) = x² / (0.150 − x) = 1.3 × 10⁻⁵\"; the I and C rows dim. Bright at the end: the task line, the E row and the substituted line. Hold about 1 second. Hold about 1 second.",
        [
            "token flight",
            "DrawPath",
            "table build"
        ],
        "Hold about 1 second"
    ],
    "we1-drop-x": [
        "new",
        "step chip \"Step 1 of 2: x\".",
        "Worked example 1: drop the x: K a is tiny next to zero point one five zero, so x is tiny too.",
        "drop the x / one point nine five times ten to the minus six / one point four times ten to the minus three",
        "On the spoken cues: The givens card and the strip dim (the table's column heads keep the species). The C6b check ruler draws under the line: a long bar labelled \"0.150\" with a hair-thin teal sliver at its end labelled \"x?\". On \"drop the x\" the \"− x\" in \"(0.150 − x)\" greys and slides out; the line becomes \"x² / 0.150 ≈ 1.3 × 10⁻⁵\" with \"≈\" replacing \"=\", and the E-row cell \"0.150 − x\" changes to \"≈ 0.150\". On \"one point nine five times",
        "explain",
        "step chip \"Step 1 of 2: x\". The givens card and the strip dim (the table's column heads keep the species). The C6b check ruler draws under the line: a long bar labelled \"0.150\" with a hair-thin teal sliver at its end labelled \"x?\". On \"drop the x\" the \"− x\" in \"(0.150 − x)\" greys and slides out; the line becomes \"x² / 0.150 ≈ 1.3 × 10⁻⁵\" with \"≈\" replacing \"=\", and the E-row cell \"0.150 − x\" changes to \"≈ 0.150\". On \"one point nine five times ten to the minus six\" the line \"x² = 1.3 × 10⁻⁵ × 0.150 = 1.95 × 10⁻⁶\" writes (the previous line dims); on \"one point four times ten to the minus three\" the line \"x = √(1.95 × 10⁻⁶) = 1.396 × 10⁻³ → 1.4 × 10⁻³ mol/L\" writes (no precision tag here; scene 5 says why). The result shrinks to a kept chip \"x = 1.4 × 10⁻³ mol/L\". Hold about 1 second. Hold about 1 second.",
        [
            "HandText write-on",
            "Enter slide",
            "chip pop",
            "DrawPath",
            "table build",
            "bar fill"
        ],
        "Hold about 1 second"
    ],
    "we1-check-ph": [
        "new",
        "step chip \"Step 2 of 2: check and pH\".",
        "Worked example 1: check, concentrations and pH: Now check that dropping x was fair. x is zero point nine three percent of zero point one five zero, well under the five percent rule of thumb.",
        "zero point nine three percent / two point eight five / meter / one molecule in a hundred",
        "On the spoken cues: The check ruler returns full width with the sliver drawn to scale and a dashed line at 5% of the bar, far to the right; on \"zero point nine three percent\" the label \"1.396 × 10⁻³ ÷ 0.150 = 0.93%\" writes with a tick, and the dashed line labels itself \"5%: rule of thumb\". The ruler dims. On \"hydronium and propanoate\" the E row lights and fills its values: \"0.149\", \"1.4 × 10⁻³\", \"1.4 × 10⁻³\" (all mol/L). On \"two point",
        "explain",
        "step chip \"Step 2 of 2: check and pH\". The check ruler returns full width with the sliver drawn to scale and a dashed line at 5% of the bar, far to the right; on \"zero point nine three percent\" the label \"1.396 × 10⁻³ ÷ 0.150 = 0.93%\" writes with a tick, and the dashed line labels itself \"5%: rule of thumb\". The ruler dims. On \"hydronium and propanoate\" the E row lights and fills its values: \"0.149\", \"1.4 × 10⁻³\", \"1.4 × 10⁻³\" (all mol/L). On \"two point eight five\" the E row dims to its x cells, the line \"pH = −log(1.396 × 10⁻³) = 2.85\" writes and the answer chip \"pH = 2.85\" pins, with a small grey tag \"x: 2 s.f. (from Ka) → 2 d.p.\" that dims after its sentence. On \"meter\" a small amber \"2.85 ✓\" readout chip joins the answer chip (no plate). On \"one molecule in a hundred\" the pH line dims, the scene 2 lens thumbnail returns small with its counter \"about 1 in 100\", and the hook's grey \"0.824\" chip fades in and is crossed (caption \"weak: [H₃O⁺] ≠ c\"). Bright at the end: the answer chip, the lens thumbnail and the crossed chip. Hold about 2 seconds. Hold about 2 seconds.",
        [
            "HandText write-on",
            "Mark cross",
            "chip pop",
            "tick",
            "Cam lens zoom",
            "NumberTicker",
            "bar fill"
        ],
        "Hold about 2 seconds"
    ],
    "check-fails": [
        "new",
        "the board clears.",
        "When the check fails: The shortcut isn't always safe.",
        "eight percent / show the check",
        "On the spoken cues: A small card: \"HF: 0.100 mol/L, Ka = 6.8 × 10⁻⁴\". The check ruler draws again: this time the x sliver is a visible chunk, and on \"eight percent\" it reaches past the dashed 5% line, which turns amber; label \"8.2%: over 5%\", and the HF card dims to grey. A chip \"small Ka, so always drop x\" fades in and is crossed (caption \"x must be small next to c\"). On \"solve the full equation\" a grey line writes \"x² / (0.100 − x) =",
        "explain",
        "the board clears. A small card: \"HF: 0.100 mol/L, Ka = 6.8 × 10⁻⁴\". The check ruler draws again: this time the x sliver is a visible chunk, and on \"eight percent\" it reaches past the dashed 5% line, which turns amber; label \"8.2%: over 5%\", and the HF card dims to grey. A chip \"small Ka, so always drop x\" fades in and is crossed (caption \"x must be small next to c\"). On \"solve the full equation\" a grey line writes \"x² / (0.100 − x) = 6.8 × 10⁻⁴: keep the x\" (no working). On \"show the check\" a small stamp writes beside the ruler: \"x ÷ c × 100% < 5% ✓ or ✗\". Bright at the end: the ruler, the stamp and the crossed chip. Hold about 1 second. Hold about 1 second.",
        [
            "HandText write-on",
            "Mark cross",
            "chip pop",
            "DrawPath"
        ],
        "Hold about 1 second"
    ],
    "weak-base": [
        "adjust",
        "the board clears to the three zones; `m5x-ammonia-bottle-v1.png` small at the right with coded label \"ammonia solution, 0.200 mol/L\".",
        "A weak base: the same table with Kb: Weak bases work the same way, with K b and hydroxide.",
        "hydroxide / one point nine times ten to the minus three",
        "On the spoken cues: Task line: \"Find the pH\". Strip: \"NH₃(aq) + H₂O(l) ⇌ NH₄⁺(aq) + OH⁻(aq)\"; on \"hydroxide\" a teal token hops from a water molecule to ammonia (C06 direction) and the OH⁻ on the strip turns violet. Givens card: \"NH₃: 0.200 mol/L\" | \"Kb = 1.8 × 10⁻⁵ (25 °C)\". The ICE table fills fast, row by row on \"the table is the same\": I \"0.200, 0, 0\"; C \"−x, +x, +x\"; E \"0.200 − x, x, x\"; the line \"Kb = [NH₄⁺][OH⁻] / [NH₃] = x² /",
        "explain",
        "the board clears to the three zones; `m5x-ammonia-bottle-v1.png` small at the right with coded label \"ammonia solution, 0.200 mol/L\". Task line: \"Find the pH\". Strip: \"NH₃(aq) + H₂O(l) ⇌ NH₄⁺(aq) + OH⁻(aq)\"; on \"hydroxide\" a teal token hops from a water molecule to ammonia (C06 direction) and the OH⁻ on the strip turns violet. Givens card: \"NH₃: 0.200 mol/L\" | \"Kb = 1.8 × 10⁻⁵ (25 °C)\". The ICE table fills fast, row by row on \"the table is the same\": I \"0.200, 0, 0\"; C \"−x, +x, +x\"; E \"0.200 − x, x, x\"; the line \"Kb = [NH₄⁺][OH⁻] / [NH₃] = x² / (0.200 − x)\" writes and its \"− x\" greys out on \"Drop the x\"; the plate and the givens card dim once the table is filled. On \"one point nine times ten to the minus three\" the line \"x = √(1.8 × 10⁻⁵ × 0.200) = 1.897 × 10⁻³ → 1.9 × 10⁻³ mol/L\" writes, and a violet bracket labels it \"x = [OH⁻]\". On \"under one percent\" the check ruler thumbnail shows \"0.95% ✓\". Earlier lines dim. Hold about 1 second. Hold about 1 second.",
        [
            "HandText write-on",
            "token flight",
            "DrawPath",
            "table build",
            "Plate"
        ],
        "Hold about 1 second"
    ],
    "weak-base-ph": [
        "new",
        "the kept chip \"x = [OH⁻] = 1.9 × 10⁻³ mol/L\" pulses violet on \"hydroxide\".",
        "Weak base: through pOH to pH: But this time x is the hydroxide, not hydronium.",
        "hydroxide / two point seven two / eleven point two eight",
        "On the spoken cues: Lines write one per cue: \"pOH = −log(1.897 × 10⁻³) = 2.72\" on \"two point seven two\"; \"pH = 14.00 − 2.72 = 11.28\" on \"eleven point two eight\", the answer chip \"pH = 11.28\" pinning and the pOH line dimming. On \"slip\" a chip \"pH = 2.72\" fades in and is crossed (caption \"that's the pOH; a base has pH above 7\").",
        "explain",
        "the kept chip \"x = [OH⁻] = 1.9 × 10⁻³ mol/L\" pulses violet on \"hydroxide\". Lines write one per cue: \"pOH = −log(1.897 × 10⁻³) = 2.72\" on \"two point seven two\"; \"pH = 14.00 − 2.72 = 11.28\" on \"eleven point two eight\", the answer chip \"pH = 11.28\" pinning and the pOH line dimming. On \"slip\" a chip \"pH = 2.72\" fades in and is crossed (caption \"that's the pOH; a base has pH above 7\"). Hold about 1 second. Hold about 1 second.",
        [
            "HandText write-on",
            "Mark cross",
            "chip pop"
        ],
        "Hold about 1 second"
    ],
    "strong-or-weak": [
        "new",
        "the board clears.",
        "Strong or weak first: So every pH question starts with one decision.",
        "strong / weak",
        "On the spoken cues: The C07 gate icon writes centre: \"Strong or weak?\". On \"strong\" the left branch lights teal: \"strong: [H₃O⁺] = c (or [OH⁻] from c)\" with a thumbnail of C07's HNO₃ line. On \"weak\" the right branch lights amber: \"weak: Ka or Kb, ICE table, x = √(K × c), check < 5%\" with a thumbnail of the propanoic acid E row. On \"K a value\" a small chip \"Ka given → weak\" writes under the right branch.",
        "explain",
        "the board clears. The C07 gate icon writes centre: \"Strong or weak?\". On \"strong\" the left branch lights teal: \"strong: [H₃O⁺] = c (or [OH⁻] from c)\" with a thumbnail of C07's HNO₃ line. On \"weak\" the right branch lights amber: \"weak: Ka or Kb, ICE table, x = √(K × c), check < 5%\" with a thumbnail of the propanoic acid E row. On \"K a value\" a small chip \"Ka given → weak\" writes under the right branch. Hold about 1 second. Hold about 1 second.",
        [
            "HandText write-on",
            "chip pop",
            "table build"
        ],
        "Hold about 1 second"
    ],
    "memory-aid": [
        "new",
        "the board clears.",
        "Memory aid: So here's what to remember.",
        "Strong or weak first. / x is about the square root of K a times c / check that x is under five percent",
        "On the spoken cues: The first aid writes large and handwritten: \"Strong or weak first.\" On \"square root\" the second line writes: \"Weak: x ≈ √(Ka × c), then check x < 5% of c.\" with a tiny check-ruler thumbnail. On \"weak base\" the third line writes: \"Weak base: x = [OH⁻] → pOH → pH.\" Each earlier line dims slightly as the next writes.",
        "explain",
        "the board clears. The first aid writes large and handwritten: \"Strong or weak first.\" On \"square root\" the second line writes: \"Weak: x ≈ √(Ka × c), then check x < 5% of c.\" with a tiny check-ruler thumbnail. On \"weak base\" the third line writes: \"Weak base: x = [OH⁻] → pOH → pH.\" Each earlier line dims slightly as the next writes. Hold about 2 seconds. Hold about 2 seconds.",
        [
            "HandText write-on"
        ],
        "Hold about 2 seconds"
    ],
    "attempt-1": [
        "adjust",
        "the board clears.",
        "Unseen transfer task (attempt 1 (countdown, 10 seconds)) with every given and demand on screen, a 10 second countdown and no answer cues.",
        "Your turn. Methanoic acid is the acid in",
        "The question card builds with every given visible and stays on screen; no answer cues appear; the countdown ring runs for 10 seconds after \"Pause here to answer.\" (attempt 1 (countdown, 10 seconds))",
        "explain",
        "the board clears. `m6-ant-formic-acid-v1.png` small at the top right. Question card, worded as printed: \"Methanoic acid (HCOOH) is the acid in some ant stings. Calculate the pH of a 0.200 mol/L methanoic acid solution at 25 °C, given that Ka = 1.8 × 10⁻⁴. Show that the simplifying assumption is valid.\" The full question stays on screen. Countdown ring for 10 seconds with \"Pause here to answer.\" Nothing answer-bearing: no table, no ruler, no aid.",
        [
            "table build",
            "Countdown ring",
            "Plate"
        ],
        "10 second answer-free countdown after \"Pause here to answer.\"; the card stays on screen"
    ],
    "feedback-1": [
        "new",
        "the question card stays and shrinks to the top.",
        "Brief feedback (feedback 1 (brief)): the answer, the key reason with the givens underlined, and one crossed classic mistake (owner rule, 16 October).",
        "six point zero times ten to the minus three / three percent / two point two two / point zero one / strong",
        "On the spoken cues: On \"six point zero times ten to the minus three\" \"0.200 mol/L\" and \"Ka = 1.8 × 10⁻⁴\" are underlined and a compact E row writes \"0.200 − x ≈ 0.200 | x | x\", then \"x² = 1.8 × 10⁻⁴ × 0.200 = 3.6 × 10⁻⁵; x = 6.0 × 10⁻³ mol/L\". On \"three percent\" \"Show that the simplifying assumption is valid\" is underlined and the check line writes \"6.0 × 10⁻³ ÷ 0.200 = 3.0% < 5% ✓\" (the x lines dim). On \"two point two two\" \"pH =",
        "explain",
        "the question card stays and shrinks to the top. On \"six point zero times ten to the minus three\" \"0.200 mol/L\" and \"Ka = 1.8 × 10⁻⁴\" are underlined and a compact E row writes \"0.200 − x ≈ 0.200 | x | x\", then \"x² = 1.8 × 10⁻⁴ × 0.200 = 3.6 × 10⁻⁵; x = 6.0 × 10⁻³ mol/L\". On \"three percent\" \"Show that the simplifying assumption is valid\" is underlined and the check line writes \"6.0 × 10⁻³ ÷ 0.200 = 3.0% < 5% ✓\" (the x lines dim). On \"two point two two\" \"pH = −log(6.0 × 10⁻³) = 2.22\" writes and the answer chip \"pH = 2.22\" pins; the check line dims. On \"point zero one\" a small grey tag writes under the answer chip: \"full equation: 2.23 (shortcut within 0.01)\". On \"strong\" the tag dims and a chip \"[H₃O⁺] = 0.200: pH 0.699\" fades in and is crossed (caption \"weak: [H₃O⁺] ≠ c\"). Hold about 1 second. Hold about 1 second.",
        [
            "HandText write-on",
            "Mark cross",
            "chip pop",
            "Mark underline"
        ],
        "Hold about 1 second"
    ],
    "attempt-2": [
        "new",
        "question card: \"Methylamine (CH₃NH₂) is a weak base that reacts with water in the same way as ammonia.",
        "Unseen transfer task (attempt 2 (countdown, 10 seconds)) with every given and demand on screen, a 10 second countdown and no answer cues.",
        "Last one. Methylamine is a weak base that",
        "The question card builds with every given visible and stays on screen; no answer cues appear; the countdown ring runs for 10 seconds after \"Pause here to answer.\" (attempt 2 (countdown, 10 seconds))",
        "explain",
        "question card: \"Methylamine (CH₃NH₂) is a weak base that reacts with water in the same way as ammonia. Calculate the pH of a 0.400 mol/L methylamine solution at 25 °C, given that Kb = 4.4 × 10⁻⁴.\" The full question stays on screen. Countdown ring for 10 seconds with \"Pause here to answer.\" Nothing answer-bearing: no equation strip, no table.",
        [
            "table build",
            "Countdown ring"
        ],
        "10 second answer-free countdown after \"Pause here to answer.\"; the card stays on screen"
    ],
    "feedback-2": [
        "new",
        "the question card stays.",
        "Brief feedback (feedback 2 (brief)): the answer, the key reason with the givens underlined, and one crossed classic mistake (owner rule, 16 October).",
        "hydroxide / one point three times ten to the minus two / twelve point one two",
        "On the spoken cues: On \"hydroxide\" \"reacts with water in the same way as ammonia\" is underlined and the strip writes \"CH₃NH₂(aq) + H₂O(l) ⇌ CH₃NH₃⁺(aq) + OH⁻(aq)\". On \"one point three times ten to the minus two\" \"0.400 mol/L\" and \"Kb = 4.4 × 10⁻⁴\" are underlined and \"x = √(4.4 × 10⁻⁴ × 0.400) = 1.33 × 10⁻² → 1.3 × 10⁻² mol/L = [OH⁻]\" writes, with \"3.3% < 5% ✓\" beside it. Then \"pOH = 1.88; pH = 14.00 − 1.88 = 12.12\" and the answer chip",
        "explain",
        "the question card stays. On \"hydroxide\" \"reacts with water in the same way as ammonia\" is underlined and the strip writes \"CH₃NH₂(aq) + H₂O(l) ⇌ CH₃NH₃⁺(aq) + OH⁻(aq)\". On \"one point three times ten to the minus two\" \"0.400 mol/L\" and \"Kb = 4.4 × 10⁻⁴\" are underlined and \"x = √(4.4 × 10⁻⁴ × 0.400) = 1.33 × 10⁻² → 1.3 × 10⁻² mol/L = [OH⁻]\" writes, with \"3.3% < 5% ✓\" beside it. Then \"pOH = 1.88; pH = 14.00 − 1.88 = 12.12\" and the answer chip \"pH = 12.12\" pins; earlier lines dim. On \"treats a weak base as strong\" a chip \"[OH⁻] = 0.400: pH 13.602\" fades in and is crossed (caption \"weak base: [OH⁻] ≠ c\"). Hold about 1 second. Hold about 1 second.",
        [
            "HandText write-on",
            "Mark cross",
            "chip pop",
            "Mark underline"
        ],
        "Hold about 1 second"
    ],
    "decision-rule": [
        "adjust",
        "the question card writes, each line lighting on its words: \"1 Strong or weak?\"",
        "Decision rule and handoff: So for any pH question, decide first: strong or weak.",
        "Next",
        "On the spoken cues: \"2 Strong: [H₃O⁺] or [OH⁻] from c.\" \"3 Weak: equation, ICE table, x ≈ √(K × c), check x < 5% of c.\" \"4 pH = −log[H₃O⁺]; for a base, pOH first, then 14.00 − pOH.\" On \"Next\" a chip \"Next: heat of neutralisation for weak acids\" appears with a small `m6-foam-cup-calorimeter-v1.png` (the C03 plate).",
        "explain",
        "the question card writes, each line lighting on its words: \"1 Strong or weak?\" \"2 Strong: [H₃O⁺] or [OH⁻] from c.\" \"3 Weak: equation, ICE table, x ≈ √(K × c), check x < 5% of c.\" \"4 pH = −log[H₃O⁺]; for a base, pOH first, then 14.00 − pOH.\" On \"Next\" a chip \"Next: heat of neutralisation for weak acids\" appears with a small `m6-foam-cup-calorimeter-v1.png` (the C03 plate). Hold about 2 seconds. Hold about 2 seconds.",
        [
            "HandText write-on",
            "chip pop",
            "table build",
            "Plate"
        ],
        "Hold about 2 seconds"
    ],
    "key-notes": [
        "new",
        "Key notes card with the numbered notes, the memory aid in large writing and its condition tag",
        "Essentials to copy into books",
        "key notes",
        "Notes appear then stay still for copying",
        "hold",
        "The notes and the memory aid appear and lock",
        [
            "Enter reveals"
        ],
        "Quiet copy hold of about 60 seconds with pause invitation"
    ]
}

SKILLS01_ROWS = {
    "hook": [
        "new",
        "Twelve small report tiles fill a 6 x 2 grid, labelled \"Biology 2020\" to \"Biology 2025\" and \"Chemistry 2020\" to \"Chemistry 2025\".",
        "Hook: Here's something NESA's marking feedback raises every year.",
        "nearby question / reading the question",
        "On the spoken cues: On \"every HSC\" each tile gets a red flag mark in turn (fast stagger; green ticks are kept for marks earned). Tag: \"NESA marking feedback, 2020 to 2025: 12 of 12 reports\". On \"nearby question\" a coded question card slides in. A second card sits half behind it, slightly rotated, with an arrow labelled \"answered this one instead\". On \"reading the question\" the front card straightens and the heading writes on: \"Read the",
        "explain",
        "Twelve small report tiles fill a 6 x 2 grid, labelled \"Biology 2020\" to \"Biology 2025\" and \"Chemistry 2020\" to \"Chemistry 2025\". On \"every HSC\" each tile gets a red flag mark in turn (fast stagger; green ticks are kept for marks earned). Tag: \"NESA marking feedback, 2020 to 2025: 12 of 12 reports\". On \"nearby question\" a coded question card slides in. A second card sits half behind it, slightly rotated, with an arrow labelled \"answered this one instead\". On \"reading the question\" the front card straightens and the heading writes on: \"Read the question before you answer it\". Hold about 1 second. Hold about 1 second.",
        [
            "HandText write-on",
            "Enter slide",
            "tick",
            "DrawPath"
        ],
        "Hold about 1 second"
    ],
    "question-card": [
        "adjust",
        "The question card writes on.",
        "Question-card: Here's an HSC-style question.",
        "crystals / deeper red / in terms of collision theory",
        "On the spoken cues: Subject badge \"Chemistry\". Tag \"HSC-style question, written for HSCScience\". Small grey tag \"Chemistry example; the reading skill is the same in Biology\". Card text: \"The equilibrium below is established in a test tube at 25 °C.\" \"Fe3+(aq) (pale yellow) + SCN-(aq) (colourless) ⇌ FeSCN2+(aq) (red)\" \"A few crystals of iron(III) nitrate, Fe(NO3)3, are added and dissolve. The temperature stays at 25 °C, and the solution",
        "explain",
        "The question card writes on. Subject badge \"Chemistry\". Tag \"HSC-style question, written for HSCScience\". Small grey tag \"Chemistry example; the reading skill is the same in Biology\". Card text: \"The equilibrium below is established in a test tube at 25 °C.\" \"Fe3+(aq) (pale yellow) + SCN-(aq) (colourless) ⇌ FeSCN2+(aq) (red)\" \"A few crystals of iron(III) nitrate, Fe(NO3)3, are added and dissolve. The temperature stays at 25 °C, and the solution becomes a deeper red.\" \"Explain this colour change in terms of collision theory.\" \"(3 marks)\" printed at the right. `c3-iron-tube-start-v1.png` (pale red-orange tube in a wire stand) sits small at the card's right. On \"crystals\" a few coded crystals drop into it. On \"deeper red\" it crossfades to `c3-iron-tube-deep-v1.png`. On \"in terms of collision theory\" that line pulses once (no annotation yet). An empty ruled answer box draws below: eight lines, counter \"0 / 3\". Hold about 1 second. Hold about 1 second.",
        [
            "HandText write-on",
            "Plate crossfade",
            "DrawPath",
            "NumberTicker",
            "Plate"
        ],
        "Hold about 1 second"
    ],
    "verb": [
        "new",
        "On \"verb\" routine row 1 writes at the far left: highlighter icon, \"Do what?",
        "Verb: Start with the verb.",
        "verb / explain / why",
        "On the spoken cues: (the verb)\". On \"explain\" an amber highlighter swipe crosses \"Explain\" on the card. A glossary chip slides out under it: \"explain: show a cause and effect, how or why it happens\", with the grey tag \"NESA glossary, paraphrased\". On \"why\" a small pen arrow writes \"cause → effect\" beside the chip.",
        "explain",
        "On \"verb\" routine row 1 writes at the far left: highlighter icon, \"Do what? (the verb)\". On \"explain\" an amber highlighter swipe crosses \"Explain\" on the card. A glossary chip slides out under it: \"explain: show a cause and effect, how or why it happens\", with the grey tag \"NESA glossary, paraphrased\". On \"why\" a small pen arrow writes \"cause → effect\" beside the chip. Hold about 1 second. Hold about 1 second.",
        [
            "HandText write-on",
            "Mark cross",
            "Enter slide",
            "chip pop",
            "Mark highlight",
            "DrawPath"
        ],
        "Hold about 1 second"
    ],
    "marks": [
        "new",
        "On \"marks\" routine row 2 writes: badge icon, \"How much?",
        "Marks: Next, the marks.",
        "marks / stop",
        "On the spoken cues: (the marks)\". A hand-drawn ring stamps round \"(3 marks)\" and lifts off as a round badge \"3\". The badge parks at the top-right of the answer box beside the counter \"0 / 3\". Three faint dotted slots appear in the answer box, one per two lines. Tag: \"about 3 linked points\". On \"stop\" a short ghost answer runs past the eighth line onto an extra page strip. A grey tag \"more lines, not more marks\" writes on and the",
        "explain",
        "On \"marks\" routine row 2 writes: badge icon, \"How much? (the marks)\". A hand-drawn ring stamps round \"(3 marks)\" and lifts off as a round badge \"3\". The badge parks at the top-right of the answer box beside the counter \"0 / 3\". Three faint dotted slots appear in the answer box, one per two lines. Tag: \"about 3 linked points\". On \"stop\" a short ghost answer runs past the eighth line onto an extra page strip. A grey tag \"more lines, not more marks\" writes on and the overflow fades. Hold about 1 second. Hold about 1 second.",
        [
            "HandText write-on",
            "ScribbleCircle",
            "NumberTicker"
        ],
        "Hold about 1 second"
    ],
    "content-words": [
        "new",
        "On \"content words\" routine row 3 writes: underline icon, \"About what?",
        "Content-words: Now the content words and the givens.",
        "content words / givens / iron three nitrate / deeper red / iron three plus ions / stays the same / often",
        "On the spoken cues: (content words, givens)\". Pen underlines draw on their cue words: \"iron(III) nitrate\", then \"deeper red\". On \"what it tells you\" a small question chip \"what does it tell me?\" hangs off the first underline. On \"iron three plus ions\" its answer chip writes on: \"iron(III) nitrate → more Fe3+\". A pen ring circles \"Fe3+\" in the equation. On \"stays the same\" the pen underlines \"The temperature stays at 25 °C\"; the",
        "explain",
        "On \"content words\" routine row 3 writes: underline icon, \"About what? (content words, givens)\". Pen underlines draw on their cue words: \"iron(III) nitrate\", then \"deeper red\". On \"what it tells you\" a small question chip \"what does it tell me?\" hangs off the first underline. On \"iron three plus ions\" its answer chip writes on: \"iron(III) nitrate → more Fe3+\". A pen ring circles \"Fe3+\" in the equation. On \"stays the same\" the pen underlines \"The temperature stays at 25 °C\"; the question chip moves to it and its answer chip writes on: \"same collision energy\". The first chip dims to make room, so two bright chips at most are live. On \"often\" a short line connects the \"more Fe3+\" chip to the first answer slot (foreshadow; no text). Hold about 1 second. Hold about 1 second.",
        [
            "HandText write-on",
            "ScribbleCircle",
            "chip pop",
            "Mark underline",
            "DrawPath"
        ],
        "Hold about 1 second"
    ],
    "constraint": [
        "new",
        "On \"constraint\" routine row 4 writes: bracket icon, \"Using what?",
        "Constraint: Last, the constraint: the phrase that tells you how to answer.",
        "constraint / In terms of / With reference to / Using the information",
        "On the spoken cues: (the constraint)\". Teal square brackets draw round \"in terms of collision theory\". Three keyword chips drop into the answer box margin: \"collisions\", \"how often\", \"rates\". On \"With reference to\" and \"Using the information\" a constraint card slides in at the right with three rows, each lighting on its cue: \"in terms of X: X carries the explanation\" \"with reference to X: name X and use it\" \"using the information: take",
        "explain",
        "On \"constraint\" routine row 4 writes: bracket icon, \"Using what? (the constraint)\". Teal square brackets draw round \"in terms of collision theory\". Three keyword chips drop into the answer box margin: \"collisions\", \"how often\", \"rates\". On \"With reference to\" and \"Using the information\" a constraint card slides in at the right with three rows, each lighting on its cue: \"in terms of X: X carries the explanation\" \"with reference to X: name X and use it\" \"using the information: take details from the stimulus, say what they show\" The card shrinks to a corner tab after the scene. Hold about 1 second. Hold about 1 second.",
        [
            "HandText write-on",
            "Enter slide",
            "chip pop",
            "DrawPath"
        ],
        "Hold about 1 second"
    ],
    "build-1": [
        "new",
        "Line 1 handwrites into the answer box: \"Adding Fe(NO3)3 increases [Fe3+], so Fe3+ and SCN- ions collide more often: the forward rate increases.\"",
        "Build-1 (the first point): So let's build the answer, in collision theory.",
        "more often / forward",
        "On the spoken cues: On \"more often\" a small coded collision inset flashes beside the box (C3 particle style: pale yellow Fe3+ dots, grey SCN- dots): before, one meeting; after, three meetings in the same time, each with a joining spark. On \"forward\" two rate bars appear beside the box (forward blue, reverse amber, C3 style, no values). They start level; the forward bar steps up. On \"tick\" a green tick lands in the margin. The counter",
        "explain",
        "Line 1 handwrites into the answer box: \"Adding Fe(NO3)3 increases [Fe3+], so Fe3+ and SCN- ions collide more often: the forward rate increases.\" On \"more often\" a small coded collision inset flashes beside the box (C3 particle style: pale yellow Fe3+ dots, grey SCN- dots): before, one meeting; after, three meetings in the same time, each with a joining spark. On \"forward\" two rate bars appear beside the box (forward blue, reverse amber, C3 style, no values). They start level; the forward bar steps up. On \"tick\" a green tick lands in the margin. The counter goes \"1 / 3\". The \"collisions\" and \"how often\" chips tick.",
        [
            "HandText write-on",
            "chip pop",
            "tick",
            "NumberTicker",
            "bar fill"
        ],
        "Settle about 1 second"
    ],
    "build-2": [
        "new",
        "Line 2: \"The reverse rate depends on [FeSCN2+], which has not changed yet, so the forward rate is now greater than the reverse rate: FeSCN2+ forms faster than it splits.\"",
        "Build-2 (the link, then the result): Now the link that makes it an explanation.",
        "hasn't changed / equal again",
        "On the spoken cues: On \"hasn't changed\" a pen ring circles the unchanged reverse bar. A pen arrow joins the \"more Fe3+\" chip from scene 5 to lines 1 and 2. Tick, counter \"2 / 3\". Line 3: \"As [FeSCN2+] rises, the reverse rate rises and the forward rate falls, until the rates are equal again with more FeSCN2+ (red): a deeper red.\" On \"equal again\" the bars meet, both higher than at the start (C3 pattern). The small iron tube plate beside",
        "explain",
        "Line 2: \"The reverse rate depends on [FeSCN2+], which has not changed yet, so the forward rate is now greater than the reverse rate: FeSCN2+ forms faster than it splits.\" On \"hasn't changed\" a pen ring circles the unchanged reverse bar. A pen arrow joins the \"more Fe3+\" chip from scene 5 to lines 1 and 2. Tick, counter \"2 / 3\". Line 3: \"As [FeSCN2+] rises, the reverse rate rises and the forward rate falls, until the rates are equal again with more FeSCN2+ (red): a deeper red.\" On \"equal again\" the bars meet, both higher than at the start (C3 pattern). The small iron tube plate beside the card pulses on its deeper red. Tick, counter \"3 / 3\". The \"rates\" chip ticks. On \"linked\" the link words \"so\" in all three lines take amber underlines. Hold about 2 seconds. Hold about 2 seconds.",
        [
            "ScribbleCircle",
            "chip pop",
            "tick",
            "Mark underline",
            "DrawPath",
            "NumberTicker",
            "bar fill"
        ],
        "Hold about 2 seconds"
    ],
    "weak-vs-strong": [
        "new",
        "The strong answer box shrinks to the right, keeping its ticks and \"3 / 3\".",
        "Weak-vs-strong: Now compare this answer.",
        "wrong / nearby question / one",
        "On the spoken cues: A second ruled box writes on at the left with the weak answer in handwriting. Label \"Answer A\"; the strong one is \"Answer B\". On \"wrong\" a grey tag writes on: \"correct chemistry\". On \"nearby question\" the teal brackets on the card pulse, and the three keyword chips appear beside Answer A, each crossed: \"collisions\", \"how often\", \"rates\". On \"one\" a single tick lands beside \"more of the red ion forms\". Counter \"1 /",
        "explain",
        "The strong answer box shrinks to the right, keeping its ticks and \"3 / 3\". A second ruled box writes on at the left with the weak answer in handwriting. Label \"Answer A\"; the strong one is \"Answer B\". On \"wrong\" a grey tag writes on: \"correct chemistry\". On \"nearby question\" the teal brackets on the card pulse, and the three keyword chips appear beside Answer A, each crossed: \"collisions\", \"how often\", \"rates\". On \"one\" a single tick lands beside \"more of the red ion forms\". Counter \"1 / 3\". A red lost-marks tag: \"-2: not in terms of collision theory (no collisions or rates)\". Hold about 2 seconds. Hold about 2 seconds.",
        [
            "HandText write-on",
            "Mark cross",
            "chip pop",
            "tick",
            "DrawPath",
            "NumberTicker"
        ],
        "Hold about 2 seconds"
    ],
    "one-mark-one-idea": [
        "new",
        "Heading \"One mark, one idea?\" with a hand-drawn \"≈\".",
        "One-mark-one-idea: So is it always one mark, one idea?",
        "rule of thumb / linked / specific thing / as a whole",
        "On the spoken cues: On \"rule of thumb\" three answer slots line up with three marks (from scene 8, small). Three limit cards write on, one per cue: \"linked, not listed\": three loose fact chips get no ticks; the same chips joined by \"so\" arrows get ticks. \"a specific thing\": a chip \"a balanced equation with states\" with the grey tag \"e.g. a NESA Chemistry 2025 guideline\"; a chip \"a value from the data\". \"judged as a whole\": a seven-mark",
        "explain",
        "Heading \"One mark, one idea?\" with a hand-drawn \"≈\". On \"rule of thumb\" three answer slots line up with three marks (from scene 8, small). Three limit cards write on, one per cue: \"linked, not listed\": three loose fact chips get no ticks; the same chips joined by \"so\" arrows get ticks. \"a specific thing\": a chip \"a balanced equation with states\" with the grey tag \"e.g. a NESA Chemistry 2025 guideline\"; a chip \"a value from the data\". \"judged as a whole\": a seven-mark box shows seven bullet facts and a band label \"sound, not comprehensive\". Grey tag \"longer answers are marked in levels\". Earlier cards collapse to their titles as each new card writes on, so only one demonstration is live at a time. A footer tag: \"NESA's criteria are set question by question\". Hold about 2 seconds. Hold about 2 seconds.",
        [
            "HandText write-on",
            "chip pop",
            "tick",
            "DrawPath"
        ],
        "Hold about 2 seconds"
    ],
    "routine": [
        "new",
        "The routine strip comes back full size as a card, each row lighting on its cue with its annotation icon: \"1 Do what? highlight the verb\" \"2 How much? circle the marks\" \"3 About what? underline content words and givens\" \"4 Using what? bracket the constraint\" A small stopwatch doodle reads \"about 30 s\".",
        "Routine: Here's the routine.",
        "Do what? / How much? / About what? / Using what? / tick",
        "On the spoken cues: On \"tick\" a fifth row writes: \"After: tick each part of the question\". The iron thiocyanate card re-shows its annotations with a tick on each. Memory aid writes large and handwritten: \"Do what? How much? About what? Using what?\" The strip then shrinks to the far left.",
        "explain",
        "The routine strip comes back full size as a card, each row lighting on its cue with its annotation icon: \"1 Do what? highlight the verb\" \"2 How much? circle the marks\" \"3 About what? underline content words and givens\" \"4 Using what? bracket the constraint\" A small stopwatch doodle reads \"about 30 s\". On \"tick\" a fifth row writes: \"After: tick each part of the question\". The iron thiocyanate card re-shows its annotations with a tick on each. Memory aid writes large and handwritten: \"Do what? How much? About what? Using what?\" Hold about 2 seconds. The strip then shrinks to the far left. Hold about 2 seconds.",
        [
            "HandText write-on",
            "ScribbleCircle",
            "tick",
            "Mark underline",
            "DrawPath"
        ],
        "Hold about 2 seconds"
    ],
    "drill-1": [
        "adjust",
        "The board clears.",
        "HSC-style training question (drill-1 (Biology; countdown, 10 seconds)) with every given and demand on screen, a 10 second countdown and no answer cues.",
        "Your turn, with two questions. Do the one",
        "The question card builds with every given visible and stays on screen; no answer cues appear; the countdown ring runs for 10 seconds after \"Pause here to answer.\" (drill-1 (Biology; countdown, 10 seconds))",
        "explain",
        "The board clears. Question card with subject badge \"Biology\" and tag \"HSC-style question, written for HSCScience\". Card text: \"Roan cattle have a mixture of red hairs and white hairs. Roan cattle were crossed with each other. The table shows the calves produced.\" Table \"Coat colour | Number of calves\": \"red | 9\", \"roan | 21\", \"white | 10\". \"Using the information provided, explain how these results show that roan cattle are heterozygous.\" \"(3 marks)\" Plates small at the right: `m5x-cattle-roan-v1.png`, with `m5x-cattle-red-v1.png` and `m5x-cattle-white-v1.png` beside the table rows. Empty ruled answer box, counter \"0 / 3\". No annotations: students annotate. Countdown ring 10 seconds with \"Pause here to answer.\" The routine strip dims. Nothing answer-bearing.",
        [
            "HandText write-on",
            "Mark cross",
            "table build",
            "NumberTicker",
            "Countdown ring",
            "Plate"
        ],
        "10 second answer-free countdown after \"Pause here to answer.\"; the card stays on screen"
    ],
    "feedback-1": [
        "new",
        "Annotations land fast on the card: the highlighter on \"explain\", the badge on \"(3 marks)\", underlines on \"crossed with each other\" and the three numbers, teal brackets on \"Using the information provided\".",
        "Drill feedback (feedback-1): the reading routine applied to the card, the model answer built point by point with margin ticks, and one crossed habit (about 25 to 35 seconds, as allowed for this series).",
        "use the data / both alleles / one to two to one / half",
        "On the spoken cues: Three lines write into the box, each ticked as spoken: \"Roan x roan gave red and white calves, so each roan parent carries a red and a white allele: heterozygous.\" \"9 : 21 : 10 is close to 1 : 2 : 1 (expected 10 : 20 : 10 of 40), the ratio from two heterozygous parents.\" \"Roan is about half (21 of 40), matching the heterozygous offspring.\" Pen arrows run from each number in the table to line 2. On \"never using the",
        "explain",
        "Annotations land fast on the card: the highlighter on \"explain\", the badge on \"(3 marks)\", underlines on \"crossed with each other\" and the three numbers, teal brackets on \"Using the information provided\". Three lines write into the box, each ticked as spoken: \"Roan x roan gave red and white calves, so each roan parent carries a red and a white allele: heterozygous.\" \"9 : 21 : 10 is close to 1 : 2 : 1 (expected 10 : 20 : 10 of 40), the ratio from two heterozygous parents.\" \"Roan is about half (21 of 40), matching the heterozygous offspring.\" Pen arrows run from each number in the table to line 2. On \"never using the numbers\" a chip \"codominance means both alleles show\" writes on and takes a red scribble cross. Caption \"the question said: use the information\". Hold about 1 second. Hold about 1 second.",
        [
            "HandText write-on",
            "Mark cross",
            "chip pop",
            "tick",
            "Mark underline",
            "Mark highlight",
            "DrawPath",
            "table build"
        ],
        "Hold about 1 second"
    ],
    "drill-2": [
        "new",
        "Board clears.",
        "HSC-style training question (drill-2 (Chemistry; countdown, 10 seconds)) with every given and demand on screen, a 10 second countdown and no answer cues.",
        "Now Chemistry. Colourless dinitrogen tetroxide forms brown nitrogen",
        "The question card builds with every given visible and stays on screen; no answer cues appear; the countdown ring runs for 10 seconds after \"Pause here to answer.\" (drill-2 (Chemistry; countdown, 10 seconds))",
        "explain",
        "Board clears. Question card with badge \"Chemistry\" and tag \"HSC-style question, written for HSCScience\". Card text: \"The following equilibrium is established in a sealed flask at room temperature.\" \"N2O4(g) (colourless) ⇌ 2NO2(g) (brown)    ΔH = +57 kJ mol-1\" \"The flask is placed in ice water.\" \"With reference to Le Chatelier's principle, predict and explain the change in the colour of the gas mixture.\" \"(3 marks)\" A coded sealed flask with a mid-brown tint sits at the right (C3 coded NO2 tint; no plate), beside a coded ice-water trough outline. Empty answer box, counter \"0 / 3\". Countdown ring 10 seconds with \"Pause here to answer.\" Strip dims. Nothing answer-bearing: the flask does not change colour.",
        [
            "HandText write-on",
            "NumberTicker",
            "Countdown ring"
        ],
        "10 second answer-free countdown after \"Pause here to answer.\"; the card stays on screen"
    ],
    "feedback-2": [
        "new",
        "On \"two verbs\" the highlighter swipes \"predict\" and \"explain\" separately; each gets a small number tag, \"job 1\" and \"job 2\".",
        "Drill feedback (feedback-2): the reading routine applied to the card, the model answer built point by point with margin ticks, and one crossed habit (about 25 to 35 seconds, as allowed for this series).",
        "two verbs / paler / Le Chatelier's principle / gives out heat",
        "On the spoken cues: Teal brackets on \"With reference to Le Chatelier's principle\". Underline on \"ice water\". A ring on \"ΔH = +57\". Lines write and tick: \"Prediction: the mixture becomes paler (less brown).\" (1 / 3) \"By Le Chatelier's principle, the system partially counteracts the decrease in temperature by favouring the exothermic reverse reaction (ΔH is positive for the forward reaction).\" (2 / 3) \"So NO2 (brown) is converted to N2O4",
        "explain",
        "On \"two verbs\" the highlighter swipes \"predict\" and \"explain\" separately; each gets a small number tag, \"job 1\" and \"job 2\". Teal brackets on \"With reference to Le Chatelier's principle\". Underline on \"ice water\". A ring on \"ΔH = +57\". Lines write and tick: \"Prediction: the mixture becomes paler (less brown).\" (1 / 3) \"By Le Chatelier's principle, the system partially counteracts the decrease in temperature by favouring the exothermic reverse reaction (ΔH is positive for the forward reaction).\" (2 / 3) \"So NO2 (brown) is converted to N2O4 (colourless): [NO2] decreases.\" (3 / 3) The coded flask fades to a paler tint on \"colourless\". A grey tag beside the brackets: \"worked example: collision theory asked; here: Le Chatelier asked\". On \"stopping\" a chip \"It goes paler.\" takes a red scribble cross. Caption \"job 1 only\". Hold about 1 second. Hold about 1 second.",
        [
            "HandText write-on",
            "Mark cross",
            "ScribbleCircle",
            "chip pop",
            "tick",
            "Mark underline",
            "Mark highlight",
            "DrawPath"
        ],
        "Hold about 1 second"
    ],
    "decision-rule": [
        "new",
        "The routine card returns full size, all four rows lit, plus the after-writing row.",
        "Decision-rule: So before you write anything: do what, how much, about what, using what.",
        "Next / explain",
        "On the spoken cues: On \"not the one next to it\" the hook's two-card image returns small, and the half-hidden card is crossed. On \"Next\" a chip slides in: \"Next: identify, describe, explain\". The three verbs are in highlighter.",
        "explain",
        "The routine card returns full size, all four rows lit, plus the after-writing row. On \"not the one next to it\" the hook's two-card image returns small, and the half-hidden card is crossed. On \"Next\" a chip slides in: \"Next: identify, describe, explain\". The three verbs are in highlighter. Hold about 2 seconds. Hold about 2 seconds.",
        [
            "Mark cross",
            "Enter slide",
            "chip pop",
            "Mark highlight"
        ],
        "Hold about 2 seconds"
    ],
    "key-notes": [
        "new",
        "Key notes card with the numbered notes, the memory aid in large writing and its condition tag",
        "Essentials to copy into books",
        "key notes",
        "Notes appear then stay still for copying",
        "hold",
        "The notes and the memory aid appear and lock",
        [
            "Enter reveals"
        ],
        "Quiet copy hold of about 50 seconds with pause invitation"
    ]
}

SKILLS02_ROWS = {
    "hook": [
        "new",
        "A coded bar chart builds, horizontal, one bar per key word, from `verb-frequency.md`: explain 57, calculate 24, justify 23, describe 18, outline 18, identify 16, evaluate 11.",
        "Hook: In the last five years of HSC Chemistry and Biology papers, one key word came up in the written section more than any other: explain.",
        "explain / two to four marks / what / why",
        "On the spoken cues: Grey tag: \"NESA glossary key words only; HSC Chemistry and Biology papers, Section II, 2021 to 2025, counted by question part\". On \"explain\" its bar grows last and rings amber. On \"more than twice\" a bracket shows 57 against 24. On \"two to four marks\" the explain bar splits into mark-value segments (2: 13, 3: 20, 4: 16, 5: 5, 7: 3), and the 2 to 4 block brightens. Tag \"49 of 57\". On \"what\" and \"why\" two chips write",
        "explain",
        "A coded bar chart builds, horizontal, one bar per key word, from `verb-frequency.md`: explain 57, calculate 24, justify 23, describe 18, outline 18, identify 16, evaluate 11. Grey tag: \"NESA glossary key words only; HSC Chemistry and Biology papers, Section II, 2021 to 2025, counted by question part\". On \"explain\" its bar grows last and rings amber. On \"more than twice\" a bracket shows 57 against 24. On \"two to four marks\" the explain bar splits into mark-value segments (2: 13, 3: 20, 4: 16, 5: 5, 7: 3), and the 2 to 4 block brightens. Tag \"49 of 57\". On \"what\" and \"why\" two chips write side by side: \"what happens\" (grey) and \"why it happens\" (amber). Tag \"NESA marking feedback: every year, 2020 to 2025\". The heading writes on: \"Identify, describe, explain\". Hold about 1 second. Hold about 1 second.",
        [
            "HandText write-on",
            "ScribbleCircle",
            "chip pop",
            "DrawPath",
            "bar fill"
        ],
        "Hold about 1 second"
    ],
    "three-verbs": [
        "new",
        "The verb ladder builds bottom to top, each rung on its cue with its depth icon: \"identify: recognise and name\" (one word chip); \"describe: give features or characteristics\" (three short feature lines); \"explain: show cause and effect, how or why\" (cause box, \"so\" arrow, effect box).",
        "Three-verbs: Here's what NESA's glossary says, in short.",
        "Identify / Describe / Explain / outline / in its question",
        "On the spoken cues: Grey tag on the ladder: \"NESA glossary, paraphrased\". On \"outline\" a small side rung attaches beside describe: \"outline: main features, in general terms\". On \"in its question\" the ladder slides left and a blank question card slides in at the right.",
        "explain",
        "The verb ladder builds bottom to top, each rung on its cue with its depth icon: \"identify: recognise and name\" (one word chip); \"describe: give features or characteristics\" (three short feature lines); \"explain: show cause and effect, how or why\" (cause box, \"so\" arrow, effect box). Grey tag on the ladder: \"NESA glossary, paraphrased\". On \"outline\" a small side rung attaches beside describe: \"outline: main features, in general terms\". On \"in its question\" the ladder slides left and a blank question card slides in at the right. Hold about 1 second. Hold about 1 second.",
        [
            "Enter slide",
            "chip pop",
            "DrawPath"
        ],
        "Hold about 1 second"
    ],
    "question-card": [
        "adjust",
        "The question card writes on.",
        "Question-card: Here's an HSC-style question.",
        "X chromosome / red / white",
        "On the spoken cues: Badge \"Biology\". Tag \"HSC-style question, written for HSCScience\". Grey chip \"illustrative numbers\". Card text: \"In fruit flies (Drosophila), the gene for eye colour is on the X chromosome. A white-eyed female was crossed with a red-eyed male.\" A small table: \"Offspring | red eyes | white eyes\"; \"females | 52 | 0\"; \"males | 0 | 48\". \"(a) Identify which eye-colour allele is dominant. (1 mark)\" \"(b) Describe the",
        "explain",
        "The question card writes on. Badge \"Biology\". Tag \"HSC-style question, written for HSCScience\". Grey chip \"illustrative numbers\". Card text: \"In fruit flies (Drosophila), the gene for eye colour is on the X chromosome. A white-eyed female was crossed with a red-eyed male.\" A small table: \"Offspring | red eyes | white eyes\"; \"females | 52 | 0\"; \"males | 0 | 48\". \"(a) Identify which eye-colour allele is dominant. (1 mark)\" \"(b) Describe the results of this cross. (2 marks)\" \"(c) Explain why all the male offspring have white eyes but all the female offspring have red eyes. (3 marks)\" Plates at the right: `m5x-fly-white-eye-v1.png` tagged \"female, white eyes\" and `m5x-fly-red-eye-v1.png` tagged \"male, red eyes\" (word tags; no sex symbols, as B10). Below them, small offspring rows: red-eyed fly icons tagged \"females\" and white-eyed fly icons tagged \"males\". On \"identify\", \"describe\" and \"explain\" the highlighter swipes each verb in turn. The three mark values get small badges (1, 2, 3). On \"Chemistry\" a grey tag: \"Chemistry students: watch the shape of each answer\". Hold about 1 second. Hold about 1 second.",
        [
            "HandText write-on",
            "Mark cross",
            "chip pop",
            "Mark highlight",
            "table build",
            "Plate"
        ],
        "Hold about 1 second"
    ],
    "identify": [
        "new",
        "Part (a) lifts forward; parts (b) and (c) dim.",
        "Identify: Part a says identify, for one mark.",
        "identify / red / two",
        "On the spoken cues: A one-line answer box draws (two ruled lines). It reads \"The red allele is dominant.\" with a tick, and the counter goes \"1 / 1\". On \"paragraph\" a ghost paragraph fills the box and overflows. A grey tag writes \"not asked for: costs time\" and the ghost fades. On \"two\" a grey tag writes: \"identify (2 marks): check whether two things are asked for\". Small grey note: \"in 2021 to 2025, identify was worth 1 mark 6 times",
        "explain",
        "Part (a) lifts forward; parts (b) and (c) dim. A one-line answer box draws (two ruled lines). It reads \"The red allele is dominant.\" with a tick, and the counter goes \"1 / 1\". On \"paragraph\" a ghost paragraph fills the box and overflows. A grey tag writes \"not asked for: costs time\" and the ghost fades. On \"two\" a grey tag writes: \"identify (2 marks): check whether two things are asked for\". Small grey note: \"in 2021 to 2025, identify was worth 1 mark 6 times and 2 marks 7 times\". The ladder's identify rung lights.",
        [
            "HandText write-on",
            "tick",
            "DrawPath",
            "NumberTicker"
        ],
        "Settle about 1 second"
    ],
    "describe": [
        "new",
        "Part (b) forward, the others dimmed.",
        "Describe: Part b says describe, for two marks.",
        "describe / red / white",
        "On the spoken cues: Four-line answer box, counter \"0 / 2\". Line 1: \"All 52 female offspring had red eyes (none white).\" A pen arrow runs from the table's 52 to the line. Tick, \"1 / 2\". Line 2: \"All 48 male offspring had white eyes (none red): each daughter matched her father, each son his mother.\" A pen arrow runs from 48. Tick, \"2 / 2\". On \"father's eye colour\" thin lines link the red-eyed male plate to the daughter icons and the",
        "explain",
        "Part (b) forward, the others dimmed. Four-line answer box, counter \"0 / 2\". Line 1: \"All 52 female offspring had red eyes (none white).\" A pen arrow runs from the table's 52 to the line. Tick, \"1 / 2\". Line 2: \"All 48 male offspring had white eyes (none red): each daughter matched her father, each son his mother.\" A pen arrow runs from 48. Tick, \"2 / 2\". On \"father's eye colour\" thin lines link the red-eyed male plate to the daughter icons and the white-eyed female plate to the son icons. On \"there's no because\" a dashed empty slot labelled \"because ...?\" appears after line 2. A grey tag: \"describe: what, not why\". The describe rung lights.",
        [
            "tick",
            "DrawPath",
            "table build",
            "NumberTicker"
        ],
        "Settle about 1 second"
    ],
    "explain-setup": [
        "new",
        "Part (c) forward.",
        "Explain-setup: Part c says explain, for three marks, and it asks why the males and females differ.",
        "explain / why / all white / all red",
        "On the spoken cues: The s01 annotation layer runs: the highlighter on \"Explain\"; the badge on \"(3 marks)\"; underlines on \"all the male offspring have white eyes\" and \"all the female offspring have red eyes\". On \"why\" a tag writes \"why: needs causes\". Eight-line answer box, counter \"0 / 3\", three dotted slots. On \"accounts for both\" two target chips sit in the margin: \"males: all white\" and \"females: all red\". The routine strip's fourth",
        "explain",
        "Part (c) forward. The s01 annotation layer runs: the highlighter on \"Explain\"; the badge on \"(3 marks)\"; underlines on \"all the male offspring have white eyes\" and \"all the female offspring have red eyes\". On \"why\" a tag writes \"why: needs causes\". Eight-line answer box, counter \"0 / 3\", three dotted slots. On \"accounts for both\" two target chips sit in the margin: \"males: all white\" and \"females: all red\". The routine strip's fourth row (\"Using what?\") shows a small grey \"none here\" tag.",
        [
            "HandText write-on",
            "chip pop",
            "Mark underline",
            "Mark highlight",
            "NumberTicker"
        ],
        "Settle about 1 second"
    ],
    "explain-build": [
        "new",
        "A coded inset beside the box (B10 `SexChrom` chips): mother \"X^r X^r\", father \"X^R Y\".",
        "Explain-build: Start from the cause.",
        "no copy / mother / father's",
        "On the spoken cues: Line 1: \"The eye-colour gene is on the X chromosome; the Y chromosome carries no allele for it.\" On \"no copy\" the Y chip shows a dashed empty slot. Tick, \"1 / 3\". Line 2: \"Sons get their only X from their mother (X^r X^r), so every son is X^r Y; with no second allele to mask it, the recessive white allele is expressed: white eyes.\" On \"mother\" an X^r chip slides from the mother to a son outline that is paired with",
        "explain",
        "A coded inset beside the box (B10 `SexChrom` chips): mother \"X^r X^r\", father \"X^R Y\". Line 1: \"The eye-colour gene is on the X chromosome; the Y chromosome carries no allele for it.\" On \"no copy\" the Y chip shows a dashed empty slot. Tick, \"1 / 3\". Line 2: \"Sons get their only X from their mother (X^r X^r), so every son is X^r Y; with no second allele to mask it, the recessive white allele is expressed: white eyes.\" On \"mother\" an X^r chip slides from the mother to a son outline that is paired with the father's Y. Tick, \"2 / 3\". The \"males: all white\" target ticks. Line 3: \"Daughters receive their father's X, carrying the dominant red allele (X^R), so every daughter is X^R X^r and has red eyes.\" On \"father's\" the X^R chip slides from the father to a daughter outline, next to an X^r from the mother. Tick, \"3 / 3\". The \"females: all red\" target ticks. On \"what causes what\" the cause-effect chain overlay draws: in each line the cause clause boxes in pale blue, an arrow runs to the effect clause, and \"so\" underlines amber. The explain rung lights. Hold about 2 seconds. Hold about 2 seconds.",
        [
            "Enter slide",
            "chip pop",
            "tick",
            "Mark underline",
            "DrawPath"
        ],
        "Hold about 2 seconds"
    ],
    "weak-vs-strong": [
        "new",
        "The strong box shrinks right as \"Answer B\", keeping \"3 / 3\".",
        "Weak-vs-strong: Now here's a weaker answer.",
        "repeats part b / one / described / how",
        "On the spoken cues: The weak answer writes at the left as \"Answer A\". On \"repeats part b\" its first clause links by a dashed line to the part (b) answer, which reappears small, with the tag \"already said in (b)\". On \"never says how it works\" two empty dashed slots appear under Answer A: \"where does each X come from?\" and \"why are daughters red?\". On \"one\" one tick lands by \"males have only one X\". Counter \"1 / 3\". A red lost-marks tag:",
        "explain",
        "The strong box shrinks right as \"Answer B\", keeping \"3 / 3\". The weak answer writes at the left as \"Answer A\". On \"repeats part b\" its first clause links by a dashed line to the part (b) answer, which reappears small, with the tag \"already said in (b)\". On \"never says how it works\" two empty dashed slots appear under Answer A: \"where does each X come from?\" and \"why are daughters red?\". On \"one\" one tick lands by \"males have only one X\". Counter \"1 / 3\". A red lost-marks tag: \"-2: never says where each X comes from, for sons or daughters\". Grey label \"HSCScience marking guide (illustrative)\". On \"described\" the ladder flashes the describe rung, then the explain rung, with a red arrow \"asked for this\". On \"Notice it even says because\" the word \"because\" in Answer A rings amber. On \"how\" a chip \"because ≠ explained\" writes beside it, and an arrow points to the empty slots. Hold about 2 seconds. Hold about 2 seconds.",
        [
            "HandText write-on",
            "ScribbleCircle",
            "chip pop",
            "tick",
            "DrawPath",
            "NumberTicker"
        ],
        "Hold about 2 seconds"
    ],
    "chem-ladder": [
        "adjust",
        "The fly card slides away.",
        "Chem-ladder (the same three verbs in Chemistry): The same ladder works in Chemistry.",
        "deeper red / more often / verb",
        "On the spoken cues: The s01 iron tube plates return (`c3-iron-tube-start-v1.png` crossfading to `c3-iron-tube-deep-v1.png`), with the equation strip \"Fe3+ (pale yellow) + SCN- ⇌ FeSCN2+ (red)\", a small chip \"crystals of Fe(NO3)3 added\" and the grey tag \"s01\". The verb ladder sits beside them. Each rung fills on its cue with a one-line answer chip: identify: \"deeper red\" (one word chip; on \"deeper red\" the tube crossfades); describe:",
        "explain",
        "The fly card slides away. The s01 iron tube plates return (`c3-iron-tube-start-v1.png` crossfading to `c3-iron-tube-deep-v1.png`), with the equation strip \"Fe3+ (pale yellow) + SCN- ⇌ FeSCN2+ (red)\", a small chip \"crystals of Fe(NO3)3 added\" and the grey tag \"s01\". The verb ladder sits beside them. Each rung fills on its cue with a one-line answer chip: identify: \"deeper red\" (one word chip; on \"deeper red\" the tube crossfades); describe: \"The pale red solution turns a deeper red as the crystals dissolve.\" (feature line, no link words); explain: \"More Fe3+, so Fe3+ and SCN- collide more often, so the forward rate rises above the reverse rate, so more FeSCN2+ (red) forms.\" with the cause-chain overlay and \"so\" underlined amber. On \"verb\" the three highlighted verbs pulse together. Tag: \"same content, three different jobs\". Hold about 1 second. Hold about 1 second.",
        [
            "Enter slide",
            "Plate crossfade",
            "chip pop",
            "Mark underline",
            "Plate"
        ],
        "Hold about 1 second"
    ],
    "because-test": [
        "new",
        "A test card writes: \"Does this sentence say what causes what?\"",
        "Because-test: So here's a quick test.",
        "what causes what / effect / chain",
        "On the spoken cues: Two chip rows beneath it, recalled from scene 9 (no new content): \"The pale red solution turns a deeper red as the crystals dissolve.\" with a grey \"describes\" tag; \"... so more FeSCN2+ (red) forms.\" with \"so\" underlined amber and the tag \"explains\". On \"effect\" a two-step bar draws: \"outlines the campaign's features: 2\" then \"+ explains its effect: 3\". Grey tag \"a NESA Biology marking guideline, 2024\". The test card",
        "explain",
        "A test card writes: \"Does this sentence say what causes what?\" Two chip rows beneath it, recalled from scene 9 (no new content): \"The pale red solution turns a deeper red as the crystals dissolve.\" with a grey \"describes\" tag; \"... so more FeSCN2+ (red) forms.\" with \"so\" underlined amber and the tag \"explains\". On \"effect\" a two-step bar draws: \"outlines the campaign's features: 2\" then \"+ explains its effect: 3\". Grey tag \"a NESA Biology marking guideline, 2024\". The test card and chip rows dim while the bar is live, so at most three bright text items show. On \"two marks to seven\" the hook's explain bar returns small with its 2 to 7 segments. On \"chain\" a three-link chain extends to five links, against a list of five loose chips that stays unticked. Memory aid writes large and handwritten: \"Describe says what. Explain says how one thing causes the next.\" Hold about 2 seconds. Hold about 2 seconds.",
        [
            "HandText write-on",
            "chip pop",
            "Mark underline",
            "DrawPath",
            "bar fill"
        ],
        "Hold about 2 seconds"
    ],
    "drill-1": [
        "adjust",
        "Board clears.",
        "HSC-style training question (drill-1 (Chemistry; countdown, 10 seconds)) with every given and demand on screen, a 10 second countdown and no answer cues.",
        "Your turn. Do the one in your subject,",
        "The question card builds with every given visible and stays on screen; no answer cues appear; the countdown ring runs for 10 seconds after \"Pause here to answer.\" (drill-1 (Chemistry; countdown, 10 seconds))",
        "explain",
        "Board clears. Card: badge \"Chemistry\", tag \"HSC-style question, written for HSCScience\". Card text: \"A sealed bottle of soda water contains the equilibrium CO2(g) ⇌ CO2(aq).\" \"When the cap is removed, bubbles form in the drink.\" \"Explain this observation.\" \"(3 marks)\" Plates: `c1-sparkling-bottle-sealed-v1.png` beside `c1-sparkling-bottle-open-v1.png` (C1's aligned pair). Empty answer box, counter \"0 / 3\". No annotations. Countdown ring 10 seconds with \"Pause here to answer.\" Strip dims. Nothing answer-bearing: no rate bars, no arrows.",
        [
            "HandText write-on",
            "DrawPath",
            "NumberTicker",
            "bar fill",
            "Countdown ring",
            "Plate"
        ],
        "10 second answer-free countdown after \"Pause here to answer.\"; the card stays on screen"
    ],
    "feedback-1": [
        "new",
        "Annotations land fast: highlighter on \"Explain\", badge on \"(3 marks)\", underlines on \"cap is removed\" and \"bubbles form\", and a ring on the equation.",
        "Drill feedback (feedback-1): the reading routine applied to the card, the model answer built point by point with margin ticks, and one crossed habit (about 25 to 35 seconds, as allowed for this series).",
        "escape / falls / out of solution",
        "On the spoken cues: Lines write and tick: \"Removing the cap lets CO2(g) escape, so the concentration of CO2 gas above the drink falls.\" (1 / 3) \"Fewer CO2 molecules dissolve, so the forward (dissolving) rate decreases, while the reverse rate is unchanged at first.\" (2 / 3) \"The reverse reaction is now faster, so CO2(aq) leaves solution as gas, forming bubbles.\" (3 / 3) Two coded rate bars (C1 style, no values): dissolving shrinks on",
        "explain",
        "Annotations land fast: highlighter on \"Explain\", badge on \"(3 marks)\", underlines on \"cap is removed\" and \"bubbles form\", and a ring on the equation. Lines write and tick: \"Removing the cap lets CO2(g) escape, so the concentration of CO2 gas above the drink falls.\" (1 / 3) \"Fewer CO2 molecules dissolve, so the forward (dissolving) rate decreases, while the reverse rate is unchanged at first.\" (2 / 3) \"The reverse reaction is now faster, so CO2(aq) leaves solution as gas, forming bubbles.\" (3 / 3) Two coded rate bars (C1 style, no values): dissolving shrinks on \"falls\", and leaving stays. The chain overlay links the three lines. On \"describes the bubbles\" a chip \"Bubbles form because gas comes out of the drink.\" takes a red scribble cross. Caption \"what happens, not why\". On \"A linked Le Chatelier answer works too\" a grey tag writes on: \"also full value: less CO2(g), so the equilibrium shifts left, CO2 leaves solution\". Hold about 1 second. Hold about 1 second.",
        [
            "HandText write-on",
            "Mark cross",
            "ScribbleCircle",
            "chip pop",
            "tick",
            "Mark underline",
            "Mark highlight",
            "bar fill"
        ],
        "Hold about 1 second"
    ],
    "drill-2": [
        "new",
        "Board clears.",
        "HSC-style training question (drill-2 (Biology; countdown, 10 seconds)) with every given and demand on screen, a 10 second countdown and no answer cues.",
        "Now Biology. When a DNA molecule is copied,",
        "The question card builds with every given visible and stays on screen; no answer cues appear; the countdown ring runs for 10 seconds after \"Pause here to answer.\" (drill-2 (Biology; countdown, 10 seconds))",
        "explain",
        "Board clears. Card: badge \"Biology\", tag \"HSC-style question, written for HSCScience\". Card text: \"DNA replication produces two DNA molecules that are identical to each other.\" \"Assuming no copying errors, explain why the two molecules are identical.\" \"(2 marks)\" A short coded B4 ladder (five base pairs, original strands blue) sits at the right, unzipped at the top only. No new strands are drawn. Answer box, counter \"0 / 2\". Countdown 10 seconds with \"Pause here to answer.\" Strip dims. Nothing answer-bearing.",
        [
            "HandText write-on",
            "NumberTicker",
            "Countdown ring"
        ],
        "10 second answer-free countdown after \"Pause here to answer.\"; the card stays on screen"
    ],
    "feedback-2": [
        "new",
        "Annotations land fast: highlighter on \"explain\", badge on \"(2 marks)\", underline on \"identical\", teal brackets on \"Assuming no copying errors\" (a condition, kept on the card).",
        "Drill feedback (feedback-2): the reading routine applied to the card, the model answer built point by point with margin ticks, and one crossed habit (about 25 to 35 seconds, as allowed for this series).",
        "each original strand / complementary base pairing",
        "On the spoken cues: Line 1: \"The two strands separate and each original strand acts as a template for a new strand.\" The B4 ladder unzips fully. Tick, \"1 / 2\". Line 2: \"Free nucleotides pair by complementary base pairing (A with T, C with G), so each new strand has the same sequence as the template's old partner strand, and both molecules have the original base sequence.\" Green new tiles dock, and the two finished molecules light up",
        "explain",
        "Annotations land fast: highlighter on \"explain\", badge on \"(2 marks)\", underline on \"identical\", teal brackets on \"Assuming no copying errors\" (a condition, kept on the card). Line 1: \"The two strands separate and each original strand acts as a template for a new strand.\" The B4 ladder unzips fully. Tick, \"1 / 2\". Line 2: \"Free nucleotides pair by complementary base pairing (A with T, C with G), so each new strand has the same sequence as the template's old partner strand, and both molecules have the original base sequence.\" Green new tiles dock, and the two finished molecules light up identical side by side. Tick, \"2 / 2\". The chain overlay links the lines. On \"one old strand and one new strand\" a chip with that answer takes a red scribble cross. Caption \"describes the result: why do the sequences match?\". Hold about 1 second. Hold about 1 second.",
        [
            "Mark cross",
            "chip pop",
            "tick",
            "Mark underline",
            "Mark highlight",
            "DrawPath"
        ],
        "Hold about 1 second"
    ],
    "decision-rule": [
        "new",
        "The verb ladder returns full size as the decision board, each rung lighting on its cue: \"identify → name the item or items the question asks for; use the marks to check the scope\"; \"describe → features, with values from the data\" (with a small side rung: \"outline → main features, briefly\"); \"explain → how each cause leads to its effect; a because alone is not enough\".",
        "Decision-rule: So, when you see the verb: identify, name what the question asks for, and use the marks to check how many.",
        "identify / Describe / Outline / Explain / Next / pairs",
        "On the spoken cues: On \"Next\" a chip slides in: \"Next: compare, contrast, distinguish\". Two small aligned columns are joined by pair lines.",
        "explain",
        "The verb ladder returns full size as the decision board, each rung lighting on its cue: \"identify → name the item or items the question asks for; use the marks to check the scope\"; \"describe → features, with values from the data\" (with a small side rung: \"outline → main features, briefly\"); \"explain → how each cause leads to its effect; a because alone is not enough\". On \"Next\" a chip slides in: \"Next: compare, contrast, distinguish\". Two small aligned columns are joined by pair lines. Hold about 2 seconds. Hold about 2 seconds.",
        [
            "Enter slide",
            "chip pop"
        ],
        "Hold about 2 seconds"
    ],
    "key-notes": [
        "new",
        "Key notes card with the numbered notes, the memory aid in large writing and its condition tag",
        "Essentials to copy into books",
        "key notes",
        "Notes appear then stay still for copying",
        "hold",
        "The notes and the memory aid appear and lock",
        [
            "Enter reveals"
        ],
        "Quiet copy hold of about 50 seconds with pause invitation"
    ]
}

# END generated rows: m6c03-m6c08, skills01, skills02


# BEGIN generated rows: m6c09-m6c10
M6C09_ROWS = {
    "hook": [
        "adjust",
        "two `m6-foam-cup-calorimeter-v1.png` plates side by side, coded labels \"HCl + NaOH\" and \"ethanoic acid + NaOH\", both \"1.00 mol/L, 50.0 mL + 50.0 mL\".",
        "Hook (weak acid, less heat?): Here's a prediction to make.",
        "minus fifty seven / ethanoic acid / minus fifty six / hydrofluoric acid / minus sixty eight",
        "On the spoken cues: On \"minus fifty seven\" the first readout chip counts 21.0 to 27.8 °C (\"ΔT 6.8 °C\") and a bar grows down from zero on a small ΔH axis at the right: \"HCl: −57 kJ/mol\", with a dashed reference line at −57 that stays. On \"ethanoic acid\" a grey prediction bar, much shorter, sketches in with a \"?\" (tag \"prediction\"). On \"minus fifty six\" the second readout counts to 27.7 °C (\"ΔT 6.7 °C\"), the grey bar is crossed and the",
        "explain",
        "two `m6-foam-cup-calorimeter-v1.png` plates side by side, coded labels \"HCl + NaOH\" and \"ethanoic acid + NaOH\", both \"1.00 mol/L, 50.0 mL + 50.0 mL\". On \"minus fifty seven\" the first readout chip counts 21.0 to 27.8 °C (\"ΔT 6.8 °C\") and a bar grows down from zero on a small ΔH axis at the right: \"HCl: −57 kJ/mol\", with a dashed reference line at −57 that stays. On \"ethanoic acid\" a grey prediction bar, much shorter, sketches in with a \"?\" (tag \"prediction\"). On \"minus fifty six\" the second readout counts to 27.7 °C (\"ΔT 6.7 °C\"), the grey bar is crossed and the real bar grows almost to the line: \"ethanoic acid: about −56\". The cups dim, with their labels and readouts. On \"hydrofluoric acid\" a third bar, with no cup, grows past the line: \"HF: about −68\", with a small grey tag \"careful lab data; never used in school\" that dims when the sentence ends. Heading writes: \"Weak acid. Less heat?\" with \"Less heat?\" crossed. Bright at the end: the heading and the bar chart (one item; the bar labels stay bright, the axis grey). Hold about 1 second. Hold about 1 second.",
        [
            "HandText write-on",
            "Mark cross",
            "chip pop",
            "NumberTicker",
            "bar fill",
            "Plate"
        ],
        "Hold about 1 second"
    ],
    "same-different": [
        "adjust",
        "the board clears to two particle lenses side by side.",
        "What is the same, what is different: Start with what you know.",
        "hydrogen ion joining a hydroxide ion / whole",
        "On the spoken cues: Left lens \"HCl(aq)\": teal hydronium tokens and grey chloride, no molecules. On \"hydrogen ion joining a hydroxide ion\" a violet OH⁻ drifts in and meets a teal token, snapping into a pale blue water with a short orange ripple; the strip writes \"H⁺(aq) + OH⁻(aq) → H₂O(l)\" with a small \"about −57 kJ/mol\" tag (dims after its sentence). Right lens \"ethanoic acid(aq)\", with `m6-vinegar-bottle-v1.png` small beside it (coded",
        "explain",
        "the board clears to two particle lenses side by side. Left lens \"HCl(aq)\": teal hydronium tokens and grey chloride, no molecules. On \"hydrogen ion joining a hydroxide ion\" a violet OH⁻ drifts in and meets a teal token, snapping into a pale blue water with a short orange ripple; the strip writes \"H⁺(aq) + OH⁻(aq) → H₂O(l)\" with a small \"about −57 kJ/mol\" tag (dims after its sentence). Right lens \"ethanoic acid(aq)\", with `m6-vinegar-bottle-v1.png` small beside it (coded label \"ethanoic (acetic) acid\"): mostly amber-outlined whole molecules, one teal token among them. On \"whole\" a pen ring circles the whole molecules, tag \"protons still attached\". Bright at the end: the strip and the two lenses. Hold about 1 second. Hold about 1 second.",
        [
            "HandText write-on",
            "ScribbleCircle",
            "token flight",
            "Cam lens zoom",
            "Plate"
        ],
        "Hold about 1 second"
    ],
    "reacts-completely": [
        "new",
        "the right lens enlarges to fill the centre; the left lens leaves.",
        "The weak acid still reacts completely: So what happens when hydroxide arrives?",
        "ionise to replace them / every molecule has reacted / one extra step",
        "On the spoken cues: Violet OH⁻ tokens stream in from the left edge. Each meets a teal hydronium and forms water with an orange ripple; on \"ionise to replace them\" an amber molecule beside the gap hands a teal token to a water molecule (C01 hop), with a small two-way arrow \"⇌ shifts right\" pulsing under the lens. A counter at the lens edge, \"whole molecules left\", falls steadily; on \"every molecule has reacted\" it reaches 0, the \"⇌",
        "explain",
        "the right lens enlarges to fill the centre; the left lens leaves. Violet OH⁻ tokens stream in from the left edge. Each meets a teal hydronium and forms water with an orange ripple; on \"ionise to replace them\" an amber molecule beside the gap hands a teal token to a water molecule (C01 hop), with a small two-way arrow \"⇌ shifts right\" pulsing under the lens. A counter at the lens edge, \"whole molecules left\", falls steadily; on \"every molecule has reacted\" it reaches 0, the \"⇌ shifts right\" arrow fades, and the lens holds only grey-violet ethanoate and pale blue water. The strip writes \"CH₃COOH(aq) + OH⁻(aq) → CH₃COO⁻(aq) + H₂O(l)\". On \"one extra step\" a chip \"weak acid reacts incompletely\" fades in and is crossed (caption \"it all reacts: one extra step first\"). Bright at the end: the strip, the empty counter and the crossed chip. Hold about 1 second. Hold about 1 second.",
        [
            "HandText write-on",
            "Mark cross",
            "chip pop",
            "token flight",
            "Cam lens zoom",
            "DrawPath",
            "NumberTicker"
        ],
        "Hold about 1 second"
    ],
    "two-steps": [
        "new",
        "the board clears.",
        "Two steps, one total: We can count the energy in two steps, using Hess's law from Year 11: the total doesn't depend on the route.",
        "ionises / minus fifty seven / minus fifty seven, plus the ionisation step / measured value, take away minus fifty seven",
        "On the spoken cues: The enthalpy staircase draws centre: a top level \"HA(aq) + OH⁻(aq)\". On \"ionises\" a step 1 arrow draws from it (grey, direction not yet set, a \"?\" on it) to a level \"H⁺(aq) + A⁻(aq) + OH⁻(aq)\", labelled \"step 1: ionisation\". On \"minus fifty seven\" a long blue down arrow draws to \"A⁻(aq) + H₂O(l)\", labelled \"step 2: −57 kJ/mol (same as a strong acid)\". On \"plus the ionisation step\" a dashed net arrow joins the first",
        "explain",
        "the board clears. The enthalpy staircase draws centre: a top level \"HA(aq) + OH⁻(aq)\". On \"ionises\" a step 1 arrow draws from it (grey, direction not yet set, a \"?\" on it) to a level \"H⁺(aq) + A⁻(aq) + OH⁻(aq)\", labelled \"step 1: ionisation\". On \"minus fifty seven\" a long blue down arrow draws to \"A⁻(aq) + H₂O(l)\", labelled \"step 2: −57 kJ/mol (same as a strong acid)\". On \"plus the ionisation step\" a dashed net arrow joins the first level to the last and the line writes under the staircase: \"ΔH(neutralisation) = ΔH(step 1) + (−57) kJ/mol\", with a small grey tag \"Hess's law: add the steps\" that dims. On \"measured value, take away minus fifty seven\" the \"?\" arrow pulses and a second line writes under the first, which dims: \"ΔH(step 1) = ΔH(measured) − (−57) kJ/mol\". Bright at the end: the staircase and the second line. Hold about 1 second. Hold about 1 second.",
        [
            "HandText write-on",
            "DrawPath"
        ],
        "Hold about 1 second"
    ],
    "ionising-either-way": [
        "new",
        "the staircase shrinks to the top right (dim).",
        "Why the ionising step can go either way: And step one isn't always uphill.",
        "takes energy in / surrounded by water molecules / balance",
        "On the spoken cues: The M5 C11 ledger draws centre with a small particle close-up beside it: one amber-outlined molecule; on \"takes energy in\" its proton lifts off (bond line snapping) and a red bar rises \"energy in: bond breaks\". On \"surrounded by water molecules\" pale blue water molecules turn and close round the new anion and the hydronium, and a blue bar drops \"energy out: water surrounds the ions\", with a small grey tag \"Module 5:",
        "explain",
        "the staircase shrinks to the top right (dim). The M5 C11 ledger draws centre with a small particle close-up beside it: one amber-outlined molecule; on \"takes energy in\" its proton lifts off (bond line snapping) and a red bar rises \"energy in: bond breaks\". On \"surrounded by water molecules\" pale blue water molecules turn and close round the new anion and the hydronium, and a blue bar drops \"energy out: water surrounds the ions\", with a small grey tag \"Module 5: hydration\" that dims. On \"balance\" a balance line writes between the bars: \"step 1 = in + out\", and three small chips write under it: \"+\", \"≈ 0\", \"−\". Bright at the end: the two bars and the three chips. Hold about 1 second. Hold about 1 second.",
        [
            "HandText write-on",
            "chip pop",
            "DrawPath",
            "bar fill"
        ],
        "Hold about 1 second"
    ],
    "ethanoic-zero": [
        "new",
        "the ledger's bars set to equal length (red up, blue down) on \"cancel\" and the \"≈ 0\" chip lights.",
        "Ethanoic acid: close to zero: For ethanoic acid, the two nearly cancel: the energy to pull the proton off is almost exactly repaid when water surrounds the new ions.",
        "cancel / minus fifty six / hardly tell them apart",
        "On the spoken cues: The staircase returns large: its step 1 arrow becomes a short red stub labelled \"≈ +1 (close to zero)\", step 2 \"−57\", the net arrow \"≈ −56 kJ/mol\". On \"hardly tell them apart\" the scene 1 bars return small beside it with the ethanoic acid bar pulsing next to the −57 line, and a bracket \"within foam cup error\". The ledger dims. Bright at the end: the staircase net label and the bracket.",
        "explain",
        "the ledger's bars set to equal length (red up, blue down) on \"cancel\" and the \"≈ 0\" chip lights. The staircase returns large: its step 1 arrow becomes a short red stub labelled \"≈ +1 (close to zero)\", step 2 \"−57\", the net arrow \"≈ −56 kJ/mol\". On \"hardly tell them apart\" the scene 1 bars return small beside it with the ethanoic acid bar pulsing next to the −57 line, and a bracket \"within foam cup error\". The ledger dims. Bright at the end: the staircase net label and the bracket. Hold about 1 second. Hold about 1 second.",
        [
            "chip pop",
            "DrawPath",
            "bar fill"
        ],
        "Hold about 1 second"
    ],
    "hf-more-heat": [
        "new",
        "the ledger returns: on \"small\" the close-up shows a small grey-violet F⁻ with a tight, crowded shell of water molecules (compare a larger anion outline in grey), and the blue bar grows well past the red bar.",
        "Hydrofluoric acid: more heat: Hydrofluoric acid is the surprise.",
        "small / releases / minus sixty eight / more than the heat",
        "On the spoken cues: On \"releases\" the \"−\" chip lights, the ledger and close-up dim, and the staircase's step 1 arrow flips to point down, blue, labelled \"≈ −11\"; step 2 \"−57\"; the net arrow lengthens past the dashed −57 level, \"≈ −68 kJ/mol\" (the scene 1 bar chart is not recalled here; the net arrow carries the value). On \"more than the heat\" a small chip writes under the staircase: \"HF: weak (most molecules stay whole), but step 1",
        "explain",
        "the ledger returns: on \"small\" the close-up shows a small grey-violet F⁻ with a tight, crowded shell of water molecules (compare a larger anion outline in grey), and the blue bar grows well past the red bar. On \"releases\" the \"−\" chip lights, the ledger and close-up dim, and the staircase's step 1 arrow flips to point down, blue, labelled \"≈ −11\"; step 2 \"−57\"; the net arrow lengthens past the dashed −57 level, \"≈ −68 kJ/mol\" (the scene 1 bar chart is not recalled here; the net arrow carries the value). On \"more than the heat\" a small chip writes under the staircase: \"HF: weak (most molecules stay whole), but step 1 releases heat\". Bright at the end: the staircase, the net label and the chip. Hold about 1 second. Hold about 1 second.",
        [
            "HandText write-on",
            "chip pop",
            "DrawPath",
            "bar fill"
        ],
        "Hold about 1 second"
    ],
    "weak-base-less": [
        "adjust",
        "the board clears.",
        "A weak base: less heat: Weak bases follow the same rule.",
        "minus fifty two / hydroxide / energy in / less",
        "On the spoken cues: `m5x-ammonia-bottle-v1.png` small at the left with coded label \"ammonia solution\" (the label dims after the first sentence). On \"minus fifty two\" a value chip writes: \"HCl + NH₃: about −52 kJ per mol NH₃\" (no bar chart in this scene). On \"hydroxide\" the strip writes \"NH₃(aq) + H₂O(l) ⇌ NH₄⁺(aq) + OH⁻(aq)\" with the C06 hop (a teal token moving from water to ammonia; the OH⁻ turns violet). The staircase returns with",
        "explain",
        "the board clears. `m5x-ammonia-bottle-v1.png` small at the left with coded label \"ammonia solution\" (the label dims after the first sentence). On \"minus fifty two\" a value chip writes: \"HCl + NH₃: about −52 kJ per mol NH₃\" (no bar chart in this scene). On \"hydroxide\" the strip writes \"NH₃(aq) + H₂O(l) ⇌ NH₄⁺(aq) + OH⁻(aq)\" with the C06 hop (a teal token moving from water to ammonia; the OH⁻ turns violet). The staircase returns with its levels relabelled: top \"NH₃(aq) + H₂O(l) + H⁺(aq)\", middle \"NH₄⁺(aq) + OH⁻(aq) + H⁺(aq)\", bottom \"NH₄⁺(aq) + H₂O(l)\"; the strip dims. On \"energy in\" its step 1 arrow points up, red, \"≈ +5\"; step 2 \"−57\"; net \"≈ −52 kJ/mol\", shorter than the −57 line, and the value chip merges into the net label. On \"less\" the \"+\" chip lights. Bright at the end: the staircase and its net label. Hold about 1 second. Hold about 1 second.",
        [
            "HandText write-on",
            "chip pop",
            "token flight",
            "DrawPath",
            "bar fill",
            "Plate"
        ],
        "Hold about 1 second"
    ],
    "heat-not-strength": [
        "adjust",
        "the board clears.",
        "Heat does not measure strength: So the heat doesn't tell you how strong a weak acid is.",
        "ten times stronger / minus fifty six / pH",
        "On the spoken cues: Two cards side by side: \"methanoic acid: Ka 1.8 × 10⁻⁴\" and \"ethanoic acid: Ka 1.8 × 10⁻⁵\", with a bracket \"10 × stronger\" on \"ten times stronger\". On \"minus fifty six\" a small bar inside each card grows to the same length, \"about −56\" and \"about −56\" (the bars are part of the cards). A chip \"more heat means a stronger acid\" fades in and is crossed (caption \"heat shows step 1, not strength\"). On \"pH\" the crossed",
        "explain",
        "the board clears. Two cards side by side: \"methanoic acid: Ka 1.8 × 10⁻⁴\" and \"ethanoic acid: Ka 1.8 × 10⁻⁵\", with a bracket \"10 × stronger\" on \"ten times stronger\". On \"minus fifty six\" a small bar inside each card grows to the same length, \"about −56\" and \"about −56\" (the bars are part of the cards). A chip \"more heat means a stronger acid\" fades in and is crossed (caption \"heat shows step 1, not strength\"). On \"pH\" the crossed chip dims and a small `m6-ph-meter-probe-beaker-v1.png` thumbnail appears with the tag \"strength: pH at equal concentration, or Ka (next video)\". Bright at the end: the two cards and the thumbnail tag. Hold about 1 second. Hold about 1 second.",
        [
            "Mark cross",
            "chip pop",
            "DrawPath",
            "bar fill",
            "Plate"
        ],
        "Hold about 1 second"
    ],
    "memory-aid": [
        "new",
        "the board clears.",
        "Memory aid: So here's what to remember.",
        "Same last step, different first step. / first step",
        "On the spoken cues: The aid writes large and handwritten: \"Same last step, different first step.\" Under it a small staircase thumbnail whose step 1 arrow flicks through three states (up red, flat, down blue) while step 2 stays fixed at \"−57\". On \"first step\" the line writes: \"ΔH = step 1 + (−57) kJ/mol\".",
        "explain",
        "the board clears. The aid writes large and handwritten: \"Same last step, different first step.\" Under it a small staircase thumbnail whose step 1 arrow flicks through three states (up red, flat, down blue) while step 2 stays fixed at \"−57\". On \"first step\" the line writes: \"ΔH = step 1 + (−57) kJ/mol\". Hold about 2 seconds. Hold about 2 seconds.",
        [
            "HandText write-on",
            "DrawPath"
        ],
        "Hold about 2 seconds"
    ],
    "attempt-1": [
        "adjust",
        "the board clears.",
        "Unseen transfer task (attempt 1 (countdown, 10 seconds)) with every given and demand on screen, a 10 second countdown and no answer cues.",
        "Your turn. Ethanoic acid is neutralised by sodium",
        "The question card builds with every given visible and stays on screen; no answer cues appear; the countdown ring runs for 10 seconds after \"Pause here to answer.\" (attempt 1 (countdown, 10 seconds))",
        "explain",
        "the board clears. `m6-foam-cup-calorimeter-v1.png` small at the top right. Question card, worded as printed: \"50.0 mL of 1.00 mol/L ethanoic acid is mixed with 50.0 mL of 1.00 mol/L sodium hydroxide solution in a polystyrene cup. The temperature rises by 6.7 °C. Under the same conditions, the enthalpy of neutralisation of hydrochloric acid is −57 kJ/mol. Assume the density of the mixture is 1.00 g/mL and its specific heat capacity is 4.18 J g⁻¹ °C⁻¹. (a) Calculate the enthalpy of neutralisation of ethanoic acid. (b) Calculate the enthalpy change for the ionisation of ethanoic acid, and comment on its size.\" The full question stays on screen. Countdown ring for 10 seconds with \"Pause here to answer.\" Nothing answer-bearing: no staircase, no aid, no bars.",
        [
            "bar fill",
            "Countdown ring",
            "Plate"
        ],
        "10 second answer-free countdown after \"Pause here to answer.\"; the card stays on screen"
    ],
    "feedback-1": [
        "new",
        "the question card stays and shrinks to the top.",
        "Brief feedback (feedback 1 (brief)): the answer, the key reason with the givens underlined, and one crossed classic mistake (owner rule, 16 October).",
        "two thousand eight hundred joules / minus fifty six kilojoules per mole / plus one / sign",
        "On the spoken cues: On \"two thousand eight hundred joules\" both volumes, \"1.00 g/mL\", \"4.18 J g⁻¹ °C⁻¹\" and \"6.7 °C\" are underlined and lines write: \"m = 100.0 mL × 1.00 g/mL = 100.0 g\" then \"q = 100.0 g × 4.18 J g⁻¹ °C⁻¹ × 6.7 °C = 2800.6 J\", the m line dimming. On \"minus fifty six\" \"1.00 mol/L\" and \"50.0 mL\" are underlined, \"n(H₂O) = 1.00 × 0.0500 = 0.0500 mol\" and \"ΔH = −2.8006 kJ ÷ 0.0500 mol = −56.01 → −56 kJ/mol\" write, the q",
        "explain",
        "the question card stays and shrinks to the top. On \"two thousand eight hundred joules\" both volumes, \"1.00 g/mL\", \"4.18 J g⁻¹ °C⁻¹\" and \"6.7 °C\" are underlined and lines write: \"m = 100.0 mL × 1.00 g/mL = 100.0 g\" then \"q = 100.0 g × 4.18 J g⁻¹ °C⁻¹ × 6.7 °C = 2800.6 J\", the m line dimming. On \"minus fifty six\" \"1.00 mol/L\" and \"50.0 mL\" are underlined, \"n(H₂O) = 1.00 × 0.0500 = 0.0500 mol\" and \"ΔH = −2.8006 kJ ÷ 0.0500 mol = −56.01 → −56 kJ/mol\" write, the q line dimming; the answer chip \"(a) −56 kJ/mol (2 s.f.)\" pins. On \"plus one\" \"−57 kJ/mol\" in the question is underlined and \"step 1 = −56 − (−57) = +1 kJ/mol\" writes; chip \"(b) about +1 kJ/mol: close to zero\". On \"sign\" a chip \"−57 − (−56) = −1 kJ/mol\" fades in and is crossed (caption \"measured minus water step\"). Hold about 1 second. Hold about 1 second.",
        [
            "HandText write-on",
            "Mark cross",
            "chip pop",
            "Mark underline"
        ],
        "Hold about 1 second"
    ],
    "attempt-2": [
        "new",
        "question card: \"Hydrogen cyanide, HCN, is a weak acid.",
        "Unseen transfer task (attempt 2 (countdown, 10 seconds)) with every given and demand on screen, a 10 second countdown and no answer cues.",
        "Last one. Hydrogen cyanide is a weak acid,",
        "The question card builds with every given visible and stays on screen; no answer cues appear; the countdown ring runs for 10 seconds after \"Pause here to answer.\" (attempt 2 (countdown, 10 seconds))",
        "explain",
        "question card: \"Hydrogen cyanide, HCN, is a weak acid. Its ionisation, HCN(aq) → H⁺(aq) + CN⁻(aq), absorbs about 45 kJ/mol. Using −57 kJ/mol for H⁺(aq) + OH⁻(aq) → H₂O(l), predict the enthalpy of neutralisation of hydrogen cyanide by sodium hydroxide, and explain why it differs from that of hydrochloric acid.\" The full question stays on screen. Countdown ring for 10 seconds with \"Pause here to answer.\" Nothing answer-bearing: no staircase, no bars.",
        [
            "bar fill",
            "Countdown ring"
        ],
        "10 second answer-free countdown after \"Pause here to answer.\"; the card stays on screen"
    ],
    "feedback-2": [
        "new",
        "the question card stays.",
        "Brief feedback (feedback 2 (brief)): the answer, the key reason with the givens underlined, and one crossed classic mistake (owner rule, 16 October).",
        "minus twelve / used up / released",
        "On the spoken cues: On \"minus twelve\" \"absorbs about 45 kJ/mol\" and \"−57 kJ/mol\" are underlined; a compact staircase draws: step 1 up, red, \"+45\"; step 2 down, blue, \"−57\"; net \"−12 kJ/mol\"; the answer chip \"ΔH ≈ −12 kJ/mol\" pins. On \"used up\" the red arrow pulses and a tag writes \"most of the 57 kJ goes into step 1; HCl: no step 1\". On \"released\" a chip \"−57 − 45 = −102 kJ/mol\" fades in and is crossed (caption \"absorbed energy is +\").",
        "explain",
        "the question card stays. On \"minus twelve\" \"absorbs about 45 kJ/mol\" and \"−57 kJ/mol\" are underlined; a compact staircase draws: step 1 up, red, \"+45\"; step 2 down, blue, \"−57\"; net \"−12 kJ/mol\"; the answer chip \"ΔH ≈ −12 kJ/mol\" pins. On \"used up\" the red arrow pulses and a tag writes \"most of the 57 kJ goes into step 1; HCl: no step 1\". On \"released\" a chip \"−57 − 45 = −102 kJ/mol\" fades in and is crossed (caption \"absorbed energy is +\"). Hold about 1 second. Hold about 1 second.",
        [
            "HandText write-on",
            "Mark cross",
            "chip pop",
            "Mark underline",
            "DrawPath"
        ],
        "Hold about 1 second"
    ],
    "decision-rule": [
        "adjust",
        "the question card writes, each line lighting on its words: \"1 Water step: about −57 kJ/mol.\"",
        "Decision rule and handoff: So for any weak acid or base neutralisation, start from minus fifty seven for making water, add the ionising step with its sign, whether it's a weak acid giving up protons or a weak base making hydroxide, and remember that the reaction still goes to completion.",
        "Next",
        "On the spoken cues: \"2 Add the ionisation step, with its sign (+, ≈ 0 or −).\" \"3 The weak acid or base still reacts completely.\" \"4 Heat does not rank strength: use pH or Ka.\" On \"Next\" a chip \"Next: Ka and pKa, and what they say about acid strength\" appears with a small `m6-ph-meter-probe-beaker-v1.png`.",
        "explain",
        "the question card writes, each line lighting on its words: \"1 Water step: about −57 kJ/mol.\" \"2 Add the ionisation step, with its sign (+, ≈ 0 or −).\" \"3 The weak acid or base still reacts completely.\" \"4 Heat does not rank strength: use pH or Ka.\" On \"Next\" a chip \"Next: Ka and pKa, and what they say about acid strength\" appears with a small `m6-ph-meter-probe-beaker-v1.png`. Hold about 2 seconds. Hold about 2 seconds.",
        [
            "HandText write-on",
            "chip pop",
            "Plate"
        ],
        "Hold about 2 seconds"
    ],
    "key-notes": [
        "new",
        "Key notes card with the numbered notes, the memory aid in large writing and its condition tag",
        "Essentials to copy into books",
        "key notes",
        "Notes appear then stay still for copying",
        "hold",
        "The notes and the memory aid appear and lock",
        [
            "Enter reveals"
        ],
        "Quiet copy hold of about 60 seconds with pause invitation"
    ]
}

M6C10_ROWS = {
    "hook": [
        "adjust",
        "two `m6-ph-meter-probe-beaker-v1.png` plates side by side, beakers labelled (coded) \"HX, 0.0500 mol/L\" and \"ethanoic acid, 0.500 mol/L\".",
        "Hook (the more acidic solution, the weaker acid?): Two acids, two pH readings.",
        "two point seven eight / two point five two / stronger / ten times more concentrated",
        "On the spoken cues: On \"two point seven eight\" the first amber readout counts to \"2.78\"; on \"two point five two\" the second counts to \"2.52\" and a small tag \"more acidic\" writes beside that readout (no separate pH ruler). On \"stronger\" a chip \"lower pH, so stronger acid?\" writes with a \"?\". On \"ten times more concentrated\" both concentration labels get pen rings and a bracket \"10 ×\" joins them; the chip's \"?\" turns into a pen cross",
        "explain",
        "two `m6-ph-meter-probe-beaker-v1.png` plates side by side, beakers labelled (coded) \"HX, 0.0500 mol/L\" and \"ethanoic acid, 0.500 mol/L\". On \"two point seven eight\" the first amber readout counts to \"2.78\"; on \"two point five two\" the second counts to \"2.52\" and a small tag \"more acidic\" writes beside that readout (no separate pH ruler). On \"stronger\" a chip \"lower pH, so stronger acid?\" writes with a \"?\". On \"ten times more concentrated\" both concentration labels get pen rings and a bracket \"10 ×\" joins them; the chip's \"?\" turns into a pen cross (caption \"different concentrations: pH can't compare strength\"), and the \"more acidic\" tag fades. Heading writes: \"Which acid is stronger?\" Bright at the end: the heading, the two readouts (with their concentration labels) and the crossed chip. Hold about 1 second. Hold about 1 second.",
        [
            "HandText write-on",
            "Mark cross",
            "ScribbleCircle",
            "chip pop",
            "DrawPath",
            "NumberTicker",
            "Plate"
        ],
        "Hold about 1 second"
    ],
    "ka-is-the-number": [
        "adjust",
        "the plates shrink to the top right.",
        "Ka is that number: You've met that number in Module 5: K a, the equilibrium constant for the acid ionising, hydronium times the anion, over the whole acid.",
        "K a / same concentration / one point eight times ten to the minus five / from the pH",
        "On the spoken cues: The strip writes \"HX(aq) + H₂O(l) ⇌ H₃O⁺(aq) + X⁻(aq)\" and the M5 C10 builder writes \"Ka = [H₃O⁺][X⁻] / [HX]\" with H₂O in the grey \"left out\" tray and a small grey tag \"Module 5\" (dims after its sentence). On \"same concentration\" a small tag writes under it: \"Ka: same at any concentration (fixed temperature)\"; the \"Module 5\" tag has dimmed. On \"one point eight times ten to the minus five\" `m6-vinegar-bottle-v1.png`",
        "explain",
        "the plates shrink to the top right. The strip writes \"HX(aq) + H₂O(l) ⇌ H₃O⁺(aq) + X⁻(aq)\" and the M5 C10 builder writes \"Ka = [H₃O⁺][X⁻] / [HX]\" with H₂O in the grey \"left out\" tray and a small grey tag \"Module 5\" (dims after its sentence). On \"same concentration\" a small tag writes under it: \"Ka: same at any concentration (fixed temperature)\"; the \"Module 5\" tag has dimmed. On \"one point eight times ten to the minus five\" `m6-vinegar-bottle-v1.png` appears small at the left with the chip \"ethanoic acid: Ka = 1.8 × 10⁻⁵ (25 °C)\". On \"from the pH\" a chip \"HX: Ka = ?\" writes with an arrow pointing back from the HX readout \"2.78\". Bright at the end: the Ka line, the ethanoic acid chip and the \"?\" chip. Hold about 1 second. Hold about 1 second.",
        [
            "HandText write-on",
            "chip pop",
            "DrawPath",
            "NumberTicker",
            "Plate"
        ],
        "Hold about 1 second"
    ],
    "we-hydronium": [
        "new",
        "the board clears to the three zones.",
        "Worked example: the hydronium, and strong or weak: Here's the task: find K a for H X.",
        "ten to the minus two point seven eight / one point six six times ten to the minus three / three percent / equal to its concentration",
        "On the spoken cues: Task line: \"Find Ka for HX\". Equation strip: \"HX(aq) + H₂O(l) ⇌ H₃O⁺(aq) + X⁻(aq)\". Givens card: \"HX: 0.0500 mol/L\" | \"pH = 2.78 (25 °C)\". Step chip \"Step 1 of 2: [H₃O⁺]\". On \"ten to the minus two point seven eight\" \"pH = 2.78\" is underlined, the equation strip dims, and the line \"[H₃O⁺] = 10⁻²·⁷⁸\" writes; on \"one point six six\" it completes \"= 1.66 × 10⁻³ mol/L\" with a small grey tag \"keep the digits; round at the",
        "explain",
        "the board clears to the three zones. Task line: \"Find Ka for HX\". Equation strip: \"HX(aq) + H₂O(l) ⇌ H₃O⁺(aq) + X⁻(aq)\". Givens card: \"HX: 0.0500 mol/L\" | \"pH = 2.78 (25 °C)\". Step chip \"Step 1 of 2: [H₃O⁺]\". On \"ten to the minus two point seven eight\" \"pH = 2.78\" is underlined, the equation strip dims, and the line \"[H₃O⁺] = 10⁻²·⁷⁸\" writes; on \"one point six six\" it completes \"= 1.66 × 10⁻³ mol/L\" with a small grey tag \"keep the digits; round at the end\" (dims). On \"three percent\" a short bar compares: a long bar \"c = 0.0500\" with a teal chunk \"1.66 × 10⁻³\" and the label \"1.66 × 10⁻³ ÷ 0.0500 = 3.3%\". On \"equal to its concentration\" a faint dashed full-length teal bar overlays the long bar, labelled \"strong: [H₃O⁺] = c\", then fades with its label; the label \"weak\" writes beside the short chunk. The bar and its labels fade as the result shrinks to a kept chip \"[H₃O⁺] = 1.66 × 10⁻³ mol/L\". Bright at the end: the task line, the givens card and the kept chip. Hold about 1 second. Hold about 1 second.",
        [
            "HandText write-on",
            "chip pop",
            "Mark underline",
            "bar fill"
        ],
        "Hold about 1 second"
    ],
    "we-ice-backwards": [
        "new",
        "step chip \"Step 2 of 2: Ka\".",
        "Worked example: the ICE table backwards: Now the table, but this time we know the bottom row first.",
        "one hydronium and one X minus / zero point zero four eight three / five point seven times ten to the minus five / two decimal places / nothing is approximated",
        "On the spoken cues: The C08 ICE table draws under the strip with its I and C rows faint; the E row fills first: the H₃O⁺ cell takes the kept chip value \"1.66 × 10⁻³\". On \"one hydronium and one X minus\" the strip brightens briefly and its 1 : 1 coefficients pulse (then it dims again) and the X⁻ cell fills \"1.66 × 10⁻³\"; small upward arrows \"work backwards\" point from the E row to the faint C row (\"+1.66 × 10⁻³\", \"−1.66 × 10⁻³\"). On",
        "explain",
        "step chip \"Step 2 of 2: Ka\". The C08 ICE table draws under the strip with its I and C rows faint; the E row fills first: the H₃O⁺ cell takes the kept chip value \"1.66 × 10⁻³\". On \"one hydronium and one X minus\" the strip brightens briefly and its 1 : 1 coefficients pulse (then it dims again) and the X⁻ cell fills \"1.66 × 10⁻³\"; small upward arrows \"work backwards\" point from the E row to the faint C row (\"+1.66 × 10⁻³\", \"−1.66 × 10⁻³\"). On \"zero point zero four eight three\" the HX cell fills \"0.0500 − 0.00166 = 0.0483\" and the \"work backwards\" arrows fade. The I and C rows dim and the givens card dims. On \"five point seven times ten to the minus five\" the line writes: \"Ka = (1.66 × 10⁻³)² / 0.0483 = 5.70 × 10⁻⁵ → 5.7 × 10⁻⁵\". On \"two decimal places\" a small grey tag \"pH 2 d.p. → [H₃O⁺] 2 s.f. → Ka 2 s.f.\" writes and dims after its sentence (the C07 rule card in reverse). On \"nothing is approximated\" a small grey tag \"measured [H₃O⁺]: exact c − x, no 5% check\" writes and dims. Answer chip \"HX: Ka = 5.7 × 10⁻⁵\" pins. Bright at the end: the task line, the E row and the answer chip. Hold about 1 second. Hold about 1 second.",
        [
            "HandText write-on",
            "chip pop",
            "DrawPath",
            "table build"
        ],
        "Hold about 1 second"
    ],
    "hook-answer": [
        "new",
        "the board clears.",
        "Back to the hook: So H X has a K a about three times bigger than ethanoic acid's.",
        "three times / stronger / dilute",
        "On the spoken cues: The two readouts from scene 1 return small at the top. On \"three times\" two chips stand side by side: \"HX: Ka = 5.7 × 10⁻⁵\" and \"ethanoic acid: Ka = 1.8 × 10⁻⁵\", with a bracket \"about 3 ×\". On \"stronger\" the HX chip gets a teal tick. On \"dilute\" the 0.0500 label under the HX readout pulses and the scene 1 crossed chip returns briefly. A two-line card writes: \"pH: one solution (depends on Ka and c).\" \"Ka: the acid",
        "explain",
        "the board clears. The two readouts from scene 1 return small at the top. On \"three times\" two chips stand side by side: \"HX: Ka = 5.7 × 10⁻⁵\" and \"ethanoic acid: Ka = 1.8 × 10⁻⁵\", with a bracket \"about 3 ×\". On \"stronger\" the HX chip gets a teal tick. On \"dilute\" the 0.0500 label under the HX readout pulses and the scene 1 crossed chip returns briefly. A two-line card writes: \"pH: one solution (depends on Ka and c).\" \"Ka: the acid itself.\" Bright at the end: the two Ka chips and the two-line card. Hold about 2 seconds. Hold about 2 seconds.",
        [
            "HandText write-on",
            "Mark cross",
            "chip pop",
            "tick",
            "DrawPath",
            "NumberTicker"
        ],
        "Hold about 2 seconds"
    ],
    "pka": [
        "new",
        "the board clears.",
        "PKa: K a values are awkward, full of negative powers of ten.",
        "p K a / four point two four / four point seven four",
        "On the spoken cues: The M5 C10 log ruler draws across the centre, Ka on its upper side (ticks 10⁰ to 10⁻¹², tag \"each tick is ten times the last\"). On \"p K a\" the definition writes above it: \"pKa = −log Ka\", with a small grey tag \"like pH = −log[H₃O⁺]\" that dims when the HX marker drops. The lower side of the ruler labels itself \"pKa\" with numbers 0 to 12 under the matching ticks. On \"four point two four\" the HX marker drops at 5.7 ×",
        "explain",
        "the board clears. The M5 C10 log ruler draws across the centre, Ka on its upper side (ticks 10⁰ to 10⁻¹², tag \"each tick is ten times the last\"). On \"p K a\" the definition writes above it: \"pKa = −log Ka\", with a small grey tag \"like pH = −log[H₃O⁺]\" that dims when the HX marker drops. The lower side of the ruler labels itself \"pKa\" with numbers 0 to 12 under the matching ticks. On \"four point two four\" the HX marker drops at 5.7 × 10⁻⁵ with the line \"pKa = −log(5.7 × 10⁻⁵) = 4.24\" and its pKa label below; on \"four point seven four\" the HX working line shrinks into its marker label and the ethanoic acid marker drops with \"pKa = −log(1.8 × 10⁻⁵) = 4.74\", which then shrinks the same way. On \"two decimal places\" a small tag \"Ka 2 s.f. → pKa 2 d.p.\" writes and dims. Bright at the end: the definition and the two markers with their labels. Hold about 1 second. Hold about 1 second.",
        [
            "HandText write-on",
            "tick",
            "DrawPath"
        ],
        "Hold about 1 second"
    ],
    "reading-pka": [
        "new",
        "the ruler stays.",
        "Reading pKa: The minus sign flips the direction.",
        "smaller / lower / factor of ten / three",
        "On the spoken cues: On \"smaller\" an arrow along the upper side labelled \"Ka bigger\" points left (toward 10⁰) while an arrow along the lower side labelled \"pKa smaller\" points the same way; on \"lower\" a single arrow \"stronger acid\" lights over both. A chip \"bigger pKa, stronger acid\" fades in and is crossed (caption \"lower pKa, stronger\"). On \"factor of ten\" the span from pKa 4 to 5 brackets itself \"× 10 in Ka\". On \"three\" the bracket",
        "explain",
        "the ruler stays. On \"smaller\" an arrow along the upper side labelled \"Ka bigger\" points left (toward 10⁰) while an arrow along the lower side labelled \"pKa smaller\" points the same way; on \"lower\" a single arrow \"stronger acid\" lights over both. A chip \"bigger pKa, stronger acid\" fades in and is crossed (caption \"lower pKa, stronger\"). On \"factor of ten\" the span from pKa 4 to 5 brackets itself \"× 10 in Ka\". On \"three\" the bracket between 4.24 and 4.74 labels \"0.50 → 10⁰·⁵⁰ ≈ 3.2\", and a faint \"5?\" beside it is crossed (log scale, not halfway). On \"ten to the minus p K a\" the line \"Ka = 10⁻ᵖᴷᵃ\" writes under the ruler. Bright at the end: the arrow, the crossed chip and the line. Hold about 1 second. Hold about 1 second.",
        [
            "HandText write-on",
            "Mark cross",
            "chip pop",
            "DrawPath"
        ],
        "Hold about 1 second"
    ],
    "strong-weak": [
        "new",
        "the ruler slides up and extends to the left past 10⁰, where both sides grey into one hatched zone labelled \"strong: too large to measure in water\" (no Ka or pKa numbers in the zone).",
        "Strong and weak, with Ka and pKa: This is how K a separates strong acids from weak ones.",
        "molecules and ions / no molecules left / strong",
        "On the spoken cues: On \"molecules and ions\" a small lens thumbnail (amber-outlined molecules with a few ions, C08) sits under the weak side, which lights teal \"weak: Ka < 1, pKa > 0\"; the thumbnail greys when its sentence ends. On \"no molecules left\" a second thumbnail (only ions, C05 HCl lens) sits under the hatched zone and greys on \"strong\", when the zone label pulses (no extra tag). On \"measured hydronium\" the two-bar test from",
        "explain",
        "the ruler slides up and extends to the left past 10⁰, where both sides grey into one hatched zone labelled \"strong: too large to measure in water\" (no Ka or pKa numbers in the zone). On \"molecules and ions\" a small lens thumbnail (amber-outlined molecules with a few ions, C08) sits under the weak side, which lights teal \"weak: Ka < 1, pKa > 0\"; the thumbnail greys when its sentence ends. On \"no molecules left\" a second thumbnail (only ions, C05 HCl lens) sits under the hatched zone and greys on \"strong\", when the zone label pulses (no extra tag). On \"measured hydronium\" the two-bar test from scene 3 returns small as a decision line: \"[H₃O⁺] = c → strong, no Ka\" | \"[H₃O⁺] ≪ c → weak, calculate Ka\". Bright at the end: the two zones and the decision line. Hold about 1 second. Hold about 1 second.",
        [
            "Enter slide",
            "Cam lens zoom",
            "bar fill"
        ],
        "Hold about 1 second"
    ],
    "ka-kb-kw": [
        "new",
        "the board clears.",
        "Conjugate bases: Ka × Kb = Kw: K a also tells you about the conjugate base.",
        "conjugate base / cancel / K w / five point six times ten to the minus ten",
        "On the spoken cues: Two strips write: \"CH₃COOH(aq) + H₂O(l) ⇌ H₃O⁺(aq) + CH₃COO⁻(aq)\" and, on \"conjugate base\", \"CH₃COO⁻(aq) + H₂O(l) ⇌ CH₃COOH(aq) + OH⁻(aq)\", with a C06 bracket \"conjugate pair\" joining CH₃COOH and CH₃COO⁻. The builder writes \"Ka = [H₃O⁺][CH₃COO⁻] / [CH₃COOH]\" and \"Kb = [CH₃COOH][OH⁻] / [CH₃COO⁻]\". On \"multiply\" the two fractions slide together into one product; on \"cancel\" [CH₃COOH] top and bottom and [CH₃COO⁻] top",
        "explain",
        "the board clears. Two strips write: \"CH₃COOH(aq) + H₂O(l) ⇌ H₃O⁺(aq) + CH₃COO⁻(aq)\" and, on \"conjugate base\", \"CH₃COO⁻(aq) + H₂O(l) ⇌ CH₃COOH(aq) + OH⁻(aq)\", with a C06 bracket \"conjugate pair\" joining CH₃COOH and CH₃COO⁻. The builder writes \"Ka = [H₃O⁺][CH₃COO⁻] / [CH₃COOH]\" and \"Kb = [CH₃COOH][OH⁻] / [CH₃COO⁻]\". On \"multiply\" the two fractions slide together into one product; on \"cancel\" [CH₃COOH] top and bottom and [CH₃COO⁻] top and bottom strike through in pairs, leaving \"[H₃O⁺][OH⁻]\". On \"K w\" it relabels \"= Kw = 1.0 × 10⁻¹⁴ (25 °C)\" and the result \"Ka × Kb = Kw\" pins. The strips dim. On \"five point six times ten to the minus ten\" the line \"Kb(CH₃COO⁻) = 1.0 × 10⁻¹⁴ ÷ 1.8 × 10⁻⁵ = 5.6 × 10⁻¹⁰\" writes. Bright at the end: the pinned relation and the Kb line. Hold about 1 second. Hold about 1 second.",
        [
            "HandText write-on",
            "Enter slide",
            "DrawPath"
        ],
        "Hold about 1 second"
    ],
    "conjugate-ranking": [
        "new",
        "the ruler returns with the HX and ethanoic acid markers.",
        "Ranking conjugate bases: Because K a times K b is fixed, a stronger acid has a weaker conjugate base.",
        "stronger acid / weaker conjugate base / one point eight times ten to the minus ten / conjugate pair",
        "On the spoken cues: On \"stronger acid\" the fixed-product bar draws: on the log ruler, each acid's Ka segment (teal, from 10⁻¹⁴ upward) and its conjugate base's Kb segment (violet) together span the whole 10⁻¹⁴ to 10⁰ range, tag \"Ka × Kb = 1.0 × 10⁻¹⁴: a longer Ka bar means a shorter Kb bar\". On \"weaker conjugate base\" the HX teal segment is longer and its violet segment shorter than ethanoic acid's. On \"one point eight\" the line",
        "explain",
        "the ruler returns with the HX and ethanoic acid markers. On \"stronger acid\" the fixed-product bar draws: on the log ruler, each acid's Ka segment (teal, from 10⁻¹⁴ upward) and its conjugate base's Kb segment (violet) together span the whole 10⁻¹⁴ to 10⁰ range, tag \"Ka × Kb = 1.0 × 10⁻¹⁴: a longer Ka bar means a shorter Kb bar\". On \"weaker conjugate base\" the HX teal segment is longer and its violet segment shorter than ethanoic acid's. On \"one point eight\" the line \"Kb(X⁻) = 1.0 × 10⁻¹⁴ ÷ 5.7 × 10⁻⁵ = 1.8 × 10⁻¹⁰\" writes, and the ranking card writes: \"acid: HX > ethanoic acid\" | \"conjugate base: ethanoate > X⁻\"; the fixed-product bar dims and the Kb line merges into the ranking card. On \"conjugate pair\" a chip \"Ka(CH₃COOH) × Kb(NH₃) = Kw\" fades in and is crossed (caption \"conjugate pair only\"). Bright at the end: the ranking card and the crossed chip. Hold about 1 second. Hold about 1 second.",
        [
            "HandText write-on",
            "Mark cross",
            "chip pop",
            "DrawPath",
            "bar fill"
        ],
        "Hold about 1 second"
    ],
    "memory-aid": [
        "new",
        "the board clears.",
        "Memory aid: So here's what to remember. p K a is like golf: the lowest score wins.",
        "p K a is like golf: the lowest score wins. / K a times K b equals K w",
        "On the spoken cues: The aid writes large and handwritten: \"pKa is like golf: the lowest score wins.\" with a tiny ruler thumbnail, the lowest pKa marker flagged. On \"K a times K b\" the second line writes: \"Conjugate pair: Ka × Kb = Kw. Stronger acid, weaker conjugate base.\" Each earlier line dims slightly as the next writes.",
        "explain",
        "the board clears. The aid writes large and handwritten: \"pKa is like golf: the lowest score wins.\" with a tiny ruler thumbnail, the lowest pKa marker flagged. On \"K a times K b\" the second line writes: \"Conjugate pair: Ka × Kb = Kw. Stronger acid, weaker conjugate base.\" Each earlier line dims slightly as the next writes. Hold about 2 seconds. Hold about 2 seconds.",
        [
            "HandText write-on"
        ],
        "Hold about 2 seconds"
    ],
    "attempt-1": [
        "new",
        "the board clears.",
        "Unseen transfer task (attempt 1 (countdown, 10 seconds)) with every given and demand on screen, a 10 second countdown and no answer cues.",
        "Your turn. Lactic acid is the weak acid",
        "The question card builds with every given visible and stays on screen; no answer cues appear; the countdown ring runs for 10 seconds after \"Pause here to answer.\" (attempt 1 (countdown, 10 seconds))",
        "explain",
        "the board clears. Question card, worded as printed: \"Lactic acid is the weak monoprotic acid that forms when milk turns sour. A 0.200 mol/L solution of lactic acid has a pH of 2.28 at 25 °C. Calculate the acid dissociation constant, Ka, and the pKa of lactic acid.\" The full question stays on screen. Countdown ring for 10 seconds with \"Pause here to answer.\" Nothing answer-bearing: no table, no ruler, no aid.",
        [
            "table build",
            "Countdown ring"
        ],
        "10 second answer-free countdown after \"Pause here to answer.\"; the card stays on screen"
    ],
    "feedback-1": [
        "new",
        "the question card stays and shrinks to the top.",
        "Brief feedback (feedback 1 (brief)): the answer, the key reason with the givens underlined, and one crossed classic mistake (owner rule, 16 October).",
        "five point two five times ten to the minus three / zero point one nine five / one point four times ten to the minus four / three point eight five",
        "On the spoken cues: On \"five point two five\" \"pH of 2.28\" is underlined and \"[H₃O⁺] = [A⁻] = 10⁻²·²⁸ = 5.25 × 10⁻³ mol/L\" writes. On \"zero point one nine five\" \"0.200 mol/L\" is underlined and \"[HA] = 0.200 − 0.00525 = 0.195 mol/L\" writes; the first line dims. On \"one point four\" \"Ka = (5.25 × 10⁻³)² / 0.195 = 1.41 × 10⁻⁴ → 1.4 × 10⁻⁴\" writes and the answer chip \"Ka = 1.4 × 10⁻⁴\" pins. On \"three point eight five\" \"pKa = −log(1.41 ×",
        "explain",
        "the question card stays and shrinks to the top. On \"five point two five\" \"pH of 2.28\" is underlined and \"[H₃O⁺] = [A⁻] = 10⁻²·²⁸ = 5.25 × 10⁻³ mol/L\" writes. On \"zero point one nine five\" \"0.200 mol/L\" is underlined and \"[HA] = 0.200 − 0.00525 = 0.195 mol/L\" writes; the first line dims. On \"one point four\" \"Ka = (5.25 × 10⁻³)² / 0.195 = 1.41 × 10⁻⁴ → 1.4 × 10⁻⁴\" writes and the answer chip \"Ka = 1.4 × 10⁻⁴\" pins. On \"three point eight five\" \"pKa = −log(1.41 × 10⁻⁴) = 3.85\" writes and joins the chip; \"Ka\" and \"pKa\" in the question are underlined. On \"slip\" a chip \"Ka = 5.2 × 10⁻³\" fades in and is crossed (caption \"that's [H₃O⁺], not Ka\"). Hold about 1 second. Hold about 1 second.",
        [
            "HandText write-on",
            "Mark cross",
            "chip pop",
            "Mark underline"
        ],
        "Hold about 1 second"
    ],
    "attempt-2": [
        "new",
        "question card: \"The pKa values of three acids at 25 °C are: hydrofluoric acid, HF, 3.17; methanoic acid, HCOOH, 3.74; hydrocyanic acid, HCN, 9.21.",
        "Unseen transfer task (attempt 2 (countdown, 10 seconds)) with every given and demand on screen, a 10 second countdown and no answer cues.",
        "Last one. The p K a values of",
        "The question card builds with every given visible and stays on screen; no answer cues appear; the countdown ring runs for 10 seconds after \"Pause here to answer.\" (attempt 2 (countdown, 10 seconds))",
        "explain",
        "question card: \"The pKa values of three acids at 25 °C are: hydrofluoric acid, HF, 3.17; methanoic acid, HCOOH, 3.74; hydrocyanic acid, HCN, 9.21. (a) List the acids in order of decreasing strength. (b) Identify the strongest base among F⁻, HCOO⁻ and CN⁻, and calculate its Kb. Kw = 1.0 × 10⁻¹⁴ at 25 °C.\" The full question stays on screen. Countdown ring for 10 seconds with \"Pause here to answer.\" Nothing answer-bearing: no ruler, no aid.",
        [
            "Countdown ring"
        ],
        "10 second answer-free countdown after \"Pause here to answer.\"; the card stays on screen"
    ],
    "feedback-2": [
        "new",
        "the question card stays.",
        "Brief feedback (feedback 2 (brief)): the answer, the key reason with the givens underlined, and one crossed classic mistake (owner rule, 16 October).",
        "hydrofluoric acid / cyanide / one point six times ten to the minus five / backwards",
        "On the spoken cues: On \"hydrofluoric acid\" the three pKa values are underlined and a mini ruler places them, lowest first; the ranking line writes \"(a) HF > HCOOH > HCN\". On \"cyanide\" \"F⁻, HCOO⁻ and CN⁻\" is underlined and \"(b) strongest base: CN⁻ (weakest acid)\" writes. On \"one point six times ten to the minus five\" \"Kw = 1.0 × 10⁻¹⁴\" is underlined and the lines \"Ka(HCN) = 10⁻⁹·²¹ = 6.2 × 10⁻¹⁰\" and \"Kb(CN⁻) = 1.0 × 10⁻¹⁴ ÷ 6.2 × 10⁻¹⁰",
        "explain",
        "the question card stays. On \"hydrofluoric acid\" the three pKa values are underlined and a mini ruler places them, lowest first; the ranking line writes \"(a) HF > HCOOH > HCN\". On \"cyanide\" \"F⁻, HCOO⁻ and CN⁻\" is underlined and \"(b) strongest base: CN⁻ (weakest acid)\" writes. On \"one point six times ten to the minus five\" \"Kw = 1.0 × 10⁻¹⁴\" is underlined and the lines \"Ka(HCN) = 10⁻⁹·²¹ = 6.2 × 10⁻¹⁰\" and \"Kb(CN⁻) = 1.0 × 10⁻¹⁴ ÷ 6.2 × 10⁻¹⁰ = 1.6 × 10⁻⁵\" write, the ranking line dimming; answer chip \"Kb(CN⁻) = 1.6 × 10⁻⁵\" pins. On \"backwards\" a chip \"HCN strongest (9.21 is biggest)\" fades in and is crossed (caption \"lowest pKa wins\"). Hold about 1 second. Hold about 1 second.",
        [
            "HandText write-on",
            "Mark cross",
            "chip pop",
            "Mark underline"
        ],
        "Hold about 1 second"
    ],
    "decision-rule": [
        "adjust",
        "the question card writes, each line lighting on its words: \"1 Strength: compare Ka or pKa (pH only at equal c).\"",
        "Decision rule and handoff: So to compare acid strength, compare K a or p K a, never pH alone unless the concentrations match.",
        "Next",
        "On the spoken cues: \"2 Ka from pH: [H₃O⁺] = 10⁻ᵖᴴ = [A⁻]; [HA] = c − [H₃O⁺]; Ka = [H₃O⁺]² / [HA].\" \"3 pKa = −log Ka; lower pKa, stronger acid.\" \"4 Conjugate pair: Kb = Kw ÷ Ka.\" On \"Next\" a chip \"Next: weak acid pH and Ka method practice\" appears with a small `m6-ph-meter-probe-beaker-v1.png`.",
        "explain",
        "the question card writes, each line lighting on its words: \"1 Strength: compare Ka or pKa (pH only at equal c).\" \"2 Ka from pH: [H₃O⁺] = 10⁻ᵖᴴ = [A⁻]; [HA] = c − [H₃O⁺]; Ka = [H₃O⁺]² / [HA].\" \"3 pKa = −log Ka; lower pKa, stronger acid.\" \"4 Conjugate pair: Kb = Kw ÷ Ka.\" On \"Next\" a chip \"Next: weak acid pH and Ka method practice\" appears with a small `m6-ph-meter-probe-beaker-v1.png`. Hold about 2 seconds. Hold about 2 seconds.",
        [
            "HandText write-on",
            "chip pop",
            "Plate"
        ],
        "Hold about 2 seconds"
    ],
    "key-notes": [
        "new",
        "Key notes card with the numbered notes, the memory aid in large writing and its condition tag",
        "Essentials to copy into books",
        "key notes",
        "Notes appear then stay still for copying",
        "hold",
        "The notes and the memory aid appear and lock",
        [
            "Enter reveals"
        ],
        "Quiet copy hold of about 60 seconds with pause invitation"
    ]
}

# END generated rows: m6c09-m6c10


# BEGIN generated rows: m6c11-m6c12
M6C11_ROWS = {
    "hook": [
        "adjust",
        "two `m6-ph-meter-probe-beaker-v1.png` plates side by side, beakers labelled (coded) \"water, 100 mL\" and \"ethanoic acid + sodium ethanoate (0.100 mol/L each), 100 mL\".",
        "Hook (two beakers, one splash): Two beakers, a hundred millilitres each.",
        "seven / four point seven four / two point zero zero / four point six six / run out",
        "On the spoken cues: On \"seven\" the left readout counts to \"7.00\"; on \"four point seven four\" the right counts to \"4.74\". On \"Add one millilitre\" a coded dropper icon above each beaker releases one drop, tag \"1.0 mL of 1.0 mol/L HCl\" between them (dims after its sentence). On \"two point zero zero\" the left readout runs down to \"2.00\" and a pale blue bracket \"−5.00\" writes beside it; on \"four point six six\" the right readout ticks down",
        "explain",
        "two `m6-ph-meter-probe-beaker-v1.png` plates side by side, beakers labelled (coded) \"water, 100 mL\" and \"ethanoic acid + sodium ethanoate (0.100 mol/L each), 100 mL\". On \"seven\" the left readout counts to \"7.00\"; on \"four point seven four\" the right counts to \"4.74\". On \"Add one millilitre\" a coded dropper icon above each beaker releases one drop, tag \"1.0 mL of 1.0 mol/L HCl\" between them (dims after its sentence). On \"two point zero zero\" the left readout runs down to \"2.00\" and a pale blue bracket \"−5.00\" writes beside it; on \"four point six six\" the right readout ticks down to \"4.66\" with a teal bracket \"−0.08\". On \"run out\" both brackets dim and the heading writes: \"What does the mixture do?\" Bright at the end: the heading and the two readouts. Hold about 1 second. Hold about 1 second.",
        [
            "HandText write-on",
            "tick",
            "DrawPath",
            "NumberTicker",
            "Plate"
        ],
        "Hold about 1 second"
    ],
    "what-it-holds": [
        "adjust",
        "the plates shrink to the top right.",
        "What the mixture holds: Ethanoic acid is weak, so most of it stays as whole molecules.",
        "ethanoate / buffer",
        "On the spoken cues: `m6-beaker-v1.png` small at the left; the C08 particle lens opens from it, at first holding only amber-outlined ethanoic acid molecules among pale blue water with one rare ion pair (tag \"weak: mostly whole\", dims). On \"ethanoate\" a scatter of grey-violet ethanoate ions and small grey Na⁺ spectators fades in until there are about as many ethanoate ions as acid molecules; the strip writes \"CH₃COOH(aq) + H₂O(l) ⇌",
        "explain",
        "the plates shrink to the top right. `m6-beaker-v1.png` small at the left; the C08 particle lens opens from it, at first holding only amber-outlined ethanoic acid molecules among pale blue water with one rare ion pair (tag \"weak: mostly whole\", dims). On \"ethanoate\" a scatter of grey-violet ethanoate ions and small grey Na⁺ spectators fades in until there are about as many ethanoate ions as acid molecules; the strip writes \"CH₃COOH(aq) + H₂O(l) ⇌ H₃O⁺(aq) + CH₃COO⁻(aq)\" with a C06 bracket \"conjugate pair\" joining CH₃COOH and CH₃COO⁻. On \"both partners\" the ratio bar draws beside the lens: two equal columns \"acid, HA: 0.0100 mol\" (amber) and \"base, A⁻: 0.0100 mol\" (grey-violet). On \"buffer\" the definition writes under the lens: \"buffer: weak acid + its conjugate base, both in large amounts\". Bright at the end: the lens, the ratio bar and the definition. Hold about 1 second. Hold about 1 second.",
        [
            "HandText write-on",
            "Cam lens zoom",
            "DrawPath",
            "bar fill",
            "Plate"
        ],
        "Hold about 1 second"
    ],
    "acid-attack": [
        "new",
        "the lens stays.",
        "Added acid meets the conjugate base: Now add the hydrochloric acid.",
        "ethanoate / used up / left",
        "On the spoken cues: A handful of teal hydronium tokens drop in from the top (with grey Cl⁻ spectators). On \"ethanoate\" one hydronium meets an ethanoate and the C01 hop plays in reverse: the teal proton jumps onto the ethanoate, which gains an amber outline (now ethanoic acid), leaving a water molecule; the other added hydroniums do the same, one after another, quickly. The equation writes under the lens: \"CH₃COO⁻(aq) + H₃O⁺(aq) →",
        "explain",
        "the lens stays. A handful of teal hydronium tokens drop in from the top (with grey Cl⁻ spectators). On \"ethanoate\" one hydronium meets an ethanoate and the C01 hop plays in reverse: the teal proton jumps onto the ethanoate, which gains an amber outline (now ethanoic acid), leaving a water molecule; the other added hydroniums do the same, one after another, quickly. The equation writes under the lens: \"CH₃COO⁻(aq) + H₃O⁺(aq) → CH₃COOH(aq) + H₂O(l)\". On \"used up\" the lens holds no extra teal tokens; the ratio bar moves a small slice from the base column to the acid column. On \"left\" the strip from scene 2 pulses its reverse arrow with a small grey tag \"Module 5: Le Chatelier\" (dims after its sentence). Bright at the end: the equation, the ratio bar and the lens. Hold about 1 second. Hold about 1 second.",
        [
            "HandText write-on",
            "token flight",
            "Cam lens zoom",
            "DrawPath",
            "bar fill"
        ],
        "Hold about 1 second"
    ],
    "base-attack": [
        "new",
        "the lens resets to the start (equal partners).",
        "Added base meets the weak acid: Add sodium hydroxide instead, and the other partner steps in.",
        "ethanoic acid / twelve / four point eight three / defender",
        "On the spoken cues: Violet OH⁻ tokens drop in; on \"ethanoic acid\" one takes a teal proton from an amber molecule, which becomes a grey-violet ethanoate, and a water forms. The equation writes: \"CH₃COOH(aq) + OH⁻(aq) → CH₃COO⁻(aq) + H₂O(l)\"; the scene 3 equation sits above it, dimmed. The lens dims as the two meter plates return small at the top, with a tag \"1.0 mL of 1.0 mol/L NaOH\" between them (dims after its sentence): on \"twelve\"",
        "explain",
        "the lens resets to the start (equal partners). Violet OH⁻ tokens drop in; on \"ethanoic acid\" one takes a teal proton from an amber molecule, which becomes a grey-violet ethanoate, and a water forms. The equation writes: \"CH₃COOH(aq) + OH⁻(aq) → CH₃COO⁻(aq) + H₂O(l)\"; the scene 3 equation sits above it, dimmed. The lens dims as the two meter plates return small at the top, with a tag \"1.0 mL of 1.0 mol/L NaOH\" between them (dims after its sentence): on \"twelve\" the water readout climbs \"7.00\" → \"12.00\"; on \"four point eight three\" the buffer readout ticks \"4.74\" → \"4.83\". On \"defender\" the two equations brighten as a pair with labels \"added acid → taken by A⁻\" and \"added base → taken by HA\"; the readouts dim. Bright at the end: the two labelled equations. Hold about 1 second. Hold about 1 second.",
        [
            "HandText write-on",
            "tick",
            "token flight",
            "Cam lens zoom",
            "NumberTicker"
        ],
        "Hold about 1 second"
    ],
    "buffer-ph": [
        "new",
        "the board clears to the three zones.",
        "The pH of a buffer: Ka and the ratio: So why does the pH move at all?",
        "K a times acid over ethanoate / cancels / one / p K a",
        "On the spoken cues: Task line: \"Find the buffer's pH\". Givens card: \"CH₃COOH: 0.100 mol/L × 0.100 L = 0.0100 mol\" | \"CH₃COO⁻: 0.100 mol/L × 0.100 L = 0.0100 mol\" | \"Ka = 1.8 × 10⁻⁵ (25 °C)\". The C10 builder writes \"Ka = [H₃O⁺][CH₃COO⁻] / [CH₃COOH]\" with a small grey tag \"Ka and pKa video\" (dims). On \"K a times acid over ethanoate\" the builder rearranges: [CH₃COO⁻] slides under, giving \"[H₃O⁺] = Ka × [CH₃COOH] / [CH₃COO⁻]\". On \"amounts",
        "explain",
        "the board clears to the three zones. Task line: \"Find the buffer's pH\". Givens card: \"CH₃COOH: 0.100 mol/L × 0.100 L = 0.0100 mol\" | \"CH₃COO⁻: 0.100 mol/L × 0.100 L = 0.0100 mol\" | \"Ka = 1.8 × 10⁻⁵ (25 °C)\". The C10 builder writes \"Ka = [H₃O⁺][CH₃COO⁻] / [CH₃COOH]\" with a small grey tag \"Ka and pKa video\" (dims). On \"K a times acid over ethanoate\" the builder rearranges: [CH₃COO⁻] slides under, giving \"[H₃O⁺] = Ka × [CH₃COOH] / [CH₃COO⁻]\". On \"amounts you put in\" a small grey tag \"partners barely react with water: use the amounts added\" writes (dims at the sentence end). On \"cancels\" a small grey tag \"same V: use moles\" writes and the brackets become \"n(CH₃COOH) / n(CH₃COO⁻)\". On \"one\" the ratio bar returns small with equal columns and the line \"[H₃O⁺] = 1.8 × 10⁻⁵ × 0.0100 / 0.0100 = 1.8 × 10⁻⁵ mol/L\" writes. On \"p K a\" the line \"pH = pKa = −log(1.8 × 10⁻⁵) = 4.74\" writes and the result shrinks to a kept chip \"equal partners: pH = pKa = 4.74\". Bright at the end: the task line, the rearranged line and the kept chip. Hold about 1 second. Hold about 1 second.",
        [
            "HandText write-on",
            "Enter slide",
            "chip pop",
            "DrawPath",
            "bar fill"
        ],
        "Hold about 1 second"
    ],
    "we-after-acid": [
        "new",
        "task line: \"Find the pH after adding 1.0 × 10⁻³ mol H₃O⁺\".",
        "Worked example: after the acid: Now add the zero point zero zero one zero moles of hydronium.",
        "zero point zero one one zero / zero point zero zero nine zero / one point two / four point six six / hundred thousand",
        "On the spoken cues: The givens card adds \"added H₃O⁺: 1.0 mL × 1.0 mol/L = 0.0010 mol\" (the earlier lines dim). Step chip \"Step 1 of 2: new amounts\". The scene 3 equation writes small at the top as a reminder. On \"zero point zero one one zero\" the ratio bar moves a slice from the base column to the acid column, and the lines \"n(CH₃COOH) = 0.0100 + 0.0010 = 0.0110 mol\" and, on \"zero point zero zero nine zero\", \"n(CH₃COO⁻) = 0.0100 −",
        "explain",
        "task line: \"Find the pH after adding 1.0 × 10⁻³ mol H₃O⁺\". The givens card adds \"added H₃O⁺: 1.0 mL × 1.0 mol/L = 0.0010 mol\" (the earlier lines dim). Step chip \"Step 1 of 2: new amounts\". The scene 3 equation writes small at the top as a reminder. On \"zero point zero one one zero\" the ratio bar moves a slice from the base column to the acid column, and the lines \"n(CH₃COOH) = 0.0100 + 0.0010 = 0.0110 mol\" and, on \"zero point zero zero nine zero\", \"n(CH₃COO⁻) = 0.0100 − 0.0010 = 0.0090 mol\" write. Step chip \"Step 2 of 2: pH\". On \"one point two\" the line \"[H₃O⁺] = 1.8 × 10⁻⁵ × 0.0110 / 0.0090 = 2.2 × 10⁻⁵ mol/L\" writes (the amounts lines dim) with a grey tag \"ratio 1.22: [H₃O⁺] up 22%\". On \"four point six six\" the line \"pH = −log(2.2 × 10⁻⁵) = 4.66\" writes and the answer chip \"pH = 4.66\" pins, with the small tag \"Ka 2 s.f. → pH 2 d.p.\" (dims). On \"hundred thousand\" a compact comparison writes under the chip: \"buffer: [H₃O⁺] × 1.2\" | \"water: [H₃O⁺] 10⁻⁷ → 10⁻², × about 100,000\". Bright at the end: the answer chip and the comparison. Hold about 2 seconds. Hold about 2 seconds.",
        [
            "HandText write-on",
            "chip pop",
            "bar fill"
        ],
        "Hold about 2 seconds"
    ],
    "ratio-sets-ph": [
        "new",
        "the board clears.",
        "The ratio sets the pH: That ratio sets the pH of any buffer.",
        "below / above / neutral / not",
        "On the spoken cues: A short horizontal pH line draws with a marker \"pKa\" in the middle. On \"below\" the ratio bar beside it tilts to a taller acid column and the marker slides left, label \"more HA: pH < pKa\"; on \"above\" it tilts the other way, label \"more A⁻: pH > pKa\"; the \"more HA\" label dims as this one writes, and the marker returns to the middle, where \"equal: pH = pKa\" sits under it. On \"neutral\" a small chip \"this buffer: pH",
        "explain",
        "the board clears. A short horizontal pH line draws with a marker \"pKa\" in the middle. On \"below\" the ratio bar beside it tilts to a taller acid column and the marker slides left, label \"more HA: pH < pKa\"; on \"above\" it tilts the other way, label \"more A⁻: pH > pKa\"; the \"more HA\" label dims as this one writes, and the marker returns to the middle, where \"equal: pH = pKa\" sits under it. On \"neutral\" a small chip \"this buffer: pH 4.74, not 7\" writes beside the line; the pH line and its labels then dim. On \"not\" a chip \"HCl + NaCl: buffer?\" writes; a small lens beside it shows grey Cl⁻ ions ignoring incoming teal hydronium tokens, and the chip is crossed (caption \"Cl⁻ won't take protons back\"). Bright at the end: the crossed chip, its caption and the small lens. Hold about 1 second. Hold about 1 second.",
        [
            "HandText write-on",
            "Mark cross",
            "Enter slide",
            "chip pop",
            "token flight",
            "Cam lens zoom",
            "DrawPath",
            "bar fill"
        ],
        "Hold about 1 second"
    ],
    "capacity": [
        "new",
        "the board clears.",
        "Capacity: running out: Now keep adding acid, a millilitre at a time.",
        "nine / none / plunges / capacity",
        "On the spoken cues: The coded lineGraph draws: x axis \"volume of 1.0 mol/L HCl added (mL)\" from 0 to 12, y axis \"pH\" from 0 to 8 (computed values, author note g). The water line (pale blue) is drawn first, falling to 2.00 at 1 mL and below. Then the buffer line (teal) draws point by point as a dose counter \"1 mL, 2 mL, ...\" ticks; beside the graph the ratio bar loses a slice of its base column with each dose. On \"nine\" the base column",
        "explain",
        "the board clears. The coded lineGraph draws: x axis \"volume of 1.0 mol/L HCl added (mL)\" from 0 to 12, y axis \"pH\" from 0 to 8 (computed values, author note g). The water line (pale blue) is drawn first, falling to 2.00 at 1 mL and below. Then the buffer line (teal) draws point by point as a dose counter \"1 mL, 2 mL, ...\" ticks; beside the graph the ratio bar loses a slice of its base column with each dose. On \"nine\" the base column is a thin sliver; on \"none\" it empties and greys out; on \"plunges\" the teal line drops steeply between 9 and 11 mL. On \"capacity\" the dose counter and the ratio bar dim, and the term writes under the graph with the gloss \"acid or base taken up before a partner is nearly used up\". On \"not on the pH\" a small inset: two beakers both labelled \"pH 4.74\", one with tall columns (\"0.0100 mol each\"), one with columns a tenth as tall (\"0.0010 mol each\"), tag \"same pH, one tenth the capacity\". Bright at the end: the graph, the term and the inset. Hold about 2 seconds. Hold about 2 seconds.",
        [
            "HandText write-on",
            "tick",
            "DrawPath",
            "NumberTicker",
            "bar fill"
        ],
        "Hold about 2 seconds"
    ],
    "blood-buffer": [
        "adjust",
        "the board clears.",
        "The blood buffer: Your blood stays between pH seven point three five and seven point four five, because enzymes and haemoglobin work best in a narrow range.",
        "seven point three five and seven point four five / carbonic acid / hydrogencarbonate / carbon dioxide",
        "On the spoken cues: `m5x-red-blood-cells-v1.png` small at the upper left (the plate itself opens the scene, so the narration starts straight on blood); a short pH ruler draws from 7.0 to 7.8 with a teal band from 7.35 to 7.45 on \"seven point three five and seven point four five\" (tag \"normal blood pH\"). On \"carbonic acid\" and \"hydrogencarbonate\" the strip writes \"H₂CO₃(aq) + H₂O(l) ⇌ H₃O⁺(aq) + HCO₃⁻(aq)\" with the C06 bracket",
        "explain",
        "the board clears. `m5x-red-blood-cells-v1.png` small at the upper left (the plate itself opens the scene, so the narration starts straight on blood); a short pH ruler draws from 7.0 to 7.8 with a teal band from 7.35 to 7.45 on \"seven point three five and seven point four five\" (tag \"normal blood pH\"). On \"carbonic acid\" and \"hydrogencarbonate\" the strip writes \"H₂CO₃(aq) + H₂O(l) ⇌ H₃O⁺(aq) + HCO₃⁻(aq)\" with the C06 bracket \"conjugate pair\". On \"takes up the hydronium\" the equation writes: \"HCO₃⁻(aq) + H₃O⁺(aq) → H₂CO₃(aq) + H₂O(l)\" (the strip dims). On \"carbon dioxide\" a second line writes \"H₂CO₃(aq) → CO₂(aq) + H₂O(l)\", and a grey CO₂ arrow runs out to `m8-lungs-healthy-v1.png` small at the right, tag \"breathed out\". Bright at the end: the pH band, the two equations and the lungs. Hold about 1 second. Hold about 1 second.",
        [
            "HandText write-on",
            "DrawPath",
            "Plate"
        ],
        "Hold about 1 second"
    ],
    "blood-works": [
        "new",
        "the ratio bar returns, re-labelled \"dissolved CO₂ and H₂CO₃\" (amber, short) and \"HCO₃⁻\" (grey-violet, about twenty times taller); on \"twenty\" the tag \"HCO₃⁻ : dissolved CO₂ about 20 : 1 at pH 7.4\" writes between them.",
        "Why blood's buffer works: Blood has about twenty hydrogencarbonate ions for each dissolved carbon dioxide molecule.",
        "twenty / topped up / phosphate",
        "On the spoken cues: On \"far more acid than base\" a large bracket on the tall column reads \"acid capacity\" and a small bracket on the short column \"base capacity\"; the \"20 : 1\" tag dims. On \"topped up\" the brackets dim and two arrows draw: a two-way arrow between the lungs plate and the \"dissolved CO₂ and H₂CO₃\" column, CO₂ out or kept (tag \"lungs: minutes\"), and one adjusting HCO₃⁻ (tag \"kidneys: hours to days\"). On \"phosphate\" the",
        "explain",
        "the ratio bar returns, re-labelled \"dissolved CO₂ and H₂CO₃\" (amber, short) and \"HCO₃⁻\" (grey-violet, about twenty times taller); on \"twenty\" the tag \"HCO₃⁻ : dissolved CO₂ about 20 : 1 at pH 7.4\" writes between them. On \"far more acid than base\" a large bracket on the tall column reads \"acid capacity\" and a small bracket on the short column \"base capacity\"; the \"20 : 1\" tag dims. On \"topped up\" the brackets dim and two arrows draw: a two-way arrow between the lungs plate and the \"dissolved CO₂ and H₂CO₃\" column, CO₂ out or kept (tag \"lungs: minutes\"), and one adjusting HCO₃⁻ (tag \"kidneys: hours to days\"). On \"phosphate\" the ratio bar and arrows dim, and two small chips write along the bottom: \"cells: H₂PO₄⁻ / HPO₄²⁻\" and \"oceans: HCO₃⁻ / CO₃²⁻\" (each written acid / base). Bright at the end: the two chips and the lungs plate. Hold about 1 second. Hold about 1 second.",
        [
            "HandText write-on",
            "chip pop",
            "DrawPath",
            "bar fill"
        ],
        "Hold about 1 second"
    ],
    "memory-aid": [
        "new",
        "the board clears.",
        "Memory aid: So here's what to remember.",
        "A buffer has a defender for each attack / resists, it doesn't prevent",
        "On the spoken cues: The aid writes large and handwritten: \"A buffer has a defender for each attack.\" with two small icons: a grey-violet A⁻ facing a teal H₃O⁺, an amber HA facing a violet OH⁻. On \"resists\" the second line writes: \"Resists, doesn't prevent: it can run out.\" with a tiny thumbnail of the scene 8 plunge. Each earlier line dims slightly as the next writes.",
        "explain",
        "the board clears. The aid writes large and handwritten: \"A buffer has a defender for each attack.\" with two small icons: a grey-violet A⁻ facing a teal H₃O⁺, an amber HA facing a violet OH⁻. On \"resists\" the second line writes: \"Resists, doesn't prevent: it can run out.\" with a tiny thumbnail of the scene 8 plunge. Each earlier line dims slightly as the next writes. Hold about 2 seconds. Hold about 2 seconds.",
        [
            "HandText write-on"
        ],
        "Hold about 2 seconds"
    ],
    "attempt-1": [
        "adjust",
        "the board clears.",
        "Unseen transfer task (attempt 1 (countdown, 10 seconds)) with every given and demand on screen, a 10 second countdown and no answer cues.",
        "Your turn. A solution contains zero point two",
        "The question card builds with every given visible and stays on screen; no answer cues appear; the countdown ring runs for 10 seconds after \"Pause here to answer.\" (attempt 1 (countdown, 10 seconds))",
        "explain",
        "the board clears. `m5x-ammonia-bottle-v1.png` small at the top right. Question card, worded as printed: \"A solution contains 0.20 mol/L ammonia (NH₃) and 0.20 mol/L ammonium chloride (NH₄Cl). (a) Explain, using equations, how this solution resists a change in pH when a small amount of hydrochloric acid or sodium hydroxide is added. (b) Estimate the pH of the solution, given that the pKa of NH₄⁺ is 9.25 at 25 °C.\" The full question stays on screen. Countdown ring for 10 seconds with \"Pause here to answer.\" Nothing answer-bearing: no lens, no ratio bar, no aid.",
        [
            "Cam lens zoom",
            "bar fill",
            "Countdown ring",
            "Plate"
        ],
        "10 second answer-free countdown after \"Pause here to answer.\"; the card stays on screen"
    ],
    "feedback-1": [
        "new",
        "the question card stays and shrinks to the top.",
        "Brief feedback (feedback 1 (brief)): the answer, the key reason with the givens underlined, and one crossed classic mistake (owner rule, 16 October).",
        "ammonium / hydroxide / nine point two five / swaps",
        "On the spoken cues: On \"ammonium\" \"0.20 mol/L ammonia\" and \"hydrochloric acid\" are underlined and \"NH₃(aq) + H₃O⁺(aq) → NH₄⁺(aq) + H₂O(l)\" writes. On \"hydroxide\" \"ammonium chloride\" and \"sodium hydroxide\" are underlined and \"NH₄⁺(aq) + OH⁻(aq) → NH₃(aq) + H₂O(l)\" writes; the first equation dims. On \"nine point two five\" \"0.20 mol/L\" (both) and \"pKa of NH₄⁺ is 9.25\" are underlined and the answer chip \"equal partners: pH ≈ pKa = 9.25\"",
        "explain",
        "the question card stays and shrinks to the top. On \"ammonium\" \"0.20 mol/L ammonia\" and \"hydrochloric acid\" are underlined and \"NH₃(aq) + H₃O⁺(aq) → NH₄⁺(aq) + H₂O(l)\" writes. On \"hydroxide\" \"ammonium chloride\" and \"sodium hydroxide\" are underlined and \"NH₄⁺(aq) + OH⁻(aq) → NH₃(aq) + H₂O(l)\" writes; the first equation dims. On \"nine point two five\" \"0.20 mol/L\" (both) and \"pKa of NH₄⁺ is 9.25\" are underlined and the answer chip \"equal partners: pH ≈ pKa = 9.25\" pins. On \"swaps\" a chip \"NH₄⁺ + H₃O⁺ → ...\" fades in and is crossed (caption \"the base partner takes added acid\"). Hold about 1 second. Hold about 1 second.",
        [
            "HandText write-on",
            "Mark cross",
            "chip pop",
            "Mark underline"
        ],
        "Hold about 1 second"
    ],
    "attempt-2": [
        "new",
        "question card: \"Two buffer solutions, X and Y, each have a volume of 100 mL and a pH of 4.74 at 25 °C.",
        "Unseen transfer task (attempt 2 (countdown, 10 seconds)) with every given and demand on screen, a 10 second countdown and no answer cues.",
        "Last one. Buffers X and Y each have",
        "The question card builds with every given visible and stays on screen; no answer cues appear; the countdown ring runs for 10 seconds after \"Pause here to answer.\" (attempt 2 (countdown, 10 seconds))",
        "explain",
        "question card: \"Two buffer solutions, X and Y, each have a volume of 100 mL and a pH of 4.74 at 25 °C. X contains 0.010 mol of ethanoic acid and 0.010 mol of sodium ethanoate. Y contains 0.0010 mol of ethanoic acid and 0.0010 mol of sodium ethanoate. A student adds 0.0020 mol of hydrochloric acid to each solution. Predict and explain the change in pH in each solution. Assume the volume does not change. Ka(CH₃COOH) = 1.8 × 10⁻⁵.\" The full question stays on screen. Countdown ring for 10 seconds with \"Pause here to answer.\" Nothing answer-bearing: no ratio bars, no graph.",
        [
            "bar fill",
            "Countdown ring"
        ],
        "10 second answer-free countdown after \"Pause here to answer.\"; the card stays on screen"
    ],
    "feedback-2": [
        "new",
        "the question card stays.",
        "Brief feedback (feedback 2 (brief)): the answer, the key reason with the givens underlined, and one crossed classic mistake (owner rule, 16 October).",
        "zero point zero zero eight zero / four point five seven / uses up / two / slip",
        "On the spoken cues: Two small ratio bars draw under it, \"X\" and \"Y\". On \"zero point zero zero eight zero\" \"0.010 mol\" and \"0.0020 mol\" are underlined; X's bars become \"HA 0.012 mol | A⁻ 0.0080 mol\". On \"four point five seven\" \"Ka = 1.8 × 10⁻⁵\" is underlined and \"[H₃O⁺] = 1.8 × 10⁻⁵ × 0.012 / 0.0080 = 2.7 × 10⁻⁵ mol/L; pH = 4.57\" writes; answer chip \"X: pH 4.74 → 4.57\". On \"uses up\" Y's \"0.0010 mol\" is underlined, Y's base column",
        "explain",
        "the question card stays. Two small ratio bars draw under it, \"X\" and \"Y\". On \"zero point zero zero eight zero\" \"0.010 mol\" and \"0.0020 mol\" are underlined; X's bars become \"HA 0.012 mol | A⁻ 0.0080 mol\". On \"four point five seven\" \"Ka = 1.8 × 10⁻⁵\" is underlined and \"[H₃O⁺] = 1.8 × 10⁻⁵ × 0.012 / 0.0080 = 2.7 × 10⁻⁵ mol/L; pH = 4.57\" writes; answer chip \"X: pH 4.74 → 4.57\". On \"uses up\" Y's \"0.0010 mol\" is underlined, Y's base column empties and greys, and \"excess H₃O⁺ = 0.0020 − 0.0010 = 0.0010 mol; 0.010 mol/L\" writes; on \"two\" the chip \"Y: pH 4.74 → about 2.00\" pins. On \"slip\" a chip \"same pH, so same resistance\" fades in and is crossed (caption \"capacity depends on the amounts\"). Hold about 1 second. Hold about 1 second.",
        [
            "HandText write-on",
            "Mark cross",
            "chip pop",
            "Mark underline",
            "DrawPath",
            "bar fill"
        ],
        "Hold about 1 second"
    ],
    "decision-rule": [
        "adjust",
        "the question card writes, each line lighting on its words: \"1 Find the pair: weak acid HA + conjugate base A⁻.\"",
        "Decision rule and handoff: For any buffer: find the weak acid and its conjugate base.",
        "Next",
        "On the spoken cues: \"2 Added acid → reacts with A⁻. Added base → reacts with HA.\" \"3 [H₃O⁺] = Ka × n(HA) / n(A⁻); equal amounts: pH = pKa.\" \"4 Check neither partner has run out (capacity).\" On \"Next\" a chip \"Next: prepare and test a buffer\" appears with a small `m6-ph-meter-probe-beaker-v1.png`.",
        "explain",
        "the question card writes, each line lighting on its words: \"1 Find the pair: weak acid HA + conjugate base A⁻.\" \"2 Added acid → reacts with A⁻. Added base → reacts with HA.\" \"3 [H₃O⁺] = Ka × n(HA) / n(A⁻); equal amounts: pH = pKa.\" \"4 Check neither partner has run out (capacity).\" On \"Next\" a chip \"Next: prepare and test a buffer\" appears with a small `m6-ph-meter-probe-beaker-v1.png`. Hold about 2 seconds. Hold about 2 seconds.",
        [
            "HandText write-on",
            "chip pop",
            "Plate"
        ],
        "Hold about 2 seconds"
    ],
    "key-notes": [
        "new",
        "Key notes card with the numbered notes, the memory aid in large writing and its condition tag",
        "Essentials to copy into books",
        "key notes",
        "Notes appear then stay still for copying",
        "hold",
        "The notes and the memory aid appear and lock",
        [
            "Enter reveals"
        ],
        "Quiet copy hold of about 60 seconds with pause invitation"
    ]
}

M6C12_ROWS = {
    "hook": [
        "adjust",
        "`m6-vinegar-bottle-v1.png` at the left with its coded label \"white vinegar: 5% acidity\".",
        "Hook (the meter can't count it): The label on this white vinegar says five per cent acidity.",
        "weak / K a / every / titration",
        "On the spoken cues: On \"A pH meter\" `m6-ph-meter-probe-beaker-v1.png` appears at the right, beaker labelled \"vinegar\", readout \"2.4\". On \"weak\" a small C08 lens opens over the beaker: almost all amber-outlined molecules, one ion pair lit teal, tag \"the meter senses only these\"; the readout pulses. On \"K a\" the tag dims and a grey tag writes under the readout: \"pH 2.35 to 2.45 → c ≈ 0.70 to 1.1 mol/L (via Ka)\" (dims at the sentence",
        "explain",
        "`m6-vinegar-bottle-v1.png` at the left with its coded label \"white vinegar: 5% acidity\". On \"A pH meter\" `m6-ph-meter-probe-beaker-v1.png` appears at the right, beaker labelled \"vinegar\", readout \"2.4\". On \"weak\" a small C08 lens opens over the beaker: almost all amber-outlined molecules, one ion pair lit teal, tag \"the meter senses only these\"; the readout pulses. On \"K a\" the tag dims and a grey tag writes under the readout: \"pH 2.35 to 2.45 → c ≈ 0.70 to 1.1 mol/L (via Ka)\" (dims at the sentence end). On \"every\" all the amber molecules in the lens light at once. On \"titration\" the meter plate fades and the heading writes: \"How much acid is in it?\" Bright at the end: the heading, the bottle and the lens. Hold about 1 second. Hold about 1 second.",
        [
            "HandText write-on",
            "Cam lens zoom",
            "NumberTicker",
            "Plate"
        ],
        "Hold about 1 second"
    ],
    "idea-apparatus": [
        "adjust",
        "the board clears.",
        "The idea and the apparatus: The idea is to react the unknown with a solution whose concentration you know exactly, a standard solution, and measure precisely how much it takes.",
        "standard solution / pipette / burette / titre",
        "On the spoken cues: The apparatus assembles centre: `m6-burette-clamp-stand-v1.png` with `m6-conical-flask-v1.png` on `m6-white-tile-v1.png` under its tip. On \"standard solution\" the burette's coded fill (navy) rises to the zero mark and a navy tag writes beside it: \"NaOH: 0.5000 mol/L (known exactly)\". On \"pipette\" `m6-volumetric-pipette-filler-v1.png` slides in above the flask; its bulb drains into the flask (coded liquid, no hand)",
        "explain",
        "the board clears. The apparatus assembles centre: `m6-burette-clamp-stand-v1.png` with `m6-conical-flask-v1.png` on `m6-white-tile-v1.png` under its tip. On \"standard solution\" the burette's coded fill (navy) rises to the zero mark and a navy tag writes beside it: \"NaOH: 0.5000 mol/L (known exactly)\". On \"pipette\" `m6-volumetric-pipette-filler-v1.png` slides in above the flask; its bulb drains into the flask (coded liquid, no hand) and a tag writes \"aliquot: 10.00 mL vinegar\" (amber); on \"indicator\" three coded drops fall in. On \"burette\" the navy level begins to fall and a volume counter beside the scale counts up. On \"titre\" the counter stops and a bracket \"titre = volume delivered\" spans the fallen level. Bright at the end: the two tags and the titre bracket. Hold about 1 second. Hold about 1 second.",
        [
            "HandText write-on",
            "Enter slide",
            "DrawPath",
            "NumberTicker",
            "Plate"
        ],
        "Hold about 1 second"
    ],
    "equivalence-endpoint": [
        "adjust",
        "the apparatus shrinks to the right.",
        "Equivalence, endpoint, and why it counts every molecule: The point where the amounts match the equation exactly is the equivalence point.",
        "equivalence point / endpoint / right / every",
        "On the spoken cues: On \"equivalence point\" a tag writes: \"equivalence point: amounts match the equation\". On \"endpoint\" the flask swaps from `m6-clip-phenolphthalein-colourless-v1.png` to `m6-clip-phenolphthalein-pink-v1.png` and a second tag writes beside it: \"endpoint: the colour change (very close to the equivalence point)\". The tags dim. The C08 lens returns large at the left, with C09's \"whole molecules left\" counter at its edge",
        "explain",
        "the apparatus shrinks to the right. On \"equivalence point\" a tag writes: \"equivalence point: amounts match the equation\". On \"endpoint\" the flask swaps from `m6-clip-phenolphthalein-colourless-v1.png` to `m6-clip-phenolphthalein-pink-v1.png` and a second tag writes beside it: \"endpoint: the colour change (very close to the equivalence point)\". The tags dim. The C08 lens returns large at the left, with C09's \"whole molecules left\" counter at its edge and a small grey tag \"weak acid heat video\" (dims): on \"Hydroxide removes hydronium\" violet OH⁻ tokens drop in, each taking a teal proton (from the rare hydronium, then directly from amber molecules); the strip \"CH₃COOH(aq) + H₂O(l) ⇌ H₃O⁺(aq) + CH₃COO⁻(aq)\" pulses its forward arrow on \"right\" (grey tag \"Module 5: Le Chatelier\", dims). On \"every\" the counter reaches 0, the last amber molecule loses its proton and the lens holds only grey-violet ethanoate and water. On \"how much acid there is\" a chip writes: \"titre counts moles of acid, weak or strong\". Bright at the end: the lens and the chip. Hold about 1 second. Hold about 1 second.",
        [
            "HandText write-on",
            "chip pop",
            "token flight",
            "Cam lens zoom",
            "DrawPath",
            "NumberTicker",
            "Plate"
        ],
        "Hold about 1 second"
    ],
    "primary-standard": [
        "adjust",
        "the board clears.",
        "Standard solutions and primary standards: Everything rests on that known concentration.",
        "primary standard / standardised",
        "On the spoken cues: `m6-volumetric-flask-v1.png` centre with a coded label \"Na₂CO₃ standard\". On \"primary standard\" a three-row card writes beside it, ticks lighting one per spoken criterion: \"very pure ✓\", \"stable in air ✓\", \"no water taken up while weighing ✓\", with a small grey tag \"Na₂CO₃: dried in an oven first\" (dims). On \"Sodium hydroxide fails\" the Na₂CO₃ card dims and a second card writes \"NaOH(s)\" with two rows only, each",
        "explain",
        "the board clears. `m6-volumetric-flask-v1.png` centre with a coded label \"Na₂CO₃ standard\". On \"primary standard\" a three-row card writes beside it, ticks lighting one per spoken criterion: \"very pure ✓\", \"stable in air ✓\", \"no water taken up while weighing ✓\", with a small grey tag \"Na₂CO₃: dried in an oven first\" (dims). On \"Sodium hydroxide fails\" the Na₂CO₃ card dims and a second card writes \"NaOH(s)\" with two rows only, each taking a grey cross as it is said: \"soaks up water ✗\", \"reacts with CO₂ ✗\" (no equation on screen). On \"standardised\" the NaOH card dims and an arrow runs from the Na₂CO₃ flask to a burette icon labelled \"NaOH: concentration found by titration\". Bright at the end: the flask label, the arrow and its label. Hold about 1 second. Hold about 1 second.",
        [
            "HandText write-on",
            "Mark cross",
            "tick",
            "DrawPath",
            "Plate"
        ],
        "Hold about 1 second"
    ],
    "concordant-titres": [
        "new",
        "the board clears to the three zones.",
        "Titres you can trust: Back to the vinegar: ten point zero zero millilitres, titrated with zero point five zero zero zero moles per litre sodium hydroxide.",
        "eighteen point nine zero / zero point one zero / eighteen point five seven",
        "On the spoken cues: Task line: \"Find c(CH₃COOH) in the vinegar\". The titre table writes: \"rough | 19.0\" (greyed, tag \"not used\"), then rows 1 to 4: \"18.60\", \"18.55\", \"18.55\", \"18.90\" mL, each writing as it is spoken. On \"eighteen point nine zero\" that row pulses. On \"zero point one zero\" the concordance strip draws under the table (a short number line from 18.50 to 18.95 mL with the four titres as dots); a bracket \"0.10 mL\" slides over",
        "explain",
        "the board clears to the three zones. Task line: \"Find c(CH₃COOH) in the vinegar\". The titre table writes: \"rough | 19.0\" (greyed, tag \"not used\"), then rows 1 to 4: \"18.60\", \"18.55\", \"18.55\", \"18.90\" mL, each writing as it is spoken. On \"eighteen point nine zero\" that row pulses. On \"zero point one zero\" the concordance strip draws under the table (a short number line from 18.50 to 18.95 mL with the four titres as dots); a bracket \"0.10 mL\" slides over the three dots at 18.55 to 18.60, and the 18.90 dot sits outside it; the 18.90 row takes a grey cross and the other three are ringed teal; the strip then dims. On \"eighteen point five seven\" the line \"(18.60 + 18.55 + 18.55) ÷ 3 = 18.57 mL\" writes and shrinks to a kept chip \"mean titre = 18.57 mL\". Bright at the end: the task line, the ringed table and the kept chip. Hold about 1 second. Hold about 1 second.",
        [
            "HandText write-on",
            "Mark cross",
            "ScribbleCircle",
            "Enter slide",
            "chip pop",
            "DrawPath",
            "table build"
        ],
        "Hold about 1 second"
    ],
    "we1-moles": [
        "new",
        "the table dims to a strip at the top.",
        "Worked example 1: equation and moles of the known: Now four steps.",
        "balanced equation / nine point two eight five times ten to the minus three",
        "On the spoken cues: Equation strip: \"CH₃COOH(aq) + NaOH(aq) → CH₃COONa(aq) + H₂O(l)\". Givens card: \"NaOH: c = 0.5000 mol/L, V = 18.57 mL\" (navy) | \"vinegar: V = 10.00 mL\" (amber). The mole bridge draws: three boxes \"known: NaOH\" → \"ratio\" → \"unknown: CH₃COOH\". Step chip \"Step 1 of 4: equation\". On \"balanced equation\" the coefficients on the strip pulse \"1 : 1\" and the ratio box fills \"1 : 1\". Step chip \"Step 2 of 4: n(known)\". On \"n",
        "explain",
        "the table dims to a strip at the top. Equation strip: \"CH₃COOH(aq) + NaOH(aq) → CH₃COONa(aq) + H₂O(l)\". Givens card: \"NaOH: c = 0.5000 mol/L, V = 18.57 mL\" (navy) | \"vinegar: V = 10.00 mL\" (amber). The mole bridge draws: three boxes \"known: NaOH\" → \"ratio\" → \"unknown: CH₃COOH\". Step chip \"Step 1 of 4: equation\". On \"balanced equation\" the coefficients on the strip pulse \"1 : 1\" and the ratio box fills \"1 : 1\". Step chip \"Step 2 of 4: n(known)\". On \"n equals c V\" the line \"n(NaOH) = c × V\" writes with a grey tag \"V in litres: 18.57 mL = 0.01857 L\" (dims); on \"nine point two eight five\" the line \"= 0.5000 × 0.01857 = 9.285 × 10⁻³ mol\" writes and the known box fills \"9.285 × 10⁻³ mol\". Bright at the end: the strip, the givens card and the known box. Hold about 1 second. Hold about 1 second.",
        [
            "HandText write-on",
            "chip pop",
            "DrawPath",
            "table build"
        ],
        "Hold about 1 second"
    ],
    "we1-concentration": [
        "new",
        "step chip \"Step 3 of 4: ratio\".",
        "Worked example 1: ratio and concentration: Third, the mole ratio.",
        "ethanoic acid / zero point nine two eight five / five point six",
        "On the spoken cues: On \"ethanoic acid\" an arrow runs through the ratio box and the unknown box fills \"n(CH₃COOH) = 9.285 × 10⁻³ mol\" (the n(NaOH) lines dim). Step chip \"Step 4 of 4: c(unknown)\". The line \"c = n ÷ V = 9.285 × 10⁻³ ÷ 0.01000\" writes; on \"zero point nine two eight five\" it completes \"= 0.9285 mol/L\" and the answer chip \"c(CH₃COOH) = 0.9285 mol/L\" pins, with a small grey tag \"data to 4 s.f. → 4 s.f.\" (dims). On \"five point",
        "explain",
        "step chip \"Step 3 of 4: ratio\". On \"ethanoic acid\" an arrow runs through the ratio box and the unknown box fills \"n(CH₃COOH) = 9.285 × 10⁻³ mol\" (the n(NaOH) lines dim). Step chip \"Step 4 of 4: c(unknown)\". The line \"c = n ÷ V = 9.285 × 10⁻³ ÷ 0.01000\" writes; on \"zero point nine two eight five\" it completes \"= 0.9285 mol/L\" and the answer chip \"c(CH₃COOH) = 0.9285 mol/L\" pins, with a small grey tag \"data to 4 s.f. → 4 s.f.\" (dims). On \"five point six\" the vinegar plate returns small with a tag \"0.9285 mol/L × 60.05 g/mol = 55.8 g/L ≈ 5.6 g per 100 mL\" beside its \"5% acidity (5 g per 100 mL)\" label; the step lines dim. Bright at the end: the answer chip and the vinegar tag. Hold about 2 seconds. Hold about 2 seconds.",
        [
            "HandText write-on",
            "chip pop",
            "DrawPath"
        ],
        "Hold about 2 seconds"
    ],
    "we2-ratio": [
        "new",
        "the board clears to the three zones.",
        "Worked example 2: a two to one ratio: The ratio isn't always one to one.",
        "sodium carbonate / twenty two point four five / two",
        "On the spoken cues: Task line: \"Find c(HCl)\". The apparatus thumbnail at the right now shows the burette labelled \"unknown\" (amber) and the flask labelled \"standard\" (navy), tag \"indicator: methyl orange\" (grey, dims before the givens card writes). On \"sodium carbonate\" the givens card writes: \"Na₂CO₃: c = 0.05000 mol/L, V = 25.00 mL\" | \"HCl: titres 22.45, 22.40, 22.50 mL\". On \"twenty two point four five\" the three titres are ringed",
        "explain",
        "the board clears to the three zones. Task line: \"Find c(HCl)\". The apparatus thumbnail at the right now shows the burette labelled \"unknown\" (amber) and the flask labelled \"standard\" (navy), tag \"indicator: methyl orange\" (grey, dims before the givens card writes). On \"sodium carbonate\" the givens card writes: \"Na₂CO₃: c = 0.05000 mol/L, V = 25.00 mL\" | \"HCl: titres 22.45, 22.40, 22.50 mL\". On \"twenty two point four five\" the three titres are ringed (all within 0.10 mL) and the kept chip \"mean titre = 22.45 mL\" writes; the thumbnail dims. On \"two\" the strip writes \"Na₂CO₃(aq) + 2HCl(aq) → 2NaCl(aq) + H₂O(l) + CO₂(g)\", its coefficients pulse \"1 : 2\", and the mole bridge redraws with the ratio box filled \"1 Na₂CO₃ : 2 HCl\"; a small grey tag \"CO₃²⁻ accepts two protons\" (dims). Bright at the end: the strip, the givens card and the ratio box. Hold about 1 second. Hold about 1 second.",
        [
            "HandText write-on",
            "ScribbleCircle",
            "chip pop"
        ],
        "Hold about 1 second"
    ],
    "we2-burette-unknown": [
        "new",
        "on \"one point two five zero\" the line \"n(Na₂CO₃) = 0.05000 × 0.02500 = 1.250 × 10⁻³ mol\" writes and fills the known box.",
        "Worked example 2: the unknown in the burette: Moles of carbonate: zero point zero five zero zero zero times zero point zero two five zero zero, one point two five zero times ten to the minus three.",
        "one point two five zero times ten to the minus three / two point five zero zero times ten to the minus three / zero point one one one four / unknown",
        "On the spoken cues: On \"two point five zero zero\" the line \"n(HCl) = 2 × 1.250 × 10⁻³ = 2.500 × 10⁻³ mol\" writes and fills the unknown box (the first line dims). On \"zero point one one one four\" the line \"c(HCl) = 2.500 × 10⁻³ ÷ 0.02245 = 0.1114 mol/L\" writes, the burette thumbnail's titre bracket pulses on \"divide by the titre\", and the answer chip \"c(HCl) = 0.1114 mol/L\" pins. On \"unknown\" the mole bridge's three boxes light left to",
        "explain",
        "on \"one point two five zero\" the line \"n(Na₂CO₃) = 0.05000 × 0.02500 = 1.250 × 10⁻³ mol\" writes and fills the known box. On \"two point five zero zero\" the line \"n(HCl) = 2 × 1.250 × 10⁻³ = 2.500 × 10⁻³ mol\" writes and fills the unknown box (the first line dims). On \"zero point one one one four\" the line \"c(HCl) = 2.500 × 10⁻³ ÷ 0.02245 = 0.1114 mol/L\" writes, the burette thumbnail's titre bracket pulses on \"divide by the titre\", and the answer chip \"c(HCl) = 0.1114 mol/L\" pins. On \"unknown\" the mole bridge's three boxes light left to right. Bright at the end: the answer chip and the bridge. Hold about 1 second. Hold about 1 second.",
        [
            "HandText write-on",
            "chip pop",
            "DrawPath"
        ],
        "Hold about 1 second"
    ],
    "memory-aid": [
        "new",
        "the board clears.",
        "Memory aid: So here's what to remember.",
        "Known to moles, ratio, unknown. / average only concordant titres",
        "On the spoken cues: The aid writes large and handwritten: \"Known to moles, ratio, unknown.\" with the mole bridge icon under it. On \"average only concordant titres\" the second line writes: \"Average only concordant titres (within 0.10 mL).\" with a tiny concordance strip thumbnail. Each earlier line dims slightly as the next writes.",
        "explain",
        "the board clears. The aid writes large and handwritten: \"Known to moles, ratio, unknown.\" with the mole bridge icon under it. On \"average only concordant titres\" the second line writes: \"Average only concordant titres (within 0.10 mL).\" with a tiny concordance strip thumbnail. Each earlier line dims slightly as the next writes. Hold about 2 seconds. Hold about 2 seconds.",
        [
            "HandText write-on"
        ],
        "Hold about 2 seconds"
    ],
    "attempt-1": [
        "new",
        "the board clears.",
        "Unseen transfer task (attempt 1 (countdown, 10 seconds)) with every given and demand on screen, a 10 second countdown and no answer cues.",
        "Your turn. A twenty five point zero zero",
        "The question card builds with every given visible and stays on screen; no answer cues appear; the countdown ring runs for 10 seconds after \"Pause here to answer.\" (attempt 1 (countdown, 10 seconds))",
        "explain",
        "the board clears. Question card, worded as printed: \"A 25.00 mL aliquot of sulfuric acid, H₂SO₄, of unknown concentration was titrated with 0.1000 mol/L sodium hydroxide solution. The titres were 23.45 mL, 23.70 mL, 23.40 mL and 23.50 mL. Calculate the concentration of the sulfuric acid.\" The full question stays on screen. Countdown ring for 10 seconds with \"Pause here to answer.\" Nothing answer-bearing: no equation strip, no bridge, no aid.",
        [
            "Countdown ring"
        ],
        "10 second answer-free countdown after \"Pause here to answer.\"; the card stays on screen"
    ],
    "feedback-1": [
        "new",
        "the question card stays and shrinks to the top.",
        "Brief feedback (feedback 1 (brief)): the answer, the key reason with the givens underlined, and one crossed classic mistake (owner rule, 16 October).",
        "twenty three point four five / two point three four five times ten to the minus three / one to two / zero point zero four six nine zero",
        "On the spoken cues: On \"twenty three point four five\" the four titres are underlined, 23.70 takes a grey cross and the line \"mean = (23.45 + 23.40 + 23.50) ÷ 3 = 23.45 mL\" writes. On \"two point three four five\" \"0.1000 mol/L\" is underlined and \"n(NaOH) = 0.1000 × 0.02345 = 2.345 × 10⁻³ mol\" writes (the mean line dims). On \"one to two\" \"sulfuric acid, H₂SO₄\" is underlined and the strip writes \"H₂SO₄(aq) + 2NaOH(aq) → Na₂SO₄(aq) +",
        "explain",
        "the question card stays and shrinks to the top. On \"twenty three point four five\" the four titres are underlined, 23.70 takes a grey cross and the line \"mean = (23.45 + 23.40 + 23.50) ÷ 3 = 23.45 mL\" writes. On \"two point three four five\" \"0.1000 mol/L\" is underlined and \"n(NaOH) = 0.1000 × 0.02345 = 2.345 × 10⁻³ mol\" writes (the mean line dims). On \"one to two\" \"sulfuric acid, H₂SO₄\" is underlined and the strip writes \"H₂SO₄(aq) + 2NaOH(aq) → Na₂SO₄(aq) + 2H₂O(l)\", then \"n(H₂SO₄) = 2.345 × 10⁻³ ÷ 2 = 1.1725 × 10⁻³ mol\". On \"zero point zero four six nine zero\" \"25.00 mL aliquot\" is underlined and \"c = 1.1725 × 10⁻³ ÷ 0.02500 = 0.04690 mol/L\" writes; answer chip \"c(H₂SO₄) = 0.04690 mol/L\" pins. On \"doubles\" a chip \"1 : 1, so c = 0.09380 mol/L\" fades in and is crossed (caption \"read the ratio from the equation\"). Hold about 1 second. Hold about 1 second.",
        [
            "HandText write-on",
            "Mark cross",
            "chip pop",
            "Mark underline"
        ],
        "Hold about 1 second"
    ],
    "attempt-2": [
        "new",
        "question card: \"Two conical flasks each contain a 25.00 mL aliquot of an acid.",
        "Unseen transfer task (attempt 2 (countdown, 10 seconds)) with every given and demand on screen, a 10 second countdown and no answer cues.",
        "Last one. Two flasks each hold twenty five",
        "The question card builds with every given visible and stays on screen; no answer cues appear; the countdown ring runs for 10 seconds after \"Pause here to answer.\" (attempt 2 (countdown, 10 seconds))",
        "explain",
        "question card: \"Two conical flasks each contain a 25.00 mL aliquot of an acid. Flask A contains 0.100 mol/L hydrochloric acid, HCl, and flask B contains 0.100 mol/L ethanoic acid, CH₃COOH. Each is titrated with 0.100 mol/L sodium hydroxide solution. Predict the volume of sodium hydroxide needed to reach the equivalence point in each flask. Explain your prediction, given that the two acids have different pH values.\" The full question stays on screen. Countdown ring for 10 seconds with \"Pause here to answer.\" Nothing answer-bearing: no lens, no bridge.",
        [
            "Cam lens zoom",
            "Countdown ring"
        ],
        "10 second answer-free countdown after \"Pause here to answer.\"; the card stays on screen"
    ],
    "feedback-2": [
        "new",
        "the question card stays.",
        "Brief feedback (feedback 2 (brief)): the answer, the key reason with the givens underlined, and one crossed classic mistake (owner rule, 16 October).",
        "twenty five point zero / two point five zero times ten to the minus three / ionise / less",
        "On the spoken cues: On \"twenty five point zero\" \"25.00 mL aliquot\" and the three \"0.100 mol/L\" values are underlined and the answer chip \"A: 25.0 mL | B: 25.0 mL\" pins. On \"two point five zero\" the line \"n(acid) = 0.100 × 0.02500 = 2.50 × 10⁻³ mol in each; V(NaOH) = 2.50 × 10⁻³ ÷ 0.100 = 0.0250 L\" writes. On \"ionise\" a small lens thumbnail (scene 3) replays: amber molecules giving up protons to violet OH⁻ until none are left;",
        "explain",
        "the question card stays. On \"twenty five point zero\" \"25.00 mL aliquot\" and the three \"0.100 mol/L\" values are underlined and the answer chip \"A: 25.0 mL | B: 25.0 mL\" pins. On \"two point five zero\" the line \"n(acid) = 0.100 × 0.02500 = 2.50 × 10⁻³ mol in each; V(NaOH) = 2.50 × 10⁻³ ÷ 0.100 = 0.0250 L\" writes. On \"ionise\" a small lens thumbnail (scene 3) replays: amber molecules giving up protons to violet OH⁻ until none are left; \"different pH values\" is underlined. On \"less\" a chip \"B needs less NaOH: only partly ionised\" fades in and is crossed (caption \"titre counts moles, not strength\"). Hold about 1 second. Hold about 1 second.",
        [
            "HandText write-on",
            "Mark cross",
            "chip pop",
            "Mark underline",
            "Cam lens zoom"
        ],
        "Hold about 1 second"
    ],
    "decision-rule": [
        "adjust",
        "the question card writes, each line lighting on its words (lines 3 and 4 light together on \"known to moles, ratio, unknown\"): \"1 Concordant titres only (within 0.10 mL); average them.\"",
        "Decision rule and handoff: So for any titration: average only the concordant titres, write the balanced equation, then go known to moles, ratio, unknown.",
        "Next",
        "On the spoken cues: \"2 Balanced equation → mole ratio.\" \"3 n(known) = c × V (V in L).\" \"4 n(unknown) from the ratio; c(unknown) = n ÷ V.\" On \"Next\" a chip \"Next: titration in the lab\" appears with a small `m6-burette-clamp-stand-v1.png`.",
        "explain",
        "the question card writes, each line lighting on its words (lines 3 and 4 light together on \"known to moles, ratio, unknown\"): \"1 Concordant titres only (within 0.10 mL); average them.\" \"2 Balanced equation → mole ratio.\" \"3 n(known) = c × V (V in L).\" \"4 n(unknown) from the ratio; c(unknown) = n ÷ V.\" On \"Next\" a chip \"Next: titration in the lab\" appears with a small `m6-burette-clamp-stand-v1.png`. Hold about 2 seconds. Hold about 2 seconds.",
        [
            "HandText write-on",
            "chip pop",
            "Plate"
        ],
        "Hold about 2 seconds"
    ],
    "key-notes": [
        "new",
        "Key notes card with the numbered notes, the memory aid in large writing and its condition tag",
        "Essentials to copy into books",
        "key notes",
        "Notes appear then stay still for copying",
        "hold",
        "The notes and the memory aid appear and lock",
        [
            "Enter reveals"
        ],
        "Quiet copy hold of about 60 seconds with pause invitation"
    ]
}

# END generated rows: m6c11-m6c12


LESSONS = {
    'c5': {
        'design': D + 'lessons/chem-m5-c05.md',
        'meta': {'title': 'Writing and interpreting equilibrium expressions', 'subtitle': 'When a settled mixture changes all its amounts, what stays the same, and how do you write it for any reaction?', 'subject': 'Chemistry', 'yearLevel': 12, 'module': 5, 'lesson': 7,
                 'lessonIntent': 'State that a fixed-temperature equilibrium has a constant concentration ratio called K, write the expression for a balanced equation with coefficients as powers and pure solids, pure liquids and the solvent left out, and read a large, small or middling K.'},
        'hold_seconds': 10,
        'ids': ['hook', 'ratio-name', 'any-equation', 'from-scratch', 'left-out', 'size-of-k', 'memory-aid', 'attempt', 'feedback-one', 'feedback-two', 'decision-rule', 'key-notes'],
        'progression': {
            'prerequisiteKnowledge': 'C1 to C4B and Year 11: dynamic equilibrium means equal non-zero rates in a closed system; each rate depends on how often the reacting particles meet; a disturbance takes the mixture to a new settled mixture with different amounts; the C3 iron thiocyanate and cobalt tubes and the C4 hydrogen and iodine tube; pure solids do not count in a squeeze (C4A); concentration is amount per volume; coefficients count particles in a balanced equation; state symbols. Nothing about K, Q or ICE tables is assumed.',
            'startsWith': 'The iron thiocyanate tube settled at 10, 10, 10 and again at 15, 8, 12 after more iron is added, where every amount has changed but one ratio has not.',
            'stopsAfter': 'Stating that a fixed-temperature equilibrium has a constant concentration ratio and naming it K; writing the expression for a homogeneous solution reaction (and gas cases) from a balanced equation, with coefficients as powers and pure liquids and solids left out; reading a large, small or middling K for a stated reaction. No calculation of K from data, no ICE tables, no Q, no equation reversal or scaling, no temperature dependence, no Ka or Ksp.',
            'nextLesson': 'C6: when only the starting amounts are known, finding the settled mixture and K with an ICE table (the method is not named in this video).'},
        'teaching': {
            'task': 'Explain why the concentration ratio of a settled mixture stays constant, write the equilibrium expression for a balanced equation, and read the size of K.',
            'causalExplanation': 'Each rate is a fixed number times the concentrations of the particles that must meet, and at equilibrium the two rates are equal, so dividing both sides leaves a ratio of fixed numbers that holds at one temperature. This ratio is K. When a species has a coefficient above one, that many particles must meet, so its concentration appears that many times over, which becomes a power. A pure solid or a solvent has a concentration that does not change, so it folds into the fixed numbers and is left out. K is products over reactants, so a large K means the settled mixture leans to products, and it says where the mixture settles, not how fast.',
            'conversationalApproach': 'Opens on the iron tube where every amount changes but one ratio does not, derives the ratio from equal rates on two rate models, tests the product-with-powers form against two mixtures, then writes an expression from scratch for the cobalt tube, explains the left-out solid and solvent, reads K on a number line, and ends with an unseen copper ammonia and made-up A + B attempt.',
            'openingDecision': 'When a settled mixture changes all its amounts, what stays the same, and how do you write it for any reaction?',
            'understandingCheck': 'Write the equilibrium expression for Cu2+(aq) + 4NH3(aq) = [Cu(NH3)4]2+(aq) in dilute aqueous solution, and for A(aq) + B(aq) = C(aq) + D(aq) say what K = 4 tells you about a mixture that starts with equal A and B and no C or D.',
            'curriculumScope': 'Deduce school concentration expressions for homogeneous solution reactions and read the magnitude of the equilibrium constant (Module 5). Calculating K from data, ICE tables, Q, reversing or scaling equations, temperature dependence of K, Ka and Ksp are deferred.'},
        'design_block': {
            'renderer': RENDERER,
            'visualSystem': 'Explainer engine: warm paper stage, handwritten Caveat headings, amber doodle layer, the C3 iron and cobalt tubes and the C4 hot H2 + I2 tube (coded or painted) with C2 to C4B rate bars, a coded expression builder, a fraction bar with a same value tag, and a large versus small K number line. Colour key: Fe3+ pale yellow, SCN- grey, FeSCN2+ red, forward blue, reverse amber, equal teal.',
            'transitionPlan': 'The iron tube shrinks to the corner for the rate bars; the same board carries the divide-both-sides step into the named K; the hot H2 + I2 tube replaces the iron tube for the power of two; the cobalt equation strip fills the board for the from-scratch stages; the beaker and carbon views replace it for the left-out scene; the number line draws on for the size of K; the attempt board removes the aids; the number line returns in the feedback; scene crossfade with settle.'},
        'rows': C5_ROWS,
    },
    'c6': {
        'design': D + 'lessons/chem-m5-c06.md',
        'meta': {'title': 'Calculating K and equilibrium concentrations with an ICE table', 'subtitle': 'How do you turn a starting mixture and one measured value into every equilibrium concentration and K, and what if you start from K?', 'subject': 'Chemistry', 'yearLevel': 12, 'module': 5, 'lesson': 8,
                 'lessonIntent': 'Build an ICE table in three steps, find K from a start and one measured equilibrium value with a check, find equilibrium concentrations from K in a perfect-square case, and state how K changes when the equation is reversed.'},
        'hold_seconds': 10,
        'holds': ['solve'],
        'ids': ['hook', 'ice-initial', 'change-row', 'equilibrium-row', 'find-k', 'k-given', 'unknown-x', 'substitute', 'solve', 'check', 'memory-aid', 'reverse-equation', 'attempt', 'feedback-one', 'feedback-two', 'decision-rule', 'key-notes'],
        'progression': {
            'prerequisiteKnowledge': 'C1 to C5 and Year 11: settled mixtures keep unequal concentrations; the C2 PCl5 flask and the C4b H2, I2 and HI tube; K is products over reactants with coefficients as powers (C5); concentration is moles per litre; coefficients give mole ratios.',
            'startsWith': 'The sealed P C L five flask where only the chlorine concentration is measured at equilibrium, and the question of finding the other two concentrations and K from it.',
            'stopsAfter': 'Building an ICE table in the three steps (initial, change by the coefficients, equilibrium by adding); finding K from a start plus one measured equilibrium value, with a check; finding equilibrium concentrations from K in a perfect-square case; stating how K changes if the equation is reversed (and, in the notes, if every coefficient is multiplied). No Q, no direction prediction, no temperature dependence, no quadratic formula, no small-x approximation, no acid or Ksp calculations.',
            'nextLesson': 'C7: why factories do not wait for equilibrium (industrial trade-offs).'},
        'teaching': {
            'task': 'Build an ICE table from a starting mixture and one measured equilibrium value to find K, and use K and a start to find the settled concentrations.',
            'causalExplanation': 'Each substance changes by an amount fixed by the balanced equation, so once the change in one substance is known the others follow by the coefficients, with used up as minus and made as plus. The equilibrium row is the initial row plus the change row, and K uses only equilibrium values. When K is known and the change is called x, substituting into K gives an equation that can be solved, and in the perfect-square case a square root gives x, with the negative root rejected because it makes a concentration negative. K belongs to the equation as written, so reversing the equation gives one over K.',
            'conversationalApproach': 'One measured value in the PCl5 flask, a three-row ICE table filled one row at a time, then the other direction with the hot H2 and I2 tube, a habit that only the change row follows the coefficients, a short flip of the equation, and an unseen N2O4 attempt with two parts.',
            'openingDecision': 'Can we work out the other two concentrations and K from one measured value?',
            'understandingCheck': 'For 0.100 mol of N2O4 sealed in 2.00 L with [NO2] = 0.0300 mol/L at equilibrium: find K for N2O4 = 2NO2, and find K for 2NO2 = N2O4 at the same temperature.',
            'curriculumScope': 'Calculate equilibrium constants and equilibrium concentrations from supplied data using an ICE table (Module 5). Q, direction prediction, temperature dependence, the quadratic formula, small-x approximations and acid or Ksp calculations are deferred.'},
        'design_block': {
            'renderer': RENDERER,
            'visualSystem': 'Explainer engine: warm paper stage, handwritten Caveat headings, amber doodle layer, the painted or coded C2 PCl5 flask and the C4B hot H2 + I2 tube with coded particle views, a coded ICE table with row and column labels, the C5 expression builder and a grouped givens card with units. Colour key: PCl5 navy, PCl3 violet, Cl2 green, made plus and used up minus in separate highlight colours, forward blue, reverse amber, equal teal.',
            'transitionPlan': 'The flask sits beside the empty ICE table and fills row by row; a camera push slides the PCl5 board away for the H2 + I2 board in the same three zones; the algebra line moves up and transforms one stage at a time; the finished table returns under the memory aid; the equation strip flips for the reversal; the attempt board removes the aids and the feedback rebuilds the table; scene crossfade with settle.'},
        'rows': C6_ROWS,
    },
    'c7': {
        'design': D + 'lessons/chem-m5-c07.md',
        'meta': {'title': 'Industrial equilibrium: why factories compromise', 'subtitle': 'Why does industry choose conditions that do not give the highest equilibrium yield?', 'subject': 'Chemistry', 'yearLevel': 12, 'module': 5, 'lesson': 9,
                 'lessonIntent': 'Tell equilibrium yield from rate and from cost and safety limits, justify stated temperature, pressure, catalyst and removal for an exothermic fewer-gas-particle reaction in a staged written answer, and explain why a plant removes product and recycles the rest.'},
        'hold_seconds': 10,
        'ids': ['hook', 'yield', 'time-in-reactor', 'three-temperatures', 'catalyst-speed', 'pressure-limit', 'recycle', 'model-answer', 'memory-aid', 'attempt', 'feedback-temperature', 'feedback-pressure-removal', 'decision-rule', 'key-notes'],
        'progression': {
            'prerequisiteKnowledge': 'C1 to C6 and Year 11: cooling, squeezing and removing a product each shift an exothermic, fewer-gas-particle reaction toward product (C3, C4a); a catalyst changes the speed, not the destination, and can give more product in a limited time (C4b); both rates fall when the mixture is cooled, because fewer collisions have enough energy (C3); concentration is crowding (C2, C4a).',
            'startsWith': 'The Haber process running hot at about 450 degrees Celsius and about 200 atmospheres, although cooling and squeezing would shift the settled mixture further toward ammonia.',
            'stopsAfter': 'Telling the equilibrium yield (where the mixture settles) from the rate (how soon) and from the cost and safety limits; justifying a stated temperature, pressure, catalyst and removal for an exothermic, fewer-gas-particle reaction in a staged written answer; explaining why a plant removes product and recycles the rest; and noting that the temperature compromise exists only when the forward reaction gives out heat. No K values, no Q, no calculation of yields, no temperature dependence of K, no Contact process, no history.',
            'nextLesson': 'G02: reading equilibrium graphs you have not seen before.'},
        'teaching': {
            'task': 'Justify the temperature, pressure, catalyst and product removal used in an industrial equilibrium process by what each does to the yield and the rate and what limits it.',
            'causalExplanation': 'Cooling and squeezing raise the yield of an exothermic, fewer-gas-particle reaction, but a factory is paid for what leaves the reactor in the time available. Cooling slows both rates because fewer collisions have enough energy, so the best temperature in the time available is a middle one. A catalyst lowers the activation energy in both directions, so it changes the speed and not the settled mixture. Pressure raises the rates and the yield, but each step buys less extra product and costs more in equipment, energy and safety. Taking the product out keeps the reverse rate low so the forward reaction stays ahead, and recycling reuses the unreacted gas.',
            'conversationalApproach': 'Opens with the surprise that real plants run at conditions that give less ammonia, separates yield from rate with three curves on one time plot, shows the catalyst fixing speed and not the ceiling, weighs pressure against cost, follows the plant loop, models a staged answer one cell at a time, and tests an unseen methanol case.',
            'openingDecision': 'Why does a plant choose conditions that make less ammonia in the settled mixture?',
            'understandingCheck': 'For methanol made from CO and 2H2 with the forward reaction giving out 91 kJ per mole: justify about 250 degrees Celsius, 50 to 100 atmospheres and removing the methanol, and answer a student who claims 25 degrees and 500 atmospheres give the highest yield.',
            'curriculumScope': 'Explain how industrial processes use equilibrium principles and the trade-offs among yield, rate, cost and safety (Module 5). K values, Q, yield calculations, the temperature dependence of K, the Contact process and history are deferred.'},
        'design_block': {
            'renderer': RENDERER,
            'visualSystem': 'Explainer engine: warm paper stage, handwritten Caveat headings, amber doodle layer, a painted converter tower or coded plant outline, a coded dashboard of sliders and gauges, a time plot of three curves, a pressure axis with paired bars, a coded plant loop and a Yield, Rate and Limit answer frame. Colour key: yield green, rate blue, limit red, ammonia green dots, nitrogen navy, hydrogen pale grey, iron metallic grey.',
            'transitionPlan': 'The tower push gives way to the dashboard; the dashboard shrinks away for the reactor pipe; the time plot draws on and keeps the vertical line; the plot clears for the pressure axis; the plant loop replaces the plot; the answer frame fills a cell at a time; the attempt board removes the aids and the feedback fills the same lines; the next chips slide in for the later K video and the graphs video; scene crossfade with settle.'},
        'rows': C7_ROWS,
    },
    'c8': {
        'design': D + 'lessons/chem-m5-c08.md',
        'meta': {'title': 'The reaction quotient, Q: which way will the mixture run?', 'subtitle': 'Given a mixture that has not settled, and the K for that temperature, how can you tell which way it will run before anything changes?', 'subject': 'Chemistry', 'yearLevel': 12, 'module': 5, 'lesson': 10,
                 'lessonIntent': 'Write Q for an equation and calculate it from supplied concentrations, compare Q with K at the same temperature to state the direction with the rate reason, and explain that a disturbance changes Q and not K.'},
        'hold_seconds': 10,
        'holds': ['other-side'],
        'ids': ['hook', 'q-fraction', 'calculate-q', 'compare-q-k', 'rate-link', 'q-chases-k', 'other-side', 'other-side-answer', 'q-equals-k', 'disturbance', 'k-unchanged', 'attempt', 'feedback', 'decision-rule', 'key-notes'],
        'progression': {
            'prerequisiteKnowledge': 'C1 to C6 and Year 11: dynamic equilibrium and equal rates; the faster rate falls and the slower rate rises (C2); the C4b and C6 H2 + I2 tubes; K as a products-over-reactants fraction with coefficient powers (C5); the C6 settled tube 0.10, 0.10, 0.70 with K = 49 and equilibrium values only for K; concentration in mol/L; the rate model with fixed numbers (C5).',
            'startsWith': 'The hot H2 + I2 tube at K = 49, freshly mixed at 0.20, 0.20 and 0.50 mol/L before it has settled, and the question of which way it will run.',
            'stopsAfter': 'Writing Q for an equation and calculating it from supplied concentrations; comparing Q with K at the same temperature and stating the direction with the rate reason; saying that Q = K means equal rates and no net change; saying that a disturbance changes Q and not K; using the five steps on an unseen mixture. No how-far calculation, no ICE table, no quadratic, no temperature dependence, no Qsp.',
            'nextLesson': 'G03: harder ICE tables and Q decisions.'},
        'teaching': {
            'task': 'Calculate the reaction quotient Q for a mixture that has not settled, compare it with K at the same temperature, and state which way the mixture will run and why.',
            'causalExplanation': 'Q is the K fraction with the concentrations from the moment in question. Q below K means less product than a settled mixture at this temperature, so with more reactant particles to collide the forward reaction is faster and the mixture makes more product until Q reaches K; Q above K means too much product, so the reverse reaction is faster. A disturbance changes Q, not K',
            'conversationalApproach': 'A freshly mixed hot H2 and I2 tube asks which way it will run, Q is built from the K fraction and calculated in three beats, compared with K on a log number line, tied to the rates by comparing the live tube with a settled tube, tested on the other side with a short thinking hold, linked back to the disturbance videos, and checked on an unseen ammonia mixture.',
            'openingDecision': 'Will the freshly mixed tube make more hydrogen iodide or break some down, and can we know before anything moves?',
            'understandingCheck': 'For N2 + 3H2 = 2NH3 at 400 degrees Celsius with K = 0.50 and [N2] = 0.40, [H2] = 0.50, [NH3] = 0.20 mol/L: write and calculate Q, and say whether more or less ammonia forms and why.',
            'curriculumScope': 'Calculate the reaction quotient and compare it with K to predict the direction of change (Module 5). How far the mixture moves, ICE tables for the harder cases, the temperature dependence of K and Qsp are deferred.'},
        'design_block': {
            'renderer': RENDERER,
            'visualSystem': 'Explainer engine: warm paper stage, handwritten Caveat headings, amber doodle layer, the C4B hot H2 + I2 tube with a coded particle view, the C5 expression builder, a coded log number line with K and Q markers, C2 to C6 rate bars, and a grouped givens card. Colour key: K marker teal, Q marker in the pen colour, forward blue, reverse amber, equal teal.',
            'transitionPlan': 'The hot tube and givens card set the first mixture; the K fraction and the Q fraction sit side by side; the log number line draws on and keeps its markers through the next scenes; a fresh board in the same zones carries the other-side tube; the settled tube returns for the disturbance; the attempt board removes the aids and the feedback rebuilds Q and the number line; the next chip slides in for the harder cases; scene crossfade with settle.'},
        'rows': C8_ROWS,
    },
    'c6a': {
        'design': D + 'lessons/chem-m5-c06a.md',
        'meta': {'title': 'Calculating K: the three question types, and ICE tables', 'subtitle': 'When a question asks you to calculate K, how do you tell which type it is, and how do you fill an ICE table from a start and one measured value?', 'subject': 'Chemistry', 'yearLevel': 12, 'module': 5, 'lesson': 8,
                 'lessonIntent': 'Tell the three types of K calculation apart by what the question gives, find K by direct substitution (type one) and from a start plus one measured equilibrium value with an ICE table built measured value first (type two), and state how K changes when the equation is reversed or its coefficients are multiplied.'},
        'hold_seconds': 10,
        'ids': ['hook-types', 'type-one', 'reverse-equation', 'type-two', 'one-value', 'ice-initial', 'equilibrium-first', 'change-row', 'equilibrium-row', 'find-k', 'memory-aid', 'attempt', 'feedback-one', 'feedback-slips', 'feedback-two', 'decision-rule', 'key-notes'],
        'progression': {
            'prerequisiteKnowledge': 'C1 to C5 and Year 11: K as products over reactants with coefficients as powers, solids and the solvent left out, and the size of K (C5); the C2 PCl5 flask (0.20 mol/L start, settling at 0.12, 0.080, 0.080); the C4b hot H2 + I2 tube (dots 9, 9, 0 settling at 2, 2, 14); concentration is moles divided by litres; coefficients give mole ratios. Nothing about ICE tables or x is assumed.',
            'startsWith': 'The question of which of three types a K calculation is, decided by what the question gives.',
            'stopsAfter': 'Finding K for type one (every equilibrium concentration given) and type two (the start and one equilibrium value given, with the measured value in the Equilibrium row first, the change as equilibrium minus initial, the other changes from the coefficients, and a check), and saying how K changes when the equation is reversed or its coefficients are multiplied. No type three (C6b), no Q (C8), no temperature dependence (C9).',
            'nextLesson': 'C6b: type three, finding equilibrium concentrations from K and a start.'},
        'teaching': {
            'task': 'Tell which of three types a K calculation is, and find K for a start plus one measured equilibrium value with an ICE table.',
            'causalExplanation': 'K needs every equilibrium concentration, and a question may give them all, give one, or give none, so what the question gives decides the method. K uses concentrations, so moles are divided by litres first. The measured value goes in the Equilibrium row and its change is equilibrium minus initial, because the change is how far it moved from the start. The other changes follow the coefficients, because each splitting event uses and makes whole particles in the ratio of the equation, with used up as minus and made as plus. Every other equilibrium value is initial plus change, and K uses the equilibrium row only. K belongs to the equation as written, so reversing it gives one over K and multiplying every coefficient by n raises K to the power n.',
            'conversationalApproach': 'Opens by naming three types by what the question gives, does the quickest type on the settled H2 + I2 tube with a reversal, then takes the PCl5 flask one stage per scene with the measured value first, adds two habits, and tests an unseen N2O4 question with a reversal, with feedback that names the likely wrong numbers.',
            'openingDecision': 'When a question asks you to calculate K, how do you tell which type it is?',
            'understandingCheck': 'For 0.100 mol of N2O4 sealed in 2.00 L with [NO2] = 0.0300 mol/L at equilibrium: find K for N2O4 = 2NO2, and find K for 2NO2 = N2O4 at the same temperature.',
            'curriculumScope': 'Calculate equilibrium constants from supplied data using an ICE table (Module 5). Type three (C6b), Q, direction prediction, temperature dependence, acid and Ksp calculations are deferred.'},
        'design_block': {
            'renderer': RENDERER,
            'visualSystem': 'Explainer engine: warm paper stage, handwritten Caveat headings, amber doodle layer, the painted C2 PCl5 flask and N2O4 vessel, the C4B hot H2 + I2 tube, coded type cards with mini ICE tables, the coded ICE table with row and column labels, the C5 expression builder and a grouped givens card with units. Colour key: PCl5 navy, PCl3 violet, Cl2 green, H2 and HI pale grey, I2 purple, N2O4 pale grey, NO2 brown, made plus green, used up minus red, K teal.',
            'transitionPlan': 'The type cards give way to the type one tube and the reversal on the same board; the cards return briefly and slide to the task line for the PCl5 flask; the flask sits beside the ICE table, which fills one stage per scene; the finished table carries the two habits; the attempt board removes the aids and the feedback rebuilds the table in the same order; the cards return for the decision rule with card three dimmed; scene crossfade with settle.'},
        'rows': C6A_ROWS,
    },
    'c6b': {
        'design': D + 'lessons/chem-m5-c06b.md',
        'meta': {'title': 'Finding equilibrium concentrations from K, without the quadratic formula', 'subtitle': 'If a question gives you K and the start, how do you find the equilibrium concentrations, and which shortcut gets you there without the quadratic formula?', 'subject': 'Chemistry', 'yearLevel': 12, 'module': 5, 'lesson': 8,
                 'lessonIntent': 'Set up type three with an unknown x and the change row from the coefficients, solve a perfect-square case with the positive root, solve a tiny-K case by dropping x with a stated condition and a 5 per cent check, and explain that HSC questions are written so you should not need the quadratic formula (it can be used): look for a perfect square or a tiny K.'},
        'hold_seconds': 10,
        'holds': ['solve'],
        'ids': ['hook', 'k-given', 'unknown-x', 'substitute', 'solve', 'check', 'memory-aid', 'square-condition', 'tiny-k-setup', 'tiny-k-drop', 'tiny-k-solve', 'tiny-k-check', 'no-quadratic', 'attempt', 'feedback-square', 'feedback-tiny-k', 'feedback-slips', 'decision-rule', 'key-notes'],
        'progression': {
            'prerequisiteKnowledge': 'C1 to C5, C6a and Year 11: the three types of K calculation and the ICE table (C6a); the settled H2 + I2 tube 0.10, 0.10, 0.70 with K = 49 (C6a type one); K expressions with coefficients as powers (C5); concentration in mol/L; rearranging a linear equation and taking a square root. The quadratic formula is neither needed nor assumed.',
            'startsWith': 'K and a start are given, nothing at equilibrium is measured, so the change has to be an unknown x.',
            'stopsAfter': 'Setting up x from the coefficients; solving a perfect-square case with the positive root and rejecting the negative root; solving a tiny-K case by dropping x with a stated condition and a 5 per cent check; saying that HSC questions are written so you should not need the quadratic formula, and which two shortcuts to look for. No huge-K or product-start case (G03), no Q (C8), no temperature dependence (C9).',
            'nextLesson': 'C7: why factories do not wait for equilibrium (industrial trade-offs).'},
        'teaching': {
            'task': 'Find the equilibrium concentrations from K and a start, choosing between a square root and dropping x without the quadratic formula.',
            'causalExplanation': 'When K and the start are given, nothing at equilibrium is measured, so the change is an unknown x and the coefficients give the change row from it. The equilibrium row is initial plus change, substituted into K. When the top and the bottom of K are both squares (here because H2 and I2 started equal), the whole fraction is squared and a square root removes the powers, keeping the positive root because concentrations are positive; K itself need not be a square number. When K is tiny and the start is not, hardly any reactant changes, so x is tiny next to the start, start minus x is about the start, and x can be dropped from the bottom but kept where it is the answer. The shortcut is an assumption, so x is checked against about 5 per cent of the start and the answer is substituted back into K.',
            'conversationalApproach': 'Opens by saying why nothing measured makes the change an unknown, reuses the H2 + I2 perfect-square example with a 10 second try-it, explains why the root worked, teaches the tiny-K case on hot iodine one stage per scene with a ruler picture of the check, says plainly that you can use the quadratic formula but HSC questions are written so you should not need it, and tests an unseen N2 + O2 case where both shortcuts work and agree.',
            'openingDecision': 'If a question gives you K and the start, how do you find the equilibrium concentrations?',
            'understandingCheck': 'For N2 + O2 = 2NO with K = 4.0 x 10^-4, a start of 0.50 mol/L N2 and 0.50 mol/L O2 and no NO: find the equilibrium concentration of NO.',
            'curriculumScope': 'Calculate equilibrium concentrations from K and supplied starting data using an ICE table (Module 5). Huge-K and product-start cases (G03), Q, temperature dependence, weak acid Ka (Module 6) and the quadratic formula are deferred.'},
        'design_block': {
            'renderer': RENDERER,
            'visualSystem': 'Explainer engine: warm paper stage, handwritten Caveat headings, amber doodle layer, the C6a type cards, the C6 ICE table and algebra line, the C4B hot H2 + I2 tube, a coded hot iodine tube, the check ruler (a bar for the start with a sliver for x and a dashed 5 per cent line), the two-shortcut card and a coded engine cylinder. Colour key: H2 and HI pale grey, I2 purple, I atoms lighter violet, N2 navy, O2 red-orange, NO pale brown, made plus green, used up minus red, K teal.',
            'transitionPlan': 'The type cards lift card three to the task line; a camera push brings the H2 + I2 board and the algebra line moves up one stage at a time; the square-root equation returns for the condition; a fresh board in the same zones carries the iodine case, with the check ruler drawn under the equation; the two-shortcut card closes the teaching and is removed for the attempt; the feedback splits the board into two columns, one route per scene; the cards return for the decision rule; scene crossfade with settle.'},
        'rows': C6B_ROWS,
    },
    'g03': {
        'design': D + 'lessons/chem-m5-g03.md',
        'learning_review': D + 'checks/g03-rev5-learning-review.md',
        'science_check': D + 'checks/g03-rev5-science-check.md',
        'meta': {'title': 'Every type of HSC equilibrium question, part 2: calculations', 'subtitle': 'You are given a calculation question you have not seen. How do you know which method to use, and where do students lose the answer?', 'subject': 'Chemistry', 'yearLevel': 12, 'module': 5, 'lesson': 12,
                 'lessonIntent': 'Choose the method for an equilibrium calculation from what is given and what is asked, work through the five types (settled amounts, a start plus one settled value, K and a start with a tested shortcut, a mixture and K for direction, and an amount added), and name the classic slip on each.'},
        'hold_seconds': 10,
        'holds': ['tiny-k-question', 'q-vs-k-question', 'addition-k-equation'],
        'ids': ['hook-board', 'direct-k', 'ice-one-value', 'tiny-k-question', 'tiny-k-setup', 'tiny-k-solve-and-test', 'huge-k-setup', 'huge-k-solve', 'huge-k-test-and-reactant-start', 'q-vs-k-question', 'q-vs-k-answer', 'addition-setup', 'addition-ice-table', 'addition-k-equation', 'addition-answer-and-slips', 'attempt', 'feedback', 'decision-board', 'key-notes'],
        'progression': {
            'prerequisiteKnowledge': 'C1 to C8 (including C6a and C6b) and Year 11: K expressions with powers and without solids and water (C5); the three calculation types, ICE tables with the measured value in the Equilibrium row first, and K from a start plus one value (C6a); x from the coefficients, the perfect-square root, the tiny-K drop with its 5 per cent check, and that the quadratic formula is never needed (C6b); Q and the Q against K rule (C8); the effect of adding a reactant (C3); mole ratios, c = n / V, square roots and powers of ten. Nothing about huge-K shortcuts or addition problems is assumed.',
            'startsWith': 'What a calculation question gives and what it asks, and how that decides the method.',
            'stopsAfter': 'Choosing the method from what is given and asked; the working for each of the five types; the classic slip on each; choosing and testing the tiny-K shortcut; the huge-K shortcut with its check, including a one-sentence reactant-start case; an amount-added problem with a vessel that is not 1 L and one with a solid present. No quadratic formula, no colorimetry, no temperature dependence of K.',
            'nextLesson': 'C9: temperature and K.'},
        'teaching': {
            'task': 'Pick the method for an unseen equilibrium calculation from what is given and what is asked, work it through, and avoid the classic slip for that type.',
            'causalExplanation': 'What a question gives and what it asks decide the method. K is a ratio of concentrations, so amounts in a vessel are divided by its volume first. The measured value goes in the Equilibrium row, its change is equilibrium minus initial and the coefficients set the other changes. With K and a start the change is x, and the expression is either a perfect square or has a tiny or huge K, so a shortcut applies and is tested against about 5 per cent of the start. Q has the form of K with the current concentrations, and Q below K means too little product, so the forward reaction wins. An addition changes Q and leaves K alone, so the added substance goes in the initial row as the old equilibrium plus y and is also used up in the change row.',
            'conversationalApproach': 'Opens with five cards for what is given and asked, takes types one to four in short segments with one example and one named slip each (including a pause-and-answer on which shortcut fits and one on direction from Q), spends longest on the amount-added worked example one stage per scene with a try-it, then tests an unseen added-carbon-dioxide case with a solid, and closes with the decision board.',
            'openingDecision': 'You are given an equilibrium calculation you have not seen. How do you know which method to use, and where do students lose the answer?',
            'understandingCheck': 'For C(s) + CO2(g) = 2CO(g) with K = 0.400, a 1.00 L vessel at equilibrium with [CO2] = [CO] = 0.400 mol/L, CO2 added and the new equilibrium [CO] = 0.500 mol/L: find the moles of CO2 added.',
            'curriculumScope': 'Calculate equilibrium constants and concentrations, and use the reaction quotient to predict direction, from supplied data (Module 5). Every question is written for HSCScience and is not presented as an official question. Marks allocation, the quadratic formula, colorimetry, temperature dependence of K, Ksp and acid calculations are deferred.'},
        'design_block': {
            'renderer': RENDERER,
            'visualSystem': 'Explainer engine: warm paper stage, handwritten Caveat headings, amber doodle layer, the C6a type cards extended to five, the C6 ICE table with the equilibrium-row-first pen arrow and E minus I bracket, the C5 expression builder, the C8 log number line, the C6b check ruler and two-shortcut card, and small coded vessel vignettes. Colour key as C2 to C8: forward blue, reverse amber, equal teal, made plus green, used up minus red.',
            'transitionPlan': 'The five-card type board sets the lesson and returns at the end; each type gets a fresh board in the same three zones; the C6b ruler and shortcut card return for the tiny-K and huge-K cases; the log number line returns for Q; the amount-added example runs across four boards with the table and equation kept; the attempt board removes the aids and the feedback rebuilds the table; scene crossfade with settle.'},
        'rows': G03_ROWS,
    },
    'g03a': {
        'design': D + 'lessons/chem-m5-g03a.md',
        'learn_reviewer': 'Claude designer self-review of the G03 split (owner-requested quick review; reused scenes keep the G03 Revision 5 independent review); independent review of the exact voiced preview pending',
        'meta': {'title': 'Every type of HSC equilibrium calculation, part 1: find K and compare Q', 'subtitle': 'A calculation gives you some concentrations or amounts. How do you know whether to find K, build an ICE table, or work out Q?', 'subject': 'Chemistry', 'yearLevel': 12, 'module': 5, 'lesson': 12,
                 'lessonIntent': 'Choose the method from what is given and what is asked, find K from settled amounts and from a start plus one settled value with an ICE table, decide a direction from Q against K with a solid present, and explain why the same numbers give K only for a mixture at equilibrium.'},
        'hold_seconds': 10,
        'holds': ['q-vs-k-question'],
        'ids': ['hook-board', 'direct-k', 'ice-one-value', 'q-vs-k-question', 'q-vs-k-answer', 'attempt', 'feedback', 'decision-board', 'key-notes'],
        'progression': {
            'prerequisiteKnowledge': 'C1 to C8 (including C6a and C6b) and Year 11: K expressions with powers and without solids and water (C5); the three calculation types and ICE tables with the measured value in the Equilibrium row first (C6a); Q and the Q against K rule (C8); mole ratios, c = n / V and powers.',
            'startsWith': 'What a calculation question gives and what it asks, and how that decides the method.',
            'stopsAfter': 'Finding K from settled amounts; finding K from a start plus one settled value with an ICE table; deciding a direction from Q against K with a solid present; saying why the same numbers are K only for an equilibrium mixture. No x, shortcuts or amount added (G03b).',
            'nextLesson': 'G03b: every type of HSC equilibrium calculation, part 2: find concentrations and the amount added.'},
        'teaching': {
            'task': 'Pick the method for an unseen equilibrium calculation that gives concentrations or amounts, find K or compare Q with K, and avoid the classic slip for that type.',
            'causalExplanation': 'What a question gives and what it asks decide the method. K is a ratio of concentrations, so amounts in a vessel are divided by its volume first, and coefficients are powers. The measured value goes in the Equilibrium row, its change is equilibrium minus initial and the coefficients set the other changes; only equilibrium values go into K. Q has the form of K with the current concentrations, and Q below K means too little product, so the forward reaction wins. The same ratio is K only when the mixture is at equilibrium; for any other mixture it is Q, compared with K.',
            'conversationalApproach': 'Opens with the five-card board and lights the three types of part one, takes types one, two and four in short segments with one example and one named slip each, including a pause-and-answer on direction with a solid, then tests the K or Q decision on the first vessel numbers at another temperature, and closes with the decision board and a handoff to part two.',
            'openingDecision': 'A calculation gives you some concentrations or amounts. Do you find K, build an ICE table, or work out Q?',
            'understandingCheck': 'For 2SO2 + O2 = 2SO3 with K = 229 at this temperature, a vessel holds [SO2] = 0.150, [O2] = 0.0750 and [SO3] = 0.300 mol/L: which way will it run?',
            'curriculumScope': 'Calculate equilibrium constants from supplied data and use the reaction quotient to predict direction (Module 5). Every question is written for HSCScience and is not presented as an official question. Concentrations from K, amount-added problems (G03b), marks allocation, temperature dependence of K, Ksp and acid calculations are deferred.'},
        'design_block': {
            'renderer': RENDERER,
            'visualSystem': 'Explainer engine: warm paper stage, handwritten Caveat headings, amber doodle layer, the C6a type cards extended to five with lit and dim states, the C6 ICE table with the equilibrium-row-first pen arrow and E minus I bracket, the C5 expression builder, the C8 log number line and small coded vessel vignettes. Colour key as C2 to C8: forward blue, reverse amber, equal teal, made plus green, used up minus red.',
            'transitionPlan': 'The five-card board sets the lesson and returns at the end; each type gets a fresh board in the same three zones; the scene 2 concentrations stay as a small thumbnail and the scene 3 K as a teal card for the attempt; the log number line returns for Q; the feedback rebuilds the scene 2 line and relabels it; scene crossfade with settle.'},
        'rows': G03A_ROWS,
    },
    'g03b': {
        'design': D + 'lessons/chem-m5-g03b.md',
        'learn_reviewer': 'Claude designer self-review of Revision 2 (owner decision 16 Oct: five-type map moved in from the dropped G03a, tiny K cut); reused scenes keep the G03 Revision 5 independent review; independent review of the exact voiced preview pending',
        'meta': {'title': 'All 5 types of HSC equilibrium calculation (plus huge K and amount added)', 'subtitle': 'Every HSC equilibrium calculation is one of five types. How do you tell which one you have, and how do you do huge K and an amount added?', 'subject': 'Chemistry', 'yearLevel': 12, 'module': 5, 'lesson': 12,
                 'lessonIntent': 'Name all five types of equilibrium calculation from what a question gives and asks, use the huge-K shortcut and test it, and solve an amount-added problem with the added substance in the initial row, K unchanged and the answer converted to moles.'},
        'hold_seconds': 10,
        'holds': ['addition-k-equation'],
        'ids': ['hook-board', 'type-three-recall', 'huge-k-setup', 'huge-k-solve', 'huge-k-test-and-reactant-start', 'addition-setup', 'addition-ice-table', 'addition-k-equation', 'addition-answer-and-slips', 'decision-board', 'key-notes'],
        'progression': {
            'prerequisiteKnowledge': 'C6a, C6b and C8 (with C1 to C7) and Year 11: the three calculation types and ICE tables (I for initial, C for change, E for equilibrium) with the measured value in the Equilibrium row first (C6a); x from the coefficients, the perfect-square root, the tiny-K drop with its 5 per cent check, and multiply both sides by the bottom then divide (C6b); Q and the Q against K rule (C8); the effect of adding a reactant (C3); c = n / V, square and cube roots and powers of ten. Nothing about huge-K shortcuts or addition problems is assumed.',
            'startsWith': 'Three types of calculation from the C6 videos, two more that turn up in HSC questions, five in all.',
            'stopsAfter': 'Naming all five types from what a question gives and asks; the huge-K shortcut with its check, including a one-sentence reactant-start case; an amount-added problem in a vessel that is not 1 L, answered in moles. Types 1, 2 and 4 and the perfect-square and tiny-K cases are recalled, not re-taught; no colorimetry, no temperature dependence of K.',
            'nextLesson': 'G03c: equilibrium calculations, HSC-style practice, part 1.'},
        'teaching': {
            'task': 'Tell which of the five types an equilibrium calculation is from what it gives and asks, and do the two cases not met before: a huge K and an amount added.',
            'causalExplanation': 'What a question gives and what it asks decide the type. With K and a start the change is x; a tiny K means hardly any reactant changes, so x is dropped from start minus x and tested. A huge K is the mirror image: the reaction runs almost fully to products, so the small unknown is what is left of the reactants, tested the same way. An addition changes Q and leaves K alone, so the added substance goes in the initial row as the old equilibrium plus y, the new value goes in the Equilibrium row first and gives the change, the added substance is also used up in the change row, and the old K is reused; y in mol/L is multiplied by the volume to give moles.',
            'conversationalApproach': 'Opens by saying the C6 videos met three types and two more turn up in HSC questions, naming all five once with what each gives and finds and where it was taught, recalls the tiny-K drop in one line so the huge K can mirror it, works the huge-K case and the amount-added example one stage per scene with a try-it, and closes with a You see and You do board of all five types and a handoff to the practice set.',
            'openingDecision': 'Every HSC equilibrium calculation is one of five types. Which one do you have, and what do you do first?',
            'understandingCheck': 'For CO + H2O = CO2 + H2 with K = 4.00 in 2.00 L, steam is added to an equilibrium of 0.400, 0.400, 0.800 and 0.800 mol and the new equilibrium has 0.200 mol CO: solve 0.500 x 0.500 / (0.100 (0.100 + y)) = 4.00 for y, and give the moles of steam added.',
            'curriculumScope': 'Calculate equilibrium constants and equilibrium concentrations from supplied data, including after a change to an equilibrium mixture, and use Q to predict direction (Module 5). Every question is written for HSCScience and is not presented as an official question. Types 1, 2 and 4 are named, with the teaching in C6a and C8; marks allocation, colorimetry, temperature dependence of K, Ksp and acid calculations are deferred.'},
        'design_block': {
            'renderer': RENDERER,
            'visualSystem': 'Explainer engine: warm paper stage, handwritten Caveat headings, amber doodle layer, the C6a type cards extended to five with lit, ticked and dim states and a You see and You do table, the C6 ICE table with the equilibrium-row-first pen arrow and E minus I bracket, the C5 expression builder, the C6 algebra line, the C6b check ruler and tiny-K thumbnail, and a coded reactant-start diagram. Colour key as C2 to C8: forward blue, reverse amber, equal teal, made plus green, used up minus red.',
            'transitionPlan': 'The five-card column sets the lesson; card 3 shrinks to a badge for the tiny-K recall and a mirror line leads into the huge-K board; the C6b ruler returns for the huge-K test; the amount-added example runs across four boards with the table and equation kept; the five cards return and open into the You see and You do table; scene crossfade with settle.'},
        'rows': G03B_ROWS,
    },
    'g03c': {
        'design': D + 'lessons/chem-m5-g03c.md',
        'learning_review': D + 'checks/g03c-learning-review.md',
        'science_check': D + 'checks/g03c-claude-science-check.md',
        'learn_reviewer': 'Independent Claude student-learning reviewer (AI source review of the full practice set; findings resolved in Revision 2); Revision 3 split for length reuses every question scene verbatim, with a new hook and decision board (Claude designer self-review); independent review of the exact voiced preview pending',
        'meta': {'title': 'Equilibrium calculations: HSC-style practice, part 1', 'subtitle': 'In an equilibrium calculation you have not seen, where is the trap, and what do you do first so it cannot catch you?', 'subject': 'Chemistry', 'yearLevel': 12, 'module': 5, 'lesson': 12,
                 'lessonIntent': 'Solve two unseen HSC-style equilibrium calculations (a solid with a mass answer, and a start plus one equilibrium value in a mixture that runs backwards), avoid the trap in each, and say the first move for each trap.'},
        'hold_seconds': 10,
        'holds': ['q1-question', 'q2-question'],
        'ids': ['hook-traps', 'q1-question', 'q1-expression', 'q1-solve', 'q1-mass', 'q2-question', 'q2-initial', 'q2-change-and-k', 'q2-mistake', 'decision-board', 'key-notes'],
        'progression': {
            'prerequisiteKnowledge': 'C5, C6a, C6b, G03a, G03b and Year 11: K expressions with powers and without solids and water, and no unit written (C5); the ICE table (I for initial, C for change, E for equilibrium) with the measured value in the Equilibrium row first and Change = E minus I (C6a); x from the coefficients, the tiny-K drop with its 5 per cent check, and multiply both sides by the bottom then divide (C6b); the five calculation types (G03a, G03b); c = n / V, n = m / M and mole ratios.',
            'startsWith': 'An unseen equilibrium calculation with a small early trap in it, and the trap checklist.',
            'stopsAfter': 'Two worked answers (a solid with a mass answer; a start plus one equilibrium value that runs backwards), each with its traps avoided and its classic mistake crossed out, and a decision board of first moves. No reversed K, tiny K, hidden perfect square or two-part question (G03d); no Q against K, amount-added or huge-K questions (G03a, G03b); no temperature and K (C9); no marks.',
            'nextLesson': 'G03d: equilibrium calculations, HSC-style practice, part 2.'},
        'teaching': {
            'task': 'Solve unseen HSC-style equilibrium calculations by spotting the trap in each and making the right first move.',
            'causalExplanation': 'K is a ratio of concentrations, so every amount in a vessel, including a measured equilibrium amount, is divided by the volume first. A measured value is where a substance ended up, so it goes in the Equilibrium row, and Change = equilibrium minus initial gives the change and its sign, which also shows which way the mixture ran. Only the change row follows the coefficients. Solids stay out of K because their concentration does not change, which can leave a simple linear equation; x is dropped only when K is tiny. The answer is converted back to what was asked: concentration times volume gives moles, and moles times molar mass give grams.',
            'conversationalApproach': 'Opens with the owner framing that these questions stump students because of a small early trap and builds a trap checklist, then gives two HSC-style questions (a warm-up built from callbacks, then a mixture that runs backwards), each with a pause and a 10 second countdown, worked one reasoning stage per scene with its classic mistake crossed out, and closes with a decision board of first moves and a handoff to part 2.',
            'openingDecision': 'In an equilibrium calculation you have not seen, where is the trap, and what do you do first so it cannot catch you?',
            'understandingCheck': 'Two response opportunities: the mass of iron at equilibrium for FeO(s) + CO with K = 0.50 (0.600 mol CO in 2.00 L); and K for CO + 2H2 = CH3OH from a start of 0.200, 0.400 and 0.400 mol and 0.320 mol methanol at equilibrium in 2.00 L.',
            'curriculumScope': 'Calculate equilibrium constants and equilibrium concentrations and amounts from supplied data (Module 5). Every question is written for HSCScience and is not presented as an official question. Reversed K, tiny K, perfect squares and two-part questions (G03d), Q against K, amount-added and huge-K questions (G03a, G03b), temperature dependence of K, colorimetry, Ksp, acid calculations and mark allocation are deferred.'},
        'design_block': {
            'renderer': RENDERER,
            'visualSystem': 'Explainer engine: warm paper stage, handwritten Caveat headings, amber doodle layer, the C6 three-zone board (task line, equation strip, grouped givens card), the C6 ICE table with the C6a equilibrium-row-first pen arrow and E minus I bracket, the C5 expression builder, the C6 algebra line, the C6b check ruler, type badges from the C6a, G03a and G03b type cards, G03a coded sealed vessels, a new coded trap checklist and convert-back chain, and the countdown ring. Colour key as C6 and G03: made plus green, used up minus red, K teal, pen for rings and the measured value.',
            'transitionPlan': 'The trap checklist opens the lesson, shrinks to a strip on the far left that ticks the traps each question meets and dims during each countdown, and returns as the two-column decision board; each question gets a fresh board in the same three zones with the earlier question cleared; the next chip points to part 2; scene crossfade with settle.'},
        'rows': G03C_ROWS,
    },
    'g03d': {
        'design': D + 'lessons/chem-m5-g03d.md',
        'learning_review': D + 'checks/g03d-learning-review.md',
        'science_check': D + 'checks/g03d-claude-science-check.md',
        'learn_reviewer': 'Independent Claude student-learning reviewer (AI source review of the full G03c practice set, carried over for the reused question scenes); Revision 3 split adds a new hook and decision board (Claude designer self-review); independent review of the exact voiced preview pending',
        'meta': {'title': 'Equilibrium calculations: HSC-style practice, part 2', 'subtitle': 'In an equilibrium calculation you have not seen, where is the trap, and what do you do first so it cannot catch you?', 'subject': 'Chemistry', 'yearLevel': 12, 'module': 5, 'lesson': 12,
                 'lessonIntent': 'Solve three unseen HSC-style equilibrium calculations (a K given for the other equation that is also tiny, with a moles answer, and a two-part question that finds K and reuses it in a hidden perfect square), avoid the trap in each, and say the first move for each trap.'},
        'hold_seconds': 10,
        'holds': ['q3-question', 'q4a-question', 'q4b-question'],
        'ids': ['hook-traps', 'q3-question', 'q3-flip-and-table', 'q3-drop-and-solve', 'q3-check-and-moles', 'q4a-question', 'q4a-answer', 'q4b-question', 'q4b-square', 'q4b-solve', 'decision-board', 'key-notes'],
        'progression': {
            'prerequisiteKnowledge': 'G03c (part 1: the trap checklist, divide first, the measured value in the Equilibrium row first, Change = E minus I, and the methanol mixture that ran backwards and kept its K), C5, C6a (flipping or doubling an equation), C6b (x from the coefficients, the perfect-square root with the positive root, the tiny-K drop with its 5 per cent check, multiply both sides by the bottom then divide, and that HSC questions are written so you should not need the quadratic formula), G03a, G03b and Year 11: c = n / V, mole ratios, square and cube roots.',
            'startsWith': 'Part two of the practice set: questions three and four, and the three harder traps they hide.',
            'stopsAfter': 'Three worked answers (a reversed tiny K with a moles answer; K from equilibrium amounts; that K reused in a hidden perfect square), each with its trap avoided and its classic mistake crossed out, and a decision board of first moves. No new method; no Q against K, amount-added or huge-K questions (G03a, G03b), no temperature and K (C9), no mixing or colorimetry (p02), no marks.',
            'nextLesson': 'C9: temperature and K.'},
        'teaching': {
            'task': 'Solve unseen HSC-style equilibrium calculations by spotting the trap in each and making the right first move.',
            'causalExplanation': 'K belongs to the equation as written at one temperature, so rewriting the equation backwards flips K, and a second part at the same temperature reuses K. A mixture that runs backwards does not by itself flip K. With K and a start the change is x, set by the coefficients: a tiny K lets x be dropped where it is taken from a start, tested on the amount actually taken off, which is 2x when the coefficient is 2; equal starts can give a perfect square, solved by a square root with the positive root. Every amount in a vessel is divided by the volume first, and the answer is converted back to what was asked, because x is the change, not always the answer.',
            'conversationalApproach': 'Opens by reconnecting to part 1 and its method and naming the three harder traps, then gives question three and the two-part question four, each with a pause and a 10 second countdown, worked one reasoning stage per scene with its classic mistake crossed out, and closes with a decision board of first moves and a handoff to temperature and K.',
            'openingDecision': 'This question gives K for the other equation, and it is tiny. What do you do first so the trap cannot catch you?',
            'understandingCheck': 'Three response opportunities: the moles of Cl2 when 2.00 mol NOCl is placed in 4.00 L with K = 6.25 x 10^4 given for 2NO + Cl2 = 2NOCl; K for NO2 + SO2 = NO + SO3 from equilibrium amounts in 5.00 L; and [NO2] from 0.500 mol of each reactant in 2.00 L at the same temperature.',
            'curriculumScope': 'Calculate equilibrium constants and equilibrium concentrations and amounts from supplied data (Module 5). Every question is written for HSCScience and is not presented as an official question. Q against K, amount-added and huge-K questions (G03a, G03b), temperature dependence of K, colorimetry, Ksp, acid calculations and mark allocation are deferred.'},
        'design_block': {
            'renderer': RENDERER,
            'visualSystem': 'Explainer engine: warm paper stage, handwritten Caveat headings, amber doodle layer, the C6 three-zone board (task line, equation strip, grouped givens card), the C6 ICE table, the C5 expression builder, the C6 algebra line, the C6b check ruler and two-shortcut card, type badges from the C6a, G03a and G03b type cards, G03a coded sealed vessels with tints, the G03c trap checklist and convert-back chain, and the countdown ring. Colour key as C6 and G03: made plus green, used up minus red, K teal, pen for rings.',
            'transitionPlan': 'The part 2 trap checklist opens the lesson beside a faded part 1 thumbnail, shrinks to a strip on the far left that ticks the traps each question meets and dims during each countdown, and returns as the two-column decision board; each question gets a fresh board in the same three zones with the earlier question cleared; the part a K becomes a teal card that carries into part b; scene crossfade with settle.'},
        'rows': G03D_ROWS,
    },
    'c9': {
        'design': D + 'lessons/chem-m5-c09.md',
        'learning_review': D + 'checks/c9-rev4-learning-review.md',
        'science_check': D + 'checks/c9-claude-science-check.md',
        'meta': {'title': 'Temperature and the equilibrium constant', 'subtitle': 'If you change the temperature of a mixture at equilibrium, what happens to K, and how can you tell which way it goes?', 'subject': 'Chemistry', 'yearLevel': 12, 'module': 5, 'lesson': 13,
                 'lessonIntent': 'State that only a change in temperature changes K, explain with unequal speed-up of the two reactions why heating raises K for a heat-absorbing forward reaction and lowers it for a heat-releasing one, read the direction from measured values, separate a shift (Q moves) from a change in K, and apply the rule to an unseen reaction.'},
        'hold_seconds': 10,
        'ids': ['hook', 'k-stayed-fixed', 'temperature-cause', 'evidence', 'backwards', 'reason-and-rule', 'four-changes', 'new-k', 'mixture-moves', 'memory-aid', 'attempt', 'feedback-heating', 'feedback-extra-check', 'decision-rule', 'key-notes'],
        'progression': {
            'prerequisiteKnowledge': 'C1 to C8 and Year 11: dynamic equilibrium and equal rates (C1); the faster rate falls and the slower rate rises (C2); only hard enough collisions react, so heating speeds up the heat-absorbing reaction more, and the N2O4 and NO2 tube (C3); a catalyst raises both rates equally (C4b); K as products over reactants with coefficient powers, the same for any settled mixture at one temperature (C5); the settled H2 + I2 tube with K = 49, the ICE table and flipping the equation flips K (C6); Q compared with K (C8). Nothing about how K depends on temperature is assumed.',
            'startsWith': 'The sealed NO2 and N2O4 tube that darkens in hot water and fades in ice, and the question of whether K can change when nothing but the temperature does.',
            'stopsAfter': 'Saying that only temperature changes K for a given equation; explaining with the unequal speed-up of the two reactions why heating changes K; stating the rule for a heat-absorbing and a heat-releasing forward reaction; reading the rule backwards from a K table; separating a shift (Q moves) from a change in K; describing a heated mixture as a new K followed by Q moving toward it; applying the rule to an unseen reaction. No van t Hoff, no K at a new temperature from the heat of reaction, no colourimetry, no Gibbs free energy.',
            'nextLesson': 'P02: how measured colour data can give K.'},
        'teaching': {
            'task': 'Say what happens to K when the temperature of a mixture at equilibrium changes, explain why, and predict the direction for an unseen reaction from the heat of reaction.',
            'causalExplanation': 'A disturbance of concentration or pressure changes the amounts, so for a while one reaction runs faster, and the mixture shifts until products over reactants is the same number again, so K stays. Heating speeds up both reactions, but the one that takes in heat needs harder collisions and gains the most, so the rates balance again only at a mixture with more of that reaction\'s products, and K changes. A catalyst speeds up both by the same factor, so nothing shifts. Written backwards the same data give K falling, so the sign follows whether the forward reaction takes in or gives out heat. After heating, K moves first and Q is left behind, so the mixture then moves until Q reaches the new K.',
            'conversationalApproach': 'Starts from the NO2 tube that darkens when heated and the earlier videos where K never moved, explains why K stayed fixed, gives the cause in one chain, shows measured values with the tubes, flips the same data for the other sign, puts the four changes in a table, links heating to Q and K, adds the memory aid, then asks for an unseen H2 and I2 prediction with a short pause and feedback.',
            'openingDecision': 'K never moved when we added, removed or squeezed. Does it move when the temperature changes, and which way?',
            'understandingCheck': 'For H2(g) + I2(g) = 2HI(g), where the forward reaction gives out about 10 kJ per mole of H2 and K is 49 at about 450 degrees Celsius, the tube is heated to 500 degrees and left to settle: is K above, equal to or below 49, and why?',
            'curriculumScope': 'Qualitatively analyse the effect of temperature on the value of Keq (Module 5). The van t Hoff equation, K at a new temperature from the heat of reaction, colourimetry, Gibbs free energy and industrial trade-offs are deferred.'},
        'design_block': {
            'renderer': RENDERER,
            'visualSystem': 'Explainer engine: warm paper stage, handwritten Caveat headings, amber doodle layer, the C3 coded NO2 and N2O4 tube with hot and ice baths, the C8 log number line with a teal K marker and a pen-colour Q marker, C2 to C8 rate bars, the C5 expression builder, the C6 flip, and a coded four-row change table. Colour key: N2O4 pale grey, NO2 brown, I2 purple, forward blue, reverse amber, equal teal, hot tint terracotta, cold tint pale blue.',
            'transitionPlan': 'The tube and the teal K marker open the lesson and stay as the anchor; the disturbance thumbnails return for the reason K stayed fixed; the rate bars and collision strip carry the cause; one wide log line carries the measured and the flipped points; the equation flips for the backwards case; the four-row table appears row by row; the settled tube and Q working return for the new K; the attempt board removes the aids and the feedback rebuilds the strip and the line; the next chip slides in; scene crossfade with settle.'},
        'rows': C9_ROWS,
    },
    'p02': {
        'design': D + 'lessons/chem-m5-p02.md',
        'learning_review': D + 'checks/p02-learning-review.md',
        'science_check': D + 'checks/p02-claude-science-check.md',
        'meta': {'title': 'Colourimetry: how can a colour reading give you a real K?', 'subtitle': 'Nobody can count ions in a test tube. How can the colour of an equilibrium mixture give you a measured K?', 'subject': 'Chemistry', 'yearLevel': 12, 'module': 5, 'lesson': 13,
                 'lessonIntent': 'Explain what a colourimeter measures and why a blank is used, state that absorbance is proportional to concentration for a fixed cuvette and light, explain why calibration standards use a large excess of Fe3+, draw and use a calibration line, find starting concentrations after mixing, use the E-row-first ICE table to find K from one measured value, and judge repeat values by their spread and the recorded temperature.'},
        'hold_seconds': 10,
        'ids': ['hook', 'colourimeter', 'absorbance', 'standards', 'calibration', 'read-mixture', 'dilution', 'ice-table', 'find-k', 'repeats', 'memory-aid', 'attempt', 'feedback', 'decision-rule', 'key-notes'],
        'progression': {
            'prerequisiteKnowledge': 'C1 to C9 and Year 11: the iron thiocyanate tube and the effect of adding Fe3+ (C3); adding a reactant shifts an equilibrium right (C3, C4a); the K expression and its three size bands (C5); the ICE table with the measured value in the Equilibrium row first, and equilibrium values only in K (C6a); K changes only with temperature (C9); concentration and dilution (Year 11). Nothing about colourimeters, absorbance or calibration is assumed.',
            'startsWith': 'Every K so far was given. The iron thiocyanate tube again, with the question of how a colour reading could give a measured concentration and then a real K.',
            'stopsAfter': 'Explaining what a colourimeter measures and why the blank is used; stating that absorbance is proportional to concentration for a fixed cuvette and light (A = epsilon l c); explaining why calibration standards use a large excess of Fe3+; drawing a calibration line of best fit and reading a concentration from it; finding starting concentrations after mixing; using the E-row-first ICE table to find K from one measured value; judging repeat K values by their spread and recording the temperature. No Gibbs free energy, van t Hoff, K at another temperature, logarithm in absorbance, epsilon calculation or percentage uncertainty arithmetic.',
            'nextLesson': 'C10: Ka and Kb, the K values for acids and bases.'},
        'teaching': {
            'task': 'Explain how a colour reading on an equilibrium mixture gives a measured K, and use calibration data to find K for an unseen mixture.',
            'causalExplanation': 'The red ion absorbs blue light, so more red ions absorb more of the beam, and with the same cuvette and light absorbance rises in step with concentration. Standards use a big excess of Fe3+, which pushes the equilibrium far right, so almost every SCN- becomes the red ion and its concentration is known. The calibration line from those known points turns a mixture\'s absorbance into its red ion concentration. Mixing dilutes both reactants, so starting concentrations come from the volumes. The measured value goes into the equilibrium row first, the one to one to one equation fixes the other changes, and substituting the equilibrium values gives K. Repeat mixtures should agree if K is constant at one temperature.',
            'conversationalApproach': 'Starts from the iron thiocyanate tube and the fact that every K was given, builds the instrument and the A = epsilon l c idea, makes standards, plots and uses the calibration graph on one worked mixture, separates dilution from the ICE table, corrects the K-in-the-hundreds misreading, shows five class repeats with their spread, adds two memory aids, then asks for an unseen mixture with unequal volumes and added water, with a short pause and feedback.',
            'openingDecision': 'Nobody can count ions in a test tube, yet K needs equilibrium concentrations. How does a colour reading give you a real K?',
            'understandingCheck': 'Same calibration graph and temperature: 4.50 mL of 0.00200 mol/L Fe3+, 3.50 mL of 0.00200 mol/L SCN- and 2.00 mL of water, absorbance 0.470. Find K (about 208, from reading 1.00 x 10^-4, starts 9.00 and 7.00 x 10^-4, equilibrium 8.00 and 6.00 x 10^-4).',
            'curriculumScope': 'Conduct an investigation to determine Keq of a chemical equilibrium system, for example the iron(III) thiocyanate equilibrium (ACSCH096, Module 5). The video prepares for and analyses the investigation and does not claim to replace conducting it. Gibbs free energy, van t Hoff, logarithms in absorbance and calculating epsilon are deferred.'},
        'design_block': {
            'renderer': RENDERER,
            'visualSystem': 'Explainer engine: warm paper stage, handwritten Caveat headings, amber doodle layer, the painted colourimeter and cuvette series, the painted C3 iron tubes, a coded colourimeter cutaway with a blue beam, a coded calibration graph with fitted line and across-then-down guides, the C6a ICE table, the C5 expression builder and three-band line, and a coded dilution strip. Colour key: Fe3+ pale yellow, SCN- grey, FeSCN2+ red, blue light beam blue, K teal, measured values pen colour. The chip "illustrative class data" sits under every data board.',
            'transitionPlan': 'The tube and the question open the lesson; the cutaway opens beside the painted colourimeter; the cuvette pair carries the doubling idea; the bottles and dots carry the standards; the five cuvettes fly into the calibration graph; the graph stays on the right while the mixture is read across and down; the dilution strip replaces the graph, then the ICE table replaces the strip; the builder and band line return for K; the results table and the thermometer follow; the five-step chain strip returns for the aids and the handoff; the attempt board clears the aids and the feedback rebuilds the graph, table and builder; the next chip slides in; scene crossfade with settle.'},
        'rows': P02_ROWS,
    },
    'c10': {
        'design': D + 'lessons/chem-m5-c10.md',
        'learning_review': D + 'checks/c10-learning-review.md',
        'science_check': D + 'checks/c10-claude-science-check.md',
        'meta': {'title': 'Ka and Kb as equilibrium constants: what do they tell you about acids and bases?', 'subtitle': 'Ka and Kb have their own names. Are they new kinds of constant, and what does their size tell you?', 'subject': 'Chemistry', 'yearLevel': 12, 'module': 5, 'lesson': 14,
                 'lessonIntent': 'Explain the difference between a strong acid and a weak acid, write Ka for a weak acid with water left out, write Kb for ammonia, rank weak acids by Ka with the powers of ten first, say that Ka is not [H+] or pH, and write Ksp for a 1 : 1 solid as the same rule.'},
        'hold_seconds': 10,
        'ids': ['hook', 'strong-weak', 'ka-is-k', 'with-water', 'ka-size', 'ka-compare', 'strong-acids', 'kb', 'ksp-preview', 'memory-aid', 'attempt', 'feedback-expression', 'feedback-stronger', 'decision-rule', 'key-notes'],
        'progression': {
            'prerequisiteKnowledge': 'C1 to C9 and Year 11 (P02 colourimetry is an optional branch and is not relied on): dynamic equilibrium with both directions going at equal rates (C1); the K expression and its rules, with pure solids, pure liquids and the solvent water left out, and the size bands (C5); K changes only with temperature (C9); acids release hydrogen ions in water and react with magnesium to make hydrogen; scientific notation. Not assumed: pH, Bronsted-Lowry theory, conjugate pairs, any Module 6 content.',
            'startsWith': 'Two beakers of acid at the same concentration with the same magnesium, one fizzing hard and one slowly, and the question of what equilibrium and which K explain the difference.',
            'stopsAfter': 'Explaining the difference between a strong acid (ionises completely) and a weak acid (molecules and ions in balance); writing Ka for HA = H+ + A- and for HA + H2O = H3O+ + A- with water left out; writing Kb for ammonia with water left out; ranking weak acids by Ka (powers of ten first) and saying what a bigger Ka means at equilibrium at the same concentration; saying that Ka is not [H+] or pH; writing Ksp for a 1 : 1 solid as the same rule. No pH, pKa, Kw, Ka x Kb = Kw, conjugate pairs, weak-acid ICE tables, Ksp calculations or Gibbs free energy.',
            'nextLesson': 'C11: how an ionic solid dissolves in water.'},
        'teaching': {
            'task': 'Write Ka and Kb as ordinary K expressions with water and solids left out, and use their size to compare weak acids.',
            'causalExplanation': 'The bubbles come from hydrogen ions. Hydrochloric acid molecules all split into ions, so it is a strong acid. Acetic acid molecules split and the ions join back up, the two directions balance while most molecules are still whole, so far fewer hydrogen ions meet the magnesium. A balance of molecules and ions is an equilibrium, so it has a K written by the rule already known; Ka is only its name. Water is the solvent in a huge steady amount, so it stays out. A small Ka means a small top and a big bottom, so mostly whole molecules; at the same concentration a bigger Ka means more split into ions. A strong acid leaves essentially no molecules for the bottom, so no Ka value is used. Ammonia and silver chloride follow the same rule with the solvent and the pure solid left out.',
            'conversationalApproach': 'Opens on two painted beakers at the same concentration with different fizz, uses particle lenses to explain strong and weak, builds the Ka expression from the known rule, shows water left out in a tray, reads the size on a log strip, handles strong acids, ammonia and silver chloride as the same rule, gives one memory aid, then asks two unseen demands with a short pause and feedback.',
            'openingDecision': 'Same acid concentration, same metal, different fizz. Why, and which K tells you?',
            'understandingCheck': 'Methanoic acid has Ka 1.8 x 10^-4 and hydrogen cyanide has Ka 6.2 x 10^-10, both at 25 C: write Ka for HCN(aq) + H2O(l) = H3O+(aq) + CN-(aq) (water left out), and say which is the stronger acid and why (methanoic acid, about three hundred thousand times bigger Ka, powers of ten first).',
            'curriculumScope': 'Explore the use of Keq for different types of reactions, including dissociation of acids and bases, with ionic dissociation introduced as the same rule (Module 5, p1082 to p1084). pH, pKa, Kw, conjugate pairs, weak-acid ICE tables, Ksp calculations and Gibbs free energy are deferred.'},
        'design_block': {
            'renderer': RENDERER,
            'visualSystem': 'Explainer engine: warm paper stage, handwritten Caveat headings, amber doodle layer, the painted strong and weak acid magnesium beakers, vinegar bottle and saturated beaker, coded particle lenses, the extended C5 expression builder with a left-out tray, a coded log size strip, and the C9 100-square grids. Colour key: H+ and H3O+ amber, acid anion violet, whole acid molecules navy, OH- green, NH4+ violet, water pale blue, K teal, anything left out of K greyed in the tray.',
            'transitionPlan': 'The two beakers anchor the hook and stay in the left column while particle lenses open above them; the equation strip sits above the builder in every scene; the tray makes each exclusion visible; the size strip carries acetic acid, hydrofluoric acid and later the attempt markers; the HCl lens returns for strong acids; ammonia and the saturated beaker reuse the lens and tray; the three expressions line up for the aid; the attempt board clears the aids and the feedback rebuilds the builder and the strip; the next chip slides in; scene crossfade with settle.'},
        'rows': C10_ROWS,
    },
    'c11': {
        'design': D + 'lessons/chem-m5-c11.md',
        'learning_review': D + 'checks/c11-learning-review.md',
        'science_check': D + 'checks/c11-claude-science-check.md',
        'meta': {'title': 'How ionic compounds dissolve in water: what pulls the ions out, and why do some salts make water cold?', 'subtitle': 'When an ionic solid dissolves, what pulls its ions out, and why do some salts make the water hot while others make it cold?', 'subject': 'Chemistry', 'yearLevel': 12, 'module': 5, 'lesson': 15, 'lessonIntent': 'Describe hydration with ion-dipole attractions, write a dissociation equation with state symbols, explain a temperature change on dissolving with both energy steps, say why an endothermic salt can still dissolve, explain saturation as equal dissolving and crystallising rates with tracer evidence, and predict the effect of adding solid, adding water and heating on a saturated mixture.'},
        'hold_seconds': 10,
        'holds': ['attempt-1', 'attempt-2'],
        'ids': ['hook', 'two-players', 'hydration', 'equation', 'energy-steps', 'hot-cold-packs', 'salt-cancel', 'entropy', 'saturating', 'rates-meet', 'tracer', 'added-solid', 'memory-aids', 'attempt-1', 'feedback-1', 'attempt-2', 'feedback-2', 'decision-rule', 'key-notes'],
        'progression': {'prerequisiteKnowledge': 'C1 to C10, G01 and Year 11: ionic compounds are lattices of positive and negative ions; water is polar; endothermic and exothermic; ions and state symbols (Year 11). Dynamic equilibrium with equal rates (C1); a slower rate rising to meet a falling one (C2); Q against K (C8); the K expression with pure solids left out (C5); K changes only with temperature and heating raises K for a heat-absorbing reaction (C9); Ksp named as K for a solid dissolving (C10); spreading out (entropy) as a second factor favouring a change (G01). Not assumed: lattice energy values, Hess cycles, solubility rules.', 'startsWith': 'A blue copper sulfate crystal dissolving in water, with the question of what pulls the ions out of the crystal and why some salts make water hot while others make it cold.', 'stopsAfter': 'Describing hydration with ion-dipole attractions; writing a dissociation equation with state symbols; explaining a temperature change on dissolving with both energy steps; saying why an endothermic salt can still dissolve (spreading out); explaining saturation as equal dissolving and crystallising rates, with tracer evidence; predicting the effect of adding solid and adding water on a saturated mixture, and saying why heating dissolves more of a salt that dissolves endothermically. No Ksp calculations, no solubility rules, no lattice energy arithmetic, no Gibbs free energy, no cycad case, no supersaturation.', 'nextLesson': 'C12: how Aboriginal and Torres Strait Islander Peoples have used solubility to remove toxins from food; then C13: solubility rules and precipitation.'},
        'teaching': {'task': 'Say what pulls the ions out when an ionic solid dissolves, explain why the water warms or cools, and explain why dissolving in a saturated solution is an equilibrium.', 'causalExplanation': 'The oppositely charged ends of polar water molecules attract the ions, and an exposed corner ion is held by the fewest neighbours, so water pulls ions off the lattice and surrounds them. The ions were already in the crystal, so dissolving only separates and hydrates them. Separating the ions costs energy and hydrating them releases energy, so the sum, the enthalpy of solution, is negative when hydration pays back more and the water warms, and positive when separation costs more and the water cools. A salt that takes in energy can still dissolve because spreading out also favours dissolving. In a saturated solution the dissolving rate is steady while the crystallising rate rises with the number of dissolved ions until the two are equal, so the amounts stay fixed, which is a dynamic equilibrium with its K the Ksp. The solid is left out of K, so adding more changes nothing, while heating changes K itself.', 'conversationalApproach': 'Opens on a dissolving copper sulfate crystal and the hot and cold puzzle, builds the lattice and polar water, shows hydration and the equation, counts energy in two steps with real hot pack and cold pack values, resolves the endothermic puzzle with spreading out, builds saturation as two rates meeting with tracer evidence, adds the added-solid trap, gives two memory aids, then asks two unseen items with a short pause and brief feedback.', 'openingDecision': 'Ions are held tightly in a crystal. What pulls them out into the water, and why do some salts make the water hot while others make it cold?', 'understandingCheck': 'Ammonium chloride dissolves and the water falls from 22 degrees to 17 degrees: explain with the two energy steps. Then water is added to a saturated sodium chloride solution that still has solid at the end, at the same temperature: say what happens to the mass of solid and to the final concentration.', 'curriculumScope': 'Describe and analyse the processes involved in the dissolution of ionic compounds in water (Module 5, C5-IQ4-01). Ksp calculations, solubility rules, lattice energy arithmetic, Gibbs free energy, the cycad case and supersaturation are deferred.'},
        'design_block': {'renderer': RENDERER, 'visualSystem': 'Explainer engine: warm paper stage, handwritten Caveat headings, amber doodle layer, the painted copper sulfate beaker pair, the painted unsaturated and saturated beakers, the painted thermometer cues, a coded NaCl lattice with polar water, the coded two-step energy ledger and dH bar chart, the C2 two-rate meter, the C5 left-out tray and the C8 Q against K gauge. Colour key: positive ions amber, negative ions violet, water pale blue with delta marks, energy in warm red, energy out teal, radioactive ions green glow.', 'transitionPlan': 'The beaker anchors the hook and shrinks to the left column while the lattice close-up opens; the equation strip sits above the close-up; the ledger replaces the close-up and returns small for the bar chart and the aids; the saturated beaker and the rate lens carry the equilibrium scenes; the tray and gauge return for the added-solid trap; each attempt clears the board and its feedback rebuilds the ledger or the gauge; the next chip slides in; scene crossfade with settle.'},
        'rows': C11_ROWS,
    },
    'c13': {
        'design': D + 'lessons/chem-m5-c13.md',
        'learning_review': D + 'checks/c13-learning-review.md',
        'science_check': D + 'checks/c13-claude-science-check.md',
        'meta': {'title': 'Solubility rules and net ionic equations: when two clear solutions make a solid, what forms and what is left?', 'subtitle': 'When you mix two clear solutions of ionic compounds, how can you tell whether a solid will form, what it is, and what is left dissolved?', 'subject': 'Chemistry', 'yearLevel': 12, 'module': 5, 'lesson': 17, 'lessonIntent': 'List the ions in two solutions, swap partners and check both products against the solubility rules, name the precipitate and its colour for the three syllabus pairs, write molecular, full ionic and net ionic equations with spectators identified and charges checked, recognise no precipitate, and state what stays dissolved after filtering including an excess reagent.'},
        'hold_seconds': 10,
        'holds': ['attempt-1', 'attempt-2'],
        'ids': ['hook', 'four-ions', 'precipitate-spectators', 'rules-origin', 'nagsag', 'swap-method', 'agcl-molecular', 'full-ionic', 'net-ionic', 'pbi2-formula', 'baso4-meal', 'no-precipitate', 'filtrate', 'memory-aid', 'attempt-1', 'feedback-1', 'attempt-2', 'feedback-2', 'decision-rule', 'key-notes'],
        'progression': {'prerequisiteKnowledge': 'C11 and Year 11: a dissolved ionic compound is separate hydrated ions and dissolving depends on more than one factor (C11); ionic formulas from ion charges, polyatomic ions (nitrate, sulfate, carbonate, hydroxide, ammonium), balancing equations, state symbols and meeting precipitation reactions in Module 3 (Year 11). Not assumed: Ksp, Qsp, solubility rules.', 'startsWith': 'Two clear colourless solutions, potassium iodide and lead nitrate, giving a bright yellow solid, with the question of where the solid came from and what is left in the liquid.', 'stopsAfter': 'Listing the ions in two solutions; swapping partners and checking both products against supplied or learned rules; naming the precipitate (and its colour for the three syllabus pairs); writing the molecular, full ionic and net ionic equations with spectators identified and charge checked; recognising no precipitate with no net ionic equation; stating which ions remain dissolved after filtering, including an excess reagent. No Ksp, no Qsp, no water-treatment selectivity, no conduct of the investigation.', 'nextLesson': 'P03: investigating the solubility rules yourself (practical support); then C14: Ksp, putting a number on insoluble.'},
        'teaching': {'task': 'Predict what forms when two ionic solutions are mixed, write the molecular, full ionic and net ionic equations, and say what stays dissolved.', 'causalExplanation': 'Each bottle holds separate hydrated ions, so mixing gives four kinds of ion and the only new thing possible is new partners. One new pair holds together in a solid more than it stays hydrated, so it comes out as a precipitate, and the other ions stay dissolved and unchanged as spectators. The solubility rules summarise which pairs do this and were found by experiment, so both products are checked because either could be the insoluble one. The solid is not dissolved ions, so it is never split in the ionic equation, and the spectators are identical on both sides, so they cancel to leave the net ionic equation. Charges must balance, which is why lead iodide has two iodides. After filtering, the solution holds the spectators plus any ion that was added in excess, because it has no partner left.', 'conversationalApproach': 'Starts from a yellow solid appearing from two clear solutions, shows the four ions and the new partners, gives the cause of a precipitate and the spectators, summarises the rules in order, then works the three syllabus pairs one equation line at a time with a charge check, adds the no-precipitate case and the filtrate, gives two memory aids and asks two unseen items with a short pause and brief feedback.', 'openingDecision': 'Two clear solutions make a bright yellow solid, and neither bottle had anything yellow in it. Where did the solid come from, and what is left in the liquid?', 'understandingCheck': 'Copper(II) sulfate and sodium hydroxide are mixed: name the precipitate and write the net ionic equation. Then silver nitrate is mixed with more than enough sodium chloride and the white solid is filtered off: which ions are in the filtrate?', 'curriculumScope': 'Predict and analyse the composition of substances when two ionic solutions are mixed, for example potassium chloride and silver nitrate, potassium iodide and lead nitrate, and sodium sulfate and barium nitrate (Module 5, ACSCH065). The video predicts and analyses and does not replace the investigation. Ksp, Qsp and water-treatment selection are deferred.'},
        'design_block': {'renderer': RENDERER, 'visualSystem': 'Explainer engine: warm paper stage, handwritten Caveat headings, amber doodle layer, the painted lead iodide tube pair, painted reagent bottles with coded labels, the painted precipitate tubes, the painted barium meal glass, coded hydrated-ion lenses, a coded rules card, swap cross and three-line equation stack with flying ion tokens and strikes, and an abstract filter funnel. Colour key: positive ions amber, negative ions violet, water shells pale blue, the precipitate always in its real colour, spectators grey when struck.', 'transitionPlan': 'The bottles and the tube open the lesson and the bottles stay in the left column; the two lenses merge into one over the tube; the grid becomes the rules card and the card shrinks to the corner for the swap cross; the equation stack adds one line per scene and clears between pairs; the filter funnel carries the filtrate scene and attempt 2; the attempt boards clear the aids and the feedback rebuilds the cross, the stack or the lens; the next chips slide in; scene crossfade with settle.'},
        'rows': C13_ROWS,
    },
    'c14': {
        'design': D + 'lessons/chem-m5-c14.md',
        'learning_review': D + 'checks/c14-learning-review.md',
        'science_check': D + 'checks/c14-claude-science-check.md',
        'meta': {"title": "Ksp expressions and molar solubility: how much does an \"insoluble\" salt really dissolve?", "subtitle": "A salt that barely dissolves still dissolves a little. How do you calculate how much from its Ksp, and how do you get Ksp from a measured solubility?", "subject": "Chemistry", "yearLevel": 12, "module": 5, "lesson": 18, "lessonIntent": "Write the dissolving equation and the Ksp expression with powers and no denominator, define molar solubility, calculate it from Ksp for a 1 : 1 and a 1 : 2 salt with each ion as its count times s, calculate Ksp from a measured solubility with the measured value in the equilibrium row first, explain why Ksp values rank solubility only for the same formula type, and apply the method to an unseen lead iodide and an unseen silver carbonate item."},
        'hold_seconds': 10,
        'holds': ['attempt-1', 'attempt-2'],
        'ids': ['hook', 'saturated', 'ksp-expression', 'powers', 'molar-solubility', 'baso4-ice', 'baso4-solve', 'caf2-setup', 'caf2-solve', 'trap-2s', 'compare-ksp', 'reverse-erow', 'reverse-ksp', 'memory-aid', 'attempt-1', 'feedback-1', 'attempt-2', 'feedback-2', 'decision-rule', 'key-notes'],
        'progression': {"prerequisiteKnowledge": "C5, C6a, C6b, C10, C11, C13 and Year 11: a saturated solution is a dynamic equilibrium with equal rates (C11); K expressions with powers and solids left out, and no unit written (C5); the ICE table with the measured value in the equilibrium row first and square-root moves (C6a, C6b); Ksp named as the K for a dissolving solid (C10); solubility rules and the barium meal (C13); ionic formulas, moles, molar mass and scientific notation (Year 11). Not assumed: Qsp, mixing, the common ion.", "startsWith": "A glass of barium meal, barium sulfate that barely dissolves, with the question of how much \"barely\" is and why a bigger Ksp does not always mean a more soluble salt.", "stopsAfter": "Writing the dissolution equation and Ksp expression for 1 : 1 and 1 : 2 (or 2 : 1) salts; calculating molar solubility in pure water from Ksp with ion concentrations s and 2s; calculating Ksp from a measured solubility in mol/L or g/L with the measured value in the equilibrium row first; explaining why Ksp values rank solubility only for the same formula type. No Qsp, no mixing, no common ion, no temperature calculations, no 1 : 3 or 3 : 2 salts.", "nextLesson": "C15: will mixing these solutions form a precipitate? Qsp against Ksp, dilution on mixing and the common ion effect."},
        'teaching': {"task": "Calculate the molar solubility of a salt from its Ksp, and the Ksp of a salt from a measured solubility.", "causalExplanation": "A saturated solution has ions leaving and rejoining the solid at equal rates, so it is an equilibrium with its own K, and the solid is left out of K so Ksp is a product of ion concentrations with no denominator. A subscript in the formula becomes a coefficient in the equation and then a power in Ksp. Molar solubility, s, is the moles of solid that dissolve per litre, and each ion concentration follows from what one formula unit gives: s for a 1 : 1 salt, and s and 2s for a 1 : 2 salt, where the whole bracket is squared. A measured solubility is an equilibrium value, so it goes in the equilibrium row first and the change is found from it, and grams per litre are converted to moles per litre first. Different formula types give different powers of s, so a bigger Ksp can belong to the less soluble salt, and Ksp is compared directly only for the same type.", "conversationalApproach": "Opens on the barium meal and asks how much barely is, builds the saturated equilibrium and the Ksp expression, links Ksp to molar solubility with an ICE table, works a 1 : 1 and a 1 : 2 salt one stage at a time, names the s-for-2s trap with its size, compares unlike salts, works one example backwards, gives the memory aid, then asks two unseen items with a short pause and brief feedback.", "openingDecision": "Barium sulfate barely dissolves, so a barium meal passes through the gut. But barely is not none. How much dissolves, and why does a bigger number in the data table not always mean a more soluble salt?", "understandingCheck": "Lead iodide has a Ksp of 9.8 x 10^-9: calculate its molar solubility in water. Then a saturated silver carbonate solution contains 0.0354 g/L with a molar mass of 275.8 g/mol: calculate its Ksp.", "curriculumScope": "Derive equilibrium expressions for saturated solutions in terms of Ksp and calculate the solubility of an ionic substance from its Ksp value (Module 5, 2017 syllabus p51). Qsp, mixing, the common ion, tooth enamel and 1 : 3 and 3 : 2 salts are deferred."},
        'design_block': {'renderer': RENDERER, "visualSystem": "Explainer engine: warm paper stage, handwritten Caveat headings, amber doodle layer, the painted barium meal glass, the painted unsaturated and saturated beakers, the C5 and C10 expression builder with its left-out tray, the C6 ICE table with a greyed solid column, the C6a E-row-first pen arrow, the C8 log number line, a coded ratio-true ion lens, ghost lines with strikes and the countdown ring. Colour key: positive ions amber, negative ions violet, water shells pale blue, s and its terms teal, Ksp teal, the solid in its real colour.", "transitionPlan": "The barium meal glass opens the lesson and the beakers carry the equilibrium scenes; the builder replaces the beaker for the expression and returns for each new formula; each calculation clears to the same three-zone board (task, strip, givens, then the table and algebra on the right); the data strip returns large for the comparison; each attempt clears the board and its feedback rebuilds the table cell by cell; the next chip slides in; scene crossfade with settle."},
        'rows': C14_ROWS,
    },
    'c15': {
        'design': D + 'lessons/chem-m5-c15.md',
        'learning_review': D + 'checks/c15-learning-review.md',
        'science_check': D + 'checks/c15-claude-science-check.md',
        'meta': {"title": "Will mixing these solutions form a precipitate? Qsp against Ksp, and the common ion effect", "subtitle": "When two solutions are mixed, how can you predict whether a precipitate will form, and why does adding an ion that is already there make a salt less soluble?", "subject": "Chemistry", "yearLevel": 12, "module": 5, "lesson": 19, "lessonIntent": "Define Qsp as the Ksp expression with current concentrations, compare Qsp with Ksp to predict a precipitate, find each ion concentration after mixing from moles over the total volume, justify a prediction with a referenced Ksp, explain the common ion effect as Qsp exceeding Ksp with Ksp unchanged, calculate the solubility of a 1 : 1 salt in a common ion solution with the approximation checked, and apply the method to an unseen lead iodide mixture and an unseen calcium sulfate case."},
        'hold_seconds': 10,
        'holds': ['attempt-1', 'attempt-2'],
        'ids': ['hook', 'qsp-idea', 'qsp-decision', 'mixing-dilutes', 'caso4-setup', 'caso4-compare', 'pbso4-moles', 'pbso4-compare', 'memory-aid', 'common-ion', 'common-ion-ice', 'common-ion-solve', 'attempt-1', 'feedback-1', 'attempt-2', 'feedback-2', 'decision-rule', 'key-notes'],
        'progression': {"prerequisiteKnowledge": "C14, C8, G03a, C13, C6b, C3 and Year 11: Ksp expressions, molar solubility and each ion as its count times s (C14); Q compared with K and the log number line (C8, G03a); solubility rules, spectators and net ionic equations (C13); dropping a tiny s with a 5 per cent check (C6b); Le Chatelier's principle (C3, C4); n = cV and mL to L (Year 11). Not assumed: Qsp, dilution on mixing, the common ion effect, Module 6 acid-base ideas.", "startsWith": "A kidney stone made mainly of calcium oxalate, which the solubility rules call insoluble, and the question of how many ions are enough for a solid to form.", "stopsAfter": "Finding each ion concentration after mixing from moles over the total volume; writing Qsp with the Ksp powers; comparing Qsp with a referenced Ksp to predict and justify a precipitate or none; explaining the common ion effect as Qsp exceeding Ksp with Ksp unchanged; calculating the solubility of a 1 : 1 salt in a common ion solution with the approximation checked. No titration methods, no selective precipitation, no temperature calculations, no Ksp from mixing data with the precipitate subtracted.", "nextLesson": "Module 6, acids and bases (route chem-m6-acid-base-route), where K returns as Ka."},
        'teaching': {"task": "Predict whether a precipitate forms when two solutions are mixed, and say what a common ion does to solubility.", "causalExplanation": "A solid needs enough ions, so insoluble ions can coexist without one. Qsp is the Ksp expression with the concentrations right now, with the same powers. When Qsp is bigger than Ksp there are more ions than a saturated solution can hold, so they lock together until Qsp falls to Ksp, when it is just saturated, and when Qsp is smaller nothing precipitates. Mixing spreads each ion through the combined volume, so concentrations fall before Qsp is calculated, which is why moles are found first and divided by the total volume. A common ion raises Qsp above Ksp, so solid forms and less stays dissolved, while Ksp itself is unchanged because only temperature changes it. With a common ion present the initial row is not zero, and the tiny s is dropped next to it and checked.", "conversationalApproach": "Opens on a kidney stone and the question of how many ions are enough, defines Qsp and the three outcomes on a log number line, shows mixing spreading the ions, works a no-precipitate example with the undiluted trap and an unequal-volume example through moles, gives the memory aid, explains the common ion effect and calculates it with a non-zero initial row, then asks two unseen items with a short pause and brief feedback.", "openingDecision": "Most kidney stones are calcium oxalate, which the rules call insoluble, and urine always contains calcium and oxalate ions. Yet usually no stone forms. How many ions is enough?", "understandingCheck": "20.0 mL of 1.0 x 10^-3 mol/L lead nitrate is mixed with 30.0 mL of 2.0 x 10^-3 mol/L potassium iodide, with Ksp 9.8 x 10^-9: will a precipitate form? Then solid sodium sulfate dissolves in a saturated calcium sulfate solution at the same temperature: what happens to the amount of calcium sulfate dissolved and to Ksp?", "curriculumScope": "Predict the formation of a precipitate given the standard reference values for Ksp (Module 5, 2017 syllabus p51). The common ion effect is taught as a Qsp consequence for one 1 : 1 salt. Titration methods, selective precipitation, temperature calculations and Ksp from mixing data with the precipitate subtracted are deferred."},
        'design_block': {'renderer': RENDERER, "visualSystem": "Explainer engine: warm paper stage, handwritten Caveat headings, amber doodle layer, the painted kidney stone, saturated and unsaturated beakers, the painted pipette and clear no-precipitate tube, the C8 log number line with a fixed teal Ksp marker and a coral Qsp marker, the C14 ICE table, the C6b check ruler, the C13 swap-cross thumbnail, a coded mixing card and the countdown ring. Colour key: positive ions amber, negative ions violet, water shells pale blue, spectators grey, Ksp teal, Qsp coral.", "transitionPlan": "The kidney stone opens the lesson and returns small at the end; the two cards give way to the log number line, which carries the decision and every comparison; the beakers tip together for the mixing scene; each worked example clears to the same three-zone board; the saturated beaker carries the common ion scenes into the ICE table; each attempt clears the board and its feedback rebuilds the mixing card or the lens; the next chip slides in; scene crossfade with settle."},
        'rows': C15_ROWS,
    },
    'p01': {
        'design': D + 'lessons/chem-m5-p01.md',
        'learning_review': D + 'checks/p01-learning-review.md',
        'science_check': D + 'checks/p01-claude-science-check.md',
        'meta': {"title": "Reversibility and disturbance investigations: how do you get evidence you can trust?", "subtitle": "How do you show in the lab that a reaction is reversible, and that an equilibrium really responds to a disturbance, with evidence you can trust?", "subject": "Chemistry", "yearLevel": 12, "module": 5, "lesson": 5, "lessonIntent": "stating the reversibility test (change, then reverse the change; a return is the evidence) and the magnesium contrast; stating whether a set-up is open or closed and why an equilibrium test needs a closed one; planning the six-tube disturbance investigation with a reference tube, one change per tube, side-by-side judging and a dilution control; naming the independent, dependent and controlled variables; predicting the results and giving the C3 reason in a clause; defining validity, reliability and accuracy for this investigation; writing a risk assessment row (hazard, harm, control) for the real hazards. No K, no Q, no colourimeter data (P02), no conduct."},
        'hold_seconds': 10,
        'holds': ['attempt-1', 'attempt-2'],
        'ids': ['hook', 'reversibility-test', 'magnesium-open', 'closed-system', 'setup-reference', 'variables', 'expected-results', 'dilution-control', 'temperature', 'validity-reliability', 'risk-assessment', 'memory-aid', 'attempt-1', 'feedback-1', 'attempt-2', 'feedback-2', 'decision-rule', 'key-notes'],
        'progression': {"prerequisiteKnowledge": "C1 (dynamic equilibrium needs a closed system; equal rates; a finished reaction is static), C2 (reversible reactions approach equilibrium), C3 (adding a reactant shifts right and deepens the iron thiocyanate red; removing one shifts left; heating favours the reaction that takes in heat; the cobalt solution is pink cold, blue hot, purple at room temperature; Le Chatelier's principle), C4a (sealed NO2 syringe and tubes), and Year 11 Working Scientifically (an independent variable is changed, a dependent variable is measured, controlled variables are kept the same; a risk assessment lists hazards and controls). The words validity, reliability and accuracy are given a plain meaning here even if met in Year 11.", "startsWith": "Choose a reversible system and compare controlled disturbances. The video opens: This tube of iron thiocyanate has sat at the same pale red for an hour. Is that proof that it's an equilibrium, with both reactions still running?", "stopsAfter": "stating the reversibility test (change, then reverse the change; a return is the evidence) and the magnesium contrast; stating whether a set-up is open or closed and why an equilibrium test needs a closed one; planning the six-tube disturbance investigation with a reference tube, one change per tube, side-by-side judging and a dilution control; naming the independent, dependent and controlled variables; predicting the results and giving the C3 reason in a clause; defining validity, reliability and accuracy for this investigation; writing a risk assessment row (hazard, harm, control) for the real hazards. No K, no Q, no colourimeter data (P02), no conduct.", "nextLesson": "putting a number on where an equilibrium sits (route chem-m5-c05), without naming K (C3 and C4b convention)."},
        'teaching': {"task": "How do you show in the lab that a reaction is reversible, and that an equilibrium really responds to a disturbance, with evidence you can trust?", "causalExplanation": "(1) an unchanged appearance cannot tell a running equilibrium from a finished reaction, so evidence needs a push (1); (2) the reversibility test: change, then reverse the change; one change proves nothing, a return does (2); (3) burning magnesium does not come back under any school conditions, so it is treated as irreversible; the hydrate test was open, so it shows reversibility, not an equilibrium (3); (4) an equilibrium investigation needs a closed system, and the method must say what is sealed (4); (5) a pale stock, an untouched reference and one change per tube, judged side by side (5); (6) independent, dependent and controlled variables (6); (7) expected results with the C3 reason in a clause (7); (8) adding a solution dilutes, so a paler tube is not yet evidence; the dilution control separates a shift from dilution (8); (9) temperature in a sealed tube, with the return to room temperature as a second reversibility check (9); (10) validity, reliability, accuracy (10); (11) risk assessment (11); memory aids (12); two attempts with brief feedback (13 to 16); decision rule and handoff (17); key notes (18).", "conversationalApproach": "two investigations, one question each. (A) Is it reversible? Push it one way, then reverse the change and see whether the start comes back (cobalt hydrate), against an irreversible contrast (burning magnesium). (B) How does an equilibrium respond to a disturbance, and how do you know the change is real? Reference tube, one change per tube, side-by-side judging, the dilution control, temperature in a sealed tube. Then validity, reliability and accuracy in plain words, the risk assessment, and two classic exam questions.", "openingDecision": "To show that a reaction can run both ways, and that it responds to a change, you have to push it and watch what happens. So how do you plan an investigation with evidence you can trust?", "understandingCheck": "(A1) a tube made paler by ten drops of silver nitrate solution, concluded \"shifted left\": what extra tube makes the conclusion valid, and why? Answer: an identical tube with ten drops of water (dilution control). Crossed mistake: \"repeat it three times\" (that improves reliability, not validity). (A2) heated pink cobalt chloride crystals turn blue, concluded \"reversible\": evaluate. Answer: one direction only; add water to the cooled blue solid and see pink return; the open tube shows reversibility, not an equilibrium. Crossed mistake: \"correct, the colour changed\".", "curriculumScope": "Syllabus (2017, p49 to p50): C5-IQ1-01 \"conduct practical investigations to analyse the reversibility of chemical reactions, for example: cobalt(II) chloride hydrated and dehydrated; iron(III) nitrate and potassium thiocyanate; burning magnesium; burning steel wool (ACSCH090)\"; C5-IQ2-01 \"investigate the effects of temperature, concentration, volume and/or pressure on a system at equilibrium and explain how Le Chatelier's principle can be used to predict such effects, for example: heating cobalt(II) chloride hydrate; interaction between nitrogen dioxide and dinitrogen tetroxide; iron(III) thiocyanate and varying concentration of ions (ACSCH095)\". This video prepares students to plan, record and analyse the investigation and does not claim to replace conducting it."},
        'design_block': {'renderer': RENDERER, "visualSystem": "Explainer engine: warm paper stage, handwritten Caveat headings, amber doodle layer, three constant zones (short question top left, apparatus centre, one current card in the right third). Colour key: Fe3+ pale yellow, SCN- grey, FeSCN2+ red, cobalt pink and blue ions, reference tube marked with a teal tag, controls teal, hazards terracotta, risk controls green. Reuse and new items: the C3 painted iron tubes (`c3-iron-tube-start-v1.png`, `c3-iron-tube-deep-v1.png`), the C3 cobalt tubes in water-bath beakers (`c3-cobalt-tube-pink-v1.png`, `-purple-`, `-blue-`), the C9 sealed NO2 tubes (`c9-no2-tube-brown-v1.png`, `c9-no2-tube-pale-v1.png`), the C4a syringe parts (`c4a-syringe-barrel-v1.png`, `c4a-syringe-plunger-v1.png`, screen tag only), `m6-white-tile-v1.png`, `m5x-bottle-fe-v1.png` and `m5x-bottle-scn-v1.png` (reagent bottles, coded labels on the blank labels), `m6-wash-bottle-v1.png` (distilled water), `m6-beaker-v1.png` (bath, coded water fill), `c8-thermometer-hot-v1.png`, `c9-ice-cube-v1.png`, the C3 equation chip style and shift arrows, the countdown ring, the key notes board. New coded items: the \"push it, bring it back\" arrow loop, the six-tube comparison bar (swatches against the reference), the variables card, the expected results table, the risk assessment table (hazard, harm, control), the validity / reliability / accuracy cards, the open/closed boundary outline (dashed line around the tube showing what can cross). New painted plates are listed in the Codex asset brief.", "transitionPlan": "The still iron tube and the question open the lesson; the cobalt crystal tube replaces it for the push-and-return loop; the magnesium ribbon and ash plate give the contrast and the open tube returns with a dashed outline; three sealed-or-open boundary plates follow; the six-tube row slides onto the white tile and stays while the variables, expected results and dilution control cards take the right third one at a time; the cobalt bath tube replaces the row for temperature; the validity, risk and aid cards follow; the attempt boards clear the screen and the feedback rebuilds the loop and the tube comparison bar; the plan card and the six-tube row return for the handoff; scene crossfade with settle."},
        'rows': P01_ROWS,
    },
    'p03': {
        'design': D + 'lessons/chem-m5-p03.md',
        'learning_review': D + 'checks/p03-learning-review.md',
        'science_check': D + 'checks/p03-claude-science-check.md',
        'meta': {"title": "Investigating solubility rules: how do you turn a grid of cloudy wells into rules you can trust?", "subtitle": "How do you set up a solubility investigation so a solid can only mean one thing, and how do you turn a grid of results into rules and test your predictions?", "subject": "Chemistry", "yearLevel": 12, "module": 5, "lesson": 18, "lessonIntent": "explaining why the cations are supplied as nitrates and the anions as sodium salts; planning the microscale matrix with predictions first, a check of each stock alone, a clean dropper technique and a black background; naming the independent, dependent and controlled variables and why concentration matters; stating the expected results and tracing each to a rule; writing a rule as a general statement with evidence and exceptions, and separating untested rules; classifying a mismatch as a wrong rule or a technique problem; testing the liquid above a precipitate to find the ion in excess; defining validity, reliability and accuracy for this investigation; writing a risk assessment for lead, silver, barium and hydroxide solutions. No Ksp, no Qsp, no conduct."},
        'hold_seconds': 10,
        'holds': ['attempt-1', 'attempt-2'],
        'ids': ['hook', 'always-soluble-partners', 'predict-method', 'variables', 'expected-results', 'results-to-rules', 'test-predictions', 'test-the-liquid', 'validity-reliability', 'risk-assessment', 'memory-aid', 'attempt-1', 'feedback-1', 'attempt-2', 'feedback-2', 'decision-rule', 'key-notes'],
        'progression': {"prerequisiteKnowledge": "C13 (NAGSAG with exceptions; list the ions, swap partners, check both; precipitate, spectator ions; net ionic equations; \"no precipitate\", not \"no reaction\"; after filtering, the solution holds the spectators plus any ion in excess; AgCl white, PbI2 bright yellow, BaSO4 white), C11 (dissolved ionic compounds are separate hydrated ions), Year 11 (ionic formulas, variables, risk assessment). P01 introduced validity, reliability and accuracy in plain words, but P01 is a branch, so this video gives the plain meanings again in one line each.", "startsWith": "Controlled ionic-solution tests supply primary observations. The video opens: Twenty-five tiny wells. Five positive ions down the side, five negative ions across the top, and a few drops of each in every well.", "stopsAfter": "explaining why the cations are supplied as nitrates and the anions as sodium salts; planning the microscale matrix with predictions first, a check of each stock alone, a clean dropper technique and a black background; naming the independent, dependent and controlled variables and why concentration matters; stating the expected results and tracing each to a rule; writing a rule as a general statement with evidence and exceptions, and separating untested rules; classifying a mismatch as a wrong rule or a technique problem; testing the liquid above a precipitate to find the ion in excess; defining validity, reliability and accuracy for this investigation; writing a risk assessment for lead, silver, barium and hydroxide solutions. No Ksp, no Qsp, no conduct.", "nextLesson": "Ksp, a number for how slightly soluble a compound is (route chem-m5-c14)."},
        'teaching': {"task": "How do you set up a solubility investigation so a solid can only mean one thing, and how do you turn a grid of results into rules and test your predictions?", "causalExplanation": "(1) the grid is the evidence the rules come from (1); (2) nitrates and sodium salts always dissolve, so the only possible solid in a well is the pair being tested; each stock is checked alone first (2); (3) predicting first turns the results into a test; microscale method; keep the dropper out of the well; black background shows white solids (3); (4) variables, and why concentration matters most (4); (5) expected results, each traceable to NAGSAG (5); (6) rows and columns become rules, each with evidence and exceptions; untested ions are not your conclusion (6); (7) a mismatch is either a wrong rule or a technique problem; slightly soluble is a real third category; repeat doubtful cells (7); (8) testing the liquid above a precipitate shows which ion was left over (8); (9) validity, reliability, accuracy for this investigation (9); (10) risk assessment (10); memory aids (11); two attempts with brief feedback (12 to 15); decision rule and handoff (16); key notes (17).", "conversationalApproach": "the investigation is a test of predictions. Design for validity (always-soluble partners, a check of each stock alone), predict every cell, mix microscale, record carefully, read patterns into rules with evidence, evaluate every mismatch, then analyse a mixture's composition by testing its liquid. Validity, reliability and accuracy are named on this investigation. Risk assessment with the real hazards.", "openingDecision": "This grid is the evidence the solubility rules come from. So how do you set it up so the results can be trusted, and how do you turn a grid of cloudy wells into rules?", "understandingCheck": "(A1, Revision 2) potassium chloride mixed with silver nitrate (a syllabus pair); the white solid settles; a drop of potassium chloride added to the clear liquid above gives more white solid: which ions were in that liquid? Answer: K+, NO3- and leftover Ag+ (silver nitrate was in excess). Crossed mistake: \"chloride ions left over\". This transfers the scene 8 logic to a new system and the opposite reagent role; it also differs from C13's attempt 2 (chloride in excess, filtrate named from the excess). (A2) two groups mix calcium nitrate with sodium sulfate; one sees a faint white cloud, the other nothing: explain both, and how to make the result more reliable. Answer: CaSO4 slightly soluble, so whether a cloud shows depends on the amounts (drop size, concentration) and waiting time; a dirty well can fake a cloud; repeat in clean wells with the same concentrations, drops and waiting time, over black, and record \"slight\". Crossed mistake: \"one group was just wrong\".", "curriculumScope": "Syllabus (2017, p51, C5-IQ4-03): \"conduct an investigation to determine solubility rules, and predict and analyse the composition of substances when two ionic solutions are mixed, for example: potassium chloride and silver nitrate; potassium iodide and lead nitrate; sodium sulfate and barium nitrate (ACSCH065)\". This video prepares students to plan, record and analyse the investigation and does not claim to replace conducting it."},
        'design_block': {'renderer': RENDERER, "visualSystem": "Explainer engine: warm paper stage, handwritten Caveat headings, amber doodle layer, three constant zones (short question top left, apparatus centre, one current card in the right third). Colour key: positive ions amber, negative ions violet, every precipitate in its real colour, spectators grey, predictions in pen, observations as the wells themselves. Reuse and new items: C13's rules card (small, scene 5), the C13 matrix grid style (now drawn as wells), the C13 swap-cross icon (scene 2, small), the C13 equation strip for the PbI2 net equation (scene 8), the C13 composition card (\"solid / dissolved\"), `m5x-ppt-pbi2-yellow-v1.png` (settled yellow solid with clear liquid above; scene 8), `m5x-ppt-agcl-white-v1.png` (attempt 1, Revision 2), `m5x-ppt-agcl-white-v1.png`, `m5x-no-ppt-clear-v1.png`, `m5x-ppt-baso4-white-v1.png` (requested in the C13 brief; interim as C13), `m5x-graduated-pipette-v1.png` (drawing off the clear liquid), `m6-white-tile-v1.png`, `m6-wash-bottle-v1.png`, the P01 shared safety plates (`m5x-safety-glasses-v1.png`, `m5x-gloves-v1.png`, `m5x-waste-bottle-v1.png`) and `m5x-dropper-clear-v1.png` (P01 Codex items 5, 9 to 11), the countdown ring and the key notes board. New coded items: the well fills (drops landing, clear, cloud, solid in its real colour), the predict-then-observe overlay (each cell shows the prediction as a pen mark and the observation as the well), the black card under the plate (a plain rectangle), the rule-with-evidence card, the mismatch sorter (\"rule wrong\" / \"technique\"), the variables card, the risk table. New painted plates are listed in the Codex asset brief (well plate, dropper bottle).", "transitionPlan": "The well plate fills with clear and cloudy wells to open; the ten dropper bottles line up beside it for the design choice; the book grid slides under the plate for the method and the black card slides half under it; the plate stays centre while the variables, expected results, rule-with-evidence, mismatch sorter, validity and risk cards take the right third one at a time; the settled lead iodide tube and pipette replace the plate for the composition test; the aids and the plan card follow; each attempt clears the board and the feedback rebuilds the composition card or the repeat wells; scene crossfade with settle."},
        'rows': P03_ROWS,
    },
    'm6c01': {
        'design': D + 'lessons/chem-m6-c01.md',
        'learning_review': D + 'checks/m6c01-learning-review.md',
        'science_check': D + 'checks/m6c01-claude-science-check.md',
        'meta': {"title": "How did acid and base models improve? From \"acids contain oxygen\" to proton transfer", "subtitle": "Ammonia is clearly a base, but it contains no hydroxide. Why did chemists keep changing what \"acid\" and \"base\" mean, and how does proton transfer explain what the older models couldn't?", "subject": "Chemistry", "yearLevel": 12, "module": 6, "lesson": 1, "lessonIntent": "stating the Lavoisier, Davy, Arrhenius and Brønsted-Lowry definitions with the observation that limited each; explaining why ammonia, carbonates and HCl(g) + NH₃(g) defeat the Arrhenius model and how proton transfer explains each; writing HCl + H₂O → H₃O⁺ + Cl⁻ and NH₃ + H₂O ⇌ NH₄⁺ + OH⁻ and saying where the OH⁻ comes from; identifying the Brønsted-Lowry acid and base in a given equation by following the proton; stating one limitation of the Brønsted-Lowry model; assessing a claim about a model. No conjugate pairs, no strength, no pH, no Lewis theory beyond its name."},
        'hold_seconds': 10,
        'holds': ['attempt-1', 'attempt-2'],
        'ids': ['hook', 'models-change', 'lavoisier', 'davy', 'arrhenius', 'arrhenius-ammonia', 'more-failures', 'bronsted-lowry', 'hcl-water', 'ammonia-water', 'gas-carbonate', 'follow-proton', 'bl-limit', 'memory-aid', 'attempt-1', 'feedback-1', 'attempt-2', 'feedback-2', 'decision-rule', 'key-notes'],
        'progression': {"prerequisiteKnowledge": "Year 11: atoms, ions, ionic and covalent formulas, polyatomic ions (hydroxide, carbonate, hydrogen carbonate, ammonium, sulfate), balancing, state symbols; acids, bases, neutralisation and litmus (Module 3 reactions). Module 5: the double arrow means a reversible reaction at equilibrium (chem-m5-c01; chem-m5-c05). Not assumed: conjugate pairs, strength, pH.", "startsWith": "Compare Arrhenius acid and base definitions in water, after a 45 second Lavoisier and Davy run-up. The video opens: Here's a bottle of household ammonia cleaner. Touch it with red litmus paper, and the paper turns blue. So it's a base.", "stopsAfter": "stating the Lavoisier, Davy, Arrhenius and Brønsted-Lowry definitions with the observation that limited each; explaining why ammonia, carbonates and HCl(g) + NH₃(g) defeat the Arrhenius model and how proton transfer explains each; writing HCl + H₂O → H₃O⁺ + Cl⁻ and NH₃ + H₂O ⇌ NH₄⁺ + OH⁻ and saying where the OH⁻ comes from; identifying the Brønsted-Lowry acid and base in a given equation by following the proton; stating one limitation of the Brønsted-Lowry model; assessing a claim about a model. No conjugate pairs, no strength, no pH, no Lewis theory beyond its name.", "nextLesson": "naming acids and bases and predicting the products of acid reactions (route chem-m6-c02)."},
        'teaching': {"task": "Ammonia is clearly a base, but it contains no hydroxide. Why did chemists keep changing what \"acid\" and \"base\" mean, and how does proton transfer explain what the older models couldn't?", "causalExplanation": "(1) ammonia is a base with no hydroxide: puzzle (1); (2) a model is a definition that predicts; it is replaced by an observation it cannot explain (2); (3) Lavoisier: oxygen; broken by HCl (3); (4) Davy: hydrogen; methane shows hydrogen alone does not identify an acid, and no bases (4); (5) Arrhenius: H⁺ and OH⁻ in water; explains neutralisation and shared acid behaviour (5); (6) Arrhenius needs a base with its own OH⁻, so ammonia needed a made-up compound (6); (7) carbonates and a gas reaction with no aqueous medium also fail (7); (8) Brønsted-Lowry: donor and acceptor of a proton; a proton is a hydrogen ion (8); (9) HCl gives a proton to water; H₃O⁺ is what H⁺(aq) means (9); (10) water gives a proton to ammonia; the OH⁻ comes from water (10); (11) the gas reaction and carbonate solved the same way (11); (12) acid and base are roles: follow the proton (12); (13) Brønsted-Lowry's own limit: CaO + SO₃ has no proton (13); memory aid (14); two attempts and brief feedback (15 to 18); decision rule and handoff (19); key notes (20).", "conversationalApproach": "one puzzle carries the video: ammonia turns litmus blue but has no hydroxide. The models arrive in date order, each with the observation it could not explain (HCl, methane and no bases, ammonia and carbonates and a gas reaction); then proton transfer is shown working in water (HCl, ammonia) and without an aqueous medium (the gas tube), water is seen in both roles, and even Brønsted-Lowry gets its limit. Two exam questions follow with brief feedback.", "openingDecision": "Ammonia turns red litmus blue, so it's a base, but its formula has no hydroxide. For decades the leading theory said a base had to supply its own hydroxide. So how can ammonia be a base?", "understandingCheck": "(A1) HCO₃⁻(aq) + H₂O(l) ⇌ H₂CO₃(aq) + OH⁻(aq): identify the Brønsted-Lowry acid and base in the forward reaction and justify in terms of proton transfer. Answer: water is the acid (loses a proton, becomes OH⁻); HCO₃⁻ is the base (gains a proton, becomes H₂CO₃). Crossed mistake: \"HCO₃⁻ is the acid because it contains H\". (A2) assess \"The Arrhenius model has been proved wrong, so it should no longer be used\", referring to ammonia. Answer: not valid; the model is limited, not wrong; it works for acids and hydroxide bases in water but needs a base with its own OH⁻, so it cannot explain ammonia, which Brønsted-Lowry explains as a proton acceptor. Crossed mistake: \"Arrhenius was proved wrong\".", "curriculumScope": "Syllabus (NSW Chemistry Stage 6, 2017, p53; local catalogue ID C6-IQ1-06): \"explore the changes in definitions and models of an acid and a base over time to explain the limitations of each model, including but not limited to: Arrhenius’ theory; Brønsted–Lowry theory (ACSCH064, ACSCH067)\". Conjugate pairs are chem-m6-c06; strength and arrows chem-m6-c05; pH chem-m6-c07."},
        'design_block': {'renderer': RENDERER, "visualSystem": "Explainer engine: warm paper stage, handwritten Caveat headings, amber doodle layer. Colour key: the proton (H⁺) is always a small teal token; acids (donors) amber outline; bases (acceptors) violet outline; water molecules pale blue; spent or rejected ideas grey. Board layout (constant): a timeline band across the top (four dated name cards, added one at a time, then dimmed to a strip); the main zone below holds the plate, the particle lens or the equation strip, one at a time; the short question top-left in one line. No human figures: every scientist is a dated name card. Reuse: the C13 equation strip, token flight and crossed-chip style; the countdown ring; the key notes board; painted plates m6-household-cleaner-bottle-v1.png, m5x-ammonia-bottle-v1.png, m6-baking-soda-box-v1.png, m6-beaker-v1.png, m5x-strong-acid-mg-v1.png. New: the proton-hop motion (donor charge down one, acceptor up one), the aligned litmus pair and the aligned ammonium chloride tube pair (Codex asset brief; coded interims are not approved for release).", "transitionPlan": "The cleaner bottle and litmus strip open the puzzle; the timeline band draws and fills one dated card per model, each card gaining its stamp as its failure is shown; the timeline dims to a strip while the lens and equation strip work HCl in water, ammonia in water and the gas tube; the two water equations stack for the roles scene; the timeline brightens for the Brønsted-Lowry limit and the memory aid; each attempt clears the board and its feedback underlines the question as it rebuilds the token hop; the decision rule card and next chip close; scene crossfade with settle."},
        'rows': M6C01_ROWS,
    },
    'm6c02': {
        'design': D + 'lessons/chem-m6-c02.md',
        'learning_review': D + 'checks/m6c02-learning-review.md',
        'science_check': D + 'checks/m6c02-claude-science-check.md',
        'meta': {"title": "Naming acids and bases, and predicting acid reaction products: how do the names tell you what forms?", "subtitle": "Given an acid and the substance it reacts with, how do you name everything, predict the products, and write the balanced equation?", "subject": "Chemistry", "yearLevel": 12, "module": 6, "lesson": 2, "lessonIntent": "naming binary acids, oxoacids, hydroxide bases, ammonia and carbonates from formulas and back; stating the common properties of acids and bases; predicting the salt and other products for an acid with a hydroxide, ammonia, a carbonate or hydrogen carbonate, and a reactive metal, and explaining why each product forms; writing the salt formula from charges and balancing, including two- and three-proton acids; predicting no reaction for a metal below hydrogen; naming the gas test that tells CO₂ from H₂. No indicators, no strength, no net ionic neutralisation, no enthalpy."},
        'hold_seconds': 10,
        'holds': ['attempt-1', 'attempt-2'],
        'ids': ['hook', 'binary-acids', 'oxoacids', 'naming-bases', 'properties', 'salt-rule', 'acid-hydroxide', 'acid-ammonia', 'acid-carbonate', 'acid-metal', 'above-hydrogen', 'gas-tests', 'memory-aid', 'attempt-1', 'feedback-1', 'attempt-2', 'feedback-2', 'decision-rule', 'key-notes'],
        'progression': {"prerequisiteKnowledge": "C01 (Brønsted-Lowry: an acid donates a proton, a base accepts one; ammonia and carbonates are proton acceptors; HCl(g) is hydrogen chloride). Year 11: ionic formulas from charges; polyatomic ion names and charges (sulfate, sulfite, nitrate, nitrite, phosphate, carbonate, hydrogen carbonate, hydroxide, ammonium); balancing; state symbols; acid reactions and the metal activity series (Module 3); oxidation as electron loss (Module 3).", "startsWith": "Name common inorganic acids and bases. The video opens: Add hydrochloric acid to three different things. A strip of magnesium fizzes. A few marble chips fizz too. And sodium hydroxide solution doesn't fizz at all, it just gets warm.", "stopsAfter": "naming binary acids, oxoacids, hydroxide bases, ammonia and carbonates from formulas and back; stating the common properties of acids and bases; predicting the salt and other products for an acid with a hydroxide, ammonia, a carbonate or hydrogen carbonate, and a reactive metal, and explaining why each product forms; writing the salt formula from charges and balancing, including two- and three-proton acids; predicting no reaction for a metal below hydrogen; naming the gas test that tells CO₂ from H₂. No indicators, no strength, no net ionic neutralisation, no enthalpy.", "nextLesson": "the heat given out in neutralisation and how to calculate it (route chem-m6-c03)."},
        'teaching': {"task": "Given an acid and the substance it reacts with, how do you name everything, predict the products, and write the balanced equation?", "causalExplanation": "(1) one acid, three partners, three outcomes (1); (2) the common inorganic acids fall into two groups; binary acids: hydro- ... -ic (2); (3) oxoacids from the ion: -ate to -ic, -ite to -ous, never hydro- (3); (4) bases: hydroxides named as ionic compounds, ammonia, carbonates (4); (5) family properties, caused by acids giving away protons and bases taking them, with strength deferred (5); (6) every acid reaction here makes a salt: positive ion from the partner, negative ion from the acid; formula from charges (6); (7) hydroxide: each OH⁻ accepts a proton and becomes water (7); (8) ammonia: the proton makes NH₄⁺, no OH⁻, so no water (8); (9) carbonate: accepts two protons, carbonic acid breaks into water and CO₂ (9); (10) reactive metal: electron transfer, not proton transfer, gives H₂ (10); (11) only metals above hydrogen; H₂ not H (11); (12) telling the two gases apart (12); memory aid (13); two attempts and brief feedback (14 to 17); decision rule and handoff (18); key notes (19).", "conversationalApproach": "one acid meets three partners and gives three results; the video names everything first (binary acids, oxoacids from their ion, bases), then explains each reaction pattern by what happens to the acid's proton (or, for a metal, the electrons), builds each salt from charges before balancing, and closes the hook's three cases one by one. Two exam questions follow with brief feedback.", "openingDecision": "Same acid, three different results: magnesium fizzes, marble fizzes, sodium hydroxide just gets warm. By the end you'll be able to name every substance, predict the products of each reaction and balance the equations.", "understandingCheck": "(A1) write a balanced equation with states for dilute nitric acid and solid calcium carbonate. Answer: CaCO₃(s) + 2HNO₃(aq) → Ca(NO₃)₂(aq) + H₂O(l) + CO₂(g). Crossed mistake: leaving out CO₂. (A2) zinc granules and copper turnings in separate samples of dilute sulfuric acid, with a supplied activity series: predict the observations and write any equation. Answer: zinc fizzes and dissolves, Zn(s) + H₂SO₄(aq) → ZnSO₄(aq) + H₂(g); copper shows no visible change and has no equation. Crossed mistake: \"Cu + H₂SO₄ → CuSO₄ + H₂\".", "curriculumScope": "Syllabus (NSW Chemistry Stage 6, 2017, p52; local catalogue IDs C6-IQ1-01 and C6-IQ1-03): \"investigate the correct IUPAC nomenclature and properties of common inorganic acids and bases (ACSCH067)\" and \"predict the products of acid reactions and write balanced equations to represent: acids and bases; acids and carbonates; acids and metals (ACSCH067)\". Indicators are chem-m6-c13 and chem-m6-p01; strength chem-m6-c05; net ionic neutralisation and its heat chem-m6-c03."},
        'design_block': {'renderer': RENDERER, "visualSystem": "Explainer engine: warm paper stage, handwritten Caveat headings, amber doodle layer. Colour key: the proton (H⁺) teal token as in C01; positive ions amber; negative ions violet; water pale blue; CO₂ grey-green bubbles; H₂ white bubbles; electrons small yellow dots (scene 10 only). Board layout (constant): top-left the short question in one line; under it the equation strip (one equation at a time); the right two thirds hold the naming card, the salt builder or the particle lens; plates in a column on the far left. Reuse: C13 equation strip, charge tiles and crossed chips; C01 proton token and hop; countdown ring; key notes board; painted plates m5x-strong-acid-mg-v1.png, m6-beaker-v1.png, the baking soda and vinegar clip pair, m6-antacid-tablets-v1.png, m6-lemon-v1.png, m6-vinegar-bottle-v1.png, m6-soap-bar-v1.png, m6-household-cleaner-bottle-v1.png, m5x-ammonia-bottle-v1.png, and the C01 litmus pair. New coded items: naming cards with template blocks, the salt builder with charge tallies, the activity series bar. New painted plates (marble, zinc and copper beakers, limewater pair, splint pop, fertiliser granules) are in the Codex asset brief; no hands.", "transitionPlan": "The three hook beakers open side by side; the naming cards take the right two thirds for binary acids, oxoacids and bases, with earlier rows dimming; the properties columns slide together on neutralise; the salt builder appears and stays while each pattern card, lens and equation strip build one pattern at a time, and the hook's beakers return as each of their cases closes; the activity series bar and the gas-test pair follow; the memory card gathers the pattern cards; each attempt clears the board and its feedback underlines the question as it rebuilds the salt builder and strip; the decision rule card and next chip close; scene crossfade with settle."},
        'rows': M6C02_ROWS,
    },
    # BEGIN generated entries: m6c03-m6c08, skills01, skills02
    'm6c03': {
        'design': D + 'lessons/chem-m6-c03.md',
        'learning_review': D + 'checks/m6c03-learning-review.md',
        'science_check': D + 'checks/m6c03-claude-science-check.md',
        'meta': {"title": "How is neutralisation heat calculated? From a temperature rise to kilojoules per mole of water", "subtitle": "Mixing an acid with a base warms the solution. How do you turn that temperature rise into the heat released per mole of water, and why does it come out negative?", "subject": "Chemistry", "yearLevel": 12, "module": 6, "lesson": 3, "lessonIntent": "explaining why neutralisation releases heat using the net ionic equation and spectator ions; explaining why ΔH is negative; defining the enthalpy of neutralisation per mole of water; explaining why acids and bases completely split into ions give about −57 kJ/mol whichever pair is used; calculating q with the total mass, the moles of water from the reactant that runs out (including a two-proton acid) and ΔH in kJ/mol; giving heat loss as the likely reason a result is less negative than −57; predicting the effect of scaling the volumes. No practical method or error table (chem-m6-p02), no weak-acid explanation (chem-m6-c09), no strength terms (chem-m6-c05)."},
        'hold_seconds': 10,
        'holds': ["attempt-1", "attempt-2"],
        'ids': ["hook", "why-warm", "per-mole", "same-reaction", "calorimeter", "we1-givens", "we1-heat", "we1-moles", "we1-enthalpy", "we2-count", "we2-enthalpy", "memory-aid", "attempt-1", "feedback-1", "attempt-2", "feedback-2", "decision-rule", "key-notes"],
        'progression': {"prerequisiteKnowledge": "C02 (acid + hydroxide → salt + water; HCl, H₂SO₄, HNO₃, NaOH, KOH names and formulas; sulfuric acid gives two protons). C01 (H⁺(aq) means H₃O⁺). Year 11 Module 4: exothermic and endothermic, ΔH as the heat change at constant pressure, q = mcΔT, specific heat capacity of water 4.18 J g⁻¹ °C⁻¹, molar enthalpy ΔH = −q/n. Year 11 Module 2: n = cV with V in litres; limiting reagent; ions in solution. Year 11 Module 3: spectator ions and net ionic equations (also chem-m5-c13). Not assumed: strong and weak acids as defined terms (chem-m6-c05).", "startsWith": "Observe the temperature change during neutralisation. The video opens: Here are two clear, colourless solutions, hydrochloric acid and sodium hydroxide, both at twenty one point five degrees. Pour them together in a foam cup, and there's nothing to see, no bubbles and no colour change. But the temperature climbs to twenty eight degrees.", "stopsAfter": "explaining why neutralisation releases heat using the net ionic equation and spectator ions; explaining why ΔH is negative; defining the enthalpy of neutralisation per mole of water; explaining why acids and bases completely split into ions give about −57 kJ/mol whichever pair is used; calculating q with the total mass, the moles of water from the reactant that runs out (including a two-proton acid) and ΔH in kJ/mol; giving heat loss as the likely reason a result is less negative than −57; predicting the effect of scaling the volumes. No practical method or error table (chem-m6-p02), no weak-acid explanation (chem-m6-c09), no strength terms (chem-m6-c05).", "nextLesson": "doing the experiment and reducing heat loss (route chem-m6-p02)."},
        'teaching': {"task": "Mixing an acid with a base warms the solution. How do you turn that temperature rise into the heat released per mole of water, and why does it come out negative?", "causalExplanation": "(1) neutralisation warms a solution with nothing else to see: how much heat, and how to compare experiments? (1); (2) the only change is H⁺ + OH⁻ → H₂O; the spectator ions do nothing; the water has less chemical energy, so heat is released into the solution (2); (3) exothermic, so ΔH is negative; heat scales with amount, so compare per mole of water: the enthalpy of neutralisation (3); (4) same net reaction for acids and bases completely split into ions, so about −57 kJ/mol for any such pair; others differ, later video (4); (5) the calorimeter assumption and q = mcΔT, with the meaning of m, c and ΔT (5); (6) worked example 1: task, equation, givens, three steps (6); heat with the total mass (7); moles of water (8); divide, sign, compare with −57, heat loss (9); (7) worked example 2: unmatched amounts and a two-proton acid: count the ions, the one that runs out sets the water; leftover reactant releases no heat (10); but it is still warmed, so total mass; divide by moles of water, not acid (11); memory aid (12); two attempts and brief feedback (13 to 16); decision rule and handoff (17); key notes (18).", "conversationalApproach": "one puzzle carries the video: mixing an acid with a base gives no fizz and no colour change, only warmth. The particle lens shows why (only H⁺ and OH⁻ react; the spectator ions do nothing), the negative sign and the per-mole-of-water definition follow from that, then q = mcΔT and ΔH = −q/n are staged one step per line in two worked examples, the second with unmatched amounts and a two-proton acid. Two exam calculations follow with brief feedback.", "openingDecision": "Here are two clear, colourless solutions, hydrochloric acid and sodium hydroxide, both at twenty one point five degrees. Pour them together in a foam cup, and there's nothing to see, no bubbles and no colour change. But the temperature climbs to twenty eight degrees. So how much heat did the reaction give out, and how could you compare it with an experiment that used different amounts?", "understandingCheck": "(A1) \"40.0 mL of 1.50 mol/L nitric acid is mixed with 50.0 mL of 1.00 mol/L potassium hydroxide solution in a polystyrene cup. The temperature rises from 21.0 °C to 28.4 °C. Assume the density of the mixture is 1.00 g/mL and its specific heat capacity is 4.18 J g⁻¹ °C⁻¹. Calculate the molar enthalpy of neutralisation.\" New acid, new base, unequal volumes, base runs out (different from worked example 2, where the acid runs out). Crossed mistake: \"÷ 0.0600 mol (the acid): −46.4 kJ/mol\". (A2) \"A student repeats the experiment in which 50.0 mL of 1.00 mol/L HCl was mixed with 50.0 mL of 1.00 mol/L NaOH, this time using 100.0 mL of each solution at the same concentrations. Predict how the temperature rise and the calculated enthalpy of neutralisation would compare with the first experiment. Justify your answer.\" Crossed mistake: \"ΔT doubles to 13 °C\".", "curriculumScope": "Syllabus (NSW Chemistry Stage 6, 2017), as printed: \"conduct a practical investigation to measure the enthalpy of neutralisation (ACSCH093)\" this video teaches what the measurement means and how to calculate it: why neutralisation warms the solution (the net ionic reaction, spectator ions), the sign of ΔH, the definition per mole of water, q = mcΔT with the total mass, moles of water from the reactant that runs out, and ΔH = −q/n. It names heat loss once as the likely reason a school result is less negative than −57 kJ/mol. The practical itself is chem-m6-p02 (setting up the calorimeter, the risk table, reducing heat loss, temperature-time extrapolation, assessing errors); the site's card 4 error table and cooling-curve extension move there. Why weak acids and bases give different values is chem-m6-c09 (route \"Why can weak-acid neutralisation release different heat?\"); the site's card 2 and worked example 2 are not used here (and carry errors, see corrections), and scene 4 names the difference only as a later video. Strong against weak as a concept is chem-m6-c05: scenes 2 and 4 say \"completely split into ions\", and scene 4 names the term once (\"called strong acids, and a later video explains them\"; Revision 2, project manager decision a). No weak-acid values are given. Applications are chem-m6-c04. No Hess's law, no bond enthalpies."},
        'design_block': {'renderer': RENDERER, "visualSystem": "Explainer engine: warm paper stage, handwritten Caveat headings, amber doodle layer. Colour key on screen throughout: H⁺ teal token (C01); OH⁻ violet; spectator ions grey; water pale blue; heat warm orange ripples; the temperature readout amber digits. Board layout (constant): top-left the short task line; the left column holds the givens card during worked examples (grouped, units attached, \"assume\" lines in grey); the centre holds the lens or the working, one stage per line, earlier lines dimming and leaving once the next step no longer needs them; the calorimeter plate sits small at the right with its readout. Clutter rule: at most three text items bright at once (task, givens card, current line); every label fades when its sentence ends. Reuse: `m6-foam-cup-calorimeter-v1.png` (inspected 19 Oct: white lidded foam cup with a cutaway window showing clear liquid and a steel temperature probe through a bung in the lid; no readout, so a coded readout chip attaches to the probe top), `m6-beaker-v1.png` (twice, the two starting solutions, coded labels), `m5x-thermometer-cold-v1.png` is not used (blue liquid reads as \"cold\" and duplicates the probe). Handoff chip: the calorimeter plate small with a coded lid tick. No new plates needed. No human figures.", "transitionPlan": "The calorimeter plate and its amber readout open the puzzle; the particle lens zooms in for the net ionic reaction and dims as the sign and per-mole cards write; the givens card enters at the left for each worked example while the centre working adds one stage per line and earlier lines dim and leave; each attempt clears the board and its feedback underlines the givens as they are used; the decision rule card and next chip close; scene crossfade with settle."},
        'rows': M6C03_ROWS,
    },
    'm6c04': {
        'design': D + 'lessons/chem-m6-c04.md',
        'learning_review': D + 'checks/m6c04-learning-review.md',
        'science_check': D + 'checks/m6c04-claude-science-check.md',
        'meta': {"title": "Where does neutralisation solve a real problem? Choosing a base for stomachs, soils, chimneys and mine water", "subtitle": "Stomachs, soils, chimneys and mine creeks can all suffer from too much acid. How do you choose a base to neutralise each one, and what does the reaction actually do?", "subject": "Chemistry", "yearLevel": 12, "module": 6, "lesson": 5, "lessonIntent": "identifying the acidic problem in four settings and its cause; choosing a treatment using safety, cost, gentleness and products; writing CaCO₃ + 2HCl, CaCO₃ + 2H⁺, Ca(OH)₂ + SO₂ and H⁺ + OH⁻ equations with the precipitation step Fe³⁺ + 3OH⁻ → Fe(OH)₃; explaining each effect on pH and what is left behind; explaining how SO₂, an acidic oxide with no hydrogen of its own, is neutralised through the sulfurous acid it makes in water; explaining why mine water is treated with hydrated lime rather than limestone. No fertiliser manufacture (C02), no modelling media (chem-m6-c09), no strength (chem-m6-c05), no pH calculation (chem-m6-c07)."},
        'hold_seconds': 10,
        'holds': ["attempt-1", "attempt-2"],
        'ids': ["hook", "choosing", "stomach", "soil-problem", "liming", "acid-rain", "scrubber", "mine-drainage", "lime-treatment", "memory-aid", "attempt-1", "feedback-1", "attempt-2", "feedback-2", "decision-rule", "key-notes"],
        'progression': {"prerequisiteKnowledge": "C02 (acid + hydroxide → salt + water; acid + carbonate → salt + water + CO₂; magnesium hydroxide antacid equation; ammonium sulfate fertiliser; salt formulas from charges). C01 (Brønsted-Lowry: a base accepts a proton; carbonate is a proton acceptor; CaO + SO₃ shows an oxide reaction with no proton, the Brønsted-Lowry limit). Stage 5 (Years 9 and 10): pH scale as \"lower is more acidic, seven neutral\", balancing, states. Module 5: precipitation and Fe(OH)₃ as a brown precipitate (chem-m5-c13). Not assumed: pH calculation, strength.", "startsWith": "Identify an acidic or basic problem in a real setting. The video opens: Four problems. Heartburn from stomach acid. A paddock where young wheat is stunted and yellow.", "stopsAfter": "identifying the acidic problem in four settings and its cause; choosing a treatment using safety, cost, gentleness and products; writing CaCO₃ + 2HCl, CaCO₃ + 2H⁺, Ca(OH)₂ + SO₂ and H⁺ + OH⁻ equations with the precipitation step Fe³⁺ + 3OH⁻ → Fe(OH)₃; explaining each effect on pH and what is left behind; explaining how SO₂, an acidic oxide with no hydrogen of its own, is neutralised through the sulfurous acid it makes in water; explaining why mine water is treated with hydrated lime rather than limestone. No fertiliser manufacture (C02), no modelling media (chem-m6-c09), no strength (chem-m6-c05), no pH calculation (chem-m6-c07).", "nextLesson": "why some acids are strong and others weak, and how that differs from concentration (route chem-m6-c05)."},
        'teaching': {"task": "Stomachs, soils, chimneys and mine creeks can all suffer from too much acid. How do you choose a base to neutralise each one, and what does the reaction actually do?", "causalExplanation": "(1) four problems, one root cause (too much acid), but sodium hydroxide fixes none of them: how do you choose? (1); (2) neutralising uses up the extra hydrogen ions; four questions choose the base (2); (3) stomach: NaOH caustic; antacids barely dissolve and react with the acid they meet; hydroxide gives salt and water, carbonate also CO₂ (3); (4) soil: leaching and ammonium fertiliser make it acidic; below about pH 5.5 aluminium dissolves and damages roots (4); (5) lime: carbonate accepts two H⁺ and breaks into water and CO₂; pH rises; aluminium returns to solids; limestone barely dissolves without acid, so it does not overshoot (5); (6) chimney: sulfur in coal burns to SO₂; in water droplets it makes sulfurous and sulfuric acid: acid rain (6); (7) scrubber: Ca(OH)₂ slurry plus SO₂ gives solid CaSO₃ and water; SO₂ is an acidic oxide with no hydrogen of its own, which makes sulfurous acid in the slurry water for the hydroxide to neutralise; solid collected, often made into gypsum (7); (8) mine drainage: exposed iron sulfide makes sulfuric acid and dissolved iron; harms river life directly and keeps metals dissolved (8); (9) hydrated lime: OH⁻ neutralises H⁺, and rising pH precipitates metal hydroxides as sludge; chosen over limestone because it acts faster and reaches the higher pH some metals need, so the dose is controlled; alkaline waste the other way (9); memory aid: every fix leaves something behind; problem, treatment, equation, effect (10); two attempts and brief feedback (11 to 14); decision rule and handoff (15); key notes (16).", "conversationalApproach": "four real problems share one cause, too much acid, and the hook asks why sodium hydroxide fixes none of them. Each setting is then a short case in the same order (the problem and its cause, the chosen base, the equation, what the reaction leaves behind), with the choice card lighting the criterion in use. Two exam questions follow with brief feedback.", "openingDecision": "Four problems. Heartburn from stomach acid. A paddock where young wheat is stunted and yellow. A coal power station chimney. And a creek running orange below an old mine. Each one comes down to the same thing, too much acid, and each is fixed by neutralising it with a base. But you can't just pour sodium hydroxide into a stomach, a paddock or a river. So how do you choose the base, and what does the reaction actually do?", "understandingCheck": "(A1) \"A lake has become acidic as a result of acid rain, and its fish population is declining. Powdered limestone is added to the lake. Explain how the limestone raises the pH of the lake water. Include a balanced equation in your answer.\" Transfer: the soil reaction moves to a lake, and the student must write the net equation and the cause of the pH rise. Crossed mistake: \"Ca²⁺ ions neutralise the H⁺ ions\" (site quick-check distractor A). (A2) \"Some power stations remove sulfur dioxide from flue gas using powdered limestone, CaCO₃, instead of calcium hydroxide. The products are calcium sulfite and one gas. Write a balanced equation for this reaction, and identify one disadvantage of using limestone.\" Transfer: the scrubber equation with a carbonate instead of a hydroxide. Crossed mistake: \"CaCO₃ + SO₂ → CaSO₃ + H₂O\".", "curriculumScope": "Syllabus (NSW Chemistry Stage 6, 2017), as printed: \"investigate applications of neutralisation reactions in everyday life and industrial processes\" four applications, each taught as a problem, a chosen treatment, an equation and an effect: antacids (everyday), liming acidic soil (agriculture), scrubbing sulfur dioxide from flue gas (industry) and treating acidic mine drainage (industry, with a one-sentence note that alkaline waste is neutralised the other way). Not here: making fertiliser salts (taught in C02 scene 8; recalled in one clause in scene 4 as a cause of soil acidity); particle-diagram and multi-representation modelling of neutralisation (the site's card 6 belongs to the dotpoint \"model neutralisation of strong and weak acids and bases using a variety of media\", route chem-m6-c09); strength (chem-m6-c05); antacid titration and back titration (chem-m6-c15); heat of neutralisation (chem-m6-c03); toothpaste and fluorapatite (fluoride's main role is not neutralisation; left out to keep one main question); the 1952 London smog history (its site claims need sources, see corrections). No pH calculations: pH is used only as \"lower means more acidic, seven is neutral\" (Year 11 and C02 litmus level; pH itself is chem-m6-c07)."},
        'design_block': {'renderer': RENDERER, "visualSystem": "Explainer engine: warm paper stage, handwritten Caveat headings, amber doodle layer. Colour key on screen throughout: H⁺ teal token (C01); OH⁻ violet; carbonate violet outline; CO₂ grey-green bubbles; water pale blue; spectator and product metal ions amber; solids white or rust brown; the pH strip bar acid red to neutral green to base purple, with a white marker. Board layout (constant): the plate for the current setting large on the left; the right holds one thing at a time (the lens, or the equation strip with its tag); a slim \"choice card\" (four words: safe, cheap, gentle, leaves behind) sits small in the top-right corner from scene 2 onward and lights the word being used; the short question sits top-left in one line. Clutter rule: at most three text items bright at once; tags fade when their sentence ends. Reuse: `m6-antacid-tablets-v1.png` (three white chalky tablets, one broken; scene 3, hook), `m6-flue-gas-scrubber-v1.png` (cutaway scrubber tower: dark smoke enters a duct at left, two banks of spray nozzles, milky slurry pool at the base with a pump, a white plume leaves the top; scenes 1, 6, 7, attempt 2 feedback), `m6-fertiliser-granules-v1.png` (scene 4 clause, small), `m5x-ppt-feoh3-brown-v1.png` (brown iron hydroxide precipitate; scene 9 callback), `m6-marble-chips-acid-v1.png` (scene 5, small, to show carbonate fizzing in acid as the same reaction as lime in soil), `m6-beaker-v1.png` (scene 3, coded label \"hydrochloric acid, like stomach acid\"). Not used: `m6-agricultural-liming-v1.png` (inspected: white lime pouring from a metal scoop held by a human hand onto soil beside a seedling; the hand breaks the no-human-figures rule and cropping leaves a floating scoop; replaced by the new pair below). No human figures.", "transitionPlan": "The four setting plates open together, then each takes the large left slot in turn (stomach, paddock, chimney, creek) while the right holds the lens or the equation strip one at a time; the choice card sits in the top-right corner from scene 2 and lights the word in use; the pH strip marker moves as each treatment acts; the memory aid gathers what each fix leaves behind; each attempt clears the board and its feedback underlines the question; the decision rule card and next chip close; scene crossfade with settle."},
        'rows': M6C04_ROWS,
    },
    'm6c05': {
        'design': D + 'lessons/chem-m6-c05.md',
        'learning_review': D + 'checks/m6c05-learning-review.md',
        'science_check': D + 'checks/m6c05-claude-science-check.md',
        'meta': {"title": "How do strength and concentration differ? Strong and weak acids and bases, concentrated and dilute", "subtitle": "Two acids, both 0.10 moles per litre: one reads pH 1.0, the other pH 2.9. If they have the same amount of acid dissolved, why is one so much more acidic, and how is a \"strong\" acid different from a \"concentrated\" one?", "subject": "Chemistry", "yearLevel": 12, "module": 6, "lesson": 6, "lessonIntent": "explaining strong and weak as complete and partial ionisation (or dissociation) with a particle picture; explaining why a weak acid reaches equilibrium with most molecules whole; choosing → or ⇌ for an acid or base in water; naming the common strong acids and strong bases; explaining concentration as amount per litre and drawing the four combinations; explaining why a concentrated weak acid can have a lower pH than a dilute strong acid, and why strength must be compared at equal concentration using pH; explaining why low solubility is not weakness. No pH calculation (chem-m6-c07), no Ka (chem-m6-c10), no conjugate pairs (chem-m6-c06), no conductivity method or practical procedure (chem-m6-p03, chem-m6-p04)."},
        'hold_seconds': 10,
        'holds': ["attempt-1", "attempt-2"],
        'ids': ["hook", "inside-beakers", "strong-weak", "why-weak-stops", "arrows", "strong-list", "concentration", "weak-can-win", "bases", "solubility", "memory-aid", "attempt-1", "feedback-1", "attempt-2", "feedback-2", "decision-rule", "key-notes"],
        'progression': {"prerequisiteKnowledge": "C01 (Brønsted-Lowry acid and base; HCl + H₂O → H₃O⁺ + Cl⁻; NH₃ + H₂O ⇌ NH₄⁺ + OH⁻ with \"only some ammonia molecules do this at any moment\"; H⁺(aq) means H₃O⁺). C02 (acid names and formulas, including acetic acid as the acid in vinegar; metals with acids make hydrogen gas). C03 named \"strong acids\" once. Module 5: dynamic equilibrium and the double arrow (chem-m5-c01, chem-m5-c05). Year 11 Module 2: concentration in mol/L. Stage 5: the pH scale (below 7 acidic, 7 neutral, above 7 basic). Year 11 Module 2: ionic solids dissolving into ions. Not assumed: pH = −log[H⁺], Ka, conjugate pairs.", "startsWith": "Compare particles in two acid or base solutions. The video opens: Here are two beakers of acid, hydrochloric acid and acetic acid, the acid in vinegar. Both labels say zero point one zero moles per litre, so each litre has the same amount of acid dissolved. But a pH meter reads one point zero for the hydrochloric acid, and two point nine for the acetic acid.", "stopsAfter": "explaining strong and weak as complete and partial ionisation (or dissociation) with a particle picture; explaining why a weak acid reaches equilibrium with most molecules whole; choosing → or ⇌ for an acid or base in water; naming the common strong acids and strong bases; explaining concentration as amount per litre and drawing the four combinations; explaining why a concentrated weak acid can have a lower pH than a dilute strong acid, and why strength must be compared at equal concentration using pH; explaining why low solubility is not weakness. No pH calculation (chem-m6-c07), no Ka (chem-m6-c10), no conjugate pairs (chem-m6-c06), no conductivity method or practical procedure (chem-m6-p03, chem-m6-p04).", "nextLesson": "measuring the pH of a range of acids and bases (route chem-m6-p03)."},
        'teaching': {"task": "Two acids, both 0.10 moles per litre: one reads pH 1.0, the other pH 2.9. If they have the same amount of acid dissolved, why is one so much more acidic, and how is a \"strong\" acid different from a \"concentrated\" one?", "causalExplanation": "(1) two acids at the same concentration give different pH and fizz: why? (1); (2) the particle view: every HCl has given its proton to water; only about one acetic acid molecule in eighty has; hydronium makes a solution acidic (2); (3) that is strength: strong ionises completely, weak partly; lower pH means more hydronium, one pH unit is ten times, so about eighty times more (3); (4) a weak acid stops early because the reverse reaction runs too: dynamic equilibrium with most molecules whole; chloride almost never takes a proton back (4); (5) so the arrow: single for complete, double for partial (5); (6) which acids are strong; HF is weak (6); (7) concentration is amount per litre, a separate dial; dilute strong is still strong; four combinations as particle grids (7); (8) a concentrated weak acid can have a lower pH than a dilute strong one, so compare strength at the same concentration; weak is not safe (8); (9) bases: strong hydroxides dissociate completely; ammonia is weak; same-concentration pH 13 against 11; Ca(OH)₂ and Ba(OH)₂ give two OH⁻ (9); (10) limewater: little dissolves, but all that dissolves splits up: low solubility, not weakness (10); memory aid (11); two attempts and brief feedback (12 to 15); decision rule and handoff (16); key notes (17).", "conversationalApproach": "two acids at the same concentration read pH 1.0 and 2.9, and particle lenses inside the two beakers show why: every HCl molecule has given its proton to water, only about one acetic acid molecule in eighty has. Strength is then separated from concentration as two dials, a concentrated weak acid is shown beating a dilute strong one, and bases and low solubility follow the same reasoning. Two exam questions follow with brief feedback.", "openingDecision": "Here are two beakers of acid, hydrochloric acid and acetic acid, the acid in vinegar. Both labels say zero point one zero moles per litre, so each litre has the same amount of acid dissolved. But a pH meter reads one point zero for the hydrochloric acid, and two point nine for the acetic acid. Drop in magnesium, and the hydrochloric acid fizzes hard while the acetic acid barely bubbles. Same amount of acid, so why such a difference?", "understandingCheck": "(A1) \"Nitric acid (HNO₃) and nitrous acid (HNO₂) solutions each have a concentration of 0.10 mol/L at 25 °C. The nitric acid solution has a pH of 1.0 and the nitrous acid solution has a pH of 2.2. Explain the difference in pH. Include an ionic equation for each acid reacting with water, using the correct arrow.\" New pair of acids (the video works HCl and acetic acid); the near-identical formulas test classification. Crossed mistake: \"HNO₂ is more dilute\". (A2) \"A 0.10 mol/L ammonia solution has a pH of 11.1. A 0.0010 mol/L sodium hydroxide solution has a pH of 11.0. A student claims that ammonia and sodium hydroxide are equally strong bases, because their pH values are almost the same. Assess this claim.\" Bases at different concentrations (the video's concentration surprise uses acids). Crossed mistake: \"same pH, same strength\".", "curriculumScope": "Syllabus (NSW Chemistry Stage 6, 2017), as printed: \"conduct an investigation to demonstrate the use of pH to indicate the differences between the strength of acids and bases (ACSCH102)\" \"construct models and/or animations to communicate the differences between strong, weak, concentrated and dilute acids and bases (ACSCH099)\" this video starts with the route's particle comparison (two 0.10 mol/L acids, one lens each) and stops at telling extent of ionisation apart from amount per litre and reading both from pH data. It teaches: strong and weak as complete against partial ionisation (or dissociation, for ionic hydroxides); why a weak acid stops early (a dynamic equilibrium, Module 5 callback); the single against double arrow; the strong-acid list and the strong-base group; concentration as a separate quantity; the four combinations as an animated particle model (the C6-IQ2-05 \"model and/or animation\"); why a concentrated weak acid can have a lower pH than a dilute strong one, so strength must be compared at equal concentration (the logic of the C6-IQ2-03 investigation); solubility against strength for calcium hydroxide. pH is used as a meter reading only: lower means more hydronium, one unit is a factor of ten. Not here: pH = −log[H⁺] and any pH calculation (chem-m6-c07); conducting the pH investigation (chem-m6-p03 measures a range; chem-m6-p04 tests strength through pH); conductivity as evidence (named in the out-of-scope list; p04 and c14); conjugate pairs and why chloride never takes its proton back (chem-m6-c06: scene 4 states it as an observation only, and c06 explains it); Ka and pKa (chem-m6-c10); weak-acid ICE tables (chem-m6-c08); salt hydrolysis (the site's L06 card 4; left for the equivalence-point videos, see Open decisions); the HF bond-enthalpy explanation (a crossed chip only)."},
        'design_block': {'renderer': RENDERER, "visualSystem": "Explainer engine: warm paper stage, handwritten Caveat headings, amber doodle layer. Colour key on screen throughout (C01 and C03): the proton is a small teal token; a hydronium ion is a teal token on a pale blue water; a whole acid molecule has an amber outline; anions grey; hydroxide violet; water pale blue; spent labels grey. Board layout (constant): the short question top-left in one line; the main zone holds the lenses, plates or the equation strip, one group at a time; a small amber pH readout chip sits by each solution it belongs to. Clutter rule: at most three bright text items at once; every tag dims when its sentence ends. Reuse: painted plates (inspected 19 Oct): `m6-beaker-v1.png` (two copies, coded labels \"hydrochloric acid, 0.10 mol/L\" and \"acetic acid, 0.10 mol/L\"; also sodium hydroxide in 9), `m6-ph-meter-probe-beaker-v1.png` (bench meter with a blank green screen and a probe in a beaker of clear liquid; a coded amber readout sits in the screen), `m5x-strong-acid-mg-v1.png` and `m5x-weak-acid-mg-v1.png` (magnesium ribbon fizzing hard against a few bubbles; hook), `m6-vinegar-bottle-v1.png` (hook, small, for \"the acid in vinegar\"), `m5x-ammonia-bottle-v1.png` (scene 9, coded label \"ammonia solution, 0.10 mol/L\"), `m5x-saturated-beaker-v1.png` (clear solution over undissolved white solid; scene 10 with coded label \"limewater: saturated Ca(OH)₂\"). Not used: `m6-limewater-clear-v1.png` and `m6-limewater-milky-v1.png` (a delivery tube bubbling gas into a test tube: they read as the carbon dioxide test, not as a saturated solution); `m6-conductivity-meter-titration-v1.png` (conductivity is out of scope here). No new plates needed. No human figures.", "transitionPlan": "Two beakers with pH chips open; a lens zooms into each to show the protons given away; the arrow strip writes single then double; the strong list writes as a card; the four-combination particle grids build one at a time; the base beakers and the limewater lens reuse the same layout; the memory aid writes large; each attempt clears the board and its feedback underlines the question; the decision rule card and next chip close; scene crossfade with settle."},
        'rows': M6C05_ROWS,
    },
    'm6c06': {
        'design': D + 'lessons/chem-m6-c06.md',
        'learning_review': D + 'checks/m6c06-learning-review.md',
        'science_check': D + 'checks/m6c06-claude-science-check.md',
        'meta': {"title": "How do conjugate pairs and amphiprotic species react? Following the proton both ways", "subtitle": "Baking soda calms an acid, and it also calms a base. How can one ion act as a base in one reaction and an acid in another, and what are the \"conjugate\" partners that every acid-base reaction makes?", "subject": "Chemistry", "yearLevel": 12, "module": 6, "lesson": 9, "lessonIntent": "identifying the Brønsted-Lowry acid and base and both conjugate pairs in a given equation, with one proton and one charge between partners; writing a conjugate acid or base for a given species; explaining with conjugate strength why a strong acid gets → and a weak acid ⇌; explaining why a species is amphiprotic and spotting one from a proton chain; writing the dissolving equation and both water equations for sodium hydrogen carbonate or potassium dihydrogen phosphate; writing water's self-ionisation and saying what neutral means. No Kw value, pH or temperature effects (chem-m6-c07), no Ka or Kb (chem-m6-c10), no salt hydrolysis predictions, no buffers (chem-m6-c11)."},
        'hold_seconds': 10,
        'holds': ["attempt-1", "attempt-2"],
        'ids': ["hook", "run-backwards", "conjugate-pairs", "worked-example", "conjugate-strength", "amphiprotic", "proton-chain", "salt-equations", "water-role", "memory-aid", "attempt-1", "feedback-1", "attempt-2", "feedback-2", "decision-rule", "key-notes"],
        'progression': {"prerequisiteKnowledge": "C01 (follow the proton; Brønsted-Lowry acid and base; HCl + H₂O → H₃O⁺ + Cl⁻; NH₃ + H₂O ⇌ NH₄⁺ + OH⁻; water can be the acid or the base; HCO₃⁻ + H₂O ⇌ H₂CO₃ + OH⁻ met in C01 attempt 1; H₃O⁺ is hydronium). C02 (polyatomic ion names, including hydrogen carbonate, carbonate, phosphate, dihydrogen phosphate, hydrogen phosphate; carbonic acid breaks down into water and carbon dioxide). C05 (strong acid ionises completely, single arrow; weak acid partly, double arrow; acetate takes protons back; dynamic equilibrium). Year 11: ionic salts dissolve into ions; balancing charge. Not assumed: Kw, pH calculation, Ka.", "startsWith": "Follow one proton-transfer equation. The video opens: Sprinkle baking soda into hydrochloric acid, and it fizzes, and the solution becomes less acidic. Now sprinkle it into sodium hydroxide solution. No fizz this time, but the solution becomes less basic.", "stopsAfter": "identifying the Brønsted-Lowry acid and base and both conjugate pairs in a given equation, with one proton and one charge between partners; writing a conjugate acid or base for a given species; explaining with conjugate strength why a strong acid gets → and a weak acid ⇌; explaining why a species is amphiprotic and spotting one from a proton chain; writing the dissolving equation and both water equations for sodium hydrogen carbonate or potassium dihydrogen phosphate; writing water's self-ionisation and saying what neutral means. No Kw value, pH or temperature effects (chem-m6-c07), no Ka or Kb (chem-m6-c10), no salt hydrolysis predictions, no buffers (chem-m6-c11).", "nextLesson": "putting a number on water's self-ionisation and calculating pH for strong acids and bases (route chem-m6-c07)."},
        'teaching': {"task": "Baking soda calms an acid, and it also calms a base. How can one ion act as a base in one reaction and an acid in another, and what are the \"conjugate\" partners that every acid-base reaction makes?", "causalExplanation": "(1) one powder calms an acid and a base: how can one substance play both roles? (1); (2) run a known proton transfer backwards: the products are also an acid and a base, so every reaction can swap the proton back (2); (3) conjugate base and conjugate acid: linked by exactly one proton, charge changes by one, opposite sides (3); (4) worked example: follow the proton in HPO₄²⁻ + H₂O; one proton per pair, so H₂SO₄ pairs with HSO₄⁻ (4); (5) a strong acid's conjugate base has almost no pull on a proton, so the reaction goes all the way (→); a weak acid's conjugate base pulls protons back (⇌) (5); (6) hydrogen carbonate takes a proton from hydronium (fizz) and gives one to hydroxide (no gas): amphiprotic (6); (7) in a proton chain the middle species can give and take; the ends do one job (7); (8) a salt dissolves into a spectator ion and the amphiprotic ion; one water equation for each role (8); (9) water is the middle of its own chain, so it reacts with itself; a tiny equilibrium in equal amounts; neutral means equal (9); memory aid (10); two attempts and brief feedback (11 to 14); decision rule and handoff (15); key notes (16).", "conversationalApproach": "one powder, baking soda, calms both an acid and a base. Running a known proton transfer backwards shows that the products are also an acid and a base, which gives conjugate pairs; conjugate strength explains the single and double arrows; hydrogen carbonate is then shown taking a proton in one reaction and giving one in another, as the middle of a proton chain, and water turns out to be the middle of its own chain. Two exam questions follow with brief feedback.", "openingDecision": "Sprinkle baking soda into hydrochloric acid, and it fizzes, and the solution becomes less acidic. Now sprinkle it into sodium hydroxide solution. No fizz this time, but the solution becomes less basic. The same white powder calms an acid and calms a base. So how can one substance act as a base in one reaction, and as an acid in another?", "understandingCheck": "(A1) \"Potassium dihydrogen phosphate, KH₂PO₄, is used in foods as an acidity regulator. Write an equation for KH₂PO₄ dissolving in water. Then write two equations, each with water as the reaction partner, to show that the dihydrogen phosphate ion is amphiprotic.\" The second syllabus salt (the video works sodium hydrogen carbonate); the chain in scene 7 names the species but writes none of these equations. Crossed mistake: \"H₂PO₄⁻ + H₂O ⇌ PO₄³⁻ + ...\" (two protons in one step). (A2) \"NH₄⁺(aq) + CO₃²⁻(aq) ⇌ NH₃(aq) + HCO₃⁻(aq). Identify the two conjugate acid-base pairs in this reaction, and state which species is the Brønsted-Lowry acid.\" New equation with no water in it. Crossed mistake: \"NH₄⁺ / CO₃²⁻ is a pair\" (same side).", "curriculumScope": "Syllabus (NSW Chemistry Stage 6, 2017), as printed: \"write ionic equations to represent the dissociation of acids and bases in water, conjugate acid/base pairs in solution and amphiprotic nature of some salts, for example:; sodium hydrogen carbonate; potassium dihydrogen phosphate\" this video starts from one proton-transfer equation the student already knows (NH₃ + H₂O ⇌ NH₄⁺ + OH⁻, C01) and runs it backwards to find the conjugate pairs. It teaches: conjugate acid and base and the one-proton, one-charge rule; identifying both pairs in an unfamiliar equation (the site's HPO₄²⁻ example); conjugate strength, used to explain C05's arrows; amphiprotic species, with sodium hydrogen carbonate reacting both ways (the hook), the proton chain for spotting them (carbonate, phosphate, water), and the dissolving equation plus both water equations for a syllabus salt; water's self-ionisation as water's own role, with \"neutral means equal hydronium and hydroxide\". It stops at identifying pairs, water's role and an amphiprotic species. Not here: Kw as a number, pH and pOH, and neutral pH at other temperatures (chem-m6-c07, whose route start assumes complete ionisation and whose pOH method needs Kw; scene 15 hands off to it); Ka, Kb and Ka × Kb = Kw (chem-m6-c10); predicting which way an amphiprotic ion reacts from Ka values (the site's HPO₄²⁻ \"Kb > Ka3\" example; chem-m6-c10 and buffers chem-m6-c11); salt hydrolysis (see Open decisions); buffers (chem-m6-c11); \"amphoteric\" (author note e). The Kohlrausch history is not used (register draft correction)."},
        'design_block': {'renderer': RENDERER, "visualSystem": "Explainer engine: warm paper stage, handwritten Caveat headings, amber doodle layer. Colour key on screen throughout (C01): the proton is a small teal token; a donor (acid) gets an amber outline; an acceptor (base) a violet outline; water pale blue; pair brackets in matching colours (amber pair above the equation, violet pair below); spent labels grey. Board layout (constant): the short question top-left in one line; the equation strip centre; pair brackets above and below it; a plate or lens at the right only when it carries the explanation. Clutter rule: at most three bright text items at once; every tag dims when its sentence ends. Reuse: painted plates (inspected 19 Oct): `m6-baking-soda-box-v1.png` (hook and scene 8), `m6-clip-baking-soda-vinegar-before-v1.png` (white powder resting in clear liquid, no bubbles) and `m6-clip-baking-soda-vinegar-fizz-v1.png` (the same beaker fizzing; aligned pair). In the hook the left beaker uses the pair with the coded label \"hydrochloric acid\" (the plates show only a clear liquid; nothing in them reads as vinegar), and the right beaker uses the \"before\" plate alone with the coded label \"sodium hydroxide solution\", so it stays quiet. `m5x-ammonia-bottle-v1.png` (scene 2, small). `m6-beaker-v1.png` (scene 9, \"very pure water\"). Not used: `m6-ph-meter-probe-beaker-v1.png` (no pH numbers before c07; the hook shows the change as a coded arrow toward neutral). No new plates needed. No human figures.", "transitionPlan": "The baking soda plate and the two clip plates open the puzzle; the equation strip runs forward and then backwards with the teal token hopping; pair brackets draw above and below the strip in matching colours; the proton chain builds as a row of species; the salt equations stack one per role; water self-ionisation writes as its own chain; the memory aid writes large; each attempt clears the board and its feedback underlines the question; the decision rule card and next chip close; scene crossfade with settle."},
        'rows': M6C06_ROWS,
    },
    'm6c07': {
        'design': D + 'lessons/chem-m6-c07.md',
        'learning_review': D + 'checks/m6c07-learning-review.md',
        'science_check': D + 'checks/m6c07-claude-science-check.md',
        'meta': {"title": "How do we calculate pH for strong acids and bases? From concentration to pH, through Kw, dilution and mixing", "subtitle": "A pH meter reads 1.00 in a strong acid and 13.00 in a strong base of the same concentration. Where do those numbers come from, how can a base have a pH at all, and what happens to the pH when you dilute a solution or mix an acid with a base?", "subject": "Chemistry", "yearLevel": 12, "module": 6, "lesson": 10, "lessonIntent": "calculating pH from the concentration of a strong acid and pOH and pH for a strong base, including bases that release two hydroxide ions; converting pH back to [H₃O⁺] and pH or pOH to [OH⁻]; writing Kw and using it to link [H₃O⁺] and [OH⁻]; explaining why Kw rises with temperature and why pure water above 25 °C has a pH below 7 but is still neutral; reporting pH to the right number of decimal places; calculating pH after diluting a strong acid or base; calculating pH after mixing a strong acid with a strong base, using the excess and the total volume; checking that the acid or base is strong before using these methods. No weak-acid pH (chem-m6-c08), no Ka or pKa (chem-m6-c10), no buffers (chem-m6-c11), no salt or equivalence-point pH (chem-m6-c13, c14), no sulfuric acid pH calculation (scene 8 states only when [H⁺] = 2c may be used)."},
        'hold_seconds': 10,
        'holds': ["attempt-1", "attempt-2"],
        'ids': ["hook", "ph-meaning", "we1-strong-acid", "ph-backwards", "kw", "kw-temperature", "base-poh", "we2-strong-base", "dilution", "mixing-method", "we3-excess", "we3-ph", "memory-aid", "attempt-1", "feedback-1", "attempt-2", "feedback-2", "decision-rule", "key-notes"],
        'progression': {"prerequisiteKnowledge": "C05 (strong acids and bases ionise or dissociate completely; the strong-acid list including HCl and HNO₃; strong bases include NaOH, KOH, Ca(OH)₂ and Ba(OH)₂, with Ca(OH)₂ and Ba(OH)₂ giving two OH⁻; lower pH means more hydronium; one pH unit is a factor of ten; the meter readings 1.0 and 13.0 for 0.10 mol/L HCl and NaOH). C06 (water self-ionises, H₂O + H₂O ⇌ H₃O⁺ + OH⁻, to a tiny extent; neutral means equal hydronium and hydroxide; C06 scene 9 promised \"the next video links that to pH seven\"). C01 (H⁺(aq) means H₃O⁺). C03 (H⁺ + OH⁻ → H₂O; the ion that runs out first). Module 5: K expressions with water left out (chem-m5-c05); Le Chatelier's principle, including temperature on an endothermic equilibrium (chem-m5-c03, c09). Year 11 Module 2: n = cV with V in litres; c₁V₁ = c₂V₂ is not assumed (scene 9 works through moles). Mathematics: powers of ten; a calculator's log key. Not assumed: logarithm rules beyond \"log of 10ⁿ is n\".", "startsWith": "Start with a stated concentration and complete ionisation. The video opens: A pH meter in zero point one zero moles per litre hydrochloric acid reads one point zero zero. In sodium hydroxide at the same concentration, it reads thirteen point zero zero. Where do those numbers come from?", "stopsAfter": "calculating pH from the concentration of a strong acid and pOH and pH for a strong base, including bases that release two hydroxide ions; converting pH back to [H₃O⁺] and pH or pOH to [OH⁻]; writing Kw and using it to link [H₃O⁺] and [OH⁻]; explaining why Kw rises with temperature and why pure water above 25 °C has a pH below 7 but is still neutral; reporting pH to the right number of decimal places; calculating pH after diluting a strong acid or base; calculating pH after mixing a strong acid with a strong base, using the excess and the total volume; checking that the acid or base is strong before using these methods. No weak-acid pH (chem-m6-c08), no Ka or pKa (chem-m6-c10), no buffers (chem-m6-c11), no salt or equivalence-point pH (chem-m6-c13, c14), no sulfuric acid pH calculation (scene 8 states only when [H⁺] = 2c may be used).", "nextLesson": "practice questions on strong acid and base pH, dilution and mixing (route chem-m6-g01), then weak acid and base pH with an ICE table (chem-m6-c08)."},
        'teaching': {"task": "A pH meter reads 1.00 in a strong acid and 13.00 in a strong base of the same concentration. Where do those numbers come from, how can a base have a pH at all, and what happens to the pH when you dilute a solution or mix an acid with a base?", "causalExplanation": "(1) a meter reads 1.00 in a strong acid and 13.00 in a strong base: where do the numbers come from, and how does a base have a pH? (1); (2) pH is −log[H₃O⁺]; a strong acid gives [H₃O⁺] = c, so 10⁻¹ gives pH 1; the log turns each factor of ten into one step (2); (3) a strong acid worked example; why decimal places carry the precision (3, rule card names [H₃O⁺]); (4) going back: [H₃O⁺] = 10⁻ᵖᴴ (4); (5) water's self-ionisation (C06) is an equilibrium, so it has a constant: Kw = [H₃O⁺][OH⁻] = 1.0 × 10⁻¹⁴ at 25 °C; it holds in every solution; added hydroxide shifts the equilibrium back and lowers hydronium (5); (6) the forward reaction absorbs heat, so Kw rises with temperature; neutral pH falls below 7 but the water stays neutral (6); (7) the base's hydronium from Kw, and the shortcut pH + pOH = 14 (7); (8) a strong base releasing two hydroxide ions; stopping at pOH is the slip (8); (9) dilution conserves moles, so concentration falls with volume; pH moves toward 7 and never past it (9); (10) mixing reacts H⁺ with OH⁻ first; the excess sets the pH and spreads through the total volume (10 to 12); memory aid (13); two attempts and brief feedback (14 to 17); decision rule with the strong-or-weak check, and handoff (18); key notes (19).", "conversationalApproach": "a meter reads 1.00 in a strong acid and 13.00 in a strong base, and the video works out where both numbers come from. pH is introduced as minus the log of the hydronium concentration, Kw then explains how a base has a pH, temperature shows that neutral is not always pH 7, and dilution and mixing are staged one step per line in worked examples. Two exam calculations follow with brief feedback.", "openingDecision": "A pH meter in zero point one zero moles per litre hydrochloric acid reads one point zero zero. In sodium hydroxide at the same concentration, it reads thirteen point zero zero. Where do those numbers come from? And sodium hydroxide makes hydroxide ions, not hydronium, so how can it have a pH?", "understandingCheck": "(A1) \"25.0 mL of 0.120 mol/L nitric acid is mixed with 35.0 mL of 0.0500 mol/L potassium hydroxide solution at 25 °C. Calculate the pH of the resulting mixture.\" New acid and base; the acid is in excess (the worked example had excess base), so the student must take the direct pH route, not pOH. Crossed mistake: \"÷ 0.0250 L (acid only): pH 1.301\". (A2) \"A potassium hydroxide solution has a pH of 12.30 at 25 °C. Calculate the hydroxide ion concentration in this solution.\" Reverses the calculation for a base (scene 4 reversed an acid). Crossed mistake: \"[OH⁻] = 10⁻¹²·³⁰ = 5.0 × 10⁻¹³ mol/L\".", "curriculumScope": "Syllabus (NSW Chemistry Stage 6, 2017), as printed: \"calculate pH, pOH, hydrogen ion concentration ([H+]) and hydroxide ion concentration ([OH–]) for a range of solutions (ACSCH102)\" \"calculate the pH of the resultant solution when solutions of acids and/or bases are diluted or mixed\" this video starts from the route's stated concentration with complete ionisation and stops at choosing the dilution or mixing method. It teaches: pH = −log₁₀[H₃O⁺] and why the log and the minus sign are there; [H₃O⁺] = c for a strong monoprotic acid; the decimal-places rule for pH; [H₃O⁺] = 10⁻ᵖᴴ; Kw = [H₃O⁺][OH⁻] = 1.0 × 10⁻¹⁴ at 25 °C as the constant on C06's self-ionisation, holding in every aqueous solution; Kw rising with temperature (37 °C and 60 °C examples), so neutral pH equals 7 only at 25 °C; pOH and pH + pOH = 14 at 25 °C; strong bases releasing one or two OH⁻ per formula unit; dilution (moles conserved, pH moves toward 7 and never past it); strong acid plus strong base mixing (neutralise, then divide the excess by the total volume); the strong-or-weak check that chooses the method. Not here: weak acid and weak base pH (chem-m6-c08, after the practice video chem-m6-g01); Ka, pKa and Ka × Kb = Kw (chem-m6-c10); buffers and Henderson-Hasselbalch (chem-m6-c11; site L11 cards on partial neutralisation not used); equivalence-point pH of salts (chem-m6-c13, c14); sulfuric acid pH calculations (only the conditional \"assume both H⁺ are released\" line is taught, scene 8; Open decisions); measuring pH in the lab (chem-m6-p03). The site's Astrup hook and blood-pH clinical framing are not used (register draft correction)."},
        'design_block': {'renderer': RENDERER, "visualSystem": "Explainer engine: warm paper stage, handwritten Caveat headings, amber doodle layer. Colour key on screen throughout: H₃O⁺ teal token on pale blue water (C01); OH⁻ violet; water pale blue; spectator ions grey; meter readouts amber digits; pOH lines violet-tinted, pH lines teal-tinted. Board layout (constant, C03): top-left the short task line; the left column holds the givens card during worked examples (grouped, units attached); the centre holds the lens, the log ruler or the working, one stage per line, earlier lines dimming and leaving once the next step no longer needs them; a plate sits small at the right only when it carries the explanation. Clutter rule: at most three text items bright at once (task, givens card, current line); every label fades when its sentence ends. Reuse: painted plates (inspected 19 Oct): `m6-ph-meter-probe-beaker-v1.png` (bench meter with a blank green screen, probe in a beaker of clear liquid; coded amber readout in the screen; hook and scene 7), `m6-beaker-v1.png` (hook second solution, scene 5 \"pure water\", mixing beakers in scenes 10 to 12), `m6-volumetric-pipette-filler-v1.png` (bulb pipette with red filler; scene 9, drawing 25.0 mL), `m6-volumetric-flask-v1.png` (stoppered flask with a calibration ring on the neck; scene 9, made up to 500 mL, coded label \"500.0 mL\"). Not used: `c8-thermometer-hot-v1.png` and `m5x-thermometer-cold-v1.png` (the temperature ladder is a data table, and a hot or cold thermometer would suggest the solution's own temperature changes in a reaction); `m6-household-cleaner-bottle-v1.png` (no product pH is claimed). No new plates needed. No human figures.", "transitionPlan": "The pH meter plate opens with its amber readout; the log ruler draws for the meaning of pH; the givens card enters at the left for each worked example while the centre working adds one stage per line and earlier lines dim; the water equilibrium returns for Kw and the temperature card; dilution and mixing reuse the beaker layout with the excess carried into the total volume; each attempt clears the board and its feedback underlines the givens; the decision rule card with the strong-or-weak check and the next chip close; scene crossfade with settle."},
        'rows': M6C07_ROWS,
    },
    'm6c08': {
        'design': D + 'lessons/chem-m6-c08.md',
        'learning_review': D + 'checks/m6c08-learning-review.md',
        'science_check': D + 'checks/m6c08-claude-science-check.md',
        'meta': {"title": "How can an ICE table predict weak acid or base pH? From Ka or Kb to the equilibrium ion concentration", "subtitle": "A pH meter reads 2.85 in a propanoic acid solution, but treating it like hydrochloric acid predicts 0.824. Why does that method fail for a weak acid, and how do Ka and an ICE table give the right hydronium concentration and pH, or the hydroxide and pH for a weak base?", "subject": "Chemistry", "yearLevel": 12, "module": 6, "lesson": 12, "lessonIntent": "explaining why a weak acid's [H₃O⁺] is far below its concentration; setting up an ICE table for a weak acid or weak base from its initial concentration, with the reason each ion gains x; writing Ka = x²/(c − x) or Kb = x²/(c − x); dropping x when the constant is tiny, finding x, and checking it is under 5% of c; stating the equilibrium concentrations of all three species; converting x to pH, through pOH for a base, with the right decimal places; saying what to do when the check fails; deciding strong or weak before choosing the method. No Ka or pKa from a measured pH, no pKa, no ranking by Ka (chem-m6-c10), no worked quadratic (chem-m6-g02), no salt pH or Ka × Kb = Kw (chem-m6-c10, c13, c14), no buffers (chem-m6-c11)."},
        'hold_seconds': 10,
        'holds': ["attempt-1", "attempt-2"],
        'ids': ["hook", "why-weak", "we1-ice-table", "we1-drop-x", "we1-check-ph", "check-fails", "weak-base", "weak-base-ph", "strong-or-weak", "memory-aid", "attempt-1", "feedback-1", "attempt-2", "feedback-2", "decision-rule", "key-notes"],
        'progression': {"prerequisiteKnowledge": "C07 (pH = −log[H₃O⁺], pOH, pH + pOH = 14 at 25 °C, the decimal-places rule, strong acids give [H₃O⁺] = c, \"check it's strong first\"). C05 (weak acids and bases ionise partly; single and double arrows; ammonia is a weak base; propanoic acid is not on the strong list). C06 (conjugate pairs; NH₃ + H₂O ⇌ NH₄⁺ + OH⁻). C01 (H⁺(aq) means H₃O⁺). Module 5: Ka and Kb expressions with water left out (chem-m5-c10); ICE tables in mol/L, x, \"drop the x\" when K is very small and the start is not tiny, and the 5% rule of thumb (chem-m5-c06b); \"HSC questions are written so you shouldn't need\" the quadratic formula (chem-m5-c06b, owner decision A). Not assumed: pKa, Ka × Kb = Kw, buffers.", "startsWith": "Start with partial ionisation and a known initial concentration. The video opens: A student needs the pH of zero point one five zero moles per litre propanoic acid. They treat it like hydrochloric acid: the hydronium equals the concentration, so the pH is zero point eight two four. But the pH meter reads two point eight five.", "stopsAfter": "explaining why a weak acid's [H₃O⁺] is far below its concentration; setting up an ICE table for a weak acid or weak base from its initial concentration, with the reason each ion gains x; writing Ka = x²/(c − x) or Kb = x²/(c − x); dropping x when the constant is tiny, finding x, and checking it is under 5% of c; stating the equilibrium concentrations of all three species; converting x to pH, through pOH for a base, with the right decimal places; saying what to do when the check fails; deciding strong or weak before choosing the method. No Ka or pKa from a measured pH, no pKa, no ranking by Ka (chem-m6-c10), no worked quadratic (chem-m6-g02), no salt pH or Ka × Kb = Kw (chem-m6-c10, c13, c14), no buffers (chem-m6-c11).", "nextLesson": "why neutralising a weak acid can release a different amount of heat (route chem-m6-c09)."},
        'teaching': {"task": "A pH meter reads 2.85 in a propanoic acid solution, but treating it like hydrochloric acid predicts 0.824. Why does that method fail for a weak acid, and how do Ka and an ICE table give the right hydronium concentration and pH, or the hydroxide and pH for a weak base?", "causalExplanation": "(1) the strong-acid method gives pH 0.824 for propanoic acid; the meter reads 2.85: why? (1); (2) propanoic acid is weak: most molecules stay whole, so [H₃O⁺] is far below c; molecules and ions are in equilibrium, which has Ka (Module 5); the unknown is how much ionises, x (2); (3) worked example: each molecule that ionises makes one hydronium and one propanoate, so the table rows follow; Ka = x²/(0.150 − x) (3); (4) Ka is tiny next to c, so x is tiny, so 0.150 − x ≈ 0.150; x = √(Ka c) (4); (5) check x ÷ c under 5%; the equilibrium concentrations; pH with the right decimal places; fewer than one molecule in a hundred, which is why the strong method failed (5); (6) when x is not small (larger Ka, or more dilute), the check fails and the full equation is needed (6); (7) a weak base takes protons from water, making hydroxide: the same table with Kb gives [OH⁻] (7); (8) then pOH and pH = 14 − pOH; reporting pOH as pH is the slip (8); (9) the first decision is strong or weak (9); memory aid (10); two attempts and brief feedback (11 to 14); decision rule and handoff (15); key notes (16).", "conversationalApproach": "the strong-acid method predicts pH 0.824 for propanoic acid, but the meter reads 2.85. The lens shows why (most molecules stay whole), and the ICE table is then built one row at a time from the reason each ion forms, with the small-x approximation checked, a case where the check fails, and the same table with Kb for a weak base. Two exam calculations follow with brief feedback.", "openingDecision": "A student needs the pH of zero point one five zero moles per litre propanoic acid. They treat it like hydrochloric acid: the hydronium equals the concentration, so the pH is zero point eight two four. But the pH meter reads two point eight five. That's two pH units out, about a hundred times too much hydronium. So what went wrong, and how do you calculate the right answer?", "understandingCheck": "(A1) \"Methanoic acid (HCOOH) is the acid in some ant stings. Calculate the pH of a 0.200 mol/L methanoic acid solution at 25 °C, given that Ka = 1.8 × 10⁻⁴. Show that the simplifying assumption is valid.\" New acid with a Ka about 14 times larger than propanoic acid's, so the check gives 3.0% (closer to the limit than the worked example's 0.93%). Crossed mistake: \"[H₃O⁺] = 0.200 mol/L: pH 0.699\". (A2) \"Methylamine (CH₃NH₂) is a weak base that reacts with water in the same way as ammonia. Calculate the pH of a 0.400 mol/L methylamine solution at 25 °C, given that Kb = 4.4 × 10⁻⁴.\" New base; the student writes the equation themselves. Crossed mistake: \"[OH⁻] = 0.400 mol/L: pH 13.602\" (the strong-base method; the worked example already crossed \"pOH as pH\").", "curriculumScope": "Syllabus (NSW Chemistry Stage 6, 2017), as printed: \"calculate pH, pOH, hydrogen ion concentration ([H+]) and hydroxide ion concentration ([OH–]) for a range of solutions (ACSCH102)\" this video starts from the route's partial ionisation and known initial concentration and stops at the equilibrium ion concentration and pH. It teaches: why [H₃O⁺] is far below c for a weak acid (most molecules stay whole; Module 5 and C05 callbacks); the Ka expression for HA + H₂O ⇌ H₃O⁺ + A⁻ (Module 5 C10 callback, one line); the ICE table for a weak acid in mol/L, with x as the amount that ionises and the reason each ion gains x; Ka = x²/(c − x); dropping x beside c when Ka is tiny and c is not (Module 5 C6b callback); the 5% check; all three equilibrium concentrations; what to do when the check fails (named only); the same table for a weak base with Kb and [OH⁻], finishing through pOH (C07 callback); the strong-or-weak check that chooses the method. Not here: Ka or pKa from a measured pH, pKa itself, and ranking acids by Ka (chem-m6-c10, whose dotpoint is \"calculate and apply the dissociation constant (Ka) and pKa\"; see Open decisions); solving the quadratic (named, not worked; method-selection practice is chem-m6-g02); Ka × Kb = Kw and salt pH such as sodium acetate (chem-m6-c10, c13, c14); buffers, partial neutralisation and Henderson-Hasselbalch (chem-m6-c11; site L09 card 5 and worked example 3(c) not used); polyprotic acids. The site's aspirin and ibuprofen hook is not used (register draft corrections)."},
        'design_block': {'renderer': RENDERER, "visualSystem": "Explainer engine: warm paper stage, handwritten Caveat headings, amber doodle layer. Colour key on screen throughout: H₃O⁺ teal token on pale blue water (C01); OH⁻ violet; whole weak acid molecules amber-outlined (C05); the acid's anion (propanoate, methanoate) grey-violet; water pale blue; x and its sliver on the check ruler teal; meter readouts amber digits; pOH lines violet-tinted, pH lines teal-tinted. Board layout (constant, C03 and C07): top-left the short task line; the left column holds the givens card during worked examples (grouped, units attached); the centre holds the ICE table and, under it, the working, one stage per line, earlier lines dimming; a plate sits small at the right only when it carries the explanation. Clutter rule: at most three text items bright at once (task, givens card or table, current line); every label fades when its sentence ends. The ICE table counts as one item while it is being filled; once filled, only its equilibrium row stays bright. Reuse: painted plates (inspected 19 Oct): `m6-ph-meter-probe-beaker-v1.png` (hook: coded amber readout \"2.85\", beaker labelled \"propanoic acid, 0.150 mol/L\"), `m6-beaker-v1.png` (scene 2, the same solution for the lens), `m5x-ammonia-bottle-v1.png` (scenes 7 and 8, coded label \"ammonia solution, 0.200 mol/L\"), `m6-ant-formic-acid-v1.png` (inspected 19 Oct: a painted black ant in side view, no person or hand; attempt 1 card, small, beside the context sentence). No plate for methylamine (attempt 2 is a worded question; a coded structure is not needed). No new plates needed. No human figures.", "transitionPlan": "The meter plate opens with the disagreeing readout; the weak-acid lens zooms in; the givens card enters at the left and the ICE table fills row by row in the centre with the working beneath it, earlier lines dimming; the check ruler shows x as a teal sliver; the weak-base table reuses the same layout with violet pOH lines; each attempt clears the board and its feedback underlines the givens; the decision rule card and next chip close; scene crossfade with settle."},
        'rows': M6C08_ROWS,
    },
    'skills01': {
        'design': D + 'lessons/skills-s01.md',
        'learning_review': D + 'checks/skills01-learning-review.md',
        'science_check': D + 'checks/skills01-claude-science-check.md',
        'meta': {"title": "Read the question before you answer it", "subtitle": "Before you write a word, what exactly is this question asking for?", "subject": "Chemistry and Biology", "yearLevel": 12, "module": 0, "lesson": 1, "lessonIntent": "the routine (verb, marks, content words and givens, constraint, then tick each part); the meanings of \"in terms of\", \"with reference to\" and \"using the information\"; \"one mark, one idea\" with its three limits; two drills."},
        'hold_seconds': 10,
        'holds': ["drill-1", "drill-2"],
        'ids': ["hook", "question-card", "verb", "marks", "content-words", "constraint", "build-1", "build-2", "weak-vs-strong", "one-mark-one-idea", "routine", "drill-1", "feedback-1", "drill-2", "feedback-2", "decision-rule", "key-notes"],
        'progression': {"prerequisiteKnowledge": "Chemistry: C1 to C3 (dynamic equilibrium as equal rates; adding a substance speeds up only the reaction that uses it, then the faster rate falls and the slower rate rises until they are equal again; the iron thiocyanate tube; a temperature change speeds up the heat-absorbing reaction more; Le Chatelier's principle). Biology: B10 (co-dominance, roan cattle, 1 : 2 : 1 from two heterozygotes). Year 11: collision theory. Not assumed: any exam-technique vocabulary.", "startsWith": "An exam question you can answer but might misread. The video opens: Here's something NESA's marking feedback raises every year. In every HSC Chemistry and Biology report from 2020 to 2025, it points out answers that missed what the question actually asked. Often the student knew the science.", "stopsAfter": "the routine (verb, marks, content words and givens, constraint, then tick each part); the meanings of \"in terms of\", \"with reference to\" and \"using the information\"; \"one mark, one idea\" with its three limits; two drills.", "nextLesson": "s02, \"Identify, describe, explain: what each verb really asks for\"."},
        'teaching': {"task": "Before you write a word, what exactly is this question asking for?", "causalExplanation": "(1) NESA marking feedback flags answers to a nearby question in every Chemistry and Biology report from 2020 to 2025, so the step before writing matters (1); (2) one HSC-style Chemistry equilibrium question is pulled apart (2); (3) the verb says what to do: explain means show cause and effect (3); (4) the marks say how much to write and when to stop (4); (5) the content words and givens say what the answer is about: ask what each given tells you, then decide if the answer needs it (5); (6) the constraint says how to answer: in terms of, with reference to, using the information (6); (7) the answer is built in collision theory as three linked points (7, 8); (8) a correct Le Chatelier answer still answers a nearby question and loses two marks (9); (9) one mark, one idea is a rule of thumb with three limits (10); the routine and memory aid (11); two drills with feedback (12 to 15); decision rule and handoff (16); key notes (17).", "conversationalApproach": "one fact carries the video: every NESA Chemistry and Biology marking feedback report from 2020 to 2025 flags answers to a nearby question. One HSC-style Chemistry equilibrium question is pulled apart one annotation at a time (verb, marks, content words and givens, constraint), the answer is built in the asked terms with a mark counter, and a correct but off-constraint answer shows the cost. Two drills, one per subject, practise the routine.", "openingDecision": "Here's something NESA's marking feedback raises every year. In every HSC Chemistry and Biology report from 2020 to 2025, it points out answers that missed what the question actually asked. Often the student knew the science. They just answered a nearby question. So this video is about the step before you write anything: reading the question properly, in about thirty seconds.", "understandingCheck": "The narration says \"Do the one from your subject, or both\". Both drills ask students to run the routine first. Drill 1, Biology: roan cattle data, \"using the information provided\", explain, 3 marks. It targets the unused-stimulus fault (12/12). Crossed habit: \"codominance means both alleles show\", with no numbers. Drill 2, Chemistry: N2O4 and NO2 in ice water, \"with reference to Le Chatelier's principle\", predict and explain, 3 marks. It targets \"covers only one requested part\" (part of the 12/12 nearby-question fault). Crossed habit: \"It goes paler.\" (predict only). Drill 2 is a temperature change, so it also varies the cause after the worked example's concentration change. Drill 2 deliberately asks for the Le Chatelier answer that the worked example ruled out. Students see the constraint, not the topic, decide the reasoning. Feedback says \"this time the constraint asks for Le Chatelier's principle\".", "curriculumScope": "No syllabus dotpoint (skills video, HSC exam skills series): the NESA glossary of key words (paraphrased) and the Working Scientifically skill Communicating (NSW Chemistry and Biology Stage 6 syllabuses, 2017). starts at \"an exam question you can answer but might misread\". It stops after the four-part reading routine, the three constraint phrases, the limits of \"one mark, one idea\" and two practised reads. It does not cover verb meanings in depth (s02), compare and contrast (s03), judgement verbs (s04), calculations (s05), graphs (s06), practicals (s07) or extended responses (s08)."},
        'design_block': {'renderer': RENDERER, "visualSystem": "Explainer engine: warm paper stage, handwritten Caveat headings, amber doodle layer. The question card is on paper colour. It has a subject badge, the tag \"HSC-style question, written for HSCScience\", and a printed mark value in brackets at the right, as on HSC papers. The annotation layer on the card: an amber highlighter swipe for the verb; a hand-drawn ring \"stamp\" round the marks, becoming a marks badge; pen underlines for content words and givens; teal square brackets round the constraint phrase. The answer box is an HSC-booklet-style ruled box (white, faint blue rules, left margin). A mark counter sits in the top-right of the answer box: \"0 / 3\" ticks to \"3 / 3\", one per mark-earning point. Each tick lands in the margin beside its line. A label sits under it: \"HSCScience marking guide (illustrative)\". The routine strip has four rows, each with an icon: highlighter, badge, underline, bracket. It builds in scene 11 and returns as the decision board. Kit: `HandText`, `DrawPath`, `scribbleEllipse`, `Mark`, `Callout`, `Enter`, `Plate`, `Countdown`. The `WrongChip`, `GreyTag` and `Cross` chips are from B6a. No people, hands or faces: the highlighter and pen marks draw themselves. Colours: amber highlighter for verbs; ink pen for underlines; teal brackets for constraints; marker ticks green; lost-mark tags red. No people, hands or faces.", "transitionPlan": "The report-tile grid opens; the question card slides in and straightens; each annotation (highlighter, marks badge, underlines, teal brackets) lands on its cue and adds a routine strip row at the far left; the answer box fills line by line with margin ticks and the mark counter; the weak answer box slides in beside the strong one; the limit cards collapse to their titles as each new one writes; the routine card returns full size, then shrinks; each drill clears the board and its feedback annotates the card before the model answer writes; the decision rule card and next chip close; scene crossfade with settle."},
        'rows': SKILLS01_ROWS,
    },
    'skills02': {
        'design': D + 'lessons/skills-s02.md',
        'learning_review': D + 'checks/skills02-learning-review.md',
        'science_check': D + 'checks/skills02-claude-science-check.md',
        'meta': {"title": "Identify, describe, explain: what each verb really asks for", "subtitle": "Identify, describe and explain look alike. What does each one ask you to write, and how do you know you've actually explained?", "subject": "Chemistry and Biology", "yearLevel": 12, "module": 0, "lesson": 2, "lessonIntent": "answering one stimulus at three verb levels, and the s01 iron thiocyanate case at three levels; building a three-point explanation with linked causes; spotting a description posing as an explanation; two explain drills."},
        'hold_seconds': 10,
        'holds': ["drill-1", "drill-2"],
        'ids': ["hook", "three-verbs", "question-card", "identify", "describe", "explain-setup", "explain-build", "weak-vs-strong", "chem-ladder", "because-test", "drill-1", "feedback-1", "drill-2", "feedback-2", "decision-rule", "key-notes"],
        'progression': {"prerequisiteKnowledge": "s01 (the reading routine and the annotation layer). Biology: B10 (sex chromosomes; a gene on the X has no partner on the Y; sons get their X from their mother), B4 (template strands, complementary base pairing). Chemistry: C1 (soda water; open against closed systems; dissolving and leaving rates), C3 (the iron thiocyanate tube and its added-Fe3+ case, in scene 9).", "startsWith": "Three verbs that look alike. The video opens: In the last five years of HSC Chemistry and Biology papers, one key word came up in the written section more than any other: explain. Fifty-seven question parts, more than twice as many as the next word. Most were worth two to four marks.", "stopsAfter": "answering one stimulus at three verb levels, and the s01 iron thiocyanate case at three levels; building a three-point explanation with linked causes; spotting a description posing as an explanation; two explain drills.", "nextLesson": "s03, compare and contrast (similarities and differences written as pairs)."},
        'teaching': {"task": "Identify, describe and explain look alike. What does each one ask you to write, and how do you know you've actually explained?", "causalExplanation": "(1) explain is the commonest HSC key word, and NESA marking feedback flags outcomes stated without the causal link every year (1); (2) the three verbs with their paraphrased glossary meanings, read in the context of the question (2); (3) one fruit fly reciprocal-cross stimulus with three lettered parts holds the content still (3); (4) identify names (4); (5) describe gives features (5); (6) explain asks how or why, so the cause is set up first (6); (7) a three-point chain in which each sentence says what causes what (7); (8) a description that contains \"because\" is still not an explanation (8); (9) the same three verbs on the s01 Chemistry case (9); (10) the how test: does each sentence say what causes what? (10); two explain drills with feedback (11 to 14); decision rule and handoff (15); key notes (16).", "conversationalApproach": "identify, describe and explain look alike, so one stimulus (a fruit fly reciprocal cross) holds the content still while the verb changes: identify names, describe gives features, explain links each cause to the next. A weak answer that contains \"because\" shows a description posing as an explanation, the s01 Chemistry case gets the same three-verb ladder for Chemistry viewers, and the how test gives the check. Two explain drills, one per subject, follow.", "openingDecision": "In the last five years of HSC Chemistry and Biology papers, one key word came up in the written section more than any other: explain. Fifty-seven question parts, more than twice as many as the next word. Most were worth two to four marks. And every year, NESA's marking feedback mentions answers that say what happens, but not why. So let's sort out three verbs that look alike, but ask for different things.", "understandingCheck": "both are explain, the verb that needs practice. The narration says \"Do the one in your subject, or both\". Drill 1, Chemistry, 3 marks: soda water opened. The content is C1's open-bottle framing. Crossed habit: \"bubbles form because gas comes out of the drink\" (describes the bubbles). Drill 2, Biology, 2 marks (explain's second commonest value): why the two DNA molecules from replication are identical. The content is B4. The condition \"assume no copying errors\" is on the card. Crossed habit: \"because each has one old strand and one new strand\" (describes the result, gives no cause of the matching sequence).", "curriculumScope": "No syllabus dotpoint (skills video, HSC exam skills series): the NESA glossary of key words (paraphrased) and the Working Scientifically skill Communicating (NSW Chemistry and Biology Stage 6 syllabuses, 2017). starts at \"three verbs that look alike\". It stops after the meaning of identify, describe and explain (outline in passing), the cause-and-effect link, the \"how\" test, a weak against strong explain, and two explain drills. It does not cover compare, contrast or distinguish (s03), judgement verbs (s04), calculations (s05) or data descriptions in depth (s06)."},
        'design_block': {'renderer': RENDERER, "visualSystem": "Explainer engine: warm paper stage, handwritten Caveat headings, amber doodle layer. s01's shared components (`QuestionCard` with its annotation layer, `AnswerBox`, `MarkCounter`, `RoutineStrip` small at the far left, `LostMarksTag`). New for this video: a verb ladder, three stacked rungs (identify, describe, explain), each with a depth icon: identify: one word chip; describe: a feature list; explain: a chain of cause box, \"so\" arrow, effect box. New: a cause-effect chain overlay that draws arrows between linked clauses in the answer box, with \"because\" and \"so\" underlined amber. B10's `SexChrom` X and Y chips for the explain build. No people, hands or faces.", "transitionPlan": "The hook opens on the frequency card; the verb ladder builds three rungs with depth icons; the fly question card writes with its three lettered parts; each part fills its answer box in turn while its rung lights; the cause-effect chain overlay draws arrows between linked clauses; the weak answer box slides in beside the strong one; the Chemistry ladder appears as one compact scene; each drill clears the board and its feedback annotates the card before the model answer writes with ticks; the decision rule card and next chip close; scene crossfade with settle."},
        'rows': SKILLS02_ROWS,
    },
    # END generated entries: m6c03-m6c08, skills01, skills02
    # BEGIN generated entries: m6c09-m6c10
    'm6c09': {
        'design': D + 'lessons/chem-m6-c09.md',
        'learning_review': D + 'checks/m6c09-learning-review.md',
        'science_check': D + 'checks/m6c09-claude-science-check.md',
        'meta': {"title": "Why can weak-acid neutralisation release different heat? Same last step, different first step", "subtitle": "Swap hydrochloric acid for a weak acid in a neutralisation and you might expect less heat. Ethanoic acid gives almost the same heat, and hydrofluoric acid gives more. What really decides the heat a weak acid releases?", "subject": "Chemistry", "yearLevel": 12, "module": 6, "lesson": 13, "lessonIntent": "explaining with particles why a weak acid still reacts completely with hydroxide; writing the enthalpy of neutralisation of a weak acid or base as the ionisation step plus about −57 kJ/mol; explaining why the ionisation step can absorb or release energy (bond breaking against water surrounding the new ions); explaining the ethanoic acid, hydrofluoric acid and ammonia values; calculating an ionisation step from measured data with the right sign; explaining why neutralisation heat cannot rank acid strength. No new calorimetry method (chem-m6-c03), no practical error analysis (chem-m6-p02), no Ka or pKa comparisons (chem-m6-c10), no weak acid with weak base."},
        'hold_seconds': 10,
        'holds': ["attempt-1", "attempt-2"],
        'ids': ["hook", "same-different", "reacts-completely", "two-steps", "ionising-either-way", "ethanoic-zero", "hf-more-heat", "weak-base-less", "heat-not-strength", "memory-aid", "attempt-1", "feedback-1", "attempt-2", "feedback-2", "decision-rule", "key-notes"],
        'progression': {"prerequisiteKnowledge": "C03 (H⁺ + OH⁻ → H₂O, spectators, about −57 kJ/mol per mole of water, q = mcΔT with the total mass, ΔH = −q/n(H₂O), rounding to ΔT's significant figures, \"acids that only partly split can give different values, and they get their own video\"). C05 (strong and weak acids, most weak-acid molecules stay whole, the equilibrium arrow; ethanoic acid and HF are weak; ammonia is a weak base). C06 (NH₃ + H₂O ⇌ NH₄⁺ + OH⁻). C01 (H⁺(aq) is H₃O⁺). Module 5: Le Chatelier's principle (removing a product shifts the equilibrium right); chem-m5-c11 (dissolving: separating ions costs energy, hydration releases it, the sum sets the sign); chem-m5-c10 (Ka named, bigger Ka stronger). Year 11 Module 4: Hess's law, exothermic and endothermic, ΔH sign. Not assumed: pKa, Ka × Kb (chem-m6-c10), entropy beyond Module 5 C11's \"spreading out\".", "startsWith": "Compare measured heats for strong and weak reactants. The video opens: Here's a prediction to make. Mix one mole per litre hydrochloric acid with the same amount of sodium hydroxide, and you get about minus fifty seven kilojoules per mole of water. Now swap in ethanoic acid, a weak acid.", "stopsAfter": "explaining with particles why a weak acid still reacts completely with hydroxide; writing the enthalpy of neutralisation of a weak acid or base as the ionisation step plus about −57 kJ/mol; explaining why the ionisation step can absorb or release energy (bond breaking against water surrounding the new ions); explaining the ethanoic acid, hydrofluoric acid and ammonia values; calculating an ionisation step from measured data with the right sign; explaining why neutralisation heat cannot rank acid strength. No new calorimetry method (chem-m6-c03), no practical error analysis (chem-m6-p02), no Ka or pKa comparisons (chem-m6-c10), no weak acid with weak base.", "nextLesson": "what Ka and pKa say about acid strength (route chem-m6-c10)."},
        'teaching': {"task": "Swap hydrochloric acid for a weak acid in a neutralisation and you might expect less heat. Ethanoic acid gives almost the same heat, and hydrofluoric acid gives more. What really decides the heat a weak acid releases?", "causalExplanation": "(1) ethanoic acid gives almost the same heat as HCl, and HF gives more: what decides the heat? (1); (2) a strong acid's hydrogen ions are already free, so only H⁺ + OH⁻ → H₂O happens (C03); a weak acid's protons are mostly still on whole molecules (C05) (2); (3) hydroxide removes the few hydronium ions, the equilibrium shifts right, more molecules ionise, until all have reacted: one extra step, not an incomplete reaction (3); (4) Hess's law: total = ionisation step + water step (about −57), so the difference is all in step one (4); (5) step one has energy in (a bond breaks) and energy out (water surrounds the new ions), so its sign varies (5); (6) ethanoic acid: the two nearly cancel, about −56 (6); (7) HF: the small fluoride ion holds water tightly, more out than in, about −68; still weak (7); (8) ammonia: its step takes energy in, about −52 (8); (9) so heat does not rank strength: methanoic acid is ten times stronger but gives the same heat; use pH or Ka (9); memory aid (10); two attempts and brief feedback (11 to 14); decision rule and handoff (15); key notes (16).", "conversationalApproach": "one surprise carries the video: swap hydrochloric acid for a weak acid and most people predict less heat, but ethanoic acid gives almost the same and hydrofluoric acid gives more. The particle lens shows that a weak acid still reacts completely (hydroxide removes hydronium, the equilibrium shifts right), Hess's law splits the heat into an ionisation step plus the water step of about −57 kJ/mol, and the energy ledger shows why that first step can absorb or release energy. Ethanoic acid, hydrofluoric acid and ammonia are then explained on the same staircase, and methanoic acid shows that heat cannot rank strength. Two exam questions follow with brief feedback.", "openingDecision": "Here's a prediction to make. Mix one mole per litre hydrochloric acid with the same amount of sodium hydroxide, and you get about minus fifty seven kilojoules per mole of water. Now swap in ethanoic acid, a weak acid. Most people predict much less heat. The measured value is about minus fifty six, almost the same. And hydrofluoric acid, also weak, gives about minus sixty eight: more heat, not less. So what really decides the heat?", "understandingCheck": "(A1) \"50.0 mL of 1.00 mol/L ethanoic acid is mixed with 50.0 mL of 1.00 mol/L sodium hydroxide solution in a polystyrene cup. The temperature rises by 6.7 °C. Under the same conditions, the enthalpy of neutralisation of hydrochloric acid is −57 kJ/mol. Assume the density of the mixture is 1.00 g/mL and its specific heat capacity is 4.18 J g⁻¹ °C⁻¹. (a) Calculate the enthalpy of neutralisation of ethanoic acid. (b) Calculate the enthalpy change for the ionisation of ethanoic acid, and comment on its size.\" Scenes 4 and 6 give the model and the ethanoic acid value in words only; the calculation from data is new. Crossed mistake: \"−57 − (−56) = −1 kJ/mol\" (subtraction the wrong way round). (A2) \"Hydrogen cyanide, HCN, is a weak acid. Its ionisation, HCN(aq) → H⁺(aq) + CN⁻(aq), absorbs about 45 kJ/mol. Using −57 kJ/mol for H⁺(aq) + OH⁻(aq) → H₂O(l), predict the enthalpy of neutralisation of hydrogen cyanide by sodium hydroxide, and explain why it differs from that of hydrochloric acid.\" New acid with a large endothermic step (the video's acids are near zero and negative; its endothermic case is a base). Crossed mistake: \"−57 − 45 = −102 kJ/mol\" (absorbed energy counted as released).", "curriculumScope": "Syllabus (NSW Chemistry Stage 6, 2017), as printed: \"conduct a practical investigation to measure the enthalpy of neutralisation (ACSCH093)\" \"model neutralisation of strong and weak acids and bases using a variety of media\" this video starts from measured enthalpies of neutralisation for strong and weak reactants and stops at a particle and energy model of the extra ionisation step. It teaches: the surprise that weak acids do not simply give less heat (ethanoic acid about the same as a strong acid, hydrofluoric acid more); that a weak acid still reacts completely, because hydroxide removes hydronium and the acid's equilibrium shifts right (Module 5 Le Chatelier callback); the two-step energy count by Hess's law (Year 11 callback): ionisation step plus the water step of about −57 kJ/mol; why the ionisation step can absorb or release energy (a bond breaks, energy in; water surrounds the new ions, energy out; Module 5 C11 callback); three cases (ethanoic acid close to zero, HF negative, ammonia positive); why neutralisation heat cannot rank acid strength. Not here: the calorimetry method and q = mcΔT taught again (chem-m6-c03; used once in attempt 1 as application, with every assumption on screen); the practical and its errors (chem-m6-p02); Ka and pKa as strength measures (chem-m6-c10, the next video; named only in scene 9); entropy as the reason HF is weak despite releasing heat (author note e; not voiced beyond one clause); weak acid with weak base (site card 3 values are wrong, see corrections); titration curves (chem-m6-c14)."},
        'design_block': {'renderer': RENDERER, "visualSystem": "Explainer engine: warm paper stage, handwritten Caveat headings, amber doodle layer. Colour key on screen throughout: H₃O⁺ teal token on pale blue water (C01); OH⁻ violet; whole weak acid molecules amber-outlined (C05, C08); the acid's anion grey-violet; spectator ions grey; water pale blue; heat warm orange ripples (C03); energy in a warm red arrow or bar pointing up, energy out a cool blue arrow or bar pointing down (M5 C11 ledger, blue here so it never clashes with teal hydronium); temperature readouts amber digits. Board layout (constant, C03 and C08): top-left the short question line; the centre holds the lens, the staircase or the bar chart, one at a time; a plate sits small at the left only when it carries the explanation. Clutter rule: at most three text items bright at once; every label fades when its sentence ends. The staircase counts as one item; only its current arrow and its label are bright. Reuse: painted plates (inspected 20 Oct): `m6-foam-cup-calorimeter-v1.png` (white lidded foam cup with a cutaway window, clear liquid, steel probe through a bung; no readout, so a coded readout chip sits on the probe top; scenes 1, 11 and the handoff), `m6-vinegar-bottle-v1.png` (plain glass bottle of pale amber vinegar, wooden-look cap, no label; scene 2, small, coded label \"ethanoic (acetic) acid\"), `m5x-ammonia-bottle-v1.png` (scene 8, coded label \"ammonia solution\"). HF and HCN have no plates on purpose: they appear as data cards with a small grey tag \"data from careful lab measurements\" (HF) or as a worded question (HCN), so no hazardous substance is shown in a school cup. No new plates needed. No human figures.", "transitionPlan": "Two calorimeter plates open with amber readouts and a ΔH bar chart with a dashed −57 line; two particle lenses compare a strong and a weak acid, then the weak-acid lens enlarges as hydroxide streams in and the \"whole molecules left\" counter falls to 0; the enthalpy staircase draws with a step 1 arrow whose direction is not yet set; the energy ledger draws for bond breaking against hydration; the staircase returns for each case and changes only its step 1 arrow (ethanoic acid, HF, ammonia); the Ka cards and a crossed chip close the strength point; the memory aid writes large; each attempt clears the board and its feedback underlines the givens as they are used; the decision rule card and next chip close; scene crossfade with settle."},
        'rows': M6C09_ROWS,
    },
    'm6c10': {
        'design': D + 'lessons/chem-m6-c10.md',
        'learning_review': D + 'checks/m6c10-learning-review.md',
        'science_check': D + 'checks/m6c10-claude-science-check.md',
        'meta': {"title": "What do Ka and pKa say about acid strength? From a measured pH to Ka, pKa and conjugate bases", "subtitle": "An acid solution at pH 2.52 is more acidic than one at pH 2.78, but its acid is the weaker one. How do Ka and pKa measure strength whatever the concentration, how do you get Ka from a measured pH, and what do they tell you about strong acids and conjugate bases?", "subject": "Chemistry", "yearLevel": 12, "module": 6, "lesson": 14, "lessonIntent": "explaining why pH cannot rank acids at different concentrations; calculating [H₃O⁺] from a pH and using it to decide strong or weak; calculating Ka from the pH of a weak acid of known concentration with the ICE table backwards, to the right significant figures; calculating pKa from Ka and Ka from pKa, with the right decimal places; ranking acids by Ka or pKa; explaining how Ka and pKa separate strong from weak acids; deriving and using Ka × Kb = Kw for a conjugate pair to find Kb and rank conjugate bases. No pH from Ka (chem-m6-c08), no method selection when the check fails (chem-m6-g02), no salt pH (chem-m6-c13 or c14), no buffers (chem-m6-c11), no polyprotic acids."},
        'hold_seconds': 10,
        'holds': ["attempt-1", "attempt-2"],
        'ids': ["hook", "ka-is-the-number", "we-hydronium", "we-ice-backwards", "hook-answer", "pka", "reading-pka", "strong-weak", "ka-kb-kw", "conjugate-ranking", "memory-aid", "attempt-1", "feedback-1", "attempt-2", "feedback-2", "decision-rule", "key-notes"],
        'progression': {"prerequisiteKnowledge": "C08 (the weak-acid ICE table in mol/L, x as the amount ionised, each ion gains x, the 5% check, x has the significant figures of Ka, pH from x). C07 (pH = −log[H₃O⁺], [H₃O⁺] = 10⁻ᵖᴴ, decimal places in pH = significant figures in [H₃O⁺], Kw = [H₃O⁺][OH⁻] = 1.0 × 10⁻¹⁴ at 25 °C). C06 (conjugate pairs; a strong acid's conjugate base has almost no pull on a proton, a weak acid's conjugate base pulls protons back). C05 (strong and weak; compare strength at the same concentration). Module 5 (chem-m5-c10): Ka expression with water left out; bigger Ka means stronger; compare powers of ten first; Ka is not [H⁺] or pH; no Ka value is used for a strong acid; Kb for ammonia. Not assumed: pKa, Ka × Kb = Kw (both new here); C09 is not needed.", "startsWith": "Compare two weak-acid dissociation equilibria. The video opens: Two acids, two pH readings. An unknown acid, H X, at zero point zero five zero zero moles per litre, reads two point seven eight. Ethanoic acid at zero point five zero zero moles per litre reads two point five two, so it's more acidic.", "stopsAfter": "explaining why pH cannot rank acids at different concentrations; calculating [H₃O⁺] from a pH and using it to decide strong or weak; calculating Ka from the pH of a weak acid of known concentration with the ICE table backwards, to the right significant figures; calculating pKa from Ka and Ka from pKa, with the right decimal places; ranking acids by Ka or pKa; explaining how Ka and pKa separate strong from weak acids; deriving and using Ka × Kb = Kw for a conjugate pair to find Kb and rank conjugate bases. No pH from Ka (chem-m6-c08), no method selection when the check fails (chem-m6-g02), no salt pH (chem-m6-c13 or c14), no buffers (chem-m6-c11), no polyprotic acids.", "nextLesson": "practice choosing the right weak-acid method (route chem-m6-g02)."},
        'teaching': {"task": "An acid solution at pH 2.52 is more acidic than one at pH 2.78, but its acid is the weaker one. How do Ka and pKa measure strength whatever the concentration, how do you get Ka from a measured pH, and what do they tell you about strong acids and conjugate bases?", "causalExplanation": "(1) the more acidic solution is not the stronger acid: the pH ranking misleads because concentrations differ (1); (2) Ka does not depend on concentration (Module 5); we need Ka for HX, and the pH gives it (2); (3) [H₃O⁺] = 10⁻ᵖᴴ; it is only 3% of c, so HX is weak (a strong acid would give [H₃O⁺] = c) (3); (4) each HX that ionises makes one H₃O⁺ and one X⁻, so the table runs backwards: [X⁻] = [H₃O⁺], [HX] = c − [H₃O⁺], Ka = 5.7 × 10⁻⁵ (4); (5) HX is about three times stronger than ethanoic acid; its solution is just more dilute; pH describes a solution, Ka the acid (5); (6) Ka values span many powers of ten, so pKa = −log Ka, like pH (6); (7) the minus sign flips the direction: lower pKa, stronger; one unit is ten times (7); (8) strong acids have no molecules left, so no measurable Ka; weak acids have Ka much less than 1; the measured [H₃O⁺] against c decides (8); (9) a conjugate base takes protons back with its own Kb; multiplying Ka by Kb cancels the acid and its ion, leaving Kw (9); (10) so a stronger acid has a weaker conjugate base; only for a conjugate pair (10); memory aid (11); two attempts and brief feedback (12 to 15); decision rule and handoff (16); key notes (17).", "conversationalApproach": "two pH readings carry the video: an ethanoic acid solution at pH 2.52 is more acidic than HX at pH 2.78, yet its acid is the weaker one, because the concentrations differ. Ka is recalled from Module 5 as the concentration-free measure, the ICE table is run backwards from the measured pH to find Ka for HX (with the strong-or-weak check on the way), and the answer resolves the hook. pKa then tidies Ka like pH, the log ruler shows its direction and factor-of-ten steps, the strong zone shows why strong acids have no measurable Ka, and cancelling Ka × Kb gives Kw for ranking conjugate bases. Two exam questions follow with brief feedback.", "openingDecision": "Two acids, two pH readings. An unknown acid, H X, at zero point zero five zero zero moles per litre, reads two point seven eight. Ethanoic acid at zero point five zero zero moles per litre reads two point five two, so it's more acidic. Does that make ethanoic acid the stronger acid? Not necessarily. Its solution is ten times more concentrated. To compare strength fairly, you need a number that doesn't depend on concentration.", "understandingCheck": "(A1) \"Lactic acid is the weak monoprotic acid that forms when milk turns sour. A 0.200 mol/L solution of lactic acid has a pH of 2.28 at 25 °C. Calculate the acid dissociation constant, Ka, and the pKa of lactic acid.\" New acid, new concentration and pH; the same backwards table. Crossed mistake: \"Ka = 5.2 × 10⁻³\" (stopping at [H₃O⁺] and calling it Ka; M5 C10's \"Ka is not [H⁺]\"). (A2) \"The pKa values of three acids at 25 °C are: hydrofluoric acid, HF, 3.17; methanoic acid, HCOOH, 3.74; hydrocyanic acid, HCN, 9.21. (a) List the acids in order of decreasing strength. (b) Identify the strongest base among F⁻, HCOO⁻ and CN⁻, and calculate its Kb. Kw = 1.0 × 10⁻¹⁴ at 25 °C.\" New acids for this video (the worked example uses HX and ethanoic acid). Crossed mistake: \"HCN is strongest, because 9.21 is the biggest\" (golf backwards).", "curriculumScope": "Syllabus (NSW Chemistry Stage 6, 2017), as printed: \"calculate and apply the dissociation constant (Ka) and pKa (pKa = -log10 (Ka)) to determine the difference between strong and weak acids (ACSCH098)\" this video starts from two weak-acid equilibria whose pH values mislead about strength and stops at ranking acids and their conjugate bases with Ka and pKa. It teaches: why pH cannot rank acid strength when concentrations differ (C05 and Module 5 callbacks, one line); Ka as the concentration-free measure (recall of chem-m5-c10, not re-taught); Ka from a measured pH by running the C08 ICE table backwards, with the strong-or-weak check on the way; pKa = −log Ka, its direction and its factor-of-ten steps, and Ka = 10⁻ᵖᴷᵃ; how Ka and pKa separate strong from weak acids (the dotpoint); Ka × Kb = Kw for a conjugate pair, derived by cancelling, and the inverse ranking of conjugate bases (C06 qualitative callback). Not here: writing Ka expressions, \"bigger Ka, stronger\", \"Ka is not pH\" and \"compare powers of ten first\" as new teaching (all chem-m5-c10; recalled in one scene); pH from Ka (chem-m6-c08); method selection when the 5% check fails (chem-m6-g02, the next video); salt pH and hydrolysis (chem-m6-c13 or c14, route Additions); buffers and pH = pKa at half-equivalence (chem-m6-c11, c14); polyprotic acids and successive Ka values (site card 3, labelled partly Extension; see Open decisions); the direction of an amphiprotic ion from Ka against Kb (C06 deferral; see Open decisions); the site's dental, industrial and environmental cases (cards 4 and 5; corrections below)."},
        'design_block': {'renderer': RENDERER, "visualSystem": "Explainer engine: warm paper stage, handwritten Caveat headings, amber doodle layer. Colour key on screen throughout: H₃O⁺ teal token on pale blue water (C01); OH⁻ violet; whole weak acid molecules amber-outlined (C05, C08); the acid's anion (X⁻, ethanoate) grey-violet; meter readouts amber digits; Ka values teal (M5 C10's K colour), pKa values on the lower side of the ruler in navy; conjugate-base Kb values violet-tinted. Board layout (constant, C03, C07 and C08): top-left the short task line; the left column holds the givens card during worked examples (grouped, units attached); the centre holds the ICE table, the ruler or the builder, with the working under it, one stage per line, earlier lines dimming; a plate sits small at the right only when it carries the explanation. Clutter rule: at most three text items bright at once (task, givens card or table, current line); every label fades when its sentence ends. The ICE table counts as one item; once filled, only its equilibrium row stays bright. Reuse: painted plates (inspected 20 Oct): `m6-ph-meter-probe-beaker-v1.png` (hook: the meter with a coded amber readout \"2.78\", beaker labelled \"HX, 0.0500 mol/L\"; a second copy reading \"2.52\", beaker labelled \"ethanoic acid, 0.500 mol/L\"), `m6-vinegar-bottle-v1.png` (scene 2, small beside the ethanoic acid values, coded label \"ethanoic (acetic) acid\"). No plate for lactic acid or the three acids in A2 (worded questions; see Assets for an optional plate). No human figures.", "transitionPlan": "Two pH meter plates open with amber readouts and a crossed \"lower pH, so stronger\" chip; the plates shrink as the Ka expression builder writes; the givens card enters at the left and the [H₃O⁺] line and the two-bar strong-or-weak test write in the centre, leaving one kept chip; the ICE table fills its equilibrium row first with \"work backwards\" arrows, then the Ka line and answer chip pin; the two Ka chips return for the hook answer; the log ruler draws with Ka above and pKa below, markers drop and arrows show the direction; the ruler extends into the hatched strong zone; the builder multiplies and cancels Ka × Kb to Kw; the fixed-product bar ranks the conjugate bases; the memory aid writes large; each attempt clears the board and its feedback underlines the givens; the decision rule card and next chip close; scene crossfade with settle."},
        'rows': M6C10_ROWS,
    },
    # END generated entries: m6c09-m6c10
    # BEGIN generated entries: m6c11-m6c12
    'm6c11': {
        'design': D + 'lessons/chem-m6-c11.md',
        'learning_review': D + 'checks/m6c11-learning-review.md',
        'science_check': D + 'checks/m6c11-claude-science-check.md',
        'meta': {"title": "How does a buffer resist a pH change? A defender for each attack, the ratio that sets the pH, and running out", "subtitle": "The same splash of acid drops water by five pH units, but a mixture of ethanoic acid and sodium ethanoate by less than a tenth. What does that mixture contain, how does it take up added acid and base, what sets its pH, when does it run out, and why does your blood depend on one?", "subject": "Chemistry", "yearLevel": 12, "module": 6, "lesson": 16, "lessonIntent": "describing a buffer as a weak acid and its conjugate base in large amounts; writing the equations for added acid (taken up by the conjugate base) and added base (taken up by the weak acid); explaining why the pH changes only slightly, using [H₃O⁺] = Ka × n(HA) / n(A⁻); estimating a buffer's pH (pH = pKa for equal amounts; below or above pKa otherwise) and calculating the pH after a small addition; explaining why a strong acid with its salt is not a buffer; explaining capacity and why it depends on the amounts, not the pH; describing how the carbonic acid and hydrogencarbonate buffer keeps blood pH 7.35 to 7.45, with the lungs and kidneys topping it up, and naming buffering in cells and oceans; reading buffer-against-water evidence. No bench preparation or risk table (chem-m6-p05), no Henderson-Hasselbalch log form, no partial neutralisation or half-equivalence (chem-m6-c14), no polyprotic calculations."},
        'hold_seconds': 10,
        'holds': ["attempt-1", "attempt-2"],
        'ids': ["hook", "what-it-holds", "acid-attack", "base-attack", "buffer-ph", "we-after-acid", "ratio-sets-ph", "capacity", "blood-buffer", "blood-works", "memory-aid", "attempt-1", "feedback-1", "attempt-2", "feedback-2", "decision-rule", "key-notes"],
        'progression': {"prerequisiteKnowledge": "C10 (Ka = [H₃O⁺][A⁻] / [HA] for a weak acid; pKa = −log Ka; ethanoic acid Ka 1.8 × 10⁻⁵ and pKa 4.74; the decimal-places rule applied to Ka). C08 (a weak acid stays mostly un-ionised; the particle lens). C07 (pH from [H₃O⁺]; the decimal-places rule; 1.0 mol/L HCl gives [H₃O⁺] = c). C06 (conjugate pairs; the conjugate base of a weak acid pulls protons back, the conjugate base of a strong acid has almost no pull). C05 (strong and weak; salts dissolve completely into ions). C02 (salt names: sodium ethanoate, ammonium chloride). Module 5: Le Chatelier's principle (adding a product shifts an equilibrium back). Year 11: n = c × V. Not assumed: the word buffer, capacity, the blood buffer. Also from C08: the ICE table, which is why scene 5 says the amounts put in can be used directly (the partners barely react with water).", "startsWith": "Add acid or base to a weak-acid/conjugate-base mixture. The video opens: Two beakers, a hundred millilitres each. One is pure water, at pH seven. The other is a mix of ethanoic acid and sodium ethanoate, at pH four point seven four.", "stopsAfter": "describing a buffer as a weak acid and its conjugate base in large amounts; writing the equations for added acid (taken up by the conjugate base) and added base (taken up by the weak acid); explaining why the pH changes only slightly, using [H₃O⁺] = Ka × n(HA) / n(A⁻); estimating a buffer's pH (pH = pKa for equal amounts; below or above pKa otherwise) and calculating the pH after a small addition; explaining why a strong acid with its salt is not a buffer; explaining capacity and why it depends on the amounts, not the pH; describing how the carbonic acid and hydrogencarbonate buffer keeps blood pH 7.35 to 7.45, with the lungs and kidneys topping it up, and naming buffering in cells and oceans; reading buffer-against-water evidence. No bench preparation or risk table (chem-m6-p05), no Henderson-Hasselbalch log form, no partial neutralisation or half-equivalence (chem-m6-c14), no polyprotic calculations.", "nextLesson": "preparing a buffer in the lab and testing it against water (route chem-m6-p05)."},
        'teaching': {"task": "The same splash of acid drops water by five pH units, but a mixture of ethanoic acid and sodium ethanoate by less than a tenth. What does that mixture contain, how does it take up added acid and base, what sets its pH, when does it run out, and why does your blood depend on one?", "causalExplanation": "(1) the same acid drops water 5 pH units and the mixture less than 0.1: why? (1); (2) ethanoic acid stays mostly whole and the salt supplies plenty of ethanoate, so both partners are present in large amounts: a buffer (2); (3) added hydronium meets ethanoate, the conjugate base of a weak acid, which takes the proton back; almost all of it is used up (3); (4) added hydroxide takes a proton from ethanoic acid; a defender for each attack; water against buffer for base too (4); (5) Ka rearranged: [H₃O⁺] = Ka × acid ÷ base; moles work because the volume cancels; equal amounts give pH = pKa (5); (6) after the acid the ratio is about 1.2, so hydronium rises by about 20%, against a hundred thousand times in water (6); (7) the ratio sets the pH, so buffers need not be neutral; a strong acid's conjugate base does not take protons back, so HCl with NaCl is not a buffer (7); (8) each portion of acid uses up ethanoate; when it runs out, the pH plunges: capacity depends on the amounts (8); (9) blood keeps pH 7.35 to 7.45 with carbonic acid and hydrogencarbonate; the CO₂ formed is breathed out (9); (10) blood has about 20 hydrogencarbonate ions for each dissolved carbon dioxide molecule (carbon dioxide and carbonic acid together are the acid side), so it absorbs acid better than base; it is topped up by lungs and kidneys; cells and oceans buffer too (10); memory aid (11); two attempts and brief feedback (12 to 15); decision rule and handoff (16); key notes (17).", "conversationalApproach": "one contrast carries the video: the same millilitre of hydrochloric acid drops water by five pH units but a mixture of ethanoic acid and sodium ethanoate by less than a tenth. The particle lens shows why (ethanoate, the conjugate base of a weak acid, takes back the added hydronium; ethanoic acid gives a proton to added hydroxide: a defender for each attack), the Ka expression rearranged shows that the pH follows the ratio of acid to base, and a worked example finds the pH after the acid. Repeated portions of acid then use up the ethanoate until the pH plunges (capacity), and the blood buffer applies the same reasoning with the lungs and kidneys topping it up. Two exam questions follow with brief feedback.", "openingDecision": "Two beakers, a hundred millilitres each. One is pure water, at pH seven. The other is a mix of ethanoic acid and sodium ethanoate, at pH four point seven four. Add one millilitre of one mole per litre hydrochloric acid to each. The water drops to pH two point zero zero, five whole units. The mixture drops to four point six six, less than a tenth of a unit. So what's in that second beaker that soaks up the acid, and can it ever run out?", "understandingCheck": "(A1) \"A solution contains 0.20 mol/L ammonia (NH₃) and 0.20 mol/L ammonium chloride (NH₄Cl). (a) Explain, using equations, how this solution resists a change in pH when a small amount of hydrochloric acid or sodium hydroxide is added. (b) Estimate the pH of the solution, given that the pKa of NH₄⁺ is 9.25 at 25 °C.\" New pair (a basic buffer, weak base and conjugate acid; not shown anywhere before the attempt), so the student must find which partner is the acid. Crossed mistake: \"NH₄⁺ + H₃O⁺ → ...\" (partners swapped; the site's \"HA reacts with added H⁺\" misconception). (A2) \"Two buffer solutions, X and Y, each have a volume of 100 mL and a pH of 4.74 at 25 °C. X contains 0.010 mol of ethanoic acid and 0.010 mol of sodium ethanoate. Y contains 0.0010 mol of ethanoic acid and 0.0010 mol of sodium ethanoate. A student adds 0.0020 mol of hydrochloric acid to each solution. Predict and explain the change in pH in each solution. Assume the volume does not change. Ka(CH₃COOH) = 1.8 × 10⁻⁵.\" Tests capacity against pH. Crossed mistake: \"same pH, so they resist equally\".", "curriculumScope": "Syllabus (NSW Chemistry Stage 6, 2017), as printed: \"conduct a practical investigation to prepare a buffer and demonstrate its properties (ACSCH080)\" \"describe the importance of buffers in natural systems (ACSCH098, ACSCH102)\" this video starts from the route's acid or base added to a weak acid and conjugate base mixture and stops at explaining the response, estimating the pH and identifying the capacity limit. It teaches: what a buffer contains and why (a weak acid mostly whole, plus its conjugate base from a dissolved salt; C05 and C06 callbacks); how the conjugate base takes up added hydronium and the weak acid takes up added hydroxide, with equations (the Le Chatelier reading is a Module 5 callback, one clause); why the pH still changes a little (the Ka expression rearranged, [H₃O⁺] = Ka × n(HA) / n(A⁻), a C10 callback, with moles in place of concentrations because the volume cancels); pH = pKa when the partners are equal, and the direction of the pH when they are not; why a strong acid with its salt is not a buffer (C06 conjugate strength); buffer capacity and its limit, shown as the pH curve for repeated acid portions against water; why capacity depends on the amounts, not the pH; the blood buffer (carbonic acid and hydrogencarbonate, the lungs and kidneys) and the importance of buffers in natural systems; the demonstration evidence the practical dotpoint asks for (the same addition to buffer and to water, side by side). Not here: preparing a buffer at the bench, the risk table and the dilution test (chem-m6-p05, the next video, which owns the practical conduct; this video shows the comparison data only); the Henderson-Hasselbalch equation by name or in log form (site card 3 labels it Extension; see Open decisions); partial neutralisation to make a buffer and half-equivalence (chem-m6-c14, titration curves); quantitative buffer range \"pKa ± 1\"; polyprotic acids and the phosphate calculation of site worked example 2; the direction of an amphiprotic ion from Ka against Kb (C10 deferred it here; see Open decisions); detailed blood-gas clinical cases (site worked example 3, diabetic ketoacidosis) and ocean saturation chemistry (worksheet 04 corrections)."},
        'design_block': {'renderer': RENDERER, "visualSystem": "Explainer engine: warm paper stage, handwritten Caveat headings, amber doodle layer. Colour key on screen throughout: H₃O⁺ teal token on pale blue water (C01); OH⁻ violet; whole ethanoic acid molecules amber-outlined (C05, C08); ethanoate grey-violet; Na⁺ and Cl⁻ small grey spectators; meter readouts amber digits; the ratio bar's acid column amber and base column grey-violet; water's lines and readouts pale blue, the buffer's teal. Board layout (constant, C03, C07, C08 and C10): top-left the short task line; the left column holds the givens card during worked examples (grouped, units attached); the centre holds the lens, the ratio bar, the graph or the working, one stage per line, earlier lines dimming; a plate sits small at the right only when it carries the explanation. Clutter rule: at most three text items bright at once; every label fades when its sentence ends. Reuse: painted plates (inspected 20 Oct): `m6-ph-meter-probe-beaker-v1.png` (two copies: hook and scene 4, coded amber readouts \"7.00\" → \"2.00\" or \"12.00\" on the water and \"4.74\" → \"4.66\" or \"4.83\" on the buffer; beakers labelled in code \"water, 100 mL\" and \"ethanoic acid + sodium ethanoate, 0.100 mol/L each, 100 mL\"), `m6-beaker-v1.png` (scene 2, under the lens), `m6-vinegar-bottle-v1.png` (not used), `m5x-ammonia-bottle-v1.png` (attempt 1 card, small), `m5x-red-blood-cells-v1.png` (inspected: five painted red blood cells, no person; scene 9, small), `m8-lungs-healthy-v1.png` (inspected: a painted pair of lungs with trachea and bronchi, no person or face; scenes 9 and 10, small, the CO₂ arrow ends at it). No new plates needed. No human figures.", "transitionPlan": "Two pH meter plates open with amber readouts that fall by different amounts; the plates shrink as the particle lens opens from a beaker and the ratio bar draws beside it; added hydronium and hydroxide tokens hop onto the partners while the ratio bar moves a slice between its columns and the equations write; the meter plates return small for the base comparison; the givens card enters at the left and the rearranged Ka line and the worked lines write one stage at a time, earlier lines dimming, leaving one kept chip; the pH line tilts the ratio bar for below and above pKa; the capacity graph draws dose by dose as the base column empties; the blood cells and lungs plates frame the blood buffer strip, the 20 : 1 bar and the topping-up arrows; the memory aid writes large; each attempt clears the board and its feedback underlines the givens; the decision rule card and next chip close; scene crossfade with settle."},
        'rows': M6C11_ROWS,
    },
    'm6c12': {
        'design': D + 'lessons/chem-m6-c12.md',
        'learning_review': D + 'checks/m6c12-learning-review.md',
        'science_check': D + 'checks/m6c12-claude-science-check.md',
        'meta': {"title": "How does direct titration reveal an unknown concentration? Standard solutions, concordant titres and the mole ratio", "subtitle": "A pH meter can't tell you accurately how much ethanoic acid is in a bottle of vinegar. How does a titration count every acid molecule, which titres can you trust, and how do the balanced equation and n = cV turn a titre into a concentration?", "subject": "Chemistry", "yearLevel": 12, "module": 6, "lesson": 18, "lessonIntent": "explaining why a pH reading gives a weak acid's concentration only very imprecisely, but a titration counts it; describing a titration with a standard solution, pipette, burette and indicator, and distinguishing the endpoint from the equivalence point; explaining why a titration counts all of a weak acid; stating what makes a primary standard and why sodium hydroxide is standardised; choosing concordant titres (within 0.10 mL) and averaging only those; calculating an unknown concentration in four steps (balanced equation and ratio, n = cV for the known, the ratio for the unknown, c = n/V) with 1 : 1 and 1 : 2 ratios, whichever solution is in the burette, to the right significant figures. No rinsing, meniscus, bubble or error-direction technique (chem-m6-p06), no indicator choice (chem-m6-c13), no curves (chem-m6-c14), no back titration or aliquot scale-up (chem-m6-c15, chem-m6-g03)."},
        'hold_seconds': 10,
        'holds': ["attempt-1", "attempt-2"],
        'ids': ["hook", "idea-apparatus", "equivalence-endpoint", "primary-standard", "concordant-titres", "we1-moles", "we1-concentration", "we2-ratio", "we2-burette-unknown", "memory-aid", "attempt-1", "feedback-1", "attempt-2", "feedback-2", "decision-rule", "key-notes"],
        'progression': {"prerequisiteKnowledge": "Year 11 (n = c × V with V in litres; n = m / M; balanced equations and mole ratios). C02 (acid reactions and their products: acid + hydroxide → salt + water; acid + carbonate → salt + water + carbon dioxide; balancing, including sulfuric acid with two hydroxides). C05 (strong and weak; ethanoic acid is weak and mostly un-ionised). C08 (only a small fraction of a weak acid is ionised; [H₃O⁺] is far below c). C07 (pH is −log[H₃O⁺]; strong acids give [H₃O⁺] = c). C06 (carbonate accepts protons; a diprotic acid gives two). Module 5: Le Chatelier's principle. Not assumed: titration apparatus and terms, primary standard, standardisation, concordance.", "startsWith": "Use a known standard and an unknown solution. The video opens: The label on this white vinegar says five per cent acidity. How could you check how much ethanoic acid is really in it? A pH meter won't do it well.", "stopsAfter": "explaining why a pH reading gives a weak acid's concentration only very imprecisely, but a titration counts it; describing a titration with a standard solution, pipette, burette and indicator, and distinguishing the endpoint from the equivalence point; explaining why a titration counts all of a weak acid; stating what makes a primary standard and why sodium hydroxide is standardised; choosing concordant titres (within 0.10 mL) and averaging only those; calculating an unknown concentration in four steps (balanced equation and ratio, n = cV for the known, the ratio for the unknown, c = n/V) with 1 : 1 and 1 : 2 ratios, whichever solution is in the burette, to the right significant figures. No rinsing, meniscus, bubble or error-direction technique (chem-m6-p06), no indicator choice (chem-m6-c13), no curves (chem-m6-c14), no back titration or aliquot scale-up (chem-m6-c15, chem-m6-g03).", "nextLesson": "doing a titration in the lab, with the technique that keeps it accurate (route chem-m6-p06)."},
        'teaching': {"task": "A pH meter can't tell you accurately how much ethanoic acid is in a bottle of vinegar. How does a titration count every acid molecule, which titres can you trust, and how do the balanced equation and n = cV turn a titre into a concentration?", "causalExplanation": "(1) a pH meter gives the concentration of a weak acid only very imprecisely, because it senses only the small ionised fraction and working back through Ka magnifies the reading error; we need to count every acid molecule (1); (2) react it with a solution of exactly known concentration and measure how much is needed; apparatus and terms (2); (3) the equivalence point is reached when the amounts match the equation, and the endpoint shows it; hydroxide keeps removing hydronium, so the weak acid keeps ionising until all of it has reacted (3); (4) the known concentration must be trustworthy: primary standards; NaOH absorbs water and CO₂, so its solution is standardised (4); (5) a rough titre locates the endpoint; accurate titres must agree within 0.10 mL; average only those (5); (6) the balanced equation gives the ratio; moles of the known from n = cV (6); (7) the ratio gives moles of acid; divide by the aliquot volume; four significant figures; compare with the label (7); (8) the ratio is not always 1 : 1: carbonate takes two protons, so two HCl per Na₂CO₃ (8); (9) moles of carbonate, times two, divided by the titre volume: the unknown can be in the burette (9); memory aid (10); two attempts and brief feedback (11 to 14); decision rule and handoff (15); key notes (16).", "conversationalApproach": "one limitation carries the video: a pH meter cannot tell you accurately how much ethanoic acid is in vinegar, because it senses only the small ionised fraction. A titration counts every acid molecule instead: hydroxide from a solution of exactly known concentration keeps removing hydronium, so the weak acid keeps ionising until all of it has reacted, and the endpoint shows when the amounts match the equation. Primary standards and concordant titres say which numbers to trust, and two worked examples (vinegar against sodium hydroxide, then hydrochloric acid in the burette against sodium carbonate, a two to one ratio) run the same mole bridge: known to moles, ratio, unknown. Two exam questions follow with brief feedback.", "openingDecision": "The label on this white vinegar says five per cent acidity. How could you check how much ethanoic acid is really in it? A pH meter won't do it well. Ethanoic acid is weak, so most of it stays as whole molecules, and the meter only senses the few that have ionised. You could work back through K a, but a reading of two point four could mean anything from about zero point seven to one point one moles per litre. You need a method that counts every acid molecule. That's a titration. So how does it work, and how do its numbers give a concentration?", "understandingCheck": "(A1) \"A 25.00 mL aliquot of sulfuric acid, H₂SO₄, of unknown concentration was titrated with 0.1000 mol/L sodium hydroxide solution. The titres were 23.45 mL, 23.70 mL, 23.40 mL and 23.50 mL. Calculate the concentration of the sulfuric acid.\" New acid with a 1 : 2 ratio the student must write, and a non-concordant titre. Crossed mistake: \"1 : 1, so c = 0.09380 mol/L\" (the site's Step 3 error). (A2) \"Two conical flasks each contain a 25.00 mL aliquot of an acid. Flask A contains 0.100 mol/L hydrochloric acid, HCl, and flask B contains 0.100 mol/L ethanoic acid, CH₃COOH. Each is titrated with 0.100 mol/L sodium hydroxide solution. Predict the volume of sodium hydroxide needed to reach the equivalence point in each flask. Explain your prediction, given that the two acids have different pH values.\" Tests the hook's idea on an unseen pair. Crossed mistake: \"B needs less NaOH, because ethanoic acid is only partly ionised\".", "curriculumScope": "Syllabus (NSW Chemistry Stage 6, 2017), as printed: \"conduct practical investigations to analyse the concentration of an unknown acid or base by titration\" this video starts from a known standard and an unknown solution and stops at the unknown's concentration from concordant titres and a balanced mole ratio. It teaches: why a pH reading gives the concentration of a weak acid such as ethanoic acid only very imprecisely (C05, C08 and C10 callbacks), and why a titration counts it; the idea of a titration (react the unknown with a solution of exactly known concentration until the amounts match the equation); the apparatus and terms (standard solution, pipette and aliquot, burette, titrant, titre, indicator, endpoint, equivalence point) at the level needed for the calculation; why a titration counts all of a weak acid (hydroxide removes hydronium, the equilibrium shifts right until every molecule has reacted; Module 5 Le Chatelier callback); what makes a primary standard and why sodium hydroxide is standardised first; rough and accurate titres and concordance (within 0.10 mL); the four-step calculation with a 1 : 1 ratio (vinegar) and a 1 : 2 ratio (sodium carbonate standardising hydrochloric acid, with the unknown in the burette); significant figures for the result. Not here: rinsing rules, meniscus reading, parallax, air bubbles, the rough-titration technique and error direction (chem-m6-p06, the next video, which owns practical conduct and error evaluation; see Open decisions); indicator choice and equivalence-point pH (chem-m6-c13); titration curves and conductivity graphs (chem-m6-c14); back titration and dilution or aliquot scale-up from a volumetric flask (chem-m6-c15 and chem-m6-g03; see Open decisions); percentage by mass with density (g03); polyprotic stages of tartaric or oxalic acid beyond the overall ratio."},
        'design_block': {'renderer': RENDERER, "visualSystem": "Explainer engine: warm paper stage, handwritten Caveat headings, amber doodle layer. Colour key on screen throughout: H₃O⁺ teal token on pale blue water (C01); OH⁻ violet; whole ethanoic acid molecules amber-outlined (C05, C08); the known solution's values (standard, titrant) navy; the unknown's values amber; the ratio box teal; concordant titres ringed teal, the outlier crossed grey. Board layout (constant, C03, C07, C08 and C10): top-left the short task line; the left column holds the givens card during worked examples (grouped, units attached); the centre holds the titre table, the mole bridge or the working, one stage per line, earlier lines dimming; the apparatus plates sit small at the right only when they carry the explanation. Clutter rule: at most three text items bright at once; every label fades when its sentence ends. Reuse: painted plates (inspected 20 Oct): `m6-burette-clamp-stand-v1.png` (inspected: retort stand, clamp and glass burette with a blue tap, no person or hand; scenes 2, 3, 5, the fill gauge drawn over its tube), `m6-volumetric-pipette-filler-v1.png` (inspected: bulb pipette with a red pipette filler, no hand; scene 2), `m6-conical-flask-v1.png` and `m6-white-tile-v1.png` (scene 2, under the burette tip), `m6-clip-phenolphthalein-colourless-v1.png` and `m6-clip-phenolphthalein-pink-v1.png` (inspected the pink one: conical flask of pale pink solution, no hand; scene 3, the endpoint swap), `m6-vinegar-bottle-v1.png` (hook and scenes 5 to 7, coded label \"white vinegar: 5% acidity\"), `m6-ph-meter-probe-beaker-v1.png` (hook, coded readout \"2.4\" in the beaker labelled \"vinegar\"), `m6-volumetric-flask-v1.png` (scene 4, the standard solution), `m6-indicator-methyl-orange-set-v1.png` (not used: indicator choice is chem-m6-c13; scene 8 names the indicator in a tag only). No new plates needed. No human figures.", "transitionPlan": "The vinegar bottle and pH meter plates open, and a small particle lens over the beaker shows the few ions the meter senses; the board clears as the burette, flask and tile plates assemble with the pipette sliding in; the flask swaps from colourless to pink at the endpoint while the lens shows the weak acid ionising until none is left; the volumetric flask and the primary standard card tick its criteria; the titre table writes row by row and the concordance strip draws beneath it; the equation strip, givens card and mole bridge carry both worked examples one stage per line, earlier lines dimming, with the apparatus thumbnail swapping the unknown into the burette for the second; the memory aid writes large; each attempt clears the board and its feedback underlines the givens; the decision rule card and next chip close; scene crossfade with settle."},
        'rows': M6C12_ROWS,
    },
    # END generated entries: m6c11-m6c12
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
    lr = cfg.get('learning_review', f'{D}checks/{key}-learning-review.md')
    chk = cfg.get('science_check', f'{D}checks/{key}-claude-science-check.md')
    brief['studentLearningReview'] = {'status': 'pass', 'reviewer': cfg.get('learn_reviewer', LEARN_REVIEWER), 'evidence': {'path': lr, 'sha256': sha(lr)}}
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
