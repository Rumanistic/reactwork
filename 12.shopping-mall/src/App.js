import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import pList from './data/ProductList';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from './pages/Detail';
import Cart from './pages/Cart';
import axios from 'axios';

/*
  장바구니 만들기
*/

function App() {
  let [clothes, setClothes] = useState(pList);

  let navigate = useNavigate();

  let[page, setPage] = useState(2);

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home" onClick={() => { navigate('/') }}>Fashion Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate('/') }}>Home</Nav.Link>
            <Nav.Link onClick={() => { navigate('/detail')}}>Detail</Nav.Link>
            <Nav.Link onClick={() => { navigate('/cart')}}>Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={
          <>
            <div className='main-bg'/>
            <Container>
              <Row>
                { 
                  clothes.map((p, i)=>{
                    return(
                      <>
                        <PListCol clothes={p} i={i+1} />
                      </>
                    )
                  })
                }
              </Row>
            </Container>
            <button onClick={() => {
              setPage(page + 1); 
              console.log(page);
              axios.get(`https://raw.githubusercontent.com/professorjiwon/data/main/data${page}.json`)
              .then(
                (result) => {
                  console.log([...result.data, ...clothes]);
                  setClothes([...result.data, ...clothes]);
                }
              )
              .catch(
                () => {console.log('에러 발생~');}
              )
            }}>새로운 제품!</button>
          </>
        }/>
        <Route path='/detail/:index' element={ <Detail clothes={clothes} bg="green"/> } />
        <Route path='/cart' element={<Cart/>} />
        <Route path='*' element={<div>없는 페이지 입니다.</div>} />
      </Routes>
    </div>
  );
  
  function PListCol(props) {
    return (
      <>
        <Col lg={4}  onClick={() => navigate(`/detail/${props.clothes.id}`)}>
          <img src={`${process.env.PUBLIC_URL}/img/clothes${props.i}.png`} />
          <h4>{props.clothes.title}</h4>
          <p>{props.clothes.price}</p>
        </Col>
      </>
    )
  }
}

export default App;