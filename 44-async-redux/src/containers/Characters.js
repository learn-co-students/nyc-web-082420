import React from 'react'
import { connect } from 'react-redux';
import Character from '../components/Character'
import CreateCharacters from '../components/CreateCharacter'

class Characters extends React.Component {

    renderCharacters = () => {
        return this.props.api.map((el) => <Character key={el.name} character={el} clickHandler={this.props.clickHandler} updateHandler={this.updateSubmitHandler} />)
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
                let newArray = [...this.props.api]
                let foundObj = newArray.find(el => el.id === character.id)
                newArray[newArray.indexOf(foundObj)] = character
                this.setState({ api: newArray })
            })
            .catch(console.log)
    }

    render() {
        return (
            <div className="container index">
                <h2>All Characters</h2>
                <CreateCharacters />
                <div>
                    {this.props.api.length > 0 ? this.renderCharacters() : <h1>LOADING</h1>}
                </div>
            </div>
        )
    }
}
function msp(state) {
    return { api: state.api };
};
export default connect(msp)(Characters)