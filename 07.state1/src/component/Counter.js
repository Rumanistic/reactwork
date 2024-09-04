import {useState} from 'react';

function Counter() {

  let [count, setCount] = useState(1);

  const CountPlus = () => {
    setCount(count + 1);
    console.log(count + " | " + setCount);
  }

  const CountMinus = () => {
    setCount(count - 1);
    console.log(count + " | " + setCount);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onMouseEnter={CountPlus}>+</button>&emsp;
      <button onMouseEnter={CountMinus}>-</button>
    </div>
  );
}

export default Counter;