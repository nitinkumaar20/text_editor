
import "./App.css";
import Navbar from "./components/Navbar";
import TextFrom from "./components/TextFrom";
import Alert from "./components/Alert";


import React,{useState} from 'react'
import About from "./components/About";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



function App() {
  

  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);
  const [mystyle, setmystyle] = useState({color:"black",backgroundColor:"white", });

 const showalert = (message,type)=>{
 setalert({
   msg: message,
   typ: type,
 });
 setInterval(() => {
   setalert(null);
 }, 2500);
 }
 
  // palleter coading here

  const classremove = ()=>{
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-info');
    document.body.classList.remove('bg-warning');
  }
  const pallet =(cll)=>{
    // there are two wAYS FOR THIs one is to add boostrap classs other is internal css 
    classremove();
    document.body.classList.add('bg-'+ cll);
    // document.body.style.backgroundColor=(cll);
    
  }



 // dark mode coadind here----------------------------------->>
  // const [chtext, setchtext] = useState('Enable Dark Mode');
  const toggle= ()=>{
    classremove();
    
   
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor= '#1d2122';
      // setchtext('Enable Light mode')
      showalert(" Dark mode enable", "success");
      document.title= 'TextUtiles-Dark mode';
      setmystyle({color:"white",backgroundColor:"#212529",});  
    }
    
    else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
      // setchtext('Enable Dark Mode')
      showalert(" light mode enable", "success");
      document.title= 'TextUtiles';
      setmystyle({color:"black",backgroundColor:"white"});
    }



  }
  return (
  <>
 <Router>
    <Navbar sitname="Text-Editor" about="about" mode={mode} toggle={toggle} pallet={pallet}/>
    <Alert alert={alert}/>
      <Switch>
          <Route path="/about">
          <div className="container">
            <About mystyle={mystyle}/>
          </div>
          </Route>
         
          <Route path="/">
          <TextFrom heading="Enter The Text To Analyze" showalert={showalert} mode={mode}/>
          </Route>
      </Switch>
 </Router>
    
    
</>
  
  );
}

export default App;
