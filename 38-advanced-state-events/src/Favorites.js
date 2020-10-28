import React, { Component } from "react";
import BeyCard from "./BeyCard";

export default class Favorites extends Component {

  renderBeys = () => {
    return this.props.beys.map(bey => <BeyCard key={bey} bey={bey} clickHandler={this.props.clickHandler} />)
  }
  render() {
    console.log("Favorite Props", this.props)
    return (
      <div className="favorites">
        <h1>Favorites</h1>
        {this.renderBeys()}
      </div>
    );
  }
}
