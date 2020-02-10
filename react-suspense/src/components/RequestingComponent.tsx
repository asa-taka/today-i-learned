import React, { useEffect, useState } from 'react'
import apiRequest, { SampleResponse } from '../api-client'

export default function RequestingComponent() {

  const [request, setRequest] = useState<Promise<SampleResponse>>(apiRequest())

  

  return (

  )
}
