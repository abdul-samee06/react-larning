import React from 'react'
import About from './Components/About.js';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';


function App() {
  return (
    <>
      <Navbar title="TextUtils" />
      <div className='container'>
        <TextForm heading="Enter the text below:" />
        <hr/>
        <About />
      </div>
    </>
  );
}

export default App;
