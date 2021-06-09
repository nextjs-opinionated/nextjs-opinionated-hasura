export type LinksListIds = 'home' | 'messages' | 'github' | 'styleGuide' | 'authenticate'

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
  styleGuide: {
    id: 'styleGuide',
    name: 'Style Guide',
    internalURL: '/style-guide',
  },
  messages: {
    id: 'messages',
    name: 'Messages',
    internalURL: '/messages',
  },
  github: {
    id: 'github',
    name: 'Github',
    externalURL: 'https://github.com/saitodisse/nextjs-opinionated',
  },
  authenticate: {
    id: 'authenticate',
    name: 'Authenticate',
    internalURL: '/api/auth/signin'
  }
}
