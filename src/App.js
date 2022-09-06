import './App.css';
import { useState } from 'react';
//import Button from './components/Button';

function App() {
  const [buttonColor, setButtonColor] = useState('red');
  const newButtonColor = buttonColor ==='red'?'blue':'red';
  const [disabled, setDisabled]= useState(false);
  

  return (
    <div className="App">
     Learn React
     <hr></hr>
     
      <div> <button style={{backgroundColor: buttonColor}} 
      onClick={()=> setButtonColor(newButtonColor)}
      disabled={disabled}
      >
      Change to {newButtonColor} 
      
      </button></div>
          <input type = "checkbox" 
          id="disable-button-checkbox"
          defaultChecked={disabled}
          aria-checked ={disabled}
          onChange ={(e)=> setDisabled(e.target.checked)}          
           />
           <label htmlFor='disable-button-checkbox'>Disable button</label> 
    </div>
  );
}

export default App;
