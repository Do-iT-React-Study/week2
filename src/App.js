import logo from "./logo.svg";
import "./App.css";
import MyComponent from "./MyComponent";
import Counter from "./Counter";
import Say from "./Say";
import EventPrac from "./EventPrac";

function App() {
  return (
  // <div>
  //   <MyComponent name = "min">REACT</MyComponent>
  // </div>
  //<div>
  //  <Counter/>
  //</div>
  //  <div>
  //    <Say/>
  //  </div>
    <div>
      <EventPrac/>
    </div>
  
  ); // REACT str은 props의 children tag로 가져올 수 있음
}

export default App;

//class형

// class App extends Component {
//   render() {
//     const name = "react";
//     return <div>{name}</div>;
//   }
// }

