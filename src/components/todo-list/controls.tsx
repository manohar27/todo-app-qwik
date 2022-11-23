import {
  component$,
  PropFunction,
  useSignal,
  useStore,
  useStylesScoped$,
} from "@builder.io/qwik";
import { Todo } from ".";
import controlStyles from "./controls.css?inline";

export const formatTime = (timeInSeconds: number) => {
  const minutes = String(Math.floor(timeInSeconds / 60)).padStart(2, "0");
  const seconds = String(timeInSeconds % 60).padStart(2, "0");
  return `${minutes}:${seconds}`;
};

export default component$(
  (props: {
    todo: Todo;
    deleteTodo: PropFunction<(todoID: string) => void>;
  }) => {
    useStylesScoped$(controlStyles);
    const timerInfo = useStore({
      timer: {
        timerId: 0 as any,
        duration: 0,
      },
    });

    const isTimerRunning = useSignal(false);

    return (
      <div class="controls">
        <p class="timer">⏳ {formatTime(timerInfo.timer.duration)}</p>
        <section class="action-container">
          <button
            onClick$={() => {
              if (isTimerRunning.value) {
                isTimerRunning.value = false;
                clearInterval(timerInfo.timer.timerId);
              } else {
                timerInfo.timer.timerId = setInterval(() => {
                  timerInfo.timer = {
                    ...timerInfo.timer,
                    duration: timerInfo.timer.duration + 1,
                  };
                }, 1000);
                isTimerRunning.value = true;
              }
            }}
          >
            ⏱ {isTimerRunning.value ? "pause" : "start"}
          </button>
          <button
            onClick$={() => {
              props.todo.status = "DONE";
              props.todo.timeTaken = timerInfo.timer.duration;
              clearInterval(timerInfo.timer.timerId);
              isTimerRunning.value = false;
            }}
          >
            ✅ done
          </button>
          <button
            onClick$={() => {
              props.deleteTodo(props.todo.id);
            }}
          >
            ❌ delete
          </button>
        </section>
      </div>
    );
  }
);
