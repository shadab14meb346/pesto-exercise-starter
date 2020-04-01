import React, {Component} from "react";
import GroceryList from './components/GroceryList/GroceryList';
import './App.css';
class App extends Component {
  state = {
  }
  render() {
    return (    
    <div id="container">
      <GroceryList/>
    </div>
    )
  }
}
export default App;
