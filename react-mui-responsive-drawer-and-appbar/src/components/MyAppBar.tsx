import React from 'react'
import {
  Drawer,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  makeStyles,
  useMediaQuery,
  useScrollTrigger,
  Theme,
} from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import * as Icons from '@material-ui/icons'

import drawerTheme from '../themes/drawerTheme'
import { useBoolean } from '../utils'
import MyContents from './MyContents'
import MyDrawerContent from './MyDrawerContent'
import HideOnScroll from './HideOnScroll'

interface Props {}

const useStyles = makeStyles(
  ({ palette, spacing: sp, breakpoints: bp, mixins }) => ({
    root: {
      backgroundColor: palette.background.default,
      minHeight: '100vh',
    },
    appBar: {
      [bp.up('md')]: {
        width: `calc(100vw - 240px)`,
      },
      transition: 'background .2s, color .2s',
    },
    drawerPaper: {
      width: 240,
    },
    menuButton: {
      marginRight: sp(2),
    },
    contentWrapper: {
      [bp.up('md')]: {
        paddingLeft: 240,
      },
    },
    appBarSpacer: mixins.toolbar,
    content: {
      padding: sp(3),
    },
  }),
)

export default function MyAppBar(props: Props) {
  const cls = useStyles()
  const [mobileOpen, openDrawer, closeDrawer] = useBoolean()

  const isMobile = useMediaQuery<Theme>(theme => theme.breakpoints.down('sm'))

  const elevationTrigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  })

  const drawerContent = <MyDrawerContent sets={3} length={12} />

  return (
    <div className={cls.root}>
      <ThemeProvider theme={drawerTheme}>
        <nav>
          {isMobile ? (
            <Drawer
              open={mobileOpen}
              color="primary"
              onClose={closeDrawer}
              classes={{ paper: cls.drawerPaper }}
              variant="temporary"
              ModalProps={{ keepMounted: true }}
              children={drawerContent}
            />
          ) : (
            <Drawer
              open
              color="primary"
              classes={{ paper: cls.drawerPaper }}
              variant="permanent"
              children={drawerContent}
            />
          )}
        </nav>
      </ThemeProvider>

      <ThemeProvider
        theme={originalTheme => (isMobile ? drawerTheme : originalTheme)}
      >
        <HideOnScroll>
          <AppBar
            className={cls.appBar}
            color={isMobile ? 'primary' : 'default'}
            elevation={elevationTrigger ? 4 : 0}
          >
            <Toolbar>
              {isMobile && (
                <IconButton
                  className={cls.menuButton}
                  edge="start"
                  color="inherit"
                  onClick={openDrawer}
                >
                  <Icons.Menu />
                </IconButton>
              )}
              <Typography variant="h6">AppBar</Typography>
            </Toolbar>
          </AppBar>
        </HideOnScroll>
      </ThemeProvider>

      <div className={cls.contentWrapper}>
        <div className={cls.appBarSpacer} />
        <div className={cls.content}>
          <MyContents length={12} />
        </div>
      </div>
    </div>
  )
}
