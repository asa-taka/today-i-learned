import React from 'react'
import { myFeature, WithMyFeature, MyFeatureProps } from './my-feature'

// Original: Provide feature by HOC
export function withFeatureFromHoc<P extends {}>(C: React.ComponentType<P & WithMyFeature>) {
  return (props: P) => <C feature={myFeature} {...props} />
}

// RenderProp ver.
export function FeatureFromHoc(props: MyFeatureProps) {
  return withFeatureFromHoc(({ feature }) => {
    return props.children(feature)
  })(props)
}

// Hook ver.
export function useFeatureFromHoc() {
  return null // I can't find the way, impossible?  
}
