import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Body from './component/Body';
import Footer from './component/Footer';



function App() {

  const addr = '서초구 강남대로';

  return (
    <>
      <Header />
      <section>
        {/*<Body addr={addr}/></>*/}
        <Body />
      </section>
      <Footer />
    </>
  );
}
export default App;
