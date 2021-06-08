import React, { Component } from "react";
import API from "../../utils/API";
import TableHeaders from "../TableHeaders";
import TableData from "../TableData"; 

class AppContainer extends Component {
  state = {
    results: [],
  };

  //When this component mounts, load all employees
  componentDidMount() {
    API.getAllEmployees()
      .then(res => {
        this.setState({ results: res.data.results })
        console.log(this.state.results)
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <h1>Employee Directory</h1>
        <table>
          <TableHeaders />
          <tbody>
          {this.state.results.map((user) => (
            <TableData
            thumbnail={user.picture.thumbnail}
            name={`${user.name.first} ${user.name.last}`}
            email={user.email}
            hiredate={user.registered.date}
            key={user.id.value}
            />
          ))}
        </tbody>
        </table>


      </div>


    );
  }

}

export default AppContainer;
