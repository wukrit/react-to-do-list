import React from 'react'
import './List.css'

class ListItem extends React.Component {

    render() {

        const {
                highlightListItem,
                removeHighlight,
                deleteListItem,
                dropItem
             } = this.props.listItemEvents()

        return (
            <div 
                className="list-item"
                draggable="true"
                onDragEnter={(event) => highlightListItem(event.target)}
                onDragLeave={(event) => removeHighlight(event.target)} 
                onDrop={(event) => dropItem(event.target, this)}
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