import React from 'react'
import ListForm from './ListForm'
import ListItemContainer from './ListItemContainer'
import listData from './ListData'

class ListContainer extends React.Component {
    state = {
        listItems: [...listData]
    }

    newListItem = (taskObj) => {
        const listItem = {
            id: this.state.listItems.length + 1,
            ...taskObj
        }
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
        console.log(this.state.listItems)
        event.target.classList.remove('over')
        const itemId = event.dataTransfer.getData('id')
        const newArr = [...this.state.listItems]
        const item = newArr.splice(itemId, 1)
        newArr.splice(targetId, 0, ...item)
        console.log(newArr)


        this.setState({
            listItems: [...newArr]
        })
        
    }

    setDragStart = (event) => {
        event.target.classList.add('selected')
        event.dataTransfer.clearData()
        event.dataTransfer.setData('id', event.target.getAttribute('id').substring(16))
    }

    setDragEnd = (event) => {
        event.target.classList.remove('selected')
    }

    listItemEvents = () => {
        return (
            {
                deleteListItem: this.deleteListItem,
                highlightListItem: this.highlightListItem,
                removeHighlight: this.removeHighlight,
                dropItem: this.dropItem,
                setDragStart: this.setDragStart,
                setDragEnd: this.setDragEnd
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