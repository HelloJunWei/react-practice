import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { UserServices } from "../services"

export const login = createAsyncThunk(
  'user/login',
  async ({ account, password }: { account: string, password: string }) => {
    const data = await UserServices.userLogin(account, password)
    return data
  }
)

const userSlice = createSlice({
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
  extraReducers(builder) {
    builder.addCase(login.fulfilled, (state, { payload}) => {
      state.token = payload.token
      state.email = payload.email
      state.displayName = payload.displayName
      state.isLoading = false
      state.isSuccess = true
    }),
    builder.addCase(login.pending, (state) => {
      state.isLoading = true
    })
    // builder.addCase(login.rejected, (state) => {
      // state.isLoading = true
    // })
  },
})
export const userSelector = (state: any) => state.user

export default userSlice
