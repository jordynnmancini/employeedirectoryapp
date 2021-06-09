import React, { Component } from "react";
import API from "../../utils/API";
import TableHeaders from "../TableHeaders";
import TableData from "../TableData";
import SearchForm from "../SearchForm"; 
import { format } from 'date-fns';
import './style.css';


class AppContainer extends Component {
  state = {
    results: [],
    search: '',
    db: []
  };

  //When this component mounts, load all employees
  componentDidMount() {
    API.getAllEmployees()
      .then(res => {

        //Loop res.data.results 
        //In the loop ==> db.push({name: res.data.results[i].name.first + "," +res.data.results[i].name.last,
       //  email:})
        this.setState({ results: res.data.results, 
          db:res.data.results })
        console.log(this.state.results,this.state.db)
      })
      .catch(err => console.log(err));
  }
  handleInputChange = (e) => {
    let value = e.target.value; 
    this.setState({ 
      search: value
    })
  }

  searchName = (e) => {
    e.preventDefault(); 
   
    let employees = [];
    let results = this.state.results;
    for (let i=0; i<results.length; i++) {
      if ((results[i].name.first.toLocaleLowerCase() === this.state.search.toLocaleLowerCase()) || (results[i].name.last.toLocaleLowerCase() === this.state.search.toLocaleLowerCase())){
        employees.push(results[i])
      }
    }
    this.setState({
      results: employees
    })
  }

  reset = (e) => {
    e.preventDefault(); 
    console.log(this.state.db)
    let db = this.state.db;
    this.setState({ results: db })
  }

  render() {
    return (
      <div className="body">
        <h1 className='app-header'>Employee Directory</h1>
        <div className="table-controls">
        <SearchForm 
        value={this.state.search}
        handleInputChange={this.handleInputChange}
        searchName={this.searchName}
        /> 
        </div>
        <div>
        <table className="table">
          <thead className='table-headers'>
            <TableHeaders />
          </thead>
          <tbody>
            {this.state.results.map((user, key) => (
              <TableData 
                thumbnail={user.picture.thumbnail}
                name={`${user.name.first} ${user.name.last}`}
                email={user.email}
                hiredate={format(new Date(user.registered.date), 'MM/dd/yyyy')}
                key={key}
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
