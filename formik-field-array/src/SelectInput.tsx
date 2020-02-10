import React from 'react'
import Downshift from 'downshift'

interface Props {

}

interface Item {
  name: string,
  age: number,
}

const items: Item[] = [
  { name: 'alice', age: 12 },
  { name: 'bob', age: 23 },
  { name: 'carol', age: 31 },
]

export default function SelectInput() {
  const onChange = (item: Item) => {
    console.log(item)
  }
  const itemToString = (item: Item) => item.name
  return (
    <Downshift>
      {({
        getInputProps,
        getItemProps,
        getLabelProps,
        getMenuProps,
        isOpen,
        inputValue,
        highlightedIndex,
        selectedItem,
      }) => (
        <div>
          <label {...getLabelProps()}>Enter a fruit</label>
          <input {...getInputProps()} />
          <ul {...getInputProps()}>
            {isOpen && items.map((item, index) => (
              <li {...getItemProps({
                key: item.name,
                index,
                item,
              })} />
            ))}
          </ul>
        </div>
      )}
    </Downshift>
  )
}
