import React, { Component } from "react";
import API from "../../utils/API";
import Table from "../Table"; 

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
  // filter by name
  // sort by registered.date
  // class TableControls
  //class Table 
  // class Row & Column - used in Table
  render() {
    return (
      <div>
        <h1>Employee Directory</h1>
        <div>
          {this.state.results.map((user) => (
            <Table
            thumbnail={user.picture.thumbnail}
            name={`${user.name.first} ${user.name.last}`}
            email={user.email}
            hiredate={user.registered.date}
            />
          ))}
        </div>
      </div>


    );
  }

}

export default AppContainer;
