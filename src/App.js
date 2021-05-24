import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'


import './App.css';

import Header from './components/header/header';

import Movies from './pages/movies/movies';

function App() {
  const [open, setOpen] = React.useState(false)

  const handleDrawerOpen = (value) =>{
    setOpen(value);
    console.log(value, ' open drawer')
  }

  const handleDrawerClose = (value) =>{
    setOpen(value);
    console.log(value, ' close drawer')
  }

  return (
    <div className="App">
      <Header handleDrawerOpen={handleDrawerOpen} open={open}></Header>
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            component={() => <Movies handleDrawerClose={handleDrawerClose} open={open}/>}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
