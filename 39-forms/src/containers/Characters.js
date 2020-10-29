import React from 'react'
import { api } from '../api'
import Character from '../components/Character'
import CreateCharacters from '../components/CreateCharacter'

class Characters extends React.Component {

    state = {
        api
    }

    renderCharacters = () => {
        return this.state.api.map((el) => <Character key={el.name} character={el} clickHandler={this.props.clickHandler} />)
    }

    submitHandler = (newCharacter) => {
        this.setState((prevState) => ({ api: [newCharacter, ...prevState.api] }))
    }

    render() {
        console.log("Characters state", this.state)
        return (
            <div className="container index">
                <h2>All Characters</h2>
                <CreateCharacters submitHandler={this.submitHandler} />
                <div>
                    {this.renderCharacters()}
                </div>
            </div>
        )
    }
}

export default Characters