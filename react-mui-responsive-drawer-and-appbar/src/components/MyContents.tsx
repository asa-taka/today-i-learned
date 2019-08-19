import React from 'react'
import {
  makeStyles,
  Avatar,
  IconButton,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Typography,
  Button,
} from '@material-ui/core'
import * as Icons from '@material-ui/icons'
import { sequence } from '../utils'

interface Props {
  length: number
}

const useStyles = makeStyles(({ spacing: sp }) => ({
  root: {},
  item: {
    '* + &': { marginTop: sp(2) },
  },
}))

export default function MyContents(props: Props) {
  const { length } = props
  const cls = useStyles()
  return (
    <div className={cls.root}>
      {sequence(length).map(i => (
        <Card key={i} className={cls.item}>
          <CardHeader
            avatar={<Avatar>{i}</Avatar>}
            action={
              <IconButton>
                <Icons.Check fontSize="small" />
              </IconButton>
            }
            title={`User ${i}`}
            subheader="September 14, 2016"
          />
          <CardContent>
            <Typography>This user is super crazy</Typography>
          </CardContent>
          <CardActions>
            <Button children="hire" />
          </CardActions>
        </Card>
      ))}
    </div>
  )
}
