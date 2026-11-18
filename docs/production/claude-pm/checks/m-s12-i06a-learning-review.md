# Maths S12 i06a Revision 1: independent learning review

18 November 2026. Design `lessons/math-s12-i06a.md`, "How do we read a share table and calculate dividends and dividend yield?" Source SHA256 `e675d7b501df03261e1de911592338eb340eaf389d3229905d31f36e50735e38`.

Written design reviewed (narration, visual descriptions, share table, question cards, feedback, key notes and decisions) by tracing it from its stated entry knowledge (i05: comparing investments; Year 11 Standard m01: percentages, cents to dollars) as a Mathematics Standard 2 student starting Year 12 who has never owned or read about shares (Standard 2 only, ruling 30). No built preview, plate inspection, playback or human listening is claimed; pace figures are speech-only estimates at 13.3 characters a second. An AI beginner-perspective review identifies likely problems; it is not evidence that real students learned.

**Verdict: pass** (0 blockers, 0 should fix, 3 optional).

This is a good design, and the split from i06b is justified (open decision 1: one video would need about 616 s or lose the site's hook or the digital tool). Shares are framed as what they are: "a small piece of ownership in a company", two separate returns (capital growth "only if you sell", dividends as "cash for each share"), and one plain risk card ("Prices can fall. Dividends can be cut. You can lose money.") said once and shown once, with no gambling language or imagery (rulings 6 and 32). The yield gets a meaning a student can use ("how much cash you get back each year, for each dollar a share costs today"), the table's High and Low are greyed "not used here", the 850 coin-dropping tiles make "shares × dividend" concrete and then show why the number of shares cannot be in the yield, and the slider resolves the hook: the yield falls while the holding rises. Each crossed slip is a real exam slip (inverted fraction, shares in the yield, High as the price, the price paid). Recalculated with SymPy 1.14 (`work/brief-review-standard-i1/verify.py`, `python -I`): 5.00% and 4.00%, 1.25, $600 and $750; the day before $44.25; 3.63% and the slip 27.53; $204.00, 3.75% and the slip 3,187.5; A1 3.60%, $270.00 and the slip 3.19%; A2 $240.00, 4.00% and the slip 5%. All correct.

## Findings

1. **Optional, scene 1 (the yield before its meaning).** "The yield printed in the share table falls, from five per cent to four. And nothing has gone wrong." A student who has never heard "yield" cannot yet feel the surprise. Add a five-word gloss: "The yield, the dividend as a percentage of the price, falls from five per cent to four." The full meaning still comes in scene 4.

2. **Optional, scene 4 (why cents to dollars).** "First, change cents to dollars" has no reason. Add: "so both are in dollars. Mixing them would give three hundred and sixty-three per cent." Show it as a grey crossed row "162 ÷ 44.60 × 100% = 363%", so the habit has a picture. (162 ÷ 44.60 × 100 = 363.23.)

3. **Optional, scene 3 (six column names in one breath).** Last, Change, High, Low, Div and Yield are named in about 25 s, then the "day before" sum. The column lighting helps, but the "day before" calculation is not used again in this video. If the voiced take feels rushed, cut "so the day before, it closed at forty-four dollars twenty-five" and its grey row; Change still gets its meaning.

## Joins

i05 to i06a matches: scene 1 opens on i05's two-route frame, fades the Standard 1 panel and grows the kettlebell and the share row "Larkspur Fitness Ltd | $6.00 | 30c | ?". i06a to i06b matches the decisions file: the phone tower, "Ridgeline Mobile Ltd (a phone network)", the six closing prices, empty axes, "up every month?", and no plotted points or percentage.

## Practice and feedback

Both cards keep the full worded question on screen through the 10 s countdown; A1's row is on the card with its Yield cell "?", and A2's picture shows both prices because choosing between them is the question. A1 asks three things in 10 s, which "Pause here to answer." covers. Feedback 1 (about 27 s) and feedback 2 (about 21 s) give the answer, the reason and one crossed slip each. A gym chain and a phone network are everyday businesses; all companies are invented (Codex to confirm none is an ASX listing, ruling 37), and "prices and dividends change" is said once.

## Key notes and length

The five notes are short and useful, and the memory card's key line ("Cents to dollars first. Last = price now. The number of shares never goes in the yield.") holds the three conditions students miss. About 467 s with holds, 103 s under the cap.

No speech, design edits, builds or commits were made.
