import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Accounts from './components/Accounts/Accounts';
import AddProduct from './components/AddProduct/AddProduct';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Switch>
          <Route path="/" exact component={Accounts} />
          <Route path="/product/add" exact component={AddProduct} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
