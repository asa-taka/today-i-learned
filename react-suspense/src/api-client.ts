export interface SampleResponse {
  id: number
  user: string
}

export default function request(): Promise<SampleResponse> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ id: 42, user: 'asa-taka' })
    })
  })
}
