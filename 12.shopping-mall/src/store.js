import { configureStore, createSlice } from '@reduxjs/toolkit'
import user1 from './store/userSlice';
import cartList from './store/cartSlice';

export default configureStore({
  reducer: {
    user1: user1.reducer,
    cartList: cartList.reducer
  }
})