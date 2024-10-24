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
          <Square value="1" />
          <Square value="2" />
          <Square value="3" />
        </div>

        <div>
          <Square value="4" />
          <Square value="5" />
          <Square value="6" />
        </div>

        <div>
          <Square value="7" />
          <Square value="8" />
          <Square value="9" />
        </div>
      </div>
    </>
  );
}

export default App;

