type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

export default async function Home() {
  const responce = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=10"
  )

  const todos : Todo[] = await responce.json();

  return (
    <div>
      <h1>Todo List</h1>
      <br/>
      {todos.map((todo)=>(
        <p key={todo.id}>{todo.title}</p>
      ))}
    </div>
  );
}
 