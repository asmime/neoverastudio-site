#!/usr/bin/env bash
# Publie une maquette : build/ → maquettes/<nom>/ du dépôt, ajoute le suivi des visites et vérifie le noindex, puis push
# (le webhook GitHub → OVH met en ligne en moins d'une minute). Vérifier ensuite https://maquettes.neoverastudio.fr/<nom>/?moi
# Usage : publier.sh <build_dir> <nom-du-prospect> ["message de commit"]
set -e; B=$1; N=$2; MSG=${3:-"Maquette $N"}; R=/home/claude/neoverastudio-site; O=$(cd "$(dirname "$0")" && pwd)
[ -d "$R/.git" ] || git clone -q https://github.com/asmime/neoverastudio-site.git "$R"
cd "$R"; git pull -q --rebase origin main || true
rm -rf "maquettes/$N"; mkdir -p "maquettes/$N"; cp -r "$B"/. "maquettes/$N/"
python3 - "maquettes/$N/index.html" "$O/suivi-visites.html" <<'PY'
import sys; f, sn = sys.argv[1], open(sys.argv[2]).read(); s = open(f).read()
if 'id="nv-track"' not in s: i = s.rfind('</body>'); s = s[:i] + sn + s[i:]
assert 'noindex' in s, 'meta robots noindex manquant'
open(f, 'w').write(s); print('suivi + noindex OK')
PY
git add -A "maquettes/$N"; git commit -qm "$MSG

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>" ; git push -q origin HEAD; git log --oneline -1
echo "En ligne d'ici une minute : https://maquettes.neoverastudio.fr/$N/"
