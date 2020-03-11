import React, {useContext} from 'react'
import Context from './../context'

const TodoItem = ({todo, index}) => {
    const {todoCheck, removeTodo} = useContext(Context)

    let classes = []

    if (todo.completed) {
        classes.push('todo-item__done')
    }


    return (
        <li className="todo-item list-group-item">
            <div className={classes.join(' ')}>
                <div className="todo-item__todo">
                    <input type="checkbox" checked={todo.completed} onChange={todoCheck.bind(null, todo.id)}/>
                    <p><strong>{index + 1} </strong>{todo.title}</p>
                </div>
            </div>
            <div>
                <button className="btn btn-outline-danger" onClick={removeTodo.bind(null, todo.id)}>
                    &times;
                </button>
            </div>
        </li>
    )
}


export default TodoItem
