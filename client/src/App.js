/* eslint-disable no-unused-expressions */
/* eslint-disable no-restricted-globals */
import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Button, Container, Card, Row } from 'react-bootstrap'

class App extends Component {
  constructor(props) {
    super(props)
      this.state = {
        setCandidateName: '',
        setEmail: '',
        fetchData: [],
        emailUpdate: ''
      }
  }

  handleChange = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({
      [nam]: val
    })
  }

  handleChange2 = (event) => {
    this.setState({
      emailUpdate: event.target.value
    })
  }


  submit = () => {
    
    axios.post('/api/insert', this.state)
      .then(() => { alert('success post') })
    console.log(this.state)
    document.location.reload();
  }

  delete = (id) => {
    if (confirm("Do you want to delete? ")) {
      axios.delete(`/api/delete/${id}`)
      document.location.reload()
    }
  }

  edit = (id) => {
    axios.put(`/api/update/${id}`, this.state)
    document.location.reload();
  }
  render() {

    return (
      <div className='App'>
        <h1>IBM Prevail 2021 Registration Form</h1>
        <div className='form'>
          <input name='setCandidateName' placeholder='Enter Full Name' onChange={this.handleChange} />
          <input name='setEmail' placeholder='Enter Email' onChange={this.handleChange} />
        </div>

        <Button className='my-2' variant="primary" onClick={this.submit}>Submit</Button> <br /><br/>

     
      </div>
    );
  }
}
export default App;
