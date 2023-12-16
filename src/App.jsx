import "./App.css";
import Board from "./components/Board";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* 盤面作成 */}
        <div className="board">
          <Board />
        </div>

        {/* リード文 */}
        <p>Tic Tac Toe Project from Official Tutorial</p>

        {/* Tutorialへのリンク */}
        <a
          className="App-link"
          href="https://ja.react.dev/learn/tutorial-tic-tac-toe"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source of the Project
        </a>
      </header>
    </div>
  );
}

export default App;
