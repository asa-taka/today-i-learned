import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(
  {
    root: {},
  },
  { name: 'MyOtherComponent' },
)

export default function MyOtherComponent() {
  const classes = useStyles({})
  return <div className={classes.root} />
}
