import React, { useMemo } from 'react'
import { myFeature, MyFeatureProps, WithMyFeature } from './my-feature'

// Original: Provide feature by hook
export function useFeatureFromHook() {
  return useMemo(() => myFeature, [])
}

// HOC ver.
export function withFeatureFromHook<P extends {}>(C: React.ComponentType<P & WithMyFeature>) {
  return (props: P) => {
    const feature = useFeatureFromHook()
    return <C feature={feature} {...props} />
  }
}

// RenderProp ver.
export function FeatureFromHook(props: MyFeatureProps) {
  const feature = useFeatureFromHook()
  return props.children(feature)
}
