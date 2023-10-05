import logo from "./logo.svg";
import "./App.css";
import MyComponent from "./MyComponent";
import Counter from "./Counter";
import Say from "./Say";
import EventPrac from "./EventPrac";

function App() {
  return <div>
    {/* <MyComponent name='ccc'>react</MyComponent>
    <Counter></Counter>
    <Say></Say> */
    <EventPrac></EventPrac>
    }
    
  </div>;
}

export default App;

//class형
/*
class App extends Component {
  render() {
    const name = "react";
    return <div>{name}</div>;
  }
}
*/
