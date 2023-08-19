import React from "react";
import { withRouter } from "react-router-dom";
import Color from "../HOC/Color";
class Home extends React.Component {
  componentDidMount() {
    // setTimeout(() => {
    //   this.props.history.push("/todo");
    // }, 3000);
  }
  render() {
    return <>Hello world from Homepage with TanNQ</>;
  }
}
// export default withRouter(Home);
export default Color(Home);
