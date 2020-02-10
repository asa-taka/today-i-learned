import { createMuiTheme } from '@material-ui/core'
import { cyan } from '@material-ui/core/colors'
import { darken, lighten } from '@material-ui/core/styles/colorManipulator'

export default createMuiTheme({ palette: {
  primary: {
    light: lighten(cyan[700], 0.5),
    main: darken(cyan[700], 0.3),
    dark: darken(cyan[700], 0.5),
    contrastText: '#fff',
  },
  background: {
    default: darken(cyan[700], 0.5),
    paper: darken(cyan[700], 0.5),
  },
  type: 'dark',
} })
