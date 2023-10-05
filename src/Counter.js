import React from "react";
import { Component } from "react";

class Counter extends Component {
  constructor(props) {
    //클래스형 컴포넌트에서 생성자를 작성할 때는 반드시 super(props)를 호출해주어야 함
    //이 함수가 호출되면 현재 클래스형 컴포넌트가 상속하고 있는 리액트의 Component 클래스가 지닌 생성자 함수를 호출
    super(props);
    //state의 초깃값 설정
    this.state = {
      number: 0,
      fixedNumber: 0,
    };
  }

  //생성자 메서드를 선언하지 않고 state 초깃값을 설정하는 방법
  state = {};

  render() {
    //state를 조회할 때는 this.state로 조회
    const { number, fixedNumber } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값 : {fixedNumber} </h2>
        <button
          onClick={() => {
            this.setState({ number: number + 1 });
          }}
        >
          add 1
        </button>
      </div>
    );
  }
}

export default Counter;
