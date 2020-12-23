import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";

function App() {
  const [preview, setPreview] = useState('');

  const handleChange = (e) => {
    if (preview) {
      URL.revokeObjectURL(preview);
    }
    const file = e.target.files[0];
    setPreview(URL.createObjectURL(file))
    
    const link = document.getElementById('link');
    link.download = file.name; // this name is used when the user downloads the file
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <input accept="text/plain" type="file" id="upload"
               onChange={handleChange}/>
        <a className='App-link' href={preview} id='link' download>
          link to your file (upload a file first)
        </a>
        <br/>
        <a className='App-link' href='/demo.html;.txt' download>
          link to example file
        </a>
      </header>
    </div>
  );
}

export default App;
