import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import MyComponent from './MyComponent'

afterEach(cleanup)

test('MyComponent renders fine :)', () => {
  const { container } = render(<MyComponent />)
  expect(container).toMatchSnapshot()
})

test('MyComponent works fine :)', () => {
  const { container } = render(<MyComponent />)
  const button = container.querySelector('button')
  expect(button.textContent).toBe('0')
  fireEvent.click(button)
  expect(button.textContent).toBe('1')
})
