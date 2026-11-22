# Uso: python3 -I anteprima.py <foto> <uscita.jpg> "<scritta>" [x,y,l,a in px della foto]  → anteprima ≤600 px con la scritta DI LAVORO in alto (E314)
import sys
from PIL import Image, ImageDraw, ImageFont
im = Image.open(sys.argv[1]).convert('RGB')
if len(sys.argv) > 4:
    x, y, l, a = map(int, sys.argv[4].split(',')); im = im.crop((x, y, x + l, y + a))
im.thumbnail((600, 600))
f = ImageFont.load_default(size=16)
t = 'DI LAVORO · ' + sys.argv[3]
c = Image.new('RGB', (im.width, im.height + 26), (255, 235, 130)); c.paste(im, (0, 26))
ImageDraw.Draw(c).text((6, 4), t, fill=(0, 0, 0), font=f)
q = 80
while True:
    c.save(sys.argv[2], quality=q)
    import os
    if os.path.getsize(sys.argv[2]) <= 40000 or q < 30: break
    q -= 10
print(sys.argv[2], c.size, os.path.getsize(sys.argv[2]))
