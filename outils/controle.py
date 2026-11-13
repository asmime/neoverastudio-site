#!/usr/bin/env python3
"""Contrôle qualité d'une maquette (fichier local ou URL).
Usage : controle.py <index.html|url> [--out /tmp/ctrl] [--vues home,shop,house] [--langs fr,en,es,de,it,zh] [--inventaire inventaire.md]
Vérifie : erreurs JS, images cassées, débordement horizontal (1440/820/390), clés i18n manquantes (data-i absentes de I,
traductions vides), liens vides, présence du suivi et du noindex ; prend des captures ; compare au besoin avec l'inventaire
(chaque catégorie de l'inventaire doit apparaître dans le texte de la maquette)."""
import asyncio, argparse, json, os, re, sys
from playwright.async_api import async_playwright
ap = argparse.ArgumentParser(); ap.add_argument('src'); ap.add_argument('--out', default='/tmp/ctrl')
ap.add_argument('--vues', default=''); ap.add_argument('--langs', default='fr,en,es,de,it,zh'); ap.add_argument('--inventaire', default='')
a = ap.parse_args(); os.makedirs(a.out, exist_ok=True)
url = a.src if re.match(r'https?://', a.src) else 'file://' + os.path.abspath(a.src)
if url.startswith('http') and 'moi' not in url: url += ('&' if '?' in url else '?') + 'moi'
rep = {'erreurs_js': [], 'images_cassees': {}, 'debordement': {}, 'i18n': {}, 'divers': {}}
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch()
        for name, w, h in [('ordinateur', 1440, 900), ('tablette', 820, 1180), ('mobile', 390, 844)]:
            pg = await b.new_page(viewport={'width': w, 'height': h})
            pg.on('pageerror', lambda e: rep['erreurs_js'].append(str(e)[:200]))
            await pg.goto(url); await pg.wait_for_timeout(1800)
            await pg.screenshot(path=f'{a.out}/{name}.png', full_page=True)
            rep['debordement'][name] = await pg.evaluate("document.documentElement.scrollWidth - innerWidth")
            rep['images_cassees'][name] = await pg.evaluate("[...document.images].filter(i=>i.complete&&i.src&&!i.naturalWidth).map(i=>i.src.slice(0,80))")
            if name == 'ordinateur':
                for v in [x for x in a.vues.split(',') if x]:
                    try:
                        await pg.evaluate(f"go({json.dumps(v)})"); await pg.wait_for_timeout(500)
                        await pg.screenshot(path=f'{a.out}/vue-{v}.png', full_page=True)
                        rep['images_cassees'][f'vue {v}'] = await pg.evaluate("[...document.images].filter(i=>i.complete&&i.src&&!i.naturalWidth).length")
                    except Exception as e: rep['erreurs_js'].append(f'go({v}) : {e}'[:200])
                rep['i18n'] = await pg.evaluate("""(langs)=>{const o={};if(typeof I!=='object')return {absent:'pas d objet I'};
                  const keys=[...new Set([...document.querySelectorAll('[data-i],[data-ip]')].map(e=>e.dataset.i||e.dataset.ip))];
                  o.cles_absentes=keys.filter(k=>!I[k]);o.trad_vides=[];for(const[k,v]of Object.entries(I))for(const l of langs)if(v&&typeof v==='object'&&!v[l])o.trad_vides.push(k+':'+l);
                  if(typeof PRODUCTS!=='undefined'){o.produits=PRODUCTS.length;o.produits_sans_trad=PRODUCTS.filter(p=>p.n&&langs.some(l=>!p.n[l])).map(p=>p.id)}return o}""", a.langs.split(','))
                html = await pg.content(); txt = (await pg.evaluate("document.body.innerText")).lower()
                rep['divers'] = {'suivi_visites': 'id="nv-track"' in html, 'noindex': 'noindex' in html,
                                 'liens_vides': await pg.evaluate("[...document.querySelectorAll('a')].filter(a=>!a.getAttribute('href')&&!a.dataset.go&&!a.onclick).length"),
                                 'titre': await pg.title()}
                if a.inventaire:
                    alltxt = txt + ' ' + json.dumps(await pg.evaluate("typeof PRODUCTS!=='undefined'?PRODUCTS:[]"), ensure_ascii=False).lower()
                    cats = re.findall(r'^- (.+?) \(', open(a.inventaire).read(), re.M)
                    rep['categories_absentes'] = [c for c in cats if c.lower().replace('&amp;', '&') not in alltxt]
            await pg.close()
        await b.close()
asyncio.run(main())
ok = not rep['erreurs_js'] and not any(rep['images_cassees'].values()) and all(v <= 1 for v in rep['debordement'].values()) \
     and not rep['i18n'].get('cles_absentes') and not rep['i18n'].get('trad_vides') and not rep.get('categories_absentes')
rep['VERDICT'] = 'OK' if ok else 'À CORRIGER'
print(json.dumps(rep, ensure_ascii=False, indent=1)); print('captures :', a.out)
