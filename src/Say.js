import React, { useState } from "react";

const Say = () => {
  const [m, setM] = useState(""); // 2번째 인자는 set함수

  const onClickEnter = () => {
    //Hello
    setM("H i");
  };

  const onClickLeave = () => {
    //See you
    setM("B y e");
  };

  const [color, setColor] = useState("black");

  return (
  <div>
    <button onClick={onClickEnter}>hi</button>
    <button onClick={onClickLeave}>bye</button>
    <h1 style={{color:color}}>{m}</h1>

    <button style={{color:"red"}} onClick={()=> setColor("red")}>R</button>
    <button style={{color:"green"}} onClick={()=> setColor("green")}>G</button>
    <button style={{color:"blue"}} onClick={()=> setColor("blue")}>R</button>

  </div>
  );
};

export default Say;
