import { component$, useSignal, useStylesScoped$ } from "@builder.io/qwik";
import { TodoState } from ".";
import newTodoStyles from "./new-todo.css?inline";

export default component$((props: { todoState: TodoState }) => {
  useStylesScoped$(newTodoStyles);

  const newTodo = useSignal("");

  return (
    <form action="javascript:void(0);" class="new-todo">
      <input
        type="text"
        name="new-todo"
        placeholder="take a break"
        value={newTodo.value}
        onInput$={(e) => {
          newTodo.value = (e.target as HTMLInputElement).value;
        }}
      />
      <button
        type="submit"
        onClick$={() => {
          props.todoState.todoList.push({
            id: Math.random().toFixed(5).toString(),
            text: newTodo.value,
            status: "PENDING",
            timeTaken: 0,
          });
          newTodo.value = "";
        }}
        disabled={newTodo.value.length <= 3}
      >
        Add
      </button>
    </form>
  );
});
