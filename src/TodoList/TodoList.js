import './TodoList.css'

function TodoList(props) {

  
    
    return (
        <ul className="TodoList">
          {props.todoList.map((todo, index) => {
            const classesText = [
              'TodoList__text'
            ]
            if(todo.completed) {
              classesText.push('TodoList__text_completed')
            }
            return (
              <li key={todo.id} className="TodoList__item">
                <input type="checkbox" onChange={() => props.toggleTodo(todo, index)} />
                <p className={classesText.join(' ')}>{index + 1 + '.' + todo.title}</p>
                <button 
                className="TodoList__bttn" 
                onClick={() => props.removeItem(todo, index)}>
                </button>
              </li>
            )
          })}
        </ul>
    )
}

export default TodoList;