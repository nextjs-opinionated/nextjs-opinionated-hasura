export type LinksListIds =
  | 'home'
  | 'github'
  | 'styleGuide'
  | 'form-example'
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
  styleGuide: {
    id: 'styleGuide',
    name: 'Style Guide',
    internalURL: '/style-guide',
  },
  'form-example': {
    id: 'form-example',
    name: 'React Form Example',
    internalURL: '/form-example',
  },
  'typed-fetch-examples': {
    id: 'typed-fetch-examples',
    name: 'Typed-Fetch',
    internalURL: '/typed-fetch-examples',
  },
  github: {
    id: 'github',
    name: 'Github',
    externalURL: 'https://github.com/saitodisse/nextjs-opinionated',
  },
}
