import React, { useState, useEffect } from 'react'
import Downshift, { ControllerStateAndHelpers as Controller } from 'downshift'
import { User, IdType, queryUsers } from '../api'
import './SelectInput.css'

interface Props {
  onSelect: (id: IdType) => void
  exclude?: IdType[]
}

export default function SelectInput(props: Props) {
  const { onSelect, exclude } = props
  const [items, setItems] = useState<User[]>([])

  useEffect(() => {
    queryUsers('').then(setItems)
  }, [])

  const handleSelect = (user: User, ctrl: Controller<User>) => {
    if (onSelect && user) onSelect(user.id)
    ctrl.clearSelection()
    ctrl.openMenu()
  }

  const handleInputValueChange = (input: string) => {
    queryUsers(input).then(setItems)
  }

  const itemsToUse = exclude ? items.filter(e => !exclude.includes(e.id)) : items

  return (
    <Downshift
      onChange={handleSelect}
      onInputValueChange={handleInputValueChange}
      itemToString={e => e.name}
    >
      {({
        getInputProps,
        getItemProps,
        getMenuProps,
        isOpen,
        openMenu,
      }) => (
        <div className="SelectInput-root">
          <input className="SelectInput-input" {...getInputProps()} onFocus={() => openMenu()} />
          {isOpen && (
            <div className="SelectInput-menu" {...getMenuProps()}>
              {itemsToUse.map((item, index) => (
                <div className="SelectInput-menuItem" key={item.id} {...getItemProps({ item, index })}>
                  {item.name}
                </div>
              ))}
            </div>
          )}
          <button className="SelectInput-submit" type="submit">submit</button>
        </div>
      )}
    </Downshift>
  )
}
