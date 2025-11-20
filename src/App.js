// src/App.js
import { AmazonButton } from './AmazonButton';
import './App.css';
import { Button, TextField, Rating } from '@mui/material'
import { Link, Route, Router, Routes } from 'react-router-dom';
import { routes } from './Routes';

function App() {

  return (
    <div className="App">
      <nav>
        {
          routes?.filter(x => x.linkText).map(x => <Link to={x.path}><Button sx={{ margin: '5px' }} variant='contained'>{x.linkText}</Button></Link>)
        }
      </nav>
      <hr />
      <br />
      <Routes>
        {
          routes?.map(x => <Route path={x.path} element={x.element} />)
        }
      </Routes>
    </div>
  );
}

export default App;
