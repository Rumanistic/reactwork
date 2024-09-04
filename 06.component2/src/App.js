import './App.css';
import MyHeader from './MyHeader.js';
import MyFooter from './MyFooter';
import Compo1 from './components/Compo.js';
import Assign from './assignments/Assignments.js';

function App() {
  return (
    <div className="App">
      <MyHeader />
      <section>
        <ul>
          <li>a</li>
          <li>b</li>
          <li>c</li>
          <li>d</li>
          <li>e</li>
        </ul>
      </section>
      <MyFooter />
    </div>
  );
}

export default App;
