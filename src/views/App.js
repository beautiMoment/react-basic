import logo from "./logo.svg";
import "./App.scss";
import MyComponent from "./Example/MyComponent.js";
import ListTodo from "./Todos/ListTodo.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.min.css";

import Nav from "./Nav/Nav.js";
import Home from "./Example/Home.js";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import ListUsers from "./Users/ListUsers.js";

/*
 * 2 components: class vs function (function/arrow)
 * JSX
 */
// const App = () => {
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />

          {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
          {/* <MyComponent /> */}
          {/* <ListTodo /> */}

          {/* <MyComponent></MyComponent> // use for class when you have more child components*/}

          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/todo">
              <ListTodo />
            </Route>
            <Route path="/about">
              <MyComponent />
            </Route>
            <Route path="/user">
              <ListUsers />
            </Route>
          </Switch>
        </header>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          // transition={Bounce}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
