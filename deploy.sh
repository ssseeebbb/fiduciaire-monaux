#!/usr/bin/env sh

set -e

npm run build

git add dist

git commit -m "New Deployment"

git subtree push --prefix dist origin gh-pages

git add -A
git commit -m "main push"
git push origin main
