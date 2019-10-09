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

    highlightListItem = (listItem) => {
        if (listItem.classList.contains("list-item")) {
            listItem.classList.add("over")
        }
    }
    
    removeHighlight = (listItem) => {
        if (listItem.classList.contains("list-item")) {
            listItem.classList.remove("over")
        }
    }

    dropItem = (target, item) => {
        console.log(target, item)
        // if (listItem.classList.contains("list-item")) {
            
        // }
    }

    listItemEvents = () => {
        return (
            {
                deleteListItem: this.deleteListItem,
                highlightListItem: this.highlightListItem,
                removeHighlight: this.removeHighlight,
                dropItem: this.dropItem
            }
        )
    }
    
    render() {
        return (
            < >               
                <ListForm newListItem={this.newListItem} />
                <ListItemContainer listItems={this.state.listItems} listItemEvents={this.listItemEvents} />
            </ >
        )
    }
}

export default ListContainer