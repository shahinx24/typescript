type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

export default async function TodoList() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=10",
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch todos");
  }

  const todos: Todo[] = await response.json();

  return (
    <div>
      {todos.map((todo) => (
        <p key={todo.id}>{todo.title}</p>
      ))}
    </div>
  );
}