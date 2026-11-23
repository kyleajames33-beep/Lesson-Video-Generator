# Counts narration per scene (lines starting "> ", bold removed), as the build parser does; fills placeholders.
# Usage: python -X utf8 scripts/hms/count.py <design.md> <holds_seconds> [--fill | --refill]
import re, sys
p = sys.argv[1]; s = open(p, encoding='utf8').read()
body = s.split('## Script and shots', 1)[1].split('## Practice question', 1)[0]
scenes = re.split(r'\n### ', body)[1:]
rows = []; tot = 0
for sc in scenes:
    name = sc.split('\n', 1)[0].strip()
    txt = ' '.join(l[2:].strip() for l in sc.split('\n') if l.startswith('> ')).replace('**', '')
    rows.append((name, len(txt))); tot += len(txt)
holds = float(sys.argv[2]) if len(sys.argv) > 2 and not sys.argv[2].startswith('--') else 0
speech = tot / 13.3; pad = 2 * len(rows); secs = round(speech + pad + holds)
table = ('Revision 1 count (%s; by script with the build parser rules: only lines starting "> ", joined with a space, bold markers removed): **%d characters**, %d scene files. At 13.3 characters per second the speech is about %d s; add %d s of padding (2 s per scene) and %d s of stated holds, settles, the two 10 s countdowns and the rest of the quiet notes hold: **about %d s**.\n\n| Scene | Characters |\n| --- | --- |\n'
         % ('23 Nov', tot, len(rows), round(speech), pad, holds, secs) + '\n'.join('| %s | %d |' % r for r in rows))
if '--refill' in sys.argv:  # reset previously filled counts, then fill again
    s = re.sub(r'Narration [\d,]+ characters \(', 'Narration NARR_CHARS characters (', s, count=1)
    s = re.sub(r'about \d+ s including holds', 'about NARR_SECS s including holds', s, count=1)
    s = re.sub(r'(## Narration length estimate\n\n)Revision 1 count.*?(\n\nReserve cuts)', r'\1NARR_TABLE\2', s, flags=re.S)
if '--fill' in sys.argv or '--refill' in sys.argv:
    s = s.replace('NARR_CHARS', '{:,}'.format(tot)).replace('NARR_SECS', str(secs)).replace('NARR_TABLE', table)
    open(p, 'w', encoding='utf8', newline='\n').write(s)
print(tot, secs); print('\n'.join('%s %d' % r for r in rows))
print('EMDASH' if '—' in s else 'no em dash')
