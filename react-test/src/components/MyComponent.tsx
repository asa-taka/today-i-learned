import React, { useState } from 'react'

function CountButton() {
  const [count, setCount] = useState(0)
  const increment = () => { setCount(s => s + 1) }
  return <button onClick={increment}>{count}</button>
}

export default function MyComponent() {
  return (
    <div>
      <CountButton />
    </div>
  )
}
