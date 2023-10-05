import React from "react";
import PropTypes from "prop-types";

//컴포넌트 생성
const MyComponent = ({ name, children }) => {
  return (
    <div>
      My First Component
      <h1>제 이름은 {name}</h1>
      <h2>chirldren값은 {children} 입니다</h2>
    </div>
  );
};

//1. props 렌더링

//2. defaultProps
MyComponent.defaultProps = {
  name: "default",
};

MyComponent.prototype = {
  name: "default",
};

export default MyComponent;
