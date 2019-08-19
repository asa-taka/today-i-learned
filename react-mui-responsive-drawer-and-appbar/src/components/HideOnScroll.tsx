import React from 'react'
import { useScrollTrigger, Slide } from '@material-ui/core'

interface Props {
  children: React.ReactElement
}

export default function HideOnScroll(props: Props) {
  const { children } = props
  const trigger = useScrollTrigger()
  return (
    <Slide appear={false} direction="down" in={!trigger} children={children} />
  )
}
