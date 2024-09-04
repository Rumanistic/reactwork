import { Container, Row, Col, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import styled from 'styled-components';

let YellowBtn = styled.button `
  background: yellow;
  color: green;
  padding: 10px;
`;

let BlueBtn = styled.button `
  background: blue;
  color: yellow;
  padding: 10px;
`;

let BtnProps = styled.button `
  color: yellow;
  padding: 10px;
`;

function Detail (props) {

  let {index} = useParams();

  let findId = props.clothes.find(function(x) {
    return x.id == index;
  })
  console.log(typeof(findId));   
  console.log(findId.id);

  return (
    <div>
      <BlueBtn>파랑</BlueBtn>
      <YellowBtn>노랑</YellowBtn>
      <BtnProps bg='green'>옵션</BtnProps>
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