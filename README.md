# NewTabCrafter

English version: [README.en.md](https://github.com/IvoAndre/NewTabCrafter/blob/main/readme.en.md)

Uma nova aba leve, executada no browser, sem build tools e com persistencia local no cliente.


## Destaques

- Barra de pesquisa com motores predefinidos, motor customizado e deteccao de URL direta.
- Grelha de atalhos principais e menu de apps com adicionar/editar/remover/arrastar.
- Modos de fundo: cor solida, gradiente, imagem carregada, playlist carregada e stock aleatorio.
- Stock aleatorio com pesquisa Unsplash, cache local por categoria e atribuicao.
- Controlo de tema (incluindo transparencia dos componentes), fontes personalizadas e tamanhos de UI.
- Categorias de definicoes colapsaveis.
- Importacao/exportacao de definicoes em JSON.
- Localizacao: `en-US` e `pt-PT`.

## Tecnologias

- App estatico: `index.html`, `styles.css`, `app.js`
- Armazenamento: `localStorage` do browser (`newtab.config`)


## Notas

- Os dados ficam locais em cada perfil/dispositivo.
- Use Export/Import para transferir definicoes.
- Para alterar valores por defeito, edite `defaultConfig` em `app.js`.
- O modo de imagens stock via Unsplash deve cumprir os termos da API especificados [aqui](https://unsplash.com/api-terms).
