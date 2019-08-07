import React, { useState } from 'react'

function CountButton() {
  const [count, setCount] = useState(0)
  return <button onClick={() => { setCount(s => s + 1)}}>{count}</button>
}

export default function MyComponent() {
  return (
    <div>
      <CountButton />
    </div>
  )
}
