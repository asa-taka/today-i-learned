import { useState, useCallback } from 'react'

export function useBoolean(initialValue = false) {
  const [value, setValue] = useState(initialValue)
  const setTrue = useCallback(() => setValue(true), [setValue])
  const setFalse = useCallback(() => setValue(false), [setValue])
  return [value, setTrue, setFalse] as const
}

export function sequence(n: number) {
  return Array(n).fill('').map((_, i) => i)
}
