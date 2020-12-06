import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import GlobalStateProvider from './store/GlobalStateProvider';
import HomePage from './containers/HomePage/';
import GameBoard from './containers/GameBoard/';
function App() {
  return (
    <BrowserRouter>
      <GlobalStateProvider>
        <div className="App">
          <div className="App-container">
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/gameboard" component={GameBoard} />
              <Redirect to="/" />
            </Switch>
          </div>
        </div>
      </GlobalStateProvider>
    </BrowserRouter>
  );
}

export default App;
