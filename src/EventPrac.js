import React from "react";
import { useState } from "react";

const EventPrac = () => {
  
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  
  //상태 2개 지정

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const onChangeMessage = (e) => {
    setMessage(e.target.value);
  };

  const onClick = () =>{
    alert(username + ": "+ message);
    setUsername("");
    setMessage("");
  };
  
  const onEntPress = (e) =>{

    if(e.key == "Enter") {onClick();}
  };

  return (
    <div>
      <h1>이벤트 연습</h1>
      {/* input 연습 - type, name, placeholder, value, onChange, onKeyPress*/}
      <input 
      type="text"
      name = "message"
      placeholder="user 명"
      value={username}
      onChange={onChangeUsername}
         />
         <br/>  
      <input 
      type="text" 
      name = "message" 
      placeholder="메시지 입력"
      value={message}
      onChange={onChangeMessage}
      onKeyPress={onEntPress}
         />   
      {/* button */}
      <button onClick={onClick}>확인</button>

    </div>
  );
};

export default EventPrac;
