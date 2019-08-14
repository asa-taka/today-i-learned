import React from 'react'
import ReactDOM from 'react-dom'
import { resetIdCounter } from 'downshift'
import { StylesProvider } from '@material-ui/styles'
import { GenerateId } from 'jss'

import MySelectInput from './MySelectInput'
import MyOtherComponent from './MyOtherComponent'

// Common Props
// ------------

interface SimpleItem {
  id: number
  name: string
}

const items: SimpleItem[] = [
  { id: 1, name: 'item-1' },
  { id: 2, name: 'item-2' },
]

const itemToString = (item: SimpleItem | null) => (item ? item.name : '')

// Test Container
// --------------

let container: HTMLDivElement

beforeEach(() => {
  document.body.innerHTML = ''
  container = document.createElement('div')
  document.body.appendChild(container)

  // Reset Downshift module-internal state
  resetIdCounter()
})

// Test Styles
// -----------

// Generate class name without rule index
const generateTestClassName: GenerateId = (rule, sheet) => {
  return `${sheet!.options.classNamePrefix}-${rule.key}`
}

const provideTestStyles = (el: React.ReactElement) => (
  <StylesProvider generateClassName={generateTestClassName} children={el} />
)

// Tests
// -----

describe('MySelectInput with MyOtherComponent', () => {
  it('renders without crush', async () => {
    // throw new Error('Something occurred!')
    ReactDOM.render(provideTestStyles(
      <>
        <MySelectInput items={items} itemToString={itemToString} />
        <MyOtherComponent />
      </>,
    ), container)
    expect(container).toMatchSnapshot()
  })

  it('renders without crush in reverse order', async () => {
    ReactDOM.render(provideTestStyles(
      <>
        <MyOtherComponent />
        <MySelectInput items={items} itemToString={itemToString} />
      </>,
    ), container)
    expect(container).toMatchSnapshot()
  })
})
