import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {

  const REST_API_URL = 'http://172.18.0.3:4000/data';
  const [data, setData] = useState(" ");

  fetch(REST_API_URL, {
      method: 'GET',
      mode: 'no-cors',
    }).then(res => {
      return res.json()
    }).then(res => setData(res));
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            { data }
        </p>
      </header>
    </div>
  );
}

export default App;
