import React, { useState } from "react";

const EventPrac = () => {

  const [username, setUsername] = useState()
  const [message,setMessage] = useState()
  
  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const onChangeMessage = (e) => {
    setMessage(e.target.value);
  };

  const onClick = () =>{

    alert(username + " " + message);
    setMessage("");
    setUsername("");

  };

  const pressEnter = (e) => {
    if(e.key == "enter"){
      onClick();
    }

  };


  return (
    <div>
      <h1>이벤트 연습</h1>
      {/* input 연습 - type, name, placeholder, value, onChange, onKeyPress*/}
      <input name="username" placeholder="USER" value={username} onChange={onChangeUsername} />
      <br/>
      <input name="message" placeholder="MESSAGE" value={message} onChange={onChangeMessage} onKeyPress={pressEnter}/>
      <br/>
      {/* button */}
      <button onClick={onClick}>OK</button>
    </div>
  );
};

export default EventPrac;
