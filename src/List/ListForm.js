import React from 'react'
import './List.css'

const defaultState = {
    name: "",
    description: ""
}

class ListForm extends React.Component {

    state = {
        name: "",
        description: ""
    }

    draftItem = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitDraft = (event) => {
        event.preventDefault()
        this.props.newListItem(this.state)
        this.setState(defaultState)
    }

    render() {
        return (
            <div className="list-form list-box">
                <form onSubmit={this.submitDraft} >
                    <label>Make a New Task</label>
                    <br />
                    <input 
                        type="textfield" 
                        name="name"
                        value={this.state.name}
                        placeholder="Enter New Task"
                        onChange={this.draftItem}
                    >
                    </input>
                    <br />
                    <input 
                        type="textfield" 
                        name="description" 
                        value={this.state.description}
                        placeholder="Enter New Task Description"
                        onChange={this.draftItem}
                    >
                    </input>
                    <br />
                    <input type="submit"></input>
                </form>
            </div>
        )
    }

}

export default ListForm 