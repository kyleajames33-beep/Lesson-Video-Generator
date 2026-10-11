"""Revision 3: two minor learning-review notes for B1 (run from repo root)."""
import io

p = 'docs/production/claude-pm/lessons/bio-m5-b01.md'
s = io.open(p, encoding='utf8').read()
pairs = [
    ("Inside each cell, DNA is packed into structures called **chromosomes**. Most cells carry two full sets of them. A gamete carries just **one set**.",
     "Inside each cell, DNA is packed into structures called **chromosomes**. In humans and many other organisms, most body cells carry two sets of chromosomes. A gamete carries just **one set**."),
    ("Visual: strawberry flower art; two gamete circles (one from each parent plant, colour-coded) travel and meet on \"join\".",
     "Visual: strawberry flower art for context, then plain schematic cells (not strawberry-specific): two gamete circles, colour-coded by parent, travel and meet on \"join\"."),
    ("Two: a single plant that has reached an island with no others of its kind. This plant can't fertilise itself, but it can grow runners.",
     "Two: a single plant that has reached an island with no others of its kind, and it can't fertilise itself."),
    ("On the island, **asexual** reproduction is the plant's only option. With no mate and no way to fertilise itself, growing runners lets it start a population on its own.",
     "On the island, **asexual** reproduction is the plant's only option. With no mate and no way to fertilise itself, it can only start a population by copying itself, for example by growing runners."),
]
for a, b in pairs:
    assert a in s, a[:60]
    s = s.replace(a, b)
io.open(p, 'w', encoding='utf8').write(s)
print('ok')
