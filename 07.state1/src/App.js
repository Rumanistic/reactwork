import './App.css';
import Counter from './component/Counter';
import LightOnOff from './component/Light-on-off';
import MemberEnroll from './component/Member-enroll.js';

function App() {
  return (
    <div className="App">
      <Counter />
      <hr />
      <LightOnOff />
      <hr />
      <MemberEnroll />
      <hr />
    </div>
  );
}

export default App;
