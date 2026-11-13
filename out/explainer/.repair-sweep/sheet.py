import glob, os, sys
from PIL import Image
files = sorted(glob.glob(os.path.join(sys.argv[1], 'sheet-*.png')))[:16]
W, H = 480, 270
sheet = Image.new('RGB', (W * 4, H * 4), (255, 255, 255))
for i, p in enumerate(files):
    sheet.paste(Image.open(p).convert('RGB').resize((W, H), Image.LANCZOS), ((i % 4) * W, (i // 4) * H))
sheet.save(sys.argv[2], quality=90)
print(sys.argv[2], len(files))
