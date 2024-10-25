import { useState } from "react";
import Square from "./board-button/button";
import PropTypes from "prop-types";

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  function handleClick(i) {
    if (squares[i]) {
      return; // Skip if square is already filled
    }
    // Logic to handle clicking on square
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares); // Update squares state with new array
    setXIsNext(!xIsNext); // Switch turn between X and O
  }

  return (
    <>
      <div className="text-center p-5 bg-green-400">
        <p>Welcome to the Tic-Tac-Toe Game!</p>
      </div>

      <br />

      <div className="bg-green-200 rounded-md">
        <div className="flex justify-center">
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>

        <div className="flex justify-center">
          <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>

        <div className="flex justify-center">
          <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
      </div>
    </>
  );
}
Square.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // Expect either string or number
};

export default App;
