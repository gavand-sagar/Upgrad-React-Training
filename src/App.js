// src/App.js
import { AmazonButton } from './AmazonButton';
import './App.css';
import { Button, TextField,Rating} from '@mui/material'
import StateDemo from './StateDemo';
import ColorChangeWithState from './ColorChangeWithState';
import HideShow from './HideShow';

function App() {
  const fruits = ["Mango", "Banana", "Kiwi", "Grapes"]
  return (
    <div className="App">
      <HideShow/>
    </div>
  );
}

export default App;
