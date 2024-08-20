import { Fragment } from 'react';
import './App.css';

function App() {
  let min = 0;
  let hr = 0;
  let sec = 0;
  let time = 0;
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
