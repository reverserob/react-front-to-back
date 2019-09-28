import React, { Component, Fragment } from 'react';
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import './App.css';

class App extends Component {
  render() {

    // const name = 'Jhon Doe';
    // const loading = false;
    // const showName = true;

    return (
        <div className="App">
          <Navbar />
          <div className='container'>
            <Users />
          </div>
         {/*{loading ? <h4>Loading...</h4> : <h1>Hello {showName && name}</h1>}*/}
        </div>
    );
  }

}

export default App;
