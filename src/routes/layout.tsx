import { component$, Slot, useStyles$ } from '@builder.io/qwik';
import Header from '../components/header/header';
import globalCss from './global.css?inline'

export default component$(() => {
  useStyles$(globalCss);
  return (
    <>
      <main>
        <Header />
        <section>
          <Slot />
        </section>
      </main>
    </>
  );
});
