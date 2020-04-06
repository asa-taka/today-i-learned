import React from 'react'
import { Router, Link, RouteComponentProps } from '@reach/router'
import './App.css'

const Home = (props: RouteComponentProps) => <div>Home</div>
const Dash = (props: RouteComponentProps & { children: React.ReactNode }) => (
  <div>
    <h2>Dash</h2>
    <div>
      <Link to="">Dash1</Link>
      <Link to="2">Dash2</Link>
    </div>
    <div>{props.children}</div>
  </div>
)
const Dash1 = (props: RouteComponentProps) => <div>Dash1</div>
const Dash2 = (props: RouteComponentProps) => <div>Dash2</div>
const NotFound = (props: RouteComponentProps) => <div>NotFound</div>
const UserRoot = (props: RouteComponentProps<{ userId: string }>) => (
  <div>
    {props.invoiceId}
  </div>
)
const UserLisit = (props: RouteComponentProps) => {
  <div>{props.userId}</div>
}
const UserDetail = (props: RouteComponentProps<{ userId: string }>) => {
  return <div>{props.userId}</div>
}

const App = () => {
  return (
    <div className="App">
      <Link to="/">Home</Link>
      <Link to="dash">Dashboard</Link>
      <Router>
        <Home path="/" />
        <Dash path="dash">
          <Dash1 path="/" />
          <Dash2 path="2" />
        </Dash>
        <NotFound default />
      </Router>
    </div>
  )
}

export default App
