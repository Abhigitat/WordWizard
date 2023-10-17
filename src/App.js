import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';


function App() {
  const [mode,setMode]=useState(`light`);

  const [alert, setalert] = useState(null);

  const showAlert=(message,type)=>{
    setalert({
      message:message,
      type:type
    })
    setTimeout(()=>setalert(null),1000)
  }

  const toggleMode=()=>{
    if(mode==="light"){
      setMode("dark")
      document.body.style.backgroundColor="black"
      document.body.style.color="white"
    }
    else{
      setMode("light")
      document.body.style.backgroundColor="white"
      document.body.style.color="black"
      }
  }
  return (
   <>
      <Navbar titles="WordWizard" mode={mode} toggleMode={toggleMode} showAlert={showAlert}/>
      <Alert alert={alert}/>
      <TextForm heading="Enter the text to analyse" mode={mode} toggleMode={toggleMode} showAlert={showAlert}/> 
      {/* <About/> */}
   
   </>
  );
}

export default App;