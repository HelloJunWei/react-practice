import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Dispatch } from "react"

export type InitState = {
  count: number
}

const initialState: InitState = {
  count: 0
}

export const incrementAsync2 = createAsyncThunk('counter/addAsync', async(value: number) => {
  await sleep(1000)
  return { value }
})

const slice = createSlice({
  name: 'index',
  initialState, 
  reducers: {
    increment: state => {
      state.count += 1
    },
    decrement: state => {
      state.count -= 1
    },
    addByValue: (state, action: PayloadAction<number>) => {
      state.count += action.payload
    }
  },
  extraReducers (builder) {
    builder.addCase(incrementAsync2.fulfilled, (state, { payload }) => {
      state.count += payload.value
    })

  }
})

export const { increment, decrement, addByValue } = slice.actions

export const incrementAsync = (value: number) => (dispatch: Dispatch<any>) => {
  setTimeout(() => {
    dispatch(addByValue(value))
  }, 1500)
}

const sleep = async(ms: number): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, ms)
  })
}

export default slice
