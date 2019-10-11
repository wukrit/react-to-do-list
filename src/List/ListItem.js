import React from 'react'
import './List.css'

const ListItem = (props) => {
    const {
            highlightListItem,
            removeHighlight,
            deleteListItem,
            dropItem,
            setDragStart,
            setDragEnd
            } = props.listItemEvents()

    return (
        <div 
            className="list-item list-box"
            draggable="true"
            onDragOver={(event) => event.preventDefault()}
            onDragEnter={(event) => highlightListItem(event.target)}
            onDragLeave={(event) => removeHighlight(event.target)} 
            onDragStart={(event) => setDragStart(event)}
            onDragEnd={(event) => setDragEnd(event)}
            onDrop={(event) => dropItem(event, props.taskId)}
            id={`list-item-index-${props.taskId}`}
        >
            <p className="task-name">
                {props.taskName}
            </p> <br />
            <p className="task-description">
                {props.taskDescription}
            </p> <br />
            <button onClick={() => {deleteListItem(props.taskId)}}>
                X
            </button>
        </div>
    )
}



export default ListItem