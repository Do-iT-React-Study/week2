import logo from "./logo.svg";
import "./App.css";
import MyComponent from "./MyComponent";
import Counter from "./Counter";
import Say from "./Say";

function App() {
  return (
  <div><MyComponent name="ccc"> react </MyComponent></div>

  )
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
