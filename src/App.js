import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Header from './components/header/header';
import Movies from './pages/movies/movies';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/movietime"
            component={() => <Movies />}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
