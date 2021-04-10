import '../src/styles/index.css'

import React from 'react'
import { addDecorator } from '@storybook/react'
// import { info } from '@storybook/addon-info'
import Layout from './Layout'
addDecorator((storyFn) => <Layout>{storyFn()}</Layout>)
// addDecorator(
//   info({
//     inline: true,
//     propTablesExclude: [Layout],
//   })
// )

import '../src/styles/index.css'
