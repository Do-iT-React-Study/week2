import React, { useState } from "react";

const EventPrac = () => {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const onChangeUsername = (e) => {
    setUsername(e.target.value);
    console.log(e.target.value);
  };

  const onchangeMessage = (e) => {
    setMessage(e.target.value);
  };

  const onClick = () => {
    alert(username + ": " + message);
    setUsername("");
    setMessage("");
  };

  const pressEnter = (e) => {
    if (e.key == "Enter") {
      onClick();
    }
  };
  return (
    <div>
      <h1>이벤트 연습</h1>
      {/* input 연습 - type, name, placeholder, value, onChange, onKeyPress*/}
      <input
        type="text"
        name="username"
        placeholder="user명"
        value={username}
        onChange={onChangeUsername}
      />
      <input
        type="text"
        name="message"
        placeholder="메시지 입력"
        value={message}
        onChange={onchangeMessage}
      />
      {/* button */}
      <button onClick={onClick}>확인</button>
    </div>
  );
};

export default EventPrac;
