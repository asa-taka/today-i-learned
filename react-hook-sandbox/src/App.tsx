import React, { useState, useEffect } from 'react'
import './App.css'

const logs: any[] = []
console.log = (...args: any[]) => logs.push(args.join(' '))

const useMyHook = (label: string) => {
  console.log(label, 'useMyHook')

  const [s1, setS1] = useState(0)
  const [s2, setS2] = useState(0) // will get increment by s1 update
  const [s3, setS3] = useState(0) // will get increment by s2 update

  useEffect(() => {
    setS1(s => {
      console.log(label, `useEffect(s1): increments s1(${s1} → ${s1+1})`)
      return s + 1
    })  
  }, [])

  useEffect(() => {
    setS3(s => {
      console.log(label, `useEffect(s2→s3): increments s3(${s3} → ${s3+1}) caused by s2(${s2}) update`)
      return s + 1
    })
  }, [s2])

  useEffect(() => {
    setS2(s => {
      console.log(label, `useEffect(s1→s2): increments s2(${s2} → ${s2+1}) caused by s1(${s1}) update`)
      return s + 1
    })  
  }, [s1])

  return { s1, s2 }
}

let count = 0

const App: React.FC = () => {
  count++
  const label = '－'.repeat(count-1) + `[${count}]`

  console.log(label, 'App')
  const state = useMyHook(label)
  console.log(label, `App: got ${JSON.stringify(state)}`)

  console.log(label, 'App: render')
  console.info(logs.map(s => `| ${s} |  |`).join('\n'))
  return (
    <div className="App">
      <header className="App-header">
        {JSON.stringify(state)}
      </header>
    </div>
  )
}

export default App
