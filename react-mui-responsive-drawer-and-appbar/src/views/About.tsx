import React from 'react'
import { RouteComponentProps } from 'react-router-dom'

import { Layout } from '../components'

interface PathParams {}

export default function About(props: RouteComponentProps<PathParams>) {
  return (
    <Layout
      header="About"
      content={
        <div>This is about page</div>
      }
    />
  )
}
