import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import { createContext, useState } from 'react';
import pList from './data/ProductList';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from './pages/Detail';
import axios from 'axios';

/*
	single page application의 단점
	- 컴포넌트 사이의 state 공유 어려움
	- props로 넘겨줘야함

	공유하는 파일을 하나 만들어줘서 props 대체로 사용 가능
		1. Context API (React 내부 Lib 사용)
			하지만 잘 사용하지 않음...
				- 성능적인 이슈가 있음
				- 재사용이 어려움
		2. Redux같은 외부 Lib 사용 (이쪽을 주로 사용)
*/

// 1. Context API
export let ctx1 = createContext();   // 보관함으로 사용할 변수 생성



function App() {
  let [clothes, setClothes] = useState(pList);

  let navigate = useNavigate();

  let[page, setPage] = useState(2);

  let [stock, setStock] = useState([15,20,4]);

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Fashion Shop</Navbar.Brand>
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
        <Route path='/detail/:index' element={
          <ctx1.Provider value={{stock, clothes}}>
            <Detail clothes={clothes} bg="green"/> 
          </ctx1.Provider>
        } />
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