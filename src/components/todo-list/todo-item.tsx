import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { Todo } from "./";
import Controls, { formatTime } from "./controls";
import todoItemStyles from "./todo-item.css?inline";

export default component$((props: { todo: Todo }) => {
  useStylesScoped$(todoItemStyles);
  return (
    <li class="todo-item">
      <p class="todo-text">{props.todo.text}</p>
      {props.todo.status === "DONE" ? (
        <p>✅ in {formatTime(props.todo.timeTaken)}</p>
      ) : (
        <Controls todo={props.todo} />
      )}
    </li>
  );
});
