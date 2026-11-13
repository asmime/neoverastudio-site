# Boîte à outils de refonte Neovera Studio

Dossier non accessible depuis le web (`.htaccess` : accès refusé). À utiliser à chaque refonte, au lieu de réécrire les scripts.

| Étape | Outil | Usage |
|---|---|---|
| Inventaire et catalogue | `catalogue-navigateur.js` | Coller dans le navigateur intégré, sur le site du prospect. Récupère tout le catalogue WooCommerce ou Shopify, les catégories, le menu et une vignette JPEG légère (640 px) par produit, dans `window.__ALL`. Lire ensuite le résultat par morceaux `Cnn:…:END` de 900 000 caractères. |
| Reconstitution | `recuperer-catalogue.py <résultats…> --out <dossier>` | Produit `catalogue.json`, `img/p000.jpg…` et `inventaire.md`, qui sert de base au contrôle d'intégralité. |
| Vidéo gratuite | `video-kenburns.sh sortie.mp4 photo1 photo2 …` | Vidéo d'ouverture « Ken Burns » 1600x900 avec fondus, plus une image de secours `.jpg`. |
| Contrôle qualité | `controle.py <index.html ou URL> --vues shop,house --inventaire inventaire.md` | Vérifie les erreurs JS, les images cassées, les débordements (ordinateur, tablette, mobile), les traductions, le suivi et le noindex, et les catégories absentes par rapport à l'inventaire. Prend aussi les captures. Verdict OK ou À CORRIGER. |
| Fichier autonome | `autonome.py <build> <sortie.html>` | Intègre les images (convention `const img=id=>'img/'+id+'.jpg';`). Alerte au-delà de 25 Mo. |
| Image du mail | `avant-apres.py avant.png apres.png sortie.jpg --nom "Prospect"` | Image « Aujourd'hui / Demain ». |
| Publication | `publier.sh <build> <nom>` | Copie dans `maquettes/<nom>/`, ajoute le suivi des visites, vérifie le noindex et pousse sur GitHub. Le webhook met en ligne chez OVH en moins d'une minute. Vérifier ensuite `https://maquettes.neoverastudio.fr/<nom>/?moi`. |
| Envoi du mail | `envoi-mail.js` | Envoie un mail depuis contact@neoverastudio.fr par le webmail OVH, à exécuter dans le navigateur intégré sur https://mail.ovh.net/modern/. L'image avant/après est intégrée au corps du mail, et achimime et as.asgraal sont en copie cachée. Si la session a expiré, on demande la connexion à l'utilisateur, sans jamais saisir de mot de passe. |
| Suivi des visites | `suivi-visites.html` | Script de mesure (ajouté automatiquement par `publier.sh`). Les statistiques sont décrites dans le doc projet `claude/outils-automatisation.md`. |

Pour tout ouvrir ou vérifier soi-même, toujours ajouter `?moi` à l'adresse, afin de ne pas compter ses propres visites.
