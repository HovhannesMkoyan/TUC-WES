import { useState, useContext } from "react";

import { TodosContext } from "../../TodosContext";
import "./Testing.css";

export default function UpdateTesting() {
  const { todos, updateTest } = useContext(TodosContext);
  const [timeStart, setTimeStart] = useState();
  const [timeEnd, setTimeEnd] = useState();

  return (
    <div>
      <div
        className="single-test-container"
        onClick={() => {
          setTimeStart(performance.now());
          updateTest(todos).then(() => {
            setTimeEnd(performance.now());
          });
        }}
      >
        Update all todos
      </div>
      {timeStart && timeEnd && (
        <p style={{ textAlign: "center" }}>
          {Math.round(timeEnd - timeStart)} ms
        </p>
      )}
    </div>
  );
}
