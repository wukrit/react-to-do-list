import React from 'react'
import ListItem from './ListItem'

class ListItemContainer extends React.Component {

    render() {
        return (
            <div className="list-item-container">
                This is a list item container
                <ListItem />
            </div>
        )
    }

}

export default ListItemContainer