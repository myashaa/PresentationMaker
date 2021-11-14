import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import { addChangeHandler, dispatch, getEditor } from "./editor";
import { createPresentation } from "./model/editor/EditorActions";

dispatch(createPresentation, {});

function render() {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App editor={getEditor()} />
      </Provider>
    </React.StrictMode>,
    document.getElementById("root")
  );
}

addChangeHandler(render);
render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
