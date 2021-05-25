import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'


import './App.css';

import Header from './components/header/header';

import Movies from './pages/movies/movies';

export const TestContext = React.createContext();

function App() {
  const [open, setOpen] = React.useState(false)

  const handleDrawerOpen = (value) =>{
    setOpen(value);
  }

  const handleDrawerClose = (value) =>{
    setOpen(value);
  }

  return (
    <div className="App">
      <Header handleDrawerOpen={handleDrawerOpen} open={open}></Header>
      <BrowserRouter>
      <TestContext.Provider value={{ handleDrawerClose,open }}>

        <Switch>
          <Route
            exact
            path="/"
            component={() => <Movies />}
          />
        </Switch>
        </TestContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
