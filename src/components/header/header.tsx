import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./header.css?inline";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <header>
      <div class="logo">
        <a href="/">
          <h1>todo</h1>
        </a>
        <h3>Let's get things done &nbsp;✅</h3>
      </div>
    </header>
  );
});
