import React from 'react'
import { MuiThemeProvider, createMuiTheme, CssBaseline } from '@material-ui/core'

import MyAppBar from './components/MyAppBar'
import AppContent from './AppContent'
import './App.css'

const theme = createMuiTheme()

const App: React.FC = () => {
  return (
    <div className="App">
      <CssBaseline />
      <MuiThemeProvider theme={theme}>
        <MyAppBar>
          <AppContent />
        </MyAppBar>
      </MuiThemeProvider>
    </div>
  )
}

export default App
