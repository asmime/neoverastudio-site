#!/usr/bin/env python3
"""Fabrique le fichier HTML autonome (images intégrées) à partir d'un dossier build/ (index.html + img/).
Usage : autonome.py <build_dir> <sortie.html>
Convention des maquettes : `const img=id=>'img/'+id+'.jpg';` (remplacé par une table __IMG) ; toute autre référence
littérale 'img/fichier.ext' est remplacée par son data URI. Avertit si le fichier dépasse 25 Mo."""
import sys, os, re, base64, json, mimetypes
b, out = sys.argv[1], sys.argv[2]; s = open(os.path.join(b, 'index.html'), encoding='utf-8').read()
du = lambda f: f"data:{mimetypes.guess_type(f)[0] or 'application/octet-stream'};base64," + base64.b64encode(open(os.path.join(b, 'img', f), 'rb').read()).decode()
files = sorted(os.listdir(os.path.join(b, 'img'))) if os.path.isdir(os.path.join(b, 'img')) else []
pat = re.compile(r"const img\s*=\s*id\s*=>\s*'img/'\s*\+\s*id\s*\+\s*'\.jpg'\s*;")
if pat.search(s):
    M = {f[:-4]: du(f) for f in files if f.endswith('.jpg') and not f.startswith(('hero', 'a'))}
    s = pat.sub(lambda m: 'const __IMG=' + json.dumps(M) + ';const img=id=>__IMG[id];', s, 1)
    s = re.sub(r"'img/'\s*\+\s*(\w+)\s*\+\s*'b\.jpg'", r"__IMG[\1+'b']", s)
for f in files: s = s.replace('img/' + f, du(f))
rest = re.findall(r"img/[\w.-]+\.(?:jpg|png|webp|mp4)", s)
open(out, 'w', encoding='utf-8').write(s)
mb = os.path.getsize(out) / 1e6
print(f'{out} : {mb:.1f} Mo' + (' — ATTENTION, plus de 25 Mo' if mb > 25 else '') + (f' — références non intégrées : {sorted(set(rest))[:8]}' if rest else ''))
