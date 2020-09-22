import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Accounts from './components/Accounts/Accounts';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Switch>
          <Route path="/" exact component={Accounts} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
