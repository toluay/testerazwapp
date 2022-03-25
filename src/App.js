import logo from './logo.svg';
import './App.css';

function App() {
  console.log(`AUTH0_ID: ${process.env.AUTH0_ID}`);
  console.log(`AUTH0_SECRET: ${process.env.AUTH0_SECRET}`);
  console.log('All environment variables');
  console.log(process.env);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
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
