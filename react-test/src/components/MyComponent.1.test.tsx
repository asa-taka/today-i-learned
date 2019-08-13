import React from 'react'
import { render } from 'react-dom'
import { act } from 'react-dom/test-utils'
import MyComponent from './MyComponent'

let container: HTMLElement

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
});

test('MyComponent renders fine :)', () => {
  render(<MyComponent />, container)
  expect(container).toMatchSnapshot()
})

test('MyComponent works fine :)', () => {
  render(<MyComponent />, container)

  const button = container.querySelector('button')
  if (!button) throw new Error('button not found')

  expect(button.textContent).toBe('0')
  act(() => {
    button.dispatchEvent(new MouseEvent('click', { bubbles: true }))
  })
  expect(button.textContent).toBe('1')
})
