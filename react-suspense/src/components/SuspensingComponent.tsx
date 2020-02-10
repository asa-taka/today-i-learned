import { Suspense } from 'react'
import RequestingComponent from './RequestingComponent'

export default function SuspensingComponent() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RequestingComponent />
    </Suspense>
  )
}
