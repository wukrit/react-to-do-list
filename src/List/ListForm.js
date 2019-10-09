import React from 'react'

class ListForm extends React.Component {

    render() {
        return (
            <div className="list-form">
                <form onSubmit={this.props.newListItem} >
                    <label>Make a New Task</label>
                    <br />
                    <input type="textfield" name="name" placeholder="Enter New Task"></input>
                    <br />
                    <input type="textfield" name="description" placeholder="Enter New Task Description"></input>
                    <br />
                    <input type="submit"></input>
                </form>
            </div>
        )
    }

}

export default ListForm 