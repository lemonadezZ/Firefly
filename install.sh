#!/usr/bin/env bash
rm -rf /tmp/firefly
mkdir -p /tmp/firefly
cd /tmp/firefly
sudo yum -y install readline-devel pcre-devel openssl-devel gcc
sudo wget https://openresty.org/download/openresty-1.11.2.2.tar.gz
sudo tar -zxvf openresty-1.11.2.2.tar.gz
sudo cd openresty-1.11.2.2
sudp ./configure
sudo make && make install

