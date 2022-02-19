import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const login = createAsyncThunk(
  'user/login',
  async ({ account, password }: { account: string, password: string }) => {
    console.log(account, password)
    await sleep(1500)
    return {
      token: 'token',
      email: 'test@email.com',
      displayName: 'Neil'
    }
  }
)

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    token: '',
    email: '',
    displayName: '',
    isLoading: false,
    isSuccess: false
  },
  // Reducer comes here
  reducers: {
  },
  extraReducers: {
    // @ts-ignore
    [login.fulfilled]: (state, { payload }) => {
      state.token = payload.token
      state.email = payload.email
      state.displayName = payload.displayName
      state.isLoading = false
      state.isSuccess = true
    },
    // @ts-ignore
    [login.pending]: (state) => {
      state.isLoading = true
    },
    // [login.rejected]: (state, { payload }) => {
      // state.token = payload.token
      // state.email = payload.email
      // state.displayName = payload.displayName
    // },
  },
})
export const userSelector = (state: any) => state.user


const sleep = async(ts: number): Promise<void>=> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, ts)
  })
}


