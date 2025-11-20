// src/App.js
import { AmazonButton } from './AmazonButton';
import './App.css';
import { Button, TextField, Rating } from '@mui/material'
import StateDemo from './StateDemo';
import ColorChangeWithState from './ColorChangeWithState';
import HideShow from './HideShow';
import ToggleButton from './ToggleButton';
import CustomAttributes from './CustomAttributes';
import CustomEvents from './CustomEvents';
import ListAndStates from './ListAndStates';
import UseEffectBasics from './UseEffectBasics';
import UseRefDemo from './UseRefDemo';
import UseRefForForms from './UseRefForForms';
import ControlledForm from './ControlledForm';
import ReactHookForm from './ReactHookForm';
import ReactHookFormMUI from './ReactHookFormMUI';
import SimpleTodoApp from './SimpleTodoApp';
import { Link, Route, Router, Routes } from 'react-router-dom';

function App() {
  const routes = [
    {
      path: '/StateDemo',
      linkText: "State Demo",
      element: <StateDemo />
    },
    {
      path: '/SimpleTodoApp',
      linkText: "Simple Todo App",
      element: <SimpleTodoApp />
    },
    {
      path: '/ReactHookFormMUI',
      linkText: "React Hook Form MUI",
      element: <ReactHookFormMUI />
    },
  ]
  return (
    <div className="App">
      <nav>
        {
          routes.map(x => <Link to={x.path}><Button sx={{ margin: '5px' }} variant='contained'>{x.linkText}</Button></Link>)
        }
      </nav>
      <Routes>
        {
          routes.map(x => <Route path={x.path} element={x.element} />)
        }
      </Routes>
    </div>
  );
}

export default App;
