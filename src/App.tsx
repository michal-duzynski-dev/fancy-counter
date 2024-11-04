import { useEffect, useState } from "react";
import ButtonContainer from "./components/ButtonContainer";
import ResetButton from "./components/ResetButton";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    if (count < 5) {
      setCount(count + 1);
    }
  };
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const resetCnt = () => setCount(0);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === "Space") {
        increment();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [count]);

  return (
    <>
      <main>
        <div className={`card ${count > 4 ? "card--limit" : ""} `}>
          <div className="title">
            {count < 5 ? "Fancy Counter" : "LIMIT! BUY PRO FOR > 5"}
          </div>
          <div className="count">{count}</div>
          <ResetButton resetFunction={resetCnt} />
          <ButtonContainer
            addFunction={increment}
            subtractFunction={decrement}
          />
        </div>
      </main>
    </>
  );
}

export default App;
