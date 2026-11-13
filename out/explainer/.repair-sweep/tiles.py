# python tiles.py <sweepdir> <out.jpg> <cols> <rows> <tileW> f1 f2 ... (frame numbers; uses probe.json from/nth)
import sys, json, os
from PIL import Image, ImageDraw
d, out, cols, rows, tw = sys.argv[1], sys.argv[2], int(sys.argv[3]), int(sys.argv[4]), int(sys.argv[5])
j = json.load(open(os.path.join(d, 'probe.json'), encoding='utf-8'))
frames = [int(x) for x in sys.argv[6:]]
th = tw * 9 // 16
sheet = Image.new('RGB', (cols * tw, rows * th), (255, 255, 255))
dr = ImageDraw.Draw(sheet)
n = (j['to'] - j['from']) // j['nth'] + 1
w = len(str(n - 1)) if n > 1 else 1
for k, f in enumerate(frames[:cols * rows]):
    i = (f - j['from']) // j['nth']
    p = os.path.join(d, 'frames', 'f%06d.jpeg' % f)
    if not os.path.exists(p):
        p = os.path.join(d, 'frames', 'f%0*d.jpeg' % (max(2, w), i))
    if not os.path.exists(p):
        p = os.path.join(d, 'frames', 'f%d.jpeg' % i)
    im = Image.open(p).convert('RGB').resize((tw, th), Image.LANCZOS)
    x, y = (k % cols) * tw, (k // cols) * th
    sheet.paste(im, (x, y))
    dr.rectangle([x, y, x + 70, y + 18], fill=(0, 0, 0)); dr.text((x + 3, y + 3), '%.0fs' % (f / 30), fill=(255, 255, 0))
    dr.rectangle([x, y, x + tw - 1, y + th - 1], outline=(120, 120, 120))
sheet.save(out, quality=88)
print(out)
