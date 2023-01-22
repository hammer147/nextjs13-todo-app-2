import Link from 'next/link'
import { Todo } from 'typings'

const getTodos = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos')
  const todos: Todo[] = await response.json()
  return todos
}

async function TodoList() {
  const todos = await getTodos()
  return (
    <>
      {todos.map(todo => (
        <p key={todo.id}>
          <Link href={`/todos/${todo.id}`}>Todo: {todo.id}</Link>
        </p>
      ))}
    </>
  )
}

export default TodoList
