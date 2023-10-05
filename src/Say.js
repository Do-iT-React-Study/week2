import React, { useState } from "react";

const Say = () => {
  const [message, setMessage] = useState("");

  const onClickEnter = () => {
    //Hello
  };
  const onClickLeave = () => {
    //See you
  };

  const [color, setColor] = useState("black");

  return <div>hello</div>;
};

export default Say;
