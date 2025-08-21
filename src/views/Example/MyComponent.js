import React from "react";

class MyComponent extends React.Component {
  // key: value
  state = {
    name: "Nguyen",
    chanel: "Hoi Dan IT",
  };
  /* 
    function can return <html></html> (template)
    JSX: =>return block  
  */
  handleOnChangeName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  render() {
    let name = "Eric";
    // use code javascript in html
    return (
      // code block React.Fragment (short cut)
      <>
        <div className="first">
          <input
            value={this.state.name}
            type="text"
            onChange={(event) => {
              this.handleOnChangeName(event);
            }}
          />{" "}
          My name is {this.state.name}
        </div>
        <div className="second">My Youtube chanel is {this.state.chanel}</div>;
      </>
    );
  }
}

export default MyComponent;
