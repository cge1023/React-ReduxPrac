import "./App.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const count = useSelector(state=>state.count);

  const increase = () => {
    dispatch({ type: "INCREMENT" });
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increase}>increase</button>
    </div>
  );
}

export default App;
