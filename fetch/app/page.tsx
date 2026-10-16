"use client";
import { useEffect, useState } from "react";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=10"
      );

      const data: Todo[] = await res.json();
      setTodos(data);
    };

    fetchTodos();
  }, []);

  return (
    <main>
      <h1>Todo List</h1>

      {todos.map((todo) => (
        <p key={todo.id}>{todo.title}</p>
      ))}
    </main>
  );
}
