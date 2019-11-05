import React, { Component } from 'react';
import Todos from './todos'
import AddTodo from './AddTodo'

class App extends Component  {
  state = {
    todos: [
      {id: 1, content: 'compra qualcosa'},
      {id: 2, content: 'gioca a mario kart'}
    ]
  }
//filtra in base all id
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todos.id !== id //se il todo nn e uguale all id cancella 
    });
    this.setState({
      todos
    })
  }

addTodo = (todo) => {
  //add proprieta id a todo
todo.id = Math.random();
//creo nuovo array
let todos = [...this.state.todos, todo]
this.setState({
  todos
})
}
  render (){ 
    return ( 
      <div className="todo-app container">
      <h1 className="center blue-text"> Todo's'</h1>
      <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
      <AddTodo addTodo={this.addTodo}/>
    </div>
  );
}
}

export default App;
