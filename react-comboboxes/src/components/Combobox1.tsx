import React from 'react'

import { useCombobox } from 'downshift'

interface Props<Item> {
  items: Item[]
  itemToString: (item: Item | null) => string
}

export default function Combobox1<Item>(props: Props<Item>) {
  const { items, itemToString } = props
  const {
    getComboboxProps,
    getInputProps,
    getMenuProps,
    getItemProps,
  } = useCombobox({
    items,
    itemToString,
  })

  return (
    <div {...getComboboxProps}> 
      <input {...getInputProps} />
    </div>
  )
}
