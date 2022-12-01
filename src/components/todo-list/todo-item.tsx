import { component$, PropFunction, useStylesScoped$ } from "@builder.io/qwik";
import { Todo } from "./";
import Controls, { formatTime } from "./controls";
import todoItemStyles from "./todo-item.css?inline";

export default component$(
  (props: {
    todo: Todo;
    onComplete?: PropFunction<(timeTaken: number) => void>;
    onDelete: PropFunction<() => void>;
  }) => {
    useStylesScoped$(todoItemStyles);
    return (
      <li class="todo-item">
        <p class="todo-text">{props.todo.text}</p>
        {props.todo.status === "DONE" ? (
          <p>✅ in {formatTime(props.todo.timeTaken)}</p>
        ) : (
          <Controls onComplete={props.onComplete} onDelete={props.onDelete} />
        )}
      </li>
    );
  }
);
