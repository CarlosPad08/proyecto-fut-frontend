import './App.css';
import Start from './pages/start/start';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import LoginForm from './components/loginForm/Loginform';
import RegisterForm from './components/registerForm/RegisterForm';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Start} />
        <Route path="/register" component={RegisterForm} />
        <Route path="/login" component={LoginForm} />
      </Switch>
    </Router>
  );
}

export default App;