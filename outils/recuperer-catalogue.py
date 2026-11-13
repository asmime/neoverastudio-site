#!/usr/bin/env python3
"""Reconstitue le catalogue rapatrié par catalogue-navigateur.js.
Usage : recuperer-catalogue.py <dossier_ou_fichiers_resultats...> --out <dossier_prospect>
Chaque fichier = un résultat d'outil javascript contenant 'Cnn:...:END' (JSON brut du résultat, ou texte).
Produit : <out>/catalogue.json (sans images) et <out>/img/p000.jpg ... (une vignette par produit), + inventaire.md."""
import sys, json, re, base64, os, glob, argparse
ap = argparse.ArgumentParser(); ap.add_argument('src', nargs='+'); ap.add_argument('--out', required=True); a = ap.parse_args()
files = []
for s in a.src: files += sorted(glob.glob(os.path.join(s, '*'))) if os.path.isdir(s) else [s]
parts = {}
for f in files:
    raw = open(f, encoding='utf-8', errors='ignore').read()
    try:
        t = json.loads(raw); t = t[0]['text'] if isinstance(t, list) else t
        t = t.split('\n\n(captured')[0]; t = json.loads(t) if t.startswith('"') else t
    except Exception: t = raw
    for m in re.finditer(r'C(\d\d):(.*?):END', t, re.S): parts[int(m.group(1))] = m.group(2)
assert parts, 'aucun morceau Cnn trouvé'
missing = [i for i in range(max(parts) + 1) if i not in parts]; assert not missing, f'morceaux manquants : {missing}'
data = json.loads(''.join(parts[i] for i in sorted(parts)))
os.makedirs(os.path.join(a.out, 'img'), exist_ok=True)
for i, p in enumerate(data['produits']):
    p['ref'] = f'p{i:03d}'
    if p.get('img'): open(os.path.join(a.out, 'img', p['ref'] + '.jpg'), 'wb').write(base64.b64decode(p['img']))
    p.pop('img', None)
json.dump(data, open(os.path.join(a.out, 'catalogue.json'), 'w'), ensure_ascii=False, indent=1)
from collections import Counter
cc = Counter(c for p in data['produits'] for c in p['cat'])
inv = [f"# Inventaire — {data['site']} ({data['plateforme']}, {data['date'][:10]})", '', f"- Produits : {len(data['produits'])}", f"- Catégories : {len(data['categories'])}", '', '## Catégories (nb produits)']
inv += [f"- {c['nom']} ({c.get('nb', cc.get(c['nom'], '?'))})" for c in data['categories']]
inv += ['', '## Liens du menu et du pied de page'] + [f'- {t} → {h}' for t, h in data['menu']]
open(os.path.join(a.out, 'inventaire.md'), 'w').write('\n'.join(inv) + '\n')
print(f"{len(data['produits'])} produits, {len(data['categories'])} catégories, {sum(1 for _ in glob.glob(os.path.join(a.out,'img','p*.jpg')))} vignettes -> {a.out}")
