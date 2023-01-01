import React from 'react'

export const TodoForm = (props) => {
    const {todo, handleFormSubmit, handleInputTodo} = props
  return (
    <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            value={todo}
            name="todo"
            onChange={handleInputTodo}
          ></input>
          <button type="submit">タスク追加</button>
        </form>
  )
}
