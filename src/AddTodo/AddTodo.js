import React, {useState} from 'react';
import './AddTodo.css';

function AddTodo({createTodo}) {
  const [value, setValue] = useState('')

  function submitForm(event) {
    event.preventDefault()

    if(value.trim()) {
      createTodo(value)
      setValue('');
    }
  }


  return (
      <form className="AppTodo__form" onSubmit={submitForm}>
        <input type='text' 
        className="AppTodo__text" 
        placeholder="Add action..." 
        value={value} 
        onChange={ event => setValue(event.target.value) }
        />

        <input 
        type='submit' value="Add" 
        className="AppTodo__button" 
        />
      </form>
  )
}

export default AddTodo