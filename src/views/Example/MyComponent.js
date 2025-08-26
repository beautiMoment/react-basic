import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component {
  // key: value
  state = {
    arrJobs: [
      { id: "abcJob1", title: "Developers", salary: "500" },
      { id: "abcJob2", title: "Testers", salary: "290" },
      { id: "abcJob3", title: "Project Managers", salary: "1000" },
    ],
  };
  /* 
    function can return <html></html> (template)
    JSX: =>return block  
  */

  render() {
    // re-render
    console.log("call render:", this.state);
    // use code javascript in html
    return (
      // code block React.Fragment (short cut)
      <>
        <AddComponent />

        <ChildComponent arrJobs={this.state.arrJobs} />
        {/* props: property */}
      </>
    );
  }
}

export default MyComponent;
