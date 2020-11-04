import React from 'react'
import { NavLink } from 'react-router-dom'

class Character extends React.Component {

    state = {
        clicked: false,
        name: this.props.character.name
    }

    clickHandler() {
        this.props.clickHandler(this.props.character)
    }

    updateClickHandler = () => {
        this.setState({ clicked: true })
    }

    changeHandler = (e) => {
        this.setState({ name: e.target.value })
    }

    localUpdateHandler = (e) => {
        e.preventDefault()
        this.props.updateHandler(this.props.character.id, this.state.name)
    }

    render() {

        return (
            <NavLink to={`/characters/${this.props.character.id}`}>

                <div className="image" >
                    {this.state.clicked ? (
                        <form onSubmit={this.localUpdateHandler}>
                            <input type="text" value={this.state.name} onChange={this.changeHandler} />
                            <button>update</button>
                        </form>
                    ) : (
                            <h3 onClick={this.updateClickHandler} style={{ cursor: "pointer" }}>{this.props.character.name}</h3>
                        )}




                    <img alt="" src={this.props.character.img} />
                    <h3>{this.props.character.show}</h3>
                </div>
            </NavLink>
        )
    }
}

export default Character