#!/usr/bin/env python3
"""Image « Aujourd'hui / Demain » pour le mail.
Usage : avant-apres.py <avant.png> <apres.png> <sortie.jpg> [--nom "Nom du prospect"]
Chaque capture est recadrée à 1280x960 (haut de page), posée côte à côte avec les étiquettes."""
import sys, argparse
from PIL import Image, ImageDraw, ImageFont
ap = argparse.ArgumentParser(); ap.add_argument('avant'); ap.add_argument('apres'); ap.add_argument('out'); ap.add_argument('--nom', default=''); a = ap.parse_args()
W, H, G, T = 1280, 960, 40, 110
def prep(f):
    im = Image.open(f).convert('RGB'); k = W / im.width; im = im.resize((W, int(im.height * k)), Image.LANCZOS)
    return im.crop((0, 0, W, min(H, im.height))).resize((W, H)) if im.height >= H else im
def font(sz, bold=False):
    for p in ['/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf' if bold else '/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf']:
        try: return ImageFont.truetype(p, sz)
        except Exception: pass
    return ImageFont.load_default()
c = Image.new('RGB', (W * 2 + G * 3, H + T + G), '#F4F1EA'); d = ImageDraw.Draw(c)
for i, (f, lab, col) in enumerate([(a.avant, "Aujourd'hui", '#8A8A8A'), (a.apres, 'Demain', '#1E3A2B')]):
    x = G + i * (W + G); im = prep(f); c.paste(im, (x, T)); d.rectangle([x - 1, T - 1, x + W, T + im.height], outline='#D9D4C7', width=2)
    d.text((x, 34), lab.upper(), font=font(44, True), fill=col)
if a.nom: d.text((c.width - G, 44), a.nom + ' · Neovera Studio', font=font(26), fill='#8A8A8A', anchor='ra')
c.save(a.out, quality=88); print(a.out, c.size)
