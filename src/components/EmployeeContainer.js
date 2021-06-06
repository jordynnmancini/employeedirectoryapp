import React, { Component } from "react";
import API from "../utils/API";

class EmployeeContainer extends Component {
  state = {
    result: {},
    search: ""
  };

  // When this component mounts, load all employees
  componentDidMount() {
    this.getAllEmployees();
  }

  
}

export default EmployeeContainer;
