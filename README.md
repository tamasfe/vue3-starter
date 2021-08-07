- [Vite + Vue 3 + Quasar Example](#vite--vue-3--quasar-example)
  - [Features](#features)
  - [Suggested VSCode extensions](#suggested-vscode-extensions)
  - [Usage](#usage)
    - [Commands](#commands)

# Vite + Vue 3 + Quasar Example

An example starter template with the latest Vue tooling and libraries mainly for personal use.

The template is very opinionated, and has strict typing wherever possible.

## Features

Included features and packages/plugins:

- Typescript
- Vite
- Vue 3
- Vue Router
- Quasar
- Pinia Store (with localStorage persistence)
- Vue i18n
- YAML
- SCSS
- Conditional library mode (for embedding in existing sites)

## Suggested VSCode extensions

- [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar&ssr=false#overview)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [I18n Ally](https://marketplace.visualstudio.com/items?itemName=Lokalise.i18n-ally)

## Usage

- Clone this repository
- Run `yarn install`
- Start messing around and/or use any of the commands below.

### Commands

- `yarn dev`: Run Vite development server with HMR.
- `yarn build`: Build the site.
- `yarn build --mode library`: Output `.js` bundles (and `.css`) instead of standalone site.
- `yarn serve`: Serve the built standalone site.
- `yarn format`: Format the code with prettier.
- `yarn lint`: Lint the project with ESlint. (Vue files are ignored)
- `yarn typecheck`: Run typescript type-check. (Vue files included)
