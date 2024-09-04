import { useState } from 'react';

const MemberEnroll = () => {
  const [input, setInput] = useState({
    name: '',
    birth: '', 
    address: '', 
    introduce: ''
  });

  const InputOnChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })

    console.log([e.target.name] + ":" + e.target.value);
  }

  return (
    <>
      <h1>Enroll</h1>
      Name: <input name="name" onChange={InputOnChange}/> <br/><br/>
      Birth: <input type="date" name="birth" onChange={InputOnChange}/> <br/><br/>
      Address: 
        <select name="address" onChange={InputOnChange}>
          <option value="">선택</option>
          <option value="seoul">서울</option>
          <option value="daegu">대구</option>
          <option value="busan">부산</option>
        </select>
         <br/><br/>
      Introduce: <input name="introduce" onChange={InputOnChange}/> <br/><br/>
    </>
  );
}

export default MemberEnroll;