import React from "react";
import PropTypes from "prop-types"


//컴포넌트 생성
const MyComponent = (props) => {

  const {name, children} = props;
// ES6 비구조화 할당 문법


  return (
  <div>My First Component
    <h1>{props.name}</h1>
    <h3>children값은 {props.children}입니다. </h3>
  </div>
  );
};

const My = () => {


}

//1. props 렌더링

//2. defaultProps
MyComponent.defaultProps = {
  name: "default",
};

MyComponent.propTypes = {
  name: PropTypes.string,
};

export default MyComponent;
