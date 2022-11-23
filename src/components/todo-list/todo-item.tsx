import { component$, PropFunction, useStylesScoped$ } from "@builder.io/qwik";
import { Todo } from "./";
import Controls, { formatTime } from "./controls";
import todoItemStyles from "./todo-item.css?inline";

export default component$(
  (props: {
    todo: Todo;
    deleteTodo: PropFunction<(todoID: string) => void>;
  }) => {
    useStylesScoped$(todoItemStyles);
    return (
      <li class="todo-item">
        <p class="todo-text">{props.todo.text}</p>
        {props.todo.status === "DONE" ? (
          <p>✅ in {formatTime(props.todo.timeTaken)}</p>
        ) : (
          <Controls todo={props.todo} deleteTodo={props.deleteTodo} />
        )}
      </li>
    );
  }
);
