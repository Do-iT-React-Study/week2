import React, { useState } from "react";

const Say = () => {
  const [message, setMessage] = useState("");

  const [music, setMusic] = useState([]);

  const onClickEnter = () => {
    //Hello
    setMessage("Hello");
    // message <- "hello"
  };

  const onClickLeave = () => {    // 화살표 함수
    //See you
    setMessage("See you");
  };

  const [color, setColor] = useState("black");

  return <div>
    <button onClick={onClickEnter}>입장</button>
    <button onClick={onClickEnter}>퇴장</button>
    <h1 style={{color}} >{message}</h1>  

    <button style={{color: "red", backgroundColor: "grey"}} > onClick={() => setColor("red")} RED </button>
    <button style={{color: "green"}} > onClick={() => setColor("red")} GREEN </button>
    <button style={{color: "blue"}} > onClick={() => setColor("red")} BLUE </button>



  </div>;
};

export default Say;
