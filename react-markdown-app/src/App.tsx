import React from 'react'
import Markdown from 'react-markdown'
import { HashRouter, Route, NavLink, Link, Switch } from 'react-router-dom'
import removeMarkdown from 'remove-markdown'
import './App.css'

import { entries } from './data'

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="App">
        <nav className="blog-list">
          <div className="blog-list-header">My Blog App</div>
          {entries.map((e, i) => (
            <NavLink className="blog-item" activeClassName="blog-item-active" to={`/blog/${i}`}>
              <div className="blog-item-title">{e.title}</div>
              <div className="blog-item-body">{removeMarkdown(e.body)}</div>
            </NavLink>
          ))}
        </nav>
        <main className="main-content">
          <Switch>
            <Route path="/blog/:index" render={({ match: { params: { index }} }) => {
              const e = entries[index]
              return (
                <div className="blog-detail">
                  <nav className="breadcrumbs">
                    <Link to="/">Blog Entries</Link> / {e.title}
                  </nav>
                  <div className="blog-title">{e.title}</div>
                  <Markdown className="blog-body" source={e.body} />
                </div>
              )
            }} />
            <Route path="/" render={() => (
              <div className="home-content">
                <h1>Welcome to My Blog</h1>
                <p>Select Blog Post!</p>
              </div>
            )} />
          </Switch>
        </main>
      </div>
    </HashRouter>
  )
}

export default App
