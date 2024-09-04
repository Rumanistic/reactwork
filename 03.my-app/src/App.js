import './App.css';

function App() {

  // 변수나 함수 정의해서 사용
  // 사용할 때는 {} 안에 넣어서 사용
  const name = '더조은';
  let cname = '의료용 영상';
  var value = '변수들';

  const func1 = () => {
    return '함수에서 문자 반환';
  }

  return (
    <div className="App">
      <ul>중괄호 안에 넣을 수 있는 것들
        <li>변수 : {name}</li>
        <li>{cname}</li>
        <li>{value}</li>
        <li>정의된 함수 : {func1()}</li>
        <li>익명 함수 : {(() => {
          return '여기서도 출력이 된다고?'
        })()}</li>
      </ul>
      <ul>못넣는 것들
        <li>Boolean {true}</li>
        <li>Array: {['a', 'b', 'c']}</li>
      </ul>
    </div>
  );
}

export default App;
