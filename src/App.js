// src/App.js
import { AmazonButton } from './AmazonButton';
import './App.css';
import { Button, TextField,Rating} from '@mui/material'
import StateDemo from './StateDemo';
import ColorChangeWithState from './ColorChangeWithState';
import HideShow from './HideShow';
import ToggleButton from './ToggleButton';
import CustomAttributes from './CustomAttributes';

function App() {
  const fruits = ["Mango", "Banana", "Kiwi", "Grapes"]
  return (
    <div className="App">
      <CustomAttributes/>
    </div>
  );
}

export default App;
