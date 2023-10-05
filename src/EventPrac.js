import React, { useState } from "react";

const EventPrac = () => {

  const [username, setUsername] = useState("")
  const [message, setMessage] = useState(" ")

  // 상태 2개 지정

  const onChangeUsername = (e) => {
    setUsername(e.target.value);

  };
 
  const onClick = () => {
    alert (username + ": " + message);
    setUsername("");
    setMessage(" ")
  }

  const pressEnter = (e) => {
    if (e.key == "Enter") {
      onClick();
    }

  }

  return (
    <div>
      <h1>이벤트 연습</h1>
      {/* input 연습 - type, name, placeholder, value, onChange, onKeyPress*/}
      <input type="text"
      name="username"
      placeholder="유저명"
      value={username}
      onChange={onChangeUsername}
      />
      
      <input type="text"
      name="message"
      placeholder="메시지 입력"
      value={username}
      onChange={onChangeUsername}
      onKeypress={pressEnter}
      />

      {/* button */}
      <button onClick={(onClick)}>확인</button>
    </div>
  );
};

export default EventPrac;
