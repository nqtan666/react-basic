import React from "react";
import axios from "axios";
import "./ListUser.scss";
import { withRouter } from "react-router-dom";
class ListUser extends React.Component {
  state = {
    listUser: [],
  };
  async componentDidMount() {
    // axios.get("https://reqres.in/api/users?page=1")
    // .then((res) => {
    //   console.log("check res >>>>>>", res.data.data);
    // });
    let res = await axios.get("https://reqres.in/api/users?page=1");
    this.setState({
      listUser: res && res.data && res.data.data ? res.data.data : [],
    });
  }
  handleViewDetailUser = (item) => {
    this.props.history.push(`user/${item.id}`);
  };
  render() {
    let { listUser } = this.state;
    return (
      <div className="list-user-container">
        <div className="title">Fetch all list user</div>
        <div className="list-user-content">
          {listUser &&
            listUser.length > 0 &&
            listUser.map((item, index) => {
              return (
                <div
                  key={item.id}
                  className="child"
                  onClick={() => this.handleViewDetailUser(item)}
                >
                  {index + 1} - {item.first_name} - {item.last_name}
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}
export default withRouter(ListUser);
