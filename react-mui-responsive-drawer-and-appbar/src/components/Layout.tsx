import React, { ReactNode } from 'react'

export interface Props {
  header: ReactNode
  content: ReactNode 
}

export default function Layout(p: Props) {
  return (
    <div>
      <div>{p.header}</div>
      <div>{p.content}</div>
    </div>
  )
}
