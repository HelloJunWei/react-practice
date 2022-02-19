import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { configureStore } from '@reduxjs/toolkit'
import { Dispatch } from "react"
import { userSlice } from "./user"

export type InitState = {
  count: number
}

const initialState: InitState = {
  count: 0
}


export const slice = createSlice({
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



export default configureStore({
  reducer: {
    counter: slice.reducer,
    user: userSlice.reducer
  },
});
