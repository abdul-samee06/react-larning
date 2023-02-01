import React,{useState} from 'react'
import Alert from './Components/Alert';
// import About from './Components/About.js';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';


function App() {

  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const toggleMode =() =>{
    if(mode === 'light'){
      document.body.style.backgroundColor= 'black';
      setMode("dark");
      showAlert("Dark Mode Enabled","success");
    }
    else { 
      document.body.style.backgroundColor = 'white';
      setMode("light");
      showAlert("Light Mode Enabled","success");

     }
  }

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    });

    setTimeout(()=>{
      setAlert(null);
    },1500);
  }
 

  return (
    <>
      <Navbar title="TextUtils" mode={mode} clicked={toggleMode} />
      <Alert alert={alert} />
      <div className='container'>
        <TextForm heading="Enter the text below:" showAlert={showAlert} mode={mode}/>
        {/* <hr/>
        <About /> */}
      </div>
    </>
  );
}

export default App;
