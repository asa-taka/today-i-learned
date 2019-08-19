import React from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core'

import MyAppBar from './components/MyAppBar'
import './App.css'

const theme = createMuiTheme()

const App: React.FC = () => {
  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <MyAppBar />
      </MuiThemeProvider>
    </div>
  )
}

export default App
