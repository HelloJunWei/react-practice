import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"

export const login = createAsyncThunk(
  'user/login',
  async ({ account, password }: { account: string, password: string }) => {
  }
)

type UpdateTokenType = {
  token: string
}

const userSlice = createSlice({
  name: 'user',
  initialState: {
    token: '',
    firebaseToken: '',
    displayName: '',
    photoUrl: ''
  },
  reducers: {
    updateToken: {
      reducer(state, action: PayloadAction<UpdateTokenType>) {
        state.token = action.payload.token
      },
      prepare(token: string) {
        return {
          payload: {
            token
          }
        }
      }
    }
  }
})

export const selector = (state: {
  user: {
    token: string,
    firebaseToken: string,
    displayName: string,
    photoUrl: string
  }
}) => state.user
export const { updateToken } = userSlice.actions
export default userSlice
