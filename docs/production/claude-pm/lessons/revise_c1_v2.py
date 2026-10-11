"""Apply the independent learning review repairs to the C1 design (run from repo root)."""
import io, re

p = 'docs/production/claude-pm/lessons/chem-m5-c01.md'
s = io.open(p, encoding='utf8').read()


def scene(heading_prefix, new_block):
    global s
    m = re.search(r'^### ' + re.escape(heading_prefix) + r'.*?(?=^### |^## |\Z)', s, flags=re.M | re.S)
    assert m, heading_prefix
    s = s[:m.start()] + new_block.strip() + '\n\n' + s[m.end():]


scene('2. look-inside', '''### 2. look-inside (dynamic exchange)
> Let's zoom in to the **surface**, where the liquid meets the gas above it. The bottle holds dissolved carbon dioxide in the water, and carbon dioxide gas in the space at the top. Particles are always moving, so every second some dissolved molecules at the surface break free and **escape** into the gas. And every second, some gas molecules hit the water and **dissolve** back in. When the cap first went on, more escaped than returned. But as gas built up in the space above, more of it dived back in each second, until the return rate **caught up** with the escape rate. From then on, they match: for every molecule that leaves, another one comes back. The double arrow in this equation means both directions are happening **at once**.

Visual: lens zooms from the painted bottle's surface into a molecule view (coded CO₂ molecules). On "escape", molecules arc up across the surface (blue); on "dissolve", molecules arc down (amber). Two live counters start unequal ("escaping 12, returning 4") and the returning counter climbs to match on "caught up", then both hold at 12 per second. Equation chip CO₂(aq) ⇌ CO₂(g) writes on, with the double arrow pulsing on "at once".''')

scene('3. dynamic-name', '''### 3. dynamic-name (term and aid)
> This is called **dynamic equilibrium**. Dynamic, because both processes keep going. Equilibrium, because their effects cancel out, so nothing changes overall. Here's a picture to hold onto. Think of the water and the gas as two towns, joined by a road at the surface, with molecules as the **traffic**. The same number of cars drive each way every minute, so the traffic never stops, but each town's population stays the same. Unlike drivers, molecules don't choose where to go, they just move about at random. And notice the towns don't have to be the **same size**. Equal rates, not equal amounts.

Visual: term writes on large with plain meanings under each word. Hand-drawn two-towns doodle labelled "water" and "gas", a road labelled "surface", cars labelled "molecules" moving both ways at an equal rate; the towns are different sizes. Big handwritten aid "Equal rates, not equal amounts." with amber underline. Return briefly to the molecule view showing more molecules dissolved than in the gas.''')

scene('5. open-vs-closed', '''### 5. open-vs-closed (cap off)
> Back to our soda water. What happens if we take the **cap off**? Carbon dioxide escaping from the water can now drift out into the room, and the room is huge, so very little of it ever comes back. Molecules keep leaving faster than they return, and the drink slowly goes **flat**. With the cap on, the bottle is a **closed system**: matter can't get in or out. With the cap off, it's an **open system**. That's why dynamic equilibrium needs a closed system. If the returning half of the exchange keeps getting lost, the two rates can never match.

Visual: painted bottle cross-fades from sealed to open (aligned pair). Molecule view: escaping arcs continue out of frame and are labelled "lost to the room"; returning arcs thin out; counters diverge ("escaping 12, returning 3"). "Closed system" and "open system" labels with a dashed boundary that seals or breaks.''')

scene('6. worked-classify', '''### 6. worked-classify (method and first case)
> Let's use this to classify systems, the way an exam question might ask. Ask these questions in order. First: has the reaction **finished**, so it can't run backwards? If yes, it's static. If it can still go both ways, ask two more. Is the system **closed**? And are the things we can observe, like colour or concentration, **staying constant**? If both answers are yes, it's dynamic. If not, it's neither. Try it on a sealed flask of hydrogen and iodine gas, kept at 450 degrees for several hours. The purple colour isn't changing. Has the reaction finished? No, it can go both ways. Is it closed? Yes, it's sealed. Is the colour steady? Yes. So that's **dynamic** equilibrium.

Visual: hand-drawn decision flowchart builds as each question is asked: first diamond "Finished and can't reverse?" (yes goes to STATIC), then "Closed?" and "Staying constant?" (both yes goes to DYNAMIC, any no goes to NEITHER). The flask vignette appears on the right and a pen traces its path to a DYNAMIC stamp. Equation chip: H₂(g) + I₂(g) ⇌ 2HI(g).''')

