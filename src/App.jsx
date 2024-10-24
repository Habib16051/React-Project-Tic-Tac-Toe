import Square from "./board-button/button";

function App() {
  return (
    <>
      <div className="text-center p-5 bg-green-400">
        <p>Welcome to the Tic-Tac-Toe Game!</p>
      </div>

      <br />

      <div className="bg-green-200 rounded-md">
        <div className="flex justify-center">
          <Square />
          <Square />
          <Square />
        </div>

        <div className="flex justify-center">
          <Square />
          <Square />
          <Square />
        </div>

        <div className="flex justify-center">
          <Square />
          <Square />
          <Square />
        </div>
      </div>
    </>
  );
}

export default App;

