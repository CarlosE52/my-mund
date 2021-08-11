import logo from './assets/logo-2c.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-box">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Curso React
        </p>
        <a
          className="App-link"
          href="https://discord.gg/YcKJGQnK"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
