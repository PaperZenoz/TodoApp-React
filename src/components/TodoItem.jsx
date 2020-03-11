import React, {useContext} from 'react'
import Context from './../context'

const TodoItem = ({todo, index}) => {
    const {todoCheck, removeTodo} = useContext(Context)

    let classes = []

    let checkControl =[]

    if (todo.completed) {
        classes.push('todo-item__done')
    }

    checkControl.push("checkControl" + todo.id)


    return (
        <li className="todo-item list-group-item was-validated">
            <div className={classes.join(' ')}>
                <div className="todo-item__todo custom-control custom-checkbox mb-3 ">
                    <input type="checkbox" checked={todo.completed} onChange={todoCheck.bind(null, todo.id)} className="custom-control-input" id={checkControl.join('')} required/>
                    <label class="custom-control-label" for={checkControl.join('')}><strong>{index + 1} </strong>{todo.title}</label>
                </div>
            </div>
            <div>
                <button className="btn btn-outline-danger" onClick={removeTodo.bind(null, todo.id)}>
                   Удалить
                </button>
            </div>
        </li>
    )
}


export default TodoItem
