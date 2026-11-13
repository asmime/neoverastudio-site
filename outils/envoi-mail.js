// Envoi d'un mail Neovera depuis contact@neoverastudio.fr (webmail OVH Zimbra).
// À exécuter dans le navigateur intégré, sur https://mail.ovh.net/modern/ (session ouverte par l'utilisateur ;
// si la session a expiré, NE JAMAIS saisir de mot de passe : demander la connexion et attendre).
// Usage : définir M puis exécuter ce script. L'image avant/après doit être en ligne sur
// https://maquettes.neoverastudio.fr/<nom>/avant-apres.jpg (maquettes/.htaccess autorise mail.ovh.net).
// const M = { to:['prospect@exemple.fr'], bcc:['achimime@gmail.com','as.asgraal@gmail.com'], subject:'…',
//   html:'<p>…</p><p><img src="cid:avantapres@neovera" alt="Aujourd’hui / Demain" style="max-width:100%"></p>…',
//   text:'version texte…', image:'https://maquettes.neoverastudio.fr/<nom>/avant-apres.jpg', replyTo:null /* id Zimbra du message auquel on répond */ };
(async (M) => {
  let tok = localStorage.getItem('csrfToken'); try { tok = JSON.parse(tok); } catch (e) {}
  const H = { 'X-Zimbra-Csrf-Token': tok };
  const call = async (name, req) => (await fetch('/service/soap/' + name, { method: 'POST', credentials: 'include',
    headers: { ...H, 'content-type': 'application/json' },
    body: JSON.stringify({ Header: { context: { _jsns: 'urn:zimbra', csrfToken: tok } }, Body: { [name]: req } }) })).json();
  const who = await call('GetInfoRequest', { _jsns: 'urn:zimbraAccount', sections: 'mbox' });
  if (!who.Body.GetInfoResponse || who.Body.GetInfoResponse.name !== 'contact@neoverastudio.fr') return 'ERREUR : session webmail absente ou mauvais compte — demander la connexion';
  let rel = [{ ct: 'text/html', content: M.html }];
  if (M.image) {
    const blob = await fetch(M.image, { mode: 'cors' }).then(r => { if (!r.ok) throw new Error('image ' + r.status); return r.blob(); });
    const up = await fetch('/service/upload?fmt=raw,extended', { method: 'POST', credentials: 'include',
      headers: { ...H, 'Content-Type': 'image/jpeg', 'Content-Disposition': 'attachment; filename="avant-apres.jpg"' }, body: blob }).then(r => r.text());
    const aid = (up.match(/"aid"\s*:\s*"([^"]+)"/) || [])[1]; if (!aid) return 'ERREUR upload : ' + up.slice(0, 200);
    rel.push({ ci: '<avantapres@neovera>', attach: { aid } });
  }
  const e = [{ t: 'f', a: 'contact@neoverastudio.fr', p: 'Neovera Studio' }, ...M.to.map(a => ({ t: 't', a })), ...(M.bcc || []).map(a => ({ t: 'b', a }))];
  const m = { e, su: M.subject, mp: [{ ct: 'multipart/alternative', mp: [{ ct: 'text/plain', content: M.text }, { ct: 'multipart/related', mp: rel }] }] };
  if (M.replyTo) { m.origid = M.replyTo; m.rt = 'r'; }
  const r = await call('SendMsgRequest', { _jsns: 'urn:zimbraMail', m });
  return r.Body.SendMsgResponse ? 'ENVOYÉ id ' + r.Body.SendMsgResponse.m[0].id + ' à ' + M.to.join(', ') : 'ERREUR : ' + JSON.stringify(r.Body).slice(0, 300);
})(M);
