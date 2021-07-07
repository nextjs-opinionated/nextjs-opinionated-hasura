export type LinksListIds = 'home' | 'github' | 'docs' | 'login'

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
  github: {
    id: 'github',
    name: 'Github',
    externalURL: 'https://github.com/nextjs-opinionated/nextjs-opinionated',
  },
  docs: {
    id: 'docs',
    name: 'Docs',
    internalURL: '/docs',
  },
  login: {
    id: 'login',
    name: 'Login',
    internalURL: '/api/auth/login',
  },
}
