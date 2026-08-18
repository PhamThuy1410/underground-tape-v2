#!/usr/bin/env bash

set -euo pipefail

lan_ip="$(hostname -I 2>/dev/null || true)"
lan_ip="${lan_ip%% *}"

printf '\nUNDERGROUND local server\n'
printf 'PC:    http://127.0.0.1:8000\n'

if [ -n "$lan_ip" ]; then
  printf 'Phone: http://%s:8000\n' "$lan_ip"
  printf '       (Điện thoại phải dùng cùng Wi-Fi với máy tính.)\n'
fi

printf '\nPress Ctrl+C to stop.\n\n'

export NODE_NO_WARNINGS=1
exec ./node_modules/.bin/http-server -p 8000 -s
