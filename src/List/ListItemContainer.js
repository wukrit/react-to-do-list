import React from 'react'
import ListItem from './ListItem'

class ListItemContainer extends React.Component {

    render() {
        return (
            < >
                {
                    this.props.listItems.map((item, index) => {
                        return (
                            <ListItem key={index} taskId={index} taskName={item.name} taskDescription={item.description} deleteListItem={this.props.deleteListItem} />
                        )
                    })
                }
            </ >
        )
    }

}

export default ListItemContainer