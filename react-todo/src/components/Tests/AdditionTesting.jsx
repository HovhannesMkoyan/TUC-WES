import { useState, useEffect, useContext } from "react";

import { TodosContext } from "../../TodosContext";
import Timer from "./Timer";
import "./Testing.css";

export default function AdditionTesting() {
  const { additionTest } = useContext(TodosContext);
  const [running, setRunning] = useState(false);
  const [timeStart, setTimeStart] = useState();
  const [timeEnd, setTimeEnd] = useState();

  return (
    <div>
      <div onClick={() => {
        if (!running) {
          setTimeStart(new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds());
          setRunning(true);

          additionTest().then(() => setTimeEnd(new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds()));
        }
      }} className={`single-test-container ${running ? "test-disabled" : ""}`}>
        Add 10.000 todos
      </div>
      <p>Time start - {timeStart}</p>
      <p>Time end - {timeEnd}</p>
      {/* <Timer running={running}/> */}
    </div>
  );
}
