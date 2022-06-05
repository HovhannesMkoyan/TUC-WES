import { useState, useEffect, useContext } from "react";

import { TodosContext } from "../../TodosContext";
import "./Testing.css";

export default function AdditionTesting() {
  const { additionTest } = useContext(TodosContext);
  const [timeStart, setTimeStart] = useState();
  const [timeEnd, setTimeEnd] = useState();

  return (
    <div>
      <div
       className="single-test-container"
        onClick={async () => {
          setTimeStart(performance.now());
          additionTest().then(() => {
            setTimeEnd(performance.now())
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
