import React, { Component } from "react";
import "./App.css";
import Form from "./Form";
import Smurfs from "./Smurfs";
import { connect } from "react-redux";
import { loadingPage } from "../store/actions/smurfActions";
class App extends Component {
  render() {
    return (
      <div className="App" onLoad={loadingPage}>
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <Form />
        <Smurfs />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      
  }
 }

export default connect(mapStateToProps, loadingPage)(App) ;
