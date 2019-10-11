import React from 'react'
import ListItem from './ListItem'

const ListItemContainer = (props) => {
    return (
        <div className="list-item-container">
            {
                props.listItems.map((item, index) => {
                    return (
                        <ListItem 
                            key={index}
                            taskId={index}
                            taskName={item.name} 
                            taskDescription={item.description} 
                            listItemEvents={props.listItemEvents} 
                        />
                    )
                })
            }
        </div>
    )
}

export default ListItemContainer