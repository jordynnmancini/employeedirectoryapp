import React, { Component } from "react";
import API from "../../utils/API";
import TableHeaders from "../TableHeaders";
import TableData from "../TableData";
import { format } from 'date-fns';
import './style.css';


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
      <div className="body">
        <h1 className='app-header'>Employee Directory</h1>
        <div>
        <table className="table">
          <thead className='table-headers'>
            <TableHeaders />
          </thead>
          <tbody>
            {this.state.results.map((user) => (
              <TableData 
                thumbnail={user.picture.thumbnail}
                name={`${user.name.first} ${user.name.last}`}
                email={user.email}
                hiredate={format(new Date(user.registered.date), 'MM/dd/yyyy')}
                key={user.id.value}
              />
            ))}
          </tbody>
        </table>
        </div>
      </div>


    );
  }

}

export default AppContainer;
