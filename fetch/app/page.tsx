import { Suspense } from "react";
import TodoList from "./components/TodoList";

export default function Home() {
  return (
    <div>
      <h1>Todo List</h1>
      <br />

      <Suspense fallback={<p>Loading todos...</p>}>
        <TodoList />
      </Suspense>
    </div>
  );
}
