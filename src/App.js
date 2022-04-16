import logo from './logo.svg';
import meme from './meme.jpg';
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         <img src={meme} className="App-meme" alt="meme"/>  
        </p>
      </header>
    </div>
  );
}

export default App;
