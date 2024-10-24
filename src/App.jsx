import Square from "./board-button/button";

function App() {
  return (
    <>
      <div className="text-center p-5 bg-green-400">
        <p>Welcome to the Tic-Tac-Toe Game!</p>
      </div>

      <br />

      <div className="text-center">
        <div>
          <Square />
          <Square />
          <Square />
        </div>

        <div>
          <Square />
          <Square />
          <Square />
        </div>

        <div>
          <Square />
          <Square />
          <Square />
        </div>
      </div>
    </>
  );
}

export default App;

