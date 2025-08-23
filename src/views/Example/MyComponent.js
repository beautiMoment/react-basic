import React from "react";
import ChildComponent from "./ChildComponent";
class MyComponent extends React.Component {
  // key: value
  state = {
    firstName: "",
    lastName: "",
  };
  /* 
    function can return <html></html> (template)
    JSX: =>return block  
  */

  handleChangeFirstName = (event) => {
    this.setState({
      firstName: event.target.value,
    });
  };
  handleChangeLastName = (event) => {
    this.setState({
      lastName: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(">>> check data input:", this.state);
  };
  render() {
    // re-render
    console.log("call render:", this.state);
    // use code javascript in html
    return (
      // code block React.Fragment (short cut)
      <>
        <form>
          <label htmlFor="fname">First name:</label>
          <br />
          <input
            type="text"
            value={this.state.firstName}
            onChange={(event) => this.handleChangeFirstName(event)}
          />
          <br />
          <label htmlFor="lname">Last name</label>
          <br />
          <input
            type="text"
            value={this.state.lastName}
            onChange={(event) => this.handleChangeLastName(event)}
          />
          <br />
          <input
            type="submit"
            onClick={(event) => {
              this.handleSubmit(event);
            }}
          />
        </form>
        <ChildComponent name="Nguyen" age={"22"} />
        {/* props: property */}
      </>
    );
  }
}

export default MyComponent;
