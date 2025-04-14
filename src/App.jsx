import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const names =[
  {id:0 , name:"John"},
  {id:1 , name:"Jane"},
  {id:2 , name:"Alice"},
  {id:3 , name:"Bob"},
  {id:4 , name:"Eve"},

];

function App() {

  const[count,setCount] = useState(0);

  const getNames = ()=>{
    return names[count];
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <h3>count = {count}</h3>         
        </p>
        {/* {getNames().name} */}
        
      </header>
    </div>
  );
}

export default App;
