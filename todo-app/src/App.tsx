import { useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import type { Todo } from "./types/todo";

const App = () => {

  const [todos, setTodos] = useState<Todo[]>([])

  const addTodoHandler = (text: string) => {
    const id = Math.random().toString()
    setTodos([...todos, {id, text}])
  }

  const removeTodoHandler = (todoId: string) => {
    const newTodo = todos.filter((todo: Todo) => {
      return todo.id !== todoId
    })
    setTodos(newTodo)
  }

  return (
    <main className="max-w-6xl mx-auto mt-10">
      <AddTodo onAddTodo={addTodoHandler}/>
      <TodoList items={todos} onRemoveTodo={removeTodoHandler}/>
    </main>
  );
};

export default App;
