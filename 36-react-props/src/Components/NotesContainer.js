import React from 'react'
import Note from './Note'

class NotesContainer extends React.Component {

    apiResponse = () => {
        return ["First Note", "Second Note", "Third Note", "Fourth Note"]
    }

    renderNotes = () => {
        return this.apiResponse().map(note => <Note key={note} content={note} />)
    }

    // lifecycle
    render() {
        // let notes = this.apiResponse().map(note => <Note />)
        return (
            // when rendering Note give it a prop called content
            <ul>

                {this.renderNotes()}
                {/* {notes} */}
                {/* {this.apiResponse().map(note => <Note />)} */}


            </ul >
        )
    }

}

export default NotesContainer