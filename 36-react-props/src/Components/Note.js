import React from 'react'

// props object => {content: "drake"}
function Note(props) {
    let { content } = props
    return <li>{content}</li>
}


// class Note extends React.Component {
//     render() {
//         return <li>{this.props.content}</li>
//     }
// }


export default Note