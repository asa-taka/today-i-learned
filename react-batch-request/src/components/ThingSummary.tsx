import React, { useEffect, useState } from "react"
import api, { IdType, Thing } from "../api"
import batchApi from "../api-with-dataloader"

interface Props {
  id: IdType
  batch?: boolean
}

export default function ThingSummary(props: Props) {
  const { id, batch } = props
  const [thing, setThing] = useState<Thing | undefined>(undefined)

  useEffect(() => {
    if (batch) {
      batchApi.getThingById(id).then(setThing)
    } else {
      api.getThingById(id).then(setThing)
    }
  }, [])

  if (!thing) return <div>loading...</div>

  return (
    <div>
      #{thing.id}: {thing.name}
      {batch && " (batched!)"}
    </div>
  )
}
