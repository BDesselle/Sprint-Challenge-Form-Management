import React from "react";
import ReactDOM from "react-dom";
import * as tl from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";
import App from "./App";
/* import DataList from "./components/DataList";
import Navigation from "./components/Navigation";
import RegForm from "./components/RegForm"; */

/* it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
}); */

describe("App Component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe("Name", () => {
  it("Does", () => {
    /* test */
  });
});
