import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h1>Hello World.</h1>
      <p>The count is {count}</p>
      <button onClick={() => setCount((count) => count + 1)}>+</button>
      <button onClick={() => setCount((count) => count - 1)}>-</button>
      <button onClick={() => setCount((count) => 0)}>Reset</button>
    </div>
  )
}

export default App;