import { useContext, useEffect, useState } from "react";
import { Container, Row, Col, Button, Nav } from "react-bootstrap";
import { useParams } from "react-router-dom";
import './../App.css';
import {ctx1} from './../App.js';

function Detail (props) {
    let {index} = useParams();

    let findId = props.clothes.find(function(x) {
        return x.id == index;
    })

		let [tab, setTab] = useState(0);

		// useContext(): context를 해체
		// let a = useContext(ctx1);

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
						<Button variant="info">주문하기</Button>
					</Col>
				</Row>
			</Container>

		</div>
	)
}

function TabContent({tab}) {

	let {stock} = useContext(ctx1);

	let [fade, setFade] = useState('')

	useEffect(() => {
			setTimeout(() => {setFade('end')},100)
			return () => {
					setFade('start')
			}
	}, [tab])

	return( 
			<div className={fade}>
					{<div>{stock[tab]}</div>}
			</div>
	)
}


export default Detail;