import './Controller.css';

const Controller = ({OnClickBtn}) => {
  return (
    <>
      <button className="minus" onClick={() => OnClickBtn(-1)} value="1">-1</button> &emsp; <button className="plus" onClick={() => OnClickBtn(1)} value="1">+1</button> <br/>
      <button className="minus" onClick={() => OnClickBtn(-10)} value="10">-10</button> &emsp; <button className="plus" onClick={() => OnClickBtn(10)} value="10">+10</button> <br/>
      <button className="minus" onClick={() => OnClickBtn(-100)} value="100">-100</button> &emsp; <button className="plus" onClick={() => OnClickBtn(100)} value="100">+100</button> <br/>
    </>
  )
}

export default Controller;