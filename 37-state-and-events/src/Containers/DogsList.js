import React, { Component } from "react";
import { apiResponse } from '../api'
import DogCard from "../Components/DogCard";

class DogList extends Component {
  // constructor(props){
  //   // looks to the parent class' function of the same name and then imports all of that code 
  //   super(props)
  //   this.state = {}
  // }
  state = {
    api: apiResponse
  }

  renderDogs = () => {
    return this.state.api.map(el => <DogCard key={el.id} dog={el} />)
  }

  render() {
    return <div className="list">{this.renderDogs()}</div>;
  }
}


function helper() { }

export default DogList;
