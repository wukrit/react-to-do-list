import React from 'react'
import ListForm from './ListForm'
import ListItemContainer from './ListItemContainer'
import listData from './ListData'

class ListContainer extends React.Component {
    state = {
        listItems: [...listData]
    }

    newListItem = (event) => {
        event.preventDefault()
        const listItem = {
            id: this.state.listItems.length + 1,
            name: event.target.name.value,
            description: event.target.description.value
        }
        event.target.reset()
        this.setState({listItems: [...this.state.listItems, listItem]})
    }

    deleteListItem = (id) => {
        const index = id
        const newList = [...this.state.listItems]
        console.log(index)
        newList.splice(index, 1)
        console.log(newList)
        this.setState({listItems: [...newList]})
    }

    render() {
        return (
            < >     
            {console.log(this.state.listItems)}           
                <ListForm newListItem={this.newListItem} />
                <ListItemContainer listItems={this.state.listItems} deleteListItem={this.deleteListItem} />
            </ >
        )
    }
}

export default ListContainer