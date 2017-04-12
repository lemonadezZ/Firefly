#!/usr/bin/env bash
kill -USR2 `cat /var/run/php-fpm/php-fpm.pid`
/usr/local/openresty/nginx/sbin/nginx -s reload
