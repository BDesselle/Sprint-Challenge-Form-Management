import React from "react";
import RegForm from "./components/RegForm";
import Navigation from "./components/Navigation";
import DataList from "./components/DataList";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

function App() {
  // eslint-disable-next-line
  const [token, setToken] = useLocalStorage("token");
  return (
    <div data-testid="app-container" className="App">
      <Navigation />
      <Router>
        <Route
          exact
          path="/"
          render={props => <RegForm setToken={setToken} />}
        />
        <Route exact path="/data" component={DataList} />
      </Router>
    </div>
  );
}

export default App;
