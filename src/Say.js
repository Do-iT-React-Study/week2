import React, { useState } from "react";

const Say = () => {
  const [message, setMessage] = useState("");
  //message는 현재상태, setMessage는 바꾸는 함수
 // const [music, setMusic] = useState([]);

  const onClickEnter = () => {
    setMessage("Hello");
    //message <- Hello
  };
  const onClickLeave = () => {
    setMessage("See You!");
    //See you
  };

  const [color, setColor] = useState("black");

  return (<div>
    hello
    <button onClick = {onClickEnter}>입장</button>
    <button onClick={onClickLeave}>퇴장</button>
    <h1 style={{ color }}>{message}</h1>

    <h1></h1>
    <button style={{color:"red"}} onClick={() => setColor("red")}>red</button>
    <button style={{color:"green"}} onClick={() => setColor("green")}>green</button>
    <button style={{color:"blue"}} onClick={() => setColor("blue")}>blue</button>

  </div>);
};

export default Say;
