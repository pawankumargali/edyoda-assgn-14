import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Accounts from './components/Accounts/Accounts';
import AddProduct from './components/AddProduct/AddProduct';
import Navbar from './components/Navbar';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Switch>
          <Route path="/" exact component={Accounts} />
          <Route path="/product/add" exact component={AddProduct} />
          <Route path="/login" exact component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
