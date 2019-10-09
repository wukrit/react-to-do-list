import React from 'react'
import ListItem from './ListItem'

class ListItemContainer extends React.Component {

    render() {
        return (
            <div className="list-item-container">
                {
                    this.props.listItems.map((item, index) => {
                        return (
                            <ListItem key={index} taskId={index} taskName={item.name} taskDescription={item.description} listItemEvents={this.props.listItemEvents} />
                        )
                    })
                }
            </div>
        )
    }

}

export default ListItemContainer