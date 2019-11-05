import React from 'react';

const Todos = ({todos, deleteTodo}) => {

    //controlla se c ha una lunghezza = vero falso
    const todosList = todos.length ? (
        //se e vero..
        todos.map(todo => {
            return (
                <div className="collection item" key={todo.id}>
                    <span onClick={() => {deleteTodo(todo.id)}}>{todo.content}</span>
                </div> //onclick invoca la funzione
            )
        })
    ) : (
        //se nn ci sono todo rimanenti = falso
        <p className="center">Hai finito le cose da fare</p>
    )

    return (
        <div className="todos collection">
        {todosList}
        </div>
    )
}

export default Todos