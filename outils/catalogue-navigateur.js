// À exécuter dans le navigateur intégré, SUR LE SITE DU PROSPECT (même origine).
// Récupère TOUT le catalogue (WooCommerce Store API ou Shopify products.json), toutes les catégories,
// et une vignette JPEG légère par produit (max 640 px). Résultat : window.__ALL (chaîne JSON).
// Puis lire par morceaux : 'C00:'+__ALL.slice(0,900000)+':END' , 'C01:'+__ALL.slice(900000,1800000)+':END' ...
// (pas de remplissage '#' sur le dernier morceau).
(async () => {
  const W = 640, Q = 0.72;
  const toJpg = async (url) => {
    try {
      const b = await fetch(url, { credentials: 'omit' }).then(r => r.blob());
      const bm = await createImageBitmap(b);
      const k = Math.min(1, W / Math.max(bm.width, bm.height));
      const c = Object.assign(document.createElement('canvas'), { width: Math.round(bm.width * k), height: Math.round(bm.height * k) });
      const x = c.getContext('2d'); x.fillStyle = '#fff'; x.fillRect(0, 0, c.width, c.height); x.drawImage(bm, 0, 0, c.width, c.height);
      return c.toDataURL('image/jpeg', Q).split(',')[1];
    } catch (e) { return null; }
  };
  const strip = h => { const d = document.createElement('div'); d.innerHTML = h || ''; return d.textContent.replace(/\s+/g, ' ').trim(); };
  let items = [], cats = [], kind = '';
  const woo = await fetch('/wp-json/wc/store/v1/products?per_page=1').then(r => r.ok).catch(() => false);
  if (woo) {
    kind = 'woocommerce';
    for (let p = 1; p < 50; p++) { const r = await fetch(`/wp-json/wc/store/v1/products?per_page=100&page=${p}`).then(r => r.json()); if (!r.length) break; items = items.concat(r); }
    cats = (await fetch('/wp-json/wc/store/v1/products/categories?per_page=100').then(r => r.json())).map(c => ({ id: c.id, nom: strip(c.name), parent: c.parent, nb: c.count, lien: c.permalink }));
    items = items.map(p => ({ id: p.id, nom: strip(p.name), prix: +p.prices.price / 10 ** p.prices.currency_minor_unit, prix_barre: p.on_sale ? +p.prices.regular_price / 10 ** p.prices.currency_minor_unit : null,
      cat: p.categories.map(c => strip(c.name)), court: strip(p.short_description), desc: strip(p.description).slice(0, 1500), lien: p.permalink,
      variantes: (p.attributes || []).map(a => a.name + ': ' + a.terms.map(t => t.name).join(', ')), images: p.images.map(i => i.src) }));
  } else {
    kind = 'shopify';
    for (let p = 1; p < 50; p++) { const r = await fetch(`/products.json?limit=250&page=${p}`).then(r => r.json()).catch(() => ({ products: [] })); if (!r.products.length) break; items = items.concat(r.products); }
    const cj = await fetch('/collections.json?limit=250').then(r => r.json()).catch(() => ({ collections: [] }));
    cats = cj.collections.map(c => ({ id: c.id, nom: c.title, lien: '/collections/' + c.handle, nb: c.products_count }));
    items = items.map(p => ({ id: p.id, nom: p.title, prix: +p.variants[0].price, prix_barre: p.variants[0].compare_at_price ? +p.variants[0].compare_at_price : null,
      cat: [p.product_type, ...(p.tags || [])].filter(Boolean), court: '', desc: strip(p.body_html).slice(0, 1500), lien: '/products/' + p.handle,
      variantes: p.variants.length > 1 ? p.variants.map(v => v.title + ' ' + v.price) : [], images: p.images.map(i => i.src) }));
  }
  let n = 0;
  for (const it of items) { it.img = it.images[0] ? await toJpg(it.images[0]) : null; if (++n % 25 === 0) console.log('images', n, '/', items.length); }
  const menu = [...document.querySelectorAll('header a, nav a, footer a')].map(a => [strip(a.textContent), a.getAttribute('href')]).filter((v, i, s) => v[0] && s.findIndex(w => w[0] === v[0] && w[1] === v[1]) === i);
  window.__ALL = JSON.stringify({ site: location.origin, plateforme: kind, date: new Date().toISOString(), produits: items, categories: cats, menu });
  return `${kind} : ${items.length} produits, ${cats.length} catégories, ${menu.length} liens de menu, ${window.__ALL.length} caractères`;
})();
