import React from 'react';
import { connect } from 'react-redux';
import { createAction } from '../redux/actions';

class CreateCharacters extends React.Component {
    state = {
        name: "",
        img: "",
        show: "",
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    localSubmitHandler = (e) => {
        e.preventDefault()
        this.props.submitHandler(this.state)
        this.setState({ name: "", img: "", show: "" })
    }

    render() {
        return (
            <form onSubmit={this.localSubmitHandler}>
                <input name="name" type="text" placeholder="enter name" value={this.state.name} onChange={this.changeHandler} />
                <input name="img" type="text" placeholder="enter image" value={this.state.img} onChange={this.changeHandler} />
                <input name="show" type="text" placeholder="enter show" value={this.state.show} onChange={this.changeHandler} />
                <button>Create Character</button>
            </form>
        )
    }
}
function mdp(dispatch) {
    return { submitHandler: (newCharacter) => dispatch(createAction(newCharacter)) };
};

export default connect(null, mdp)(CreateCharacters)