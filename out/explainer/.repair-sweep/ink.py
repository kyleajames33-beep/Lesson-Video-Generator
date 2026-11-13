# Line-through-text check (13 Nov 2026).
#   python ink.py <inkSweepDir> [--normal <normalSweepDir>] [--text <textOnlySweepDir>] [--px 6] [--touch 4] [--diff 46] [--json out.json]
# With --text as well, glyph ink comes from the text-only render, and graphic pixels lying under a glyph stroke are
# not counted (only graphic visible beside the glyphs, which is what reads as a line through a label).
# With --normal (the plain sweep of the same lesson, same nth/scale) the check matches what a viewer sees: text paint is
# where the normal and text-hidden frames differ; glyph ink is text paint that differs from the background (a paper
# halo does not) where no graphic is. A hit needs --touch or more graphic pixels that are still visibly off-background
# in the normal frame (a halo that fully hides a line removes it; one that only lightens it does not) within one
# sweep pixel (2 px full size) of glyph ink. Without --normal it uses the box count (--px).
# Reads probe.json + frames/ from `sweep.mjs <id> --ink` (every glyph hidden, graphics kept). For each visible text
# run (opacity >= 0.6) it takes the text's DOM box, trims it to the glyph band (top 18 %, bottom 14 %, 2 px sides),
# finds the local background as the most common colour in that band (card fill or paper), and counts pixels that
# differ from it by more than --diff on any channel. A count of --px or more (at the sweep scale) is a hit: some
# stroke, curve, axis, leader, border, plate or card edge passes through where the label's glyphs sit.
# Hits are grouped into time runs per text, like analyse.mjs.
import io, json, os, re, sys
import numpy as np
from PIL import Image, ImageFilter
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")

args = sys.argv[1:]
def flag(n, d):
    return type(d)(args[args.index('--' + n) + 1]) if '--' + n in args else d
d = args[0]
PX, DIFF, TOUCH = flag('px', 6), flag('diff', 46), flag('touch', 4)
ND = flag('normal', '')
TD = flag('text', '')   # optional text-only sweep (sweep.mjs --textonly): exact glyph mask
jn = json.load(open(os.path.join(ND, 'probe.json'), encoding='utf-8')) if ND else None
def normal_frame(f):
    i = (f - jn['from']) // jn['nth']
    for n in ('f%06d.jpeg' % f, 'f%03d.jpeg' % i, 'f%04d.jpeg' % i, 'f%d.jpeg' % i, 'f%02d.jpeg' % i):
        q = os.path.join(ND, 'frames', n)
        if os.path.exists(q):
            return np.asarray(Image.open(q).convert('RGB')).astype(np.int16)
    return None
TOP, BOT, SIDE = 0.18, 0.14, 2
j = json.load(open(os.path.join(d, 'probe.json'), encoding='utf-8'))
scale = j.get('scale', 0.5)
starts, t = [], 0
for s in j['scenes']:
    starts.append(t); t += s['d']
def scene_of(f):
    i = max(k for k, s in enumerate(starts) if f >= s)
    return '%s@%d' % (j['scenes'][i]['id'], f - starts[i])
files = {int(re.sub(r'\D', '', n)): n for n in os.listdir(os.path.join(d, 'frames'))}
frames = sorted(int(k) for k in j['probes'] if int(k) in files)
missing = [int(k) for k in j['probes'] if int(k) not in files]
if missing or len(frames) != len(files):
    print('WARNING: %d probes without frames, %d frames without probes' % (len(missing), len(files) - len(frames)))
