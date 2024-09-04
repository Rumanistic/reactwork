import { useState } from 'react';

const LightOnOff = () => {

  let [light, setLight] = useState(false);
  let [changeStat, setChangeStat] = useState('켜기');

  const SwitchLight = () => {
    const newLightState = !light;
    setLight(newLightState);
    if(newLightState) {
      setChangeStat('끄기');
    } else {
      setChangeStat('켜기');
    }
  }

  return (
    <>
      {light ? <h1 style={{color:'yellow'}}>Light On!</h1> : <h1 style={{color:'gray'}}>Light Off!</h1>}
      <button onClick={SwitchLight}>{changeStat}</button>
    </>
  );
}

export default LightOnOff;