import React from "react";

//컴포넌트 생성
const MyComponent = () => {
  return <div>My First Component</div>;
};

//1. props 렌더링

//2. defaultProps
MyComponent.defaultProps = {
  name: "기본 이름",
};

export default MyComponent;
