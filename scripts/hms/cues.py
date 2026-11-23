# Usage: python -X utf8 scripts/hms/cues.py docs/production/claude-pm/lessons/hms-*.md
# Cue checker: every 'on "..."' cue in a scene's Visual text must appear verbatim (case-sensitive) in that scene's narration, in spoken order.
import re, sys
for p in sys.argv[1:]:
    s = open(p, encoding='utf8').read()
    body = s.split('## Script and shots', 1)[1].split('## Practice question', 1)[0]
    bad = 0
    for sc in re.split(r'\n### ', body)[1:]:
        name = sc.split('\n', 1)[0].strip()
        nar = ' '.join(l[2:].strip() for l in sc.split('\n') if l.startswith('> ')).replace('**', '')
        vis = '\n'.join(l for l in sc.split('\n') if not l.startswith('> '))
        cues = re.findall(r'\b[Oo]n "([^"]+)"', vis)
        pos = 0
        for c in cues:
            i = nar.find(c)
            if i < 0:
                print(p, '|', name, '| MISSING:', c); bad += 1
            elif i < pos:
                j = nar.find(c, pos)
                if j < 0:
                    print(p, '|', name, '| ORDER:', c); bad += 1
                else:
                    pos = j
            else:
                pos = i
        # bold terms in narration need a cue
        for b in re.findall(r'\*\*([^*]+)\*\*', ' '.join(l for l in sc.split('\n') if l.startswith('> '))):
            if b not in cues:
                print(p, '|', name, '| BOLD WITHOUT CUE:', b); bad += 1
    if '—' in s: print(p, 'EM DASH'); bad += 1
    if '⁡' in s: print(p, 'U+2061'); bad += 1
    print(p, 'findings:', bad)
