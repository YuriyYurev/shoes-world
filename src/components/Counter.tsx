import React from "react";
import { useState } from "react";
import * as classes from "./Counter.module.scss";
export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Counter</h1>
      <button
        type="button"
        className={classes.btn}
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      <button
        type="button"
        className={classes.btn}
        onClick={() => setCount(count - 1)}
      >
        Decrement
      </button>
      <h3>{count}</h3>
    </div>
  );
}
