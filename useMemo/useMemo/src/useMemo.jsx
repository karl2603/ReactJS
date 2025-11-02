import React from 'react'
import { useState, useMemo } from 'react';
import "./useMemo.css";

function UseMemo() {
  const [count, setCount] = useState(0);

  const double = useMemo(() => {
    return count * 2
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <p>Double: {double}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

export { UseMemo };