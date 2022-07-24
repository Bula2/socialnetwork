import MainApp from './App';
import React from "react";
import ReactDOM from "react-dom";

test('render without crashing', () => {
  const div = document.createElement("div");
  ReactDOM.render(<App/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
