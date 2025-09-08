import React from "react";
import { withRouter } from "react-router";
import Color from "../HOC/Color";
import logo from "../../assets/image/RobloxScreenShot20250704_234220148.png";

class Home extends React.Component {
  componentDidMount() {
    // setTimeout(() => {
    //   this.props.history.push("/todo");
    // }, 3000);
  }
  // HOC: higher - order component
  render() {
    return (
      <>
        {console.log(">>> check props:", this.props)}
        <div>Hello World with Reactjs</div>
        <div>
          <img
            src={logo}
            style={{
              width: "200px",
              height: "200px",
              marginTop: "20px",
              objectFit: "cover",
            }}
          />
        </div>
      </>
    );
  }
}

// export default withRouter(Home);
export default Color(Home);
