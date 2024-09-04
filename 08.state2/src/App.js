
import './App.css';
import Controller from './component/Controller';
import Views from './component/Views';
import { useState, useEffect } from 'react';

function App() {

  let [count, setCount] = useState(0);
  let [text, setText] = useState(1);

  const onChangeInput = (e) => {
    setText(e.target.value);
  }

  const OnClickBtn = (value) => {
    setCount(count + value);
  }

  useEffect(() => {
    setText(count);
  }, OnClickBtn)

  return (
    <div className="App">
      <Views count={count}/>
      <input value={text} onChange={onChangeInput} readOnly/><br/>
      <Controller OnClickBtn={OnClickBtn}/>
    </div>
  );
}

export default App;
