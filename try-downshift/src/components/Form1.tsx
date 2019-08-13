import React, { useEffect, useState } from 'react'
import { Formik, Form, FieldArray } from 'formik'
import SelectInput from './SelectInput'
import { getUser, IdType, User } from '../api'

function GetUser({ id }: { id: IdType }) {
  const [user, setUser] = useState<User>()
  const [error, setError] = useState<Error>()
  useEffect(() => {
    getUser(id).then(setUser).catch(setError)
  }, [id])
  if (error) return <>{error.toString()}</>
  if (!user) return <>loading...</>
  return <>{user.name}</>  
}

interface FormValues {
  userIds: IdType[]
}

export default function Form1() {
  return (
    <Formik<FormValues>
      onSubmit={console.log}
      initialValues={{ userIds: [] }}
    >
      {({ values: v }) => (
        <Form>
          <FieldArray name="userIds">
            {({ push, handleRemove }) => (
              <div>
                {v.userIds.map((uid, i) => (
                  <div key={uid}>
                    <GetUser key={uid} id={uid} />
                    <button onClick={handleRemove(i)}>x</button>
                  </div>
                ))}
                <SelectInput onSelect={push} exclude={v.userIds} />
              </div>
            )}
          </FieldArray>
        </Form>
      )}
    </Formik>
  )
}
