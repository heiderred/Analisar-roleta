# Sistema de Gestão (Emergent App)

Sistema base fullstack compatível com o template Emergent.sh. Dashboard com
estatísticas e gerenciador de tarefas (CRUD).

## Stack
- React 18
- Webpack 5 + Babel
- CSS puro (dark theme)

## Como rodar

```bash
npm install
npm start      # dev server em http://localhost:3000
npm run build  # gera build/static/js/bundle.js (output compatível com o template Emergent)
```

## Estrutura

```
public/index.html     -> template HTML
src/index.js          -> entrada do React
src/App.js            -> componente principal (dashboard + tarefas)
src/styles.css        -> estilos
app-standalone.html   -> demo sem build (React via CDN)
webpack.config.js     -> build com output em static/js/bundle.js
```

## Deploy

Sirva o conteúdo da pasta `build/` na Emergent (ou qualquer static host).
