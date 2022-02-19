import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Dispatch } from "react"

export type InitState = {
  count: number
}

const initialState: InitState = {
  count: 0
}


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
  }
})

export const { increment, decrement, addByValue } = slice.actions

export const incrementAsync = (value: number) => (dispatch: Dispatch<any>) => {
  setTimeout(() => {
    dispatch(addByValue(value))
  }, 1500)
}

export default slice
