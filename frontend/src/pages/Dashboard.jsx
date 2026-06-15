import { useState } from "react";
import PredictForm from "../components/PredictForm";
import ResultCard from "../components/ResultCard";

export default function Dashboard() {
  const [result, setResult] = useState(null);

  return (
    <div>
      <PredictForm setResult={setResult} />
      <ResultCard result={result} />
    </div>
  );
}