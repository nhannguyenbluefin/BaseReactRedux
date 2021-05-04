import React from "react";
import {Provider} from "react-redux";
import store from "./redux/store"

import './App.scss';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      </div>
    </Provider>
  );
}

export default App;
