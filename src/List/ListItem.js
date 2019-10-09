import React from 'react'

class ListItem extends React.Component {

    render() {
        return (
            <div className="list-item">
                <p className="task-name">
                    {this.props.taskName}
                </p>
                <p className="task-description">
                    {this.props.taskDescription}
                </p>
                <button onClick={() => {this.props.deleteListItem(this.props.taskId)}}>
                    X
                </button>
            </div>
        )
    }

}

export default ListItem