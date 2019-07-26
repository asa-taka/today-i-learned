export interface MyFeature {
  foo: string
}

export const myFeature: MyFeature = {
  foo: 'Yes!'
}

// For RenderProp ver.
export interface MyFeatureProps {
  children: (feature: MyFeature) => JSX.Element
}

// For HOC ver.
export type WithMyFeature = { feature: MyFeature }
