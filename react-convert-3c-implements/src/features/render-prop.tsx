import React from 'react'
import { myFeature, MyFeatureProps, WithMyFeature } from './my-feature'

// Original: Provide feature by RenderProp
export function FeatureFromRenderProp(props: MyFeatureProps) {
  return props.children(myFeature)
}

// HOC ver.
export function withFeatureFromRenderProp<P extends {}>(C: React.ComponentType<P & WithMyFeature>) {
  return (props: P) => (
    <FeatureFromRenderProp>
      {feature => <C feature={feature} {...props} />}
    </FeatureFromRenderProp>
  )
}

// Hook ver.
export function useFeatureFromRenderProp() {
  return null // I can't find the way, impossible?
}
