import { Table } from 'react-bootstrap';

import { useDispatch, useSelector } from 'react-redux';
import { incQty, decQty, removeCart } from './../store/cartSlice';



function Cart() {
  let dispatch = useDispatch();

  let cList = useSelector(state => state.cartList);

  let qty = 0;
  let totPrice = 0;
  cList.forEach((c, i) => {
    qty += c.count;
    totPrice += (c.price * c.count);
  })

  return (
    <div>
      <h2>CART LIST</h2>
      <TestSList/>
      <Table striped bordered>
        <thead>
          <tr>
            <th>#</th>
            <th>Order</th>
            <th>Qty.</th>
            <th>Price</th>
            <th>changeQty</th>
          </tr>
        </thead>
        <tbody>
          { 
            cList.map((c, i)=>{
              return(
                <>
                  <CList c={c} i={i+1} />
                </>
              )
            })
          }
          <tr>
            <td colSpan={2}>Total</td>
            <td>{qty}</td>
            <td>{totPrice}</td>
            <button onClick={() => {dispatch(removeCart())}}>초기화</button>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

function CList({c, i}) {
  let dispatch = useDispatch();
  return (
    <tr>
      <td>{i}</td>
      <td>{c.title}</td>
      <td>{c.count}</td>
      <td>{c.price * c.count}</td>
      <td><button onClick={() => {dispatch(incQty(c.id))}}>+</button> &emsp; <button onClick={() => {dispatch(decQty(c.id))}}>-</button></td>
    </tr>
  );
}

function TestSList() {
  let List = useSelector(state => state);
  console.log(List.List)
}
export default Cart;

