import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import styled from 'styled-components'
function App() {
  return (
    <Router>
      <>
        <Header />
        <AppBody>
          <Sidebar/>
          <Switch>
            <Route exact path="/">
              {/* chat */}
            </Route>
          </Switch>
        </AppBody>

      </>
    </Router>
  );
}

export default App;

const AppBody = styled.div`
display: flex;
height: 100vh;
`