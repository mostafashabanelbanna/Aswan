import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router , Switch,Route} from 'react-router-dom'
import React from 'react';
import News  from './Components/newsScreen'
import Error  from './Components/errorPage'
import Video from './Components/videoScreen'

function App() {
  return (
    <Router>
      <Switch >
      <Route path='/video' exact>
        <Video />
      </Route>
      <Route path='/' exact>
        <News />
      </Route>
      <Route  path='*'>
        <Error />
      </Route>
      </Switch>
    </Router>
  );
}

export default App;
