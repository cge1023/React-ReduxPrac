import "./App.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Box from "./component/Box";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);
 // payload는 함수의 매개변수같은 느낌 / 내가 보내고싶은 값을 리듀서에 전달
  const increase = () => {
    dispatch({ type: "INCREMENT", payload: { num: 5 } });
  };

  const decrease = () => {
    dispatch({ type: "DECREMENT", payload: { num: 3 } });
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increase}>increase</button>
      <button onClick={decrease}>decrease</button>
      <Box />
    </div>
  );
}

export default App;
