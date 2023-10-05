import React from "react";
import PropTypes from "prop-types";

//컴포넌트 생성
const MyComponent = ({ name, children}) => {

// const { name, children} = props;

  return (
  <div>
    My First Component
    <h1>제 이름은 {name}입니다.</h1>
    <h3>childeren 값은 {children}입니다.
    </h3>
  </div>);
};


//1. props 렌더링

//2. defaultProps
MyComponent.defaultProps = {
  name: "default",
};

MyComponent.propTypes = {
  name : PropTypes.string,


  favoriteNumber: PropTypes.number.isRequired,
}

export default MyComponent;
