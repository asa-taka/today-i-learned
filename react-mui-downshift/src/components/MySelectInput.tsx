import React from 'react'
import Downshift from 'downshift'
import { Paper, MenuItem, TextField, makeStyles } from '@material-ui/core'

interface Props<Item> {
  items: Item[]
  itemToString: (item: Item | null) => string
  onChange?: (item: Item | null) => void
}

const useStyles = makeStyles(
  {
    root: {},
    menu: {},
  },
  { name: 'MySelectInput' },
)

export default function MySelectInput<Item>(props: Props<Item>) {
  const { items, ...downshiftProps } = props
  const classes = useStyles()
  return (
    <Downshift {...downshiftProps}>
      {({
        isOpen,
        getInputProps,
        getMenuProps,
        getItemProps,
        itemToString,
        inputValue,
        highlightedIndex,
      }) => {
        const itemsToUse = inputValue
          ? items.filter(e => itemToString(e).includes(inputValue))
          : items
        return (
          <div className={classes.root}>
            <TextField {...getInputProps()} fullWidth />
            {isOpen && (
              <div className={classes.menu} {...getMenuProps()}>
                <Paper open={isOpen} {...getMenuProps()}>
                  {itemsToUse.map((item, index) => (
                    <MenuItem
                      key={index}
                      children={itemToString(item)}
                      selected={index === highlightedIndex}
                      {...getItemProps({ item, index })}
                    />
                  ))}
                </Paper>
              </div>
            )}
          </div>
        )
      }}
    </Downshift>
  )
}
