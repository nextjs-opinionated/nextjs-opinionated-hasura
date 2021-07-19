## [nextjs-opinionated-hasura](https://github.com/saitodisse/nextjs-opinionated-hasura)

### - [demo](https://nextjs-opinionated-hasura.vercel.app/)

- [storybook](https://main--60d0b5d829870700396e0a3b.chromatic.com) - from nextjs-opinionated

_extends [nextjs-opinionated](https://github.com/saitodisse/nextjs-opinionated) ([demo](https://nextjs-opinionated.vercel.app/)) - base template, without Hasura and Auth0_

---

### This template includes

- everything from [nextjs-opinionated](https://github.com/saitodisse/nextjs-opinionated)
- [hasura](https://hasura.io/)
- [graphql-request](https://github.com/prisma-labs/graphql-request)
- [graphql-codegen](https://www.graphql-code-generator.com/)
- [docker-compose](https://docs.docker.com/compose/)
- [react-hook-form](https://react-hook-form.com/)
- [@tailwindcss/forms](https://github.com/tailwindlabs/tailwindcss-forms)
- [zod](https://github.com/colinhacks/zod)

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

### Run on local database (with docker)

```sh
yarn dev
```

---

### Run on remote database - heroku (without docker)

- first create a server using [heroku button](https://heroku.com/deploy?template=https://github.com/hasura/graphql-engine-heroku)

```sh
yarn devNext
```

## start server

```sh
# start docker-compose, generator and next.js
yarn dev
```

---

## FREE Deploy on Heroku and Vercel

- Install Heroku CLI: https://devcenter.heroku.com/articles/heroku-cli#download-and-install
- Install Vercel CLI: https://vercel.com/cli
- Push your repo to github and deploy to your vercel account
- run `vercel link` on your project folder

- Deploy to heroku with the heroku button (https://heroku.com/deploy?template=https://github.com/hasura/graphql-engine-heroku)
- run `heroku login`

- `cp .env.production.sh.example .env.production.sh`
- update `HASURA_ADMIN_SECRET`, `NEXT_PUBLIC_HASURA_GRAPHQL_ENDPOINT`, `HASURA_GRAPHQL_ADMIN_SECRET` at `.env.production.sh` - search/replace for `xxx`

---

## how to use

Just fork and run:

```sh
# npm install
yarn install

# next.js site
yarn dev

# storybook site
yarn storybook

# tests
yarn test --watch
```

---

## configure Auth0

- https://github.com/auth0/nextjs-auth0

---

## always updated

_I'm keeping in sync with nextjs-opinionated base template_

```sh
# merge
git pull git@github.com:semantix-engagement-hub/nextjs-opinionated.git main
```

_I'm always updating all packages here_

```sh
# yarn global add npm-check-updates
ncu -u
yarn
```

_tests everything's still works:_

```sh
yarn checkAll
```

If everything is working, please make a pull request

---

_based on [https://github.com/elitizon/nextjs-tailwind-storybook](https://github.com/elitizon/nextjs-tailwind-storybook)_
