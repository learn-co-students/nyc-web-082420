import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Character from '../components/Character'
import CreateCharacters from '../components/CreateCharacter'

class Characters extends React.Component {

    state = {
        api: []
    }

    componentDidMount() {
        fetch('http://localhost:5000/api')
            .then(resp => resp.json())
            .then(api => this.setState({ api }))
            .catch(console.log)
    }

    renderCharacters = () => {
        return this.state.api.map((el) => <Character key={el.name} character={el} clickHandler={this.props.clickHandler} updateHandler={this.updateSubmitHandler} />)
    }

    submitHandler = (newCharacter) => {
        // this.setState((prevState) => ({ api: [newCharacter, ...prevState.api] }))

        fetch('http://localhost:5000/api', {
            method: "POST",
            headers: {
                "content-type": "application/json",
                accepts: "application/json"
            },
            body: JSON.stringify(newCharacter)
        })
            .then(resp => resp.json())
            .then(character => this.setState({ api: [...this.state.api, character] }))
            .catch(console.log)
    }

    updateSubmitHandler = (id, name) => {
        fetch(`http://localhost:5000/api/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
                accepts: "application/json"
            },
            body: JSON.stringify({ name })
        })
            .then(resp => resp.json())
            .then(character => {
                let newArray = [...this.state.api]
                let foundObj = newArray.find(el => el.id === character.id)
                newArray[newArray.indexOf(foundObj)] = character
                this.setState({ api: newArray })
            })
            .catch(console.log)
    }

    render() {
        // 1. when to render every character => index
        // when path = "/characters"
        // 2. when to render a single character => show 
        // when path = "/characters"
        return (
            <div className="container index">
                <h2>All Characters</h2>
                <CreateCharacters submitHandler={this.submitHandler} />

                <Switch>
                    <Route path="/characters/:id" render={(routerProps) => {
                        let id = parseInt(routerProps.match.params.id)
                        let character
                        if (this.state.api.length > 0) {
                            character = this.state.api.find(el => el.id === id)
                        }
                        return (
                            <>
                                {
                                    this.state.api.length > 0 ? <Character character={character} clickHandler={this.props.clickHandler} updateHandler={this.updateSubmitHandler} />
                                        :
                                        <h1>Loading</h1>
                                }
                            </>
                        )
                    }} />
                    <Route path="/characters" render={() => {
                        return (
                            <div>
                                {this.state.api.length > 0 ? this.renderCharacters() : <h1>LOADING</h1>}
                            </div>
                        )
                    }} />

                </Switch>


            </div>
        )
    }
}

export default Characters