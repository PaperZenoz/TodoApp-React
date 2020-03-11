import React, {useContext, useState} from 'react'
import Context from './../context'


const useInputValue = (defaultValue = '') => {
    const [value, setValue] = useState(defaultValue)

    return {
        bind: {
            value,
            onChange: e => setValue(e.target.value)
        },

        clear: () => setValue(''),

        value: () => value,

    }


}


const AddTodo = () => {
    const {addTodo} = useContext(Context)

    const input = useInputValue('')

    const handlerSubmit = (e) => {
        e.preventDefault()
        if(input.value().trim()){
            addTodo(input.value())
            input.clear()
        }

    }


    return (
        <form action="#" className="add-todo" onSubmit={handlerSubmit}>
            <input {...input.bind} className="form-control"/>
        </form>
    )
}



export default AddTodo;