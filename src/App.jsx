import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import NameList from './NameList';


const names =[
  {id:0 , name:"John"},
  {id:1 , name:"Jane"},
  {id:2 , name:"Alice"},
  {id:3 , name:"Bob"},
  {id:4 , name:"Eve"},
  {id:5 , name:"Same"},
  {id:6 , name:"James"},
  {id:7 , name:"Alex"},


];

function App() {

  const[count,setCount] = useState(0);
  const [reverseCount,setReverseCount] = useState(100); 

  const getNames = ()=>{
    return names[count];
  }
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          <h3>count = {count}</h3>
          
               
        </p>
        <button onClick ={()=>setCount(count+1)}><h2>_+_</h2></button>
        <br/>
        <NameList getNames={getNames}/>
        <br/>
        <h3>Reverse count = {reverseCount}</h3>
        <button onClick ={()=>setReverseCount(reverseCount-1)}><h2>_-_</h2></button>
        {/* {getNames().name} */}
        
        
      </header>
    </div>
  );
}

export default App;
