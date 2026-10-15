import { useState } from "react"

type Todo = {
  id: number;
  text: string;
  completed: boolean;
}

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [text, setText] = useState("")
  const [editId, setEditId] = useState<number | null>(null);
  const [editText, setEditText] = useState("");

  const addTodo = () => {
    if (text.trim() === "") return;

    const newTodo: Todo = {
      id: Date.now(),
      text: text,
      completed: false,
    }

    setTodos([...todos, newTodo]);
    setText("")
  }

  const handleEdit = (todo: Todo) => {
    setEditId(todo.id);
    setEditText(todo.text);
  };

  const saveEdit = (id: number) => {
    if (editText.trim() === "") return;

    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, text: editText }
          : todo
      )
    );

    setEditId(null);
    setEditText("");
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  return (
    <main>
      <div className="inputDiv">
        <h1>Todo List</h1>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)}
          placeholder="Enetr Task..." />
        <button onClick={addTodo}>Add</button>
      </div>
      <div>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
              />

              {editId === todo.id ? (
                <>
                  <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                  />

                  <button onClick={() => saveEdit(todo.id)}>
                    Save
                  </button>

                  <button
                    onClick={() => {
                      setEditId(null);
                      setEditText("");
                    }}
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <span
                    style={{
                      textDecoration: todo.completed
                        ? "line-through"
                        : "none",
                    }}
                  >
                    {todo.text}
                  </span>

                  <button onClick={() => handleEdit(todo)}>
                    Edit
                  </button>
                </>
              )}

              <button onClick={() => deleteTodo(todo.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}
