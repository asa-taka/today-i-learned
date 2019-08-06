const { createElement: e, useState } = require('react')

// Sample Components
// -----------------

const CountButton = () => {
  const [count, setCount] = useState(0)
  return e(
    'button',
    { onClick: () => setCount(c => c + 1) },
    `count: ${count}`
  )
}

const C1 = props => e('div', {}, 'C1: ', props.content)

const C2 = () => e('div', {},
  e(C1),
  e(C1, { content: 'content-from-C2' }),
  e('div', {},
    e(CountButton),
    e(CountButton),
    e('div', {},
      e(C1)
    )
  )
)

module.exports = { CountButton, C1, C2 }
