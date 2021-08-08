import React from 'react';
import "./App.css";
import AppRouting  from "./app-routing";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './store/reducers';
import promiseMiddleware from 'redux-promise';


const createStoreWithMW = applyMiddleware(promiseMiddleware)(createStore);
function App() {
  return (
    <Provider store={createStoreWithMW(rootReducer)}>
    <AppRouting/>
    </Provider>
  );
}

export default App;
