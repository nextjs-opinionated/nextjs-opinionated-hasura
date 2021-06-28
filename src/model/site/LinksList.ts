export type LinksListIds =
  | 'home'
  | 'users'
  | 'github'
  | 'styleGuide'
  | 'form-example'
  | 'login'
  | 'messages'
  | 'typed-fetch-examples'

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
  users: {
    id: 'users',
    name: 'Users',
    internalURL: '/users',
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
  'form-example': {
    id: 'form-example',
    name: 'React Form Example',
    internalURL: '/form-example',
  },
  github: {
    id: 'github',
    name: 'Github',
    externalURL: 'https://github.com/saitodisse/nextjs-opinionated-hasura',
  },
  'typed-fetch-examples': {
    id: 'typed-fetch-examples',
    name: 'Typed-Fetch',
    internalURL: '/typed-fetch-examples',
  },
  login: {
    id: 'login',
    name: 'Login',
    internalURL: '/auth/login',
  },
}
