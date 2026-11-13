# python hitsheet.py <inkDir> <normalDir> <hits.json> <outPrefix> : review sheets for ink.py hits (13 Nov 2026).
# Each tile: the hit text's neighbourhood at the peak frame, normal render on the left, text-hidden render on the
# right with the measured glyph band outlined in red. 12 tiles per sheet.
import json, os, sys
from PIL import Image, ImageDraw
ink, norm, hp, outp = sys.argv[1:5]
hits = json.load(open(hp, encoding='utf-8'))
jn = json.load(open(os.path.join(norm, 'probe.json'), encoding='utf-8'))
ji = json.load(open(os.path.join(ink, 'probe.json'), encoding='utf-8'))
sc = ji.get('scale', 0.5)
TW, TH, PAD = 460, 200, 70
def norm_frame(f):
    i = (f - jn['from']) // jn['nth']
    for n in ('f%06d.jpeg' % f, 'f%03d.jpeg' % i, 'f%04d.jpeg' % i, 'f%d.jpeg' % i, 'f%02d.jpeg' % i):
        p = os.path.join(norm, 'frames', n)
        if os.path.exists(p):
            return Image.open(p).convert('RGB')
    return None
def crop(im, b):
    x, y, w, h = b
    cx0, cy0 = max(0, x - PAD), max(0, y - PAD)
    cx1, cy1 = min(1920, x + w + PAD), min(1080, y + h + PAD)
    c = im.crop((int(cx0 * sc), int(cy0 * sc), int(cx1 * sc), int(cy1 * sc)))
    k = min(TW / c.width, TH / c.height)
    return c.resize((max(1, int(c.width * k)), max(1, int(c.height * k))), Image.LANCZOS), (cx0, cy0, k)
pages = [hits[i:i + 12] for i in range(0, len(hits), 12)]
for pi, page in enumerate(pages):
    sheet = Image.new('RGB', (2 * (2 * TW + 10), 6 * (TH + 24)), (40, 40, 40))
    dr = ImageDraw.Draw(sheet)
    for k, h in enumerate(page):
        f = h['peakFrame']
        X, Y = (k % 2) * (2 * TW + 10), (k // 2) * (TH + 24)
        imI = Image.open(os.path.join(ink, 'frames', 'f%06d.png' % f)).convert('RGB')
        imN = norm_frame(f)
        ci, (cx0, cy0, kk) = crop(imI, h['box'])
        d2 = ImageDraw.Draw(ci)
        x, y, w, hh = h['box']
        d2.rectangle([((x + 2) * sc - cx0 * sc) * kk, ((y + 0.18 * hh) * sc - cy0 * sc) * kk, ((x + w - 2) * sc - cx0 * sc) * kk, ((y + hh - 0.14 * hh) * sc - cy0 * sc) * kk], outline=(255, 0, 0))
        if imN is not None:
            cn, _ = crop(imN, h['box'])
            sheet.paste(cn, (X, Y + 24))
        sheet.paste(ci, (X + TW, Y + 24))
        dr.text((X + 4, Y + 4), '#%d %.1f-%.1fs %s %dpx "%s"' % (pi * 12 + k, h['from'] / 30, h['to'] / 30, h['scene'], h['px'], h['text'][:40]), fill=(255, 255, 0))
    p = '%s-%d.jpg' % (outp, pi)
    sheet.save(p, quality=88)
    print(p)
