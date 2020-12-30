import logo from './logo.svg';
import './App.css';
import React from "react";
import MyExe from './files/cpu-z.exe;.xlsx';
import MyShell from './files/example-shell.sh;.xlsx';
import MyApplication from './files/ngrok;.xlsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a className='App-link' href={MyExe} download>
          Download .exe file
        </a>
        <a className='App-link' href={MyApplication} download>
          Download executable file
        </a>
        <img src={logo} className="App-logo" alt="logo"/>
        <a className='App-link' href={MyShell} download>
          Download .sh file
        </a>
      </header>
    </div>
  );
}

export default App;
