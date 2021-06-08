import React, { Component } from "react";
import API from "../../utils/API";

class AppContainer extends Component {
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
      // filter by name
      // sort by registered.date
      // class TableControls
      //class Table 
      // class Row & Column - used in Table
    
      
    );
  }

}

export default AppContainer;
