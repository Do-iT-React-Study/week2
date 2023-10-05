import React, {useState} from "react";

const EventPrac = () => {

    const [username, setUsername] = useState("");
    const [message, setMessage] = useState("");

    const onChangeUsername = (e) => {
      setUsername(e.target.value);
    };

    const onChangeMessage = (e) => {
      setMessage(e.target.value);
    };

    const onClick = () => {
      alert(username + ": " + message);
      setUsername("");
      setMessage("");
    };

    const pressEnter = (e) => {
      if (e.key == "ENTER") {
        onClick();
      }
      
    }
  
  return (
    <div>
      <h1>이벤트 연습</h1>
      {/* input 연습 - type, name, placeholder, value, onChange, onKeyPress*/}

      <input 
        type="text" 
        name="username"
        placeholder="user 명"
        value={username}
        onChange={onChangeUsername}
        />

      <input 
        type="text" 
        name="message"
        placeholder="메세지 입력"
        value={message}
        onChange={onChangeMessage}
        onKeyPress={pressEnter}
        />

        <button onClick={onClick}>확인</button>

      {/* button */}
    </div>
  );
};

export default EventPrac;
