import React, { Component } from 'react'

class AddTodo extends Component {
    state = {
content: ''
    }
    handleChange = (e) => {
    this.setState({
    content: e.target.value
})
    }
    //cosi la pagina non si ricarica
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state)
        //torna vuoto quando una volta aggiunto
        this.setState({
            content: ''
        })
    }
    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>add New todo:</label>
                    <input type="text" onChange={this.handleChange} value={this.state.content} />
                    </form>
            </div>
        )
    }
}

export default AddTodo