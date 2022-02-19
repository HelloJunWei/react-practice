const sleep = async(ts: number): Promise<void>=> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, ts)
  })
}

export const login = async (account: string, password: string) => {
  await sleep(1500)
  return {
    token: 'token',
    displayName: 'Neil',
    email: 'test@email.com'
  }

}
