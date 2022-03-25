import logo from './logo.svg';
import { useEffect } from 'react';
import './App.css';

function App() {
  
  
  useEffect(() => {
     async function fetchData() {
        const response = await fetchSettings();
       setAppSettings(response);
     }
    
    fetchData();
    
    setInterval(() => {
        console.log('All environment variables');
        console.log(process.env);
    }, 5000)
  }, []);
  
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
