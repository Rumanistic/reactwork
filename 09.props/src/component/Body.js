// const Body = (props) => {
  /*
  // 1. 변수에 담긴 값 사용하기
  return (
    <body>
      body 영역입니다
      <p>{props.addr}</p>
    </body>
  )
}

export default Body;
  */

import BtnClk from "./BtnClk";

  /*
  // 2.1. 객체 형태로 사용하기
  
  return (
    <>
      body 영역입니다
      <p>{props.userInfo.name}</p>
      <p>{props.userInfo.address}</p>
      <p>{props.userInfo.likeList}</p>
      <p>{props.userInfo.likeList.length}</p>
      <p>{props.userInfo.likeList[2]}</p>
    </>
  )
}

export default Body;
  */

  /*
  // 2.2. 객체 분해할당 사용
const Body = ({name, address, likeList}) => {
  return (
    <>
      body 영역입니다
      <p>{name}</p>
      <p>{address}</p>
      <p>{likeList}</p>
    </>
  )
}

export default Body;
*/

const Body = () => {

  const BtnClick = (e) => {
    alert("??????")
    console.log(e);
  }

  const btnProps = {
    text: "사용자 지정 버튼",
    color: "hotpink",
    event: BtnClick
  }

  return (
    <>
      <button onClick={BtnClick} name="A">A event button</button>
      <button onClick={BtnClick} name="B">B event button</button>
      <BtnClk {...btnProps}></BtnClk>
    </>
  );
}

export default Body;