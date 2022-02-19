import { UserApi } from '../api/'
export const userLogin = async(account: string, password: string): Promise<{ token: string, displayName: string, email: string }> => {
  const result = await UserApi.login(account, password)
  return result
}
