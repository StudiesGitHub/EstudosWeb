import 'styled-components'
import { defaultTheme } from '../src/themes/default'

type ThemeType = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {} // TODO: WATCH OUT
}
