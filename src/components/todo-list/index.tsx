import { $, component$, useStore, useStylesScoped$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import NewTodo from "./new-todo";
import TodoItem from "./todo-item";
import styles from "./todo-list.css?inline";

export default component$(() => {
  useStylesScoped$(styles);

  const todoState = useStore(
    {
      todoList: [
        {
          id: "1",
          text: "Create first qwik app",
          status: "PENDING",
          timeTaken: 0,
        },
        {
          id: "2",
          text: "Create the lunch and learn slides",
          status: "PENDING",
          timeTaken: 0,
        },
      ],
    },
    { recursive: true }
  );

  const todosPending = todoState.todoList.filter(
    (todo) => todo.status === "PENDING"
  );
  const completedTodos = todoState.todoList.filter(
    (todo) => todo.status === "DONE"
  );

  return (
    <ol class="todo-list">
      <NewTodo todoState={todoState} />

      <ol>
        <h2>Next up ⏱</h2>
        {todosPending.length === 0 && (
          <h4 class="empty-header">
            Nothing here. Add a task to get started. If you are all done,{" "}
            <Link href="/flower">check this out</Link>
          </h4>
        )}
        {todosPending.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodo={$((todoID: string) => {
              todoState.todoList = todoState.todoList.filter(
                (todo) => todoID !== todo.id
              );
            })}
          />
        ))}
      </ol>

      <ol class="completed-todos">
        <h2>Completed 🎉 </h2>
        {completedTodos.length === 0 && (
          <h4 class="empty-header">
            You haven't finished any tasks. Get to work 💪🏻
          </h4>
        )}
        {completedTodos.map((todo) => (
          <TodoItem todo={todo} />
        ))}
      </ol>
    </ol>
  );
});

export type Todo = {
  id: string;
  text: string;
  status: string;
  timeTaken: number;
};

export type TodoState = {
  todoList: Array<Todo>;
};