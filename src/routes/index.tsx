import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import TodoList from "../components/todo-list";

export default component$(() => {
  return (
    <div>
      <TodoList />
    </div>
  );
});

export const head: DocumentHead = {
  title: "todo app",
  meta: [
    {
      name: "description",
      content: "todo application in qwik",
    },
  ],
};
