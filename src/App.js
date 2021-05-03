import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header';

function App() {
  return (
    <Router>
    <>
      <Switch>
        <Route exact path="/">
          <Header />
          <Home />
        </Route>
      </Switch>
    </>
  </Router>
  );
}
function Home() {
  return <h2>This is the homepage</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
export default App;
