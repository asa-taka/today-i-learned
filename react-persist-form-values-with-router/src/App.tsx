import React, { useMemo, useCallback } from 'react'
import {
  HashRouter,
  Route,
  RouteComponentProps,
  Link
} from 'react-router-dom'
import { Formik, Form, Field } from 'formik'
import useLocalStorage from './useLocalStorage'

interface FormValue {
  title: string
  body: string
}

const createInitialValue = () => ({ title: '', body: '' })

const FormView: React.FC<RouteComponentProps<{ id: string }>> = props => {
  const { id } = props.match.params
  const formKey = `FormView:${id}`
  const initialValues = useMemo(createInitialValue, [])
  const [values, persistValues, clearValues] = useLocalStorage(
    formKey,
    initialValues
  )

  const fakelyValidateToHandleChange = useCallback(
    (v: FormValue) => {
      persistValues(v)
      return Promise.resolve()
    },
    [persistValues]
  )

  return (
    <Formik
      initialValues={values}
      onSubmit={clearValues}
      validate={fakelyValidateToHandleChange}
      validateOnChange
      enableReinitialize
    >
      {() => (
        <Form>
          <Field name="title" component="input" />
          <Field name="body" component="textarea" />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  )
}

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="App">
        <div>
          <Link to="/form/1">form1</Link>
          <Link to="/form/2">form2</Link>
          <Link to="/form/3">form3</Link>
        </div>
        <Route path="/form/:id" component={FormView} />
      </div>
    </HashRouter>
  )
}

export default App
