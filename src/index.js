import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {useState} from "react";

function App() {
  const [count, setCount] = useState(0);

  const Increase =()=> {
    setCount(count + 1);
  };
  const Decrease = ()=> {
    setCount (count-1);
  };
  const Reset = () => {
    setCount(0);
  };

  return (
    <main>
      <section>
        <h1>Counter</h1>
        <div>{count}</div>
        <div>
          <button onClick={Increase}>Increase</button>
          <button onClick={Decrease}>Decrease</button>
        </div>
        <button onClick={Reset}>Reset</button>
      </section>
    </main>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

