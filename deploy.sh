#!/usr/bin/env sh

# 當發生錯誤時中止腳本
set -e

# 構建
npm run build

# cd 到構建輸出的目錄下
cd dist

git init
git add -A
git commit -m 'deploy'

# 部署到 https://qizhen-lin.github.io/systex-order
git push -f git@github.com:qizhen-lin/systex-order.git master:gh-pages

cd -