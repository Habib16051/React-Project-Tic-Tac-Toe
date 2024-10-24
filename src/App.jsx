import { useState } from "react";
import Square from "./board-button/button";

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  return (
    <>
      <div className="text-center p-5 bg-green-400">
        <p>Welcome to the Tic-Tac-Toe Game!</p>
      </div>

      <br />

      <div className="bg-green-200 rounded-md">
        <div className="flex justify-center">
          <Square value={squares[0]} />
          <Square value={squares[1]} />
          <Square value={squares[2]} />
        </div>

        <div className="flex justify-center">
          <Square value={squares[3]} />
          <Square value={squares[4]} />
          <Square value={squares[5]} />
        </div>

        <div className="flex justify-center">
          <Square value={squares[6]} />
          <Square value={squares[7]} />
          <Square value={squares[8]} />
        </div>
      </div>
    </>
  );
}

export default App;

