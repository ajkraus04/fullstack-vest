import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-screen flex flex-col items-center justify-center">
      <div className="flex justify-center gap-8">
        <a href="https://vite.dev" target="_blank">
          <img
            src={viteLogo}
            className="h-24 p-6 hover:drop-shadow-xl transition-all"
            alt="Vite logo"
          />
        </a>
        <a href="https://react.dev" target="_blank">
          <img
            src={reactLogo}
            className="h-24 p-6 hover:drop-shadow-xl transition-all motion-safe:animate-spin-slow"
            alt="React logo"
          />
        </a>
      </div>
      <h1 className="text-4xl font-bold my-8">Vite + React</h1>
      <div className="justify-center items-center flex flex-col p-8 rounded-lg">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="rounded-lg bg-blue-600 px-5 py-2.5 font-semibold text-white hover:bg-blue-700 transition-colors"
        >
          count is {count}
        </button>
        <p className="mt-4 text-gray-600">
          Edit{" "}
          <code className="font-mono bg-gray-100 p-1 rounded">src/App.tsx</code>{" "}
          and save to test HMR
        </p>
      </div>
      <p className="text-gray-500 mt-8">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
