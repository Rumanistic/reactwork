import { useContext, useEffect, useState } from "react";
import { Container, Row, Col, Button, Nav } from "react-bootstrap";
import { Route, Routes, useNavigate, useParams } from "react-router-dom";
import './../App.css';
import { useDispatch, useSelector } from 'react-redux';
import { addCart } from './../store/cartSlice';
import Cart from './Cart';

function Detail (props) {
	let {index} = useParams();

	let findId = props.clothes.find(function(x) {
			return x.id == index;
	})

	let [tab, setTab] = useState(0);

	let dispatch = useDispatch();

	let navigate = useNavigate();

	let product = [{id: `${findId.id}`, title: `${findId.title}`, price: `${findId.price}`, count: 1}];
	return (
		<div>

			<Nav variant="tabs" defaultActiveKey="link-0">
				<Nav.Item>
					<Nav.Link onClick={()=>{setTab(0)}} eventKey="link-0">Option 0</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link onClick={()=>{setTab(1)}} eventKey="link-1">Option 1</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link onClick={()=>{setTab(2)}} eventKey="link-2">Option 2</Nav.Link>
				</Nav.Item>
   	  </Nav>

			<TabContent tab={tab} />

			<Container>
				<Row>
					<Col lg={6}>
						<img src={`${process.env.PUBLIC_URL}/img/clothes${findId.id+1}.png`} />
					</Col>    
					<Col lg={6}>
						<h4>{findId.title}</h4>
						<p>{findId.content}</p>
						<p>{findId.price}원</p>
						<Button variant="info" onClick={() => {
								console.log(product)
								let i = dispatch(addCart(product))
								let item = i.payload.find(item => item.id == findId.id)	
								if(item){
									navigate('/cart');
								}
							}}>주문하기</Button>
					</Col>
				</Row>
			</Container>
			<Routes>
				<Route path='/cart' element={<Cart/>} />
			</Routes>
		</div>
	)
}

function TabContent({tab}) {


	let [fade, setFade] = useState('')

	useEffect(() => {
			setTimeout(() => {setFade('end')},100)
			return () => {
					setFade('start')
			}
	}, [tab])

	return( 
			<div className={fade}>
					{<div>{[tab]}</div>}
			</div>
	)
}


export default Detail;