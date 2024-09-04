import logo from './logo.gif';
import './Header.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function Login() {
    return (
      <div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <div className="div-login-container">
                  <Form.Label>ID</Form.Label>
                  <Form.Control type="email" placeholder="name@example.com" />
                </div>
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <div className="div-login-container">
                  <Form.Label>PWD</Form.Label>
                  <Form.Control type="password" />
                </div>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="success" onClick={handleClose}>
              Log In!
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }

  return (
    <header>
      <div className="div-header-container">
        <span className="span-img-container">
          <img src={logo} />
        </span>
        <span className="span-hn-container">
          <h2>THE JOEUN 컴퓨터 아카데미</h2>
        </span>
        <span className="span-btn-container">
          <Button variant="primary" size="sm">회원가입</Button>&emsp;
          <Button variant="success" size="sm" onClick={handleShow}>로그인</Button>
        </span>
      </div>
      {/*
        *
        * div 아래부분에 Modal은 숨어져 있는 상태.
        * 1. 로그인 버튼을 클릭하면 show의 상태를 true로 바꿈
        * 2. 그럼 Login 으로 생성한 Modal을 보여주게 됨
        * 3. Login이라는 이름을 갖는 함수를 호출, Modal창을 보여줌
        * 
        */}
      <Login show={show} />
    </header>
  );
}

export default Header;


