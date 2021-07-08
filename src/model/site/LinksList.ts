export type LinksListIds = 'home' | 'docs' | 'github'

export type LinkProps = {
  id: LinksListIds
  name: string
  internalURL?: string
  externalURL?: string
}

export const LinksList: {
  [id in LinksListIds]: LinkProps
} = {
  home: {
    id: 'home',
    name: 'Home',
    internalURL: '/',
  },
  docs: {
    id: 'docs',
    name: 'Docs',
    internalURL: '/docs',
  },
  github: {
    id: 'github',
    name: 'Github',
    externalURL: 'https://github.com/nextjs-opinionated/nextjs-opinionated-hasura',
  },
}
