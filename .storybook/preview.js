import '../styles/globals.css'
import { viewports } from './viewports'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'grey',
    values: [
      {
        name: 'light',
        value: '#fff',
      },
      {
        name: 'grey',
        value: '#f7f9fc',
      },
      {
        name: 'dark',
        value: '#4c4c4c',
      },
    ],
  },
  viewport: { viewports },
}

import * as NextImage from 'next/image'

const OriginalNextImage = NextImage.default

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
})
