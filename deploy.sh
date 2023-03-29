#!/usr/bin/env sh

set -e

npm run build

cd dist/

cp index.html 404.html