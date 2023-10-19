import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


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
      showAlert("Dark Mode has been enabled","success");
    }
    else{
      setMode("light")
      document.body.style.backgroundColor="white"
      document.body.style.color="black"
      showAlert("Light Mode has been enabled","success");
  }
  }
  return (
   <>
   <Router>
      <Navbar titles="WordWizard" mode={mode} toggleMode={toggleMode} showAlert={showAlert}/>
      <Alert alert={alert}/>
      <Routes>
          <Route path="/about" element={<About mode={mode} toggleMode={toggleMode}/>}/>
  
          <Route path="/" element={
            <TextForm headinxg="Enter the text to analyse" mode={mode} toggleMode={toggleMode} showAlert={showAlert}/> }/>
            
        </Routes>
      </Router>
   </>
  );
}
export default App;