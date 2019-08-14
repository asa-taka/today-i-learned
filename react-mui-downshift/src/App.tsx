import React from 'react'
import MySelectInput from './components/MySelectInput'
import './App.css'

interface User {
  id: number
  name: string
  age: number
}

const users: User[] = [
  { id: 1, name: 'alice', age: 12 },
  { id: 2, name: 'bobby', age: 21 },
  { id: 3, name: 'cancy', age: 32 },
  { id: 4, name: 'daddy', age: 45 },
  { id: 5, name: 'evily', age: 56 },
]

const userToString = (user: User | null) => (user ? user.name : '')

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <MySelectInput
          items={users}
          itemToString={userToString}
          onChange={console.log}
        />
      </header>
    </div>
  )
}

export default App
