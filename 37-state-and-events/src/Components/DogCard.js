import React from "react";

class DogCard extends React.Component {

  // constructor(props){
  //   super(props)
  //   this.state={}
  // }

  state = {
    clicked: false
  }

  clickHandler = () => {
    // this.setState({ clicked: !this.state.clicked })

    // functional setState
    this.setState((prevState) => ({ clicked: !prevState.clicked }))
  }

  render() {
    let { dog } = this.props
    return (
      <div className="card">
        <span className="content">
          <h2 >{dog.name}</h2>
          <img alt="" src={dog.img} />
        </span>
        <span className="bark">
          <button onClick={this.clickHandler}>Bark</button>
          {this.state.clicked ? <h2>Bark</h2> : null}
        </span>
      </div>
    );

  }
}

export default DogCard;

// ternary
// 3 parts 
// 1. condition => true or false
// 2. what happens if true?
// 3. what happens if false