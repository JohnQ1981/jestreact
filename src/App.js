import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
//import Button from './components/Button';

function App() {
  const [buttonColor, setButtonColor] = useState('red');
  const newButtonColor = buttonColor ==='red'?'blue':'red';
  return (
    <div className="App">
     Learn React
     <hr></hr>
     
      <div> <button style={{backgroundColor: buttonColor}} 
      onClick={()=> setButtonColor(newButtonColor)}
      >
      Change to {newButtonColor} 
      
      </button></div>
    </div>
  );
}

export default App;
