import {createSlice} from '@reduxjs/toolkit';

let user1 = createSlice({
  name: 'user1',
  initialState: {name: 'kim'},
  reducers: {
    changeName(state) {
      state.name = 'park'
    }
  }
})
export let {changeName} = user1.actions;
export default user1;