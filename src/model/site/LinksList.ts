export type LinksListIds =
  | 'home'
  | 'styleGuide'
  | 'typed-fetch-examples'
  | 'form-example'
  | 'messages'
  | 'users'
  | 'github'

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
  'typed-fetch-examples': {
    id: 'typed-fetch-examples',
    name: 'Typed-Fetch',
    internalURL: '/typed-fetch-examples',
  },
  messages: {
    id: 'messages',
    name: 'Messages',
    internalURL: '/messages',
  },
  users: {
    id: 'users',
    name: 'Users',
    internalURL: '/users',
  },
  github: {
    id: 'github',
    name: 'Github',
    externalURL: 'https://github.com/saitodisse/nextjs-opinionated-hasura',
  },
}
