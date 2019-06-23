import React from 'react'
const Todos=({todos,deleteTodo})=>{
    const todoList=todos.length?(
        todos.map(todo=>{
            return(
                <div className={todo.active?"collection-item active":"collection-item"} key={todo.id}>
                    <span >{todo.content} </span>
                    <span>{todo.date.toString()} </span>
                    <span className="secondary-content new badge red" data-badge-caption="supprimer" onClick={()=>{deleteTodo(todo.id)}}>x</span>
                </div>
            )
        })
        
    ):(<p className="center">Vous n'avez rien a faire </p>)
    return(
        <div className="todos collection">
            {todoList}
        </div>
    )
}
export default Todos