<?php
// Mesure d'audience Neovera Studio : sans cookie, IP jamais stockée (empreinte hachée, sel du jour).
header('Cache-Control: no-store');
$dir = dirname(__DIR__) . '/.stats';
if (!is_dir($dir)) { @mkdir($dir, 0750, true); @file_put_contents($dir . '/.htaccess', "Require all denied\nDeny from all\n"); }
$d = json_decode(file_get_contents('php://input') ?: '', true);
if (!is_array($d)) { http_response_code(204); exit; }
$m = preg_replace('/[^a-z0-9-]/', '', strtolower((string)($d['m'] ?? '')));
if ($m === '' || !is_dir(__DIR__ . '/' . $m)) { http_response_code(204); exit; }
$e = in_array($d['e'] ?? '', ['open', 'ping', 'view'], true) ? $d['e'] : 'open';
$ua = $_SERVER['HTTP_USER_AGENT'] ?? '';
if (preg_match('/bot|crawl|spider|preview|headless/i', $ua)) { http_response_code(204); exit; }
$row = [
  'ts' => gmdate('c'),
  'e'  => $e,
  's'  => substr(preg_replace('/[^a-z0-9]/', '', (string)($d['s'] ?? '')), 0, 12),
  'v'  => substr(hash('sha256', gmdate('Y-m-d') . 'nv' . ($_SERVER['REMOTE_ADDR'] ?? '') . $ua), 0, 10),
  'p'  => substr(preg_replace('/[^a-z0-9_-]/', '', strtolower((string)($d['p'] ?? ''))), 0, 24),
  't'  => min(36000, max(0, intval($d['t'] ?? 0))),
  'd'  => preg_match('/iPad|Tablet/i', $ua) ? 'tablette' : (preg_match('/Mobi|Android|iPhone/i', $ua) ? 'mobile' : 'ordinateur'),
  'l'  => substr(preg_replace('/[^a-z]/', '', (string)($d['l'] ?? '')), 0, 2),
];
@file_put_contents($dir . '/' . $m . '.log', json_encode($row) . "\n", FILE_APPEND | LOCK_EX);
http_response_code(204);
