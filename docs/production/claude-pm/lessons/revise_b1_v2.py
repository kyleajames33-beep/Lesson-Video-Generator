"""Apply the independent learning review repairs to the B1 design (run from repo root)."""
import io, re

p = 'docs/production/claude-pm/lessons/bio-m5-b01.md'
s = io.open(p, encoding='utf8').read()


def scene(heading_prefix, new_block):
    global s
    m = re.search(r'^### ' + re.escape(heading_prefix) + r'.*?(?=^### |^## |\Z)', s, flags=re.M | re.S)
    assert m, heading_prefix
    s = s[:m.start()] + new_block.strip() + '\n\n' + s[m.end():]


scene('3. asexual', '''### 3. asexual
> There are two ways to make offspring. The first is **asexual** reproduction. One parent makes offspring on its own, without any reproductive cells joining. A strawberry plant sends out a **runner** that grows into a new plant. A bacterium **splits** in two. A yeast cell grows a **bud** that breaks away. In each case the offspring gets a copy of the parent's DNA, so it's a clone. It's fast, it needs no partner, and a successful plant can fill a field quickly. Copying isn't perfect, though. Occasional copying errors, called **mutations**, mean even clones can differ a little.

Visual: three-panel montage, each panel animating on its own cue word: strawberry runner art (stem draws on, plantlet highlights), coded bacterium dividing, coded yeast budding. "Copy of the parent's DNA" with matching DNA icons. On "mutations", one tiny highlighted change in a DNA icon.''')

scene('4. sexual', '''### 4. gametes (sexual reproduction, part 1)
> The second way is **sexual** reproduction. Here, two reproductive cells called **gametes**, like a sperm cell and an egg cell, **join** together. To see why that matters, we need one more idea. Inside each cell, DNA is packed into structures called **chromosomes**. Most cells carry two full sets of them. A gamete carries just **one set**. So when two gametes join, one set plus one set gives the new offspring a full **two sets**, usually one from each parent.

Visual: strawberry flower art; two gamete circles (one from each parent plant, colour-coded) travel and meet on "join". Chromosome-set icons: a body cell with two sets, a gamete with one set, then one set plus one set combining into two sets on "two sets", colour-coded by parent.

### 4b. variation (sexual reproduction, part 2)
> A **gene** is a section of DNA that carries the instructions for one characteristic, like the size of a strawberry. Genes come in different versions, called **alleles**: one version might give bigger fruit, another smaller fruit. Here's the key part. The gametes made by one parent aren't all identical. Each one carries a different **mix** of that parent's alleles. And which sperm meets which egg comes down to **chance**. So every seedling ends up with its own combination of alleles. That's why seedlings from the same two strawberry parents all look a bit different. Those differences between individuals are called **variation**. Each seedling isn't a blend of its parents, and it isn't a copy. It's a new mix. The cost is that sexual reproduction is slower, takes more energy, and usually needs a mate.

Visual: a gene "slot" with coloured allele beads (big fruit, small fruit). One parent makes four gametes, each with a different bead mix, on "mix". Two gametes are picked at random from each side on "chance" (a short shuffle). The varied seedlings painting reveals left to right, each seedling labelled with its own bead pattern. "variation = differences between individuals" writes on. "Not a blend, not a copy" with a tick and crosses.''')

scene('5. trade-off', '''### 5. trade-off
> So which is better? It depends on the **conditions**. When conditions are stable, copying a plant that already does well is a great strategy, because every copy does well too. But when conditions **change**, say a new disease arrives, it's a different story. Whether a plant can resist a disease depends partly on its alleles. In a group of clones, they all carry the same alleles, so either they all resist it, or none of them do. In a varied group, some plants may carry an allele that helps them **survive**, and those survivors keep the species going. That's the Cavendish problem. Every plant has the same DNA, so once TR4 can attack one, it can attack them all. Here's a way to remember it: asexual is fast and **alike**, sexual is slow and varied. Alike suits stable conditions. Varied helps when conditions change.

Visual: split board. Left "stable" (sun): a row of identical healthy clones, tick. Right "change" (disease icon): the clone row with leaf-spot art all affected; then the varied seedlings with some unaffected (survivors circled, each with a highlighted allele bead). Return to the plantation art on "Cavendish". Big handwritten aid: "Asexual: fast and alike. Sexual: slow and varied." with "alike suits stable / varied helps with change" underneath.''')

