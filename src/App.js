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
import Chat from './components/Chat';
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './firebase';
import Login from './components/Login';
function App() {

  const [user, loading] = useAuthState(auth)
  return (
    <Router>
      {!user ? (<Login/>) : (
        <>
          <Header />
          <AppBody>
            <Sidebar />
            <Switch>
              <Route exact path="/">
                <Chat />
              </Route>
            </Switch>
          </AppBody>

        </>
      )}

    </Router>
  );
}

export default App;

const AppBody = styled.div`
display: flex;
height: 100vh;
`