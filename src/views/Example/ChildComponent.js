import React from "react";
import "./Demo.css";
class ChildComponent extends React.Component {
  state = {
    showJob: false,
  };

  handleShow = (value) => {
    this.setState({
      showJob: !this.state.showJob,
    });
  };
  handleDeleteJob = (value) => {
    this.props.deleteJob(value);
  };
  render() {
    let { arrJobs } = this.props;
    let { showJob } = this.state;
    return (
      <>
        {showJob == false ? (
          <div>
            <button className=" btn btn-show"
             onClick={() => this.handleShow()}>Show</button>
          </div>
        ) : (
          <>
            <div className="job-list">
              {arrJobs.map((item, index) => {
                return (
                  <div key={item.id}>
                    {item.title} - {item.salary}
                    <></>
                    <button onClick={() => this.handleDeleteJob(item.id)}>
                      x
                    </button>
                  </div>
                );
              })}
            </div>
            <div>
              <button className=" btn btn-hide" onClick={() => this.handleShow()}>Hide</button>
            </div>
          </>
        )}
      </>
    );
  }
}
// const ChildComponent = (props) => {
//   let { arrJobs } = props;
//   return (
//     <>
//       <div className="job-list">
//         {arrJobs.map((item, index) => {
//           if (item.salary >= 500) {
//             return (
//               <div key={item.id}>
//                 {item.title} - {item.salary}
//               </div>
//             );
//           }
//         })}
//       </div>
//     </>
//   );
// };
export default ChildComponent;
