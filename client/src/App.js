import React from "react";
import AppNavbar from "./components/AppNavbar";
import ToDoList from "./components/ToDoList";

import { Provider } from "react-redux";
import store from "./store";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppNavbar />
        <ToDoList />
      </div>
    </Provider>
  );
}

export default App;
