import React, { Component } from 'react';
import AppNavBar from "./components/AppNavbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ShoppingList from "./components/ShoppingList";
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render(){
  return (
    <Provider store={store}>
    <div className="App">
      <AppNavBar />
      <ShoppingList />
    </div>
    </Provider>  
  );
  }
}

export default App;
