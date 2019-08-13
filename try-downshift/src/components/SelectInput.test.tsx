import React from 'react'
import { render, getByText, fireEvent, wait, waitForElement, waitForElementToBeRemoved } from '@testing-library/react'
import SelectInput from './SelectInput'

function setup() {
  const props = {
    onSelect: jest.fn()
  }
  const helpers = render(<SelectInput {...props} />)
  const { container } = helpers
  const getInput = () => container.querySelector('input')
  const getMenu = () => container.querySelector('[role="listbox"]') as HTMLElement
  const getMenuItem = (text: string) => getByText(getMenu(), text)
  return {
    ...helpers,
    props,
    getInput,
    getMenu,
    getMenuItem,
  }
}

describe('SelectInput', () => {
  it('renders without crush', async () => {
    const { container } = setup()
    expect(container).toMatchSnapshot()
  })

  it('shows menu on focus', async () => {
    const { container, getInput, getMenu } = setup()
    getInput().focus()
    await wait(() => {
      expect(getMenu()).toBeDefined()
    })
    expect(container).toMatchSnapshot()
  })

  it('queries by input value', async () => {
    const { container, getInput, getMenuItem } = setup()
    getInput().focus()
    fireEvent.change(getInput(), { target: { value: 'alice' }})
    await waitForElement(() => getMenuItem('alice'))
    expect(container).toMatchSnapshot()
  })

  it('fires `onSelect` once for each user-lick', async () => {
    const { container, props, getInput, getMenu, getMenuItem } = setup()
    getInput().focus()
    await waitForElement(() => getMenuItem('alice'))
    fireEvent.click(getMenuItem('alice'))
    expect(props.onSelect.mock.calls.length).toBe(1)
    expect(container).toMatchSnapshot()
  })
})