scene('7. attempt', '''### 6b. worked-more (two more cases)
> Now the cold ash from our campfire. Has the reaction finished? Yes, and it can't reverse, so it's **static**. We don't need the other questions, even though the ash is sitting out in the open air. Last, a beaker of water slowly evaporating in a warm room. Evaporation can go both ways, because some vapour does condense back in, so it hasn't finished. Is it closed? No, it's open, and far more water escapes than returns, so the level keeps dropping. That makes it **neither**.

Visual: same flowchart; the first case shrinks to a small chip. The ash vignette traces straight from the first diamond to STATIC. The beaker vignette traces past the first diamond, fails at "Closed?", and lands on NEITHER. Only the current case is large.

### 7. attempt
> Your turn. Use the same questions to classify each of these as static, dynamic or neither, and give your reason. One: a sealed jar of salt water that has sat untouched for weeks. The water is saturated, which means it can't dissolve any more salt overall, and the pile of crystals at the bottom stays exactly the same size. Two: a cup of hot coffee cooling on a desk. Three: a strip of magnesium that has burned completely to white powder. **Pause** the video if you'd like more time.

Visual: three painted vignettes numbered 1 to 3, the flowchart small at the side for support. Countdown ring through the hold (about 25 seconds after narration). Nothing answer-bearing on screen.''')

scene('8. feedback', '''### 8. feedback
> The salt jar is **dynamic**. Dissolving can go both ways: salt keeps dissolving from the pile, and dissolved salt keeps crystallising back onto it, at the same rate, in a closed jar. That's why the pile stays the same size. If you said static, that's the trap: still-looking doesn't mean stopped. The coffee is **neither**. The cup is open, and heat and steam keep leaving, so it's still changing. It isn't at equilibrium at all. And the burned magnesium is **static**. If you said neither because it's sitting in open air, go back to the first question: the reaction has finished and can't run backwards, so it's static.

Visual: same board; each vignette in turn gets its pen trace through the flowchart and its verdict stamp. The salt jar shows a tiny zoom with ions leaving and rejoining the crystal pile.''')

scene('9. memory', '''### 9. memory and handoff
> So here's the order to use in any question. First, has the reaction finished, so it can't run backwards? Then it's static. If it can still go both ways, and the system is closed and steady, it's dynamic. If it's open, or still changing, it's neither. And remember, at dynamic equilibrium the rates are equal, not the amounts. Next, we'll watch a reaction actually reach equilibrium, by following its two rates as they change.

Visual: the three ordered steps write on, big and handwritten, each with its icon (ash, closed bottle, open beaker). Aid repeated. "Next: how rates change on the way to equilibrium" chip.''')

s = re.sub(r'^Status: .*$', 'Status: Claude design. Codex fact check (checks/c1-check.md) and independent learning review (checks/c1-learning-review.md) applied: ordered decision rule (finished first), cause of equal rates, explicit analogy mapping, worked example split into two scenes, saturated wording, 25 second hold, feedback names likely wrong answers. The fridge and energy aside is in the key notes only.', s, count=1, flags=re.M)
s = re.sub(r'^- \*\*Memory aids:\*\*.*$', '- **Memory aids:** "Equal rates, not equal amounts" (with two-way traffic). Ordered decision rule: finished and cannot reverse means static; otherwise closed and steady means dynamic; otherwise neither.', s, count=1, flags=re.M)
io.open(p, 'w', encoding='utf8').write(s)
print([l for l in s.split('\n') if l.startswith('### ')])
