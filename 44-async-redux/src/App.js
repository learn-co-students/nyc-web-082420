import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import Characters from './containers/Characters';
import Team from './containers/Team';
import { fetchAction } from './redux/actions';

class App extends React.Component {

  state = {
    team: []
  }

  componentDidMount() {
    this.props.fetchCharacters();
  }

  clickHandler = (character) => {
    // figure out how to pass that character to Team
    let copiedArray = [character, ...this.state.team]
    this.setState(() => ({ team: copiedArray }))
  }
  render() {

    return (
      <div className="App">
        <Team characters={this.state.team} />
        <Characters clickHandler={this.clickHandler} />
      </div>
    );
  }
}
function mdp(dispatch) {
  return { fetchCharacters: () => dispatch(fetchAction()) }
};

export default connect(null, mdp)(App);
