import React from 'react'

const Character = (props) => {

    function clickHandler() {
        props.clickHandler(props.character)
    }
    return (
        <div className="image" onClick={props.team ? console.log("can't remove") : clickHandler}>
            <h3>{props.character.name}</h3>
            <img alt="" src={props.character.img} />
            <h3>{props.character.show}</h3>
        </div>
    )
}

export default Character