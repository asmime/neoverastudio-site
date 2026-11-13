<?php
// Statistiques des maquettes (accès par clé ; seule l'empreinte de la clé est publique).
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Robots-Tag: noindex');
if (!hash_equals('e8828944833618c19d575eab174d09c0090dbed81a41bbd2e3772c327088b869', hash('sha256', (string)($_GET['k'] ?? '')))) { http_response_code(404); exit; }
$dir = dirname(__DIR__) . '/.stats';
if (isset($_GET['purge'])) { $p = preg_replace('/[^a-z0-9-]/', '', (string)$_GET['purge']); if ($p !== '' && is_file("$dir/$p.log")) @unlink("$dir/$p.log"); }
$only = preg_replace('/[^a-z0-9-]/', '', (string)($_GET['m'] ?? ''));
$out = [];
foreach (glob($dir . '/*.log') ?: [] as $f) {
  $m = basename($f, '.log');
  if ($only !== '' && $m !== $only) continue;
  $sess = []; $vis = []; $days = []; $dev = []; $views = []; $first = null; $last = null;
  foreach (file($f, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES) as $l) {
    $r = json_decode($l, true); if (!$r) continue;
    $s = $r['s'] ?: $r['ts'];
    if (!isset($sess[$s])) $sess[$s] = ['debut' => $r['ts'], 'duree_s' => 0, 'appareil' => $r['d'], 'langue' => $r['l'], 'pages' => []];
    $sess[$s]['duree_s'] = max($sess[$s]['duree_s'], $r['t']);
    if ($r['e'] === 'view' && $r['p'] !== '') { $sess[$s]['pages'][] = $r['p']; $views[$r['p']] = ($views[$r['p']] ?? 0) + 1; }
    if ($r['e'] === 'open') { $vis[$r['v']] = 1; $days[substr($r['ts'], 0, 10)] = ($days[substr($r['ts'], 0, 10)] ?? 0) + 1; $dev[$r['d']] = ($dev[$r['d']] ?? 0) + 1; }
    $first = $first ?? $r['ts']; $last = $r['ts'];
  }
  $tot = array_sum(array_column($sess, 'duree_s'));
  $out[$m] = ['ouvertures' => count($sess), 'visiteurs_distincts_par_jour' => count($vis), 'temps_total_min' => round($tot / 60, 1),
    'premiere' => $first, 'derniere' => $last, 'par_jour' => $days, 'appareils' => $dev, 'pages_vues' => $views,
    'sessions' => isset($_GET['detail']) ? array_values($sess) : null];
}
echo json_encode($out, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
