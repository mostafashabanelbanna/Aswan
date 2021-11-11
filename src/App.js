import React, { useEffect } from "react";
import "./App.css";
import AppRouting from "./app-routing";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./store/reducers";
import promiseMiddleware from "redux-promise";
import "./Styles/hover.css";
import rtl from "jss-rtl";
import { create } from "jss";
import {
  StylesProvider,
  jssPreset,
  createTheme,
  ThemeProvider,
} from "@material-ui/core/styles";

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
const theme = createTheme({
  direction: "rtl",
});

const createStoreWithMW = applyMiddleware(promiseMiddleware)(createStore);
function App() {
  window.addEventListener("load", function () {
    setTimeout(() => {
      document.querySelector("#preloader-active").style.transition = "0.8s";
      document.querySelector("#preloader-active").style.opacity = 0;
      document.querySelector("body").style.overflowX = "hidden";
    }, 150);
  });
  useEffect(() => {
    setTimeout(() => {
      document.querySelector("#preloader-active").style.transition = "1s";
      document.querySelector("#preloader-active").style.opacity = 0;
      document.querySelector("#preloader-active").style.display = "none";
      document.querySelector("body").style.overflowX = "hidden";
    }, 4000);
  }, []);
  return (
    <Provider store={createStoreWithMW(rootReducer)}>
      <StylesProvider jss={jss}>
        <ThemeProvider theme={theme}>
          <AppRouting />
        </ThemeProvider>
      </StylesProvider>
    </Provider>
  );
}

export default App;
