import React, { useEffect, useState } from "react"
import api, { IdType, User } from "../api"
import batchApi from "../api-with-dataloader"
import ThingSummary from "./ThingSummary"

interface Props {
  id: IdType
  batch?: boolean
}

export default function UserSummary(props: Props) {
  const { id, batch } = props
  const [user, setUser] = useState<User | undefined>(undefined)

  useEffect(() => {
    if (batch) {
      batchApi.getUserById(id).then(setUser)
    } else {
      api.getUserById(id).then(setUser)
    }
  }, [])

  if (!user) return <div>loading...</div>

  return (
    <div>
      <h3>
        #{user.id}: {user.name}
        {batch && " (batched!)"}
      </h3>
      <ul>
        {user.favoriteThingIds.map(id => (
          <ThingSummary id={id} batch={batch} />
        ))}
      </ul>
    </div>
  )
}
