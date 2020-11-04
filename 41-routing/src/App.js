import React from 'react';
import './App.css';
import Characters from './containers/Characters';
import { Route, Switch } from 'react-router-dom'
import Team from './containers/Team';

class App extends React.Component {

  state = {
    team: []
  }

  clickHandler = (character) => {
    // figure out how to pass that character to Team
    let copiedArray = [character, ...this.state.team]
    this.setState(() => ({ team: copiedArray }))
  }
  render() {

    return (
      <div className="App">
        <Switch>
          <Route path="/team" render={() => <Team characters={this.state.team} />} />
          <Route path="/characters" render={() => <Characters clickHandler={this.clickHandler} />} />
          <Route path="/characters" render={() => <Characters clickHandler={this.clickHandler} />} />
          <Route path="/" render={() => <h1>Welcome</h1>} />
        </Switch>

      </div>
    );
  }
}

export default App;
