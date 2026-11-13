#!/usr/bin/env bash
# Vidéo d'ouverture gratuite (effet Ken Burns) à partir de photos réelles du prospect.
# Usage : video-kenburns.sh sortie.mp4 photo1.jpg photo2.jpg [...]   (3 à 6 photos ; ~4 s chacune, fondus 0,8 s)
set -e; out=$1; shift; n=$#; i=0; tmp=$(mktemp -d); list=()
for f in "$@"; do
  z=$([ $((i%2)) -eq 0 ] && echo "min(zoom+0.0009,1.12)" || echo "if(eq(on,1),1.12,max(zoom-0.0009,1))")
  ffmpeg -loglevel error -y -loop 1 -i "$f" -vf "scale=2400:-2,zoompan=z='$z':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d=120:s=1600x900:fps=30,format=yuv420p" -t 4 -c:v libx264 -preset veryfast -crf 24 "$tmp/c$i.mp4"
  list+=("$tmp/c$i.mp4"); i=$((i+1)); done
if [ $n -eq 1 ]; then cp "${list[0]}" "$out"; else
  inputs=""; for c in "${list[@]}"; do inputs="$inputs -i $c"; done
  fc=""; prev="[0:v]"; off=3.2
  for ((k=1;k<n;k++)); do fc="$fc$prev[$k:v]xfade=transition=fade:duration=0.8:offset=$off[v$k];"; prev="[v$k]"; off=$(echo "$off+3.2" | bc); done
  ffmpeg -loglevel error -y $inputs -filter_complex "${fc%;}" -map "$prev" -c:v libx264 -preset veryfast -crf 26 -movflags +faststart -an "$out"; fi
ffmpeg -loglevel error -y -i "$out" -frames:v 1 -q:v 3 "${out%.mp4}.jpg"; rm -rf "$tmp"; ls -la "$out" "${out%.mp4}.jpg"
