import React from 'react'
import Home from './scss/Home';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import LoginPage from './scss/components/Login-Page/login-page';

export default function App() {
  return (
    <Router>
    <div className="App">
        <LoginPage/>
        <Home/>
    </div>
     </Router>
  )
}
