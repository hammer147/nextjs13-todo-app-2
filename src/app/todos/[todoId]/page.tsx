import { Todo } from 'typings'
import { notFound } from 'next/navigation'

type Props = {
  params: {
    todoId: string
  }
}

const getTodoById = async (todoId: string) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`, {
    next: { revalidate: 60 }
  })
  const todo: Todo = await response.json() // not the best ts here because when no todo is found, todo will be {}
  return todo
}

async function Todo({ params: { todoId } }: Props) {
  const todo = await getTodoById(todoId)

  if (!todo.id) return notFound() // renders the not-found.tsx page (note that return is not required)

  return (
    <div className='p-10 bg-yellow-200 border-2 m-2 shadow-lg'>
      <p>
        #{todo.id}: {todo.title}
      </p>
      <p>Completed: {todo.completed ? 'Yes' : 'No'}</p>
      <p className='border-t border-black mt-5 text-right'>By User: {todo.userId}</p>
    </div>
  )
}

export default Todo

export async function generateStaticParams() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos')
  const todos: Todo[] = await response.json()

  // for this demo, we only want to generate 10 pages to avoid being rate limited by the API
  const todosToGenerate = todos.slice(0, 10)

  return todosToGenerate.map(todo => ({
    todoId: todo.id.toString()
  }))
}
