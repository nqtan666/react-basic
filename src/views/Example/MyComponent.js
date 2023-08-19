import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component {
  state = {
    arrJobs: [
      { id: "abcJob1", title: "Developer", salary: "500" },
      { id: "abcJob2", title: "Tester", salary: "400" },
      { id: "abcJob3", title: "Project Manager", salary: "1000" },
    ],
  };
  addNewJob = (job) => {
    this.setState({
      arrJobs: [...this.state.arrJobs, job],
    });
  };
  deleteJob = (condition) => {
    this.setState({
      arrJobs: this.state.arrJobs.filter((item) => item.id !== condition),
    });
  };
  componentDidUpdate(prevProps, prevState) {
    console.log(
      ">>>>Run when update dom,state old ",
      prevState,
      "state new:",
      this.state
    );
  }
  componentDidMount() {
    console.log(">>>>>>>>>componentDidMount");
  }
  render() {
    return (
      <>
        <AddComponent addNewJob={this.addNewJob} />
        <div>
          <ChildComponent
            arrJobs={this.state.arrJobs}
            deleteJob={this.deleteJob}
          />
        </div>
      </>
    );
  }
}
export default MyComponent;
