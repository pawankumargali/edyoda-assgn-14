import React from 'react';
import { BrowserRouter as Router,  Switch } from 'react-router-dom';
import PrivateRoute from './components/Routes/PrivateRoute';
import LoggedInRedirect from './components/Routes/LoggedInRedirect';
import Accounts from './components/Accounts/Accounts';
import AddProduct from './components/AddProduct/AddProduct';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Products from './components/Products';
import Dashboard from './components/Dashboard/Dashboard';
import Footer from './components/Footer';

function App() {

  return (
    <div className="App">  
      <Router>
        <Navbar />
        <Switch>
          <PrivateRoute path="/" exact Component={Dashboard} />
          <PrivateRoute path="/accounts" exact Component={Accounts}  />
          <PrivateRoute path="/products" exact Component={Products} />
          <PrivateRoute path="/product/add" exact Component={AddProduct} /> 
          <LoggedInRedirect path="/login" exact Component={Login} />
        </Switch>
        <Footer />
      </Router>
     
    </div>
  );
}

export default App;
