// src/App.js
import { AmazonButton } from './AmazonButton';
import './App.css';
import { Button, TextField,Rating} from '@mui/material'

function App() {
  const fruits = ["Mango", "Banana", "Kiwi", "Grapes"]
  return (
    <div className="App">
      <Rating value={3}/>
      <br/>
      <TextField label="Username"/>
      <br/>
      <Button variant='contained'>Login</Button>
    </div>
  );
}

export default App;
