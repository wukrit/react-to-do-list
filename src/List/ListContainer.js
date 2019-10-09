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

    dropItem = (event, targetId) => {
        const itemId = event.dataTransfer.getData('id')
        const newArr = [...this.state.listItems]
        const item = newArr.splice(itemId, 1)
        newArr.splice(targetId, 0, ...item)

        event.target.classList.remove("over")

        this.setState({
            listItems: [...newArr]
        })
        
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