scene('6. worked-compare', '''### 6. worked-compare (building an HSC answer)
> Here's how you'd turn this into a strong answer if a question asks you to **compare** sexual and asexual reproduction. A comparison needs both similarities and differences, organised by **criteria**. Start with variation: clones have almost the same DNA, while sexual offspring get new combinations of alleles. Then speed: copying builds a population quickly, joining gametes is slower. Then partners and energy: no mate is needed for asexual reproduction, while sexual reproduction usually needs one and costs more energy. And one **similarity**: both pass DNA to the next generation, and both can be changed by mutation. Then each row becomes a sentence, like this one. Asexual reproduction produces offspring with almost identical DNA, **whereas** sexual reproduction produces new combinations of alleles. Finish by linking to conditions: stable conditions favour asexual, changing conditions favour sexual.

Visual: a criteria table builds row by row on the cue words (Variation, Speed, Partners and energy, Similarity), each row filling its two columns as spoken. Command verb "compare" gets a scribble underline and a margin note "similarities AND differences". On "whereas", the Variation row lifts out and writes on as one full model sentence, with "whereas" circled. Final "Link to conditions" row highlights.''')

scene('7. attempt', '''### 7. attempt
> Your turn. For each situation, decide whether asexual or sexual reproduction would better help the species continue, and explain why. One: bacteria living in a warm pond where the conditions have stayed the same for years. Two: a single plant that has reached an island with no others of its kind. This plant can't fertilise itself, but it can grow runners. Three: a strawberry plant that can send out runners and also make seeds, in a field that's getting hotter and drier every year. Which method gives its offspring the better chance in the long run? **Pause** the video if you'd like more time.

Visual: three painted vignettes (stable pond, lone island plant, dry-soil trays for the warming field), numbered. Countdown ring through the hold (about 25 seconds). Nothing answer-bearing.''')

scene('8. feedback', '''### 8. feedback
> In the stable pond, **asexual** reproduction works well. The bacteria already suit their pond, so fast copying builds the population and keeps that winning combination. If you chose sexual because variation sounds better, remember variation only helps when conditions change. On the island, **asexual** reproduction is the plant's only option. With no mate and no way to fertilise itself, growing runners lets it start a population on its own. And for the strawberry in the warming field, **sexual** reproduction gives the better long-term chance. Its seeds produce varied seedlings, so some may carry alleles that cope better with heat and drought. Runners would only make more copies of a plant that may struggle as conditions keep changing.

Visual: each vignette in turn gets its verdict stamp and a one-line reason card. The warming field shows varied seedlings with a few circled as better suited.''')

scene('9. memory', '''### 9. memory and handoff
> So, a species continues when DNA is passed on and offspring survive to reproduce. Asexual reproduction is fast and alike. Sexual reproduction is slow and varied. Which one helps more depends on whether conditions stay the same or change. Next, we'll see how different animals actually bring sperm and egg together.

Visual: the aid writes on big, with runner icon and flower icon; "depends on conditions" with sun and disease icons. Next chip.''')

s = s.replace('- Stable conditions favour asexual reproduction; changing conditions make variation valuable.',
              '- Variation means differences between individuals. Asexual is fast and alike (suits stable conditions); sexual is slow and varied (helps when conditions change).')
s = re.sub(r'^Status: .*$', 'Status: Claude design. Codex fact check (checks/b1-check.md) and independent learning review (checks/b1-learning-review.md) applied: sexual reproduction split into two scenes with the cause of sibling differences (different gamete mixes plus chance), variation defined, cause of disease survival via alleles, aid changed to "fast and alike / slow and varied", island case states it cannot self-fertilise, attempt item 3 is a new warming-field case, 25 second hold, feedback answers both misconceptions, compare scene adds a model sentence, mutation given its cause.', s, count=1, flags=re.M)
s = re.sub(r'^- \*\*Memory aid:\*\*.*$', '- **Memory aid:** "Asexual: fast and alike. Sexual: slow and varied." (alike suits stable conditions, varied helps with change), plus the banana story itself.', s, count=1, flags=re.M)
io.open(p, 'w', encoding='utf8').write(s)
print([l for l in s.split('\n') if l.startswith('### ')])
