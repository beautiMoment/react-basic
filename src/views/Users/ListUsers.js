import React from "react";
import axios from "axios";
import "./ListUsers.scss";
class ListUsers extends React.Component {
  state = {
    ListUsers: [],
  };
  async componentDidMount() {
    // axios.get("https://reqres.in/api/users").then((res) => {
    //   console.log(">>> check response:", res.data);
    // });
    let res = await axios.get("https://reqres.in/api/users");
    this.setState({
      ListUsers: res && res.data && res.data.data ? res.data.data : [],
    });
    // console.log(">>> check res:", res.data.data);
  }
  render() {
    let { ListUsers } = this.state;
    return (
      <div className="list-user-container">
        <div className="title">Fetch all list users</div>
        <div className="list-user-content">
          <div className="child">1 - Nguyen Van A</div>
          <div className="child">1 - Nguyen Van A</div>
          <div className="child">1 - Nguyen Van A</div>
        </div>
      </div>
    );
  }
}

export default ListUsers;
