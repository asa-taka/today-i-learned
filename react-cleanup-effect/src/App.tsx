import React, { useState, useEffect } from 'react'
import './App.css'

interface Data {
  users: Array<{
    id: number,
    name: string,
    age: number,
  }>
}

const UserList: React.FC = () => {
  const [data, setData] = useState<Data>()
  const [error, setError] = useState<Error>()

  useEffect(() => {
    const controller = new AbortController()
    const { signal } = controller
    let finished = false
    
    fetch('http://localhost:3080/', { signal })
      .then(res => res.json())
      .then(setData)
      .catch(err => {
        if (err.name !== 'AbortError') setError(err)
      })
      .finally(() => {
        finished = true
      })

    return () => {
      if (!finished) {
        controller.abort()
        console.log('UserList: Fetch aborted')
      }
    }
  }, [setData, setError])

  if (error) return <div>{error.toString()}</div>
  if (!data) return <div>Loading...</div>

  return (
    <div>
      {data.users.map(u => (
        <div key={u.id}>{u.name}({u.age})</div>
      ))}
    </div>
  )
}

const App: React.FC = () => {
  const [mounted, setMounted] = useState(true)
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => setMounted(s => !s)}>
          {mounted ? 'unmount' : 'mount'} UserList
        </button>
        {mounted && <UserList />}
      </header>
    </div>
  )
}

export default App
