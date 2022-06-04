import {useContext} from "react";

import { TodosContext } from "../../TodosContext";
import "./Testing.css";

export default function AdditionTesting() {
  const { additionTest } = useContext(TodosContext);

  return <div onClick={additionTest} className="single-test-container">Add 10.000 todos</div>;
}
