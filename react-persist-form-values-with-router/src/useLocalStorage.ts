import { useState, useEffect, useCallback } from 'react'

function getPersistedValue<V>(key: string, defaultValue: V) {
  const v = window.localStorage.getItem(key)
  if (!v) return defaultValue
  try {
    return JSON.parse(v) as V
  } catch (err) {
    console.warn(err)
    return defaultValue
  }
}

function persistValue<V>(key: string, value: V) {
  try {
    const v = JSON.stringify(value)
    window.localStorage.setItem(key, v)
  } catch (err) {
    console.warn(err)
  }
}

export default function useLocalStorage<V>(key: string, initialValue: V) {
  const [value, setValue] = useState(() => getPersistedValue(key, initialValue))

  useEffect(() => {
    setValue(getPersistedValue(key, initialValue))
  }, [key, setValue, initialValue])

  const setValuePersistently = useCallback(
    (v: V) => {
      console.log(v)
      persistValue(key, v)
      setValue(v)
    },
    [key, setValue]
  )

  const clearValue = useCallback(() => {
    setValuePersistently(initialValue)
  }, [setValuePersistently, initialValue])

  return [value, setValuePersistently, clearValue] as const
}
