import { configureStore } from '@reduxjs/toolkit'
import { cartSlice } from './cartSlice'

export const store = configureStore({
  reducer: {
    cartItemSlice: cartSlice.reducer
  },
})