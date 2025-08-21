import logo from "./logo.svg";
import "./App.scss";
import MyComponent from "./Example/MyComponent.js";
/*
 * 2 components: class vs function (function/arrow)
 * JSX
 */
// const App = () => {
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {/* Edit <code>src/App.js</code> and save to reload. */}
          Hello world with React.js
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MyComponent />
        {/* <MyComponent></MyComponent> // use for class when you have more child components*/}
      </header>
    </div>
  );
}

export default App;
