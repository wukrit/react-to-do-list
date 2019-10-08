import React from 'react'
import ListForm from './ListForm'
import ListItemContainer from './ListItemContainer'

class ListContainer extends React.Component {
    state = {
        listItems: []
    }

    render() {
        return (
            <div className="list-container">                
                <ListForm />
                <ListItemContainer />
            </div>
        )
    }
}

export default ListContainer