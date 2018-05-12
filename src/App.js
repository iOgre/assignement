import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput'
class App extends Component {
  constructor(props) {
    super(props);
    
  }
  state = {
    users: [{
      username: "Izaro",
      quote: "An emperor is only as efficient as those he commands."
      },
      {
        username: "Dominus",
        quote: "This world is an illusion, exile."
      },
      {
        username: "Einhar",
        quote: "You are captured, stupid beast!"
      }
      ],
     }
  onNameChanged = (event, index) => {
    console.log(event);
    console.log('onNameChanged', index);
      let copy = this.state.users.slice();
      copy[index].username = event.target.value;
      this.setState({copy});
  }
  saySomething = (index, event) => {
    console.log('event is', event);
    console.log('say something', index);
    let copy = this.state.users.slice();
    copy[index].quote ="YELLLING LOUDLY";
    this.setState(copy);
      };
  
  render() {
    return (
      <div className="App">
        <UserOutput username={this.state.users[0].username} changed={(event) => this.onNameChanged(event, 0)} >
          {this.state.users[0].quote}
        </UserOutput>
        <UserOutput username={this.state.users[1].username} changed={(event) => this.onNameChanged(event,1)} >
          {this.state.users[1].quote}
        </UserOutput>
        <UserOutput username={this.state.users[2].username} changed={ (event) => this.onNameChanged(event, 2) } >
          {this.state.users[2].quote}
        </UserOutput>
        <div>
          <button onClick={this.saySomething.bind(this, 0)}>Yell</button>
        </div>
      </div>
    );
  }
}

export default App;
