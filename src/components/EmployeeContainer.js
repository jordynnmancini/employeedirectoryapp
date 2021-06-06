import React, { Component } from "react";
import API from "../utils/API";

class EmployeeContainer extends Component {
  state = {
    results: [],
  };

  //When this component mounts, load all employees
  componentDidMount() {
    API.getAllEmployees()
      .then(res => {
        this.setState({ results: res.data.results })
        console.log(res.data.results)
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <h1>Employee Directory</h1>
    );
  }

}

export default EmployeeContainer;
