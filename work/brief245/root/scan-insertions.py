# Root (21 Nov): find voiced scenes whose recognition review shows many inserted words (unscripted speech).
import re, sys
from pathlib import Path
txt = Path('docs/production/claude-pm/status.md').read_text(encoding='utf8')
for line in txt.splitlines():
    m = re.match(r'Google recognition review (\S+) ', line)
    if not m: continue
    lesson = m.group(1)
    for sm in re.finditer(r'([a-z0-9-]+): ((?:"[^"]*" heard as "[^"]*"(?:, )?)+)', line):
        ins = len(re.findall(r'"" heard as', sm.group(2)))
        if ins >= 6: print(lesson, sm.group(1), 'inserted words:', ins)
