# Next.js Opinionated with Hasura

This boilerplate has a very interesting advantage.
Whenever you create or change a query in graphql you will have an automatically generated typescript code.

- [typescript](https://www.typescriptlang.org/)
- [next.js](https://nextjs.org/)
- [tailwindcss](https://tailwindcss.com/)
- [storybook](https://storybook.js.org/)
- [jest](https://jestjs.io/)
- [eslint](https://eslint.org/)
- [prettifier](https://prettier.io/)
- [sweetalert2](https://sweetalert2.github.io/)
- [react-icons](https://react-icons.github.io/react-icons/)

### Plus hasura and graphql-codegen

- [hasura](https://hasura.io/)
- [graphql-request](https://github.com/prisma-labs/graphql-request)
- [graphql-codegen](https://www.graphql-code-generator.com/)
- [docker-compose](https://docs.docker.com/compose/)
- [swr](https://swr.vercel.app/)
- [docker](https://www.docker.com/)

## New scripts on package json

- devNext: only run next dev
- genRemote: generates watching on remote server (need to add codegen.remote.yml on root)

## Forms, new libs package json

- @tailwindcss/forms to get better fors
- react-hook-form
- zod (same validator on client and on server)
- cross-env (envs on windows)
- pino-pretty (better logs)

---

## Pre-Requirements

- Install **node** (min 14): https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04

- Install and configure **docker**. Make sure you can run `docker` command without sudo (Step 2): https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-20-04

- Install and configure **docker-compose**: https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04

- Install **hasura** cli: https://hasura.io/docs/1.0/graphql/core/hasura-cli/install-hasura-cli.html#install-hasura-cli

### Before yarn dev

```sh
yarn

# create .env.local
cp .env.local.example .env.local

# start your postgress if you have docker
yarn hasuraLocal

# apply DB in other terminal
yarn migrationLocalApply
```

Go to http://localhost:9696, use `admin_secret_local_zzz` as admin secret. You must see messages, tags and message_tag tables

---

### Run database locally (with docker)

```sh
yarn dev
```

---

### Run remote database on heroku (without docker)

- first create a server using [heroku button](https://heroku.com/deploy?template=https://github.com/hasura/graphql-engine-heroku)

```sh
yarn devNext

# create .env.local
cp .env.local.example .env.local

# start your postgress
yarn hasuraLocal

# apply DB in other terminal
yarn migrationLocalApply
```

## start server

```sh
# start docker-compose, generator and next.js
yarn dev
```

---

## FREE Deploy on Heroku and Vercel

- Install Heroku CLI - https://devcenter.heroku.com/articles/heroku-cli#download-and-install
- Install Vercel CLI: https://vercel.com/cli
- Push your repo to github and deploy to your vercel account
- run `vercel link` on your project folder

- Deploy to heroku with the heroku button (https://heroku.com/deploy?template=https://github.com/hasura/graphql-engine-heroku)
- run `heroku login`

- `cp .env.production.sh.example .env.production.sh`
- update `HASURA_ADMIN_SECRET`, `NEXT_PUBLIC_HASURA_GRAPHQL_ENDPOINT`, `HASURA_GRAPHQL_ADMIN_SECRET` at `.env.production.sh` - search/replace for `xxx`

---

### Always updated

_I'm always updating all packages here_

```sh
# yarn global add npm-check-updates
ncu -u
yarn
```

_tests everything's still works:_

```sh
yarn build && yarn test && yarn storybook
```

If everything is working, please make a pull request

---

_based on: https://github.com/LongJohnSilver1504/NextJS-Tailwind-Storybook-and-TS-boilerplate_
