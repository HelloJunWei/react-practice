import { configureStore } from '@reduxjs/toolkit'
import user from "./user"
import counter from "./counter"

export default configureStore({
  reducer: {
    counter: counter.reducer,
    user: user.reducer
  },
});
