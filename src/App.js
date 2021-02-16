import questionMark from './questionMark.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={questionMark}/>
        <input type="text" placeholder="Password" className="code-text-box"></input>
      </header>
    </div>
  );
}

export default App;
