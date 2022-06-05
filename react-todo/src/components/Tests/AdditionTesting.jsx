import { useState, useContext } from "react";

import { TodosContext } from "../../TodosContext";
import "./Testing.css";

export default function AdditionTesting() {
  const { addTest } = useContext(TodosContext);
  const [timeStart, setTimeStart] = useState();
  const [timeEnd, setTimeEnd] = useState();

  return (
    <div>
      <div
        className="single-test-container"
        onClick={() => {
          setTimeStart(performance.now());
          addTest().then(() => {
            setTimeEnd(performance.now());
          });
        }}
      >
        Add 10.000 todos
      </div>
      {timeStart && timeEnd && (
        <p style={{ textAlign: "center" }}>
          {Math.round(timeEnd - timeStart)} ms
        </p>
      )}
    </div>
  );
}
