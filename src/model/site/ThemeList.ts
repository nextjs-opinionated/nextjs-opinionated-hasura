export type ThemeListIds =
  | 'light'
  | 'dark'
  | 'cupcake'
  | 'bumblebee'
  | 'emerald'
  | 'corporate'
  | 'synthwave'
  | 'retro'
  | 'cyberpunk'
  | 'valentine'
  | 'halloween'
  | 'garden'
  | 'forest'
  | 'aqua'
  | 'lofi'
  | 'pastel'
  | 'fantasy'
  | 'wireframe'
  | 'black'
  | 'luxury'
  | 'dracula'

export const ThemeList: {
  [id in ThemeListIds]: {
    id: ThemeListIds
    name: string
  }
} = {
  light: {
    id: 'light',
    name: 'Light',
  },
  dark: {
    id: 'dark',
    name: 'Dark',
  },
  cupcake: {
    id: 'cupcake',
    name: 'Cup Cake',
  },
  bumblebee: {
    id: 'bumblebee',
    name: 'Bumble Bee',
  },
  emerald: {
    id: 'emerald',
    name: 'Emerald',
  },
  corporate: {
    id: 'corporate',
    name: 'Corporate',
  },
  synthwave: {
    id: 'synthwave',
    name: 'Synth Wave',
  },
  retro: {
    id: 'retro',
    name: 'Retro',
  },
  cyberpunk: {
    id: 'cyberpunk',
    name: 'Cyber-Punk',
  },
  valentine: {
    id: 'valentine',
    name: 'Valentine',
  },
  halloween: {
    id: 'halloween',
    name: 'Halloween',
  },
  garden: {
    id: 'garden',
    name: 'Garden',
  },
  forest: {
    id: 'forest',
    name: 'Forest',
  },
  aqua: {
    id: 'aqua',
    name: 'Aqua',
  },
  lofi: {
    id: 'lofi',
    name: 'Lofi',
  },
  pastel: {
    id: 'pastel',
    name: 'Pastel',
  },
  fantasy: {
    id: 'fantasy',
    name: 'Fantasy',
  },
  wireframe: {
    id: 'wireframe',
    name: 'Wire Frame',
  },
  black: {
    id: 'black',
    name: 'Black',
  },
  luxury: {
    id: 'luxury',
    name: 'Luxury',
  },
  dracula: {
    id: 'dracula',
    name: 'Dracula',
  },
}
