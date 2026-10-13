"""Build lesson.json and lesson.production-brief.json for the wave 5 Chemistry designs c5 to c8 (run from repo root).

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
    'rates-equal': ['adjust', 'C2 to C4B style rate bars (forward blue, reverse amber, teal equal bracket) with the iron tube shrunk to the corner', 'Gives the cause of the constant ratio: each rate is a fixed number times the concentrations that must meet, and the rates are equal',
                    'We write a species in square brackets for its amount per litre / joining runs at point three times the iron times the thiocyanate / splitting runs at three times the red ion / At equilibrium the rates are equal',
                    'The tube shrinks away, a bracket pair writes round Fe3+, the forward line writes under the blue bar and the reverse line under the amber bar, and the two lines join with an equals sign',
                    E, 'The tube shrinks to the corner and two level rate bars sit under the teal bracket; a bracket pair writes round Fe3+ with the tag "amount per litre"; "forward = 0.3 x [Fe3+][SCN-]" writes under the blue bar with the three brackets ringed in turn; "reverse = 3 x [FeSCN2+]" writes under the amber bar; the lines join into "0.3 x [Fe3+][SCN-] = 3 x [FeSCN2+]"',
                    ['CameraStage shrink', 'bracket draw', 'HandText write-on', 'ScribbleCircle', 'NumberTicker rate bars'], 'Hold the finished equal rates line for a beat'],
    'ratio-name': ['adjust', 'The rate equation from the previous scene with pen cancelling and a fraction that writes step by step, then a large K', 'Shows the fixed numbers divide to a constant ratio and only then names it as the equilibrium constant',
                   'Divide both sides by three / equals point three over three, a tenth / Those two numbers are fixed / the equilibrium constant, K',
                   'Pen divides both sides, the threes and the concentration brackets cancel and reappear on the other side, the fraction writes to 0.1, the two fixed numbers are circled and K writes large last',
                   E, '"divide by 3" writes under the right side and the 3 cancels; "divide by [Fe3+][SCN-]" writes under the left and the brackets cancel and reappear under the red ion; the fraction "[FeSCN2+] / ([Fe3+][SCN-]) = 0.3 / 3 = 0.1" writes in steps; the 0.3 and 3 are circled with "fixed at one temperature"; K writes large on "name" with its plain meaning',
                   ['HandText write-on', 'cancel strike', 'ScribbleCircle', 'tag pop'], 'Hold the fraction and the named K into the next scene'],
    'coefficient-power': ['adjust', 'C4 hot H2 + I2 tube at 2, 2, 14 with two rate bars at 0.2 and the equation chip, plus a callback chip to the 2NO2 squeeze', 'Shows why a coefficient of two becomes a power of two: two HI must meet to split',
                          'joining needs a hydrogen and an iodine to meet / that number is point oh five / Splitting needs two hydrogen iodide to meet / hydrogen iodide squared / The coefficient two has become a power of two',
                          'One H2 and one I2 drift together, 0.05 replaces the unknown number, two HI meet and split, their two brackets merge into a squared bracket, and the divide-both-sides move ends at 49',
                          E, 'One H2 and one I2 meet with a pen ring and "forward = number x [H2][I2]" writes, then "0.05 x 2 x 2 = 0.2"; two HI particles meet and split with the chip "like 2NO2 in the squeeze video" and "reverse = number x [HI] x [HI]" merges to "[HI]^2" with an arrow to the exponent; "0.2 / 14^2 = 0.05 / 49" writes; the rates are set equal and the ratio ends at 49 with the coefficient 2 flying to a power',
                          ['particle meeting', 'HandText write-on', 'ScribbleCircle', 'bracket merge', 'chip pop'], 'Hold the 49 and the power of two'],
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
    'rate-link': ['adjust', 'Two rate bars with the two rate lines, a fraction bar, number boxes sliding together, a flipped Q fraction and the forward over reverse equals K over Q line', 'Connects Q and K to the rates so the comparison gives the direction for a cause, not just a rule',
                  'joining is a fixed number times hydrogen times iodine / Divide the two / forward over reverse is K times one over Q / forty-nine over 6.25, about eight / the forward reaction runs about eight times faster',
                  'The two rate lines write under the bars, a fraction bar divides them, the fixed numbers slide together to make K, the Q fraction flips and K over Q writes large, then the forward bar grows about eight times the reverse bar',
                  E, 'The forward line writes under the blue bar and the reverse line under the amber bar; a fraction bar draws between them; the two number boxes slide together with "0.05 / (0.05 / 49) = 49 = K"; the Q fraction flips with a curved arrow; "forward / reverse = K / Q" writes large with K and Q ringed; "49 / 6.25 = 7.84" writes and the forward bar grows to about eight times the reverse bar',
                  ['HandText write-on', 'DrawPath fraction', 'curved arrow flip', 'NumberTicker rate bars', 'ScribbleCircle'], 'Hold the unequal bars'],
    'q-chases-k': ['adjust', 'The Q marker sliding along the log line toward K with the rate bars following live and the tube dots changing to the settled tube', 'Shows Q climbing to K as the rates meet and ties it to the settled tube from the ICE table video',
                   'the top of Q grows and the bottom shrinks, so Q climbs / The forward rate falls, the reverse rate rises / exactly when Q reaches K / 0.10, 0.10 and 0.70 / Q chases K',
                   'The Q marker slides toward 49 and slows near it, the forward bar shrinks and the reverse bar grows until they meet at the teal bracket, and the tube dots change to 2, 2, 14',
                   E, 'The Q marker slides right from 6.25 toward 49, slowing as it approaches; the rate bars follow K / Q until they meet at the teal bracket as the marker lands with a small teal flash; the tube dots change from 4, 4, 10 to 2, 2, 14; the settled values 0.10, 0.10, 0.70 tick under the tube and "0.70^2 / (0.10 x 0.10) = 49 = K" writes with a teal tick; a quiet tag about equal totals shows for about 2 seconds',
                   ['marker slide', 'NumberTicker rate bars', 'particle settle', 'bracket draw', 'tick'], 'Hold the landed marker briefly'],
    'other-side': ['new', 'Fresh board with a tube at 1 H2, 1 I2 and 16 HI dots, the Q working in three beats, a far-right Q marker at 256 and the shared countdown ring', 'Starts from the other side with a thinking hold so the learner predicts the direction before the answer',
                   'Now start from the other side / 0.05 of hydrogen, 0.05 of iodine and 0.80 of hydrogen iodide / so Q is 256 / Which way will it run?',
                   'A fresh board builds, the Q working writes in beats, a Q marker drops far right of K and the question holds with the countdown ring',
                   E, 'A fresh board in the same zones shows the givens card and a tube of 1, 1, 16 dots with the made-up chip; "0.80^2 = 0.64", "0.05 x 0.05 = 0.0025" and "Q = 0.64 / 0.0025 = 256" write in beats; the Q marker drops far right of the K marker; the question "Which way will it run?" holds with the countdown ring for about 10 seconds and the small line "pause if you need longer"',
                   ['board build', 'HandText write-on', 'marker drop', 'Countdown ring'], 'About 10 second answer-free thinking hold after the question'],
    'other-side-answer': ['new', 'A greater-than sign between the markers, the amber reverse arrow, the reverse bar about five times the forward bar, and a thumbnail of the first tube', 'Gives the answer, gives the rate reason and teaches that too much product depends on K',
                          'Q is above K / the reverse reaction wins / so the reverse is about five times faster / Whether there is too much product depends on K',
                          'The greater-than sign writes, the reverse arrow lights, the reverse bar grows to about five times the forward bar, the Q marker slides left and the tube lands on the settled picture, and three markers are shown in turn',
                          E, 'A ">" writes between the markers and the reverse arrow lights amber; "49 / 256 = 0.19" writes and the reverse bar grows to about 5.2 times the forward bar; the Q marker slides left toward 49 with the bars following and the dots change (HI 16 to 14, H2 and I2 1 to 2); a thumbnail of the first tube appears; the closing tag lists Q below K, Q equal K and Q above K with the three markers shown in turn',
                          ['marker slide', 'NumberTicker rate bars', 'particle settle', 'thumbnail pop', 'tag pop'], 'Hold the three markers'],
    'q-equals-k': ['adjust', 'Both markers at K with the equal-rates bracket, the broken-axis segments with a zero marker and an off the scale marker, and the C2 flask thumbnails', 'Covers Q equals K without equal concentrations and the two ends of the scale (only reactants, only products)',
                   'If Q equals K / That does not mean equal concentrations / if a flask holds only reactants / the top of Q is zero / If it holds only products / Q is off the scale',
                   'Both markers sit on K with the settled tube ticked, the line gains a broken axis at the far left for the reactants-only flask and at the far right for the products-only flask, and the aid writes large',
                   E, 'Both markers sit at the K position with the equal-rates bracket and the tag "rates equal, not concentrations equal" beside the settled tube; a broken-axis segment at the far left with a 0 marker and the C2 reactants-only flask thumbnail with a pen arrow toward K; a broken-axis segment at the far right with an off the scale marker and the products-only thumbnail with a pen arrow toward K; "Q chases K." writes large',
                   ['marker drop', 'broken axis draw', 'thumbnail pop', 'DrawPath arrows', 'HandText write-on'], 'Hold the aid on the line'],
    'disturbance': ['adjust', 'The settled hot tube with the log line, the Q marker at 49, four H2 dots dropping in, the Q marker dropping to 16.3 and the forward bar stepping up', 'Links Q to the disturbance videos: adding hydrogen lowers Q, and the forward rate wins',
                    'This also explains the disturbance videos / add 0.20 moles per litre of hydrogen / The bottom of Q gets bigger / about sixteen, below K / the mixture shifts right',
                    'Four hydrogen dots drop into the settled tube, a pen ring moves to the bottom of Q, the Q marker drops left to 16.3 and the forward bar steps up to about three times the reverse bar',
                    E, 'The settled tube (2, 2, 14) with the log line, the K marker and the Q marker at 49 sits with level rate bars; the card gains "same volume, same temperature"; four H2 dots drop in and the card shows "[H2] = 0.30 mol/L"; a pen ring moves to the denominator; the Q marker drops to 16.3 with "0.70^2 / (0.30 x 0.10) = 0.49 / 0.030 = 16.3"; the forward bar steps up to about 3 times the reverse bar ("49 / 16.3 = 3.0"); a pen arrow runs right and Q begins to climb back',
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

LESSONS = {
    'c5': {
        'design': D + 'lessons/chem-m5-c05.md',
        'meta': {'title': 'Writing and interpreting equilibrium expressions', 'subtitle': 'When a settled mixture changes all its amounts, what stays the same, and how do you write it for any reaction?', 'subject': 'Chemistry', 'yearLevel': 12, 'module': 5, 'lesson': 7,
                 'lessonIntent': 'State that a fixed-temperature equilibrium has a constant concentration ratio called K, write the expression for a balanced equation with coefficients as powers and pure solids, pure liquids and the solvent left out, and read a large, small or middling K.'},
        'hold_seconds': 10,
        'ids': ['hook', 'rates-equal', 'ratio-name', 'coefficient-power', 'any-equation', 'from-scratch', 'left-out', 'size-of-k', 'memory-aid', 'attempt', 'feedback-one', 'feedback-two', 'decision-rule', 'key-notes'],
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
            'causalExplanation': 'Q is the K fraction with the concentrations from the moment in question. Dividing the forward rate by the reverse rate in the rate model gives K over Q, so when Q is below K the forward rate is larger and the mixture makes more product, when Q is above K the reverse rate is larger, and when Q equals K the rates are equal and there is no net change. A disturbance changes the concentrations and so changes Q, while K stays the same at the same temperature. A mixture of only reactants has Q of zero and runs forward, and only products makes Q off the scale and runs in reverse.',
            'conversationalApproach': 'A freshly mixed hot H2 and I2 tube asks which way it will run, Q is built from the K fraction and calculated in three beats, compared with K on a log number line, tied to the rates as K over Q, tested on the other side with a short thinking hold, linked back to the disturbance videos, and checked on an unseen ammonia mixture.',
            'openingDecision': 'Will the freshly mixed tube make more hydrogen iodide or break some down, and can we know before anything moves?',
            'understandingCheck': 'For N2 + 3H2 = 2NH3 at 400 degrees Celsius with K = 0.50 and [N2] = 0.40, [H2] = 0.50, [NH3] = 0.20 mol/L: write and calculate Q, and say whether more or less ammonia forms and why.',
            'curriculumScope': 'Calculate the reaction quotient and compare it with K to predict the direction of change (Module 5). How far the mixture moves, ICE tables for the harder cases, the temperature dependence of K and Qsp are deferred.'},
        'design_block': {
            'renderer': RENDERER,
            'visualSystem': 'Explainer engine: warm paper stage, handwritten Caveat headings, amber doodle layer, the C4B hot H2 + I2 tube with a coded particle view, the C5 expression builder, a coded log number line with K and Q markers, C2 to C6 rate bars, and a grouped givens card. Colour key: K marker teal, Q marker in the pen colour, forward blue, reverse amber, equal teal.',
            'transitionPlan': 'The hot tube and givens card set the first mixture; the K fraction and the Q fraction sit side by side; the log number line draws on and keeps its markers through the next scenes; a fresh board in the same zones carries the other-side tube; the settled tube returns for the disturbance; the attempt board removes the aids and the feedback rebuilds Q and the number line; the next chip slides in for the harder cases; scene crossfade with settle.'},
        'rows': C8_ROWS,
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
