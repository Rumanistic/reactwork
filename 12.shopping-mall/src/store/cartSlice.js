import {createSlice} from '@reduxjs/toolkit';

let cartList = createSlice({
  name: 'cartList',
  initialState: [
  ],
  reducers: {
    addCart(state, action){
      console.log(...action.payload);
      let [clothes] = action.payload;
      const item = state.find(item => item.id === clothes.id)
      if(!item){
        console.log(clothes)
        state.push(clothes);
        console.log(state);
        alert('주문목록에 상품이 추가되었습니다!');
      }
      else{
        console.log('is Exist');
        alert('해당 상품은 이미 주문목록에 있습니다!')
      }
    },
    incQty(state, action) {
      console.log(action.payload);
      const item = state.find(item => item.id === action.payload)
      // state.findIndex(i => i.id == action.payload)
      if(item){
        item.count += 1;
      }
    },
    decQty(state, action) {
      const item = state.find(item => item.id === action.payload)
      // state.findIndex(i => i.id == action.payload)
      if(item){
        if(item.count > 0)
          item.count -= 1;
        else
          alert('0미만으로는 제거하실 수 없습니다.');
      };
    },
    removeCart(state) {
      state.splice(0, state.length);
      alert('주문목록을 초기화하였습니다.');
    }
  }
})
export let {addCart, incQty, decQty, removeCart} = cartList.actions;
export default cartList;