import { Fragment, useState, useEffect } from 'react';
import './App.css';

function App() {
  const [hr, setHr] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const [time, setTime] = useState(0);
  setInterval(() => {
    time++;
    sec = time % 60;
    min = time / 60 % 60;
    hr = time / 60 / 60 % 24;
  }, 1000);


  return (
    <Fragment>
      <div className="App">
        <header className="App-header">
          <h1>Timer!</h1>
          <p>{hr} : {min} : {sec}</p>
        </header>
      </div>
    </Fragment>
  );
}
export default App;
