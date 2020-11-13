import React from 'react';
import { connect } from 'react-redux';
import { counterAction } from '../redux/actions'

class Character extends React.Component {

    state = {
        clicked: false,
        name: this.props.character.name
    }

    // clickHandler = () => {
    //     this.props.clickHandler(this.props.character)
    // }

    reduxClickHandler = () => {
        console.log("clicking")
        this.props.incrementCounter();
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
        // console.log("Character Props", this.props.incrementCounter)
        return (
            <div className="image" >
                {this.state.clicked ? (
                    <form onSubmit={this.localUpdateHandler}>
                        <input type="text" value={this.state.name} onChange={this.changeHandler} />
                        <button>update</button>
                    </form>
                ) : (
                        <h3 onClick={this.updateClickHandler} style={{ cursor: "pointer" }}>{this.props.character.name}</h3>
                    )}




                <img alt="" src={this.props.character.img} onClick={this.props.team ? console.log("can't remove") : this.reduxClickHandler} />
                <h3>{this.props.character.show}</h3>
            </div>
        )
    }
}
// HOC => Higher Order Component => A Component that takes in another component and returns the component with new props 


// function connect(msp, mdp){
//     let newMDP = mdp(store.dispatch)
//     // msp => give access to state 
//     // mdp => give access to dispatch
//     function modifiedComponent(component){
//         return <Character {...componentProps, ...msp(), ...mdp() }/> 
//     }
// }

// connect(msp, mdp)(Character)
function mdp(dispatch) {
    return { incrementCounter: () => dispatch(counterAction()) }

};
export default connect(null, mdp)(Character)