import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class CreateExercise extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangerfid=this.onChangerfid.bind(this);
    this.onChangeDisease = this.onChangeDisease.bind(this);
    this.onChangeAge = this.onChangeAge.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeWeight = this.onChangeWeight.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      rfid:'',
      disease: '',
      age: 0,
      date: new Date(),
      weight: 1,
      users: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/users/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map(user => user.username),
            username: response.data[0].username
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })

  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }
  onChangerfid(e) {
    this.setState({
      rfid: e.target.value
    })
  }

  onChangeDisease(e) {
    this.setState({
      disease: e.target.value
    })
  }

  onChangeAge(e) {
    this.setState({
      age: e.target.value
    })
  }

  onChangeDate(date) {
    this.setState({
      date: date
    })
  }

  onChangeWeight(e) {
    this.setState({
      weight: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const exercise = {
      username: this.state.username,
      rfid: this.state.rfid,
      disease: this.state.disease,
      age: this.state.age,
      date: this.state.date,
      weight: this.state.weight
    }

    console.log(exercise);

    axios.post('http://localhost:5000/exercises/add', exercise)
    .then(response => { 
      console.log(response)
    })
    .catch(error => {
        console.log(error.response)
    });
    window.location = '/';
  }

  render() {
    return (
    <div>
      <h3>Create New Patient Log</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Patient name: </label>
          <select ref="userInput"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}>
              {
                this.state.users.map(function(user) {
                  return <option 
                    key={user}
                    value={user}>{user}
                    </option>;
                })
              }
          </select>
        </div>
        <div className="form-group">
          <label>rfid: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.rfid}
              onChange={this.onChangerfid}
              />
        </div>
        <div className="form-group"> 
          <label>Disease: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.disease}
              onChange={this.onChangeDisease}
              />
        </div>
        <div className="form-group">
          <label>Age: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.age}
              onChange={this.onChangeAge}
              />
        </div>
        <div className="form-group">
          <label>Date: </label>
          <div>
            <DatePicker
              selected={this.state.date}
              onChange={this.onChangeDate}
            />
          </div>
        </div>

        <div className="form-group">
          <label>Weight: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.weight}
              onChange={this.onChangeWeight}
              />
        </div>

        <div className="form-group">
          <input type="submit" value="Create Patient Log" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}