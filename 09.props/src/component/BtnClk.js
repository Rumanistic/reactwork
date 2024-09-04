import './BtnClk.css'
import { useState } from 'react';
const BtnClk = ({text, color, event}) => {


  return (
    <button className="btn" style={{color}} onClick={event}>{text}</button>
  )
}

export default BtnClk;