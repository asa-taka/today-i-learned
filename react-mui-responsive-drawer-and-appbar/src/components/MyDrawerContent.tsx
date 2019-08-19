import React from 'react'
import {
  makeStyles,
  Toolbar,
  Avatar,
  ListSubheader,
  List,
  ListItem,
  ListItemIcon,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@material-ui/core'
import * as Icons from '@material-ui/icons'
import { sequence } from '../utils'

interface Props {
  length: number
  sets: number
}

const useStyles = makeStyles(({ palette, spacing: sp, mixins }) => ({
  root: {},
  header: mixins.toolbar,
  subheader: {
    backgroundColor: palette.background.paper,
  },
  item: {},
  footer: {
    padding: sp(2),
    textAlign: 'center',
    color: palette.text.secondary,
  },
}))

export default function MyContents(props: Props) {
  const { length, sets } = props
  const cls = useStyles()
  return (
    <div className={cls.root}>
      <Toolbar className={cls.header}>
        <Typography variant="h6">MyDrawerContent</Typography>
      </Toolbar>

      <List
        subheader={
          <ListSubheader className={cls.subheader} children={`User List`} />
        }
        dense
      >
        {sequence(length).map(i => (
          <ListItem key={i} className={cls.item} button dense>
            <ListItemAvatar>
              <Avatar>{i}</Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={`User ${i}`}
              secondary="September 14, 2016"
            />
          </ListItem>
        ))}
      </List>

      {sequence(sets).map(setI => (
        <List
          subheader={
            <ListSubheader
              className={cls.subheader}
              children={`User List #${setI}`}
            />
          }
          dense
        >
          {sequence(length).map(i => (
            <ListItem key={i} className={cls.item} button dense>
              <ListItemIcon>
                <Icons.Check />
              </ListItemIcon>
              <ListItemText
                primary={`User ${i}`}
                secondary="September 14, 2016"
              />
            </ListItem>
          ))}
        </List>
      ))}

      <div className={cls.footer}>
        <Typography variant="body2">Here list ends</Typography>
      </div>
    </div>
  )
}
