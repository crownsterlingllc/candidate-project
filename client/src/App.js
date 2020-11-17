import {useEffect} from 'react';
import logo from './logo.svg';
import {api} from './helpers/api';
import './App.css';

function App() {

  useEffect(()=>{
    let request = async () =>{
         try {
          const response = await api.health();
          console.log(response.data);
         }catch(err){
           console.log(err);
         }
    };
    request();
  },[]);

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
