## [nextjs-opinionated](https://github.com/saitodisse/nextjs-opinionated)

### - [demo](https://nextjs-opinionated.vercel.app/)

### - [storybook](https://main--60d0b5d829870700396e0a3b.chromatic.com)

---

_check [nextjs-opinionated-hasura](https://github.com/saitodisse/nextjs-opinionated-hasura) ([demo](https://nextjs-opinionated-hasura.vercel.app/)) with Hasura and Auth0_

---

### This template includes

- [next.js](https://nextjs.org/)
- [storybook](https://storybook.js.org/)
- [typescript](https://www.typescriptlang.org/)
- [tailwindcss](https://tailwindcss.com/)
- [daisyui](https://daisyui.com/)
- [jest](https://jestjs.io/)
- [eslint](https://eslint.org/)
- [prettifier](https://prettier.io/)
- [sweetalert2](https://sweetalert2.github.io/)
- [react-icons](https://react-icons.github.io/react-icons/)
- [react-query](https://react-query.tanstack.com/)

---

## how to use

Just fork and run:

```sh
# npm install
yarn install

# nextjs site
yarn dev

# storybook site
yarn storybook
```

---

## configure Auth0

- https://github.com/auth0/nextjs-auth0

---

## always updated

_Please, update all packages before continue:_

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

_based on [https://github.com/elitizon/nextjs-tailwind-storybook](https://github.com/elitizon/nextjs-tailwind-storybook)_
