import { Fragment, useState, useEffect } from 'react';

function Timer() {
  
  let [hr, setHr] = useState(0);
  let [min, setMin] = useState(0);
  let [sec, setSec] = useState(0);
  let [time, setTime] = useState(0);
  
  // 기준이 될 time을 변경하는 effect 훅
  useEffect(() => {
    let interval = setInterval(() => {
      // 1초 단위로 증가하는 time을 변경시키는 setTime(useState를 사용)
      setTime(prevTime => prevTime + 1);
    }, 1000);

    return () => clearInterval(interval);
    // 의존성이 없다 -> 웹페이지를 시작할 때 실행되고, 해당 훅이 다시 실행될 경우를 없앤다?

  }, []);

  // 시 분 초를 계산할 effect 훅
  useEffect(() => {
    setSec(time % 60);
    setMin(Math.floor(time / 60) % 60);
    setHr(Math.floor(time / 3600) % 60);
    // 의존성 time(1초마다 변경됨)에 따라서 해당 훅이 실행됨.
    // 훅이 실행될 때 마다 아래 retrun을 실행해서 화면에 갱신되는것처럼 표현됨
  }, [time])

  return (
    <header align="center">
      <p>{hr.toString().padStart(2, '0')} : {min.toString().padStart(2, '0')} : {sec.toString().padStart(2, '0')}</p>
    </header>
  );
}

export default Timer;