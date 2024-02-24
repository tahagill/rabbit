import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          welcome to rabbit. we wil do some amazing stuff over here 
        </p>
        <a
          className="App-link"
          href="https://taupe-dolphin-5d5dc8.netlify.app"
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
