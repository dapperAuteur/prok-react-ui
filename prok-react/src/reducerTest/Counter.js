import React, { useReducer } from "react";
import reducerCount, { init } from "./reducerCount";

function Counter({ initialCount }) {
  const [state, dispatch] = useReducer(reducerCount, initialCount, init);
  return (
    <>
      Count: {state.count}
      <button
        onClick={() => dispatch({ type: "reset", payload: initialCount })}
      >
        Reset
      </button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </>
  );
}

export default Counter;
