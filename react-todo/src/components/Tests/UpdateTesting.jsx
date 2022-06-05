import { useState, useContext } from "react";

import { TodosContext } from "../../TodosContext";
import "./Testing.css";

export default function UpdateTesting() {
  const { todos, updateTest } = useContext(TodosContext);
  const [timeStart, setTimeStart] = useState();
  const [timeEnd, setTimeEnd] = useState();
  const [testCompleted, setTestCompleted] = useState(false);

  return (
    <div>
      <div
        className={`single-test-container ${
          testCompleted ? "test-disabled" : ""
        }`}
        onClick={() => {
          setTimeStart(performance.now());
          updateTest(todos).then(() => {
            setTimeEnd(performance.now());
            setTestCompleted(true);
          });
        }}
      >
        {testCompleted ? "Update completed" : "Update all todos"}
      </div>
      {timeStart && timeEnd && (
        <p style={{ textAlign: "center" }}>
          {Math.round(timeEnd - timeStart)} ms
        </p>
      )}
    </div>
  );
}