hits = {}
for f in frames:
    fname = files[f]
    p = j['probes'][str(f)]
    if p.get('error'):
        print('probe error at', f, p['error']); continue
    im = np.asarray(Image.open(os.path.join(d, 'frames', fname)).convert('RGB')).astype(np.int16)
    H, W = im.shape[:2]
    nm = normal_frame(f) if jn else None
    if nm is not None and nm.shape != im.shape:
        nm = None
    tm = None
    if TD:
        tp = os.path.join(TD, 'frames', 'f%06d.png' % f)
        if os.path.exists(tp):
            tm = np.asarray(Image.open(tp).convert('RGB')).astype(np.int16)
            if tm.shape != im.shape:
                tm = None
    covered = None
    if nm is not None:
        covered = np.abs(nm - im).max(axis=2) > 40   # text (glyph or halo) painted here in the normal frame
    for tx in p['texts']:
        if tx['op'] < 0.6:
            continue
        x, y, w, h = tx['b']
        if w < 6 or h < 10:
            continue
        x0, x1 = (x + SIDE) * scale, (x + w - SIDE) * scale
        y0, y1 = (y + TOP * h) * scale, (y + h - BOT * h) * scale
        x0, y0 = max(0, int(round(x0))), max(0, int(round(y0)))
        x1, y1 = min(W, int(round(x1))), min(H, int(round(y1)))
        if x1 - x0 < 2 or y1 - y0 < 2:
            continue
        c3 = im[y0:y1, x0:x1]
        c = c3.reshape(-1, 3)
        q = (c // 12)
        keys = q[:, 0] * 10000 + q[:, 1] * 100 + q[:, 2]
        vals, counts = np.unique(keys, return_counts=True)
        bg = c[keys == vals[counts.argmax()]].mean(axis=0)
        line = np.abs(c3 - bg).max(axis=2) > DIFF
        n = int(line.sum())
        col = c3[line].mean(axis=0) if n else bg
        if covered is not None:
            cov = covered[y0:y1, x0:x1]
            shown = np.abs(nm[y0:y1, x0:x1] - bg).max(axis=2) > DIFF   # not background in the normal frame
            core = cov & shown & ~line   # glyph ink (text paint where no graphic is)
            near = np.asarray(Image.fromarray(core.astype(np.uint8) * 255).filter(ImageFilter.MaxFilter(3))) > 0
            if tm is not None:
                t3 = tm[y0:y1, x0:x1]
                glyph = np.abs(t3 - np.median(t3.reshape(-1, 3), axis=0)).max(axis=2) > DIFF   # glyph ink (halo is near white)
                near = np.asarray(Image.fromarray(glyph.astype(np.uint8) * 255).filter(ImageFilter.MaxFilter(3))) > 0
                hitm = line & shown & ~glyph & near   # visible graphic beside glyph ink, not hidden under a stroke
            else:
                hitm = line & shown & near   # graphic still visible (a halo may lighten it) touching glyph ink
            n = int(hitm.sum())   # graphic still visible and touching glyph ink
            col = c3[hitm].mean(axis=0) if n else bg
        if n >= (TOUCH if covered is not None else PX):
            key = (tx['t'], tuple(tx['b'][2:]))
            r_, g_, b_ = (int(v) for v in col)
            tag = 'RED-STRIKE?' if r_ > 140 and g_ < 110 and b_ < 110 and r_ - g_ > 70 else ''
            hits.setdefault(key, []).append((f, n, tx['b'], tuple(int(v) for v in bg), (r_, g_, b_), tag))
out = []
for (text, _), lst in hits.items():
    lst.sort()
    runs = []
    for item in lst:
        if runs and item[0] - runs[-1][-1][0] <= j['nth']:
            runs[-1].append(item)
        else:
            runs.append([item])
    for r in runs:
        peak = max(r, key=lambda i: i[1])
        out.append({'from': r[0][0], 'to': r[-1][0], 'scene': scene_of(r[0][0]), 'text': text, 'box': peak[2], 'peakFrame': peak[0], 'px': peak[1], 'bg': peak[3], 'ink': peak[4], 'tag': peak[5]})
out.sort(key=lambda o: o['from'])
for o in out:
    print('%6.1f-%6.1fs [%s] ink %3d px @f%d through "%s" box %s ink %s %s' % (o['from'] / 30, o['to'] / 30, o['scene'], o['px'], o['peakFrame'], o['text'], o['box'], o['ink'], o['tag']))
print('%s: %d line-through-text runs over %d frames' % (j['id'], len(out), len(frames)))
if '--json' in args:
    json.dump(out, open(flag('json', ''), 'w', encoding='utf-8'), indent=1)
