import { useEffect, useState } from "react";
import { Container, Row, Col, Button, Nav } from "react-bootstrap";
import { useParams } from "react-router-dom";
import './../App.css';

/*
	탭 만들기
*/

/*
	애니메이션 만들기
		1) 애니메이션 동작 전 스타일을 담을 className 설정
		2) 애니메이션 동작 후 스타일을 담을 className 설정
		3) transition으로 ?초 동안 변하게
		4) 원할 때 동작 전 className으로 변경하고 동작 후 className으로 변하게 반복
*/

function Detail (props) {
    let {index} = useParams();

    let findId = props.clothes.find(function(x) {
        return x.id == index;
    })

		let [aniImg, setAniImg] = useState(0);
		let [aniTxt, setAniTxt] = useState(0);
		let [aniBtn, setAniBtn] = useState(0);

		function TabContent({tab}) {
			switch(tab){
				case 0:
					let [fade, setFade] = useState('');
		
					useEffect(() => {
						setTimeout(() => {setFade('end')}, 200);
						return () => {
							setFade('start');
						}
					}, [tab])
				
					return (
						<Row>
							<Col lg={6}>
								<img src={`${process.env.PUBLIC_URL}/img/clothes${findId.id+1}.png`} className={fade}/>
							</Col>    
							<Col lg={6}>
								<h4>{findId.title}</h4>
								<p>{findId.content}</p>
								<p>{findId.price}원</p>
								<Button variant="info">주문하기</Button>
							</Col>
						</Row>
					);
				case 1:

					return <div>내용 1</div>;
				case 2:
					
					return <div>내용 2</div>;
			}
			
		
			
		}

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

			{/* 삼항연산자 사용 */}
			{/* {{tab == 0 ? <div>내용 0</div> : (tab == 1 ? <div>내용 1</div> : <div>내용 2</div>)}} */}
			{/* component 사용 */}
			{/* {<TabContent tab={tab}/>} */}

			<Container>
				<TabContent tab={tab} />
			</Container>

		</div>
	)
}
export default Detail;