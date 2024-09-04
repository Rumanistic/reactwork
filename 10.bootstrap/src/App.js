import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <section>
        <img src={logo} className="App-logo" alt="logo" />
      </section>
      <Footer />
    </div>
  );
}

export default App;
