import Profiles from "./components/Profiles";
import { useState, useRef, useEffect } from "react";

function App() {
  const [count, setCount] = useState<number>(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  return (
    <div>
      <Profiles email="dan@gmail.com" username="dan" />
      <hr />

      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Plus
      </button>

      <hr />

      <input ref={inputRef} />
    </div>
  );
}

export default App;
