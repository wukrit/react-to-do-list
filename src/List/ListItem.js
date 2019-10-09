import React from 'react'
import './List.css'

class ListItem extends React.Component {

    render() {

        const {
                highlightListItem,
                removeHighlight,
                deleteListItem,
                dropItem,
                setDragStart,
                setDragEnd
             } = this.props.listItemEvents()

        return (
            <div 
                className="list-item list-box"
                draggable="true"
                onDragOver={(event) => event.preventDefault()}
                onDragEnter={(event) => highlightListItem(event.target)}
                onDragLeave={(event) => removeHighlight(event.target)} 
                onDragStart={(event) => setDragStart(event)}
                onDragEnd={(event) => setDragEnd(event)}
                onDrop={(event) => dropItem(event, this.props.taskId)}
                id={`list-item-index-${this.props.taskId}`}
            >
                <p className="task-name">
                    {this.props.taskName}
                </p> <br />
                <p className="task-description">
                    {this.props.taskDescription}
                </p> <br />
                <button onClick={() => {deleteListItem(this.props.taskId)}}>
                    X
                </button>
            </div>
        )
    }

}


export default ListItem