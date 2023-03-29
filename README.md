# fiduciaire-monaux

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## Process pour publier une nouvelle version

- npm run build
- git add *
- git commit -m "commit comment"
- git push origin main
- git subtree split --prefix dist -b gh-pages
- git push -f origin gh-pages:gh-pages   

