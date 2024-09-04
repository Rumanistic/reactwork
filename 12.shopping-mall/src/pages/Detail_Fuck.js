import { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

/*
	lifeCycle(생명주기)
	컴포넌트
	1. 생성 (mount)
	2. 재랜더링 (update)
	3. 소멸 (unmount)

	class Detail2 extends React.Component {
		componentDidMount() {
			Detail2 컴포넌트가 생성되고 나서 실행
		}
		componentDidUpdate() {
			Detail2 컴포넌트가 재랜더링 되고 나서 실행
		}
		componentDidUnmount() {
			Detail2 컴포넌트가 소멸되기 전에 실행
		}
	}
*/

function Detail (props) {
		let [i, setI] = useState(0);

    let {index} = useParams();

    let findId = props.clothes.find(function(x) {
        return x.id == index;
    })

		useEffect(() => {
			// mount, update 될 때 실행
			// LifeCycle hook 이라 칭함

			console.log('로드 되고 실행')
		}, [i]);

		const SetCnt = () => {
			for(i = 0; i < 1000; setI(i + 1)){
				console.log(i);
			}
		}

		let [count, setCount] = useState(0);

	return (
		<div>
			{count}
			<button onClick={SetCnt}>증가버튼</button>
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

export default Detail;