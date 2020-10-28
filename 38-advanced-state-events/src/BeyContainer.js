import React from "react";
import BeyCard from "./BeyCard";

class BeyContainer extends React.Component {

  renderBeys = () => {
    return this.props.beys.map(bey => <BeyCard key={bey.id} bey={bey} clickHandler={this.props.clickHandler} />)
  }

  render() {
    console.log("BeyContainer", this.props)
    return (
      <div className="index">
        <h1>Index</h1>
        {this.renderBeys()}
      </div>
    );
  }
}

export default BeyContainer;
