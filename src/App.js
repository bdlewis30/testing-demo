import React, { Component } from 'react';
import './App.css';
import fns from './utils/App.functions';
//see a user list
// give an id anbd see details for one user


class App extends Component {
  constructor() {
    super()
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    fns.getAllUsers('/api/getAllUsers').then(res => {
      this.setState({
        users: res
      })
    })
  }

  render() {

    let formattedUsers = this.state.users.map((e, i) => {
      return (
        <div key={i}>
          <h3>{e.name.first} {e.name.last}</h3>
        </div>
      )
    })
    
    return (
      <div className="App">
        {formattedUsers}
      </div>
    );
  }
}

export default App;
