import React, {useEffect, useState} from 'react';
import './App.css';
import TodoItem from "./components/TodoItem";
import Context from "./context"
import Loader from "./Loader";


const AddTodo = React.lazy(() => new Promise(resolve => {
        setTimeout(() => {
            resolve(import('./components/AddTodo'))
        }, 3000)
    })

)


const App = () => {
    const [todos, setTodos] = useState(''
        // [
        //     {id: 1, title: 'Купить молоко', completed: false},
        //     {id: 2, title: 'Купить соль', completed: false},
        //     {id: 3, title: 'Купить рыбу', completed: false},
        //     {id: 4, title: 'Купить сахар', completed: false},
        //     {id: 5, title: 'Купить пиццу', completed: false},
        //     {id: 6, title: 'Купить воду', completed: false},
        //     {id: 7, title: 'Купить чай', completed: false}
        // ]
    )

    const [loading, setLoading] = useState(true)


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=20')
            .then(response => response.json()).then(todos => {
            setTimeout(() => {
                setTodos(todos)
                setLoading(false)
            }, 2000)
        })
    }, [])


    const todoCheck = (id) => {
        setTodos(
            todos.map(todo => {
                if (id === todo.id) {
                    todo.completed = !todo.completed
                }

                return todo
            })
        )
    }
    const removeTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }
    const addTodo = (text) => {
        debugger
        setTodos(todos.concat([{
            id: Date.now(),
            title: text,
            completed: false
        }]))
    }


    return (
        <Context.Provider value={{todoCheck, removeTodo, addTodo}}>
            <div className="App">
                <h1>Тест</h1>



                <React.Suspense fallback={<Loader/>}>
                    <AddTodo/>
                </React.Suspense>

                {loading && <Loader/>}

                {todos.length ? (todos.map((todo, index) => <TodoItem key={todo.id} todo={todo} index={index} todoCheck={todoCheck}/>)) :
                    (loading ? null : <p>Задач нет</p>)}

            </div>
        </Context.Provider>
    )
}


export default App
