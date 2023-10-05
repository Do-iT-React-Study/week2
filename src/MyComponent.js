import React from "react";
import PropsTypes from "prop-types";

//컴포넌트 생성
const MyComponent = ({name, children}) => {

  //const {name, children} = props;

  return <div>My First Component
    <h1>이름이 {name}입니다.</h1>
    <h3>children은 {children}</h3>
  </div>;
};


const My = () => {};

//1. props 렌더링

//2. defaultProps
MyComponent.defaultProps = {
  name: "기본 이름",
};

MyComponent.propsTypes = {
  name : PropsTypes.string,
}

export default MyComponent;
