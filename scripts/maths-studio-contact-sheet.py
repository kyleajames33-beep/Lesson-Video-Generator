# Montage the maths studio pilot stills (16 frames) into one 4 x 4 contact sheet.
import glob, os, sys
from PIL import Image
base = os.path.join(os.path.dirname(__file__), '..', 'out', 'explainer', 'maths-studio-pilot')
files = sorted(glob.glob(os.path.join(base, 'stills', 'f*.png')))[:16]
W, H = 480, 270
sheet = Image.new('RGB', (W * 4, H * 4), (255, 255, 255))
for i, p in enumerate(files):
    im = Image.open(p).convert('RGB').resize((W, H), Image.LANCZOS)
    sheet.paste(im, ((i % 4) * W, (i // 4) * H))
out = os.path.join(base, sys.argv[1] if len(sys.argv) > 1 else 'contact-sheet.jpg')
sheet.save(out, quality=90)
print(out, len(files))
