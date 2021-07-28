import logo from './logo.svg';
import {BrowserRouter as Router , Switch,Route} from 'react-router-dom'
import React from 'react';
import News  from './Components/newsScreen'
import Error  from './Components/errorPage'
import Video from './Components/videoScreen'
import "./App.css";
import AppRouting  from "./app-routing";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers';
import promiseMiddleware from 'redux-promise';


const createStoreWithMW = applyMiddleware(promiseMiddleware)(createStore);
function App() {
  return (
    <Provider store={createStoreWithMW(rootReducer)}>
    <AppRouting/>
 
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
    </Provider>
  );
}

export default App;
