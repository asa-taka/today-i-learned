import React from 'react'
import { WithMyFeature } from '../features/my-feature'
import { withFeatureFromHoc, FeatureFromHoc, useFeatureFromHoc } from '../features/hoc'
import { withFeatureFromRenderProp, FeatureFromRenderProp, useFeatureFromRenderProp } from '../features/render-prop'
import { withFeatureFromHook, FeatureFromHook, useFeatureFromHook } from '../features/hook'

interface OwnProps {
  title: string,
}

export function FeatureConsumer(props: OwnProps & WithMyFeature) {
  const { title, feature } = props
  return <div>{title} provides the feature → {feature.foo}</div>
}

export const C1 = withFeatureFromHoc(FeatureConsumer)
export const C2 = (props: OwnProps) => (
  <FeatureFromHoc>
    {feature => <FeatureConsumer feature={feature} {...props} />}
  </FeatureFromHoc>
)
// export const C3 = (props: OwnProps) => (
//   <FeatureConsumer feature={useFeatureFromHoc()} {...props} />
// )

export const C4 = withFeatureFromRenderProp(FeatureConsumer)
export const C5 = (props: OwnProps) => (
  <FeatureFromRenderProp>
    {feature => <FeatureConsumer feature={feature} {...props} />}
  </FeatureFromRenderProp>
)
// export const C6 = (props: OwnProps) => (
//   <FeatureConsumer feature={useFeatureFromRenderProp()} {...props} />
// )

export const C7 = withFeatureFromHook(FeatureConsumer)
export const C8 = (props: OwnProps) => (
  <FeatureFromHook>
    {feature => <FeatureConsumer feature={feature} {...props} />}
  </FeatureFromHook>
)
export const C9 = (props: OwnProps) => (
  <FeatureConsumer feature={useFeatureFromHook()} {...props} />
)

export function DisplayAllPossibleVariations() {
  return (
    <>
      <h1>The Original Feature is...</h1>
      <h2>Provided as <em>HOC</em></h2>
      <C1 title="HOC: withFeatureFromHoc" />
      <C2 title="RenderProp: FeatureFromHoc" />
      {/* <C3 title="useFeatureFromHoc" /> */}

      <h2>Provided as <em>RenderProp</em></h2>
      <C4 title="HOC: withFeatureFromRenderProp" />
      <C5 title="RenderProp: FeatureFromRenderProp" />
      {/* <C6 title="useFeatureFromRenderProp" /> */}

      <h2>Provided as <em>Hook</em></h2>
      <C7 title="HOC: withFeatureFromHook" />
      <C8 title="RenderProp: FeatureFromHook" />
      <C9 title="Hook: useFeatureFromHook" />
    </>
  )
}
