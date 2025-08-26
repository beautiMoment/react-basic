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
  addNewJob = (job) => {
    console.log(">>> check job from parent:", job);
    // let currentJobs = this.state.arrJobs;
    // currentJobs.push(job);
    this.setState({
      arrJobs: [...this.state.arrJobs, job],
      // arrJobs: currentJobs
    });
  };

  deleteAJob = (job) => {
    let currentJobs = this.state.arrJobs;
    currentJobs = currentJobs.filter((item) => item.id !== job.id);
    this.setState({
      arrJobs: currentJobs,
    });
  };
  render() {
    // re-render
    console.log("call render:", this.state);
    // use code javascript in html
    return (
      // code block React.Fragment (short cut)
      <>
        <AddComponent addNewJob={this.addNewJob} />

        <ChildComponent
          arrJobs={this.state.arrJobs}
          deleteAJob={this.deleteAJob}
        />
        {/* props: property */}
      </>
    );
  }
}

export default MyComponent;
