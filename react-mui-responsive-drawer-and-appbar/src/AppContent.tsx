import React from 'react'
import { Switch, Route } from 'react-router-dom'

import About from './views/About'
import MainContent from './views/MainContent'

export default function AppContent() {
  return (
    <Switch>
      <Route path="/" component={MainContent} />
      <Route path="/about" component={About} />
    </Switch>
  )
}
