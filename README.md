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

## Executar localmente

```powershell
cd c:\Users\Ivo\source\repos\newtab-page
python -m http.server 8080
```

Abrir `http://localhost:8080`.

## Publicar (GitHub Pages)

1. Fazer push do projeto para o repositorio GitHub.
2. No GitHub, abrir Settings -> Pages.
3. Em Source, escolher Deploy from a branch.
4. Selecionar `main` e pasta `/ (root)`.
5. Guardar e aguardar o URL do Pages.

## Notas

- Os dados ficam locais em cada perfil/dispositivo.
- Use Export/Import para transferir definicoes.
- Para alterar valores por defeito, edite `defaultConfig` em `app.js`.
- O modo de imagens stock via Unsplash deve cumprir os termos da API especificados [aqui](https://unsplash.com/api-terms).
