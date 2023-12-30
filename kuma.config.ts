import { createTheme } from '@kuma-ui/core'

const theme = createTheme({
  colors: {
    primary: '#ffffff',
    secondary: '#000000',
  },
  fonts: {
    heading: 'Noto Sans JP, sans-serif',
    body: 'Noto Sans JP, sans-serif',
  },
  fontSizes: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '28px',
    '4xl': '36px',
    '5xl': '48px',
    '6xl': '64px',
  },
  components: {},
})

type UserTheme = typeof theme

declare module '@kuma-ui/core' {
  export interface Theme extends UserTheme {}
}

export default theme
