import React from "react";
import "./App.css";
import beys from './api'
import BeyContainer from './BeyContainer'
import Favorites from './Favorites'
class App extends React.Component {

  state = {
    api: beys
  }

  // We made a new array to reference
  addToFavoritesClickHandler = (id) => {
    // update the object's key 
    let newArray = [...this.state.api]
    let foundBey = newArray.find(bey => bey.id === id)
    foundBey.favorite = true
    // update the state api
    this.setState(() => ({ api: newArray }))
  }
  removeFromFavoritesClickHandler = (id) => {
    // update the object's key 
    let newArray = [...this.state.api]
    let foundBey = newArray.find(bey => bey.id === id)
    foundBey.favorite = false
    // update the state api
    this.setState(() => ({ api: newArray }))
    window.alert("hot sauce...swag")
  }

  filterFavorites = () => {
    return this.state.api.filter(bey => bey.favorite)
  }

  render() {
    console.log("App state", this.state)
    return (
      <div className="container">
        <BeyContainer beys={this.state.api} clickHandler={this.addToFavoritesClickHandler} />
        <Favorites beys={this.filterFavorites()} clickHandler={this.removeFromFavoritesClickHandler} />
      </div>
    );
  }
};

export default App;
