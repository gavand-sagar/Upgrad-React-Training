// src/App.js
import { AmazonButton } from './AmazonButton';
import './App.css';
import { Button, TextField,Rating} from '@mui/material'
import StateDemo from './StateDemo';

function App() {
  const fruits = ["Mango", "Banana", "Kiwi", "Grapes"]
  return (
    <div className="App">
      <StateDemo/>
    </div>
  );
}

export default App;
