import React, { Component } from 'react';
import { connect } from 'react-redux';
import Character from '../components/Character';
// Component => class 
// {dog} => props.dog => dog
const Team = (props) => {
    console.log("Team Props", props)
    function renderCharacters() {
        return props.characters.map(el => <Character key={el.name} character={el} team />)
    }
    return (
        <div className="container team">
            <h2>My Team</h2>
            <div>
                <h1>Counter:{props.counter}</h1>
                {renderCharacters()}
            </div>
        </div>
    )
}

function msp(state) {
    // console.log("Redux State", state);
    return { counter: state.counter };
};

export default connect(msp)(Team)