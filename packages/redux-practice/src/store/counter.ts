import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Dispatch } from "react"

export type InitState = {
  count: number
}

const initialState: InitState = {
  count: 0
}

export const incrementAsync = createAsyncThunk('counter/addAsync', async(value: number) => {
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
    builder.addCase(incrementAsync.fulfilled, (state, { payload }) => {
      state.count += payload.value
    })

  }
})

export const { increment, decrement, addByValue } = slice.actions

export const incrementAsyncThunk = (value: number) => async(dispatch: Dispatch<any>) => {
  await sleep(1500)
  dispatch(addByValue(value))
}

const sleep = async(ms: number): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, ms)
  })
}


/*
 *  thunk function 一種寫 function 的思維
    const add5 = (x) => {
      return x + 5;
    }

    const thunk => (value) => (add5) {
      return add5(value) * 2;
    }

    thunk(1)(add5)
 */


export default slice
