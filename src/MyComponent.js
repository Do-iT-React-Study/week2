import React from "react";
import PropTypes from "prop-types";

//컴포넌트 생성
const MyComponent = (/*props*/{children, name}) => { // props는 컴포넌트 간 값 전달 매개변수
  
  //const {children, name} = props;

  return (
    <div>
      My First Component
      <h1>{name}</h1>
      <h3>children: {children}</h3>
    </div>
  );
};

const My = () => {
  
};

//1. props 렌더링

//2. defaultProps
MyComponent.defaultProps = {
  name: "기본 이름",
};

 MyComponent.propTypes = {
   name: PropTypes.string,
 };

//export default My;
export default MyComponent;
