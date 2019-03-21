import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"

import { UserSummary } from "./components"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <UserSummary id={1} batch />
            <UserSummary id={2} batch />
            <UserSummary id={3} />
          </div>
        </header>
      </div>
    )
  }
}

export default App
