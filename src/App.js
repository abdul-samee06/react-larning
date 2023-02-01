import React,{useState} from 'react'
// import About from './Components/About.js';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';


function App() {

  const [mode, setMode] = useState("light");

  const toggleMode =() =>{
    if(mode === 'light'){
      document.body.style.backgroundColor= 'black';
      setMode("dark");
    }
    else { 
      document.body.style.backgroundColor = 'white';
      setMode("light");
     }
  }
 

  return (
    <>
      <Navbar title="TextUtils" mode={mode} clicked={toggleMode} />
      <div className='container'>
        <TextForm heading="Enter the text below:" mode={mode}/>
        {/* <hr/>
        <About /> */}
      </div>
    </>
  );
}

export default App;
